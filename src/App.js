import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import History from "./pages/user/History";
import Payments from "./pages/user/Payments";
import Loans from "./pages/user/Loans";
import Deposits from "./pages/user/Deposits";
import Currencies from "./pages/user/Currencies";
import MyAccount from "./pages/user/MyAccount";
import ShowDeposit from "./pages/user/ShowDeposit";
import Main from "./pages/Main";
import AdminShowUser from "./pages/admin/AdminShowUser";
import AdminAccount from "./pages/admin/AdminAccount";
import AdminCurrencies from "./pages/admin/AdminCurrencies";
import AdminLoanOrders from "./pages/admin/AdminLoanOrders";
import AdminDepositOrders from "./pages/admin/AdminDepositOrders";
import AdminLoans from "./pages/admin/AdminLoans";
import AdminDeposits from "./pages/admin/AdminDeposits";
import AdminShowUserDeposits from "./pages/admin/AdminShowUserDeposits";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/userAccount" element={<MyAccount />} />
          <Route path="/history" element={<History />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/deposits" element={<Deposits />} />
          <Route path="/showDeposit/:id" element={<ShowDeposit />} />
          <Route path="/currencies" element={<Currencies />} />
          <Route path="/adminAccount" element={<AdminAccount />} />
          <Route path="/adminCurrencies" element={<AdminCurrencies />} />
          <Route path="/adminLoanOrders" element={<AdminLoanOrders />} />
          <Route path="/adminDepositOrders" element={<AdminDepositOrders />} />
          <Route path="/adminLoans" element={<AdminLoans />} />
          <Route path="/adminDeposits" element={<AdminDeposits />} />
          <Route path="/adminShowUser/:id" element={<AdminShowUser />} />
          <Route
            path="/adminShowUserDeposits/:id"
            element={<AdminShowUserDeposits />}
          />
          <Route path="/main" element={<Main />} />
          <Route exact path="/" element={<Main />} />
        </Routes>
      </Router>
      
      <Footer />
    </>
  );
}

export default App;
