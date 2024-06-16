import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function importAll(r) {
  let images = {};
  // console.log(r.keys());
  r.keys().forEach((item, index) => {
    const productName = item.split("/")[1];

    images[productName] =
      images[productName] === undefined ? [] : images[productName];

    images[productName].push(r(item));
  });
  return images;
}
