var Cookie = function() {
    var a = {
            raw: function(a) {
                return a
            },
            decoded: function(a) {
                return decodeURIComponent(a.replace(/\+/g, " "))
            },
            converted: function(b) {
                0 === b.indexOf('"') && (b = b.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
                try {
                    return a.json ? JSON.parse(b) : b
                } catch (c) {}
            },
            Set: function(b, c, d, e, f) {
                if (void 0 !== c) {
                    if ("number" == typeof d) {
                        var g = expires = new Date;
                        expires.setTime(g.getTime() + 36e5 * d)
                    }
                    return c = a.json ? JSON.stringify(c) : String(c), document.cookie = [b, "=", a.raws ? c : encodeURIComponent(c), d ? ";expires=" + expires.toUTCString() : "", e ? ";domain=" + e : "", f ? ";path=" + f : ""].join("")
                }
            },
            Get: function(b) {
                for (var c = a.raws ? a.raw : a.decoded, d = document.cookie.split("; "), e = b ? void 0 : {}, f = 0, g = d.length; g > f; f++) {
                    var h = d[f].split("="),
                        i = c(h.shift()),
                        j = c(h.join("="));
                    if (i && i === b) {
                        e = a.converted(j);
                        break
                    }
                    b || (e[b] = a.converted(j))
                }
                return e
            },
            Del: function(b, c, d) {
                var e = new Date(0),
                    f = a.Get(b);
                null != f && (document.cookie = [a.raws ? b : encodeURIComponent(b), "=", ";expires=" + e.toUTCString(), c ? ";domain=" + c : "", d ? ";path=" + d : ""].join(""))
            }
        },
        b = {
            versions: function() {
                {
                    var a, b = navigator.userAgent.toLowerCase();
                    navigator.appVersion
                }
                return {
                    trident: b.indexOf("trident") > -1,
                    presto: b.indexOf("presto") > -1,
                    webKit: b.indexOf("applewebkit") > -1,
                    gecko: b.indexOf("gecko") > -1 && -1 == b.indexOf("khtml"),
                    isMobile: !! b.match(/applewebkit.*mobile.*/) || !! b.match(/applewebkit/),
                    isIos: !! b.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                    isAndroid: b.indexOf("android") > -1 || b.indexOf("linux") > -1,
                    isIPhone: b.indexOf("iphone") > -1 || b.indexOf("mac") > -1,
                    isIPad: b.indexOf("ipad") > -1,
                    isSafari: (a = b.match(/version\/([\d.]+).*safari/)) ? a[1] : 0,
                    webApp: -1 == b.indexOf("safari")
                }
            },
            language: (navigator.browserLanguage || navigator.language).toLowerCase(),
            devicesInfo: function() {
                var a = document.body,
                    b = window;
                return {
                    cWidth: a.clientWidth,
                    cHeight: a.clientHeight,
                    sWidth: b.screen.width,
                    sHeight: b.screen.height,
                    offWidth: a.offsetWidth,
                    offHeight: a.offsetHeight,
                    acWidth: b.screen.availWidth,
                    acHeight: b.screen.availHeight,
                    wWidth: b.innerWidth,
                    wHeight: b.innerHeight,
                    wOri: b.orientation
                }
            }
        };
    return {
        Get: a.Get,
        Set: a.Set,
        Del: a.Del,
        Browser: b.versions
    }
}();
