import Image from "next/image";
import Link from "next/link";

const ContactLink = ({img, link, name}) => {
    return ( 
        <span>
            <Image src={img} alt=""/>
            <Link href={link} className="text-xs font-thin underline hover:no-underline">{name}</Link>
        </span>
     );
}
 
export default ContactLink;