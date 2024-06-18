import React from "react";
import { IoMail } from "react-icons/io5";
import ContactDialogue from "../homepage/contact_dialogue/contact";

import { motion } from "framer-motion";

const MailIconButton = () => {
  return (
    <div className="transition-transform hover:scale-105 active:scale-95">
      <ContactDialogue>
        <motion.div
          animate={{
            rotate: [0, 10, -10, 10, -10, 10, -10, 10, 0],
            scale: [1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1],
            transition: {
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 5,
            },
          }}
        >
          <IoMail className="m-4 size-8" color="white" />
        </motion.div>
      </ContactDialogue>
    </div>
  );
};

export default MailIconButton;
