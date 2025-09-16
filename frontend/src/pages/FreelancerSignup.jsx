// src/pages/FreelancerSignup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FreelancerSignup() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [category, setCategory] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [idProof, setIdProof] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const handleCategorySelect = (cat) => {
    setCategory(cat);
    setStep(2);
  };

  const handleSendOtp = () => {
    if (!mobile) {
      alert("Please enter a mobile number first.");
      return;
    }
    setOtpSent(true);
    alert("OTP sent (use 123456 for now)");
  };

  const handleOtpChange = (e) => {
    const value = e.target.value;
    setOtp(value);
    setOtpVerified(value === "123456");
  };

  const handleVerifyOtp = () => {
    if (otpVerified && otpSent) {
      if (category === "Technical") {
        navigate("/profile-setup");
      } else if (category === "Non-Technical" && idProof) {
        navigate("/profile-setup");
      } else {
        alert("Please upload ID proof for Non-Technical category.");
      }
    } else {
      alert("Invalid OTP, please try again.");
    }
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Big Background Word */}
<h1
  className="absolute 
             text-[4rem] sm:text-[6rem] md:text-[9rem] lg:text-[13rem] 
             font-extrabold text-gray-200 tracking-widest select-none 
             text-center w-full z-0
             top-64 sm:top-12 md:top-16 lg:top-20"
>
  ORBIT
</h1>




      {/* Content */}
<div
  className="
    relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-2xl
    -mt-24 sm:mt-0   /* increased upward shift for mobile */
  "
>
        {/* Step 1: Category Selection */}
        {step === 1 && (
          <>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-snug">
              Start Your <span className="text-indigo-600">Rise</span>
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto px-2">
              Choose your path to shine. Are you ready to take off in a{" "}
              <span className="text-indigo-600 font-semibold">Technical</span>{" "}
              role or a{" "}
              <span className="text-indigo-600 font-semibold">Non-Technical</span>{" "}
              role?
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => handleCategorySelect("Technical")}
                className="px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 transition"
              >
                Technical
              </button>
              <button
                onClick={() => handleCategorySelect("Non-Technical")}
                className="px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition"
              >
                Non-Technical
              </button>
            </div>
          </>
        )}

        {/* Step 2: Verification */}
        {step === 2 && (
          <div className="space-y-5 text-left max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-indigo-700 text-center">
              🔐 Verification
            </h2>

            {!otpSent && (
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="input input-bordered w-full"
                  placeholder="Enter your mobile number"
                  required
                />
                <button
                  type="button"
                  onClick={handleSendOtp}
                  className="btn btn-outline btn-success mt-2 w-full"
                >
                  Send OTP
                </button>
              </div>
            )}

            {otpSent && (
              <>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Enter OTP
                  </label>
                  <input
                    type="text"
                    value={otp}
                    onChange={handleOtpChange}
                    className="input input-bordered w-full"
                    placeholder="Enter OTP (123456 default)"
                    required
                  />
                </div>

                {category === "Non-Technical" && (
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Upload ID Proof
                    </label>
                    <input
                      type="file"
                      className="file-input file-input-bordered w-full"
                      onChange={(e) => setIdProof(e.target.files[0])}
                      required
                    />
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  disabled={!otpVerified}
                  className="btn btn-primary w-full mt-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  🚀 Signup
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default FreelancerSignup;
