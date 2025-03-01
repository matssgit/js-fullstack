import { Button } from "./components/button";

export function App() {
  return (
    <div>
      <Button name="Criar" onClick={() => alert("Criar")} />
      <Button name="Editar" />
      <Button name="Remover" />
    </div>
  );
}
