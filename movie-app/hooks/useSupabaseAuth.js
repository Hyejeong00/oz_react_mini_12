import { supabase } from '../supabase/client';

// 사용자 정보 조회
export default async function getUserInfo () {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error && error.message !== "Auth session missing!") {
        console.error("사용자 정보 조회 실패:", error.message);
    }
    return user;
};

export const useSupabaseAuth = () => {
    // 회원가입
    const signUp = async ({ email, password, options }) => {
        const full_name = options?.data?.full_name?.trim() || "이름없는 유저";

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
            data: {
                full_name,
            },
            },
        });

        if (error) {
            console.error("회원가입 실패: " + error);
            return { success: false, error: error.message };
        }
        return { success: true, data };
    };


    // 로그인
    const login = async ({ email, password }) => {
        try{
            const { data, error } = await supabase.auth.signInWithPassword({ 
                email: email,
                password: password
            });

            if(error){
                console.error("로그인 에러:", error)
            }
            console.log("로그인 성공:", data)
            return { success: true, data};
        }catch(error){
            console.error("에러:", error)
        }
    };

    // 로그아웃
    const logout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error("에러:", error)
        }
    };

    return { signUp, login, logout };
};
