import {FieldError, FieldErrorsImpl, Merge} from "react-hook-form";
import {InputHTMLAttributes} from "react";

export interface IFieldProps {
    errorStyle?: any,
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined | any
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputPropsField{}