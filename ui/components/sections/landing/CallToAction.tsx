import { links } from '@/lib/data/links'
import type { LinkType } from '@/lib/definitions'
import A11YLink from '@/components/common/AccessibleAnchor'

function CallToAction() {
    return (
        <div className='contact-container'>
            { links.map(({ name, url }: LinkType) => {
                return (
                    <A11YLink
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