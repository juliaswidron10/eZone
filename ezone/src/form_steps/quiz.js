import React from 'react';
import { Step1 } from './steps.js';

export class Quiz extends React.Component {
    render() {
        return(
            <div>
                <Step1 />
                <Step2 />
                <div className='navigationbuttons'>
                    <h1 className='back'>back</h1>
                    <h2 className='next'>next</h2>
                </div>
            </div>
        )
    }
}

