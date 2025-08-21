import { CiSearch } from "react-icons/ci";
import MobileHeader from "../header/MobileHeader";
import MobileSegment from "../segments/MobileSegment";
import Mobilebanner from "../banner/Mobilebanner";
import MostBooked from "../mobile/MostBooked";
import Popular from "../mobile/Popular";
import Services from "../mobile/Services";
import Refer from "../mobile/Refer";
import Mobilefooter from "../footer/Mobilefooter";

const MobileLanding = () => {
    return (
        <div className="bg-white">
            <MobileHeader />
            <div className="flex items-center w-[90%] mx-auto max-w-md px-4 py-2 border-[#D2D2D2] rounded-md border border-gray-200  bg-white mt-4">
                <CiSearch className="text-gray-400 text-xl" />
                <input
                    type="text"
                    placeholder="Search"
                    className="ml-2 w-full h-[30px] outline-none text-gray-600 placeholder-gray-400 text-sm"
                />
            </div>
            <MobileSegment/>
            <Mobilebanner/>
            <MostBooked/>
            <Popular/>
            <Services/>
            <div className="w-[90%] mx-auto pb-[87px]">
                <Refer/>
            </div>
            <Mobilefooter/>

        </div>
    );
}
export default MobileLanding;