import React from "react";
import { useFormContext } from "react-hook-form";

const Step2 = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <h2>Etapa 2: Informações da empresa</h2>
      <label>Nome da empresa:</label>
      <input
        {...register("nome", { required: "O nome é obrigatório" })}
      />

      <label>Numero de funcionarios:</label>
      <input
        type="int"
        {...register("numero")}
      />
       <label>Sobre o seu negócio:</label>
      <input
        {...register("nome")}
      />

    </div>
  );
};

export default Step2;
