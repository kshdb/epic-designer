import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// 引入antd UI样式
import "ant-design-vue/dist/antd.css";

// 引入Element plus样式
import 'element-plus/dist/index.css'

// import { useComponent } from "./config/k.config";
import { pluginManager, useAntd, useElementPlus } from "../packages/index";

// 测试布局组件
// useComponent(pluginManager);
// 使用Antd UI
// useAntd(pluginManager)

// 使用Elemnt UI
useElementPlus(pluginManager);

createApp(App).mount("#app");
