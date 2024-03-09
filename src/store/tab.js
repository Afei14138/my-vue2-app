export default{

    state: {
        isCollapse: false, // 控制菜单是否展开
        tabsList: [
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 's-home',
                url: 'Home/Home'
            }
        ] // 面包屑的数据
    },
     
    mutations: {
        // 修改菜单
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        },
        // 更新面包屑树
        selectMenu(state, val){
            console.log(val, 'val')
            // 判断添加的数据是否为首页
            if(val.name !== 'home'){
                const index = state.tabsList.findIndex(item => item.name === val.name)
                // 如果不存在
                if(index === -1){
                    state.tabsList.push(val)
                }
            }
        },
        // 删除指定的 tag 数据
        closeTag(state, item){
            // console.log(item,'closeTag')
            const index = state.tabsList.findIndex(val => val.name === item.name)
            state.tabsList.splice(index, 1)
        }
    }
}