import React, {Component} from 'react';
import Header from './header';
import Body from './body';
import Footer from './footer';

class Home extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                <Header/>
                <Body />
                <Footer/>
            </React.Fragment>
        )
    }
}
export default Home;