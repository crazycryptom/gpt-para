import { PiChats, PiBookmarkSimple } from "react-icons/pi";
import { IoSettingsOutline, IoHelpBuoyOutline } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";
import { HiOutlineEnvelopeOpen } from "react-icons/hi2";
import Link from "next/link";

const applications = [
  { name: "Chats", icon: <PiChats />, href: "1" },
  { name: "Newsletter", icon: <HiOutlineEnvelopeOpen />, href: "/newsletter" },
  { name: "Bookmarks", icon: <PiBookmarkSimple />, href: "/bookmarks" },
];
const settings = [
  { name: "Account", icon: <IoSettingsOutline />, href: "account" },
  { name: "About", icon: <CiCircleInfo />, href: "about" },
  { name: "Help", icon: <IoHelpBuoyOutline />, href: "help" },
];

export const LeftSidebar = () => {
  return (
    <div className="max-h-screen px-4">
      <div>
        <div className="bg-primary-400 max-w-[75px] rounded-r-full py-4"></div>
        <div className="text-primary-600">UNMS</div>
      </div>
      <div className="mb-10 pt-10">
        <div className="mb-1 text-sm font-bold uppercase">Applications</div>
        {applications.map((o) => (
          <Link
            href={o.href}
            key={o.name}
            className="flex-row-start mb-1 gap-2 text-gray-600 hover:font-semibold"
          >
            {o.icon}
            <span className="">{o.name}</span>
          </Link>
        ))}
      </div>
      <div>
        <div className="mb-1 text-sm font-bold uppercase">Settings</div>
        {settings.map((o) => (
          <Link
            href={o.href}
            key={o.name}
            className="flex-row-start mb-1 gap-2 text-gray-600 hover:font-semibold"
          >
            {o.icon}
            <span className="">{o.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
