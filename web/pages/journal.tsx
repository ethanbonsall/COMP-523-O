import BottomBar from "@/components/bottombar";
import NavBar from "@/components/navbar";
const Journal = () => {
  return (
    <>
      <NavBar />
      <div className="bg-background flex flex-col items-center text-text w-full font-roboto min-h-screen pb-[15%]">
        <p className="text-4xl mt-[5%]"> Meeting Logs </p>
        <br></br>
        <p>
          <b>
            <p> Weekly Coach Meeting Time: 2:00 - 2:30 PM @ Tuesday </p>
          </b>
        </p>
        <p>
          <b>Weekly Team Meeting Time: 3:00 - 3:30 PM @ Thursday</b>
        </p>
        <p>
          <b>Weekly Client Meeting Time: 4:00 - 4:30 PM @ Friday</b>
        </p>
        <br></br>
        <div className="container mx-auto px-[15%]">
          <p className="text-xl"> Oct 24th, 2025 </p>
          <p className="text-lg"> Client Meeting </p>
          <li>Presented demo of print summary PDF feature.</li>
          <li>Update calculation for carbohydrates and fats.</li>
          <li>Include calories per kg as well as total calorie needs.</li>
          <li>Add spaces between amount and units.</li>
          <li>Send field names from database.</li>
        </div>
        <br></br>
        <div className="container mx-auto px-[15%]">
          <p className="text-xl"> Oct 21st, 2025 </p>
          <p className="text-lg"> Coach Meeting </p>
          <li>Scrolling and minor UI fixes for responsive design.</li>
          <li>Suggested CoPilot to perform code review</li>
          <li>Discussed regression testing - additional suite of tests in unit tests, CI/CD with Git Actions.</li>
        </div>
        <br></br>
        <div className="container mx-auto px-[15%]">
          <p className="text-xl"> Oct 10th, 2025 </p>
          <p className="text-lg"> Client Meeting </p>
          <li>Presented demo of website&apos;s current functionality to client.</li>
          <li>Recieved feedback from client: remove length field, verify calculation of &quot;high protein&quot;, reorder nutrient display in nutrient needs calculator, show weights in both kg and lbs, investigate login issues, and add explanation text on Login Page.</li>
          <li>Data entry page doesn&apos;t need mobile optimization.</li>
          <li>Client will provide formula data for testing.</li>
        </div>
        <br></br>
        <div className="container mx-auto px-[15%]">
          <p className="text-xl"> Oct 3rd, 2025 </p>
          <p className="text-lg"> Client Meeting </p>
          <li>Reviewed the administrator wireframe with the client.</li>
          <li>Discussed ingredient approval and activation workflow preferences.</li>
          <li>Clarified administrator roles i.e., superusers (≈5 total, including the client) can approve, activate, deactivate, and edit products. Regular admins can only add or edit products.</li>
          <li>New ingredients must be approved by a superuser before being used in mixes.</li>
          <li>When an ingredient is edited, it becomes deactivated/unapproved and must be reapproved by a superuser.</li>
          <li>Once approved, it remains deactivated until a superuser activates it.</li>
          <li>Demonstrated the frontend of the nutrient needs calculator and early progress on the formula calculator.</li>
          <li>Client will provide a list of key fields to display in the admin database view (out of 90+ available fields).</li>
        </div>
        <br></br>
        <div className="container mx-auto px-[15%]">
          <p className="text-xl"> Oct 2nd, 2025 </p>
          <p className="text-lg"> Team Meeting </p>
          <li>Reviewed wireframe for admin interface</li>
          <li>Decided to add edit button for each row, allowing for an activate/deactivate and edit individually and about mass selection case</li>
          <li>Discussed table representation options</li>
          <li>Reviewed Ethics assignment</li>
        </div>
        <br></br>
        <div className="container mx-auto px-[15%]">
          <p className="text-xl"> Sept 26th, 2025 </p>
          <p className="text-lg"> Client Meeting </p>
          <li>Showed client wireframe that has been adjusted according to their feedback.</li>
          <li>For the formula calculator page, user should be able to see additional information such as what type of source the formula is.</li>
          <li>Need to create wireframe for admin side.</li>
          <li>Admin users should be able to put in data into the formula lookup table. Stretch goal: web scraping for data.</li>
          <li>Showed client demo of log-in and sign up page and discusses mobile accessibility.</li>
        </div>
        <br></br>
        <div className="container mx-auto px-[15%]">
          <p className="text-xl"> Sept 25th, 2025 </p>
          <p className="text-lg"> Team Meeting </p>
          <li>Went over client&apos;s feedback on wireframe and finalized specification document.</li>
          <li>Created project board on Jira and delegated tasks for midterm presentation.</li>
        </div>
        <br></br>
        <div className="container mx-auto px-[15%]">
          <p className="text-xl"> Sept 18th, 2025 </p>
          <p className="text-lg"> Team Meeting </p>
          <li>Reviewed user stories, functional, requirements, and non-functional requirements for specification document.</li>
          <li>Delegated work for wireframe.</li>
          <li>Questions for client: notifications, mobile accessibility, number of concurrent users.</li>
        </div>
        <br></br>
        <div className="container mx-auto px-[15%]">
          <p className="text-xl"> Sept 12th, 2025 </p>
          <p className="text-lg"> Team Meeting </p>
          <li>Client prefers an autocomplete search function - stretch goal of supporting multiple options for search</li>
          <li>Formula Page: Allow recipe manipulation, flexible batch sizes, and user-defined total volume. Support household measures as well as scoops and include liquid formula in milliliters.</li>
          <li>Advanced Feature: Enable mixing multiple formulas.</li>
          <li>Data requirements: client will provide nutrient cutoff tables and formula lookup details. </li>
        </div>
        <br></br>
        <div className="container mx-auto px-[15%]">
          <p className="text-xl"> Sept 11th, 2025 </p>
          <p className="text-lg"> Team Meeting </p>
          <li>Went over wireframes</li>
          <li>Draft questions for client meeting</li>
        </div>
        <br></br>
        <div className="container mx-auto px-[15%]">
          <p className="text-xl"> Sept 5th, 2025 </p>
          <p className="text-lg"> Client Meeting </p>
          <li>
            Client aims to streamline pediatric formula and nutrition
            calculations, replacing time-consuming manual processes.
          </li>
          <li>
            System should allow dieticians to calculate energy, fluids, and
            nutrients for children, including complex recipes for kids who
            aren&apos;t growing normally, using standardized equations and
            formulas.
          </li>
          <li>
            Users include dieticians, supervisors, and med students - will always
            be healthcare administrators.
          </li>
          <li>
            Requires a centralized, up-to-date database of formulas and
            ingredients, with administrative controls for data entry,
            validation, and activation/deactivation.
          </li>
          <li>
            Client will provide formulas and information on nutrients and key
            growth measures; weekly meetings are scheduled to align on
            requirements.
          </li>
        </div>
        <br></br>
        <div className="container mx-auto px-[15%]">
          <p className="text-xl"> Sept 4th, 2025 </p>
          <p className="text-lg"> Team Meeting </p>
          <li>Planning for client meeting on 9/5</li>
          <li>Draft questions for client meeting</li>
          <li>Action items before next meeting - update website</li>
        </div>
        
      </div>
      <BottomBar />
    </>
  );
};

export default Journal;
