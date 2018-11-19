/*
 * Copyright(c) Oflane Software 2017. All Rights Reserved.
 */

/**
 * 列表模板
 * @author Paul.Yang E-mail:yaboocn@qq.com
 * @version 1.0 2017-8-18
 */
import fase from 'fansion-base'
import fanui from 'fansion-ui'
const {fillRestPath, post} = fase.rest
const DataLoader = fase.DataLoader
/**
 * 简单配置开发
 */
export default meta => {
  let {options: { ofmodel }, uimeta, simpleTable: {columns}, xquery, search} = meta
  let tableColumns = [{selection: true}, ...columns, fanui.generator.buttonsColumn([{click: 'page.edit(scope.row)', text: '查看'}, {click: 'page.delete(scope.row)', text: '删除'}])]

  let urls = {
    query: `/ofec/find-page/${ofmodel}`,
    edit: `/fac/${ofmodel}.ofm-simple-form/:id`,
    delete: `/ofec/delete/${ofmodel}`
  }
  return {
    uimeta,
    layout: {
      conf: {
        header: {
          'class': 'layout-header layout-rows clearfix',
          rows: [
            {
              cols: [
                {
                  ':span': 12,
                  slot: 'header-button'
                },
                {
                  ':span': 12,
                  slot: 'header-search'
                }
              ]
            },
            {
              slot: 'header-query'
            }
          ]
        },
        body: 'body',
        footer: 'footer'
      }
    },
    components: [
      {
        type: 'button-bar',
        pos: 'header-button',
        buttons: [
          {
            name: '新增',
            click: 'add',
            type: 'primary' // success warning danger info
          },
          {
            name: '删除',
            click: 'deletes'
          },
          {
            name: '刷新',
            click: 'queryData'
          }
        ]
      },
      meta.search ? {
        type: 'search',
        pos: 'header-search',
        'xclass': 'pull-right',
        ':loader': 'loader',
        'advance': 'xqueryComp',
        ...search
      } : null,
      meta.xquery ? {
        ref: 'xqueryComp',
        type: 'xquery',
        pos: 'header-query',
        ':loader': 'loader',
        ...xquery} : null,
      {
        type: 'simple-table',
        pos: 'body',
        ':model': 'model.content',
        '@selection-change': 'page.handleSelectionChange($event)',
        ':loader': 'loader',
        'v-loading': 'page.loading',
        tableColumns
      },
      {
        type: 'pagination',
        ref: 'pagination',
        ':model': 'model',
        ':loader': 'loader',
        pos: 'footer'
      }
    ],
    model: {content: []},
    member () {
      return {
        loader: new DataLoader(urls.query, this, 'model', null, null, () => {
          this.page.loading = false
        })
      }
    },
    data () {
      return {
        multipleSelection: [],
        loading: false
      }
    },
    methods: {
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      initPage () {
        this.queryData()
      },
      queryData () {
        this.loading = true
        this.loader.load()
      },
      add () {
        let url = fillRestPath(urls.edit, {id: 'add'})
        this.$router.push(url)
      },
      edit (row) {
        let url = fillRestPath(urls.edit, row)
        this.$router.push(url)
      },
      delete (row) {
        let vm = this
        this.$confirm('删除数据操作, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.loading = true
          let ids
          if (Array.isArray(row)) {
            ids = row.map(r => r.id)
          } else {
            ids = row.id
          }
          post(urls.delete, {id: ids}).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            vm.queryData()
          }).catch(() => {
            this.$message({
              type: 'error',
              message: '删除失败'
            })
            this.loading = false
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      },
      deletes () {
        if (this.multipleSelection.length === 0) {
          this.$message({
            type: 'info',
            message: '请勾选需要删除的数据!'
          })
          return
        }
        this.delete(this.multipleSelection)
      }
    }
  }
}
