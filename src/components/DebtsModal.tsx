import React from "react";

const DebtsModal = ({ open, setOpen }: { open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50 ${open ? "block" : "hidden"}`}
    >
      <div className="w-[50vw] h-[50vh] flex flex-col justify-center items-center border-2 border-orange-400 rounded-md bg-slate-200/50 backdrop-filter backdrop-blur-md">
        <span>DebtsModal</span>
        <button onClick={() => setOpen(false)}>Close</button>
      </div>
    </div>
  );
};

export default DebtsModal;

