import { Fragment } from "react";
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return (
    <div onClick={props.CartHide} className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-75 flex items-center justify-center z-20">
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center"></div>
    </div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className=" top-24 z-30  fixed left-96 justify-center items-center" >
    <div  className="w-96 h-auto bg-white p-4 rounded-3xl shadow-md z-30" >
      <div>{props.children}</div>
    </div></div>
  );
};


const Modal = (props) => {
    const portalElement = document.getElementById("overlay");
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop CartHide={props.CartHide} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
