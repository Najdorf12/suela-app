import imgSuela from "/Logo SP negro.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const variant = {
  hidden: { opacity: 0, y: "100vh" },
  visible: {
    opacity: 1, 
     y:0,
     transition: {
       duration: 2.5,
      ease: "easeIn",
      type: "spring"
      } 
    },
}
const variant2 = {
  hidden: {opacity: 0 ,x : "-100px"}, 
  visible: {
    opacity: 1, 
    x: 0,
    transition: {
      duration: 1,
      } 
    },
}

const SideBar = () => {
  return (
    <section className="sidebar">
      <motion.div className="side-img_suela"
      variants={variant2}
      initial="hidden"
      animate="visible"
      >
        <img src={imgSuela} alt="" />
      </motion.div>
      <motion.nav className="side-wrapper"
      variants={variant}
      initial="hidden"
      animate="visible"
      >
        <div className="side-btns">
          <ul>
            <li>
              <Link
                style={{ color: "rgba(172, 114, 8, 0.842)" }}
                to={"/diegovargas"}
              >
                <i className="bx bx-male"></i>
              </Link>
            </li>
            <li>
              <Link
                style={{ color: "rgba(172, 114, 8, 0.842)" }}
                to={"/sobrenosotros"}
              >
                <i className="bx bxs-contact"></i>
              </Link>
            </li>
            <li>
              <Link style={{ color: "rgba(172, 114, 8, 0.842)" }} to={"/"}>
                <i className="bx bx-home"></i>
              </Link>
            </li>
          </ul>
        </div>
      </motion.nav>
    </section>
  );
};

export default SideBar;
