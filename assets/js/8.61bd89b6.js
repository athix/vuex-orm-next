(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{363:function(t,s,n){"use strict";n.r(s);var a=n(42),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"plugins"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[t._v("#")]),t._v(" Plugins")]),t._v(" "),n("p",[t._v("You can add additional features to Vuex ORM by creating your own plugins. Plugins can add global-level functionality to Vuex ORM and work very similarly to Vue Plugin.")]),t._v(" "),n("h2",{attrs:{id:"writing-a-plugin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#writing-a-plugin"}},[t._v("#")]),t._v(" Writing A Plugin")]),t._v(" "),n("p",[t._v("A Vuex ORM plugin should be an object that exposes an install method. The method will be called with the Vuex Store instance as the first argument, Vuex ORM components (see "),n("a",{attrs:{href:"#extendable-components"}},[t._v("Extendable Components")]),t._v(" for a comprehensive list) as the second argument, and possible user-defined options for your plugin as the third argument.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" plugin "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("store"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" components"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add global (static) method or property.")]),t._v("\n    components"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Model"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("globalMethod")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Logic...")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add an instance method or property.")]),t._v("\n    components"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Query")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("instanceMethod")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Logic...")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" plugin\n")])])]),n("p",[t._v("The plugin "),n("code",[t._v("install")]),t._v(" method will be invoked immediately before Vuex ORM begins it's initial setup.")]),t._v(" "),n("h3",{attrs:{id:"extendable-components"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#extendable-components"}},[t._v("#")]),t._v(" Extendable Components")]),t._v(" "),n("p",[t._v("The following components are included by the "),n("code",[t._v("components")]),t._v(" argument.")]),t._v(" "),n("ul",[n("li",[t._v("Database")]),t._v(" "),n("li",[t._v("Model")]),t._v(" "),n("li",[t._v("Attribute")]),t._v(" "),n("li",[t._v("Type")]),t._v(" "),n("li",[t._v("Attr")]),t._v(" "),n("li",[t._v("String")]),t._v(" "),n("li",[t._v("Number")]),t._v(" "),n("li",[t._v("Boolean")]),t._v(" "),n("li",[t._v("Uid")]),t._v(" "),n("li",[t._v("Relation")]),t._v(" "),n("li",[t._v("HasOne")]),t._v(" "),n("li",[t._v("HasMany")]),t._v(" "),n("li",[t._v("Repository")]),t._v(" "),n("li",[t._v("Interpreter")]),t._v(" "),n("li",[t._v("Query")]),t._v(" "),n("li",[t._v("Connection")]),t._v(" "),n("li",[t._v("mutations")])]),t._v(" "),n("h2",{attrs:{id:"using-a-plugin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-a-plugin"}},[t._v("#")]),t._v(" Using A Plugin")]),t._v(" "),n("p",[t._v("You can install a plugin by passing the imported plugin module to "),n("code",[t._v("VuexORM.use()")]),t._v(".")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VuexORM "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuex-orm/core'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" plugin "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plugin'")]),t._v("\n\nVuexORM"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("plugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("If your plugin offers user-defined options, these can be passed as the second argument.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("VuexORM"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("plugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" someOption"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("Plugins should be installed prior to the Vuex ORM installation with Vuex.")])])}),[],!1,null,null,null);s.default=e.exports}}]);