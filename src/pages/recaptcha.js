import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "../App.css"
const Recaptcha = ({ onVerify }) => {
  const [verified, setVerified] = useState(false);

  const handleVerify = (value) => {
    if (value) {
      setVerified(true);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Please Verify You're Not a Robot
        </h1>

        <div className="mb-6 recaptcha-container">
          <ReCAPTCHA
            sitekey="6LdDLZ0qAAAAAJXvVoHXH3gm2sJvApoqHWM-l3ed"
            onChange={handleVerify}
          />
        </div>

        <button
          disabled={!verified}
          onClick={onVerify}
          className={`w-full py-2 text-white font-semibold rounded-lg ${
            verified
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}>
          Load Items
        </button>
      </div>
    </div>
  );
};

export default Recaptcha;
