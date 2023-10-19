import imgPLayer from "/imgDiegopuñito.png";
import imgEscudo1 from "/argentina.svg";
import imgEscudo2 from "/comodoro.svg";
import imgBalon from "/img-balon1.png";
import Palmares from "../palmares/Palmares";
import "./player-info.css";

const PlayerInfo = () => {
  return (
    <>
      <main className="info-wrapper">
        <section className="info-title">
          <span>11</span>DIEGO VARGAS
          <p> Flamengo - </p>
        </section>
        <section className="info-clubs">
          <article className="club">
            <img src={imgEscudo1} alt="" />
            <div>
              <h3> Selección Nacional 2023 </h3>
              <p>Argentina C.A.F.S</p>
            </div>
          </article>

          <article className="club">
            <img src={imgEscudo2} alt="" />
            <div>
              <h3> Selección Provincial 2023 </h3>
              <p>Comodoro Rivadavia</p>
            </div>
          </article>
        </section>

        <section className="info-img">
          <img src={imgPLayer} alt="" />
        </section>
      </main>

      <div className="player-data">
        <div>
          <button className="data">
            <h4>Nacimiento</h4>
            <p>14/10/1996</p>
          </button>
          <button className="data">
            <h4>Debut</h4>
            <p>2014</p>
          </button>
          <button className="data">
            <h4>Club</h4>
            <p>Flamengo</p>
          </button>
          <button className="data">
            <h4>Posicion</h4>
            <p>Ala / Pivot</p>
          </button>
        </div>

        <section className="player-data_img">
          <img src={imgBalon} alt="" />
        </section>
      </div>

      <Palmares />
    </>
  );
};

export default PlayerInfo;
