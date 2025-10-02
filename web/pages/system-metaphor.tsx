import Navbar from "@/components/navbar";
import Head from "next/head";

const SystemMetaphor = () => {
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
              System Metaphor
            </h1>
            <p className="text-lg text-gray-600">
              High-level conceptual description of our system that guides naming, architecture, and communication.
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-2xl p-6 md:p-10 space-y-6">
            <div>
                <p className = "text-xl font-bold">Pediatric Blue Book &#8594; “Cookbook”</p>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Metaphor:</strong> The system is like a cookbook where pediatric dieticians find recipes and ingredients to create personalized nutrition plans. </li>
                  <li><strong>Usage:</strong> Recipe, Ingredients, Steps, Adjustments </li>
                  <li><strong>Benefit:</strong> Makes planning feel familiar and structured. </li>
                </ul>
                <br></br>
              <div>
                <p>A cookbook is a collection of recipes, ingredients, and cooking techniques. Similarly, the Pediatric Blue Book is a collection of nutritional guidelines, data, and calculations. Dieticians can look up a recipe (nutritional plan), adjust the ingredients (nutrients and portions) to fit the child’s needs, and follow clear steps to create a personalized formula plan. </p>
              </div>
              </div>
          </section>

         
        </div>
      </main>
    </>
  );
};

export default SystemMetaphor;
