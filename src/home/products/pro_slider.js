import React,{Component} from 'react';
import './pro_slider.scss';

class PRO_SLIDER extends Component{
    constructor(props){
        super(props)
        this.state = {
            img: []
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
        setTimeout(function a(){
            slider.classList.remove("trans");
            slider.append(first_child);
            slider.style.left = -winWidth+ 'px';
        },500);
    }
    l_sliderPrev = () =>{
        let winWidth = window.innerWidth;
        // let i = this.state.i +1;
        let slider = document.querySelector("#l_slider ul");
        slider.classList.add("trans");
        let last_child = slider.lastChild;
        // slider.prepend(last_child);
        slider.style.left = 0 + 'px';
        setTimeout(function b(){
            slider.classList.remove("trans");
            slider.prepend(last_child);
            slider.style.left = -winWidth + 'px';
        },500);
    }
    do = () => {
      let id = this.props.id;
      fetch('http://localhost:3000/eb/pro_list/products/' + id ,{
        method:'GET',
        mode:'cors',
      })
      .then(res => res.json())
      .then(img => this.setState({
        img:img
      }))
    }
    componentWillMount(){
        this.do()
    }
    componentDidMount(){
        
    }
    render(){
        console.log(this.state.img)
        return(
            <React.Fragment>
                <div id="l_slider">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        {this.state.img.map(img => <li style={{backgroundImage: `url(${require('../../images/p_img/' + img.IMG_NAME)})`}}></li>)}
                    </ul>  
                    <button  className="l_btn_next" onClick={this.l_sliderNext}>next</button>
                    <button  className="l_btn_prev" onClick={this.l_sliderPrev}>prev</button>
                </div>
            </React.Fragment>
        )
    }


}

export default PRO_SLIDER;