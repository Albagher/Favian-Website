import Button from "./Button";
import "./Footer.scss";
import FormeButton from "./FormeButton";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="container">
      <div className="container__col--contact">
        <p>Logo Favian</p>
        <div className="contact">
          <p className="col-region">Paris, Germany, Canada</p>
          <p className="col-mail">contact@favian.com</p>
          <p className="col-tel">+33 123456789</p>
        </div>
      </div>
      <div className="container__col--service">
        <div>
          <p className="col-services">Services</p>
          <p className="col-about">About Us</p>
          <p className="col-blog">Blog</p>
          <Button text="Explore Our Services" />
        </div>
      </div>
      <div className="container__col--mail">
        <div>
          <div className="col-Stay">
            <p>Stay Up-to-Date</p>
          </div>
          <div className="col-contact">
            <form action="post">
              <label htmlFor="">Email*</label>
              <input type="mail" />
            </form>
          </div>
          <div className="col-btn">
            <FormeButton text="Subscribe" />
          </div>
        </div>
      </div>
      <div className="container__col--media">
        <div>
          <p>Follow Us</p>
          <div>
            <span>icon1</span>
            <span>icon2</span>
            <span>icon3</span>
          </div>
          <div className="lissence">
            <span>
              © 2021 Favian. All <br /> Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
