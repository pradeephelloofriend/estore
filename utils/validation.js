export const validateEmail=(email)=>{
    const regxSt=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return regxSt.test(email);
}