import Link from "next/link";

const Button2 = ({name, link}) => {
    return ( 
        <Link className="inline text-white px-6 py-3 border-2 border-white uppercase font-semibold text-sm" href={link}>
        {name}
        </Link>
     );
}
 
export default Button2;