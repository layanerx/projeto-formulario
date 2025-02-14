import React from "react";
import { useFormContext } from "react-hook-form";

const Step1 = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <h2>Etapa 1: Informações Básicas</h2>
      <label>Nome:</label>
      <input
        {...register("nome", { required: "O nome é obrigatório" })}
      />
      {errors.nome && <p>{errors.nome.message}</p>}

      <label>Telefone:</label>
      <input
        type="int"
        {...register("telefone")}
      />

      <label>Email:</label>
      <input
        {...register("email", { required: "O email é obrigatório" })}
      />

    </div>
  );
};

export default Step1;
