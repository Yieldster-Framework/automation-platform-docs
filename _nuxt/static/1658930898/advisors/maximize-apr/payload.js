__NUXT_JSONP__("/advisors/maximize-apr", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){return {data:[{document:{slug:"maximize-apr",description:"",title:"Maximize APR",position:21,category:l,toc:[{id:m,depth:2,text:n}],body:{type:"root",children:[{type:a,tag:d,props:{},children:[{type:b,value:"Description coming soon."}]},{type:b,value:c},{type:a,tag:"h2",props:{id:m},children:[{type:a,tag:e,props:{ariaHidden:f,href:"#settings",tabIndex:g},children:[{type:a,tag:h,props:{className:[i,j]},children:[]}]},{type:b,value:n}]},{type:b,value:c},{type:a,tag:"img",props:{src:".\u002Fscreenshots\u002Fcreate-vault-advisor-settings-maximize-apr.png",width:520,height:684,alt:"Create a vault"},children:[]},{type:b,value:c},{type:a,tag:k,props:{id:"email"},children:[{type:a,tag:e,props:{ariaHidden:f,href:"#email",tabIndex:g},children:[{type:a,tag:h,props:{className:[i,j]},children:[]}]},{type:b,value:"Email"}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"The advisor will be notified via email if an error occurs during advisor execution."}]},{type:b,value:c},{type:a,tag:k,props:{id:"minimum-transaction-size-tmin"},children:[{type:a,tag:e,props:{ariaHidden:f,href:"#minimum-transaction-size-tmin",tabIndex:g},children:[{type:a,tag:h,props:{className:[i,j]},children:[]}]},{type:b,value:"Minimum Transaction Size (Tmin)"}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"The vault will only transact if the value of available assets for a transaction exceeds the minimum transaction size. This setting is used to reduce the effect gas costs have on profitability of the vault, especially for smaller investment amounts"}]},{type:b,value:c},{type:a,tag:k,props:{id:"monitoring-frequency-minutes"},children:[{type:a,tag:e,props:{ariaHidden:f,href:"#monitoring-frequency-minutes",tabIndex:g},children:[{type:a,tag:h,props:{className:[i,j]},children:[]}]},{type:b,value:"Monitoring Frequency (minutes)"}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"Determines how often the advisor will apply the strategy against the assets in the vault. In general daily should be a good value, but for larger vaults shorter timeframes are usually more beneficial."}]},{type:b,value:c},{type:a,tag:k,props:{id:"estimated-gas-cost"},children:[{type:a,tag:e,props:{ariaHidden:f,href:"#estimated-gas-cost",tabIndex:g},children:[{type:a,tag:h,props:{className:[i,j]},children:[]}]},{type:b,value:"Estimated Gas Cost"}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"To determine whether switching between protocols is profitable the Maximize APR strategy takes estimated gas costs into account. Higher estimated gas costs will reduce the number of transactions in your vault and will thereby improve profitability."}]},{type:b,value:c},{type:a,tag:k,props:{id:"look-forward-period-days"},children:[{type:a,tag:e,props:{ariaHidden:f,href:"#look-forward-period-days",tabIndex:g},children:[{type:a,tag:h,props:{className:[i,j]},children:[]}]},{type:b,value:"Look forward period (Days)"}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"This is the timeframe used to calculate the total return that could be earned during the look forward period. Maximize APR only switches protocols if the expected earnings of the new protocol during the Look Forward Period exceeds estimated gas costs + slippage + Transaction Fees (not gas)"}]},{type:b,value:c},{type:a,tag:k,props:{id:"forced-rebalance"},children:[{type:a,tag:e,props:{ariaHidden:f,href:"#forced-rebalance",tabIndex:g},children:[{type:a,tag:h,props:{className:[i,j]},children:[]}]},{type:b,value:"Forced Rebalance"}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"If forced rebalance is selected the vault will rebalance your positions even if the minimum transaction size is not reached for any of your positions. This can have a severely negative impact on performance due to gas costs and should only be used for vaults carrying larger balances."}]},{type:b,value:c},{type:a,tag:k,props:{id:"protocols"},children:[{type:a,tag:e,props:{ariaHidden:f,href:"#protocols",tabIndex:g},children:[{type:a,tag:h,props:{className:[i,j]},children:[]}]},{type:b,value:"Protocols"}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"Select the protocols, from which the advisor will choose the protocol with the highest APR and invest the vault assets in that protocol."}]}]},dir:"\u002Fen\u002Fadvisors",path:"\u002Fen\u002Fadvisors\u002Fmaximize-apr",extension:".md",createdAt:o,updatedAt:o,to:"\u002Fadvisors\u002Fmaximize-apr"},prev:{title:l,path:"\u002Fen\u002Fadvisors\u002Fadvisors",to:"\u002Fadvisors\u002Fadvisors"},next:{title:"Portfolio Allocator",path:"\u002Fen\u002Fadvisors\u002Fportfolio-allocator",to:"\u002Fadvisors\u002Fportfolio-allocator"}}],fetch:{},mutations:[]}}("element","text","\n","p","a","true",-1,"span","icon","icon-link","h4","Advisors","settings","Settings","2022-07-27T14:07:11.159Z")));