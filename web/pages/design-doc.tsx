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
            <h1 className="text-4xl font-bold mb-4">D5. Design Document</h1>
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
                    <a href="https://github.com/ethanbonsall/Pediatric-Blue-Book">
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
                    <strong>Tech Stack:</strong>
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
                      <code>
                        git clone
                        https://github.com/ethanbonsall/Pediatric-Blue-Book.git
                      </code>
                    </li>
                    <li>
                      Navigate to web directory:{" "}
                      <code>cd Pediatric-Blue-Book/web</code>
                    </li>
                    <li>
                      Install dependencies: <code>npm install</code>
                    </li>
                    <li>
                      Create <code>.env.local</code> file with Supabase keys
                      inside /web{" "}
                    </li>
                    <li>
                      Run development server: <code>npm run dev</code>
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
                      Run tests: <code>npm test</code>
                    </li>
                    <li>
                      Watch mode: <code>npm run test:watch</code>
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
                  <table>
                    <thead>
                      <tr>
                        <th>Column Name</th>
                        <th>Data Type</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>created_at</td>
                        <td>Timestamp with timezone</td>
                        <td>Account creation timestamp</td>
                      </tr>
                      <tr>
                        <td>first_name</td>
                        <td>text</td>
                        <td>User&apos;s first name</td>
                      </tr>
                      <tr>
                        <td>email</td>
                        <td>text</td>
                        <td>User email address</td>
                      </tr>
                      <tr>
                        <td>title</td>
                        <td>text</td>
                        <td>User title or position</td>
                      </tr>
                      <tr>
                        <td>id</td>
                        <td>UUID</td>
                        <td>Primary key, unique user identifier</td>
                      </tr>
                      <tr>
                        <td>role</td>
                        <td>text</td>
                        <td>User role or permissions</td>
                      </tr>
                    </tbody>
                  </table>
                  <br></br>
                  <h4>
                    <strong>Tables:nutrient needs</strong>
                  </h4>
                  <p>Purpose: Nutrient requirements for users</p>
                  <table>
                    <thead>
                      <tr>
                        <th>Column Name</th>
                        <th>Data Type</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>id</td>
                        <td>bigint</td>
                        <td>nutrient identifier</td>
                      </tr>
                      <tr>
                        <td>created_at</td>
                        <td>Timestamp with timezone</td>
                        <td>Timestamp of nutrient added</td>
                      </tr>
                      <tr>
                        <td>nutrient</td>
                        <td>text</td>
                        <td>Nutrient name</td>
                      </tr>
                      <tr>
                        <td>age_bottom</td>
                        <td>double precision</td>
                        <td>Minimum age for nutrient requirement</td>
                      </tr>
                      <tr>
                        <td>age_top</td>
                        <td>double precision</td>
                        <td>Maximum age for nutrient requirement</td>
                      </tr>

                      <tr>
                        <td>amount</td>
                        <td>double precision</td>
                        <td>required amount</td>
                      </tr>
                      <tr>
                        <td>measurement_type</td>
                        <td>text</td>
                        <td>Measurement type for nutrient amount</td>
                      </tr>
                      <tr>
                        <td>activity_level</td>
                        <td>text</td>
                        <td>Activity level for nutrient requirement</td>
                      </tr>
                      <tr>
                        <td>needs_type</td>
                        <td>text</td>
                        <td>Type of nutrient required</td>
                      </tr>
                      <tr>
                        <td>sex</td>
                        <td>text</td>
                        <td>Sex of patient</td>
                      </tr>
                    </tbody>
                  </table>
                  <br></br>
                  <h4>
                    <strong>Tables:ingredients</strong>
                  </h4>
                  <p>Purpose: recipe ingredients</p>
                  <p>The ingredient list for the formulas.</p>
                  <table>
                    <tr>
                      <th>Name</th>
                      <th>Data Type</th>
                      <th>Description</th>
                    </tr>

                    <tr>
                      <td>product</td>
                      <td>text</td>
                      <td>Product name</td>
                    </tr>
                    <tr>
                      <td>company_brand</td>
                      <td>text</td>
                      <td>Company or brand name</td>
                    </tr>
                    <tr>
                      <td>age</td>
                      <td>text</td>
                      <td>Age group</td>
                    </tr>
                    <tr>
                      <td>notes</td>
                      <td>text</td>
                      <td>any notes</td>
                    </tr>
                    <tr>
                      <td>id</td>
                      <td>uuid</td>
                      <td>id of the product</td>
                    </tr>
                    <tr>
                      <td>active</td>
                      <td>boolean</td>
                      <td>if active or not</td>
                    </tr>
                    <tr>
                      <td>approved</td>
                      <td>boolean</td>
                      <td>if approved or not</td>
                    </tr>
                    <tr>
                      <td>protein_sources</td>
                      <td>text</td>
                      <td>Sources of protein</td>
                    </tr>
                    <tr>
                      <td>carbohydrate_sources</td>
                      <td>text</td>
                      <td>Sources of carbohydrates</td>
                    </tr>
                    <tr>
                      <td>fat_sources</td>
                      <td>text</td>
                      <td>Sources of fat</td>
                    </tr>
                    <tr>
                      <td>prebiotic_sources</td>
                      <td>text</td>
                      <td>Sources of prebiotics</td>
                    </tr>
                    <tr>
                      <td>probiotic_sources</td>
                      <td>text</td>
                      <td>probiotic sources</td>
                    </tr>
                    <tr>
                      <td>specialty_ingredients</td>
                      <td>text</td>
                      <td>Specialty ingredients</td>
                    </tr>
                    <tr>
                      <td>grams_per_scoop</td>
                      <td>double precision</td>
                      <td>per scoop amount</td>
                    </tr>
                    <tr>
                      <td>grams_per_teaspoon</td>
                      <td>double precision</td>
                      <td>per teaspoon amount</td>
                    </tr>
                    <tr>
                      <td>grams_per_tablespoon</td>
                      <td>double precision</td>
                      <td>per tablespoon amount</td>
                    </tr>
                    <tr>
                      <td>grams_per_cup</td>
                      <td>double precision</td>
                      <td>per cup amount</td>
                    </tr>
                    <tr>
                      <td>calories_per_gram</td>
                      <td>double precision</td>
                      <td>calories per gram</td>
                    </tr>
                    <tr>
                      <td>np100_total_protein_g</td>
                      <td>double precision</td>
                      <td>total protein amount</td>
                    </tr>
                    <tr>
                      <td>np100_total_fat_g</td>
                      <td>double precision</td>
                      <td>total fat amount</td>
                    </tr>
                    <tr>
                      <td>np100_total_carbohydrate_g</td>
                      <td>double precision</td>
                      <td>total carbohydrate amount</td>
                    </tr>
                    <tr>
                      <td>np100_water_ml_standard</td>
                      <td>double precision</td>
                      <td>standard water amount in ml</td>
                    </tr>
                    <tr>
                      <td>np100_vitamin_a_mcg_re</td>
                      <td>double precision</td>
                      <td>total vit a amount</td>
                    </tr>
                    <tr>
                      <td>np100_vitamin_d_mcg</td>
                      <td>double precision</td>
                      <td>total vit d amount</td>
                    </tr>
                    <tr>
                      <td>np100_vitamin_e_mg</td>
                      <td>double precision</td>
                      <td>total vit e amount</td>
                    </tr>
                    <tr>
                      <td>np100_vitamin_k_mcg</td>
                      <td>double precision</td>
                      <td>total vit k amount</td>
                    </tr>
                    <tr>
                      <td>np100_thiamin_mg</td>
                      <td>double precision</td>
                      <td>total thiamin amount</td>
                    </tr>
                    <tr>
                      <td>np100_riboflavin_mg</td>
                      <td>double precision</td>
                      <td>total riboflavin amount</td>
                    </tr>
                    <tr>
                      <td>np100_niacin_mg</td>
                      <td>double precision</td>
                      <td>total niacin amount</td>
                    </tr>
                    <tr>
                      <td>np100_b6_mg</td>
                      <td>double precision</td>
                      <td>total b6 amount</td>
                    </tr>
                    <tr>
                      <td>np100_b12_mcg</td>
                      <td>double precision</td>
                      <td>total b12 amount</td>
                    </tr>
                    <tr>
                      <td>np100_vitamin_c_mg</td>
                      <td>double precision</td>
                      <td>total vitamin c amount</td>
                    </tr>
                    <tr>
                      <td>np100_folic_acid_mcg</td>
                      <td>double precision</td>
                      <td>total folic acid amount</td>
                    </tr>
                    <tr>
                      <td>np100_biotin_mcg</td>
                      <td>double precision</td>
                      <td>total biotin amount</td>
                    </tr>
                    <tr>
                      <td>np100_pantothenic_acid_mg</td>
                      <td>double precision</td>
                      <td>total pantothenic acid amount</td>
                    </tr>
                    <tr>
                      <td>np100_choline_mg</td>
                      <td>double precision</td>
                      <td>total choline amount</td>
                    </tr>
                    <tr>
                      <td>np100_inositol_mg</td>
                      <td>double precision</td>
                      <td>total inositol amount</td>
                    </tr>
                    <tr>
                      <td>np100_sodium_mg</td>
                      <td>double precision</td>
                      <td>total sodium amount</td>
                    </tr>
                    <tr>
                      <td>np100_potassium_mg</td>
                      <td>double precision</td>
                      <td>total potassium amount</td>
                    </tr>
                    <tr>
                      <td>np100_chloride_mg</td>
                      <td>double precision</td>
                      <td>total chloride amount</td>
                    </tr>
                    <tr>
                      <td>np100_calcium_mg</td>
                      <td>double precision</td>
                      <td>total calcium amount</td>
                    </tr>
                    <tr>
                      <td>np100_phosphorus_mg</td>
                      <td>double precision</td>
                      <td>total phosphorus amount</td>
                    </tr>
                    <tr>
                      <td>np100_iron_mg</td>
                      <td>double precision</td>
                      <td>total iron amount</td>
                    </tr>
                    <tr>
                      <td>np100_zinc_mg</td>
                      <td>double precision</td>
                      <td>total zinc amount</td>
                    </tr>
                    <tr>
                      <td>np100_magnesium_mg</td>
                      <td>double precision</td>
                      <td>total magnesium amount</td>
                    </tr>
                    <tr>
                      <td>np100_iodine_mcg</td>
                      <td>double precision</td>
                      <td>total iodine amount</td>
                    </tr>
                    <tr>
                      <td>np100_manganese_mg</td>
                      <td>double precision</td>
                      <td>total manganese amount</td>
                    </tr>
                    <tr>
                      <td>np100_selenium_mcg</td>
                      <td>double precision</td>
                      <td>total selenium amount</td>
                    </tr>
                    <tr>
                      <td>np100_chromium_mcg</td>
                      <td>double precision</td>
                      <td>total chromium amount</td>
                    </tr>
                    <tr>
                      <td>np100_molybdenum_mcg</td>
                      <td>double precision</td>
                      <td>total molybdenum amount</td>
                    </tr>
                    <tr>
                      <td>np100_copper_mg</td>
                      <td>double precision</td>
                      <td>total copper amount</td>
                    </tr>
                    <tr>
                      <td>probiotic</td>
                      <td>text</td>
                      <td>total probiotic amount</td>
                    </tr>
                    <tr>
                      <td>allergens</td>
                      <td>text</td>
                      <td>any allergens</td>
                    </tr>
                    <tr>
                      <td>displacement_ml_per_g</td>
                      <td>double precision</td>
                      <td>displacement amount</td>
                    </tr>
                    <tr>
                      <td>np100_standard_volume</td>
                      <td>double precision</td>
                      <td>volume of the fomula</td>
                    </tr>
                    <tr>
                      <td>npc_percent_free_water</td>
                      <td>numeric</td>
                      <td>percentage of water</td>
                    </tr>
                    <tr>
                      <td>npc_percent_cal_from_cho</td>
                      <td>numeric</td>
                      <td>percentage of calories from carbohydrates</td>
                    </tr>
                    <tr>
                      <td>npc_percent_cal_from_fat</td>
                      <td>numeric</td>
                      <td>percentage of calories from fat</td>
                    </tr>
                    <tr>
                      <td>npc_percent_cal_from_protein</td>
                      <td>numeric</td>
                      <td>percentage of calories from protein</td>
                    </tr>
                    <tr>
                      <td>np100_fluoride_mg</td>
                      <td>double precision</td>
                      <td>total fluoride amount</td>
                    </tr>
                    <tr>
                      <td>np100_fiber_g</td>
                      <td>double precision</td>
                      <td>total fiber amount</td>
                    </tr>
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
