import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "₹ " +
    p[0]
      .split("")
      .reverse()
      .reduce((acc, num, i) => (i && !(i % 3) ? num + "," : num) + acc, "") +
    "." +
    p[1]
  );
}

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li
      className={`flex justify-between items-center p-3 rounded-lg mb-2 ${
        transaction.amount < 0 ? "bg-red-100" : "bg-green-100"
      }`}
    >
      <span className="font-medium">{transaction.text}</span>
      <div className="flex items-center space-x-4">
        <span
          className={`font-bold ${
            transaction.amount < 0 ? "text-red-600" : "text-green-600"
          }`}
        >
          {sign}
          {moneyFormatter(transaction.amount)}
        </span>
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="text-red-500 hover:text-red-700 transition"
        >
          x
        </button>
      </div>
    </li>
  );
};
