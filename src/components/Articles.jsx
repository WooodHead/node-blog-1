import axios from '../utils/axios';
import queryString from 'query-string';
import { Component } from 'inferno';
import { Link } from 'inferno-router';
import { parseTime, timeAgo } from '../utils/time';

export default class Articles extends Component {

    static fetch(match, location, options) {
        const q = queryString.parse(location.search);
        const query = { fields: '-content,category.name', cid: '', limit: 10, page: 1, ...q };
        return axios.get('/articles?' + queryString.stringify(query)).then((_)=>({articles: _.data}));
    }
    
    render() {
        let data = this.props.data;
        let articles = data ? data.articles : [];
        return (
            <ul className="app-article-list">
                {
                    articles.map((item) => (
                        <li className="article-item" key={item._id}>
                            <div className="article-header">
                                <div className="article-brief">
                                    <div className="article-meta">
                                        <strong>TIME</strong>
                                        <em>·</em> {parseTime(item.createdAt)}
                                    </div>
                                    <Link className="article-title" to={`/blog/articles/${item._id}`}>{item.title}</Link>
                                    <div className="article-meta">
                                        <a href="javascript:;">评论：{item.commentCount}</a> <em>·</em>
                                        <a href="javascript:;">阅读：{item.viewsCount}</a>
                                        <em>·</em>
                                        <span>分类：{item.category.name}</span>
                                    </div>
                                </div>
                                <div className="article-thumb">
                                    <a style={{ backgroundImage: `url(${item.screenshot})` }}></a>
                                </div>
                            </div>
                            <p className="article-summary">{item.summary}</p>
                        </li>
                    ))
                }
            </ul>
        )
    }
}
