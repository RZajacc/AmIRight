import { FormState, SignupFormSchema } from "@/lib/definitions";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export async function signup(state: FormState, formData: FormData) {
  const validatedFields = SignupFormSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm: formData.get("confirm"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  // await dbConnect();
  // If succeded
  // await User.create(validatedFields.data);
}
