const initialdata={
    userData:{}
};


const userDataReducer=(state=initialdata, action)=>{
   
    switch(action.type)
    {
        case 'updateuser':
            return {
                ...state,
                userData: {
                  ...state.userData,
                  ...action.payload,
                },
              };
        default:
            return state;
    }
}
export default userDataReducer;