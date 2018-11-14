import React,{Component} from 'react';
import './pro_slider.scss';

class PRO_SLIDER extends Component{
    constructor(props){
        super(props)
        this.state = {
            i: 0,

        }

    }
    l_sliderNext = () =>{
        let winWidth = window.innerWidth;
        // let i = this.state.i -1;
        let slider = document.querySelector("#l_slider ul");
        slider.classList.add("trans");
        let first_child = slider.firstChild;
        // slider.append(first_child);
        slider.style.left = -winWidth*2+ 'px';
            // slider.style.left = winWidth*i + 'px';
        // this.setState({
        //     i: i
        // })
        setTimeout(function a(){
            slider.classList.remove("trans");
            slider.append(first_child);
            slider.style.left = -winWidth+ 'px';
        },500);
        // console.log(i);
        
    }
    l_sliderPrev = () =>{
        let winWidth = window.innerWidth;
        // let i = this.state.i +1;
        let slider = document.querySelector("#l_slider ul");
        slider.classList.add("trans");
        let last_child = slider.lastChild;
        // slider.prepend(last_child);
        slider.style.left = 0 + 'px';
        // this.setState({
        //     i: i
        // })  
        // console.log(i);
        setTimeout(function b(){
            slider.classList.remove("trans");
            slider.prepend(last_child);
            slider.style.left = -winWidth + 'px';
        },500);
    }

    componentDidUpdate(){
        
    }

    render(){
        return(
            <React.Fragment>
                <div id="l_slider">
                    <ul>
                        <li>SLIDE 1</li>
                        <li>SLIDE 2</li>
                        <li>SLIDE 3</li>
                        <li>SLIDE 4</li>
                    </ul>  
                    <button  className="l_btn_next" onClick={this.l_sliderNext}>next</button>
                    <button  className="l_btn_prev" onClick={this.l_sliderPrev}>prev</button>
                </div>
            </React.Fragment>
        )
    }


}

export default PRO_SLIDER;