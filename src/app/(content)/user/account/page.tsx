"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function page() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect after rendering the component
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/user");
    }
  }, [status, router]);

  //   Handle logging out
  const handleLogout = async () => {
    await signOut();
    router.push("/user");
  };
  return (
    <main>
      <div>User account</div>
      <button onClick={handleLogout}>Logout</button>
    </main>
  );
}

export default page;
