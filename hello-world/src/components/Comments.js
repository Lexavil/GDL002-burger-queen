class Comments extends Component {
    constructor(props) {
      super();
      this.state = {
        comment: ""
      }
    }
    getComment(event) {
      this.setState({
        comment: event.target.value
      });
    }
    addComment() {
      if (this.state.comment != "") {
        this.props.addComment(this.state.comment);
      }
      this.setState({
        comment: ""
      })
    }
    render() {
      let commentsNodes = this.props.comments.map((comment, i) => <div key={i}><p>{comment}</p></div>);
      return (
        <div className="comments">
                  <h1>Comments</h1>
                  <input type="text" onChange={this.getComment.bind(this)} value={this.state.comment}/>
                  <span><i className="material-icons" onClick={this.addComment.bind(this)}>message</i></span>
                  {commentsNodes}
              </div>
      )
    }
  };
  export default Comments