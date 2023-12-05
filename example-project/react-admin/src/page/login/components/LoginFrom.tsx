import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { logIn } from '@/store/slices/user';
import { MenuEnum } from '@/utils/enum';
import { LoginParams } from '@/api/login';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const onFinish = async (values: LoginParams) => {
        try {
            setLoading(true)
            await dispatch(logIn(values));
            navigate(MenuEnum.BASE_HOME)
        } catch (error: any) {
            console.log(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Form
            name='basic'
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete='off'
            size='large'
            className='login-forms'
        >
            <Form.Item
                name='username'
                rules={[{ required: true, message: '请输入用户名' }]}
            >
                <Input placeholder='用户名：admin' prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item
                name='password'
                rules={[{ required: true, message: '请输入密码' }]}
            >
                <Input.Password
                    autoComplete='new-password'
                    placeholder='密码：123456'
                    prefix={<LockOutlined />}
                />
            </Form.Item>

            <Form.Item
                className='login-remeber'
                name='remember'
                valuePropName='checked'
                wrapperCol={{ offset: 0, span: 16 }}
            >
                <Checkbox>记住我</Checkbox>
            </Form.Item>

            <Form.Item>
                <Button
                    type='primary'
                    htmlType='submit'
                    icon={<UserOutlined />}
                    loading={loading}
                    className='login-btn'
                >
                    登陆
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
