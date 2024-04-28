"use client";
import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material/styles";
import { Box, Divider } from "@mui/material";
const data = [
  { value: 70, label: "Income", color: "#19A01E" },
  { value: 30, label: "Expenses", color: "#ED1C24" },
];
const colors = ["#19A01E", "#ED1C24"];
const size = {
  width: 300,
  height: 200,
};
const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  font: "bold",
  dominantBaseline: "central",
  fontSize: 30,
}));
const SummeryWidget = () => {
  function PieCenterLabel({ children }: { children: React.ReactNode }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {/* <tspan fontSize="2rem" fontWeight="bold">
              124
            </tspan>
            <tspan
              x={left + width / 2}
              dy="1.4em"
              fontSize="1.1rem"
              fontWeight="normal"
            >
              Cameras
            </tspan> */}
        {children}
      </StyledText>
    );
  }

  return (
    <div className="flex items-center justify-between border border-gray-300 rounded-md hover:shadow-xl w-full lg:w-4/12">
      {/* pie chart contaier */}
      <div className="w-32">
        <StyledEngineProvider injectFirst>
          {/* StyledEngineProvider is used to override the mui provided styles */}
          <Box className="md:w-full " sx={{ padding: 0, margin: 0 }}>
            <PieChart
              series={[
                {
                  data,
                  innerRadius: 30,
                  outerRadius: 70,
                },
              ]}
              colors={colors}
              legend={{ hidden: true }}
              {...size}
            >
              <PieCenterLabel>
                {/* Content to be displayed in the center */}
                <tspan fontSize="1.5rem"></tspan>
              </PieCenterLabel>
            </PieChart>
          </Box>
        </StyledEngineProvider>
      </div>
      {/* summery text container */}
      <div className=" text-gray-600 pr-1 md:pr-8 lg:px-2 w-full ">
        <h3 className="text-xl text-gray-900 font-bold mb-2">This Month</h3>
        <h4 className="flex justify-between">
          <span className="font-semibold text-gray-600">Income: </span>
          <span className="text-green-500 text-right">৳ 00.00</span>
        </h4>
        <h4 className="flex justify-between">
          <span className="font-semibold text-gray-600"> Expenses: </span>
          <span className="text-red-500 text-right ml-0 md:ml-2">৳00.00</span>
        </h4>
        <Divider />

        <h4 className="flex justify-between mt-1">
          <span className="font-semibold text-gray-600 ">Remaing: </span>
          <span className="text-green-500 text-right">৳ 00.00</span>
        </h4>
      </div>
    </div>
  );
};

export default SummeryWidget;
