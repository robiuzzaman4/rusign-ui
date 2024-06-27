import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full border-b border-dashed border-border px-2 py-16">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tighter">
        Accessible, Reusable, and Customizable UI Components Built on Top of{" "}
        <Link className="underline" href={"https://www.radix-ui.com/primitives"} target="_blank">
          Radix Primitives
        </Link>{" "}
        and{" "}
        <Link className="underline" href={"https://tailwindcss.com/"} target="_blank">
          Tailwind CSS.
        </Link>
      </h1>
    </div>
  );
};

export default Hero;
