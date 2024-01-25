(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{309:function(t,s,a){"use strict";a.r(s);var e=a(13),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"ichildtoken"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ichildtoken"}},[t._v("#")]),t._v(" IChildToken")]),t._v(" "),s("h3",{attrs:{id:"deposit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deposit"}},[t._v("#")]),t._v(" deposit")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deposit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),t._v(" depositData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v("\n")])])]),s("h2",{attrs:{id:"childerc20"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#childerc20"}},[t._v("#")]),t._v(" ChildERC20")]),t._v(" "),s("p",[t._v("MockChildERC20.sol")]),t._v(" "),s("h3",{attrs:{id:"constructor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[t._v("#")]),t._v(" constructor")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" name_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" symbol_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint8")]),t._v(" decimals_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" childChainManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v("\n")])])]),s("p",[t._v("Should be callable only by ChildChainManager\nShould handle deposit by minting the required amount for user\nMake sure minting is done only by this function")]),t._v(" "),s("h3",{attrs:{id:"deposit-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deposit-2"}},[t._v("#")]),t._v(" deposit")]),t._v(" "),s("p",[t._v("called when token is deposited on root chain")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deposit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),t._v(" depositData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("user")]),t._v(" "),s("td",[t._v("address")]),t._v(" "),s("td",[t._v("user address for whom deposit is being done")])]),t._v(" "),s("tr",[s("td",[t._v("depositData")]),t._v(" "),s("td",[t._v("bytes")]),t._v(" "),s("td",[t._v("abi encoded amount")])])])]),t._v(" "),s("p",[t._v("Should burn user's tokens. This transaction will be verified when exiting on root chain")]),t._v(" "),s("h3",{attrs:{id:"withdraw"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#withdraw"}},[t._v("#")]),t._v(" withdraw")]),t._v(" "),s("p",[t._v("called when user wants to withdraw tokens back to root chain")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withdraw")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("amount")]),t._v(" "),s("td",[t._v("uint256")]),t._v(" "),s("td",[t._v("amount of tokens to withdraw")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);