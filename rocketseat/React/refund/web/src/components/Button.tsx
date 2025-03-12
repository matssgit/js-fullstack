type Props = React.ComponentProps<"button"> & {
  title: string
}

export function Button({ title, ...rest }: Props) {
  return (
    <button
      type="button"
      className="flex h-12 items-center justify-center bg-green-100 rounded-lg text-white hover:bg-green-200 transition ease-linear"
      {...rest}
    >
      {title}
    </button>
  )
}
