import LineProgressBar from "@/components/Shared/LineProgressBar";
import { FaSackDollar } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { MdDelete, MdModeEdit } from "react-icons/md";
type TDebitCardProps={
      dataType:string;
      completed:string;
      maxCompleted:number;
      startDate:string;
      endDate:string;
      clientName:string;
}
const DebitCard = ({
      dataType,
      completed,
      maxCompleted,
      startDate,
      endDate,
      clientName,
    }:TDebitCardProps) => {
      
// console.log(clientName)
  const residualAmount = maxCompleted - parseInt(completed);
  return (
    <div className="flex items-center justify-center m-2">
      <div className="bg-slate-100 p-2 hover:bg-slate-200">
        <div className="text-xl font-semibold my-1">
          {dataType === "Credit"
            ? `Credit : You -> ${clientName}`
            : `Debit : ${clientName} -> You`}
        </div>
        <div className="flex items-center gap-4 my-1">
          <span
            className={
              "inline-block p-4 rounded-full " +
              (dataType === "Credit" ? "bg-green-200" : "bg-red-200")
            }
          >
            <FaSackDollar
              className={
                dataType === "Credit"
                  ? "text-green-700 text-3xl"
                  : "text-red-700 text-3xl"
              }
            />
          </span>

          <div className="w-[50vw]">
            <div className="flex items-center justify-between my-1">
              <span>{startDate}</span>
              <span>{endDate}</span>
            </div>

            <div>
              <LineProgressBar
                completed={completed}
                dataType={dataType}
                maxCompleted={maxCompleted}
                className="flex-1"
              />
            </div>
            <div className="flex justify-between items-center my-1">
              <span>$0.00</span>
              <span>${maxCompleted}.00</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-start">
          <div>
            Residual Amount:{" "}
            <span className={
                dataType === "Credit"
                  ? "text-green-700 "
                  : "text-red-700"
              }>{dataType !== "Credit" && "-"}
              ${residualAmount}.00</span>
          </div>
          <div className="flex items-center justify-around gap-1">
            <span className="bg-gray-300 hover:bg-gray-400 p-2 text-lg">
              <FaPlus />
            </span>
            <span className="bg-gray-300 hover:bg-gray-400 p-2 text-lg">
              <IoEye />
            </span>
            <span className="bg-gray-300 hover:bg-gray-400 p-2 text-lg">
              <MdModeEdit />
            </span>
            <span className="bg-gray-300 hover:bg-gray-400 p-2 text-lg">
              <MdDelete />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebitCard;
