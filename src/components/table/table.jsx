import { useContext } from "react";
import Active from "../../pages/active/active";
import Navbar from "../navbar/navbar";
import { ValueContext } from "../../assets/context/valueContext";
import All from "../../pages/all/all";
import Archived from "../../pages/archived/archived";
import Draft from "../../pages/draft/draft";

const Table = () => {
    const { valueState } = useContext(ValueContext);
  
    let content;
    if (valueState === "Active") {
      content = <Active />;
    } else if (valueState === "All") {
      content = <All />;
    } else if (valueState === "Archived") {
      content = <Archived />;
    } else if(valueState === "Draft") {
      content = <Draft />
    }else{
        content = <Active />
    }
  
    return (
      <div>
        <Navbar />
        {content}
      </div>
    );
  };
  

export default Table;