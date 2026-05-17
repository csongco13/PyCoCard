function DarkChoice({ showDarkChoice, useDarkAdd, useDarkSubtract }) {
  if (showDarkChoice === true) {
    return (
      <section className="dark-choice">
        <h2 className="dark-title">Dark Knight Power</h2>
        <button className="dark-button" onClick={useDarkAdd}>
          Add 2 points to me
        </button>
        <button className="dark-button" onClick={useDarkSubtract}>
          Remove 2 points from opponent
        </button>
      </section>
    );
  }
  else {
    return null;
  }
}

export default DarkChoice;