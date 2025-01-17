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

  // Connect to the DB
  await dbConnect();

  // Encrypt the password
  const hashedPsw = await bcrypt.hash(validatedFields.data.password, 10);

  // Create a user in the DB
  try {
    await User.create({
      name: validatedFields.data.username,
      email: validatedFields.data.email,
      password: hashedPsw,
    });
  } catch (error) {
    console.log(error);
  }

  // redirect("/");
}
