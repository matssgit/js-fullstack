type Props = React.ComponentProps<"select"> & {
  legend: string
}

export function Select({ legend, children, ...rest }: Props) {
  return (
    <fieldset className="flex flex-1 max-h-20 focus-within:text-green-100 focus-within:font-bold">
      <legend className="uppercase text-xxs text-gray-200 mb-2 text-inherit">
        {legend}
      </legend>

      <select
        className="w-full h-12 rounded-lg border border-gray-300 px-4 text-sm bg-transparent outline-none focus:text-green-100 focus:border-2 focus:border-green-100"
        {...rest}
      >
        <option value="" disabled hidden>
          Selecione
        </option>

        <option className="text-gray-100" value="food">
          Alimentação
        </option>

        {children}
      </select>
    </fieldset>
  )
}
