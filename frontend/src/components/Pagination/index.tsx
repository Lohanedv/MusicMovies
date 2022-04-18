import { ReactComponent as Arrow } from "assets/img/Vector.svg";
import './styles.css';

function Pagination() {
  return (
    <div className="musicmovie-pagination-container">
      <div className="musicmovie-pagination-box">
        <button className="musicmovie-pagination-button" disabled={true}>
          <Arrow />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="musicmovie-pagination-button" disabled={false}>
          <Arrow className="musicmovie-flip-horizontal" />
        </button>
      </div>
    </div>
  );
}
export default Pagination;
