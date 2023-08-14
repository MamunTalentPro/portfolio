export default function Navbar(){
  return <div className="bg-gradient-to-r from-black to-yellow-800 w-screen h-20 flex">
    <h3 className="pt-5 ml-10 tracking-wide animate-pulse">SOFTWARE ENGINEER</h3>
    <div className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l text-white md:border-gray-700	flex flex-wrap items-center text-base justify-center">
      <a href="#projects" className="mr-5 hover:text-white">
        Projects
      </a>
      <a href="#skills" className="mr-5 hover:text-white">
        Skills
      </a>
      <a href="#company_salary" className="mr-5 hover:text-white">
        Company Salary
      </a>
    </div>
    <a
      href="#contact"
      className="inline-flex items-center  text-white  border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
      Contact
    </a>
  </div>
}
