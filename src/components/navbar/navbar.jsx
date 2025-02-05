import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">

        <div className="p-1 flex  bg-[#F1F5F9] rounded-md">
            <NavLink data-page="/navbar" to={'#'} className="py-1 px-2 rounded-md" >All</NavLink>
            <NavLink data-page="/navbar" to={'#'} className="py-1 px-2 rounded-md" >Active</NavLink>
            <NavLink data-page="/navbar" to={'#'} className="py-1 px-2 rounded-md" >Draft</NavLink>
            <NavLink data-page="/navbar" to={'#'} className="py-1 px-2 rounded-md" >Archived</NavLink>
        </div>
        <div className="flex gap-3 mt-5 items-center">
            <button className="flex items-center py-1 rounded-md bg-white px-2">
                <i className="bx bx-file text-xl"></i>
                Export
            </button>
            <button className="flex items-center gap-1 px-2 py-1 text-[14px]  rounded-lg bg-black text-white ">
                <i className='bx bx-plus-circle '></i>
                Add Product
            </button>
        </div>

    </div>
  )
}

export default Navbar