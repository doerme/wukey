/* NEW MARS FOR VIP 2013-11-21 18:52 */
(function($) {
    (function() {
        window.T0 = (new Date()).getTime();
        window.Mar = function() {};
        Mar.Cookie = {
            get: function(d) {
                var b = document.cookie,
                    e = b.indexOf(d + "="),
                    c;
                if (e !== -1) {
                    e += d.length + 1;
                    c = b.indexOf(";", e);
                    return unescape(b.substring(e, (c === -1 ? b.length : c)))
                }
                return
            },
            set: function(d, f, b) {
                var e = (document.domain.toLowerCase().indexOf("vipshop.com") !== -1 ? "vipshop" : "vip"),
                    c;
                if (b === 0) {
                    document.cookie = d + "=" + escape(f) + ";path=/;domain=." + e + ".com"
                } else {
                    c = new Date();
                    c.setTime(c.getTime() + (b * 24 * 3600 * 1000));
                    document.cookie = d + "=" + escape(f) + ";expires=" + c.toGMTString() + ";path=/;domain=." + e + ".com"
                }
            },
            del: function(b) {
                document.cookie = b + "=; expires=Mon, 26 Jul 1997 05:00:00 GMT; path=/;"
            }
        };
        Mar.guid = function() {
            var b = 0,
                c = [];
            while (b < 8) {
                c.push((((1 + Math.random()) * 65536) | 0).toString(16).substring(1));
                b++
            }
            return c.join("").toUpperCase()
        };
        Mar.rand = function(c) {
            var b = "0123456789abcdef",
                e = "",
                d = 0;
            c = c || 32;
            for (; d < c; d++) {
                e += b.charAt(Math.ceil(Math.random() * 100000000) % b.length)
            }
            return e
        };
        Mar.protocal = function() {
            return document.location.href.toLowerCase().indexOf("https://") !== -1 ? "https://" : "http://"
        };
        Mar.stringify = function(h) {
            if (JSON && JSON.stringify) {
                return JSON.stringify(h)
            } else {
                var c = [],
                    f = typeof h,
                    e = 0,
                    g, d, b;
                if (f === "string") {
                    return '"' + h + '"'
                }
                if (f === "undefined" || f === "boolean" || f === "number" || h === null) {
                    return h
                }
                if (Object.prototype.toString.call(h) == "[object Array]") {
                    g = h.length;
                    c.push("[");
                    for (; e < g; e++) {
                        c.push(Mar.stringify(h[e]) + ",")
                    }
                    c.push("]")
                } else {
                    c.push("{");
                    for (d in h) {
                        h.hasOwnProperty(d) && c.push('"' + d + '":' + Mar.stringify(h[d]) + ",")
                    }
                    b = c.length - 1;
                    c[b] = c[b].replace(/,$/, "");
                    c.push("}")
                }
                return c.join("")
            }
        };
        Mar.Request = function(b) {
            (new Image()).src = Mar.protocal() + ("mar." + (document.domain.toLowerCase().indexOf(".vipshop.com") !== -1 ? "vipshop" : "vip") + ".com") + b + "&r=" + Math.random();
            return Mar
        };
        var a;
        Mar.Base = {};
        a = Mar.Base;
        a.local = document.location;
        a.domain = document.domain;
        a.docEle = document.documentElement;
        a.context = document.compatMode.toLowerCase() === "css1compat" ? document.body : a.docEle;
        a.monitor = window.screen;
        a.href = a.local.href;
        a.url = escape(a.href);
        a.pn = a.local.pathname.toLowerCase();
        a.hn = a.local.hostname.toLowerCase();
        a.ref = escape(document.referrer);
        a.cw = a.docEle.clientWidth;
        a.ch = a.docEle.clientHeight;
        a.res = a.monitor.width + "*" + a.monitor.height;
        a.col = a.monitor.colorDepth;
        a.w = a.context.width;
        a.h = a.context.height;
        a.nav = escape(navigator.userAgent.toLowerCase());
        a.ce = navigator.cookieEnabled ? 1 : 0
    })();
    (function() {
        Mar.Biz = function() {
            var l = Mar.Cookie,
                u = l.get,
                p = l.set,
                v = l.del,
                r = 0,
                i = 0,
                k = u("mars_cid") || u("cookie_id"),
                t = u("mars_pid") || u("page_id"),
                c = u("mars_sid") || Mar.rand(),
                w = u("visit_id") || Mar.guid(),
                a = window.mars_var ? Mar.stringify(window.mars_var) : "-",
                f = u("WAP[p_wh]"),
                e = u("WAP[auth]") || u("login_username"),
                q = u("WAP[revision]"),
                m = u("WAP[p_wh]"),
                b = u("warehouse"),
                n = u("WAP_ID"),
                o = u("WAP[from]"),
                j = u("cps_u"),
                h = u("m_vipruid");
            e && (r = 1);
            if (!k || ((k + "").length !== 32 && (k + "").length !== 46)) {
                k = (new Date()).getTime() + "_" + Mar.rand();
                i = 1
            }
            t = t || 0;
            t++;
            v("cookie_id");
            v("page_id");
            p("mars_pid", t, (366 * 2));
            p("mars_cid", k, (366 * 2));
            p("mars_sid", c, 0);
            p("visit_id", w, (30 / 60 / 24));
            return {
                cid: k,
                pid: t,
                sid: c,
                vid: w,
                wh: f,
                mvar: a,
                wapln: e,
                wapvs: q,
                wappwh: m,
                wapwh: b,
                wapid: n,
                wapfrom: o,
                cpsu: j,
                ruid: h,
                newbie: i,
                isLog: r
            }
        };
        Mar.PV = function() {
            var b = Mar.Base,
                a = Mar.Biz(),
                c = b.href.indexOf("ap.vipshop.com") !== -1 ? "/h" : "/w";
            Mar.Request(c + "?vs=&sn=&lg=" + a.isLog + "&in=" + a.newbie + "&pi=" + a.pid + "&mars_cid=" + a.cid + "&mars_sid=" + a.sid + "&mars_vid=" + a.vid + "&mars_var=" + a.mvar + "&wh=" + a.wh + "&url=" + b.url + "&sr=" + b.res + "&rf=" + b.ref + "&bw=" + b.cw + "&bh=" + b.ch + "&sc=" + b.col + "&bv=" + b.nav + "&ce=" + b.ce + "&wap_ln=" + a.wapln + "&wap_vs=" + a.wapvs + "&wap_pwh=" + a.wappwh + "&wap_wh=" + a.wapwh + "&wap_id=" + a.wapid + "&wap_from=" + a.wapfrom + "&cps_u=" + a.cpsu + "&m_vipruid=" + a.ruid);
            return Mar
        }
    })();
    (function() {
        Mar.Seed = function() {
            var d = {
                    inputbutton: "button",
                    inputsubmit: "button",
                    inputtext: "inputText",
                    inputinput: "inputText",
                    inputradio: "radio",
                    inputcheckbox: "checkbox",
                    adownload: "download",
                    a: "link",
                    span: "span",
                    button: "button"
                },
                a, e, c;

            function f(g) {
                if (/.*\.\w*$/.test(g)) {
                    return $.inArray(g.match(/\.(\w*)$/i)[1], ["rar", "zip", "exe", "doc", "ppt", "xls", "docx", "xlsx", "pptx", "sisx", "apk"]) !== -1 ? "download" : ""
                }
                return ""
            }
            function b(l) {
                var k = $(this),
                    h = this.tagName.toLowerCase(),
                    g, j, i;
                if (h === "a") {
                    l.preventDefault();
                    j = k.attr("href");
                    seedType = d[h + (j ? f(j.toLowerCase()) : "")]
                } else {
                    j = k.attr("type");
                    g = d[h + (j ? j.toLowerCase() : "")];
                    seedType = g ? g : h
                }
                Mar.Seed.request(seedType, "click", k.attr("mars_sead"), k.attr("data_mars"));
                if (h === "a") {
                    i = setTimeout(function() {
                        clearTimeout(i);
                        window.location.href = j
                    }, 500)
                }
            }
            e = function(g) {
                b.call(this, g)
            };
            c = function(g) {
                Mar.Seed.request("select", "change", $(this).attr("mars_sead"))
            };
            a = setInterval(function() {
                var g = $("[mars_sead]");
                if (g.length > 0) {
                    $.each(g, function(h, i) {
                        if (i.tagName.toLowerCase() === "select") {
                            $(i).unbind("change", c).change(c)
                        } else {
                            $(i).unbind("click", e).click(e)
                        }
                    })
                }
            }, 1000);
            return Mar
        };
        Mar.Seed.request = function(a, d, b, f) {
            var g = (new Date()).getTime() - window.T0,
                e = Mar.Base,
                c = Mar.Biz(),
                h;
            f = f || "";
            h = "url=" + e.url + "&rf=" + e.ref + "&pi=" + c.pid + "&wap_ln=" + c.wapln + "&wap_vs=" + c.wapvs + "&wap_pwh=" + c.wappwh + "&wap_wh=" + c.wapwh + "&wap_id=" + c.wapid + "&wap_from=" + c.wapfrom + "&cps_u=" + c.cpsu + "&m_vipruid=" + c.ruid;
            Mar.Request("/b?" + h + "&at=" + g + "&et=" + a + "&ed=" + d + "&one=" + encodeURIComponent(b) + "&data_mars=" + f)
        }
    })();
    (function() {
        Mar.Performance = function() {
            var f = Mar.Base,
                c = Mar.Biz(),
                b = (window.performance && window.performance.timing) ? window.performance : undefined,
                d, a, e;
            if (b) {
                d = b.timing;
                a = b.navigation;
                e = {
                    loadedTime: d.loadEventStart ? (d.loadEventStart - d.fetchStart) : -1,
                    domContentLoadedTime: d.domContentLoadedEventEnd - d.domContentLoadedEventStart,
                    domLoadedTime: d.domComplete - d.domLoading,
                    domInteractiveTime: d.domInteractive - d.domLoading,
                    responseTime: (function() {
                        var g = d.responseEnd - d.responseStart;
                        if (d.domContentLoadedEventStart) {
                            if (g < 0) {
                                g = 0
                            }
                        } else {
                            g = -1
                        }
                        return g
                    })(),
                    connectTime: d.connectEnd - d.connectStart,
                    domainLookupTime: d.domainLookupEnd - d.domainLookupStart,
                    redirectTime: d.redirectEnd - d.redirectStart,
                    type: a.type,
                    redirectCount: a.redirectCount,
                    isCache: (function() {
                        if (a.type === 1) {
                            return false
                        }
                        if (d.requestStart === 0 || (d.connectStart === d.connectEnd)) {
                            return true
                        }
                        return false
                    })(),
                    marTime: (new Date()).getTime() - window.T0
                }
            }
            return Mar
        }
    })();
    (function() {
        var a = Mar.Cookie,
            e = a.get,
            c = a.set,
            h = e("mars_cid") || e("cookie_id"),
            f = (document.domain.toLowerCase().indexOf("vipshop.com") !== -1 ? "vip" : "vipshop"),
            d = document.location.host,
            b = d.substring(0, d.indexOf("."));
        if (h) {
            Mar.PV().Seed()
        } else {
            $.ajax({
                url: Mar.protocal() + b + "." + f + ".com/ajaxapi-getcookies.php",
                dataType: "jsonp",
                jsonp: "callback",
                success: function(g) {
                    h = g.mars_cid;
                    if (h) {
                        c("mars_pid", (g.mars_pid || 0), (366 * 2));
                        c("mars_cid", h, (366 * 2));
                        c("mars_sid", (g.mars_sid || Mar.rand()), 0);
                        c("visit_id", (g.visit_id || Mar.guid()), (30 / 60 / 24))
                    }
                    Mar.PV().Seed()
                },
                error: function() {
                    Mar.PV().Seed()
                }
            })
        }
    })();
})(jQuery);