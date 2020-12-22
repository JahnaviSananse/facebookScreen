const INITIAL_STATE = {
    currentName: '',
    currentComment: '',
    item: [],
};
const toggleLike = (existing, id) => {
    return existing.map(item => {
        return item.id === id ? { ...item, like: !item.like } : item
    });
}
const deleteData = (existing,id) => {
    const updatedList =  existing.filter(item=>{
        return item.id !== id 

    });
    return updatedList;
}
const fbReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'insert_name':
            return {
                ...state,
                currentName: action.payload
            };
        case 'insert_comment':
            return {
                ...state,
                currentComment: action.payload
            };
        case 'like':
            return {
                ...state,
                item: toggleLike(state.item, action.payload),
            };
        case 'insert_data':
            return {
                ...state,
                item: [...state.item, action.payload]
            };
            case 'delete' :
                // console.log("bhfksyrfrefe",action.payload);
                return {
                    ...state,
                    item : deleteData(state.item,action.payload)   
                };
        default:
            return state;
    }
};

export default fbReducer;

