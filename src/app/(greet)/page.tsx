import NavLink from "@/components/ui/links/navLink";

export default function Home() {
  return (
    <div>
      <main>
        <NavLink href="issues">Current issues</NavLink>
        <NavLink href="user">Get started</NavLink>
      </main>
    </div>
  );
}
