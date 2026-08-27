import BlueprintFooter from "./blueprint-footer";
import Nav from "./nav";
import QuadrantCursor from "./quadrant-cursor";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen bg-obsidian text-white">
      <QuadrantCursor />
      <Nav />
      <main>{children}</main>
      <BlueprintFooter />
    </div>
  );
}
