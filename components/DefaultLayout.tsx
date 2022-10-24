import Navbar from "./Navbar";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="container mx-8">{children}</main>
    </>
  );
}
