(this["webpackJsonpcrypto-marketplace"]=this["webpackJsonpcrypto-marketplace"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),i=c.n(s),a=c(7),r=c.n(a),l=(c(15),c(9)),o=c(6),j=c.n(o),d=c(8),u=c(2),h=(c(17),c(18),function(e){var t=e.favoriteCoins;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"Favourite Coins"}),0===t.length?Object(n.jsx)("h2",{children:"No Favourite Coins Added"}):Object(n.jsx)("div",{className:"fav-coin-list container",children:t.map((function(e,t){return Object(n.jsxs)("div",{className:"fav-coin-padding",children:[" ",Object(n.jsx)("div",{className:"fav-coin",children:Object(n.jsxs)("span",{children:[Object(n.jsx)("img",{className:"fav-coin-image",width:"19px",height:"19px",src:e.coinImage,alt:"coin logo"}),Object(n.jsx)("p",{className:"coin-full-name",children:e.coinName}),Object(n.jsx)("p",{className:"coin-ticker",children:e.coinSymbol})]})})]},t)}))})]})}),b=(c(19),function(e){return Object(n.jsx)("nav",{className:"nav-header",children:Object(n.jsx)("section",{className:"favourite-coins container",children:Object(n.jsx)(h,{favoriteCoins:e.favoriteCoins,coins:e.coins})})})}),O=(c(20),function(e){var t=e.onClick,c=e.coins;return Object(n.jsxs)("section",{className:"all-coins container",children:[Object(n.jsx)("h3",{children:"All coins"}),Object(n.jsx)("div",{className:"coin-chart",children:Object(n.jsxs)("ul",{className:"coin-list",children:[Object(n.jsxs)("li",{className:"coin-header-name",children:[Object(n.jsx)("h4",{className:"coin-name",children:"Name"}),Object(n.jsx)("h4",{className:"additional-details",children:"Total Supply"}),Object(n.jsx)("h4",{className:"additional-details",children:"Market Cap"}),Object(n.jsx)("h4",{children:"Current Price"})]}),c&&c.map((function(e){var c=e.id,s=e.name,i=e.total_supply,a=e.market_cap,r=e.current_price;return Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{className:"coin-name",onClick:t,children:s||"N/A"}),Object(n.jsx)("span",{className:"additional-details",children:i||"N/A"}),Object(n.jsx)("span",{className:"additional-details",children:a||"N/A"}),Object(n.jsxs)("span",{children:["$",r||"N/A"]})]},c)}))]})})]})}),p=(c(21),function(e){var t=e.dropDownName,c=e.setCurrency,i=e.coins,a=e.tradeCurrency,r=e.id,l=e.onChange,o=e.value,j=Object(s.useState)(!1),d=Object(u.a)(j,2),h=d[0],b=d[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{id:r,className:"drop-down-menu",onClick:function(e){e.preventDefault(),b(!h)},children:["select-trade-currency"===r&&Object(n.jsx)("input",{value:a,onChange:l,placeholder:"Select Trade Currency"}),"amount"===r&&Object(n.jsx)("input",{value:o,onChange:l,placeholder:"Amount"}),Object(n.jsxs)("svg",{width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("g",{clipPath:"url(#clip0)",children:Object(n.jsx)("path",{d:"M4.67824 3.15287L6.51199 1.31758C6.88815 0.94111 7.2643 0.56464 7.64045 0.188169C7.78151 -6.58743e-05 8.04012 -0.0235953 8.2282 0.117581C8.25171 0.141111 8.27522 0.16464 8.29872 0.188169C8.58084 0.470522 8.86296 0.752875 9.14507 1.03523C9.33315 1.1764 9.35666 1.43523 9.2156 1.62346C9.2156 1.62346 9.19209 1.64699 9.16858 1.67052L4.98386 5.83523C4.86631 6.02346 4.60771 6.07052 4.44314 5.95287C4.39612 5.92934 4.37261 5.88229 4.32559 5.83523C2.93852 4.44699 1.55145 3.05876 0.164383 1.67052C-0.0236944 1.52935 -0.047204 1.27052 0.0938539 1.10582C0.117364 1.08229 0.140873 1.05876 0.164383 1.03523C0.446499 0.729346 0.705105 0.470522 0.987221 0.188169C1.26934 -0.0941835 1.45741 -0.0471247 1.69251 0.188169C2.6329 1.10582 3.54977 2.04699 4.49016 2.98817C4.53718 3.03523 4.60771 3.08229 4.67824 3.15287Z",fill:"black"})}),Object(n.jsx)("defs",{children:Object(n.jsx)("clipPath",{id:"clip0",children:Object(n.jsx)("rect",{width:"9.33333",height:"6",fill:"white"})})})]})]}),"select-trade-currency"===r&&Object(n.jsx)("div",{className:"drop-down-list-items".concat(h?" visible":""),children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:t}),"Select Trade Currency"===t&&i.map((function(e){return Object(n.jsx)("li",{onClick:c,children:e.name},e.id)}))]})})]})}),m=(c(22),function(e){var t=e.selectedCoin,c=e.coinDetails,i=e.coins,a=e.setFavorites,r=Object(s.useState)(""),l=Object(u.a)(r,2),o=l[0],j=l[1],d=Object(s.useState)(""),h=Object(u.a)(d,2),b=h[0],O=h[1],m=Object(s.useState)(""),x=Object(u.a)(m,2),f=x[0],C=x[1],v=Object(s.useState)(null),g=Object(u.a)(v,2),N=g[0],y=g[1],w=function(e){e.preventDefault(),"Amount"===e.target.placeholder&&O(e.target.value)},S=function(e){y(e.target.innerText.toLowerCase())};return Object(n.jsxs)("section",{className:"selected-coin container",children:[!t&&Object(n.jsx)("h5",{children:"Select a coin to view more information"}),t&&c&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"selected-coin-details",children:[Object(n.jsxs)("span",{className:"selected-coin-header",children:[Object(n.jsx)("img",{src:"".concat(c.image),alt:"coin logo"}),Object(n.jsx)("h4",{children:c.name})]}),Object(n.jsxs)("ul",{className:"details-list",children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{children:"Current Price: "}),"$",c.current_price]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{children:"Market Cap: "}),c.market_cap]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{children:"Low 24h: "}),c.low_24h]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{children:"High 24h: "}),c.high_24h]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{children:"Circulating Supply: "}),c.circulating_supply.toFixed(0)]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{children:"Total Supply: "}),c.total_supply]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{children:"Market Cap Rank: "}),c.market_cap_rank]})]}),Object(n.jsxs)("div",{id:"add-to-favourites-button",onClick:function(){return a(c.image,c.name,c.symbol)},children:[Object(n.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{d:"M7.8 0C3.5 0 0 3.5 0 7.8C0 12.1 3.5 15.6 7.8 15.6C12.1 15.6 15.6 12.1 15.6 7.8C15.6 3.5 12 0 7.8 0ZM7.8 14C4.4 14 1.6 11.2 1.6 7.8C1.6 4.4 4.4 1.6 7.8 1.6C11.2 1.6 14 4.3 14 7.8C14 11.3 11.2 14 7.8 14ZM11.8 7.8C11.8 8.2 11.5 8.6 11 8.6H8.5V11C8.5 11.4 8.2 11.8 7.7 11.8C7.2 11.8 7 11.5 7 11V8.5H4.5C4 8.5 3.7 8.2 3.7 7.8C3.7 7.4 4 7 4.5 7H7V4.5C7 4 7.3 3.7 7.8 3.7C8.3 3.7 8.5 4 8.5 4.5V7H11C11.5 7 11.8 7.3 11.8 7.8Z",fill:"#4A90E2"})}),Object(n.jsx)("p",{children:"Add To Favourites"})]})]}),Object(n.jsxs)("div",{className:"trade-options",children:[Object(n.jsxs)("div",{className:"buy-sell-buttons",children:[Object(n.jsx)("button",{className:"buy"===N?"selected":"",onClick:S,children:"Buy"}),Object(n.jsx)("button",{className:"sell"===N?"selected":"",onClick:S,children:"Sell"})]}),Object(n.jsx)("div",{className:"trade-selectors",children:Object(n.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!t||!o||!b)return C(N?"Please make sure a trade currency is selected with an amount.":"Please choose an option to buy or sell your coins.");var c=i.filter((function(e){return e.name.toUpperCase()===t}))[0],n=i.filter((function(e){return e.name===o}))[0],s=n.current_price*b/c.current_price,a=n.current_price/c.current_price*b;if(b&&n&&s&&c)if("buy"===N){var r="You have Purchased ".concat(b," ").concat(n.symbol.toUpperCase()," for ").concat(s," ").concat(c.symbol.toUpperCase());C(r)}else if("sell"===N){var l="You have Sold ".concat(b," ").concat(n.symbol.toUpperCase()," for ").concat(a," ").concat(c.symbol.toUpperCase());C(l)}},children:[Object(n.jsx)(p,{id:"select-trade-currency",dropDownName:"Select Trade Currency",coins:i,onChange:w,setCurrency:function(e){j(e.target.innerText)},tradeCurrency:o}),Object(n.jsx)(p,{id:"amount",dropDownName:"Amount",coins:i,onChange:w,value:b,selectedCoin:t}),Object(n.jsx)("button",{children:"Submit"}),Object(n.jsx)("p",{className:"success-message",children:f})]})})]})]})]})});var x=function(){var e=[];localStorage.getItem("favoriteCoins")&&(e=JSON.parse(localStorage.getItem("favoriteCoins"))[0]);var t=Object(s.useState)(),c=Object(u.a)(t,2),i=c[0],a=c[1],r=Object(s.useState)(),o=Object(u.a)(r,2),h=o[0],p=o[1],x=Object(s.useState)(),f=Object(u.a)(x,2),C=f[0],v=f[1],g=Object(s.useState)(e),N=Object(u.a)(g,2),y=N[0],w=N[1],S=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad").then((function(e){return e.json()})).then((function(e){return v(e.map((function(e){return e})))})).catch((function(){return console.error("error with fetching coins")}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){S()}),[]),Object(s.useEffect)((function(){C&&p(C.filter((function(e){return e.name.toLowerCase()===i.toLowerCase()}))[0])}),[i]),Object(s.useEffect)((function(){localStorage.setItem("favoriteCoins",JSON.stringify([y]))}),[y]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b,{favoriteCoins:y}),Object(n.jsx)(O,{onClick:function(e){e.preventDefault(),a(e.target.innerText)},coins:C}),Object(n.jsx)(m,{selectedCoin:i,coins:C,coinDetails:h,setFavorites:function(e,t,c){w([].concat(Object(l.a)(y),[{coinImage:e,coinName:t,coinSymbol:c}]))}})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,24)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root")),f()}],[[23,1,2]]]);
//# sourceMappingURL=main.66282c00.chunk.js.map