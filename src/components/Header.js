function Header() {
    return (
        <header className="flexBox">
            <div className="flexBox">
                {/* popcorn image */}
                <h1>Out Of Context</h1>
            </div>
            <h2>A GIF generator for your favourite flix</h2>
            <div className="flexBox">
                {/* film strip image */}
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quidem sunt ullam, molestiae optio nemo mollitia ad sit tempora dicta!</p>
            </div>
            <a href="#searchSection">Find GIF!</a>
        </header>
    )
}

export default Header