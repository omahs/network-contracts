(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{286:function(t,s,a){"use strict";a.r(s);var e=a(13),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"indexerregistry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#indexerregistry"}},[t._v("#")]),t._v(" IndexerRegistry")]),t._v(" "),s("h3",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("p",[t._v("The IndexerRegistry contract store and track all registered Indexers and related status for these Indexers.\nIt also provide the entry for Indexers to register, unregister, and config their metedata.")]),t._v(" "),s("h3",{attrs:{id:"terminology"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#terminology"}},[t._v("#")]),t._v(" Terminology")]),t._v(" "),s("p",[t._v("Indexer metadata -- The metadata of Indexer stored on IPFS include Indexer nickname, service endpoint...")]),t._v(" "),s("h3",{attrs:{id:"detail"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#detail"}},[t._v("#")]),t._v(" Detail")]),t._v(" "),s("p",[t._v("Each Indexer has two accounts:\nMain Account:\nThe main account is stored in the indexer’s own wallet.\nThe indexer can use the main account to make the following actions:\n- staking/unstaking\n- register/unregisterIndexer\n- set/remove a controller account\n- start an indexing for a query project with specific controller account")]),t._v(" "),s("p",[t._v("Controller Account:\nThe controller account is set by the main account which can execute some\nactions on the behalf of the main account.\nThese actions include:\n- reporting / updating the status of the indexing service on chain")]),t._v(" "),s("p",[t._v("Indexer must set a appropriate commission rate and stake enough SQT Token when registering.\nIndexer need to make sure all the query projects with NOT INDEXING status before unregister.")]),t._v(" "),s("h3",{attrs:{id:"commissionrate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commissionrate"}},[t._v("#")]),t._v(" CommissionRate")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CommissionRate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" era"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" valueAt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" valueAfter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"states"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#states"}},[t._v("#")]),t._v(" STATES")]),t._v(" "),s("h3",{attrs:{id:"settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[t._v("#")]),t._v(" settings")]),t._v(" "),s("p",[t._v("ISettings contract which stores SubQuery network contracts address")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("contract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ISettings")]),t._v(" settings\n")])])]),s("h3",{attrs:{id:"minimumstakingamount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#minimumstakingamount"}},[t._v("#")]),t._v(" minimumStakingAmount")]),t._v(" "),s("p",[t._v("The minimum stake amount for Indexer, set by owner")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" minimumStakingAmount\n")])])]),s("h3",{attrs:{id:"metadata"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#metadata"}},[t._v("#")]),t._v(" metadata")]),t._v(" "),s("p",[t._v("Indexer's metadata: indexer => metadata, if metadata = 0, no indexer")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" metadata\n")])])]),s("h3",{attrs:{id:"commissionrates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commissionrates"}},[t._v("#")]),t._v(" commissionRates")]),t._v(" "),s("p",[t._v("Delegation tax rate per indexer: indexer => commissionRate")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IndexerRegistry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CommissionRate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" commissionRates\n")])])]),s("h3",{attrs:{id:"controllers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#controllers"}},[t._v("#")]),t._v(" controllers")]),t._v(" "),s("p",[t._v("indexer's controller: indexer => controller")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" controllers\n")])])]),s("h3",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" EVENTS")]),t._v(" "),s("h3",{attrs:{id:"registerindexer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#registerindexer"}},[t._v("#")]),t._v(" RegisterIndexer")]),t._v(" "),s("p",[t._v("Emitted when user register to an Indexer.")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegisterIndexer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" indexer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" metadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"unregisterindexer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unregisterindexer"}},[t._v("#")]),t._v(" UnregisterIndexer")]),t._v(" "),s("p",[t._v("Emitted when user unregister to an Indexer.")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("UnregisterIndexer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" indexer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"updatemetadata"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updatemetadata"}},[t._v("#")]),t._v(" UpdateMetadata")]),t._v(" "),s("p",[t._v("Emitted when Indexers update their Metadata.")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("UpdateMetadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" indexer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" metadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"setcontrolleraccount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setcontrolleraccount"}},[t._v("#")]),t._v(" SetControllerAccount")]),t._v(" "),s("p",[t._v("Emitted when Indexer set the controller account.")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetControllerAccount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" indexer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"removecontrolleraccount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#removecontrolleraccount"}},[t._v("#")]),t._v(" RemoveControllerAccount")]),t._v(" "),s("p",[t._v("Emitted when Indexer remove the controller account.")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RemoveControllerAccount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" indexer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"setcommissionrate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setcommissionrate"}},[t._v("#")]),t._v(" SetCommissionRate")]),t._v(" "),s("p",[t._v("Emitted when Indexer set their commissionRate.")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetCommissionRate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" indexer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("MODIFIER")]),t._v(" "),s("h3",{attrs:{id:"onlyindexer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onlyindexer"}},[t._v("#")]),t._v(" onlyIndexer")]),t._v(" "),s("p",[t._v("only indexer can call")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("modifier")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onlyIndexer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[t._v("#")]),t._v(" FUNCTIONS")]),t._v(" "),s("h3",{attrs:{id:"initialize"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initialize"}},[t._v("#")]),t._v(" initialize")]),t._v(" "),s("p",[t._v("Initialize the contract, setup the minimumStakingAmount.")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initialize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("contract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ISettings")]),t._v(" _settings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" _minimumStakingAmount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("_settings")]),t._v(" "),s("td",[t._v("contract ISettings")]),t._v(" "),s("td",[t._v("ISettings contract")])]),t._v(" "),s("tr",[s("td",[t._v("_minimumStakingAmount")]),t._v(" "),s("td",[t._v("uint256")]),t._v(" "),s("td")])])]),t._v(" "),s("h3",{attrs:{id:"setsettings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setsettings"}},[t._v("#")]),t._v(" setSettings")]),t._v(" "),s("p",[t._v("Update setting state.")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSettings")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("contract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ISettings")]),t._v(" _settings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("_settings")]),t._v(" "),s("td",[t._v("contract ISettings")]),t._v(" "),s("td",[t._v("ISettings contract")])])])]),t._v(" "),s("h3",{attrs:{id:"setminimumstakingamount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setminimumstakingamount"}},[t._v("#")]),t._v(" setminimumStakingAmount")]),t._v(" "),s("p",[t._v("set the Indexer minimum staking amount only by owner.")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setminimumStakingAmount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("amount")]),t._v(" "),s("td",[t._v("uint256")]),t._v(" "),s("td",[t._v("new minimumStakingAmount")])])])]),t._v(" "),s("h3",{attrs:{id:"registerindexer-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#registerindexer-2"}},[t._v("#")]),t._v(" registerIndexer")]),t._v(" "),s("p",[t._v("call to register to an Indexer, this function will interacte with staking contract to handle the Indexer first stake and commission rate setup.")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerIndexer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" _metadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" rate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("amount")]),t._v(" "),s("td",[t._v("uint256")]),t._v(" "),s("td",[t._v("Indexer init staked amount(must over minimumStakingAmount)")])]),t._v(" "),s("tr",[s("td",[t._v("_metadata")]),t._v(" "),s("td",[t._v("bytes32")]),t._v(" "),s("td",[t._v("Indexer metadata")])]),t._v(" "),s("tr",[s("td",[t._v("rate")]),t._v(" "),s("td",[t._v("uint256")]),t._v(" "),s("td",[t._v("Indexer init commission rate")])])])]),t._v(" "),s("h3",{attrs:{id:"unregisterindexer-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unregisterindexer-2"}},[t._v("#")]),t._v(" unregisterIndexer")]),t._v(" "),s("p",[t._v("Indexer call to unregister, need to check no running indexing projects on this Indexer from ProjectRegistry contract.\nThis function will call unstake for Indexer to make sure indexer unstaking all staked SQT Token after unregister.")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unregisterIndexer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v("\n")])])]),s("h3",{attrs:{id:"updatemetadata-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updatemetadata-2"}},[t._v("#")]),t._v(" updateMetadata")]),t._v(" "),s("p",[t._v("Indexer call to update their Metadata.")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateMetadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" _metadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("_metadata")]),t._v(" "),s("td",[t._v("bytes32")]),t._v(" "),s("td",[t._v("Indexer metadata to update")])])])]),t._v(" "),s("h3",{attrs:{id:"setcontrolleraccount-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setcontrolleraccount-2"}},[t._v("#")]),t._v(" setControllerAccount")]),t._v(" "),s("p",[t._v("Indexers call to set the controller account, since indexer only allowed to set one controller account, we need to remove the previous controller account.")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setControllerAccount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("controller")]),t._v(" "),s("td",[t._v("address")]),t._v(" "),s("td",[t._v("The address of controller account, indexer to set")])])])]),t._v(" "),s("h3",{attrs:{id:"removecontrolleraccount-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#removecontrolleraccount-2"}},[t._v("#")]),t._v(" removeControllerAccount")]),t._v(" "),s("p",[t._v("Indexers call to remove the controller account. need to remove both controllers and controllerToIndexer.")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeControllerAccount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v("\n")])])]),s("h3",{attrs:{id:"isindexer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isindexer"}},[t._v("#")]),t._v(" isIndexer")]),t._v(" "),s("p",[t._v("Determine the address is a indexer account")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isIndexer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" _address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("_address")]),t._v(" "),s("td",[t._v("address")]),t._v(" "),s("td",[t._v("The addree to determine is a indexer account")])])])]),t._v(" "),s("p",[t._v("Return:  bool -> Result of is the address is a indexer account")]),t._v(" "),s("h3",{attrs:{id:"getcontroller"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getcontroller"}},[t._v("#")]),t._v(" getController")]),t._v(" "),s("p",[t._v("Get indexer's controller account")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getController")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" indexer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("indexer")]),t._v(" "),s("td",[t._v("address")]),t._v(" "),s("td",[t._v("The indexer addree")])])])]),t._v(" "),s("p",[t._v("Return:  address -> Result of its controller")]),t._v(" "),s("p",[t._v("Set initial commissionRate only called by indexerRegistry contract,\nwhen indexer do registration. The commissionRate need to apply at once.")]),t._v(" "),s("h3",{attrs:{id:"setinitialcommissionrate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setinitialcommissionrate"}},[t._v("#")]),t._v(" setInitialCommissionRate")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInitialCommissionRate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" indexer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" rate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v("\n")])])]),s("p",[t._v("Set commissionRate only called by Indexer.\nThe commissionRate need to apply at two Eras after.")]),t._v(" "),s("h3",{attrs:{id:"setcommissionrate-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setcommissionrate-2"}},[t._v("#")]),t._v(" setCommissionRate")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCommissionRate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" rate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v("\n")])])]),s("h3",{attrs:{id:"getcommissionrate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getcommissionrate"}},[t._v("#")]),t._v(" getCommissionRate")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCommissionRate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" indexer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);