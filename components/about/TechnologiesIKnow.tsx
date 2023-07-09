import { iconArray } from '../../assets/icons'
import TechnologyItem from '../projects/technologies/TechnologyItem'

const TechnologiesIKnow = () => {
    return (
        <div className='technologies_container'>
            { iconArray.map((icon, i) => (
                <TechnologyItem icon={ icon } key={ i } />
            )) }
        </div>
    )
}

export default TechnologiesIKnow