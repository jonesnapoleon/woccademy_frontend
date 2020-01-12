import React, { useState } from 'react'

const content = [
    {
        name: 'Albert Margono, Architecture Undergraduate Student',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
        img: 'https://uploads.disquscdn.com/images/71211b1693e144d78a1984485ae01d511183bbed38385cff2e3c45f62d7b4fca.png?w=800&h=783'
    },
    {
        name: 'Jones Napoleon, Informatics Undergraduate Student',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
        img: 'https://66.media.tumblr.com/e4a1517029a193468529e476f96b8c74/tumblr_pos6ohOEIm1ukf07c_1280.jpg'
    },
    {
        name: 'Michael Barrack, Manchester United Student',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
        img: 'https://pbs.twimg.com/media/ENKH0sHXYAEtG14.jpg'
    }
]


const Content = ({state}) =>
    <div className='prev-next-content'>
        <div className='quote'>
            <p>{ content[state].quote }</p>
            <p className='lead'>{ content[state].name }</p>
        </div>
        <center className='face'>
            <img src={content[state].img} alt={content[state].name} />
        </center>
    </div>

export const Quotes = () => {
    const [state, setState] = useState(0)

    const handleClick = (adder) => setState( (state + adder + content.length) % content.length )

    const PrevButton = () => 
        <div className='prev-next prev'>
            <button className='btn' onClick={() => handleClick(-1)}><i class="fas fa-arrow-left"></i></button>
        </div>

    const NextButton = () =>
        <div className='prev-next next'>
            <button className='btn' onClick={() => handleClick(1)}><i class="fas fa-arrow-right"></i></button>
        </div>
        
    return(
        <div id='quotes'>
            <PrevButton/>
            <Content state={state}/>
            <NextButton/>
        </div>
    )
}