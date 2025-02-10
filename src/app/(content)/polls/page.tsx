import { getServerSession } from "next-auth";

async function Polls() {
  const session = await getServerSession();
  return <main>Polls</main>;
}

export default Polls;
