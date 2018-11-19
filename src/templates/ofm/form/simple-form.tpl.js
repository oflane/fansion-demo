/*
 * Copyright(c) Oflane Software 2017. All Rights Reserved.
 */

/**
 * 表单模板
 * @author Paul.Yang E-mail:yaboocn@qq.com
 * @version 1.0 2017-8-18
 */
import fase from 'fansion-base'
const {fillRestPath, getJson, post} = fase.rest
/**
 * 简单配置开发
 */
export default meta => {
  let {options: {ofmodel}, facForm: {groups}, uimeta, methods} = meta
  let urls = {
    add: `/ofec/create/${ofmodel}`,
    load: `/ofec/load/${ofmodel}/:id`,
    save: '/ofec/save'
  }
  return {
    uimeta,
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
            name: '取消',
            click: 'cancel'
          }
        ]
      },
      {
        type: 'fac-form',
        pos: 'body',
        groups
      }
    ],
    model: {},
    methods: Object.assign({
      initPage () {
        let vm = this
        let id = this.$route.params.id
        let url
        if (id === 'add') {
          if (!urls.add) {
            vm.model = {}
            this.pageState = 'state_add'
            return
          }
          url = urls.add
          this.pageState = 'state_add'
        } else {
          url = fillRestPath(urls.load, {id})
          this.pageState = 'state_edit'
        }

        getJson(url).then(res => {
          vm.model = res
        })
      },
      save () {
        this.pageLoading = true
        console.log(this.model)
        post(urls.save, this.model).then(() => {
          this.$router.back()
          this.$message({
            type: 'success',
            message: '保存成功!'
          })
          this.pageLoading = false
        }, () => { this.pageLoading = false })
      },
      cancel () {
        this.$router.back()
      }
    }, methods)
  }
}
