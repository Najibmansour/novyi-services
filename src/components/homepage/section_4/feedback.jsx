"use client";
import FormInput, {
  FormStars,
  FormTextarea,
} from "@/components/form_components/form_input";
import { Button } from "@/components/ui/button";
import { sendForm } from "@/lib/api/sendform";
import { cn } from "@/lib/utils";
import { React, useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const FeedBack = () => {
  const text =
    "py-2 px-3 lg:text-xl text-md text-gray-200 placeholder:text-gray-200 placeholder:text-opecity-90  lg:py-3 lg:px-6 w-full rounded-lg bg-opacity-20 border-white border-[1px] border-opacity-30 bg-white";

  const form = useRef();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    if (e["bot_fiedld"] == "") {
      sendForm(e)
        .then((res) => {
          console.log(res);
        })
        .then(() => {
          toast.error("Message was not sent");
        })
        .catch(() => {
          toast.success("Message sent successfully");
        });
    }
  };

  return (
    <section className="flex h-auto w-full flex-col items-center gap-5">
      <h2>FeedBack</h2>
      <div className="flex w-9/12 flex-col items-center rounded-3xl border-4 border-white p-5 md:flex-row md:p-10">
        <form className="flex w-full flex-col gap-6 md:flex-col">
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="space-y-4 md:w-1/2">
              <div className="flex w-full flex-col gap-6 md:flex-row">
                <FormInput
                  className="w-full"
                  title="First Name"
                  placeholder="John"
                  use_name="first_name"
                  errorsOBJ={errors}
                  registerOBJ={register}
                  restrictions={{
                    pattern: {
                      value: /[0-9]/,
                      message: "Not a valid phone number",
                    },
                    required: "phone number is required",
                  }}
                />
                <FormInput
                  className="w-full"
                  title="Last Name"
                  placeholder="Doe"
                  use_name="last_name"
                  errorsOBJ={errors}
                  registerOBJ={register}
                  restrictions={{
                    pattern: {
                      value: /[0-9]/,
                      message: "Not a valid phone number",
                    },
                    required: "phone number is required",
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
                    message: "Not a valid phone number",
                  },
                  required: "phone number is required",
                }}
              />
              <div className="">
                <FormStars
                  className="w-full"
                  title="How satisfied are you with our services"
                  placeholder="Doe"
                  use_name="last_name"
                  errorsOBJ={errors}
                  registerOBJ={register}
                  restrictions={{
                    pattern: {
                      value: /[0-9]/,
                      message: "Not a valid phone number",
                    },
                    required: "phone number is required",
                  }}
                />
              </div>
            </div>
            <div>
              <FormTextarea
                className="md:h-96"
                title="Feedback"
                placeholder="Tell us how to improve..."
                use_name="feedback"
                errorsOBJ={errors}
                registerOBJ={register}
                restrictions={{
                  pattern: {
                    value: /[0-9]/,
                    message: "Not a valid phone number",
                  },
                  required: "phone number is required",
                }}
              />
            </div>
          </div>
          <Button className="rounded-xl">Send</Button>
        </form>
      </div>
    </section>
  );
};

export default FeedBack;
