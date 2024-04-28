import React from 'react'
import styles from './header.module.scss'
import {Link} from "react-router-dom";
import {RoutesEnum} from "../../utils/router/RoutesEnum";

const Header = () => {
    return (
        <header className={styles.block}>
            <Link className={styles.title} to={RoutesEnum.START_PAGE}>
                <h3>
                    Главная
                </h3>
            </Link>
            <Link className={styles.title} to={RoutesEnum.USER_PROFILE_PATH}>
                <h3>
                    Профиль
                </h3>
            </Link>
            <div className={styles.price}>
                <p>
                    0 рублей
                </p>
            </div>
        </header>
    )
}

export default Header