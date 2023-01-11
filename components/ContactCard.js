import Image from "next/image";
import Link from "next/link";
import ContactLink from "./ContactLink";

const ContactCard = ({image,img1, img2, img3, title, link1, link2, link3, name1, name2, name3}) => {
    return ( 
        <div>
            <Image alt="" src={image}/>
            <div>
                <h2>{title}</h2>
                <ContactLink img={img1} link={link1} name={name1} />
                <ContactLink img={img2} link={link2} name={name2} />
                <ContactLink img={img3} link={link3} name={name3} />
                <ContactLink img={img4} link={link4} name={name4} />
                
            </div>
        </div>
     );
}
 
export default ContactCard;