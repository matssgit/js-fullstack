type Props = React.ComponentProps<"button"> & {
  name: string;
};

export function Button({ name, ...rest }: Props) {
  return <button {...rest}>{name}</button>;
}
