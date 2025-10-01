import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>Pediatric Blue Book</title>
      </Head>
      <main className="flex min-h-screen items-center justify-center bg-background text-center">
        <Link
          href="https://www.pediatricbluebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl font-bold text-text hover:text-text-700 transition-colors"
        >
          Prototype
        </Link>
      </main>
    </>
  );
};

export default Home;
