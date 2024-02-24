import Image from 'next/image.js'

function AboutMe() {
    return (
        <div className="top-about">
            <Image src={ '/img/me.jpeg' } id='me' alt='Profile Image' width={ 400 } height={ 400 } />
            <p>
                As a Senior Full Stack Software Engineer at Visa, I specialize in developing cutting-edge UI platforms for operations and BI. My expertise includes creating web interfaces with technologies such as React, Redux, ChartJS, MaterialUI, and more.
                <br /><br />
                At Visa, I significantly contributed to the design and development of a chatbot for conversational business intelligence, enhancing decision-making for business leaders with real-time performance insights. I also developed a control plane API and UI components for AI Platform operations to manage and monitor machine learning models, improving operational efficiency and reducing costs.
                <br /><br />
                Before Visa, at Scalable Commerce, I led a team in CRM platform development and migrated web applications to containerized AWS workloads, significantly improving customer service efficiency and retention rates.
                <br /><br />
                My technical proficiency spans frontend technologies like HTML, CSS, React, NextJS, and backend systems using NodeJS, Express, and various databases. Additionally, I have strong DevOps skills, utilizing tools like Docker, Kubernetes, and AWS.
            </p>

        </div>
    )
}
export default AboutMe