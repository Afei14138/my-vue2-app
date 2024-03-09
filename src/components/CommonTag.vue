<template>
    <div class="tabs">
        <el-tag v-for="item in tags" 
        :key="item.path" 
        :closable="item.name !== 'home'" 
        :effect="$route.name === item.name ? 'dark' : 'plain'"
        @click="changeMenu(item)">
            {{ item.label }}
        </el-tag>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'CommonTag',
    data() {
        return {}
    },
    computed: {
        ...mapState({
            tags: state => state.tab.tabsList
        })
    },
    methods: {
        // 点击 tag 跳转功能
        changeMenu(item) {
            this.$router.push({name: item.name})

        }
    }
}
</script>