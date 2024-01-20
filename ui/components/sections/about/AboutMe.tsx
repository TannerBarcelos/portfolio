import Image from 'next/image.js'

const AboutMe = () => {
    return (
        <div className="top-about">
            <Image src={ '/img/me.jpeg' } id='me' alt='Profile Image' width={ 400 } height={ 400 } />
            <p>
                As a Senior Full Stack Software Engineer at Visa Data & AI Platform, I specialize in developing cutting-edge software solutions. My expertise includes creating web platforms with technologies such as React, Redux, ChartJS, MaterialUI, Figma, and more.
                <br /><br />
                I&apos;ve played a crucial role in transforming user experience, focusing on designing UX for AI-powered business intelligence and an admin UI for Visa&apos;s fraud detection platform.
                <br /><br />
                Before Visa, at Scalable Commerce, I led a team in CRM platform development and migrated web applications to containerized AWS workloads, significantly improving customer service efficiency and retention rates.
                <br /><br />
                My technical proficiency spans frontend technologies like HTML, CSS, React, NextJS, and backend systems using NodeJS, Express, and various databases. Additionally, I have strong DevOps skills, utilizing tools like Docker, Kubernetes, and AWS.
            </p>
        </div>
    )
}
export default AboutMe