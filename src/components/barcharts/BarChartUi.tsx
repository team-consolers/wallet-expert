"use client"
// File: BarChartUi.tsx

import React from 'react';
import BarChart from '@/components/barcharts/BarChart';

type ChartData = {
  labels: string[];
  datasets: { label: string; data: number[]; backgroundColor: string[] }[];
};

const BarChartUi = () => {
  // Define chartData with its expected structure
  const chartData: ChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Income',
        data: [10, 20, 30, 50, 0, 70, 110],
        backgroundColor: ['green',],
      },
      {
        label: 'Expense',
        data: [90, 50, 30, 50, 60, 90, 90],
        backgroundColor: ['red'],
      }
    ],
  };

  return (
    <div className="container mx-auto w-full lg:w-1/2 h-72">
      <BarChart data={chartData} />
    </div>
  );
};

export default BarChartUi;


