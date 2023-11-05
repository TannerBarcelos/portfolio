import TestimonialItem from './TestimonialItem'
import testimonials from '@/lib/data/testimonials.json'

const Testimonials = () => {
  return (
    <section className='section_container' id='testimonials' aria-label="Testimonials for Tanner">
      <h1 className='section__heading'>What Other&apos;s Have Said</h1>
      <div className='recommendation_container'>
        { testimonials.map((testimonial) => (
          <TestimonialItem data={ testimonial } key={ testimonial.name } />
        )) }
      </div>
    </section>
  )
}

export default Testimonials
