import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./components/layout/AdminLayout";
import AdminDashboard from "./components/admincomponents/Dashboard";
import Pricing from "./components/admincomponents/Pricing";
import Requests from "./components/admincomponents/Requests";
import AdminUsers from "./components/admincomponents/AdminUsers";
import Orders from "./components/admincomponents/Orders";
import UserLayout from "./components/layout/UserLayout"; 
import Myservice from "./components/usercomponents/Myservice";
import RequestCustom from "./components/usercomponents/RequestCustom";
import BillingHistory from "./components/usercomponents/BillingHistory";
import Subscription from "./components/usercomponents/Subscription";
import ProfileSettings from "./components/usercomponents/ProfileSettings";
import Contact from "./Pages/Contact/Contact.jsx";
import Sign_up from "./Pages/Sign_up/Sign_up.jsx";
import Service from "./Pages/Service/Service.jsx";
import FaqFooter from "./components/faq_footer.jsx";

const App = () => {
  return (
    <Router>
      {/*<Routes>*/}
      {/*  <Route path="/" element={<UserLayout />}>*/}
      {/*    <Route index element={<Myservice />} />*/}
      {/*    <Route path="request-custom" element={<RequestCustom />} />*/}
      {/*    <Route path="billing-history" element={<BillingHistory />} />*/}
      {/*    <Route path="subscription" element={<Subscription />} />*/}
      {/*    <Route path="profile-settings" element={<ProfileSettings />} />*/}
      {/*  </Route>*/}

      {/*  <Route path="/admin" element={<AdminLayout />}>*/}
      {/*    <Route index element={<AdminDashboard />} />*/}
      {/*    <Route path="requests" element={<Requests />} />*/}
      {/*    <Route path="pricing" element={<Pricing />} />*/}
      {/*    <Route path="orders" element={<Orders />} />*/}
      {/*    <Route path="adminusers" element={<AdminUsers />} />*/}
      {/*  </Route>*/}
      {/*</Routes>*/}



      {/*<Contact/>*/}
      {/*<Sign_up/>*/}
      {/*  <Service/>*/}
        <FaqFooter/>
    </Router>
  );
};

export default App;
