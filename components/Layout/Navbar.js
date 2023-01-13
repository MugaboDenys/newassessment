import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo-inverted-en.svg";
import logo1 from "../../public/logo-inverted-en2.svg";
import search1 from "../../public/search1.svg";
import search2 from "../../public/search2.svg";
import cross from "../../public/cross.svg";
import menu2 from "../../public/menu2.svg";
import lan from "../../public/lan.png";
import menu from "../../public/menu.png";
import search from "../../public/search.png";
import { useState } from "react";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className={`${open ? `bg-darkish` : `bg-white` } duration-300  sticky top-0 z-10`}>
      <div className="max-w-[960px] mx-auto flex justify-between py-10 px-5 md:px-0 relative">
        <Link href={"/"}>
          <Image src={open ? logo1: logo} alt="" className="w-full h-14 md:h-20" />
        </Link>
        <div className="flex gap-x-2">
          <div className="hidden md:flex gap-x-2">
            <Link href={"/"}>
              <Image alt="" src={lan} width={45} height={45} className={`${open ? "hidden":"block"}`} />
            </Link>
            <Link href={"/"}>
              <Image className="pt-2" alt="" src={open ? search1 : search2} width={35} height={35} />
            </Link>
          </div>
          <Link href={"/"}>
            <Image
              onClick={handleOpen}
              alt=""
              src={open ? cross : menu2}
              width={45}
              height={45}
            />
          </Link>
        </div>
      </div>
      {open ? <div className="h-screen w-full absolute  bg-opacity-90 bg-darkish">
        <div className="max-w-[960px] mx-auto mt-60 text-white ">
        <Link href={'/programs'} onClick={handleOpen} className="block  font-bold text-4xl py-3 px-5 duration-300 hover:text-darkish hover:bg-paleblue">All Study pro</Link>
        </div>
      </div> : null }
    </div>
  );
};

export default Navbar;
