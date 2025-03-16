import { Header } from "./components/Header";
import { Post } from "./Post";

import "./styles.css";

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Matheus Santana"
        content="Veniam nostrud ea do eu cupidatat cillum nulla occaecat dolor elit consectetur cillum."
      />
      <Post author="Diego Fernandes" content="Um post muito legal" />
    </div>
  );
}
