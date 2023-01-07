import React from 'react'
import family from "../Assets/Mario and Adrian b.jpg"
export const About = () => {
  return (
    <div>
        <section className='about--first__section'>
            <article className='about--first__article'>
                <div className='about--div'>
                    <div>
                        <h1 className='about--h1'>Little Lemon</h1>
                        <h3>Chicago</h3>
                    </div>
                    <div>
                        <p className='about--paragraph'>We are a proud bussiness family which primarly is being run by me and my brother. We take pride in the quality and the choice of our food</p>
                    </div>
                </div>
                    <img style={{height: "250px", width: "320px", objectFit: "cover", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} src={family} alt="Family" />
            </article>
        </section>
    </div>
  )
}
