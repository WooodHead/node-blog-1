import { Component } from 'inferno';
import { withRouter } from 'inferno-router';
import axios from '../utils/axios';
import { parseTime } from '../utils/time';

class CommentReply extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            comment: {}
        }
    }
    componentDidMount() {
        const { match } = this.props;
        if (match.params.id) {
            axios.get('/comments/' + match.params.id).then((res) => {
                this.setState({
                    comment: res.data,
                });
            });
        }
    }
    publish(e) {
        const { match, location, history } = this.props;
        const data = {};
        const elements = e.currentTarget.elements;
        for (let i = 0; i < elements.length; i++) {
            let ele = elements[i];
            ele.name && (data[ele.name] = ele.value);
        }
        Object.assign(data, { reply: match.params.id })
        axios.post('/comments/', data).then((res) => {
            alert("提交成功")
            history.push('/blog/admin/comments');
        })
        return e.preventDefault()
    }
    render() {
        const comment = this.state.comment;
        return (
            <div>
                <div className="article-publish">
                    <div className="manager-tip">
                        <i className="fa fa-edit fa-fw"></i>
                        控制台----回复评论
                    </div>
                    <form onSubmit={(e) => this.publish(e)} className="form-horizontal">
                        <div className="form-group">
                            <label className="control-label">昵称：</label>
                            <div>{comment.nickName}</div>
                        </div>
                        <div className="form-group">
                            <label className="control-label">email：</label>
                            <div>{comment.email}</div>
                        </div>
                        <div className="form-group">
                            <label className="control-label">创建时间：</label>
                            <div>{parseTime(comment.createdAt)}</div>
                        </div>
                        <div className="form-group">
                            <label className="control-label">文章标题：</label>
                            <div>{comment.article && comment.article.title}</div>
                        </div>
                        <div className="form-group">
                            <label className="control-label">内容：</label>
                            <div>{comment.content}</div>
                        </div>
                        <input type="hidden" name="reply" defaultValue={comment._id} />
                        <input type="hidden" name="article" defaultValue={comment.article && comment.article._id} />
                        <div className="form-group">
                            <label className="control-label">回复内容：</label>
                            <textarea
                                placeholder="请输入评论"
                                name="content"
                                style={{
                                    minHeight: "80px",
                                    maxHeight: "115px",
                                    width: "550px"
                                }}></textarea>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-3">操作：</label>
                            <button type="submit" className="btn is-primary" >发布</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default withRouter(CommentReply);