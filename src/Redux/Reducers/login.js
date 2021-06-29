
const intial={
    loginStatus:""
}

export const login=(state=intial,action)=>{
   switch(action.type){
       case 'SUCCESS':
               return {...state,loginStatus:"SUCCESS"}
        case 'FAIL':
                return {...state,loginStatus:"FAIL"}
      default:
               return state
   }
}