import { cn } from "@/lib/utils";
import { StarsIcon } from "lucide-react";
import React, { useState } from "react";

export default function FormInput({
  title,
  placeholder,
  use_name,
  restrictions,
  errorsOBJ,
  registerOBJ,
  className,
}) {
  return (
    <div className={cn(className, "flex h-auto w-full flex-col gap-1")}>
      <label className="text-xl md:text-3xl">{title}:</label>
      <input
        className="placeholder:text-md rounded-2xl border-2 border-white bg-transparent px-5 py-3 placeholder:text-white md:placeholder:text-xl"
        type="text"
        id={use_name}
        placeholder={placeholder}
        {...registerOBJ(use_name, restrictions)}
      />
      {errorsOBJ[use_name]?.message && (
        <span className="">{errors.from_name.message}</span>
      )}
    </div>
  );
}

export function FormTextarea({
  title,
  placeholder,
  use_name,
  restrictions,
  errorsOBJ,
  registerOBJ,
  className,
}) {
  return (
    <div className={cn(className, "flex h-auto w-full flex-col gap-1")}>
      <label className="text-xl md:text-3xl">{title}:</label>
      <textarea
        className="placeholder:text-md rounded-2xl border-2 border-white bg-transparent px-5 py-3 placeholder:text-white md:h-60 md:w-[36rem] md:placeholder:text-xl"
        type="text"
        id={use_name}
        placeholder={placeholder}
        {...registerOBJ(use_name, restrictions)}
      />
      {errorsOBJ[use_name]?.message && (
        <span className="">{errors.from_name.message}</span>
      )}
    </div>
  );
}

export function FormStars({ title, use_name, errorsOBJ, className }) {
  "use client";
  const [rating, setRating] = useState(0);
  return (
    <div className={cn(className, "flex h-auto w-full flex-col gap-1")}>
      <label className="text-xl md:text-3xl">{title}:</label>

      <div className="flex flex-row gap-1">
        {Array.from(Array(5).keys()).map((_, i) => (
          <button
            type="button"
            key={i}
            onClick={() => {
              setRating(i);
            }}
          >
            <StarIcon fill={rating >= i ? "white" : "none"} />
          </button>
        ))}
      </div>
      {errorsOBJ[use_name]?.message && (
        <span className="">{errors.from_name.message}</span>
      )}
    </div>
  );
}

function StarIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-10 md:size-10"
      viewBox="0 0 24 24"
      fill={props.fill}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
