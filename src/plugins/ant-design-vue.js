import Vue from 'vue'

import {
  Layout,
  Spin,
  Button,
  Icon,
  Avatar,
  Select,
  Drawer,
  Menu,
  Form,
  LocaleProvider,
  Dropdown,
  Divider,
  Modal,
  Input,
  Tooltip,
  notification,
  Popover,
  ConfigProvider,
  Pagination,
  Steps,
  Cascader,
  Row,
  Col,
  Table,
  Tabs,
  Checkbox,
  BackTop,
  Upload,
  Tag,
  Badge,
  DatePicker,
  message,
  InputNumber
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Layout)
Vue.use(Spin)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Avatar)
Vue.use(Select)
Vue.use(Popover)
Vue.use(Form)
Vue.use(Drawer)
Vue.use(Menu)
Vue.use(LocaleProvider)
Vue.use(Dropdown)
Vue.use(Input)
Vue.use(Modal)
Vue.use(Tag)
Vue.use(Divider)
Vue.prototype.$notification = notification
Vue.use(Pagination)
Vue.use(Tooltip)
Vue.use(ConfigProvider)
Vue.use(Steps)
Vue.use(Cascader)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(Tabs)
Vue.use(Checkbox)
Vue.use(BackTop)
Vue.use(Upload)
Vue.use(Badge)
Vue.use(DatePicker)
Vue.use(InputNumber)
Vue.prototype.$message = message

Vue.prototype.$formItemLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 14 }
}
Vue.prototype.$tailFormItemLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 17, offset: 7 }
  }
}

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1228676_layrxadq5zi.js'
})
Vue.component('IconFont', IconFont)
