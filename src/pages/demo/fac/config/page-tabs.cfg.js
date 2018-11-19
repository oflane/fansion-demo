/*
 * Copyright(c) Oflane Software 2017. All Rights Reserved.
 */

/**
 * 页签配置示例
 * @author Paul.Yang E-mail:yaboocn@qq.com
 * @version 1.0 2017-8-14
 */
/**
 * 简单配置开发
 */
export default {
  components: [
    {
      type: 'fac-tabs',
      pos: 'tabs-body',
      items: [
        {
          label: '列表',
          component: '$/demo/fac/config/page-simple-table-page'
        },
        {
          label: '卡片',
          component: '$/demo/fac/config/page-simple-form'
        }
      ]
    }
  ]
}
