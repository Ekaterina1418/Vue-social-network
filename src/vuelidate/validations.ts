const hasUppercase = (val: string) => /[A-Z]/.test(val)
const hasLowercase = (val: string) => /[a-z]/.test(val)
const hasSpecialChars = (val: string) =>/[$%#_]/.test(val)

export {hasUppercase,hasLowercase,hasSpecialChars}