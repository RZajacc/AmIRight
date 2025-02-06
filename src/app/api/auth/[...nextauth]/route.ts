import NextAuth from "next-auth";
import client from "@/lib/mongoDB";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

const handler = NextAuth({
  adapter: MongoDBAdapter(client),
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
        const user = await User.findOne({ email: credentials?.email });
        // If user doesnt exist return an error
        if (!user) {
          throw new Error("User with provided email not found");
        }

        // If no error and we have user data, return it
        if (user) {
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
