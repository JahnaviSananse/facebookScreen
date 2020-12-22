export const addData = item => ({
    type: 'insert_data',
    payload: item
});
export const addName = item => ({
    type: 'insert_name',
    payload: item
});
export const addComment = item => ({
    type: 'insert_comment',
    payload: item
});
export const addLike = item => ({
    type: 'like',
    payload: item
});
export const dataDelete = item => ({
    type : 'delete',
    payload : item
})