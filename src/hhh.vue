<template>
  <div class="test-form">
    <parser :form-conf="formConf" @submit="sumbitFor" />
  </div>
</template>
<script>
import Parser from "@/components/parser/";
// import {Parser} from "form-gen-parser";
export default {
  components: {
    Parser,
  },
  data() {
    return {
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
              document: "",
              regList: [],     
              defaultValue:'这是我的电话'       
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
    };
  },
  methods: {
    sumbitFor(data) {
        alert(123)
      console.log("sumbitForm1提交数据：", data);
    },
  },
};
</script>