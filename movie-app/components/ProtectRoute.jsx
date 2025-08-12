import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute({ children }) {
    const user = useSelector((state) => state.user.userInfo); // 로그인 유저 정보
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            alert('로그인이 필요합니다.');
            navigate('/login');
        }
    }, [user]);

    return user ? children : null;
}
