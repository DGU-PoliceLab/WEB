var Hy = Object.defineProperty;
var By = (e, t, n) =>
    t in e
        ? Hy(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (e[t] = n);
var U = (e, t, n) => By(e, typeof t != "symbol" ? t + "" : t, n);
function Fh(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const a in r)
                if (a !== "default" && !(a in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, a);
                    o &&
                        Object.defineProperty(
                            e,
                            a,
                            o.get ? o : { enumerable: !0, get: () => r[a] }
                        );
                }
        }
    }
    return Object.freeze(
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
    );
}
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]'))
        r(a);
    new MutationObserver((a) => {
        for (const o of a)
            if (o.type === "childList")
                for (const i of o.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(a) {
        const o = {};
        return (
            a.integrity && (o.integrity = a.integrity),
            a.referrerPolicy && (o.referrerPolicy = a.referrerPolicy),
            a.crossOrigin === "use-credentials"
                ? (o.credentials = "include")
                : a.crossOrigin === "anonymous"
                ? (o.credentials = "omit")
                : (o.credentials = "same-origin"),
            o
        );
    }
    function r(a) {
        if (a.ep) return;
        a.ep = !0;
        const o = n(a);
        fetch(a.href, o);
    }
})();
function Ah(e) {
    return e &&
        e.__esModule &&
        Object.prototype.hasOwnProperty.call(e, "default")
        ? e.default
        : e;
}
var Wh = { exports: {} },
    Us = {},
    Yh = { exports: {} },
    ae = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zo = Symbol.for("react.element"),
    Vy = Symbol.for("react.portal"),
    $y = Symbol.for("react.fragment"),
    Qy = Symbol.for("react.strict_mode"),
    Ky = Symbol.for("react.profiler"),
    qy = Symbol.for("react.provider"),
    Xy = Symbol.for("react.context"),
    Gy = Symbol.for("react.forward_ref"),
    Jy = Symbol.for("react.suspense"),
    Zy = Symbol.for("react.memo"),
    e0 = Symbol.for("react.lazy"),
    lf = Symbol.iterator;
function t0(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (lf && e[lf]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var Uh = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    zh = Object.assign,
    Hh = {};
function Ra(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = Hh),
        (this.updater = n || Uh);
}
Ra.prototype.isReactComponent = {};
Ra.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
    this.updater.enqueueSetState(this, e, t, "setState");
};
Ra.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Bh() {}
Bh.prototype = Ra.prototype;
function Nc(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = Hh),
        (this.updater = n || Uh);
}
var Pc = (Nc.prototype = new Bh());
Pc.constructor = Nc;
zh(Pc, Ra.prototype);
Pc.isPureReactComponent = !0;
var uf = Array.isArray,
    Vh = Object.prototype.hasOwnProperty,
    Mc = { current: null },
    $h = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qh(e, t, n) {
    var r,
        a = {},
        o = null,
        i = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (i = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t))
            Vh.call(t, r) && !$h.hasOwnProperty(r) && (a[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1) a.children = n;
    else if (1 < s) {
        for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
        a.children = l;
    }
    if (e && e.defaultProps)
        for (r in ((s = e.defaultProps), s)) a[r] === void 0 && (a[r] = s[r]);
    return {
        $$typeof: zo,
        type: e,
        key: o,
        ref: i,
        props: a,
        _owner: Mc.current,
    };
}
function n0(e, t) {
    return {
        $$typeof: zo,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
    };
}
function Tc(e) {
    return typeof e == "object" && e !== null && e.$$typeof === zo;
}
function r0(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var cf = /\/+/g;
function bl(e, t) {
    return typeof e == "object" && e !== null && e.key != null
        ? r0("" + e.key)
        : t.toString(36);
}
function Ri(e, t, n, r, a) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = !1;
    if (e === null) i = !0;
    else
        switch (o) {
            case "string":
            case "number":
                i = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case zo:
                    case Vy:
                        i = !0;
                }
        }
    if (i)
        return (
            (i = e),
            (a = a(i)),
            (e = r === "" ? "." + bl(i, 0) : r),
            uf(a)
                ? ((n = ""),
                  e != null && (n = e.replace(cf, "$&/") + "/"),
                  Ri(a, t, n, "", function (u) {
                      return u;
                  }))
                : a != null &&
                  (Tc(a) &&
                      (a = n0(
                          a,
                          n +
                              (!a.key || (i && i.key === a.key)
                                  ? ""
                                  : ("" + a.key).replace(cf, "$&/") + "/") +
                              e
                      )),
                  t.push(a)),
            1
        );
    if (((i = 0), (r = r === "" ? "." : r + ":"), uf(e)))
        for (var s = 0; s < e.length; s++) {
            o = e[s];
            var l = r + bl(o, s);
            i += Ri(o, t, n, l, a);
        }
    else if (((l = t0(e)), typeof l == "function"))
        for (e = l.call(e), s = 0; !(o = e.next()).done; )
            (o = o.value), (l = r + bl(o, s++)), (i += Ri(o, t, n, l, a));
    else if (o === "object")
        throw (
            ((t = String(e)),
            Error(
                "Objects are not valid as a React child (found: " +
                    (t === "[object Object]"
                        ? "object with keys {" + Object.keys(e).join(", ") + "}"
                        : t) +
                    "). If you meant to render a collection of children, use an array instead."
            ))
        );
    return i;
}
function li(e, t, n) {
    if (e == null) return e;
    var r = [],
        a = 0;
    return (
        Ri(e, r, "", "", function (o) {
            return t.call(n, o, a++);
        }),
        r
    );
}
function a0(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 2), (e._result = n));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var lt = { current: null },
    Oi = { transition: null },
    o0 = {
        ReactCurrentDispatcher: lt,
        ReactCurrentBatchConfig: Oi,
        ReactCurrentOwner: Mc,
    };
ae.Children = {
    map: li,
    forEach: function (e, t, n) {
        li(
            e,
            function () {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function (e) {
        var t = 0;
        return (
            li(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            li(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!Tc(e))
            throw Error(
                "React.Children.only expected to receive a single React element child."
            );
        return e;
    },
};
ae.Component = Ra;
ae.Fragment = $y;
ae.Profiler = Ky;
ae.PureComponent = Nc;
ae.StrictMode = Qy;
ae.Suspense = Jy;
ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = o0;
ae.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                "."
        );
    var r = zh({}, e.props),
        a = e.key,
        o = e.ref,
        i = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((o = t.ref), (i = Mc.current)),
            t.key !== void 0 && (a = "" + t.key),
            e.type && e.type.defaultProps)
        )
            var s = e.type.defaultProps;
        for (l in t)
            Vh.call(t, l) &&
                !$h.hasOwnProperty(l) &&
                (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        s = Array(l);
        for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
        r.children = s;
    }
    return { $$typeof: zo, type: e.type, key: a, ref: o, props: r, _owner: i };
};
ae.createContext = function (e) {
    return (
        (e = {
            $$typeof: Xy,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: qy, _context: e }),
        (e.Consumer = e)
    );
};
ae.createElement = Qh;
ae.createFactory = function (e) {
    var t = Qh.bind(null, e);
    return (t.type = e), t;
};
ae.createRef = function () {
    return { current: null };
};
ae.forwardRef = function (e) {
    return { $$typeof: Gy, render: e };
};
ae.isValidElement = Tc;
ae.lazy = function (e) {
    return { $$typeof: e0, _payload: { _status: -1, _result: e }, _init: a0 };
};
ae.memo = function (e, t) {
    return { $$typeof: Zy, type: e, compare: t === void 0 ? null : t };
};
ae.startTransition = function (e) {
    var t = Oi.transition;
    Oi.transition = {};
    try {
        e();
    } finally {
        Oi.transition = t;
    }
};
ae.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
};
ae.useCallback = function (e, t) {
    return lt.current.useCallback(e, t);
};
ae.useContext = function (e) {
    return lt.current.useContext(e);
};
ae.useDebugValue = function () {};
ae.useDeferredValue = function (e) {
    return lt.current.useDeferredValue(e);
};
ae.useEffect = function (e, t) {
    return lt.current.useEffect(e, t);
};
ae.useId = function () {
    return lt.current.useId();
};
ae.useImperativeHandle = function (e, t, n) {
    return lt.current.useImperativeHandle(e, t, n);
};
ae.useInsertionEffect = function (e, t) {
    return lt.current.useInsertionEffect(e, t);
};
ae.useLayoutEffect = function (e, t) {
    return lt.current.useLayoutEffect(e, t);
};
ae.useMemo = function (e, t) {
    return lt.current.useMemo(e, t);
};
ae.useReducer = function (e, t, n) {
    return lt.current.useReducer(e, t, n);
};
ae.useRef = function (e) {
    return lt.current.useRef(e);
};
ae.useState = function (e) {
    return lt.current.useState(e);
};
ae.useSyncExternalStore = function (e, t, n) {
    return lt.current.useSyncExternalStore(e, t, n);
};
ae.useTransition = function () {
    return lt.current.useTransition();
};
ae.version = "18.2.0";
Yh.exports = ae;
var x = Yh.exports;
const T = Ah(x),
    Kh = Fh({ __proto__: null, default: T }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var i0 = x,
    s0 = Symbol.for("react.element"),
    l0 = Symbol.for("react.fragment"),
    u0 = Object.prototype.hasOwnProperty,
    c0 =
        i0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function qh(e, t, n) {
    var r,
        a = {},
        o = null,
        i = null;
    n !== void 0 && (o = "" + n),
        t.key !== void 0 && (o = "" + t.key),
        t.ref !== void 0 && (i = t.ref);
    for (r in t) u0.call(t, r) && !d0.hasOwnProperty(r) && (a[r] = t[r]);
    if (e && e.defaultProps)
        for (r in ((t = e.defaultProps), t)) a[r] === void 0 && (a[r] = t[r]);
    return {
        $$typeof: s0,
        type: e,
        key: o,
        ref: i,
        props: a,
        _owner: c0.current,
    };
}
Us.Fragment = l0;
Us.jsx = qh;
Us.jsxs = qh;
Wh.exports = Us;
var f = Wh.exports,
    hu = {},
    Xh = { exports: {} },
    Ct = {},
    Gh = { exports: {} },
    Jh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(I, B) {
        var Z = I.length;
        I.push(B);
        e: for (; 0 < Z; ) {
            var de = (Z - 1) >>> 1,
                xe = I[de];
            if (0 < a(xe, B)) (I[de] = B), (I[Z] = xe), (Z = de);
            else break e;
        }
    }
    function n(I) {
        return I.length === 0 ? null : I[0];
    }
    function r(I) {
        if (I.length === 0) return null;
        var B = I[0],
            Z = I.pop();
        if (Z !== B) {
            I[0] = Z;
            e: for (var de = 0, xe = I.length, qt = xe >>> 1; de < qt; ) {
                var Qe = 2 * (de + 1) - 1,
                    Ft = I[Qe],
                    rt = Qe + 1,
                    Pn = I[rt];
                if (0 > a(Ft, Z))
                    rt < xe && 0 > a(Pn, Ft)
                        ? ((I[de] = Pn), (I[rt] = Z), (de = rt))
                        : ((I[de] = Ft), (I[Qe] = Z), (de = Qe));
                else if (rt < xe && 0 > a(Pn, Z))
                    (I[de] = Pn), (I[rt] = Z), (de = rt);
                else break e;
            }
        }
        return B;
    }
    function a(I, B) {
        var Z = I.sortIndex - B.sortIndex;
        return Z !== 0 ? Z : I.id - B.id;
    }
    if (
        typeof performance == "object" &&
        typeof performance.now == "function"
    ) {
        var o = performance;
        e.unstable_now = function () {
            return o.now();
        };
    } else {
        var i = Date,
            s = i.now();
        e.unstable_now = function () {
            return i.now() - s;
        };
    }
    var l = [],
        u = [],
        c = 1,
        d = null,
        p = 3,
        v = !1,
        g = !1,
        w = !1,
        k = typeof setTimeout == "function" ? setTimeout : null,
        h = typeof clearTimeout == "function" ? clearTimeout : null,
        m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(I) {
        for (var B = n(u); B !== null; ) {
            if (B.callback === null) r(u);
            else if (B.startTime <= I)
                r(u), (B.sortIndex = B.expirationTime), t(l, B);
            else break;
            B = n(u);
        }
    }
    function C(I) {
        if (((w = !1), y(I), !g))
            if (n(l) !== null) (g = !0), $(P);
            else {
                var B = n(u);
                B !== null && Y(C, B.startTime - I);
            }
    }
    function P(I, B) {
        (g = !1), w && ((w = !1), h(b), (b = -1)), (v = !0);
        var Z = p;
        try {
            for (
                y(B), d = n(l);
                d !== null && (!(d.expirationTime > B) || (I && !z()));

            ) {
                var de = d.callback;
                if (typeof de == "function") {
                    (d.callback = null), (p = d.priorityLevel);
                    var xe = de(d.expirationTime <= B);
                    (B = e.unstable_now()),
                        typeof xe == "function"
                            ? (d.callback = xe)
                            : d === n(l) && r(l),
                        y(B);
                } else r(l);
                d = n(l);
            }
            if (d !== null) var qt = !0;
            else {
                var Qe = n(u);
                Qe !== null && Y(C, Qe.startTime - B), (qt = !1);
            }
            return qt;
        } finally {
            (d = null), (p = Z), (v = !1);
        }
    }
    var D = !1,
        S = null,
        b = -1,
        R = 5,
        F = -1;
    function z() {
        return !(e.unstable_now() - F < R);
    }
    function K() {
        if (S !== null) {
            var I = e.unstable_now();
            F = I;
            var B = !0;
            try {
                B = S(!0, I);
            } finally {
                B ? X() : ((D = !1), (S = null));
            }
        } else D = !1;
    }
    var X;
    if (typeof m == "function")
        X = function () {
            m(K);
        };
    else if (typeof MessageChannel < "u") {
        var j = new MessageChannel(),
            O = j.port2;
        (j.port1.onmessage = K),
            (X = function () {
                O.postMessage(null);
            });
    } else
        X = function () {
            k(K, 0);
        };
    function $(I) {
        (S = I), D || ((D = !0), X());
    }
    function Y(I, B) {
        b = k(function () {
            I(e.unstable_now());
        }, B);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (I) {
            I.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            g || v || ((g = !0), $(P));
        }),
        (e.unstable_forceFrameRate = function (I) {
            0 > I || 125 < I
                ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (R = 0 < I ? Math.floor(1e3 / I) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return p;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(l);
        }),
        (e.unstable_next = function (I) {
            switch (p) {
                case 1:
                case 2:
                case 3:
                    var B = 3;
                    break;
                default:
                    B = p;
            }
            var Z = p;
            p = B;
            try {
                return I();
            } finally {
                p = Z;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (I, B) {
            switch (I) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    I = 3;
            }
            var Z = p;
            p = I;
            try {
                return B();
            } finally {
                p = Z;
            }
        }),
        (e.unstable_scheduleCallback = function (I, B, Z) {
            var de = e.unstable_now();
            switch (
                (typeof Z == "object" && Z !== null
                    ? ((Z = Z.delay),
                      (Z = typeof Z == "number" && 0 < Z ? de + Z : de))
                    : (Z = de),
                I)
            ) {
                case 1:
                    var xe = -1;
                    break;
                case 2:
                    xe = 250;
                    break;
                case 5:
                    xe = 1073741823;
                    break;
                case 4:
                    xe = 1e4;
                    break;
                default:
                    xe = 5e3;
            }
            return (
                (xe = Z + xe),
                (I = {
                    id: c++,
                    callback: B,
                    priorityLevel: I,
                    startTime: Z,
                    expirationTime: xe,
                    sortIndex: -1,
                }),
                Z > de
                    ? ((I.sortIndex = Z),
                      t(u, I),
                      n(l) === null &&
                          I === n(u) &&
                          (w ? (h(b), (b = -1)) : (w = !0), Y(C, Z - de)))
                    : ((I.sortIndex = xe), t(l, I), g || v || ((g = !0), $(P))),
                I
            );
        }),
        (e.unstable_shouldYield = z),
        (e.unstable_wrapCallback = function (I) {
            var B = p;
            return function () {
                var Z = p;
                p = B;
                try {
                    return I.apply(this, arguments);
                } finally {
                    p = Z;
                }
            };
        });
})(Jh);
Gh.exports = Jh;
var f0 = Gh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zh = x,
    St = f0;
function L(e) {
    for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
        n < arguments.length;
        n++
    )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var em = new Set(),
    xo = {};
function Ar(e, t) {
    ya(e, t), ya(e + "Capture", t);
}
function ya(e, t) {
    for (xo[e] = t, e = 0; e < t.length; e++) em.add(t[e]);
}
var kn = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
    ),
    mu = Object.prototype.hasOwnProperty,
    p0 =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    df = {},
    ff = {};
function h0(e) {
    return mu.call(ff, e)
        ? !0
        : mu.call(df, e)
        ? !1
        : p0.test(e)
        ? (ff[e] = !0)
        : ((df[e] = !0), !1);
}
function m0(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r
                ? !1
                : n !== null
                ? !n.acceptsBooleans
                : ((e = e.toLowerCase().slice(0, 5)),
                  e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function v0(e, t, n, r) {
    if (t === null || typeof t > "u" || m0(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function ut(e, t, n, r, a, o, i) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = a),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = o),
        (this.removeEmptyString = i);
}
var Ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
        Ge[e] = new ut(e, 0, !1, e, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var t = e[0];
    Ge[t] = new ut(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    Ge[e] = new ut(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
].forEach(function (e) {
    Ge[e] = new ut(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        Ge[e] = new ut(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    Ge[e] = new ut(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    Ge[e] = new ut(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    Ge[e] = new ut(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    Ge[e] = new ut(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Rc = /[\-:]([a-z])/g;
function Oc(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(Rc, Oc);
        Ge[t] = new ut(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(Rc, Oc);
        Ge[t] = new ut(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Rc, Oc);
    Ge[t] = new ut(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    Ge[e] = new ut(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ge.xlinkHref = new ut(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
    Ge[e] = new ut(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Lc(e, t, n, r) {
    var a = Ge.hasOwnProperty(t) ? Ge[t] : null;
    (a !== null
        ? a.type !== 0
        : r ||
          !(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
        (v0(t, n, a, r) && (n = null),
        r || a === null
            ? h0(t) &&
              (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : a.mustUseProperty
            ? (e[a.propertyName] = n === null ? (a.type === 3 ? !1 : "") : n)
            : ((t = a.attributeName),
              (r = a.attributeNamespace),
              n === null
                  ? e.removeAttribute(t)
                  : ((a = a.type),
                    (n = a === 3 || (a === 4 && n === !0) ? "" : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var bn = Zh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ui = Symbol.for("react.element"),
    Kr = Symbol.for("react.portal"),
    qr = Symbol.for("react.fragment"),
    jc = Symbol.for("react.strict_mode"),
    vu = Symbol.for("react.profiler"),
    tm = Symbol.for("react.provider"),
    nm = Symbol.for("react.context"),
    Ic = Symbol.for("react.forward_ref"),
    gu = Symbol.for("react.suspense"),
    yu = Symbol.for("react.suspense_list"),
    Fc = Symbol.for("react.memo"),
    Fn = Symbol.for("react.lazy"),
    rm = Symbol.for("react.offscreen"),
    pf = Symbol.iterator;
function Ya(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (pf && e[pf]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var Pe = Object.assign,
    Nl;
function no(e) {
    if (Nl === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Nl = (t && t[1]) || "";
        }
    return (
        `
` +
        Nl +
        e
    );
}
var Pl = !1;
function Ml(e, t) {
    if (!e || Pl) return "";
    Pl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (u) {
                    var r = u;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (u) {
                    r = u;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (u) {
                r = u;
            }
            e();
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (
                var a = u.stack.split(`
`),
                    o = r.stack.split(`
`),
                    i = a.length - 1,
                    s = o.length - 1;
                1 <= i && 0 <= s && a[i] !== o[s];

            )
                s--;
            for (; 1 <= i && 0 <= s; i--, s--)
                if (a[i] !== o[s]) {
                    if (i !== 1 || s !== 1)
                        do
                            if ((i--, s--, 0 > s || a[i] !== o[s])) {
                                var l =
                                    `
` + a[i].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                        l.includes("<anonymous>") &&
                                        (l = l.replace(
                                            "<anonymous>",
                                            e.displayName
                                        )),
                                    l
                                );
                            }
                        while (1 <= i && 0 <= s);
                    break;
                }
        }
    } finally {
        (Pl = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? no(e) : "";
}
function g0(e) {
    switch (e.tag) {
        case 5:
            return no(e.type);
        case 16:
            return no("Lazy");
        case 13:
            return no("Suspense");
        case 19:
            return no("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = Ml(e.type, !1)), e;
        case 11:
            return (e = Ml(e.type.render, !1)), e;
        case 1:
            return (e = Ml(e.type, !0)), e;
        default:
            return "";
    }
}
function wu(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case qr:
            return "Fragment";
        case Kr:
            return "Portal";
        case vu:
            return "Profiler";
        case jc:
            return "StrictMode";
        case gu:
            return "Suspense";
        case yu:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case nm:
                return (e.displayName || "Context") + ".Consumer";
            case tm:
                return (e._context.displayName || "Context") + ".Provider";
            case Ic:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e ||
                        ((e = t.displayName || t.name || ""),
                        (e =
                            e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                    e
                );
            case Fc:
                return (
                    (t = e.displayName || null),
                    t !== null ? t : wu(e.type) || "Memo"
                );
            case Fn:
                (t = e._payload), (e = e._init);
                try {
                    return wu(e(t));
                } catch {}
        }
    return null;
}
function y0(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (
                (e = t.render),
                (e = e.displayName || e.name || ""),
                t.displayName ||
                    (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return wu(t);
        case 8:
            return t === jc ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
    }
    return null;
}
function nr(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function am(e) {
    var t = e.type;
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
    );
}
function w0(e) {
    var t = am(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (
        !e.hasOwnProperty(t) &&
        typeof n < "u" &&
        typeof n.get == "function" &&
        typeof n.set == "function"
    ) {
        var a = n.get,
            o = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return a.call(this);
                },
                set: function (i) {
                    (r = "" + i), o.call(this, i);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (i) {
                    r = "" + i;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function ci(e) {
    e._valueTracker || (e._valueTracker = w0(e));
}
function om(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return (
        e && (r = am(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r),
        e !== n ? (t.setValue(e), !0) : !1
    );
}
function Gi(e) {
    if (
        ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
        return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function xu(e, t) {
    var n = t.checked;
    return Pe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
    });
}
function hf(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = nr(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
                t.type === "checkbox" || t.type === "radio"
                    ? t.checked != null
                    : t.value != null,
        });
}
function im(e, t) {
    (t = t.checked), t != null && Lc(e, "checked", t, !1);
}
function Du(e, t) {
    im(e, t);
    var n = nr(t.value),
        r = t.type;
    if (n != null)
        r === "number"
            ? ((n === 0 && e.value === "") || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    t.hasOwnProperty("value")
        ? ku(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && ku(e, t.type, nr(t.defaultValue)),
        t.checked == null &&
            t.defaultChecked != null &&
            (e.defaultChecked = !!t.defaultChecked);
}
function mf(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (
            !(
                (r !== "submit" && r !== "reset") ||
                (t.value !== void 0 && t.value !== null)
            )
        )
            return;
        (t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
    }
    (n = e.name),
        n !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== "" && (e.name = n);
}
function ku(e, t, n) {
    (t !== "number" || Gi(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ro = Array.isArray;
function la(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
        for (n = 0; n < e.length; n++)
            (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + nr(n), t = null, a = 0; a < e.length; a++) {
            if (e[a].value === n) {
                (e[a].selected = !0), r && (e[a].defaultSelected = !0);
                return;
            }
            t !== null || e[a].disabled || (t = e[a]);
        }
        t !== null && (t.selected = !0);
    }
}
function Su(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
    return Pe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
    });
}
function vf(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(L(92));
            if (ro(n)) {
                if (1 < n.length) throw Error(L(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: nr(n) };
}
function sm(e, t) {
    var n = nr(t.value),
        r = nr(t.defaultValue);
    n != null &&
        ((n = "" + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r);
}
function gf(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
        t !== "" &&
        t !== null &&
        (e.value = t);
}
function lm(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function Eu(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? lm(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
}
var di,
    um = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, a) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, a);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
            e.innerHTML = t;
        else {
            for (
                di = di || document.createElement("div"),
                    di.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = di.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function Do(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var lo = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    x0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(lo).forEach(function (e) {
    x0.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (lo[t] = lo[e]);
    });
});
function cm(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
        ? ""
        : n ||
          typeof t != "number" ||
          t === 0 ||
          (lo.hasOwnProperty(e) && lo[e])
        ? ("" + t).trim()
        : t + "px";
}
function dm(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                a = cm(n, t[n], r);
            n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
        }
}
var D0 = Pe(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    }
);
function Cu(e, t) {
    if (t) {
        if (D0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(L(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(L(60));
            if (
                typeof t.dangerouslySetInnerHTML != "object" ||
                !("__html" in t.dangerouslySetInnerHTML)
            )
                throw Error(L(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(L(62));
    }
}
function _u(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var bu = null;
function Ac(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var Nu = null,
    ua = null,
    ca = null;
function yf(e) {
    if ((e = Vo(e))) {
        if (typeof Nu != "function") throw Error(L(280));
        var t = e.stateNode;
        t && ((t = $s(t)), Nu(e.stateNode, e.type, t));
    }
}
function fm(e) {
    ua ? (ca ? ca.push(e) : (ca = [e])) : (ua = e);
}
function pm() {
    if (ua) {
        var e = ua,
            t = ca;
        if (((ca = ua = null), yf(e), t))
            for (e = 0; e < t.length; e++) yf(t[e]);
    }
}
function hm(e, t) {
    return e(t);
}
function mm() {}
var Tl = !1;
function vm(e, t, n) {
    if (Tl) return e(t, n);
    Tl = !0;
    try {
        return hm(e, t, n);
    } finally {
        (Tl = !1), (ua !== null || ca !== null) && (mm(), pm());
    }
}
function ko(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = $s(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) ||
                ((e = e.type),
                (r = !(
                    e === "button" ||
                    e === "input" ||
                    e === "select" ||
                    e === "textarea"
                ))),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(L(231, t, typeof n));
    return n;
}
var Pu = !1;
if (kn)
    try {
        var Ua = {};
        Object.defineProperty(Ua, "passive", {
            get: function () {
                Pu = !0;
            },
        }),
            window.addEventListener("test", Ua, Ua),
            window.removeEventListener("test", Ua, Ua);
    } catch {
        Pu = !1;
    }
function k0(e, t, n, r, a, o, i, s, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u);
    } catch (c) {
        this.onError(c);
    }
}
var uo = !1,
    Ji = null,
    Zi = !1,
    Mu = null,
    S0 = {
        onError: function (e) {
            (uo = !0), (Ji = e);
        },
    };
function E0(e, t, n, r, a, o, i, s, l) {
    (uo = !1), (Ji = null), k0.apply(S0, arguments);
}
function C0(e, t, n, r, a, o, i, s, l) {
    if ((E0.apply(this, arguments), uo)) {
        if (uo) {
            var u = Ji;
            (uo = !1), (Ji = null);
        } else throw Error(L(198));
        Zi || ((Zi = !0), (Mu = u));
    }
}
function Wr(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function gm(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (
            (t === null &&
                ((e = e.alternate), e !== null && (t = e.memoizedState)),
            t !== null)
        )
            return t.dehydrated;
    }
    return null;
}
function wf(e) {
    if (Wr(e) !== e) throw Error(L(188));
}
function _0(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = Wr(e)), t === null)) throw Error(L(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var a = n.return;
        if (a === null) break;
        var o = a.alternate;
        if (o === null) {
            if (((r = a.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (a.child === o.child) {
            for (o = a.child; o; ) {
                if (o === n) return wf(a), e;
                if (o === r) return wf(a), t;
                o = o.sibling;
            }
            throw Error(L(188));
        }
        if (n.return !== r.return) (n = a), (r = o);
        else {
            for (var i = !1, s = a.child; s; ) {
                if (s === n) {
                    (i = !0), (n = a), (r = o);
                    break;
                }
                if (s === r) {
                    (i = !0), (r = a), (n = o);
                    break;
                }
                s = s.sibling;
            }
            if (!i) {
                for (s = o.child; s; ) {
                    if (s === n) {
                        (i = !0), (n = o), (r = a);
                        break;
                    }
                    if (s === r) {
                        (i = !0), (r = o), (n = a);
                        break;
                    }
                    s = s.sibling;
                }
                if (!i) throw Error(L(189));
            }
        }
        if (n.alternate !== r) throw Error(L(190));
    }
    if (n.tag !== 3) throw Error(L(188));
    return n.stateNode.current === n ? e : t;
}
function ym(e) {
    return (e = _0(e)), e !== null ? wm(e) : null;
}
function wm(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = wm(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var xm = St.unstable_scheduleCallback,
    xf = St.unstable_cancelCallback,
    b0 = St.unstable_shouldYield,
    N0 = St.unstable_requestPaint,
    Le = St.unstable_now,
    P0 = St.unstable_getCurrentPriorityLevel,
    Wc = St.unstable_ImmediatePriority,
    Dm = St.unstable_UserBlockingPriority,
    es = St.unstable_NormalPriority,
    M0 = St.unstable_LowPriority,
    km = St.unstable_IdlePriority,
    zs = null,
    ln = null;
function T0(e) {
    if (ln && typeof ln.onCommitFiberRoot == "function")
        try {
            ln.onCommitFiberRoot(
                zs,
                e,
                void 0,
                (e.current.flags & 128) === 128
            );
        } catch {}
}
var Ht = Math.clz32 ? Math.clz32 : L0,
    R0 = Math.log,
    O0 = Math.LN2;
function L0(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((R0(e) / O0) | 0)) | 0;
}
var fi = 64,
    pi = 4194304;
function ao(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function ts(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes,
        i = n & 268435455;
    if (i !== 0) {
        var s = i & ~a;
        s !== 0 ? (r = ao(s)) : ((o &= i), o !== 0 && (r = ao(o)));
    } else (i = n & ~a), i !== 0 ? (r = ao(i)) : o !== 0 && (r = ao(o));
    if (r === 0) return 0;
    if (
        t !== 0 &&
        t !== r &&
        !(t & a) &&
        ((a = r & -r),
        (o = t & -t),
        a >= o || (a === 16 && (o & 4194240) !== 0))
    )
        return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; )
            (n = 31 - Ht(t)), (a = 1 << n), (r |= e[n]), (t &= ~a);
    return r;
}
function j0(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function I0(e, t) {
    for (
        var n = e.suspendedLanes,
            r = e.pingedLanes,
            a = e.expirationTimes,
            o = e.pendingLanes;
        0 < o;

    ) {
        var i = 31 - Ht(o),
            s = 1 << i,
            l = a[i];
        l === -1
            ? (!(s & n) || s & r) && (a[i] = j0(s, t))
            : l <= t && (e.expiredLanes |= s),
            (o &= ~s);
    }
}
function Tu(e) {
    return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
}
function Sm() {
    var e = fi;
    return (fi <<= 1), !(fi & 4194240) && (fi = 64), e;
}
function Rl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function Ho(e, t, n) {
    (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - Ht(t)),
        (e[t] = n);
}
function F0(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var a = 31 - Ht(n),
            o = 1 << a;
        (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
    }
}
function Yc(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - Ht(n),
            a = 1 << r;
        (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
    }
}
var ve = 0;
function Em(e) {
    return (
        (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
}
var Cm,
    Uc,
    _m,
    bm,
    Nm,
    Ru = !1,
    hi = [],
    Vn = null,
    $n = null,
    Qn = null,
    So = new Map(),
    Eo = new Map(),
    Wn = [],
    A0 =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
        );
function Df(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Vn = null;
            break;
        case "dragenter":
        case "dragleave":
            $n = null;
            break;
        case "mouseover":
        case "mouseout":
            Qn = null;
            break;
        case "pointerover":
        case "pointerout":
            So.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Eo.delete(t.pointerId);
    }
}
function za(e, t, n, r, a, o) {
    return e === null || e.nativeEvent !== o
        ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: o,
              targetContainers: [a],
          }),
          t !== null && ((t = Vo(t)), t !== null && Uc(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          a !== null && t.indexOf(a) === -1 && t.push(a),
          e);
}
function W0(e, t, n, r, a) {
    switch (t) {
        case "focusin":
            return (Vn = za(Vn, e, t, n, r, a)), !0;
        case "dragenter":
            return ($n = za($n, e, t, n, r, a)), !0;
        case "mouseover":
            return (Qn = za(Qn, e, t, n, r, a)), !0;
        case "pointerover":
            var o = a.pointerId;
            return So.set(o, za(So.get(o) || null, e, t, n, r, a)), !0;
        case "gotpointercapture":
            return (
                (o = a.pointerId),
                Eo.set(o, za(Eo.get(o) || null, e, t, n, r, a)),
                !0
            );
    }
    return !1;
}
function Pm(e) {
    var t = gr(e.target);
    if (t !== null) {
        var n = Wr(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = gm(n)), t !== null)) {
                    (e.blockedOn = t),
                        Nm(e.priority, function () {
                            _m(n);
                        });
                    return;
                }
            } else if (
                t === 3 &&
                n.stateNode.current.memoizedState.isDehydrated
            ) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function Li(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Ou(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (bu = r), n.target.dispatchEvent(r), (bu = null);
        } else return (t = Vo(n)), t !== null && Uc(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function kf(e, t, n) {
    Li(e) && n.delete(t);
}
function Y0() {
    (Ru = !1),
        Vn !== null && Li(Vn) && (Vn = null),
        $n !== null && Li($n) && ($n = null),
        Qn !== null && Li(Qn) && (Qn = null),
        So.forEach(kf),
        Eo.forEach(kf);
}
function Ha(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null),
        Ru ||
            ((Ru = !0),
            St.unstable_scheduleCallback(St.unstable_NormalPriority, Y0)));
}
function Co(e) {
    function t(a) {
        return Ha(a, e);
    }
    if (0 < hi.length) {
        Ha(hi[0], e);
        for (var n = 1; n < hi.length; n++) {
            var r = hi[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        Vn !== null && Ha(Vn, e),
            $n !== null && Ha($n, e),
            Qn !== null && Ha(Qn, e),
            So.forEach(t),
            Eo.forEach(t),
            n = 0;
        n < Wn.length;
        n++
    )
        (r = Wn[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Wn.length && ((n = Wn[0]), n.blockedOn === null); )
        Pm(n), n.blockedOn === null && Wn.shift();
}
var da = bn.ReactCurrentBatchConfig,
    ns = !0;
function U0(e, t, n, r) {
    var a = ve,
        o = da.transition;
    da.transition = null;
    try {
        (ve = 1), zc(e, t, n, r);
    } finally {
        (ve = a), (da.transition = o);
    }
}
function z0(e, t, n, r) {
    var a = ve,
        o = da.transition;
    da.transition = null;
    try {
        (ve = 4), zc(e, t, n, r);
    } finally {
        (ve = a), (da.transition = o);
    }
}
function zc(e, t, n, r) {
    if (ns) {
        var a = Ou(e, t, n, r);
        if (a === null) zl(e, t, r, rs, n), Df(e, r);
        else if (W0(a, e, t, n, r)) r.stopPropagation();
        else if ((Df(e, r), t & 4 && -1 < A0.indexOf(e))) {
            for (; a !== null; ) {
                var o = Vo(a);
                if (
                    (o !== null && Cm(o),
                    (o = Ou(e, t, n, r)),
                    o === null && zl(e, t, r, rs, n),
                    o === a)
                )
                    break;
                a = o;
            }
            a !== null && r.stopPropagation();
        } else zl(e, t, r, null, n);
    }
}
var rs = null;
function Ou(e, t, n, r) {
    if (((rs = null), (e = Ac(r)), (e = gr(e)), e !== null))
        if (((t = Wr(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = gm(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (rs = e), null;
}
function Mm(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (P0()) {
                case Wc:
                    return 1;
                case Dm:
                    return 4;
                case es:
                case M0:
                    return 16;
                case km:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var Un = null,
    Hc = null,
    ji = null;
function Tm() {
    if (ji) return ji;
    var e,
        t = Hc,
        n = t.length,
        r,
        a = "value" in Un ? Un.value : Un.textContent,
        o = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === a[o - r]; r++);
    return (ji = a.slice(e, 1 < r ? 1 - r : void 0));
}
function Ii(e) {
    var t = e.keyCode;
    return (
        "charCode" in e
            ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
            : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function mi() {
    return !0;
}
function Sf() {
    return !1;
}
function _t(e) {
    function t(n, r, a, o, i) {
        (this._reactName = n),
            (this._targetInst = a),
            (this.type = r),
            (this.nativeEvent = o),
            (this.target = i),
            (this.currentTarget = null);
        for (var s in e)
            e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
        return (
            (this.isDefaultPrevented = (
                o.defaultPrevented != null
                    ? o.defaultPrevented
                    : o.returnValue === !1
            )
                ? mi
                : Sf),
            (this.isPropagationStopped = Sf),
            this
        );
    }
    return (
        Pe(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault
                        ? n.preventDefault()
                        : typeof n.returnValue != "unknown" &&
                          (n.returnValue = !1),
                    (this.isDefaultPrevented = mi));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != "unknown" &&
                          (n.cancelBubble = !0),
                    (this.isPropagationStopped = mi));
            },
            persist: function () {},
            isPersistent: mi,
        }),
        t
    );
}
var Oa = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    Bc = _t(Oa),
    Bo = Pe({}, Oa, { view: 0, detail: 0 }),
    H0 = _t(Bo),
    Ol,
    Ll,
    Ba,
    Hs = Pe({}, Bo, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Vc,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e
                ? e.movementX
                : (e !== Ba &&
                      (Ba && e.type === "mousemove"
                          ? ((Ol = e.screenX - Ba.screenX),
                            (Ll = e.screenY - Ba.screenY))
                          : (Ll = Ol = 0),
                      (Ba = e)),
                  Ol);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : Ll;
        },
    }),
    Ef = _t(Hs),
    B0 = Pe({}, Hs, { dataTransfer: 0 }),
    V0 = _t(B0),
    $0 = Pe({}, Bo, { relatedTarget: 0 }),
    jl = _t($0),
    Q0 = Pe({}, Oa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    K0 = _t(Q0),
    q0 = Pe({}, Oa, {
        clipboardData: function (e) {
            return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
        },
    }),
    X0 = _t(q0),
    G0 = Pe({}, Oa, { data: 0 }),
    Cf = _t(G0),
    J0 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
    },
    Z0 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    e1 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
    };
function t1(e) {
    var t = this.nativeEvent;
    return t.getModifierState
        ? t.getModifierState(e)
        : (e = e1[e])
        ? !!t[e]
        : !1;
}
function Vc() {
    return t1;
}
var n1 = Pe({}, Bo, {
        key: function (e) {
            if (e.key) {
                var t = J0[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress"
                ? ((e = Ii(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                : e.type === "keydown" || e.type === "keyup"
                ? Z0[e.keyCode] || "Unidentified"
                : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Vc,
        charCode: function (e) {
            return e.type === "keypress" ? Ii(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress"
                ? Ii(e)
                : e.type === "keydown" || e.type === "keyup"
                ? e.keyCode
                : 0;
        },
    }),
    r1 = _t(n1),
    a1 = Pe({}, Hs, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    _f = _t(a1),
    o1 = Pe({}, Bo, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Vc,
    }),
    i1 = _t(o1),
    s1 = Pe({}, Oa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    l1 = _t(s1),
    u1 = Pe({}, Hs, {
        deltaX: function (e) {
            return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    c1 = _t(u1),
    d1 = [9, 13, 27, 32],
    $c = kn && "CompositionEvent" in window,
    co = null;
kn && "documentMode" in document && (co = document.documentMode);
var f1 = kn && "TextEvent" in window && !co,
    Rm = kn && (!$c || (co && 8 < co && 11 >= co)),
    bf = " ",
    Nf = !1;
function Om(e, t) {
    switch (e) {
        case "keyup":
            return d1.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function Lm(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Xr = !1;
function p1(e, t) {
    switch (e) {
        case "compositionend":
            return Lm(t);
        case "keypress":
            return t.which !== 32 ? null : ((Nf = !0), bf);
        case "textInput":
            return (e = t.data), e === bf && Nf ? null : e;
        default:
            return null;
    }
}
function h1(e, t) {
    if (Xr)
        return e === "compositionend" || (!$c && Om(e, t))
            ? ((e = Tm()), (ji = Hc = Un = null), (Xr = !1), e)
            : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (
                !(t.ctrlKey || t.altKey || t.metaKey) ||
                (t.ctrlKey && t.altKey)
            ) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return Rm && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var m1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function Pf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!m1[e.type] : t === "textarea";
}
function jm(e, t, n, r) {
    fm(r),
        (t = as(t, "onChange")),
        0 < t.length &&
            ((n = new Bc("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t }));
}
var fo = null,
    _o = null;
function v1(e) {
    $m(e, 0);
}
function Bs(e) {
    var t = Zr(e);
    if (om(t)) return e;
}
function g1(e, t) {
    if (e === "change") return t;
}
var Im = !1;
if (kn) {
    var Il;
    if (kn) {
        var Fl = "oninput" in document;
        if (!Fl) {
            var Mf = document.createElement("div");
            Mf.setAttribute("oninput", "return;"),
                (Fl = typeof Mf.oninput == "function");
        }
        Il = Fl;
    } else Il = !1;
    Im = Il && (!document.documentMode || 9 < document.documentMode);
}
function Tf() {
    fo && (fo.detachEvent("onpropertychange", Fm), (_o = fo = null));
}
function Fm(e) {
    if (e.propertyName === "value" && Bs(_o)) {
        var t = [];
        jm(t, _o, e, Ac(e)), vm(v1, t);
    }
}
function y1(e, t, n) {
    e === "focusin"
        ? (Tf(), (fo = t), (_o = n), fo.attachEvent("onpropertychange", Fm))
        : e === "focusout" && Tf();
}
function w1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Bs(_o);
}
function x1(e, t) {
    if (e === "click") return Bs(t);
}
function D1(e, t) {
    if (e === "input" || e === "change") return Bs(t);
}
function k1(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var $t = typeof Object.is == "function" ? Object.is : k1;
function bo(e, t) {
    if ($t(e, t)) return !0;
    if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
    )
        return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var a = n[r];
        if (!mu.call(t, a) || !$t(e[a], t[a])) return !1;
    }
    return !0;
}
function Rf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function Of(e, t) {
    var n = Rf(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t))
                return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = Rf(n);
    }
}
function Am(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
            ? Am(e, t.parentNode)
            : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
            ? !!(e.compareDocumentPosition(t) & 16)
            : !1
        : !1;
}
function Wm() {
    for (var e = window, t = Gi(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Gi(e.document);
    }
    return t;
}
function Qc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        ((t === "input" &&
            (e.type === "text" ||
                e.type === "search" ||
                e.type === "tel" ||
                e.type === "url" ||
                e.type === "password")) ||
            t === "textarea" ||
            e.contentEditable === "true")
    );
}
function S1(e) {
    var t = Wm(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (
        t !== n &&
        n &&
        n.ownerDocument &&
        Am(n.ownerDocument.documentElement, n)
    ) {
        if (r !== null && Qc(n)) {
            if (
                ((t = r.start),
                (e = r.end),
                e === void 0 && (e = t),
                "selectionStart" in n)
            )
                (n.selectionStart = t),
                    (n.selectionEnd = Math.min(e, n.value.length));
            else if (
                ((e =
                    ((t = n.ownerDocument || document) && t.defaultView) ||
                    window),
                e.getSelection)
            ) {
                e = e.getSelection();
                var a = n.textContent.length,
                    o = Math.min(r.start, a);
                (r = r.end === void 0 ? o : Math.min(r.end, a)),
                    !e.extend && o > r && ((a = r), (r = o), (o = a)),
                    (a = Of(n, o));
                var i = Of(n, r);
                a &&
                    i &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== a.node ||
                        e.anchorOffset !== a.offset ||
                        e.focusNode !== i.node ||
                        e.focusOffset !== i.offset) &&
                    ((t = t.createRange()),
                    t.setStart(a.node, a.offset),
                    e.removeAllRanges(),
                    o > r
                        ? (e.addRange(t), e.extend(i.node, i.offset))
                        : (t.setEnd(i.node, i.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
            typeof n.focus == "function" && n.focus(), n = 0;
            n < t.length;
            n++
        )
            (e = t[n]),
                (e.element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
    }
}
var E1 = kn && "documentMode" in document && 11 >= document.documentMode,
    Gr = null,
    Lu = null,
    po = null,
    ju = !1;
function Lf(e, t, n) {
    var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ju ||
        Gr == null ||
        Gr !== Gi(r) ||
        ((r = Gr),
        "selectionStart" in r && Qc(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
              ).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        (po && bo(po, r)) ||
            ((po = r),
            (r = as(Lu, "onSelect")),
            0 < r.length &&
                ((t = new Bc("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = Gr))));
}
function vi(e, t) {
    var n = {};
    return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
    );
}
var Jr = {
        animationend: vi("Animation", "AnimationEnd"),
        animationiteration: vi("Animation", "AnimationIteration"),
        animationstart: vi("Animation", "AnimationStart"),
        transitionend: vi("Transition", "TransitionEnd"),
    },
    Al = {},
    Ym = {};
kn &&
    ((Ym = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete Jr.animationend.animation,
        delete Jr.animationiteration.animation,
        delete Jr.animationstart.animation),
    "TransitionEvent" in window || delete Jr.transitionend.transition);
function Vs(e) {
    if (Al[e]) return Al[e];
    if (!Jr[e]) return e;
    var t = Jr[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ym) return (Al[e] = t[n]);
    return e;
}
var Um = Vs("animationend"),
    zm = Vs("animationiteration"),
    Hm = Vs("animationstart"),
    Bm = Vs("transitionend"),
    Vm = new Map(),
    jf =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
        );
function sr(e, t) {
    Vm.set(e, t), Ar(t, [e]);
}
for (var Wl = 0; Wl < jf.length; Wl++) {
    var Yl = jf[Wl],
        C1 = Yl.toLowerCase(),
        _1 = Yl[0].toUpperCase() + Yl.slice(1);
    sr(C1, "on" + _1);
}
sr(Um, "onAnimationEnd");
sr(zm, "onAnimationIteration");
sr(Hm, "onAnimationStart");
sr("dblclick", "onDoubleClick");
sr("focusin", "onFocus");
sr("focusout", "onBlur");
sr(Bm, "onTransitionEnd");
ya("onMouseEnter", ["mouseout", "mouseover"]);
ya("onMouseLeave", ["mouseout", "mouseover"]);
ya("onPointerEnter", ["pointerout", "pointerover"]);
ya("onPointerLeave", ["pointerout", "pointerover"]);
Ar(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
        " "
    )
);
Ar(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
    )
);
Ar("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ar(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ar(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ar(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var oo =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
        ),
    b1 = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(oo)
    );
function If(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), C0(r, t, void 0, e), (e.currentTarget = null);
}
function $m(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            a = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var s = r[i],
                        l = s.instance,
                        u = s.currentTarget;
                    if (((s = s.listener), l !== o && a.isPropagationStopped()))
                        break e;
                    If(a, s, u), (o = l);
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (
                        ((s = r[i]),
                        (l = s.instance),
                        (u = s.currentTarget),
                        (s = s.listener),
                        l !== o && a.isPropagationStopped())
                    )
                        break e;
                    If(a, s, u), (o = l);
                }
        }
    }
    if (Zi) throw ((e = Mu), (Zi = !1), (Mu = null), e);
}
function De(e, t) {
    var n = t[Yu];
    n === void 0 && (n = t[Yu] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Qm(t, e, 2, !1), n.add(r));
}
function Ul(e, t, n) {
    var r = 0;
    t && (r |= 4), Qm(n, e, r, t);
}
var gi = "_reactListening" + Math.random().toString(36).slice(2);
function No(e) {
    if (!e[gi]) {
        (e[gi] = !0),
            em.forEach(function (n) {
                n !== "selectionchange" &&
                    (b1.has(n) || Ul(n, !1, e), Ul(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[gi] || ((t[gi] = !0), Ul("selectionchange", !1, t));
    }
}
function Qm(e, t, n, r) {
    switch (Mm(t)) {
        case 1:
            var a = U0;
            break;
        case 4:
            a = z0;
            break;
        default:
            a = zc;
    }
    (n = a.bind(null, t, n, e)),
        (a = void 0),
        !Pu ||
            (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
            (a = !0),
        r
            ? a !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
            : a !== void 0
            ? e.addEventListener(t, n, { passive: a })
            : e.addEventListener(t, n, !1);
}
function zl(e, t, n, r, a) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var s = r.stateNode.containerInfo;
                if (s === a || (s.nodeType === 8 && s.parentNode === a)) break;
                if (i === 4)
                    for (i = r.return; i !== null; ) {
                        var l = i.tag;
                        if (
                            (l === 3 || l === 4) &&
                            ((l = i.stateNode.containerInfo),
                            l === a || (l.nodeType === 8 && l.parentNode === a))
                        )
                            return;
                        i = i.return;
                    }
                for (; s !== null; ) {
                    if (((i = gr(s)), i === null)) return;
                    if (((l = i.tag), l === 5 || l === 6)) {
                        r = o = i;
                        continue e;
                    }
                    s = s.parentNode;
                }
            }
            r = r.return;
        }
    vm(function () {
        var u = o,
            c = Ac(n),
            d = [];
        e: {
            var p = Vm.get(e);
            if (p !== void 0) {
                var v = Bc,
                    g = e;
                switch (e) {
                    case "keypress":
                        if (Ii(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        v = r1;
                        break;
                    case "focusin":
                        (g = "focus"), (v = jl);
                        break;
                    case "focusout":
                        (g = "blur"), (v = jl);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        v = jl;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        v = Ef;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        v = V0;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        v = i1;
                        break;
                    case Um:
                    case zm:
                    case Hm:
                        v = K0;
                        break;
                    case Bm:
                        v = l1;
                        break;
                    case "scroll":
                        v = H0;
                        break;
                    case "wheel":
                        v = c1;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        v = X0;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        v = _f;
                }
                var w = (t & 4) !== 0,
                    k = !w && e === "scroll",
                    h = w ? (p !== null ? p + "Capture" : null) : p;
                w = [];
                for (var m = u, y; m !== null; ) {
                    y = m;
                    var C = y.stateNode;
                    if (
                        (y.tag === 5 &&
                            C !== null &&
                            ((y = C),
                            h !== null &&
                                ((C = ko(m, h)),
                                C != null && w.push(Po(m, C, y)))),
                        k)
                    )
                        break;
                    m = m.return;
                }
                0 < w.length &&
                    ((p = new v(p, g, null, n, c)),
                    d.push({ event: p, listeners: w }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((p = e === "mouseover" || e === "pointerover"),
                    (v = e === "mouseout" || e === "pointerout"),
                    p &&
                        n !== bu &&
                        (g = n.relatedTarget || n.fromElement) &&
                        (gr(g) || g[Sn]))
                )
                    break e;
                if (
                    (v || p) &&
                    ((p =
                        c.window === c
                            ? c
                            : (p = c.ownerDocument)
                            ? p.defaultView || p.parentWindow
                            : window),
                    v
                        ? ((g = n.relatedTarget || n.toElement),
                          (v = u),
                          (g = g ? gr(g) : null),
                          g !== null &&
                              ((k = Wr(g)),
                              g !== k || (g.tag !== 5 && g.tag !== 6)) &&
                              (g = null))
                        : ((v = null), (g = u)),
                    v !== g)
                ) {
                    if (
                        ((w = Ef),
                        (C = "onMouseLeave"),
                        (h = "onMouseEnter"),
                        (m = "mouse"),
                        (e === "pointerout" || e === "pointerover") &&
                            ((w = _f),
                            (C = "onPointerLeave"),
                            (h = "onPointerEnter"),
                            (m = "pointer")),
                        (k = v == null ? p : Zr(v)),
                        (y = g == null ? p : Zr(g)),
                        (p = new w(C, m + "leave", v, n, c)),
                        (p.target = k),
                        (p.relatedTarget = y),
                        (C = null),
                        gr(c) === u &&
                            ((w = new w(h, m + "enter", g, n, c)),
                            (w.target = y),
                            (w.relatedTarget = k),
                            (C = w)),
                        (k = C),
                        v && g)
                    )
                        t: {
                            for (w = v, h = g, m = 0, y = w; y; y = Vr(y)) m++;
                            for (y = 0, C = h; C; C = Vr(C)) y++;
                            for (; 0 < m - y; ) (w = Vr(w)), m--;
                            for (; 0 < y - m; ) (h = Vr(h)), y--;
                            for (; m--; ) {
                                if (
                                    w === h ||
                                    (h !== null && w === h.alternate)
                                )
                                    break t;
                                (w = Vr(w)), (h = Vr(h));
                            }
                            w = null;
                        }
                    else w = null;
                    v !== null && Ff(d, p, v, w, !1),
                        g !== null && k !== null && Ff(d, k, g, w, !0);
                }
            }
            e: {
                if (
                    ((p = u ? Zr(u) : window),
                    (v = p.nodeName && p.nodeName.toLowerCase()),
                    v === "select" || (v === "input" && p.type === "file"))
                )
                    var P = g1;
                else if (Pf(p))
                    if (Im) P = D1;
                    else {
                        P = w1;
                        var D = y1;
                    }
                else
                    (v = p.nodeName) &&
                        v.toLowerCase() === "input" &&
                        (p.type === "checkbox" || p.type === "radio") &&
                        (P = x1);
                if (P && (P = P(e, u))) {
                    jm(d, P, n, c);
                    break e;
                }
                D && D(e, p, u),
                    e === "focusout" &&
                        (D = p._wrapperState) &&
                        D.controlled &&
                        p.type === "number" &&
                        ku(p, "number", p.value);
            }
            switch (((D = u ? Zr(u) : window), e)) {
                case "focusin":
                    (Pf(D) || D.contentEditable === "true") &&
                        ((Gr = D), (Lu = u), (po = null));
                    break;
                case "focusout":
                    po = Lu = Gr = null;
                    break;
                case "mousedown":
                    ju = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (ju = !1), Lf(d, n, c);
                    break;
                case "selectionchange":
                    if (E1) break;
                case "keydown":
                case "keyup":
                    Lf(d, n, c);
            }
            var S;
            if ($c)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var b = "onCompositionStart";
                            break e;
                        case "compositionend":
                            b = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            b = "onCompositionUpdate";
                            break e;
                    }
                    b = void 0;
                }
            else
                Xr
                    ? Om(e, n) && (b = "onCompositionEnd")
                    : e === "keydown" &&
                      n.keyCode === 229 &&
                      (b = "onCompositionStart");
            b &&
                (Rm &&
                    n.locale !== "ko" &&
                    (Xr || b !== "onCompositionStart"
                        ? b === "onCompositionEnd" && Xr && (S = Tm())
                        : ((Un = c),
                          (Hc = "value" in Un ? Un.value : Un.textContent),
                          (Xr = !0))),
                (D = as(u, b)),
                0 < D.length &&
                    ((b = new Cf(b, e, null, n, c)),
                    d.push({ event: b, listeners: D }),
                    S
                        ? (b.data = S)
                        : ((S = Lm(n)), S !== null && (b.data = S)))),
                (S = f1 ? p1(e, n) : h1(e, n)) &&
                    ((u = as(u, "onBeforeInput")),
                    0 < u.length &&
                        ((c = new Cf(
                            "onBeforeInput",
                            "beforeinput",
                            null,
                            n,
                            c
                        )),
                        d.push({ event: c, listeners: u }),
                        (c.data = S)));
        }
        $m(d, t);
    });
}
function Po(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function as(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var a = e,
            o = a.stateNode;
        a.tag === 5 &&
            o !== null &&
            ((a = o),
            (o = ko(e, n)),
            o != null && r.unshift(Po(e, o, a)),
            (o = ko(e, t)),
            o != null && r.push(Po(e, o, a))),
            (e = e.return);
    }
    return r;
}
function Vr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function Ff(e, t, n, r, a) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
        var s = n,
            l = s.alternate,
            u = s.stateNode;
        if (l !== null && l === r) break;
        s.tag === 5 &&
            u !== null &&
            ((s = u),
            a
                ? ((l = ko(n, o)), l != null && i.unshift(Po(n, l, s)))
                : a || ((l = ko(n, o)), l != null && i.push(Po(n, l, s)))),
            (n = n.return);
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
}
var N1 = /\r\n?/g,
    P1 = /\u0000|\uFFFD/g;
function Af(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            N1,
            `
`
        )
        .replace(P1, "");
}
function yi(e, t, n) {
    if (((t = Af(t)), Af(e) !== t && n)) throw Error(L(425));
}
function os() {}
var Iu = null,
    Fu = null;
function Au(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    );
}
var Wu = typeof setTimeout == "function" ? setTimeout : void 0,
    M1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Wf = typeof Promise == "function" ? Promise : void 0,
    T1 =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof Wf < "u"
            ? function (e) {
                  return Wf.resolve(null).then(e).catch(R1);
              }
            : Wu;
function R1(e) {
    setTimeout(function () {
        throw e;
    });
}
function Hl(e, t) {
    var n = t,
        r = 0;
    do {
        var a = n.nextSibling;
        if ((e.removeChild(n), a && a.nodeType === 8))
            if (((n = a.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(a), Co(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = a;
    } while (n);
    Co(t);
}
function Kn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
            if (t === "/$") return null;
        }
    }
    return e;
}
function Yf(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--;
            } else n === "/$" && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var La = Math.random().toString(36).slice(2),
    tn = "__reactFiber$" + La,
    Mo = "__reactProps$" + La,
    Sn = "__reactContainer$" + La,
    Yu = "__reactEvents$" + La,
    O1 = "__reactListeners$" + La,
    L1 = "__reactHandles$" + La;
function gr(e) {
    var t = e[tn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[Sn] || n[tn])) {
            if (
                ((n = t.alternate),
                t.child !== null || (n !== null && n.child !== null))
            )
                for (e = Yf(e); e !== null; ) {
                    if ((n = e[tn])) return n;
                    e = Yf(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function Vo(e) {
    return (
        (e = e[tn] || e[Sn]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
            ? null
            : e
    );
}
function Zr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(L(33));
}
function $s(e) {
    return e[Mo] || null;
}
var Uu = [],
    ea = -1;
function lr(e) {
    return { current: e };
}
function ke(e) {
    0 > ea || ((e.current = Uu[ea]), (Uu[ea] = null), ea--);
}
function we(e, t) {
    ea++, (Uu[ea] = e.current), (e.current = t);
}
var rr = {},
    tt = lr(rr),
    ft = lr(!1),
    Pr = rr;
function wa(e, t) {
    var n = e.type.contextTypes;
    if (!n) return rr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var a = {},
        o;
    for (o in n) a[o] = t[o];
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = a)),
        a
    );
}
function pt(e) {
    return (e = e.childContextTypes), e != null;
}
function is() {
    ke(ft), ke(tt);
}
function Uf(e, t, n) {
    if (tt.current !== rr) throw Error(L(168));
    we(tt, t), we(ft, n);
}
function Km(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
        return n;
    r = r.getChildContext();
    for (var a in r) if (!(a in t)) throw Error(L(108, y0(e) || "Unknown", a));
    return Pe({}, n, r);
}
function ss(e) {
    return (
        (e =
            ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
            rr),
        (Pr = tt.current),
        we(tt, e),
        we(ft, ft.current),
        !0
    );
}
function zf(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(L(169));
    n
        ? ((e = Km(e, t, Pr)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          ke(ft),
          ke(tt),
          we(tt, e))
        : ke(ft),
        we(ft, n);
}
var hn = null,
    Qs = !1,
    Bl = !1;
function qm(e) {
    hn === null ? (hn = [e]) : hn.push(e);
}
function j1(e) {
    (Qs = !0), qm(e);
}
function ur() {
    if (!Bl && hn !== null) {
        Bl = !0;
        var e = 0,
            t = ve;
        try {
            var n = hn;
            for (ve = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (hn = null), (Qs = !1);
        } catch (a) {
            throw (hn !== null && (hn = hn.slice(e + 1)), xm(Wc, ur), a);
        } finally {
            (ve = t), (Bl = !1);
        }
    }
    return null;
}
var ta = [],
    na = 0,
    ls = null,
    us = 0,
    Mt = [],
    Tt = 0,
    Mr = null,
    vn = 1,
    gn = "";
function hr(e, t) {
    (ta[na++] = us), (ta[na++] = ls), (ls = e), (us = t);
}
function Xm(e, t, n) {
    (Mt[Tt++] = vn), (Mt[Tt++] = gn), (Mt[Tt++] = Mr), (Mr = e);
    var r = vn;
    e = gn;
    var a = 32 - Ht(r) - 1;
    (r &= ~(1 << a)), (n += 1);
    var o = 32 - Ht(t) + a;
    if (30 < o) {
        var i = a - (a % 5);
        (o = (r & ((1 << i) - 1)).toString(32)),
            (r >>= i),
            (a -= i),
            (vn = (1 << (32 - Ht(t) + a)) | (n << a) | r),
            (gn = o + e);
    } else (vn = (1 << o) | (n << a) | r), (gn = e);
}
function Kc(e) {
    e.return !== null && (hr(e, 1), Xm(e, 1, 0));
}
function qc(e) {
    for (; e === ls; )
        (ls = ta[--na]), (ta[na] = null), (us = ta[--na]), (ta[na] = null);
    for (; e === Mr; )
        (Mr = Mt[--Tt]),
            (Mt[Tt] = null),
            (gn = Mt[--Tt]),
            (Mt[Tt] = null),
            (vn = Mt[--Tt]),
            (Mt[Tt] = null);
}
var Dt = null,
    wt = null,
    Ce = !1,
    zt = null;
function Gm(e, t) {
    var n = Rt(5, null, null, 0);
    (n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Hf(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t =
                    t.nodeType !== 1 ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                        ? null
                        : t),
                t !== null
                    ? ((e.stateNode = t), (Dt = e), (wt = Kn(t.firstChild)), !0)
                    : !1
            );
        case 6:
            return (
                (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), (Dt = e), (wt = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = Mr !== null ? { id: vn, overflow: gn } : null),
                      (e.memoizedState = {
                          dehydrated: t,
                          treeContext: n,
                          retryLane: 1073741824,
                      }),
                      (n = Rt(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (Dt = e),
                      (wt = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function zu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Hu(e) {
    if (Ce) {
        var t = wt;
        if (t) {
            var n = t;
            if (!Hf(e, t)) {
                if (zu(e)) throw Error(L(418));
                t = Kn(n.nextSibling);
                var r = Dt;
                t && Hf(e, t)
                    ? Gm(r, n)
                    : ((e.flags = (e.flags & -4097) | 2), (Ce = !1), (Dt = e));
            }
        } else {
            if (zu(e)) throw Error(L(418));
            (e.flags = (e.flags & -4097) | 2), (Ce = !1), (Dt = e);
        }
    }
}
function Bf(e) {
    for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
        e = e.return;
    Dt = e;
}
function wi(e) {
    if (e !== Dt) return !1;
    if (!Ce) return Bf(e), (Ce = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type),
            (t = t !== "head" && t !== "body" && !Au(e.type, e.memoizedProps))),
        t && (t = wt))
    ) {
        if (zu(e)) throw (Jm(), Error(L(418)));
        for (; t; ) Gm(e, t), (t = Kn(t.nextSibling));
    }
    if ((Bf(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(L(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            wt = Kn(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            wt = null;
        }
    } else wt = Dt ? Kn(e.stateNode.nextSibling) : null;
    return !0;
}
function Jm() {
    for (var e = wt; e; ) e = Kn(e.nextSibling);
}
function xa() {
    (wt = Dt = null), (Ce = !1);
}
function Xc(e) {
    zt === null ? (zt = [e]) : zt.push(e);
}
var I1 = bn.ReactCurrentBatchConfig;
function Wt(e, t) {
    if (e && e.defaultProps) {
        (t = Pe({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
var cs = lr(null),
    ds = null,
    ra = null,
    Gc = null;
function Jc() {
    Gc = ra = ds = null;
}
function Zc(e) {
    var t = cs.current;
    ke(cs), (e._currentValue = t);
}
function Bu(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function fa(e, t) {
    (ds = e),
        (Gc = ra = null),
        (e = e.dependencies),
        e !== null &&
            e.firstContext !== null &&
            (e.lanes & t && (dt = !0), (e.firstContext = null));
}
function jt(e) {
    var t = e._currentValue;
    if (Gc !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), ra === null)) {
            if (ds === null) throw Error(L(308));
            (ra = e), (ds.dependencies = { lanes: 0, firstContext: e });
        } else ra = ra.next = e;
    return t;
}
var yr = null;
function ed(e) {
    yr === null ? (yr = [e]) : yr.push(e);
}
function Zm(e, t, n, r) {
    var a = t.interleaved;
    return (
        a === null ? ((n.next = n), ed(t)) : ((n.next = a.next), (a.next = n)),
        (t.interleaved = n),
        En(e, r)
    );
}
function En(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t),
            (n = e.alternate),
            n !== null && (n.childLanes |= t),
            (n = e),
            (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var An = !1;
function td(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function ev(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}
function yn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    };
}
function qn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), ue & 2)) {
        var a = r.pending;
        return (
            a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
            (r.pending = t),
            En(e, n)
        );
    }
    return (
        (a = r.interleaved),
        a === null ? ((t.next = t), ed(r)) : ((t.next = a.next), (a.next = t)),
        (r.interleaved = t),
        En(e, n)
    );
}
function Fi(e, t, n) {
    if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Yc(e, n);
    }
}
function Vf(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var a = null,
            o = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                o === null ? (a = o = i) : (o = o.next = i), (n = n.next);
            } while (n !== null);
            o === null ? (a = o = t) : (o = o.next = t);
        } else a = o = t;
        (n = {
            baseState: r.baseState,
            firstBaseUpdate: a,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects,
        }),
            (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
}
function fs(e, t, n, r) {
    var a = e.updateQueue;
    An = !1;
    var o = a.firstBaseUpdate,
        i = a.lastBaseUpdate,
        s = a.shared.pending;
    if (s !== null) {
        a.shared.pending = null;
        var l = s,
            u = l.next;
        (l.next = null), i === null ? (o = u) : (i.next = u), (i = l);
        var c = e.alternate;
        c !== null &&
            ((c = c.updateQueue),
            (s = c.lastBaseUpdate),
            s !== i &&
                (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
                (c.lastBaseUpdate = l)));
    }
    if (o !== null) {
        var d = a.baseState;
        (i = 0), (c = u = l = null), (s = o);
        do {
            var p = s.lane,
                v = s.eventTime;
            if ((r & p) === p) {
                c !== null &&
                    (c = c.next =
                        {
                            eventTime: v,
                            lane: 0,
                            tag: s.tag,
                            payload: s.payload,
                            callback: s.callback,
                            next: null,
                        });
                e: {
                    var g = e,
                        w = s;
                    switch (((p = t), (v = n), w.tag)) {
                        case 1:
                            if (((g = w.payload), typeof g == "function")) {
                                d = g.call(v, d, p);
                                break e;
                            }
                            d = g;
                            break e;
                        case 3:
                            g.flags = (g.flags & -65537) | 128;
                        case 0:
                            if (
                                ((g = w.payload),
                                (p =
                                    typeof g == "function"
                                        ? g.call(v, d, p)
                                        : g),
                                p == null)
                            )
                                break e;
                            d = Pe({}, d, p);
                            break e;
                        case 2:
                            An = !0;
                    }
                }
                s.callback !== null &&
                    s.lane !== 0 &&
                    ((e.flags |= 64),
                    (p = a.effects),
                    p === null ? (a.effects = [s]) : p.push(s));
            } else
                (v = {
                    eventTime: v,
                    lane: p,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null,
                }),
                    c === null ? ((u = c = v), (l = d)) : (c = c.next = v),
                    (i |= p);
            if (((s = s.next), s === null)) {
                if (((s = a.shared.pending), s === null)) break;
                (p = s),
                    (s = p.next),
                    (p.next = null),
                    (a.lastBaseUpdate = p),
                    (a.shared.pending = null);
            }
        } while (!0);
        if (
            (c === null && (l = d),
            (a.baseState = l),
            (a.firstBaseUpdate = u),
            (a.lastBaseUpdate = c),
            (t = a.shared.interleaved),
            t !== null)
        ) {
            a = t;
            do (i |= a.lane), (a = a.next);
            while (a !== t);
        } else o === null && (a.shared.lanes = 0);
        (Rr |= i), (e.lanes = i), (e.memoizedState = d);
    }
}
function $f(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                a = r.callback;
            if (a !== null) {
                if (((r.callback = null), (r = n), typeof a != "function"))
                    throw Error(L(191, a));
                a.call(r);
            }
        }
}
var tv = new Zh.Component().refs;
function Vu(e, t, n, r) {
    (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : Pe({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ks = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Wr(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = st(),
            a = Gn(e),
            o = yn(r, a);
        (o.payload = t),
            n != null && (o.callback = n),
            (t = qn(e, o, a)),
            t !== null && (Bt(t, e, a, r), Fi(t, e, a));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = st(),
            a = Gn(e),
            o = yn(r, a);
        (o.tag = 1),
            (o.payload = t),
            n != null && (o.callback = n),
            (t = qn(e, o, a)),
            t !== null && (Bt(t, e, a, r), Fi(t, e, a));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = st(),
            r = Gn(e),
            a = yn(n, r);
        (a.tag = 2),
            t != null && (a.callback = t),
            (t = qn(e, a, r)),
            t !== null && (Bt(t, e, r, n), Fi(t, e, r));
    },
};
function Qf(e, t, n, r, a, o, i) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
            ? e.shouldComponentUpdate(r, o, i)
            : t.prototype && t.prototype.isPureReactComponent
            ? !bo(n, r) || !bo(a, o)
            : !0
    );
}
function nv(e, t, n) {
    var r = !1,
        a = rr,
        o = t.contextType;
    return (
        typeof o == "object" && o !== null
            ? (o = jt(o))
            : ((a = pt(t) ? Pr : tt.current),
              (r = t.contextTypes),
              (o = (r = r != null) ? wa(e, a) : rr)),
        (t = new t(n, o)),
        (e.memoizedState =
            t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = Ks),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = a),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        t
    );
}
function Kf(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == "function" &&
            t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
            t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Ks.enqueueReplaceState(t, t.state, null);
}
function $u(e, t, n, r) {
    var a = e.stateNode;
    (a.props = n), (a.state = e.memoizedState), (a.refs = tv), td(e);
    var o = t.contextType;
    typeof o == "object" && o !== null
        ? (a.context = jt(o))
        : ((o = pt(t) ? Pr : tt.current), (a.context = wa(e, o))),
        (a.state = e.memoizedState),
        (o = t.getDerivedStateFromProps),
        typeof o == "function" && (Vu(e, t, o, n), (a.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof a.getSnapshotBeforeUpdate == "function" ||
            (typeof a.UNSAFE_componentWillMount != "function" &&
                typeof a.componentWillMount != "function") ||
            ((t = a.state),
            typeof a.componentWillMount == "function" && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == "function" &&
                a.UNSAFE_componentWillMount(),
            t !== a.state && Ks.enqueueReplaceState(a, a.state, null),
            fs(e, n, a, r),
            (a.state = e.memoizedState)),
        typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function Va(e, t, n) {
    if (
        ((e = n.ref),
        e !== null && typeof e != "function" && typeof e != "object")
    ) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(L(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(L(147, e));
            var a = r,
                o = "" + e;
            return t !== null &&
                t.ref !== null &&
                typeof t.ref == "function" &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (i) {
                      var s = a.refs;
                      s === tv && (s = a.refs = {}),
                          i === null ? delete s[o] : (s[o] = i);
                  }),
                  (t._stringRef = o),
                  t);
        }
        if (typeof e != "string") throw Error(L(284));
        if (!n._owner) throw Error(L(290, e));
    }
    return e;
}
function xi(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(
            L(
                31,
                e === "[object Object]"
                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                    : e
            )
        ))
    );
}
function qf(e) {
    var t = e._init;
    return t(e._payload);
}
function rv(e) {
    function t(h, m) {
        if (e) {
            var y = h.deletions;
            y === null ? ((h.deletions = [m]), (h.flags |= 16)) : y.push(m);
        }
    }
    function n(h, m) {
        if (!e) return null;
        for (; m !== null; ) t(h, m), (m = m.sibling);
        return null;
    }
    function r(h, m) {
        for (h = new Map(); m !== null; )
            m.key !== null ? h.set(m.key, m) : h.set(m.index, m),
                (m = m.sibling);
        return h;
    }
    function a(h, m) {
        return (h = Jn(h, m)), (h.index = 0), (h.sibling = null), h;
    }
    function o(h, m, y) {
        return (
            (h.index = y),
            e
                ? ((y = h.alternate),
                  y !== null
                      ? ((y = y.index), y < m ? ((h.flags |= 2), m) : y)
                      : ((h.flags |= 2), m))
                : ((h.flags |= 1048576), m)
        );
    }
    function i(h) {
        return e && h.alternate === null && (h.flags |= 2), h;
    }
    function s(h, m, y, C) {
        return m === null || m.tag !== 6
            ? ((m = Gl(y, h.mode, C)), (m.return = h), m)
            : ((m = a(m, y)), (m.return = h), m);
    }
    function l(h, m, y, C) {
        var P = y.type;
        return P === qr
            ? c(h, m, y.props.children, C, y.key)
            : m !== null &&
              (m.elementType === P ||
                  (typeof P == "object" &&
                      P !== null &&
                      P.$$typeof === Fn &&
                      qf(P) === m.type))
            ? ((C = a(m, y.props)), (C.ref = Va(h, m, y)), (C.return = h), C)
            : ((C = Hi(y.type, y.key, y.props, null, h.mode, C)),
              (C.ref = Va(h, m, y)),
              (C.return = h),
              C);
    }
    function u(h, m, y, C) {
        return m === null ||
            m.tag !== 4 ||
            m.stateNode.containerInfo !== y.containerInfo ||
            m.stateNode.implementation !== y.implementation
            ? ((m = Jl(y, h.mode, C)), (m.return = h), m)
            : ((m = a(m, y.children || [])), (m.return = h), m);
    }
    function c(h, m, y, C, P) {
        return m === null || m.tag !== 7
            ? ((m = Er(y, h.mode, C, P)), (m.return = h), m)
            : ((m = a(m, y)), (m.return = h), m);
    }
    function d(h, m, y) {
        if ((typeof m == "string" && m !== "") || typeof m == "number")
            return (m = Gl("" + m, h.mode, y)), (m.return = h), m;
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case ui:
                    return (
                        (y = Hi(m.type, m.key, m.props, null, h.mode, y)),
                        (y.ref = Va(h, null, m)),
                        (y.return = h),
                        y
                    );
                case Kr:
                    return (m = Jl(m, h.mode, y)), (m.return = h), m;
                case Fn:
                    var C = m._init;
                    return d(h, C(m._payload), y);
            }
            if (ro(m) || Ya(m))
                return (m = Er(m, h.mode, y, null)), (m.return = h), m;
            xi(h, m);
        }
        return null;
    }
    function p(h, m, y, C) {
        var P = m !== null ? m.key : null;
        if ((typeof y == "string" && y !== "") || typeof y == "number")
            return P !== null ? null : s(h, m, "" + y, C);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case ui:
                    return y.key === P ? l(h, m, y, C) : null;
                case Kr:
                    return y.key === P ? u(h, m, y, C) : null;
                case Fn:
                    return (P = y._init), p(h, m, P(y._payload), C);
            }
            if (ro(y) || Ya(y)) return P !== null ? null : c(h, m, y, C, null);
            xi(h, y);
        }
        return null;
    }
    function v(h, m, y, C, P) {
        if ((typeof C == "string" && C !== "") || typeof C == "number")
            return (h = h.get(y) || null), s(m, h, "" + C, P);
        if (typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
                case ui:
                    return (
                        (h = h.get(C.key === null ? y : C.key) || null),
                        l(m, h, C, P)
                    );
                case Kr:
                    return (
                        (h = h.get(C.key === null ? y : C.key) || null),
                        u(m, h, C, P)
                    );
                case Fn:
                    var D = C._init;
                    return v(h, m, y, D(C._payload), P);
            }
            if (ro(C) || Ya(C))
                return (h = h.get(y) || null), c(m, h, C, P, null);
            xi(m, C);
        }
        return null;
    }
    function g(h, m, y, C) {
        for (
            var P = null, D = null, S = m, b = (m = 0), R = null;
            S !== null && b < y.length;
            b++
        ) {
            S.index > b ? ((R = S), (S = null)) : (R = S.sibling);
            var F = p(h, S, y[b], C);
            if (F === null) {
                S === null && (S = R);
                break;
            }
            e && S && F.alternate === null && t(h, S),
                (m = o(F, m, b)),
                D === null ? (P = F) : (D.sibling = F),
                (D = F),
                (S = R);
        }
        if (b === y.length) return n(h, S), Ce && hr(h, b), P;
        if (S === null) {
            for (; b < y.length; b++)
                (S = d(h, y[b], C)),
                    S !== null &&
                        ((m = o(S, m, b)),
                        D === null ? (P = S) : (D.sibling = S),
                        (D = S));
            return Ce && hr(h, b), P;
        }
        for (S = r(h, S); b < y.length; b++)
            (R = v(S, h, b, y[b], C)),
                R !== null &&
                    (e &&
                        R.alternate !== null &&
                        S.delete(R.key === null ? b : R.key),
                    (m = o(R, m, b)),
                    D === null ? (P = R) : (D.sibling = R),
                    (D = R));
        return (
            e &&
                S.forEach(function (z) {
                    return t(h, z);
                }),
            Ce && hr(h, b),
            P
        );
    }
    function w(h, m, y, C) {
        var P = Ya(y);
        if (typeof P != "function") throw Error(L(150));
        if (((y = P.call(y)), y == null)) throw Error(L(151));
        for (
            var D = (P = null), S = m, b = (m = 0), R = null, F = y.next();
            S !== null && !F.done;
            b++, F = y.next()
        ) {
            S.index > b ? ((R = S), (S = null)) : (R = S.sibling);
            var z = p(h, S, F.value, C);
            if (z === null) {
                S === null && (S = R);
                break;
            }
            e && S && z.alternate === null && t(h, S),
                (m = o(z, m, b)),
                D === null ? (P = z) : (D.sibling = z),
                (D = z),
                (S = R);
        }
        if (F.done) return n(h, S), Ce && hr(h, b), P;
        if (S === null) {
            for (; !F.done; b++, F = y.next())
                (F = d(h, F.value, C)),
                    F !== null &&
                        ((m = o(F, m, b)),
                        D === null ? (P = F) : (D.sibling = F),
                        (D = F));
            return Ce && hr(h, b), P;
        }
        for (S = r(h, S); !F.done; b++, F = y.next())
            (F = v(S, h, b, F.value, C)),
                F !== null &&
                    (e &&
                        F.alternate !== null &&
                        S.delete(F.key === null ? b : F.key),
                    (m = o(F, m, b)),
                    D === null ? (P = F) : (D.sibling = F),
                    (D = F));
        return (
            e &&
                S.forEach(function (K) {
                    return t(h, K);
                }),
            Ce && hr(h, b),
            P
        );
    }
    function k(h, m, y, C) {
        if (
            (typeof y == "object" &&
                y !== null &&
                y.type === qr &&
                y.key === null &&
                (y = y.props.children),
            typeof y == "object" && y !== null)
        ) {
            switch (y.$$typeof) {
                case ui:
                    e: {
                        for (var P = y.key, D = m; D !== null; ) {
                            if (D.key === P) {
                                if (((P = y.type), P === qr)) {
                                    if (D.tag === 7) {
                                        n(h, D.sibling),
                                            (m = a(D, y.props.children)),
                                            (m.return = h),
                                            (h = m);
                                        break e;
                                    }
                                } else if (
                                    D.elementType === P ||
                                    (typeof P == "object" &&
                                        P !== null &&
                                        P.$$typeof === Fn &&
                                        qf(P) === D.type)
                                ) {
                                    n(h, D.sibling),
                                        (m = a(D, y.props)),
                                        (m.ref = Va(h, D, y)),
                                        (m.return = h),
                                        (h = m);
                                    break e;
                                }
                                n(h, D);
                                break;
                            } else t(h, D);
                            D = D.sibling;
                        }
                        y.type === qr
                            ? ((m = Er(y.props.children, h.mode, C, y.key)),
                              (m.return = h),
                              (h = m))
                            : ((C = Hi(
                                  y.type,
                                  y.key,
                                  y.props,
                                  null,
                                  h.mode,
                                  C
                              )),
                              (C.ref = Va(h, m, y)),
                              (C.return = h),
                              (h = C));
                    }
                    return i(h);
                case Kr:
                    e: {
                        for (D = y.key; m !== null; ) {
                            if (m.key === D)
                                if (
                                    m.tag === 4 &&
                                    m.stateNode.containerInfo ===
                                        y.containerInfo &&
                                    m.stateNode.implementation ===
                                        y.implementation
                                ) {
                                    n(h, m.sibling),
                                        (m = a(m, y.children || [])),
                                        (m.return = h),
                                        (h = m);
                                    break e;
                                } else {
                                    n(h, m);
                                    break;
                                }
                            else t(h, m);
                            m = m.sibling;
                        }
                        (m = Jl(y, h.mode, C)), (m.return = h), (h = m);
                    }
                    return i(h);
                case Fn:
                    return (D = y._init), k(h, m, D(y._payload), C);
            }
            if (ro(y)) return g(h, m, y, C);
            if (Ya(y)) return w(h, m, y, C);
            xi(h, y);
        }
        return (typeof y == "string" && y !== "") || typeof y == "number"
            ? ((y = "" + y),
              m !== null && m.tag === 6
                  ? (n(h, m.sibling), (m = a(m, y)), (m.return = h), (h = m))
                  : (n(h, m), (m = Gl(y, h.mode, C)), (m.return = h), (h = m)),
              i(h))
            : n(h, m);
    }
    return k;
}
var Da = rv(!0),
    av = rv(!1),
    $o = {},
    un = lr($o),
    To = lr($o),
    Ro = lr($o);
function wr(e) {
    if (e === $o) throw Error(L(174));
    return e;
}
function nd(e, t) {
    switch ((we(Ro, t), we(To, e), we(un, $o), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Eu(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t),
                (t = e.namespaceURI || null),
                (e = e.tagName),
                (t = Eu(t, e));
    }
    ke(un), we(un, t);
}
function ka() {
    ke(un), ke(To), ke(Ro);
}
function ov(e) {
    wr(Ro.current);
    var t = wr(un.current),
        n = Eu(t, e.type);
    t !== n && (we(To, e), we(un, n));
}
function rd(e) {
    To.current === e && (ke(un), ke(To));
}
var _e = lr(0);
function ps(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (
                n !== null &&
                ((n = n.dehydrated),
                n === null || n.data === "$?" || n.data === "$!")
            )
                return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var Vl = [];
function ad() {
    for (var e = 0; e < Vl.length; e++)
        Vl[e]._workInProgressVersionPrimary = null;
    Vl.length = 0;
}
var Ai = bn.ReactCurrentDispatcher,
    $l = bn.ReactCurrentBatchConfig,
    Tr = 0,
    Ne = null,
    We = null,
    He = null,
    hs = !1,
    ho = !1,
    Oo = 0,
    F1 = 0;
function Je() {
    throw Error(L(321));
}
function od(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!$t(e[n], t[n])) return !1;
    return !0;
}
function id(e, t, n, r, a, o) {
    if (
        ((Tr = o),
        (Ne = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Ai.current = e === null || e.memoizedState === null ? U1 : z1),
        (e = n(r, a)),
        ho)
    ) {
        o = 0;
        do {
            if (((ho = !1), (Oo = 0), 25 <= o)) throw Error(L(301));
            (o += 1),
                (He = We = null),
                (t.updateQueue = null),
                (Ai.current = H1),
                (e = n(r, a));
        } while (ho);
    }
    if (
        ((Ai.current = ms),
        (t = We !== null && We.next !== null),
        (Tr = 0),
        (He = We = Ne = null),
        (hs = !1),
        t)
    )
        throw Error(L(300));
    return e;
}
function sd() {
    var e = Oo !== 0;
    return (Oo = 0), e;
}
function Jt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return He === null ? (Ne.memoizedState = He = e) : (He = He.next = e), He;
}
function It() {
    if (We === null) {
        var e = Ne.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = We.next;
    var t = He === null ? Ne.memoizedState : He.next;
    if (t !== null) (He = t), (We = e);
    else {
        if (e === null) throw Error(L(310));
        (We = e),
            (e = {
                memoizedState: We.memoizedState,
                baseState: We.baseState,
                baseQueue: We.baseQueue,
                queue: We.queue,
                next: null,
            }),
            He === null ? (Ne.memoizedState = He = e) : (He = He.next = e);
    }
    return He;
}
function Lo(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function Ql(e) {
    var t = It(),
        n = t.queue;
    if (n === null) throw Error(L(311));
    n.lastRenderedReducer = e;
    var r = We,
        a = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (a !== null) {
            var i = a.next;
            (a.next = o.next), (o.next = i);
        }
        (r.baseQueue = a = o), (n.pending = null);
    }
    if (a !== null) {
        (o = a.next), (r = r.baseState);
        var s = (i = null),
            l = null,
            u = o;
        do {
            var c = u.lane;
            if ((Tr & c) === c)
                l !== null &&
                    (l = l.next =
                        {
                            lane: 0,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null,
                        }),
                    (r = u.hasEagerState ? u.eagerState : e(r, u.action));
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                };
                l === null ? ((s = l = d), (i = r)) : (l = l.next = d),
                    (Ne.lanes |= c),
                    (Rr |= c);
            }
            u = u.next;
        } while (u !== null && u !== o);
        l === null ? (i = r) : (l.next = s),
            $t(r, t.memoizedState) || (dt = !0),
            (t.memoizedState = r),
            (t.baseState = i),
            (t.baseQueue = l),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        a = e;
        do (o = a.lane), (Ne.lanes |= o), (Rr |= o), (a = a.next);
        while (a !== e);
    } else a === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function Kl(e) {
    var t = It(),
        n = t.queue;
    if (n === null) throw Error(L(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        a = n.pending,
        o = t.memoizedState;
    if (a !== null) {
        n.pending = null;
        var i = (a = a.next);
        do (o = e(o, i.action)), (i = i.next);
        while (i !== a);
        $t(o, t.memoizedState) || (dt = !0),
            (t.memoizedState = o),
            t.baseQueue === null && (t.baseState = o),
            (n.lastRenderedState = o);
    }
    return [o, r];
}
function iv() {}
function sv(e, t) {
    var n = Ne,
        r = It(),
        a = t(),
        o = !$t(r.memoizedState, a);
    if (
        (o && ((r.memoizedState = a), (dt = !0)),
        (r = r.queue),
        ld(cv.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || o || (He !== null && He.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
            jo(9, uv.bind(null, n, r, a, t), void 0, null),
            Ve === null)
        )
            throw Error(L(349));
        Tr & 30 || lv(n, t, a);
    }
    return a;
}
function lv(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = Ne.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (Ne.updateQueue = t),
              (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function uv(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), dv(t) && fv(e);
}
function cv(e, t, n) {
    return n(function () {
        dv(t) && fv(e);
    });
}
function dv(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !$t(e, n);
    } catch {
        return !0;
    }
}
function fv(e) {
    var t = En(e, 1);
    t !== null && Bt(t, e, 1, -1);
}
function Xf(e) {
    var t = Jt();
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Lo,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = Y1.bind(null, Ne, e)),
        [t.memoizedState, e]
    );
}
function jo(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = Ne.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (Ne.updateQueue = t),
              (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null
                  ? (t.lastEffect = e.next = e)
                  : ((r = n.next),
                    (n.next = e),
                    (e.next = r),
                    (t.lastEffect = e))),
        e
    );
}
function pv() {
    return It().memoizedState;
}
function Wi(e, t, n, r) {
    var a = Jt();
    (Ne.flags |= e),
        (a.memoizedState = jo(1 | t, n, void 0, r === void 0 ? null : r));
}
function qs(e, t, n, r) {
    var a = It();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (We !== null) {
        var i = We.memoizedState;
        if (((o = i.destroy), r !== null && od(r, i.deps))) {
            a.memoizedState = jo(t, n, o, r);
            return;
        }
    }
    (Ne.flags |= e), (a.memoizedState = jo(1 | t, n, o, r));
}
function Gf(e, t) {
    return Wi(8390656, 8, e, t);
}
function ld(e, t) {
    return qs(2048, 8, e, t);
}
function hv(e, t) {
    return qs(4, 2, e, t);
}
function mv(e, t) {
    return qs(4, 4, e, t);
}
function vv(e, t) {
    if (typeof t == "function")
        return (
            (e = e()),
            t(e),
            function () {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function gv(e, t, n) {
    return (
        (n = n != null ? n.concat([e]) : null), qs(4, 4, vv.bind(null, t, e), n)
    );
}
function ud() {}
function yv(e, t) {
    var n = It();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && od(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
}
function wv(e, t) {
    var n = It();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && od(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
}
function xv(e, t, n) {
    return Tr & 21
        ? ($t(n, t) ||
              ((n = Sm()), (Ne.lanes |= n), (Rr |= n), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (dt = !0)),
          (e.memoizedState = n));
}
function A1(e, t) {
    var n = ve;
    (ve = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = $l.transition;
    $l.transition = {};
    try {
        e(!1), t();
    } finally {
        (ve = n), ($l.transition = r);
    }
}
function Dv() {
    return It().memoizedState;
}
function W1(e, t, n) {
    var r = Gn(e);
    if (
        ((n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
        kv(e))
    )
        Sv(t, n);
    else if (((n = Zm(e, t, n, r)), n !== null)) {
        var a = st();
        Bt(n, e, r, a), Ev(n, t, r);
    }
}
function Y1(e, t, n) {
    var r = Gn(e),
        a = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        };
    if (kv(e)) Sv(t, a);
    else {
        var o = e.alternate;
        if (
            e.lanes === 0 &&
            (o === null || o.lanes === 0) &&
            ((o = t.lastRenderedReducer), o !== null)
        )
            try {
                var i = t.lastRenderedState,
                    s = o(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = s), $t(s, i))) {
                    var l = t.interleaved;
                    l === null
                        ? ((a.next = a), ed(t))
                        : ((a.next = l.next), (l.next = a)),
                        (t.interleaved = a);
                    return;
                }
            } catch {
            } finally {
            }
        (n = Zm(e, t, a, r)),
            n !== null && ((a = st()), Bt(n, e, r, a), Ev(n, t, r));
    }
}
function kv(e) {
    var t = e.alternate;
    return e === Ne || (t !== null && t === Ne);
}
function Sv(e, t) {
    ho = hs = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
}
function Ev(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Yc(e, n);
    }
}
var ms = {
        readContext: jt,
        useCallback: Je,
        useContext: Je,
        useEffect: Je,
        useImperativeHandle: Je,
        useInsertionEffect: Je,
        useLayoutEffect: Je,
        useMemo: Je,
        useReducer: Je,
        useRef: Je,
        useState: Je,
        useDebugValue: Je,
        useDeferredValue: Je,
        useTransition: Je,
        useMutableSource: Je,
        useSyncExternalStore: Je,
        useId: Je,
        unstable_isNewReconciler: !1,
    },
    U1 = {
        readContext: jt,
        useCallback: function (e, t) {
            return (Jt().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: jt,
        useEffect: Gf,
        useImperativeHandle: function (e, t, n) {
            return (
                (n = n != null ? n.concat([e]) : null),
                Wi(4194308, 4, vv.bind(null, t, e), n)
            );
        },
        useLayoutEffect: function (e, t) {
            return Wi(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return Wi(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = Jt();
            return (
                (t = t === void 0 ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
            );
        },
        useReducer: function (e, t, n) {
            var r = Jt();
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = W1.bind(null, Ne, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = Jt();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: Xf,
        useDebugValue: ud,
        useDeferredValue: function (e) {
            return (Jt().memoizedState = e);
        },
        useTransition: function () {
            var e = Xf(!1),
                t = e[0];
            return (e = A1.bind(null, e[1])), (Jt().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = Ne,
                a = Jt();
            if (Ce) {
                if (n === void 0) throw Error(L(407));
                n = n();
            } else {
                if (((n = t()), Ve === null)) throw Error(L(349));
                Tr & 30 || lv(r, t, n);
            }
            a.memoizedState = n;
            var o = { value: n, getSnapshot: t };
            return (
                (a.queue = o),
                Gf(cv.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                jo(9, uv.bind(null, r, o, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = Jt(),
                t = Ve.identifierPrefix;
            if (Ce) {
                var n = gn,
                    r = vn;
                (n = (r & ~(1 << (32 - Ht(r) - 1))).toString(32) + n),
                    (t = ":" + t + "R" + n),
                    (n = Oo++),
                    0 < n && (t += "H" + n.toString(32)),
                    (t += ":");
            } else (n = F1++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    z1 = {
        readContext: jt,
        useCallback: yv,
        useContext: jt,
        useEffect: ld,
        useImperativeHandle: gv,
        useInsertionEffect: hv,
        useLayoutEffect: mv,
        useMemo: wv,
        useReducer: Ql,
        useRef: pv,
        useState: function () {
            return Ql(Lo);
        },
        useDebugValue: ud,
        useDeferredValue: function (e) {
            var t = It();
            return xv(t, We.memoizedState, e);
        },
        useTransition: function () {
            var e = Ql(Lo)[0],
                t = It().memoizedState;
            return [e, t];
        },
        useMutableSource: iv,
        useSyncExternalStore: sv,
        useId: Dv,
        unstable_isNewReconciler: !1,
    },
    H1 = {
        readContext: jt,
        useCallback: yv,
        useContext: jt,
        useEffect: ld,
        useImperativeHandle: gv,
        useInsertionEffect: hv,
        useLayoutEffect: mv,
        useMemo: wv,
        useReducer: Kl,
        useRef: pv,
        useState: function () {
            return Kl(Lo);
        },
        useDebugValue: ud,
        useDeferredValue: function (e) {
            var t = It();
            return We === null
                ? (t.memoizedState = e)
                : xv(t, We.memoizedState, e);
        },
        useTransition: function () {
            var e = Kl(Lo)[0],
                t = It().memoizedState;
            return [e, t];
        },
        useMutableSource: iv,
        useSyncExternalStore: sv,
        useId: Dv,
        unstable_isNewReconciler: !1,
    };
function Sa(e, t) {
    try {
        var n = "",
            r = t;
        do (n += g0(r)), (r = r.return);
        while (r);
        var a = n;
    } catch (o) {
        a =
            `
Error generating stack: ` +
            o.message +
            `
` +
            o.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
}
function ql(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Qu(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var B1 = typeof WeakMap == "function" ? WeakMap : Map;
function Cv(e, t, n) {
    (n = yn(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            gs || ((gs = !0), (rc = r)), Qu(e, t);
        }),
        n
    );
}
function _v(e, t, n) {
    (n = yn(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var a = t.value;
        (n.payload = function () {
            return r(a);
        }),
            (n.callback = function () {
                Qu(e, t);
            });
    }
    var o = e.stateNode;
    return (
        o !== null &&
            typeof o.componentDidCatch == "function" &&
            (n.callback = function () {
                Qu(e, t),
                    typeof r != "function" &&
                        (Xn === null ? (Xn = new Set([this])) : Xn.add(this));
                var i = t.stack;
                this.componentDidCatch(t.value, {
                    componentStack: i !== null ? i : "",
                });
            }),
        n
    );
}
function Jf(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new B1();
        var a = new Set();
        r.set(t, a);
    } else (a = r.get(t)), a === void 0 && ((a = new Set()), r.set(t, a));
    a.has(n) || (a.add(n), (e = aw.bind(null, e, t, n)), t.then(e, e));
}
function Zf(e) {
    do {
        var t;
        if (
            ((t = e.tag === 13) &&
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated !== null : !0)),
            t)
        )
            return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function ep(e, t, n, r, a) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = a), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                    (n.alternate === null
                        ? (n.tag = 17)
                        : ((t = yn(-1, 1)), (t.tag = 2), qn(n, t, 1))),
                (n.lanes |= 1)),
          e);
}
var V1 = bn.ReactCurrentOwner,
    dt = !1;
function at(e, t, n, r) {
    t.child = e === null ? av(t, null, n, r) : Da(t, e.child, n, r);
}
function tp(e, t, n, r, a) {
    n = n.render;
    var o = t.ref;
    return (
        fa(t, a),
        (r = id(e, t, n, r, o, a)),
        (n = sd()),
        e !== null && !dt
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~a),
              Cn(e, t, a))
            : (Ce && n && Kc(t), (t.flags |= 1), at(e, t, r, a), t.child)
    );
}
function np(e, t, n, r, a) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" &&
            !gd(o) &&
            o.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = o), bv(e, t, o, r, a))
            : ((e = Hi(n.type, null, r, t, t.mode, a)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e));
    }
    if (((o = e.child), !(e.lanes & a))) {
        var i = o.memoizedProps;
        if (
            ((n = n.compare),
            (n = n !== null ? n : bo),
            n(i, r) && e.ref === t.ref)
        )
            return Cn(e, t, a);
    }
    return (
        (t.flags |= 1),
        (e = Jn(o, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
    );
}
function bv(e, t, n, r, a) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (bo(o, r) && e.ref === t.ref)
            if (((dt = !1), (t.pendingProps = r = o), (e.lanes & a) !== 0))
                e.flags & 131072 && (dt = !0);
            else return (t.lanes = e.lanes), Cn(e, t, a);
    }
    return Ku(e, t, n, r, a);
}
function Nv(e, t, n) {
    var r = t.pendingProps,
        a = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                we(oa, gt),
                (gt |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (e = o !== null ? o.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null,
                    }),
                    (t.updateQueue = null),
                    we(oa, gt),
                    (gt |= e),
                    null
                );
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                (r = o !== null ? o.baseLanes : n),
                we(oa, gt),
                (gt |= r);
        }
    else
        o !== null
            ? ((r = o.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            we(oa, gt),
            (gt |= r);
    return at(e, t, a, n), t.child;
}
function Pv(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
}
function Ku(e, t, n, r, a) {
    var o = pt(n) ? Pr : tt.current;
    return (
        (o = wa(t, o)),
        fa(t, a),
        (n = id(e, t, n, r, o, a)),
        (r = sd()),
        e !== null && !dt
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~a),
              Cn(e, t, a))
            : (Ce && r && Kc(t), (t.flags |= 1), at(e, t, n, a), t.child)
    );
}
function rp(e, t, n, r, a) {
    if (pt(n)) {
        var o = !0;
        ss(t);
    } else o = !1;
    if ((fa(t, a), t.stateNode === null))
        Yi(e, t), nv(t, n, r), $u(t, n, r, a), (r = !0);
    else if (e === null) {
        var i = t.stateNode,
            s = t.memoizedProps;
        i.props = s;
        var l = i.context,
            u = n.contextType;
        typeof u == "object" && u !== null
            ? (u = jt(u))
            : ((u = pt(n) ? Pr : tt.current), (u = wa(t, u)));
        var c = n.getDerivedStateFromProps,
            d =
                typeof c == "function" ||
                typeof i.getSnapshotBeforeUpdate == "function";
        d ||
            (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
                typeof i.componentWillReceiveProps != "function") ||
            ((s !== r || l !== u) && Kf(t, i, r, u)),
            (An = !1);
        var p = t.memoizedState;
        (i.state = p),
            fs(t, r, i, a),
            (l = t.memoizedState),
            s !== r || p !== l || ft.current || An
                ? (typeof c == "function" &&
                      (Vu(t, n, c, r), (l = t.memoizedState)),
                  (s = An || Qf(t, n, s, r, p, l, u))
                      ? (d ||
                            (typeof i.UNSAFE_componentWillMount != "function" &&
                                typeof i.componentWillMount != "function") ||
                            (typeof i.componentWillMount == "function" &&
                                i.componentWillMount(),
                            typeof i.UNSAFE_componentWillMount == "function" &&
                                i.UNSAFE_componentWillMount()),
                        typeof i.componentDidMount == "function" &&
                            (t.flags |= 4194308))
                      : (typeof i.componentDidMount == "function" &&
                            (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = l)),
                  (i.props = r),
                  (i.state = l),
                  (i.context = u),
                  (r = s))
                : (typeof i.componentDidMount == "function" &&
                      (t.flags |= 4194308),
                  (r = !1));
    } else {
        (i = t.stateNode),
            ev(e, t),
            (s = t.memoizedProps),
            (u = t.type === t.elementType ? s : Wt(t.type, s)),
            (i.props = u),
            (d = t.pendingProps),
            (p = i.context),
            (l = n.contextType),
            typeof l == "object" && l !== null
                ? (l = jt(l))
                : ((l = pt(n) ? Pr : tt.current), (l = wa(t, l)));
        var v = n.getDerivedStateFromProps;
        (c =
            typeof v == "function" ||
            typeof i.getSnapshotBeforeUpdate == "function") ||
            (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
                typeof i.componentWillReceiveProps != "function") ||
            ((s !== d || p !== l) && Kf(t, i, r, l)),
            (An = !1),
            (p = t.memoizedState),
            (i.state = p),
            fs(t, r, i, a);
        var g = t.memoizedState;
        s !== d || p !== g || ft.current || An
            ? (typeof v == "function" &&
                  (Vu(t, n, v, r), (g = t.memoizedState)),
              (u = An || Qf(t, n, u, r, p, g, l) || !1)
                  ? (c ||
                        (typeof i.UNSAFE_componentWillUpdate != "function" &&
                            typeof i.componentWillUpdate != "function") ||
                        (typeof i.componentWillUpdate == "function" &&
                            i.componentWillUpdate(r, g, l),
                        typeof i.UNSAFE_componentWillUpdate == "function" &&
                            i.UNSAFE_componentWillUpdate(r, g, l)),
                    typeof i.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof i.getSnapshotBeforeUpdate == "function" &&
                        (t.flags |= 1024))
                  : (typeof i.componentDidUpdate != "function" ||
                        (s === e.memoizedProps && p === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof i.getSnapshotBeforeUpdate != "function" ||
                        (s === e.memoizedProps && p === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = g)),
              (i.props = r),
              (i.state = g),
              (i.context = l),
              (r = u))
            : (typeof i.componentDidUpdate != "function" ||
                  (s === e.memoizedProps && p === e.memoizedState) ||
                  (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                  (s === e.memoizedProps && p === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return qu(e, t, n, r, o, a);
}
function qu(e, t, n, r, a, o) {
    Pv(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return a && zf(t, n, !1), Cn(e, t, o);
    (r = t.stateNode), (V1.current = t);
    var s =
        i && typeof n.getDerivedStateFromError != "function"
            ? null
            : r.render();
    return (
        (t.flags |= 1),
        e !== null && i
            ? ((t.child = Da(t, e.child, null, o)),
              (t.child = Da(t, null, s, o)))
            : at(e, t, s, o),
        (t.memoizedState = r.state),
        a && zf(t, n, !0),
        t.child
    );
}
function Mv(e) {
    var t = e.stateNode;
    t.pendingContext
        ? Uf(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && Uf(e, t.context, !1),
        nd(e, t.containerInfo);
}
function ap(e, t, n, r, a) {
    return xa(), Xc(a), (t.flags |= 256), at(e, t, n, r), t.child;
}
var Xu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Gu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function Tv(e, t, n) {
    var r = t.pendingProps,
        a = _e.current,
        o = !1,
        i = (t.flags & 128) !== 0,
        s;
    if (
        ((s = i) ||
            (s = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
        s
            ? ((o = !0), (t.flags &= -129))
            : (e === null || e.memoizedState !== null) && (a |= 1),
        we(_e, a & 1),
        e === null)
    )
        return (
            Hu(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1
                      ? e.data === "$!"
                          ? (t.lanes = 8)
                          : (t.lanes = 1073741824)
                      : (t.lanes = 1),
                  null)
                : ((i = r.children),
                  (e = r.fallback),
                  o
                      ? ((r = t.mode),
                        (o = t.child),
                        (i = { mode: "hidden", children: i }),
                        !(r & 1) && o !== null
                            ? ((o.childLanes = 0), (o.pendingProps = i))
                            : (o = Js(i, r, 0, null)),
                        (e = Er(e, r, n, null)),
                        (o.return = t),
                        (e.return = t),
                        (o.sibling = e),
                        (t.child = o),
                        (t.child.memoizedState = Gu(n)),
                        (t.memoizedState = Xu),
                        e)
                      : cd(t, i))
        );
    if (((a = e.memoizedState), a !== null && ((s = a.dehydrated), s !== null)))
        return $1(e, t, i, r, s, a, n);
    if (o) {
        (o = r.fallback), (i = t.mode), (a = e.child), (s = a.sibling);
        var l = { mode: "hidden", children: r.children };
        return (
            !(i & 1) && t.child !== a
                ? ((r = t.child),
                  (r.childLanes = 0),
                  (r.pendingProps = l),
                  (t.deletions = null))
                : ((r = Jn(a, l)),
                  (r.subtreeFlags = a.subtreeFlags & 14680064)),
            s !== null
                ? (o = Jn(s, o))
                : ((o = Er(o, i, n, null)), (o.flags |= 2)),
            (o.return = t),
            (r.return = t),
            (r.sibling = o),
            (t.child = r),
            (r = o),
            (o = t.child),
            (i = e.child.memoizedState),
            (i =
                i === null
                    ? Gu(n)
                    : {
                          baseLanes: i.baseLanes | n,
                          cachePool: null,
                          transitions: i.transitions,
                      }),
            (o.memoizedState = i),
            (o.childLanes = e.childLanes & ~n),
            (t.memoizedState = Xu),
            r
        );
    }
    return (
        (o = e.child),
        (e = o.sibling),
        (r = Jn(o, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
            ((n = t.deletions),
            n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function cd(e, t) {
    return (
        (t = Js({ mode: "visible", children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
    );
}
function Di(e, t, n, r) {
    return (
        r !== null && Xc(r),
        Da(t, e.child, null, n),
        (e = cd(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function $1(e, t, n, r, a, o, i) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = ql(Error(L(422)))), Di(e, t, i, r))
            : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((o = r.fallback),
              (a = t.mode),
              (r = Js({ mode: "visible", children: r.children }, a, 0, null)),
              (o = Er(o, a, i, null)),
              (o.flags |= 2),
              (r.return = t),
              (o.return = t),
              (r.sibling = o),
              (t.child = r),
              t.mode & 1 && Da(t, e.child, null, i),
              (t.child.memoizedState = Gu(i)),
              (t.memoizedState = Xu),
              o);
    if (!(t.mode & 1)) return Di(e, t, i, null);
    if (a.data === "$!") {
        if (((r = a.nextSibling && a.nextSibling.dataset), r)) var s = r.dgst;
        return (
            (r = s), (o = Error(L(419))), (r = ql(o, r, void 0)), Di(e, t, i, r)
        );
    }
    if (((s = (i & e.childLanes) !== 0), dt || s)) {
        if (((r = Ve), r !== null)) {
            switch (i & -i) {
                case 4:
                    a = 2;
                    break;
                case 16:
                    a = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    a = 32;
                    break;
                case 536870912:
                    a = 268435456;
                    break;
                default:
                    a = 0;
            }
            (a = a & (r.suspendedLanes | i) ? 0 : a),
                a !== 0 &&
                    a !== o.retryLane &&
                    ((o.retryLane = a), En(e, a), Bt(r, e, a, -1));
        }
        return vd(), (r = ql(Error(L(421)))), Di(e, t, i, r);
    }
    return a.data === "$?"
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = ow.bind(null, e)),
          (a._reactRetry = t),
          null)
        : ((e = o.treeContext),
          (wt = Kn(a.nextSibling)),
          (Dt = t),
          (Ce = !0),
          (zt = null),
          e !== null &&
              ((Mt[Tt++] = vn),
              (Mt[Tt++] = gn),
              (Mt[Tt++] = Mr),
              (vn = e.id),
              (gn = e.overflow),
              (Mr = t)),
          (t = cd(t, r.children)),
          (t.flags |= 4096),
          t);
}
function op(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Bu(e.return, t, n);
}
function Xl(e, t, n, r, a) {
    var o = e.memoizedState;
    o === null
        ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = a));
}
function Rv(e, t, n) {
    var r = t.pendingProps,
        a = r.revealOrder,
        o = r.tail;
    if ((at(e, t, r.children, n), (r = _e.current), r & 2))
        (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && op(e, n, t);
                else if (e.tag === 19) op(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((we(_e, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (a) {
            case "forwards":
                for (n = t.child, a = null; n !== null; )
                    (e = n.alternate),
                        e !== null && ps(e) === null && (a = n),
                        (n = n.sibling);
                (n = a),
                    n === null
                        ? ((a = t.child), (t.child = null))
                        : ((a = n.sibling), (n.sibling = null)),
                    Xl(t, !1, a, n, o);
                break;
            case "backwards":
                for (n = null, a = t.child, t.child = null; a !== null; ) {
                    if (((e = a.alternate), e !== null && ps(e) === null)) {
                        t.child = a;
                        break;
                    }
                    (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Xl(t, !0, n, null, o);
                break;
            case "together":
                Xl(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function Yi(e, t) {
    !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Cn(e, t, n) {
    if (
        (e !== null && (t.dependencies = e.dependencies),
        (Rr |= t.lanes),
        !(n & t.childLanes))
    )
        return null;
    if (e !== null && t.child !== e.child) throw Error(L(153));
    if (t.child !== null) {
        for (
            e = t.child, n = Jn(e, e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;

        )
            (e = e.sibling),
                (n = n.sibling = Jn(e, e.pendingProps)),
                (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function Q1(e, t, n) {
    switch (t.tag) {
        case 3:
            Mv(t), xa();
            break;
        case 5:
            ov(t);
            break;
        case 1:
            pt(t.type) && ss(t);
            break;
        case 4:
            nd(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                a = t.memoizedProps.value;
            we(cs, r._currentValue), (r._currentValue = a);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (we(_e, _e.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                    ? Tv(e, t, n)
                    : (we(_e, _e.current & 1),
                      (e = Cn(e, t, n)),
                      e !== null ? e.sibling : null);
            we(_e, _e.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return Rv(e, t, n);
                t.flags |= 128;
            }
            if (
                ((a = t.memoizedState),
                a !== null &&
                    ((a.rendering = null),
                    (a.tail = null),
                    (a.lastEffect = null)),
                we(_e, _e.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), Nv(e, t, n);
    }
    return Cn(e, t, n);
}
var Ov, Ju, Lv, jv;
Ov = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
Ju = function () {};
Lv = function (e, t, n, r) {
    var a = e.memoizedProps;
    if (a !== r) {
        (e = t.stateNode), wr(un.current);
        var o = null;
        switch (n) {
            case "input":
                (a = xu(e, a)), (r = xu(e, r)), (o = []);
                break;
            case "select":
                (a = Pe({}, a, { value: void 0 })),
                    (r = Pe({}, r, { value: void 0 })),
                    (o = []);
                break;
            case "textarea":
                (a = Su(e, a)), (r = Su(e, r)), (o = []);
                break;
            default:
                typeof a.onClick != "function" &&
                    typeof r.onClick == "function" &&
                    (e.onclick = os);
        }
        Cu(n, r);
        var i;
        n = null;
        for (u in a)
            if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && a[u] != null)
                if (u === "style") {
                    var s = a[u];
                    for (i in s)
                        s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                } else
                    u !== "dangerouslySetInnerHTML" &&
                        u !== "children" &&
                        u !== "suppressContentEditableWarning" &&
                        u !== "suppressHydrationWarning" &&
                        u !== "autoFocus" &&
                        (xo.hasOwnProperty(u)
                            ? o || (o = [])
                            : (o = o || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (
                ((s = a != null ? a[u] : void 0),
                r.hasOwnProperty(u) && l !== s && (l != null || s != null))
            )
                if (u === "style")
                    if (s) {
                        for (i in s)
                            !s.hasOwnProperty(i) ||
                                (l && l.hasOwnProperty(i)) ||
                                (n || (n = {}), (n[i] = ""));
                        for (i in l)
                            l.hasOwnProperty(i) &&
                                s[i] !== l[i] &&
                                (n || (n = {}), (n[i] = l[i]));
                    } else n || (o || (o = []), o.push(u, n)), (n = l);
                else
                    u === "dangerouslySetInnerHTML"
                        ? ((l = l ? l.__html : void 0),
                          (s = s ? s.__html : void 0),
                          l != null && s !== l && (o = o || []).push(u, l))
                        : u === "children"
                        ? (typeof l != "string" && typeof l != "number") ||
                          (o = o || []).push(u, "" + l)
                        : u !== "suppressContentEditableWarning" &&
                          u !== "suppressHydrationWarning" &&
                          (xo.hasOwnProperty(u)
                              ? (l != null &&
                                    u === "onScroll" &&
                                    De("scroll", e),
                                o || s === l || (o = []))
                              : (o = o || []).push(u, l));
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4);
    }
};
jv = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function $a(e, t) {
    if (!Ce)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; )
                    n.alternate !== null && (r = n), (n = n.sibling);
                r === null
                    ? t || e.tail === null
                        ? (e.tail = null)
                        : (e.tail.sibling = null)
                    : (r.sibling = null);
        }
}
function Ze(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var a = e.child; a !== null; )
            (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags & 14680064),
                (r |= a.flags & 14680064),
                (a.return = e),
                (a = a.sibling);
    else
        for (a = e.child; a !== null; )
            (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function K1(e, t, n) {
    var r = t.pendingProps;
    switch ((qc(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Ze(t), null;
        case 1:
            return pt(t.type) && is(), Ze(t), null;
        case 3:
            return (
                (r = t.stateNode),
                ka(),
                ke(ft),
                ke(tt),
                ad(),
                r.pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (wi(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024),
                          zt !== null && (ic(zt), (zt = null)))),
                Ju(e, t),
                Ze(t),
                null
            );
        case 5:
            rd(t);
            var a = wr(Ro.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                Lv(e, t, n, r, a),
                    e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(L(166));
                    return Ze(t), null;
                }
                if (((e = wr(un.current)), wi(t))) {
                    (r = t.stateNode), (n = t.type);
                    var o = t.memoizedProps;
                    switch (
                        ((r[tn] = t), (r[Mo] = o), (e = (t.mode & 1) !== 0), n)
                    ) {
                        case "dialog":
                            De("cancel", r), De("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            De("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (a = 0; a < oo.length; a++) De(oo[a], r);
                            break;
                        case "source":
                            De("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            De("error", r), De("load", r);
                            break;
                        case "details":
                            De("toggle", r);
                            break;
                        case "input":
                            hf(r, o), De("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!o.multiple }),
                                De("invalid", r);
                            break;
                        case "textarea":
                            vf(r, o), De("invalid", r);
                    }
                    Cu(n, o), (a = null);
                    for (var i in o)
                        if (o.hasOwnProperty(i)) {
                            var s = o[i];
                            i === "children"
                                ? typeof s == "string"
                                    ? r.textContent !== s &&
                                      (o.suppressHydrationWarning !== !0 &&
                                          yi(r.textContent, s, e),
                                      (a = ["children", s]))
                                    : typeof s == "number" &&
                                      r.textContent !== "" + s &&
                                      (o.suppressHydrationWarning !== !0 &&
                                          yi(r.textContent, s, e),
                                      (a = ["children", "" + s]))
                                : xo.hasOwnProperty(i) &&
                                  s != null &&
                                  i === "onScroll" &&
                                  De("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            ci(r), mf(r, o, !0);
                            break;
                        case "textarea":
                            ci(r), gf(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = os);
                    }
                    (r = a), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (i = a.nodeType === 9 ? a : a.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = lm(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = i.createElement("div")),
                                  (e.innerHTML = "<script></script>"),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                ? (e = i.createElement(n, { is: r.is }))
                                : ((e = i.createElement(n)),
                                  n === "select" &&
                                      ((i = e),
                                      r.multiple
                                          ? (i.multiple = !0)
                                          : r.size && (i.size = r.size)))
                            : (e = i.createElementNS(e, n)),
                        (e[tn] = t),
                        (e[Mo] = r),
                        Ov(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((i = _u(n, r)), n)) {
                            case "dialog":
                                De("cancel", e), De("close", e), (a = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                De("load", e), (a = r);
                                break;
                            case "video":
                            case "audio":
                                for (a = 0; a < oo.length; a++) De(oo[a], e);
                                a = r;
                                break;
                            case "source":
                                De("error", e), (a = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                De("error", e), De("load", e), (a = r);
                                break;
                            case "details":
                                De("toggle", e), (a = r);
                                break;
                            case "input":
                                hf(e, r), (a = xu(e, r)), De("invalid", e);
                                break;
                            case "option":
                                a = r;
                                break;
                            case "select":
                                (e._wrapperState = {
                                    wasMultiple: !!r.multiple,
                                }),
                                    (a = Pe({}, r, { value: void 0 })),
                                    De("invalid", e);
                                break;
                            case "textarea":
                                vf(e, r), (a = Su(e, r)), De("invalid", e);
                                break;
                            default:
                                a = r;
                        }
                        Cu(n, a), (s = a);
                        for (o in s)
                            if (s.hasOwnProperty(o)) {
                                var l = s[o];
                                o === "style"
                                    ? dm(e, l)
                                    : o === "dangerouslySetInnerHTML"
                                    ? ((l = l ? l.__html : void 0),
                                      l != null && um(e, l))
                                    : o === "children"
                                    ? typeof l == "string"
                                        ? (n !== "textarea" || l !== "") &&
                                          Do(e, l)
                                        : typeof l == "number" && Do(e, "" + l)
                                    : o !== "suppressContentEditableWarning" &&
                                      o !== "suppressHydrationWarning" &&
                                      o !== "autoFocus" &&
                                      (xo.hasOwnProperty(o)
                                          ? l != null &&
                                            o === "onScroll" &&
                                            De("scroll", e)
                                          : l != null && Lc(e, o, l, i));
                            }
                        switch (n) {
                            case "input":
                                ci(e), mf(e, r, !1);
                                break;
                            case "textarea":
                                ci(e), gf(e);
                                break;
                            case "option":
                                r.value != null &&
                                    e.setAttribute("value", "" + nr(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple),
                                    (o = r.value),
                                    o != null
                                        ? la(e, !!r.multiple, o, !1)
                                        : r.defaultValue != null &&
                                          la(
                                              e,
                                              !!r.multiple,
                                              r.defaultValue,
                                              !0
                                          );
                                break;
                            default:
                                typeof a.onClick == "function" &&
                                    (e.onclick = os);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return Ze(t), null;
        case 6:
            if (e && t.stateNode != null) jv(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(L(166));
                if (((n = wr(Ro.current)), wr(un.current), wi(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[tn] = t),
                        (o = r.nodeValue !== n) && ((e = Dt), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                yi(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !==
                                    !0 &&
                                    yi(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    o && (t.flags |= 4);
                } else
                    (r = (
                        n.nodeType === 9 ? n : n.ownerDocument
                    ).createTextNode(r)),
                        (r[tn] = t),
                        (t.stateNode = r);
            }
            return Ze(t), null;
        case 13:
            if (
                (ke(_e),
                (r = t.memoizedState),
                e === null ||
                    (e.memoizedState !== null &&
                        e.memoizedState.dehydrated !== null))
            ) {
                if (Ce && wt !== null && t.mode & 1 && !(t.flags & 128))
                    Jm(), xa(), (t.flags |= 98560), (o = !1);
                else if (((o = wi(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!o) throw Error(L(318));
                        if (
                            ((o = t.memoizedState),
                            (o = o !== null ? o.dehydrated : null),
                            !o)
                        )
                            throw Error(L(317));
                        o[tn] = t;
                    } else
                        xa(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            (t.flags |= 4);
                    Ze(t), (o = !1);
                } else zt !== null && (ic(zt), (zt = null)), (o = !0);
                if (!o) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((t.child.flags |= 8192),
                      t.mode & 1 &&
                          (e === null || _e.current & 1
                              ? Ye === 0 && (Ye = 3)
                              : vd())),
                  t.updateQueue !== null && (t.flags |= 4),
                  Ze(t),
                  null);
        case 4:
            return (
                ka(),
                Ju(e, t),
                e === null && No(t.stateNode.containerInfo),
                Ze(t),
                null
            );
        case 10:
            return Zc(t.type._context), Ze(t), null;
        case 17:
            return pt(t.type) && is(), Ze(t), null;
        case 19:
            if ((ke(_e), (o = t.memoizedState), o === null)) return Ze(t), null;
            if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
                if (r) $a(o, !1);
                else {
                    if (Ye !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((i = ps(e)), i !== null)) {
                                for (
                                    t.flags |= 128,
                                        $a(o, !1),
                                        r = i.updateQueue,
                                        r !== null &&
                                            ((t.updateQueue = r),
                                            (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (o = n),
                                        (e = r),
                                        (o.flags &= 14680066),
                                        (i = o.alternate),
                                        i === null
                                            ? ((o.childLanes = 0),
                                              (o.lanes = e),
                                              (o.child = null),
                                              (o.subtreeFlags = 0),
                                              (o.memoizedProps = null),
                                              (o.memoizedState = null),
                                              (o.updateQueue = null),
                                              (o.dependencies = null),
                                              (o.stateNode = null))
                                            : ((o.childLanes = i.childLanes),
                                              (o.lanes = i.lanes),
                                              (o.child = i.child),
                                              (o.subtreeFlags = 0),
                                              (o.deletions = null),
                                              (o.memoizedProps =
                                                  i.memoizedProps),
                                              (o.memoizedState =
                                                  i.memoizedState),
                                              (o.updateQueue = i.updateQueue),
                                              (o.type = i.type),
                                              (e = i.dependencies),
                                              (o.dependencies =
                                                  e === null
                                                      ? null
                                                      : {
                                                            lanes: e.lanes,
                                                            firstContext:
                                                                e.firstContext,
                                                        })),
                                        (n = n.sibling);
                                return we(_e, (_e.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    o.tail !== null &&
                        Le() > Ea &&
                        ((t.flags |= 128),
                        (r = !0),
                        $a(o, !1),
                        (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = ps(i)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            $a(o, !0),
                            o.tail === null &&
                                o.tailMode === "hidden" &&
                                !i.alternate &&
                                !Ce)
                        )
                            return Ze(t), null;
                    } else
                        2 * Le() - o.renderingStartTime > Ea &&
                            n !== 1073741824 &&
                            ((t.flags |= 128),
                            (r = !0),
                            $a(o, !1),
                            (t.lanes = 4194304));
                o.isBackwards
                    ? ((i.sibling = t.child), (t.child = i))
                    : ((n = o.last),
                      n !== null ? (n.sibling = i) : (t.child = i),
                      (o.last = i));
            }
            return o.tail !== null
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Le()),
                  (t.sibling = null),
                  (n = _e.current),
                  we(_e, r ? (n & 1) | 2 : n & 1),
                  t)
                : (Ze(t), null);
        case 22:
        case 23:
            return (
                md(),
                (r = t.memoizedState !== null),
                e !== null &&
                    (e.memoizedState !== null) !== r &&
                    (t.flags |= 8192),
                r && t.mode & 1
                    ? gt & 1073741824 &&
                      (Ze(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                    : Ze(t),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(L(156, t.tag));
}
function q1(e, t) {
    switch ((qc(t), t.tag)) {
        case 1:
            return (
                pt(t.type) && is(),
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 3:
            return (
                ka(),
                ke(ft),
                ke(tt),
                ad(),
                (e = t.flags),
                e & 65536 && !(e & 128)
                    ? ((t.flags = (e & -65537) | 128), t)
                    : null
            );
        case 5:
            return rd(t), null;
        case 13:
            if (
                (ke(_e),
                (e = t.memoizedState),
                e !== null && e.dehydrated !== null)
            ) {
                if (t.alternate === null) throw Error(L(340));
                xa();
            }
            return (
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 19:
            return ke(_e), null;
        case 4:
            return ka(), null;
        case 10:
            return Zc(t.type._context), null;
        case 22:
        case 23:
            return md(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var ki = !1,
    et = !1,
    X1 = typeof WeakSet == "function" ? WeakSet : Set,
    V = null;
function aa(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                Te(e, t, r);
            }
        else n.current = null;
}
function Zu(e, t, n) {
    try {
        n();
    } catch (r) {
        Te(e, t, r);
    }
}
var ip = !1;
function G1(e, t) {
    if (((Iu = ns), (e = Wm()), Qc(e))) {
        if ("selectionStart" in e)
            var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var a = r.anchorOffset,
                        o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, o.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var i = 0,
                        s = -1,
                        l = -1,
                        u = 0,
                        c = 0,
                        d = e,
                        p = null;
                    t: for (;;) {
                        for (
                            var v;
                            d !== n ||
                                (a !== 0 && d.nodeType !== 3) ||
                                (s = i + a),
                                d !== o ||
                                    (r !== 0 && d.nodeType !== 3) ||
                                    (l = i + r),
                                d.nodeType === 3 && (i += d.nodeValue.length),
                                (v = d.firstChild) !== null;

                        )
                            (p = d), (d = v);
                        for (;;) {
                            if (d === e) break t;
                            if (
                                (p === n && ++u === a && (s = i),
                                p === o && ++c === r && (l = i),
                                (v = d.nextSibling) !== null)
                            )
                                break;
                            (d = p), (p = d.parentNode);
                        }
                        d = v;
                    }
                    n = s === -1 || l === -1 ? null : { start: s, end: l };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (
        Fu = { focusedElem: e, selectionRange: n }, ns = !1, V = t;
        V !== null;

    )
        if (
            ((t = V),
            (e = t.child),
            (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
            (e.return = t), (V = e);
        else
            for (; V !== null; ) {
                t = V;
                try {
                    var g = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (g !== null) {
                                    var w = g.memoizedProps,
                                        k = g.memoizedState,
                                        h = t.stateNode,
                                        m = h.getSnapshotBeforeUpdate(
                                            t.elementType === t.type
                                                ? w
                                                : Wt(t.type, w),
                                            k
                                        );
                                    h.__reactInternalSnapshotBeforeUpdate = m;
                                }
                                break;
                            case 3:
                                var y = t.stateNode.containerInfo;
                                y.nodeType === 1
                                    ? (y.textContent = "")
                                    : y.nodeType === 9 &&
                                      y.documentElement &&
                                      y.removeChild(y.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(L(163));
                        }
                } catch (C) {
                    Te(t, t.return, C);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (V = e);
                    break;
                }
                V = t.return;
            }
    return (g = ip), (ip = !1), g;
}
function mo(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var a = (r = r.next);
        do {
            if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), o !== void 0 && Zu(t, n, o);
            }
            a = a.next;
        } while (a !== r);
    }
}
function Xs(e, t) {
    if (
        ((t = t.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
    ) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function ec(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == "function" ? t(e) : (t.current = e);
    }
}
function Iv(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Iv(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode),
            t !== null &&
                (delete t[tn],
                delete t[Mo],
                delete t[Yu],
                delete t[O1],
                delete t[L1])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function Fv(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function sp(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || Fv(e.return)) return null;
            e = e.return;
        }
        for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function tc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8
                      ? ((t = n.parentNode), t.insertBefore(e, n))
                      : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = os));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (tc(e, t, n), e = e.sibling; e !== null; )
            tc(e, t, n), (e = e.sibling);
}
function nc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (nc(e, t, n), e = e.sibling; e !== null; )
            nc(e, t, n), (e = e.sibling);
}
var qe = null,
    Yt = !1;
function On(e, t, n) {
    for (n = n.child; n !== null; ) Av(e, t, n), (n = n.sibling);
}
function Av(e, t, n) {
    if (ln && typeof ln.onCommitFiberUnmount == "function")
        try {
            ln.onCommitFiberUnmount(zs, n);
        } catch {}
    switch (n.tag) {
        case 5:
            et || aa(n, t);
        case 6:
            var r = qe,
                a = Yt;
            (qe = null),
                On(e, t, n),
                (qe = r),
                (Yt = a),
                qe !== null &&
                    (Yt
                        ? ((e = qe),
                          (n = n.stateNode),
                          e.nodeType === 8
                              ? e.parentNode.removeChild(n)
                              : e.removeChild(n))
                        : qe.removeChild(n.stateNode));
            break;
        case 18:
            qe !== null &&
                (Yt
                    ? ((e = qe),
                      (n = n.stateNode),
                      e.nodeType === 8
                          ? Hl(e.parentNode, n)
                          : e.nodeType === 1 && Hl(e, n),
                      Co(e))
                    : Hl(qe, n.stateNode));
            break;
        case 4:
            (r = qe),
                (a = Yt),
                (qe = n.stateNode.containerInfo),
                (Yt = !0),
                On(e, t, n),
                (qe = r),
                (Yt = a);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !et &&
                ((r = n.updateQueue),
                r !== null && ((r = r.lastEffect), r !== null))
            ) {
                a = r = r.next;
                do {
                    var o = a,
                        i = o.destroy;
                    (o = o.tag),
                        i !== void 0 && (o & 2 || o & 4) && Zu(n, t, i),
                        (a = a.next);
                } while (a !== r);
            }
            On(e, t, n);
            break;
        case 1:
            if (
                !et &&
                (aa(n, t),
                (r = n.stateNode),
                typeof r.componentWillUnmount == "function")
            )
                try {
                    (r.props = n.memoizedProps),
                        (r.state = n.memoizedState),
                        r.componentWillUnmount();
                } catch (s) {
                    Te(n, t, s);
                }
            On(e, t, n);
            break;
        case 21:
            On(e, t, n);
            break;
        case 22:
            n.mode & 1
                ? ((et = (r = et) || n.memoizedState !== null),
                  On(e, t, n),
                  (et = r))
                : On(e, t, n);
            break;
        default:
            On(e, t, n);
    }
}
function lp(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new X1()),
            t.forEach(function (r) {
                var a = iw.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(a, a));
            });
    }
}
function At(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var a = n[r];
            try {
                var o = e,
                    i = t,
                    s = i;
                e: for (; s !== null; ) {
                    switch (s.tag) {
                        case 5:
                            (qe = s.stateNode), (Yt = !1);
                            break e;
                        case 3:
                            (qe = s.stateNode.containerInfo), (Yt = !0);
                            break e;
                        case 4:
                            (qe = s.stateNode.containerInfo), (Yt = !0);
                            break e;
                    }
                    s = s.return;
                }
                if (qe === null) throw Error(L(160));
                Av(o, i, a), (qe = null), (Yt = !1);
                var l = a.alternate;
                l !== null && (l.return = null), (a.return = null);
            } catch (u) {
                Te(a, t, u);
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) Wv(t, e), (t = t.sibling);
}
function Wv(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((At(t, e), Gt(e), r & 4)) {
                try {
                    mo(3, e, e.return), Xs(3, e);
                } catch (w) {
                    Te(e, e.return, w);
                }
                try {
                    mo(5, e, e.return);
                } catch (w) {
                    Te(e, e.return, w);
                }
            }
            break;
        case 1:
            At(t, e), Gt(e), r & 512 && n !== null && aa(n, n.return);
            break;
        case 5:
            if (
                (At(t, e),
                Gt(e),
                r & 512 && n !== null && aa(n, n.return),
                e.flags & 32)
            ) {
                var a = e.stateNode;
                try {
                    Do(a, "");
                } catch (w) {
                    Te(e, e.return, w);
                }
            }
            if (r & 4 && ((a = e.stateNode), a != null)) {
                var o = e.memoizedProps,
                    i = n !== null ? n.memoizedProps : o,
                    s = e.type,
                    l = e.updateQueue;
                if (((e.updateQueue = null), l !== null))
                    try {
                        s === "input" &&
                            o.type === "radio" &&
                            o.name != null &&
                            im(a, o),
                            _u(s, i);
                        var u = _u(s, o);
                        for (i = 0; i < l.length; i += 2) {
                            var c = l[i],
                                d = l[i + 1];
                            c === "style"
                                ? dm(a, d)
                                : c === "dangerouslySetInnerHTML"
                                ? um(a, d)
                                : c === "children"
                                ? Do(a, d)
                                : Lc(a, c, d, u);
                        }
                        switch (s) {
                            case "input":
                                Du(a, o);
                                break;
                            case "textarea":
                                sm(a, o);
                                break;
                            case "select":
                                var p = a._wrapperState.wasMultiple;
                                a._wrapperState.wasMultiple = !!o.multiple;
                                var v = o.value;
                                v != null
                                    ? la(a, !!o.multiple, v, !1)
                                    : p !== !!o.multiple &&
                                      (o.defaultValue != null
                                          ? la(
                                                a,
                                                !!o.multiple,
                                                o.defaultValue,
                                                !0
                                            )
                                          : la(
                                                a,
                                                !!o.multiple,
                                                o.multiple ? [] : "",
                                                !1
                                            ));
                        }
                        a[Mo] = o;
                    } catch (w) {
                        Te(e, e.return, w);
                    }
            }
            break;
        case 6:
            if ((At(t, e), Gt(e), r & 4)) {
                if (e.stateNode === null) throw Error(L(162));
                (a = e.stateNode), (o = e.memoizedProps);
                try {
                    a.nodeValue = o;
                } catch (w) {
                    Te(e, e.return, w);
                }
            }
            break;
        case 3:
            if (
                (At(t, e),
                Gt(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
            )
                try {
                    Co(t.containerInfo);
                } catch (w) {
                    Te(e, e.return, w);
                }
            break;
        case 4:
            At(t, e), Gt(e);
            break;
        case 13:
            At(t, e),
                Gt(e),
                (a = e.child),
                a.flags & 8192 &&
                    ((o = a.memoizedState !== null),
                    (a.stateNode.isHidden = o),
                    !o ||
                        (a.alternate !== null &&
                            a.alternate.memoizedState !== null) ||
                        (pd = Le())),
                r & 4 && lp(e);
            break;
        case 22:
            if (
                ((c = n !== null && n.memoizedState !== null),
                e.mode & 1
                    ? ((et = (u = et) || c), At(t, e), (et = u))
                    : At(t, e),
                Gt(e),
                r & 8192)
            ) {
                if (
                    ((u = e.memoizedState !== null),
                    (e.stateNode.isHidden = u) && !c && e.mode & 1)
                )
                    for (V = e, c = e.child; c !== null; ) {
                        for (d = V = c; V !== null; ) {
                            switch (((p = V), (v = p.child), p.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    mo(4, p, p.return);
                                    break;
                                case 1:
                                    aa(p, p.return);
                                    var g = p.stateNode;
                                    if (
                                        typeof g.componentWillUnmount ==
                                        "function"
                                    ) {
                                        (r = p), (n = p.return);
                                        try {
                                            (t = r),
                                                (g.props = t.memoizedProps),
                                                (g.state = t.memoizedState),
                                                g.componentWillUnmount();
                                        } catch (w) {
                                            Te(r, n, w);
                                        }
                                    }
                                    break;
                                case 5:
                                    aa(p, p.return);
                                    break;
                                case 22:
                                    if (p.memoizedState !== null) {
                                        cp(d);
                                        continue;
                                    }
                            }
                            v !== null ? ((v.return = p), (V = v)) : cp(d);
                        }
                        c = c.sibling;
                    }
                e: for (c = null, d = e; ; ) {
                    if (d.tag === 5) {
                        if (c === null) {
                            c = d;
                            try {
                                (a = d.stateNode),
                                    u
                                        ? ((o = a.style),
                                          typeof o.setProperty == "function"
                                              ? o.setProperty(
                                                    "display",
                                                    "none",
                                                    "important"
                                                )
                                              : (o.display = "none"))
                                        : ((s = d.stateNode),
                                          (l = d.memoizedProps.style),
                                          (i =
                                              l != null &&
                                              l.hasOwnProperty("display")
                                                  ? l.display
                                                  : null),
                                          (s.style.display = cm("display", i)));
                            } catch (w) {
                                Te(e, e.return, w);
                            }
                        }
                    } else if (d.tag === 6) {
                        if (c === null)
                            try {
                                d.stateNode.nodeValue = u
                                    ? ""
                                    : d.memoizedProps;
                            } catch (w) {
                                Te(e, e.return, w);
                            }
                    } else if (
                        ((d.tag !== 22 && d.tag !== 23) ||
                            d.memoizedState === null ||
                            d === e) &&
                        d.child !== null
                    ) {
                        (d.child.return = d), (d = d.child);
                        continue;
                    }
                    if (d === e) break e;
                    for (; d.sibling === null; ) {
                        if (d.return === null || d.return === e) break e;
                        c === d && (c = null), (d = d.return);
                    }
                    c === d && (c = null),
                        (d.sibling.return = d.return),
                        (d = d.sibling);
                }
            }
            break;
        case 19:
            At(t, e), Gt(e), r & 4 && lp(e);
            break;
        case 21:
            break;
        default:
            At(t, e), Gt(e);
    }
}
function Gt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Fv(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(L(160));
            }
            switch (r.tag) {
                case 5:
                    var a = r.stateNode;
                    r.flags & 32 && (Do(a, ""), (r.flags &= -33));
                    var o = sp(e);
                    nc(e, o, a);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo,
                        s = sp(e);
                    tc(e, s, i);
                    break;
                default:
                    throw Error(L(161));
            }
        } catch (l) {
            Te(e, e.return, l);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function J1(e, t, n) {
    (V = e), Yv(e);
}
function Yv(e, t, n) {
    for (var r = (e.mode & 1) !== 0; V !== null; ) {
        var a = V,
            o = a.child;
        if (a.tag === 22 && r) {
            var i = a.memoizedState !== null || ki;
            if (!i) {
                var s = a.alternate,
                    l = (s !== null && s.memoizedState !== null) || et;
                s = ki;
                var u = et;
                if (((ki = i), (et = l) && !u))
                    for (V = a; V !== null; )
                        (i = V),
                            (l = i.child),
                            i.tag === 22 && i.memoizedState !== null
                                ? dp(a)
                                : l !== null
                                ? ((l.return = i), (V = l))
                                : dp(a);
                for (; o !== null; ) (V = o), Yv(o), (o = o.sibling);
                (V = a), (ki = s), (et = u);
            }
            up(e);
        } else
            a.subtreeFlags & 8772 && o !== null
                ? ((o.return = a), (V = o))
                : up(e);
    }
}
function up(e) {
    for (; V !== null; ) {
        var t = V;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            et || Xs(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !et)
                                if (n === null) r.componentDidMount();
                                else {
                                    var a =
                                        t.elementType === t.type
                                            ? n.memoizedProps
                                            : Wt(t.type, n.memoizedProps);
                                    r.componentDidUpdate(
                                        a,
                                        n.memoizedState,
                                        r.__reactInternalSnapshotBeforeUpdate
                                    );
                                }
                            var o = t.updateQueue;
                            o !== null && $f(t, o, r);
                            break;
                        case 3:
                            var i = t.updateQueue;
                            if (i !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                $f(t, i, n);
                            }
                            break;
                        case 5:
                            var s = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = s;
                                var l = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        l.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        l.src && (n.src = l.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var u = t.alternate;
                                if (u !== null) {
                                    var c = u.memoizedState;
                                    if (c !== null) {
                                        var d = c.dehydrated;
                                        d !== null && Co(d);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(L(163));
                    }
                et || (t.flags & 512 && ec(t));
            } catch (p) {
                Te(t, t.return, p);
            }
        }
        if (t === e) {
            V = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (V = n);
            break;
        }
        V = t.return;
    }
}
function cp(e) {
    for (; V !== null; ) {
        var t = V;
        if (t === e) {
            V = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (V = n);
            break;
        }
        V = t.return;
    }
}
function dp(e) {
    for (; V !== null; ) {
        var t = V;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Xs(4, t);
                    } catch (l) {
                        Te(t, n, l);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var a = t.return;
                        try {
                            r.componentDidMount();
                        } catch (l) {
                            Te(t, a, l);
                        }
                    }
                    var o = t.return;
                    try {
                        ec(t);
                    } catch (l) {
                        Te(t, o, l);
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        ec(t);
                    } catch (l) {
                        Te(t, i, l);
                    }
            }
        } catch (l) {
            Te(t, t.return, l);
        }
        if (t === e) {
            V = null;
            break;
        }
        var s = t.sibling;
        if (s !== null) {
            (s.return = t.return), (V = s);
            break;
        }
        V = t.return;
    }
}
var Z1 = Math.ceil,
    vs = bn.ReactCurrentDispatcher,
    dd = bn.ReactCurrentOwner,
    Ot = bn.ReactCurrentBatchConfig,
    ue = 0,
    Ve = null,
    Ae = null,
    Xe = 0,
    gt = 0,
    oa = lr(0),
    Ye = 0,
    Io = null,
    Rr = 0,
    Gs = 0,
    fd = 0,
    vo = null,
    ct = null,
    pd = 0,
    Ea = 1 / 0,
    pn = null,
    gs = !1,
    rc = null,
    Xn = null,
    Si = !1,
    zn = null,
    ys = 0,
    go = 0,
    ac = null,
    Ui = -1,
    zi = 0;
function st() {
    return ue & 6 ? Le() : Ui !== -1 ? Ui : (Ui = Le());
}
function Gn(e) {
    return e.mode & 1
        ? ue & 2 && Xe !== 0
            ? Xe & -Xe
            : I1.transition !== null
            ? (zi === 0 && (zi = Sm()), zi)
            : ((e = ve),
              e !== 0 ||
                  ((e = window.event), (e = e === void 0 ? 16 : Mm(e.type))),
              e)
        : 1;
}
function Bt(e, t, n, r) {
    if (50 < go) throw ((go = 0), (ac = null), Error(L(185)));
    Ho(e, n, r),
        (!(ue & 2) || e !== Ve) &&
            (e === Ve && (!(ue & 2) && (Gs |= n), Ye === 4 && Yn(e, Xe)),
            ht(e, r),
            n === 1 &&
                ue === 0 &&
                !(t.mode & 1) &&
                ((Ea = Le() + 500), Qs && ur()));
}
function ht(e, t) {
    var n = e.callbackNode;
    I0(e, t);
    var r = ts(e, e === Ve ? Xe : 0);
    if (r === 0)
        n !== null && xf(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && xf(n), t === 1))
            e.tag === 0 ? j1(fp.bind(null, e)) : qm(fp.bind(null, e)),
                T1(function () {
                    !(ue & 6) && ur();
                }),
                (n = null);
        else {
            switch (Em(r)) {
                case 1:
                    n = Wc;
                    break;
                case 4:
                    n = Dm;
                    break;
                case 16:
                    n = es;
                    break;
                case 536870912:
                    n = km;
                    break;
                default:
                    n = es;
            }
            n = Kv(n, Uv.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function Uv(e, t) {
    if (((Ui = -1), (zi = 0), ue & 6)) throw Error(L(327));
    var n = e.callbackNode;
    if (pa() && e.callbackNode !== n) return null;
    var r = ts(e, e === Ve ? Xe : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ws(e, r);
    else {
        t = r;
        var a = ue;
        ue |= 2;
        var o = Hv();
        (Ve !== e || Xe !== t) && ((pn = null), (Ea = Le() + 500), Sr(e, t));
        do
            try {
                nw();
                break;
            } catch (s) {
                zv(e, s);
            }
        while (!0);
        Jc(),
            (vs.current = o),
            (ue = a),
            Ae !== null ? (t = 0) : ((Ve = null), (Xe = 0), (t = Ye));
    }
    if (t !== 0) {
        if (
            (t === 2 && ((a = Tu(e)), a !== 0 && ((r = a), (t = oc(e, a)))),
            t === 1)
        )
            throw ((n = Io), Sr(e, 0), Yn(e, r), ht(e, Le()), n);
        if (t === 6) Yn(e, r);
        else {
            if (
                ((a = e.current.alternate),
                !(r & 30) &&
                    !ew(a) &&
                    ((t = ws(e, r)),
                    t === 2 &&
                        ((o = Tu(e)), o !== 0 && ((r = o), (t = oc(e, o)))),
                    t === 1))
            )
                throw ((n = Io), Sr(e, 0), Yn(e, r), ht(e, Le()), n);
            switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(L(345));
                case 2:
                    mr(e, ct, pn);
                    break;
                case 3:
                    if (
                        (Yn(e, r),
                        (r & 130023424) === r &&
                            ((t = pd + 500 - Le()), 10 < t))
                    ) {
                        if (ts(e, 0) !== 0) break;
                        if (((a = e.suspendedLanes), (a & r) !== r)) {
                            st(), (e.pingedLanes |= e.suspendedLanes & a);
                            break;
                        }
                        e.timeoutHandle = Wu(mr.bind(null, e, ct, pn), t);
                        break;
                    }
                    mr(e, ct, pn);
                    break;
                case 4:
                    if ((Yn(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, a = -1; 0 < r; ) {
                        var i = 31 - Ht(r);
                        (o = 1 << i), (i = t[i]), i > a && (a = i), (r &= ~o);
                    }
                    if (
                        ((r = a),
                        (r = Le() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                ? 480
                                : 1080 > r
                                ? 1080
                                : 1920 > r
                                ? 1920
                                : 3e3 > r
                                ? 3e3
                                : 4320 > r
                                ? 4320
                                : 1960 * Z1(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = Wu(mr.bind(null, e, ct, pn), r);
                        break;
                    }
                    mr(e, ct, pn);
                    break;
                case 5:
                    mr(e, ct, pn);
                    break;
                default:
                    throw Error(L(329));
            }
        }
    }
    return ht(e, Le()), e.callbackNode === n ? Uv.bind(null, e) : null;
}
function oc(e, t) {
    var n = vo;
    return (
        e.current.memoizedState.isDehydrated && (Sr(e, t).flags |= 256),
        (e = ws(e, t)),
        e !== 2 && ((t = ct), (ct = n), t !== null && ic(t)),
        e
    );
}
function ic(e) {
    ct === null ? (ct = e) : ct.push.apply(ct, e);
}
function ew(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var a = n[r],
                        o = a.getSnapshot;
                    a = a.value;
                    try {
                        if (!$t(o(), a)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
            (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function Yn(e, t) {
    for (
        t &= ~fd,
            t &= ~Gs,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
        0 < t;

    ) {
        var n = 31 - Ht(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function fp(e) {
    if (ue & 6) throw Error(L(327));
    pa();
    var t = ts(e, 0);
    if (!(t & 1)) return ht(e, Le()), null;
    var n = ws(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Tu(e);
        r !== 0 && ((t = r), (n = oc(e, r)));
    }
    if (n === 1) throw ((n = Io), Sr(e, 0), Yn(e, t), ht(e, Le()), n);
    if (n === 6) throw Error(L(345));
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        mr(e, ct, pn),
        ht(e, Le()),
        null
    );
}
function hd(e, t) {
    var n = ue;
    ue |= 1;
    try {
        return e(t);
    } finally {
        (ue = n), ue === 0 && ((Ea = Le() + 500), Qs && ur());
    }
}
function Or(e) {
    zn !== null && zn.tag === 0 && !(ue & 6) && pa();
    var t = ue;
    ue |= 1;
    var n = Ot.transition,
        r = ve;
    try {
        if (((Ot.transition = null), (ve = 1), e)) return e();
    } finally {
        (ve = r), (Ot.transition = n), (ue = t), !(ue & 6) && ur();
    }
}
function md() {
    (gt = oa.current), ke(oa);
}
function Sr(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), M1(n)), Ae !== null))
        for (n = Ae.return; n !== null; ) {
            var r = n;
            switch ((qc(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && is();
                    break;
                case 3:
                    ka(), ke(ft), ke(tt), ad();
                    break;
                case 5:
                    rd(r);
                    break;
                case 4:
                    ka();
                    break;
                case 13:
                    ke(_e);
                    break;
                case 19:
                    ke(_e);
                    break;
                case 10:
                    Zc(r.type._context);
                    break;
                case 22:
                case 23:
                    md();
            }
            n = n.return;
        }
    if (
        ((Ve = e),
        (Ae = e = Jn(e.current, null)),
        (Xe = gt = t),
        (Ye = 0),
        (Io = null),
        (fd = Gs = Rr = 0),
        (ct = vo = null),
        yr !== null)
    ) {
        for (t = 0; t < yr.length; t++)
            if (((n = yr[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var a = r.next,
                    o = n.pending;
                if (o !== null) {
                    var i = o.next;
                    (o.next = a), (r.next = i);
                }
                n.pending = r;
            }
        yr = null;
    }
    return e;
}
function zv(e, t) {
    do {
        var n = Ae;
        try {
            if ((Jc(), (Ai.current = ms), hs)) {
                for (var r = Ne.memoizedState; r !== null; ) {
                    var a = r.queue;
                    a !== null && (a.pending = null), (r = r.next);
                }
                hs = !1;
            }
            if (
                ((Tr = 0),
                (He = We = Ne = null),
                (ho = !1),
                (Oo = 0),
                (dd.current = null),
                n === null || n.return === null)
            ) {
                (Ye = 1), (Io = t), (Ae = null);
                break;
            }
            e: {
                var o = e,
                    i = n.return,
                    s = n,
                    l = t;
                if (
                    ((t = Xe),
                    (s.flags |= 32768),
                    l !== null &&
                        typeof l == "object" &&
                        typeof l.then == "function")
                ) {
                    var u = l,
                        c = s,
                        d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var p = c.alternate;
                        p
                            ? ((c.updateQueue = p.updateQueue),
                              (c.memoizedState = p.memoizedState),
                              (c.lanes = p.lanes))
                            : ((c.updateQueue = null),
                              (c.memoizedState = null));
                    }
                    var v = Zf(i);
                    if (v !== null) {
                        (v.flags &= -257),
                            ep(v, i, s, o, t),
                            v.mode & 1 && Jf(o, u, t),
                            (t = v),
                            (l = u);
                        var g = t.updateQueue;
                        if (g === null) {
                            var w = new Set();
                            w.add(l), (t.updateQueue = w);
                        } else g.add(l);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            Jf(o, u, t), vd();
                            break e;
                        }
                        l = Error(L(426));
                    }
                } else if (Ce && s.mode & 1) {
                    var k = Zf(i);
                    if (k !== null) {
                        !(k.flags & 65536) && (k.flags |= 256),
                            ep(k, i, s, o, t),
                            Xc(Sa(l, s));
                        break e;
                    }
                }
                (o = l = Sa(l, s)),
                    Ye !== 4 && (Ye = 2),
                    vo === null ? (vo = [o]) : vo.push(o),
                    (o = i);
                do {
                    switch (o.tag) {
                        case 3:
                            (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                            var h = Cv(o, l, t);
                            Vf(o, h);
                            break e;
                        case 1:
                            s = l;
                            var m = o.type,
                                y = o.stateNode;
                            if (
                                !(o.flags & 128) &&
                                (typeof m.getDerivedStateFromError ==
                                    "function" ||
                                    (y !== null &&
                                        typeof y.componentDidCatch ==
                                            "function" &&
                                        (Xn === null || !Xn.has(y))))
                            ) {
                                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                                var C = _v(o, s, t);
                                Vf(o, C);
                                break e;
                            }
                    }
                    o = o.return;
                } while (o !== null);
            }
            Vv(n);
        } catch (P) {
            (t = P), Ae === n && n !== null && (Ae = n = n.return);
            continue;
        }
        break;
    } while (!0);
}
function Hv() {
    var e = vs.current;
    return (vs.current = ms), e === null ? ms : e;
}
function vd() {
    (Ye === 0 || Ye === 3 || Ye === 2) && (Ye = 4),
        Ve === null || (!(Rr & 268435455) && !(Gs & 268435455)) || Yn(Ve, Xe);
}
function ws(e, t) {
    var n = ue;
    ue |= 2;
    var r = Hv();
    (Ve !== e || Xe !== t) && ((pn = null), Sr(e, t));
    do
        try {
            tw();
            break;
        } catch (a) {
            zv(e, a);
        }
    while (!0);
    if ((Jc(), (ue = n), (vs.current = r), Ae !== null)) throw Error(L(261));
    return (Ve = null), (Xe = 0), Ye;
}
function tw() {
    for (; Ae !== null; ) Bv(Ae);
}
function nw() {
    for (; Ae !== null && !b0(); ) Bv(Ae);
}
function Bv(e) {
    var t = Qv(e.alternate, e, gt);
    (e.memoizedProps = e.pendingProps),
        t === null ? Vv(e) : (Ae = t),
        (dd.current = null);
}
function Vv(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = q1(n, t)), n !== null)) {
                (n.flags &= 32767), (Ae = n);
                return;
            }
            if (e !== null)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (Ye = 6), (Ae = null);
                return;
            }
        } else if (((n = K1(n, t, gt)), n !== null)) {
            Ae = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            Ae = t;
            return;
        }
        Ae = t = e;
    } while (t !== null);
    Ye === 0 && (Ye = 5);
}
function mr(e, t, n) {
    var r = ve,
        a = Ot.transition;
    try {
        (Ot.transition = null), (ve = 1), rw(e, t, n, r);
    } finally {
        (Ot.transition = a), (ve = r);
    }
    return null;
}
function rw(e, t, n, r) {
    do pa();
    while (zn !== null);
    if (ue & 6) throw Error(L(327));
    n = e.finishedWork;
    var a = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(L(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
        (F0(e, o),
        e === Ve && ((Ae = Ve = null), (Xe = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            Si ||
            ((Si = !0),
            Kv(es, function () {
                return pa(), null;
            })),
        (o = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || o)
    ) {
        (o = Ot.transition), (Ot.transition = null);
        var i = ve;
        ve = 1;
        var s = ue;
        (ue |= 4),
            (dd.current = null),
            G1(e, n),
            Wv(n, e),
            S1(Fu),
            (ns = !!Iu),
            (Fu = Iu = null),
            (e.current = n),
            J1(n),
            N0(),
            (ue = s),
            (ve = i),
            (Ot.transition = o);
    } else e.current = n;
    if (
        (Si && ((Si = !1), (zn = e), (ys = a)),
        (o = e.pendingLanes),
        o === 0 && (Xn = null),
        T0(n.stateNode),
        ht(e, Le()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (a = t[n]),
                r(a.value, { componentStack: a.stack, digest: a.digest });
    if (gs) throw ((gs = !1), (e = rc), (rc = null), e);
    return (
        ys & 1 && e.tag !== 0 && pa(),
        (o = e.pendingLanes),
        o & 1 ? (e === ac ? go++ : ((go = 0), (ac = e))) : (go = 0),
        ur(),
        null
    );
}
function pa() {
    if (zn !== null) {
        var e = Em(ys),
            t = Ot.transition,
            n = ve;
        try {
            if (((Ot.transition = null), (ve = 16 > e ? 16 : e), zn === null))
                var r = !1;
            else {
                if (((e = zn), (zn = null), (ys = 0), ue & 6))
                    throw Error(L(331));
                var a = ue;
                for (ue |= 4, V = e.current; V !== null; ) {
                    var o = V,
                        i = o.child;
                    if (V.flags & 16) {
                        var s = o.deletions;
                        if (s !== null) {
                            for (var l = 0; l < s.length; l++) {
                                var u = s[l];
                                for (V = u; V !== null; ) {
                                    var c = V;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            mo(8, c, o);
                                    }
                                    var d = c.child;
                                    if (d !== null) (d.return = c), (V = d);
                                    else
                                        for (; V !== null; ) {
                                            c = V;
                                            var p = c.sibling,
                                                v = c.return;
                                            if ((Iv(c), c === u)) {
                                                V = null;
                                                break;
                                            }
                                            if (p !== null) {
                                                (p.return = v), (V = p);
                                                break;
                                            }
                                            V = v;
                                        }
                                }
                            }
                            var g = o.alternate;
                            if (g !== null) {
                                var w = g.child;
                                if (w !== null) {
                                    g.child = null;
                                    do {
                                        var k = w.sibling;
                                        (w.sibling = null), (w = k);
                                    } while (w !== null);
                                }
                            }
                            V = o;
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null)
                        (i.return = o), (V = i);
                    else
                        e: for (; V !== null; ) {
                            if (((o = V), o.flags & 2048))
                                switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        mo(9, o, o.return);
                                }
                            var h = o.sibling;
                            if (h !== null) {
                                (h.return = o.return), (V = h);
                                break e;
                            }
                            V = o.return;
                        }
                }
                var m = e.current;
                for (V = m; V !== null; ) {
                    i = V;
                    var y = i.child;
                    if (i.subtreeFlags & 2064 && y !== null)
                        (y.return = i), (V = y);
                    else
                        e: for (i = m; V !== null; ) {
                            if (((s = V), s.flags & 2048))
                                try {
                                    switch (s.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Xs(9, s);
                                    }
                                } catch (P) {
                                    Te(s, s.return, P);
                                }
                            if (s === i) {
                                V = null;
                                break e;
                            }
                            var C = s.sibling;
                            if (C !== null) {
                                (C.return = s.return), (V = C);
                                break e;
                            }
                            V = s.return;
                        }
                }
                if (
                    ((ue = a),
                    ur(),
                    ln && typeof ln.onPostCommitFiberRoot == "function")
                )
                    try {
                        ln.onPostCommitFiberRoot(zs, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (ve = n), (Ot.transition = t);
        }
    }
    return !1;
}
function pp(e, t, n) {
    (t = Sa(n, t)),
        (t = Cv(e, t, 1)),
        (e = qn(e, t, 1)),
        (t = st()),
        e !== null && (Ho(e, 1, t), ht(e, t));
}
function Te(e, t, n) {
    if (e.tag === 3) pp(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                pp(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" &&
                        (Xn === null || !Xn.has(r)))
                ) {
                    (e = Sa(n, e)),
                        (e = _v(t, e, 1)),
                        (t = qn(t, e, 1)),
                        (e = st()),
                        t !== null && (Ho(t, 1, e), ht(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function aw(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = st()),
        (e.pingedLanes |= e.suspendedLanes & n),
        Ve === e &&
            (Xe & n) === n &&
            (Ye === 4 ||
            (Ye === 3 && (Xe & 130023424) === Xe && 500 > Le() - pd)
                ? Sr(e, 0)
                : (fd |= n)),
        ht(e, t);
}
function $v(e, t) {
    t === 0 &&
        (e.mode & 1
            ? ((t = pi), (pi <<= 1), !(pi & 130023424) && (pi = 4194304))
            : (t = 1));
    var n = st();
    (e = En(e, t)), e !== null && (Ho(e, t, n), ht(e, n));
}
function ow(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), $v(e, n);
}
function iw(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                a = e.memoizedState;
            a !== null && (n = a.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(L(314));
    }
    r !== null && r.delete(t), $v(e, n);
}
var Qv;
Qv = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || ft.current) dt = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return (dt = !1), Q1(e, t, n);
            dt = !!(e.flags & 131072);
        }
    else (dt = !1), Ce && t.flags & 1048576 && Xm(t, us, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            Yi(e, t), (e = t.pendingProps);
            var a = wa(t, tt.current);
            fa(t, n), (a = id(null, t, r, e, a, n));
            var o = sd();
            return (
                (t.flags |= 1),
                typeof a == "object" &&
                a !== null &&
                typeof a.render == "function" &&
                a.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      pt(r) ? ((o = !0), ss(t)) : (o = !1),
                      (t.memoizedState =
                          a.state !== null && a.state !== void 0
                              ? a.state
                              : null),
                      td(t),
                      (a.updater = Ks),
                      (t.stateNode = a),
                      (a._reactInternals = t),
                      $u(t, r, e, n),
                      (t = qu(null, t, r, !0, o, n)))
                    : ((t.tag = 0),
                      Ce && o && Kc(t),
                      at(null, t, a, n),
                      (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (Yi(e, t),
                    (e = t.pendingProps),
                    (a = r._init),
                    (r = a(r._payload)),
                    (t.type = r),
                    (a = t.tag = lw(r)),
                    (e = Wt(r, e)),
                    a)
                ) {
                    case 0:
                        t = Ku(null, t, r, e, n);
                        break e;
                    case 1:
                        t = rp(null, t, r, e, n);
                        break e;
                    case 11:
                        t = tp(null, t, r, e, n);
                        break e;
                    case 14:
                        t = np(null, t, r, Wt(r.type, e), n);
                        break e;
                }
                throw Error(L(306, r, ""));
            }
            return t;
        case 0:
            return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : Wt(r, a)),
                Ku(e, t, r, a, n)
            );
        case 1:
            return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : Wt(r, a)),
                rp(e, t, r, a, n)
            );
        case 3:
            e: {
                if ((Mv(t), e === null)) throw Error(L(387));
                (r = t.pendingProps),
                    (o = t.memoizedState),
                    (a = o.element),
                    ev(e, t),
                    fs(t, r, null, n);
                var i = t.memoizedState;
                if (((r = i.element), o.isDehydrated))
                    if (
                        ((o = {
                            element: r,
                            isDehydrated: !1,
                            cache: i.cache,
                            pendingSuspenseBoundaries:
                                i.pendingSuspenseBoundaries,
                            transitions: i.transitions,
                        }),
                        (t.updateQueue.baseState = o),
                        (t.memoizedState = o),
                        t.flags & 256)
                    ) {
                        (a = Sa(Error(L(423)), t)), (t = ap(e, t, r, n, a));
                        break e;
                    } else if (r !== a) {
                        (a = Sa(Error(L(424)), t)), (t = ap(e, t, r, n, a));
                        break e;
                    } else
                        for (
                            wt = Kn(t.stateNode.containerInfo.firstChild),
                                Dt = t,
                                Ce = !0,
                                zt = null,
                                n = av(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((xa(), r === a)) {
                        t = Cn(e, t, n);
                        break e;
                    }
                    at(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                ov(t),
                e === null && Hu(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = e !== null ? e.memoizedProps : null),
                (i = a.children),
                Au(r, a)
                    ? (i = null)
                    : o !== null && Au(r, o) && (t.flags |= 32),
                Pv(e, t),
                at(e, t, i, n),
                t.child
            );
        case 6:
            return e === null && Hu(t), null;
        case 13:
            return Tv(e, t, n);
        case 4:
            return (
                nd(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                e === null ? (t.child = Da(t, null, r, n)) : at(e, t, r, n),
                t.child
            );
        case 11:
            return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : Wt(r, a)),
                tp(e, t, r, a, n)
            );
        case 7:
            return at(e, t, t.pendingProps, n), t.child;
        case 8:
            return at(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return at(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (a = t.pendingProps),
                    (o = t.memoizedProps),
                    (i = a.value),
                    we(cs, r._currentValue),
                    (r._currentValue = i),
                    o !== null)
                )
                    if ($t(o.value, i)) {
                        if (o.children === a.children && !ft.current) {
                            t = Cn(e, t, n);
                            break e;
                        }
                    } else
                        for (
                            o = t.child, o !== null && (o.return = t);
                            o !== null;

                        ) {
                            var s = o.dependencies;
                            if (s !== null) {
                                i = o.child;
                                for (var l = s.firstContext; l !== null; ) {
                                    if (l.context === r) {
                                        if (o.tag === 1) {
                                            (l = yn(-1, n & -n)), (l.tag = 2);
                                            var u = o.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null
                                                    ? (l.next = l)
                                                    : ((l.next = c.next),
                                                      (c.next = l)),
                                                    (u.pending = l);
                                            }
                                        }
                                        (o.lanes |= n),
                                            (l = o.alternate),
                                            l !== null && (l.lanes |= n),
                                            Bu(o.return, n, t),
                                            (s.lanes |= n);
                                        break;
                                    }
                                    l = l.next;
                                }
                            } else if (o.tag === 10)
                                i = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (((i = o.return), i === null))
                                    throw Error(L(341));
                                (i.lanes |= n),
                                    (s = i.alternate),
                                    s !== null && (s.lanes |= n),
                                    Bu(i, n, t),
                                    (i = o.sibling);
                            } else i = o.child;
                            if (i !== null) i.return = o;
                            else
                                for (i = o; i !== null; ) {
                                    if (i === t) {
                                        i = null;
                                        break;
                                    }
                                    if (((o = i.sibling), o !== null)) {
                                        (o.return = i.return), (i = o);
                                        break;
                                    }
                                    i = i.return;
                                }
                            o = i;
                        }
                at(e, t, a.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (a = t.type),
                (r = t.pendingProps.children),
                fa(t, n),
                (a = jt(a)),
                (r = r(a)),
                (t.flags |= 1),
                at(e, t, r, n),
                t.child
            );
        case 14:
            return (
                (r = t.type),
                (a = Wt(r, t.pendingProps)),
                (a = Wt(r.type, a)),
                np(e, t, r, a, n)
            );
        case 15:
            return bv(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : Wt(r, a)),
                Yi(e, t),
                (t.tag = 1),
                pt(r) ? ((e = !0), ss(t)) : (e = !1),
                fa(t, n),
                nv(t, r, a),
                $u(t, r, a, n),
                qu(null, t, r, !0, e, n)
            );
        case 19:
            return Rv(e, t, n);
        case 22:
            return Nv(e, t, n);
    }
    throw Error(L(156, t.tag));
};
function Kv(e, t) {
    return xm(e, t);
}
function sw(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
                null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
                null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function Rt(e, t, n, r) {
    return new sw(e, t, n, r);
}
function gd(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function lw(e) {
    if (typeof e == "function") return gd(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === Ic)) return 11;
        if (e === Fc) return 14;
    }
    return 2;
}
function Jn(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = Rt(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
            t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function Hi(e, t, n, r, a, o) {
    var i = 2;
    if (((r = e), typeof e == "function")) gd(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
        e: switch (e) {
            case qr:
                return Er(n.children, a, o, t);
            case jc:
                (i = 8), (a |= 8);
                break;
            case vu:
                return (
                    (e = Rt(12, n, t, a | 2)),
                    (e.elementType = vu),
                    (e.lanes = o),
                    e
                );
            case gu:
                return (
                    (e = Rt(13, n, t, a)),
                    (e.elementType = gu),
                    (e.lanes = o),
                    e
                );
            case yu:
                return (
                    (e = Rt(19, n, t, a)),
                    (e.elementType = yu),
                    (e.lanes = o),
                    e
                );
            case rm:
                return Js(n, a, o, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case tm:
                            i = 10;
                            break e;
                        case nm:
                            i = 9;
                            break e;
                        case Ic:
                            i = 11;
                            break e;
                        case Fc:
                            i = 14;
                            break e;
                        case Fn:
                            (i = 16), (r = null);
                            break e;
                    }
                throw Error(L(130, e == null ? e : typeof e, ""));
        }
    return (
        (t = Rt(i, n, t, a)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
    );
}
function Er(e, t, n, r) {
    return (e = Rt(7, e, r, t)), (e.lanes = n), e;
}
function Js(e, t, n, r) {
    return (
        (e = Rt(22, e, r, t)),
        (e.elementType = rm),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
    );
}
function Gl(e, t, n) {
    return (e = Rt(6, e, null, t)), (e.lanes = n), e;
}
function Jl(e, t, n) {
    return (
        (t = Rt(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        t
    );
}
function uw(e, t, n, r, a) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
                null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Rl(0)),
        (this.expirationTimes = Rl(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = Rl(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = a),
        (this.mutableSourceEagerHydrationData = null);
}
function yd(e, t, n, r, a, o, i, s, l) {
    return (
        (e = new uw(e, t, n, s, l)),
        t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
        (o = Rt(3, null, null, t)),
        (e.current = o),
        (o.stateNode = e),
        (o.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        td(o),
        e
    );
}
function cw(e, t, n) {
    var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Kr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n,
    };
}
function qv(e) {
    if (!e) return rr;
    e = e._reactInternals;
    e: {
        if (Wr(e) !== e || e.tag !== 1) throw Error(L(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (pt(t.type)) {
                        t =
                            t.stateNode
                                .__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(L(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (pt(n)) return Km(e, n, t);
    }
    return t;
}
function Xv(e, t, n, r, a, o, i, s, l) {
    return (
        (e = yd(n, r, !0, e, a, o, i, s, l)),
        (e.context = qv(null)),
        (n = e.current),
        (r = st()),
        (a = Gn(n)),
        (o = yn(r, a)),
        (o.callback = t ?? null),
        qn(n, o, a),
        (e.current.lanes = a),
        Ho(e, a, r),
        ht(e, r),
        e
    );
}
function Zs(e, t, n, r) {
    var a = t.current,
        o = st(),
        i = Gn(a);
    return (
        (n = qv(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = yn(o, i)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = qn(a, t, i)),
        e !== null && (Bt(e, a, i, o), Fi(e, a, i)),
        i
    );
}
function xs(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function hp(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function wd(e, t) {
    hp(e, t), (e = e.alternate) && hp(e, t);
}
function dw() {
    return null;
}
var Gv =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function xd(e) {
    this._internalRoot = e;
}
el.prototype.render = xd.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(L(409));
    Zs(e, t, null, null);
};
el.prototype.unmount = xd.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Or(function () {
            Zs(null, e, null, null);
        }),
            (t[Sn] = null);
    }
};
function el(e) {
    this._internalRoot = e;
}
el.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = bm();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Wn.length && t !== 0 && t < Wn[n].priority; n++);
        Wn.splice(n, 0, e), n === 0 && Pm(e);
    }
};
function Dd(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function tl(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 ||
                e.nodeValue !== " react-mount-point-unstable "))
    );
}
function mp() {}
function fw(e, t, n, r, a) {
    if (a) {
        if (typeof r == "function") {
            var o = r;
            r = function () {
                var u = xs(i);
                o.call(u);
            };
        }
        var i = Xv(t, r, e, 0, null, !1, !1, "", mp);
        return (
            (e._reactRootContainer = i),
            (e[Sn] = i.current),
            No(e.nodeType === 8 ? e.parentNode : e),
            Or(),
            i
        );
    }
    for (; (a = e.lastChild); ) e.removeChild(a);
    if (typeof r == "function") {
        var s = r;
        r = function () {
            var u = xs(l);
            s.call(u);
        };
    }
    var l = yd(e, 0, !1, null, null, !1, !1, "", mp);
    return (
        (e._reactRootContainer = l),
        (e[Sn] = l.current),
        No(e.nodeType === 8 ? e.parentNode : e),
        Or(function () {
            Zs(t, l, n, r);
        }),
        l
    );
}
function nl(e, t, n, r, a) {
    var o = n._reactRootContainer;
    if (o) {
        var i = o;
        if (typeof a == "function") {
            var s = a;
            a = function () {
                var l = xs(i);
                s.call(l);
            };
        }
        Zs(t, i, e, a);
    } else i = fw(n, t, e, a, r);
    return xs(i);
}
Cm = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = ao(t.pendingLanes);
                n !== 0 &&
                    (Yc(t, n | 1),
                    ht(t, Le()),
                    !(ue & 6) && ((Ea = Le() + 500), ur()));
            }
            break;
        case 13:
            Or(function () {
                var r = En(e, 1);
                if (r !== null) {
                    var a = st();
                    Bt(r, e, 1, a);
                }
            }),
                wd(e, 1);
    }
};
Uc = function (e) {
    if (e.tag === 13) {
        var t = En(e, 134217728);
        if (t !== null) {
            var n = st();
            Bt(t, e, 134217728, n);
        }
        wd(e, 134217728);
    }
};
_m = function (e) {
    if (e.tag === 13) {
        var t = Gn(e),
            n = En(e, t);
        if (n !== null) {
            var r = st();
            Bt(n, e, t, r);
        }
        wd(e, t);
    }
};
bm = function () {
    return ve;
};
Nm = function (e, t) {
    var n = ve;
    try {
        return (ve = e), t();
    } finally {
        ve = n;
    }
};
Nu = function (e, t, n) {
    switch (t) {
        case "input":
            if ((Du(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll(
                        "input[name=" +
                            JSON.stringify("" + t) +
                            '][type="radio"]'
                    ),
                        t = 0;
                    t < n.length;
                    t++
                ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var a = $s(r);
                        if (!a) throw Error(L(90));
                        om(r), Du(r, a);
                    }
                }
            }
            break;
        case "textarea":
            sm(e, n);
            break;
        case "select":
            (t = n.value), t != null && la(e, !!n.multiple, t, !1);
    }
};
hm = hd;
mm = Or;
var pw = { usingClientEntryPoint: !1, Events: [Vo, Zr, $s, fm, pm, hd] },
    Qa = {
        findFiberByHostInstance: gr,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom",
    },
    hw = {
        bundleType: Qa.bundleType,
        version: Qa.version,
        rendererPackageName: Qa.rendererPackageName,
        rendererConfig: Qa.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: bn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = ym(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Qa.findFiberByHostInstance || dw,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ei = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ei.isDisabled && Ei.supportsFiber)
        try {
            (zs = Ei.inject(hw)), (ln = Ei);
        } catch {}
}
Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pw;
Ct.createPortal = function (e, t) {
    var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Dd(t)) throw Error(L(200));
    return cw(e, t, null, n);
};
Ct.createRoot = function (e, t) {
    if (!Dd(e)) throw Error(L(299));
    var n = !1,
        r = "",
        a = Gv;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
        (t = yd(e, 1, !1, null, null, n, !1, r, a)),
        (e[Sn] = t.current),
        No(e.nodeType === 8 ? e.parentNode : e),
        new xd(t)
    );
};
Ct.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function"
            ? Error(L(188))
            : ((e = Object.keys(e).join(",")), Error(L(268, e)));
    return (e = ym(t)), (e = e === null ? null : e.stateNode), e;
};
Ct.flushSync = function (e) {
    return Or(e);
};
Ct.hydrate = function (e, t, n) {
    if (!tl(t)) throw Error(L(200));
    return nl(null, e, t, !0, n);
};
Ct.hydrateRoot = function (e, t, n) {
    if (!Dd(e)) throw Error(L(405));
    var r = (n != null && n.hydratedSources) || null,
        a = !1,
        o = "",
        i = Gv;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (a = !0),
            n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = Xv(t, null, e, 1, n ?? null, a, !1, o, i)),
        (e[Sn] = t.current),
        No(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (a = n._getVersion),
                (a = a(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
    return new el(t);
};
Ct.render = function (e, t, n) {
    if (!tl(t)) throw Error(L(200));
    return nl(null, e, t, !1, n);
};
Ct.unmountComponentAtNode = function (e) {
    if (!tl(e)) throw Error(L(40));
    return e._reactRootContainer
        ? (Or(function () {
              nl(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[Sn] = null);
              });
          }),
          !0)
        : !1;
};
Ct.unstable_batchedUpdates = hd;
Ct.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!tl(n)) throw Error(L(200));
    if (e == null || e._reactInternals === void 0) throw Error(L(38));
    return nl(e, t, n, !1, r);
};
Ct.version = "18.2.0-next-9e3b772b8-20220608";
function Jv() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jv);
        } catch (e) {
            console.error(e);
        }
}
Jv(), (Xh.exports = Ct);
var Qo = Xh.exports;
const Zv = Ah(Qo),
    mw = Fh({ __proto__: null, default: Zv }, [Qo]);
var vp = Qo;
(hu.createRoot = vp.createRoot), (hu.hydrateRoot = vp.hydrateRoot);
/**
 * @remix-run/router v1.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Re() {
    return (
        (Re = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                  }
                  return e;
              }),
        Re.apply(this, arguments)
    );
}
var Fe;
(function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Fe || (Fe = {}));
const gp = "popstate";
function vw(e) {
    e === void 0 && (e = {});
    function t(r, a) {
        let { pathname: o, search: i, hash: s } = r.location;
        return Fo(
            "",
            { pathname: o, search: i, hash: s },
            (a.state && a.state.usr) || null,
            (a.state && a.state.key) || "default"
        );
    }
    function n(r, a) {
        return typeof a == "string" ? a : Ko(a);
    }
    return yw(t, n, null, e);
}
function ie(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Ca(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t);
        } catch {}
    }
}
function gw() {
    return Math.random().toString(36).substr(2, 8);
}
function yp(e, t) {
    return { usr: e.state, key: e.key, idx: t };
}
function Fo(e, t, n, r) {
    return (
        n === void 0 && (n = null),
        Re(
            {
                pathname: typeof e == "string" ? e : e.pathname,
                search: "",
                hash: "",
            },
            typeof t == "string" ? cr(t) : t,
            { state: n, key: (t && t.key) || r || gw() }
        )
    );
}
function Ko(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
        n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
        r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
        t
    );
}
function cr(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
        let r = e.indexOf("?");
        r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
    }
    return t;
}
function yw(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: a = document.defaultView, v5Compat: o = !1 } = r,
        i = a.history,
        s = Fe.Pop,
        l = null,
        u = c();
    u == null && ((u = 0), i.replaceState(Re({}, i.state, { idx: u }), ""));
    function c() {
        return (i.state || { idx: null }).idx;
    }
    function d() {
        s = Fe.Pop;
        let k = c(),
            h = k == null ? null : k - u;
        (u = k), l && l({ action: s, location: w.location, delta: h });
    }
    function p(k, h) {
        s = Fe.Push;
        let m = Fo(w.location, k, h);
        u = c() + 1;
        let y = yp(m, u),
            C = w.createHref(m);
        try {
            i.pushState(y, "", C);
        } catch (P) {
            if (P instanceof DOMException && P.name === "DataCloneError")
                throw P;
            a.location.assign(C);
        }
        o && l && l({ action: s, location: w.location, delta: 1 });
    }
    function v(k, h) {
        s = Fe.Replace;
        let m = Fo(w.location, k, h);
        u = c();
        let y = yp(m, u),
            C = w.createHref(m);
        i.replaceState(y, "", C),
            o && l && l({ action: s, location: w.location, delta: 0 });
    }
    function g(k) {
        let h =
                a.location.origin !== "null"
                    ? a.location.origin
                    : a.location.href,
            m = typeof k == "string" ? k : Ko(k);
        return (
            (m = m.replace(/ $/, "%20")),
            ie(
                h,
                "No window.location.(origin|href) available to create URL for href: " +
                    m
            ),
            new URL(m, h)
        );
    }
    let w = {
        get action() {
            return s;
        },
        get location() {
            return e(a, i);
        },
        listen(k) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return (
                a.addEventListener(gp, d),
                (l = k),
                () => {
                    a.removeEventListener(gp, d), (l = null);
                }
            );
        },
        createHref(k) {
            return t(a, k);
        },
        createURL: g,
        encodeLocation(k) {
            let h = g(k);
            return { pathname: h.pathname, search: h.search, hash: h.hash };
        },
        push: p,
        replace: v,
        go(k) {
            return i.go(k);
        },
    };
    return w;
}
var Me;
(function (e) {
    (e.data = "data"),
        (e.deferred = "deferred"),
        (e.redirect = "redirect"),
        (e.error = "error");
})(Me || (Me = {}));
const ww = new Set([
    "lazy",
    "caseSensitive",
    "path",
    "id",
    "index",
    "children",
]);
function xw(e) {
    return e.index === !0;
}
function sc(e, t, n, r) {
    return (
        n === void 0 && (n = []),
        r === void 0 && (r = {}),
        e.map((a, o) => {
            let i = [...n, o],
                s = typeof a.id == "string" ? a.id : i.join("-");
            if (
                (ie(
                    a.index !== !0 || !a.children,
                    "Cannot specify children on an index route"
                ),
                ie(
                    !r[s],
                    'Found a route id collision on id "' +
                        s +
                        `".  Route id's must be globally unique within Data Router usages`
                ),
                xw(a))
            ) {
                let l = Re({}, a, t(a), { id: s });
                return (r[s] = l), l;
            } else {
                let l = Re({}, a, t(a), { id: s, children: void 0 });
                return (
                    (r[s] = l),
                    a.children && (l.children = sc(a.children, t, i, r)),
                    l
                );
            }
        })
    );
}
function ia(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? cr(t) : t,
        a = qo(r.pathname || "/", n);
    if (a == null) return null;
    let o = eg(e);
    kw(o);
    let i = null;
    for (let s = 0; i == null && s < o.length; ++s) {
        let l = Lw(a);
        i = Tw(o[s], l);
    }
    return i;
}
function Dw(e, t) {
    let { route: n, pathname: r, params: a } = e;
    return {
        id: n.id,
        pathname: r,
        params: a,
        data: t[n.id],
        handle: n.handle,
    };
}
function eg(e, t, n, r) {
    t === void 0 && (t = []),
        n === void 0 && (n = []),
        r === void 0 && (r = "");
    let a = (o, i, s) => {
        let l = {
            relativePath: s === void 0 ? o.path || "" : s,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: i,
            route: o,
        };
        l.relativePath.startsWith("/") &&
            (ie(
                l.relativePath.startsWith(r),
                'Absolute route path "' +
                    l.relativePath +
                    '" nested under path ' +
                    ('"' +
                        r +
                        '" is not valid. An absolute child route path ') +
                    "must start with the combined path of all its parent routes."
            ),
            (l.relativePath = l.relativePath.slice(r.length)));
        let u = Zn([r, l.relativePath]),
            c = n.concat(l);
        o.children &&
            o.children.length > 0 &&
            (ie(
                o.index !== !0,
                "Index routes must not have child routes. Please remove " +
                    ('all child routes from route path "' + u + '".')
            ),
            eg(o.children, t, c, u)),
            !(o.path == null && !o.index) &&
                t.push({ path: u, score: Pw(u, o.index), routesMeta: c });
    };
    return (
        e.forEach((o, i) => {
            var s;
            if (o.path === "" || !((s = o.path) != null && s.includes("?")))
                a(o, i);
            else for (let l of tg(o.path)) a(o, i, l);
        }),
        t
    );
}
function tg(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t,
        a = n.endsWith("?"),
        o = n.replace(/\?$/, "");
    if (r.length === 0) return a ? [o, ""] : [o];
    let i = tg(r.join("/")),
        s = [];
    return (
        s.push(...i.map((l) => (l === "" ? o : [o, l].join("/")))),
        a && s.push(...i),
        s.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
    );
}
function kw(e) {
    e.sort((t, n) =>
        t.score !== n.score
            ? n.score - t.score
            : Mw(
                  t.routesMeta.map((r) => r.childrenIndex),
                  n.routesMeta.map((r) => r.childrenIndex)
              )
    );
}
const Sw = /^:[\w-]+$/,
    Ew = 3,
    Cw = 2,
    _w = 1,
    bw = 10,
    Nw = -2,
    wp = (e) => e === "*";
function Pw(e, t) {
    let n = e.split("/"),
        r = n.length;
    return (
        n.some(wp) && (r += Nw),
        t && (r += Cw),
        n
            .filter((a) => !wp(a))
            .reduce((a, o) => a + (Sw.test(o) ? Ew : o === "" ? _w : bw), r)
    );
}
function Mw(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, a) => r === t[a])
        ? e[e.length - 1] - t[t.length - 1]
        : 0;
}
function Tw(e, t) {
    let { routesMeta: n } = e,
        r = {},
        a = "/",
        o = [];
    for (let i = 0; i < n.length; ++i) {
        let s = n[i],
            l = i === n.length - 1,
            u = a === "/" ? t : t.slice(a.length) || "/",
            c = Rw(
                {
                    path: s.relativePath,
                    caseSensitive: s.caseSensitive,
                    end: l,
                },
                u
            );
        if (!c) return null;
        Object.assign(r, c.params);
        let d = s.route;
        o.push({
            params: r,
            pathname: Zn([a, c.pathname]),
            pathnameBase: Fw(Zn([a, c.pathnameBase])),
            route: d,
        }),
            c.pathnameBase !== "/" && (a = Zn([a, c.pathnameBase]));
    }
    return o;
}
function Rw(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = Ow(e.path, e.caseSensitive, e.end),
        a = t.match(n);
    if (!a) return null;
    let o = a[0],
        i = o.replace(/(.)\/+$/, "$1"),
        s = a.slice(1);
    return {
        params: r.reduce((u, c, d) => {
            let { paramName: p, isOptional: v } = c;
            if (p === "*") {
                let w = s[d] || "";
                i = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1");
            }
            const g = s[d];
            return (
                v && !g
                    ? (u[p] = void 0)
                    : (u[p] = (g || "").replace(/%2F/g, "/")),
                u
            );
        }, {}),
        pathname: o,
        pathnameBase: i,
        pattern: e,
    };
}
function Ow(e, t, n) {
    t === void 0 && (t = !1),
        n === void 0 && (n = !0),
        Ca(
            e === "*" || !e.endsWith("*") || e.endsWith("/*"),
            'Route path "' +
                e +
                '" will be treated as if it were ' +
                ('"' +
                    e.replace(/\*$/, "/*") +
                    '" because the `*` character must ') +
                "always follow a `/` in the pattern. To get rid of this warning, " +
                ('please change the route path to "' +
                    e.replace(/\*$/, "/*") +
                    '".')
        );
    let r = [],
        a =
            "^" +
            e
                .replace(/\/*\*?$/, "")
                .replace(/^\/*/, "/")
                .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (i, s, l) => (
                        r.push({ paramName: s, isOptional: l != null }),
                        l ? "/?([^\\/]+)?" : "/([^\\/]+)"
                    )
                );
    return (
        e.endsWith("*")
            ? (r.push({ paramName: "*" }),
              (a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
            : n
            ? (a += "\\/*$")
            : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"),
        [new RegExp(a, t ? void 0 : "i"), r]
    );
}
function Lw(e) {
    try {
        return e
            .split("/")
            .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
            .join("/");
    } catch (t) {
        return (
            Ca(
                !1,
                'The URL path "' +
                    e +
                    '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
                    ("encoding (" + t + ").")
            ),
            e
        );
    }
}
function qo(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
}
function jw(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: a = "",
    } = typeof e == "string" ? cr(e) : e;
    return {
        pathname: n ? (n.startsWith("/") ? n : Iw(n, t)) : t,
        search: Aw(r),
        hash: Ww(a),
    };
}
function Iw(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return (
        e.split("/").forEach((a) => {
            a === ".." ? n.length > 1 && n.pop() : a !== "." && n.push(a);
        }),
        n.length > 1 ? n.join("/") : "/"
    );
}
function Zl(e, t, n, r) {
    return (
        "Cannot include a '" +
        e +
        "' character in a manually specified " +
        ("`to." +
            t +
            "` field [" +
            JSON.stringify(r) +
            "].  Please separate it out to the ") +
        ("`to." +
            n +
            "` field. Alternatively you may provide the full path as ") +
        'a string in <Link to="..."> and the router will parse it for you.'
    );
}
function ng(e) {
    return e.filter(
        (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
    );
}
function rg(e, t) {
    let n = ng(e);
    return t
        ? n.map((r, a) => (a === e.length - 1 ? r.pathname : r.pathnameBase))
        : n.map((r) => r.pathnameBase);
}
function ag(e, t, n, r) {
    r === void 0 && (r = !1);
    let a;
    typeof e == "string"
        ? (a = cr(e))
        : ((a = Re({}, e)),
          ie(
              !a.pathname || !a.pathname.includes("?"),
              Zl("?", "pathname", "search", a)
          ),
          ie(
              !a.pathname || !a.pathname.includes("#"),
              Zl("#", "pathname", "hash", a)
          ),
          ie(
              !a.search || !a.search.includes("#"),
              Zl("#", "search", "hash", a)
          ));
    let o = e === "" || a.pathname === "",
        i = o ? "/" : a.pathname,
        s;
    if (i == null) s = n;
    else {
        let d = t.length - 1;
        if (!r && i.startsWith("..")) {
            let p = i.split("/");
            for (; p[0] === ".."; ) p.shift(), (d -= 1);
            a.pathname = p.join("/");
        }
        s = d >= 0 ? t[d] : "/";
    }
    let l = jw(a, s),
        u = i && i !== "/" && i.endsWith("/"),
        c = (o || i === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const Zn = (e) => e.join("/").replace(/\/\/+/g, "/"),
    Fw = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    Aw = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
    Ww = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class kd {
    constructor(t, n, r, a) {
        a === void 0 && (a = !1),
            (this.status = t),
            (this.statusText = n || ""),
            (this.internal = a),
            r instanceof Error
                ? ((this.data = r.toString()), (this.error = r))
                : (this.data = r);
    }
}
function og(e) {
    return (
        e != null &&
        typeof e.status == "number" &&
        typeof e.statusText == "string" &&
        typeof e.internal == "boolean" &&
        "data" in e
    );
}
const ig = ["post", "put", "patch", "delete"],
    Yw = new Set(ig),
    Uw = ["get", ...ig],
    zw = new Set(Uw),
    Hw = new Set([301, 302, 303, 307, 308]),
    Bw = new Set([307, 308]),
    eu = {
        state: "idle",
        location: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
    },
    Vw = {
        state: "idle",
        data: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
    },
    Ka = {
        state: "unblocked",
        proceed: void 0,
        reset: void 0,
        location: void 0,
    },
    sg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    $w = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
    lg = "remix-router-transitions";
function Qw(e) {
    const t = e.window ? e.window : typeof window < "u" ? window : void 0,
        n =
            typeof t < "u" &&
            typeof t.document < "u" &&
            typeof t.document.createElement < "u",
        r = !n;
    ie(
        e.routes.length > 0,
        "You must provide a non-empty routes array to createRouter"
    );
    let a;
    if (e.mapRouteProperties) a = e.mapRouteProperties;
    else if (e.detectErrorBoundary) {
        let E = e.detectErrorBoundary;
        a = (_) => ({ hasErrorBoundary: E(_) });
    } else a = $w;
    let o = {},
        i = sc(e.routes, a, void 0, o),
        s,
        l = e.basename || "/",
        u = Re(
            {
                v7_fetcherPersist: !1,
                v7_normalizeFormMethod: !1,
                v7_partialHydration: !1,
                v7_prependBasename: !1,
                v7_relativeSplatPath: !1,
            },
            e.future
        ),
        c = null,
        d = new Set(),
        p = null,
        v = null,
        g = null,
        w = e.hydrationData != null,
        k = ia(i, e.history.location, l),
        h = null;
    if (k == null) {
        let E = Nt(404, { pathname: e.history.location.pathname }),
            { matches: _, route: M } = bp(i);
        (k = _), (h = { [M.id]: E });
    }
    let m,
        y = k.some((E) => E.route.lazy),
        C = k.some((E) => E.route.loader);
    if (y) m = !1;
    else if (!C) m = !0;
    else if (u.v7_partialHydration) {
        let E = e.hydrationData ? e.hydrationData.loaderData : null,
            _ = e.hydrationData ? e.hydrationData.errors : null;
        m = k.every(
            (M) =>
                M.route.loader &&
                M.route.loader.hydrate !== !0 &&
                ((E && E[M.route.id] !== void 0) ||
                    (_ && _[M.route.id] !== void 0))
        );
    } else m = e.hydrationData != null;
    let P,
        D = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: k,
            initialized: m,
            navigation: eu,
            restoreScrollPosition: e.hydrationData != null ? !1 : null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
            actionData: (e.hydrationData && e.hydrationData.actionData) || null,
            errors: (e.hydrationData && e.hydrationData.errors) || h,
            fetchers: new Map(),
            blockers: new Map(),
        },
        S = Fe.Pop,
        b = !1,
        R,
        F = !1,
        z = new Map(),
        K = null,
        X = !1,
        j = !1,
        O = [],
        $ = [],
        Y = new Map(),
        I = 0,
        B = -1,
        Z = new Map(),
        de = new Set(),
        xe = new Map(),
        qt = new Map(),
        Qe = new Set(),
        Ft = new Map(),
        rt = new Map(),
        Pn = !1;
    function Ny() {
        if (
            ((c = e.history.listen((E) => {
                let { action: _, location: M, delta: A } = E;
                if (Pn) {
                    Pn = !1;
                    return;
                }
                Ca(
                    rt.size === 0 || A != null,
                    "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
                );
                let Q = af({
                    currentLocation: D.location,
                    nextLocation: M,
                    historyAction: _,
                });
                if (Q && A != null) {
                    (Pn = !0),
                        e.history.go(A * -1),
                        oi(Q, {
                            state: "blocked",
                            location: M,
                            proceed() {
                                oi(Q, {
                                    state: "proceeding",
                                    proceed: void 0,
                                    reset: void 0,
                                    location: M,
                                }),
                                    e.history.go(A);
                            },
                            reset() {
                                let ne = new Map(D.blockers);
                                ne.set(Q, Ka), vt({ blockers: ne });
                            },
                        });
                    return;
                }
                return fr(_, M);
            })),
            n)
        ) {
            ax(t, z);
            let E = () => ox(t, z);
            t.addEventListener("pagehide", E),
                (K = () => t.removeEventListener("pagehide", E));
        }
        return (
            D.initialized || fr(Fe.Pop, D.location, { initialHydration: !0 }), P
        );
    }
    function Py() {
        c && c(),
            K && K(),
            d.clear(),
            R && R.abort(),
            D.fetchers.forEach((E, _) => ai(_)),
            D.blockers.forEach((E, _) => rf(_));
    }
    function My(E) {
        return d.add(E), () => d.delete(E);
    }
    function vt(E, _) {
        _ === void 0 && (_ = {}), (D = Re({}, D, E));
        let M = [],
            A = [];
        u.v7_fetcherPersist &&
            D.fetchers.forEach((Q, ne) => {
                Q.state === "idle" && (Qe.has(ne) ? A.push(ne) : M.push(ne));
            }),
            [...d].forEach((Q) =>
                Q(D, {
                    deletedFetchers: A,
                    unstable_viewTransitionOpts: _.viewTransitionOpts,
                    unstable_flushSync: _.flushSync === !0,
                })
            ),
            u.v7_fetcherPersist &&
                (M.forEach((Q) => D.fetchers.delete(Q)),
                A.forEach((Q) => ai(Q)));
    }
    function Fa(E, _, M) {
        var A, Q;
        let { flushSync: ne } = M === void 0 ? {} : M,
            J =
                D.actionData != null &&
                D.navigation.formMethod != null &&
                Ut(D.navigation.formMethod) &&
                D.navigation.state === "loading" &&
                ((A = E.state) == null ? void 0 : A._isRedirect) !== !0,
            G;
        _.actionData
            ? Object.keys(_.actionData).length > 0
                ? (G = _.actionData)
                : (G = null)
            : J
            ? (G = D.actionData)
            : (G = null);
        let q = _.loaderData
                ? _p(D.loaderData, _.loaderData, _.matches || [], _.errors)
                : D.loaderData,
            oe = D.blockers;
        oe.size > 0 &&
            ((oe = new Map(oe)), oe.forEach((ye, Ke) => oe.set(Ke, Ka)));
        let Ue =
            b === !0 ||
            (D.navigation.formMethod != null &&
                Ut(D.navigation.formMethod) &&
                ((Q = E.state) == null ? void 0 : Q._isRedirect) !== !0);
        s && ((i = s), (s = void 0)),
            X ||
                S === Fe.Pop ||
                (S === Fe.Push
                    ? e.history.push(E, E.state)
                    : S === Fe.Replace && e.history.replace(E, E.state));
        let te;
        if (S === Fe.Pop) {
            let ye = z.get(D.location.pathname);
            ye && ye.has(E.pathname)
                ? (te = { currentLocation: D.location, nextLocation: E })
                : z.has(E.pathname) &&
                  (te = { currentLocation: E, nextLocation: D.location });
        } else if (F) {
            let ye = z.get(D.location.pathname);
            ye
                ? ye.add(E.pathname)
                : ((ye = new Set([E.pathname])),
                  z.set(D.location.pathname, ye)),
                (te = { currentLocation: D.location, nextLocation: E });
        }
        vt(
            Re({}, _, {
                actionData: G,
                loaderData: q,
                historyAction: S,
                location: E,
                initialized: !0,
                navigation: eu,
                revalidation: "idle",
                restoreScrollPosition: sf(E, _.matches || D.matches),
                preventScrollReset: Ue,
                blockers: oe,
            }),
            { viewTransitionOpts: te, flushSync: ne === !0 }
        ),
            (S = Fe.Pop),
            (b = !1),
            (F = !1),
            (X = !1),
            (j = !1),
            (O = []),
            ($ = []);
    }
    async function Gd(E, _) {
        if (typeof E == "number") {
            e.history.go(E);
            return;
        }
        let M = lc(
                D.location,
                D.matches,
                l,
                u.v7_prependBasename,
                E,
                u.v7_relativeSplatPath,
                _ == null ? void 0 : _.fromRouteId,
                _ == null ? void 0 : _.relative
            ),
            {
                path: A,
                submission: Q,
                error: ne,
            } = xp(u.v7_normalizeFormMethod, !1, M, _),
            J = D.location,
            G = Fo(D.location, A, _ && _.state);
        G = Re({}, G, e.history.encodeLocation(G));
        let q = _ && _.replace != null ? _.replace : void 0,
            oe = Fe.Push;
        q === !0
            ? (oe = Fe.Replace)
            : q === !1 ||
              (Q != null &&
                  Ut(Q.formMethod) &&
                  Q.formAction === D.location.pathname + D.location.search &&
                  (oe = Fe.Replace));
        let Ue =
                _ && "preventScrollReset" in _
                    ? _.preventScrollReset === !0
                    : void 0,
            te = (_ && _.unstable_flushSync) === !0,
            ye = af({ currentLocation: J, nextLocation: G, historyAction: oe });
        if (ye) {
            oi(ye, {
                state: "blocked",
                location: G,
                proceed() {
                    oi(ye, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: G,
                    }),
                        Gd(E, _);
                },
                reset() {
                    let Ke = new Map(D.blockers);
                    Ke.set(ye, Ka), vt({ blockers: Ke });
                },
            });
            return;
        }
        return await fr(oe, G, {
            submission: Q,
            pendingError: ne,
            preventScrollReset: Ue,
            replace: _ && _.replace,
            enableViewTransition: _ && _.unstable_viewTransition,
            flushSync: te,
        });
    }
    function Ty() {
        if (
            (Dl(),
            vt({ revalidation: "loading" }),
            D.navigation.state !== "submitting")
        ) {
            if (D.navigation.state === "idle") {
                fr(D.historyAction, D.location, {
                    startUninterruptedRevalidation: !0,
                });
                return;
            }
            fr(S || D.historyAction, D.navigation.location, {
                overrideNavigation: D.navigation,
            });
        }
    }
    async function fr(E, _, M) {
        R && R.abort(),
            (R = null),
            (S = E),
            (X = (M && M.startUninterruptedRevalidation) === !0),
            Yy(D.location, D.matches),
            (b = (M && M.preventScrollReset) === !0),
            (F = (M && M.enableViewTransition) === !0);
        let A = s || i,
            Q = M && M.overrideNavigation,
            ne = ia(A, _, l),
            J = (M && M.flushSync) === !0;
        if (!ne) {
            let Ke = Nt(404, { pathname: _.pathname }),
                { matches: bt, route: ze } = bp(A);
            kl(),
                Fa(
                    _,
                    { matches: bt, loaderData: {}, errors: { [ze.id]: Ke } },
                    { flushSync: J }
                );
            return;
        }
        if (
            D.initialized &&
            !j &&
            Jw(D.location, _) &&
            !(M && M.submission && Ut(M.submission.formMethod))
        ) {
            Fa(_, { matches: ne }, { flushSync: J });
            return;
        }
        R = new AbortController();
        let G = Xa(e.history, _, R.signal, M && M.submission),
            q,
            oe;
        if (M && M.pendingError) oe = { [yo(ne).route.id]: M.pendingError };
        else if (M && M.submission && Ut(M.submission.formMethod)) {
            let Ke = await Ry(G, _, M.submission, ne, {
                replace: M.replace,
                flushSync: J,
            });
            if (Ke.shortCircuited) return;
            (q = Ke.pendingActionData),
                (oe = Ke.pendingActionError),
                (Q = tu(_, M.submission)),
                (J = !1),
                (G = new Request(G.url, { signal: G.signal }));
        }
        let {
            shortCircuited: Ue,
            loaderData: te,
            errors: ye,
        } = await Oy(
            G,
            _,
            ne,
            Q,
            M && M.submission,
            M && M.fetcherSubmission,
            M && M.replace,
            M && M.initialHydration === !0,
            J,
            q,
            oe
        );
        Ue ||
            ((R = null),
            Fa(
                _,
                Re({ matches: ne }, q ? { actionData: q } : {}, {
                    loaderData: te,
                    errors: ye,
                })
            ));
    }
    async function Ry(E, _, M, A, Q) {
        Q === void 0 && (Q = {}), Dl();
        let ne = nx(_, M);
        vt({ navigation: ne }, { flushSync: Q.flushSync === !0 });
        let J,
            G = cc(A, _);
        if (!G.route.action && !G.route.lazy)
            J = {
                type: Me.error,
                error: Nt(405, {
                    method: E.method,
                    pathname: _.pathname,
                    routeId: G.route.id,
                }),
            };
        else if (
            ((J = await qa("action", E, G, A, o, a, l, u.v7_relativeSplatPath)),
            E.signal.aborted)
        )
            return { shortCircuited: !0 };
        if (Dr(J)) {
            let q;
            return (
                Q && Q.replace != null
                    ? (q = Q.replace)
                    : (q =
                          J.location ===
                          D.location.pathname + D.location.search),
                await Aa(D, J, { submission: M, replace: q }),
                { shortCircuited: !0 }
            );
        }
        if (sa(J)) {
            let q = yo(A, G.route.id);
            return (
                (Q && Q.replace) !== !0 && (S = Fe.Push),
                {
                    pendingActionData: {},
                    pendingActionError: { [q.route.id]: J.error },
                }
            );
        }
        if (xr(J)) throw Nt(400, { type: "defer-action" });
        return { pendingActionData: { [G.route.id]: J.data } };
    }
    async function Oy(E, _, M, A, Q, ne, J, G, q, oe, Ue) {
        let te = A || tu(_, Q),
            ye = Q || ne || Mp(te),
            Ke = s || i,
            [bt, ze] = Dp(
                e.history,
                D,
                M,
                ye,
                _,
                u.v7_partialHydration && G === !0,
                j,
                O,
                $,
                Qe,
                xe,
                de,
                Ke,
                l,
                oe,
                Ue
            );
        if (
            (kl(
                (ge) =>
                    !(M && M.some((Ee) => Ee.route.id === ge)) ||
                    (bt && bt.some((Ee) => Ee.route.id === ge))
            ),
            (B = ++I),
            bt.length === 0 && ze.length === 0)
        ) {
            let ge = tf();
            return (
                Fa(
                    _,
                    Re(
                        { matches: M, loaderData: {}, errors: Ue || null },
                        oe ? { actionData: oe } : {},
                        ge ? { fetchers: new Map(D.fetchers) } : {}
                    ),
                    { flushSync: q }
                ),
                { shortCircuited: !0 }
            );
        }
        if (!X && (!u.v7_partialHydration || !G)) {
            ze.forEach((Ee) => {
                let Xt = D.fetchers.get(Ee.key),
                    si = Ga(void 0, Xt ? Xt.data : void 0);
                D.fetchers.set(Ee.key, si);
            });
            let ge = oe || D.actionData;
            vt(
                Re(
                    { navigation: te },
                    ge
                        ? Object.keys(ge).length === 0
                            ? { actionData: null }
                            : { actionData: ge }
                        : {},
                    ze.length > 0 ? { fetchers: new Map(D.fetchers) } : {}
                ),
                { flushSync: q }
            );
        }
        ze.forEach((ge) => {
            Y.has(ge.key) && Tn(ge.key),
                ge.controller && Y.set(ge.key, ge.controller);
        });
        let zr = () => ze.forEach((ge) => Tn(ge.key));
        R && R.signal.addEventListener("abort", zr);
        let {
            results: Sl,
            loaderResults: Hr,
            fetcherResults: Rn,
        } = await Jd(D.matches, M, bt, ze, E);
        if (E.signal.aborted) return { shortCircuited: !0 };
        R && R.signal.removeEventListener("abort", zr),
            ze.forEach((ge) => Y.delete(ge.key));
        let pr = Np(Sl);
        if (pr) {
            if (pr.idx >= bt.length) {
                let ge = ze[pr.idx - bt.length].key;
                de.add(ge);
            }
            return (
                await Aa(D, pr.result, { replace: J }), { shortCircuited: !0 }
            );
        }
        let { loaderData: El, errors: Cl } = Cp(D, M, bt, Hr, Ue, ze, Rn, Ft);
        Ft.forEach((ge, Ee) => {
            ge.subscribe((Xt) => {
                (Xt || ge.done) && Ft.delete(Ee);
            });
        });
        let _l = tf(),
            Br = nf(B),
            ii = _l || Br || ze.length > 0;
        return Re(
            { loaderData: El, errors: Cl },
            ii ? { fetchers: new Map(D.fetchers) } : {}
        );
    }
    function Ly(E, _, M, A) {
        if (r)
            throw new Error(
                "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
            );
        Y.has(E) && Tn(E);
        let Q = (A && A.unstable_flushSync) === !0,
            ne = s || i,
            J = lc(
                D.location,
                D.matches,
                l,
                u.v7_prependBasename,
                M,
                u.v7_relativeSplatPath,
                _,
                A == null ? void 0 : A.relative
            ),
            G = ia(ne, J, l);
        if (!G) {
            Wa(E, _, Nt(404, { pathname: J }), { flushSync: Q });
            return;
        }
        let {
            path: q,
            submission: oe,
            error: Ue,
        } = xp(u.v7_normalizeFormMethod, !0, J, A);
        if (Ue) {
            Wa(E, _, Ue, { flushSync: Q });
            return;
        }
        let te = cc(G, q);
        if (
            ((b = (A && A.preventScrollReset) === !0), oe && Ut(oe.formMethod))
        ) {
            jy(E, _, q, te, G, Q, oe);
            return;
        }
        xe.set(E, { routeId: _, path: q }), Iy(E, _, q, te, G, Q, oe);
    }
    async function jy(E, _, M, A, Q, ne, J) {
        if ((Dl(), xe.delete(E), !A.route.action && !A.route.lazy)) {
            let Ee = Nt(405, { method: J.formMethod, pathname: M, routeId: _ });
            Wa(E, _, Ee, { flushSync: ne });
            return;
        }
        let G = D.fetchers.get(E);
        Mn(E, rx(J, G), { flushSync: ne });
        let q = new AbortController(),
            oe = Xa(e.history, M, q.signal, J);
        Y.set(E, q);
        let Ue = I,
            te = await qa("action", oe, A, Q, o, a, l, u.v7_relativeSplatPath);
        if (oe.signal.aborted) {
            Y.get(E) === q && Y.delete(E);
            return;
        }
        if (u.v7_fetcherPersist && Qe.has(E)) {
            if (Dr(te) || sa(te)) {
                Mn(E, In(void 0));
                return;
            }
        } else {
            if (Dr(te))
                if ((Y.delete(E), B > Ue)) {
                    Mn(E, In(void 0));
                    return;
                } else
                    return (
                        de.add(E),
                        Mn(E, Ga(J)),
                        Aa(D, te, { fetcherSubmission: J })
                    );
            if (sa(te)) {
                Wa(E, _, te.error);
                return;
            }
        }
        if (xr(te)) throw Nt(400, { type: "defer-action" });
        let ye = D.navigation.location || D.location,
            Ke = Xa(e.history, ye, q.signal),
            bt = s || i,
            ze =
                D.navigation.state !== "idle"
                    ? ia(bt, D.navigation.location, l)
                    : D.matches;
        ie(ze, "Didn't find any matches after fetcher action");
        let zr = ++I;
        Z.set(E, zr);
        let Sl = Ga(J, te.data);
        D.fetchers.set(E, Sl);
        let [Hr, Rn] = Dp(
            e.history,
            D,
            ze,
            J,
            ye,
            !1,
            j,
            O,
            $,
            Qe,
            xe,
            de,
            bt,
            l,
            { [A.route.id]: te.data },
            void 0
        );
        Rn.filter((Ee) => Ee.key !== E).forEach((Ee) => {
            let Xt = Ee.key,
                si = D.fetchers.get(Xt),
                zy = Ga(void 0, si ? si.data : void 0);
            D.fetchers.set(Xt, zy),
                Y.has(Xt) && Tn(Xt),
                Ee.controller && Y.set(Xt, Ee.controller);
        }),
            vt({ fetchers: new Map(D.fetchers) });
        let pr = () => Rn.forEach((Ee) => Tn(Ee.key));
        q.signal.addEventListener("abort", pr);
        let {
            results: El,
            loaderResults: Cl,
            fetcherResults: _l,
        } = await Jd(D.matches, ze, Hr, Rn, Ke);
        if (q.signal.aborted) return;
        q.signal.removeEventListener("abort", pr),
            Z.delete(E),
            Y.delete(E),
            Rn.forEach((Ee) => Y.delete(Ee.key));
        let Br = Np(El);
        if (Br) {
            if (Br.idx >= Hr.length) {
                let Ee = Rn[Br.idx - Hr.length].key;
                de.add(Ee);
            }
            return Aa(D, Br.result);
        }
        let { loaderData: ii, errors: ge } = Cp(
            D,
            D.matches,
            Hr,
            Cl,
            void 0,
            Rn,
            _l,
            Ft
        );
        if (D.fetchers.has(E)) {
            let Ee = In(te.data);
            D.fetchers.set(E, Ee);
        }
        nf(zr),
            D.navigation.state === "loading" && zr > B
                ? (ie(S, "Expected pending action"),
                  R && R.abort(),
                  Fa(D.navigation.location, {
                      matches: ze,
                      loaderData: ii,
                      errors: ge,
                      fetchers: new Map(D.fetchers),
                  }))
                : (vt({
                      errors: ge,
                      loaderData: _p(D.loaderData, ii, ze, ge),
                      fetchers: new Map(D.fetchers),
                  }),
                  (j = !1));
    }
    async function Iy(E, _, M, A, Q, ne, J) {
        let G = D.fetchers.get(E);
        Mn(E, Ga(J, G ? G.data : void 0), { flushSync: ne });
        let q = new AbortController(),
            oe = Xa(e.history, M, q.signal);
        Y.set(E, q);
        let Ue = I,
            te = await qa("loader", oe, A, Q, o, a, l, u.v7_relativeSplatPath);
        if (
            (xr(te) && (te = (await dg(te, oe.signal, !0)) || te),
            Y.get(E) === q && Y.delete(E),
            !oe.signal.aborted)
        ) {
            if (Qe.has(E)) {
                Mn(E, In(void 0));
                return;
            }
            if (Dr(te))
                if (B > Ue) {
                    Mn(E, In(void 0));
                    return;
                } else {
                    de.add(E), await Aa(D, te);
                    return;
                }
            if (sa(te)) {
                Wa(E, _, te.error);
                return;
            }
            ie(!xr(te), "Unhandled fetcher deferred data"), Mn(E, In(te.data));
        }
    }
    async function Aa(E, _, M) {
        let {
            submission: A,
            fetcherSubmission: Q,
            replace: ne,
        } = M === void 0 ? {} : M;
        _.revalidate && (j = !0);
        let J = Fo(E.location, _.location, { _isRedirect: !0 });
        if ((ie(J, "Expected a location on the redirect navigation"), n)) {
            let ye = !1;
            if (_.reloadDocument) ye = !0;
            else if (sg.test(_.location)) {
                const Ke = e.history.createURL(_.location);
                ye =
                    Ke.origin !== t.location.origin ||
                    qo(Ke.pathname, l) == null;
            }
            if (ye) {
                ne
                    ? t.location.replace(_.location)
                    : t.location.assign(_.location);
                return;
            }
        }
        R = null;
        let G = ne === !0 ? Fe.Replace : Fe.Push,
            { formMethod: q, formAction: oe, formEncType: Ue } = E.navigation;
        !A && !Q && q && oe && Ue && (A = Mp(E.navigation));
        let te = A || Q;
        if (Bw.has(_.status) && te && Ut(te.formMethod))
            await fr(G, J, {
                submission: Re({}, te, { formAction: _.location }),
                preventScrollReset: b,
            });
        else {
            let ye = tu(J, A);
            await fr(G, J, {
                overrideNavigation: ye,
                fetcherSubmission: Q,
                preventScrollReset: b,
            });
        }
    }
    async function Jd(E, _, M, A, Q) {
        let ne = await Promise.all([
                ...M.map((q) =>
                    qa("loader", Q, q, _, o, a, l, u.v7_relativeSplatPath)
                ),
                ...A.map((q) =>
                    q.matches && q.match && q.controller
                        ? qa(
                              "loader",
                              Xa(e.history, q.path, q.controller.signal),
                              q.match,
                              q.matches,
                              o,
                              a,
                              l,
                              u.v7_relativeSplatPath
                          )
                        : {
                              type: Me.error,
                              error: Nt(404, { pathname: q.path }),
                          }
                ),
            ]),
            J = ne.slice(0, M.length),
            G = ne.slice(M.length);
        return (
            await Promise.all([
                Pp(
                    E,
                    M,
                    J,
                    J.map(() => Q.signal),
                    !1,
                    D.loaderData
                ),
                Pp(
                    E,
                    A.map((q) => q.match),
                    G,
                    A.map((q) => (q.controller ? q.controller.signal : null)),
                    !0
                ),
            ]),
            { results: ne, loaderResults: J, fetcherResults: G }
        );
    }
    function Dl() {
        (j = !0),
            O.push(...kl()),
            xe.forEach((E, _) => {
                Y.has(_) && ($.push(_), Tn(_));
            });
    }
    function Mn(E, _, M) {
        M === void 0 && (M = {}),
            D.fetchers.set(E, _),
            vt(
                { fetchers: new Map(D.fetchers) },
                { flushSync: (M && M.flushSync) === !0 }
            );
    }
    function Wa(E, _, M, A) {
        A === void 0 && (A = {});
        let Q = yo(D.matches, _);
        ai(E),
            vt(
                { errors: { [Q.route.id]: M }, fetchers: new Map(D.fetchers) },
                { flushSync: (A && A.flushSync) === !0 }
            );
    }
    function Zd(E) {
        return (
            u.v7_fetcherPersist &&
                (qt.set(E, (qt.get(E) || 0) + 1), Qe.has(E) && Qe.delete(E)),
            D.fetchers.get(E) || Vw
        );
    }
    function ai(E) {
        let _ = D.fetchers.get(E);
        Y.has(E) && !(_ && _.state === "loading" && Z.has(E)) && Tn(E),
            xe.delete(E),
            Z.delete(E),
            de.delete(E),
            Qe.delete(E),
            D.fetchers.delete(E);
    }
    function Fy(E) {
        if (u.v7_fetcherPersist) {
            let _ = (qt.get(E) || 0) - 1;
            _ <= 0 ? (qt.delete(E), Qe.add(E)) : qt.set(E, _);
        } else ai(E);
        vt({ fetchers: new Map(D.fetchers) });
    }
    function Tn(E) {
        let _ = Y.get(E);
        ie(_, "Expected fetch controller: " + E), _.abort(), Y.delete(E);
    }
    function ef(E) {
        for (let _ of E) {
            let M = Zd(_),
                A = In(M.data);
            D.fetchers.set(_, A);
        }
    }
    function tf() {
        let E = [],
            _ = !1;
        for (let M of de) {
            let A = D.fetchers.get(M);
            ie(A, "Expected fetcher: " + M),
                A.state === "loading" && (de.delete(M), E.push(M), (_ = !0));
        }
        return ef(E), _;
    }
    function nf(E) {
        let _ = [];
        for (let [M, A] of Z)
            if (A < E) {
                let Q = D.fetchers.get(M);
                ie(Q, "Expected fetcher: " + M),
                    Q.state === "loading" && (Tn(M), Z.delete(M), _.push(M));
            }
        return ef(_), _.length > 0;
    }
    function Ay(E, _) {
        let M = D.blockers.get(E) || Ka;
        return rt.get(E) !== _ && rt.set(E, _), M;
    }
    function rf(E) {
        D.blockers.delete(E), rt.delete(E);
    }
    function oi(E, _) {
        let M = D.blockers.get(E) || Ka;
        ie(
            (M.state === "unblocked" && _.state === "blocked") ||
                (M.state === "blocked" && _.state === "blocked") ||
                (M.state === "blocked" && _.state === "proceeding") ||
                (M.state === "blocked" && _.state === "unblocked") ||
                (M.state === "proceeding" && _.state === "unblocked"),
            "Invalid blocker state transition: " + M.state + " -> " + _.state
        );
        let A = new Map(D.blockers);
        A.set(E, _), vt({ blockers: A });
    }
    function af(E) {
        let { currentLocation: _, nextLocation: M, historyAction: A } = E;
        if (rt.size === 0) return;
        rt.size > 1 && Ca(!1, "A router only supports one blocker at a time");
        let Q = Array.from(rt.entries()),
            [ne, J] = Q[Q.length - 1],
            G = D.blockers.get(ne);
        if (
            !(G && G.state === "proceeding") &&
            J({ currentLocation: _, nextLocation: M, historyAction: A })
        )
            return ne;
    }
    function kl(E) {
        let _ = [];
        return (
            Ft.forEach((M, A) => {
                (!E || E(A)) && (M.cancel(), _.push(A), Ft.delete(A));
            }),
            _
        );
    }
    function Wy(E, _, M) {
        if (((p = E), (g = _), (v = M || null), !w && D.navigation === eu)) {
            w = !0;
            let A = sf(D.location, D.matches);
            A != null && vt({ restoreScrollPosition: A });
        }
        return () => {
            (p = null), (g = null), (v = null);
        };
    }
    function of(E, _) {
        return (
            (v &&
                v(
                    E,
                    _.map((A) => Dw(A, D.loaderData))
                )) ||
            E.key
        );
    }
    function Yy(E, _) {
        if (p && g) {
            let M = of(E, _);
            p[M] = g();
        }
    }
    function sf(E, _) {
        if (p) {
            let M = of(E, _),
                A = p[M];
            if (typeof A == "number") return A;
        }
        return null;
    }
    function Uy(E) {
        (o = {}), (s = sc(E, a, void 0, o));
    }
    return (
        (P = {
            get basename() {
                return l;
            },
            get future() {
                return u;
            },
            get state() {
                return D;
            },
            get routes() {
                return i;
            },
            get window() {
                return t;
            },
            initialize: Ny,
            subscribe: My,
            enableScrollRestoration: Wy,
            navigate: Gd,
            fetch: Ly,
            revalidate: Ty,
            createHref: (E) => e.history.createHref(E),
            encodeLocation: (E) => e.history.encodeLocation(E),
            getFetcher: Zd,
            deleteFetcher: Fy,
            dispose: Py,
            getBlocker: Ay,
            deleteBlocker: rf,
            _internalFetchControllers: Y,
            _internalActiveDeferreds: Ft,
            _internalSetRoutes: Uy,
        }),
        P
    );
}
function Kw(e) {
    return (
        e != null &&
        (("formData" in e && e.formData != null) ||
            ("body" in e && e.body !== void 0))
    );
}
function lc(e, t, n, r, a, o, i, s) {
    let l, u;
    if (i) {
        l = [];
        for (let d of t)
            if ((l.push(d), d.route.id === i)) {
                u = d;
                break;
            }
    } else (l = t), (u = t[t.length - 1]);
    let c = ag(
        a || ".",
        rg(l, o),
        qo(e.pathname, n) || e.pathname,
        s === "path"
    );
    return (
        a == null && ((c.search = e.search), (c.hash = e.hash)),
        (a == null || a === "" || a === ".") &&
            u &&
            u.route.index &&
            !Sd(c.search) &&
            (c.search = c.search
                ? c.search.replace(/^\?/, "?index&")
                : "?index"),
        r &&
            n !== "/" &&
            (c.pathname = c.pathname === "/" ? n : Zn([n, c.pathname])),
        Ko(c)
    );
}
function xp(e, t, n, r) {
    if (!r || !Kw(r)) return { path: n };
    if (r.formMethod && !tx(r.formMethod))
        return { path: n, error: Nt(405, { method: r.formMethod }) };
    let a = () => ({ path: n, error: Nt(400, { type: "invalid-body" }) }),
        o = r.formMethod || "get",
        i = e ? o.toUpperCase() : o.toLowerCase(),
        s = cg(n);
    if (r.body !== void 0) {
        if (r.formEncType === "text/plain") {
            if (!Ut(i)) return a();
            let p =
                typeof r.body == "string"
                    ? r.body
                    : r.body instanceof FormData ||
                      r.body instanceof URLSearchParams
                    ? Array.from(r.body.entries()).reduce((v, g) => {
                          let [w, k] = g;
                          return (
                              "" +
                              v +
                              w +
                              "=" +
                              k +
                              `
`
                          );
                      }, "")
                    : String(r.body);
            return {
                path: n,
                submission: {
                    formMethod: i,
                    formAction: s,
                    formEncType: r.formEncType,
                    formData: void 0,
                    json: void 0,
                    text: p,
                },
            };
        } else if (r.formEncType === "application/json") {
            if (!Ut(i)) return a();
            try {
                let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
                return {
                    path: n,
                    submission: {
                        formMethod: i,
                        formAction: s,
                        formEncType: r.formEncType,
                        formData: void 0,
                        json: p,
                        text: void 0,
                    },
                };
            } catch {
                return a();
            }
        }
    }
    ie(
        typeof FormData == "function",
        "FormData is not available in this environment"
    );
    let l, u;
    if (r.formData) (l = uc(r.formData)), (u = r.formData);
    else if (r.body instanceof FormData) (l = uc(r.body)), (u = r.body);
    else if (r.body instanceof URLSearchParams) (l = r.body), (u = Ep(l));
    else if (r.body == null) (l = new URLSearchParams()), (u = new FormData());
    else
        try {
            (l = new URLSearchParams(r.body)), (u = Ep(l));
        } catch {
            return a();
        }
    let c = {
        formMethod: i,
        formAction: s,
        formEncType:
            (r && r.formEncType) || "application/x-www-form-urlencoded",
        formData: u,
        json: void 0,
        text: void 0,
    };
    if (Ut(c.formMethod)) return { path: n, submission: c };
    let d = cr(n);
    return (
        t && d.search && Sd(d.search) && l.append("index", ""),
        (d.search = "?" + l),
        { path: Ko(d), submission: c }
    );
}
function qw(e, t) {
    let n = e;
    if (t) {
        let r = e.findIndex((a) => a.route.id === t);
        r >= 0 && (n = e.slice(0, r));
    }
    return n;
}
function Dp(e, t, n, r, a, o, i, s, l, u, c, d, p, v, g, w) {
    let k = w ? Object.values(w)[0] : g ? Object.values(g)[0] : void 0,
        h = e.createURL(t.location),
        m = e.createURL(a),
        y = w ? Object.keys(w)[0] : void 0,
        P = qw(n, y).filter((S, b) => {
            let { route: R } = S;
            if (R.lazy) return !0;
            if (R.loader == null) return !1;
            if (o)
                return R.loader.hydrate
                    ? !0
                    : t.loaderData[R.id] === void 0 &&
                          (!t.errors || t.errors[R.id] === void 0);
            if (
                Xw(t.loaderData, t.matches[b], S) ||
                s.some((K) => K === S.route.id)
            )
                return !0;
            let F = t.matches[b],
                z = S;
            return kp(
                S,
                Re(
                    {
                        currentUrl: h,
                        currentParams: F.params,
                        nextUrl: m,
                        nextParams: z.params,
                    },
                    r,
                    {
                        actionResult: k,
                        defaultShouldRevalidate:
                            i ||
                            h.pathname + h.search === m.pathname + m.search ||
                            h.search !== m.search ||
                            ug(F, z),
                    }
                )
            );
        }),
        D = [];
    return (
        c.forEach((S, b) => {
            if (o || !n.some((X) => X.route.id === S.routeId) || u.has(b))
                return;
            let R = ia(p, S.path, v);
            if (!R) {
                D.push({
                    key: b,
                    routeId: S.routeId,
                    path: S.path,
                    matches: null,
                    match: null,
                    controller: null,
                });
                return;
            }
            let F = t.fetchers.get(b),
                z = cc(R, S.path),
                K = !1;
            d.has(b)
                ? (K = !1)
                : l.includes(b)
                ? (K = !0)
                : F && F.state !== "idle" && F.data === void 0
                ? (K = i)
                : (K = kp(
                      z,
                      Re(
                          {
                              currentUrl: h,
                              currentParams:
                                  t.matches[t.matches.length - 1].params,
                              nextUrl: m,
                              nextParams: n[n.length - 1].params,
                          },
                          r,
                          { actionResult: k, defaultShouldRevalidate: i }
                      )
                  )),
                K &&
                    D.push({
                        key: b,
                        routeId: S.routeId,
                        path: S.path,
                        matches: R,
                        match: z,
                        controller: new AbortController(),
                    });
        }),
        [P, D]
    );
}
function Xw(e, t, n) {
    let r = !t || n.route.id !== t.route.id,
        a = e[n.route.id] === void 0;
    return r || a;
}
function ug(e, t) {
    let n = e.route.path;
    return (
        e.pathname !== t.pathname ||
        (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
    );
}
function kp(e, t) {
    if (e.route.shouldRevalidate) {
        let n = e.route.shouldRevalidate(t);
        if (typeof n == "boolean") return n;
    }
    return t.defaultShouldRevalidate;
}
async function Sp(e, t, n) {
    if (!e.lazy) return;
    let r = await e.lazy();
    if (!e.lazy) return;
    let a = n[e.id];
    ie(a, "No route found in manifest");
    let o = {};
    for (let i in r) {
        let l = a[i] !== void 0 && i !== "hasErrorBoundary";
        Ca(
            !l,
            'Route "' +
                a.id +
                '" has a static property "' +
                i +
                '" defined but its lazy function is also returning a value for this property. ' +
                ('The lazy route property "' + i + '" will be ignored.')
        ),
            !l && !ww.has(i) && (o[i] = r[i]);
    }
    Object.assign(a, o), Object.assign(a, Re({}, t(a), { lazy: void 0 }));
}
async function qa(e, t, n, r, a, o, i, s, l) {
    l === void 0 && (l = {});
    let u,
        c,
        d,
        p = (w) => {
            let k,
                h = new Promise((m, y) => (k = y));
            return (
                (d = () => k()),
                t.signal.addEventListener("abort", d),
                Promise.race([
                    w({
                        request: t,
                        params: n.params,
                        context: l.requestContext,
                    }),
                    h,
                ])
            );
        };
    try {
        let w = n.route[e];
        if (n.route.lazy)
            if (w) {
                let k,
                    h = await Promise.all([
                        p(w).catch((m) => {
                            k = m;
                        }),
                        Sp(n.route, o, a),
                    ]);
                if (k) throw k;
                c = h[0];
            } else if ((await Sp(n.route, o, a), (w = n.route[e]), w))
                c = await p(w);
            else if (e === "action") {
                let k = new URL(t.url),
                    h = k.pathname + k.search;
                throw Nt(405, {
                    method: t.method,
                    pathname: h,
                    routeId: n.route.id,
                });
            } else return { type: Me.data, data: void 0 };
        else if (w) c = await p(w);
        else {
            let k = new URL(t.url),
                h = k.pathname + k.search;
            throw Nt(404, { pathname: h });
        }
        ie(
            c !== void 0,
            "You defined " +
                (e === "action" ? "an action" : "a loader") +
                " for route " +
                ('"' +
                    n.route.id +
                    "\" but didn't return anything from your `" +
                    e +
                    "` ") +
                "function. Please return a value or `null`."
        );
    } catch (w) {
        (u = Me.error), (c = w);
    } finally {
        d && t.signal.removeEventListener("abort", d);
    }
    if (ex(c)) {
        let w = c.status;
        if (Hw.has(w)) {
            let h = c.headers.get("Location");
            if (
                (ie(
                    h,
                    "Redirects returned/thrown from loaders/actions must have a Location header"
                ),
                !sg.test(h))
            )
                h = lc(
                    new URL(t.url),
                    r.slice(0, r.indexOf(n) + 1),
                    i,
                    !0,
                    h,
                    s
                );
            else if (!l.isStaticRequest) {
                let m = new URL(t.url),
                    y = h.startsWith("//")
                        ? new URL(m.protocol + h)
                        : new URL(h),
                    C = qo(y.pathname, i) != null;
                y.origin === m.origin &&
                    C &&
                    (h = y.pathname + y.search + y.hash);
            }
            if (l.isStaticRequest) throw (c.headers.set("Location", h), c);
            return {
                type: Me.redirect,
                status: w,
                location: h,
                revalidate: c.headers.get("X-Remix-Revalidate") !== null,
                reloadDocument:
                    c.headers.get("X-Remix-Reload-Document") !== null,
            };
        }
        if (l.isRouteRequest)
            throw { type: u === Me.error ? Me.error : Me.data, response: c };
        let k;
        try {
            let h = c.headers.get("Content-Type");
            h && /\bapplication\/json\b/.test(h)
                ? c.body == null
                    ? (k = null)
                    : (k = await c.json())
                : (k = await c.text());
        } catch (h) {
            return { type: Me.error, error: h };
        }
        return u === Me.error
            ? { type: u, error: new kd(w, c.statusText, k), headers: c.headers }
            : {
                  type: Me.data,
                  data: k,
                  statusCode: c.status,
                  headers: c.headers,
              };
    }
    if (u === Me.error) return { type: u, error: c };
    if (Zw(c)) {
        var v, g;
        return {
            type: Me.deferred,
            deferredData: c,
            statusCode: (v = c.init) == null ? void 0 : v.status,
            headers:
                ((g = c.init) == null ? void 0 : g.headers) &&
                new Headers(c.init.headers),
        };
    }
    return { type: Me.data, data: c };
}
function Xa(e, t, n, r) {
    let a = e.createURL(cg(t)).toString(),
        o = { signal: n };
    if (r && Ut(r.formMethod)) {
        let { formMethod: i, formEncType: s } = r;
        (o.method = i.toUpperCase()),
            s === "application/json"
                ? ((o.headers = new Headers({ "Content-Type": s })),
                  (o.body = JSON.stringify(r.json)))
                : s === "text/plain"
                ? (o.body = r.text)
                : s === "application/x-www-form-urlencoded" && r.formData
                ? (o.body = uc(r.formData))
                : (o.body = r.formData);
    }
    return new Request(a, o);
}
function uc(e) {
    let t = new URLSearchParams();
    for (let [n, r] of e.entries())
        t.append(n, typeof r == "string" ? r : r.name);
    return t;
}
function Ep(e) {
    let t = new FormData();
    for (let [n, r] of e.entries()) t.append(n, r);
    return t;
}
function Gw(e, t, n, r, a) {
    let o = {},
        i = null,
        s,
        l = !1,
        u = {};
    return (
        n.forEach((c, d) => {
            let p = t[d].route.id;
            if (
                (ie(
                    !Dr(c),
                    "Cannot handle redirect results in processLoaderData"
                ),
                sa(c))
            ) {
                let v = yo(e, p),
                    g = c.error;
                r && ((g = Object.values(r)[0]), (r = void 0)),
                    (i = i || {}),
                    i[v.route.id] == null && (i[v.route.id] = g),
                    (o[p] = void 0),
                    l || ((l = !0), (s = og(c.error) ? c.error.status : 500)),
                    c.headers && (u[p] = c.headers);
            } else
                xr(c)
                    ? (a.set(p, c.deferredData), (o[p] = c.deferredData.data))
                    : (o[p] = c.data),
                    c.statusCode != null &&
                        c.statusCode !== 200 &&
                        !l &&
                        (s = c.statusCode),
                    c.headers && (u[p] = c.headers);
        }),
        r && ((i = r), (o[Object.keys(r)[0]] = void 0)),
        { loaderData: o, errors: i, statusCode: s || 200, loaderHeaders: u }
    );
}
function Cp(e, t, n, r, a, o, i, s) {
    let { loaderData: l, errors: u } = Gw(t, n, r, a, s);
    for (let c = 0; c < o.length; c++) {
        let { key: d, match: p, controller: v } = o[c];
        ie(
            i !== void 0 && i[c] !== void 0,
            "Did not find corresponding fetcher result"
        );
        let g = i[c];
        if (!(v && v.signal.aborted))
            if (sa(g)) {
                let w = yo(e.matches, p == null ? void 0 : p.route.id);
                (u && u[w.route.id]) ||
                    (u = Re({}, u, { [w.route.id]: g.error })),
                    e.fetchers.delete(d);
            } else if (Dr(g)) ie(!1, "Unhandled fetcher revalidation redirect");
            else if (xr(g)) ie(!1, "Unhandled fetcher deferred data");
            else {
                let w = In(g.data);
                e.fetchers.set(d, w);
            }
    }
    return { loaderData: l, errors: u };
}
function _p(e, t, n, r) {
    let a = Re({}, t);
    for (let o of n) {
        let i = o.route.id;
        if (
            (t.hasOwnProperty(i)
                ? t[i] !== void 0 && (a[i] = t[i])
                : e[i] !== void 0 && o.route.loader && (a[i] = e[i]),
            r && r.hasOwnProperty(i))
        )
            break;
    }
    return a;
}
function yo(e, t) {
    return (
        (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
            .reverse()
            .find((r) => r.route.hasErrorBoundary === !0) || e[0]
    );
}
function bp(e) {
    let t =
        e.length === 1
            ? e[0]
            : e.find((n) => n.index || !n.path || n.path === "/") || {
                  id: "__shim-error-route__",
              };
    return {
        matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
        route: t,
    };
}
function Nt(e, t) {
    let { pathname: n, routeId: r, method: a, type: o } = t === void 0 ? {} : t,
        i = "Unknown Server Error",
        s = "Unknown @remix-run/router error";
    return (
        e === 400
            ? ((i = "Bad Request"),
              a && n && r
                  ? (s =
                        "You made a " +
                        a +
                        ' request to "' +
                        n +
                        '" but ' +
                        ('did not provide a `loader` for route "' + r + '", ') +
                        "so there is no way to handle the request.")
                  : o === "defer-action"
                  ? (s = "defer() is not supported in actions")
                  : o === "invalid-body" &&
                    (s = "Unable to encode submission body"))
            : e === 403
            ? ((i = "Forbidden"),
              (s = 'Route "' + r + '" does not match URL "' + n + '"'))
            : e === 404
            ? ((i = "Not Found"), (s = 'No route matches URL "' + n + '"'))
            : e === 405 &&
              ((i = "Method Not Allowed"),
              a && n && r
                  ? (s =
                        "You made a " +
                        a.toUpperCase() +
                        ' request to "' +
                        n +
                        '" but ' +
                        ('did not provide an `action` for route "' +
                            r +
                            '", ') +
                        "so there is no way to handle the request.")
                  : a &&
                    (s = 'Invalid request method "' + a.toUpperCase() + '"')),
        new kd(e || 500, i, new Error(s), !0)
    );
}
function Np(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (Dr(n)) return { result: n, idx: t };
    }
}
function cg(e) {
    let t = typeof e == "string" ? cr(e) : e;
    return Ko(Re({}, t, { hash: "" }));
}
function Jw(e, t) {
    return e.pathname !== t.pathname || e.search !== t.search
        ? !1
        : e.hash === ""
        ? t.hash !== ""
        : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function xr(e) {
    return e.type === Me.deferred;
}
function sa(e) {
    return e.type === Me.error;
}
function Dr(e) {
    return (e && e.type) === Me.redirect;
}
function Zw(e) {
    let t = e;
    return (
        t &&
        typeof t == "object" &&
        typeof t.data == "object" &&
        typeof t.subscribe == "function" &&
        typeof t.cancel == "function" &&
        typeof t.resolveData == "function"
    );
}
function ex(e) {
    return (
        e != null &&
        typeof e.status == "number" &&
        typeof e.statusText == "string" &&
        typeof e.headers == "object" &&
        typeof e.body < "u"
    );
}
function tx(e) {
    return zw.has(e.toLowerCase());
}
function Ut(e) {
    return Yw.has(e.toLowerCase());
}
async function Pp(e, t, n, r, a, o) {
    for (let i = 0; i < n.length; i++) {
        let s = n[i],
            l = t[i];
        if (!l) continue;
        let u = e.find((d) => d.route.id === l.route.id),
            c = u != null && !ug(u, l) && (o && o[l.route.id]) !== void 0;
        if (xr(s) && (a || c)) {
            let d = r[i];
            ie(
                d,
                "Expected an AbortSignal for revalidating fetcher deferred result"
            ),
                await dg(s, d, a).then((p) => {
                    p && (n[i] = p || n[i]);
                });
        }
    }
}
async function dg(e, t, n) {
    if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
        if (n)
            try {
                return { type: Me.data, data: e.deferredData.unwrappedData };
            } catch (a) {
                return { type: Me.error, error: a };
            }
        return { type: Me.data, data: e.deferredData.data };
    }
}
function Sd(e) {
    return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function cc(e, t) {
    let n = typeof t == "string" ? cr(t).search : t.search;
    if (e[e.length - 1].route.index && Sd(n || "")) return e[e.length - 1];
    let r = ng(e);
    return r[r.length - 1];
}
function Mp(e) {
    let {
        formMethod: t,
        formAction: n,
        formEncType: r,
        text: a,
        formData: o,
        json: i,
    } = e;
    if (!(!t || !n || !r)) {
        if (a != null)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: void 0,
                json: void 0,
                text: a,
            };
        if (o != null)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: o,
                json: void 0,
                text: void 0,
            };
        if (i !== void 0)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: void 0,
                json: i,
                text: void 0,
            };
    }
}
function tu(e, t) {
    return t
        ? {
              state: "loading",
              location: e,
              formMethod: t.formMethod,
              formAction: t.formAction,
              formEncType: t.formEncType,
              formData: t.formData,
              json: t.json,
              text: t.text,
          }
        : {
              state: "loading",
              location: e,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
              json: void 0,
              text: void 0,
          };
}
function nx(e, t) {
    return {
        state: "submitting",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
    };
}
function Ga(e, t) {
    return e
        ? {
              state: "loading",
              formMethod: e.formMethod,
              formAction: e.formAction,
              formEncType: e.formEncType,
              formData: e.formData,
              json: e.json,
              text: e.text,
              data: t,
          }
        : {
              state: "loading",
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
              json: void 0,
              text: void 0,
              data: t,
          };
}
function rx(e, t) {
    return {
        state: "submitting",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t ? t.data : void 0,
    };
}
function In(e) {
    return {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: e,
    };
}
function ax(e, t) {
    try {
        let n = e.sessionStorage.getItem(lg);
        if (n) {
            let r = JSON.parse(n);
            for (let [a, o] of Object.entries(r || {}))
                o && Array.isArray(o) && t.set(a, new Set(o || []));
        }
    } catch {}
}
function ox(e, t) {
    if (t.size > 0) {
        let n = {};
        for (let [r, a] of t) n[r] = [...a];
        try {
            e.sessionStorage.setItem(lg, JSON.stringify(n));
        } catch (r) {
            Ca(
                !1,
                "Failed to save applied view transitions in sessionStorage (" +
                    r +
                    ")."
            );
        }
    }
}
/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ds() {
    return (
        (Ds = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                  }
                  return e;
              }),
        Ds.apply(this, arguments)
    );
}
const rl = x.createContext(null),
    fg = x.createContext(null),
    al = x.createContext(null),
    Ed = x.createContext(null),
    Yr = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    pg = x.createContext(null);
function ol() {
    return x.useContext(Ed) != null;
}
function il() {
    return ol() || ie(!1), x.useContext(Ed).location;
}
function hg(e) {
    x.useContext(al).static || x.useLayoutEffect(e);
}
function Xo() {
    let { isDataRoute: e } = x.useContext(Yr);
    return e ? wx() : ix();
}
function ix() {
    ol() || ie(!1);
    let e = x.useContext(rl),
        { basename: t, future: n, navigator: r } = x.useContext(al),
        { matches: a } = x.useContext(Yr),
        { pathname: o } = il(),
        i = JSON.stringify(rg(a, n.v7_relativeSplatPath)),
        s = x.useRef(!1);
    return (
        hg(() => {
            s.current = !0;
        }),
        x.useCallback(
            function (u, c) {
                if ((c === void 0 && (c = {}), !s.current)) return;
                if (typeof u == "number") {
                    r.go(u);
                    return;
                }
                let d = ag(u, JSON.parse(i), o, c.relative === "path");
                e == null &&
                    t !== "/" &&
                    (d.pathname = d.pathname === "/" ? t : Zn([t, d.pathname])),
                    (c.replace ? r.replace : r.push)(d, c.state, c);
            },
            [t, r, i, o, e]
        )
    );
}
const sx = x.createContext(null);
function lx(e) {
    let t = x.useContext(Yr).outlet;
    return t && x.createElement(sx.Provider, { value: e }, t);
}
function ux(e, t, n, r) {
    ol() || ie(!1);
    let { navigator: a } = x.useContext(al),
        { matches: o } = x.useContext(Yr),
        i = o[o.length - 1],
        s = i ? i.params : {};
    i && i.pathname;
    let l = i ? i.pathnameBase : "/";
    i && i.route;
    let u = il(),
        c;
    c = u;
    let d = c.pathname || "/",
        p = d;
    if (l !== "/") {
        let w = l.replace(/^\//, "").split("/");
        p = "/" + d.replace(/^\//, "").split("/").slice(w.length).join("/");
    }
    let v = ia(e, { pathname: p });
    return hx(
        v &&
            v.map((w) =>
                Object.assign({}, w, {
                    params: Object.assign({}, s, w.params),
                    pathname: Zn([
                        l,
                        a.encodeLocation
                            ? a.encodeLocation(w.pathname).pathname
                            : w.pathname,
                    ]),
                    pathnameBase:
                        w.pathnameBase === "/"
                            ? l
                            : Zn([
                                  l,
                                  a.encodeLocation
                                      ? a.encodeLocation(w.pathnameBase)
                                            .pathname
                                      : w.pathnameBase,
                              ]),
                })
            ),
        o,
        n,
        r
    );
}
function cx() {
    let e = yx(),
        t = og(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        a = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
    return x.createElement(
        x.Fragment,
        null,
        x.createElement("h2", null, "Unexpected Application Error!"),
        x.createElement("h3", { style: { fontStyle: "italic" } }, t),
        n ? x.createElement("pre", { style: a }, n) : null,
        null
    );
}
const dx = x.createElement(cx, null);
class fx extends x.Component {
    constructor(t) {
        super(t),
            (this.state = {
                location: t.location,
                revalidation: t.revalidation,
                error: t.error,
            });
    }
    static getDerivedStateFromError(t) {
        return { error: t };
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location ||
            (n.revalidation !== "idle" && t.revalidation === "idle")
            ? {
                  error: t.error,
                  location: t.location,
                  revalidation: t.revalidation,
              }
            : {
                  error: t.error !== void 0 ? t.error : n.error,
                  location: n.location,
                  revalidation: t.revalidation || n.revalidation,
              };
    }
    componentDidCatch(t, n) {
        console.error(
            "React Router caught the following error during render",
            t,
            n
        );
    }
    render() {
        return this.state.error !== void 0
            ? x.createElement(
                  Yr.Provider,
                  { value: this.props.routeContext },
                  x.createElement(pg.Provider, {
                      value: this.state.error,
                      children: this.props.component,
                  })
              )
            : this.props.children;
    }
}
function px(e) {
    let { routeContext: t, match: n, children: r } = e,
        a = x.useContext(rl);
    return (
        a &&
            a.static &&
            a.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (a.staticContext._deepestRenderedBoundaryId = n.route.id),
        x.createElement(Yr.Provider, { value: t }, r)
    );
}
function hx(e, t, n, r) {
    var a;
    if (
        (t === void 0 && (t = []),
        n === void 0 && (n = null),
        r === void 0 && (r = null),
        e == null)
    ) {
        var o;
        if ((o = n) != null && o.errors) e = n.matches;
        else return null;
    }
    let i = e,
        s = (a = n) == null ? void 0 : a.errors;
    if (s != null) {
        let c = i.findIndex(
            (d) => d.route.id && (s == null ? void 0 : s[d.route.id])
        );
        c >= 0 || ie(!1), (i = i.slice(0, Math.min(i.length, c + 1)));
    }
    let l = !1,
        u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < i.length; c++) {
            let d = i[c];
            if (
                ((d.route.HydrateFallback || d.route.hydrateFallbackElement) &&
                    (u = c),
                d.route.id)
            ) {
                let { loaderData: p, errors: v } = n,
                    g =
                        d.route.loader &&
                        p[d.route.id] === void 0 &&
                        (!v || v[d.route.id] === void 0);
                if (d.route.lazy || g) {
                    (l = !0), u >= 0 ? (i = i.slice(0, u + 1)) : (i = [i[0]]);
                    break;
                }
            }
        }
    return i.reduceRight((c, d, p) => {
        let v,
            g = !1,
            w = null,
            k = null;
        n &&
            ((v = s && d.route.id ? s[d.route.id] : void 0),
            (w = d.route.errorElement || dx),
            l &&
                (u < 0 && p === 0
                    ? (xx("route-fallback"), (g = !0), (k = null))
                    : u === p &&
                      ((g = !0),
                      (k = d.route.hydrateFallbackElement || null))));
        let h = t.concat(i.slice(0, p + 1)),
            m = () => {
                let y;
                return (
                    v
                        ? (y = w)
                        : g
                        ? (y = k)
                        : d.route.Component
                        ? (y = x.createElement(d.route.Component, null))
                        : d.route.element
                        ? (y = d.route.element)
                        : (y = c),
                    x.createElement(px, {
                        match: d,
                        routeContext: {
                            outlet: c,
                            matches: h,
                            isDataRoute: n != null,
                        },
                        children: y,
                    })
                );
            };
        return n && (d.route.ErrorBoundary || d.route.errorElement || p === 0)
            ? x.createElement(fx, {
                  location: n.location,
                  revalidation: n.revalidation,
                  component: w,
                  error: v,
                  children: m(),
                  routeContext: { outlet: null, matches: h, isDataRoute: !0 },
              })
            : m();
    }, null);
}
var mg = (function (e) {
        return (
            (e.UseBlocker = "useBlocker"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            e
        );
    })(mg || {}),
    ks = (function (e) {
        return (
            (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            (e.UseRouteId = "useRouteId"),
            e
        );
    })(ks || {});
function mx(e) {
    let t = x.useContext(rl);
    return t || ie(!1), t;
}
function vx(e) {
    let t = x.useContext(fg);
    return t || ie(!1), t;
}
function gx(e) {
    let t = x.useContext(Yr);
    return t || ie(!1), t;
}
function vg(e) {
    let t = gx(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || ie(!1), n.route.id;
}
function yx() {
    var e;
    let t = x.useContext(pg),
        n = vx(ks.UseRouteError),
        r = vg(ks.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function wx() {
    let { router: e } = mx(mg.UseNavigateStable),
        t = vg(ks.UseNavigateStable),
        n = x.useRef(!1);
    return (
        hg(() => {
            n.current = !0;
        }),
        x.useCallback(
            function (a, o) {
                o === void 0 && (o = {}),
                    n.current &&
                        (typeof a == "number"
                            ? e.navigate(a)
                            : e.navigate(a, Ds({ fromRouteId: t }, o)));
            },
            [e, t]
        )
    );
}
const Tp = {};
function xx(e, t, n) {
    Tp[e] || (Tp[e] = !0);
}
function Dx(e) {
    return lx(e.context);
}
function kx(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: a = Fe.Pop,
        navigator: o,
        static: i = !1,
        future: s,
    } = e;
    ol() && ie(!1);
    let l = t.replace(/^\/*/, "/"),
        u = x.useMemo(
            () => ({
                basename: l,
                navigator: o,
                static: i,
                future: Ds({ v7_relativeSplatPath: !1 }, s),
            }),
            [l, s, o, i]
        );
    typeof r == "string" && (r = cr(r));
    let {
            pathname: c = "/",
            search: d = "",
            hash: p = "",
            state: v = null,
            key: g = "default",
        } = r,
        w = x.useMemo(() => {
            let k = qo(c, l);
            return k == null
                ? null
                : {
                      location: {
                          pathname: k,
                          search: d,
                          hash: p,
                          state: v,
                          key: g,
                      },
                      navigationType: a,
                  };
        }, [l, c, d, p, v, g, a]);
    return w == null
        ? null
        : x.createElement(
              al.Provider,
              { value: u },
              x.createElement(Ed.Provider, { children: n, value: w })
          );
}
new Promise(() => {});
function Sx(e) {
    let t = {
        hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
    };
    return (
        e.Component &&
            Object.assign(t, {
                element: x.createElement(e.Component),
                Component: void 0,
            }),
        e.HydrateFallback &&
            Object.assign(t, {
                hydrateFallbackElement: x.createElement(e.HydrateFallback),
                HydrateFallback: void 0,
            }),
        e.ErrorBoundary &&
            Object.assign(t, {
                errorElement: x.createElement(e.ErrorBoundary),
                ErrorBoundary: void 0,
            }),
        t
    );
}
/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ss() {
    return (
        (Ss = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                  }
                  return e;
              }),
        Ss.apply(this, arguments)
    );
}
const Ex = "6";
try {
    window.__reactRouterVersion = Ex;
} catch {}
function Cx(e, t) {
    return Qw({
        basename: void 0,
        future: Ss({}, void 0, { v7_prependBasename: !0 }),
        history: vw({ window: void 0 }),
        hydrationData: _x(),
        routes: e,
        mapRouteProperties: Sx,
        window: void 0,
    }).initialize();
}
function _x() {
    var e;
    let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
    return t && t.errors && (t = Ss({}, t, { errors: bx(t.errors) })), t;
}
function bx(e) {
    if (!e) return null;
    let t = Object.entries(e),
        n = {};
    for (let [r, a] of t)
        if (a && a.__type === "RouteErrorResponse")
            n[r] = new kd(a.status, a.statusText, a.data, a.internal === !0);
        else if (a && a.__type === "Error") {
            if (a.__subType) {
                let o = window[a.__subType];
                if (typeof o == "function")
                    try {
                        let i = new o(a.message);
                        (i.stack = ""), (n[r] = i);
                    } catch {}
            }
            if (n[r] == null) {
                let o = new Error(a.message);
                (o.stack = ""), (n[r] = o);
            }
        } else n[r] = a;
    return n;
}
const Nx = x.createContext({ isTransitioning: !1 }),
    Px = x.createContext(new Map()),
    Mx = "startTransition",
    Rp = Kh[Mx],
    Tx = "flushSync",
    Op = mw[Tx];
function Rx(e) {
    Rp ? Rp(e) : e();
}
function Ja(e) {
    Op ? Op(e) : e();
}
class Ox {
    constructor() {
        (this.status = "pending"),
            (this.promise = new Promise((t, n) => {
                (this.resolve = (r) => {
                    this.status === "pending" &&
                        ((this.status = "resolved"), t(r));
                }),
                    (this.reject = (r) => {
                        this.status === "pending" &&
                            ((this.status = "rejected"), n(r));
                    });
            }));
    }
}
function Lx(e) {
    let { fallbackElement: t, router: n, future: r } = e,
        [a, o] = x.useState(n.state),
        [i, s] = x.useState(),
        [l, u] = x.useState({ isTransitioning: !1 }),
        [c, d] = x.useState(),
        [p, v] = x.useState(),
        [g, w] = x.useState(),
        k = x.useRef(new Map()),
        { v7_startTransition: h } = r || {},
        m = x.useCallback(
            (S) => {
                h ? Rx(S) : S();
            },
            [h]
        ),
        y = x.useCallback(
            (S, b) => {
                let {
                    deletedFetchers: R,
                    unstable_flushSync: F,
                    unstable_viewTransitionOpts: z,
                } = b;
                R.forEach((X) => k.current.delete(X)),
                    S.fetchers.forEach((X, j) => {
                        X.data !== void 0 && k.current.set(j, X.data);
                    });
                let K =
                    n.window == null ||
                    typeof n.window.document.startViewTransition != "function";
                if (!z || K) {
                    F ? Ja(() => o(S)) : m(() => o(S));
                    return;
                }
                if (F) {
                    Ja(() => {
                        p && (c && c.resolve(), p.skipTransition()),
                            u({
                                isTransitioning: !0,
                                flushSync: !0,
                                currentLocation: z.currentLocation,
                                nextLocation: z.nextLocation,
                            });
                    });
                    let X = n.window.document.startViewTransition(() => {
                        Ja(() => o(S));
                    });
                    X.finished.finally(() => {
                        Ja(() => {
                            d(void 0),
                                v(void 0),
                                s(void 0),
                                u({ isTransitioning: !1 });
                        });
                    }),
                        Ja(() => v(X));
                    return;
                }
                p
                    ? (c && c.resolve(),
                      p.skipTransition(),
                      w({
                          state: S,
                          currentLocation: z.currentLocation,
                          nextLocation: z.nextLocation,
                      }))
                    : (s(S),
                      u({
                          isTransitioning: !0,
                          flushSync: !1,
                          currentLocation: z.currentLocation,
                          nextLocation: z.nextLocation,
                      }));
            },
            [n.window, p, c, k, m]
        );
    x.useLayoutEffect(() => n.subscribe(y), [n, y]),
        x.useEffect(() => {
            l.isTransitioning && !l.flushSync && d(new Ox());
        }, [l]),
        x.useEffect(() => {
            if (c && i && n.window) {
                let S = i,
                    b = c.promise,
                    R = n.window.document.startViewTransition(async () => {
                        m(() => o(S)), await b;
                    });
                R.finished.finally(() => {
                    d(void 0), v(void 0), s(void 0), u({ isTransitioning: !1 });
                }),
                    v(R);
            }
        }, [m, i, c, n.window]),
        x.useEffect(() => {
            c && i && a.location.key === i.location.key && c.resolve();
        }, [c, p, a.location, i]),
        x.useEffect(() => {
            !l.isTransitioning &&
                g &&
                (s(g.state),
                u({
                    isTransitioning: !0,
                    flushSync: !1,
                    currentLocation: g.currentLocation,
                    nextLocation: g.nextLocation,
                }),
                w(void 0));
        }, [l.isTransitioning, g]),
        x.useEffect(() => {}, []);
    let C = x.useMemo(
            () => ({
                createHref: n.createHref,
                encodeLocation: n.encodeLocation,
                go: (S) => n.navigate(S),
                push: (S, b, R) =>
                    n.navigate(S, {
                        state: b,
                        preventScrollReset:
                            R == null ? void 0 : R.preventScrollReset,
                    }),
                replace: (S, b, R) =>
                    n.navigate(S, {
                        replace: !0,
                        state: b,
                        preventScrollReset:
                            R == null ? void 0 : R.preventScrollReset,
                    }),
            }),
            [n]
        ),
        P = n.basename || "/",
        D = x.useMemo(
            () => ({ router: n, navigator: C, static: !1, basename: P }),
            [n, C, P]
        );
    return x.createElement(
        x.Fragment,
        null,
        x.createElement(
            rl.Provider,
            { value: D },
            x.createElement(
                fg.Provider,
                { value: a },
                x.createElement(
                    Px.Provider,
                    { value: k.current },
                    x.createElement(
                        Nx.Provider,
                        { value: l },
                        x.createElement(
                            kx,
                            {
                                basename: P,
                                location: a.location,
                                navigationType: a.historyAction,
                                navigator: C,
                                future: {
                                    v7_relativeSplatPath:
                                        n.future.v7_relativeSplatPath,
                                },
                            },
                            a.initialized || n.future.v7_partialHydration
                                ? x.createElement(jx, {
                                      routes: n.routes,
                                      future: n.future,
                                      state: a,
                                  })
                                : t
                        )
                    )
                )
            )
        ),
        null
    );
}
function jx(e) {
    let { routes: t, future: n, state: r } = e;
    return ux(t, void 0, r, n);
}
var Lp;
(function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
        (e.UseSubmit = "useSubmit"),
        (e.UseSubmitFetcher = "useSubmitFetcher"),
        (e.UseFetcher = "useFetcher"),
        (e.useViewTransitionState = "useViewTransitionState");
})(Lp || (Lp = {}));
var jp;
(function (e) {
    (e.UseFetcher = "useFetcher"),
        (e.UseFetchers = "useFetchers"),
        (e.UseScrollRestoration = "useScrollRestoration");
})(jp || (jp = {}));
function gg(e, t) {
    return function () {
        return e.apply(t, arguments);
    };
}
const { toString: Ix } = Object.prototype,
    { getPrototypeOf: Cd } = Object,
    sl = ((e) => (t) => {
        const n = Ix.call(t);
        return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    Kt = (e) => ((e = e.toLowerCase()), (t) => sl(t) === e),
    ll = (e) => (t) => typeof t === e,
    { isArray: ja } = Array,
    Ao = ll("undefined");
function Fx(e) {
    return (
        e !== null &&
        !Ao(e) &&
        e.constructor !== null &&
        !Ao(e.constructor) &&
        Lt(e.constructor.isBuffer) &&
        e.constructor.isBuffer(e)
    );
}
const yg = Kt("ArrayBuffer");
function Ax(e) {
    let t;
    return (
        typeof ArrayBuffer < "u" && ArrayBuffer.isView
            ? (t = ArrayBuffer.isView(e))
            : (t = e && e.buffer && yg(e.buffer)),
        t
    );
}
const Wx = ll("string"),
    Lt = ll("function"),
    wg = ll("number"),
    ul = (e) => e !== null && typeof e == "object",
    Yx = (e) => e === !0 || e === !1,
    Bi = (e) => {
        if (sl(e) !== "object") return !1;
        const t = Cd(e);
        return (
            (t === null ||
                t === Object.prototype ||
                Object.getPrototypeOf(t) === null) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
        );
    },
    Ux = Kt("Date"),
    zx = Kt("File"),
    Hx = Kt("Blob"),
    Bx = Kt("FileList"),
    Vx = (e) => ul(e) && Lt(e.pipe),
    $x = (e) => {
        let t;
        return (
            e &&
            ((typeof FormData == "function" && e instanceof FormData) ||
                (Lt(e.append) &&
                    ((t = sl(e)) === "formdata" ||
                        (t === "object" &&
                            Lt(e.toString) &&
                            e.toString() === "[object FormData]"))))
        );
    },
    Qx = Kt("URLSearchParams"),
    [Kx, qx, Xx, Gx] = ["ReadableStream", "Request", "Response", "Headers"].map(
        Kt
    ),
    Jx = (e) =>
        e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Go(e, t, { allOwnKeys: n = !1 } = {}) {
    if (e === null || typeof e > "u") return;
    let r, a;
    if ((typeof e != "object" && (e = [e]), ja(e)))
        for (r = 0, a = e.length; r < a; r++) t.call(null, e[r], r, e);
    else {
        const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
            i = o.length;
        let s;
        for (r = 0; r < i; r++) (s = o[r]), t.call(null, e[s], s, e);
    }
}
function xg(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length,
        a;
    for (; r-- > 0; ) if (((a = n[r]), t === a.toLowerCase())) return a;
    return null;
}
const Dg =
        typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
            ? self
            : typeof window < "u"
            ? window
            : global,
    kg = (e) => !Ao(e) && e !== Dg;
function dc() {
    const { caseless: e } = (kg(this) && this) || {},
        t = {},
        n = (r, a) => {
            const o = (e && xg(t, a)) || a;
            Bi(t[o]) && Bi(r)
                ? (t[o] = dc(t[o], r))
                : Bi(r)
                ? (t[o] = dc({}, r))
                : ja(r)
                ? (t[o] = r.slice())
                : (t[o] = r);
        };
    for (let r = 0, a = arguments.length; r < a; r++)
        arguments[r] && Go(arguments[r], n);
    return t;
}
const Zx = (e, t, n, { allOwnKeys: r } = {}) => (
        Go(
            t,
            (a, o) => {
                n && Lt(a) ? (e[o] = gg(a, n)) : (e[o] = a);
            },
            { allOwnKeys: r }
        ),
        e
    ),
    eD = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    tD = (e, t, n, r) => {
        (e.prototype = Object.create(t.prototype, r)),
            (e.prototype.constructor = e),
            Object.defineProperty(e, "super", { value: t.prototype }),
            n && Object.assign(e.prototype, n);
    },
    nD = (e, t, n, r) => {
        let a, o, i;
        const s = {};
        if (((t = t || {}), e == null)) return t;
        do {
            for (a = Object.getOwnPropertyNames(e), o = a.length; o-- > 0; )
                (i = a[o]),
                    (!r || r(i, e, t)) && !s[i] && ((t[i] = e[i]), (s[i] = !0));
            e = n !== !1 && Cd(e);
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t;
    },
    rD = (e, t, n) => {
        (e = String(e)),
            (n === void 0 || n > e.length) && (n = e.length),
            (n -= t.length);
        const r = e.indexOf(t, n);
        return r !== -1 && r === n;
    },
    aD = (e) => {
        if (!e) return null;
        if (ja(e)) return e;
        let t = e.length;
        if (!wg(t)) return null;
        const n = new Array(t);
        for (; t-- > 0; ) n[t] = e[t];
        return n;
    },
    oD = (
        (e) => (t) =>
            e && t instanceof e
    )(typeof Uint8Array < "u" && Cd(Uint8Array)),
    iD = (e, t) => {
        const r = (e && e[Symbol.iterator]).call(e);
        let a;
        for (; (a = r.next()) && !a.done; ) {
            const o = a.value;
            t.call(e, o[0], o[1]);
        }
    },
    sD = (e, t) => {
        let n;
        const r = [];
        for (; (n = e.exec(t)) !== null; ) r.push(n);
        return r;
    },
    lD = Kt("HTMLFormElement"),
    uD = (e) =>
        e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, a) {
            return r.toUpperCase() + a;
        }),
    Ip = (
        ({ hasOwnProperty: e }) =>
        (t, n) =>
            e.call(t, n)
    )(Object.prototype),
    cD = Kt("RegExp"),
    Sg = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e),
            r = {};
        Go(n, (a, o) => {
            let i;
            (i = t(a, o, e)) !== !1 && (r[o] = i || a);
        }),
            Object.defineProperties(e, r);
    },
    dD = (e) => {
        Sg(e, (t, n) => {
            if (Lt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
                return !1;
            const r = e[n];
            if (Lt(r)) {
                if (((t.enumerable = !1), "writable" in t)) {
                    t.writable = !1;
                    return;
                }
                t.set ||
                    (t.set = () => {
                        throw Error(
                            "Can not rewrite read-only method '" + n + "'"
                        );
                    });
            }
        });
    },
    fD = (e, t) => {
        const n = {},
            r = (a) => {
                a.forEach((o) => {
                    n[o] = !0;
                });
            };
        return ja(e) ? r(e) : r(String(e).split(t)), n;
    },
    pD = () => {},
    hD = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
    nu = "abcdefghijklmnopqrstuvwxyz",
    Fp = "0123456789",
    Eg = { DIGIT: Fp, ALPHA: nu, ALPHA_DIGIT: nu + nu.toUpperCase() + Fp },
    mD = (e = 16, t = Eg.ALPHA_DIGIT) => {
        let n = "";
        const { length: r } = t;
        for (; e--; ) n += t[(Math.random() * r) | 0];
        return n;
    };
function vD(e) {
    return !!(
        e &&
        Lt(e.append) &&
        e[Symbol.toStringTag] === "FormData" &&
        e[Symbol.iterator]
    );
}
const gD = (e) => {
        const t = new Array(10),
            n = (r, a) => {
                if (ul(r)) {
                    if (t.indexOf(r) >= 0) return;
                    if (!("toJSON" in r)) {
                        t[a] = r;
                        const o = ja(r) ? [] : {};
                        return (
                            Go(r, (i, s) => {
                                const l = n(i, a + 1);
                                !Ao(l) && (o[s] = l);
                            }),
                            (t[a] = void 0),
                            o
                        );
                    }
                }
                return r;
            };
        return n(e, 0);
    },
    yD = Kt("AsyncFunction"),
    wD = (e) => e && (ul(e) || Lt(e)) && Lt(e.then) && Lt(e.catch),
    N = {
        isArray: ja,
        isArrayBuffer: yg,
        isBuffer: Fx,
        isFormData: $x,
        isArrayBufferView: Ax,
        isString: Wx,
        isNumber: wg,
        isBoolean: Yx,
        isObject: ul,
        isPlainObject: Bi,
        isReadableStream: Kx,
        isRequest: qx,
        isResponse: Xx,
        isHeaders: Gx,
        isUndefined: Ao,
        isDate: Ux,
        isFile: zx,
        isBlob: Hx,
        isRegExp: cD,
        isFunction: Lt,
        isStream: Vx,
        isURLSearchParams: Qx,
        isTypedArray: oD,
        isFileList: Bx,
        forEach: Go,
        merge: dc,
        extend: Zx,
        trim: Jx,
        stripBOM: eD,
        inherits: tD,
        toFlatObject: nD,
        kindOf: sl,
        kindOfTest: Kt,
        endsWith: rD,
        toArray: aD,
        forEachEntry: iD,
        matchAll: sD,
        isHTMLForm: lD,
        hasOwnProperty: Ip,
        hasOwnProp: Ip,
        reduceDescriptors: Sg,
        freezeMethods: dD,
        toObjectSet: fD,
        toCamelCase: uD,
        noop: pD,
        toFiniteNumber: hD,
        findKey: xg,
        global: Dg,
        isContextDefined: kg,
        ALPHABET: Eg,
        generateString: mD,
        isSpecCompliantForm: vD,
        toJSONObject: gD,
        isAsyncFn: yD,
        isThenable: wD,
    };
function ee(e, t, n, r, a) {
    Error.call(this),
        Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
        (this.message = e),
        (this.name = "AxiosError"),
        t && (this.code = t),
        n && (this.config = n),
        r && (this.request = r),
        a && (this.response = a);
}
N.inherits(ee, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: N.toJSONObject(this.config),
            code: this.code,
            status:
                this.response && this.response.status
                    ? this.response.status
                    : null,
        };
    },
});
const Cg = ee.prototype,
    _g = {};
[
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
].forEach((e) => {
    _g[e] = { value: e };
});
Object.defineProperties(ee, _g);
Object.defineProperty(Cg, "isAxiosError", { value: !0 });
ee.from = (e, t, n, r, a, o) => {
    const i = Object.create(Cg);
    return (
        N.toFlatObject(
            e,
            i,
            function (l) {
                return l !== Error.prototype;
            },
            (s) => s !== "isAxiosError"
        ),
        ee.call(i, e.message, t, n, r, a),
        (i.cause = e),
        (i.name = e.name),
        o && Object.assign(i, o),
        i
    );
};
const xD = null;
function fc(e) {
    return N.isPlainObject(e) || N.isArray(e);
}
function bg(e) {
    return N.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ap(e, t, n) {
    return e
        ? e
              .concat(t)
              .map(function (a, o) {
                  return (a = bg(a)), !n && o ? "[" + a + "]" : a;
              })
              .join(n ? "." : "")
        : t;
}
function DD(e) {
    return N.isArray(e) && !e.some(fc);
}
const kD = N.toFlatObject(N, {}, null, function (t) {
    return /^is[A-Z]/.test(t);
});
function cl(e, t, n) {
    if (!N.isObject(e)) throw new TypeError("target must be an object");
    (t = t || new FormData()),
        (n = N.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (w, k) {
                return !N.isUndefined(k[w]);
            }
        ));
    const r = n.metaTokens,
        a = n.visitor || c,
        o = n.dots,
        i = n.indexes,
        l = (n.Blob || (typeof Blob < "u" && Blob)) && N.isSpecCompliantForm(t);
    if (!N.isFunction(a)) throw new TypeError("visitor must be a function");
    function u(g) {
        if (g === null) return "";
        if (N.isDate(g)) return g.toISOString();
        if (!l && N.isBlob(g))
            throw new ee("Blob is not supported. Use a Buffer instead.");
        return N.isArrayBuffer(g) || N.isTypedArray(g)
            ? l && typeof Blob == "function"
                ? new Blob([g])
                : Buffer.from(g)
            : g;
    }
    function c(g, w, k) {
        let h = g;
        if (g && !k && typeof g == "object") {
            if (N.endsWith(w, "{}"))
                (w = r ? w : w.slice(0, -2)), (g = JSON.stringify(g));
            else if (
                (N.isArray(g) && DD(g)) ||
                ((N.isFileList(g) || N.endsWith(w, "[]")) && (h = N.toArray(g)))
            )
                return (
                    (w = bg(w)),
                    h.forEach(function (y, C) {
                        !(N.isUndefined(y) || y === null) &&
                            t.append(
                                i === !0
                                    ? Ap([w], C, o)
                                    : i === null
                                    ? w
                                    : w + "[]",
                                u(y)
                            );
                    }),
                    !1
                );
        }
        return fc(g) ? !0 : (t.append(Ap(k, w, o), u(g)), !1);
    }
    const d = [],
        p = Object.assign(kD, {
            defaultVisitor: c,
            convertValue: u,
            isVisitable: fc,
        });
    function v(g, w) {
        if (!N.isUndefined(g)) {
            if (d.indexOf(g) !== -1)
                throw Error("Circular reference detected in " + w.join("."));
            d.push(g),
                N.forEach(g, function (h, m) {
                    (!(N.isUndefined(h) || h === null) &&
                        a.call(t, h, N.isString(m) ? m.trim() : m, w, p)) ===
                        !0 && v(h, w ? w.concat(m) : [m]);
                }),
                d.pop();
        }
    }
    if (!N.isObject(e)) throw new TypeError("data must be an object");
    return v(e), t;
}
function Wp(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0",
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
        return t[r];
    });
}
function _d(e, t) {
    (this._pairs = []), e && cl(e, this, t);
}
const Ng = _d.prototype;
Ng.append = function (t, n) {
    this._pairs.push([t, n]);
};
Ng.toString = function (t) {
    const n = t
        ? function (r) {
              return t.call(this, r, Wp);
          }
        : Wp;
    return this._pairs
        .map(function (a) {
            return n(a[0]) + "=" + n(a[1]);
        }, "")
        .join("&");
};
function SD(e) {
    return encodeURIComponent(e)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
}
function Pg(e, t, n) {
    if (!t) return e;
    const r = (n && n.encode) || SD,
        a = n && n.serialize;
    let o;
    if (
        (a
            ? (o = a(t, n))
            : (o = N.isURLSearchParams(t)
                  ? t.toString()
                  : new _d(t, n).toString(r)),
        o)
    ) {
        const i = e.indexOf("#");
        i !== -1 && (e = e.slice(0, i)),
            (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
    }
    return e;
}
class Yp {
    constructor() {
        this.handlers = [];
    }
    use(t, n, r) {
        return (
            this.handlers.push({
                fulfilled: t,
                rejected: n,
                synchronous: r ? r.synchronous : !1,
                runWhen: r ? r.runWhen : null,
            }),
            this.handlers.length - 1
        );
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null);
    }
    clear() {
        this.handlers && (this.handlers = []);
    }
    forEach(t) {
        N.forEach(this.handlers, function (r) {
            r !== null && t(r);
        });
    }
}
const Mg = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
    },
    ED = typeof URLSearchParams < "u" ? URLSearchParams : _d,
    CD = typeof FormData < "u" ? FormData : null,
    _D = typeof Blob < "u" ? Blob : null,
    bD = {
        isBrowser: !0,
        classes: { URLSearchParams: ED, FormData: CD, Blob: _D },
        protocols: ["http", "https", "file", "blob", "url", "data"],
    },
    bd = typeof window < "u" && typeof document < "u",
    ND = ((e) => bd && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
        typeof navigator < "u" && navigator.product
    ),
    PD =
        typeof WorkerGlobalScope < "u" &&
        self instanceof WorkerGlobalScope &&
        typeof self.importScripts == "function",
    MD = (bd && window.location.href) || "http://localhost",
    TD = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                hasBrowserEnv: bd,
                hasStandardBrowserEnv: ND,
                hasStandardBrowserWebWorkerEnv: PD,
                origin: MD,
            },
            Symbol.toStringTag,
            { value: "Module" }
        )
    ),
    Vt = { ...TD, ...bD };
function RD(e, t) {
    return cl(
        e,
        new Vt.classes.URLSearchParams(),
        Object.assign(
            {
                visitor: function (n, r, a, o) {
                    return Vt.isNode && N.isBuffer(n)
                        ? (this.append(r, n.toString("base64")), !1)
                        : o.defaultVisitor.apply(this, arguments);
                },
            },
            t
        )
    );
}
function OD(e) {
    return N.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
        t[0] === "[]" ? "" : t[1] || t[0]
    );
}
function LD(e) {
    const t = {},
        n = Object.keys(e);
    let r;
    const a = n.length;
    let o;
    for (r = 0; r < a; r++) (o = n[r]), (t[o] = e[o]);
    return t;
}
function Tg(e) {
    function t(n, r, a, o) {
        let i = n[o++];
        if (i === "__proto__") return !0;
        const s = Number.isFinite(+i),
            l = o >= n.length;
        return (
            (i = !i && N.isArray(a) ? a.length : i),
            l
                ? (N.hasOwnProp(a, i) ? (a[i] = [a[i], r]) : (a[i] = r), !s)
                : ((!a[i] || !N.isObject(a[i])) && (a[i] = []),
                  t(n, r, a[i], o) && N.isArray(a[i]) && (a[i] = LD(a[i])),
                  !s)
        );
    }
    if (N.isFormData(e) && N.isFunction(e.entries)) {
        const n = {};
        return (
            N.forEachEntry(e, (r, a) => {
                t(OD(r), a, n, 0);
            }),
            n
        );
    }
    return null;
}
function jD(e, t, n) {
    if (N.isString(e))
        try {
            return (t || JSON.parse)(e), N.trim(e);
        } catch (r) {
            if (r.name !== "SyntaxError") throw r;
        }
    return (n || JSON.stringify)(e);
}
const Jo = {
    transitional: Mg,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [
        function (t, n) {
            const r = n.getContentType() || "",
                a = r.indexOf("application/json") > -1,
                o = N.isObject(t);
            if (
                (o && N.isHTMLForm(t) && (t = new FormData(t)), N.isFormData(t))
            )
                return a ? JSON.stringify(Tg(t)) : t;
            if (
                N.isArrayBuffer(t) ||
                N.isBuffer(t) ||
                N.isStream(t) ||
                N.isFile(t) ||
                N.isBlob(t) ||
                N.isReadableStream(t)
            )
                return t;
            if (N.isArrayBufferView(t)) return t.buffer;
            if (N.isURLSearchParams(t))
                return (
                    n.setContentType(
                        "application/x-www-form-urlencoded;charset=utf-8",
                        !1
                    ),
                    t.toString()
                );
            let s;
            if (o) {
                if (r.indexOf("application/x-www-form-urlencoded") > -1)
                    return RD(t, this.formSerializer).toString();
                if (
                    (s = N.isFileList(t)) ||
                    r.indexOf("multipart/form-data") > -1
                ) {
                    const l = this.env && this.env.FormData;
                    return cl(
                        s ? { "files[]": t } : t,
                        l && new l(),
                        this.formSerializer
                    );
                }
            }
            return o || a
                ? (n.setContentType("application/json", !1), jD(t))
                : t;
        },
    ],
    transformResponse: [
        function (t) {
            const n = this.transitional || Jo.transitional,
                r = n && n.forcedJSONParsing,
                a = this.responseType === "json";
            if (N.isResponse(t) || N.isReadableStream(t)) return t;
            if (t && N.isString(t) && ((r && !this.responseType) || a)) {
                const i = !(n && n.silentJSONParsing) && a;
                try {
                    return JSON.parse(t);
                } catch (s) {
                    if (i)
                        throw s.name === "SyntaxError"
                            ? ee.from(
                                  s,
                                  ee.ERR_BAD_RESPONSE,
                                  this,
                                  null,
                                  this.response
                              )
                            : s;
                }
            }
            return t;
        },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: Vt.classes.FormData, Blob: Vt.classes.Blob },
    validateStatus: function (t) {
        return t >= 200 && t < 300;
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0,
        },
    },
};
N.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
    Jo.headers[e] = {};
});
const ID = N.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
    ]),
    FD = (e) => {
        const t = {};
        let n, r, a;
        return (
            e &&
                e
                    .split(
                        `
`
                    )
                    .forEach(function (i) {
                        (a = i.indexOf(":")),
                            (n = i.substring(0, a).trim().toLowerCase()),
                            (r = i.substring(a + 1).trim()),
                            !(!n || (t[n] && ID[n])) &&
                                (n === "set-cookie"
                                    ? t[n]
                                        ? t[n].push(r)
                                        : (t[n] = [r])
                                    : (t[n] = t[n] ? t[n] + ", " + r : r));
                    }),
            t
        );
    },
    Up = Symbol("internals");
function Za(e) {
    return e && String(e).trim().toLowerCase();
}
function Vi(e) {
    return e === !1 || e == null ? e : N.isArray(e) ? e.map(Vi) : String(e);
}
function AD(e) {
    const t = Object.create(null),
        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; (r = n.exec(e)); ) t[r[1]] = r[2];
    return t;
}
const WD = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ru(e, t, n, r, a) {
    if (N.isFunction(r)) return r.call(this, t, n);
    if ((a && (t = n), !!N.isString(t))) {
        if (N.isString(r)) return t.indexOf(r) !== -1;
        if (N.isRegExp(r)) return r.test(t);
    }
}
function YD(e) {
    return e
        .trim()
        .toLowerCase()
        .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function UD(e, t) {
    const n = N.toCamelCase(" " + t);
    ["get", "set", "has"].forEach((r) => {
        Object.defineProperty(e, r + n, {
            value: function (a, o, i) {
                return this[r].call(this, t, a, o, i);
            },
            configurable: !0,
        });
    });
}
class mt {
    constructor(t) {
        t && this.set(t);
    }
    set(t, n, r) {
        const a = this;
        function o(s, l, u) {
            const c = Za(l);
            if (!c) throw new Error("header name must be a non-empty string");
            const d = N.findKey(a, c);
            (!d ||
                a[d] === void 0 ||
                u === !0 ||
                (u === void 0 && a[d] !== !1)) &&
                (a[d || l] = Vi(s));
        }
        const i = (s, l) => N.forEach(s, (u, c) => o(u, c, l));
        if (N.isPlainObject(t) || t instanceof this.constructor) i(t, n);
        else if (N.isString(t) && (t = t.trim()) && !WD(t)) i(FD(t), n);
        else if (N.isHeaders(t)) for (const [s, l] of t.entries()) o(l, s, r);
        else t != null && o(n, t, r);
        return this;
    }
    get(t, n) {
        if (((t = Za(t)), t)) {
            const r = N.findKey(this, t);
            if (r) {
                const a = this[r];
                if (!n) return a;
                if (n === !0) return AD(a);
                if (N.isFunction(n)) return n.call(this, a, r);
                if (N.isRegExp(n)) return n.exec(a);
                throw new TypeError("parser must be boolean|regexp|function");
            }
        }
    }
    has(t, n) {
        if (((t = Za(t)), t)) {
            const r = N.findKey(this, t);
            return !!(
                r &&
                this[r] !== void 0 &&
                (!n || ru(this, this[r], r, n))
            );
        }
        return !1;
    }
    delete(t, n) {
        const r = this;
        let a = !1;
        function o(i) {
            if (((i = Za(i)), i)) {
                const s = N.findKey(r, i);
                s && (!n || ru(r, r[s], s, n)) && (delete r[s], (a = !0));
            }
        }
        return N.isArray(t) ? t.forEach(o) : o(t), a;
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length,
            a = !1;
        for (; r--; ) {
            const o = n[r];
            (!t || ru(this, this[o], o, t, !0)) && (delete this[o], (a = !0));
        }
        return a;
    }
    normalize(t) {
        const n = this,
            r = {};
        return (
            N.forEach(this, (a, o) => {
                const i = N.findKey(r, o);
                if (i) {
                    (n[i] = Vi(a)), delete n[o];
                    return;
                }
                const s = t ? YD(o) : String(o).trim();
                s !== o && delete n[o], (n[s] = Vi(a)), (r[s] = !0);
            }),
            this
        );
    }
    concat(...t) {
        return this.constructor.concat(this, ...t);
    }
    toJSON(t) {
        const n = Object.create(null);
        return (
            N.forEach(this, (r, a) => {
                r != null &&
                    r !== !1 &&
                    (n[a] = t && N.isArray(r) ? r.join(", ") : r);
            }),
            n
        );
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n)
            .join(`
`);
    }
    get [Symbol.toStringTag]() {
        return "AxiosHeaders";
    }
    static from(t) {
        return t instanceof this ? t : new this(t);
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach((a) => r.set(a)), r;
    }
    static accessor(t) {
        const r = (this[Up] = this[Up] = { accessors: {} }).accessors,
            a = this.prototype;
        function o(i) {
            const s = Za(i);
            r[s] || (UD(a, i), (r[s] = !0));
        }
        return N.isArray(t) ? t.forEach(o) : o(t), this;
    }
}
mt.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
]);
N.reduceDescriptors(mt.prototype, ({ value: e }, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(r) {
            this[n] = r;
        },
    };
});
N.freezeMethods(mt);
function au(e, t) {
    const n = this || Jo,
        r = t || n,
        a = mt.from(r.headers);
    let o = r.data;
    return (
        N.forEach(e, function (s) {
            o = s.call(n, o, a.normalize(), t ? t.status : void 0);
        }),
        a.normalize(),
        o
    );
}
function Rg(e) {
    return !!(e && e.__CANCEL__);
}
function Ia(e, t, n) {
    ee.call(this, e ?? "canceled", ee.ERR_CANCELED, t, n),
        (this.name = "CanceledError");
}
N.inherits(Ia, ee, { __CANCEL__: !0 });
function Og(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status)
        ? e(n)
        : t(
              new ee(
                  "Request failed with status code " + n.status,
                  [ee.ERR_BAD_REQUEST, ee.ERR_BAD_RESPONSE][
                      Math.floor(n.status / 100) - 4
                  ],
                  n.config,
                  n.request,
                  n
              )
          );
}
function zD(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return (t && t[1]) || "";
}
function HD(e, t) {
    e = e || 10;
    const n = new Array(e),
        r = new Array(e);
    let a = 0,
        o = 0,
        i;
    return (
        (t = t !== void 0 ? t : 1e3),
        function (l) {
            const u = Date.now(),
                c = r[o];
            i || (i = u), (n[a] = l), (r[a] = u);
            let d = o,
                p = 0;
            for (; d !== a; ) (p += n[d++]), (d = d % e);
            if (((a = (a + 1) % e), a === o && (o = (o + 1) % e), u - i < t))
                return;
            const v = c && u - c;
            return v ? Math.round((p * 1e3) / v) : void 0;
        }
    );
}
function BD(e, t) {
    let n = 0;
    const r = 1e3 / t;
    let a = null;
    return function () {
        const i = this === !0,
            s = Date.now();
        if (i || s - n > r)
            return (
                a && (clearTimeout(a), (a = null)),
                (n = s),
                e.apply(null, arguments)
            );
        a ||
            (a = setTimeout(
                () => ((a = null), (n = Date.now()), e.apply(null, arguments)),
                r - (s - n)
            ));
    };
}
const Es = (e, t, n = 3) => {
        let r = 0;
        const a = HD(50, 250);
        return BD((o) => {
            const i = o.loaded,
                s = o.lengthComputable ? o.total : void 0,
                l = i - r,
                u = a(l),
                c = i <= s;
            r = i;
            const d = {
                loaded: i,
                total: s,
                progress: s ? i / s : void 0,
                bytes: l,
                rate: u || void 0,
                estimated: u && s && c ? (s - i) / u : void 0,
                event: o,
                lengthComputable: s != null,
            };
            (d[t ? "download" : "upload"] = !0), e(d);
        }, n);
    },
    VD = Vt.hasStandardBrowserEnv
        ? (function () {
              const t = /(msie|trident)/i.test(navigator.userAgent),
                  n = document.createElement("a");
              let r;
              function a(o) {
                  let i = o;
                  return (
                      t && (n.setAttribute("href", i), (i = n.href)),
                      n.setAttribute("href", i),
                      {
                          href: n.href,
                          protocol: n.protocol
                              ? n.protocol.replace(/:$/, "")
                              : "",
                          host: n.host,
                          search: n.search ? n.search.replace(/^\?/, "") : "",
                          hash: n.hash ? n.hash.replace(/^#/, "") : "",
                          hostname: n.hostname,
                          port: n.port,
                          pathname:
                              n.pathname.charAt(0) === "/"
                                  ? n.pathname
                                  : "/" + n.pathname,
                      }
                  );
              }
              return (
                  (r = a(window.location.href)),
                  function (i) {
                      const s = N.isString(i) ? a(i) : i;
                      return s.protocol === r.protocol && s.host === r.host;
                  }
              );
          })()
        : (function () {
              return function () {
                  return !0;
              };
          })(),
    $D = Vt.hasStandardBrowserEnv
        ? {
              write(e, t, n, r, a, o) {
                  const i = [e + "=" + encodeURIComponent(t)];
                  N.isNumber(n) &&
                      i.push("expires=" + new Date(n).toGMTString()),
                      N.isString(r) && i.push("path=" + r),
                      N.isString(a) && i.push("domain=" + a),
                      o === !0 && i.push("secure"),
                      (document.cookie = i.join("; "));
              },
              read(e) {
                  const t = document.cookie.match(
                      new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
                  );
                  return t ? decodeURIComponent(t[3]) : null;
              },
              remove(e) {
                  this.write(e, "", Date.now() - 864e5);
              },
          }
        : {
              write() {},
              read() {
                  return null;
              },
              remove() {},
          };
function QD(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function KD(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Lg(e, t) {
    return e && !QD(t) ? KD(e, t) : t;
}
const zp = (e) => (e instanceof mt ? { ...e } : e);
function Lr(e, t) {
    t = t || {};
    const n = {};
    function r(u, c, d) {
        return N.isPlainObject(u) && N.isPlainObject(c)
            ? N.merge.call({ caseless: d }, u, c)
            : N.isPlainObject(c)
            ? N.merge({}, c)
            : N.isArray(c)
            ? c.slice()
            : c;
    }
    function a(u, c, d) {
        if (N.isUndefined(c)) {
            if (!N.isUndefined(u)) return r(void 0, u, d);
        } else return r(u, c, d);
    }
    function o(u, c) {
        if (!N.isUndefined(c)) return r(void 0, c);
    }
    function i(u, c) {
        if (N.isUndefined(c)) {
            if (!N.isUndefined(u)) return r(void 0, u);
        } else return r(void 0, c);
    }
    function s(u, c, d) {
        if (d in t) return r(u, c);
        if (d in e) return r(void 0, u);
    }
    const l = {
        url: o,
        method: o,
        data: o,
        baseURL: i,
        transformRequest: i,
        transformResponse: i,
        paramsSerializer: i,
        timeout: i,
        timeoutMessage: i,
        withCredentials: i,
        withXSRFToken: i,
        adapter: i,
        responseType: i,
        xsrfCookieName: i,
        xsrfHeaderName: i,
        onUploadProgress: i,
        onDownloadProgress: i,
        decompress: i,
        maxContentLength: i,
        maxBodyLength: i,
        beforeRedirect: i,
        transport: i,
        httpAgent: i,
        httpsAgent: i,
        cancelToken: i,
        socketPath: i,
        responseEncoding: i,
        validateStatus: s,
        headers: (u, c) => a(zp(u), zp(c), !0),
    };
    return (
        N.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
            const d = l[c] || a,
                p = d(e[c], t[c], c);
            (N.isUndefined(p) && d !== s) || (n[c] = p);
        }),
        n
    );
}
const jg = (e) => {
        const t = Lr({}, e);
        let {
            data: n,
            withXSRFToken: r,
            xsrfHeaderName: a,
            xsrfCookieName: o,
            headers: i,
            auth: s,
        } = t;
        (t.headers = i = mt.from(i)),
            (t.url = Pg(Lg(t.baseURL, t.url), e.params, e.paramsSerializer)),
            s &&
                i.set(
                    "Authorization",
                    "Basic " +
                        btoa(
                            (s.username || "") +
                                ":" +
                                (s.password
                                    ? unescape(encodeURIComponent(s.password))
                                    : "")
                        )
                );
        let l;
        if (N.isFormData(n)) {
            if (Vt.hasStandardBrowserEnv || Vt.hasStandardBrowserWebWorkerEnv)
                i.setContentType(void 0);
            else if ((l = i.getContentType()) !== !1) {
                const [u, ...c] = l
                    ? l
                          .split(";")
                          .map((d) => d.trim())
                          .filter(Boolean)
                    : [];
                i.setContentType([u || "multipart/form-data", ...c].join("; "));
            }
        }
        if (
            Vt.hasStandardBrowserEnv &&
            (r && N.isFunction(r) && (r = r(t)), r || (r !== !1 && VD(t.url)))
        ) {
            const u = a && o && $D.read(o);
            u && i.set(a, u);
        }
        return t;
    },
    qD = typeof XMLHttpRequest < "u",
    XD =
        qD &&
        function (e) {
            return new Promise(function (n, r) {
                const a = jg(e);
                let o = a.data;
                const i = mt.from(a.headers).normalize();
                let { responseType: s } = a,
                    l;
                function u() {
                    a.cancelToken && a.cancelToken.unsubscribe(l),
                        a.signal && a.signal.removeEventListener("abort", l);
                }
                let c = new XMLHttpRequest();
                c.open(a.method.toUpperCase(), a.url, !0),
                    (c.timeout = a.timeout);
                function d() {
                    if (!c) return;
                    const v = mt.from(
                            "getAllResponseHeaders" in c &&
                                c.getAllResponseHeaders()
                        ),
                        w = {
                            data:
                                !s || s === "text" || s === "json"
                                    ? c.responseText
                                    : c.response,
                            status: c.status,
                            statusText: c.statusText,
                            headers: v,
                            config: e,
                            request: c,
                        };
                    Og(
                        function (h) {
                            n(h), u();
                        },
                        function (h) {
                            r(h), u();
                        },
                        w
                    ),
                        (c = null);
                }
                "onloadend" in c
                    ? (c.onloadend = d)
                    : (c.onreadystatechange = function () {
                          !c ||
                              c.readyState !== 4 ||
                              (c.status === 0 &&
                                  !(
                                      c.responseURL &&
                                      c.responseURL.indexOf("file:") === 0
                                  )) ||
                              setTimeout(d);
                      }),
                    (c.onabort = function () {
                        c &&
                            (r(
                                new ee("Request aborted", ee.ECONNABORTED, a, c)
                            ),
                            (c = null));
                    }),
                    (c.onerror = function () {
                        r(new ee("Network Error", ee.ERR_NETWORK, a, c)),
                            (c = null);
                    }),
                    (c.ontimeout = function () {
                        let g = a.timeout
                            ? "timeout of " + a.timeout + "ms exceeded"
                            : "timeout exceeded";
                        const w = a.transitional || Mg;
                        a.timeoutErrorMessage && (g = a.timeoutErrorMessage),
                            r(
                                new ee(
                                    g,
                                    w.clarifyTimeoutError
                                        ? ee.ETIMEDOUT
                                        : ee.ECONNABORTED,
                                    a,
                                    c
                                )
                            ),
                            (c = null);
                    }),
                    o === void 0 && i.setContentType(null),
                    "setRequestHeader" in c &&
                        N.forEach(i.toJSON(), function (g, w) {
                            c.setRequestHeader(w, g);
                        }),
                    N.isUndefined(a.withCredentials) ||
                        (c.withCredentials = !!a.withCredentials),
                    s && s !== "json" && (c.responseType = a.responseType),
                    typeof a.onDownloadProgress == "function" &&
                        c.addEventListener(
                            "progress",
                            Es(a.onDownloadProgress, !0)
                        ),
                    typeof a.onUploadProgress == "function" &&
                        c.upload &&
                        c.upload.addEventListener(
                            "progress",
                            Es(a.onUploadProgress)
                        ),
                    (a.cancelToken || a.signal) &&
                        ((l = (v) => {
                            c &&
                                (r(!v || v.type ? new Ia(null, e, c) : v),
                                c.abort(),
                                (c = null));
                        }),
                        a.cancelToken && a.cancelToken.subscribe(l),
                        a.signal &&
                            (a.signal.aborted
                                ? l()
                                : a.signal.addEventListener("abort", l)));
                const p = zD(a.url);
                if (p && Vt.protocols.indexOf(p) === -1) {
                    r(
                        new ee(
                            "Unsupported protocol " + p + ":",
                            ee.ERR_BAD_REQUEST,
                            e
                        )
                    );
                    return;
                }
                c.send(o || null);
            });
        },
    GD = (e, t) => {
        let n = new AbortController(),
            r;
        const a = function (l) {
            if (!r) {
                (r = !0), i();
                const u = l instanceof Error ? l : this.reason;
                n.abort(
                    u instanceof ee
                        ? u
                        : new Ia(u instanceof Error ? u.message : u)
                );
            }
        };
        let o =
            t &&
            setTimeout(() => {
                a(new ee(`timeout ${t} of ms exceeded`, ee.ETIMEDOUT));
            }, t);
        const i = () => {
            e &&
                (o && clearTimeout(o),
                (o = null),
                e.forEach((l) => {
                    l &&
                        (l.removeEventListener
                            ? l.removeEventListener("abort", a)
                            : l.unsubscribe(a));
                }),
                (e = null));
        };
        e.forEach(
            (l) => l && l.addEventListener && l.addEventListener("abort", a)
        );
        const { signal: s } = n;
        return (
            (s.unsubscribe = i),
            [
                s,
                () => {
                    o && clearTimeout(o), (o = null);
                },
            ]
        );
    },
    JD = function* (e, t) {
        let n = e.byteLength;
        if (!t || n < t) {
            yield e;
            return;
        }
        let r = 0,
            a;
        for (; r < n; ) (a = r + t), yield e.slice(r, a), (r = a);
    },
    ZD = async function* (e, t, n) {
        for await (const r of e)
            yield* JD(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
    },
    Hp = (e, t, n, r, a) => {
        const o = ZD(e, t, a);
        let i = 0;
        return new ReadableStream(
            {
                type: "bytes",
                async pull(s) {
                    const { done: l, value: u } = await o.next();
                    if (l) {
                        s.close(), r();
                        return;
                    }
                    let c = u.byteLength;
                    n && n((i += c)), s.enqueue(new Uint8Array(u));
                },
                cancel(s) {
                    return r(s), o.return();
                },
            },
            { highWaterMark: 2 }
        );
    },
    Bp = (e, t) => {
        const n = e != null;
        return (r) =>
            setTimeout(() => t({ lengthComputable: n, total: e, loaded: r }));
    },
    dl =
        typeof fetch == "function" &&
        typeof Request == "function" &&
        typeof Response == "function",
    Ig = dl && typeof ReadableStream == "function",
    pc =
        dl &&
        (typeof TextEncoder == "function"
            ? (
                  (e) => (t) =>
                      e.encode(t)
              )(new TextEncoder())
            : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
    ek =
        Ig &&
        (() => {
            let e = !1;
            const t = new Request(Vt.origin, {
                body: new ReadableStream(),
                method: "POST",
                get duplex() {
                    return (e = !0), "half";
                },
            }).headers.has("Content-Type");
            return e && !t;
        })(),
    Vp = 64 * 1024,
    hc =
        Ig &&
        !!(() => {
            try {
                return N.isReadableStream(new Response("").body);
            } catch {}
        })(),
    Cs = { stream: hc && ((e) => e.body) };
dl &&
    ((e) => {
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
            !Cs[t] &&
                (Cs[t] = N.isFunction(e[t])
                    ? (n) => n[t]()
                    : (n, r) => {
                          throw new ee(
                              `Response type '${t}' is not supported`,
                              ee.ERR_NOT_SUPPORT,
                              r
                          );
                      });
        });
    })(new Response());
const tk = async (e) => {
        if (e == null) return 0;
        if (N.isBlob(e)) return e.size;
        if (N.isSpecCompliantForm(e))
            return (await new Request(e).arrayBuffer()).byteLength;
        if (N.isArrayBufferView(e)) return e.byteLength;
        if ((N.isURLSearchParams(e) && (e = e + ""), N.isString(e)))
            return (await pc(e)).byteLength;
    },
    nk = async (e, t) => {
        const n = N.toFiniteNumber(e.getContentLength());
        return n ?? tk(t);
    },
    rk =
        dl &&
        (async (e) => {
            let {
                url: t,
                method: n,
                data: r,
                signal: a,
                cancelToken: o,
                timeout: i,
                onDownloadProgress: s,
                onUploadProgress: l,
                responseType: u,
                headers: c,
                withCredentials: d = "same-origin",
                fetchOptions: p,
            } = jg(e);
            u = u ? (u + "").toLowerCase() : "text";
            let [v, g] = a || o || i ? GD([a, o], i) : [],
                w,
                k;
            const h = () => {
                !w &&
                    setTimeout(() => {
                        v && v.unsubscribe();
                    }),
                    (w = !0);
            };
            let m;
            try {
                if (
                    l &&
                    ek &&
                    n !== "get" &&
                    n !== "head" &&
                    (m = await nk(c, r)) !== 0
                ) {
                    let D = new Request(t, {
                            method: "POST",
                            body: r,
                            duplex: "half",
                        }),
                        S;
                    N.isFormData(r) &&
                        (S = D.headers.get("content-type")) &&
                        c.setContentType(S),
                        D.body && (r = Hp(D.body, Vp, Bp(m, Es(l)), null, pc));
                }
                N.isString(d) || (d = d ? "cors" : "omit"),
                    (k = new Request(t, {
                        ...p,
                        signal: v,
                        method: n.toUpperCase(),
                        headers: c.normalize().toJSON(),
                        body: r,
                        duplex: "half",
                        withCredentials: d,
                    }));
                let y = await fetch(k);
                const C = hc && (u === "stream" || u === "response");
                if (hc && (s || C)) {
                    const D = {};
                    ["status", "statusText", "headers"].forEach((b) => {
                        D[b] = y[b];
                    });
                    const S = N.toFiniteNumber(y.headers.get("content-length"));
                    y = new Response(
                        Hp(y.body, Vp, s && Bp(S, Es(s, !0)), C && h, pc),
                        D
                    );
                }
                u = u || "text";
                let P = await Cs[N.findKey(Cs, u) || "text"](y, e);
                return (
                    !C && h(),
                    g && g(),
                    await new Promise((D, S) => {
                        Og(D, S, {
                            data: P,
                            headers: mt.from(y.headers),
                            status: y.status,
                            statusText: y.statusText,
                            config: e,
                            request: k,
                        });
                    })
                );
            } catch (y) {
                throw (
                    (h(),
                    y && y.name === "TypeError" && /fetch/i.test(y.message)
                        ? Object.assign(
                              new ee("Network Error", ee.ERR_NETWORK, e, k),
                              { cause: y.cause || y }
                          )
                        : ee.from(y, y && y.code, e, k))
                );
            }
        }),
    mc = { http: xD, xhr: XD, fetch: rk };
N.forEach(mc, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", { value: t });
        } catch {}
        Object.defineProperty(e, "adapterName", { value: t });
    }
});
const $p = (e) => `- ${e}`,
    ak = (e) => N.isFunction(e) || e === null || e === !1,
    Fg = {
        getAdapter: (e) => {
            e = N.isArray(e) ? e : [e];
            const { length: t } = e;
            let n, r;
            const a = {};
            for (let o = 0; o < t; o++) {
                n = e[o];
                let i;
                if (
                    ((r = n),
                    !ak(n) &&
                        ((r = mc[(i = String(n)).toLowerCase()]), r === void 0))
                )
                    throw new ee(`Unknown adapter '${i}'`);
                if (r) break;
                a[i || "#" + o] = r;
            }
            if (!r) {
                const o = Object.entries(a).map(
                    ([s, l]) =>
                        `adapter ${s} ` +
                        (l === !1
                            ? "is not supported by the environment"
                            : "is not available in the build")
                );
                let i = t
                    ? o.length > 1
                        ? `since :
` +
                          o.map($p).join(`
`)
                        : " " + $p(o[0])
                    : "as no adapter specified";
                throw new ee(
                    "There is no suitable adapter to dispatch the request " + i,
                    "ERR_NOT_SUPPORT"
                );
            }
            return r;
        },
        adapters: mc,
    };
function ou(e) {
    if (
        (e.cancelToken && e.cancelToken.throwIfRequested(),
        e.signal && e.signal.aborted)
    )
        throw new Ia(null, e);
}
function Qp(e) {
    return (
        ou(e),
        (e.headers = mt.from(e.headers)),
        (e.data = au.call(e, e.transformRequest)),
        ["post", "put", "patch"].indexOf(e.method) !== -1 &&
            e.headers.setContentType("application/x-www-form-urlencoded", !1),
        Fg.getAdapter(e.adapter || Jo.adapter)(e).then(
            function (r) {
                return (
                    ou(e),
                    (r.data = au.call(e, e.transformResponse, r)),
                    (r.headers = mt.from(r.headers)),
                    r
                );
            },
            function (r) {
                return (
                    Rg(r) ||
                        (ou(e),
                        r &&
                            r.response &&
                            ((r.response.data = au.call(
                                e,
                                e.transformResponse,
                                r.response
                            )),
                            (r.response.headers = mt.from(
                                r.response.headers
                            )))),
                    Promise.reject(r)
                );
            }
        )
    );
}
const Ag = "1.7.2",
    Nd = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (e, t) => {
        Nd[e] = function (r) {
            return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
        };
    }
);
const Kp = {};
Nd.transitional = function (t, n, r) {
    function a(o, i) {
        return (
            "[Axios v" +
            Ag +
            "] Transitional option '" +
            o +
            "'" +
            i +
            (r ? ". " + r : "")
        );
    }
    return (o, i, s) => {
        if (t === !1)
            throw new ee(
                a(i, " has been removed" + (n ? " in " + n : "")),
                ee.ERR_DEPRECATED
            );
        return (
            n &&
                !Kp[i] &&
                ((Kp[i] = !0),
                console.warn(
                    a(
                        i,
                        " has been deprecated since v" +
                            n +
                            " and will be removed in the near future"
                    )
                )),
            t ? t(o, i, s) : !0
        );
    };
};
function ok(e, t, n) {
    if (typeof e != "object")
        throw new ee("options must be an object", ee.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let a = r.length;
    for (; a-- > 0; ) {
        const o = r[a],
            i = t[o];
        if (i) {
            const s = e[o],
                l = s === void 0 || i(s, o, e);
            if (l !== !0)
                throw new ee(
                    "option " + o + " must be " + l,
                    ee.ERR_BAD_OPTION_VALUE
                );
            continue;
        }
        if (n !== !0) throw new ee("Unknown option " + o, ee.ERR_BAD_OPTION);
    }
}
const vc = { assertOptions: ok, validators: Nd },
    Ln = vc.validators;
class Cr {
    constructor(t) {
        (this.defaults = t),
            (this.interceptors = { request: new Yp(), response: new Yp() });
    }
    async request(t, n) {
        try {
            return await this._request(t, n);
        } catch (r) {
            if (r instanceof Error) {
                let a;
                Error.captureStackTrace
                    ? Error.captureStackTrace((a = {}))
                    : (a = new Error());
                const o = a.stack ? a.stack.replace(/^.+\n/, "") : "";
                try {
                    r.stack
                        ? o &&
                          !String(r.stack).endsWith(
                              o.replace(/^.+\n.+\n/, "")
                          ) &&
                          (r.stack +=
                              `
` + o)
                        : (r.stack = o);
                } catch {}
            }
            throw r;
        }
    }
    _request(t, n) {
        typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
            (n = Lr(this.defaults, n));
        const { transitional: r, paramsSerializer: a, headers: o } = n;
        r !== void 0 &&
            vc.assertOptions(
                r,
                {
                    silentJSONParsing: Ln.transitional(Ln.boolean),
                    forcedJSONParsing: Ln.transitional(Ln.boolean),
                    clarifyTimeoutError: Ln.transitional(Ln.boolean),
                },
                !1
            ),
            a != null &&
                (N.isFunction(a)
                    ? (n.paramsSerializer = { serialize: a })
                    : vc.assertOptions(
                          a,
                          { encode: Ln.function, serialize: Ln.function },
                          !0
                      )),
            (n.method = (
                n.method ||
                this.defaults.method ||
                "get"
            ).toLowerCase());
        let i = o && N.merge(o.common, o[n.method]);
        o &&
            N.forEach(
                ["delete", "get", "head", "post", "put", "patch", "common"],
                (g) => {
                    delete o[g];
                }
            ),
            (n.headers = mt.concat(i, o));
        const s = [];
        let l = !0;
        this.interceptors.request.forEach(function (w) {
            (typeof w.runWhen == "function" && w.runWhen(n) === !1) ||
                ((l = l && w.synchronous), s.unshift(w.fulfilled, w.rejected));
        });
        const u = [];
        this.interceptors.response.forEach(function (w) {
            u.push(w.fulfilled, w.rejected);
        });
        let c,
            d = 0,
            p;
        if (!l) {
            const g = [Qp.bind(this), void 0];
            for (
                g.unshift.apply(g, s),
                    g.push.apply(g, u),
                    p = g.length,
                    c = Promise.resolve(n);
                d < p;

            )
                c = c.then(g[d++], g[d++]);
            return c;
        }
        p = s.length;
        let v = n;
        for (d = 0; d < p; ) {
            const g = s[d++],
                w = s[d++];
            try {
                v = g(v);
            } catch (k) {
                w.call(this, k);
                break;
            }
        }
        try {
            c = Qp.call(this, v);
        } catch (g) {
            return Promise.reject(g);
        }
        for (d = 0, p = u.length; d < p; ) c = c.then(u[d++], u[d++]);
        return c;
    }
    getUri(t) {
        t = Lr(this.defaults, t);
        const n = Lg(t.baseURL, t.url);
        return Pg(n, t.params, t.paramsSerializer);
    }
}
N.forEach(["delete", "get", "head", "options"], function (t) {
    Cr.prototype[t] = function (n, r) {
        return this.request(
            Lr(r || {}, { method: t, url: n, data: (r || {}).data })
        );
    };
});
N.forEach(["post", "put", "patch"], function (t) {
    function n(r) {
        return function (o, i, s) {
            return this.request(
                Lr(s || {}, {
                    method: t,
                    headers: r ? { "Content-Type": "multipart/form-data" } : {},
                    url: o,
                    data: i,
                })
            );
        };
    }
    (Cr.prototype[t] = n()), (Cr.prototype[t + "Form"] = n(!0));
});
class Pd {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function (o) {
            n = o;
        });
        const r = this;
        this.promise.then((a) => {
            if (!r._listeners) return;
            let o = r._listeners.length;
            for (; o-- > 0; ) r._listeners[o](a);
            r._listeners = null;
        }),
            (this.promise.then = (a) => {
                let o;
                const i = new Promise((s) => {
                    r.subscribe(s), (o = s);
                }).then(a);
                return (
                    (i.cancel = function () {
                        r.unsubscribe(o);
                    }),
                    i
                );
            }),
            t(function (o, i, s) {
                r.reason || ((r.reason = new Ia(o, i, s)), n(r.reason));
            });
    }
    throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return;
        }
        this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
    }
    unsubscribe(t) {
        if (!this._listeners) return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1);
    }
    static source() {
        let t;
        return {
            token: new Pd(function (a) {
                t = a;
            }),
            cancel: t,
        };
    }
}
function ik(e) {
    return function (n) {
        return e.apply(null, n);
    };
}
function sk(e) {
    return N.isObject(e) && e.isAxiosError === !0;
}
const gc = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
};
Object.entries(gc).forEach(([e, t]) => {
    gc[t] = e;
});
function Wg(e) {
    const t = new Cr(e),
        n = gg(Cr.prototype.request, t);
    return (
        N.extend(n, Cr.prototype, t, { allOwnKeys: !0 }),
        N.extend(n, t, null, { allOwnKeys: !0 }),
        (n.create = function (a) {
            return Wg(Lr(e, a));
        }),
        n
    );
}
const ce = Wg(Jo);
ce.Axios = Cr;
ce.CanceledError = Ia;
ce.CancelToken = Pd;
ce.isCancel = Rg;
ce.VERSION = Ag;
ce.toFormData = cl;
ce.AxiosError = ee;
ce.Cancel = ce.CanceledError;
ce.all = function (t) {
    return Promise.all(t);
};
ce.spread = ik;
ce.isAxiosError = sk;
ce.mergeConfig = Lr;
ce.AxiosHeaders = mt;
ce.formToJSON = (e) => Tg(N.isHTMLForm(e) ? new FormData(e) : e);
ce.getAdapter = Fg.getAdapter;
ce.HttpStatusCode = gc;
ce.default = ce;
const Zo = "https://localhost:40000/location",
    lk = async (e, t) => {
        try {
            return (
                console.log(e, t),
                (await ce.post(Zo + "/create", { name: e, cctv: t })).data
            );
        } catch (n) {
            return (
                console.error(
                    "Error occured in services.locationService.create",
                    n
                ),
                { err: n }
            );
        }
    },
    Yg = async (e = "") => {
        try {
            return (await ce.post(Zo + "/read")).data;
        } catch (t) {
            return (
                console.error(
                    "Error occured in services.locationService.read",
                    t
                ),
                { err: t }
            );
        }
    },
    Md = async () => {
        try {
            return (await ce.post(Zo + "/read/cctv")).data;
        } catch (e) {
            return (
                console.error(
                    "Error occured in services.locationService.read",
                    e
                ),
                { err: e }
            );
        }
    },
    uk = async (e, t, n) => {
        try {
            return (
                await ce.post(Zo + "/update", { target: e, name: t, cctv: n })
            ).data;
        } catch (r) {
            return (
                console.error(
                    "Error occured in services.locationService.delete",
                    r
                ),
                { err: r }
            );
        }
    },
    ck = async (e) => {
        try {
            return (await ce.post(Zo + "/delete", { target: e })).data;
        } catch (t) {
            return (
                console.error(
                    "Error occured in services.locationService.delete",
                    t
                ),
                { err: t }
            );
        }
    },
    Ug = "https://localhost:40000/log",
    Td = async (e = [], t = [], n = []) => {
        try {
            return (
                console.log(e, t, n),
                (
                    await ce.post(Ug + "/read", {
                        datetime: e,
                        locations: t,
                        types: n,
                    })
                ).data
            );
        } catch (r) {
            return (
                console.error("Error occured in services.logService.read", r),
                { err: r }
            );
        }
    },
    Rd = async (e = -1) => {
        try {
            return (await ce.post(Ug + "/check", { target: e })).data;
        } catch (t) {
            return (
                console.error("Error occured in services.logService.check", t),
                { err: t }
            );
        }
    },
    dk = ({ toggle: e }) => {
        const t = Xo(),
            [n, r] = x.useState(!1),
            a = () => {
                r(!1),
                    setTimeout(() => {
                        e(!1);
                    }, 300);
            };
        return (
            x.useEffect(() => {
                r(!0);
            }, []),
            f.jsx("div", {
                id: "menuList",
                className: n && "active",
                onClick: (o) => {
                    o.stopPropagation(), a();
                },
                children: f.jsxs("div", {
                    className: n ? "menuWrap active" : "menuWrap",
                    children: [
                        f.jsx("p", {
                            className: "menuItem",
                            onClick: () => {
                                t("/");
                            },
                            children: "유치실 멀티뷰",
                        }),
                        f.jsx("p", {
                            className: "menuItem",
                            onClick: () => {
                                t("/event");
                            },
                            children: "이벤트 리스트",
                        }),
                        f.jsx("p", {
                            className: "menuItem",
                            onClick: () => {
                                t("/cctv");
                            },
                            children: "CCTV 관리",
                        }),
                        f.jsx("p", {
                            className: "menuItem",
                            onClick: () => {
                                t("/location");
                            },
                            children: "유치실 관리",
                        }),
                    ],
                }),
            })
        );
    },
    _s = (e = new Date()) => {
        let t = e.getFullYear(),
            n = e.getMonth() + 1,
            r = e.getDate(),
            a = e.getDay(),
            o = e.getHours(),
            i = e.getMinutes(),
            s = e.getSeconds();
        return {
            obj: e,
            str: `${t}. ${String(n).padStart(2, "0")}. ${String(r).padStart(
                2,
                "0"
            )} ${String(o).padStart(2, "0")}:${String(i).padStart(
                2,
                "0"
            )}:${String(s).padStart(2, "0")}`,
            year: t,
            month: n,
            date: r,
            day: a,
            hours: o,
            minutes: i,
            seconds: s,
        };
    },
    fk = (e) => {
        const t = new SpeechSynthesisUtterance();
        (t.lang = "ko-KR"),
            (t.text = e),
            (t.volume = 1),
            (t.rate = 1),
            (t.pitch = 0.6),
            window.speechSynthesis.speak(t);
    },
    pk =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAByCAMAAAC4A3VPAAAAPFBMVEVHcEz///////////////////////////////////////////////////////////////////////////+PybD1AAAAE3RSTlMA3QoS9APR/J51Hy7C6j1MsYlfwCDNHAAAA/NJREFUaN7tWtmS4joMjRfFjvfE//+vk0zTA7HlJUCg6t6oqp9AfbxIR0cyw3DZZZd916h2zmkGnwOcDOFR2HFmH0JUJv6YiNx/ZKOOxLvZ5RN7HOPO3PmQs9hDmtPvk/E9YhT+bMgppibPhgwZJDkbcswgxX8Q8gsH+4XwYeLjSfIFKsgI7/xNfoPWh0GbO6L/UJWGabRccEtm+kkh4r136qPiBwYYLvsfmXJ+kjLIeXHq8NVT5ZZZrjZ53UtwTo52I0chouAk+EMJxZZNKt9Y3I5Sd6zRmZT/R8/6AUlSO0TQjXPSgce8lgfdeT4md45WVmnA2ygQrygW6OG2iBvRlZaFF5win1qYQOeity2ueBKxaEI2oghkxZvjdQsWHivGZT2IfN0brc6u6rMFURVT1p0tcp/UxJZVMUnDWR67yH8ZWkmWlnt2tMB4GzGKUT0NKSxtylw8xXx/N5BaErXM9EFGW+qE56ar3CentunRm7WU8ANp7R7/gw1SZlxN9tG3pB87CkCV6U/rx6sJDFZvn2xD6FpWmVuYqCAw8sOJ6LeK2N8Rj07ud9p93RTyls4Y5lyozTPZCse9WiWMtE/N/RmE+zZQTFEcVVFaCUpTzioxN8uL7JMK+6Z23H1WO3QUM3QpBfkk5LBYDFOdCYkXJsLOhBw8OUjyr0Pm7NTQNG+AXHtT0Vvr3wU5YOQnWr34a5DAsH2KuvJ7DXLlEkzeFMjvTZAACMkLURsCvAq5guIkT0+ELOiVQM+EHCZ7ROG+BRK8OKD83gJZID+jToFUftmaW3Ao+bm3Q4IOPw3YyquK9GK+Agn/woasolKPnar6BUh46Fg2LqcoyecK93lItqMA81dtYqo6U5vPQyYNsi/1k2J6E6SSWKvIZIfafBKSZmdosvu9k/y+16lB7vXUQ0ECpDSbssJdMR/2CWHPUZW2++FxAcuH3xXRpaFwkxeEsEuCUNA0Gsl6ruoK905+ydHPtYb0t4lE+VQ2CVffLpvX2mgn0ivRdO2ksKAkqtjJ3ttBRqlONQTfU39Om8ISdGJhEvGKkp/gI8mWmzw/5ZlQmHDkVUq3BxO3q0z4cOnyEljzo4zock5LDXStFW0rgYUe3wBHR3h/J4cFXcVCe58W0UeyOZ8qK3O0va8zPh60B6bAMDcOaURFYD306h0PwFTFLMgxPK17+7phqZxtuRN1xX2S9o9YwJduRphK71sK97FnFgGqsOLqiBxgQdzI1DXlAaAzQbbYuhLIHnT41P/uBSqJ3BWwZ0BEvRwJFxs52zEsB9+Q2RK21+fNmZjZda+Wqe2XbE4/81s2AKZ/vNWx1cLt77LLLrvssssuu+w8+wM2GBhwPShSXQAAAABJRU5ErkJggg==";
/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hk = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    zg = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var mk = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vk = x.forwardRef(
    (
        {
            color: e = "currentColor",
            size: t = 24,
            strokeWidth: n = 2,
            absoluteStrokeWidth: r,
            className: a = "",
            children: o,
            iconNode: i,
            ...s
        },
        l
    ) =>
        x.createElement(
            "svg",
            {
                ref: l,
                ...mk,
                width: t,
                height: t,
                stroke: e,
                strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
                className: zg("lucide", a),
                ...s,
            },
            [
                ...i.map(([u, c]) => x.createElement(u, c)),
                ...(Array.isArray(o) ? o : [o]),
            ]
        )
);
/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nt = (e, t) => {
    const n = x.forwardRef(({ className: r, ...a }, o) =>
        x.createElement(vk, {
            ref: o,
            iconNode: t,
            className: zg(`lucide-${hk(e)}`, r),
            ...a,
        })
    );
    return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gk = nt("CalendarClock", [
    [
        "path",
        {
            d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",
            key: "1osxxc",
        },
    ],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M3 10h5", key: "r794hk" }],
    ["path", { d: "M17.5 17.5 16 16.3V14", key: "akvzfd" }],
    ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }],
]);
/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Od = nt("Cctv", [
    [
        "path",
        {
            d: "M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97",
            key: "ir91b5",
        },
    ],
    [
        "path",
        {
            d: "M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z",
            key: "jlp8i1",
        },
    ],
    ["path", { d: "M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15", key: "19bib8" }],
    ["path", { d: "M2 21v-4", key: "l40lih" }],
    ["path", { d: "M7 9h.01", key: "19b3jx" }],
]);
/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qp = nt("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yk = nt("ChevronLeft", [
    ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hg = nt("ChevronRight", [
    ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wk = nt("ChevronsLeft", [
    ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
    ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }],
]);
/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xk = nt("ChevronsRight", [
    ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
    ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }],
]);
/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ld = nt("DoorClosed", [
    ["path", { d: "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14", key: "36qu9e" }],
    ["path", { d: "M2 20h20", key: "owomy5" }],
    ["path", { d: "M14 12v.01", key: "xfcn54" }],
]);
/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dk = nt("MapPin", [
    [
        "path",
        { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kk = nt("Menu", [
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
    ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
    ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sk = nt("RotateCw", [
    [
        "path",
        {
            d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
            key: "1p45f6",
        },
    ],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
]);
/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ek = nt("Siren", [
    ["path", { d: "M7 18v-6a5 5 0 1 1 10 0v6", key: "pcx96s" }],
    [
        "path",
        {
            d: "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z",
            key: "1b4s83",
        },
    ],
    ["path", { d: "M21 12h1", key: "jtio3y" }],
    ["path", { d: "M18.5 4.5 18 5", key: "g5sp9y" }],
    ["path", { d: "M2 12h1", key: "1uaihz" }],
    ["path", { d: "M12 2v1", key: "11qlp1" }],
    ["path", { d: "m4.929 4.929.707.707", key: "1i51kw" }],
    ["path", { d: "M12 12v6", key: "3ahymv" }],
]);
/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ck = nt("SquareArrowOutUpRight", [
    [
        "path",
        {
            d: "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6",
            key: "y09zxi",
        },
    ],
    ["path", { d: "m21 3-9 9", key: "mpx6sq" }],
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
]);
/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _k = nt("SquareDashedMousePointer", [
    ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
    ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
    ["path", { d: "m12 12 4 10 1.7-4.3L22 16Z", key: "64ilsv" }],
    ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
    ["path", { d: "M9 3h1", key: "1yesri" }],
    ["path", { d: "M9 21h2", key: "1qve2z" }],
    ["path", { d: "M14 3h1", key: "1ec4yj" }],
    ["path", { d: "M3 9v1", key: "1r0deq" }],
    ["path", { d: "M21 9v2", key: "p14lih" }],
    ["path", { d: "M3 14v1", key: "vnatye" }],
]);
/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bk = nt("TableProperties", [
    ["path", { d: "M15 3v18", key: "14nvp0" }],
    [
        "rect",
        { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
    ],
    ["path", { d: "M21 9H3", key: "1338ky" }],
    ["path", { d: "M21 15H3", key: "9uk58r" }],
]);
/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jd = nt("TriangleAlert", [
        [
            "path",
            {
                d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
                key: "wmoenq",
            },
        ],
        ["path", { d: "M12 9v4", key: "juzpu7" }],
        ["path", { d: "M12 17h.01", key: "p32p05" }],
    ]),
    Nk = () => {
        const e = il(),
            t = Xo(),
            [n, r] = x.useState([]),
            [a, o] = x.useState(""),
            [i, s] = x.useState(!1),
            [l, u] = x.useState(!1),
            [c, d] = x.useState(""),
            p = async (g) => {
                const w = await Md();
                if (w != null) {
                    const k = parseInt(g.split("/")[2]);
                    let h = !1;
                    w.forEach((m) => {
                        if (m[0] == k)
                            return r(["유치실 멀티뷰", m[1]]), (h = !0), !0;
                    }),
                        h ||
                            (window.alert(`유효하지 않은 주소입니다.
유치실 멀티뷰 화면으로 돌아갑니다.`),
                            t("/"));
                } else
                    window.alert(`유효하지 않은 주소입니다.
유치실 멀티뷰 화면으로 돌아갑니다.`),
                        t("/");
            },
            v = () => {
                u(!1), Rd();
            };
        return (
            x.useEffect(() => {
                const g = e.pathname;
                g == "/"
                    ? r(["유치실 멀티뷰"])
                    : g.startsWith("/detail")
                    ? p(g)
                    : g == "/event"
                    ? r(["이벤트 리스트"])
                    : g == "/cctv" && r(["CCTV 관리"]);
            }, [e]),
            x.useEffect(() => {
                if (l) {
                    const g = c[0];
                    let w = `${g.location}에서 ${g.event}발생!`;
                    (w = `${w} ${w} ${w}`), fk(w);
                }
            }, [l]),
            f.jsxs("div", {
                id: "header",
                children: [
                    f.jsx("div", {
                        className: "logoWrap",
                        onClick: () => {
                            t("/");
                        },
                        children: f.jsx("img", {
                            className: "logo",
                            src: pk,
                            alt: "",
                        }),
                    }),
                    f.jsx("div", {
                        className: "timeWrap",
                        children: f.jsx("p", {
                            className: "time",
                            children: a,
                        }),
                    }),
                    f.jsx("div", {
                        className: "titleWrap",
                        children: n.map((g, w) =>
                            f.jsxs("p", {
                                className: "title",
                                children: [w != 0 && f.jsx(Hg, {}), g],
                            })
                        ),
                    }),
                    l &&
                        f.jsxs("div", {
                            className: "alarmWrap",
                            onClick: () => {
                                v();
                            },
                            children: [
                                f.jsx(Ek, {}),
                                c.map((g, w) =>
                                    f.jsxs("p", {
                                        children: [
                                            g.location,
                                            "에서 ",
                                            g.event,
                                            "발생",
                                        ],
                                    })
                                ),
                            ],
                        }),
                    f.jsx("div", {
                        className: "menuWrap",
                        onClick: () => {
                            s(!0);
                        },
                        children: f.jsx(kk, { className: "menu icon_32" }),
                    }),
                    i && f.jsx(dk, { toggle: s }),
                ],
            })
        );
    },
    Pk = () =>
        f.jsxs("div", {
            id: "rootLayout",
            children: [
                f.jsx("div", {
                    className: "headerContainer",
                    children: f.jsx(Nk, {}),
                }),
                f.jsx("div", {
                    className: "contentContainer",
                    children: f.jsx(Dx, {}),
                }),
            ],
        }),
    fl = ({ url: e }) => {
        const [t, n] = x.useState(e),
            [r, a] = x.useState(null),
            o = (i) => {
                let s = "https://localhost:40000/rtsp?url=";
                (s += btoa(i)),
                    console.log("url >>", i),
                    console.log("convUrl >>", s),
                    a(s);
            };
        return (
            x.useEffect(() => {
                o(t);
            }, []),
            f.jsx("div", {
                className: "streamView",
                children:
                    r == null
                        ? f.jsx("p", { children: "No Signal" })
                        : f.jsxs(f.Fragment, {
                              children: [
                                  f.jsx("span", { className: "spinner" }),
                                  f.jsx("img", { src: r, alt: "", srcset: "" }),
                              ],
                          }),
            })
        );
    },
    Mk = () => {
        const [e, t] = x.useState([]),
            n = async () => {
                const r = await Md();
                r != null ? t(r) : t([]);
            };
        return (
            x.useEffect(() => {
                n();
            }, []),
            f.jsx("div", {
                id: "multiview",
                children: e.map((r, a) =>
                    f.jsx(Tk, { id: r[0], name: r[1], url: r[4], event: !1 }, a)
                ),
            })
        );
    },
    Tk = ({
        id: e = 0,
        name: t = "유치실",
        url: n = "rtsp://",
        event: r = !1,
    }) => {
        const a = Xo(),
            [o, i] = x.useState(""),
            s = () => {
                const l = _s();
                i(l.str);
            };
        return (
            x.useEffect(() => {
                s();
                const l = setInterval(() => {
                    s();
                }, 1e3);
                return () => clearInterval(l);
            }, []),
            f.jsxs(
                "div",
                {
                    className: r ? "view active" : "view",
                    children: [
                        f.jsxs("div", {
                            className: "headerWrap",
                            children: [
                                f.jsxs("p", {
                                    className: "title",
                                    children: ["[ ", t, " ]"],
                                }),
                                r &&
                                    f.jsxs("p", {
                                        className: "event",
                                        children: ["[ 낙상 ", o, " ]"],
                                    }),
                                f.jsx("div", {
                                    className: "detailWrap",
                                    onClick: () => {
                                        a(`/detail/${e}`);
                                    },
                                    children: f.jsx(Ck, {}),
                                }),
                            ],
                        }),
                        f.jsx("div", {
                            className: "contentWrap",
                            children: f.jsx(fl, { url: n }),
                        }),
                    ],
                },
                "id"
            )
        );
    },
    Rk = () => {
        const e = Xo(),
            [t, n] = x.useState([]),
            r = async () => {
                const o = await Td();
                o != null ? n(o) : n([]);
            },
            a = async () => {
                (await Rd())
                    ? window.alert("전체 이벤트 내역을 확인하였습니다.")
                    : window.alert("전체 확인중 오류가 발생하였습니다.");
            };
        return (
            x.useEffect(() => {
                const o = setInterval(() => {
                    r();
                }, 1e3);
                return () => clearInterval(o);
            }, []),
            f.jsxs("div", {
                id: "entireEventList",
                children: [
                    f.jsxs("div", {
                        className: "headerWrap",
                        children: [
                            f.jsx("p", {
                                className: "title",
                                children: "전체 이벤트 내역",
                            }),
                            f.jsxs("div", {
                                className: "funcWrap",
                                children: [
                                    f.jsx("button", {
                                        className: "btn-2 btn-sm btn-round",
                                        onClick: () => {
                                            a();
                                        },
                                        children: "전체 확인",
                                    }),
                                    f.jsx("button", {
                                        className: "btn-2 btn-sm btn-round",
                                        onClick: () => {
                                            e("/event");
                                        },
                                        children: "전체 보기",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    f.jsx(
                        "div",
                        {
                            className: "eventWrap",
                            children: t.map((o, i) =>
                                f.jsx(Ok, { data: o }, i)
                            ),
                        },
                        t
                    ),
                ],
            })
        );
    },
    Ok = ({ data: e }) => {
        const [t, n] = x.useState(e),
            [r, a] = x.useState(!0),
            o = (i) => {
                let s = {};
                (s.id = i[0]), (s.type = i[1]), (s.location = i[2]);
                let l = new Date(i[3]),
                    u = _s(l);
                (s.occured = u.str), (s.checked = i[4]), a(!!i[4]), n(s);
            };
        return (
            x.useEffect(() => {
                o(e);
            }, []),
            f.jsxs("div", {
                className: r ? "eventItem" : "eventItem active",
                onClick: () => {
                    a(!0), Rd(t.id);
                },
                children: [
                    f.jsxs("div", {
                        className: "typeWrap dataWrap",
                        children: [
                            f.jsx("span", {
                                className: "title",
                                children: "이벤트 명",
                            }),
                            f.jsx("span", {
                                className: "content",
                                children: t.type,
                            }),
                        ],
                    }),
                    f.jsxs("div", {
                        className: "descWrap",
                        children: [
                            f.jsxs("div", {
                                className: "locatonWrap dataWrap",
                                children: [
                                    f.jsx("span", {
                                        className: "title",
                                        children: "발생 장소",
                                    }),
                                    f.jsx("span", {
                                        className: "content",
                                        children: t.location,
                                    }),
                                ],
                            }),
                            f.jsxs("div", {
                                className: "timeWrap dataWrap",
                                children: [
                                    f.jsx("span", {
                                        className: "title",
                                        children: "발생 시각",
                                    }),
                                    f.jsx("span", {
                                        className: "content",
                                        children: t.occured,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    Lk = () =>
        f.jsxs("div", {
            id: "multiViewPage",
            className: "page",
            children: [
                f.jsx("div", {
                    className: "multiviewContainer",
                    children: f.jsx(Mk, {}),
                }),
                f.jsx("div", {
                    className: "eventContainer",
                    children: f.jsx(Rk, {}),
                }),
            ],
        }),
    jk = "https://localhost:40000/snap",
    Ik = async (e) => {
        try {
            return (await ce.post(jk + "/read", { target: e })).data;
        } catch (t) {
            return (
                console.error(
                    "Error occured in services.snapService.snapRead",
                    t
                ),
                { err: t }
            );
        }
    },
    Fk = () =>
        f.jsx("svg", {
            viewBox: "0 0 512.000000 512.000000",
            preserveAspectRatio: "xMidYMid meet",
            children: f.jsxs("g", {
                transform:
                    "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
                stroke: "none",
                children: [
                    f.jsx("path", {
                        d: `M2472 4420 c-33 -15 -47 -29 -62 -62 -19 -41 -20 -70 -20 -601 0
-378 -4 -572 -11 -603 -7 -25 -27 -61 -48 -84 -20 -22 -148 -116 -286 -208
-137 -92 -258 -179 -269 -194 -11 -16 -21 -49 -23 -80 -5 -69 20 -112 84 -140
81 -36 97 -29 387 165 144 96 272 187 285 201 l25 26 25 -24 c14 -13 145 -103
291 -200 245 -163 270 -177 327 -186 77 -13 123 3 153 52 27 42 23 126 -7 166
-11 15 -132 102 -269 194 -137 91 -263 184 -281 205 -64 75 -63 69 -63 687 0
524 -2 564 -19 601 -22 48 -54 78 -100 94 -47 15 -69 14 -119 -9z`,
                    }),
                    f.jsx("path", {
                        d: `M1630 3789 c-539 -62 -976 -452 -1108 -988 l-26 -106 -3 -655 c-5
-735 -4 -742 64 -880 102 -208 348 -332 598 -302 97 12 359 83 464 126 147 60
322 199 417 332 62 86 120 213 151 329 24 93 26 115 27 315 1 244 -3 259 -76
300 -50 28 -143 25 -185 -6 -65 -49 -67 -58 -75 -272 -7 -221 -22 -295 -85
-414 -64 -122 -197 -246 -320 -299 -93 -40 -330 -99 -396 -99 -124 0 -227 77
-258 193 -6 24 -9 260 -7 670 l4 632 26 98 c44 160 118 293 230 412 155 167
363 269 600 296 118 13 144 7 182 -44 17 -23 21 -47 26 -165 6 -152 14 -176
73 -212 85 -52 203 1 237 106 20 58 7 274 -19 349 -54 150 -175 256 -326 284
-66 12 -106 12 -215 0z`,
                    }),
                    f.jsx("path", {
                        d: `M3260 3787 c-147 -35 -259 -136 -311 -282 -26 -75 -39 -291 -19 -349
35 -108 142 -154 247 -107 67 31 77 55 84 206 6 146 19 184 71 211 25 13 47
15 107 9 175 -15 359 -82 495 -179 142 -101 276 -278 336 -443 57 -160 60
-196 60 -857 0 -378 -4 -615 -10 -638 -18 -63 -70 -130 -125 -157 -83 -43
-160 -41 -339 9 -83 22 -179 55 -214 73 -173 86 -310 258 -357 447 -10 42 -18
133 -22 253 -6 209 -12 227 -82 274 -47 32 -135 32 -181 1 -69 -47 -75 -64
-78 -225 -10 -391 82 -643 313 -861 138 -130 254 -188 537 -268 152 -44 171
-47 283 -47 192 -1 269 30 398 156 55 53 84 91 111 147 67 138 68 146 63 880
-4 715 -3 700 -67 889 -81 242 -273 495 -482 638 -149 103 -355 186 -522 213
-112 17 -238 20 -296 7z`,
                    }),
                    f.jsx("path", {
                        d: `M1428 1960 c-38 -21 -78 -68 -78 -93 0 -37 -35 -56 -150 -82 -179
-40 -189 -44 -230 -82 -48 -43 -66 -95 -50 -151 5 -22 18 -46 28 -55 27 -24
87 -47 125 -47 52 0 335 68 394 95 153 69 234 236 173 356 -39 75 -131 101
-212 59z`,
                    }),
                    f.jsx("path", {
                        d: `M3560 1949 c-63 -25 -100 -85 -100 -162 0 -108 60 -208 152 -254 45
-23 376 -103 423 -103 30 0 100 33 133 63 31 29 45 87 32 136 -10 39 -70 104
-106 115 -46 13 -278 66 -293 66 -10 0 -26 21 -41 53 -40 84 -119 118 -200 86z`,
                    }),
                ],
            }),
        }),
    Ak = () =>
        f.jsx("svg", {
            viewBox: "0 0 512.000000 512.000000",
            preserveAspectRatio: "xMidYMid meet",
            children: f.jsxs("g", {
                transform:
                    "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
                stroke: "none",
                children: [
                    f.jsx("path", {
                        d: `M2377 4169 c-254 -29 -505 -122 -722 -267 -136 -91 -346 -301 -437
-437 -370 -554 -370 -1256 0 -1810 91 -136 301 -346 437 -437 554 -370 1256
-370 1810 0 136 91 346 301 437 437 370 554 370 1256 0 1810 -91 136 -301 346
-437 437 -323 215 -713 311 -1088 267z m405 -305 c292 -45 596 -218 784 -446
214 -258 316 -539 315 -863 0 -268 -68 -494 -215 -720 -198 -304 -524 -518
-881 -580 -121 -21 -325 -21 -450 0 -545 93 -985 533 -1080 1080 -21 117 -21
333 0 450 74 425 357 793 748 975 250 116 492 148 779 104z`,
                    }),
                    f.jsx("path", {
                        d: `M1855 3051 c-77 -35 -115 -95 -115 -178 0 -186 240 -263 348 -113
116 160 -55 373 -233 291z`,
                    }),
                    f.jsx("path", {
                        d: `M3103 3049 c-109 -54 -143 -190 -72 -289 84 -115 268 -102 329 24 36
75 24 164 -28 220 -60 64 -154 82 -229 45z`,
                    }),
                    f.jsx("path", {
                        d: `M2380 2394 c-197 -42 -433 -194 -460 -295 -28 -103 63 -202 168 -183
19 4 62 30 100 61 124 102 221 138 372 138 150 0 252 -38 370 -136 34 -28 76
-55 93 -60 105 -30 206 73 177 180 -19 73 -179 197 -330 256 -138 54 -344 71
-490 39z`,
                    }),
                ],
            }),
        }),
    Wk = () =>
        f.jsx("svg", {
            viewBox: "0 0 512.000000 512.000000",
            preserveAspectRatio: "xMidYMid meet",
            children: f.jsxs("g", {
                transform:
                    "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
                stroke: "none",
                children: [
                    f.jsx("path", {
                        d: `M1695 4414 c-173 -16 -338 -60 -466 -124 -340 -171 -611 -518 -713
-913 -128 -495 24 -1067 422 -1581 360 -465 958 -914 1432 -1074 149 -50 232
-49 390 4 216 72 496 229 755 424 616 463 1008 1026 1111 1595 26 142 26 418
0 535 -89 410 -333 767 -658 962 -426 255 -953 226 -1343 -73 l-65 -49 -70 53
c-198 151 -410 227 -670 240 -47 2 -103 3 -125 1z m175 -324 c123 -13 227 -42
314 -88 76 -40 182 -132 217 -189 35 -56 116 -79 186 -52 15 6 62 43 103 83
125 121 232 182 389 223 137 35 316 35 453 0 401 -104 700 -478 749 -936 40
-365 -117 -804 -422 -1186 -135 -170 -382 -407 -574 -552 -299 -225 -657 -406
-768 -389 -159 26 -488 206 -754 413 -650 506 -1000 1108 -970 1668 21 373
237 725 557 903 106 59 251 98 410 110 8 1 58 -3 110 -8z`,
                    }),
                    f.jsx("path", {
                        d: `M2159 3497 c-43 -22 -47 -28 -194 -320 l-150 -297 -286 0 c-279 0
-287 -1 -330 -23 -114 -59 -118 -247 -5 -298 38 -17 71 -19 399 -19 460 0 427
-14 561 243 43 81 81 147 85 147 4 0 98 -217 210 -482 112 -266 210 -493 217
-505 19 -30 85 -63 126 -63 63 0 86 26 293 338 l200 301 298 1 c277 0 301 1
337 20 62 32 85 73 85 152 0 72 -14 102 -69 142 -26 20 -42 21 -394 24 -314 3
-372 1 -407 -13 -36 -14 -53 -35 -175 -220 -74 -112 -138 -205 -142 -205 -3 0
-35 69 -71 153 -288 679 -371 870 -388 891 -45 57 -128 71 -200 33z`,
                    }),
                ],
            }),
        }),
    Yk = () =>
        f.jsx("svg", {
            viewBox: "0 0 512.000000 512.000000",
            preserveAspectRatio: "xMidYMid meet",
            children: f.jsxs("g", {
                transform:
                    "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
                stroke: "none",
                children: [
                    f.jsx("path", {
                        d: `M3295 4295 c-90 -20 -170 -50 -254 -97 -68 -38 -145 -111 -740 -703
-365 -363 -690 -693 -722 -732 -71 -89 -93 -134 -265 -548 l-137 -330 -137
-141 c-115 -117 -143 -153 -173 -215 -99 -205 -63 -430 95 -587 105 -106 213
-152 360 -152 172 0 248 39 434 222 l142 139 333 140 c411 171 419 175 494
222 41 27 274 252 723 700 365 364 678 682 697 707 126 171 193 434 165 652
-16 121 -41 202 -98 313 -37 73 -64 108 -142 185 -78 79 -112 105 -188 144
-134 68 -252 96 -406 95 -66 0 -148 -7 -181 -14z m281 -304 c246 -47 424 -257
424 -498 0 -96 -26 -193 -70 -267 -49 -80 -1364 -1389 -1441 -1434 -31 -18
-195 -92 -366 -166 l-311 -133 -160 160 -159 159 137 320 c88 203 155 345 184
387 29 42 281 301 708 727 611 609 668 664 731 694 113 55 215 71 323 51z
m-2146 -2566 l125 -125 -70 -71 c-80 -81 -113 -99 -186 -99 -97 0 -158 52
-167 141 -8 89 3 116 86 201 41 43 78 78 81 78 4 0 62 -56 131 -125z`,
                    }),
                    f.jsx("path", {
                        d: `M3394 3601 c-69 -51 -1413 -1405 -1423 -1434 -30 -80 3 -173 74 -207
51 -25 79 -25 130 -1 27 13 262 242 742 722 625 627 702 708 709 742 27 151
-118 263 -232 178z`,
                    }),
                ],
            }),
        }),
    Uk = ({ target: e }) => {
        const [t, n] = x.useState([]),
            r = async () => {
                const a = await Ik(e);
                console.log("response >>", a), n(a || []);
            };
        return (
            x.useEffect(() => {
                r();
                const a = setInterval(() => {
                    r();
                }, 5e3);
                return () => clearInterval(a);
            }, [e]),
            f.jsxs("div", {
                id: "overview",
                children: [
                    f.jsx("div", {
                        className: "headerWrap",
                        children: f.jsx("p", {
                            className: "title",
                            children: "객체 오버뷰",
                        }),
                    }),
                    f.jsx(
                        "div",
                        {
                            className: "viewWrap",
                            children:
                                t.length != 0
                                    ? f.jsx(f.Fragment, {
                                          children: t.map((a, o) =>
                                              f.jsx(zk, { data: a }, o)
                                          ),
                                      })
                                    : f.jsxs("div", {
                                          className: "noData",
                                          children: [
                                              f.jsx(_k, {}),
                                              f.jsx("p", {
                                                  children:
                                                      "감지된 객체가 없습니다.",
                                              }),
                                          ],
                                      }),
                        },
                        t
                    ),
                ],
            })
        );
    },
    zk = ({ data: e }) => {
        const [t, n] = x.useState(e);
        return f.jsxs("div", {
            className: "view",
            children: [
                f.jsx("div", {
                    className: "thumbWrap",
                    children: f.jsx(
                        "img",
                        {
                            className: "thumbnail",
                            src: "https://localhost:40000/file/snap/" + t.thumb,
                            alt: t.thumb,
                        },
                        t.thumb
                    ),
                }),
                f.jsxs("div", {
                    className: "contentWrap",
                    children: [
                        f.jsx("div", {
                            className: "nameWrap dataWrap",
                            children: f.jsx("span", {
                                className: "value",
                                children: t.id,
                            }),
                        }),
                        f.jsxs("div", {
                            className: "heartWrap dataWrap",
                            children: [
                                f.jsx(Wk, {}),
                                f.jsx("span", {
                                    className: "value",
                                    children: t.heart,
                                }),
                                f.jsx("span", { children: "BPM" }),
                            ],
                        }),
                        f.jsxs("div", {
                            className: "breathWrap dataWrap",
                            children: [
                                f.jsx(Fk, {}),
                                f.jsx("span", {
                                    className: "value",
                                    children: t.breath,
                                }),
                                f.jsx("span", { children: "회/분" }),
                            ],
                        }),
                        f.jsxs("div", {
                            className: "tempWrap dataWrap",
                            children: [
                                f.jsx(Yk, {}),
                                f.jsx("span", {
                                    className: "value",
                                    children: t.temp,
                                }),
                                f.jsx("span", { children: "도" }),
                            ],
                        }),
                        f.jsxs("div", {
                            className: "emotionWrap dataWrap",
                            children: [
                                f.jsx(Ak, {}),
                                f.jsx("span", {
                                    className: "value",
                                    children: t.emotion,
                                }),
                                f.jsx("span", { children: "단계" }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    Hk = ({ target: e, state: t, toggle: n }) => {
        const [r, a] = x.useState([]),
            o = async () => {
                const i = await Td([], [e], []);
                if (i != null) {
                    let s = [];
                    i.forEach((l) => {
                        s.push({
                            id: l[0],
                            type: l[1],
                            location: l[2],
                            occured: l[3],
                            checked: l[4],
                        });
                    }),
                        a(s);
                } else a([]);
            };
        return (
            x.useEffect(() => {
                o();
            }, []),
            f.jsxs("div", {
                id: "partialEventList",
                children: [
                    f.jsxs("div", {
                        className: "headerWrap",
                        children: [
                            f.jsx("p", {
                                className: "title",
                                children: "유치실 이벤트 내역",
                            }),
                            f.jsx("div", {
                                className: "funcWrap",
                                children: f.jsx("button", {
                                    className: "btn-2 btn-sm btn-round",
                                    onClick: () => {
                                        n(!t);
                                    },
                                    children: t ? "작게 보기" : "크게 보기",
                                }),
                            }),
                        ],
                    }),
                    f.jsx("div", {
                        className: "tableWrap",
                        children: f.jsx(Bk, { data: r }, r.length),
                    }),
                ],
            })
        );
    },
    Bk = ({ data: e }) => {
        const [t, n] = x.useState(e);
        return f.jsxs("table", {
            className: "eventTable",
            children: [
                f.jsxs("tr", {
                    children: [
                        f.jsx("th", {
                            className: "time",
                            children: "이벤트 발생 일시",
                        }),
                        f.jsx("th", {
                            className: "type",
                            children: "이벤트명",
                        }),
                        f.jsx("th", { className: "dummy" }),
                        f.jsx("th", {
                            className: "check",
                            children: "이벤트 확인 일시",
                        }),
                        f.jsx("th", { className: "detail" }),
                    ],
                }),
                t.length == 0
                    ? f.jsx("tr", { className: "noData" })
                    : f.jsx(f.Fragment, {
                          children: t.map((r, a) => f.jsx(Vk, { data: r }, a)),
                      }),
            ],
        });
    },
    Vk = ({ data: e }) => {
        const [t, n] = x.useState(e);
        return f.jsxs(
            "tr",
            {
                className: "eventItem",
                children: [
                    f.jsx("td", { className: "time", children: t.occured }),
                    f.jsx("td", { className: "type", children: t.type }),
                    f.jsx("td", { className: "dummy" }),
                    f.jsx("td", { className: "check", children: t.checked }),
                    f.jsx("td", {
                        className: "detail",
                        children: f.jsx("button", {
                            className: "btn-1 btn-m btn-round",
                            children: "이벤트 상세 보기",
                        }),
                    }),
                ],
            },
            t.id
        );
    },
    $k = () => {
        const e = il(),
            [t, n] = x.useState(null),
            [r, a] = x.useState(!1),
            o = async (i) => {
                const s = await Md();
                s != null
                    ? s.forEach((l) => {
                          if (l[0] == i) {
                              let u = {
                                  locationId: l[0],
                                  locationName: l[1],
                                  cctvId: l[2],
                                  cctvName: l[3],
                                  cctvUrl: l[4],
                              };
                              n(u);
                          }
                          return !0;
                      })
                    : n(None);
            };
        return (
            x.useEffect(() => {
                const i = e.pathname,
                    s = parseInt(i.split("/")[2]);
                o(s);
            }, []),
            f.jsxs("div", {
                id: "detailViewPage",
                className: "page",
                children: [
                    f.jsxs("div", {
                        className: r ? "viewContainer min" : "viewContainer",
                        children: [
                            f.jsx("div", {
                                className: "realtimeViewContainer",
                                children: t && f.jsx(fl, { url: t.cctvUrl }),
                            }),
                            f.jsx("div", {
                                className: "overViewContainer",
                                children:
                                    t && f.jsx(Uk, { target: t.locationName }),
                            }),
                        ],
                    }),
                    f.jsx("div", {
                        className: "eventContainer",
                        children:
                            t &&
                            f.jsx(Hk, {
                                target: t.locationName,
                                state: r,
                                toggle: a,
                            }),
                    }),
                ],
            })
        );
    };
function Bg(e) {
    var t,
        n,
        r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var a = e.length;
            for (t = 0; t < a; t++)
                e[t] && (n = Bg(e[t])) && (r && (r += " "), (r += n));
        } else for (n in e) e[n] && (r && (r += " "), (r += n));
    return r;
}
function Be() {
    for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++)
        (e = arguments[n]) && (t = Bg(e)) && (r && (r += " "), (r += t));
    return r;
}
function Qk(e, t) {
    (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        yc(e, t);
}
function yc(e, t) {
    return (
        (yc =
            Object.setPrototypeOf ||
            function (r, a) {
                return (r.__proto__ = a), r;
            }),
        yc(e, t)
    );
}
function Kk(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        a,
        o;
    for (o = 0; o < r.length; o++)
        (a = r[o]), !(t.indexOf(a) >= 0) && (n[a] = e[a]);
    return n;
}
function Xp(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function qk(e, t, n) {
    return e === t
        ? !0
        : e.correspondingElement
        ? e.correspondingElement.classList.contains(n)
        : e.classList.contains(n);
}
function Xk(e, t, n) {
    if (e === t) return !0;
    for (; e.parentNode || e.host; ) {
        if (e.parentNode && qk(e, t, n)) return !0;
        e = e.parentNode || e.host;
    }
    return e;
}
function Gk(e) {
    return (
        document.documentElement.clientWidth <= e.clientX ||
        document.documentElement.clientHeight <= e.clientY
    );
}
var Jk = function () {
    if (
        !(typeof window > "u" || typeof window.addEventListener != "function")
    ) {
        var t = !1,
            n = Object.defineProperty({}, "passive", {
                get: function () {
                    t = !0;
                },
            }),
            r = function () {};
        return (
            window.addEventListener("testPassiveEventSupport", r, n),
            window.removeEventListener("testPassiveEventSupport", r, n),
            t
        );
    }
};
function Zk(e) {
    return (
        e === void 0 && (e = 0),
        function () {
            return ++e;
        }
    );
}
var eS = Zk(),
    wc,
    Ci = {},
    iu = {},
    tS = ["touchstart", "touchmove"],
    nS = "ignore-react-onclickoutside";
function Gp(e, t) {
    var n = {},
        r = tS.indexOf(t) !== -1;
    return r && wc && (n.passive = !e.props.preventDefault), n;
}
function pl(e, t) {
    var n,
        r,
        a = e.displayName || e.name || "Component";
    return (
        (r = n =
            (function (o) {
                Qk(i, o);
                function i(l) {
                    var u;
                    return (
                        (u = o.call(this, l) || this),
                        (u.__outsideClickHandler = function (c) {
                            if (
                                typeof u.__clickOutsideHandlerProp == "function"
                            ) {
                                u.__clickOutsideHandlerProp(c);
                                return;
                            }
                            var d = u.getInstance();
                            if (
                                typeof d.props.handleClickOutside == "function"
                            ) {
                                d.props.handleClickOutside(c);
                                return;
                            }
                            if (typeof d.handleClickOutside == "function") {
                                d.handleClickOutside(c);
                                return;
                            }
                            throw new Error(
                                "WrappedComponent: " +
                                    a +
                                    " lacks a handleClickOutside(event) function for processing outside click events."
                            );
                        }),
                        (u.__getComponentNode = function () {
                            var c = u.getInstance();
                            return typeof c.setClickOutsideRef == "function"
                                ? c.setClickOutsideRef()
                                : Qo.findDOMNode(c);
                        }),
                        (u.enableOnClickOutside = function () {
                            if (!(typeof document > "u" || iu[u._uid])) {
                                typeof wc > "u" && (wc = Jk()),
                                    (iu[u._uid] = !0);
                                var c = u.props.eventTypes;
                                c.forEach || (c = [c]),
                                    (Ci[u._uid] = function (d) {
                                        if (
                                            u.componentNode !== null &&
                                            !(u.initTimeStamp > d.timeStamp) &&
                                            (u.props.preventDefault &&
                                                d.preventDefault(),
                                            u.props.stopPropagation &&
                                                d.stopPropagation(),
                                            !(
                                                u.props.excludeScrollbar &&
                                                Gk(d)
                                            ))
                                        ) {
                                            var p =
                                                (d.composed &&
                                                    d.composedPath &&
                                                    d.composedPath().shift()) ||
                                                d.target;
                                            Xk(
                                                p,
                                                u.componentNode,
                                                u.props.outsideClickIgnoreClass
                                            ) === document &&
                                                u.__outsideClickHandler(d);
                                        }
                                    }),
                                    c.forEach(function (d) {
                                        document.addEventListener(
                                            d,
                                            Ci[u._uid],
                                            Gp(Xp(u), d)
                                        );
                                    });
                            }
                        }),
                        (u.disableOnClickOutside = function () {
                            delete iu[u._uid];
                            var c = Ci[u._uid];
                            if (c && typeof document < "u") {
                                var d = u.props.eventTypes;
                                d.forEach || (d = [d]),
                                    d.forEach(function (p) {
                                        return document.removeEventListener(
                                            p,
                                            c,
                                            Gp(Xp(u), p)
                                        );
                                    }),
                                    delete Ci[u._uid];
                            }
                        }),
                        (u.getRef = function (c) {
                            return (u.instanceRef = c);
                        }),
                        (u._uid = eS()),
                        (u.initTimeStamp = performance.now()),
                        u
                    );
                }
                var s = i.prototype;
                return (
                    (s.getInstance = function () {
                        if (e.prototype && !e.prototype.isReactComponent)
                            return this;
                        var u = this.instanceRef;
                        return u.getInstance ? u.getInstance() : u;
                    }),
                    (s.componentDidMount = function () {
                        typeof document > "u" ||
                            !document.createElement ||
                            (this.getInstance(),
                            (this.componentNode = this.__getComponentNode()),
                            !this.props.disableOnClickOutside &&
                                this.enableOnClickOutside());
                    }),
                    (s.componentDidUpdate = function () {
                        this.componentNode = this.__getComponentNode();
                    }),
                    (s.componentWillUnmount = function () {
                        this.disableOnClickOutside();
                    }),
                    (s.render = function () {
                        var u = this.props;
                        u.excludeScrollbar;
                        var c = Kk(u, ["excludeScrollbar"]);
                        return (
                            e.prototype && e.prototype.isReactComponent
                                ? (c.ref = this.getRef)
                                : (c.wrappedRef = this.getRef),
                            (c.disableOnClickOutside =
                                this.disableOnClickOutside),
                            (c.enableOnClickOutside =
                                this.enableOnClickOutside),
                            x.createElement(e, c)
                        );
                    }),
                    i
                );
            })(x.Component)),
        (n.displayName = "OnClickOutside(" + a + ")"),
        (n.defaultProps = {
            eventTypes: ["mousedown", "touchstart"],
            excludeScrollbar: !1,
            outsideClickIgnoreClass: nS,
            preventDefault: !1,
            stopPropagation: !1,
        }),
        (n.getClass = function () {
            return e.getClass ? e.getClass() : e;
        }),
        r
    );
}
function H(e) {
    const t = Object.prototype.toString.call(e);
    return e instanceof Date || (typeof e == "object" && t === "[object Date]")
        ? new e.constructor(+e)
        : typeof e == "number" ||
          t === "[object Number]" ||
          typeof e == "string" ||
          t === "[object String]"
        ? new Date(e)
        : new Date(NaN);
}
function he(e, t) {
    return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function dr(e, t) {
    const n = H(e);
    return isNaN(t) ? he(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function Id(e, t) {
    const n = +H(e);
    return he(e, n + t);
}
const Vg = 6048e5,
    rS = 864e5,
    hl = 6e4,
    ml = 36e5,
    aS = 1e3;
function oS(e, t) {
    return Id(e, t * ml);
}
function xc(e, t) {
    return Id(e, t * hl);
}
function Qt(e, t) {
    const n = H(e);
    if (isNaN(t)) return he(e, NaN);
    if (!t) return n;
    const r = n.getDate(),
        a = he(e, n.getTime());
    a.setMonth(n.getMonth() + t + 1, 0);
    const o = a.getDate();
    return r >= o ? a : (n.setFullYear(a.getFullYear(), a.getMonth(), r), n);
}
function Fd(e, t) {
    const n = t * 3;
    return Qt(e, n);
}
function iS(e, t) {
    return Id(e, t * 1e3);
}
function bs(e, t) {
    const n = t * 7;
    return dr(e, n);
}
function wn(e, t) {
    return Qt(e, t * 12);
}
function jr(e) {
    const t = H(e);
    return t.setHours(0, 0, 0, 0), t;
}
function Ns(e) {
    const t = H(e),
        n = new Date(
            Date.UTC(
                t.getFullYear(),
                t.getMonth(),
                t.getDate(),
                t.getHours(),
                t.getMinutes(),
                t.getSeconds(),
                t.getMilliseconds()
            )
        );
    return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Wo(e, t) {
    const n = jr(e),
        r = jr(t),
        a = +n - Ns(n),
        o = +r - Ns(r);
    return Math.round((a - o) / rS);
}
function Ps(e, t) {
    const n = H(e),
        r = H(t),
        a = n.getFullYear() - r.getFullYear(),
        o = n.getMonth() - r.getMonth();
    return a * 12 + o;
}
function _r(e) {
    const t = H(e);
    return Math.trunc(t.getMonth() / 3) + 1;
}
function Ms(e, t) {
    const n = H(e),
        r = H(t),
        a = n.getFullYear() - r.getFullYear(),
        o = _r(n) - _r(r);
    return a * 4 + o;
}
function Ts(e, t) {
    const n = H(e),
        r = H(t);
    return n.getFullYear() - r.getFullYear();
}
function $g(e) {
    const t = H(e);
    return t.setHours(23, 59, 59, 999), t;
}
function sS(e) {
    const t = H(e),
        n = t.getMonth();
    return (
        t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
    );
}
let lS = {};
function Ur() {
    return lS;
}
function uS(e, t) {
    var s, l;
    const n = Ur(),
        r =
            n.weekStartsOn ??
            ((l = (s = n.locale) == null ? void 0 : s.options) == null
                ? void 0
                : l.weekStartsOn) ??
            0,
        a = H(e),
        o = a.getDay(),
        i = (o < r ? -7 : 0) + 6 - (o - r);
    return a.setDate(a.getDate() + i), a.setHours(23, 59, 59, 999), a;
}
function Qg(e) {
    const t = H(e),
        n = t.getFullYear();
    return t.setFullYear(n + 1, 0, 0), t.setHours(23, 59, 59, 999), t;
}
const cS = {
        lessThanXSeconds: {
            one: "less than a second",
            other: "less than {{count}} seconds",
        },
        xSeconds: { one: "1 second", other: "{{count}} seconds" },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
            one: "less than a minute",
            other: "less than {{count}} minutes",
        },
        xMinutes: { one: "1 minute", other: "{{count}} minutes" },
        aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
        xHours: { one: "1 hour", other: "{{count}} hours" },
        xDays: { one: "1 day", other: "{{count}} days" },
        aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
        xWeeks: { one: "1 week", other: "{{count}} weeks" },
        aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
        xMonths: { one: "1 month", other: "{{count}} months" },
        aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
        xYears: { one: "1 year", other: "{{count}} years" },
        overXYears: { one: "over 1 year", other: "over {{count}} years" },
        almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
    },
    dS = (e, t, n) => {
        let r;
        const a = cS[e];
        return (
            typeof a == "string"
                ? (r = a)
                : t === 1
                ? (r = a.one)
                : (r = a.other.replace("{{count}}", t.toString())),
            n != null && n.addSuffix
                ? n.comparison && n.comparison > 0
                    ? "in " + r
                    : r + " ago"
                : r
        );
    };
function ha(e) {
    return (t = {}) => {
        const n = t.width ? String(t.width) : e.defaultWidth;
        return e.formats[n] || e.formats[e.defaultWidth];
    };
}
const fS = {
        full: "EEEE, MMMM do, y",
        long: "MMMM do, y",
        medium: "MMM d, y",
        short: "MM/dd/yyyy",
    },
    pS = {
        full: "h:mm:ss a zzzz",
        long: "h:mm:ss a z",
        medium: "h:mm:ss a",
        short: "h:mm a",
    },
    hS = {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}",
    },
    mS = {
        date: ha({ formats: fS, defaultWidth: "full" }),
        time: ha({ formats: pS, defaultWidth: "full" }),
        dateTime: ha({ formats: hS, defaultWidth: "full" }),
    },
    vS = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P",
    },
    gS = (e, t, n, r) => vS[e];
function nn(e) {
    return (t, n) => {
        const r = n != null && n.context ? String(n.context) : "standalone";
        let a;
        if (r === "formatting" && e.formattingValues) {
            const i = e.defaultFormattingWidth || e.defaultWidth,
                s = n != null && n.width ? String(n.width) : i;
            a = e.formattingValues[s] || e.formattingValues[i];
        } else {
            const i = e.defaultWidth,
                s = n != null && n.width ? String(n.width) : e.defaultWidth;
            a = e.values[s] || e.values[i];
        }
        const o = e.argumentCallback ? e.argumentCallback(t) : t;
        return a[o];
    };
}
const yS = {
        narrow: ["B", "A"],
        abbreviated: ["BC", "AD"],
        wide: ["Before Christ", "Anno Domini"],
    },
    wS = {
        narrow: ["1", "2", "3", "4"],
        abbreviated: ["Q1", "Q2", "Q3", "Q4"],
        wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    },
    xS = {
        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        abbreviated: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        wide: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
    },
    DS = {
        narrow: ["S", "M", "T", "W", "T", "F", "S"],
        short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        wide: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ],
    },
    kS = {
        narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
        },
        abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
        },
        wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
        },
    },
    SS = {
        narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
        },
        abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
        },
        wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
        },
    },
    ES = (e, t) => {
        const n = Number(e),
            r = n % 100;
        if (r > 20 || r < 10)
            switch (r % 10) {
                case 1:
                    return n + "st";
                case 2:
                    return n + "nd";
                case 3:
                    return n + "rd";
            }
        return n + "th";
    },
    CS = {
        ordinalNumber: ES,
        era: nn({ values: yS, defaultWidth: "wide" }),
        quarter: nn({
            values: wS,
            defaultWidth: "wide",
            argumentCallback: (e) => e - 1,
        }),
        month: nn({ values: xS, defaultWidth: "wide" }),
        day: nn({ values: DS, defaultWidth: "wide" }),
        dayPeriod: nn({
            values: kS,
            defaultWidth: "wide",
            formattingValues: SS,
            defaultFormattingWidth: "wide",
        }),
    };
function rn(e) {
    return (t, n = {}) => {
        const r = n.width,
            a =
                (r && e.matchPatterns[r]) ||
                e.matchPatterns[e.defaultMatchWidth],
            o = t.match(a);
        if (!o) return null;
        const i = o[0],
            s =
                (r && e.parsePatterns[r]) ||
                e.parsePatterns[e.defaultParseWidth],
            l = Array.isArray(s)
                ? bS(s, (d) => d.test(i))
                : _S(s, (d) => d.test(i));
        let u;
        (u = e.valueCallback ? e.valueCallback(l) : l),
            (u = n.valueCallback ? n.valueCallback(u) : u);
        const c = t.slice(i.length);
        return { value: u, rest: c };
    };
}
function _S(e, t) {
    for (const n in e)
        if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function bS(e, t) {
    for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function Kg(e) {
    return (t, n = {}) => {
        const r = t.match(e.matchPattern);
        if (!r) return null;
        const a = r[0],
            o = t.match(e.parsePattern);
        if (!o) return null;
        let i = e.valueCallback ? e.valueCallback(o[0]) : o[0];
        i = n.valueCallback ? n.valueCallback(i) : i;
        const s = t.slice(a.length);
        return { value: i, rest: s };
    };
}
const NS = /^(\d+)(th|st|nd|rd)?/i,
    PS = /\d+/i,
    MS = {
        narrow: /^(b|a)/i,
        abbreviated:
            /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        wide: /^(before christ|before common era|anno domini|common era)/i,
    },
    TS = { any: [/^b/i, /^(a|c)/i] },
    RS = {
        narrow: /^[1234]/i,
        abbreviated: /^q[1234]/i,
        wide: /^[1234](th|st|nd|rd)? quarter/i,
    },
    OS = { any: [/1/i, /2/i, /3/i, /4/i] },
    LS = {
        narrow: /^[jfmasond]/i,
        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
    },
    jS = {
        narrow: [
            /^j/i,
            /^f/i,
            /^m/i,
            /^a/i,
            /^m/i,
            /^j/i,
            /^j/i,
            /^a/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
        ],
        any: [
            /^ja/i,
            /^f/i,
            /^mar/i,
            /^ap/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^au/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
        ],
    },
    IS = {
        narrow: /^[smtwf]/i,
        short: /^(su|mo|tu|we|th|fr|sa)/i,
        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
    },
    FS = {
        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
    },
    AS = {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
    },
    WS = {
        any: {
            am: /^a/i,
            pm: /^p/i,
            midnight: /^mi/i,
            noon: /^no/i,
            morning: /morning/i,
            afternoon: /afternoon/i,
            evening: /evening/i,
            night: /night/i,
        },
    },
    YS = {
        ordinalNumber: Kg({
            matchPattern: NS,
            parsePattern: PS,
            valueCallback: (e) => parseInt(e, 10),
        }),
        era: rn({
            matchPatterns: MS,
            defaultMatchWidth: "wide",
            parsePatterns: TS,
            defaultParseWidth: "any",
        }),
        quarter: rn({
            matchPatterns: RS,
            defaultMatchWidth: "wide",
            parsePatterns: OS,
            defaultParseWidth: "any",
            valueCallback: (e) => e + 1,
        }),
        month: rn({
            matchPatterns: LS,
            defaultMatchWidth: "wide",
            parsePatterns: jS,
            defaultParseWidth: "any",
        }),
        day: rn({
            matchPatterns: IS,
            defaultMatchWidth: "wide",
            parsePatterns: FS,
            defaultParseWidth: "any",
        }),
        dayPeriod: rn({
            matchPatterns: AS,
            defaultMatchWidth: "any",
            parsePatterns: WS,
            defaultParseWidth: "any",
        }),
    },
    qg = {
        code: "en-US",
        formatDistance: dS,
        formatLong: mS,
        formatRelative: gS,
        localize: CS,
        match: YS,
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
    };
function vl(e) {
    const t = H(e),
        n = he(e, 0);
    return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function US(e) {
    const t = H(e);
    return Wo(t, vl(t)) + 1;
}
function _n(e, t) {
    var s, l, u, c;
    const n = Ur(),
        r =
            (t == null ? void 0 : t.weekStartsOn) ??
            ((l =
                (s = t == null ? void 0 : t.locale) == null
                    ? void 0
                    : s.options) == null
                ? void 0
                : l.weekStartsOn) ??
            n.weekStartsOn ??
            ((c = (u = n.locale) == null ? void 0 : u.options) == null
                ? void 0
                : c.weekStartsOn) ??
            0,
        a = H(e),
        o = a.getDay(),
        i = (o < r ? 7 : 0) + o - r;
    return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a;
}
function _a(e) {
    return _n(e, { weekStartsOn: 1 });
}
function Xg(e) {
    const t = H(e),
        n = t.getFullYear(),
        r = he(e, 0);
    r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
    const a = _a(r),
        o = he(e, 0);
    o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
    const i = _a(o);
    return t.getTime() >= a.getTime()
        ? n + 1
        : t.getTime() >= i.getTime()
        ? n
        : n - 1;
}
function zS(e) {
    const t = Xg(e),
        n = he(e, 0);
    return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), _a(n);
}
function Ad(e) {
    const t = H(e),
        n = +_a(t) - +zS(t);
    return Math.round(n / Vg) + 1;
}
function Wd(e, t) {
    var c, d, p, v;
    const n = H(e),
        r = n.getFullYear(),
        a = Ur(),
        o =
            (t == null ? void 0 : t.firstWeekContainsDate) ??
            ((d =
                (c = t == null ? void 0 : t.locale) == null
                    ? void 0
                    : c.options) == null
                ? void 0
                : d.firstWeekContainsDate) ??
            a.firstWeekContainsDate ??
            ((v = (p = a.locale) == null ? void 0 : p.options) == null
                ? void 0
                : v.firstWeekContainsDate) ??
            1,
        i = he(e, 0);
    i.setFullYear(r + 1, 0, o), i.setHours(0, 0, 0, 0);
    const s = _n(i, t),
        l = he(e, 0);
    l.setFullYear(r, 0, o), l.setHours(0, 0, 0, 0);
    const u = _n(l, t);
    return n.getTime() >= s.getTime()
        ? r + 1
        : n.getTime() >= u.getTime()
        ? r
        : r - 1;
}
function HS(e, t) {
    var s, l, u, c;
    const n = Ur(),
        r =
            (t == null ? void 0 : t.firstWeekContainsDate) ??
            ((l =
                (s = t == null ? void 0 : t.locale) == null
                    ? void 0
                    : s.options) == null
                ? void 0
                : l.firstWeekContainsDate) ??
            n.firstWeekContainsDate ??
            ((c = (u = n.locale) == null ? void 0 : u.options) == null
                ? void 0
                : c.firstWeekContainsDate) ??
            1,
        a = Wd(e, t),
        o = he(e, 0);
    return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), _n(o, t);
}
function Gg(e, t) {
    const n = H(e),
        r = +_n(n, t) - +HS(n, t);
    return Math.round(r / Vg) + 1;
}
function pe(e, t) {
    const n = e < 0 ? "-" : "",
        r = Math.abs(e).toString().padStart(t, "0");
    return n + r;
}
const jn = {
        y(e, t) {
            const n = e.getFullYear(),
                r = n > 0 ? n : 1 - n;
            return pe(t === "yy" ? r % 100 : r, t.length);
        },
        M(e, t) {
            const n = e.getMonth();
            return t === "M" ? String(n + 1) : pe(n + 1, 2);
        },
        d(e, t) {
            return pe(e.getDate(), t.length);
        },
        a(e, t) {
            const n = e.getHours() / 12 >= 1 ? "pm" : "am";
            switch (t) {
                case "a":
                case "aa":
                    return n.toUpperCase();
                case "aaa":
                    return n;
                case "aaaaa":
                    return n[0];
                case "aaaa":
                default:
                    return n === "am" ? "a.m." : "p.m.";
            }
        },
        h(e, t) {
            return pe(e.getHours() % 12 || 12, t.length);
        },
        H(e, t) {
            return pe(e.getHours(), t.length);
        },
        m(e, t) {
            return pe(e.getMinutes(), t.length);
        },
        s(e, t) {
            return pe(e.getSeconds(), t.length);
        },
        S(e, t) {
            const n = t.length,
                r = e.getMilliseconds(),
                a = Math.trunc(r * Math.pow(10, n - 3));
            return pe(a, t.length);
        },
    },
    $r = {
        am: "am",
        pm: "pm",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night",
    },
    Jp = {
        G: function (e, t, n) {
            const r = e.getFullYear() > 0 ? 1 : 0;
            switch (t) {
                case "G":
                case "GG":
                case "GGG":
                    return n.era(r, { width: "abbreviated" });
                case "GGGGG":
                    return n.era(r, { width: "narrow" });
                case "GGGG":
                default:
                    return n.era(r, { width: "wide" });
            }
        },
        y: function (e, t, n) {
            if (t === "yo") {
                const r = e.getFullYear(),
                    a = r > 0 ? r : 1 - r;
                return n.ordinalNumber(a, { unit: "year" });
            }
            return jn.y(e, t);
        },
        Y: function (e, t, n, r) {
            const a = Wd(e, r),
                o = a > 0 ? a : 1 - a;
            if (t === "YY") {
                const i = o % 100;
                return pe(i, 2);
            }
            return t === "Yo"
                ? n.ordinalNumber(o, { unit: "year" })
                : pe(o, t.length);
        },
        R: function (e, t) {
            const n = Xg(e);
            return pe(n, t.length);
        },
        u: function (e, t) {
            const n = e.getFullYear();
            return pe(n, t.length);
        },
        Q: function (e, t, n) {
            const r = Math.ceil((e.getMonth() + 1) / 3);
            switch (t) {
                case "Q":
                    return String(r);
                case "QQ":
                    return pe(r, 2);
                case "Qo":
                    return n.ordinalNumber(r, { unit: "quarter" });
                case "QQQ":
                    return n.quarter(r, {
                        width: "abbreviated",
                        context: "formatting",
                    });
                case "QQQQQ":
                    return n.quarter(r, {
                        width: "narrow",
                        context: "formatting",
                    });
                case "QQQQ":
                default:
                    return n.quarter(r, {
                        width: "wide",
                        context: "formatting",
                    });
            }
        },
        q: function (e, t, n) {
            const r = Math.ceil((e.getMonth() + 1) / 3);
            switch (t) {
                case "q":
                    return String(r);
                case "qq":
                    return pe(r, 2);
                case "qo":
                    return n.ordinalNumber(r, { unit: "quarter" });
                case "qqq":
                    return n.quarter(r, {
                        width: "abbreviated",
                        context: "standalone",
                    });
                case "qqqqq":
                    return n.quarter(r, {
                        width: "narrow",
                        context: "standalone",
                    });
                case "qqqq":
                default:
                    return n.quarter(r, {
                        width: "wide",
                        context: "standalone",
                    });
            }
        },
        M: function (e, t, n) {
            const r = e.getMonth();
            switch (t) {
                case "M":
                case "MM":
                    return jn.M(e, t);
                case "Mo":
                    return n.ordinalNumber(r + 1, { unit: "month" });
                case "MMM":
                    return n.month(r, {
                        width: "abbreviated",
                        context: "formatting",
                    });
                case "MMMMM":
                    return n.month(r, {
                        width: "narrow",
                        context: "formatting",
                    });
                case "MMMM":
                default:
                    return n.month(r, { width: "wide", context: "formatting" });
            }
        },
        L: function (e, t, n) {
            const r = e.getMonth();
            switch (t) {
                case "L":
                    return String(r + 1);
                case "LL":
                    return pe(r + 1, 2);
                case "Lo":
                    return n.ordinalNumber(r + 1, { unit: "month" });
                case "LLL":
                    return n.month(r, {
                        width: "abbreviated",
                        context: "standalone",
                    });
                case "LLLLL":
                    return n.month(r, {
                        width: "narrow",
                        context: "standalone",
                    });
                case "LLLL":
                default:
                    return n.month(r, { width: "wide", context: "standalone" });
            }
        },
        w: function (e, t, n, r) {
            const a = Gg(e, r);
            return t === "wo"
                ? n.ordinalNumber(a, { unit: "week" })
                : pe(a, t.length);
        },
        I: function (e, t, n) {
            const r = Ad(e);
            return t === "Io"
                ? n.ordinalNumber(r, { unit: "week" })
                : pe(r, t.length);
        },
        d: function (e, t, n) {
            return t === "do"
                ? n.ordinalNumber(e.getDate(), { unit: "date" })
                : jn.d(e, t);
        },
        D: function (e, t, n) {
            const r = US(e);
            return t === "Do"
                ? n.ordinalNumber(r, { unit: "dayOfYear" })
                : pe(r, t.length);
        },
        E: function (e, t, n) {
            const r = e.getDay();
            switch (t) {
                case "E":
                case "EE":
                case "EEE":
                    return n.day(r, {
                        width: "abbreviated",
                        context: "formatting",
                    });
                case "EEEEE":
                    return n.day(r, { width: "narrow", context: "formatting" });
                case "EEEEEE":
                    return n.day(r, { width: "short", context: "formatting" });
                case "EEEE":
                default:
                    return n.day(r, { width: "wide", context: "formatting" });
            }
        },
        e: function (e, t, n, r) {
            const a = e.getDay(),
                o = (a - r.weekStartsOn + 8) % 7 || 7;
            switch (t) {
                case "e":
                    return String(o);
                case "ee":
                    return pe(o, 2);
                case "eo":
                    return n.ordinalNumber(o, { unit: "day" });
                case "eee":
                    return n.day(a, {
                        width: "abbreviated",
                        context: "formatting",
                    });
                case "eeeee":
                    return n.day(a, { width: "narrow", context: "formatting" });
                case "eeeeee":
                    return n.day(a, { width: "short", context: "formatting" });
                case "eeee":
                default:
                    return n.day(a, { width: "wide", context: "formatting" });
            }
        },
        c: function (e, t, n, r) {
            const a = e.getDay(),
                o = (a - r.weekStartsOn + 8) % 7 || 7;
            switch (t) {
                case "c":
                    return String(o);
                case "cc":
                    return pe(o, t.length);
                case "co":
                    return n.ordinalNumber(o, { unit: "day" });
                case "ccc":
                    return n.day(a, {
                        width: "abbreviated",
                        context: "standalone",
                    });
                case "ccccc":
                    return n.day(a, { width: "narrow", context: "standalone" });
                case "cccccc":
                    return n.day(a, { width: "short", context: "standalone" });
                case "cccc":
                default:
                    return n.day(a, { width: "wide", context: "standalone" });
            }
        },
        i: function (e, t, n) {
            const r = e.getDay(),
                a = r === 0 ? 7 : r;
            switch (t) {
                case "i":
                    return String(a);
                case "ii":
                    return pe(a, t.length);
                case "io":
                    return n.ordinalNumber(a, { unit: "day" });
                case "iii":
                    return n.day(r, {
                        width: "abbreviated",
                        context: "formatting",
                    });
                case "iiiii":
                    return n.day(r, { width: "narrow", context: "formatting" });
                case "iiiiii":
                    return n.day(r, { width: "short", context: "formatting" });
                case "iiii":
                default:
                    return n.day(r, { width: "wide", context: "formatting" });
            }
        },
        a: function (e, t, n) {
            const a = e.getHours() / 12 >= 1 ? "pm" : "am";
            switch (t) {
                case "a":
                case "aa":
                    return n.dayPeriod(a, {
                        width: "abbreviated",
                        context: "formatting",
                    });
                case "aaa":
                    return n
                        .dayPeriod(a, {
                            width: "abbreviated",
                            context: "formatting",
                        })
                        .toLowerCase();
                case "aaaaa":
                    return n.dayPeriod(a, {
                        width: "narrow",
                        context: "formatting",
                    });
                case "aaaa":
                default:
                    return n.dayPeriod(a, {
                        width: "wide",
                        context: "formatting",
                    });
            }
        },
        b: function (e, t, n) {
            const r = e.getHours();
            let a;
            switch (
                (r === 12
                    ? (a = $r.noon)
                    : r === 0
                    ? (a = $r.midnight)
                    : (a = r / 12 >= 1 ? "pm" : "am"),
                t)
            ) {
                case "b":
                case "bb":
                    return n.dayPeriod(a, {
                        width: "abbreviated",
                        context: "formatting",
                    });
                case "bbb":
                    return n
                        .dayPeriod(a, {
                            width: "abbreviated",
                            context: "formatting",
                        })
                        .toLowerCase();
                case "bbbbb":
                    return n.dayPeriod(a, {
                        width: "narrow",
                        context: "formatting",
                    });
                case "bbbb":
                default:
                    return n.dayPeriod(a, {
                        width: "wide",
                        context: "formatting",
                    });
            }
        },
        B: function (e, t, n) {
            const r = e.getHours();
            let a;
            switch (
                (r >= 17
                    ? (a = $r.evening)
                    : r >= 12
                    ? (a = $r.afternoon)
                    : r >= 4
                    ? (a = $r.morning)
                    : (a = $r.night),
                t)
            ) {
                case "B":
                case "BB":
                case "BBB":
                    return n.dayPeriod(a, {
                        width: "abbreviated",
                        context: "formatting",
                    });
                case "BBBBB":
                    return n.dayPeriod(a, {
                        width: "narrow",
                        context: "formatting",
                    });
                case "BBBB":
                default:
                    return n.dayPeriod(a, {
                        width: "wide",
                        context: "formatting",
                    });
            }
        },
        h: function (e, t, n) {
            if (t === "ho") {
                let r = e.getHours() % 12;
                return (
                    r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" })
                );
            }
            return jn.h(e, t);
        },
        H: function (e, t, n) {
            return t === "Ho"
                ? n.ordinalNumber(e.getHours(), { unit: "hour" })
                : jn.H(e, t);
        },
        K: function (e, t, n) {
            const r = e.getHours() % 12;
            return t === "Ko"
                ? n.ordinalNumber(r, { unit: "hour" })
                : pe(r, t.length);
        },
        k: function (e, t, n) {
            let r = e.getHours();
            return (
                r === 0 && (r = 24),
                t === "ko"
                    ? n.ordinalNumber(r, { unit: "hour" })
                    : pe(r, t.length)
            );
        },
        m: function (e, t, n) {
            return t === "mo"
                ? n.ordinalNumber(e.getMinutes(), { unit: "minute" })
                : jn.m(e, t);
        },
        s: function (e, t, n) {
            return t === "so"
                ? n.ordinalNumber(e.getSeconds(), { unit: "second" })
                : jn.s(e, t);
        },
        S: function (e, t) {
            return jn.S(e, t);
        },
        X: function (e, t, n) {
            const r = e.getTimezoneOffset();
            if (r === 0) return "Z";
            switch (t) {
                case "X":
                    return eh(r);
                case "XXXX":
                case "XX":
                    return vr(r);
                case "XXXXX":
                case "XXX":
                default:
                    return vr(r, ":");
            }
        },
        x: function (e, t, n) {
            const r = e.getTimezoneOffset();
            switch (t) {
                case "x":
                    return eh(r);
                case "xxxx":
                case "xx":
                    return vr(r);
                case "xxxxx":
                case "xxx":
                default:
                    return vr(r, ":");
            }
        },
        O: function (e, t, n) {
            const r = e.getTimezoneOffset();
            switch (t) {
                case "O":
                case "OO":
                case "OOO":
                    return "GMT" + Zp(r, ":");
                case "OOOO":
                default:
                    return "GMT" + vr(r, ":");
            }
        },
        z: function (e, t, n) {
            const r = e.getTimezoneOffset();
            switch (t) {
                case "z":
                case "zz":
                case "zzz":
                    return "GMT" + Zp(r, ":");
                case "zzzz":
                default:
                    return "GMT" + vr(r, ":");
            }
        },
        t: function (e, t, n) {
            const r = Math.trunc(e.getTime() / 1e3);
            return pe(r, t.length);
        },
        T: function (e, t, n) {
            const r = e.getTime();
            return pe(r, t.length);
        },
    };
function Zp(e, t = "") {
    const n = e > 0 ? "-" : "+",
        r = Math.abs(e),
        a = Math.trunc(r / 60),
        o = r % 60;
    return o === 0 ? n + String(a) : n + String(a) + t + pe(o, 2);
}
function eh(e, t) {
    return e % 60 === 0
        ? (e > 0 ? "-" : "+") + pe(Math.abs(e) / 60, 2)
        : vr(e, t);
}
function vr(e, t = "") {
    const n = e > 0 ? "-" : "+",
        r = Math.abs(e),
        a = pe(Math.trunc(r / 60), 2),
        o = pe(r % 60, 2);
    return n + a + t + o;
}
const th = (e, t) => {
        switch (e) {
            case "P":
                return t.date({ width: "short" });
            case "PP":
                return t.date({ width: "medium" });
            case "PPP":
                return t.date({ width: "long" });
            case "PPPP":
            default:
                return t.date({ width: "full" });
        }
    },
    Jg = (e, t) => {
        switch (e) {
            case "p":
                return t.time({ width: "short" });
            case "pp":
                return t.time({ width: "medium" });
            case "ppp":
                return t.time({ width: "long" });
            case "pppp":
            default:
                return t.time({ width: "full" });
        }
    },
    BS = (e, t) => {
        const n = e.match(/(P+)(p+)?/) || [],
            r = n[1],
            a = n[2];
        if (!a) return th(e, t);
        let o;
        switch (r) {
            case "P":
                o = t.dateTime({ width: "short" });
                break;
            case "PP":
                o = t.dateTime({ width: "medium" });
                break;
            case "PPP":
                o = t.dateTime({ width: "long" });
                break;
            case "PPPP":
            default:
                o = t.dateTime({ width: "full" });
                break;
        }
        return o.replace("{{date}}", th(r, t)).replace("{{time}}", Jg(a, t));
    },
    Rs = { p: Jg, P: BS },
    VS = /^D+$/,
    $S = /^Y+$/,
    QS = ["D", "DD", "YY", "YYYY"];
function Zg(e) {
    return VS.test(e);
}
function ey(e) {
    return $S.test(e);
}
function Dc(e, t, n) {
    const r = KS(e, t, n);
    if ((console.warn(r), QS.includes(e))) throw new RangeError(r);
}
function KS(e, t, n) {
    const r = e[0] === "Y" ? "years" : "days of the month";
    return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function xn(e) {
    return (
        e instanceof Date ||
        (typeof e == "object" &&
            Object.prototype.toString.call(e) === "[object Date]")
    );
}
function Os(e) {
    if (!xn(e) && typeof e != "number") return !1;
    const t = H(e);
    return !isNaN(Number(t));
}
const qS = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    XS = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    GS = /^'([^]*?)'?$/,
    JS = /''/g,
    ZS = /[a-zA-Z]/;
function nh(e, t, n) {
    var c, d, p, v, g, w, k, h;
    const r = Ur(),
        a = (n == null ? void 0 : n.locale) ?? r.locale ?? qg,
        o =
            (n == null ? void 0 : n.firstWeekContainsDate) ??
            ((d =
                (c = n == null ? void 0 : n.locale) == null
                    ? void 0
                    : c.options) == null
                ? void 0
                : d.firstWeekContainsDate) ??
            r.firstWeekContainsDate ??
            ((v = (p = r.locale) == null ? void 0 : p.options) == null
                ? void 0
                : v.firstWeekContainsDate) ??
            1,
        i =
            (n == null ? void 0 : n.weekStartsOn) ??
            ((w =
                (g = n == null ? void 0 : n.locale) == null
                    ? void 0
                    : g.options) == null
                ? void 0
                : w.weekStartsOn) ??
            r.weekStartsOn ??
            ((h = (k = r.locale) == null ? void 0 : k.options) == null
                ? void 0
                : h.weekStartsOn) ??
            0,
        s = H(e);
    if (!Os(s)) throw new RangeError("Invalid time value");
    let l = t
        .match(XS)
        .map((m) => {
            const y = m[0];
            if (y === "p" || y === "P") {
                const C = Rs[y];
                return C(m, a.formatLong);
            }
            return m;
        })
        .join("")
        .match(qS)
        .map((m) => {
            if (m === "''") return { isToken: !1, value: "'" };
            const y = m[0];
            if (y === "'") return { isToken: !1, value: eE(m) };
            if (Jp[y]) return { isToken: !0, value: m };
            if (y.match(ZS))
                throw new RangeError(
                    "Format string contains an unescaped latin alphabet character `" +
                        y +
                        "`"
                );
            return { isToken: !1, value: m };
        });
    a.localize.preprocessor && (l = a.localize.preprocessor(s, l));
    const u = { firstWeekContainsDate: o, weekStartsOn: i, locale: a };
    return l
        .map((m) => {
            if (!m.isToken) return m.value;
            const y = m.value;
            ((!(n != null && n.useAdditionalWeekYearTokens) && ey(y)) ||
                (!(n != null && n.useAdditionalDayOfYearTokens) && Zg(y))) &&
                Dc(y, t, String(e));
            const C = Jp[y[0]];
            return C(s, y, a.localize, u);
        })
        .join("");
}
function eE(e) {
    const t = e.match(GS);
    return t ? t[1].replace(JS, "'") : e;
}
function rh(e) {
    return H(e).getDate();
}
function tE(e) {
    return H(e).getDay();
}
function cn(e) {
    return H(e).getHours();
}
function dn(e) {
    return H(e).getMinutes();
}
function it(e) {
    return H(e).getMonth();
}
function Dn(e) {
    return H(e).getSeconds();
}
function kc(e) {
    return H(e).getTime();
}
function re(e) {
    return H(e).getFullYear();
}
function ar(e, t) {
    const n = H(e),
        r = H(t);
    return n.getTime() > r.getTime();
}
function Ir(e, t) {
    const n = H(e),
        r = H(t);
    return +n < +r;
}
function nE(e, t) {
    const n = H(e),
        r = H(t);
    return +n == +r;
}
function rE(e, t) {
    const n = jr(e),
        r = jr(t);
    return +n == +r;
}
function aE(e, t) {
    const n = H(e),
        r = H(t);
    return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function Sc(e) {
    const t = H(e),
        n = t.getMonth(),
        r = n - (n % 3);
    return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
}
function oE(e, t) {
    const n = Sc(e),
        r = Sc(t);
    return +n == +r;
}
function iE(e, t) {
    const n = H(e),
        r = H(t);
    return n.getFullYear() === r.getFullYear();
}
function Yo(e, t) {
    const n = +H(e),
        [r, a] = [+H(t.start), +H(t.end)].sort((o, i) => o - i);
    return n >= r && n <= a;
}
function ah(e) {
    let t;
    return (
        e.forEach(function (n) {
            const r = H(n);
            (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
        }),
        t || new Date(NaN)
    );
}
function oh(e) {
    let t;
    return (
        e.forEach((n) => {
            const r = H(n);
            (!t || t > r || isNaN(+r)) && (t = r);
        }),
        t || new Date(NaN)
    );
}
function sE() {
    return Object.assign({}, Ur());
}
function lE(e, t) {
    const n = t instanceof Date ? he(t, 0) : new t(0);
    return (
        n.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()),
        n.setHours(
            e.getHours(),
            e.getMinutes(),
            e.getSeconds(),
            e.getMilliseconds()
        ),
        n
    );
}
const uE = 10;
class ty {
    constructor() {
        U(this, "subPriority", 0);
    }
    validate(t, n) {
        return !0;
    }
}
class cE extends ty {
    constructor(t, n, r, a, o) {
        super(),
            (this.value = t),
            (this.validateValue = n),
            (this.setValue = r),
            (this.priority = a),
            o && (this.subPriority = o);
    }
    validate(t, n) {
        return this.validateValue(t, this.value, n);
    }
    set(t, n, r) {
        return this.setValue(t, n, this.value, r);
    }
}
class dE extends ty {
    constructor() {
        super(...arguments);
        U(this, "priority", uE);
        U(this, "subPriority", -1);
    }
    set(n, r) {
        return r.timestampIsSet ? n : he(n, lE(n, Date));
    }
}
class fe {
    run(t, n, r, a) {
        const o = this.parse(t, n, r, a);
        return o
            ? {
                  setter: new cE(
                      o.value,
                      this.validate,
                      this.set,
                      this.priority,
                      this.subPriority
                  ),
                  rest: o.rest,
              }
            : null;
    }
    validate(t, n, r) {
        return !0;
    }
}
class fE extends fe {
    constructor() {
        super(...arguments);
        U(this, "priority", 140);
        U(this, "incompatibleTokens", ["R", "u", "t", "T"]);
    }
    parse(n, r, a) {
        switch (r) {
            case "G":
            case "GG":
            case "GGG":
                return (
                    a.era(n, { width: "abbreviated" }) ||
                    a.era(n, { width: "narrow" })
                );
            case "GGGGG":
                return a.era(n, { width: "narrow" });
            case "GGGG":
            default:
                return (
                    a.era(n, { width: "wide" }) ||
                    a.era(n, { width: "abbreviated" }) ||
                    a.era(n, { width: "narrow" })
                );
        }
    }
    set(n, r, a) {
        return (r.era = a), n.setFullYear(a, 0, 1), n.setHours(0, 0, 0, 0), n;
    }
}
const je = {
        month: /^(1[0-2]|0?\d)/,
        date: /^(3[0-1]|[0-2]?\d)/,
        dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
        week: /^(5[0-3]|[0-4]?\d)/,
        hour23h: /^(2[0-3]|[0-1]?\d)/,
        hour24h: /^(2[0-4]|[0-1]?\d)/,
        hour11h: /^(1[0-1]|0?\d)/,
        hour12h: /^(1[0-2]|0?\d)/,
        minute: /^[0-5]?\d/,
        second: /^[0-5]?\d/,
        singleDigit: /^\d/,
        twoDigits: /^\d{1,2}/,
        threeDigits: /^\d{1,3}/,
        fourDigits: /^\d{1,4}/,
        anyDigitsSigned: /^-?\d+/,
        singleDigitSigned: /^-?\d/,
        twoDigitsSigned: /^-?\d{1,2}/,
        threeDigitsSigned: /^-?\d{1,3}/,
        fourDigitsSigned: /^-?\d{1,4}/,
    },
    an = {
        basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
        basic: /^([+-])(\d{2})(\d{2})|Z/,
        basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
        extended: /^([+-])(\d{2}):(\d{2})|Z/,
        extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
    };
function Ie(e, t) {
    return e && { value: t(e.value), rest: e.rest };
}
function be(e, t) {
    const n = t.match(e);
    return n ? { value: parseInt(n[0], 10), rest: t.slice(n[0].length) } : null;
}
function on(e, t) {
    const n = t.match(e);
    if (!n) return null;
    if (n[0] === "Z") return { value: 0, rest: t.slice(1) };
    const r = n[1] === "+" ? 1 : -1,
        a = n[2] ? parseInt(n[2], 10) : 0,
        o = n[3] ? parseInt(n[3], 10) : 0,
        i = n[5] ? parseInt(n[5], 10) : 0;
    return {
        value: r * (a * ml + o * hl + i * aS),
        rest: t.slice(n[0].length),
    };
}
function ny(e) {
    return be(je.anyDigitsSigned, e);
}
function Oe(e, t) {
    switch (e) {
        case 1:
            return be(je.singleDigit, t);
        case 2:
            return be(je.twoDigits, t);
        case 3:
            return be(je.threeDigits, t);
        case 4:
            return be(je.fourDigits, t);
        default:
            return be(new RegExp("^\\d{1," + e + "}"), t);
    }
}
function Ls(e, t) {
    switch (e) {
        case 1:
            return be(je.singleDigitSigned, t);
        case 2:
            return be(je.twoDigitsSigned, t);
        case 3:
            return be(je.threeDigitsSigned, t);
        case 4:
            return be(je.fourDigitsSigned, t);
        default:
            return be(new RegExp("^-?\\d{1," + e + "}"), t);
    }
}
function Yd(e) {
    switch (e) {
        case "morning":
            return 4;
        case "evening":
            return 17;
        case "pm":
        case "noon":
        case "afternoon":
            return 12;
        case "am":
        case "midnight":
        case "night":
        default:
            return 0;
    }
}
function ry(e, t) {
    const n = t > 0,
        r = n ? t : 1 - t;
    let a;
    if (r <= 50) a = e || 100;
    else {
        const o = r + 50,
            i = Math.trunc(o / 100) * 100,
            s = e >= o % 100;
        a = e + i - (s ? 100 : 0);
    }
    return n ? a : 1 - a;
}
function ay(e) {
    return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
}
class pE extends fe {
    constructor() {
        super(...arguments);
        U(this, "priority", 130);
        U(this, "incompatibleTokens", [
            "Y",
            "R",
            "u",
            "w",
            "I",
            "i",
            "e",
            "c",
            "t",
            "T",
        ]);
    }
    parse(n, r, a) {
        const o = (i) => ({ year: i, isTwoDigitYear: r === "yy" });
        switch (r) {
            case "y":
                return Ie(Oe(4, n), o);
            case "yo":
                return Ie(a.ordinalNumber(n, { unit: "year" }), o);
            default:
                return Ie(Oe(r.length, n), o);
        }
    }
    validate(n, r) {
        return r.isTwoDigitYear || r.year > 0;
    }
    set(n, r, a) {
        const o = n.getFullYear();
        if (a.isTwoDigitYear) {
            const s = ry(a.year, o);
            return n.setFullYear(s, 0, 1), n.setHours(0, 0, 0, 0), n;
        }
        const i = !("era" in r) || r.era === 1 ? a.year : 1 - a.year;
        return n.setFullYear(i, 0, 1), n.setHours(0, 0, 0, 0), n;
    }
}
class hE extends fe {
    constructor() {
        super(...arguments);
        U(this, "priority", 130);
        U(this, "incompatibleTokens", [
            "y",
            "R",
            "u",
            "Q",
            "q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "i",
            "t",
            "T",
        ]);
    }
    parse(n, r, a) {
        const o = (i) => ({ year: i, isTwoDigitYear: r === "YY" });
        switch (r) {
            case "Y":
                return Ie(Oe(4, n), o);
            case "Yo":
                return Ie(a.ordinalNumber(n, { unit: "year" }), o);
            default:
                return Ie(Oe(r.length, n), o);
        }
    }
    validate(n, r) {
        return r.isTwoDigitYear || r.year > 0;
    }
    set(n, r, a, o) {
        const i = Wd(n, o);
        if (a.isTwoDigitYear) {
            const l = ry(a.year, i);
            return (
                n.setFullYear(l, 0, o.firstWeekContainsDate),
                n.setHours(0, 0, 0, 0),
                _n(n, o)
            );
        }
        const s = !("era" in r) || r.era === 1 ? a.year : 1 - a.year;
        return (
            n.setFullYear(s, 0, o.firstWeekContainsDate),
            n.setHours(0, 0, 0, 0),
            _n(n, o)
        );
    }
}
class mE extends fe {
    constructor() {
        super(...arguments);
        U(this, "priority", 130);
        U(this, "incompatibleTokens", [
            "G",
            "y",
            "Y",
            "u",
            "Q",
            "q",
            "M",
            "L",
            "w",
            "d",
            "D",
            "e",
            "c",
            "t",
            "T",
        ]);
    }
    parse(n, r) {
        return Ls(r === "R" ? 4 : r.length, n);
    }
    set(n, r, a) {
        const o = he(n, 0);
        return o.setFullYear(a, 0, 4), o.setHours(0, 0, 0, 0), _a(o);
    }
}
class vE extends fe {
    constructor() {
        super(...arguments);
        U(this, "priority", 130);
        U(this, "incompatibleTokens", [
            "G",
            "y",
            "Y",
            "R",
            "w",
            "I",
            "i",
            "e",
            "c",
            "t",
            "T",
        ]);
    }
    parse(n, r) {
        return Ls(r === "u" ? 4 : r.length, n);
    }
    set(n, r, a) {
        return n.setFullYear(a, 0, 1), n.setHours(0, 0, 0, 0), n;
    }
}
class gE extends fe {
    constructor() {
        super(...arguments);
        U(this, "priority", 120);
        U(this, "incompatibleTokens", [
            "Y",
            "R",
            "q",
            "M",
            "L",
            "w",
            "I",
            "d",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T",
        ]);
    }
    parse(n, r, a) {
        switch (r) {
            case "Q":
            case "QQ":
                return Oe(r.length, n);
            case "Qo":
                return a.ordinalNumber(n, { unit: "quarter" });
            case "QQQ":
                return (
                    a.quarter(n, {
                        width: "abbreviated",
                        context: "formatting",
                    }) ||
                    a.quarter(n, { width: "narrow", context: "formatting" })
                );
            case "QQQQQ":
                return a.quarter(n, { width: "narrow", context: "formatting" });
            case "QQQQ":
            default:
                return (
                    a.quarter(n, { width: "wide", context: "formatting" }) ||
                    a.quarter(n, {
                        width: "abbreviated",
                        context: "formatting",
                    }) ||
                    a.quarter(n, { width: "narrow", context: "formatting" })
                );
        }
    }
    validate(n, r) {
        return r >= 1 && r <= 4;
    }
    set(n, r, a) {
        return n.setMonth((a - 1) * 3, 1), n.setHours(0, 0, 0, 0), n;
    }
}
class yE extends fe {
    constructor() {
        super(...arguments);
        U(this, "priority", 120);
        U(this, "incompatibleTokens", [
            "Y",
            "R",
            "Q",
            "M",
            "L",
            "w",
            "I",
            "d",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T",
        ]);
    }
    parse(n, r, a) {
        switch (r) {
            case "q":
            case "qq":
                return Oe(r.length, n);
            case "qo":
                return a.ordinalNumber(n, { unit: "quarter" });
            case "qqq":
                return (
                    a.quarter(n, {
                        width: "abbreviated",
                        context: "standalone",
                    }) ||
                    a.quarter(n, { width: "narrow", context: "standalone" })
                );
            case "qqqqq":
                return a.quarter(n, { width: "narrow", context: "standalone" });
            case "qqqq":
            default:
                return (
                    a.quarter(n, { width: "wide", context: "standalone" }) ||
                    a.quarter(n, {
                        width: "abbreviated",
                        context: "standalone",
                    }) ||
                    a.quarter(n, { width: "narrow", context: "standalone" })
                );
        }
    }
    validate(n, r) {
        return r >= 1 && r <= 4;
    }
    set(n, r, a) {
        return n.setMonth((a - 1) * 3, 1), n.setHours(0, 0, 0, 0), n;
    }
}
class wE extends fe {
    constructor() {
        super(...arguments);
        U(this, "incompatibleTokens", [
            "Y",
            "R",
            "q",
            "Q",
            "L",
            "w",
            "I",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T",
        ]);
        U(this, "priority", 110);
    }
    parse(n, r, a) {
        const o = (i) => i - 1;
        switch (r) {
            case "M":
                return Ie(be(je.month, n), o);
            case "MM":
                return Ie(Oe(2, n), o);
            case "Mo":
                return Ie(a.ordinalNumber(n, { unit: "month" }), o);
            case "MMM":
                return (
                    a.month(n, {
                        width: "abbreviated",
                        context: "formatting",
                    }) || a.month(n, { width: "narrow", context: "formatting" })
                );
            case "MMMMM":
                return a.month(n, { width: "narrow", context: "formatting" });
            case "MMMM":
            default:
                return (
                    a.month(n, { width: "wide", context: "formatting" }) ||
                    a.month(n, {
                        width: "abbreviated",
                        context: "formatting",
                    }) ||
                    a.month(n, { width: "narrow", context: "formatting" })
                );
        }
    }
    validate(n, r) {
        return r >= 0 && r <= 11;
    }
    set(n, r, a) {
        return n.setMonth(a, 1), n.setHours(0, 0, 0, 0), n;
    }
}
class xE extends fe {
    constructor() {
        super(...arguments);
        U(this, "priority", 110);
        U(this, "incompatibleTokens", [
            "Y",
            "R",
            "q",
            "Q",
            "M",
            "w",
            "I",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T",
        ]);
    }
    parse(n, r, a) {
        const o = (i) => i - 1;
        switch (r) {
            case "L":
                return Ie(be(je.month, n), o);
            case "LL":
                return Ie(Oe(2, n), o);
            case "Lo":
                return Ie(a.ordinalNumber(n, { unit: "month" }), o);
            case "LLL":
                return (
                    a.month(n, {
                        width: "abbreviated",
                        context: "standalone",
                    }) || a.month(n, { width: "narrow", context: "standalone" })
                );
            case "LLLLL":
                return a.month(n, { width: "narrow", context: "standalone" });
            case "LLLL":
            default:
                return (
                    a.month(n, { width: "wide", context: "standalone" }) ||
                    a.month(n, {
                        width: "abbreviated",
                        context: "standalone",
                    }) ||
                    a.month(n, { width: "narrow", context: "standalone" })
                );
        }
    }
    validate(n, r) {
        return r >= 0 && r <= 11;
    }
    set(n, r, a) {
        return n.setMonth(a, 1), n.setHours(0, 0, 0, 0), n;
    }
}
function DE(e, t, n) {
    const r = H(e),
        a = Gg(r, n) - t;
    return r.setDate(r.getDate() - a * 7), r;
}
class kE extends fe {
    constructor() {
        super(...arguments);
        U(this, "priority", 100);
        U(this, "incompatibleTokens", [
            "y",
            "R",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "i",
            "t",
            "T",
        ]);
    }
    parse(n, r, a) {
        switch (r) {
            case "w":
                return be(je.week, n);
            case "wo":
                return a.ordinalNumber(n, { unit: "week" });
            default:
                return Oe(r.length, n);
        }
    }
    validate(n, r) {
        return r >= 1 && r <= 53;
    }
    set(n, r, a, o) {
        return _n(DE(n, a, o), o);
    }
}
function SE(e, t) {
    const n = H(e),
        r = Ad(n) - t;
    return n.setDate(n.getDate() - r * 7), n;
}
class EE extends fe {
    constructor() {
        super(...arguments);
        U(this, "priority", 100);
        U(this, "incompatibleTokens", [
            "y",
            "Y",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "w",
            "d",
            "D",
            "e",
            "c",
            "t",
            "T",
        ]);
    }
    parse(n, r, a) {
        switch (r) {
            case "I":
                return be(je.week, n);
            case "Io":
                return a.ordinalNumber(n, { unit: "week" });
            default:
                return Oe(r.length, n);
        }
    }
    validate(n, r) {
        return r >= 1 && r <= 53;
    }
    set(n, r, a) {
        return _a(SE(n, a));
    }
}
const CE = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    _E = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
class bE extends fe {
    constructor() {
        super(...arguments);
        U(this, "priority", 90);
        U(this, "subPriority", 1);
        U(this, "incompatibleTokens", [
            "Y",
            "R",
            "q",
            "Q",
            "w",
            "I",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T",
        ]);
    }
    parse(n, r, a) {
        switch (r) {
            case "d":
                return be(je.date, n);
            case "do":
                return a.ordinalNumber(n, { unit: "date" });
            default:
                return Oe(r.length, n);
        }
    }
    validate(n, r) {
        const a = n.getFullYear(),
            o = ay(a),
            i = n.getMonth();
        return o ? r >= 1 && r <= _E[i] : r >= 1 && r <= CE[i];
    }
    set(n, r, a) {
        return n.setDate(a), n.setHours(0, 0, 0, 0), n;
    }
}
class NE extends fe {
    constructor() {
        super(...arguments);
        U(this, "priority", 90);
        U(this, "subpriority", 1);
        U(this, "incompatibleTokens", [
            "Y",
            "R",
            "q",
            "Q",
            "M",
            "L",
            "w",
            "I",
            "d",
            "E",
            "i",
            "e",
            "c",
            "t",
            "T",
        ]);
    }
    parse(n, r, a) {
        switch (r) {
            case "D":
            case "DD":
                return be(je.dayOfYear, n);
            case "Do":
                return a.ordinalNumber(n, { unit: "date" });
            default:
                return Oe(r.length, n);
        }
    }
    validate(n, r) {
        const a = n.getFullYear();
        return ay(a) ? r >= 1 && r <= 366 : r >= 1 && r <= 365;
    }
    set(n, r, a) {
        return n.setMonth(0, a), n.setHours(0, 0, 0, 0), n;
    }
}
function Ud(e, t, n) {
    var d, p, v, g;
    const r = Ur(),
        a =
            (n == null ? void 0 : n.weekStartsOn) ??
            ((p =
                (d = n == null ? void 0 : n.locale) == null
                    ? void 0
                    : d.options) == null
                ? void 0
                : p.weekStartsOn) ??
            r.weekStartsOn ??
            ((g = (v = r.locale) == null ? void 0 : v.options) == null
                ? void 0
                : g.weekStartsOn) ??
            0,
        o = H(e),
        i = o.getDay(),
        l = ((t % 7) + 7) % 7,
        u = 7 - a,
        c = t < 0 || t > 6 ? t - ((i + u) % 7) : ((l + u) % 7) - ((i + u) % 7);
    return dr(o, c);
}
class PE extends fe {
    constructor() {
        super(...arguments);
        U(this, "priority", 90);
        U(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
    }
    parse(n, r, a) {
        switch (r) {
            case "E":
            case "EE":
            case "EEE":
                return (
                    a.day(n, { width: "abbreviated", context: "formatting" }) ||
                    a.day(n, { width: "short", context: "formatting" }) ||
                    a.day(n, { width: "narrow", context: "formatting" })
                );
            case "EEEEE":
                return a.day(n, { width: "narrow", context: "formatting" });
            case "EEEEEE":
                return (
                    a.day(n, { width: "short", context: "formatting" }) ||
                    a.day(n, { width: "narrow", context: "formatting" })
                );
            case "EEEE":
            default:
                return (
                    a.day(n, { width: "wide", context: "formatting" }) ||
                    a.day(n, { width: "abbreviated", context: "formatting" }) ||
                    a.day(n, { width: "short", context: "formatting" }) ||
                    a.day(n, { width: "narrow", context: "formatting" })
                );
        }
    }
    validate(n, r) {
        return r >= 0 && r <= 6;
    }
    set(n, r, a, o) {
        return (n = Ud(n, a, o)), n.setHours(0, 0, 0, 0), n;
    }
}
class ME extends fe {
    constructor() {
        super(...arguments);
        U(this, "priority", 90);
        U(this, "incompatibleTokens", [
            "y",
            "R",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "E",
            "i",
            "c",
            "t",
            "T",
        ]);
    }
    parse(n, r, a, o) {
        const i = (s) => {
            const l = Math.floor((s - 1) / 7) * 7;
            return ((s + o.weekStartsOn + 6) % 7) + l;
        };
        switch (r) {
            case "e":
            case "ee":
                return Ie(Oe(r.length, n), i);
            case "eo":
                return Ie(a.ordinalNumber(n, { unit: "day" }), i);
            case "eee":
                return (
                    a.day(n, { width: "abbreviated", context: "formatting" }) ||
                    a.day(n, { width: "short", context: "formatting" }) ||
                    a.day(n, { width: "narrow", context: "formatting" })
                );
            case "eeeee":
                return a.day(n, { width: "narrow", context: "formatting" });
            case "eeeeee":
                return (
                    a.day(n, { width: "short", context: "formatting" }) ||
                    a.day(n, { width: "narrow", context: "formatting" })
                );
            case "eeee":
            default:
                return (
                    a.day(n, { width: "wide", context: "formatting" }) ||
                    a.day(n, { width: "abbreviated", context: "formatting" }) ||
                    a.day(n, { width: "short", context: "formatting" }) ||
                    a.day(n, { width: "narrow", context: "formatting" })
                );
        }
    }
    validate(n, r) {
        return r >= 0 && r <= 6;
    }
    set(n, r, a, o) {
        return (n = Ud(n, a, o)), n.setHours(0, 0, 0, 0), n;
    }
}
class TE extends fe {
    constructor() {
        super(...arguments);
        U(this, "priority", 90);
        U(this, "incompatibleTokens", [
            "y",
            "R",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "E",
            "i",
            "e",
            "t",
            "T",
        ]);
    }
    parse(n, r, a, o) {
        const i = (s) => {
            const l = Math.floor((s - 1) / 7) * 7;
            return ((s + o.weekStartsOn + 6) % 7) + l;
        };
        switch (r) {
            case "c":
            case "cc":
                return Ie(Oe(r.length, n), i);
            case "co":
                return Ie(a.ordinalNumber(n, { unit: "day" }), i);
            case "ccc":
                return (
                    a.day(n, { width: "abbreviated", context: "standalone" }) ||
                    a.day(n, { width: "short", context: "standalone" }) ||
                    a.day(n, { width: "narrow", context: "standalone" })
                );
            case "ccccc":
                return a.day(n, { width: "narrow", context: "standalone" });
            case "cccccc":
                return (
                    a.day(n, { width: "short", context: "standalone" }) ||
                    a.day(n, { width: "narrow", context: "standalone" })
                );
            case "cccc":
            default:
                return (
                    a.day(n, { width: "wide", context: "standalone" }) ||
                    a.day(n, { width: "abbreviated", context: "standalone" }) ||
                    a.day(n, { width: "short", context: "standalone" }) ||
                    a.day(n, { width: "narrow", context: "standalone" })
                );
        }
    }
    validate(n, r) {
        return r >= 0 && r <= 6;
    }
    set(n, r, a, o) {
        return (n = Ud(n, a, o)), n.setHours(0, 0, 0, 0), n;
    }
}
function RE(e) {
    let n = H(e).getDay();
    return n === 0 && (n = 7), n;
}
function OE(e, t) {
    const n = H(e),
        r = RE(n),
        a = t - r;
    return dr(n, a);
}
class LE extends fe {
    constructor() {
        super(...arguments);
        U(this, "priority", 90);
        U(this, "incompatibleTokens", [
            "y",
            "Y",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "w",
            "d",
            "D",
            "E",
            "e",
            "c",
            "t",
            "T",
        ]);
    }
    parse(n, r, a) {
        const o = (i) => (i === 0 ? 7 : i);
        switch (r) {
            case "i":
            case "ii":
                return Oe(r.length, n);
            case "io":
                return a.ordinalNumber(n, { unit: "day" });
            case "iii":
                return Ie(
                    a.day(n, { width: "abbreviated", context: "formatting" }) ||
                        a.day(n, { width: "short", context: "formatting" }) ||
                        a.day(n, { width: "narrow", context: "formatting" }),
                    o
                );
            case "iiiii":
                return Ie(
                    a.day(n, { width: "narrow", context: "formatting" }),
                    o
                );
            case "iiiiii":
                return Ie(
                    a.day(n, { width: "short", context: "formatting" }) ||
                        a.day(n, { width: "narrow", context: "formatting" }),
                    o
                );
            case "iiii":
            default:
                return Ie(
                    a.day(n, { width: "wide", context: "formatting" }) ||
                        a.day(n, {
                            width: "abbreviated",
                            context: "formatting",
                        }) ||
                        a.day(n, { width: "short", context: "formatting" }) ||
                        a.day(n, { width: "narrow", context: "formatting" }),
                    o
                );
        }
    }
    validate(n, r) {
        return r >= 1 && r <= 7;
    }
    set(n, r, a) {
        return (n = OE(n, a)), n.setHours(0, 0, 0, 0), n;
    }
}
class jE extends fe {
    constructor() {
        super(...arguments);
        U(this, "priority", 80);
        U(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
    }
    parse(n, r, a) {
        switch (r) {
            case "a":
            case "aa":
            case "aaa":
                return (
                    a.dayPeriod(n, {
                        width: "abbreviated",
                        context: "formatting",
                    }) ||
                    a.dayPeriod(n, { width: "narrow", context: "formatting" })
                );
            case "aaaaa":
                return a.dayPeriod(n, {
                    width: "narrow",
                    context: "formatting",
                });
            case "aaaa":
            default:
                return (
                    a.dayPeriod(n, { width: "wide", context: "formatting" }) ||
                    a.dayPeriod(n, {
                        width: "abbreviated",
                        context: "formatting",
                    }) ||
                    a.dayPeriod(n, { width: "narrow", context: "formatting" })
                );
        }
    }
    set(n, r, a) {
        return n.setHours(Yd(a), 0, 0, 0), n;
    }
}
class IE extends fe {
    constructor() {
        super(...arguments);
        U(this, "priority", 80);
        U(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
    }
    parse(n, r, a) {
        switch (r) {
            case "b":
            case "bb":
            case "bbb":
                return (
                    a.dayPeriod(n, {
                        width: "abbreviated",
                        context: "formatting",
                    }) ||
                    a.dayPeriod(n, { width: "narrow", context: "formatting" })
                );
            case "bbbbb":
                return a.dayPeriod(n, {
                    width: "narrow",
                    context: "formatting",
                });
            case "bbbb":
            default:
                return (
                    a.dayPeriod(n, { width: "wide", context: "formatting" }) ||
                    a.dayPeriod(n, {
                        width: "abbreviated",
                        context: "formatting",
                    }) ||
                    a.dayPeriod(n, { width: "narrow", context: "formatting" })
                );
        }
    }
    set(n, r, a) {
        return n.setHours(Yd(a), 0, 0, 0), n;
    }
}
class FE extends fe {
    constructor() {
        super(...arguments);
        U(this, "priority", 80);
        U(this, "incompatibleTokens", ["a", "b", "t", "T"]);
    }
    parse(n, r, a) {
        switch (r) {
            case "B":
            case "BB":
            case "BBB":
                return (
                    a.dayPeriod(n, {
                        width: "abbreviated",
                        context: "formatting",
                    }) ||
                    a.dayPeriod(n, { width: "narrow", context: "formatting" })
                );
            case "BBBBB":
                return a.dayPeriod(n, {
                    width: "narrow",
                    context: "formatting",
                });
            case "BBBB":
            default:
                return (
                    a.dayPeriod(n, { width: "wide", context: "formatting" }) ||
                    a.dayPeriod(n, {
                        width: "abbreviated",
                        context: "formatting",
                    }) ||
                    a.dayPeriod(n, { width: "narrow", context: "formatting" })
                );
        }
    }
    set(n, r, a) {
        return n.setHours(Yd(a), 0, 0, 0), n;
    }
}
class AE extends fe {
    constructor() {
        super(...arguments);
        U(this, "priority", 70);
        U(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
    }
    parse(n, r, a) {
        switch (r) {
            case "h":
                return be(je.hour12h, n);
            case "ho":
                return a.ordinalNumber(n, { unit: "hour" });
            default:
                return Oe(r.length, n);
        }
    }
    validate(n, r) {
        return r >= 1 && r <= 12;
    }
    set(n, r, a) {
        const o = n.getHours() >= 12;
        return (
            o && a < 12
                ? n.setHours(a + 12, 0, 0, 0)
                : !o && a === 12
                ? n.setHours(0, 0, 0, 0)
                : n.setHours(a, 0, 0, 0),
            n
        );
    }
}
class WE extends fe {
    constructor() {
        super(...arguments);
        U(this, "priority", 70);
        U(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
    }
    parse(n, r, a) {
        switch (r) {
            case "H":
                return be(je.hour23h, n);
            case "Ho":
                return a.ordinalNumber(n, { unit: "hour" });
            default:
                return Oe(r.length, n);
        }
    }
    validate(n, r) {
        return r >= 0 && r <= 23;
    }
    set(n, r, a) {
        return n.setHours(a, 0, 0, 0), n;
    }
}
class YE extends fe {
    constructor() {
        super(...arguments);
        U(this, "priority", 70);
        U(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
    }
    parse(n, r, a) {
        switch (r) {
            case "K":
                return be(je.hour11h, n);
            case "Ko":
                return a.ordinalNumber(n, { unit: "hour" });
            default:
                return Oe(r.length, n);
        }
    }
    validate(n, r) {
        return r >= 0 && r <= 11;
    }
    set(n, r, a) {
        return (
            n.getHours() >= 12 && a < 12
                ? n.setHours(a + 12, 0, 0, 0)
                : n.setHours(a, 0, 0, 0),
            n
        );
    }
}
class UE extends fe {
    constructor() {
        super(...arguments);
        U(this, "priority", 70);
        U(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
    }
    parse(n, r, a) {
        switch (r) {
            case "k":
                return be(je.hour24h, n);
            case "ko":
                return a.ordinalNumber(n, { unit: "hour" });
            default:
                return Oe(r.length, n);
        }
    }
    validate(n, r) {
        return r >= 1 && r <= 24;
    }
    set(n, r, a) {
        const o = a <= 24 ? a % 24 : a;
        return n.setHours(o, 0, 0, 0), n;
    }
}
class zE extends fe {
    constructor() {
        super(...arguments);
        U(this, "priority", 60);
        U(this, "incompatibleTokens", ["t", "T"]);
    }
    parse(n, r, a) {
        switch (r) {
            case "m":
                return be(je.minute, n);
            case "mo":
                return a.ordinalNumber(n, { unit: "minute" });
            default:
                return Oe(r.length, n);
        }
    }
    validate(n, r) {
        return r >= 0 && r <= 59;
    }
    set(n, r, a) {
        return n.setMinutes(a, 0, 0), n;
    }
}
class HE extends fe {
    constructor() {
        super(...arguments);
        U(this, "priority", 50);
        U(this, "incompatibleTokens", ["t", "T"]);
    }
    parse(n, r, a) {
        switch (r) {
            case "s":
                return be(je.second, n);
            case "so":
                return a.ordinalNumber(n, { unit: "second" });
            default:
                return Oe(r.length, n);
        }
    }
    validate(n, r) {
        return r >= 0 && r <= 59;
    }
    set(n, r, a) {
        return n.setSeconds(a, 0), n;
    }
}
class BE extends fe {
    constructor() {
        super(...arguments);
        U(this, "priority", 30);
        U(this, "incompatibleTokens", ["t", "T"]);
    }
    parse(n, r) {
        const a = (o) => Math.trunc(o * Math.pow(10, -r.length + 3));
        return Ie(Oe(r.length, n), a);
    }
    set(n, r, a) {
        return n.setMilliseconds(a), n;
    }
}
class VE extends fe {
    constructor() {
        super(...arguments);
        U(this, "priority", 10);
        U(this, "incompatibleTokens", ["t", "T", "x"]);
    }
    parse(n, r) {
        switch (r) {
            case "X":
                return on(an.basicOptionalMinutes, n);
            case "XX":
                return on(an.basic, n);
            case "XXXX":
                return on(an.basicOptionalSeconds, n);
            case "XXXXX":
                return on(an.extendedOptionalSeconds, n);
            case "XXX":
            default:
                return on(an.extended, n);
        }
    }
    set(n, r, a) {
        return r.timestampIsSet ? n : he(n, n.getTime() - Ns(n) - a);
    }
}
class $E extends fe {
    constructor() {
        super(...arguments);
        U(this, "priority", 10);
        U(this, "incompatibleTokens", ["t", "T", "X"]);
    }
    parse(n, r) {
        switch (r) {
            case "x":
                return on(an.basicOptionalMinutes, n);
            case "xx":
                return on(an.basic, n);
            case "xxxx":
                return on(an.basicOptionalSeconds, n);
            case "xxxxx":
                return on(an.extendedOptionalSeconds, n);
            case "xxx":
            default:
                return on(an.extended, n);
        }
    }
    set(n, r, a) {
        return r.timestampIsSet ? n : he(n, n.getTime() - Ns(n) - a);
    }
}
class QE extends fe {
    constructor() {
        super(...arguments);
        U(this, "priority", 40);
        U(this, "incompatibleTokens", "*");
    }
    parse(n) {
        return ny(n);
    }
    set(n, r, a) {
        return [he(n, a * 1e3), { timestampIsSet: !0 }];
    }
}
class KE extends fe {
    constructor() {
        super(...arguments);
        U(this, "priority", 20);
        U(this, "incompatibleTokens", "*");
    }
    parse(n) {
        return ny(n);
    }
    set(n, r, a) {
        return [he(n, a), { timestampIsSet: !0 }];
    }
}
const qE = {
        G: new fE(),
        y: new pE(),
        Y: new hE(),
        R: new mE(),
        u: new vE(),
        Q: new gE(),
        q: new yE(),
        M: new wE(),
        L: new xE(),
        w: new kE(),
        I: new EE(),
        d: new bE(),
        D: new NE(),
        E: new PE(),
        e: new ME(),
        c: new TE(),
        i: new LE(),
        a: new jE(),
        b: new IE(),
        B: new FE(),
        h: new AE(),
        H: new WE(),
        K: new YE(),
        k: new UE(),
        m: new zE(),
        s: new HE(),
        S: new BE(),
        X: new VE(),
        x: new $E(),
        t: new QE(),
        T: new KE(),
    },
    XE = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    GE = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    JE = /^'([^]*?)'?$/,
    ZE = /''/g,
    eC = /\S/,
    tC = /[a-zA-Z]/;
function su(e, t, n, r) {
    var w, k, h, m, y, C, P, D;
    const a = sE(),
        o = (r == null ? void 0 : r.locale) ?? a.locale ?? qg,
        i =
            (r == null ? void 0 : r.firstWeekContainsDate) ??
            ((k =
                (w = r == null ? void 0 : r.locale) == null
                    ? void 0
                    : w.options) == null
                ? void 0
                : k.firstWeekContainsDate) ??
            a.firstWeekContainsDate ??
            ((m = (h = a.locale) == null ? void 0 : h.options) == null
                ? void 0
                : m.firstWeekContainsDate) ??
            1,
        s =
            (r == null ? void 0 : r.weekStartsOn) ??
            ((C =
                (y = r == null ? void 0 : r.locale) == null
                    ? void 0
                    : y.options) == null
                ? void 0
                : C.weekStartsOn) ??
            a.weekStartsOn ??
            ((D = (P = a.locale) == null ? void 0 : P.options) == null
                ? void 0
                : D.weekStartsOn) ??
            0;
    if (t === "") return e === "" ? H(n) : he(n, NaN);
    const l = { firstWeekContainsDate: i, weekStartsOn: s, locale: o },
        u = [new dE()],
        c = t
            .match(GE)
            .map((S) => {
                const b = S[0];
                if (b in Rs) {
                    const R = Rs[b];
                    return R(S, o.formatLong);
                }
                return S;
            })
            .join("")
            .match(XE),
        d = [];
    for (let S of c) {
        !(r != null && r.useAdditionalWeekYearTokens) && ey(S) && Dc(S, t, e),
            !(r != null && r.useAdditionalDayOfYearTokens) &&
                Zg(S) &&
                Dc(S, t, e);
        const b = S[0],
            R = qE[b];
        if (R) {
            const { incompatibleTokens: F } = R;
            if (Array.isArray(F)) {
                const K = d.find((X) => F.includes(X.token) || X.token === b);
                if (K)
                    throw new RangeError(
                        `The format string mustn't contain \`${K.fullToken}\` and \`${S}\` at the same time`
                    );
            } else if (R.incompatibleTokens === "*" && d.length > 0)
                throw new RangeError(
                    `The format string mustn't contain \`${S}\` and any other token at the same time`
                );
            d.push({ token: b, fullToken: S });
            const z = R.run(e, S, o.match, l);
            if (!z) return he(n, NaN);
            u.push(z.setter), (e = z.rest);
        } else {
            if (b.match(tC))
                throw new RangeError(
                    "Format string contains an unescaped latin alphabet character `" +
                        b +
                        "`"
                );
            if (
                (S === "''" ? (S = "'") : b === "'" && (S = nC(S)),
                e.indexOf(S) === 0)
            )
                e = e.slice(S.length);
            else return he(n, NaN);
        }
    }
    if (e.length > 0 && eC.test(e)) return he(n, NaN);
    const p = u
        .map((S) => S.priority)
        .sort((S, b) => b - S)
        .filter((S, b, R) => R.indexOf(S) === b)
        .map((S) =>
            u
                .filter((b) => b.priority === S)
                .sort((b, R) => R.subPriority - b.subPriority)
        )
        .map((S) => S[0]);
    let v = H(n);
    if (isNaN(v.getTime())) return he(n, NaN);
    const g = {};
    for (const S of p) {
        if (!S.validate(v, l)) return he(n, NaN);
        const b = S.set(v, g, l);
        Array.isArray(b) ? ((v = b[0]), Object.assign(g, b[1])) : (v = b);
    }
    return he(n, v);
}
function nC(e) {
    return e.match(JE)[1].replace(ZE, "'");
}
function rC(e, t) {
    const r = sC(e);
    let a;
    if (r.date) {
        const l = lC(r.date, 2);
        a = uC(l.restDateString, l.year);
    }
    if (!a || isNaN(a.getTime())) return new Date(NaN);
    const o = a.getTime();
    let i = 0,
        s;
    if (r.time && ((i = cC(r.time)), isNaN(i))) return new Date(NaN);
    if (r.timezone) {
        if (((s = dC(r.timezone)), isNaN(s))) return new Date(NaN);
    } else {
        const l = new Date(o + i),
            u = new Date(0);
        return (
            u.setFullYear(l.getUTCFullYear(), l.getUTCMonth(), l.getUTCDate()),
            u.setHours(
                l.getUTCHours(),
                l.getUTCMinutes(),
                l.getUTCSeconds(),
                l.getUTCMilliseconds()
            ),
            u
        );
    }
    return new Date(o + i + s);
}
const _i = {
        dateTimeDelimiter: /[T ]/,
        timeZoneDelimiter: /[Z ]/i,
        timezone: /([Z+-].*)$/,
    },
    aC = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
    oC =
        /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
    iC = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function sC(e) {
    const t = {},
        n = e.split(_i.dateTimeDelimiter);
    let r;
    if (n.length > 2) return t;
    if (
        (/:/.test(n[0])
            ? (r = n[0])
            : ((t.date = n[0]),
              (r = n[1]),
              _i.timeZoneDelimiter.test(t.date) &&
                  ((t.date = e.split(_i.timeZoneDelimiter)[0]),
                  (r = e.substr(t.date.length, e.length)))),
        r)
    ) {
        const a = _i.timezone.exec(r);
        a
            ? ((t.time = r.replace(a[1], "")), (t.timezone = a[1]))
            : (t.time = r);
    }
    return t;
}
function lC(e, t) {
    const n = new RegExp(
            "^(?:(\\d{4}|[+-]\\d{" +
                (4 + t) +
                "})|(\\d{2}|[+-]\\d{" +
                (2 + t) +
                "})$)"
        ),
        r = e.match(n);
    if (!r) return { year: NaN, restDateString: "" };
    const a = r[1] ? parseInt(r[1]) : null,
        o = r[2] ? parseInt(r[2]) : null;
    return {
        year: o === null ? a : o * 100,
        restDateString: e.slice((r[1] || r[2]).length),
    };
}
function uC(e, t) {
    if (t === null) return new Date(NaN);
    const n = e.match(aC);
    if (!n) return new Date(NaN);
    const r = !!n[4],
        a = eo(n[1]),
        o = eo(n[2]) - 1,
        i = eo(n[3]),
        s = eo(n[4]),
        l = eo(n[5]) - 1;
    if (r) return vC(t, s, l) ? fC(t, s, l) : new Date(NaN);
    {
        const u = new Date(0);
        return !hC(t, o, i) || !mC(t, a)
            ? new Date(NaN)
            : (u.setUTCFullYear(t, o, Math.max(a, i)), u);
    }
}
function eo(e) {
    return e ? parseInt(e) : 1;
}
function cC(e) {
    const t = e.match(oC);
    if (!t) return NaN;
    const n = lu(t[1]),
        r = lu(t[2]),
        a = lu(t[3]);
    return gC(n, r, a) ? n * ml + r * hl + a * 1e3 : NaN;
}
function lu(e) {
    return (e && parseFloat(e.replace(",", "."))) || 0;
}
function dC(e) {
    if (e === "Z") return 0;
    const t = e.match(iC);
    if (!t) return 0;
    const n = t[1] === "+" ? -1 : 1,
        r = parseInt(t[2]),
        a = (t[3] && parseInt(t[3])) || 0;
    return yC(r, a) ? n * (r * ml + a * hl) : NaN;
}
function fC(e, t, n) {
    const r = new Date(0);
    r.setUTCFullYear(e, 0, 4);
    const a = r.getUTCDay() || 7,
        o = (t - 1) * 7 + n + 1 - a;
    return r.setUTCDate(r.getUTCDate() + o), r;
}
const pC = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function oy(e) {
    return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
}
function hC(e, t, n) {
    return t >= 0 && t <= 11 && n >= 1 && n <= (pC[t] || (oy(e) ? 29 : 28));
}
function mC(e, t) {
    return t >= 1 && t <= (oy(e) ? 366 : 365);
}
function vC(e, t, n) {
    return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function gC(e, t, n) {
    return e === 24
        ? t === 0 && n === 0
        : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function yC(e, t) {
    return t >= 0 && t <= 59;
}
function wC(e) {
    const t = H(e),
        n = t.getFullYear(),
        r = t.getMonth(),
        a = he(e, 0);
    return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function yt(e, t) {
    const n = H(e),
        r = n.getFullYear(),
        a = n.getDate(),
        o = he(e, 0);
    o.setFullYear(r, t, 15), o.setHours(0, 0, 0, 0);
    const i = wC(o);
    return n.setMonth(t, Math.min(a, i)), n;
}
function xC(e, t) {
    let n = H(e);
    return isNaN(+n)
        ? he(e, NaN)
        : (t.year != null && n.setFullYear(t.year),
          t.month != null && (n = yt(n, t.month)),
          t.date != null && n.setDate(t.date),
          t.hours != null && n.setHours(t.hours),
          t.minutes != null && n.setMinutes(t.minutes),
          t.seconds != null && n.setSeconds(t.seconds),
          t.milliseconds != null && n.setMilliseconds(t.milliseconds),
          n);
}
function $i(e, t) {
    const n = H(e);
    return n.setHours(t), n;
}
function Qi(e, t) {
    const n = H(e);
    return n.setMinutes(t), n;
}
function Qr(e, t) {
    const n = H(e),
        r = Math.trunc(n.getMonth() / 3) + 1,
        a = t - r;
    return yt(n, n.getMonth() + a * 3);
}
function Ki(e, t) {
    const n = H(e);
    return n.setSeconds(t), n;
}
function Zt(e, t) {
    const n = H(e);
    return isNaN(+n) ? he(e, NaN) : (n.setFullYear(t), n);
}
function iy(e) {
    const t = H(e);
    return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function DC(e, t) {
    return dr(e, -t);
}
function ba(e, t) {
    return Qt(e, -t);
}
function sy(e, t) {
    return Fd(e, -t);
}
function ih(e, t) {
    return bs(e, -t);
}
function Na(e, t) {
    return wn(e, -t);
}
function or(e) {
    return ly(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function kt(e) {
    var t;
    return (
        (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
        window
    );
}
function Nn(e) {
    var t;
    return (t = (ly(e) ? e.ownerDocument : e.document) || window.document) ==
        null
        ? void 0
        : t.documentElement;
}
function ly(e) {
    return e instanceof Node || e instanceof kt(e).Node;
}
function xt(e) {
    return e instanceof Element || e instanceof kt(e).Element;
}
function fn(e) {
    return e instanceof HTMLElement || e instanceof kt(e).HTMLElement;
}
function sh(e) {
    return typeof ShadowRoot > "u"
        ? !1
        : e instanceof ShadowRoot || e instanceof kt(e).ShadowRoot;
}
function ei(e) {
    const { overflow: t, overflowX: n, overflowY: r, display: a } = Et(e);
    return (
        /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
        !["inline", "contents"].includes(a)
    );
}
function kC(e) {
    return ["table", "td", "th"].includes(or(e));
}
function SC(e) {
    return [":popover-open", ":modal"].some((t) => {
        try {
            return e.matches(t);
        } catch {
            return !1;
        }
    });
}
function zd(e) {
    const t = Hd(),
        n = Et(e);
    return (
        n.transform !== "none" ||
        n.perspective !== "none" ||
        (n.containerType ? n.containerType !== "normal" : !1) ||
        (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
        (!t && (n.filter ? n.filter !== "none" : !1)) ||
        ["transform", "perspective", "filter"].some((r) =>
            (n.willChange || "").includes(r)
        ) ||
        ["paint", "layout", "strict", "content"].some((r) =>
            (n.contain || "").includes(r)
        )
    );
}
function EC(e) {
    let t = Pa(e);
    for (; fn(t) && !gl(t); ) {
        if (SC(t)) return null;
        if (zd(t)) return t;
        t = Pa(t);
    }
    return null;
}
function Hd() {
    return typeof CSS > "u" || !CSS.supports
        ? !1
        : CSS.supports("-webkit-backdrop-filter", "none");
}
function gl(e) {
    return ["html", "body", "#document"].includes(or(e));
}
function Et(e) {
    return kt(e).getComputedStyle(e);
}
function yl(e) {
    return xt(e)
        ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
        : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Pa(e) {
    if (or(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || (sh(e) && e.host) || Nn(e);
    return sh(t) ? t.host : t;
}
function uy(e) {
    const t = Pa(e);
    return gl(t)
        ? e.ownerDocument
            ? e.ownerDocument.body
            : e.body
        : fn(t) && ei(t)
        ? t
        : uy(t);
}
function Uo(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const a = uy(e),
        o = a === ((r = e.ownerDocument) == null ? void 0 : r.body),
        i = kt(a);
    return o
        ? t.concat(
              i,
              i.visualViewport || [],
              ei(a) ? a : [],
              i.frameElement && n ? Uo(i.frameElement) : []
          )
        : t.concat(a, Uo(a, [], n));
}
const Ma = Math.min,
    br = Math.max,
    js = Math.round,
    bi = Math.floor,
    ir = (e) => ({ x: e, y: e }),
    CC = { left: "right", right: "left", bottom: "top", top: "bottom" },
    _C = { start: "end", end: "start" };
function bC(e, t, n) {
    return br(e, Ma(t, n));
}
function wl(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function Ta(e) {
    return e.split("-")[0];
}
function ti(e) {
    return e.split("-")[1];
}
function NC(e) {
    return e === "x" ? "y" : "x";
}
function Bd(e) {
    return e === "y" ? "height" : "width";
}
function Vd(e) {
    return ["top", "bottom"].includes(Ta(e)) ? "y" : "x";
}
function $d(e) {
    return NC(Vd(e));
}
function PC(e, t, n) {
    n === void 0 && (n = !1);
    const r = ti(e),
        a = $d(e),
        o = Bd(a);
    let i =
        a === "x"
            ? r === (n ? "end" : "start")
                ? "right"
                : "left"
            : r === "start"
            ? "bottom"
            : "top";
    return t.reference[o] > t.floating[o] && (i = Is(i)), [i, Is(i)];
}
function MC(e) {
    const t = Is(e);
    return [Ec(e), t, Ec(t)];
}
function Ec(e) {
    return e.replace(/start|end/g, (t) => _C[t]);
}
function TC(e, t, n) {
    const r = ["left", "right"],
        a = ["right", "left"],
        o = ["top", "bottom"],
        i = ["bottom", "top"];
    switch (e) {
        case "top":
        case "bottom":
            return n ? (t ? a : r) : t ? r : a;
        case "left":
        case "right":
            return t ? o : i;
        default:
            return [];
    }
}
function RC(e, t, n, r) {
    const a = ti(e);
    let o = TC(Ta(e), n === "start", r);
    return (
        a && ((o = o.map((i) => i + "-" + a)), t && (o = o.concat(o.map(Ec)))),
        o
    );
}
function Is(e) {
    return e.replace(/left|right|bottom|top/g, (t) => CC[t]);
}
function OC(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function cy(e) {
    return typeof e != "number"
        ? OC(e)
        : { top: e, right: e, bottom: e, left: e };
}
function Fs(e) {
    const { x: t, y: n, width: r, height: a } = e;
    return {
        width: r,
        height: a,
        top: n,
        left: t,
        right: t + r,
        bottom: n + a,
        x: t,
        y: n,
    };
}
function lh(e, t, n) {
    let { reference: r, floating: a } = e;
    const o = Vd(t),
        i = $d(t),
        s = Bd(i),
        l = Ta(t),
        u = o === "y",
        c = r.x + r.width / 2 - a.width / 2,
        d = r.y + r.height / 2 - a.height / 2,
        p = r[s] / 2 - a[s] / 2;
    let v;
    switch (l) {
        case "top":
            v = { x: c, y: r.y - a.height };
            break;
        case "bottom":
            v = { x: c, y: r.y + r.height };
            break;
        case "right":
            v = { x: r.x + r.width, y: d };
            break;
        case "left":
            v = { x: r.x - a.width, y: d };
            break;
        default:
            v = { x: r.x, y: r.y };
    }
    switch (ti(t)) {
        case "start":
            v[i] -= p * (n && u ? -1 : 1);
            break;
        case "end":
            v[i] += p * (n && u ? -1 : 1);
            break;
    }
    return v;
}
const LC = async (e, t, n) => {
    const {
            placement: r = "bottom",
            strategy: a = "absolute",
            middleware: o = [],
            platform: i,
        } = n,
        s = o.filter(Boolean),
        l = await (i.isRTL == null ? void 0 : i.isRTL(t));
    let u = await i.getElementRects({ reference: e, floating: t, strategy: a }),
        { x: c, y: d } = lh(u, r, l),
        p = r,
        v = {},
        g = 0;
    for (let w = 0; w < s.length; w++) {
        const { name: k, fn: h } = s[w],
            {
                x: m,
                y,
                data: C,
                reset: P,
            } = await h({
                x: c,
                y: d,
                initialPlacement: r,
                placement: p,
                strategy: a,
                middlewareData: v,
                rects: u,
                platform: i,
                elements: { reference: e, floating: t },
            });
        (c = m ?? c),
            (d = y ?? d),
            (v = { ...v, [k]: { ...v[k], ...C } }),
            P &&
                g <= 50 &&
                (g++,
                typeof P == "object" &&
                    (P.placement && (p = P.placement),
                    P.rects &&
                        (u =
                            P.rects === !0
                                ? await i.getElementRects({
                                      reference: e,
                                      floating: t,
                                      strategy: a,
                                  })
                                : P.rects),
                    ({ x: c, y: d } = lh(u, p, l))),
                (w = -1));
    }
    return { x: c, y: d, placement: p, strategy: a, middlewareData: v };
};
async function jC(e, t) {
    var n;
    t === void 0 && (t = {});
    const { x: r, y: a, platform: o, rects: i, elements: s, strategy: l } = e,
        {
            boundary: u = "clippingAncestors",
            rootBoundary: c = "viewport",
            elementContext: d = "floating",
            altBoundary: p = !1,
            padding: v = 0,
        } = wl(t, e),
        g = cy(v),
        k = s[p ? (d === "floating" ? "reference" : "floating") : d],
        h = Fs(
            await o.getClippingRect({
                element:
                    (n = await (o.isElement == null
                        ? void 0
                        : o.isElement(k))) == null || n
                        ? k
                        : k.contextElement ||
                          (await (o.getDocumentElement == null
                              ? void 0
                              : o.getDocumentElement(s.floating))),
                boundary: u,
                rootBoundary: c,
                strategy: l,
            })
        ),
        m = d === "floating" ? { ...i.floating, x: r, y: a } : i.reference,
        y = await (o.getOffsetParent == null
            ? void 0
            : o.getOffsetParent(s.floating)),
        C = (await (o.isElement == null ? void 0 : o.isElement(y)))
            ? (await (o.getScale == null ? void 0 : o.getScale(y))) || {
                  x: 1,
                  y: 1,
              }
            : { x: 1, y: 1 },
        P = Fs(
            o.convertOffsetParentRelativeRectToViewportRelativeRect
                ? await o.convertOffsetParentRelativeRectToViewportRelativeRect(
                      { elements: s, rect: m, offsetParent: y, strategy: l }
                  )
                : m
        );
    return {
        top: (h.top - P.top + g.top) / C.y,
        bottom: (P.bottom - h.bottom + g.bottom) / C.y,
        left: (h.left - P.left + g.left) / C.x,
        right: (P.right - h.right + g.right) / C.x,
    };
}
const IC = (e) => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const {
                    x: n,
                    y: r,
                    placement: a,
                    rects: o,
                    platform: i,
                    elements: s,
                    middlewareData: l,
                } = t,
                { element: u, padding: c = 0 } = wl(e, t) || {};
            if (u == null) return {};
            const d = cy(c),
                p = { x: n, y: r },
                v = $d(a),
                g = Bd(v),
                w = await i.getDimensions(u),
                k = v === "y",
                h = k ? "top" : "left",
                m = k ? "bottom" : "right",
                y = k ? "clientHeight" : "clientWidth",
                C = o.reference[g] + o.reference[v] - p[v] - o.floating[g],
                P = p[v] - o.reference[v],
                D = await (i.getOffsetParent == null
                    ? void 0
                    : i.getOffsetParent(u));
            let S = D ? D[y] : 0;
            (!S || !(await (i.isElement == null ? void 0 : i.isElement(D)))) &&
                (S = s.floating[y] || o.floating[g]);
            const b = C / 2 - P / 2,
                R = S / 2 - w[g] / 2 - 1,
                F = Ma(d[h], R),
                z = Ma(d[m], R),
                K = F,
                X = S - w[g] - z,
                j = S / 2 - w[g] / 2 + b,
                O = bC(K, j, X),
                $ =
                    !l.arrow &&
                    ti(a) != null &&
                    j !== O &&
                    o.reference[g] / 2 - (j < K ? F : z) - w[g] / 2 < 0,
                Y = $ ? (j < K ? j - K : j - X) : 0;
            return {
                [v]: p[v] + Y,
                data: {
                    [v]: O,
                    centerOffset: j - O - Y,
                    ...($ && { alignmentOffset: Y }),
                },
                reset: $,
            };
        },
    }),
    FC = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "flip",
                options: e,
                async fn(t) {
                    var n, r;
                    const {
                            placement: a,
                            middlewareData: o,
                            rects: i,
                            initialPlacement: s,
                            platform: l,
                            elements: u,
                        } = t,
                        {
                            mainAxis: c = !0,
                            crossAxis: d = !0,
                            fallbackPlacements: p,
                            fallbackStrategy: v = "bestFit",
                            fallbackAxisSideDirection: g = "none",
                            flipAlignment: w = !0,
                            ...k
                        } = wl(e, t);
                    if ((n = o.arrow) != null && n.alignmentOffset) return {};
                    const h = Ta(a),
                        m = Ta(s) === s,
                        y = await (l.isRTL == null
                            ? void 0
                            : l.isRTL(u.floating)),
                        C = p || (m || !w ? [Is(s)] : MC(s));
                    !p && g !== "none" && C.push(...RC(s, w, g, y));
                    const P = [s, ...C],
                        D = await jC(t, k),
                        S = [];
                    let b = ((r = o.flip) == null ? void 0 : r.overflows) || [];
                    if ((c && S.push(D[h]), d)) {
                        const K = PC(a, i, y);
                        S.push(D[K[0]], D[K[1]]);
                    }
                    if (
                        ((b = [...b, { placement: a, overflows: S }]),
                        !S.every((K) => K <= 0))
                    ) {
                        var R, F;
                        const K =
                                (((R = o.flip) == null ? void 0 : R.index) ||
                                    0) + 1,
                            X = P[K];
                        if (X)
                            return {
                                data: { index: K, overflows: b },
                                reset: { placement: X },
                            };
                        let j =
                            (F = b
                                .filter((O) => O.overflows[0] <= 0)
                                .sort(
                                    (O, $) => O.overflows[1] - $.overflows[1]
                                )[0]) == null
                                ? void 0
                                : F.placement;
                        if (!j)
                            switch (v) {
                                case "bestFit": {
                                    var z;
                                    const O =
                                        (z = b
                                            .map(($) => [
                                                $.placement,
                                                $.overflows
                                                    .filter((Y) => Y > 0)
                                                    .reduce((Y, I) => Y + I, 0),
                                            ])
                                            .sort(($, Y) => $[1] - Y[1])[0]) ==
                                        null
                                            ? void 0
                                            : z[0];
                                    O && (j = O);
                                    break;
                                }
                                case "initialPlacement":
                                    j = s;
                                    break;
                            }
                        if (a !== j) return { reset: { placement: j } };
                    }
                    return {};
                },
            }
        );
    };
async function AC(e, t) {
    const { placement: n, platform: r, elements: a } = e,
        o = await (r.isRTL == null ? void 0 : r.isRTL(a.floating)),
        i = Ta(n),
        s = ti(n),
        l = Vd(n) === "y",
        u = ["left", "top"].includes(i) ? -1 : 1,
        c = o && l ? -1 : 1,
        d = wl(t, e);
    let {
        mainAxis: p,
        crossAxis: v,
        alignmentAxis: g,
    } = typeof d == "number"
        ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
        : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d };
    return (
        s && typeof g == "number" && (v = s === "end" ? g * -1 : g),
        l ? { x: v * c, y: p * u } : { x: p * u, y: v * c }
    );
}
const WC = function (e) {
    return {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const { x: a, y: o, placement: i, middlewareData: s } = t,
                l = await AC(t, e);
            return i === ((n = s.offset) == null ? void 0 : n.placement) &&
                (r = s.arrow) != null &&
                r.alignmentOffset
                ? {}
                : { x: a + l.x, y: o + l.y, data: { ...l, placement: i } };
        },
    };
};
function dy(e) {
    const t = Et(e);
    let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
    const a = fn(e),
        o = a ? e.offsetWidth : n,
        i = a ? e.offsetHeight : r,
        s = js(n) !== o || js(r) !== i;
    return s && ((n = o), (r = i)), { width: n, height: r, $: s };
}
function Qd(e) {
    return xt(e) ? e : e.contextElement;
}
function ma(e) {
    const t = Qd(e);
    if (!fn(t)) return ir(1);
    const n = t.getBoundingClientRect(),
        { width: r, height: a, $: o } = dy(t);
    let i = (o ? js(n.width) : n.width) / r,
        s = (o ? js(n.height) : n.height) / a;
    return (
        (!i || !Number.isFinite(i)) && (i = 1),
        (!s || !Number.isFinite(s)) && (s = 1),
        { x: i, y: s }
    );
}
const YC = ir(0);
function fy(e) {
    const t = kt(e);
    return !Hd() || !t.visualViewport
        ? YC
        : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function UC(e, t, n) {
    return t === void 0 && (t = !1), !n || (t && n !== kt(e)) ? !1 : t;
}
function Fr(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const a = e.getBoundingClientRect(),
        o = Qd(e);
    let i = ir(1);
    t && (r ? xt(r) && (i = ma(r)) : (i = ma(e)));
    const s = UC(o, n, r) ? fy(o) : ir(0);
    let l = (a.left + s.x) / i.x,
        u = (a.top + s.y) / i.y,
        c = a.width / i.x,
        d = a.height / i.y;
    if (o) {
        const p = kt(o),
            v = r && xt(r) ? kt(r) : r;
        let g = p,
            w = g.frameElement;
        for (; w && r && v !== g; ) {
            const k = ma(w),
                h = w.getBoundingClientRect(),
                m = Et(w),
                y = h.left + (w.clientLeft + parseFloat(m.paddingLeft)) * k.x,
                C = h.top + (w.clientTop + parseFloat(m.paddingTop)) * k.y;
            (l *= k.x),
                (u *= k.y),
                (c *= k.x),
                (d *= k.y),
                (l += y),
                (u += C),
                (g = kt(w)),
                (w = g.frameElement);
        }
    }
    return Fs({ width: c, height: d, x: l, y: u });
}
const zC = [":popover-open", ":modal"];
function py(e) {
    return zC.some((t) => {
        try {
            return e.matches(t);
        } catch {
            return !1;
        }
    });
}
function HC(e) {
    let { elements: t, rect: n, offsetParent: r, strategy: a } = e;
    const o = a === "fixed",
        i = Nn(r),
        s = t ? py(t.floating) : !1;
    if (r === i || (s && o)) return n;
    let l = { scrollLeft: 0, scrollTop: 0 },
        u = ir(1);
    const c = ir(0),
        d = fn(r);
    if (
        (d || (!d && !o)) &&
        ((or(r) !== "body" || ei(i)) && (l = yl(r)), fn(r))
    ) {
        const p = Fr(r);
        (u = ma(r)), (c.x = p.x + r.clientLeft), (c.y = p.y + r.clientTop);
    }
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + c.x,
        y: n.y * u.y - l.scrollTop * u.y + c.y,
    };
}
function BC(e) {
    return Array.from(e.getClientRects());
}
function hy(e) {
    return Fr(Nn(e)).left + yl(e).scrollLeft;
}
function VC(e) {
    const t = Nn(e),
        n = yl(e),
        r = e.ownerDocument.body,
        a = br(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        o = br(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let i = -n.scrollLeft + hy(e);
    const s = -n.scrollTop;
    return (
        Et(r).direction === "rtl" &&
            (i += br(t.clientWidth, r.clientWidth) - a),
        { width: a, height: o, x: i, y: s }
    );
}
function $C(e, t) {
    const n = kt(e),
        r = Nn(e),
        a = n.visualViewport;
    let o = r.clientWidth,
        i = r.clientHeight,
        s = 0,
        l = 0;
    if (a) {
        (o = a.width), (i = a.height);
        const u = Hd();
        (!u || (u && t === "fixed")) && ((s = a.offsetLeft), (l = a.offsetTop));
    }
    return { width: o, height: i, x: s, y: l };
}
function QC(e, t) {
    const n = Fr(e, !0, t === "fixed"),
        r = n.top + e.clientTop,
        a = n.left + e.clientLeft,
        o = fn(e) ? ma(e) : ir(1),
        i = e.clientWidth * o.x,
        s = e.clientHeight * o.y,
        l = a * o.x,
        u = r * o.y;
    return { width: i, height: s, x: l, y: u };
}
function uh(e, t, n) {
    let r;
    if (t === "viewport") r = $C(e, n);
    else if (t === "document") r = VC(Nn(e));
    else if (xt(t)) r = QC(t, n);
    else {
        const a = fy(e);
        r = { ...t, x: t.x - a.x, y: t.y - a.y };
    }
    return Fs(r);
}
function my(e, t) {
    const n = Pa(e);
    return n === t || !xt(n) || gl(n)
        ? !1
        : Et(n).position === "fixed" || my(n, t);
}
function KC(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = Uo(e, [], !1).filter((s) => xt(s) && or(s) !== "body"),
        a = null;
    const o = Et(e).position === "fixed";
    let i = o ? Pa(e) : e;
    for (; xt(i) && !gl(i); ) {
        const s = Et(i),
            l = zd(i);
        !l && s.position === "fixed" && (a = null),
            (
                o
                    ? !l && !a
                    : (!l &&
                          s.position === "static" &&
                          !!a &&
                          ["absolute", "fixed"].includes(a.position)) ||
                      (ei(i) && !l && my(e, i))
            )
                ? (r = r.filter((c) => c !== i))
                : (a = s),
            (i = Pa(i));
    }
    return t.set(e, r), r;
}
function qC(e) {
    let { element: t, boundary: n, rootBoundary: r, strategy: a } = e;
    const i = [
            ...(n === "clippingAncestors" ? KC(t, this._c) : [].concat(n)),
            r,
        ],
        s = i[0],
        l = i.reduce((u, c) => {
            const d = uh(t, c, a);
            return (
                (u.top = br(d.top, u.top)),
                (u.right = Ma(d.right, u.right)),
                (u.bottom = Ma(d.bottom, u.bottom)),
                (u.left = br(d.left, u.left)),
                u
            );
        }, uh(t, s, a));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top,
    };
}
function XC(e) {
    const { width: t, height: n } = dy(e);
    return { width: t, height: n };
}
function GC(e, t, n) {
    const r = fn(t),
        a = Nn(t),
        o = n === "fixed",
        i = Fr(e, !0, o, t);
    let s = { scrollLeft: 0, scrollTop: 0 };
    const l = ir(0);
    if (r || (!r && !o))
        if (((or(t) !== "body" || ei(a)) && (s = yl(t)), r)) {
            const d = Fr(t, !0, o, t);
            (l.x = d.x + t.clientLeft), (l.y = d.y + t.clientTop);
        } else a && (l.x = hy(a));
    const u = i.left + s.scrollLeft - l.x,
        c = i.top + s.scrollTop - l.y;
    return { x: u, y: c, width: i.width, height: i.height };
}
function ch(e, t) {
    return !fn(e) || Et(e).position === "fixed"
        ? null
        : t
        ? t(e)
        : e.offsetParent;
}
function vy(e, t) {
    const n = kt(e);
    if (!fn(e) || py(e)) return n;
    let r = ch(e, t);
    for (; r && kC(r) && Et(r).position === "static"; ) r = ch(r, t);
    return r &&
        (or(r) === "html" ||
            (or(r) === "body" && Et(r).position === "static" && !zd(r)))
        ? n
        : r || EC(e) || n;
}
const JC = async function (e) {
    const t = this.getOffsetParent || vy,
        n = this.getDimensions;
    return {
        reference: GC(e.reference, await t(e.floating), e.strategy),
        floating: { x: 0, y: 0, ...(await n(e.floating)) },
    };
};
function ZC(e) {
    return Et(e).direction === "rtl";
}
const e2 = {
    convertOffsetParentRelativeRectToViewportRelativeRect: HC,
    getDocumentElement: Nn,
    getClippingRect: qC,
    getOffsetParent: vy,
    getElementRects: JC,
    getClientRects: BC,
    getDimensions: XC,
    getScale: ma,
    isElement: xt,
    isRTL: ZC,
};
function t2(e, t) {
    let n = null,
        r;
    const a = Nn(e);
    function o() {
        var s;
        clearTimeout(r), (s = n) == null || s.disconnect(), (n = null);
    }
    function i(s, l) {
        s === void 0 && (s = !1), l === void 0 && (l = 1), o();
        const {
            left: u,
            top: c,
            width: d,
            height: p,
        } = e.getBoundingClientRect();
        if ((s || t(), !d || !p)) return;
        const v = bi(c),
            g = bi(a.clientWidth - (u + d)),
            w = bi(a.clientHeight - (c + p)),
            k = bi(u),
            m = {
                rootMargin: -v + "px " + -g + "px " + -w + "px " + -k + "px",
                threshold: br(0, Ma(1, l)) || 1,
            };
        let y = !0;
        function C(P) {
            const D = P[0].intersectionRatio;
            if (D !== l) {
                if (!y) return i();
                D
                    ? i(!1, D)
                    : (r = setTimeout(() => {
                          i(!1, 1e-7);
                      }, 100));
            }
            y = !1;
        }
        try {
            n = new IntersectionObserver(C, { ...m, root: a.ownerDocument });
        } catch {
            n = new IntersectionObserver(C, m);
        }
        n.observe(e);
    }
    return i(!0), o;
}
function n2(e, t, n, r) {
    r === void 0 && (r = {});
    const {
            ancestorScroll: a = !0,
            ancestorResize: o = !0,
            elementResize: i = typeof ResizeObserver == "function",
            layoutShift: s = typeof IntersectionObserver == "function",
            animationFrame: l = !1,
        } = r,
        u = Qd(e),
        c = a || o ? [...(u ? Uo(u) : []), ...Uo(t)] : [];
    c.forEach((h) => {
        a && h.addEventListener("scroll", n, { passive: !0 }),
            o && h.addEventListener("resize", n);
    });
    const d = u && s ? t2(u, n) : null;
    let p = -1,
        v = null;
    i &&
        ((v = new ResizeObserver((h) => {
            let [m] = h;
            m &&
                m.target === u &&
                v &&
                (v.unobserve(t),
                cancelAnimationFrame(p),
                (p = requestAnimationFrame(() => {
                    var y;
                    (y = v) == null || y.observe(t);
                }))),
                n();
        })),
        u && !l && v.observe(u),
        v.observe(t));
    let g,
        w = l ? Fr(e) : null;
    l && k();
    function k() {
        const h = Fr(e);
        w &&
            (h.x !== w.x ||
                h.y !== w.y ||
                h.width !== w.width ||
                h.height !== w.height) &&
            n(),
            (w = h),
            (g = requestAnimationFrame(k));
    }
    return (
        n(),
        () => {
            var h;
            c.forEach((m) => {
                a && m.removeEventListener("scroll", n),
                    o && m.removeEventListener("resize", n);
            }),
                d == null || d(),
                (h = v) == null || h.disconnect(),
                (v = null),
                l && cancelAnimationFrame(g);
        }
    );
}
const r2 = FC,
    dh = IC,
    a2 = (e, t, n) => {
        const r = new Map(),
            a = { platform: e2, ...n },
            o = { ...a.platform, _c: r };
        return LC(e, t, { ...a, platform: o });
    };
var qi = typeof document < "u" ? x.useLayoutEffect : x.useEffect;
function As(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, a;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (((n = e.length), n !== t.length)) return !1;
            for (r = n; r-- !== 0; ) if (!As(e[r], t[r])) return !1;
            return !0;
        }
        if (((a = Object.keys(e)), (n = a.length), n !== Object.keys(t).length))
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, a[r])) return !1;
        for (r = n; r-- !== 0; ) {
            const o = a[r];
            if (!(o === "_owner" && e.$$typeof) && !As(e[o], t[o])) return !1;
        }
        return !0;
    }
    return e !== e && t !== t;
}
function gy(e) {
    return typeof window > "u"
        ? 1
        : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function fh(e, t) {
    const n = gy(e);
    return Math.round(t * n) / n;
}
function ph(e) {
    const t = x.useRef(e);
    return (
        qi(() => {
            t.current = e;
        }),
        t
    );
}
function o2(e) {
    e === void 0 && (e = {});
    const {
            placement: t = "bottom",
            strategy: n = "absolute",
            middleware: r = [],
            platform: a,
            elements: { reference: o, floating: i } = {},
            transform: s = !0,
            whileElementsMounted: l,
            open: u,
        } = e,
        [c, d] = x.useState({
            x: 0,
            y: 0,
            strategy: n,
            placement: t,
            middlewareData: {},
            isPositioned: !1,
        }),
        [p, v] = x.useState(r);
    As(p, r) || v(r);
    const [g, w] = x.useState(null),
        [k, h] = x.useState(null),
        m = x.useCallback((Y) => {
            Y !== D.current && ((D.current = Y), w(Y));
        }, []),
        y = x.useCallback((Y) => {
            Y !== S.current && ((S.current = Y), h(Y));
        }, []),
        C = o || g,
        P = i || k,
        D = x.useRef(null),
        S = x.useRef(null),
        b = x.useRef(c),
        R = l != null,
        F = ph(l),
        z = ph(a),
        K = x.useCallback(() => {
            if (!D.current || !S.current) return;
            const Y = { placement: t, strategy: n, middleware: p };
            z.current && (Y.platform = z.current),
                a2(D.current, S.current, Y).then((I) => {
                    const B = { ...I, isPositioned: !0 };
                    X.current &&
                        !As(b.current, B) &&
                        ((b.current = B),
                        Qo.flushSync(() => {
                            d(B);
                        }));
                });
        }, [p, t, n, z]);
    qi(() => {
        u === !1 &&
            b.current.isPositioned &&
            ((b.current.isPositioned = !1),
            d((Y) => ({ ...Y, isPositioned: !1 })));
    }, [u]);
    const X = x.useRef(!1);
    qi(
        () => (
            (X.current = !0),
            () => {
                X.current = !1;
            }
        ),
        []
    ),
        qi(() => {
            if ((C && (D.current = C), P && (S.current = P), C && P)) {
                if (F.current) return F.current(C, P, K);
                K();
            }
        }, [C, P, K, F, R]);
    const j = x.useMemo(
            () => ({
                reference: D,
                floating: S,
                setReference: m,
                setFloating: y,
            }),
            [m, y]
        ),
        O = x.useMemo(() => ({ reference: C, floating: P }), [C, P]),
        $ = x.useMemo(() => {
            const Y = { position: n, left: 0, top: 0 };
            if (!O.floating) return Y;
            const I = fh(O.floating, c.x),
                B = fh(O.floating, c.y);
            return s
                ? {
                      ...Y,
                      transform: "translate(" + I + "px, " + B + "px)",
                      ...(gy(O.floating) >= 1.5 && { willChange: "transform" }),
                  }
                : { position: n, left: I, top: B };
        }, [n, s, O.floating, c.x, c.y]);
    return x.useMemo(
        () => ({ ...c, update: K, refs: j, elements: O, floatingStyles: $ }),
        [c, K, j, O, $]
    );
}
const i2 = (e) => {
        function t(n) {
            return {}.hasOwnProperty.call(n, "current");
        }
        return {
            name: "arrow",
            options: e,
            fn(n) {
                const { element: r, padding: a } =
                    typeof e == "function" ? e(n) : e;
                return r && t(r)
                    ? r.current != null
                        ? dh({ element: r.current, padding: a }).fn(n)
                        : {}
                    : r
                    ? dh({ element: r, padding: a }).fn(n)
                    : {};
            },
        };
    },
    s2 = (e, t) => ({ ...WC(e), options: [e, t] }),
    l2 = (e, t) => ({ ...r2(e), options: [e, t] }),
    u2 = (e, t) => ({ ...i2(e), options: [e, t] }),
    yy = { ...Kh },
    c2 = yy.useInsertionEffect,
    d2 = c2 || ((e) => e());
function f2(e) {
    const t = x.useRef(() => {});
    return (
        d2(() => {
            t.current = e;
        }),
        x.useCallback(function () {
            for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
                r[a] = arguments[a];
            return t.current == null ? void 0 : t.current(...r);
        }, [])
    );
}
var Ws = typeof document < "u" ? x.useLayoutEffect : x.useEffect;
function Cc() {
    return (
        (Cc = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                  }
                  return e;
              }),
        Cc.apply(this, arguments)
    );
}
let hh = !1,
    p2 = 0;
const mh = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + p2++;
function h2() {
    const [e, t] = x.useState(() => (hh ? mh() : void 0));
    return (
        Ws(() => {
            e == null && t(mh());
        }, []),
        x.useEffect(() => {
            hh = !0;
        }, []),
        e
    );
}
const m2 = yy.useId,
    wy = m2 || h2,
    v2 = x.forwardRef(function (t, n) {
        const {
                context: {
                    placement: r,
                    elements: { floating: a },
                    middlewareData: { arrow: o },
                },
                width: i = 14,
                height: s = 7,
                tipRadius: l = 0,
                strokeWidth: u = 0,
                staticOffset: c,
                stroke: d,
                d: p,
                style: { transform: v, ...g } = {},
                ...w
            } = t,
            k = wy(),
            [h, m] = x.useState(!1);
        if (
            (Ws(() => {
                if (!a) return;
                Et(a).direction === "rtl" && m(!0);
            }, [a]),
            !a)
        )
            return null;
        const y = u * 2,
            C = y / 2,
            P = (i / 2) * (l / -8 + 1),
            D = ((s / 2) * l) / 4,
            [S, b] = r.split("-"),
            R = !!p,
            F = S === "top" || S === "bottom",
            z = c && b === "end" ? "bottom" : "top";
        let K = c && b === "end" ? "right" : "left";
        c && h && (K = b === "end" ? "left" : "right");
        const X = (o == null ? void 0 : o.x) != null ? c || o.x : "",
            j = (o == null ? void 0 : o.y) != null ? c || o.y : "",
            O =
                p ||
                "M0,0" +
                    (" H" + i) +
                    (" L" + (i - P) + "," + (s - D)) +
                    (" Q" + i / 2 + "," + s + " " + P + "," + (s - D)) +
                    " Z",
            $ = {
                top: R ? "rotate(180deg)" : "",
                left: R ? "rotate(90deg)" : "rotate(-90deg)",
                bottom: R ? "" : "rotate(180deg)",
                right: R ? "rotate(-90deg)" : "rotate(90deg)",
            }[S];
        return x.createElement(
            "svg",
            Cc({}, w, {
                "aria-hidden": !0,
                ref: n,
                width: R ? i : i + y,
                height: i,
                viewBox: "0 0 " + i + " " + (s > i ? s : i),
                style: {
                    position: "absolute",
                    pointerEvents: "none",
                    [K]: X,
                    [z]: j,
                    [S]: F || R ? "100%" : "calc(100% - " + y / 2 + "px)",
                    transform: "" + $ + (v ?? ""),
                    ...g,
                },
            }),
            y > 0 &&
                x.createElement("path", {
                    clipPath: "url(#" + k + ")",
                    fill: "none",
                    stroke: d,
                    strokeWidth: y + (p ? 0 : 1),
                    d: O,
                }),
            x.createElement("path", {
                stroke: y && !p ? w.fill : "none",
                d: O,
            }),
            x.createElement(
                "clipPath",
                { id: k },
                x.createElement("rect", {
                    x: -C,
                    y: C * (R ? -1 : 1),
                    width: i + y,
                    height: i,
                })
            )
        );
    });
function g2() {
    const e = new Map();
    return {
        emit(t, n) {
            var r;
            (r = e.get(t)) == null || r.forEach((a) => a(n));
        },
        on(t, n) {
            e.set(t, [...(e.get(t) || []), n]);
        },
        off(t, n) {
            var r;
            e.set(
                t,
                ((r = e.get(t)) == null ? void 0 : r.filter((a) => a !== n)) ||
                    []
            );
        },
    };
}
const y2 = x.createContext(null),
    w2 = x.createContext(null),
    x2 = () => {
        var e;
        return ((e = x.useContext(y2)) == null ? void 0 : e.id) || null;
    },
    D2 = () => x.useContext(w2);
function k2(e) {
    const { open: t = !1, onOpenChange: n, elements: r } = e,
        a = wy(),
        o = x.useRef({}),
        [i] = x.useState(() => g2()),
        s = x2() != null,
        [l, u] = x.useState(r.reference),
        c = f2((v, g, w) => {
            (o.current.openEvent = v ? g : void 0),
                i.emit("openchange", {
                    open: v,
                    event: g,
                    reason: w,
                    nested: s,
                }),
                n == null || n(v, g, w);
        }),
        d = x.useMemo(() => ({ setPositionReference: u }), []),
        p = x.useMemo(
            () => ({
                reference: l || r.reference || null,
                floating: r.floating || null,
                domReference: r.reference,
            }),
            [l, r.reference, r.floating]
        );
    return x.useMemo(
        () => ({
            dataRef: o,
            open: t,
            onOpenChange: c,
            elements: p,
            events: i,
            floatingId: a,
            refs: d,
        }),
        [t, c, p, i, a, d]
    );
}
function S2(e) {
    e === void 0 && (e = {});
    const { nodeId: t } = e,
        n = k2({
            ...e,
            elements: { reference: null, floating: null, ...e.elements },
        }),
        r = e.rootContext || n,
        a = r.elements,
        [o, i] = x.useState(null),
        [s, l] = x.useState(null),
        c = (a == null ? void 0 : a.reference) || o,
        d = x.useRef(null),
        p = D2();
    Ws(() => {
        c && (d.current = c);
    }, [c]);
    const v = o2({ ...e, elements: { ...a, ...(s && { reference: s }) } }),
        g = x.useCallback(
            (y) => {
                const C = xt(y)
                    ? {
                          getBoundingClientRect: () =>
                              y.getBoundingClientRect(),
                          contextElement: y,
                      }
                    : y;
                l(C), v.refs.setReference(C);
            },
            [v.refs]
        ),
        w = x.useCallback(
            (y) => {
                (xt(y) || y === null) && ((d.current = y), i(y)),
                    (xt(v.refs.reference.current) ||
                        v.refs.reference.current === null ||
                        (y !== null && !xt(y))) &&
                        v.refs.setReference(y);
            },
            [v.refs]
        ),
        k = x.useMemo(
            () => ({
                ...v.refs,
                setReference: w,
                setPositionReference: g,
                domReference: d,
            }),
            [v.refs, w, g]
        ),
        h = x.useMemo(
            () => ({ ...v.elements, domReference: c }),
            [v.elements, c]
        ),
        m = x.useMemo(
            () => ({ ...v, ...r, refs: k, elements: h, nodeId: t }),
            [v, k, h, t, r]
        );
    return (
        Ws(() => {
            r.dataRef.current.floatingContext = m;
            const y =
                p == null ? void 0 : p.nodesRef.current.find((C) => C.id === t);
            y && (y.context = m);
        }),
        x.useMemo(
            () => ({ ...v, context: m, refs: k, elements: h }),
            [v, k, h, m]
        )
    );
}
/*!
  react-datepicker v7.3.0
  https://github.com/Hacker0x01/react-datepicker
  Released under the MIT License.
*/ var _c = function (t, n) {
    return (
        (_c =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function (r, a) {
                    r.__proto__ = a;
                }) ||
            function (r, a) {
                for (var o in a)
                    Object.prototype.hasOwnProperty.call(a, o) && (r[o] = a[o]);
            }),
        _c(t, n)
    );
};
function $e(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
        );
    _c(e, t);
    function n() {
        this.constructor = e;
    }
    e.prototype =
        t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
var le = function () {
    return (
        (le =
            Object.assign ||
            function (n) {
                for (var r, a = 1, o = arguments.length; a < o; a++) {
                    r = arguments[a];
                    for (var i in r)
                        Object.prototype.hasOwnProperty.call(r, i) &&
                            (n[i] = r[i]);
                }
                return n;
            }),
        le.apply(this, arguments)
    );
};
function sn(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, a = t.length, o; r < a; r++)
            (o || !(r in t)) &&
                (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
    return e.concat(o || Array.prototype.slice.call(t));
}
var E2 = function (e) {
        var t = e.showTimeSelectOnly,
            n = t === void 0 ? !1 : t,
            r = e.showTime,
            a = r === void 0 ? !1 : r,
            o = e.className,
            i = e.children,
            s = n ? "Choose Time" : "Choose Date".concat(a ? " and Time" : "");
        return T.createElement(
            "div",
            {
                className: o,
                role: "dialog",
                "aria-label": s,
                "aria-modal": "true",
            },
            i
        );
    },
    W;
(function (e) {
    (e.ArrowUp = "ArrowUp"),
        (e.ArrowDown = "ArrowDown"),
        (e.ArrowLeft = "ArrowLeft"),
        (e.ArrowRight = "ArrowRight"),
        (e.PageUp = "PageUp"),
        (e.PageDown = "PageDown"),
        (e.Home = "Home"),
        (e.End = "End"),
        (e.Enter = "Enter"),
        (e.Space = " "),
        (e.Tab = "Tab"),
        (e.Escape = "Escape"),
        (e.Backspace = "Backspace"),
        (e.X = "x");
})(W || (W = {}));
function xy() {
    var e = typeof window < "u" ? window : globalThis;
    return e;
}
var ni = 12,
    C2 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
function me(e) {
    if (e == null) return new Date();
    var t = typeof e == "string" ? rC(e) : H(e);
    return mn(t) ? t : new Date();
}
function _2(e, t, n, r, a) {
    var o,
        i = null,
        s = Nr(n) || Nr(wo()),
        l = !0;
    if (Array.isArray(t))
        return (
            t.forEach(function (c) {
                var d = su(e, c, new Date(), {
                    locale: s,
                    useAdditionalWeekYearTokens: !0,
                    useAdditionalDayOfYearTokens: !0,
                });
                r && (l = mn(d, a) && e === Se(d, c, n)),
                    mn(d, a) && l && (i = d);
            }),
            i
        );
    if (
        ((i = su(e, t, new Date(), {
            locale: s,
            useAdditionalWeekYearTokens: !0,
            useAdditionalDayOfYearTokens: !0,
        })),
        r)
    )
        l = mn(i) && e === Se(i, t, n);
    else if (!mn(i)) {
        var u = ((o = t.match(C2)) !== null && o !== void 0 ? o : [])
            .map(function (c) {
                var d = c[0];
                if (d === "p" || d === "P") {
                    var p = Rs[d];
                    return s ? p(c, s.formatLong) : d;
                }
                return c;
            })
            .join("");
        e.length > 0 &&
            (i = su(e, u.slice(0, e.length), new Date(), {
                useAdditionalWeekYearTokens: !0,
                useAdditionalDayOfYearTokens: !0,
            })),
            mn(i) || (i = new Date(e));
    }
    return mn(i) && l ? i : null;
}
function mn(e, t) {
    return Os(e) && !Ir(e, t ?? new Date("1/1/1800"));
}
function Se(e, t, n) {
    if (n === "en")
        return nh(e, t, {
            useAdditionalWeekYearTokens: !0,
            useAdditionalDayOfYearTokens: !0,
        });
    var r = n ? Nr(n) : void 0;
    return (
        n &&
            !r &&
            console.warn(
                'A locale object was not found for the provided string ["'.concat(
                    n,
                    '"].'
                )
            ),
        !r && wo() && Nr(wo()) && (r = Nr(wo())),
        nh(e, t, {
            locale: r,
            useAdditionalWeekYearTokens: !0,
            useAdditionalDayOfYearTokens: !0,
        })
    );
}
function Pt(e, t) {
    var n = t.dateFormat,
        r = t.locale,
        a = Array.isArray(n) && n.length > 0 ? n[0] : n;
    return (e && Se(e, a, r)) || "";
}
function b2(e, t, n) {
    if (!e) return "";
    var r = Pt(e, n),
        a = t ? Pt(t, n) : "";
    return "".concat(r, " - ").concat(a);
}
function N2(e, t) {
    if (!(e != null && e.length)) return "";
    var n = e[0] ? Pt(e[0], t) : "";
    if (e.length === 1) return n;
    if (e.length === 2 && e[1]) {
        var r = Pt(e[1], t);
        return "".concat(n, ", ").concat(r);
    }
    var a = e.length - 1;
    return "".concat(n, " (+").concat(a, ")");
}
function uu(e, t) {
    var n = t.hour,
        r = n === void 0 ? 0 : n,
        a = t.minute,
        o = a === void 0 ? 0 : a,
        i = t.second,
        s = i === void 0 ? 0 : i;
    return $i(Qi(Ki(e, s), o), r);
}
function P2(e) {
    return Ad(e);
}
function M2(e, t) {
    return Se(e, "ddd", t);
}
function Xi(e) {
    return jr(e);
}
function er(e, t, n) {
    var r = Nr(t || wo());
    return _n(e, { locale: r, weekStartsOn: n });
}
function tr(e) {
    return iy(e);
}
function io(e) {
    return vl(e);
}
function vh(e) {
    return Sc(e);
}
function gh() {
    return jr(me());
}
function yh(e) {
    return $g(e);
}
function T2(e) {
    return uS(e);
}
function en(e, t) {
    return e && t ? iE(e, t) : !e && !t;
}
function ot(e, t) {
    return e && t ? aE(e, t) : !e && !t;
}
function Ys(e, t) {
    return e && t ? oE(e, t) : !e && !t;
}
function se(e, t) {
    return e && t ? rE(e, t) : !e && !t;
}
function kr(e, t) {
    return e && t ? nE(e, t) : !e && !t;
}
function so(e, t, n) {
    var r,
        a = jr(t),
        o = $g(n);
    try {
        r = Yo(e, { start: a, end: o });
    } catch {
        r = !1;
    }
    return r;
}
function wo() {
    var e = xy();
    return e.__localeId__;
}
function Nr(e) {
    if (typeof e == "string") {
        var t = xy();
        return t.__localeData__ ? t.__localeData__[e] : void 0;
    } else return e;
}
function R2(e, t, n) {
    return t(Se(e, "EEEE", n));
}
function O2(e, t) {
    return Se(e, "EEEEEE", t);
}
function L2(e, t) {
    return Se(e, "EEE", t);
}
function Kd(e, t) {
    return Se(yt(me(), e), "LLLL", t);
}
function Dy(e, t) {
    return Se(yt(me(), e), "LLL", t);
}
function j2(e, t) {
    return Se(Qr(me(), e), "QQQ", t);
}
function Hn(e, t) {
    var n = t === void 0 ? {} : t,
        r = n.minDate,
        a = n.maxDate,
        o = n.excludeDates,
        i = n.excludeDateIntervals,
        s = n.includeDates,
        l = n.includeDateIntervals,
        u = n.filterDate;
    return (
        ri(e, { minDate: r, maxDate: a }) ||
        (o &&
            o.some(function (c) {
                var d;
                return c instanceof Date
                    ? se(e, c)
                    : se(
                          e,
                          (d = c.date) !== null && d !== void 0 ? d : new Date()
                      );
            })) ||
        (i &&
            i.some(function (c) {
                var d = c.start,
                    p = c.end;
                return Yo(e, { start: d, end: p });
            })) ||
        (s &&
            !s.some(function (c) {
                return se(e, c);
            })) ||
        (l &&
            !l.some(function (c) {
                var d = c.start,
                    p = c.end;
                return Yo(e, { start: d, end: p });
            })) ||
        (u && !u(me(e))) ||
        !1
    );
}
function qd(e, t) {
    var n = t === void 0 ? {} : t,
        r = n.excludeDates,
        a = n.excludeDateIntervals;
    return a && a.length > 0
        ? a.some(function (o) {
              var i = o.start,
                  s = o.end;
              return Yo(e, { start: i, end: s });
          })
        : (r &&
              r.some(function (o) {
                  var i;
                  return o instanceof Date
                      ? se(e, o)
                      : se(
                            e,
                            (i = o.date) !== null && i !== void 0
                                ? i
                                : new Date()
                        );
              })) ||
              !1;
}
function ky(e, t) {
    var n = t === void 0 ? {} : t,
        r = n.minDate,
        a = n.maxDate,
        o = n.excludeDates,
        i = n.includeDates,
        s = n.filterDate;
    return (
        ri(e, { minDate: r ? iy(r) : void 0, maxDate: a ? sS(a) : void 0 }) ||
        (o == null
            ? void 0
            : o.some(function (l) {
                  return ot(e, l instanceof Date ? l : l.date);
              })) ||
        (i &&
            !i.some(function (l) {
                return ot(e, l);
            })) ||
        (s && !s(me(e))) ||
        !1
    );
}
function Ni(e, t, n, r) {
    var a = re(e),
        o = it(e),
        i = re(t),
        s = it(t),
        l = re(r);
    return a === i && a === l
        ? o <= n && n <= s
        : a < i
        ? (l === a && o <= n) || (l === i && s >= n) || (l < i && l > a)
        : !1;
}
function I2(e, t) {
    var n = t === void 0 ? {} : t,
        r = n.minDate,
        a = n.maxDate,
        o = n.excludeDates,
        i = n.includeDates;
    return (
        ri(e, { minDate: r, maxDate: a }) ||
        (o &&
            o.some(function (s) {
                return ot(s instanceof Date ? s : s.date, e);
            })) ||
        (i &&
            !i.some(function (s) {
                return ot(s, e);
            })) ||
        !1
    );
}
function cu(e, t) {
    var n = t === void 0 ? {} : t,
        r = n.minDate,
        a = n.maxDate,
        o = n.excludeDates,
        i = n.includeDates,
        s = n.filterDate;
    return (
        ri(e, { minDate: r, maxDate: a }) ||
        (o == null
            ? void 0
            : o.some(function (l) {
                  return Ys(e, l instanceof Date ? l : l.date);
              })) ||
        (i &&
            !i.some(function (l) {
                return Ys(e, l);
            })) ||
        (s && !s(me(e))) ||
        !1
    );
}
function Pi(e, t, n) {
    if (!t || !n || !Os(t) || !Os(n)) return !1;
    var r = re(t),
        a = re(n);
    return r <= e && a >= e;
}
function bc(e, t) {
    var n = t === void 0 ? {} : t,
        r = n.minDate,
        a = n.maxDate,
        o = n.excludeDates,
        i = n.includeDates,
        s = n.filterDate,
        l = new Date(e, 0, 1);
    return (
        ri(l, { minDate: r ? vl(r) : void 0, maxDate: a ? Qg(a) : void 0 }) ||
        (o == null
            ? void 0
            : o.some(function (u) {
                  return en(l, u instanceof Date ? u : u.date);
              })) ||
        (i &&
            !i.some(function (u) {
                return en(l, u);
            })) ||
        (s && !s(me(l))) ||
        !1
    );
}
function Mi(e, t, n, r) {
    var a = re(e),
        o = _r(e),
        i = re(t),
        s = _r(t),
        l = re(r);
    return a === i && a === l
        ? o <= n && n <= s
        : a < i
        ? (l === a && o <= n) || (l === i && s >= n) || (l < i && l > a)
        : !1;
}
function ri(e, t) {
    var n,
        r = t === void 0 ? {} : t,
        a = r.minDate,
        o = r.maxDate;
    return (n = (a && Wo(e, a) < 0) || (o && Wo(e, o) > 0)) !== null &&
        n !== void 0
        ? n
        : !1;
}
function wh(e, t) {
    return t.some(function (n) {
        return cn(n) === cn(e) && dn(n) === dn(e) && Dn(n) === Dn(e);
    });
}
function xh(e, t) {
    var n = t === void 0 ? {} : t,
        r = n.excludeTimes,
        a = n.includeTimes,
        o = n.filterTime;
    return (r && wh(e, r)) || (a && !wh(e, a)) || (o && !o(e)) || !1;
}
function Dh(e, t) {
    var n = t.minTime,
        r = t.maxTime;
    if (!n || !r) throw new Error("Both minTime and maxTime props required");
    var a = me();
    (a = $i(a, cn(e))), (a = Qi(a, dn(e))), (a = Ki(a, Dn(e)));
    var o = me();
    (o = $i(o, cn(n))), (o = Qi(o, dn(n))), (o = Ki(o, Dn(n)));
    var i = me();
    (i = $i(i, cn(r))), (i = Qi(i, dn(r))), (i = Ki(i, Dn(r)));
    var s;
    try {
        s = !Yo(a, { start: o, end: i });
    } catch {
        s = !1;
    }
    return s;
}
function kh(e, t) {
    var n = t === void 0 ? {} : t,
        r = n.minDate,
        a = n.includeDates,
        o = ba(e, 1);
    return (
        (r && Ps(r, o) > 0) ||
        (a &&
            a.every(function (i) {
                return Ps(i, o) > 0;
            })) ||
        !1
    );
}
function Sh(e, t) {
    var n = t === void 0 ? {} : t,
        r = n.maxDate,
        a = n.includeDates,
        o = Qt(e, 1);
    return (
        (r && Ps(o, r) > 0) ||
        (a &&
            a.every(function (i) {
                return Ps(o, i) > 0;
            })) ||
        !1
    );
}
function F2(e, t) {
    var n = t === void 0 ? {} : t,
        r = n.minDate,
        a = n.includeDates,
        o = vl(e),
        i = sy(o, 1);
    return (
        (r && Ms(r, i) > 0) ||
        (a &&
            a.every(function (s) {
                return Ms(s, i) > 0;
            })) ||
        !1
    );
}
function A2(e, t) {
    var n = t === void 0 ? {} : t,
        r = n.maxDate,
        a = n.includeDates,
        o = Qg(e),
        i = Fd(o, 1);
    return (
        (r && Ms(i, r) > 0) ||
        (a &&
            a.every(function (s) {
                return Ms(i, s) > 0;
            })) ||
        !1
    );
}
function Eh(e, t) {
    var n = t === void 0 ? {} : t,
        r = n.minDate,
        a = n.includeDates,
        o = Na(e, 1);
    return (
        (r && Ts(r, o) > 0) ||
        (a &&
            a.every(function (i) {
                return Ts(i, o) > 0;
            })) ||
        !1
    );
}
function W2(e, t) {
    var n = t === void 0 ? {} : t,
        r = n.minDate,
        a = n.yearItemNumber,
        o = a === void 0 ? ni : a,
        i = io(Na(e, o)),
        s = Bn(i, o).endPeriod,
        l = r && re(r);
    return (l && l > s) || !1;
}
function Ch(e, t) {
    var n = t === void 0 ? {} : t,
        r = n.maxDate,
        a = n.includeDates,
        o = wn(e, 1);
    return (
        (r && Ts(o, r) > 0) ||
        (a &&
            a.every(function (i) {
                return Ts(o, i) > 0;
            })) ||
        !1
    );
}
function Y2(e, t) {
    var n = t === void 0 ? {} : t,
        r = n.maxDate,
        a = n.yearItemNumber,
        o = a === void 0 ? ni : a,
        i = wn(e, o),
        s = Bn(i, o).startPeriod,
        l = r && re(r);
    return (l && l < s) || !1;
}
function Sy(e) {
    var t = e.minDate,
        n = e.includeDates;
    if (n && t) {
        var r = n.filter(function (a) {
            return Wo(a, t) >= 0;
        });
        return oh(r);
    } else return n ? oh(n) : t;
}
function Ey(e) {
    var t = e.maxDate,
        n = e.includeDates;
    if (n && t) {
        var r = n.filter(function (a) {
            return Wo(a, t) <= 0;
        });
        return ah(r);
    } else return n ? ah(n) : t;
}
function _h(e, t) {
    var n;
    e === void 0 && (e = []),
        t === void 0 && (t = "react-datepicker__day--highlighted");
    for (var r = new Map(), a = 0, o = e.length; a < o; a++) {
        var i = e[a];
        if (xn(i)) {
            var s = Se(i, "MM.dd.yyyy"),
                l = r.get(s) || [];
            l.includes(t) || (l.push(t), r.set(s, l));
        } else if (typeof i == "object") {
            var u = Object.keys(i),
                c = (n = u[0]) !== null && n !== void 0 ? n : "",
                d = i[c];
            if (typeof c == "string" && Array.isArray(d))
                for (var p = 0, v = d.length; p < v; p++) {
                    var g = d[p];
                    if (g) {
                        var s = Se(g, "MM.dd.yyyy"),
                            l = r.get(s) || [];
                        l.includes(c) || (l.push(c), r.set(s, l));
                    }
                }
        }
    }
    return r;
}
function U2(e, t) {
    return e.length !== t.length
        ? !1
        : e.every(function (n, r) {
              return n === t[r];
          });
}
function z2(e, t) {
    e === void 0 && (e = []),
        t === void 0 && (t = "react-datepicker__day--holidays");
    var n = new Map();
    return (
        e.forEach(function (r) {
            var a = r.date,
                o = r.holidayName;
            if (xn(a)) {
                var i = Se(a, "MM.dd.yyyy"),
                    s = n.get(i) || { className: "", holidayNames: [] };
                if (
                    !(
                        "className" in s &&
                        s.className === t &&
                        U2(s.holidayNames, [o])
                    )
                ) {
                    s.className = t;
                    var l = s.holidayNames;
                    (s.holidayNames = l ? sn(sn([], l, !0), [o], !1) : [o]),
                        n.set(i, s);
                }
            }
        }),
        n
    );
}
function H2(e, t, n, r, a) {
    for (var o = a.length, i = [], s = 0; s < o; s++) {
        var l = e,
            u = a[s];
        u && ((l = oS(l, cn(u))), (l = xc(l, dn(u))), (l = iS(l, Dn(u))));
        var c = xc(e, (n + 1) * r);
        ar(l, t) && Ir(l, c) && u != null && i.push(u);
    }
    return i;
}
function bh(e) {
    return e < 10 ? "0".concat(e) : "".concat(e);
}
function Bn(e, t) {
    t === void 0 && (t = ni);
    var n = Math.ceil(re(e) / t) * t,
        r = n - (t - 1);
    return { startPeriod: r, endPeriod: n };
}
function B2(e) {
    var t = new Date(e.getFullYear(), e.getMonth(), e.getDate()),
        n = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 24);
    return Math.round((+n - +t) / 36e5);
}
function Nh(e) {
    var t = e.getSeconds(),
        n = e.getMilliseconds();
    return H(e.getTime() - t * 1e3 - n);
}
function V2(e, t) {
    return Nh(e).getTime() === Nh(t).getTime();
}
function Ph(e) {
    if (!xn(e)) throw new Error("Invalid date");
    var t = new Date(e);
    return t.setHours(0, 0, 0, 0), t;
}
function Mh(e, t) {
    if (!xn(e) || !xn(t)) throw new Error("Invalid date received");
    var n = Ph(e),
        r = Ph(t);
    return Ir(n, r);
}
function Cy(e) {
    return e.key === W.Space;
}
var $2 = (function (e) {
        $e(t, e);
        function t(n) {
            var r = e.call(this, n) || this;
            return (
                (r.onTimeChange = function (a) {
                    var o, i;
                    r.setState({ time: a });
                    var s = r.props.date,
                        l = s instanceof Date && !isNaN(+s),
                        u = l ? s : new Date();
                    if (a != null && a.includes(":")) {
                        var c = a.split(":"),
                            d = c[0],
                            p = c[1];
                        u.setHours(Number(d)), u.setMinutes(Number(p));
                    }
                    (i = (o = r.props).onChange) === null ||
                        i === void 0 ||
                        i.call(o, u);
                }),
                (r.renderTimeInput = function () {
                    var a = r.state.time,
                        o = r.props,
                        i = o.date,
                        s = o.timeString,
                        l = o.customTimeInput;
                    return l
                        ? x.cloneElement(l, {
                              date: i,
                              value: a,
                              onChange: r.onTimeChange,
                          })
                        : T.createElement("input", {
                              type: "time",
                              className: "react-datepicker-time__input",
                              placeholder: "Time",
                              name: "time-input",
                              required: !0,
                              value: a,
                              onChange: function (u) {
                                  r.onTimeChange(u.target.value || s);
                              },
                          });
                }),
                (r.state = { time: r.props.timeString }),
                r
            );
        }
        return (
            (t.getDerivedStateFromProps = function (n, r) {
                return n.timeString !== r.time ? { time: n.timeString } : null;
            }),
            (t.prototype.render = function () {
                return T.createElement(
                    "div",
                    { className: "react-datepicker__input-time-container" },
                    T.createElement(
                        "div",
                        { className: "react-datepicker-time__caption" },
                        this.props.timeInputLabel
                    ),
                    T.createElement(
                        "div",
                        { className: "react-datepicker-time__input-container" },
                        T.createElement(
                            "div",
                            { className: "react-datepicker-time__input" },
                            this.renderTimeInput()
                        )
                    )
                );
            }),
            t
        );
    })(x.Component),
    Q2 = (function (e) {
        $e(t, e);
        function t() {
            var n = (e !== null && e.apply(this, arguments)) || this;
            return (
                (n.dayEl = x.createRef()),
                (n.handleClick = function (r) {
                    !n.isDisabled() && n.props.onClick && n.props.onClick(r);
                }),
                (n.handleMouseEnter = function (r) {
                    !n.isDisabled() &&
                        n.props.onMouseEnter &&
                        n.props.onMouseEnter(r);
                }),
                (n.handleOnKeyDown = function (r) {
                    var a,
                        o,
                        i = r.key;
                    i === W.Space && (r.preventDefault(), (r.key = W.Enter)),
                        (o = (a = n.props).handleOnKeyDown) === null ||
                            o === void 0 ||
                            o.call(a, r);
                }),
                (n.isSameDay = function (r) {
                    return se(n.props.day, r);
                }),
                (n.isKeyboardSelected = function () {
                    var r;
                    if (n.props.disabledKeyboardNavigation) return !1;
                    var a = n.props.selectsMultiple
                            ? (r = n.props.selectedDates) === null ||
                              r === void 0
                                ? void 0
                                : r.some(function (i) {
                                      return n.isSameDayOrWeek(i);
                                  })
                            : n.isSameDayOrWeek(n.props.selected),
                        o =
                            n.props.preSelection &&
                            n.isDisabled(n.props.preSelection);
                    return !a && n.isSameDayOrWeek(n.props.preSelection) && !o;
                }),
                (n.isDisabled = function (r) {
                    return (
                        r === void 0 && (r = n.props.day),
                        Hn(r, {
                            minDate: n.props.minDate,
                            maxDate: n.props.maxDate,
                            excludeDates: n.props.excludeDates,
                            excludeDateIntervals: n.props.excludeDateIntervals,
                            includeDateIntervals: n.props.includeDateIntervals,
                            includeDates: n.props.includeDates,
                            filterDate: n.props.filterDate,
                        })
                    );
                }),
                (n.isExcluded = function () {
                    return qd(n.props.day, {
                        excludeDates: n.props.excludeDates,
                        excludeDateIntervals: n.props.excludeDateIntervals,
                    });
                }),
                (n.isStartOfWeek = function () {
                    return se(
                        n.props.day,
                        er(
                            n.props.day,
                            n.props.locale,
                            n.props.calendarStartDay
                        )
                    );
                }),
                (n.isSameWeek = function (r) {
                    return (
                        n.props.showWeekPicker &&
                        se(
                            r,
                            er(
                                n.props.day,
                                n.props.locale,
                                n.props.calendarStartDay
                            )
                        )
                    );
                }),
                (n.isSameDayOrWeek = function (r) {
                    return n.isSameDay(r) || n.isSameWeek(r);
                }),
                (n.getHighLightedClass = function () {
                    var r = n.props,
                        a = r.day,
                        o = r.highlightDates;
                    if (!o) return !1;
                    var i = Se(a, "MM.dd.yyyy");
                    return o.get(i);
                }),
                (n.getHolidaysClass = function () {
                    var r,
                        a = n.props,
                        o = a.day,
                        i = a.holidays;
                    if (!i) return [void 0];
                    var s = Se(o, "MM.dd.yyyy");
                    return i.has(s)
                        ? [
                              (r = i.get(s)) === null || r === void 0
                                  ? void 0
                                  : r.className,
                          ]
                        : [void 0];
                }),
                (n.isInRange = function () {
                    var r = n.props,
                        a = r.day,
                        o = r.startDate,
                        i = r.endDate;
                    return !o || !i ? !1 : so(a, o, i);
                }),
                (n.isInSelectingRange = function () {
                    var r,
                        a = n.props,
                        o = a.day,
                        i = a.selectsStart,
                        s = a.selectsEnd,
                        l = a.selectsRange,
                        u = a.selectsDisabledDaysInRange,
                        c = a.startDate,
                        d = a.endDate,
                        p =
                            (r = n.props.selectingDate) !== null && r !== void 0
                                ? r
                                : n.props.preSelection;
                    return !(i || s || l) || !p || (!u && n.isDisabled())
                        ? !1
                        : i && d && (Ir(p, d) || kr(p, d))
                        ? so(o, p, d)
                        : (s && c && (ar(p, c) || kr(p, c))) ||
                          (l && c && !d && (ar(p, c) || kr(p, c)))
                        ? so(o, c, p)
                        : !1;
                }),
                (n.isSelectingRangeStart = function () {
                    var r;
                    if (!n.isInSelectingRange()) return !1;
                    var a = n.props,
                        o = a.day,
                        i = a.startDate,
                        s = a.selectsStart,
                        l =
                            (r = n.props.selectingDate) !== null && r !== void 0
                                ? r
                                : n.props.preSelection;
                    return s ? se(o, l) : se(o, i);
                }),
                (n.isSelectingRangeEnd = function () {
                    var r;
                    if (!n.isInSelectingRange()) return !1;
                    var a = n.props,
                        o = a.day,
                        i = a.endDate,
                        s = a.selectsEnd,
                        l = a.selectsRange,
                        u =
                            (r = n.props.selectingDate) !== null && r !== void 0
                                ? r
                                : n.props.preSelection;
                    return s || l ? se(o, u) : se(o, i);
                }),
                (n.isRangeStart = function () {
                    var r = n.props,
                        a = r.day,
                        o = r.startDate,
                        i = r.endDate;
                    return !o || !i ? !1 : se(o, a);
                }),
                (n.isRangeEnd = function () {
                    var r = n.props,
                        a = r.day,
                        o = r.startDate,
                        i = r.endDate;
                    return !o || !i ? !1 : se(i, a);
                }),
                (n.isWeekend = function () {
                    var r = tE(n.props.day);
                    return r === 0 || r === 6;
                }),
                (n.isAfterMonth = function () {
                    return (
                        n.props.month !== void 0 &&
                        (n.props.month + 1) % 12 === it(n.props.day)
                    );
                }),
                (n.isBeforeMonth = function () {
                    return (
                        n.props.month !== void 0 &&
                        (it(n.props.day) + 1) % 12 === n.props.month
                    );
                }),
                (n.isCurrentDay = function () {
                    return n.isSameDay(me());
                }),
                (n.isSelected = function () {
                    var r;
                    return n.props.selectsMultiple
                        ? (r = n.props.selectedDates) === null || r === void 0
                            ? void 0
                            : r.some(function (a) {
                                  return n.isSameDayOrWeek(a);
                              })
                        : n.isSameDayOrWeek(n.props.selected);
                }),
                (n.getClassNames = function (r) {
                    var a = n.props.dayClassName
                        ? n.props.dayClassName(r)
                        : void 0;
                    return Be(
                        "react-datepicker__day",
                        a,
                        "react-datepicker__day--" + M2(n.props.day),
                        {
                            "react-datepicker__day--disabled": n.isDisabled(),
                            "react-datepicker__day--excluded": n.isExcluded(),
                            "react-datepicker__day--selected": n.isSelected(),
                            "react-datepicker__day--keyboard-selected":
                                n.isKeyboardSelected(),
                            "react-datepicker__day--range-start":
                                n.isRangeStart(),
                            "react-datepicker__day--range-end": n.isRangeEnd(),
                            "react-datepicker__day--in-range": n.isInRange(),
                            "react-datepicker__day--in-selecting-range":
                                n.isInSelectingRange(),
                            "react-datepicker__day--selecting-range-start":
                                n.isSelectingRangeStart(),
                            "react-datepicker__day--selecting-range-end":
                                n.isSelectingRangeEnd(),
                            "react-datepicker__day--today": n.isCurrentDay(),
                            "react-datepicker__day--weekend": n.isWeekend(),
                            "react-datepicker__day--outside-month":
                                n.isAfterMonth() || n.isBeforeMonth(),
                        },
                        n.getHighLightedClass(),
                        n.getHolidaysClass()
                    );
                }),
                (n.getAriaLabel = function () {
                    var r = n.props,
                        a = r.day,
                        o = r.ariaLabelPrefixWhenEnabled,
                        i = o === void 0 ? "Choose" : o,
                        s = r.ariaLabelPrefixWhenDisabled,
                        l = s === void 0 ? "Not available" : s,
                        u = n.isDisabled() || n.isExcluded() ? l : i;
                    return ""
                        .concat(u, " ")
                        .concat(Se(a, "PPPP", n.props.locale));
                }),
                (n.getTitle = function () {
                    var r = n.props,
                        a = r.day,
                        o = r.holidays,
                        i = o === void 0 ? new Map() : o,
                        s = r.excludeDates,
                        l = Se(a, "MM.dd.yyyy"),
                        u = [];
                    return (
                        i.has(l) && u.push.apply(u, i.get(l).holidayNames),
                        n.isExcluded() &&
                            u.push(
                                s == null
                                    ? void 0
                                    : s
                                          .filter(function (c) {
                                              return c instanceof Date
                                                  ? se(c, a)
                                                  : se(
                                                        c == null
                                                            ? void 0
                                                            : c.date,
                                                        a
                                                    );
                                          })
                                          .map(function (c) {
                                              if (!(c instanceof Date))
                                                  return c == null
                                                      ? void 0
                                                      : c.message;
                                          })
                            ),
                        u.join(", ")
                    );
                }),
                (n.getTabIndex = function () {
                    var r = n.props.selected,
                        a = n.props.preSelection,
                        o =
                            !(
                                n.props.showWeekPicker &&
                                (n.props.showWeekNumber || !n.isStartOfWeek())
                            ) &&
                            (n.isKeyboardSelected() ||
                                (n.isSameDay(r) && se(a, r)))
                                ? 0
                                : -1;
                    return o;
                }),
                (n.handleFocusDay = function () {
                    var r;
                    n.shouldFocusDay() &&
                        ((r = n.dayEl.current) === null ||
                            r === void 0 ||
                            r.focus({ preventScroll: !0 }));
                }),
                (n.renderDayContents = function () {
                    return (n.props.monthShowsDuplicateDaysEnd &&
                        n.isAfterMonth()) ||
                        (n.props.monthShowsDuplicateDaysStart &&
                            n.isBeforeMonth())
                        ? null
                        : n.props.renderDayContents
                        ? n.props.renderDayContents(
                              rh(n.props.day),
                              n.props.day
                          )
                        : rh(n.props.day);
                }),
                (n.render = function () {
                    return T.createElement(
                        "div",
                        {
                            ref: n.dayEl,
                            className: n.getClassNames(n.props.day),
                            onKeyDown: n.handleOnKeyDown,
                            onClick: n.handleClick,
                            onMouseEnter: n.props.usePointerEvent
                                ? void 0
                                : n.handleMouseEnter,
                            onPointerEnter: n.props.usePointerEvent
                                ? n.handleMouseEnter
                                : void 0,
                            tabIndex: n.getTabIndex(),
                            "aria-label": n.getAriaLabel(),
                            role: "option",
                            title: n.getTitle(),
                            "aria-disabled": n.isDisabled(),
                            "aria-current": n.isCurrentDay() ? "date" : void 0,
                            "aria-selected": n.isSelected() || n.isInRange(),
                        },
                        n.renderDayContents(),
                        n.getTitle() !== "" &&
                            T.createElement(
                                "span",
                                { className: "overlay" },
                                n.getTitle()
                            )
                    );
                }),
                n
            );
        }
        return (
            (t.prototype.componentDidMount = function () {
                this.handleFocusDay();
            }),
            (t.prototype.componentDidUpdate = function () {
                this.handleFocusDay();
            }),
            (t.prototype.shouldFocusDay = function () {
                var n = !1;
                return (
                    this.getTabIndex() === 0 &&
                        this.isSameDay(this.props.preSelection) &&
                        ((!document.activeElement ||
                            document.activeElement === document.body) &&
                            (n = !0),
                        this.props.inline &&
                            !this.props.shouldFocusDayInline &&
                            (n = !1),
                        this.isDayActiveElement() && (n = !0),
                        this.isDuplicateDay() && (n = !1)),
                    n
                );
            }),
            (t.prototype.isDayActiveElement = function () {
                var n, r, a;
                return (
                    ((r =
                        (n = this.props.containerRef) === null || n === void 0
                            ? void 0
                            : n.current) === null || r === void 0
                        ? void 0
                        : r.contains(document.activeElement)) &&
                    ((a = document.activeElement) === null || a === void 0
                        ? void 0
                        : a.classList.contains("react-datepicker__day"))
                );
            }),
            (t.prototype.isDuplicateDay = function () {
                return (
                    (this.props.monthShowsDuplicateDaysEnd &&
                        this.isAfterMonth()) ||
                    (this.props.monthShowsDuplicateDaysStart &&
                        this.isBeforeMonth())
                );
            }),
            t
        );
    })(x.Component),
    K2 = (function (e) {
        $e(t, e);
        function t() {
            var n = (e !== null && e.apply(this, arguments)) || this;
            return (
                (n.weekNumberEl = x.createRef()),
                (n.handleClick = function (r) {
                    n.props.onClick && n.props.onClick(r);
                }),
                (n.handleOnKeyDown = function (r) {
                    var a,
                        o,
                        i = r.key;
                    i === W.Space && (r.preventDefault(), (r.key = W.Enter)),
                        (o = (a = n.props).handleOnKeyDown) === null ||
                            o === void 0 ||
                            o.call(a, r);
                }),
                (n.isKeyboardSelected = function () {
                    return (
                        !n.props.disabledKeyboardNavigation &&
                        !se(n.props.date, n.props.selected) &&
                        se(n.props.date, n.props.preSelection)
                    );
                }),
                (n.getTabIndex = function () {
                    return n.props.showWeekPicker &&
                        n.props.showWeekNumber &&
                        (n.isKeyboardSelected() ||
                            (se(n.props.date, n.props.selected) &&
                                se(n.props.preSelection, n.props.selected)))
                        ? 0
                        : -1;
                }),
                (n.handleFocusWeekNumber = function (r) {
                    var a = !1;
                    n.getTabIndex() === 0 &&
                        !(r != null && r.isInputFocused) &&
                        se(n.props.date, n.props.preSelection) &&
                        ((!document.activeElement ||
                            document.activeElement === document.body) &&
                            (a = !0),
                        n.props.inline &&
                            !n.props.shouldFocusDayInline &&
                            (a = !1),
                        n.props.containerRef &&
                            n.props.containerRef.current &&
                            n.props.containerRef.current.contains(
                                document.activeElement
                            ) &&
                            document.activeElement &&
                            document.activeElement.classList.contains(
                                "react-datepicker__week-number"
                            ) &&
                            (a = !0)),
                        a &&
                            n.weekNumberEl.current &&
                            n.weekNumberEl.current.focus({ preventScroll: !0 });
                }),
                n
            );
        }
        return (
            Object.defineProperty(t, "defaultProps", {
                get: function () {
                    return { ariaLabelPrefix: "week " };
                },
                enumerable: !1,
                configurable: !0,
            }),
            (t.prototype.componentDidMount = function () {
                this.handleFocusWeekNumber();
            }),
            (t.prototype.componentDidUpdate = function (n) {
                this.handleFocusWeekNumber(n);
            }),
            (t.prototype.render = function () {
                var n = this.props,
                    r = n.weekNumber,
                    a = n.ariaLabelPrefix,
                    o = a === void 0 ? t.defaultProps.ariaLabelPrefix : a,
                    i = n.onClick,
                    s = {
                        "react-datepicker__week-number": !0,
                        "react-datepicker__week-number--clickable": !!i,
                        "react-datepicker__week-number--selected":
                            !!i && se(this.props.date, this.props.selected),
                        "react-datepicker__week-number--keyboard-selected":
                            this.isKeyboardSelected(),
                    };
                return T.createElement(
                    "div",
                    {
                        ref: this.weekNumberEl,
                        className: Be(s),
                        "aria-label": ""
                            .concat(o, " ")
                            .concat(this.props.weekNumber),
                        onClick: this.handleClick,
                        onKeyDown: this.handleOnKeyDown,
                        tabIndex: this.getTabIndex(),
                    },
                    r
                );
            }),
            t
        );
    })(x.Component),
    q2 = (function (e) {
        $e(t, e);
        function t() {
            var n = (e !== null && e.apply(this, arguments)) || this;
            return (
                (n.isDisabled = function (r) {
                    return Hn(r, {
                        minDate: n.props.minDate,
                        maxDate: n.props.maxDate,
                        excludeDates: n.props.excludeDates,
                        excludeDateIntervals: n.props.excludeDateIntervals,
                        includeDateIntervals: n.props.includeDateIntervals,
                        includeDates: n.props.includeDates,
                        filterDate: n.props.filterDate,
                    });
                }),
                (n.handleDayClick = function (r, a) {
                    n.props.onDayClick && n.props.onDayClick(r, a);
                }),
                (n.handleDayMouseEnter = function (r) {
                    n.props.onDayMouseEnter && n.props.onDayMouseEnter(r);
                }),
                (n.handleWeekClick = function (r, a, o) {
                    for (var i, s, l, u = new Date(r), c = 0; c < 7; c++) {
                        var d = new Date(r);
                        d.setDate(d.getDate() + c);
                        var p = !n.isDisabled(d);
                        if (p) {
                            u = d;
                            break;
                        }
                    }
                    typeof n.props.onWeekSelect == "function" &&
                        n.props.onWeekSelect(u, a, o),
                        n.props.showWeekPicker && n.handleDayClick(u, o),
                        ((i = n.props.shouldCloseOnSelect) !== null &&
                        i !== void 0
                            ? i
                            : t.defaultProps.shouldCloseOnSelect) &&
                            ((l = (s = n.props).setOpen) === null ||
                                l === void 0 ||
                                l.call(s, !1));
                }),
                (n.formatWeekNumber = function (r) {
                    return n.props.formatWeekNumber
                        ? n.props.formatWeekNumber(r)
                        : P2(r);
                }),
                (n.renderDays = function () {
                    var r = n.startOfWeek(),
                        a = [],
                        o = n.formatWeekNumber(r);
                    if (n.props.showWeekNumber) {
                        var i =
                            n.props.onWeekSelect || n.props.showWeekPicker
                                ? n.handleWeekClick.bind(n, r, o)
                                : void 0;
                        a.push(
                            T.createElement(
                                K2,
                                le({ key: "W" }, t.defaultProps, n.props, {
                                    weekNumber: o,
                                    date: r,
                                    onClick: i,
                                })
                            )
                        );
                    }
                    return a.concat(
                        [0, 1, 2, 3, 4, 5, 6].map(function (s) {
                            var l = dr(r, s);
                            return T.createElement(
                                Q2,
                                le({}, t.defaultProps, n.props, {
                                    ariaLabelPrefixWhenEnabled:
                                        n.props.chooseDayAriaLabelPrefix,
                                    ariaLabelPrefixWhenDisabled:
                                        n.props.disabledDayAriaLabelPrefix,
                                    key: l.valueOf(),
                                    day: l,
                                    onClick: n.handleDayClick.bind(n, l),
                                    onMouseEnter: n.handleDayMouseEnter.bind(
                                        n,
                                        l
                                    ),
                                })
                            );
                        })
                    );
                }),
                (n.startOfWeek = function () {
                    return er(
                        n.props.day,
                        n.props.locale,
                        n.props.calendarStartDay
                    );
                }),
                (n.isKeyboardSelected = function () {
                    return (
                        !n.props.disabledKeyboardNavigation &&
                        !se(n.startOfWeek(), n.props.selected) &&
                        se(n.startOfWeek(), n.props.preSelection)
                    );
                }),
                n
            );
        }
        return (
            Object.defineProperty(t, "defaultProps", {
                get: function () {
                    return { shouldCloseOnSelect: !0 };
                },
                enumerable: !1,
                configurable: !0,
            }),
            (t.prototype.render = function () {
                var n = {
                    "react-datepicker__week": !0,
                    "react-datepicker__week--selected": se(
                        this.startOfWeek(),
                        this.props.selected
                    ),
                    "react-datepicker__week--keyboard-selected":
                        this.isKeyboardSelected(),
                };
                return T.createElement(
                    "div",
                    { className: Be(n) },
                    this.renderDays()
                );
            }),
            t
        );
    })(x.Component),
    to,
    X2 = 6,
    va = {
        TWO_COLUMNS: "two_columns",
        THREE_COLUMNS: "three_columns",
        FOUR_COLUMNS: "four_columns",
    },
    du =
        ((to = {}),
        (to[va.TWO_COLUMNS] = {
            grid: [
                [0, 1],
                [2, 3],
                [4, 5],
                [6, 7],
                [8, 9],
                [10, 11],
            ],
            verticalNavigationOffset: 2,
        }),
        (to[va.THREE_COLUMNS] = {
            grid: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [9, 10, 11],
            ],
            verticalNavigationOffset: 3,
        }),
        (to[va.FOUR_COLUMNS] = {
            grid: [
                [0, 1, 2, 3],
                [4, 5, 6, 7],
                [8, 9, 10, 11],
            ],
            verticalNavigationOffset: 4,
        }),
        to),
    Ti = 1;
function Th(e, t) {
    return e ? va.FOUR_COLUMNS : t ? va.TWO_COLUMNS : va.THREE_COLUMNS;
}
var G2 = (function (e) {
        $e(t, e);
        function t() {
            var n = (e !== null && e.apply(this, arguments)) || this;
            return (
                (n.MONTH_REFS = sn([], Array(12), !0).map(function () {
                    return x.createRef();
                })),
                (n.QUARTER_REFS = sn([], Array(4), !0).map(function () {
                    return x.createRef();
                })),
                (n.isDisabled = function (r) {
                    return Hn(r, {
                        minDate: n.props.minDate,
                        maxDate: n.props.maxDate,
                        excludeDates: n.props.excludeDates,
                        excludeDateIntervals: n.props.excludeDateIntervals,
                        includeDateIntervals: n.props.includeDateIntervals,
                        includeDates: n.props.includeDates,
                        filterDate: n.props.filterDate,
                    });
                }),
                (n.isExcluded = function (r) {
                    return qd(r, {
                        excludeDates: n.props.excludeDates,
                        excludeDateIntervals: n.props.excludeDateIntervals,
                    });
                }),
                (n.handleDayClick = function (r, a) {
                    var o, i;
                    (i = (o = n.props).onDayClick) === null ||
                        i === void 0 ||
                        i.call(o, r, a, n.props.orderInDisplay);
                }),
                (n.handleDayMouseEnter = function (r) {
                    var a, o;
                    (o = (a = n.props).onDayMouseEnter) === null ||
                        o === void 0 ||
                        o.call(a, r);
                }),
                (n.handleMouseLeave = function () {
                    var r, a;
                    (a = (r = n.props).onMouseLeave) === null ||
                        a === void 0 ||
                        a.call(r);
                }),
                (n.isRangeStartMonth = function (r) {
                    var a = n.props,
                        o = a.day,
                        i = a.startDate,
                        s = a.endDate;
                    return !i || !s ? !1 : ot(yt(o, r), i);
                }),
                (n.isRangeStartQuarter = function (r) {
                    var a = n.props,
                        o = a.day,
                        i = a.startDate,
                        s = a.endDate;
                    return !i || !s ? !1 : Ys(Qr(o, r), i);
                }),
                (n.isRangeEndMonth = function (r) {
                    var a = n.props,
                        o = a.day,
                        i = a.startDate,
                        s = a.endDate;
                    return !i || !s ? !1 : ot(yt(o, r), s);
                }),
                (n.isRangeEndQuarter = function (r) {
                    var a = n.props,
                        o = a.day,
                        i = a.startDate,
                        s = a.endDate;
                    return !i || !s ? !1 : Ys(Qr(o, r), s);
                }),
                (n.isInSelectingRangeMonth = function (r) {
                    var a,
                        o = n.props,
                        i = o.day,
                        s = o.selectsStart,
                        l = o.selectsEnd,
                        u = o.selectsRange,
                        c = o.startDate,
                        d = o.endDate,
                        p =
                            (a = n.props.selectingDate) !== null && a !== void 0
                                ? a
                                : n.props.preSelection;
                    return !(s || l || u) || !p
                        ? !1
                        : s && d
                        ? Ni(p, d, r, i)
                        : (l && c) || (u && c && !d)
                        ? Ni(c, p, r, i)
                        : !1;
                }),
                (n.isSelectingMonthRangeStart = function (r) {
                    var a;
                    if (!n.isInSelectingRangeMonth(r)) return !1;
                    var o = n.props,
                        i = o.day,
                        s = o.startDate,
                        l = o.selectsStart,
                        u = yt(i, r),
                        c =
                            (a = n.props.selectingDate) !== null && a !== void 0
                                ? a
                                : n.props.preSelection;
                    return l ? ot(u, c) : ot(u, s);
                }),
                (n.isSelectingMonthRangeEnd = function (r) {
                    var a;
                    if (!n.isInSelectingRangeMonth(r)) return !1;
                    var o = n.props,
                        i = o.day,
                        s = o.endDate,
                        l = o.selectsEnd,
                        u = o.selectsRange,
                        c = yt(i, r),
                        d =
                            (a = n.props.selectingDate) !== null && a !== void 0
                                ? a
                                : n.props.preSelection;
                    return l || u ? ot(c, d) : ot(c, s);
                }),
                (n.isInSelectingRangeQuarter = function (r) {
                    var a,
                        o = n.props,
                        i = o.day,
                        s = o.selectsStart,
                        l = o.selectsEnd,
                        u = o.selectsRange,
                        c = o.startDate,
                        d = o.endDate,
                        p =
                            (a = n.props.selectingDate) !== null && a !== void 0
                                ? a
                                : n.props.preSelection;
                    return !(s || l || u) || !p
                        ? !1
                        : s && d
                        ? Mi(p, d, r, i)
                        : (l && c) || (u && c && !d)
                        ? Mi(c, p, r, i)
                        : !1;
                }),
                (n.isWeekInMonth = function (r) {
                    var a = n.props.day,
                        o = dr(r, 6);
                    return ot(r, a) || ot(o, a);
                }),
                (n.isCurrentMonth = function (r, a) {
                    return re(r) === re(me()) && a === it(me());
                }),
                (n.isCurrentQuarter = function (r, a) {
                    return re(r) === re(me()) && a === _r(me());
                }),
                (n.isSelectedMonth = function (r, a, o) {
                    return it(o) === a && re(r) === re(o);
                }),
                (n.isSelectMonthInList = function (r, a, o) {
                    return o.some(function (i) {
                        return n.isSelectedMonth(r, a, i);
                    });
                }),
                (n.isSelectedQuarter = function (r, a, o) {
                    return _r(r) === a && re(r) === re(o);
                }),
                (n.renderWeeks = function () {
                    for (
                        var r = [],
                            a = n.props.fixedHeight,
                            o = 0,
                            i = !1,
                            s = er(
                                tr(n.props.day),
                                n.props.locale,
                                n.props.calendarStartDay
                            ),
                            l = function (g) {
                                return n.props.showWeekPicker
                                    ? er(
                                          g,
                                          n.props.locale,
                                          n.props.calendarStartDay
                                      )
                                    : n.props.preSelection;
                            },
                            u = function (g) {
                                return n.props.showWeekPicker
                                    ? er(
                                          g,
                                          n.props.locale,
                                          n.props.calendarStartDay
                                      )
                                    : n.props.selected;
                            },
                            c = n.props.selected ? u(n.props.selected) : void 0,
                            d = n.props.preSelection
                                ? l(n.props.preSelection)
                                : void 0;
                        r.push(
                            T.createElement(
                                q2,
                                le({}, n.props, {
                                    ariaLabelPrefix:
                                        n.props.weekAriaLabelPrefix,
                                    key: o,
                                    day: s,
                                    month: it(n.props.day),
                                    onDayClick: n.handleDayClick,
                                    onDayMouseEnter: n.handleDayMouseEnter,
                                    selected: c,
                                    preSelection: d,
                                    showWeekNumber: n.props.showWeekNumbers,
                                })
                            )
                        ),
                            !i;

                    ) {
                        o++, (s = bs(s, 1));
                        var p = a && o >= X2,
                            v = !a && !n.isWeekInMonth(s);
                        if (p || v)
                            if (n.props.peekNextMonth) i = !0;
                            else break;
                    }
                    return r;
                }),
                (n.onMonthClick = function (r, a) {
                    var o = n.isMonthDisabledForLabelDate(a),
                        i = o.isDisabled,
                        s = o.labelDate;
                    i || n.handleDayClick(tr(s), r);
                }),
                (n.onMonthMouseEnter = function (r) {
                    var a = n.isMonthDisabledForLabelDate(r),
                        o = a.isDisabled,
                        i = a.labelDate;
                    o || n.handleDayMouseEnter(tr(i));
                }),
                (n.handleMonthNavigation = function (r, a) {
                    var o, i, s, l;
                    (i = (o = n.props).setPreSelection) === null ||
                        i === void 0 ||
                        i.call(o, a),
                        (l =
                            (s = n.MONTH_REFS[r]) === null || s === void 0
                                ? void 0
                                : s.current) === null ||
                            l === void 0 ||
                            l.focus();
                }),
                (n.handleKeyboardNavigation = function (r, a, o) {
                    var i,
                        s = n.props,
                        l = s.selected,
                        u = s.preSelection,
                        c = s.setPreSelection,
                        d = s.minDate,
                        p = s.maxDate,
                        v = s.showFourColumnMonthYearPicker,
                        g = s.showTwoColumnMonthYearPicker;
                    if (u) {
                        var w = Th(v, g),
                            k = n.getVerticalOffset(w),
                            h =
                                (i = du[w]) === null || i === void 0
                                    ? void 0
                                    : i.grid,
                            m = function (S, b, R) {
                                var F,
                                    z,
                                    K = b,
                                    X = R;
                                switch (S) {
                                    case W.ArrowRight:
                                        (K = Qt(b, Ti)),
                                            (X = R === 11 ? 0 : R + Ti);
                                        break;
                                    case W.ArrowLeft:
                                        (K = ba(b, Ti)),
                                            (X = R === 0 ? 11 : R - Ti);
                                        break;
                                    case W.ArrowUp:
                                        (K = ba(b, k)),
                                            (X =
                                                !(
                                                    (F =
                                                        h == null
                                                            ? void 0
                                                            : h[0]) === null ||
                                                    F === void 0
                                                ) && F.includes(R)
                                                    ? R + 12 - k
                                                    : R - k);
                                        break;
                                    case W.ArrowDown:
                                        (K = Qt(b, k)),
                                            (X =
                                                !(
                                                    (z =
                                                        h == null
                                                            ? void 0
                                                            : h[
                                                                  h.length - 1
                                                              ]) === null ||
                                                    z === void 0
                                                ) && z.includes(R)
                                                    ? R - 12 + k
                                                    : R + k);
                                        break;
                                }
                                return {
                                    newCalculatedDate: K,
                                    newCalculatedMonth: X,
                                };
                            },
                            y = function (S, b, R) {
                                for (
                                    var F = 40,
                                        z = S,
                                        K = !1,
                                        X = 0,
                                        j = m(z, b, R),
                                        O = j.newCalculatedDate,
                                        $ = j.newCalculatedMonth;
                                    !K;

                                ) {
                                    if (X >= F) {
                                        (O = b), ($ = R);
                                        break;
                                    }
                                    if (d && O < d) {
                                        z = W.ArrowRight;
                                        var Y = m(z, O, $);
                                        (O = Y.newCalculatedDate),
                                            ($ = Y.newCalculatedMonth);
                                    }
                                    if (p && O > p) {
                                        z = W.ArrowLeft;
                                        var Y = m(z, O, $);
                                        (O = Y.newCalculatedDate),
                                            ($ = Y.newCalculatedMonth);
                                    }
                                    if (I2(O, n.props)) {
                                        var Y = m(z, O, $);
                                        (O = Y.newCalculatedDate),
                                            ($ = Y.newCalculatedMonth);
                                    } else K = !0;
                                    X++;
                                }
                                return {
                                    newCalculatedDate: O,
                                    newCalculatedMonth: $,
                                };
                            };
                        if (a === W.Enter) {
                            n.isMonthDisabled(o) ||
                                (n.onMonthClick(r, o), c == null || c(l));
                            return;
                        }
                        var C = y(a, u, o),
                            P = C.newCalculatedDate,
                            D = C.newCalculatedMonth;
                        switch (a) {
                            case W.ArrowRight:
                            case W.ArrowLeft:
                            case W.ArrowUp:
                            case W.ArrowDown:
                                n.handleMonthNavigation(D, P);
                                break;
                        }
                    }
                }),
                (n.getVerticalOffset = function (r) {
                    var a, o;
                    return (o =
                        (a = du[r]) === null || a === void 0
                            ? void 0
                            : a.verticalNavigationOffset) !== null &&
                        o !== void 0
                        ? o
                        : 0;
                }),
                (n.onMonthKeyDown = function (r, a) {
                    var o = n.props,
                        i = o.disabledKeyboardNavigation,
                        s = o.handleOnMonthKeyDown,
                        l = r.key;
                    l !== W.Tab && r.preventDefault(),
                        i || n.handleKeyboardNavigation(r, l, a),
                        s && s(r);
                }),
                (n.onQuarterClick = function (r, a) {
                    var o = Qr(n.props.day, a);
                    cu(o, n.props) || n.handleDayClick(vh(o), r);
                }),
                (n.onQuarterMouseEnter = function (r) {
                    var a = Qr(n.props.day, r);
                    cu(a, n.props) || n.handleDayMouseEnter(vh(a));
                }),
                (n.handleQuarterNavigation = function (r, a) {
                    var o, i, s, l;
                    n.isDisabled(a) ||
                        n.isExcluded(a) ||
                        ((i = (o = n.props).setPreSelection) === null ||
                            i === void 0 ||
                            i.call(o, a),
                        (l =
                            (s = n.QUARTER_REFS[r - 1]) === null || s === void 0
                                ? void 0
                                : s.current) === null ||
                            l === void 0 ||
                            l.focus());
                }),
                (n.onQuarterKeyDown = function (r, a) {
                    var o,
                        i,
                        s = r.key;
                    if (!n.props.disabledKeyboardNavigation)
                        switch (s) {
                            case W.Enter:
                                n.onQuarterClick(r, a),
                                    (i = (o = n.props).setPreSelection) ===
                                        null ||
                                        i === void 0 ||
                                        i.call(o, n.props.selected);
                                break;
                            case W.ArrowRight:
                                if (!n.props.preSelection) break;
                                n.handleQuarterNavigation(
                                    a === 4 ? 1 : a + 1,
                                    Fd(n.props.preSelection, 1)
                                );
                                break;
                            case W.ArrowLeft:
                                if (!n.props.preSelection) break;
                                n.handleQuarterNavigation(
                                    a === 1 ? 4 : a - 1,
                                    sy(n.props.preSelection, 1)
                                );
                                break;
                        }
                }),
                (n.isMonthDisabledForLabelDate = function (r) {
                    var a,
                        o = n.props,
                        i = o.day,
                        s = o.minDate,
                        l = o.maxDate,
                        u = o.excludeDates,
                        c = o.includeDates,
                        d = yt(i, r);
                    return {
                        isDisabled:
                            (a = (s || l || u || c) && ky(d, n.props)) !==
                                null && a !== void 0
                                ? a
                                : !1,
                        labelDate: d,
                    };
                }),
                (n.isMonthDisabled = function (r) {
                    var a = n.isMonthDisabledForLabelDate(r).isDisabled;
                    return a;
                }),
                (n.getMonthClassNames = function (r) {
                    var a = n.props,
                        o = a.day,
                        i = a.startDate,
                        s = a.endDate,
                        l = a.preSelection,
                        u = a.monthClassName,
                        c = u ? u(yt(o, r)) : void 0,
                        d = n.getSelection();
                    return Be(
                        "react-datepicker__month-text",
                        "react-datepicker__month-".concat(r),
                        c,
                        {
                            "react-datepicker__month-text--disabled":
                                n.isMonthDisabled(r),
                            "react-datepicker__month-text--selected": d
                                ? n.isSelectMonthInList(o, r, d)
                                : void 0,
                            "react-datepicker__month-text--keyboard-selected":
                                !n.props.disabledKeyboardNavigation &&
                                l &&
                                n.isSelectedMonth(o, r, l) &&
                                !n.isMonthDisabled(r),
                            "react-datepicker__month-text--in-selecting-range":
                                n.isInSelectingRangeMonth(r),
                            "react-datepicker__month-text--in-range":
                                i && s ? Ni(i, s, r, o) : void 0,
                            "react-datepicker__month-text--range-start":
                                n.isRangeStartMonth(r),
                            "react-datepicker__month-text--range-end":
                                n.isRangeEndMonth(r),
                            "react-datepicker__month-text--selecting-range-start":
                                n.isSelectingMonthRangeStart(r),
                            "react-datepicker__month-text--selecting-range-end":
                                n.isSelectingMonthRangeEnd(r),
                            "react-datepicker__month-text--today":
                                n.isCurrentMonth(o, r),
                        }
                    );
                }),
                (n.getTabIndex = function (r) {
                    if (n.props.preSelection == null) return "-1";
                    var a = it(n.props.preSelection),
                        o =
                            !n.props.disabledKeyboardNavigation && r === a
                                ? "0"
                                : "-1";
                    return o;
                }),
                (n.getQuarterTabIndex = function (r) {
                    if (n.props.preSelection == null) return "-1";
                    var a = _r(n.props.preSelection),
                        o =
                            !n.props.disabledKeyboardNavigation && r === a
                                ? "0"
                                : "-1";
                    return o;
                }),
                (n.getAriaLabel = function (r) {
                    var a = n.props,
                        o = a.chooseDayAriaLabelPrefix,
                        i = o === void 0 ? "Choose" : o,
                        s = a.disabledDayAriaLabelPrefix,
                        l = s === void 0 ? "Not available" : s,
                        u = a.day,
                        c = a.locale,
                        d = yt(u, r),
                        p = n.isDisabled(d) || n.isExcluded(d) ? l : i;
                    return "".concat(p, " ").concat(Se(d, "MMMM yyyy", c));
                }),
                (n.getQuarterClassNames = function (r) {
                    var a = n.props,
                        o = a.day,
                        i = a.startDate,
                        s = a.endDate,
                        l = a.selected,
                        u = a.minDate,
                        c = a.maxDate,
                        d = a.excludeDates,
                        p = a.includeDates,
                        v = a.filterDate,
                        g = a.preSelection,
                        w = a.disabledKeyboardNavigation,
                        k = (u || c || d || p || v) && cu(Qr(o, r), n.props);
                    return Be(
                        "react-datepicker__quarter-text",
                        "react-datepicker__quarter-".concat(r),
                        {
                            "react-datepicker__quarter-text--disabled": k,
                            "react-datepicker__quarter-text--selected": l
                                ? n.isSelectedQuarter(o, r, l)
                                : void 0,
                            "react-datepicker__quarter-text--keyboard-selected":
                                !w && g && n.isSelectedQuarter(o, r, g) && !k,
                            "react-datepicker__quarter-text--in-selecting-range":
                                n.isInSelectingRangeQuarter(r),
                            "react-datepicker__quarter-text--in-range":
                                i && s ? Mi(i, s, r, o) : void 0,
                            "react-datepicker__quarter-text--range-start":
                                n.isRangeStartQuarter(r),
                            "react-datepicker__quarter-text--range-end":
                                n.isRangeEndQuarter(r),
                        }
                    );
                }),
                (n.getMonthContent = function (r) {
                    var a = n.props,
                        o = a.showFullMonthYearPicker,
                        i = a.renderMonthContent,
                        s = a.locale,
                        l = a.day,
                        u = Dy(r, s),
                        c = Kd(r, s);
                    return i ? i(r, u, c, l) : o ? c : u;
                }),
                (n.getQuarterContent = function (r) {
                    var a,
                        o = n.props,
                        i = o.renderQuarterContent,
                        s = o.locale,
                        l = j2(r, s);
                    return (a = i == null ? void 0 : i(r, l)) !== null &&
                        a !== void 0
                        ? a
                        : l;
                }),
                (n.renderMonths = function () {
                    var r,
                        a = n.props,
                        o = a.showTwoColumnMonthYearPicker,
                        i = a.showFourColumnMonthYearPicker,
                        s = a.day,
                        l = a.selected,
                        u =
                            (r = du[Th(i, o)]) === null || r === void 0
                                ? void 0
                                : r.grid;
                    return u == null
                        ? void 0
                        : u.map(function (c, d) {
                              return T.createElement(
                                  "div",
                                  {
                                      className:
                                          "react-datepicker__month-wrapper",
                                      key: d,
                                  },
                                  c.map(function (p, v) {
                                      return T.createElement(
                                          "div",
                                          {
                                              ref: n.MONTH_REFS[p],
                                              key: v,
                                              onClick: function (g) {
                                                  n.onMonthClick(g, p);
                                              },
                                              onKeyDown: function (g) {
                                                  Cy(g) &&
                                                      (g.preventDefault(),
                                                      (g.key = W.Enter)),
                                                      n.onMonthKeyDown(g, p);
                                              },
                                              onMouseEnter: n.props
                                                  .usePointerEvent
                                                  ? void 0
                                                  : function () {
                                                        return n.onMonthMouseEnter(
                                                            p
                                                        );
                                                    },
                                              onPointerEnter: n.props
                                                  .usePointerEvent
                                                  ? function () {
                                                        return n.onMonthMouseEnter(
                                                            p
                                                        );
                                                    }
                                                  : void 0,
                                              tabIndex: Number(
                                                  n.getTabIndex(p)
                                              ),
                                              className:
                                                  n.getMonthClassNames(p),
                                              "aria-disabled":
                                                  n.isMonthDisabled(p),
                                              role: "option",
                                              "aria-label": n.getAriaLabel(p),
                                              "aria-current": n.isCurrentMonth(
                                                  s,
                                                  p
                                              )
                                                  ? "date"
                                                  : void 0,
                                              "aria-selected": l
                                                  ? n.isSelectedMonth(s, p, l)
                                                  : void 0,
                                          },
                                          n.getMonthContent(p)
                                      );
                                  })
                              );
                          });
                }),
                (n.renderQuarters = function () {
                    var r = n.props,
                        a = r.day,
                        o = r.selected,
                        i = [1, 2, 3, 4];
                    return T.createElement(
                        "div",
                        { className: "react-datepicker__quarter-wrapper" },
                        i.map(function (s, l) {
                            return T.createElement(
                                "div",
                                {
                                    key: l,
                                    ref: n.QUARTER_REFS[l],
                                    role: "option",
                                    onClick: function (u) {
                                        n.onQuarterClick(u, s);
                                    },
                                    onKeyDown: function (u) {
                                        n.onQuarterKeyDown(u, s);
                                    },
                                    onMouseEnter: n.props.usePointerEvent
                                        ? void 0
                                        : function () {
                                              return n.onQuarterMouseEnter(s);
                                          },
                                    onPointerEnter: n.props.usePointerEvent
                                        ? function () {
                                              return n.onQuarterMouseEnter(s);
                                          }
                                        : void 0,
                                    className: n.getQuarterClassNames(s),
                                    "aria-selected": o
                                        ? n.isSelectedQuarter(a, s, o)
                                        : void 0,
                                    tabIndex: Number(n.getQuarterTabIndex(s)),
                                    "aria-current": n.isCurrentQuarter(a, s)
                                        ? "date"
                                        : void 0,
                                },
                                n.getQuarterContent(s)
                            );
                        })
                    );
                }),
                (n.getClassNames = function () {
                    var r = n.props,
                        a = r.selectingDate,
                        o = r.selectsStart,
                        i = r.selectsEnd,
                        s = r.showMonthYearPicker,
                        l = r.showQuarterYearPicker,
                        u = r.showWeekPicker;
                    return Be(
                        "react-datepicker__month",
                        {
                            "react-datepicker__month--selecting-range":
                                a && (o || i),
                        },
                        { "react-datepicker__monthPicker": s },
                        { "react-datepicker__quarterPicker": l },
                        { "react-datepicker__weekPicker": u }
                    );
                }),
                n
            );
        }
        return (
            (t.prototype.getSelection = function () {
                var n = this.props,
                    r = n.selected,
                    a = n.selectedDates,
                    o = n.selectsMultiple;
                if (o) return a;
                if (r) return [r];
            }),
            (t.prototype.render = function () {
                var n = this.props,
                    r = n.showMonthYearPicker,
                    a = n.showQuarterYearPicker,
                    o = n.day,
                    i = n.ariaLabelPrefix,
                    s = i === void 0 ? "Month " : i,
                    l = s ? s.trim() + " " : "";
                return T.createElement(
                    "div",
                    {
                        className: this.getClassNames(),
                        onMouseLeave: this.props.usePointerEvent
                            ? void 0
                            : this.handleMouseLeave,
                        onPointerLeave: this.props.usePointerEvent
                            ? this.handleMouseLeave
                            : void 0,
                        "aria-label": ""
                            .concat(l)
                            .concat(Se(o, "MMMM, yyyy", this.props.locale)),
                        role: "listbox",
                    },
                    r
                        ? this.renderMonths()
                        : a
                        ? this.renderQuarters()
                        : this.renderWeeks()
                );
            }),
            t
        );
    })(x.Component),
    J2 = (function (e) {
        $e(t, e);
        function t() {
            var n = (e !== null && e.apply(this, arguments)) || this;
            return (
                (n.isSelectedMonth = function (r) {
                    return n.props.month === r;
                }),
                (n.renderOptions = function () {
                    return n.props.monthNames.map(function (r, a) {
                        return T.createElement(
                            "div",
                            {
                                className: n.isSelectedMonth(a)
                                    ? "react-datepicker__month-option react-datepicker__month-option--selected_month"
                                    : "react-datepicker__month-option",
                                key: r,
                                onClick: n.onChange.bind(n, a),
                                "aria-selected": n.isSelectedMonth(a)
                                    ? "true"
                                    : void 0,
                            },
                            n.isSelectedMonth(a)
                                ? T.createElement(
                                      "span",
                                      {
                                          className:
                                              "react-datepicker__month-option--selected",
                                      },
                                      "✓"
                                  )
                                : "",
                            r
                        );
                    });
                }),
                (n.onChange = function (r) {
                    return n.props.onChange(r);
                }),
                (n.handleClickOutside = function () {
                    return n.props.onCancel();
                }),
                n
            );
        }
        return (
            (t.prototype.render = function () {
                return T.createElement(
                    "div",
                    { className: "react-datepicker__month-dropdown" },
                    this.renderOptions()
                );
            }),
            t
        );
    })(x.Component),
    Z2 = pl(J2),
    e_ = (function (e) {
        $e(t, e);
        function t() {
            var n = (e !== null && e.apply(this, arguments)) || this;
            return (
                (n.state = { dropdownVisible: !1 }),
                (n.renderSelectOptions = function (r) {
                    return r.map(function (a, o) {
                        return T.createElement(
                            "option",
                            { key: a, value: o },
                            a
                        );
                    });
                }),
                (n.renderSelectMode = function (r) {
                    return T.createElement(
                        "select",
                        {
                            value: n.props.month,
                            className: "react-datepicker__month-select",
                            onChange: function (a) {
                                return n.onChange(parseInt(a.target.value));
                            },
                        },
                        n.renderSelectOptions(r)
                    );
                }),
                (n.renderReadView = function (r, a) {
                    return T.createElement(
                        "div",
                        {
                            key: "read",
                            style: { visibility: r ? "visible" : "hidden" },
                            className: "react-datepicker__month-read-view",
                            onClick: n.toggleDropdown,
                        },
                        T.createElement("span", {
                            className:
                                "react-datepicker__month-read-view--down-arrow",
                        }),
                        T.createElement(
                            "span",
                            {
                                className:
                                    "react-datepicker__month-read-view--selected-month",
                            },
                            a[n.props.month]
                        )
                    );
                }),
                (n.renderDropdown = function (r) {
                    return T.createElement(
                        Z2,
                        le({ key: "dropdown" }, n.props, {
                            monthNames: r,
                            onChange: n.onChange,
                            onCancel: n.toggleDropdown,
                        })
                    );
                }),
                (n.renderScrollMode = function (r) {
                    var a = n.state.dropdownVisible,
                        o = [n.renderReadView(!a, r)];
                    return a && o.unshift(n.renderDropdown(r)), o;
                }),
                (n.onChange = function (r) {
                    n.toggleDropdown(),
                        r !== n.props.month && n.props.onChange(r);
                }),
                (n.toggleDropdown = function () {
                    return n.setState({
                        dropdownVisible: !n.state.dropdownVisible,
                    });
                }),
                n
            );
        }
        return (
            (t.prototype.render = function () {
                var n = this,
                    r = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                        this.props.useShortMonthInDropdown
                            ? function (o) {
                                  return Dy(o, n.props.locale);
                              }
                            : function (o) {
                                  return Kd(o, n.props.locale);
                              }
                    ),
                    a;
                switch (this.props.dropdownMode) {
                    case "scroll":
                        a = this.renderScrollMode(r);
                        break;
                    case "select":
                        a = this.renderSelectMode(r);
                        break;
                }
                return T.createElement(
                    "div",
                    {
                        className:
                            "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(
                                this.props.dropdownMode
                            ),
                    },
                    a
                );
            }),
            t
        );
    })(x.Component);
function t_(e, t) {
    for (var n = [], r = tr(e), a = tr(t); !ar(r, a); )
        n.push(me(r)), (r = Qt(r, 1));
    return n;
}
var n_ = (function (e) {
        $e(t, e);
        function t(n) {
            var r = e.call(this, n) || this;
            return (
                (r.renderOptions = function () {
                    return r.state.monthYearsList.map(function (a) {
                        var o = kc(a),
                            i = en(r.props.date, a) && ot(r.props.date, a);
                        return T.createElement(
                            "div",
                            {
                                className: i
                                    ? "react-datepicker__month-year-option--selected_month-year"
                                    : "react-datepicker__month-year-option",
                                key: o,
                                onClick: r.onChange.bind(r, o),
                                "aria-selected": i ? "true" : void 0,
                            },
                            i
                                ? T.createElement(
                                      "span",
                                      {
                                          className:
                                              "react-datepicker__month-year-option--selected",
                                      },
                                      "✓"
                                  )
                                : "",
                            Se(a, r.props.dateFormat, r.props.locale)
                        );
                    });
                }),
                (r.onChange = function (a) {
                    return r.props.onChange(a);
                }),
                (r.handleClickOutside = function () {
                    r.props.onCancel();
                }),
                (r.state = {
                    monthYearsList: t_(r.props.minDate, r.props.maxDate),
                }),
                r
            );
        }
        return (
            (t.prototype.render = function () {
                var n = Be({
                    "react-datepicker__month-year-dropdown": !0,
                    "react-datepicker__month-year-dropdown--scrollable":
                        this.props.scrollableMonthYearDropdown,
                });
                return T.createElement(
                    "div",
                    { className: n },
                    this.renderOptions()
                );
            }),
            t
        );
    })(x.Component),
    r_ = pl(n_),
    a_ = (function (e) {
        $e(t, e);
        function t() {
            var n = (e !== null && e.apply(this, arguments)) || this;
            return (
                (n.state = { dropdownVisible: !1 }),
                (n.renderSelectOptions = function () {
                    for (
                        var r = tr(n.props.minDate),
                            a = tr(n.props.maxDate),
                            o = [];
                        !ar(r, a);

                    ) {
                        var i = kc(r);
                        o.push(
                            T.createElement(
                                "option",
                                { key: i, value: i },
                                Se(r, n.props.dateFormat, n.props.locale)
                            )
                        ),
                            (r = Qt(r, 1));
                    }
                    return o;
                }),
                (n.onSelectChange = function (r) {
                    n.onChange(parseInt(r.target.value));
                }),
                (n.renderSelectMode = function () {
                    return T.createElement(
                        "select",
                        {
                            value: kc(tr(n.props.date)),
                            className: "react-datepicker__month-year-select",
                            onChange: n.onSelectChange,
                        },
                        n.renderSelectOptions()
                    );
                }),
                (n.renderReadView = function (r) {
                    var a = Se(
                        n.props.date,
                        n.props.dateFormat,
                        n.props.locale
                    );
                    return T.createElement(
                        "div",
                        {
                            key: "read",
                            style: { visibility: r ? "visible" : "hidden" },
                            className: "react-datepicker__month-year-read-view",
                            onClick: n.toggleDropdown,
                        },
                        T.createElement("span", {
                            className:
                                "react-datepicker__month-year-read-view--down-arrow",
                        }),
                        T.createElement(
                            "span",
                            {
                                className:
                                    "react-datepicker__month-year-read-view--selected-month-year",
                            },
                            a
                        )
                    );
                }),
                (n.renderDropdown = function () {
                    return T.createElement(
                        r_,
                        le({ key: "dropdown" }, n.props, {
                            onChange: n.onChange,
                            onCancel: n.toggleDropdown,
                        })
                    );
                }),
                (n.renderScrollMode = function () {
                    var r = n.state.dropdownVisible,
                        a = [n.renderReadView(!r)];
                    return r && a.unshift(n.renderDropdown()), a;
                }),
                (n.onChange = function (r) {
                    n.toggleDropdown();
                    var a = me(r);
                    (en(n.props.date, a) && ot(n.props.date, a)) ||
                        n.props.onChange(a);
                }),
                (n.toggleDropdown = function () {
                    return n.setState({
                        dropdownVisible: !n.state.dropdownVisible,
                    });
                }),
                n
            );
        }
        return (
            (t.prototype.render = function () {
                var n;
                switch (this.props.dropdownMode) {
                    case "scroll":
                        n = this.renderScrollMode();
                        break;
                    case "select":
                        n = this.renderSelectMode();
                        break;
                }
                return T.createElement(
                    "div",
                    {
                        className:
                            "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(
                                this.props.dropdownMode
                            ),
                    },
                    n
                );
            }),
            t
        );
    })(x.Component),
    o_ = (function (e) {
        $e(t, e);
        function t() {
            var n = (e !== null && e.apply(this, arguments)) || this;
            return (
                (n.state = { height: null }),
                (n.scrollToTheSelectedTime = function () {
                    requestAnimationFrame(function () {
                        var r, a, o;
                        n.list &&
                            (n.list.scrollTop =
                                (o =
                                    n.centerLi &&
                                    t.calcCenterPosition(
                                        n.props.monthRef
                                            ? n.props.monthRef.clientHeight -
                                                  ((a =
                                                      (r = n.header) === null ||
                                                      r === void 0
                                                          ? void 0
                                                          : r.clientHeight) !==
                                                      null && a !== void 0
                                                      ? a
                                                      : 0)
                                            : n.list.clientHeight,
                                        n.centerLi
                                    )) !== null && o !== void 0
                                    ? o
                                    : 0);
                    });
                }),
                (n.handleClick = function (r) {
                    var a, o;
                    ((n.props.minTime || n.props.maxTime) && Dh(r, n.props)) ||
                        ((n.props.excludeTimes ||
                            n.props.includeTimes ||
                            n.props.filterTime) &&
                            xh(r, n.props)) ||
                        (o = (a = n.props).onChange) === null ||
                        o === void 0 ||
                        o.call(a, r);
                }),
                (n.isSelectedTime = function (r) {
                    return n.props.selected && V2(n.props.selected, r);
                }),
                (n.isDisabledTime = function (r) {
                    return (
                        ((n.props.minTime || n.props.maxTime) &&
                            Dh(r, n.props)) ||
                        ((n.props.excludeTimes ||
                            n.props.includeTimes ||
                            n.props.filterTime) &&
                            xh(r, n.props))
                    );
                }),
                (n.liClasses = function (r) {
                    var a,
                        o = [
                            "react-datepicker__time-list-item",
                            n.props.timeClassName
                                ? n.props.timeClassName(r)
                                : void 0,
                        ];
                    return (
                        n.isSelectedTime(r) &&
                            o.push(
                                "react-datepicker__time-list-item--selected"
                            ),
                        n.isDisabledTime(r) &&
                            o.push(
                                "react-datepicker__time-list-item--disabled"
                            ),
                        n.props.injectTimes &&
                            (cn(r) * 3600 + dn(r) * 60 + Dn(r)) %
                                (((a = n.props.intervals) !== null &&
                                a !== void 0
                                    ? a
                                    : t.defaultProps.intervals) *
                                    60) !==
                                0 &&
                            o.push(
                                "react-datepicker__time-list-item--injected"
                            ),
                        o.join(" ")
                    );
                }),
                (n.handleOnKeyDown = function (r, a) {
                    var o, i;
                    r.key === W.Space &&
                        (r.preventDefault(), (r.key = W.Enter)),
                        (r.key === W.ArrowUp || r.key === W.ArrowLeft) &&
                            r.target instanceof HTMLElement &&
                            r.target.previousSibling &&
                            (r.preventDefault(),
                            r.target.previousSibling instanceof HTMLElement &&
                                r.target.previousSibling.focus()),
                        (r.key === W.ArrowDown || r.key === W.ArrowRight) &&
                            r.target instanceof HTMLElement &&
                            r.target.nextSibling &&
                            (r.preventDefault(),
                            r.target.nextSibling instanceof HTMLElement &&
                                r.target.nextSibling.focus()),
                        r.key === W.Enter && n.handleClick(a),
                        (i = (o = n.props).handleOnKeyDown) === null ||
                            i === void 0 ||
                            i.call(o, r);
                }),
                (n.renderTimes = function () {
                    for (
                        var r,
                            a = [],
                            o = n.props.format ? n.props.format : "p",
                            i =
                                (r = n.props.intervals) !== null && r !== void 0
                                    ? r
                                    : t.defaultProps.intervals,
                            s = n.props.selected || n.props.openToDate || me(),
                            l = Xi(s),
                            u =
                                n.props.injectTimes &&
                                n.props.injectTimes.sort(function (k, h) {
                                    return k.getTime() - h.getTime();
                                }),
                            c = 60 * B2(s),
                            d = c / i,
                            p = 0;
                        p < d;
                        p++
                    ) {
                        var v = xc(l, p * i);
                        if ((a.push(v), u)) {
                            var g = H2(l, v, p, i, u);
                            a = a.concat(g);
                        }
                    }
                    var w = a.reduce(function (k, h) {
                        return h.getTime() <= s.getTime() ? h : k;
                    }, a[0]);
                    return a.map(function (k) {
                        return T.createElement(
                            "li",
                            {
                                key: k.valueOf(),
                                onClick: n.handleClick.bind(n, k),
                                className: n.liClasses(k),
                                ref: function (h) {
                                    k === w && (n.centerLi = h);
                                },
                                onKeyDown: function (h) {
                                    n.handleOnKeyDown(h, k);
                                },
                                tabIndex: k === w ? 0 : -1,
                                role: "option",
                                "aria-selected": n.isSelectedTime(k)
                                    ? "true"
                                    : void 0,
                                "aria-disabled": n.isDisabledTime(k)
                                    ? "true"
                                    : void 0,
                            },
                            Se(k, o, n.props.locale)
                        );
                    });
                }),
                n
            );
        }
        return (
            Object.defineProperty(t, "defaultProps", {
                get: function () {
                    return {
                        intervals: 30,
                        todayButton: null,
                        timeCaption: "Time",
                    };
                },
                enumerable: !1,
                configurable: !0,
            }),
            (t.prototype.componentDidMount = function () {
                this.scrollToTheSelectedTime(),
                    this.props.monthRef &&
                        this.header &&
                        this.setState({
                            height:
                                this.props.monthRef.clientHeight -
                                this.header.clientHeight,
                        });
            }),
            (t.prototype.render = function () {
                var n = this,
                    r,
                    a = this.state.height;
                return T.createElement(
                    "div",
                    {
                        className: "react-datepicker__time-container ".concat(
                            (
                                (r = this.props.todayButton) !== null &&
                                r !== void 0
                                    ? r
                                    : t.defaultProps.todayButton
                            )
                                ? "react-datepicker__time-container--with-today-button"
                                : ""
                        ),
                    },
                    T.createElement(
                        "div",
                        {
                            className:
                                "react-datepicker__header react-datepicker__header--time ".concat(
                                    this.props.showTimeSelectOnly
                                        ? "react-datepicker__header--time--only"
                                        : ""
                                ),
                            ref: function (o) {
                                n.header = o;
                            },
                        },
                        T.createElement(
                            "div",
                            { className: "react-datepicker-time__header" },
                            this.props.timeCaption
                        )
                    ),
                    T.createElement(
                        "div",
                        { className: "react-datepicker__time" },
                        T.createElement(
                            "div",
                            { className: "react-datepicker__time-box" },
                            T.createElement(
                                "ul",
                                {
                                    className: "react-datepicker__time-list",
                                    ref: function (o) {
                                        n.list = o;
                                    },
                                    style: a ? { height: a } : {},
                                    role: "listbox",
                                    "aria-label": this.props.timeCaption,
                                },
                                this.renderTimes()
                            )
                        )
                    )
                );
            }),
            (t.calcCenterPosition = function (n, r) {
                return r.offsetTop - (n / 2 - r.clientHeight / 2);
            }),
            t
        );
    })(x.Component),
    Rh = 3,
    i_ = (function (e) {
        $e(t, e);
        function t(n) {
            var r = e.call(this, n) || this;
            return (
                (r.YEAR_REFS = sn([], Array(r.props.yearItemNumber), !0).map(
                    function () {
                        return x.createRef();
                    }
                )),
                (r.isDisabled = function (a) {
                    return Hn(a, {
                        minDate: r.props.minDate,
                        maxDate: r.props.maxDate,
                        excludeDates: r.props.excludeDates,
                        includeDates: r.props.includeDates,
                        filterDate: r.props.filterDate,
                    });
                }),
                (r.isExcluded = function (a) {
                    return qd(a, { excludeDates: r.props.excludeDates });
                }),
                (r.selectingDate = function () {
                    var a;
                    return (a = r.props.selectingDate) !== null && a !== void 0
                        ? a
                        : r.props.preSelection;
                }),
                (r.updateFocusOnPaginate = function (a) {
                    var o = function () {
                        var i, s;
                        (s =
                            (i = r.YEAR_REFS[a]) === null || i === void 0
                                ? void 0
                                : i.current) === null ||
                            s === void 0 ||
                            s.focus();
                    };
                    window.requestAnimationFrame(o);
                }),
                (r.handleYearClick = function (a, o) {
                    r.props.onDayClick && r.props.onDayClick(a, o);
                }),
                (r.handleYearNavigation = function (a, o) {
                    var i,
                        s,
                        l,
                        u,
                        c = r.props,
                        d = c.date,
                        p = c.yearItemNumber;
                    if (!(d === void 0 || p === void 0)) {
                        var v = Bn(d, p).startPeriod;
                        r.isDisabled(o) ||
                            r.isExcluded(o) ||
                            ((s = (i = r.props).setPreSelection) === null ||
                                s === void 0 ||
                                s.call(i, o),
                            a - v < 0
                                ? r.updateFocusOnPaginate(p - (v - a))
                                : a - v >= p
                                ? r.updateFocusOnPaginate(Math.abs(p - (a - v)))
                                : (u =
                                      (l = r.YEAR_REFS[a - v]) === null ||
                                      l === void 0
                                          ? void 0
                                          : l.current) === null ||
                                  u === void 0 ||
                                  u.focus());
                    }
                }),
                (r.isSameDay = function (a, o) {
                    return se(a, o);
                }),
                (r.isCurrentYear = function (a) {
                    return a === re(me());
                }),
                (r.isRangeStart = function (a) {
                    return (
                        r.props.startDate &&
                        r.props.endDate &&
                        en(Zt(me(), a), r.props.startDate)
                    );
                }),
                (r.isRangeEnd = function (a) {
                    return (
                        r.props.startDate &&
                        r.props.endDate &&
                        en(Zt(me(), a), r.props.endDate)
                    );
                }),
                (r.isInRange = function (a) {
                    return Pi(a, r.props.startDate, r.props.endDate);
                }),
                (r.isInSelectingRange = function (a) {
                    var o = r.props,
                        i = o.selectsStart,
                        s = o.selectsEnd,
                        l = o.selectsRange,
                        u = o.startDate,
                        c = o.endDate;
                    return !(i || s || l) || !r.selectingDate()
                        ? !1
                        : i && c
                        ? Pi(a, r.selectingDate(), c)
                        : (s && u) || (l && u && !c)
                        ? Pi(a, u, r.selectingDate())
                        : !1;
                }),
                (r.isSelectingRangeStart = function (a) {
                    var o;
                    if (!r.isInSelectingRange(a)) return !1;
                    var i = r.props,
                        s = i.startDate,
                        l = i.selectsStart,
                        u = Zt(me(), a);
                    return l
                        ? en(
                              u,
                              (o = r.selectingDate()) !== null && o !== void 0
                                  ? o
                                  : null
                          )
                        : en(u, s ?? null);
                }),
                (r.isSelectingRangeEnd = function (a) {
                    var o;
                    if (!r.isInSelectingRange(a)) return !1;
                    var i = r.props,
                        s = i.endDate,
                        l = i.selectsEnd,
                        u = i.selectsRange,
                        c = Zt(me(), a);
                    return l || u
                        ? en(
                              c,
                              (o = r.selectingDate()) !== null && o !== void 0
                                  ? o
                                  : null
                          )
                        : en(c, s ?? null);
                }),
                (r.isKeyboardSelected = function (a) {
                    if (
                        !(
                            r.props.date === void 0 ||
                            r.props.selected == null ||
                            r.props.preSelection == null
                        )
                    ) {
                        var o = r.props,
                            i = o.minDate,
                            s = o.maxDate,
                            l = o.excludeDates,
                            u = o.includeDates,
                            c = o.filterDate,
                            d = io(Zt(r.props.date, a)),
                            p = (i || s || l || u || c) && bc(a, r.props);
                        return (
                            !r.props.disabledKeyboardNavigation &&
                            !r.props.inline &&
                            !se(d, io(r.props.selected)) &&
                            se(d, io(r.props.preSelection)) &&
                            !p
                        );
                    }
                }),
                (r.onYearClick = function (a, o) {
                    var i = r.props.date;
                    i !== void 0 && r.handleYearClick(io(Zt(i, o)), a);
                }),
                (r.onYearKeyDown = function (a, o) {
                    var i,
                        s,
                        l = a.key,
                        u = r.props,
                        c = u.date,
                        d = u.yearItemNumber,
                        p = u.handleOnKeyDown;
                    if (
                        (l !== W.Tab && a.preventDefault(),
                        !r.props.disabledKeyboardNavigation)
                    )
                        switch (l) {
                            case W.Enter:
                                if (r.props.selected == null) break;
                                r.onYearClick(a, o),
                                    (s = (i = r.props).setPreSelection) ===
                                        null ||
                                        s === void 0 ||
                                        s.call(i, r.props.selected);
                                break;
                            case W.ArrowRight:
                                if (r.props.preSelection == null) break;
                                r.handleYearNavigation(
                                    o + 1,
                                    wn(r.props.preSelection, 1)
                                );
                                break;
                            case W.ArrowLeft:
                                if (r.props.preSelection == null) break;
                                r.handleYearNavigation(
                                    o - 1,
                                    Na(r.props.preSelection, 1)
                                );
                                break;
                            case W.ArrowUp: {
                                if (
                                    c === void 0 ||
                                    d === void 0 ||
                                    r.props.preSelection == null
                                )
                                    break;
                                var v = Bn(c, d).startPeriod,
                                    g = Rh,
                                    w = o - g;
                                if (w < v) {
                                    var k = d % g;
                                    o >= v && o < v + k ? (g = k) : (g += k),
                                        (w = o - g);
                                }
                                r.handleYearNavigation(
                                    w,
                                    Na(r.props.preSelection, g)
                                );
                                break;
                            }
                            case W.ArrowDown: {
                                if (
                                    c === void 0 ||
                                    d === void 0 ||
                                    r.props.preSelection == null
                                )
                                    break;
                                var h = Bn(c, d).endPeriod,
                                    g = Rh,
                                    w = o + g;
                                if (w > h) {
                                    var k = d % g;
                                    o <= h && o > h - k ? (g = k) : (g += k),
                                        (w = o + g);
                                }
                                r.handleYearNavigation(
                                    w,
                                    wn(r.props.preSelection, g)
                                );
                                break;
                            }
                        }
                    p && p(a);
                }),
                (r.getYearClassNames = function (a) {
                    var o = r.props,
                        i = o.date,
                        s = o.minDate,
                        l = o.maxDate,
                        u = o.selected,
                        c = o.excludeDates,
                        d = o.includeDates,
                        p = o.filterDate,
                        v = o.yearClassName;
                    return Be(
                        "react-datepicker__year-text",
                        "react-datepicker__year-".concat(a),
                        i ? (v == null ? void 0 : v(Zt(i, a))) : void 0,
                        {
                            "react-datepicker__year-text--selected": u
                                ? a === re(u)
                                : void 0,
                            "react-datepicker__year-text--disabled":
                                (s || l || c || d || p) && bc(a, r.props),
                            "react-datepicker__year-text--keyboard-selected":
                                r.isKeyboardSelected(a),
                            "react-datepicker__year-text--range-start":
                                r.isRangeStart(a),
                            "react-datepicker__year-text--range-end":
                                r.isRangeEnd(a),
                            "react-datepicker__year-text--in-range":
                                r.isInRange(a),
                            "react-datepicker__year-text--in-selecting-range":
                                r.isInSelectingRange(a),
                            "react-datepicker__year-text--selecting-range-start":
                                r.isSelectingRangeStart(a),
                            "react-datepicker__year-text--selecting-range-end":
                                r.isSelectingRangeEnd(a),
                            "react-datepicker__year-text--today":
                                r.isCurrentYear(a),
                        }
                    );
                }),
                (r.getYearTabIndex = function (a) {
                    if (
                        r.props.disabledKeyboardNavigation ||
                        r.props.preSelection == null
                    )
                        return "-1";
                    var o = re(r.props.preSelection);
                    return a === o ? "0" : "-1";
                }),
                (r.getYearContainerClassNames = function () {
                    var a = r.props,
                        o = a.selectingDate,
                        i = a.selectsStart,
                        s = a.selectsEnd,
                        l = a.selectsRange;
                    return Be("react-datepicker__year", {
                        "react-datepicker__year--selecting-range":
                            o && (i || s || l),
                    });
                }),
                (r.getYearContent = function (a) {
                    return r.props.renderYearContent
                        ? r.props.renderYearContent(a)
                        : a;
                }),
                r
            );
        }
        return (
            (t.prototype.render = function () {
                var n = this,
                    r = [],
                    a = this.props,
                    o = a.date,
                    i = a.yearItemNumber,
                    s = a.onYearMouseEnter,
                    l = a.onYearMouseLeave;
                if (o === void 0) return null;
                for (
                    var u = Bn(o, i),
                        c = u.startPeriod,
                        d = u.endPeriod,
                        p = function (w) {
                            r.push(
                                T.createElement(
                                    "div",
                                    {
                                        ref: v.YEAR_REFS[w - c],
                                        onClick: function (k) {
                                            n.onYearClick(k, w);
                                        },
                                        onKeyDown: function (k) {
                                            Cy(k) &&
                                                (k.preventDefault(),
                                                (k.key = W.Enter)),
                                                n.onYearKeyDown(k, w);
                                        },
                                        tabIndex: Number(v.getYearTabIndex(w)),
                                        className: v.getYearClassNames(w),
                                        onMouseEnter: v.props.usePointerEvent
                                            ? void 0
                                            : function (k) {
                                                  return s(k, w);
                                              },
                                        onPointerEnter: v.props.usePointerEvent
                                            ? function (k) {
                                                  return s(k, w);
                                              }
                                            : void 0,
                                        onMouseLeave: v.props.usePointerEvent
                                            ? void 0
                                            : function (k) {
                                                  return l(k, w);
                                              },
                                        onPointerLeave: v.props.usePointerEvent
                                            ? function (k) {
                                                  return l(k, w);
                                              }
                                            : void 0,
                                        key: w,
                                        "aria-current": v.isCurrentYear(w)
                                            ? "date"
                                            : void 0,
                                    },
                                    v.getYearContent(w)
                                )
                            );
                        },
                        v = this,
                        g = c;
                    g <= d;
                    g++
                )
                    p(g);
                return T.createElement(
                    "div",
                    { className: this.getYearContainerClassNames() },
                    T.createElement(
                        "div",
                        {
                            className: "react-datepicker__year-wrapper",
                            onMouseLeave: this.props.usePointerEvent
                                ? void 0
                                : this.props.clearSelectingDate,
                            onPointerLeave: this.props.usePointerEvent
                                ? this.props.clearSelectingDate
                                : void 0,
                        },
                        r
                    )
                );
            }),
            t
        );
    })(x.Component);
function s_(e, t, n, r) {
    for (var a = [], o = 0; o < 2 * t + 1; o++) {
        var i = e + t - o,
            s = !0;
        n && (s = re(n) <= i), r && s && (s = re(r) >= i), s && a.push(i);
    }
    return a;
}
var l_ = (function (e) {
        $e(t, e);
        function t(n) {
            var r = e.call(this, n) || this;
            (r.renderOptions = function () {
                var s = r.props.year,
                    l = r.state.yearsList.map(function (d) {
                        return T.createElement(
                            "div",
                            {
                                className:
                                    s === d
                                        ? "react-datepicker__year-option react-datepicker__year-option--selected_year"
                                        : "react-datepicker__year-option",
                                key: d,
                                onClick: r.onChange.bind(r, d),
                                "aria-selected": s === d ? "true" : void 0,
                            },
                            s === d
                                ? T.createElement(
                                      "span",
                                      {
                                          className:
                                              "react-datepicker__year-option--selected",
                                      },
                                      "✓"
                                  )
                                : "",
                            d
                        );
                    }),
                    u = r.props.minDate ? re(r.props.minDate) : null,
                    c = r.props.maxDate ? re(r.props.maxDate) : null;
                return (
                    (!c ||
                        !r.state.yearsList.find(function (d) {
                            return d === c;
                        })) &&
                        l.unshift(
                            T.createElement(
                                "div",
                                {
                                    className: "react-datepicker__year-option",
                                    key: "upcoming",
                                    onClick: r.incrementYears,
                                },
                                T.createElement("a", {
                                    className:
                                        "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming",
                                })
                            )
                        ),
                    (!u ||
                        !r.state.yearsList.find(function (d) {
                            return d === u;
                        })) &&
                        l.push(
                            T.createElement(
                                "div",
                                {
                                    className: "react-datepicker__year-option",
                                    key: "previous",
                                    onClick: r.decrementYears,
                                },
                                T.createElement("a", {
                                    className:
                                        "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous",
                                })
                            )
                        ),
                    l
                );
            }),
                (r.onChange = function (s) {
                    r.props.onChange(s);
                }),
                (r.handleClickOutside = function () {
                    r.props.onCancel();
                }),
                (r.shiftYears = function (s) {
                    var l = r.state.yearsList.map(function (u) {
                        return u + s;
                    });
                    r.setState({ yearsList: l });
                }),
                (r.incrementYears = function () {
                    return r.shiftYears(1);
                }),
                (r.decrementYears = function () {
                    return r.shiftYears(-1);
                });
            var a = n.yearDropdownItemNumber,
                o = n.scrollableYearDropdown,
                i = a || (o ? 10 : 5);
            return (
                (r.state = {
                    yearsList: s_(
                        r.props.year,
                        i,
                        r.props.minDate,
                        r.props.maxDate
                    ),
                }),
                (r.dropdownRef = x.createRef()),
                r
            );
        }
        return (
            (t.prototype.componentDidMount = function () {
                var n = this.dropdownRef.current;
                if (n) {
                    var r = n.children ? Array.from(n.children) : null,
                        a = r
                            ? r.find(function (o) {
                                  return o.ariaSelected;
                              })
                            : null;
                    n.scrollTop =
                        a && a instanceof HTMLElement
                            ? a.offsetTop +
                              (a.clientHeight - n.clientHeight) / 2
                            : (n.scrollHeight - n.clientHeight) / 2;
                }
            }),
            (t.prototype.render = function () {
                var n = Be({
                    "react-datepicker__year-dropdown": !0,
                    "react-datepicker__year-dropdown--scrollable":
                        this.props.scrollableYearDropdown,
                });
                return T.createElement(
                    "div",
                    { className: n, ref: this.dropdownRef },
                    this.renderOptions()
                );
            }),
            t
        );
    })(x.Component),
    u_ = pl(l_),
    c_ = (function (e) {
        $e(t, e);
        function t() {
            var n = (e !== null && e.apply(this, arguments)) || this;
            return (
                (n.state = { dropdownVisible: !1 }),
                (n.renderSelectOptions = function () {
                    for (
                        var r = n.props.minDate ? re(n.props.minDate) : 1900,
                            a = n.props.maxDate ? re(n.props.maxDate) : 2100,
                            o = [],
                            i = r;
                        i <= a;
                        i++
                    )
                        o.push(
                            T.createElement("option", { key: i, value: i }, i)
                        );
                    return o;
                }),
                (n.onSelectChange = function (r) {
                    n.onChange(parseInt(r.target.value));
                }),
                (n.renderSelectMode = function () {
                    return T.createElement(
                        "select",
                        {
                            value: n.props.year,
                            className: "react-datepicker__year-select",
                            onChange: n.onSelectChange,
                        },
                        n.renderSelectOptions()
                    );
                }),
                (n.renderReadView = function (r) {
                    return T.createElement(
                        "div",
                        {
                            key: "read",
                            style: { visibility: r ? "visible" : "hidden" },
                            className: "react-datepicker__year-read-view",
                            onClick: function (a) {
                                return n.toggleDropdown(a);
                            },
                        },
                        T.createElement("span", {
                            className:
                                "react-datepicker__year-read-view--down-arrow",
                        }),
                        T.createElement(
                            "span",
                            {
                                className:
                                    "react-datepicker__year-read-view--selected-year",
                            },
                            n.props.year
                        )
                    );
                }),
                (n.renderDropdown = function () {
                    return T.createElement(
                        u_,
                        le({ key: "dropdown" }, n.props, {
                            onChange: n.onChange,
                            onCancel: n.toggleDropdown,
                        })
                    );
                }),
                (n.renderScrollMode = function () {
                    var r = n.state.dropdownVisible,
                        a = [n.renderReadView(!r)];
                    return r && a.unshift(n.renderDropdown()), a;
                }),
                (n.onChange = function (r) {
                    n.toggleDropdown(),
                        r !== n.props.year && n.props.onChange(r);
                }),
                (n.toggleDropdown = function (r) {
                    n.setState(
                        { dropdownVisible: !n.state.dropdownVisible },
                        function () {
                            n.props.adjustDateOnChange &&
                                n.handleYearChange(n.props.date, r);
                        }
                    );
                }),
                (n.handleYearChange = function (r, a) {
                    n.onSelect(r, a), n.setOpen();
                }),
                (n.onSelect = function (r, a) {
                    n.props.onSelect && n.props.onSelect(r, a);
                }),
                (n.setOpen = function () {
                    n.props.setOpen && n.props.setOpen(!0);
                }),
                n
            );
        }
        return (
            (t.prototype.render = function () {
                var n;
                switch (this.props.dropdownMode) {
                    case "scroll":
                        n = this.renderScrollMode();
                        break;
                    case "select":
                        n = this.renderSelectMode();
                        break;
                }
                return T.createElement(
                    "div",
                    {
                        className:
                            "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(
                                this.props.dropdownMode
                            ),
                    },
                    n
                );
            }),
            t
        );
    })(x.Component),
    d_ = [
        "react-datepicker__year-select",
        "react-datepicker__month-select",
        "react-datepicker__month-year-select",
    ],
    f_ = function (e) {
        var t = (e.className || "").split(/\s+/);
        return d_.some(function (n) {
            return t.indexOf(n) >= 0;
        });
    },
    p_ = (function (e) {
        $e(t, e);
        function t(n) {
            var r = e.call(this, n) || this;
            return (
                (r.monthContainer = void 0),
                (r.handleClickOutside = function (a) {
                    r.props.onClickOutside(a);
                }),
                (r.setClickOutsideRef = function () {
                    return r.containerRef.current;
                }),
                (r.handleDropdownFocus = function (a) {
                    var o, i;
                    f_(a.target) &&
                        ((i = (o = r.props).onDropdownFocus) === null ||
                            i === void 0 ||
                            i.call(o, a));
                }),
                (r.getDateInView = function () {
                    var a = r.props,
                        o = a.preSelection,
                        i = a.selected,
                        s = a.openToDate,
                        l = Sy(r.props),
                        u = Ey(r.props),
                        c = me(),
                        d = s || i || o;
                    return d || (l && Ir(c, l) ? l : u && ar(c, u) ? u : c);
                }),
                (r.increaseMonth = function () {
                    r.setState(
                        function (a) {
                            var o = a.date;
                            return { date: Qt(o, 1) };
                        },
                        function () {
                            return r.handleMonthChange(r.state.date);
                        }
                    );
                }),
                (r.decreaseMonth = function () {
                    r.setState(
                        function (a) {
                            var o = a.date;
                            return { date: ba(o, 1) };
                        },
                        function () {
                            return r.handleMonthChange(r.state.date);
                        }
                    );
                }),
                (r.handleDayClick = function (a, o, i) {
                    r.props.onSelect(a, o, i),
                        r.props.setPreSelection && r.props.setPreSelection(a);
                }),
                (r.handleDayMouseEnter = function (a) {
                    r.setState({ selectingDate: a }),
                        r.props.onDayMouseEnter && r.props.onDayMouseEnter(a);
                }),
                (r.handleMonthMouseLeave = function () {
                    r.setState({ selectingDate: void 0 }),
                        r.props.onMonthMouseLeave &&
                            r.props.onMonthMouseLeave();
                }),
                (r.handleYearMouseEnter = function (a, o) {
                    r.setState({ selectingDate: Zt(me(), o) }),
                        r.props.onYearMouseEnter &&
                            r.props.onYearMouseEnter(a, o);
                }),
                (r.handleYearMouseLeave = function (a, o) {
                    r.props.onYearMouseLeave && r.props.onYearMouseLeave(a, o);
                }),
                (r.handleYearChange = function (a) {
                    r.props.onYearChange &&
                        (r.props.onYearChange(a),
                        r.setState({ isRenderAriaLiveMessage: !0 })),
                        r.props.adjustDateOnChange &&
                            (r.props.onSelect && r.props.onSelect(a),
                            r.props.setOpen && r.props.setOpen(!0)),
                        r.props.setPreSelection && r.props.setPreSelection(a);
                }),
                (r.handleMonthChange = function (a) {
                    r.handleCustomMonthChange(a),
                        r.props.adjustDateOnChange &&
                            (r.props.onSelect && r.props.onSelect(a),
                            r.props.setOpen && r.props.setOpen(!0)),
                        r.props.setPreSelection && r.props.setPreSelection(a);
                }),
                (r.handleCustomMonthChange = function (a) {
                    r.props.onMonthChange &&
                        (r.props.onMonthChange(a),
                        r.setState({ isRenderAriaLiveMessage: !0 }));
                }),
                (r.handleMonthYearChange = function (a) {
                    r.handleYearChange(a), r.handleMonthChange(a);
                }),
                (r.changeYear = function (a) {
                    r.setState(
                        function (o) {
                            var i = o.date;
                            return { date: Zt(i, Number(a)) };
                        },
                        function () {
                            return r.handleYearChange(r.state.date);
                        }
                    );
                }),
                (r.changeMonth = function (a) {
                    r.setState(
                        function (o) {
                            var i = o.date;
                            return { date: yt(i, Number(a)) };
                        },
                        function () {
                            return r.handleMonthChange(r.state.date);
                        }
                    );
                }),
                (r.changeMonthYear = function (a) {
                    r.setState(
                        function (o) {
                            var i = o.date;
                            return { date: Zt(yt(i, it(a)), re(a)) };
                        },
                        function () {
                            return r.handleMonthYearChange(r.state.date);
                        }
                    );
                }),
                (r.header = function (a) {
                    a === void 0 && (a = r.state.date);
                    var o = er(a, r.props.locale, r.props.calendarStartDay),
                        i = [];
                    return (
                        r.props.showWeekNumbers &&
                            i.push(
                                T.createElement(
                                    "div",
                                    {
                                        key: "W",
                                        className: "react-datepicker__day-name",
                                    },
                                    r.props.weekLabel || "#"
                                )
                            ),
                        i.concat(
                            [0, 1, 2, 3, 4, 5, 6].map(function (s) {
                                var l = dr(o, s),
                                    u = r.formatWeekday(l, r.props.locale),
                                    c = r.props.weekDayClassName
                                        ? r.props.weekDayClassName(l)
                                        : void 0;
                                return T.createElement(
                                    "div",
                                    {
                                        key: s,
                                        "aria-label": Se(
                                            l,
                                            "EEEE",
                                            r.props.locale
                                        ),
                                        className: Be(
                                            "react-datepicker__day-name",
                                            c
                                        ),
                                    },
                                    u
                                );
                            })
                        )
                    );
                }),
                (r.formatWeekday = function (a, o) {
                    return r.props.formatWeekDay
                        ? R2(a, r.props.formatWeekDay, o)
                        : r.props.useWeekdaysShort
                        ? L2(a, o)
                        : O2(a, o);
                }),
                (r.decreaseYear = function () {
                    r.setState(
                        function (a) {
                            var o,
                                i = a.date;
                            return {
                                date: Na(
                                    i,
                                    r.props.showYearPicker
                                        ? (o = r.props.yearItemNumber) !==
                                              null && o !== void 0
                                            ? o
                                            : t.defaultProps.yearItemNumber
                                        : 1
                                ),
                            };
                        },
                        function () {
                            return r.handleYearChange(r.state.date);
                        }
                    );
                }),
                (r.clearSelectingDate = function () {
                    r.setState({ selectingDate: void 0 });
                }),
                (r.renderPreviousButton = function () {
                    var a;
                    if (!r.props.renderCustomHeader) {
                        var o;
                        switch (!0) {
                            case r.props.showMonthYearPicker:
                                o = Eh(r.state.date, r.props);
                                break;
                            case r.props.showYearPicker:
                                o = W2(r.state.date, r.props);
                                break;
                            case r.props.showQuarterYearPicker:
                                o = F2(r.state.date, r.props);
                                break;
                            default:
                                o = kh(r.state.date, r.props);
                                break;
                        }
                        if (
                            !(
                                (!((a = r.props.forceShowMonthNavigation) !==
                                    null && a !== void 0
                                    ? a
                                    : t.defaultProps
                                          .forceShowMonthNavigation) &&
                                    !r.props.showDisabledMonthNavigation &&
                                    o) ||
                                r.props.showTimeSelectOnly
                            )
                        ) {
                            var i = [
                                    "react-datepicker__navigation-icon",
                                    "react-datepicker__navigation-icon--previous",
                                ],
                                s = [
                                    "react-datepicker__navigation",
                                    "react-datepicker__navigation--previous",
                                ],
                                l = r.decreaseMonth;
                            (r.props.showMonthYearPicker ||
                                r.props.showQuarterYearPicker ||
                                r.props.showYearPicker) &&
                                (l = r.decreaseYear),
                                o &&
                                    r.props.showDisabledMonthNavigation &&
                                    (s.push(
                                        "react-datepicker__navigation--previous--disabled"
                                    ),
                                    (l = void 0));
                            var u =
                                    r.props.showMonthYearPicker ||
                                    r.props.showQuarterYearPicker ||
                                    r.props.showYearPicker,
                                c = r.props,
                                d = c.previousMonthButtonLabel,
                                p =
                                    d === void 0
                                        ? t.defaultProps
                                              .previousMonthButtonLabel
                                        : d,
                                v = c.previousYearButtonLabel,
                                g =
                                    v === void 0
                                        ? t.defaultProps.previousYearButtonLabel
                                        : v,
                                w = r.props,
                                k = w.previousMonthAriaLabel,
                                h =
                                    k === void 0
                                        ? typeof p == "string"
                                            ? p
                                            : "Previous Month"
                                        : k,
                                m = w.previousYearAriaLabel,
                                y =
                                    m === void 0
                                        ? typeof g == "string"
                                            ? g
                                            : "Previous Year"
                                        : m;
                            return T.createElement(
                                "button",
                                {
                                    type: "button",
                                    className: s.join(" "),
                                    onClick: l,
                                    onKeyDown: r.props.handleOnKeyDown,
                                    "aria-label": u ? y : h,
                                },
                                T.createElement(
                                    "span",
                                    { className: i.join(" ") },
                                    u ? g : p
                                )
                            );
                        }
                    }
                }),
                (r.increaseYear = function () {
                    r.setState(
                        function (a) {
                            var o,
                                i = a.date;
                            return {
                                date: wn(
                                    i,
                                    r.props.showYearPicker
                                        ? (o = r.props.yearItemNumber) !==
                                              null && o !== void 0
                                            ? o
                                            : t.defaultProps.yearItemNumber
                                        : 1
                                ),
                            };
                        },
                        function () {
                            return r.handleYearChange(r.state.date);
                        }
                    );
                }),
                (r.renderNextButton = function () {
                    var a;
                    if (!r.props.renderCustomHeader) {
                        var o;
                        switch (!0) {
                            case r.props.showMonthYearPicker:
                                o = Ch(r.state.date, r.props);
                                break;
                            case r.props.showYearPicker:
                                o = Y2(r.state.date, r.props);
                                break;
                            case r.props.showQuarterYearPicker:
                                o = A2(r.state.date, r.props);
                                break;
                            default:
                                o = Sh(r.state.date, r.props);
                                break;
                        }
                        if (
                            !(
                                (!((a = r.props.forceShowMonthNavigation) !==
                                    null && a !== void 0
                                    ? a
                                    : t.defaultProps
                                          .forceShowMonthNavigation) &&
                                    !r.props.showDisabledMonthNavigation &&
                                    o) ||
                                r.props.showTimeSelectOnly
                            )
                        ) {
                            var i = [
                                    "react-datepicker__navigation",
                                    "react-datepicker__navigation--next",
                                ],
                                s = [
                                    "react-datepicker__navigation-icon",
                                    "react-datepicker__navigation-icon--next",
                                ];
                            r.props.showTimeSelect &&
                                i.push(
                                    "react-datepicker__navigation--next--with-time"
                                ),
                                r.props.todayButton &&
                                    i.push(
                                        "react-datepicker__navigation--next--with-today-button"
                                    );
                            var l = r.increaseMonth;
                            (r.props.showMonthYearPicker ||
                                r.props.showQuarterYearPicker ||
                                r.props.showYearPicker) &&
                                (l = r.increaseYear),
                                o &&
                                    r.props.showDisabledMonthNavigation &&
                                    (i.push(
                                        "react-datepicker__navigation--next--disabled"
                                    ),
                                    (l = void 0));
                            var u =
                                    r.props.showMonthYearPicker ||
                                    r.props.showQuarterYearPicker ||
                                    r.props.showYearPicker,
                                c = r.props,
                                d = c.nextMonthButtonLabel,
                                p =
                                    d === void 0
                                        ? t.defaultProps.nextMonthButtonLabel
                                        : d,
                                v = c.nextYearButtonLabel,
                                g =
                                    v === void 0
                                        ? t.defaultProps.nextYearButtonLabel
                                        : v,
                                w = r.props,
                                k = w.nextMonthAriaLabel,
                                h =
                                    k === void 0
                                        ? typeof p == "string"
                                            ? p
                                            : "Next Month"
                                        : k,
                                m = w.nextYearAriaLabel,
                                y =
                                    m === void 0
                                        ? typeof g == "string"
                                            ? g
                                            : "Next Year"
                                        : m;
                            return T.createElement(
                                "button",
                                {
                                    type: "button",
                                    className: i.join(" "),
                                    onClick: l,
                                    onKeyDown: r.props.handleOnKeyDown,
                                    "aria-label": u ? y : h,
                                },
                                T.createElement(
                                    "span",
                                    { className: s.join(" ") },
                                    u ? g : p
                                )
                            );
                        }
                    }
                }),
                (r.renderCurrentMonth = function (a) {
                    a === void 0 && (a = r.state.date);
                    var o = ["react-datepicker__current-month"];
                    return (
                        r.props.showYearDropdown &&
                            o.push(
                                "react-datepicker__current-month--hasYearDropdown"
                            ),
                        r.props.showMonthDropdown &&
                            o.push(
                                "react-datepicker__current-month--hasMonthDropdown"
                            ),
                        r.props.showMonthYearDropdown &&
                            o.push(
                                "react-datepicker__current-month--hasMonthYearDropdown"
                            ),
                        T.createElement(
                            "h2",
                            { className: o.join(" ") },
                            Se(a, r.props.dateFormat, r.props.locale)
                        )
                    );
                }),
                (r.renderYearDropdown = function (a) {
                    if (
                        (a === void 0 && (a = !1),
                        !(!r.props.showYearDropdown || a))
                    )
                        return T.createElement(
                            c_,
                            le({}, t.defaultProps, r.props, {
                                date: r.state.date,
                                onChange: r.changeYear,
                                year: re(r.state.date),
                            })
                        );
                }),
                (r.renderMonthDropdown = function (a) {
                    if (
                        (a === void 0 && (a = !1),
                        !(!r.props.showMonthDropdown || a))
                    )
                        return T.createElement(
                            e_,
                            le({}, t.defaultProps, r.props, {
                                month: it(r.state.date),
                                onChange: r.changeMonth,
                            })
                        );
                }),
                (r.renderMonthYearDropdown = function (a) {
                    if (
                        (a === void 0 && (a = !1),
                        !(!r.props.showMonthYearDropdown || a))
                    )
                        return T.createElement(
                            a_,
                            le({}, t.defaultProps, r.props, {
                                date: r.state.date,
                                onChange: r.changeMonthYear,
                            })
                        );
                }),
                (r.handleTodayButtonClick = function (a) {
                    r.props.onSelect(gh(), a),
                        r.props.setPreSelection &&
                            r.props.setPreSelection(gh());
                }),
                (r.renderTodayButton = function () {
                    if (!(!r.props.todayButton || r.props.showTimeSelectOnly))
                        return T.createElement(
                            "div",
                            {
                                className: "react-datepicker__today-button",
                                onClick: r.handleTodayButtonClick,
                            },
                            r.props.todayButton
                        );
                }),
                (r.renderDefaultHeader = function (a) {
                    var o = a.monthDate,
                        i = a.i;
                    return T.createElement(
                        "div",
                        {
                            className: "react-datepicker__header ".concat(
                                r.props.showTimeSelect
                                    ? "react-datepicker__header--has-time-select"
                                    : ""
                            ),
                        },
                        r.renderCurrentMonth(o),
                        T.createElement(
                            "div",
                            {
                                className:
                                    "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(
                                        r.props.dropdownMode
                                    ),
                                onFocus: r.handleDropdownFocus,
                            },
                            r.renderMonthDropdown(i !== 0),
                            r.renderMonthYearDropdown(i !== 0),
                            r.renderYearDropdown(i !== 0)
                        ),
                        T.createElement(
                            "div",
                            { className: "react-datepicker__day-names" },
                            r.header(o)
                        )
                    );
                }),
                (r.renderCustomHeader = function (a) {
                    var o,
                        i,
                        s = a.monthDate,
                        l = a.i;
                    if (
                        (r.props.showTimeSelect && !r.state.monthContainer) ||
                        r.props.showTimeSelectOnly
                    )
                        return null;
                    var u = kh(r.state.date, r.props),
                        c = Sh(r.state.date, r.props),
                        d = Eh(r.state.date, r.props),
                        p = Ch(r.state.date, r.props),
                        v =
                            !r.props.showMonthYearPicker &&
                            !r.props.showQuarterYearPicker &&
                            !r.props.showYearPicker;
                    return T.createElement(
                        "div",
                        {
                            className:
                                "react-datepicker__header react-datepicker__header--custom",
                            onFocus: r.props.onDropdownFocus,
                        },
                        (i = (o = r.props).renderCustomHeader) === null ||
                            i === void 0
                            ? void 0
                            : i.call(
                                  o,
                                  le(le({}, r.state), {
                                      customHeaderCount: l,
                                      monthDate: s,
                                      changeMonth: r.changeMonth,
                                      changeYear: r.changeYear,
                                      decreaseMonth: r.decreaseMonth,
                                      increaseMonth: r.increaseMonth,
                                      decreaseYear: r.decreaseYear,
                                      increaseYear: r.increaseYear,
                                      prevMonthButtonDisabled: u,
                                      nextMonthButtonDisabled: c,
                                      prevYearButtonDisabled: d,
                                      nextYearButtonDisabled: p,
                                  })
                              ),
                        v &&
                            T.createElement(
                                "div",
                                { className: "react-datepicker__day-names" },
                                r.header(s)
                            )
                    );
                }),
                (r.renderYearHeader = function (a) {
                    var o = a.monthDate,
                        i = r.props,
                        s = i.showYearPicker,
                        l = i.yearItemNumber,
                        u = l === void 0 ? t.defaultProps.yearItemNumber : l,
                        c = Bn(o, u),
                        d = c.startPeriod,
                        p = c.endPeriod;
                    return T.createElement(
                        "div",
                        {
                            className:
                                "react-datepicker__header react-datepicker-year-header",
                        },
                        s ? "".concat(d, " - ").concat(p) : re(o)
                    );
                }),
                (r.renderHeader = function (a) {
                    var o = a.monthDate,
                        i = a.i,
                        s = i === void 0 ? 0 : i,
                        l = { monthDate: o, i: s };
                    switch (!0) {
                        case r.props.renderCustomHeader !== void 0:
                            return r.renderCustomHeader(l);
                        case r.props.showMonthYearPicker ||
                            r.props.showQuarterYearPicker ||
                            r.props.showYearPicker:
                            return r.renderYearHeader(l);
                        default:
                            return r.renderDefaultHeader(l);
                    }
                }),
                (r.renderMonths = function () {
                    var a, o;
                    if (
                        !(r.props.showTimeSelectOnly || r.props.showYearPicker)
                    ) {
                        for (
                            var i = [],
                                s =
                                    (a = r.props.monthsShown) !== null &&
                                    a !== void 0
                                        ? a
                                        : t.defaultProps.monthsShown,
                                l = r.props.showPreviousMonths ? s - 1 : 0,
                                u =
                                    r.props.showMonthYearPicker ||
                                    r.props.showQuarterYearPicker
                                        ? wn(r.state.date, l)
                                        : ba(r.state.date, l),
                                c =
                                    (o = r.props.monthSelectedIn) !== null &&
                                    o !== void 0
                                        ? o
                                        : l,
                                d = 0;
                            d < s;
                            ++d
                        ) {
                            var p = d - c + l,
                                v =
                                    r.props.showMonthYearPicker ||
                                    r.props.showQuarterYearPicker
                                        ? wn(u, p)
                                        : Qt(u, p),
                                g = "month-".concat(d),
                                w = d < s - 1,
                                k = d > 0;
                            i.push(
                                T.createElement(
                                    "div",
                                    {
                                        key: g,
                                        ref: function (h) {
                                            r.monthContainer = h ?? void 0;
                                        },
                                        className:
                                            "react-datepicker__month-container",
                                    },
                                    r.renderHeader({ monthDate: v, i: d }),
                                    T.createElement(
                                        G2,
                                        le({}, t.defaultProps, r.props, {
                                            ariaLabelPrefix:
                                                r.props.monthAriaLabelPrefix,
                                            day: v,
                                            onDayClick: r.handleDayClick,
                                            handleOnKeyDown:
                                                r.props.handleOnDayKeyDown,
                                            handleOnMonthKeyDown:
                                                r.props.handleOnKeyDown,
                                            onDayMouseEnter:
                                                r.handleDayMouseEnter,
                                            onMouseLeave:
                                                r.handleMonthMouseLeave,
                                            orderInDisplay: d,
                                            selectingDate:
                                                r.state.selectingDate,
                                            monthShowsDuplicateDaysEnd: w,
                                            monthShowsDuplicateDaysStart: k,
                                        })
                                    )
                                )
                            );
                        }
                        return i;
                    }
                }),
                (r.renderYears = function () {
                    if (!r.props.showTimeSelectOnly && r.props.showYearPicker)
                        return T.createElement(
                            "div",
                            { className: "react-datepicker__year--container" },
                            r.renderHeader({ monthDate: r.state.date }),
                            T.createElement(
                                i_,
                                le({}, t.defaultProps, r.props, {
                                    selectingDate: r.state.selectingDate,
                                    date: r.state.date,
                                    onDayClick: r.handleDayClick,
                                    clearSelectingDate: r.clearSelectingDate,
                                    onYearMouseEnter: r.handleYearMouseEnter,
                                    onYearMouseLeave: r.handleYearMouseLeave,
                                })
                            )
                        );
                }),
                (r.renderTimeSection = function () {
                    if (
                        r.props.showTimeSelect &&
                        (r.state.monthContainer || r.props.showTimeSelectOnly)
                    )
                        return T.createElement(
                            o_,
                            le({}, t.defaultProps, r.props, {
                                onChange: r.props.onTimeChange,
                                format: r.props.timeFormat,
                                intervals: r.props.timeIntervals,
                                monthRef: r.state.monthContainer,
                            })
                        );
                }),
                (r.renderInputTimeSection = function () {
                    var a = r.props.selected
                            ? new Date(r.props.selected)
                            : void 0,
                        o = a && mn(a) && !!r.props.selected,
                        i = o
                            ? ""
                                  .concat(bh(a.getHours()), ":")
                                  .concat(bh(a.getMinutes()))
                            : "";
                    if (r.props.showTimeInput)
                        return T.createElement(
                            $2,
                            le({}, t.defaultProps, r.props, {
                                date: a,
                                timeString: i,
                                onChange: r.props.onTimeChange,
                            })
                        );
                }),
                (r.renderAriaLiveRegion = function () {
                    var a,
                        o = Bn(
                            r.state.date,
                            (a = r.props.yearItemNumber) !== null &&
                                a !== void 0
                                ? a
                                : t.defaultProps.yearItemNumber
                        ),
                        i = o.startPeriod,
                        s = o.endPeriod,
                        l;
                    return (
                        r.props.showYearPicker
                            ? (l = "".concat(i, " - ").concat(s))
                            : r.props.showMonthYearPicker ||
                              r.props.showQuarterYearPicker
                            ? (l = re(r.state.date))
                            : (l = ""
                                  .concat(
                                      Kd(it(r.state.date), r.props.locale),
                                      " "
                                  )
                                  .concat(re(r.state.date))),
                        T.createElement(
                            "span",
                            {
                                role: "alert",
                                "aria-live": "polite",
                                className: "react-datepicker__aria-live",
                            },
                            r.state.isRenderAriaLiveMessage && l
                        )
                    );
                }),
                (r.renderChildren = function () {
                    if (r.props.children)
                        return T.createElement(
                            "div",
                            {
                                className:
                                    "react-datepicker__children-container",
                            },
                            r.props.children
                        );
                }),
                (r.containerRef = x.createRef()),
                (r.state = {
                    date: r.getDateInView(),
                    selectingDate: void 0,
                    monthContainer: void 0,
                    isRenderAriaLiveMessage: !1,
                }),
                r
            );
        }
        return (
            Object.defineProperty(t, "defaultProps", {
                get: function () {
                    return {
                        monthsShown: 1,
                        forceShowMonthNavigation: !1,
                        timeCaption: "Time",
                        previousYearButtonLabel: "Previous Year",
                        nextYearButtonLabel: "Next Year",
                        previousMonthButtonLabel: "Previous Month",
                        nextMonthButtonLabel: "Next Month",
                        yearItemNumber: ni,
                    };
                },
                enumerable: !1,
                configurable: !0,
            }),
            (t.prototype.componentDidMount = function () {
                var n = this;
                this.props.showTimeSelect &&
                    (this.assignMonthContainer = (function () {
                        n.setState({ monthContainer: n.monthContainer });
                    })());
            }),
            (t.prototype.componentDidUpdate = function (n) {
                var r = this;
                if (
                    this.props.preSelection &&
                    (!se(this.props.preSelection, n.preSelection) ||
                        this.props.monthSelectedIn !== n.monthSelectedIn)
                ) {
                    var a = !ot(this.state.date, this.props.preSelection);
                    this.setState(
                        { date: this.props.preSelection },
                        function () {
                            return a && r.handleCustomMonthChange(r.state.date);
                        }
                    );
                } else
                    this.props.openToDate &&
                        !se(this.props.openToDate, n.openToDate) &&
                        this.setState({ date: this.props.openToDate });
            }),
            (t.prototype.render = function () {
                var n = this.props.container || E2;
                return T.createElement(
                    "div",
                    { style: { display: "contents" }, ref: this.containerRef },
                    T.createElement(
                        n,
                        {
                            className: Be(
                                "react-datepicker",
                                this.props.className,
                                {
                                    "react-datepicker--time-only":
                                        this.props.showTimeSelectOnly,
                                }
                            ),
                            showTime:
                                this.props.showTimeSelect ||
                                this.props.showTimeInput,
                            showTimeSelectOnly: this.props.showTimeSelectOnly,
                        },
                        this.renderAriaLiveRegion(),
                        this.renderPreviousButton(),
                        this.renderNextButton(),
                        this.renderMonths(),
                        this.renderYears(),
                        this.renderTodayButton(),
                        this.renderTimeSection(),
                        this.renderInputTimeSection(),
                        this.renderChildren()
                    )
                );
            }),
            t
        );
    })(x.Component),
    h_ = function (e) {
        var t = e.icon,
            n = e.className,
            r = n === void 0 ? "" : n,
            a = e.onClick,
            o = "react-datepicker__calendar-icon";
        return typeof t == "string"
            ? T.createElement("i", {
                  className: "".concat(o, " ").concat(t, " ").concat(r),
                  "aria-hidden": "true",
                  onClick: a,
              })
            : T.isValidElement(t)
            ? T.cloneElement(t, {
                  className: ""
                      .concat(t.props.className || "", " ")
                      .concat(o, " ")
                      .concat(r),
                  onClick: function (i) {
                      typeof t.props.onClick == "function" &&
                          t.props.onClick(i),
                          typeof a == "function" && a(i);
                  },
              })
            : T.createElement(
                  "svg",
                  {
                      className: "".concat(o, " ").concat(r),
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 448 512",
                      onClick: a,
                  },
                  T.createElement("path", {
                      d: "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z",
                  })
              );
    },
    _y = (function (e) {
        $e(t, e);
        function t(n) {
            var r = e.call(this, n) || this;
            return (
                (r.portalRoot = null), (r.el = document.createElement("div")), r
            );
        }
        return (
            (t.prototype.componentDidMount = function () {
                (this.portalRoot = (
                    this.props.portalHost || document
                ).getElementById(this.props.portalId)),
                    this.portalRoot ||
                        ((this.portalRoot = document.createElement("div")),
                        this.portalRoot.setAttribute("id", this.props.portalId),
                        (this.props.portalHost || document.body).appendChild(
                            this.portalRoot
                        )),
                    this.portalRoot.appendChild(this.el);
            }),
            (t.prototype.componentWillUnmount = function () {
                this.portalRoot && this.portalRoot.removeChild(this.el);
            }),
            (t.prototype.render = function () {
                return Zv.createPortal(this.props.children, this.el);
            }),
            t
        );
    })(x.Component),
    m_ = "[tabindex], a, button, input, select, textarea",
    v_ = function (e) {
        return (
            (e instanceof HTMLAnchorElement || !e.disabled) && e.tabIndex !== -1
        );
    },
    by = (function (e) {
        $e(t, e);
        function t(n) {
            var r = e.call(this, n) || this;
            return (
                (r.getTabChildren = function () {
                    var a;
                    return Array.prototype.slice
                        .call(
                            (a = r.tabLoopRef.current) === null || a === void 0
                                ? void 0
                                : a.querySelectorAll(m_),
                            1,
                            -1
                        )
                        .filter(v_);
                }),
                (r.handleFocusStart = function () {
                    var a = r.getTabChildren();
                    a && a.length > 1 && a[a.length - 1].focus();
                }),
                (r.handleFocusEnd = function () {
                    var a = r.getTabChildren();
                    a && a.length > 1 && a[0].focus();
                }),
                (r.tabLoopRef = x.createRef()),
                r
            );
        }
        return (
            (t.prototype.render = function () {
                var n;
                return (
                    (n = this.props.enableTabLoop) !== null && n !== void 0
                        ? n
                        : t.defaultProps.enableTabLoop
                )
                    ? T.createElement(
                          "div",
                          {
                              className: "react-datepicker__tab-loop",
                              ref: this.tabLoopRef,
                          },
                          T.createElement("div", {
                              className: "react-datepicker__tab-loop__start",
                              tabIndex: 0,
                              onFocus: this.handleFocusStart,
                          }),
                          this.props.children,
                          T.createElement("div", {
                              className: "react-datepicker__tab-loop__end",
                              tabIndex: 0,
                              onFocus: this.handleFocusEnd,
                          })
                      )
                    : this.props.children;
            }),
            (t.defaultProps = { enableTabLoop: !0 }),
            t
        );
    })(x.Component);
function g_(e) {
    var t = function (n) {
        var r,
            a = typeof n.hidePopper == "boolean" ? n.hidePopper : !0,
            o = x.useRef(null),
            i = S2(
                le(
                    {
                        open: !a,
                        whileElementsMounted: n2,
                        placement: n.popperPlacement,
                        middleware: sn(
                            [l2({ padding: 15 }), s2(10), u2({ element: o })],
                            (r = n.popperModifiers) !== null && r !== void 0
                                ? r
                                : [],
                            !0
                        ),
                    },
                    n.popperProps
                )
            ),
            s = le(le({}, n), {
                hidePopper: a,
                popperProps: le(le({}, i), { arrowRef: o }),
            });
        return T.createElement(e, le({}, s));
    };
    return t;
}
var y_ = (function (e) {
        $e(t, e);
        function t() {
            return (e !== null && e.apply(this, arguments)) || this;
        }
        return (
            Object.defineProperty(t, "defaultProps", {
                get: function () {
                    return { hidePopper: !0 };
                },
                enumerable: !1,
                configurable: !0,
            }),
            (t.prototype.render = function () {
                var n = this.props,
                    r = n.className,
                    a = n.wrapperClassName,
                    o = n.hidePopper,
                    i = o === void 0 ? t.defaultProps.hidePopper : o,
                    s = n.popperComponent,
                    l = n.targetComponent,
                    u = n.enableTabLoop,
                    c = n.popperOnKeyDown,
                    d = n.portalId,
                    p = n.portalHost,
                    v = n.popperProps,
                    g = n.showArrow,
                    w = void 0;
                if (!i) {
                    var k = Be("react-datepicker-popper", r);
                    w = T.createElement(
                        by,
                        { enableTabLoop: u },
                        T.createElement(
                            "div",
                            {
                                ref: v.refs.setFloating,
                                style: v.floatingStyles,
                                className: k,
                                "data-placement": v.placement,
                                onKeyDown: c,
                            },
                            s,
                            g &&
                                T.createElement(v2, {
                                    ref: v.arrowRef,
                                    context: v.context,
                                    fill: "currentColor",
                                    strokeWidth: 1,
                                    height: 8,
                                    width: 16,
                                    style: { transform: "translateY(-1px)" },
                                    className: "react-datepicker__triangle",
                                })
                        )
                    );
                }
                this.props.popperContainer &&
                    (w = x.createElement(this.props.popperContainer, {}, w)),
                    d &&
                        !i &&
                        (w = T.createElement(
                            _y,
                            { portalId: d, portalHost: p },
                            w
                        ));
                var h = Be("react-datepicker-wrapper", a);
                return T.createElement(
                    T.Fragment,
                    null,
                    T.createElement(
                        "div",
                        { ref: v.refs.setReference, className: h },
                        l
                    ),
                    w
                );
            }),
            t
        );
    })(x.Component),
    w_ = g_(y_),
    Oh = "react-datepicker-ignore-onclickoutside",
    x_ = pl(p_);
function D_(e, t) {
    return e && t ? it(e) !== it(t) || re(e) !== re(t) : e !== t;
}
var fu = "Date input not valid.",
    Lh = (function (e) {
        $e(t, e);
        function t(n) {
            var r = e.call(this, n) || this;
            return (
                (r.calendar = null),
                (r.input = null),
                (r.getPreSelection = function () {
                    return r.props.openToDate
                        ? r.props.openToDate
                        : r.props.selectsEnd && r.props.startDate
                        ? r.props.startDate
                        : r.props.selectsStart && r.props.endDate
                        ? r.props.endDate
                        : me();
                }),
                (r.modifyHolidays = function () {
                    var a;
                    return (a = r.props.holidays) === null || a === void 0
                        ? void 0
                        : a.reduce(function (o, i) {
                              var s = new Date(i.date);
                              return mn(s)
                                  ? sn(
                                        sn([], o, !0),
                                        [le(le({}, i), { date: s })],
                                        !1
                                    )
                                  : o;
                          }, []);
                }),
                (r.calcInitialState = function () {
                    var a,
                        o = r.getPreSelection(),
                        i = Sy(r.props),
                        s = Ey(r.props),
                        l = i && Ir(o, Xi(i)) ? i : s && ar(o, yh(s)) ? s : o;
                    return {
                        open: r.props.startOpen || !1,
                        preventFocus: !1,
                        inputValue: null,
                        preSelection:
                            (a = r.props.selectsRange
                                ? r.props.startDate
                                : r.props.selected) !== null && a !== void 0
                                ? a
                                : l,
                        highlightDates: _h(r.props.highlightDates),
                        focused: !1,
                        shouldFocusDayInline: !1,
                        isRenderAriaLiveMessage: !1,
                        wasHidden: !1,
                    };
                }),
                (r.resetHiddenStatus = function () {
                    r.setState(le(le({}, r.state), { wasHidden: !1 }));
                }),
                (r.setHiddenStatus = function () {
                    r.setState(le(le({}, r.state), { wasHidden: !0 }));
                }),
                (r.setHiddenStateOnVisibilityHidden = function () {
                    document.visibilityState === "hidden" &&
                        r.setHiddenStatus();
                }),
                (r.clearPreventFocusTimeout = function () {
                    r.preventFocusTimeout &&
                        clearTimeout(r.preventFocusTimeout);
                }),
                (r.setFocus = function () {
                    r.input &&
                        r.input.focus &&
                        r.input.focus({ preventScroll: !0 });
                }),
                (r.setBlur = function () {
                    r.input && r.input.blur && r.input.blur(),
                        r.cancelFocusInput();
                }),
                (r.setOpen = function (a, o) {
                    o === void 0 && (o = !1),
                        r.setState(
                            {
                                open: a,
                                preSelection:
                                    a && r.state.open
                                        ? r.state.preSelection
                                        : r.calcInitialState().preSelection,
                                lastPreSelectChange: pu,
                            },
                            function () {
                                a ||
                                    r.setState(
                                        function (i) {
                                            return {
                                                focused: o ? i.focused : !1,
                                            };
                                        },
                                        function () {
                                            !o && r.setBlur(),
                                                r.setState({
                                                    inputValue: null,
                                                });
                                        }
                                    );
                            }
                        );
                }),
                (r.inputOk = function () {
                    return xn(r.state.preSelection);
                }),
                (r.isCalendarOpen = function () {
                    return r.props.open === void 0
                        ? r.state.open && !r.props.disabled && !r.props.readOnly
                        : r.props.open;
                }),
                (r.handleFocus = function (a) {
                    var o,
                        i,
                        s = r.state.wasHidden,
                        l = s ? r.state.open : !0;
                    s && r.resetHiddenStatus(),
                        !r.state.preventFocus &&
                            l &&
                            ((i = (o = r.props).onFocus) === null ||
                                i === void 0 ||
                                i.call(o, a),
                            !r.props.preventOpenOnFocus &&
                                !r.props.readOnly &&
                                r.setOpen(!0)),
                        r.setState({ focused: !0 });
                }),
                (r.sendFocusBackToInput = function () {
                    r.preventFocusTimeout && r.clearPreventFocusTimeout(),
                        r.setState({ preventFocus: !0 }, function () {
                            r.preventFocusTimeout = setTimeout(function () {
                                r.setFocus(), r.setState({ preventFocus: !1 });
                            });
                        });
                }),
                (r.cancelFocusInput = function () {
                    clearTimeout(r.inputFocusTimeout),
                        (r.inputFocusTimeout = void 0);
                }),
                (r.deferFocusInput = function () {
                    r.cancelFocusInput(),
                        (r.inputFocusTimeout = setTimeout(function () {
                            return r.setFocus();
                        }, 1));
                }),
                (r.handleDropdownFocus = function () {
                    r.cancelFocusInput();
                }),
                (r.handleBlur = function (a) {
                    var o, i;
                    (!r.state.open ||
                        r.props.withPortal ||
                        r.props.showTimeInput) &&
                        ((i = (o = r.props).onBlur) === null ||
                            i === void 0 ||
                            i.call(o, a)),
                        r.setState({ focused: !1 });
                }),
                (r.handleCalendarClickOutside = function (a) {
                    var o, i;
                    r.props.inline || r.setOpen(!1),
                        (i = (o = r.props).onClickOutside) === null ||
                            i === void 0 ||
                            i.call(o, a),
                        r.props.withPortal && a.preventDefault();
                }),
                (r.handleChange = function () {
                    for (var a = [], o = 0; o < arguments.length; o++)
                        a[o] = arguments[o];
                    var i = a[0];
                    if (
                        !(
                            r.props.onChangeRaw &&
                            (r.props.onChangeRaw.apply(r, a),
                            !i ||
                                typeof i.isDefaultPrevented != "function" ||
                                i.isDefaultPrevented())
                        )
                    ) {
                        r.setState({
                            inputValue:
                                (i == null ? void 0 : i.target) instanceof
                                HTMLInputElement
                                    ? i.target.value
                                    : null,
                            lastPreSelectChange: k_,
                        });
                        var s = r.props,
                            l = s.dateFormat,
                            u = l === void 0 ? t.defaultProps.dateFormat : l,
                            c = s.strictParsing,
                            d = c === void 0 ? t.defaultProps.strictParsing : c,
                            p = _2(
                                (i == null ? void 0 : i.target) instanceof
                                    HTMLInputElement
                                    ? i.target.value
                                    : "",
                                u,
                                r.props.locale,
                                d,
                                r.props.minDate
                            );
                        r.props.showTimeSelectOnly &&
                            r.props.selected &&
                            p &&
                            !se(p, r.props.selected) &&
                            (p = xC(r.props.selected, {
                                hours: cn(p),
                                minutes: dn(p),
                                seconds: Dn(p),
                            })),
                            (p ||
                                !(
                                    (i == null ? void 0 : i.target) instanceof
                                    HTMLInputElement
                                ) ||
                                !(i != null && i.target.value)) &&
                                r.setSelected(p, i, !0);
                    }
                }),
                (r.handleSelect = function (a, o, i) {
                    if (
                        (r.props.shouldCloseOnSelect &&
                            !r.props.showTimeSelect &&
                            r.sendFocusBackToInput(),
                        r.props.onChangeRaw && r.props.onChangeRaw(o),
                        r.setSelected(a, o, !1, i),
                        r.props.showDateSelect &&
                            r.setState({ isRenderAriaLiveMessage: !0 }),
                        !r.props.shouldCloseOnSelect || r.props.showTimeSelect)
                    )
                        r.setPreSelection(a);
                    else if (!r.props.inline) {
                        r.props.selectsRange || r.setOpen(!1);
                        var s = r.props,
                            l = s.startDate,
                            u = s.endDate;
                        l &&
                            !u &&
                            (r.props.swapRange || !Mh(a, l)) &&
                            r.setOpen(!1);
                    }
                }),
                (r.setSelected = function (a, o, i, s) {
                    var l,
                        u = a;
                    if (r.props.showYearPicker) {
                        if (u !== null && bc(re(u), r.props)) return;
                    } else if (r.props.showMonthYearPicker) {
                        if (u !== null && ky(u, r.props)) return;
                    } else if (u !== null && Hn(u, r.props)) return;
                    var c = r.props,
                        d = c.onChange,
                        p = c.selectsRange,
                        v = c.startDate,
                        g = c.endDate,
                        w = c.selectsMultiple,
                        k = c.selectedDates,
                        h = c.minTime,
                        m = c.swapRange;
                    if (
                        !kr(r.props.selected, u) ||
                        r.props.allowSameDay ||
                        p ||
                        w
                    )
                        if (
                            (u !== null &&
                                (r.props.selected &&
                                    (!i ||
                                        (!r.props.showTimeSelect &&
                                            !r.props.showTimeSelectOnly &&
                                            !r.props.showTimeInput)) &&
                                    (u = uu(u, {
                                        hour: cn(r.props.selected),
                                        minute: dn(r.props.selected),
                                        second: Dn(r.props.selected),
                                    })),
                                !i &&
                                    (r.props.showTimeSelect ||
                                        r.props.showTimeSelectOnly) &&
                                    h &&
                                    (u = uu(u, {
                                        hour: h.getHours(),
                                        minute: h.getMinutes(),
                                        second: h.getSeconds(),
                                    })),
                                r.props.inline ||
                                    r.setState({ preSelection: u }),
                                r.props.focusSelectedMonth ||
                                    r.setState({ monthSelectedIn: s })),
                            p)
                        ) {
                            var y = !v && !g,
                                C = v && !g,
                                P = v && g;
                            y
                                ? d
                                    ? d([u, null], o)
                                    : t.defaultProps.onChange
                                : C &&
                                  (u === null
                                      ? d
                                          ? d([null, null], o)
                                          : t.defaultProps.onChange
                                      : Mh(u, v)
                                      ? m
                                          ? d
                                              ? d([u, v], o)
                                              : t.defaultProps.onChange
                                          : d
                                          ? d([u, null], o)
                                          : t.defaultProps.onChange
                                      : d
                                      ? d([v, u], o)
                                      : t.defaultProps.onChange),
                                P &&
                                    (d
                                        ? d([u, null], o)
                                        : t.defaultProps.onChange);
                        } else if (w) {
                            if (u !== null)
                                if (!(k != null && k.length))
                                    d ? d([u], o) : t.defaultProps.onChange;
                                else {
                                    var D = k.some(function (R) {
                                        return se(R, u);
                                    });
                                    if (D) {
                                        var S = k.filter(function (R) {
                                            return !se(R, u);
                                        });
                                        d ? d(S, o) : t.defaultProps.onChange;
                                    } else
                                        d
                                            ? d(sn(sn([], k, !0), [u], !1), o)
                                            : t.defaultProps.onChange;
                                }
                        } else d ? d(u, o) : t.defaultProps.onChange;
                    if (!i) {
                        var b =
                            (l = r.props.onSelect) !== null && l !== void 0
                                ? l
                                : t.defaultProps.onSelect;
                        b(u, o), r.setState({ inputValue: null });
                    }
                }),
                (r.setPreSelection = function (a) {
                    var o = xn(r.props.minDate),
                        i = xn(r.props.maxDate),
                        s = !0;
                    if (a) {
                        var l = Xi(a);
                        if (o && i) s = so(a, r.props.minDate, r.props.maxDate);
                        else if (o) {
                            var u = Xi(r.props.minDate);
                            s = ar(a, u) || kr(l, u);
                        } else if (i) {
                            var c = yh(r.props.maxDate);
                            s = Ir(a, c) || kr(l, c);
                        }
                    }
                    s && r.setState({ preSelection: a });
                }),
                (r.toggleCalendar = function () {
                    r.setOpen(!r.state.open);
                }),
                (r.handleTimeChange = function (a) {
                    var o;
                    if (!(r.props.selectsRange || r.props.selectsMultiple)) {
                        var i = r.props.selected
                                ? r.props.selected
                                : r.getPreSelection(),
                            s = r.props.selected
                                ? a
                                : uu(i, { hour: cn(a), minute: dn(a) });
                        r.setState({ preSelection: s });
                        var l =
                            (o = r.props.onChange) !== null && o !== void 0
                                ? o
                                : t.defaultProps.onChange;
                        l(s),
                            r.props.shouldCloseOnSelect &&
                                !r.props.showTimeInput &&
                                (r.sendFocusBackToInput(), r.setOpen(!1)),
                            r.props.showTimeInput && r.setOpen(!0),
                            (r.props.showTimeSelectOnly ||
                                r.props.showTimeSelect) &&
                                r.setState({ isRenderAriaLiveMessage: !0 }),
                            r.setState({ inputValue: null });
                    }
                }),
                (r.onInputClick = function () {
                    var a, o;
                    !r.props.disabled && !r.props.readOnly && r.setOpen(!0),
                        (o = (a = r.props).onInputClick) === null ||
                            o === void 0 ||
                            o.call(a);
                }),
                (r.onInputKeyDown = function (a) {
                    var o, i, s, l, u;
                    (i = (o = r.props).onKeyDown) === null ||
                        i === void 0 ||
                        i.call(o, a);
                    var c = a.key;
                    if (
                        !r.state.open &&
                        !r.props.inline &&
                        !r.props.preventOpenOnFocus
                    ) {
                        (c === W.ArrowDown ||
                            c === W.ArrowUp ||
                            c === W.Enter) &&
                            r.onInputClick();
                        return;
                    }
                    if (r.state.open) {
                        if (c === W.ArrowDown || c === W.ArrowUp) {
                            a.preventDefault();
                            var d = r.props.showTimeSelectOnly
                                    ? ".react-datepicker__time-list-item[tabindex='0']"
                                    : r.props.showWeekPicker &&
                                      r.props.showWeekNumbers
                                    ? '.react-datepicker__week-number[tabindex="0"]'
                                    : r.props.showFullMonthYearPicker ||
                                      r.props.showMonthYearPicker
                                    ? '.react-datepicker__month-text[tabindex="0"]'
                                    : '.react-datepicker__day[tabindex="0"]',
                                p =
                                    ((s = r.calendar) === null || s === void 0
                                        ? void 0
                                        : s.componentNode) instanceof Element &&
                                    r.calendar.componentNode.querySelector(d);
                            p instanceof HTMLElement &&
                                p.focus({ preventScroll: !0 });
                            return;
                        }
                        var v = me(r.state.preSelection);
                        c === W.Enter
                            ? (a.preventDefault(),
                              r.inputOk() && r.state.lastPreSelectChange === pu
                                  ? (r.handleSelect(v, a),
                                    !r.props.shouldCloseOnSelect &&
                                        r.setPreSelection(v))
                                  : r.setOpen(!1))
                            : c === W.Escape
                            ? (a.preventDefault(),
                              r.sendFocusBackToInput(),
                              r.setOpen(!1))
                            : c === W.Tab && r.setOpen(!1),
                            r.inputOk() ||
                                (u = (l = r.props).onInputError) === null ||
                                u === void 0 ||
                                u.call(l, { code: 1, msg: fu });
                    }
                }),
                (r.onPortalKeyDown = function (a) {
                    var o = a.key;
                    o === W.Escape &&
                        (a.preventDefault(),
                        r.setState({ preventFocus: !0 }, function () {
                            r.setOpen(!1),
                                setTimeout(function () {
                                    r.setFocus(),
                                        r.setState({ preventFocus: !1 });
                                });
                        }));
                }),
                (r.onDayKeyDown = function (a) {
                    var o,
                        i,
                        s,
                        l,
                        u = r.props,
                        c = u.minDate,
                        d = u.maxDate,
                        p = u.disabledKeyboardNavigation,
                        v = u.showWeekPicker,
                        g = u.shouldCloseOnSelect,
                        w = u.locale,
                        k = u.calendarStartDay,
                        h = u.adjustDateOnChange,
                        m = u.inline;
                    if (
                        ((i = (o = r.props).onKeyDown) === null ||
                            i === void 0 ||
                            i.call(o, a),
                        !p)
                    ) {
                        var y = a.key,
                            C = a.shiftKey,
                            P = me(r.state.preSelection),
                            D = function (X, j) {
                                var O = j;
                                switch (X) {
                                    case W.ArrowRight:
                                        O = v ? bs(j, 1) : dr(j, 1);
                                        break;
                                    case W.ArrowLeft:
                                        O = v ? ih(j, 1) : DC(j, 1);
                                        break;
                                    case W.ArrowUp:
                                        O = ih(j, 1);
                                        break;
                                    case W.ArrowDown:
                                        O = bs(j, 1);
                                        break;
                                    case W.PageUp:
                                        O = C ? Na(j, 1) : ba(j, 1);
                                        break;
                                    case W.PageDown:
                                        O = C ? wn(j, 1) : Qt(j, 1);
                                        break;
                                    case W.Home:
                                        O = er(j, w, k);
                                        break;
                                    case W.End:
                                        O = T2(j);
                                        break;
                                }
                                return O;
                            },
                            S = function (X, j) {
                                for (
                                    var O = 40,
                                        $ = X,
                                        Y = !1,
                                        I = 0,
                                        B = D(X, j);
                                    !Y;

                                ) {
                                    if (I >= O) {
                                        B = j;
                                        break;
                                    }
                                    c &&
                                        B < c &&
                                        (($ = W.ArrowRight),
                                        (B = Hn(c, r.props) ? D($, B) : c)),
                                        d &&
                                            B > d &&
                                            (($ = W.ArrowLeft),
                                            (B = Hn(d, r.props) ? D($, B) : d)),
                                        Hn(B, r.props)
                                            ? (($ === W.PageUp ||
                                                  $ === W.Home) &&
                                                  ($ = W.ArrowRight),
                                              ($ === W.PageDown ||
                                                  $ === W.End) &&
                                                  ($ = W.ArrowLeft),
                                              (B = D($, B)))
                                            : (Y = !0),
                                        I++;
                                }
                                return B;
                            };
                        if (y === W.Enter) {
                            a.preventDefault(),
                                r.handleSelect(P, a),
                                !g && r.setPreSelection(P);
                            return;
                        } else if (y === W.Escape) {
                            a.preventDefault(),
                                r.setOpen(!1),
                                r.inputOk() ||
                                    (l = (s = r.props).onInputError) === null ||
                                    l === void 0 ||
                                    l.call(s, { code: 1, msg: fu });
                            return;
                        }
                        var b = null;
                        switch (y) {
                            case W.ArrowLeft:
                            case W.ArrowRight:
                            case W.ArrowUp:
                            case W.ArrowDown:
                            case W.PageUp:
                            case W.PageDown:
                            case W.Home:
                            case W.End:
                                b = S(y, P);
                                break;
                        }
                        if (!b) {
                            r.props.onInputError &&
                                r.props.onInputError({ code: 1, msg: fu });
                            return;
                        }
                        if (
                            (a.preventDefault(),
                            r.setState({ lastPreSelectChange: pu }),
                            h && r.setSelected(b),
                            r.setPreSelection(b),
                            m)
                        ) {
                            var R = it(P),
                                F = it(b),
                                z = re(P),
                                K = re(b);
                            R !== F || z !== K
                                ? r.setState({ shouldFocusDayInline: !0 })
                                : r.setState({ shouldFocusDayInline: !1 });
                        }
                    }
                }),
                (r.onPopperKeyDown = function (a) {
                    var o = a.key;
                    o === W.Escape &&
                        (a.preventDefault(), r.sendFocusBackToInput());
                }),
                (r.onClearClick = function (a) {
                    a && a.preventDefault && a.preventDefault(),
                        r.sendFocusBackToInput();
                    var o = r.props,
                        i = o.selectsRange,
                        s = o.onChange;
                    i
                        ? s
                            ? s([null, null], a)
                            : t.defaultProps.onChange()
                        : s
                        ? s(null, a)
                        : t.defaultProps.onChange(),
                        r.setState({ inputValue: null });
                }),
                (r.clear = function () {
                    r.onClearClick();
                }),
                (r.onScroll = function (a) {
                    typeof r.props.closeOnScroll == "boolean" &&
                    r.props.closeOnScroll
                        ? (a.target === document ||
                              a.target === document.documentElement ||
                              a.target === document.body) &&
                          r.setOpen(!1)
                        : typeof r.props.closeOnScroll == "function" &&
                          r.props.closeOnScroll(a) &&
                          r.setOpen(!1);
                }),
                (r.renderCalendar = function () {
                    var a, o;
                    return !r.props.inline && !r.isCalendarOpen()
                        ? null
                        : T.createElement(
                              x_,
                              le(
                                  {
                                      ref: function (i) {
                                          r.calendar = i;
                                      },
                                  },
                                  r.props,
                                  r.state,
                                  {
                                      setOpen: r.setOpen,
                                      dateFormat:
                                          (a = r.props.dateFormatCalendar) !==
                                              null && a !== void 0
                                              ? a
                                              : t.defaultProps
                                                    .dateFormatCalendar,
                                      onSelect: r.handleSelect,
                                      onClickOutside:
                                          r.handleCalendarClickOutside,
                                      holidays: z2(r.modifyHolidays()),
                                      outsideClickIgnoreClass: Oh,
                                      onDropdownFocus: r.handleDropdownFocus,
                                      onTimeChange: r.handleTimeChange,
                                      className: r.props.calendarClassName,
                                      container: r.props.calendarContainer,
                                      handleOnKeyDown: r.props.onKeyDown,
                                      handleOnDayKeyDown: r.onDayKeyDown,
                                      setPreSelection: r.setPreSelection,
                                      dropdownMode:
                                          (o = r.props.dropdownMode) !== null &&
                                          o !== void 0
                                              ? o
                                              : t.defaultProps.dropdownMode,
                                  }
                              ),
                              r.props.children
                          );
                }),
                (r.renderAriaLiveRegion = function () {
                    var a = r.props,
                        o = a.dateFormat,
                        i = o === void 0 ? t.defaultProps.dateFormat : o,
                        s = a.locale,
                        l = r.props.showTimeInput || r.props.showTimeSelect,
                        u = l ? "PPPPp" : "PPPP",
                        c;
                    return (
                        r.props.selectsRange
                            ? (c = "Selected start date: "
                                  .concat(
                                      Pt(r.props.startDate, {
                                          dateFormat: u,
                                          locale: s,
                                      }),
                                      ". "
                                  )
                                  .concat(
                                      r.props.endDate
                                          ? "End date: " +
                                                Pt(r.props.endDate, {
                                                    dateFormat: u,
                                                    locale: s,
                                                })
                                          : ""
                                  ))
                            : r.props.showTimeSelectOnly
                            ? (c = "Selected time: ".concat(
                                  Pt(r.props.selected, {
                                      dateFormat: i,
                                      locale: s,
                                  })
                              ))
                            : r.props.showYearPicker
                            ? (c = "Selected year: ".concat(
                                  Pt(r.props.selected, {
                                      dateFormat: "yyyy",
                                      locale: s,
                                  })
                              ))
                            : r.props.showMonthYearPicker
                            ? (c = "Selected month: ".concat(
                                  Pt(r.props.selected, {
                                      dateFormat: "MMMM yyyy",
                                      locale: s,
                                  })
                              ))
                            : r.props.showQuarterYearPicker
                            ? (c = "Selected quarter: ".concat(
                                  Pt(r.props.selected, {
                                      dateFormat: "yyyy, QQQ",
                                      locale: s,
                                  })
                              ))
                            : (c = "Selected date: ".concat(
                                  Pt(r.props.selected, {
                                      dateFormat: u,
                                      locale: s,
                                  })
                              )),
                        T.createElement(
                            "span",
                            {
                                role: "alert",
                                "aria-live": "polite",
                                className: "react-datepicker__aria-live",
                            },
                            c
                        )
                    );
                }),
                (r.renderDateInput = function () {
                    var a,
                        o,
                        i,
                        s = Be(
                            r.props.className,
                            ((a = {}), (a[Oh] = r.state.open), a)
                        ),
                        l =
                            r.props.customInput ||
                            T.createElement("input", { type: "text" }),
                        u = r.props.customInputRef || "ref",
                        c = r.props,
                        d = c.dateFormat,
                        p = d === void 0 ? t.defaultProps.dateFormat : d,
                        v = c.locale,
                        g =
                            typeof r.props.value == "string"
                                ? r.props.value
                                : typeof r.state.inputValue == "string"
                                ? r.state.inputValue
                                : r.props.selectsRange
                                ? b2(r.props.startDate, r.props.endDate, {
                                      dateFormat: p,
                                      locale: v,
                                  })
                                : r.props.selectsMultiple
                                ? N2(
                                      (i = r.props.selectedDates) !== null &&
                                          i !== void 0
                                          ? i
                                          : [],
                                      { dateFormat: p, locale: v }
                                  )
                                : Pt(r.props.selected, {
                                      dateFormat: p,
                                      locale: v,
                                  });
                    return x.cloneElement(
                        l,
                        ((o = {}),
                        (o[u] = function (w) {
                            r.input = w;
                        }),
                        (o.value = g),
                        (o.onBlur = r.handleBlur),
                        (o.onChange = r.handleChange),
                        (o.onClick = r.onInputClick),
                        (o.onFocus = r.handleFocus),
                        (o.onKeyDown = r.onInputKeyDown),
                        (o.id = r.props.id),
                        (o.name = r.props.name),
                        (o.form = r.props.form),
                        (o.autoFocus = r.props.autoFocus),
                        (o.placeholder = r.props.placeholderText),
                        (o.disabled = r.props.disabled),
                        (o.autoComplete = r.props.autoComplete),
                        (o.className = Be(l.props.className, s)),
                        (o.title = r.props.title),
                        (o.readOnly = r.props.readOnly),
                        (o.required = r.props.required),
                        (o.tabIndex = r.props.tabIndex),
                        (o["aria-describedby"] = r.props.ariaDescribedBy),
                        (o["aria-invalid"] = r.props.ariaInvalid),
                        (o["aria-labelledby"] = r.props.ariaLabelledBy),
                        (o["aria-required"] = r.props.ariaRequired),
                        o)
                    );
                }),
                (r.renderClearButton = function () {
                    var a = r.props,
                        o = a.isClearable,
                        i = a.disabled,
                        s = a.selected,
                        l = a.startDate,
                        u = a.endDate,
                        c = a.clearButtonTitle,
                        d = a.clearButtonClassName,
                        p = d === void 0 ? "" : d,
                        v = a.ariaLabelClose,
                        g = v === void 0 ? "Close" : v,
                        w = a.selectedDates;
                    return o &&
                        (s != null ||
                            l != null ||
                            u != null ||
                            (w != null && w.length))
                        ? T.createElement("button", {
                              type: "button",
                              className: Be("react-datepicker__close-icon", p, {
                                  "react-datepicker__close-icon--disabled": i,
                              }),
                              disabled: i,
                              "aria-label": g,
                              onClick: r.onClearClick,
                              title: c,
                              tabIndex: -1,
                          })
                        : null;
                }),
                (r.state = r.calcInitialState()),
                (r.preventFocusTimeout = void 0),
                r
            );
        }
        return (
            Object.defineProperty(t, "defaultProps", {
                get: function () {
                    return {
                        allowSameDay: !1,
                        dateFormat: "MM/dd/yyyy",
                        dateFormatCalendar: "LLLL yyyy",
                        onChange: function () {},
                        disabled: !1,
                        disabledKeyboardNavigation: !1,
                        dropdownMode: "scroll",
                        onFocus: function () {},
                        onBlur: function () {},
                        onKeyDown: function () {},
                        onInputClick: function () {},
                        onSelect: function () {},
                        onClickOutside: function () {},
                        onMonthChange: function () {},
                        onCalendarOpen: function () {},
                        onCalendarClose: function () {},
                        preventOpenOnFocus: !1,
                        onYearChange: function () {},
                        onInputError: function () {},
                        monthsShown: 1,
                        readOnly: !1,
                        withPortal: !1,
                        selectsDisabledDaysInRange: !1,
                        shouldCloseOnSelect: !0,
                        showTimeSelect: !1,
                        showTimeInput: !1,
                        showPreviousMonths: !1,
                        showMonthYearPicker: !1,
                        showFullMonthYearPicker: !1,
                        showTwoColumnMonthYearPicker: !1,
                        showFourColumnMonthYearPicker: !1,
                        showYearPicker: !1,
                        showQuarterYearPicker: !1,
                        showWeekPicker: !1,
                        strictParsing: !1,
                        swapRange: !1,
                        timeIntervals: 30,
                        timeCaption: "Time",
                        previousMonthAriaLabel: "Previous Month",
                        previousMonthButtonLabel: "Previous Month",
                        nextMonthAriaLabel: "Next Month",
                        nextMonthButtonLabel: "Next Month",
                        previousYearAriaLabel: "Previous Year",
                        previousYearButtonLabel: "Previous Year",
                        nextYearAriaLabel: "Next Year",
                        nextYearButtonLabel: "Next Year",
                        timeInputLabel: "Time",
                        enableTabLoop: !0,
                        yearItemNumber: ni,
                        focusSelectedMonth: !1,
                        showPopperArrow: !0,
                        excludeScrollbar: !0,
                        customTimeInput: null,
                        calendarStartDay: void 0,
                        toggleCalendarOnIconClick: !1,
                        usePointerEvent: !1,
                    };
                },
                enumerable: !1,
                configurable: !0,
            }),
            (t.prototype.componentDidMount = function () {
                window.addEventListener("scroll", this.onScroll, !0),
                    document.addEventListener(
                        "visibilitychange",
                        this.setHiddenStateOnVisibilityHidden
                    );
            }),
            (t.prototype.componentDidUpdate = function (n, r) {
                var a, o, i, s;
                n.inline &&
                    D_(n.selected, this.props.selected) &&
                    this.setPreSelection(this.props.selected),
                    this.state.monthSelectedIn !== void 0 &&
                        n.monthsShown !== this.props.monthsShown &&
                        this.setState({ monthSelectedIn: 0 }),
                    n.highlightDates !== this.props.highlightDates &&
                        this.setState({
                            highlightDates: _h(this.props.highlightDates),
                        }),
                    !r.focused &&
                        !kr(n.selected, this.props.selected) &&
                        this.setState({ inputValue: null }),
                    r.open !== this.state.open &&
                        (r.open === !1 &&
                            this.state.open === !0 &&
                            ((o = (a = this.props).onCalendarOpen) === null ||
                                o === void 0 ||
                                o.call(a)),
                        r.open === !0 &&
                            this.state.open === !1 &&
                            ((s = (i = this.props).onCalendarClose) === null ||
                                s === void 0 ||
                                s.call(i)));
            }),
            (t.prototype.componentWillUnmount = function () {
                this.clearPreventFocusTimeout(),
                    window.removeEventListener("scroll", this.onScroll, !0),
                    document.removeEventListener(
                        "visibilitychange",
                        this.setHiddenStateOnVisibilityHidden
                    );
            }),
            (t.prototype.renderInputContainer = function () {
                var n = this.props,
                    r = n.showIcon,
                    a = n.icon,
                    o = n.calendarIconClassname,
                    i = n.calendarIconClassName,
                    s = n.toggleCalendarOnIconClick,
                    l = this.state.open;
                return (
                    o &&
                        console.warn(
                            "calendarIconClassname props is deprecated. should use calendarIconClassName props."
                        ),
                    T.createElement(
                        "div",
                        {
                            className:
                                "react-datepicker__input-container".concat(
                                    r
                                        ? " react-datepicker__view-calendar-icon"
                                        : ""
                                ),
                        },
                        r &&
                            T.createElement(
                                h_,
                                le(
                                    {
                                        icon: a,
                                        className: Be(
                                            i,
                                            !i && o,
                                            l &&
                                                "react-datepicker-ignore-onclickoutside"
                                        ),
                                    },
                                    s ? { onClick: this.toggleCalendar } : null
                                )
                            ),
                        this.state.isRenderAriaLiveMessage &&
                            this.renderAriaLiveRegion(),
                        this.renderDateInput(),
                        this.renderClearButton()
                    )
                );
            }),
            (t.prototype.render = function () {
                var n = this.renderCalendar();
                if (this.props.inline) return n;
                if (this.props.withPortal) {
                    var r = this.state.open
                        ? T.createElement(
                              by,
                              { enableTabLoop: this.props.enableTabLoop },
                              T.createElement(
                                  "div",
                                  {
                                      className: "react-datepicker__portal",
                                      tabIndex: -1,
                                      onKeyDown: this.onPortalKeyDown,
                                  },
                                  n
                              )
                          )
                        : null;
                    return (
                        this.state.open &&
                            this.props.portalId &&
                            (r = T.createElement(
                                _y,
                                le(
                                    { portalId: this.props.portalId },
                                    this.props
                                ),
                                r
                            )),
                        T.createElement(
                            "div",
                            null,
                            this.renderInputContainer(),
                            r
                        )
                    );
                }
                return T.createElement(
                    w_,
                    le({}, this.props, {
                        className: this.props.popperClassName,
                        hidePopper: !this.isCalendarOpen(),
                        targetComponent: this.renderInputContainer(),
                        popperComponent: n,
                        popperOnKeyDown: this.onPopperKeyDown,
                        showArrow: this.props.showPopperArrow,
                    })
                );
            }),
            t
        );
    })(x.Component),
    k_ = "input",
    pu = "navigate";
const S_ = {
        lessThanXSeconds: { one: "1초 미만", other: "{{count}}초 미만" },
        xSeconds: { one: "1초", other: "{{count}}초" },
        halfAMinute: "30초",
        lessThanXMinutes: { one: "1분 미만", other: "{{count}}분 미만" },
        xMinutes: { one: "1분", other: "{{count}}분" },
        aboutXHours: { one: "약 1시간", other: "약 {{count}}시간" },
        xHours: { one: "1시간", other: "{{count}}시간" },
        xDays: { one: "1일", other: "{{count}}일" },
        aboutXWeeks: { one: "약 1주", other: "약 {{count}}주" },
        xWeeks: { one: "1주", other: "{{count}}주" },
        aboutXMonths: { one: "약 1개월", other: "약 {{count}}개월" },
        xMonths: { one: "1개월", other: "{{count}}개월" },
        aboutXYears: { one: "약 1년", other: "약 {{count}}년" },
        xYears: { one: "1년", other: "{{count}}년" },
        overXYears: { one: "1년 이상", other: "{{count}}년 이상" },
        almostXYears: { one: "거의 1년", other: "거의 {{count}}년" },
    },
    E_ = (e, t, n) => {
        let r;
        const a = S_[e];
        return (
            typeof a == "string"
                ? (r = a)
                : t === 1
                ? (r = a.one)
                : (r = a.other.replace("{{count}}", t.toString())),
            n != null && n.addSuffix
                ? n.comparison && n.comparison > 0
                    ? r + " 후"
                    : r + " 전"
                : r
        );
    },
    C_ = {
        full: "y년 M월 d일 EEEE",
        long: "y년 M월 d일",
        medium: "y.MM.dd",
        short: "y.MM.dd",
    },
    __ = {
        full: "a H시 mm분 ss초 zzzz",
        long: "a H:mm:ss z",
        medium: "HH:mm:ss",
        short: "HH:mm",
    },
    b_ = {
        full: "{{date}} {{time}}",
        long: "{{date}} {{time}}",
        medium: "{{date}} {{time}}",
        short: "{{date}} {{time}}",
    },
    N_ = {
        date: ha({ formats: C_, defaultWidth: "full" }),
        time: ha({ formats: __, defaultWidth: "full" }),
        dateTime: ha({ formats: b_, defaultWidth: "full" }),
    },
    P_ = {
        lastWeek: "'지난' eeee p",
        yesterday: "'어제' p",
        today: "'오늘' p",
        tomorrow: "'내일' p",
        nextWeek: "'다음' eeee p",
        other: "P",
    },
    M_ = (e, t, n, r) => P_[e],
    T_ = {
        narrow: ["BC", "AD"],
        abbreviated: ["BC", "AD"],
        wide: ["기원전", "서기"],
    },
    R_ = {
        narrow: ["1", "2", "3", "4"],
        abbreviated: ["Q1", "Q2", "Q3", "Q4"],
        wide: ["1분기", "2분기", "3분기", "4분기"],
    },
    O_ = {
        narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        abbreviated: [
            "1월",
            "2월",
            "3월",
            "4월",
            "5월",
            "6월",
            "7월",
            "8월",
            "9월",
            "10월",
            "11월",
            "12월",
        ],
        wide: [
            "1월",
            "2월",
            "3월",
            "4월",
            "5월",
            "6월",
            "7월",
            "8월",
            "9월",
            "10월",
            "11월",
            "12월",
        ],
    },
    L_ = {
        narrow: ["일", "월", "화", "수", "목", "금", "토"],
        short: ["일", "월", "화", "수", "목", "금", "토"],
        abbreviated: ["일", "월", "화", "수", "목", "금", "토"],
        wide: [
            "일요일",
            "월요일",
            "화요일",
            "수요일",
            "목요일",
            "금요일",
            "토요일",
        ],
    },
    j_ = {
        narrow: {
            am: "오전",
            pm: "오후",
            midnight: "자정",
            noon: "정오",
            morning: "아침",
            afternoon: "오후",
            evening: "저녁",
            night: "밤",
        },
        abbreviated: {
            am: "오전",
            pm: "오후",
            midnight: "자정",
            noon: "정오",
            morning: "아침",
            afternoon: "오후",
            evening: "저녁",
            night: "밤",
        },
        wide: {
            am: "오전",
            pm: "오후",
            midnight: "자정",
            noon: "정오",
            morning: "아침",
            afternoon: "오후",
            evening: "저녁",
            night: "밤",
        },
    },
    I_ = {
        narrow: {
            am: "오전",
            pm: "오후",
            midnight: "자정",
            noon: "정오",
            morning: "아침",
            afternoon: "오후",
            evening: "저녁",
            night: "밤",
        },
        abbreviated: {
            am: "오전",
            pm: "오후",
            midnight: "자정",
            noon: "정오",
            morning: "아침",
            afternoon: "오후",
            evening: "저녁",
            night: "밤",
        },
        wide: {
            am: "오전",
            pm: "오후",
            midnight: "자정",
            noon: "정오",
            morning: "아침",
            afternoon: "오후",
            evening: "저녁",
            night: "밤",
        },
    },
    F_ = (e, t) => {
        const n = Number(e);
        switch (String(t == null ? void 0 : t.unit)) {
            case "minute":
            case "second":
                return String(n);
            case "date":
                return n + "일";
            default:
                return n + "번째";
        }
    },
    A_ = {
        ordinalNumber: F_,
        era: nn({ values: T_, defaultWidth: "wide" }),
        quarter: nn({
            values: R_,
            defaultWidth: "wide",
            argumentCallback: (e) => e - 1,
        }),
        month: nn({ values: O_, defaultWidth: "wide" }),
        day: nn({ values: L_, defaultWidth: "wide" }),
        dayPeriod: nn({
            values: j_,
            defaultWidth: "wide",
            formattingValues: I_,
            defaultFormattingWidth: "wide",
        }),
    },
    W_ = /^(\d+)(일|번째)?/i,
    Y_ = /\d+/i,
    U_ = {
        narrow: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        abbreviated:
            /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        wide: /^(기원전|서기)/i,
    },
    z_ = { any: [/^(bc|기원전)/i, /^(ad|서기)/i] },
    H_ = {
        narrow: /^[1234]/i,
        abbreviated: /^q[1234]/i,
        wide: /^[1234]사?분기/i,
    },
    B_ = { any: [/1/i, /2/i, /3/i, /4/i] },
    V_ = {
        narrow: /^(1[012]|[123456789])/,
        abbreviated: /^(1[012]|[123456789])월/i,
        wide: /^(1[012]|[123456789])월/i,
    },
    $_ = {
        any: [
            /^1월?$/,
            /^2/,
            /^3/,
            /^4/,
            /^5/,
            /^6/,
            /^7/,
            /^8/,
            /^9/,
            /^10/,
            /^11/,
            /^12/,
        ],
    },
    Q_ = {
        narrow: /^[일월화수목금토]/,
        short: /^[일월화수목금토]/,
        abbreviated: /^[일월화수목금토]/,
        wide: /^[일월화수목금토]요일/,
    },
    K_ = { any: [/^일/, /^월/, /^화/, /^수/, /^목/, /^금/, /^토/] },
    q_ = { any: /^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i },
    X_ = {
        any: {
            am: /^(am|오전)/i,
            pm: /^(pm|오후)/i,
            midnight: /^자정/i,
            noon: /^정오/i,
            morning: /^아침/i,
            afternoon: /^오후/i,
            evening: /^저녁/i,
            night: /^밤/i,
        },
    },
    G_ = {
        ordinalNumber: Kg({
            matchPattern: W_,
            parsePattern: Y_,
            valueCallback: (e) => parseInt(e, 10),
        }),
        era: rn({
            matchPatterns: U_,
            defaultMatchWidth: "wide",
            parsePatterns: z_,
            defaultParseWidth: "any",
        }),
        quarter: rn({
            matchPatterns: H_,
            defaultMatchWidth: "wide",
            parsePatterns: B_,
            defaultParseWidth: "any",
            valueCallback: (e) => e + 1,
        }),
        month: rn({
            matchPatterns: V_,
            defaultMatchWidth: "wide",
            parsePatterns: $_,
            defaultParseWidth: "any",
        }),
        day: rn({
            matchPatterns: Q_,
            defaultMatchWidth: "wide",
            parsePatterns: K_,
            defaultParseWidth: "any",
        }),
        dayPeriod: rn({
            matchPatterns: q_,
            defaultMatchWidth: "any",
            parsePatterns: X_,
            defaultParseWidth: "any",
        }),
    },
    jh = {
        code: "ko",
        formatDistance: E_,
        formatLong: N_,
        formatRelative: M_,
        localize: A_,
        match: G_,
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
    },
    J_ = "https://localhost:40000/event",
    Z_ = async (e = "") => {
        try {
            return (await ce.post(J_ + "/read", { target: e })).data;
        } catch (t) {
            return (
                console.error("Error occured in services.eventService.read", t),
                { err: t }
            );
        }
    },
    eb = ({
        datetime: e,
        setDatetime: t,
        startDatetime: n,
        setStartDatetime: r,
        endDatetime: a,
        setEndDatetime: o,
        location: i,
        setLocation: s,
        type: l,
        setType: u,
    }) => {
        const [c, d] = x.useState(""),
            [p, v] = x.useState(!1),
            [g, w] = x.useState(!1),
            [k, h] = x.useState(!1),
            [m, y] = x.useState([]),
            [C, P] = x.useState([]),
            D = () => {
                v(!1), w(!1), h(!1);
            },
            S = (j) => {
                D(),
                    j == c
                        ? d("")
                        : j == "datetime"
                        ? (v(!0), d("datetime"))
                        : j == "location"
                        ? (w(!0), d("location"))
                        : j == "type" && (h(!0), d("type"));
            },
            b = () => {
                D(), t(""), R("location"), R("type");
            },
            R = (j) => {
                const O = `input[name="${j}"]:checked`;
                document.querySelectorAll(O).forEach((Y) => {
                    Y.checked = !1;
                }),
                    j == "location" ? s([]) : j == "type" && u([]);
            },
            F = (j) => {
                const O = `input[name="${j}"]:checked`,
                    $ = document.querySelectorAll(O);
                let Y = [];
                $.forEach((I) => {
                    Y.push(I.value);
                }),
                    j == "location" ? s(Y) : j == "type" && u(Y);
            },
            z = (j) => {
                let O = new Date(),
                    $ = new Date();
                switch (j) {
                    case "today":
                        (O = new Date(O.setHours(0))),
                            (O = new Date(O.setMinutes(0))),
                            r(O),
                            o($);
                        break;
                    case "yesterday":
                        (O = new Date(O.setDate(O.getDate() - 1))),
                            ($ = new Date($.setDate($.getDate() - 1))),
                            (O = new Date(O.setHours(0))),
                            (O = new Date(O.setMinutes(0))),
                            ($ = new Date($.setHours(23))),
                            ($ = new Date($.setMinutes(59))),
                            r(O),
                            o($);
                        break;
                    case "week":
                        (O = new Date(O.setDate(O.getDate() - 6))),
                            (O = new Date(O.setHours(0))),
                            (O = new Date(O.setMinutes(0))),
                            r(O),
                            o($);
                        break;
                    case "month":
                        (O = new Date(O.setDate(O.getDate() - 30))),
                            (O = new Date(O.setHours(0))),
                            (O = new Date(O.setMinutes(0))),
                            r(O),
                            o($);
                        break;
                    case "init":
                        r(null), o(null);
                        break;
                    default:
                        r(O), o($);
                }
            },
            K = async () => {
                const j = await Yg();
                console.log(j), j != null ? y(j) : y([]);
            },
            X = async () => {
                const j = await Z_();
                console.log(j), j != null ? P(j) : P([]);
            };
        return (
            x.useEffect(() => {
                K(), X();
            }, []),
            x.useEffect(() => {
                if (n !== null && a !== null) {
                    const j = _s(n),
                        O = _s(a);
                    t(`${j.str} - ${O.str}`);
                } else t("");
            }, [n, a]),
            f.jsx("div", {
                className: "eventFilter",
                children: f.jsxs("div", {
                    className: "optionWrap",
                    children: [
                        f.jsx("div", {
                            className: "resetWrap",
                            children: f.jsx("button", {
                                className:
                                    e == "" && i.length == 0 && l.length == 0
                                        ? "btn-1 btn-wh-m btn-round-square"
                                        : "btn-3 btn-wh-m btn-round-square",
                                onClick: b,
                                children: f.jsx(Sk, { className: "icon_16" }),
                            }),
                        }),
                        f.jsxs("div", {
                            className: "datetimeWrap optWrap",
                            children: [
                                f.jsx("input", {
                                    type: "checkbox",
                                    id: "datetime",
                                    onClick: () => {
                                        S("datetime");
                                    },
                                    checked: p,
                                }),
                                f.jsxs("label", {
                                    className:
                                        e == ""
                                            ? "btn-1 btn-sm btn-round-square"
                                            : "btn-1 btn-sm btn-round-square active",
                                    htmlFor: "datetime",
                                    children: [
                                        f.jsx(gk, {}),
                                        "날짜 및 시간",
                                        e &&
                                            f.jsxs(f.Fragment, {
                                                children: ["(", e, ")"],
                                            }),
                                    ],
                                }),
                                f.jsxs("div", {
                                    className: "dropDownWrap datetime",
                                    children: [
                                        f.jsxs("div", {
                                            className: "detailWrap",
                                            children: [
                                                f.jsxs("div", {
                                                    className: "startWrap",
                                                    children: [
                                                        f.jsx("p", {
                                                            children:
                                                                "시작일/시",
                                                        }),
                                                        f.jsx(Lh, {
                                                            className:
                                                                "datePicker",
                                                            locale: jh,
                                                            selected: n,
                                                            dateFormat:
                                                                "yyyy/MM/dd - aa h:mm",
                                                            showTimeSelect: !0,
                                                            placeholderText:
                                                                "날짜 및 시간",
                                                            autoComplete: "off",
                                                            onChange: (j) => {
                                                                r(j);
                                                            },
                                                        }),
                                                    ],
                                                }),
                                                f.jsx("span", {
                                                    children: "-",
                                                }),
                                                f.jsxs("div", {
                                                    className: "endWrap",
                                                    children: [
                                                        f.jsx("p", {
                                                            children:
                                                                "종료일/시",
                                                        }),
                                                        f.jsx(Lh, {
                                                            className:
                                                                "datePicker",
                                                            locale: jh,
                                                            selected: a,
                                                            dateFormat:
                                                                "yyyy/MM/dd - aa h:mm",
                                                            showTimeSelect: !0,
                                                            placeholderText:
                                                                "날짜 및 시간",
                                                            autoComplete: "off",
                                                            onChange: (j) => {
                                                                o(j);
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        f.jsxs("div", {
                                            className: "shortCutWrap",
                                            children: [
                                                f.jsx("button", {
                                                    className:
                                                        "btn-1 btn-sm btn-round-square",
                                                    onClick: () => {
                                                        z("today");
                                                    },
                                                    children: "오늘",
                                                }),
                                                f.jsx("button", {
                                                    className:
                                                        "btn-1 btn-sm btn-round-square",
                                                    onClick: () => {
                                                        z("yesterday");
                                                    },
                                                    children: "어제",
                                                }),
                                                f.jsx("button", {
                                                    className:
                                                        "btn-1 btn-sm btn-round-square",
                                                    onClick: () => {
                                                        z("week");
                                                    },
                                                    children: "일주일",
                                                }),
                                                f.jsx("button", {
                                                    className:
                                                        "btn-1 btn-sm btn-round-square",
                                                    onClick: () => {
                                                        z("month");
                                                    },
                                                    children: "한달",
                                                }),
                                                f.jsx("button", {
                                                    className:
                                                        "btn-1 btn-sm btn-round-square",
                                                    onClick: () => {
                                                        z("init");
                                                    },
                                                    children: "초기화",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        f.jsxs("div", {
                            className: "locationWrap optWrap",
                            children: [
                                f.jsx("input", {
                                    type: "checkbox",
                                    id: "location",
                                    onClick: () => {
                                        S("location");
                                    },
                                    checked: g,
                                }),
                                f.jsxs("label", {
                                    className:
                                        i.length == 0
                                            ? "btn-1 btn-sm btn-round-square"
                                            : "btn-1 btn-sm btn-round-square active",
                                    htmlFor: "location",
                                    children: [
                                        f.jsx(Dk, {}),
                                        "발생 위치",
                                        i.length !== 0 &&
                                            f.jsxs(f.Fragment, {
                                                children: [
                                                    "(",
                                                    i.join(", "),
                                                    ")",
                                                ],
                                            }),
                                    ],
                                }),
                                f.jsxs("div", {
                                    className: "dropDownWrap",
                                    children: [
                                        f.jsx("div", {
                                            className: "summaryWrap",
                                            children: f.jsxs("p", {
                                                children: [
                                                    "총 ",
                                                    m.length,
                                                    "개 위치",
                                                ],
                                            }),
                                        }),
                                        m.map((j, O) =>
                                            f.jsxs(f.Fragment, {
                                                children: [
                                                    f.jsx("input", {
                                                        type: "checkbox",
                                                        name: "location",
                                                        id: `lddo${O}`,
                                                        value: j[1],
                                                        onChange: () => {
                                                            F("location");
                                                        },
                                                    }),
                                                    f.jsxs("label", {
                                                        className:
                                                            "dropDownOption",
                                                        htmlFor: `lddo${O}`,
                                                        children: [
                                                            f.jsx(qp, {}),
                                                            j[1],
                                                        ],
                                                    }),
                                                ],
                                            })
                                        ),
                                    ],
                                }),
                            ],
                        }),
                        f.jsxs("div", {
                            className: "typeWrap optWrap",
                            children: [
                                f.jsx("input", {
                                    type: "checkbox",
                                    id: "type",
                                    onClick: () => {
                                        S("type");
                                    },
                                    checked: k,
                                }),
                                f.jsxs("label", {
                                    className:
                                        l.length == 0
                                            ? "btn-1 btn-sm btn-round-square"
                                            : "btn-1 btn-sm btn-round-square active",
                                    htmlFor: "type",
                                    children: [
                                        f.jsx(bk, {}),
                                        "발생 이벤트",
                                        l.length !== 0 &&
                                            f.jsxs(f.Fragment, {
                                                children: [
                                                    "(",
                                                    l.join(", "),
                                                    ")",
                                                ],
                                            }),
                                    ],
                                }),
                                f.jsxs("div", {
                                    className: "dropDownWrap",
                                    children: [
                                        f.jsx("div", {
                                            className: "summaryWrap",
                                            children: f.jsxs("p", {
                                                children: [
                                                    "총 ",
                                                    C.length,
                                                    "개 발생 이벤트",
                                                ],
                                            }),
                                        }),
                                        C.map((j, O) =>
                                            f.jsxs(f.Fragment, {
                                                children: [
                                                    f.jsx("input", {
                                                        type: "checkbox",
                                                        name: "type",
                                                        id: `tddo${O}`,
                                                        value: j[1],
                                                        onChange: () => {
                                                            F("type");
                                                        },
                                                    }),
                                                    f.jsxs("label", {
                                                        className:
                                                            "dropDownOption",
                                                        htmlFor: `tddo${O}`,
                                                        children: [
                                                            f.jsx(qp, {}),
                                                            j[1],
                                                        ],
                                                    }),
                                                ],
                                            })
                                        ),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            })
        );
    },
    Ih = (e, t = 1) => {
        let n = [];
        for (let r = t; r < e + t; r++) n.push(r);
        return n;
    },
    tb = (e, t) => {
        e += 1;
        let n = [];
        if (
            (e > 3 ? (n = [e - 3, e - 2, e - 1, e]) : (n = Ih(e, 1)),
            console.log(n),
            t - 3 > e)
        )
            n = [...n, e + 1, e + 2, e + 3];
        else {
            let r = Ih(t - e - 2, e + 1);
            n = [...n, ...r];
        }
        return console.log(n), n;
    },
    nb = ({ data: e }) => {
        const [t, n] = x.useState([]),
            [r, a] = x.useState([]),
            [o, i] = x.useState(0),
            [s, l] = x.useState(0),
            [u, c] = x.useState(10);
        return (
            x.useEffect(() => {
                n(e);
            }, []),
            x.useEffect(() => {
                i(0), l(Math.floor(t.length / u));
            }, [t]),
            x.useEffect(() => {
                let d = o * u,
                    p = (o + 1) * u;
                p >= t.length && (p = t.length), a(t.slice(d, p));
            }, [t, o, s, u]),
            f.jsxs("div", {
                id: "eventList",
                children: [
                    f.jsxs("div", {
                        className: "headerWrap",
                        children: [
                            f.jsx("p", {
                                className: "title",
                                children: "유치실 이벤트 내역",
                            }),
                            f.jsx("div", {
                                className: "funcWrap",
                                children: f.jsx("button", {
                                    className: "btn-2 btn-sm btn-round",
                                    children: "전체 보기",
                                }),
                            }),
                        ],
                    }),
                    f.jsx("div", {
                        className: "tableWrap",
                        children: f.jsx(rb, { data: r }, r),
                    }),
                    f.jsx("div", {
                        className: "pageControlWrap",
                        children: f.jsx(ob, {
                            curPage: o,
                            lastPage: s,
                            changePage: i,
                        }),
                    }),
                ],
            })
        );
    },
    rb = ({ data: e }) =>
        f.jsxs("table", {
            className: "eventTable",
            children: [
                f.jsxs("tr", {
                    children: [
                        f.jsx("th", {
                            className: "location",
                            children: "이벤트 발생 위치",
                        }),
                        f.jsx("th", {
                            className: "time",
                            children: "이벤트 발생 일시",
                        }),
                        f.jsx("th", {
                            className: "type",
                            children: "이벤트명",
                        }),
                        f.jsx("th", { className: "dummy" }),
                        f.jsx("th", {
                            className: "check",
                            children: "이벤트 확인 일시",
                        }),
                        f.jsx("th", { className: "detail" }),
                    ],
                }),
                e.map((t, n) => f.jsx(ab, { data: t }, n)),
            ],
        }),
    ab = ({ data: e }) => {
        const [t, n] = x.useState({}),
            r = (a) => {
                let o = {};
                (o.id = a[0]),
                    (o.type = a[1]),
                    (o.location = a[2]),
                    (o.occured = a[3]),
                    (o.checked = a[4]),
                    n(o);
            };
        return (
            x.useEffect(() => {
                r(e);
            }, []),
            f.jsxs("tr", {
                className: "eventItem",
                children: [
                    f.jsx("td", {
                        className: "location",
                        children: t.location,
                    }),
                    f.jsx("td", { className: "time", children: t.occured }),
                    f.jsx("td", { className: "type", children: t.type }),
                    f.jsx("td", { className: "dummy" }),
                    f.jsx("td", { className: "check", children: t.checked }),
                    f.jsx("td", {
                        className: "detail",
                        children: f.jsx("button", {
                            className: "btn-1 btn-m btn-round",
                            children: "이벤트 상세 보기",
                        }),
                    }),
                ],
            })
        );
    },
    ob = ({ curPage: e, lastPage: t, changePage: n }) => {
        const [r, a] = x.useState([]),
            o = () => {
                n(0);
            },
            i = () => {
                n(t);
            },
            s = () => {
                e > 0 && n(e - 1);
            },
            l = () => {
                e < t && n(e + 1);
            };
        return (
            x.useEffect(() => {
                const u = tb(e, t);
                a(u);
            }, [e]),
            f.jsxs("div", {
                className: "pageController",
                children: [
                    f.jsx("button", {
                        className: "btn-2 btn-wh-sm btn-round-square",
                        onClick: o,
                        children: f.jsx(wk, {}),
                    }),
                    f.jsx("button", {
                        className: "btn-2 btn-wh-sm btn-round-square",
                        onClick: s,
                        children: f.jsx(yk, {}),
                    }),
                    f.jsx("div", {
                        className: "indicatorWrap",
                        children: r.map((u, c) =>
                            f.jsx(
                                "button",
                                {
                                    className:
                                        u - 1 == e
                                            ? "indicator btn-3 btn-wh-sm btn-round-square"
                                            : "indicator btn-1 btn-wh-sm btn-round-square",
                                    onClick: () => {
                                        n(u - 1);
                                    },
                                    children: f.jsx("span", { children: u }),
                                },
                                `indicator${c}`
                            )
                        ),
                    }),
                    f.jsx("button", {
                        className: "btn-2 btn-wh-sm btn-round-square",
                        onClick: l,
                        children: f.jsx(Hg, {}),
                    }),
                    f.jsx("button", {
                        className: "btn-2 btn-wh-sm btn-round-square",
                        onClick: i,
                        children: f.jsx(xk, {}),
                    }),
                ],
            })
        );
    },
    ib = () => {
        const [e, t] = x.useState([]),
            [n, r] = x.useState(""),
            [a, o] = x.useState(null),
            [i, s] = x.useState(null),
            [l, u] = x.useState([]),
            [c, d] = x.useState([]),
            p = async () => {
                const v = await Td();
                v != null ? t(v) : t([]);
            };
        return (
            x.useEffect(() => {
                p();
            }, [a, i, l, c]),
            f.jsxs("div", {
                id: "eventManagePage",
                className: "page",
                children: [
                    f.jsx("div", {
                        className: "filterContainer",
                        children: f.jsx(eb, {
                            datetime: n,
                            setDatetime: r,
                            startDatetime: a,
                            setStartDatetime: o,
                            endDatetime: i,
                            setEndDatetime: s,
                            location: l,
                            setLocation: u,
                            type: c,
                            setType: d,
                        }),
                    }),
                    f.jsx("div", {
                        className: "eventContainer",
                        children: f.jsx(nb, { data: e }, e.length),
                    }),
                ],
            })
        );
    },
    xl = "https://localhost:40000/cctv",
    sb = async (e, t) => {
        try {
            return (await ce.post(xl + "/create", { name: e, url: t })).data;
        } catch (n) {
            return (
                console.error(
                    "Error occured in services.cctvService.create",
                    n
                ),
                { err: n }
            );
        }
    },
    Xd = async () => {
        try {
            return (await ce.post(xl + "/read")).data;
        } catch (e) {
            return (
                console.error("Error occured in services.cctvService.read", e),
                { err: e }
            );
        }
    },
    lb = async (e, t, n) => {
        try {
            return (
                await ce.post(xl + "/update", { target: e, name: t, url: n })
            ).data;
        } catch (r) {
            return (
                console.error(
                    "Error occured in services.cctvService.delete",
                    r
                ),
                { err: r }
            );
        }
    },
    ub = async (e) => {
        try {
            return (await ce.post(xl + "/delete", { target: e })).data;
        } catch (t) {
            return (
                console.error(
                    "Error occured in services.cctvService.delete",
                    t
                ),
                { err: t }
            );
        }
    },
    cb = ({ toggle: e }) => {
        const [t, n] = x.useState(""),
            [r, a] = x.useState(""),
            o = (s, l) => {
                s == "name" ? n(l) : s == "url" && a(l);
            },
            i = async (s, l) => {
                if (s != "" && l != "") {
                    const u = await sb(s, l);
                    console.log(u),
                        u
                            ? (window.alert("성공적으로 등록되었습니다."),
                              e(!1))
                            : window.alert("등록에 실패하였습니다.");
                }
            };
        return f.jsxs("div", {
            id: "cctvRegister",
            children: [
                f.jsxs("div", {
                    className: "headerWrap",
                    children: [
                        f.jsx(Od, {}),
                        f.jsx("p", {
                            className: "title",
                            children: "CCTV 등록",
                        }),
                    ],
                }),
                f.jsxs("div", {
                    className: "inputDataWrap",
                    children: [
                        f.jsxs("div", {
                            className: "nameWrap inputGroupWrap",
                            children: [
                                f.jsx("p", {
                                    className: "title",
                                    children: "CCTV명",
                                }),
                                f.jsxs("div", {
                                    className: "inputWrap",
                                    children: [
                                        f.jsx("input", {
                                            type: "text",
                                            placeholder:
                                                "24자 이하로 작성해주세요.",
                                            onChange: (s) => {
                                                o("name", s.target.value);
                                            },
                                            defaultValue: t,
                                        }),
                                        f.jsx("button", {
                                            className: "btn-1 btn-sm btn-round",
                                            children: "중복 확인",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        f.jsxs("div", {
                            className: "urlWrap inputGroupWrap",
                            children: [
                                f.jsx("p", {
                                    className: "title",
                                    children: "CCTV URL",
                                }),
                                f.jsxs("div", {
                                    className: "inputWrap",
                                    children: [
                                        f.jsx("input", {
                                            type: "text",
                                            placeholder:
                                                "CCTV RTSP URL을 입력해주세요.",
                                            onChange: (s) => {
                                                o("url", s.target.value);
                                            },
                                            defaultValue: r,
                                        }),
                                        f.jsx("button", {
                                            className: "btn-1 btn-sm btn-round",
                                            children: "유효성검사",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                f.jsx("div", {
                    className: "testWrap",
                    children: f.jsx(fl, {}),
                }),
                f.jsxs("div", {
                    className: "footerWrap",
                    children: [
                        f.jsx("button", {
                            className: "btn-2 btn-lg btn-round",
                            onClick: () => {
                                i(t, r);
                            },
                            children: "등록",
                        }),
                        f.jsx("button", {
                            className: "btn-1 btn-lg btn-round",
                            onClick: () => {
                                e(!1);
                            },
                            children: "취소",
                        }),
                    ],
                }),
            ],
        });
    },
    db = ({ toggle: e, data: t }) => {
        const [n, r] = x.useState(t),
            a = (i, s) => {
                let l = { ...n };
                (l[i] = s), r(l);
            },
            o = async () => {
                const i = n.id,
                    s = n.name,
                    l = n.url;
                (await lb(i, s, l))
                    ? (window.alert("성공적으로 수정되었습니다."), e(!1))
                    : window.alert("수정에 실패하였습니다.");
            };
        return f.jsxs("div", {
            id: "cctvModify",
            children: [
                f.jsxs("div", {
                    className: "headerWrap",
                    children: [
                        f.jsx(Od, {}),
                        f.jsx("p", {
                            className: "title",
                            children: "CCTV 수정",
                        }),
                    ],
                }),
                f.jsxs("div", {
                    className: "inputDataWrap",
                    children: [
                        f.jsxs("div", {
                            className: "nameWrap inputGroupWrap",
                            children: [
                                f.jsx("p", {
                                    className: "title",
                                    children: "CCTV명",
                                }),
                                f.jsxs("div", {
                                    className: "inputWrap",
                                    children: [
                                        f.jsx("input", {
                                            type: "text",
                                            placeholder:
                                                "24자 이하로 작성해주세요.",
                                            defaultValue: n.name,
                                            onChange: (i) => {
                                                a("name", i.target.value);
                                            },
                                        }),
                                        f.jsx("button", {
                                            className: "btn-1 btn-sm btn-round",
                                            children: "중복 확인",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        f.jsxs("div", {
                            className: "urlWrap inputGroupWrap",
                            children: [
                                f.jsx("p", {
                                    className: "title",
                                    children: "CCTV URL",
                                }),
                                f.jsxs("div", {
                                    className: "inputWrap",
                                    children: [
                                        f.jsx("input", {
                                            type: "text",
                                            placeholder:
                                                "CCTV RTSP URL을 입력해주세요.",
                                            defaultValue: n.url,
                                            onChange: (i) => {
                                                a("url", i.target.value);
                                            },
                                        }),
                                        f.jsx("button", {
                                            className: "btn-1 btn-sm btn-round",
                                            children: "유효성검사",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                f.jsx("div", {
                    className: "testWrap",
                    children: f.jsx(fl, {}),
                }),
                f.jsxs("div", {
                    className: "footerWrap",
                    children: [
                        f.jsx("button", {
                            className: "btn-2 btn-lg btn-round",
                            onClick: () => {
                                o();
                            },
                            children: "수정",
                        }),
                        f.jsx("button", {
                            className: "btn-1 btn-lg btn-round",
                            onClick: () => {
                                e(!1);
                            },
                            children: "취소",
                        }),
                    ],
                }),
            ],
        });
    },
    fb = ({ toggle: e, data: t }) => {
        const [n, r] = x.useState(t),
            a = async () => {
                const o = n.id;
                (await ub(o))
                    ? (window.alert("성공적으로 삭제되었습니다."), e(!1))
                    : window.alert("삭제에 실패하였습니다.");
            };
        return f.jsxs("div", {
            id: "cctvDelete",
            children: [
                f.jsxs("div", {
                    className: "headerWrap",
                    children: [
                        f.jsx(Od, {}),
                        f.jsx("p", {
                            className: "title",
                            children: "CCTV 삭제",
                        }),
                    ],
                }),
                f.jsxs("div", {
                    className: "msg msgDanger",
                    children: [
                        f.jsx(jd, {}),
                        f.jsx("p", {
                            children: "이 동작은 되돌릴 수 없습니다.",
                        }),
                    ],
                }),
                f.jsxs("div", {
                    className: "inputDataWrap",
                    children: [
                        f.jsxs("div", {
                            className: "idWrap inputGroupWrap",
                            children: [
                                f.jsx("p", {
                                    className: "title",
                                    children: "CCTV ID",
                                }),
                                f.jsx("div", {
                                    className: "inputWrap",
                                    children: f.jsx("input", {
                                        type: "text",
                                        value: n.id,
                                        disabled: !0,
                                    }),
                                }),
                            ],
                        }),
                        f.jsxs("div", {
                            className: "nameWrap inputGroupWrap",
                            children: [
                                f.jsx("p", {
                                    className: "title",
                                    children: "CCTV명",
                                }),
                                f.jsx("div", {
                                    className: "inputWrap",
                                    children: f.jsx("input", {
                                        type: "text",
                                        value: n.name,
                                        disabled: !0,
                                    }),
                                }),
                            ],
                        }),
                        f.jsxs("div", {
                            className: "urlWrap inputGroupWrap",
                            children: [
                                f.jsx("p", {
                                    className: "title",
                                    children: "CCTV URL",
                                }),
                                f.jsx("div", {
                                    className: "inputWrap",
                                    children: f.jsx("input", {
                                        type: "text",
                                        value: n.url,
                                        disabled: !0,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                f.jsxs("div", {
                    className: "footerWrap",
                    children: [
                        f.jsx("button", {
                            className: "btn-2 btn-lg btn-round",
                            onClick: () => {
                                a();
                            },
                            children: "삭제",
                        }),
                        f.jsx("button", {
                            className: "btn-1 btn-lg btn-round",
                            onClick: () => {
                                e(!1);
                            },
                            children: "취소",
                        }),
                    ],
                }),
            ],
        });
    },
    ga = ({ toggle: e, child: t }) =>
        f.jsx("div", {
            className: "dimmed",
            onClick: (n) => {
                n.stopPropagation(), e(!1);
            },
            children: f.jsx("div", {
                className: "componentConatiner",
                onClick: (n) => {
                    n.stopPropagation();
                },
                children: t,
            }),
        }),
    pb = () => {
        const [e, t] = x.useState(!1),
            [n, r] = x.useState(""),
            [a, o] = x.useState([]),
            i = async () => {
                const s = await Xd();
                s != null ? o(s) : o([]);
            };
        return (
            x.useEffect(() => {
                e == !1 && (r(""), console.log("load new data"), i());
            }, [e]),
            f.jsxs("div", {
                id: "cctvList",
                children: [
                    f.jsxs("div", {
                        className: "headerWrap",
                        children: [
                            f.jsx("p", {
                                className: "title",
                                children: "CCTV 관리",
                            }),
                            f.jsx("div", {
                                className: "funcWrap",
                                children: f.jsx("button", {
                                    className: "btn-2 btn-m btn-round",
                                    onClick: () => {
                                        t(!0), r("register");
                                    },
                                    children: "CCTV 등록",
                                }),
                            }),
                        ],
                    }),
                    f.jsx("div", {
                        className: "tableWrap",
                        children: f.jsx(
                            hb,
                            { setTarget: t, setMethod: r, data: a },
                            a
                        ),
                    }),
                    e &&
                        n == "register" &&
                        f.jsx(ga, {
                            toggle: t,
                            child: f.jsx(cb, { toggle: t }),
                        }),
                    e &&
                        n == "modify" &&
                        f.jsx(ga, {
                            toggle: t,
                            child: f.jsx(db, { toggle: t, data: e }),
                        }),
                    e &&
                        n == "delete" &&
                        f.jsx(ga, {
                            toggle: t,
                            child: f.jsx(fb, { toggle: t, data: e }),
                        }),
                ],
            })
        );
    },
    hb = ({ setTarget: e, setMethod: t, data: n }) => {
        const [r, a] = x.useState([]);
        return (
            x.useEffect(() => {
                a(n);
            }, []),
            f.jsxs("table", {
                className: "cctvTable",
                children: [
                    f.jsxs("tr", {
                        children: [
                            f.jsx("th", { className: "id", children: "ID" }),
                            f.jsx("th", {
                                className: "name",
                                children: "CCTV명",
                            }),
                            f.jsx("th", { className: "url", children: "URL" }),
                            f.jsx("th", {
                                className: "createat",
                                children: "등록일시",
                            }),
                            f.jsx("th", { className: "rename" }),
                            f.jsx("th", { className: "delete" }),
                        ],
                    }),
                    r.map((o, i) =>
                        f.jsx(mb, { setTarget: e, setMethod: t, data: o }, i)
                    ),
                ],
            })
        );
    },
    mb = ({ setTarget: e, setMethod: t, data: n }) => {
        const [r, a] = x.useState({}),
            o = (i) => {
                let s = {};
                (s.id = i[0]),
                    (s.name = i[1]),
                    (s.url = i[2]),
                    (s.createat = i[3]),
                    a(s);
            };
        return (
            x.useEffect(() => {
                o(n);
            }, []),
            f.jsxs("tr", {
                className: "cctvItem",
                children: [
                    f.jsx("td", { className: "id", children: r.id }),
                    f.jsx("td", { className: "name", children: r.name }),
                    f.jsx("td", { className: "url", children: r.url }),
                    f.jsx("td", {
                        className: "createat",
                        children: r.createat,
                    }),
                    f.jsx("td", {
                        className: "rename",
                        children: f.jsx("button", {
                            className: "btn-1 btn-m btn-round",
                            onClick: () => {
                                e(r), t("modify");
                            },
                            children: "수정",
                        }),
                    }),
                    f.jsx("td", {
                        className: "delete",
                        children: f.jsx("button", {
                            className: "btn-1 btn-m btn-round",
                            onClick: () => {
                                e(r), t("delete");
                            },
                            children: "삭제",
                        }),
                    }),
                ],
            })
        );
    },
    vb = () =>
        f.jsx("div", {
            id: "cctvManagePage",
            className: "page",
            children: f.jsx("div", {
                className: "cctvContainer",
                children: f.jsx(pb, {}),
            }),
        }),
    gb = ({ toggle: e }) => {
        const [t, n] = x.useState(""),
            [r, a] = x.useState(-1),
            [o, i] = x.useState([]),
            s = (c, d) => {
                c == "name" ? n(d) : c == "cctv" && a(d);
            },
            l = async () => {
                const c = await Xd();
                c != null ? i(c) : i([]);
            },
            u = async (c, d) => {
                c != "" &&
                    d != "" &&
                    ((await lk(c, d))
                        ? (window.alert("성공적으로 등록되었습니다."), e(!1))
                        : window.alert("등록에 실패하였습니다."));
            };
        return (
            x.useEffect(() => {
                l();
            }, []),
            f.jsxs("div", {
                id: "locationRegister",
                children: [
                    f.jsxs("div", {
                        className: "headerWrap",
                        children: [
                            f.jsx(Ld, {}),
                            f.jsx("p", {
                                className: "title",
                                children: "유치실 등록",
                            }),
                        ],
                    }),
                    f.jsxs("div", {
                        className: "inputDataWrap",
                        children: [
                            f.jsxs("div", {
                                className: "nameWrap inputGroupWrap",
                                children: [
                                    f.jsx("p", {
                                        className: "title",
                                        children: "유치실 명",
                                    }),
                                    f.jsxs("div", {
                                        className: "inputWrap",
                                        children: [
                                            f.jsx("input", {
                                                type: "text",
                                                placeholder:
                                                    "24자 이하로 작성해주세요.",
                                                onChange: (c) => {
                                                    s("name", c.target.value);
                                                },
                                                defaultValue: t,
                                            }),
                                            f.jsx("button", {
                                                className:
                                                    "btn-1 btn-sm btn-round",
                                                children: "중복 확인",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            f.jsxs("div", {
                                className: "urlWrap inputGroupWrap",
                                children: [
                                    f.jsx("p", {
                                        className: "title",
                                        children: "CCTV",
                                    }),
                                    f.jsx("div", {
                                        className: "inputWrap",
                                        children: f.jsxs("select", {
                                            onChange: (c) => {
                                                s("cctv", c.target.value);
                                            },
                                            children: [
                                                f.jsx("option", {
                                                    value: -1,
                                                    selected: !0,
                                                    children: "-",
                                                }),
                                                o.map((c, d) =>
                                                    f.jsx(
                                                        "option",
                                                        {
                                                            value: c[0],
                                                            children: c[1],
                                                        },
                                                        d
                                                    )
                                                ),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    f.jsxs("div", {
                        className: "footerWrap",
                        children: [
                            f.jsx("button", {
                                className: "btn-2 btn-lg btn-round",
                                onClick: () => {
                                    u(t, r);
                                },
                                children: "등록",
                            }),
                            f.jsx("button", {
                                className: "btn-1 btn-lg btn-round",
                                onClick: () => {
                                    e(!1);
                                },
                                children: "취소",
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    yb = ({ toggle: e, data: t }) => {
        const [n, r] = x.useState(t),
            [a, o] = x.useState([]),
            i = (u, c) => {
                let d = { ...n };
                (d[u] = c), r(d);
            },
            s = async () => {
                const u = await Xd();
                u != null ? o(u) : o([]);
            },
            l = async () => {
                const u = n.id,
                    c = n.name,
                    d = n.cctv;
                (await uk(u, c, d))
                    ? (window.alert("성공적으로 수정되었습니다."), e(!1))
                    : window.alert("수정에 실패하였습니다.");
            };
        return (
            x.useEffect(() => {
                s();
            }, []),
            f.jsxs("div", {
                id: "locationModify",
                children: [
                    f.jsxs("div", {
                        className: "headerWrap",
                        children: [
                            f.jsx(Ld, {}),
                            f.jsx("p", {
                                className: "title",
                                children: "유치실 수정",
                            }),
                        ],
                    }),
                    f.jsxs("div", {
                        className: "inputDataWrap",
                        children: [
                            f.jsxs("div", {
                                className: "nameWrap inputGroupWrap",
                                children: [
                                    f.jsx("p", {
                                        className: "title",
                                        children: "유치실 명",
                                    }),
                                    f.jsxs("div", {
                                        className: "inputWrap",
                                        children: [
                                            f.jsx("input", {
                                                type: "text",
                                                placeholder:
                                                    "24자 이하로 작성해주세요.",
                                                onChange: (u) => {
                                                    i("name", u.target.value);
                                                },
                                                defaultValue: n.name,
                                            }),
                                            f.jsx("button", {
                                                className:
                                                    "btn-1 btn-sm btn-round",
                                                children: "중복 확인",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            f.jsxs("div", {
                                className: "urlWrap inputGroupWrap",
                                children: [
                                    f.jsx("p", {
                                        className: "title",
                                        children: "CCTV",
                                    }),
                                    f.jsx("div", {
                                        className: "inputWrap",
                                        children: f.jsxs("select", {
                                            onChange: (u) => {
                                                i("cctv", u.target.value);
                                            },
                                            children: [
                                                f.jsx("option", {
                                                    value: -1,
                                                    children: "-",
                                                }),
                                                a.map((u, c) =>
                                                    f.jsx(
                                                        "option",
                                                        {
                                                            value: u[0],
                                                            selected:
                                                                n.cctv == u[1],
                                                            children: u[1],
                                                        },
                                                        c
                                                    )
                                                ),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    f.jsxs("div", {
                        className: "footerWrap",
                        children: [
                            f.jsx("button", {
                                className: "btn-2 btn-lg btn-round",
                                onClick: () => {
                                    l();
                                },
                                children: "수정",
                            }),
                            f.jsx("button", {
                                className: "btn-1 btn-lg btn-round",
                                onClick: () => {
                                    e(!1);
                                },
                                children: "취소",
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    wb = ({ toggle: e, data: t }) => {
        const [n, r] = x.useState(t),
            a = async () => {
                const o = n.id;
                (await ck(o))
                    ? (window.alert("성공적으로 삭제되었습니다."), e(!1))
                    : window.alert("삭제에 실패하였습니다.");
            };
        return f.jsxs("div", {
            id: "locationDelete",
            children: [
                f.jsxs("div", {
                    className: "headerWrap",
                    children: [
                        f.jsx(Ld, {}),
                        f.jsx("p", {
                            className: "title",
                            children: "유치실 삭제",
                        }),
                    ],
                }),
                f.jsxs("div", {
                    className: "msg msgDanger",
                    children: [
                        f.jsx(jd, {}),
                        f.jsx("p", {
                            children: "이 동작은 되돌릴 수 없습니다.",
                        }),
                    ],
                }),
                f.jsxs("div", {
                    className: "inputDataWrap",
                    children: [
                        f.jsxs("div", {
                            className: "idWrap inputGroupWrap",
                            children: [
                                f.jsx("p", {
                                    className: "title",
                                    children: "유치실 ID",
                                }),
                                f.jsx("div", {
                                    className: "inputWrap",
                                    children: f.jsx("input", {
                                        type: "text",
                                        value: n.id,
                                        disabled: !0,
                                    }),
                                }),
                            ],
                        }),
                        f.jsxs("div", {
                            className: "nameWrap inputGroupWrap",
                            children: [
                                f.jsx("p", {
                                    className: "title",
                                    children: "유치실 명",
                                }),
                                f.jsx("div", {
                                    className: "inputWrap",
                                    children: f.jsx("input", {
                                        type: "text",
                                        value: n.name,
                                        disabled: !0,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                f.jsxs("div", {
                    className: "footerWrap",
                    children: [
                        f.jsx("button", {
                            className: "btn-2 btn-lg btn-round",
                            onClick: () => {
                                a();
                            },
                            children: "삭제",
                        }),
                        f.jsx("button", {
                            className: "btn-1 btn-lg btn-round",
                            onClick: () => {
                                e(!1);
                            },
                            children: "취소",
                        }),
                    ],
                }),
            ],
        });
    },
    xb = () => {
        const [e, t] = x.useState(!1),
            [n, r] = x.useState(""),
            [a, o] = x.useState([]),
            i = async () => {
                const s = await Yg();
                s != null ? o(s) : o([]);
            };
        return (
            x.useEffect(() => {
                e == !1 && (r(""), i());
            }, [e]),
            f.jsxs("div", {
                id: "locationList",
                children: [
                    f.jsxs("div", {
                        className: "headerWrap",
                        children: [
                            f.jsx("p", {
                                className: "title",
                                children: "유치실 관리",
                            }),
                            f.jsx("div", {
                                className: "funcWrap",
                                children: f.jsx("button", {
                                    className: "btn-2 btn-m btn-round",
                                    onClick: () => {
                                        t(!0), r("register");
                                    },
                                    children: "유치실 등록",
                                }),
                            }),
                        ],
                    }),
                    f.jsx("div", {
                        className: "tableWrap",
                        children: f.jsx(
                            Db,
                            { setTarget: t, setMethod: r, data: a },
                            a
                        ),
                    }),
                    e &&
                        n == "register" &&
                        f.jsx(ga, {
                            toggle: t,
                            child: f.jsx(gb, { toggle: t }),
                        }),
                    e &&
                        n == "modify" &&
                        f.jsx(ga, {
                            toggle: t,
                            child: f.jsx(yb, { toggle: t, data: e }),
                        }),
                    e &&
                        n == "delete" &&
                        f.jsx(ga, {
                            toggle: t,
                            child: f.jsx(wb, { toggle: t, data: e }),
                        }),
                ],
            })
        );
    },
    Db = ({ setTarget: e, setMethod: t, data: n }) => {
        const [r, a] = x.useState([]);
        return (
            x.useEffect(() => {
                a(n);
            }, []),
            f.jsxs("table", {
                className: "locationTable",
                children: [
                    f.jsxs("tr", {
                        children: [
                            f.jsx("th", { className: "id", children: "ID" }),
                            f.jsx("th", {
                                className: "name",
                                children: "유치실 명",
                            }),
                            f.jsx("th", {
                                className: "cctv",
                                children: "유치실 CCTV",
                            }),
                            f.jsx("th", { className: "rename" }),
                            f.jsx("th", { className: "delete" }),
                        ],
                    }),
                    r.map((o, i) =>
                        f.jsx(kb, { setTarget: e, setMethod: t, data: o }, i)
                    ),
                ],
            })
        );
    },
    kb = ({ setTarget: e, setMethod: t, data: n }) => {
        const [r, a] = x.useState({}),
            o = (i) => {
                let s = {};
                (s.id = i[0]), (s.name = i[1]), (s.cctv = i[3]), a(s);
            };
        return (
            x.useEffect(() => {
                o(n);
            }, []),
            f.jsxs("tr", {
                className: "locationItem",
                children: [
                    f.jsx("td", { className: "id", children: r.id }),
                    f.jsx("td", { className: "name", children: r.name }),
                    f.jsx("td", { className: "cctv", children: r.cctv }),
                    f.jsx("td", {
                        className: "rename",
                        children: f.jsx("button", {
                            className: "btn-1 btn-m btn-round",
                            onClick: () => {
                                e(r), t("modify");
                            },
                            children: "수정",
                        }),
                    }),
                    f.jsx("td", {
                        className: "delete",
                        children: f.jsx("button", {
                            className: "btn-1 btn-m btn-round",
                            onClick: () => {
                                e(r), t("delete");
                            },
                            children: "삭제",
                        }),
                    }),
                ],
            })
        );
    },
    Sb = () =>
        f.jsx("div", {
            id: "locationManagePage",
            className: "page",
            children: f.jsx("div", {
                className: "locationContainer",
                children: f.jsx(xb, {}),
            }),
        }),
    Eb = () => {
        const e = Xo();
        return f.jsxs("div", {
            id: "notFoundPage",
            className: "page",
            children: [
                f.jsx(jd, {}),
                f.jsx("p", { children: "페이지를 찾을 수 없습니다." }),
                f.jsx("button", {
                    className: "btn-1 btn-m btn-round-square",
                    onClick: () => {
                        e("/");
                    },
                    children: "메인으로",
                }),
            ],
        });
    },
    Cb = Cx([
        {
            element: f.jsx(Pk, {}),
            children: [
                { path: "/", element: f.jsx(Lk, {}) },
                { path: "/detail/:id", element: f.jsx($k, {}) },
                { path: "/event", element: f.jsx(ib, {}) },
                { path: "/cctv", element: f.jsx(vb, {}) },
                { path: "/location", element: f.jsx(Sb, {}) },
            ],
        },
        { path: "*", element: f.jsx(Eb, {}) },
    ]);
hu.createRoot(document.getElementById("root")).render(
    f.jsx(Lx, { router: Cb })
);
