"use client"
import React from 'react';
import LineChart from './LineChart';

const LineCharUi = () => {
  const labels = [
    'Feb 25',
    'Mar 3',
    'Mar 10',
    'Mar 17',
    'Mar 24',
    'Mar 31',
    'Apr 7',
    'Apr 14',
    'Apr 21',
    'Apr 28',
  ];
  const datasets = [
    {
      label: 'Balance',
      data: [0, 9050, 13000, 12500, 8000, 11500, 11000, 11000, 11000, 10000],
      backgroundColor: 'green',
      borderColor: '#EAB308',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <LineChart labels={labels} datasets={datasets} />
    </div>
  );
};

export default LineCharUi;
