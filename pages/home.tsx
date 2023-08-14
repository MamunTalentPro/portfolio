import BodyText from "@/components/Dream/BodyText";
import CompanyProfile from "@/components/Dream/CompanyProfile";
import CompanySalary from "@/components/Dream/CompanySalary";
import Contact from "@/components/Dream/Contact";
import Navbar from "@/components/Dream/Navbar";

export default function HomePage(){
  return <>
    <Navbar/>
    <BodyText/>
    <CompanySalary/>
    <CompanyProfile/>
    <div className="bg-gradient-to-r from-black to-yellow-800 w-screen">
      <Contact/>
    </div>


  </>
}
