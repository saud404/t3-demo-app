import Image from "next/image";
import { useRouter } from "next/router";
import thumb from "../assets/images/airpark-logo.jpeg";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { AiOutlineClockCircle } from "react-icons/ai";
import { VscChecklist } from "react-icons/vsc";
import { FaPlay } from "react-icons/fa";
import { MoonIcon } from "@heroicons/react/solid";
import { SunIcon } from "@heroicons/react/solid";
import MyDatePicker from "~/components/MyDatePicker";

export const BookingCard = ({ toggle, settoggle }) => {
  const { push } = useRouter();
  const handleClick = () => {
    console.log("clicked");
    // console.log(startDate);
    // console.log(endDate);
    // const totalDays = startDate.getDay() - endDate.getDay();
    push("/home");
    //return props.totalDays;
  };
  const handleCancelClick = () => {
    console.log("clicked");
    push("/");
  };
  return (
    <div className="md:w-lg border-1 w-full border-black bg-green-200 pt-4 shadow-xl md:w-1/2">
      <div className="flex justify-between p-4 font-mono antialiased">
        <p className="text-xl font-bold md:text-2xl ">Total Parking Cost</p>
        <p className="text-xl font-bold md:text-2xl">£ 129</p>
      </div>
      <hr className=" border-1 w-full border-black" />
      <div className="pt-6">
        <div className="flex justify-between pb-4 pl-4 pr-4  antialiased">
          <p className="text-lg  md:text-xl ">Parking from Date</p>
          <p className="text-lg  md:text-xl">12-10-2021</p>
        </div>
        <div className="flex justify-between pb-4 pl-4 pr-4  antialiased">
          <p className="text-lg  md:text-xl ">Parking to Date</p>
          <p className="text-lg  md:text-xl">12-10-2021</p>
        </div>
        <div className="flex justify-between pb-4 pl-4 pr-4  antialiased">
          <p className="text-lg  md:text-xl ">Total Days</p>
          <p className="text-lg  md:text-xl"> Days</p>
        </div>
        <div className="flex justify-between pb-4 pl-4 pr-4  antialiased">
          <p className="text-lg  md:text-xl ">Per Day Rate</p>
          <p className="text-lg  md:text-xl">£ 10</p>
        </div>
        {/* <div className="flex justify-between pb-4 pl-4 pr-4  antialiased">
          <p className="text-lg  md:text-xl ">Per Day Rate</p>
          <p className="text-lg  md:text-xl">£ 10</p>
        </div> */}
        <hr />
      </div>
      <div className=" flex justify-end">
        <input
          type="submit"
          className=" inter m-4 bg-primary p-2 pt-2 text-xl text-black antialiased shadow-xl hover:bg-black hover:text-primary md:p-4 md:pt-4 md:font-semibold"
          value={"Cancel"}
          onClick={handleCancelClick}
        />
        <input
          type="submit"
          className=" inter m-4 bg-primary p-2 text-xl text-black  antialiased shadow-xl hover:bg-black hover:text-primary md:p-4 md:pt-4 md:font-semibold"
          value={"Select"}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default BookingCard;
