import BottomBar from "@/components/bottombar";
import NavBar from "@/components/navbar";

const Specifications = () =>
{
    return (
        <>
         <NavBar />
         <div className="bg-background flex flex-col items-center text-text w-full font-roboto min-h-screen pb-[15%]">
        <p className="text-4xl mt-[5%]"> D1. Specifications </p>
        <div className="container mx-auto px-[15%]">
          <p className="text-3xl"> User Stories </p>
          <p className="text-lg font-semibold"> As Debby Dietician... </p>
          <li>I want to quickly calculate nutritional needs based on patient age, length, and height so that I can spend more time interacting with my patients.</li>
          <li>I want to compare the nutrition amount in a recipe to the DRI so that I can easily identify missing nutrients or nutrients with values below 67%.</li>
          <li>I want to calculate expected weight and growth for a child, so that I can assess how far off they are from the target growth.</li>
          <li>I want to create accurate formula recipes, so that I can ensure children receive the right nutrition.</li>
          <li>I want to know the calorie content of a formula, so that I can evaluate whether it meets a child’s needs.</li>
          <li>I want a centralized database of formula information so I don’t have to look through multiple different sources.</li>
          <li>I want the database to stay up to date so I won’t try to use formulas that don’t exist anymore.</li>
          <li>I want to print out a formula plan without patient identifiers so the parents have clear instructions and the plan stays HIPAA compliant.</li>
          <li>I want to favorite formulas so I can quickly view the ones I use most often.</li>
          <li>I want to add multiple formulas into a single recipe so that I can create customized feeding plans.</li>
          <li>I want to view detailed formula information (name, manufacturer, protein source, key nutrients, key features), so that I can make informed clinical decisions.</li>
        <br></br>
          <p className="text-lg font-semibold"> As Adam Administrator... </p>
          <li>I want to review and validate data so I can make sure the database remains accurate and clean.</li>
          <li>I want to activate or deactivate formulas so dieticians only use formulas that are current and valid.</li>
        </div>
        <br></br>
        <div className="container mx-auto px-[15%]">
          <p className="text-3xl"> Functional Requirements</p>
          <p className="text-2xl font-semibold"> Definite</p>
          <p className="text-xl font-semibold"> General</p>
          <li>Navigation bar with four options: Nutrient Needs Calculator (Growth and nutrient calculations), Formula Recipe Calculator (Nutrient calculations based on measurements), Formula Lookup Tool (Search database and create mixes), and Settings (User profile management)</li>
          <li>All user-specific data (credentials, mixes, nutrient calculations) is stored securely in a database.</li>
          <li>Only authorized users can access their own data.</li>
          <li>Users with admin access can enter data into the formula lookup table.</li>
          <li>Users receive alerts when formula ingredients or nutrients are updated in the system.</li>
          <li>Users receive alerts when formulas are deactivated for significant reasons, such as a safety recall.</li>
          <br></br>
          <p className="text-xl font-semibold"> User Authentication</p>
          <li>Users are presented with a login page upon visiting the website.</li>
          <li>Users can enter a username and password. If credentials match the database, the user is directed to the home page and shown their preferences.</li>
          <li>Invalid credentials trigger a pop-up: “Username or password does not match database.”</li>
          <li>Users can navigate to a sign-up page to create an account with email, username, and password. Upon submission, data is stored in the database and the user is redirected to the login page.</li>
          <br></br>
          <p className="text-xl font-semibold"> Nutrient Needs Calculator</p>
          <li>Users enter age, height, weight, length, and sex. Age selectable in years, months, or weeks. Height and length selectable in metric or imperial units. Sex selectable from dropdown: male or female.</li>
          <li>A “Calculate” button computes nutrients, ideal weight, and catch-up growth using predefined formulas.</li>
          <li>Results appear in boxes; the nutrients box is scrollable.</li>
          <li>A “Formula” button populates nutrient requirements into the formula section.</li>
          <li>A “Print” button generates a PDF of the results.</li>
          <br></br>
          <p className="text-xl font-semibold"> Formula Recipe Calculator</p>
          <li>Search a database of formulas and add-ins with autocomplete.</li>
          <li>Dropdown filter allows viewing all items, formulas, add-ins, or favorites.</li>
          <li>Clicking an item opens a popup to enter an amount in cups, teaspoons, tablespoons, or scoops (floats).</li>
          <li>“Add” button inserts the item into a Mix section and calculates nutrients from the database.</li>
          <li>Users can select the number of formula administrations per day (servings), adjusting nutrient totals accordingly. Users can also view the type of source the formula is and additional info (such as protein, carbohydrate, amino acid, partially hydrolyzed). </li>
          <li>“Save” triggers a warning if any nutrient is below 67%.</li>
          <li>“Print” generates a PDF including the formula, required nutrients, and nutrients in the mix.</li>
          <li>Admin Page: Provides database access to view, edit, or delete formulas/add-ins via a clean interface.</li>
          <br></br>
          <p className="text-xl font-semibold"> User Settings</p>
          <li>Users can update profile image, email, name, and password.</li>
          <li>A “Save” button updates the database with the new information.</li>
          <br></br>
          <p className="text-2xl font-semibold"> Perhaps </p>
          <p className="text-xl font-semibold"> General</p>
          <li>Session persistence to keep users logged in after closing the browser.</li>
          <li><b>Nutrient Needs Calculator:</b> Graphical representation of growth measures (charts, progress bars).</li>
          <li>Highlight active navigation dynamically as the user scrolls.</li>
          <li><b>User Settings: </b>Global preferences for notifications or measurement units.</li>
          <br></br>
          <p className="text-xl font-semibold"> Formula Recipe Calculator</p>
          <li>Display item images and nutritional information in search results.</li>
          <li>Allow users to favorite items or entire mixes, stored in a user-specific database.</li>
          <li>Add specific items from search results directly to mixes.</li>
          <br></br>
          <p className="text-xl font-semibold"> Data Management</p>
          <li>Data export/import for offline backup.</li>
          <li>Formulas and calculations are generated without caching patient data locally.</li>
          <li>Formula data can be added through webscraping.</li>
          <br></br>
          <p className="text-2xl font-semibold"> Improbable </p>
          <li>Two-factor authentication for enhanced security.</li>
          <li><b>Formula Recipe Calculator:</b> Integration with external APIs for real-time ingredient updates.</li>
          <li>Biometric login options.</li>
          <li>Real-time collaboration between users on mix creation.</li>
          <br></br>
          <p className="text-3xl"> Non-Functional Requirements</p>
          <p className="text-2xl font-semibold"> Definite</p>
          <li>The system should respond to searches/lookups and generate recipes within 5 seconds.</li>
          <li>The system and its usage should be well documented.</li>
          <li>The system should present a clear, simple interface.</li>
          <li>The system should be available with 99% uptime.</li>
          <li>The system should be able to recover from a disaster with minimal data loss.</li>
          <li>The system should be able to handle at least 10 concurrent users without any decrease in performance.</li>
          <li>The system should be a web application and accessible via web and mobile browser.</li>
          <li>The system will be accessed through a web user interface.</li>
          <li>The system should store all data in compliance with HIPAA regulations.</li>
          <li>The system should separate user roles with the appropriate authentication and authorization.</li>
          <li>The system should run in a secure hosting environment.</li>
          <br></br>
          <p className="text-2xl font-semibold"> Perhaps </p>
          <li>The system may pre-load commonly accessed formulas to reduce lookup time.</li>
          <li>The system should be able to handle at least 500 concurrent users without any decrease in performance.</li>
          <br></br>
          <p className="text-2xl font-semibold"> Improbable </p>
          <li>The system should be able to handle 2000 concurrent users without any decrease in performance.</li>
          <br></br>
          <p className="text-3xl">Interface</p>
          <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href = "https://www.figma.com/design/tVglYfOI4xfjfPj2cn9tQM/Wireframe?node-id=0-1&t=fK9TbIEd5wcA0R05-1">Figma Wireframe Link</a>

        

        <br></br>
        </div>
        </div>
        <BottomBar />
        </>
    )
}
export default Specifications;