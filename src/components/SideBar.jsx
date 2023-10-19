import imgSuela from "/Logo SP negro.svg";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <section className="sidebar">
      <div className="side-img_suela">
        <img src={imgSuela} alt="" />
      </div>
      <nav className="side-wrapper">
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
                <i class="bx bx-home"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default SideBar;
