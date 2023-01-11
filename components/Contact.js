import ContactCard from "./ContactCard";
import image9 from "../public/image9.jpg";
import loact1 from "../public/locat1.jpg";
import locat2 from "../public/locat2.png";
import profile from "../public/profile.png";
import phone from "../public/phone.png";
import email from "../public/email.png";
import ex from "../public/ex.png";
import info from "../public/info.svg";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="bg-white">
      <div className="md:max-w-[960px] px-5 mx-auto py-20">
        <h3 className="text-xl text-darkish font-bold">Contact</h3>
        <div className="pt-10 grid md:grid-cols-3 grid-cols-1 gap-5 ">
          <div className="border-2 py-10 border-darkish md:max-w-[20rem]">
            <div className="flex justify-center">
              <Image src={image9} alt="" className="rounded-full" />
            </div>
            <div className="pt-10 px-5 space-y-4">
              <h3 className="text-xl font-bold">Dezernat Internationales</h3>
              <span className="flex items-center">
                <Image src={profile} alt="" height={30} width={30}/>
                <Link href={'https://www.uni-stuttgart.de/en/university/organization/persons/Dezernat-Internationales-00001/'} className="underline underline-offset-4 hover:no-underline"> Profile page </Link>
              </span>
              <span className="flex items-center">
                <Image src={phone} alt="" height={30} width={30}/>
                <Link href={'tel:+4971168568566'} className="text-sm font-thin underline underline-offset-4 hover:no-underline"> +49 711 685 68566 </Link>
              </span>
              <span className="flex items-center">
                <Image src={email} alt="" height={30} width={30}/>
                <Link href={"mailto:incoming@ia.uni-stuttgart.de"} className="text-sm font-thin underline underline-offset-4 hover:no-underline"> Write e-mail </Link>
              </span>
              <span className="flex items-start gap-x-3">
                <Image src={info} alt="" height={20} width={20}/>
                <p className="text-sm font-thin">
                <Link href={"mailto:incoming@ia.uni-stuttgart.de"} className="text-sm font-thin underline underline-offset-4 hover:no-underline">  Office hours (online)</Link> <span><Image src={ex} className="inline" alt=""/> </span>
                Mon & Wed 10 a.m. to noon; Office hours (on site): Mon & Wed, 2 p.m. to 4 p.m. , Tue & Thur, 10 a.m. to noon
                </p>
                
              </span>
            </div>
          </div>
          
          <div className="border-2 py-10 border-darkish md:max-w-[20rem]">
            <div className="flex justify-center">
              <Image src={loact1} alt="" className="rounded-full" />
            </div>
            <div className="pt-10 px-5 space-y-4">
              <h3 className="text-xl font-bold">Student Counseling Center</h3>
              <span className="flex items-center">
                <Image src={profile} alt="" height={30} width={30}/>
                <Link href={'https://www.uni-stuttgart.de/en/university/organization/persons/Dezernat-Internationales-00001/'} className="underline underline-offset-4 hover:no-underline"> Profile page </Link>
              </span>
              <span className="flex items-center">
                <Image src={phone} alt="" height={30} width={30}/>
                <Link href={'tel: +4971168582133 '} className="text-sm font-thin underline underline-offset-4 hover:no-underline">  +49 711 685 82133  </Link>
              </span>
            </div>
          </div>

          <div className="border-2 py-10 border-darkish md:max-w-[20rem]">
            <div className="flex justify-center">
              <Image src={locat2} alt="" className="rounded-full" width={155} height={155} />
            </div>
            <div className="pt-10 px-5 space-y-4">
              <h3 className="text-xl font-bold">Student Service and Examination Office</h3>
              <span className="flex items-center">
                
                <p  className="text-xs font-thin"> Pfaffenwaldring 5 c, 70569 Stuttgart, House of students </p>
              </span>
              <span className="flex items-center">
                <Image src={profile} alt="" height={30} width={30}/>
                <Link href={'tel: +4971168582133 '} className="text-sm font-thin underline underline-offset-4 hover:no-underline">Further information</Link>
              </span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
