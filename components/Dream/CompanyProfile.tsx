import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { companyNameAndProfile, rowsOfCompanyProfile, rowsSlug } from "./Data/Table";
import { rows } from './Data/Table/index';

export default function CompanyProfile(){
  return <section id="company_salary" className="bg-gradient-to-r from-black to-yellow-800 h-auto ">
    <h3 className="text-center text-white animate-pulse">
Monetary compensation at various Software companies of Bangladesh for an entry-level position    </h3>

    <div className="w-2/3 mx-auto py-10 ">
      <div className="relative overflow-x-auto bg-gradient-to-r from-black to-yellow-800 shadow-md sm:rounded-lg">
        <div className="pb-4 pl-4 ">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={ 2 }
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-gradient-to-r from-black to-yellow-800">
          <thead className="text-xs text-white uppercase  dark:bg-gray-700 dark:text-gray-400">
            <tr>

              { rowsOfCompanyProfile.map((row: string, index:number) => <th key={row} scope="col" className="px-6 py-3 text-center">
                {row}
              </th>)}

            </tr>
          </thead>
          <tbody>

            { companyNameAndProfile.map((data:any)=>
            <tr key={data.name} className=" border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-yellow-700 dark:hover:bg-gray-600">

                { rowsOfCompanyProfile.map((v,indx:number)=>
                      <th key={indx}
                      scope="row"
                      className="text-center px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                    >
                    { indx===6 && <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
 }
                          {data[rowsOfCompanyProfile[indx]]}
                    </th>)}

            </tr>

                )}





          </tbody>
        </table>
        </div>

 </div>



  </section>

}
