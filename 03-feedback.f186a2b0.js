var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return c.Date.now()};function g(e,t,n){var r,o,i,a,f,u,c=0,l=!1,g=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function O(e){return c=e,f=setTimeout(h,t),l?b(e):a}function S(e){var n=e-u;return void 0===u||n>=t||n<0||g&&e-c>=i}function h(){var e=d();if(S(e))return j(e);f=setTimeout(h,function(e){var n=t-(e-u);return g?m(n,i-(e-c)):n}(e))}function j(e){return f=void 0,y&&r?b(e):(r=o=void 0,a)}function w(){var e=d(),n=S(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return O(u);if(g)return f=setTimeout(h,t),b(u)}return void 0===f&&(f=setTimeout(h,t)),a}return t=v(t)||0,p(n)&&(l=!!n.leading,i=(g="maxWait"in n)?s(v(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},w.flush=function(){return void 0===f?a:j(d())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=o.test(e);return f||i.test(e)?a(e.slice(2),f?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),b=document.querySelector("input[name = email]"),O=document.querySelector("textarea[name = message]");let S={};!function(){if(localStorage.getItem("feedback-form-state")){const e=JSON.parse(localStorage.getItem("feedback-form-state"));S={...e},b.value=e.email?e.email:"",O.value=e.message?e.message:""}}(),y.addEventListener("input",t((function(e){S[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500)),y.addEventListener("submit",(function(e){e.preventDefault();const t={...JSON.parse(localStorage.getItem("feedback-form-state"))};if(0===Object.keys(t).length)return alert("Поля вводу повинні бути заповненими!");if(!t.hasOwnProperty("email")||!t.hasOwnProperty("message"))return alert("Усі поля мають бути заповнені!");console.log(t),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.f186a2b0.js.map
