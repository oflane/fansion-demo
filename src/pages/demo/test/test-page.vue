<template>
  <el-tabs>
    <el-tab-pane label="用户管理" ><comp :params="{a,b:'aaaa'}" ></comp></el-tab-pane>
    <el-tab-pane label="配置管理">asdf</el-tab-pane>
    <el-tab-pane label="角色管理" >角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>
<script>
  import comp from './test-comp.vue'
  export default {
    name: 'Test',
    props: {},
    data () {
      return { a: '1ddddd' }
    },
    components: {
      comp
    },
    mounted () {
    },
    methods: {
      convert: function () {
        return 'aaaa'
      }
    }
  }
</script>

