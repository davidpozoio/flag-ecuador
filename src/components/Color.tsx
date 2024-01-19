import { MouseEventHandler, ReactNode } from "react";

interface ColorProps {
  color: string;
  children?: ReactNode;
}

const Color = ({ color, children = "" }: ColorProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    alert(`${color} Ecuador`);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: color,
        width: "fit-content",
        height: "fit-content",
        padding: "20px",
      }}
    >
      {children}
    </div>
  );
};
export default Color;
