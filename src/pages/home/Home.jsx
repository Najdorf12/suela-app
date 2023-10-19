import imgPlayer from "/imgHome.png";
import imgEscudo from "/flamengonegro.svg";
import "./home.css";

const Home = () => {

    return(
        <>
     <main className="home">
        <section className="home-escudo"  >
          <img src= { imgEscudo } alt="" />
        </section>
        <section className=" home-player">
          <img src= { imgPlayer } alt="" />
        </section>
        <section className="home-title">
          <h1>DIEGO VARGAS</h1>
        </section>
      </main>
        </>
    )
};

export default Home;
