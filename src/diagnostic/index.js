import zxcvbn from "zxcvbn"

const checkPassword = (password) => {
    return zxcvbn(password).score >= 2;
};

export default checkPassword
