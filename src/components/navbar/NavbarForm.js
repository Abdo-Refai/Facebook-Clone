import "./NavbarForm.css";
import image2 from "../Imgs/avatar-02.jpg";
import image3 from "../Imgs/avatar-03.jpg";
import image4 from "../Imgs/avatar-04.avif";
import image5 from "../Imgs/avatar-05.jpg";
function NavbarForm() {
  return (
    <>
      <div className="links">
        <div className="recent-search">
          <p>Recent Search</p>
          <div className="box">
            <img src={image2} alt="/" />
            <div className="info">
              <h5>
                James Saris <span>UI Designer</span>
              </h5>
              <p>@James</p>
            </div>
          </div>
          <div className="box">
            <img src={image3} alt="/" />
            <div className="info">
              <h5>
                Alfredo Press <span>Product Designer</span>
              </h5>
              <p>@Alfredo</p>
            </div>
          </div>
          <div className="box">
            <img src={image4} alt="/" />
            <div className="info">
              <h5>
                Jaydan Smith <span>Graphic Designer</span>
              </h5>
              <p>@Jaydan</p>
            </div>
          </div>
        </div>
        <div className="suggestions">
          <p>Suggestions</p>
          <div className="box">
            <img src={image5} alt="/" />
            <div className="info">
              <h5>
                Martin Botoch <span>Tag You In Post</span>
              </h5>
              <p>@Jaylon this design is amazing work</p>
            </div>
          </div>
          <div className="box">
            <img src={image2} alt="/" />
            <div className="info">
              <h5>New Document</h5>
              <p>@Jaylon Create a new blank document</p>
            </div>
          </div>
          <div className="box">
            <img src={image3} alt="/" />
            <div className="info">
              <h5>Albert Alores.jpg</h5>
              <p>21 August 2023 - send by James Corey</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarForm;
