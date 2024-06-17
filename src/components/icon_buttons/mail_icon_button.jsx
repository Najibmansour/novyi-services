import React from "react";
import { IoMail } from "react-icons/io5";
import ContactDialogue from "../homepage/contact_dialogue/contact";

const MailIconButton = () => {
  return (
    <div className="transition-transform hover:scale-105 active:scale-95">
      <ContactDialogue>
        <IoMail className="m-4 size-8" color="white" />
      </ContactDialogue>
    </div>
  );
};

export default MailIconButton;
