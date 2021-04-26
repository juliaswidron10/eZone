import React from "react";

export class Modal1 extends React.Component {
  render() {
    // if (this.props.currentStep !== 1) { // Prop: The current step
    //   return null
    // }
    // The markup for the Step 1 UI
    return (
      <div className="modal modal-step1 centered">
        <h4 className="headline-green">GET AHEAD OF YOUR COMPETITION</h4>
        <p>Be the first to hear when new articles are released and get exclusive content, by signing up for news.</p>
        <form className="frontpage-form">
          <span className="form-group form-firstname">
            <input className="form-input" type="text" id="firstname" name="firstname" placeholder=" " />
            <label className="form-label" htmlFor="firstname">
              First name
            </label>
            <span className="error" hidden>
              Please tell us your first name
            </span>
          </span>
          <span className="form-group form-lastname">
            <input className="form-input" type="text" id="lastname" name="lastname" placeholder=" " />
            <label className="form-label" htmlFor="lastname">
              Last name
            </label>
            <span className="error" hidden>
              Please tell us your last name
            </span>
          </span>
          <span className="form-group form-email">
            <input className="form-input" type="email" id="email" name="email" placeholder=" " />
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <span className="error" hidden>
              Please provide a valid email address
            </span>
          </span>
        </form>
        <button className="btn-orange btn-signup-step1">YES, I WANT TO IMPROVE!</button>
        <span className="color color--orange" data-value={1} />
      </div>
    );
  }
}
