"use client";

import React, { useState } from "react";

export default function Transition({ children }) {
  const [displayChildren, setDisplayChildren] = useState(children);

  return <div>{displayChildren}</div>;
}
