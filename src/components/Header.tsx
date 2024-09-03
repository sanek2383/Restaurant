import { Link } from "react-router-dom"
// import menuImage from '../assets/img/menu-7.jpg';

const Header: React.FC = () => {

  return (
    <>
      <div className="container-xxl position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
          <a
            href=""
            className="navbar-brand p-0"
          >
            <h1 className="text-primary m-0">
              <i className="fa fa-utensils me-3"></i>Restoran
            </h1>
            {/* <img src={menuImage} alt="Logo"/> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarCollapse"
          >
            <div className="navbar-nav ms-auto py-0 pe-4">

                <Link className="nav-item nav-link" to="/">Home</Link>

                <Link className="nav-item nav-link" to="/about">About</Link>

                <Link className="nav-item nav-link" to="/service">Service</Link>

                <Link className="nav-item nav-link" to="/menu">Menu</Link>

              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu m-0">

                    <Link className="dropdown-item" to="/booking">Booking</Link>

                    <Link className="dropdown-item" to="/team">Our Team</Link>

                    <Link className="dropdown-item" to="/testimonial">Testimonial</Link>
                </div>
              </div>
                <Link className="nav-item nav-link" to="/contact">Contact</Link>
            </div>
            <a
              href=""
              className="btn btn-primary py-2 px-4"
            >
              Book A Table
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}


export default Header;