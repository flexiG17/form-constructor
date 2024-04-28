import React from "react";
import styles from './createFormPage.module.scss'
import CreateFormComponent from "../../components/createForm/CreateFormComponent";
import Header from "../../components/header/Header";

const CreateFormPage = () => {
    return (
        <body className={styles.background}>
        <Header/>
        <CreateFormComponent/>
        </body>
    )
}

export default CreateFormPage