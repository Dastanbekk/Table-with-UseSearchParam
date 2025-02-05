import { Link, NavLink } from "react-router-dom"



const Sidebar = () => {
  return (
    <div className="border-r-2 flex py-5 justify-between px-2 flex-col items-center border-gray-300 h-screen">

        <div  className="flex flex-col {classes} text-gray-400  text-2xl justify-between gap-5">
            <NavLink className='px-1.5 rounded-md flex justify-center items-center py-1.5 ' to={"/"}  data-page="/"><i className='bx bx-home'></i></NavLink>
            <Link  className="px-1.5 rounded-md flex justify-center items-center py-1.5" ><i className='bx bx-cart' ></i></Link>
            <Link  className="px-1.5 rounded-md flex justify-center items-center py-1.5" ><i className='bx bx-box' ></i></Link>
            <NavLink className="px-1.5 rounded-md flex justify-center items-center py-1.5" to={'/customers'} data-page="/"><i className='bx bx-user'></i></NavLink>
            <Link  className="px-1.5 rounded-md flex justify-center items-center py-1.5" ><i className='bx bx-stats' ></i></Link>
        </div>
        <div>
            <Link className="px-1.5 text-gray-400  text-2xl rounded-md border-gray-300"><i className='bx bx-cog' ></i></Link>
        </div>

    </div>
  )
}

export default Sidebar