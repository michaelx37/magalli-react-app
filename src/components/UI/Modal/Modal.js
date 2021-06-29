import React, { Fragment /*, useState*/ } from "react";

import classes from "./Modal.module.css";

const Modal = (props) => {
  // const [showModal, setShowModal] = useState();

  // const hideModal = () => {
  //   setShowModal(null);
  // };

  return (
    <Fragment>
      <div className={classes.backdrop} /* onClick={hideModal} */ />
      <div className={classes.modal}>
        <header>
          <h2></h2>
        </header>
        <div>
          <p></p>
        </div>
        <footer>
          <button></button>
          <button></button>
        </footer>
      </div>
    </Fragment>
  );
};

export default Modal;
