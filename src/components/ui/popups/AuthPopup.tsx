import Modal from "react-bootstrap/Modal";
import style from "./Authpup.module.css";
import IconBtn from "../buttons/IconBtn";
import { X } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

const AuthPopup = (props: { show: boolean; onHide: () => void }) => {
  return (
    <Modal
      className={`popup_modal ${style.popup_modal}`}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <IconBtn
        parentClassName="position-absolute top-0 end-0"
        icon={<X color="#666666" />}
        className={style.close_btn}
        onclick={props.onHide}
      />
      <Modal.Header
        className={`${style.popup_note} d-none d-sm-flex justify-content-center align-items-center`}
      >
        Let's learn, share & inspire each other with our passion for computer
        engineering. <Link to={"/auth/signup"}> Sign up now</Link> 🤘🏼
      </Modal.Header>
      <Modal.Body className="p-sm-5 p-4">
        <Outlet />
      </Modal.Body>
    </Modal>
  );
};

export default AuthPopup;
