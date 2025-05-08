import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/matssgit.png" />
          <div className={styles.authorInfo}>
            <strong>Matheus Santana</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="8 de Maio ás 17:58" dateTime="2025-08-05">
          Públicado há 1h
        </time>
      </header>
    </article>
  );
}
