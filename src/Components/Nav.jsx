import './Nav.css'

function Navbar({ searchMovies, setSearchMovies, search }) {
    return (
        <nav className="navbar bg-dark  px-3 navbar-box">
            <div className="container-fluid">
                <span className="navbar-brand fw-medium">
                <img src="public/latesthdmovieshub-removebg-preview.png" alt="" /></span>
                <div className="d-flex input-text">
                    <input className="form-control px-3 py-2 mx-2 border border-3 border-primary rounded-pill " type="text" placeholder="Search for movies"  value={searchMovies} onChange={(val) => setSearchMovies(val.target.value)} />

                    <button className="btn btn-outline-primary border border-3 border-primary mx-3 " onClick={() => search(searchMovies)}><ion-icon name="search-sharp"></ion-icon></button>


                </div>
            </div>
        </nav>
        
    )
}

export default Navbar