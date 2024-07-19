import styles from "./comentario.module.css"

export function Comentario({text}:{text:string}){
    return(
        <p className={styles.comentario}>
            {text}
        </p>
    )
}