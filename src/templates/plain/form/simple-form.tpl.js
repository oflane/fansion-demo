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
  let {options: {urls}, facForm: {groups}, uimeta, methods} = meta
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
            return
          }
          url = urls.add
        } else {
          url = fillRestPath(urls.edit, {id})
        }
        getJson(url).then(res => {
          vm.model = res
        })
      },
      save () {
        post(urls.save, this.model).then(() => {
          this.$router.back()
          this.$message({
            type: 'success',
            message: '保存成功!'
          })
        })
      },
      cancel () {
        this.$router.back()
      }
    }, methods)
  }
}
