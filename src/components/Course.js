import React, { useState } from 'react'
import { connect } from 'react-redux'
import './Course.css'


const CourseDetail = ({course, id}) => {
    return (
        <div key={id} className='course-card'>
            <img src={course.pics} alt={course.title} />
            <div className='course-card-body'>
                <h6 className='course-title'>{course.title}</h6>
                <div className='course-littleinfo'><i class="fas fa-star"></i><span className='course-rating'>{course.rating.toFixed(1)}</span><span>({course.enroller})</span></div>
                <div className='course-author'>{course.author}</div>
                <div>{course.short_desc}</div>
                <hr />
                <div className='course-price'>{course.price}.000 IDR</div>
            </div>
        </div>
    )
}


const CourseCategories = ({category, id, active, setActive}) => {
    return(
        <span className={active === id ? 'course-category-active' : 'course-category-nonactive'} key={id} onClick={() => setActive(id)}>
            {category}
        </span>
    )
}

const Course = (props) => {
    const { courses, coursesCategories } = props
    const path = String(window.location.pathname)
    const coursesCategoriesFinal = ['Semua kursus'].concat(coursesCategories)
    const [active, setActive] = useState(0)
    const coursesFinal = courses.filter(course => course.category === coursesCategories[active - 1])
    const many = path === '/' ? 5 : courses.length
    return(
        <div id='course'>
            {
                path === '/' ?
                <center><h4>Belajar Langsung dari Ahlinya.</h4></center>
                :
                <center><h4>Kursus Terbaik untuk Anda</h4></center>
            }
            <div className='course-category'>
                { coursesCategoriesFinal.map( (coursesCategory, id) => <CourseCategories active={active} setActive={setActive} category={coursesCategory} key={id} id={id} /> ) }
            </div>
            <div className='course-detail'>
                { 
                    active === 0 ?
                        courses.slice(0, many).map( (course, id) => <CourseDetail course={course} key={id} id={id}/> )
                        :
                        coursesFinal.length > 0 ?
                            coursesFinal.slice(0, many).map( (course, id) => <CourseDetail course={course} key={id} id={id}/> )
                            :
                            <h5 style={{ marginBottom: '3rem' }}>Belum ada course</h5>
                }
            </div>
        </div>
    )
}


const mapStateToProps = (state) => { 
    return {
        courses: state.courses,
        coursesCategories: state.coursesCategories
    }
}


export default connect(mapStateToProps)(Course)
