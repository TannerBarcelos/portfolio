import Image from 'next/image.js'

const AboutMe = () => {
    return (
        <div className="top-about">
            <Image src={ '/img/me.jpeg' } id='me' alt='Profile Image' width={ 500 } height={ 500 } />
            <p>
                I am an experienced Full Stack Software Engineer with a deep passion for Web Development. My primary goal is to bridge the gap between complex data and end users by creating interactive web experiences that make information accessible and engaging.
                <br />
                <br />
                Not only do I enjoy making data experiences better, but I am very passionate about productivity and I enjoy building applications that make life easier and more engaging.
                <br />
                <br />
                Throughout my career, I have honed my skills in both front-end and back-end development, allowing me to tackle a wide range of projects and deliver comprehensive solutions. I thrive on the challenge of transforming intricate data sets into user-friendly interfaces that empower individuals to make informed decisions and gain valuable insights.
                <br />
                <br />
                Beyond my technical proficiency, I am a collaborative team player who values effective communication and enjoys working in dynamic environments. I thrive on constantly learning and staying up-to-date with the latest trends and advancements in the fields of web development and big data.
            </p>
        </div>
    )
}
export default AboutMe