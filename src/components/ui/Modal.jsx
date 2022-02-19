import React from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalEl = document.getElementById("overlays")

const Modal = (props) => {
  return <>{createPortal(<Backdrop />, portalEl)}
      {createPortal(<ModalOverlay>{props.children}<ModalOverlay/>, portalEl)}</>
};

export default Modal;
