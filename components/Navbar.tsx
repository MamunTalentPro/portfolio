

export default function Navbar() {
  return (
    <header className="bg-teal-800 md:sticky top-0 z-10">
      <div className="container mx-auto  text-grey-800 flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium  mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Md.Al Mamun Mim
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Data Structures
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Contact
      
        </a>
      </div>
    </header>
  )
}
