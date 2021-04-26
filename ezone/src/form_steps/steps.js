import React from 'react';

export class Step1 extends React.Component {
    render() {
    if (this.props.currentStep !== 1) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return(
      <div className="form-group">
            <label htmlFor='hoursplaying' >How many hours do you spend playing in a day?</label>
            <div className='minmaxrange'><p>0</p><p>18+</p></div>
            <input 
            className='form'
            id='hoursplaying'
            name='hoursplaying'
            type='range'
            min='0' max='18'
            step='1'
            value={this.props.hours} // Prop: The email input data
        onChange={this.props.handleChange} 
            />
            <h1 className="currentaState">10hrs/day</h1>
            <div>
                <label htmlFor='streaming'>Do you stream your gameplay?</label>
                <input 
                className='steamradio'
                id="streaming"
                name='streaming'
                type='radio'
                value={this.props.stream} // Prop: The email input data
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
      </div>
    )}
  }


export class Step3 extends React.Component {
    render() {
    if (this.props.currentStep !== 3) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return(
      <div className="form-group">
          <h1>What areas would you like to improve?</h1>
          <div className='icon-areas'></div>
          <h1>Mental</h1>
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
      </div>
    )}
  }

export class Step4 extends React.Component {
    render() {
    if (this.props.currentStep !== 4) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return(
      <div className="form-group">
          <h1>What areas would you like to improve?</h1>
          <div className='icon-areas'></div>
          <h1>Skills</h1>
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
             <label htmlFor='leadership'>Leadership</label>
            <input
            type="checkbox"
            value='Leadership'
            name='leadership'
            // checked={this.state.isGoing}
            // onChange={this.handleInputChange}
            ></input>
             <label htmlFor='multitasking'>Multi-tasking</label>
            <input
            type="checkbox"
            value='Multi-tasking'
            name='multitasking'
            // checked={this.state.isGoing}
            // onChange={this.handleInputChange}
            ></input>
             <label htmlFor='communication'>Communication</label>
            <input
            type="checkbox"
            value='Communication'
            name='communication'
            // checked={this.state.isGoing}
            // onChange={this.handleInputChange}
            ></input>
      </div>
    )}
  }

export class Step5 extends React.Component {
  render() {
  if (this.props.currentStep !== 5) { // Prop: The current step
    return null
  }
  // The markup for the Step 1 UI
  return(
    <div className="form-group">
        <h1>What areas would you like to improve?</h1>
        <div className='icon-areas'></div>
        <h1>Gaming</h1>
          <label htmlFor='technology'>Technology</label>
          <input
          type="checkbox"
          value='Technology'
          name='technology'
          // checked={this.state.isGoing}
          // onChange={this.handleInputChange}
          ></input>
          <label htmlFor='coordination'>Hand/eye coordination</label>
          <input
          type="checkbox"
          value='Hand/eye coordination'
          name='coordination'
          // checked={this.state.isGoing}
          // onChange={this.handleInputChange}
          ></input>
           <label htmlFor='reaction'>Reaction time</label>
          <input
          type="checkbox"
          value='Reaction time'
          name='reaction'
          // checked={this.state.isGoing}
          // onChange={this.handleInputChange}
          ></input>
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
        <label htmlFor='pick-games'>
        What games do you play?</label>
          <select id="pick-games"
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
          </select>
          
        <div className="selected-games">
          <p className="name-selected">name of the game</p>
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
        <label htmlFor='pick-games'>
        What’s your favorite type of game to play?</label>
          <select id="pick-games"
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
          </select>
        <div className="selected-types">
          <p className="type-selected">name of the game</p>
        </div>
    </div>
  )}
}


export class Step8 extends React.Component {
  render() {
  if (this.props.currentStep !== 8) { // Prop: The current step
    return null
  }
  // The markup for the Step 1 UI
  return(
    <div className="form-group">
        <h1>What type of contend would you want to recive</h1>
      <form>
          <label htmlFor='articles'>Articles</label>
          <input
          type="checkbox"
          value='Articles'
          name='articles'
          // checked={this.state.isGoing}
          // onChange={this.handleInputChange}
          ></input>
          <label htmlFor='discounts'>Discounts</label>
          <input
          type="checkbox"
          value='Discounts'
          name='dicounts'
          // checked={this.state.isGoing}
          // onChange={this.handleInputChange}
          ></input>
           <label htmlFor='events'>Online community events</label>
          <input
          type="checkbox"
          value='events'
          name='events'
          // checked={this.state.isGoing}
          // onChange={this.handleInputChange}
          ></input>
            <label htmlFor='competitions'>Competitions</label>
          <input
          type="checkbox"
          value='Competitions'
          name='competitions'
          // checked={this.state.isGoing}
          // onChange={this.handleInputChange}
          ></input>
      </form>
    </div>
  )}
}
