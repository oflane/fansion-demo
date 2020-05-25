/*
 * Copyright(c) Oflane Software 2017. All Rights Reserved.
 */
import { gson } from '~/utils/rest'

const QUERYURL = 'demo/fac/config/page-simple-table/query'
/**
 * 简单配置开发
 */
export default {
  layout: {
    conf: {
      header: 'header',
      body: 'body'
    }
  },
  components: [
    {
      type: 'button-bar',
      pos: 'header',
      buttons: [
        {
          name: '保存',
          click: 'save',
          type: 'primary' // success warning danger info
        },
        {
          name: '刷新',
          click: 'refresh'
        },
        {
          name: '更多',
          group: [{
            click: 'more1',
            value: '测试1'
          }, {
            click: 'more2',
            value: '测试2'
          }
          ]
        }
      ]
    },
    {
      type: 'simple-table',
      pos: 'body',
      '@selection-change': 'handleSelectionChange($event)',
      columns: [
        {
          selection: true
        },
        {
          label: '单据编号: ',
          field: 'applyNo'
        },
        {
          label: '姓名: ',
          field: 'name',
          sortable: true
        },
        {
          label: '申请人邮箱: ',
          field: 'applyMail'
        }, {
          label: '申请日期: ',
          field: 'applyDate'
        }, {
          label: '操作: ',
          width: '150px',
          template: '<el-button @click="page.save" type="text" size="small">查看</el-button><router-link :to="\'/demo/fac/config/page-simple-table-detail/\'+ scope.row.applyNo" class="el-button el-button--text el-button--small">编辑</router-link>'
        }
      ]
    }
  ],
  model: [],
  data: {
    multipleSelection: []
  },
  methods: {
    initPage () {
      let vm = this
      gson(QUERYURL).then(res => {
        vm.model = res
      })
    },
    save: function () {
      console.log('save', this.model)
    },
    refresh () {
      this.$closeReference({value: '1', label: '参照选中'})
    },
    more1 () {
      this.$showDialog('/index')
    },
    more2 () {
      this.$showDialog('/index')
    },
    validateTest (rule, value, callback) {
      if (value === '') {
        callback(new Error('请输入信息'))
      } else if (value < '2017-01-01') {
        callback(new Error('参加工作日期不能小于2017-01-01'))
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    }
  }
}
