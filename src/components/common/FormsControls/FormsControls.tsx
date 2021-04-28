import React, {FC} from 'react'
import styles from './FormsControls.module.css'
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import {FieldValidatorType} from "../../../utils/validators/validators";

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + '' + hasError ? styles.error : ''}>
            <div>
                {children}
            </div>
            { hasError && <span>{ error }</span>}
        </div>
    )

}

export const Textarea: FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props
    return <FormControl {...props}><textarea {...input}{...restProps}/> </FormControl>
}
export const Input: FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props
    return <FormControl {...props}><input {...input}{...restProps}/> </FormControl>
}


export function createField<FormsKeysType extends string> (placeholder: string | undefined,
                            name: FormsKeysType, validators: Array<FieldValidatorType>,
                            component: FC<WrappedFieldProps>, props = {}, text = '') {
        return <div>
    {text}
        <Field placeholder={placeholder} name={name}
        validate={validators} component={component} {...props}/>
        </div>
    }

export type GetStringKeys<T> = Extract<keyof T, string>


