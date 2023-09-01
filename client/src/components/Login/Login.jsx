import Axios from 'axios';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {domain, header2} from '../../env';
import styles from './Login.module.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const loginButton = (e) => {
        e.preventDefault();
        Axios({
            url: `${domain}/api/login/`,
            method: 'post',
            headers: header2,
            data: {
                username: username,
                password: password,
            },
        })
            .then((response) => {
                window.localStorage.setItem('token', response.data['token']);
                window.location.href = '/';
            })
            .catch((error) => {
                console.log(error.response)
                if (error.response.status === 400)
                    setErrors({[Object.keys(error.response.data)[0]]: '用户名或密码是无效的 请重试！！'});
                else
                    setErrors({'error': 'Internal Server Error Try Again!!!'});
            });
    };

    return (
        <div className="container">
            <div className="row m-5 no-gutters shadow-lg">
                <div className="col-md-6 bg-white p-5">
                    <h3 className="pb-3">登录</h3>
                    <div className="form-style">
                        <form>
                            <div className="form-group pb-3">
                                <input
                                    type="text"
                                    placeholder="用户名"
                                    className="form-control"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="form-group pb-3">
                                <input
                                    type="密码"
                                    placeholder="密码"
                                    className="form-control"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="pb-2">
                                <button
                                    type="submit"
                                    className="btn btn-dark w-100 font-weight-bold mt-2"
                                    onClick={(e) => loginButton(e)}
                                >
                                    提交
                                </button>
                            </div>
                        </form>
                        <div className="mt-4 text-center">
                            没注册过？{' '}
                            <Link to="/register" style={{textDecoration: 'none'}}>
                                立即注册
                            </Link>
                        </div>
                        <div className="mt-4">
                            {Object.keys(errors).map((keyName, i) => (
                                <div key={i} className={styles.errorMsg}>
                                    <i className="fa fa-times-circle"/>
                                    <span style={{marginLeft: '5px'}}>{errors[keyName]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div
                    className="col-md-6 d-none d-md-block"
                    style={{height: '500px', paddingLeft: 0, paddingRight: 0}}
                >
                    <img
                        src="https://images.unsplash.com/photo-1566888596782-c7f41cc184c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
                        className="img-fluid"
                        style={{width: '100%', height: '100%', objectFit: 'cover'}}
                        alt="login"
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
