import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import "./App.css";

/*

  Forma no controlada de manejar los datos del formulario. 2 opciones:
    - const { search } = Object.fromEntries(new FormData(event.target));
    - useRef()

*/
/*

  Forma controlada de manejar los datos del formulario
    * Es más lento; cada vez que cambia se renderiza
    * Controlado por React; puede ayudar en validación; no se depende del DOM

    - Input [onChange() + value] + useState()
 

*/

function App() {
  const { movies } = useMovies();

  const handleSubmit = (event) => {
    event.preventDefault();
    //Se podría utilizar el hook useRef pero es más eficiente así
    /* Alternativa para manejar 1 única variable
    const data = new FormData(event.target);
    const search = data.get("search");*/
    const { search } = Object.fromEntries(new FormData(event.target));
    console.log(search);
  };

  return (
    <div id="page">
      <header>
        <h1>Buscador de películas</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            /*ref={inputRef}*/
            type="text"
            name="search"
            placeholder="Coco, Star Wars, The Matrix..."
          />
          <button>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
