export default{

    state: {
        isCollapse: false // 控制菜单是否展开
    },
     
    mutations: {
        // 修改菜单
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        }
    }
}