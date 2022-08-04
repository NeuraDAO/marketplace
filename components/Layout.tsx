import Head from "next/head";
import Navbar from "./navbar";

interface LayoutProps {
  children?: React.ReactNode;
  title: string;
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
