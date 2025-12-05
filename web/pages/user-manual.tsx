import Navbar from "@/components/navbar";
import Head from "next/head";

const TestPlan = () => {
  return (
    <>
      <Head>
        <title>D4. User Manual</title>
      </Head>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 p-6 md:p-12">
        <div className="max-w-5xl mx-auto space-y-10">
          <section className="text-center">
            <h1 className="text-4xl font-bold mb-4">D4. User Manual</h1>
            <p className="text-lg text-gray-600">
              Ensuring all users of the system have access to the the
              information that they need to run the system and gain benefit from
              it.
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-2xl p-6 md:p-10 space-y-6">
            <h2 className="text-2xl font-semibold">Documentation Plan</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-xl mb-2">Users</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Daisy Dietician (Regular End User)</strong>: Daisy
                    is a registered health care professional, (e.g registered
                    dietician, dietician technician, advanced practice provider,
                    nurse, or physician). She will use the Nutrient Needs
                    calculator for pediatric patients, the Formula Look-Up for
                    specific product types and brands, and the Formula
                    Calculator to build custom formula mixes.
                  </li>
                  <li>
                    <strong>Alex Admin (Admin User):</strong> Alex is a database
                    administrator and will interact with the frontend to add new
                    formula products with nutritional data to the database and
                    edit existing products. Alex cannot access superuser-only
                    features.
                  </li>
                  <li>
                    <strong>Sally Superuser (System Administrator): </strong>
                    Sally is the system administrator and will use the frontend
                    to add and edit formulas, review and approve pending
                    formulas, and bulk activate and deactivate multiple formulas
                    at once in the database.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">
                  Documentation Daisy Dietician Will Need
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>User Manual:</strong> Covering how to create an
                    account, change password, use the Nutrient Needs Calculator,
                    use the Formula Look-Up, use the Formula Calculator, and
                    print results
                  </li>
                  <li>
                    <strong>FAQ topics, including: </strong> editing/deleting an
                    account, privacy concerns, and requesting admin permissions.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">
                  Documentation Alex Admin Will Need
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>User Manual:</strong> Covering how to create an
                    account, view the admin panel, add product information, and
                    edit product information
                  </li>
                  <li>
                    <strong>FAQ topics, including: </strong> how to correctly
                    enter product information and privacy concerns
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">
                  Documentation Sally Superuser Will Need
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>User Manual:</strong> Covering how to create an
                    account, view the admin panel, add product information, edit
                    product information, approve a product, activate/deactivate
                    a product, use filtering, bulk-editing, and sorting
                    functionality, download data from table, and get user emails
                  </li>
                  <li>
                    <strong>FAQ topics, including: </strong> how to grant users
                    admin permissions and privacy concerns
                  </li>
                  <li>
                    <strong>Administration Documentation, including: </strong>
                    accessing the GitHub code repository, accessing/editing the
                    database in Supabase, and accessing the deployed site on
                    Vercel
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">
                  How We Will Provide Documentation
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>User Manuals and FAQS: </strong> Will be provided as
                    dedicated pages within the web app and available as
                    downloadable PDFs. This approach allows users—especially
                    clinicians who may have limited time—to access instructions
                    directly while using the tool. PDFs provide an offline
                    option and ensure portability. Because user familiarity with
                    technology may vary widely, manuals will use clear,
                    non-technical language and include screenshots, diagrams,
                    and step-by-step examples.
                  </li>
                  <li>
                    <strong>ReadMe File (System Setup & Maintenance) : </strong>
                    All developer-level and administrator-level technical
                    information (setup, configuration, deployment, environment
                    variables, database structure) will be documented in the
                    project’s GitHub README. The README is the conventional and
                    most accessible location for system setup instructions for
                    future developers or client technical staff. It ensures
                    long-term maintainability and version control.
                  </li>
                  <li>
                    <strong>Tutorial Videos: </strong> Will be provided as short
                    video tutorials for end users demonstrating how to access
                    the app and use major features. Videos will be embedded in
                    the web app. We will also provide technical walkthrough
                    videos for the client demonstrating how to access, set up,
                    and manage system components. Videos will be sent to the
                    client via email and linked on our team website. Videos
                    support visual learners, reduce onboarding time, and help
                    users with limited technical experience follow workflows
                    more confidently. These videos will be linked in the Client Handoff Document. 
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default TestPlan;
