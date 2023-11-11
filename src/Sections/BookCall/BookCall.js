import { Button } from "../../UI/Reusable/Button/Button";
import "./bookCall.css";

export const BookCall = () => {
  return (
    <div className="main-container">
      <div className="content">
        <p className="bookcall-text">
          We offer a FREE WEBSITE AUDIT and a FREE consultation call with us
          before deciding which plan suits your needs best!
        </p>
        <Button className="white-button" buttonText={"BOOK A FREE CALL"} />
      </div>
    </div>
  );
};
