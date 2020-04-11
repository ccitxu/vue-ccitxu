const state={
    productname:'鹅蛋🥚',
    productnumber:24
}
const mutations={
    cname(state,flag){
        state.productname=flag;
    },
    cnumber(state,flag){
        state.productnumber=flag;
    }
}
export default{
    state,
    mutations
}