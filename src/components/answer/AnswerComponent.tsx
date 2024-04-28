import React from 'react'
import styles from './answerComponent.module.scss'
import {Link} from "react-router-dom";

const FormField = () => {
    return <>
        <h3 className={styles.body_name}>
            Вопрос
        </h3>
        <textarea
            placeholder={'Введите ответ...'}
            className={styles.body_input} cols={70} rows={2}/>
    </>
}

const AnswerComponent = () => {
    return (
        <section className={styles.block}>
            <div className={styles.form}>
                <div className={styles.name}>
                    <h3 className={styles.name_title}>
                        Название опроса
                    </h3>
                    <p className={styles.name_description}>
                        * Описание опроса
                    </p>
                </div>
                <div className={styles.body}>
                    <div className={styles.body_field}>
                        <FormField/>
                    </div>
                    <div className={styles.body_field}>
                        <FormField/>
                    </div>
                </div>
            </div>
            <Link to={''} className={styles.button}>
                <p>Продолжить</p>
            </Link>
        </section>
    )
}

export default AnswerComponent