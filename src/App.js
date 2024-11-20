import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import './index.css';

const App = () => {
  return (
    <GlobalProvider>
      <div className="bg-gray-100 min-h-screen py-10 px-4 md:px-20">
        <div className="max-w-3xl mx-auto shadow-lg rounded-lg bg-white p-6">
          <Header />
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
};

export default App;

