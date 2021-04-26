import React from 'react';

export class Step1 extends React.Component {
    render() {
    // if (this.props.currentStep !== 1) { // Prop: The current step
    //   return null
    // }
    // The markup for the Step 1 UI
    return(
      <div className="form-group">
        <form>
            <label htmlFor='hoursplaying' >How many hours do you spend playing in a day?</label>
            <div className='minmaxrange'><p>0</p><p>18+</p></div>
            <input 
            className='form'
            id='hoursplaying'
            name='hoursplaying'
            type='range'
            min='0' max='18'
            step='1'
            />
            <h1 className="currentaState">10hrs/day</h1>
            <div>
                <label htmlFor='streaming'>Do you stream your gameplay?</label>
                <input 
                className='steamradio'
                id="streaming"
                name='streaming'
                type='radio'
                />
            </div>
            
        </form>
      </div>
    )}
  }


export class Step2 extends React.Component {
    render() {
    // if (this.props.currentStep !== 1) { // Prop: The current step
    //   return null
    // }
    // The markup for the Step 1 UI
    return(
      <div className="form-group">
          <h1>What areas would you like to improve?</h1>
          <div className='icon-areas'></div>
          <h1>Physical</h1>
        <form>
            <label htmlFor='sleep'>Sleep</label>
            <input
            type="checkbox"
            value='Sleep'
            name='sleep'
            // checked={this.state.isGoing}
            // onChange={this.handleInputChange}
            ></input>
            <label htmlFor='hearing'>Hearing</label>
            <input
            type="checkbox"
            value='Hearing'
            name='hearing'
            // checked={this.state.isGoing}
            // onChange={this.handleInputChange}
            ></input>
             <label htmlFor='vision'>Vision</label>
            <input
            type="checkbox"
            value='Vision'
            name='vision'
            // checked={this.state.isGoing}
            // onChange={this.handleInputChange}
            ></input>
             <label htmlFor='injuries'>Injuries</label>
            <input
            type="checkbox"
            value='Injuries'
            name='injuries'
            // checked={this.state.isGoing}
            // onChange={this.handleInputChange}
            ></input>
             <label htmlFor='nutrition'>Nutrition</label>
            <input
            type="checkbox"
            value='Nutrition'
            name='nutrition'
            // checked={this.state.isGoing}
            // onChange={this.handleInputChange}
            ></input> 
            

            
        </form>
      </div>
    )}
  }


export class Step3 extends React.Component {
    render() {
    // if (this.props.currentStep !== 1) { // Prop: The current step
    //   return null
    // }
    // The markup for the Step 1 UI
    return(
      <div className="form-group">
          <h1>What areas would you like to improve?</h1>
          <div className='icon-areas'></div>
          <h1>Mental</h1>
        <form>
            <label htmlFor='mindset'>Mindset</label>
            <input
            type="checkbox"
            value='Mindset'
            name='mindset'
            // checked={this.state.isGoing}
            // onChange={this.handleInputChange}
            ></input>
            <label htmlFor='stress'>Stress</label>
            <input
            type="checkbox"
            value='Stress'
            name='stress'
            // checked={this.state.isGoing}
            // onChange={this.handleInputChange}
            ></input>
             <label htmlFor='psychology'>Physiology</label>
            <input
            type="checkbox"
            value='Physiology'
            name='psychology'
            // checked={this.state.isGoing}
            // onChange={this.handleInputChange}
            ></input>
        </form>
      </div>
    )}
  }

export class Step4 extends React.Component {
    render() {
    // if (this.props.currentStep !== 1) { // Prop: The current step
    //   return null
    // }
    // The markup for the Step 1 UI
    return(
      <div className="form-group">
          <h1>What areas would you like to improve?</h1>
          <div className='icon-areas'></div>
          <h1>Skills</h1>
        <form>
            <label htmlFor='tactical'>Tactical</label>
            <input
            type="checkbox"
            value='Tactical'
            name='tactical'
            // checked={this.state.isGoing}
            // onChange={this.handleInputChange}
            ></input>
            <label htmlFor='strategy'>Strategy</label>
            <input
            type="checkbox"
            value='Strategy'
            name='strategy'
            // checked={this.state.isGoing}
            // onChange={this.handleInputChange}
            ></input>
             <label htmlFor='psychology'>Physiology</label>
            <input
            type="checkbox"
            value='Physiology'
            name='psychology'
            // checked={this.state.isGoing}
            // onChange={this.handleInputChange}
            ></input>
             <label htmlFor='stress'>Stress</label>
            <input
            type="checkbox"
            value='Stress'
            name='stress'
            // checked={this.state.isGoing}
            // onChange={this.handleInputChange}
            ></input>
             <label htmlFor='psychology'>Physiology</label>
            <input
            type="checkbox"
            value='Physiology'
            name='psychology'
            // checked={this.state.isGoing}
            // onChange={this.handleInputChange}
            ></input>
        </form>
      </div>
    )}
  }