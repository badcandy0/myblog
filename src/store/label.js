import { reqGetLabelInfo } from "@/api";

// state:仓库存储数据的地方
const state = {
    labelList: []
};
// mutations:修改state的唯一手段
const mutations = {
    GETLABELLIST(state,labelList) {
        state.labelList = labelList;
    }
};
// actions:处理action的地方，可以书写自己的业务逻辑，也可以异步
const actions = {
    async getLabelList({commit},params={}){
        let result = await reqGetLabelInfo(params);
        console.log(result);
        if(result.code==200){
            commit('GETLABELLIST',result.data)
        }
    }
};
// getters:可以理解为计算属性,用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {
    labelList(state){
        return state.labelList||[];
    }
};


// 对外暴露Store类的一个实例
export default{
    state,
    mutations,
    actions,
    getters
};

