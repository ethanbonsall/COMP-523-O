import Navbar from "@/components/navbar";
import Head from "next/head";

const PlatformEvaluation = () => {
  return (
    <>
      <Head>
        <title>Development Platform Evaluation</title>
      </Head>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 p-6 md:p-12">
        <div className="max-w-5xl mx-auto space-y-10">
          
          <section className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Development Platform Evaluation
            </h1>
            <p className="text-lg text-gray-600">
              Alternatives considered, final selections, and justification for
              our development stack.
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-2xl p-6 md:p-10 space-y-6">
            <h2 className="text-2xl font-semibold">Phase 1: Alternatives Considered</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-xl mb-2">Programming Languages</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>JavaScript/TypeScript:</strong> Widely used, strong ecosystem.</li>
                  <li><strong>Python:</strong> Great for data-heavy apps, less seamless frontend.</li>
                  <li><strong>Java:</strong> Enterprise-grade, but heavy for our use case.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Frontend Technologies</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>React / Next.js:</strong> Fast, flexible, SSR/SSG support.</li>
                  <li><strong>Angular:</strong> Structured, but steep learning curve.</li>
                  <li><strong>Vue.js:</strong> Lightweight, smaller ecosystem.</li>
                  <li><strong>Plain HTML/CSS/JS:</strong> Simple but not scalable.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Backend Technologies</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Supabase:</strong> Free tier, PostgreSQL, authentication, easy setup.</li>
                  <li><strong>Firebase:</strong> Strong realtime, but NoSQL and costly scaling.</li>
                  <li><strong>Node.js + Express:</strong> Customizable, but more setup work.</li>
                  <li><strong>Django/Flask:</strong> Mature, harder to deploy on Vercel.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Hosting & Deployment</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Vercel:</strong> Free SSL, automatic CI/CD, seamless with Next.js.</li>
                  <li><strong>Netlify:</strong> Similar to Vercel, slightly weaker Next.js support.</li>
                  <li><strong>Heroku:</strong> Flexible, but free tier discontinued.</li>
                  <li><strong>AWS/GCP/Azure:</strong> Enterprise scale, but costly and complex.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Styling & UI</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Tailwind CSS:</strong> Utility-first, consistent, fast to develop.</li>
                  <li><strong>Bootstrap:</strong> Easy templates, but “bootstrap look.”</li>
                  <li><strong>Material UI:</strong> Prebuilt React components, heavier bundle.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Database Options</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Supabase (Postgres):</strong> Free, scalable, relational DB.</li>
                  <li><strong>Firebase Firestore:</strong> Realtime, but NoSQL only.</li>
                  <li><strong>MongoDB Atlas:</strong> Flexible, more backend setup needed.</li>
                  <li><strong>Traditional SQL:</strong> Full control, harder maintenance.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white shadow-lg rounded-2xl p-6 md:p-10 space-y-6">
            <h2 className="text-2xl font-semibold">Phase 2: Final Selection</h2>
            <div className="space-y-4">
              <p>
                After evaluating alternatives, we chose the following stack to meet
                client requirements and leverage team expertise:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Programming Language:</strong> TypeScript/JavaScript</li>
                <li><strong>Frontend:</strong> Next.js (React framework)</li>
                <li><strong>Backend & Database:</strong> Supabase (Postgres, Auth)</li>
                <li><strong>Deployment:</strong> Vercel</li>
                <li><strong>Styling:</strong> Tailwind CSS</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Justification</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Client required a <strong>web app</strong> that is low-cost but scalable.</li>
                <li>Team already had <strong>experience</strong> with Next.js, Tailwind, and Vercel.</li>
                <li><strong>Vercel</strong> provides free SSL, automatic CI/CD, and smooth Next.js hosting.</li>
                <li><strong>Supabase</strong> offers easy setup for database + authentication with upgrade paths.</li>
                <li><strong>Next.js</strong> enables clean, fast code with SSR/SSG support.</li>
                <li><strong>Tailwind CSS</strong> improves speed and consistency of UI development.</li>
                <li>All tools chosen have <strong>free tiers</strong> with upgrade paths.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Alternatives Rejected</h3>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Firebase:</strong> Strong realtime, but costly and NoSQL didn’t fit relational needs.</li>
                <li><strong>Heroku:</strong> Free tier discontinued, costs higher.</li>
                <li><strong>AWS/GCP/Azure:</strong> Overly complex for scope and budget.</li>
                <li><strong>Angular/Vue.js:</strong> Both good frameworks, but React/Next.js fit better with Vercel and team expertise.</li>
                <li><strong>Bootstrap/Material UI:</strong> Restrictive compared to Tailwind’s flexibility.</li>
                <li><strong>Python/Java backends:</strong> Robust, but unnecessary complexity for our simple app.</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default PlatformEvaluation;
