import React from 'react'
import styles from "./startHeaderComponent.module.scss"

const StartHeaderComponent = () => {
    return (
        <header className={styles.grid}>
            <h2>
                ОпросИнсайт_
            </h2>
            <nav className={styles.navbar}>
                <h3>
                    Вход
                </h3>
                <h3>
                    Регистрация
                </h3>
            </nav>
        </header>
    )
}

export default StartHeaderComponent