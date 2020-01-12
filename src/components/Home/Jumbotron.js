import React from 'react'
import { Jumbotron } from 'react-bootstrap'

export const JumboTron = () => {
    return(
        <Jumbotron>
            <div className='jumbotron-text'>
                <h3>Helping each of our students fulfill the potential</h3>
                <br />
                <p>Welcome to Woccademy, the place for you to learn skill digitally from your home
                    <br />
                Get excited with all high quality tutorial video served by our best tutor in their specialize.</p>
                <button className='btn btn-warning'>Read more</button>
            </div>
        </Jumbotron>
    )
}