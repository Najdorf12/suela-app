import imgSuela from "/Logo SP negro.svg";


const SideBar = () => {
    return (
      <section className="sidebar"  >
        <div className="side-img_suela">
          <img src={imgSuela} alt="" />
       </div>
          <nav className="side-wrapper">
            <div className="side-btns">
              <ul>
                <li>
                  <i className="bx bx-male"></i>
                </li>
                <li>
                  <i className="bx bx-trophy"></i>
                </li>
                <li>
                  <i className="bx bxs-contact"></i>
                </li>
              </ul>
            </div>
          </nav>
      </section>
    );
  };
  
  export default SideBar;