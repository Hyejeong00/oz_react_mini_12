import { useSelector } from "react-redux";

export default function TrailerTab() {
    const { movie } = useSelector((state) => state.detail);

    return (
        <div>
            <p>예고편 탭입니다.</p>
            {/* 예고편 컴포넌트 로딩 또는 API fetch 필요 시 여기에 구현 */}
        </div>
    );
}
