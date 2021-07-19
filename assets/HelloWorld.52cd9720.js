import{c as a,l as t,p as d,m as s,o as e,k as v}from"./vendor.0823f3cd.js";const n={name:"HelloWorld"},l=t();d("data-v-485331a6");const p=v('<h1 data-v-485331a6>vite-plugin-vue-docs</h1><p class="card-version" data-v-485331a6><a href="https://www.npmjs.com/package/vite-plugin-vue-docs" target="_blank" data-v-485331a6><img src="https://img.shields.io/npm/v/vite-plugin-vue-docs" alt="npm version" data-v-485331a6></a><a href="javascript:" data-v-485331a6><img src="https://img.shields.io/npm/l/vite-plugin-vue-docs" alt="license" data-v-485331a6></a><a href="javascript:" data-v-485331a6><img src="https://img.shields.io/badge/statements-79.66%25-red.svg" alt="Statements" data-v-485331a6></a><a href="https://meetqy.github.io/vite-plugin-vue-docs/#/docs" target="_blank" data-v-485331a6><img src="https://github.com/meetqy/vite-plugin-vue-docs/actions/workflows/deploy.yml/badge.svg" alt="example deploy" data-v-485331a6></a></p><div class="card" data-v-485331a6><h3 id="jie-shao" data-v-485331a6>介绍</h3><p data-v-485331a6>解析<code data-v-485331a6>.vue</code>文件，自动生成对应文档。</p></div><div class="card" data-v-485331a6><h3 id="you-shi" data-v-485331a6>特点</h3><ul data-v-485331a6><li data-v-485331a6>支持热更新</li><li data-v-485331a6>快速启动，依赖于 vite，无需另起服务</li><li data-v-485331a6>自动生成组件导航</li><li data-v-485331a6><code data-v-485331a6>Demo</code>在线查看</li><li data-v-485331a6> ui 采用了<a href="https://youzan.github.io/vant-weapp/#/home" data-v-485331a6><code data-v-485331a6>vant-ui</code></a>的样式 </li><li data-v-485331a6>核心方法覆盖率达到了 92.86%</li></ul></div><div class="card" data-v-485331a6><h3 id="shi-yong" data-v-485331a6>使用</h3><h4 id="an-zhuang" data-v-485331a6>安装</h4><pre data-v-485331a6><code class="language-shell" data-v-485331a6>yarn add vite-plugin-vue-docs -D\n</code></pre><h4 id="pei-zhi-vite-config.js" data-v-485331a6>配置 vite-config.js</h4><pre data-v-485331a6><code class="language-js" data-v-485331a6><span class="hljs-keyword" data-v-485331a6>import</span> { defineConfig } <span class="hljs-keyword" data-v-485331a6>from</span> <span class="hljs-string" data-v-485331a6>&#39;vite&#39;</span>;\n<span class="hljs-keyword" data-v-485331a6>import</span> vue <span class="hljs-keyword" data-v-485331a6>from</span> <span class="hljs-string" data-v-485331a6>&#39;@vitejs/plugin-vue&#39;</span>;\n<span class="hljs-keyword" data-v-485331a6>import</span> vueDocs <span class="hljs-keyword" data-v-485331a6>from</span> <span class="hljs-string" data-v-485331a6>&#39;vite-plugin-vue-docs&#39;</span>;\n\n<span class="hljs-keyword" data-v-485331a6>export</span> <span class="hljs-keyword" data-v-485331a6>default</span> defineConfig({\n  <span class="hljs-attr" data-v-485331a6>plugins</span>: [vue(), vueDocs()],\n  <span class="hljs-attr" data-v-485331a6>resolve</span>: {\n    <span class="hljs-attr" data-v-485331a6>alias</span>: {\n      <span class="hljs-comment" data-v-485331a6>// 必须添加这一行，否则无法使用</span>\n      <span class="hljs-attr" data-v-485331a6>vue</span>: <span class="hljs-string" data-v-485331a6>&#39;vue/dist/vue.esm-bundler.js&#39;</span>,\n    },\n  },\n});\n</code></pre><p data-v-485331a6> 详细使用方法可参考 <a href="./packages/example/README.md" target="_blank" data-v-485331a6>@vue-docs/example</a></p></div><div class="card" data-v-485331a6><h3 id="config-pei-zhi-can-shu" data-v-485331a6>config 配置参数</h3><table data-v-485331a6><thead data-v-485331a6><tr data-v-485331a6><th data-v-485331a6>参数</th><th data-v-485331a6>说用</th><th data-v-485331a6>默认值</th></tr></thead><tbody data-v-485331a6><tr data-v-485331a6><td data-v-485331a6>base</td><td data-v-485331a6>文档路由地址</td><td data-v-485331a6>/docs</td></tr><tr data-v-485331a6><td data-v-485331a6>componentDir</td><td data-v-485331a6>组件路径 相对于 src</td><td data-v-485331a6>/components</td></tr><tr data-v-485331a6><td data-v-485331a6>vueRoute</td><td data-v-485331a6> router 实例名称, eg: <code data-v-485331a6>const route = createRoute()</code>填写 route </td><td data-v-485331a6>router</td></tr><tr data-v-485331a6><td data-v-485331a6>showUse</td><td data-v-485331a6>是否显示使用指南</td><td data-v-485331a6>true</td></tr><tr data-v-485331a6><td data-v-485331a6>header</td><td data-v-485331a6>导航栏配置</td><td data-v-485331a6>ConfigHeader</td></tr></tbody></table><h4 id="header" data-v-485331a6>header</h4><pre data-v-485331a6><code class="language-js" data-v-485331a6>header: {\n  <span class="hljs-comment" data-v-485331a6>// 默认值为 当前packge.json中的name字段</span>\n  <span class="hljs-attr" data-v-485331a6>title</span>: <span class="hljs-string" data-v-485331a6>&#39;vue docs&#39;</span>;\n}\n</code></pre><blockquote data-v-485331a6><p data-v-485331a6>^0.1.3 依赖 <em data-v-485331a6>vue-router</em></p></blockquote></div><div class="card" data-v-485331a6><h3 id="example" data-v-485331a6>example</h3><pre data-v-485331a6><code class="language-shell" data-v-485331a6>git clone https://github.com/meetqy/vite-plugin-vue-docs.git\nyarn\nyarn setup\nyarn dev\n</code></pre></div><div class="card" data-v-485331a6><h3 id="yu-fa" data-v-485331a6>语法</h3><ul data-v-485331a6><li data-v-485331a6><code data-v-485331a6>emits</code>,<code data-v-485331a6>props</code>，在 vue 中有对应的写法，所以只需要在写法上加上注释，插件就会自动解析。 </li><li data-v-485331a6><code data-v-485331a6>slots</code>也是自动生成，如需增加说明，只需在<code data-v-485331a6>&lt;slot&gt;</code>标签的上一行增加注释。 </li></ul><h4 id="ref" data-v-485331a6>ref</h4><p data-v-485331a6><code data-v-485331a6>ref</code> 一般调用的是 methods 当中的某一些方法，所以需要在方法上面加上<code data-v-485331a6>@vue-docs-ref</code>标识，并使用多行注释的方式。 注释规范参照<a href="http://itmyhome.com/js/han_6570_fang_fa_zhu_shi.html" target="_blank" data-v-485331a6>JavaScript 编码规范-函数/方法注释</a></p><pre data-v-485331a6><code class="language-js" data-v-485331a6><span class="hljs-keyword" data-v-485331a6>export</span> <span class="hljs-keyword" data-v-485331a6>default</span> {\n  <span class="hljs-attr" data-v-485331a6>methods</span>: {\n    <span class="hljs-comment" data-v-485331a6>/**\n     * <span class="hljs-doctag" data-v-485331a6>@vue</span>-docs-ref\n     * <span class="hljs-doctag" data-v-485331a6>@description </span>这是一个say方法\n     * <span class="hljs-doctag" data-v-485331a6>@param <span class="hljs-type" data-v-485331a6>{string}</span> </span>name 姓名\n     * <span class="hljs-doctag" data-v-485331a6>@param <span class="hljs-type" data-v-485331a6>{number}</span> </span>age  年龄\n     * <span class="hljs-doctag" data-v-485331a6>@return <span class="hljs-type" data-v-485331a6>{name: string, age: number}</span></span>\n     */</span>\n    <span class="hljs-function" data-v-485331a6><span class="hljs-title" data-v-485331a6>say</span>(<span class="hljs-params" data-v-485331a6>name: string, age: number</span>)</span> {\n      <span class="hljs-keyword" data-v-485331a6>return</span> {\n        name,\n        age,\n      };\n    },\n  },\n};\n</code></pre><h4 id="can-shu-shuo-ming" data-v-485331a6>参数说明</h4><table data-v-485331a6><thead data-v-485331a6><tr data-v-485331a6><th data-v-485331a6>名称</th><th data-v-485331a6>说明</th><th data-v-485331a6>必填</th></tr></thead><tbody data-v-485331a6><tr data-v-485331a6><td data-v-485331a6>@vue-docs-ref</td><td data-v-485331a6>通过<code data-v-485331a6>ref</code>调用标识</td><td data-v-485331a6><em data-v-485331a6>true</em></td></tr><tr data-v-485331a6><td data-v-485331a6>@description</td><td data-v-485331a6>描述信息</td><td data-v-485331a6><em data-v-485331a6>false</em></td></tr><tr data-v-485331a6><td data-v-485331a6>@param</td><td data-v-485331a6>参数</td><td data-v-485331a6><em data-v-485331a6>false</em></td></tr><tr data-v-485331a6><td data-v-485331a6>@return</td><td data-v-485331a6>返回值</td><td data-v-485331a6><em data-v-485331a6>false</em></td></tr></tbody></table></div>',8);s();const c=l(((t,d,s,v,n,l)=>(e(),a("section",null,[p]))));n.render=c,n.__scopeId="data-v-485331a6";export default n;
