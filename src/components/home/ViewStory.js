import "./ViewStory.css";
function ViewStory(props) {
  return (
    <>
      <div className="overlay"></div>
      <div className="popup-box">
        <img src={props.story.image} alt="/" className="popup-image" />
        <p className="close-button" onClick={() => props.closePopup()}>
          x
        </p>
      </div>
    </>
  );
}

export default ViewStory;
