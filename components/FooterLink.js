import Link from "next/link";

const FooterLink = ({link, name}) => {
    return ( 
        <Link href={link} className="text-sm underline underline-offset-2 hover:no-underline text-gray-200">
            {name}
        </Link>
     );
}
 
export default FooterLink;