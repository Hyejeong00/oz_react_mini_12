import React, { useState } from 'react';
import InputField from '../components/InputField';
import {
  validateName,
  validateEmail,
  validatePassword,
  validatePasswordConfirm
} from '../utils/validation';
import HomeButton from '../components/HomeButton';
import { useSupabaseAuth } from '../hooks/useSupabaseAuth';
import { useNavigate, Link } from 'react-router-dom';

export default function SignupPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [errors, setErrors] = useState({});
  const { signUp } = useSupabaseAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      name: validateName(form.name),
      email: validateEmail(form.email),
      password: validatePassword(form.password),
      confirm: validatePasswordConfirm(form.password, form.confirm),
    };
    setErrors(newErrors);

    const hasError = Object.values(newErrors).some(Boolean);
    if (hasError) {
      const firstErrorField = Object.keys(newErrors).find((key) => newErrors[key]);
      document.getElementsByName(firstErrorField)[0]?.focus();
      return;
    }

    try {
      const { success, data } = await signUp({
        email: form.email,
        password: form.password,
        options: {
          data: {
            full_name: form.name,
          },
        },
      });

      if (success && data?.user) {
        navigate('/');
      }
    } catch (error) {
      console.error(error);
      setErrors({ form: '회원가입 중 서버 에러가 발생했습니다.' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4">
      <HomeButton />
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-600"
      >
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">회원가입</h2>

        {errors.form && (
          <p className="text-red-500 text-sm mb-4 text-center">{errors.form}</p>
        )}

        <InputField
          label="이름"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
        />
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
        <InputField
          label="비밀번호 확인"
          name="confirm"
          type="password"
          value={form.confirm}
          onChange={handleChange}
          error={errors.confirm}
        />

        <button
          type="submit"
          className="w-full mt-4 py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md shadow-md transition"
        >
          회원가입
        </button>

        <p className="text-sm text-center mt-4 text-gray-600 dark:text-gray-400">
          이미 계정이 있으신가요?{' '}
          <Link to="/login" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
            로그인
          </Link>
        </p>
      </form>
    </div>
  );
}
