export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('userInfo'));

    if (user && user[0].token){
        return {Authorization: '' + user[0].token};
    } else {
        return {};
    }
}
