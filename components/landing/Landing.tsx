import React from "react"
import { links } from '../../assets/data/links'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { LinkType } from '../../types/types'

const Landing = () => {
  return (
    <div className='section_container' id='home'>
      <div className='hero-content'>
        <div className='headline'>
          <h2>Tanner Barcelos</h2>
          <p>I&apos;m a Software Engineer passionate about Big Data & Web Technology, focused on democratizing data through interactive web experiences</p>
        </div>
        <div className='contact-container'>
          <>
            { links.map(({ url, icon, name }: LinkType) => {
              return (
                <a href={ url } target='__blank' key={ url } className='cta'>
                  { name } { icon && <FontAwesomeIcon icon={ icon } /> }
                </a>)
            }) }
          </>
        </div>
      </div>
    </div>
  )
}

export default Landing
