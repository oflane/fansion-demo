/*
 * Copyright(c) Oflane Software 2017. All Rights Reserved.
 */
import { gson } from '~/utils/rest'

const QUERYURL = 'demo/fac/config/page-simple-table-page/query'
/**
 * 简单配置开发
 */
export default {
  layout: {
    conf: {
      header: 'header',
      body: 'body',
      footer: 'footer'
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
      type: 'fac-table',
      pos: 'body',
      ':model': 'model.result',
      '@selection-change': 'page.handleSelectionChange($event)',
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
    },
    {
      type: 'el-pagination',
      pos: 'footer',
      '@size-change': 'loadData()',
      '@current-change': 'loadData()',
      ':current-page': 'pagination.number',
      ':page-size': 'pagination.size',
      ':total': 'model.totalElements'
    }
  ],
  model: {result: []},
  data: {
    multipleSelection: [],
    pagination: {
      number: 1,
      size: 20
    }
  },
  methods: {
    initPage () {
      this.loadData()
    },
    loadData () {
      console.log(arguments)
      const vm = this
      gson(QUERYURL).then(res => {
        vm.model = res
      })
    },
    save: function () {
      console.log('save', this.model)
    },
    refresh () {
      this.$closeReference({value: '1', label: '引用选中'})
    },
    more1 () {
      this.$showDialog('/index')
    },
    more2 () {
      this.$showDialog('/index')
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    }
  }
}
