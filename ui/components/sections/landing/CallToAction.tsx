import { links } from '@/lib/data/links'
import type { LinkType } from '@/lib/definitions'
import AccessibleAnchor from '@/components/common/AccessibleAnchor'

const CallToAction = () => {
    return (
        <div className='contact-container'>
            { links.map(({ name, url }: LinkType) => {
                return (
                    <AccessibleAnchor
                        name={ name }
                        url={ url }
                        key={ name }
                    />
                )
            }) }
        </div>
    )
}
export default CallToAction