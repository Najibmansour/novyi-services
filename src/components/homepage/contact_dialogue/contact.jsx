import FormInput, {
  FormStars,
  FormTextarea,
} from "@/components/form_components/form_input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { sendContact } from "@/lib/api/sendform";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const ContactDialogue = ({ children }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    if (e["bot_fiedld"] == "") {
      sendContact(e)
        .then((res) => {
          console.log(res);
        })
        .then((err) => {
          toast.success("Message sent successfully");
          console.log(err);
        })
        .catch((err) => {
          toast.error("Message was not sent");
          console.log(err);
        });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-min max-w-[400px] border-2 bg-red-950/50 p-10 backdrop-blur md:max-w-min">
        <DialogHeader>
          <DialogTitle className="text-center text-xl md:text-4xl">
            Contact Us
          </DialogTitle>
        </DialogHeader>
        <form
          className="flex w-full flex-col gap-3 md:flex-col md:gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-3 md:flex-row md:gap-6">
            <div className="space-y-4 md:w-1/2">
              <div className="flex w-full flex-col gap-3 md:flex-row md:gap-6">
                <FormInput
                  className="w-full"
                  title="Full Name"
                  placeholder="John Doe"
                  use_name="full_name"
                  errorsOBJ={errors}
                  registerOBJ={register}
                  restrictions={{
                    required: "Name is required",
                  }}
                />
                <FormInput
                  className="w-full"
                  title="Phone"
                  placeholder="+xxxxxxxxx"
                  use_name="phone_num"
                  errorsOBJ={errors}
                  registerOBJ={register}
                  restrictions={{
                    pattern: {
                      value: /[0-9]/,
                      message: "Not a valid phone number",
                    },
                    required: "Phone number is required",
                  }}
                />
              </div>
              <FormInput
                title="Mail"
                placeholder="johndoe@gmail.com"
                use_name="from_mail"
                errorsOBJ={errors}
                registerOBJ={register}
                restrictions={{
                  pattern: {
                    value: /[0-9]/,
                    message: "Not a valid email",
                  },
                  required: "Email is required",
                }}
              />
            </div>
            <div>
              <FormTextarea
                className="md:h-96"
                title="Subject"
                placeholder="message..."
                use_name="subject"
                errorsOBJ={errors}
                registerOBJ={register}
                restrictions={{
                  required: "Message is required",
                  maxlength: {
                    value: 15,
                    message: "error message", // JS only: <p>error message</p> TS only support string
                  },
                }}
              />
            </div>
            <input
              name="bot-field"
              placeholder="do not fill this"
              type="hidden"
              {...register("bot_fiedld")}
            />
          </div>
          <Button className="rounded-xl">SEND</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialogue;
