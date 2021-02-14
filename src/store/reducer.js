const initialState = {
    items : []
}

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case 'ADD_ITEM':
            // console.log(action.currentItem);
            let items = [...state.items];
            items.push(action.currentItem);
            return {
                items : items 
            }
        case 'DELETE_ITEM':
            let item = [...state.items];
            item = item.filter(item=>{
                return item.key !== action.key;
            })
            return {
                items : item
            }
    }
    
    return state;
}

export default reducer;