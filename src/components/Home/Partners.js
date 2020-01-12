import React from 'react'

const imgsMitra = [
    'https://a.kalibrr.com/assets/shared/img/1200x630.__fea5ff19__.png', 
    'https://a.kalibrr.com/assets/shared/img/1200x630.__fea5ff19__.png', 
    'https://a.kalibrr.com/assets/shared/img/1200x630.__fea5ff19__.png', 
    'https://a.kalibrr.com/assets/shared/img/1200x630.__fea5ff19__.png', 
]


export const Partners = () => {
    return(
        <div id='partners'>
            <h4>Mitra Kami</h4>
            <div>
            {
                imgsMitra.map( (imgMitra, id) => 
                    <div key={id}>
                        <a href='https://kalibrr.id'>
                            <img src={imgMitra} title={imgMitra} alt={imgMitra}/>
                        </a>
                    </div>
                )
            }
            </div>
        </div>
    )
}