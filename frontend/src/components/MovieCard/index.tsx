import MovieScore from "components/MovieScore";
import { Link } from "react-router-dom";
import "./style.css";

function MovieCard() {
  const movie = {
    id: 1,
    image:
      "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/yzH5zvuEzzsHLZnn0jwYoPf0CMT.jpg",
    title: "Chico: Artista Brasileiro",
    count: 2,
    score: 4.8,
  };

  return (
    <div>
      <img
        className="musicmovie-movie-card-image"
        src={movie.image}
        alt={movie.title}
      />
      <div className="musicmovie-card-bottom-container">
        <h3>{movie.title}</h3>
        <MovieScore />
        <Link to={`/form/${movie.id}`}>
          <div className="btn btn-primary musicmovie-btn">Avaliar</div>
        </Link>
      </div>
    </div>
  );
}
export default MovieCard;
