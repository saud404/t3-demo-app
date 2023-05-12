// import { Link } from "react-router-dom";
import Link from "next/link";
import UserOne from "../../images/user/user-01.png";
import UserTwo from "../../images/user/user-02.png";
import UserThree from "../../images/user/user-03.png";
import UserFour from "../../images/user/user-04.png";
import UserFive from "../../images/user/user-05.png";
import Image from "next/image";

const ChatCard = () => {
  return (
    <div className="border-stroke dark:border-strokedark dark:bg-boxdark col-span-12 rounded-sm border bg-white py-6 shadow-default xl:col-span-4">
      <h4 className="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">
        Chats
      </h4>

      <div>
        <Link
          href="/"
          className="hover:bg-gray-3 dark:hover:bg-meta-4 flex items-center gap-5 px-7.5 py-3"
        >
          <div className="relative h-14 w-14 rounded-full">
            <Image
              src={UserThree}
              alt="Logo"
              width={14}
              height={14}
              className="w-24 rounded-full bg-cover p-2 "
            />
            <span className="bg-meta-3 absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white"></span>
          </div>

          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium text-black dark:text-white">
                Devid Heilo
              </h5>
              <p>
                <span className="text-sm text-black dark:text-white">
                  Hello, how are you?
                </span>
                <span className="text-xs"> . 12 min</span>
              </p>
            </div>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
              <span className="text-sm font-medium text-white">3</span>
            </div>
          </div>
        </Link>
        <Link
          href="/"
          className="hover:bg-gray-3 dark:hover:bg-meta-4 flex items-center gap-5 px-7.5 py-3"
        >
          <div className="relative h-14 w-14 rounded-full">
            <Image
              src={UserFour}
              alt="Logo"
              width={14}
              height={14}
              className="w-24 rounded-full bg-cover p-2 "
            />
            <span className="bg-meta-3 absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white"></span>
          </div>

          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium">Henry Fisher</h5>
              <p>
                <span className="text-sm">I am waiting for you</span>
                <span className="text-xs"> . 5:54 PM</span>
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/"
          className="hover:bg-gray-3 dark:hover:bg-meta-4 flex items-center gap-5 px-7.5 py-3"
        >
          <div className="relative h-14 w-14 rounded-full">
            <Image
              src={UserFive}
              alt="User"
              width={14}
              height={14}
              className="w-24 rounded-full bg-cover p-2 "
            />
            <span className="bg-meta-6 absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white"></span>
          </div>

          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium">Wilium Smith</h5>
              <p>
                <span className="text-sm">Where are you now?</span>
                <span className="text-xs"> . 10:12 PM</span>
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/"
          className="hover:bg-gray-3 dark:hover:bg-meta-4 flex items-center gap-5 px-7.5 py-3"
        >
          <div className="relative h-14 w-14 rounded-full">
            <Image
              src={UserOne}
              alt="UserOne"
              width={14}
              height={14}
              className="w-24 rounded-full bg-cover p-2 "
            />
            <span className="bg-meta-3 absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white"></span>
          </div>

          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium text-black dark:text-white">
                Henry Deco
              </h5>
              <p>
                <span className="text-sm text-black dark:text-white">
                  Thank you so much!
                </span>
                <span className="text-xs"> . Sun</span>
              </p>
            </div>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
              <span className="text-sm font-medium text-white">2</span>
            </div>
          </div>
        </Link>
        <Link
          href="/"
          className="hover:bg-gray-3 dark:hover:bg-meta-4 flex items-center gap-5 px-7.5 py-3"
        >
          <div className="relative h-14 w-14 rounded-full">
            <Image
              src={UserTwo}
              alt="UserTwo"
              width={14}
              height={14}
              className="w-24 rounded-full bg-cover p-2 "
            />
            <span className="bg-meta-7 absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white"></span>
          </div>

          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium">Jubin Jack</h5>
              <p>
                <span className="text-sm">I really love that!</span>
                <span className="text-xs"> . Oct 23</span>
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/"
          className="hover:bg-gray-3 dark:hover:bg-meta-4 flex items-center gap-5 px-7.5 py-3"
        >
          <div className="relative h-14 w-14 rounded-full">
            <Image
              src={UserFive}
              alt="UserFive"
              width={14}
              height={14}
              className="w-24 rounded-full bg-cover p-2 "
            />
            <span className="bg-meta-6 absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white"></span>
          </div>

          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium">Wilium Smith</h5>
              <p>
                <span className="text-sm">Where are you now?</span>
                <span className="text-xs"> . Sep 20</span>
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ChatCard;
