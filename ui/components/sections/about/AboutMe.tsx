import Image from 'next/image.js'

function AboutMe() {
    return (
        <div className="top-about">
            <Image src={ '/img/me.jpeg' } id='me' alt='Profile Image' width={ 400 } height={ 400 } />
            <p>
                As a Senior Machine Learning Engineer, I am currently building an intuitive web platform designed to streamline Machine Learning Operations (MLOps) for Data Scientists, ML Engineers, and AI Researchers. This platform leverages cutting-edge technologies and machine learning models to provide seamless user experiences and drive operational efficiency.
                <br /> <br />
                This platform is a revolutionary tool that simplifies the deployment of robust ML models, development of intuitive software, and setup of scalable infrastructure for high-volume data processing and prediction tasks. It is designed to empower users with real-time insights and enhance operational efficiency.
                <br /><br />
                With a strong technical foundation spanning frontend, backend, and machine learning technologies, I am committed to improving user experience, streamlining MLOps, and driving operational excellence in a distributed, cloud-native environment.
            </p>

        </div>
    )
}
export default AboutMe