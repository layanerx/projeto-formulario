import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import FormNavigation from "./components/FormNavigation";

const App = () => {
  const methods = useForm(); 
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [<Step1 />, <Step2 />, <Step3 />];

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const onSubmit = (data) => {
    console.log("Dados finais:", data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {steps[currentStep]}
        <FormNavigation
          currentStep={currentStep}
          steps={steps.length}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      </form>
    </FormProvider>
  );
};

export default App;
