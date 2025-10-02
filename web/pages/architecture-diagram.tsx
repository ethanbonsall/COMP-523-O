import BottomBar from "@/components/bottombar";
import Navbar from "@/components/navbar";
import Head from "next/head";

const ArchitectureDiagram = () => {
  return (
    <>
      <Head>
        <title>Architecture Diagram</title>
      </Head>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 p-6 md:p-12">
        <div className="max-w-5xl mx-auto space-y-10">
          
          <section className="text-center">
            <h1 className="text-4xl font-bold mb-4">
            Architecture Diagram
            </h1>
            <p className="text-lg text-gray-600">
              Visual representation of the major components of our system and how those components are related and interact.
            </p>
            <br></br>
            <p className = "font-bold"> Client-Server System</p>
            <br></br>
            <img src = "/images/Arch_DiagramV0.jpg" alt = "Architecture Diagram"></img>
          </section>
          </div>
</main>
    <BottomBar />
    </>
  );
};

export default ArchitectureDiagram;
