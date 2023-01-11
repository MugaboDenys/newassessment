import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo-inverted-en2.svg";
import facebook from "../../public/facebook.svg";
import twitter from "../../public/twitter.svg";
import youtube from "../../public/youtube.svg";
import linkedin from "../../public/linkedin.svg";
import instagram from "../../public/instagram.svg";
import mastodon from "../../public/mastodon.svg";
import Social from "../Social";
import FooterLink from "../FooterLink";

const Footer = () => {
  return (
    <div className="bg-darkish">
      <div className="md:max-w-[960px] px-5 md:px-0 mx-auto py-20">
        <div className="md:flex ">
          <Link href={"https://www.uni-stuttgart.de/en/"}>
            <Image src={logo} alt="" />
          </Link>
          <div className="md:flex pt-6 md:pt-0 grid grid-cols-3 justify-items-center pl-10 md:gap-4 gap-6">
            <Social
              img={facebook}
              hover={"hover:bg-darkblue"}
              name={"Facebook"}
              link={"https://www.facebook.com/Universitaet.Stuttgart"}
            />
            <Social
              img={instagram}
              hover={"hover:bg-red-400"}
              name={"Instagram"}
              link={"https://www.instagram.com/unistuttgart/"}
            />
            <Social img={twitter} hover={"hover:bg-twitter"} name={"Twitter"} link={"https://twitter.com/Uni_Stuttgart"}/>
            <Social img={mastodon} hover={"hover:bg-indigo-600"} name={"mastodon"} link={"https://xn--baw-joa.social/@Uni_Stuttgart"}/>
            <Social img={youtube} hover={"hover:bg-red-600"} name={"YouTube"} link={"https://www.youtube.com/user/UniStuttgartTV"}/>
            <Social img={linkedin} hover={"hover:bg-linkedin"} name={"LinkedIn"} link={"https://www.linkedin.com/school/universit%C3%A4t-stuttgart/"}/>
          </div>
        </div>

        <div className="mt-20 grid md:grid-flow-col grid-flow-row gap-16">
            <div className="">
                <h3 className="text-lg font-bold text-white">Audience</h3>
                <div className="pt-10 flex flex-col gap-2">
                    <FooterLink link={"https://www.student.uni-stuttgart.de/en/"} name={"Students"}/>
                    <FooterLink link={"https://www.beschaeftigte.uni-stuttgart.de/"} name={"Employees"}/>
                    <FooterLink link={"https://www.uni-stuttgart.de/en/alumni-supporters/"} name={"Alumni and supporters"}/>
                    <FooterLink link={"https://www.student.uni-stuttgart.de/en/"} name={"Industry"}/>
                </div>
            </div>
            <div className="">
                <h3 className="text-lg font-bold text-white">Formalities</h3>
                <div className="pt-10 flex flex-col gap-2">
                    <FooterLink link={"https://www.student.uni-stuttgart.de/en/"} name={"Legal notice"}/>
                    <FooterLink link={"https://www.beschaeftigte.uni-stuttgart.de/"} name={"Privacy notice"}/>
                    <FooterLink link={"https://www.uni-stuttgart.de/en/alumni-supporters/"} name={"Accessibility"}/>
                    <FooterLink link={"https://www.student.uni-stuttgart.de/en/"} name={"Certificates"}/>
                </div>
            </div>
            <div className="">
                <h3 className="text-lg font-bold text-white">Services</h3>
                <div className="pt-10 flex flex-col gap-2">
                    <FooterLink link={"https://www.student.uni-stuttgart.de/en/"} name={"Contact"}/>
                    <FooterLink link={"https://www.beschaeftigte.uni-stuttgart.de/"} name={"Press"}/>
                    <FooterLink link={"https://www.uni-stuttgart.de/en/alumni-supporters/"} name={"Jobs"}/>
                    <FooterLink link={"https://www.student.uni-stuttgart.de/en/"} name={"Apply for a Doctorate or Postdoc"}/>
                    <FooterLink link={"https://www.student.uni-stuttgart.de/en/"} name={"Uni-Shop"}/>
                </div>
            </div>
            <div className="">
                <h3 className="text-lg font-bold text-white">Organization</h3>
                <div className="pt-10 flex flex-col gap-2">
                    <FooterLink link={"https://www.student.uni-stuttgart.de/en/"} name={"Faculties and Institutes"}/>
                    <FooterLink link={"https://www.beschaeftigte.uni-stuttgart.de/"} name={"Facilities"}/>
                    <FooterLink link={"https://www.uni-stuttgart.de/en/alumni-supporters/"} name={"Central Administration"}/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
