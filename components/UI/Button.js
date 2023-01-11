import Link from "next/link";

const Button = ({name}) => {
    return ( 
        <Link href={'/'} className="inline-block bg-darkblue text-white uppercase py-4 px-4 font-semibold md:text-sm text-xs hover:bg-darkish duration-300">
            {name}
        </Link>
     );
}
 
export default Button;