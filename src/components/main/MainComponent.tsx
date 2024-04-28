import React from 'react'
import styles from './mainComponent.module.scss'
import Header from "../header/Header";
import SmallFormFieldComponent from "../../shared/smallFormField/smallFormFieldComponent";

const MainComponent = () => {
    return (
        <div>
            <Header/>
            <section className={styles.grid}>
                <div className={styles.filter}>
                </div>
                <div className={styles.formList}>
                    <SmallFormFieldComponent/>
                    <SmallFormFieldComponent/>
                    <SmallFormFieldComponent/>
                    <SmallFormFieldComponent/>
                    <SmallFormFieldComponent/>
                    <SmallFormFieldComponent/>
                </div>
            </section>
        </div>
    )
}

export default MainComponent