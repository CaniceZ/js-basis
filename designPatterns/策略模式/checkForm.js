
/* 单独抽离规则 */
const rules = {
    isEmpty: (val, message)=>{
        if(val === '' || val == null) return message
    },
    checkLength: (val, message, minLength, maxLength)=>{
        if(String(val).length < minLength || String(val).length > maxLength) return message
    },
    checkMobile: (val, message)=>{
        const mobileReg = /^[1][3,4,5,7,8,9][0-9]{9}$/
        if(!mobileReg.test(val)) return message
    },
    isEqual: (val, message, valAgain)=>{
        if(val != valAgain) return message
    }
}

 /* 表单验校封装 */
 const checkForm = {
    mobile: (val)=>{
        const mobileIsEmpty = rules.isEmpty(val, '请输入手机号')
        const mobileIsLegitimate = rules.checkMobile(val, '请输入正确的手机号')
        const message = mobileIsEmpty || mobileIsLegitimate
        if(message) return message
    },
    code: (val)=>{
        const codeIsEmpty = rules.isEmpty(val, '请输入验证码')
        const codeLength = rules.checkLength(val, '请输入6位数验证码', 6, 6)
        const message = codeIsEmpty || codeLength
        if(message) return message
    },
    password: (val, valAgain)=>{
        const passwordIsEmpty = rules.isEmpty(val, '请输入密码')
        const passwordCheckLength = rules.checkLength(val, '请输入8-10位密码', 8, 10)
        const passwordAgainIsEmpty = rules.isEmpty(valAgain, '请再次输入密码')
        const passwordAgainCheckLength = rules.checkLength(valAgain, '再次确认密码请输入8-10位', 8, 10)
        const passwirdIsEqual = rules.isEqual(val, '两次输入密码不一致', valAgain)
        const message = passwordIsEmpty || passwordCheckLength || passwordAgainIsEmpty || passwordAgainCheckLength || passwirdIsEqual
        if(message) return message
    }
}

/*导出*/
export default checkForm