import React, { ReactNode } from "react";

const Showcase = () => {
  return (
    <div className="grid w-full gap-2 px-2 py-2 md:grid-cols-2 lg:grid-cols-3">
      <Card>Button</Card>
      <Card>Dialog</Card>
      <Card>Menu</Card>
      <Card>Select</Card>
      <Card>Popover</Card>
      <Card>Combobox</Card>
    </div>
  );
};

export default Showcase;

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid h-52 w-full place-items-center rounded-xl border border-border bg-background hover:bg-background/40">
      <h1 className="text-xl font-medium">{children}</h1>
    </div>
  );
};
