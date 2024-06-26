! function(t) {
    function e(t, e) {
        for (var n = [], r = 0, i = e.length; r < i; r++) T._matches(e[r], t) && n.push(e[r]);
        return n
    }

    function n(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? _[C.call(t)] || "object" : typeof t
    }

    function r(t) {
        var e = !!t && "length" in t && t.length,
            r = n(t);
        return !T.isFunction(t) && !T.isWindow(t) && ("array" === r || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function i(t) {
        return -1 !== t.indexOf(":visible")
    }

    function o(t, e) {
        var n, r = t.indexOf(":visible"),
            i = t.substring(0, r),
            o = 0,
            s = [];
        for (n = e.querySelectorAll(i || "*"); o < n.length; o++) a(n[o]) && s.push(n[o]);
        return s
    }

    function s(t, e, n) {
        var r, a;
        if (i(t))
            if ((r = t.split(",")).length > 1)
                for (a = 0; a < r.length; a++) s(r[a], e, n);
            else b.apply(n, o(r[0], e));
        else u(t, e, n)
    }

    function a(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }

    function u(t, e, n) {
        var r = e.querySelectorAll(t);
        b.apply(n, r)
    }

    function c(t) {
        var e, n = !1,
            r = [],
            i = 0,
            o = 0,
            s = t.slice(0);
        if (t.sort(function(t, e) {
                var r;
                return t === e ? (n = !0, 0) : 1 & (r = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) ? t === document || t.ownerDocument === A && A.contains(t) ? -1 : e === document || e.ownerDocument === A && A.contains(e) ? 1 : s ? s.indexOf(t) - s.indexOf(e) : 0 : 4 & r ? -1 : 1
            }), n) {
            for (; e = t[i++];) e === t[i] && (o = r.push(i));
            for (; o--;) t.splice(r[o], 1)
        }
        return t
    }

    function l(t) {
        return Math.round(parseFloat(t))
    }

    function f() {
        this.expando = T.expando + T.dataid++
    }

    function h(t) {
        var e, n, r = 0,
            i = "",
            o = t.nodeType;
        if (o) {
            if (1 === o || 9 === o || 11 === o) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (n = t.firstChild; n; n = n.nextSibling) i += h(n)
            } else if (3 === o || 4 === o) return t.nodeValue
        } else
            for (; e = t[r++];) i += h(e);
        return i
    }

    function p(t, e) {
        return e.toUpperCase()
    }

    function d(t, n, r) {
        return "string" == typeof n ? (r && (n = ":not(" + n + ")"), e(n, T.grep(t, function(t) {
            return 1 === t.nodeType
        }))) : T.isFunction(n) ? T.grep(t, function(t, e) {
            return !!n.call(t, e, t) !== r
        }) : 1 === n.nodeType ? T.grep(t, function(t) {
            return t === n !== r
        }) : T.grep(t, function(t) {
            return O.call(n, t) > -1 !== r
        })
    }

    function m(t, e) {
        var n, r, i, o, s = document.createDocumentFragment(),
            a = [];
        if (F.test(t)) {
            for (o = s.appendChild(document.createElement("div")), n = (P.exec(t)[1] || "").toLowerCase(), r = z[n] || z._default, o.innerHTML = r[1] + t + r[2], i = r[0]; i--;) o = o.lastChild;
            T.merge(a, o.childNodes), (o = s.firstChild).textContent = ""
        }
        return a
    }

    function g(t) {
        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : I.test(t) ? JSON.parse(t) : t)
    }

    function v(t, e, n) {
        var r;
        if (void 0 === n && 1 === t.nodeType)
            if (r = "data-" + e.replace($, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(r))) {
                try {
                    n = g(n)
                } catch (t) {}
                M.set(t, e, n)
            } else n = void 0;
        return n
    }
    var y = [],
        x = y.slice,
        b = y.push,
        O = y.indexOf,
        w = y.concat,
        _ = {},
        C = _.toString,
        S = _.hasOwnProperty,
        j = S.toString,
        k = j.call(Object),
        A = t.document,
        T = function(t, e) {
            return new q(t, e)
        };
    T.isFunction = function(t) {
        return "function" == typeof t && "number" != typeof t.nodeType
    };
    var D = /^(?:\s*(<[\w\W]+>)|#([\w-]+))$/,
        E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        F = /<|&#?\w+;/,
        P = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        q = function(e, n) {
            var r, i, o, s, a = B;
            if (!e) return this;
            if ("string" == typeof e) {
                if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length > 3 ? [null, e, null] : D.exec(e)) || !i[1] && n) return !n || n instanceof q ? (n || a).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof q ? n[0] : n, T.merge(this, T.parseHTML(i[1], n && n.nodeType ? n.ownerDocument : document)), E.test(i[1]) && T.isPlainObject(n))
                        for (o in n) T.isFunction(this[o]) ? this[o](n[o]) : this.attr(o, n[o]);
                    return this
                }
                return r = document.getElementById(i[2]), s = this.pushStack(r ? [r] : []), s.isId = !0, s
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : (s = T.makeArray(e, this), e === t && (s.singular = !0), s)
        };
    q.prototype = {
        splice: y.splice,
        constructor: T,
        length: 0,
        push: y.push,
        sort: y.sort
    }, T.prototype = q.prototype, T.extend = q.prototype.extend = function() {
        var t, e, n, r, i, o = 1,
            s = !1,
            a = arguments.length,
            u = arguments[0] || {};
        for ("boolean" == typeof u && (s = u, u = arguments[o] || {}, o++), a == o && (u = this, o--), T.isFunction(u) || "object" == typeof u || (u = {}); o < arguments.length; o++) {
            r = arguments[o];
            for (t in r)(e = r[t]) !== (n = u[t]) && "__proto__" !== t && (e && s ? Array.isArray(e) ? (i = n && Array.isArray(n) ? n : [], u[t] = T.extend(s, i, e)) : T.isPlainObject(e) ? (i = T.isPlainObject(n) ? n : {}, u[t] = T.extend(s, i, e)) : void 0 !== e && (u[t] = e) : u[t] = r[t])
        }
        return u
    };
    var L = {
        startsWith: function(t, e) {
            return 0 === t.indexOf(e)
        },
        endsWith: function(t, e) {
            return t.indexOf(e) === t.length - e.length
        },
        includes: function(t, e) {
            return -1 !== t.indexOf(e)
        }
    };
    T.extend({
            regex: {
                rnothtmlwhite: /[^\x20\t\r\n\f]+/g
            },
            _meta: {
                support: {}
            },
            _processInput: function(t, e, r, i, o, s, a) {
                var u, c = t.length,
                    l = 0,
                    f = null == e;
                if ("object" === n(e)) {
                    o = !0;
                    for (u in e) T._processInput(t, u, e[u], i, !0)
                } else if (void 0 !== r && (o = !0, T.isFunction(r) || (a = !0), f && (a ? (i.call(t, r), i = null) : (f = i, i = function(t, e, n) {
                        return f.call(T(t), n)
                    })), i))
                    for (; l < c; l++) i(t[l], e, a ? r : r.call(t[l], l, i(t[l], e)));
                return o ? t : f ? i.call(t) : c ? i(t[0], e) : s
            },
            _camelCase: function(t) {
                return t.replace(N, "ms-").replace(W, p)
            },
            _removeDupes: function(t, e, n) {
                if (t.length > 1) {
                    var r = c(t);
                    return n.pushStack(e ? r.reverse() : r)
                }
                return n.pushStack(t)
            },
            _checkMatch: function(t, e) {
                return !(e && !T._matches(t, e))
            },
            _matches: function(t, e) {
                var n, r, o, s, u = t.matches || t.matchesSelector || t.msMatchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector;
                if (!i(e)) return u.call(t, e);
                if (!((n = e.split(",")).length > 1)) return e = n[0], o = e.indexOf(":visible"), s = e.substring(0, o), u.call(t, s || "*") && a(t);
                for (r = 0; r < n.length; r++)
                    if (T._matches(t, n[r])) return !0
            },
            expando: "lytedom" + Math.random().toString().replace(/\D/g, ""),
            isWindow: function(t) {
                return null != t && t === t.window
            },
            map: function(t, e) {
                var n, i, o = t.length,
                    s = [];
                if (r(t))
                    for (n = 0; n < o; n++) null != (i = e(t[n], n)) && s.push(i);
                else
                    for (n in t) null != (i = e(t[n], n)) && s.push(i);
                return w.apply([], s)
            },
            grep: function(e, n, r) {
                for (var i = 0, o = !r, s = (e || []).length, a = []; i < s; i++) !!n.call(t, e[i], i) === o && a.push(e[i]);
                return a
            },
            each: function(t, e) {
                var n, i;
                if (r(t))
                    for (i = t.length, n = 0; n < i && !1 !== e.call(t[n], n, t[n]); n++);
                else
                    for (n in t)
                        if (!1 === e.call(t[n], n, t[n])) break;
                return t
            },
            merge: function(t, e) {
                var n, r, i = e.length || 0;
                for (n = t.length || 0, r = 0; r < i; r++) t[n + r] = e[r];
                return t.length = i + n, t
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (r(Object(t)) ? T.merge(n, "string" == typeof t ? [t] : t) : b.call(n, t)), n
            },
            inArray: function(t, e, n) {
                return null == e ? -1 : O.call(e, t, n)
            },
            isPlainObject: function(t) {
                var e, n;
                return !(!t || "[object Object]" !== C.call(t)) && (!(e = Object.getPrototypeOf(t)) || "function" == typeof(n = S.call(e, "constructor") && e.constructor) && j.call(n) === k)
            },
            parseXML: function(t) {
                return (new DOMParser).parseFromString(t, "text/xml")
            },
            Evaluate: function(t) {
                var e = document.createElement("script");
                e.text = t, document.head.appendChild(e).parentNode.removeChild(e)
            },
            removeLeaks: function(t) {
                for (var e, n, r = 0; r < t.length; r++) {
                    if (e = t[r][T._dataPriv.expando]) {
                        if (e.events)
                            for (n in e.events) T.ev.removeEvents(t[r], n, e.handle);
                        e = void 0
                    }
                    e && (e = void 0)
                }
            },
            search: function(t, e, n, r, i, o) {
                var s, a = [],
                    u = !1;
                t.constructor != Array && "object" == typeof t && (t = [t]), i && i.recursive && (u = !0), e && "string" == typeof e && (e = e.split(".")), r ? "equals" !== r && "number" == typeof n && (n = n.toString()) : r = "includes", e && (s = e[0]);
                for (var c = 0; c < t.length; c++) {
                    var l = t[c];
                    if (s) {
                        if (l instanceof Object && s in l) {
                            if (1 === e.length && ("any" === r || "equals" === r && l[s] === n || "equals" !== r && "string" == typeof l[s] && (!n && l[s] === n || n && L[r](l[s], n)) || "number" == typeof l[s] && L[r](l[s].toString(), n)))
                                if (o) {
                                    if (!u) return !0;
                                    a.push(l)
                                } else a.push(l);
                            else if (l[s] instanceof Array) {
                                d = this.search(l[s], e.slice(1), n, r, i, !0);
                                if (o && d) return !u || d;
                                !o && d && a.push(l)
                            } else if (l[s] instanceof Object)
                                for (var f = l[s], h = 1; h < e.length && (f instanceof Object && e[h] in f); h++) {
                                    var p = f[e[h]];
                                    if (e.length - 1 === h && ("any" === r || "equals" === r && p === n || "equals" !== r && "string" == typeof p && (!n && p === n || n && L[r](p, n)) || "number" == typeof p && L[r](p.toString(), n)))
                                        if (o) {
                                            if (!u) return !0;
                                            a.push(f)
                                        } else a.push(l);
                                    else if (p instanceof Array) {
                                        d = this.search(p, e.slice(h + 1), n, r, i, !0);
                                        if (o && d) return !u || d;
                                        !o && d && a.push(l)
                                    } else p instanceof Object && (f = p)
                                }
                        } else if (l instanceof Array) {
                            d = this.search(l, e, n, r, i, !0);
                            if (o && d) return !u || d;
                            !o && d && a.push(l)
                        }
                    } else if ("any" === r || "equals" === r && l === n || "equals" !== r && ("string" == typeof l && (!n && l === n || n && L[r](l, n)) || "number" == typeof l && L[r](l.toString(), n)))
                        if (o) {
                            if (!u) return !0;
                            a.push(l)
                        } else a.push(l);
                    else if (l instanceof Array) {
                        var d = this.search(l, s, n, r, i, !0);
                        if (o && d) return !u || d;
                        !o && d && a.push(l)
                    }
                    if (u && l[i.children] && (d = this.search(l[i.children], e, n, r, i, !0))) {
                        a = a.length ? a.concat(d) : d
                    }
                }
                return o ? !!a.length && (!u || a) : a
            }
        }), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            _["[object " + e + "]"] = e.toLowerCase()
        }),
        function() {
            var t = document.createElement("input"),
                e = document.createElement("select").appendChild(document.createElement("option"));
            t.type = "checkbox", T._meta.support.checkOn = "" !== t.value, T._meta.support.optSelected = e.selected, (t = document.createElement("input")).value = "t", t.type = "radio", T._meta.support.radioValue = "t" === t.value
        }(),
        function() {
            function e() {
                if (o) {
                    var e, a = document.documentElement;
                    s.style.cssText = "position: absolute; left: -2222px;width:300px;height:5px;", o.style.cssText = "position:relative;width:200px;margin: auto; top: 1%;box-sizing:border-box;padding: 20px;", s.appendChild(o), a.appendChild(s), e = t.getComputedStyle(o), n = 50 === l(e.marginLeft), r = "1%" !== e.top, i = 200 === l(e.width), a.removeChild(s), o = null
                }
            }
            var n, r, i, o = document.createElement("div"),
                s = document.createElement("div");
            T.extend(T._meta.support, {
                reliableMarginLeft: function() {
                    return e(), n
                },
                reliablePixelPosition: function() {
                    return e(), r
                },
                reliableBoxSizing: function() {
                    return e(), i
                }
            })
        }(), T.needsContext = /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i, T.dataid = 0, T.extend(f.prototype, {
            cache: function(t) {
                var e = t[this.expando];
                return e || (e = {}, t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                })), e
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][T._camelCase(e)]
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !T.isEmptyObject(e)
            },
            access: function(t, e, n) {
                return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
            },
            set: function(t, e, n) {
                var r, i = this.cache(t);
                if ("string" == typeof e) i[T._camelCase(e)] = n;
                else
                    for (r in e) i[T._camelCase(r)] = e[r];
                return i
            },
            remove: function(t, e) {
                var n, r = t[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== e) {
                        n = (e = Array.isArray(e) ? e.map(T._camelCase) : (e = T._camelCase(e)) in r ? [e] : e.match(T.regex.rnothtmlwhite) || []).length;
                        for (; n--;) delete r[e[n]]
                    }(void 0 === e || T.isEmptyObject(r)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            }
        }), T._dataPriv = new f;
    var M = new f;
    q.prototype.extend({
        toArray: function() {
            return x.call(this)
        },
        add: function(t, e) {
            return this.pushStack(c(T.merge(this.get(), T(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        },
        slice: function() {
            return this.pushStack(x.apply(this, arguments))
        },
        has: function(t) {
            var e = T(t, this),
                n = e.length;
            return this.filter(function() {
                for (var t = 0; t < n; t++)
                    if (this !== e[t] && this.contains(e[t])) return !0
            })
        },
        is: function(t) {
            return d(this, "string" == typeof t && T.needsContext.test(t) ? T(t) : t || [], !1).length > 0
        },
        not: function(t) {
            return this.pushStack(d(this, t || [], !0))
        }
    }), q.prototype.extend({
        eq: function(t) {
            var e = this.length;
            return t = t < 0 ? e + t : t, this.pushStack(t < 0 || t > e - 1 ? [] : [this[t]])
        },
        last: function() {
            return this.eq(-1)
        },
        first: function() {
            return this.eq(0)
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        map: function(t) {
            return this.pushStack(T.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        filter: function(t) {
            return this.pushStack(d(this, t || [], !1))
        },
        find: function(t) {
            var e, n, r = this,
                i = this.length;
            if ("string" != typeof t) return this.pushStack(T(t).filter(function() {
                for (n = 0; n < i; n++)
                    if (r[n] !== this && r[n].contains(this)) return !0
            }));
            for (e = this.pushStack([]), n = 0; n < i; n++) s(t, this[n], e);
            return e.length > 1 ? c(e) : e
        },
        pushStack: function(t) {
            var e;
            return e = T.merge(this.constructor(), t), e.prevObject = this, e
        },
        each: function(t) {
            return T.each(this, t)
        },
        get: function(t) {
            return null == t ? x.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        empty: function() {
            return this.each(function(t, e) {
                1 === e.nodeType && (T.removeLeaks(e.getElementsByTagName("*")), e.textContent = "")
            }), this
        },
        text: function(t) {
            return T._processInput(this, null, t, function(t) {
                return void 0 === t ? h(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, arguments.length)
        },
        clone: function(t, e) {
            return t = !0 === t, e = null == e ? t : e, this.map(function() {
                return T.clone(this, t, e)
            })
        }
    });
    var N = /^-ms-/,
        W = /-([a-z])/g;
    ! function() {
        var t = document.createDocumentFragment().appendChild(document.createElement("div")),
            e = document.createElement("input");
        e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), T._meta.support.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", T._meta.support.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var z = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    z.tbody = z.tfoot = z.colgroup = z.caption = z.thead, z.th = z.td, T.extend({
        parseHTML: function(t, e) {
            var n = E.exec(t);
            return n ? [e.createElement(n[1])] : m(t)
        }
    }), T.extend({
        hasData: function(t) {
            return M.hasData(t) || T._dataPriv.hasData(t)
        },
        data: function(t, e, n) {
            return M.access(t, e, n)
        },
        removeData: function(t, e) {
            M.remove(t, e)
        },
        _data: function(t, e, n) {
            return T._dataPriv.access(t, e, n)
        },
        _removeData: function(t, e) {
            T._dataPriv.remove(t, e)
        }
    }), q.prototype.extend({
        data: function(t, e) {
            var n, r, i, o = this[0],
                s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (i = M.get(o), 1 === o.nodeType && !T._dataPriv.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = T._camelCase(r.slice(5)), v(o, r, i[r]));
                    T._dataPriv.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof t ? this.each(function() {
                M.set(this, t)
            }) : T._processInput(this, null, e, function(e) {
                var n;
                if (o && void 0 === e) {
                    if (void 0 !== (n = M.get(o, t))) return n;
                    if (void 0 !== (n = v(o, t))) return n
                } else this.each(function() {
                    M.set(this, t, e)
                })
            }, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                M.remove(this, t)
            })
        }
    });
    var $ = /[A-Z]/g,
        I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        B = T(document);
    T.parse = JSON.parse, t.$L = T, t.lyteDomObj = q
}(void 0 === window ? this : window),
function(t) {
    var e = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
            return setTimeout(t, 25)
        },
        n = function() {
            this.readOps = [], this.writeOps = []
        };
    n.prototype = {
        constructor: n,
        scheduled: !1,
        measure: function(t, e) {
            return t = e ? t.bind(e) : t, this.readOps.push(t), this.stagingFn(), t
        },
        mutate: function(t, e) {
            return t = e ? t.bind(e) : t, this.writeOps.push(t), this.stagingFn(), t
        },
        stagingFn: function() {
            this.scheduled || (this.scheduled = !0, e(this.executeTasks.bind(this)))
        },
        executeTasks: function() {
            var t;
            try {
                this.execute(this.readOps), this.execute(this.writeOps)
            } catch (e) {
                t = e
            }
            if (this.scheduled = !1, (this.readOps.length || this.writeOps.length) && this.stagingFn(), t) {
                if (!this.catch) throw t;
                this.catch(t)
            }
        },
        execute: function(t) {
            for (var e; e = t.shift();) e()
        },
        clear: function(t) {
            return this.remove(this.readOps, t) || this.remove(this.writeOps, t)
        },
        remove: function(t, e) {
            var n = t.indexOf(e);
            return -1 !== n && !!t.splice(n, 1)
        },
        catch: null
    }, t.$L.fastdom = new n
}("undefined" != typeof window ? window : this);
! function(t) {
    function e(t, e) {
        for (var n = [], r = 0, i = e.length; r < i; r++) T._matches(e[r], t) && n.push(e[r]);
        return n
    }

    function n(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? _[C.call(t)] || "object" : typeof t
    }

    function r(t) {
        var e = !!t && "length" in t && t.length,
            r = n(t);
        return !T.isFunction(t) && !T.isWindow(t) && ("array" === r || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function i(t) {
        return -1 !== t.indexOf(":visible")
    }

    function o(t, e) {
        var n, r = t.indexOf(":visible"),
            i = t.substring(0, r),
            o = 0,
            s = [];
        for (n = e.querySelectorAll(i || "*"); o < n.length; o++) a(n[o]) && s.push(n[o]);
        return s
    }

    function s(t, e, n) {
        var r, a;
        if (i(t))
            if ((r = t.split(",")).length > 1)
                for (a = 0; a < r.length; a++) s(r[a], e, n);
            else b.apply(n, o(r[0], e));
        else u(t, e, n)
    }

    function a(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }

    function u(t, e, n) {
        var r = e.querySelectorAll(t);
        b.apply(n, r)
    }

    function c(t) {
        var e, n = !1,
            r = [],
            i = 0,
            o = 0,
            s = t.slice(0);
        if (t.sort(function(t, e) {
                var r;
                return t === e ? (n = !0, 0) : 1 & (r = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) ? t === document || t.ownerDocument === A && A.contains(t) ? -1 : e === document || e.ownerDocument === A && A.contains(e) ? 1 : s ? s.indexOf(t) - s.indexOf(e) : 0 : 4 & r ? -1 : 1
            }), n) {
            for (; e = t[i++];) e === t[i] && (o = r.push(i));
            for (; o--;) t.splice(r[o], 1)
        }
        return t
    }

    function l(t) {
        return Math.round(parseFloat(t))
    }

    function f() {
        this.expando = T.expando + T.dataid++
    }

    function h(t) {
        var e, n, r = 0,
            i = "",
            o = t.nodeType;
        if (o) {
            if (1 === o || 9 === o || 11 === o) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (n = t.firstChild; n; n = n.nextSibling) i += h(n)
            } else if (3 === o || 4 === o) return t.nodeValue
        } else
            for (; e = t[r++];) i += h(e);
        return i
    }

    function p(t, e) {
        return e.toUpperCase()
    }

    function d(t, n, r) {
        return "string" == typeof n ? (r && (n = ":not(" + n + ")"), e(n, T.grep(t, function(t) {
            return 1 === t.nodeType
        }))) : T.isFunction(n) ? T.grep(t, function(t, e) {
            return !!n.call(t, e, t) !== r
        }) : 1 === n.nodeType ? T.grep(t, function(t) {
            return t === n !== r
        }) : T.grep(t, function(t) {
            return O.call(n, t) > -1 !== r
        })
    }

    function m(t, e) {
        var n, r, i, o, s = document.createDocumentFragment(),
            a = [];
        if (F.test(t)) {
            for (o = s.appendChild(document.createElement("div")), n = (P.exec(t)[1] || "").toLowerCase(), r = z[n] || z._default, o.innerHTML = r[1] + t + r[2], i = r[0]; i--;) o = o.lastChild;
            T.merge(a, o.childNodes), (o = s.firstChild).textContent = ""
        }
        return a
    }

    function g(t) {
        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : I.test(t) ? JSON.parse(t) : t)
    }

    function v(t, e, n) {
        var r;
        if (void 0 === n && 1 === t.nodeType)
            if (r = "data-" + e.replace($, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(r))) {
                try {
                    n = g(n)
                } catch (t) {}
                M.set(t, e, n)
            } else n = void 0;
        return n
    }
    var y = [],
        x = y.slice,
        b = y.push,
        O = y.indexOf,
        w = y.concat,
        _ = {},
        C = _.toString,
        S = _.hasOwnProperty,
        j = S.toString,
        k = j.call(Object),
        A = t.document,
        T = function(t, e) {
            return new q(t, e)
        };
    T.isFunction = function(t) {
        return "function" == typeof t && "number" != typeof t.nodeType
    };
    var D = /^(?:\s*(<[\w\W]+>)|#([\w-]+))$/,
        E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        F = /<|&#?\w+;/,
        P = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        q = function(e, n) {
            var r, i, o, s, a = B;
            if (!e) return this;
            if ("string" == typeof e) {
                if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length > 3 ? [null, e, null] : D.exec(e)) || !i[1] && n) return !n || n instanceof q ? (n || a).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof q ? n[0] : n, T.merge(this, T.parseHTML(i[1], n && n.nodeType ? n.ownerDocument : document)), E.test(i[1]) && T.isPlainObject(n))
                        for (o in n) T.isFunction(this[o]) ? this[o](n[o]) : this.attr(o, n[o]);
                    return this
                }
                return r = document.getElementById(i[2]), s = this.pushStack(r ? [r] : []), s.isId = !0, s
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : (s = T.makeArray(e, this), e === t && (s.singular = !0), s)
        };
    q.prototype = {
        splice: y.splice,
        constructor: T,
        length: 0,
        push: y.push,
        sort: y.sort
    }, T.prototype = q.prototype, T.extend = q.prototype.extend = function() {
        var t, e, n, r, i, o = 1,
            s = !1,
            a = arguments.length,
            u = arguments[0] || {};
        for ("boolean" == typeof u && (s = u, u = arguments[o] || {}, o++), a == o && (u = this, o--), T.isFunction(u) || "object" == typeof u || (u = {}); o < arguments.length; o++) {
            r = arguments[o];
            for (t in r)(e = r[t]) !== (n = u[t]) && "__proto__" !== t && (e && s ? Array.isArray(e) ? (i = n && Array.isArray(n) ? n : [], u[t] = T.extend(s, i, e)) : T.isPlainObject(e) ? (i = T.isPlainObject(n) ? n : {}, u[t] = T.extend(s, i, e)) : void 0 !== e && (u[t] = e) : u[t] = r[t])
        }
        return u
    };
    var L = {
        startsWith: function(t, e) {
            return 0 === t.indexOf(e)
        },
        endsWith: function(t, e) {
            return t.indexOf(e) === t.length - e.length
        },
        includes: function(t, e) {
            return -1 !== t.indexOf(e)
        }
    };
    T.extend({
            regex: {
                rnothtmlwhite: /[^\x20\t\r\n\f]+/g
            },
            _meta: {
                support: {}
            },
            _processInput: function(t, e, r, i, o, s, a) {
                var u, c = t.length,
                    l = 0,
                    f = null == e;
                if ("object" === n(e)) {
                    o = !0;
                    for (u in e) T._processInput(t, u, e[u], i, !0)
                } else if (void 0 !== r && (o = !0, T.isFunction(r) || (a = !0), f && (a ? (i.call(t, r), i = null) : (f = i, i = function(t, e, n) {
                        return f.call(T(t), n)
                    })), i))
                    for (; l < c; l++) i(t[l], e, a ? r : r.call(t[l], l, i(t[l], e)));
                return o ? t : f ? i.call(t) : c ? i(t[0], e) : s
            },
            _camelCase: function(t) {
                return t.replace(N, "ms-").replace(W, p)
            },
            _removeDupes: function(t, e, n) {
                if (t.length > 1) {
                    var r = c(t);
                    return n.pushStack(e ? r.reverse() : r)
                }
                return n.pushStack(t)
            },
            _checkMatch: function(t, e) {
                return !(e && !T._matches(t, e))
            },
            _matches: function(t, e) {
                var n, r, o, s, u = t.matches || t.matchesSelector || t.msMatchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector;
                if (!i(e)) return u.call(t, e);
                if (!((n = e.split(",")).length > 1)) return e = n[0], o = e.indexOf(":visible"), s = e.substring(0, o), u.call(t, s || "*") && a(t);
                for (r = 0; r < n.length; r++)
                    if (T._matches(t, n[r])) return !0
            },
            expando: "lytedom" + Math.random().toString().replace(/\D/g, ""),
            isWindow: function(t) {
                return null != t && t === t.window
            },
            map: function(t, e) {
                var n, i, o = t.length,
                    s = [];
                if (r(t))
                    for (n = 0; n < o; n++) null != (i = e(t[n], n)) && s.push(i);
                else
                    for (n in t) null != (i = e(t[n], n)) && s.push(i);
                return w.apply([], s)
            },
            grep: function(e, n, r) {
                for (var i = 0, o = !r, s = (e || []).length, a = []; i < s; i++) !!n.call(t, e[i], i) === o && a.push(e[i]);
                return a
            },
            each: function(t, e) {
                var n, i;
                if (r(t))
                    for (i = t.length, n = 0; n < i && !1 !== e.call(t[n], n, t[n]); n++);
                else
                    for (n in t)
                        if (!1 === e.call(t[n], n, t[n])) break;
                return t
            },
            merge: function(t, e) {
                var n, r, i = e.length || 0;
                for (n = t.length || 0, r = 0; r < i; r++) t[n + r] = e[r];
                return t.length = i + n, t
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (r(Object(t)) ? T.merge(n, "string" == typeof t ? [t] : t) : b.call(n, t)), n
            },
            inArray: function(t, e, n) {
                return null == e ? -1 : O.call(e, t, n)
            },
            isPlainObject: function(t) {
                var e, n;
                return !(!t || "[object Object]" !== C.call(t)) && (!(e = Object.getPrototypeOf(t)) || "function" == typeof(n = S.call(e, "constructor") && e.constructor) && j.call(n) === k)
            },
            parseXML: function(t) {
                return (new DOMParser).parseFromString(t, "text/xml")
            },
            Evaluate: function(t) {
                var e = document.createElement("script");
                e.text = t, document.head.appendChild(e).parentNode.removeChild(e)
            },
            removeLeaks: function(t) {
                for (var e, n, r = 0; r < t.length; r++) {
                    if (e = t[r][T._dataPriv.expando]) {
                        if (e.events)
                            for (n in e.events) T.ev.removeEvents(t[r], n, e.handle);
                        e = void 0
                    }
                    e && (e = void 0)
                }
            },
            search: function(t, e, n, r, i, o) {
                var s, a = [],
                    u = !1;
                t.constructor != Array && "object" == typeof t && (t = [t]), i && i.recursive && (u = !0), e && "string" == typeof e && (e = e.split(".")), r ? "equals" !== r && "number" == typeof n && (n = n.toString()) : r = "includes", e && (s = e[0]);
                for (var c = 0; c < t.length; c++) {
                    var l = t[c];
                    if (s) {
                        if (l instanceof Object && s in l) {
                            if (1 === e.length && ("any" === r || "equals" === r && l[s] === n || "equals" !== r && "string" == typeof l[s] && (!n && l[s] === n || n && L[r](l[s], n)) || "number" == typeof l[s] && L[r](l[s].toString(), n)))
                                if (o) {
                                    if (!u) return !0;
                                    a.push(l)
                                } else a.push(l);
                            else if (l[s] instanceof Array) {
                                d = this.search(l[s], e.slice(1), n, r, i, !0);
                                if (o && d) return !u || d;
                                !o && d && a.push(l)
                            } else if (l[s] instanceof Object)
                                for (var f = l[s], h = 1; h < e.length && (f instanceof Object && e[h] in f); h++) {
                                    var p = f[e[h]];
                                    if (e.length - 1 === h && ("any" === r || "equals" === r && p === n || "equals" !== r && "string" == typeof p && (!n && p === n || n && L[r](p, n)) || "number" == typeof p && L[r](p.toString(), n)))
                                        if (o) {
                                            if (!u) return !0;
                                            a.push(f)
                                        } else a.push(l);
                                    else if (p instanceof Array) {
                                        d = this.search(p, e.slice(h + 1), n, r, i, !0);
                                        if (o && d) return !u || d;
                                        !o && d && a.push(l)
                                    } else p instanceof Object && (f = p)
                                }
                        } else if (l instanceof Array) {
                            d = this.search(l, e, n, r, i, !0);
                            if (o && d) return !u || d;
                            !o && d && a.push(l)
                        }
                    } else if ("any" === r || "equals" === r && l === n || "equals" !== r && ("string" == typeof l && (!n && l === n || n && L[r](l, n)) || "number" == typeof l && L[r](l.toString(), n)))
                        if (o) {
                            if (!u) return !0;
                            a.push(l)
                        } else a.push(l);
                    else if (l instanceof Array) {
                        var d = this.search(l, s, n, r, i, !0);
                        if (o && d) return !u || d;
                        !o && d && a.push(l)
                    }
                    if (u && l[i.children] && (d = this.search(l[i.children], e, n, r, i, !0))) {
                        a = a.length ? a.concat(d) : d
                    }
                }
                return o ? !!a.length && (!u || a) : a
            }
        }), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            _["[object " + e + "]"] = e.toLowerCase()
        }),
        function() {
            var t = document.createElement("input"),
                e = document.createElement("select").appendChild(document.createElement("option"));
            t.type = "checkbox", T._meta.support.checkOn = "" !== t.value, T._meta.support.optSelected = e.selected, (t = document.createElement("input")).value = "t", t.type = "radio", T._meta.support.radioValue = "t" === t.value
        }(),
        function() {
            function e() {
                if (o) {
                    var e, a = document.documentElement;
                    s.style.cssText = "position: absolute; left: -2222px;width:300px;height:5px;", o.style.cssText = "position:relative;width:200px;margin: auto; top: 1%;box-sizing:border-box;padding: 20px;", s.appendChild(o), a.appendChild(s), e = t.getComputedStyle(o), n = 50 === l(e.marginLeft), r = "1%" !== e.top, i = 200 === l(e.width), a.removeChild(s), o = null
                }
            }
            var n, r, i, o = document.createElement("div"),
                s = document.createElement("div");
            T.extend(T._meta.support, {
                reliableMarginLeft: function() {
                    return e(), n
                },
                reliablePixelPosition: function() {
                    return e(), r
                },
                reliableBoxSizing: function() {
                    return e(), i
                }
            })
        }(), T.needsContext = /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i, T.dataid = 0, T.extend(f.prototype, {
            cache: function(t) {
                var e = t[this.expando];
                return e || (e = {}, t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                })), e
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][T._camelCase(e)]
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !T.isEmptyObject(e)
            },
            access: function(t, e, n) {
                return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
            },
            set: function(t, e, n) {
                var r, i = this.cache(t);
                if ("string" == typeof e) i[T._camelCase(e)] = n;
                else
                    for (r in e) i[T._camelCase(r)] = e[r];
                return i
            },
            remove: function(t, e) {
                var n, r = t[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== e) {
                        n = (e = Array.isArray(e) ? e.map(T._camelCase) : (e = T._camelCase(e)) in r ? [e] : e.match(T.regex.rnothtmlwhite) || []).length;
                        for (; n--;) delete r[e[n]]
                    }(void 0 === e || T.isEmptyObject(r)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            }
        }), T._dataPriv = new f;
    var M = new f;
    q.prototype.extend({
        toArray: function() {
            return x.call(this)
        },
        add: function(t, e) {
            return this.pushStack(c(T.merge(this.get(), T(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        },
        slice: function() {
            return this.pushStack(x.apply(this, arguments))
        },
        has: function(t) {
            var e = T(t, this),
                n = e.length;
            return this.filter(function() {
                for (var t = 0; t < n; t++)
                    if (this !== e[t] && this.contains(e[t])) return !0
            })
        },
        is: function(t) {
            return d(this, "string" == typeof t && T.needsContext.test(t) ? T(t) : t || [], !1).length > 0
        },
        not: function(t) {
            return this.pushStack(d(this, t || [], !0))
        }
    }), q.prototype.extend({
        eq: function(t) {
            var e = this.length;
            return t = t < 0 ? e + t : t, this.pushStack(t < 0 || t > e - 1 ? [] : [this[t]])
        },
        last: function() {
            return this.eq(-1)
        },
        first: function() {
            return this.eq(0)
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        map: function(t) {
            return this.pushStack(T.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        filter: function(t) {
            return this.pushStack(d(this, t || [], !1))
        },
        find: function(t) {
            var e, n, r = this,
                i = this.length;
            if ("string" != typeof t) return this.pushStack(T(t).filter(function() {
                for (n = 0; n < i; n++)
                    if (r[n] !== this && r[n].contains(this)) return !0
            }));
            for (e = this.pushStack([]), n = 0; n < i; n++) s(t, this[n], e);
            return e.length > 1 ? c(e) : e
        },
        pushStack: function(t) {
            var e;
            return e = T.merge(this.constructor(), t), e.prevObject = this, e
        },
        each: function(t) {
            return T.each(this, t)
        },
        get: function(t) {
            return null == t ? x.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        empty: function() {
            return this.each(function(t, e) {
                1 === e.nodeType && (T.removeLeaks(e.getElementsByTagName("*")), e.textContent = "")
            }), this
        },
        text: function(t) {
            return T._processInput(this, null, t, function(t) {
                return void 0 === t ? h(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, arguments.length)
        },
        clone: function(t, e) {
            return t = !0 === t, e = null == e ? t : e, this.map(function() {
                return T.clone(this, t, e)
            })
        }
    });
    var N = /^-ms-/,
        W = /-([a-z])/g;
    ! function() {
        var t = document.createDocumentFragment().appendChild(document.createElement("div")),
            e = document.createElement("input");
        e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), T._meta.support.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", T._meta.support.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var z = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    z.tbody = z.tfoot = z.colgroup = z.caption = z.thead, z.th = z.td, T.extend({
        parseHTML: function(t, e) {
            var n = E.exec(t);
            return n ? [e.createElement(n[1])] : m(t)
        }
    }), T.extend({
        hasData: function(t) {
            return M.hasData(t) || T._dataPriv.hasData(t)
        },
        data: function(t, e, n) {
            return M.access(t, e, n)
        },
        removeData: function(t, e) {
            M.remove(t, e)
        },
        _data: function(t, e, n) {
            return T._dataPriv.access(t, e, n)
        },
        _removeData: function(t, e) {
            T._dataPriv.remove(t, e)
        }
    }), q.prototype.extend({
        data: function(t, e) {
            var n, r, i, o = this[0],
                s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (i = M.get(o), 1 === o.nodeType && !T._dataPriv.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = T._camelCase(r.slice(5)), v(o, r, i[r]));
                    T._dataPriv.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof t ? this.each(function() {
                M.set(this, t)
            }) : T._processInput(this, null, e, function(e) {
                var n;
                if (o && void 0 === e) {
                    if (void 0 !== (n = M.get(o, t))) return n;
                    if (void 0 !== (n = v(o, t))) return n
                } else this.each(function() {
                    M.set(this, t, e)
                })
            }, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                M.remove(this, t)
            })
        }
    });
    var $ = /[A-Z]/g,
        I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        B = T(document);
    T.parse = JSON.parse, t.$L = T, t.lyteDomObj = q
}(void 0 === window ? this : window),
function(t) {
    var e = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
            return setTimeout(t, 25)
        },
        n = function() {
            this.readOps = [], this.writeOps = []
        };
    n.prototype = {
        constructor: n,
        scheduled: !1,
        measure: function(t, e) {
            return t = e ? t.bind(e) : t, this.readOps.push(t), this.stagingFn(), t
        },
        mutate: function(t, e) {
            return t = e ? t.bind(e) : t, this.writeOps.push(t), this.stagingFn(), t
        },
        stagingFn: function() {
            this.scheduled || (this.scheduled = !0, e(this.executeTasks.bind(this)))
        },
        executeTasks: function() {
            var t;
            try {
                this.execute(this.readOps), this.execute(this.writeOps)
            } catch (e) {
                t = e
            }
            if (this.scheduled = !1, (this.readOps.length || this.writeOps.length) && this.stagingFn(), t) {
                if (!this.catch) throw t;
                this.catch(t)
            }
        },
        execute: function(t) {
            for (var e; e = t.shift();) e()
        },
        clear: function(t) {
            return this.remove(this.readOps, t) || this.remove(this.writeOps, t)
        },
        remove: function(t, e) {
            var n = t.indexOf(e);
            return -1 !== n && !!t.splice(n, 1)
        },
        catch: null
    }, t.$L.fastdom = new n
}("undefined" != typeof window ? window : this);;
(function() {
    if (window.lyteDomObj) {
        var ibr = typeof window !== "undefined";
        var ibo = ibr && !("onscroll" in window) || typeof navigator !== "undefined" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent);
        var sio = ibr && "IntersectionObserver" in window;
        var st = ["loading", "loaded", "applied", "entered", "error", "native"];
        var getData = function(el, attribute) {
            return el.getAttribute("data-" + attribute);
        };
        var setData = function(el, attribute, value) {
            var attrName = "data-" + attribute;
            if (value === null) {
                el.removeAttribute(attrName);
                return;
            }
            el.setAttribute(attrName, value);
        };
        var getStage = function(el) {
            return getData(el, "lazyload-stage");
        };
        var setStage = function(el, stage) {
            return setData(el, "lazyload-stage", stage);
        };
        var resetStage = function(el) {
            return setStage(el, null);
        };
        var hasES = function(el) {
            return getStage(el) === null;
        };
        var hasLs = function(el) {
            return getStage(el) === st[0];
        };
        var hasErS = function(el) {
            return getStage(el) === st[4];
        };
        var hasNS = function(el) {
            return getStage(el) === st[5];
        };
        var hasSL = function(el) {
            return ["loading", "loaded", "applied", "error"].indexOf(getStage(el)) >= 0;
        };
        var addClass = function(el, className) {
            if (ibr && "classList" in el) {
                el.classList.add(className);
                return;
            }
            el.className += (el.className ? " " : "") + className;
        };
        var removeClass = function(el, className) {
            if (ibr && "classList" in el) {
                el.classList.remove(className);
                return;
            }
            el.className = el.className.replace(new RegExp("(^|\\s+)" + className + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
        };
        var unobserve = function(el, obj) {
            if (!obj) {
                return;
            }
            var obs = obj._obs;
            if (!obs) {
                return;
            }
            obs.unobserve(el);
        };
        var getSrcTags = function(parentTag) {
            var srcTgs = [];
            for (var i = 0, childTag; childTag = parentTag.children[i]; i += 1) {
                if (childTag.tagName === "SOURCE") {
                    srcTgs.push(childTag);
                }
            }
            return srcTgs;
        };
        var setAttr = function(el, attrName, value) {
            if (!value) {
                return;
            }
            el.setAttribute(attrName, value);
        };
        var hasLazyAttrs = function(el) {
            return !!el.lazyAttrs;
        };
        var elKeys = ["src", "srcset", "sizes", "error"];
        var addLazyAttrs = function(el) {
            if (hasLazyAttrs(el)) {
                return;
            }
            var attrs = {};
            attrs[elKeys[0]] = el.getAttribute(elKeys[0]);
            attrs[elKeys[1]] = el.getAttribute(elKeys[1]);
            attrs[elKeys[2]] = el.getAttribute(elKeys[2]);
            el.lazyAttrs = attrs;
        };
        var setLazyAttrs = function(el) {
            if (!hasLazyAttrs(el)) {
                return;
            }
            var attrs = el.lazyAttrs;
            setAttr(el, elKeys[0], attrs[elKeys[0]]);
            setAttr(el, elKeys[1], attrs[elKeys[1]]);
            setAttr(el, elKeys[2], attrs[elKeys[2]]);
        };
        var setImgAttrs = function(el, props) {
            setAttr(el, elKeys[2], getData(el, props.sizes));
            setAttr(el, elKeys[1], getData(el, props.srcset));
            setAttr(el, elKeys[0], getData(el, props.src));
        };
        var resetImgAttrs = function(el) {
            el.removeAttribute(elKeys[0]);
            el.removeAttribute(elKeys[1]);
            el.removeAttribute(elKeys[2]);
        };
        var fPS = function(el, fn) {
            var parent = el.parentNode;
            if (!parent || parent.tagName !== "PICTURE") {
                return;
            }
            var srcTgs = getSrcTags(parent);
            srcTgs.forEach(fn);
        };
        var setSrcFn = {
            IMG: function(el, props) {
                fPS(el, function(sourceTag) {
                    addLazyAttrs(sourceTag);
                    setImgAttrs(sourceTag, props);
                });
                addLazyAttrs(el);
                setImgAttrs(el, props);
            },
            IFRAME: function(el, props) {
                setAttr(el, elKeys[0], getData(el, props.src));
            },
            VIDEO: function(el, props) {
                var srcTgs = getSrcTags(el);
                srcTgs.forEach(function(sourceTag) {
                    setAttr(sourceTag, elKeys[0], getData(sourceTag, props.src));
                });
                setAttr(el, "poster", getData(el, props.poster));
                setAttr(el, elKeys[0], getData(el, props.src));
                el.load();
            }
        };
        var setSources = function(el, props) {
            var srcFn = setSrcFn[el.tagName];
            if (!srcFn) {
                return;
            }
            srcFn(el, props);
        };
        var manageLoading = function(el, props, obj) {
            if (obj) {
                obj._count.loading += 1;
            }
            addClass(el, props.loadingClass);
            setStage(el, st[0]);
            if (props.onLoading) {
                props.onLoading(el, obj);
            }
        };
        var hasLoadEvent = function(el) {
            return ["IMG", "IFRAME", "VIDEO"].indexOf(el.tagName) > -1;
        };
        var checkComplete = function(props, obj) {
            if (obj && (obj._count.loading <= 0) && (obj._count.remaining <= 0) && props.onComplete) {
                props.onComplete(obj);
            }
        };
        var hasEvH = function(el) {
            return !!el.lazyEvtHndlrs;
        };
        var addEvH = function(el, loadfn, errorfn) {
            if (!hasEvH(el)) {
                el.lazyEvtHndlrs = {};
            }
            var loadEventName = el.tagName === "VIDEO" ? "loadeddata" : "load";
            el.addEventListener(loadEventName, loadfn);
            el.lazyEvtHndlrs[loadEventName] = loadfn;
            el.addEventListener(elKeys[3], errorfn);
            el.lazyEvtHndlrs[elKeys[3]] = errorfn;
        };
        var rmvEvH = function(el) {
            if (!hasEvH(el)) {
                return;
            }
            var eventListeners = el.lazyEvtHndlrs;
            for (var eventName in eventListeners) {
                var handler = eventListeners[eventName];
                el.removeEventListener(eventName, handler);
            }
            delete el.lazyEvtHndlrs;
        };
        var doneH = function(el, props, obj) {
            delete el.lazyTempImg;
            if (obj && obj._count) {
                obj._count.loading -= 1;
                obj._count.remaining -= 1;
            }
            removeClass(el, props.loadingClass);
            if (props.removeOnComplete) {
                unobserve(el, obj);
            }
        };
        var loadH = function(event, el, props, obj) {
            var goingNative = hasNS(el);
            doneH(el, props, obj);
            addClass(el, props.loadedClass);
            setStage(el, st[1]);
            if (props.afterLoading) {
                props.afterLoading(el, obj);
            }
            if (!goingNative) {
                checkComplete(props, obj);
            }
        };
        var errorH = function(event, el, props, obj) {
            var goingNative = hasNS(el);
            doneH(el, props, obj);
            addClass(el, props.errorClass);
            setStage(el, st[4]);
            if (props.onError) {
                props.onError(el, obj);
            }
            if (!goingNative) {
                checkComplete(props, obj);
            }
        };
        var addEvL = function(el, props, obj) {
            var elToListenTo = el.lazyTempImg || el;
            if (hasEvH(elToListenTo)) {
                return;
            }
            var loadfn = function(event) {
                loadH(event, el, props, obj);
                rmvEvH(elToListenTo);
            };
            var errorfn = function(event) {
                errorH(event, el, props, obj);
                rmvEvH(elToListenTo);
            };
            addEvH(elToListenTo, loadfn, errorfn);
        };
        var load = function(el, props, obj) {
            if (hasLoadEvent(el)) {
                addEvL(el, props, obj);
                setSources(el, props);
                manageLoading(el, props, obj);
            } else {
                el.lazyTempImg = document.createElement("IMG");
                addEvL(el, props, obj);
                var bg1xValue = getData(el, props.bg);
                var bgHiDpiValue = getData(el, props.hidpi);
                var bgDataValue = (ibr && window.devicePixelRatio > 1 && bgHiDpiValue) ? bgHiDpiValue : bg1xValue;
                if (bgDataValue) {
                    el.style.backgroundImage = "url(\"".concat(bgDataValue, "\")");
                    el.lazyTempImg.setAttribute(elKeys[0], bgDataValue);
                    manageLoading(el, props, obj);
                }
                bg1xValue = getData(el, props.bgMulti);
                bgHiDpiValue = getData(el, props.bgMultiHidpi);
                bgDataValue = (ibr && window.devicePixelRatio > 1 && bgHiDpiValue) ? bgHiDpiValue : bg1xValue;
                if (bgDataValue) {
                    el.style.backgroundImage = bgDataValue;
                    addClass(el, props.appliedClass);
                    setStage(el, st[2]);
                    if (props.removeOnComplete) {
                        unobserve(el, props);
                    }
                    if (props.afterApply) {
                        props.afterApply(el, obj);
                    }
                } else {
                    if (!(el.classList.contains(props.enteredClass))) {
                        addClass(el, props.enteredClass);
                    }
                }
            }
        };
        var cL = function(el, entry, props, obj) {
            if (!props.cancelOnExit) {
                return;
            }
            if (!hasLs(el)) {
                return;
            }
            if (el.tagName !== "IMG") {
                return;
            }
            rmvEvH(el);
            fPS(el, function(sourceTag) {
                resetImgAttrs(sourceTag);
                setLazyAttrs(sourceTag);
            });
            resetImgAttrs(el);
            setLazyAttrs(el);
            removeClass(el, props.loadingClass);
            if (obj && obj._count) {
                obj._count.loading -= 1;
            }
            resetStage(el);
            if (props.onCancel) {
                props.onCancel(el, entry, obj);
            }
        };
        var onEnter = function(el, entry, props, obj) {
            setStage(el, st[3]);
            addClass(el, props.enteredClass);
            removeClass(el, props.exitedClass);
            if (props.removeOnEnter) {
                unobserve(el, obj);
            }
            if (props.onEnter) {
                props.onEnter(el, entry, obj);
            }
            if (hasSL(el)) {
                return;
            }
            load(el, props, obj);
        };
        var onExit = function(el, entry, props, obj) {
            if (hasES(el)) {
                return;
            }
            addClass(el, props.exitedClass);
            cL(el, entry, props, obj);
            if (props.onExit) {
                props.onExit(el, entry, obj);
            }
        };
        var sUNat = function(props) {
            return props.useNative && "loading" in HTMLImageElement.prototype;
        };
        var laN = function(els, props, obj) {
            els.forEach(function(el) {
                if (["IMG", "IFRAME"].indexOf(el.tagName) === -1) {
                    return;
                }
                el.setAttribute("loading", "lazy");
                addEvL(el, props, obj);
                setSources(el, props);
                setStage(el, st[5]);
            });
            if (obj && obj._count) {
                obj._count.remaining = 0;
            }
        };
        var initialize = function(props, obj) {
            obj._count = {
                'loading': 0
            };
            if (!sio || sUNat(props)) {
                return;
            }
            var obsSets = {
                root: props.container === document ? null : props.container,
                rootMargin: props.thresholds || props.threshold + "px"
            };
            obj._obs = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting || entry.intersectionRatio > 0) {
                        return onEnter(entry.target, entry, props, obj)
                    } else {
                        return onExit(entry.target, entry, props, obj);
                    }
                });
            }, obsSets);
        };
        var getAllElements = function(props) {
            return props.container.querySelectorAll(props.selector);
        };
        var fErEls = function(els) {
            return Array.from(els).filter(hasErS);
        };
        var getElementsToLoad = function(els, props) {
            if (els) {
                return Array.from(els).filter(hasES);
            }
            return Array.from(getAllElements(props)).filter(hasES);
        };
        var LyteLazyload = function(userProps, els) {
            var data = userProps ? userProps : {};
            data.selector = data.selector ? data.selector : ".lyteLazyload";
            data.container = data.container ? $L(data.container)[0] : (ibo || ibr ? document : null);
            data.threshold = data.threshold ? data.threshold : 300;
            data.thresholds = data.thresholds ? data.thresholds : null;
            data.src = data.src ? data.src : "src";
            data.srcset = data.srcset ? data.srcset : "srcset";
            data.sizes = data.sizes ? data.sizes : "sizes";
            data.bg = data.bg ? data.bg : "bg";
            data.hidpi = data.hidpi ? data.hidpi : "bg-hidpi";
            data.bgMulti = data.bgMulti ? data.bgMulti : "bg-multi";
            data.bgMultiHidpi = data.bgMultiHidpi ? data.bgMultiHidpi : "bg-multi-hidpi";
            data.poster = data.poster ? data.poster : "poster";
            data.appliedClass = data.appliedClass ? data.appliedClass : "lyteLazyApplied";
            data.loadingClass = data.loadingClass ? data.loadingClass : "lyteLazyLoading";
            data.loadedClass = data.loadedClass ? data.loadedClass : "lyteLazyLoaded";
            data.errorClass = data.errorClass ? data.errorClass : "lyteLazyError";
            data.enteredClass = data.enteredClass ? data.enteredClass : "lyteLazyEntered";
            data.exitedClass = data.exitedClass ? data.exitedClass : "lyteLazyExited";
            data.removeOnComplete = (data.removeOnComplete === undefined) ? true : data.removeOnComplete;
            data.removeOnEnter = (data.removeOnEnter === true) ? data.removeOnEnter : false;
            data.cancelOnExit = (data.cancelOnExit === undefined) ? true : data.cancelOnExit;
            data.useNative = (data.useNative === true) ? data.useNative : false;
            this._props = data;
            initialize(data, this);
            if (ibr) {
                window.addEventListener("online", function() {
                    var errorElements = fErEls(getAllElements(data));
                    errorElements.forEach(function(el) {
                        removeClass(el, data.errorClass);
                        resetStage(el);
                    });
                    this.update();
                }.bind(this));
            }
            this.update(els);
        };
        LyteLazyload.prototype = {
            update: function(els) {
                var props = this._props;
                var elsToLoad = getElementsToLoad(els, props);
                this._count.remaining = elsToLoad.length;
                if (ibo || !sio) {
                    this.loadAll(elsToLoad);
                    return;
                }
                if (sUNat(props)) {
                    laN(elsToLoad, props, this);
                    return;
                }
                var obs = this._obs;
                obs.disconnect();
                elsToLoad.forEach(function(el) {
                    obs.observe(el);
                });
            },
            destroy: function() {
                if (this._obs) {
                    this._obs.disconnect();
                }
                getAllElements(this._props).forEach(function(el) {
                    delete el.lazyAttrs;
                });
                delete this._obs;
                delete this._props;
                delete this._count;
            },
            loadAll: function(els) {
                var _this = this;
                var props = this._props;
                var elsToLoad = getElementsToLoad(els, props);
                elsToLoad.forEach(function(el) {
                    unobserve(el, _this);
                    load(el, props, _this);
                });
            }
        };
        $L.lazyload = function(props, els, misc) {
            if (typeof props === "string") {
                if (els) {
                    if (props === "destroy") {
                        if (Array.isArray(els)) {
                            els.forEach(function(obj) {
                                if (obj instanceof LyteLazyload) {
                                    obj.destroy();
                                }
                            })
                        } else if (els instanceof LyteLazyload) {
                            els.destroy();
                        }
                    } else if (props === "update") {
                        if (Array.isArray(els)) {
                            els.forEach(function(obj) {
                                if (obj instanceof LyteLazyload) {
                                    obj.update(misc);
                                }
                            })
                        } else if (els instanceof LyteLazyload) {
                            els.update(misc);
                        }
                    } else if (props === "loadAll") {
                        if (Array.isArray(els)) {
                            els.forEach(function(obj) {
                                if (obj instanceof LyteLazyload) {
                                    obj.loadAll(misc);
                                }
                            })
                        } else if (els instanceof LyteLazyload) {
                            els.loadAll(misc);
                        }
                    }
                }
                return;
            }
            return new LyteLazyload(props, els);
        };
        $L.lazyload.LyteLazyload = LyteLazyload;
    }
})(window);