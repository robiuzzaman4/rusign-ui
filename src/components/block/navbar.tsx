import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-border">
      <div className="mx-auto w-full max-w-screen-xl px-2">
        <div className="flex w-full items-center justify-between gap-4 border-l border-r border-dashed border-l-border border-r-border px-2 py-4">
          <Link href={"/"} className="text-xl font-medium">
            Rusign UI
          </Link>
          <Link
            href={"https://github.com/"}
            target="_blank"
            className="text-xl font-medium"
          >
            <Github size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
