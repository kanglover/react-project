import React, { Suspense } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const lazyLoad = (
    Comp: React.LazyExoticComponent<any>
): JSX.Element => (
    <Suspense
        fallback={
            <Spin
                indicator={antIcon}
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%'
                }}
            />
        }
    >
        <Comp />
    </Suspense>
)

export default lazyLoad;
