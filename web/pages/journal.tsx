import BottomBar from "@/components/bottombar";
import NavBar from "@/components/navbar";
const Journal = () => {
  return (
    <>
      <NavBar />
      <div className="bg-background flex flex-col items-center text-text w-full font-roboto min-h-screen">
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
          <p className="text-xl"> Sept 4th, 2025 </p>
          <p className="text-lg"> Team Meeting </p>
          <li>Planning for client meeting on 8/5</li>
          <li>Draft questions for client meeting</li>
          <li>Action items before next meeting - update website</li>
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
            Users inclde dieticians, supervisors, and med students - will always
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
      </div>
      <BottomBar />
    </>
  );
};

export default Journal;
