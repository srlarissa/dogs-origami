import { useState } from "react";
import { Input } from '../../../Form/Input'
import { Button } from '../../../Form/Button'

export function LoginForm(){
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName,
                password
            })
        }).then(response => {
            console.log(response);
            return response.json();
        }).then(json => {
            console.log(json);
        })
    }

    return(
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <Input label="Usuário" name="userName" type="text" />
                <Input label="Senha" name="password" type="password" />
                <Button>Entrar</Button>
            </form>
        </section>
    )
}