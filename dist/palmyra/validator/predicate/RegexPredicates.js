const r = (t) => /^(.*[a-z].*)$/.test(t), s = (t) => /^(.*[A-Z].*)$/.test(t), n = (t) => /^(?:[A-Za-z]:\/)?[\w\/]+\w+$/.test(t), a = (t) => /^(102[4-9]|10[3-9]\d|1[1-9]\d{2}|[2-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/.test(t), o = (t) => /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(t);
export {
  r as hasLowerCase,
  o as hasSpecialChar,
  s as hasUpperCase,
  n as isFolder,
  a as isPortRange
};
