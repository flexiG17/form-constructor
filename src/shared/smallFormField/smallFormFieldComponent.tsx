import React from "react";
import styles from './smallFormField.module.scss'
import PeoplesIcon from './assets/peoplesIcon.svg'
import PriceIcon from './assets/priceIcon.svg'
import {Link, Route, useNavigate} from "react-router-dom";
import {RoutesEnum} from "../../utils/router/RoutesEnum";

interface InputProps {
    color?: `#${string}`,
    isUserInterface?: boolean
}

const SmallFormFieldComponent = ({color, isUserInterface = false}: InputProps) => {
    return (
        <section className={styles.block} style={{backgroundColor: color}}>
            <div className={styles.name}>
                <p>ИТ-тренды 2024 | Прогнозы на будущий год</p>
            </div>
            <div className={styles.data}>
                <div className={styles.countWithIcon}>
                    <p>{56}</p>
                    <img src={PeoplesIcon} alt={'icon'}/>
                </div>
                {isUserInterface ?
                    <div className={styles.countWithIcon}>
                        <p>{30}</p>
                        <img src={PriceIcon} alt={'icon'}/>
                    </div>
                    :
                    <Link to={RoutesEnum.ANSWER_PATH} className={styles.more}>
                        <p>
                            Подробнее
                        </p>
                    </Link>}
            </div>
        </section>
    )
}

export default SmallFormFieldComponent