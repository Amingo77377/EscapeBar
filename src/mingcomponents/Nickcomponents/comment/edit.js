import React, {Component} from 'react';
import $ from 'jquery';
import { runInThisContext } from 'vm';



class Edit extends Component{
    
  constructor(props){

    super(props)
    this.state = {
  
      
      
      
      // data:this.props.data
      //  id:this.props.id,
       comment:"",
       uid:this.props.uid,
       gid:this.props.gid,
       name:this.props.name
       
    }
    
    console.log(this.state.name)
    
  }


update = (evt) => {
  
  console.log(this.state)
    this.props.update(this.state);
    // evt.preventDefault();
}

buttonClick = (evt) => {
 var m = $('#edit')
 var loginName=this.state.name
//  console.log(this.state.data.nickName)
 var data = $('.all h5:contains("' + loginName  + '")').parents('.comment').children('p').text();
 this.setState({
  comment:data
 }, () =>  m.modal('show'))
//update tablename set comment=? where id=?

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

  render(){
   
    return(
      <React.Fragment>
          
                <button className="text-left btn btn-warning" data-toggle="modal" onClick={this.buttonClick}>
                修改我的評論
                </button>




 <div className="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">修改我的評論</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <textarea  className="form-control my-3"  onChange={this.commentChange}  value={this.state.comment}></textarea>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-warning" onClick={this.update} >儲存修改</button>
        <button type="button" className="btn btn-secondary"  data-dismiss="modal">關閉</button>

      </div>
    </div>
  </div>
</div> 


      </React.Fragment>
    )
  }



}

export default Edit;
