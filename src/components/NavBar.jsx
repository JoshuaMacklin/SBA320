import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <>
            <main className="navBar">
                <h1>Movie Night</h1>
                <Link to="/">Home</Link>
                <span> </span>
                <Link to="/about">About</Link>
            </main>
        </>
    )
}