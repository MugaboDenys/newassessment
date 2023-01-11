import Image from "next/image";
import Link from "next/link";

const Card1 = ({link, title, img, date}) => {
    return ( 
        <div className="md:max-w-[20rem]">
            <Link href={link} className="block bg-white py-10 px-7 space-y-5 duration-300 hover:bg-paleblue">
                <div className="flex justify-center">
                <Image src={img} alt="" className="rounded-full"/>
                </div>
                <h3 className="text-lg font-bold">{title}</h3>
                <h6 className="font-thin text-sm pt-5">{date}</h6>

            </Link>
        </div>
     );
}
 
export default Card1;