"use client"
import { useState } from "react";

const AdvertiseTable = (props) => {
    const [advertiseData,setAdvertiseData] = useState([
        {
            col1:"Ranking Priority",
            col2:"Tier 1",
            col3:"Tier 2",
            col4:"Tier 4"
        },
        {
            col1:"Logos",
            col2:"Yes",
            col3:"Yes",
            col4:"Yes"
        },
        {
            col1:"Photos",
            col2:"12",
            col3:"6",
            col4:"3"
        },
        {
            col1:"Website Link",
            col2:"Yes",
            col3:"Yes",
            col4:"Yes"
        },
        {
            col1:"Request a Bid",
            col2:"Yes",
            col3:"Yes",
            col4:"Yes"
        }
    ]) 
    return (
        <>
            <table className="table-responsive w-full text-sm md:text-lg font-bold text-left text-[#221F20] font-lato">
                <thead className="text-3xl text-[#221F20] font-bold dark:text-gray-100 border-[#221F20] font-lato">
                    <tr className=" dark:border-zinc-600 text-center">
                        <th scope="col" className="px-3 py-3 border-collapse  dark:border-zinc-600">
                        </th>
                        <th scope="col" className="bg-[#C1272D] text-white py-3 border-2 border-[#221F20] dark:border-zinc-600">
                            Elite <br/> <span className="text-xl md:text-2xl font-medium font-lato">Starting at $224/month</span>
                        </th>
                        <th scope="col" className="bg-[#C1272D] bg-opacity-40py-3 border-2 border-[#221F20] dark:border-zinc-600">
                            Pro <br/><span className="text-xl md:text-2xl font-medium font-lato">Starting at $224/month</span>
                        </th>
                        <th scope="col" className="bg-[#C1272D] bg-opacity-10 py-3 border-2 border-[#221F20] dark:border-zinc-600">
                            Standard<br/><span className="text-xl md:text-2xl font-medium font-lato">Starting at $224/month</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="text-xl md:text-2xl border-3 border-[#221F20]">
                {
                    advertiseData.map((row, i) => {
                        return (
                    <tr className="bg-white border-2 border-[#221F20] dark:border-zinc-600 dark:bg-transparent text-center " key={i}>
                        <th scope="row"
                            className="px-6 py-4 border-2 border-[#221F20] dark:border-zinc-600 font-semibold text-gray-900 whitespace-nowrap dark:text-zinc-100">
                            {row.col1}
                        </th>
                        <td className="px-6 py-4 border-2 border-[#221F20] font-medium dark:border-zinc-600 dark:text-zinc-100">
                            {row.col2}
                        </td>
                        <td className="px-6 py-4 border-2 border-[#221F20] font-medium dark:border-zinc-600 dark:text-zinc-100">
                            {row.col3}
                        </td>
                        <td className="px-6 py-4 border-2 border-[#221F20] font-medium dark:border-zinc-600 dark:text-zinc-100">
                            {row.col4}
                        </td>
                    </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </>
        )
}
export default AdvertiseTable