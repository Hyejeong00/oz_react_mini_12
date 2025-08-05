import { useSelector } from "react-redux";

export default function RecommendTab() {
    const { movie } = useSelector((state) => state.detail);

    return (
        <div>
            <p>추천 영화 탭입니다.</p>
        </div>
    );
}
