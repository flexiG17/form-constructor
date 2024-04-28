import React from "react";
import styles from './userProfileComponent.module.scss'
import {Link} from "react-router-dom";
import SmallFormFieldComponent from "../../shared/smallFormField/smallFormFieldComponent";
import {RoutesEnum} from "../../utils/router/RoutesEnum";

const UserProfileComponent = () => {
    return (
        <section className={styles.block}>
            <div className={styles.actions}>
                <Link to={`/user/settings/form`} className={styles.actions_button}>
                    <p>Анкета пользователя</p>
                </Link>
                <Link to={`/user/settings/profile`} className={styles.actions_button} state={{type: 'profile'}}>
                    <p> Настройка пользователя
                    </p>
                </Link>
            </div>
            <div className={styles.body}>
                <SmallFormFieldComponent color={'#EBA6A9'} isUserInterface={true}/>
                <SmallFormFieldComponent color={'#EBA6A9'} isUserInterface={true}/>
                <SmallFormFieldComponent color={'#EBA6A9'} isUserInterface={true}/>
                <SmallFormFieldComponent color={'#EBA6A9'} isUserInterface={true}/>
            </div>
        </section>
    )
}

export default UserProfileComponent