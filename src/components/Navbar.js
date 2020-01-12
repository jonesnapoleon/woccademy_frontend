import React, { useEffect, useState } from 'react'
import { Nav, Navbar } from "react-bootstrap"
import { connect } from 'react-redux'
import './Layout.css'

const SignedInLinks = () =>
    <React.Fragment>
        <Nav.Item><Nav.Link href='/login'>LOGIN</Nav.Link></Nav.Item>
    </React.Fragment>

const SignedOutLinks = () =>
    <React.Fragment>
        <Nav.Item><Nav.Link href='/logout'>LOGOUT</Nav.Link></Nav.Item>
    </React.Fragment>

const NavigationBar = (props) => {
    const { isLoggedIn } = props
    const path = String(window.location.pathname)
    const [dir, setDir] = useState(path)
    const pathLink = path.split('/')[1]
    const [dirLink, setDirLink] = useState(pathLink)
    useEffect( () => {
        setDir(path)
    }, [path])
    useEffect( () => {
        setDirLink(pathLink)
    }, [pathLink])

    return (
        // dir !== '/signup' && dir !== '/login' ?
        <Navbar expand='md' className='container'>
            <Navbar.Brand id='logo' style={{ paddingLeft: '20px'}}>
                <Nav.Link href='/'>WOCC<span id='ademy'>ADEMY</span></Nav.Link>
            </Navbar.Brand>
            <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation" style={{ marginRight: "10px", right: '0' }} >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                <Nav className="ml-auto text-center">
                    <Nav.Item><Nav.Link href="/" className={dir === '/' ? 'nav-link-active' : ''}>BERANDA</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/course" className={dirLink === 'course' ? 'nav-link-active' : ''}>KURSUS</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/community" className={dirLink === 'community' ? 'nav-link-active' : ''}>KOMUNITAS</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/blog" className={dirLink === 'blog' ? 'nav-link-active' : ''}>BLOG</Nav.Link></Nav.Item>
                    <div style={{ marginLeft: '3rem'}} />
                    { isLoggedIn ?  <SignedOutLinks /> : <SignedInLinks /> }
                </Nav> 
            </div>
        </Navbar>
        // :
        // <nav />
    )
}



const mapStateToProps = (state) => { 
    return {
        isLoggedIn: state.isLoggedIn
    }
}


export default connect(mapStateToProps)(NavigationBar)