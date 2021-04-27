import React from 'react';

export class Step1 extends React.Component {
    render() {
    if (this.props.currentStep !== 1) { // Prop: The current step
      return null
    }
  
    return(
      <div className="form-group">
            <label className="formlabel" htmlFor='hoursplaying' >How many hours do you spend playing in a day?</label>
            <div className='minmaxrange'><p>0</p><p>18+</p></div>
            <input 
            className='sliderinput'
            id='hours'
            type='range'
            min='0' max='18'
            step='1'
            name='hours'
            onChange={this.props.handleChange} 
            />
            <h1 className="currentaState"> hrs/day</h1>
            <div className="streaming">
                <label htmlFor='streaming'>Do you stream your gameplay?</label>
                <input 
                className='checkmark'
                id="streaming"
                name='streaming'
                type='checkbox'
        onChange={this.props.handleChange} 
                />
            </div>
      </div>
    )}
  }

  export class Step2 extends React.Component {
    render() {
    if (this.props.currentStep !== 2) { // Prop: The current step
      return null
    }
    // // The markup for the Step 1 UI
    return(
      <div className="form-group">
          <h1>What areas would you like to improve?</h1>
          <div className='icon-areas'></div>
          <h1>Physical</h1>
          <div className="checkbox-container">
          <div className="checkboxdiv">
                <label htmlFor='sleep'>Sleep</label>
                <input
                  type="checkbox"
                  className="switch"
                  name='sleep'
                ></input></div>
           
           <div className="checkboxdiv">
                <label htmlFor='hearing'>Hearing</label>
                <input
                  type="checkbox"
                  className="switch"
                  name='hearing'
                ></input></div>

            <div className="checkboxdiv">
                <label htmlFor='vision'>Vision</label>
                <input
                  type="checkbox"
                  className="switch"
                  name='vision'
                 ></input></div> 

            <div className="checkboxdiv">
                <label htmlFor='injuries'>Injuries</label>
                <input
                  type="checkbox"
                  className="switch"
                  name='injuries'
                ></input></div>

            <div className="checkboxdiv">
                <label htmlFor='nutrition'>Nutrition</label>
                <input
                  type="checkbox"
                  className="switch"
                  name='nutrition'
                ></input></div>
          </div>
            
             
            
      </div>
    )}
  }




export class Step3 extends React.Component {
    render() {
    if (this.props.currentStep !== 3) { 
      return null
    }
    return(
      <div className="form-group">
          <h1>What areas would you like to improve?</h1>
          <div className='icon-areas'></div>
          <h1>Mental</h1>
          <div className="checkbox-container">
          <div className="checkboxdiv">
            <label htmlFor='mindset'>Mindset</label>
            <input
              type="checkbox"
              className="switch"
              name='mindset'
            ></input></div>

           <div className="checkboxdiv">
            <label htmlFor='stress'>Stress</label>
            <input
              type="checkbox"
              className="switch"
              name='stress'
            ></input></div>

           <div className="checkboxdiv">
             <label htmlFor='psychology'>Physiology</label>
             <input
              type="checkbox"
              className="switch"
              name='psychology'
            ></input></div>
           
            </div>
      </div>
    )}
  }

export class Step4 extends React.Component {
    render() {
    if (this.props.currentStep !== 4) { 
      return null
    }
    return(
      
      <div className="form-group">
          <h1>What areas would you like to improve?</h1>
          <div className='icon-areas'></div>
          <h1>Skills</h1>
          <div className="checkbox-container">

          <div className="checkboxdiv">
            <label htmlFor='tactical'>Tactical</label>
            <input
              type="checkbox"
              value='Tactical'
              name='tactical'
              className="switch"
            ></input>
          </div>
           
          <div className="checkboxdiv">
            <label htmlFor='strategy'>Strategy</label>
            <input
              type="checkbox"
              value='Strategy'
              name='strategy'
              className="switch"
            ></input>
          </div>
           
          <div className="checkboxdiv">
            <label htmlFor='leadership'>Leadership</label>
            <input
              type="checkbox"
              value='Leadership'
              name='leadership'
              className="switch"
            ></input>
          </div>
             
          <div className="checkboxdiv">
            <label htmlFor='multitasking'>Multitasking</label>
            <input
              type="checkbox"
              value='Multi-tasking'
              name='multitasking'
              className="switch"
            ></input>
          </div>
             

          <div className="checkboxdiv">
            <label htmlFor='communication'>Communication</label>
            <input
              type="checkbox"
              value='Communication'
              name='communication'
              className="switch"
            ></input>
          </div>
            </div>
      </div>
    )}
  }

