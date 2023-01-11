import Image from "next/image";
import Link from "next/link";

const Card2 = ({ link, title, img, date }) => {
  return (
    <div className="md:max-w-[20rem]">
      <Link
        href={link}
        className="block bg-white duration-300 hover:bg-paleblue"
      >
        <div className="flex justify-center">
          <Image src={img} alt="" className="" />
        </div>
        <div className="py-8 px-5">
          <h3 className="text-lg font-bold">{title}</h3>
          <h6 className="font-thin text-sm pt-5">{date}</h6>
        </div>
      </Link>
    </div>
  );
};

export default Card2;
