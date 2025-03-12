import { useState } from "react"

import foodSvg from "../assets/food.svg"

import { Input } from "./Input"
import { Button } from "./Button"
import { Select } from "./Select"
import { ExpenseItemProps } from "./Expense/ExpenseItem"

type Props = {
  onAddExpense: (newExpense: ExpenseItemProps) => void
}

export function Form({ onAddExpense }: Props) {
  const [name, setName] = useState("")
  const [value, setValue] = useState("")
  const [category, setCategory] = useState("")

  function handleSubmit() {
    if (!name || !category || !value) {
      return alert("Preencha todos os campos")
    }

    const formattedValue = parseFloat(value.replace(",", "."))

    if (isNaN(formattedValue)) {
      return alert("Informe um valor válido")
    }

    const newExpense = {
      id: Date.now().toString(),
      title: name,
      subtitle: category,
      icon: foodSvg,
      value: formattedValue,
    }

    onAddExpense(newExpense)

    setName("")
    setValue("")
    setCategory("")
  }

  return (
    <form className=" bg-gray-500 rounded-xl lg:max-w-[462px] h-fit flex flex-col p-10">
      <h1 className="text-xl font-bold">Solicitação de reembolso</h1>

      <p className="text-sm text-gray-200 mt-3 mb-10">
        Informe os dados da despesa para solicitar reembolso. A despesa será
        analisada e reembolsada em até 30 dias.
      </p>

      <Input
        legend="Nome da despesa"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="flex gap-4 mt-3 mb-8">
        <Select
          legend="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <Input
          legend="Valor"
          required
          value={value}
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <Button title="Adicionar despesa" onClick={handleSubmit} />
    </form>
  )
}
