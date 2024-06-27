import Hero from "@/components/block/hero";
import Showcase from "@/components/block/showcase";
import React from "react";

const Home = () => {
  return (
    <div className="h-full w-full border-b border-dashed border-border">
      <div className="mx-auto w-full max-w-screen-xl px-2">
        <div className="border-l border-r border-dashed border-l-border border-r-border">
          <Hero />
          <Showcase />
        </div>
      </div>
    </div>
  );
};

export default Home;
