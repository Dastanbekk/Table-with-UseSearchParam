
const Topbar = () => {
  return (
    <div className="flex justify-between w-full">
        <div className="flex text-gray-400 font-bolder    items-center">
            <p>Dashboard</p>
            <i className='bx bx-chevron-right text-2xl text-gray-400' ></i>
            <p>Dashboard</p>
            <i className='bx bx-chevron-right text-2xl text-gray-400' ></i>
            <p>Dashboard</p>
        </div>
        <div className="w-[30%] flex  gap-3">
            <form className="border-2  gap-2 bg-white  border-gray-400 flex w-[90%] items-center py-1 px-2 rounded-lg">
                <i className='text-gray-400 text-xl bx bx-search-alt-2' ></i>
                <input type="text" placeholder="Search..." className="outline-none text-gray-400" />
            </form>
            <button className="py-1 bg-white px-1 border-gray-400 rounded-full border flex items-center justify-center">
                <i className="bx bx-user text-2xl text-gray-400 "></i>
            </button>
        </div>
    </div>
  )
}

export default Topbar