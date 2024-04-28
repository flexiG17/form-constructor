import React from 'react'
import styles from './answerPage.module.scss'
import Header from "../../components/header/Header";
import AnswerComponent from "../../components/answer/AnswerComponent";

const AnswerPage = () => {
    return (
        <body className={styles.background}>
        <Header/>
        <AnswerComponent/>
        </body>
    )
}

export default AnswerPage