const state={
    productname:'鸡蛋🥚',
    productnumber:23
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