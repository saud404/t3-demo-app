import React from "react";
import AdminNavBar from "./AdminNavBar";
import AdminFooter from "./AdminFooter";
import BarChart from "../ٖFleetCharts/BarChart";
import LineChart from "../ٖFleetCharts/LineChart";
import Head from "next/head";
import Chartist from "chartist";
import Line from "chartist";

<Head>
  <link
    href="https://fonts.googleapis.com/css?family=Nunito:400,700,800"
    rel="stylesheet"
  />

  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
    integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
    crossOrigin="anonymous"
  />
  <link
    rel="stylesheet"
    href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
  />

  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css"
  />
</Head>;
const AdminHome = () => {
  // const mainChart = new Chartist.Line(
  //   "#chart1",
  //   {
  //     labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  //     series: [
  //       [1, 5, 2, 5, 4, 3],
  //       [2, 3, 4, 8, 1, 2],
  //       [5, 4, 3, 2, 1, 0.5],
  //     ],
  //   },
  //   {
  //     low: 0,
  //     showArea: true,
  //     showPoint: false,
  //     fullWidth: true,
  //   }
  // );

  // mainChart.on("draw", function (data) {
  //   if (data.type === "line" || data.type === "area") {
  //     data.element.animate({
  //       d: {
  //         begin: 1000 * data.index,
  //         dur: 1000,
  //         from: data.path
  //           .clone()
  //           .scale(1, 0)
  //           .translate(0, data.chartRect.height())
  //           .stringify(),
  //         to: data.path.clone().stringify(),
  //         easing: Chartist.Svg.Easing.easeOutQuint,
  //       },
  //     });
  //   }
  // });

  // const chartScatter = new Chartist.Line(
  //   "#chart2",
  //   {
  //     labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  //     series: [
  //       [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
  //       [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
  //       [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
  //       [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3],
  //     ],
  //   },
  //   {
  //     low: 0,
  //   }
  // );

  // chartScatter.on("draw", function (data) {
  //   if (data.type === "line" || data.type === "area") {
  //     data.element.animate({
  //       d: {
  //         begin: 500 * data.index,
  //         dur: 1000,
  //         from: data.path
  //           .clone()
  //           .scale(1, 0)
  //           .translate(0, data.chartRect.height())
  //           .stringify(),
  //         to: data.path.clone().stringify(),
  //         easing: Chartist.Svg.Easing.easeOutQuint,
  //       },
  //     });
  //   }
  // });

  // const chartBar = new Chartist.Bar(
  //   "#chart3",
  //   {
  //     labels: ["Q1", "Q2", "Q3", "Q4"],
  //     series: [
  //       [800000, 1200000, 1400000, 1300000],
  //       [200000, 400000, 500000, 300000],
  //       [100000, 200000, 400000, 600000],
  //     ],
  //   },
  //   {
  //     stackBars: true,
  //     axisY: {
  //       labelInterpolationFnc: function (value) {
  //         return value / 1000 + "k";
  //       },
  //     },
  //   }
  // );

  // chartBar.on("draw", function (data) {
  //   if (data.type === "bar") {
  //     data.element.attr({
  //       style: "stroke-width: 30px",
  //     }),
  //       data.element.animate({
  //         y2: {
  //           dur: "0.5s",
  //           from: data.y1,
  //           to: data.y2,
  //         },
  //       });
  //   }
  // });

  // const chartPie = new Chartist.Pie(
  //   "#chart4",
  //   {
  //     series: [10, 20, 50, 20, 5, 50, 15],
  //     labels: [1, 2, 3, 4, 5, 6, 7],
  //   },
  //   {
  //     donut: true,
  //     showLabel: true,
  //   }
  // );

  // chartPie.on("draw", function (data) {
  //   if (data.type === "slice") {
  //     const pathLength = data.element._node.getTotalLength();
  //     data.element.attr({
  //       "stroke-dasharray": pathLength + "px " + pathLength + "px",
  //     });

  //     const animationDefinition = {
  //       "stroke-dashoffset": {
  //         id: "anim" + data.index,
  //         dur: 200,
  //         from: -pathLength + "px",
  //         to: "0px",
  //         easing: Chartist.Svg.Easing.easeOutQuint,
  //         fill: "freeze",
  //       },
  //     };

  //     if (data.index !== 0) {
  //       animationDefinition["stroke-dashoffset"].begin =
  //         "anim" + (data.index - 1) + ".end";
  //     }

  //     data.element.attr({
  //       "stroke-dashoffset": -pathLength + "px",
  //     });

  //     data.element.animate(animationDefinition, false);
  //   }
  // });

  // const userMenuDiv = document.getElementById("userMenu");
  // const userMenu = document.getElementById("userButton");

  // document.onclick = check;

  // function check(e) {
  //   const target = (e && e.target) || (event && event.srcElement);

  //   //User Menu
  //   if (!checkParent(target, userMenuDiv)) {
  //     // click NOT on the menu
  //     if (checkParent(target, userMenu)) {
  //       // click on the link
  //       if (userMenuDiv.classList.contains("invisible")) {
  //         userMenuDiv.classList.remove("invisible");
  //       } else {
  //         userMenuDiv.classList.add("invisible");
  //       }
  //     } else {
  //       // click both outside link and outside menu, hide menu
  //       userMenuDiv.classList.add("invisible");
  //     }
  //   }
  // }

  // function checkParent(t, elm) {
  //   while (t.parentNode) {
  //     if (t == elm) {
  //       return true;
  //     }
  //     t = t.parentNode;
  //   }
  //   return false;
  // }

  return (
    <>
      <AdminNavBar />
      <div className="container mx-auto w-[1000px]">
        <div className="p-4 text-center text-2xl font-bold ">
          <p>Yearly Bookings</p>
        </div>

        <BarChart />

        <div className="p-4 text-center text-2xl font-bold ">
          <p>Yearly Revenue</p>
        </div>
        <LineChart />
      </div>

      {/* <body className="flex h-screen bg-gray-100 font-sans"> */}

      {/* <div
        id="sidebar"
        className="menu nunito static fixed flex h-screen w-16 items-center bg-white px-4 text-white shadow"
      >
        <ul className="list-reset ">
          <li className="my-2 md:my-0">
            <a
              href="#"
              className="block py-1 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400 md:py-3"
            >
              <i className="fas fa-home fa-fw mr-3"></i>
              <span className="inline-block w-full pb-1 text-sm md:pb-0">
                Home
              </span>
            </a>
          </li>
          <li className="my-2 md:my-0 ">
            <a
              href="#"
              className="block py-1 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400 md:py-3"
            >
              <i className="fas fa-tasks fa-fw mr-3"></i>
              <span className="inline-block w-full pb-1 text-sm md:pb-0">
                Tasks
              </span>
            </a>
          </li>
          <li className="my-2 md:my-0">
            <a
              href="#"
              className="block py-1 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400 md:py-3"
            >
              <i className="fa fa-envelope fa-fw mr-3"></i>
              <span className="inline-block w-full pb-1 text-sm md:pb-0">
                Messages
              </span>
            </a>
          </li>
          <li className="my-2 md:my-0">
            <a
              href="#"
              className="block py-1 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400 md:py-3"
            >
              <i className="fas fa-chart-area fa-fw mr-3 text-indigo-400"></i>
              <span className="inline-block w-full pb-1 text-sm md:pb-0">
                Analytics
              </span>
            </a>
          </li>
          <li className="my-2 md:my-0">
            <a
              href="#"
              className="block py-1 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400 md:py-3"
            >
              <i className="fa fa-wallet fa-fw mr-3"></i>
              <span className="inline-block w-full pb-1 text-sm md:pb-0">
                Payments
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-1 flex-grow flex-row flex-wrap content-start pl-16">
        <div className="flex h-40 w-full flex-wrap lg:h-20">
          <nav
            id="header"
            className="border-b-1 order-2 flex w-full items-center border-gray-300 bg-gray-200 lg:order-1 lg:max-w-sm"
          >
            <div className="w-full px-2">
              <select
                name=""
                className="w-full rounded-full border-2 border-gray-200 bg-gray-300 px-4 py-3 font-bold leading-tight text-gray-500 focus:bg-white focus:shadow-md focus:outline-none"
                id="form-field2"
              >
                <option value="Default">default</option>
                <option value="A">report a</option>
                <option value="B">report b</option>
                <option value="C">report c</option>
              </select>
            </div>
          </nav>
          <nav
            id="header1"
            className="border-b-1 order-1 w-auto flex-1 border-gray-300 bg-gray-100 lg:order-2"
          >
            <div className="flex h-full items-center justify-between">
              <div className="relative w-full max-w-3xl px-6">
                <div className="absolute left-0 top-0 mt-1 flex h-10 items-center pl-10">
                  <svg
                    className="h-4 w-4 fill-current text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                  </svg>
                </div>

                <input
                  id="search-toggle"
                  type="search"
                  placeholder="search"
                  className="block w-full rounded-full bg-gray-200 py-3 pl-12 pr-4 font-bold text-gray-700 focus:bg-white focus:shadow-md focus:outline-none"
                  // onkeyup="updateSearchResults(this.value);"
                />
              </div>

              <div className="relative inline-block flex pr-6">
                <div className="relative text-sm">
                  <button
                    id="userButton"
                    className="mr-3 flex items-center focus:outline-none"
                  >
                    <img
                      className="mr-4 h-8 w-8 rounded-full"
                      src="http://i.pravatar.cc/300"
                      alt="Avatar of User"
                    />{" "}
                    <span className="hidden md:inline-block">Hi, User </span>
                    <svg
                      className="h-2 pl-2"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 129 129"
                      // xmlns:xlink="http://www.w3.org/1999/xlink"
                      enable-background="new 0 0 129 129"
                    >
                      <g>
                        <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"></path>
                      </g>
                    </svg>
                  </button>
                  <div
                    id="userMenu"
                    className="nunito invisible absolute right-0 top-0 z-30 mt-12 mt-2 min-w-full overflow-auto rounded bg-white shadow-md"
                  >
                    <ul className="list-reset">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-900 no-underline hover:bg-indigo-400 hover:text-white hover:no-underline"
                        >
                          My account
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-900 no-underline hover:bg-indigo-400 hover:text-white hover:no-underline"
                        >
                          Notifications
                        </a>
                      </li>
                      <li>
                        <hr className="mx-2 border-t border-gray-400" />
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-900 no-underline hover:bg-indigo-400 hover:text-white hover:no-underline"
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div
          id="dash-content"
          className="flex w-full flex-wrap content-start bg-gray-200 py-6 lg:max-w-sm lg:py-0"
        >
          <div className="w-1/2 lg:w-full">
            <div className="m-2 rounded border-2 border-dashed border-gray-400 p-6 hover:border-transparent hover:bg-white hover:shadow-xl md:mx-10 md:my-6">
              <div className="flex flex-col items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full bg-gray-300 p-3">
                    <i className="fa fa-wallet fa-fw fa-inverse text-indigo-500"></i>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold">
                    $3249{" "}
                    <span className="text-green-500">
                      <i className="fas fa-caret-up"></i>
                    </span>
                  </h3>
                  <h5 className="font-bold text-gray-500">Total Revenue</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 lg:w-full">
            <div className="m-2 rounded border-2 border-dashed border-gray-400 p-6 hover:border-transparent hover:bg-white hover:shadow-xl md:mx-10 md:my-6">
              <div className="flex flex-col items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full bg-gray-300 p-3">
                    <i className="fas fa-users fa-fw fa-inverse text-indigo-500"></i>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold">
                    249{" "}
                    <span className="text-orange-500">
                      <i className="fas fa-exchange-alt"></i>
                    </span>
                  </h3>
                  <h5 className="font-bold text-gray-500">Total Users</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 lg:w-full">
            <div className="m-2 rounded border-2 border-dashed border-gray-400 p-6 hover:border-transparent hover:bg-white hover:shadow-xl md:mx-10 md:my-6">
              <div className="flex flex-col items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full bg-gray-300 p-3">
                    <i className="fas fa-user-plus fa-fw fa-inverse text-indigo-500"></i>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold">
                    2{" "}
                    <span className="text-yellow-600">
                      <i className="fas fa-caret-up"></i>
                    </span>
                  </h3>
                  <h5 className="font-bold text-gray-500">New Users</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 lg:w-full">
            <div className="m-2 rounded border-2 border-dashed border-gray-400 p-6 hover:border-transparent hover:bg-white hover:shadow-xl md:mx-10 md:my-6">
              <div className="flex flex-col items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full bg-gray-300 p-3">
                    <i className="fas fa-server fa-fw fa-inverse text-indigo-500"></i>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold">152 days</h3>
                  <h5 className="font-bold text-gray-500">Server Uptime</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="main-content" className="w-full flex-1">
          <div className="flex flex-1 flex-wrap">
            <div className="w-full p-6 xl:w-2/3 xl:max-w-6xl">
              <div className="max-w-full lg:max-w-3xl xl:max-w-5xl">
                <div className="border-b p-3">
                  <h5 className="font-bold text-black">Graph</h5>
                </div>
                <div className="p-5">
                  <div className="ct-chart ct-golden-section" id="chart1"></div>
                </div>

                <div className="p-3">
                  <div className="border-b p-3">
                    <h5 className="font-bold text-black">Table</h5>
                  </div>
                  <div className="p-5">
                    <table className="w-full p-5 text-gray-700">
                      <thead>
                        <tr>
                          <th className="text-left text-blue-900">Name</th>
                          <th className="text-left text-blue-900">Side</th>
                          <th className="text-left text-blue-900">Role</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Obi Wan Kenobi</td>
                          <td>Light</td>
                          <td>Jedi</td>
                        </tr>
                        <tr>
                          <td>Greedo</td>
                          <td>South</td>
                          <td>Scumbag</td>
                        </tr>
                        <tr>
                          <td>Darth Vader</td>
                          <td>Dark</td>
                          <td>Sith</td>
                        </tr>
                      </tbody>
                    </table>

                    <p className="py-2">
                      <a href="#">See More issues...</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-1 w-full border-gray-300 p-6 xl:w-1/3 xl:max-w-4xl">
              <div className="max-w-sm lg:max-w-3xl xl:max-w-5xl">
                <div className="border-b p-3">
                  <h5 className="font-bold text-black">Graph</h5>
                </div>
                <div className="p-5">
                  <div className="ct-chart ct-golden-section" id="chart2"></div>
                </div>

                <div className="border-b p-3">
                  <h5 className="font-bold text-black">Graph</h5>
                </div>
                <div className="p-5">
                  <div className="ct-chart ct-golden-section" id="chart3"></div>
                </div>

                <div className="border-b p-3">
                  <h5 className="font-bold text-black">Graph</h5>
                </div>
                <div className="p-5">
                  <div className="ct-chart ct-golden-section" id="chart4"></div>
                </div>

                <div className="p-3">
                  <div className="border-b p-3">
                    <h5 className="font-bold text-black">Template</h5>
                  </div>
                  <div className="p-5"></div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}
      <AdminFooter />
    </>
  );
};

export default AdminHome;
