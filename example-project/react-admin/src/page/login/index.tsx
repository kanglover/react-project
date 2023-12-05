import LoginForm from './components/LoginFrom';
import './index.less';

export default function Login() {
    return (
        <div className="login-container">
            <div className="login-inner">
                <div className="login-form">
                    <div className="login-form-content">
                        <p className="login-form-title">登录</p>
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
