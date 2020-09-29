import React, { Component } from 'react';
import Index from '../Signup/index.js';
import './css/home.css';

class Home extends Component {

    constructor(props){
        super(props)
    }
    
    render() {

        const { userSignupRequest} = this.props;

        return (
            <div>
               
                <div className="row mt-53">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <h2 className="text-danger">My Form</h2>
                        <Index />
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        );
    }
}

export default Home;