import TestimonialItem from './TestimonialItem'
import testimonials from '../../assets/data/testimonials.json'

const Testimonials = () => {
  return (
    <div className='section_container' id='testimonials'>
      <h1 className='section__heading'>What They&apos;ve Said</h1>
      <div className='recommendation_container'>
        { testimonials.map((testimonial, i) => (
          <TestimonialItem data={ testimonial } key={ i } />
        )) }
      </div>
    </div>
  )
}

export default Testimonials
