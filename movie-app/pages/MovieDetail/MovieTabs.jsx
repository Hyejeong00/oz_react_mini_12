import { useState } from "react";
import TrailerTab from "./TrailerTap";
import RecommendTab from "./RecommendTab";
import DetailTab from "./DetailTab";
import { useSelector } from "react-redux";

export default function MovieTabs() {
    const [activeTab, setActiveTab] = useState("trailer");
    const { movie } = useSelector((state) => state.detail);

    return (
        <div className="mt-8">
            <div className="flex border-b text-black dark:text-white border-gray-500 text-sm sm:text-base">
                <button
                    onClick={() => setActiveTab("trailer")}
                    className={`px-4 py-2 ${
                        activeTab === "trailer" ? "border-b-2 border-focus" : ""
                    }`}
                >
                    예고편
                </button>
                <button
                    onClick={() => setActiveTab("recommend")}
                    className={`px-4 py-2 ${
                        activeTab === "recommend" ? "border-b-2 border-focus" : ""
                    }`}
                >
                    추천
                </button>
                <button
                    id="detail-tab"
                    onClick={() => setActiveTab("detail")}
                    className={`px-4 py-2 ${
                        activeTab === "detail" ? "border-b-2 border-focus" : ""
                    }`}
                >
                    상세정보
                </button>
            </div>

            <div className="p-4 text-sm sm:text-base">
                {activeTab === "trailer" && <TrailerTab movie={movie} />}
                {activeTab === "recommend" && <RecommendTab movie={movie} />}
                {activeTab === "detail" && <DetailTab movie={movie} />}
            </div>
        </div>
    );
}
