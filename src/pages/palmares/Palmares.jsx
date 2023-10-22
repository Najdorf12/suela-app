import imgPlayer from "/diegoespalda.png";
import imgTrophy from "/trophy3D.png";
import imgEscudo from "/flamengo.svg";
import Video from "../../components/Video";
import Carousel from "../../components/Carousel";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "./palmares.css";

const variant = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1, 
     transition: {
      duration: 1,
      ease: "easeIn"
      } 
    },
}
const variantImg = {
  hidden: { opacity: 0, y: "-100" },
  visible: {
    opacity: 1, 
     y:0,
     transition: {
      delay: .75,
       duration: 1.4,
      ease: "easeIn"
      } 
    },
}

const Palmares = () => {
  
  const control = useAnimation();
  const [ref, inView] = useInView();
  
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  })
  
  return (
        <>
        <section className="video-container">
          <Video />
          <Carousel />
        </section>
           <motion.main className="palmares-wrapper"
            variants={variant}
            initial="hidden"
            animate={control}
            ref={ref}>
              
             <motion.div className="palmares-data"
             variants={variantImg}
             initial="hidden"
             animate={control}
             ref={ref}
             >
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
              </motion.div>
           
              <motion.div className="palmares-img"
              variants={variantImg}
              initial="hidden"
              animate={control}
              ref={ref}
              >
                <img src= { imgPlayer } alt="" />
              </motion.div>
           
            <motion.div className="palmares-data2"
              variants={variant}
              initial="hidden"
              animate={control}
              ref={ref}
            >
                <div>
                  <h3> Jockey Club - (Mendoza) </h3>
                  <p>
                    <img src={ imgTrophy } alt="" />Mundial Contintal Cup FIFUSA 2023
                    </p >
                 </div>
               
               <div>
                <h3>San Martin de San Juan Bautista- (Paraguay)</h3>
                <p> <img src={ imgTrophy } alt="" />Campeon Copa 2022</p>
               </div>
            </motion.div>
       
        </motion.main>
        
        
        </>
    )
};

export default Palmares