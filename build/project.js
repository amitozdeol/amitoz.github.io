!function(t){var e={};function n(p){if(e[p])return e[p].exports;var o=e[p]={i:p,l:!1,exports:{}};return t[p].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,p){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:p})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var p=Object.create(null);if(n.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(p,o,function(e){return t[e]}.bind(null,o));return p},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/Users/adeol/www/amitozdeol.github.io/build",n(n.s=1)}([,function(t,e){const n=t=>document.querySelector(t),p=[{id:1,question:"What type of Jeans are you shopping for?",catgeory:"jeans",answers:[{id:1,answer:"Skinny",points:[{product_type:1,points:1},{product_type:2,points:0},{product_type:3,points:-1},{product_type:4,points:1},{product_type:5,points:1},{product_type:6,points:-1}]},{id:2,answer:"Super Skinny",points:[{product_type:1,points:-1},{product_type:2,points:1},{product_type:3,points:0},{product_type:4,points:0},{product_type:5,points:1},{product_type:6,points:-1}]},{id:3,answer:"Straight",points:[{product_type:1,points:1},{product_type:2,points:0},{product_type:3,points:-1},{product_type:4,points:1},{product_type:5,points:1},{product_type:6,points:1}]}]},{id:2,question:"Preferred Rise?",catgeory:"jeans",answers:[{id:1,answer:"High",points:[{product_type:1,points:1},{product_type:2,points:0},{product_type:3,points:-1},{product_type:4,points:1},{product_type:5,points:1},{product_type:6,points:-1}]},{id:2,answer:"Mid",points:[{product_type:1,points:0},{product_type:2,points:1},{product_type:3,points:0},{product_type:4,points:1},{product_type:5,points:0},{product_type:6,points:0}]},{id:3,answer:"Low",points:[{product_type:1,points:1},{product_type:2,points:0},{product_type:3,points:-1},{product_type:4,points:1},{product_type:5,points:1},{product_type:6,points:1}]}]},{id:3,question:"Preferred Rise?",catgeory:"jeans",answers:[{id:1,answer:"High",points:[{product_type:1,points:1},{product_type:2,points:0},{product_type:3,points:-1},{product_type:4,points:1},{product_type:5,points:1},{product_type:6,points:-1}]},{id:2,answer:"Mid",points:[{product_type:1,points:0},{product_type:2,points:1},{product_type:3,points:0},{product_type:4,points:1},{product_type:5,points:0},{product_type:6,points:0}]},{id:3,answer:"Low",points:[{product_type:1,points:1},{product_type:2,points:0},{product_type:3,points:-1},{product_type:4,points:1},{product_type:5,points:1},{product_type:6,points:1}]}]}];let o=[{id:1,name:"jeans1",product_types:[{id:1,name:"Skinny",sum:0},{id:2,name:"Super Skinny",sum:0},{id:3,name:"Straight",sum:0},{id:4,name:"Bootcut",sum:0},{id:5,name:"Boyfriend",sum:0},{id:6,name:"Cropped",sum:0}]},{id:2,name:"jeans",product_types:[{id:1,name:"Skinny",sum:0},{id:2,name:"Super Skinny",sum:0},{id:3,name:"Straight",sum:0},{id:4,name:"Bootcut",sum:0},{id:5,name:"Boyfriend",sum:0},{id:6,name:"Cropped",sum:0}]}];function i(t){if(p.length<=t)return;let e=function(t,e){return`<div id="question${t}" class="question"><h4>${e}</h4>`}(t,p[t].question),o="",i=t==p.length-1;p[t].answers.map((e,n)=>{o+=function(t,e,n){return`<div class="form-check">\n\t\t\t\t  <input class="form-check-input" type="radio" name="answer${t}" value='${n.answer}' data-index='${e}' required>\n\t\t\t\t  <label class="form-check-label">\n\t\t\t\t  ${n.answer}\n\t\t\t\t  </label>\n\t\t\t  </div>`}(t,n,e)}),e+=o+`<button type='button' class='btn btn-primary submitButton' data-qindex='${t}' data-last=${i}>\n\t  ${i?"Submit":"Next"}\n\t  </button>\n\t</div>`,n(".quiz").innerHTML+=e}i(0),n(".quiz").addEventListener("click",(function(t){if(!t.target.matches(".submitButton"))return;let e=t.target.dataset.qindex,r="true"===t.target.dataset.last,s=n(`input[name="answer${e}"]:checked`);if(!s.value)return;const u=s.dataset.index,d=p[e],c=d.answers[u],a=o.filter(t=>t.name===d.catgeory)[0];(function(t,e){t.map(t=>{e.product_types.filter(e=>e.id===t.product_type)[0].sum+=t.points})})(c.points,a),n(`#question${e}`).classList.add("fade"),r?function(t){let e=t.reduce((t,e)=>e.sum>t?e.sum:t,t[0]);n(".quiz").innerHTML+=`<h2>Recommendation ${e.name}</h2>`}(a.product_types):i(++e)}))}]);