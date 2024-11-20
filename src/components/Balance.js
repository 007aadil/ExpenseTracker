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

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <div className="text-center mt-6">
      <h4 className="text-lg text-gray-700">Your Balance</h4>
      <h1 className="text-4xl font-bold text-green-600">{moneyFormatter(total)}</h1>
    </div>
  );
};
