import React, { useState } from 'react';
import InputField from '../components/InputField';
import { validateEmail, validatePassword } from '../utils/validation';
import HomeButton from '../components/HomeButton';

import { useDispatch } from 'react-redux';
import { setUser } from '../src/RTK/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import getUserInfo, { useSupabaseAuth } from '../hooks/useSupabaseAuth';
import { supabase } from '../supabase/client';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { login } = useSupabaseAuth();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();

    const newErrors = {
      email: validateEmail(form.email),
      password: validatePassword(form.password),
    };
    setErrors(newErrors);

    for (const [key, value] of Object.entries(newErrors)) {
      if (value) {
        document.getElementsByName(key)[0]?.focus();
        return;
      }
    }

    try {
      const { success } = await login({
        email: form.email,
        password: form.password,
      });

      if (success) {
        const user = await getUserInfo();
        dispatch(setUser(user));
        navigate('/');
      } else {
        setErrors({ ...errors, loginError: "이메일이나 비밀번호가 맞지 않습니다." });
      }
    } catch (err) {
      console.error("로그인 오류:", err);
    }
  };

  const handleOAuthLogin = async (provider) => {
    try {
      await supabase.auth.signInWithOAuth({ provider });
    } catch (err) {
      console.error('OAuth 로그인 오류:', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4">
      <HomeButton />
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-600"
      >
        <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-900 dark:text-white ">로그인</h2>

        {errors.loginError && (
          <p className="text-red-500 text-sm mb-4 text-center">{errors.loginError}</p>
        )}

        <InputField
          label="이메일"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />
        <InputField
          label="비밀번호"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />

        <button
          type="submit"
          className="w-full mt-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg rounded-md shadow-md transition"
        >
          로그인
        </button>

        <div className="my-6 text-center text-gray-500 dark:text-gray-400">또는</div>

        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={() => handleOAuthLogin('google')}
            className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-white dark:bg-gray-100 text-black font-semibold rounded-md shadow hover:bg-gray-100 transition"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Google로 로그인
          </button>

          <button
            type="button"
            onClick={() => handleOAuthLogin('kakao')}
            className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-yellow-300 text-black font-semibold rounded-md shadow hover:bg-yellow-400 transition"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/kakao.svg"
              alt="Kakao"
              className="w-5 h-5"
            />
            Kakao로 로그인
          </button>
        </div>

        <p className="text-center text-sm mt-6 text-gray-600 dark:text-gray-400">
          계정이 없으신가요?{' '}
          <Link to="/signup" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
            회원가입
          </Link>
        </p>
      </form>
    </div>
  );
}
