import React from "react";
import styles from '../answer/answerComponent.module.scss'
import {Link, useParams} from "react-router-dom";

const FormHeaders = {
    pageTitle: 'Анкета',
    title_1: 'ФИО',
    title_2: 'Пол',
    title_3: 'Электронная почта',
}

const ProfileHeaders = {
    pageTitle: 'Настройки',
    title_1: 'Имя',
    title_2: 'Логин',
    title_3: 'Пароль',
}

const FormField = (props: {title: string}) => {
    return <>
        <h3 className={styles.body_name}>
            {props.title}
        </h3>
        <textarea
            placeholder={'Введите ответ...'}
            className={styles.body_input} cols={70} rows={2}/>
    </>
}

const SettingComponent = () => {
    const pageType = useParams().type
    const currentData = pageType === 'form' ? FormHeaders : ProfileHeaders

    return (
        <section className={styles.block}>
            <div className={styles.form}>
                <div className={styles.name}>
                    <h3 className={styles.name_title}>
                        {`${currentData.pageTitle} респондента`}
                    </h3>
                </div>
                <div className={styles.body}>
                    <div className={styles.body_field}>
                        <FormField title={currentData.title_1}/>
                    </div>
                    <div className={styles.body_field}>
                        <FormField title={currentData.title_2}/>
                    </div>
                    <div className={styles.body_field}>
                        <FormField title={currentData.title_3}/>
                    </div>
                </div>
            </div>
            <Link to={''} className={styles.button}>
                <p>Сохранить</p>
            </Link>
        </section>
    )
}

export default SettingComponent