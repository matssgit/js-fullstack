type Props = React.ComponentProps<"input"> & {
  legend: string
}

export function Input({ legend, ...rest }: Props) {
  return (
    <fieldset className="flex flex-1 max-h-20 focus-within:text-green-100 focus-within:font-bold">
      <legend className="uppercase text-xxs text-gray-200 mb-2 text-inherit">
        {legend}
      </legend>

      <input
        type="text"
        className="w-full h-12 rounded-lg border border-gray-300 px-4 text-sm text-gray-100 bg-transparent outline-none focus:text-green-100 focus:border-2 focus:border-green-100"
        {...rest}
      />
    </fieldset>
  )
}
