import React from 'react'
import styles from "./startComponent.module.scss"
import StartHeaderComponent from "./header/StartHeaderComponent";
import HouseIcon from './assets/houseIcon.svg'
import PersonIcon from './assets/personIcon.svg'
import {Link} from "react-router-dom";
import {RoutesEnum} from "../../utils/router/RoutesEnum";

const StartComponent = () => {
    return (
        <div className={styles.grid}>
            <StartHeaderComponent/>
            <div className={styles.title}>
                <h1>
                    Ваши ответы — ключ к пониманию
                </h1>
            </div>
            <section className={styles.group}>
                <Link to={RoutesEnum.CREATE_FORM_PATH}
                      className={styles.button}>
                    <div className={styles.group_withIcon}>
                        <img src={HouseIcon} alt={'icon'}/>
                        <p>
                            Компания
                        </p>
                    </div>
                </Link>
                <Link  to={RoutesEnum.COMPANY_MAIN_PATH}
                      className={styles.button}>
                    <div className={styles.group_withIcon}>
                        <img src={PersonIcon} alt={'person'}/>
                        <p>
                            Респондент
                        </p>
                    </div>
                </Link>
                <Link to={RoutesEnum.COMPANY_MAIN_PATH} className={styles.button}>
                    <div className={styles.group_withIcon}>
                        <p>
                            Начать
                        </p>
                    </div>
                </Link>
            </section>
        </div>
    )
}

export default StartComponent