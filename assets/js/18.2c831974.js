(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{288:function(t,a,s){"use strict";s.r(a);var e=s(13),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"planmanager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#planmanager"}},[t._v("#")]),t._v(" PlanManager")]),t._v(" "),a("h3",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("The Plan Manager Contract tracks and maintains all the Plans and PlanTemplates.\nIt is the place Indexer create and publish a Plan for a specific deployment.\nAnd also the place Consumer can search and take these Plan.")]),t._v(" "),a("h3",{attrs:{id:"terminology"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#terminology"}},[t._v("#")]),t._v(" Terminology")]),t._v(" "),a("p",[t._v("Plan: Plan is created by an Indexer,  a service agreement will be created once a consumer accept a plan.\nPlanTemplate: PlanTemplate is create and maintenance by owner, we provide a set of PlanTemplates\nfor Indexer to create the Plan.")]),t._v(" "),a("h3",{attrs:{id:"states"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#states"}},[t._v("#")]),t._v(" STATES")]),t._v(" "),a("h3",{attrs:{id:"settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[t._v("#")]),t._v(" settings")]),t._v(" "),a("p",[t._v("ISettings contract which stores SubQuery network contracts address")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("contract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ISettings")]),t._v(" settings\n")])])]),a("h3",{attrs:{id:"limit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limit"}},[t._v("#")]),t._v(" limit")]),t._v(" "),a("p",[t._v("the limit of the plan that Indexer can create")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" limit\n")])])]),a("h3",{attrs:{id:"nexttemplateid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nexttemplateid"}},[t._v("#")]),t._v(" nextTemplateId")]),t._v(" "),a("p",[t._v("The id for next plan template")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" nextTemplateId\n")])])]),a("h3",{attrs:{id:"nextplanid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nextplanid"}},[t._v("#")]),t._v(" nextPlanId")]),t._v(" "),a("p",[t._v("The id for next plan, start from 1, PurchaseOfferMarket will use 0.")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" nextPlanId\n")])])]),a("h3",{attrs:{id:"templates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#templates"}},[t._v("#")]),t._v(" templates")]),t._v(" "),a("p",[t._v("TemplateId => Template")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PlanTemplate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" templates\n")])])]),a("h3",{attrs:{id:"plans"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plans"}},[t._v("#")]),t._v(" plans")]),t._v(" "),a("p",[t._v("PlanId => Plan")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Plan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" plans\n")])])]),a("h3",{attrs:{id:"limits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limits"}},[t._v("#")]),t._v(" limits")]),t._v(" "),a("p",[t._v("indexer => deploymentId => already plan number")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" limits\n")])])]),a("h3",{attrs:{id:"v2templates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2templates"}},[t._v("#")]),t._v(" v2templates")]),t._v(" "),a("p",[t._v("TemplateId => Template")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PlanTemplateV2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" v2templates\n")])])]),a("h3",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" EVENTS")]),t._v(" "),a("h3",{attrs:{id:"plantemplatecreated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plantemplatecreated"}},[t._v("#")]),t._v(" PlanTemplateCreated")]),t._v(" "),a("p",[t._v("Emitted when owner create a PlanTemplate.")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PlanTemplateCreated")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" templateId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"plantemplatemetadatachanged"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plantemplatemetadatachanged"}},[t._v("#")]),t._v(" PlanTemplateMetadataChanged")]),t._v(" "),a("p",[t._v("Emitted when owner change the Metadata of a PlanTemplate.")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PlanTemplateMetadataChanged")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" templateId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" metadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"plantemplatestatuschanged"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plantemplatestatuschanged"}},[t._v("#")]),t._v(" PlanTemplateStatusChanged")]),t._v(" "),a("p",[t._v("Emitted when owner change the status of a PlanTemplate. active or not")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PlanTemplateStatusChanged")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" templateId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" active"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"plancreated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plancreated"}},[t._v("#")]),t._v(" PlanCreated")]),t._v(" "),a("p",[t._v("Emitted when Indexer create a Plan.")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PlanCreated")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" planId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" creator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" deploymentId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" planTemplateId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" price"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"planremoved"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#planremoved"}},[t._v("#")]),t._v(" PlanRemoved")]),t._v(" "),a("p",[t._v("Emitted when Indexer remove a Plan.")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PlanRemoved")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" planId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[t._v("#")]),t._v(" FUNCTIONS")]),t._v(" "),a("h3",{attrs:{id:"initialize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initialize"}},[t._v("#")]),t._v(" initialize")]),t._v(" "),a("p",[t._v("Initialize this contract to set the limit be 5 which any indexer can create 5 plans.")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initialize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("contract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ISettings")]),t._v(" _settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v("\n")])])]),a("h3",{attrs:{id:"setsettings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setsettings"}},[t._v("#")]),t._v(" setSettings")]),t._v(" "),a("p",[t._v("Update setting state.")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSettings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("contract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ISettings")]),t._v(" _settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("_settings")]),t._v(" "),a("td",[t._v("contract ISettings")]),t._v(" "),a("td",[t._v("ISettings contract")])])])]),t._v(" "),a("h3",{attrs:{id:"setindexerplanlimit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setindexerplanlimit"}},[t._v("#")]),t._v(" setIndexerPlanLimit")]),t._v(" "),a("p",[t._v("Set the indexer plan limit.")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setIndexerPlanLimit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" _limit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("_limit")]),t._v(" "),a("td",[t._v("uint256")]),t._v(" "),a("td",[t._v("limit to set")])])])]),t._v(" "),a("h3",{attrs:{id:"createplantemplate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createplantemplate"}},[t._v("#")]),t._v(" createPlanTemplate")]),t._v(" "),a("p",[t._v("Allow admin to create a PlanTemplate.")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPlanTemplate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" period"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" dailyReqCap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" rateLimit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" priceToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" metadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("period")]),t._v(" "),a("td",[t._v("uint256")]),t._v(" "),a("td",[t._v("plan period")])]),t._v(" "),a("tr",[a("td",[t._v("dailyReqCap")]),t._v(" "),a("td",[t._v("uint256")]),t._v(" "),a("td",[t._v("daily request limit")])]),t._v(" "),a("tr",[a("td",[t._v("rateLimit")]),t._v(" "),a("td",[t._v("uint256")]),t._v(" "),a("td",[t._v("request rate limit")])]),t._v(" "),a("tr",[a("td",[t._v("priceToken")]),t._v(" "),a("td",[t._v("address")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("metadata")]),t._v(" "),a("td",[t._v("bytes32")]),t._v(" "),a("td",[t._v("plan metadata")])])])]),t._v(" "),a("h3",{attrs:{id:"updateplantemplatemetadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updateplantemplatemetadata"}},[t._v("#")]),t._v(" updatePlanTemplateMetadata")]),t._v(" "),a("p",[t._v("Allow admin to update the Metadata of a PlanTemplate.")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updatePlanTemplateMetadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" templateId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" metadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("templateId")]),t._v(" "),a("td",[t._v("uint256")]),t._v(" "),a("td",[t._v("plan template id")])]),t._v(" "),a("tr",[a("td",[t._v("metadata")]),t._v(" "),a("td",[t._v("bytes32")]),t._v(" "),a("td",[t._v("metadata to update")])])])]),t._v(" "),a("h3",{attrs:{id:"updateplantemplatestatus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updateplantemplatestatus"}},[t._v("#")]),t._v(" updatePlanTemplateStatus")]),t._v(" "),a("p",[t._v("Allow Owner to update the status of a PlanTemplate.")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updatePlanTemplateStatus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" templateId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" active"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("templateId")]),t._v(" "),a("td",[t._v("uint256")]),t._v(" "),a("td",[t._v("plan template id")])]),t._v(" "),a("tr",[a("td",[t._v("active")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[t._v("plan template active or not")])])])]),t._v(" "),a("h3",{attrs:{id:"createplan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createplan"}},[t._v("#")]),t._v(" createPlan")]),t._v(" "),a("p",[t._v("Allow Indexer to create a Plan basing on a specific plan template.")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPlan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" price"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" templateId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" deploymentId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("price")]),t._v(" "),a("td",[t._v("uint256")]),t._v(" "),a("td",[t._v("plan price")])]),t._v(" "),a("tr",[a("td",[t._v("templateId")]),t._v(" "),a("td",[t._v("uint256")]),t._v(" "),a("td",[t._v("plan template id")])]),t._v(" "),a("tr",[a("td",[t._v("deploymentId")]),t._v(" "),a("td",[t._v("bytes32")]),t._v(" "),a("td",[t._v("project deployment Id on plan")])])])]),t._v(" "),a("h3",{attrs:{id:"removeplan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#removeplan"}},[t._v("#")]),t._v(" removePlan")]),t._v(" "),a("p",[t._v("Allow Indexer to remove actived Plan.")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removePlan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" planId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("planId")]),t._v(" "),a("td",[t._v("uint256")]),t._v(" "),a("td",[t._v("Plan id to remove")])])])]),t._v(" "),a("h3",{attrs:{id:"acceptplan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acceptplan"}},[t._v("#")]),t._v(" acceptPlan")]),t._v(" "),a("p",[t._v("Allow Consumer to accept a plan created by an indexer.\nConsumer transfer token to ServiceAgreementRegistry contract and a service agreement will be created when they accept the plan.")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("acceptPlan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" planId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" deploymentId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("planId")]),t._v(" "),a("td",[t._v("uint256")]),t._v(" "),a("td",[t._v("plan Id to accept")])]),t._v(" "),a("tr",[a("td",[t._v("deploymentId")]),t._v(" "),a("td",[t._v("bytes32")]),t._v(" "),a("td",[t._v("project deployment Id")])])])]),t._v(" "),a("h3",{attrs:{id:"getplan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getplan"}},[t._v("#")]),t._v(" getPlan")]),t._v(" "),a("p",[t._v("Get a specific plan")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPlan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" planId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("view")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Plan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("planId")]),t._v(" "),a("td",[t._v("uint256")]),t._v(" "),a("td",[t._v("plan id")])])])]),t._v(" "),a("h3",{attrs:{id:"getlimits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getlimits"}},[t._v("#")]),t._v(" getLimits")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLimits")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" indexer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" deploymentId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("view")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"getplantemplate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getplantemplate"}},[t._v("#")]),t._v(" getPlanTemplate")]),t._v(" "),a("p",[t._v("Get a specific plan templates")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPlanTemplate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" templateId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("view")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PlanTemplateV2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("templateId")]),t._v(" "),a("td",[t._v("uint256")]),t._v(" "),a("td",[t._v("plan template id")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);