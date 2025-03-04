import "./global.css";
import { useState, useEffect } from "react";

import { Button } from "./components/button";
// import { useMessage } from "./hooks/useMessage";

import styles from "./app.module.css";

export function App() {
  const [count, setCount] = useState(0);

  // const message = useMessage({ age: 28, name: "Matheus" });

  function handleAdd() {
    setCount((prevSate) => prevSate + 1);
  }

  function handleRemove() {
    if (count > 0) {
      setCount((prevSate) => prevSate - 1);
    }
  }

  useEffect(() => {
    if (count > 0) {
      console.log("O valor mudou para: " + count);
    }
  }, [count]);

  return (
    <div className={styles.container}>
      <Button name="Adicionar" onClick={handleAdd} />
      <span>{count}</span>
      <Button name="Remover" onClick={handleRemove} />
    </div>
  );
}
