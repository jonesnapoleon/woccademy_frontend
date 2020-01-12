import React from 'react'
import { connect } from 'react-redux'

const CourseDetail = ({course, id}) =>
    <div key={id}>
        <h5>{course.title}</h5>
        <div>{course.short_desc}</div>
    </div>

const CourseCategories = ({category, id}) =>
    <div key={id}> {category} </div>


const SomeCourses = (props) => {
    const { courses, coursesCategories } = props
    return(
        <div>
            <center><h4>Belajar Langsung dari Ahlinya.</h4></center>
            { coursesCategories.map( (coursesCategory, id) => <CourseCategories category={coursesCategory} key={id} id={id} /> ) }
            { courses.map( (course, id) => <CourseDetail course={course} key={id} id={id} /> ) }
        </div>
    )
}

const mapStateToProps = (state) => { 
    return {
        courses: state.courses,
        coursesCategories: state.coursesCategories
    }
}

export default connect(mapStateToProps)(SomeCourses)