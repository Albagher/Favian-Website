import FormeButton from "./FormeButton";
import "./Nav.scss";

type Props = {};

const Nav = (props: Props) => {
  return (
    <div className="nav">
      <div className="nav__logo">logo</div>
      <div className="nav__listes">
        <div className="listes">
          <ul className="listes--ul">
            <li>Solutions</li>
            <li>Vision</li>
            <li>Programs</li>
            <li>Blog</li>
            <li>More</li>
            <li>*Login*</li>
            <li>
              <FormeButton text="Get in Touch" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
