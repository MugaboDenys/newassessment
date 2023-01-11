import Link from "next/link";
import Herocard from "./Herocard";
import Button from "./UI/Button";
import easydb1 from "../public/easydb1.jpeg";
import easydb2 from "../public/easydb2.jpeg";
import easydb3 from "../public/easydb3.jpeg";
import carret from "../public/carret.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="bg-paleblue min-h-[320px]">
        <div className="md:max-w-[960px] mx-auto py-24 relative px-5 md:px-0">
          <div className="md:w-[40rem]">
            <h2 className="text-3xl font-semibold">Students</h2>
            <p className="text-sm font-thin mt-6">
              Important news, links, documents, and tips for students of the
              University of Stuttgart: This page offers information on your
              studies.
            </p>
          </div>
          <div className="w-64 h-64 hidden absolute right-0 top-20 md:flex items-center rounded-full duration-200 bg-darkish text-white hover:bg-white hover:text-black">
            <Link href={"/"}>
              <h4 className="uppercase px-5">
                Information for prospective students
              </h4>
            </Link>
          </div>
          <span className="flex md:hidden items-center mt-10 ">
            <Image src={carret} width={30} height={30} alt="" />
            <Link href={"https://www.uni-stuttgart.de/en/study/"} className="block text-sm uppercase underline underline-offset-4 hover:no-underline pl-5">Information for prospective students</Link>
          </span>
        </div>
      </div>
      <div className="bg-white py-10">
        <div className="md:max-w-[960px] px-5 mx-auto mb-20">
          <div className="md:w-2/3 mx-auto">
            <form className="bg-greyish px-5 py-5">
              <h4 className="text-sm font-thin">Begriff</h4>
              <input
                type="text"
                placeholder="Suchen Sie nach Begriffen aus dem Uni-Glossar"
                className="w-full h-12 placeholder-neutral-700 text-sm font-thin px-4 text-darkish mt-1 mb-6 outline-darkblue outline-1"
              />
              <Button name={"Begriff suchen"} />
            </form>
          </div>
          <div className="mt-10 grid md:grid-cols-3 grid-cols-1 gap-5">
            <Herocard
              img={easydb1}
              title={"Digital services"}
              link1={"C@MPUS - campus management and lectures"}
              link2={"How to C@MPUS"}
              link3 ={"ILIAS"}
              link4 = {"University library"}
              link5 ={"E-mail"}
              link6 ={"Further digital services"}
            />
            <Herocard
              img={easydb2}
              title={"Organizing your studies"}
              link1={"Getting started"}
              link2={"Formalities"}
              link3 ={"Exam organization"}
              link4 = {"Student Service and Examination Office"}
              link5 ={"Academic calendar"}
              link6 ={"Further digital services"}
            />
            <Herocard
              img={easydb3}
              title={"University life"}
              link1={"stuvus - the Student Union of the University of Stuttgart [de]"}
              link2={"Studierendenwerk Stuttgart (Student Services)"}
              link3 ={"Internships, mentoring and career"}
              link4 = {"Campus map"}
              link5 ={"E-mail"}
              link6 ={"Lost property"}
            />
          </div>
          <div className="flex flex-col items-center mt-10">
            <Button name={"Study Programs' webpages fro students"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
