import Image from "next/image";
import Link from "next/link";
import carret from "../public/carret.png"


const Cardlink = ({name}) => {
    return ( 
        <span className="flex gap-x-2">
                <Image src={carret} alt="" height={20} width={20} className="w-4 h-4"/>
                <Link href={'/'} className="font-bold text-darkblue text-sm hover:underline">{name}</Link>
            </span>
        
     );
}
 
export default Cardlink;