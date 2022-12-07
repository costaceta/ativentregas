export function generateActivityCode() {
    let date = new Date();

    let d = date.getDate();
    let m = date.getMonth()+1;
    let Y = date.getFullYear();
    let H = date.getHours();
    let i = date.getMinutes();
    let s = date.getSeconds();

    let code = 'AR'+Y+''+(m<=9?'0'+m:m)+''+(d<=9?'0'+d:d)+''+(H<=9?'0'+H:H)+''+(i<=9?'0'+i:i)+''+(s<=9?'0'+s:s);

    return code;
}