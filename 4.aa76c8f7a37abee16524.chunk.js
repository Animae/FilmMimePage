webpackJsonp([4],{"./app/containers/ContactPage/index.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{dispatch:e}}Object.defineProperty(t,"__esModule",{value:!0});var c=n("./node_modules/react/react.js"),s=n.n(c),u=n("./node_modules/react-redux/lib/index.js"),l=(n.n(u),n("./node_modules/react-intl/lib/index.es.js")),f=n("./node_modules/reselect/es/index.js"),p=n("./app/containers/ContactPage/selectors.js"),d=n("./app/containers/ContactPage/messages.js");n.d(t,"ContactPage",function(){return g});var b=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var c in a)void 0===n[c]&&(n[c]=a[c]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+3];n.children=s}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),g=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),y(t,[{key:"render",value:function(){return b("div",{},void 0,s.a.createElement(l.c,d.a.header))}}]),t}(s.a.PureComponent),h=n.i(f.b)({ContactPage:n.i(p.a)()});t.default=n.i(u.connect)(h,i)(g)},"./app/containers/ContactPage/messages.js":function(e,t,n){"use strict";var r=n("./node_modules/react-intl/lib/index.es.js");t.a=n.i(r.d)({header:{id:"app.containers.ContactPage.header",defaultMessage:"This is ContactPage container !"}})},"./app/containers/ContactPage/selectors.js":function(e,t,n){"use strict";var r=n("./node_modules/reselect/es/index.js"),o=function(){return function(e){return e.get("contactPage")}},a=function(){return n.i(r.a)(o(),function(e){return e.toJS()})};t.a=a}});