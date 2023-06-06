const initialState={
    user:null
}
const reducer=(state,action)=>{
switch(action.type){
    case 'Set User':
        return {...state,user:action.user}

        default:
        return state
}
}
export{initialState,reducer}