import React from 'react'
import { LinkType as AccessibleAnchorProps } from '@/lib/definitions'

const AccessibleAnchor = ({ name, url }: AccessibleAnchorProps) => {
  return (
    <a href={ url } target='__blank' key={ url } className='cta' aria-label={ name } title={ name } style={ { marginRight: "1rem" } }>
      { name } <span className='external-link'>&rarr;</span>
    </a>
  )
}

export default AccessibleAnchor