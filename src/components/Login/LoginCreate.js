import React from 'react'
import Input from '../Forms/Input'

const LoginCreate = () => {

    function handleSubmit(event){
        event.preventDefault()
    }
    return(
    <section className='animeLeft'>
        <h1>Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
            <Input label='Usuário' type='text' name='username'/>

        </form>
    </section>)
}

export default LoginCreate