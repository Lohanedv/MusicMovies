import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import './styles.css';

function NavBar() {
    return(
        <header>
      <nav className="container">
        <div className="musicmovie-nav-content">
          <h1>MusicMovies</h1>
          <a href="https://github.com/Lohanedv/MusicMovies">
            <div>
              <GithubIcon />
              <p>/Lohanedv</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
    );
}
export default NavBar;