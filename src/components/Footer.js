import React from 'react'
import { connect } from 'react-redux'
import './Layout.css'

const Footer = (props) => {
    const { coursesCategories } = props
    return(
        <div id='footer'>
            <div className='kategori-kursus'>
                <p className='lead'>Kategori Kursus</p>
                { coursesCategories.map( (coursesCategory, id) => <div key={id}> {coursesCategory} </div> ) }
            </div>
            <div className='tentang-kami'>
                <p className='lead'>Tentang Kami</p>
                <div><a href='/about'>Instruktur</a></div>
                <div><a href='/about'>Kursus</a></div>
                <div><a href='/terms-of-service'>Terms of Service</a></div>
                <div><a href='/privacypolicy'>Kebijakan Kami</a></div>
            </div>
            <div className='dukungan'>
                <p className='lead'>Dukungan</p>
                <div><a href='/faq'>FAQ</a></div>
                <div><a href='/contact'>Kontak kami</a></div>
                <div><a href='/forum-community'>Forum komunitas</a></div>
            </div>
            <div className='berbagi-subscribe'>
                <p className='lead'>Berbagi</p>
                <button className='btn btn-light social'>F</button>
                <button className='btn btn-light social'>F</button>
                <button className='btn btn-light social'>F</button>
                <div className='subscribe'>Ikuti Mailing List Kami</div>
                <div><input type='email' /></div>
                <div><button className='btn btn-warning'>Subscribe</button></div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => { 
    return {
        coursesCategories: state.coursesCategories
    }
}

export default connect(mapStateToProps)(Footer)