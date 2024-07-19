import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>Aprenda Programação</h1>
      </header>
      <section className={styles.body}>
        <div className={styles.center}>
          <section about="Informações sobre o professor de programação" className="about">
            <article>
              <p>Sobre</p>
            </article>
          </section>
          <section about="Avaliações e comentários sobre o professor de programação" className="rating">
            <article>
              <p>Avaliações</p>
            </article>
          </section>
        </div>
        <aside about="Redes sociais do professor de programação" className="social">
          <p>Redes Sociais</p>
        </aside>
      </section>
      <footer className={styles.footer}>
        rodapé
      </footer>
    </main>
  );
}
