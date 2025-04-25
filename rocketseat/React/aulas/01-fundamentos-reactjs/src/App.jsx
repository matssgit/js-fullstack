import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Post
        author="Matheus Santana"
        content="Eu laborum anim nulla esse incididunt commodo officia."
      />
      <Post author="Gabriel Buzzi" content="Um post muito legal" />
    </div>
  );
}
