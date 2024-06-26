import React from "react";

const Showcase = () => {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-2">
      <div className="grid w-full gap-2 border-b border-l border-r border-dashed border-b-border border-l-border border-r-border px-2 py-2 md:grid-cols-2 lg:grid-cols-3">
        <div className="grid h-52 w-full place-items-center rounded-xl border border-border bg-background">
          <h1 className="text-xl font-medium">Button</h1>
        </div>
        <div className="grid h-52 w-full place-items-center rounded-xl border border-border bg-background">
          <h1 className="text-xl font-medium">Dialog</h1>
        </div>
        <div className="grid h-52 w-full place-items-center rounded-xl border border-border bg-background">
          <h1 className="text-xl font-medium">Menu</h1>
        </div>
      </div>
      <div className="grid w-full gap-2 border-b border-l border-r border-dashed border-b-border border-l-border border-r-border px-2 py-2 md:grid-cols-2 lg:grid-cols-3">
        <div className="grid h-52 w-full place-items-center rounded-xl border border-border bg-background">
          <h1 className="text-xl font-medium">Button</h1>
        </div>
        <div className="grid h-52 w-full place-items-center rounded-xl border border-border bg-background">
          <h1 className="text-xl font-medium">Dialog</h1>
        </div>
        <div className="grid h-52 w-full place-items-center rounded-xl border border-border bg-background">
          <h1 className="text-xl font-medium">Menu</h1>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
