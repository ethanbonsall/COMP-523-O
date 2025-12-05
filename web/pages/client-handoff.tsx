import Navbar from "@/components/navbar";
import Head from "next/head";

const ClientHandoff = () => {
  return (
    <>
      <Head>
        <title>Client Handoff Document</title>
      </Head>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 p-6 md:p-12">
        <div className="max-w-5xl mx-auto space-y-10">
          <section className="text-center">
            <h1 className="text-4xl font-bold mb-4">Client Handoff Document</h1>
            <p className="text-lg text-gray-600">
              Ensuring that a working project is delivered to the client in a
              way that the client will be able to make good use of.
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-2xl p-6 md:p-10 space-y-6">
            <h2 className="text-2xl font-semibold">Accessing the Project</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p>
                  Our project is publicly accessible through the
                  https://www.pediatricbluebook.com/ link. This link takes the
                  client directly to the live, deployed version of the Pediatric
                  Blue Book web application.
                </p>
                <br></br>
                <h3 className="font-semibold text-xl mb-2">
                  Accessing the Project Locally
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Before downloading or running the project locally, please
                    install the following tools:{" "}
                    <a href="https://code.visualstudio.com/ ">
                      Visual Studio Code
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://git-scm.com/install/ 
"
                    >
                      Git
                    </a>
                    .
                  </li>
                  <li>Open Visual Studio Code</li>
                  <li>Open the built-in Terminal (View → Terminal)</li>
                  <li>
                    Run the following commands:
                    <pre className="whitespace-pre-wrap bg-gray-100 rounded-md p-3 text-sm font-mono">
                      git clone
                      https://github.com/ethanbonsall/Pediatric-Blue-Book.git
                    </pre>
                    <br></br>
                    <pre className="whitespace-pre-wrap bg-gray-100 rounded-md p-3 text-sm font-mono">
                      cd pediatric-blue-book
                    </pre>
                    <br></br>
                    <pre className="whitespace-pre-wrap bg-gray-100 rounded-md p-3 text-sm font-mono">
                      cd web
                    </pre>
                    <br></br>
                    <pre className="whitespace-pre-wrap bg-gray-100 rounded-md p-3 text-sm font-mono">
                      npm install --f
                    </pre>
                  </li>
                  <li>
                    To launch the site on your machine:
                    <pre className="whitespace-pre-wrap bg-gray-100 rounded-md p-3 text-sm font-mono">
                      npm run dev
                    </pre>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">
                  Accessing the Database and Deployment Systems
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    The project uses Supabase to store all pediatric content,
                    authentication data, and user submissions.
                  </li>
                  <li>
                    The client will receive full admin access to the Supabase
                    project. They will be guided on initializing the Supabase
                    client in VSCode using the project’s URL and public API key.
                  </li>
                  <li>
                    The live website is hosted on Vercel. The client will
                    receive full administrative access to the Vercel project. A
                    team member will walk the client through passing over Vercel
                    access over a Zoom call.
                  </li>
                </ul>
              </div>
              <div>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    The system is a web-based application deployed on Vercel,
                    built with React, HTML, CSS, and Next.js, and the backend
                    database is managed by Supabase.
                  </li>
                  <li>
                    Ownership of the Github repo, Vercel deployment, Supabase
                    backend, and domain name will be transferred to the client.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Future Costs</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    In order to keep the web application online, the client will
                    have to continue to pay to keep their rights to the domain
                    name.
                  </li>
                  <li>
                    If the client wants additional features, design changes, or
                    long-term support, there may be costs for hiring developers.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Video</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    We will provide a series of videos to walk the client and
                    any future users through accessing the website, setting up
                    an account, and using each of the features.
                  </li>
                  <li>
                    These videos will be linked into our project website and
                    actual project, as well as emailed to our client.
                  </li>
                </ul>
                <br></br>
                <h3 className="font-semibold text-xl mb-2">
                  Setup and Access Tutorials
                </h3>
                <div>
                  <div className="aspect-video w-full rounded-xl border border-secondary overflow-hidden bg-black">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/KZwxkvKQLs0"
                      title="Supabase Walkthrough"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <br></br>
                  <div className="aspect-video w-full rounded-xl border border-secondary overflow-hidden bg-black">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/zDgcgb6UoaA"
                      title="Accessing Github and Running Project Locally"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">
                  Feature Tutorials
                </h3>
                <div>
                  <div className="aspect-video w-full rounded-xl border border-secondary overflow-hidden bg-black">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/mPZxNlJwaKs"
                      title="Tutorial Video Placeholder"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <br></br>
                  <div className="aspect-video w-full rounded-xl border border-secondary overflow-hidden bg-black">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/Vuzyvqxmgw4"
                      title="Admin Tutorial Video Placeholder"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <br></br>
                  <div className="aspect-video w-full rounded-xl border border-secondary overflow-hidden bg-black">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/HL-k6-J4YvE"
                      title="Superuser Tutorial Video Placeholder"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default ClientHandoff;
