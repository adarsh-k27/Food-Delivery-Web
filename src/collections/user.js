import axios from '../axs'

export const UserSignIn = async (data, loginContext) => {
    try {
        console.log(data && "data comes here");
        //LoadState(true)
        const res = await axios.post('/api/user/signin', data)
        //console.log("signin response",res.data);
        if (res.status == 200) {
            localStorage.setItem('User', JSON.stringify({
                ...res.data.user,
                token: res.data.token
            }))
            loginContext({
                ...res.data.user,
                token: res.data.token
            })
            //LoadState(false)
        }
    } catch (error) {
        //LoadState(false)
        console.log("error happen in Login Section");
        console.log(error);
    }
}