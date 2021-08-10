/*
 * Copyright(c) Oflane Software 2017. All Rights Reserved.
 */

/**
 * 简单表格描述信息
 * @author Paul.Yang E-mail:yaboocn@qq.com
 * @version 1.0 2017-8-18
 */
export default {
  urls: {
    edit: 'demo/fac/meta/tpl-simple-form/:id',
    save: 'demo/fac/meta/tpl-simple-form/save'
  },
  groups: [
    {
      title: '单据信息',
      cols: 4,
      items: [
        {
          type: 'span',
          label: '单据编号: ',
          field: 'applyNo'
        },
        {
          type: 'span',
          label: '申请人邮箱: ',
          field: 'applyMail'
        }, {
          type: 'span',
          label: '申请日期: ',
          field: 'applyDate'
        }, {
          type: 'span',
          label: '单据状态: ',
          field: 'applyStatus'
        }
      ]
    },
    {
      title: '候选人基本信息',
      cols: 3,
      items: [
        {
          type: 'input',
          label: '姓名: ',
          cols: 2, // 与content.cols对应，content.cols有几列，该参数最大值就为多少
          field: 'name',
          validation: [
            {required: true, message: '姓名不能为空', trigger: 'blur'}
          ]
        },
        {
          type: 'input',
          label: '身份证: ',
          field: 'idNo',
          validation: [
            {required: true, message: '身份证不能为空', trigger: 'blur'}
          ]
        },
        {
          type: 'select',
          label: '性别: ',
          field: 'gender',
          ':options': [
            {
              value: 1,
              label: '男'
            }, {
              value: 2,
              label: '女'
            }
          ]
        },
        {
          type: 'date',
          format: 'date',
          label: '出生日期: ',
          field: 'birth',
          validation: [
            {required: true, type: 'date', message: '出生日期不能为空', trigger: 'blur'}
          ]
        },
        {
          type: 'input',
          cols: 3,
          label: '个人邮箱: ',
          field: 'email',
          validation: [
            {required: true, type: 'email', message: '请输入正确的邮箱', trigger: 'blur'}
          ]
        },
        {
          type: 'input.number',
          label: '联系电话: ',
          field: 'phone',
          validation: [
            {required: true, message: '联系电话不能为空不能为空'},
            {type: 'number', message: '联系电话不能为空必须为数字值'}
          ]
        },
        {
          type: 'date',
          label: '参加工作日期: ',
          format: 'date', // year/month/date/week/ datetime/datetimerange/daterange
          field: 'joinWorkDate'
        },
        {
          type: 'reference',
          label: '引用: ',
          field: 'dept',
          'ref-to': 'ref-table-demo',
          validate: [
            {method: 'validateTest', trigger: 'blur,change'}
          ]
        }
      ]
    }
  ]
}
