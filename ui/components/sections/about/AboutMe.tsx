import Image from 'next/image.js'

const AboutMe = () => {
    return (
        <div className="top-about">
            <Image src={ '/img/me.jpeg' } id='me' alt='Profile Image' width={ 500 } height={ 500 } />
            <p>
                As a Senior Full Stack Software Engineer at Visa Data & AI Platform, I bring a dynamic blend of skills and experiences, specializing in creating cutting-edge software solutions.

                My expertise lies in developing web platforms that enhance data observability, utilizing a tech stack that includes React, Redux, ChartJS, MaterialUI, Figma, and more.
                <br /><br />
                I have played a pivotal role in transforming user experience, particularly in designing UX for AI-powered business intelligence and an admin UI for Visa fraud detection platform.
                <br /><br />
                Prior to Visa, my tenure at Scalable Commerce involved leading a team in CRM platform development and migrating web applications to containerized AWS workloads, where I significantly improved customer service efficiency and retention rates.
                <br /><br />
                My technical proficiency spans across a broad spectrum, from frontend technologies like HTML, CSS, React, NextJS, to backend systems using NodeJS, Express, and various databases. Additionally, I possess strong skills in DevOps, utilizing tools like Docker, Kubernetes, and AWS.
                <br /><br />
                Equipped with a Bachelor of Science in Computer Science from California State University, East Bay, I continue to apply my comprehensive knowledge and diverse skill set to innovate and drive technological advancement.
                <br /><br />
            </p>
        </div>
    )
}
export default AboutMe