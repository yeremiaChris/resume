import { HTMLAttributes } from "react";

interface BoxProps extends HTMLAttributes<HTMLDivElement> {}
const Box = ({ ...props }: BoxProps) => {
  return (
    <div
      {...props}
      className={
        "border-2 hover:bg-black hover:text-white transition-colors duration-300 border-black rounded p-4 " +
        props.className
      }
    >
      {props.children}
    </div>
  );
};

export default Box;
