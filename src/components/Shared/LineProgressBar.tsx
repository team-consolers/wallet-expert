"use client";
import { Line } from "rc-progress";
import ProgressBar from "@ramonak/react-progress-bar";
type TBarProps = {
  completed: string;
  dataType: string;
  height?: string;
  className?: string;
  width?: string;
  labelSize?: string;
  maxCompleted:number;
};
const LineProgressBar = ({
  completed,
  dataType,
  height = "15px",
  className,
  width = "100%",
  labelSize = "10px",
  maxCompleted
}: TBarProps) => {
  const bgColor = dataType === "Credit" ? "green" : "red";
  return (
    <ProgressBar
      className={className}
      width={width}
      bgColor={bgColor}
      completed={completed}
      maxCompleted={maxCompleted}
      height={height}
      labelSize={labelSize}
    />
  );
};

export default LineProgressBar;
