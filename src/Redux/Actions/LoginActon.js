import loginData from '../../json/CredData.json'

export const LoginActions=(state)=>{
   return {
       type:state
   }
}

export const Auth=(state)=>{
    return (dispatch)=>{
        let{username,password}=loginData
             if(state.username==username&&state.password==password){
                dispatch(LoginActions("SUCCESS"))
             }else{
                dispatch(LoginActions("FAIL"))
             }
    }
   
}