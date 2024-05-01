"use client"


import DebtsModal from "@/components/DebtsModal";
import DebitCard from "./DebitCard";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import {useState} from "react";
const DebitPage = () => {
  const [open,setOpen]=useState(false)
  const debitData = [
    {
      id: 5,
      dataType: "Credit",
      completed: "160",
      maxCompleted: 190,
      startDate: "12/02/2024",
      endDate: "12/03/2024",
      clientName: "Mark",
    },
    {
      id: 1,
      dataType: "Debit",
      completed: "180",
      maxCompleted: 200,
      startDate: "12/05/2024",
      endDate: "12/06/2024",
      clientName: "Emma",
    },
    {
      id: 2,
      dataType: "Debit",
      completed: "150",
      maxCompleted: 320,
      startDate: "12/10/2024",
      endDate: "12/11/2024",
      clientName: "John",
    },
    {
      id: 3,
      dataType: "Credit",
      completed: "190",
      maxCompleted: 200,
      startDate: "12/15/2024",
      endDate: "12/16/2024",
      clientName: "Sarah",
    },
    {
      id: 4,
      dataType: "Debit",
      completed: "175",
      maxCompleted: 250,
      startDate: "12/20/2024",
      endDate: "12/21/2024",
      clientName: "Michael",
    },
  ];

  // Initialize sums for "Debit" and "Credit"
  let sumOfDebitDifferences = 0;
  let sumOfCreditDifferences = 0;

  // Iterate over debitData
  debitData.forEach((item) => {
    // Convert completed and maxCompleted to numbers
    const completed = parseInt(item.completed);
    const maxCompleted = item.maxCompleted;

    // Check dataType
    if (item.dataType === "Debit") {
      // Calculate difference and add to sumOfDebitDifferences
      sumOfDebitDifferences += maxCompleted - completed;
    } else if (item.dataType === "Credit") {
      // Calculate difference and add to sumOfCreditDifferences
      sumOfCreditDifferences += maxCompleted - completed;
    }
  });

  // console.log("Sum of differences for Debit:", sumOfDebitDifferences);
  // console.log("Sum of differences for Credit:", sumOfCreditDifferences);

  return (
    <div>
      <div className="flex justify-center relative">
        <DebtsModal open={open} setOpen={setOpen}/>
        <div className="flex flex-col gap-2 fixed lg:bottom-[40px] lg:right-[40px] bottom-[10px] right-[10px]">
          <button onClick={()=>setOpen(true)} className="text-xl lg:text-5xl md:text-3xl text-green-700">
            <FaPlusCircle />
          </button>
          <button className="text-xl lg:text-5xl md:text-3xl text-red-700">
            <FaMinusCircle />
          </button>
        </div>
        <div className="bg-slate-100 p-1 rounded-md">
          {debitData.map((item) => (
            <DebitCard
              key={item.id}
              dataType={item.dataType}
              completed={item.completed}
              maxCompleted={item.maxCompleted}
              startDate={item.startDate}
              endDate={item.endDate}
              clientName={item.clientName}
            />
          ))}

          <div className="mx-4 my-1">
            Total Residual Amount: 
            <span className="text-green-700 ">
              ${sumOfDebitDifferences + sumOfCreditDifferences}.00
            </span>
          </div>
          <div className="mx-4 my-1">
            Net Residual Amount: 
            <span
              className={
                sumOfDebitDifferences > sumOfCreditDifferences
                  ? "text-red-700"
                  : "text-green-700"
              }
            >
              {sumOfDebitDifferences > sumOfCreditDifferences
                ? "-" + "$" + (sumOfDebitDifferences - sumOfCreditDifferences)
                : sumOfCreditDifferences - sumOfDebitDifferences}
              .00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebitPage;