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
        <form>
            <label htmlFor='hoursplaying' >How many hours do you spend playing in a day?</label>
            <div className='minmaxrange'><p>0</p><p>18+</p></div>
            <input 
            className='form'
            id='hoursplaying'
            name='hoursplaying'
            type='range'
            min='0' max='18'
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