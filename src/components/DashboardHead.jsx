import Headbutton from "./Headbutton";
import LoopIcon from "@mui/icons-material/Loop";
import FilterListIcon from "@mui/icons-material/FilterList";
import WavingHandIcon from "@mui/icons-material/WavingHand";
export default function DashboardHead() {
    return (
        <h1 className="w-full sm:grid sm:grid-cols-2 text-black border-b-2 sm:p-3 ">
            <div className="w-[80vw sm:place-self-start grid h-auto text-2xl">
                <div className=" font-bold">Analytics of the dashboard</div>
                <div className="place-self-start">
                    allign wit siaudfheiu{" "}
                    <WavingHandIcon style={{ color: "yellow" }} />
                </div>
            </div>

            <div className="flex space-x-3 mt-4 sm:justify-self-end">
                <LoopIcon color="primary" />
                <FilterListIcon color="primary" />
                <Headbutton />
            </div>
        </h1>
    );
}
