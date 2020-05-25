/*
 * Copyright(c) Oflane Software 2017. All Rights Reserved.
 */
import { gson } from '~/utils/rest'

const LOADURL = 'demo/fac/config/page-simple-form/load'
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
      type: 'fac-form',
      pos: 'body',
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
                  value: 'male',
                  label: '男'
                }, {
                  value: 'female',
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
              format: 'datetime', // year/month/date/week/ datetime/datetimerange/daterange
              field: 'joinWorkDate',
              validate: [
                {method: 'validateTest', trigger: 'blur,change'}
              ]
            },
            {
              type: 'reference',
              label: '参照: ',
              field: 'dept',
              'suggest': [
                {value: '1', label: '测试1'},
                {value: '2', label: '测试2'}
              ],
              'ref-to': 'ref-table-demo',
              validate: [
                {method: 'validateTest', trigger: 'blur,change'}
              ]
            }
          ]
        }
      ]
    }
  ],
  model: {},
  methods: {
    initPage () {
      const vm = this
      gson(LOADURL).then(res => {
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
    }
  }
}