export class Step5 extends React.Component {
  render() {
  if (this.props.currentStep !== 5) { 
    return null
  }
  return(
    <div className="form-group">
        <h1>What areas would you like to improve?</h1>
        <div className='icon-areas'></div>
        <h1>Gaming</h1>
        <div className="checkbox-container">

        <div className="checkboxdiv">
          <label htmlFor='technology'>Technology</label>
          <input
            type="checkbox"
            value='Technology'
            name='technology'
            className="switch"
          ></input>
          </div>
          
          <div className="checkboxdiv">
            <label htmlFor='coordination'>Hand/eye coordination</label>
            <input
              type="checkbox"
              value='Hand/eye coordination'
              name='coordination'
              className="switch"
            ></input>
            </div>
        
            <div className="checkboxdiv">
              <label htmlFor='reaction'>Reaction time</label>
              <input
                type="checkbox"
                value='Reaction time'
                name='reaction'
                className="switch"
              ></input>
              </div>
           
          </div>
    </div>
  )}
}

export class Step6 extends React.Component {
  render() {
  if (this.props.currentStep !== 6) { // Prop: The current step
    return null
  }
  // The markup for the Step 1 UI
  return(
    <div className="form-group">
        <label htmlFor='pick-games'  className="formlabel">
        What games do you play?</label>
        <input 
                name='pick-games'
                type="text"
                onChangeText={(text) => this.setState({text})}
                value={this.props.games}
                maxLength = {28}
                >
                 
                </input>
          {/* <select id="pick-games"
          //  value={this.state.value} onChange={this.handleChange}
           >
            <option value="CS:GO">CS:GO</option>
            <option value="Tekken">Tekken</option>
            <option value="FIFA">FIFA</option>
            <option value="Super Mario">Super Mario</option>
            <option value="Fortnite">Fortnite</option>
            <option value="Call of Duty">Call of Duty</option>
            <option value="The Sims">The Sims</option>
            <option value="Mortal Combat">Mortal Combat</option>
            <option value="Guitar Hero">Guitar Hero</option>
            <option value="World of Warcfarft">World of Warcraft</option>
            <option value="Skyrim">Skyrim</option>
            <option value="Starcraft">Starcraft</option>
            <option value="Warcraft">Warcraft</option>
            <option value="League of Legends">League of Legends</option>
            <option value="Dota">Dota</option>
            <option value="Valorant">Valorant</option>
            <option value="Left for dead">Left for dead</option>
            <option value="Overwatch">Overwatch</option>
            <option value="PUBG">PUBG</option>
            <option value="Diablo">Diablo</option>
            <option value="Minecraft">Minecraft</option>
          </select> */}
          
        <div className="selected-games">
          <p className="name-selected">The Sims</p>
          <p className="name-selected">Skyrim</p>
        </div>
    </div>
  )}
}


export class Step7 extends React.Component {
  render() {
  if (this.props.currentStep !== 7) { // Prop: The current step
    return null
  }
  // The markup for the Step 1 UI
  return(
    <div className="form-group">
        <label htmlFor='pick-games'  className="formlabel">
        What’s your favorite type of game to play?</label>
        <input 
                name='pick-types'
                type="text"
                onChangeText={(text) => this.setState({text})}
                value={this.props.types}
                maxLength = {28}
                >
                 
                </input>
          {/* <select id="pick-games"
          //  value={this.state.value} onChange={this.handleChange}
           >
            <option value="FPS">FPS</option>
            <option value="MMORPG">MMORPG</option>
            <option value="Sports">Sports</option>
            <option value="Racing">Racing</option>
            <option value="Tower defence">Tower defence</option>
            <option value="RTS">RTS</option>
            <option value="Simulation">Simulation</option>
            <option value="Role-playing">Role-playing</option>
            <option value="Adventure">Adventure</option>
            <option value="Survival">Survival</option>
            <option value="Fighting">Fighting</option>
            <option value="Battle royale">Battle royale</option>
            <option value="Rhythym">Rhythym</option>
            <option value="Platform">Platform</option>
          </select> */}
        <div className="selected-games">
          <p className="name-selected">MMORPG</p>
          <p className="name-selected">Simulation</p>
        </div>
    </div>
  )}
}


export class Step8 extends React.Component {
  render() {
  if (this.props.currentStep !== 8) { 
    return null
  }
  return(
    <div className="form-group">
        <h1>What type of content would you want to recive</h1>
        <div className="checkbox-container">
          <div className="checkboxdiv">
            <label htmlFor='articles'>Articles</label>
            <input
            type="checkbox"
            name='articles'
            className="switch"
            ></input>
            </div>
          
          <div className="checkboxdiv">
            <label htmlFor='discounts'>Discounts</label>
            <input
              type="checkbox"
              name='dicounts'
              className="switch"
              ></input>
              </div>
          
              <div className="checkboxdiv">
                <label htmlFor='events'>Online community events</label>
                <input
                  type="checkbox"
                  name='events'
                  className="switch"
                ></input>
                </div>
           
              <div className="checkboxdiv"> 
                <label htmlFor='competitions'>Competitions</label>
                <input
                  type="checkbox"
                  name='competitions'
                  className="switch"
                ></input>
                </div>   
          </div>

    </div>
  )}
}

export class Thankyou extends React.Component {
  render() {
    if (this.props.currentStep !== 9) { 
      return null
    }
    return(<div>
      <h1>NEED TO PUT ALEXS ANIMATION HERE</h1>
    </div>)
  }
}