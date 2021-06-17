import React, { Component } from "react";
import Header from "./Header";
//import Content from "./Content";
import Footer from "./Footer";
import SCP from "./SCP.js";

class Main extends Component
{
    render()
    {
        return(
        <div>
        <Header />
        <SCP scp={this.state.scp} />
        <Footer />
        </div>
        
        );

    }
    state = { scp: []}

        componentDidMount()
        {
            fetch('https://certifiedgoodboys-9a9c.restdb.io/rest/scp-data',
            {
                method: 'GET',
                headers: {
                    "cache-control": "no-cache",
                    "x-apikey": "60c2d7e2e2c96c46a24633fd",
                    "content-type": "application/json"
                }
            })
            .then(result => result.json())
            .then((data) => {this.setState({scp: data})})
            .catch(console.log);
        }
}

export default Main;