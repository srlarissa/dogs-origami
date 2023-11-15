import { Input } from '../../../Form/Input';
import { Button } from '../../../Form/Button';
import useForm from '../../../../hooks/useForm'

export function LoginForm(){
    const userName = useForm('email');
    const password = useForm();

    function handleSubmit(event){
        event.preventDefault();
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               
            })
        }).then(response => {
            return response.json()
        }).then(json => {
            console.log(json)
        })
    }

    return(
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <Input label="Usuário" name="userName" type="text" {...userName} />
                <Input label="Senha" name="password" type="password" {...password} />
                <Button>Entrar</Button>
            </form>
        </section>
    )
}