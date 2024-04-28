import React, {useState} from "react";
import styles from './createFormComponent.module.scss'
import DragIcon from './assets/dragAndDropIcon.svg'
import PlusIcon from './assets/plus.svg'
import PhotoIcon from './assets/photo.svg'
import TrashIcon from './assets/trash.svg'

const FormField = ({isFocused}: { isFocused: boolean }) => {
    return <div className={styles.inputs}>
        <input
            style={{border: isFocused ? '2px solid #fff' : ''}}
            type='text' placeholder={'Вопрос'}/>
        <input
            style={{border: isFocused ? '2px solid #fff' : ''}}
            type='text' placeholder={'Список редак. вопроса'}/>
    </div>
}

const CreateFormComponent = () => {
    const [fieldsArray, setFieldsArray] = useState<Array<any>>([
        {
            id: 0,
            name: '',
            description: ''
        }
    ])
    const [isChangedTitle, setIsChangedTitle] = useState<boolean>(false)
    const [title, setTitle] = useState<string>('Новый опрос')
    const [fieldIndex, setFieldIndex] = useState(0)

    const handleCreateField = () => {
        const previousValue = {...fieldsArray[fieldsArray.length - 1]}
        previousValue.id++
        setFieldsArray([
            ...fieldsArray,
            {
                id: previousValue.id,
                name: '',
                description: ''
            }
        ])
    }

    const handleDeleteField = () => {
        if (fieldsArray.length === 1)
            return
        const newArray = [
            ...fieldsArray
        ].filter((field) =>
            field.id !== fieldIndex
        )
        setFieldsArray(newArray)
    }
    const handleInputFocus = (event: React.ChangeEvent<HTMLInputElement>) => event.target.select();

    return (
        <section className={styles.block}>
            <div className={styles.form}>
                <div className={styles.form_name}>
                    {
                        isChangedTitle
                            ?
                            <input
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value)
                                }}
                                type='text'
                                onBlur={() => {
                                    setIsChangedTitle(false)
                                }}
                                onFocus={handleInputFocus}
                            />
                            :
                            <p className={styles.form_name_title} onClick={() => {
                                setIsChangedTitle(true)
                            }}>
                                {title}
                            </p>
                    }
                    <p className={styles.form_name_text}>
                        Описание
                    </p>
                </div>
                <div className={styles.body}>
                    {fieldsArray.map((field) => {
                        return <div
                            onFocus={() => {
                                setFieldIndex(field.id)
                            }}
                            className={styles.body_field}
                        >
                            <img src={DragIcon} alt='' width={55}/>
                            <div className={styles.body_grid}>
                                <FormField isFocused={field.id === fieldIndex}/>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <div className={styles.actions}>
                <img src={PlusIcon} alt='icon' onClick={handleCreateField}/>
                <img src={PhotoIcon} alt='icon'/>
                <img src={TrashIcon} alt='icon' onClick={handleDeleteField}/>
            </div>
        </section>
    )
}

export default CreateFormComponent