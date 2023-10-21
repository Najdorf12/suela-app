import imgPLayer from "/imgDiegopuñito.png";
import imgEscudo1 from "/argentina.svg";
import imgEscudo2 from "/comodoro.svg";
import imgBalon from "/img-balon1.png";
import Palmares from "../palmares/Palmares";
import "./player-info.css";
import { easeIn, easeInOut, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const variants = {
  hidden: {
    opacity:0,
    y:100
  },
  visible: {
    opacity:1,
    y: 0,
    transition: {
      duration: 1
    }
  }
}
const variants2 = {
  hidden: {
    opacity: 0
  },
  visible: {
      opacity:1,
      transition: {
        duration: .7,
        ease: "easeIn"
      }
    }
}


const PlayerInfo = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {        
        control.start("hidden");
    }
  }, [control, inView]);


  return (
    <>
      <main className="info-wrapper">
        <motion.section className="info-title"
        variants= {variants}
        initial="hidden"
        animate={control}
        ref={ref}
        >
          <span>11</span>DIEGO VARGAS
          <p> Flamengo - </p>
        </motion.section>
      
        <motion.section className="info-clubs"
         variants= {variants}
         initial="hidden"
         animate={control}
         ref={ref}
        >
          <article className="club" >
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
        </motion.section>

        <motion.section className="info-img"
        variants= {variants2}
        initial="hidden"
        animate={control}
        ref={ref}
        >
          <img src={imgPLayer} alt="" />
        </motion.section>
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
