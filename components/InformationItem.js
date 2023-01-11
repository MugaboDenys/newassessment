import Image from "next/image";
import Link from "next/link";
import carret from "../public/carret.png"

const InformationItem = ({link, title, information}) => {
    return ( 
        <Link href={link} className="group flex items-center gap-5">
            <div className="md:p-10 p-6 rounded-full border-2 border-white duration-300 group-hover:bg-white">
                <Image src={carret} alt=""/>
            </div>
            <div className="">
                <h3 className="md:text-2xl text-lg font-semibold">{title}</h3>
                <p className="text-sm font-thin">{information}</p>
            </div>

        </Link>
     );
}
 
export default InformationItem;