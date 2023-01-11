import Image from "next/image";
import Link from "next/link";

const Social = ({ link, img, hover, name }) => {
  return (
    <Link href={link} className="">
      <div className={`w-16 h-16 rounded-full border-2 border-gray-200 hover:border-transparent duration-300 ${hover} flex justify-center items-center`}>
        <Image src={img} alt="" className={`w-10 h-10`} />
      </div>
      <h5 className="text-sm text-gray-200 text-center">{name}</h5>
    </Link>
  );
};

export default Social;
