// app/blog/layout.tsx
import Navbar from "@/app/ui/nav-bar";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    
      <main>{children}</main>
    </>
  );
}
