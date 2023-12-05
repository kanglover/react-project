import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { MenuEnum } from '@/utils/enum';

export default function Error404() {
    const navigate = useNavigate();
    const goHome = () => {
        navigate(MenuEnum.BASE_HOME);
    };

    return (
        <div className="error-card">
            <Button type="primary" onClick={goHome}>
                回到首页
            </Button>
        </div>
    )
}