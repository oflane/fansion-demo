/*
 * Copyright(c) Oflane Software 2017. All Rights Reserved.
 */
import fase from 'fansion-base'
import fac from 'fansion-fac'
import fmeta from 'fansion-meta'
import temps from './templates'

const { temetas, templates } = temps
const install = (Vue, opt = {}) => {
  fase.init({})
  fac.init({templates})
  Vue.use(fmeta)
  const plugins = Vue._installedPlugins
  if (plugins) {
    let fameta = plugins.find(v => v.name === 'fansion-meta')
    fameta && fameta.init({ temetas })
  }
}
/**
 * 组件入口
 * @author Paul.Yang E-mail:yaboocn@qq.com
 * @version 1.0 2011/13/18
 */
export default {
  install
}
