import BottomBar from "@/components/bottombar";
import Concept from "@/components/concept";
import NavBar from "@/components/navbar";
import Quick from "@/components/quick";
const Journal = () => {
    return (<>
    <NavBar />
      <div className="bg-background flex flex-col items-center w-full font-roboto min-h-screen">
      <p className = "text-4xl mt-[5%]"> Meeting Logs </p>
      <br></br>
      <p> <b><p> Weekly Coach Meeting Time: 2:00 - 2:30 PM @ Tuesday </p> </b> </p>
      <p> <b>Weekly Team Meeting Time: 3:00 - 3:30 PM @ Thursday</b> </p>
      </div>
      <BottomBar />
      </>
    );
  };


  export default Journal;