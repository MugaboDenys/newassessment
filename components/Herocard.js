import Image from "next/image";
import Link from "next/link";
import carret from "../public/carret.png"
import Cardlink from "./Cardlink";

const Herocard = ({img, title, link1, link2, link3, link4, link5, link6}) => {
    return ( 
        <div className="space-y-5">
            <Image src={img} alt=""/>
            <h3 className="text-lg font-bold">{title}</h3>
            <Cardlink name={link1} />
            <Cardlink name={link2} />
            <Cardlink name={link3} />
            <Cardlink name={link4} />
            <Cardlink name={link5} />
            <Cardlink name={link6} />
        </div>
     );
}
 
export default Herocard;