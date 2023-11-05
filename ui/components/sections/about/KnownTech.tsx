import { iconArray } from './technologyIcons'
import TechnologyItem from '../projects/technologies/TechnologyItem'

const KnownTech = () => {
    return (
        <div className='technologies_container'>
            { iconArray.map((icon, i) => (
                <TechnologyItem icon={ icon } key={ i } />
            )) }
        </div>
    )
}

export default KnownTech