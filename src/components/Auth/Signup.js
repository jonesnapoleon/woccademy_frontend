import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Auth.css'


const Signup = (props) => {
    const [fullname, setFullname] = useState(undefined)
    const [email, setEmail] = useState(undefined)
    const [password, setPassword] = useState(undefined)

    const handleSubmit = (e) => {
        e.preventDefault()
        props.history.push('/')
    }
    return (
        <div id='login-signup'>
            <div id='text'>
                <div>
                    <h5>Selamat Datang Kembali!</h5>
                    <p>Pilih Sign in apabila anda sudah terdaftar menjadi member!</p>
                    <NavLink to='/login' className='btn btn-primary'>SIGN IN</NavLink>
                </div>
            </div>
            <div id='form'>
                <h5 id='logo'><a href='/'>WOCC<span id='ademy'>ADEMY</span></a></h5>
                <form onSubmit={handleSubmit}>
                    <h4>Create Account</h4>
                    <button className='btn btn-dark social'>F</button>
                    <button className='btn btn-dark social'>F</button>
                    <button className='btn btn-dark social'>F</button>
                    <p>atau buat akun menggunakan email anda</p>
                    <div><input type='text' required placeholder='Nama Lengkap' id='fullname' value={fullname} onChange={(e) => setFullname(e.target.value)}/></div>
                    <div><input type='email' required placeholder='Email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}/></div>
                    <div><input type='password' required placeholder='Password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/></div>
                    <div id='agree-form'>Saya telah memahami Terms of Service & Term of Reference yang berlaku</div>
                    <button id='signup-button' className='btn btn-primary'>SIGN UP</button>
                </form>
            </div>
        </div>
    )
}

export default Signup
