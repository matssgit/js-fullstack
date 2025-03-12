import removeSvg from "../../assets/remove.svg"
import { formatCurrency } from "../../utils/formatCurrency"

export type ExpenseItemProps = {
  id: string
  icon: string
  title: string
  subtitle: string
  value: number
}

type Props = React.ComponentProps<"li"> & {
  data: ExpenseItemProps
  onRemove: () => void
}

export function ExpenseItem({ data, onRemove, ...rest }: Props) {
  return (
    <li className="flex items-center gap-3" {...rest}>
      <img src={data.icon} alt="Ícone do tipo da despesa" className="w-9 h-9" />

      <div className="flex flex-col flex-1">
        <strong className="text-sm text-gray-100">{data.title}</strong>
        <span className="text-xs text-gray-200">{data.subtitle}</span>
      </div>

      <span className="text-sm text-gray-100 font-semibold">
        <small className="font-normal text-gray-200">R$</small>
        {formatCurrency(data.value)}
      </span>

      <img
        src={removeSvg}
        alt="remover"
        className="hover:opacity-50 ease-in cursor-pointer"
        onClick={onRemove}
      />
    </li>
  )
}
