! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("VueCardSlide", [], t) : "object" == typeof exports ? exports.VueCardSlide = t() : e.VueCardSlide = t() }("undefined" != typeof self ? self : this, function() { return function(e) {
    function t(r) { if (n[r]) return n[r].exports; var o = n[r] = { i: r, l: !1, exports: {} }; return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports } var n = {}; return t.m = e, t.c = n, t.d = function(e, n, r) { t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r }) }, t.n = function(e) { var n = e && e.__esModule ? function() { return e.default } : function() { return e }; return t.d(n, "a", n), n }, t.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, t.p = "/dist/", t(t.s = 1) }([function(e, t, n) { "use strict";! function(e, t) {
      function n() { t.documentElement.style.fontSize = 20 * t.documentElement.clientWidth / 375 + "px" } n(), e.onresize = n }(window, document), t.a = { name: "vue-card-slide", data: function() { return { show: !0, show2: !0, show3: !0, showFeedBack: !1, showAfter: !1, num: 0, direct: 0, flag: "on", times: 0, showFeedBackFlag: 0, img: [n(9), n(10), n(11)] } }, computed: { direction: function() { return 0 == this.direct ? "slide-fade2" : "slide-fade1" } }, mounted: function() {
        function e(e) { var n = document.getElementById(e);
          n.addEventListener("touchstart", function(e) { if (1 == e.targetTouches.length) { var r = function(e) { document.documentElement.style.touchAction = "none"; var t = e.targetTouches[0],
                    r = t.pageX - s,
                    o = t.pageY - i;
                  n.style.left = r + "px", n.style.top = o + "px" },
                o = function e(o) { n.offsetLeft < 0 ? t.success(0) : n.offsetLeft > 0 ? t.success(1) : 0 !== n.offsetTop && t.success(0), document.documentElement.style.touchAction = "auto", n.removeEventListener("touchmove", r), n.removeEventListener("touchend", e) },
                a = e.targetTouches[0],
                s = a.pageX - n.offsetLeft,
                i = a.pageY - n.offsetTop;
              n.addEventListener("touchmove", r), n.addEventListener("touchend", o) } }, !1) } e("box"), e("box2"), e("box3"); var t = this }, methods: { success: function(e) { var t = this; "off" != this.flag && (1 == e ? (this.direct = 1, this.label_result = 0) : (this.direct = 0, this.label_result = 1), this.flag, this.flag = "off", this.num += 1, this.num % 3 == 1 && (this.show = !1, setTimeout(function() { t.$refs.contentItem2.style.transform = "scale(1)", t.$refs.contentItem2.style.zIndex = 16, t.$refs.contentItem3.style.transform = "scale(0.98)", t.$refs.contentItem3.style.zIndex = 10; for (var e = .18, n = 0; n < 200; n++) setTimeout(function() { e -= .001, t.$refs.contentItem2.style.top = e + "rem" }, n); for (var r = .38, n = 0; n < 200; n++) setTimeout(function() { r -= .001, t.$refs.contentItem3.style.top = r + "rem" }, n);
            t.$refs.contentItem.style.top = "0.38rem", t.$refs.contentItem.style.left = "0rem", t.$refs.contentItem.style.transform = "scale(0.96)", t.$refs.contentItem.style.zIndex = 5, t.show = !0, t.flag = "on" }, 400)), this.num % 3 == 2 && (this.show2 = !1, setTimeout(function() { t.$refs.contentItem3.style.transform = "scale(1)", t.$refs.contentItem3.style.zIndex = 15; for (var e = .18, n = 0; n < 200; n++) setTimeout(function() { e -= .001, t.$refs.contentItem3.style.top = e + "rem" }, n), t.$refs.contentItem.style.transform = "scale(0.98)", t.$refs.contentItem.style.zIndex = 10, t.$refs.contentItem.style.top = "0.18rem", t.$refs.contentItem2.style.top = "0.38rem", t.$refs.contentItem2.style.left = "0rem", t.$refs.contentItem2.style.transform = "scale(0.96)", t.$refs.contentItem2.style.zIndex = 5, t.show2 = !0, t.flag = "on" }, 400)), this.num % 3 == 0 && (this.show3 = !1, setTimeout(function() { t.$refs.contentItem.style.transform = "scale(1)", t.$refs.contentItem.style.zIndex = 15; for (var e = .18, n = 0; n < 200; n++) setTimeout(function() { e -= .001, t.$refs.contentItem.style.top = e + "rem" }, n), t.$refs.contentItem2.style.transform = "scale(0.98)", t.$refs.contentItem2.style.zIndex = 10, t.$refs.contentItem2.style.top = "0.18rem", t.$refs.contentItem3.style.top = "0.38rem", t.$refs.contentItem3.style.left = "0rem", t.$refs.contentItem3.style.transform = "scale(0.96)", t.$refs.contentItem3.style.zIndex = 5, t.show3 = !0, t.flag = "on" }, 400))) }, error: function() { this.direct = 1, this.success(1) }, onSwipeLeft: function() { this.success() }, onSwipeRight: function() { this.error() } } } }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(2),
      o = { install: function(e) { "undefined" != typeof window && window.Vue && window.Vue.use(o), e.component(r.a.name, r.a) } };
    t.default = o }, function(e, t, n) { "use strict";

    function r(e) { n(3) } var o = n(0),
      a = n(12),
      s = n(8),
      i = r,
      c = s(o.a, a.a, !1, i, "data-v-50eac6a8", null);
    t.a = c.exports }, function(e, t, n) { var r = n(4); "string" == typeof r && (r = [
      [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    n(6)("742241ff", r, !0, {}) }, function(e, t, n) { t = e.exports = n(5)(!1), t.push([e.i, ".wrap .bg[data-v-50eac6a8]{margin:0 auto}.wrap .bg .content[data-v-50eac6a8]{margin:0 auto;position:relative;height:14.5rem}.wrap .bg .contentItem[data-v-50eac6a8]{-o-transform:translateZ(0);-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000;-moz-perspective:1000;-ms-perspective:1000;perspective:1000;-webkit-transform:translateZ(0);-moz-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);box-shadow:0 1px 5px gray;position:absolute;z-index:15;box-sizing:border-box;width:16.75rem;height:14.5rem;background:#fff;border-radius:.25rem;transform-origin:50% 100%;overflow:hidden}.wrap .bg .contentItem .item[data-v-50eac6a8]{margin:.5rem;box-sizing:border-box;width:15.75rem;height:13.5rem;background-size:cover}.wrap .bg .middle2[data-v-50eac6a8]{z-index:10;top:.18rem;transform:scale(.98)}.wrap .bg .bottom3[data-v-50eac6a8]{z-index:5;top:.38rem;transform:scale(.96)}.wrap .bg .contentItem2[data-v-50eac6a8]{box-shadow:0 1px 3px gray;transform:scale(.98);position:absolute;top:-.45rem;z-index:5;transform-origin:50% 100%;box-sizing:border-box;margin-top:.65rem;margin-bottom:1.4rem;width:16.75rem;background:#fff;height:14.5rem;border-radius:.25rem;padding:.5rem}.wrap .bg .contentItem2 .item2[data-v-50eac6a8]{position:absolute;width:15.75rem;height:13.5rem;background-size:cover}.wrap .bg .contentItem3[data-v-50eac6a8]{transform:scale(.96);position:absolute;top:-.25rem;z-index:0;transform-origin:50% 100%;box-sizing:border-box;margin-top:.65rem;margin-bottom:1.4rem;width:16.75rem;background:#fff;height:14.5rem;border-radius:.25rem;padding:.5rem}.wrap .bg .contentItem3 .item3[data-v-50eac6a8]{position:absolute;width:15.75rem;height:13.5rem;background-size:cover}.wrap .bg .judge[data-v-50eac6a8]{margin-top:3rem;margin-bottom:2rem;display:flex;justify-content:center}.wrap .bg .judge .circle[data-v-50eac6a8]{display:inline-block;index:1;background:#fff;height:3rem;width:3rem;border-radius:100%}.wrap .bg .judge .circle span[data-v-50eac6a8]{color:#1d3949;font-size:1rem;line-height:3rem}.wrap .bg .judge .cirMargin[data-v-50eac6a8]{margin-right:2.9rem}@keyframes swipe-data-v-50eac6a8{0%{transform:translateX(10px) rotate(0)}to{transform:translateX(-18.75rem) rotate(-90deg)}}.slide-fade-leave-active[data-v-50eac6a8]{transition:all 2.2s ease-out}.slide-fade-enter[data-v-50eac6a8],.slide-fade-leave-to[data-v-50eac6a8]{transform:translateX(-18.75rem) rotate(-90deg);opacity:0}.slide-fade1-leave-active[data-v-50eac6a8]{animation-name:fold-out1-data-v-50eac6a8;animation-duration:.7s;animation-timing-function:cubic-bezier(.55,.55,.55,.55)}.slide-fade2-leave-active[data-v-50eac6a8]{animation-name:fold-out-data-v-50eac6a8;animation-duration:.7s;animation-timing-function:cubic-bezier(.55,.55,.55,.55)}@keyframes fold-out-data-v-50eac6a8{0%{transform:translateX(0)}to{transform:translateX(-18.75rem)}}@keyframes fold-out1-data-v-50eac6a8{0%{transform:translateX(0)}to{transform:translateX(18.75rem)}}.show2[data-v-50eac6a8]{z-index:10}.show2[data-v-50eac6a8],.show3[data-v-50eac6a8]{width:100px;height:100px;position:absolute;background:red;transform-origin:0 50%}.show3[data-v-50eac6a8]{z-index:5}", ""]) }, function(e, t) {
    function n(e, t) { var n = e[1] || "",
        o = e[3]; if (!o) return n; if (t && "function" == typeof btoa) { var a = r(o); return [n].concat(o.sources.map(function(e) { return "/*# sourceURL=" + o.sourceRoot + e + " */" })).concat([a]).join("\n") } return [n].join("\n") }

    function r(e) { return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */" } e.exports = function(e) { var t = []; return t.toString = function() { return this.map(function(t) { var r = n(t, e); return t[2] ? "@media " + t[2] + "{" + r + "}" : r }).join("") }, t.i = function(e, n) { "string" == typeof e && (e = [
          [null, e, ""]
        ]); for (var r = {}, o = 0; o < this.length; o++) { var a = this[o][0]; "number" == typeof a && (r[a] = !0) } for (o = 0; o < e.length; o++) { var s = e[o]; "number" == typeof s[0] && r[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), t.push(s)) } }, t } }, function(e, t, n) {
    function r(e) { for (var t = 0; t < e.length; t++) { var n = e[t],
          r = f[n.id]; if (r) { r.refs++; for (var o = 0; o < r.parts.length; o++) r.parts[o](n.parts[o]); for (; o < n.parts.length; o++) r.parts.push(a(n.parts[o]));
          r.parts.length > n.parts.length && (r.parts.length = n.parts.length) } else { for (var s = [], o = 0; o < n.parts.length; o++) s.push(a(n.parts[o]));
          f[n.id] = { id: n.id, refs: 1, parts: s } } } }

    function o() { var e = document.createElement("style"); return e.type = "text/css", u.appendChild(e), e }

    function a(e) { var t, n, r = document.querySelector("style[" + g + '~="' + e.id + '"]'); if (r) { if (p) return h;
        r.parentNode.removeChild(r) } if (b) { var a = l++;
        r = m || (m = o()), t = s.bind(null, r, a, !1), n = s.bind(null, r, a, !0) } else r = o(), t = i.bind(null, r), n = function() { r.parentNode.removeChild(r) }; return t(e),
        function(r) { if (r) { if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return;
            t(e = r) } else n() } }

    function s(e, t, n, r) { var o = n ? "" : r.css; if (e.styleSheet) e.styleSheet.cssText = y(t, o);
      else { var a = document.createTextNode(o),
          s = e.childNodes;
        s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(a, s[t]) : e.appendChild(a) } }

    function i(e, t) { var n = t.css,
        r = t.media,
        o = t.sourceMap; if (r && e.setAttribute("media", r), v.ssrId && e.setAttribute(g, t.id), o && (n += "\n/*# sourceURL=" + o.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"), e.styleSheet) e.styleSheet.cssText = n;
      else { for (; e.firstChild;) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(n)) } } var c = "undefined" != typeof document; if ("undefined" != typeof DEBUG && DEBUG && !c) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."); var d = n(7),
      f = {},
      u = c && (document.head || document.getElementsByTagName("head")[0]),
      m = null,
      l = 0,
      p = !1,
      h = function() {},
      v = null,
      g = "data-vue-ssr-id",
      b = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
    e.exports = function(e, t, n, o) { p = n, v = o || {}; var a = d(e, t); return r(a),
        function(t) { for (var n = [], o = 0; o < a.length; o++) { var s = a[o],
              i = f[s.id];
            i.refs--, n.push(i) } t ? (a = d(e, t), r(a)) : a = []; for (var o = 0; o < n.length; o++) { var i = n[o]; if (0 === i.refs) { for (var c = 0; c < i.parts.length; c++) i.parts[c]();
              delete f[i.id] } } } }; var y = function() { var e = []; return function(t, n) { return e[t] = n, e.filter(Boolean).join("\n") } }() }, function(e, t) { e.exports = function(e, t) { for (var n = [], r = {}, o = 0; o < t.length; o++) { var a = t[o],
          s = a[0],
          i = a[1],
          c = a[2],
          d = a[3],
          f = { id: e + ":" + o, css: i, media: c, sourceMap: d };
        r[s] ? r[s].parts.push(f) : n.push(r[s] = { id: s, parts: [f] }) } return n } }, function(e, t) { e.exports = function(e, t, n, r, o, a) { var s, i = e = e || {},
        c = typeof e.default; "object" !== c && "function" !== c || (s = e, i = e.default); var d = "function" == typeof i ? i.options : i;
      t && (d.render = t.render, d.staticRenderFns = t.staticRenderFns, d._compiled = !0), n && (d.functional = !0), o && (d._scopeId = o); var f; if (a ? (f = function(e) { e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), r && r.call(this, e), e && e._registeredComponents && e._registeredComponents.add(a) }, d._ssrRegister = f) : r && (f = r), f) { var u = d.functional,
          m = u ? d.render : d.beforeCreate;
        u ? (d._injectStyles = f, d.render = function(e, t) { return f.call(t), m(e, t) }) : d.beforeCreate = m ? [].concat(m, f) : [f] } return { esModule: s, exports: i, options: d } } }, function(e, t, n) { e.exports = n.p + "1.jpg?4ce7d82a66840a397a9e32637207cc43" }, function(e, t, n) { e.exports = n.p + "2.jpg?dae9b35d5dd4f564f309c0dbb85fd5b1" }, function(e, t, n) { e.exports = n.p + "3.jpg?4599749d2415f4a8e5e3c2ce323551ab" }, function(e, t, n) { "use strict"; var r = function() { var e = this,
          t = e.$createElement,
          n = e._self._c || t; return n("div", { staticClass: "wrap" }, [n("div", { staticClass: "bg", attrs: { id: "bg" } }, [n("v-touch", { on: { swipeleft: e.onSwipeLeft, swiperight: e.onSwipeRight } }, [n("div", { staticClass: "content" }, [n("transition", { attrs: { name: e.direction } }, [n("div", { directives: [{ name: "show", rawName: "v-show", value: e.show, expression: "show" }], ref: "contentItem", staticClass: "contentItem", attrs: { id: "box" } }, [n("img", { staticClass: "item", attrs: { src: e.img[0], alt: "" } })])]), e._v(" "), n("transition", { attrs: { name: e.direction } }, [n("div", { directives: [{ name: "show", rawName: "v-show", value: e.show2, expression: "show2" }], ref: "contentItem2", staticClass: "contentItem middle2 ", attrs: { id: "box2" } }, [n("img", { staticClass: "item", attrs: { src: e.img[1], alt: "" } })])]), e._v(" "), n("transition", { attrs: { name: e.direction } }, [n("div", { directives: [{ name: "show", rawName: "v-show", value: e.show3, expression: "show3" }], ref: "contentItem3", staticClass: "contentItem bottom3", attrs: { id: "box3" } }, [n("img", { staticClass: "item", attrs: { src: e.img[2], alt: "" } })])])], 1)])], 1)]) },
      o = [],
      a = { render: r, staticRenderFns: o };
    t.a = a }]) });
//# sourceMappingURL=vue-card-slide.js.map
