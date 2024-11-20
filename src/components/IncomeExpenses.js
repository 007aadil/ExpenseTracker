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

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts.filter((item) => item > 0).reduce((acc, item) => (acc += item), 0);
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  );

  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      <div className="bg-green-100 p-4 rounded-lg text-center">
        <h4 className="text-lg font-semibold text-green-700">Income</h4>
        <p className="text-2xl font-bold text-green-600">{moneyFormatter(income)}</p>
      </div>
      <div className="bg-red-100 p-4 rounded-lg text-center">
        <h4 className="text-lg font-semibold text-red-700">Expense</h4>
        <p className="text-2xl font-bold text-red-600">{moneyFormatter(expense)}</p>
      </div>
    </div>
  );
};
