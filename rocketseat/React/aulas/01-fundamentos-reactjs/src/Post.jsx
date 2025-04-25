// props: { author: "", author: "" }

export function Post(props) {
  return (
    <div>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </div>
  );
}
