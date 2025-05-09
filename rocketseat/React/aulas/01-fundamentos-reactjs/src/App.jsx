import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Matheus Santana"
            content="Eu laborum anim nulla esse incididunt commodo officia."
          />
          <Post author="Gabriel Buzzi" content="Um post muito legal" />
        </main>
      </div>
    </div>
  );
}
