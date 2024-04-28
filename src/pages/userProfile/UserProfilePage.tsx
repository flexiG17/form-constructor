import React from "react";
import styles from './userProfilePage.module.scss'
import Header from "../../components/header/Header";
import UserProfileComponent from "../../components/userProfile/UserProfileComponent";

const UserProfilePage = () => {
    return (
        <body className={styles.background}>
        <Header/>
        <UserProfileComponent/>
        </body>
    )
}

export default UserProfilePage