
import React from 'react'
import { JumboTron } from './Jumbotron'
import Course from '../Course'
import { Benefits } from './Benefits'
import { Partners } from './Partners'
import { Quotes } from './Quotes'
import './Home.css'

const Home = () => {
    return(
        <div>
            <JumboTron />
            <Course />
            <Benefits />
            <Quotes />
            <Partners />
        </div>
    )
}

export default Home
