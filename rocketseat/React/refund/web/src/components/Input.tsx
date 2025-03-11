type Props = React.ComponentProps<"input"> & {
  legend?: string;
};

export function Input({ legend, ...rest }: Props) {
  return (
    <fieldset className="flex flex-1 max-h-20 text-gray-400  focus-within:text-green-700">
      {legend && (
        <legend className="uppercase text-xs mb-2 text-inherit">
          {legend}
        </legend>
      )}
      <input
        type="text"
        className="w-full h-12 rounded-lg border-gray-300 px-4 text-sm text-gray-600 bg-transparent outline-none focus: border-2 focus:border-green-700"
        {...rest}
      />
    </fieldset>
  );
}
