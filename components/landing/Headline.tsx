const Headline = () => {
    const headlineName = 'Tanner Barcelos'
    const headlineDescription = `I am a Software Engineer passionate about Data & Web Technology`
    return (
        <div className='headline'>
            <h2>{ headlineName }</h2>
            <p>{ headlineDescription }</p>
        </div>
    )
}
export default Headline