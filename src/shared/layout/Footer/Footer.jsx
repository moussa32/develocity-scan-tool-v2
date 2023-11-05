import { Link } from "react-router-dom";
import { BiLogoFacebook, BiLogoTelegram } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";

const links = [
  { href: "/account-settings", label: "Account settings" },
  { href: "/support", label: "Support" },
  { href: "/license", label: "License" },
  { href: "/sign-out", label: "Sign out" },
];

const Footer = () => {
  return (
    <footer className="bg-primaryLayoutColor text-white">
      <div className="container pt-[112.6px] pb-[56.8px]">
        <nav className="flex items-center gap-5">
          <ul className="flex font-medium text-xs gap-5">
            <li>@ {new Date().getUTCFullYear()} Develocity</li>
            <li>
              <Link to="/terms-conditions">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/terms-conditions">Privacy Policy</Link>
            </li>
          </ul>
          <ul className="flex font-medium text-xs gap-[9px]">
            <li className="border-[#888888] rounded-full w-8 h-8 flex items-center justify-center text-lg border-1">
              <a href="www.facebook.com/123">
                <BiLogoTelegram size={14} />
              </a>
            </li>
            <li className="border-[#888888] rounded-full w-8 h-8 flex items-center justify-center text-lg border-1">
              <a href="www.facebook.com/123">
                <RiTwitterXFill size={14} />
              </a>
            </li>
            <li className="border-[#888888] rounded-full w-8 h-8 flex items-center justify-center text-lg border-1">
              <a href="www.facebook.com/123">
                <BiLogoFacebook />
              </a>
            </li>
          </ul>
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger>English</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </footer>
  );
};

export default Footer;
