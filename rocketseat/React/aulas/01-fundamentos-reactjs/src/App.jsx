import { Header } from "./components/Header";
import { Post } from "./Post";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Matheus Santana"
        content="Eu laborum anim nulla esse incididunt commodo officia."
      />
      <Post author="Gabriel Buzzi" content="Um post muito legal" />
    </div>
  );
}
