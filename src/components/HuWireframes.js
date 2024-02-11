import {
  signIn,
  logIn,
  calendar,
  classes,
  createEvent,
  profile,
  dash,
  dashOpen,
  forgotPwd,
} from "../assets";

export default function HuWireframes() {
  const images = [
    signIn,
    logIn,
    dashOpen,
    dash,
    classes,
    calendar,
    createEvent,
    profile,
    forgotPwd,
  ];

  return (
    <>
      <div className="wireframes">
        {images.map((image, index) => (
          <img key={index} src={image} alt="hu-wireframe" />
        ))}
      </div>
    </>
  );
}
