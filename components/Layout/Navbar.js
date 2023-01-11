import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo-inverted-en.svg";
import lan from "../../public/lan.png";
import menu from "../../public/menu.png";
import search from "../../public/search.png";


const Navbar = () => {
  return (
    <div className="bg-white sticky top-0 z-10">
      <div className="max-w-[960px] mx-auto flex justify-between py-10 px-5 md:px-0 ">
        <Link href={"/"}>
          <Image src={logo} alt="" className="w-full h-14 md:h-20" />
        </Link>
        <div className="flex gap-x-2">
          <div className="hidden md:flex gap-x-2">
            <Link href={"/"}>
              <Image alt="" src={lan} width={45} height={45} />
            </Link>
            <Link href={"/"}>
              <Image alt="" src={search} width={45} height={45} />
            </Link>
          </div>
          <Link href={"/"}>
            <Image alt="" src={menu} width={45} height={45} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
