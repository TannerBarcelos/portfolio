import { links } from '../../assets/data/links'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { LinkType } from '../../types/types'

const CallToAction = () => {
    return (
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
    )
}
export default CallToAction