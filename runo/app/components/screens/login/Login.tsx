import React, {FC, FormEvent, useState} from 'react';
import {instance} from "../../../api/api";

const Login :FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        instance.get('sanctum/csrf-cookie')
            .then(response => console.log(response))
            .catch(error => console.log(error))
        console.log(email, password)
    }
    return (
        <div>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id='email' type="email" placeholder='Введите email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id='password' type="password" placeholder='Введите пароль' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <button type='submit'>Войти</button>
                </div>
            </form>
        </div>
    );
};

export default Login;