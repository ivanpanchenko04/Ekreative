import React, { useState } from "react";
import PhoneNumberPage from "../pages/PhoneNumberPage";
import CodeConfirmationPage from "../pages/CodeConfirmationPage";
import EmailPasswordPage from "../pages/EmailAndPasswordPage";
import PersonalInfoPage from "../pages/PersonalInfoPage";
import ContactInfoPage from "../pages/ContactInfoPage";
import AddressInfoPage from "../pages/AddressInfoPage";

export default function RegistrationFlow() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleFormSubmit = (data) => {
    console.log("Final data:", data);
    alert("Registration completed successfully!");
    handleNextStep();
  };

  return (
    <div>
      {step === 1 && <PhoneNumberPage onNext={handleNextStep} />}
      {step === 2 && <CodeConfirmationPage onNext={handleNextStep} />}
      {step === 3 && <EmailPasswordPage onSubmit={handleFormSubmit} />}
      {step === 4 && <PersonalInfoPage onNext={handleNextStep} />}
      {step === 5 && <ContactInfoPage onNext={handleNextStep} />}
      {step === 6 && <AddressInfoPage onSubmit={handleFormSubmit} />}
    </div>
  );
}
