import { useState } from "react"

import logoSvg from "./assets/logo.svg"

import { Form } from "./components/Form"
import { ExpenseList } from "./components/Expense/ExpenseList"
import { ExpenseItemProps } from "./components/Expense/ExpenseItem"

export default function App() {
  const [expenses, setExpenses] = useState<ExpenseItemProps[]>([])

  function addExpense(expense: ExpenseItemProps) {
    setExpenses((prev) => [...prev, expense])
  }

  function onRemove(id: string) {
    setExpenses((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <div className="w-screen h-screen bg-gray-400 flex flex-col items-center text-gray-100">
      <main className="p-3 w-full md:w-auto">
        <img src={logoSvg} alt="Logo" className="my-8" />

        <section className="flex gap-5 pb-7 flex-col lg:flex-row ">
          <Form onAddExpense={addExpense} />
          <ExpenseList expenses={expenses} onRemove={onRemove} />
        </section>
      </main>
    </div>
  )
}
