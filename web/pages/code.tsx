import Navbar from "@/components/navbar";
import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>Code</title>
      </Head>
      <Navbar />
      <main className="flex flex-col min-h-screen items-center justify-center bg-background text-center">
        <a
          href="/Pediatric-Blue-Book-main.zip"
          download="Pediatric-Blue-Book-main.zip"
          className="text-4xl font-bold text-text hover:text-text-700 transition-colors"
        >
          Download Code
        </a>
        <Link
          href="https://github.com/ethanbonsall/Pediatric-Blue-Book"
          className="text-4xl font-bold text-text hover:text-text-700 transition-colors"
        >
          GitHub
        </Link>
      </main>
    </>
  );
};

export default Home;
