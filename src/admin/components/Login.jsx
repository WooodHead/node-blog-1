import { Component } from 'inferno';
import { withRouter } from 'inferno-router';
import axios from '../utils/axios';
const tokenKey = "node-blog-bs32g1038";
class UserLogin extends Component {
    constructor(props) {
        super(props);
    }
    login(e) {
        const { history } = this.props;
        const data = {};
        const elements = e.currentTarget.elements;
        for (let i = 0; i < elements.length; i++) {
            let ele = elements[i];
            ele.name !== '' ? data[ele.name] = ele.value : "";
        }
        axios.post('/login', data).then((res) => {
            alert("登陆成功！")
            sessionStorage.setItem(tokenKey, res.data.token);
            history.push('/blog/admin/articles');
        })
        return e.preventDefault()
    }
    render() {
        return (
            <form onSubmit={(e) => this.login(e)} className="form-horizontal" >
                <div className="form-group">
                    <label className="control-label">账号：</label>
                    <div>
                        <input
                            placeholder="请输入账户"
                            type="text"
                            className="form-control input-sm"
                            name="account" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label">密码：</label>
                    <div>
                        <input
                            placeholder="请填写密码"
                            type="password"
                            className="form-control input-sm"
                            name="password" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-3">操作：</label>
                    <button type="sumbit" className="btn is-primary">登录</button>
                </div>
            </form >
        );
    }
};
export default withRouter(UserLogin);