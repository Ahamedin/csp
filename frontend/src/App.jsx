import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/HomePage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import Contact from "./pages/Contact.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import Flproductcard from "./components/Flproductcard.jsx";
import FreelancerDetails from "./pages/FreelancerDetails.jsx";
import NonTechnicalServices from "./pages/NonTechnicalServices.jsx";
import SecureSignup from "./pages/SecureSignup";
import FreelancerSignup from "./pages/FreelancerSignup.jsx";
import ProfileSetup from "./pages/ProfileSetup.jsx";
import FreelancerDashboard from "./pages/FreelancerDashboard.jsx";
import FreelancerProfile from "./pages/FreelancerProfile";
// import OTPVerification from "./pages/OTPVerification.jsx";

// import FreelancerSignup from "./pages/FreelancerSignup";
// Navbar Component
import Navbar from "./components/Navbar.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <Navbar
        isLoggedIn={isLoggedIn}
        onLoginToggle={() => setIsLoggedIn(!isLoggedIn)}
      />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pp" element={<PrivacyPolicy />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/freelancers/:category" element={<Flproductcard />} />
        <Route path="/freelancer/:id" element={<FreelancerDetails />} />
        <Route path="/non-technical" element={<NonTechnicalServices />} />

        {/* Become a Freelancer */}
        <Route path="/become-freelancer" element={<FreelancerSignup />} />
        <Route path="/profile-setup" element={<ProfileSetup />} />
        <Route path="/freelancer-dashboard" element={<FreelancerDashboard />} />
        <Route path="/signup" element={<SecureSignup />} />
        <Route path="/freelancer-signup" element={<FreelancerSignup />} />
        <Route path="/freelancer-profile" element={<FreelancerProfile />} />
         {/* <Route path="/otp-verification" element={<OTPVerification />} /> */}
      </Routes>
    </div>
  );
}

export default App;
