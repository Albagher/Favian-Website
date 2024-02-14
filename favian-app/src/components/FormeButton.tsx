import "./FormButton.scss";
type Props = {
  text: string;
};

const FormeButton = ({ text }: Props) => {
  return <button className="forme__btn">{text}</button>;
};

export default FormeButton;
