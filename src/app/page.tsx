import Image from "next/image";
import styles from "./page.module.css";
import { links, rating, textAprender, textPorque, textSobre, textSobreAulas } from "./texts";
import Link from "next/link";
import { Avatar } from "./Components/Avatar";
import { Comentario } from "./Components/Comentario";
import { Title } from "./Components/Title";
import {Text} from "./Components/Text";

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
              <Title text="Sobre o professor"/>
              <div style={{
                display:"flex",
                flexDirection:'row',
                flexWrap:'wrap',
                justifyContent:'center',
                gap:'200px'
              }}>
                <Image src={'/perfil.jpeg'} alt="alt" width={300} height={300}/>
                <Text text={textSobre}/>
              </div>
            </article>
            <article>
              <Title text="O que você vai aprender?"/>
              <Text text={textAprender}/>
            </article>
            <article>
              <Title text="Sobre as aulas"/>
              <Text text={textSobreAulas}/>
            </article>
            <article>
              <Title text="Por que dou aula?"/>
              <Text text={textPorque}/>
            </article>
          </section>
          <section about="Avaliações e comentários sobre o professor de programação" className={styles.rating}>
            <Title text="Avaliações e recomendações"/>
            <div className={styles.ratingcontent}>
              {
                rating.map((item,_idx)=>(
                    <article key={_idx}>
                      <Avatar name={item.name}>
                        <Image src={'./vercel.svg'} alt="alt" width={40} height={40}/>
                      </Avatar>
                      <Comentario text={item.text}/>
                    </article>
                ))
              }
            </div>
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
    </main>
  );
}
