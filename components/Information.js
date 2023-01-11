import InformationItem from "./InformationItem";

const Information = () => {
    return ( 
        <div className="bg-darkblue text-white px-5 md:px-0">
            <h2 className="text-2xl font-bold pt-10">Information for students</h2>
            <div className="md:max-w-[960px] mx-auto mt-10 grid md:grid-cols-2 grid-cols-1 gap-12">
                <InformationItem link={"https://www.student.uni-stuttgart.de/en/study-programs/"} title={"All study programs"} information={"On the webpages of your degree program you will find information on the study program structure, …"}/>
                <InformationItem link={"https://www.student.uni-stuttgart.de/en/study-programs/"} title={"Getting started with your studies"} information={"Enrollment formalities, orientation events and dates: you will be faced with many new impressions …"}/>
                <InformationItem link={"https://www.student.uni-stuttgart.de/en/study-programs/"} title={"Organizing your studies"} information={"Assembled here for your ready reference are pointers on how to keep track of it all – studies, …"}/>
                <InformationItem link={"https://www.student.uni-stuttgart.de/en/study-programs/"} title={"Exam organization"} information={"Get basic information here about exams - registration, regulations, illness notices. But the …"}/>
                <InformationItem link={"https://www.student.uni-stuttgart.de/en/study-programs/"} title={"Digital Services"} information={"From C@MPUS to E-Mail, VPN and WLAN: Varied digital offerings help you organize your student life. …"}/>
                <InformationItem link={"https://www.student.uni-stuttgart.de/en/study-programs/"} title={"Financial aid and scholarships"} information={"Coming up short in financing your studies? Look here for information on financial aid options such …"}/>
                <InformationItem link={"https://www.student.uni-stuttgart.de/en/study-programs/"} title={"International students in Stuttgart"} information={"Through us, you will receive student support, practical advice for your daily life and information …"}/>
                <InformationItem link={"https://www.student.uni-stuttgart.de/en/study-programs/"} title={"Study abroad"} information={"You are interested in spending time abroad during your studies? Then you’ve come to the right place!"}/>
                <InformationItem link={"https://www.student.uni-stuttgart.de/en/study-programs/"} title={"Counseling for students"} information={"How do I organize my studies? Is my study program right for me? Where can I turn to if I have …"}/>
                <InformationItem link={"https://www.student.uni-stuttgart.de/en/study-programs/"} title={"Internships, mentoring and getting on …"} information={"Studying for a degree opens up a wide range of career opportunities to you. The University of …"}/>
                <InformationItem link={"https://www.student.uni-stuttgart.de/en/study-programs/"} title={"Additional programs, support, further …"} information={"Tips for efficient studies, specific help concerning your study program, language courses, …"}/>
                <InformationItem link={"https://www.student.uni-stuttgart.de/en/study-programs/"} title={"Joining in student activities"} information={"There is more to the student life than classes and exams. The Uni has many groups and initiatives in …"}/>
                <InformationItem link={"https://www.student.uni-stuttgart.de/en/study-programs/"} title={"University A-Z"} information={"This list contains all study-related terms, counseling and information services in alphabetic order."}/>
                <InformationItem link={"https://www.student.uni-stuttgart.de/en/study-programs/"} title={"Point of contact for questions about …"} information={"Do you have questions about your application, your studies, or your exams? Do you need to submit a …"}/>

            </div>

        </div>
     );
}
 
export default Information;