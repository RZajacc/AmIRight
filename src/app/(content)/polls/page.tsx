import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function Polls() {
  // Get user session
  // const session = await getServerSession();
  // If session is not available then redirect the user
  // if (!session?.user) {
  //   redirect("/user");
  // }

  return <main>Polls</main>;
}

export default Polls;
