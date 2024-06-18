"use client";
import FormInput, {
  FormStars,
  FormTextarea,
} from "@/components/form_components/form_input";
import { Button } from "@/components/ui/button";
import { sendFeedback } from "@/lib/api/sendform";
import { cn } from "@/lib/utils";
import { React, useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const FeedBack = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    if (e["bot_fiedld"] == "") {
      sendFeedback(e)
        .then((res) => {
          console.log(res);
        })
        .then(() => {
          console.log("sent");
          toast.success("Message sent successfully");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Message was not sent");
        });
    }
  };

  return (
    <section className="flex w-full flex-col items-center gap-5">
      <h2>FeedBack</h2>
      <div className="flex w-9/12 flex-col items-center rounded-3xl border-4 border-white p-5 md:flex-row md:p-10">
        <form
          className="flex w-full flex-col gap-6 md:flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
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
                    required: "First Name is required",
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
                    required: "Last Name is required",
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
                    message: "Not a valid Email",
                  },
                  required: "Email is required",
                }}
              />
              <div className="">
                <FormStars
                  className="w-full"
                  title="How satisfied are you with our services"
                  placeholder="Doe"
                  use_name="rating"
                  errorsOBJ={errors}
                  registerOBJ={register}
                  restrictions={{
                    max: {
                      value: 5,
                      message:
                        "Wow thank you, but unfortunatly we cant have a rating above 5",
                    },
                    min: {
                      value: 0,
                      message: "Cant rate less than 0",
                    },
                    required: "Rating is required",
                  }}
                />
              </div>
            </div>
            <div>
              <FormTextarea
                className="md:h-96"
                title="Feedback"
                placeholder="Optional Feedback message..."
                use_name="feedback"
                errorsOBJ={errors}
                registerOBJ={register}
                restrictions={{
                  maxlength: {
                    value: 15,
                    message: "error message",
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
      </div>
    </section>
  );
};

export default FeedBack;
