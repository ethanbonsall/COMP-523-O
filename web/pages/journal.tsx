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
          {" "}
          <b>
            <p> Weekly Coach Meeting Time: 2:00 - 2:30 PM @ Tuesday </p>{" "}
          </b>{" "}
        </p>
        <p>
          {" "}
          <b>Weekly Team Meeting Time: 3:00 - 3:30 PM @ Thursday</b>{" "}
        </p>
      </div>
      <BottomBar />
    </>
  );
};

export default Journal;
