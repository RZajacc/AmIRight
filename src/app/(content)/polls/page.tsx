import { getServerSession } from "next-auth";

async function Polls() {
  const session = await getServerSession();
  console.log(session?.user);
  return <main>Polls</main>;
}

export default Polls;
