import React from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalEl = document.getElementById("overlays");

const Modal = ({ children, onClose }) => {
  return (
    <>
      {createPortal(<Backdrop onClose={onClose} />, portalEl)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalEl)}
    </>
  );
};

export default Modal;
