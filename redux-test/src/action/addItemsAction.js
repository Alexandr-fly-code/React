export const addItems = (text) => ({
    type: 'ADD_ITEMS',
    data: {
        id: Date.now(),
        text: text,
        boll: false,
    },
    
    
})

