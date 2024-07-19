import Image from "next/image";
import styles from "./page.module.css";
import { links, rating, textAprender, textPorque, textSobre, textSobreAulas } from "./texts";
import { link } from "fs";
import Link from "next/link";

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
              <h2>Sobre o professor</h2>
              <p>
                {textSobre}
              </p>
            </article>
            <article>
              <h2>O que você vai aprender?</h2>
              <p>
                {textAprender}
              </p>
            </article>
            <article>
              <h2>Sobre as aulas</h2>
              <p>
                {textSobreAulas}
              </p>
            </article>
            <article>
              <h2>Por que dou aula?</h2>
              <p>
                {textPorque}
              </p>
            </article>
          </section>
          <section about="Avaliações e comentários sobre o professor de programação" className="rating">
            <h2>Avaliações e recomendações</h2>
            {
              rating.map((item,_idx)=>(
                <>
                  <article>
                    <h3>{item.name}</h3>
                    <p>{item.text}</p>
                  </article>
                </>
              ))
            }
          </section>
          <section about="Obtenha acesso às aulas de programação" className={styles.btnctaarea}>
            <Link href={links.superprof}>
              <button className={styles.btncta}>Quero ter acesso às aulas</button>
            </Link>
          </section>
        </div>
        <aside about="Redes sociais do professor de programação" className={styles.social}>
          <span>
            <h4>Linkedin</h4>
            <a href={links.linkedin}>Icone</a>
          </span>
          <span>
            <h4>Github</h4>
            <a href={links.github}>Icone</a>
          </span>
          <span>
            <h4>Instagram</h4>
            <a href={links.instagram}>Icone</a>
          </span>
          <span>
            <h4>Superprof</h4>
            <a href={links.superprof}>Icone</a>
          </span>
        </aside>
      </section>
      <footer className={styles.footer}>
        <p>
          Copyright © Reytler Souza
          <br />
          Rmss &nbsp; - 2024
        </p>
      </footer>
    </main>
  );
}
