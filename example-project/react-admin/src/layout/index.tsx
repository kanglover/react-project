import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import LayoutSider from './sider';

const { Content, Sider } = Layout;

const Layouts: React.FC = (props: any) => {
    const { isCollapse } = props;
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        setCollapsed(isCollapse);
    }, [isCollapse]);

    return (
        <Layout>
            <section className="flex ant-section">
                <Layout>
                    <Sider collapsed={collapsed}>
                        <LayoutSider />
                    </Sider>
                    <Content>
                        <Outlet />
                        {/* <LayoutFooter /> */}
                    </Content>
                </Layout>
            </section>
        </Layout>
    )
}

export default Layouts;
