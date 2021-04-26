import React from 'react';
import { Step1 , Step2, Step3, Step4, Step5, Step6, Step7, Step8 } from './steps.js';

export class Quiz extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            currentStep: 1,
            hours: 0,
            stream: false,
            interests: [],
            games: [],
            types: [],
            content: []
        }

        this.handleChange = this.handleChange.bind(this)
        this._next = this._next.bind(this)
        this._prev = this._prev.bind(this)
        // this.handleBack = this.handleBack.bind(this)
        // this.handleForward = this.handleForward.bind(this)
    }
    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const {currentStep, hours, stream, interests, games, types, content} = this.state
        alert(`Boohooo`)
    }
    _next() {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 7? 8: currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }
    _prev() {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1? 1: currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }

    previousButton() {
        let currentStep = this.state.currentStep;
        if(currentStep !==1){
          return (
            <button 
              className="btn btn-secondary" 
              type="button" onClick={this._prev}>
            Previous
            </button>
          )
        }
        return null;
      }
      
      nextButton(){
        let currentStep = this.state.currentStep;
        if(currentStep < 8){
          return (
            <button 
              className="btn btn-primary float-right" 
              type="button" onClick={this._next}>
            Next
            </button>        
          )
        }
        return null;
      }

    render() {
        return(
            <div>
                <form onSumit={this.handleSubmit}>
                    {/* <fieldset> */}
                        <Step1 currentStep={this.state.currentStep} handleChange={this.hangleChange} />
                        {/* </fieldset>
                    <fieldset onSumit={this.handleSubmit}> */}
                        <Step2 currentStep={this.state.currentStep} handleChange={this.hangleChange}/>
                        <Step3 currentStep={this.state.currentStep} handleChange={this.hangleChange}/>
                        <Step4 currentStep={this.state.currentStep} handleChange={this.hangleChange}/>
                        <Step5 currentStep={this.state.currentStep} handleChange={this.hangleChange}/>
                        {/* </fieldset>
                    <fieldset> */}
                        <Step6 currentStep={this.state.currentStep} handleChange={this.hangleChange}/>
                        {/* </fieldset>
                    <fieldset> */}
                        <Step7 currentStep={this.state.currentStep} handleChange={this.hangleChange}/>
                        {/* </fieldset>
                    <fieldset> */}
                        <Step8 currentStep={this.state.currentStep} handleChange={this.hangleChange}/>
                        {/* </fieldset> */}
                        {this.previousButton()}
        {this.nextButton()}
                </form>
            </div>
        )
    }
}

