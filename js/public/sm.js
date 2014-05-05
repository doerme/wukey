(function() {
    var e = function(e) {
            var t = e,
                n = Array.prototype,
                r = Object.prototype,
                o = n.forEach,
                u = n.some,
                a = n.indexOf,
                f = n.map,
                l = Array.isArray,
                c = r.toString,
                h = r.hasOwnProperty,
                p = {},
                d = encodeURIComponent,
                v = decodeURIComponent,
                m = 4096,
                g = 9,
                y, b, w = document.createElement("a"),
                E = function(e, t) {
                    return (e + "").replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\" + (t || "") + "-]", "g"), "\\$&")
                };
            y = function(e, n) {
                var r = Math.random().toString().replace("0.", ""),
                    i = [],
                    s = m - n.length,
                    o = 0,
                    u = e.join("&"),
                    a = Math.ceil(u.length / s);
                if (a > g) return;
                t.times(a, function(e) {
                    var t = ["|", r, "|", a, "|", e + 1].join(""),
                        i = u.substr(e * s, s),
                        o = new Image(1, 1);
                    o.src = n + [t, d(i)].join("=")
                })
            }, t.allowLinker = !1, t.identity = function(e) {
                return e
            }, t.isEmpty = function(e) {
                if (e == null) return !0;
                if (t.isArray(e) || t.isString(e)) return e.length === 0;
                for (var n in e) if (t.has(e, n)) return !1;
                return !0
            }, t.isElement = function(e) {
                return !!e && e.nodeType === 1
            }, t.isArray = l ||
                function(e) {
                    return c.call(e) === "[object Array]"
                }, t.isObject = function(e) {
                return e === Object(e)
            }, t.isArguments = function(e) {
                return c.call(e) === "[object Arguments]"
            }, t.isArguments(arguments) || (t.isArguments = function(e) {
                return !!e && !! t.has(e, "callee")
            }), t.isFunction = function(e) {
                return c.call(e) === "[object Function]"
            }, t.isString = function(e) {
                return c.call(e) === "[object String]"
            }, t.isNumber = function(e) {
                return c.call(e) === "[object Number]"
            }, t.isFinite = function(e) {
                return t.isNumber(e) && isFinite(e)
            }, t.isNaN = function(e) {
                return e !== e
            }, t.isBoolean = function(e) {
                return e === !0 || e === !1 || c.call(e) === "[object Boolean]"
            }, t.isDate = function(e) {
                return c.call(e) === "[object Date]"
            }, t.isRegExp = function(e) {
                return c.call(e) === "[object RegExp]"
            }, t.isNull = function(e) {
                return e === null
            }, t.isUndefined = function(e) {
                return e === void 0
            }, t.has = function(e, t) {
                return h.call(e, t)
            };
            var S = t.each = function(e, n, r) {
                if (e == null) return;
                if (o && e.forEach === o) e.forEach(n, r);
                else if (e.length === +e.length) for (var i = 0, s = e.length; i < s; i++) {
                    if (n.call(r, e[i], i, e) === p) return
                } else for (var u in e) if (t.has(e, u) && n.call(r, e[u], u, e) === p) return
            };
            t.times = function(e, t, n) {
                for (var r = 0; r < e; r++) t.call(n, r)
            }, t.map = t.collect = function(e, t, n) {
                var r = [];
                return e == null ? r : f && e.map === f ? e.map(t, n) : (S(e, function(e, i, s) {
                    r[r.length] = t.call(n, e, i, s)
                }), r)
            };
            var x = t.some = t.any = function(e, n, r) {
                var i = !1;
                return n = n || t.identity, e == null ? i : u && e.some === u ? e.some(n, r) : (S(e, function(e, t, s) {
                    if (i || (i = n.call(r, e, t, s))) return p
                }), !! i)
            };
            t.include = t.contains = function(e, t) {
                var n = !1;
                return e == null ? n : a && e.indexOf === a ? e.indexOf(t) !== -1 : (n = x(e, function(e) {
                    return e === t
                }), n)
            }, t.throttle = function(e, n) {
                var r, i, s, o, u, a, f = t.debounce(function() {
                    u = o = !1
                }, n);
                return function() {
                    r = this, i = arguments;
                    var t = function() {
                        s = null, u && e.apply(r, i), f()
                    };
                    return s || (s = setTimeout(t, n)), o ? u = !0 : (o = !0, a = e.apply(r, i)), f(), a
                }
            }, t.debounce = function(e, t, n) {
                var r;
                return function() {
                    var i = this,
                        s = arguments,
                        o = function() {
                            r = null, n || e.apply(i, s)
                        },
                        u = n && !r;
                    clearTimeout(r), r = setTimeout(o, t), u && e.apply(i, s)
                }
            }, t.memoize = function(e, n) {
                var r = {};
                return n || (n = t.identity), function() {
                    var i = n.apply(this, arguments);
                    return t.has(r, i) ? r[i] : r[i] = e.apply(this, arguments)
                }
            }, t.hash = function(e) {
                return t.substr(t.md5(e), 12)
            }, t.docWidth = function() {
                var e = document,
                    t = e.body,
                    n = e.documentElement;
                return n.clientWidth || t.clientWidth
            }, t.pageWidth = function() {
                var e = document,
                    t = e.body,
                    n = e.documentElement,
                    r = t.children,
                    s = 0,
                    o, u = n.clientWidth || t.clientWidth,
                    a = function(e) {
                        var t = 0,
                            n;
                        for (n = 0; n < e.length; n += 1) s = e[n].offsetWidth, s > 600 && (s < u - 10 || s > u) && s > t && (t = s);
                        return t
                    },
                    f = function(e) {
                        var t, n, r, i = -1;
                        for (n = 0; n < e.length; n += 1) r = e[n].offsetHeight, r > i && (t = e[n], i = r);
                        return t
                    },
                    l = a(r);
                if (!l) for (i = 0; i < 3; i += 1) {
                    o = f(r);
                    if (o) {
                        r = o.children, l = a(r);
                        if (l) break
                    }
                }
                return l || t.offsetWidth
            }, t.substr = function(e, n) {
                return t.isString(e) ? e.substring(0, n) : ""
            }, t.time = function() {
                return Math.round((new Date).valueOf() / 1E3)
            }, t.getHostByUrl = t.memoize(function(e) {
                var t = w;
                return t.href = e, t.hostname || t.host
            }), t.isSameOrig = function(e, n, r) {
                if (!e) return !1;
                var i = t.getHostByUrl(e),
                    s;
                return i === n ? !0 : r ? (s = new RegExp("(^|\\.)" + E(r) + "$"), s.test(i) && s.test(n)) : !1
            };
            var T = t.parseUrl = t.memoize(function(e) {
                if (!t.isString(e)) return "";
                var n = (new RegExp("#.*$")).exec(e),
                    r = t.isArray(n) ? n[0] : "",
                    i = e.replace(r, "").split("?"),
                    s = i.shift(),
                    o = i.join("?") || "",
                    u = [],
                    a = o ? t.map(o.split("&"), function(e) {
                        return e.split("=")
                    }) : [];
                return {
                    uri: s,
                    params: a,
                    hash: r,
                    qs: o
                }
            });
            t.urlContain = function(e, n) {
                var r = T(e);
                return t.any(r.params, function(e) {
                    return t.any(n, function(t) {
                        return e[0] == t
                    })
                })
            }, t.urlIgnoreIndex = function(e, n) {
                var r = t.parseUrl(e),
                    i = "";
                return !r || !r.uri ? i : (x(n, function(e) {
                    var t = new RegExp("/" + E(e) + "$");
                    return r.uri = r.uri.replace(t, "/"), t.test(r.uri)
                }), i = r.qs ? [r.uri, r.qs].join("?") : r.uri, i + r.hash)
            }, t.urlFilter = function(e, n) {
                if (!t.isString(e)) return "";
                var r = T(e),
                    i = "",
                    s = [];
                return t.each(r.params, function(e) {
                    t.any(n, function(t) {
                        var n = new RegExp("^" + t + "$", "i");
                        return n.test(e[0])
                    }) || s.push(e.join("="))
                }), s.length ? i = [r.uri, s.join("&")].join("?") : i = r.uri, r.hash && (i += r.hash), i
            }, t.urlFind = function(e, n) {
                if (!t.isString(e)) return [];
                var r = T(e),
                    i = [];
                return t.each(n, function(e) {
                    t.each(r.params, function(t) {
                        var n = new RegExp("^" + e + "$", "i");
                        n.test(t[0]) && i.push(t.join("="))
                    })
                }), i.join("&")
            }, t.each(["Width", "Height"], function(e) {
                t["doc" + e] = function() {
                    var t = document,
                        n = t.documentElement,
                        r = "scroll" + e,
                        i = "offset" + e,
                        s = "client" + e;
                    return Math.max(t.body[r], n[r], t.body[i], n[i], n[s])
                }
            }), t.intval = function(e) {
                return parseInt(e, 10) || 0
            }, t.floatval = function(e, t) {
                var n = Math.pow(10, t || 0);
                return e = parseFloat(e) || 0, Math.round(e * n) / n
            }, t.scrollTop = function() {
                try {
                    return t.intval(window.pageYOffset || document.documentElement.scrollTop)
                } catch (e) {
                    return 0
                }
            }, t.scrollLeft = function() {
                try {
                    return t.intval(window.pageXOffset || document.documentElement.scrollLeft)
                } catch (e) {
                    return 0
                }
            }, t.viewHeight = function() {
                try {
                    return document.documentElement.clientHeight || document.body.clientHeight
                } catch (e) {
                    return 0
                }
            }, t.viewWidth = function() {
                try {
                    return document.documentElement.clientWidth || document.body.clientWidth
                } catch (e) {
                    return 0
                }
            }, b = function() {
                return ["_", Math.round(Math.random() * 1E6)].join("=")
            }, t.request = function(e, n) {
                if (!n) return;
                var r = new Image(1, 1),
                    i = n[1] || null,
                    o = n[0] || null,
                    u = e + i + "?",
                    a = m - u.length,
                    f = "",
                    l = [],
                    c;
                if (!i || !o) return;
                t.each(o, function(e, n) {
                    t.isArray(e) ? t.each(e, function(e) {
                        l.push([n, d(e)].join("="))
                    }) : l.push([n, d(e)].join("="))
                }), f = l.join("&"), f.length > a ? y(l, u) : (r.src = u + f + "&" + b(), c = function(e) {
                    r = new Image(1, 1), r.src = u + f + "&" + b() + "&retry=yes"
                }, s.addEvent(r, "error", c))
            }, t.isSameDay = function(e, t) {
                return Math.floor(e / 86400) === Math.floor(t / 86400)
            }, t.getCopyText = function() {
                var e = "";
                try {
                    e = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text, (!e || e === "") && document.activeElement.selectionStart && (e = document.activeElement.value.substring(document.activeElement.selectionStart, document.activeElement.selectionEnd))
                } catch (t) {}
                return e + ""
            }, t.flashVersion = function() {
                var e = "",
                    t = navigator,
                    n;
                if (t.plugins && t.plugins.length) for (n = 0; n < t.plugins.length; n++) {
                    if (t.plugins[n].name.indexOf("Shockwave Flash") != -1) {
                        e = t.plugins[n].description.split("Shockwave Flash ")[1];
                        break
                    }
                } else if (window.ActiveXObject) for (n = 10; n >= 2; n--) try {
                    var r = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + n);
                    if (r) {
                        e = n + ".0";
                        break
                    }
                } catch (i) {}
                return e
            }, t.getSmtz = function(e, n, r, i, s) {
                var o = "cp,md,pl,ct,kw".split(","),
                    u = {},
                    a = {},
                    f, l, c, h;
                return e = e || "", !t.isString(e) || !t.isString(n) ? "" : (querys = t.urlFind(n, ["smt_\\w+"]), t.each(querys.split("&"), function(e) {
                    var t = e.split("=");
                    u[t[0]] = t[1]
                }), t.isUndefined(u.smt_b) ? x(["md", "pl", "cp"], function(e) {
                    return t.isUndefined(u["smt_" + e])
                }) ? (f = t.getKeyword(e, r), f !== !1 ? {
                    smt_cp: "(organic)",
                    smt_md: f[0],
                    smt_pl: "organic",
                    smt_kw: f[1]
                } : (l = t.getSocialUid(e, i), l !== !1 ? {
                    smt_cp: "(social)",
                    smt_md: l[0],
                    smt_pl: "social",
                    smt_kw: l[1]
                } : (c = t.getHostByUrl(e), h = t.getHostByUrl(n), e ? {
                    smt_cp: "(referral)",
                    smt_md: c,
                    smt_pl: "referral",
                    smt_ct: t.getPathByUrl(e)
                } : {
                    smt_cp: "(direct)",
                    smt_md: "(direct)",
                    smt_pl: "(none)"
                }))) : (a = {}, S(o, function(e) {
                    var n = "smt_" + e,
                        r = u[n];
                    t.isUndefined(r) || (a[n] = r)
                }), a) : {
                    smt_b: u.smt_b
                })
            }, t.getPathByUrl = t.memoize(function(e) {
                var t = T(e),
                    n = t.uri.split("#")[0];
                return "/" + n.split("/").slice(3).join("/")
            }), t.getSocialUid = function(e, n, r) {
                var i, s, o, u, a = t.getHostByUrl(e);
                return t.has(n, a) ? (i = T(e), s = i.uri.split("#")[0].split("&")[0], u = s.split("/"), a === "www.renren.com" ? o = parseInt(u[4], 10) || parseInt(u[3], 10) : a !== "weibo.com" && a !== "www.weibo.com" || u[3] !== "u" ? a === "s.weibo.com" ? o = u.slice(3, 5).join("/") : o = u[3] : o = parseInt(u[4], 10), [a, o]) : !1
            }, t.getKeyword = function(e, n) {
                var r, i, s = t.getHostByUrl(e);
                return t.has(n, s) ? (r = T(e), t.any(r.params, function(e) {
                    if (t.include(n[s], e[0])) return i = e[1], !0
                }) ? [s, i] : !1) : !1
            }, t.hash2str = function(e, n) {
                var r = [];
                return t.each(n, function(n) {
                    t.isUndefined(e[n]) || r.push([n, e[n]].join("="))
                }), r.join("&")
            }, t.str2hash = function(e) {
                var n = {};
                return t.each(e.split("&"), function(e) {
                    var t = e.split("=");
                    n[t[0]] = t[1]
                }), n
            }, t.handle_arguments = function(e, n) {
                return t.map(n, function(n, r) {
                    var i = e[r];
                    if (!t.isString(i) && !t.isNumber(i) && !t.isUndefined(i)) throw new Error("param error");
                    if (n[0] !== "required" || !t.isUndefined(i) && i.toString().length !== 0) {
                        if (n[1] === "string") i = i.toString().replace(/\,/g, "%2C");
                        else if (n[1] === "float") i = t.floatval(i, n[2]);
                        else if (n[1] === "int") {
                            i = t.intval(i);
                            if (n[2] && n[2] > i || n[3] && n[3] < i) throw new Error("param error");
                        }
                        return i
                    }
                    throw new Error("param error");
                }).join(",")
            }, t.getLinkerVar = t.memoize(function(e) {
                var n, r = {},
                    i = "_smta,_smtz,_smtr,_smtb".split(",");
                n = t.parseUrl(e), n.hash && t.each(n.hash.substr(1).split("&"), function(e) {
                    n.params.push(e.split("="))
                }), t.each(n.params, function(e) {
                    t.include(i, e[0]) && (r[e[0]] = v(e[1]))
                });
                if (t.isUndefined(r._smta) || t.isUndefined(r._smtz)) delete r._smta, delete r._smtz;
                return r
            });
            var N = function(e, n, r, i) {
                var s = null,
                    o = "_smt" + e;
                if (t.allowLinker) {
                    s = t.getLinkerVar(n);
                    if (s[o]) return r.setCookie(o, s[o], 62208E3, i), s[o];
                    t.allowLinker = !1
                }
                return r.getCookie(o)
            };
            return t.getSmtrByLink = function(e, n) {
                var r;
                if (t.allowLinker) {
                    r = t.getLinkerVar(e);
                    if (t.isString(r._smtr)) return r._smtr
                }
                return n
            }, t.getSmtbByLink = function(e) {
                var n = t.getLinkerVar(e);
                return n._smtb || ""
            }, t.getSmtaByLink = function(e, t, n) {
                return N("a", e, t, n)
            }, t.getSmtzByLink = function(e, t, n) {
                return N("z", e, t, n)
            }, t.findParentA = function(e) {
                return e ? e.tagName ? e.tagName.toLowerCase() !== "a" ? t.findParentA(e.parentNode) : e : !1 : !1
            }, t.decodeSmtb = function(e) {
                var t = [],
                    n = [],
                    r, i, s, o, u, a;
                e = e.split("").reverse(), e.length === 23 && e.push(0);
                for (o = 0; o < e.length; o += 2) t = [], t.push(e[o + 1]), t.push(e[o]), u = t.join(""), a = parseInt(u, 16), a < o / 2 + 1 && (a += 256), a -= o / 2 + 1, n.push(a);
                return r = (n[0] << 24) + (n[1] << 16) + (n[2] << 8) + n[3], i = (n[4] << 24) + (n[5] << 16) + (n[6] << 8) + n[7], s = (n[8] << 24) + (n[9] << 16) + (n[10] << 8) + n[11], [r, i, s]
            }, t.encodeSmtb = function(e, n, r, i) {
                var s = [],
                    o = 1,
                    u = "";
                try {
                    t.each([e, n, r], function(e) {
                        t.each([24, 16, 8, 0], function(t) {
                            var n = (e >> t & 255) + o;
                            n = n >= 256 ? n - 256 : n, n = (n << 4 & 240) + (n >> 4), n = n.toString(16), n.length === 1 && (n = "0" + n), s.push(n), o += 1
                        })
                    }), u = s.join("").split("").reverse().join("").replace(/^0+/, "").toUpperCase();
                    if (!i) return u;
                    i(null, u)
                } catch (a) {
                    i && i(a)
                }
            }, t.localPath = undefined, t.qsParse = function(e) {
                var n = e.split("&"),
                    r = {};
                return t.each(n, function(e, n) {
                    var i = e.split("="),
                        s = i[0];
                    if (i.length !== 2) return;
                    var o = decodeURIComponent(i[1]),
                        u = r[s];
                    u ? (t.isString(u) && (r[s] = [u]), r[s].push(o)) : r[s] = o
                }), r
            }, t.qsStringify = function(e) {
                var n = "";
                for (var r in e) {
                    var i = e[r];
                    if (t.isArray(i)) t.each(i, function(e) {
                        n += r + "=" + encodeURIComponent(e) + "&"
                    });
                    else if (t.isNumber(i)) {
                        var s = i + "";
                        n += r + "=" + encodeURIComponent(s) + "&"
                    } else {
                        var s = i + "";
                        n += r + "=" + encodeURIComponent(s) + "&"
                    }
                }
                return n ? n.slice(0, -1) : ""
            }, t.setCustomVar = function(e, n, r, i, s, o) {
                if (!t.isNumber(n) || !t.isString(r) || !t.isNumber(i)) return;
                if (r === "") return;
                if (n > 5) return;
                i > 3 && (i = 2);
                var u = "v" + n,
                    a = "s" + n,
                    f = t.getCookie("_smtv"),
                    l = t.qsParse(f) || {};
                l.hasOwnProperty(u) && i !== 1 ? (delete l[u], delete l[a], t.setCookie("_smtv", t.qsStringify(l), 62208E5, s, o)) : i === 1 && (l[u] = r, l[a] = i, t.setCookie("_smtv", t.qsStringify(l), 62208E6, s, o)), e[u] = r, e[a] = i
            }, t
        },
        t = function(e) {
            function t(e, t) {
                var n = (e & 65535) + (t & 65535),
                    r = (e >> 16) + (t >> 16) + (n >> 16);
                return r << 16 | n & 65535
            }
            function n(e, t) {
                return e << t | e >>> 32 - t
            }
            function r(e, r, i, s, o, u) {
                return t(n(t(t(r, e), t(s, u)), o), i)
            }
            function i(e, t, n, i, s, o, u) {
                return r(t & n | ~t & i, e, t, s, o, u)
            }
            function s(e, t, n, i, s, o, u) {
                return r(t & i | n & ~i, e, t, s, o, u)
            }
            function o(e, t, n, i, s, o, u) {
                return r(t ^ n ^ i, e, t, s, o, u)
            }
            function u(e, t, n, i, s, o, u) {
                return r(n ^ (t | ~i), e, t, s, o, u)
            }
            function a(e, n) {
                e[n >> 5] |= 128 << n % 32, e[(n + 64 >>> 9 << 4) + 14] = n;
                var r, a, f, l, c, h = 1732584193,
                    p = -271733879,
                    d = -1732584194,
                    v = 271733878;
                for (r = 0; r < e.length; r += 16) a = h, f = p, l = d, c = v, h = i(h, p, d, v, e[r], 7, -680876936), v = i(v, h, p, d, e[r + 1], 12, -389564586), d = i(d, v, h, p, e[r + 2], 17, 606105819), p = i(p, d, v, h, e[r + 3], 22, -1044525330), h = i(h, p, d, v, e[r + 4], 7, -176418897), v = i(v, h, p, d, e[r + 5], 12, 1200080426), d = i(d, v, h, p, e[r + 6], 17, -1473231341), p = i(p, d, v, h, e[r + 7], 22, -45705983), h = i(h, p, d, v, e[r + 8], 7, 1770035416), v = i(v, h, p, d, e[r + 9], 12, -1958414417), d = i(d, v, h, p, e[r + 10], 17, -42063), p = i(p, d, v, h, e[r + 11], 22, -1990404162), h = i(h, p, d, v, e[r + 12], 7, 1804603682), v = i(v, h, p, d, e[r + 13], 12, -40341101), d = i(d, v, h, p, e[r + 14], 17, -1502002290), p = i(p, d, v, h, e[r + 15], 22, 1236535329), h = s(h, p, d, v, e[r + 1], 5, -165796510), v = s(v, h, p, d, e[r + 6], 9, -1069501632), d = s(d, v, h, p, e[r + 11], 14, 643717713), p = s(p, d, v, h, e[r], 20, -373897302), h = s(h, p, d, v, e[r + 5], 5, -701558691), v = s(v, h, p, d, e[r + 10], 9, 38016083), d = s(d, v, h, p, e[r + 15], 14, -660478335), p = s(p, d, v, h, e[r + 4], 20, -405537848), h = s(h, p, d, v, e[r + 9], 5, 568446438), v = s(v, h, p, d, e[r + 14], 9, -1019803690), d = s(d, v, h, p, e[r + 3], 14, -187363961), p = s(p, d, v, h, e[r + 8], 20, 1163531501), h = s(h, p, d, v, e[r + 13], 5, -1444681467), v = s(v, h, p, d, e[r + 2], 9, -51403784), d = s(d, v, h, p, e[r + 7], 14, 1735328473), p = s(p, d, v, h, e[r + 12], 20, -1926607734), h = o(h, p, d, v, e[r + 5], 4, -378558), v = o(v, h, p, d, e[r + 8], 11, -2022574463), d = o(d, v, h, p, e[r + 11], 16, 1839030562), p = o(p, d, v, h, e[r + 14], 23, -35309556), h = o(h, p, d, v, e[r + 1], 4, -1530992060), v = o(v, h, p, d, e[r + 4], 11, 1272893353), d = o(d, v, h, p, e[r + 7], 16, -155497632), p = o(p, d, v, h, e[r + 10], 23, -1094730640), h = o(h, p, d, v, e[r + 13], 4, 681279174), v = o(v, h, p, d, e[r], 11, -358537222), d = o(d, v, h, p, e[r + 3], 16, -722521979), p = o(p, d, v, h, e[r + 6], 23, 76029189), h = o(h, p, d, v, e[r + 9], 4, -640364487), v = o(v, h, p, d, e[r + 12], 11, -421815835), d = o(d, v, h, p, e[r + 15], 16, 530742520), p = o(p, d, v, h, e[r + 2], 23, -995338651), h = u(h, p, d, v, e[r], 6, -198630844), v = u(v, h, p, d, e[r + 7], 10, 1126891415), d = u(d, v, h, p, e[r + 14], 15, -1416354905), p = u(p, d, v, h, e[r + 5], 21, -57434055), h = u(h, p, d, v, e[r + 12], 6, 1700485571), v = u(v, h, p, d, e[r + 3], 10, -1894986606), d = u(d, v, h, p, e[r + 10], 15, -1051523), p = u(p, d, v, h, e[r + 1], 21, -2054922799), h = u(h, p, d, v, e[r + 8], 6, 1873313359), v = u(v, h, p, d, e[r + 15], 10, -30611744), d = u(d, v, h, p, e[r + 6], 15, -1560198380), p = u(p, d, v, h, e[r + 13], 21, 1309151649), h = u(h, p, d, v, e[r + 4], 6, -145523070), v = u(v, h, p, d, e[r + 11], 10, -1120210379), d = u(d, v, h, p, e[r + 2], 15, 718787259), p = u(p, d, v, h, e[r + 9], 21, -343485551), h = t(h, a), p = t(p, f), d = t(d, l), v = t(v, c);
                return [h, p, d, v]
            }
            function f(e) {
                var t, n = "";
                for (t = 0; t < e.length * 32; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                return n
            }
            function l(e) {
                var t, n = [];
                n[(e.length >> 2) - 1] = undefined;
                for (t = 0; t < n.length; t += 1) n[t] = 0;
                for (t = 0; t < e.length * 8; t += 8) n[t >> 5] |= (e.charCodeAt(t / 8) & 255) << t % 32;
                return n
            }
            function c(e) {
                return f(a(l(e), e.length * 8))
            }
            function h(e, t) {
                var n, r = l(e),
                    i = [],
                    s = [],
                    o;
                i[15] = s[15] = undefined, r.length > 16 && (r = a(r, e.length * 8));
                for (n = 0; n < 16; n += 1) i[n] = r[n] ^ 909522486, s[n] = r[n] ^ 1549556828;
                return o = a(i.concat(l(t)), 512 + t.length * 8), f(a(s.concat(o), 640))
            }
            function p(e) {
                var t = "0123456789abcdef",
                    n = "",
                    r, i;
                for (i = 0; i < e.length; i += 1) r = e.charCodeAt(i), n += t.charAt(r >>> 4 & 15) + t.charAt(r & 15);
                return n
            }
            function d(e) {
                return unescape(encodeURIComponent(e))
            }
            function v(e) {
                return c(d(e))
            }

            function m(e) {
                return p(v(e))
            }
            function g(e, t) {
                return h(d(e), d(t))
            }
            function y(e, t) {
                return p(g(e, t))
            }
            function b(e, t, n) {
                return t ? n ? g(t, e) : y(t, e) : n ? v(e) : m(e)
            }
            e.md5 = b
        },
        n = function(e) {
            var t = /^(?:body|html)$/i,
                n = 1,
                r = document.body,
                i = r.offsetTop !== n,
                s = function(e) {
                    return e != null && e == e.window
                },
                o = function(e) {
                    return e === Object(e)
                },
                u = function(e) {
                    return s(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
                },
                a = function(e) {
                    var t = e.offsetTop,
                        n = e.offsetLeft,
                        r = e.style;
                    return i && (t += parseFloat(r.marginTop) || 0, n += parseFloat(r.marginLeft) || 0), {
                        top: t,
                        left: n
                    }
                },
                f = function(e) {
                    var t, n, r, i, s, f, l, c, h, p, d, v, m = o(e) ? e : document.getElementById(e);
                    return t = m && m.ownerDocument, t ? (i = t.body) === m ? a(m) : (r = t.documentElement, v = r.compareDocumentPosition ?
                        function(e, t) {
                            return !!(e.compareDocumentPosition(t) & 16)
                        } : r.contains ?
                        function(e, t) {
                            return e !== t && (e.contains ? e.contains(t) : !1)
                        } : function(e, t) {
                        while (t = t.parentNode) if (t === e) return !0;
                        return !1
                    }, v(r, m) ? (n = m.getBoundingClientRect(), s = u(t), f = r.clientTop || i.clientTop || 0, l = r.clientLeft || i.clientLeft || 0, c = s.pageYOffset || r.scrollTop, h = s.pageXOffset || r.scrollLeft, p = n.top + c - f, d = n.left + h - l, {
                        top: p,
                        left: d
                    }) : {
                        top: 0,
                        left: 0
                    }) : null
                };
            e.offset = f
        },
        r = function(e) {
            function r(e) {
                var t = {},
                    r = e.split(/ *; */),
                    i;
                if ("" == r[0]) return t;
                for (var s = 0; s < r.length; ++s) i = r[s].split("="), t[n(i[0])] = n(i[1]);
                return t
            }
            function i() {
                return navigator.cookieEnabled
            }
            function s(e, n, r, i, s) {
                var o = t(e) + "=" + t(n);
                if (null == n || n === "") r = -1;
                r && (r = new Date(+new Date + r)), s && (o += "; path=" + s), i && (o += "; domain=" + i), r && (o += "; expires=" + r.toUTCString()), document.cookie = o
            }
            var t = encodeURIComponent,
                n = decodeURIComponent;
            return e.cookieEnable = function() {
                var e = i() ? 4 : 0,
                    t = 2,
                    n = 0;
                return e + t + n
            }, e.getCookie = function(e) {
                return r(document.cookie)[e] || ""
            }, e.setCookie = function(e, t, n, r, i) {
                r === "localhost" && (r = null), i || (i = "/"), t !== "" && t !== null && r && (s(e, "", null, "", i), s(e, "", null, "", "/")), s(e, t, n, r, i)
            }, e
        },
        s = {
            addEvent: function(e, t, n) {
                var r = "addEventListener",
                    i = "attachEvent",
                    s = "on" + t;
                e[r] ? e[r](t, n, !1) : e[i] ? e[i](s, n) : e[s] = n
            },
            removeEvent: function(e, t, n) {
                var r = "removeEventListener",
                    i = "detachEvent",
                    s = "on" + t;
                e[r] ? e[r](t, n, !1) : e[i] ? e[i](s, n) : e[s] = null
            },
            getEvent: function(e) {
                return e || window.event
            },
            getTarget: function(e) {
                return e && (e.target || e.srcElement || null)
            }
        },
        o = function(e) {
            var t = {},
                n = 60,
                r = 86400,
                i = navigator,
                s = window,
                o = document,
                u = o.documentElement,
                a = {},
                f = e.time(),
                l, c, h = "/",
                p = [],
                d = 30 * n,
                v = 85,
                m = 10,
                g = "smt_\\w+,utm_\\w+".split(","),
                y = "smt_\\w+".split(","),
                b = !1,
                w = !1,
                E = {
                    "www.google.com": ["q"],
                    "www.google.com.hk": ["q"],
                    "www.yahoo.cn": ["q"],
                    "www.bing.com": ["q"],
                    "www.baidu.com": ["wd", "word"],
                    "m.baidu.com": ["word"],
                    "www.sogou.com": ["query"],
                    "www.youdao.com": ["q"],
                    "www.soso.com": ["w"],
                    "so.360.cn": ["q"],
                    "www.so.com": ["q"],
                    "www.google.com.tw": ["q"]
                },
                S = {},
                x = [
                    ["required", "string"],
                    ["required", "string"],
                    ["required", "float", 2],
                    ["optional", "float", 2],
                    ["optional", "float", 2],
                    ["required", "string"],
                    ["required", "string"]
                ],
                T = [
                    ["required", "string"],
                    ["required", "string"],
                    ["required", "string"],
                    ["required", "float", 2],
                    ["required", "int", 1]
                ],
                N = {
                    "qzone.qq.com": "",
                    "user.qzone.qq.com": "",
                    "weibo.com": "",
                    "weibo.cn": "",
                    "e.weibo.com": "",
                    "t.qq.com": "",
                    "e.t.qq.com": "",
                    "renren.com": "",
                    "page.renren.com": "",
                    "www.weibo.com": "",
                    "m.weibo.cn": "",
                    "huati.weibo.com": "",
                    "s.weibo.com": ""
                },
                C = {},
                k = function() {
                    var t = e.getCookie("_smtv"),
                        n = e.qsParse(t) || {};
                    return n
                },
                L = "smt_md,smt_pl,smt_kw,smt_ct,smt_cp,smt_b".split(","),
                A = function() {
                    e.setCookie("_smtp", a.pid, 720 * r, c, h)
                },
                O = function(t) {
                    var n = e.getCookie("_smtp"),
                        r = e.getCookie("_smtt"),
                        i = e.time();
                    return t === n && i < +r + m
                },
                M = function(e, t, n) {
                    return Math.round(n - (t - e) / 2)
                },
                _ = function() {
                    var t = e.intval(Math.random() * f);
                    return t = t < 1E8 ? 1E8 + t : t, [f.toString(16), t.toString(16)].join(".")
                },
                D = function(t) {
                    var n = (t || "").split("."),
                        i = parseInt(n[0] || 0, 16),
                        s = parseInt(n[1] || 0, 16);
                    return e.isUndefined(i) || i > f || i < f - 720 * r ? !1 : e.isUndefined(s) || s < 1E8 || s > f ? !1 : !0
                },
                P = function() {
                    return f
                },
                H = function(t) {
                    a.smtz = e.hash2str(t, L), e.setCookie("_smtz", a.smtz, 720 * r, c, h)
                },
                B = function(n, r, i) {
                    var s, o = e.getSmtzByLink(a.url, e, c),
                        u = {};
                    return a.smtz = o, !n || !r || i ? (s = e.getSmtz(a.rl, t.referrerSmtEnabled === "yes" ? a.rl : a.url, E, N, c), H(s), !1) : e.isSameDay(n, e.time()) ? e.intval(r) >= f && e.isSameOrig(a.rl, a.ht, c) ? (a.smtz = o, !0) : (s = e.getSmtz(a.rl, t.referrerSmtEnabled === "yes" ? a.rl : a.url, E, N, c), e.intval(r) < f ? (s.smt_cp === "(direct)" ? a.smtz = o : H(s), !1) : s.smt_cp === "(direct)" || s.smt_cp === "(referral)" ? !0 : (u = e.str2hash(o), e.any(L, function(e) {
                        if (s[e] !== u[e]) return !0
                    }) ? (H(s), !1) : !0)) : (a.smtz = o, !1)
                },
                j = function() {
                    var t = F(),
                        n = t[0] || "0.0",
                        i = e.intval(t[1]) || 0,
                        s = e.intval(t[2]) || 0,
                        o = e.intval(t[3]) || 1,
                        u = e.intval(t[4]) || 0,
                        p = 0,
                        v = e.intval(t[6]) || 0,
                        m = !1;
                    return newVisit = !1, D(n) || (p = 1, n = _()), m = B(i, s, p), !p && m ? o += 1 : (o = 1, v = i || f, i = P(), u += 1, newVisit = !0), s = f + d, e.setCookie("_smta", [n, i, s, o, u, p, v].join(","), 720 * r, c, h), a.id = [l, n, i.toString(16), a.pid, o.toString(16)].join("."), a.vf = +(v == i), a.vi = u, a.vl = v.toString(16), newVisit
                },
                F = function() {
                    var t = e.getSmtaByLink(a.url, e, c);
                    return (e.isString(t) && t || "").split(",")
                },
                I = function() {
                    a.url = o.location.href, a.pid = e.hash(e.urlFilter(e.urlIgnoreIndex(a.url, p), g)), a.tl = o.title, a.cs = o.charset || o.characterSet, a.ht = o.location.host, a.rl = e.getSmtrByLink(a.url, o.referrer), a.rp = e.hash(e.urlFilter(a.rl, g)), a.ci = e.cookieEnable(), a.fv = e.flashVersion(), a.sr = [s.screen.width, s.screen.height].join("x"), a.sc = screen.colorDepth, a.tz = (new Date).getTimezoneOffset() / -60;
                    try {
                        a.je = e.isFunction(i.javaEnabled) && i.javaEnabled() ? 1 : 0
                    } catch (t) {
                        a.je = 0
                    }
                    a.sp = e.scrollTop(), a.vh = e.viewHeight();
                    var n = 0;
                    window.performance && window.performance.timing !== undefined && (n = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.fetchStart), a.pt = n
                };
            t.pageview = function(t, n) {
                var r = "id,url,tl,cs,vf,vi,rl,ci,fv,sr,sc,tz,je,vh,rp,vl,smtz,pt".split(","),
                    i = "",
                    s = {};
                I(), e.isString(t) && t && t.charAt(0) === "/" && (a.url = e.urlIgnoreIndex([o.location.protocol, "//", a.ht, t].join(""), p), a.pid = i = e.hash(e.urlFilter(a.url, g))), e.isString(n) && (a.tl = n), f = e.time(), j(), e.each(r, function(e) {
                    e === "id" && i ? (idArray = a.id.split("."), idArray[4] = i, s.id = idArray.join(".")) : s[e] = a[e]
                }), s.sp = e.scrollTop(), s.rf = O(a.pid) ? 1 : 0, A();
                var u = k();
                for (var l in u) C[l] = u[l];
                return s.vars = e.qsStringify(C), w = !0, [s, "p"]
            }, t.vpageview = function(e, n) {
                return t.pageview.apply(this, arguments)
            }, t.clickEvent = function(t, n) {
                var r = {};
                return r.id = a.id, r.pw = e.pageWidth(), r.x = M(r.pw, e.docWidth(), t), r.y = n, [r, "k"]
            }, t.pageClose = function() {
                var t = {};
                return t.id = a.id, t.sp = e.scrollTop(), t.vh = e.viewHeight(), [t, "x"]
            }, t.copyEvent = function(t) {
                var n = {};
                return n.id = a.id, n.cv = e.substr(t, v), n.cs = a.cs, [n, "c"]
            }, t.inputEvent = function(t, n, r) {
                var i = {};
                return i.id = a.id, i.pw = e.pageWidth(), i.x = M(i.pw, e.docWidth(), t), i.y = n, i.iv = e.substr(r, v), i.cs = a.cs, [i, "i"]
            }, t.pageScroll = function() {
                var t = {};
                return t.id = a.id, t.sp = e.scrollTop(), t.vh = e.viewHeight(), [t, "s"]
            }, t.heartEvent = function(t, n, r) {
                var i = {};
                return i.id = a.id, i.pw = e.pageWidth(), i.x = M(i.pw, e.docWidth(), n), i.y = r + e.scrollTop(), i.hn = t, [i, "h"]
            }, t.mouseEvent = function(t, n) {
                var r = {};
                return r.id = a.id, r.pw = e.pageWidth(), r.x = M(r.pw, e.docWidth(), t), r.y = n, [r, "m"]
            }, t.custom = function(t, n, r, i, s) {
                var o = {};
                o.id = a.id, o.cat = e.substr(t, v), o.act = e.substr(n, v), o.lbl = e.substr(r, v), o.val = e.intval(i), o.brf = s ? 1 : 0;
                if (o.cat.length * o.act.length === 0) return;
                return [o, "t"]
            }, t._setAccount = function(e, t) {
                l = e
            }, t._setDomainName = function(e) {
                t.domain = c = e
            }, t._setCookiePath = function(e) {
                t.cookiePath = h = e
            }, t._setClickTimeOut = function(n) {
                t.clickTimeout = e.intval(n)
            }, t._setDirectoryIndex = function() {
                p = e.map(arguments, function(e) {
                    return e
                })
            }, t._addOrganic = function(t, n) {
                E[t] || (E[t] = e.map(Array.prototype.slice.call(arguments, 1), function(e) {
                    return e
                }))
            }, t.__saveCurPid = function() {
                w && A()
            }, t.addTrans = function() {
                try {
                    var t = e.handle_arguments(arguments, x);
                    S.order = t, S.items = []
                } catch (n) {}
            }, t.addItem = function(t, n, r, i, s) {
                try {
                    var o = e.handle_arguments(arguments, T);
                    S.items.push(o)
                } catch (u) {}
            }, t.trackTrans = function() {
                if (S.order && S.items.length > 0) return S.id = a.id, [S, "e"]
            }, t._setAllowLinker = function(t) {
                e.allowLinker = !! t
            };
            var q = t._getLinkerUrl = function(t, n, r) {
                var i = n === "referrer" ? "referrer" : "cookie",
                    s = [],
                    u, f, l, h, p, d = a.url || o.location.href,
                    v = a.rl || o.referrer,
                    m = e.parseUrl(t),
                    g = encodeURIComponent;
                return i === "referrer" ? (l = e.getSmtrByLink(d, v), s.push("_smtr=" + g(l)), f = e.getSmtbByLink(d), f && s.push("&_smtb=" + g(f))) : (u = e.getSmtaByLink(d, e, c), h = e.getSmtzByLink(d, e, c), u && h && (u && s.push("_smta=" + g(u)), h && s.push("_smtz=" + g(h)))), p = m.uri, m.qs && (p += "?" + m.qs), r ? p += (m.hash ? m.hash + "&" : "#") + s.join("&") : (m.qs ? p += "&" : s.length && (p += "?"), p += s.join("&") + m.hash), p
            };
            return t._link = function(t, n, r, i) {
                var s = q(t, r, i);
                e.isUndefined(n) || e.isUndefined(n.href) ? location.href = s : n.href = s
            }, t.heatmapEnabled = "yes", t._setHeatmapEnabled = function(e) {
                t.heatmapEnabled = e === "yes" ? "yes" : "no"
            }, t.referrerSmtEnabled = "no", t._setReferrerSmtEnabled = function(e) {
                t.referrerSmtEnabled = e === "yes" ? "yes" : "no"
            }, t._decodeSmt_b = function(n, r) {
                var i = t.referrerSmtEnabled === "yes" ? a.rl : a.url,
                    s = e.getSmtz(a.rl, i, E, N, c).smt_b,
                    o = e.getSmtzByLink(a.url, e, c),
                    u = function() {
                        var t = {};
                        return e.each(o.split("&"), function(e) {
                            var n = e.split("=");
                            t[n[0]] = decodeURIComponent(n[1] || "")
                        }), t
                    }(),
                    f = r && n || s || u.smt_b,
                    r = r || n;
                if (!f) return r(Error("Smtb not found"));
                r(null, e.decodeSmtb(f))
            }, t._encodeSmt_b = e.encodeSmtb, t._setLocalPath = function(t) {
                if (!e.isString(t)) return;
                t[t.length - 1] !== "/" && (t += "/"), e.localPath = t
            }, t._setCustomVar = function(t, n, r) {
                e.setCustomVar(C, t, n, r, c, h)
            }, t
        },
        u = function() {
            var i = e({}),
                u = !1,
                a = !1,
                f = 60,
                l = 30 * f,
                c = 2E3,
                h = function() {
                    return /^https:/.test(document.location.protocol) ? "https://smt.admaster.com.cn/" : "http://smt.admaster.com.cn/"
                }(),
                p = 90,
                d = 30,
                v = i.time(),
                m = v,
                g = m,
                y = 0,
                b = null,
                w = 0,
                E = 0,
                S = 0,
                x = 0,
                T = !1,
                N = null,
                C = !1,
                k = !1,
                L = null,
                A = document.getElementsByTagName("input"),
                O = document.getElementsByTagName("textarea"),
                M = "pageview,vpageview,custom,eCommerce,clickEvent,copyEvent,pageClose,addTrans,addItem,trackTrans,_setClickTimeOut,_link,_getLinkerUrl,_setAccount,_setDirectoryIndex,_setDomainName,_setCookiePath,_addOrganic,_setCustomVar".split(","),
                _ = function(e) {
                    var t, n, r;
                    t = e.shift();
                    if (!i.isFunction(N[t])) return;
                    if (t === "_setAccount") a = !0;
                    else if (a === !1) return;
                    if (t === "pageview") u = !0;
                    else if (t.substr(0, 1) !== "_" && u === !1) return;
                    r = i.time(), t !== "pageview" && v < r - l && (v = r, n = N.pageview(), i.request(h, n), i.localPath && i.request(i.localPath, n)), t !== "heartEvent" && P(), n = N[t].apply(N, e);
                    if (i.isArray(n)) g = r, i.setCookie("_smtt", g, 864E4, N.domain, N.cookiePath), i.request(h, n), i.localPath && i.request(i.localPath, n);
                    else if (i.isString(n)) return n
                },
                D = function() {
                    b = setInterval(function() {
                        var e;
                        if (C) {
                            if (y > d) {
                                clearInterval(b);
                                return
                            }
                            e = i.time(), e - g > p && v >= e - l && _(["heartEvent", y += 1, E, x])
                        }
                    }, 3E3)
                },
                P = function() {
                    y = 0, C = !0, g = i.time()
                };
            t(i), n(i), r(i), N = o(i), _smq.push = function(e) {
                if (i.isFunction(e)) e.call(this);
                else if (i.isArray(e)) if (i.include(M, e[0]) || e[0].substr(0, 1) === "_") return _(e)
            };
            while (_smq.length) _smq.push(_smq.shift());
            s.addEvent(document, "click", i.throttle(function(e) {
                if (N.heatmapEnabled !== "yes") return;
                try {
                    var t = s.getEvent(e),
                        n = s.getTarget(t),
                        r = null;
                    N.clickTimeout && (r = i.findParentA(n), r && !r.target && r.href && (i.isFunction(t.preventDefault) && t.preventDefault(), t.returnValue = !1, setTimeout(function() {
                        location.href = r.href
                    }, N.clickTimeout))), _(["clickEvent", t.clientX + i.scrollLeft(), t.clientY + i.scrollTop()])
                } catch (e) {}
            }, c)), s.addEvent(window, "unload", function(e) {
                var t = i.time();
                v > t - l && _(["pageClose"])
            }), s.addEvent(window, "keypress", i.throttle(function(e) {
                P()
            }, 500)), s.addEvent(window, "scroll", i.debounce(function(e) {
                if (N.heatmapEnabled !== "yes") return;
                var t = i.time();
                _(["pageScroll"]), m = t
            }, 1E3)), s.addEvent(document, "mousemove", i.debounce(function(e) {
                try {
                    if (C) {
                        var t = s.getEvent(e);
                        E = t.clientX, x = t.clientY, P()
                    }
                } catch (e) {}
            }, 200)), s.addEvent(window, "focus", function() {
                N.__saveCurPid(), C = !0, g = i.time()
            }), s.addEvent(window, "blur", function() {
                C = !1, g = i.time()
            }), D()
        },
        a = setInterval(function() {
            if (document.body) {
                clearInterval(a);
                try {
                    u()
                } catch (e) {}
            }
        }, 30)
}).call(this);