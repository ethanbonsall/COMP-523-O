import Navbar from "@/components/navbar";
import Head from "next/head";

const TestPlan = () => {
  return (
    <>
      <Head>
        <title>D3. Test Plan</title>
      </Head>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 p-6 md:p-12">
        <div className="max-w-5xl mx-auto space-y-10">
          <section className="text-center">
            <h1 className="text-4xl font-bold mb-4">D3. Test Plan</h1>
            <p className="text-lg text-gray-600">
              Objects, resources, and proccesses to test our product.
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-2xl p-6 md:p-10 space-y-6">
            <h2 className="text-2xl font-semibold">1. Ideal Test Plan</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-xl mb-2">Unit Testing</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Unit test frontend via Jest and React Testing Library</li>
                  <li>
                    Input validation components: test inputs that should only
                    allow numeric inputs or text inputs.
                  </li>
                  <li>
                    Calculation functions for nutritional needs formulas and
                    formula mix calculations.
                  </li>
                  <li>Data formatting and parsing</li>
                  <li>
                    State management logic for product selection and formula
                    calculations
                  </li>
                  <li>
                    <strong>User account:</strong> creation,
                    login/logout/permissions
                  </li>
                  <li>
                    <strong>Nutritional Needs Calculator: </strong>Handling of
                    edge cases, missing required fields
                  </li>
                  <li>
                    <strong>Formula Calculator: </strong>Correct nutritional
                    totals calculation, mixing multiple formulas
                  </li>
                  <li>
                    Target test coverage is 80% for critical calculation logic
                  </li>
                  <li>Regression testing suite that runs on every commit</li>
                  <li>
                    Mock Supabase responses for isolated unit tests using Mock
                    Service Worker or Jest
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">
                  Integration and System Testing (with UI)
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>User Authentication:</strong> Flow: Login → access
                    restricted pages → logout → verify access denied; Role-based
                    permissions; Session persistence across page refreshes
                  </li>
                  <li>
                    <strong>Admin Panel Integration</strong>: Flow:
                    Create/edit/bulk action product → verify in database →
                    verify in frontend table.
                  </li>
                  <li>
                    <strong>Error Handling Testing</strong>: Invalid API
                    responses, database constraint violations, invalid user
                    input
                  </li>
                  <li>
                    Calculating nutritional needs of formula and comparing to
                    patients DRI
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">
                  Description of Tools Used
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Jest 30.0</strong>: JavaScript testing framework for
                    unit tests, integration tests, and mocking. Unit tests for
                    frontend logic and calculations. Configuration: 80% coverage
                    threshold.
                  </li>
                  <li>
                    <strong>React Native Testing Library</strong>: companion to
                    Jest for testing React components. User interaction testing,
                    component rendering, and state changes.
                  </li>
                  <li>
                    <strong>Github Actions</strong>: CI/CD automation platform.
                    Automated workflow, regression testing on every commit
                  </li>
                  <li>Automate using CI with Github Actions</li>
                  <li>
                    <strong>Cypress 15.6.0</strong>: E2E testing framework.
                    Visits application in a browser and performs actions via UI
                    as a real user would. Tests complete user journeys.
                  </li>
                  <li>
                    <strong>Artillery 2.0.26</strong>: Load and stress testing
                    tool. Simulates concurrent users{" "}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">
                  Description of Types of End Users
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Daisy Dietician</strong>: Daisy is a registered
                    dietician. She will use the Nutrient Needs calculator for
                    pediatric patients, the Formula Look-Up for specific product
                    types and brands, and the Formula Calculator to build custom
                    formula mixes.
                  </li>
                  <li>
                    <strong>Alex Admin</strong>: Alex is a database
                    administrator and will interact with the frontend to add new
                    formula products with nutritional data to the database and
                    edit existing products. Alex cannot access superuser-only
                    features.
                  </li>
                  <li>
                    <strong>Sally Superuser</strong>: Sally is the system
                    administrator and will use the frontend to add and edit
                    formulas, review and approve pending formulas, and bulk
                    activate and deactivate multiple formulas at once in the
                    database.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">
                  Performance Testing
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Load testing with Artillery</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">
                  Acceptance Testing
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Client and her colleagues will use the complete system in a
                    staging environment. They will check that the features
                    product accurate results and they are able to complete
                    common workflows in a timely manner.
                  </li>
                  <li>E2E testing the website using Cypress 15.6.0.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white shadow-lg rounded-2xl p-6 md:p-10 space-y-6">
            <h2 className="text-2xl font-semibold">2. Actual Test Plan</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-xl mb-2">Unit Testing</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Ensure that core frontend functions and backend 
                    connections work correctly</li>
                  <li>Test login/logout, formula add/edit, and critical 
                    calculation functions (nutritional needs and 
                    formula mix totals, including edge cases).
                  </li>
                  <li>Regression tests run via GitHub Actions on every commit.</li>
                  <li>Manual Testing for any complex calculation edge cases
                    not fully covered by automated tests.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">
                  Integration and System Testing (with UI)
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Validate that the frontend, backend (Supabase), 
                    and UI interact properly.</li>
                  <li>Manual testing of critical workflows: login/logout, 
                    adding/editing formulas, approving/deactivating formulas,
                    and verifying database updates in Supabase.</li>
                  <li>Limited Cypress E2E tests for 1–2 major flows.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">
                  Description of Tools Used
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Jest 30.0</strong>: Unit tests for login and 
                    formula functions.
                  </li>
                  <li>
                    <strong>React Native Testing Library</strong>: Verify 
                    core UI component behavior.
                  </li>
                  <li>
                    <strong>Github Actions(CI/CD)</strong>: Automates running
                    of unit tests on each commit.
                  </li>
                  <li>
                    <strong>Cypress 15.6.0</strong>: Limited E2E tests for 
                    1–2 major user flows.
                  </li>
                  <li>
                    <strong>Artillery 2.0.26</strong>: Basic load test of 
                    backend performance.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">
                  Description of Types of End Users
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Daisy Dietician</strong>: Uses nutrient needs 
                    calculator and formula lookup.
                  </li>
                  <li>
                    <strong>Alex Admin</strong>: Adds and edits formulas 
                    in the database.
                  </li>
                  <li>
                    <strong>Sally Superuser</strong>: Approves, activates, 
                    and deactivates formulas.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">
                  Performance Testing
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Verify basic system stability under small user load.</li>
                  <li>Conduct a simple Artillery load test with 5–10 
                    concurrent users performing logins and formula lookups, 
                    observing response time and system stability.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">
                  Acceptance Testing
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Ensure the system meets client and user expectations.</li>
                  <li>Manual testing by client and team members to confirm 
                    feature correctness—including formula operations,
                    nutrient calculations,and data display—and apply 
                    minor bug fixes and UI adjustments based on feedback.</li>
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
