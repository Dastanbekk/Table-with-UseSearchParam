import { Button, DatePicker, Form, Input, Modal, Radio, Segmented } from "antd";
import { useContext, useRef, useState } from "react";
import { ValueContext } from "../../assets/context/valueContext";
// import { NavLink } from "react-router-dom"

const Navbar = () => {
  const { setValueState } = useContext(ValueContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Add The Product
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const name_input = useRef(null)
  const sales_input = useRef(null)
  const price_input = useRef(null)
  const handleAdd = async()=>{
    const newProduct = {
      name:name_input.current.input.value,
      status:selectedValue,
      price:price_input.current.input.value,
      total_sales:sales_input.current.input.value,
      date:selectedDate
    }   
    
    const response = await fetch("http://localhost:3000/posts",{
      method:"POST",
      headers:{
        "Content-Type":"Application/json"
      },
      body:JSON.stringify(newProduct)
    })

    if (response.ok) {
      console.log("Product added successfully!");
      name_input.current.input.value = "";
      price_input.current.input.value = "";
      sales_input.current.input.value = "";
      setSelectedValue(null);
      setSelectedDate(null);
    } else {
      console.error("Failed to add product.");
    }
    
  }
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleChangeDate = (date, dateString) => {
    setSelectedDate(dateString);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="p-1 flex  bg-[#F1F5F9] rounded-md">
        <Segmented
          options={["All", "Active", "Draft", "Archived"]}
          onChange={(value) => {
            setValueState(value);
          }}
        />
      </div>
      <div className="flex gap-3 mt-5 items-center">
        <button className="flex items-center py-1 rounded-md bg-white px-2">
          <i className="bx bx-file text-xl"></i>
          Export
        </button>
        <Button color="default" variant="solid" onClick={showModal}>
          <i className="bx bx-plus-circle "></i>
          Add Product
        </Button>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form className="flex flex-col !gap-5">
            <div>
              <span>Name:</span>
              <Input placeholder="Product name" ref={name_input} />
            </div>
            <div>
              <span className="block">Status:</span>
              <Radio.Group onChange={handleChange}>
                <Radio.Button value="active">Active</Radio.Button>
                <Radio.Button value="draft">Draft</Radio.Button>
                <Radio.Button value="archived">Archived</Radio.Button>
              </Radio.Group>
            </div>
            <div>
              <span>Price:</span>
              <Input type="number" ref={price_input} />
            </div>
            <div>
              <span>Sales:</span>
              <Input type="number" ref={sales_input} />
            </div>
            <div>
              <span className="block">Created at:</span>
              <DatePicker onChange={handleChangeDate}/>
            </div>
            <Button type="primary" onClick={handleAdd}>Add the Product</Button>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
