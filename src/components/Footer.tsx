import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FooterImg from "../assets/images/footer.png";
const Footer = () => {
  const [agent, setAgent] = useState(true);

  return (
    <div className="border-t-4 border-t-primary bg-[#0D0D0D] p-10 text-white md:p-20">
      <div className="-m-3 flex flex-wrap">
        <div className="w-6/12 p-3 lg:w-3/12">
          <Image className="w-36" src={FooterImg} alt="Footer Loge" />
        </div>

        <div className="w-6/12 p-3 lg:w-3/12">
          <h5 className="mb-2.5 text-lg font-bold uppercase">Useful Links</h5>
          <ul className="mb-0 list-none space-y-1">
            <li>
              <a
                className="text-white hover:text-primary"
                href={agent ? "/profile" : "/team-profile"}
              >
                Profile
              </a>
            </li>
            <li>
              <a className="text-white hover:text-primary" href="/team-profile">
                Team
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-primary"
                href="/search-details"
              >
                Search Details
              </a>
            </li>
            <li>
              <a className="text-white hover:text-primary" href="/agents">
                Agents
              </a>
            </li>
            <li>{/* <Social /> */}</li>
          </ul>
        </div>

        <div className="w-6/12 p-3 lg:w-3/12">
          <h5 className="mb-2.5 text-lg font-bold uppercase">Useful Links</h5>

          <ul className="mb-0 list-none space-y-1">
            <li>
              <a className="text-white hover:text-primary" href="/citizenship">
                Citizenship
              </a>
            </li>
            <li>
              <a className="text-white hover:text-primary" href="/real-estate">
                Real-Estate
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-primary"
                href="/property-details"
              >
                Property details
              </a>
            </li>
            <li>
              <a className="text-white hover:text-primary" href="/projects">
                Upcoming projects
              </a>
            </li>
            <li>
              <a className="text-white hover:text-primary" href="/about">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="w-6/12 p-3 lg:w-3/12">
          <h5 className="mb-2.5 text-lg font-bold uppercase">Head Office</h5>

          <ul className="mb-0 list-none space-y-1">
            <li>
              <a
                className="text-white hover:text-primary"
                href="/legal-services"
              >
                Legal Services
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-primary"
                href="/translation-services"
              >
                Translation Services
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-primary"
                href="/property-management"
              >
                Property Management
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap justify-between">
        <div className="mt-2 text-sm uppercase text-white hover:text-primary">
          contact@parking.com
        </div>
        <div className="mt-2 text-sm uppercase text-white hover:text-primary">
          <Link href="/"> © 2023 Parking Co. All rights reserved.</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
