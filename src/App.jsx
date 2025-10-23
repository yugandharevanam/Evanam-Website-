import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import HomeMain from "./components/Pages/Home/HomeMain";
import Navbar from "./components/Main/Navbar.jsx";
import Footer from "./components/Main/Footer.jsx";
import ContactUs from "./components/Pages/Contact/ContactUs.jsx";
import AboutUs from "./components/Pages/AboutUs/About1.jsx";
import Services from "./components/Pages/Services/Services.jsx";
import Blog from "./components/Pages/Blog/Bolg1.jsx";
import FAQ from "./components/Pages/FAQ/FAQ.jsx";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy/PrivacyPolicy.jsx";

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeMain />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="what-we-do" element={<AboutUs />} />
          <Route path="badges-of-trust" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="hire-our-pod" element={<Services />} />
          <Route path="available-pods" element={<Services />} />
          <Route path="blog" element={<Blog />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
