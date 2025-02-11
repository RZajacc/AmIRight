"use server";
import { FormState, SignupFormSchema } from "@/lib/definitions";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export async function signup(state: FormState, formData: FormData) {
  // Validate form data with Zod
  const validatedFields = SignupFormSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm: formData.get("confirm"),
  });

  // If validation fail return errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Prepare all variables
  const { username, email, password } = validatedFields.data;

  // Connect to the DB
  await dbConnect();

  // Encrypt the password
  const hashedPsw = await bcrypt.hash(password, 10);

  // Check if email is already registered
  try {
    const user = await User.find({ email: email });
    if (user.length !== 0) {
      return {
        message: "This email is already in use!",
      };
    }
  } catch (error) {
    console.log(error);
  }

  // Create a user in the DB
  try {
    const user = await User.create({
      name: username,
      email: email,
      password: hashedPsw,
    });
    if (user) {
      return {
        message: "Registration successfull!",
      };
    }
  } catch (error) {
    console.log(error);
  }
}
