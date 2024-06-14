import React from "react";
import { IoMail } from "react-icons/io5";

const MailIconButton = () => {
  return (
    <div className="hover:scale-105 transition-transform active:scale-95">
      <IoMail className="size-8 m-4" color="white" />
    </div>
  );
};

export default MailIconButton;
