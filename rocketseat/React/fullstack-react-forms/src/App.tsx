import "./App.css";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormData = {
  name: string;
  date: string;
  subject: string;
  description: string;
};

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  date: yup.string().required("Data é obrigatória"),
  subject: yup.string().required("Selecione um assunto"),
  description: yup
    .string()
    .required("Descrição é obrigatória")
    .min(10, "A descrição precisa ter pelo menos 10 dígitos."),
});

export default function App() {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: "",
      date: "",
      subject: "",
      description: "",
    },
    resolver: yupResolver(schema),
  });

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <div>
      <h1>Evento</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <input type="text" placeholder="Nome do evento" {...field} />
          )}
        />

        <span className="error">Nome é obrigatório</span>

        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <input type="date" placeholder="Nome do evento" {...field} />
          )}
        />

        <Controller
          control={control}
          name="subject"
          render={({ field }) => (
            <select {...field}>
              <option value="" disabled>
                Selecione...
              </option>

              <option value="react">React</option>
              <option value="nodejs">Node.js</option>
              <option value="javascript">Javascript</option>
              <option value="typescript">Typescript</option>
            </select>
          )}
        />

        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <textarea placeholder="Descrição" rows={4} {...field} />
          )}
        />

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
