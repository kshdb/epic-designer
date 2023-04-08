import { ComponentConfigModel } from "../../pluginManager";
export default {
  component: () => import("./src/KRadio"),
  defaultSchema: {
    label: "单选框",
    type: "radio",
    icon: "icon-danxuan-cuxiantiao",
    field: "radio",
    isInput: true,
    componentProps: {
      options: [
        {
          label: "选项1",
          value: "选项1",
        },
        {
          label: "选项2",
          value: "选项2",
        },
      ],
    },
  },
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field",
      },
      {
        label: "默认值",
        type: "radio",
        field: "componentProps.defaultValue",
      },
      {
        label: "文字",
        type: "input",
        field: "label",
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden",
      },
      {
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled",
      },
    ],
    event: [
      {
        type: "change",
        describe: "值变化时",
      },
    ],
  },
} as ComponentConfigModel;
