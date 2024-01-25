(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{310:function(t,a,s){"use strict";s.r(a);var e=s(13),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"eramanager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eramanager"}},[t._v("#")]),t._v(" EraManager")]),t._v(" "),a("p",[t._v("Produce epochs based on a period to coordinate contracts. Staking and reward distributing are running based on Eras")]),t._v(" "),a("h3",{attrs:{id:"states"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#states"}},[t._v("#")]),t._v(" STATES")]),t._v(" "),a("h3",{attrs:{id:"settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[t._v("#")]),t._v(" settings")]),t._v(" "),a("p",[t._v("ISettings contract which stores SubQuery network contracts address")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("contract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ISettings")]),t._v(" settings\n")])])]),a("h3",{attrs:{id:"eraperiod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eraperiod"}},[t._v("#")]),t._v(" eraPeriod")]),t._v(" "),a("p",[t._v("Era period in second")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" eraPeriod\n")])])]),a("h3",{attrs:{id:"eranumber"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eranumber"}},[t._v("#")]),t._v(" eraNumber")]),t._v(" "),a("p",[t._v("Current Era number")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" eraNumber\n")])])]),a("h3",{attrs:{id:"erastarttime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#erastarttime"}},[t._v("#")]),t._v(" eraStartTime")]),t._v(" "),a("p",[t._v("Current era start time in unix timestamp")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" eraStartTime\n")])])]),a("h3",{attrs:{id:"maintenance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maintenance"}},[t._v("#")]),t._v(" maintenance")]),t._v(" "),a("p",[t._v("Maintenance mode, when maintenance mode, only owner can update")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" maintenance\n")])])]),a("h3",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" EVENTS")]),t._v(" "),a("h3",{attrs:{id:"eraperiodupdate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eraperiodupdate"}},[t._v("#")]),t._v(" EraPeriodUpdate")]),t._v(" "),a("p",[t._v("Emitted when admin update the eraPeriod")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("EraPeriodUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" era"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" eraPeriod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"newerastart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#newerastart"}},[t._v("#")]),t._v(" NewEraStart")]),t._v(" "),a("p",[t._v("Emitted when new Era started")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewEraStart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" era"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" caller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[t._v("#")]),t._v(" FUNCTIONS")]),t._v(" "),a("h3",{attrs:{id:"initialize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initialize"}},[t._v("#")]),t._v(" initialize")]),t._v(" "),a("p",[t._v("Initialize the contract to start from Era 1")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initialize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("contract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ISettings")]),t._v(" _settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" _eraPeriod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("_settings")]),t._v(" "),a("td",[t._v("contract ISettings")]),t._v(" "),a("td",[t._v("ISettings contract")])]),t._v(" "),a("tr",[a("td",[t._v("_eraPeriod")]),t._v(" "),a("td",[t._v("uint256")]),t._v(" "),a("td",[t._v("eraPeriod in seconds")])])])]),t._v(" "),a("h3",{attrs:{id:"setsettings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setsettings"}},[t._v("#")]),t._v(" setSettings")]),t._v(" "),a("p",[t._v("Update setting state.")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSettings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("contract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ISettings")]),t._v(" _settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("_settings")]),t._v(" "),a("td",[t._v("contract ISettings")]),t._v(" "),a("td",[t._v("ISettings contract")])])])]),t._v(" "),a("h3",{attrs:{id:"enablemaintenance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enablemaintenance"}},[t._v("#")]),t._v(" enableMaintenance")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("enableMaintenance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v("\n")])])]),a("h3",{attrs:{id:"disablemaintenance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disablemaintenance"}},[t._v("#")]),t._v(" disableMaintenance")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("disableMaintenance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v("\n")])])]),a("h3",{attrs:{id:"startnewera"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#startnewera"}},[t._v("#")]),t._v(" startNewEra")]),t._v(" "),a("p",[t._v("Start a new era if time already passed")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("startNewEra")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v("\n")])])]),a("h3",{attrs:{id:"safeupdateandgetera"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#safeupdateandgetera"}},[t._v("#")]),t._v(" safeUpdateAndGetEra")]),t._v(" "),a("p",[t._v("Start a new era if time already passed and return the new Era number")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("safeUpdateAndGetEra")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Return:  uint256 -> eraNumber New Era number")]),t._v(" "),a("h3",{attrs:{id:"timestamptoeranumber"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timestamptoeranumber"}},[t._v("#")]),t._v(" timestampToEraNumber")]),t._v(" "),a("p",[t._v("Utility function to calculate the EraNumber from a given timestamp")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("timestampToEraNumber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" timestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("view")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("timestamp")]),t._v(" "),a("td",[t._v("uint256")]),t._v(" "),a("td",[t._v("A given timestamp")])])])]),t._v(" "),a("p",[t._v("Return:  uint256 -> eraNumber The calculated Era number")]),t._v(" "),a("h3",{attrs:{id:"updateeraperiod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updateeraperiod"}},[t._v("#")]),t._v(" updateEraPeriod")]),t._v(" "),a("p",[t._v("Update era period -  admin only")]),t._v(" "),a("div",{staticClass:"language-solidity extra-class"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateEraPeriod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" newEraPeriod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("newEraPeriod")]),t._v(" "),a("td",[t._v("uint256")]),t._v(" "),a("td",[t._v("New Era Period to update")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);