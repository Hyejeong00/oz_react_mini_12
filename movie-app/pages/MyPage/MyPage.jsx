import { FiUser } from "react-icons/fi";
import { useSelector } from 'react-redux';
import FavoriteTab from "./FavoriteTab";
import RecentTab from "./RecentTab";
import PurchasedTab from "./PurchasedTab";

export default function MyPage() {
    const user = useSelector((state) => state.user.userInfo);

    const nickname = user?.name || user?.user_metadata?.full_name || '닉네임 없음';

    return (
        <div className="flex flex-col p-6 text-gray-900 dark:text-gray-100">
            <div className="flex-1">
                <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg shadow-md bg-white dark:bg-[#1A1A1A] mb-5">
                    <div className="flex items-center space-x-4 mb-6">
                        {user?.avatar_url ? (
                            <img
                                src={user.avatar_url}
                                alt="프로필 이미지"
                                className="w-24 h-24 rounded-full object-cover border border-gray-300 dark:border-gray-600"
                            />
                        ) : (
                            <FiUser className="w-24 h-24 text-gray-500 dark:text-gray-300" />
                        )}
                        <div>
                            <p>{`${nickname} 님`}</p>
                            <p>{`(${user?.email})`}</p>
                        </div>
                    </div>
                </div>

            </div>
            <div>

            {/* 콘텐츠 표시 영역 */}
            <div className="p-6 border border-gray-200 dark:border-[#0f0f0f] rounded-lg shadow-md bg-white dark:bg-[#0f0f0f]">
                    <FavoriteTab />
                    <RecentTab />
                    <PurchasedTab/>
            </div>
            </div>
        </div>
    );
}
