import React from 'react'

const benefits = [
    {
        title: 'Practical Skills',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
        img: 'fas fa-cogs'
    },
    {
        title: 'Community-based Learning',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
        img: 'fas fa-american-sign-language-interpreting'
    },
    {
        title: 'No Subscription Fees',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
        img: 'fas fa-dollar-sign'
    }
]

export const Benefits = () => {
    return(
        <div id='benefits'>
            {
                benefits.map( (benefit, id) => 
                    <div key={id}>
                        <div className='logo'><i className={benefit.img} /></div>
                        <h6>{benefit.title}</h6>
                        <p>{benefit.desc}</p>
                    </div>
                )
            }
        </div>
    )
}