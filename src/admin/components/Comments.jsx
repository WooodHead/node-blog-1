import { Component } from 'inferno';
import { Link, withRouter } from 'inferno-router';
import axios from '../utils/axios';
import queryString from 'query-string';
import { parseTime } from '../utils/time';

export default class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }
    generateCommentList(comments = []) {
        const self = this;
        return (comments.map((item) => (
            <tr key={item._id}>
                <td>{item.nickName}</td>
                <td>{item.email}</td>
                <td>{parseTime(item.createdAt)}</td>
                <td>{item.content}</td>
                <td>{item.article.title}</td>
                <td>{item.reply && item.reply.nickName}</td>
                <td>
                    <Link
                        to={`/blog/admin/comments/reply/${item._id}`}
                        title="回复"
                        className="btn btn-primary btn-xs">
                        <i className="fa fa-edit"></i>
                    </Link>
                    <button
                        className="doc_del btn btn-default btn-xs"
                        data-id={item._id}
                        onClick={(e) => self.deleteComment(e)}
                        title="删除">
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        )))
    }
    deleteComment(e) {
        const { location, history } = this.props;
        const self = this;
        const id = e.currentTarget.getAttribute('data-id');
        if (confirm("确认要删除？")) {
            axios.delete('/comments/' + id).then(() => {
                alert("删除评论成功")
                this.fetchData(location)
            })
        }
    }
    fetchData(location) {
        const q = queryString.parse(location.search);
        const query = {
            limit: 10,
            page: 1,
            ...q
        };
        axios
            .get('/comments?' + queryString.stringify(query))
            .then((res) => {
                this.setState({ comments: res.data });
            });
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.location.search != this.props.location.search) {
            this.fetchData(nextProps.location);
        }
    }
    componentDidMount() {
        this.fetchData(this.props.location)
    }
    render() {
        return (
            <div>
                <div className="panel">
                    <strong>评论列表</strong>
                </div>
                <div className="table-wrapper">
                    <table className="table" cellSpacing="0" cellPadding="0" border="0">
                        <thead className="table-header">
                            <tr>
                                <th>昵称</th>
                                <th>email</th>
                                <th>创建时间</th>
                                <th>内容</th>
                                <th>回复文章</th>
                                <th>回复作者</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>{this.generateCommentList(this.state.comments)}</tbody>
                    </table>
                </div>
            </div>
        )
    }
}