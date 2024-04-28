import React from "react";
import styles from './settingPage.module.scss'
import Header from "../../components/header/Header";
import SettingComponent from "../../components/setting/SettingComponent";

const SettingPage = () => {
    return (
        <body className={styles.background}>
        <Header/>
        <SettingComponent/>
        </body>
    )
}

export default SettingPage