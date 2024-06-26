(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) r(a);
  new MutationObserver(a => {
    for (const l of a)
      if (l.type === 'childList')
        for (const s of l.addedNodes) s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(a) {
    const l = {};
    return (
      a.integrity && (l.integrity = a.integrity),
      a.referrerPolicy && (l.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === 'use-credentials'
        ? (l.credentials = 'include')
        : a.crossOrigin === 'anonymous'
          ? (l.credentials = 'omit')
          : (l.credentials = 'same-origin'),
      l
    );
  }
  function r(a) {
    if (a.ep) return;
    a.ep = !0;
    const l = n(a);
    fetch(a.href, l);
  }
})();
var Uf =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function fu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
function xm(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == 'function') {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, '__esModule', { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var a = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        a.get
          ? a
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            },
      );
    }),
    n
  );
}
var zf = { exports: {} },
  As = {},
  Hf = { exports: {} },
  ae = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qi = Symbol.for('react.element'),
  Am = Symbol.for('react.portal'),
  Mm = Symbol.for('react.fragment'),
  Lm = Symbol.for('react.strict_mode'),
  Nm = Symbol.for('react.profiler'),
  Dm = Symbol.for('react.provider'),
  Fm = Symbol.for('react.context'),
  Um = Symbol.for('react.forward_ref'),
  zm = Symbol.for('react.suspense'),
  Hm = Symbol.for('react.memo'),
  $m = Symbol.for('react.lazy'),
  Ic = Symbol.iterator;
function Vm(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ic && e[Ic]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var $f = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Vf = Object.assign,
  Wf = {};
function Fr(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Wf), (this.updater = n || $f);
}
Fr.prototype.isReactComponent = {};
Fr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Fr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Bf() {}
Bf.prototype = Fr.prototype;
function gu(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Wf), (this.updater = n || $f);
}
var hu = (gu.prototype = new Bf());
hu.constructor = gu;
Vf(hu, Fr.prototype);
hu.isPureReactComponent = !0;
var xc = Array.isArray,
  Kf = Object.prototype.hasOwnProperty,
  pu = { current: null },
  Gf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yf(e, t, n) {
  var r,
    a = {},
    l = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (l = '' + t.key), t))
      Kf.call(t, r) && !Gf.hasOwnProperty(r) && (a[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) a.children = n;
  else if (1 < i) {
    for (var o = Array(i), u = 0; u < i; u++) o[u] = arguments[u + 2];
    a.children = o;
  }
  if (e && e.defaultProps) for (r in ((i = e.defaultProps), i)) a[r] === void 0 && (a[r] = i[r]);
  return { $$typeof: Qi, type: e, key: l, ref: s, props: a, _owner: pu.current };
}
function Wm(e, t) {
  return { $$typeof: Qi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function mu(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Qi;
}
function Bm(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ac = /\/+/g;
function pa(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? Bm('' + e.key) : t.toString(36);
}
function xo(e, t, n, r, a) {
  var l = typeof e;
  (l === 'undefined' || l === 'boolean') && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (l) {
      case 'string':
      case 'number':
        s = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Qi:
          case Am:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (a = a(s)),
      (e = r === '' ? '.' + pa(s, 0) : r),
      xc(a)
        ? ((n = ''),
          e != null && (n = e.replace(Ac, '$&/') + '/'),
          xo(a, t, n, '', function (u) {
            return u;
          }))
        : a != null &&
          (mu(a) &&
            (a = Wm(a, n + (!a.key || (s && s.key === a.key) ? '' : ('' + a.key).replace(Ac, '$&/') + '/') + e)),
          t.push(a)),
      1
    );
  if (((s = 0), (r = r === '' ? '.' : r + ':'), xc(e)))
    for (var i = 0; i < e.length; i++) {
      l = e[i];
      var o = r + pa(l, i);
      s += xo(l, t, n, o, a);
    }
  else if (((o = Vm(e)), typeof o == 'function'))
    for (e = o.call(e), i = 0; !(l = e.next()).done; ) (l = l.value), (o = r + pa(l, i++)), (s += xo(l, t, n, o, a));
  else if (l === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    );
  return s;
}
function so(e, t, n) {
  if (e == null) return e;
  var r = [],
    a = 0;
  return (
    xo(e, r, '', '', function (l) {
      return t.call(n, l, a++);
    }),
    r
  );
}
function Km(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ue = { current: null },
  Ao = { transition: null },
  Gm = { ReactCurrentDispatcher: Ue, ReactCurrentBatchConfig: Ao, ReactCurrentOwner: pu };
ae.Children = {
  map: so,
  forEach: function (e, t, n) {
    so(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      so(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      so(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!mu(e)) throw Error('React.Children.only expected to receive a single React element child.');
    return e;
  },
};
ae.Component = Fr;
ae.Fragment = Mm;
ae.Profiler = Nm;
ae.PureComponent = gu;
ae.StrictMode = Lm;
ae.Suspense = zm;
ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gm;
ae.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
  var r = Vf({}, e.props),
    a = e.key,
    l = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (s = pu.current)),
      t.key !== void 0 && (a = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var i = e.type.defaultProps;
    for (o in t) Kf.call(t, o) && !Gf.hasOwnProperty(o) && (r[o] = t[o] === void 0 && i !== void 0 ? i[o] : t[o]);
  }
  var o = arguments.length - 2;
  if (o === 1) r.children = n;
  else if (1 < o) {
    i = Array(o);
    for (var u = 0; u < o; u++) i[u] = arguments[u + 2];
    r.children = i;
  }
  return { $$typeof: Qi, type: e.type, key: a, ref: l, props: r, _owner: s };
};
ae.createContext = function (e) {
  return (
    (e = {
      $$typeof: Fm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Dm, _context: e }),
    (e.Consumer = e)
  );
};
ae.createElement = Yf;
ae.createFactory = function (e) {
  var t = Yf.bind(null, e);
  return (t.type = e), t;
};
ae.createRef = function () {
  return { current: null };
};
ae.forwardRef = function (e) {
  return { $$typeof: Um, render: e };
};
ae.isValidElement = mu;
ae.lazy = function (e) {
  return { $$typeof: $m, _payload: { _status: -1, _result: e }, _init: Km };
};
ae.memo = function (e, t) {
  return { $$typeof: Hm, type: e, compare: t === void 0 ? null : t };
};
ae.startTransition = function (e) {
  var t = Ao.transition;
  Ao.transition = {};
  try {
    e();
  } finally {
    Ao.transition = t;
  }
};
ae.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
ae.useCallback = function (e, t) {
  return Ue.current.useCallback(e, t);
};
ae.useContext = function (e) {
  return Ue.current.useContext(e);
};
ae.useDebugValue = function () {};
ae.useDeferredValue = function (e) {
  return Ue.current.useDeferredValue(e);
};
ae.useEffect = function (e, t) {
  return Ue.current.useEffect(e, t);
};
ae.useId = function () {
  return Ue.current.useId();
};
ae.useImperativeHandle = function (e, t, n) {
  return Ue.current.useImperativeHandle(e, t, n);
};
ae.useInsertionEffect = function (e, t) {
  return Ue.current.useInsertionEffect(e, t);
};
ae.useLayoutEffect = function (e, t) {
  return Ue.current.useLayoutEffect(e, t);
};
ae.useMemo = function (e, t) {
  return Ue.current.useMemo(e, t);
};
ae.useReducer = function (e, t, n) {
  return Ue.current.useReducer(e, t, n);
};
ae.useRef = function (e) {
  return Ue.current.useRef(e);
};
ae.useState = function (e) {
  return Ue.current.useState(e);
};
ae.useSyncExternalStore = function (e, t, n) {
  return Ue.current.useSyncExternalStore(e, t, n);
};
ae.useTransition = function () {
  return Ue.current.useTransition();
};
ae.version = '18.2.0';
Hf.exports = ae;
var W = Hf.exports;
const Un = fu(W);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ym = W,
  Qm = Symbol.for('react.element'),
  Xm = Symbol.for('react.fragment'),
  Jm = Object.prototype.hasOwnProperty,
  qm = Ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Zm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qf(e, t, n) {
  var r,
    a = {},
    l = null,
    s = null;
  n !== void 0 && (l = '' + n), t.key !== void 0 && (l = '' + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) Jm.call(t, r) && !Zm.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) a[r] === void 0 && (a[r] = t[r]);
  return { $$typeof: Qm, type: e, key: l, ref: s, props: a, _owner: qm.current };
}
As.Fragment = Xm;
As.jsx = Qf;
As.jsxs = Qf;
zf.exports = As;
var K = zf.exports,
  nl = {},
  Xf = { exports: {} },
  tt = {},
  Jf = { exports: {} },
  qf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(I, N) {
    var M = I.length;
    I.push(N);
    e: for (; 0 < M; ) {
      var V = (M - 1) >>> 1,
        Y = I[V];
      if (0 < a(Y, N)) (I[V] = N), (I[M] = Y), (M = V);
      else break e;
    }
  }
  function n(I) {
    return I.length === 0 ? null : I[0];
  }
  function r(I) {
    if (I.length === 0) return null;
    var N = I[0],
      M = I.pop();
    if (M !== N) {
      I[0] = M;
      e: for (var V = 0, Y = I.length, ne = Y >>> 1; V < ne; ) {
        var ee = 2 * (V + 1) - 1,
          J = I[ee],
          q = ee + 1,
          te = I[q];
        if (0 > a(J, M))
          q < Y && 0 > a(te, J) ? ((I[V] = te), (I[q] = M), (V = q)) : ((I[V] = J), (I[ee] = M), (V = ee));
        else if (q < Y && 0 > a(te, M)) (I[V] = te), (I[q] = M), (V = q);
        else break e;
      }
    }
    return N;
  }
  function a(I, N) {
    var M = I.sortIndex - N.sortIndex;
    return M !== 0 ? M : I.id - N.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var s = Date,
      i = s.now();
    e.unstable_now = function () {
      return s.now() - i;
    };
  }
  var o = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    p = !1,
    g = !1,
    v = !1,
    k = typeof setTimeout == 'function' ? setTimeout : null,
    m = typeof clearTimeout == 'function' ? clearTimeout : null,
    h = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(I) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null) r(u);
      else if (N.startTime <= I) r(u), (N.sortIndex = N.expirationTime), t(o, N);
      else break;
      N = n(u);
    }
  }
  function w(I) {
    if (((v = !1), y(I), !g))
      if (n(o) !== null) (g = !0), U(_);
      else {
        var N = n(u);
        N !== null && B(w, N.startTime - I);
      }
  }
  function _(I, N) {
    (g = !1), v && ((v = !1), m(j), (j = -1)), (p = !0);
    var M = f;
    try {
      for (y(N), d = n(o); d !== null && (!(d.expirationTime > N) || (I && !P())); ) {
        var V = d.callback;
        if (typeof V == 'function') {
          (d.callback = null), (f = d.priorityLevel);
          var Y = V(d.expirationTime <= N);
          (N = e.unstable_now()), typeof Y == 'function' ? (d.callback = Y) : d === n(o) && r(o), y(N);
        } else r(o);
        d = n(o);
      }
      if (d !== null) var ne = !0;
      else {
        var ee = n(u);
        ee !== null && B(w, ee.startTime - N), (ne = !1);
      }
      return ne;
    } finally {
      (d = null), (f = M), (p = !1);
    }
  }
  var S = !1,
    E = null,
    j = -1,
    O = 5,
    b = -1;
  function P() {
    return !(e.unstable_now() - b < O);
  }
  function x() {
    if (E !== null) {
      var I = e.unstable_now();
      b = I;
      var N = !0;
      try {
        N = E(!0, I);
      } finally {
        N ? T() : ((S = !1), (E = null));
      }
    } else S = !1;
  }
  var T;
  if (typeof h == 'function')
    T = function () {
      h(x);
    };
  else if (typeof MessageChannel < 'u') {
    var L = new MessageChannel(),
      z = L.port2;
    (L.port1.onmessage = x),
      (T = function () {
        z.postMessage(null);
      });
  } else
    T = function () {
      k(x, 0);
    };
  function U(I) {
    (E = I), S || ((S = !0), T());
  }
  function B(I, N) {
    j = k(function () {
      I(e.unstable_now());
    }, N);
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
      g || p || ((g = !0), U(_));
    }),
    (e.unstable_forceFrameRate = function (I) {
      0 > I || 125 < I
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (O = 0 < I ? Math.floor(1e3 / I) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(o);
    }),
    (e.unstable_next = function (I) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = f;
      }
      var M = f;
      f = N;
      try {
        return I();
      } finally {
        f = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (I, N) {
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
      var M = f;
      f = I;
      try {
        return N();
      } finally {
        f = M;
      }
    }),
    (e.unstable_scheduleCallback = function (I, N, M) {
      var V = e.unstable_now();
      switch (
        (typeof M == 'object' && M !== null
          ? ((M = M.delay), (M = typeof M == 'number' && 0 < M ? V + M : V))
          : (M = V),
        I)
      ) {
        case 1:
          var Y = -1;
          break;
        case 2:
          Y = 250;
          break;
        case 5:
          Y = 1073741823;
          break;
        case 4:
          Y = 1e4;
          break;
        default:
          Y = 5e3;
      }
      return (
        (Y = M + Y),
        (I = { id: c++, callback: N, priorityLevel: I, startTime: M, expirationTime: Y, sortIndex: -1 }),
        M > V
          ? ((I.sortIndex = M), t(u, I), n(o) === null && I === n(u) && (v ? (m(j), (j = -1)) : (v = !0), B(w, M - V)))
          : ((I.sortIndex = Y), t(o, I), g || p || ((g = !0), U(_))),
        I
      );
    }),
    (e.unstable_shouldYield = P),
    (e.unstable_wrapCallback = function (I) {
      var N = f;
      return function () {
        var M = f;
        f = N;
        try {
          return I.apply(this, arguments);
        } finally {
          f = M;
        }
      };
    });
})(qf);
Jf.exports = qf;
var ev = Jf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zf = W,
  et = ev;
function G(e) {
  for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var eg = new Set(),
  Si = {};
function Yn(e, t) {
  Pr(e, t), Pr(e + 'Capture', t);
}
function Pr(e, t) {
  for (Si[e] = t, e = 0; e < t.length; e++) eg.add(t[e]);
}
var Gt = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
  rl = Object.prototype.hasOwnProperty,
  tv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Mc = {},
  Lc = {};
function nv(e) {
  return rl.call(Lc, e) ? !0 : rl.call(Mc, e) ? !1 : tv.test(e) ? (Lc[e] = !0) : ((Mc[e] = !0), !1);
}
function rv(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'words-' && e !== 'aria-');
    default:
      return !1;
  }
}
function iv(e, t, n, r) {
  if (t === null || typeof t > 'u' || rv(e, t, n, r)) return !0;
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
function ze(e, t, n, r, a, l, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = a),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = s);
}
var Ie = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Ie[e] = new ze(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Ie[t] = new ze(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Ie[e] = new ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  Ie[e] = new ze(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Ie[e] = new ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Ie[e] = new ze(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Ie[e] = new ze(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Ie[e] = new ze(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Ie[e] = new ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var vu = /[\-:]([a-z])/g;
function yu(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(vu, yu);
    Ie[t] = new ze(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
  var t = e.replace(vu, yu);
  Ie[t] = new ze(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(vu, yu);
  Ie[t] = new ze(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Ie[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ie.xlinkHref = new ze('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Ie[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function wu(e, t, n, r) {
  var a = Ie.hasOwnProperty(t) ? Ie[t] : null;
  (a !== null
    ? a.type !== 0
    : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (iv(t, n, a, r) && (n = null),
    r || a === null
      ? nv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : a.mustUseProperty
        ? (e[a.propertyName] = n === null ? (a.type === 3 ? !1 : '') : n)
        : ((t = a.attributeName),
          (r = a.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((a = a.type),
              (n = a === 3 || (a === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Jt = Zf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ao = Symbol.for('react.element'),
  ir = Symbol.for('react.portal'),
  or = Symbol.for('react.fragment'),
  ku = Symbol.for('react.strict_mode'),
  il = Symbol.for('react.profiler'),
  tg = Symbol.for('react.provider'),
  ng = Symbol.for('react.context'),
  _u = Symbol.for('react.forward_ref'),
  ol = Symbol.for('react.suspense'),
  sl = Symbol.for('react.suspense_list'),
  Su = Symbol.for('react.memo'),
  sn = Symbol.for('react.lazy'),
  rg = Symbol.for('react.offscreen'),
  Nc = Symbol.iterator;
function $r(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Nc && e[Nc]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var ke = Object.assign,
  ma;
function ei(e) {
  if (ma === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ma = (t && t[1]) || '';
    }
  return (
    `
` +
    ma +
    e
  );
}
var va = !1;
function ya(e, t) {
  if (!e || va) return '';
  va = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
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
    if (u && r && typeof u.stack == 'string') {
      for (
        var a = u.stack.split(`
`),
          l = r.stack.split(`
`),
          s = a.length - 1,
          i = l.length - 1;
        1 <= s && 0 <= i && a[s] !== l[i];

      )
        i--;
      for (; 1 <= s && 0 <= i; s--, i--)
        if (a[s] !== l[i]) {
          if (s !== 1 || i !== 1)
            do
              if ((s--, i--, 0 > i || a[s] !== l[i])) {
                var o =
                  `
` + a[s].replace(' at new ', ' at ');
                return e.displayName && o.includes('<anonymous>') && (o = o.replace('<anonymous>', e.displayName)), o;
              }
            while (1 <= s && 0 <= i);
          break;
        }
    }
  } finally {
    (va = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? ei(e) : '';
}
function ov(e) {
  switch (e.tag) {
    case 5:
      return ei(e.type);
    case 16:
      return ei('Lazy');
    case 13:
      return ei('Suspense');
    case 19:
      return ei('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = ya(e.type, !1)), e;
    case 11:
      return (e = ya(e.type.render, !1)), e;
    case 1:
      return (e = ya(e.type, !0)), e;
    default:
      return '';
  }
}
function al(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case or:
      return 'Fragment';
    case ir:
      return 'Portal';
    case il:
      return 'Profiler';
    case ku:
      return 'StrictMode';
    case ol:
      return 'Suspense';
    case sl:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case ng:
        return (e.displayName || 'Context') + '.Consumer';
      case tg:
        return (e._context.displayName || 'Context') + '.Provider';
      case _u:
        var t = e.render;
        return (
          (e = e.displayName),
          e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Su:
        return (t = e.displayName || null), t !== null ? t : al(e.type) || 'Memo';
      case sn:
        (t = e._payload), (e = e._init);
        try {
          return al(e(t));
        } catch {}
    }
  return null;
}
function sv(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return al(t);
    case 8:
      return t === ku ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function jn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function ig(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function av(e) {
  var t = ig(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (!e.hasOwnProperty(t) && typeof n < 'u' && typeof n.get == 'function' && typeof n.set == 'function') {
    var a = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return a.call(this);
        },
        set: function (s) {
          (r = '' + s), l.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = '' + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function lo(e) {
  e._valueTracker || (e._valueTracker = av(e));
}
function og(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return e && (r = ig(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function Jo(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ll(e, t) {
  var n = t.checked;
  return ke({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Dc(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = jn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    });
}
function sg(e, t) {
  (t = t.checked), t != null && wu(e, 'checked', t, !1);
}
function ul(e, t) {
  sg(e, t);
  var n = jn(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value') ? cl(e, t.type, n) : t.hasOwnProperty('defaultValue') && cl(e, t.type, jn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Fc(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
    (t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function cl(e, t, n) {
  (t !== 'number' || Jo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var ti = Array.isArray;
function vr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
    for (n = 0; n < e.length; n++)
      (a = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== a && (e[n].selected = a),
        a && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + jn(n), t = null, a = 0; a < e.length; a++) {
      if (e[a].value === n) {
        (e[a].selected = !0), r && (e[a].defaultSelected = !0);
        return;
      }
      t !== null || e[a].disabled || (t = e[a]);
    }
    t !== null && (t.selected = !0);
  }
}
function dl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(G(91));
  return ke({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function Uc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(G(92));
      if (ti(n)) {
        if (1 < n.length) throw Error(G(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: jn(n) };
}
function ag(e, t) {
  var n = jn(t.value),
    r = jn(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function zc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function lg(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function fl(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? lg(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var uo,
  ug = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, a) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, a);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
    else {
      for (
        uo = uo || document.createElement('div'),
          uo.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = uo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ei(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var oi = {
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
  lv = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(oi).forEach(function (e) {
  lv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (oi[t] = oi[e]);
  });
});
function cg(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (oi.hasOwnProperty(e) && oi[e])
      ? ('' + t).trim()
      : t + 'px';
}
function dg(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        a = cg(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, a) : (e[n] = a);
    }
}
var uv = ke(
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
  },
);
function gl(e, t) {
  if (t) {
    if (uv[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(G(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(G(60));
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML)) throw Error(G(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(G(62));
  }
}
function hl(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var pl = null;
function Eu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ml = null,
  yr = null,
  wr = null;
function Hc(e) {
  if ((e = qi(e))) {
    if (typeof ml != 'function') throw Error(G(280));
    var t = e.stateNode;
    t && ((t = Fs(t)), ml(e.stateNode, e.type, t));
  }
}
function fg(e) {
  yr ? (wr ? wr.push(e) : (wr = [e])) : (yr = e);
}
function gg() {
  if (yr) {
    var e = yr,
      t = wr;
    if (((wr = yr = null), Hc(e), t)) for (e = 0; e < t.length; e++) Hc(t[e]);
  }
}
function hg(e, t) {
  return e(t);
}
function pg() {}
var wa = !1;
function mg(e, t, n) {
  if (wa) return e(t, n);
  wa = !0;
  try {
    return hg(e, t, n);
  } finally {
    (wa = !1), (yr !== null || wr !== null) && (pg(), gg());
  }
}
function bi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Fs(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type), (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(G(231, t, typeof n));
  return n;
}
var vl = !1;
if (Gt)
  try {
    var Vr = {};
    Object.defineProperty(Vr, 'passive', {
      get: function () {
        vl = !0;
      },
    }),
      window.addEventListener('test', Vr, Vr),
      window.removeEventListener('test', Vr, Vr);
  } catch {
    vl = !1;
  }
function cv(e, t, n, r, a, l, s, i, o) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var si = !1,
  qo = null,
  Zo = !1,
  yl = null,
  dv = {
    onError: function (e) {
      (si = !0), (qo = e);
    },
  };
function fv(e, t, n, r, a, l, s, i, o) {
  (si = !1), (qo = null), cv.apply(dv, arguments);
}
function gv(e, t, n, r, a, l, s, i, o) {
  if ((fv.apply(this, arguments), si)) {
    if (si) {
      var u = qo;
      (si = !1), (qo = null);
    } else throw Error(G(198));
    Zo || ((Zo = !0), (yl = u));
  }
}
function Qn(e) {
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
function vg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function $c(e) {
  if (Qn(e) !== e) throw Error(G(188));
}
function hv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Qn(e)), t === null)) throw Error(G(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var a = n.return;
    if (a === null) break;
    var l = a.alternate;
    if (l === null) {
      if (((r = a.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (a.child === l.child) {
      for (l = a.child; l; ) {
        if (l === n) return $c(a), e;
        if (l === r) return $c(a), t;
        l = l.sibling;
      }
      throw Error(G(188));
    }
    if (n.return !== r.return) (n = a), (r = l);
    else {
      for (var s = !1, i = a.child; i; ) {
        if (i === n) {
          (s = !0), (n = a), (r = l);
          break;
        }
        if (i === r) {
          (s = !0), (r = a), (n = l);
          break;
        }
        i = i.sibling;
      }
      if (!s) {
        for (i = l.child; i; ) {
          if (i === n) {
            (s = !0), (n = l), (r = a);
            break;
          }
          if (i === r) {
            (s = !0), (r = l), (n = a);
            break;
          }
          i = i.sibling;
        }
        if (!s) throw Error(G(189));
      }
    }
    if (n.alternate !== r) throw Error(G(190));
  }
  if (n.tag !== 3) throw Error(G(188));
  return n.stateNode.current === n ? e : t;
}
function yg(e) {
  return (e = hv(e)), e !== null ? wg(e) : null;
}
function wg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = wg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var kg = et.unstable_scheduleCallback,
  Vc = et.unstable_cancelCallback,
  pv = et.unstable_shouldYield,
  mv = et.unstable_requestPaint,
  Se = et.unstable_now,
  vv = et.unstable_getCurrentPriorityLevel,
  bu = et.unstable_ImmediatePriority,
  _g = et.unstable_UserBlockingPriority,
  es = et.unstable_NormalPriority,
  yv = et.unstable_LowPriority,
  Sg = et.unstable_IdlePriority,
  Ms = null,
  At = null;
function wv(e) {
  if (At && typeof At.onCommitFiberRoot == 'function')
    try {
      At.onCommitFiberRoot(Ms, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var bt = Math.clz32 ? Math.clz32 : Sv,
  kv = Math.log,
  _v = Math.LN2;
function Sv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((kv(e) / _v) | 0)) | 0;
}
var co = 64,
  fo = 4194304;
function ni(e) {
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
    l = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var i = s & ~a;
    i !== 0 ? (r = ni(i)) : ((l &= s), l !== 0 && (r = ni(l)));
  } else (s = n & ~a), s !== 0 ? (r = ni(s)) : l !== 0 && (r = ni(l));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & a) && ((a = r & -r), (l = t & -t), a >= l || (a === 16 && (l & 4194240) !== 0)))
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - bt(t)), (a = 1 << n), (r |= e[n]), (t &= ~a);
  return r;
}
function Ev(e, t) {
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
function bv(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
    var s = 31 - bt(l),
      i = 1 << s,
      o = a[s];
    o === -1 ? (!(i & n) || i & r) && (a[s] = Ev(i, t)) : o <= t && (e.expiredLanes |= i), (l &= ~i);
  }
}
function wl(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Eg() {
  var e = co;
  return (co <<= 1), !(co & 4194240) && (co = 64), e;
}
function ka(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Xi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - bt(t)),
    (e[t] = n);
}
function jv(e, t) {
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
    var a = 31 - bt(n),
      l = 1 << a;
    (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
  }
}
function ju(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - bt(n),
      a = 1 << r;
    (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
  }
}
var ce = 0;
function bg(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var jg,
  Ou,
  Og,
  Pg,
  Tg,
  kl = !1,
  go = [],
  hn = null,
  pn = null,
  mn = null,
  ji = new Map(),
  Oi = new Map(),
  ln = [],
  Ov =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function Wc(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      hn = null;
      break;
    case 'dragenter':
    case 'dragleave':
      pn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      mn = null;
      break;
    case 'pointerover':
    case 'pointerout':
      ji.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Oi.delete(t.pointerId);
  }
}
function Wr(e, t, n, r, a, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [a] }),
      t !== null && ((t = qi(t)), t !== null && Ou(t)),
      e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), a !== null && t.indexOf(a) === -1 && t.push(a), e);
}
function Pv(e, t, n, r, a) {
  switch (t) {
    case 'focusin':
      return (hn = Wr(hn, e, t, n, r, a)), !0;
    case 'dragenter':
      return (pn = Wr(pn, e, t, n, r, a)), !0;
    case 'mouseover':
      return (mn = Wr(mn, e, t, n, r, a)), !0;
    case 'pointerover':
      var l = a.pointerId;
      return ji.set(l, Wr(ji.get(l) || null, e, t, n, r, a)), !0;
    case 'gotpointercapture':
      return (l = a.pointerId), Oi.set(l, Wr(Oi.get(l) || null, e, t, n, r, a)), !0;
  }
  return !1;
}
function Rg(e) {
  var t = Nn(e.target);
  if (t !== null) {
    var n = Qn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = vg(n)), t !== null)) {
          (e.blockedOn = t),
            Tg(e.priority, function () {
              Og(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Mo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = _l(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (pl = r), n.target.dispatchEvent(r), (pl = null);
    } else return (t = qi(n)), t !== null && Ou(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Bc(e, t, n) {
  Mo(e) && n.delete(t);
}
function Tv() {
  (kl = !1),
    hn !== null && Mo(hn) && (hn = null),
    pn !== null && Mo(pn) && (pn = null),
    mn !== null && Mo(mn) && (mn = null),
    ji.forEach(Bc),
    Oi.forEach(Bc);
}
function Br(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null), kl || ((kl = !0), et.unstable_scheduleCallback(et.unstable_NormalPriority, Tv)));
}
function Pi(e) {
  function t(a) {
    return Br(a, e);
  }
  if (0 < go.length) {
    Br(go[0], e);
    for (var n = 1; n < go.length; n++) {
      var r = go[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    hn !== null && Br(hn, e), pn !== null && Br(pn, e), mn !== null && Br(mn, e), ji.forEach(t), Oi.forEach(t), n = 0;
    n < ln.length;
    n++
  )
    (r = ln[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ln.length && ((n = ln[0]), n.blockedOn === null); ) Rg(n), n.blockedOn === null && ln.shift();
}
var kr = Jt.ReactCurrentBatchConfig,
  ns = !0;
function Rv(e, t, n, r) {
  var a = ce,
    l = kr.transition;
  kr.transition = null;
  try {
    (ce = 1), Pu(e, t, n, r);
  } finally {
    (ce = a), (kr.transition = l);
  }
}
function Cv(e, t, n, r) {
  var a = ce,
    l = kr.transition;
  kr.transition = null;
  try {
    (ce = 4), Pu(e, t, n, r);
  } finally {
    (ce = a), (kr.transition = l);
  }
}
function Pu(e, t, n, r) {
  if (ns) {
    var a = _l(e, t, n, r);
    if (a === null) Ca(e, t, r, rs, n), Wc(e, r);
    else if (Pv(a, e, t, n, r)) r.stopPropagation();
    else if ((Wc(e, r), t & 4 && -1 < Ov.indexOf(e))) {
      for (; a !== null; ) {
        var l = qi(a);
        if ((l !== null && jg(l), (l = _l(e, t, n, r)), l === null && Ca(e, t, r, rs, n), l === a)) break;
        a = l;
      }
      a !== null && r.stopPropagation();
    } else Ca(e, t, r, null, n);
  }
}
var rs = null;
function _l(e, t, n, r) {
  if (((rs = null), (e = Eu(r)), (e = Nn(e)), e !== null))
    if (((t = Qn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = vg(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (rs = e), null;
}
function Cg(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (vv()) {
        case bu:
          return 1;
        case _g:
          return 4;
        case es:
        case yv:
          return 16;
        case Sg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var cn = null,
  Tu = null,
  Lo = null;
function Ig() {
  if (Lo) return Lo;
  var e,
    t = Tu,
    n = t.length,
    r,
    a = 'value' in cn ? cn.value : cn.textContent,
    l = a.length;
  for (e = 0; e < n && t[e] === a[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === a[l - r]; r++);
  return (Lo = a.slice(e, 1 < r ? 1 - r : void 0));
}
function No(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ho() {
  return !0;
}
function Kc() {
  return !1;
}
function nt(e) {
  function t(n, r, a, l, s) {
    (this._reactName = n),
      (this._targetInst = a),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = s),
      (this.currentTarget = null);
    for (var i in e) e.hasOwnProperty(i) && ((n = e[i]), (this[i] = n ? n(l) : l[i]));
    return (
      (this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? ho : Kc),
      (this.isPropagationStopped = Kc),
      this
    );
  }
  return (
    ke(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = ho));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = ho));
      },
      persist: function () {},
      isPersistent: ho,
    }),
    t
  );
}
var Ur = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ru = nt(Ur),
  Ji = ke({}, Ur, { view: 0, detail: 0 }),
  Iv = nt(Ji),
  _a,
  Sa,
  Kr,
  Ls = ke({}, Ji, {
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
    getModifierState: Cu,
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
      return 'movementX' in e
        ? e.movementX
        : (e !== Kr &&
            (Kr && e.type === 'mousemove'
              ? ((_a = e.screenX - Kr.screenX), (Sa = e.screenY - Kr.screenY))
              : (Sa = _a = 0),
            (Kr = e)),
          _a);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Sa;
    },
  }),
  Gc = nt(Ls),
  xv = ke({}, Ls, { dataTransfer: 0 }),
  Av = nt(xv),
  Mv = ke({}, Ji, { relatedTarget: 0 }),
  Ea = nt(Mv),
  Lv = ke({}, Ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Nv = nt(Lv),
  Dv = ke({}, Ur, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Fv = nt(Dv),
  Uv = ke({}, Ur, { data: 0 }),
  Yc = nt(Uv),
  zv = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Hv = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  $v = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function Vv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = $v[e]) ? !!t[e] : !1;
}
function Cu() {
  return Vv;
}
var Wv = ke({}, Ji, {
    key: function (e) {
      if (e.key) {
        var t = zv[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = No(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? Hv[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Cu,
    charCode: function (e) {
      return e.type === 'keypress' ? No(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress' ? No(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
  }),
  Bv = nt(Wv),
  Kv = ke({}, Ls, {
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
  Qc = nt(Kv),
  Gv = ke({}, Ji, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Cu,
  }),
  Yv = nt(Gv),
  Qv = ke({}, Ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Xv = nt(Qv),
  Jv = ke({}, Ls, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  qv = nt(Jv),
  Zv = [9, 13, 27, 32],
  Iu = Gt && 'CompositionEvent' in window,
  ai = null;
Gt && 'documentMode' in document && (ai = document.documentMode);
var ey = Gt && 'TextEvent' in window && !ai,
  xg = Gt && (!Iu || (ai && 8 < ai && 11 >= ai)),
  Xc = ' ',
  Jc = !1;
function Ag(e, t) {
  switch (e) {
    case 'keyup':
      return Zv.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Mg(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var sr = !1;
function ty(e, t) {
  switch (e) {
    case 'compositionend':
      return Mg(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Jc = !0), Xc);
    case 'textInput':
      return (e = t.data), e === Xc && Jc ? null : e;
    default:
      return null;
  }
}
function ny(e, t) {
  if (sr) return e === 'compositionend' || (!Iu && Ag(e, t)) ? ((e = Ig()), (Lo = Tu = cn = null), (sr = !1), e) : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return xg && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var ry = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
function qc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!ry[e.type] : t === 'textarea';
}
function Lg(e, t, n, r) {
  fg(r),
    (t = is(t, 'onChange')),
    0 < t.length && ((n = new Ru('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
}
var li = null,
  Ti = null;
function iy(e) {
  Kg(e, 0);
}
function Ns(e) {
  var t = ur(e);
  if (og(t)) return e;
}
function oy(e, t) {
  if (e === 'change') return t;
}
var Ng = !1;
if (Gt) {
  var ba;
  if (Gt) {
    var ja = 'oninput' in document;
    if (!ja) {
      var Zc = document.createElement('div');
      Zc.setAttribute('oninput', 'return;'), (ja = typeof Zc.oninput == 'function');
    }
    ba = ja;
  } else ba = !1;
  Ng = ba && (!document.documentMode || 9 < document.documentMode);
}
function ed() {
  li && (li.detachEvent('onpropertychange', Dg), (Ti = li = null));
}
function Dg(e) {
  if (e.propertyName === 'value' && Ns(Ti)) {
    var t = [];
    Lg(t, Ti, e, Eu(e)), mg(iy, t);
  }
}
function sy(e, t, n) {
  e === 'focusin' ? (ed(), (li = t), (Ti = n), li.attachEvent('onpropertychange', Dg)) : e === 'focusout' && ed();
}
function ay(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Ns(Ti);
}
function ly(e, t) {
  if (e === 'click') return Ns(t);
}
function uy(e, t) {
  if (e === 'input' || e === 'change') return Ns(t);
}
function cy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ot = typeof Object.is == 'function' ? Object.is : cy;
function Ri(e, t) {
  if (Ot(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var a = n[r];
    if (!rl.call(t, a) || !Ot(e[a], t[a])) return !1;
  }
  return !0;
}
function td(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function nd(e, t) {
  var n = td(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
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
    n = td(n);
  }
}
function Fg(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Fg(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Ug() {
  for (var e = window, t = Jo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Jo(e.document);
  }
  return t;
}
function xu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function dy(e) {
  var t = Ug(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Fg(n.ownerDocument.documentElement, n)) {
    if (r !== null && xu(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var a = n.textContent.length,
          l = Math.min(r.start, a);
        (r = r.end === void 0 ? l : Math.min(r.end, a)),
          !e.extend && l > r && ((a = r), (r = l), (l = a)),
          (a = nd(n, l));
        var s = nd(n, r);
        a &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== a.node ||
            e.anchorOffset !== a.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(a.node, a.offset),
          e.removeAllRanges(),
          l > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var fy = Gt && 'documentMode' in document && 11 >= document.documentMode,
  ar = null,
  Sl = null,
  ui = null,
  El = !1;
function rd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  El ||
    ar == null ||
    ar !== Jo(r) ||
    ((r = ar),
    'selectionStart' in r && xu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ui && Ri(ui, r)) ||
      ((ui = r),
      (r = is(Sl, 'onSelect')),
      0 < r.length &&
        ((t = new Ru('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = ar))));
}
function po(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
}
var lr = {
    animationend: po('Animation', 'AnimationEnd'),
    animationiteration: po('Animation', 'AnimationIteration'),
    animationstart: po('Animation', 'AnimationStart'),
    transitionend: po('Transition', 'TransitionEnd'),
  },
  Oa = {},
  zg = {};
Gt &&
  ((zg = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete lr.animationend.animation, delete lr.animationiteration.animation, delete lr.animationstart.animation),
  'TransitionEvent' in window || delete lr.transitionend.transition);
function Ds(e) {
  if (Oa[e]) return Oa[e];
  if (!lr[e]) return e;
  var t = lr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in zg) return (Oa[e] = t[n]);
  return e;
}
var Hg = Ds('animationend'),
  $g = Ds('animationiteration'),
  Vg = Ds('animationstart'),
  Wg = Ds('transitionend'),
  Bg = new Map(),
  id =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function Tn(e, t) {
  Bg.set(e, t), Yn(t, [e]);
}
for (var Pa = 0; Pa < id.length; Pa++) {
  var Ta = id[Pa],
    gy = Ta.toLowerCase(),
    hy = Ta[0].toUpperCase() + Ta.slice(1);
  Tn(gy, 'on' + hy);
}
Tn(Hg, 'onAnimationEnd');
Tn($g, 'onAnimationIteration');
Tn(Vg, 'onAnimationStart');
Tn('dblclick', 'onDoubleClick');
Tn('focusin', 'onFocus');
Tn('focusout', 'onBlur');
Tn(Wg, 'onTransitionEnd');
Pr('onMouseEnter', ['mouseout', 'mouseover']);
Pr('onMouseLeave', ['mouseout', 'mouseover']);
Pr('onPointerEnter', ['pointerout', 'pointerover']);
Pr('onPointerLeave', ['pointerout', 'pointerover']);
Yn('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
Yn('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '));
Yn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Yn('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
Yn('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
Yn('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var ri =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  py = new Set('cancel close invalid load scroll toggle'.split(' ').concat(ri));
function od(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), gv(r, t, void 0, e), (e.currentTarget = null);
}
function Kg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      a = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var i = r[s],
            o = i.instance,
            u = i.currentTarget;
          if (((i = i.listener), o !== l && a.isPropagationStopped())) break e;
          od(a, i, u), (l = o);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((i = r[s]), (o = i.instance), (u = i.currentTarget), (i = i.listener), o !== l && a.isPropagationStopped())
          )
            break e;
          od(a, i, u), (l = o);
        }
    }
  }
  if (Zo) throw ((e = yl), (Zo = !1), (yl = null), e);
}
function pe(e, t) {
  var n = t[Tl];
  n === void 0 && (n = t[Tl] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Gg(t, e, 2, !1), n.add(r));
}
function Ra(e, t, n) {
  var r = 0;
  t && (r |= 4), Gg(n, e, r, t);
}
var mo = '_reactListening' + Math.random().toString(36).slice(2);
function Ci(e) {
  if (!e[mo]) {
    (e[mo] = !0),
      eg.forEach(function (n) {
        n !== 'selectionchange' && (py.has(n) || Ra(n, !1, e), Ra(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[mo] || ((t[mo] = !0), Ra('selectionchange', !1, t));
  }
}
function Gg(e, t, n, r) {
  switch (Cg(t)) {
    case 1:
      var a = Rv;
      break;
    case 4:
      a = Cv;
      break;
    default:
      a = Pu;
  }
  (n = a.bind(null, t, n, e)),
    (a = void 0),
    !vl || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (a = !0),
    r
      ? a !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: a })
        : e.addEventListener(t, n, !0)
      : a !== void 0
        ? e.addEventListener(t, n, { passive: a })
        : e.addEventListener(t, n, !1);
}
function Ca(e, t, n, r, a) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var i = r.stateNode.containerInfo;
        if (i === a || (i.nodeType === 8 && i.parentNode === a)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var o = s.tag;
            if (
              (o === 3 || o === 4) &&
              ((o = s.stateNode.containerInfo), o === a || (o.nodeType === 8 && o.parentNode === a))
            )
              return;
            s = s.return;
          }
        for (; i !== null; ) {
          if (((s = Nn(i)), s === null)) return;
          if (((o = s.tag), o === 5 || o === 6)) {
            r = l = s;
            continue e;
          }
          i = i.parentNode;
        }
      }
      r = r.return;
    }
  mg(function () {
    var u = l,
      c = Eu(n),
      d = [];
    e: {
      var f = Bg.get(e);
      if (f !== void 0) {
        var p = Ru,
          g = e;
        switch (e) {
          case 'keypress':
            if (No(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            p = Bv;
            break;
          case 'focusin':
            (g = 'focus'), (p = Ea);
            break;
          case 'focusout':
            (g = 'blur'), (p = Ea);
            break;
          case 'beforeblur':
          case 'afterblur':
            p = Ea;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            p = Gc;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            p = Av;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            p = Yv;
            break;
          case Hg:
          case $g:
          case Vg:
            p = Nv;
            break;
          case Wg:
            p = Xv;
            break;
          case 'scroll':
            p = Iv;
            break;
          case 'wheel':
            p = qv;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            p = Fv;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            p = Qc;
        }
        var v = (t & 4) !== 0,
          k = !v && e === 'scroll',
          m = v ? (f !== null ? f + 'Capture' : null) : f;
        v = [];
        for (var h = u, y; h !== null; ) {
          y = h;
          var w = y.stateNode;
          if (
            (y.tag === 5 && w !== null && ((y = w), m !== null && ((w = bi(h, m)), w != null && v.push(Ii(h, w, y)))),
            k)
          )
            break;
          h = h.return;
        }
        0 < v.length && ((f = new p(f, g, null, n, c)), d.push({ event: f, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (p = e === 'mouseout' || e === 'pointerout'),
          f && n !== pl && (g = n.relatedTarget || n.fromElement) && (Nn(g) || g[Yt]))
        )
          break e;
        if (
          (p || f) &&
          ((f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window),
          p
            ? ((g = n.relatedTarget || n.toElement),
              (p = u),
              (g = g ? Nn(g) : null),
              g !== null && ((k = Qn(g)), g !== k || (g.tag !== 5 && g.tag !== 6)) && (g = null))
            : ((p = null), (g = u)),
          p !== g)
        ) {
          if (
            ((v = Gc),
            (w = 'onMouseLeave'),
            (m = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((v = Qc), (w = 'onPointerLeave'), (m = 'onPointerEnter'), (h = 'pointer')),
            (k = p == null ? f : ur(p)),
            (y = g == null ? f : ur(g)),
            (f = new v(w, h + 'leave', p, n, c)),
            (f.target = k),
            (f.relatedTarget = y),
            (w = null),
            Nn(c) === u && ((v = new v(m, h + 'enter', g, n, c)), (v.target = y), (v.relatedTarget = k), (w = v)),
            (k = w),
            p && g)
          )
            t: {
              for (v = p, m = g, h = 0, y = v; y; y = er(y)) h++;
              for (y = 0, w = m; w; w = er(w)) y++;
              for (; 0 < h - y; ) (v = er(v)), h--;
              for (; 0 < y - h; ) (m = er(m)), y--;
              for (; h--; ) {
                if (v === m || (m !== null && v === m.alternate)) break t;
                (v = er(v)), (m = er(m));
              }
              v = null;
            }
          else v = null;
          p !== null && sd(d, f, p, v, !1), g !== null && k !== null && sd(d, k, g, v, !0);
        }
      }
      e: {
        if (
          ((f = u ? ur(u) : window),
          (p = f.nodeName && f.nodeName.toLowerCase()),
          p === 'select' || (p === 'input' && f.type === 'file'))
        )
          var _ = oy;
        else if (qc(f))
          if (Ng) _ = uy;
          else {
            _ = ay;
            var S = sy;
          }
        else
          (p = f.nodeName) && p.toLowerCase() === 'input' && (f.type === 'checkbox' || f.type === 'radio') && (_ = ly);
        if (_ && (_ = _(e, u))) {
          Lg(d, _, n, c);
          break e;
        }
        S && S(e, f, u),
          e === 'focusout' && (S = f._wrapperState) && S.controlled && f.type === 'number' && cl(f, 'number', f.value);
      }
      switch (((S = u ? ur(u) : window), e)) {
        case 'focusin':
          (qc(S) || S.contentEditable === 'true') && ((ar = S), (Sl = u), (ui = null));
          break;
        case 'focusout':
          ui = Sl = ar = null;
          break;
        case 'mousedown':
          El = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (El = !1), rd(d, n, c);
          break;
        case 'selectionchange':
          if (fy) break;
        case 'keydown':
        case 'keyup':
          rd(d, n, c);
      }
      var E;
      if (Iu)
        e: {
          switch (e) {
            case 'compositionstart':
              var j = 'onCompositionStart';
              break e;
            case 'compositionend':
              j = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              j = 'onCompositionUpdate';
              break e;
          }
          j = void 0;
        }
      else
        sr ? Ag(e, n) && (j = 'onCompositionEnd') : e === 'keydown' && n.keyCode === 229 && (j = 'onCompositionStart');
      j &&
        (xg &&
          n.locale !== 'ko' &&
          (sr || j !== 'onCompositionStart'
            ? j === 'onCompositionEnd' && sr && (E = Ig())
            : ((cn = c), (Tu = 'value' in cn ? cn.value : cn.textContent), (sr = !0))),
        (S = is(u, j)),
        0 < S.length &&
          ((j = new Yc(j, e, null, n, c)),
          d.push({ event: j, listeners: S }),
          E ? (j.data = E) : ((E = Mg(n)), E !== null && (j.data = E)))),
        (E = ey ? ty(e, n) : ny(e, n)) &&
          ((u = is(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new Yc('onBeforeInput', 'beforeinput', null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = E)));
    }
    Kg(d, t);
  });
}
function Ii(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function is(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var a = e,
      l = a.stateNode;
    a.tag === 5 &&
      l !== null &&
      ((a = l), (l = bi(e, n)), l != null && r.unshift(Ii(e, l, a)), (l = bi(e, t)), l != null && r.push(Ii(e, l, a))),
      (e = e.return);
  }
  return r;
}
function er(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function sd(e, t, n, r, a) {
  for (var l = t._reactName, s = []; n !== null && n !== r; ) {
    var i = n,
      o = i.alternate,
      u = i.stateNode;
    if (o !== null && o === r) break;
    i.tag === 5 &&
      u !== null &&
      ((i = u),
      a
        ? ((o = bi(n, l)), o != null && s.unshift(Ii(n, o, i)))
        : a || ((o = bi(n, l)), o != null && s.push(Ii(n, o, i)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var my = /\r\n?/g,
  vy = /\u0000|\uFFFD/g;
function ad(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      my,
      `
`,
    )
    .replace(vy, '');
}
function vo(e, t, n) {
  if (((t = ad(t)), ad(e) !== t && n)) throw Error(G(425));
}
function os() {}
var bl = null,
  jl = null;
function Ol(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Pl = typeof setTimeout == 'function' ? setTimeout : void 0,
  yy = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  ld = typeof Promise == 'function' ? Promise : void 0,
  wy =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof ld < 'u'
        ? function (e) {
            return ld.resolve(null).then(e).catch(ky);
          }
        : Pl;
function ky(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ia(e, t) {
  var n = t,
    r = 0;
  do {
    var a = n.nextSibling;
    if ((e.removeChild(n), a && a.nodeType === 8))
      if (((n = a.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(a), Pi(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = a;
  } while (n);
  Pi(t);
}
function vn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function ud(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var zr = Math.random().toString(36).slice(2),
  xt = '__reactFiber$' + zr,
  xi = '__reactProps$' + zr,
  Yt = '__reactContainer$' + zr,
  Tl = '__reactEvents$' + zr,
  _y = '__reactListeners$' + zr,
  Sy = '__reactHandles$' + zr;
function Nn(e) {
  var t = e[xt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Yt] || n[xt])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = ud(e); e !== null; ) {
          if ((n = e[xt])) return n;
          e = ud(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function qi(e) {
  return (e = e[xt] || e[Yt]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function ur(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(G(33));
}
function Fs(e) {
  return e[xi] || null;
}
var Rl = [],
  cr = -1;
function Rn(e) {
  return { current: e };
}
function me(e) {
  0 > cr || ((e.current = Rl[cr]), (Rl[cr] = null), cr--);
}
function he(e, t) {
  cr++, (Rl[cr] = e.current), (e.current = t);
}
var On = {},
  Ne = Rn(On),
  Be = Rn(!1),
  $n = On;
function Tr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return On;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var a = {},
    l;
  for (l in n) a[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    a
  );
}
function Ke(e) {
  return (e = e.childContextTypes), e != null;
}
function ss() {
  me(Be), me(Ne);
}
function cd(e, t, n) {
  if (Ne.current !== On) throw Error(G(168));
  he(Ne, t), he(Be, n);
}
function Yg(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var a in r) if (!(a in t)) throw Error(G(108, sv(e) || 'Unknown', a));
  return ke({}, n, r);
}
function as(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || On),
    ($n = Ne.current),
    he(Ne, e),
    he(Be, Be.current),
    !0
  );
}
function dd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(G(169));
  n ? ((e = Yg(e, t, $n)), (r.__reactInternalMemoizedMergedChildContext = e), me(Be), me(Ne), he(Ne, e)) : me(Be),
    he(Be, n);
}
var $t = null,
  Us = !1,
  xa = !1;
function Qg(e) {
  $t === null ? ($t = [e]) : $t.push(e);
}
function Ey(e) {
  (Us = !0), Qg(e);
}
function Cn() {
  if (!xa && $t !== null) {
    xa = !0;
    var e = 0,
      t = ce;
    try {
      var n = $t;
      for (ce = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ($t = null), (Us = !1);
    } catch (a) {
      throw ($t !== null && ($t = $t.slice(e + 1)), kg(bu, Cn), a);
    } finally {
      (ce = t), (xa = !1);
    }
  }
  return null;
}
var dr = [],
  fr = 0,
  ls = null,
  us = 0,
  at = [],
  lt = 0,
  Vn = null,
  Vt = 1,
  Wt = '';
function xn(e, t) {
  (dr[fr++] = us), (dr[fr++] = ls), (ls = e), (us = t);
}
function Xg(e, t, n) {
  (at[lt++] = Vt), (at[lt++] = Wt), (at[lt++] = Vn), (Vn = e);
  var r = Vt;
  e = Wt;
  var a = 32 - bt(r) - 1;
  (r &= ~(1 << a)), (n += 1);
  var l = 32 - bt(t) + a;
  if (30 < l) {
    var s = a - (a % 5);
    (l = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (a -= s),
      (Vt = (1 << (32 - bt(t) + a)) | (n << a) | r),
      (Wt = l + e);
  } else (Vt = (1 << l) | (n << a) | r), (Wt = e);
}
function Au(e) {
  e.return !== null && (xn(e, 1), Xg(e, 1, 0));
}
function Mu(e) {
  for (; e === ls; ) (ls = dr[--fr]), (dr[fr] = null), (us = dr[--fr]), (dr[fr] = null);
  for (; e === Vn; )
    (Vn = at[--lt]), (at[lt] = null), (Wt = at[--lt]), (at[lt] = null), (Vt = at[--lt]), (at[lt] = null);
}
var Ze = null,
  Je = null,
  ve = !1,
  kt = null;
function Jg(e, t) {
  var n = dt(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function fd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Ze = e), (Je = vn(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ze = e), (Je = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Vn !== null ? { id: Vt, overflow: Wt } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = dt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ze = e),
            (Je = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Cl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Il(e) {
  if (ve) {
    var t = Je;
    if (t) {
      var n = t;
      if (!fd(e, t)) {
        if (Cl(e)) throw Error(G(418));
        t = vn(n.nextSibling);
        var r = Ze;
        t && fd(e, t) ? Jg(r, n) : ((e.flags = (e.flags & -4097) | 2), (ve = !1), (Ze = e));
      }
    } else {
      if (Cl(e)) throw Error(G(418));
      (e.flags = (e.flags & -4097) | 2), (ve = !1), (Ze = e);
    }
  }
}
function gd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ze = e;
}
function yo(e) {
  if (e !== Ze) return !1;
  if (!ve) return gd(e), (ve = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !Ol(e.type, e.memoizedProps))),
    t && (t = Je))
  ) {
    if (Cl(e)) throw (qg(), Error(G(418)));
    for (; t; ) Jg(e, t), (t = vn(t.nextSibling));
  }
  if ((gd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(G(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Je = vn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Je = null;
    }
  } else Je = Ze ? vn(e.stateNode.nextSibling) : null;
  return !0;
}
function qg() {
  for (var e = Je; e; ) e = vn(e.nextSibling);
}
function Rr() {
  (Je = Ze = null), (ve = !1);
}
function Lu(e) {
  kt === null ? (kt = [e]) : kt.push(e);
}
var by = Jt.ReactCurrentBatchConfig;
function yt(e, t) {
  if (e && e.defaultProps) {
    (t = ke({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var cs = Rn(null),
  ds = null,
  gr = null,
  Nu = null;
function Du() {
  Nu = gr = ds = null;
}
function Fu(e) {
  var t = cs.current;
  me(cs), (e._currentValue = t);
}
function xl(e, t, n) {
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
function _r(e, t) {
  (ds = e),
    (Nu = gr = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (We = !0), (e.firstContext = null));
}
function gt(e) {
  var t = e._currentValue;
  if (Nu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), gr === null)) {
      if (ds === null) throw Error(G(308));
      (gr = e), (ds.dependencies = { lanes: 0, firstContext: e });
    } else gr = gr.next = e;
  return t;
}
var Dn = null;
function Uu(e) {
  Dn === null ? (Dn = [e]) : Dn.push(e);
}
function Zg(e, t, n, r) {
  var a = t.interleaved;
  return a === null ? ((n.next = n), Uu(t)) : ((n.next = a.next), (a.next = n)), (t.interleaved = n), Qt(e, r);
}
function Qt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var an = !1;
function zu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function eh(e, t) {
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
function Bt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function yn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ue & 2)) {
    var a = r.pending;
    return a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)), (r.pending = t), Qt(e, n);
  }
  return (
    (a = r.interleaved),
    a === null ? ((t.next = t), Uu(r)) : ((t.next = a.next), (a.next = t)),
    (r.interleaved = t),
    Qt(e, n)
  );
}
function Do(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ju(e, n);
  }
}
function hd(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var a = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (a = l = s) : (l = l.next = s), (n = n.next);
      } while (n !== null);
      l === null ? (a = l = t) : (l = l.next = t);
    } else a = l = t;
    (n = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: l, shared: r.shared, effects: r.effects }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function fs(e, t, n, r) {
  var a = e.updateQueue;
  an = !1;
  var l = a.firstBaseUpdate,
    s = a.lastBaseUpdate,
    i = a.shared.pending;
  if (i !== null) {
    a.shared.pending = null;
    var o = i,
      u = o.next;
    (o.next = null), s === null ? (l = u) : (s.next = u), (s = o);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (i = c.lastBaseUpdate),
      i !== s && (i === null ? (c.firstBaseUpdate = u) : (i.next = u), (c.lastBaseUpdate = o)));
  }
  if (l !== null) {
    var d = a.baseState;
    (s = 0), (c = u = o = null), (i = l);
    do {
      var f = i.lane,
        p = i.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next = { eventTime: p, lane: 0, tag: i.tag, payload: i.payload, callback: i.callback, next: null });
        e: {
          var g = e,
            v = i;
          switch (((f = t), (p = n), v.tag)) {
            case 1:
              if (((g = v.payload), typeof g == 'function')) {
                d = g.call(p, d, f);
                break e;
              }
              d = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (((g = v.payload), (f = typeof g == 'function' ? g.call(p, d, f) : g), f == null)) break e;
              d = ke({}, d, f);
              break e;
            case 2:
              an = !0;
          }
        }
        i.callback !== null &&
          i.lane !== 0 &&
          ((e.flags |= 64), (f = a.effects), f === null ? (a.effects = [i]) : f.push(i));
      } else
        (p = { eventTime: p, lane: f, tag: i.tag, payload: i.payload, callback: i.callback, next: null }),
          c === null ? ((u = c = p), (o = d)) : (c = c.next = p),
          (s |= f);
      if (((i = i.next), i === null)) {
        if (((i = a.shared.pending), i === null)) break;
        (f = i), (i = f.next), (f.next = null), (a.lastBaseUpdate = f), (a.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (o = d),
      (a.baseState = o),
      (a.firstBaseUpdate = u),
      (a.lastBaseUpdate = c),
      (t = a.shared.interleaved),
      t !== null)
    ) {
      a = t;
      do (s |= a.lane), (a = a.next);
      while (a !== t);
    } else l === null && (a.shared.lanes = 0);
    (Bn |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function pd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        a = r.callback;
      if (a !== null) {
        if (((r.callback = null), (r = n), typeof a != 'function')) throw Error(G(191, a));
        a.call(r);
      }
    }
}
var th = new Zf.Component().refs;
function Al(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ke({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var zs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Qn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Fe(),
      a = kn(e),
      l = Bt(r, a);
    (l.payload = t), n != null && (l.callback = n), (t = yn(e, l, a)), t !== null && (jt(t, e, a, r), Do(t, e, a));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Fe(),
      a = kn(e),
      l = Bt(r, a);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = yn(e, l, a)),
      t !== null && (jt(t, e, a, r), Do(t, e, a));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Fe(),
      r = kn(e),
      a = Bt(n, r);
    (a.tag = 2), t != null && (a.callback = t), (t = yn(e, a, r)), t !== null && (jt(t, e, r, n), Do(t, e, r));
  },
};
function md(e, t, n, r, a, l, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, l, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Ri(n, r) || !Ri(a, l)
        : !0
  );
}
function nh(e, t, n) {
  var r = !1,
    a = On,
    l = t.contextType;
  return (
    typeof l == 'object' && l !== null
      ? (l = gt(l))
      : ((a = Ke(t) ? $n : Ne.current), (r = t.contextTypes), (l = (r = r != null) ? Tr(e, a) : On)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = zs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = a),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function vd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && zs.enqueueReplaceState(t, t.state, null);
}
function Ml(e, t, n, r) {
  var a = e.stateNode;
  (a.props = n), (a.state = e.memoizedState), (a.refs = th), zu(e);
  var l = t.contextType;
  typeof l == 'object' && l !== null ? (a.context = gt(l)) : ((l = Ke(t) ? $n : Ne.current), (a.context = Tr(e, l))),
    (a.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == 'function' && (Al(e, t, l, n), (a.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof a.getSnapshotBeforeUpdate == 'function' ||
      (typeof a.UNSAFE_componentWillMount != 'function' && typeof a.componentWillMount != 'function') ||
      ((t = a.state),
      typeof a.componentWillMount == 'function' && a.componentWillMount(),
      typeof a.UNSAFE_componentWillMount == 'function' && a.UNSAFE_componentWillMount(),
      t !== a.state && zs.enqueueReplaceState(a, a.state, null),
      fs(e, n, a, r),
      (a.state = e.memoizedState)),
    typeof a.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Gr(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(G(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(G(147, e));
      var a = r,
        l = '' + e;
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === l
        ? t.ref
        : ((t = function (s) {
            var i = a.refs;
            i === th && (i = a.refs = {}), s === null ? delete i[l] : (i[l] = s);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != 'string') throw Error(G(284));
    if (!n._owner) throw Error(G(290, e));
  }
  return e;
}
function wo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(G(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
  );
}
function yd(e) {
  var t = e._init;
  return t(e._payload);
}
function rh(e) {
  function t(m, h) {
    if (e) {
      var y = m.deletions;
      y === null ? ((m.deletions = [h]), (m.flags |= 16)) : y.push(h);
    }
  }
  function n(m, h) {
    if (!e) return null;
    for (; h !== null; ) t(m, h), (h = h.sibling);
    return null;
  }
  function r(m, h) {
    for (m = new Map(); h !== null; ) h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
    return m;
  }
  function a(m, h) {
    return (m = _n(m, h)), (m.index = 0), (m.sibling = null), m;
  }
  function l(m, h, y) {
    return (
      (m.index = y),
      e
        ? ((y = m.alternate), y !== null ? ((y = y.index), y < h ? ((m.flags |= 2), h) : y) : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function i(m, h, y, w) {
    return h === null || h.tag !== 6 ? ((h = Ua(y, m.mode, w)), (h.return = m), h) : ((h = a(h, y)), (h.return = m), h);
  }
  function o(m, h, y, w) {
    var _ = y.type;
    return _ === or
      ? c(m, h, y.props.children, w, y.key)
      : h !== null &&
          (h.elementType === _ || (typeof _ == 'object' && _ !== null && _.$$typeof === sn && yd(_) === h.type))
        ? ((w = a(h, y.props)), (w.ref = Gr(m, h, y)), (w.return = m), w)
        : ((w = Vo(y.type, y.key, y.props, null, m.mode, w)), (w.ref = Gr(m, h, y)), (w.return = m), w);
  }
  function u(m, h, y, w) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== y.containerInfo ||
      h.stateNode.implementation !== y.implementation
      ? ((h = za(y, m.mode, w)), (h.return = m), h)
      : ((h = a(h, y.children || [])), (h.return = m), h);
  }
  function c(m, h, y, w, _) {
    return h === null || h.tag !== 7
      ? ((h = Hn(y, m.mode, w, _)), (h.return = m), h)
      : ((h = a(h, y)), (h.return = m), h);
  }
  function d(m, h, y) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return (h = Ua('' + h, m.mode, y)), (h.return = m), h;
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case ao:
          return (y = Vo(h.type, h.key, h.props, null, m.mode, y)), (y.ref = Gr(m, null, h)), (y.return = m), y;
        case ir:
          return (h = za(h, m.mode, y)), (h.return = m), h;
        case sn:
          var w = h._init;
          return d(m, w(h._payload), y);
      }
      if (ti(h) || $r(h)) return (h = Hn(h, m.mode, y, null)), (h.return = m), h;
      wo(m, h);
    }
    return null;
  }
  function f(m, h, y, w) {
    var _ = h !== null ? h.key : null;
    if ((typeof y == 'string' && y !== '') || typeof y == 'number') return _ !== null ? null : i(m, h, '' + y, w);
    if (typeof y == 'object' && y !== null) {
      switch (y.$$typeof) {
        case ao:
          return y.key === _ ? o(m, h, y, w) : null;
        case ir:
          return y.key === _ ? u(m, h, y, w) : null;
        case sn:
          return (_ = y._init), f(m, h, _(y._payload), w);
      }
      if (ti(y) || $r(y)) return _ !== null ? null : c(m, h, y, w, null);
      wo(m, y);
    }
    return null;
  }
  function p(m, h, y, w, _) {
    if ((typeof w == 'string' && w !== '') || typeof w == 'number') return (m = m.get(y) || null), i(h, m, '' + w, _);
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case ao:
          return (m = m.get(w.key === null ? y : w.key) || null), o(h, m, w, _);
        case ir:
          return (m = m.get(w.key === null ? y : w.key) || null), u(h, m, w, _);
        case sn:
          var S = w._init;
          return p(m, h, y, S(w._payload), _);
      }
      if (ti(w) || $r(w)) return (m = m.get(y) || null), c(h, m, w, _, null);
      wo(h, w);
    }
    return null;
  }
  function g(m, h, y, w) {
    for (var _ = null, S = null, E = h, j = (h = 0), O = null; E !== null && j < y.length; j++) {
      E.index > j ? ((O = E), (E = null)) : (O = E.sibling);
      var b = f(m, E, y[j], w);
      if (b === null) {
        E === null && (E = O);
        break;
      }
      e && E && b.alternate === null && t(m, E),
        (h = l(b, h, j)),
        S === null ? (_ = b) : (S.sibling = b),
        (S = b),
        (E = O);
    }
    if (j === y.length) return n(m, E), ve && xn(m, j), _;
    if (E === null) {
      for (; j < y.length; j++)
        (E = d(m, y[j], w)), E !== null && ((h = l(E, h, j)), S === null ? (_ = E) : (S.sibling = E), (S = E));
      return ve && xn(m, j), _;
    }
    for (E = r(m, E); j < y.length; j++)
      (O = p(E, m, j, y[j], w)),
        O !== null &&
          (e && O.alternate !== null && E.delete(O.key === null ? j : O.key),
          (h = l(O, h, j)),
          S === null ? (_ = O) : (S.sibling = O),
          (S = O));
    return (
      e &&
        E.forEach(function (P) {
          return t(m, P);
        }),
      ve && xn(m, j),
      _
    );
  }
  function v(m, h, y, w) {
    var _ = $r(y);
    if (typeof _ != 'function') throw Error(G(150));
    if (((y = _.call(y)), y == null)) throw Error(G(151));
    for (var S = (_ = null), E = h, j = (h = 0), O = null, b = y.next(); E !== null && !b.done; j++, b = y.next()) {
      E.index > j ? ((O = E), (E = null)) : (O = E.sibling);
      var P = f(m, E, b.value, w);
      if (P === null) {
        E === null && (E = O);
        break;
      }
      e && E && P.alternate === null && t(m, E),
        (h = l(P, h, j)),
        S === null ? (_ = P) : (S.sibling = P),
        (S = P),
        (E = O);
    }
    if (b.done) return n(m, E), ve && xn(m, j), _;
    if (E === null) {
      for (; !b.done; j++, b = y.next())
        (b = d(m, b.value, w)), b !== null && ((h = l(b, h, j)), S === null ? (_ = b) : (S.sibling = b), (S = b));
      return ve && xn(m, j), _;
    }
    for (E = r(m, E); !b.done; j++, b = y.next())
      (b = p(E, m, j, b.value, w)),
        b !== null &&
          (e && b.alternate !== null && E.delete(b.key === null ? j : b.key),
          (h = l(b, h, j)),
          S === null ? (_ = b) : (S.sibling = b),
          (S = b));
    return (
      e &&
        E.forEach(function (x) {
          return t(m, x);
        }),
      ve && xn(m, j),
      _
    );
  }
  function k(m, h, y, w) {
    if (
      (typeof y == 'object' && y !== null && y.type === or && y.key === null && (y = y.props.children),
      typeof y == 'object' && y !== null)
    ) {
      switch (y.$$typeof) {
        case ao:
          e: {
            for (var _ = y.key, S = h; S !== null; ) {
              if (S.key === _) {
                if (((_ = y.type), _ === or)) {
                  if (S.tag === 7) {
                    n(m, S.sibling), (h = a(S, y.props.children)), (h.return = m), (m = h);
                    break e;
                  }
                } else if (
                  S.elementType === _ ||
                  (typeof _ == 'object' && _ !== null && _.$$typeof === sn && yd(_) === S.type)
                ) {
                  n(m, S.sibling), (h = a(S, y.props)), (h.ref = Gr(m, S, y)), (h.return = m), (m = h);
                  break e;
                }
                n(m, S);
                break;
              } else t(m, S);
              S = S.sibling;
            }
            y.type === or
              ? ((h = Hn(y.props.children, m.mode, w, y.key)), (h.return = m), (m = h))
              : ((w = Vo(y.type, y.key, y.props, null, m.mode, w)), (w.ref = Gr(m, h, y)), (w.return = m), (m = w));
          }
          return s(m);
        case ir:
          e: {
            for (S = y.key; h !== null; ) {
              if (h.key === S)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === y.containerInfo &&
                  h.stateNode.implementation === y.implementation
                ) {
                  n(m, h.sibling), (h = a(h, y.children || [])), (h.return = m), (m = h);
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else t(m, h);
              h = h.sibling;
            }
            (h = za(y, m.mode, w)), (h.return = m), (m = h);
          }
          return s(m);
        case sn:
          return (S = y._init), k(m, h, S(y._payload), w);
      }
      if (ti(y)) return g(m, h, y, w);
      if ($r(y)) return v(m, h, y, w);
      wo(m, y);
    }
    return (typeof y == 'string' && y !== '') || typeof y == 'number'
      ? ((y = '' + y),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = a(h, y)), (h.return = m), (m = h))
          : (n(m, h), (h = Ua(y, m.mode, w)), (h.return = m), (m = h)),
        s(m))
      : n(m, h);
  }
  return k;
}
var Cr = rh(!0),
  ih = rh(!1),
  Zi = {},
  Mt = Rn(Zi),
  Ai = Rn(Zi),
  Mi = Rn(Zi);
function Fn(e) {
  if (e === Zi) throw Error(G(174));
  return e;
}
function Hu(e, t) {
  switch ((he(Mi, t), he(Ai, e), he(Mt, Zi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : fl(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = fl(t, e));
  }
  me(Mt), he(Mt, t);
}
function Ir() {
  me(Mt), me(Ai), me(Mi);
}
function oh(e) {
  Fn(Mi.current);
  var t = Fn(Mt.current),
    n = fl(t, e.type);
  t !== n && (he(Ai, e), he(Mt, n));
}
function $u(e) {
  Ai.current === e && (me(Mt), me(Ai));
}
var ye = Rn(0);
function gs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')) return t;
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
var Aa = [];
function Vu() {
  for (var e = 0; e < Aa.length; e++) Aa[e]._workInProgressVersionPrimary = null;
  Aa.length = 0;
}
var Fo = Jt.ReactCurrentDispatcher,
  Ma = Jt.ReactCurrentBatchConfig,
  Wn = 0,
  we = null,
  be = null,
  Oe = null,
  hs = !1,
  ci = !1,
  Li = 0,
  jy = 0;
function Ae() {
  throw Error(G(321));
}
function Wu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ot(e[n], t[n])) return !1;
  return !0;
}
function Bu(e, t, n, r, a, l) {
  if (
    ((Wn = l),
    (we = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Fo.current = e === null || e.memoizedState === null ? Ry : Cy),
    (e = n(r, a)),
    ci)
  ) {
    l = 0;
    do {
      if (((ci = !1), (Li = 0), 25 <= l)) throw Error(G(301));
      (l += 1), (Oe = be = null), (t.updateQueue = null), (Fo.current = Iy), (e = n(r, a));
    } while (ci);
  }
  if (((Fo.current = ps), (t = be !== null && be.next !== null), (Wn = 0), (Oe = be = we = null), (hs = !1), t))
    throw Error(G(300));
  return e;
}
function Ku() {
  var e = Li !== 0;
  return (Li = 0), e;
}
function Ct() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Oe === null ? (we.memoizedState = Oe = e) : (Oe = Oe.next = e), Oe;
}
function ht() {
  if (be === null) {
    var e = we.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = be.next;
  var t = Oe === null ? we.memoizedState : Oe.next;
  if (t !== null) (Oe = t), (be = e);
  else {
    if (e === null) throw Error(G(310));
    (be = e),
      (e = {
        memoizedState: be.memoizedState,
        baseState: be.baseState,
        baseQueue: be.baseQueue,
        queue: be.queue,
        next: null,
      }),
      Oe === null ? (we.memoizedState = Oe = e) : (Oe = Oe.next = e);
  }
  return Oe;
}
function Ni(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function La(e) {
  var t = ht(),
    n = t.queue;
  if (n === null) throw Error(G(311));
  n.lastRenderedReducer = e;
  var r = be,
    a = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (a !== null) {
      var s = a.next;
      (a.next = l.next), (l.next = s);
    }
    (r.baseQueue = a = l), (n.pending = null);
  }
  if (a !== null) {
    (l = a.next), (r = r.baseState);
    var i = (s = null),
      o = null,
      u = l;
    do {
      var c = u.lane;
      if ((Wn & c) === c)
        o !== null &&
          (o = o.next =
            { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = { lane: c, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
        o === null ? ((i = o = d), (s = r)) : (o = o.next = d), (we.lanes |= c), (Bn |= c);
      }
      u = u.next;
    } while (u !== null && u !== l);
    o === null ? (s = r) : (o.next = i),
      Ot(r, t.memoizedState) || (We = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = o),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    a = e;
    do (l = a.lane), (we.lanes |= l), (Bn |= l), (a = a.next);
    while (a !== e);
  } else a === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Na(e) {
  var t = ht(),
    n = t.queue;
  if (n === null) throw Error(G(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    a = n.pending,
    l = t.memoizedState;
  if (a !== null) {
    n.pending = null;
    var s = (a = a.next);
    do (l = e(l, s.action)), (s = s.next);
    while (s !== a);
    Ot(l, t.memoizedState) || (We = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function sh() {}
function ah(e, t) {
  var n = we,
    r = ht(),
    a = t(),
    l = !Ot(r.memoizedState, a);
  if (
    (l && ((r.memoizedState = a), (We = !0)),
    (r = r.queue),
    Gu(ch.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (Oe !== null && Oe.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Di(9, uh.bind(null, n, r, a, t), void 0, null), Pe === null)) throw Error(G(349));
    Wn & 30 || lh(n, t, a);
  }
  return a;
}
function lh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = we.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (we.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function uh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), dh(t) && fh(e);
}
function ch(e, t, n) {
  return n(function () {
    dh(t) && fh(e);
  });
}
function dh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ot(e, n);
  } catch {
    return !0;
  }
}
function fh(e) {
  var t = Qt(e, 1);
  t !== null && jt(t, e, 1, -1);
}
function wd(e) {
  var t = Ct();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ni, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = Ty.bind(null, we, e)),
    [t.memoizedState, e]
  );
}
function Di(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = we.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (we.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function gh() {
  return ht().memoizedState;
}
function Uo(e, t, n, r) {
  var a = Ct();
  (we.flags |= e), (a.memoizedState = Di(1 | t, n, void 0, r === void 0 ? null : r));
}
function Hs(e, t, n, r) {
  var a = ht();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (be !== null) {
    var s = be.memoizedState;
    if (((l = s.destroy), r !== null && Wu(r, s.deps))) {
      a.memoizedState = Di(t, n, l, r);
      return;
    }
  }
  (we.flags |= e), (a.memoizedState = Di(1 | t, n, l, r));
}
function kd(e, t) {
  return Uo(8390656, 8, e, t);
}
function Gu(e, t) {
  return Hs(2048, 8, e, t);
}
function hh(e, t) {
  return Hs(4, 2, e, t);
}
function ph(e, t) {
  return Hs(4, 4, e, t);
}
function mh(e, t) {
  if (typeof t == 'function')
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
function vh(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), Hs(4, 4, mh.bind(null, t, e), n);
}
function Yu() {}
function yh(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function wh(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wu(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function kh(e, t, n) {
  return Wn & 21
    ? (Ot(n, t) || ((n = Eg()), (we.lanes |= n), (Bn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (We = !0)), (e.memoizedState = n));
}
function Oy(e, t) {
  var n = ce;
  (ce = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ma.transition;
  Ma.transition = {};
  try {
    e(!1), t();
  } finally {
    (ce = n), (Ma.transition = r);
  }
}
function _h() {
  return ht().memoizedState;
}
function Py(e, t, n) {
  var r = kn(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Sh(e))) Eh(t, n);
  else if (((n = Zg(e, t, n, r)), n !== null)) {
    var a = Fe();
    jt(n, e, r, a), bh(n, t, r);
  }
}
function Ty(e, t, n) {
  var r = kn(e),
    a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Sh(e)) Eh(t, a);
  else {
    var l = e.alternate;
    if (e.lanes === 0 && (l === null || l.lanes === 0) && ((l = t.lastRenderedReducer), l !== null))
      try {
        var s = t.lastRenderedState,
          i = l(s, n);
        if (((a.hasEagerState = !0), (a.eagerState = i), Ot(i, s))) {
          var o = t.interleaved;
          o === null ? ((a.next = a), Uu(t)) : ((a.next = o.next), (o.next = a)), (t.interleaved = a);
          return;
        }
      } catch {
      } finally {
      }
    (n = Zg(e, t, a, r)), n !== null && ((a = Fe()), jt(n, e, r, a), bh(n, t, r));
  }
}
function Sh(e) {
  var t = e.alternate;
  return e === we || (t !== null && t === we);
}
function Eh(e, t) {
  ci = hs = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function bh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ju(e, n);
  }
}
var ps = {
    readContext: gt,
    useCallback: Ae,
    useContext: Ae,
    useEffect: Ae,
    useImperativeHandle: Ae,
    useInsertionEffect: Ae,
    useLayoutEffect: Ae,
    useMemo: Ae,
    useReducer: Ae,
    useRef: Ae,
    useState: Ae,
    useDebugValue: Ae,
    useDeferredValue: Ae,
    useTransition: Ae,
    useMutableSource: Ae,
    useSyncExternalStore: Ae,
    useId: Ae,
    unstable_isNewReconciler: !1,
  },
  Ry = {
    readContext: gt,
    useCallback: function (e, t) {
      return (Ct().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: gt,
    useEffect: kd,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), Uo(4194308, 4, mh.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return Uo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Uo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ct();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = Ct();
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
        (e = e.dispatch = Py.bind(null, we, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ct();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: wd,
    useDebugValue: Yu,
    useDeferredValue: function (e) {
      return (Ct().memoizedState = e);
    },
    useTransition: function () {
      var e = wd(!1),
        t = e[0];
      return (e = Oy.bind(null, e[1])), (Ct().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = we,
        a = Ct();
      if (ve) {
        if (n === void 0) throw Error(G(407));
        n = n();
      } else {
        if (((n = t()), Pe === null)) throw Error(G(349));
        Wn & 30 || lh(r, t, n);
      }
      a.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (a.queue = l),
        kd(ch.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        Di(9, uh.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ct(),
        t = Pe.identifierPrefix;
      if (ve) {
        var n = Wt,
          r = Vt;
        (n = (r & ~(1 << (32 - bt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Li++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = jy++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Cy = {
    readContext: gt,
    useCallback: yh,
    useContext: gt,
    useEffect: Gu,
    useImperativeHandle: vh,
    useInsertionEffect: hh,
    useLayoutEffect: ph,
    useMemo: wh,
    useReducer: La,
    useRef: gh,
    useState: function () {
      return La(Ni);
    },
    useDebugValue: Yu,
    useDeferredValue: function (e) {
      var t = ht();
      return kh(t, be.memoizedState, e);
    },
    useTransition: function () {
      var e = La(Ni)[0],
        t = ht().memoizedState;
      return [e, t];
    },
    useMutableSource: sh,
    useSyncExternalStore: ah,
    useId: _h,
    unstable_isNewReconciler: !1,
  },
  Iy = {
    readContext: gt,
    useCallback: yh,
    useContext: gt,
    useEffect: Gu,
    useImperativeHandle: vh,
    useInsertionEffect: hh,
    useLayoutEffect: ph,
    useMemo: wh,
    useReducer: Na,
    useRef: gh,
    useState: function () {
      return Na(Ni);
    },
    useDebugValue: Yu,
    useDeferredValue: function (e) {
      var t = ht();
      return be === null ? (t.memoizedState = e) : kh(t, be.memoizedState, e);
    },
    useTransition: function () {
      var e = Na(Ni)[0],
        t = ht().memoizedState;
      return [e, t];
    },
    useMutableSource: sh,
    useSyncExternalStore: ah,
    useId: _h,
    unstable_isNewReconciler: !1,
  };
function xr(e, t) {
  try {
    var n = '',
      r = t;
    do (n += ov(r)), (r = r.return);
    while (r);
    var a = n;
  } catch (l) {
    a =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function Da(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ll(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var xy = typeof WeakMap == 'function' ? WeakMap : Map;
function jh(e, t, n) {
  (n = Bt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      vs || ((vs = !0), (Bl = r)), Ll(e, t);
    }),
    n
  );
}
function Oh(e, t, n) {
  (n = Bt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var a = t.value;
    (n.payload = function () {
      return r(a);
    }),
      (n.callback = function () {
        Ll(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == 'function' &&
      (n.callback = function () {
        Ll(e, t), typeof r != 'function' && (wn === null ? (wn = new Set([this])) : wn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, { componentStack: s !== null ? s : '' });
      }),
    n
  );
}
function _d(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new xy();
    var a = new Set();
    r.set(t, a);
  } else (a = r.get(t)), a === void 0 && ((a = new Set()), r.set(t, a));
  a.has(n) || (a.add(n), (e = Ky.bind(null, e, t, n)), t.then(e, e));
}
function Sd(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ed(e, t, n, r, a) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = a), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = Bt(-1, 1)), (t.tag = 2), yn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ay = Jt.ReactCurrentOwner,
  We = !1;
function De(e, t, n, r) {
  t.child = e === null ? ih(t, null, n, r) : Cr(t, e.child, n, r);
}
function bd(e, t, n, r, a) {
  n = n.render;
  var l = t.ref;
  return (
    _r(t, a),
    (r = Bu(e, t, n, r, l, a)),
    (n = Ku()),
    e !== null && !We
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Xt(e, t, a))
      : (ve && n && Au(t), (t.flags |= 1), De(e, t, r, a), t.child)
  );
}
function jd(e, t, n, r, a) {
  if (e === null) {
    var l = n.type;
    return typeof l == 'function' &&
      !nc(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Ph(e, t, l, r, a))
      : ((e = Vo(n.type, null, r, t, t.mode, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((l = e.child), !(e.lanes & a))) {
    var s = l.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : Ri), n(s, r) && e.ref === t.ref)) return Xt(e, t, a);
  }
  return (t.flags |= 1), (e = _n(l, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Ph(e, t, n, r, a) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Ri(l, r) && e.ref === t.ref)
      if (((We = !1), (t.pendingProps = r = l), (e.lanes & a) !== 0)) e.flags & 131072 && (We = !0);
      else return (t.lanes = e.lanes), Xt(e, t, a);
  }
  return Nl(e, t, n, r, a);
}
function Th(e, t, n) {
  var r = t.pendingProps,
    a = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), he(pr, Qe), (Qe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          he(pr, Qe),
          (Qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        he(pr, Qe),
        (Qe |= r);
    }
  else l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n), he(pr, Qe), (Qe |= r);
  return De(e, t, a, n), t.child;
}
function Rh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function Nl(e, t, n, r, a) {
  var l = Ke(n) ? $n : Ne.current;
  return (
    (l = Tr(t, l)),
    _r(t, a),
    (n = Bu(e, t, n, r, l, a)),
    (r = Ku()),
    e !== null && !We
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Xt(e, t, a))
      : (ve && r && Au(t), (t.flags |= 1), De(e, t, n, a), t.child)
  );
}
function Od(e, t, n, r, a) {
  if (Ke(n)) {
    var l = !0;
    as(t);
  } else l = !1;
  if ((_r(t, a), t.stateNode === null)) zo(e, t), nh(t, n, r), Ml(t, n, r, a), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      i = t.memoizedProps;
    s.props = i;
    var o = s.context,
      u = n.contextType;
    typeof u == 'object' && u !== null ? (u = gt(u)) : ((u = Ke(n) ? $n : Ne.current), (u = Tr(t, u)));
    var c = n.getDerivedStateFromProps,
      d = typeof c == 'function' || typeof s.getSnapshotBeforeUpdate == 'function';
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' && typeof s.componentWillReceiveProps != 'function') ||
      ((i !== r || o !== u) && vd(t, s, r, u)),
      (an = !1);
    var f = t.memoizedState;
    (s.state = f),
      fs(t, r, s, a),
      (o = t.memoizedState),
      i !== r || f !== o || Be.current || an
        ? (typeof c == 'function' && (Al(t, n, c, r), (o = t.memoizedState)),
          (i = an || md(t, n, i, r, f, o, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != 'function' && typeof s.componentWillMount != 'function') ||
                (typeof s.componentWillMount == 'function' && s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == 'function' && s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = o)),
          (s.props = r),
          (s.state = o),
          (s.context = u),
          (r = i))
        : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
  } else {
    (s = t.stateNode),
      eh(e, t),
      (i = t.memoizedProps),
      (u = t.type === t.elementType ? i : yt(t.type, i)),
      (s.props = u),
      (d = t.pendingProps),
      (f = s.context),
      (o = n.contextType),
      typeof o == 'object' && o !== null ? (o = gt(o)) : ((o = Ke(n) ? $n : Ne.current), (o = Tr(t, o)));
    var p = n.getDerivedStateFromProps;
    (c = typeof p == 'function' || typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' && typeof s.componentWillReceiveProps != 'function') ||
      ((i !== d || f !== o) && vd(t, s, r, o)),
      (an = !1),
      (f = t.memoizedState),
      (s.state = f),
      fs(t, r, s, a);
    var g = t.memoizedState;
    i !== d || f !== g || Be.current || an
      ? (typeof p == 'function' && (Al(t, n, p, r), (g = t.memoizedState)),
        (u = an || md(t, n, u, r, f, g, o) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != 'function' && typeof s.componentWillUpdate != 'function') ||
              (typeof s.componentWillUpdate == 'function' && s.componentWillUpdate(r, g, o),
              typeof s.UNSAFE_componentWillUpdate == 'function' && s.UNSAFE_componentWillUpdate(r, g, o)),
            typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != 'function' ||
              (i === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (i === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (s.props = r),
        (s.state = g),
        (s.context = o),
        (r = u))
      : (typeof s.componentDidUpdate != 'function' ||
          (i === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != 'function' ||
          (i === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Dl(e, t, n, r, l, a);
}
function Dl(e, t, n, r, a, l) {
  Rh(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return a && dd(t, n, !1), Xt(e, t, l);
  (r = t.stateNode), (Ay.current = t);
  var i = s && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s ? ((t.child = Cr(t, e.child, null, l)), (t.child = Cr(t, null, i, l))) : De(e, t, i, l),
    (t.memoizedState = r.state),
    a && dd(t, n, !0),
    t.child
  );
}
function Ch(e) {
  var t = e.stateNode;
  t.pendingContext ? cd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && cd(e, t.context, !1),
    Hu(e, t.containerInfo);
}
function Pd(e, t, n, r, a) {
  return Rr(), Lu(a), (t.flags |= 256), De(e, t, n, r), t.child;
}
var Fl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ul(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ih(e, t, n) {
  var r = t.pendingProps,
    a = ye.current,
    l = !1,
    s = (t.flags & 128) !== 0,
    i;
  if (
    ((i = s) || (i = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
    i ? ((l = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (a |= 1),
    he(ye, a & 1),
    e === null)
  )
    return (
      Il(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((s = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (s = { mode: 'hidden', children: s }),
              !(r & 1) && l !== null ? ((l.childLanes = 0), (l.pendingProps = s)) : (l = Ws(s, r, 0, null)),
              (e = Hn(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = Ul(n)),
              (t.memoizedState = Fl),
              e)
            : Qu(t, s))
    );
  if (((a = e.memoizedState), a !== null && ((i = a.dehydrated), i !== null))) return My(e, t, s, r, i, a, n);
  if (l) {
    (l = r.fallback), (s = t.mode), (a = e.child), (i = a.sibling);
    var o = { mode: 'hidden', children: r.children };
    return (
      !(s & 1) && t.child !== a
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = o), (t.deletions = null))
        : ((r = _n(a, o)), (r.subtreeFlags = a.subtreeFlags & 14680064)),
      i !== null ? (l = _n(i, l)) : ((l = Hn(l, s, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (s = e.child.memoizedState),
      (s = s === null ? Ul(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
      (l.memoizedState = s),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = Fl),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = _n(l, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Qu(e, t) {
  return (t = Ws({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function ko(e, t, n, r) {
  return (
    r !== null && Lu(r),
    Cr(t, e.child, null, n),
    (e = Qu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function My(e, t, n, r, a, l, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Da(Error(G(422)))), ko(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((l = r.fallback),
          (a = t.mode),
          (r = Ws({ mode: 'visible', children: r.children }, a, 0, null)),
          (l = Hn(l, a, s, null)),
          (l.flags |= 2),
          (r.return = t),
          (l.return = t),
          (r.sibling = l),
          (t.child = r),
          t.mode & 1 && Cr(t, e.child, null, s),
          (t.child.memoizedState = Ul(s)),
          (t.memoizedState = Fl),
          l);
  if (!(t.mode & 1)) return ko(e, t, s, null);
  if (a.data === '$!') {
    if (((r = a.nextSibling && a.nextSibling.dataset), r)) var i = r.dgst;
    return (r = i), (l = Error(G(419))), (r = Da(l, r, void 0)), ko(e, t, s, r);
  }
  if (((i = (s & e.childLanes) !== 0), We || i)) {
    if (((r = Pe), r !== null)) {
      switch (s & -s) {
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
      (a = a & (r.suspendedLanes | s) ? 0 : a),
        a !== 0 && a !== l.retryLane && ((l.retryLane = a), Qt(e, a), jt(r, e, a, -1));
    }
    return tc(), (r = Da(Error(G(421)))), ko(e, t, s, r);
  }
  return a.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = Gy.bind(null, e)), (a._reactRetry = t), null)
    : ((e = l.treeContext),
      (Je = vn(a.nextSibling)),
      (Ze = t),
      (ve = !0),
      (kt = null),
      e !== null && ((at[lt++] = Vt), (at[lt++] = Wt), (at[lt++] = Vn), (Vt = e.id), (Wt = e.overflow), (Vn = t)),
      (t = Qu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Td(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), xl(e.return, t, n);
}
function Fa(e, t, n, r, a) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = a));
}
function xh(e, t, n) {
  var r = t.pendingProps,
    a = r.revealOrder,
    l = r.tail;
  if ((De(e, t, r.children, n), (r = ye.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Td(e, n, t);
        else if (e.tag === 19) Td(e, n, t);
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
  if ((he(ye, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (a) {
      case 'forwards':
        for (n = t.child, a = null; n !== null; )
          (e = n.alternate), e !== null && gs(e) === null && (a = n), (n = n.sibling);
        (n = a),
          n === null ? ((a = t.child), (t.child = null)) : ((a = n.sibling), (n.sibling = null)),
          Fa(t, !1, a, n, l);
        break;
      case 'backwards':
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (((e = a.alternate), e !== null && gs(e) === null)) {
            t.child = a;
            break;
          }
          (e = a.sibling), (a.sibling = n), (n = a), (a = e);
        }
        Fa(t, !0, n, null, l);
        break;
      case 'together':
        Fa(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function zo(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Xt(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Bn |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(G(153));
  if (t.child !== null) {
    for (e = t.child, n = _n(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = _n(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Ly(e, t, n) {
  switch (t.tag) {
    case 3:
      Ch(t), Rr();
      break;
    case 5:
      oh(t);
      break;
    case 1:
      Ke(t.type) && as(t);
      break;
    case 4:
      Hu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        a = t.memoizedProps.value;
      he(cs, r._currentValue), (r._currentValue = a);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (he(ye, ye.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Ih(e, t, n)
            : (he(ye, ye.current & 1), (e = Xt(e, t, n)), e !== null ? e.sibling : null);
      he(ye, ye.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return xh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((a = t.memoizedState),
        a !== null && ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
        he(ye, ye.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Th(e, t, n);
  }
  return Xt(e, t, n);
}
var Ah, zl, Mh, Lh;
Ah = function (e, t) {
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
zl = function () {};
Mh = function (e, t, n, r) {
  var a = e.memoizedProps;
  if (a !== r) {
    (e = t.stateNode), Fn(Mt.current);
    var l = null;
    switch (n) {
      case 'input':
        (a = ll(e, a)), (r = ll(e, r)), (l = []);
        break;
      case 'select':
        (a = ke({}, a, { value: void 0 })), (r = ke({}, r, { value: void 0 })), (l = []);
        break;
      case 'textarea':
        (a = dl(e, a)), (r = dl(e, r)), (l = []);
        break;
      default:
        typeof a.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = os);
    }
    gl(n, r);
    var s;
    n = null;
    for (u in a)
      if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && a[u] != null)
        if (u === 'style') {
          var i = a[u];
          for (s in i) i.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Si.hasOwnProperty(u) ? l || (l = []) : (l = l || []).push(u, null));
    for (u in r) {
      var o = r[u];
      if (((i = a != null ? a[u] : void 0), r.hasOwnProperty(u) && o !== i && (o != null || i != null)))
        if (u === 'style')
          if (i) {
            for (s in i) !i.hasOwnProperty(s) || (o && o.hasOwnProperty(s)) || (n || (n = {}), (n[s] = ''));
            for (s in o) o.hasOwnProperty(s) && i[s] !== o[s] && (n || (n = {}), (n[s] = o[s]));
          } else n || (l || (l = []), l.push(u, n)), (n = o);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((o = o ? o.__html : void 0),
              (i = i ? i.__html : void 0),
              o != null && i !== o && (l = l || []).push(u, o))
            : u === 'children'
              ? (typeof o != 'string' && typeof o != 'number') || (l = l || []).push(u, '' + o)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (Si.hasOwnProperty(u)
                  ? (o != null && u === 'onScroll' && pe('scroll', e), l || i === o || (l = []))
                  : (l = l || []).push(u, o));
    }
    n && (l = l || []).push('style', n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Lh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Yr(e, t) {
  if (!ve)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
    }
}
function Me(e) {
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
      (n |= a.lanes | a.childLanes), (r |= a.subtreeFlags), (r |= a.flags), (a.return = e), (a = a.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Ny(e, t, n) {
  var r = t.pendingProps;
  switch ((Mu(t), t.tag)) {
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
      return Me(t), null;
    case 1:
      return Ke(t.type) && ss(), Me(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Ir(),
        me(Be),
        me(Ne),
        Vu(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (yo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), kt !== null && (Yl(kt), (kt = null)))),
        zl(e, t),
        Me(t),
        null
      );
    case 5:
      $u(t);
      var a = Fn(Mi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Mh(e, t, n, r, a), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(G(166));
          return Me(t), null;
        }
        if (((e = Fn(Mt.current)), yo(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[xt] = t), (r[xi] = l), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              pe('cancel', r), pe('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              pe('load', r);
              break;
            case 'video':
            case 'audio':
              for (a = 0; a < ri.length; a++) pe(ri[a], r);
              break;
            case 'source':
              pe('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              pe('error', r), pe('load', r);
              break;
            case 'details':
              pe('toggle', r);
              break;
            case 'input':
              Dc(r, l), pe('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!l.multiple }), pe('invalid', r);
              break;
            case 'textarea':
              Uc(r, l), pe('invalid', r);
          }
          gl(n, l), (a = null);
          for (var s in l)
            if (l.hasOwnProperty(s)) {
              var i = l[s];
              s === 'children'
                ? typeof i == 'string'
                  ? r.textContent !== i &&
                    (l.suppressHydrationWarning !== !0 && vo(r.textContent, i, e), (a = ['children', i]))
                  : typeof i == 'number' &&
                    r.textContent !== '' + i &&
                    (l.suppressHydrationWarning !== !0 && vo(r.textContent, i, e), (a = ['children', '' + i]))
                : Si.hasOwnProperty(s) && i != null && s === 'onScroll' && pe('scroll', r);
            }
          switch (n) {
            case 'input':
              lo(r), Fc(r, l, !0);
              break;
            case 'textarea':
              lo(r), zc(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof l.onClick == 'function' && (r.onclick = os);
          }
          (r = a), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = a.nodeType === 9 ? a : a.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = lg(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = s.createElement('div')), (e.innerHTML = '<script></script>'), (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === 'select' && ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[xt] = t),
            (e[xi] = r),
            Ah(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = hl(n, r)), n)) {
              case 'dialog':
                pe('cancel', e), pe('close', e), (a = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                pe('load', e), (a = r);
                break;
              case 'video':
              case 'audio':
                for (a = 0; a < ri.length; a++) pe(ri[a], e);
                a = r;
                break;
              case 'source':
                pe('error', e), (a = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                pe('error', e), pe('load', e), (a = r);
                break;
              case 'details':
                pe('toggle', e), (a = r);
                break;
              case 'input':
                Dc(e, r), (a = ll(e, r)), pe('invalid', e);
                break;
              case 'option':
                a = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }), (a = ke({}, r, { value: void 0 })), pe('invalid', e);
                break;
              case 'textarea':
                Uc(e, r), (a = dl(e, r)), pe('invalid', e);
                break;
              default:
                a = r;
            }
            gl(n, a), (i = a);
            for (l in i)
              if (i.hasOwnProperty(l)) {
                var o = i[l];
                l === 'style'
                  ? dg(e, o)
                  : l === 'dangerouslySetInnerHTML'
                    ? ((o = o ? o.__html : void 0), o != null && ug(e, o))
                    : l === 'children'
                      ? typeof o == 'string'
                        ? (n !== 'textarea' || o !== '') && Ei(e, o)
                        : typeof o == 'number' && Ei(e, '' + o)
                      : l !== 'suppressContentEditableWarning' &&
                        l !== 'suppressHydrationWarning' &&
                        l !== 'autoFocus' &&
                        (Si.hasOwnProperty(l)
                          ? o != null && l === 'onScroll' && pe('scroll', e)
                          : o != null && wu(e, l, o, s));
              }
            switch (n) {
              case 'input':
                lo(e), Fc(e, r, !1);
                break;
              case 'textarea':
                lo(e), zc(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + jn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? vr(e, !!r.multiple, l, !1)
                    : r.defaultValue != null && vr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof a.onClick == 'function' && (e.onclick = os);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
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
      return Me(t), null;
    case 6:
      if (e && t.stateNode != null) Lh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(G(166));
        if (((n = Fn(Mi.current)), Fn(Mt.current), yo(t))) {
          if (
            ((r = t.stateNode), (n = t.memoizedProps), (r[xt] = t), (l = r.nodeValue !== n) && ((e = Ze), e !== null))
          )
            switch (e.tag) {
              case 3:
                vo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && vo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[xt] = t), (t.stateNode = r);
      }
      return Me(t), null;
    case 13:
      if (
        (me(ye), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ve && Je !== null && t.mode & 1 && !(t.flags & 128)) qg(), Rr(), (t.flags |= 98560), (l = !1);
        else if (((l = yo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(G(318));
            if (((l = t.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error(G(317));
            l[xt] = t;
          } else Rr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Me(t), (l = !1);
        } else kt !== null && (Yl(kt), (kt = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || ye.current & 1 ? je === 0 && (je = 3) : tc())),
          t.updateQueue !== null && (t.flags |= 4),
          Me(t),
          null);
    case 4:
      return Ir(), zl(e, t), e === null && Ci(t.stateNode.containerInfo), Me(t), null;
    case 10:
      return Fu(t.type._context), Me(t), null;
    case 17:
      return Ke(t.type) && ss(), Me(t), null;
    case 19:
      if ((me(ye), (l = t.memoizedState), l === null)) return Me(t), null;
      if (((r = (t.flags & 128) !== 0), (s = l.rendering), s === null))
        if (r) Yr(l, !1);
        else {
          if (je !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = gs(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Yr(l, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (s = l.alternate),
                    s === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = s.childLanes),
                        (l.lanes = s.lanes),
                        (l.child = s.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = s.memoizedProps),
                        (l.memoizedState = s.memoizedState),
                        (l.updateQueue = s.updateQueue),
                        (l.type = s.type),
                        (e = s.dependencies),
                        (l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return he(ye, (ye.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null && Se() > Ar && ((t.flags |= 128), (r = !0), Yr(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = gs(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Yr(l, !0),
              l.tail === null && l.tailMode === 'hidden' && !s.alternate && !ve)
            )
              return Me(t), null;
          } else
            2 * Se() - l.renderingStartTime > Ar &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Yr(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = l.last), n !== null ? (n.sibling = s) : (t.child = s), (l.last = s));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = Se()),
          (t.sibling = null),
          (n = ye.current),
          he(ye, r ? (n & 1) | 2 : n & 1),
          t)
        : (Me(t), null);
    case 22:
    case 23:
      return (
        ec(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Qe & 1073741824 && (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Me(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(G(156, t.tag));
}
function Dy(e, t) {
  switch ((Mu(t), t.tag)) {
    case 1:
      return Ke(t.type) && ss(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return (
        Ir(), me(Be), me(Ne), Vu(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return $u(t), null;
    case 13:
      if ((me(ye), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(G(340));
        Rr();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return me(ye), null;
    case 4:
      return Ir(), null;
    case 10:
      return Fu(t.type._context), null;
    case 22:
    case 23:
      return ec(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var _o = !1,
  Le = !1,
  Fy = typeof WeakSet == 'function' ? WeakSet : Set,
  Z = null;
function hr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        _e(e, t, r);
      }
    else n.current = null;
}
function Hl(e, t, n) {
  try {
    n();
  } catch (r) {
    _e(e, t, r);
  }
}
var Rd = !1;
function Uy(e, t) {
  if (((bl = ns), (e = Ug()), xu(e))) {
    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var a = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            i = -1,
            o = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var p;
              d !== n || (a !== 0 && d.nodeType !== 3) || (i = s + a),
                d !== l || (r !== 0 && d.nodeType !== 3) || (o = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (p = d.firstChild) !== null;

            )
              (f = d), (d = p);
            for (;;) {
              if (d === e) break t;
              if ((f === n && ++u === a && (i = s), f === l && ++c === r && (o = s), (p = d.nextSibling) !== null))
                break;
              (d = f), (f = d.parentNode);
            }
            d = p;
          }
          n = i === -1 || o === -1 ? null : { start: i, end: o };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (jl = { focusedElem: e, selectionRange: n }, ns = !1, Z = t; Z !== null; )
    if (((t = Z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (Z = e);
    else
      for (; Z !== null; ) {
        t = Z;
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
                  var v = g.memoizedProps,
                    k = g.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : yt(t.type, v), k);
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = '')
                  : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(G(163));
            }
        } catch (w) {
          _e(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (Z = e);
          break;
        }
        Z = t.return;
      }
  return (g = Rd), (Rd = !1), g;
}
function di(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var a = (r = r.next);
    do {
      if ((a.tag & e) === e) {
        var l = a.destroy;
        (a.destroy = void 0), l !== void 0 && Hl(t, n, l);
      }
      a = a.next;
    } while (a !== r);
  }
}
function $s(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
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
function $l(e) {
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
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Nh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Nh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode), t !== null && (delete t[xt], delete t[xi], delete t[Tl], delete t[_y], delete t[Sy])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Dh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Cd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Dh(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Vl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = os));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Vl(e, t, n), e = e.sibling; e !== null; ) Vl(e, t, n), (e = e.sibling);
}
function Wl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Wl(e, t, n), e = e.sibling; e !== null; ) Wl(e, t, n), (e = e.sibling);
}
var Re = null,
  wt = !1;
function tn(e, t, n) {
  for (n = n.child; n !== null; ) Fh(e, t, n), (n = n.sibling);
}
function Fh(e, t, n) {
  if (At && typeof At.onCommitFiberUnmount == 'function')
    try {
      At.onCommitFiberUnmount(Ms, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Le || hr(n, t);
    case 6:
      var r = Re,
        a = wt;
      (Re = null),
        tn(e, t, n),
        (Re = r),
        (wt = a),
        Re !== null &&
          (wt
            ? ((e = Re), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Re.removeChild(n.stateNode));
      break;
    case 18:
      Re !== null &&
        (wt
          ? ((e = Re), (n = n.stateNode), e.nodeType === 8 ? Ia(e.parentNode, n) : e.nodeType === 1 && Ia(e, n), Pi(e))
          : Ia(Re, n.stateNode));
      break;
    case 4:
      (r = Re), (a = wt), (Re = n.stateNode.containerInfo), (wt = !0), tn(e, t, n), (Re = r), (wt = a);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Le && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        a = r = r.next;
        do {
          var l = a,
            s = l.destroy;
          (l = l.tag), s !== void 0 && (l & 2 || l & 4) && Hl(n, t, s), (a = a.next);
        } while (a !== r);
      }
      tn(e, t, n);
      break;
    case 1:
      if (!Le && (hr(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (i) {
          _e(n, t, i);
        }
      tn(e, t, n);
      break;
    case 21:
      tn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((Le = (r = Le) || n.memoizedState !== null), tn(e, t, n), (Le = r)) : tn(e, t, n);
      break;
    default:
      tn(e, t, n);
  }
}
function Id(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Fy()),
      t.forEach(function (r) {
        var a = Yy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(a, a));
      });
  }
}
function vt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var a = n[r];
      try {
        var l = e,
          s = t,
          i = s;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case 5:
              (Re = i.stateNode), (wt = !1);
              break e;
            case 3:
              (Re = i.stateNode.containerInfo), (wt = !0);
              break e;
            case 4:
              (Re = i.stateNode.containerInfo), (wt = !0);
              break e;
          }
          i = i.return;
        }
        if (Re === null) throw Error(G(160));
        Fh(l, s, a), (Re = null), (wt = !1);
        var o = a.alternate;
        o !== null && (o.return = null), (a.return = null);
      } catch (u) {
        _e(a, t, u);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Uh(t, e), (t = t.sibling);
}
function Uh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((vt(t, e), Rt(e), r & 4)) {
        try {
          di(3, e, e.return), $s(3, e);
        } catch (v) {
          _e(e, e.return, v);
        }
        try {
          di(5, e, e.return);
        } catch (v) {
          _e(e, e.return, v);
        }
      }
      break;
    case 1:
      vt(t, e), Rt(e), r & 512 && n !== null && hr(n, n.return);
      break;
    case 5:
      if ((vt(t, e), Rt(e), r & 512 && n !== null && hr(n, n.return), e.flags & 32)) {
        var a = e.stateNode;
        try {
          Ei(a, '');
        } catch (v) {
          _e(e, e.return, v);
        }
      }
      if (r & 4 && ((a = e.stateNode), a != null)) {
        var l = e.memoizedProps,
          s = n !== null ? n.memoizedProps : l,
          i = e.type,
          o = e.updateQueue;
        if (((e.updateQueue = null), o !== null))
          try {
            i === 'input' && l.type === 'radio' && l.name != null && sg(a, l), hl(i, s);
            var u = hl(i, l);
            for (s = 0; s < o.length; s += 2) {
              var c = o[s],
                d = o[s + 1];
              c === 'style'
                ? dg(a, d)
                : c === 'dangerouslySetInnerHTML'
                  ? ug(a, d)
                  : c === 'children'
                    ? Ei(a, d)
                    : wu(a, c, d, u);
            }
            switch (i) {
              case 'input':
                ul(a, l);
                break;
              case 'textarea':
                ag(a, l);
                break;
              case 'select':
                var f = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!l.multiple;
                var p = l.value;
                p != null
                  ? vr(a, !!l.multiple, p, !1)
                  : f !== !!l.multiple &&
                    (l.defaultValue != null
                      ? vr(a, !!l.multiple, l.defaultValue, !0)
                      : vr(a, !!l.multiple, l.multiple ? [] : '', !1));
            }
            a[xi] = l;
          } catch (v) {
            _e(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((vt(t, e), Rt(e), r & 4)) {
        if (e.stateNode === null) throw Error(G(162));
        (a = e.stateNode), (l = e.memoizedProps);
        try {
          a.nodeValue = l;
        } catch (v) {
          _e(e, e.return, v);
        }
      }
      break;
    case 3:
      if ((vt(t, e), Rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Pi(t.containerInfo);
        } catch (v) {
          _e(e, e.return, v);
        }
      break;
    case 4:
      vt(t, e), Rt(e);
      break;
    case 13:
      vt(t, e),
        Rt(e),
        (a = e.child),
        a.flags & 8192 &&
          ((l = a.memoizedState !== null),
          (a.stateNode.isHidden = l),
          !l || (a.alternate !== null && a.alternate.memoizedState !== null) || (qu = Se())),
        r & 4 && Id(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Le = (u = Le) || c), vt(t, e), (Le = u)) : vt(t, e),
        Rt(e),
        r & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1))
          for (Z = e, c = e.child; c !== null; ) {
            for (d = Z = c; Z !== null; ) {
              switch (((f = Z), (p = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  di(4, f, f.return);
                  break;
                case 1:
                  hr(f, f.return);
                  var g = f.stateNode;
                  if (typeof g.componentWillUnmount == 'function') {
                    (r = f), (n = f.return);
                    try {
                      (t = r), (g.props = t.memoizedProps), (g.state = t.memoizedState), g.componentWillUnmount();
                    } catch (v) {
                      _e(r, n, v);
                    }
                  }
                  break;
                case 5:
                  hr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Ad(d);
                    continue;
                  }
              }
              p !== null ? ((p.return = f), (Z = p)) : Ad(d);
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
                    ? ((l = a.style),
                      typeof l.setProperty == 'function'
                        ? l.setProperty('display', 'none', 'important')
                        : (l.display = 'none'))
                    : ((i = d.stateNode),
                      (o = d.memoizedProps.style),
                      (s = o != null && o.hasOwnProperty('display') ? o.display : null),
                      (i.style.display = cg('display', s)));
              } catch (v) {
                _e(e, e.return, v);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? '' : d.memoizedProps;
              } catch (v) {
                _e(e, e.return, v);
              }
          } else if (((d.tag !== 22 && d.tag !== 23) || d.memoizedState === null || d === e) && d.child !== null) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      vt(t, e), Rt(e), r & 4 && Id(e);
      break;
    case 21:
      break;
    default:
      vt(t, e), Rt(e);
  }
}
function Rt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Dh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(G(160));
      }
      switch (r.tag) {
        case 5:
          var a = r.stateNode;
          r.flags & 32 && (Ei(a, ''), (r.flags &= -33));
          var l = Cd(e);
          Wl(e, l, a);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            i = Cd(e);
          Vl(e, i, s);
          break;
        default:
          throw Error(G(161));
      }
    } catch (o) {
      _e(e, e.return, o);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function zy(e, t, n) {
  (Z = e), zh(e);
}
function zh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Z !== null; ) {
    var a = Z,
      l = a.child;
    if (a.tag === 22 && r) {
      var s = a.memoizedState !== null || _o;
      if (!s) {
        var i = a.alternate,
          o = (i !== null && i.memoizedState !== null) || Le;
        i = _o;
        var u = Le;
        if (((_o = s), (Le = o) && !u))
          for (Z = a; Z !== null; )
            (s = Z),
              (o = s.child),
              s.tag === 22 && s.memoizedState !== null ? Md(a) : o !== null ? ((o.return = s), (Z = o)) : Md(a);
        for (; l !== null; ) (Z = l), zh(l), (l = l.sibling);
        (Z = a), (_o = i), (Le = u);
      }
      xd(e);
    } else a.subtreeFlags & 8772 && l !== null ? ((l.return = a), (Z = l)) : xd(e);
  }
}
function xd(e) {
  for (; Z !== null; ) {
    var t = Z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Le || $s(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Le)
                if (n === null) r.componentDidMount();
                else {
                  var a = t.elementType === t.type ? n.memoizedProps : yt(t.type, n.memoizedProps);
                  r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var l = t.updateQueue;
              l !== null && pd(t, l, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                pd(t, s, n);
              }
              break;
            case 5:
              var i = t.stateNode;
              if (n === null && t.flags & 4) {
                n = i;
                var o = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    o.autoFocus && n.focus();
                    break;
                  case 'img':
                    o.src && (n.src = o.src);
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
                    d !== null && Pi(d);
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
              throw Error(G(163));
          }
        Le || (t.flags & 512 && $l(t));
      } catch (f) {
        _e(t, t.return, f);
      }
    }
    if (t === e) {
      Z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (Z = n);
      break;
    }
    Z = t.return;
  }
}
function Ad(e) {
  for (; Z !== null; ) {
    var t = Z;
    if (t === e) {
      Z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (Z = n);
      break;
    }
    Z = t.return;
  }
}
function Md(e) {
  for (; Z !== null; ) {
    var t = Z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            $s(4, t);
          } catch (o) {
            _e(t, n, o);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var a = t.return;
            try {
              r.componentDidMount();
            } catch (o) {
              _e(t, a, o);
            }
          }
          var l = t.return;
          try {
            $l(t);
          } catch (o) {
            _e(t, l, o);
          }
          break;
        case 5:
          var s = t.return;
          try {
            $l(t);
          } catch (o) {
            _e(t, s, o);
          }
      }
    } catch (o) {
      _e(t, t.return, o);
    }
    if (t === e) {
      Z = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      (i.return = t.return), (Z = i);
      break;
    }
    Z = t.return;
  }
}
var Hy = Math.ceil,
  ms = Jt.ReactCurrentDispatcher,
  Xu = Jt.ReactCurrentOwner,
  ft = Jt.ReactCurrentBatchConfig,
  ue = 0,
  Pe = null,
  Ee = null,
  Ce = 0,
  Qe = 0,
  pr = Rn(0),
  je = 0,
  Fi = null,
  Bn = 0,
  Vs = 0,
  Ju = 0,
  fi = null,
  Ve = null,
  qu = 0,
  Ar = 1 / 0,
  zt = null,
  vs = !1,
  Bl = null,
  wn = null,
  So = !1,
  dn = null,
  ys = 0,
  gi = 0,
  Kl = null,
  Ho = -1,
  $o = 0;
function Fe() {
  return ue & 6 ? Se() : Ho !== -1 ? Ho : (Ho = Se());
}
function kn(e) {
  return e.mode & 1
    ? ue & 2 && Ce !== 0
      ? Ce & -Ce
      : by.transition !== null
        ? ($o === 0 && ($o = Eg()), $o)
        : ((e = ce), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Cg(e.type))), e)
    : 1;
}
function jt(e, t, n, r) {
  if (50 < gi) throw ((gi = 0), (Kl = null), Error(G(185)));
  Xi(e, n, r),
    (!(ue & 2) || e !== Pe) &&
      (e === Pe && (!(ue & 2) && (Vs |= n), je === 4 && un(e, Ce)),
      Ge(e, r),
      n === 1 && ue === 0 && !(t.mode & 1) && ((Ar = Se() + 500), Us && Cn()));
}
function Ge(e, t) {
  var n = e.callbackNode;
  bv(e, t);
  var r = ts(e, e === Pe ? Ce : 0);
  if (r === 0) n !== null && Vc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Vc(n), t === 1))
      e.tag === 0 ? Ey(Ld.bind(null, e)) : Qg(Ld.bind(null, e)),
        wy(function () {
          !(ue & 6) && Cn();
        }),
        (n = null);
    else {
      switch (bg(r)) {
        case 1:
          n = bu;
          break;
        case 4:
          n = _g;
          break;
        case 16:
          n = es;
          break;
        case 536870912:
          n = Sg;
          break;
        default:
          n = es;
      }
      n = Yh(n, Hh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Hh(e, t) {
  if (((Ho = -1), ($o = 0), ue & 6)) throw Error(G(327));
  var n = e.callbackNode;
  if (Sr() && e.callbackNode !== n) return null;
  var r = ts(e, e === Pe ? Ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ws(e, r);
  else {
    t = r;
    var a = ue;
    ue |= 2;
    var l = Vh();
    (Pe !== e || Ce !== t) && ((zt = null), (Ar = Se() + 500), zn(e, t));
    do
      try {
        Wy();
        break;
      } catch (i) {
        $h(e, i);
      }
    while (!0);
    Du(), (ms.current = l), (ue = a), Ee !== null ? (t = 0) : ((Pe = null), (Ce = 0), (t = je));
  }
  if (t !== 0) {
    if ((t === 2 && ((a = wl(e)), a !== 0 && ((r = a), (t = Gl(e, a)))), t === 1))
      throw ((n = Fi), zn(e, 0), un(e, r), Ge(e, Se()), n);
    if (t === 6) un(e, r);
    else {
      if (
        ((a = e.current.alternate),
        !(r & 30) &&
          !$y(a) &&
          ((t = ws(e, r)), t === 2 && ((l = wl(e)), l !== 0 && ((r = l), (t = Gl(e, l)))), t === 1))
      )
        throw ((n = Fi), zn(e, 0), un(e, r), Ge(e, Se()), n);
      switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(G(345));
        case 2:
          An(e, Ve, zt);
          break;
        case 3:
          if ((un(e, r), (r & 130023424) === r && ((t = qu + 500 - Se()), 10 < t))) {
            if (ts(e, 0) !== 0) break;
            if (((a = e.suspendedLanes), (a & r) !== r)) {
              Fe(), (e.pingedLanes |= e.suspendedLanes & a);
              break;
            }
            e.timeoutHandle = Pl(An.bind(null, e, Ve, zt), t);
            break;
          }
          An(e, Ve, zt);
          break;
        case 4:
          if ((un(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var s = 31 - bt(r);
            (l = 1 << s), (s = t[s]), s > a && (a = s), (r &= ~l);
          }
          if (
            ((r = a),
            (r = Se() - r),
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
                          : 1960 * Hy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Pl(An.bind(null, e, Ve, zt), r);
            break;
          }
          An(e, Ve, zt);
          break;
        case 5:
          An(e, Ve, zt);
          break;
        default:
          throw Error(G(329));
      }
    }
  }
  return Ge(e, Se()), e.callbackNode === n ? Hh.bind(null, e) : null;
}
function Gl(e, t) {
  var n = fi;
  return (
    e.current.memoizedState.isDehydrated && (zn(e, t).flags |= 256),
    (e = ws(e, t)),
    e !== 2 && ((t = Ve), (Ve = n), t !== null && Yl(t)),
    e
  );
}
function Yl(e) {
  Ve === null ? (Ve = e) : Ve.push.apply(Ve, e);
}
function $y(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var a = n[r],
            l = a.getSnapshot;
          a = a.value;
          try {
            if (!Ot(l(), a)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
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
function un(e, t) {
  for (t &= ~Ju, t &= ~Vs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - bt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ld(e) {
  if (ue & 6) throw Error(G(327));
  Sr();
  var t = ts(e, 0);
  if (!(t & 1)) return Ge(e, Se()), null;
  var n = ws(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = wl(e);
    r !== 0 && ((t = r), (n = Gl(e, r)));
  }
  if (n === 1) throw ((n = Fi), zn(e, 0), un(e, t), Ge(e, Se()), n);
  if (n === 6) throw Error(G(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), An(e, Ve, zt), Ge(e, Se()), null;
}
function Zu(e, t) {
  var n = ue;
  ue |= 1;
  try {
    return e(t);
  } finally {
    (ue = n), ue === 0 && ((Ar = Se() + 500), Us && Cn());
  }
}
function Kn(e) {
  dn !== null && dn.tag === 0 && !(ue & 6) && Sr();
  var t = ue;
  ue |= 1;
  var n = ft.transition,
    r = ce;
  try {
    if (((ft.transition = null), (ce = 1), e)) return e();
  } finally {
    (ce = r), (ft.transition = n), (ue = t), !(ue & 6) && Cn();
  }
}
function ec() {
  (Qe = pr.current), me(pr);
}
function zn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), yy(n)), Ee !== null))
    for (n = Ee.return; n !== null; ) {
      var r = n;
      switch ((Mu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ss();
          break;
        case 3:
          Ir(), me(Be), me(Ne), Vu();
          break;
        case 5:
          $u(r);
          break;
        case 4:
          Ir();
          break;
        case 13:
          me(ye);
          break;
        case 19:
          me(ye);
          break;
        case 10:
          Fu(r.type._context);
          break;
        case 22:
        case 23:
          ec();
      }
      n = n.return;
    }
  if (
    ((Pe = e),
    (Ee = e = _n(e.current, null)),
    (Ce = Qe = t),
    (je = 0),
    (Fi = null),
    (Ju = Vs = Bn = 0),
    (Ve = fi = null),
    Dn !== null)
  ) {
    for (t = 0; t < Dn.length; t++)
      if (((n = Dn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var a = r.next,
          l = n.pending;
        if (l !== null) {
          var s = l.next;
          (l.next = a), (r.next = s);
        }
        n.pending = r;
      }
    Dn = null;
  }
  return e;
}
function $h(e, t) {
  do {
    var n = Ee;
    try {
      if ((Du(), (Fo.current = ps), hs)) {
        for (var r = we.memoizedState; r !== null; ) {
          var a = r.queue;
          a !== null && (a.pending = null), (r = r.next);
        }
        hs = !1;
      }
      if (
        ((Wn = 0), (Oe = be = we = null), (ci = !1), (Li = 0), (Xu.current = null), n === null || n.return === null)
      ) {
        (je = 1), (Fi = t), (Ee = null);
        break;
      }
      e: {
        var l = e,
          s = n.return,
          i = n,
          o = t;
        if (((t = Ce), (i.flags |= 32768), o !== null && typeof o == 'object' && typeof o.then == 'function')) {
          var u = o,
            c = i,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue), (c.memoizedState = f.memoizedState), (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var p = Sd(s);
          if (p !== null) {
            (p.flags &= -257), Ed(p, s, i, l, t), p.mode & 1 && _d(l, u, t), (t = p), (o = u);
            var g = t.updateQueue;
            if (g === null) {
              var v = new Set();
              v.add(o), (t.updateQueue = v);
            } else g.add(o);
            break e;
          } else {
            if (!(t & 1)) {
              _d(l, u, t), tc();
              break e;
            }
            o = Error(G(426));
          }
        } else if (ve && i.mode & 1) {
          var k = Sd(s);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256), Ed(k, s, i, l, t), Lu(xr(o, i));
            break e;
          }
        }
        (l = o = xr(o, i)), je !== 4 && (je = 2), fi === null ? (fi = [l]) : fi.push(l), (l = s);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var m = jh(l, o, t);
              hd(l, m);
              break e;
            case 1:
              i = o;
              var h = l.type,
                y = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof h.getDerivedStateFromError == 'function' ||
                  (y !== null && typeof y.componentDidCatch == 'function' && (wn === null || !wn.has(y))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var w = Oh(l, i, t);
                hd(l, w);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Bh(n);
    } catch (_) {
      (t = _), Ee === n && n !== null && (Ee = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Vh() {
  var e = ms.current;
  return (ms.current = ps), e === null ? ps : e;
}
function tc() {
  (je === 0 || je === 3 || je === 2) && (je = 4), Pe === null || (!(Bn & 268435455) && !(Vs & 268435455)) || un(Pe, Ce);
}
function ws(e, t) {
  var n = ue;
  ue |= 2;
  var r = Vh();
  (Pe !== e || Ce !== t) && ((zt = null), zn(e, t));
  do
    try {
      Vy();
      break;
    } catch (a) {
      $h(e, a);
    }
  while (!0);
  if ((Du(), (ue = n), (ms.current = r), Ee !== null)) throw Error(G(261));
  return (Pe = null), (Ce = 0), je;
}
function Vy() {
  for (; Ee !== null; ) Wh(Ee);
}
function Wy() {
  for (; Ee !== null && !pv(); ) Wh(Ee);
}
function Wh(e) {
  var t = Gh(e.alternate, e, Qe);
  (e.memoizedProps = e.pendingProps), t === null ? Bh(e) : (Ee = t), (Xu.current = null);
}
function Bh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Dy(n, t)), n !== null)) {
        (n.flags &= 32767), (Ee = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (je = 6), (Ee = null);
        return;
      }
    } else if (((n = Ny(n, t, Qe)), n !== null)) {
      Ee = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ee = t;
      return;
    }
    Ee = t = e;
  } while (t !== null);
  je === 0 && (je = 5);
}
function An(e, t, n) {
  var r = ce,
    a = ft.transition;
  try {
    (ft.transition = null), (ce = 1), By(e, t, n, r);
  } finally {
    (ft.transition = a), (ce = r);
  }
  return null;
}
function By(e, t, n, r) {
  do Sr();
  while (dn !== null);
  if (ue & 6) throw Error(G(327));
  n = e.finishedWork;
  var a = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(G(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (jv(e, l),
    e === Pe && ((Ee = Pe = null), (Ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      So ||
      ((So = !0),
      Yh(es, function () {
        return Sr(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = ft.transition), (ft.transition = null);
    var s = ce;
    ce = 1;
    var i = ue;
    (ue |= 4),
      (Xu.current = null),
      Uy(e, n),
      Uh(n, e),
      dy(jl),
      (ns = !!bl),
      (jl = bl = null),
      (e.current = n),
      zy(n),
      mv(),
      (ue = i),
      (ce = s),
      (ft.transition = l);
  } else e.current = n;
  if (
    (So && ((So = !1), (dn = e), (ys = a)),
    (l = e.pendingLanes),
    l === 0 && (wn = null),
    wv(n.stateNode),
    Ge(e, Se()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (a = t[n]), r(a.value, { componentStack: a.stack, digest: a.digest });
  if (vs) throw ((vs = !1), (e = Bl), (Bl = null), e);
  return (
    ys & 1 && e.tag !== 0 && Sr(),
    (l = e.pendingLanes),
    l & 1 ? (e === Kl ? gi++ : ((gi = 0), (Kl = e))) : (gi = 0),
    Cn(),
    null
  );
}
function Sr() {
  if (dn !== null) {
    var e = bg(ys),
      t = ft.transition,
      n = ce;
    try {
      if (((ft.transition = null), (ce = 16 > e ? 16 : e), dn === null)) var r = !1;
      else {
        if (((e = dn), (dn = null), (ys = 0), ue & 6)) throw Error(G(331));
        var a = ue;
        for (ue |= 4, Z = e.current; Z !== null; ) {
          var l = Z,
            s = l.child;
          if (Z.flags & 16) {
            var i = l.deletions;
            if (i !== null) {
              for (var o = 0; o < i.length; o++) {
                var u = i[o];
                for (Z = u; Z !== null; ) {
                  var c = Z;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      di(8, c, l);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (Z = d);
                  else
                    for (; Z !== null; ) {
                      c = Z;
                      var f = c.sibling,
                        p = c.return;
                      if ((Nh(c), c === u)) {
                        Z = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = p), (Z = f);
                        break;
                      }
                      Z = p;
                    }
                }
              }
              var g = l.alternate;
              if (g !== null) {
                var v = g.child;
                if (v !== null) {
                  g.child = null;
                  do {
                    var k = v.sibling;
                    (v.sibling = null), (v = k);
                  } while (v !== null);
                }
              }
              Z = l;
            }
          }
          if (l.subtreeFlags & 2064 && s !== null) (s.return = l), (Z = s);
          else
            e: for (; Z !== null; ) {
              if (((l = Z), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    di(9, l, l.return);
                }
              var m = l.sibling;
              if (m !== null) {
                (m.return = l.return), (Z = m);
                break e;
              }
              Z = l.return;
            }
        }
        var h = e.current;
        for (Z = h; Z !== null; ) {
          s = Z;
          var y = s.child;
          if (s.subtreeFlags & 2064 && y !== null) (y.return = s), (Z = y);
          else
            e: for (s = h; Z !== null; ) {
              if (((i = Z), i.flags & 2048))
                try {
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $s(9, i);
                  }
                } catch (_) {
                  _e(i, i.return, _);
                }
              if (i === s) {
                Z = null;
                break e;
              }
              var w = i.sibling;
              if (w !== null) {
                (w.return = i.return), (Z = w);
                break e;
              }
              Z = i.return;
            }
        }
        if (((ue = a), Cn(), At && typeof At.onPostCommitFiberRoot == 'function'))
          try {
            At.onPostCommitFiberRoot(Ms, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ce = n), (ft.transition = t);
    }
  }
  return !1;
}
function Nd(e, t, n) {
  (t = xr(n, t)), (t = jh(e, t, 1)), (e = yn(e, t, 1)), (t = Fe()), e !== null && (Xi(e, 1, t), Ge(e, t));
}
function _e(e, t, n) {
  if (e.tag === 3) Nd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Nd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (wn === null || !wn.has(r)))
        ) {
          (e = xr(n, e)), (e = Oh(t, e, 1)), (t = yn(t, e, 1)), (e = Fe()), t !== null && (Xi(t, 1, e), Ge(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Ky(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Fe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Pe === e &&
      (Ce & n) === n &&
      (je === 4 || (je === 3 && (Ce & 130023424) === Ce && 500 > Se() - qu) ? zn(e, 0) : (Ju |= n)),
    Ge(e, t);
}
function Kh(e, t) {
  t === 0 && (e.mode & 1 ? ((t = fo), (fo <<= 1), !(fo & 130023424) && (fo = 4194304)) : (t = 1));
  var n = Fe();
  (e = Qt(e, t)), e !== null && (Xi(e, t, n), Ge(e, n));
}
function Gy(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Kh(e, n);
}
function Yy(e, t) {
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
      throw Error(G(314));
  }
  r !== null && r.delete(t), Kh(e, n);
}
var Gh;
Gh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Be.current) We = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (We = !1), Ly(e, t, n);
      We = !!(e.flags & 131072);
    }
  else (We = !1), ve && t.flags & 1048576 && Xg(t, us, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      zo(e, t), (e = t.pendingProps);
      var a = Tr(t, Ne.current);
      _r(t, n), (a = Bu(null, t, r, e, a, n));
      var l = Ku();
      return (
        (t.flags |= 1),
        typeof a == 'object' && a !== null && typeof a.render == 'function' && a.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ke(r) ? ((l = !0), as(t)) : (l = !1),
            (t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
            zu(t),
            (a.updater = zs),
            (t.stateNode = a),
            (a._reactInternals = t),
            Ml(t, r, e, n),
            (t = Dl(null, t, r, !0, l, n)))
          : ((t.tag = 0), ve && l && Au(t), De(null, t, a, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (zo(e, t),
          (e = t.pendingProps),
          (a = r._init),
          (r = a(r._payload)),
          (t.type = r),
          (a = t.tag = Xy(r)),
          (e = yt(r, e)),
          a)
        ) {
          case 0:
            t = Nl(null, t, r, e, n);
            break e;
          case 1:
            t = Od(null, t, r, e, n);
            break e;
          case 11:
            t = bd(null, t, r, e, n);
            break e;
          case 14:
            t = jd(null, t, r, yt(r.type, e), n);
            break e;
        }
        throw Error(G(306, r, ''));
      }
      return t;
    case 0:
      return (r = t.type), (a = t.pendingProps), (a = t.elementType === r ? a : yt(r, a)), Nl(e, t, r, a, n);
    case 1:
      return (r = t.type), (a = t.pendingProps), (a = t.elementType === r ? a : yt(r, a)), Od(e, t, r, a, n);
    case 3:
      e: {
        if ((Ch(t), e === null)) throw Error(G(387));
        (r = t.pendingProps), (l = t.memoizedState), (a = l.element), eh(e, t), fs(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (a = xr(Error(G(423)), t)), (t = Pd(e, t, r, n, a));
            break e;
          } else if (r !== a) {
            (a = xr(Error(G(424)), t)), (t = Pd(e, t, r, n, a));
            break e;
          } else
            for (
              Je = vn(t.stateNode.containerInfo.firstChild),
                Ze = t,
                ve = !0,
                kt = null,
                n = ih(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Rr(), r === a)) {
            t = Xt(e, t, n);
            break e;
          }
          De(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        oh(t),
        e === null && Il(t),
        (r = t.type),
        (a = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (s = a.children),
        Ol(r, a) ? (s = null) : l !== null && Ol(r, l) && (t.flags |= 32),
        Rh(e, t),
        De(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Il(t), null;
    case 13:
      return Ih(e, t, n);
    case 4:
      return (
        Hu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Cr(t, null, r, n)) : De(e, t, r, n),
        t.child
      );
    case 11:
      return (r = t.type), (a = t.pendingProps), (a = t.elementType === r ? a : yt(r, a)), bd(e, t, r, a, n);
    case 7:
      return De(e, t, t.pendingProps, n), t.child;
    case 8:
      return De(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return De(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (a = t.pendingProps),
          (l = t.memoizedProps),
          (s = a.value),
          he(cs, r._currentValue),
          (r._currentValue = s),
          l !== null)
        )
          if (Ot(l.value, s)) {
            if (l.children === a.children && !Be.current) {
              t = Xt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var i = l.dependencies;
              if (i !== null) {
                s = l.child;
                for (var o = i.firstContext; o !== null; ) {
                  if (o.context === r) {
                    if (l.tag === 1) {
                      (o = Bt(-1, n & -n)), (o.tag = 2);
                      var u = l.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? (o.next = o) : ((o.next = c.next), (c.next = o)), (u.pending = o);
                      }
                    }
                    (l.lanes |= n), (o = l.alternate), o !== null && (o.lanes |= n), xl(l.return, n, t), (i.lanes |= n);
                    break;
                  }
                  o = o.next;
                }
              } else if (l.tag === 10) s = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((s = l.return), s === null)) throw Error(G(341));
                (s.lanes |= n), (i = s.alternate), i !== null && (i.lanes |= n), xl(s, n, t), (s = l.sibling);
              } else s = l.child;
              if (s !== null) s.return = l;
              else
                for (s = l; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((l = s.sibling), l !== null)) {
                    (l.return = s.return), (s = l);
                    break;
                  }
                  s = s.return;
                }
              l = s;
            }
        De(e, t, a.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (a = t.type),
        (r = t.pendingProps.children),
        _r(t, n),
        (a = gt(a)),
        (r = r(a)),
        (t.flags |= 1),
        De(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (a = yt(r, t.pendingProps)), (a = yt(r.type, a)), jd(e, t, r, a, n);
    case 15:
      return Ph(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (a = t.pendingProps),
        (a = t.elementType === r ? a : yt(r, a)),
        zo(e, t),
        (t.tag = 1),
        Ke(r) ? ((e = !0), as(t)) : (e = !1),
        _r(t, n),
        nh(t, r, a),
        Ml(t, r, a, n),
        Dl(null, t, r, !0, e, n)
      );
    case 19:
      return xh(e, t, n);
    case 22:
      return Th(e, t, n);
  }
  throw Error(G(156, t.tag));
};
function Yh(e, t) {
  return kg(e, t);
}
function Qy(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function dt(e, t, n, r) {
  return new Qy(e, t, n, r);
}
function nc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Xy(e) {
  if (typeof e == 'function') return nc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === _u)) return 11;
    if (e === Su) return 14;
  }
  return 2;
}
function _n(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = dt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Vo(e, t, n, r, a, l) {
  var s = 2;
  if (((r = e), typeof e == 'function')) nc(e) && (s = 1);
  else if (typeof e == 'string') s = 5;
  else
    e: switch (e) {
      case or:
        return Hn(n.children, a, l, t);
      case ku:
        (s = 8), (a |= 8);
        break;
      case il:
        return (e = dt(12, n, t, a | 2)), (e.elementType = il), (e.lanes = l), e;
      case ol:
        return (e = dt(13, n, t, a)), (e.elementType = ol), (e.lanes = l), e;
      case sl:
        return (e = dt(19, n, t, a)), (e.elementType = sl), (e.lanes = l), e;
      case rg:
        return Ws(n, a, l, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case tg:
              s = 10;
              break e;
            case ng:
              s = 9;
              break e;
            case _u:
              s = 11;
              break e;
            case Su:
              s = 14;
              break e;
            case sn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(G(130, e == null ? e : typeof e, ''));
    }
  return (t = dt(s, n, t, a)), (t.elementType = e), (t.type = r), (t.lanes = l), t;
}
function Hn(e, t, n, r) {
  return (e = dt(7, e, r, t)), (e.lanes = n), e;
}
function Ws(e, t, n, r) {
  return (e = dt(22, e, r, t)), (e.elementType = rg), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function Ua(e, t, n) {
  return (e = dt(6, e, null, t)), (e.lanes = n), e;
}
function za(e, t, n) {
  return (
    (t = dt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  );
}
function Jy(e, t, n, r, a) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ka(0)),
    (this.expirationTimes = ka(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ka(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = a),
    (this.mutableSourceEagerHydrationData = null);
}
function rc(e, t, n, r, a, l, s, i, o) {
  return (
    (e = new Jy(e, t, n, i, o)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = dt(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    zu(l),
    e
  );
}
function qy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ir, key: r == null ? null : '' + r, children: e, containerInfo: t, implementation: n };
}
function Qh(e) {
  if (!e) return On;
  e = e._reactInternals;
  e: {
    if (Qn(e) !== e || e.tag !== 1) throw Error(G(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(G(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ke(n)) return Yg(e, n, t);
  }
  return t;
}
function Xh(e, t, n, r, a, l, s, i, o) {
  return (
    (e = rc(n, r, !0, e, a, l, s, i, o)),
    (e.context = Qh(null)),
    (n = e.current),
    (r = Fe()),
    (a = kn(n)),
    (l = Bt(r, a)),
    (l.callback = t ?? null),
    yn(n, l, a),
    (e.current.lanes = a),
    Xi(e, a, r),
    Ge(e, r),
    e
  );
}
function Bs(e, t, n, r) {
  var a = t.current,
    l = Fe(),
    s = kn(a);
  return (
    (n = Qh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Bt(l, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = yn(a, t, s)),
    e !== null && (jt(e, a, s, l), Do(e, a, s)),
    s
  );
}
function ks(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Dd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ic(e, t) {
  Dd(e, t), (e = e.alternate) && Dd(e, t);
}
function Zy() {
  return null;
}
var Jh =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function oc(e) {
  this._internalRoot = e;
}
Ks.prototype.render = oc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(G(409));
  Bs(e, t, null, null);
};
Ks.prototype.unmount = oc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Kn(function () {
      Bs(null, e, null, null);
    }),
      (t[Yt] = null);
  }
};
function Ks(e) {
  this._internalRoot = e;
}
Ks.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Pg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ln.length && t !== 0 && t < ln[n].priority; n++);
    ln.splice(n, 0, e), n === 0 && Rg(e);
  }
};
function sc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Gs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Fd() {}
function ew(e, t, n, r, a) {
  if (a) {
    if (typeof r == 'function') {
      var l = r;
      r = function () {
        var u = ks(s);
        l.call(u);
      };
    }
    var s = Xh(t, r, e, 0, null, !1, !1, '', Fd);
    return (e._reactRootContainer = s), (e[Yt] = s.current), Ci(e.nodeType === 8 ? e.parentNode : e), Kn(), s;
  }
  for (; (a = e.lastChild); ) e.removeChild(a);
  if (typeof r == 'function') {
    var i = r;
    r = function () {
      var u = ks(o);
      i.call(u);
    };
  }
  var o = rc(e, 0, !1, null, null, !1, !1, '', Fd);
  return (
    (e._reactRootContainer = o),
    (e[Yt] = o.current),
    Ci(e.nodeType === 8 ? e.parentNode : e),
    Kn(function () {
      Bs(t, o, n, r);
    }),
    o
  );
}
function Ys(e, t, n, r, a) {
  var l = n._reactRootContainer;
  if (l) {
    var s = l;
    if (typeof a == 'function') {
      var i = a;
      a = function () {
        var o = ks(s);
        i.call(o);
      };
    }
    Bs(t, s, e, a);
  } else s = ew(n, t, e, a, r);
  return ks(s);
}
jg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ni(t.pendingLanes);
        n !== 0 && (ju(t, n | 1), Ge(t, Se()), !(ue & 6) && ((Ar = Se() + 500), Cn()));
      }
      break;
    case 13:
      Kn(function () {
        var r = Qt(e, 1);
        if (r !== null) {
          var a = Fe();
          jt(r, e, 1, a);
        }
      }),
        ic(e, 1);
  }
};
Ou = function (e) {
  if (e.tag === 13) {
    var t = Qt(e, 134217728);
    if (t !== null) {
      var n = Fe();
      jt(t, e, 134217728, n);
    }
    ic(e, 134217728);
  }
};
Og = function (e) {
  if (e.tag === 13) {
    var t = kn(e),
      n = Qt(e, t);
    if (n !== null) {
      var r = Fe();
      jt(n, e, t, r);
    }
    ic(e, t);
  }
};
Pg = function () {
  return ce;
};
Tg = function (e, t) {
  var n = ce;
  try {
    return (ce = e), t();
  } finally {
    ce = n;
  }
};
ml = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((ul(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var a = Fs(r);
            if (!a) throw Error(G(90));
            og(r), ul(r, a);
          }
        }
      }
      break;
    case 'textarea':
      ag(e, n);
      break;
    case 'select':
      (t = n.value), t != null && vr(e, !!n.multiple, t, !1);
  }
};
hg = Zu;
pg = Kn;
var tw = { usingClientEntryPoint: !1, Events: [qi, ur, Fs, fg, gg, Zu] },
  Qr = { findFiberByHostInstance: Nn, bundleType: 0, version: '18.2.0', rendererPackageName: 'react-dom' },
  nw = {
    bundleType: Qr.bundleType,
    version: Qr.version,
    rendererPackageName: Qr.rendererPackageName,
    rendererConfig: Qr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Jt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = yg(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Qr.findFiberByHostInstance || Zy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Eo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Eo.isDisabled && Eo.supportsFiber)
    try {
      (Ms = Eo.inject(nw)), (At = Eo);
    } catch {}
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tw;
tt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!sc(t)) throw Error(G(200));
  return qy(e, t, null, n);
};
tt.createRoot = function (e, t) {
  if (!sc(e)) throw Error(G(299));
  var n = !1,
    r = '',
    a = Jh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
    (t = rc(e, 1, !1, null, null, n, !1, r, a)),
    (e[Yt] = t.current),
    Ci(e.nodeType === 8 ? e.parentNode : e),
    new oc(t)
  );
};
tt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function' ? Error(G(188)) : ((e = Object.keys(e).join(',')), Error(G(268, e)));
  return (e = yg(t)), (e = e === null ? null : e.stateNode), e;
};
tt.flushSync = function (e) {
  return Kn(e);
};
tt.hydrate = function (e, t, n) {
  if (!Gs(t)) throw Error(G(200));
  return Ys(null, e, t, !0, n);
};
tt.hydrateRoot = function (e, t, n) {
  if (!sc(e)) throw Error(G(405));
  var r = (n != null && n.hydratedSources) || null,
    a = !1,
    l = '',
    s = Jh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (a = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Xh(t, null, e, 1, n ?? null, a, !1, l, s)),
    (e[Yt] = t.current),
    Ci(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (a = n._getVersion),
        (a = a(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, a])
          : t.mutableSourceEagerHydrationData.push(n, a);
  return new Ks(t);
};
tt.render = function (e, t, n) {
  if (!Gs(t)) throw Error(G(200));
  return Ys(null, e, t, !1, n);
};
tt.unmountComponentAtNode = function (e) {
  if (!Gs(e)) throw Error(G(40));
  return e._reactRootContainer
    ? (Kn(function () {
        Ys(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Yt] = null);
        });
      }),
      !0)
    : !1;
};
tt.unstable_batchedUpdates = Zu;
tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Gs(n)) throw Error(G(200));
  if (e == null || e._reactInternals === void 0) throw Error(G(38));
  return Ys(e, t, n, !1, r);
};
tt.version = '18.2.0-next-9e3b772b8-20220608';
function qh() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qh);
    } catch (e) {
      console.error(e);
    }
}
qh(), (Xf.exports = tt);
var ac = Xf.exports,
  Ud = ac;
(nl.createRoot = Ud.createRoot), (nl.hydrateRoot = Ud.hydrateRoot);
const zd = 'pushstate',
  Hd = 'popstate',
  Zh = 'beforeunload',
  ep = e => (e.preventDefault(), (e.returnValue = '')),
  rw = () => {
    removeEventListener(Zh, ep, { capture: !0 });
  };
function tp(e) {
  let t = e.getLocation(),
    n = new Set(),
    r = [];
  const a = () => {
      (t = e.getLocation()), n.forEach(s => s());
    },
    l = async s => {
      var i;
      if (typeof document < 'u' && r.length) {
        for (let o of r)
          if (!(await o())) {
            (i = e.onBlocked) == null || i.call(e, a);
            return;
          }
      }
      s();
    };
  return {
    get location() {
      return t;
    },
    subscribe: s => (
      n.add(s),
      () => {
        n.delete(s);
      }
    ),
    push: (s, i) => {
      (i = $d(i)),
        l(() => {
          e.pushState(s, i), a();
        });
    },
    replace: (s, i) => {
      (i = $d(i)),
        l(() => {
          e.replaceState(s, i), a();
        });
    },
    go: s => {
      l(() => {
        e.go(s);
      });
    },
    back: () => {
      l(() => {
        e.back();
      });
    },
    forward: () => {
      l(() => {
        e.forward();
      });
    },
    createHref: s => e.createHref(s),
    block: s => (
      r.push(s),
      r.length === 1 && addEventListener(Zh, ep, { capture: !0 }),
      () => {
        (r = r.filter(i => i !== s)), r.length || rw();
      }
    ),
    flush: () => {
      var s;
      return (s = e.flush) == null ? void 0 : s.call(e);
    },
    destroy: () => {
      var s;
      return (s = e.destroy) == null ? void 0 : s.call(e);
    },
    notify: a,
  };
}
function $d(e) {
  return e || (e = {}), { ...e, key: np() };
}
function iw(e) {
  const t = (e == null ? void 0 : e.window) ?? (typeof document < 'u' ? window : void 0),
    n = (e == null ? void 0 : e.createHref) ?? (m => m),
    r =
      (e == null ? void 0 : e.parseLocation) ??
      (() => Ql(`${t.location.pathname}${t.location.search}${t.location.hash}`, t.history.state));
  let a = r(),
    l;
  const s = () => a;
  let i,
    o = !0,
    u;
  const c = m => {
      (o = !1), m(), (o = !0);
    },
    d = () => {
      c(() => {
        i &&
          (t.history[i.isPush ? 'pushState' : 'replaceState'](i.state, '', i.href),
          (i = void 0),
          (u = void 0),
          (l = void 0));
      });
    },
    f = (m, h, y) => {
      const w = n(h);
      u || (l = a),
        (a = Ql(h, y)),
        (i = { href: w, state: y, isPush: (i == null ? void 0 : i.isPush) || m === 'push' }),
        u || (u = Promise.resolve().then(() => d()));
    },
    p = () => {
      (a = r()), k.notify();
    };
  var g = t.history.pushState,
    v = t.history.replaceState;
  const k = tp({
    getLocation: s,
    pushState: (m, h) => f('push', m, h),
    replaceState: (m, h) => f('replace', m, h),
    back: () => t.history.back(),
    forward: () => t.history.forward(),
    go: m => t.history.go(m),
    createHref: m => n(m),
    flush: d,
    destroy: () => {
      (t.history.pushState = g),
        (t.history.replaceState = v),
        t.removeEventListener(zd, p),
        t.removeEventListener(Hd, p);
    },
    onBlocked: m => {
      l && a !== l && ((a = l), m());
    },
  });
  return (
    t.addEventListener(zd, p),
    t.addEventListener(Hd, p),
    (t.history.pushState = function () {
      let m = g.apply(t.history, arguments);
      return o && k.notify(), m;
    }),
    (t.history.replaceState = function () {
      let m = v.apply(t.history, arguments);
      return o && k.notify(), m;
    }),
    k
  );
}
function ow(e = { initialEntries: ['/'] }) {
  const t = e.initialEntries;
  let n = e.initialIndex ?? t.length - 1,
    r = { key: np() };
  return tp({
    getLocation: () => Ql(t[n], r),
    pushState: (l, s) => {
      (r = s), t.push(l), n++;
    },
    replaceState: (l, s) => {
      (r = s), (t[n] = l);
    },
    back: () => {
      n--;
    },
    forward: () => {
      n = Math.min(n + 1, t.length - 1);
    },
    go: l => {
      n = Math.min(Math.max(n + l, 0), t.length - 1);
    },
    createHref: l => l,
  });
}
function Ql(e, t) {
  let n = e.indexOf('#'),
    r = e.indexOf('?');
  return {
    href: e,
    pathname: e.substring(0, n > 0 ? (r > 0 ? Math.min(n, r) : n) : r > 0 ? r : e.length),
    hash: n > -1 ? e.substring(n) : '',
    search: r > -1 ? e.slice(r, n === -1 ? void 0 : n) : '',
    state: t || {},
  };
}
function np() {
  return (Math.random() + 1).toString(36).substring(7);
}
var sw = 'Invariant failed';
function Xe(e, t) {
  if (!e) throw new Error(sw);
}
let Ha = W.createContext(null);
function rp() {
  return typeof document > 'u'
    ? Ha
    : window.__TSR_ROUTER_CONTEXT__
      ? window.__TSR_ROUTER_CONTEXT__
      : ((window.__TSR_ROUTER_CONTEXT__ = Ha), Ha);
}
function Xn(e) {
  const t = W.useContext(rp());
  return e == null || e.warn, t;
}
var ip = { exports: {} },
  op = {},
  sp = { exports: {} },
  ap = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mr = W;
function aw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var lw = typeof Object.is == 'function' ? Object.is : aw,
  uw = Mr.useState,
  cw = Mr.useEffect,
  dw = Mr.useLayoutEffect,
  fw = Mr.useDebugValue;
function gw(e, t) {
  var n = t(),
    r = uw({ inst: { value: n, getSnapshot: t } }),
    a = r[0].inst,
    l = r[1];
  return (
    dw(
      function () {
        (a.value = n), (a.getSnapshot = t), $a(a) && l({ inst: a });
      },
      [e, n, t],
    ),
    cw(
      function () {
        return (
          $a(a) && l({ inst: a }),
          e(function () {
            $a(a) && l({ inst: a });
          })
        );
      },
      [e],
    ),
    fw(n),
    n
  );
}
function $a(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !lw(e, n);
  } catch {
    return !0;
  }
}
function hw(e, t) {
  return t();
}
var pw = typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u' ? hw : gw;
ap.useSyncExternalStore = Mr.useSyncExternalStore !== void 0 ? Mr.useSyncExternalStore : pw;
sp.exports = ap;
var mw = sp.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qs = W,
  vw = mw;
function yw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ww = typeof Object.is == 'function' ? Object.is : yw,
  kw = vw.useSyncExternalStore,
  _w = Qs.useRef,
  Sw = Qs.useEffect,
  Ew = Qs.useMemo,
  bw = Qs.useDebugValue;
op.useSyncExternalStoreWithSelector = function (e, t, n, r, a) {
  var l = _w(null);
  if (l.current === null) {
    var s = { hasValue: !1, value: null };
    l.current = s;
  } else s = l.current;
  l = Ew(
    function () {
      function o(p) {
        if (!u) {
          if (((u = !0), (c = p), (p = r(p)), a !== void 0 && s.hasValue)) {
            var g = s.value;
            if (a(g, p)) return (d = g);
          }
          return (d = p);
        }
        if (((g = d), ww(c, p))) return g;
        var v = r(p);
        return a !== void 0 && a(g, v) ? g : ((c = p), (d = v));
      }
      var u = !1,
        c,
        d,
        f = n === void 0 ? null : n;
      return [
        function () {
          return o(t());
        },
        f === null
          ? void 0
          : function () {
              return o(f());
            },
      ];
    },
    [t, n, r, a],
  );
  var i = kw(e, l[0], l[1]);
  return (
    Sw(
      function () {
        (s.hasValue = !0), (s.value = i);
      },
      [i],
    ),
    bw(i),
    i
  );
};
ip.exports = op;
var jw = ip.exports,
  Ow = class {
    constructor(e, t) {
      (this.listeners = new Set()),
        (this._batching = !1),
        (this._flushing = 0),
        (this._nextPriority = null),
        (this.subscribe = n => {
          var a, l;
          this.listeners.add(n);
          const r = (l = (a = this.options) == null ? void 0 : a.onSubscribe) == null ? void 0 : l.call(a, n, this);
          return () => {
            this.listeners.delete(n), r == null || r();
          };
        }),
        (this.setState = (n, r) => {
          var s, i, o, u, c;
          const a = this.state;
          this.state = (s = this.options) != null && s.updateFn ? this.options.updateFn(a)(n) : n(a);
          const l =
            (r == null ? void 0 : r.priority) ?? ((i = this.options) == null ? void 0 : i.defaultPriority) ?? 'high';
          this._nextPriority === null
            ? (this._nextPriority = l)
            : this._nextPriority === 'high'
              ? (this._nextPriority = l)
              : (this._nextPriority = ((o = this.options) == null ? void 0 : o.defaultPriority) ?? 'high'),
            (c = (u = this.options) == null ? void 0 : u.onUpdate) == null ||
              c.call(u, { priority: this._nextPriority }),
            this._flush();
        }),
        (this._flush = () => {
          if (this._batching) return;
          const n = ++this._flushing;
          this.listeners.forEach(r => {
            this._flushing === n && r({ priority: this._nextPriority ?? 'high' });
          });
        }),
        (this.batch = n => {
          if (this._batching) return n();
          (this._batching = !0), n(), (this._batching = !1), this._flush();
        }),
        (this.state = e),
        (this.options = t);
    }
  };
function Pw(e, t = n => n) {
  return jw.useSyncExternalStoreWithSelector(
    e.subscribe,
    () => e.state,
    () => e.state,
    t,
    Tw,
  );
}
function Tw(e, t) {
  if (Object.is(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length) return !1;
  for (let r = 0; r < n.length; r++)
    if (!Object.prototype.hasOwnProperty.call(t, n[r]) || !Object.is(e[n[r]], t[n[r]])) return !1;
  return !0;
}
function lc(e) {
  const t = e.errorComponent ?? Xs;
  return K.jsx(Rw, {
    getResetKey: e.getResetKey,
    onCatch: e.onCatch,
    children: ({ error: n }) => (n ? W.createElement(t, { error: n }) : e.children),
  });
}
class Rw extends W.Component {
  constructor() {
    super(...arguments), (this.state = { error: null });
  }
  static getDerivedStateFromProps(t) {
    var n;
    return { resetKey: (n = t.getResetKey) == null ? void 0 : n.call(t) };
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  componentDidUpdate(t, n) {
    n.error && n.resetKey !== this.state.resetKey && this.setState({ error: null });
  }
  componentDidCatch(t) {
    var n, r;
    this.props.onCatch ? (r = (n = this.props).onCatch) == null || r.call(n, t) : console.error(t);
  }
  render() {
    return this.props.children(this.state);
  }
}
function Xs({ error: e }) {
  const [t, n] = W.useState(!1);
  return K.jsxs('div', {
    style: { padding: '.5rem', maxWidth: '100%' },
    children: [
      K.jsxs('div', {
        style: { display: 'flex', alignItems: 'center', gap: '.5rem' },
        children: [
          K.jsx('strong', { style: { fontSize: '1rem' }, children: 'Something went wrong!' }),
          K.jsx('button', {
            style: {
              appearance: 'none',
              fontSize: '.6em',
              border: '1px solid currentColor',
              padding: '.1rem .2rem',
              fontWeight: 'bold',
              borderRadius: '.25rem',
            },
            onClick: () => n(r => !r),
            children: t ? 'Hide Error' : 'Show Error',
          }),
        ],
      }),
      K.jsx('div', { style: { height: '.25rem' } }),
      t
        ? K.jsx('div', {
            children: K.jsx('pre', {
              style: {
                fontSize: '.7em',
                border: '1px solid red',
                borderRadius: '.25rem',
                padding: '.3rem',
                color: 'red',
                overflow: 'auto',
              },
              children: e.message ? K.jsx('code', { children: e.message }) : null,
            }),
          })
        : null,
    ],
  });
}
function Lt(e) {
  const t = Xn({ warn: (e == null ? void 0 : e.router) === void 0 });
  return Pw(((e == null ? void 0 : e.router) || t).__store, e == null ? void 0 : e.select);
}
function uc(e) {
  return e[e.length - 1];
}
function Cw(e) {
  return typeof e == 'function';
}
function mr(e, t) {
  return Cw(e) ? e(t) : e;
}
function hi(e, t) {
  return t.reduce((n, r) => ((n[r] = e[r]), n), {});
}
function on(e, t) {
  if (e === t) return e;
  const n = t,
    r = Wd(e) && Wd(n);
  if (r || (_s(e) && _s(n))) {
    const a = r ? e : Object.keys(e),
      l = a.length,
      s = r ? n : Object.keys(n),
      i = s.length,
      o = r ? [] : {};
    let u = 0;
    for (let c = 0; c < i; c++) {
      const d = r ? c : s[c];
      !r && e[d] === void 0 && n[d] === void 0 && a.includes(d)
        ? ((o[d] = void 0), u++)
        : ((o[d] = on(e[d], n[d])), o[d] === e[d] && e[d] !== void 0 && u++);
    }
    return l === i && u === l ? e : o;
  }
  return n;
}
function _s(e) {
  if (!Vd(e)) return !1;
  const t = e.constructor;
  if (typeof t > 'u') return !0;
  const n = t.prototype;
  return !(!Vd(n) || !n.hasOwnProperty('isPrototypeOf'));
}
function Vd(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
function Wd(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Ui(e, t, n = !1) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (_s(e) && _s(t)) {
    const r = Object.keys(e),
      a = Object.keys(t);
    return !n && r.length !== a.length ? !1 : !a.some(l => !(l in e) || !Ui(e[l], t[l], n));
  }
  return Array.isArray(e) && Array.isArray(t) ? !e.some((r, a) => !Ui(r, t[a], n)) : !1;
}
const Va = typeof window < 'u' ? W.useLayoutEffect : W.useEffect;
function Iw(e) {
  return e.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '\\"');
}
function pi(e) {
  return !!(e != null && e.isNotFound);
}
function xw(e) {
  const t = Lt({ select: n => `not-found-${n.location.pathname}-${n.status}` });
  return K.jsx(lc, {
    getResetKey: () => t,
    onCatch: n => {
      var r;
      if (pi(n)) (r = e.onCatch) == null || r.call(e, n);
      else throw n;
    },
    errorComponent: ({ error: n }) => {
      var r;
      return (r = e.fallback) == null ? void 0 : r.call(e, n);
    },
    children: e.children,
  });
}
function Aw() {
  return K.jsx('p', { children: 'Not Found' });
}
const Js = W.createContext(void 0);
function Bd() {
  const e = Xn(),
    t = Lt({
      select: n => {
        var r;
        return (r = Kt(n)[0]) == null ? void 0 : r.id;
      },
    });
  return K.jsx(Js.Provider, {
    value: t,
    children: K.jsx(lc, {
      getResetKey: () => {
        var n;
        return (n = e.state.resolvedLocation.state) == null ? void 0 : n.key;
      },
      errorComponent: Xs,
      onCatch: n => {
        console.error(n);
      },
      children: t ? K.jsx(lp, { matchId: t }) : null,
    }),
  });
}
function Wa(e) {
  return K.jsx(K.Fragment, { children: e.children });
}
function lp({ matchId: e }) {
  var t, n, r, a;
  const l = Xn(),
    s = Lt({
      select: v => {
        var k;
        return (k = Kt(v).find(m => m.id === e)) == null ? void 0 : k.routeId;
      },
    });
  Xe(s);
  const i = l.routesById[s],
    o = i.options.pendingComponent ?? l.options.defaultPendingComponent,
    u = o ? K.jsx(o, {}) : null,
    c = i.options.errorComponent ?? l.options.defaultErrorComponent ?? Xs,
    d = i.isRoot
      ? i.options.notFoundComponent ?? ((t = l.options.notFoundRoute) == null ? void 0 : t.options.component)
      : i.options.notFoundComponent,
    f =
      i.options.wrapInSuspense ??
      o ??
      ((n = i.options.component) == null ? void 0 : n.preload) ??
      ((r = i.options.pendingComponent) == null ? void 0 : r.preload) ??
      ((a = i.options.errorComponent) == null ? void 0 : a.preload)
        ? W.Suspense
        : Wa,
    p = c ? lc : Wa,
    g = d ? xw : Wa;
  return K.jsx(Js.Provider, {
    value: e,
    children: K.jsx(f, {
      fallback: u,
      children: K.jsx(p, {
        getResetKey: () => {
          var v;
          return (v = l.state.resolvedLocation.state) == null ? void 0 : v.key;
        },
        errorComponent: c,
        onCatch: v => {
          if (pi(v)) throw v;
          console.error(v);
        },
        children: K.jsx(g, {
          fallback: v => {
            if (!d || (v.global && !i.isRoot)) throw v;
            return W.createElement(d, { data: v.data });
          },
          children: K.jsx(Mw, { matchId: e, pendingElement: u }),
        }),
      }),
    }),
  });
}
function Mw({ matchId: e, pendingElement: t }) {
  var n;
  const r = Xn(),
    a = Lt({
      select: i => {
        var o;
        return (o = Kt(i).find(u => u.id === e)) == null ? void 0 : o.routeId;
      },
    }),
    l = r.routesById[a],
    s = Lt({
      select: i =>
        hi(
          Kt(i).find(o => o.id === e),
          ['status', 'error', 'showPending', 'loadPromise', 'notFoundError'],
        ),
    });
  if (s.notFoundError)
    return a === st && !l.options.notFoundComponent
      ? K.jsx(Aw, {})
      : (Xe(l.options.notFoundComponent), K.jsx(l.options.notFoundComponent, { data: s.notFoundError }));
  if (s.status === 'error')
    throw Lw(s.error)
      ? (((n = r.options.errorSerializer) == null ? void 0 : n.deserialize) ?? Nw)(s.error.data)
      : s.error;
  if (s.status === 'pending') {
    if (s.showPending) return t;
    throw s.loadPromise;
  }
  if (s.status === 'success') {
    let i = l.options.component ?? r.options.defaultComponent;
    return i ? K.jsx(i, {}) : K.jsx(up, {});
  }
  Xe(!1);
}
const up = W.memo(function () {
  const t = W.useContext(Js),
    n = Lt({
      select: r => {
        var a;
        const l = Kt(r),
          s = l.findIndex(i => i.id === t);
        return (a = l[s + 1]) == null ? void 0 : a.id;
      },
    });
  return n ? K.jsx(lp, { matchId: n }) : null;
});
function Kt(e) {
  var t;
  return (t = e.pendingMatches) != null && t.some(n => n.showPending) ? e.pendingMatches : e.matches;
}
function Pn(e) {
  var t;
  const n = Xn(),
    r = W.useContext(Js),
    a = (t = Kt(n.state).find(i => i.id === r)) == null ? void 0 : t.routeId,
    l = (() => {
      const i = Kt(n.state);
      return (e != null && e.from ? i.find(u => u.routeId === (e == null ? void 0 : e.from)) : i.find(u => u.id === r))
        .routeId;
    })();
  return (
    ((e == null ? void 0 : e.strict) ?? !0) && Xe(a == l),
    Lt({
      select: i => {
        const o = Kt(i).find(u => u.id === r);
        return (
          Xe(o, `Could not find ${e != null && e.from ? `an active match from "${e.from}"` : 'a nearest match!'}`),
          e != null && e.select ? e.select(o) : o
        );
      },
    })
  );
}
function cp(e) {
  return Pn({
    ...e,
    select: t =>
      typeof e.select == 'function' ? e.select(t == null ? void 0 : t.loaderDeps) : t == null ? void 0 : t.loaderDeps,
  });
}
function dp(e) {
  return Pn({
    ...e,
    select: t =>
      typeof e.select == 'function' ? e.select(t == null ? void 0 : t.loaderData) : t == null ? void 0 : t.loaderData,
  });
}
function Lw(e) {
  return !(typeof e == 'object' && e && 'data' in e) ||
    !('__isServerError' in e && e.__isServerError) ||
    !(typeof e.data == 'object' && e.data)
    ? !1
    : e.__isServerError === !0;
}
function Nw(e) {
  if ('name' in e && 'message' in e) {
    const t = new Error(e.message);
    return (t.name = e.name), t;
  }
  return e.data;
}
function Sn(e) {
  return qs(e.filter(Boolean).join('/'));
}
function qs(e) {
  return e.replace(/\/{2,}/g, '/');
}
function cc(e) {
  return e === '/' ? e : e.replace(/^\/{1,}/, '');
}
function Wo(e) {
  return e === '/' ? e : e.replace(/\/{1,}$/, '');
}
function Dw(e) {
  return Wo(cc(e));
}
function Fw(e, t, n) {
  (t = t.replace(new RegExp(`^${e}`), '/')), (n = n.replace(new RegExp(`^${e}`), '/'));
  let r = Lr(t);
  const a = Lr(n);
  a.forEach((s, i) => {
    var o;
    if (s.value === '/') i ? i === a.length - 1 && r.push(s) : (r = [s]);
    else if (s.value === '..') r.length > 1 && ((o = uc(r)) == null ? void 0 : o.value) === '/' && r.pop(), r.pop();
    else {
      if (s.value === '.') return;
      r.push(s);
    }
  });
  const l = Sn([e, ...r.map(s => s.value)]);
  return qs(l);
}
function Lr(e) {
  if (!e) return [];
  e = qs(e);
  const t = [];
  if ((e.slice(0, 1) === '/' && ((e = e.substring(1)), t.push({ type: 'pathname', value: '/' })), !e)) return t;
  const n = e.split('/').filter(Boolean);
  return (
    t.push(
      ...n.map(r =>
        r === '$' || r === '*'
          ? { type: 'wildcard', value: r }
          : r.charAt(0) === '$'
            ? { type: 'param', value: r }
            : { type: 'pathname', value: r },
      ),
    ),
    e.slice(-1) === '/' && ((e = e.substring(1)), t.push({ type: 'pathname', value: '/' })),
    t
  );
}
function Ba({ path: e, params: t, leaveWildcards: n, leaveParams: r }) {
  const a = Lr(e);
  return Sn(
    a.map(l => {
      if (l.type === 'wildcard') {
        const s = t._splat;
        return n ? `${l.value}${s ?? ''}` : s;
      }
      if (l.type === 'param') {
        if (r) {
          const s = t[l.value];
          return `${l.value}${s ?? ''}`;
        }
        return t[l.value.substring(1)] ?? 'undefined';
      }
      return l.value;
    }),
  );
}
function Ka(e, t, n) {
  const r = zw(e, t, n);
  if (!(n.to && !r)) return r ?? {};
}
function Uw(e, t) {
  return e != '/' ? t.substring(e.length) : t;
}
function zw(e, t, n) {
  t = Uw(e, t);
  const r = `${n.to ?? '$'}`,
    a = Lr(t),
    l = Lr(r);
  t.startsWith('/') || a.unshift({ type: 'pathname', value: '/' }),
    r.startsWith('/') || l.unshift({ type: 'pathname', value: '/' });
  const s = {};
  return (() => {
    for (let o = 0; o < Math.max(a.length, l.length); o++) {
      const u = a[o],
        c = l[o],
        d = o >= a.length - 1,
        f = o >= l.length - 1;
      if (c) {
        if (c.type === 'wildcard') {
          if (u != null && u.value) {
            const p = decodeURI(Sn(a.slice(o).map(g => g.value)));
            return (s['*'] = p), (s._splat = p), !0;
          }
          return !1;
        }
        if (c.type === 'pathname') {
          if (c.value === '/' && !(u != null && u.value)) return !0;
          if (u) {
            if (n.caseSensitive) {
              if (c.value !== u.value) return !1;
            } else if (c.value.toLowerCase() !== u.value.toLowerCase()) return !1;
          }
        }
        if (!u) return !1;
        if (c.type === 'param') {
          if ((u == null ? void 0 : u.value) === '/') return !1;
          u.value.charAt(0) !== '$' && (s[c.value.substring(1)] = decodeURI(u.value));
        }
      }
      if (!d && f)
        return (s['**'] = Sn(a.slice(o + 1).map(p => p.value))), !!n.fuzzy && (c == null ? void 0 : c.value) !== '/';
    }
    return !0;
  })()
    ? s
    : void 0;
}
function fp(e) {
  return Lt({
    select: t => {
      var n;
      const r = (n = uc(Kt(t))) == null ? void 0 : n.params;
      return e != null && e.select ? e.select(r) : r;
    },
  });
}
function gp(e) {
  return Pn({ ...e, select: t => (e != null && e.select ? e.select(t.search) : t.search) });
}
const st = '__root__';
let hp = class {
  constructor(t) {
    (this.init = n => {
      var r, a;
      this.originalIndex = n.originalIndex;
      const l = this.options,
        s = !(l != null && l.path) && !(l != null && l.id);
      (this.parentRoute = (a = (r = this.options) == null ? void 0 : r.getParentRoute) == null ? void 0 : a.call(r)),
        s ? (this.path = st) : Xe(this.parentRoute);
      let i = s ? st : l.path;
      i && i !== '/' && (i = cc(i));
      const o = (l == null ? void 0 : l.id) || i;
      let u = s ? st : Sn([this.parentRoute.id === st ? '' : this.parentRoute.id, o]);
      i === st && (i = '/'), u !== st && (u = Sn(['/', u]));
      const c = u === st ? '/' : Sn([this.parentRoute.fullPath, i]);
      (this.path = i), (this.id = u), (this.fullPath = c), (this.to = c);
    }),
      (this.addChildren = n => ((this.children = n), this)),
      (this.updateLoader = n => (Object.assign(this.options, n), this)),
      (this.update = n => (Object.assign(this.options, n), this)),
      (this.lazy = n => ((this.lazyFn = n), this)),
      (this.useMatch = n => Pn({ ...n, from: this.id })),
      (this.useRouteContext = n =>
        Pn({ ...n, from: this.id, select: r => (n != null && n.select ? n.select(r.context) : r.context) })),
      (this.useSearch = n => gp({ ...n, from: this.id })),
      (this.useParams = n => fp({ ...n, from: this.id })),
      (this.useLoaderDeps = n => cp({ ...n, from: this.id })),
      (this.useLoaderData = n => dp({ ...n, from: this.id })),
      (this.options = t || {}),
      (this.isRoot = !(t != null && t.getParentRoute)),
      Xe(!(t != null && t.id && t != null && t.path)),
      (this.$$typeof = Symbol.for('react.memo'));
  }
};
function Hw(e) {
  return new hp(e);
}
class $w extends hp {
  constructor(t) {
    super(t);
  }
}
function Vw(e) {
  return new $w(e);
}
function Ww(e, t) {
  var n,
    r,
    a,
    l = '';
  for (n in e)
    if ((a = e[n]) !== void 0)
      if (Array.isArray(a))
        for (r = 0; r < a.length; r++) l && (l += '&'), (l += encodeURIComponent(n) + '=' + encodeURIComponent(a[r]));
      else l && (l += '&'), (l += encodeURIComponent(n) + '=' + encodeURIComponent(a));
  return (t || '') + l;
}
function Kd(e) {
  if (!e) return '';
  var t = decodeURIComponent(e);
  return t === 'false' ? !1 : t === 'true' ? !0 : +t * 0 === 0 && +t + '' === t ? +t : t;
}
function Bw(e, t) {
  for (var n, r, a = {}, l = (t ? e.substr(t.length) : e).split('&'); (n = l.shift()); )
    (n = n.split('=')),
      (r = n.shift()),
      a[r] !== void 0 ? (a[r] = [].concat(a[r], Kd(n.shift()))) : (a[r] = Kd(n.shift()));
  return a;
}
const Kw = Yw(JSON.parse),
  Gw = Qw(JSON.stringify, JSON.parse);
function Yw(e) {
  return t => {
    t.substring(0, 1) === '?' && (t = t.substring(1));
    let n = Bw(t);
    for (let r in n) {
      const a = n[r];
      if (typeof a == 'string')
        try {
          n[r] = e(a);
        } catch {}
    }
    return n;
  };
}
function Qw(e, t) {
  function n(r) {
    if (typeof r == 'object' && r !== null)
      try {
        return e(r);
      } catch {}
    else if (typeof r == 'string' && typeof t == 'function')
      try {
        return t(r), e(r);
      } catch {}
    return r;
  }
  return r => {
    (r = { ...r }),
      r &&
        Object.keys(r).forEach(l => {
          const s = r[l];
          typeof s > 'u' || s === void 0 ? delete r[l] : (r[l] = n(s));
        });
    const a = Ww(r).toString();
    return a ? `?${a}` : '';
  };
}
const Xw =
  W.useTransition ||
  (() => [
    !1,
    e => {
      e();
    },
  ]);
function Jw({ router: e, ...t }) {
  e.update({ ...e.options, ...t, context: { ...e.options.context, ...(t == null ? void 0 : t.context) } });
  const n = e.options.InnerWrap ? K.jsx(e.options.InnerWrap, { children: K.jsx(Bd, {}) }) : K.jsx(Bd, {}),
    r = rp(),
    a = K.jsxs(r.Provider, { value: e, children: [n, K.jsx(qw, {})] });
  return e.options.Wrap ? K.jsx(e.options.Wrap, { children: a }) : a;
}
function qw() {
  const e = Xn(),
    t = W.useRef({ router: e, mounted: !1 }),
    n = Lt({ select: s => hi(s, ['isLoading', 'location', 'resolvedLocation', 'isTransitioning']) }),
    [r, a] = Xw();
  (e.startReactTransition = a),
    W.useEffect(() => {
      r && e.__store.setState(s => ({ ...s, isTransitioning: r }));
    }, [r]);
  const l = () => {
    (i => {
      n.isTransitioning ? i() : a(() => i());
    })(() => {
      try {
        e.load();
      } catch (i) {
        console.error(i);
      }
    });
  };
  return (
    Va(() => {
      const s = e.history.subscribe(() => {
          (e.latestLocation = e.parseLocation(e.latestLocation)), n.location !== e.latestLocation && l();
        }),
        i = e.buildLocation({ search: !0, params: !0, hash: !0, state: !0 });
      return (
        n.location.href !== i.href && e.commitLocation({ ...i, replace: !0 }),
        () => {
          s();
        }
      );
    }, [e.history]),
    Va(() => {
      var s;
      if (W.useTransition ? n.isTransitioning && !r : !n.isLoading && n.resolvedLocation !== n.location) {
        if (
          (e.emit({
            type: 'onResolved',
            fromLocation: n.resolvedLocation,
            toLocation: n.location,
            pathChanged: n.location.href !== ((s = n.resolvedLocation) == null ? void 0 : s.href),
          }),
          document.querySelector && n.location.hash !== '')
        ) {
          const i = document.getElementById(n.location.hash);
          i && i.scrollIntoView();
        }
        e.__store.setState(i => ({ ...i, isTransitioning: !1, resolvedLocation: i.location }));
      }
    }, [n.isTransitioning, r, n.isLoading, n.resolvedLocation, n.location]),
    Va(() => {
      window.__TSR_DEHYDRATED__ ||
        (t.current.router === e && t.current.mounted) ||
        ((t.current = { router: e, mounted: !0 }), l());
    }, [e]),
    null
  );
}
function Ga(e, t) {
  return [...e.cachedMatches, ...(e.pendingMatches ?? []), ...e.matches].find(n => n.id === t);
}
function tr(e) {
  return !!(e != null && e.isRedirect);
}
const Zw = ['component', 'errorComponent', 'pendingComponent', 'notFoundComponent'];
function e0(e) {
  return new t0(e);
}
class t0 {
  constructor(t) {
    (this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
      (this.resetNextScroll = !0),
      (this.navigateTimeout = null),
      (this.latestLoadPromise = Promise.resolve()),
      (this.subscribers = new Set()),
      (this.injectedHtml = []),
      (this.startReactTransition = n => n()),
      (this.update = n => {
        n.notFoundRoute &&
          console.warn(
            'The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/guide/not-found-errors#migrating-from-notfoundroute for more info.',
          );
        const r = this.options;
        (this.options = { ...this.options, ...n }),
          (!this.basepath || (n.basepath && n.basepath !== r.basepath)) &&
            (n.basepath === void 0 || n.basepath === '' || n.basepath === '/'
              ? (this.basepath = '/')
              : (this.basepath = `/${Dw(n.basepath)}`)),
          (!this.history || (this.options.history && this.options.history !== this.history)) &&
            ((this.history =
              this.options.history ??
              (typeof document < 'u' ? iw() : ow({ initialEntries: [this.options.basepath || '/'] }))),
            (this.latestLocation = this.parseLocation())),
          this.options.routeTree !== this.routeTree &&
            ((this.routeTree = this.options.routeTree), this.buildRouteTree()),
          this.__store ||
            (this.__store = new Ow(i0(this.latestLocation), {
              onUpdate: () => {
                this.__store.state = {
                  ...this.state,
                  status: this.state.isTransitioning || this.state.isLoading ? 'pending' : 'idle',
                };
              },
            }));
      }),
      (this.buildRouteTree = () => {
        (this.routesById = {}), (this.routesByPath = {});
        const n = this.options.notFoundRoute;
        n && (n.init({ originalIndex: 99999999999 }), (this.routesById[n.id] = n));
        const r = l => {
          l.forEach((s, i) => {
            s.init({ originalIndex: i });
            const o = this.routesById[s.id];
            if (
              (Xe(!o, `Duplicate routes found with id: ${String(s.id)}`),
              (this.routesById[s.id] = s),
              !s.isRoot && s.path)
            ) {
              const c = Wo(s.fullPath);
              (!this.routesByPath[c] || s.fullPath.endsWith('/')) && (this.routesByPath[c] = s);
            }
            const u = s.children;
            u != null && u.length && r(u);
          });
        };
        r([this.routeTree]);
        const a = [];
        Object.values(this.routesById).forEach((l, s) => {
          var i;
          if (l.isRoot || !l.path) return;
          const o = cc(l.fullPath),
            u = Lr(o);
          for (; u.length > 1 && ((i = u[0]) == null ? void 0 : i.value) === '/'; ) u.shift();
          const c = u.map(d => (d.value === '/' ? 0.75 : d.type === 'param' ? 0.5 : d.type === 'wildcard' ? 0.25 : 1));
          a.push({ child: l, trimmed: o, parsed: u, index: s, scores: c });
        }),
          (this.flatRoutes = a
            .sort((l, s) => {
              const i = Math.min(l.scores.length, s.scores.length);
              for (let o = 0; o < i; o++) if (l.scores[o] !== s.scores[o]) return s.scores[o] - l.scores[o];
              if (l.scores.length !== s.scores.length) return s.scores.length - l.scores.length;
              for (let o = 0; o < i; o++)
                if (l.parsed[o].value !== s.parsed[o].value) return l.parsed[o].value > s.parsed[o].value ? 1 : -1;
              return l.index - s.index;
            })
            .map((l, s) => ((l.child.rank = s), l.child)));
      }),
      (this.subscribe = (n, r) => {
        const a = { eventType: n, fn: r };
        return (
          this.subscribers.add(a),
          () => {
            this.subscribers.delete(a);
          }
        );
      }),
      (this.emit = n => {
        this.subscribers.forEach(r => {
          r.eventType === n.type && r.fn(n);
        });
      }),
      (this.checkLatest = n => (this.latestLoadPromise !== n ? this.latestLoadPromise : void 0)),
      (this.parseLocation = n => {
        const r = ({ pathname: i, search: o, hash: u, state: c }) => {
            const d = this.options.parseSearch(o),
              f = this.options.stringifySearch(d);
            return {
              pathname: i,
              searchStr: f,
              search: on(n == null ? void 0 : n.search, d),
              hash: u.split('#').reverse()[0] ?? '',
              href: `${i}${f}${u}`,
              state: on(n == null ? void 0 : n.state, c),
            };
          },
          a = r(this.history.location);
        let { __tempLocation: l, __tempKey: s } = a.state;
        if (l && (!s || s === this.tempLocationKey)) {
          const i = r(l);
          return (i.state.key = a.state.key), delete i.state.__tempLocation, { ...i, maskedLocation: a };
        }
        return a;
      }),
      (this.resolvePathWithBase = (n, r) => Fw(this.basepath, n, qs(r))),
      (this.matchRoutes = (n, r, a) => {
        let l = {},
          s = this.flatRoutes.find(f => {
            const p = Ka(this.basepath, Wo(n), {
              to: f.fullPath,
              caseSensitive: f.options.caseSensitive ?? this.options.caseSensitive,
              fuzzy: !0,
            });
            return p ? ((l = p), !0) : !1;
          }),
          i = s || this.routesById.__root__,
          o = [i],
          u = !1;
        for (
          (s ? s.path !== '/' && l['**'] : Wo(n)) &&
          (this.options.notFoundRoute ? o.push(this.options.notFoundRoute) : (u = !0));
          i != null && i.parentRoute;

        )
          (i = i.parentRoute), i && o.unshift(i);
        const c = o.map(f => {
            let p;
            if (f.options.parseParams)
              try {
                const g = f.options.parseParams(l);
                Object.assign(l, g);
              } catch (g) {
                if (((p = new r0(g.message, { cause: g })), a != null && a.throwOnError)) throw p;
                return p;
              }
          }),
          d = [];
        return (
          o.forEach((f, p) => {
            var g, v, k, m, h, y;
            const w = d[p - 1],
              [_, S] = (() => {
                const L = (w == null ? void 0 : w.search) ?? r;
                try {
                  const z =
                    typeof f.options.validateSearch == 'object'
                      ? f.options.validateSearch.parse
                      : f.options.validateSearch;
                  let U = (z == null ? void 0 : z(L)) ?? {};
                  return [{ ...L, ...U }, void 0];
                } catch (z) {
                  const U = new n0(z.message, { cause: z });
                  if (a != null && a.throwOnError) throw U;
                  return [L, U];
                }
              })(),
              E = ((v = (g = f.options).loaderDeps) == null ? void 0 : v.call(g, { search: _ })) ?? '',
              j = E ? JSON.stringify(E) : '',
              O = Ba({ path: f.fullPath, params: l }),
              b = Ba({ path: f.id, params: l, leaveWildcards: !0 }) + j,
              P = Ga(this.state, b),
              x = this.state.matches.find(L => L.id === b) ? 'stay' : 'enter',
              T = P
                ? { ...P, cause: x, notFoundError: u && f.id === st ? { global: !0 } : void 0, params: l }
                : {
                    id: b,
                    routeId: f.id,
                    params: l,
                    pathname: Sn([this.basepath, O]),
                    updatedAt: Date.now(),
                    search: {},
                    searchError: void 0,
                    status: 'pending',
                    showPending: !1,
                    isFetching: !1,
                    error: void 0,
                    paramsError: c[p],
                    loadPromise: Promise.resolve(),
                    routeContext: void 0,
                    context: void 0,
                    abortController: new AbortController(),
                    fetchCount: 0,
                    cause: x,
                    loaderDeps: E,
                    invalid: !1,
                    preload: !1,
                    notFoundError: u && f.id === st ? { global: !0 } : void 0,
                    links: (m = (k = f.options).links) == null ? void 0 : m.call(k),
                    scripts: (y = (h = f.options).scripts) == null ? void 0 : y.call(h),
                    staticData: f.options.staticData || {},
                  };
            (T.search = on(T.search, _)), (T.searchError = S), d.push(T);
          }),
          d
        );
      }),
      (this.cancelMatch = n => {
        var r, a;
        (a = (r = Ga(this.state, n)) == null ? void 0 : r.abortController) == null || a.abort();
      }),
      (this.cancelMatches = () => {
        var n;
        (n = this.state.pendingMatches) == null ||
          n.forEach(r => {
            this.cancelMatch(r.id);
          });
      }),
      (this.buildLocation = n => {
        const r = (l = {}, s) => {
            var i, o;
            const u = this.state.pendingMatches || this.state.matches,
              c = ((i = u[u.length - 1]) == null ? void 0 : i.search) || this.latestLocation.search;
            let d = this.resolvePathWithBase(l.from ?? this.latestLocation.pathname, `${l.to ?? ''}`);
            const f = this.matchRoutes(this.latestLocation.pathname, c),
              p = s == null ? void 0 : s.filter(b => (f == null ? void 0 : f.find(P => P.routeId === b.routeId))),
              g = { ...((o = uc(f)) == null ? void 0 : o.params) };
            let v = (l.params ?? !0) === !0 ? g : mr(l.params, g);
            v &&
              (s == null ||
                s
                  .map(b => this.looseRoutesById[b.routeId].options.stringifyParams)
                  .filter(Boolean)
                  .forEach(b => {
                    v = { ...v, ...b(v) };
                  })),
              (d = Ba({ path: d, params: v ?? {}, leaveWildcards: !1, leaveParams: n.leaveParams }));
            const k =
                (p == null
                  ? void 0
                  : p
                      .map(b => this.looseRoutesById[b.routeId].options.preSearchFilters ?? [])
                      .flat()
                      .filter(Boolean)) ?? [],
              m =
                (p == null
                  ? void 0
                  : p
                      .map(b => this.looseRoutesById[b.routeId].options.postSearchFilters ?? [])
                      .flat()
                      .filter(Boolean)) ?? [],
              h = k != null && k.length ? (k == null ? void 0 : k.reduce((b, P) => P(b), c)) : c,
              y = l.search === !0 ? h : l.search ? mr(l.search, h) ?? {} : k != null && k.length ? h : {},
              w = m != null && m.length ? m.reduce((b, P) => P(b), y) : y,
              _ = on(c, w),
              S = this.options.stringifySearch(_),
              E = l.hash === !0 ? this.latestLocation.hash : l.hash ? mr(l.hash, this.latestLocation.hash) : void 0,
              j = E ? `#${E}` : '';
            let O = l.state === !0 ? this.latestLocation.state : l.state ? mr(l.state, this.latestLocation.state) : {};
            return (
              (O = on(this.latestLocation.state, O)),
              {
                pathname: d,
                search: _,
                searchStr: S,
                state: O,
                hash: E ?? '',
                href: `${d}${S}${j}`,
                unmaskOnReload: l.unmaskOnReload,
              }
            );
          },
          a = (l = {}, s) => {
            var i;
            let o = r(l),
              u = s ? r(s) : void 0;
            if (!u) {
              let g = {},
                v =
                  (i = this.options.routeMasks) == null
                    ? void 0
                    : i.find(k => {
                        const m = Ka(this.basepath, o.pathname, { to: k.from, caseSensitive: !1, fuzzy: !1 });
                        return m ? ((g = m), !0) : !1;
                      });
              v && ((s = { ...hi(n, ['from']), ...v, params: g }), (u = r(s)));
            }
            const c = this.matchRoutes(o.pathname, o.search),
              d = u ? this.matchRoutes(u.pathname, u.search) : void 0,
              f = u ? r(s, d) : void 0,
              p = r(l, c);
            return f && (p.maskedLocation = f), p;
          };
        return n.mask ? a(n, { ...hi(n, ['from']), ...n.mask }) : a(n);
      }),
      (this.commitLocation = async ({ startTransition: n, ...r }) => {
        if (
          (this.navigateTimeout && clearTimeout(this.navigateTimeout),
          !(this.latestLocation.href === r.href) || !r.replace)
        ) {
          let { maskedLocation: l, ...s } = r;
          l &&
            ((s = {
              ...l,
              state: {
                ...l.state,
                __tempKey: void 0,
                __tempLocation: {
                  ...s,
                  search: s.searchStr,
                  state: { ...s.state, __tempKey: void 0, __tempLocation: void 0, key: void 0 },
                },
              },
            }),
            (s.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) && (s.state.__tempKey = this.tempLocationKey));
          const i = () => {
            this.history[r.replace ? 'replace' : 'push'](s.href, s.state);
          };
          n ?? !0 ? this.startReactTransition(i) : i();
        }
        return (this.resetNextScroll = r.resetScroll ?? !0), this.latestLoadPromise;
      }),
      (this.buildAndCommitLocation = ({ replace: n, resetScroll: r, startTransition: a, ...l } = {}) => {
        const s = this.buildLocation(l);
        return this.commitLocation({ ...s, startTransition: a, replace: n, resetScroll: r });
      }),
      (this.navigate = ({ from: n, to: r, ...a }) => {
        const l = String(r);
        let s;
        try {
          new URL(`${l}`), (s = !0);
        } catch {}
        return Xe(!s), this.buildAndCommitLocation({ ...a, from: n, to: r });
      }),
      (this.loadMatches = async ({ checkLatest: n, matches: r, preload: a }) => {
        var l, s;
        let i, o;
        const u = f => {
          var p;
          const g = (p = this.state.pendingMatches) == null ? void 0 : p.find(m => m.id === f.id),
            v = this.state.matches.find(m => m.id === f.id),
            k = g ? 'pendingMatches' : v ? 'matches' : 'cachedMatches';
          this.__store.setState(m => {
            var h;
            return { ...m, [k]: (h = m[k]) == null ? void 0 : h.map(y => (y.id === f.id ? f : y)) };
          });
        };
        try {
          for (let [f, p] of r.entries()) {
            const g = r[f - 1],
              v = this.looseRoutesById[p.routeId],
              k = new AbortController(),
              m = (h, y) => {
                var w, _;
                if (((h.routerCode = y), (o = o ?? f), tr(h))) throw h;
                pi(h) && this.updateMatchesWithNotFound(r, p, h);
                try {
                  (_ = (w = v.options).onError) == null || _.call(w, h);
                } catch (S) {
                  if (((h = S), tr(S))) throw S;
                }
                r[f] = p = {
                  ...p,
                  error: h,
                  status: 'error',
                  updatedAt: Date.now(),
                  abortController: new AbortController(),
                };
              };
            try {
              p.paramsError && m(p.paramsError, 'PARSE_PARAMS'), p.searchError && m(p.searchError, 'VALIDATE_SEARCH');
              const h = (g == null ? void 0 : g.context) ?? this.options.context ?? {},
                y = v.options.pendingMs ?? this.options.defaultPendingMs,
                w = typeof y == 'number' && y <= 0 ? Promise.resolve() : new Promise(E => setTimeout(E, y)),
                _ =
                  (await ((s = (l = v.options).beforeLoad) == null
                    ? void 0
                    : s.call(l, {
                        search: p.search,
                        abortController: k,
                        params: p.params,
                        preload: !!a,
                        context: h,
                        location: this.state.location,
                        navigate: E => this.navigate({ ...E, from: p.pathname }),
                        buildLocation: this.buildLocation,
                        cause: a ? 'preload' : p.cause,
                      }))) ?? {};
              if (tr(_)) throw _;
              const S = { ...h, ..._ };
              r[f] = p = {
                ...p,
                routeContext: on(p.routeContext, _),
                context: on(p.context, S),
                abortController: k,
                pendingPromise: w,
              };
            } catch (h) {
              m(h, 'BEFORE_LOAD');
              break;
            }
          }
        } catch (f) {
          if (tr(f)) return a || this.navigate(f), r;
          throw f;
        }
        const c = r.slice(0, o),
          d = [];
        return (
          c.forEach((f, p) => {
            d.push(
              new Promise(async g => {
                var v;
                const k = d[p - 1],
                  m = this.looseRoutesById[f.routeId],
                  h = L =>
                    tr(L)
                      ? (a || this.navigate(L), !0)
                      : pi(L)
                        ? (a || this.updateMatchesWithNotFound(r, f, L), !0)
                        : !1;
                let y;
                r[p] = f = { ...f, showPending: !1 };
                let w = !1;
                const _ = m.options.pendingMs ?? this.options.defaultPendingMs,
                  S = m.options.pendingMinMs ?? this.options.defaultPendingMinMs,
                  E =
                    !a && typeof _ == 'number' && (m.options.pendingComponent ?? this.options.defaultPendingComponent),
                  j = {
                    params: f.params,
                    deps: f.loaderDeps,
                    preload: !!a,
                    parentMatchPromise: k,
                    abortController: f.abortController,
                    context: f.context,
                    location: this.state.location,
                    navigate: L => this.navigate({ ...L, from: f.pathname }),
                    cause: a ? 'preload' : f.cause,
                  },
                  O = async () => {
                    var L, z, U, B, I, N, M, V;
                    if (f.isFetching) y = (L = Ga(this.state, f.id)) == null ? void 0 : L.loadPromise;
                    else {
                      f.fetchCount && f.status === 'success' && g(),
                        (r[p] = f = { ...f, isFetching: !0, fetchCount: f.fetchCount + 1 });
                      const Y =
                          ((z = m.lazyFn) == null
                            ? void 0
                            : z.call(m).then(q => {
                                Object.assign(m.options, q.options);
                              })) || Promise.resolve(),
                        ne = Y.then(() =>
                          Promise.all(
                            Zw.map(async q => {
                              const te = m.options[q];
                              te != null && te.preload && (await te.preload());
                            }),
                          ),
                        );
                      async function ee() {
                        var q, te;
                        return await ((te = (q = m.options).loader) == null ? void 0 : te.call(q, j));
                      }
                      const J = ee();
                      y = Promise.all([ne, J, Y]).then(q => q[1]);
                    }
                    (r[p] = f = { ...f, loadPromise: y }), u(f);
                    try {
                      const Y = await y;
                      if ((i = n())) return await i;
                      if ((tr(Y) || pi(Y)) && h(Y)) return;
                      if ((w && S && (await new Promise(J => setTimeout(J, S))), (i = n()))) return await i;
                      const [ne, ee] = await Promise.all([
                        (B = (U = m.options).meta) == null ? void 0 : B.call(U, { loaderData: Y }),
                        (N = (I = m.options).headers) == null ? void 0 : N.call(I, { loaderData: Y }),
                      ]);
                      r[p] = f = {
                        ...f,
                        error: void 0,
                        status: 'success',
                        isFetching: !1,
                        updatedAt: Date.now(),
                        loaderData: Y,
                        loadPromise: void 0,
                        meta: ne,
                        headers: ee,
                      };
                    } catch (Y) {
                      if ((i = n())) return await i;
                      if (h(Y)) return;
                      try {
                        (V = (M = m.options).onError) == null || V.call(M, Y);
                      } catch (ne) {
                        if (((Y = ne), h(ne))) return;
                      }
                      r[p] = f = { ...f, error: Y, status: 'error', isFetching: !1 };
                    }
                    u(f);
                  },
                  b = Date.now() - f.updatedAt;
                let P = a
                    ? m.options.preloadStaleTime ?? this.options.defaultPreloadStaleTime ?? 3e4
                    : m.options.staleTime ?? this.options.defaultStaleTime ?? 0,
                  x;
                const T = m.options.shouldReload;
                (x = typeof T == 'function' ? T(j) : T),
                  (r[p] = f = { ...f, preload: !!a && !this.state.matches.find(L => L.id === f.id) }),
                  f.status !== 'success'
                    ? (E &&
                        ((v = f.pendingPromise) == null ||
                          v.then(async () => {
                            if ((i = n())) return i;
                            (w = !0), (r[p] = f = { ...f, showPending: !0 }), u(f), g();
                          })),
                      await O())
                    : (f.invalid || (x ?? b > P)) && O(),
                  g();
              }),
            );
          }),
          await Promise.all(d),
          r
        );
      }),
      (this.invalidate = () => {
        const n = r => ({ ...r, invalid: !0 });
        this.__store.setState(r => {
          var a;
          return {
            ...r,
            matches: r.matches.map(n),
            cachedMatches: r.cachedMatches.map(n),
            pendingMatches: (a = r.pendingMatches) == null ? void 0 : a.map(n),
          };
        }),
          this.load();
      }),
      (this.load = async () => {
        const n = new Promise(async (r, a) => {
          const l = this.latestLocation,
            s = this.state.resolvedLocation,
            i = s.href !== l.href;
          let o;
          this.cancelMatches(), this.emit({ type: 'onBeforeLoad', fromLocation: s, toLocation: l, pathChanged: i });
          let u;
          const c = this.state.matches;
          this.__store.batch(() => {
            this.cleanCache(),
              (u = this.matchRoutes(l.pathname, l.search, { debug: !0 })),
              this.__store.setState(d => ({
                ...d,
                isLoading: !0,
                location: l,
                pendingMatches: u,
                cachedMatches: d.cachedMatches.filter(f => !u.find(p => p.id === f.id)),
              }));
          });
          try {
            try {
              await this.loadMatches({ matches: u, checkLatest: () => this.checkLatest(n) });
            } catch {}
            if ((o = this.checkLatest(n))) return o;
            const d = c.filter(g => !u.find(v => v.id === g.id)),
              f = u.filter(g => !c.find(v => v.id === g.id)),
              p = c.filter(g => u.find(v => v.id === g.id));
            this.__store.batch(() => {
              this.__store.setState(g => ({
                ...g,
                isLoading: !1,
                matches: g.pendingMatches,
                pendingMatches: void 0,
                cachedMatches: [...g.cachedMatches, ...d.filter(v => v.status !== 'error')],
              })),
                this.cleanCache();
            }),
              [
                [d, 'onLeave'],
                [f, 'onEnter'],
                [p, 'onStay'],
              ].forEach(([g, v]) => {
                g.forEach(k => {
                  var m, h;
                  (h = (m = this.looseRoutesById[k.routeId].options)[v]) == null || h.call(m, k);
                });
              }),
              this.emit({ type: 'onLoad', fromLocation: s, toLocation: l, pathChanged: i }),
              r();
          } catch (d) {
            if ((o = this.checkLatest(n))) return o;
            a(d);
          }
        });
        return (this.latestLoadPromise = n), this.latestLoadPromise;
      }),
      (this.cleanCache = () => {
        this.__store.setState(n => ({
          ...n,
          cachedMatches: n.cachedMatches.filter(r => {
            const a = this.looseRoutesById[r.routeId];
            if (!a.options.loader) return !1;
            const l =
              (r.preload
                ? a.options.preloadGcTime ?? this.options.defaultPreloadGcTime
                : a.options.gcTime ?? this.options.defaultGcTime) ?? 5 * 60 * 1e3;
            return r.status !== 'error' && Date.now() - r.updatedAt < l;
          }),
        }));
      }),
      (this.preloadRoute = async (n = this.state.location) => {
        var r;
        let a = this.buildLocation(n),
          l = this.matchRoutes(a.pathname, a.search, { throwOnError: !0 });
        const s = Object.fromEntries(
          (r = [...this.state.matches, ...(this.state.pendingMatches ?? []), ...this.state.cachedMatches]) == null
            ? void 0
            : r.map(i => [i.id, !0]),
        );
        return (
          this.__store.batch(() => {
            l.forEach(i => {
              s[i.id] || this.__store.setState(o => ({ ...o, cachedMatches: [...o.cachedMatches, i] }));
            });
          }),
          (l = await this.loadMatches({ matches: l, preload: !0, checkLatest: () => {} })),
          l
        );
      }),
      (this.matchRoute = (n, r) => {
        const a = {
            ...n,
            to: n.to ? this.resolvePathWithBase(n.from || '', n.to) : void 0,
            params: n.params || {},
            leaveParams: !0,
          },
          l = this.buildLocation(a);
        if (r != null && r.pending && this.state.status !== 'pending') return !1;
        const s = r != null && r.pending ? this.latestLocation : this.state.resolvedLocation;
        if (!s) return !1;
        const i = Ka(this.basepath, s.pathname, { ...r, to: l.pathname });
        return !i || (n.params && !Ui(i, n.params, !0))
          ? !1
          : i && ((r == null ? void 0 : r.includeSearch) ?? !0)
            ? Ui(s.search, l.search, !0)
              ? i
              : !1
            : i;
      }),
      (this.injectHtml = async n => {
        this.injectedHtml.push(n);
      }),
      (this.registeredDeferredsIds = new Map()),
      (this.registeredDeferreds = new WeakMap()),
      (this.getDeferred = n => {
        const r = this.registeredDeferredsIds.get(n);
        if (r) return this.registeredDeferreds.get(r);
      }),
      (this.dehydrateData = (n, r) => {
        if (typeof document > 'u') {
          const a = typeof n == 'string' ? n : JSON.stringify(n);
          return (
            this.injectHtml(async () => {
              const l = `__TSR_DEHYDRATED__${a}`,
                s = typeof r == 'function' ? await r() : r;
              return `<script id='${l}' suppressHydrationWarning>
  window["__TSR_DEHYDRATED__${Iw(a)}"] = ${JSON.stringify(this.options.transformer.stringify(s))}
<\/script>`;
            }),
            () => this.hydrateData(n)
          );
        }
        return () => {};
      }),
      (this.hydrateData = n => {
        if (typeof document < 'u') {
          const r = typeof n == 'string' ? n : JSON.stringify(n);
          return this.options.transformer.parse(window[`__TSR_DEHYDRATED__${r}`]);
        }
      }),
      (this.dehydrate = () => {
        var n;
        const r = ((n = this.options.errorSerializer) == null ? void 0 : n.serialize) ?? o0;
        return {
          state: {
            dehydratedMatches: this.state.matches.map(a => ({
              ...hi(a, ['id', 'status', 'updatedAt', 'loaderData', 'notFoundError']),
              error: a.error ? { data: r(a.error), __isServerError: !0 } : void 0,
            })),
          },
        };
      }),
      (this.hydrate = async n => {
        var r, a, l;
        let s = n;
        typeof document < 'u' && (s = (r = window.__TSR_DEHYDRATED__) == null ? void 0 : r.data), Xe(s);
        const i = this.options.transformer.parse(s);
        (this.dehydratedData = i.payload), (l = (a = this.options).hydrate) == null || l.call(a, i.payload);
        const o = i.router.state;
        let u = this.matchRoutes(this.state.location.pathname, this.state.location.search).map(c => {
          var d, f, p, g, v, k;
          const m = o.dehydratedMatches.find(h => h.id === c.id);
          if ((Xe(m, `Could not find a client-side match for dehydrated match with id: ${c.id}!`), m)) {
            const h = this.looseRoutesById[c.routeId];
            return {
              ...c,
              ...m,
              meta: (f = (d = h.options).meta) == null ? void 0 : f.call(d, { loaderData: m.loaderData }),
              links: (g = (p = h.options).links) == null ? void 0 : g.call(p),
              scripts: (k = (v = h.options).scripts) == null ? void 0 : k.call(v),
            };
          }
          return c;
        });
        this.__store.setState(c => ({ ...c, matches: u, lastUpdated: Date.now() }));
      }),
      (this.updateMatchesWithNotFound = (n, r, a) => {
        const l = Object.fromEntries(n.map(s => [s.routeId, s]));
        if (a.global) l[st].notFoundError = a;
        else {
          let s = this.routesById[a.route ?? r.routeId];
          for (; !s.options.notFoundComponent && ((s = s == null ? void 0 : s.parentRoute), Xe(s), s.id !== st); );
          const i = l[s.id];
          Xe(i, 'Could not find match for route: ' + s.id), (i.notFoundError = a);
        }
      }),
      (this.hasNotFoundMatch = () => this.__store.state.matches.some(n => n.notFoundError)),
      this.update({
        defaultPreloadDelay: 50,
        defaultPendingMs: 1e3,
        defaultPendingMinMs: 500,
        context: void 0,
        ...t,
        stringifySearch: (t == null ? void 0 : t.stringifySearch) ?? Gw,
        parseSearch: (t == null ? void 0 : t.parseSearch) ?? Kw,
        transformer: (t == null ? void 0 : t.transformer) ?? JSON,
      }),
      typeof document < 'u' && (window.__TSR__ROUTER__ = this);
  }
  get state() {
    return this.__store.state;
  }
  get looseRoutesById() {
    return this.routesById;
  }
}
class n0 extends Error {}
class r0 extends Error {}
function i0(e) {
  return {
    isLoading: !1,
    isTransitioning: !1,
    status: 'idle',
    resolvedLocation: { ...e },
    location: e,
    matches: [],
    pendingMatches: [],
    cachedMatches: [],
    lastUpdated: 0,
  };
}
function o0(e) {
  return e instanceof Error ? { name: e.name, message: e.message } : { data: e };
}
function dc(e) {
  return new s0(e, { silent: !0 }).createRoute;
}
class s0 {
  constructor(t, n) {
    (this.path = t),
      (this.createRoute = r => {
        this.silent;
        const a = Hw(r);
        return (a.isRoot = !1), a;
      }),
      (this.silent = n == null ? void 0 : n.silent);
  }
}
class a0 {
  constructor(t) {
    (this.useMatch = n => Pn({ select: n == null ? void 0 : n.select, from: this.options.id })),
      (this.useRouteContext = n =>
        Pn({ from: this.options.id, select: r => (n != null && n.select ? n.select(r.context) : r.context) })),
      (this.useSearch = n => gp({ ...n, from: this.options.id })),
      (this.useParams = n => fp({ ...n, from: this.options.id })),
      (this.useLoaderDeps = n => cp({ ...n, from: this.options.id })),
      (this.useLoaderData = n => dp({ ...n, from: this.options.id })),
      (this.options = t),
      (this.$$typeof = Symbol.for('react.memo'));
  }
}
function c1(e) {
  return t => new a0({ id: e, ...t });
}
const l0 = 'Error preloading route! ☝️';
function u0(e) {
  const t = Xn(),
    n = Pn({ strict: !1, select: te => te.pathname }),
    {
      activeProps: r = () => ({ className: 'active' }),
      inactiveProps: a = () => ({}),
      activeOptions: l,
      hash: s,
      search: i,
      params: o,
      to: u,
      state: c,
      mask: d,
      preload: f,
      preloadDelay: p,
      replace: g,
      startTransition: v,
      resetScroll: k,
      children: m,
      target: h,
      disabled: y,
      style: w,
      className: _,
      onClick: S,
      onFocus: E,
      onMouseEnter: j,
      onMouseLeave: O,
      onTouchStart: b,
      ...P
    } = e,
    x = { from: e.to ? n : void 0, ...e };
  let T = 'internal';
  try {
    new URL(`${u}`), (T = 'external');
  } catch {}
  if (T === 'external')
    return {
      ...P,
      type: T,
      href: u,
      children: m,
      target: h,
      disabled: y,
      style: w,
      className: _,
      onClick: S,
      onFocus: E,
      onMouseEnter: j,
      onMouseLeave: O,
      onTouchStart: b,
    };
  const L = t.buildLocation(x),
    z = f ?? t.options.defaultPreload,
    U = p ?? t.options.defaultPreloadDelay ?? 0,
    B = Lt({
      select: te => {
        const A = te.location.pathname.split('/'),
          R = L.pathname.split('/').every((X, re) => X === A[re]),
          C = l != null && l.exact ? te.location.pathname === L.pathname : R,
          $ = l != null && l.includeHash ? te.location.hash === L.hash : !0,
          H =
            (l == null ? void 0 : l.includeSearch) ?? !0
              ? Ui(te.location.search, L.search, !(l != null && l.exact))
              : !0;
        return C && $ && H;
      },
    }),
    I = te => {
      !y &&
        !d0(te) &&
        !te.defaultPrevented &&
        (!h || h === '_self') &&
        te.button === 0 &&
        (te.preventDefault(), t.commitLocation({ ...L, replace: g, resetScroll: k, startTransition: v }));
    },
    N = () => {
      W.startTransition(() => {
        t.preloadRoute(x).catch(te => {
          console.warn(te), console.warn(l0);
        });
      });
    },
    M = te => {
      y || (z && N());
    },
    V = M,
    Y = te => {
      if (y) return;
      const A = te.target || {};
      if (z) {
        if (A.preloadTimeout) return;
        A.preloadTimeout = setTimeout(() => {
          (A.preloadTimeout = null), N();
        }, U);
      }
    },
    ne = te => {
      if (y) return;
      const A = te.target || {};
      A.preloadTimeout && (clearTimeout(A.preloadTimeout), (A.preloadTimeout = null));
    },
    ee = te => A => {
      A.persist && A.persist(),
        te.filter(Boolean).forEach(D => {
          A.defaultPrevented || D(A);
        });
    },
    J = B ? mr(r, {}) ?? {} : {},
    q = B ? {} : mr(a, {}) ?? {};
  return {
    ...J,
    ...q,
    ...P,
    href: y ? void 0 : L.maskedLocation ? L.maskedLocation.href : L.href,
    onClick: ee([S, I]),
    onFocus: ee([E, M]),
    onMouseEnter: ee([j, Y]),
    onMouseLeave: ee([O, ne]),
    onTouchStart: ee([b, V]),
    target: h,
    style: { ...w, ...J.style, ...q.style },
    className: [_, J.className, q.className].filter(Boolean).join(' ') || void 0,
    ...(y ? { role: 'link', 'aria-disabled': !0 } : void 0),
    'data-status': B ? 'active' : void 0,
  };
}
const Bo = W.forwardRef((e, t) => {
    const { type: n, ...r } = u0(e),
      a = typeof e.children == 'function' ? e.children({ isActive: r['data-status'] === 'active' }) : e.children;
    return n === 'external' ? K.jsx('a', { ...r, ref: t, children: a }) : K.jsx(c0, { ...r, ref: t, children: a });
  }),
  c0 = W.forwardRef((e, t) => K.jsx('a', { ref: t, ...e }));
function d0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
const f0 = 'modulepreload',
  g0 = function (e) {
    return '/' + e;
  },
  Gd = {},
  h0 = function (t, n, r) {
    let a = Promise.resolve();
    if (n && n.length > 0) {
      const l = document.getElementsByTagName('link');
      a = Promise.all(
        n.map(s => {
          if (((s = g0(s)), s in Gd)) return;
          Gd[s] = !0;
          const i = s.endsWith('.css'),
            o = i ? '[rel="stylesheet"]' : '';
          if (!!r)
            for (let d = l.length - 1; d >= 0; d--) {
              const f = l[d];
              if (f.href === s && (!i || f.rel === 'stylesheet')) return;
            }
          else if (document.querySelector(`link[href="${s}"]${o}`)) return;
          const c = document.createElement('link');
          if (
            ((c.rel = i ? 'stylesheet' : f0),
            i || ((c.as = 'script'), (c.crossOrigin = '')),
            (c.href = s),
            document.head.appendChild(c),
            i)
          )
            return new Promise((d, f) => {
              c.addEventListener('load', d),
                c.addEventListener('error', () => f(new Error(`Unable to preload CSS for ${s}`)));
            });
        }),
      );
    }
    return a
      .then(() => t())
      .catch(l => {
        const s = new Event('vite:preloadError', { cancelable: !0 });
        if (((s.payload = l), window.dispatchEvent(s), !s.defaultPrevented)) throw l;
      });
  },
  pp = Object,
  Zs = Map,
  eo = Set,
  fc = eo.prototype.has,
  p0 = eo.prototype.add,
  Ss = Zs.prototype.has,
  Yd = Zs.prototype.get,
  ea = Zs.prototype.set,
  Er = 1,
  Xl = 2,
  mi = 4,
  Es = 8,
  m0 = 16,
  v0 = 32,
  nn = '__t',
  Qd = '__p',
  Jl = '__e',
  y0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  w0 = 'http://www.w3.org/1999/xlink',
  k0 = 'http://www.w3.org/2000/xmlns/',
  _0 = 120,
  S0 = new eo(['href', 'list', 'form', 'tabIndex', 'download']),
  E0 = new eo([
    'area',
    'base',
    'basefont',
    'bgsound',
    'br',
    'col',
    'command',
    'embed',
    'frame',
    'hr',
    'image',
    'img',
    'input',
    'isindex',
    'keygen',
    'link',
    'menuitem',
    'meta',
    'nextid',
    'param',
    'source',
    'track',
    'wbr',
  ]);
if (typeof window > 'u') throw new Error('See http://million.dev/docs/install to install the compiler.');
const En = document;
En.createElement('template');
const mp = En.createElement('template'),
  b0 = mp.content,
  Xd = En.createElementNS('http://www.w3.org/2000/svg', 'svg'),
  Jn = Node.prototype,
  ta = Element.prototype,
  j0 = CharacterData.prototype,
  na = pp.getOwnPropertyDescriptor,
  Ko = Jn.insertBefore,
  O0 = Jn.cloneNode,
  P0 = Jn.replaceChild,
  T0 = ta.remove,
  R0 = Jn.addEventListener,
  C0 = ta.removeAttribute,
  Jd = ta.setAttribute,
  qd = ta.setAttributeNS,
  I0 = na(Jn, 'textContent').set,
  vp = na(Jn, 'firstChild').get,
  x0 = na(Jn, 'nextSibling').get,
  A0 = na(j0, 'data').set,
  M0 = (e, t) => {
    const n = t ? Xd : mp;
    return (n.innerHTML = e), (t ? Xd : b0).firstChild;
  };
En[Jl] = new eo();
const Zd = (e, t, n) => {
    let r = t.toLowerCase(),
      a = !1;
    r.endsWith('capture') && ((r = r.slice(0, -7)), (a = !0));
    const l = `$$${r}`;
    fc.call(En[Jl], r) ||
      (R0.call(
        En,
        r,
        i => {
          let o = i.target;
          for (; o; ) {
            const u = o[l];
            u &&
              (pp.defineProperty(i, 'currentTarget', {
                configurable: !0,
                get() {
                  return o;
                },
              }),
              u(i)),
              (o = o.parentNode);
          }
        },
        { capture: a },
      ),
      p0.call(En[Jl], r));
    const s = i => {
      var o;
      i ? ('key' in i && i.key === ((o = e[l]) == null ? void 0 : o.key)) || (e[l] = i) : (e[l] = null);
    };
    return s(n), s;
  },
  Mn = (e, t) => {
    let n = vp.call(e);
    if (t) for (let r = 0; r < t && n; ++r) n = x0.call(n);
    return n;
  },
  ef = new WeakSet(),
  yp = e => {
    var n;
    if (ef.has(e)) return;
    e.nodeType === 8 && ((n = e.parentNode) == null || n.removeChild(e));
    let t = vp.call(e);
    for (; t; ) yp(t), (t = t.nextSibling);
    ef.add(e);
  },
  tf = (e, t, n) => {
    const r = En.createTextNode(t),
      a = Mn(e, n);
    return Ko.call(e, r, a), r;
  },
  L0 = (e, t) => {
    A0.call(e, t);
  },
  bo = (e, t, n) => {
    typeof n != 'number' || y0.test(t)
      ? (e.style[t] = n)
      : typeof n == 'string'
        ? (e.style.cssText = n)
        : t.startsWith('-')
          ? e.style.setProperty(t, String(n))
          : n == null
            ? (e.style[t] = '')
            : (e.style[t] = `${String(n)}px`);
  },
  nf = (e, t, n) => {
    (t = t.replace(/xlink(?:H|:h)/, 'h').replace(/sName$/, 's')),
      t.startsWith('xmlns') ? qd.call(e, k0, t, String(n)) : t.startsWith('xlink') && qd.call(e, w0, 'href', String(n));
  },
  rf = (e, t, n) => {
    const r = n == null;
    if (((n = r ? '' : n), t in e && e[t] !== void 0 && e[t] !== null && !(e instanceof SVGElement) && fc.call(S0, t)))
      try {
        e[t] = n;
      } catch {}
    else !r && n !== '' && (n !== !1 || t.includes('-')) ? Jd.call(e, t, String(n)) : C0.call(e, t);
    const a = e instanceof HTMLInputElement,
      l = e instanceof HTMLSelectElement,
      s = e instanceof HTMLTextAreaElement;
    t === 'value' && (a || l || s) && (Jd.call(e, t, String(n)), (e.value = n));
  };
var N0 = Object.defineProperty,
  D0 = (e, t, n) => (t in e ? N0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)),
  Ut = (e, t, n) => (D0(e, typeof t != 'symbol' ? t + '' : t, n), n);
class vi {
  constructor() {
    Ut(this, 'r'),
      Ut(this, 'e'),
      Ut(this, 'l'),
      Ut(this, 'g'),
      Ut(this, '_u'),
      Ut(this, '_t'),
      Ut(this, 'd'),
      Ut(this, 'k'),
      Ut(this, 'c');
  }
}
const wp = (e, t = [], n = []) => {
  var i, o;
  if (typeof e == 'string') return e;
  if (typeof e == 'number' || typeof e == 'bigint' || e === !0) return String(e);
  if (e == null || e === !1) return '';
  if (typeof e == 'object' && '$' in e)
    return (
      t.push({ p: n, e: [{ t: Er, n: null, v: null, h: e.$, i: 0, l: null, p: null, b: null }], i: [] }), '<slot/>'
    );
  let r = '',
    a = '';
  const l = { p: n, e: [], i: [] };
  for (let u in e.props) {
    const c = e.props[u];
    if (!(u === 'key' || u === 'ref' || u === 'children')) {
      if ((u === 'className' && (u = 'class'), u === 'htmlFor' && (u = 'for'), u.startsWith('on'))) {
        '$' in c
          ? l.e.push({ t: mi, n: u.slice(2), v: null, h: c.$, i: null, l: null, p: null, b: null })
          : l.i.push({ t: mi, n: u.slice(2), v: null, h: null, i: null, l: c, p: null, b: null });
        continue;
      }
      if (c) {
        if (typeof c == 'object' && '$' in c) {
          u === 'style'
            ? l.e.push({ t: Es, n: u, v: null, h: c.$, i: null, l: null, p: null, b: null })
            : u.charCodeAt(0) === _0
              ? l.e.push({ t: m0, n: u, v: null, h: c.$, i: null, l: null, p: null, b: null })
              : l.e.push({ t: Xl, n: u, v: null, h: c.$, i: null, l: null, p: null, b: null });
          continue;
        }
        if (u === 'style' && typeof c == 'object') {
          let d = '';
          for (const f in c) {
            if (typeof c[f] == 'object') {
              l.e.push({ t: Es, n: f, v: null, h: c[f].$, i: null, l: null, p: null, b: null });
              continue;
            }
            let p = '';
            for (let g = 0, v = f.length; g < v; ++g) {
              const k = f.charCodeAt(g);
              k < 97 ? (p += `-${String.fromCharCode(k + 32)}`) : (p += f[g]);
            }
            d += `${p}:${String(c[f])};`;
          }
          r += ` style="${d}"`;
          continue;
        }
        r += ` ${u}="${String(c)}"`;
      }
    }
  }
  if (fc.call(E0, e.type)) return l.e.length && t.push(l), `<${e.type}${r} />`;
  let s = !1;
  for (let u = 0, c = ((i = e.props.children) == null ? void 0 : i.length) || 0, d = 0; u < c; ++u) {
    const f = (o = e.props.children) == null ? void 0 : o[u];
    if (f == null || f === !1) continue;
    if (typeof f == 'object' && '$' in f) {
      l.e.push({ t: Er, n: null, v: null, h: f.$, i: u, l: null, p: null, b: null });
      continue;
    }
    if (f instanceof vi) {
      l.i.push({ t: v0, n: null, v: null, h: null, i: u, l: null, p: null, b: f });
      continue;
    }
    if (typeof f == 'string' || typeof f == 'number' || typeof f == 'bigint') {
      const g = typeof f == 'number' || typeof f == 'bigint' ? String(f) : f;
      if (s) {
        l.i.push({ t: Er, n: null, v: g, h: null, i: u, l: null, p: null, b: null });
        continue;
      }
      (s = !0), (a += g), d++;
      continue;
    }
    s = !1;
    const p = n.slice();
    p.push(d++), (a += wp(f, t, p));
  }
  return (l.i.length || l.e.length) && t.push(l), `<${e.type}${r}>${a}</${e.type}>`;
};
var F0 = Object.defineProperty,
  U0 = (e, t, n) => (t in e ? F0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)),
  z0 = (e, t, n) => (U0(e, typeof t != 'symbol' ? t + '' : t, n), n);
const of = e => new kp(e);
class kp extends vi {
  constructor(t) {
    super(), z0(this, 'b'), (this.b = t);
  }
  v() {}
  p(t) {
    const n = this.b,
      r = t.b,
      a = n.length,
      l = r.length,
      s = this.t();
    if (this === t || (l === 0 && a === 0)) return s;
    if (((this.b = r), l === 0)) return H0.call(this), s;
    if (a === 0) return _p.call(t, s), s;
    let i = 0,
      o = 0,
      u = a - 1,
      c = l - 1,
      d = n[0],
      f = r[0],
      p = n[u],
      g = r[c],
      v;
    for (; i <= u && o <= c; ) {
      if (!d) {
        d = n[++i];
        continue;
      }
      if (!p) {
        p = n[--u];
        continue;
      }
      const k = d.k,
        m = f.k;
      if (k === m) {
        rr.call(d, f), (r[o] = d), (d = n[++i]), (f = r[++o]);
        continue;
      }
      const h = p.k,
        y = g.k;
      if (h === y) {
        rr.call(p, g), (r[c] = p), (p = n[--u]), (g = r[--c]);
        continue;
      }
      if (k === y) {
        rr.call(d, g), (r[c] = d);
        const _ = r[c + 1];
        Ya.call(d, _, (_ == null ? void 0 : _.l) || null), (d = n[++i]), (g = r[--c]);
        continue;
      }
      if (h === m) {
        rr.call(p, f), (r[o] = p);
        const _ = n[i];
        Ya.call(p, _, (_ == null ? void 0 : _.l) || null), (p = n[--u]), (f = r[++o]);
        continue;
      }
      if (!v) {
        v = new Zs();
        for (let _ = i; _ <= u; _++) ea.call(v, n[_].k, _);
      }
      const w = v.get(m);
      if (w === void 0) br.call(f, s, d.l || null);
      else {
        const _ = n[w];
        Ya.call(_, d, null), rr.call(_, f), (r[o] = _), (n[w] = null);
      }
      f = r[++o];
    }
    if (i <= u || o <= c)
      if (i > u) {
        const k = r[c + 1];
        for (let m = o; m <= c; ++m) br.call(r[m], s, k ? k.l : null);
      } else for (let k = i; k <= u; ++k) ql.call(n[k]);
    return s;
  }
  m(t, n = null) {
    if (this._t) return this._t;
    for (let r = 0, a = this.b.length; r < a; ++r) {
      const l = this.b[r];
      br.call(l, t, n);
    }
    return (this._t = t), t;
  }
  x() {
    const t = this.t();
    if (t) I0.call(t, '');
    else for (let n = 0, r = this.b.length; n < r; ++n) ql.call(this.b[n]);
    this.b = [];
  }
  u() {
    return !0;
  }
  s() {
    return this.b.map(t => t.s()).join('');
  }
  t() {
    return this._t || (this._t = this.b[0].t()), this._t;
  }
}
const gc = kp.prototype,
  _p = gc.m,
  Sp = gc.p,
  H0 = gc.x,
  $0 = new Proxy(
    {},
    {
      get(e, t) {
        return { $: t };
      },
    },
  ),
  Ep = (e, t, n, r) => {
    const a = e($0),
      l = [],
      s = M0(wp(t ? t(a) : a, l), r);
    return yp(s), (i, o, u) => new bp(s, l, i, o ?? (i == null ? void 0 : i.key) ?? null, u ?? n ?? null, null);
  },
  V0 = (e, t) => {
    if (
      (('b' in e || 'b' in t) && Sp.call(e, t),
      e.l || br.call(e, void 0, null, null),
      (e.k && e.k === t.k) || e.r === t.r)
    )
      return rr.call(e, t);
    const n = br.call(t, e.t(), e.l, null);
    return ql.call(e), (e.k = t.k), n;
  };
class bp extends vi {
  constructor(t, n, r, a, l, s) {
    super(),
      (this.r = t),
      (this.d = r),
      (this.e = n),
      (this.k = a),
      (this.c = Array(n.length)),
      l ? (this._u = l) : (this._u = null),
      s ? (this.g = s) : (this.g = null);
  }
  m(t, n = null, r) {
    var s, i;
    if (this.l) return this.l;
    const a = r ?? O0.call(this.r, !0),
      l = (s = this.g) == null ? void 0 : s.call(this, a);
    l && (this.c = l);
    for (let o = 0, u = this.e.length; o < u; ++o) {
      const c = this.e[o],
        d = (l == null ? void 0 : l[o]) ?? sf(c.p, a, this.c, o);
      for (let p = 0, g = c.e.length; p < g; ++p) {
        const v = c.e[p],
          k = this.d[v.h];
        if (v.t & Er) {
          if (k instanceof vi) {
            const m = Mn(d, v.i);
            r ? k.m(d, m, m) : k.m(d, m);
            continue;
          }
          if ((d[nn] || (d[nn] = new Array(g)), k && typeof k == 'object' && 'foreign' in k)) {
            if (r) {
              const h = Mn(d, v.i);
              k.reset(h);
            }
            const m = k.current;
            (d[nn][p] = m), r || Ko.call(d, m, Mn(d, v.i));
            continue;
          }
          if (r) {
            d[nn][p] = Mn(d, v.i);
            continue;
          }
          d[nn][p] = tf(d, k == null || k === !1 ? '' : String(k), v.i);
        } else if (v.t & mi) {
          const m = Zd(d, v.n, k);
          d[Qd + v.n] = m;
        } else if (v.t & Xl) rf(d, v.n, k);
        else if (v.t & Es)
          if (typeof k == 'string' || typeof k == 'number') bo(d, v.n, k);
          else for (const m in k) bo(d, m, k[m]);
        else nf(d, v.n, k);
      }
      const f = (i = c.i) == null ? void 0 : i.length;
      if (f)
        for (let p = 0; p < f; ++p) {
          const g = c.i[p];
          if (g.t & Er) g.v && !r && tf(d, g.v, g.i);
          else if (g.t & mi) Zd(d, g.n, g.l);
          else {
            const v = Mn(d, g.i);
            r ? g.b.m(d, v, v) : g.b.m(d, v);
          }
        }
    }
    return t && !r && Ko.call(t, a, n), (this.l = a), a;
  }
  p(t) {
    var a, l;
    const n = this.l;
    if (!t.d) return n;
    const r = this.d;
    if (!W0.call(this, r, t.d)) return n;
    this.d = t.d;
    for (let s = 0, i = this.e.length; s < i; ++s) {
      const o = this.e[s],
        u = this.c[s] ?? sf(o.p, n, this.c, s);
      for (let c = 0, d = o.e.length; c < d; ++c) {
        const f = o.e[c],
          p = r[f.h],
          g = t.d[f.h];
        if (g !== p) {
          if (f.t & mi) {
            u[Qd + f.n](g);
            continue;
          }
          if (f.t & Er) {
            if (p instanceof vi) {
              const v = (l = (a = t.e) == null ? void 0 : a[s]) == null ? void 0 : l.e[c],
                k = t.d[v.h];
              p.p(k);
              continue;
            }
            if (g && typeof g == 'object' && 'foreign' in g) {
              const v = u[nn][c];
              if (g.unstable && p !== g) {
                const k = g.current;
                (u[nn][c] = k), P0.call(u, k, v);
              } else g.current = v;
              continue;
            }
            L0(u[nn][c], g == null || g === !1 ? '' : String(g));
          } else if (f.t & Xl) rf(u, f.n, g);
          else if (f.t & Es)
            if (typeof g == 'string' || typeof g == 'number') bo(u, f.n, g);
            else for (const v in g) g[v] !== p[v] && bo(u, v, g[v]);
          else nf(u, f.n, g);
        }
      }
    }
    return n;
  }
  v(t = null, n = null) {
    Ko.call(this.t(), this.l, t ? t.l : n);
  }
  x() {
    T0.call(this.l), (this.l = null);
  }
  u(t, n) {
    return this._u ? this._u(t, n) : !0;
  }
  s() {
    var t;
    return String((t = this.l) == null ? void 0 : t.outerHTML);
  }
  t() {
    var t;
    return this._t || (this._t = (t = this.l) == null ? void 0 : t.parentElement), this._t;
  }
}
const sf = (e, t, n, r) => {
    const a = e.length;
    if (!a) return t;
    const l = n && r !== void 0;
    if (l && n[r]) return n[r];
    for (let s = 0; s < a; ++s) {
      const i = e[s];
      t = Mn(t, i);
    }
    return l && (n[r] = t), t;
  },
  to = bp.prototype,
  br = to.m,
  rr = to.p,
  Ya = to.v,
  ql = to.x,
  W0 = to.u,
  ra = 'slot',
  jp = 'g',
  B0 = ({ effect: e, deps: t }) => (W.useEffect(e, t || []), null),
  St = new Map(),
  K0 = (e, t, n) => {
    const r = { ref: t };
    let a = 0;
    for (const l in e) {
      const s = e[l];
      if (W.isValidElement(s) || (Array.isArray(s) && s.length && W.isValidElement(s[0]))) {
        r[l] = hc(s, !1, n, a++);
        continue;
      }
      r[l] = e[l];
    }
    return r;
  },
  Qa = e => W.createElement(ra, { suppressHydrationWarning: !0 }, e),
  hc = (e, t, n, r) => {
    var c;
    const a = (c = n == null ? void 0 : n[r]) == null ? void 0 : c.current,
      l = W.isValidElement(e) && typeof e.type == 'function' && '_c' in e.type,
      s = l && e.type._c;
    if (typeof window > 'u') return l ? (s ? e : Qa(Qa(e))) : Qa(e);
    if (s) {
      const d = e.type(e.props);
      if (St.has(d.type)) {
        const f = St.get(d.type);
        if (typeof f == 'function') return f(d.props);
      }
    }
    const i = a ?? document.createElement(ra),
      o = ac.createPortal(e, i),
      u = { foreign: !0, current: i, portal: o, unstable: t };
    return n && (n[r] = u), u;
  },
  Zl = e => {
    var a;
    if (typeof e != 'object' || e === null || !('type' in e)) return typeof e == 'number' ? String(e) : e;
    let t = e.type;
    if (typeof t == 'function') return Zl(t(e.props ?? {}));
    if (typeof t == 'object' && '$' in t) return t;
    const n = { ...e.props };
    'css' in n &&
      '__EMOTION_TYPE_PLEASE_DO_NOT_USE__' in n &&
      ((n.style = n.css.styles),
      (t = n.__EMOTION_TYPE_PLEASE_DO_NOT_USE__),
      delete n.__EMOTION_TYPE_PLEASE_DO_NOT_USE__,
      delete n.css);
    const r = (a = e.props) == null ? void 0 : a.children;
    return r != null && (n.children = eu(e.props.children).map(l => Zl(l))), { type: t, props: n };
  },
  eu = e => {
    if (e == null) return [];
    if (typeof e == 'object' && 'type' in e && e.type === W.Fragment) return eu(e.props.children);
    if (!Array.isArray(e) || (typeof e == 'object' && '$' in e)) return [e];
    const t = e.flat(1 / 0),
      n = [];
    for (let r = 0, a = t.length; r < a; ++r) n.push(...eu(t[r]));
    return n;
  },
  Op = (e, t = {}) => {
    let n = t == null ? void 0 : t.block;
    const r = t != null && t.svg ? jp : ra;
    e && (n = Ep(e, Zl, t == null ? void 0 : t.shouldUpdate, t == null ? void 0 : t.svg));
    const a = (l, s) => {
      var k, m;
      const i = l._hmr,
        o = W.useRef(null),
        u = W.useRef(null),
        c = W.useRef([]);
      (l = K0(l, s, c.current)), (k = u.current) == null || k.call(u, l);
      const d = W.useCallback(() => {
          if (!o.current) return;
          const h = n(l, l.key);
          i && o.current.textContent && (o.current.textContent = ''),
            (u.current === null || i) &&
              (br.call(h, o.current, null),
              (u.current = y => {
                V0(h, n(y, y.key, t == null ? void 0 : t.shouldUpdate));
              }));
        }, []),
        f = W.useMemo(() => W.createElement((t == null ? void 0 : t.as) ?? r, { ref: o }), []),
        p = c.current.length,
        g = new Array(p);
      (g[0] = f), (g[1] = W.createElement(B0, { effect: d, deps: i ? [i] : [] }));
      for (let h = 0; h < p; ++h) g[h + 2] = (m = c.current[h]) == null ? void 0 : m.portal;
      return W.createElement(W.Fragment, { children: g });
    };
    return (
      Ss.call(St, a) || ea.call(St, a, Op),
      t != null &&
        t.name &&
        (e && (e.displayName = `Million(Render(${t.name}))`), (a.displayName = `Million(Block(${t.name}))`)),
      a
    );
  },
  G0 = ({ each: e, children: t, memo: n, svg: r, as: a, ...l }) => {
    const s = W.useRef(null),
      [i] = W.useState(() => ({ current: Array(e.length) })),
      o = W.useRef(null),
      u = W.useRef({ each: null, children: null, mounted: !1 }),
      [, c] = W.useState(!1);
    if (o.current && (e !== u.current.each || !n)) {
      const p = af(e, t, u, i, n);
      Sp.call(o.current, of(p));
    }
    const d = r ? jp : ra,
      f = W.createElement(W.Fragment, null, W.createElement(a ?? d, { ...l, ref: s }), ...i.current.map(p => p.portal));
    return (
      W.useEffect(() => {
        if (!s.current || o.current || u.current.mounted) return;
        const p = af(e, t, u, i, n);
        (o.current = of(p)),
          Ss.call(St, f) || ea.call(St, f, o.current),
          _p.call(o.current, s.current),
          (u.current.mounted = !0),
          c(!0);
      }, [s.current]),
      f
    );
  },
  Y0 = W.memo;
Y0(G0);
const af = (e, t, n, r, a) => {
  var i;
  const l = Array(e.length),
    s = n.current;
  for (let o = 0, u = e.length; o < u; ++o) {
    if (a && s.each && s.each[o] === e[o]) {
      l[o] = (i = s.children) == null ? void 0 : i[o];
      continue;
    }
    const c = t(e[o], o);
    if (Ss.call(St, c.type)) {
      s.block || (s.block = Yd.call(St, c.type)), (l[o] = s.block(c.props, o));
      continue;
    }
    if (typeof c.type == 'function' && '_c' in c.type) {
      const p = c.type(c.props);
      if (Ss.call(St, p.type)) {
        const g = Yd.call(St, p.type);
        if (typeof g == 'function') {
          l[o] = g(p.props);
          continue;
        }
      }
    }
    const d = Ep(p => (p == null ? void 0 : p.scope)),
      f = (p, g) => d({ scope: hc(W.createElement(c.type, p), !1, r.current, g) }, c.key ? String(c.key) : void 0);
    ea.call(St, c.type, f), (s.block = f), (l[o] = f(c.props, o));
  }
  return (s.each = e), (s.children = l), l;
};
function Q0(e, t) {
  return e === t || (e !== e && t !== t);
}
function X0(e, t) {
  for (const n in e) if (!Q0(e[n], t[n])) return !0;
  return !1;
}
function J0(e, { portals: t, ...n }) {
  const r = Op(s => e(s), { ...n, name: `CompiledBlock(Inner(${n.name}))`, shouldUpdate: X0 }),
    a = (t == null ? void 0 : t.length) || 0,
    l =
      t && a > 0
        ? s => {
            const [i] = W.useState(() => []),
              o = { ...s };
            for (let c = 0; c < a; c++) {
              const d = t[c];
              o[d] = hc(o[d], !1, i, c);
            }
            const u = [];
            for (let c = 0, d = i.length; c < d; c++) u[c] = i[c].portal;
            return W.createElement(W.Fragment, {}, W.createElement(r, o), u);
          }
        : s => W.createElement(r, s);
  return n.name && (l.displayName = `Million(CompiledBlock(Outer(${n.name})))`), l;
}
typeof window < 'u' && (window.__MILLION_DATA__ = { version: '3.0.2' });
var Pp = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
  lf = Un.createContext && Un.createContext(Pp),
  q0 = ['attr', 'size', 'title'];
function Z0(e, t) {
  if (e == null) return {};
  var n = ek(e, t),
    r,
    a;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (a = 0; a < l.length; a++)
      (r = l[a]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function ek(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    a,
    l;
  for (l = 0; l < r.length; l++) (a = r[l]), !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function bs() {
  return (
    (bs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    bs.apply(this, arguments)
  );
}
function uf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function js(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? uf(Object(n), !0).forEach(function (r) {
          tk(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : uf(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function tk(e, t, n) {
  return (
    (t = nk(t)),
    t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
    e
  );
}
function nk(e) {
  var t = rk(e, 'string');
  return typeof t == 'symbol' ? t : String(t);
}
function rk(e, t) {
  if (typeof e != 'object' || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || 'default');
    if (typeof r != 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Tp(e) {
  return e && e.map((t, n) => Un.createElement(t.tag, js({ key: n }, t.attr), Tp(t.child)));
}
function ik(e) {
  return t => Un.createElement(ok, bs({ attr: js({}, e.attr) }, t), Tp(e.child));
}
function ok(e) {
  var t = n => {
    var { attr: r, size: a, title: l } = e,
      s = Z0(e, q0),
      i = a || n.size || '1em',
      o;
    return (
      n.className && (o = n.className),
      e.className && (o = (o ? o + ' ' : '') + e.className),
      Un.createElement(
        'svg',
        bs({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, n.attr, r, s, {
          className: o,
          style: js(js({ color: e.color || n.color }, n.style), e.style),
          height: i,
          width: i,
          xmlns: 'http://www.w3.org/2000/svg',
        }),
        l && Un.createElement('title', null, l),
        e.children,
      )
    );
  };
  return lf !== void 0 ? Un.createElement(lf.Consumer, null, n => t(n)) : t(Pp);
}
function sk(e) {
  return ik({
    tag: 'svg',
    attr: { viewBox: '0 0 496 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z',
        },
        child: [],
      },
    ],
  })(e);
}
const ak = J0(
    e =>
      K.jsx('nav', {
        className: 'sticky top-0 z-10 bg-gray-800',
        'aria-label': 'Main navigation',
        children: K.jsx('div', {
          className: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
          children: K.jsxs('div', {
            className: 'flex h-16 items-center justify-between',
            children: [
              K.jsxs('div', {
                className: 'flex items-center',
                children: [
                  K.jsx('div', {
                    className: 'flex-shrink-0 text-emerald-300',
                    'aria-label': 'inmeta logo',
                    children: 'inmeta',
                  }),
                  K.jsx('div', {
                    className: 'hidden md:block',
                    children: K.jsxs('div', {
                      className: 'ml-10 flex items-baseline gap-2 space-x-4',
                      children: [e.v0, e.v1, e.v2],
                    }),
                  }),
                ],
              }),
              K.jsx('div', {
                children: K.jsx('a', {
                  href: 'https://github.com/webmasterdevlin/anki-app',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  'aria-label': 'View source on GitHub',
                  className: 'text-gray-300 hover:text-white',
                  children: e.v3,
                }),
              }),
            ],
          }),
        }),
      }),
    { name: 'Navigation_1', portals: ['v0', 'v1', 'v2', 'v3'] },
  ),
  lk = () =>
    K.jsx(ak, {
      v0: K.jsx(Bo, {
        to: '/',
        className: 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white',
        'aria-current': 'page',
        children: 'Home',
      }),
      v1: K.jsx(Bo, {
        to: '/norsk',
        className: 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white',
        children: 'Norsk',
      }),
      v2: K.jsx(Bo, {
        to: '/english',
        className: 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white',
        children: 'English',
      }),
      v3: K.jsx(sk, { className: 'h-6 w-6', 'aria-hidden': 'true' }),
    }),
  ia = Vw({ component: () => K.jsxs(K.Fragment, { children: [K.jsx(lk, {}), K.jsx(up, {}), !1] }) });
var Rp = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r(W);
  })(typeof self < 'u' ? self : Uf, function (n) {
    return (function (r) {
      var a = {};
      function l(s) {
        if (a[s]) return a[s].exports;
        var i = (a[s] = { i: s, l: !1, exports: {} });
        return r[s].call(i.exports, i, i.exports, l), (i.l = !0), i.exports;
      }
      return (
        (l.m = r),
        (l.c = a),
        (l.d = function (s, i, o) {
          l.o(s, i) || Object.defineProperty(s, i, { enumerable: !0, get: o });
        }),
        (l.r = function (s) {
          typeof Symbol < 'u' &&
            Symbol.toStringTag &&
            Object.defineProperty(s, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(s, '__esModule', { value: !0 });
        }),
        (l.t = function (s, i) {
          if ((1 & i && (s = l(s)), 8 & i || (4 & i && typeof s == 'object' && s && s.__esModule))) return s;
          var o = Object.create(null);
          if (
            (l.r(o), Object.defineProperty(o, 'default', { enumerable: !0, value: s }), 2 & i && typeof s != 'string')
          )
            for (var u in s)
              l.d(
                o,
                u,
                function (c) {
                  return s[c];
                }.bind(null, u),
              );
          return o;
        }),
        (l.n = function (s) {
          var i =
            s && s.__esModule
              ? function () {
                  return s.default;
                }
              : function () {
                  return s;
                };
          return l.d(i, 'a', i), i;
        }),
        (l.o = function (s, i) {
          return Object.prototype.hasOwnProperty.call(s, i);
        }),
        (l.p = ''),
        l((l.s = 2))
      );
    })([
      function (r, a) {
        r.exports = n;
      },
      function (r, a, l) {
        var s = {
          linear: function (i, o, u, c) {
            return ((u - o) * i) / c + o;
          },
          easeInQuad: function (i, o, u, c) {
            return (u - o) * (i /= c) * i + o;
          },
          easeOutQuad: function (i, o, u, c) {
            return -(u - o) * (i /= c) * (i - 2) + o;
          },
          easeInOutQuad: function (i, o, u, c) {
            var d = u - o;
            return (i /= c / 2) < 1 ? (d / 2) * i * i + o : (-d / 2) * (--i * (i - 2) - 1) + o;
          },
          easeInCubic: function (i, o, u, c) {
            return (u - o) * (i /= c) * i * i + o;
          },
          easeOutCubic: function (i, o, u, c) {
            return (u - o) * ((i = i / c - 1) * i * i + 1) + o;
          },
          easeInOutCubic: function (i, o, u, c) {
            var d = u - o;
            return (i /= c / 2) < 1 ? (d / 2) * i * i * i + o : (d / 2) * ((i -= 2) * i * i + 2) + o;
          },
          easeInQuart: function (i, o, u, c) {
            return (u - o) * (i /= c) * i * i * i + o;
          },
          easeOutQuart: function (i, o, u, c) {
            return -(u - o) * ((i = i / c - 1) * i * i * i - 1) + o;
          },
          easeInOutQuart: function (i, o, u, c) {
            var d = u - o;
            return (i /= c / 2) < 1 ? (d / 2) * i * i * i * i + o : (-d / 2) * ((i -= 2) * i * i * i - 2) + o;
          },
          easeInQuint: function (i, o, u, c) {
            return (u - o) * (i /= c) * i * i * i * i + o;
          },
          easeOutQuint: function (i, o, u, c) {
            return (u - o) * ((i = i / c - 1) * i * i * i * i + 1) + o;
          },
          easeInOutQuint: function (i, o, u, c) {
            var d = u - o;
            return (i /= c / 2) < 1 ? (d / 2) * i * i * i * i * i + o : (d / 2) * ((i -= 2) * i * i * i * i + 2) + o;
          },
          easeInSine: function (i, o, u, c) {
            var d = u - o;
            return -d * Math.cos((i / c) * (Math.PI / 2)) + d + o;
          },
          easeOutSine: function (i, o, u, c) {
            return (u - o) * Math.sin((i / c) * (Math.PI / 2)) + o;
          },
          easeInOutSine: function (i, o, u, c) {
            return (-(u - o) / 2) * (Math.cos((Math.PI * i) / c) - 1) + o;
          },
          easeInExpo: function (i, o, u, c) {
            return i == 0 ? o : (u - o) * Math.pow(2, 10 * (i / c - 1)) + o;
          },
          easeOutExpo: function (i, o, u, c) {
            var d = u - o;
            return i == c ? o + d : d * (1 - Math.pow(2, (-10 * i) / c)) + o;
          },
          easeInOutExpo: function (i, o, u, c) {
            var d = u - o;
            return i === 0
              ? o
              : i === c
                ? o + d
                : (i /= c / 2) < 1
                  ? (d / 2) * Math.pow(2, 10 * (i - 1)) + o
                  : (d / 2) * (2 - Math.pow(2, -10 * --i)) + o;
          },
          easeInCirc: function (i, o, u, c) {
            return -(u - o) * (Math.sqrt(1 - (i /= c) * i) - 1) + o;
          },
          easeOutCirc: function (i, o, u, c) {
            return (u - o) * Math.sqrt(1 - (i = i / c - 1) * i) + o;
          },
          easeInOutCirc: function (i, o, u, c) {
            var d = u - o;
            return (i /= c / 2) < 1
              ? (-d / 2) * (Math.sqrt(1 - i * i) - 1) + o
              : (d / 2) * (Math.sqrt(1 - (i -= 2) * i) + 1) + o;
          },
          easeInElastic: function (i, o, u, c) {
            var d,
              f,
              p,
              g = u - o;
            return (
              (p = 1.70158),
              i === 0
                ? o
                : (i /= c) == 1
                  ? o + g
                  : ((f = 0) || (f = 0.3 * c),
                    (d = g) < Math.abs(g) ? ((d = g), (p = f / 4)) : (p = (f / (2 * Math.PI)) * Math.asin(g / d)),
                    -d * Math.pow(2, 10 * (i -= 1)) * Math.sin(((i * c - p) * (2 * Math.PI)) / f) + o)
            );
          },
          easeOutElastic: function (i, o, u, c) {
            var d,
              f,
              p,
              g = u - o;
            return (
              (p = 1.70158),
              i === 0
                ? o
                : (i /= c) == 1
                  ? o + g
                  : ((f = 0) || (f = 0.3 * c),
                    (d = g) < Math.abs(g) ? ((d = g), (p = f / 4)) : (p = (f / (2 * Math.PI)) * Math.asin(g / d)),
                    d * Math.pow(2, -10 * i) * Math.sin(((i * c - p) * (2 * Math.PI)) / f) + g + o)
            );
          },
          easeInOutElastic: function (i, o, u, c) {
            var d,
              f,
              p,
              g = u - o;
            return (
              (p = 1.70158),
              i === 0
                ? o
                : (i /= c / 2) == 2
                  ? o + g
                  : ((f = 0) || (f = c * 0.44999999999999996),
                    (d = g) < Math.abs(g) ? ((d = g), (p = f / 4)) : (p = (f / (2 * Math.PI)) * Math.asin(g / d)),
                    i < 1
                      ? d * Math.pow(2, 10 * (i -= 1)) * Math.sin(((i * c - p) * (2 * Math.PI)) / f) * -0.5 + o
                      : d * Math.pow(2, -10 * (i -= 1)) * Math.sin(((i * c - p) * (2 * Math.PI)) / f) * 0.5 + g + o)
            );
          },
          easeInBack: function (i, o, u, c, d) {
            return d === void 0 && (d = 1.70158), (u - o) * (i /= c) * i * ((d + 1) * i - d) + o;
          },
          easeOutBack: function (i, o, u, c, d) {
            return d === void 0 && (d = 1.70158), (u - o) * ((i = i / c - 1) * i * ((d + 1) * i + d) + 1) + o;
          },
          easeInOutBack: function (i, o, u, c, d) {
            var f = u - o;
            return (
              d === void 0 && (d = 1.70158),
              (i /= c / 2) < 1
                ? (f / 2) * (i * i * ((1 + (d *= 1.525)) * i - d)) + o
                : (f / 2) * ((i -= 2) * i * ((1 + (d *= 1.525)) * i + d) + 2) + o
            );
          },
          easeInBounce: function (i, o, u, c) {
            var d = u - o;
            return d - s.easeOutBounce(c - i, 0, d, c) + o;
          },
          easeOutBounce: function (i, o, u, c) {
            var d = u - o;
            return (i /= c) < 0.36363636363636365
              ? d * (7.5625 * i * i) + o
              : i < 0.7272727272727273
                ? d * (7.5625 * (i -= 0.5454545454545454) * i + 0.75) + o
                : i < 0.9090909090909091
                  ? d * (7.5625 * (i -= 0.8181818181818182) * i + 0.9375) + o
                  : d * (7.5625 * (i -= 0.9545454545454546) * i + 0.984375) + o;
          },
          easeInOutBounce: function (i, o, u, c) {
            var d = u - o;
            return i < c / 2
              ? 0.5 * s.easeInBounce(2 * i, 0, d, c) + o
              : 0.5 * s.easeOutBounce(2 * i - c, 0, d, c) + 0.5 * d + o;
          },
        };
        r.exports = s;
      },
      function (r, a, l) {
        r.exports = l(3);
      },
      function (r, a, l) {
        l.r(a),
          l.d(a, 'ReactConfetti', function () {
            return te;
          });
        var s,
          i,
          o = l(0),
          u = l.n(o),
          c = l(1),
          d = l.n(c);
        function f(A, D) {
          return A + Math.random() * (D - A);
        }
        function p(A, D) {
          for (var R = 0; R < D.length; R++) {
            var C = D[R];
            (C.enumerable = C.enumerable || !1),
              (C.configurable = !0),
              'value' in C && (C.writable = !0),
              Object.defineProperty(A, C.key, C);
          }
        }
        function g(A, D, R) {
          return (
            D in A
              ? Object.defineProperty(A, D, { value: R, enumerable: !0, configurable: !0, writable: !0 })
              : (A[D] = R),
            A
          );
        }
        (function (A) {
          (A[(A.Circle = 0)] = 'Circle'), (A[(A.Square = 1)] = 'Square'), (A[(A.Strip = 2)] = 'Strip');
        })(s || (s = {})),
          (function (A) {
            (A[(A.Positive = 1)] = 'Positive'), (A[(A.Negative = -1)] = 'Negative');
          })(i || (i = {}));
        var v = (function () {
          function A(C, $, H, X) {
            (function (qt, Zt) {
              if (!(qt instanceof Zt)) throw new TypeError('Cannot call a class as a function');
            })(this, A),
              g(this, 'context', void 0),
              g(this, 'radius', void 0),
              g(this, 'x', void 0),
              g(this, 'y', void 0),
              g(this, 'w', void 0),
              g(this, 'h', void 0),
              g(this, 'vx', void 0),
              g(this, 'vy', void 0),
              g(this, 'shape', void 0),
              g(this, 'angle', void 0),
              g(this, 'angularSpin', void 0),
              g(this, 'color', void 0),
              g(this, 'rotateY', void 0),
              g(this, 'rotationDirection', void 0),
              g(this, 'getOptions', void 0),
              (this.getOptions = $);
            var re,
              ie,
              se = this.getOptions(),
              de = se.colors,
              fe = se.initialVelocityX,
              Te = se.initialVelocityY;
            (this.context = C),
              (this.x = H),
              (this.y = X),
              (this.w = f(5, 20)),
              (this.h = f(5, 20)),
              (this.radius = f(5, 10)),
              (this.vx = typeof fe == 'number' ? f(-fe, fe) : f(fe.min, fe.max)),
              (this.vy = typeof Te == 'number' ? f(-Te, 0) : f(Te.min, Te.max)),
              (this.shape = ((re = 0), (ie = 2), Math.floor(re + Math.random() * (ie - re + 1)))),
              (this.angle = (f(0, 360) * Math.PI) / 180),
              (this.angularSpin = f(-0.2, 0.2)),
              (this.color = de[Math.floor(Math.random() * de.length)]),
              (this.rotateY = f(0, 1)),
              (this.rotationDirection = f(0, 1) ? i.Positive : i.Negative);
          }
          var D, R;
          return (
            (D = A),
            (R = [
              {
                key: 'update',
                value: function () {
                  var C = this.getOptions(),
                    $ = C.gravity,
                    H = C.wind,
                    X = C.friction,
                    re = C.opacity,
                    ie = C.drawShape;
                  (this.x += this.vx),
                    (this.y += this.vy),
                    (this.vy += $),
                    (this.vx += H),
                    (this.vx *= X),
                    (this.vy *= X),
                    this.rotateY >= 1 && this.rotationDirection === i.Positive
                      ? (this.rotationDirection = i.Negative)
                      : this.rotateY <= -1 &&
                        this.rotationDirection === i.Negative &&
                        (this.rotationDirection = i.Positive);
                  var se = 0.1 * this.rotationDirection;
                  if (
                    ((this.rotateY += se),
                    (this.angle += this.angularSpin),
                    this.context.save(),
                    this.context.translate(this.x, this.y),
                    this.context.rotate(this.angle),
                    this.context.scale(1, this.rotateY),
                    this.context.rotate(this.angle),
                    this.context.beginPath(),
                    (this.context.fillStyle = this.color),
                    (this.context.strokeStyle = this.color),
                    (this.context.globalAlpha = re),
                    (this.context.lineCap = 'round'),
                    (this.context.lineWidth = 2),
                    ie && typeof ie == 'function')
                  )
                    ie.call(this, this.context);
                  else
                    switch (this.shape) {
                      case s.Circle:
                        this.context.beginPath(),
                          this.context.arc(0, 0, this.radius, 0, 2 * Math.PI),
                          this.context.fill();
                        break;
                      case s.Square:
                        this.context.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
                        break;
                      case s.Strip:
                        this.context.fillRect(-this.w / 6, -this.h / 2, this.w / 3, this.h);
                    }
                  this.context.closePath(), this.context.restore();
                },
              },
            ]) && p(D.prototype, R),
            A
          );
        })();
        function k(A, D, R) {
          return (
            D in A
              ? Object.defineProperty(A, D, { value: R, enumerable: !0, configurable: !0, writable: !0 })
              : (A[D] = R),
            A
          );
        }
        var m = function A(D, R) {
          var C = this;
          (function (H, X) {
            if (!(H instanceof X)) throw new TypeError('Cannot call a class as a function');
          })(this, A),
            k(this, 'canvas', void 0),
            k(this, 'context', void 0),
            k(this, 'getOptions', void 0),
            k(this, 'x', 0),
            k(this, 'y', 0),
            k(this, 'w', 0),
            k(this, 'h', 0),
            k(this, 'lastNumberOfPieces', 0),
            k(this, 'tweenInitTime', Date.now()),
            k(this, 'particles', []),
            k(this, 'particlesGenerated', 0),
            k(this, 'removeParticleAt', function (H) {
              C.particles.splice(H, 1);
            }),
            k(this, 'getParticle', function () {
              var H = f(C.x, C.w + C.x),
                X = f(C.y, C.h + C.y);
              return new v(C.context, C.getOptions, H, X);
            }),
            k(this, 'animate', function () {
              var H = C.canvas,
                X = C.context,
                re = C.particlesGenerated,
                ie = C.lastNumberOfPieces,
                se = C.getOptions(),
                de = se.run,
                fe = se.recycle,
                Te = se.numberOfPieces,
                qt = se.debug,
                Zt = se.tweenFunction,
                ge = se.tweenDuration;
              if (!de) return !1;
              var rt = C.particles.length,
                xe = fe ? rt : re,
                Dt = Date.now();
              if (xe < Te) {
                ie !== Te && ((C.tweenInitTime = Dt), (C.lastNumberOfPieces = Te));
                for (
                  var He = C.tweenInitTime,
                    Ft = Zt(Dt - He > ge ? ge : Math.max(0, Dt - He), xe, Te, ge),
                    en = Math.round(Ft - xe),
                    it = 0;
                  it < en;
                  it++
                )
                  C.particles.push(C.getParticle());
                C.particlesGenerated += en;
              }
              return (
                qt &&
                  ((X.font = '12px sans-serif'),
                  (X.fillStyle = '#333'),
                  (X.textAlign = 'right'),
                  X.fillText('Particles: '.concat(rt), H.width - 10, H.height - 20)),
                C.particles.forEach(function (pt, In) {
                  pt.update(),
                    (pt.y > H.height || pt.y < -100 || pt.x > H.width + 100 || pt.x < -100) &&
                      (fe && xe <= Te ? (C.particles[In] = C.getParticle()) : C.removeParticleAt(In));
                }),
                rt > 0 || xe < Te
              );
            }),
            (this.canvas = D);
          var $ = this.canvas.getContext('2d');
          if (!$) throw new Error('Could not get canvas context');
          (this.context = $), (this.getOptions = R);
        };
        function h(A, D) {
          var R = Object.keys(A);
          if (Object.getOwnPropertySymbols) {
            var C = Object.getOwnPropertySymbols(A);
            D &&
              (C = C.filter(function ($) {
                return Object.getOwnPropertyDescriptor(A, $).enumerable;
              })),
              R.push.apply(R, C);
          }
          return R;
        }
        function y(A) {
          for (var D = 1; D < arguments.length; D++) {
            var R = arguments[D] != null ? arguments[D] : {};
            D % 2
              ? h(Object(R), !0).forEach(function (C) {
                  _(A, C, R[C]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(R))
                : h(Object(R)).forEach(function (C) {
                    Object.defineProperty(A, C, Object.getOwnPropertyDescriptor(R, C));
                  });
          }
          return A;
        }
        function w(A, D) {
          for (var R = 0; R < D.length; R++) {
            var C = D[R];
            (C.enumerable = C.enumerable || !1),
              (C.configurable = !0),
              'value' in C && (C.writable = !0),
              Object.defineProperty(A, C.key, C);
          }
        }
        function _(A, D, R) {
          return (
            D in A
              ? Object.defineProperty(A, D, { value: R, enumerable: !0, configurable: !0, writable: !0 })
              : (A[D] = R),
            A
          );
        }
        var S = {
            width: typeof window < 'u' ? window.innerWidth : 300,
            height: typeof window < 'u' ? window.innerHeight : 200,
            numberOfPieces: 200,
            friction: 0.99,
            wind: 0,
            gravity: 0.1,
            initialVelocityX: 4,
            initialVelocityY: 10,
            colors: [
              '#f44336',
              '#e91e63',
              '#9c27b0',
              '#673ab7',
              '#3f51b5',
              '#2196f3',
              '#03a9f4',
              '#00bcd4',
              '#009688',
              '#4CAF50',
              '#8BC34A',
              '#CDDC39',
              '#FFEB3B',
              '#FFC107',
              '#FF9800',
              '#FF5722',
              '#795548',
            ],
            opacity: 1,
            debug: !1,
            tweenFunction: d.a.easeInOutQuad,
            tweenDuration: 5e3,
            recycle: !0,
            run: !0,
          },
          E = (function () {
            function A(C, $) {
              var H = this;
              (function (re, ie) {
                if (!(re instanceof ie)) throw new TypeError('Cannot call a class as a function');
              })(this, A),
                _(this, 'canvas', void 0),
                _(this, 'context', void 0),
                _(this, '_options', void 0),
                _(this, 'generator', void 0),
                _(this, 'rafId', void 0),
                _(this, 'setOptionsWithDefaults', function (re) {
                  var ie = { confettiSource: { x: 0, y: 0, w: H.canvas.width, h: 0 } };
                  (H._options = y(y(y({}, ie), S), re)), Object.assign(H, re.confettiSource);
                }),
                _(this, 'update', function () {
                  var re = H.options,
                    ie = re.run,
                    se = re.onConfettiComplete,
                    de = H.canvas,
                    fe = H.context;
                  ie && ((fe.fillStyle = 'white'), fe.clearRect(0, 0, de.width, de.height)),
                    H.generator.animate()
                      ? (H.rafId = requestAnimationFrame(H.update))
                      : (se && typeof se == 'function' && H.generator.particlesGenerated > 0 && se.call(H, H),
                        (H._options.run = !1));
                }),
                _(this, 'reset', function () {
                  H.generator &&
                    H.generator.particlesGenerated > 0 &&
                    ((H.generator.particlesGenerated = 0),
                    (H.generator.particles = []),
                    (H.generator.lastNumberOfPieces = 0));
                }),
                _(this, 'stop', function () {
                  (H.options = { run: !1 }), H.rafId && (cancelAnimationFrame(H.rafId), (H.rafId = void 0));
                }),
                (this.canvas = C);
              var X = this.canvas.getContext('2d');
              if (!X) throw new Error('Could not get canvas context');
              (this.context = X),
                (this.generator = new m(this.canvas, function () {
                  return H.options;
                })),
                (this.options = $),
                this.update();
            }
            var D, R;
            return (
              (D = A),
              (R = [
                {
                  key: 'options',
                  get: function () {
                    return this._options;
                  },
                  set: function (C) {
                    var $ = this._options && this._options.run,
                      H = this._options && this._options.recycle;
                    this.setOptionsWithDefaults(C),
                      this.generator &&
                        (Object.assign(this.generator, this.options.confettiSource),
                        typeof C.recycle == 'boolean' &&
                          C.recycle &&
                          H === !1 &&
                          (this.generator.lastNumberOfPieces = this.generator.particles.length)),
                      typeof C.run == 'boolean' && C.run && $ === !1 && this.update();
                  },
                },
              ]) && w(D.prototype, R),
              A
            );
          })();
        function j(A) {
          return (
            (function (D) {
              if (Array.isArray(D)) return z(D);
            })(A) ||
            (function (D) {
              if (typeof Symbol < 'u' && Symbol.iterator in Object(D)) return Array.from(D);
            })(A) ||
            L(A) ||
            (function () {
              throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            })()
          );
        }
        function O(A) {
          return (O =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? function (D) {
                  return typeof D;
                }
              : function (D) {
                  return D && typeof Symbol == 'function' && D.constructor === Symbol && D !== Symbol.prototype
                    ? 'symbol'
                    : typeof D;
                })(A);
        }
        function b() {
          return (b =
            Object.assign ||
            function (A) {
              for (var D = 1; D < arguments.length; D++) {
                var R = arguments[D];
                for (var C in R) Object.prototype.hasOwnProperty.call(R, C) && (A[C] = R[C]);
              }
              return A;
            }).apply(this, arguments);
        }
        function P(A, D) {
          var R = Object.keys(A);
          if (Object.getOwnPropertySymbols) {
            var C = Object.getOwnPropertySymbols(A);
            D &&
              (C = C.filter(function ($) {
                return Object.getOwnPropertyDescriptor(A, $).enumerable;
              })),
              R.push.apply(R, C);
          }
          return R;
        }
        function x(A) {
          for (var D = 1; D < arguments.length; D++) {
            var R = arguments[D] != null ? arguments[D] : {};
            D % 2
              ? P(Object(R), !0).forEach(function (C) {
                  ne(A, C, R[C]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(R))
                : P(Object(R)).forEach(function (C) {
                    Object.defineProperty(A, C, Object.getOwnPropertyDescriptor(R, C));
                  });
          }
          return A;
        }
        function T(A, D) {
          return (
            (function (R) {
              if (Array.isArray(R)) return R;
            })(A) ||
            (function (R, C) {
              if (!(typeof Symbol > 'u' || !(Symbol.iterator in Object(R)))) {
                var $ = [],
                  H = !0,
                  X = !1,
                  re = void 0;
                try {
                  for (
                    var ie, se = R[Symbol.iterator]();
                    !(H = (ie = se.next()).done) && ($.push(ie.value), !C || $.length !== C);
                    H = !0
                  );
                } catch (de) {
                  (X = !0), (re = de);
                } finally {
                  try {
                    H || se.return == null || se.return();
                  } finally {
                    if (X) throw re;
                  }
                }
                return $;
              }
            })(A, D) ||
            L(A, D) ||
            (function () {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            })()
          );
        }
        function L(A, D) {
          if (A) {
            if (typeof A == 'string') return z(A, D);
            var R = Object.prototype.toString.call(A).slice(8, -1);
            return (
              R === 'Object' && A.constructor && (R = A.constructor.name),
              R === 'Map' || R === 'Set'
                ? Array.from(A)
                : R === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(R)
                  ? z(A, D)
                  : void 0
            );
          }
        }
        function z(A, D) {
          (D == null || D > A.length) && (D = A.length);
          for (var R = 0, C = new Array(D); R < D; R++) C[R] = A[R];
          return C;
        }
        function U(A, D) {
          if (!(A instanceof D)) throw new TypeError('Cannot call a class as a function');
        }
        function B(A, D) {
          for (var R = 0; R < D.length; R++) {
            var C = D[R];
            (C.enumerable = C.enumerable || !1),
              (C.configurable = !0),
              'value' in C && (C.writable = !0),
              Object.defineProperty(A, C.key, C);
          }
        }
        function I(A, D) {
          return (I =
            Object.setPrototypeOf ||
            function (R, C) {
              return (R.__proto__ = C), R;
            })(A, D);
        }
        function N(A) {
          var D = (function () {
            if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
            if (typeof Proxy == 'function') return !0;
            try {
              return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
            } catch {
              return !1;
            }
          })();
          return function () {
            var R,
              C = Y(A);
            if (D) {
              var $ = Y(this).constructor;
              R = Reflect.construct(C, arguments, $);
            } else R = C.apply(this, arguments);
            return M(this, R);
          };
        }
        function M(A, D) {
          return !D || (O(D) !== 'object' && typeof D != 'function') ? V(A) : D;
        }
        function V(A) {
          if (A === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return A;
        }
        function Y(A) {
          return (Y = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (D) {
                return D.__proto__ || Object.getPrototypeOf(D);
              })(A);
        }
        function ne(A, D, R) {
          return (
            D in A
              ? Object.defineProperty(A, D, { value: R, enumerable: !0, configurable: !0, writable: !0 })
              : (A[D] = R),
            A
          );
        }
        var ee = u.a.createRef(),
          J = (function (A) {
            (function (H, X) {
              if (typeof X != 'function' && X !== null)
                throw new TypeError('Super expression must either be null or a function');
              (H.prototype = Object.create(X && X.prototype, {
                constructor: { value: H, writable: !0, configurable: !0 },
              })),
                X && I(H, X);
            })($, A);
            var D,
              R,
              C = N($);
            function $(H) {
              var X;
              U(this, $);
              for (var re = arguments.length, ie = new Array(re > 1 ? re - 1 : 0), se = 1; se < re; se++)
                ie[se - 1] = arguments[se];
              return (
                ne(V((X = C.call.apply(C, [this, H].concat(ie)))), 'canvas', u.a.createRef()),
                ne(V(X), 'confetti', void 0),
                (X.canvas = H.canvasRef || ee),
                X
              );
            }
            return (
              (D = $),
              (R = [
                {
                  key: 'componentDidMount',
                  value: function () {
                    if (this.canvas.current) {
                      var H = q(this.props)[0];
                      this.confetti = new E(this.canvas.current, H);
                    }
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function () {
                    var H = q(this.props)[0];
                    this.confetti && (this.confetti.options = H);
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this.confetti && this.confetti.stop(), (this.confetti = void 0);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var H = T(q(this.props), 2),
                      X = H[0],
                      re = H[1],
                      ie = x(
                        {
                          zIndex: 2,
                          position: 'absolute',
                          pointerEvents: 'none',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                        },
                        re.style,
                      );
                    return u.a.createElement(
                      'canvas',
                      b({ width: X.width, height: X.height, ref: this.canvas }, re, { style: ie }),
                    );
                  },
                },
              ]) && B(D.prototype, R),
              $
            );
          })(o.Component);
        function q(A) {
          var D = {},
            R = {},
            C = [].concat(j(Object.keys(S)), ['confettiSource', 'drawShape', 'onConfettiComplete']),
            $ = ['canvasRef'];
          for (var H in A) {
            var X = A[H];
            C.includes(H) ? (D[H] = X) : $.includes(H) ? ($[H] = X) : (R[H] = X);
          }
          return [D, R, {}];
        }
        ne(J, 'defaultProps', x({}, S)), ne(J, 'displayName', 'ReactConfetti');
        var te = u.a.forwardRef(function (A, D) {
          return u.a.createElement(J, b({ canvasRef: D }, A));
        });
        a.default = te;
      },
    ]).default;
  });
})(Rp);
var uk = Rp.exports;
const ck = fu(uk);
var Cp = {},
  tu = function (e, t) {
    return (
      (tu =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (n, r) {
            n.__proto__ = r;
          }) ||
        function (n, r) {
          for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (n[a] = r[a]);
        }),
      tu(e, t)
    );
  };
function Ip(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
  tu(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
var Os = function () {
  return (
    (Os =
      Object.assign ||
      function (t) {
        for (var n, r = 1, a = arguments.length; r < a; r++) {
          n = arguments[r];
          for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (t[l] = n[l]);
        }
        return t;
      }),
    Os.apply(this, arguments)
  );
};
function xp(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function Ap(e, t, n, r) {
  var a = arguments.length,
    l = a < 3 ? t : r === null ? (r = Object.getOwnPropertyDescriptor(t, n)) : r,
    s;
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function') l = Reflect.decorate(e, t, n, r);
  else for (var i = e.length - 1; i >= 0; i--) (s = e[i]) && (l = (a < 3 ? s(l) : a > 3 ? s(t, n, l) : s(t, n)) || l);
  return a > 3 && l && Object.defineProperty(t, n, l), l;
}
function Mp(e, t) {
  return function (n, r) {
    t(n, r, e);
  };
}
function dk(e, t, n, r, a, l) {
  function s(m) {
    if (m !== void 0 && typeof m != 'function') throw new TypeError('Function expected');
    return m;
  }
  for (
    var i = r.kind,
      o = i === 'getter' ? 'get' : i === 'setter' ? 'set' : 'value',
      u = !t && e ? (r.static ? e : e.prototype) : null,
      c = t || (u ? Object.getOwnPropertyDescriptor(u, r.name) : {}),
      d,
      f = !1,
      p = n.length - 1;
    p >= 0;
    p--
  ) {
    var g = {};
    for (var v in r) g[v] = v === 'access' ? {} : r[v];
    for (var v in r.access) g.access[v] = r.access[v];
    g.addInitializer = function (m) {
      if (f) throw new TypeError('Cannot add initializers after decoration has completed');
      l.push(s(m || null));
    };
    var k = (0, n[p])(i === 'accessor' ? { get: c.get, set: c.set } : c[o], g);
    if (i === 'accessor') {
      if (k === void 0) continue;
      if (k === null || typeof k != 'object') throw new TypeError('Object expected');
      (d = s(k.get)) && (c.get = d), (d = s(k.set)) && (c.set = d), (d = s(k.init)) && a.unshift(d);
    } else (d = s(k)) && (i === 'field' ? a.unshift(d) : (c[o] = d));
  }
  u && Object.defineProperty(u, r.name, c), (f = !0);
}
function fk(e, t, n) {
  for (var r = arguments.length > 2, a = 0; a < t.length; a++) n = r ? t[a].call(e, n) : t[a].call(e);
  return r ? n : void 0;
}
function gk(e) {
  return typeof e == 'symbol' ? e : ''.concat(e);
}
function hk(e, t, n) {
  return (
    typeof t == 'symbol' && (t = t.description ? '['.concat(t.description, ']') : ''),
    Object.defineProperty(e, 'name', { configurable: !0, value: n ? ''.concat(n, ' ', t) : t })
  );
}
function Lp(e, t) {
  if (typeof Reflect == 'object' && typeof Reflect.metadata == 'function') return Reflect.metadata(e, t);
}
function Np(e, t, n, r) {
  function a(l) {
    return l instanceof n
      ? l
      : new n(function (s) {
          s(l);
        });
  }
  return new (n || (n = Promise))(function (l, s) {
    function i(c) {
      try {
        u(r.next(c));
      } catch (d) {
        s(d);
      }
    }
    function o(c) {
      try {
        u(r.throw(c));
      } catch (d) {
        s(d);
      }
    }
    function u(c) {
      c.done ? l(c.value) : a(c.value).then(i, o);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function Dp(e, t) {
  var n = {
      label: 0,
      sent: function () {
        if (l[0] & 1) throw l[1];
        return l[1];
      },
      trys: [],
      ops: [],
    },
    r,
    a,
    l,
    s;
  return (
    (s = { next: i(0), throw: i(1), return: i(2) }),
    typeof Symbol == 'function' &&
      (s[Symbol.iterator] = function () {
        return this;
      }),
    s
  );
  function i(u) {
    return function (c) {
      return o([u, c]);
    };
  }
  function o(u) {
    if (r) throw new TypeError('Generator is already executing.');
    for (; s && ((s = 0), u[0] && (n = 0)), n; )
      try {
        if (
          ((r = 1),
          a &&
            (l = u[0] & 2 ? a.return : u[0] ? a.throw || ((l = a.return) && l.call(a), 0) : a.next) &&
            !(l = l.call(a, u[1])).done)
        )
          return l;
        switch (((a = 0), l && (u = [u[0] & 2, l.value]), u[0])) {
          case 0:
          case 1:
            l = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, (a = u[1]), (u = [0]);
            continue;
          case 7:
            (u = n.ops.pop()), n.trys.pop();
            continue;
          default:
            if (((l = n.trys), !(l = l.length > 0 && l[l.length - 1]) && (u[0] === 6 || u[0] === 2))) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!l || (u[1] > l[0] && u[1] < l[3]))) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < l[1]) {
              (n.label = l[1]), (l = u);
              break;
            }
            if (l && n.label < l[2]) {
              (n.label = l[2]), n.ops.push(u);
              break;
            }
            l[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
      } catch (c) {
        (u = [6, c]), (a = 0);
      } finally {
        r = l = 0;
      }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
var oa = Object.create
  ? function (e, t, n, r) {
      r === void 0 && (r = n);
      var a = Object.getOwnPropertyDescriptor(t, n);
      (!a || ('get' in a ? !t.__esModule : a.writable || a.configurable)) &&
        (a = {
          enumerable: !0,
          get: function () {
            return t[n];
          },
        }),
        Object.defineProperty(e, r, a);
    }
  : function (e, t, n, r) {
      r === void 0 && (r = n), (e[r] = t[n]);
    };
function Fp(e, t) {
  for (var n in e) n !== 'default' && !Object.prototype.hasOwnProperty.call(t, n) && oa(t, e, n);
}
function Ps(e) {
  var t = typeof Symbol == 'function' && Symbol.iterator,
    n = t && e[t],
    r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == 'number')
    return {
      next: function () {
        return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
      },
    };
  throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
}
function pc(e, t) {
  var n = typeof Symbol == 'function' && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e),
    a,
    l = [],
    s;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = r.next()).done; ) l.push(a.value);
  } catch (i) {
    s = { error: i };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return l;
}
function Up() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(pc(arguments[t]));
  return e;
}
function zp() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
  for (var r = Array(e), a = 0, t = 0; t < n; t++)
    for (var l = arguments[t], s = 0, i = l.length; s < i; s++, a++) r[a] = l[s];
  return r;
}
function Hp(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, a = t.length, l; r < a; r++)
      (l || !(r in t)) && (l || (l = Array.prototype.slice.call(t, 0, r)), (l[r] = t[r]));
  return e.concat(l || Array.prototype.slice.call(t));
}
function Nr(e) {
  return this instanceof Nr ? ((this.v = e), this) : new Nr(e);
}
function $p(e, t, n) {
  if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
  var r = n.apply(e, t || []),
    a,
    l = [];
  return (
    (a = {}),
    s('next'),
    s('throw'),
    s('return'),
    (a[Symbol.asyncIterator] = function () {
      return this;
    }),
    a
  );
  function s(f) {
    r[f] &&
      (a[f] = function (p) {
        return new Promise(function (g, v) {
          l.push([f, p, g, v]) > 1 || i(f, p);
        });
      });
  }
  function i(f, p) {
    try {
      o(r[f](p));
    } catch (g) {
      d(l[0][3], g);
    }
  }
  function o(f) {
    f.value instanceof Nr ? Promise.resolve(f.value.v).then(u, c) : d(l[0][2], f);
  }
  function u(f) {
    i('next', f);
  }
  function c(f) {
    i('throw', f);
  }
  function d(f, p) {
    f(p), l.shift(), l.length && i(l[0][0], l[0][1]);
  }
}
function Vp(e) {
  var t, n;
  return (
    (t = {}),
    r('next'),
    r('throw', function (a) {
      throw a;
    }),
    r('return'),
    (t[Symbol.iterator] = function () {
      return this;
    }),
    t
  );
  function r(a, l) {
    t[a] = e[a]
      ? function (s) {
          return (n = !n) ? { value: Nr(e[a](s)), done: !1 } : l ? l(s) : s;
        }
      : l;
  }
}
function Wp(e) {
  if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof Ps == 'function' ? Ps(e) : e[Symbol.iterator]()),
      (n = {}),
      r('next'),
      r('throw'),
      r('return'),
      (n[Symbol.asyncIterator] = function () {
        return this;
      }),
      n);
  function r(l) {
    n[l] =
      e[l] &&
      function (s) {
        return new Promise(function (i, o) {
          (s = e[l](s)), a(i, o, s.done, s.value);
        });
      };
  }
  function a(l, s, i, o) {
    Promise.resolve(o).then(function (u) {
      l({ value: u, done: i });
    }, s);
  }
}
function Bp(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, 'raw', { value: t }) : (e.raw = t), e;
}
var pk = Object.create
  ? function (e, t) {
      Object.defineProperty(e, 'default', { enumerable: !0, value: t });
    }
  : function (e, t) {
      e.default = t;
    };
function Kp(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var n in e) n !== 'default' && Object.prototype.hasOwnProperty.call(e, n) && oa(t, e, n);
  return pk(t, e), t;
}
function Gp(e) {
  return e && e.__esModule ? e : { default: e };
}
function Yp(e, t, n, r) {
  if (n === 'a' && !r) throw new TypeError('Private accessor was defined without a getter');
  if (typeof t == 'function' ? e !== t || !r : !t.has(e))
    throw new TypeError('Cannot read private member from an object whose class did not declare it');
  return n === 'm' ? r : n === 'a' ? r.call(e) : r ? r.value : t.get(e);
}
function Qp(e, t, n, r, a) {
  if (r === 'm') throw new TypeError('Private method is not writable');
  if (r === 'a' && !a) throw new TypeError('Private accessor was defined without a setter');
  if (typeof t == 'function' ? e !== t || !a : !t.has(e))
    throw new TypeError('Cannot write private member to an object whose class did not declare it');
  return r === 'a' ? a.call(e, n) : a ? (a.value = n) : t.set(e, n), n;
}
function Xp(e, t) {
  if (t === null || (typeof t != 'object' && typeof t != 'function'))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == 'function' ? t === e : e.has(t);
}
function Jp(e, t, n) {
  if (t != null) {
    if (typeof t != 'object' && typeof t != 'function') throw new TypeError('Object expected.');
    var r;
    if (n) {
      if (!Symbol.asyncDispose) throw new TypeError('Symbol.asyncDispose is not defined.');
      r = t[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose) throw new TypeError('Symbol.dispose is not defined.');
      r = t[Symbol.dispose];
    }
    if (typeof r != 'function') throw new TypeError('Object not disposable.');
    e.stack.push({ value: t, dispose: r, async: n });
  } else n && e.stack.push({ async: !0 });
  return t;
}
var mk =
  typeof SuppressedError == 'function'
    ? SuppressedError
    : function (e, t, n) {
        var r = new Error(n);
        return (r.name = 'SuppressedError'), (r.error = e), (r.suppressed = t), r;
      };
function qp(e) {
  function t(r) {
    (e.error = e.hasError ? new mk(r, e.error, 'An error was suppressed during disposal.') : r), (e.hasError = !0);
  }
  function n() {
    for (; e.stack.length; ) {
      var r = e.stack.pop();
      try {
        var a = r.dispose && r.dispose.call(r.value);
        if (r.async)
          return Promise.resolve(a).then(n, function (l) {
            return t(l), n();
          });
      } catch (l) {
        t(l);
      }
    }
    if (e.hasError) throw e.error;
  }
  return n();
}
const vk = {
    __extends: Ip,
    __assign: Os,
    __rest: xp,
    __decorate: Ap,
    __param: Mp,
    __metadata: Lp,
    __awaiter: Np,
    __generator: Dp,
    __createBinding: oa,
    __exportStar: Fp,
    __values: Ps,
    __read: pc,
    __spread: Up,
    __spreadArrays: zp,
    __spreadArray: Hp,
    __await: Nr,
    __asyncGenerator: $p,
    __asyncDelegator: Vp,
    __asyncValues: Wp,
    __makeTemplateObject: Bp,
    __importStar: Kp,
    __importDefault: Gp,
    __classPrivateFieldGet: Yp,
    __classPrivateFieldSet: Qp,
    __classPrivateFieldIn: Xp,
    __addDisposableResource: Jp,
    __disposeResources: qp,
  },
  yk = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Jp,
        get __assign() {
          return Os;
        },
        __asyncDelegator: Vp,
        __asyncGenerator: $p,
        __asyncValues: Wp,
        __await: Nr,
        __awaiter: Np,
        __classPrivateFieldGet: Yp,
        __classPrivateFieldIn: Xp,
        __classPrivateFieldSet: Qp,
        __createBinding: oa,
        __decorate: Ap,
        __disposeResources: qp,
        __esDecorate: dk,
        __exportStar: Fp,
        __extends: Ip,
        __generator: Dp,
        __importDefault: Gp,
        __importStar: Kp,
        __makeTemplateObject: Bp,
        __metadata: Lp,
        __param: Mp,
        __propKey: gk,
        __read: pc,
        __rest: xp,
        __runInitializers: fk,
        __setFunctionName: hk,
        __spread: Up,
        __spreadArray: Hp,
        __spreadArrays: zp,
        __values: Ps,
        default: vk,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  mc = xm(yk);
var jo = {},
  Oo = {},
  Po = {},
  cf;
function wk() {
  if (cf) return Po;
  (cf = 1), Object.defineProperty(Po, '__esModule', { value: !0 });
  var e = W,
    t = function (n) {
      e.useEffect(n, []);
    };
  return (Po.default = t), Po;
}
var df;
function kk() {
  if (df) return Oo;
  (df = 1), Object.defineProperty(Oo, '__esModule', { value: !0 });
  var e = mc,
    t = W,
    n = e.__importDefault(wk()),
    r = function (a) {
      var l = t.useRef(a);
      (l.current = a),
        n.default(function () {
          return function () {
            return l.current();
          };
        });
    };
  return (Oo.default = r), Oo;
}
var ff;
function _k() {
  if (ff) return jo;
  (ff = 1), Object.defineProperty(jo, '__esModule', { value: !0 });
  var e = mc,
    t = W,
    n = e.__importDefault(kk()),
    r = function (a) {
      var l = t.useRef(0),
        s = t.useState(a),
        i = s[0],
        o = s[1],
        u = t.useCallback(function (c) {
          cancelAnimationFrame(l.current),
            (l.current = requestAnimationFrame(function () {
              o(c);
            }));
        }, []);
      return (
        n.default(function () {
          cancelAnimationFrame(l.current);
        }),
        [i, u]
      );
    };
  return (jo.default = r), jo;
}
var Ye = {},
  gf;
function Sk() {
  if (gf) return Ye;
  (gf = 1),
    Object.defineProperty(Ye, '__esModule', { value: !0 }),
    (Ye.isNavigator = Ye.isBrowser = Ye.off = Ye.on = Ye.noop = void 0);
  var e = function () {};
  Ye.noop = e;
  function t(r) {
    for (var a = [], l = 1; l < arguments.length; l++) a[l - 1] = arguments[l];
    r && r.addEventListener && r.addEventListener.apply(r, a);
  }
  Ye.on = t;
  function n(r) {
    for (var a = [], l = 1; l < arguments.length; l++) a[l - 1] = arguments[l];
    r && r.removeEventListener && r.removeEventListener.apply(r, a);
  }
  return (Ye.off = n), (Ye.isBrowser = typeof window < 'u'), (Ye.isNavigator = typeof navigator < 'u'), Ye;
}
Object.defineProperty(Cp, '__esModule', { value: !0 });
var Ek = mc,
  bk = W,
  jk = Ek.__importDefault(_k()),
  Xr = Sk(),
  Ok = function (e, t) {
    e === void 0 && (e = 1 / 0), t === void 0 && (t = 1 / 0);
    var n = jk.default({ width: Xr.isBrowser ? window.innerWidth : e, height: Xr.isBrowser ? window.innerHeight : t }),
      r = n[0],
      a = n[1];
    return (
      bk.useEffect(function () {
        if (Xr.isBrowser) {
          var l = function () {
            a({ width: window.innerWidth, height: window.innerHeight });
          };
          return (
            Xr.on(window, 'resize', l),
            function () {
              Xr.off(window, 'resize', l);
            }
          );
        }
      }, []),
      r
    );
  },
  Pk = (Cp.default = Ok),
  Tk = Object.defineProperty,
  Rk = (e, t) => {
    for (var n in t) Tk(e, n, { get: t[n], enumerable: !0 });
  },
  Pt = {};
Rk(Pt, {
  assign: () => xk,
  colors: () => bn,
  createStringInterpolator: () => Ec,
  skipAnimation: () => om,
  to: () => im,
  willAdvance: () => bc,
});
var vc = ro(),
  oe = e => no(e, vc),
  yc = ro();
oe.write = e => no(e, yc);
var sa = ro();
oe.onStart = e => no(e, sa);
var wc = ro();
oe.onFrame = e => no(e, wc);
var kc = ro();
oe.onFinish = e => no(e, kc);
var jr = [];
oe.setTimeout = (e, t) => {
  const n = oe.now() + t,
    r = () => {
      const l = jr.findIndex(s => s.cancel == r);
      ~l && jr.splice(l, 1), (gn -= ~l ? 1 : 0);
    },
    a = { time: n, handler: e, cancel: r };
  return jr.splice(Zp(n), 0, a), (gn += 1), em(), a;
};
var Zp = e => ~(~jr.findIndex(t => t.time > e) || ~jr.length);
oe.cancel = e => {
  sa.delete(e), wc.delete(e), kc.delete(e), vc.delete(e), yc.delete(e);
};
oe.sync = e => {
  (nu = !0), oe.batchedUpdates(e), (nu = !1);
};
oe.throttle = e => {
  let t;
  function n() {
    try {
      e(...t);
    } finally {
      t = null;
    }
  }
  function r(...a) {
    (t = a), oe.onStart(n);
  }
  return (
    (r.handler = e),
    (r.cancel = () => {
      sa.delete(n), (t = null);
    }),
    r
  );
};
var _c = typeof window < 'u' ? window.requestAnimationFrame : () => {};
oe.use = e => (_c = e);
oe.now = typeof performance < 'u' ? () => performance.now() : Date.now;
oe.batchedUpdates = e => e();
oe.catch = console.error;
oe.frameLoop = 'always';
oe.advance = () => {
  oe.frameLoop !== 'demand'
    ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
    : nm();
};
var fn = -1,
  gn = 0,
  nu = !1;
function no(e, t) {
  nu ? (t.delete(e), e(0)) : (t.add(e), em());
}
function em() {
  fn < 0 && ((fn = 0), oe.frameLoop !== 'demand' && _c(tm));
}
function Ck() {
  fn = -1;
}
function tm() {
  ~fn && (_c(tm), oe.batchedUpdates(nm));
}
function nm() {
  const e = fn;
  fn = oe.now();
  const t = Zp(fn);
  if ((t && (rm(jr.splice(0, t), n => n.handler()), (gn -= t)), !gn)) {
    Ck();
    return;
  }
  sa.flush(), vc.flush(e ? Math.min(64, fn - e) : 16.667), wc.flush(), yc.flush(), kc.flush();
}
function ro() {
  let e = new Set(),
    t = e;
  return {
    add(n) {
      (gn += t == e && !e.has(n) ? 1 : 0), e.add(n);
    },
    delete(n) {
      return (gn -= t == e && e.has(n) ? 1 : 0), e.delete(n);
    },
    flush(n) {
      t.size && ((e = new Set()), (gn -= t.size), rm(t, r => r(n) && e.add(r)), (gn += e.size), (t = e));
    },
  };
}
function rm(e, t) {
  e.forEach(n => {
    try {
      t(n);
    } catch (r) {
      oe.catch(r);
    }
  });
}
function ru() {}
var Ik = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
  Q = {
    arr: Array.isArray,
    obj: e => !!e && e.constructor.name === 'Object',
    fun: e => typeof e == 'function',
    str: e => typeof e == 'string',
    num: e => typeof e == 'number',
    und: e => e === void 0,
  };
function Ht(e, t) {
  if (Q.arr(e)) {
    if (!Q.arr(t) || e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
    return !0;
  }
  return e === t;
}
var le = (e, t) => e.forEach(t);
function Nt(e, t, n) {
  if (Q.arr(e)) {
    for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    return;
  }
  for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var qe = e => (Q.und(e) ? [] : Q.arr(e) ? e : [e]);
function yi(e, t) {
  if (e.size) {
    const n = Array.from(e);
    e.clear(), le(n, t);
  }
}
var ii = (e, ...t) => yi(e, n => n(...t)),
  Sc = () => typeof window > 'u' || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
  Ec,
  im,
  bn = null,
  om = !1,
  bc = ru,
  xk = e => {
    e.to && (im = e.to),
      e.now && (oe.now = e.now),
      e.colors !== void 0 && (bn = e.colors),
      e.skipAnimation != null && (om = e.skipAnimation),
      e.createStringInterpolator && (Ec = e.createStringInterpolator),
      e.requestAnimationFrame && oe.use(e.requestAnimationFrame),
      e.batchedUpdates && (oe.batchedUpdates = e.batchedUpdates),
      e.willAdvance && (bc = e.willAdvance),
      e.frameLoop && (oe.frameLoop = e.frameLoop);
  },
  wi = new Set(),
  ct = [],
  Xa = [],
  Ts = 0,
  aa = {
    get idle() {
      return !wi.size && !ct.length;
    },
    start(e) {
      Ts > e.priority ? (wi.add(e), oe.onStart(Ak)) : (sm(e), oe(iu));
    },
    advance: iu,
    sort(e) {
      if (Ts) oe.onFrame(() => aa.sort(e));
      else {
        const t = ct.indexOf(e);
        ~t && (ct.splice(t, 1), am(e));
      }
    },
    clear() {
      (ct = []), wi.clear();
    },
  };
function Ak() {
  wi.forEach(sm), wi.clear(), oe(iu);
}
function sm(e) {
  ct.includes(e) || am(e);
}
function am(e) {
  ct.splice(
    Mk(ct, t => t.priority > e.priority),
    0,
    e,
  );
}
function iu(e) {
  const t = Xa;
  for (let n = 0; n < ct.length; n++) {
    const r = ct[n];
    (Ts = r.priority), r.idle || (bc(r), r.advance(e), r.idle || t.push(r));
  }
  return (Ts = 0), (Xa = ct), (Xa.length = 0), (ct = t), ct.length > 0;
}
function Mk(e, t) {
  const n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
var Lk = (e, t, n) => Math.min(Math.max(n, e), t),
  Nk = {
    transparent: 0,
    aliceblue: 4042850303,
    antiquewhite: 4209760255,
    aqua: 16777215,
    aquamarine: 2147472639,
    azure: 4043309055,
    beige: 4126530815,
    bisque: 4293182719,
    black: 255,
    blanchedalmond: 4293643775,
    blue: 65535,
    blueviolet: 2318131967,
    brown: 2771004159,
    burlywood: 3736635391,
    burntsienna: 3934150143,
    cadetblue: 1604231423,
    chartreuse: 2147418367,
    chocolate: 3530104575,
    coral: 4286533887,
    cornflowerblue: 1687547391,
    cornsilk: 4294499583,
    crimson: 3692313855,
    cyan: 16777215,
    darkblue: 35839,
    darkcyan: 9145343,
    darkgoldenrod: 3095792639,
    darkgray: 2846468607,
    darkgreen: 6553855,
    darkgrey: 2846468607,
    darkkhaki: 3182914559,
    darkmagenta: 2332068863,
    darkolivegreen: 1433087999,
    darkorange: 4287365375,
    darkorchid: 2570243327,
    darkred: 2332033279,
    darksalmon: 3918953215,
    darkseagreen: 2411499519,
    darkslateblue: 1211993087,
    darkslategray: 793726975,
    darkslategrey: 793726975,
    darkturquoise: 13554175,
    darkviolet: 2483082239,
    deeppink: 4279538687,
    deepskyblue: 12582911,
    dimgray: 1768516095,
    dimgrey: 1768516095,
    dodgerblue: 512819199,
    firebrick: 2988581631,
    floralwhite: 4294635775,
    forestgreen: 579543807,
    fuchsia: 4278255615,
    gainsboro: 3705462015,
    ghostwhite: 4177068031,
    gold: 4292280575,
    goldenrod: 3668254975,
    gray: 2155905279,
    green: 8388863,
    greenyellow: 2919182335,
    grey: 2155905279,
    honeydew: 4043305215,
    hotpink: 4285117695,
    indianred: 3445382399,
    indigo: 1258324735,
    ivory: 4294963455,
    khaki: 4041641215,
    lavender: 3873897215,
    lavenderblush: 4293981695,
    lawngreen: 2096890111,
    lemonchiffon: 4294626815,
    lightblue: 2916673279,
    lightcoral: 4034953471,
    lightcyan: 3774873599,
    lightgoldenrodyellow: 4210742015,
    lightgray: 3553874943,
    lightgreen: 2431553791,
    lightgrey: 3553874943,
    lightpink: 4290167295,
    lightsalmon: 4288707327,
    lightseagreen: 548580095,
    lightskyblue: 2278488831,
    lightslategray: 2005441023,
    lightslategrey: 2005441023,
    lightsteelblue: 2965692159,
    lightyellow: 4294959359,
    lime: 16711935,
    limegreen: 852308735,
    linen: 4210091775,
    magenta: 4278255615,
    maroon: 2147483903,
    mediumaquamarine: 1724754687,
    mediumblue: 52735,
    mediumorchid: 3126187007,
    mediumpurple: 2473647103,
    mediumseagreen: 1018393087,
    mediumslateblue: 2070474495,
    mediumspringgreen: 16423679,
    mediumturquoise: 1221709055,
    mediumvioletred: 3340076543,
    midnightblue: 421097727,
    mintcream: 4127193855,
    mistyrose: 4293190143,
    moccasin: 4293178879,
    navajowhite: 4292783615,
    navy: 33023,
    oldlace: 4260751103,
    olive: 2155872511,
    olivedrab: 1804477439,
    orange: 4289003775,
    orangered: 4282712319,
    orchid: 3664828159,
    palegoldenrod: 4008225535,
    palegreen: 2566625535,
    paleturquoise: 2951671551,
    palevioletred: 3681588223,
    papayawhip: 4293907967,
    peachpuff: 4292524543,
    peru: 3448061951,
    pink: 4290825215,
    plum: 3718307327,
    powderblue: 2967529215,
    purple: 2147516671,
    rebeccapurple: 1714657791,
    red: 4278190335,
    rosybrown: 3163525119,
    royalblue: 1097458175,
    saddlebrown: 2336560127,
    salmon: 4202722047,
    sandybrown: 4104413439,
    seagreen: 780883967,
    seashell: 4294307583,
    sienna: 2689740287,
    silver: 3233857791,
    skyblue: 2278484991,
    slateblue: 1784335871,
    slategray: 1887473919,
    slategrey: 1887473919,
    snow: 4294638335,
    springgreen: 16744447,
    steelblue: 1182971135,
    tan: 3535047935,
    teal: 8421631,
    thistle: 3636451583,
    tomato: 4284696575,
    turquoise: 1088475391,
    violet: 4001558271,
    wheat: 4125012991,
    white: 4294967295,
    whitesmoke: 4126537215,
    yellow: 4294902015,
    yellowgreen: 2597139199,
  },
  Et = '[-+]?\\d*\\.?\\d+',
  Rs = Et + '%';
function la(...e) {
  return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
var Dk = new RegExp('rgb' + la(Et, Et, Et)),
  Fk = new RegExp('rgba' + la(Et, Et, Et, Et)),
  Uk = new RegExp('hsl' + la(Et, Rs, Rs)),
  zk = new RegExp('hsla' + la(Et, Rs, Rs, Et)),
  Hk = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  $k = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  Vk = /^#([0-9a-fA-F]{6})$/,
  Wk = /^#([0-9a-fA-F]{8})$/;
function Bk(e) {
  let t;
  return typeof e == 'number'
    ? e >>> 0 === e && e >= 0 && e <= 4294967295
      ? e
      : null
    : (t = Vk.exec(e))
      ? parseInt(t[1] + 'ff', 16) >>> 0
      : bn && bn[e] !== void 0
        ? bn[e]
        : (t = Dk.exec(e))
          ? ((nr(t[1]) << 24) | (nr(t[2]) << 16) | (nr(t[3]) << 8) | 255) >>> 0
          : (t = Fk.exec(e))
            ? ((nr(t[1]) << 24) | (nr(t[2]) << 16) | (nr(t[3]) << 8) | mf(t[4])) >>> 0
            : (t = Hk.exec(e))
              ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
              : (t = Wk.exec(e))
                ? parseInt(t[1], 16) >>> 0
                : (t = $k.exec(e))
                  ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                  : (t = Uk.exec(e))
                    ? (hf(pf(t[1]), To(t[2]), To(t[3])) | 255) >>> 0
                    : (t = zk.exec(e))
                      ? (hf(pf(t[1]), To(t[2]), To(t[3])) | mf(t[4])) >>> 0
                      : null;
}
function Ja(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function hf(e, t, n) {
  const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
    a = 2 * n - r,
    l = Ja(a, r, e + 1 / 3),
    s = Ja(a, r, e),
    i = Ja(a, r, e - 1 / 3);
  return (Math.round(l * 255) << 24) | (Math.round(s * 255) << 16) | (Math.round(i * 255) << 8);
}
function nr(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function pf(e) {
  return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function mf(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function To(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function vf(e) {
  let t = Bk(e);
  if (t === null) return e;
  t = t || 0;
  const n = (t & 4278190080) >>> 24,
    r = (t & 16711680) >>> 16,
    a = (t & 65280) >>> 8,
    l = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${a}, ${l})`;
}
var zi = (e, t, n) => {
  if (Q.fun(e)) return e;
  if (Q.arr(e)) return zi({ range: e, output: t, extrapolate: n });
  if (Q.str(e.output[0])) return Ec(e);
  const r = e,
    a = r.output,
    l = r.range || [0, 1],
    s = r.extrapolateLeft || r.extrapolate || 'extend',
    i = r.extrapolateRight || r.extrapolate || 'extend',
    o = r.easing || (u => u);
  return u => {
    const c = Gk(u, l);
    return Kk(u, l[c], l[c + 1], a[c], a[c + 1], o, s, i, r.map);
  };
};
function Kk(e, t, n, r, a, l, s, i, o) {
  let u = o ? o(e) : e;
  if (u < t) {
    if (s === 'identity') return u;
    s === 'clamp' && (u = t);
  }
  if (u > n) {
    if (i === 'identity') return u;
    i === 'clamp' && (u = n);
  }
  return r === a
    ? r
    : t === n
      ? e <= t
        ? r
        : a
      : (t === -1 / 0 ? (u = -u) : n === 1 / 0 ? (u = u - t) : (u = (u - t) / (n - t)),
        (u = l(u)),
        r === -1 / 0 ? (u = -u) : a === 1 / 0 ? (u = u + r) : (u = u * (a - r) + r),
        u);
}
function Gk(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
  return n - 1;
}
var Yk =
    (e, t = 'end') =>
    n => {
      n = t === 'end' ? Math.min(n, 0.999) : Math.max(n, 0.001);
      const r = n * e,
        a = t === 'end' ? Math.floor(r) : Math.ceil(r);
      return Lk(0, 1, a / e);
    },
  Cs = 1.70158,
  Ro = Cs * 1.525,
  yf = Cs + 1,
  wf = (2 * Math.PI) / 3,
  kf = (2 * Math.PI) / 4.5,
  Co = e =>
    e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375,
  Qk = {
    linear: e => e,
    easeInQuad: e => e * e,
    easeOutQuad: e => 1 - (1 - e) * (1 - e),
    easeInOutQuad: e => (e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2),
    easeInCubic: e => e * e * e,
    easeOutCubic: e => 1 - Math.pow(1 - e, 3),
    easeInOutCubic: e => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2),
    easeInQuart: e => e * e * e * e,
    easeOutQuart: e => 1 - Math.pow(1 - e, 4),
    easeInOutQuart: e => (e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2),
    easeInQuint: e => e * e * e * e * e,
    easeOutQuint: e => 1 - Math.pow(1 - e, 5),
    easeInOutQuint: e => (e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2),
    easeInSine: e => 1 - Math.cos((e * Math.PI) / 2),
    easeOutSine: e => Math.sin((e * Math.PI) / 2),
    easeInOutSine: e => -(Math.cos(Math.PI * e) - 1) / 2,
    easeInExpo: e => (e === 0 ? 0 : Math.pow(2, 10 * e - 10)),
    easeOutExpo: e => (e === 1 ? 1 : 1 - Math.pow(2, -10 * e)),
    easeInOutExpo: e =>
      e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2,
    easeInCirc: e => 1 - Math.sqrt(1 - Math.pow(e, 2)),
    easeOutCirc: e => Math.sqrt(1 - Math.pow(e - 1, 2)),
    easeInOutCirc: e =>
      e < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
    easeInBack: e => yf * e * e * e - Cs * e * e,
    easeOutBack: e => 1 + yf * Math.pow(e - 1, 3) + Cs * Math.pow(e - 1, 2),
    easeInOutBack: e =>
      e < 0.5
        ? (Math.pow(2 * e, 2) * ((Ro + 1) * 2 * e - Ro)) / 2
        : (Math.pow(2 * e - 2, 2) * ((Ro + 1) * (e * 2 - 2) + Ro) + 2) / 2,
    easeInElastic: e => (e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * wf)),
    easeOutElastic: e => (e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * wf) + 1),
    easeInOutElastic: e =>
      e === 0
        ? 0
        : e === 1
          ? 1
          : e < 0.5
            ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * kf)) / 2
            : (Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * kf)) / 2 + 1,
    easeInBounce: e => 1 - Co(1 - e),
    easeOutBounce: Co,
    easeInOutBounce: e => (e < 0.5 ? (1 - Co(1 - 2 * e)) / 2 : (1 + Co(2 * e - 1)) / 2),
    steps: Yk,
  },
  Hi = Symbol.for('FluidValue.get'),
  Dr = Symbol.for('FluidValue.observers'),
  ut = e => !!(e && e[Hi]),
  $e = e => (e && e[Hi] ? e[Hi]() : e),
  _f = e => e[Dr] || null;
function Xk(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function $i(e, t) {
  const n = e[Dr];
  n &&
    n.forEach(r => {
      Xk(r, t);
    });
}
var lm = class {
    constructor(e) {
      if (!e && !(e = this.get)) throw Error('Unknown getter');
      Jk(this, e);
    }
  },
  Jk = (e, t) => um(e, Hi, t);
function Hr(e, t) {
  if (e[Hi]) {
    let n = e[Dr];
    n || um(e, Dr, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function Vi(e, t) {
  const n = e[Dr];
  if (n && n.has(t)) {
    const r = n.size - 1;
    r ? n.delete(t) : (e[Dr] = null), e.observerRemoved && e.observerRemoved(r, t);
  }
}
var um = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
  Go = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
  qk = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
  Sf = new RegExp(`(${Go.source})(%|[a-z]+)`, 'i'),
  Zk = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
  ua = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
  cm = e => {
    const [t, n] = e_(e);
    if (!t || Sc()) return e;
    const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
    if (r) return r.trim();
    if (n && n.startsWith('--')) {
      const a = window.getComputedStyle(document.documentElement).getPropertyValue(n);
      return a || e;
    } else {
      if (n && ua.test(n)) return cm(n);
      if (n) return n;
    }
    return e;
  },
  e_ = e => {
    const t = ua.exec(e);
    if (!t) return [,];
    const [, n, r] = t;
    return [n, r];
  },
  qa,
  t_ = (e, t, n, r, a) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${a})`,
  dm = e => {
    qa || (qa = bn ? new RegExp(`(${Object.keys(bn).join('|')})(?!\\w)`, 'g') : /^\b$/);
    const t = e.output.map(l => $e(l).replace(ua, cm).replace(qk, vf).replace(qa, vf)),
      n = t.map(l => l.match(Go).map(Number)),
      a = n[0]
        .map((l, s) =>
          n.map(i => {
            if (!(s in i)) throw Error('The arity of each "output" value must be equal');
            return i[s];
          }),
        )
        .map(l => zi({ ...e, output: l }));
    return l => {
      var o;
      const s = !Sf.test(t[0]) && ((o = t.find(u => Sf.test(u))) == null ? void 0 : o.replace(Go, ''));
      let i = 0;
      return t[0].replace(Go, () => `${a[i++](l)}${s || ''}`).replace(Zk, t_);
    };
  },
  jc = 'react-spring: ',
  fm = e => {
    const t = e;
    let n = !1;
    if (typeof t != 'function') throw new TypeError(`${jc}once requires a function parameter`);
    return (...r) => {
      n || (t(...r), (n = !0));
    };
  },
  n_ = fm(console.warn);
function r_() {
  n_(`${jc}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var i_ = fm(console.warn);
function o_() {
  i_(
    `${jc}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
  );
}
function ca(e) {
  return Q.str(e) && (e[0] == '#' || /\d/.test(e) || (!Sc() && ua.test(e)) || e in (bn || {}));
}
var Oc = Sc() ? W.useEffect : W.useLayoutEffect,
  s_ = () => {
    const e = W.useRef(!1);
    return (
      Oc(
        () => (
          (e.current = !0),
          () => {
            e.current = !1;
          }
        ),
        [],
      ),
      e
    );
  };
function gm() {
  const e = W.useState()[1],
    t = s_();
  return () => {
    t.current && e(Math.random());
  };
}
function a_(e, t) {
  const [n] = W.useState(() => ({ inputs: t, result: e() })),
    r = W.useRef(),
    a = r.current;
  let l = a;
  return (
    l ? (t && l.inputs && l_(t, l.inputs)) || (l = { inputs: t, result: e() }) : (l = n),
    W.useEffect(() => {
      (r.current = l), a == n && (n.inputs = n.result = void 0);
    }, [l]),
    l.result
  );
}
function l_(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
var hm = e => W.useEffect(e, u_),
  u_ = [];
function Ef(e) {
  const t = W.useRef();
  return (
    W.useEffect(() => {
      t.current = e;
    }),
    t.current
  );
}
var Wi = Symbol.for('Animated:node'),
  c_ = e => !!e && e[Wi] === e,
  It = e => e && e[Wi],
  Pc = (e, t) => Ik(e, Wi, t),
  da = e => e && e[Wi] && e[Wi].getPayload(),
  pm = class {
    constructor() {
      Pc(this, this);
    }
    getPayload() {
      return this.payload || [];
    }
  },
  io = class extends pm {
    constructor(e) {
      super(),
        (this._value = e),
        (this.done = !0),
        (this.durationProgress = 0),
        Q.num(this._value) && (this.lastPosition = this._value);
    }
    static create(e) {
      return new io(e);
    }
    getPayload() {
      return [this];
    }
    getValue() {
      return this._value;
    }
    setValue(e, t) {
      return (
        Q.num(e) && ((this.lastPosition = e), t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
        this._value === e ? !1 : ((this._value = e), !0)
      );
    }
    reset() {
      const { done: e } = this;
      (this.done = !1),
        Q.num(this._value) &&
          ((this.elapsedTime = 0),
          (this.durationProgress = 0),
          (this.lastPosition = this._value),
          e && (this.lastVelocity = null),
          (this.v0 = null));
    }
  },
  Bi = class extends io {
    constructor(e) {
      super(0), (this._string = null), (this._toString = zi({ output: [e, e] }));
    }
    static create(e) {
      return new Bi(e);
    }
    getValue() {
      const e = this._string;
      return e ?? (this._string = this._toString(this._value));
    }
    setValue(e) {
      if (Q.str(e)) {
        if (e == this._string) return !1;
        (this._string = e), (this._value = 1);
      } else if (super.setValue(e)) this._string = null;
      else return !1;
      return !0;
    }
    reset(e) {
      e && (this._toString = zi({ output: [this.getValue(), e] })), (this._value = 0), super.reset();
    }
  },
  Is = { dependencies: null },
  fa = class extends pm {
    constructor(e) {
      super(), (this.source = e), this.setValue(e);
    }
    getValue(e) {
      const t = {};
      return (
        Nt(this.source, (n, r) => {
          c_(n) ? (t[r] = n.getValue(e)) : ut(n) ? (t[r] = $e(n)) : e || (t[r] = n);
        }),
        t
      );
    }
    setValue(e) {
      (this.source = e), (this.payload = this._makePayload(e));
    }
    reset() {
      this.payload && le(this.payload, e => e.reset());
    }
    _makePayload(e) {
      if (e) {
        const t = new Set();
        return Nt(e, this._addToPayload, t), Array.from(t);
      }
    }
    _addToPayload(e) {
      Is.dependencies && ut(e) && Is.dependencies.add(e);
      const t = da(e);
      t && le(t, n => this.add(n));
    }
  },
  mm = class extends fa {
    constructor(e) {
      super(e);
    }
    static create(e) {
      return new mm(e);
    }
    getValue() {
      return this.source.map(e => e.getValue());
    }
    setValue(e) {
      const t = this.getPayload();
      return e.length == t.length ? t.map((n, r) => n.setValue(e[r])).some(Boolean) : (super.setValue(e.map(d_)), !0);
    }
  };
function d_(e) {
  return (ca(e) ? Bi : io).create(e);
}
function ou(e) {
  const t = It(e);
  return t ? t.constructor : Q.arr(e) ? mm : ca(e) ? Bi : io;
}
var bf = (e, t) => {
    const n = !Q.fun(e) || (e.prototype && e.prototype.isReactComponent);
    return W.forwardRef((r, a) => {
      const l = W.useRef(null),
        s =
          n &&
          W.useCallback(
            g => {
              l.current = h_(a, g);
            },
            [a],
          ),
        [i, o] = g_(r, t),
        u = gm(),
        c = () => {
          const g = l.current;
          if (n && !g) return;
          (g ? t.applyAnimatedValues(g, i.getValue(!0)) : !1) === !1 && u();
        },
        d = new f_(c, o),
        f = W.useRef();
      Oc(
        () => (
          (f.current = d),
          le(o, g => Hr(g, d)),
          () => {
            f.current && (le(f.current.deps, g => Vi(g, f.current)), oe.cancel(f.current.update));
          }
        ),
      ),
        W.useEffect(c, []),
        hm(() => () => {
          const g = f.current;
          le(g.deps, v => Vi(v, g));
        });
      const p = t.getComponentProps(i.getValue());
      return W.createElement(e, { ...p, ref: s });
    });
  },
  f_ = class {
    constructor(e, t) {
      (this.update = e), (this.deps = t);
    }
    eventObserved(e) {
      e.type == 'change' && oe.write(this.update);
    }
  };
function g_(e, t) {
  const n = new Set();
  return (
    (Is.dependencies = n),
    e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }),
    (e = new fa(e)),
    (Is.dependencies = null),
    [e, n]
  );
}
function h_(e, t) {
  return e && (Q.fun(e) ? e(t) : (e.current = t)), t;
}
var jf = Symbol.for('AnimatedComponent'),
  p_ = (
    e,
    { applyAnimatedValues: t = () => !1, createAnimatedStyle: n = a => new fa(a), getComponentProps: r = a => a } = {},
  ) => {
    const a = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r },
      l = s => {
        const i = Of(s) || 'Anonymous';
        return (
          Q.str(s) ? (s = l[s] || (l[s] = bf(s, a))) : (s = s[jf] || (s[jf] = bf(s, a))),
          (s.displayName = `Animated(${i})`),
          s
        );
      };
    return (
      Nt(e, (s, i) => {
        Q.arr(e) && (i = Of(s)), (l[i] = l(s));
      }),
      { animated: l }
    );
  },
  Of = e => (Q.str(e) ? e : e && Q.str(e.displayName) ? e.displayName : (Q.fun(e) && e.name) || null);
function Ln(e, ...t) {
  return Q.fun(e) ? e(...t) : e;
}
var ki = (e, t) => e === !0 || !!(t && e && (Q.fun(e) ? e(t) : qe(e).includes(t))),
  vm = (e, t) => (Q.obj(e) ? t && e[t] : e),
  ym = (e, t) => (e.default === !0 ? e[t] : e.default ? e.default[t] : void 0),
  m_ = e => e,
  Tc = (e, t = m_) => {
    let n = v_;
    e.default && e.default !== !0 && ((e = e.default), (n = Object.keys(e)));
    const r = {};
    for (const a of n) {
      const l = t(e[a], a);
      Q.und(l) || (r[a] = l);
    }
    return r;
  },
  v_ = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'],
  y_ = {
    config: 1,
    from: 1,
    to: 1,
    ref: 1,
    loop: 1,
    reset: 1,
    pause: 1,
    cancel: 1,
    reverse: 1,
    immediate: 1,
    default: 1,
    delay: 1,
    onProps: 1,
    onStart: 1,
    onChange: 1,
    onPause: 1,
    onResume: 1,
    onRest: 1,
    onResolve: 1,
    items: 1,
    trail: 1,
    sort: 1,
    expires: 1,
    initial: 1,
    enter: 1,
    update: 1,
    leave: 1,
    children: 1,
    onDestroyed: 1,
    keys: 1,
    callId: 1,
    parentId: 1,
  };
function w_(e) {
  const t = {};
  let n = 0;
  if (
    (Nt(e, (r, a) => {
      y_[a] || ((t[a] = r), n++);
    }),
    n)
  )
    return t;
}
function wm(e) {
  const t = w_(e);
  if (t) {
    const n = { to: t };
    return Nt(e, (r, a) => a in t || (n[a] = r)), n;
  }
  return { ...e };
}
function Ki(e) {
  return (
    (e = $e(e)), Q.arr(e) ? e.map(Ki) : ca(e) ? Pt.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e
  );
}
function k_(e) {
  for (const t in e) return !0;
  return !1;
}
function su(e) {
  return Q.fun(e) || (Q.arr(e) && Q.obj(e[0]));
}
function __(e, t) {
  var n;
  (n = e.ref) == null || n.delete(e), t == null || t.delete(e);
}
function S_(e, t) {
  var n;
  t && e.ref !== t && ((n = e.ref) == null || n.delete(e), t.add(e), (e.ref = t));
}
var E_ = {
    default: { tension: 170, friction: 26 },
    gentle: { tension: 120, friction: 14 },
    wobbly: { tension: 180, friction: 12 },
    stiff: { tension: 210, friction: 20 },
    slow: { tension: 280, friction: 60 },
    molasses: { tension: 280, friction: 120 },
  },
  au = { ...E_.default, mass: 1, damping: 1, easing: Qk.linear, clamp: !1 },
  b_ = class {
    constructor() {
      (this.velocity = 0), Object.assign(this, au);
    }
  };
function j_(e, t, n) {
  n && ((n = { ...n }), Pf(n, t), (t = { ...n, ...t })), Pf(e, t), Object.assign(e, t);
  for (const s in au) e[s] == null && (e[s] = au[s]);
  let { frequency: r, damping: a } = e;
  const { mass: l } = e;
  return (
    Q.und(r) ||
      (r < 0.01 && (r = 0.01),
      a < 0 && (a = 0),
      (e.tension = Math.pow((2 * Math.PI) / r, 2) * l),
      (e.friction = (4 * Math.PI * a * l) / r)),
    e
  );
}
function Pf(e, t) {
  if (!Q.und(t.decay)) e.duration = void 0;
  else {
    const n = !Q.und(t.tension) || !Q.und(t.friction);
    (n || !Q.und(t.frequency) || !Q.und(t.damping) || !Q.und(t.mass)) && ((e.duration = void 0), (e.decay = void 0)),
      n && (e.frequency = void 0);
  }
}
var Tf = [],
  O_ = class {
    constructor() {
      (this.changed = !1),
        (this.values = Tf),
        (this.toValues = null),
        (this.fromValues = Tf),
        (this.config = new b_()),
        (this.immediate = !1);
    }
  };
function km(e, { key: t, props: n, defaultProps: r, state: a, actions: l }) {
  return new Promise((s, i) => {
    let o,
      u,
      c = ki(n.cancel ?? (r == null ? void 0 : r.cancel), t);
    if (c) p();
    else {
      Q.und(n.pause) || (a.paused = ki(n.pause, t));
      let g = r == null ? void 0 : r.pause;
      g !== !0 && (g = a.paused || ki(g, t)),
        (o = Ln(n.delay || 0, t)),
        g ? (a.resumeQueue.add(f), l.pause()) : (l.resume(), f());
    }
    function d() {
      a.resumeQueue.add(f), a.timeouts.delete(u), u.cancel(), (o = u.time - oe.now());
    }
    function f() {
      o > 0 && !Pt.skipAnimation
        ? ((a.delayed = !0), (u = oe.setTimeout(p, o)), a.pauseQueue.add(d), a.timeouts.add(u))
        : p();
    }
    function p() {
      a.delayed && (a.delayed = !1), a.pauseQueue.delete(d), a.timeouts.delete(u), e <= (a.cancelId || 0) && (c = !0);
      try {
        l.start({ ...n, callId: e, cancel: c }, s);
      } catch (g) {
        i(g);
      }
    }
  });
}
var Rc = (e, t) =>
    t.length == 1
      ? t[0]
      : t.some(n => n.cancelled)
        ? Or(e.get())
        : t.every(n => n.noop)
          ? _m(e.get())
          : _t(
              e.get(),
              t.every(n => n.finished),
            ),
  _m = e => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
  _t = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
  Or = e => ({ value: e, cancelled: !0, finished: !1 });
function Sm(e, t, n, r) {
  const { callId: a, parentId: l, onRest: s } = t,
    { asyncTo: i, promise: o } = n;
  return !l && e === i && !t.reset
    ? o
    : (n.promise = (async () => {
        (n.asyncId = a), (n.asyncTo = e);
        const u = Tc(t, (k, m) => (m === 'onRest' ? void 0 : k));
        let c, d;
        const f = new Promise((k, m) => ((c = k), (d = m))),
          p = k => {
            const m = (a <= (n.cancelId || 0) && Or(r)) || (a !== n.asyncId && _t(r, !1));
            if (m) throw ((k.result = m), d(k), k);
          },
          g = (k, m) => {
            const h = new Rf(),
              y = new Cf();
            return (async () => {
              if (Pt.skipAnimation) throw (Gi(n), (y.result = _t(r, !1)), d(y), y);
              p(h);
              const w = Q.obj(k) ? { ...k } : { ...m, to: k };
              (w.parentId = a),
                Nt(u, (S, E) => {
                  Q.und(w[E]) && (w[E] = S);
                });
              const _ = await r.start(w);
              return (
                p(h),
                n.paused &&
                  (await new Promise(S => {
                    n.resumeQueue.add(S);
                  })),
                _
              );
            })();
          };
        let v;
        if (Pt.skipAnimation) return Gi(n), _t(r, !1);
        try {
          let k;
          Q.arr(e)
            ? (k = (async m => {
                for (const h of m) await g(h);
              })(e))
            : (k = Promise.resolve(e(g, r.stop.bind(r)))),
            await Promise.all([k.then(c), f]),
            (v = _t(r.get(), !0, !1));
        } catch (k) {
          if (k instanceof Rf) v = k.result;
          else if (k instanceof Cf) v = k.result;
          else throw k;
        } finally {
          a == n.asyncId && ((n.asyncId = l), (n.asyncTo = l ? i : void 0), (n.promise = l ? o : void 0));
        }
        return (
          Q.fun(s) &&
            oe.batchedUpdates(() => {
              s(v, r, r.item);
            }),
          v
        );
      })());
}
function Gi(e, t) {
  yi(e.timeouts, n => n.cancel()),
    e.pauseQueue.clear(),
    e.resumeQueue.clear(),
    (e.asyncId = e.asyncTo = e.promise = void 0),
    t && (e.cancelId = t);
}
var Rf = class extends Error {
    constructor() {
      super(
        'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.',
      );
    }
  },
  Cf = class extends Error {
    constructor() {
      super('SkipAnimationSignal');
    }
  },
  lu = e => e instanceof Cc,
  P_ = 1,
  Cc = class extends lm {
    constructor() {
      super(...arguments), (this.id = P_++), (this._priority = 0);
    }
    get priority() {
      return this._priority;
    }
    set priority(e) {
      this._priority != e && ((this._priority = e), this._onPriorityChange(e));
    }
    get() {
      const e = It(this);
      return e && e.getValue();
    }
    to(...e) {
      return Pt.to(this, e);
    }
    interpolate(...e) {
      return r_(), Pt.to(this, e);
    }
    toJSON() {
      return this.get();
    }
    observerAdded(e) {
      e == 1 && this._attach();
    }
    observerRemoved(e) {
      e == 0 && this._detach();
    }
    _attach() {}
    _detach() {}
    _onChange(e, t = !1) {
      $i(this, { type: 'change', parent: this, value: e, idle: t });
    }
    _onPriorityChange(e) {
      this.idle || aa.sort(this), $i(this, { type: 'priority', parent: this, priority: e });
    }
  },
  Gn = Symbol.for('SpringPhase'),
  Em = 1,
  uu = 2,
  cu = 4,
  Za = e => (e[Gn] & Em) > 0,
  rn = e => (e[Gn] & uu) > 0,
  Jr = e => (e[Gn] & cu) > 0,
  If = (e, t) => (t ? (e[Gn] |= uu | Em) : (e[Gn] &= ~uu)),
  xf = (e, t) => (t ? (e[Gn] |= cu) : (e[Gn] &= ~cu)),
  T_ = class extends Cc {
    constructor(e, t) {
      if (
        (super(),
        (this.animation = new O_()),
        (this.defaultProps = {}),
        (this._state = { paused: !1, delayed: !1, pauseQueue: new Set(), resumeQueue: new Set(), timeouts: new Set() }),
        (this._pendingCalls = new Set()),
        (this._lastCallId = 0),
        (this._lastToId = 0),
        (this._memoizedDuration = 0),
        !Q.und(e) || !Q.und(t))
      ) {
        const n = Q.obj(e) ? { ...e } : { ...t, from: e };
        Q.und(n.default) && (n.default = !0), this.start(n);
      }
    }
    get idle() {
      return !(rn(this) || this._state.asyncTo) || Jr(this);
    }
    get goal() {
      return $e(this.animation.to);
    }
    get velocity() {
      const e = It(this);
      return e instanceof io ? e.lastVelocity || 0 : e.getPayload().map(t => t.lastVelocity || 0);
    }
    get hasAnimated() {
      return Za(this);
    }
    get isAnimating() {
      return rn(this);
    }
    get isPaused() {
      return Jr(this);
    }
    get isDelayed() {
      return this._state.delayed;
    }
    advance(e) {
      let t = !0,
        n = !1;
      const r = this.animation;
      let { toValues: a } = r;
      const { config: l } = r,
        s = da(r.to);
      !s && ut(r.to) && (a = qe($e(r.to))),
        r.values.forEach((u, c) => {
          if (u.done) return;
          const d = u.constructor == Bi ? 1 : s ? s[c].lastPosition : a[c];
          let f = r.immediate,
            p = d;
          if (!f) {
            if (((p = u.lastPosition), l.tension <= 0)) {
              u.done = !0;
              return;
            }
            let g = (u.elapsedTime += e);
            const v = r.fromValues[c],
              k = u.v0 != null ? u.v0 : (u.v0 = Q.arr(l.velocity) ? l.velocity[c] : l.velocity);
            let m;
            const h = l.precision || (v == d ? 0.005 : Math.min(1, Math.abs(d - v) * 0.001));
            if (Q.und(l.duration))
              if (l.decay) {
                const y = l.decay === !0 ? 0.998 : l.decay,
                  w = Math.exp(-(1 - y) * g);
                (p = v + (k / (1 - y)) * (1 - w)), (f = Math.abs(u.lastPosition - p) <= h), (m = k * w);
              } else {
                m = u.lastVelocity == null ? k : u.lastVelocity;
                const y = l.restVelocity || h / 10,
                  w = l.clamp ? 0 : l.bounce,
                  _ = !Q.und(w),
                  S = v == d ? u.v0 > 0 : v < d;
                let E,
                  j = !1;
                const O = 1,
                  b = Math.ceil(e / O);
                for (let P = 0; P < b && ((E = Math.abs(m) > y), !(!E && ((f = Math.abs(d - p) <= h), f))); ++P) {
                  _ && ((j = p == d || p > d == S), j && ((m = -m * w), (p = d)));
                  const x = -l.tension * 1e-6 * (p - d),
                    T = -l.friction * 0.001 * m,
                    L = (x + T) / l.mass;
                  (m = m + L * O), (p = p + m * O);
                }
              }
            else {
              let y = 1;
              l.duration > 0 &&
                (this._memoizedDuration !== l.duration &&
                  ((this._memoizedDuration = l.duration),
                  u.durationProgress > 0 &&
                    ((u.elapsedTime = l.duration * u.durationProgress), (g = u.elapsedTime += e))),
                (y = (l.progress || 0) + g / this._memoizedDuration),
                (y = y > 1 ? 1 : y < 0 ? 0 : y),
                (u.durationProgress = y)),
                (p = v + l.easing(y) * (d - v)),
                (m = (p - u.lastPosition) / e),
                (f = y == 1);
            }
            (u.lastVelocity = m), Number.isNaN(p) && (console.warn('Got NaN while animating:', this), (f = !0));
          }
          s && !s[c].done && (f = !1), f ? (u.done = !0) : (t = !1), u.setValue(p, l.round) && (n = !0);
        });
      const i = It(this),
        o = i.getValue();
      if (t) {
        const u = $e(r.to);
        (o !== u || n) && !l.decay ? (i.setValue(u), this._onChange(u)) : n && l.decay && this._onChange(o),
          this._stop();
      } else n && this._onChange(o);
    }
    set(e) {
      return (
        oe.batchedUpdates(() => {
          this._stop(), this._focus(e), this._set(e);
        }),
        this
      );
    }
    pause() {
      this._update({ pause: !0 });
    }
    resume() {
      this._update({ pause: !1 });
    }
    finish() {
      if (rn(this)) {
        const { to: e, config: t } = this.animation;
        oe.batchedUpdates(() => {
          this._onStart(), t.decay || this._set(e, !1), this._stop();
        });
      }
      return this;
    }
    update(e) {
      return (this.queue || (this.queue = [])).push(e), this;
    }
    start(e, t) {
      let n;
      return (
        Q.und(e) ? ((n = this.queue || []), (this.queue = [])) : (n = [Q.obj(e) ? e : { ...t, to: e }]),
        Promise.all(n.map(r => this._update(r))).then(r => Rc(this, r))
      );
    }
    stop(e) {
      const { to: t } = this.animation;
      return (
        this._focus(this.get()), Gi(this._state, e && this._lastCallId), oe.batchedUpdates(() => this._stop(t, e)), this
      );
    }
    reset() {
      this._update({ reset: !0 });
    }
    eventObserved(e) {
      e.type == 'change' ? this._start() : e.type == 'priority' && (this.priority = e.priority + 1);
    }
    _prepareNode(e) {
      const t = this.key || '';
      let { to: n, from: r } = e;
      (n = Q.obj(n) ? n[t] : n),
        (n == null || su(n)) && (n = void 0),
        (r = Q.obj(r) ? r[t] : r),
        r == null && (r = void 0);
      const a = { to: n, from: r };
      return (
        Za(this) || (e.reverse && ([n, r] = [r, n]), (r = $e(r)), Q.und(r) ? It(this) || this._set(n) : this._set(r)), a
      );
    }
    _update({ ...e }, t) {
      const { key: n, defaultProps: r } = this;
      e.default &&
        Object.assign(
          r,
          Tc(e, (s, i) => (/^on/.test(i) ? vm(s, n) : s)),
        ),
        Mf(this, e, 'onProps'),
        Zr(this, 'onProps', e, this);
      const a = this._prepareNode(e);
      if (Object.isFrozen(this))
        throw Error(
          'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?',
        );
      const l = this._state;
      return km(++this._lastCallId, {
        key: n,
        props: e,
        defaultProps: r,
        state: l,
        actions: {
          pause: () => {
            Jr(this) ||
              (xf(this, !0), ii(l.pauseQueue), Zr(this, 'onPause', _t(this, qr(this, this.animation.to)), this));
          },
          resume: () => {
            Jr(this) &&
              (xf(this, !1),
              rn(this) && this._resume(),
              ii(l.resumeQueue),
              Zr(this, 'onResume', _t(this, qr(this, this.animation.to)), this));
          },
          start: this._merge.bind(this, a),
        },
      }).then(s => {
        if (e.loop && s.finished && !(t && s.noop)) {
          const i = bm(e);
          if (i) return this._update(i, !0);
        }
        return s;
      });
    }
    _merge(e, t, n) {
      if (t.cancel) return this.stop(!0), n(Or(this));
      const r = !Q.und(e.to),
        a = !Q.und(e.from);
      if (r || a)
        if (t.callId > this._lastToId) this._lastToId = t.callId;
        else return n(Or(this));
      const { key: l, defaultProps: s, animation: i } = this,
        { to: o, from: u } = i;
      let { to: c = o, from: d = u } = e;
      a && !r && (!t.default || Q.und(c)) && (c = d), t.reverse && ([c, d] = [d, c]);
      const f = !Ht(d, u);
      f && (i.from = d), (d = $e(d));
      const p = !Ht(c, o);
      p && this._focus(c);
      const g = su(t.to),
        { config: v } = i,
        { decay: k, velocity: m } = v;
      (r || a) && (v.velocity = 0),
        t.config && !g && j_(v, Ln(t.config, l), t.config !== s.config ? Ln(s.config, l) : void 0);
      let h = It(this);
      if (!h || Q.und(c)) return n(_t(this, !0));
      const y = Q.und(t.reset) ? a && !t.default : !Q.und(d) && ki(t.reset, l),
        w = y ? d : this.get(),
        _ = Ki(c),
        S = Q.num(_) || Q.arr(_) || ca(_),
        E = !g && (!S || ki(s.immediate || t.immediate, l));
      if (p) {
        const P = ou(c);
        if (P !== h.constructor)
          if (E) h = this._set(_);
          else throw Error(`Cannot animate between ${h.constructor.name} and ${P.name}, as the "to" prop suggests`);
      }
      const j = h.constructor;
      let O = ut(c),
        b = !1;
      if (!O) {
        const P = y || (!Za(this) && f);
        (p || P) && ((b = Ht(Ki(w), _)), (O = !b)),
          ((!Ht(i.immediate, E) && !E) || !Ht(v.decay, k) || !Ht(v.velocity, m)) && (O = !0);
      }
      if (
        (b && rn(this) && (i.changed && !y ? (O = !0) : O || this._stop(o)),
        !g &&
          ((O || ut(o)) && ((i.values = h.getPayload()), (i.toValues = ut(c) ? null : j == Bi ? [1] : qe(_))),
          i.immediate != E && ((i.immediate = E), !E && !y && this._set(o)),
          O))
      ) {
        const { onRest: P } = i;
        le(C_, T => Mf(this, t, T));
        const x = _t(this, qr(this, o));
        ii(this._pendingCalls, x),
          this._pendingCalls.add(n),
          i.changed &&
            oe.batchedUpdates(() => {
              var T;
              (i.changed = !y),
                P == null || P(x, this),
                y ? Ln(s.onRest, x) : (T = i.onStart) == null || T.call(i, x, this);
            });
      }
      y && this._set(w),
        g
          ? n(Sm(t.to, t, this._state, this))
          : O
            ? this._start()
            : rn(this) && !p
              ? this._pendingCalls.add(n)
              : n(_m(w));
    }
    _focus(e) {
      const t = this.animation;
      e !== t.to && (_f(this) && this._detach(), (t.to = e), _f(this) && this._attach());
    }
    _attach() {
      let e = 0;
      const { to: t } = this.animation;
      ut(t) && (Hr(t, this), lu(t) && (e = t.priority + 1)), (this.priority = e);
    }
    _detach() {
      const { to: e } = this.animation;
      ut(e) && Vi(e, this);
    }
    _set(e, t = !0) {
      const n = $e(e);
      if (!Q.und(n)) {
        const r = It(this);
        if (!r || !Ht(n, r.getValue())) {
          const a = ou(n);
          !r || r.constructor != a ? Pc(this, a.create(n)) : r.setValue(n),
            r &&
              oe.batchedUpdates(() => {
                this._onChange(n, t);
              });
        }
      }
      return It(this);
    }
    _onStart() {
      const e = this.animation;
      e.changed || ((e.changed = !0), Zr(this, 'onStart', _t(this, qr(this, e.to)), this));
    }
    _onChange(e, t) {
      t || (this._onStart(), Ln(this.animation.onChange, e, this)),
        Ln(this.defaultProps.onChange, e, this),
        super._onChange(e, t);
    }
    _start() {
      const e = this.animation;
      It(this).reset($e(e.to)),
        e.immediate || (e.fromValues = e.values.map(t => t.lastPosition)),
        rn(this) || (If(this, !0), Jr(this) || this._resume());
    }
    _resume() {
      Pt.skipAnimation ? this.finish() : aa.start(this);
    }
    _stop(e, t) {
      if (rn(this)) {
        If(this, !1);
        const n = this.animation;
        le(n.values, a => {
          a.done = !0;
        }),
          n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
          $i(this, { type: 'idle', parent: this });
        const r = t ? Or(this.get()) : _t(this.get(), qr(this, e ?? n.to));
        ii(this._pendingCalls, r), n.changed && ((n.changed = !1), Zr(this, 'onRest', r, this));
      }
    }
  };
function qr(e, t) {
  const n = Ki(t),
    r = Ki(e.get());
  return Ht(r, n);
}
function bm(e, t = e.loop, n = e.to) {
  const r = Ln(t);
  if (r) {
    const a = r !== !0 && wm(r),
      l = (a || e).reverse,
      s = !a || a.reset;
    return Yi({
      ...e,
      loop: t,
      default: !1,
      pause: void 0,
      to: !l || su(n) ? n : void 0,
      from: s ? e.from : void 0,
      reset: s,
      ...a,
    });
  }
}
function Yi(e) {
  const { to: t, from: n } = (e = wm(e)),
    r = new Set();
  return Q.obj(t) && Af(t, r), Q.obj(n) && Af(n, r), (e.keys = r.size ? Array.from(r) : null), e;
}
function R_(e) {
  const t = Yi(e);
  return Q.und(t.default) && (t.default = Tc(t)), t;
}
function Af(e, t) {
  Nt(e, (n, r) => n != null && t.add(r));
}
var C_ = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];
function Mf(e, t, n) {
  e.animation[n] = t[n] !== ym(t, n) ? vm(t[n], e.key) : void 0;
}
function Zr(e, t, ...n) {
  var r, a, l, s;
  (a = (r = e.animation)[t]) == null || a.call(r, ...n), (s = (l = e.defaultProps)[t]) == null || s.call(l, ...n);
}
var I_ = ['onStart', 'onChange', 'onRest'],
  x_ = 1,
  A_ = class {
    constructor(e, t) {
      (this.id = x_++),
        (this.springs = {}),
        (this.queue = []),
        (this._lastAsyncId = 0),
        (this._active = new Set()),
        (this._changed = new Set()),
        (this._started = !1),
        (this._state = { paused: !1, pauseQueue: new Set(), resumeQueue: new Set(), timeouts: new Set() }),
        (this._events = { onStart: new Map(), onChange: new Map(), onRest: new Map() }),
        (this._onFrame = this._onFrame.bind(this)),
        t && (this._flush = t),
        e && this.start({ default: !0, ...e });
    }
    get idle() {
      return !this._state.asyncTo && Object.values(this.springs).every(e => e.idle && !e.isDelayed && !e.isPaused);
    }
    get item() {
      return this._item;
    }
    set item(e) {
      this._item = e;
    }
    get() {
      const e = {};
      return this.each((t, n) => (e[n] = t.get())), e;
    }
    set(e) {
      for (const t in e) {
        const n = e[t];
        Q.und(n) || this.springs[t].set(n);
      }
    }
    update(e) {
      return e && this.queue.push(Yi(e)), this;
    }
    start(e) {
      let { queue: t } = this;
      return (
        e ? (t = qe(e).map(Yi)) : (this.queue = []), this._flush ? this._flush(this, t) : (Rm(this, t), du(this, t))
      );
    }
    stop(e, t) {
      if ((e !== !!e && (t = e), t)) {
        const n = this.springs;
        le(qe(t), r => n[r].stop(!!e));
      } else Gi(this._state, this._lastAsyncId), this.each(n => n.stop(!!e));
      return this;
    }
    pause(e) {
      if (Q.und(e)) this.start({ pause: !0 });
      else {
        const t = this.springs;
        le(qe(e), n => t[n].pause());
      }
      return this;
    }
    resume(e) {
      if (Q.und(e)) this.start({ pause: !1 });
      else {
        const t = this.springs;
        le(qe(e), n => t[n].resume());
      }
      return this;
    }
    each(e) {
      Nt(this.springs, e);
    }
    _onFrame() {
      const { onStart: e, onChange: t, onRest: n } = this._events,
        r = this._active.size > 0,
        a = this._changed.size > 0;
      ((r && !this._started) || (a && !this._started)) &&
        ((this._started = !0),
        yi(e, ([i, o]) => {
          (o.value = this.get()), i(o, this, this._item);
        }));
      const l = !r && this._started,
        s = a || (l && n.size) ? this.get() : null;
      a &&
        t.size &&
        yi(t, ([i, o]) => {
          (o.value = s), i(o, this, this._item);
        }),
        l &&
          ((this._started = !1),
          yi(n, ([i, o]) => {
            (o.value = s), i(o, this, this._item);
          }));
    }
    eventObserved(e) {
      if (e.type == 'change') this._changed.add(e.parent), e.idle || this._active.add(e.parent);
      else if (e.type == 'idle') this._active.delete(e.parent);
      else return;
      oe.onFrame(this._onFrame);
    }
  };
function du(e, t) {
  return Promise.all(t.map(n => jm(e, n))).then(n => Rc(e, n));
}
async function jm(e, t, n) {
  const { keys: r, to: a, from: l, loop: s, onRest: i, onResolve: o } = t,
    u = Q.obj(t.default) && t.default;
  s && (t.loop = !1), a === !1 && (t.to = null), l === !1 && (t.from = null);
  const c = Q.arr(a) || Q.fun(a) ? a : void 0;
  c
    ? ((t.to = void 0), (t.onRest = void 0), u && (u.onRest = void 0))
    : le(I_, v => {
        const k = t[v];
        if (Q.fun(k)) {
          const m = e._events[v];
          (t[v] = ({ finished: h, cancelled: y }) => {
            const w = m.get(k);
            w
              ? (h || (w.finished = !1), y && (w.cancelled = !0))
              : m.set(k, { value: null, finished: h || !1, cancelled: y || !1 });
          }),
            u && (u[v] = t[v]);
        }
      });
  const d = e._state;
  t.pause === !d.paused
    ? ((d.paused = t.pause), ii(t.pause ? d.pauseQueue : d.resumeQueue))
    : d.paused && (t.pause = !0);
  const f = (r || Object.keys(e.springs)).map(v => e.springs[v].start(t)),
    p = t.cancel === !0 || ym(t, 'cancel') === !0;
  (c || (p && d.asyncId)) &&
    f.push(
      km(++e._lastAsyncId, {
        props: t,
        state: d,
        actions: {
          pause: ru,
          resume: ru,
          start(v, k) {
            p ? (Gi(d, e._lastAsyncId), k(Or(e))) : ((v.onRest = i), k(Sm(c, v, d, e)));
          },
        },
      }),
    ),
    d.paused &&
      (await new Promise(v => {
        d.resumeQueue.add(v);
      }));
  const g = Rc(e, await Promise.all(f));
  if (s && g.finished && !(n && g.noop)) {
    const v = bm(t, s, a);
    if (v) return Rm(e, [v]), jm(e, v, !0);
  }
  return o && oe.batchedUpdates(() => o(g, e, e.item)), g;
}
function Lf(e, t) {
  const n = { ...e.springs };
  return (
    t &&
      le(qe(t), r => {
        Q.und(r.keys) && (r = Yi(r)), Q.obj(r.to) || (r = { ...r, to: void 0 }), Tm(n, r, a => Pm(a));
      }),
    Om(e, n),
    n
  );
}
function Om(e, t) {
  Nt(t, (n, r) => {
    e.springs[r] || ((e.springs[r] = n), Hr(n, e));
  });
}
function Pm(e, t) {
  const n = new T_();
  return (n.key = e), t && Hr(n, t), n;
}
function Tm(e, t, n) {
  t.keys &&
    le(t.keys, r => {
      (e[r] || (e[r] = n(r)))._prepareNode(t);
    });
}
function Rm(e, t) {
  le(t, n => {
    Tm(e.springs, n, r => Pm(r, e));
  });
}
var ga = ({ children: e, ...t }) => {
    const n = W.useContext(xs),
      r = t.pause || !!n.pause,
      a = t.immediate || !!n.immediate;
    t = a_(() => ({ pause: r, immediate: a }), [r, a]);
    const { Provider: l } = xs;
    return W.createElement(l, { value: t }, e);
  },
  xs = M_(ga, {});
ga.Provider = xs.Provider;
ga.Consumer = xs.Consumer;
function M_(e, t) {
  return Object.assign(e, W.createContext(t)), (e.Provider._context = e), (e.Consumer._context = e), e;
}
var L_ = () => {
  const e = [],
    t = function (r) {
      o_();
      const a = [];
      return (
        le(e, (l, s) => {
          if (Q.und(r)) a.push(l.start());
          else {
            const i = n(r, l, s);
            i && a.push(l.start(i));
          }
        }),
        a
      );
    };
  (t.current = e),
    (t.add = function (r) {
      e.includes(r) || e.push(r);
    }),
    (t.delete = function (r) {
      const a = e.indexOf(r);
      ~a && e.splice(a, 1);
    }),
    (t.pause = function () {
      return le(e, r => r.pause(...arguments)), this;
    }),
    (t.resume = function () {
      return le(e, r => r.resume(...arguments)), this;
    }),
    (t.set = function (r) {
      le(e, (a, l) => {
        const s = Q.fun(r) ? r(l, a) : r;
        s && a.set(s);
      });
    }),
    (t.start = function (r) {
      const a = [];
      return (
        le(e, (l, s) => {
          if (Q.und(r)) a.push(l.start());
          else {
            const i = this._getProps(r, l, s);
            i && a.push(l.start(i));
          }
        }),
        a
      );
    }),
    (t.stop = function () {
      return le(e, r => r.stop(...arguments)), this;
    }),
    (t.update = function (r) {
      return le(e, (a, l) => a.update(this._getProps(r, a, l))), this;
    });
  const n = function (r, a, l) {
    return Q.fun(r) ? r(l, a) : r;
  };
  return (t._getProps = n), t;
};
function N_(e, t, n) {
  const r = Q.fun(t) && t;
  r && !n && (n = []);
  const a = W.useMemo(() => (r || arguments.length == 3 ? L_() : void 0), []),
    l = W.useRef(0),
    s = gm(),
    i = W.useMemo(
      () => ({
        ctrls: [],
        queue: [],
        flush(m, h) {
          const y = Lf(m, h);
          return l.current > 0 && !i.queue.length && !Object.keys(y).some(_ => !m.springs[_])
            ? du(m, h)
            : new Promise(_ => {
                Om(m, y),
                  i.queue.push(() => {
                    _(du(m, h));
                  }),
                  s();
              });
        },
      }),
      [],
    ),
    o = W.useRef([...i.ctrls]),
    u = [],
    c = Ef(e) || 0;
  W.useMemo(() => {
    le(o.current.slice(e, c), m => {
      __(m, a), m.stop(!0);
    }),
      (o.current.length = e),
      d(c, e);
  }, [e]),
    W.useMemo(() => {
      d(0, Math.min(c, e));
    }, n);
  function d(m, h) {
    for (let y = m; y < h; y++) {
      const w = o.current[y] || (o.current[y] = new A_(null, i.flush)),
        _ = r ? r(y, w) : t[y];
      _ && (u[y] = R_(_));
    }
  }
  const f = o.current.map((m, h) => Lf(m, u[h])),
    p = W.useContext(ga),
    g = Ef(p),
    v = p !== g && k_(p);
  Oc(() => {
    l.current++, (i.ctrls = o.current);
    const { queue: m } = i;
    m.length && ((i.queue = []), le(m, h => h())),
      le(o.current, (h, y) => {
        a == null || a.add(h), v && h.start({ default: p });
        const w = u[y];
        w && (S_(h, w.ref), h.ref ? h.queue.push(w) : h.start(w));
      });
  }),
    hm(() => () => {
      le(i.ctrls, m => m.stop(!0));
    });
  const k = f.map(m => ({ ...m }));
  return a ? [k, a] : k;
}
function Yo(e, t) {
  const n = Q.fun(e),
    [[r], a] = N_(1, n ? e : [e], n ? t || [] : t);
  return n || arguments.length == 2 ? [r, a] : r;
}
var D_ = class extends Cc {
  constructor(e, t) {
    super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = zi(...t));
    const n = this._get(),
      r = ou(n);
    Pc(this, r.create(n));
  }
  advance(e) {
    const t = this._get(),
      n = this.get();
    Ht(t, n) || (It(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Nf(this._active) && el(this);
  }
  _get() {
    const e = Q.arr(this.source) ? this.source.map($e) : qe($e(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle &&
      !Nf(this._active) &&
      ((this.idle = !1),
      le(da(this), e => {
        e.done = !1;
      }),
      Pt.skipAnimation ? (oe.batchedUpdates(() => this.advance()), el(this)) : aa.start(this));
  }
  _attach() {
    let e = 1;
    le(qe(this.source), t => {
      ut(t) && Hr(t, this), lu(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1)));
    }),
      (this.priority = e),
      this._start();
  }
  _detach() {
    le(qe(this.source), e => {
      ut(e) && Vi(e, this);
    }),
      this._active.clear(),
      el(this);
  }
  eventObserved(e) {
    e.type == 'change'
      ? e.idle
        ? this.advance()
        : (this._active.add(e.parent), this._start())
      : e.type == 'idle'
        ? this._active.delete(e.parent)
        : e.type == 'priority' &&
          (this.priority = qe(this.source).reduce((t, n) => Math.max(t, (lu(n) ? n.priority : 0) + 1), 0));
  }
};
function F_(e) {
  return e.idle !== !1;
}
function Nf(e) {
  return !e.size || Array.from(e).every(F_);
}
function el(e) {
  e.idle ||
    ((e.idle = !0),
    le(da(e), t => {
      t.done = !0;
    }),
    $i(e, { type: 'idle', parent: e }));
}
Pt.assign({ createStringInterpolator: dm, to: (e, t) => new D_(e, t) });
var Cm = /^--/;
function U_(e, t) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : typeof t == 'number' && t !== 0 && !Cm.test(e) && !(_i.hasOwnProperty(e) && _i[e])
      ? t + 'px'
      : ('' + t).trim();
}
var Df = {};
function z_(e, t) {
  if (!e.nodeType || !e.setAttribute) return !1;
  const n = e.nodeName === 'filter' || (e.parentNode && e.parentNode.nodeName === 'filter'),
    { style: r, children: a, scrollTop: l, scrollLeft: s, viewBox: i, ...o } = t,
    u = Object.values(o),
    c = Object.keys(o).map(d =>
      n || e.hasAttribute(d) ? d : Df[d] || (Df[d] = d.replace(/([A-Z])/g, f => '-' + f.toLowerCase())),
    );
  a !== void 0 && (e.textContent = a);
  for (const d in r)
    if (r.hasOwnProperty(d)) {
      const f = U_(d, r[d]);
      Cm.test(d) ? e.style.setProperty(d, f) : (e.style[d] = f);
    }
  c.forEach((d, f) => {
    e.setAttribute(d, u[f]);
  }),
    l !== void 0 && (e.scrollTop = l),
    s !== void 0 && (e.scrollLeft = s),
    i !== void 0 && e.setAttribute('viewBox', i);
}
var _i = {
    animationIterationCount: !0,
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
  H_ = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1),
  $_ = ['Webkit', 'Ms', 'Moz', 'O'];
_i = Object.keys(_i).reduce((e, t) => ($_.forEach(n => (e[H_(n, t)] = e[t])), e), _i);
var V_ = /^(matrix|translate|scale|rotate|skew)/,
  W_ = /^(translate)/,
  B_ = /^(rotate|skew)/,
  tl = (e, t) => (Q.num(e) && e !== 0 ? e + t : e),
  Qo = (e, t) => (Q.arr(e) ? e.every(n => Qo(n, t)) : Q.num(e) ? e === t : parseFloat(e) === t),
  K_ = class extends fa {
    constructor({ x: e, y: t, z: n, ...r }) {
      const a = [],
        l = [];
      (e || t || n) &&
        (a.push([e || 0, t || 0, n || 0]),
        l.push(s => [`translate3d(${s.map(i => tl(i, 'px')).join(',')})`, Qo(s, 0)])),
        Nt(r, (s, i) => {
          if (i === 'transform') a.push([s || '']), l.push(o => [o, o === '']);
          else if (V_.test(i)) {
            if ((delete r[i], Q.und(s))) return;
            const o = W_.test(i) ? 'px' : B_.test(i) ? 'deg' : '';
            a.push(qe(s)),
              l.push(
                i === 'rotate3d'
                  ? ([u, c, d, f]) => [`rotate3d(${u},${c},${d},${tl(f, o)})`, Qo(f, 0)]
                  : u => [`${i}(${u.map(c => tl(c, o)).join(',')})`, Qo(u, i.startsWith('scale') ? 1 : 0)],
              );
          }
        }),
        a.length && (r.transform = new G_(a, l)),
        super(r);
    }
  },
  G_ = class extends lm {
    constructor(e, t) {
      super(), (this.inputs = e), (this.transforms = t), (this._value = null);
    }
    get() {
      return this._value || (this._value = this._get());
    }
    _get() {
      let e = '',
        t = !0;
      return (
        le(this.inputs, (n, r) => {
          const a = $e(n[0]),
            [l, s] = this.transforms[r](Q.arr(a) ? a : n.map($e));
          (e += ' ' + l), (t = t && s);
        }),
        t ? 'none' : e
      );
    }
    observerAdded(e) {
      e == 1 && le(this.inputs, t => le(t, n => ut(n) && Hr(n, this)));
    }
    observerRemoved(e) {
      e == 0 && le(this.inputs, t => le(t, n => ut(n) && Vi(n, this)));
    }
    eventObserved(e) {
      e.type == 'change' && (this._value = null), $i(this, e);
    }
  },
  Y_ = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ];
Pt.assign({ batchedUpdates: ac.unstable_batchedUpdates, createStringInterpolator: dm, colors: Nk });
var Q_ = p_(Y_, {
    applyAnimatedValues: z_,
    createAnimatedStyle: e => new K_(e),
    getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
  }),
  Xo = Q_.animated;
const X_ = [
  { norwegian: 'tale', english: 'speech' },
  { norwegian: 'formidle', english: 'convey' },
  { norwegian: 'muntlig', english: 'oral' },
  { norwegian: 'arbeidslivsbalanse', english: 'work life balance' },
  { norwegian: 'å sørge for', english: 'to ensure' },
  { norwegian: 'forhandle', english: 'negotiate' },
  { norwegian: 'lønnsnivå', english: 'salary level' },
  { norwegian: 'arbeidsgiver', english: 'employer' },
  { norwegian: 'enighet', english: 'agreement' },
  { norwegian: 'sluttpakke', english: 'severance package' },
  { norwegian: 'å tilby', english: 'to offer' },
  { norwegian: 'frivillig', english: 'voluntary' },
  { norwegian: 'nedbemannet', english: 'downsized' },
  { norwegian: 'deltid', english: 'part time' },
  { norwegian: 'tilsyn', english: 'supervision' },
  { norwegian: 'faste arbeidstider', english: 'fixed working hours' },
  { norwegian: 'tilpasse start- og sluttidspunkt', english: 'adjust the start and end time' },
  { norwegian: 'frihet', english: 'freedom' },
  { norwegian: 'yrke', english: 'profession' },
  { norwegian: 'yrkesetikk', english: 'professional ethics' },
  { norwegian: 'faglige', english: 'professional' },
  { norwegian: 'bestemt,spesifikk', english: 'specific' },
  { norwegian: 'prinsipp', english: 'principle' },
  { norwegian: 'atferd,oppførsel', english: 'behavior' },
  { norwegian: 'fysiske', english: 'physical' },
  { norwegian: 'å forsinke', english: 'to delay' },
  { norwegian: 'å utsett', english: 'to postpone' },
  { norwegian: 'å delegere', english: 'to delegate' },
  { norwegian: 'medarbeidergjennomgang', english: 'employee review' },
  { norwegian: 'langsiktige', english: 'long-term' },
  { norwegian: 'tidsrammer', english: 'timeframes' },
  { norwegian: 'kjerne', english: 'core' },
  { norwegian: 'grunnleggende', english: 'basic' },
  { norwegian: 'unike', english: 'unique' },
  { norwegian: 'utstyr', english: 'equipment' },
  { norwegian: 'å opprette', english: 'to establish' },
  { norwegian: 'formell', english: 'formal' },
  { norwegian: 'å vedlikeholde', english: 'to maintain' },
  { norwegian: 'kunnskaper', english: 'knowledge' },
  { norwegian: 'karrierevekst', english: 'career growth' },
  { norwegian: 'tverrkulturelt', english: 'cross-culturally' },
  { norwegian: 'å samarbeide', english: 'to cooperate, collaborate' },
  { norwegian: 'bakgrunner', english: 'background' },
  { norwegian: 'å bestemme,å avgjøre', english: 'to decide' },
  { norwegian: 'konfliktløsning', english: 'conflict resolution' },
  { norwegian: 'uenigheter', english: 'disagreements' },
  { norwegian: 'erfaring', english: 'experience' },
  { norwegian: 'oppleve,erfaren', english: 'experienced' },
  { norwegian: 'veiledning', english: 'guidance' },
  { norwegian: 'støtte', english: 'support' },
  { norwegian: 'å overvåke', english: 'to supervise, to monitor' },
  { norwegian: 'kunnskapsoverføring', english: 'knowledge transfer' },
  { norwegian: 'ledelse', english: 'management' },
  { norwegian: 'å holde seg', english: 'to hold on' },
  { norwegian: 'fagfelt', english: 'professional field' },
  { norwegian: 'stil', english: 'style' },
  { norwegian: 'å foretrekke', english: 'to prefer' },
  { norwegian: 'tidsstyring', english: 'time management' },
  { norwegian: 'å maksimere', english: 'to maximize' },
  { norwegian: 'yrkesmessa', english: 'vocational fair' },
  { norwegian: 'å skifte', english: 'to replace' },
  { norwegian: 'å oppnå', english: 'to achieve' },
  { norwegian: 'tilnærming', english: 'approach' },
  { norwegian: 'aspekter', english: 'aspects' },
  { norwegian: 'endringer', english: 'changes' },
  { norwegian: 'målrettet', english: 'targeted' },
  { norwegian: 'kan oppnås', english: 'can be achieved' },
  { norwegian: 'ansvar', english: 'responsibility' },
  { norwegian: 'ansvarliggjøring', english: 'accountability' },
  { norwegian: 'ansvarlige', english: 'responsible' },
  { norwegian: 'handlinger og resultater', english: 'actions and results' },
  { norwegian: 'å overføre', english: 'to transfer' },
  { norwegian: 'inkluderende', english: 'inclusive' },
  { norwegian: 'mangfold', english: 'diversity' },
  { norwegian: 'verdsetter,verdier', english: 'values' },
  { norwegian: 'sosiale arrangementer', english: 'social events' },
  { norwegian: 'myndighet,autoritet', english: 'authority' },
  { norwegian: 'retningslinjer', english: 'guidelines' },
  { norwegian: 'beslutning', english: 'decision' },
  { norwegian: 'innenfor', english: 'within' },
  { norwegian: 'arbeidstakerdeltakelse', english: 'employee participation' },
  { norwegian: 'å delta', english: 'to attend, to participate' },
  { norwegian: 'rette', english: 'correct' },
  { norwegian: 'å fremme', english: 'promoting' },
  { norwegian: 'arbeidstakerdeltakelse', english: 'employee participation' },
  { norwegian: 'å oppmuntre til', english: 'to encourage' },
  { norwegian: 'oppmuntre', english: 'encourage' },
  { norwegian: 'oppmuntret', english: 'encouraged' },
  { norwegian: 'utelukkende', english: 'exclusively' },
  { norwegian: 'å lage', english: 'to create' },
  { norwegian: 'å understreke prestasjon, å vektlegge oppnåelse', english: 'to emphasize achievement' },
  { norwegian: 'forslag', english: 'suggestion' },
  { norwegian: 'uforanderlig arbeidstid', english: 'unchanging working hours' },
  { norwegian: 'å tilby', english: 'offering' },
  { norwegian: 'arbeidsordninger', english: 'work arrangements' },
  { norwegian: 'tilpasser seg', english: 'adapts' },
  { norwegian: 'behov', english: 'need' },
  { norwegian: 'å ivareta', english: 'to preserve' },
  { norwegian: 'å ta hensyn til,å overveie', english: 'to consider' },
  { norwegian: 'plasseringen', english: 'the location' },
  { norwegian: 'behandler', english: 'treats' },
  { norwegian: 'samhandler', english: 'interacts' },
  { norwegian: 'å utøve godt lederskap', english: 'to exercise good leadership' },
  { norwegian: 'felles', english: 'common' },
  { norwegian: 'veilede', english: 'guide' },
  { norwegian: 'veileder', english: 'supervisor' },
  { norwegian: 'emner', english: 'subjects' },
  { norwegian: 'utfordringer', english: 'challenges' },
  { norwegian: 'å fremme', english: 'to promote' },
  { norwegian: 'opprettholde', english: 'maintain' },
  { norwegian: 'ærlighet', english: 'honesty' },
  { norwegian: 'verdsatt', english: 'appreciated' },
  { norwegian: 'søke', english: 'seek' },
  { norwegian: 'skritt', english: 'steps' },
  { norwegian: 'selvstendig', english: 'independent' },
  { norwegian: 'selvstendige', english: 'independent' },
  { norwegian: 'utvide', english: 'expand' },
  { norwegian: 'i henhold til', english: 'according to' },
  { norwegian: 'å handle', english: 'to act, to shop' },
  { norwegian: 'handler', english: 'acts' },
  { norwegian: 'beslutninger', english: 'decisions' },
  { norwegian: 'utveksling', english: 'exchange' },
  { norwegian: 'å bidra', english: 'to contribute' },
  { norwegian: 'å håndtere', english: 'to handle, to manage' },
  { norwegian: 'frist', english: 'deadline' },
  { norwegian: 'tidsfrister', english: 'deadlines' },
  { norwegian: 'pålitelighet,pålitelig', english: 'reliable' },
  { norwegian: 'vesentlige', english: 'significant' },
  { norwegian: 'årsaker', english: 'causes' },
  { norwegian: 'passende', english: 'appropriate' },
  { norwegian: 'oppdaget', english: 'discovered' },
  { norwegian: 'å årsake', english: 'to cause' },
  { norwegian: 'å passe', english: 'to fit' },
  { norwegian: 'å oppdage', english: 'to discover' },
  { norwegian: 'å foreslå', english: 'to suggest' },
  { norwegian: 'å forbedre', english: 'to improve' },
  { norwegian: 'å uttrykke', english: 'to express' },
  { norwegian: 'å forlate', english: 'to leave' },
  { norwegian: 'å oppfordre', english: 'to urge' },
  { norwegian: 'å øke', english: 'to increase' },
  { norwegian: 'økt', english: 'increased' },
  { norwegian: 'utfordringer', english: 'challenges' },
  { norwegian: 'ansvar', english: 'responsibility' },
  { norwegian: 'ansvarlighet', english: 'responsibility' },
  { norwegian: 'ansvarlig', english: 'responsible' },
  { norwegian: 'hard', english: 'hard' },
  { norwegian: 'å fullføre', english: 'to complete' },
  { norwegian: 'utsatt', english: 'postponed' },
  { norwegian: 'forslag', english: 'proposal' },
  { norwegian: 'virdering', english: 'assessment' },
  { norwegian: 'vurdere', english: 'consider' },
  { norwegian: 'støtte', english: 'support' },
  { norwegian: 'utforske', english: 'explore' },
  { norwegian: 'ressursene', english: 'the resources' },
  { norwegian: 'ressurser', english: 'resources' },
  { norwegian: 'begrenset', english: 'limited' },
  { norwegian: 'å justere', english: 'to adjust' },
  { norwegian: 'behov', english: 'needs' },
  { norwegian: 'milepæl', english: 'milestone' },
  { norwegian: 'nådd', english: 'reached' },
  { norwegian: 'formidle', english: 'convey, communicate' },
  { norwegian: 'unngå', english: 'avoid' },
  { norwegian: 'nødvendig', english: 'necessary' },
  { norwegian: 'regelmessige', english: 'regular' },
  { norwegian: 'oppdrag', english: 'assignment' },
  { norwegian: 'klarhet', english: 'clarity' },
  { norwegian: 'ærlig', english: 'honesty' },
  { norwegian: 'å forberede seg', english: 'to prepare oneself' },
  { norwegian: 'vedlikehold', english: 'maintenance' },
  { norwegian: 'regelmessig', english: 'regularly' },
  { norwegian: 'egenskap', english: 'trait, quality' },
  { norwegian: 'vurdere', english: 'consider, assess' },
  { norwegian: 'fremgang', english: 'progress' },
  { norwegian: 'ferdigheter', english: 'skills' },
  { norwegian: 'ferdighetene', english: 'the skills' },
  { norwegian: 'avbryt', english: 'cancel' },
  { norwegian: 'forsette', english: 'continue' },
  { norwegian: 'skrivere', english: 'printers' },
  { norwegian: 'ved', english: 'by' },
  { norwegian: 'opplevelse', english: 'experience' },
  { norwegian: 'ytelse', english: 'performance' },
  { norwegian: 'fremfor', english: 'over' },
  { norwegian: 'utseende', english: 'look' },
  { norwegian: 'sammenheng', english: 'context' },
  { norwegian: 'tiltaleform', english: 'form of indictment' },
  { norwegian: 'overordnet', english: 'superior' },
  { norwegian: 'innebærer', english: 'implies' },
  { norwegian: 'overarbeid', english: 'overtime' },
  { norwegian: 'medarbeidersamtale', english: 'employee interview' },
  { norwegian: 'nettarbeid', english: 'computer work' },
  { norwegian: 'å utføre', english: 'to perform' },
  { norwegian: 'utføres', english: 'is performed, is carried out' },
  { norwegian: 'å forklare', english: 'to explain' },
  { norwegian: 'begrep', english: 'term' },
  { norwegian: 'å styrke', english: 'to strengthen' },
  { norwegian: 'forhold', english: 'relationship' },
  { norwegian: 'å overføre', english: 'to transfer' },
  { norwegian: 'lønnsøkning', english: 'salary increase' },
  { norwegian: 'stillingsbeskrivelse', english: 'job description' },
  { norwegian: 'ansvarsområder', english: 'areas of responsibility' },
  { norwegian: 'avdeling', english: 'department' },
  { norwegian: 'avdelinger', english: 'departments' },
  { norwegian: 'åpent kontorlandskap', english: 'open office landscape' },
  { norwegian: 'tariffavtale', english: 'collective agreement' },
  { norwegian: 'arbeidsforhold', english: 'working conditions' },
  { norwegian: 'forening', english: 'union,association' },
  { norwegian: 'verdier,verdsetter', english: 'values' },
  { norwegian: 'å styre', english: 'to control' },
  { norwegian: 'styrer', english: 'controls' },
  { norwegian: 'verdsatt', english: 'appreciated' },
  { norwegian: 'utføre', english: 'perform' },
  { norwegian: 'forvalte', english: 'manage, maintain' },
  { norwegian: 'tidsforvaltning', english: 'time management' },
  { norwegian: 'forutseende', english: 'anticipatory' },
  { norwegian: 'establish', english: 'etablere' },
  { norwegian: 'anerkjennelse', english: 'recognition' },
  { norwegian: 'knyttet', english: 'attached' },
  { norwegian: 'arbeidsytelse', english: 'work performance' },
  { norwegian: 'medarbeider,ansatte', english: 'employee, co-worker' },
  { norwegian: 'undersøkelse', english: 'exam, survey' },
  { norwegian: 'medarbeiderundersøkelse', english: 'employee survey' },
  { norwegian: 'kunde', english: 'customer' },
  { norwegian: 'tilfredshet', english: 'satisfaction' },
  { norwegian: 'kundetilfredshet', english: 'customer satisfaction' },
  { norwegian: 'innsats', english: 'efforts' },
  { norwegian: 'stramt', english: 'tight' },
  { norwegian: 'frist', english: 'deadline' },
  { norwegian: 'krav', english: 'requirement, demand' },
  { norwegian: 'krav (plural)', english: 'requirements, demands' },
  { norwegian: 'kravet', english: 'the requirement' },
  { norwegian: 'kravene', english: 'the requirements' },
  { norwegian: 'likestilling', english: 'equality' },
  { norwegian: 'har like', english: 'have equal' },
  { norwegian: 'rettferdig', english: 'fairly' },
  { norwegian: 'kjønn, alder, etnisitet osv.', english: 'gender, age, ethnicity, etc.' },
  { norwegian: 'evne', english: 'skill' },
  { norwegian: 'evnen', english: 'the ability' },
  { norwegian: 'tykkere', english: 'thicker' },
  { norwegian: 'vaskemidler', english: 'detergents' },
  { norwegian: 'vifte', english: 'fan' },
  { norwegian: 'gardiner', english: 'curtains' },
  { norwegian: 'la kranen renne', english: 'let the faucet run' },
  { norwegian: 'oppvaskmaskin', english: 'dishwasher' },
  { norwegian: 'hastighet,fart', english: 'speed' },
  { norwegian: 'søppelkasse', english: 'trash can' },
  { norwegian: 'estetikk', english: 'aesthetics' },
  { norwegian: 'trivsel', english: 'well being' },
  { norwegian: 'uorganiserte', english: 'disorganized' },
  { norwegian: 'overfylte med ting', english: 'cluttered' },
  { norwegian: 'å skape', english: 'to create' },
  { norwegian: 'innbydende atmosfære', english: 'welcoming atmosphere' },
  { norwegian: 'lukkede', english: 'closed' },
  { norwegian: 'hyppig,hyppige', english: 'frequent' },
  { norwegian: 'arter', english: 'species' },
  { norwegian: 'å kreve', english: 'to demand, require' },
  { norwegian: 'laveste', english: 'lowest' },
  { norwegian: 'fylt', english: 'filled' },
  { norwegian: 'fult', english: 'full' },
  { norwegian: 'overflater', english: 'surfaces' },
  { norwegian: 'synlig', english: 'visible' },
  { norwegian: 'skitt', english: 'dirt' },
  { norwegian: 'kjøkkenutstyr', english: 'kitchen utensils' },
  { norwegian: 'å desinfisere', english: 'to disinfect' },
  { norwegian: 'i tillegg til', english: 'in addition to' },
  { norwegian: 'komfortabelt', english: 'comfortable' },
  { norwegian: 'avslappende', english: 'relaxing' },
  { norwegian: 'slå', english: 'turn' },
  { norwegian: 'slå av', english: 'turn off' },
  { norwegian: 'slå på', english: 'turn on' },
  { norwegian: 'slått på, skrudd på', english: 'turned on' },
  { norwegian: 'beroligende', english: 'calming, soothing' },
  { norwegian: 'å oppbevare', english: 'to store, keep' },
  { norwegian: 'utstyr', english: 'equipment' },
  { norwegian: 'hjern', english: 'brain' },
  { norwegian: 'hjernen', english: 'the brain' },
  { norwegian: 'luftkvaliteten', english: 'the air quality' },
  { norwegian: 'luftfuktere', english: 'humidifiers' },
  { norwegian: 'å tilføre,å legge til', english: 'to add' },
  { norwegian: 'inneluft', english: 'indoor air' },
  { norwegian: 'levetiden', english: 'the life time' },
  { norwegian: 'å overbelaste', english: 'to overload' },
  { norwegian: 'produsenten', english: 'the manufacturer' },
  { norwegian: 'blant', english: 'among' },
  { norwegian: 'å oppmuntre', english: 'to encourage' },
  { norwegian: 'å innføre,introdusere', english: 'to introduce' },
  { norwegian: 'strømregninger', english: 'electricity bills' },
  { norwegian: 'strømsparemodus', english: 'power saving mode' },
  { norwegian: 'vannbesparende', english: 'water saving' },
  { norwegian: 'dusjhode', english: 'shower head' },
  { norwegian: 'programmerbare', english: 'programmable' },
  { norwegian: 'termostater', english: 'thermostats' },
  { norwegian: 'kilder', english: 'sources' },
  { norwegian: 'mur,vegg', english: 'wall' },
  { norwegian: 'lydisolerende', english: 'soundproofing' },
  { norwegian: 'vant til', english: 'used to' },
  { norwegian: 'å bevare', english: 'to preserve' },
  { norwegian: 'stille', english: 'quiet' },
  { norwegian: 'å stille inn', english: 'to set in' },
  { norwegian: 'matvarer', english: 'foodstuffs, food' },
  { norwegian: 'å vaske klær', english: 'to do laundry' },
  { norwegian: 'stoff', english: 'fabric' },
  { norwegian: 'avstengningsventil', english: 'shut-off valve' },
  { norwegian: 'bøtte', english: 'bucket' },
  { norwegian: 'svamp', english: 'sponge' },
  { norwegian: 'etterfulgt av', english: 'followed by' },
  { norwegian: 'skylling', english: 'rinse' },
  { norwegian: 'hjemmeunderholdningssystem', english: 'home entertainment system' },
  { norwegian: 'tilgang', english: 'access' },
  { norwegian: 'å beholde, å holde', english: 'to retain, to keep' },
  { norwegian: 'fuktigheten', english: 'the humidity' },
  { norwegian: 'fuktighet', english: 'moisture' },
  { norwegian: 'kjølig', english: 'cool' },
  { norwegian: 'luftforurensning', english: 'air pollution' },
  { norwegian: 'rengjøringsprodukter', english: 'cleaning products' },
  { norwegian: 'å lufte ut', english: 'to air out, ventilate' },
  { norwegian: 'å forlenge', english: 'to extend, prolong' },
  { norwegian: 'slitasje', english: 'wear and tear' },
  { norwegian: 'påslått', english: 'switched on' },
  { norwegian: 'påslåing', english: 'switching on' },
  { norwegian: 'støvfrie', english: 'dust free' },
  { norwegian: 'overoppheting', english: 'overheating' },
  { norwegian: 'fuktige', english: 'moist' },
  { norwegian: 'lader kontinuerlig', english: 'charging continuously' },
  { norwegian: 'å fremskynde', english: 'to speed up' },
  { norwegian: 'kraftig', english: 'powerful' },
  { norwegian: 'stråle', english: 'beam' },
  { norwegian: 'matrester', english: 'leftover food' },
  { norwegian: 'kjeller', english: 'basement' },
  { norwegian: 'mugg', english: 'mold' },
  { norwegian: 'avfukter', english: 'dehumidifier' },
  { norwegian: 'nødvendig', english: 'necessary' },
  { norwegian: 'oppvask', english: 'dishes' },
  { norwegian: 'oppvasken', english: 'the dishes' },
  { norwegian: 'cycles', english: 'sykluser' },
  { norwegian: 'nivå', english: 'level' },
  { norwegian: 'lydnivået', english: 'the sound level' },
  { norwegian: 'å motvirke', english: 'to counteract' },
  { norwegian: 'gulvflater', english: 'floor surfaces' },
  { norwegian: 'teppe', english: 'carpet' },
  { norwegian: 'myke', english: 'soft' },
  { norwegian: 'møbler', english: 'furniture' },
  { norwegian: 'lokk', english: 'lid' },
  { norwegian: 'gryte og pann', english: 'pot and pan' },
  { norwegian: 'vannbesparelse', english: 'water saving' },
  { norwegian: 'lavt-flyt', english: 'low flow' },
  { norwegian: 'engasjerende', english: 'engaging' },
  { norwegian: 'vaskeliste', english: 'laundry list' },
  { norwegian: 'belønninger', english: 'rewards' },
  { norwegian: 'kun', english: 'only' },
  { norwegian: 'a utføre', english: 'to carry out' },
  { norwegian: 'utfører', english: 'performs' },
  { norwegian: 'ulike', english: 'different' },
  { norwegian: 'husarbeidsoppgaver', english: 'housework tasks' },
  { norwegian: 'tidskrevende', english: 'time consuming' },
  { norwegian: 'bærekraftige', english: 'sustainable' },
  { norwegian: 'oppsett', english: 'setup' },
  { norwegian: 'samtidig', english: 'simultaneous' },
  { norwegian: 'økt', english: 'increased' },
  { norwegian: 'å håndtere', english: 'to manage, to handle' },
  { norwegian: 'enheter', english: 'devices,units' },
  { norwegian: 'enheten', english: 'the device,the unit' },
  { norwegian: 'enhetene', english: 'the devices, the units' },
  { norwegian: 'påslått', english: 'switched on' },
  { norwegian: 'matbutikken', english: 'the grocery store' },
  { norwegian: 'engangsplastposer', english: 'disposable plastic bags' },
  { norwegian: 'forventer', english: 'expects' },
  { norwegian: 'samle opp', english: 'pick up' },
  { norwegian: 'rot', english: 'mess' },
  { norwegian: 'rengjøre og rydde', english: 'clean and clear' },
  { norwegian: 'på forhånd', english: 'in advance' },
  { norwegian: 'å oppmuntre', english: 'to encourage' },
  { norwegian: 'begrense', english: 'restrict, limit' },
  { norwegian: 'skape', english: 'create' },
  { norwegian: 'skade', english: 'damage' },
  { norwegian: 'ødelagt', english: 'destroyed' },
  { norwegian: 'ærlig', english: 'honest' },
  { norwegian: 'ærlighet', english: 'honesty' },
  { norwegian: 'sikkerhet', english: 'safety' },
  { norwegian: 'trygt', english: 'safe' },
  { norwegian: 'ta vare på deg selv', english: 'take care of yourself' },
  { norwegian: 'vær forsiktig', english: 'be careful' },
  { norwegian: 'ulåste', english: 'unlocked' },
  { norwegian: 'låst', english: 'locked' },
  { norwegian: 'røykvarsler', english: 'smoke alarm' },
  { norwegian: 'sikkerhetssystem', english: 'security system' },
  { norwegian: 'sjelden', english: 'rarely' },
  { norwegian: 'framtid,fremtid', english: 'future' },
  { norwegian: 'framover,fremover', english: 'forwards' },
  { norwegian: 'på forhånd', english: 'in advance' },
  { norwegian: 'alder', english: 'age' },
  { norwegian: 'ovner', english: 'furnace, heater, ovens' },
  { norwegian: 'isolere', english: 'isolate, insulate' },
  { norwegian: 'beslutningen', english: 'the decision' },
  { norwegian: 'til slutt', english: 'in the end' },
  { norwegian: 'inngrep', english: 'interventions' },
  { norwegian: 'lagring', english: 'storage' },
  { norwegian: 'komplisert', english: 'complicated' },
  { norwegian: 'resirkulering', english: 'recycling' },
  { norwegian: 'resirkulere', english: 'recycle' },
  { norwegian: 'erstatte', english: 'replace' },
  { norwegian: 'gjenbrukbare', english: 'reusable' },
  { norwegian: 'å oppmuntre', english: 'to encourage' },
  { norwegian: 'sunn,sunt', english: 'healthy' },
  { norwegian: 'matlaging', english: 'cooking' },
  { norwegian: 'ferske', english: 'fresh' },
  { norwegian: 'ferdigmat', english: 'ready meals' },
  { norwegian: 'uavhengig', english: 'regardless,independent' },
  { norwegian: 'lesing', english: 'reading' },
  { norwegian: 'tilgjengelig', english: 'available' },
  { norwegian: 'rekke', english: 'variety' },
  { norwegian: 'felles', english: 'common' },
  { norwegian: 'rot', english: 'clutter' },
  { norwegian: 'å forvalte', english: 'to manage' },
  { norwegian: 'utgifter', english: 'expenses' },
  { norwegian: 'inntekter', english: 'income' },
  { norwegian: 'følge', english: 'follow' },
  { norwegian: 'kun', english: 'only' },
  { norwegian: 'luksus', english: 'luxury' },
  { norwegian: 'varer', english: 'items, goods' },
  { norwegian: 'bærekraftig', english: 'sustainable' },
  { norwegian: 'livsstil', english: 'lifestyle' },
  { norwegian: 'gjenbruke', english: 'reuse' },
  { norwegian: 'modus', english: 'mode' },
  { norwegian: 'husholdningen', english: 'the household' },
  { norwegian: 'barnegrinder', english: 'childsgate' },
  { norwegian: 'sikkerhetsutstyr', english: 'safety devices' },
  { norwegian: 'rengjøringsmidler', english: 'cleaning agents' },
  { norwegian: 'gjenstander', english: 'objects' },
  { norwegian: 'husholdningsartikler', english: 'household items' },
  { norwegian: 'erstattes', english: 'is replaced' },
  { norwegian: 'å fremme', english: 'to promote' },
  { norwegian: 'regelmessig', english: 'regularly' },
  { norwegian: 'kosthold', english: 'diet' },
  { norwegian: 'mengder', english: 'amounts, quantities' },
  { norwegian: 'umiddelbart', english: 'immediately' },
  { norwegian: 'fryser', english: 'freezer' },
  { norwegian: 'opprettholde', english: 'maintain' },
  { norwegian: 'luftrenser', english: 'air cleaner' },
  { norwegian: 'ferdigheter', english: 'skills' },
  { norwegian: 'reparasjoner', english: 'repairs' },
  { norwegian: 'ryddigere', english: 'tidier' },
  { norwegian: 'badet', english: 'the bathroom' },
  { norwegian: 'bad', english: 'bathroom' },
  { norwegian: 'grundig', english: 'thoroughly' },
  { norwegian: 'å samle', english: 'to collect,to gather' },
  { norwegian: 'ubrukt', english: 'unused' },
  { norwegian: 'støy,bråk', english: 'noise' },
  { norwegian: 'å dekke', english: 'to cover' },
  { norwegian: 'lyder', english: 'sounds' },
  { norwegian: 'tykk', english: 'thick' },
  { norwegian: 'handler klær', english: 'shopping for clothes' },
  { norwegian: 'å vurdere', english: 'to consider' },
  { norwegian: 'å sikre', english: 'to secure' },
  { norwegian: 'noe som passer godt', english: 'something that fits well' },
  { norwegian: 'størrelse', english: 'size' },
  { norwegian: 'god passform', english: 'good fit' },
  { norwegian: 'utelukkende', english: 'exclusively' },
  { norwegian: 'merke', english: 'mark' },
  { norwegian: 'trender', english: 'trends' },
  { norwegian: 'størrelsesetiketter', english: 'size labels' },
  { norwegian: 'dyreste', english: 'most expensive' },
  { norwegian: 'uavhengig', english: 'regardless' },
  { norwegian: 'handlevogn', english: 'shopping cart' },
  { norwegian: 'gjenstander', english: 'objects' },
  { norwegian: 'et vare', english: 'an item' },
  { norwegian: 'fasthet', english: 'firmness' },
  { norwegian: 'skadet', english: 'hurt' },
  { norwegian: 'moden', english: 'ripe, mature' },
  { norwegian: 'overmoden', english: 'overripe' },
  { norwegian: 'bestill', english: 'order' },
  { norwegian: 'forrett', english: 'appetizer' },
  { norwegian: 'hovedrett', english: 'main course' },
  { norwegian: 'matopplevelse', english: 'dining experience' },
  { norwegian: 'en rett', english: 'a dish' },
  { norwegian: 'gjett', english: 'guess' },
  { norwegian: 'vanligvis', english: 'usually' },
  { norwegian: 'fysiske', english: 'physical' },
  { norwegian: 'plagg', english: 'garment' },
  { norwegian: 'å sammenligne', english: 'to compare' },
  { norwegian: 'kvalitetsråvarer', english: 'quality raw materials' },
  { norwegian: 'utløpsdatoer', english: 'expiration dates' },
  { norwegian: 'friskhet', english: 'freshness' },
  { norwegian: 'utseende', english: 'appearance' },
  { norwegian: 'hermetiserte', english: 'canned' },
  { norwegian: 'varer', english: 'goods' },
  { norwegian: 'hylle', english: 'shelf' },
  { norwegian: 'matforgiftning', english: 'food poisoning' },
  { norwegian: 'å tilberede et måltid', english: 'to prepare a meal' },
  { norwegian: 'a forberede', english: 'to prepare' },
  { norwegian: 'skjærebrett', english: 'cutting board' },
  { norwegian: 'kjøkkenutstyr', english: 'kitchen utensils' },
  { norwegian: 'moten', english: 'the fashion' },
  { norwegian: 'tidkrevende', english: 'time consuming' },
  { norwegian: 'oppskrifter', english: 'recipes' },
  { norwegian: 'ferskhet', english: 'freshness' },
  { norwegian: 'tegn', english: 'signs' },
  { norwegian: 'kanter', english: 'edges' },
  { norwegian: 'risikoen', english: 'the risk' },
  { norwegian: 'ved berøring', english: 'by touch' },
  { norwegian: 'matvarer', english: 'foodstuffs' },
  { norwegian: 'matsvinn', english: 'food waste' },
  { norwegian: 'mengder', english: 'amounts' },
  { norwegian: 'kvantumsrabatt', english: 'quantity discount' },
  { norwegian: 'uavhengig', english: 'independent' },
  { norwegian: 'holdbarheten', english: 'durability,shelf life' },
  { norwegian: 'opprettholde', english: 'maintain' },
  { norwegian: 'oppbevaringskrav', english: 'storage requirements' },
  { norwegian: 'øverste hyllene', english: 'top shelves' },
  { norwegian: 'anmeldelser', english: 'reviews' },
  { norwegian: 'kundeanmeldelser', english: 'customer reviews' },
  { norwegian: 'anbefalinger', english: 'recommendations' },
  { norwegian: 'kun', english: 'only' },
  { norwegian: 'kjedesteder', english: 'chain locations' },
  { norwegian: 'tilnærming', english: 'approach' },
  { norwegian: 'sunne', english: 'healthy' },
  { norwegian: 'alternativer', english: 'options' },
  { norwegian: 'næringsinformasjonen', english: 'the nutritional information' },
  { norwegian: 'uansett', english: 'regardless' },
  { norwegian: 'sjanser', english: 'chances' },
  { norwegian: 'varige', english: 'lasting' },
  { norwegian: 'investeringer', english: 'investments' },
  { norwegian: 'luksusmerker', english: 'luxury brands' },
  { norwegian: 'meld deg på nyhetsbrev', english: 'sign up for the newsletter' },
  { norwegian: 'ved å være', english: 'by being' },
  { norwegian: 'billig', english: 'cheap' },
  { norwegian: 'mengde', english: 'quantity' },
  { norwegian: 'plastavfall', english: 'plastic waste' },
  { norwegian: 'dagligvarer', english: 'groceries' },
  { norwegian: 'hermetikk', english: 'canned' },
  { norwegian: 'unødvendig', english: 'unnecessary' },
  { norwegian: 'plastemballasjer', english: 'plastic packaging' },
  { norwegian: 'fordel', english: 'advantage, benefit' },
  { norwegian: 'fordeler', english: 'benefits, advantages' },
  { norwegian: 'fordelene', english: 'the benefits' },
  { norwegian: 'bevaring', english: 'conservation, preservation, retention' },
  { norwegian: 'holdbarhet', english: 'shelf life' },
  { norwegian: 'inneholder', english: 'contains' },
  { norwegian: 'konserveringsmidler', english: 'preservatives' },
  { norwegian: 'ulike', english: 'different' },
  { norwegian: 'utgitt', english: 'released' },
  { norwegian: 'utseende og popularitet', english: 'appearance and popularity' },
  { norwegian: 'bærekraftig', english: 'sustainable' },
  { norwegian: 'kunstige', english: 'artificial' },
  { norwegian: 'motetrender', english: 'fashion trends' },
  { norwegian: 'kleskjeder', english: 'clothing chains' },
  { norwegian: 'når det gjelder', english: 'when it comes to' },
  { norwegian: 'impulskjøp', english: 'impulse buy' },
  { norwegian: 'kvantumsrabatter', english: 'quantity discounts' },
  { norwegian: 'hurtigmat', english: 'fast food' },
  { norwegian: 'innhold', english: 'content' },
  { norwegian: 'næringsinnhold', english: 'nutritional content' },
  { norwegian: 'lavt fett', english: 'low fat' },
  { norwegian: 'rimelig', english: 'reasonable,affordable' },
  { norwegian: 'skinnende', english: 'shiny' },
  { norwegian: 'gjeller', english: 'gills' },
  { norwegian: 'skinn', english: 'leather' },
  { norwegian: 'stoff', english: 'fabric' },
  { norwegian: 'skall', english: 'shell' },
  { norwegian: 'utsikt', english: 'view' },
  { norwegian: 'utmerket', english: 'excellent' },
  { norwegian: 'vennligst', english: 'please' },
  { norwegian: 'vanntette,vanntett materiale', english: 'waterproof' },
  { norwegian: 'ull', english: 'wool' },
  { norwegian: 'fullkornsbrød', english: 'whole grain bread' },
  { norwegian: 'glutenfritt', english: 'gluten free' },
  { norwegian: 'kart', english: 'map' },
  { norwegian: 'meieri', english: 'dairy' },
  { norwegian: 'koffeinfri', english: 'decaffeinated' },
  { norwegian: 'innkvartere', english: 'accommodate' },
  { norwegian: 'importert', english: 'imported' },
  { norwegian: 'fettfattige', english: 'low fat' },
  { norwegian: 'geitemelk', english: "goat's milk" },
  { norwegian: 'guidede', english: 'guided' },
  { norwegian: 'skjerf', english: 'scarf' },
  { norwegian: 'opphold', english: 'stay' },
  { norwegian: 'forlenge', english: 'extend' },
  { norwegian: 'krydret', english: 'spiced' },
  { norwegian: 'stark', english: 'spicy' },
  { norwegian: 'kasjmir', english: 'cashmere' },
  { norwegian: 'skivet', english: 'sliced' },
  { norwegian: 'kjole', english: 'dress' },
  { norwegian: 'flytende', english: 'fluid' },
  { norwegian: 'økologisk', english: 'ecological,organic' },
  { norwegian: 'svømmebassenget', english: 'the swimming pool' },
  { norwegian: 'støvler', english: 'boots' },
  { norwegian: 'leie', english: 'rent' },
  { norwegian: 'regnjakken', english: 'rain coat' },
  { norwegian: 'lokale', english: 'local' },
  { norwegian: 'nærmeste', english: 'nearest' },
  { norwegian: 'dessertmenyen', english: 'the dessert menu' },
  { norwegian: 'denne stilen', english: 'this style' },
  { norwegian: 'uformell', english: 'informal' },
  { norwegian: 'forståelse', english: 'understanding' },
  { norwegian: 'foretrukne, foretrukket', english: 'preferred' },
  { norwegian: 'dessuten', english: 'furthermore' },
  { norwegian: 'takknemlig', english: 'grateful' },
  { norwegian: 'heldigvis', english: 'luckily' },
  { norwegian: 'virkeligheten', english: 'reality' },
  { norwegian: 'begeistret', english: 'excited' },
  { norwegian: 'nøyaktig', english: 'exact' },
  { norwegian: 'nøyaktighet', english: 'accuracy' },
  { norwegian: 'grunn,fordi', english: 'because' },
  { norwegian: 'skikkelig', english: 'properly' },
  { norwegian: 'merkelig', english: 'strange' },
  { norwegian: 'opplysningen', english: 'information' },
  { norwegian: 'uregelmessighet', english: 'irregularity' },
  { norwegian: 'antakelig', english: 'probably' },
  { norwegian: 'uansett', english: 'regardless' },
  { norwegian: 'høytidelig', english: 'solemnly' },
  { norwegian: 'overkommelig', english: 'manageable' },
  { norwegian: 'ydmykende', english: 'humiliating' },
  { norwegian: 'skade', english: 'damage' },
  { norwegian: 'bekymrer', english: 'worries' },
  { norwegian: 'allikevel', english: 'anyway' },
  { norwegian: 'temmelig', english: 'quite a bit' },
  { norwegian: 'foreløpig', english: 'for the time being' },
  { norwegian: 'i hvert fall', english: 'at least' },
  { norwegian: 'tåpelig', english: 'foolish' },
  { norwegian: 'forskjell', english: 'difference' },
  { norwegian: 'likegyldig', english: 'indifferent' },
  { norwegian: 'gidder', english: 'bother' },
  { norwegian: 'vesentlige', english: 'significant,essentials' },
  { norwegian: 'videre', english: 'further' },
  { norwegian: 'underliggende', english: 'underlying' },
  { norwegian: 'i stand til', english: 'capable of' },
  { norwegian: 'av og til', english: 'occasionally,sometimes' },
  { norwegian: 'sannhet', english: 'truth' },
  { norwegian: 'begeistring', english: 'excitement' },
  { norwegian: 'forvirrende', english: 'confusing' },
  { norwegian: 'uoppfordet', english: 'unsolicited' },
  { norwegian: 'tviler', english: 'doubt' },
  { norwegian: 'å forlange', english: 'to demand' },
  { norwegian: 'tilsynelatende', english: 'apparently' },
  { norwegian: 'å forsøk', english: 'to attempt' },
  { norwegian: 'til og med', english: 'even' },
  { norwegian: 'merkelig', english: 'strange' },
  { norwegian: 'tilfredsstillende', english: 'satisfactory' },
  { norwegian: 'å håndtere, å beherske', english: 'to handle' },
  { norwegian: 'å synes synd på', english: 'to feel sorry for' },
  { norwegian: 'fremdeles', english: 'still' },
  { norwegian: 'med det samme,med en gang', english: 'immediately,right away' },
  { norwegian: 'overrasket', english: 'surprised' },
  { norwegian: 'behandler', english: 'treats' },
  { norwegian: 'nemlig', english: 'in fact' },
  { norwegian: 'å innrømme nederlag', english: 'to admit defeat' },
  { norwegian: 'Til rådighet', english: 'At your disposal' },
  { norwegian: 'ufattelig', english: 'unbelievable' },
  { norwegian: 'evighet', english: 'eternity' },
  { norwegian: 'avstand', english: 'distance' },
  { norwegian: 'tiltrekker', english: 'attracts' },
  { norwegian: 'gjennomslag', english: 'impact' },
  { norwegian: 'på sikt', english: 'in the long run' },
  { norwegian: 'i den grad', english: 'to the extent' },
  { norwegian: 'vi kan godt', english: 'we know very well' },
  { norwegian: 'forandring', english: 'change' },
  { norwegian: 'en gang for alle', english: 'once and for all' },
  { norwegian: 'innbakt', english: 'baked in' },
  { norwegian: 'å skli', english: 'to slide' },
  { norwegian: 'hurtig', english: 'fast' },
  { norwegian: 'om å gjøre', english: 'all about' },
  { norwegian: 'Hei', english: 'Hello' },
  { norwegian: 'Takk', english: 'Thank you' },
  { norwegian: 'Vær så snill', english: 'Please' },
  { norwegian: 'Unnskyld', english: 'Excuse me' },
  { norwegian: 'Jeg forstår ikke', english: 'I do not understand' },
  { norwegian: 'Snakker du engelsk?', english: 'Do you speak English?' },
  { norwegian: 'Hva heter du?', english: 'What is your name?' },
  { norwegian: 'Jeg heter...', english: 'My name is...' },
  { norwegian: 'Hvordan har du det?', english: 'How are you?' },
  { norwegian: 'Jeg har det bra, takk', english: 'I am fine, thank you' },
  { norwegian: 'Hva er klokken?', english: 'What time is it?' },
  { norwegian: 'Unnskyld, hvor er toalettet?', english: 'Excuse me, where is the toilet?' },
  { norwegian: 'Jeg trenger hjelp', english: 'I need help' },
  { norwegian: 'Hvor mye koster dette?', english: 'How much does this cost?' },
  { norwegian: 'Kan jeg betale med kort?', english: 'Can I pay with a card?' },
  { norwegian: 'Jeg vil gjerne ha...', english: 'I would like...' },
  { norwegian: 'Kan du hjelpe meg?', english: 'Can you help me?' },
  { norwegian: 'Selvfølgelig', english: 'Of course' },
  { norwegian: 'Ingen årsak', english: 'You are welcome' },
  { norwegian: 'Jeg elsker deg', english: 'I love you' },
  { norwegian: 'Jeg savner deg', english: 'I miss you' },
  { norwegian: 'Hva tenker du om...?', english: 'What do you think about...?' },
  { norwegian: 'Jeg er sulten', english: 'I am hungry' },
  { norwegian: 'Jeg er tørst', english: 'I am thirsty' },
  { norwegian: 'Er det mulig?', english: 'Is it possible?' },
  { norwegian: 'Selvsagt', english: 'Certainly' },
  { norwegian: 'Jeg er enig', english: 'I agree' },
  { norwegian: 'Jeg er uenig', english: 'I disagree' },
  { norwegian: 'Jeg vet ikke', english: 'I do not know' },
  { norwegian: 'Kan du snakke saktere?', english: 'Can you speak slower?' },
  { norwegian: 'Kan du gjenta det?', english: 'Can you repeat that?' },
  { norwegian: 'Hvor kommer du fra?', english: 'Where are you from?' },
  { norwegian: 'Jeg kommer fra...', english: 'I come from...' },
  { norwegian: 'Hva liker du å gjøre?', english: 'What do you like to do?' },
  { norwegian: 'Jeg liker å...', english: 'I like to...' },
  { norwegian: 'Hvordan sier man... på norsk?', english: 'How do you say... in Norwegian?' },
  { norwegian: 'Hva betyr...?', english: 'What does... mean?' },
  { norwegian: 'Kan vi møtes igjen?', english: 'Can we meet again?' },
  { norwegian: 'Jeg ser frem til vårt neste møte', english: 'I look forward to our next meeting' },
  { norwegian: 'Ta vare på deg selv', english: 'Take care of yourself' },
  { norwegian: 'God natt', english: 'Good night' },
  { norwegian: 'Jeg er lei meg', english: 'I am sorry' },
  { norwegian: 'Gratulerer', english: 'Congratulations' },
  { norwegian: 'God tur', english: 'Have a nice trip' },
  { norwegian: 'Jeg føler meg syk', english: 'I feel sick' },
  { norwegian: 'Jeg har det gøy', english: 'I am having fun' },
  { norwegian: 'Jeg er kjedet', english: 'I am bored' },
  { norwegian: 'Jeg er trøtt', english: 'I am tired' },
  { norwegian: 'Jeg er spent', english: 'I am excited' },
  { norwegian: 'Jeg er nervøs', english: 'I am nervous' },
  { norwegian: 'Jeg er fullstendig enig', english: 'I completely agree' },
  { norwegian: 'Det spørs', english: 'It depends' },
  { norwegian: 'Ikke vær dum', english: 'do not be silly' },
  { norwegian: 'Det høres bra ut', english: 'That sounds good' },
  { norwegian: 'La oss gjøre det', english: 'let us do it' },
  { norwegian: 'Hold kontakten', english: 'Stay in touch' },
  { norwegian: 'Det var hyggelig å treffe deg', english: 'It was nice to meet you' },
  { norwegian: 'Hva skjer?', english: 'what is happening?' },
  { norwegian: 'Pass på deg selv', english: 'Look after yourself' },
  { norwegian: 'Jeg ble overrasket', english: 'I was surprised' },
  { norwegian: 'Det er verdt et forsøk', english: 'it is worth a try' },
  { norwegian: 'Jeg er ferdig', english: 'I am done' },
  { norwegian: 'Kan du anbefale en god restaurant?', english: 'Can you recommend a good restaurant?' },
  { norwegian: 'Hvor lang tid tar det?', english: 'How long does it take?' },
  { norwegian: 'Kan du skrive det ned?', english: 'Can you write it down?' },
  { norwegian: 'Jeg er allergisk mot...', english: 'I am allergic to...' },
  { norwegian: 'Jeg er imponert', english: 'I am impressed' },
  { norwegian: 'Det gjør ingenting', english: 'It does not matter' },
  { norwegian: 'Jeg er forsinket', english: 'I am late' },
  { norwegian: 'Kan du forklare det?', english: 'Can you explain it?' },
  { norwegian: 'Det er for dyrt', english: 'it is too expensive' },
  { norwegian: 'Kan du vise meg veien?', english: 'Can you show me the way?' },
  { norwegian: 'Jeg har gått meg vill', english: 'I am lost' },
  { norwegian: 'Kan jeg få kvitteringen, vær så snill?', english: 'Can I have the receipt, please?' },
  { norwegian: 'Jeg er interessert i...', english: 'I am interested in...' },
  { norwegian: 'Det kunne vært verre', english: 'It could be worse' },
  { norwegian: 'Hva foreslår du?', english: 'What do you suggest?' },
  { norwegian: 'Jeg er bekymret for...', english: 'I am worried about...' },
  { norwegian: 'Det er på tide å gå', english: 'it is time to go' },
  { norwegian: 'Kan jeg hjelpe deg med noe?', english: 'Can I help you with anything?' },
  { norwegian: 'Hva er meningen med livet?', english: 'What is the meaning of life?' },
  { norwegian: 'Det gir ingen mening', english: 'It makes no sense' },
  { norwegian: 'Jeg er stolt av deg', english: 'I am proud of you' },
  { norwegian: 'Det var en gang', english: 'Once upon a time' },
  { norwegian: 'Livet er vakkert', english: 'Life is beautiful' },
  { norwegian: 'Jeg er avhengig av...', english: 'I am addicted to...' },
  { norwegian: 'Det er ikke verdt det', english: 'it is not worth it' },
  { norwegian: 'Jeg føler meg hjemme', english: 'I feel at home' },
  { norwegian: 'Jeg har bestemt meg for...', english: 'I have decided to...' },
  { norwegian: 'Det endte godt', english: 'It ended well' },
  { norwegian: 'La oss holde kontakten', english: 'let us keep in touch' },
  { norwegian: 'Kan du låne meg...?', english: 'Can you lend me...?' },
  { norwegian: 'Jeg beundrer deg', english: 'I admire you' },
  { norwegian: 'Jeg er takknemlig for...', english: 'I am grateful for...' },
  { norwegian: 'Det er utenfor min kontroll', english: 'it is out of my control' },
  { norwegian: 'Hva er din drøm?', english: 'What is your dream?' },
  { norwegian: 'Det føles riktig', english: 'It feels right' },
  { norwegian: 'La oss endre emnet', english: 'let us change the subject' },
  { norwegian: 'Jeg har respekt for deg', english: 'I respect you' },
  { norwegian: 'Det overgår mine forventninger', english: 'It exceeds my expectations' },
  { norwegian: 'påvirkning', english: 'influence' },
  { norwegian: 'antagelse', english: 'assumption' },
  { norwegian: 'kompleksitet', english: 'complexity' },
  { norwegian: 'diskurs', english: 'discourse' },
  { norwegian: 'implikasjon', english: 'implication' },
  { norwegian: 'nyansert', english: 'nuanced' },
  { norwegian: 'paradigme', english: 'paradigm' },
  { norwegian: 'retorikk', english: 'rhetoric' },
  { norwegian: 'spektrum', english: 'spectrum' },
  { norwegian: 'ubetinget', english: 'unconditional' },
  { norwegian: 'validitet', english: 'validity' },
  { norwegian: 'abstrakt', english: 'abstract' },
  { norwegian: 'bærekraftig', english: 'sustainable' },
  { norwegian: 'dialektikk', english: 'dialectic' },
  { norwegian: 'ekstrapolere', english: 'extrapolate' },
  { norwegian: 'forskrift', english: 'regulation' },
  { norwegian: 'gjennomførbarhet', english: 'feasibility' },
  { norwegian: 'ansvarlig', english: 'responsible' },
  { norwegian: 'bekreftelse', english: 'confirmation' },
  { norwegian: 'forutsetning', english: 'assumption' },
  { norwegian: 'tilnærming', english: 'approach' },
  { norwegian: 'utfordring', english: 'challenge' },
  { norwegian: 'vedvarende', english: 'persistent' },
  { norwegian: 'oppnåelse', english: 'achievement' },
  { norwegian: 'betydelig', english: 'significant' },
  { norwegian: 'tilstrekkelig', english: 'sufficient' },
  { norwegian: 'innflytelse', english: 'influence' },
  { norwegian: 'omstendighet', english: 'circumstance' },
  { norwegian: 'foreløpig', english: 'preliminary' },
  { norwegian: 'iverksette', english: 'implement' },
  { norwegian: 'samvittighet', english: 'conscience' },
  { norwegian: 'målrettet', english: 'targeted' },
  { norwegian: 'anerkjennelse', english: 'recognition' },
  { norwegian: 'tilfeldig', english: 'random' },
  { norwegian: 'gjennomføring', english: 'execution' },
  { norwegian: 'tilgjengelig', english: 'available' },
  { norwegian: 'forpliktelse', english: 'commitment' },
  { norwegian: 'nøyaktighet', english: 'accuracy' },
  { norwegian: 'samtidig', english: 'simultaneous' },
  { norwegian: 'innovasjon', english: 'innovation' },
  { norwegian: 'motivasjon', english: 'motivation' },
  { norwegian: 'forbedring', english: 'improvement' },
  { norwegian: 'strategisk', english: 'strategic' },
  { norwegian: 'engasjement', english: 'engagement' },
  { norwegian: 'fleksibel', english: 'flexible' },
  { norwegian: 'integritet', english: 'integrity' },
  { norwegian: 'evaluering', english: 'evaluation' },
  { norwegian: 'konsistens', english: 'consistency' },
  { norwegian: 'autentisitet', english: 'authenticity' },
  { norwegian: 'tilpasning', english: 'adaptation' },
  { norwegian: 'resiliens', english: 'resilience' },
  { norwegian: 'transparent', english: 'transparent' },
  { norwegian: 'initiativ', english: 'initiative' },
  { norwegian: 'perspektiv', english: 'perspective' },
  { norwegian: 'prioritering', english: 'prioritization' },
  { norwegian: 'synergier', english: 'synergies' },
  { norwegian: 'autonomi', english: 'autonomy' },
  { norwegian: 'kollaborativ', english: 'collaborative' },
  { norwegian: 'proaktiv', english: 'proactive' },
  { norwegian: 'dynamisk', english: 'dynamic' },
  { norwegian: 'effektivitet', english: 'efficiency' },
  { norwegian: 'innovativ', english: 'innovative' },
  { norwegian: 'multifasettert', english: 'multifaceted' },
  { norwegian: 'nettverk', english: 'network' },
  { norwegian: 'omstillingsdyktig', english: 'adaptable' },
  { norwegian: 'resonans', english: 'resonance' },
  { norwegian: 'visjonær', english: 'visionary' },
  { norwegian: 'anskaffelse', english: 'acquisition' },
  { norwegian: 'begrunnelse', english: 'justification' },
  { norwegian: 'komponent', english: 'component' },
  { norwegian: 'diversifisering', english: 'diversification' },
  { norwegian: 'effektivisering', english: 'streamlining' },
  { norwegian: 'forankring', english: 'anchoring' },
  { norwegian: 'gjennombrudd', english: 'breakthrough' },
  { norwegian: 'holdbarhet', english: 'durability' },
  { norwegian: 'intuisjon', english: 'intuition' },
  { norwegian: 'jevnaldrende', english: 'peer' },
  { norwegian: 'kunnskapsrik', english: 'knowledgeable' },
  { norwegian: 'legitimasjon', english: 'legitimation' },
  { norwegian: 'mestring', english: 'mastery' },
  { norwegian: 'nyskapning', english: 'innovation' },
  { norwegian: 'opphav', english: 'origin' },
  { norwegian: 'pålitelighet', english: 'reliability' },
  { norwegian: 'kvantifisere', english: 'quantify' },
  { norwegian: 'ressurser', english: 'resources' },
  { norwegian: 'samarbeid', english: 'collaboration' },
  { norwegian: 'tilbakemelding', english: 'feedback' },
  { norwegian: 'undersøkelse', english: 'investigation' },
  { norwegian: 'verdsettelse', english: 'valuation' },
  { norwegian: 'åpenbaring', english: 'revelation' },
  { norwegian: 'bistand', english: 'assistance' },
  { norwegian: 'konsekvens', english: 'consequence' },
  { norwegian: 'dialog', english: 'dialogue' },
  { norwegian: 'etablering', english: 'establishment' },
  { norwegian: 'fornyelse', english: 'renewal' },
  { norwegian: 'gjenoppretting', english: 'restoration' },
  { norwegian: 'harmoni', english: 'harmony' },
  { norwegian: 'innovasjonskapasitet', english: 'innovation capacity' },
  { norwegian: 'juridisk', english: 'legal' },
  { norwegian: 'kreativitet', english: 'creativity' },
  { norwegian: 'langsiktig', english: 'long-term' },
  { norwegian: 'mobilitet', english: 'mobility' },
  { norwegian: 'nøytralitet', english: 'neutrality' },
  { norwegian: 'optimalisering', english: 'optimization' },
  { norwegian: 'prosess', english: 'process' },
  { norwegian: 'kvalitativ', english: 'qualitative' },
  { norwegian: 'risikovurdering', english: 'risk assessment' },
  { norwegian: 'stabilitet', english: 'stability' },
  { norwegian: 'teoretisk', english: 'theoretical' },
  { norwegian: 'utvikling', english: 'development' },
  { norwegian: 'vitalitet', english: 'vitality' },
  { norwegian: 'arbeidsmoral', english: 'work ethic' },
  { norwegian: 'besluttsomhet', english: 'decisiveness' },
  { norwegian: 'kulturell bevissthet', english: 'cultural awareness' },
  { norwegian: 'lederskap', english: 'leadership' },
  { norwegian: 'meningsfull', english: 'meaningful' },
  { norwegian: 'reise', english: 'travel' },
  { norwegian: 'jobb', english: 'job' },
  { norwegian: 'venn', english: 'friend' },
  { norwegian: 'familie', english: 'family' },
  { norwegian: 'hjem', english: 'home' },
  { norwegian: 'skole', english: 'school' },
  { norwegian: 'mat', english: 'food' },
  { norwegian: 'drikke', english: 'drink' },
  { norwegian: 'by', english: 'city' },
  { norwegian: 'land', english: 'country' },
  { norwegian: 'språk', english: 'language' },
  { norwegian: 'hus', english: 'house' },
  { norwegian: 'leilighet', english: 'apartment' },
  { norwegian: 'butikk', english: 'store, shop' },
  { norwegian: 'restaurant', english: 'restaurant' },
  { norwegian: 'hotell', english: 'hotel' },
  { norwegian: 'stasjon', english: 'station' },
  { norwegian: 'flyplass', english: 'airport' },
  { norwegian: 'bil', english: 'car' },
  { norwegian: 'tog', english: 'train' },
  { norwegian: 'buss', english: 'bus' },
  { norwegian: 'gate', english: 'street' },
  { norwegian: 'vei', english: 'road' },
  { norwegian: 'bro', english: 'bridge' },
  { norwegian: 'park', english: 'park' },
  { norwegian: 'skog', english: 'forest' },
  { norwegian: 'strand', english: 'beach' },
  { norwegian: 'elv', english: 'river' },
  { norwegian: 'sjø', english: 'sea' },
  { norwegian: 'innsjø', english: 'lake' },
  { norwegian: 'fjell', english: 'mountain' },
  { norwegian: 'vær', english: 'weather' },
  { norwegian: 'sol', english: 'sun' },
  { norwegian: 'regn', english: 'rain' },
  { norwegian: 'snø', english: 'snow' },
  { norwegian: 'vind', english: 'wind' },
  { norwegian: 'sky', english: 'cloud' },
  { norwegian: 'temperatur', english: 'temperature' },
  { norwegian: 'kald', english: 'cold' },
  { norwegian: 'varm', english: 'warm' },
  { norwegian: 'het', english: 'hot' },
  { norwegian: 'kjølig', english: 'cool' },
  { norwegian: 'fryse', english: 'freeze' },
  { norwegian: 'kjærlighet', english: 'love' },
  { norwegian: 'lykke', english: 'happiness' },
  { norwegian: 'sorg', english: 'sorrow' },
  { norwegian: 'følelse', english: 'feeling' },
  { norwegian: 'tanker', english: 'thoughts' },
  { norwegian: 'erfaring', english: 'experience' },
  { norwegian: 'drøm', english: 'dream' },
  { norwegian: 'evig', english: 'eternal' },
  { norwegian: 'tviler', english: 'doubt' },
  { norwegian: 'på sett og vis', english: 'in a way' },
  { norwegian: 'ærlig talt', english: 'honestly' },
  { norwegian: 'uendelig', english: 'infinite' },
  { norwegian: 'i stand til', english: 'able to' },
  { norwegian: 'med mindre', english: 'unless' },
  { norwegian: 'neppe', english: 'hardly' },
  { norwegian: 'foreta', english: 'undertake' },
  { norwegian: 'bestandig', english: 'always' },
  { norwegian: 'i den grad', english: 'to the extent' },
  { norwegian: 'rett og slett', english: 'simply' },
  { norwegian: 'som følge', english: 'as a result' },
  { norwegian: 'tyder på', english: 'indicate' },
  { norwegian: 'bærekraftig', english: 'sustainable' },
  { norwegian: 'globalisering', english: 'globalization' },
  { norwegian: 'innovasjon', english: 'innovation' },
  { norwegian: 'kunstig intelligens', english: 'artificial intelligence' },
  { norwegian: 'multikulturalisme', english: 'multiculturalism' },
  { norwegian: 'pandemi', english: 'pandemic' },
  { norwegian: 'resiliens', english: 'resilience' },
  { norwegian: 'samfunnsansvar', english: 'corporate social responsibility' },
  { norwegian: 'teknologisk fremskritt', english: 'technological advancement' },
  { norwegian: 'urbanisering', english: 'urbanization' },
  { norwegian: 'velferdsstat', english: 'welfare state' },
  { norwegian: 'ytringsfrihet', english: 'freedom of speech' },
  { norwegian: 'etikk', english: 'ethics' },
  { norwegian: 'fornybar energi', english: 'renewable energy' },
  { norwegian: 'geopolitikk', english: 'geopolitics' },
  { norwegian: 'humanitær intervensjon', english: 'humanitarian intervention' },
  { norwegian: 'integrering', english: 'integration' },
  { norwegian: 'juridisk', english: 'legal' },
  { norwegian: 'kryptokurver', english: 'cryptocurrencies' },
  { norwegian: 'langsiktig', english: 'long-term' },
  { norwegian: 'menneskerettigheter', english: 'human rights' },
  { norwegian: 'naturvern', english: 'conservation' },
  { norwegian: 'oppsving', english: 'upswing' },
  { norwegian: 'politisk stabilitet', english: 'political stability' },
  { norwegian: 'kvantitativ', english: 'quantitative' },
  { norwegian: 'risikostyring', english: 'risk management' },
  { norwegian: 'sosial ulikhet', english: 'social inequality' },
  { norwegian: 'transparens', english: 'transparency' },
  { norwegian: 'ulikhet', english: 'inequality' },
  { norwegian: 'verdensøkonomi', english: 'world economy' },
  { norwegian: 'åpen kildekode', english: 'open source' },
  { norwegian: 'digitalisering', english: 'digitalization' },
  { norwegian: 'ekstremvær', english: 'extreme weather' },
  { norwegian: 'finansiell inkludering', english: 'financial inclusion' },
  { norwegian: 'grønn teknologi', english: 'green technology' },
  { norwegian: 'helseteknologi', english: 'health technology' },
  { norwegian: 'immaterielle rettigheter', english: 'intellectual property rights' },
  { norwegian: 'klimaendringer', english: 'climate change' },
  { norwegian: 'lederskap', english: 'leadership' },
  { norwegian: 'mikrofinans', english: 'microfinance' },
  { norwegian: 'nyskaping', english: 'innovation' },
  { norwegian: 'omstillingsdyktig', english: 'adaptable' },
  { norwegian: 'proaktiv', english: 'proactive' },
  { norwegian: 'ressursforvaltning', english: 'resource management' },
  { norwegian: 'samfunnsvitenskap', english: 'social science' },
  { norwegian: 'teknologisk disrupsjon', english: 'technological disruption' },
  { norwegian: 'utviklingspolitikk', english: 'development policy' },
  { norwegian: 'virkelighetsoppfatning', english: 'perception of reality' },
  { norwegian: 'økonomisk bærekraft', english: 'economic sustainability' },
  { norwegian: 'å analysere', english: 'to analyze' },
  { norwegian: 'å argumentere', english: 'to argue' },
  { norwegian: 'å bidra', english: 'to contribute' },
  { norwegian: 'å betrakte', english: 'to consider' },
  { norwegian: 'å bevise', english: 'to prove' },
  { norwegian: 'å diskutere', english: 'to discuss' },
  { norwegian: 'å evaluere', english: 'to evaluate' },
  { norwegian: 'å forbedre', english: 'to improve' },
  { norwegian: 'å forhandle', english: 'to negotiate' },
  { norwegian: 'å formidle', english: 'to convey' },
  { norwegian: 'å forskjønne', english: 'to embellish' },
  { norwegian: 'å forstå', english: 'to understand' },
  { norwegian: 'å forutse', english: 'to anticipate' },
  { norwegian: 'å fremheve', english: 'to highlight' },
  { norwegian: 'å gjennomføre', english: 'to implement' },
  { norwegian: 'å gjenspeile', english: 'to reflect' },
  { norwegian: 'å granske', english: 'to investigate' },
  { norwegian: 'å handle', english: 'to act' },
  { norwegian: 'å identifisere', english: 'to identify' },
  { norwegian: 'å innovere', english: 'to innovate' },
  { norwegian: 'å integrere', english: 'to integrate' },
  { norwegian: 'å kritisere', english: 'to criticize' },
  { norwegian: 'å lede', english: 'to lead' },
  { norwegian: 'å løse', english: 'to solve' },
  { norwegian: 'å mediere', english: 'to mediate' },
  { norwegian: 'å observere', english: 'to observe' },
  { norwegian: 'å oppnå', english: 'to achieve' },
  { norwegian: 'å opprettholde', english: 'to maintain' },
  { norwegian: 'å overbevise', english: 'to convince' },
  { norwegian: 'å overvinne', english: 'to overcome' },
  { norwegian: 'å påvirke', english: 'to influence' },
  { norwegian: 'å reflektere', english: 'to reflect' },
  { norwegian: 'å regulere', english: 'to regulate' },
  { norwegian: 'å relatere', english: 'to relate' },
  { norwegian: 'å representere', english: 'to represent' },
  { norwegian: 'å resonnere', english: 'to reason' },
  { norwegian: 'å respektere', english: 'to respect' },
  { norwegian: 'å revidere', english: 'to revise' },
  { norwegian: 'å sammenligne', english: 'to compare' },
  { norwegian: 'å samtykke', english: 'to consent' },
  { norwegian: 'å simulere', english: 'to simulate' },
  { norwegian: 'å spesifisere', english: 'to specify' },
  { norwegian: 'å stimulere', english: 'to stimulate' },
  { norwegian: 'å tolke', english: 'to interpret' },
  { norwegian: 'å transformere', english: 'to transform' },
  { norwegian: 'å utforske', english: 'to explore' },
  { norwegian: 'å utforme', english: 'to design' },
  { norwegian: 'å utvikle', english: 'to develop' },
  { norwegian: 'å vurdere', english: 'to assess' },
  { norwegian: 'å øke', english: 'to increase' },
  { norwegian: 'å akseptere', english: 'to accept' },
  { norwegian: 'å anbefale', english: 'to recommend' },
  { norwegian: 'å arrangere', english: 'to arrange' },
  { norwegian: 'å avsløre', english: 'to reveal' },
  { norwegian: 'å behandle', english: 'to treat' },
  { norwegian: 'å beskrive', english: 'to describe' },
  { norwegian: 'å bestemme', english: 'to decide' },
  { norwegian: 'å bevare', english: 'to preserve' },
  { norwegian: 'å delta', english: 'to participate' },
  { norwegian: 'å diskutere', english: 'to discuss' },
  { norwegian: 'å eksistere', english: 'to exist' },
  { norwegian: 'å forklare', english: 'to explain' },
  { norwegian: 'å forlate', english: 'to leave' },
  { norwegian: 'å forstå', english: 'to understand' },
  { norwegian: 'å fortelle', english: 'to tell' },
  { norwegian: 'å fremstå', english: 'to appear' },
  { norwegian: 'å fylle', english: 'to fill' },
  { norwegian: 'å gjelde', english: 'to apply' },
  { norwegian: 'å gjennomføre', english: 'to carry out' },
  { norwegian: 'å gråte', english: 'to cry' },
  { norwegian: 'å håpe', english: 'to hope' },
  { norwegian: 'å huske', english: 'to remember' },
  { norwegian: 'å inkludere', english: 'to include' },
  { norwegian: 'å innrømme', english: 'to admit' },
  { norwegian: 'å kjempe', english: 'to fight' },
  { norwegian: 'å klare', english: 'to manage' },
  { norwegian: 'å kombinere', english: 'to combine' },
  { norwegian: 'å kommentere', english: 'to comment' },
  { norwegian: 'å kontakte', english: 'to contact' },
  { norwegian: 'å kritisere', english: 'to criticize' },
  { norwegian: 'å le', english: 'to laugh' },
  { norwegian: 'å levere', english: 'to deliver' },
  { norwegian: 'å like', english: 'to like' },
  { norwegian: 'å lykkes', english: 'to succeed' },
  { norwegian: 'å møte', english: 'to meet' },
  { norwegian: 'å nevne', english: 'to mention' },
  { norwegian: 'å observere', english: 'to observe' },
  { norwegian: 'å oppdage', english: 'to discover' },
  { norwegian: 'å oppleve', english: 'to experience' },
  { norwegian: 'å oppnå', english: 'to achieve' },
  { norwegian: 'å organisere', english: 'to organize' },
  { norwegian: 'å planlegge', english: 'to plan' },
  { norwegian: 'å presentere', english: 'to present' },
  { norwegian: 'å reagere', english: 'to react' },
  { norwegian: 'å reise', english: 'to travel' },
  { norwegian: 'å respektere', english: 'to respect' },
  { norwegian: 'å skape', english: 'to create' },
  { norwegian: 'å studere', english: 'to study' },
  { norwegian: 'å tenke', english: 'to think' },
  { norwegian: 'å uttrykke', english: 'to express' },
  { norwegian: 'å velge', english: 'to choose' },
  { norwegian: 'å arbeide', english: 'to work' },
  { norwegian: 'å begynne', english: 'to begin' },
  { norwegian: 'å besøke', english: 'to visit' },
  { norwegian: 'å betale', english: 'to pay' },
  { norwegian: 'å bo', english: 'to live' },
  { norwegian: 'å bry', english: 'to care' },
  { norwegian: 'å dra', english: 'to go' },
  { norwegian: 'å drikke', english: 'to drink' },
  { norwegian: 'å elske', english: 'to love' },
  { norwegian: 'å finne', english: 'to find' },
  { norwegian: 'å forlate', english: 'to leave' },
  { norwegian: 'å forstå', english: 'to understand' },
  { norwegian: 'å få', english: 'to receive' },
  { norwegian: 'å gi', english: 'to give' },
  { norwegian: 'å gå', english: 'to walk' },
  { norwegian: 'å ha', english: 'to have' },
  { norwegian: 'å hate', english: 'to hate' },
  { norwegian: 'å hjelpe', english: 'to help' },
  { norwegian: 'å høre', english: 'to hear' },
  { norwegian: 'å kjøpe', english: 'to buy' },
  { norwegian: 'å komme', english: 'to come' },
  { norwegian: 'å kunne', english: 'to be able to' },
  { norwegian: 'å le', english: 'to laugh' },
  { norwegian: 'å leke', english: 'to play' },
  { norwegian: 'å lese', english: 'to read' },
  { norwegian: 'å like', english: 'to like' },
  { norwegian: 'å lytte', english: 'to listen' },
  { norwegian: 'å lage', english: 'to make' },
  { norwegian: 'å miste', english: 'to lose' },
  { norwegian: 'å motta', english: 'to receive' },
  { norwegian: 'å måtte', english: 'to have to' },
  { norwegian: 'å reise', english: 'to travel' },
  { norwegian: 'å ringe', english: 'to call' },
  { norwegian: 'å si', english: 'to say' },
  { norwegian: 'å se', english: 'to see' },
  { norwegian: 'å selge', english: 'to sell' },
  { norwegian: 'å sende', english: 'to send' },
  { norwegian: 'å sette', english: 'to put' },
  { norwegian: 'å sitte', english: 'to sit' },
  { norwegian: 'å skjønne', english: 'to understand' },
  { norwegian: 'å skrive', english: 'to write' },
  { norwegian: 'å snakke', english: 'to talk' },
  { norwegian: 'å sove', english: 'to sleep' },
  { norwegian: 'å spille', english: 'to play' },
  { norwegian: 'å spise', english: 'to eat' },
  { norwegian: 'å stå', english: 'to stand' },
  { norwegian: 'å studere', english: 'to study' },
  { norwegian: 'å synge', english: 'to sing' },
  { norwegian: 'å ta', english: 'to take' },
  { norwegian: 'å tenke', english: 'to think' },
  { norwegian: 'å ville', english: 'to want' },
  { norwegian: 'å avhenge', english: 'to depend' },
  { norwegian: 'å berike', english: 'to enrich' },
  { norwegian: 'å dedusere', english: 'to deduce' },
  { norwegian: 'å differensiere', english: 'to differentiate' },
  { norwegian: 'å eliminere', english: 'to eliminate' },
  { norwegian: 'å engasjere', english: 'to engage' },
  { norwegian: 'å etablere', english: 'to establish' },
  { norwegian: 'å evaluere', english: 'to evaluate' },
  { norwegian: 'å forankre', english: 'to anchor' },
  { norwegian: 'å forbli', english: 'to remain' },
  { norwegian: 'å forutsi', english: 'to predict' },
  { norwegian: 'å fremme', english: 'to promote' },
  { norwegian: 'å fjerne', english: 'to remove' },
  { norwegian: 'å generere', english: 'to generate' },
  { norwegian: 'å godkjenne', english: 'to approve' },
  { norwegian: 'å harmonisere', english: 'to harmonize' },
  { norwegian: 'å implementere', english: 'to implement' },
  { norwegian: 'å improvisere', english: 'to improvise' },
  { norwegian: 'å inkludere', english: 'to include' },
  { norwegian: 'å insistere', english: 'to insist' },
  { norwegian: 'å integrere', english: 'to integrate' },
  { norwegian: 'å intensivere', english: 'to intensify' },
  { norwegian: 'å intervenere', english: 'to intervene' },
  { norwegian: 'å kategorisere', english: 'to categorize' },
  { norwegian: 'å konsolidere', english: 'to consolidate' },
  { norwegian: 'å konvertere', english: 'to convert' },
  { norwegian: 'å koordinere', english: 'to coordinate' },
  { norwegian: 'å korrelere', english: 'to correlate' },
  { norwegian: 'å kritisere', english: 'to criticize' },
  { norwegian: 'å manipulere', english: 'to manipulate' },
  { norwegian: 'å maksimere', english: 'to maximize' },
  { norwegian: 'å minimere', english: 'to minimize' },
  { norwegian: 'å modifisere', english: 'to modify' },
  { norwegian: 'å navigere', english: 'to navigate' },
  { norwegian: 'å normalisere', english: 'to normalize' },
  { norwegian: 'å observere', english: 'to observe' },
  { norwegian: 'å optimalisere', english: 'to optimize' },
  { norwegian: 'å organisere', english: 'to organize' },
  { norwegian: 'å orientere', english: 'to orient' },
  { norwegian: 'å overgå', english: 'to surpass' },
  { norwegian: 'å overholde', english: 'to comply' },
  { norwegian: 'å oversette', english: 'to translate' },
  { norwegian: 'å prioritere', english: 'to prioritize' },
  { norwegian: 'å problematisere', english: 'to problematize' },
  { norwegian: 'å produsere', english: 'to produce' },
  { norwegian: 'å projisere', english: 'to project' },
  { norwegian: 'å promotere', english: 'to promote' },
  { norwegian: 'å reformere', english: 'to reform' },
  { norwegian: 'å regulere', english: 'to regulate' },
  { norwegian: 'å relatere', english: 'to relate' },
  { norwegian: 'å anerkjenne', english: 'to acknowledge' },
  { norwegian: 'å ansette', english: 'to employ' },
  { norwegian: 'å avvise', english: 'to reject' },
  { norwegian: 'å beundre', english: 'to admire' },
  { norwegian: 'å bevise', english: 'to prove' },
  { norwegian: 'å bidra', english: 'to contribute' },
  { norwegian: 'å diskutere', english: 'to discuss' },
  { norwegian: 'å endre', english: 'to change' },
  { norwegian: 'å erfare', english: 'to experience' },
  { norwegian: 'å erklære', english: 'to declare' },
  { norwegian: 'å etterspørre', english: 'to request' },
  { norwegian: 'å forenkle', english: 'to simplify' },
  { norwegian: 'å foretrekke', english: 'to prefer' },
  { norwegian: 'å forklare', english: 'to explain' },
  { norwegian: 'å forlenge', english: 'to extend' },
  { norwegian: 'å fornye', english: 'to renew' },
  { norwegian: 'å forutsi', english: 'to predict' },
  { norwegian: 'å frykte', english: 'to fear' },
  { norwegian: 'å fylle', english: 'to fill' },
  { norwegian: 'å gjenskape', english: 'to recreate' },
  { norwegian: 'å gjenvinne', english: 'to regain' },
  { norwegian: 'å godta', english: 'to accept' },
  { norwegian: 'å gruble', english: 'to ponder' },
  { norwegian: 'å håndtere', english: 'to handle' },
  { norwegian: 'å hevde', english: 'to claim' },
  { norwegian: 'å hindre', english: 'to prevent' },
  { norwegian: 'å hyggje', english: 'to enjoy' },
  { norwegian: 'å ignorere', english: 'to ignore' },
  { norwegian: 'å imponere', english: 'to impress' },
  { norwegian: 'å innføre', english: 'to introduce' },
  { norwegian: 'å innrømme', english: 'to admit' },
  { norwegian: 'å inspirere', english: 'to inspire' },
  { norwegian: 'å instruere', english: 'to instruct' },
  { norwegian: 'å investere', english: 'to invest' },
  { norwegian: 'å invitere', english: 'to invite' },
  { norwegian: 'å justere', english: 'to adjust' },
  { norwegian: 'å klage', english: 'to complain' },
  { norwegian: 'å koble', english: 'to connect' },
  { norwegian: 'å konfrontere', english: 'to confront' },
  { norwegian: 'å konsentrere', english: 'to concentrate' },
  { norwegian: 'å konsumere', english: 'to consume' },
  { norwegian: 'å kontrollere', english: 'to control' },
  { norwegian: 'å kritisere', english: 'to criticize' },
  { norwegian: 'å lede', english: 'to lead' },
  { norwegian: 'å markere', english: 'to mark' },
  { norwegian: 'å merke', english: 'to notice' },
  { norwegian: 'å navigere', english: 'to navigate' },
  { norwegian: 'å nekte', english: 'to deny' },
  { norwegian: 'å observere', english: 'to observe' },
  { norwegian: 'å oppdage', english: 'to discover' },
  { norwegian: 'å ankomme', english: 'to arrive' },
  { norwegian: 'å avslutte', english: 'to finish' },
  { norwegian: 'å besøke', english: 'to visit' },
  { norwegian: 'å bestille', english: 'to order' },
  { norwegian: 'å betale', english: 'to pay' },
  { norwegian: 'å bære', english: 'to carry' },
  { norwegian: 'å danse', english: 'to dance' },
  { norwegian: 'å dele', english: 'to share' },
  { norwegian: 'å drømme', english: 'to dream' },
  { norwegian: 'å eie', english: 'to own' },
  { norwegian: 'å elske', english: 'to love' },
  { norwegian: 'å erindre', english: 'to remember' },
  { norwegian: 'å falle', english: 'to fall' },
  { norwegian: 'å feste', english: 'to party' },
  { norwegian: 'å finne', english: 'to find' },
  { norwegian: 'å fly', english: 'to fly' },
  { norwegian: 'å flytte', english: 'to move' },
  { norwegian: 'å følge', english: 'to follow' },
  { norwegian: 'å gråte', english: 'to cry' },
  { norwegian: 'å gjemme', english: 'to hide' },
  { norwegian: 'å gjøre', english: 'to do' },
  { norwegian: 'å glede', english: 'to please' },
  { norwegian: 'å håpe', english: 'to hope' },
  { norwegian: 'å hate', english: 'to hate' },
  { norwegian: 'å heve', english: 'to raise' },
  { norwegian: 'å hoppe', english: 'to jump' },
  { norwegian: 'å høre', english: 'to hear' },
  { norwegian: 'å invitere', english: 'to invite' },
  { norwegian: 'å kjøre', english: 'to drive' },
  { norwegian: 'å klatre', english: 'to climb' },
  { norwegian: 'å kjenne', english: 'to know' },
  { norwegian: 'å le', english: 'to smile' },
  { norwegian: 'å lære', english: 'to learn' },
  { norwegian: 'å løpe', english: 'to run' },
  { norwegian: 'å male', english: 'to paint' },
  { norwegian: 'å mene', english: 'to mean' },
  { norwegian: 'å nyte', english: 'to enjoy' },
  { norwegian: 'å passe', english: 'to fit' },
  { norwegian: 'å prøve', english: 'to try' },
  { norwegian: 'å puste', english: 'to breathe' },
  { norwegian: 'å reise', english: 'to travel' },
  { norwegian: 'å rope', english: 'to shout' },
  { norwegian: 'å savne', english: 'to miss' },
  { norwegian: 'å selge', english: 'to sell' },
  { norwegian: 'å sende', english: 'to send' },
  { norwegian: 'å synes', english: 'to think' },
  { norwegian: 'å treffe', english: 'to meet' },
  { norwegian: 'å tro', english: 'to believe' },
  { norwegian: 'å vente', english: 'to wait' },
  { norwegian: 'å ønske', english: 'to wish' },
  { norwegian: 'skyld', english: 'fault' },
  { norwegian: 'svelge', english: 'swallow' },
  { norwegian: 'lysne', english: 'brighten' },
  { norwegian: 'klare seg', english: 'manage' },
  { norwegian: 'ete', english: 'eat' },
  { norwegian: 'stall', english: 'stable' },
  { norwegian: 'hvile', english: 'rest' },
  { norwegian: 'så klart', english: 'of course' },
  { norwegian: 'gnir', english: 'rubs' },
  { norwegian: 'fang', english: 'lap' },
  { norwegian: 'ekkel', english: 'nasty' },
  { norwegian: 'å tasse', english: 'to paw' },
  { norwegian: 'skyld', english: 'fault' },
  { norwegian: 'å utfolde', english: 'to unfold' },
  { norwegian: 'å forholde', english: 'to relate' },
  { norwegian: 'tvert imot', english: 'On the contrary' },
  { norwegian: 'å plage', english: 'to annoy' },
  { norwegian: 'halsen', english: 'throat' },
  { norwegian: 'demper', english: 'dampens' },
  { norwegian: 'lurer meg', english: 'tricks me' },
  { norwegian: 'strengt', english: 'strictly' },
  { norwegian: 'avtar', english: 'decreases' },
  { norwegian: 'kjenne', english: 'feel' },
  { norwegian: 'betraktelig', english: 'considerably' },
  { norwegian: 'minsker', english: 'decreases' },
  { norwegian: 'befriende', english: 'liberating' },
  { norwegian: 'foreta meg', english: 'make me' },
  { norwegian: 'merkelig', english: 'strange' },
  { norwegian: 'voldsomt', english: 'violently' },
  { norwegian: 'omtrent', english: 'approximately' },
  { norwegian: 'nevne', english: 'mention' },
  { norwegian: 'forberede', english: 'prepare' },
  { norwegian: 'å drøye', english: 'to linger' },
  { norwegian: 'det får være', english: 'it may be' },
  { norwegian: 'skyte', english: 'shoot' },
  { norwegian: 'påkjenning', english: 'strain' },
  { norwegian: 'kjeks', english: 'biscuit' },
  { norwegian: 'ordner opp', english: 'fix' },
  { norwegian: 'trenger gjennom', english: 'penetrate through' },
  { norwegian: 'det trenger inn', english: 'it penetrates' },
  { norwegian: 'appellerer', english: 'appeals' },
  { norwegian: 'ensom', english: 'lonely' },
  { norwegian: 'ørken', english: 'desert' },
  { norwegian: 'en eller annen', english: 'one or another' },
  { norwegian: 'foregår', english: 'takes place' },
  { norwegian: 'reklame', english: 'advertising' },
  { norwegian: 'behagelig', english: 'agreeable' },
];
function Io(e) {
  for (let t = e.length - 1; t > 0; t--) {
    const n = Math.floor(Math.random() * (t + 1));
    [e[t], e[n]] = [e[n], e[t]];
  }
  return e;
}
const J_ = dc('/norsk')({ component: q_ });
function q_() {
  const [e, t] = W.useState(),
    [n, r] = W.useState([]),
    [a, l] = W.useState(''),
    [s, i] = W.useState(5),
    [o, u] = W.useState(0),
    [c, d] = W.useState(!1),
    [f, p] = W.useState([]),
    [g, v] = W.useState(!1),
    [k, m] = W.useState(!1),
    [h, y] = W.useState(!1),
    [w, _] = W.useState(!1),
    [S, E] = W.useState(),
    { width: j, height: O } = Pk(),
    b = Yo({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 100 }),
    P = Yo({ from: { transform: 'scale(0.8)' }, to: { transform: 'scale(1)' }, delay: 300 }),
    [x, T] = Yo(() => ({ to: { scale: 1 }, from: { scale: 1 }, config: { mass: 5, tension: 350, friction: 40 } })),
    L = W.useRef(null),
    z = () => {
      var V;
      (V = L == null ? void 0 : L.current) == null || V.focus();
    },
    U = () => {
      const V = [...X_],
        Y = Io(V),
        ne = Io([...Y]),
        ee = Io([...ne]),
        J = Io([...ee]);
      J.splice(s, J.length - s);
      const q = J.pop();
      t(q), p([...J]), d(!0), _(!1);
    },
    B = V => {
      if ((V.preventDefault(), !e)) {
        alert('No question found');
        return;
      }
      if ((E(e), g))
        if (e.english.toLowerCase() === a.toLowerCase().trim()) {
          alert('Correct!'), n.splice(n.indexOf(e), 1);
          const Y = n.pop();
          Y ? (t(Y), n.unshift(Y), r([...n])) : (_(!0), alert('You have completed the quiz!'), I());
        } else {
          alert(`Incorrect! The correct answer was: ${e.norwegian.toLowerCase()} = ${e.english.toLowerCase()}`);
          let Y = n.pop();
          Y && (t(Y), r([e, ...n]));
        }
      else {
        e.english.toLowerCase() === a.toLowerCase().trim()
          ? alert('Correct!')
          : (alert(`Incorrect! The correct answer was: ${e.norwegian.toLowerCase()} = ${e.english.toLowerCase()}`),
            r([e, ...n])),
          o < s ? u(o + 1) : (_(!0), alert('You have completed the quiz!'), I());
        let Y = f.pop();
        if (Y) t(Y), p([...f]);
        else if (n.length > 0) {
          v(!0);
          const ne = n.pop();
          ne && (t(ne), n.unshift(ne));
        } else alert('You have completed the quiz!'), I();
      }
      l(''), m(!1), y(!1);
    },
    I = () => {
      t(null), r([]), v(!1), d(!1), i(0), u(0);
    },
    N = () => {
      k ? (y(!0), z()) : m(!0);
    },
    M = () => {
      throw (alert('Question reported!'), new Error('Reported question : ' + JSON.stringify(S, null, 2)));
    };
  return K.jsxs('main', {
    className: 'flex min-h-screen flex-col items-center justify-center',
    children: [
      w && K.jsx(ck, { width: j, height: O }),
      K.jsx(Xo.h1, { style: b, className: 'mb-4 text-white', tabIndex: 0, children: 'Practicing Norwegian words' }),
      K.jsx(Xo.section, {
        style: P,
        className: 'w-full max-w-md overflow-y-auto rounded-lg bg-white px-6 py-8 shadow-md',
        'aria-live': 'polite',
        children: c
          ? K.jsxs(K.Fragment, {
              children: [
                K.jsx('h2', {
                  className: 'mb-4 text-xl font-bold text-gray-800',
                  tabIndex: 0,
                  children: 'Translate to English:',
                }),
                g &&
                  K.jsx('div', {
                    className: 'mb-5',
                    children: K.jsxs('p', {
                      tabIndex: 0,
                      children: ['Reviewing ', n.length + (e ? 0 : 1), ' incorrect answers'],
                    }),
                  }),
                K.jsxs('form', {
                  onSubmit: B,
                  className: 'space-y-4',
                  children: [
                    K.jsxs('fieldset', {
                      className: 'w-full',
                      children: [
                        K.jsx('legend', { className: 'sr-only', children: 'Norwegian word to translate' }),
                        K.jsx('div', {
                          className:
                            'flex items-center justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500',
                          'aria-label': 'Current Question',
                          children: K.jsx('p', {
                            className: 'text-lg lowercase text-gray-700',
                            tabIndex: 0,
                            children: e == null ? void 0 : e.norwegian,
                          }),
                        }),
                      ],
                    }),
                    K.jsxs('div', {
                      children: [
                        K.jsx('label', {
                          htmlFor: 'answerInput',
                          className: 'sr-only',
                          children: 'Type your answer here',
                        }),
                        K.jsx('input', {
                          id: 'answerInput',
                          placeholder: 'Type your answer here...',
                          required: !h,
                          disabled: h,
                          type: 'text',
                          value: a,
                          onChange: V => l(V.target.value),
                          className:
                            'w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500',
                          minLength: h ? 0 : 2,
                          'aria-required': !h,
                        }),
                      ],
                    }),
                    K.jsx('button', {
                      ref: L,
                      type: 'submit',
                      className: 'w-full rounded-md bg-indigo-500 py-2 font-medium text-white hover:bg-indigo-600',
                      children: h ? 'Continue' : 'Submit',
                    }),
                  ],
                }),
                h && K.jsx('strong', { tabIndex: 0, children: e == null ? void 0 : e.english }),
                K.jsxs('div', {
                  className: 'mb-4 mt-4 text-sm text-gray-600',
                  tabIndex: 0,
                  children: ['Question ', Math.min(o + 1, s), ' of ', s],
                }),
                !h &&
                  K.jsxs('div', {
                    className: 'mb-10 flex h-3 flex-wrap items-center justify-between',
                    children: [
                      K.jsx('button', {
                        className: 'rounded-md bg-gray-500 px-4 py-2 text-white shadow-md hover:bg-gray-600',
                        onClick: N,
                        type: 'button',
                        'aria-pressed': k ? 'true' : 'false',
                        children: k ? 'show answer' : 'hint',
                      }),
                      k &&
                        K.jsxs('pre', {
                          className: 'text-xl text-gray-700',
                          tabIndex: 0,
                          children: ['Starts with letter: ', e == null ? void 0 : e.english[0]],
                        }),
                    ],
                  }),
              ],
            })
          : K.jsxs(K.Fragment, {
              children: [
                K.jsx('h2', {
                  className: 'mb-4 text-xl font-bold text-gray-800',
                  tabIndex: 0,
                  children: 'How many questions would you like to answer? Minimum 5 and maximum 100',
                }),
                K.jsxs('div', {
                  className: 'mb-4',
                  children: [
                    K.jsx('label', {
                      htmlFor: 'questionLimit',
                      className: 'block text-sm font-medium text-gray-700',
                      children: 'Question Limit',
                    }),
                    K.jsx('input', {
                      id: 'questionLimit',
                      required: !0,
                      type: 'number',
                      value: s,
                      onChange: V => i(Math.max(5, parseInt(V.target.value, 10))),
                      className:
                        'w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500',
                      min: '5',
                      max: '100',
                      'aria-describedby': 'questionLimitHelp',
                    }),
                    K.jsx('p', {
                      id: 'questionLimitHelp',
                      className: 'mt-2 text-sm text-gray-500',
                      children: 'Enter a number between 5 and 100.',
                    }),
                  ],
                }),
                K.jsx('button', {
                  disabled: s < 5 || s > 100,
                  onClick: U,
                  className: 'w-full rounded-md bg-indigo-500 py-2 font-medium text-white hover:bg-indigo-600',
                  children: 'Start the quiz',
                }),
              ],
            }),
      }),
      K.jsx(Xo.button, {
        onMouseEnter: () => T({ scale: 1.1 }),
        onMouseLeave: () => T({ scale: 1 }),
        style: { transform: x.scale.to(V => `scale(${V})`) },
        onClick: M,
        className: 'mt-4 rounded-md bg-pink-500 px-2 py-1 text-sm text-white shadow hover:bg-pink-600',
        'aria-label': 'Report the previous question',
        children: 'Report previous question',
      }),
    ],
  });
}
const Z_ = dc('/')({ component: e1 });
function e1() {
  const e = Yo({
    from: { opacity: 0, transform: 'translate3d(0, 30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { duration: 1e3 },
  });
  return K.jsx('main', {
    className: 'flex min-h-screen flex-col items-center justify-center',
    children: K.jsxs(Xo.article, {
      style: e,
      className: 'max-w-md rounded-lg bg-white px-8 py-6 shadow-lg',
      children: [
        K.jsx('h1', {
          className: 'mb-4 text-center text-3xl font-bold text-gray-800',
          children: 'Master Norwegian Vocabulary',
        }),
        K.jsx('p', {
          className: 'mb-6 text-center text-gray-600',
          children:
            'Discover the power of spaced repetition learning. Boost your linguistic prowess and start your journey to fluency today!',
        }),
        K.jsx('div', {
          className: 'text-center',
          children: K.jsx(Bo, {
            to: '/norsk',
            className:
              'inline-block rounded-lg bg-blue-500 px-6 py-2 text-white transition duration-300 hover:bg-blue-600',
            role: 'button',
            'aria-label': 'Start learning Norwegian vocabulary',
            tabIndex: 0,
            children: 'Start Learning',
          }),
        }),
      ],
    }),
  });
}
const t1 = dc('/english')(),
  n1 = t1
    .update({ path: '/english', getParentRoute: () => ia })
    .lazy(() => h0(() => import('./english.lazy-03rcdNEL.js'), __vite__mapDeps([])).then(e => e.Route)),
  r1 = J_.update({ path: '/norsk', getParentRoute: () => ia }),
  i1 = Z_.update({ path: '/', getParentRoute: () => ia }),
  o1 = ia.addChildren([i1, r1, n1]);
var Im = { exports: {} };
(function (e, t) {
  (function (r, a) {
    e.exports = a();
  })(Uf, function () {
    return (function () {
      var n = {
          './packages/@logrocket/arson/src/index.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.encode = E), (i.decode = b);
            var c = u(o('./node_modules/@babel/runtime/helpers/typeof.js')),
              d = -1,
              f = -2,
              p = -3,
              g = -4,
              v = -5,
              k = Object.create(null),
              m = function (T, L) {
                function z(U) {
                  if (typeof L[U] != 'function')
                    throw new Error(
                      'second argument to ARSON.registerType(' +
                        JSON.stringify(T) +
                        ', ...) must be an object with a ' +
                        U +
                        ' method',
                    );
                }
                z('deconstruct'), z('reconstruct'), (k[T] = L);
              },
              h = Object.prototype.toString,
              y = '[object Date]',
              w = '[object RegExp]',
              _ = '[object Set]',
              S = '[object Map]';
            typeof Buffer == 'function' &&
              typeof Buffer.isBuffer == 'function' &&
              m('Buffer', {
                deconstruct: function (T) {
                  return Buffer.isBuffer(T) && [T.toString('base64'), 'base64'];
                },
                reconstruct: function (T) {
                  return T && Buffer.from(T[0], T[1]);
                },
              }),
              m('Date', {
                deconstruct: function (T) {
                  return h.call(T) === y && [T.toJSON()];
                },
                reconstruct: function (T) {
                  return T && new Date(T[0]);
                },
              }),
              m('RegExp', {
                deconstruct: function (T) {
                  if (h.call(T) === w) {
                    var L = [T.source],
                      z = '';
                    return (
                      T.ignoreCase && (z += 'i'), T.multiline && (z += 'm'), T.global && (z += 'g'), z && L.push(z), L
                    );
                  }
                },
                reconstruct: function (T) {
                  return T && new RegExp(T[0], T[1]);
                },
              }),
              typeof Set == 'function' &&
                typeof Array.from == 'function' &&
                m('Set', {
                  deconstruct: function (T) {
                    if (h.call(T) === _) return Array.from(T);
                  },
                  reconstruct: function (T) {
                    if (T) T.forEach(this.add, this);
                    else return new Set();
                  },
                }),
              typeof Map == 'function' &&
                typeof Array.from == 'function' &&
                m('Map', {
                  deconstruct: function (T) {
                    if (h.call(T) === S) return Array.from(T);
                  },
                  reconstruct: function (T) {
                    if (T)
                      T.forEach(function (L) {
                        this.set(L[0], L[1]);
                      }, this);
                    else return new Map();
                  },
                });
            function E(x) {
              return JSON.stringify(j(x));
            }
            function j(x) {
              var T = [],
                L = typeof Map == 'function' && new Map();
              function z(M) {
                switch ((0, c.default)(M)) {
                  case 'undefined':
                    return d;
                  case 'number':
                    if (isNaN(M)) return p;
                    if (!isFinite(M)) return M < 0 ? v : g;
                }
                var V;
                return (
                  L
                    ? ((V = L.get(M)), typeof V > 'u' && ((V = T.push(M) - 1), L.set(M, V)))
                    : ((V = T.indexOf(M)), V < 0 && (V = T.push(M) - 1)),
                  V
                );
              }
              function U(M) {
                var V = M;
                if (M && (0, c.default)(M) === 'object') {
                  var Y = Object.keys(M);
                  if (O(M)) V = {};
                  else if (Array.isArray(M)) {
                    V = Array(M.length);
                    var ne = M.length;
                    if (ne > Y.length) for (var ee = 0; ee < ne; ++ee) V[ee] = f;
                  } else {
                    for (var J in k) {
                      var q = k[J].deconstruct(M);
                      if (q) {
                        for (var ee = 0; ee < q.length; ++ee) q[ee] = z(q[ee]);
                        return q.unshift(J), q;
                      }
                    }
                    return {}.toString.call(M);
                  }
                  Y.forEach(function (te) {
                    V[te] = z(M[te]);
                  });
                }
                return V;
              }
              var B = z(x);
              if (B < 0) return B;
              for (var I = [], N = 0; N < T.length; ++N) I[N] = U(T[N]);
              return I;
            }
            function O(x) {
              var T = x && (0, c.default)(x) === 'object';
              if (T) {
                var L = Object.getPrototypeOf ? Object.getPrototypeOf(x) : x.__proto__;
                return L === Object.prototype;
              }
              return !1;
            }
            function b(x) {
              return P(JSON.parse(x));
            }
            function P(x) {
              if (typeof x == 'number' && x < 0) return z(x);
              var T = new Array(x.length);
              function L(I) {
                return I in T ? T[I] : (T[I] = z(I));
              }
              function z(I) {
                if (I < 0) {
                  if (I === d || I === f) return;
                  if (I === p) return NaN;
                  if (I === g) return 1 / 0;
                  if (I === v) return -1 / 0;
                  throw new Error('invalid ARSON index: ' + I);
                }
                var N = x[I];
                if (N && (0, c.default)(N) === 'object') {
                  if (Array.isArray(N)) {
                    var M = N[0];
                    if (typeof M == 'string' && M in k) {
                      var V = k[M].reconstruct,
                        Y = V();
                      return (
                        Y && U.push({ reconstruct: V, empty: Y, argIndexes: N.slice(1) }),
                        (x[I] = Y || V(N.slice(1).map(L)))
                      );
                    }
                  }
                  B.push(N);
                }
                return N;
              }
              var U = [],
                B = [];
              return (
                x.forEach(function (I, N) {
                  L(N);
                }),
                U.forEach(function (I) {
                  I.args = I.argIndexes.map(L);
                }),
                B.forEach(function (I) {
                  Object.keys(I).forEach(function (N) {
                    var M = I[N];
                    if (typeof M == 'number')
                      if (M < 0) {
                        if (M === f) {
                          delete I[N];
                          return;
                        }
                        I[N] = L(M);
                      } else I[N] = x[M];
                  });
                }),
                U.forEach(function (I) {
                  I.reconstruct.call(I.empty, I.args);
                }),
                x[0]
              );
            }
          },
          './packages/@logrocket/console/src/index.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = void 0);
            var c = u(o('./packages/@logrocket/console/src/registerConsole.js')),
              d = c.default;
            i.default = d;
          },
          './packages/@logrocket/console/src/registerConsole.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = p);
            var c = u(o('./node_modules/@babel/runtime/helpers/typeof.js')),
              d = u(o('./packages/@logrocket/utils/src/enhanceFunc.js')),
              f = o('./packages/@logrocket/exceptions/src/index.js');
            function p(g) {
              var v = [],
                k = ['log', 'warn', 'info', 'error', 'debug'];
              return (
                k.forEach(function (m) {
                  v.push(
                    (0, d.default)(console, m, function () {
                      for (var h = arguments.length, y = new Array(h), w = 0; w < h; w++) y[w] = arguments[w];
                      g.addEvent('lr.core.LogEvent', function () {
                        var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                          S = _.isEnabled;
                        return ((0, c.default)(S) === 'object' && S[m] === !1) || S === !1
                          ? null
                          : (m === 'error' &&
                              _.shouldAggregateConsoleErrors &&
                              f.Capture.captureMessage(g, y[0], y, {}, !0),
                            { logLevel: m.toUpperCase(), args: y });
                      });
                    }),
                  );
                }),
                function () {
                  v.forEach(function (m) {
                    return m();
                  });
                }
              );
            }
          },
          './packages/@logrocket/exceptions/src/Capture.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.captureMessage = p), (i.captureException = g);
            var c = o('./packages/@logrocket/utils/src/index.ts'),
              d = u(o('./packages/@logrocket/utils/src/TraceKit.js')),
              f = u(o('./packages/@logrocket/exceptions/src/stackTraceFromError.js'));
            function p(v, k, m) {
              var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
                y = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
                w = {
                  exceptionType: y ? 'CONSOLE' : 'MESSAGE',
                  message: k,
                  messageArgs: m,
                  browserHref: window.location ? window.location.href : '',
                };
              (0, c.scrubException)(w, h),
                v.addEvent('lr.core.Exception', function () {
                  return w;
                });
            }
            function g(v, k) {
              var m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null,
                y = h || d.default.computeStackTrace(k),
                w = {
                  exceptionType: 'WINDOW',
                  errorType: y.name,
                  message: y.message,
                  browserHref: window.location ? window.location.href : '',
                };
              (0, c.scrubException)(w, m);
              var _ = { _stackTrace: (0, f.default)(y) };
              v.addEvent(
                'lr.core.Exception',
                function () {
                  return w;
                },
                _,
              );
            }
          },
          './packages/@logrocket/exceptions/src/index.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js'),
              c = o('./node_modules/@babel/runtime/helpers/typeof.js');
            Object.defineProperty(i, '__esModule', { value: !0 }),
              Object.defineProperty(i, 'registerExceptions', {
                enumerable: !0,
                get: function () {
                  return d.default;
                },
              }),
              (i.Capture = void 0);
            var d = u(o('./packages/@logrocket/exceptions/src/registerExceptions.js')),
              f = g(o('./packages/@logrocket/exceptions/src/Capture.js'));
            i.Capture = f;
            function p(v) {
              if (typeof WeakMap != 'function') return null;
              var k = new WeakMap(),
                m = new WeakMap();
              return (p = function (y) {
                return y ? m : k;
              })(v);
            }
            function g(v, k) {
              if (!k && v && v.__esModule) return v;
              if (v === null || (c(v) !== 'object' && typeof v != 'function')) return { default: v };
              var m = p(k);
              if (m && m.has(v)) return m.get(v);
              var h = {},
                y = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var w in v)
                if (w !== 'default' && Object.prototype.hasOwnProperty.call(v, w)) {
                  var _ = y ? Object.getOwnPropertyDescriptor(v, w) : null;
                  _ && (_.get || _.set) ? Object.defineProperty(h, w, _) : (h[w] = v[w]);
                }
              return (h.default = v), m && m.set(v, h), h;
            }
          },
          './packages/@logrocket/exceptions/src/raven/raven.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = void 0);
            var c = u(o('./node_modules/@babel/runtime/helpers/classCallCheck.js')),
              d = u(o('./node_modules/@babel/runtime/helpers/createClass.js')),
              f = u(o('./packages/@logrocket/utils/src/TraceKit.js')),
              p = Object.prototype;
            function g(w) {
              return w === void 0;
            }
            function v(w) {
              return typeof w == 'function';
            }
            function k(w, _) {
              return p.hasOwnProperty.call(w, _);
            }
            function m(w, _, S, E) {
              var j = w[_];
              (w[_] = S(j)), E && E.push([w, _, j]);
            }
            var h = typeof window < 'u' ? window : typeof o.g < 'u' ? o.g : typeof self < 'u' ? self : {};
            h.document;
            var y = (function () {
              function w(_) {
                var S = _.captureException;
                (0, c.default)(this, w),
                  (this._errorHandler = this._errorHandler.bind(this)),
                  (this._ignoreOnError = 0),
                  (this._wrappedBuiltIns = []),
                  (this.captureException = S),
                  f.default.report.subscribe(this._errorHandler),
                  this._instrumentTryCatch();
              }
              return (
                (0, d.default)(w, [
                  {
                    key: 'uninstall',
                    value: function () {
                      f.default.report.unsubscribe(this._errorHandler);
                      for (var S; this._wrappedBuiltIns.length; ) {
                        S = this._wrappedBuiltIns.shift();
                        var E = S[0],
                          j = S[1],
                          O = S[2];
                        E[j] = O;
                      }
                    },
                  },
                  {
                    key: '_errorHandler',
                    value: function (S) {
                      this._ignoreOnError || this.captureException(S);
                    },
                  },
                  {
                    key: '_ignoreNextOnError',
                    value: function () {
                      var S = this;
                      (this._ignoreOnError += 1),
                        setTimeout(function () {
                          S._ignoreOnError -= 1;
                        });
                    },
                  },
                  {
                    key: 'context',
                    value: function (S, E, j) {
                      return v(S) && ((j = E || []), (E = S), (S = void 0)), this.wrap(S, E).apply(this, j);
                    },
                  },
                  {
                    key: 'wrap',
                    value: function (S, E, j) {
                      var O = this;
                      if (g(E) && !v(S)) return S;
                      if ((v(S) && ((E = S), (S = void 0)), !v(E))) return E;
                      try {
                        if (E.__lr__) return E;
                        if (E.__lr_wrapper__) return E.__lr_wrapper__;
                        if (!Object.isExtensible(E)) return E;
                      } catch {
                        return E;
                      }
                      function b() {
                        var x = [],
                          T = arguments.length,
                          L = !S || (S && S.deep !== !1);
                        for (j && v(j) && j.apply(this, arguments); T--; )
                          x[T] = L ? O.wrap(S, arguments[T]) : arguments[T];
                        try {
                          return E.apply(this, x);
                        } catch (z) {
                          throw (O._ignoreNextOnError(), O.captureException(f.default.computeStackTrace(z), S), z);
                        }
                      }
                      for (var P in E) k(E, P) && (b[P] = E[P]);
                      return (b.prototype = E.prototype), (E.__lr_wrapper__ = b), (b.__lr__ = !0), (b.__inner__ = E), b;
                    },
                  },
                  {
                    key: '_instrumentTryCatch',
                    value: function () {
                      var S = this,
                        E = S._wrappedBuiltIns;
                      function j(T) {
                        return function (L, z) {
                          for (var U = new Array(arguments.length), B = 0; B < U.length; ++B) U[B] = arguments[B];
                          var I = U[0];
                          return v(I) && (U[0] = S.wrap(I)), T.apply ? T.apply(this, U) : T(U[0], U[1]);
                        };
                      }
                      function O(T) {
                        var L = h[T] && h[T].prototype;
                        L &&
                          L.hasOwnProperty &&
                          L.hasOwnProperty('addEventListener') &&
                          (m(
                            L,
                            'addEventListener',
                            function (z) {
                              return function (U, B, I, N) {
                                try {
                                  B && B.handleEvent && (B.handleEvent = S.wrap(B.handleEvent));
                                } catch {}
                                var M;
                                return z.call(this, U, S.wrap(B, void 0, M), I, N);
                              };
                            },
                            E,
                          ),
                          m(
                            L,
                            'removeEventListener',
                            function (z) {
                              return function (U, B, I, N) {
                                try {
                                  B = B && (B.__lr_wrapper__ ? B.__lr_wrapper__ : B);
                                } catch {}
                                return z.call(this, U, B, I, N);
                              };
                            },
                            E,
                          ));
                      }
                      m(h, 'setTimeout', j, E),
                        m(h, 'setInterval', j, E),
                        h.requestAnimationFrame &&
                          m(
                            h,
                            'requestAnimationFrame',
                            function (T) {
                              return function (L) {
                                return T(S.wrap(L));
                              };
                            },
                            E,
                          );
                      for (
                        var b = [
                            'EventTarget',
                            'Window',
                            'Node',
                            'ApplicationCache',
                            'AudioTrackList',
                            'ChannelMergerNode',
                            'CryptoOperation',
                            'EventSource',
                            'FileReader',
                            'HTMLUnknownElement',
                            'IDBDatabase',
                            'IDBRequest',
                            'IDBTransaction',
                            'KeyOperation',
                            'MediaController',
                            'MessagePort',
                            'ModalWindow',
                            'Notification',
                            'SVGElementInstance',
                            'Screen',
                            'TextTrack',
                            'TextTrackCue',
                            'TextTrackList',
                            'WebSocket',
                            'WebSocketWorker',
                            'Worker',
                            'XMLHttpRequest',
                            'XMLHttpRequestEventTarget',
                            'XMLHttpRequestUpload',
                          ],
                          P = 0;
                        P < b.length;
                        P++
                      )
                        O(b[P]);
                      var x = h.jQuery || h.$;
                      x &&
                        x.fn &&
                        x.fn.ready &&
                        m(
                          x.fn,
                          'ready',
                          function (T) {
                            return function (L) {
                              return T.call(this, S.wrap(L));
                            };
                          },
                          E,
                        );
                    },
                  },
                ]),
                w
              );
            })();
            i.default = y;
          },
          './packages/@logrocket/exceptions/src/registerExceptions.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js'),
              c = o('./node_modules/@babel/runtime/helpers/typeof.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = v);
            var d = u(o('./packages/@logrocket/exceptions/src/raven/raven.js')),
              f = g(o('./packages/@logrocket/exceptions/src/Capture.js'));
            function p(k) {
              if (typeof WeakMap != 'function') return null;
              var m = new WeakMap(),
                h = new WeakMap();
              return (p = function (w) {
                return w ? h : m;
              })(k);
            }
            function g(k, m) {
              if (!m && k && k.__esModule) return k;
              if (k === null || (c(k) !== 'object' && typeof k != 'function')) return { default: k };
              var h = p(m);
              if (h && h.has(k)) return h.get(k);
              var y = {},
                w = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var _ in k)
                if (_ !== 'default' && Object.prototype.hasOwnProperty.call(k, _)) {
                  var S = w ? Object.getOwnPropertyDescriptor(k, _) : null;
                  S && (S.get || S.set) ? Object.defineProperty(y, _, S) : (y[_] = k[_]);
                }
              return (y.default = k), h && h.set(k, y), y;
            }
            function v(k) {
              var m = new d.default({
                  captureException: function (w) {
                    f.captureException(k, null, null, w);
                  },
                }),
                h = function (w) {
                  k.addEvent('lr.core.Exception', function () {
                    return { exceptionType: 'UNHANDLED_REJECTION', message: w.reason || 'Unhandled Promise rejection' };
                  });
                };
              return (
                window.addEventListener('unhandledrejection', h),
                function () {
                  window.removeEventListener('unhandledrejection', h), m.uninstall();
                }
              );
            }
          },
          './packages/@logrocket/exceptions/src/stackTraceFromError.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = o);
            function o(u) {
              function c(d) {
                return d === null ? void 0 : d;
              }
              return u.stack
                ? u.stack.map(function (d) {
                    return {
                      lineNumber: c(d.line),
                      columnNumber: c(d.column),
                      fileName: c(d.url),
                      functionName: c(d.func),
                    };
                  })
                : void 0;
            }
          },
          './packages/@logrocket/network/src/fetchIntercept.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = void 0);
            var c = u(o('./node_modules/@babel/runtime/helpers/toConsumableArray.js')),
              d = o('./packages/@logrocket/network/src/registerXHR.js'),
              f = [];
            function p(m, h) {
              for (
                var y = f.reduce(function (j, O) {
                    return [O].concat(j);
                  }, []),
                  w = arguments.length,
                  _ = new Array(w > 2 ? w - 2 : 0),
                  S = 2;
                S < w;
                S++
              )
                _[S - 2] = arguments[S];
              var E = Promise.resolve(_);
              return (
                y.forEach(function (j) {
                  var O = j.request,
                    b = j.requestError;
                  (O || b) &&
                    (E = E.then(
                      function (P) {
                        return O.apply(void 0, [h].concat((0, c.default)(P)));
                      },
                      function (P) {
                        return b.apply(void 0, [h].concat((0, c.default)(P)));
                      },
                    ));
                }),
                (E = E.then(function (j) {
                  (0, d.setActive)(!1);
                  var O, b;
                  try {
                    O = m.apply(void 0, (0, c.default)(j));
                  } catch (P) {
                    b = P;
                  }
                  if (((0, d.setActive)(!0), b)) throw b;
                  return O;
                })),
                y.forEach(function (j) {
                  var O = j.response,
                    b = j.responseError;
                  (O || b) &&
                    (E = E.then(
                      function (P) {
                        return O(h, P);
                      },
                      function (P) {
                        return b && b(h, P);
                      },
                    ));
                }),
                E
              );
            }
            function g(m) {
              if (!(!m.fetch || !m.Promise)) {
                var h = m.fetch.polyfill;
                (m.fetch = (function (y) {
                  var w = 0;
                  return function () {
                    for (var _ = arguments.length, S = new Array(_), E = 0; E < _; E++) S[E] = arguments[E];
                    return p.apply(void 0, [y, w++].concat(S));
                  };
                })(m.fetch)),
                  h && (m.fetch.polyfill = h);
              }
            }
            var v = !1,
              k = {
                register: function (h) {
                  return (
                    v || ((v = !0), g(window)),
                    f.push(h),
                    function () {
                      var y = f.indexOf(h);
                      y >= 0 && f.splice(y, 1);
                    }
                  );
                },
                clear: function () {
                  f = [];
                },
              };
            i.default = k;
          },
          './packages/@logrocket/network/src/index.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = y);
            var c = u(o('./node_modules/@babel/runtime/helpers/defineProperty.js')),
              d = u(o('./node_modules/@babel/runtime/helpers/typeof.js')),
              f = u(o('./packages/@logrocket/network/src/registerFetch.js')),
              p = o('./packages/@logrocket/network/src/registerIonic.ts'),
              g = u(o('./packages/@logrocket/network/src/registerNetworkInformation.js')),
              v = u(o('./packages/@logrocket/network/src/registerXHR.js')),
              k = u(o('./packages/@logrocket/utils/src/mapValues.js'));
            function m(w, _) {
              var S = Object.keys(w);
              if (Object.getOwnPropertySymbols) {
                var E = Object.getOwnPropertySymbols(w);
                _ &&
                  (E = E.filter(function (j) {
                    return Object.getOwnPropertyDescriptor(w, j).enumerable;
                  })),
                  S.push.apply(S, E);
              }
              return S;
            }
            function h(w) {
              for (var _ = 1; _ < arguments.length; _++) {
                var S = arguments[_] != null ? arguments[_] : {};
                _ % 2
                  ? m(Object(S), !0).forEach(function (E) {
                      (0, c.default)(w, E, S[E]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(w, Object.getOwnPropertyDescriptors(S))
                    : m(Object(S)).forEach(function (E) {
                        Object.defineProperty(w, E, Object.getOwnPropertyDescriptor(S, E));
                      });
              }
              return w;
            }
            function y(w) {
              var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { isReactNative: !1 },
                S = _.isReactNative,
                E = _.shouldAugmentNPS,
                j = _.shouldParseXHRBlob,
                O = {},
                b = function (N) {
                  var M = 4096e3,
                    V = N;
                  if ((0, d.default)(N) === 'object' && N != null) {
                    var Y = Object.getPrototypeOf(N);
                    (Y === Object.prototype || Y === null) && (V = JSON.stringify(N));
                  }
                  if (V && V.length && V.length > M && typeof V == 'string') {
                    var ne = V.substring(0, 1e3);
                    return ''.concat(
                      ne,
                      ` ... LogRocket truncating to first 1000 characters.
      Keep data under 4MB to prevent truncation. https://docs.logrocket.com/reference/network`,
                    );
                  }
                  return N;
                },
                P = function (N, M) {
                  var V = M.method;
                  w.addEvent('lr.network.RequestEvent', function () {
                    var Y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                      ne = Y.isEnabled,
                      ee = ne === void 0 ? !0 : ne,
                      J = Y.requestSanitizer,
                      q =
                        J === void 0
                          ? function (R) {
                              return R;
                            }
                          : J;
                    if (!ee) return null;
                    var te = null;
                    try {
                      te = q(h(h({}, M), {}, { reqId: N }));
                    } catch (R) {
                      console.error(R);
                    }
                    if (te) {
                      var A = te.url;
                      if (typeof document < 'u' && typeof document.createElement == 'function') {
                        var D = document.createElement('a');
                        (D.href = te.url), (A = D.href);
                      }
                      return {
                        reqId: N,
                        url: A,
                        headers: (0, k.default)(te.headers, function (R) {
                          return ''.concat(R);
                        }),
                        body: b(te.body),
                        method: V,
                        referrer: te.referrer || void 0,
                        mode: te.mode || void 0,
                        credentials: te.credentials || void 0,
                      };
                    }
                    return (O[N] = !0), null;
                  });
                },
                x = function (N, M) {
                  var V = M.method,
                    Y = M.status;
                  w.addEvent('lr.network.ResponseEvent', function () {
                    var ne = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                      ee = ne.isEnabled,
                      J = ee === void 0 ? !0 : ee,
                      q = ne.responseSanitizer,
                      te =
                        q === void 0
                          ? function (D) {
                              return D;
                            }
                          : q;
                    if (J) {
                      if (O[N]) return delete O[N], null;
                    } else return null;
                    var A = null;
                    try {
                      A = te(h(h({}, M), {}, { reqId: N }));
                    } catch (D) {
                      console.error(D);
                    }
                    return A
                      ? {
                          reqId: N,
                          status: A.status,
                          headers: (0, k.default)(A.headers, function (D) {
                            return ''.concat(D);
                          }),
                          body: b(A.body),
                          method: V,
                        }
                      : { reqId: N, status: Y, headers: {}, body: null, method: V };
                  });
                },
                T = function (N) {
                  return w.isDisabled || O[N] === !0;
                },
                L = (0, f.default)({ addRequest: P, addResponse: x, isIgnored: T }),
                z = (0, v.default)({
                  addRequest: P,
                  addResponse: x,
                  isIgnored: T,
                  logger: w,
                  shouldAugmentNPS: E,
                  shouldParseXHRBlob: j,
                }),
                U = (0, p.registerIonic)({ addRequest: P, addResponse: x, isIgnored: T }),
                B = S ? function () {} : (0, g.default)(w);
              return function () {
                B(), L(), z(), U();
              };
            }
          },
          './packages/@logrocket/network/src/registerFetch.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = h);
            var c = u(o('./node_modules/@babel/runtime/helpers/defineProperty.js')),
              d = u(o('./packages/@logrocket/utils/src/mapValues.js')),
              f = u(o('./packages/@logrocket/network/src/fetchIntercept.js'));
            function p(y, w) {
              var _ = Object.keys(y);
              if (Object.getOwnPropertySymbols) {
                var S = Object.getOwnPropertySymbols(y);
                w &&
                  (S = S.filter(function (E) {
                    return Object.getOwnPropertyDescriptor(y, E).enumerable;
                  })),
                  _.push.apply(_, S);
              }
              return _;
            }
            function g(y) {
              for (var w = 1; w < arguments.length; w++) {
                var _ = arguments[w] != null ? arguments[w] : {};
                w % 2
                  ? p(Object(_), !0).forEach(function (S) {
                      (0, c.default)(y, S, _[S]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(_))
                    : p(Object(_)).forEach(function (S) {
                        Object.defineProperty(y, S, Object.getOwnPropertyDescriptor(_, S));
                      });
              }
              return y;
            }
            function v(y) {
              if (y == null || typeof y.forEach != 'function') return y;
              var w = {};
              return (
                y.forEach(function (_, S) {
                  w[S] ? (w[S] = ''.concat(w[S], ',').concat(_)) : (w[S] = ''.concat(_));
                }),
                w
              );
            }
            var k = function (w) {
              return (0, d.default)(v(w), function (_) {
                return ''.concat(_);
              });
            };
            function m() {
              var y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              return {
                url: y.url,
                headers: k(y.headers),
                method: y.method && y.method.toUpperCase(),
                referrer: y.referrer || void 0,
                mode: y.mode || void 0,
                credentials: y.credentials || void 0,
              };
            }
            function h(y) {
              var w = y.addRequest,
                _ = y.addResponse,
                S = y.isIgnored,
                E = 'fetch-',
                j = {},
                O = f.default.register({
                  request: function (P) {
                    for (var x = arguments.length, T = new Array(x > 1 ? x - 1 : 0), L = 1; L < x; L++)
                      T[L - 1] = arguments[L];
                    var z;
                    if (typeof Request < 'u' && T[0] instanceof Request) {
                      var U;
                      try {
                        U = T[0].clone().text();
                      } catch (B) {
                        U = Promise.resolve('LogRocket fetch error: '.concat(B.message));
                      }
                      z = U.then(
                        function (B) {
                          return g(g({}, m(T[0])), {}, { body: B });
                        },
                        function (B) {
                          return g(g({}, m(T[0])), {}, { body: 'LogRocket fetch error: '.concat(B.message) });
                        },
                      );
                    } else
                      z = Promise.resolve(g(g({}, m(T[1])), {}, { url: ''.concat(T[0]), body: (T[1] || {}).body }));
                    return z.then(function (B) {
                      return (j[P] = B.method), w(''.concat(E).concat(P), B), T;
                    });
                  },
                  requestError: function (P, x) {
                    return Promise.reject(x);
                  },
                  response: function (P, x) {
                    var T, L;
                    if (S(''.concat(E).concat(P))) return x;
                    if (x.headers.get('content-type') === 'text/event-stream')
                      L = Promise.resolve('LogRocket skipped consuming an event-stream body.');
                    else {
                      try {
                        T = x.clone();
                      } catch (N) {
                        var z = {
                          url: x.url,
                          status: x.status,
                          headers: k(x.headers),
                          body: 'LogRocket fetch error: '.concat(N.message),
                          method: j[P],
                        };
                        return delete j[P], _(''.concat(E).concat(P), z), x;
                      }
                      try {
                        if (window.TextDecoder && T.body) {
                          var U = T.body.getReader(),
                            B = new window.TextDecoder('utf-8'),
                            I = '';
                          L = U.read().then(function N(M) {
                            var V = M.done,
                              Y = M.value;
                            if (V) return I;
                            var ne = Y ? B.decode(Y, { stream: !0 }) : '';
                            return (I += ne), U.read().then(N);
                          });
                        } else L = T.text();
                      } catch (N) {
                        L = Promise.resolve('LogRocket error reading body: '.concat(N.message));
                      }
                    }
                    return (
                      L.catch(function (N) {
                        if (!(N.name === 'AbortError' && N instanceof DOMException))
                          return 'LogRocket error reading body: '.concat(N.message);
                      }).then(function (N) {
                        var M = { url: x.url, status: x.status, headers: k(x.headers), body: N, method: j[P] };
                        delete j[P], _(''.concat(E).concat(P), M);
                      }),
                      x
                    );
                  },
                  responseError: function (P, x) {
                    var T = { url: void 0, status: 0, headers: {}, body: ''.concat(x) };
                    return _(''.concat(E).concat(P), T), Promise.reject(x);
                  },
                });
              return O;
            }
          },
          './packages/@logrocket/network/src/registerIonic.ts': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }),
              (i.mergeHeaders = U),
              (i.serializeQueryParams = Y),
              (i.appendQueryParamsString = ne),
              (i.processData = q),
              (i.registerIonic = D);
            var c = u(o('./node_modules/@babel/runtime/helpers/defineProperty.js')),
              d = u(o('./node_modules/@babel/runtime/helpers/typeof.js')),
              f = u(o('./node_modules/@babel/runtime/helpers/toConsumableArray.js')),
              p = u(o('./packages/@logrocket/utils/src/protectFunc.js'));
            function g(R, C) {
              var $ = (typeof Symbol < 'u' && R[Symbol.iterator]) || R['@@iterator'];
              if (!$) {
                if (Array.isArray(R) || ($ = v(R)) || (C && R && typeof R.length == 'number')) {
                  $ && (R = $);
                  var H = 0,
                    X = function () {};
                  return {
                    s: X,
                    n: function () {
                      return H >= R.length ? { done: !0 } : { done: !1, value: R[H++] };
                    },
                    e: function (fe) {
                      throw fe;
                    },
                    f: X,
                  };
                }
                throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              var re = !0,
                ie = !1,
                se;
              return {
                s: function () {
                  $ = $.call(R);
                },
                n: function () {
                  var fe = $.next();
                  return (re = fe.done), fe;
                },
                e: function (fe) {
                  (ie = !0), (se = fe);
                },
                f: function () {
                  try {
                    !re && $.return != null && $.return();
                  } finally {
                    if (ie) throw se;
                  }
                },
              };
            }
            function v(R, C) {
              if (R) {
                if (typeof R == 'string') return k(R, C);
                var $ = Object.prototype.toString.call(R).slice(8, -1);
                if (($ === 'Object' && R.constructor && ($ = R.constructor.name), $ === 'Map' || $ === 'Set'))
                  return Array.from(R);
                if ($ === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test($)) return k(R, C);
              }
            }
            function k(R, C) {
              (C == null || C > R.length) && (C = R.length);
              for (var $ = 0, H = new Array(C); $ < C; $++) H[$] = R[$];
              return H;
            }
            function m(R, C) {
              var $ = Object.keys(R);
              if (Object.getOwnPropertySymbols) {
                var H = Object.getOwnPropertySymbols(R);
                C &&
                  (H = H.filter(function (X) {
                    return Object.getOwnPropertyDescriptor(R, X).enumerable;
                  })),
                  $.push.apply($, H);
              }
              return $;
            }
            function h(R) {
              for (var C = 1; C < arguments.length; C++) {
                var $ = arguments[C] != null ? arguments[C] : {};
                C % 2
                  ? m(Object($), !0).forEach(function (H) {
                      (0, c.default)(R, H, $[H]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(R, Object.getOwnPropertyDescriptors($))
                    : m(Object($)).forEach(function (H) {
                        Object.defineProperty(R, H, Object.getOwnPropertyDescriptor($, H));
                      });
              }
              return R;
            }
            var y = new Set(['get', 'put', 'post', 'patch', 'head', 'delete', 'options', 'upload', 'download']),
              w = new Set(['urlencoded', 'json', 'utf8']),
              _ = new Set(['raw', 'multipart']),
              S = 'ionic-',
              E = new Set(['desktop', 'mobileweb', 'pwa']),
              j = new Set(['FormData']),
              O = new Set(),
              b = new Set(['string']),
              P = new Set(['string', 'array']),
              x = {
                utf8: b,
                urlencoded: new Set(['object']),
                json: new Set(['array', 'object']),
                raw: new Set(['Uint8Array', 'ArrayBuffer']),
                default: O,
              };
            function T(R, C, $) {
              if (typeof C != 'string')
                throw new Error(''.concat($, ' must be one of: ').concat((0, f.default)(R).join(', ')));
              if (((C = C.trim().toLowerCase()), !R.has(C)))
                throw new Error(''.concat($, ' must be one of: ').concat((0, f.default)(R).join(', ')));
              return C;
            }
            function L(R, C, $) {
              if ((0, d.default)(R) !== 'object') throw new Error($);
              for (var H = 0, X = Object.keys(R); H < X.length; H++) {
                var re = X[H];
                if (!C.has((0, d.default)(R[re]))) throw new Error($);
              }
              return R;
            }
            function z(R, C) {
              var $ = new URL(R),
                H = $.host;
              return C.getHeaders(H) || null;
            }
            function U(R, C) {
              return h(h({}, R), C);
            }
            function B(R, C, $) {
              var H = $.getHeaders('*') || {},
                X = z(R, $) || {};
              return U(U(H, X), C);
            }
            function I(R, C) {
              return C ? encodeURIComponent(R) : R;
            }
            function N(R, C, $) {
              return R.length
                ? $
                  ? ''.concat(encodeURIComponent(R), '[').concat(encodeURIComponent(C), ']')
                  : ''.concat(R, '[').concat(C, ']')
                : $
                  ? encodeURIComponent(C)
                  : C;
            }
            function M(R, C, $) {
              var H = [],
                X = g(C),
                re;
              try {
                for (X.s(); !(re = X.n()).done; ) {
                  var ie = re.value;
                  if (Array.isArray(ie)) {
                    H.push(M(''.concat(R, '[]'), ie, $));
                    continue;
                  } else if ((0, d.default)(ie) === 'object') {
                    H.push(V(''.concat(R, '[]').concat(ie), $, void 0));
                    continue;
                  }
                  H.push(''.concat(N(R, '', $), '=').concat(I(ie, $)));
                }
              } catch (se) {
                X.e(se);
              } finally {
                X.f();
              }
              return H.join('&');
            }
            function V(R, C, $) {
              var H = [];
              for (var X in C)
                if (C.hasOwnProperty(X)) {
                  var re = R.length ? ''.concat(R, '[').concat(X, ']') : X;
                  if (Array.isArray(C[X])) {
                    H.push(M(re, C[X], $));
                    continue;
                  } else if ((0, d.default)(C[X]) === 'object' && C[X] !== null) {
                    H.push(V(re, C[X], $));
                    continue;
                  }
                  H.push(''.concat(N(R, X, $), '=').concat(I(C[X], $)));
                }
              return H.join('&');
            }
            function Y(R, C) {
              return V('', R, C);
            }
            function ne(R, C) {
              if (!R.length || !C.length) return R;
              var $ = new URL(R),
                H = $.host,
                X = $.pathname,
                re = $.search,
                ie = $.hash,
                se = $.protocol;
              return ''
                .concat(se, '//')
                .concat(H)
                .concat(X)
                .concat(re.length ? ''.concat(re, '&').concat(C) : '?'.concat(C))
                .concat(ie);
            }
            function ee(R) {
              return x[R] || x.default;
            }
            function J(R) {
              return R === 'multipart' ? j : O;
            }
            function q(R, C) {
              var $ = (0, d.default)(R),
                H = ee(C),
                X = J(C);
              if (X.size > 0) {
                var re = !1;
                if (
                  (X.forEach(function (ie) {
                    o.g[ie] && R instanceof o.g[ie] && (re = !0);
                  }),
                  !re)
                )
                  throw new Error('INSTANCE_TYPE_MISMATCH_DATA '.concat((0, f.default)(X).join(', ')));
              }
              if (X.size === 0 && !H.has($))
                throw new Error('TYPE_MISMATCH_DATA '.concat((0, f.default)(H).join(', ')));
              switch (C) {
                case 'utf8':
                  return R;
                default:
                  return JSON.stringify(R, void 0, 2);
              }
            }
            function te(R, C) {
              R = R || {};
              var $,
                H = R.data;
              try {
                $ = T(w, R.serializer || C.getDataSerializer(), 'serializer / words payload type');
              } catch {
                ($ = T(_, R.serializer || C.getDataSerializer(), 'serializer / words payload type')), (H = {});
              }
              return {
                data: H,
                filePath: R.filePath,
                followRedirect: R.followRedirect,
                headers: L(R.headers || {}, b, 'Invalid header type, must be string'),
                method: T(y, R.method || y[0], 'method'),
                name: R.name,
                params: L(R.params || {}, P, 'Invalid param, must be of type string or array'),
                responseType: R.responseType,
                serializer: $,
                connectTimeout: R.connectTimeout,
                readTimeout: R.readTimeout,
                timeout: R.timeout,
              };
            }
            var A = 0;
            function D(R) {
              var C,
                $,
                H,
                X = R.addRequest,
                re = R.addResponse,
                ie = R.isIgnored,
                se =
                  (C = window.cordova) === null || C === void 0 || ($ = C.plugin) === null || $ === void 0
                    ? void 0
                    : $.http,
                de = {},
                fe = !1;
              if (typeof se > 'u') return function () {};
              var Te = (H = window.ionic) === null || H === void 0 ? void 0 : H.platforms;
              if (
                typeof Te < 'u' &&
                typeof Te.some == 'function' &&
                Te.some(function (ge) {
                  return E.has(ge);
                })
              )
                return function () {};
              var qt = se.sendRequest,
                Zt = (0, p.default)(function (ge, rt, xe) {
                  if (!ie(''.concat(S).concat(xe)))
                    try {
                      var Dt = {
                        url: ge.url || '',
                        status: ge.status < 600 && ge.status >= 100 ? ge.status : 0,
                        headers: ge.headers || {},
                        body: rt ? ge.data : ge.error,
                        method: de[xe].toUpperCase(),
                      };
                      re(''.concat(S).concat(xe), Dt);
                    } catch (Ft) {
                      var He = {
                        url: ge.url || '',
                        status: ge.status < 600 && ge.status >= 100 ? ge.status : 0,
                        headers: ge.headers || {},
                        body: 'LogRocket fetch error: '.concat(Ft.message),
                        method: de[xe].toUpperCase(),
                      };
                      re(''.concat(S).concat(xe), He);
                    }
                });
              return (
                (se.sendRequest = function (ge, rt, xe, Dt) {
                  var He = ++A,
                    Ft = function (ot) {
                      fe || (Zt(ot, !0, He), delete de[He]), xe(ot);
                    },
                    en = function (ot) {
                      fe || (Zt(ot, !1, He), delete de[He]), Dt(ot);
                    };
                  if (!fe)
                    try {
                      var it = te(rt, se),
                        pt = ne(ge, V('', it.params, !0)),
                        In = B(ge, it.headers, se),
                        qn = it.method || 'get';
                      de[He] = qn;
                      var F = {
                        url: pt,
                        method: qn.toUpperCase(),
                        headers: In || {},
                        body: q(it.data || {}, it.serializer),
                      };
                      X(''.concat(S).concat(He), F);
                    } catch (mt) {
                      var Tt = {
                        url: ge,
                        method: (rt.method || 'get').toUpperCase(),
                        headers: {},
                        body: 'LogRocket fetch error: '.concat(mt.message),
                      };
                      X(''.concat(S).concat(He), Tt);
                    }
                  return qt(ge, rt, Ft, en);
                }),
                function () {
                  (fe = !0), (se.sendRequest = qt), (de = {});
                }
              );
            }
          },
          './packages/@logrocket/network/src/registerNetworkInformation.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = u);
            var o = { 'slow-2g': 'SLOW2G', '2g': 'TWOG', '3g': 'THREEG', '4g': 'FOURG' };
            function u(c) {
              var d = void 0;
              function f() {
                var p = { online: window.navigator.onLine, effectiveType: 'UNKOWN' };
                window.navigator.onLine
                  ? window.navigator.connection &&
                    window.navigator.connection.effectiveType &&
                    (p.effectiveType = o[window.navigator.connection.effectiveType] || 'UNKNOWN')
                  : (p.effectiveType = 'NONE'),
                  !(d && p.online === d.online && p.effectiveType === d.effectiveType) &&
                    ((d = p),
                    c.addEvent('lr.network.NetworkStatusEvent', function () {
                      var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                        v = g.isEnabled,
                        k = v === void 0 ? !0 : v;
                      return k ? p : null;
                    }));
              }
              return (
                setTimeout(f),
                window.navigator.connection &&
                  typeof window.navigator.connection.addEventListener == 'function' &&
                  window.navigator.connection.addEventListener('change', f),
                window.addEventListener('online', f),
                window.addEventListener('offline', f),
                function () {
                  window.removeEventListener('offline', f),
                    window.removeEventListener('online', f),
                    window.navigator.connection &&
                      typeof window.navigator.connection.removeEventListener == 'function' &&
                      window.navigator.connection.removeEventListener('change', f);
                }
              );
            }
          },
          './packages/@logrocket/network/src/registerXHR.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.setActive = v), (i.default = m);
            var c = u(o('./packages/@logrocket/utils/src/mapValues.js')),
              d = u(o('./packages/@logrocket/utils/src/enhanceFunc.js')),
              f = u(o('./packages/@logrocket/utils/src/startsWith.js')),
              p = o('./packages/@logrocket/utils/src/constants/nps.js'),
              g = !0;
            function v(h) {
              g = h;
            }
            var k = 0;
            function m(h) {
              var y = h.addRequest,
                w = h.addResponse,
                _ = h.isIgnored,
                S = h.logger,
                E = h.shouldAugmentNPS,
                j = E === void 0 ? !0 : E,
                O = h.shouldParseXHRBlob,
                b = O === void 0 ? !1 : O,
                P = XMLHttpRequest,
                x = new WeakMap(),
                T = !1,
                L = 'xhr-';
              return (
                (window._lrXMLHttpRequest = XMLHttpRequest),
                (XMLHttpRequest = function (U, B) {
                  var I = new P(U, B);
                  if (!g) return I;
                  x.set(I, { xhrId: ++k, headers: {} });
                  var N = I.open;
                  function M() {
                    for (var ee = arguments.length, J = new Array(ee), q = 0; q < ee; q++) J[q] = arguments[q];
                    try {
                      var te = J[1];
                      if (window.URL && typeof window.URL == 'function' && te.search(p.WOOTRIC_RESPONSES_REGEX) === 0) {
                        var A = new window.URL(S.recordingURL);
                        A.searchParams.set('nps', 'wootric');
                        var D = new window.URL(te),
                          R = D.searchParams.get('response[text]'),
                          C = R
                            ? ''.concat(
                                R,
                                `

`,
                              )
                            : '';
                        D.searchParams.set(
                          'response[text]',
                          ''.concat(C, '<').concat(A.href, '|View LogRocket session>'),
                        ),
                          (J[1] = D.href);
                      }
                    } catch {}
                    return N.apply(this, J);
                  }
                  var V = I.send;
                  function Y() {
                    for (var ee = arguments.length, J = new Array(ee), q = 0; q < ee; q++) J[q] = arguments[q];
                    try {
                      var te = x.get(I);
                      if (
                        window.URL &&
                        typeof window.URL == 'function' &&
                        te &&
                        te.url &&
                        te.url.search(p.DELIGHTED_RESPONSES_REGEX) === 0 &&
                        J.length &&
                        J[0].indexOf(p.DELIGHTED_FEEDBACK_PREFIX) !== -1
                      ) {
                        var A = new window.URL(S.recordingURL);
                        A.searchParams.set('nps', 'delighted');
                        var D = encodeURIComponent(A.href),
                          R = J[0]
                            .split('&')
                            .map(function (C) {
                              if ((0, f.default)(C, p.DELIGHTED_FEEDBACK_PREFIX)) {
                                var $ = C === p.DELIGHTED_FEEDBACK_PREFIX;
                                return ''
                                  .concat(C)
                                  .concat(
                                    $
                                      ? ''
                                      : `

`,
                                    '<',
                                  )
                                  .concat(D, '|View LogRocket session>');
                              }
                              return C;
                            })
                            .join('&');
                        J[0] = R;
                      }
                    } catch {}
                    return V.apply(this, J);
                  }
                  j && ((I.open = M), (I.send = Y)),
                    (0, d.default)(I, 'open', function (ee, J) {
                      if (!T) {
                        var q = x.get(I);
                        (q.method = ee), (q.url = J);
                      }
                    }),
                    (0, d.default)(I, 'send', function (ee) {
                      if (!T) {
                        var J = x.get(I);
                        if (J) {
                          var q = {
                            url: J.url,
                            method: J.method && J.method.toUpperCase(),
                            headers: (0, c.default)(J.headers || {}, function (te) {
                              return te.join(', ');
                            }),
                            body: ee,
                          };
                          y(''.concat(L).concat(J.xhrId), q);
                        }
                      }
                    }),
                    (0, d.default)(I, 'setRequestHeader', function (ee, J) {
                      if (!T) {
                        var q = x.get(I);
                        q &&
                          ((q.headers = q.headers || {}), (q.headers[ee] = q.headers[ee] || []), q.headers[ee].push(J));
                      }
                    });
                  var ne = {
                    readystatechange: function () {
                      if (!T && I.readyState === 4) {
                        var J = x.get(I);
                        if (!J || _(''.concat(L).concat(J.xhrId))) return;
                        var q = I.getAllResponseHeaders() || '',
                          te = q.split(/[\r\n]+/).reduce(function (C, $) {
                            var H = C,
                              X = $.split(': ');
                            if (X.length > 0) {
                              var re = X.shift(),
                                ie = X.join(': ');
                              C[re] ? (H[re] += ', '.concat(ie)) : (H[re] = ie);
                            }
                            return H;
                          }, {}),
                          A;
                        try {
                          switch (I.responseType) {
                            case 'json':
                              A = S._shouldCloneResponse ? JSON.parse(JSON.stringify(I.response)) : I.response;
                              break;
                            case 'arraybuffer':
                            case 'blob': {
                              A = I.response;
                              break;
                            }
                            case 'document': {
                              A = I.responseXML;
                              break;
                            }
                            case 'text':
                            case '': {
                              A = I.responseText;
                              break;
                            }
                            default:
                              A = '';
                          }
                        } catch {
                          A = 'LogRocket: Error accessing response.';
                        }
                        var D = {
                          url: J.url,
                          status: I.status,
                          headers: te,
                          body: A,
                          method: (J.method || '').toUpperCase(),
                        };
                        if (b && D.body instanceof Blob) {
                          var R = new FileReader();
                          R.readAsText(D.body),
                            (R.onload = function () {
                              try {
                                D.body = JSON.parse(R.result);
                              } catch {}
                              w(''.concat(L).concat(J.xhrId), D);
                            });
                        } else w(''.concat(L).concat(J.xhrId), D);
                      }
                    },
                  };
                  return (
                    Object.keys(ne).forEach(function (ee) {
                      I.addEventListener(ee, ne[ee]);
                    }),
                    I
                  );
                }),
                (XMLHttpRequest.prototype = P.prototype),
                ['UNSENT', 'OPENED', 'HEADERS_RECEIVED', 'LOADING', 'DONE'].forEach(function (z) {
                  XMLHttpRequest[z] = P[z];
                }),
                function () {
                  (T = !0), (XMLHttpRequest = P);
                }
              );
            }
          },
          './packages/@logrocket/now/src/index.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = void 0);
            var o = Date.now.bind(Date),
              u = o(),
              c =
                typeof performance < 'u' && performance.now
                  ? performance.now.bind(performance)
                  : function () {
                      return o() - u;
                    };
            i.default = c;
          },
          './packages/@logrocket/redux/src/createEnhancer.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = v);
            var c = u(o('./node_modules/@babel/runtime/helpers/defineProperty.js')),
              d = u(o('./packages/@logrocket/now/src/index.js'));
            function f(k, m) {
              var h = Object.keys(k);
              if (Object.getOwnPropertySymbols) {
                var y = Object.getOwnPropertySymbols(k);
                m &&
                  (y = y.filter(function (w) {
                    return Object.getOwnPropertyDescriptor(k, w).enumerable;
                  })),
                  h.push.apply(h, y);
              }
              return h;
            }
            function p(k) {
              for (var m = 1; m < arguments.length; m++) {
                var h = arguments[m] != null ? arguments[m] : {};
                m % 2
                  ? f(Object(h), !0).forEach(function (y) {
                      (0, c.default)(k, y, h[y]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(k, Object.getOwnPropertyDescriptors(h))
                    : f(Object(h)).forEach(function (y) {
                        Object.defineProperty(k, y, Object.getOwnPropertyDescriptor(h, y));
                      });
              }
              return k;
            }
            var g = 0;
            function v(k) {
              var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                h = m.stateSanitizer,
                y =
                  h === void 0
                    ? function (S) {
                        return S;
                      }
                    : h,
                w = m.actionSanitizer,
                _ =
                  w === void 0
                    ? function (S) {
                        return S;
                      }
                    : w;
              return function (S) {
                return function (E, j, O) {
                  var b = S(E, j, O),
                    P = b.dispatch,
                    x = g++;
                  k.addEvent('lr.redux.InitialState', function () {
                    var L;
                    try {
                      L = y(b.getState());
                    } catch (z) {
                      console.error(z.toString());
                    }
                    return { state: L, storeId: x };
                  });
                  var T = function (z) {
                    var U = (0, d.default)(),
                      B,
                      I;
                    try {
                      I = P(z);
                    } catch (M) {
                      B = M;
                    } finally {
                      var N = (0, d.default)() - U;
                      k.addEvent('lr.redux.ReduxAction', function () {
                        var M = null,
                          V = null;
                        try {
                          (M = y(b.getState())), (V = _(z));
                        } catch (Y) {
                          console.error(Y.toString());
                        }
                        return M && V ? { storeId: x, action: V, duration: N, stateDelta: M } : null;
                      });
                    }
                    if (B) throw B;
                    return I;
                  };
                  return p(p({}, b), {}, { dispatch: T });
                };
              };
            }
          },
          './packages/@logrocket/redux/src/createMiddleware.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = f);
            var c = u(o('./packages/@logrocket/now/src/index.js')),
              d = 0;
            function f(p) {
              var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                v = g.stateSanitizer,
                k =
                  v === void 0
                    ? function (y) {
                        return y;
                      }
                    : v,
                m = g.actionSanitizer,
                h =
                  m === void 0
                    ? function (y) {
                        return y;
                      }
                    : m;
              return function (y) {
                var w = d++;
                return (
                  p.addEvent('lr.redux.InitialState', function () {
                    var _;
                    try {
                      _ = k(y.getState());
                    } catch (S) {
                      console.error(S.toString());
                    }
                    return { state: _, storeId: w };
                  }),
                  function (_) {
                    return function (S) {
                      var E = (0, c.default)(),
                        j,
                        O;
                      try {
                        O = _(S);
                      } catch (P) {
                        j = P;
                      } finally {
                        var b = (0, c.default)() - E;
                        p.addEvent('lr.redux.ReduxAction', function () {
                          var P = null,
                            x = null;
                          try {
                            (P = k(y.getState())), (x = h(S));
                          } catch (T) {
                            console.error(T.toString());
                          }
                          return P && x ? { storeId: w, action: x, duration: b, stateDelta: P } : null;
                        });
                      }
                      if (j) throw j;
                      return O;
                    };
                  }
                );
              };
            }
          },
          './packages/@logrocket/redux/src/index.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }),
              Object.defineProperty(i, 'createEnhancer', {
                enumerable: !0,
                get: function () {
                  return c.default;
                },
              }),
              Object.defineProperty(i, 'createMiddleware', {
                enumerable: !0,
                get: function () {
                  return d.default;
                },
              });
            var c = u(o('./packages/@logrocket/redux/src/createEnhancer.js')),
              d = u(o('./packages/@logrocket/redux/src/createMiddleware.js'));
          },
          './packages/@logrocket/utils/src/TraceKit.js': function (s, i, o) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = void 0);
            var u = { collectWindowErrors: !0, debug: !1 },
              c = typeof window < 'u' ? window : typeof o.g < 'u' ? o.g : typeof self < 'u' ? self : {},
              d = [].slice,
              f = '?',
              p = /^(?:Uncaught (?:exception: )?)?((?:Eval|Internal|Range|Reference|Syntax|Type|URI)Error): ?(.*)$/;
            function g() {
              return typeof document > 'u' || typeof document.location > 'u' ? '' : document.location.href;
            }
            (u.report = (function () {
              var m = [],
                h = null,
                y = null,
                w = null;
              function _(U) {
                x(), m.push(U);
              }
              function S(U) {
                for (var B = m.length - 1; B >= 0; --B) m[B] === U && m.splice(B, 1);
              }
              function E() {
                T(), (m = []);
              }
              function j(U, B) {
                var I = null;
                if (!(B && !u.collectWindowErrors)) {
                  for (var N in m)
                    if (m.hasOwnProperty(N))
                      try {
                        m[N].apply(null, [U].concat(d.call(arguments, 2)));
                      } catch (M) {
                        I = M;
                      }
                  if (I) throw I;
                }
              }
              var O, b;
              function P(U, B, I, N, M) {
                var V = null;
                if (w) u.computeStackTrace.augmentStackTraceWithInitialElement(w, B, I, U), L();
                else if (M) (V = u.computeStackTrace(M)), j(V, !0);
                else {
                  var Y = { url: B, line: I, column: N },
                    ne = void 0,
                    ee = U,
                    J;
                  if ({}.toString.call(U) === '[object String]') {
                    var J = U.match(p);
                    J && ((ne = J[1]), (ee = J[2]));
                  }
                  (Y.func = f), (V = { name: ne, message: ee, url: g(), stack: [Y] }), j(V, !0);
                }
                return O ? O.apply(this, arguments) : !1;
              }
              function x() {
                b || ((O = c.onerror), (c.onerror = P), (b = !0));
              }
              function T() {
                b && ((c.onerror = O), (b = !1), (O = void 0));
              }
              function L() {
                var U = w,
                  B = h;
                (h = null), (w = null), (y = null), j.apply(null, [U, !1].concat(B));
              }
              function z(U, B) {
                var I = d.call(arguments, 1);
                if (w) {
                  if (y === U) return;
                  L();
                }
                var N = u.computeStackTrace(U);
                if (
                  ((w = N),
                  (y = U),
                  (h = I),
                  setTimeout(
                    function () {
                      y === U && L();
                    },
                    N.incomplete ? 2e3 : 0,
                  ),
                  B !== !1)
                )
                  throw U;
              }
              return (z.subscribe = _), (z.unsubscribe = S), (z.uninstall = E), z;
            })()),
              (u.computeStackTrace = (function () {
                function m(_) {
                  if (!(typeof _.stack > 'u' || !_.stack)) {
                    var S =
                        /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|<anonymous>).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                      E =
                        /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|resource|\[native).*?)(?::(\d+))?(?::(\d+))?\s*$/i,
                      j =
                        /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                      O = _.stack.split(`
`),
                      b = [],
                      P,
                      x;
                    /^(.*) is undefined$/.exec(_.message);
                    for (var T = 0, L = O.length; T < L; ++T) {
                      if ((P = S.exec(O[T]))) {
                        var z = P[2] && P[2].indexOf('native') !== -1;
                        x = {
                          url: z ? null : P[2],
                          func: P[1] || f,
                          args: z ? [P[2]] : [],
                          line: P[3] ? +P[3] : null,
                          column: P[4] ? +P[4] : null,
                        };
                      } else if ((P = j.exec(O[T])))
                        x = { url: P[2], func: P[1] || f, args: [], line: +P[3], column: P[4] ? +P[4] : null };
                      else if ((P = E.exec(O[T])))
                        x = {
                          url: P[3],
                          func: P[1] || f,
                          args: P[2] ? P[2].split(',') : [],
                          line: P[4] ? +P[4] : null,
                          column: P[5] ? +P[5] : null,
                        };
                      else continue;
                      !x.func && x.line && (x.func = f), b.push(x);
                    }
                    return b.length
                      ? (!b[0].column && typeof _.columnNumber < 'u' && (b[0].column = _.columnNumber + 1),
                        { name: _.name, message: _.message, url: g(), stack: b })
                      : null;
                  }
                }
                function h(_, S, E, j) {
                  var O = { url: S, line: E };
                  if (O.url && O.line) {
                    if (((_.incomplete = !1), O.func || (O.func = f), _.stack.length > 0 && _.stack[0].url === O.url)) {
                      if (_.stack[0].line === O.line) return !1;
                      if (!_.stack[0].line && _.stack[0].func === O.func) return (_.stack[0].line = O.line), !1;
                    }
                    return _.stack.unshift(O), (_.partial = !0), !0;
                  } else _.incomplete = !0;
                  return !1;
                }
                function y(_, S) {
                  for (
                    var E = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,
                      j = [],
                      O = {},
                      b = !1,
                      P,
                      x,
                      T = y.caller;
                    T && !b;
                    T = T.caller
                  )
                    if (!(T === w || T === u.report)) {
                      if (
                        ((x = { url: null, func: f, line: null, column: null }),
                        T.name ? (x.func = T.name) : (P = E.exec(T.toString())) && (x.func = P[1]),
                        typeof x.func > 'u')
                      )
                        try {
                          x.func = P.input.substring(0, P.input.indexOf('{'));
                        } catch {}
                      O['' + T] ? (b = !0) : (O['' + T] = !0), j.push(x);
                    }
                  S && j.splice(0, S);
                  var L = { name: _.name, message: _.message, url: g(), stack: j };
                  return h(L, _.sourceURL || _.fileName, _.line || _.lineNumber, _.message || _.description), L;
                }
                function w(_, S) {
                  var E = null;
                  S = S == null ? 0 : +S;
                  try {
                    if (((E = m(_)), E)) return E;
                  } catch (j) {
                    if (u.debug) throw j;
                  }
                  try {
                    if (((E = y(_, S + 1)), E)) return E;
                  } catch (j) {
                    if (u.debug) throw j;
                  }
                  return { name: _.name, message: _.message, url: g() };
                }
                return (w.augmentStackTraceWithInitialElement = h), (w.computeStackTraceFromStackProp = m), w;
              })());
            var v = u;
            i.default = v;
          },
          './packages/@logrocket/utils/src/addListener.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = o);
            function o(u, c) {
              var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : document,
                f = c;
              return (
                d.addEventListener(
                  u,
                  function () {
                    f && f.apply(void 0, arguments);
                  },
                  { capture: !0, passive: !0 },
                ),
                function () {
                  f = null;
                }
              );
            }
          },
          './packages/@logrocket/utils/src/adjustOsVersion.ts': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.adjustOsVersion = o), (i.adjustOs = u);
            function o(c, d) {
              var f = d;
              return (
                d && c.toLowerCase().replace(/\s/g, '').indexOf('macos') > -1 && (f = d.replace('10.15.7', '10.15.7+')),
                f
              );
            }
            function u(c) {
              return o(c, c);
            }
          },
          './packages/@logrocket/utils/src/applyUrlSanitizer.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = o);
            function o(u) {
              var c = u.logger,
                d = u.url,
                f = d === void 0 ? '' : d,
                p = c.getConfig('lr.browser') || {},
                g = p.urlSanitizer,
                v =
                  g === void 0
                    ? function (m) {
                        return m;
                      }
                    : g,
                k;
              try {
                k = v(f);
              } catch (m) {
                console.error(m);
              }
              return typeof k == 'string' ? k : '';
            }
          },
          './packages/@logrocket/utils/src/browserUtils.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }),
              (i.getNodeName = o),
              (i.getTargetForEvent = u),
              (i.getNodePath = d);
            function o(f) {
              return f.nodeName === '#document-fragment' && f.mode === 'open'
                ? '$shadow-root'
                : f.nodeName
                  ? f.nodeName.toLowerCase()
                  : '';
            }
            function u(f) {
              return typeof f.composedPath == 'function' && f.composed
                ? f.composedPath()[0]
                : f.path
                  ? f.path[0]
                  : f.target;
            }
            var c = 1e3;
            function d(f) {
              for (var p = f, g = [], v = 0; p && (p.parentNode || p.host); ) {
                var k = o(p);
                if (k === 'body') break;
                var m = { nodeName: k },
                  h = m.nodeName.length;
                if (
                  (p.id && p.id.length > 0 && ((m.id = p.id), (h += p.id.length)),
                  p.classList && p.classList.length > 0)
                ) {
                  m.classList = Array.prototype.slice.call(p.classList, 0);
                  var y = Array.prototype.join.call(p.classList, '');
                  y && (h += y.length);
                }
                if (v + h > c) break;
                if (p.parentNode && p.parentNode.children)
                  try {
                    var w = 0,
                      _ = p;
                    do (w += 1), (_ = _.previousElementSibling);
                    while (_);
                    m.nthChild = w;
                  } catch {}
                (v += h), g.push(m), (p = p.parentNode || p.host);
              }
              return g;
            }
          },
          './packages/@logrocket/utils/src/constants/issues.ts': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }),
              (i.ES_ISSUE_TYPE_BASE_FILTER = i.ES_ISSUE_TYPES = i.ISSUE_GROUP_TYPE = i.ISSUE_TYPE = void 0);
            var c = u(o('./node_modules/@babel/runtime/helpers/defineProperty.js')),
              d,
              f = {
                EXCEPTION: 'EXCEPTION',
                NETWORK_ERROR: 'NETWORK_ERROR',
                RAGE_CLICK: 'RAGE_CLICK',
                DEAD_CLICK: 'DEAD_CLICK',
                FRUSTRATING_NETWORK: 'FRUSTRATING_NETWORK',
                ERROR_STATE: 'ERROR_STATE',
              };
            i.ISSUE_TYPE = f;
            var p = { ENCODED_FILTER: 'ENCODED_FILTER', SENTRY: 'SENTRY', TROYTOWN: 'TROYTOWN' };
            i.ISSUE_GROUP_TYPE = p;
            var g = [f.RAGE_CLICK, f.DEAD_CLICK, f.FRUSTRATING_NETWORK, f.ERROR_STATE];
            i.ES_ISSUE_TYPES = g;
            var v =
              ((d = {}),
              (0, c.default)(d, f.RAGE_CLICK, { rageClicked: { operator: 'TEXT_IS', strings: [] } }),
              (0, c.default)(d, f.DEAD_CLICK, { deadClicked: { operator: 'TEXT_IS', strings: [] } }),
              d);
            i.ES_ISSUE_TYPE_BASE_FILTER = v;
          },
          './packages/@logrocket/utils/src/constants/logTypes.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.LOG_FILTER_TYPES = i.LOG_TYPES = void 0);
            var c = u(o('./node_modules/@babel/runtime/helpers/defineProperty.js')),
              d,
              f = {
                LOG: 'LOG',
                WARN: 'WARN',
                ERROR: 'ERROR',
                DEBUG: 'DEBUG',
                INFO: 'INFO',
                REDUX: 'REDUX',
                LIFECYCLE: 'LIFECYCLE',
                NAVIGATION: 'NAVIGATION',
                NETWORK: 'NETWORK',
                PREV_SESSION: 'PREV_SESSION',
                NEXT_SESSION: 'NEXT_SESSION',
                LOAD_MORE: 'LOAD_MORE',
                EXCEPTION: 'EXCEPTION',
              };
            i.LOG_TYPES = f;
            var p =
              ((d = {}),
              (0, c.default)(d, f.LOG, { label: 'Logs', filterLabel: 'Log', types: [f.LOG] }),
              (0, c.default)(d, f.WARN, { label: 'Warnings', filterLabel: 'Warning', types: [f.WARN] }),
              (0, c.default)(d, f.ERROR, { label: 'Errors', filterLabel: 'Error', types: [f.ERROR, f.EXCEPTION] }),
              (0, c.default)(d, f.INFO, { label: 'Info', filterLabel: 'Info', types: [f.INFO] }),
              (0, c.default)(d, f.DEBUG, { label: 'Debug', filterLabel: 'Debug', types: [f.DEBUG] }),
              (0, c.default)(d, f.REDUX, { label: 'Redux', types: [f.REDUX] }),
              (0, c.default)(d, f.NAVIGATION, { label: 'Navigation', types: [f.NAVIGATION, f.LIFECYCLE] }),
              d);
            i.LOG_FILTER_TYPES = p;
          },
          './packages/@logrocket/utils/src/constants/metrics.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }),
              (i.DEFAULT_INSIGHTS_HEATMAP_FOR_URL_OPERATOR =
                i.DEFAULT_HEATMAP_FOR_URL_OPERATOR =
                i.nextSortDirection =
                i.SORT_DIRECTION =
                i.FEEDBACK_SORT_COLUMN =
                i.HEATMAP_FOR_URL_OPERATOR =
                i.METRIC_RETENTION_TYPE =
                i.METRIC_TIMESERIES_TYPE =
                  void 0);
            var o = {
              SESSION_COUNT: 'SESSION_COUNT',
              PERCENTILE: 'PERCENTILE',
              CONVERSION_RATE: 'CONVERSION_RATE',
              SESSION_PERCENTAGE: 'SESSION_PERCENTAGE',
              ACTIVE_USERS: 'ACTIVE_USERS',
              EVENT_COUNT: 'EVENT_COUNT',
            };
            i.METRIC_TIMESERIES_TYPE = o;
            var u = { USER_PERCENTAGE: 'USER_PERCENTAGE' };
            i.METRIC_RETENTION_TYPE = u;
            var c = { IS: 'IS', CONTAINS: 'CONTAINS', LIKE: 'LIKE', HREF_LIKE: 'HREF_LIKE' };
            i.HEATMAP_FOR_URL_OPERATOR = c;
            var d = { RATING: 'RATING', SUBMISSION_DATE: 'SUBMISSION_DATE' };
            i.FEEDBACK_SORT_COLUMN = d;
            var f = { UNSET: 'UNSET', ASC: 'ASC', DESC: 'DESC' };
            i.SORT_DIRECTION = f;
            var p = function (m) {
              var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                y = h.reverse,
                w = y === void 0 ? !1 : y,
                _ = f.UNSET,
                S = f.ASC,
                E = f.DESC,
                j = [_, E, S];
              w && (j = [_, S, E]);
              var O = j.indexOf(m);
              return j[(O + 1) % j.length];
            };
            i.nextSortDirection = p;
            var g = c.IS;
            i.DEFAULT_HEATMAP_FOR_URL_OPERATOR = g;
            var v = c.HREF_LIKE;
            i.DEFAULT_INSIGHTS_HEATMAP_FOR_URL_OPERATOR = v;
          },
          './packages/@logrocket/utils/src/constants/mobile.ts': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }),
              (i.MAXIMUM_SUPPORTED_VERSION = i.MINIMUM_SUPPORTED_VERSION = i.IOS_VERSION = i.ANDROID_VERSION = void 0);
            var o = '1.26.2';
            i.ANDROID_VERSION = o;
            var u = '1.26.2';
            i.IOS_VERSION = u;
            var c = '1.0.0';
            i.MINIMUM_SUPPORTED_VERSION = c;
            var d = '1.27.0';
            i.MAXIMUM_SUPPORTED_VERSION = d;
          },
          './packages/@logrocket/utils/src/constants/nps.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }),
              (i.DELIGHTED_FEEDBACK_PREFIX = i.DELIGHTED_RESPONSES_REGEX = i.WOOTRIC_RESPONSES_REGEX = void 0);
            var o = /^https:\/\/production.wootric.com\/responses/;
            i.WOOTRIC_RESPONSES_REGEX = o;
            var u = /^https:\/\/web.delighted.com\/e\/[a-zA-Z-]*\/c/;
            i.DELIGHTED_RESPONSES_REGEX = u;
            var c = 'comment=';
            i.DELIGHTED_FEEDBACK_PREFIX = c;
          },
          './packages/@logrocket/utils/src/constants/replayTypes.ts': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.REPLAY_TYPE = void 0);
            var o;
            (i.REPLAY_TYPE = o),
              (function (u) {
                (u.SKIA = 'SKIA'), (u.DOM = 'DOM');
              })(o || (i.REPLAY_TYPE = o = {}));
          },
          './packages/@logrocket/utils/src/constants/sdkTypes.ts': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }),
              (i.SESSION_TYPE_TO_DISPLAY = i.SDK_REPLAY_TYPE = i.SDK_TYPE_TO_DISPLAY = i.SDK_TYPE = void 0);
            var c = u(o('./node_modules/@babel/runtime/helpers/defineProperty.js')),
              d = o('./packages/@logrocket/utils/src/constants/replayTypes.ts'),
              f,
              p,
              g;
            (i.SDK_TYPE = g),
              (function (h) {
                (h.WEB = 'web'), (h.MOBILE = 'mobile'), (h.UNKNOWN = 'unknown');
              })(g || (i.SDK_TYPE = g = {}));
            var v = ((f = {}), (0, c.default)(f, g.WEB, 'Web'), (0, c.default)(f, g.MOBILE, 'Mobile'), f);
            i.SDK_TYPE_TO_DISPLAY = v;
            var k =
              ((p = {}),
              (0, c.default)(p, g.WEB, d.REPLAY_TYPE.DOM),
              (0, c.default)(p, g.MOBILE, d.REPLAY_TYPE.SKIA),
              p);
            i.SDK_REPLAY_TYPE = k;
            var m = v;
            i.SESSION_TYPE_TO_DISPLAY = m;
          },
          './packages/@logrocket/utils/src/constants/statusCodes.ts': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.getStatusText = u), (i.STATUS_CODES = void 0);
            var o = {
              0: '',
              100: 'Continue',
              101: 'Switching Protocol',
              102: 'Processing',
              103: 'Early Hints',
              200: 'OK',
              201: 'Created',
              202: 'Accepted',
              203: 'Non-Authoritative Information',
              204: 'No Content',
              205: 'Reset Content',
              206: 'Partial Content',
              207: 'Multi-Status',
              208: 'Already Reported',
              226: 'IM Used',
              300: 'Multiple Choices',
              301: 'Moved Permanently',
              302: 'Found',
              303: 'See Other',
              304: 'Not Modified',
              305: 'Use Proxy',
              306: 'unused',
              307: 'Temporary Redirect',
              308: 'Permanent Redirect',
              400: 'Bad Request',
              401: 'Unauthorized',
              402: 'Payment Required',
              403: 'Forbidden',
              404: 'Not Found',
              405: 'Method Not Allowed',
              406: 'Not Acceptable',
              407: 'Proxy Authentication Required',
              408: 'Request Timeout',
              409: 'Conflict',
              410: 'Gone',
              411: 'Length Required',
              412: 'Precondition Failed',
              413: 'Payload Too Large',
              414: 'URI Too Long',
              415: 'Unsupported Media Type',
              416: 'Range Not Satisfiable',
              417: 'Expectation Failed',
              418: "I'm a teapot",
              421: 'Misdirected Request',
              422: 'Unprocessable Entity',
              423: 'Locked',
              424: 'Failed Dependency',
              425: 'Too Early',
              426: 'Upgrade Required',
              428: 'Precondition Required',
              429: 'Too Many Requests',
              431: 'Request Header Fields Too Large',
              451: 'Unavailable For Legal Reasons',
              500: 'Internal Server Error',
              501: 'Not Implemented',
              502: 'Bad Gateway',
              503: 'Service Unavailable',
              504: 'Gateway Timeout',
              505: 'HTTP Version Not Supported',
              506: 'Variant Also Negotiates',
              507: 'Insufficient Storage',
              508: 'Loop Detected',
              510: 'Not Extended',
              511: 'Network Authentication Required',
            };
            i.STATUS_CODES = o;
            function u(c) {
              return o[String(c)];
            }
          },
          './packages/@logrocket/utils/src/contains.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = o);
            function o(u, c) {
              return u && c && u.indexOf(c) > -1;
            }
          },
          './packages/@logrocket/utils/src/deepArsonify.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/typeof.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = p);
            var c = f(o('./packages/@logrocket/arson/src/index.js'));
            function d(g) {
              if (typeof WeakMap != 'function') return null;
              var v = new WeakMap(),
                k = new WeakMap();
              return (d = function (h) {
                return h ? k : v;
              })(g);
            }
            function f(g, v) {
              if (!v && g && g.__esModule) return g;
              if (g === null || (u(g) !== 'object' && typeof g != 'function')) return { default: g };
              var k = d(v);
              if (k && k.has(g)) return k.get(g);
              var m = {},
                h = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var y in g)
                if (y !== 'default' && Object.prototype.hasOwnProperty.call(g, y)) {
                  var w = h ? Object.getOwnPropertyDescriptor(g, y) : null;
                  w && (w.get || w.set) ? Object.defineProperty(m, y, w) : (m[y] = g[y]);
                }
              return (m.default = g), k && k.set(g, m), m;
            }
            function p(g) {
              return { arson: c.encode(g) };
            }
          },
          './packages/@logrocket/utils/src/deepDearsonify.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/typeof.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = p);
            var c = f(o('./packages/@logrocket/arson/src/index.js'));
            function d(g) {
              if (typeof WeakMap != 'function') return null;
              var v = new WeakMap(),
                k = new WeakMap();
              return (d = function (h) {
                return h ? k : v;
              })(g);
            }
            function f(g, v) {
              if (!v && g && g.__esModule) return g;
              if (g === null || (u(g) !== 'object' && typeof g != 'function')) return { default: g };
              var k = d(v);
              if (k && k.has(g)) return k.get(g);
              var m = {},
                h = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var y in g)
                if (y !== 'default' && Object.prototype.hasOwnProperty.call(g, y)) {
                  var w = h ? Object.getOwnPropertyDescriptor(g, y) : null;
                  w && (w.get || w.set) ? Object.defineProperty(m, y, w) : (m[y] = g[y]);
                }
              return (m.default = g), k && k.set(g, m), m;
            }
            function p(g) {
              return g && c.decode(g.arson);
            }
          },
          './packages/@logrocket/utils/src/endsWith.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = o);
            function o(u, c) {
              return u && c && u.substring(u.length - c.length) === c;
            }
          },
          './packages/@logrocket/utils/src/enhanceFunc.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = o);
            function o(u, c, d) {
              var f = u[c];
              function p() {
                for (var g, v = arguments.length, k = new Array(v), m = 0; m < v; m++) k[m] = arguments[m];
                return f && (g = f.apply(this, k)), d.apply(this, k), g;
              }
              return (
                (u[c] = p),
                function () {
                  u[c] = f;
                }
              );
            }
          },
          './packages/@logrocket/utils/src/find.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = o);
            function o(u, c) {
              for (var d = 0; d < u.length; d++) if (c(u[d])) return u[d];
            }
          },
          './packages/@logrocket/utils/src/findIndex.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = o);
            function o(u, c) {
              for (var d = 0; d < u.length; d++) if (c(u[d])) return d;
              return -1;
            }
          },
          './packages/@logrocket/utils/src/findKeyFrames.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = d);
            var c = u(o('./packages/@logrocket/utils/node_modules/lodash/sortedLastIndexBy.js'));
            function d(f, p) {
              var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                v = g.sdkThrottle,
                k = v === void 0 ? 500 : v;
              if (!f.length) return null;
              var m = (0, c.default)(f, { time: p }, 'time'),
                h = f[m] || f[m - 1],
                y = f[m - 1] || h,
                w = Math.min(h.time - y.time, k),
                _ = Math.max(p - (h.time - w), 0),
                S = w === 0 ? 1 : Math.min(_ / w, 1);
              return { prev: y, next: h, ratio: S };
            }
          },
          './packages/@logrocket/utils/src/flatten.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = o);
            function o(u, c) {
              return u.concat(c);
            }
          },
          './packages/@logrocket/utils/src/getCssRules.ts': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.getCssRule = i.getCssRules = void 0);
            var o = function (d) {
              try {
                var f = d.cssRules;
                return !f && d instanceof CSSStyleSheet ? d.rules : f;
              } catch {
                return null;
              }
            };
            i.getCssRules = o;
            var u = function (d, f) {
              var p = o(d);
              return !p || f >= p.length ? null : p.item(f);
            };
            i.getCssRule = u;
          },
          './packages/@logrocket/utils/src/getGraphQLOperation.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = o);
            function o(u) {
              if (u)
                try {
                  var c = typeof u == 'string' ? JSON.parse(u) : u,
                    d = c.query.trim(),
                    f = d.match(/(query|mutation) ([a-z_-]+)/i);
                  return f ? { operationType: f[1], operationName: f[2] } : {};
                } catch {
                  return {};
                }
              return {};
            }
          },
          './packages/@logrocket/utils/src/getNodeSelector.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = void 0);
            var c = u(o('./packages/@logrocket/utils/src/protectFunc.js')),
              d = (0, c.default)(function (p) {
                var g = p.nodeName ? p.nodeName.toLowerCase() : '',
                  v = { nodeName: g };
                return (
                  p.id && p.id.length > 0 && (v.id = p.id),
                  p.classList && p.classList.length > 0 && (v.classList = Array.prototype.slice.call(p.classList, 0)),
                  v
                );
              }),
              f = d;
            i.default = f;
          },
          './packages/@logrocket/utils/src/hashString.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.combineHashes = i.hashString = void 0);
            var c = u(o('./packages/@logrocket/utils/src/protectFunc.js')),
              d = o('./packages/@logrocket/utils/src/sendTelemetryData.js');
            function f(m, h) {
              var y = (typeof Symbol < 'u' && m[Symbol.iterator]) || m['@@iterator'];
              if (!y) {
                if (Array.isArray(m) || (y = p(m)) || (h && m && typeof m.length == 'number')) {
                  y && (m = y);
                  var w = 0,
                    _ = function () {};
                  return {
                    s: _,
                    n: function () {
                      return w >= m.length ? { done: !0 } : { done: !1, value: m[w++] };
                    },
                    e: function (b) {
                      throw b;
                    },
                    f: _,
                  };
                }
                throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              var S = !0,
                E = !1,
                j;
              return {
                s: function () {
                  y = y.call(m);
                },
                n: function () {
                  var b = y.next();
                  return (S = b.done), b;
                },
                e: function (b) {
                  (E = !0), (j = b);
                },
                f: function () {
                  try {
                    !S && y.return != null && y.return();
                  } finally {
                    if (E) throw j;
                  }
                },
              };
            }
            function p(m, h) {
              if (m) {
                if (typeof m == 'string') return g(m, h);
                var y = Object.prototype.toString.call(m).slice(8, -1);
                if ((y === 'Object' && m.constructor && (y = m.constructor.name), y === 'Map' || y === 'Set'))
                  return Array.from(m);
                if (y === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y)) return g(m, h);
              }
            }
            function g(m, h) {
              (h == null || h > m.length) && (h = m.length);
              for (var y = 0, w = new Array(h); y < h; y++) w[y] = m[y];
              return w;
            }
            var v = (0, c.default)(function (m) {
              try {
                var h = 0;
                if (typeof m == 'string' && m.length)
                  for (var y = 0; y < m.length; y++) (h = 31 * h + m.charCodeAt(y)), (h |= 0);
                return h;
              } catch {
                return (0, d.sendTelemetry)('Failed to hash string', { extra: { str: m } }), null;
              }
            });
            i.hashString = v;
            var k = function (h) {
              var y = h.shift() || 0,
                w = f(h),
                _;
              try {
                for (w.s(); !(_ = w.n()).done; ) {
                  var S = _.value;
                  y ^= S + 2654435769 + (y << 6) + (y >> 2);
                }
              } catch (E) {
                w.e(E);
              } finally {
                w.f();
              }
              return y;
            };
            i.combineHashes = k;
          },
          './packages/@logrocket/utils/src/identityStatus.ts': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }),
              (i.parseIdentityStatus = u),
              (i.IdentityStatus = void 0);
            var o;
            (i.IdentityStatus = o),
              (function (c) {
                (c[(c.Unknown = 0)] = 'Unknown'),
                  (c[(c.Anonymous = 1)] = 'Anonymous'),
                  (c[(c.Identified = 2)] = 'Identified');
              })(o || (i.IdentityStatus = o = {}));
            function u(c) {
              if (!c) return o.Unknown;
              switch (parseInt(c, 10)) {
                case o.Anonymous:
                  return o.Anonymous;
                case o.Identified:
                  return o.Identified;
                default:
                  return o.Unknown;
              }
            }
          },
          './packages/@logrocket/utils/src/index.ts': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js'),
              c = o('./node_modules/@babel/runtime/helpers/typeof.js');
            Object.defineProperty(i, '__esModule', { value: !0 });
            var d = {
              enhanceFunc: !0,
              shallowArsonify: !0,
              shallowDearsonify: !0,
              deepArsonify: !0,
              deepDearsonify: !0,
              addListener: !0,
              protectFunc: !0,
              findIndex: !0,
              find: !0,
              flatten: !0,
              selectorMatches: !0,
              parseSelectorForMatch: !0,
              querySelectorWithShadowDom: !0,
              sendErrorTelemetry: !0,
              sendTelemetry: !0,
              sanitizeValue: !0,
              adjustOs: !0,
              adjustOsVersion: !0,
              selectorFromNodePath: !0,
              startsWith: !0,
              endsWith: !0,
              contains: !0,
              uuid: !0,
              randomInt: !0,
              getCssRules: !0,
              getCssRule: !0,
              getNodeSelector: !0,
              getGraphQLOperation: !0,
              isSessionEvent: !0,
              isActivityEvent: !0,
              parseIntFromHex: !0,
              isRecordingSampled: !0,
              makeRecordingID: !0,
              setFromArray: !0,
              setToArray: !0,
              applyUrlSanitizer: !0,
              maybeCleanSwiftUIClassName: !0,
              LOG_FILTER_TYPES: !0,
              LOG_TYPES: !0,
              METRIC_TIMESERIES_TYPE: !0,
              HEATMAP_FOR_URL_OPERATOR: !0,
              DEFAULT_HEATMAP_FOR_URL_OPERATOR: !0,
              DEFAULT_INSIGHTS_HEATMAP_FOR_URL_OPERATOR: !0,
              SORT_DIRECTION: !0,
              FEEDBACK_SORT_COLUMN: !0,
              METRIC_RETENTION_TYPE: !0,
              ISSUE_TYPE: !0,
              ISSUE_GROUP_TYPE: !0,
              ES_ISSUE_TYPE_BASE_FILTER: !0,
              ES_ISSUE_TYPES: !0,
              findKeyFrames: !0,
              interpolate: !0,
              interpolateMobile: !0,
              removeOutdated: !0,
              DELIGHTED_RESPONSES_REGEX: !0,
              WOOTRIC_RESPONSES_REGEX: !0,
              REPLAY_TYPE: !0,
              ReplayType: !0,
              SDK_REPLAY_TYPE: !0,
              SDK_TYPE: !0,
              SDK_TYPE_TO_DISPLAY: !0,
              SESSION_TYPE_TO_DISPLAY: !0,
              STATUS_CODES: !0,
              getStatusText: !0,
              parseQueryString: !0,
              likeOperator: !0,
              scrollMapHistogramToPercent: !0,
              combineHashes: !0,
              hashString: !0,
              encodeUserTraitString: !0,
              parseUserTraitString: !0,
              IdentityStatus: !0,
              parseIdentityStatus: !0,
              scrubException: !0,
              MobileConstants: !0,
            };
            Object.defineProperty(i, 'enhanceFunc', {
              enumerable: !0,
              get: function () {
                return f.default;
              },
            }),
              Object.defineProperty(i, 'shallowArsonify', {
                enumerable: !0,
                get: function () {
                  return p.default;
                },
              }),
              Object.defineProperty(i, 'shallowDearsonify', {
                enumerable: !0,
                get: function () {
                  return g.default;
                },
              }),
              Object.defineProperty(i, 'deepArsonify', {
                enumerable: !0,
                get: function () {
                  return v.default;
                },
              }),
              Object.defineProperty(i, 'deepDearsonify', {
                enumerable: !0,
                get: function () {
                  return k.default;
                },
              }),
              Object.defineProperty(i, 'addListener', {
                enumerable: !0,
                get: function () {
                  return m.default;
                },
              }),
              Object.defineProperty(i, 'protectFunc', {
                enumerable: !0,
                get: function () {
                  return h.default;
                },
              }),
              Object.defineProperty(i, 'findIndex', {
                enumerable: !0,
                get: function () {
                  return y.default;
                },
              }),
              Object.defineProperty(i, 'find', {
                enumerable: !0,
                get: function () {
                  return w.default;
                },
              }),
              Object.defineProperty(i, 'flatten', {
                enumerable: !0,
                get: function () {
                  return _.default;
                },
              }),
              Object.defineProperty(i, 'selectorMatches', {
                enumerable: !0,
                get: function () {
                  return S.default;
                },
              }),
              Object.defineProperty(i, 'parseSelectorForMatch', {
                enumerable: !0,
                get: function () {
                  return E.default;
                },
              }),
              Object.defineProperty(i, 'querySelectorWithShadowDom', {
                enumerable: !0,
                get: function () {
                  return j.default;
                },
              }),
              Object.defineProperty(i, 'sendErrorTelemetry', {
                enumerable: !0,
                get: function () {
                  return O.default;
                },
              }),
              Object.defineProperty(i, 'sendTelemetry', {
                enumerable: !0,
                get: function () {
                  return O.sendTelemetry;
                },
              }),
              Object.defineProperty(i, 'sanitizeValue', {
                enumerable: !0,
                get: function () {
                  return b.default;
                },
              }),
              Object.defineProperty(i, 'adjustOs', {
                enumerable: !0,
                get: function () {
                  return P.adjustOs;
                },
              }),
              Object.defineProperty(i, 'adjustOsVersion', {
                enumerable: !0,
                get: function () {
                  return P.adjustOsVersion;
                },
              }),
              Object.defineProperty(i, 'selectorFromNodePath', {
                enumerable: !0,
                get: function () {
                  return x.default;
                },
              }),
              Object.defineProperty(i, 'startsWith', {
                enumerable: !0,
                get: function () {
                  return T.default;
                },
              }),
              Object.defineProperty(i, 'endsWith', {
                enumerable: !0,
                get: function () {
                  return L.default;
                },
              }),
              Object.defineProperty(i, 'contains', {
                enumerable: !0,
                get: function () {
                  return z.default;
                },
              }),
              Object.defineProperty(i, 'uuid', {
                enumerable: !0,
                get: function () {
                  return U.default;
                },
              }),
              Object.defineProperty(i, 'randomInt', {
                enumerable: !0,
                get: function () {
                  return B.default;
                },
              }),
              Object.defineProperty(i, 'getCssRules', {
                enumerable: !0,
                get: function () {
                  return I.getCssRules;
                },
              }),
              Object.defineProperty(i, 'getCssRule', {
                enumerable: !0,
                get: function () {
                  return I.getCssRule;
                },
              }),
              Object.defineProperty(i, 'getNodeSelector', {
                enumerable: !0,
                get: function () {
                  return N.default;
                },
              }),
              Object.defineProperty(i, 'getGraphQLOperation', {
                enumerable: !0,
                get: function () {
                  return M.default;
                },
              }),
              Object.defineProperty(i, 'isSessionEvent', {
                enumerable: !0,
                get: function () {
                  return V.default;
                },
              }),
              Object.defineProperty(i, 'isActivityEvent', {
                enumerable: !0,
                get: function () {
                  return Y.default;
                },
              }),
              Object.defineProperty(i, 'parseIntFromHex', {
                enumerable: !0,
                get: function () {
                  return ne.default;
                },
              }),
              Object.defineProperty(i, 'isRecordingSampled', {
                enumerable: !0,
                get: function () {
                  return ee.default;
                },
              }),
              Object.defineProperty(i, 'makeRecordingID', {
                enumerable: !0,
                get: function () {
                  return J.default;
                },
              }),
              Object.defineProperty(i, 'setFromArray', {
                enumerable: !0,
                get: function () {
                  return q.default;
                },
              }),
              Object.defineProperty(i, 'setToArray', {
                enumerable: !0,
                get: function () {
                  return te.default;
                },
              }),
              Object.defineProperty(i, 'applyUrlSanitizer', {
                enumerable: !0,
                get: function () {
                  return A.default;
                },
              }),
              Object.defineProperty(i, 'maybeCleanSwiftUIClassName', {
                enumerable: !0,
                get: function () {
                  return D.default;
                },
              }),
              Object.defineProperty(i, 'LOG_FILTER_TYPES', {
                enumerable: !0,
                get: function () {
                  return R.LOG_FILTER_TYPES;
                },
              }),
              Object.defineProperty(i, 'LOG_TYPES', {
                enumerable: !0,
                get: function () {
                  return R.LOG_TYPES;
                },
              }),
              Object.defineProperty(i, 'METRIC_TIMESERIES_TYPE', {
                enumerable: !0,
                get: function () {
                  return C.METRIC_TIMESERIES_TYPE;
                },
              }),
              Object.defineProperty(i, 'HEATMAP_FOR_URL_OPERATOR', {
                enumerable: !0,
                get: function () {
                  return C.HEATMAP_FOR_URL_OPERATOR;
                },
              }),
              Object.defineProperty(i, 'DEFAULT_HEATMAP_FOR_URL_OPERATOR', {
                enumerable: !0,
                get: function () {
                  return C.DEFAULT_HEATMAP_FOR_URL_OPERATOR;
                },
              }),
              Object.defineProperty(i, 'DEFAULT_INSIGHTS_HEATMAP_FOR_URL_OPERATOR', {
                enumerable: !0,
                get: function () {
                  return C.DEFAULT_INSIGHTS_HEATMAP_FOR_URL_OPERATOR;
                },
              }),
              Object.defineProperty(i, 'SORT_DIRECTION', {
                enumerable: !0,
                get: function () {
                  return C.SORT_DIRECTION;
                },
              }),
              Object.defineProperty(i, 'FEEDBACK_SORT_COLUMN', {
                enumerable: !0,
                get: function () {
                  return C.FEEDBACK_SORT_COLUMN;
                },
              }),
              Object.defineProperty(i, 'METRIC_RETENTION_TYPE', {
                enumerable: !0,
                get: function () {
                  return C.METRIC_RETENTION_TYPE;
                },
              }),
              Object.defineProperty(i, 'ISSUE_TYPE', {
                enumerable: !0,
                get: function () {
                  return $.ISSUE_TYPE;
                },
              }),
              Object.defineProperty(i, 'ISSUE_GROUP_TYPE', {
                enumerable: !0,
                get: function () {
                  return $.ISSUE_GROUP_TYPE;
                },
              }),
              Object.defineProperty(i, 'ES_ISSUE_TYPE_BASE_FILTER', {
                enumerable: !0,
                get: function () {
                  return $.ES_ISSUE_TYPE_BASE_FILTER;
                },
              }),
              Object.defineProperty(i, 'ES_ISSUE_TYPES', {
                enumerable: !0,
                get: function () {
                  return $.ES_ISSUE_TYPES;
                },
              }),
              Object.defineProperty(i, 'findKeyFrames', {
                enumerable: !0,
                get: function () {
                  return H.default;
                },
              }),
              Object.defineProperty(i, 'interpolate', {
                enumerable: !0,
                get: function () {
                  return X.default;
                },
              }),
              Object.defineProperty(i, 'interpolateMobile', {
                enumerable: !0,
                get: function () {
                  return X.interpolateMobile;
                },
              }),
              Object.defineProperty(i, 'removeOutdated', {
                enumerable: !0,
                get: function () {
                  return re.default;
                },
              }),
              Object.defineProperty(i, 'DELIGHTED_RESPONSES_REGEX', {
                enumerable: !0,
                get: function () {
                  return ie.DELIGHTED_RESPONSES_REGEX;
                },
              }),
              Object.defineProperty(i, 'WOOTRIC_RESPONSES_REGEX', {
                enumerable: !0,
                get: function () {
                  return ie.WOOTRIC_RESPONSES_REGEX;
                },
              }),
              Object.defineProperty(i, 'REPLAY_TYPE', {
                enumerable: !0,
                get: function () {
                  return se.REPLAY_TYPE;
                },
              }),
              Object.defineProperty(i, 'ReplayType', {
                enumerable: !0,
                get: function () {
                  return se.ReplayType;
                },
              }),
              Object.defineProperty(i, 'SDK_REPLAY_TYPE', {
                enumerable: !0,
                get: function () {
                  return de.SDK_REPLAY_TYPE;
                },
              }),
              Object.defineProperty(i, 'SDK_TYPE', {
                enumerable: !0,
                get: function () {
                  return de.SDK_TYPE;
                },
              }),
              Object.defineProperty(i, 'SDK_TYPE_TO_DISPLAY', {
                enumerable: !0,
                get: function () {
                  return de.SDK_TYPE_TO_DISPLAY;
                },
              }),
              Object.defineProperty(i, 'SESSION_TYPE_TO_DISPLAY', {
                enumerable: !0,
                get: function () {
                  return de.SESSION_TYPE_TO_DISPLAY;
                },
              }),
              Object.defineProperty(i, 'STATUS_CODES', {
                enumerable: !0,
                get: function () {
                  return fe.STATUS_CODES;
                },
              }),
              Object.defineProperty(i, 'getStatusText', {
                enumerable: !0,
                get: function () {
                  return fe.getStatusText;
                },
              }),
              Object.defineProperty(i, 'parseQueryString', {
                enumerable: !0,
                get: function () {
                  return Te.parseQueryString;
                },
              }),
              Object.defineProperty(i, 'likeOperator', {
                enumerable: !0,
                get: function () {
                  return qt.likeOperator;
                },
              }),
              Object.defineProperty(i, 'scrollMapHistogramToPercent', {
                enumerable: !0,
                get: function () {
                  return Zt.default;
                },
              }),
              Object.defineProperty(i, 'combineHashes', {
                enumerable: !0,
                get: function () {
                  return ge.combineHashes;
                },
              }),
              Object.defineProperty(i, 'hashString', {
                enumerable: !0,
                get: function () {
                  return ge.hashString;
                },
              }),
              Object.defineProperty(i, 'encodeUserTraitString', {
                enumerable: !0,
                get: function () {
                  return rt.encodeUserTraitString;
                },
              }),
              Object.defineProperty(i, 'parseUserTraitString', {
                enumerable: !0,
                get: function () {
                  return rt.parseUserTraitString;
                },
              }),
              Object.defineProperty(i, 'IdentityStatus', {
                enumerable: !0,
                get: function () {
                  return xe.IdentityStatus;
                },
              }),
              Object.defineProperty(i, 'parseIdentityStatus', {
                enumerable: !0,
                get: function () {
                  return xe.parseIdentityStatus;
                },
              }),
              Object.defineProperty(i, 'scrubException', {
                enumerable: !0,
                get: function () {
                  return Dt.scrubException;
                },
              }),
              (i.MobileConstants = void 0);
            var f = u(o('./packages/@logrocket/utils/src/enhanceFunc.js')),
              p = u(o('./packages/@logrocket/utils/src/shallowArsonify.js')),
              g = u(o('./packages/@logrocket/utils/src/shallowDearsonify.js')),
              v = u(o('./packages/@logrocket/utils/src/deepArsonify.js')),
              k = u(o('./packages/@logrocket/utils/src/deepDearsonify.js')),
              m = u(o('./packages/@logrocket/utils/src/addListener.js')),
              h = u(o('./packages/@logrocket/utils/src/protectFunc.js')),
              y = u(o('./packages/@logrocket/utils/src/findIndex.js')),
              w = u(o('./packages/@logrocket/utils/src/find.js')),
              _ = u(o('./packages/@logrocket/utils/src/flatten.js')),
              S = u(o('./packages/@logrocket/utils/src/selectorMatches.js')),
              E = u(o('./packages/@logrocket/utils/src/parseSelectorForMatch.js')),
              j = u(o('./packages/@logrocket/utils/src/querySelectorWithShadowDom.js')),
              O = qn(o('./packages/@logrocket/utils/src/sendTelemetryData.js')),
              b = u(o('./packages/@logrocket/utils/src/sanitizeValue.js')),
              P = o('./packages/@logrocket/utils/src/adjustOsVersion.ts'),
              x = u(o('./packages/@logrocket/utils/src/selectorFromNodePath.js')),
              T = u(o('./packages/@logrocket/utils/src/startsWith.js')),
              L = u(o('./packages/@logrocket/utils/src/endsWith.js')),
              z = u(o('./packages/@logrocket/utils/src/contains.js')),
              U = u(o('./packages/@logrocket/utils/src/uuid.js')),
              B = u(o('./packages/@logrocket/utils/src/randomInt.js')),
              I = o('./packages/@logrocket/utils/src/getCssRules.ts'),
              N = u(o('./packages/@logrocket/utils/src/getNodeSelector.js')),
              M = u(o('./packages/@logrocket/utils/src/getGraphQLOperation.js')),
              V = u(o('./packages/@logrocket/utils/src/isSessionEvent.js')),
              Y = u(o('./packages/@logrocket/utils/src/isActivityEvent.js')),
              ne = u(o('./packages/@logrocket/utils/src/parseIntFromHex.js')),
              ee = u(o('./packages/@logrocket/utils/src/isRecordingSampled.js')),
              J = u(o('./packages/@logrocket/utils/src/makeRecordingID.js')),
              q = u(o('./packages/@logrocket/utils/src/setFromArray.js')),
              te = u(o('./packages/@logrocket/utils/src/setToArray.js')),
              A = u(o('./packages/@logrocket/utils/src/applyUrlSanitizer.js')),
              D = u(o('./packages/@logrocket/utils/src/maybeCleanSwiftUIClassName.ts')),
              R = o('./packages/@logrocket/utils/src/constants/logTypes.js'),
              C = o('./packages/@logrocket/utils/src/constants/metrics.js'),
              $ = o('./packages/@logrocket/utils/src/constants/issues.ts'),
              H = u(o('./packages/@logrocket/utils/src/findKeyFrames.js')),
              X = qn(o('./packages/@logrocket/utils/src/interpolate.js')),
              re = u(o('./packages/@logrocket/utils/src/removeOutdated.js')),
              ie = o('./packages/@logrocket/utils/src/constants/nps.js'),
              se = o('./packages/@logrocket/utils/src/constants/replayTypes.ts'),
              de = o('./packages/@logrocket/utils/src/constants/sdkTypes.ts'),
              fe = o('./packages/@logrocket/utils/src/constants/statusCodes.ts'),
              Te = o('./packages/@logrocket/utils/src/parseQueryString.js'),
              qt = o('./packages/@logrocket/utils/src/likeOperator.js'),
              Zt = u(o('./packages/@logrocket/utils/src/scrollMapHistogramToPercent.js')),
              ge = o('./packages/@logrocket/utils/src/hashString.js'),
              rt = o('./packages/@logrocket/utils/src/userTraitStrings.ts'),
              xe = o('./packages/@logrocket/utils/src/identityStatus.ts'),
              Dt = o('./packages/@logrocket/utils/src/scrubException.ts'),
              He = qn(o('./packages/@logrocket/utils/src/constants/mobile.ts'));
            i.MobileConstants = He;
            var Ft = o('./packages/@logrocket/utils/src/browserUtils.js');
            Object.keys(Ft).forEach(function (F) {
              F === 'default' ||
                F === '__esModule' ||
                Object.prototype.hasOwnProperty.call(d, F) ||
                (F in i && i[F] === Ft[F]) ||
                Object.defineProperty(i, F, {
                  enumerable: !0,
                  get: function () {
                    return Ft[F];
                  },
                });
            });
            var en = o('./packages/@logrocket/utils/src/isValidAppID.ts');
            Object.keys(en).forEach(function (F) {
              F === 'default' ||
                F === '__esModule' ||
                Object.prototype.hasOwnProperty.call(d, F) ||
                (F in i && i[F] === en[F]) ||
                Object.defineProperty(i, F, {
                  enumerable: !0,
                  get: function () {
                    return en[F];
                  },
                });
            });
            var it = o('./packages/@logrocket/utils/src/requireValue.ts');
            Object.keys(it).forEach(function (F) {
              F === 'default' ||
                F === '__esModule' ||
                Object.prototype.hasOwnProperty.call(d, F) ||
                (F in i && i[F] === it[F]) ||
                Object.defineProperty(i, F, {
                  enumerable: !0,
                  get: function () {
                    return it[F];
                  },
                });
            });
            var pt = o('./packages/@logrocket/utils/src/types.ts');
            Object.keys(pt).forEach(function (F) {
              F === 'default' ||
                F === '__esModule' ||
                Object.prototype.hasOwnProperty.call(d, F) ||
                (F in i && i[F] === pt[F]) ||
                Object.defineProperty(i, F, {
                  enumerable: !0,
                  get: function () {
                    return pt[F];
                  },
                });
            });
            function In(F) {
              if (typeof WeakMap != 'function') return null;
              var Tt = new WeakMap(),
                mt = new WeakMap();
              return (In = function (ha) {
                return ha ? mt : Tt;
              })(F);
            }
            function qn(F, Tt) {
              if (!Tt && F && F.__esModule) return F;
              if (F === null || (c(F) !== 'object' && typeof F != 'function')) return { default: F };
              var mt = In(Tt);
              if (mt && mt.has(F)) return mt.get(F);
              var ot = {},
                ha = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var Zn in F)
                if (Zn !== 'default' && Object.prototype.hasOwnProperty.call(F, Zn)) {
                  var oo = ha ? Object.getOwnPropertyDescriptor(F, Zn) : null;
                  oo && (oo.get || oo.set) ? Object.defineProperty(ot, Zn, oo) : (ot[Zn] = F[Zn]);
                }
              return (ot.default = F), mt && mt.set(F, ot), ot;
            }
          },
          './packages/@logrocket/utils/src/interpolate.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = k), (i.interpolateMobile = m);
            var c = u(o('./node_modules/@babel/runtime/helpers/defineProperty.js'));
            function d(h, y) {
              var w = (typeof Symbol < 'u' && h[Symbol.iterator]) || h['@@iterator'];
              if (!w) {
                if (Array.isArray(h) || (w = f(h)) || (y && h && typeof h.length == 'number')) {
                  w && (h = w);
                  var _ = 0,
                    S = function () {};
                  return {
                    s: S,
                    n: function () {
                      return _ >= h.length ? { done: !0 } : { done: !1, value: h[_++] };
                    },
                    e: function (P) {
                      throw P;
                    },
                    f: S,
                  };
                }
                throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              var E = !0,
                j = !1,
                O;
              return {
                s: function () {
                  w = w.call(h);
                },
                n: function () {
                  var P = w.next();
                  return (E = P.done), P;
                },
                e: function (P) {
                  (j = !0), (O = P);
                },
                f: function () {
                  try {
                    !E && w.return != null && w.return();
                  } finally {
                    if (j) throw O;
                  }
                },
              };
            }
            function f(h, y) {
              if (h) {
                if (typeof h == 'string') return p(h, y);
                var w = Object.prototype.toString.call(h).slice(8, -1);
                if ((w === 'Object' && h.constructor && (w = h.constructor.name), w === 'Map' || w === 'Set'))
                  return Array.from(h);
                if (w === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w)) return p(h, y);
              }
            }
            function p(h, y) {
              (y == null || y > h.length) && (y = h.length);
              for (var w = 0, _ = new Array(y); w < y; w++) _[w] = h[w];
              return _;
            }
            function g(h, y) {
              var w = Object.keys(h);
              if (Object.getOwnPropertySymbols) {
                var _ = Object.getOwnPropertySymbols(h);
                y &&
                  (_ = _.filter(function (S) {
                    return Object.getOwnPropertyDescriptor(h, S).enumerable;
                  })),
                  w.push.apply(w, _);
              }
              return w;
            }
            function v(h) {
              for (var y = 1; y < arguments.length; y++) {
                var w = arguments[y] != null ? arguments[y] : {};
                y % 2
                  ? g(Object(w), !0).forEach(function (_) {
                      (0, c.default)(h, _, w[_]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(w))
                    : g(Object(w)).forEach(function (_) {
                        Object.defineProperty(h, _, Object.getOwnPropertyDescriptor(w, _));
                      });
              }
              return h;
            }
            function k(h, y) {
              if (!h) return {};
              var w = h.prev,
                _ = h.next,
                S = h.ratio,
                E = v({}, _),
                j = d(y),
                O;
              try {
                for (j.s(); !(O = j.n()).done; ) {
                  var b = O.value;
                  E[b] = w[b] + (_[b] - w[b]) * S;
                }
              } catch (P) {
                j.e(P);
              } finally {
                j.f();
              }
              return E;
            }
            function m(h, y, w) {
              if (!h) return {};
              var _ = h.prev,
                S = h.next;
              return S.type === 'MOVE' ? k(h, y) : _ === S && Math.abs(w - S.time) > 500 ? null : S;
            }
          },
          './packages/@logrocket/utils/src/isActivityEvent.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = o);
            function o(u) {
              var c = [
                'lr.browser.MouseEvent',
                'lr.browser.ScrollEvent',
                'lr.browser.InputEvent',
                'lr.browser.InputChangeEvent',
                'lr.android.TouchEvent',
                'lr.android.InputChangeEvent',
                'lr.ios.TouchEvent',
                'lr.ios.InputChangeEvent',
              ];
              return c.indexOf(u) > -1;
            }
          },
          './packages/@logrocket/utils/src/isRecordingSampled.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = f);
            var c = u(o('./packages/@logrocket/utils/src/parseIntFromHex.js')),
              d = 1e4;
            function f(p, g) {
              if (g <= 0) return !1;
              var v = Math.floor(g * d),
                k = (0, c.default)(p),
                m = k % d;
              return m <= v;
            }
          },
          './packages/@logrocket/utils/src/isSessionEvent.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = u);
            var o = ['lr.browser.NavigationEvent', 'lr.browser.InputChangeEvent', 'lr.browser.InputEvent'];
            function u(c) {
              return o.indexOf(c.type) > -1 || c.data.eventType === 'CLICK';
            }
          },
          './packages/@logrocket/utils/src/isValidAppID.ts': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.isValidAppID = u);
            var o = /^[a-z0-9_-]+\/[a-z0-9_-]+$/;
            function u(c) {
              return typeof c == 'string' && o.test(c);
            }
          },
          './packages/@logrocket/utils/src/likeOperator.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.likeOperator = o);
            function o(u, c) {
              var d = c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
                f = d.replace(/\\\*/g, '.*').replace(/\\\?/g, '.'),
                p = new RegExp('^'.concat(f, '$'));
              return p.test(u);
            }
          },
          './packages/@logrocket/utils/src/logError.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = void 0);
            var o = typeof console < 'u' && console.error && console.error.bind,
              u = o ? console.error.bind(console) : function () {},
              c = u;
            i.default = c;
          },
          './packages/@logrocket/utils/src/makeRecordingID.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = d);
            var c = u(o('./packages/@logrocket/utils/src/uuid.js'));
            function d() {
              var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                p = f.prefix,
                g = p === void 0 ? 5 : p;
              return ''.concat(g, '-').concat((0, c.default)());
            }
          },
          './packages/@logrocket/utils/src/mapValues.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = o);
            function o(u, c) {
              if (u == null) return {};
              var d = {};
              return (
                Object.keys(u).forEach(function (f) {
                  d[f] = c(u[f]);
                }),
                d
              );
            }
          },
          './packages/@logrocket/utils/src/maybeCleanSwiftUIClassName.ts': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = o);
            function o(u) {
              return u.replace(/</g, '%3c').replace(/>/g, '%3e').replace(/\s/g, '');
            }
          },
          './packages/@logrocket/utils/src/parseIntFromHex.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = o);
            function o(u) {
              var c = u.replace(/[^0-9a-f]/g, '');
              return parseInt('0x'.concat(c), 16) || 0;
            }
          },
          './packages/@logrocket/utils/src/parseQueryString.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.parseQueryString = void 0);
            var c = u(o('./node_modules/@babel/runtime/helpers/slicedToArray.js')),
              d = function (g) {
                var v = {},
                  k = g.split('&');
                return (
                  k.forEach(function (m) {
                    var h = m
                        .split('=')
                        .map(function (S) {
                          return S.replace(/\+/g, ' ');
                        })
                        .map(decodeURIComponent),
                      y = (0, c.default)(h, 2),
                      w = y[0],
                      _ = y[1];
                    v[w] = _;
                  }),
                  v
                );
              },
              f = function (g) {
                var v = g.indexOf('?');
                if (v === -1) return {};
                var k = g.substring(v + 1);
                return d(k);
              };
            i.parseQueryString = f;
          },
          './packages/@logrocket/utils/src/parseSelectorForMatch.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = v);
            var c = u(o('./node_modules/@babel/runtime/helpers/toConsumableArray.js')),
              d = u(o('./node_modules/@babel/runtime/helpers/slicedToArray.js')),
              f = u(o('./packages/@logrocket/utils/src/startsWith.js')),
              p = '~',
              g = ':nth-child(';
            function v(k) {
              var m = k.replace(/\s*>\s*|:nth-child\(([1-9][0-9]*|odd|even)\)|\s+/gi, function (h) {
                return h.indexOf('>') > -1
                  ? ' >'
                  : h.trim().length === 0
                    ? ' '
                    : ''.concat(p).concat(h.slice(g.length));
              });
              return m.split(/\s+/).map(function (h) {
                var y = {},
                  w = h;
                if (
                  (w.charAt(0) === '>' && ((y.directDesc = !0), (w = w.slice(1))),
                  (w = w.replace(/^([a-z0-9-_]+)/gi, function (O) {
                    return (y.nodeName = O), '';
                  })),
                  w.charAt(0) === p)
                ) {
                  var _ = w.slice(1).split(')'),
                    S = (0, d.default)(_, 2),
                    E = S[0],
                    j = S[1];
                  (y.nthChild = E), (w = j);
                }
                return (
                  w
                    .replace(/\.|#/gi, function (O) {
                      return ' '.concat(O);
                    })
                    .trim()
                    .split(' ')
                    .forEach(function (O) {
                      if ((0, f.default)(O, '.')) {
                        var b = O.slice(1);
                        y.classList = y.classList ? [].concat((0, c.default)(y.classList), [b]) : [b];
                      } else (0, f.default)(O, '#') && (y.id = O.slice(1));
                    }),
                  y
                );
              });
            }
          },
          './packages/@logrocket/utils/src/protectFunc.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = f);
            var c = u(o('./packages/@logrocket/utils/src/sendTelemetryData.js')),
              d = u(o('./packages/@logrocket/utils/src/logError.js'));
            function f(p) {
              var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function () {};
              return function () {
                var v;
                try {
                  v = p.apply(void 0, arguments);
                } catch (m) {
                  if (typeof window < 'u' && window._lrdebug) throw m;
                  var k = g(m);
                  (0, d.default)('LogRocket', m), (0, c.default)(m, k);
                }
                return v;
              };
            }
          },
          './packages/@logrocket/utils/src/querySelectorWithShadowDom.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }),
              (i.default = p),
              (i.caseInsensitiveQuerySelector = void 0);
            function o(g, v) {
              var k = (typeof Symbol < 'u' && g[Symbol.iterator]) || g['@@iterator'];
              if (!k) {
                if (Array.isArray(g) || (k = u(g)) || (v && g && typeof g.length == 'number')) {
                  k && (g = k);
                  var m = 0,
                    h = function () {};
                  return {
                    s: h,
                    n: function () {
                      return m >= g.length ? { done: !0 } : { done: !1, value: g[m++] };
                    },
                    e: function (E) {
                      throw E;
                    },
                    f: h,
                  };
                }
                throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              var y = !0,
                w = !1,
                _;
              return {
                s: function () {
                  k = k.call(g);
                },
                n: function () {
                  var E = k.next();
                  return (y = E.done), E;
                },
                e: function (E) {
                  (w = !0), (_ = E);
                },
                f: function () {
                  try {
                    !y && k.return != null && k.return();
                  } finally {
                    if (w) throw _;
                  }
                },
              };
            }
            function u(g, v) {
              if (g) {
                if (typeof g == 'string') return c(g, v);
                var k = Object.prototype.toString.call(g).slice(8, -1);
                if ((k === 'Object' && g.constructor && (k = g.constructor.name), k === 'Map' || k === 'Set'))
                  return Array.from(g);
                if (k === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k)) return c(g, v);
              }
            }
            function c(g, v) {
              (v == null || v > g.length) && (v = g.length);
              for (var k = 0, m = new Array(v); k < v; k++) m[k] = g[k];
              return m;
            }
            var d = function (v) {
                var k = v.root,
                  m = v.selectorList,
                  h = v.directDesc,
                  y = m[0].split(/(?=\.)|(?=#)/),
                  w = y.shift(),
                  _ = '',
                  S = [];
                y.forEach(function (T) {
                  T[0] === '#' && (_ = T.toLowerCase().substring(1).trim()),
                    T[0] === '.' && S.push(T.toLowerCase().substring(1).trim());
                });
                var E;
                h ? (E = [k.querySelector(':scope > '.concat(w))]) : (E = k.querySelectorAll(w));
                var j = [],
                  O = o(E),
                  b;
                try {
                  var P = function () {
                    var L = b.value;
                    if (!L || _ !== L.id.toLowerCase()) return 'continue';
                    var z = Array.from(L.classList.values())
                      .map(function (U) {
                        return U.toLowerCase();
                      })
                      .filter(function (U) {
                        return U !== '' && U[0] !== ':';
                      });
                    if (
                      !S.every(function (U) {
                        return z.indexOf(U) > -1;
                      })
                    )
                      return 'continue';
                    j.push(L);
                  };
                  for (O.s(); !(b = O.n()).done; ) var x = P();
                } catch (T) {
                  O.e(T);
                } finally {
                  O.f();
                }
                return j;
              },
              f = function (v, k) {
                if (!k.length) return null;
                var m;
                if ((v.host ? (m = v) : (m = v.querySelector('body')), !m)) return null;
                for (var h = [{ matches: [m], selectorList: k.split(' > '), directDesc: !1 }]; h.length; ) {
                  var y = h.shift(),
                    w = y.matches,
                    _ = y.selectorList,
                    S = y.directDesc,
                    E = o(w),
                    j;
                  try {
                    for (E.s(); !(j = E.n()).done; ) {
                      var O = j.value,
                        b = d({ root: O, selectorList: _, directDesc: S });
                      if (b.length && _.length === 1) return b[0];
                      b.length && h.push({ matches: b, selectorList: _.slice(1), directDesc: !0 });
                    }
                  } catch (P) {
                    E.e(P);
                  } finally {
                    E.f();
                  }
                }
                return null;
              };
            i.caseInsensitiveQuerySelector = f;
            function p(g, v) {
              if (v.startsWith('$shadow-root >'))
                throw new Error("Malformed selector '".concat(v, "': should not start with $shadow-root"));
              v.endsWith('> $shadow-root') && (v = v.slice(0, v.length - 14));
              for (var k = g, m, h = v.split('> $shadow-root >'), y = 0; y < h.length; y++)
                if (((m = f(k, h[y])), m && y < h.length - 1))
                  if (m.shadowRoot) k = m.shadowRoot;
                  else throw new Error("Missing shadowRoot for selector '".concat(v, "' at depth ").concat(y));
              return { root: k, node: m };
            }
          },
          './packages/@logrocket/utils/src/randomInt.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = o);
            function o(u, c) {
              var d = Math.ceil(u),
                f = Math.floor(c);
              return Math.floor(Math.random() * (f - d)) + d;
            }
          },
          './packages/@logrocket/utils/src/removeOutdated.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = f);
            var c = u(o('./packages/@logrocket/utils/node_modules/lodash/sortedLastIndexBy.js')),
              d = 5e3;
            function f(p, g) {
              if (p.length === 0) return p;
              var v = (0, c.default)(p, { time: g.time - d }, 'time') - 1,
                k = p[v];
              return k && g.time - k.time > d && v > 0 ? p.slice(v) : p;
            }
          },
          './packages/@logrocket/utils/src/requireValue.ts': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.requireValue = void 0);
            var o = function (c) {
              if (typeof c > 'u') throw new Error('Value must not be undefined.');
              return c;
            };
            i.requireValue = o;
          },
          './packages/@logrocket/utils/src/sanitizeValue.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = u);
            var o = function (d) {
              for (
                var f =
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                  p = Math.ceil(d.length / f.length),
                  g = '';
                p > 0;

              )
                (g += f), p--;
              return g.slice(0, d.length);
            };
            function u(c, d) {
              var f = String(c);
              return String(d).toLowerCase() === 'lipsum' ? o(f) : '';
            }
          },
          './packages/@logrocket/utils/src/scrollMapHistogramToPercent.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = o);
            function o(u, c) {
              for (
                var d = [],
                  f = u.reduce(function (k, m) {
                    return k + m.count;
                  }, 0),
                  p = 0,
                  g = 1;
                g <= 100;
                g++
              ) {
                var v = c * (g * 0.01);
                p >= u.length ? d.push(0) : (d.push(f), v > u[p].maxScroll && ((f -= u[p].count), p++));
              }
              return d;
            }
          },
          './packages/@logrocket/utils/src/scrubException.ts': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.scrubException = m);
            var c = u(o('./node_modules/@babel/runtime/helpers/typeof.js'));
            function d(h, y) {
              var w = (typeof Symbol < 'u' && h[Symbol.iterator]) || h['@@iterator'];
              if (!w) {
                if (Array.isArray(h) || (w = f(h)) || (y && h && typeof h.length == 'number')) {
                  w && (h = w);
                  var _ = 0,
                    S = function () {};
                  return {
                    s: S,
                    n: function () {
                      return _ >= h.length ? { done: !0 } : { done: !1, value: h[_++] };
                    },
                    e: function (P) {
                      throw P;
                    },
                    f: S,
                  };
                }
                throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              var E = !0,
                j = !1,
                O;
              return {
                s: function () {
                  w = w.call(h);
                },
                n: function () {
                  var P = w.next();
                  return (E = P.done), P;
                },
                e: function (P) {
                  (j = !0), (O = P);
                },
                f: function () {
                  try {
                    !E && w.return != null && w.return();
                  } finally {
                    if (j) throw O;
                  }
                },
              };
            }
            function f(h, y) {
              if (h) {
                if (typeof h == 'string') return p(h, y);
                var w = Object.prototype.toString.call(h).slice(8, -1);
                if ((w === 'Object' && h.constructor && (w = h.constructor.name), w === 'Map' || w === 'Set'))
                  return Array.from(h);
                if (w === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w)) return p(h, y);
              }
            }
            function p(h, y) {
              (y == null || y > h.length) && (y = h.length);
              for (var w = 0, _ = new Array(y); w < y; w++) _[w] = h[w];
              return _;
            }
            function g(h) {
              return /boolean|number|string/.test((0, c.default)(h));
            }
            var v = ['level', 'logger'],
              k = ['tags', 'extra'];
            function m(h, y) {
              if (y) {
                var w = d(v),
                  _;
                try {
                  for (w.s(); !(_ = w.n()).done; ) {
                    var S = _.value,
                      E = y[S];
                    g(E) && (h[S] = E.toString());
                  }
                } catch (B) {
                  w.e(B);
                } finally {
                  w.f();
                }
                var j = d(k),
                  O;
                try {
                  for (j.s(); !(O = j.n()).done; ) {
                    for (var b = O.value, P = y[b] || {}, x = {}, T = 0, L = Object.keys(P); T < L.length; T++) {
                      var z = L[T],
                        U = P[z];
                      g(U) && (x[z.toString()] = U.toString());
                    }
                    h[b] = x;
                  }
                } catch (B) {
                  j.e(B);
                } finally {
                  j.f();
                }
              }
            }
          },
          './packages/@logrocket/utils/src/selectorFromNodePath.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = g);
            var c = u(o('./node_modules/@babel/runtime/helpers/toConsumableArray.js'));
            function d(v, k) {
              var m = (typeof Symbol < 'u' && v[Symbol.iterator]) || v['@@iterator'];
              if (!m) {
                if (Array.isArray(v) || (m = f(v)) || (k && v && typeof v.length == 'number')) {
                  m && (v = m);
                  var h = 0,
                    y = function () {};
                  return {
                    s: y,
                    n: function () {
                      return h >= v.length ? { done: !0 } : { done: !1, value: v[h++] };
                    },
                    e: function (j) {
                      throw j;
                    },
                    f: y,
                  };
                }
                throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              var w = !0,
                _ = !1,
                S;
              return {
                s: function () {
                  m = m.call(v);
                },
                n: function () {
                  var j = m.next();
                  return (w = j.done), j;
                },
                e: function (j) {
                  (_ = !0), (S = j);
                },
                f: function () {
                  try {
                    !w && m.return != null && m.return();
                  } finally {
                    if (_) throw S;
                  }
                },
              };
            }
            function f(v, k) {
              if (v) {
                if (typeof v == 'string') return p(v, k);
                var m = Object.prototype.toString.call(v).slice(8, -1);
                if ((m === 'Object' && v.constructor && (m = v.constructor.name), m === 'Map' || m === 'Set'))
                  return Array.from(v);
                if (m === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)) return p(v, k);
              }
            }
            function p(v, k) {
              (k == null || k > v.length) && (k = v.length);
              for (var m = 0, h = new Array(k); m < k; m++) h[m] = v[m];
              return h;
            }
            function g() {
              var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
                k = [],
                m = d((0, c.default)(v).reverse()),
                h;
              try {
                var y = function () {
                  var _ = h.value,
                    S = _.nodeName,
                    E = _.id,
                    j = _.nthChild,
                    O = _.classList,
                    b = [],
                    P = [];
                  j && P.push('nth-child('.concat(j, ')')),
                    S &&
                      (b.push(S),
                      P.sort().map(function (x) {
                        return b.push(':'.concat(x));
                      })),
                    E && b.push('#'.concat(E)),
                    O &&
                      O.length &&
                      ((O = O.map(function (x) {
                        return x.toLowerCase();
                      }).sort()),
                      (b = [].concat(
                        (0, c.default)(b),
                        (0, c.default)(
                          O.map(function (x) {
                            return '.'.concat(x);
                          }),
                        ),
                      ))),
                    b.length && k.push(b.join(' '));
                };
                for (m.s(); !(h = m.n()).done; ) y();
              } catch (w) {
                m.e(w);
              } finally {
                m.f();
              }
              return k.join(' > ');
            }
          },
          './packages/@logrocket/utils/src/selectorMatches.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = m);
            var c = u(o('./node_modules/@babel/runtime/helpers/toConsumableArray.js')),
              d = u(o('./node_modules/@babel/runtime/helpers/typeof.js')),
              f = u(o('./packages/@logrocket/utils/src/findIndex.js'));
            function p(h, y) {
              var w = (typeof Symbol < 'u' && h[Symbol.iterator]) || h['@@iterator'];
              if (!w) {
                if (Array.isArray(h) || (w = g(h)) || (y && h && typeof h.length == 'number')) {
                  w && (h = w);
                  var _ = 0,
                    S = function () {};
                  return {
                    s: S,
                    n: function () {
                      return _ >= h.length ? { done: !0 } : { done: !1, value: h[_++] };
                    },
                    e: function (P) {
                      throw P;
                    },
                    f: S,
                  };
                }
                throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              var E = !0,
                j = !1,
                O;
              return {
                s: function () {
                  w = w.call(h);
                },
                n: function () {
                  var P = w.next();
                  return (E = P.done), P;
                },
                e: function (P) {
                  (j = !0), (O = P);
                },
                f: function () {
                  try {
                    !E && w.return != null && w.return();
                  } finally {
                    if (j) throw O;
                  }
                },
              };
            }
            function g(h, y) {
              if (h) {
                if (typeof h == 'string') return v(h, y);
                var w = Object.prototype.toString.call(h).slice(8, -1);
                if ((w === 'Object' && h.constructor && (w = h.constructor.name), w === 'Map' || w === 'Set'))
                  return Array.from(h);
                if (w === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w)) return v(h, y);
              }
            }
            function v(h, y) {
              (y == null || y > h.length) && (y = h.length);
              for (var w = 0, _ = new Array(y); w < y; w++) _[w] = h[w];
              return _;
            }
            function k(h, y) {
              if (
                !(h && y) ||
                (h.id && h.id !== y.id) ||
                (h.nodeName && h.nodeName !== y.nodeName) ||
                (h.classList &&
                  (!y.classList ||
                    h.classList
                      .map(function (_) {
                        return _.toLowerCase();
                      })
                      .some(function (_) {
                        return (
                          y.classList
                            .map(function (S) {
                              return S.toLowerCase();
                            })
                            .indexOf(_) === -1
                        );
                      })))
              )
                return !1;
              if (h.nthChild) {
                var w = parseInt(h.nthChild, 10);
                return isNaN(w) ? Math.abs(y.nthChild % 2) === (h.nthChild === 'odd' ? 1 : 0) : w === y.nthChild;
              }
              return !0;
            }
            function m(h, y) {
              var w = h.slice(0).reverse(),
                _,
                S = p(y),
                E;
              try {
                var j = function () {
                  var P = E.value;
                  if (P.directDesc)
                    return k.apply(void 0, [P].concat((0, c.default)(w.splice(0, 1)))) ? 'continue' : { v: !1 };
                  if (
                    ((_ = (0, f.default)(w, function (x) {
                      return k(P, x);
                    })),
                    _ === -1)
                  )
                    return { v: !1 };
                  w.splice(0, _ + 1);
                };
                for (S.s(); !(E = S.n()).done; ) {
                  var O = j();
                  if (O !== 'continue' && (0, d.default)(O) === 'object') return O.v;
                }
              } catch (b) {
                S.e(b);
              } finally {
                S.f();
              }
              return !0;
            }
          },
          './packages/@logrocket/utils/src/sendTelemetryData.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.sendTelemetry = m), (i.default = h);
            var c = u(o('./node_modules/@babel/runtime/helpers/defineProperty.js')),
              d = u(o('./packages/@logrocket/utils/src/logError.js')),
              f = u(o('./packages/@logrocket/utils/src/TraceKit.js'));
            function p(y, w) {
              var _ = Object.keys(y);
              if (Object.getOwnPropertySymbols) {
                var S = Object.getOwnPropertySymbols(y);
                w &&
                  (S = S.filter(function (E) {
                    return Object.getOwnPropertyDescriptor(y, E).enumerable;
                  })),
                  _.push.apply(_, S);
              }
              return _;
            }
            function g(y) {
              for (var w = 1; w < arguments.length; w++) {
                var _ = arguments[w] != null ? arguments[w] : {};
                w % 2
                  ? p(Object(_), !0).forEach(function (S) {
                      (0, c.default)(y, S, _[S]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(_))
                    : p(Object(_)).forEach(function (S) {
                        Object.defineProperty(y, S, Object.getOwnPropertyDescriptor(_, S));
                      });
              }
              return y;
            }
            var v = '26d51ca97d2fb189a318cbb9cfdf64c796cae88a';
            function k(y) {
              var w = window._lrXMLHttpRequest || XMLHttpRequest;
              try {
                var _ = new w(),
                  S = y.message,
                  E =
                    'https://e.logrocket.com/api/3/store/?sentry_version=7&sentry_client=http%2F3.8.0&sentry_key=b64162b4187a4c5caae8a68a7e291793';
                _.open('POST', E),
                  _.send(
                    JSON.stringify(
                      g(
                        {
                          message: S,
                          logger: 'javascript',
                          platform: 'javascript',
                          request: {
                            headers: { 'User-Agent': typeof navigator < 'u' && navigator.userAgent },
                            url: typeof location < 'u' && location.href,
                          },
                          release: v,
                          environment: 'test',
                        },
                        y,
                      ),
                    ),
                  );
              } catch (j) {
                (0, d.default)('Failed to send', j);
              }
            }
            function m(y, w) {
              if (typeof window < 'u' && window._lrdebug) return void (0, d.default)(y);
              (w &&
                w.extra &&
                w.extra.appID &&
                typeof w.extra.appID.indexOf == 'function' &&
                w.extra.appID.indexOf('au2drp/') === 0 &&
                Math.random() >= 0.25) ||
                k(g({ message: y }, w));
            }
            function h(y, w) {
              try {
                var _ = y.message,
                  S;
                try {
                  S = JSON.stringify(w).slice(0, 1e3);
                } catch {
                  try {
                    S = 'Could not stringify payload: '.concat(Object.prototype.toString.call(w));
                  } catch {}
                }
                var E;
                try {
                  E = f.default.computeStackTrace(y).stack.map(function (j) {
                    return { filename: j.url, lineno: j.line, colno: j.column, function: j.func || '?' };
                  });
                } catch {}
                k({
                  message: _,
                  extra: { stringPayload: S },
                  exception: { values: [{ type: y.type, value: _, stacktrace: { frames: E } }] },
                });
              } catch (j) {
                (0, d.default)('Failed to send', j);
              }
            }
          },
          './packages/@logrocket/utils/src/setFromArray.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = o);
            function o(u) {
              var c = new Set();
              return (
                u.forEach(function (d) {
                  return c.add(d);
                }),
                c
              );
            }
          },
          './packages/@logrocket/utils/src/setToArray.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = o);
            function o(u) {
              var c = [];
              return (
                u.forEach(function (d) {
                  return c.push(d);
                }),
                c
              );
            }
          },
          './packages/@logrocket/utils/src/shallowArsonify.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = o);
            function o(u) {
              var c = {}.toString.call(u);
              switch (c) {
                case '[object Undefined]':
                  return { undefined: {} };
                case '[object Null]':
                  return { null: {} };
                case '[object Boolean]':
                  return { boolean: { bool: u } };
                case '[object Number]':
                  return { number: { double: u } };
                case '[object String]':
                  return { string: { string: u } };
                case '[object Object]':
                  return { object: { map: u } };
                case '[object Array]':
                  return { array: { map: u } };
                case '[object Date]':
                  return { date: { double: u.getTime() } };
                case '[object Error]':
                  return { string: { string: ''.concat(u.name, ': ').concat(u.message) } };
                default:
                  return { unsupported: { type: c } };
              }
            }
          },
          './packages/@logrocket/utils/src/shallowDearsonify.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = o);
            function o(u) {
              var c = u.type || Object.keys(u)[0];
              switch (c) {
                case 'undefined':
                  return;
                case 'null':
                  return null;
                case 'boolean':
                  return u.boolean.bool;
                case 'number':
                  return u.number.double;
                case 'string':
                  return u.string.string;
                case 'object':
                  return u.object.map;
                case 'array':
                  return Object.keys(u.array.map).reduce(function (d, f) {
                    return (d[f] = u.array.map[f]), d;
                  }, []);
                case 'date':
                  return new Date(u.date.double);
                case 'unsupported':
                  return u.unsupported.type;
                default:
                  throw new TypeError('Unexpected value in shallowDearsonify: '.concat(u));
              }
            }
          },
          './packages/@logrocket/utils/src/startsWith.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = o);
            function o(u, c) {
              var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
              return u && c && u.substring(d, d + c.length) === c;
            }
          },
          './packages/@logrocket/utils/src/types.ts': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 });
          },
          './packages/@logrocket/utils/src/userTraitStrings.ts': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }),
              (i.parseUserTraitString = i.encodeUserTraitString = void 0);
            var o = ':',
              u = '',
              c = function () {
                for (var p = arguments.length, g = new Array(p), v = 0; v < p; v++) g[v] = arguments[v];
                return g
                  .map(function (k) {
                    return k.replace(new RegExp(o, 'g'), u);
                  })
                  .join(o);
              };
            i.encodeUserTraitString = c;
            var d = function (p) {
              var g = p || o;
              return g.split(o).map(function (v) {
                return v.replace(new RegExp(u, 'g'), o);
              });
            };
            i.parseUserTraitString = d;
          },
          './packages/@logrocket/utils/src/uuid.js': function (s, i) {
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = o);
            function o(u) {
              return u
                ? (u ^ ((Math.random() * 16) >> (u / 4))).toString(16)
                : ('10000000-1000-4000-8000' + -1e11).replace(/[018]/g, o);
            }
          },
          './packages/logrocket/src/LogRocket.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = i.MAX_QUEUE_SIZE = void 0);
            var c = u(o('./node_modules/@babel/runtime/helpers/classCallCheck.js')),
              d = u(o('./node_modules/@babel/runtime/helpers/createClass.js')),
              f = u(o('./node_modules/@babel/runtime/helpers/defineProperty.js')),
              p = u(o('./node_modules/@babel/runtime/helpers/objectWithoutProperties.js')),
              g = u(o('./packages/@logrocket/network/src/index.js')),
              v = o('./packages/@logrocket/exceptions/src/index.js'),
              k = u(o('./packages/@logrocket/console/src/index.js')),
              m = o('./packages/@logrocket/redux/src/index.js');
            function h(E, j) {
              var O = Object.keys(E);
              if (Object.getOwnPropertySymbols) {
                var b = Object.getOwnPropertySymbols(E);
                j &&
                  (b = b.filter(function (P) {
                    return Object.getOwnPropertyDescriptor(E, P).enumerable;
                  })),
                  O.push.apply(O, b);
              }
              return O;
            }
            function y(E) {
              for (var j = 1; j < arguments.length; j++) {
                var O = arguments[j] != null ? arguments[j] : {};
                j % 2
                  ? h(Object(O), !0).forEach(function (b) {
                      (0, f.default)(E, b, O[b]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(O))
                    : h(Object(O)).forEach(function (b) {
                        Object.defineProperty(E, b, Object.getOwnPropertyDescriptor(O, b));
                      });
              }
              return E;
            }
            var w = 1e3;
            i.MAX_QUEUE_SIZE = w;
            var _ = function () {
                var j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                  O = j.ingestServer,
                  b = (0, p.default)(j, ['ingestServer']);
                return O ? y({ serverURL: ''.concat(O, '/i'), statsURL: ''.concat(O, '/s') }, b) : b;
              },
              S = (function () {
                function E() {
                  var j = this;
                  (0, c.default)(this, E),
                    (this._buffer = []),
                    ['log', 'info', 'warn', 'error', 'debug'].forEach(function (O) {
                      j[O] = function () {
                        for (var b = arguments.length, P = new Array(b), x = 0; x < b; x++) P[x] = arguments[x];
                        j.addEvent(
                          'lr.core.LogEvent',
                          function () {
                            var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                            return (
                              O === 'error' &&
                                T.shouldAggregateConsoleErrors &&
                                v.Capture.captureMessage(j, P[0], P, {}, !0),
                              { logLevel: O.toUpperCase(), args: P }
                            );
                          },
                          { shouldCaptureStackTrace: !0 },
                        );
                      };
                    }),
                    (this._isInitialized = !1),
                    (this._installed = []),
                    (window._lr_surl_cb = this.getSessionURL.bind(this));
                }
                return (
                  (0, d.default)(E, [
                    {
                      key: 'addEvent',
                      value: function (O, b) {
                        var P = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                          x = Date.now();
                        this._run(function (T) {
                          T.addEvent(O, b, y(y({}, P), {}, { timeOverride: x }));
                        });
                      },
                    },
                    {
                      key: 'onLogger',
                      value: function (O) {
                        for (this._logger = O; this._buffer.length > 0; ) {
                          var b = this._buffer.shift();
                          b(this._logger);
                        }
                      },
                    },
                    {
                      key: '_run',
                      value: function (O) {
                        if (!this._isDisabled)
                          if (this._logger) O(this._logger);
                          else {
                            if (this._buffer.length >= w) {
                              (this._isDisabled = !0),
                                console.warn(
                                  'LogRocket: script did not load. Check that you have a valid network connection.',
                                ),
                                this.uninstall();
                              return;
                            }
                            this._buffer.push(O.bind(this));
                          }
                      },
                    },
                    {
                      key: 'init',
                      value: function (O) {
                        var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                        if (!this._isInitialized) {
                          var P = b.shouldAugmentNPS,
                            x = P === void 0 ? !0 : P,
                            T = b.shouldParseXHRBlob,
                            L = T === void 0 ? !1 : T,
                            z = b.shouldDetectExceptions,
                            U = z === void 0 ? !0 : z;
                          U && this._installed.push((0, v.registerExceptions)(this)),
                            this._installed.push(
                              (0, g.default)(this, { shouldAugmentNPS: !!x, shouldParseXHRBlob: !!L }),
                            ),
                            this._installed.push((0, k.default)(this)),
                            (this._isInitialized = !0),
                            this._run(function (B) {
                              B.init(O, _(b));
                            });
                        }
                      },
                    },
                    {
                      key: 'start',
                      value: function () {
                        this._run(function (O) {
                          O.start();
                        });
                      },
                    },
                    {
                      key: 'uninstall',
                      value: function () {
                        this._installed.forEach(function (O) {
                          return O();
                        }),
                          (this._buffer = []),
                          this._run(function (O) {
                            O.uninstall();
                          });
                      },
                    },
                    {
                      key: 'identify',
                      value: function (O, b) {
                        this._run(function (P) {
                          P.identify(O, b);
                        });
                      },
                    },
                    {
                      key: 'startNewSession',
                      value: function () {
                        this._run(function (O) {
                          O.startNewSession();
                        });
                      },
                    },
                    {
                      key: 'track',
                      value: function (O, b) {
                        this._run(function (P) {
                          P.track(O, b);
                        });
                      },
                    },
                    {
                      key: 'getSessionURL',
                      value: function (O) {
                        if (typeof O != 'function') throw new Error('LogRocket: must pass callback to getSessionURL()');
                        this._run(function (b) {
                          b.getSessionURL ? b.getSessionURL(O) : O(b.recordingURL);
                        });
                      },
                    },
                    {
                      key: 'getVersion',
                      value: function (O) {
                        this._run(function (b) {
                          O(b.version);
                        });
                      },
                    },
                    {
                      key: 'captureMessage',
                      value: function (O) {
                        var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                        v.Capture.captureMessage(this, O, [O], b);
                      },
                    },
                    {
                      key: 'captureException',
                      value: function (O) {
                        var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                        v.Capture.captureException(this, O, b);
                      },
                    },
                    {
                      key: 'version',
                      get: function () {
                        return this._logger && this._logger.version;
                      },
                    },
                    {
                      key: 'sessionURL',
                      get: function () {
                        return this._logger && this._logger.recordingURL;
                      },
                    },
                    {
                      key: 'recordingURL',
                      get: function () {
                        return this._logger && this._logger.recordingURL;
                      },
                    },
                    {
                      key: 'recordingID',
                      get: function () {
                        return this._logger && this._logger.recordingID;
                      },
                    },
                    {
                      key: 'threadID',
                      get: function () {
                        return this._logger && this._logger.threadID;
                      },
                    },
                    {
                      key: 'tabID',
                      get: function () {
                        return this._logger && this._logger.tabID;
                      },
                    },
                    {
                      key: 'reduxEnhancer',
                      value: function () {
                        var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                        return (0, m.createEnhancer)(this, O);
                      },
                    },
                    {
                      key: 'reduxMiddleware',
                      value: function () {
                        var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                        return (0, m.createMiddleware)(this, O);
                      },
                    },
                    {
                      key: 'isDisabled',
                      get: function () {
                        return !!(this._isDisabled || (this._logger && this._logger._isDisabled));
                      },
                    },
                  ]),
                  E
                );
              })();
            i.default = S;
          },
          './packages/logrocket/src/makeLogRocket.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = p);
            var c = u(o('./packages/logrocket/src/LogRocket.js')),
              d = 'LogRocket does not yet support React Native.',
              f = function () {
                return {
                  init: function () {},
                  uninstall: function () {},
                  log: function () {},
                  info: function () {},
                  warn: function () {},
                  error: function () {},
                  debug: function () {},
                  addEvent: function () {},
                  identify: function () {},
                  start: function () {},
                  get threadID() {
                    return null;
                  },
                  get recordingID() {
                    return null;
                  },
                  get recordingURL() {
                    return null;
                  },
                  reduxEnhancer: function () {
                    return function (k) {
                      return function () {
                        return k.apply(void 0, arguments);
                      };
                    };
                  },
                  reduxMiddleware: function () {
                    return function () {
                      return function (k) {
                        return function (m) {
                          return k(m);
                        };
                      };
                    };
                  },
                  track: function () {},
                  getSessionURL: function () {},
                  getVersion: function () {},
                  startNewSession: function () {},
                  onLogger: function () {},
                  setClock: function () {},
                  captureMessage: function () {},
                  captureException: function () {},
                };
              };
            function p() {
              var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function () {};
              if (typeof navigator < 'u' && navigator.product === 'ReactNative') throw new Error(d);
              if (typeof window < 'u') {
                if (window._disableLogRocket) return f();
                if (window.MutationObserver && window.WeakMap) {
                  window._lrMutationObserver = window.MutationObserver;
                  var v = new c.default();
                  return g(v), v;
                }
              }
              return f();
            }
          },
          './packages/logrocket/src/setup.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/interopRequireDefault.js');
            Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = p);
            var c = u(o('./node_modules/@babel/runtime/helpers/objectWithoutProperties.js')),
              d = u(o('./packages/logrocket/src/makeLogRocket.js')),
              f = {
                'cdn.logrocket.io': 'https://r.logrocket.io',
                'cdn.lr-ingest.io': 'https://r.lr-ingest.io',
                'cdn.lr-in.com': 'https://r.lr-in.com',
                'cdn.lr-in-prod.com': 'https://r.lr-in-prod.com',
                'cdn.lr-ingest.com': 'https://r.lr-ingest.com',
                'cdn.ingest-lr.com': 'https://r.ingest-lr.com',
                'cdn.lr-intake.com': 'https://r.lr-intake.com',
                'cdn.intake-lr.com': 'https://r.intake-lr.com',
                'cdn-staging.logrocket.io': 'https://staging-i.logrocket.io',
                'cdn-staging.lr-ingest.io': 'https://staging-i.lr-ingest.io',
                'cdn-staging.lr-in.com': 'https://staging-i.lr-in.com',
                'cdn-staging.lr-in-prod.com': 'https://staging-i.lr-in-prod.com',
                'cdn-staging.lr-ingest.com': 'https://staging-i.lr-ingest.com',
                'cdn-staging.ingest-lr.com': 'https://staging-i.ingest-lr.com',
                'cdn-staging.lr-intake.com': 'https://staging-i.lr-intake.com',
                'cdn-staging.intake-lr.com': 'https://staging-i.intake-lr.com',
              };
            function p() {
              var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                v = g.enterpriseServer,
                k = g.sdkVersion,
                m = k === void 0 ? '7.0.0' : k,
                h = (0, c.default)(g, ['enterpriseServer', 'sdkVersion']),
                y = 'https://cdn.logrocket.io',
                w;
              if (m === 'script')
                try {
                  var _ = document.currentScript,
                    S = _.src.match(/^(https?:\/\/([^\\]+))\/.+$/),
                    E = S && S[2];
                  E && f[E] && ((y = S && S[1]), (w = f[E]));
                } catch {}
              else (y = 'https://cdn.intake-lr.com'), (w = 'https://r.intake-lr.com');
              var j = h.sdkServer || v,
                O = h.ingestServer || v || w,
                b = (0, d.default)(function () {
                  var P = document.createElement('script');
                  O &&
                    (typeof window.__SDKCONFIG__ > 'u' && (window.__SDKCONFIG__ = {}),
                    (window.__SDKCONFIG__.serverURL = ''.concat(O, '/i')),
                    (window.__SDKCONFIG__.statsURL = ''.concat(O, '/s'))),
                    j
                      ? (P.src = ''.concat(j, '/logger.min.js'))
                      : window.__SDKCONFIG__ && window.__SDKCONFIG__.loggerURL
                        ? (P.src = window.__SDKCONFIG__.loggerURL)
                        : window._lrAsyncScript
                          ? (P.src = window._lrAsyncScript)
                          : (P.src = ''.concat(y, '/logger-1.min.js')),
                    (P.async = !0),
                    document.head.appendChild(P),
                    (P.onload = function () {
                      typeof window._LRLogger == 'function'
                        ? b.onLogger(new window._LRLogger({ sdkVersion: m }))
                        : (console.warn('LogRocket: script execution has been blocked by a product or service.'),
                          b.uninstall());
                    }),
                    (P.onerror = function () {
                      console.warn('LogRocket: script could not load. Check that you have a valid network connection.'),
                        b.uninstall();
                    });
                });
              return b;
            }
          },
          './packages/@logrocket/utils/node_modules/lodash/_DataView.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_getNative.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_root.js'),
              d = u(c, 'DataView');
            s.exports = d;
          },
          './packages/@logrocket/utils/node_modules/lodash/_Hash.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_hashClear.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_hashDelete.js'),
              d = o('./packages/@logrocket/utils/node_modules/lodash/_hashGet.js'),
              f = o('./packages/@logrocket/utils/node_modules/lodash/_hashHas.js'),
              p = o('./packages/@logrocket/utils/node_modules/lodash/_hashSet.js');
            function g(v) {
              var k = -1,
                m = v == null ? 0 : v.length;
              for (this.clear(); ++k < m; ) {
                var h = v[k];
                this.set(h[0], h[1]);
              }
            }
            (g.prototype.clear = u),
              (g.prototype.delete = c),
              (g.prototype.get = d),
              (g.prototype.has = f),
              (g.prototype.set = p),
              (s.exports = g);
          },
          './packages/@logrocket/utils/node_modules/lodash/_ListCache.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_listCacheClear.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_listCacheDelete.js'),
              d = o('./packages/@logrocket/utils/node_modules/lodash/_listCacheGet.js'),
              f = o('./packages/@logrocket/utils/node_modules/lodash/_listCacheHas.js'),
              p = o('./packages/@logrocket/utils/node_modules/lodash/_listCacheSet.js');
            function g(v) {
              var k = -1,
                m = v == null ? 0 : v.length;
              for (this.clear(); ++k < m; ) {
                var h = v[k];
                this.set(h[0], h[1]);
              }
            }
            (g.prototype.clear = u),
              (g.prototype.delete = c),
              (g.prototype.get = d),
              (g.prototype.has = f),
              (g.prototype.set = p),
              (s.exports = g);
          },
          './packages/@logrocket/utils/node_modules/lodash/_Map.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_getNative.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_root.js'),
              d = u(c, 'Map');
            s.exports = d;
          },
          './packages/@logrocket/utils/node_modules/lodash/_MapCache.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_mapCacheClear.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_mapCacheDelete.js'),
              d = o('./packages/@logrocket/utils/node_modules/lodash/_mapCacheGet.js'),
              f = o('./packages/@logrocket/utils/node_modules/lodash/_mapCacheHas.js'),
              p = o('./packages/@logrocket/utils/node_modules/lodash/_mapCacheSet.js');
            function g(v) {
              var k = -1,
                m = v == null ? 0 : v.length;
              for (this.clear(); ++k < m; ) {
                var h = v[k];
                this.set(h[0], h[1]);
              }
            }
            (g.prototype.clear = u),
              (g.prototype.delete = c),
              (g.prototype.get = d),
              (g.prototype.has = f),
              (g.prototype.set = p),
              (s.exports = g);
          },
          './packages/@logrocket/utils/node_modules/lodash/_Promise.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_getNative.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_root.js'),
              d = u(c, 'Promise');
            s.exports = d;
          },
          './packages/@logrocket/utils/node_modules/lodash/_Set.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_getNative.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_root.js'),
              d = u(c, 'Set');
            s.exports = d;
          },
          './packages/@logrocket/utils/node_modules/lodash/_SetCache.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_MapCache.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_setCacheAdd.js'),
              d = o('./packages/@logrocket/utils/node_modules/lodash/_setCacheHas.js');
            function f(p) {
              var g = -1,
                v = p == null ? 0 : p.length;
              for (this.__data__ = new u(); ++g < v; ) this.add(p[g]);
            }
            (f.prototype.add = f.prototype.push = c), (f.prototype.has = d), (s.exports = f);
          },
          './packages/@logrocket/utils/node_modules/lodash/_Stack.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_ListCache.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_stackClear.js'),
              d = o('./packages/@logrocket/utils/node_modules/lodash/_stackDelete.js'),
              f = o('./packages/@logrocket/utils/node_modules/lodash/_stackGet.js'),
              p = o('./packages/@logrocket/utils/node_modules/lodash/_stackHas.js'),
              g = o('./packages/@logrocket/utils/node_modules/lodash/_stackSet.js');
            function v(k) {
              var m = (this.__data__ = new u(k));
              this.size = m.size;
            }
            (v.prototype.clear = c),
              (v.prototype.delete = d),
              (v.prototype.get = f),
              (v.prototype.has = p),
              (v.prototype.set = g),
              (s.exports = v);
          },
          './packages/@logrocket/utils/node_modules/lodash/_Symbol.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_root.js'),
              c = u.Symbol;
            s.exports = c;
          },
          './packages/@logrocket/utils/node_modules/lodash/_Uint8Array.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_root.js'),
              c = u.Uint8Array;
            s.exports = c;
          },
          './packages/@logrocket/utils/node_modules/lodash/_WeakMap.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_getNative.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_root.js'),
              d = u(c, 'WeakMap');
            s.exports = d;
          },
          './packages/@logrocket/utils/node_modules/lodash/_arrayFilter.js': function (s) {
            function i(o, u) {
              for (var c = -1, d = o == null ? 0 : o.length, f = 0, p = []; ++c < d; ) {
                var g = o[c];
                u(g, c, o) && (p[f++] = g);
              }
              return p;
            }
            s.exports = i;
          },
          './packages/@logrocket/utils/node_modules/lodash/_arrayLikeKeys.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_baseTimes.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/isArguments.js'),
              d = o('./packages/@logrocket/utils/node_modules/lodash/isArray.js'),
              f = o('./packages/@logrocket/utils/node_modules/lodash/isBuffer.js'),
              p = o('./packages/@logrocket/utils/node_modules/lodash/_isIndex.js'),
              g = o('./packages/@logrocket/utils/node_modules/lodash/isTypedArray.js'),
              v = Object.prototype,
              k = v.hasOwnProperty;
            function m(h, y) {
              var w = d(h),
                _ = !w && c(h),
                S = !w && !_ && f(h),
                E = !w && !_ && !S && g(h),
                j = w || _ || S || E,
                O = j ? u(h.length, String) : [],
                b = O.length;
              for (var P in h)
                (y || k.call(h, P)) &&
                  !(
                    j &&
                    (P == 'length' ||
                      (S && (P == 'offset' || P == 'parent')) ||
                      (E && (P == 'buffer' || P == 'byteLength' || P == 'byteOffset')) ||
                      p(P, b))
                  ) &&
                  O.push(P);
              return O;
            }
            s.exports = m;
          },
          './packages/@logrocket/utils/node_modules/lodash/_arrayMap.js': function (s) {
            function i(o, u) {
              for (var c = -1, d = o == null ? 0 : o.length, f = Array(d); ++c < d; ) f[c] = u(o[c], c, o);
              return f;
            }
            s.exports = i;
          },
          './packages/@logrocket/utils/node_modules/lodash/_arrayPush.js': function (s) {
            function i(o, u) {
              for (var c = -1, d = u.length, f = o.length; ++c < d; ) o[f + c] = u[c];
              return o;
            }
            s.exports = i;
          },
          './packages/@logrocket/utils/node_modules/lodash/_arraySome.js': function (s) {
            function i(o, u) {
              for (var c = -1, d = o == null ? 0 : o.length; ++c < d; ) if (u(o[c], c, o)) return !0;
              return !1;
            }
            s.exports = i;
          },
          './packages/@logrocket/utils/node_modules/lodash/_assocIndexOf.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/eq.js');
            function c(d, f) {
              for (var p = d.length; p--; ) if (u(d[p][0], f)) return p;
              return -1;
            }
            s.exports = c;
          },
          './packages/@logrocket/utils/node_modules/lodash/_baseGet.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_castPath.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_toKey.js');
            function d(f, p) {
              p = u(p, f);
              for (var g = 0, v = p.length; f != null && g < v; ) f = f[c(p[g++])];
              return g && g == v ? f : void 0;
            }
            s.exports = d;
          },
          './packages/@logrocket/utils/node_modules/lodash/_baseGetAllKeys.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_arrayPush.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/isArray.js');
            function d(f, p, g) {
              var v = p(f);
              return c(f) ? v : u(v, g(f));
            }
            s.exports = d;
          },
          './packages/@logrocket/utils/node_modules/lodash/_baseGetTag.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_Symbol.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_getRawTag.js'),
              d = o('./packages/@logrocket/utils/node_modules/lodash/_objectToString.js'),
              f = '[object Null]',
              p = '[object Undefined]',
              g = u ? u.toStringTag : void 0;
            function v(k) {
              return k == null ? (k === void 0 ? p : f) : g && g in Object(k) ? c(k) : d(k);
            }
            s.exports = v;
          },
          './packages/@logrocket/utils/node_modules/lodash/_baseHasIn.js': function (s) {
            function i(o, u) {
              return o != null && u in Object(o);
            }
            s.exports = i;
          },
          './packages/@logrocket/utils/node_modules/lodash/_baseIsArguments.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_baseGetTag.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/isObjectLike.js'),
              d = '[object Arguments]';
            function f(p) {
              return c(p) && u(p) == d;
            }
            s.exports = f;
          },
          './packages/@logrocket/utils/node_modules/lodash/_baseIsEqual.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_baseIsEqualDeep.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/isObjectLike.js');
            function d(f, p, g, v, k) {
              return f === p
                ? !0
                : f == null || p == null || (!c(f) && !c(p))
                  ? f !== f && p !== p
                  : u(f, p, g, v, d, k);
            }
            s.exports = d;
          },
          './packages/@logrocket/utils/node_modules/lodash/_baseIsEqualDeep.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_Stack.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_equalArrays.js'),
              d = o('./packages/@logrocket/utils/node_modules/lodash/_equalByTag.js'),
              f = o('./packages/@logrocket/utils/node_modules/lodash/_equalObjects.js'),
              p = o('./packages/@logrocket/utils/node_modules/lodash/_getTag.js'),
              g = o('./packages/@logrocket/utils/node_modules/lodash/isArray.js'),
              v = o('./packages/@logrocket/utils/node_modules/lodash/isBuffer.js'),
              k = o('./packages/@logrocket/utils/node_modules/lodash/isTypedArray.js'),
              m = 1,
              h = '[object Arguments]',
              y = '[object Array]',
              w = '[object Object]',
              _ = Object.prototype,
              S = _.hasOwnProperty;
            function E(j, O, b, P, x, T) {
              var L = g(j),
                z = g(O),
                U = L ? y : p(j),
                B = z ? y : p(O);
              (U = U == h ? w : U), (B = B == h ? w : B);
              var I = U == w,
                N = B == w,
                M = U == B;
              if (M && v(j)) {
                if (!v(O)) return !1;
                (L = !0), (I = !1);
              }
              if (M && !I) return T || (T = new u()), L || k(j) ? c(j, O, b, P, x, T) : d(j, O, U, b, P, x, T);
              if (!(b & m)) {
                var V = I && S.call(j, '__wrapped__'),
                  Y = N && S.call(O, '__wrapped__');
                if (V || Y) {
                  var ne = V ? j.value() : j,
                    ee = Y ? O.value() : O;
                  return T || (T = new u()), x(ne, ee, b, P, T);
                }
              }
              return M ? (T || (T = new u()), f(j, O, b, P, x, T)) : !1;
            }
            s.exports = E;
          },
          './packages/@logrocket/utils/node_modules/lodash/_baseIsMatch.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_Stack.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_baseIsEqual.js'),
              d = 1,
              f = 2;
            function p(g, v, k, m) {
              var h = k.length,
                y = h,
                w = !m;
              if (g == null) return !y;
              for (g = Object(g); h--; ) {
                var _ = k[h];
                if (w && _[2] ? _[1] !== g[_[0]] : !(_[0] in g)) return !1;
              }
              for (; ++h < y; ) {
                _ = k[h];
                var S = _[0],
                  E = g[S],
                  j = _[1];
                if (w && _[2]) {
                  if (E === void 0 && !(S in g)) return !1;
                } else {
                  var O = new u();
                  if (m) var b = m(E, j, S, g, v, O);
                  if (!(b === void 0 ? c(j, E, d | f, m, O) : b)) return !1;
                }
              }
              return !0;
            }
            s.exports = p;
          },
          './packages/@logrocket/utils/node_modules/lodash/_baseIsNative.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/isFunction.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_isMasked.js'),
              d = o('./packages/@logrocket/utils/node_modules/lodash/isObject.js'),
              f = o('./packages/@logrocket/utils/node_modules/lodash/_toSource.js'),
              p = /[\\^$.*+?()[\]{}|]/g,
              g = /^\[object .+?Constructor\]$/,
              v = Function.prototype,
              k = Object.prototype,
              m = v.toString,
              h = k.hasOwnProperty,
              y = RegExp(
                '^' +
                  m
                    .call(h)
                    .replace(p, '\\$&')
                    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
                  '$',
              );
            function w(_) {
              if (!d(_) || c(_)) return !1;
              var S = u(_) ? y : g;
              return S.test(f(_));
            }
            s.exports = w;
          },
          './packages/@logrocket/utils/node_modules/lodash/_baseIsTypedArray.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_baseGetTag.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/isLength.js'),
              d = o('./packages/@logrocket/utils/node_modules/lodash/isObjectLike.js'),
              f = '[object Arguments]',
              p = '[object Array]',
              g = '[object Boolean]',
              v = '[object Date]',
              k = '[object Error]',
              m = '[object Function]',
              h = '[object Map]',
              y = '[object Number]',
              w = '[object Object]',
              _ = '[object RegExp]',
              S = '[object Set]',
              E = '[object String]',
              j = '[object WeakMap]',
              O = '[object ArrayBuffer]',
              b = '[object DataView]',
              P = '[object Float32Array]',
              x = '[object Float64Array]',
              T = '[object Int8Array]',
              L = '[object Int16Array]',
              z = '[object Int32Array]',
              U = '[object Uint8Array]',
              B = '[object Uint8ClampedArray]',
              I = '[object Uint16Array]',
              N = '[object Uint32Array]',
              M = {};
            (M[P] = M[x] = M[T] = M[L] = M[z] = M[U] = M[B] = M[I] = M[N] = !0),
              (M[f] =
                M[p] =
                M[O] =
                M[g] =
                M[b] =
                M[v] =
                M[k] =
                M[m] =
                M[h] =
                M[y] =
                M[w] =
                M[_] =
                M[S] =
                M[E] =
                M[j] =
                  !1);
            function V(Y) {
              return d(Y) && c(Y.length) && !!M[u(Y)];
            }
            s.exports = V;
          },
          './packages/@logrocket/utils/node_modules/lodash/_baseIteratee.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_baseMatches.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_baseMatchesProperty.js'),
              d = o('./packages/@logrocket/utils/node_modules/lodash/identity.js'),
              f = o('./packages/@logrocket/utils/node_modules/lodash/isArray.js'),
              p = o('./packages/@logrocket/utils/node_modules/lodash/property.js');
            function g(v) {
              return typeof v == 'function'
                ? v
                : v == null
                  ? d
                  : typeof v == 'object'
                    ? f(v)
                      ? c(v[0], v[1])
                      : u(v)
                    : p(v);
            }
            s.exports = g;
          },
          './packages/@logrocket/utils/node_modules/lodash/_baseKeys.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_isPrototype.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_nativeKeys.js'),
              d = Object.prototype,
              f = d.hasOwnProperty;
            function p(g) {
              if (!u(g)) return c(g);
              var v = [];
              for (var k in Object(g)) f.call(g, k) && k != 'constructor' && v.push(k);
              return v;
            }
            s.exports = p;
          },
          './packages/@logrocket/utils/node_modules/lodash/_baseMatches.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_baseIsMatch.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_getMatchData.js'),
              d = o('./packages/@logrocket/utils/node_modules/lodash/_matchesStrictComparable.js');
            function f(p) {
              var g = c(p);
              return g.length == 1 && g[0][2]
                ? d(g[0][0], g[0][1])
                : function (v) {
                    return v === p || u(v, p, g);
                  };
            }
            s.exports = f;
          },
          './packages/@logrocket/utils/node_modules/lodash/_baseMatchesProperty.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_baseIsEqual.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/get.js'),
              d = o('./packages/@logrocket/utils/node_modules/lodash/hasIn.js'),
              f = o('./packages/@logrocket/utils/node_modules/lodash/_isKey.js'),
              p = o('./packages/@logrocket/utils/node_modules/lodash/_isStrictComparable.js'),
              g = o('./packages/@logrocket/utils/node_modules/lodash/_matchesStrictComparable.js'),
              v = o('./packages/@logrocket/utils/node_modules/lodash/_toKey.js'),
              k = 1,
              m = 2;
            function h(y, w) {
              return f(y) && p(w)
                ? g(v(y), w)
                : function (_) {
                    var S = c(_, y);
                    return S === void 0 && S === w ? d(_, y) : u(w, S, k | m);
                  };
            }
            s.exports = h;
          },
          './packages/@logrocket/utils/node_modules/lodash/_baseProperty.js': function (s) {
            function i(o) {
              return function (u) {
                return u == null ? void 0 : u[o];
              };
            }
            s.exports = i;
          },
          './packages/@logrocket/utils/node_modules/lodash/_basePropertyDeep.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_baseGet.js');
            function c(d) {
              return function (f) {
                return u(f, d);
              };
            }
            s.exports = c;
          },
          './packages/@logrocket/utils/node_modules/lodash/_baseSortedIndexBy.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/isSymbol.js'),
              c = 4294967295,
              d = c - 1,
              f = Math.floor,
              p = Math.min;
            function g(v, k, m, h) {
              var y = 0,
                w = v == null ? 0 : v.length;
              if (w === 0) return 0;
              k = m(k);
              for (var _ = k !== k, S = k === null, E = u(k), j = k === void 0; y < w; ) {
                var O = f((y + w) / 2),
                  b = m(v[O]),
                  P = b !== void 0,
                  x = b === null,
                  T = b === b,
                  L = u(b);
                if (_) var z = h || T;
                else
                  j
                    ? (z = T && (h || P))
                    : S
                      ? (z = T && P && (h || !x))
                      : E
                        ? (z = T && P && !x && (h || !L))
                        : x || L
                          ? (z = !1)
                          : (z = h ? b <= k : b < k);
                z ? (y = O + 1) : (w = O);
              }
              return p(w, d);
            }
            s.exports = g;
          },
          './packages/@logrocket/utils/node_modules/lodash/_baseTimes.js': function (s) {
            function i(o, u) {
              for (var c = -1, d = Array(o); ++c < o; ) d[c] = u(c);
              return d;
            }
            s.exports = i;
          },
          './packages/@logrocket/utils/node_modules/lodash/_baseToString.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_Symbol.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_arrayMap.js'),
              d = o('./packages/@logrocket/utils/node_modules/lodash/isArray.js'),
              f = o('./packages/@logrocket/utils/node_modules/lodash/isSymbol.js'),
              p = 1 / 0,
              g = u ? u.prototype : void 0,
              v = g ? g.toString : void 0;
            function k(m) {
              if (typeof m == 'string') return m;
              if (d(m)) return c(m, k) + '';
              if (f(m)) return v ? v.call(m) : '';
              var h = m + '';
              return h == '0' && 1 / m == -p ? '-0' : h;
            }
            s.exports = k;
          },
          './packages/@logrocket/utils/node_modules/lodash/_baseUnary.js': function (s) {
            function i(o) {
              return function (u) {
                return o(u);
              };
            }
            s.exports = i;
          },
          './packages/@logrocket/utils/node_modules/lodash/_cacheHas.js': function (s) {
            function i(o, u) {
              return o.has(u);
            }
            s.exports = i;
          },
          './packages/@logrocket/utils/node_modules/lodash/_castPath.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/isArray.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_isKey.js'),
              d = o('./packages/@logrocket/utils/node_modules/lodash/_stringToPath.js'),
              f = o('./packages/@logrocket/utils/node_modules/lodash/toString.js');
            function p(g, v) {
              return u(g) ? g : c(g, v) ? [g] : d(f(g));
            }
            s.exports = p;
          },
          './packages/@logrocket/utils/node_modules/lodash/_coreJsData.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_root.js'),
              c = u['__core-js_shared__'];
            s.exports = c;
          },
          './packages/@logrocket/utils/node_modules/lodash/_equalArrays.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_SetCache.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_arraySome.js'),
              d = o('./packages/@logrocket/utils/node_modules/lodash/_cacheHas.js'),
              f = 1,
              p = 2;
            function g(v, k, m, h, y, w) {
              var _ = m & f,
                S = v.length,
                E = k.length;
              if (S != E && !(_ && E > S)) return !1;
              var j = w.get(v),
                O = w.get(k);
              if (j && O) return j == k && O == v;
              var b = -1,
                P = !0,
                x = m & p ? new u() : void 0;
              for (w.set(v, k), w.set(k, v); ++b < S; ) {
                var T = v[b],
                  L = k[b];
                if (h) var z = _ ? h(L, T, b, k, v, w) : h(T, L, b, v, k, w);
                if (z !== void 0) {
                  if (z) continue;
                  P = !1;
                  break;
                }
                if (x) {
                  if (
                    !c(k, function (U, B) {
                      if (!d(x, B) && (T === U || y(T, U, m, h, w))) return x.push(B);
                    })
                  ) {
                    P = !1;
                    break;
                  }
                } else if (!(T === L || y(T, L, m, h, w))) {
                  P = !1;
                  break;
                }
              }
              return w.delete(v), w.delete(k), P;
            }
            s.exports = g;
          },
          './packages/@logrocket/utils/node_modules/lodash/_equalByTag.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_Symbol.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_Uint8Array.js'),
              d = o('./packages/@logrocket/utils/node_modules/lodash/eq.js'),
              f = o('./packages/@logrocket/utils/node_modules/lodash/_equalArrays.js'),
              p = o('./packages/@logrocket/utils/node_modules/lodash/_mapToArray.js'),
              g = o('./packages/@logrocket/utils/node_modules/lodash/_setToArray.js'),
              v = 1,
              k = 2,
              m = '[object Boolean]',
              h = '[object Date]',
              y = '[object Error]',
              w = '[object Map]',
              _ = '[object Number]',
              S = '[object RegExp]',
              E = '[object Set]',
              j = '[object String]',
              O = '[object Symbol]',
              b = '[object ArrayBuffer]',
              P = '[object DataView]',
              x = u ? u.prototype : void 0,
              T = x ? x.valueOf : void 0;
            function L(z, U, B, I, N, M, V) {
              switch (B) {
                case P:
                  if (z.byteLength != U.byteLength || z.byteOffset != U.byteOffset) return !1;
                  (z = z.buffer), (U = U.buffer);
                case b:
                  return !(z.byteLength != U.byteLength || !M(new c(z), new c(U)));
                case m:
                case h:
                case _:
                  return d(+z, +U);
                case y:
                  return z.name == U.name && z.message == U.message;
                case S:
                case j:
                  return z == U + '';
                case w:
                  var Y = p;
                case E:
                  var ne = I & v;
                  if ((Y || (Y = g), z.size != U.size && !ne)) return !1;
                  var ee = V.get(z);
                  if (ee) return ee == U;
                  (I |= k), V.set(z, U);
                  var J = f(Y(z), Y(U), I, N, M, V);
                  return V.delete(z), J;
                case O:
                  if (T) return T.call(z) == T.call(U);
              }
              return !1;
            }
            s.exports = L;
          },
          './packages/@logrocket/utils/node_modules/lodash/_equalObjects.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_getAllKeys.js'),
              c = 1,
              d = Object.prototype,
              f = d.hasOwnProperty;
            function p(g, v, k, m, h, y) {
              var w = k & c,
                _ = u(g),
                S = _.length,
                E = u(v),
                j = E.length;
              if (S != j && !w) return !1;
              for (var O = S; O--; ) {
                var b = _[O];
                if (!(w ? b in v : f.call(v, b))) return !1;
              }
              var P = y.get(g),
                x = y.get(v);
              if (P && x) return P == v && x == g;
              var T = !0;
              y.set(g, v), y.set(v, g);
              for (var L = w; ++O < S; ) {
                b = _[O];
                var z = g[b],
                  U = v[b];
                if (m) var B = w ? m(U, z, b, v, g, y) : m(z, U, b, g, v, y);
                if (!(B === void 0 ? z === U || h(z, U, k, m, y) : B)) {
                  T = !1;
                  break;
                }
                L || (L = b == 'constructor');
              }
              if (T && !L) {
                var I = g.constructor,
                  N = v.constructor;
                I != N &&
                  'constructor' in g &&
                  'constructor' in v &&
                  !(typeof I == 'function' && I instanceof I && typeof N == 'function' && N instanceof N) &&
                  (T = !1);
              }
              return y.delete(g), y.delete(v), T;
            }
            s.exports = p;
          },
          './packages/@logrocket/utils/node_modules/lodash/_freeGlobal.js': function (s, i, o) {
            var u = typeof o.g == 'object' && o.g && o.g.Object === Object && o.g;
            s.exports = u;
          },
          './packages/@logrocket/utils/node_modules/lodash/_getAllKeys.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_baseGetAllKeys.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_getSymbols.js'),
              d = o('./packages/@logrocket/utils/node_modules/lodash/keys.js');
            function f(p) {
              return u(p, d, c);
            }
            s.exports = f;
          },
          './packages/@logrocket/utils/node_modules/lodash/_getMapData.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_isKeyable.js');
            function c(d, f) {
              var p = d.__data__;
              return u(f) ? p[typeof f == 'string' ? 'string' : 'hash'] : p.map;
            }
            s.exports = c;
          },
          './packages/@logrocket/utils/node_modules/lodash/_getMatchData.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_isStrictComparable.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/keys.js');
            function d(f) {
              for (var p = c(f), g = p.length; g--; ) {
                var v = p[g],
                  k = f[v];
                p[g] = [v, k, u(k)];
              }
              return p;
            }
            s.exports = d;
          },
          './packages/@logrocket/utils/node_modules/lodash/_getNative.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_baseIsNative.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_getValue.js');
            function d(f, p) {
              var g = c(f, p);
              return u(g) ? g : void 0;
            }
            s.exports = d;
          },
          './packages/@logrocket/utils/node_modules/lodash/_getRawTag.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_Symbol.js'),
              c = Object.prototype,
              d = c.hasOwnProperty,
              f = c.toString,
              p = u ? u.toStringTag : void 0;
            function g(v) {
              var k = d.call(v, p),
                m = v[p];
              try {
                v[p] = void 0;
                var h = !0;
              } catch {}
              var y = f.call(v);
              return h && (k ? (v[p] = m) : delete v[p]), y;
            }
            s.exports = g;
          },
          './packages/@logrocket/utils/node_modules/lodash/_getSymbols.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_arrayFilter.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/stubArray.js'),
              d = Object.prototype,
              f = d.propertyIsEnumerable,
              p = Object.getOwnPropertySymbols,
              g = p
                ? function (v) {
                    return v == null
                      ? []
                      : ((v = Object(v)),
                        u(p(v), function (k) {
                          return f.call(v, k);
                        }));
                  }
                : c;
            s.exports = g;
          },
          './packages/@logrocket/utils/node_modules/lodash/_getTag.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_DataView.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_Map.js'),
              d = o('./packages/@logrocket/utils/node_modules/lodash/_Promise.js'),
              f = o('./packages/@logrocket/utils/node_modules/lodash/_Set.js'),
              p = o('./packages/@logrocket/utils/node_modules/lodash/_WeakMap.js'),
              g = o('./packages/@logrocket/utils/node_modules/lodash/_baseGetTag.js'),
              v = o('./packages/@logrocket/utils/node_modules/lodash/_toSource.js'),
              k = '[object Map]',
              m = '[object Object]',
              h = '[object Promise]',
              y = '[object Set]',
              w = '[object WeakMap]',
              _ = '[object DataView]',
              S = v(u),
              E = v(c),
              j = v(d),
              O = v(f),
              b = v(p),
              P = g;
            ((u && P(new u(new ArrayBuffer(1))) != _) ||
              (c && P(new c()) != k) ||
              (d && P(d.resolve()) != h) ||
              (f && P(new f()) != y) ||
              (p && P(new p()) != w)) &&
              (P = function (x) {
                var T = g(x),
                  L = T == m ? x.constructor : void 0,
                  z = L ? v(L) : '';
                if (z)
                  switch (z) {
                    case S:
                      return _;
                    case E:
                      return k;
                    case j:
                      return h;
                    case O:
                      return y;
                    case b:
                      return w;
                  }
                return T;
              }),
              (s.exports = P);
          },
          './packages/@logrocket/utils/node_modules/lodash/_getValue.js': function (s) {
            function i(o, u) {
              return o == null ? void 0 : o[u];
            }
            s.exports = i;
          },
          './packages/@logrocket/utils/node_modules/lodash/_hasPath.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_castPath.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/isArguments.js'),
              d = o('./packages/@logrocket/utils/node_modules/lodash/isArray.js'),
              f = o('./packages/@logrocket/utils/node_modules/lodash/_isIndex.js'),
              p = o('./packages/@logrocket/utils/node_modules/lodash/isLength.js'),
              g = o('./packages/@logrocket/utils/node_modules/lodash/_toKey.js');
            function v(k, m, h) {
              m = u(m, k);
              for (var y = -1, w = m.length, _ = !1; ++y < w; ) {
                var S = g(m[y]);
                if (!(_ = k != null && h(k, S))) break;
                k = k[S];
              }
              return _ || ++y != w ? _ : ((w = k == null ? 0 : k.length), !!w && p(w) && f(S, w) && (d(k) || c(k)));
            }
            s.exports = v;
          },
          './packages/@logrocket/utils/node_modules/lodash/_hashClear.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_nativeCreate.js');
            function c() {
              (this.__data__ = u ? u(null) : {}), (this.size = 0);
            }
            s.exports = c;
          },
          './packages/@logrocket/utils/node_modules/lodash/_hashDelete.js': function (s) {
            function i(o) {
              var u = this.has(o) && delete this.__data__[o];
              return (this.size -= u ? 1 : 0), u;
            }
            s.exports = i;
          },
          './packages/@logrocket/utils/node_modules/lodash/_hashGet.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_nativeCreate.js'),
              c = '__lodash_hash_undefined__',
              d = Object.prototype,
              f = d.hasOwnProperty;
            function p(g) {
              var v = this.__data__;
              if (u) {
                var k = v[g];
                return k === c ? void 0 : k;
              }
              return f.call(v, g) ? v[g] : void 0;
            }
            s.exports = p;
          },
          './packages/@logrocket/utils/node_modules/lodash/_hashHas.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_nativeCreate.js'),
              c = Object.prototype,
              d = c.hasOwnProperty;
            function f(p) {
              var g = this.__data__;
              return u ? g[p] !== void 0 : d.call(g, p);
            }
            s.exports = f;
          },
          './packages/@logrocket/utils/node_modules/lodash/_hashSet.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_nativeCreate.js'),
              c = '__lodash_hash_undefined__';
            function d(f, p) {
              var g = this.__data__;
              return (this.size += this.has(f) ? 0 : 1), (g[f] = u && p === void 0 ? c : p), this;
            }
            s.exports = d;
          },
          './packages/@logrocket/utils/node_modules/lodash/_isIndex.js': function (s) {
            var i = 9007199254740991,
              o = /^(?:0|[1-9]\d*)$/;
            function u(c, d) {
              var f = typeof c;
              return (
                (d = d ?? i), !!d && (f == 'number' || (f != 'symbol' && o.test(c))) && c > -1 && c % 1 == 0 && c < d
              );
            }
            s.exports = u;
          },
          './packages/@logrocket/utils/node_modules/lodash/_isKey.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/isArray.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/isSymbol.js'),
              d = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
              f = /^\w*$/;
            function p(g, v) {
              if (u(g)) return !1;
              var k = typeof g;
              return k == 'number' || k == 'symbol' || k == 'boolean' || g == null || c(g)
                ? !0
                : f.test(g) || !d.test(g) || (v != null && g in Object(v));
            }
            s.exports = p;
          },
          './packages/@logrocket/utils/node_modules/lodash/_isKeyable.js': function (s) {
            function i(o) {
              var u = typeof o;
              return u == 'string' || u == 'number' || u == 'symbol' || u == 'boolean' ? o !== '__proto__' : o === null;
            }
            s.exports = i;
          },
          './packages/@logrocket/utils/node_modules/lodash/_isMasked.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_coreJsData.js'),
              c = (function () {
                var f = /[^.]+$/.exec((u && u.keys && u.keys.IE_PROTO) || '');
                return f ? 'Symbol(src)_1.' + f : '';
              })();
            function d(f) {
              return !!c && c in f;
            }
            s.exports = d;
          },
          './packages/@logrocket/utils/node_modules/lodash/_isPrototype.js': function (s) {
            var i = Object.prototype;
            function o(u) {
              var c = u && u.constructor,
                d = (typeof c == 'function' && c.prototype) || i;
              return u === d;
            }
            s.exports = o;
          },
          './packages/@logrocket/utils/node_modules/lodash/_isStrictComparable.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/isObject.js');
            function c(d) {
              return d === d && !u(d);
            }
            s.exports = c;
          },
          './packages/@logrocket/utils/node_modules/lodash/_listCacheClear.js': function (s) {
            function i() {
              (this.__data__ = []), (this.size = 0);
            }
            s.exports = i;
          },
          './packages/@logrocket/utils/node_modules/lodash/_listCacheDelete.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_assocIndexOf.js'),
              c = Array.prototype,
              d = c.splice;
            function f(p) {
              var g = this.__data__,
                v = u(g, p);
              if (v < 0) return !1;
              var k = g.length - 1;
              return v == k ? g.pop() : d.call(g, v, 1), --this.size, !0;
            }
            s.exports = f;
          },
          './packages/@logrocket/utils/node_modules/lodash/_listCacheGet.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_assocIndexOf.js');
            function c(d) {
              var f = this.__data__,
                p = u(f, d);
              return p < 0 ? void 0 : f[p][1];
            }
            s.exports = c;
          },
          './packages/@logrocket/utils/node_modules/lodash/_listCacheHas.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_assocIndexOf.js');
            function c(d) {
              return u(this.__data__, d) > -1;
            }
            s.exports = c;
          },
          './packages/@logrocket/utils/node_modules/lodash/_listCacheSet.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_assocIndexOf.js');
            function c(d, f) {
              var p = this.__data__,
                g = u(p, d);
              return g < 0 ? (++this.size, p.push([d, f])) : (p[g][1] = f), this;
            }
            s.exports = c;
          },
          './packages/@logrocket/utils/node_modules/lodash/_mapCacheClear.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_Hash.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_ListCache.js'),
              d = o('./packages/@logrocket/utils/node_modules/lodash/_Map.js');
            function f() {
              (this.size = 0), (this.__data__ = { hash: new u(), map: new (d || c)(), string: new u() });
            }
            s.exports = f;
          },
          './packages/@logrocket/utils/node_modules/lodash/_mapCacheDelete.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_getMapData.js');
            function c(d) {
              var f = u(this, d).delete(d);
              return (this.size -= f ? 1 : 0), f;
            }
            s.exports = c;
          },
          './packages/@logrocket/utils/node_modules/lodash/_mapCacheGet.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_getMapData.js');
            function c(d) {
              return u(this, d).get(d);
            }
            s.exports = c;
          },
          './packages/@logrocket/utils/node_modules/lodash/_mapCacheHas.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_getMapData.js');
            function c(d) {
              return u(this, d).has(d);
            }
            s.exports = c;
          },
          './packages/@logrocket/utils/node_modules/lodash/_mapCacheSet.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_getMapData.js');
            function c(d, f) {
              var p = u(this, d),
                g = p.size;
              return p.set(d, f), (this.size += p.size == g ? 0 : 1), this;
            }
            s.exports = c;
          },
          './packages/@logrocket/utils/node_modules/lodash/_mapToArray.js': function (s) {
            function i(o) {
              var u = -1,
                c = Array(o.size);
              return (
                o.forEach(function (d, f) {
                  c[++u] = [f, d];
                }),
                c
              );
            }
            s.exports = i;
          },
          './packages/@logrocket/utils/node_modules/lodash/_matchesStrictComparable.js': function (s) {
            function i(o, u) {
              return function (c) {
                return c == null ? !1 : c[o] === u && (u !== void 0 || o in Object(c));
              };
            }
            s.exports = i;
          },
          './packages/@logrocket/utils/node_modules/lodash/_memoizeCapped.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/memoize.js'),
              c = 500;
            function d(f) {
              var p = u(f, function (v) {
                  return g.size === c && g.clear(), v;
                }),
                g = p.cache;
              return p;
            }
            s.exports = d;
          },
          './packages/@logrocket/utils/node_modules/lodash/_nativeCreate.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_getNative.js'),
              c = u(Object, 'create');
            s.exports = c;
          },
          './packages/@logrocket/utils/node_modules/lodash/_nativeKeys.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_overArg.js'),
              c = u(Object.keys, Object);
            s.exports = c;
          },
          './packages/@logrocket/utils/node_modules/lodash/_nodeUtil.js': function (s, i, o) {
            s = o.nmd(s);
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_freeGlobal.js'),
              c = i && !i.nodeType && i,
              d = c && !0 && s && !s.nodeType && s,
              f = d && d.exports === c,
              p = f && u.process,
              g = (function () {
                try {
                  var v = d && d.require && d.require('util').types;
                  return v || (p && p.binding && p.binding('util'));
                } catch {}
              })();
            s.exports = g;
          },
          './packages/@logrocket/utils/node_modules/lodash/_objectToString.js': function (s) {
            var i = Object.prototype,
              o = i.toString;
            function u(c) {
              return o.call(c);
            }
            s.exports = u;
          },
          './packages/@logrocket/utils/node_modules/lodash/_overArg.js': function (s) {
            function i(o, u) {
              return function (c) {
                return o(u(c));
              };
            }
            s.exports = i;
          },
          './packages/@logrocket/utils/node_modules/lodash/_root.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_freeGlobal.js'),
              c = typeof self == 'object' && self && self.Object === Object && self,
              d = u || c || Function('return this')();
            s.exports = d;
          },
          './packages/@logrocket/utils/node_modules/lodash/_setCacheAdd.js': function (s) {
            var i = '__lodash_hash_undefined__';
            function o(u) {
              return this.__data__.set(u, i), this;
            }
            s.exports = o;
          },
          './packages/@logrocket/utils/node_modules/lodash/_setCacheHas.js': function (s) {
            function i(o) {
              return this.__data__.has(o);
            }
            s.exports = i;
          },
          './packages/@logrocket/utils/node_modules/lodash/_setToArray.js': function (s) {
            function i(o) {
              var u = -1,
                c = Array(o.size);
              return (
                o.forEach(function (d) {
                  c[++u] = d;
                }),
                c
              );
            }
            s.exports = i;
          },
          './packages/@logrocket/utils/node_modules/lodash/_stackClear.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_ListCache.js');
            function c() {
              (this.__data__ = new u()), (this.size = 0);
            }
            s.exports = c;
          },
          './packages/@logrocket/utils/node_modules/lodash/_stackDelete.js': function (s) {
            function i(o) {
              var u = this.__data__,
                c = u.delete(o);
              return (this.size = u.size), c;
            }
            s.exports = i;
          },
          './packages/@logrocket/utils/node_modules/lodash/_stackGet.js': function (s) {
            function i(o) {
              return this.__data__.get(o);
            }
            s.exports = i;
          },
          './packages/@logrocket/utils/node_modules/lodash/_stackHas.js': function (s) {
            function i(o) {
              return this.__data__.has(o);
            }
            s.exports = i;
          },
          './packages/@logrocket/utils/node_modules/lodash/_stackSet.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_ListCache.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_Map.js'),
              d = o('./packages/@logrocket/utils/node_modules/lodash/_MapCache.js'),
              f = 200;
            function p(g, v) {
              var k = this.__data__;
              if (k instanceof u) {
                var m = k.__data__;
                if (!c || m.length < f - 1) return m.push([g, v]), (this.size = ++k.size), this;
                k = this.__data__ = new d(m);
              }
              return k.set(g, v), (this.size = k.size), this;
            }
            s.exports = p;
          },
          './packages/@logrocket/utils/node_modules/lodash/_stringToPath.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_memoizeCapped.js'),
              c = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
              d = /\\(\\)?/g,
              f = u(function (p) {
                var g = [];
                return (
                  p.charCodeAt(0) === 46 && g.push(''),
                  p.replace(c, function (v, k, m, h) {
                    g.push(m ? h.replace(d, '$1') : k || v);
                  }),
                  g
                );
              });
            s.exports = f;
          },
          './packages/@logrocket/utils/node_modules/lodash/_toKey.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/isSymbol.js'),
              c = 1 / 0;
            function d(f) {
              if (typeof f == 'string' || u(f)) return f;
              var p = f + '';
              return p == '0' && 1 / f == -c ? '-0' : p;
            }
            s.exports = d;
          },
          './packages/@logrocket/utils/node_modules/lodash/_toSource.js': function (s) {
            var i = Function.prototype,
              o = i.toString;
            function u(c) {
              if (c != null) {
                try {
                  return o.call(c);
                } catch {}
                try {
                  return c + '';
                } catch {}
              }
              return '';
            }
            s.exports = u;
          },
          './packages/@logrocket/utils/node_modules/lodash/eq.js': function (s) {
            function i(o, u) {
              return o === u || (o !== o && u !== u);
            }
            s.exports = i;
          },
          './packages/@logrocket/utils/node_modules/lodash/get.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_baseGet.js');
            function c(d, f, p) {
              var g = d == null ? void 0 : u(d, f);
              return g === void 0 ? p : g;
            }
            s.exports = c;
          },
          './packages/@logrocket/utils/node_modules/lodash/hasIn.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_baseHasIn.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_hasPath.js');
            function d(f, p) {
              return f != null && c(f, p, u);
            }
            s.exports = d;
          },
          './packages/@logrocket/utils/node_modules/lodash/identity.js': function (s) {
            function i(o) {
              return o;
            }
            s.exports = i;
          },
          './packages/@logrocket/utils/node_modules/lodash/isArguments.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_baseIsArguments.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/isObjectLike.js'),
              d = Object.prototype,
              f = d.hasOwnProperty,
              p = d.propertyIsEnumerable,
              g = u(
                (function () {
                  return arguments;
                })(),
              )
                ? u
                : function (v) {
                    return c(v) && f.call(v, 'callee') && !p.call(v, 'callee');
                  };
            s.exports = g;
          },
          './packages/@logrocket/utils/node_modules/lodash/isArray.js': function (s) {
            var i = Array.isArray;
            s.exports = i;
          },
          './packages/@logrocket/utils/node_modules/lodash/isArrayLike.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/isFunction.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/isLength.js');
            function d(f) {
              return f != null && c(f.length) && !u(f);
            }
            s.exports = d;
          },
          './packages/@logrocket/utils/node_modules/lodash/isBuffer.js': function (s, i, o) {
            s = o.nmd(s);
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_root.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/stubFalse.js'),
              d = i && !i.nodeType && i,
              f = d && !0 && s && !s.nodeType && s,
              p = f && f.exports === d,
              g = p ? u.Buffer : void 0,
              v = g ? g.isBuffer : void 0,
              k = v || c;
            s.exports = k;
          },
          './packages/@logrocket/utils/node_modules/lodash/isFunction.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_baseGetTag.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/isObject.js'),
              d = '[object AsyncFunction]',
              f = '[object Function]',
              p = '[object GeneratorFunction]',
              g = '[object Proxy]';
            function v(k) {
              if (!c(k)) return !1;
              var m = u(k);
              return m == f || m == p || m == d || m == g;
            }
            s.exports = v;
          },
          './packages/@logrocket/utils/node_modules/lodash/isLength.js': function (s) {
            var i = 9007199254740991;
            function o(u) {
              return typeof u == 'number' && u > -1 && u % 1 == 0 && u <= i;
            }
            s.exports = o;
          },
          './packages/@logrocket/utils/node_modules/lodash/isObject.js': function (s) {
            function i(o) {
              var u = typeof o;
              return o != null && (u == 'object' || u == 'function');
            }
            s.exports = i;
          },
          './packages/@logrocket/utils/node_modules/lodash/isObjectLike.js': function (s) {
            function i(o) {
              return o != null && typeof o == 'object';
            }
            s.exports = i;
          },
          './packages/@logrocket/utils/node_modules/lodash/isSymbol.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_baseGetTag.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/isObjectLike.js'),
              d = '[object Symbol]';
            function f(p) {
              return typeof p == 'symbol' || (c(p) && u(p) == d);
            }
            s.exports = f;
          },
          './packages/@logrocket/utils/node_modules/lodash/isTypedArray.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_baseIsTypedArray.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_baseUnary.js'),
              d = o('./packages/@logrocket/utils/node_modules/lodash/_nodeUtil.js'),
              f = d && d.isTypedArray,
              p = f ? c(f) : u;
            s.exports = p;
          },
          './packages/@logrocket/utils/node_modules/lodash/keys.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_arrayLikeKeys.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_baseKeys.js'),
              d = o('./packages/@logrocket/utils/node_modules/lodash/isArrayLike.js');
            function f(p) {
              return d(p) ? u(p) : c(p);
            }
            s.exports = f;
          },
          './packages/@logrocket/utils/node_modules/lodash/memoize.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_MapCache.js'),
              c = 'Expected a function';
            function d(f, p) {
              if (typeof f != 'function' || (p != null && typeof p != 'function')) throw new TypeError(c);
              var g = function () {
                var v = arguments,
                  k = p ? p.apply(this, v) : v[0],
                  m = g.cache;
                if (m.has(k)) return m.get(k);
                var h = f.apply(this, v);
                return (g.cache = m.set(k, h) || m), h;
              };
              return (g.cache = new (d.Cache || u)()), g;
            }
            (d.Cache = u), (s.exports = d);
          },
          './packages/@logrocket/utils/node_modules/lodash/property.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_baseProperty.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_basePropertyDeep.js'),
              d = o('./packages/@logrocket/utils/node_modules/lodash/_isKey.js'),
              f = o('./packages/@logrocket/utils/node_modules/lodash/_toKey.js');
            function p(g) {
              return d(g) ? u(f(g)) : c(g);
            }
            s.exports = p;
          },
          './packages/@logrocket/utils/node_modules/lodash/sortedLastIndexBy.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_baseIteratee.js'),
              c = o('./packages/@logrocket/utils/node_modules/lodash/_baseSortedIndexBy.js');
            function d(f, p, g) {
              return c(f, p, u(g, 2), !0);
            }
            s.exports = d;
          },
          './packages/@logrocket/utils/node_modules/lodash/stubArray.js': function (s) {
            function i() {
              return [];
            }
            s.exports = i;
          },
          './packages/@logrocket/utils/node_modules/lodash/stubFalse.js': function (s) {
            function i() {
              return !1;
            }
            s.exports = i;
          },
          './packages/@logrocket/utils/node_modules/lodash/toString.js': function (s, i, o) {
            var u = o('./packages/@logrocket/utils/node_modules/lodash/_baseToString.js');
            function c(d) {
              return d == null ? '' : u(d);
            }
            s.exports = c;
          },
          './node_modules/@babel/runtime/helpers/arrayLikeToArray.js': function (s) {
            function i(o, u) {
              (u == null || u > o.length) && (u = o.length);
              for (var c = 0, d = new Array(u); c < u; c++) d[c] = o[c];
              return d;
            }
            (s.exports = i), (s.exports.__esModule = !0), (s.exports.default = s.exports);
          },
          './node_modules/@babel/runtime/helpers/arrayWithHoles.js': function (s) {
            function i(o) {
              if (Array.isArray(o)) return o;
            }
            (s.exports = i), (s.exports.__esModule = !0), (s.exports.default = s.exports);
          },
          './node_modules/@babel/runtime/helpers/arrayWithoutHoles.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/arrayLikeToArray.js');
            function c(d) {
              if (Array.isArray(d)) return u(d);
            }
            (s.exports = c), (s.exports.__esModule = !0), (s.exports.default = s.exports);
          },
          './node_modules/@babel/runtime/helpers/classCallCheck.js': function (s) {
            function i(o, u) {
              if (!(o instanceof u)) throw new TypeError('Cannot call a class as a function');
            }
            (s.exports = i), (s.exports.__esModule = !0), (s.exports.default = s.exports);
          },
          './node_modules/@babel/runtime/helpers/createClass.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/toPropertyKey.js');
            function c(f, p) {
              for (var g = 0; g < p.length; g++) {
                var v = p[g];
                (v.enumerable = v.enumerable || !1),
                  (v.configurable = !0),
                  'value' in v && (v.writable = !0),
                  Object.defineProperty(f, u(v.key), v);
              }
            }
            function d(f, p, g) {
              return p && c(f.prototype, p), g && c(f, g), Object.defineProperty(f, 'prototype', { writable: !1 }), f;
            }
            (s.exports = d), (s.exports.__esModule = !0), (s.exports.default = s.exports);
          },
          './node_modules/@babel/runtime/helpers/defineProperty.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/toPropertyKey.js');
            function c(d, f, p) {
              return (
                (f = u(f)),
                f in d
                  ? Object.defineProperty(d, f, { value: p, enumerable: !0, configurable: !0, writable: !0 })
                  : (d[f] = p),
                d
              );
            }
            (s.exports = c), (s.exports.__esModule = !0), (s.exports.default = s.exports);
          },
          './node_modules/@babel/runtime/helpers/interopRequireDefault.js': function (s) {
            function i(o) {
              return o && o.__esModule ? o : { default: o };
            }
            (s.exports = i), (s.exports.__esModule = !0), (s.exports.default = s.exports);
          },
          './node_modules/@babel/runtime/helpers/iterableToArray.js': function (s) {
            function i(o) {
              if ((typeof Symbol < 'u' && o[Symbol.iterator] != null) || o['@@iterator'] != null) return Array.from(o);
            }
            (s.exports = i), (s.exports.__esModule = !0), (s.exports.default = s.exports);
          },
          './node_modules/@babel/runtime/helpers/iterableToArrayLimit.js': function (s) {
            function i(o, u) {
              var c = o == null ? null : (typeof Symbol < 'u' && o[Symbol.iterator]) || o['@@iterator'];
              if (c != null) {
                var d,
                  f,
                  p,
                  g,
                  v = [],
                  k = !0,
                  m = !1;
                try {
                  if (((p = (c = c.call(o)).next), u === 0)) {
                    if (Object(c) !== c) return;
                    k = !1;
                  } else for (; !(k = (d = p.call(c)).done) && (v.push(d.value), v.length !== u); k = !0);
                } catch (h) {
                  (m = !0), (f = h);
                } finally {
                  try {
                    if (!k && c.return != null && ((g = c.return()), Object(g) !== g)) return;
                  } finally {
                    if (m) throw f;
                  }
                }
                return v;
              }
            }
            (s.exports = i), (s.exports.__esModule = !0), (s.exports.default = s.exports);
          },
          './node_modules/@babel/runtime/helpers/nonIterableRest.js': function (s) {
            function i() {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }
            (s.exports = i), (s.exports.__esModule = !0), (s.exports.default = s.exports);
          },
          './node_modules/@babel/runtime/helpers/nonIterableSpread.js': function (s) {
            function i() {
              throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }
            (s.exports = i), (s.exports.__esModule = !0), (s.exports.default = s.exports);
          },
          './node_modules/@babel/runtime/helpers/objectWithoutProperties.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js');
            function c(d, f) {
              if (d == null) return {};
              var p = u(d, f),
                g,
                v;
              if (Object.getOwnPropertySymbols) {
                var k = Object.getOwnPropertySymbols(d);
                for (v = 0; v < k.length; v++)
                  (g = k[v]), !(f.indexOf(g) >= 0) && Object.prototype.propertyIsEnumerable.call(d, g) && (p[g] = d[g]);
              }
              return p;
            }
            (s.exports = c), (s.exports.__esModule = !0), (s.exports.default = s.exports);
          },
          './node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js': function (s) {
            function i(o, u) {
              if (o == null) return {};
              var c = {},
                d = Object.keys(o),
                f,
                p;
              for (p = 0; p < d.length; p++) (f = d[p]), !(u.indexOf(f) >= 0) && (c[f] = o[f]);
              return c;
            }
            (s.exports = i), (s.exports.__esModule = !0), (s.exports.default = s.exports);
          },
          './node_modules/@babel/runtime/helpers/slicedToArray.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/arrayWithHoles.js'),
              c = o('./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js'),
              d = o('./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js'),
              f = o('./node_modules/@babel/runtime/helpers/nonIterableRest.js');
            function p(g, v) {
              return u(g) || c(g, v) || d(g, v) || f();
            }
            (s.exports = p), (s.exports.__esModule = !0), (s.exports.default = s.exports);
          },
          './node_modules/@babel/runtime/helpers/toConsumableArray.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js'),
              c = o('./node_modules/@babel/runtime/helpers/iterableToArray.js'),
              d = o('./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js'),
              f = o('./node_modules/@babel/runtime/helpers/nonIterableSpread.js');
            function p(g) {
              return u(g) || c(g) || d(g) || f();
            }
            (s.exports = p), (s.exports.__esModule = !0), (s.exports.default = s.exports);
          },
          './node_modules/@babel/runtime/helpers/toPrimitive.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/typeof.js').default;
            function c(d, f) {
              if (u(d) !== 'object' || d === null) return d;
              var p = d[Symbol.toPrimitive];
              if (p !== void 0) {
                var g = p.call(d, f || 'default');
                if (u(g) !== 'object') return g;
                throw new TypeError('@@toPrimitive must return a primitive value.');
              }
              return (f === 'string' ? String : Number)(d);
            }
            (s.exports = c), (s.exports.__esModule = !0), (s.exports.default = s.exports);
          },
          './node_modules/@babel/runtime/helpers/toPropertyKey.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/typeof.js').default,
              c = o('./node_modules/@babel/runtime/helpers/toPrimitive.js');
            function d(f) {
              var p = c(f, 'string');
              return u(p) === 'symbol' ? p : String(p);
            }
            (s.exports = d), (s.exports.__esModule = !0), (s.exports.default = s.exports);
          },
          './node_modules/@babel/runtime/helpers/typeof.js': function (s) {
            function i(o) {
              '@babel/helpers - typeof';
              return (
                (s.exports = i =
                  typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                    ? function (u) {
                        return typeof u;
                      }
                    : function (u) {
                        return u && typeof Symbol == 'function' && u.constructor === Symbol && u !== Symbol.prototype
                          ? 'symbol'
                          : typeof u;
                      }),
                (s.exports.__esModule = !0),
                (s.exports.default = s.exports),
                i(o)
              );
            }
            (s.exports = i), (s.exports.__esModule = !0), (s.exports.default = s.exports);
          },
          './node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js': function (s, i, o) {
            var u = o('./node_modules/@babel/runtime/helpers/arrayLikeToArray.js');
            function c(d, f) {
              if (d) {
                if (typeof d == 'string') return u(d, f);
                var p = Object.prototype.toString.call(d).slice(8, -1);
                if ((p === 'Object' && d.constructor && (p = d.constructor.name), p === 'Map' || p === 'Set'))
                  return Array.from(d);
                if (p === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)) return u(d, f);
              }
            }
            (s.exports = c), (s.exports.__esModule = !0), (s.exports.default = s.exports);
          },
        },
        r = {};
      function a(s) {
        var i = r[s];
        if (i !== void 0) return i.exports;
        var o = (r[s] = { id: s, loaded: !1, exports: {} });
        return n[s](o, o.exports, a), (o.loaded = !0), o.exports;
      }
      (function () {
        a.g = (function () {
          if (typeof globalThis == 'object') return globalThis;
          try {
            return this || new Function('return this')();
          } catch {
            if (typeof window == 'object') return window;
          }
        })();
      })(),
        (function () {
          a.nmd = function (s) {
            return (s.paths = []), s.children || (s.children = []), s;
          };
        })();
      var l = {};
      return (
        (function () {
          var s = l;
          /*!**********************************************!*\
  !*** ./packages/logrocket/src/module-npm.js ***!
  \**********************************************/ var i = a(
            './node_modules/@babel/runtime/helpers/interopRequireDefault.js',
          );
          Object.defineProperty(s, '__esModule', { value: !0 }), (s.default = void 0);
          var o = i(a('./packages/logrocket/src/setup.js')),
            u = (0, o.default)(),
            c = u;
          s.default = c;
        })(),
        (l = l.default),
        l
      );
    })();
  });
})(Im);
var s1 = Im.exports;
const a1 = fu(s1);
a1.init('gbsta4/anki-app');
const l1 = e0({
    routeTree: o1,
    defaultPreload: 'intent',
    defaultErrorComponent: ({ error: e }) => K.jsx(Xs, { error: e }),
  }),
  Ff = document.getElementById('app');
Ff.innerHTML || nl.createRoot(Ff).render(K.jsx(Jw, { router: l1 }));
export { ck as C, Pk as _, c1 as a, J0 as c, X_ as d, K as j, W as r, Io as s };
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [];
  }
  return indexes.map(i => __vite__mapDeps.viteFileDeps[i]);
}
