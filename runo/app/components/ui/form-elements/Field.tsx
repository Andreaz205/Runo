import React, {forwardRef} from 'react';
import {IField} from "@/ui/form-elements/form.interface";

const Field = forwardRef<HTMLInputElement,IField>(({
    error,
    type = 'text',
    style,
    errorStyle, ...rest
}, ref) => {
    return <div style={style}>
        <input type={type} ref={ref} {...rest}/>
        {error && <div style={errorStyle}>{error.message}</div>}
    </div>
})

Field.displayName = 'Field'

export default Field;