import React, {Component} from "react"
import $ from 'jquery';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import 'bootstrap/dist/css/bootstrap.min.css';
import './articlebody.scss'


class Article extends Component{
    constructor(props){
        super(props);
        // console.log(props);
        this.articleName = props.match.params.articlename;
        this.state = {
            articleTitle: "",
            articleContent: "",
            createdAt: ""
        };

    }

    componentWillMount(){
        // this.getArticleBody();
    }

    componentDidMount(){
        this.getArticleBody();
        // console.log(this.state)
    }

    getArticleBody(){
        let articleName = this.articleName;

        fetch('http://localhost:3000/article/'+articleName)
        .then(res => res.json())
        // .then(({data})=>{console.log(data[0])})
        .then( ({data})  => {
          this.setState({
              articleTitle: data[0].article_title,
              articleContent: data[0].article_content,
              createdAt: data[0].created_at
            })
        })
        .catch(err=> console.log(err));
    }
    


      

    render(){

        return(
            <React.Fragment>
                <div>
                    <AnchorLink offset='130' href='#top' className="topClass">
                        <i className="fas fa-angle-double-up fa-2x fasCenter"></i>
                    </AnchorLink>
                </div>
                <section className="articleBody">
                    <div className="container" >
                        <div className="postWrapperSpace" id="top"></div>
                        <div className="postWrapper p-4">
                            <h3>{this.state.articleTitle}</h3>
                            {/* <div className="">{this.state.articleContent}</div> */}
                            <div className="postContent" dangerouslySetInnerHTML={{ __html: this.state.articleContent}} />
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}


export default Article;