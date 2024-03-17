import Image from 'next/image.js'

function AboutMe() {
    return (
        <div className="top-about">
            <Image src={ '/img/me.jpeg' } id='me' alt='Profile Image' width={ 400 } height={ 400 } />
            <p>
                As a Senior Full Stack Software Engineer at Visa, I specialize in crafting cutting-edge UI platforms tailored for operations and BI, leveraging technologies like React, Redux, ChartJS, and MaterialUI.
                <br /> <br />
                At Visa, I&apos;ve spearheaded the development of a revolutionary chatbot for conversational business intelligence, empowering leaders with real-time insights, and contributed to enhancing operational efficiency by developing control plane API and UI components for AI Platform operations.
                <br /> <br />
                Prior to Visa, at Scalable Commerce, I led teams in CRM platform development and orchestrated the migration of web applications to containerized AWS workloads, driving significant improvements in customer service efficiency.
                <br /><br />
                With a strong technical foundation spanning frontend and backend technology, I am committed to improving user experience and streamlining operational excellence in a distributed, cloud-native environment.
            </p>

        </div>
    )
}
export default AboutMe