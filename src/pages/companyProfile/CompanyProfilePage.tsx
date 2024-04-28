import React from 'react'
import styles from './companyProfile.module.scss'
import CompanyProfileComponent from "../../components/companyProfile/CompanyProfileComponent";

const CompanyProfilePage = () => {
    return (
        <body className={styles.background}>
            <CompanyProfileComponent/>
        </body>
    )
}

export default CompanyProfilePage