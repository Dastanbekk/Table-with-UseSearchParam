import { Route, Routes } from "react-router-dom"
import Sidebar from "../components/sidebar/sidebar"
import Topbar from "../components/topbar/topbar"
import Table from "../components/table/table"
import Customers from "../components/customers/customers"

const Routerr = () => {
  return (
    <div className="grid grid-cols-[5%_minmax(90%,1fr)] max-w-[1820px] w-full mx-auto ">
    <Sidebar />
    <div className="py-7 px-3 bg-[#F9FBFD]">
        <Topbar />
        <Routes>
            <Route index element={<Table />}/>
            <Route path="/customers" element={<Customers />} />
        </Routes>
    </div>
    
    </div>
  )
}

export default Routerr