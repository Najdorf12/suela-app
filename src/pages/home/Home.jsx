import imgPlayer from "/imgHome.png";
import imgEscudo from "/flamengonegro.svg";
import "./home.css";
import { motion } from "framer-motion"; 

const Home = () => {

  const variants1= {
    hidden: {
      opacity: 0,
      y: "-200", 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition :{
        delay: .7,
        duration:1 
      } 
    }
  };
  const variants2 = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: .7,
        duration:1   
      }
    }
  
  }
    return(
        <>
     <main className="home">
        <motion.section
         className="home-escudo" 
         variants= {variants2}
         initial="hidden"
         animate="visible"
         >
          <img src= { imgEscudo } alt="" />
        </motion.section>
        <motion.section 
        className=" home-player"
          variants={variants2}
         initial="hidden"
         animate="visible"
        >
          <img src= { imgPlayer } alt="" />
        </motion.section>
        <motion.section
         className="home-title"
         variants={variants1}
         initial="hidden"
         animate="visible"
          >
          <h1>DIEGO VARGAS</h1>
        </motion.section>
      </main>
        </>
    )
};

export default Home;
