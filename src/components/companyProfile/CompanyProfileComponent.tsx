import React from 'react'
import styles from './companyProfileComponent.module.scss'
import Header from "../header/Header";
import SmallFormFieldComponent from "../../shared/smallFormField/smallFormFieldComponent";
import {Link} from "react-router-dom";
import {RoutesEnum} from "../../utils/router/RoutesEnum";

const CompanyProfileComponent = () => {
    return (
        <div>
            <Header/>
            <section className={styles.grid}>
                <Link to={RoutesEnum.CREATE_FORM_PATH} className={styles.button}>
                    <p>Создать опрос</p>
                </Link>
                <div className={styles.formList}>
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

export default CompanyProfileComponent