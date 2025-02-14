import React from "react";
import { useFormContext } from "react-hook-form";

const Step3 = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <h2>Etapa 3: Informações do projeto:</h2>
      <label>Objetivos do projeto:</label>
      <input
        {...register("nome", { required: "O objetivo é obrigatório" })}
      />
    </div>
  );
};

export default Step3;
