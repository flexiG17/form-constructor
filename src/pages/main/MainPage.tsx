import React from 'react'
import styles from './mainPage.module.scss'
import MainComponent from "../../components/main/MainComponent";

const MainPage = () => {
    return (
        <body className={styles.background}>
            <MainComponent/>
        </body>
    )
}

export default MainPage