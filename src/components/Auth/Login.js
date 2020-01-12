import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Auth.css'


const Login = (props) => {
    const [email, setEmail] = useState(undefined)
    const [password, setPassword] = useState(undefined)

    const handleSubmit = (e) => {
        e.preventDefault()
        props.history.push('/')
    }

    return (
        <div id='login-signup'>
            <div id='form'>
                <h5 id='logo'><a href='/'>WOCC<span id='ademy'>ADEMY</span></a></h5>
                <form onSubmit={handleSubmit}>
                    <h4>Sign in</h4>
                    <button className='btn btn-dark social'>F</button>
                    <button className='btn btn-dark social'>F</button>
                    <button className='btn btn-dark social'>F</button>
                    <p>atau menggunakan account anda</p>
                    <div><input type='email' required placeholder='Email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}/></div>
                    <div><input type='password' required placeholder='Password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/></div>
                    <button className='btn btn-primary'>SIGN IN</button>
                    <p>Lupa password?</p>
                </form>
            </div>
            <div id='text'>
                <div>
                    <h5>Mari bergabung dan belajar bersama kami</h5>
                    <p>500+ orang telah terbukti memperoleh banyak manfaat selama menjadi member. Dapatkan penawaran menarik menjadi member di Woccademy!</p>
                    <NavLink to='/signup' className='btn btn-primary'>SIGN UP</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Login