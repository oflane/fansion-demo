/*
 * Copyright(c) Oflane Software 2017. All Rights Reserved.
 */
import plainSimpleTable from './plain/table/simple-table.tpl.js'
import plainSimpleForm from './plain/form/simple-form.tpl.js'
import ofmSimpleTable from './ofm/table/simple-table.tpl.js'
import ofmSimpleForm from './ofm/form/simple-form.tpl.js'
import plainSimpleTableTemeta from './plain/table/simple-table.temeta.js'
import plainSimpleFormTemeta from './plain/form/simple-form.temeta.js'
import ofmSimpleTableTemeta from './ofm/table/simple-table.temeta.js'
import ofmSimpleFormTemeta from './ofm/form/simple-form.temeta.js'

const templates = {
  'plain-simple-table': plainSimpleTable,
  'plain-simple-form': plainSimpleForm,
  'ofm-simple-table': ofmSimpleTable,
  'ofm-simple-form': ofmSimpleForm
}
const temetas = {
  'plain-simple-table': plainSimpleTableTemeta,
  'plain-simple-form': plainSimpleFormTemeta,
  'ofm-simple-table': ofmSimpleTableTemeta,
  'ofm-simple-form': ofmSimpleFormTemeta
}
/**
 * 模板集合
 * @author Paul.Yang E-mail:yaboocn@qq.com
 * @version 1.0 2011/14/18
 */
export default {
  templates,
  temetas
}
