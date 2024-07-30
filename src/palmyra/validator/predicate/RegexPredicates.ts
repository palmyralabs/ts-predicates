

const hasLowerCase = (val: any) => {
    const regex = /^(.*[a-z].*)$/;
    return regex.test(val);
}

const hasUpperCase = (val: any) => {
    const regex = /^(.*[A-Z].*)$/;
    return regex.test(val);
}

const isFolder = (val: any) => {
    const FolderPattern = /^(?:[A-Za-z]:\/)?[\w\/]+\w+$/;
    return FolderPattern.test(val);
}

const isPortRange = (val: any) => {
    const PortRangePattern = /^(102[4-9]|10[3-9]\d|1[1-9]\d{2}|[2-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/
    return PortRangePattern.test(val);
}

const hasSpecialChar = (val: any) => {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(val);
}