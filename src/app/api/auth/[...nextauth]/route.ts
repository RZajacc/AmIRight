import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcrypt";
import UserModel from "@/models/User";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        // Connect to the database
        await dbConnect();

        // Find user
        const user = await UserModel.findOne({
          email: credentials?.email,
        });

        // If user doesnt exist return an error
        if (!user) {
          throw new Error("User with provided email not found");
        }

        // Check if passwords match
        const psw = await bcrypt.compare(credentials!.password, user.password);

        // If password doesnt match, retrun error
        if (!psw) {
          throw new Error("Wrong password!");
        }

        console.log("USER IN AUTH", user);

        // If no error and we have user data, return it
        if (user && psw) {
          return user;
        }

        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/user",
  },
});

export { handler as GET, handler as POST };
