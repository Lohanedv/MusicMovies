import "./styles.css"
function Form() {

    const movie = {
        id: 1, 
        image: "https://www.themoviedb.org/t/p/w220_and_h330_face/dmmnl7Nqe3ITQMFBAJF0fYyNILq.jpg",
        title: "Relatos Brasileiros: Alberto Cavalcanti",
        count: 2,
        score: 3.8
    };

    return(
        <div className="musicmovie-form-container">
            <img className = "musicmovie-card-image" src={movie.image} alt={movie.title} />
            <div className="musicmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <form className="musicmovie-form">
                    <div className = "form-group musicmovie-form-group">
                        <label htmlFor = "email">Digite o seu email: </label>
                        <input type="email" className = "form-control" id = "email" />
                    </div>
                    <div className = "form-group musicmovie-fotm-group">
                        <label htmlFor="score">Informe a sua avaliação</label>
                        <select className="form-control" id="score" name="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="musicmovie-form-btn-container">
                        <button className="btn btn-primary musicmovie-btn">Salvar</button>
                    </div>
                </form>
                <button className="btn btn-primary musicmovie-btn mt-3">Cancelar</button>
            </div>
        </div>
    );
}
export default Form;