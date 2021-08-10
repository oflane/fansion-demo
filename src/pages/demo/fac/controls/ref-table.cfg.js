/*
 * Copyright(c) Oflane Software 2017. All Rights Reserved.
 */
import { gson } from '~/utils/rest'

const QUERYURL = 'demo/fac/controls/ref-table/query'
/**
 * 列表引用开发
 */
export default {
  layout: {
    conf: {
      body: 'body',
      footer: {
        class: 'layout-footer clearfix',
        slot: 'footer'
      }
    }
  },
  components: [
    {
      type: 'simple-table',
      pos: 'body',
      '@current-change': 'handleCurrentChange($event)',
      'highlight-current-row': true,
      model: 'model.result',
      columns: [
        {
          label: '单据编号',
          field: 'applyNo'
        },
        {
          label: '姓名',
          field: 'label',
          sortable: true
        },
        {
          label: '申请人邮箱',
          field: 'applyMail'
        }, {
          label: '申请日期',
          field: 'applyDate'
        }, {
          label: '操作',
          width: '80px',
          align: 'center',
          template: '<el-button @click="onSelect(scope.row)" type="text" size="small">选择</el-button>'
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
    currentRow: null,
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
      const vm = this
      gson(QUERYURL).then(res => {
        vm.model = res
      })
    },
    handleCurrentChange (row) {
      console.log(row)
      this.currentRow = row
    },
    getData () {
      return this.currentRow
    },
    onSelect (row) {
      this.$closeReference(row)
    }
  }
}
