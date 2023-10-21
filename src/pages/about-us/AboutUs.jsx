import imgSuela from "/Logo SP.svg";
import "./about.css"

const AboutUs = () => {
  return (
    <>
      <main className="about-wrapper">
        <section className="about-img">
          <img src={imgSuela} alt="" />
        </section>
        <section className="about-text">
          <h3>Sobre Nosotros</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            quam, debitis recusandae maiores dolor at explicabo sequi! Vero
            minus optio modi vitae nobis
          </p>
        </section>
      </main>

      <div className="social">
        <h2>Contacto</h2>
        <section className="social-icons">
          <i className="bx bxl-instagram"></i>
          <i className="bx bxl-facebook-circle"></i>
          <i className="bx bxl-whatsapp"></i>
        </section>
      </div>
    </>
  );
};
export default AboutUs;