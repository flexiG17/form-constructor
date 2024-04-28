import React from 'react'
import styles from "./startPage.module.scss"
import StartComponent from "../../components/start/StartComponent";

const StartPage = () => {
    return (
        <body className={styles.background}>
            <StartComponent/>
        </body>
    )
}

export default StartPage