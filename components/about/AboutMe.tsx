import Me from '../../assets/img/me.jpeg'
import Image from 'next/image.js'

const AboutMe = () => {
    return (
        <div className="top-about">
            <Image src={ Me } id='me' alt='Profile Image' width={ 500 } height={ 500 } />
            <p>
                I am an experienced Full Stack Software Engineer with a deep passion for Web Development and Big Data. My primary goal is to bridge the gap between complex data and end users by creating interactive web experiences that make information accessible and engaging.
                <br />
                <br />
                Throughout my career, I have honed my skills in both front-end and back-end development, allowing me to tackle a wide range of projects and deliver comprehensive solutions. I thrive on the challenge of transforming intricate data sets into user-friendly interfaces that empower individuals to make informed decisions and gain valuable insights.
                <br />
                <br />
                In addition to my web development expertise, I have extensive experience working with SQL and data pipelines. I have worked on designing and optimizing relational databases, writing complex SQL queries to extract and manipulate data, and developing efficient data pipelines to process and transform large datasets. This experience has further fueled my interest in making data more accessible and engaging for users.
                <br />
                <br />
                My big data experience encompasses working with large-scale datasets, implementing distributed computing frameworks like Apache Spark, and leveraging technologies such as Hadoop and NoSQL databases to handle and analyze vast amounts of information. I have also worked on developing data visualization solutions to present complex data in intuitive and meaningful ways.
                <br />
                <br />
                Beyond my technical proficiency, I am a collaborative team player who values effective communication and enjoys working in dynamic environments. I thrive on constantly learning and staying up-to-date with the latest trends and advancements in the fields of web development and big data.</p>
        </div>
    )
}
export default AboutMe