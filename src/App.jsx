import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// layouts
import MainRoot from "./layouts/MainRoot";
import AdminRoot from "./layouts/AdminRoot";
import DashboardRoot from "./layouts/DashboardRoot";

// pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import PublicOffer from "./pages/PublicOffer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Category from "./pages/Category";
import Dashboard from "./pages/Dashboard";
import RegularCustomers from "./pages/RegularCustomers";
import Appeals from "./pages/Appeals";
import Requests from "./pages/Requests";
import Competitions from "./pages/Competitions";
import BalanceHistory from "./pages/BalanceHistoryPage";
import DonationBox from "./pages/DonationBox";
import Market from "./pages/Market";
import Flow from "./pages/Flow";
import Statistics from "./pages/Statistics";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainRoot />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productName" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/public-offer" element={<PublicOffer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/admin" element={<AdminRoot />}>
            <Route path="dashboard" element={<DashboardRoot />}>
              <Route index element={<Dashboard />} />
              <Route path="regular-customers" element={<RegularCustomers />} />
              <Route path="appeals" element={<Appeals />} />
              <Route path="requests" element={<Requests />} />
              <Route path="competitions" element={<Competitions />} />
              <Route path="balance-history" element={<BalanceHistory />} />
              <Route path="donation-box" element={<DonationBox />} />
            </Route>

            <Route path="market" element={<Market />} />

            <Route path="flow" element={<Flow />} />

            <Route path="statistics" element={<Statistics />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
