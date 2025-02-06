import client from "@/lib/mongoDB";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";

const handler = NextAuth({
  adapter: MongoDBAdapter(client),
  providers: [],
});

export { handler as GET, handler as POST };
