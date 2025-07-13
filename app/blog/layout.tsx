// app/blog/layout.tsx

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    
      <main className="mt-20">{children}</main>
    </>
  );
}
