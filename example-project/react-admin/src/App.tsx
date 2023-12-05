import { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
import { Router, useLazy } from './router';
import { fetchMenuList } from './store/slices/menu';
import { AppDispatch, RootState } from './store';

function App() {
    const user = useSelector((state: RootState) => state.user);
    const loading = useSelector((state: RootState) => state.menu.loading);
    const menuList = useSelector((state: RootState) => state.menu.menuList);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (user.token) {
            dispatch(fetchMenuList())
        }
    }, [dispatch, user]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        menuList.length && useLazy(menuList)
    }, [menuList, dispatch]);

    return (
        <Spin spinning={loading} className='root-loading' tip='Loading'>
            <HashRouter>
                <Router />
            </HashRouter>
        </Spin>
    );
}

export default App;
