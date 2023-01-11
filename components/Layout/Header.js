import Image from "next/image";
import Link from "next/link";
import chevron from "../../public/chevron.svg"
import lan2 from "../../public/lan2.png"
import search2 from "../../public/search2.png"

const Header = () => {
  return (
    <div className="bg-darkblue ">
      <div className="max-w-[960px] mx-auto py-2- px-5 md:px-0 flex md:justify-end justify-between">
        <Link
          className="hidden text-sm font-light text-white md:flex gap-x-1 items-center"
          href={"/"}
        >
          University of Stuttgart{" "}
          <span>
            <Image src={chevron} height={20} width={20} alt="" />
          </span>
        </Link>
        <Link
          className="flex text-sm font-light text-white md:hidden gap-x-1 items-center"
          href={"/"}
        >
          Uni
          <span>
            <Image src={chevron} height={20} width={20} alt="" />
          </span>
        </Link>
        <div className="flex md:hidden">
            <Image src={lan2} className="" height={45} width={45} alt=""/>
            <Image src={search2} className=" border-l-2"  height={45} width={45} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Header;
