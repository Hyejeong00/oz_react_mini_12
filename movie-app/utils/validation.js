// 이름 검사
export const validateName = (name) => {
    if (!name) return '이름을 입력해주세요.';
    const regex = /^[가-힣a-zA-Z0-9]{2,8}$/;
    return regex.test(name) ? '' : '2~8자의 한글, 영문 또는 숫자만 입력 가능합니다.';
};

export const validateEmail = (email) => {
    if (!email) return '이메일을 입력해주세요.';
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email) ? '' : '올바른 이메일 형식이 아닙니다.';
};

export const validatePassword = (password) => {
    if (!password) return '비밀번호를 입력해주세요.';
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return regex.test(password) ? '' : '영문자와 숫자를 조합하여 입력해주세요.';
};

export const validatePasswordConfirm = (password, confirm) => {
    if (!confirm) return '비밀번호 확인을 입력해주세요.';
    return password === confirm ? '' : '비밀번호가 일치하지 않습니다.';
};
