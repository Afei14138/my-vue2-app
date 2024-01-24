<template>
    <div>
        <el-container>
            <el-aside width="200px">
                <common-aside></common-aside>
            </el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>
                    <!--路由出口，符合路径的视图在这里渲染-->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>


<script>
import CommonAside from '@/components/CommonAside.vue';
export default {
    data() {
        return {}
    },
    components:{
        CommonAside
    }
}

</script>