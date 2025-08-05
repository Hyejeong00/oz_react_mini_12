import React from 'react';

export default function InputField  ({ label, type, name, value, onChange, error }) {
    return(<div className="mb-4 w-full">
        {/* htmlFor : <label for=""> 처럼 해당 label이 어떤 input을 가리키는지를 지정 */}
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
        {label}
        </label>
        <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 rounded-md border text-sm transition 
            ${
            error
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-accent focus:border-accent dark:border-gray-600 dark:focus:border-gold'
            }
            bg-white dark:bg-darker text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500
            focus:outline-none focus:ring-1
        `}
        />
        {/* input 밑에 띄울 유효성 검사 에러 메시지 */}
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
)};

