import { useState, useRef, useEffect } from "react"

export default function MoviePicker() {

    const KEY = import.meta.env.VITE_OMDB_KEY;
    const movieContainer = document.getElementById('MovieContainer')

    const [formData, setFormData] = useState({
        title: "",
        year: ""
    });

    const inputRef = useRef(null);

    useEffect(()=> {
        inputRef.current.focus();
    }, [])

    const handlFormDataChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        try{
            movieContainer.innerHTML = ''

            e.preventDefault()
            console.log(`Data: ${JSON.stringify(formData)}`);

            setFormData({
                title: "",
                year: ""
            })

            const res = await fetch(
                `https://www.omdbapi.com/?apikey=${KEY}&s=${formData.title}&y=${formData.year}`,
            );

            const data = await res.json()
            console.log(data.Search);

            if (data !== undefined){
                console.log('not undefinded');
                renderMovies(data.Search)
            }; 

            function renderMovies(movies) {
                movies.forEach(movie => {
                    const div = document.createElement('div')
                    div.appendChild(document.createElement('h3')).textContent = movie.Title
                    div.appendChild(document.createElement('p')).textContent = movie.Year;
                    div.appendChild(document.createElement('img')).setAttribute('src', movie.Poster);
                    div.appendChild(document.createElement('hr'));
                    movieContainer.appendChild(div)
                    
                });
            }
        } catch (e) {
            console.error(e)
        }
    }

    return(
        <>
            <div>
                {/* Bad Movie Night Button */}
                <form onSubmit={handleSubmit} >
                    <input type="text" placeholder='Movie title' name="title" value={formData.title} ref={inputRef} onChange={handlFormDataChange}/>
                    <br />
                    <input type="number" placeholder='Movie year' name="year" min="1900" max={new Date().getFullYear()} value={formData.year} onChange={handlFormDataChange}/>
                    <br />
                    <button>Search Movies</button>
                </form>

                <div id="MovieContainer">
                    
                </div>
            </div>
        </>
    )
}