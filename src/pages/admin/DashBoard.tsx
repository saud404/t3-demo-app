"use client";
// import { CardFour } from "../../components/admin/CardFour";

import CardOne from "../../components/admin/CardOne";
import CardThree from "../../components/admin/CardThree";
import CardTwo from "../../components/admin/CardTwo";
import ChartOne from "../../components/admin/ChartOne";
import ChartThree from "../../components/admin/ChartThree";
import ChartTwo from "../../components/admin/ChartTwo";
import ChatCard from "../../components/admin/ChatCard";
// import MapOne from "../../components/admin/MapOne";
import TableOne from "../../components/admin/TableOne";
import DefaultLayout from "../../components/admin/Layout/DefaultLayout";

const DashBoard = (props) => {
  return (
    <>
      <div>
        <DefaultLayout>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
            <CardOne />
            <CardTwo />
            <CardThree />
            {/* <CardFour /> */}
          </div>

          <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
            <ChartOne />
            <ChartTwo />
            <ChartThree />
            {/* <MapOne /> */}
            <div className="col-span-12 xl:col-span-8">
              <TableOne />
            </div>
            <ChatCard />
          </div>
        </DefaultLayout>
      </div>
    </>
  );
};

export default DashBoard;
