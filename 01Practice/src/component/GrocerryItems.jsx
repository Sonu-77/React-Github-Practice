import React from 'react'

export default function GrocerryItems({grocerry,buyOnClick,bought}) {
  return (
    <>
       {
        grocerry.map((item,index)=>{
          const isBought= bought.includes(item)
          return(
            
            <ul key={index} className={`flex h-16 w-96 border-2 justify-around items-center mt-5 ${isBought?"bg-[#219ebc]":"bg-white"} `} >
              <li className='text-xl font-semibold'>{item}</li>
              <button onClick={()=>buyOnClick(item)} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">{isBought ? "Remove" : "Buy"}</button>
           </ul>
          )
        })
       }
    </>
  )
}
