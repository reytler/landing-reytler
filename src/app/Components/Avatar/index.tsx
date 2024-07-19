import React from "react";
import styles from "./avatar.module.css";

interface Iprops {
    children: React.ReactNode
    name: string
}

export function Avatar({children,name}:Iprops){
    return(
        <span className={styles.content}>
            <span className={styles.image}>
                {children}
            </span>
            <h3 className={styles.name}>{name}</h3>
        </span>
    )
}