function Search() {
    return (
        <section className="searchSection" id="searchSection">
            <div className="searchWrapper wrapper">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <form action="submit" role="search">
                    <label htmlFor="search">Lorem ipsum dolor sit amet consectetur adipisicing.</label>
                    <input type="search" id="search" placeholder="Enter a movie"/>
                    <button>Submit</button>
                </form>
            </div>
        </section>    
    )
}

export default Search