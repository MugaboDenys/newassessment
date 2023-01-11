import Image from "next/image";
import Link from "next/link";
import chevron from "../../public/chevron.svg"

const Header = () => {
  return (
    <div className="bg-darkblue ">
      <div className="max-w-[960px] mx-auto py-2 flex justify-end">
        <Link
          className="text-sm font-light text-white flex gap-x-1 items-center"
          href={"/"}
        >
          University of Stuttgart{" "}
          <span>
            <Image src={chevron} height={20} width={20} alt="" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
