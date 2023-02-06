import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
//import Modal from "../components/modal/modal";
import { Modal } from "cj_modal_plugin"
//import Modal from "cj_hrnet_modal_plugin"
import Form from "../components/form";

function Home() {
  useEffect(() => {
    document.title = "HRnet";
  }, []);

  const [showModal, setShowModal] = useState(false);

  const showCallback = (event) => {
    setShowModal(!showModal);
  };

  return (
    <main>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <NavLink to="/employeeslist">View Current Employees</NavLink>
        <h2>Create Employee</h2>
        <Form showModalCallback={showCallback} />
      </div>
      <Modal show={showModal} closeCallback={showCallback} style={{}}>
        Employee Created!
      </Modal>
    </main>
  );
}

export default Home;