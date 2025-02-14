import React from "react";

const FormNavigation = ({ currentStep, steps, nextStep, prevStep }) => {
  return (
    <div>
      {currentStep > 0 && <button type="button" onClick={prevStep}>Voltar</button>}
      {currentStep < steps - 1 && <button type="button" onClick={nextStep}>Próximo</button>}
      {currentStep === steps - 1 && <button type="submit">Enviar</button>}
    </div>
  );
};

export default FormNavigation;
