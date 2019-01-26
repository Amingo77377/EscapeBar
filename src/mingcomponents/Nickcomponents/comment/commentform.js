import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';




// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';


class Commentform extends Component {
  constructor(props){
    super(props);
  

    this.state = {
      // uid:this.props.uid,
      gid:this.props.gid,
      comment:"",
      feature:"",
      rating:1

  };
  console.log(this.state)
  }
  
commentChange = (evt) => {
    let comment = evt.target.value
    if(comment.length<=200){
      console.log(comment)
      this.setState({
          comment:comment,
      })
    }
}

checkboxHandler=(evt)=>{
   let feature = evt.target.value
   
  console.log(evt.target.value)
  this.setState({
    feature:feature
    
})
}

// componentDidMount

starHandler=(evt)=>{
  let rating = evt.target.value
 
 console.log(evt.target.value)
 this.setState({
  rating:rating
   
})
}

onStarClick(nextValue, prevValue, name) {
  this.setState({rating: nextValue});
}


add = (evt) => {
  
    this.props.add(this.state);
    evt.preventDefault();
}



  



  render() {
    console.log("props.ud:"+this.state.uid)
      const { rating } = this.state;

    return (
        <React.Fragment>
          <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#exampleModalCenter">
            我要評論
          </button>


    <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            
       

            <StarRatingComponent 
            
          name="rate3" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
          renderStarIcon={() =><span class="fa fa-star"></span>}
        />
             
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
            </div>

          {/* 表單 */}
        





          <div className="modal-body">
            <div className="text-left m-3">
              <p>請輸入評價:</p>
              <textarea value={this.state.comment}   onChange={this.commentChange} className="form-control my-3" placeholder="最多輸入200字"></textarea>
            </div>


                    
                
















            <div className="d-flex justify-start">
            <div className=" container  ">
              <div className="text-left">
                <p>選擇遊戲風格:</p>
              </div>
            <div className="form-check form-check-inline mx-3">
              <input className="form-check-input" type="checkbox" value="1"   name="1"onChange={this.checkboxHandler}    ></input>
              <label className="form-check-label" for="feature_1">新手入門</label>
            </div>
           
            <div className="form-check form-check-inline mx-3">
              <input className="form-check-input" type="checkbox"  name="feature" value="2"  onChange={this.checkboxHandler}   ></input>
              <label className="form-check-label" for="feature_2">中度玩家</label>
            </div>

            <div className="form-check form-check-inline mx-3">
              <input className="form-check-input" type="checkbox"   onChange={this.checkboxHandler} value="3" ></input>
              <label className="form-check-label" for="feature_3">重度解謎</label>
            </div>

            <div className="form-check form-check-inline mx-3">
              <input className="form-check-input" type="checkbox" id="feature_4"  onChange={this.checkboxHandler} value="4"></input>
              <label className="form-check-label" for="feature_4">偵探推理</label>
            </div>

            <div className="form-check form-check-inline mx-3">
              <input className="form-check-input" type="checkbox" id="feature_5" onChange={this.checkboxHandler} value="5"></input>
              <label className="form-check-label" for="feature_5">機關重重</label>
            </div>

            <div className="form-check form-check-inline mx-3">
              <input className="form-check-input" type="checkbox" id="feature_6"  onChange={this.checkboxHandler} value="6"></input>
              <label className="form-check-label" for="feature_6">劇情厲害</label>
            </div>

            <div className="form-check form-check-inline mx-3">
              <input className="form-check-input" type="checkbox" id="feature_7" onChange={this.checkboxHandler} value="7"></input>
              <label className="form-check-label" for="feature_7">場景逼真</label>
            </div>

            <div className="form-check form-check-inline mx-3">
              <input className="form-check-input" type="checkbox" id="feature_8" onChange={this.checkboxHandler} value="8"></input>
              <label className="form-check-label" for="feature_8">輕鬆歡樂</label>
            </div>

            <div className="form-check form-check-inline mx-3">
              <input className="form-check-input" type="checkbox" id="feature_9" onChange={this.checkboxHandler} value="9"></input>
              <label className="form-check-label" for="feature_9">恐怖驚悚</label>
            </div>

            <div className="form-check form-check-inline mx-3">
              <input className="form-check-input" type="checkbox" id="feature_10"  onChange={this.checkboxHandler} value="10"></input>
              <label className="form-check-label" for="feature_10">緊張刺激</label>
            </div>

            <div className="form-check form-check-inline mx-3">
              <input className="form-check-input" type="checkbox" id="feature_11"  onChange={this.checkboxHandler} value="11"></input>
              <label className="form-check-label" for="feature_11">勾心鬥角</label>
            </div>

            <div className="form-check form-check-inline mx-3">
              <input className="form-check-input" type="checkbox" id="feature_12"  onChange={this.checkboxHandler} value="12"></input>
              <label className="form-check-label" for="feature_12">團隊合作</label>
            </div>
               <div className="text-left px-5">

                     <div className=" form-check form-check-inline mx-3 ">
              {/* <input className="form-check-input mx-0" type="checkbox" id="feature_13"  onChange={this.checkboxHandler} value="13"></input>
              <label className="form-check-label mx-1" for="feature_13">親子同遊</label> */}
            </div>
               </div>
        

            
            </div>
          </div>
          </div>


          <div className="modal-footer">
           <button type="button"  data-dismiss="modal" onClick={this.add} className="btn btn-warning">提交評論</button>
          
          <button type="button" className="btn btn-secondary m-5 " data-dismiss="modal">關閉</button>
          </div>
          </div>
        </div>
      </div>
        </React.Fragment>
    );
  }
}

export default Commentform;
