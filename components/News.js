import Image from "next/image";
import Link from "next/link";
import image2 from "../public/image2.png";
import image1 from "../public/image1.png";
import image3 from "../public/image3.png";
import image5 from "../public/image5.jpeg";
import image7 from "../public/image7.jpeg";
import image8 from "../public/image8.jpeg";
import instagram from "../public/instagram.jpeg"
import usus from "../public/usus.png";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Button2 from "./Button2";

const News = () => {
  return (
    <div className="bg-darkish">
      <div className="md:max-w-[960px] mx-auto py-16">
        <h3 className="font-bold text-2xl text-white">
          News and events for students
        </h3>
        <div className="grid md:grid-cols-3 grid-cols-1 px-4 md:px-0 gap-7 pt-7">
          <div className="flex flex-col gap-7">
            <Link
              href={"/"}
              className="inline-block hover:bg-paleblue duration-300 py-10 px-5 bg-white "
            >
              <h4 className="text-xl font-bold">
                Newsticker: Information on the coronavirus
              </h4>
              <h6 className="font-thin text-sm pt-5">Article | 11/10/22</h6>
            </Link>
            <Link href={'https://www.usus.uni-stuttgart.de/en/blog/less-stress/'} className="hover:bg-paleblue hidden md:block duration-300 bg-white max-w-[20rem]">
              <Image src={image3} alt="" />
              <p className="text-sm font-thin px-5 py-5">
                Everyone feels sometimes stressed during their studies. But what
                can you do against it? Constanza has a few tips.
              </p>
              <div className="flex items-center justify-between px-5 py-3">
                <h6 className="font-thin text-sm">USUS blog | 1/4/23</h6>
                <Image src={usus} alt="" width={40} height={40} />
              </div>
            </Link>
            <div className="hidden md:block">
            <Card1
              link={
                "https://www.student.uni-stuttgart.de/en/news/all/Sim--Tech-solve-their-3rd-case/'"
              }
              title={"Sim & Tech solve their 3rd case"}
              img={image5}
              date={"News 12/19/22"}
            />
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <Card2
              link={
                "https://www.student.uni-stuttgart.de/en/news/event/Exhibition-in-the-House-of-Cultures-Stuttgart-at-the-City-Hall/"
              }
              img={image1}
              title={
                "Exhibition in the House of Cultures Stuttgart at the City Hall"
              }
              date={"Event 1/12 – 1/25/23"}
            />
            <div className="hidden md:block">
            <Card1
              link={
                "https://www.uni-stuttgart.de/en/university/news/all/instagram/"
              }
              title={"The University of Stuttgart's five most beautiful Instagram pictures"}
              img={instagram}
              date={"Article 12/21/22"}
            />
            </div>
            <div className="hidden md:block">
            <Card1
              link={
                "https://www.uni-stuttgart.de/en/university/news/all/instagram/"
              }
              title={"Diversity calendar makes diversity visible"}
              img={image7}
              date={"News 12/15/22"}
            />
            </div>
          </div>
          <div className="flex flex-col gap-7">
          <Card2
              link={
                "https://www.student.uni-stuttgart.de/en/news/event/Exhibition-in-the-House-of-Cultures-Stuttgart-at-the-City-Hall/"
              }
              img={image2}
              title={
                `Latest episode: "Intelligent systems will help us in crises and in the future"`
              }
              date={"Video | YouTube"}
            />
            <div className="hidden md:block">
            <Link
              href={"/"}
              className="inline-block hover:bg-paleblue duration-300 py-10 px-5 bg-white "
            >
              <h4 className="text-xl font-bold">
              Impressive research in the field of business administration
              </h4>
              <h6 className="font-thin text-sm pt-5">News 12/21/22</h6>
            </Link>
            </div>
            <Card1
              link={
                "https://www.uni-stuttgart.de/en/university/news/all/instagram/"
              }
              title={"Energy savings in November"}
              img={image8}
              date={"Article 12/15/22"}
            />
          </div>
        </div>
        <div className="flex gap-3 justify-center mt-20">
            <Button2 name={"ALL News"} link={"https://www.student.uni-stuttgart.de/en/news/all/"} />
            <Button2 name={"ALL Events"} link={"https://www.student.uni-stuttgart.de/en/news/event/"} />
        </div>
      </div>
    </div>
  );
};

export default News;
