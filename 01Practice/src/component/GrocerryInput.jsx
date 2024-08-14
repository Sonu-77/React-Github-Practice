import React from 'react'

export default function GrocerryInput({
    onchangegrocery,
    onclickbutton
}) {
  return (
    <>
        <h2 className='text-2xl font-bold text-green-600 mb-5'>Grocerry List</h2>
          <form onSubmit={onclickbutton}>
            <div className="relative flex gap-1 ">

              <input onChange={onchangegrocery} type="text"  className="block w-64 p-2 ps-10 text-sm text-slate-300  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Enter Grocerry..."  />
              <button type='submit'  className= " text-white    bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
          </form>
        
    </>
  )
}
