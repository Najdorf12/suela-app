import imgPlayer from "/diegoespalda.png";
import imgTrophy from "/trophy3D.png";
import imgEscudo from "/flamengo.svg";
import Video from "../../components/Video";
import Carousel from "../../components/Carousel";
import "./palmares.css";

const Palmares = () => {

    return (
        <>
        <section className="video-container">
          <Video />
          <Carousel />
        </section>
           <main className="palmares-wrapper">
              
             <div className="palmares-data">
                 <h3><img src={imgEscudo} alt="" /> Flamengo </h3>
                     <p> <img src={ imgTrophy } alt="" />Apertura 23`</p>
                     <p> <img src={ imgTrophy } alt="" />Apertura y Clausura 22`</p>
                     <p> <img src={ imgTrophy } alt="" />Apertura y Clausura 21`</p>
                     <p> <img src={ imgTrophy } alt="" />Apertura y Clausura 18`</p>
                     <p> <img src={ imgTrophy } alt="" />Apertura y Clausura 17`</p>
                     <p> <img src={ imgTrophy } alt="" />Clausura 16`</p>
                     <p> <img src={ imgTrophy } alt="" />Copa Nacional P. Madryn 2022</p>
                     <p> <img src={ imgTrophy } alt="" />Subcampeonato 2023</p>
                     <p> <img src={ imgTrophy } alt="" />Division de Honor 2019 | Rosario</p>
              </div>
           
              <div className="palmares-img">
                <img src= { imgPlayer } alt="" />
              </div>
           
            <div className="palmares-data2">
                <div>
                  <h3> Jockey Club - (Mendoza) </h3>
                  <p> <img src={ imgTrophy } alt="" />Mundial Contintal Cup FIFUSA 2023</p>
                </div>
               
               <div>
                <h3>San Martin de San Juan Bautista- (Paraguay)</h3>
                <p> <img src={ imgTrophy } alt="" />Campeon Copa 2022</p>
               </div>
            </div>
        </main>
        
        
        </>
    )
};

export default Palmares