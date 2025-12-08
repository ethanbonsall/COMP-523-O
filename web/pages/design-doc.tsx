/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/navbar";
import Head from "next/head";
const DesignDocument = () => {
  return (
    <>
      <Head>
        <title>Design Document</title>
      </Head>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 p-6 md:p-12">
        <div className="max-w-5xl mx-auto space-y-10">
          <section className="text-center">
            <h1 className="text-4xl font-bold mb-4">D2. Design Document</h1>
            <p className="text-lg text-gray-600">
              Explains the core ideas behind the code so a new developer 
              can work with it confidently.
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-2xl p-6 md:p-10 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold">1: Architecture Diagram</h2>
              <div className="container mx-auto px-[5%]">
                <img
                  src="/images/Arch-Diagram-updated.png"
                  alt="Architecture Diagram"
                ></img>
              </div>
              <br></br>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                2. Code Repository and README{" "}
              </h2>
              <div className="container mx-auto px-[0.2%]">
                <h3 className="font-semibold text-xl mb-2">
                  2.1: Repository Information
                </h3>
                <div className="container mx-auto px-[7%]">
                  <p>
                    <strong>Repository URL:</strong>{" "}
                    <a className="text-blue-500"
                      href="https://github.com/ethanbonsall/Pediatric-Blue-Book">
                      https://github.com/ethanbonsall/Pediatric-Blue-Book
                    </a>
                  </p>
                  <p>
                    The complete source code is archived in this GitHub
                    repository. It contains all application code, configuration
                    files, tests, and documentation needed to build and deploy
                    the system.
                  </p>
                  <br></br>
                </div>
                <h3 className="font-semibold text-xl mb-2">
                  2.2: README: How to build the system
                </h3>
                <div className="container mx-auto px-[7%]">
                  <h4>
                    <strong>Tech Stack</strong>
                  </h4>
                  <ul>
                    <li>
                      <strong>Framework:</strong> Next.js
                    </li>
                    <li>
                      <strong>Language:</strong> TypeScript
                    </li>
                    <li>
                      <strong>UI:</strong> React, Tailwind CSS, shadcn/ui
                    </li>
                    <li>
                      <strong>Backend:</strong> Supabase
                    </li>
                    <li>
                      <strong>Testing:</strong> Jest
                    </li>
                    <li>
                      <strong>Deployment:</strong> Vercel
                    </li>
                    <li>
                      <strong>Domain:</strong> Namecheap
                    </li>
                  </ul>
                  <br></br>
                  <h4>
                    <strong>Running the project locally</strong>
                  </h4>
                  <ul>
                    <li>
                      Clone repository:{" "}
                      <pre className="whitespace-pre-wrap bg-gray-100 rounded-md p-3 text-sm font-mono">
                        git clone
                        https://github.com/ethanbonsall/Pediatric-Blue-Book.git
                      </pre>
                    </li>
                    <li>
                      Navigate to web directory:{" "}
                      <pre className="whitespace-pre-wrap bg-gray-100 rounded-md p-3 text-sm font-mono">
                        cd pediatric-blue-book
                      </pre>
                      <pre className="whitespace-pre-wrap bg-gray-100 rounded-md p-3 text-sm font-mono">
                        cd web
                      </pre>
                    </li>
                    <li>
                      Install dependencies:{" "}
                      <pre className="whitespace-pre-wrap bg-gray-100 rounded-md p-3 text-sm font-mono">
                        npm install --force
                      </pre>
                    </li>
                    <li>
                      Create <code>.env.local</code> file with Supabase keys
                      inside /web{" "}
                    </li>
                    <li>
                      Run development server:{" "}
                      <pre className="whitespace-pre-wrap bg-gray-100 rounded-md p-3 text-sm font-mono">
                        npm run dev
                      </pre>
                    </li>
                    <li>
                      The app will be available at{" "}
                      <code>http://localhost:3000/</code>
                    </li>
                  </ul>
                  <br></br>
                  <h4>
                    <strong>Testing</strong>
                  </h4>
                  <p>
                    Tests are written with Jest and stored in{" "}
                    <code>__tests__/</code>.
                  </p>
                  <ul>
                    <li>
                      Run tests: {" "}
                      <pre className="whitespace-pre-wrap bg-gray-100 rounded-md p-3 text-sm font-mono">
                        npm test
                      </pre>
                    </li>
                    <li>
                      Watch mode: {" "}
                      <pre className="whitespace-pre-wrap bg-gray-100 rounded-md p-3 text-sm font-mono">
                        npm test:watch
                      </pre> 
                    </li>
                  </ul>
                </div>
                <br></br>
                <h3 className="font-semibold text-xl mb-2">
                  2.3: Module Structure
                </h3>
                <div className="container mx-auto px-[7%]">
                  <img src="/images/modules.png" alt="modules"></img>
                  <h4>
                    <strong>Module relationships</strong>
                  </h4>
                  <ul>
                    <li>
                      <strong>pages/</strong> (index.tsx, admin.tsx,
                      profile.tsx) import <strong>components/ui/</strong> to
                      build page UI
                    </li>
                    <li>
                      <strong>pages/_app.tsx</strong> wraps entire app, imports{" "}
                      <strong>components/context/themecontext.tsx</strong> for
                      global state
                    </li>
                    <li>
                      <strong>components/ui/</strong> components import{" "}
                      <strong>components/lib/types.ts</strong> for TypeScript
                      types
                    </li>
                    <li>
                      <strong>All components</strong> use{" "}
                      <strong>components/lib/supabase.tsx</strong> for database
                      access
                    </li>
                    <li>
                      <strong>components/ui/</strong> use{" "}
                      <strong>components/lib/utils.ts</strong> for helper
                      functions
                    </li>
                    <li>
                      <strong>app/api/delete-user/route.ts</strong> handles
                      backend API logic
                    </li>
                    <li>
                      <strong>__tests__/</strong> test files import components
                      and run Jest tests
                    </li>
                    <li>
                      <strong>All .tsx/.ts files</strong> use TypeScript for
                      type safety
                    </li>
                    <li>
                      <strong>Styling</strong> uses Tailwind CSS (configured in
                      tailwind.config.ts)
                    </li>
                  </ul>
                </div>
                <br></br>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                3. Detailed Data Definitions{" "}
              </h2>
              <div className="container mx-auto px-[5%]">
                <h3 className="font-semibold text-xl mb-2">Database Schema</h3>
                <div className="container mx-auto px-[7%]">
                  <h4>
                    <strong>Tables:users</strong>
                  </h4>
                  <p>Purpose: User profile information</p>
                  <table className="w-full border-collapse border border-gray-300 mt-4 mb-6">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Column Name</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Data Type</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">created_at</td>
                        <td className="border border-gray-300 px-4 py-2">Timestamp with timezone</td>
                        <td className="border border-gray-300 px-4 py-2">Account creation timestamp</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">first_name</td>
                        <td className="border border-gray-300 px-4 py-2">text</td>
                        <td className="border border-gray-300 px-4 py-2">User&apos;s first name</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">email</td>
                        <td className="border border-gray-300 px-4 py-2">text</td>
                        <td className="border border-gray-300 px-4 py-2">User email address</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">title</td>
                        <td className="border border-gray-300 px-4 py-2">text</td>
                        <td className="border border-gray-300 px-4 py-2">User title or position</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">id</td>
                        <td className="border border-gray-300 px-4 py-2">UUID</td>
                        <td className="border border-gray-300 px-4 py-2">Primary key, unique user identifier</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">role</td>
                        <td className="border border-gray-300 px-4 py-2">text</td>
                        <td className="border border-gray-300 px-4 py-2">User role or permissions</td>
                      </tr>
                    </tbody>
                  </table>
                  <br></br>
                  <h4>
                    <strong>Tables:nutrient needs</strong>
                  </h4>
                  <p>Purpose: Nutrient requirements for users</p>
                  <table className="w-full border-collapse border border-gray-300 mt-4 mb-6">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Column Name</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Data Type</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">id</td>
                        <td className="border border-gray-300 px-4 py-2">bigint</td>
                        <td className="border border-gray-300 px-4 py-2">nutrient identifier</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">created_at</td>
                        <td className="border border-gray-300 px-4 py-2">Timestamp with timezone</td>
                        <td className="border border-gray-300 px-4 py-2">Timestamp of nutrient added</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">nutrient</td>
                        <td className="border border-gray-300 px-4 py-2">text</td>
                        <td className="border border-gray-300 px-4 py-2">Nutrient name</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">age_bottom</td>
                        <td className="border border-gray-300 px-4 py-2">double precision</td>
                        <td className="border border-gray-300 px-4 py-2">Minimum age for nutrient requirement</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">age_top</td>
                        <td className="border border-gray-300 px-4 py-2">double precision</td>
                        <td className="border border-gray-300 px-4 py-2">Maximum age for nutrient requirement</td>
                      </tr>

                      <tr>
                        <td className="border border-gray-300 px-4 py-2">amount</td>
                        <td className="border border-gray-300 px-4 py-2">double precision</td>
                        <td className="border border-gray-300 px-4 py-2">required amount</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">measurement_type</td>
                        <td className="border border-gray-300 px-4 py-2">text</td>
                        <td className="border border-gray-300 px-4 py-2">Measurement type for nutrient amount</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">activity_level</td>
                        <td className="border border-gray-300 px-4 py-2">text</td>
                        <td className="border border-gray-300 px-4 py-2">Activity level for nutrient requirement</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">needs_type</td>
                        <td className="border border-gray-300 px-4 py-2">text</td>
                        <td className="border border-gray-300 px-4 py-2">Type of nutrient required</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">sex</td>
                        <td className="border border-gray-300 px-4 py-2">text</td>
                        <td className="border border-gray-300 px-4 py-2">Sex of patient</td>
                      </tr>
                    </tbody>
                  </table>
                  <br></br>
                  <h4>
                    <strong>Tables:ingredients</strong>
                  </h4>
                  <p>Purpose: recipe ingredients</p>
                  <p>The ingredient list for the formulas.</p>
                  <table className="w-full border-collapse border border-gray-300 mt-4 mb-6">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Column Name</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Data Type</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                      <td className="border border-gray-300 px-4 py-2">product</td>
                      <td className="border border-gray-300 px-4 py-2">text</td>
                      <td className="border border-gray-300 px-4 py-2">Product name</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">company_brand</td>
                      <td className="border border-gray-300 px-4 py-2">text</td>
                      <td className="border border-gray-300 px-4 py-2">Company or brand name</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">age</td>
                      <td className="border border-gray-300 px-4 py-2">text</td>
                      <td className="border border-gray-300 px-4 py-2">Age group</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">notes</td>
                      <td className="border border-gray-300 px-4 py-2">text</td>
                      <td className="border border-gray-300 px-4 py-2">any notes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">id</td>
                      <td className="border border-gray-300 px-4 py-2">uuid</td>
                      <td className="border border-gray-300 px-4 py-2">id of the product</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">active</td>
                      <td className="border border-gray-300 px-4 py-2">boolean</td>
                      <td className="border border-gray-300 px-4 py-2">if active or not</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">approved</td>
                      <td className="border border-gray-300 px-4 py-2">boolean</td>
                      <td className="border border-gray-300 px-4 py-2">if approved or not</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">protein_sources</td>
                      <td className="border border-gray-300 px-4 py-2">text</td>
                      <td className="border border-gray-300 px-4 py-2">Sources of protein</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">carbohydrate_sources</td>
                      <td className="border border-gray-300 px-4 py-2">text</td>
                      <td className="border border-gray-300 px-4 py-2">Sources of carbohydrates</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">fat_sources</td>
                      <td className="border border-gray-300 px-4 py-2">text</td>
                      <td className="border border-gray-300 px-4 py-2">Sources of fat</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">prebiotic_sources</td>
                      <td className="border border-gray-300 px-4 py-2">text</td>
                      <td className="border border-gray-300 px-4 py-2">Sources of prebiotics</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">probiotic_sources</td>
                      <td className="border border-gray-300 px-4 py-2">text</td>
                      <td className="border border-gray-300 px-4 py-2">probiotic sources</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">specialty_ingredients</td>
                      <td className="border border-gray-300 px-4 py-2">text</td>
                      <td className="border border-gray-300 px-4 py-2">Specialty ingredients</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">grams_per_scoop</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">per scoop amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">grams_per_teaspoon</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">per teaspoon amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">grams_per_tablespoon</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">per tablespoon amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">grams_per_cup</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">per cup amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">calories_per_gram</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">calories per gram</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_total_protein_g</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total protein amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_total_fat_g</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total fat amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_total_carbohydrate_g</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total carbohydrate amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_water_ml_standard</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">standard water amount in ml</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_vitamin_a_mcg_re</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total vit a amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_vitamin_d_mcg</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total vit d amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_vitamin_e_mg</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total vit e amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_vitamin_k_mcg</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total vit k amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_thiamin_mg</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total thiamin amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_riboflavin_mg</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total riboflavin amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_niacin_mg</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total niacin amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_b6_mg</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total b6 amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_b12_mcg</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total b12 amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_vitamin_c_mg</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total vitamin c amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_folic_acid_mcg</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total folic acid amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_biotin_mcg</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total biotin amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_pantothenic_acid_mg</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total pantothenic acid amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_choline_mg</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total choline amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_inositol_mg</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total inositol amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_sodium_mg</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total sodium amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_potassium_mg</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total potassium amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_chloride_mg</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total chloride amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_calcium_mg</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total calcium amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_phosphorus_mg</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total phosphorus amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_iron_mg</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total iron amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_zinc_mg</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total zinc amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_magnesium_mg</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total magnesium amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_iodine_mcg</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total iodine amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_manganese_mg</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total manganese amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_selenium_mcg</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total selenium amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_chromium_mcg</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total chromium amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_molybdenum_mcg</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total molybdenum amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_copper_mg</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total copper amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">probiotic</td>
                      <td className="border border-gray-300 px-4 py-2">text</td>
                      <td className="border border-gray-300 px-4 py-2">total probiotic amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">allergens</td>
                      <td className="border border-gray-300 px-4 py-2">text</td>
                      <td className="border border-gray-300 px-4 py-2">any allergens</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">displacement_ml_per_g</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">displacement amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_standard_volume</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">volume of the fomula</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">npc_percent_free_water</td>
                      <td className="border border-gray-300 px-4 py-2">numeric</td>
                      <td className="border border-gray-300 px-4 py-2">percentage of water</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">npc_percent_cal_from_cho</td>
                      <td className="border border-gray-300 px-4 py-2">numeric</td>
                      <td className="border border-gray-300 px-4 py-2">percentage of calories from carbohydrates</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">npc_percent_cal_from_fat</td>
                      <td className="border border-gray-300 px-4 py-2">numeric</td>
                      <td className="border border-gray-300 px-4 py-2">percentage of calories from fat</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">npc_percent_cal_from_protein</td>
                      <td className="border border-gray-300 px-4 py-2">numeric</td>
                      <td className="border border-gray-300 px-4 py-2">percentage of calories from protein</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_fluoride_mg</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total fluoride amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">np100_fiber_g</td>
                      <td className="border border-gray-300 px-4 py-2">double precision</td>
                      <td className="border border-gray-300 px-4 py-2">total fiber amount</td>
                    </tr>
                    </tbody> 
                  </table>
                </div>
                <br></br>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">4. Design Rationale </h2>
              <div className="container mx-auto px-[5%]">
                <h3 className="font-semibold text-xl mb-2">
                  4.1: Technology choices
                </h3>
                <div className="container mx-auto px-[7%]">
                  <ul>
                    <li>
                      <strong>TypeScript:</strong> compile-time type safety,
                      better IDE support, clearer refactoring and documentation.
                    </li>
                    <li>
                      <strong>Next.js:</strong> team familiarity, SSR/SSG for
                      performance/SEO, built-in API routes, seamless Vercel
                      deploys.
                    </li>
                    <li>
                      <strong>Supabase:</strong> PostgreSQL (relational
                      queries), row-level security for HIPAA,
                      open-source/self-host option, SQL familiarity.
                    </li>
                    <li>
                      <strong>Vercel:</strong> team experience, automatic SSL &
                      CI/CD, Next.js-optimized, free tier for launch.
                    </li>
                    <li>
                      <strong>Testing:</strong> Jest
                    </li>
                    <li>
                      <strong>Tailwind CSS:</strong> fast development with
                      utility classes, team expertise, small purged bundles and
                      consistent design.
                    </li>
                  </ul>
                </div>
                <br></br>
                <h3 className="font-semibold text-xl mb-2">
                  4.2: Architechture
                </h3>
                <div className="container mx-auto px-[7%]">
                  <p>
                    <strong>Three-layer separation </strong>(Presentation /
                    Business Logic / Data Access) for defense-in-depth, clearer
                    code, and HIPAA-compliant data isolation.
                  </p>
                </div>
                <br></br>
                <h3 className="font-semibold text-xl mb-2">4.3: Data model</h3>
                <div className="container mx-auto px-[7%]">
                  <p>
                    <strong>Soft delete (is_active)</strong>to meet
                    retention/audit requirements and allow restores.
                  </p>
                  <p>
                    <strong>JSONB for input/output</strong>to support evolving
                    calculation schemas without migrations and keep good
                    performance.
                  </p>
                  <p>
                    <strong>Separate calculations table</strong>to preserve
                    immutable history, enable comparisons and auditing.
                  </p>
                </div>
                <br></br>
                <h3 className="font-semibold text-xl mb-2">
                  4.4: Dependencies (core)
                </h3>
                <div className="container mx-auto px-[7%]">
                  <p>
                    Next.js ^14, React ^18, TypeScript ^5, Supabase Client
                    ^2.38, Tailwind CSS ^3.3, Zod ^3.22, Jest ^29 — chosen for
                    stability, team familiarity, and features needed for secure,
                    testable medical calculations.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default DesignDocument;
