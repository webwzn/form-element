<template>
  <div class="test-form">
    <parser :form-conf="formConf" @submit="sumbitForm1" />
    <!-- <parser :key="key2" :form-conf="formConf" @submit="sumbitForm2" /> -->
    <!-- <el-button @click="change">
      change
    </el-button> -->
  </div>
</template>

<script>
import Parser from "../Parser";

// 若parser是通过安装npm方式集成到项目中的，使用此行引入
// import Parser from 'form-gen-parser'

export default {
  components: {
    Parser,
  },
  props: {},
  data() {
    return {
      key2: +new Date(),
      formConf: {
        fields: [
          {
            __config__: {
              label: "单行文本",
              labelWidth: null,
              showLabel: true,
              changeTag: true,
              tag: "el-input",
              tagIcon: "textarea",
              required: true,
              layout: "colFormItem",
              span: 24,
              document: "https://element.eleme.cn/#/zh-CN/component/input",
              regList: [],
            },
            type: "textarea",
            placeholder: "请输入手机号",
            autosize: {
              minRows: 4,
              maxRows: 4,
            },
            style: {
              width: "100%",
            },
            maxlength: 11,
            "show-word-limit": true,
            readonly: false,
            disabled: false,
            __vModel__: "mobile",
          },
          {
            __config__: {
              label: "级联选择",
              url: "https://www.fastmock.site/mock/f8d7a54fb1e60561e2f720d5a810009d/fg/cascaderList",
              method: "get",
              dataKey: "list",
              showLabel: true,
              labelWidth: null,
              tag: "el-cascader",
              tagIcon: "cascader",
              layout: "colFormItem",
              defaultValue: [],
              dataType: "dynamic",
              span: 21,
              required: true,
              regList: [],
              changeTag: true,
              document: "https://element.eleme.cn/#/zh-CN/component/cascader",
              formId: 116,
              renderKey: 1701755903167,
            },
            options: [
              {
                id: 1,
                value: 1,
                label: "选项1",
                children: [
                  {
                    id: 2,
                    value: 2,
                    label: "选项1-1",
                  },
                ],
              },
            ],
            placeholder: "请选择级联选择",
            style: {
              width: "100%",
            },
            props: {
              props: {
                multiple: false,
                label: "label",
                value: "value",
                children: "children",
              },
            },
            "show-all-levels": true,
            disabled: false,
            clearable: true,
            filterable: false,
            separator: "/",
            __vModel__: "field116",
          },
        ],
        formRef: "elForm",
        formModel: "formData",
        size: "medium",
        labelPosition: "top",
        labelWidth: 100,
        formRules: "rules",
        gutter: 5,
        disabled: false,
        span: 21,
        formBtns: true,
        unFocusedComponentBorder: true,
      },
      formConf2: {
        fields: [
          {
            __config__: {
              label: "单行文本",
              labelWidth: null,
              showLabel: true,
              changeTag: true,
              tag: "el-input",
              tagIcon: "input",
              required: true,
              layout: "colFormItem",
              span: 24,
              document: "https://element.eleme.cn/#/zh-CN/component/input",
              regList: [
                {
                  pattern: "/^1(3|4|5|7|8|9)\\d{9}$/",
                  message: "手机号格式错误",
                },
              ],
            },
            __slot__: {
              prepend: "",
              append: "",
            },
            __vModel__: "mobile",
            placeholder: "请输入手机号",
            style: {
              width: "100%",
            },
            clearable: true,
            "prefix-icon": "el-icon-mobile",
            "suffix-icon": "",
            maxlength: 11,
            "show-word-limit": true,
            readonly: false,
            disabled: false,
          },
          {
            __config__: {
              label: "日期范围",
              tag: "el-date-picker",
              tagIcon: "date-range",
              defaultValue: null,
              span: 24,
              showLabel: true,
              labelWidth: null,
              required: true,
              layout: "colFormItem",
              regList: [],
              changeTag: true,
              document:
                "https://element.eleme.cn/#/zh-CN/component/date-picker",
              formId: 101,
              renderKey: 1585980082729,
            },
            style: {
              width: "100%",
            },
            type: "daterange",
            "range-separator": "至",
            "start-placeholder": "开始日期",
            "end-placeholder": "结束日期",
            disabled: false,
            clearable: true,
            format: "yyyy-MM-dd",
            "value-format": "yyyy-MM-dd",
            readonly: false,
            __vModel__: "field101",
          },
        ],
        formRef: "elForm",
        formModel: "formData",
        size: "small",
        labelPosition: "right",
        labelWidth: 100,
        formRules: "rules",
        gutter: 15,
        disabled: false,
        span: 24,
        formBtns: true,
        unFocusedComponentBorder: false,
      },
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    // 表单数据回填，模拟异步请求场景
    setTimeout(() => {
      // 请求回来的表单数据
      const data = {
        mobile: "18836662555",
      };
      // 回填数据
      this.fillFormData(this.formConf, data);
      // 更新表单
      this.key2 = +new Date();
    }, 2000);
  },
  methods: {
    fillFormData(form, data) {
      form.fields.forEach((item) => {
        const val = data[item.__vModel__];
        if (val) {
          item.__config__.defaultValue = val;
        }
      });
    },
    change() {
      this.key2 = +new Date();
      const t = this.formConf;
      this.formConf = this.formConf2;
      this.formConf2 = t;
    },
    sumbitForm1(data) {
      console.log("sumbitForm1提交数据：", data);
    },
    sumbitForm2(data) {
      console.log("sumbitForm2提交数据：", data);
    },
  },
};
</script>

<style lang="scss">
.test-form {
  margin: 15px auto;
  width: 800px;
  padding: 15px;
}
</style>
