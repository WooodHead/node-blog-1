import * as React from 'react';
import config from '../config';
import { parseTime, timeAgo } from '../utils/time';
import axios from '../utils/axios';
import CommentForm from './CommentForm';

const replyFn = (item) => (
    <div className="comments-list__quote">
        <span className="comments-list__info-author"><i className="fa fa-fw fa-user"></i>{item.nickName}
        </span>
        <span className="comments-list__info-time">{timeAgo(item.createdAt)}前</span>
        <div className="comments-list__item-content">
            {item.content}
        </div>
    </div>
)

const articleComments = (items, self) => items.map((item) => (
    <li className="comments-list__item" key={item._id}>
        <div className="comments-list__info">
            <span className="comments-list__info-author"><i className="fa fa-fw fa-user"></i>{item.nickName} 说：
      </span>
            <div style={{ float: 'right' }}>
                <span className="comments-list__info-time">{parseTime(item.createdAt)} | </span>
                <a href="javascript:;" comment-id={item._id} onClick={() => self.setState({
                    showCommentForm: item._id
                })}>回复</a>
            </div>
        </div>
        {item.reply && replyFn(item.reply)}
        <div className="comments-list__item-content">{item.content}</div>
        <div className="comments-list__replay-box">
            {
                self.state.showCommentForm === item._id
                && <CommentForm
                    url="/comments"
                    articleId={item.article}
                    replyId={item._id}
                />
            }
        </div>
    </li>
))
export default class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: {
                category: {}
            },
            comments: [],
            showCommentForm: ""
        }
    }
    componentDidMount() {
        const { match } = this.props;
        axios.get('/articles/' + match.params.id).then((res) => {
            this.setState({
                article: res.data,
            });
        });
        axios.get('/comments?articleId=' + match.params.id).then((res) => {
            this.setState({
                comments: res.data,
            });
        });
    }
    render() {
        const { article } = this.state;
        return (
            <div className="article view">
                <article className="inner">
                    <div className="header">
                        <h2 className="title">
                            <a className="title-link" href={`/blog/articles/${article._id}`}>{article.title}</a>
                        </h2>
                        <div className="meta">
                            <span>发表于{parseTime(article.createdAt)}</span>
                            <span v-if="article.category">&nbsp; | &nbsp;
        <span>分类于
          <a href={`/blog/articles?cid=${article.category._id}`}>{article.category.name}</a>
                                </span>
                            </span>
                            <span>&nbsp; | &nbsp;{article.commentCount}条评论</span>
                            <span>&nbsp; | &nbsp;阅读次数&nbsp;{article.viewsCount}</span>
                        </div>
                    </div>
                    <div className="markdown-body" dangerouslySetInnerHTML={{
                        __html: article.content
                    }}></div>
                    <ul className="post-copyright">
                        <li className="post-copyright-author">
                            <strong>本文作者：</strong> IIssNan
      </li>
                        <li className="post-copyright-link">
                            <strong>本文链接：</strong>
                            <a href="http://notes.iissnan.com/2016/next-documentations-reload/" title="NexT Documentations Reload">http://notes.iissnan.com/2016/next-documentations-reload/</a>
                        </li>
                        <li className="post-copyright-license">
                            <strong>版权声明： </strong> 本博客所有文章除特别声明外，均采用 <a href="http://creativecommons.org/licenses/by-nc-sa/3.0/cn/" rel="external nofollow" target="_blank" se_prerender_url="complete">CC BY-NC-SA 3.0 CN</a> 许可协议。转载请注明出处！
      </li>
                    </ul>
                    <div className="comments">
                        <h3 className="tip"><i className="fa fa-flag fa-fw"></i>既然来了，就说点什么吧~</h3>
                        <CommentForm url="/comments" articleId={article._id} />
                        <ul className="comments-list">
                            {
                                articleComments(this.state.comments, this)
                            }
                        </ul>
                    </div>
                </article>
            </div>
        )
    }
}