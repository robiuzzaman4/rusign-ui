import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-border">
      <div className="mx-auto w-full max-w-screen-xl px-2">
        <div className="flex w-full items-center justify-between gap-4 border-l border-r border-dashed border-l-border border-r-border px-8 py-4">
          <Link href={"/"} className="text-xl font-semibold">
            Rusign
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
