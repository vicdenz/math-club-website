function ym(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n];
		if (typeof r != "string" && !Array.isArray(r)) {
			for (const i in r)
				if (i !== "default" && !(i in e)) {
					const o = Object.getOwnPropertyDescriptor(r, i);
					o &&
						Object.defineProperty(
							e,
							i,
							o.get ? o : { enumerable: !0, get: () => r[i] }
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
	for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
		r(i);
	new MutationObserver((i) => {
		for (const o of i)
			if (o.type === "childList")
				for (const s of o.addedNodes)
					s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(i) {
		const o = {};
		return (
			i.integrity && (o.integrity = i.integrity),
			i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
			i.crossOrigin === "use-credentials"
				? (o.credentials = "include")
				: i.crossOrigin === "anonymous"
				? (o.credentials = "omit")
				: (o.credentials = "same-origin"),
			o
		);
	}
	function r(i) {
		if (i.ep) return;
		i.ep = !0;
		const o = n(i);
		fetch(i.href, o);
	}
})();
var Iw =
	typeof globalThis < "u"
		? globalThis
		: typeof window < "u"
		? window
		: typeof global < "u"
		? global
		: typeof self < "u"
		? self
		: {};
function na(e) {
	return e &&
		e.__esModule &&
		Object.prototype.hasOwnProperty.call(e, "default")
		? e.default
		: e;
}
var wm = { exports: {} },
	ra = {},
	_m = { exports: {} },
	me = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var El = Symbol.for("react.element"),
	$w = Symbol.for("react.portal"),
	Fw = Symbol.for("react.fragment"),
	zw = Symbol.for("react.strict_mode"),
	Uw = Symbol.for("react.profiler"),
	Bw = Symbol.for("react.provider"),
	Ww = Symbol.for("react.context"),
	Hw = Symbol.for("react.forward_ref"),
	Vw = Symbol.for("react.suspense"),
	Kw = Symbol.for("react.memo"),
	Qw = Symbol.for("react.lazy"),
	Rh = Symbol.iterator;
function Yw(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (Rh && e[Rh]) || e["@@iterator"]),
		  typeof e == "function" ? e : null);
}
var xm = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	Em = Object.assign,
	Sm = {};
function co(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = Sm),
		(this.updater = n || xm);
}
co.prototype.isReactComponent = {};
co.prototype.setState = function (e, t) {
	if (typeof e != "object" && typeof e != "function" && e != null)
		throw Error(
			"setState(...): takes an object of state variables to update or a function which returns an object of state variables."
		);
	this.updater.enqueueSetState(this, e, t, "setState");
};
co.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Cm() {}
Cm.prototype = co.prototype;
function Yc(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = Sm),
		(this.updater = n || xm);
}
var Xc = (Yc.prototype = new Cm());
Xc.constructor = Yc;
Em(Xc, co.prototype);
Xc.isPureReactComponent = !0;
var Ph = Array.isArray,
	km = Object.prototype.hasOwnProperty,
	Gc = { current: null },
	Tm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Nm(e, t, n) {
	var r,
		i = {},
		o = null,
		s = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (s = t.ref),
		t.key !== void 0 && (o = "" + t.key),
		t))
			km.call(t, r) && !Tm.hasOwnProperty(r) && (i[r] = t[r]);
	var a = arguments.length - 2;
	if (a === 1) i.children = n;
	else if (1 < a) {
		for (var c = Array(a), d = 0; d < a; d++) c[d] = arguments[d + 2];
		i.children = c;
	}
	if (e && e.defaultProps)
		for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
	return {
		$$typeof: El,
		type: e,
		key: o,
		ref: s,
		props: i,
		_owner: Gc.current,
	};
}
function Xw(e, t) {
	return {
		$$typeof: El,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function qc(e) {
	return typeof e == "object" && e !== null && e.$$typeof === El;
}
function Gw(e) {
	var t = { "=": "=0", ":": "=2" };
	return (
		"$" +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var Dh = /\/+/g;
function iu(e, t) {
	return typeof e == "object" && e !== null && e.key != null
		? Gw("" + e.key)
		: t.toString(36);
}
function ms(e, t, n, r, i) {
	var o = typeof e;
	(o === "undefined" || o === "boolean") && (e = null);
	var s = !1;
	if (e === null) s = !0;
	else
		switch (o) {
			case "string":
			case "number":
				s = !0;
				break;
			case "object":
				switch (e.$$typeof) {
					case El:
					case $w:
						s = !0;
				}
		}
	if (s)
		return (
			(s = e),
			(i = i(s)),
			(e = r === "" ? "." + iu(s, 0) : r),
			Ph(i)
				? ((n = ""),
				  e != null && (n = e.replace(Dh, "$&/") + "/"),
				  ms(i, t, n, "", function (d) {
						return d;
				  }))
				: i != null &&
				  (qc(i) &&
						(i = Xw(
							i,
							n +
								(!i.key || (s && s.key === i.key)
									? ""
									: ("" + i.key).replace(Dh, "$&/") + "/") +
								e
						)),
				  t.push(i)),
			1
		);
	if (((s = 0), (r = r === "" ? "." : r + ":"), Ph(e)))
		for (var a = 0; a < e.length; a++) {
			o = e[a];
			var c = r + iu(o, a);
			s += ms(o, t, n, c, i);
		}
	else if (((c = Yw(e)), typeof c == "function"))
		for (e = c.call(e), a = 0; !(o = e.next()).done; )
			(o = o.value), (c = r + iu(o, a++)), (s += ms(o, t, n, c, i));
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
	return s;
}
function Gl(e, t, n) {
	if (e == null) return e;
	var r = [],
		i = 0;
	return (
		ms(e, r, "", "", function (o) {
			return t.call(n, o, i++);
		}),
		r
	);
}
function qw(e) {
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
var Ot = { current: null },
	gs = { transition: null },
	Jw = {
		ReactCurrentDispatcher: Ot,
		ReactCurrentBatchConfig: gs,
		ReactCurrentOwner: Gc,
	};
me.Children = {
	map: Gl,
	forEach: function (e, t, n) {
		Gl(
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
			Gl(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			Gl(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!qc(e))
			throw Error(
				"React.Children.only expected to receive a single React element child."
			);
		return e;
	},
};
me.Component = co;
me.Fragment = Fw;
me.Profiler = Uw;
me.PureComponent = Yc;
me.StrictMode = zw;
me.Suspense = Vw;
me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jw;
me.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			"React.cloneElement(...): The argument must be a React element, but you passed " +
				e +
				"."
		);
	var r = Em({}, e.props),
		i = e.key,
		o = e.ref,
		s = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((o = t.ref), (s = Gc.current)),
			t.key !== void 0 && (i = "" + t.key),
			e.type && e.type.defaultProps)
		)
			var a = e.type.defaultProps;
		for (c in t)
			km.call(t, c) &&
				!Tm.hasOwnProperty(c) &&
				(r[c] = t[c] === void 0 && a !== void 0 ? a[c] : t[c]);
	}
	var c = arguments.length - 2;
	if (c === 1) r.children = n;
	else if (1 < c) {
		a = Array(c);
		for (var d = 0; d < c; d++) a[d] = arguments[d + 2];
		r.children = a;
	}
	return { $$typeof: El, type: e.type, key: i, ref: o, props: r, _owner: s };
};
me.createContext = function (e) {
	return (
		(e = {
			$$typeof: Ww,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: Bw, _context: e }),
		(e.Consumer = e)
	);
};
me.createElement = Nm;
me.createFactory = function (e) {
	var t = Nm.bind(null, e);
	return (t.type = e), t;
};
me.createRef = function () {
	return { current: null };
};
me.forwardRef = function (e) {
	return { $$typeof: Hw, render: e };
};
me.isValidElement = qc;
me.lazy = function (e) {
	return { $$typeof: Qw, _payload: { _status: -1, _result: e }, _init: qw };
};
me.memo = function (e, t) {
	return { $$typeof: Kw, type: e, compare: t === void 0 ? null : t };
};
me.startTransition = function (e) {
	var t = gs.transition;
	gs.transition = {};
	try {
		e();
	} finally {
		gs.transition = t;
	}
};
me.unstable_act = function () {
	throw Error("act(...) is not supported in production builds of React.");
};
me.useCallback = function (e, t) {
	return Ot.current.useCallback(e, t);
};
me.useContext = function (e) {
	return Ot.current.useContext(e);
};
me.useDebugValue = function () {};
me.useDeferredValue = function (e) {
	return Ot.current.useDeferredValue(e);
};
me.useEffect = function (e, t) {
	return Ot.current.useEffect(e, t);
};
me.useId = function () {
	return Ot.current.useId();
};
me.useImperativeHandle = function (e, t, n) {
	return Ot.current.useImperativeHandle(e, t, n);
};
me.useInsertionEffect = function (e, t) {
	return Ot.current.useInsertionEffect(e, t);
};
me.useLayoutEffect = function (e, t) {
	return Ot.current.useLayoutEffect(e, t);
};
me.useMemo = function (e, t) {
	return Ot.current.useMemo(e, t);
};
me.useReducer = function (e, t, n) {
	return Ot.current.useReducer(e, t, n);
};
me.useRef = function (e) {
	return Ot.current.useRef(e);
};
me.useState = function (e) {
	return Ot.current.useState(e);
};
me.useSyncExternalStore = function (e, t, n) {
	return Ot.current.useSyncExternalStore(e, t, n);
};
me.useTransition = function () {
	return Ot.current.useTransition();
};
me.version = "18.2.0";
_m.exports = me;
var _ = _m.exports;
const En = na(_),
	Zw = ym({ __proto__: null, default: En }, [_]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var e_ = _,
	t_ = Symbol.for("react.element"),
	n_ = Symbol.for("react.fragment"),
	r_ = Object.prototype.hasOwnProperty,
	i_ =
		e_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	o_ = { key: !0, ref: !0, __self: !0, __source: !0 };
function bm(e, t, n) {
	var r,
		i = {},
		o = null,
		s = null;
	n !== void 0 && (o = "" + n),
		t.key !== void 0 && (o = "" + t.key),
		t.ref !== void 0 && (s = t.ref);
	for (r in t) r_.call(t, r) && !o_.hasOwnProperty(r) && (i[r] = t[r]);
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
	return {
		$$typeof: t_,
		type: e,
		key: o,
		ref: s,
		props: i,
		_owner: i_.current,
	};
}
ra.Fragment = n_;
ra.jsx = bm;
ra.jsxs = bm;
wm.exports = ra;
var x = wm.exports,
	Fu = {},
	jm = { exports: {} },
	Yt = {},
	Lm = { exports: {} },
	Om = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t($, X) {
		var j = $.length;
		$.push(X);
		e: for (; 0 < j; ) {
			var de = (j - 1) >>> 1,
				he = $[de];
			if (0 < i(he, X)) ($[de] = X), ($[j] = he), (j = de);
			else break e;
		}
	}
	function n($) {
		return $.length === 0 ? null : $[0];
	}
	function r($) {
		if ($.length === 0) return null;
		var X = $[0],
			j = $.pop();
		if (j !== X) {
			$[0] = j;
			e: for (var de = 0, he = $.length, He = he >>> 1; de < He; ) {
				var we = 2 * (de + 1) - 1,
					Ne = $[we],
					Pe = we + 1,
					Gt = $[Pe];
				if (0 > i(Ne, j))
					Pe < he && 0 > i(Gt, Ne)
						? (($[de] = Gt), ($[Pe] = j), (de = Pe))
						: (($[de] = Ne), ($[we] = j), (de = we));
				else if (Pe < he && 0 > i(Gt, j))
					($[de] = Gt), ($[Pe] = j), (de = Pe);
				else break e;
			}
		}
		return X;
	}
	function i($, X) {
		var j = $.sortIndex - X.sortIndex;
		return j !== 0 ? j : $.id - X.id;
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
		var s = Date,
			a = s.now();
		e.unstable_now = function () {
			return s.now() - a;
		};
	}
	var c = [],
		d = [],
		p = 1,
		v = null,
		m = 3,
		b = !1,
		S = !1,
		N = !1,
		R = typeof setTimeout == "function" ? setTimeout : null,
		y = typeof clearTimeout == "function" ? clearTimeout : null,
		g = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function E($) {
		for (var X = n(d); X !== null; ) {
			if (X.callback === null) r(d);
			else if (X.startTime <= $)
				r(d), (X.sortIndex = X.expirationTime), t(c, X);
			else break;
			X = n(d);
		}
	}
	function w($) {
		if (((N = !1), E($), !S))
			if (n(c) !== null) (S = !0), ot(A);
			else {
				var X = n(d);
				X !== null && et(w, X.startTime - $);
			}
	}
	function A($, X) {
		(S = !1), N && ((N = !1), y(z), (z = -1)), (b = !0);
		var j = m;
		try {
			for (
				E(X), v = n(c);
				v !== null && (!(v.expirationTime > X) || ($ && !fe()));

			) {
				var de = v.callback;
				if (typeof de == "function") {
					(v.callback = null), (m = v.priorityLevel);
					var he = de(v.expirationTime <= X);
					(X = e.unstable_now()),
						typeof he == "function"
							? (v.callback = he)
							: v === n(c) && r(c),
						E(X);
				} else r(c);
				v = n(c);
			}
			if (v !== null) var He = !0;
			else {
				var we = n(d);
				we !== null && et(w, we.startTime - X), (He = !1);
			}
			return He;
		} finally {
			(v = null), (m = j), (b = !1);
		}
	}
	var D = !1,
		P = null,
		z = -1,
		Y = 5,
		G = -1;
	function fe() {
		return !(e.unstable_now() - G < Y);
	}
	function Be() {
		if (P !== null) {
			var $ = e.unstable_now();
			G = $;
			var X = !0;
			try {
				X = P(!0, $);
			} finally {
				X ? Re() : ((D = !1), (P = null));
			}
		} else D = !1;
	}
	var Re;
	if (typeof g == "function")
		Re = function () {
			g(Be);
		};
	else if (typeof MessageChannel < "u") {
		var mt = new MessageChannel(),
			Ee = mt.port2;
		(mt.port1.onmessage = Be),
			(Re = function () {
				Ee.postMessage(null);
			});
	} else
		Re = function () {
			R(Be, 0);
		};
	function ot($) {
		(P = $), D || ((D = !0), Re());
	}
	function et($, X) {
		z = R(function () {
			$(e.unstable_now());
		}, X);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function ($) {
			$.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			S || b || ((S = !0), ot(A));
		}),
		(e.unstable_forceFrameRate = function ($) {
			0 > $ || 125 < $
				? console.error(
						"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
				  )
				: (Y = 0 < $ ? Math.floor(1e3 / $) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return m;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(c);
		}),
		(e.unstable_next = function ($) {
			switch (m) {
				case 1:
				case 2:
				case 3:
					var X = 3;
					break;
				default:
					X = m;
			}
			var j = m;
			m = X;
			try {
				return $();
			} finally {
				m = j;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function ($, X) {
			switch ($) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					$ = 3;
			}
			var j = m;
			m = $;
			try {
				return X();
			} finally {
				m = j;
			}
		}),
		(e.unstable_scheduleCallback = function ($, X, j) {
			var de = e.unstable_now();
			switch (
				(typeof j == "object" && j !== null
					? ((j = j.delay),
					  (j = typeof j == "number" && 0 < j ? de + j : de))
					: (j = de),
				$)
			) {
				case 1:
					var he = -1;
					break;
				case 2:
					he = 250;
					break;
				case 5:
					he = 1073741823;
					break;
				case 4:
					he = 1e4;
					break;
				default:
					he = 5e3;
			}
			return (
				(he = j + he),
				($ = {
					id: p++,
					callback: X,
					priorityLevel: $,
					startTime: j,
					expirationTime: he,
					sortIndex: -1,
				}),
				j > de
					? (($.sortIndex = j),
					  t(d, $),
					  n(c) === null &&
							$ === n(d) &&
							(N ? (y(z), (z = -1)) : (N = !0), et(w, j - de)))
					: (($.sortIndex = he),
					  t(c, $),
					  S || b || ((S = !0), ot(A))),
				$
			);
		}),
		(e.unstable_shouldYield = fe),
		(e.unstable_wrapCallback = function ($) {
			var X = m;
			return function () {
				var j = m;
				m = X;
				try {
					return $.apply(this, arguments);
				} finally {
					m = j;
				}
			};
		});
})(Om);
Lm.exports = Om;
var l_ = Lm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rm = _,
	Qt = l_;
function F(e) {
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
var Pm = new Set(),
	rl = {};
function mi(e, t) {
	no(e, t), no(e + "Capture", t);
}
function no(e, t) {
	for (rl[e] = t, e = 0; e < t.length; e++) Pm.add(t[e]);
}
var qn = !(
		typeof window > "u" ||
		typeof window.document > "u" ||
		typeof window.document.createElement > "u"
	),
	zu = Object.prototype.hasOwnProperty,
	s_ =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Ah = {},
	Mh = {};
function a_(e) {
	return zu.call(Mh, e)
		? !0
		: zu.call(Ah, e)
		? !1
		: s_.test(e)
		? (Mh[e] = !0)
		: ((Ah[e] = !0), !1);
}
function u_(e, t, n, r) {
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
function c_(e, t, n, r) {
	if (t === null || typeof t > "u" || u_(e, t, n, r)) return !0;
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
function Rt(e, t, n, r, i, o, s) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = i),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = o),
		(this.removeEmptyString = s);
}
var xt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
	.split(" ")
	.forEach(function (e) {
		xt[e] = new Rt(e, 0, !1, e, null, !1, !1);
	});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"],
].forEach(function (e) {
	var t = e[0];
	xt[t] = new Rt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
	xt[e] = new Rt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	"autoReverse",
	"externalResourcesRequired",
	"focusable",
	"preserveAlpha",
].forEach(function (e) {
	xt[e] = new Rt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
	.split(" ")
	.forEach(function (e) {
		xt[e] = new Rt(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
	xt[e] = new Rt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
	xt[e] = new Rt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
	xt[e] = new Rt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
	xt[e] = new Rt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Jc = /[\-:]([a-z])/g;
function Zc(e) {
	return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(Jc, Zc);
		xt[t] = new Rt(t, 1, !1, e, null, !1, !1);
	});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(Jc, Zc);
		xt[t] = new Rt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
	});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
	var t = e.replace(Jc, Zc);
	xt[t] = new Rt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
	xt[e] = new Rt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
xt.xlinkHref = new Rt(
	"xlinkHref",
	1,
	!1,
	"xlink:href",
	"http://www.w3.org/1999/xlink",
	!0,
	!1
);
["src", "href", "action", "formAction"].forEach(function (e) {
	xt[e] = new Rt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ed(e, t, n, r) {
	var i = xt.hasOwnProperty(t) ? xt[t] : null;
	(i !== null
		? i.type !== 0
		: r ||
		  !(2 < t.length) ||
		  (t[0] !== "o" && t[0] !== "O") ||
		  (t[1] !== "n" && t[1] !== "N")) &&
		(c_(t, n, i, r) && (n = null),
		r || i === null
			? a_(t) &&
			  (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
			: i.mustUseProperty
			? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
			: ((t = i.attributeName),
			  (r = i.attributeNamespace),
			  n === null
					? e.removeAttribute(t)
					: ((i = i.type),
					  (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
					  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var nr = Rm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	ql = Symbol.for("react.element"),
	Di = Symbol.for("react.portal"),
	Ai = Symbol.for("react.fragment"),
	td = Symbol.for("react.strict_mode"),
	Uu = Symbol.for("react.profiler"),
	Dm = Symbol.for("react.provider"),
	Am = Symbol.for("react.context"),
	nd = Symbol.for("react.forward_ref"),
	Bu = Symbol.for("react.suspense"),
	Wu = Symbol.for("react.suspense_list"),
	rd = Symbol.for("react.memo"),
	dr = Symbol.for("react.lazy"),
	Mm = Symbol.for("react.offscreen"),
	Ih = Symbol.iterator;
function To(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (Ih && e[Ih]) || e["@@iterator"]),
		  typeof e == "function" ? e : null);
}
var Qe = Object.assign,
	ou;
function zo(e) {
	if (ou === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			ou = (t && t[1]) || "";
		}
	return (
		`
` +
		ou +
		e
	);
}
var lu = !1;
function su(e, t) {
	if (!e || lu) return "";
	lu = !0;
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
				} catch (d) {
					var r = d;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (d) {
					r = d;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (d) {
				r = d;
			}
			e();
		}
	} catch (d) {
		if (d && r && typeof d.stack == "string") {
			for (
				var i = d.stack.split(`
`),
					o = r.stack.split(`
`),
					s = i.length - 1,
					a = o.length - 1;
				1 <= s && 0 <= a && i[s] !== o[a];

			)
				a--;
			for (; 1 <= s && 0 <= a; s--, a--)
				if (i[s] !== o[a]) {
					if (s !== 1 || a !== 1)
						do
							if ((s--, a--, 0 > a || i[s] !== o[a])) {
								var c =
									`
` + i[s].replace(" at new ", " at ");
								return (
									e.displayName &&
										c.includes("<anonymous>") &&
										(c = c.replace(
											"<anonymous>",
											e.displayName
										)),
									c
								);
							}
						while (1 <= s && 0 <= a);
					break;
				}
		}
	} finally {
		(lu = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : "") ? zo(e) : "";
}
function d_(e) {
	switch (e.tag) {
		case 5:
			return zo(e.type);
		case 16:
			return zo("Lazy");
		case 13:
			return zo("Suspense");
		case 19:
			return zo("SuspenseList");
		case 0:
		case 2:
		case 15:
			return (e = su(e.type, !1)), e;
		case 11:
			return (e = su(e.type.render, !1)), e;
		case 1:
			return (e = su(e.type, !0)), e;
		default:
			return "";
	}
}
function Hu(e) {
	if (e == null) return null;
	if (typeof e == "function") return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case Ai:
			return "Fragment";
		case Di:
			return "Portal";
		case Uu:
			return "Profiler";
		case td:
			return "StrictMode";
		case Bu:
			return "Suspense";
		case Wu:
			return "SuspenseList";
	}
	if (typeof e == "object")
		switch (e.$$typeof) {
			case Am:
				return (e.displayName || "Context") + ".Consumer";
			case Dm:
				return (e._context.displayName || "Context") + ".Provider";
			case nd:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ""),
						(e =
							e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
					e
				);
			case rd:
				return (
					(t = e.displayName || null),
					t !== null ? t : Hu(e.type) || "Memo"
				);
			case dr:
				(t = e._payload), (e = e._init);
				try {
					return Hu(e(t));
				} catch {}
		}
	return null;
}
function f_(e) {
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
			return Hu(t);
		case 8:
			return t === td ? "StrictMode" : "Mode";
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
function Tr(e) {
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
function Im(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === "input" &&
		(t === "checkbox" || t === "radio")
	);
}
function h_(e) {
	var t = Im(e) ? "checked" : "value",
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = "" + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof n < "u" &&
		typeof n.get == "function" &&
		typeof n.set == "function"
	) {
		var i = n.get,
			o = n.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return i.call(this);
				},
				set: function (s) {
					(r = "" + s), o.call(this, s);
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (s) {
					r = "" + s;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				},
			}
		);
	}
}
function Jl(e) {
	e._valueTracker || (e._valueTracker = h_(e));
}
function $m(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = "";
	return (
		e && (r = Im(e) ? (e.checked ? "true" : "false") : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function Ns(e) {
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
function Vu(e, t) {
	var n = t.checked;
	return Qe({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function $h(e, t) {
	var n = t.defaultValue == null ? "" : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = Tr(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === "checkbox" || t.type === "radio"
					? t.checked != null
					: t.value != null,
		});
}
function Fm(e, t) {
	(t = t.checked), t != null && ed(e, "checked", t, !1);
}
function Ku(e, t) {
	Fm(e, t);
	var n = Tr(t.value),
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
		? Qu(e, t.type, n)
		: t.hasOwnProperty("defaultValue") && Qu(e, t.type, Tr(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function Fh(e, t, n) {
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
function Qu(e, t, n) {
	(t !== "number" || Ns(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = "" + e._wrapperState.initialValue)
			: e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Uo = Array.isArray;
function Qi(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
		for (n = 0; n < e.length; n++)
			(i = t.hasOwnProperty("$" + e[n].value)),
				e[n].selected !== i && (e[n].selected = i),
				i && r && (e[n].defaultSelected = !0);
	} else {
		for (n = "" + Tr(n), t = null, i = 0; i < e.length; i++) {
			if (e[i].value === n) {
				(e[i].selected = !0), r && (e[i].defaultSelected = !0);
				return;
			}
			t !== null || e[i].disabled || (t = e[i]);
		}
		t !== null && (t.selected = !0);
	}
}
function Yu(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(F(91));
	return Qe({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue,
	});
}
function zh(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(F(92));
			if (Uo(n)) {
				if (1 < n.length) throw Error(F(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ""), (n = t);
	}
	e._wrapperState = { initialValue: Tr(n) };
}
function zm(e, t) {
	var n = Tr(t.value),
		r = Tr(t.defaultValue);
	n != null &&
		((n = "" + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = "" + r);
}
function Uh(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue &&
		t !== "" &&
		t !== null &&
		(e.value = t);
}
function Um(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml";
	}
}
function Xu(e, t) {
	return e == null || e === "http://www.w3.org/1999/xhtml"
		? Um(t)
		: e === "http://www.w3.org/2000/svg" && t === "foreignObject"
		? "http://www.w3.org/1999/xhtml"
		: e;
}
var Zl,
	Bm = (function (e) {
		return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
			? function (t, n, r, i) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, i);
					});
			  }
			: e;
	})(function (e, t) {
		if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
			e.innerHTML = t;
		else {
			for (
				Zl = Zl || document.createElement("div"),
					Zl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
					t = Zl.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function il(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var Ko = {
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
	p_ = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ko).forEach(function (e) {
	p_.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ko[t] = Ko[e]);
	});
});
function Wm(e, t, n) {
	return t == null || typeof t == "boolean" || t === ""
		? ""
		: n ||
		  typeof t != "number" ||
		  t === 0 ||
		  (Ko.hasOwnProperty(e) && Ko[e])
		? ("" + t).trim()
		: t + "px";
}
function Hm(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0,
				i = Wm(n, t[n], r);
			n === "float" && (n = "cssFloat"),
				r ? e.setProperty(n, i) : (e[n] = i);
		}
}
var m_ = Qe(
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
function Gu(e, t) {
	if (t) {
		if (m_[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(F(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(F(60));
			if (
				typeof t.dangerouslySetInnerHTML != "object" ||
				!("__html" in t.dangerouslySetInnerHTML)
			)
				throw Error(F(61));
		}
		if (t.style != null && typeof t.style != "object") throw Error(F(62));
	}
}
function qu(e, t) {
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
var Ju = null;
function id(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var Zu = null,
	Yi = null,
	Xi = null;
function Bh(e) {
	if ((e = kl(e))) {
		if (typeof Zu != "function") throw Error(F(280));
		var t = e.stateNode;
		t && ((t = aa(t)), Zu(e.stateNode, e.type, t));
	}
}
function Vm(e) {
	Yi ? (Xi ? Xi.push(e) : (Xi = [e])) : (Yi = e);
}
function Km() {
	if (Yi) {
		var e = Yi,
			t = Xi;
		if (((Xi = Yi = null), Bh(e), t))
			for (e = 0; e < t.length; e++) Bh(t[e]);
	}
}
function Qm(e, t) {
	return e(t);
}
function Ym() {}
var au = !1;
function Xm(e, t, n) {
	if (au) return e(t, n);
	au = !0;
	try {
		return Qm(e, t, n);
	} finally {
		(au = !1), (Yi !== null || Xi !== null) && (Ym(), Km());
	}
}
function ol(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = aa(n);
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
	if (n && typeof n != "function") throw Error(F(231, t, typeof n));
	return n;
}
var ec = !1;
if (qn)
	try {
		var No = {};
		Object.defineProperty(No, "passive", {
			get: function () {
				ec = !0;
			},
		}),
			window.addEventListener("test", No, No),
			window.removeEventListener("test", No, No);
	} catch {
		ec = !1;
	}
function g_(e, t, n, r, i, o, s, a, c) {
	var d = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, d);
	} catch (p) {
		this.onError(p);
	}
}
var Qo = !1,
	bs = null,
	js = !1,
	tc = null,
	v_ = {
		onError: function (e) {
			(Qo = !0), (bs = e);
		},
	};
function y_(e, t, n, r, i, o, s, a, c) {
	(Qo = !1), (bs = null), g_.apply(v_, arguments);
}
function w_(e, t, n, r, i, o, s, a, c) {
	if ((y_.apply(this, arguments), Qo)) {
		if (Qo) {
			var d = bs;
			(Qo = !1), (bs = null);
		} else throw Error(F(198));
		js || ((js = !0), (tc = d));
	}
}
function gi(e) {
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
function Gm(e) {
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
function Wh(e) {
	if (gi(e) !== e) throw Error(F(188));
}
function __(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = gi(e)), t === null)) throw Error(F(188));
		return t !== e ? null : e;
	}
	for (var n = e, r = t; ; ) {
		var i = n.return;
		if (i === null) break;
		var o = i.alternate;
		if (o === null) {
			if (((r = i.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (i.child === o.child) {
			for (o = i.child; o; ) {
				if (o === n) return Wh(i), e;
				if (o === r) return Wh(i), t;
				o = o.sibling;
			}
			throw Error(F(188));
		}
		if (n.return !== r.return) (n = i), (r = o);
		else {
			for (var s = !1, a = i.child; a; ) {
				if (a === n) {
					(s = !0), (n = i), (r = o);
					break;
				}
				if (a === r) {
					(s = !0), (r = i), (n = o);
					break;
				}
				a = a.sibling;
			}
			if (!s) {
				for (a = o.child; a; ) {
					if (a === n) {
						(s = !0), (n = o), (r = i);
						break;
					}
					if (a === r) {
						(s = !0), (r = o), (n = i);
						break;
					}
					a = a.sibling;
				}
				if (!s) throw Error(F(189));
			}
		}
		if (n.alternate !== r) throw Error(F(190));
	}
	if (n.tag !== 3) throw Error(F(188));
	return n.stateNode.current === n ? e : t;
}
function qm(e) {
	return (e = __(e)), e !== null ? Jm(e) : null;
}
function Jm(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = Jm(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var Zm = Qt.unstable_scheduleCallback,
	Hh = Qt.unstable_cancelCallback,
	x_ = Qt.unstable_shouldYield,
	E_ = Qt.unstable_requestPaint,
	it = Qt.unstable_now,
	S_ = Qt.unstable_getCurrentPriorityLevel,
	od = Qt.unstable_ImmediatePriority,
	eg = Qt.unstable_UserBlockingPriority,
	Ls = Qt.unstable_NormalPriority,
	C_ = Qt.unstable_LowPriority,
	tg = Qt.unstable_IdlePriority,
	ia = null,
	Dn = null;
function k_(e) {
	if (Dn && typeof Dn.onCommitFiberRoot == "function")
		try {
			Dn.onCommitFiberRoot(
				ia,
				e,
				void 0,
				(e.current.flags & 128) === 128
			);
		} catch {}
}
var Sn = Math.clz32 ? Math.clz32 : b_,
	T_ = Math.log,
	N_ = Math.LN2;
function b_(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((T_(e) / N_) | 0)) | 0;
}
var es = 64,
	ts = 4194304;
function Bo(e) {
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
function Os(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		i = e.suspendedLanes,
		o = e.pingedLanes,
		s = n & 268435455;
	if (s !== 0) {
		var a = s & ~i;
		a !== 0 ? (r = Bo(a)) : ((o &= s), o !== 0 && (r = Bo(o)));
	} else (s = n & ~i), s !== 0 ? (r = Bo(s)) : o !== 0 && (r = Bo(o));
	if (r === 0) return 0;
	if (
		t !== 0 &&
		t !== r &&
		!(t & i) &&
		((i = r & -r),
		(o = t & -t),
		i >= o || (i === 16 && (o & 4194240) !== 0))
	)
		return t;
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - Sn(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
	return r;
}
function j_(e, t) {
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
function L_(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			i = e.expirationTimes,
			o = e.pendingLanes;
		0 < o;

	) {
		var s = 31 - Sn(o),
			a = 1 << s,
			c = i[s];
		c === -1
			? (!(a & n) || a & r) && (i[s] = j_(a, t))
			: c <= t && (e.expiredLanes |= a),
			(o &= ~a);
	}
}
function nc(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function ng() {
	var e = es;
	return (es <<= 1), !(es & 4194240) && (es = 64), e;
}
function uu(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function Sl(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - Sn(t)),
		(e[t] = n);
}
function O_(e, t) {
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
		var i = 31 - Sn(n),
			o = 1 << i;
		(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
	}
}
function ld(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - Sn(n),
			i = 1 << r;
		(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
	}
}
var Te = 0;
function rg(e) {
	return (
		(e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
	);
}
var ig,
	sd,
	og,
	lg,
	sg,
	rc = !1,
	ns = [],
	yr = null,
	wr = null,
	_r = null,
	ll = new Map(),
	sl = new Map(),
	pr = [],
	R_ =
		"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
			" "
		);
function Vh(e, t) {
	switch (e) {
		case "focusin":
		case "focusout":
			yr = null;
			break;
		case "dragenter":
		case "dragleave":
			wr = null;
			break;
		case "mouseover":
		case "mouseout":
			_r = null;
			break;
		case "pointerover":
		case "pointerout":
			ll.delete(t.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			sl.delete(t.pointerId);
	}
}
function bo(e, t, n, r, i, o) {
	return e === null || e.nativeEvent !== o
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: o,
				targetContainers: [i],
		  }),
		  t !== null && ((t = kl(t)), t !== null && sd(t)),
		  e)
		: ((e.eventSystemFlags |= r),
		  (t = e.targetContainers),
		  i !== null && t.indexOf(i) === -1 && t.push(i),
		  e);
}
function P_(e, t, n, r, i) {
	switch (t) {
		case "focusin":
			return (yr = bo(yr, e, t, n, r, i)), !0;
		case "dragenter":
			return (wr = bo(wr, e, t, n, r, i)), !0;
		case "mouseover":
			return (_r = bo(_r, e, t, n, r, i)), !0;
		case "pointerover":
			var o = i.pointerId;
			return ll.set(o, bo(ll.get(o) || null, e, t, n, r, i)), !0;
		case "gotpointercapture":
			return (
				(o = i.pointerId),
				sl.set(o, bo(sl.get(o) || null, e, t, n, r, i)),
				!0
			);
	}
	return !1;
}
function ag(e) {
	var t = Zr(e.target);
	if (t !== null) {
		var n = gi(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = Gm(n)), t !== null)) {
					(e.blockedOn = t),
						sg(e.priority, function () {
							og(n);
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
function vs(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = ic(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(Ju = r), n.target.dispatchEvent(r), (Ju = null);
		} else return (t = kl(n)), t !== null && sd(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function Kh(e, t, n) {
	vs(e) && n.delete(t);
}
function D_() {
	(rc = !1),
		yr !== null && vs(yr) && (yr = null),
		wr !== null && vs(wr) && (wr = null),
		_r !== null && vs(_r) && (_r = null),
		ll.forEach(Kh),
		sl.forEach(Kh);
}
function jo(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		rc ||
			((rc = !0),
			Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority, D_)));
}
function al(e) {
	function t(i) {
		return jo(i, e);
	}
	if (0 < ns.length) {
		jo(ns[0], e);
		for (var n = 1; n < ns.length; n++) {
			var r = ns[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		yr !== null && jo(yr, e),
			wr !== null && jo(wr, e),
			_r !== null && jo(_r, e),
			ll.forEach(t),
			sl.forEach(t),
			n = 0;
		n < pr.length;
		n++
	)
		(r = pr[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < pr.length && ((n = pr[0]), n.blockedOn === null); )
		ag(n), n.blockedOn === null && pr.shift();
}
var Gi = nr.ReactCurrentBatchConfig,
	Rs = !0;
function A_(e, t, n, r) {
	var i = Te,
		o = Gi.transition;
	Gi.transition = null;
	try {
		(Te = 1), ad(e, t, n, r);
	} finally {
		(Te = i), (Gi.transition = o);
	}
}
function M_(e, t, n, r) {
	var i = Te,
		o = Gi.transition;
	Gi.transition = null;
	try {
		(Te = 4), ad(e, t, n, r);
	} finally {
		(Te = i), (Gi.transition = o);
	}
}
function ad(e, t, n, r) {
	if (Rs) {
		var i = ic(e, t, n, r);
		if (i === null) wu(e, t, r, Ps, n), Vh(e, r);
		else if (P_(i, e, t, n, r)) r.stopPropagation();
		else if ((Vh(e, r), t & 4 && -1 < R_.indexOf(e))) {
			for (; i !== null; ) {
				var o = kl(i);
				if (
					(o !== null && ig(o),
					(o = ic(e, t, n, r)),
					o === null && wu(e, t, r, Ps, n),
					o === i)
				)
					break;
				i = o;
			}
			i !== null && r.stopPropagation();
		} else wu(e, t, r, null, n);
	}
}
var Ps = null;
function ic(e, t, n, r) {
	if (((Ps = null), (e = id(r)), (e = Zr(e)), e !== null))
		if (((t = gi(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = Gm(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (Ps = e), null;
}
function ug(e) {
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
			switch (S_()) {
				case od:
					return 1;
				case eg:
					return 4;
				case Ls:
				case C_:
					return 16;
				case tg:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var gr = null,
	ud = null,
	ys = null;
function cg() {
	if (ys) return ys;
	var e,
		t = ud,
		n = t.length,
		r,
		i = "value" in gr ? gr.value : gr.textContent,
		o = i.length;
	for (e = 0; e < n && t[e] === i[e]; e++);
	var s = n - e;
	for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
	return (ys = i.slice(e, 1 < r ? 1 - r : void 0));
}
function ws(e) {
	var t = e.keyCode;
	return (
		"charCode" in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function rs() {
	return !0;
}
function Qh() {
	return !1;
}
function Xt(e) {
	function t(n, r, i, o, s) {
		(this._reactName = n),
			(this._targetInst = i),
			(this.type = r),
			(this.nativeEvent = o),
			(this.target = s),
			(this.currentTarget = null);
		for (var a in e)
			e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
		return (
			(this.isDefaultPrevented = (
				o.defaultPrevented != null
					? o.defaultPrevented
					: o.returnValue === !1
			)
				? rs
				: Qh),
			(this.isPropagationStopped = Qh),
			this
		);
	}
	return (
		Qe(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != "unknown" &&
						  (n.returnValue = !1),
					(this.isDefaultPrevented = rs));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != "unknown" &&
						  (n.cancelBubble = !0),
					(this.isPropagationStopped = rs));
			},
			persist: function () {},
			isPersistent: rs,
		}),
		t
	);
}
var fo = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	cd = Xt(fo),
	Cl = Qe({}, fo, { view: 0, detail: 0 }),
	I_ = Xt(Cl),
	cu,
	du,
	Lo,
	oa = Qe({}, Cl, {
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
		getModifierState: dd,
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
				: (e !== Lo &&
						(Lo && e.type === "mousemove"
							? ((cu = e.screenX - Lo.screenX),
							  (du = e.screenY - Lo.screenY))
							: (du = cu = 0),
						(Lo = e)),
				  cu);
		},
		movementY: function (e) {
			return "movementY" in e ? e.movementY : du;
		},
	}),
	Yh = Xt(oa),
	$_ = Qe({}, oa, { dataTransfer: 0 }),
	F_ = Xt($_),
	z_ = Qe({}, Cl, { relatedTarget: 0 }),
	fu = Xt(z_),
	U_ = Qe({}, fo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	B_ = Xt(U_),
	W_ = Qe({}, fo, {
		clipboardData: function (e) {
			return "clipboardData" in e
				? e.clipboardData
				: window.clipboardData;
		},
	}),
	H_ = Xt(W_),
	V_ = Qe({}, fo, { data: 0 }),
	Xh = Xt(V_),
	K_ = {
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
	Q_ = {
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
	Y_ = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey",
	};
function X_(e) {
	var t = this.nativeEvent;
	return t.getModifierState
		? t.getModifierState(e)
		: (e = Y_[e])
		? !!t[e]
		: !1;
}
function dd() {
	return X_;
}
var G_ = Qe({}, Cl, {
		key: function (e) {
			if (e.key) {
				var t = K_[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress"
				? ((e = ws(e)), e === 13 ? "Enter" : String.fromCharCode(e))
				: e.type === "keydown" || e.type === "keyup"
				? Q_[e.keyCode] || "Unidentified"
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
		getModifierState: dd,
		charCode: function (e) {
			return e.type === "keypress" ? ws(e) : 0;
		},
		keyCode: function (e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === "keypress"
				? ws(e)
				: e.type === "keydown" || e.type === "keyup"
				? e.keyCode
				: 0;
		},
	}),
	q_ = Xt(G_),
	J_ = Qe({}, oa, {
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
	Gh = Xt(J_),
	Z_ = Qe({}, Cl, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: dd,
	}),
	e1 = Xt(Z_),
	t1 = Qe({}, fo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	n1 = Xt(t1),
	r1 = Qe({}, oa, {
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
	i1 = Xt(r1),
	o1 = [9, 13, 27, 32],
	fd = qn && "CompositionEvent" in window,
	Yo = null;
qn && "documentMode" in document && (Yo = document.documentMode);
var l1 = qn && "TextEvent" in window && !Yo,
	dg = qn && (!fd || (Yo && 8 < Yo && 11 >= Yo)),
	qh = " ",
	Jh = !1;
function fg(e, t) {
	switch (e) {
		case "keyup":
			return o1.indexOf(t.keyCode) !== -1;
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
function hg(e) {
	return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Mi = !1;
function s1(e, t) {
	switch (e) {
		case "compositionend":
			return hg(t);
		case "keypress":
			return t.which !== 32 ? null : ((Jh = !0), qh);
		case "textInput":
			return (e = t.data), e === qh && Jh ? null : e;
		default:
			return null;
	}
}
function a1(e, t) {
	if (Mi)
		return e === "compositionend" || (!fd && fg(e, t))
			? ((e = cg()), (ys = ud = gr = null), (Mi = !1), e)
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
			return dg && t.locale !== "ko" ? null : t.data;
		default:
			return null;
	}
}
var u1 = {
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
function Zh(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === "input" ? !!u1[e.type] : t === "textarea";
}
function pg(e, t, n, r) {
	Vm(r),
		(t = Ds(t, "onChange")),
		0 < t.length &&
			((n = new cd("onChange", "change", null, n, r)),
			e.push({ event: n, listeners: t }));
}
var Xo = null,
	ul = null;
function c1(e) {
	kg(e, 0);
}
function la(e) {
	var t = Fi(e);
	if ($m(t)) return e;
}
function d1(e, t) {
	if (e === "change") return t;
}
var mg = !1;
if (qn) {
	var hu;
	if (qn) {
		var pu = "oninput" in document;
		if (!pu) {
			var ep = document.createElement("div");
			ep.setAttribute("oninput", "return;"),
				(pu = typeof ep.oninput == "function");
		}
		hu = pu;
	} else hu = !1;
	mg = hu && (!document.documentMode || 9 < document.documentMode);
}
function tp() {
	Xo && (Xo.detachEvent("onpropertychange", gg), (ul = Xo = null));
}
function gg(e) {
	if (e.propertyName === "value" && la(ul)) {
		var t = [];
		pg(t, ul, e, id(e)), Xm(c1, t);
	}
}
function f1(e, t, n) {
	e === "focusin"
		? (tp(), (Xo = t), (ul = n), Xo.attachEvent("onpropertychange", gg))
		: e === "focusout" && tp();
}
function h1(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown")
		return la(ul);
}
function p1(e, t) {
	if (e === "click") return la(t);
}
function m1(e, t) {
	if (e === "input" || e === "change") return la(t);
}
function g1(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var kn = typeof Object.is == "function" ? Object.is : g1;
function cl(e, t) {
	if (kn(e, t)) return !0;
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
		var i = n[r];
		if (!zu.call(t, i) || !kn(e[i], t[i])) return !1;
	}
	return !0;
}
function np(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function rp(e, t) {
	var n = np(e);
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
		n = np(n);
	}
}
function vg(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? vg(e, t.parentNode)
			: "contains" in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1;
}
function yg() {
	for (var e = window, t = Ns(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == "string";
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = Ns(e.document);
	}
	return t;
}
function hd(e) {
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
function v1(e) {
	var t = yg(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		vg(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && hd(n)) {
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
				var i = n.textContent.length,
					o = Math.min(r.start, i);
				(r = r.end === void 0 ? o : Math.min(r.end, i)),
					!e.extend && o > r && ((i = r), (r = o), (o = i)),
					(i = rp(n, o));
				var s = rp(n, r);
				i &&
					s &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== i.node ||
						e.anchorOffset !== i.offset ||
						e.focusNode !== s.node ||
						e.focusOffset !== s.offset) &&
					((t = t.createRange()),
					t.setStart(i.node, i.offset),
					e.removeAllRanges(),
					o > r
						? (e.addRange(t), e.extend(s.node, s.offset))
						: (t.setEnd(s.node, s.offset), e.addRange(t)));
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
var y1 = qn && "documentMode" in document && 11 >= document.documentMode,
	Ii = null,
	oc = null,
	Go = null,
	lc = !1;
function ip(e, t, n) {
	var r =
		n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	lc ||
		Ii == null ||
		Ii !== Ns(r) ||
		((r = Ii),
		"selectionStart" in r && hd(r)
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
		(Go && cl(Go, r)) ||
			((Go = r),
			(r = Ds(oc, "onSelect")),
			0 < r.length &&
				((t = new cd("onSelect", "select", null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = Ii))));
}
function is(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n["Webkit" + e] = "webkit" + t),
		(n["Moz" + e] = "moz" + t),
		n
	);
}
var $i = {
		animationend: is("Animation", "AnimationEnd"),
		animationiteration: is("Animation", "AnimationIteration"),
		animationstart: is("Animation", "AnimationStart"),
		transitionend: is("Transition", "TransitionEnd"),
	},
	mu = {},
	wg = {};
qn &&
	((wg = document.createElement("div").style),
	"AnimationEvent" in window ||
		(delete $i.animationend.animation,
		delete $i.animationiteration.animation,
		delete $i.animationstart.animation),
	"TransitionEvent" in window || delete $i.transitionend.transition);
function sa(e) {
	if (mu[e]) return mu[e];
	if (!$i[e]) return e;
	var t = $i[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in wg) return (mu[e] = t[n]);
	return e;
}
var _g = sa("animationend"),
	xg = sa("animationiteration"),
	Eg = sa("animationstart"),
	Sg = sa("transitionend"),
	Cg = new Map(),
	op =
		"abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
			" "
		);
function jr(e, t) {
	Cg.set(e, t), mi(t, [e]);
}
for (var gu = 0; gu < op.length; gu++) {
	var vu = op[gu],
		w1 = vu.toLowerCase(),
		_1 = vu[0].toUpperCase() + vu.slice(1);
	jr(w1, "on" + _1);
}
jr(_g, "onAnimationEnd");
jr(xg, "onAnimationIteration");
jr(Eg, "onAnimationStart");
jr("dblclick", "onDoubleClick");
jr("focusin", "onFocus");
jr("focusout", "onBlur");
jr(Sg, "onTransitionEnd");
no("onMouseEnter", ["mouseout", "mouseover"]);
no("onMouseLeave", ["mouseout", "mouseover"]);
no("onPointerEnter", ["pointerout", "pointerover"]);
no("onPointerLeave", ["pointerout", "pointerover"]);
mi(
	"onChange",
	"change click focusin focusout input keydown keyup selectionchange".split(
		" "
	)
);
mi(
	"onSelect",
	"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
		" "
	)
);
mi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
mi(
	"onCompositionEnd",
	"compositionend focusout keydown keypress keyup mousedown".split(" ")
);
mi(
	"onCompositionStart",
	"compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
mi(
	"onCompositionUpdate",
	"compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Wo =
		"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
			" "
		),
	x1 = new Set(
		"cancel close invalid load scroll toggle".split(" ").concat(Wo)
	);
function lp(e, t, n) {
	var r = e.type || "unknown-event";
	(e.currentTarget = n), w_(r, t, void 0, e), (e.currentTarget = null);
}
function kg(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			i = r.event;
		r = r.listeners;
		e: {
			var o = void 0;
			if (t)
				for (var s = r.length - 1; 0 <= s; s--) {
					var a = r[s],
						c = a.instance,
						d = a.currentTarget;
					if (((a = a.listener), c !== o && i.isPropagationStopped()))
						break e;
					lp(i, a, d), (o = c);
				}
			else
				for (s = 0; s < r.length; s++) {
					if (
						((a = r[s]),
						(c = a.instance),
						(d = a.currentTarget),
						(a = a.listener),
						c !== o && i.isPropagationStopped())
					)
						break e;
					lp(i, a, d), (o = c);
				}
		}
	}
	if (js) throw ((e = tc), (js = !1), (tc = null), e);
}
function ze(e, t) {
	var n = t[dc];
	n === void 0 && (n = t[dc] = new Set());
	var r = e + "__bubble";
	n.has(r) || (Tg(t, e, 2, !1), n.add(r));
}
function yu(e, t, n) {
	var r = 0;
	t && (r |= 4), Tg(n, e, r, t);
}
var os = "_reactListening" + Math.random().toString(36).slice(2);
function dl(e) {
	if (!e[os]) {
		(e[os] = !0),
			Pm.forEach(function (n) {
				n !== "selectionchange" &&
					(x1.has(n) || yu(n, !1, e), yu(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[os] || ((t[os] = !0), yu("selectionchange", !1, t));
	}
}
function Tg(e, t, n, r) {
	switch (ug(t)) {
		case 1:
			var i = A_;
			break;
		case 4:
			i = M_;
			break;
		default:
			i = ad;
	}
	(n = i.bind(null, t, n, e)),
		(i = void 0),
		!ec ||
			(t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
			(i = !0),
		r
			? i !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: i })
				: e.addEventListener(t, n, !0)
			: i !== void 0
			? e.addEventListener(t, n, { passive: i })
			: e.addEventListener(t, n, !1);
}
function wu(e, t, n, r, i) {
	var o = r;
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var s = r.tag;
			if (s === 3 || s === 4) {
				var a = r.stateNode.containerInfo;
				if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
				if (s === 4)
					for (s = r.return; s !== null; ) {
						var c = s.tag;
						if (
							(c === 3 || c === 4) &&
							((c = s.stateNode.containerInfo),
							c === i || (c.nodeType === 8 && c.parentNode === i))
						)
							return;
						s = s.return;
					}
				for (; a !== null; ) {
					if (((s = Zr(a)), s === null)) return;
					if (((c = s.tag), c === 5 || c === 6)) {
						r = o = s;
						continue e;
					}
					a = a.parentNode;
				}
			}
			r = r.return;
		}
	Xm(function () {
		var d = o,
			p = id(n),
			v = [];
		e: {
			var m = Cg.get(e);
			if (m !== void 0) {
				var b = cd,
					S = e;
				switch (e) {
					case "keypress":
						if (ws(n) === 0) break e;
					case "keydown":
					case "keyup":
						b = q_;
						break;
					case "focusin":
						(S = "focus"), (b = fu);
						break;
					case "focusout":
						(S = "blur"), (b = fu);
						break;
					case "beforeblur":
					case "afterblur":
						b = fu;
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
						b = Yh;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						b = F_;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						b = e1;
						break;
					case _g:
					case xg:
					case Eg:
						b = B_;
						break;
					case Sg:
						b = n1;
						break;
					case "scroll":
						b = I_;
						break;
					case "wheel":
						b = i1;
						break;
					case "copy":
					case "cut":
					case "paste":
						b = H_;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						b = Gh;
				}
				var N = (t & 4) !== 0,
					R = !N && e === "scroll",
					y = N ? (m !== null ? m + "Capture" : null) : m;
				N = [];
				for (var g = d, E; g !== null; ) {
					E = g;
					var w = E.stateNode;
					if (
						(E.tag === 5 &&
							w !== null &&
							((E = w),
							y !== null &&
								((w = ol(g, y)),
								w != null && N.push(fl(g, w, E)))),
						R)
					)
						break;
					g = g.return;
				}
				0 < N.length &&
					((m = new b(m, S, null, n, p)),
					v.push({ event: m, listeners: N }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((m = e === "mouseover" || e === "pointerover"),
					(b = e === "mouseout" || e === "pointerout"),
					m &&
						n !== Ju &&
						(S = n.relatedTarget || n.fromElement) &&
						(Zr(S) || S[Jn]))
				)
					break e;
				if (
					(b || m) &&
					((m =
						p.window === p
							? p
							: (m = p.ownerDocument)
							? m.defaultView || m.parentWindow
							: window),
					b
						? ((S = n.relatedTarget || n.toElement),
						  (b = d),
						  (S = S ? Zr(S) : null),
						  S !== null &&
								((R = gi(S)),
								S !== R || (S.tag !== 5 && S.tag !== 6)) &&
								(S = null))
						: ((b = null), (S = d)),
					b !== S)
				) {
					if (
						((N = Yh),
						(w = "onMouseLeave"),
						(y = "onMouseEnter"),
						(g = "mouse"),
						(e === "pointerout" || e === "pointerover") &&
							((N = Gh),
							(w = "onPointerLeave"),
							(y = "onPointerEnter"),
							(g = "pointer")),
						(R = b == null ? m : Fi(b)),
						(E = S == null ? m : Fi(S)),
						(m = new N(w, g + "leave", b, n, p)),
						(m.target = R),
						(m.relatedTarget = E),
						(w = null),
						Zr(p) === d &&
							((N = new N(y, g + "enter", S, n, p)),
							(N.target = E),
							(N.relatedTarget = R),
							(w = N)),
						(R = w),
						b && S)
					)
						t: {
							for (N = b, y = S, g = 0, E = N; E; E = Oi(E)) g++;
							for (E = 0, w = y; w; w = Oi(w)) E++;
							for (; 0 < g - E; ) (N = Oi(N)), g--;
							for (; 0 < E - g; ) (y = Oi(y)), E--;
							for (; g--; ) {
								if (
									N === y ||
									(y !== null && N === y.alternate)
								)
									break t;
								(N = Oi(N)), (y = Oi(y));
							}
							N = null;
						}
					else N = null;
					b !== null && sp(v, m, b, N, !1),
						S !== null && R !== null && sp(v, R, S, N, !0);
				}
			}
			e: {
				if (
					((m = d ? Fi(d) : window),
					(b = m.nodeName && m.nodeName.toLowerCase()),
					b === "select" || (b === "input" && m.type === "file"))
				)
					var A = d1;
				else if (Zh(m))
					if (mg) A = m1;
					else {
						A = h1;
						var D = f1;
					}
				else
					(b = m.nodeName) &&
						b.toLowerCase() === "input" &&
						(m.type === "checkbox" || m.type === "radio") &&
						(A = p1);
				if (A && (A = A(e, d))) {
					pg(v, A, n, p);
					break e;
				}
				D && D(e, m, d),
					e === "focusout" &&
						(D = m._wrapperState) &&
						D.controlled &&
						m.type === "number" &&
						Qu(m, "number", m.value);
			}
			switch (((D = d ? Fi(d) : window), e)) {
				case "focusin":
					(Zh(D) || D.contentEditable === "true") &&
						((Ii = D), (oc = d), (Go = null));
					break;
				case "focusout":
					Go = oc = Ii = null;
					break;
				case "mousedown":
					lc = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					(lc = !1), ip(v, n, p);
					break;
				case "selectionchange":
					if (y1) break;
				case "keydown":
				case "keyup":
					ip(v, n, p);
			}
			var P;
			if (fd)
				e: {
					switch (e) {
						case "compositionstart":
							var z = "onCompositionStart";
							break e;
						case "compositionend":
							z = "onCompositionEnd";
							break e;
						case "compositionupdate":
							z = "onCompositionUpdate";
							break e;
					}
					z = void 0;
				}
			else
				Mi
					? fg(e, n) && (z = "onCompositionEnd")
					: e === "keydown" &&
					  n.keyCode === 229 &&
					  (z = "onCompositionStart");
			z &&
				(dg &&
					n.locale !== "ko" &&
					(Mi || z !== "onCompositionStart"
						? z === "onCompositionEnd" && Mi && (P = cg())
						: ((gr = p),
						  (ud = "value" in gr ? gr.value : gr.textContent),
						  (Mi = !0))),
				(D = Ds(d, z)),
				0 < D.length &&
					((z = new Xh(z, e, null, n, p)),
					v.push({ event: z, listeners: D }),
					P
						? (z.data = P)
						: ((P = hg(n)), P !== null && (z.data = P)))),
				(P = l1 ? s1(e, n) : a1(e, n)) &&
					((d = Ds(d, "onBeforeInput")),
					0 < d.length &&
						((p = new Xh(
							"onBeforeInput",
							"beforeinput",
							null,
							n,
							p
						)),
						v.push({ event: p, listeners: d }),
						(p.data = P)));
		}
		kg(v, t);
	});
}
function fl(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function Ds(e, t) {
	for (var n = t + "Capture", r = []; e !== null; ) {
		var i = e,
			o = i.stateNode;
		i.tag === 5 &&
			o !== null &&
			((i = o),
			(o = ol(e, n)),
			o != null && r.unshift(fl(e, o, i)),
			(o = ol(e, t)),
			o != null && r.push(fl(e, o, i))),
			(e = e.return);
	}
	return r;
}
function Oi(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function sp(e, t, n, r, i) {
	for (var o = t._reactName, s = []; n !== null && n !== r; ) {
		var a = n,
			c = a.alternate,
			d = a.stateNode;
		if (c !== null && c === r) break;
		a.tag === 5 &&
			d !== null &&
			((a = d),
			i
				? ((c = ol(n, o)), c != null && s.unshift(fl(n, c, a)))
				: i || ((c = ol(n, o)), c != null && s.push(fl(n, c, a)))),
			(n = n.return);
	}
	s.length !== 0 && e.push({ event: t, listeners: s });
}
var E1 = /\r\n?/g,
	S1 = /\u0000|\uFFFD/g;
function ap(e) {
	return (typeof e == "string" ? e : "" + e)
		.replace(
			E1,
			`
`
		)
		.replace(S1, "");
}
function ls(e, t, n) {
	if (((t = ap(t)), ap(e) !== t && n)) throw Error(F(425));
}
function As() {}
var sc = null,
	ac = null;
function uc(e, t) {
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
var cc = typeof setTimeout == "function" ? setTimeout : void 0,
	C1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
	up = typeof Promise == "function" ? Promise : void 0,
	k1 =
		typeof queueMicrotask == "function"
			? queueMicrotask
			: typeof up < "u"
			? function (e) {
					return up.resolve(null).then(e).catch(T1);
			  }
			: cc;
function T1(e) {
	setTimeout(function () {
		throw e;
	});
}
function _u(e, t) {
	var n = t,
		r = 0;
	do {
		var i = n.nextSibling;
		if ((e.removeChild(n), i && i.nodeType === 8))
			if (((n = i.data), n === "/$")) {
				if (r === 0) {
					e.removeChild(i), al(t);
					return;
				}
				r--;
			} else (n !== "$" && n !== "$?" && n !== "$!") || r++;
		n = i;
	} while (n);
	al(t);
}
function xr(e) {
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
function cp(e) {
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
var ho = Math.random().toString(36).slice(2),
	Pn = "__reactFiber$" + ho,
	hl = "__reactProps$" + ho,
	Jn = "__reactContainer$" + ho,
	dc = "__reactEvents$" + ho,
	N1 = "__reactListeners$" + ho,
	b1 = "__reactHandles$" + ho;
function Zr(e) {
	var t = e[Pn];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[Jn] || n[Pn])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = cp(e); e !== null; ) {
					if ((n = e[Pn])) return n;
					e = cp(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function kl(e) {
	return (
		(e = e[Pn] || e[Jn]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
			? null
			: e
	);
}
function Fi(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(F(33));
}
function aa(e) {
	return e[hl] || null;
}
var fc = [],
	zi = -1;
function Lr(e) {
	return { current: e };
}
function Ue(e) {
	0 > zi || ((e.current = fc[zi]), (fc[zi] = null), zi--);
}
function Fe(e, t) {
	zi++, (fc[zi] = e.current), (e.current = t);
}
var Nr = {},
	kt = Lr(Nr),
	It = Lr(!1),
	ai = Nr;
function ro(e, t) {
	var n = e.type.contextTypes;
	if (!n) return Nr;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext;
	var i = {},
		o;
	for (o in n) i[o] = t[o];
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = i)),
		i
	);
}
function $t(e) {
	return (e = e.childContextTypes), e != null;
}
function Ms() {
	Ue(It), Ue(kt);
}
function dp(e, t, n) {
	if (kt.current !== Nr) throw Error(F(168));
	Fe(kt, t), Fe(It, n);
}
function Ng(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
		return n;
	r = r.getChildContext();
	for (var i in r) if (!(i in t)) throw Error(F(108, f_(e) || "Unknown", i));
	return Qe({}, n, r);
}
function Is(e) {
	return (
		(e =
			((e = e.stateNode) &&
				e.__reactInternalMemoizedMergedChildContext) ||
			Nr),
		(ai = kt.current),
		Fe(kt, e),
		Fe(It, It.current),
		!0
	);
}
function fp(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(F(169));
	n
		? ((e = Ng(e, t, ai)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  Ue(It),
		  Ue(kt),
		  Fe(kt, e))
		: Ue(It),
		Fe(It, n);
}
var Wn = null,
	ua = !1,
	xu = !1;
function bg(e) {
	Wn === null ? (Wn = [e]) : Wn.push(e);
}
function j1(e) {
	(ua = !0), bg(e);
}
function Or() {
	if (!xu && Wn !== null) {
		xu = !0;
		var e = 0,
			t = Te;
		try {
			var n = Wn;
			for (Te = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(Wn = null), (ua = !1);
		} catch (i) {
			throw (Wn !== null && (Wn = Wn.slice(e + 1)), Zm(od, Or), i);
		} finally {
			(Te = t), (xu = !1);
		}
	}
	return null;
}
var Ui = [],
	Bi = 0,
	$s = null,
	Fs = 0,
	on = [],
	ln = 0,
	ui = null,
	Vn = 1,
	Kn = "";
function Gr(e, t) {
	(Ui[Bi++] = Fs), (Ui[Bi++] = $s), ($s = e), (Fs = t);
}
function jg(e, t, n) {
	(on[ln++] = Vn), (on[ln++] = Kn), (on[ln++] = ui), (ui = e);
	var r = Vn;
	e = Kn;
	var i = 32 - Sn(r) - 1;
	(r &= ~(1 << i)), (n += 1);
	var o = 32 - Sn(t) + i;
	if (30 < o) {
		var s = i - (i % 5);
		(o = (r & ((1 << s) - 1)).toString(32)),
			(r >>= s),
			(i -= s),
			(Vn = (1 << (32 - Sn(t) + i)) | (n << i) | r),
			(Kn = o + e);
	} else (Vn = (1 << o) | (n << i) | r), (Kn = e);
}
function pd(e) {
	e.return !== null && (Gr(e, 1), jg(e, 1, 0));
}
function md(e) {
	for (; e === $s; )
		($s = Ui[--Bi]), (Ui[Bi] = null), (Fs = Ui[--Bi]), (Ui[Bi] = null);
	for (; e === ui; )
		(ui = on[--ln]),
			(on[ln] = null),
			(Kn = on[--ln]),
			(on[ln] = null),
			(Vn = on[--ln]),
			(on[ln] = null);
}
var Kt = null,
	Vt = null,
	We = !1,
	_n = null;
function Lg(e, t) {
	var n = an(5, null, null, 0);
	(n.elementType = "DELETED"),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function hp(e, t) {
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
					? ((e.stateNode = t), (Kt = e), (Vt = xr(t.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (Kt = e), (Vt = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = ui !== null ? { id: Vn, overflow: Kn } : null),
					  (e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
					  }),
					  (n = an(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (Kt = e),
					  (Vt = null),
					  !0)
					: !1
			);
		default:
			return !1;
	}
}
function hc(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function pc(e) {
	if (We) {
		var t = Vt;
		if (t) {
			var n = t;
			if (!hp(e, t)) {
				if (hc(e)) throw Error(F(418));
				t = xr(n.nextSibling);
				var r = Kt;
				t && hp(e, t)
					? Lg(r, n)
					: ((e.flags = (e.flags & -4097) | 2), (We = !1), (Kt = e));
			}
		} else {
			if (hc(e)) throw Error(F(418));
			(e.flags = (e.flags & -4097) | 2), (We = !1), (Kt = e);
		}
	}
}
function pp(e) {
	for (
		e = e.return;
		e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

	)
		e = e.return;
	Kt = e;
}
function ss(e) {
	if (e !== Kt) return !1;
	if (!We) return pp(e), (We = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== "head" && t !== "body" && !uc(e.type, e.memoizedProps))),
		t && (t = Vt))
	) {
		if (hc(e)) throw (Og(), Error(F(418)));
		for (; t; ) Lg(e, t), (t = xr(t.nextSibling));
	}
	if ((pp(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(F(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === "/$") {
						if (t === 0) {
							Vt = xr(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== "$" && n !== "$!" && n !== "$?") || t++;
				}
				e = e.nextSibling;
			}
			Vt = null;
		}
	} else Vt = Kt ? xr(e.stateNode.nextSibling) : null;
	return !0;
}
function Og() {
	for (var e = Vt; e; ) e = xr(e.nextSibling);
}
function io() {
	(Vt = Kt = null), (We = !1);
}
function gd(e) {
	_n === null ? (_n = [e]) : _n.push(e);
}
var L1 = nr.ReactCurrentBatchConfig;
function vn(e, t) {
	if (e && e.defaultProps) {
		(t = Qe({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
var zs = Lr(null),
	Us = null,
	Wi = null,
	vd = null;
function yd() {
	vd = Wi = Us = null;
}
function wd(e) {
	var t = zs.current;
	Ue(zs), (e._currentValue = t);
}
function mc(e, t, n) {
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
function qi(e, t) {
	(Us = e),
		(vd = Wi = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (Mt = !0), (e.firstContext = null));
}
function cn(e) {
	var t = e._currentValue;
	if (vd !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), Wi === null)) {
			if (Us === null) throw Error(F(308));
			(Wi = e), (Us.dependencies = { lanes: 0, firstContext: e });
		} else Wi = Wi.next = e;
	return t;
}
var ei = null;
function _d(e) {
	ei === null ? (ei = [e]) : ei.push(e);
}
function Rg(e, t, n, r) {
	var i = t.interleaved;
	return (
		i === null ? ((n.next = n), _d(t)) : ((n.next = i.next), (i.next = n)),
		(t.interleaved = n),
		Zn(e, r)
	);
}
function Zn(e, t) {
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
var fr = !1;
function xd(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function Pg(e, t) {
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
function Qn(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function Er(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), ve & 2)) {
		var i = r.pending;
		return (
			i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
			(r.pending = t),
			Zn(e, n)
		);
	}
	return (
		(i = r.interleaved),
		i === null ? ((t.next = t), _d(r)) : ((t.next = i.next), (i.next = t)),
		(r.interleaved = t),
		Zn(e, n)
	);
}
function _s(e, t, n) {
	if (
		((t = t.updateQueue),
		t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), ld(e, n);
	}
}
function mp(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var i = null,
			o = null;
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
				o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
			} while (n !== null);
			o === null ? (i = o = t) : (o = o.next = t);
		} else i = o = t;
		(n = {
			baseState: r.baseState,
			firstBaseUpdate: i,
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
function Bs(e, t, n, r) {
	var i = e.updateQueue;
	fr = !1;
	var o = i.firstBaseUpdate,
		s = i.lastBaseUpdate,
		a = i.shared.pending;
	if (a !== null) {
		i.shared.pending = null;
		var c = a,
			d = c.next;
		(c.next = null), s === null ? (o = d) : (s.next = d), (s = c);
		var p = e.alternate;
		p !== null &&
			((p = p.updateQueue),
			(a = p.lastBaseUpdate),
			a !== s &&
				(a === null ? (p.firstBaseUpdate = d) : (a.next = d),
				(p.lastBaseUpdate = c)));
	}
	if (o !== null) {
		var v = i.baseState;
		(s = 0), (p = d = c = null), (a = o);
		do {
			var m = a.lane,
				b = a.eventTime;
			if ((r & m) === m) {
				p !== null &&
					(p = p.next =
						{
							eventTime: b,
							lane: 0,
							tag: a.tag,
							payload: a.payload,
							callback: a.callback,
							next: null,
						});
				e: {
					var S = e,
						N = a;
					switch (((m = t), (b = n), N.tag)) {
						case 1:
							if (((S = N.payload), typeof S == "function")) {
								v = S.call(b, v, m);
								break e;
							}
							v = S;
							break e;
						case 3:
							S.flags = (S.flags & -65537) | 128;
						case 0:
							if (
								((S = N.payload),
								(m =
									typeof S == "function"
										? S.call(b, v, m)
										: S),
								m == null)
							)
								break e;
							v = Qe({}, v, m);
							break e;
						case 2:
							fr = !0;
					}
				}
				a.callback !== null &&
					a.lane !== 0 &&
					((e.flags |= 64),
					(m = i.effects),
					m === null ? (i.effects = [a]) : m.push(a));
			} else
				(b = {
					eventTime: b,
					lane: m,
					tag: a.tag,
					payload: a.payload,
					callback: a.callback,
					next: null,
				}),
					p === null ? ((d = p = b), (c = v)) : (p = p.next = b),
					(s |= m);
			if (((a = a.next), a === null)) {
				if (((a = i.shared.pending), a === null)) break;
				(m = a),
					(a = m.next),
					(m.next = null),
					(i.lastBaseUpdate = m),
					(i.shared.pending = null);
			}
		} while (!0);
		if (
			(p === null && (c = v),
			(i.baseState = c),
			(i.firstBaseUpdate = d),
			(i.lastBaseUpdate = p),
			(t = i.shared.interleaved),
			t !== null)
		) {
			i = t;
			do (s |= i.lane), (i = i.next);
			while (i !== t);
		} else o === null && (i.shared.lanes = 0);
		(di |= s), (e.lanes = s), (e.memoizedState = v);
	}
}
function gp(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				i = r.callback;
			if (i !== null) {
				if (((r.callback = null), (r = n), typeof i != "function"))
					throw Error(F(191, i));
				i.call(r);
			}
		}
}
var Dg = new Rm.Component().refs;
function gc(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : Qe({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ca = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? gi(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = Lt(),
			i = Cr(e),
			o = Qn(r, i);
		(o.payload = t),
			n != null && (o.callback = n),
			(t = Er(e, o, i)),
			t !== null && (Cn(t, e, i, r), _s(t, e, i));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = Lt(),
			i = Cr(e),
			o = Qn(r, i);
		(o.tag = 1),
			(o.payload = t),
			n != null && (o.callback = n),
			(t = Er(e, o, i)),
			t !== null && (Cn(t, e, i, r), _s(t, e, i));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = Lt(),
			r = Cr(e),
			i = Qn(n, r);
		(i.tag = 2),
			t != null && (i.callback = t),
			(t = Er(e, i, r)),
			t !== null && (Cn(t, e, r, n), _s(t, e, r));
	},
};
function vp(e, t, n, r, i, o, s) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == "function"
			? e.shouldComponentUpdate(r, o, s)
			: t.prototype && t.prototype.isPureReactComponent
			? !cl(n, r) || !cl(i, o)
			: !0
	);
}
function Ag(e, t, n) {
	var r = !1,
		i = Nr,
		o = t.contextType;
	return (
		typeof o == "object" && o !== null
			? (o = cn(o))
			: ((i = $t(t) ? ai : kt.current),
			  (r = t.contextTypes),
			  (o = (r = r != null) ? ro(e, i) : Nr)),
		(t = new t(n, o)),
		(e.memoizedState =
			t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = ca),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = i),
			(e.__reactInternalMemoizedMaskedChildContext = o)),
		t
	);
}
function yp(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == "function" &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == "function" &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && ca.enqueueReplaceState(t, t.state, null);
}
function vc(e, t, n, r) {
	var i = e.stateNode;
	(i.props = n), (i.state = e.memoizedState), (i.refs = Dg), xd(e);
	var o = t.contextType;
	typeof o == "object" && o !== null
		? (i.context = cn(o))
		: ((o = $t(t) ? ai : kt.current), (i.context = ro(e, o))),
		(i.state = e.memoizedState),
		(o = t.getDerivedStateFromProps),
		typeof o == "function" && (gc(e, t, o, n), (i.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == "function" ||
			typeof i.getSnapshotBeforeUpdate == "function" ||
			(typeof i.UNSAFE_componentWillMount != "function" &&
				typeof i.componentWillMount != "function") ||
			((t = i.state),
			typeof i.componentWillMount == "function" && i.componentWillMount(),
			typeof i.UNSAFE_componentWillMount == "function" &&
				i.UNSAFE_componentWillMount(),
			t !== i.state && ca.enqueueReplaceState(i, i.state, null),
			Bs(e, n, i, r),
			(i.state = e.memoizedState)),
		typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Oo(e, t, n) {
	if (
		((e = n.ref),
		e !== null && typeof e != "function" && typeof e != "object")
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(F(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(F(147, e));
			var i = r,
				o = "" + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == "function" &&
				t.ref._stringRef === o
				? t.ref
				: ((t = function (s) {
						var a = i.refs;
						a === Dg && (a = i.refs = {}),
							s === null ? delete a[o] : (a[o] = s);
				  }),
				  (t._stringRef = o),
				  t);
		}
		if (typeof e != "string") throw Error(F(284));
		if (!n._owner) throw Error(F(290, e));
	}
	return e;
}
function as(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			F(
				31,
				e === "[object Object]"
					? "object with keys {" + Object.keys(t).join(", ") + "}"
					: e
			)
		))
	);
}
function wp(e) {
	var t = e._init;
	return t(e._payload);
}
function Mg(e) {
	function t(y, g) {
		if (e) {
			var E = y.deletions;
			E === null ? ((y.deletions = [g]), (y.flags |= 16)) : E.push(g);
		}
	}
	function n(y, g) {
		if (!e) return null;
		for (; g !== null; ) t(y, g), (g = g.sibling);
		return null;
	}
	function r(y, g) {
		for (y = new Map(); g !== null; )
			g.key !== null ? y.set(g.key, g) : y.set(g.index, g),
				(g = g.sibling);
		return y;
	}
	function i(y, g) {
		return (y = kr(y, g)), (y.index = 0), (y.sibling = null), y;
	}
	function o(y, g, E) {
		return (
			(y.index = E),
			e
				? ((E = y.alternate),
				  E !== null
						? ((E = E.index), E < g ? ((y.flags |= 2), g) : E)
						: ((y.flags |= 2), g))
				: ((y.flags |= 1048576), g)
		);
	}
	function s(y) {
		return e && y.alternate === null && (y.flags |= 2), y;
	}
	function a(y, g, E, w) {
		return g === null || g.tag !== 6
			? ((g = bu(E, y.mode, w)), (g.return = y), g)
			: ((g = i(g, E)), (g.return = y), g);
	}
	function c(y, g, E, w) {
		var A = E.type;
		return A === Ai
			? p(y, g, E.props.children, w, E.key)
			: g !== null &&
			  (g.elementType === A ||
					(typeof A == "object" &&
						A !== null &&
						A.$$typeof === dr &&
						wp(A) === g.type))
			? ((w = i(g, E.props)), (w.ref = Oo(y, g, E)), (w.return = y), w)
			: ((w = Ts(E.type, E.key, E.props, null, y.mode, w)),
			  (w.ref = Oo(y, g, E)),
			  (w.return = y),
			  w);
	}
	function d(y, g, E, w) {
		return g === null ||
			g.tag !== 4 ||
			g.stateNode.containerInfo !== E.containerInfo ||
			g.stateNode.implementation !== E.implementation
			? ((g = ju(E, y.mode, w)), (g.return = y), g)
			: ((g = i(g, E.children || [])), (g.return = y), g);
	}
	function p(y, g, E, w, A) {
		return g === null || g.tag !== 7
			? ((g = si(E, y.mode, w, A)), (g.return = y), g)
			: ((g = i(g, E)), (g.return = y), g);
	}
	function v(y, g, E) {
		if ((typeof g == "string" && g !== "") || typeof g == "number")
			return (g = bu("" + g, y.mode, E)), (g.return = y), g;
		if (typeof g == "object" && g !== null) {
			switch (g.$$typeof) {
				case ql:
					return (
						(E = Ts(g.type, g.key, g.props, null, y.mode, E)),
						(E.ref = Oo(y, null, g)),
						(E.return = y),
						E
					);
				case Di:
					return (g = ju(g, y.mode, E)), (g.return = y), g;
				case dr:
					var w = g._init;
					return v(y, w(g._payload), E);
			}
			if (Uo(g) || To(g))
				return (g = si(g, y.mode, E, null)), (g.return = y), g;
			as(y, g);
		}
		return null;
	}
	function m(y, g, E, w) {
		var A = g !== null ? g.key : null;
		if ((typeof E == "string" && E !== "") || typeof E == "number")
			return A !== null ? null : a(y, g, "" + E, w);
		if (typeof E == "object" && E !== null) {
			switch (E.$$typeof) {
				case ql:
					return E.key === A ? c(y, g, E, w) : null;
				case Di:
					return E.key === A ? d(y, g, E, w) : null;
				case dr:
					return (A = E._init), m(y, g, A(E._payload), w);
			}
			if (Uo(E) || To(E)) return A !== null ? null : p(y, g, E, w, null);
			as(y, E);
		}
		return null;
	}
	function b(y, g, E, w, A) {
		if ((typeof w == "string" && w !== "") || typeof w == "number")
			return (y = y.get(E) || null), a(g, y, "" + w, A);
		if (typeof w == "object" && w !== null) {
			switch (w.$$typeof) {
				case ql:
					return (
						(y = y.get(w.key === null ? E : w.key) || null),
						c(g, y, w, A)
					);
				case Di:
					return (
						(y = y.get(w.key === null ? E : w.key) || null),
						d(g, y, w, A)
					);
				case dr:
					var D = w._init;
					return b(y, g, E, D(w._payload), A);
			}
			if (Uo(w) || To(w))
				return (y = y.get(E) || null), p(g, y, w, A, null);
			as(g, w);
		}
		return null;
	}
	function S(y, g, E, w) {
		for (
			var A = null, D = null, P = g, z = (g = 0), Y = null;
			P !== null && z < E.length;
			z++
		) {
			P.index > z ? ((Y = P), (P = null)) : (Y = P.sibling);
			var G = m(y, P, E[z], w);
			if (G === null) {
				P === null && (P = Y);
				break;
			}
			e && P && G.alternate === null && t(y, P),
				(g = o(G, g, z)),
				D === null ? (A = G) : (D.sibling = G),
				(D = G),
				(P = Y);
		}
		if (z === E.length) return n(y, P), We && Gr(y, z), A;
		if (P === null) {
			for (; z < E.length; z++)
				(P = v(y, E[z], w)),
					P !== null &&
						((g = o(P, g, z)),
						D === null ? (A = P) : (D.sibling = P),
						(D = P));
			return We && Gr(y, z), A;
		}
		for (P = r(y, P); z < E.length; z++)
			(Y = b(P, y, z, E[z], w)),
				Y !== null &&
					(e &&
						Y.alternate !== null &&
						P.delete(Y.key === null ? z : Y.key),
					(g = o(Y, g, z)),
					D === null ? (A = Y) : (D.sibling = Y),
					(D = Y));
		return (
			e &&
				P.forEach(function (fe) {
					return t(y, fe);
				}),
			We && Gr(y, z),
			A
		);
	}
	function N(y, g, E, w) {
		var A = To(E);
		if (typeof A != "function") throw Error(F(150));
		if (((E = A.call(E)), E == null)) throw Error(F(151));
		for (
			var D = (A = null), P = g, z = (g = 0), Y = null, G = E.next();
			P !== null && !G.done;
			z++, G = E.next()
		) {
			P.index > z ? ((Y = P), (P = null)) : (Y = P.sibling);
			var fe = m(y, P, G.value, w);
			if (fe === null) {
				P === null && (P = Y);
				break;
			}
			e && P && fe.alternate === null && t(y, P),
				(g = o(fe, g, z)),
				D === null ? (A = fe) : (D.sibling = fe),
				(D = fe),
				(P = Y);
		}
		if (G.done) return n(y, P), We && Gr(y, z), A;
		if (P === null) {
			for (; !G.done; z++, G = E.next())
				(G = v(y, G.value, w)),
					G !== null &&
						((g = o(G, g, z)),
						D === null ? (A = G) : (D.sibling = G),
						(D = G));
			return We && Gr(y, z), A;
		}
		for (P = r(y, P); !G.done; z++, G = E.next())
			(G = b(P, y, z, G.value, w)),
				G !== null &&
					(e &&
						G.alternate !== null &&
						P.delete(G.key === null ? z : G.key),
					(g = o(G, g, z)),
					D === null ? (A = G) : (D.sibling = G),
					(D = G));
		return (
			e &&
				P.forEach(function (Be) {
					return t(y, Be);
				}),
			We && Gr(y, z),
			A
		);
	}
	function R(y, g, E, w) {
		if (
			(typeof E == "object" &&
				E !== null &&
				E.type === Ai &&
				E.key === null &&
				(E = E.props.children),
			typeof E == "object" && E !== null)
		) {
			switch (E.$$typeof) {
				case ql:
					e: {
						for (var A = E.key, D = g; D !== null; ) {
							if (D.key === A) {
								if (((A = E.type), A === Ai)) {
									if (D.tag === 7) {
										n(y, D.sibling),
											(g = i(D, E.props.children)),
											(g.return = y),
											(y = g);
										break e;
									}
								} else if (
									D.elementType === A ||
									(typeof A == "object" &&
										A !== null &&
										A.$$typeof === dr &&
										wp(A) === D.type)
								) {
									n(y, D.sibling),
										(g = i(D, E.props)),
										(g.ref = Oo(y, D, E)),
										(g.return = y),
										(y = g);
									break e;
								}
								n(y, D);
								break;
							} else t(y, D);
							D = D.sibling;
						}
						E.type === Ai
							? ((g = si(E.props.children, y.mode, w, E.key)),
							  (g.return = y),
							  (y = g))
							: ((w = Ts(
									E.type,
									E.key,
									E.props,
									null,
									y.mode,
									w
							  )),
							  (w.ref = Oo(y, g, E)),
							  (w.return = y),
							  (y = w));
					}
					return s(y);
				case Di:
					e: {
						for (D = E.key; g !== null; ) {
							if (g.key === D)
								if (
									g.tag === 4 &&
									g.stateNode.containerInfo ===
										E.containerInfo &&
									g.stateNode.implementation ===
										E.implementation
								) {
									n(y, g.sibling),
										(g = i(g, E.children || [])),
										(g.return = y),
										(y = g);
									break e;
								} else {
									n(y, g);
									break;
								}
							else t(y, g);
							g = g.sibling;
						}
						(g = ju(E, y.mode, w)), (g.return = y), (y = g);
					}
					return s(y);
				case dr:
					return (D = E._init), R(y, g, D(E._payload), w);
			}
			if (Uo(E)) return S(y, g, E, w);
			if (To(E)) return N(y, g, E, w);
			as(y, E);
		}
		return (typeof E == "string" && E !== "") || typeof E == "number"
			? ((E = "" + E),
			  g !== null && g.tag === 6
					? (n(y, g.sibling), (g = i(g, E)), (g.return = y), (y = g))
					: (n(y, g),
					  (g = bu(E, y.mode, w)),
					  (g.return = y),
					  (y = g)),
			  s(y))
			: n(y, g);
	}
	return R;
}
var oo = Mg(!0),
	Ig = Mg(!1),
	Tl = {},
	An = Lr(Tl),
	pl = Lr(Tl),
	ml = Lr(Tl);
function ti(e) {
	if (e === Tl) throw Error(F(174));
	return e;
}
function Ed(e, t) {
	switch ((Fe(ml, t), Fe(pl, e), Fe(An, Tl), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : Xu(null, "");
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = Xu(t, e));
	}
	Ue(An), Fe(An, t);
}
function lo() {
	Ue(An), Ue(pl), Ue(ml);
}
function $g(e) {
	ti(ml.current);
	var t = ti(An.current),
		n = Xu(t, e.type);
	t !== n && (Fe(pl, e), Fe(An, n));
}
function Sd(e) {
	pl.current === e && (Ue(An), Ue(pl));
}
var Ve = Lr(0);
function Ws(e) {
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
var Eu = [];
function Cd() {
	for (var e = 0; e < Eu.length; e++)
		Eu[e]._workInProgressVersionPrimary = null;
	Eu.length = 0;
}
var xs = nr.ReactCurrentDispatcher,
	Su = nr.ReactCurrentBatchConfig,
	ci = 0,
	Ke = null,
	ct = null,
	ht = null,
	Hs = !1,
	qo = !1,
	gl = 0,
	O1 = 0;
function Et() {
	throw Error(F(321));
}
function kd(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!kn(e[n], t[n])) return !1;
	return !0;
}
function Td(e, t, n, r, i, o) {
	if (
		((ci = o),
		(Ke = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(xs.current = e === null || e.memoizedState === null ? A1 : M1),
		(e = n(r, i)),
		qo)
	) {
		o = 0;
		do {
			if (((qo = !1), (gl = 0), 25 <= o)) throw Error(F(301));
			(o += 1),
				(ht = ct = null),
				(t.updateQueue = null),
				(xs.current = I1),
				(e = n(r, i));
		} while (qo);
	}
	if (
		((xs.current = Vs),
		(t = ct !== null && ct.next !== null),
		(ci = 0),
		(ht = ct = Ke = null),
		(Hs = !1),
		t)
	)
		throw Error(F(300));
	return e;
}
function Nd() {
	var e = gl !== 0;
	return (gl = 0), e;
}
function Rn() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return ht === null ? (Ke.memoizedState = ht = e) : (ht = ht.next = e), ht;
}
function dn() {
	if (ct === null) {
		var e = Ke.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = ct.next;
	var t = ht === null ? Ke.memoizedState : ht.next;
	if (t !== null) (ht = t), (ct = e);
	else {
		if (e === null) throw Error(F(310));
		(ct = e),
			(e = {
				memoizedState: ct.memoizedState,
				baseState: ct.baseState,
				baseQueue: ct.baseQueue,
				queue: ct.queue,
				next: null,
			}),
			ht === null ? (Ke.memoizedState = ht = e) : (ht = ht.next = e);
	}
	return ht;
}
function vl(e, t) {
	return typeof t == "function" ? t(e) : t;
}
function Cu(e) {
	var t = dn(),
		n = t.queue;
	if (n === null) throw Error(F(311));
	n.lastRenderedReducer = e;
	var r = ct,
		i = r.baseQueue,
		o = n.pending;
	if (o !== null) {
		if (i !== null) {
			var s = i.next;
			(i.next = o.next), (o.next = s);
		}
		(r.baseQueue = i = o), (n.pending = null);
	}
	if (i !== null) {
		(o = i.next), (r = r.baseState);
		var a = (s = null),
			c = null,
			d = o;
		do {
			var p = d.lane;
			if ((ci & p) === p)
				c !== null &&
					(c = c.next =
						{
							lane: 0,
							action: d.action,
							hasEagerState: d.hasEagerState,
							eagerState: d.eagerState,
							next: null,
						}),
					(r = d.hasEagerState ? d.eagerState : e(r, d.action));
			else {
				var v = {
					lane: p,
					action: d.action,
					hasEagerState: d.hasEagerState,
					eagerState: d.eagerState,
					next: null,
				};
				c === null ? ((a = c = v), (s = r)) : (c = c.next = v),
					(Ke.lanes |= p),
					(di |= p);
			}
			d = d.next;
		} while (d !== null && d !== o);
		c === null ? (s = r) : (c.next = a),
			kn(r, t.memoizedState) || (Mt = !0),
			(t.memoizedState = r),
			(t.baseState = s),
			(t.baseQueue = c),
			(n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		i = e;
		do (o = i.lane), (Ke.lanes |= o), (di |= o), (i = i.next);
		while (i !== e);
	} else i === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function ku(e) {
	var t = dn(),
		n = t.queue;
	if (n === null) throw Error(F(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		i = n.pending,
		o = t.memoizedState;
	if (i !== null) {
		n.pending = null;
		var s = (i = i.next);
		do (o = e(o, s.action)), (s = s.next);
		while (s !== i);
		kn(o, t.memoizedState) || (Mt = !0),
			(t.memoizedState = o),
			t.baseQueue === null && (t.baseState = o),
			(n.lastRenderedState = o);
	}
	return [o, r];
}
function Fg() {}
function zg(e, t) {
	var n = Ke,
		r = dn(),
		i = t(),
		o = !kn(r.memoizedState, i);
	if (
		(o && ((r.memoizedState = i), (Mt = !0)),
		(r = r.queue),
		bd(Wg.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || o || (ht !== null && ht.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			yl(9, Bg.bind(null, n, r, i, t), void 0, null),
			pt === null)
		)
			throw Error(F(349));
		ci & 30 || Ug(n, t, i);
	}
	return i;
}
function Ug(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = Ke.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (Ke.updateQueue = t),
			  (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Bg(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), Hg(t) && Vg(e);
}
function Wg(e, t, n) {
	return n(function () {
		Hg(t) && Vg(e);
	});
}
function Hg(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !kn(e, n);
	} catch {
		return !0;
	}
}
function Vg(e) {
	var t = Zn(e, 1);
	t !== null && Cn(t, e, 1, -1);
}
function _p(e) {
	var t = Rn();
	return (
		typeof e == "function" && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: vl,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = D1.bind(null, Ke, e)),
		[t.memoizedState, e]
	);
}
function yl(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = Ke.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (Ke.updateQueue = t),
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
function Kg() {
	return dn().memoizedState;
}
function Es(e, t, n, r) {
	var i = Rn();
	(Ke.flags |= e),
		(i.memoizedState = yl(1 | t, n, void 0, r === void 0 ? null : r));
}
function da(e, t, n, r) {
	var i = dn();
	r = r === void 0 ? null : r;
	var o = void 0;
	if (ct !== null) {
		var s = ct.memoizedState;
		if (((o = s.destroy), r !== null && kd(r, s.deps))) {
			i.memoizedState = yl(t, n, o, r);
			return;
		}
	}
	(Ke.flags |= e), (i.memoizedState = yl(1 | t, n, o, r));
}
function xp(e, t) {
	return Es(8390656, 8, e, t);
}
function bd(e, t) {
	return da(2048, 8, e, t);
}
function Qg(e, t) {
	return da(4, 2, e, t);
}
function Yg(e, t) {
	return da(4, 4, e, t);
}
function Xg(e, t) {
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
function Gg(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), da(4, 4, Xg.bind(null, t, e), n)
	);
}
function jd() {}
function qg(e, t) {
	var n = dn();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && kd(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e);
}
function Jg(e, t) {
	var n = dn();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && kd(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function Zg(e, t, n) {
	return ci & 21
		? (kn(n, t) ||
				((n = ng()), (Ke.lanes |= n), (di |= n), (e.baseState = !0)),
		  t)
		: (e.baseState && ((e.baseState = !1), (Mt = !0)),
		  (e.memoizedState = n));
}
function R1(e, t) {
	var n = Te;
	(Te = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = Su.transition;
	Su.transition = {};
	try {
		e(!1), t();
	} finally {
		(Te = n), (Su.transition = r);
	}
}
function ev() {
	return dn().memoizedState;
}
function P1(e, t, n) {
	var r = Cr(e);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		tv(e))
	)
		nv(t, n);
	else if (((n = Rg(e, t, n, r)), n !== null)) {
		var i = Lt();
		Cn(n, e, r, i), rv(n, t, r);
	}
}
function D1(e, t, n) {
	var r = Cr(e),
		i = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		};
	if (tv(e)) nv(t, i);
	else {
		var o = e.alternate;
		if (
			e.lanes === 0 &&
			(o === null || o.lanes === 0) &&
			((o = t.lastRenderedReducer), o !== null)
		)
			try {
				var s = t.lastRenderedState,
					a = o(s, n);
				if (((i.hasEagerState = !0), (i.eagerState = a), kn(a, s))) {
					var c = t.interleaved;
					c === null
						? ((i.next = i), _d(t))
						: ((i.next = c.next), (c.next = i)),
						(t.interleaved = i);
					return;
				}
			} catch {
			} finally {
			}
		(n = Rg(e, t, i, r)),
			n !== null && ((i = Lt()), Cn(n, e, r, i), rv(n, t, r));
	}
}
function tv(e) {
	var t = e.alternate;
	return e === Ke || (t !== null && t === Ke);
}
function nv(e, t) {
	qo = Hs = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t);
}
function rv(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), ld(e, n);
	}
}
var Vs = {
		readContext: cn,
		useCallback: Et,
		useContext: Et,
		useEffect: Et,
		useImperativeHandle: Et,
		useInsertionEffect: Et,
		useLayoutEffect: Et,
		useMemo: Et,
		useReducer: Et,
		useRef: Et,
		useState: Et,
		useDebugValue: Et,
		useDeferredValue: Et,
		useTransition: Et,
		useMutableSource: Et,
		useSyncExternalStore: Et,
		useId: Et,
		unstable_isNewReconciler: !1,
	},
	A1 = {
		readContext: cn,
		useCallback: function (e, t) {
			return (Rn().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: cn,
		useEffect: xp,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				Es(4194308, 4, Xg.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function (e, t) {
			return Es(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return Es(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var n = Rn();
			return (
				(t = t === void 0 ? null : t),
				(e = e()),
				(n.memoizedState = [e, t]),
				e
			);
		},
		useReducer: function (e, t, n) {
			var r = Rn();
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
				(e = e.dispatch = P1.bind(null, Ke, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = Rn();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: _p,
		useDebugValue: jd,
		useDeferredValue: function (e) {
			return (Rn().memoizedState = e);
		},
		useTransition: function () {
			var e = _p(!1),
				t = e[0];
			return (e = R1.bind(null, e[1])), (Rn().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = Ke,
				i = Rn();
			if (We) {
				if (n === void 0) throw Error(F(407));
				n = n();
			} else {
				if (((n = t()), pt === null)) throw Error(F(349));
				ci & 30 || Ug(r, t, n);
			}
			i.memoizedState = n;
			var o = { value: n, getSnapshot: t };
			return (
				(i.queue = o),
				xp(Wg.bind(null, r, o, e), [e]),
				(r.flags |= 2048),
				yl(9, Bg.bind(null, r, o, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = Rn(),
				t = pt.identifierPrefix;
			if (We) {
				var n = Kn,
					r = Vn;
				(n = (r & ~(1 << (32 - Sn(r) - 1))).toString(32) + n),
					(t = ":" + t + "R" + n),
					(n = gl++),
					0 < n && (t += "H" + n.toString(32)),
					(t += ":");
			} else (n = O1++), (t = ":" + t + "r" + n.toString(32) + ":");
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	M1 = {
		readContext: cn,
		useCallback: qg,
		useContext: cn,
		useEffect: bd,
		useImperativeHandle: Gg,
		useInsertionEffect: Qg,
		useLayoutEffect: Yg,
		useMemo: Jg,
		useReducer: Cu,
		useRef: Kg,
		useState: function () {
			return Cu(vl);
		},
		useDebugValue: jd,
		useDeferredValue: function (e) {
			var t = dn();
			return Zg(t, ct.memoizedState, e);
		},
		useTransition: function () {
			var e = Cu(vl)[0],
				t = dn().memoizedState;
			return [e, t];
		},
		useMutableSource: Fg,
		useSyncExternalStore: zg,
		useId: ev,
		unstable_isNewReconciler: !1,
	},
	I1 = {
		readContext: cn,
		useCallback: qg,
		useContext: cn,
		useEffect: bd,
		useImperativeHandle: Gg,
		useInsertionEffect: Qg,
		useLayoutEffect: Yg,
		useMemo: Jg,
		useReducer: ku,
		useRef: Kg,
		useState: function () {
			return ku(vl);
		},
		useDebugValue: jd,
		useDeferredValue: function (e) {
			var t = dn();
			return ct === null
				? (t.memoizedState = e)
				: Zg(t, ct.memoizedState, e);
		},
		useTransition: function () {
			var e = ku(vl)[0],
				t = dn().memoizedState;
			return [e, t];
		},
		useMutableSource: Fg,
		useSyncExternalStore: zg,
		useId: ev,
		unstable_isNewReconciler: !1,
	};
function so(e, t) {
	try {
		var n = "",
			r = t;
		do (n += d_(r)), (r = r.return);
		while (r);
		var i = n;
	} catch (o) {
		i =
			`
Error generating stack: ` +
			o.message +
			`
` +
			o.stack;
	}
	return { value: e, source: t, stack: i, digest: null };
}
function Tu(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function yc(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var $1 = typeof WeakMap == "function" ? WeakMap : Map;
function iv(e, t, n) {
	(n = Qn(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			Qs || ((Qs = !0), (bc = r)), yc(e, t);
		}),
		n
	);
}
function ov(e, t, n) {
	(n = Qn(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == "function") {
		var i = t.value;
		(n.payload = function () {
			return r(i);
		}),
			(n.callback = function () {
				yc(e, t);
			});
	}
	var o = e.stateNode;
	return (
		o !== null &&
			typeof o.componentDidCatch == "function" &&
			(n.callback = function () {
				yc(e, t),
					typeof r != "function" &&
						(Sr === null ? (Sr = new Set([this])) : Sr.add(this));
				var s = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: s !== null ? s : "",
				});
			}),
		n
	);
}
function Ep(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new $1();
		var i = new Set();
		r.set(t, i);
	} else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
	i.has(n) || (i.add(n), (e = J1.bind(null, e, t, n)), t.then(e, e));
}
function Sp(e) {
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
function Cp(e, t, n, r, i) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = i), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
				  (n.flags |= 131072),
				  (n.flags &= -52805),
				  n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((t = Qn(-1, 1)), (t.tag = 2), Er(n, t, 1))),
				  (n.lanes |= 1)),
		  e);
}
var F1 = nr.ReactCurrentOwner,
	Mt = !1;
function jt(e, t, n, r) {
	t.child = e === null ? Ig(t, null, n, r) : oo(t, e.child, n, r);
}
function kp(e, t, n, r, i) {
	n = n.render;
	var o = t.ref;
	return (
		qi(t, i),
		(r = Td(e, t, n, r, o, i)),
		(n = Nd()),
		e !== null && !Mt
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~i),
			  er(e, t, i))
			: (We && n && pd(t), (t.flags |= 1), jt(e, t, r, i), t.child)
	);
}
function Tp(e, t, n, r, i) {
	if (e === null) {
		var o = n.type;
		return typeof o == "function" &&
			!Id(o) &&
			o.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = o), lv(e, t, o, r, i))
			: ((e = Ts(n.type, null, r, t, t.mode, i)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e));
	}
	if (((o = e.child), !(e.lanes & i))) {
		var s = o.memoizedProps;
		if (
			((n = n.compare),
			(n = n !== null ? n : cl),
			n(s, r) && e.ref === t.ref)
		)
			return er(e, t, i);
	}
	return (
		(t.flags |= 1),
		(e = kr(o, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function lv(e, t, n, r, i) {
	if (e !== null) {
		var o = e.memoizedProps;
		if (cl(o, r) && e.ref === t.ref)
			if (((Mt = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
				e.flags & 131072 && (Mt = !0);
			else return (t.lanes = e.lanes), er(e, t, i);
	}
	return wc(e, t, n, r, i);
}
function sv(e, t, n) {
	var r = t.pendingProps,
		i = r.children,
		o = e !== null ? e.memoizedState : null;
	if (r.mode === "hidden")
		if (!(t.mode & 1))
			(t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null,
			}),
				Fe(Vi, Ht),
				(Ht |= n);
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
					Fe(Vi, Ht),
					(Ht |= e),
					null
				);
			(t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null,
			}),
				(r = o !== null ? o.baseLanes : n),
				Fe(Vi, Ht),
				(Ht |= r);
		}
	else
		o !== null
			? ((r = o.baseLanes | n), (t.memoizedState = null))
			: (r = n),
			Fe(Vi, Ht),
			(Ht |= r);
	return jt(e, t, i, n), t.child;
}
function av(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function wc(e, t, n, r, i) {
	var o = $t(n) ? ai : kt.current;
	return (
		(o = ro(t, o)),
		qi(t, i),
		(n = Td(e, t, n, r, o, i)),
		(r = Nd()),
		e !== null && !Mt
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~i),
			  er(e, t, i))
			: (We && r && pd(t), (t.flags |= 1), jt(e, t, n, i), t.child)
	);
}
function Np(e, t, n, r, i) {
	if ($t(n)) {
		var o = !0;
		Is(t);
	} else o = !1;
	if ((qi(t, i), t.stateNode === null))
		Ss(e, t), Ag(t, n, r), vc(t, n, r, i), (r = !0);
	else if (e === null) {
		var s = t.stateNode,
			a = t.memoizedProps;
		s.props = a;
		var c = s.context,
			d = n.contextType;
		typeof d == "object" && d !== null
			? (d = cn(d))
			: ((d = $t(n) ? ai : kt.current), (d = ro(t, d)));
		var p = n.getDerivedStateFromProps,
			v =
				typeof p == "function" ||
				typeof s.getSnapshotBeforeUpdate == "function";
		v ||
			(typeof s.UNSAFE_componentWillReceiveProps != "function" &&
				typeof s.componentWillReceiveProps != "function") ||
			((a !== r || c !== d) && yp(t, s, r, d)),
			(fr = !1);
		var m = t.memoizedState;
		(s.state = m),
			Bs(t, r, s, i),
			(c = t.memoizedState),
			a !== r || m !== c || It.current || fr
				? (typeof p == "function" &&
						(gc(t, n, p, r), (c = t.memoizedState)),
				  (a = fr || vp(t, n, a, r, m, c, d))
						? (v ||
								(typeof s.UNSAFE_componentWillMount !=
									"function" &&
									typeof s.componentWillMount !=
										"function") ||
								(typeof s.componentWillMount == "function" &&
									s.componentWillMount(),
								typeof s.UNSAFE_componentWillMount ==
									"function" &&
									s.UNSAFE_componentWillMount()),
						  typeof s.componentDidMount == "function" &&
								(t.flags |= 4194308))
						: (typeof s.componentDidMount == "function" &&
								(t.flags |= 4194308),
						  (t.memoizedProps = r),
						  (t.memoizedState = c)),
				  (s.props = r),
				  (s.state = c),
				  (s.context = d),
				  (r = a))
				: (typeof s.componentDidMount == "function" &&
						(t.flags |= 4194308),
				  (r = !1));
	} else {
		(s = t.stateNode),
			Pg(e, t),
			(a = t.memoizedProps),
			(d = t.type === t.elementType ? a : vn(t.type, a)),
			(s.props = d),
			(v = t.pendingProps),
			(m = s.context),
			(c = n.contextType),
			typeof c == "object" && c !== null
				? (c = cn(c))
				: ((c = $t(n) ? ai : kt.current), (c = ro(t, c)));
		var b = n.getDerivedStateFromProps;
		(p =
			typeof b == "function" ||
			typeof s.getSnapshotBeforeUpdate == "function") ||
			(typeof s.UNSAFE_componentWillReceiveProps != "function" &&
				typeof s.componentWillReceiveProps != "function") ||
			((a !== v || m !== c) && yp(t, s, r, c)),
			(fr = !1),
			(m = t.memoizedState),
			(s.state = m),
			Bs(t, r, s, i);
		var S = t.memoizedState;
		a !== v || m !== S || It.current || fr
			? (typeof b == "function" &&
					(gc(t, n, b, r), (S = t.memoizedState)),
			  (d = fr || vp(t, n, d, r, m, S, c) || !1)
					? (p ||
							(typeof s.UNSAFE_componentWillUpdate !=
								"function" &&
								typeof s.componentWillUpdate != "function") ||
							(typeof s.componentWillUpdate == "function" &&
								s.componentWillUpdate(r, S, c),
							typeof s.UNSAFE_componentWillUpdate == "function" &&
								s.UNSAFE_componentWillUpdate(r, S, c)),
					  typeof s.componentDidUpdate == "function" &&
							(t.flags |= 4),
					  typeof s.getSnapshotBeforeUpdate == "function" &&
							(t.flags |= 1024))
					: (typeof s.componentDidUpdate != "function" ||
							(a === e.memoizedProps && m === e.memoizedState) ||
							(t.flags |= 4),
					  typeof s.getSnapshotBeforeUpdate != "function" ||
							(a === e.memoizedProps && m === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = S)),
			  (s.props = r),
			  (s.state = S),
			  (s.context = c),
			  (r = d))
			: (typeof s.componentDidUpdate != "function" ||
					(a === e.memoizedProps && m === e.memoizedState) ||
					(t.flags |= 4),
			  typeof s.getSnapshotBeforeUpdate != "function" ||
					(a === e.memoizedProps && m === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1));
	}
	return _c(e, t, n, r, o, i);
}
function _c(e, t, n, r, i, o) {
	av(e, t);
	var s = (t.flags & 128) !== 0;
	if (!r && !s) return i && fp(t, n, !1), er(e, t, o);
	(r = t.stateNode), (F1.current = t);
	var a =
		s && typeof n.getDerivedStateFromError != "function"
			? null
			: r.render();
	return (
		(t.flags |= 1),
		e !== null && s
			? ((t.child = oo(t, e.child, null, o)),
			  (t.child = oo(t, null, a, o)))
			: jt(e, t, a, o),
		(t.memoizedState = r.state),
		i && fp(t, n, !0),
		t.child
	);
}
function uv(e) {
	var t = e.stateNode;
	t.pendingContext
		? dp(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && dp(e, t.context, !1),
		Ed(e, t.containerInfo);
}
function bp(e, t, n, r, i) {
	return io(), gd(i), (t.flags |= 256), jt(e, t, n, r), t.child;
}
var xc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ec(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function cv(e, t, n) {
	var r = t.pendingProps,
		i = Ve.current,
		o = !1,
		s = (t.flags & 128) !== 0,
		a;
	if (
		((a = s) ||
			(a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
		a
			? ((o = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (i |= 1),
		Fe(Ve, i & 1),
		e === null)
	)
		return (
			pc(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === "$!"
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
				  null)
				: ((s = r.children),
				  (e = r.fallback),
				  o
						? ((r = t.mode),
						  (o = t.child),
						  (s = { mode: "hidden", children: s }),
						  !(r & 1) && o !== null
								? ((o.childLanes = 0), (o.pendingProps = s))
								: (o = pa(s, r, 0, null)),
						  (e = si(e, r, n, null)),
						  (o.return = t),
						  (e.return = t),
						  (o.sibling = e),
						  (t.child = o),
						  (t.child.memoizedState = Ec(n)),
						  (t.memoizedState = xc),
						  e)
						: Ld(t, s))
		);
	if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
		return z1(e, t, s, r, a, i, n);
	if (o) {
		(o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
		var c = { mode: "hidden", children: r.children };
		return (
			!(s & 1) && t.child !== i
				? ((r = t.child),
				  (r.childLanes = 0),
				  (r.pendingProps = c),
				  (t.deletions = null))
				: ((r = kr(i, c)),
				  (r.subtreeFlags = i.subtreeFlags & 14680064)),
			a !== null
				? (o = kr(a, o))
				: ((o = si(o, s, n, null)), (o.flags |= 2)),
			(o.return = t),
			(r.return = t),
			(r.sibling = o),
			(t.child = r),
			(r = o),
			(o = t.child),
			(s = e.child.memoizedState),
			(s =
				s === null
					? Ec(n)
					: {
							baseLanes: s.baseLanes | n,
							cachePool: null,
							transitions: s.transitions,
					  }),
			(o.memoizedState = s),
			(o.childLanes = e.childLanes & ~n),
			(t.memoizedState = xc),
			r
		);
	}
	return (
		(o = e.child),
		(e = o.sibling),
		(r = kr(o, { mode: "visible", children: r.children })),
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
function Ld(e, t) {
	return (
		(t = pa({ mode: "visible", children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function us(e, t, n, r) {
	return (
		r !== null && gd(r),
		oo(t, e.child, null, n),
		(e = Ld(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function z1(e, t, n, r, i, o, s) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = Tu(Error(F(422)))), us(e, t, s, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((o = r.fallback),
			  (i = t.mode),
			  (r = pa({ mode: "visible", children: r.children }, i, 0, null)),
			  (o = si(o, i, s, null)),
			  (o.flags |= 2),
			  (r.return = t),
			  (o.return = t),
			  (r.sibling = o),
			  (t.child = r),
			  t.mode & 1 && oo(t, e.child, null, s),
			  (t.child.memoizedState = Ec(s)),
			  (t.memoizedState = xc),
			  o);
	if (!(t.mode & 1)) return us(e, t, s, null);
	if (i.data === "$!") {
		if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
		return (
			(r = a), (o = Error(F(419))), (r = Tu(o, r, void 0)), us(e, t, s, r)
		);
	}
	if (((a = (s & e.childLanes) !== 0), Mt || a)) {
		if (((r = pt), r !== null)) {
			switch (s & -s) {
				case 4:
					i = 2;
					break;
				case 16:
					i = 8;
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
					i = 32;
					break;
				case 536870912:
					i = 268435456;
					break;
				default:
					i = 0;
			}
			(i = i & (r.suspendedLanes | s) ? 0 : i),
				i !== 0 &&
					i !== o.retryLane &&
					((o.retryLane = i), Zn(e, i), Cn(r, e, i, -1));
		}
		return Md(), (r = Tu(Error(F(421)))), us(e, t, s, r);
	}
	return i.data === "$?"
		? ((t.flags |= 128),
		  (t.child = e.child),
		  (t = Z1.bind(null, e)),
		  (i._reactRetry = t),
		  null)
		: ((e = o.treeContext),
		  (Vt = xr(i.nextSibling)),
		  (Kt = t),
		  (We = !0),
		  (_n = null),
		  e !== null &&
				((on[ln++] = Vn),
				(on[ln++] = Kn),
				(on[ln++] = ui),
				(Vn = e.id),
				(Kn = e.overflow),
				(ui = t)),
		  (t = Ld(t, r.children)),
		  (t.flags |= 4096),
		  t);
}
function jp(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), mc(e.return, t, n);
}
function Nu(e, t, n, r, i) {
	var o = e.memoizedState;
	o === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: i,
		  })
		: ((o.isBackwards = t),
		  (o.rendering = null),
		  (o.renderingStartTime = 0),
		  (o.last = r),
		  (o.tail = n),
		  (o.tailMode = i));
}
function dv(e, t, n) {
	var r = t.pendingProps,
		i = r.revealOrder,
		o = r.tail;
	if ((jt(e, t, r.children, n), (r = Ve.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && jp(e, n, t);
				else if (e.tag === 19) jp(e, n, t);
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
	if ((Fe(Ve, r), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (i) {
			case "forwards":
				for (n = t.child, i = null; n !== null; )
					(e = n.alternate),
						e !== null && Ws(e) === null && (i = n),
						(n = n.sibling);
				(n = i),
					n === null
						? ((i = t.child), (t.child = null))
						: ((i = n.sibling), (n.sibling = null)),
					Nu(t, !1, i, n, o);
				break;
			case "backwards":
				for (n = null, i = t.child, t.child = null; i !== null; ) {
					if (((e = i.alternate), e !== null && Ws(e) === null)) {
						t.child = i;
						break;
					}
					(e = i.sibling), (i.sibling = n), (n = i), (i = e);
				}
				Nu(t, !0, n, null, o);
				break;
			case "together":
				Nu(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function Ss(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function er(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(di |= t.lanes),
		!(n & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(F(153));
	if (t.child !== null) {
		for (
			e = t.child, n = kr(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling),
				(n = n.sibling = kr(e, e.pendingProps)),
				(n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function U1(e, t, n) {
	switch (t.tag) {
		case 3:
			uv(t), io();
			break;
		case 5:
			$g(t);
			break;
		case 1:
			$t(t.type) && Is(t);
			break;
		case 4:
			Ed(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				i = t.memoizedProps.value;
			Fe(zs, r._currentValue), (r._currentValue = i);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (Fe(Ve, Ve.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? cv(e, t, n)
					: (Fe(Ve, Ve.current & 1),
					  (e = er(e, t, n)),
					  e !== null ? e.sibling : null);
			Fe(Ve, Ve.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return dv(e, t, n);
				t.flags |= 128;
			}
			if (
				((i = t.memoizedState),
				i !== null &&
					((i.rendering = null),
					(i.tail = null),
					(i.lastEffect = null)),
				Fe(Ve, Ve.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), sv(e, t, n);
	}
	return er(e, t, n);
}
var fv, Sc, hv, pv;
fv = function (e, t) {
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
Sc = function () {};
hv = function (e, t, n, r) {
	var i = e.memoizedProps;
	if (i !== r) {
		(e = t.stateNode), ti(An.current);
		var o = null;
		switch (n) {
			case "input":
				(i = Vu(e, i)), (r = Vu(e, r)), (o = []);
				break;
			case "select":
				(i = Qe({}, i, { value: void 0 })),
					(r = Qe({}, r, { value: void 0 })),
					(o = []);
				break;
			case "textarea":
				(i = Yu(e, i)), (r = Yu(e, r)), (o = []);
				break;
			default:
				typeof i.onClick != "function" &&
					typeof r.onClick == "function" &&
					(e.onclick = As);
		}
		Gu(n, r);
		var s;
		n = null;
		for (d in i)
			if (!r.hasOwnProperty(d) && i.hasOwnProperty(d) && i[d] != null)
				if (d === "style") {
					var a = i[d];
					for (s in a)
						a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
				} else
					d !== "dangerouslySetInnerHTML" &&
						d !== "children" &&
						d !== "suppressContentEditableWarning" &&
						d !== "suppressHydrationWarning" &&
						d !== "autoFocus" &&
						(rl.hasOwnProperty(d)
							? o || (o = [])
							: (o = o || []).push(d, null));
		for (d in r) {
			var c = r[d];
			if (
				((a = i != null ? i[d] : void 0),
				r.hasOwnProperty(d) && c !== a && (c != null || a != null))
			)
				if (d === "style")
					if (a) {
						for (s in a)
							!a.hasOwnProperty(s) ||
								(c && c.hasOwnProperty(s)) ||
								(n || (n = {}), (n[s] = ""));
						for (s in c)
							c.hasOwnProperty(s) &&
								a[s] !== c[s] &&
								(n || (n = {}), (n[s] = c[s]));
					} else n || (o || (o = []), o.push(d, n)), (n = c);
				else
					d === "dangerouslySetInnerHTML"
						? ((c = c ? c.__html : void 0),
						  (a = a ? a.__html : void 0),
						  c != null && a !== c && (o = o || []).push(d, c))
						: d === "children"
						? (typeof c != "string" && typeof c != "number") ||
						  (o = o || []).push(d, "" + c)
						: d !== "suppressContentEditableWarning" &&
						  d !== "suppressHydrationWarning" &&
						  (rl.hasOwnProperty(d)
								? (c != null &&
										d === "onScroll" &&
										ze("scroll", e),
								  o || a === c || (o = []))
								: (o = o || []).push(d, c));
		}
		n && (o = o || []).push("style", n);
		var d = o;
		(t.updateQueue = d) && (t.flags |= 4);
	}
};
pv = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function Ro(e, t) {
	if (!We)
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
function St(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags & 14680064),
				(r |= i.flags & 14680064),
				(i.return = e),
				(i = i.sibling);
	else
		for (i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags),
				(r |= i.flags),
				(i.return = e),
				(i = i.sibling);
	return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function B1(e, t, n) {
	var r = t.pendingProps;
	switch ((md(t), t.tag)) {
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
			return St(t), null;
		case 1:
			return $t(t.type) && Ms(), St(t), null;
		case 3:
			return (
				(r = t.stateNode),
				lo(),
				Ue(It),
				Ue(kt),
				Cd(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(ss(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024),
						  _n !== null && (Oc(_n), (_n = null)))),
				Sc(e, t),
				St(t),
				null
			);
		case 5:
			Sd(t);
			var i = ti(ml.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				hv(e, t, n, r, i),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(F(166));
					return St(t), null;
				}
				if (((e = ti(An.current)), ss(t))) {
					(r = t.stateNode), (n = t.type);
					var o = t.memoizedProps;
					switch (
						((r[Pn] = t), (r[hl] = o), (e = (t.mode & 1) !== 0), n)
					) {
						case "dialog":
							ze("cancel", r), ze("close", r);
							break;
						case "iframe":
						case "object":
						case "embed":
							ze("load", r);
							break;
						case "video":
						case "audio":
							for (i = 0; i < Wo.length; i++) ze(Wo[i], r);
							break;
						case "source":
							ze("error", r);
							break;
						case "img":
						case "image":
						case "link":
							ze("error", r), ze("load", r);
							break;
						case "details":
							ze("toggle", r);
							break;
						case "input":
							$h(r, o), ze("invalid", r);
							break;
						case "select":
							(r._wrapperState = { wasMultiple: !!o.multiple }),
								ze("invalid", r);
							break;
						case "textarea":
							zh(r, o), ze("invalid", r);
					}
					Gu(n, o), (i = null);
					for (var s in o)
						if (o.hasOwnProperty(s)) {
							var a = o[s];
							s === "children"
								? typeof a == "string"
									? r.textContent !== a &&
									  (o.suppressHydrationWarning !== !0 &&
											ls(r.textContent, a, e),
									  (i = ["children", a]))
									: typeof a == "number" &&
									  r.textContent !== "" + a &&
									  (o.suppressHydrationWarning !== !0 &&
											ls(r.textContent, a, e),
									  (i = ["children", "" + a]))
								: rl.hasOwnProperty(s) &&
								  a != null &&
								  s === "onScroll" &&
								  ze("scroll", r);
						}
					switch (n) {
						case "input":
							Jl(r), Fh(r, o, !0);
							break;
						case "textarea":
							Jl(r), Uh(r);
							break;
						case "select":
						case "option":
							break;
						default:
							typeof o.onClick == "function" && (r.onclick = As);
					}
					(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(s = i.nodeType === 9 ? i : i.ownerDocument),
						e === "http://www.w3.org/1999/xhtml" && (e = Um(n)),
						e === "http://www.w3.org/1999/xhtml"
							? n === "script"
								? ((e = s.createElement("div")),
								  (e.innerHTML = "<script></script>"),
								  (e = e.removeChild(e.firstChild)))
								: typeof r.is == "string"
								? (e = s.createElement(n, { is: r.is }))
								: ((e = s.createElement(n)),
								  n === "select" &&
										((s = e),
										r.multiple
											? (s.multiple = !0)
											: r.size && (s.size = r.size)))
							: (e = s.createElementNS(e, n)),
						(e[Pn] = t),
						(e[hl] = r),
						fv(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((s = qu(n, r)), n)) {
							case "dialog":
								ze("cancel", e), ze("close", e), (i = r);
								break;
							case "iframe":
							case "object":
							case "embed":
								ze("load", e), (i = r);
								break;
							case "video":
							case "audio":
								for (i = 0; i < Wo.length; i++) ze(Wo[i], e);
								i = r;
								break;
							case "source":
								ze("error", e), (i = r);
								break;
							case "img":
							case "image":
							case "link":
								ze("error", e), ze("load", e), (i = r);
								break;
							case "details":
								ze("toggle", e), (i = r);
								break;
							case "input":
								$h(e, r), (i = Vu(e, r)), ze("invalid", e);
								break;
							case "option":
								i = r;
								break;
							case "select":
								(e._wrapperState = {
									wasMultiple: !!r.multiple,
								}),
									(i = Qe({}, r, { value: void 0 })),
									ze("invalid", e);
								break;
							case "textarea":
								zh(e, r), (i = Yu(e, r)), ze("invalid", e);
								break;
							default:
								i = r;
						}
						Gu(n, i), (a = i);
						for (o in a)
							if (a.hasOwnProperty(o)) {
								var c = a[o];
								o === "style"
									? Hm(e, c)
									: o === "dangerouslySetInnerHTML"
									? ((c = c ? c.__html : void 0),
									  c != null && Bm(e, c))
									: o === "children"
									? typeof c == "string"
										? (n !== "textarea" || c !== "") &&
										  il(e, c)
										: typeof c == "number" && il(e, "" + c)
									: o !== "suppressContentEditableWarning" &&
									  o !== "suppressHydrationWarning" &&
									  o !== "autoFocus" &&
									  (rl.hasOwnProperty(o)
											? c != null &&
											  o === "onScroll" &&
											  ze("scroll", e)
											: c != null && ed(e, o, c, s));
							}
						switch (n) {
							case "input":
								Jl(e), Fh(e, r, !1);
								break;
							case "textarea":
								Jl(e), Uh(e);
								break;
							case "option":
								r.value != null &&
									e.setAttribute("value", "" + Tr(r.value));
								break;
							case "select":
								(e.multiple = !!r.multiple),
									(o = r.value),
									o != null
										? Qi(e, !!r.multiple, o, !1)
										: r.defaultValue != null &&
										  Qi(
												e,
												!!r.multiple,
												r.defaultValue,
												!0
										  );
								break;
							default:
								typeof i.onClick == "function" &&
									(e.onclick = As);
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
			return St(t), null;
		case 6:
			if (e && t.stateNode != null) pv(e, t, e.memoizedProps, r);
			else {
				if (typeof r != "string" && t.stateNode === null)
					throw Error(F(166));
				if (((n = ti(ml.current)), ti(An.current), ss(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[Pn] = t),
						(o = r.nodeValue !== n) && ((e = Kt), e !== null))
					)
						switch (e.tag) {
							case 3:
								ls(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !==
									!0 &&
									ls(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					o && (t.flags |= 4);
				} else
					(r = (
						n.nodeType === 9 ? n : n.ownerDocument
					).createTextNode(r)),
						(r[Pn] = t),
						(t.stateNode = r);
			}
			return St(t), null;
		case 13:
			if (
				(Ue(Ve),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null &&
						e.memoizedState.dehydrated !== null))
			) {
				if (We && Vt !== null && t.mode & 1 && !(t.flags & 128))
					Og(), io(), (t.flags |= 98560), (o = !1);
				else if (((o = ss(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!o) throw Error(F(318));
						if (
							((o = t.memoizedState),
							(o = o !== null ? o.dehydrated : null),
							!o)
						)
							throw Error(F(317));
						o[Pn] = t;
					} else
						io(),
							!(t.flags & 128) && (t.memoizedState = null),
							(t.flags |= 4);
					St(t), (o = !1);
				} else _n !== null && (Oc(_n), (_n = null)), (o = !0);
				if (!o) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || Ve.current & 1
								? dt === 0 && (dt = 3)
								: Md())),
				  t.updateQueue !== null && (t.flags |= 4),
				  St(t),
				  null);
		case 4:
			return (
				lo(),
				Sc(e, t),
				e === null && dl(t.stateNode.containerInfo),
				St(t),
				null
			);
		case 10:
			return wd(t.type._context), St(t), null;
		case 17:
			return $t(t.type) && Ms(), St(t), null;
		case 19:
			if ((Ue(Ve), (o = t.memoizedState), o === null)) return St(t), null;
			if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
				if (r) Ro(o, !1);
				else {
					if (dt !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((s = Ws(e)), s !== null)) {
								for (
									t.flags |= 128,
										Ro(o, !1),
										r = s.updateQueue,
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
										(s = o.alternate),
										s === null
											? ((o.childLanes = 0),
											  (o.lanes = e),
											  (o.child = null),
											  (o.subtreeFlags = 0),
											  (o.memoizedProps = null),
											  (o.memoizedState = null),
											  (o.updateQueue = null),
											  (o.dependencies = null),
											  (o.stateNode = null))
											: ((o.childLanes = s.childLanes),
											  (o.lanes = s.lanes),
											  (o.child = s.child),
											  (o.subtreeFlags = 0),
											  (o.deletions = null),
											  (o.memoizedProps =
													s.memoizedProps),
											  (o.memoizedState =
													s.memoizedState),
											  (o.updateQueue = s.updateQueue),
											  (o.type = s.type),
											  (e = s.dependencies),
											  (o.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext:
																	e.firstContext,
														  })),
										(n = n.sibling);
								return Fe(Ve, (Ve.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					o.tail !== null &&
						it() > ao &&
						((t.flags |= 128),
						(r = !0),
						Ro(o, !1),
						(t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = Ws(s)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							Ro(o, !0),
							o.tail === null &&
								o.tailMode === "hidden" &&
								!s.alternate &&
								!We)
						)
							return St(t), null;
					} else
						2 * it() - o.renderingStartTime > ao &&
							n !== 1073741824 &&
							((t.flags |= 128),
							(r = !0),
							Ro(o, !1),
							(t.lanes = 4194304));
				o.isBackwards
					? ((s.sibling = t.child), (t.child = s))
					: ((n = o.last),
					  n !== null ? (n.sibling = s) : (t.child = s),
					  (o.last = s));
			}
			return o.tail !== null
				? ((t = o.tail),
				  (o.rendering = t),
				  (o.tail = t.sibling),
				  (o.renderingStartTime = it()),
				  (t.sibling = null),
				  (n = Ve.current),
				  Fe(Ve, r ? (n & 1) | 2 : n & 1),
				  t)
				: (St(t), null);
		case 22:
		case 23:
			return (
				Ad(),
				(r = t.memoizedState !== null),
				e !== null &&
					(e.memoizedState !== null) !== r &&
					(t.flags |= 8192),
				r && t.mode & 1
					? Ht & 1073741824 &&
					  (St(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: St(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(F(156, t.tag));
}
function W1(e, t) {
	switch ((md(t), t.tag)) {
		case 1:
			return (
				$t(t.type) && Ms(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				lo(),
				Ue(It),
				Ue(kt),
				Cd(),
				(e = t.flags),
				e & 65536 && !(e & 128)
					? ((t.flags = (e & -65537) | 128), t)
					: null
			);
		case 5:
			return Sd(t), null;
		case 13:
			if (
				(Ue(Ve),
				(e = t.memoizedState),
				e !== null && e.dehydrated !== null)
			) {
				if (t.alternate === null) throw Error(F(340));
				io();
			}
			return (
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return Ue(Ve), null;
		case 4:
			return lo(), null;
		case 10:
			return wd(t.type._context), null;
		case 22:
		case 23:
			return Ad(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var cs = !1,
	Ct = !1,
	H1 = typeof WeakSet == "function" ? WeakSet : Set,
	V = null;
function Hi(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == "function")
			try {
				n(null);
			} catch (r) {
				Je(e, t, r);
			}
		else n.current = null;
}
function Cc(e, t, n) {
	try {
		n();
	} catch (r) {
		Je(e, t, r);
	}
}
var Lp = !1;
function V1(e, t) {
	if (((sc = Rs), (e = yg()), hd(e))) {
		if ("selectionStart" in e)
			var n = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var i = r.anchorOffset,
						o = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, o.nodeType;
					} catch {
						n = null;
						break e;
					}
					var s = 0,
						a = -1,
						c = -1,
						d = 0,
						p = 0,
						v = e,
						m = null;
					t: for (;;) {
						for (
							var b;
							v !== n ||
								(i !== 0 && v.nodeType !== 3) ||
								(a = s + i),
								v !== o ||
									(r !== 0 && v.nodeType !== 3) ||
									(c = s + r),
								v.nodeType === 3 && (s += v.nodeValue.length),
								(b = v.firstChild) !== null;

						)
							(m = v), (v = b);
						for (;;) {
							if (v === e) break t;
							if (
								(m === n && ++d === i && (a = s),
								m === o && ++p === r && (c = s),
								(b = v.nextSibling) !== null)
							)
								break;
							(v = m), (m = v.parentNode);
						}
						v = b;
					}
					n = a === -1 || c === -1 ? null : { start: a, end: c };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (
		ac = { focusedElem: e, selectionRange: n }, Rs = !1, V = t;
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
					var S = t.alternate;
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (S !== null) {
									var N = S.memoizedProps,
										R = S.memoizedState,
										y = t.stateNode,
										g = y.getSnapshotBeforeUpdate(
											t.elementType === t.type
												? N
												: vn(t.type, N),
											R
										);
									y.__reactInternalSnapshotBeforeUpdate = g;
								}
								break;
							case 3:
								var E = t.stateNode.containerInfo;
								E.nodeType === 1
									? (E.textContent = "")
									: E.nodeType === 9 &&
									  E.documentElement &&
									  E.removeChild(E.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(F(163));
						}
				} catch (w) {
					Je(t, t.return, w);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (V = e);
					break;
				}
				V = t.return;
			}
	return (S = Lp), (Lp = !1), S;
}
function Jo(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var i = (r = r.next);
		do {
			if ((i.tag & e) === e) {
				var o = i.destroy;
				(i.destroy = void 0), o !== void 0 && Cc(t, n, o);
			}
			i = i.next;
		} while (i !== r);
	}
}
function fa(e, t) {
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
function kc(e) {
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
function mv(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), mv(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[Pn],
				delete t[hl],
				delete t[dc],
				delete t[N1],
				delete t[b1])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function gv(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Op(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || gv(e.return)) return null;
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
function Tc(e, t, n) {
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
				  n != null || t.onclick !== null || (t.onclick = As));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Tc(e, t, n), e = e.sibling; e !== null; )
			Tc(e, t, n), (e = e.sibling);
}
function Nc(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Nc(e, t, n), e = e.sibling; e !== null; )
			Nc(e, t, n), (e = e.sibling);
}
var wt = null,
	yn = !1;
function ur(e, t, n) {
	for (n = n.child; n !== null; ) vv(e, t, n), (n = n.sibling);
}
function vv(e, t, n) {
	if (Dn && typeof Dn.onCommitFiberUnmount == "function")
		try {
			Dn.onCommitFiberUnmount(ia, n);
		} catch {}
	switch (n.tag) {
		case 5:
			Ct || Hi(n, t);
		case 6:
			var r = wt,
				i = yn;
			(wt = null),
				ur(e, t, n),
				(wt = r),
				(yn = i),
				wt !== null &&
					(yn
						? ((e = wt),
						  (n = n.stateNode),
						  e.nodeType === 8
								? e.parentNode.removeChild(n)
								: e.removeChild(n))
						: wt.removeChild(n.stateNode));
			break;
		case 18:
			wt !== null &&
				(yn
					? ((e = wt),
					  (n = n.stateNode),
					  e.nodeType === 8
							? _u(e.parentNode, n)
							: e.nodeType === 1 && _u(e, n),
					  al(e))
					: _u(wt, n.stateNode));
			break;
		case 4:
			(r = wt),
				(i = yn),
				(wt = n.stateNode.containerInfo),
				(yn = !0),
				ur(e, t, n),
				(wt = r),
				(yn = i);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!Ct &&
				((r = n.updateQueue),
				r !== null && ((r = r.lastEffect), r !== null))
			) {
				i = r = r.next;
				do {
					var o = i,
						s = o.destroy;
					(o = o.tag),
						s !== void 0 && (o & 2 || o & 4) && Cc(n, t, s),
						(i = i.next);
				} while (i !== r);
			}
			ur(e, t, n);
			break;
		case 1:
			if (
				!Ct &&
				(Hi(n, t),
				(r = n.stateNode),
				typeof r.componentWillUnmount == "function")
			)
				try {
					(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount();
				} catch (a) {
					Je(n, t, a);
				}
			ur(e, t, n);
			break;
		case 21:
			ur(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((Ct = (r = Ct) || n.memoizedState !== null),
				  ur(e, t, n),
				  (Ct = r))
				: ur(e, t, n);
			break;
		default:
			ur(e, t, n);
	}
}
function Rp(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new H1()),
			t.forEach(function (r) {
				var i = ex.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(i, i));
			});
	}
}
function gn(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var i = n[r];
			try {
				var o = e,
					s = t,
					a = s;
				e: for (; a !== null; ) {
					switch (a.tag) {
						case 5:
							(wt = a.stateNode), (yn = !1);
							break e;
						case 3:
							(wt = a.stateNode.containerInfo), (yn = !0);
							break e;
						case 4:
							(wt = a.stateNode.containerInfo), (yn = !0);
							break e;
					}
					a = a.return;
				}
				if (wt === null) throw Error(F(160));
				vv(o, s, i), (wt = null), (yn = !1);
				var c = i.alternate;
				c !== null && (c.return = null), (i.return = null);
			} catch (d) {
				Je(i, t, d);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) yv(t, e), (t = t.sibling);
}
function yv(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((gn(t, e), On(e), r & 4)) {
				try {
					Jo(3, e, e.return), fa(3, e);
				} catch (N) {
					Je(e, e.return, N);
				}
				try {
					Jo(5, e, e.return);
				} catch (N) {
					Je(e, e.return, N);
				}
			}
			break;
		case 1:
			gn(t, e), On(e), r & 512 && n !== null && Hi(n, n.return);
			break;
		case 5:
			if (
				(gn(t, e),
				On(e),
				r & 512 && n !== null && Hi(n, n.return),
				e.flags & 32)
			) {
				var i = e.stateNode;
				try {
					il(i, "");
				} catch (N) {
					Je(e, e.return, N);
				}
			}
			if (r & 4 && ((i = e.stateNode), i != null)) {
				var o = e.memoizedProps,
					s = n !== null ? n.memoizedProps : o,
					a = e.type,
					c = e.updateQueue;
				if (((e.updateQueue = null), c !== null))
					try {
						a === "input" &&
							o.type === "radio" &&
							o.name != null &&
							Fm(i, o),
							qu(a, s);
						var d = qu(a, o);
						for (s = 0; s < c.length; s += 2) {
							var p = c[s],
								v = c[s + 1];
							p === "style"
								? Hm(i, v)
								: p === "dangerouslySetInnerHTML"
								? Bm(i, v)
								: p === "children"
								? il(i, v)
								: ed(i, p, v, d);
						}
						switch (a) {
							case "input":
								Ku(i, o);
								break;
							case "textarea":
								zm(i, o);
								break;
							case "select":
								var m = i._wrapperState.wasMultiple;
								i._wrapperState.wasMultiple = !!o.multiple;
								var b = o.value;
								b != null
									? Qi(i, !!o.multiple, b, !1)
									: m !== !!o.multiple &&
									  (o.defaultValue != null
											? Qi(
													i,
													!!o.multiple,
													o.defaultValue,
													!0
											  )
											: Qi(
													i,
													!!o.multiple,
													o.multiple ? [] : "",
													!1
											  ));
						}
						i[hl] = o;
					} catch (N) {
						Je(e, e.return, N);
					}
			}
			break;
		case 6:
			if ((gn(t, e), On(e), r & 4)) {
				if (e.stateNode === null) throw Error(F(162));
				(i = e.stateNode), (o = e.memoizedProps);
				try {
					i.nodeValue = o;
				} catch (N) {
					Je(e, e.return, N);
				}
			}
			break;
		case 3:
			if (
				(gn(t, e),
				On(e),
				r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					al(t.containerInfo);
				} catch (N) {
					Je(e, e.return, N);
				}
			break;
		case 4:
			gn(t, e), On(e);
			break;
		case 13:
			gn(t, e),
				On(e),
				(i = e.child),
				i.flags & 8192 &&
					((o = i.memoizedState !== null),
					(i.stateNode.isHidden = o),
					!o ||
						(i.alternate !== null &&
							i.alternate.memoizedState !== null) ||
						(Pd = it())),
				r & 4 && Rp(e);
			break;
		case 22:
			if (
				((p = n !== null && n.memoizedState !== null),
				e.mode & 1
					? ((Ct = (d = Ct) || p), gn(t, e), (Ct = d))
					: gn(t, e),
				On(e),
				r & 8192)
			) {
				if (
					((d = e.memoizedState !== null),
					(e.stateNode.isHidden = d) && !p && e.mode & 1)
				)
					for (V = e, p = e.child; p !== null; ) {
						for (v = V = p; V !== null; ) {
							switch (((m = V), (b = m.child), m.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									Jo(4, m, m.return);
									break;
								case 1:
									Hi(m, m.return);
									var S = m.stateNode;
									if (
										typeof S.componentWillUnmount ==
										"function"
									) {
										(r = m), (n = m.return);
										try {
											(t = r),
												(S.props = t.memoizedProps),
												(S.state = t.memoizedState),
												S.componentWillUnmount();
										} catch (N) {
											Je(r, n, N);
										}
									}
									break;
								case 5:
									Hi(m, m.return);
									break;
								case 22:
									if (m.memoizedState !== null) {
										Dp(v);
										continue;
									}
							}
							b !== null ? ((b.return = m), (V = b)) : Dp(v);
						}
						p = p.sibling;
					}
				e: for (p = null, v = e; ; ) {
					if (v.tag === 5) {
						if (p === null) {
							p = v;
							try {
								(i = v.stateNode),
									d
										? ((o = i.style),
										  typeof o.setProperty == "function"
												? o.setProperty(
														"display",
														"none",
														"important"
												  )
												: (o.display = "none"))
										: ((a = v.stateNode),
										  (c = v.memoizedProps.style),
										  (s =
												c != null &&
												c.hasOwnProperty("display")
													? c.display
													: null),
										  (a.style.display = Wm("display", s)));
							} catch (N) {
								Je(e, e.return, N);
							}
						}
					} else if (v.tag === 6) {
						if (p === null)
							try {
								v.stateNode.nodeValue = d
									? ""
									: v.memoizedProps;
							} catch (N) {
								Je(e, e.return, N);
							}
					} else if (
						((v.tag !== 22 && v.tag !== 23) ||
							v.memoizedState === null ||
							v === e) &&
						v.child !== null
					) {
						(v.child.return = v), (v = v.child);
						continue;
					}
					if (v === e) break e;
					for (; v.sibling === null; ) {
						if (v.return === null || v.return === e) break e;
						p === v && (p = null), (v = v.return);
					}
					p === v && (p = null),
						(v.sibling.return = v.return),
						(v = v.sibling);
				}
			}
			break;
		case 19:
			gn(t, e), On(e), r & 4 && Rp(e);
			break;
		case 21:
			break;
		default:
			gn(t, e), On(e);
	}
}
function On(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (gv(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(F(160));
			}
			switch (r.tag) {
				case 5:
					var i = r.stateNode;
					r.flags & 32 && (il(i, ""), (r.flags &= -33));
					var o = Op(e);
					Nc(e, o, i);
					break;
				case 3:
				case 4:
					var s = r.stateNode.containerInfo,
						a = Op(e);
					Tc(e, a, s);
					break;
				default:
					throw Error(F(161));
			}
		} catch (c) {
			Je(e, e.return, c);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function K1(e, t, n) {
	(V = e), wv(e);
}
function wv(e, t, n) {
	for (var r = (e.mode & 1) !== 0; V !== null; ) {
		var i = V,
			o = i.child;
		if (i.tag === 22 && r) {
			var s = i.memoizedState !== null || cs;
			if (!s) {
				var a = i.alternate,
					c = (a !== null && a.memoizedState !== null) || Ct;
				a = cs;
				var d = Ct;
				if (((cs = s), (Ct = c) && !d))
					for (V = i; V !== null; )
						(s = V),
							(c = s.child),
							s.tag === 22 && s.memoizedState !== null
								? Ap(i)
								: c !== null
								? ((c.return = s), (V = c))
								: Ap(i);
				for (; o !== null; ) (V = o), wv(o), (o = o.sibling);
				(V = i), (cs = a), (Ct = d);
			}
			Pp(e);
		} else
			i.subtreeFlags & 8772 && o !== null
				? ((o.return = i), (V = o))
				: Pp(e);
	}
}
function Pp(e) {
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
							Ct || fa(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !Ct)
								if (n === null) r.componentDidMount();
								else {
									var i =
										t.elementType === t.type
											? n.memoizedProps
											: vn(t.type, n.memoizedProps);
									r.componentDidUpdate(
										i,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate
									);
								}
							var o = t.updateQueue;
							o !== null && gp(t, o, r);
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
								gp(t, s, n);
							}
							break;
						case 5:
							var a = t.stateNode;
							if (n === null && t.flags & 4) {
								n = a;
								var c = t.memoizedProps;
								switch (t.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										c.autoFocus && n.focus();
										break;
									case "img":
										c.src && (n.src = c.src);
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
								var d = t.alternate;
								if (d !== null) {
									var p = d.memoizedState;
									if (p !== null) {
										var v = p.dehydrated;
										v !== null && al(v);
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
							throw Error(F(163));
					}
				Ct || (t.flags & 512 && kc(t));
			} catch (m) {
				Je(t, t.return, m);
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
function Dp(e) {
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
function Ap(e) {
	for (; V !== null; ) {
		var t = V;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						fa(4, t);
					} catch (c) {
						Je(t, n, c);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == "function") {
						var i = t.return;
						try {
							r.componentDidMount();
						} catch (c) {
							Je(t, i, c);
						}
					}
					var o = t.return;
					try {
						kc(t);
					} catch (c) {
						Je(t, o, c);
					}
					break;
				case 5:
					var s = t.return;
					try {
						kc(t);
					} catch (c) {
						Je(t, s, c);
					}
			}
		} catch (c) {
			Je(t, t.return, c);
		}
		if (t === e) {
			V = null;
			break;
		}
		var a = t.sibling;
		if (a !== null) {
			(a.return = t.return), (V = a);
			break;
		}
		V = t.return;
	}
}
var Q1 = Math.ceil,
	Ks = nr.ReactCurrentDispatcher,
	Od = nr.ReactCurrentOwner,
	un = nr.ReactCurrentBatchConfig,
	ve = 0,
	pt = null,
	lt = null,
	_t = 0,
	Ht = 0,
	Vi = Lr(0),
	dt = 0,
	wl = null,
	di = 0,
	ha = 0,
	Rd = 0,
	Zo = null,
	At = null,
	Pd = 0,
	ao = 1 / 0,
	Bn = null,
	Qs = !1,
	bc = null,
	Sr = null,
	ds = !1,
	vr = null,
	Ys = 0,
	el = 0,
	jc = null,
	Cs = -1,
	ks = 0;
function Lt() {
	return ve & 6 ? it() : Cs !== -1 ? Cs : (Cs = it());
}
function Cr(e) {
	return e.mode & 1
		? ve & 2 && _t !== 0
			? _t & -_t
			: L1.transition !== null
			? (ks === 0 && (ks = ng()), ks)
			: ((e = Te),
			  e !== 0 ||
					((e = window.event), (e = e === void 0 ? 16 : ug(e.type))),
			  e)
		: 1;
}
function Cn(e, t, n, r) {
	if (50 < el) throw ((el = 0), (jc = null), Error(F(185)));
	Sl(e, n, r),
		(!(ve & 2) || e !== pt) &&
			(e === pt && (!(ve & 2) && (ha |= n), dt === 4 && mr(e, _t)),
			Ft(e, r),
			n === 1 &&
				ve === 0 &&
				!(t.mode & 1) &&
				((ao = it() + 500), ua && Or()));
}
function Ft(e, t) {
	var n = e.callbackNode;
	L_(e, t);
	var r = Os(e, e === pt ? _t : 0);
	if (r === 0)
		n !== null && Hh(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && Hh(n), t === 1))
			e.tag === 0 ? j1(Mp.bind(null, e)) : bg(Mp.bind(null, e)),
				k1(function () {
					!(ve & 6) && Or();
				}),
				(n = null);
		else {
			switch (rg(r)) {
				case 1:
					n = od;
					break;
				case 4:
					n = eg;
					break;
				case 16:
					n = Ls;
					break;
				case 536870912:
					n = tg;
					break;
				default:
					n = Ls;
			}
			n = Nv(n, _v.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function _v(e, t) {
	if (((Cs = -1), (ks = 0), ve & 6)) throw Error(F(327));
	var n = e.callbackNode;
	if (Ji() && e.callbackNode !== n) return null;
	var r = Os(e, e === pt ? _t : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = Xs(e, r);
	else {
		t = r;
		var i = ve;
		ve |= 2;
		var o = Ev();
		(pt !== e || _t !== t) && ((Bn = null), (ao = it() + 500), li(e, t));
		do
			try {
				G1();
				break;
			} catch (a) {
				xv(e, a);
			}
		while (!0);
		yd(),
			(Ks.current = o),
			(ve = i),
			lt !== null ? (t = 0) : ((pt = null), (_t = 0), (t = dt));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((i = nc(e)), i !== 0 && ((r = i), (t = Lc(e, i)))),
			t === 1)
		)
			throw ((n = wl), li(e, 0), mr(e, r), Ft(e, it()), n);
		if (t === 6) mr(e, r);
		else {
			if (
				((i = e.current.alternate),
				!(r & 30) &&
					!Y1(i) &&
					((t = Xs(e, r)),
					t === 2 &&
						((o = nc(e)), o !== 0 && ((r = o), (t = Lc(e, o)))),
					t === 1))
			)
				throw ((n = wl), li(e, 0), mr(e, r), Ft(e, it()), n);
			switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(F(345));
				case 2:
					qr(e, At, Bn);
					break;
				case 3:
					if (
						(mr(e, r),
						(r & 130023424) === r &&
							((t = Pd + 500 - it()), 10 < t))
					) {
						if (Os(e, 0) !== 0) break;
						if (((i = e.suspendedLanes), (i & r) !== r)) {
							Lt(), (e.pingedLanes |= e.suspendedLanes & i);
							break;
						}
						e.timeoutHandle = cc(qr.bind(null, e, At, Bn), t);
						break;
					}
					qr(e, At, Bn);
					break;
				case 4:
					if ((mr(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, i = -1; 0 < r; ) {
						var s = 31 - Sn(r);
						(o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
					}
					if (
						((r = i),
						(r = it() - r),
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
								: 1960 * Q1(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = cc(qr.bind(null, e, At, Bn), r);
						break;
					}
					qr(e, At, Bn);
					break;
				case 5:
					qr(e, At, Bn);
					break;
				default:
					throw Error(F(329));
			}
		}
	}
	return Ft(e, it()), e.callbackNode === n ? _v.bind(null, e) : null;
}
function Lc(e, t) {
	var n = Zo;
	return (
		e.current.memoizedState.isDehydrated && (li(e, t).flags |= 256),
		(e = Xs(e, t)),
		e !== 2 && ((t = At), (At = n), t !== null && Oc(t)),
		e
	);
}
function Oc(e) {
	At === null ? (At = e) : At.push.apply(At, e);
}
function Y1(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var i = n[r],
						o = i.getSnapshot;
					i = i.value;
					try {
						if (!kn(o(), i)) return !1;
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
function mr(e, t) {
	for (
		t &= ~Rd,
			t &= ~ha,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - Sn(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function Mp(e) {
	if (ve & 6) throw Error(F(327));
	Ji();
	var t = Os(e, 0);
	if (!(t & 1)) return Ft(e, it()), null;
	var n = Xs(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = nc(e);
		r !== 0 && ((t = r), (n = Lc(e, r)));
	}
	if (n === 1) throw ((n = wl), li(e, 0), mr(e, t), Ft(e, it()), n);
	if (n === 6) throw Error(F(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		qr(e, At, Bn),
		Ft(e, it()),
		null
	);
}
function Dd(e, t) {
	var n = ve;
	ve |= 1;
	try {
		return e(t);
	} finally {
		(ve = n), ve === 0 && ((ao = it() + 500), ua && Or());
	}
}
function fi(e) {
	vr !== null && vr.tag === 0 && !(ve & 6) && Ji();
	var t = ve;
	ve |= 1;
	var n = un.transition,
		r = Te;
	try {
		if (((un.transition = null), (Te = 1), e)) return e();
	} finally {
		(Te = r), (un.transition = n), (ve = t), !(ve & 6) && Or();
	}
}
function Ad() {
	(Ht = Vi.current), Ue(Vi);
}
function li(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), C1(n)), lt !== null))
		for (n = lt.return; n !== null; ) {
			var r = n;
			switch ((md(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && Ms();
					break;
				case 3:
					lo(), Ue(It), Ue(kt), Cd();
					break;
				case 5:
					Sd(r);
					break;
				case 4:
					lo();
					break;
				case 13:
					Ue(Ve);
					break;
				case 19:
					Ue(Ve);
					break;
				case 10:
					wd(r.type._context);
					break;
				case 22:
				case 23:
					Ad();
			}
			n = n.return;
		}
	if (
		((pt = e),
		(lt = e = kr(e.current, null)),
		(_t = Ht = t),
		(dt = 0),
		(wl = null),
		(Rd = ha = di = 0),
		(At = Zo = null),
		ei !== null)
	) {
		for (t = 0; t < ei.length; t++)
			if (((n = ei[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var i = r.next,
					o = n.pending;
				if (o !== null) {
					var s = o.next;
					(o.next = i), (r.next = s);
				}
				n.pending = r;
			}
		ei = null;
	}
	return e;
}
function xv(e, t) {
	do {
		var n = lt;
		try {
			if ((yd(), (xs.current = Vs), Hs)) {
				for (var r = Ke.memoizedState; r !== null; ) {
					var i = r.queue;
					i !== null && (i.pending = null), (r = r.next);
				}
				Hs = !1;
			}
			if (
				((ci = 0),
				(ht = ct = Ke = null),
				(qo = !1),
				(gl = 0),
				(Od.current = null),
				n === null || n.return === null)
			) {
				(dt = 1), (wl = t), (lt = null);
				break;
			}
			e: {
				var o = e,
					s = n.return,
					a = n,
					c = t;
				if (
					((t = _t),
					(a.flags |= 32768),
					c !== null &&
						typeof c == "object" &&
						typeof c.then == "function")
				) {
					var d = c,
						p = a,
						v = p.tag;
					if (!(p.mode & 1) && (v === 0 || v === 11 || v === 15)) {
						var m = p.alternate;
						m
							? ((p.updateQueue = m.updateQueue),
							  (p.memoizedState = m.memoizedState),
							  (p.lanes = m.lanes))
							: ((p.updateQueue = null),
							  (p.memoizedState = null));
					}
					var b = Sp(s);
					if (b !== null) {
						(b.flags &= -257),
							Cp(b, s, a, o, t),
							b.mode & 1 && Ep(o, d, t),
							(t = b),
							(c = d);
						var S = t.updateQueue;
						if (S === null) {
							var N = new Set();
							N.add(c), (t.updateQueue = N);
						} else S.add(c);
						break e;
					} else {
						if (!(t & 1)) {
							Ep(o, d, t), Md();
							break e;
						}
						c = Error(F(426));
					}
				} else if (We && a.mode & 1) {
					var R = Sp(s);
					if (R !== null) {
						!(R.flags & 65536) && (R.flags |= 256),
							Cp(R, s, a, o, t),
							gd(so(c, a));
						break e;
					}
				}
				(o = c = so(c, a)),
					dt !== 4 && (dt = 2),
					Zo === null ? (Zo = [o]) : Zo.push(o),
					(o = s);
				do {
					switch (o.tag) {
						case 3:
							(o.flags |= 65536), (t &= -t), (o.lanes |= t);
							var y = iv(o, c, t);
							mp(o, y);
							break e;
						case 1:
							a = c;
							var g = o.type,
								E = o.stateNode;
							if (
								!(o.flags & 128) &&
								(typeof g.getDerivedStateFromError ==
									"function" ||
									(E !== null &&
										typeof E.componentDidCatch ==
											"function" &&
										(Sr === null || !Sr.has(E))))
							) {
								(o.flags |= 65536), (t &= -t), (o.lanes |= t);
								var w = ov(o, a, t);
								mp(o, w);
								break e;
							}
					}
					o = o.return;
				} while (o !== null);
			}
			Cv(n);
		} catch (A) {
			(t = A), lt === n && n !== null && (lt = n = n.return);
			continue;
		}
		break;
	} while (!0);
}
function Ev() {
	var e = Ks.current;
	return (Ks.current = Vs), e === null ? Vs : e;
}
function Md() {
	(dt === 0 || dt === 3 || dt === 2) && (dt = 4),
		pt === null || (!(di & 268435455) && !(ha & 268435455)) || mr(pt, _t);
}
function Xs(e, t) {
	var n = ve;
	ve |= 2;
	var r = Ev();
	(pt !== e || _t !== t) && ((Bn = null), li(e, t));
	do
		try {
			X1();
			break;
		} catch (i) {
			xv(e, i);
		}
	while (!0);
	if ((yd(), (ve = n), (Ks.current = r), lt !== null)) throw Error(F(261));
	return (pt = null), (_t = 0), dt;
}
function X1() {
	for (; lt !== null; ) Sv(lt);
}
function G1() {
	for (; lt !== null && !x_(); ) Sv(lt);
}
function Sv(e) {
	var t = Tv(e.alternate, e, Ht);
	(e.memoizedProps = e.pendingProps),
		t === null ? Cv(e) : (lt = t),
		(Od.current = null);
}
function Cv(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = W1(n, t)), n !== null)) {
				(n.flags &= 32767), (lt = n);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(dt = 6), (lt = null);
				return;
			}
		} else if (((n = B1(n, t, Ht)), n !== null)) {
			lt = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			lt = t;
			return;
		}
		lt = t = e;
	} while (t !== null);
	dt === 0 && (dt = 5);
}
function qr(e, t, n) {
	var r = Te,
		i = un.transition;
	try {
		(un.transition = null), (Te = 1), q1(e, t, n, r);
	} finally {
		(un.transition = i), (Te = r);
	}
	return null;
}
function q1(e, t, n, r) {
	do Ji();
	while (vr !== null);
	if (ve & 6) throw Error(F(327));
	n = e.finishedWork;
	var i = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(F(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var o = n.lanes | n.childLanes;
	if (
		(O_(e, o),
		e === pt && ((lt = pt = null), (_t = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			ds ||
			((ds = !0),
			Nv(Ls, function () {
				return Ji(), null;
			})),
		(o = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || o)
	) {
		(o = un.transition), (un.transition = null);
		var s = Te;
		Te = 1;
		var a = ve;
		(ve |= 4),
			(Od.current = null),
			V1(e, n),
			yv(n, e),
			v1(ac),
			(Rs = !!sc),
			(ac = sc = null),
			(e.current = n),
			K1(n),
			E_(),
			(ve = a),
			(Te = s),
			(un.transition = o);
	} else e.current = n;
	if (
		(ds && ((ds = !1), (vr = e), (Ys = i)),
		(o = e.pendingLanes),
		o === 0 && (Sr = null),
		k_(n.stateNode),
		Ft(e, it()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(i = t[n]),
				r(i.value, { componentStack: i.stack, digest: i.digest });
	if (Qs) throw ((Qs = !1), (e = bc), (bc = null), e);
	return (
		Ys & 1 && e.tag !== 0 && Ji(),
		(o = e.pendingLanes),
		o & 1 ? (e === jc ? el++ : ((el = 0), (jc = e))) : (el = 0),
		Or(),
		null
	);
}
function Ji() {
	if (vr !== null) {
		var e = rg(Ys),
			t = un.transition,
			n = Te;
		try {
			if (((un.transition = null), (Te = 16 > e ? 16 : e), vr === null))
				var r = !1;
			else {
				if (((e = vr), (vr = null), (Ys = 0), ve & 6))
					throw Error(F(331));
				var i = ve;
				for (ve |= 4, V = e.current; V !== null; ) {
					var o = V,
						s = o.child;
					if (V.flags & 16) {
						var a = o.deletions;
						if (a !== null) {
							for (var c = 0; c < a.length; c++) {
								var d = a[c];
								for (V = d; V !== null; ) {
									var p = V;
									switch (p.tag) {
										case 0:
										case 11:
										case 15:
											Jo(8, p, o);
									}
									var v = p.child;
									if (v !== null) (v.return = p), (V = v);
									else
										for (; V !== null; ) {
											p = V;
											var m = p.sibling,
												b = p.return;
											if ((mv(p), p === d)) {
												V = null;
												break;
											}
											if (m !== null) {
												(m.return = b), (V = m);
												break;
											}
											V = b;
										}
								}
							}
							var S = o.alternate;
							if (S !== null) {
								var N = S.child;
								if (N !== null) {
									S.child = null;
									do {
										var R = N.sibling;
										(N.sibling = null), (N = R);
									} while (N !== null);
								}
							}
							V = o;
						}
					}
					if (o.subtreeFlags & 2064 && s !== null)
						(s.return = o), (V = s);
					else
						e: for (; V !== null; ) {
							if (((o = V), o.flags & 2048))
								switch (o.tag) {
									case 0:
									case 11:
									case 15:
										Jo(9, o, o.return);
								}
							var y = o.sibling;
							if (y !== null) {
								(y.return = o.return), (V = y);
								break e;
							}
							V = o.return;
						}
				}
				var g = e.current;
				for (V = g; V !== null; ) {
					s = V;
					var E = s.child;
					if (s.subtreeFlags & 2064 && E !== null)
						(E.return = s), (V = E);
					else
						e: for (s = g; V !== null; ) {
							if (((a = V), a.flags & 2048))
								try {
									switch (a.tag) {
										case 0:
										case 11:
										case 15:
											fa(9, a);
									}
								} catch (A) {
									Je(a, a.return, A);
								}
							if (a === s) {
								V = null;
								break e;
							}
							var w = a.sibling;
							if (w !== null) {
								(w.return = a.return), (V = w);
								break e;
							}
							V = a.return;
						}
				}
				if (
					((ve = i),
					Or(),
					Dn && typeof Dn.onPostCommitFiberRoot == "function")
				)
					try {
						Dn.onPostCommitFiberRoot(ia, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(Te = n), (un.transition = t);
		}
	}
	return !1;
}
function Ip(e, t, n) {
	(t = so(n, t)),
		(t = iv(e, t, 1)),
		(e = Er(e, t, 1)),
		(t = Lt()),
		e !== null && (Sl(e, 1, t), Ft(e, t));
}
function Je(e, t, n) {
	if (e.tag === 3) Ip(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				Ip(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == "function" ||
					(typeof r.componentDidCatch == "function" &&
						(Sr === null || !Sr.has(r)))
				) {
					(e = so(n, e)),
						(e = ov(t, e, 1)),
						(t = Er(t, e, 1)),
						(e = Lt()),
						t !== null && (Sl(t, 1, e), Ft(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function J1(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = Lt()),
		(e.pingedLanes |= e.suspendedLanes & n),
		pt === e &&
			(_t & n) === n &&
			(dt === 4 ||
			(dt === 3 && (_t & 130023424) === _t && 500 > it() - Pd)
				? li(e, 0)
				: (Rd |= n)),
		Ft(e, t);
}
function kv(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = ts), (ts <<= 1), !(ts & 130023424) && (ts = 4194304))
			: (t = 1));
	var n = Lt();
	(e = Zn(e, t)), e !== null && (Sl(e, t, n), Ft(e, n));
}
function Z1(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), kv(e, n);
}
function ex(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				i = e.memoizedState;
			i !== null && (n = i.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(F(314));
	}
	r !== null && r.delete(t), kv(e, n);
}
var Tv;
Tv = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || It.current) Mt = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128))
				return (Mt = !1), U1(e, t, n);
			Mt = !!(e.flags & 131072);
		}
	else (Mt = !1), We && t.flags & 1048576 && jg(t, Fs, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			Ss(e, t), (e = t.pendingProps);
			var i = ro(t, kt.current);
			qi(t, n), (i = Td(null, t, r, e, i, n));
			var o = Nd();
			return (
				(t.flags |= 1),
				typeof i == "object" &&
				i !== null &&
				typeof i.render == "function" &&
				i.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  $t(r) ? ((o = !0), Is(t)) : (o = !1),
					  (t.memoizedState =
							i.state !== null && i.state !== void 0
								? i.state
								: null),
					  xd(t),
					  (i.updater = ca),
					  (t.stateNode = i),
					  (i._reactInternals = t),
					  vc(t, r, e, n),
					  (t = _c(null, t, r, !0, o, n)))
					: ((t.tag = 0),
					  We && o && pd(t),
					  jt(null, t, i, n),
					  (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(Ss(e, t),
					(e = t.pendingProps),
					(i = r._init),
					(r = i(r._payload)),
					(t.type = r),
					(i = t.tag = nx(r)),
					(e = vn(r, e)),
					i)
				) {
					case 0:
						t = wc(null, t, r, e, n);
						break e;
					case 1:
						t = Np(null, t, r, e, n);
						break e;
					case 11:
						t = kp(null, t, r, e, n);
						break e;
					case 14:
						t = Tp(null, t, r, vn(r.type, e), n);
						break e;
				}
				throw Error(F(306, r, ""));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : vn(r, i)),
				wc(e, t, r, i, n)
			);
		case 1:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : vn(r, i)),
				Np(e, t, r, i, n)
			);
		case 3:
			e: {
				if ((uv(t), e === null)) throw Error(F(387));
				(r = t.pendingProps),
					(o = t.memoizedState),
					(i = o.element),
					Pg(e, t),
					Bs(t, r, null, n);
				var s = t.memoizedState;
				if (((r = s.element), o.isDehydrated))
					if (
						((o = {
							element: r,
							isDehydrated: !1,
							cache: s.cache,
							pendingSuspenseBoundaries:
								s.pendingSuspenseBoundaries,
							transitions: s.transitions,
						}),
						(t.updateQueue.baseState = o),
						(t.memoizedState = o),
						t.flags & 256)
					) {
						(i = so(Error(F(423)), t)), (t = bp(e, t, r, n, i));
						break e;
					} else if (r !== i) {
						(i = so(Error(F(424)), t)), (t = bp(e, t, r, n, i));
						break e;
					} else
						for (
							Vt = xr(t.stateNode.containerInfo.firstChild),
								Kt = t,
								We = !0,
								_n = null,
								n = Ig(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((io(), r === i)) {
						t = er(e, t, n);
						break e;
					}
					jt(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				$g(t),
				e === null && pc(t),
				(r = t.type),
				(i = t.pendingProps),
				(o = e !== null ? e.memoizedProps : null),
				(s = i.children),
				uc(r, i)
					? (s = null)
					: o !== null && uc(r, o) && (t.flags |= 32),
				av(e, t),
				jt(e, t, s, n),
				t.child
			);
		case 6:
			return e === null && pc(t), null;
		case 13:
			return cv(e, t, n);
		case 4:
			return (
				Ed(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = oo(t, null, r, n)) : jt(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : vn(r, i)),
				kp(e, t, r, i, n)
			);
		case 7:
			return jt(e, t, t.pendingProps, n), t.child;
		case 8:
			return jt(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return jt(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (
					((r = t.type._context),
					(i = t.pendingProps),
					(o = t.memoizedProps),
					(s = i.value),
					Fe(zs, r._currentValue),
					(r._currentValue = s),
					o !== null)
				)
					if (kn(o.value, s)) {
						if (o.children === i.children && !It.current) {
							t = er(e, t, n);
							break e;
						}
					} else
						for (
							o = t.child, o !== null && (o.return = t);
							o !== null;

						) {
							var a = o.dependencies;
							if (a !== null) {
								s = o.child;
								for (var c = a.firstContext; c !== null; ) {
									if (c.context === r) {
										if (o.tag === 1) {
											(c = Qn(-1, n & -n)), (c.tag = 2);
											var d = o.updateQueue;
											if (d !== null) {
												d = d.shared;
												var p = d.pending;
												p === null
													? (c.next = c)
													: ((c.next = p.next),
													  (p.next = c)),
													(d.pending = c);
											}
										}
										(o.lanes |= n),
											(c = o.alternate),
											c !== null && (c.lanes |= n),
											mc(o.return, n, t),
											(a.lanes |= n);
										break;
									}
									c = c.next;
								}
							} else if (o.tag === 10)
								s = o.type === t.type ? null : o.child;
							else if (o.tag === 18) {
								if (((s = o.return), s === null))
									throw Error(F(341));
								(s.lanes |= n),
									(a = s.alternate),
									a !== null && (a.lanes |= n),
									mc(s, n, t),
									(s = o.sibling);
							} else s = o.child;
							if (s !== null) s.return = o;
							else
								for (s = o; s !== null; ) {
									if (s === t) {
										s = null;
										break;
									}
									if (((o = s.sibling), o !== null)) {
										(o.return = s.return), (s = o);
										break;
									}
									s = s.return;
								}
							o = s;
						}
				jt(e, t, i.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (
				(i = t.type),
				(r = t.pendingProps.children),
				qi(t, n),
				(i = cn(i)),
				(r = r(i)),
				(t.flags |= 1),
				jt(e, t, r, n),
				t.child
			);
		case 14:
			return (
				(r = t.type),
				(i = vn(r, t.pendingProps)),
				(i = vn(r.type, i)),
				Tp(e, t, r, i, n)
			);
		case 15:
			return lv(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : vn(r, i)),
				Ss(e, t),
				(t.tag = 1),
				$t(r) ? ((e = !0), Is(t)) : (e = !1),
				qi(t, n),
				Ag(t, r, i),
				vc(t, r, i, n),
				_c(null, t, r, !0, e, n)
			);
		case 19:
			return dv(e, t, n);
		case 22:
			return sv(e, t, n);
	}
	throw Error(F(156, t.tag));
};
function Nv(e, t) {
	return Zm(e, t);
}
function tx(e, t, n, r) {
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
function an(e, t, n, r) {
	return new tx(e, t, n, r);
}
function Id(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function nx(e) {
	if (typeof e == "function") return Id(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === nd)) return 11;
		if (e === rd) return 14;
	}
	return 2;
}
function kr(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = an(e.tag, t, e.key, e.mode)),
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
function Ts(e, t, n, r, i, o) {
	var s = 2;
	if (((r = e), typeof e == "function")) Id(e) && (s = 1);
	else if (typeof e == "string") s = 5;
	else
		e: switch (e) {
			case Ai:
				return si(n.children, i, o, t);
			case td:
				(s = 8), (i |= 8);
				break;
			case Uu:
				return (
					(e = an(12, n, t, i | 2)),
					(e.elementType = Uu),
					(e.lanes = o),
					e
				);
			case Bu:
				return (
					(e = an(13, n, t, i)),
					(e.elementType = Bu),
					(e.lanes = o),
					e
				);
			case Wu:
				return (
					(e = an(19, n, t, i)),
					(e.elementType = Wu),
					(e.lanes = o),
					e
				);
			case Mm:
				return pa(n, i, o, t);
			default:
				if (typeof e == "object" && e !== null)
					switch (e.$$typeof) {
						case Dm:
							s = 10;
							break e;
						case Am:
							s = 9;
							break e;
						case nd:
							s = 11;
							break e;
						case rd:
							s = 14;
							break e;
						case dr:
							(s = 16), (r = null);
							break e;
					}
				throw Error(F(130, e == null ? e : typeof e, ""));
		}
	return (
		(t = an(s, n, t, i)),
		(t.elementType = e),
		(t.type = r),
		(t.lanes = o),
		t
	);
}
function si(e, t, n, r) {
	return (e = an(7, e, r, t)), (e.lanes = n), e;
}
function pa(e, t, n, r) {
	return (
		(e = an(22, e, r, t)),
		(e.elementType = Mm),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function bu(e, t, n) {
	return (e = an(6, e, null, t)), (e.lanes = n), e;
}
function ju(e, t, n) {
	return (
		(t = an(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function rx(e, t, n, r, i) {
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
		(this.eventTimes = uu(0)),
		(this.expirationTimes = uu(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = uu(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = i),
		(this.mutableSourceEagerHydrationData = null);
}
function $d(e, t, n, r, i, o, s, a, c) {
	return (
		(e = new rx(e, t, n, a, c)),
		t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
		(o = an(3, null, null, t)),
		(e.current = o),
		(o.stateNode = e),
		(o.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		xd(o),
		e
	);
}
function ix(e, t, n) {
	var r =
		3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: Di,
		key: r == null ? null : "" + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function bv(e) {
	if (!e) return Nr;
	e = e._reactInternals;
	e: {
		if (gi(e) !== e || e.tag !== 1) throw Error(F(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if ($t(t.type)) {
						t =
							t.stateNode
								.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(F(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if ($t(n)) return Ng(e, n, t);
	}
	return t;
}
function jv(e, t, n, r, i, o, s, a, c) {
	return (
		(e = $d(n, r, !0, e, i, o, s, a, c)),
		(e.context = bv(null)),
		(n = e.current),
		(r = Lt()),
		(i = Cr(n)),
		(o = Qn(r, i)),
		(o.callback = t ?? null),
		Er(n, o, i),
		(e.current.lanes = i),
		Sl(e, i, r),
		Ft(e, r),
		e
	);
}
function ma(e, t, n, r) {
	var i = t.current,
		o = Lt(),
		s = Cr(i);
	return (
		(n = bv(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = Qn(o, s)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = Er(i, t, s)),
		e !== null && (Cn(e, i, s, o), _s(e, i, s)),
		s
	);
}
function Gs(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function $p(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function Fd(e, t) {
	$p(e, t), (e = e.alternate) && $p(e, t);
}
function ox() {
	return null;
}
var Lv =
	typeof reportError == "function"
		? reportError
		: function (e) {
				console.error(e);
		  };
function zd(e) {
	this._internalRoot = e;
}
ga.prototype.render = zd.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(F(409));
	ma(e, t, null, null);
};
ga.prototype.unmount = zd.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		fi(function () {
			ma(null, e, null, null);
		}),
			(t[Jn] = null);
	}
};
function ga(e) {
	this._internalRoot = e;
}
ga.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = lg();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < pr.length && t !== 0 && t < pr[n].priority; n++);
		pr.splice(n, 0, e), n === 0 && ag(e);
	}
};
function Ud(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function va(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 ||
				e.nodeValue !== " react-mount-point-unstable "))
	);
}
function Fp() {}
function lx(e, t, n, r, i) {
	if (i) {
		if (typeof r == "function") {
			var o = r;
			r = function () {
				var d = Gs(s);
				o.call(d);
			};
		}
		var s = jv(t, r, e, 0, null, !1, !1, "", Fp);
		return (
			(e._reactRootContainer = s),
			(e[Jn] = s.current),
			dl(e.nodeType === 8 ? e.parentNode : e),
			fi(),
			s
		);
	}
	for (; (i = e.lastChild); ) e.removeChild(i);
	if (typeof r == "function") {
		var a = r;
		r = function () {
			var d = Gs(c);
			a.call(d);
		};
	}
	var c = $d(e, 0, !1, null, null, !1, !1, "", Fp);
	return (
		(e._reactRootContainer = c),
		(e[Jn] = c.current),
		dl(e.nodeType === 8 ? e.parentNode : e),
		fi(function () {
			ma(t, c, n, r);
		}),
		c
	);
}
function ya(e, t, n, r, i) {
	var o = n._reactRootContainer;
	if (o) {
		var s = o;
		if (typeof i == "function") {
			var a = i;
			i = function () {
				var c = Gs(s);
				a.call(c);
			};
		}
		ma(t, s, e, i);
	} else s = lx(n, t, e, i, r);
	return Gs(s);
}
ig = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = Bo(t.pendingLanes);
				n !== 0 &&
					(ld(t, n | 1),
					Ft(t, it()),
					!(ve & 6) && ((ao = it() + 500), Or()));
			}
			break;
		case 13:
			fi(function () {
				var r = Zn(e, 1);
				if (r !== null) {
					var i = Lt();
					Cn(r, e, 1, i);
				}
			}),
				Fd(e, 1);
	}
};
sd = function (e) {
	if (e.tag === 13) {
		var t = Zn(e, 134217728);
		if (t !== null) {
			var n = Lt();
			Cn(t, e, 134217728, n);
		}
		Fd(e, 134217728);
	}
};
og = function (e) {
	if (e.tag === 13) {
		var t = Cr(e),
			n = Zn(e, t);
		if (n !== null) {
			var r = Lt();
			Cn(n, e, t, r);
		}
		Fd(e, t);
	}
};
lg = function () {
	return Te;
};
sg = function (e, t) {
	var n = Te;
	try {
		return (Te = e), t();
	} finally {
		Te = n;
	}
};
Zu = function (e, t, n) {
	switch (t) {
		case "input":
			if ((Ku(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
						var i = aa(r);
						if (!i) throw Error(F(90));
						$m(r), Ku(r, i);
					}
				}
			}
			break;
		case "textarea":
			zm(e, n);
			break;
		case "select":
			(t = n.value), t != null && Qi(e, !!n.multiple, t, !1);
	}
};
Qm = Dd;
Ym = fi;
var sx = { usingClientEntryPoint: !1, Events: [kl, Fi, aa, Vm, Km, Dd] },
	Po = {
		findFiberByHostInstance: Zr,
		bundleType: 0,
		version: "18.2.0",
		rendererPackageName: "react-dom",
	},
	ax = {
		bundleType: Po.bundleType,
		version: Po.version,
		rendererPackageName: Po.rendererPackageName,
		rendererConfig: Po.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: nr.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = qm(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: Po.findFiberByHostInstance || ox,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var fs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!fs.isDisabled && fs.supportsFiber)
		try {
			(ia = fs.inject(ax)), (Dn = fs);
		} catch {}
}
Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sx;
Yt.createPortal = function (e, t) {
	var n =
		2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!Ud(t)) throw Error(F(200));
	return ix(e, t, null, n);
};
Yt.createRoot = function (e, t) {
	if (!Ud(e)) throw Error(F(299));
	var n = !1,
		r = "",
		i = Lv;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
		(t = $d(e, 1, !1, null, null, n, !1, r, i)),
		(e[Jn] = t.current),
		dl(e.nodeType === 8 ? e.parentNode : e),
		new zd(t)
	);
};
Yt.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == "function"
			? Error(F(188))
			: ((e = Object.keys(e).join(",")), Error(F(268, e)));
	return (e = qm(t)), (e = e === null ? null : e.stateNode), e;
};
Yt.flushSync = function (e) {
	return fi(e);
};
Yt.hydrate = function (e, t, n) {
	if (!va(t)) throw Error(F(200));
	return ya(null, e, t, !0, n);
};
Yt.hydrateRoot = function (e, t, n) {
	if (!Ud(e)) throw Error(F(405));
	var r = (n != null && n.hydratedSources) || null,
		i = !1,
		o = "",
		s = Lv;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (i = !0),
			n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
		(t = jv(t, null, e, 1, n ?? null, i, !1, o, s)),
		(e[Jn] = t.current),
		dl(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(i = n._getVersion),
				(i = i(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, i])
					: t.mutableSourceEagerHydrationData.push(n, i);
	return new ga(t);
};
Yt.render = function (e, t, n) {
	if (!va(t)) throw Error(F(200));
	return ya(null, e, t, !1, n);
};
Yt.unmountComponentAtNode = function (e) {
	if (!va(e)) throw Error(F(40));
	return e._reactRootContainer
		? (fi(function () {
				ya(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[Jn] = null);
				});
		  }),
		  !0)
		: !1;
};
Yt.unstable_batchedUpdates = Dd;
Yt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!va(n)) throw Error(F(200));
	if (e == null || e._reactInternals === void 0) throw Error(F(38));
	return ya(e, t, n, !1, r);
};
Yt.version = "18.2.0-next-9e3b772b8-20220608";
function Ov() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ov);
		} catch (e) {
			console.error(e);
		}
}
Ov(), (jm.exports = Yt);
var Bd = jm.exports;
const ni = na(Bd),
	ux = ym({ __proto__: null, default: ni }, [Bd]);
var zp = Bd;
(Fu.createRoot = zp.createRoot), (Fu.hydrateRoot = zp.hydrateRoot);
var cx = { exports: {} };
/*!
 * Bootstrap v5.3.2 (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ (function (e, t) {
	(function (n, r) {
		e.exports = r();
	})(Iw, function () {
		const n = new Map(),
			r = {
				set(f, l, u) {
					n.has(f) || n.set(f, new Map());
					const h = n.get(f);
					h.has(l) || h.size === 0
						? h.set(l, u)
						: console.error(
								`Bootstrap doesn't allow more than one instance per element. Bound instance: ${
									Array.from(h.keys())[0]
								}.`
						  );
				},
				get: (f, l) => (n.has(f) && n.get(f).get(l)) || null,
				remove(f, l) {
					if (!n.has(f)) return;
					const u = n.get(f);
					u.delete(l), u.size === 0 && n.delete(f);
				},
			},
			i = "transitionend",
			o = (f) => (
				f &&
					window.CSS &&
					window.CSS.escape &&
					(f = f.replace(
						/#([^\s"#']+)/g,
						(l, u) => `#${CSS.escape(u)}`
					)),
				f
			),
			s = (f) => {
				f.dispatchEvent(new Event(i));
			},
			a = (f) =>
				!(!f || typeof f != "object") &&
				(f.jquery !== void 0 && (f = f[0]), f.nodeType !== void 0),
			c = (f) =>
				a(f)
					? f.jquery
						? f[0]
						: f
					: typeof f == "string" && f.length > 0
					? document.querySelector(o(f))
					: null,
			d = (f) => {
				if (!a(f) || f.getClientRects().length === 0) return !1;
				const l =
						getComputedStyle(f).getPropertyValue("visibility") ===
						"visible",
					u = f.closest("details:not([open])");
				if (!u) return l;
				if (u !== f) {
					const h = f.closest("summary");
					if ((h && h.parentNode !== u) || h === null) return !1;
				}
				return l;
			},
			p = (f) =>
				!f ||
				f.nodeType !== Node.ELEMENT_NODE ||
				!!f.classList.contains("disabled") ||
				(f.disabled !== void 0
					? f.disabled
					: f.hasAttribute("disabled") &&
					  f.getAttribute("disabled") !== "false"),
			v = (f) => {
				if (!document.documentElement.attachShadow) return null;
				if (typeof f.getRootNode == "function") {
					const l = f.getRootNode();
					return l instanceof ShadowRoot ? l : null;
				}
				return f instanceof ShadowRoot
					? f
					: f.parentNode
					? v(f.parentNode)
					: null;
			},
			m = () => {},
			b = (f) => {
				f.offsetHeight;
			},
			S = () =>
				window.jQuery &&
				!document.body.hasAttribute("data-bs-no-jquery")
					? window.jQuery
					: null,
			N = [],
			R = () => document.documentElement.dir === "rtl",
			y = (f) => {
				var l;
				(l = () => {
					const u = S();
					if (u) {
						const h = f.NAME,
							C = u.fn[h];
						(u.fn[h] = f.jQueryInterface),
							(u.fn[h].Constructor = f),
							(u.fn[h].noConflict = () => (
								(u.fn[h] = C), f.jQueryInterface
							));
					}
				}),
					document.readyState === "loading"
						? (N.length ||
								document.addEventListener(
									"DOMContentLoaded",
									() => {
										for (const u of N) u();
									}
								),
						  N.push(l))
						: l();
			},
			g = (f, l = [], u = f) => (typeof f == "function" ? f(...l) : u),
			E = (f, l, u = !0) => {
				if (!u) return void g(f);
				const h =
					((O) => {
						if (!O) return 0;
						let { transitionDuration: I, transitionDelay: U } =
							window.getComputedStyle(O);
						const H = Number.parseFloat(I),
							K = Number.parseFloat(U);
						return H || K
							? ((I = I.split(",")[0]),
							  (U = U.split(",")[0]),
							  1e3 *
									(Number.parseFloat(I) +
										Number.parseFloat(U)))
							: 0;
					})(l) + 5;
				let C = !1;
				const k = ({ target: O }) => {
					O === l && ((C = !0), l.removeEventListener(i, k), g(f));
				};
				l.addEventListener(i, k),
					setTimeout(() => {
						C || s(l);
					}, h);
			},
			w = (f, l, u, h) => {
				const C = f.length;
				let k = f.indexOf(l);
				return k === -1
					? !u && h
						? f[C - 1]
						: f[0]
					: ((k += u ? 1 : -1),
					  h && (k = (k + C) % C),
					  f[Math.max(0, Math.min(k, C - 1))]);
			},
			A = /[^.]*(?=\..*)\.|.*/,
			D = /\..*/,
			P = /::\d+$/,
			z = {};
		let Y = 1;
		const G = { mouseenter: "mouseover", mouseleave: "mouseout" },
			fe = new Set([
				"click",
				"dblclick",
				"mouseup",
				"mousedown",
				"contextmenu",
				"mousewheel",
				"DOMMouseScroll",
				"mouseover",
				"mouseout",
				"mousemove",
				"selectstart",
				"selectend",
				"keydown",
				"keypress",
				"keyup",
				"orientationchange",
				"touchstart",
				"touchmove",
				"touchend",
				"touchcancel",
				"pointerdown",
				"pointermove",
				"pointerup",
				"pointerleave",
				"pointercancel",
				"gesturestart",
				"gesturechange",
				"gestureend",
				"focus",
				"blur",
				"change",
				"reset",
				"select",
				"submit",
				"focusin",
				"focusout",
				"load",
				"unload",
				"beforeunload",
				"resize",
				"move",
				"DOMContentLoaded",
				"readystatechange",
				"error",
				"abort",
				"scroll",
			]);
		function Be(f, l) {
			return (l && `${l}::${Y++}`) || f.uidEvent || Y++;
		}
		function Re(f) {
			const l = Be(f);
			return (f.uidEvent = l), (z[l] = z[l] || {}), z[l];
		}
		function mt(f, l, u = null) {
			return Object.values(f).find(
				(h) => h.callable === l && h.delegationSelector === u
			);
		}
		function Ee(f, l, u) {
			const h = typeof l == "string",
				C = h ? u : l || u;
			let k = X(f);
			return fe.has(k) || (k = f), [h, C, k];
		}
		function ot(f, l, u, h, C) {
			if (typeof l != "string" || !f) return;
			let [k, O, I] = Ee(l, u, h);
			l in G &&
				(O = ((re) =>
					function (ne) {
						if (
							!ne.relatedTarget ||
							(ne.relatedTarget !== ne.delegateTarget &&
								!ne.delegateTarget.contains(ne.relatedTarget))
						)
							return re.call(this, ne);
					})(O));
			const U = Re(f),
				H = U[I] || (U[I] = {}),
				K = mt(H, O, k ? u : null);
			if (K) return void (K.oneOff = K.oneOff && C);
			const W = Be(O, l.replace(A, "")),
				oe = k
					? (function (te, re, ne) {
							return function ie(Le) {
								const $e = te.querySelectorAll(re);
								for (
									let { target: ce } = Le;
									ce && ce !== this;
									ce = ce.parentNode
								)
									for (const xe of $e)
										if (xe === ce)
											return (
												de(Le, { delegateTarget: ce }),
												ie.oneOff &&
													j.off(te, Le.type, re, ne),
												ne.apply(ce, [Le])
											);
							};
					  })(f, u, O)
					: (function (te, re) {
							return function ne(ie) {
								return (
									de(ie, { delegateTarget: te }),
									ne.oneOff && j.off(te, ie.type, re),
									re.apply(te, [ie])
								);
							};
					  })(f, O);
			(oe.delegationSelector = k ? u : null),
				(oe.callable = O),
				(oe.oneOff = C),
				(oe.uidEvent = W),
				(H[W] = oe),
				f.addEventListener(I, oe, k);
		}
		function et(f, l, u, h, C) {
			const k = mt(l[u], h, C);
			k && (f.removeEventListener(u, k, !!C), delete l[u][k.uidEvent]);
		}
		function $(f, l, u, h) {
			const C = l[u] || {};
			for (const [k, O] of Object.entries(C))
				k.includes(h) && et(f, l, u, O.callable, O.delegationSelector);
		}
		function X(f) {
			return (f = f.replace(D, "")), G[f] || f;
		}
		const j = {
			on(f, l, u, h) {
				ot(f, l, u, h, !1);
			},
			one(f, l, u, h) {
				ot(f, l, u, h, !0);
			},
			off(f, l, u, h) {
				if (typeof l != "string" || !f) return;
				const [C, k, O] = Ee(l, u, h),
					I = O !== l,
					U = Re(f),
					H = U[O] || {},
					K = l.startsWith(".");
				if (k === void 0) {
					if (K)
						for (const W of Object.keys(U)) $(f, U, W, l.slice(1));
					for (const [W, oe] of Object.entries(H)) {
						const te = W.replace(P, "");
						(I && !l.includes(te)) ||
							et(f, U, O, oe.callable, oe.delegationSelector);
					}
				} else {
					if (!Object.keys(H).length) return;
					et(f, U, O, k, C ? u : null);
				}
			},
			trigger(f, l, u) {
				if (typeof l != "string" || !f) return null;
				const h = S();
				let C = null,
					k = !0,
					O = !0,
					I = !1;
				l !== X(l) &&
					h &&
					((C = h.Event(l, u)),
					h(f).trigger(C),
					(k = !C.isPropagationStopped()),
					(O = !C.isImmediatePropagationStopped()),
					(I = C.isDefaultPrevented()));
				const U = de(new Event(l, { bubbles: k, cancelable: !0 }), u);
				return (
					I && U.preventDefault(),
					O && f.dispatchEvent(U),
					U.defaultPrevented && C && C.preventDefault(),
					U
				);
			},
		};
		function de(f, l = {}) {
			for (const [u, h] of Object.entries(l))
				try {
					f[u] = h;
				} catch {
					Object.defineProperty(f, u, {
						configurable: !0,
						get: () => h,
					});
				}
			return f;
		}
		function he(f) {
			if (f === "true") return !0;
			if (f === "false") return !1;
			if (f === Number(f).toString()) return Number(f);
			if (f === "" || f === "null") return null;
			if (typeof f != "string") return f;
			try {
				return JSON.parse(decodeURIComponent(f));
			} catch {
				return f;
			}
		}
		function He(f) {
			return f.replace(/[A-Z]/g, (l) => `-${l.toLowerCase()}`);
		}
		const we = {
			setDataAttribute(f, l, u) {
				f.setAttribute(`data-bs-${He(l)}`, u);
			},
			removeDataAttribute(f, l) {
				f.removeAttribute(`data-bs-${He(l)}`);
			},
			getDataAttributes(f) {
				if (!f) return {};
				const l = {},
					u = Object.keys(f.dataset).filter(
						(h) => h.startsWith("bs") && !h.startsWith("bsConfig")
					);
				for (const h of u) {
					let C = h.replace(/^bs/, "");
					(C = C.charAt(0).toLowerCase() + C.slice(1, C.length)),
						(l[C] = he(f.dataset[h]));
				}
				return l;
			},
			getDataAttribute: (f, l) => he(f.getAttribute(`data-bs-${He(l)}`)),
		};
		class Ne {
			static get Default() {
				return {};
			}
			static get DefaultType() {
				return {};
			}
			static get NAME() {
				throw new Error(
					'You have to implement the static method "NAME", for each component!'
				);
			}
			_getConfig(l) {
				return (
					(l = this._mergeConfigObj(l)),
					(l = this._configAfterMerge(l)),
					this._typeCheckConfig(l),
					l
				);
			}
			_configAfterMerge(l) {
				return l;
			}
			_mergeConfigObj(l, u) {
				const h = a(u) ? we.getDataAttribute(u, "config") : {};
				return {
					...this.constructor.Default,
					...(typeof h == "object" ? h : {}),
					...(a(u) ? we.getDataAttributes(u) : {}),
					...(typeof l == "object" ? l : {}),
				};
			}
			_typeCheckConfig(l, u = this.constructor.DefaultType) {
				for (const [C, k] of Object.entries(u)) {
					const O = l[C],
						I = a(O)
							? "element"
							: (h = O) == null
							? `${h}`
							: Object.prototype.toString
									.call(h)
									.match(/\s([a-z]+)/i)[1]
									.toLowerCase();
					if (!new RegExp(k).test(I))
						throw new TypeError(
							`${this.constructor.NAME.toUpperCase()}: Option "${C}" provided type "${I}" but expected type "${k}".`
						);
				}
				var h;
			}
		}
		class Pe extends Ne {
			constructor(l, u) {
				super(),
					(l = c(l)) &&
						((this._element = l),
						(this._config = this._getConfig(u)),
						r.set(this._element, this.constructor.DATA_KEY, this));
			}
			dispose() {
				r.remove(this._element, this.constructor.DATA_KEY),
					j.off(this._element, this.constructor.EVENT_KEY);
				for (const l of Object.getOwnPropertyNames(this))
					this[l] = null;
			}
			_queueCallback(l, u, h = !0) {
				E(l, u, h);
			}
			_getConfig(l) {
				return (
					(l = this._mergeConfigObj(l, this._element)),
					(l = this._configAfterMerge(l)),
					this._typeCheckConfig(l),
					l
				);
			}
			static getInstance(l) {
				return r.get(c(l), this.DATA_KEY);
			}
			static getOrCreateInstance(l, u = {}) {
				return (
					this.getInstance(l) ||
					new this(l, typeof u == "object" ? u : null)
				);
			}
			static get VERSION() {
				return "5.3.2";
			}
			static get DATA_KEY() {
				return `bs.${this.NAME}`;
			}
			static get EVENT_KEY() {
				return `.${this.DATA_KEY}`;
			}
			static eventName(l) {
				return `${l}${this.EVENT_KEY}`;
			}
		}
		const Gt = (f) => {
				let l = f.getAttribute("data-bs-target");
				if (!l || l === "#") {
					let u = f.getAttribute("href");
					if (!u || (!u.includes("#") && !u.startsWith(".")))
						return null;
					u.includes("#") &&
						!u.startsWith("#") &&
						(u = `#${u.split("#")[1]}`),
						(l = u && u !== "#" ? o(u.trim()) : null);
				}
				return l;
			},
			q = {
				find: (f, l = document.documentElement) =>
					[].concat(...Element.prototype.querySelectorAll.call(l, f)),
				findOne: (f, l = document.documentElement) =>
					Element.prototype.querySelector.call(l, f),
				children: (f, l) =>
					[].concat(...f.children).filter((u) => u.matches(l)),
				parents(f, l) {
					const u = [];
					let h = f.parentNode.closest(l);
					for (; h; ) u.push(h), (h = h.parentNode.closest(l));
					return u;
				},
				prev(f, l) {
					let u = f.previousElementSibling;
					for (; u; ) {
						if (u.matches(l)) return [u];
						u = u.previousElementSibling;
					}
					return [];
				},
				next(f, l) {
					let u = f.nextElementSibling;
					for (; u; ) {
						if (u.matches(l)) return [u];
						u = u.nextElementSibling;
					}
					return [];
				},
				focusableChildren(f) {
					const l = [
						"a",
						"button",
						"input",
						"textarea",
						"select",
						"details",
						"[tabindex]",
						'[contenteditable="true"]',
					]
						.map((u) => `${u}:not([tabindex^="-"])`)
						.join(",");
					return this.find(l, f).filter((u) => !p(u) && d(u));
				},
				getSelectorFromElement(f) {
					const l = Gt(f);
					return l && q.findOne(l) ? l : null;
				},
				getElementFromSelector(f) {
					const l = Gt(f);
					return l ? q.findOne(l) : null;
				},
				getMultipleElementsFromSelector(f) {
					const l = Gt(f);
					return l ? q.find(l) : [];
				},
			},
			Ye = (f, l = "hide") => {
				const u = `click.dismiss${f.EVENT_KEY}`,
					h = f.NAME;
				j.on(document, u, `[data-bs-dismiss="${h}"]`, function (C) {
					if (
						(["A", "AREA"].includes(this.tagName) &&
							C.preventDefault(),
						p(this))
					)
						return;
					const k =
						q.getElementFromSelector(this) || this.closest(`.${h}`);
					f.getOrCreateInstance(k)[l]();
				});
			},
			qt = ".bs.alert",
			yi = `close${qt}`,
			wi = `closed${qt}`;
		class gt extends Pe {
			static get NAME() {
				return "alert";
			}
			close() {
				if (j.trigger(this._element, yi).defaultPrevented) return;
				this._element.classList.remove("show");
				const l = this._element.classList.contains("fade");
				this._queueCallback(
					() => this._destroyElement(),
					this._element,
					l
				);
			}
			_destroyElement() {
				this._element.remove(),
					j.trigger(this._element, wi),
					this.dispose();
			}
			static jQueryInterface(l) {
				return this.each(function () {
					const u = gt.getOrCreateInstance(this);
					if (typeof l == "string") {
						if (
							u[l] === void 0 ||
							l.startsWith("_") ||
							l === "constructor"
						)
							throw new TypeError(`No method named "${l}"`);
						u[l](this);
					}
				});
			}
		}
		Ye(gt, "close"), y(gt);
		const Mn = '[data-bs-toggle="button"]';
		class Se extends Pe {
			static get NAME() {
				return "button";
			}
			toggle() {
				this._element.setAttribute(
					"aria-pressed",
					this._element.classList.toggle("active")
				);
			}
			static jQueryInterface(l) {
				return this.each(function () {
					const u = Se.getOrCreateInstance(this);
					l === "toggle" && u[l]();
				});
			}
		}
		j.on(document, "click.bs.button.data-api", Mn, (f) => {
			f.preventDefault();
			const l = f.target.closest(Mn);
			Se.getOrCreateInstance(l).toggle();
		}),
			y(Se);
		const fn = ".bs.swipe",
			Pr = `touchstart${fn}`,
			ka = `touchmove${fn}`,
			Dr = `touchend${fn}`,
			Ol = `pointerdown${fn}`,
			mo = `pointerup${fn}`,
			Tn = { endCallback: null, leftCallback: null, rightCallback: null },
			Ar = {
				endCallback: "(function|null)",
				leftCallback: "(function|null)",
				rightCallback: "(function|null)",
			};
		class Mr extends Ne {
			constructor(l, u) {
				super(),
					(this._element = l),
					l &&
						Mr.isSupported() &&
						((this._config = this._getConfig(u)),
						(this._deltaX = 0),
						(this._supportPointerEvents = !!window.PointerEvent),
						this._initEvents());
			}
			static get Default() {
				return Tn;
			}
			static get DefaultType() {
				return Ar;
			}
			static get NAME() {
				return "swipe";
			}
			dispose() {
				j.off(this._element, fn);
			}
			_start(l) {
				this._supportPointerEvents
					? this._eventIsPointerPenTouch(l) &&
					  (this._deltaX = l.clientX)
					: (this._deltaX = l.touches[0].clientX);
			}
			_end(l) {
				this._eventIsPointerPenTouch(l) &&
					(this._deltaX = l.clientX - this._deltaX),
					this._handleSwipe(),
					g(this._config.endCallback);
			}
			_move(l) {
				this._deltaX =
					l.touches && l.touches.length > 1
						? 0
						: l.touches[0].clientX - this._deltaX;
			}
			_handleSwipe() {
				const l = Math.abs(this._deltaX);
				if (l <= 40) return;
				const u = l / this._deltaX;
				(this._deltaX = 0),
					u &&
						g(
							u > 0
								? this._config.rightCallback
								: this._config.leftCallback
						);
			}
			_initEvents() {
				this._supportPointerEvents
					? (j.on(this._element, Ol, (l) => this._start(l)),
					  j.on(this._element, mo, (l) => this._end(l)),
					  this._element.classList.add("pointer-event"))
					: (j.on(this._element, Pr, (l) => this._start(l)),
					  j.on(this._element, ka, (l) => this._move(l)),
					  j.on(this._element, Dr, (l) => this._end(l)));
			}
			_eventIsPointerPenTouch(l) {
				return (
					this._supportPointerEvents &&
					(l.pointerType === "pen" || l.pointerType === "touch")
				);
			}
			static isSupported() {
				return (
					"ontouchstart" in document.documentElement ||
					navigator.maxTouchPoints > 0
				);
			}
		}
		const zt = ".bs.carousel",
			Rl = ".data-api",
			Pt = "next",
			In = "prev",
			$n = "left",
			Ir = "right",
			Ta = `slide${zt}`,
			_i = `slid${zt}`,
			xi = `keydown${zt}`,
			Pl = `mouseenter${zt}`,
			go = `mouseleave${zt}`,
			Na = `dragstart${zt}`,
			Dl = `load${zt}${Rl}`,
			ba = `click${zt}${Rl}`,
			vo = "carousel",
			Ei = "active",
			T = ".active",
			L = ".carousel-item",
			M = T + L,
			B = { ArrowLeft: Ir, ArrowRight: $n },
			Q = {
				interval: 5e3,
				keyboard: !0,
				pause: "hover",
				ride: !1,
				touch: !0,
				wrap: !0,
			},
			le = {
				interval: "(number|boolean)",
				keyboard: "boolean",
				pause: "(string|boolean)",
				ride: "(boolean|string)",
				touch: "boolean",
				wrap: "boolean",
			};
		class ee extends Pe {
			constructor(l, u) {
				super(l, u),
					(this._interval = null),
					(this._activeElement = null),
					(this._isSliding = !1),
					(this.touchTimeout = null),
					(this._swipeHelper = null),
					(this._indicatorsElement = q.findOne(
						".carousel-indicators",
						this._element
					)),
					this._addEventListeners(),
					this._config.ride === vo && this.cycle();
			}
			static get Default() {
				return Q;
			}
			static get DefaultType() {
				return le;
			}
			static get NAME() {
				return "carousel";
			}
			next() {
				this._slide(Pt);
			}
			nextWhenVisible() {
				!document.hidden && d(this._element) && this.next();
			}
			prev() {
				this._slide(In);
			}
			pause() {
				this._isSliding && s(this._element), this._clearInterval();
			}
			cycle() {
				this._clearInterval(),
					this._updateInterval(),
					(this._interval = setInterval(
						() => this.nextWhenVisible(),
						this._config.interval
					));
			}
			_maybeEnableCycle() {
				this._config.ride &&
					(this._isSliding
						? j.one(this._element, _i, () => this.cycle())
						: this.cycle());
			}
			to(l) {
				const u = this._getItems();
				if (l > u.length - 1 || l < 0) return;
				if (this._isSliding)
					return void j.one(this._element, _i, () => this.to(l));
				const h = this._getItemIndex(this._getActive());
				if (h === l) return;
				const C = l > h ? Pt : In;
				this._slide(C, u[l]);
			}
			dispose() {
				this._swipeHelper && this._swipeHelper.dispose(),
					super.dispose();
			}
			_configAfterMerge(l) {
				return (l.defaultInterval = l.interval), l;
			}
			_addEventListeners() {
				this._config.keyboard &&
					j.on(this._element, xi, (l) => this._keydown(l)),
					this._config.pause === "hover" &&
						(j.on(this._element, Pl, () => this.pause()),
						j.on(this._element, go, () =>
							this._maybeEnableCycle()
						)),
					this._config.touch &&
						Mr.isSupported() &&
						this._addTouchEventListeners();
			}
			_addTouchEventListeners() {
				for (const u of q.find(".carousel-item img", this._element))
					j.on(u, Na, (h) => h.preventDefault());
				const l = {
					leftCallback: () => this._slide(this._directionToOrder($n)),
					rightCallback: () =>
						this._slide(this._directionToOrder(Ir)),
					endCallback: () => {
						this._config.pause === "hover" &&
							(this.pause(),
							this.touchTimeout &&
								clearTimeout(this.touchTimeout),
							(this.touchTimeout = setTimeout(
								() => this._maybeEnableCycle(),
								500 + this._config.interval
							)));
					},
				};
				this._swipeHelper = new Mr(this._element, l);
			}
			_keydown(l) {
				if (/input|textarea/i.test(l.target.tagName)) return;
				const u = B[l.key];
				u &&
					(l.preventDefault(),
					this._slide(this._directionToOrder(u)));
			}
			_getItemIndex(l) {
				return this._getItems().indexOf(l);
			}
			_setActiveIndicatorElement(l) {
				if (!this._indicatorsElement) return;
				const u = q.findOne(T, this._indicatorsElement);
				u.classList.remove(Ei), u.removeAttribute("aria-current");
				const h = q.findOne(
					`[data-bs-slide-to="${l}"]`,
					this._indicatorsElement
				);
				h &&
					(h.classList.add(Ei),
					h.setAttribute("aria-current", "true"));
			}
			_updateInterval() {
				const l = this._activeElement || this._getActive();
				if (!l) return;
				const u = Number.parseInt(
					l.getAttribute("data-bs-interval"),
					10
				);
				this._config.interval = u || this._config.defaultInterval;
			}
			_slide(l, u = null) {
				if (this._isSliding) return;
				const h = this._getActive(),
					C = l === Pt,
					k = u || w(this._getItems(), h, C, this._config.wrap);
				if (k === h) return;
				const O = this._getItemIndex(k),
					I = (W) =>
						j.trigger(this._element, W, {
							relatedTarget: k,
							direction: this._orderToDirection(l),
							from: this._getItemIndex(h),
							to: O,
						});
				if (I(Ta).defaultPrevented || !h || !k) return;
				const U = !!this._interval;
				this.pause(),
					(this._isSliding = !0),
					this._setActiveIndicatorElement(O),
					(this._activeElement = k);
				const H = C ? "carousel-item-start" : "carousel-item-end",
					K = C ? "carousel-item-next" : "carousel-item-prev";
				k.classList.add(K),
					b(k),
					h.classList.add(H),
					k.classList.add(H),
					this._queueCallback(
						() => {
							k.classList.remove(H, K),
								k.classList.add(Ei),
								h.classList.remove(Ei, K, H),
								(this._isSliding = !1),
								I(_i);
						},
						h,
						this._isAnimated()
					),
					U && this.cycle();
			}
			_isAnimated() {
				return this._element.classList.contains("slide");
			}
			_getActive() {
				return q.findOne(M, this._element);
			}
			_getItems() {
				return q.find(L, this._element);
			}
			_clearInterval() {
				this._interval &&
					(clearInterval(this._interval), (this._interval = null));
			}
			_directionToOrder(l) {
				return R() ? (l === $n ? In : Pt) : l === $n ? Pt : In;
			}
			_orderToDirection(l) {
				return R() ? (l === In ? $n : Ir) : l === In ? Ir : $n;
			}
			static jQueryInterface(l) {
				return this.each(function () {
					const u = ee.getOrCreateInstance(this, l);
					if (typeof l != "number") {
						if (typeof l == "string") {
							if (
								u[l] === void 0 ||
								l.startsWith("_") ||
								l === "constructor"
							)
								throw new TypeError(`No method named "${l}"`);
							u[l]();
						}
					} else u.to(l);
				});
			}
		}
		j.on(document, ba, "[data-bs-slide], [data-bs-slide-to]", function (f) {
			const l = q.getElementFromSelector(this);
			if (!l || !l.classList.contains(vo)) return;
			f.preventDefault();
			const u = ee.getOrCreateInstance(l),
				h = this.getAttribute("data-bs-slide-to");
			return h
				? (u.to(h), void u._maybeEnableCycle())
				: we.getDataAttribute(this, "slide") === "next"
				? (u.next(), void u._maybeEnableCycle())
				: (u.prev(), void u._maybeEnableCycle());
		}),
			j.on(window, Dl, () => {
				const f = q.find('[data-bs-ride="carousel"]');
				for (const l of f) ee.getOrCreateInstance(l);
			}),
			y(ee);
		const Z = ".bs.collapse",
			J = `show${Z}`,
			pe = `shown${Z}`,
			st = `hide${Z}`,
			ae = `hidden${Z}`,
			be = `click${Z}.data-api`,
			De = "show",
			Xe = "collapse",
			Tt = "collapsing",
			$r = `:scope .${Xe} .${Xe}`,
			Fr = '[data-bs-toggle="collapse"]',
			or = { parent: null, toggle: !0 },
			Ut = { parent: "(null|element)", toggle: "boolean" };
		class hn extends Pe {
			constructor(l, u) {
				super(l, u),
					(this._isTransitioning = !1),
					(this._triggerArray = []);
				const h = q.find(Fr);
				for (const C of h) {
					const k = q.getSelectorFromElement(C),
						O = q.find(k).filter((I) => I === this._element);
					k !== null && O.length && this._triggerArray.push(C);
				}
				this._initializeChildren(),
					this._config.parent ||
						this._addAriaAndCollapsedClass(
							this._triggerArray,
							this._isShown()
						),
					this._config.toggle && this.toggle();
			}
			static get Default() {
				return or;
			}
			static get DefaultType() {
				return Ut;
			}
			static get NAME() {
				return "collapse";
			}
			toggle() {
				this._isShown() ? this.hide() : this.show();
			}
			show() {
				if (this._isTransitioning || this._isShown()) return;
				let l = [];
				if (
					(this._config.parent &&
						(l = this._getFirstLevelChildren(
							".collapse.show, .collapse.collapsing"
						)
							.filter((C) => C !== this._element)
							.map((C) =>
								hn.getOrCreateInstance(C, { toggle: !1 })
							)),
					(l.length && l[0]._isTransitioning) ||
						j.trigger(this._element, J).defaultPrevented)
				)
					return;
				for (const C of l) C.hide();
				const u = this._getDimension();
				this._element.classList.remove(Xe),
					this._element.classList.add(Tt),
					(this._element.style[u] = 0),
					this._addAriaAndCollapsedClass(this._triggerArray, !0),
					(this._isTransitioning = !0);
				const h = `scroll${u[0].toUpperCase() + u.slice(1)}`;
				this._queueCallback(
					() => {
						(this._isTransitioning = !1),
							this._element.classList.remove(Tt),
							this._element.classList.add(Xe, De),
							(this._element.style[u] = ""),
							j.trigger(this._element, pe);
					},
					this._element,
					!0
				),
					(this._element.style[u] = `${this._element[h]}px`);
			}
			hide() {
				if (
					this._isTransitioning ||
					!this._isShown() ||
					j.trigger(this._element, st).defaultPrevented
				)
					return;
				const l = this._getDimension();
				(this._element.style[l] = `${
					this._element.getBoundingClientRect()[l]
				}px`),
					b(this._element),
					this._element.classList.add(Tt),
					this._element.classList.remove(Xe, De);
				for (const u of this._triggerArray) {
					const h = q.getElementFromSelector(u);
					h &&
						!this._isShown(h) &&
						this._addAriaAndCollapsedClass([u], !1);
				}
				(this._isTransitioning = !0),
					(this._element.style[l] = ""),
					this._queueCallback(
						() => {
							(this._isTransitioning = !1),
								this._element.classList.remove(Tt),
								this._element.classList.add(Xe),
								j.trigger(this._element, ae);
						},
						this._element,
						!0
					);
			}
			_isShown(l = this._element) {
				return l.classList.contains(De);
			}
			_configAfterMerge(l) {
				return (l.toggle = !!l.toggle), (l.parent = c(l.parent)), l;
			}
			_getDimension() {
				return this._element.classList.contains("collapse-horizontal")
					? "width"
					: "height";
			}
			_initializeChildren() {
				if (!this._config.parent) return;
				const l = this._getFirstLevelChildren(Fr);
				for (const u of l) {
					const h = q.getElementFromSelector(u);
					h && this._addAriaAndCollapsedClass([u], this._isShown(h));
				}
			}
			_getFirstLevelChildren(l) {
				const u = q.find($r, this._config.parent);
				return q
					.find(l, this._config.parent)
					.filter((h) => !u.includes(h));
			}
			_addAriaAndCollapsedClass(l, u) {
				if (l.length)
					for (const h of l)
						h.classList.toggle("collapsed", !u),
							h.setAttribute("aria-expanded", u);
			}
			static jQueryInterface(l) {
				const u = {};
				return (
					typeof l == "string" &&
						/show|hide/.test(l) &&
						(u.toggle = !1),
					this.each(function () {
						const h = hn.getOrCreateInstance(this, u);
						if (typeof l == "string") {
							if (h[l] === void 0)
								throw new TypeError(`No method named "${l}"`);
							h[l]();
						}
					})
				);
			}
		}
		j.on(document, be, Fr, function (f) {
			(f.target.tagName === "A" ||
				(f.delegateTarget && f.delegateTarget.tagName === "A")) &&
				f.preventDefault();
			for (const l of q.getMultipleElementsFromSelector(this))
				hn.getOrCreateInstance(l, { toggle: !1 }).toggle();
		}),
			y(hn);
		var at = "top",
			vt = "bottom",
			yt = "right",
			Ge = "left",
			_e = "auto",
			ut = [at, vt, yt, Ge],
			je = "start",
			Dt = "end",
			yo = "clippingParents",
			wo = "viewport",
			Si = "popper",
			sf = "reference",
			ja = ut.reduce(function (f, l) {
				return f.concat([l + "-" + je, l + "-" + Dt]);
			}, []),
			La = [].concat(ut, [_e]).reduce(function (f, l) {
				return f.concat([l, l + "-" + je, l + "-" + Dt]);
			}, []),
			af = "beforeRead",
			uf = "read",
			cf = "afterRead",
			df = "beforeMain",
			ff = "main",
			hf = "afterMain",
			pf = "beforeWrite",
			mf = "write",
			gf = "afterWrite",
			vf = [af, uf, cf, df, ff, hf, pf, mf, gf];
		function Nn(f) {
			return f ? (f.nodeName || "").toLowerCase() : null;
		}
		function Bt(f) {
			if (f == null) return window;
			if (f.toString() !== "[object Window]") {
				var l = f.ownerDocument;
				return (l && l.defaultView) || window;
			}
			return f;
		}
		function zr(f) {
			return f instanceof Bt(f).Element || f instanceof Element;
		}
		function Jt(f) {
			return f instanceof Bt(f).HTMLElement || f instanceof HTMLElement;
		}
		function Oa(f) {
			return (
				typeof ShadowRoot < "u" &&
				(f instanceof Bt(f).ShadowRoot || f instanceof ShadowRoot)
			);
		}
		const Ra = {
			name: "applyStyles",
			enabled: !0,
			phase: "write",
			fn: function (f) {
				var l = f.state;
				Object.keys(l.elements).forEach(function (u) {
					var h = l.styles[u] || {},
						C = l.attributes[u] || {},
						k = l.elements[u];
					Jt(k) &&
						Nn(k) &&
						(Object.assign(k.style, h),
						Object.keys(C).forEach(function (O) {
							var I = C[O];
							I === !1
								? k.removeAttribute(O)
								: k.setAttribute(O, I === !0 ? "" : I);
						}));
				});
			},
			effect: function (f) {
				var l = f.state,
					u = {
						popper: {
							position: l.options.strategy,
							left: "0",
							top: "0",
							margin: "0",
						},
						arrow: { position: "absolute" },
						reference: {},
					};
				return (
					Object.assign(l.elements.popper.style, u.popper),
					(l.styles = u),
					l.elements.arrow &&
						Object.assign(l.elements.arrow.style, u.arrow),
					function () {
						Object.keys(l.elements).forEach(function (h) {
							var C = l.elements[h],
								k = l.attributes[h] || {},
								O = Object.keys(
									l.styles.hasOwnProperty(h)
										? l.styles[h]
										: u[h]
								).reduce(function (I, U) {
									return (I[U] = ""), I;
								}, {});
							Jt(C) &&
								Nn(C) &&
								(Object.assign(C.style, O),
								Object.keys(k).forEach(function (I) {
									C.removeAttribute(I);
								}));
						});
					}
				);
			},
			requires: ["computeStyles"],
		};
		function bn(f) {
			return f.split("-")[0];
		}
		var Ur = Math.max,
			Al = Math.min,
			Ci = Math.round;
		function Pa() {
			var f = navigator.userAgentData;
			return f != null && f.brands && Array.isArray(f.brands)
				? f.brands
						.map(function (l) {
							return l.brand + "/" + l.version;
						})
						.join(" ")
				: navigator.userAgent;
		}
		function yf() {
			return !/^((?!chrome|android).)*safari/i.test(Pa());
		}
		function ki(f, l, u) {
			l === void 0 && (l = !1), u === void 0 && (u = !1);
			var h = f.getBoundingClientRect(),
				C = 1,
				k = 1;
			l &&
				Jt(f) &&
				((C = (f.offsetWidth > 0 && Ci(h.width) / f.offsetWidth) || 1),
				(k =
					(f.offsetHeight > 0 && Ci(h.height) / f.offsetHeight) ||
					1));
			var O = (zr(f) ? Bt(f) : window).visualViewport,
				I = !yf() && u,
				U = (h.left + (I && O ? O.offsetLeft : 0)) / C,
				H = (h.top + (I && O ? O.offsetTop : 0)) / k,
				K = h.width / C,
				W = h.height / k;
			return {
				width: K,
				height: W,
				top: H,
				right: U + K,
				bottom: H + W,
				left: U,
				x: U,
				y: H,
			};
		}
		function Da(f) {
			var l = ki(f),
				u = f.offsetWidth,
				h = f.offsetHeight;
			return (
				Math.abs(l.width - u) <= 1 && (u = l.width),
				Math.abs(l.height - h) <= 1 && (h = l.height),
				{ x: f.offsetLeft, y: f.offsetTop, width: u, height: h }
			);
		}
		function wf(f, l) {
			var u = l.getRootNode && l.getRootNode();
			if (f.contains(l)) return !0;
			if (u && Oa(u)) {
				var h = l;
				do {
					if (h && f.isSameNode(h)) return !0;
					h = h.parentNode || h.host;
				} while (h);
			}
			return !1;
		}
		function Fn(f) {
			return Bt(f).getComputedStyle(f);
		}
		function Gy(f) {
			return ["table", "td", "th"].indexOf(Nn(f)) >= 0;
		}
		function lr(f) {
			return (
				(zr(f) ? f.ownerDocument : f.document) || window.document
			).documentElement;
		}
		function Ml(f) {
			return Nn(f) === "html"
				? f
				: f.assignedSlot ||
						f.parentNode ||
						(Oa(f) ? f.host : null) ||
						lr(f);
		}
		function _f(f) {
			return Jt(f) && Fn(f).position !== "fixed" ? f.offsetParent : null;
		}
		function _o(f) {
			for (
				var l = Bt(f), u = _f(f);
				u && Gy(u) && Fn(u).position === "static";

			)
				u = _f(u);
			return u &&
				(Nn(u) === "html" ||
					(Nn(u) === "body" && Fn(u).position === "static"))
				? l
				: u ||
						(function (h) {
							var C = /firefox/i.test(Pa());
							if (
								/Trident/i.test(Pa()) &&
								Jt(h) &&
								Fn(h).position === "fixed"
							)
								return null;
							var k = Ml(h);
							for (
								Oa(k) && (k = k.host);
								Jt(k) && ["html", "body"].indexOf(Nn(k)) < 0;

							) {
								var O = Fn(k);
								if (
									O.transform !== "none" ||
									O.perspective !== "none" ||
									O.contain === "paint" ||
									["transform", "perspective"].indexOf(
										O.willChange
									) !== -1 ||
									(C && O.willChange === "filter") ||
									(C && O.filter && O.filter !== "none")
								)
									return k;
								k = k.parentNode;
							}
							return null;
						})(f) ||
						l;
		}
		function Aa(f) {
			return ["top", "bottom"].indexOf(f) >= 0 ? "x" : "y";
		}
		function xo(f, l, u) {
			return Ur(f, Al(l, u));
		}
		function xf(f) {
			return Object.assign(
				{},
				{ top: 0, right: 0, bottom: 0, left: 0 },
				f
			);
		}
		function Ef(f, l) {
			return l.reduce(function (u, h) {
				return (u[h] = f), u;
			}, {});
		}
		const Sf = {
			name: "arrow",
			enabled: !0,
			phase: "main",
			fn: function (f) {
				var l,
					u = f.state,
					h = f.name,
					C = f.options,
					k = u.elements.arrow,
					O = u.modifiersData.popperOffsets,
					I = bn(u.placement),
					U = Aa(I),
					H = [Ge, yt].indexOf(I) >= 0 ? "height" : "width";
				if (k && O) {
					var K = (function (Oe, ke) {
							return xf(
								typeof (Oe =
									typeof Oe == "function"
										? Oe(
												Object.assign({}, ke.rects, {
													placement: ke.placement,
												})
										  )
										: Oe) != "number"
									? Oe
									: Ef(Oe, ut)
							);
						})(C.padding, u),
						W = Da(k),
						oe = U === "y" ? at : Ge,
						te = U === "y" ? vt : yt,
						re =
							u.rects.reference[H] +
							u.rects.reference[U] -
							O[U] -
							u.rects.popper[H],
						ne = O[U] - u.rects.reference[U],
						ie = _o(k),
						Le = ie
							? U === "y"
								? ie.clientHeight || 0
								: ie.clientWidth || 0
							: 0,
						$e = re / 2 - ne / 2,
						ce = K[oe],
						xe = Le - W[H] - K[te],
						se = Le / 2 - W[H] / 2 + $e,
						ge = xo(ce, se, xe),
						Ce = U;
					u.modifiersData[h] =
						(((l = {})[Ce] = ge), (l.centerOffset = ge - se), l);
				}
			},
			effect: function (f) {
				var l = f.state,
					u = f.options.element,
					h = u === void 0 ? "[data-popper-arrow]" : u;
				h != null &&
					(typeof h != "string" ||
						(h = l.elements.popper.querySelector(h))) &&
					wf(l.elements.popper, h) &&
					(l.elements.arrow = h);
			},
			requires: ["popperOffsets"],
			requiresIfExists: ["preventOverflow"],
		};
		function Ti(f) {
			return f.split("-")[1];
		}
		var qy = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
		function Cf(f) {
			var l,
				u = f.popper,
				h = f.popperRect,
				C = f.placement,
				k = f.variation,
				O = f.offsets,
				I = f.position,
				U = f.gpuAcceleration,
				H = f.adaptive,
				K = f.roundOffsets,
				W = f.isFixed,
				oe = O.x,
				te = oe === void 0 ? 0 : oe,
				re = O.y,
				ne = re === void 0 ? 0 : re,
				ie =
					typeof K == "function"
						? K({ x: te, y: ne })
						: { x: te, y: ne };
			(te = ie.x), (ne = ie.y);
			var Le = O.hasOwnProperty("x"),
				$e = O.hasOwnProperty("y"),
				ce = Ge,
				xe = at,
				se = window;
			if (H) {
				var ge = _o(u),
					Ce = "clientHeight",
					Oe = "clientWidth";
				ge === Bt(u) &&
					Fn((ge = lr(u))).position !== "static" &&
					I === "absolute" &&
					((Ce = "scrollHeight"), (Oe = "scrollWidth")),
					(C === at || ((C === Ge || C === yt) && k === Dt)) &&
						((xe = vt),
						(ne -=
							(W && ge === se && se.visualViewport
								? se.visualViewport.height
								: ge[Ce]) - h.height),
						(ne *= U ? 1 : -1)),
					(C !== Ge && ((C !== at && C !== vt) || k !== Dt)) ||
						((ce = yt),
						(te -=
							(W && ge === se && se.visualViewport
								? se.visualViewport.width
								: ge[Oe]) - h.width),
						(te *= U ? 1 : -1));
			}
			var ke,
				tt = Object.assign({ position: I }, H && qy),
				Wt =
					K === !0
						? (function (mn, Nt) {
								var en = mn.x,
									tn = mn.y,
									qe = Nt.devicePixelRatio || 1;
								return {
									x: Ci(en * qe) / qe || 0,
									y: Ci(tn * qe) / qe || 0,
								};
						  })({ x: te, y: ne }, Bt(u))
						: { x: te, y: ne };
			return (
				(te = Wt.x),
				(ne = Wt.y),
				U
					? Object.assign(
							{},
							tt,
							(((ke = {})[xe] = $e ? "0" : ""),
							(ke[ce] = Le ? "0" : ""),
							(ke.transform =
								(se.devicePixelRatio || 1) <= 1
									? "translate(" + te + "px, " + ne + "px)"
									: "translate3d(" +
									  te +
									  "px, " +
									  ne +
									  "px, 0)"),
							ke)
					  )
					: Object.assign(
							{},
							tt,
							(((l = {})[xe] = $e ? ne + "px" : ""),
							(l[ce] = Le ? te + "px" : ""),
							(l.transform = ""),
							l)
					  )
			);
		}
		const Ma = {
			name: "computeStyles",
			enabled: !0,
			phase: "beforeWrite",
			fn: function (f) {
				var l = f.state,
					u = f.options,
					h = u.gpuAcceleration,
					C = h === void 0 || h,
					k = u.adaptive,
					O = k === void 0 || k,
					I = u.roundOffsets,
					U = I === void 0 || I,
					H = {
						placement: bn(l.placement),
						variation: Ti(l.placement),
						popper: l.elements.popper,
						popperRect: l.rects.popper,
						gpuAcceleration: C,
						isFixed: l.options.strategy === "fixed",
					};
				l.modifiersData.popperOffsets != null &&
					(l.styles.popper = Object.assign(
						{},
						l.styles.popper,
						Cf(
							Object.assign({}, H, {
								offsets: l.modifiersData.popperOffsets,
								position: l.options.strategy,
								adaptive: O,
								roundOffsets: U,
							})
						)
					)),
					l.modifiersData.arrow != null &&
						(l.styles.arrow = Object.assign(
							{},
							l.styles.arrow,
							Cf(
								Object.assign({}, H, {
									offsets: l.modifiersData.arrow,
									position: "absolute",
									adaptive: !1,
									roundOffsets: U,
								})
							)
						)),
					(l.attributes.popper = Object.assign(
						{},
						l.attributes.popper,
						{ "data-popper-placement": l.placement }
					));
			},
			data: {},
		};
		var Il = { passive: !0 };
		const Ia = {
			name: "eventListeners",
			enabled: !0,
			phase: "write",
			fn: function () {},
			effect: function (f) {
				var l = f.state,
					u = f.instance,
					h = f.options,
					C = h.scroll,
					k = C === void 0 || C,
					O = h.resize,
					I = O === void 0 || O,
					U = Bt(l.elements.popper),
					H = [].concat(
						l.scrollParents.reference,
						l.scrollParents.popper
					);
				return (
					k &&
						H.forEach(function (K) {
							K.addEventListener("scroll", u.update, Il);
						}),
					I && U.addEventListener("resize", u.update, Il),
					function () {
						k &&
							H.forEach(function (K) {
								K.removeEventListener("scroll", u.update, Il);
							}),
							I && U.removeEventListener("resize", u.update, Il);
					}
				);
			},
			data: {},
		};
		var Jy = { left: "right", right: "left", bottom: "top", top: "bottom" };
		function $l(f) {
			return f.replace(/left|right|bottom|top/g, function (l) {
				return Jy[l];
			});
		}
		var Zy = { start: "end", end: "start" };
		function kf(f) {
			return f.replace(/start|end/g, function (l) {
				return Zy[l];
			});
		}
		function $a(f) {
			var l = Bt(f);
			return { scrollLeft: l.pageXOffset, scrollTop: l.pageYOffset };
		}
		function Fa(f) {
			return ki(lr(f)).left + $a(f).scrollLeft;
		}
		function za(f) {
			var l = Fn(f),
				u = l.overflow,
				h = l.overflowX,
				C = l.overflowY;
			return /auto|scroll|overlay|hidden/.test(u + C + h);
		}
		function Tf(f) {
			return ["html", "body", "#document"].indexOf(Nn(f)) >= 0
				? f.ownerDocument.body
				: Jt(f) && za(f)
				? f
				: Tf(Ml(f));
		}
		function Eo(f, l) {
			var u;
			l === void 0 && (l = []);
			var h = Tf(f),
				C = h === ((u = f.ownerDocument) == null ? void 0 : u.body),
				k = Bt(h),
				O = C ? [k].concat(k.visualViewport || [], za(h) ? h : []) : h,
				I = l.concat(O);
			return C ? I : I.concat(Eo(Ml(O)));
		}
		function Ua(f) {
			return Object.assign({}, f, {
				left: f.x,
				top: f.y,
				right: f.x + f.width,
				bottom: f.y + f.height,
			});
		}
		function Nf(f, l, u) {
			return l === wo
				? Ua(
						(function (h, C) {
							var k = Bt(h),
								O = lr(h),
								I = k.visualViewport,
								U = O.clientWidth,
								H = O.clientHeight,
								K = 0,
								W = 0;
							if (I) {
								(U = I.width), (H = I.height);
								var oe = yf();
								(oe || (!oe && C === "fixed")) &&
									((K = I.offsetLeft), (W = I.offsetTop));
							}
							return { width: U, height: H, x: K + Fa(h), y: W };
						})(f, u)
				  )
				: zr(l)
				? (function (h, C) {
						var k = ki(h, !1, C === "fixed");
						return (
							(k.top = k.top + h.clientTop),
							(k.left = k.left + h.clientLeft),
							(k.bottom = k.top + h.clientHeight),
							(k.right = k.left + h.clientWidth),
							(k.width = h.clientWidth),
							(k.height = h.clientHeight),
							(k.x = k.left),
							(k.y = k.top),
							k
						);
				  })(l, u)
				: Ua(
						(function (h) {
							var C,
								k = lr(h),
								O = $a(h),
								I =
									(C = h.ownerDocument) == null
										? void 0
										: C.body,
								U = Ur(
									k.scrollWidth,
									k.clientWidth,
									I ? I.scrollWidth : 0,
									I ? I.clientWidth : 0
								),
								H = Ur(
									k.scrollHeight,
									k.clientHeight,
									I ? I.scrollHeight : 0,
									I ? I.clientHeight : 0
								),
								K = -O.scrollLeft + Fa(h),
								W = -O.scrollTop;
							return (
								Fn(I || k).direction === "rtl" &&
									(K +=
										Ur(
											k.clientWidth,
											I ? I.clientWidth : 0
										) - U),
								{ width: U, height: H, x: K, y: W }
							);
						})(lr(f))
				  );
		}
		function bf(f) {
			var l,
				u = f.reference,
				h = f.element,
				C = f.placement,
				k = C ? bn(C) : null,
				O = C ? Ti(C) : null,
				I = u.x + u.width / 2 - h.width / 2,
				U = u.y + u.height / 2 - h.height / 2;
			switch (k) {
				case at:
					l = { x: I, y: u.y - h.height };
					break;
				case vt:
					l = { x: I, y: u.y + u.height };
					break;
				case yt:
					l = { x: u.x + u.width, y: U };
					break;
				case Ge:
					l = { x: u.x - h.width, y: U };
					break;
				default:
					l = { x: u.x, y: u.y };
			}
			var H = k ? Aa(k) : null;
			if (H != null) {
				var K = H === "y" ? "height" : "width";
				switch (O) {
					case je:
						l[H] = l[H] - (u[K] / 2 - h[K] / 2);
						break;
					case Dt:
						l[H] = l[H] + (u[K] / 2 - h[K] / 2);
				}
			}
			return l;
		}
		function Ni(f, l) {
			l === void 0 && (l = {});
			var u = l,
				h = u.placement,
				C = h === void 0 ? f.placement : h,
				k = u.strategy,
				O = k === void 0 ? f.strategy : k,
				I = u.boundary,
				U = I === void 0 ? yo : I,
				H = u.rootBoundary,
				K = H === void 0 ? wo : H,
				W = u.elementContext,
				oe = W === void 0 ? Si : W,
				te = u.altBoundary,
				re = te !== void 0 && te,
				ne = u.padding,
				ie = ne === void 0 ? 0 : ne,
				Le = xf(typeof ie != "number" ? ie : Ef(ie, ut)),
				$e = oe === Si ? sf : Si,
				ce = f.rects.popper,
				xe = f.elements[re ? $e : oe],
				se = (function (Nt, en, tn, qe) {
					var jn =
							en === "clippingParents"
								? (function (Ae) {
										var bt = Eo(Ml(Ae)),
											nn =
												["absolute", "fixed"].indexOf(
													Fn(Ae).position
												) >= 0 && Jt(Ae)
													? _o(Ae)
													: Ae;
										return zr(nn)
											? bt.filter(function (ar) {
													return (
														zr(ar) &&
														wf(ar, nn) &&
														Nn(ar) !== "body"
													);
											  })
											: [];
								  })(Nt)
								: [].concat(en),
						Ln = [].concat(jn, [tn]),
						Li = Ln[0],
						ft = Ln.reduce(function (Ae, bt) {
							var nn = Nf(Nt, bt, qe);
							return (
								(Ae.top = Ur(nn.top, Ae.top)),
								(Ae.right = Al(nn.right, Ae.right)),
								(Ae.bottom = Al(nn.bottom, Ae.bottom)),
								(Ae.left = Ur(nn.left, Ae.left)),
								Ae
							);
						}, Nf(Nt, Li, qe));
					return (
						(ft.width = ft.right - ft.left),
						(ft.height = ft.bottom - ft.top),
						(ft.x = ft.left),
						(ft.y = ft.top),
						ft
					);
				})(
					zr(xe) ? xe : xe.contextElement || lr(f.elements.popper),
					U,
					K,
					O
				),
				ge = ki(f.elements.reference),
				Ce = bf({
					reference: ge,
					element: ce,
					strategy: "absolute",
					placement: C,
				}),
				Oe = Ua(Object.assign({}, ce, Ce)),
				ke = oe === Si ? Oe : ge,
				tt = {
					top: se.top - ke.top + Le.top,
					bottom: ke.bottom - se.bottom + Le.bottom,
					left: se.left - ke.left + Le.left,
					right: ke.right - se.right + Le.right,
				},
				Wt = f.modifiersData.offset;
			if (oe === Si && Wt) {
				var mn = Wt[C];
				Object.keys(tt).forEach(function (Nt) {
					var en = [yt, vt].indexOf(Nt) >= 0 ? 1 : -1,
						tn = [at, vt].indexOf(Nt) >= 0 ? "y" : "x";
					tt[Nt] += mn[tn] * en;
				});
			}
			return tt;
		}
		function e0(f, l) {
			l === void 0 && (l = {});
			var u = l,
				h = u.placement,
				C = u.boundary,
				k = u.rootBoundary,
				O = u.padding,
				I = u.flipVariations,
				U = u.allowedAutoPlacements,
				H = U === void 0 ? La : U,
				K = Ti(h),
				W = K
					? I
						? ja
						: ja.filter(function (re) {
								return Ti(re) === K;
						  })
					: ut,
				oe = W.filter(function (re) {
					return H.indexOf(re) >= 0;
				});
			oe.length === 0 && (oe = W);
			var te = oe.reduce(function (re, ne) {
				return (
					(re[ne] = Ni(f, {
						placement: ne,
						boundary: C,
						rootBoundary: k,
						padding: O,
					})[bn(ne)]),
					re
				);
			}, {});
			return Object.keys(te).sort(function (re, ne) {
				return te[re] - te[ne];
			});
		}
		const jf = {
			name: "flip",
			enabled: !0,
			phase: "main",
			fn: function (f) {
				var l = f.state,
					u = f.options,
					h = f.name;
				if (!l.modifiersData[h]._skip) {
					for (
						var C = u.mainAxis,
							k = C === void 0 || C,
							O = u.altAxis,
							I = O === void 0 || O,
							U = u.fallbackPlacements,
							H = u.padding,
							K = u.boundary,
							W = u.rootBoundary,
							oe = u.altBoundary,
							te = u.flipVariations,
							re = te === void 0 || te,
							ne = u.allowedAutoPlacements,
							ie = l.options.placement,
							Le = bn(ie),
							$e =
								U ||
								(Le !== ie && re
									? (function (Ae) {
											if (bn(Ae) === _e) return [];
											var bt = $l(Ae);
											return [kf(Ae), bt, kf(bt)];
									  })(ie)
									: [$l(ie)]),
							ce = [ie].concat($e).reduce(function (Ae, bt) {
								return Ae.concat(
									bn(bt) === _e
										? e0(l, {
												placement: bt,
												boundary: K,
												rootBoundary: W,
												padding: H,
												flipVariations: re,
												allowedAutoPlacements: ne,
										  })
										: bt
								);
							}, []),
							xe = l.rects.reference,
							se = l.rects.popper,
							ge = new Map(),
							Ce = !0,
							Oe = ce[0],
							ke = 0;
						ke < ce.length;
						ke++
					) {
						var tt = ce[ke],
							Wt = bn(tt),
							mn = Ti(tt) === je,
							Nt = [at, vt].indexOf(Wt) >= 0,
							en = Nt ? "width" : "height",
							tn = Ni(l, {
								placement: tt,
								boundary: K,
								rootBoundary: W,
								altBoundary: oe,
								padding: H,
							}),
							qe = Nt ? (mn ? yt : Ge) : mn ? vt : at;
						xe[en] > se[en] && (qe = $l(qe));
						var jn = $l(qe),
							Ln = [];
						if (
							(k && Ln.push(tn[Wt] <= 0),
							I && Ln.push(tn[qe] <= 0, tn[jn] <= 0),
							Ln.every(function (Ae) {
								return Ae;
							}))
						) {
							(Oe = tt), (Ce = !1);
							break;
						}
						ge.set(tt, Ln);
					}
					if (Ce)
						for (
							var Li = function (Ae) {
									var bt = ce.find(function (nn) {
										var ar = ge.get(nn);
										if (ar)
											return ar
												.slice(0, Ae)
												.every(function (Ql) {
													return Ql;
												});
									});
									if (bt) return (Oe = bt), "break";
								},
								ft = re ? 3 : 1;
							ft > 0 && Li(ft) !== "break";
							ft--
						);
					l.placement !== Oe &&
						((l.modifiersData[h]._skip = !0),
						(l.placement = Oe),
						(l.reset = !0));
				}
			},
			requiresIfExists: ["offset"],
			data: { _skip: !1 },
		};
		function Lf(f, l, u) {
			return (
				u === void 0 && (u = { x: 0, y: 0 }),
				{
					top: f.top - l.height - u.y,
					right: f.right - l.width + u.x,
					bottom: f.bottom - l.height + u.y,
					left: f.left - l.width - u.x,
				}
			);
		}
		function Of(f) {
			return [at, yt, vt, Ge].some(function (l) {
				return f[l] >= 0;
			});
		}
		const Rf = {
				name: "hide",
				enabled: !0,
				phase: "main",
				requiresIfExists: ["preventOverflow"],
				fn: function (f) {
					var l = f.state,
						u = f.name,
						h = l.rects.reference,
						C = l.rects.popper,
						k = l.modifiersData.preventOverflow,
						O = Ni(l, { elementContext: "reference" }),
						I = Ni(l, { altBoundary: !0 }),
						U = Lf(O, h),
						H = Lf(I, C, k),
						K = Of(U),
						W = Of(H);
					(l.modifiersData[u] = {
						referenceClippingOffsets: U,
						popperEscapeOffsets: H,
						isReferenceHidden: K,
						hasPopperEscaped: W,
					}),
						(l.attributes.popper = Object.assign(
							{},
							l.attributes.popper,
							{
								"data-popper-reference-hidden": K,
								"data-popper-escaped": W,
							}
						));
				},
			},
			Pf = {
				name: "offset",
				enabled: !0,
				phase: "main",
				requires: ["popperOffsets"],
				fn: function (f) {
					var l = f.state,
						u = f.options,
						h = f.name,
						C = u.offset,
						k = C === void 0 ? [0, 0] : C,
						O = La.reduce(function (K, W) {
							return (
								(K[W] = (function (oe, te, re) {
									var ne = bn(oe),
										ie = [Ge, at].indexOf(ne) >= 0 ? -1 : 1,
										Le =
											typeof re == "function"
												? re(
														Object.assign({}, te, {
															placement: oe,
														})
												  )
												: re,
										$e = Le[0],
										ce = Le[1];
									return (
										($e = $e || 0),
										(ce = (ce || 0) * ie),
										[Ge, yt].indexOf(ne) >= 0
											? { x: ce, y: $e }
											: { x: $e, y: ce }
									);
								})(W, l.rects, k)),
								K
							);
						}, {}),
						I = O[l.placement],
						U = I.x,
						H = I.y;
					l.modifiersData.popperOffsets != null &&
						((l.modifiersData.popperOffsets.x += U),
						(l.modifiersData.popperOffsets.y += H)),
						(l.modifiersData[h] = O);
				},
			},
			Ba = {
				name: "popperOffsets",
				enabled: !0,
				phase: "read",
				fn: function (f) {
					var l = f.state,
						u = f.name;
					l.modifiersData[u] = bf({
						reference: l.rects.reference,
						element: l.rects.popper,
						strategy: "absolute",
						placement: l.placement,
					});
				},
				data: {},
			},
			Df = {
				name: "preventOverflow",
				enabled: !0,
				phase: "main",
				fn: function (f) {
					var l = f.state,
						u = f.options,
						h = f.name,
						C = u.mainAxis,
						k = C === void 0 || C,
						O = u.altAxis,
						I = O !== void 0 && O,
						U = u.boundary,
						H = u.rootBoundary,
						K = u.altBoundary,
						W = u.padding,
						oe = u.tether,
						te = oe === void 0 || oe,
						re = u.tetherOffset,
						ne = re === void 0 ? 0 : re,
						ie = Ni(l, {
							boundary: U,
							rootBoundary: H,
							padding: W,
							altBoundary: K,
						}),
						Le = bn(l.placement),
						$e = Ti(l.placement),
						ce = !$e,
						xe = Aa(Le),
						se = xe === "x" ? "y" : "x",
						ge = l.modifiersData.popperOffsets,
						Ce = l.rects.reference,
						Oe = l.rects.popper,
						ke =
							typeof ne == "function"
								? ne(
										Object.assign({}, l.rects, {
											placement: l.placement,
										})
								  )
								: ne,
						tt =
							typeof ke == "number"
								? { mainAxis: ke, altAxis: ke }
								: Object.assign(
										{ mainAxis: 0, altAxis: 0 },
										ke
								  ),
						Wt = l.modifiersData.offset
							? l.modifiersData.offset[l.placement]
							: null,
						mn = { x: 0, y: 0 };
					if (ge) {
						if (k) {
							var Nt,
								en = xe === "y" ? at : Ge,
								tn = xe === "y" ? vt : yt,
								qe = xe === "y" ? "height" : "width",
								jn = ge[xe],
								Ln = jn + ie[en],
								Li = jn - ie[tn],
								ft = te ? -Oe[qe] / 2 : 0,
								Ae = $e === je ? Ce[qe] : Oe[qe],
								bt = $e === je ? -Oe[qe] : -Ce[qe],
								nn = l.elements.arrow,
								ar =
									te && nn ? Da(nn) : { width: 0, height: 0 },
								Ql = l.modifiersData["arrow#persistent"]
									? l.modifiersData["arrow#persistent"]
											.padding
									: { top: 0, right: 0, bottom: 0, left: 0 },
								_h = Ql[en],
								xh = Ql[tn],
								Yl = xo(0, Ce[qe], ar[qe]),
								jw = ce
									? Ce[qe] / 2 - ft - Yl - _h - tt.mainAxis
									: Ae - Yl - _h - tt.mainAxis,
								Lw = ce
									? -Ce[qe] / 2 + ft + Yl + xh + tt.mainAxis
									: bt + Yl + xh + tt.mainAxis,
								tu = l.elements.arrow && _o(l.elements.arrow),
								Ow = tu
									? xe === "y"
										? tu.clientTop || 0
										: tu.clientLeft || 0
									: 0,
								Eh =
									(Nt = Wt == null ? void 0 : Wt[xe]) != null
										? Nt
										: 0,
								Rw = jn + Lw - Eh,
								Sh = xo(
									te ? Al(Ln, jn + jw - Eh - Ow) : Ln,
									jn,
									te ? Ur(Li, Rw) : Li
								);
							(ge[xe] = Sh), (mn[xe] = Sh - jn);
						}
						if (I) {
							var Ch,
								Pw = xe === "x" ? at : Ge,
								Dw = xe === "x" ? vt : yt,
								Xr = ge[se],
								Xl = se === "y" ? "height" : "width",
								kh = Xr + ie[Pw],
								Th = Xr - ie[Dw],
								nu = [at, Ge].indexOf(Le) !== -1,
								Nh =
									(Ch = Wt == null ? void 0 : Wt[se]) != null
										? Ch
										: 0,
								bh = nu
									? kh
									: Xr - Ce[Xl] - Oe[Xl] - Nh + tt.altAxis,
								jh = nu
									? Xr + Ce[Xl] + Oe[Xl] - Nh - tt.altAxis
									: Th,
								Lh =
									te && nu
										? (function (Aw, Mw, ru) {
												var Oh = xo(Aw, Mw, ru);
												return Oh > ru ? ru : Oh;
										  })(bh, Xr, jh)
										: xo(te ? bh : kh, Xr, te ? jh : Th);
							(ge[se] = Lh), (mn[se] = Lh - Xr);
						}
						l.modifiersData[h] = mn;
					}
				},
				requiresIfExists: ["offset"],
			};
		function t0(f, l, u) {
			u === void 0 && (u = !1);
			var h,
				C,
				k = Jt(l),
				O =
					Jt(l) &&
					(function (W) {
						var oe = W.getBoundingClientRect(),
							te = Ci(oe.width) / W.offsetWidth || 1,
							re = Ci(oe.height) / W.offsetHeight || 1;
						return te !== 1 || re !== 1;
					})(l),
				I = lr(l),
				U = ki(f, O, u),
				H = { scrollLeft: 0, scrollTop: 0 },
				K = { x: 0, y: 0 };
			return (
				(k || (!k && !u)) &&
					((Nn(l) !== "body" || za(I)) &&
						(H =
							(h = l) !== Bt(h) && Jt(h)
								? {
										scrollLeft: (C = h).scrollLeft,
										scrollTop: C.scrollTop,
								  }
								: $a(h)),
					Jt(l)
						? (((K = ki(l, !0)).x += l.clientLeft),
						  (K.y += l.clientTop))
						: I && (K.x = Fa(I))),
				{
					x: U.left + H.scrollLeft - K.x,
					y: U.top + H.scrollTop - K.y,
					width: U.width,
					height: U.height,
				}
			);
		}
		function n0(f) {
			var l = new Map(),
				u = new Set(),
				h = [];
			function C(k) {
				u.add(k.name),
					[]
						.concat(k.requires || [], k.requiresIfExists || [])
						.forEach(function (O) {
							if (!u.has(O)) {
								var I = l.get(O);
								I && C(I);
							}
						}),
					h.push(k);
			}
			return (
				f.forEach(function (k) {
					l.set(k.name, k);
				}),
				f.forEach(function (k) {
					u.has(k.name) || C(k);
				}),
				h
			);
		}
		var Af = { placement: "bottom", modifiers: [], strategy: "absolute" };
		function Mf() {
			for (var f = arguments.length, l = new Array(f), u = 0; u < f; u++)
				l[u] = arguments[u];
			return !l.some(function (h) {
				return !(h && typeof h.getBoundingClientRect == "function");
			});
		}
		function Fl(f) {
			f === void 0 && (f = {});
			var l = f,
				u = l.defaultModifiers,
				h = u === void 0 ? [] : u,
				C = l.defaultOptions,
				k = C === void 0 ? Af : C;
			return function (O, I, U) {
				U === void 0 && (U = k);
				var H,
					K,
					W = {
						placement: "bottom",
						orderedModifiers: [],
						options: Object.assign({}, Af, k),
						modifiersData: {},
						elements: { reference: O, popper: I },
						attributes: {},
						styles: {},
					},
					oe = [],
					te = !1,
					re = {
						state: W,
						setOptions: function (ie) {
							var Le =
								typeof ie == "function" ? ie(W.options) : ie;
							ne(),
								(W.options = Object.assign(
									{},
									k,
									W.options,
									Le
								)),
								(W.scrollParents = {
									reference: zr(O)
										? Eo(O)
										: O.contextElement
										? Eo(O.contextElement)
										: [],
									popper: Eo(I),
								});
							var $e,
								ce,
								xe = (function (se) {
									var ge = n0(se);
									return vf.reduce(function (Ce, Oe) {
										return Ce.concat(
											ge.filter(function (ke) {
												return ke.phase === Oe;
											})
										);
									}, []);
								})(
									(($e = [].concat(h, W.options.modifiers)),
									(ce = $e.reduce(function (se, ge) {
										var Ce = se[ge.name];
										return (
											(se[ge.name] = Ce
												? Object.assign({}, Ce, ge, {
														options: Object.assign(
															{},
															Ce.options,
															ge.options
														),
														data: Object.assign(
															{},
															Ce.data,
															ge.data
														),
												  })
												: ge),
											se
										);
									}, {})),
									Object.keys(ce).map(function (se) {
										return ce[se];
									}))
								);
							return (
								(W.orderedModifiers = xe.filter(function (se) {
									return se.enabled;
								})),
								W.orderedModifiers.forEach(function (se) {
									var ge = se.name,
										Ce = se.options,
										Oe = Ce === void 0 ? {} : Ce,
										ke = se.effect;
									if (typeof ke == "function") {
										var tt = ke({
											state: W,
											name: ge,
											instance: re,
											options: Oe,
										});
										oe.push(tt || function () {});
									}
								}),
								re.update()
							);
						},
						forceUpdate: function () {
							if (!te) {
								var ie = W.elements,
									Le = ie.reference,
									$e = ie.popper;
								if (Mf(Le, $e)) {
									(W.rects = {
										reference: t0(
											Le,
											_o($e),
											W.options.strategy === "fixed"
										),
										popper: Da($e),
									}),
										(W.reset = !1),
										(W.placement = W.options.placement),
										W.orderedModifiers.forEach(function (
											ke
										) {
											return (W.modifiersData[ke.name] =
												Object.assign({}, ke.data));
										});
									for (
										var ce = 0;
										ce < W.orderedModifiers.length;
										ce++
									)
										if (W.reset !== !0) {
											var xe = W.orderedModifiers[ce],
												se = xe.fn,
												ge = xe.options,
												Ce = ge === void 0 ? {} : ge,
												Oe = xe.name;
											typeof se == "function" &&
												(W =
													se({
														state: W,
														options: Ce,
														name: Oe,
														instance: re,
													}) || W);
										} else (W.reset = !1), (ce = -1);
								}
							}
						},
						update:
							((H = function () {
								return new Promise(function (ie) {
									re.forceUpdate(), ie(W);
								});
							}),
							function () {
								return (
									K ||
										(K = new Promise(function (ie) {
											Promise.resolve().then(function () {
												(K = void 0), ie(H());
											});
										})),
									K
								);
							}),
						destroy: function () {
							ne(), (te = !0);
						},
					};
				if (!Mf(O, I)) return re;
				function ne() {
					oe.forEach(function (ie) {
						return ie();
					}),
						(oe = []);
				}
				return (
					re.setOptions(U).then(function (ie) {
						!te && U.onFirstUpdate && U.onFirstUpdate(ie);
					}),
					re
				);
			};
		}
		var r0 = Fl(),
			i0 = Fl({ defaultModifiers: [Ia, Ba, Ma, Ra] }),
			Wa = Fl({ defaultModifiers: [Ia, Ba, Ma, Ra, Pf, jf, Df, Sf, Rf] });
		const If = Object.freeze(
				Object.defineProperty(
					{
						__proto__: null,
						afterMain: hf,
						afterRead: cf,
						afterWrite: gf,
						applyStyles: Ra,
						arrow: Sf,
						auto: _e,
						basePlacements: ut,
						beforeMain: df,
						beforeRead: af,
						beforeWrite: pf,
						bottom: vt,
						clippingParents: yo,
						computeStyles: Ma,
						createPopper: Wa,
						createPopperBase: r0,
						createPopperLite: i0,
						detectOverflow: Ni,
						end: Dt,
						eventListeners: Ia,
						flip: jf,
						hide: Rf,
						left: Ge,
						main: ff,
						modifierPhases: vf,
						offset: Pf,
						placements: La,
						popper: Si,
						popperGenerator: Fl,
						popperOffsets: Ba,
						preventOverflow: Df,
						read: uf,
						reference: sf,
						right: yt,
						start: je,
						top: at,
						variationPlacements: ja,
						viewport: wo,
						write: mf,
					},
					Symbol.toStringTag,
					{ value: "Module" }
				)
			),
			$f = "dropdown",
			Br = ".bs.dropdown",
			Ha = ".data-api",
			o0 = "ArrowUp",
			Ff = "ArrowDown",
			l0 = `hide${Br}`,
			s0 = `hidden${Br}`,
			a0 = `show${Br}`,
			u0 = `shown${Br}`,
			zf = `click${Br}${Ha}`,
			Uf = `keydown${Br}${Ha}`,
			c0 = `keyup${Br}${Ha}`,
			bi = "show",
			Wr = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
			d0 = `${Wr}.${bi}`,
			zl = ".dropdown-menu",
			f0 = R() ? "top-end" : "top-start",
			h0 = R() ? "top-start" : "top-end",
			p0 = R() ? "bottom-end" : "bottom-start",
			m0 = R() ? "bottom-start" : "bottom-end",
			g0 = R() ? "left-start" : "right-start",
			v0 = R() ? "right-start" : "left-start",
			y0 = {
				autoClose: !0,
				boundary: "clippingParents",
				display: "dynamic",
				offset: [0, 2],
				popperConfig: null,
				reference: "toggle",
			},
			w0 = {
				autoClose: "(boolean|string)",
				boundary: "(string|element)",
				display: "string",
				offset: "(array|string|function)",
				popperConfig: "(null|object|function)",
				reference: "(string|element|object)",
			};
		class pn extends Pe {
			constructor(l, u) {
				super(l, u),
					(this._popper = null),
					(this._parent = this._element.parentNode),
					(this._menu =
						q.next(this._element, zl)[0] ||
						q.prev(this._element, zl)[0] ||
						q.findOne(zl, this._parent)),
					(this._inNavbar = this._detectNavbar());
			}
			static get Default() {
				return y0;
			}
			static get DefaultType() {
				return w0;
			}
			static get NAME() {
				return $f;
			}
			toggle() {
				return this._isShown() ? this.hide() : this.show();
			}
			show() {
				if (p(this._element) || this._isShown()) return;
				const l = { relatedTarget: this._element };
				if (!j.trigger(this._element, a0, l).defaultPrevented) {
					if (
						(this._createPopper(),
						"ontouchstart" in document.documentElement &&
							!this._parent.closest(".navbar-nav"))
					)
						for (const u of [].concat(...document.body.children))
							j.on(u, "mouseover", m);
					this._element.focus(),
						this._element.setAttribute("aria-expanded", !0),
						this._menu.classList.add(bi),
						this._element.classList.add(bi),
						j.trigger(this._element, u0, l);
				}
			}
			hide() {
				if (p(this._element) || !this._isShown()) return;
				const l = { relatedTarget: this._element };
				this._completeHide(l);
			}
			dispose() {
				this._popper && this._popper.destroy(), super.dispose();
			}
			update() {
				(this._inNavbar = this._detectNavbar()),
					this._popper && this._popper.update();
			}
			_completeHide(l) {
				if (!j.trigger(this._element, l0, l).defaultPrevented) {
					if ("ontouchstart" in document.documentElement)
						for (const u of [].concat(...document.body.children))
							j.off(u, "mouseover", m);
					this._popper && this._popper.destroy(),
						this._menu.classList.remove(bi),
						this._element.classList.remove(bi),
						this._element.setAttribute("aria-expanded", "false"),
						we.removeDataAttribute(this._menu, "popper"),
						j.trigger(this._element, s0, l);
				}
			}
			_getConfig(l) {
				if (
					typeof (l = super._getConfig(l)).reference == "object" &&
					!a(l.reference) &&
					typeof l.reference.getBoundingClientRect != "function"
				)
					throw new TypeError(
						`${$f.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
					);
				return l;
			}
			_createPopper() {
				if (If === void 0)
					throw new TypeError(
						"Bootstrap's dropdowns require Popper (https://popper.js.org)"
					);
				let l = this._element;
				this._config.reference === "parent"
					? (l = this._parent)
					: a(this._config.reference)
					? (l = c(this._config.reference))
					: typeof this._config.reference == "object" &&
					  (l = this._config.reference);
				const u = this._getPopperConfig();
				this._popper = Wa(l, this._menu, u);
			}
			_isShown() {
				return this._menu.classList.contains(bi);
			}
			_getPlacement() {
				const l = this._parent;
				if (l.classList.contains("dropend")) return g0;
				if (l.classList.contains("dropstart")) return v0;
				if (l.classList.contains("dropup-center")) return "top";
				if (l.classList.contains("dropdown-center")) return "bottom";
				const u =
					getComputedStyle(this._menu)
						.getPropertyValue("--bs-position")
						.trim() === "end";
				return l.classList.contains("dropup")
					? u
						? h0
						: f0
					: u
					? m0
					: p0;
			}
			_detectNavbar() {
				return this._element.closest(".navbar") !== null;
			}
			_getOffset() {
				const { offset: l } = this._config;
				return typeof l == "string"
					? l.split(",").map((u) => Number.parseInt(u, 10))
					: typeof l == "function"
					? (u) => l(u, this._element)
					: l;
			}
			_getPopperConfig() {
				const l = {
					placement: this._getPlacement(),
					modifiers: [
						{
							name: "preventOverflow",
							options: { boundary: this._config.boundary },
						},
						{
							name: "offset",
							options: { offset: this._getOffset() },
						},
					],
				};
				return (
					(this._inNavbar || this._config.display === "static") &&
						(we.setDataAttribute(this._menu, "popper", "static"),
						(l.modifiers = [{ name: "applyStyles", enabled: !1 }])),
					{ ...l, ...g(this._config.popperConfig, [l]) }
				);
			}
			_selectMenuItem({ key: l, target: u }) {
				const h = q
					.find(
						".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
						this._menu
					)
					.filter((C) => d(C));
				h.length && w(h, u, l === Ff, !h.includes(u)).focus();
			}
			static jQueryInterface(l) {
				return this.each(function () {
					const u = pn.getOrCreateInstance(this, l);
					if (typeof l == "string") {
						if (u[l] === void 0)
							throw new TypeError(`No method named "${l}"`);
						u[l]();
					}
				});
			}
			static clearMenus(l) {
				if (l.button === 2 || (l.type === "keyup" && l.key !== "Tab"))
					return;
				const u = q.find(d0);
				for (const h of u) {
					const C = pn.getInstance(h);
					if (!C || C._config.autoClose === !1) continue;
					const k = l.composedPath(),
						O = k.includes(C._menu);
					if (
						k.includes(C._element) ||
						(C._config.autoClose === "inside" && !O) ||
						(C._config.autoClose === "outside" && O) ||
						(C._menu.contains(l.target) &&
							((l.type === "keyup" && l.key === "Tab") ||
								/input|select|option|textarea|form/i.test(
									l.target.tagName
								)))
					)
						continue;
					const I = { relatedTarget: C._element };
					l.type === "click" && (I.clickEvent = l),
						C._completeHide(I);
				}
			}
			static dataApiKeydownHandler(l) {
				const u = /input|textarea/i.test(l.target.tagName),
					h = l.key === "Escape",
					C = [o0, Ff].includes(l.key);
				if ((!C && !h) || (u && !h)) return;
				l.preventDefault();
				const k = this.matches(Wr)
						? this
						: q.prev(this, Wr)[0] ||
						  q.next(this, Wr)[0] ||
						  q.findOne(Wr, l.delegateTarget.parentNode),
					O = pn.getOrCreateInstance(k);
				if (C)
					return (
						l.stopPropagation(), O.show(), void O._selectMenuItem(l)
					);
				O._isShown() && (l.stopPropagation(), O.hide(), k.focus());
			}
		}
		j.on(document, Uf, Wr, pn.dataApiKeydownHandler),
			j.on(document, Uf, zl, pn.dataApiKeydownHandler),
			j.on(document, zf, pn.clearMenus),
			j.on(document, c0, pn.clearMenus),
			j.on(document, zf, Wr, function (f) {
				f.preventDefault(), pn.getOrCreateInstance(this).toggle();
			}),
			y(pn);
		const Bf = "backdrop",
			Wf = "show",
			Hf = `mousedown.bs.${Bf}`,
			_0 = {
				className: "modal-backdrop",
				clickCallback: null,
				isAnimated: !1,
				isVisible: !0,
				rootElement: "body",
			},
			x0 = {
				className: "string",
				clickCallback: "(function|null)",
				isAnimated: "boolean",
				isVisible: "boolean",
				rootElement: "(element|string)",
			};
		class Vf extends Ne {
			constructor(l) {
				super(),
					(this._config = this._getConfig(l)),
					(this._isAppended = !1),
					(this._element = null);
			}
			static get Default() {
				return _0;
			}
			static get DefaultType() {
				return x0;
			}
			static get NAME() {
				return Bf;
			}
			show(l) {
				if (!this._config.isVisible) return void g(l);
				this._append();
				const u = this._getElement();
				this._config.isAnimated && b(u),
					u.classList.add(Wf),
					this._emulateAnimation(() => {
						g(l);
					});
			}
			hide(l) {
				this._config.isVisible
					? (this._getElement().classList.remove(Wf),
					  this._emulateAnimation(() => {
							this.dispose(), g(l);
					  }))
					: g(l);
			}
			dispose() {
				this._isAppended &&
					(j.off(this._element, Hf),
					this._element.remove(),
					(this._isAppended = !1));
			}
			_getElement() {
				if (!this._element) {
					const l = document.createElement("div");
					(l.className = this._config.className),
						this._config.isAnimated && l.classList.add("fade"),
						(this._element = l);
				}
				return this._element;
			}
			_configAfterMerge(l) {
				return (l.rootElement = c(l.rootElement)), l;
			}
			_append() {
				if (this._isAppended) return;
				const l = this._getElement();
				this._config.rootElement.append(l),
					j.on(l, Hf, () => {
						g(this._config.clickCallback);
					}),
					(this._isAppended = !0);
			}
			_emulateAnimation(l) {
				E(l, this._getElement(), this._config.isAnimated);
			}
		}
		const Ul = ".bs.focustrap",
			E0 = `focusin${Ul}`,
			S0 = `keydown.tab${Ul}`,
			Kf = "backward",
			C0 = { autofocus: !0, trapElement: null },
			k0 = { autofocus: "boolean", trapElement: "element" };
		class Qf extends Ne {
			constructor(l) {
				super(),
					(this._config = this._getConfig(l)),
					(this._isActive = !1),
					(this._lastTabNavDirection = null);
			}
			static get Default() {
				return C0;
			}
			static get DefaultType() {
				return k0;
			}
			static get NAME() {
				return "focustrap";
			}
			activate() {
				this._isActive ||
					(this._config.autofocus && this._config.trapElement.focus(),
					j.off(document, Ul),
					j.on(document, E0, (l) => this._handleFocusin(l)),
					j.on(document, S0, (l) => this._handleKeydown(l)),
					(this._isActive = !0));
			}
			deactivate() {
				this._isActive && ((this._isActive = !1), j.off(document, Ul));
			}
			_handleFocusin(l) {
				const { trapElement: u } = this._config;
				if (
					l.target === document ||
					l.target === u ||
					u.contains(l.target)
				)
					return;
				const h = q.focusableChildren(u);
				h.length === 0
					? u.focus()
					: this._lastTabNavDirection === Kf
					? h[h.length - 1].focus()
					: h[0].focus();
			}
			_handleKeydown(l) {
				l.key === "Tab" &&
					(this._lastTabNavDirection = l.shiftKey ? Kf : "forward");
			}
		}
		const Yf = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
			Xf = ".sticky-top",
			Bl = "padding-right",
			Gf = "margin-right";
		class Va {
			constructor() {
				this._element = document.body;
			}
			getWidth() {
				const l = document.documentElement.clientWidth;
				return Math.abs(window.innerWidth - l);
			}
			hide() {
				const l = this.getWidth();
				this._disableOverFlow(),
					this._setElementAttributes(this._element, Bl, (u) => u + l),
					this._setElementAttributes(Yf, Bl, (u) => u + l),
					this._setElementAttributes(Xf, Gf, (u) => u - l);
			}
			reset() {
				this._resetElementAttributes(this._element, "overflow"),
					this._resetElementAttributes(this._element, Bl),
					this._resetElementAttributes(Yf, Bl),
					this._resetElementAttributes(Xf, Gf);
			}
			isOverflowing() {
				return this.getWidth() > 0;
			}
			_disableOverFlow() {
				this._saveInitialAttribute(this._element, "overflow"),
					(this._element.style.overflow = "hidden");
			}
			_setElementAttributes(l, u, h) {
				const C = this.getWidth();
				this._applyManipulationCallback(l, (k) => {
					if (
						k !== this._element &&
						window.innerWidth > k.clientWidth + C
					)
						return;
					this._saveInitialAttribute(k, u);
					const O = window.getComputedStyle(k).getPropertyValue(u);
					k.style.setProperty(u, `${h(Number.parseFloat(O))}px`);
				});
			}
			_saveInitialAttribute(l, u) {
				const h = l.style.getPropertyValue(u);
				h && we.setDataAttribute(l, u, h);
			}
			_resetElementAttributes(l, u) {
				this._applyManipulationCallback(l, (h) => {
					const C = we.getDataAttribute(h, u);
					C !== null
						? (we.removeDataAttribute(h, u),
						  h.style.setProperty(u, C))
						: h.style.removeProperty(u);
				});
			}
			_applyManipulationCallback(l, u) {
				if (a(l)) u(l);
				else for (const h of q.find(l, this._element)) u(h);
			}
		}
		const Zt = ".bs.modal",
			T0 = `hide${Zt}`,
			N0 = `hidePrevented${Zt}`,
			qf = `hidden${Zt}`,
			Jf = `show${Zt}`,
			b0 = `shown${Zt}`,
			j0 = `resize${Zt}`,
			L0 = `click.dismiss${Zt}`,
			O0 = `mousedown.dismiss${Zt}`,
			R0 = `keydown.dismiss${Zt}`,
			P0 = `click${Zt}.data-api`,
			Zf = "modal-open",
			eh = "show",
			Ka = "modal-static",
			D0 = { backdrop: !0, focus: !0, keyboard: !0 },
			A0 = {
				backdrop: "(boolean|string)",
				focus: "boolean",
				keyboard: "boolean",
			};
		class Hr extends Pe {
			constructor(l, u) {
				super(l, u),
					(this._dialog = q.findOne(".modal-dialog", this._element)),
					(this._backdrop = this._initializeBackDrop()),
					(this._focustrap = this._initializeFocusTrap()),
					(this._isShown = !1),
					(this._isTransitioning = !1),
					(this._scrollBar = new Va()),
					this._addEventListeners();
			}
			static get Default() {
				return D0;
			}
			static get DefaultType() {
				return A0;
			}
			static get NAME() {
				return "modal";
			}
			toggle(l) {
				return this._isShown ? this.hide() : this.show(l);
			}
			show(l) {
				this._isShown ||
					this._isTransitioning ||
					j.trigger(this._element, Jf, { relatedTarget: l })
						.defaultPrevented ||
					((this._isShown = !0),
					(this._isTransitioning = !0),
					this._scrollBar.hide(),
					document.body.classList.add(Zf),
					this._adjustDialog(),
					this._backdrop.show(() => this._showElement(l)));
			}
			hide() {
				this._isShown &&
					!this._isTransitioning &&
					(j.trigger(this._element, T0).defaultPrevented ||
						((this._isShown = !1),
						(this._isTransitioning = !0),
						this._focustrap.deactivate(),
						this._element.classList.remove(eh),
						this._queueCallback(
							() => this._hideModal(),
							this._element,
							this._isAnimated()
						)));
			}
			dispose() {
				j.off(window, Zt),
					j.off(this._dialog, Zt),
					this._backdrop.dispose(),
					this._focustrap.deactivate(),
					super.dispose();
			}
			handleUpdate() {
				this._adjustDialog();
			}
			_initializeBackDrop() {
				return new Vf({
					isVisible: !!this._config.backdrop,
					isAnimated: this._isAnimated(),
				});
			}
			_initializeFocusTrap() {
				return new Qf({ trapElement: this._element });
			}
			_showElement(l) {
				document.body.contains(this._element) ||
					document.body.append(this._element),
					(this._element.style.display = "block"),
					this._element.removeAttribute("aria-hidden"),
					this._element.setAttribute("aria-modal", !0),
					this._element.setAttribute("role", "dialog"),
					(this._element.scrollTop = 0);
				const u = q.findOne(".modal-body", this._dialog);
				u && (u.scrollTop = 0),
					b(this._element),
					this._element.classList.add(eh),
					this._queueCallback(
						() => {
							this._config.focus && this._focustrap.activate(),
								(this._isTransitioning = !1),
								j.trigger(this._element, b0, {
									relatedTarget: l,
								});
						},
						this._dialog,
						this._isAnimated()
					);
			}
			_addEventListeners() {
				j.on(this._element, R0, (l) => {
					l.key === "Escape" &&
						(this._config.keyboard
							? this.hide()
							: this._triggerBackdropTransition());
				}),
					j.on(window, j0, () => {
						this._isShown &&
							!this._isTransitioning &&
							this._adjustDialog();
					}),
					j.on(this._element, O0, (l) => {
						j.one(this._element, L0, (u) => {
							this._element === l.target &&
								this._element === u.target &&
								(this._config.backdrop !== "static"
									? this._config.backdrop && this.hide()
									: this._triggerBackdropTransition());
						});
					});
			}
			_hideModal() {
				(this._element.style.display = "none"),
					this._element.setAttribute("aria-hidden", !0),
					this._element.removeAttribute("aria-modal"),
					this._element.removeAttribute("role"),
					(this._isTransitioning = !1),
					this._backdrop.hide(() => {
						document.body.classList.remove(Zf),
							this._resetAdjustments(),
							this._scrollBar.reset(),
							j.trigger(this._element, qf);
					});
			}
			_isAnimated() {
				return this._element.classList.contains("fade");
			}
			_triggerBackdropTransition() {
				if (j.trigger(this._element, N0).defaultPrevented) return;
				const l =
						this._element.scrollHeight >
						document.documentElement.clientHeight,
					u = this._element.style.overflowY;
				u === "hidden" ||
					this._element.classList.contains(Ka) ||
					(l || (this._element.style.overflowY = "hidden"),
					this._element.classList.add(Ka),
					this._queueCallback(() => {
						this._element.classList.remove(Ka),
							this._queueCallback(() => {
								this._element.style.overflowY = u;
							}, this._dialog);
					}, this._dialog),
					this._element.focus());
			}
			_adjustDialog() {
				const l =
						this._element.scrollHeight >
						document.documentElement.clientHeight,
					u = this._scrollBar.getWidth(),
					h = u > 0;
				if (h && !l) {
					const C = R() ? "paddingLeft" : "paddingRight";
					this._element.style[C] = `${u}px`;
				}
				if (!h && l) {
					const C = R() ? "paddingRight" : "paddingLeft";
					this._element.style[C] = `${u}px`;
				}
			}
			_resetAdjustments() {
				(this._element.style.paddingLeft = ""),
					(this._element.style.paddingRight = "");
			}
			static jQueryInterface(l, u) {
				return this.each(function () {
					const h = Hr.getOrCreateInstance(this, l);
					if (typeof l == "string") {
						if (h[l] === void 0)
							throw new TypeError(`No method named "${l}"`);
						h[l](u);
					}
				});
			}
		}
		j.on(document, P0, '[data-bs-toggle="modal"]', function (f) {
			const l = q.getElementFromSelector(this);
			["A", "AREA"].includes(this.tagName) && f.preventDefault(),
				j.one(l, Jf, (h) => {
					h.defaultPrevented ||
						j.one(l, qf, () => {
							d(this) && this.focus();
						});
				});
			const u = q.findOne(".modal.show");
			u && Hr.getInstance(u).hide(),
				Hr.getOrCreateInstance(l).toggle(this);
		}),
			Ye(Hr),
			y(Hr);
		const zn = ".bs.offcanvas",
			th = ".data-api",
			M0 = `load${zn}${th}`,
			nh = "show",
			rh = "showing",
			ih = "hiding",
			oh = ".offcanvas.show",
			I0 = `show${zn}`,
			$0 = `shown${zn}`,
			F0 = `hide${zn}`,
			lh = `hidePrevented${zn}`,
			sh = `hidden${zn}`,
			z0 = `resize${zn}`,
			U0 = `click${zn}${th}`,
			B0 = `keydown.dismiss${zn}`,
			W0 = { backdrop: !0, keyboard: !0, scroll: !1 },
			H0 = {
				backdrop: "(boolean|string)",
				keyboard: "boolean",
				scroll: "boolean",
			};
		class Un extends Pe {
			constructor(l, u) {
				super(l, u),
					(this._isShown = !1),
					(this._backdrop = this._initializeBackDrop()),
					(this._focustrap = this._initializeFocusTrap()),
					this._addEventListeners();
			}
			static get Default() {
				return W0;
			}
			static get DefaultType() {
				return H0;
			}
			static get NAME() {
				return "offcanvas";
			}
			toggle(l) {
				return this._isShown ? this.hide() : this.show(l);
			}
			show(l) {
				this._isShown ||
					j.trigger(this._element, I0, { relatedTarget: l })
						.defaultPrevented ||
					((this._isShown = !0),
					this._backdrop.show(),
					this._config.scroll || new Va().hide(),
					this._element.setAttribute("aria-modal", !0),
					this._element.setAttribute("role", "dialog"),
					this._element.classList.add(rh),
					this._queueCallback(
						() => {
							(this._config.scroll && !this._config.backdrop) ||
								this._focustrap.activate(),
								this._element.classList.add(nh),
								this._element.classList.remove(rh),
								j.trigger(this._element, $0, {
									relatedTarget: l,
								});
						},
						this._element,
						!0
					));
			}
			hide() {
				this._isShown &&
					(j.trigger(this._element, F0).defaultPrevented ||
						(this._focustrap.deactivate(),
						this._element.blur(),
						(this._isShown = !1),
						this._element.classList.add(ih),
						this._backdrop.hide(),
						this._queueCallback(
							() => {
								this._element.classList.remove(nh, ih),
									this._element.removeAttribute("aria-modal"),
									this._element.removeAttribute("role"),
									this._config.scroll || new Va().reset(),
									j.trigger(this._element, sh);
							},
							this._element,
							!0
						)));
			}
			dispose() {
				this._backdrop.dispose(),
					this._focustrap.deactivate(),
					super.dispose();
			}
			_initializeBackDrop() {
				const l = !!this._config.backdrop;
				return new Vf({
					className: "offcanvas-backdrop",
					isVisible: l,
					isAnimated: !0,
					rootElement: this._element.parentNode,
					clickCallback: l
						? () => {
								this._config.backdrop !== "static"
									? this.hide()
									: j.trigger(this._element, lh);
						  }
						: null,
				});
			}
			_initializeFocusTrap() {
				return new Qf({ trapElement: this._element });
			}
			_addEventListeners() {
				j.on(this._element, B0, (l) => {
					l.key === "Escape" &&
						(this._config.keyboard
							? this.hide()
							: j.trigger(this._element, lh));
				});
			}
			static jQueryInterface(l) {
				return this.each(function () {
					const u = Un.getOrCreateInstance(this, l);
					if (typeof l == "string") {
						if (
							u[l] === void 0 ||
							l.startsWith("_") ||
							l === "constructor"
						)
							throw new TypeError(`No method named "${l}"`);
						u[l](this);
					}
				});
			}
		}
		j.on(document, U0, '[data-bs-toggle="offcanvas"]', function (f) {
			const l = q.getElementFromSelector(this);
			if (
				(["A", "AREA"].includes(this.tagName) && f.preventDefault(),
				p(this))
			)
				return;
			j.one(l, sh, () => {
				d(this) && this.focus();
			});
			const u = q.findOne(oh);
			u && u !== l && Un.getInstance(u).hide(),
				Un.getOrCreateInstance(l).toggle(this);
		}),
			j.on(window, M0, () => {
				for (const f of q.find(oh)) Un.getOrCreateInstance(f).show();
			}),
			j.on(window, z0, () => {
				for (const f of q.find(
					"[aria-modal][class*=show][class*=offcanvas-]"
				))
					getComputedStyle(f).position !== "fixed" &&
						Un.getOrCreateInstance(f).hide();
			}),
			Ye(Un),
			y(Un);
		const ah = {
				"*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
				a: ["target", "href", "title", "rel"],
				area: [],
				b: [],
				br: [],
				col: [],
				code: [],
				div: [],
				em: [],
				hr: [],
				h1: [],
				h2: [],
				h3: [],
				h4: [],
				h5: [],
				h6: [],
				i: [],
				img: ["src", "srcset", "alt", "title", "width", "height"],
				li: [],
				ol: [],
				p: [],
				pre: [],
				s: [],
				small: [],
				span: [],
				sub: [],
				sup: [],
				strong: [],
				u: [],
				ul: [],
			},
			V0 = new Set([
				"background",
				"cite",
				"href",
				"itemtype",
				"longdesc",
				"poster",
				"src",
				"xlink:href",
			]),
			K0 = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
			Q0 = (f, l) => {
				const u = f.nodeName.toLowerCase();
				return l.includes(u)
					? !V0.has(u) || !!K0.test(f.nodeValue)
					: l
							.filter((h) => h instanceof RegExp)
							.some((h) => h.test(u));
			},
			Y0 = {
				allowList: ah,
				content: {},
				extraClass: "",
				html: !1,
				sanitize: !0,
				sanitizeFn: null,
				template: "<div></div>",
			},
			X0 = {
				allowList: "object",
				content: "object",
				extraClass: "(string|function)",
				html: "boolean",
				sanitize: "boolean",
				sanitizeFn: "(null|function)",
				template: "string",
			},
			G0 = {
				entry: "(string|element|function|null)",
				selector: "(string|element)",
			};
		class q0 extends Ne {
			constructor(l) {
				super(), (this._config = this._getConfig(l));
			}
			static get Default() {
				return Y0;
			}
			static get DefaultType() {
				return X0;
			}
			static get NAME() {
				return "TemplateFactory";
			}
			getContent() {
				return Object.values(this._config.content)
					.map((l) => this._resolvePossibleFunction(l))
					.filter(Boolean);
			}
			hasContent() {
				return this.getContent().length > 0;
			}
			changeContent(l) {
				return (
					this._checkContent(l),
					(this._config.content = { ...this._config.content, ...l }),
					this
				);
			}
			toHtml() {
				const l = document.createElement("div");
				l.innerHTML = this._maybeSanitize(this._config.template);
				for (const [C, k] of Object.entries(this._config.content))
					this._setContent(l, k, C);
				const u = l.children[0],
					h = this._resolvePossibleFunction(this._config.extraClass);
				return h && u.classList.add(...h.split(" ")), u;
			}
			_typeCheckConfig(l) {
				super._typeCheckConfig(l), this._checkContent(l.content);
			}
			_checkContent(l) {
				for (const [u, h] of Object.entries(l))
					super._typeCheckConfig({ selector: u, entry: h }, G0);
			}
			_setContent(l, u, h) {
				const C = q.findOne(h, l);
				C &&
					((u = this._resolvePossibleFunction(u))
						? a(u)
							? this._putElementInTemplate(c(u), C)
							: this._config.html
							? (C.innerHTML = this._maybeSanitize(u))
							: (C.textContent = u)
						: C.remove());
			}
			_maybeSanitize(l) {
				return this._config.sanitize
					? (function (u, h, C) {
							if (!u.length) return u;
							if (C && typeof C == "function") return C(u);
							const k = new window.DOMParser().parseFromString(
									u,
									"text/html"
								),
								O = [].concat(...k.body.querySelectorAll("*"));
							for (const I of O) {
								const U = I.nodeName.toLowerCase();
								if (!Object.keys(h).includes(U)) {
									I.remove();
									continue;
								}
								const H = [].concat(...I.attributes),
									K = [].concat(h["*"] || [], h[U] || []);
								for (const W of H)
									Q0(W, K) || I.removeAttribute(W.nodeName);
							}
							return k.body.innerHTML;
					  })(l, this._config.allowList, this._config.sanitizeFn)
					: l;
			}
			_resolvePossibleFunction(l) {
				return g(l, [this]);
			}
			_putElementInTemplate(l, u) {
				if (this._config.html)
					return (u.innerHTML = ""), void u.append(l);
				u.textContent = l.textContent;
			}
		}
		const J0 = new Set(["sanitize", "allowList", "sanitizeFn"]),
			Qa = "fade",
			Wl = "show",
			uh = ".modal",
			ch = "hide.bs.modal",
			So = "hover",
			Ya = "focus",
			Z0 = {
				AUTO: "auto",
				TOP: "top",
				RIGHT: R() ? "left" : "right",
				BOTTOM: "bottom",
				LEFT: R() ? "right" : "left",
			},
			ew = {
				allowList: ah,
				animation: !0,
				boundary: "clippingParents",
				container: !1,
				customClass: "",
				delay: 0,
				fallbackPlacements: ["top", "right", "bottom", "left"],
				html: !1,
				offset: [0, 6],
				placement: "top",
				popperConfig: null,
				sanitize: !0,
				sanitizeFn: null,
				selector: !1,
				template:
					'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
				title: "",
				trigger: "hover focus",
			},
			tw = {
				allowList: "object",
				animation: "boolean",
				boundary: "(string|element)",
				container: "(string|element|boolean)",
				customClass: "(string|function)",
				delay: "(number|object)",
				fallbackPlacements: "array",
				html: "boolean",
				offset: "(array|string|function)",
				placement: "(string|function)",
				popperConfig: "(null|object|function)",
				sanitize: "boolean",
				sanitizeFn: "(null|function)",
				selector: "(string|boolean)",
				template: "string",
				title: "(string|element|function)",
				trigger: "string",
			};
		class Vr extends Pe {
			constructor(l, u) {
				if (If === void 0)
					throw new TypeError(
						"Bootstrap's tooltips require Popper (https://popper.js.org)"
					);
				super(l, u),
					(this._isEnabled = !0),
					(this._timeout = 0),
					(this._isHovered = null),
					(this._activeTrigger = {}),
					(this._popper = null),
					(this._templateFactory = null),
					(this._newContent = null),
					(this.tip = null),
					this._setListeners(),
					this._config.selector || this._fixTitle();
			}
			static get Default() {
				return ew;
			}
			static get DefaultType() {
				return tw;
			}
			static get NAME() {
				return "tooltip";
			}
			enable() {
				this._isEnabled = !0;
			}
			disable() {
				this._isEnabled = !1;
			}
			toggleEnabled() {
				this._isEnabled = !this._isEnabled;
			}
			toggle() {
				this._isEnabled &&
					((this._activeTrigger.click = !this._activeTrigger.click),
					this._isShown() ? this._leave() : this._enter());
			}
			dispose() {
				clearTimeout(this._timeout),
					j.off(
						this._element.closest(uh),
						ch,
						this._hideModalHandler
					),
					this._element.getAttribute("data-bs-original-title") &&
						this._element.setAttribute(
							"title",
							this._element.getAttribute("data-bs-original-title")
						),
					this._disposePopper(),
					super.dispose();
			}
			show() {
				if (this._element.style.display === "none")
					throw new Error("Please use show on visible elements");
				if (!this._isWithContent() || !this._isEnabled) return;
				const l = j.trigger(
						this._element,
						this.constructor.eventName("show")
					),
					u = (
						v(this._element) ||
						this._element.ownerDocument.documentElement
					).contains(this._element);
				if (l.defaultPrevented || !u) return;
				this._disposePopper();
				const h = this._getTipElement();
				this._element.setAttribute(
					"aria-describedby",
					h.getAttribute("id")
				);
				const { container: C } = this._config;
				if (
					(this._element.ownerDocument.documentElement.contains(
						this.tip
					) ||
						(C.append(h),
						j.trigger(
							this._element,
							this.constructor.eventName("inserted")
						)),
					(this._popper = this._createPopper(h)),
					h.classList.add(Wl),
					"ontouchstart" in document.documentElement)
				)
					for (const k of [].concat(...document.body.children))
						j.on(k, "mouseover", m);
				this._queueCallback(
					() => {
						j.trigger(
							this._element,
							this.constructor.eventName("shown")
						),
							this._isHovered === !1 && this._leave(),
							(this._isHovered = !1);
					},
					this.tip,
					this._isAnimated()
				);
			}
			hide() {
				if (
					this._isShown() &&
					!j.trigger(
						this._element,
						this.constructor.eventName("hide")
					).defaultPrevented
				) {
					if (
						(this._getTipElement().classList.remove(Wl),
						"ontouchstart" in document.documentElement)
					)
						for (const l of [].concat(...document.body.children))
							j.off(l, "mouseover", m);
					(this._activeTrigger.click = !1),
						(this._activeTrigger[Ya] = !1),
						(this._activeTrigger[So] = !1),
						(this._isHovered = null),
						this._queueCallback(
							() => {
								this._isWithActiveTrigger() ||
									(this._isHovered || this._disposePopper(),
									this._element.removeAttribute(
										"aria-describedby"
									),
									j.trigger(
										this._element,
										this.constructor.eventName("hidden")
									));
							},
							this.tip,
							this._isAnimated()
						);
				}
			}
			update() {
				this._popper && this._popper.update();
			}
			_isWithContent() {
				return !!this._getTitle();
			}
			_getTipElement() {
				return (
					this.tip ||
						(this.tip = this._createTipElement(
							this._newContent || this._getContentForTemplate()
						)),
					this.tip
				);
			}
			_createTipElement(l) {
				const u = this._getTemplateFactory(l).toHtml();
				if (!u) return null;
				u.classList.remove(Qa, Wl),
					u.classList.add(`bs-${this.constructor.NAME}-auto`);
				const h = ((C) => {
					do C += Math.floor(1e6 * Math.random());
					while (document.getElementById(C));
					return C;
				})(this.constructor.NAME).toString();
				return (
					u.setAttribute("id", h),
					this._isAnimated() && u.classList.add(Qa),
					u
				);
			}
			setContent(l) {
				(this._newContent = l),
					this._isShown() && (this._disposePopper(), this.show());
			}
			_getTemplateFactory(l) {
				return (
					this._templateFactory
						? this._templateFactory.changeContent(l)
						: (this._templateFactory = new q0({
								...this._config,
								content: l,
								extraClass: this._resolvePossibleFunction(
									this._config.customClass
								),
						  })),
					this._templateFactory
				);
			}
			_getContentForTemplate() {
				return { ".tooltip-inner": this._getTitle() };
			}
			_getTitle() {
				return (
					this._resolvePossibleFunction(this._config.title) ||
					this._element.getAttribute("data-bs-original-title")
				);
			}
			_initializeOnDelegatedTarget(l) {
				return this.constructor.getOrCreateInstance(
					l.delegateTarget,
					this._getDelegateConfig()
				);
			}
			_isAnimated() {
				return (
					this._config.animation ||
					(this.tip && this.tip.classList.contains(Qa))
				);
			}
			_isShown() {
				return this.tip && this.tip.classList.contains(Wl);
			}
			_createPopper(l) {
				const u = g(this._config.placement, [this, l, this._element]),
					h = Z0[u.toUpperCase()];
				return Wa(this._element, l, this._getPopperConfig(h));
			}
			_getOffset() {
				const { offset: l } = this._config;
				return typeof l == "string"
					? l.split(",").map((u) => Number.parseInt(u, 10))
					: typeof l == "function"
					? (u) => l(u, this._element)
					: l;
			}
			_resolvePossibleFunction(l) {
				return g(l, [this._element]);
			}
			_getPopperConfig(l) {
				const u = {
					placement: l,
					modifiers: [
						{
							name: "flip",
							options: {
								fallbackPlacements:
									this._config.fallbackPlacements,
							},
						},
						{
							name: "offset",
							options: { offset: this._getOffset() },
						},
						{
							name: "preventOverflow",
							options: { boundary: this._config.boundary },
						},
						{
							name: "arrow",
							options: {
								element: `.${this.constructor.NAME}-arrow`,
							},
						},
						{
							name: "preSetPlacement",
							enabled: !0,
							phase: "beforeMain",
							fn: (h) => {
								this._getTipElement().setAttribute(
									"data-popper-placement",
									h.state.placement
								);
							},
						},
					],
				};
				return { ...u, ...g(this._config.popperConfig, [u]) };
			}
			_setListeners() {
				const l = this._config.trigger.split(" ");
				for (const u of l)
					if (u === "click")
						j.on(
							this._element,
							this.constructor.eventName("click"),
							this._config.selector,
							(h) => {
								this._initializeOnDelegatedTarget(h).toggle();
							}
						);
					else if (u !== "manual") {
						const h =
								u === So
									? this.constructor.eventName("mouseenter")
									: this.constructor.eventName("focusin"),
							C =
								u === So
									? this.constructor.eventName("mouseleave")
									: this.constructor.eventName("focusout");
						j.on(this._element, h, this._config.selector, (k) => {
							const O = this._initializeOnDelegatedTarget(k);
							(O._activeTrigger[k.type === "focusin" ? Ya : So] =
								!0),
								O._enter();
						}),
							j.on(
								this._element,
								C,
								this._config.selector,
								(k) => {
									const O =
										this._initializeOnDelegatedTarget(k);
									(O._activeTrigger[
										k.type === "focusout" ? Ya : So
									] = O._element.contains(k.relatedTarget)),
										O._leave();
								}
							);
					}
				(this._hideModalHandler = () => {
					this._element && this.hide();
				}),
					j.on(this._element.closest(uh), ch, this._hideModalHandler);
			}
			_fixTitle() {
				const l = this._element.getAttribute("title");
				l &&
					(this._element.getAttribute("aria-label") ||
						this._element.textContent.trim() ||
						this._element.setAttribute("aria-label", l),
					this._element.setAttribute("data-bs-original-title", l),
					this._element.removeAttribute("title"));
			}
			_enter() {
				this._isShown() || this._isHovered
					? (this._isHovered = !0)
					: ((this._isHovered = !0),
					  this._setTimeout(() => {
							this._isHovered && this.show();
					  }, this._config.delay.show));
			}
			_leave() {
				this._isWithActiveTrigger() ||
					((this._isHovered = !1),
					this._setTimeout(() => {
						this._isHovered || this.hide();
					}, this._config.delay.hide));
			}
			_setTimeout(l, u) {
				clearTimeout(this._timeout), (this._timeout = setTimeout(l, u));
			}
			_isWithActiveTrigger() {
				return Object.values(this._activeTrigger).includes(!0);
			}
			_getConfig(l) {
				const u = we.getDataAttributes(this._element);
				for (const h of Object.keys(u)) J0.has(h) && delete u[h];
				return (
					(l = { ...u, ...(typeof l == "object" && l ? l : {}) }),
					(l = this._mergeConfigObj(l)),
					(l = this._configAfterMerge(l)),
					this._typeCheckConfig(l),
					l
				);
			}
			_configAfterMerge(l) {
				return (
					(l.container =
						l.container === !1 ? document.body : c(l.container)),
					typeof l.delay == "number" &&
						(l.delay = { show: l.delay, hide: l.delay }),
					typeof l.title == "number" &&
						(l.title = l.title.toString()),
					typeof l.content == "number" &&
						(l.content = l.content.toString()),
					l
				);
			}
			_getDelegateConfig() {
				const l = {};
				for (const [u, h] of Object.entries(this._config))
					this.constructor.Default[u] !== h && (l[u] = h);
				return (l.selector = !1), (l.trigger = "manual"), l;
			}
			_disposePopper() {
				this._popper && (this._popper.destroy(), (this._popper = null)),
					this.tip && (this.tip.remove(), (this.tip = null));
			}
			static jQueryInterface(l) {
				return this.each(function () {
					const u = Vr.getOrCreateInstance(this, l);
					if (typeof l == "string") {
						if (u[l] === void 0)
							throw new TypeError(`No method named "${l}"`);
						u[l]();
					}
				});
			}
		}
		y(Vr);
		const nw = {
				...Vr.Default,
				content: "",
				offset: [0, 8],
				placement: "right",
				template:
					'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
				trigger: "click",
			},
			rw = {
				...Vr.DefaultType,
				content: "(null|string|element|function)",
			};
		class Hl extends Vr {
			static get Default() {
				return nw;
			}
			static get DefaultType() {
				return rw;
			}
			static get NAME() {
				return "popover";
			}
			_isWithContent() {
				return this._getTitle() || this._getContent();
			}
			_getContentForTemplate() {
				return {
					".popover-header": this._getTitle(),
					".popover-body": this._getContent(),
				};
			}
			_getContent() {
				return this._resolvePossibleFunction(this._config.content);
			}
			static jQueryInterface(l) {
				return this.each(function () {
					const u = Hl.getOrCreateInstance(this, l);
					if (typeof l == "string") {
						if (u[l] === void 0)
							throw new TypeError(`No method named "${l}"`);
						u[l]();
					}
				});
			}
		}
		y(Hl);
		const Xa = ".bs.scrollspy",
			iw = `activate${Xa}`,
			dh = `click${Xa}`,
			ow = `load${Xa}.data-api`,
			ji = "active",
			Ga = "[href]",
			fh = ".nav-link",
			lw = `${fh}, .nav-item > ${fh}, .list-group-item`,
			sw = {
				offset: null,
				rootMargin: "0px 0px -25%",
				smoothScroll: !1,
				target: null,
				threshold: [0.1, 0.5, 1],
			},
			aw = {
				offset: "(number|null)",
				rootMargin: "string",
				smoothScroll: "boolean",
				target: "element",
				threshold: "array",
			};
		class Co extends Pe {
			constructor(l, u) {
				super(l, u),
					(this._targetLinks = new Map()),
					(this._observableSections = new Map()),
					(this._rootElement =
						getComputedStyle(this._element).overflowY === "visible"
							? null
							: this._element),
					(this._activeTarget = null),
					(this._observer = null),
					(this._previousScrollData = {
						visibleEntryTop: 0,
						parentScrollTop: 0,
					}),
					this.refresh();
			}
			static get Default() {
				return sw;
			}
			static get DefaultType() {
				return aw;
			}
			static get NAME() {
				return "scrollspy";
			}
			refresh() {
				this._initializeTargetsAndObservables(),
					this._maybeEnableSmoothScroll(),
					this._observer
						? this._observer.disconnect()
						: (this._observer = this._getNewObserver());
				for (const l of this._observableSections.values())
					this._observer.observe(l);
			}
			dispose() {
				this._observer.disconnect(), super.dispose();
			}
			_configAfterMerge(l) {
				return (
					(l.target = c(l.target) || document.body),
					(l.rootMargin = l.offset
						? `${l.offset}px 0px -30%`
						: l.rootMargin),
					typeof l.threshold == "string" &&
						(l.threshold = l.threshold
							.split(",")
							.map((u) => Number.parseFloat(u))),
					l
				);
			}
			_maybeEnableSmoothScroll() {
				this._config.smoothScroll &&
					(j.off(this._config.target, dh),
					j.on(this._config.target, dh, Ga, (l) => {
						const u = this._observableSections.get(l.target.hash);
						if (u) {
							l.preventDefault();
							const h = this._rootElement || window,
								C = u.offsetTop - this._element.offsetTop;
							if (h.scrollTo)
								return void h.scrollTo({
									top: C,
									behavior: "smooth",
								});
							h.scrollTop = C;
						}
					}));
			}
			_getNewObserver() {
				const l = {
					root: this._rootElement,
					threshold: this._config.threshold,
					rootMargin: this._config.rootMargin,
				};
				return new IntersectionObserver(
					(u) => this._observerCallback(u),
					l
				);
			}
			_observerCallback(l) {
				const u = (O) => this._targetLinks.get(`#${O.target.id}`),
					h = (O) => {
						(this._previousScrollData.visibleEntryTop =
							O.target.offsetTop),
							this._process(u(O));
					},
					C = (this._rootElement || document.documentElement)
						.scrollTop,
					k = C >= this._previousScrollData.parentScrollTop;
				this._previousScrollData.parentScrollTop = C;
				for (const O of l) {
					if (!O.isIntersecting) {
						(this._activeTarget = null),
							this._clearActiveClass(u(O));
						continue;
					}
					const I =
						O.target.offsetTop >=
						this._previousScrollData.visibleEntryTop;
					if (k && I) {
						if ((h(O), !C)) return;
					} else k || I || h(O);
				}
			}
			_initializeTargetsAndObservables() {
				(this._targetLinks = new Map()),
					(this._observableSections = new Map());
				const l = q.find(Ga, this._config.target);
				for (const u of l) {
					if (!u.hash || p(u)) continue;
					const h = q.findOne(decodeURI(u.hash), this._element);
					d(h) &&
						(this._targetLinks.set(decodeURI(u.hash), u),
						this._observableSections.set(u.hash, h));
				}
			}
			_process(l) {
				this._activeTarget !== l &&
					(this._clearActiveClass(this._config.target),
					(this._activeTarget = l),
					l.classList.add(ji),
					this._activateParents(l),
					j.trigger(this._element, iw, { relatedTarget: l }));
			}
			_activateParents(l) {
				if (l.classList.contains("dropdown-item"))
					q.findOne(
						".dropdown-toggle",
						l.closest(".dropdown")
					).classList.add(ji);
				else
					for (const u of q.parents(l, ".nav, .list-group"))
						for (const h of q.prev(u, lw)) h.classList.add(ji);
			}
			_clearActiveClass(l) {
				l.classList.remove(ji);
				const u = q.find(`${Ga}.${ji}`, l);
				for (const h of u) h.classList.remove(ji);
			}
			static jQueryInterface(l) {
				return this.each(function () {
					const u = Co.getOrCreateInstance(this, l);
					if (typeof l == "string") {
						if (
							u[l] === void 0 ||
							l.startsWith("_") ||
							l === "constructor"
						)
							throw new TypeError(`No method named "${l}"`);
						u[l]();
					}
				});
			}
		}
		j.on(window, ow, () => {
			for (const f of q.find('[data-bs-spy="scroll"]'))
				Co.getOrCreateInstance(f);
		}),
			y(Co);
		const Kr = ".bs.tab",
			uw = `hide${Kr}`,
			cw = `hidden${Kr}`,
			dw = `show${Kr}`,
			fw = `shown${Kr}`,
			hw = `click${Kr}`,
			pw = `keydown${Kr}`,
			mw = `load${Kr}`,
			gw = "ArrowLeft",
			hh = "ArrowRight",
			vw = "ArrowUp",
			ph = "ArrowDown",
			qa = "Home",
			mh = "End",
			Qr = "active",
			gh = "fade",
			Ja = "show",
			vh = ".dropdown-toggle",
			Za = `:not(${vh})`,
			yh =
				'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
			eu = `.nav-link${Za}, .list-group-item${Za}, [role="tab"]${Za}, ${yh}`,
			yw = `.${Qr}[data-bs-toggle="tab"], .${Qr}[data-bs-toggle="pill"], .${Qr}[data-bs-toggle="list"]`;
		class Yr extends Pe {
			constructor(l) {
				super(l),
					(this._parent = this._element.closest(
						'.list-group, .nav, [role="tablist"]'
					)),
					this._parent &&
						(this._setInitialAttributes(
							this._parent,
							this._getChildren()
						),
						j.on(this._element, pw, (u) => this._keydown(u)));
			}
			static get NAME() {
				return "tab";
			}
			show() {
				const l = this._element;
				if (this._elemIsActive(l)) return;
				const u = this._getActiveElem(),
					h = u ? j.trigger(u, uw, { relatedTarget: l }) : null;
				j.trigger(l, dw, { relatedTarget: u }).defaultPrevented ||
					(h && h.defaultPrevented) ||
					(this._deactivate(u, l), this._activate(l, u));
			}
			_activate(l, u) {
				l &&
					(l.classList.add(Qr),
					this._activate(q.getElementFromSelector(l)),
					this._queueCallback(
						() => {
							l.getAttribute("role") === "tab"
								? (l.removeAttribute("tabindex"),
								  l.setAttribute("aria-selected", !0),
								  this._toggleDropDown(l, !0),
								  j.trigger(l, fw, { relatedTarget: u }))
								: l.classList.add(Ja);
						},
						l,
						l.classList.contains(gh)
					));
			}
			_deactivate(l, u) {
				l &&
					(l.classList.remove(Qr),
					l.blur(),
					this._deactivate(q.getElementFromSelector(l)),
					this._queueCallback(
						() => {
							l.getAttribute("role") === "tab"
								? (l.setAttribute("aria-selected", !1),
								  l.setAttribute("tabindex", "-1"),
								  this._toggleDropDown(l, !1),
								  j.trigger(l, cw, { relatedTarget: u }))
								: l.classList.remove(Ja);
						},
						l,
						l.classList.contains(gh)
					));
			}
			_keydown(l) {
				if (![gw, hh, vw, ph, qa, mh].includes(l.key)) return;
				l.stopPropagation(), l.preventDefault();
				const u = this._getChildren().filter((C) => !p(C));
				let h;
				if ([qa, mh].includes(l.key))
					h = u[l.key === qa ? 0 : u.length - 1];
				else {
					const C = [hh, ph].includes(l.key);
					h = w(u, l.target, C, !0);
				}
				h &&
					(h.focus({ preventScroll: !0 }),
					Yr.getOrCreateInstance(h).show());
			}
			_getChildren() {
				return q.find(eu, this._parent);
			}
			_getActiveElem() {
				return (
					this._getChildren().find((l) => this._elemIsActive(l)) ||
					null
				);
			}
			_setInitialAttributes(l, u) {
				this._setAttributeIfNotExists(l, "role", "tablist");
				for (const h of u) this._setInitialAttributesOnChild(h);
			}
			_setInitialAttributesOnChild(l) {
				l = this._getInnerElement(l);
				const u = this._elemIsActive(l),
					h = this._getOuterElement(l);
				l.setAttribute("aria-selected", u),
					h !== l &&
						this._setAttributeIfNotExists(
							h,
							"role",
							"presentation"
						),
					u || l.setAttribute("tabindex", "-1"),
					this._setAttributeIfNotExists(l, "role", "tab"),
					this._setInitialAttributesOnTargetPanel(l);
			}
			_setInitialAttributesOnTargetPanel(l) {
				const u = q.getElementFromSelector(l);
				u &&
					(this._setAttributeIfNotExists(u, "role", "tabpanel"),
					l.id &&
						this._setAttributeIfNotExists(
							u,
							"aria-labelledby",
							`${l.id}`
						));
			}
			_toggleDropDown(l, u) {
				const h = this._getOuterElement(l);
				if (!h.classList.contains("dropdown")) return;
				const C = (k, O) => {
					const I = q.findOne(k, h);
					I && I.classList.toggle(O, u);
				};
				C(vh, Qr),
					C(".dropdown-menu", Ja),
					h.setAttribute("aria-expanded", u);
			}
			_setAttributeIfNotExists(l, u, h) {
				l.hasAttribute(u) || l.setAttribute(u, h);
			}
			_elemIsActive(l) {
				return l.classList.contains(Qr);
			}
			_getInnerElement(l) {
				return l.matches(eu) ? l : q.findOne(eu, l);
			}
			_getOuterElement(l) {
				return l.closest(".nav-item, .list-group-item") || l;
			}
			static jQueryInterface(l) {
				return this.each(function () {
					const u = Yr.getOrCreateInstance(this);
					if (typeof l == "string") {
						if (
							u[l] === void 0 ||
							l.startsWith("_") ||
							l === "constructor"
						)
							throw new TypeError(`No method named "${l}"`);
						u[l]();
					}
				});
			}
		}
		j.on(document, hw, yh, function (f) {
			["A", "AREA"].includes(this.tagName) && f.preventDefault(),
				p(this) || Yr.getOrCreateInstance(this).show();
		}),
			j.on(window, mw, () => {
				for (const f of q.find(yw)) Yr.getOrCreateInstance(f);
			}),
			y(Yr);
		const sr = ".bs.toast",
			ww = `mouseover${sr}`,
			_w = `mouseout${sr}`,
			xw = `focusin${sr}`,
			Ew = `focusout${sr}`,
			Sw = `hide${sr}`,
			Cw = `hidden${sr}`,
			kw = `show${sr}`,
			Tw = `shown${sr}`,
			wh = "hide",
			Vl = "show",
			Kl = "showing",
			Nw = { animation: "boolean", autohide: "boolean", delay: "number" },
			bw = { animation: !0, autohide: !0, delay: 5e3 };
		class ko extends Pe {
			constructor(l, u) {
				super(l, u),
					(this._timeout = null),
					(this._hasMouseInteraction = !1),
					(this._hasKeyboardInteraction = !1),
					this._setListeners();
			}
			static get Default() {
				return bw;
			}
			static get DefaultType() {
				return Nw;
			}
			static get NAME() {
				return "toast";
			}
			show() {
				j.trigger(this._element, kw).defaultPrevented ||
					(this._clearTimeout(),
					this._config.animation &&
						this._element.classList.add("fade"),
					this._element.classList.remove(wh),
					b(this._element),
					this._element.classList.add(Vl, Kl),
					this._queueCallback(
						() => {
							this._element.classList.remove(Kl),
								j.trigger(this._element, Tw),
								this._maybeScheduleHide();
						},
						this._element,
						this._config.animation
					));
			}
			hide() {
				this.isShown() &&
					(j.trigger(this._element, Sw).defaultPrevented ||
						(this._element.classList.add(Kl),
						this._queueCallback(
							() => {
								this._element.classList.add(wh),
									this._element.classList.remove(Kl, Vl),
									j.trigger(this._element, Cw);
							},
							this._element,
							this._config.animation
						)));
			}
			dispose() {
				this._clearTimeout(),
					this.isShown() && this._element.classList.remove(Vl),
					super.dispose();
			}
			isShown() {
				return this._element.classList.contains(Vl);
			}
			_maybeScheduleHide() {
				this._config.autohide &&
					(this._hasMouseInteraction ||
						this._hasKeyboardInteraction ||
						(this._timeout = setTimeout(() => {
							this.hide();
						}, this._config.delay)));
			}
			_onInteraction(l, u) {
				switch (l.type) {
					case "mouseover":
					case "mouseout":
						this._hasMouseInteraction = u;
						break;
					case "focusin":
					case "focusout":
						this._hasKeyboardInteraction = u;
				}
				if (u) return void this._clearTimeout();
				const h = l.relatedTarget;
				this._element === h ||
					this._element.contains(h) ||
					this._maybeScheduleHide();
			}
			_setListeners() {
				j.on(this._element, ww, (l) => this._onInteraction(l, !0)),
					j.on(this._element, _w, (l) => this._onInteraction(l, !1)),
					j.on(this._element, xw, (l) => this._onInteraction(l, !0)),
					j.on(this._element, Ew, (l) => this._onInteraction(l, !1));
			}
			_clearTimeout() {
				clearTimeout(this._timeout), (this._timeout = null);
			}
			static jQueryInterface(l) {
				return this.each(function () {
					const u = ko.getOrCreateInstance(this, l);
					if (typeof l == "string") {
						if (u[l] === void 0)
							throw new TypeError(`No method named "${l}"`);
						u[l](this);
					}
				});
			}
		}
		return (
			Ye(ko),
			y(ko),
			{
				Alert: gt,
				Button: Se,
				Carousel: ee,
				Collapse: hn,
				Dropdown: pn,
				Modal: Hr,
				Offcanvas: Un,
				Popover: Hl,
				ScrollSpy: Co,
				Tab: Yr,
				Toast: ko,
				Tooltip: Vr,
			}
		);
	});
})(cx);
/**
 * @remix-run/router v1.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ze() {
	return (
		(Ze = Object.assign
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
		Ze.apply(this, arguments)
	);
}
var nt;
(function (e) {
	(e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(nt || (nt = {}));
const Up = "popstate";
function dx(e) {
	e === void 0 && (e = {});
	function t(r, i) {
		let { pathname: o, search: s, hash: a } = r.location;
		return _l(
			"",
			{ pathname: o, search: s, hash: a },
			(i.state && i.state.usr) || null,
			(i.state && i.state.key) || "default"
		);
	}
	function n(r, i) {
		return typeof i == "string" ? i : pi(i);
	}
	return hx(t, n, null, e);
}
function ue(e, t) {
	if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function hi(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw new Error(t);
		} catch {}
	}
}
function fx() {
	return Math.random().toString(36).substr(2, 8);
}
function Bp(e, t) {
	return { usr: e.state, key: e.key, idx: t };
}
function _l(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		Ze(
			{
				pathname: typeof e == "string" ? e : e.pathname,
				search: "",
				hash: "",
			},
			typeof t == "string" ? rr(t) : t,
			{ state: n, key: (t && t.key) || r || fx() }
		)
	);
}
function pi(e) {
	let { pathname: t = "/", search: n = "", hash: r = "" } = e;
	return (
		n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
		r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
		t
	);
}
function rr(e) {
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
function hx(e, t, n, r) {
	r === void 0 && (r = {});
	let { window: i = document.defaultView, v5Compat: o = !1 } = r,
		s = i.history,
		a = nt.Pop,
		c = null,
		d = p();
	d == null && ((d = 0), s.replaceState(Ze({}, s.state, { idx: d }), ""));
	function p() {
		return (s.state || { idx: null }).idx;
	}
	function v() {
		a = nt.Pop;
		let R = p(),
			y = R == null ? null : R - d;
		(d = R), c && c({ action: a, location: N.location, delta: y });
	}
	function m(R, y) {
		a = nt.Push;
		let g = _l(N.location, R, y);
		n && n(g, R), (d = p() + 1);
		let E = Bp(g, d),
			w = N.createHref(g);
		try {
			s.pushState(E, "", w);
		} catch (A) {
			if (A instanceof DOMException && A.name === "DataCloneError")
				throw A;
			i.location.assign(w);
		}
		o && c && c({ action: a, location: N.location, delta: 1 });
	}
	function b(R, y) {
		a = nt.Replace;
		let g = _l(N.location, R, y);
		n && n(g, R), (d = p());
		let E = Bp(g, d),
			w = N.createHref(g);
		s.replaceState(E, "", w),
			o && c && c({ action: a, location: N.location, delta: 0 });
	}
	function S(R) {
		let y =
				i.location.origin !== "null"
					? i.location.origin
					: i.location.href,
			g = typeof R == "string" ? R : pi(R);
		return (
			ue(
				y,
				"No window.location.(origin|href) available to create URL for href: " +
					g
			),
			new URL(g, y)
		);
	}
	let N = {
		get action() {
			return a;
		},
		get location() {
			return e(i, s);
		},
		listen(R) {
			if (c)
				throw new Error("A history only accepts one active listener");
			return (
				i.addEventListener(Up, v),
				(c = R),
				() => {
					i.removeEventListener(Up, v), (c = null);
				}
			);
		},
		createHref(R) {
			return t(i, R);
		},
		createURL: S,
		encodeLocation(R) {
			let y = S(R);
			return { pathname: y.pathname, search: y.search, hash: y.hash };
		},
		push: m,
		replace: b,
		go(R) {
			return s.go(R);
		},
	};
	return N;
}
var rt;
(function (e) {
	(e.data = "data"),
		(e.deferred = "deferred"),
		(e.redirect = "redirect"),
		(e.error = "error");
})(rt || (rt = {}));
const px = new Set([
	"lazy",
	"caseSensitive",
	"path",
	"id",
	"index",
	"children",
]);
function mx(e) {
	return e.index === !0;
}
function Rc(e, t, n, r) {
	return (
		n === void 0 && (n = []),
		r === void 0 && (r = {}),
		e.map((i, o) => {
			let s = [...n, o],
				a = typeof i.id == "string" ? i.id : s.join("-");
			if (
				(ue(
					i.index !== !0 || !i.children,
					"Cannot specify children on an index route"
				),
				ue(
					!r[a],
					'Found a route id collision on id "' +
						a +
						`".  Route id's must be globally unique within Data Router usages`
				),
				mx(i))
			) {
				let c = Ze({}, i, t(i), { id: a });
				return (r[a] = c), c;
			} else {
				let c = Ze({}, i, t(i), { id: a, children: void 0 });
				return (
					(r[a] = c),
					i.children && (c.children = Rc(i.children, t, s, r)),
					c
				);
			}
		})
	);
}
function Ki(e, t, n) {
	n === void 0 && (n = "/");
	let r = typeof t == "string" ? rr(t) : t,
		i = br(r.pathname || "/", n);
	if (i == null) return null;
	let o = Rv(e);
	vx(o);
	let s = null;
	for (let a = 0; s == null && a < o.length; ++a) s = Tx(o[a], bx(i));
	return s;
}
function gx(e, t) {
	let { route: n, pathname: r, params: i } = e;
	return {
		id: n.id,
		pathname: r,
		params: i,
		data: t[n.id],
		handle: n.handle,
	};
}
function Rv(e, t, n, r) {
	t === void 0 && (t = []),
		n === void 0 && (n = []),
		r === void 0 && (r = "");
	let i = (o, s, a) => {
		let c = {
			relativePath: a === void 0 ? o.path || "" : a,
			caseSensitive: o.caseSensitive === !0,
			childrenIndex: s,
			route: o,
		};
		c.relativePath.startsWith("/") &&
			(ue(
				c.relativePath.startsWith(r),
				'Absolute route path "' +
					c.relativePath +
					'" nested under path ' +
					('"' +
						r +
						'" is not valid. An absolute child route path ') +
					"must start with the combined path of all its parent routes."
			),
			(c.relativePath = c.relativePath.slice(r.length)));
		let d = Yn([r, c.relativePath]),
			p = n.concat(c);
		o.children &&
			o.children.length > 0 &&
			(ue(
				o.index !== !0,
				"Index routes must not have child routes. Please remove " +
					('all child routes from route path "' + d + '".')
			),
			Rv(o.children, t, p, d)),
			!(o.path == null && !o.index) &&
				t.push({ path: d, score: Cx(d, o.index), routesMeta: p });
	};
	return (
		e.forEach((o, s) => {
			var a;
			if (o.path === "" || !((a = o.path) != null && a.includes("?")))
				i(o, s);
			else for (let c of Pv(o.path)) i(o, s, c);
		}),
		t
	);
}
function Pv(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t,
		i = n.endsWith("?"),
		o = n.replace(/\?$/, "");
	if (r.length === 0) return i ? [o, ""] : [o];
	let s = Pv(r.join("/")),
		a = [];
	return (
		a.push(...s.map((c) => (c === "" ? o : [o, c].join("/")))),
		i && a.push(...s),
		a.map((c) => (e.startsWith("/") && c === "" ? "/" : c))
	);
}
function vx(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: kx(
					t.routesMeta.map((r) => r.childrenIndex),
					n.routesMeta.map((r) => r.childrenIndex)
			  )
	);
}
const yx = /^:\w+$/,
	wx = 3,
	_x = 2,
	xx = 1,
	Ex = 10,
	Sx = -2,
	Wp = (e) => e === "*";
function Cx(e, t) {
	let n = e.split("/"),
		r = n.length;
	return (
		n.some(Wp) && (r += Sx),
		t && (r += _x),
		n
			.filter((i) => !Wp(i))
			.reduce((i, o) => i + (yx.test(o) ? wx : o === "" ? xx : Ex), r)
	);
}
function kx(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
		? e[e.length - 1] - t[t.length - 1]
		: 0;
}
function Tx(e, t) {
	let { routesMeta: n } = e,
		r = {},
		i = "/",
		o = [];
	for (let s = 0; s < n.length; ++s) {
		let a = n[s],
			c = s === n.length - 1,
			d = i === "/" ? t : t.slice(i.length) || "/",
			p = Pc(
				{
					path: a.relativePath,
					caseSensitive: a.caseSensitive,
					end: c,
				},
				d
			);
		if (!p) return null;
		Object.assign(r, p.params);
		let v = a.route;
		o.push({
			params: r,
			pathname: Yn([i, p.pathname]),
			pathnameBase: Rx(Yn([i, p.pathnameBase])),
			route: v,
		}),
			p.pathnameBase !== "/" && (i = Yn([i, p.pathnameBase]));
	}
	return o;
}
function Pc(e, t) {
	typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
	let [n, r] = Nx(e.path, e.caseSensitive, e.end),
		i = t.match(n);
	if (!i) return null;
	let o = i[0],
		s = o.replace(/(.)\/+$/, "$1"),
		a = i.slice(1);
	return {
		params: r.reduce((d, p, v) => {
			let { paramName: m, isOptional: b } = p;
			if (m === "*") {
				let N = a[v] || "";
				s = o.slice(0, o.length - N.length).replace(/(.)\/+$/, "$1");
			}
			const S = a[v];
			return b && !S ? (d[m] = void 0) : (d[m] = jx(S || "", m)), d;
		}, {}),
		pathname: o,
		pathnameBase: s,
		pattern: e,
	};
}
function Nx(e, t, n) {
	t === void 0 && (t = !1),
		n === void 0 && (n = !0),
		hi(
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
		i =
			"^" +
			e
				.replace(/\/*\*?$/, "")
				.replace(/^\/*/, "/")
				.replace(/[\\.*+^${}|()[\]]/g, "\\$&")
				.replace(
					/\/:(\w+)(\?)?/g,
					(s, a, c) => (
						r.push({ paramName: a, isOptional: c != null }),
						c ? "/?([^\\/]+)?" : "/([^\\/]+)"
					)
				);
	return (
		e.endsWith("*")
			? (r.push({ paramName: "*" }),
			  (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
			: n
			? (i += "\\/*$")
			: e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
		[new RegExp(i, t ? void 0 : "i"), r]
	);
}
function bx(e) {
	try {
		return decodeURI(e);
	} catch (t) {
		return (
			hi(
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
function jx(e, t) {
	try {
		return decodeURIComponent(e);
	} catch (n) {
		return (
			hi(
				!1,
				'The value for the URL param "' +
					t +
					'" will not be decoded because' +
					(' the string "' +
						e +
						'" is a malformed URL segment. This is probably') +
					(" due to a bad percent encoding (" + n + ").")
			),
			e
		);
	}
}
function br(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/";
}
function Lx(e, t) {
	t === void 0 && (t = "/");
	let {
		pathname: n,
		search: r = "",
		hash: i = "",
	} = typeof e == "string" ? rr(e) : e;
	return {
		pathname: n ? (n.startsWith("/") ? n : Ox(n, t)) : t,
		search: Px(r),
		hash: Dx(i),
	};
}
function Ox(e, t) {
	let n = t.replace(/\/+$/, "").split("/");
	return (
		e.split("/").forEach((i) => {
			i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
		}),
		n.length > 1 ? n.join("/") : "/"
	);
}
function Lu(e, t, n, r) {
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
function wa(e) {
	return e.filter(
		(t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
	);
}
function Wd(e, t, n, r) {
	r === void 0 && (r = !1);
	let i;
	typeof e == "string"
		? (i = rr(e))
		: ((i = Ze({}, e)),
		  ue(
				!i.pathname || !i.pathname.includes("?"),
				Lu("?", "pathname", "search", i)
		  ),
		  ue(
				!i.pathname || !i.pathname.includes("#"),
				Lu("#", "pathname", "hash", i)
		  ),
		  ue(
				!i.search || !i.search.includes("#"),
				Lu("#", "search", "hash", i)
		  ));
	let o = e === "" || i.pathname === "",
		s = o ? "/" : i.pathname,
		a;
	if (s == null) a = n;
	else if (r) {
		let v = t[t.length - 1].replace(/^\//, "").split("/");
		if (s.startsWith("..")) {
			let m = s.split("/");
			for (; m[0] === ".."; ) m.shift(), v.pop();
			i.pathname = m.join("/");
		}
		a = "/" + v.join("/");
	} else {
		let v = t.length - 1;
		if (s.startsWith("..")) {
			let m = s.split("/");
			for (; m[0] === ".."; ) m.shift(), (v -= 1);
			i.pathname = m.join("/");
		}
		a = v >= 0 ? t[v] : "/";
	}
	let c = Lx(i, a),
		d = s && s !== "/" && s.endsWith("/"),
		p = (o || s === ".") && n.endsWith("/");
	return !c.pathname.endsWith("/") && (d || p) && (c.pathname += "/"), c;
}
const Yn = (e) => e.join("/").replace(/\/\/+/g, "/"),
	Rx = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
	Px = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
	Dx = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Hd {
	constructor(t, n, r, i) {
		i === void 0 && (i = !1),
			(this.status = t),
			(this.statusText = n || ""),
			(this.internal = i),
			r instanceof Error
				? ((this.data = r.toString()), (this.error = r))
				: (this.data = r);
	}
}
function Dv(e) {
	return (
		e != null &&
		typeof e.status == "number" &&
		typeof e.statusText == "string" &&
		typeof e.internal == "boolean" &&
		"data" in e
	);
}
const Av = ["post", "put", "patch", "delete"],
	Ax = new Set(Av),
	Mx = ["get", ...Av],
	Ix = new Set(Mx),
	$x = new Set([301, 302, 303, 307, 308]),
	Fx = new Set([307, 308]),
	Ou = {
		state: "idle",
		location: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
	},
	zx = {
		state: "idle",
		data: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
	},
	Do = {
		state: "unblocked",
		proceed: void 0,
		reset: void 0,
		location: void 0,
	},
	Mv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	Ux = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
	Iv = "remix-router-transitions";
function Bx(e) {
	const t = e.window ? e.window : typeof window < "u" ? window : void 0,
		n =
			typeof t < "u" &&
			typeof t.document < "u" &&
			typeof t.document.createElement < "u",
		r = !n;
	ue(
		e.routes.length > 0,
		"You must provide a non-empty routes array to createRouter"
	);
	let i;
	if (e.mapRouteProperties) i = e.mapRouteProperties;
	else if (e.detectErrorBoundary) {
		let T = e.detectErrorBoundary;
		i = (L) => ({ hasErrorBoundary: T(L) });
	} else i = Ux;
	let o = {},
		s = Rc(e.routes, i, void 0, o),
		a,
		c = e.basename || "/",
		d = Ze(
			{
				v7_fetcherPersist: !1,
				v7_normalizeFormMethod: !1,
				v7_prependBasename: !1,
			},
			e.future
		),
		p = null,
		v = new Set(),
		m = null,
		b = null,
		S = null,
		N = e.hydrationData != null,
		R = Ki(s, e.history.location, c),
		y = null;
	if (R == null) {
		let T = rn(404, { pathname: e.history.location.pathname }),
			{ matches: L, route: M } = qp(s);
		(R = L), (y = { [M.id]: T });
	}
	let g =
			!R.some((T) => T.route.lazy) &&
			(!R.some((T) => T.route.loader) || e.hydrationData != null),
		E,
		w = {
			historyAction: e.history.action,
			location: e.history.location,
			matches: R,
			initialized: g,
			navigation: Ou,
			restoreScrollPosition: e.hydrationData != null ? !1 : null,
			preventScrollReset: !1,
			revalidation: "idle",
			loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
			actionData: (e.hydrationData && e.hydrationData.actionData) || null,
			errors: (e.hydrationData && e.hydrationData.errors) || y,
			fetchers: new Map(),
			blockers: new Map(),
		},
		A = nt.Pop,
		D = !1,
		P,
		z = !1,
		Y = new Map(),
		G = null,
		fe = !1,
		Be = !1,
		Re = [],
		mt = [],
		Ee = new Map(),
		ot = 0,
		et = -1,
		$ = new Map(),
		X = new Set(),
		j = new Map(),
		de = new Map(),
		he = new Set(),
		He = new Map(),
		we = new Map(),
		Ne = !1;
	function Pe() {
		if (
			((p = e.history.listen((T) => {
				let { action: L, location: M, delta: B } = T;
				if (Ne) {
					Ne = !1;
					return;
				}
				hi(
					we.size === 0 || B != null,
					"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
				);
				let Q = Pl({
					currentLocation: w.location,
					nextLocation: M,
					historyAction: L,
				});
				if (Q && B != null) {
					(Ne = !0),
						e.history.go(B * -1),
						xi(Q, {
							state: "blocked",
							location: M,
							proceed() {
								xi(Q, {
									state: "proceeding",
									proceed: void 0,
									reset: void 0,
									location: M,
								}),
									e.history.go(B);
							},
							reset() {
								let le = new Map(w.blockers);
								le.set(Q, Do), Ye({ blockers: le });
							},
						});
					return;
				}
				return gt(L, M);
			})),
			n)
		) {
			Zx(t, Y);
			let T = () => eE(t, Y);
			t.addEventListener("pagehide", T),
				(G = () => t.removeEventListener("pagehide", T));
		}
		return w.initialized || gt(nt.Pop, w.location), E;
	}
	function Gt() {
		p && p(),
			G && G(),
			v.clear(),
			P && P.abort(),
			w.fetchers.forEach((T, L) => zt(L)),
			w.blockers.forEach((T, L) => _i(L));
	}
	function q(T) {
		return v.add(T), () => v.delete(T);
	}
	function Ye(T, L) {
		L === void 0 && (L = {}), (w = Ze({}, w, T));
		let M = [],
			B = [];
		d.v7_fetcherPersist &&
			w.fetchers.forEach((Q, le) => {
				Q.state === "idle" && (he.has(le) ? B.push(le) : M.push(le));
			}),
			[...v].forEach((Q) =>
				Q(w, {
					deletedFetchers: B,
					unstable_viewTransitionOpts: L.viewTransitionOpts,
					unstable_flushSync: L.flushSync === !0,
				})
			),
			d.v7_fetcherPersist &&
				(M.forEach((Q) => w.fetchers.delete(Q)),
				B.forEach((Q) => zt(Q)));
	}
	function qt(T, L, M) {
		var B, Q;
		let { flushSync: le } = M === void 0 ? {} : M,
			ee =
				w.actionData != null &&
				w.navigation.formMethod != null &&
				wn(w.navigation.formMethod) &&
				w.navigation.state === "loading" &&
				((B = T.state) == null ? void 0 : B._isRedirect) !== !0,
			Z;
		L.actionData
			? Object.keys(L.actionData).length > 0
				? (Z = L.actionData)
				: (Z = null)
			: ee
			? (Z = w.actionData)
			: (Z = null);
		let J = L.loaderData
				? Gp(w.loaderData, L.loaderData, L.matches || [], L.errors)
				: w.loaderData,
			pe = w.blockers;
		pe.size > 0 &&
			((pe = new Map(pe)), pe.forEach((be, De) => pe.set(De, Do)));
		let st =
			D === !0 ||
			(w.navigation.formMethod != null &&
				wn(w.navigation.formMethod) &&
				((Q = T.state) == null ? void 0 : Q._isRedirect) !== !0);
		a && ((s = a), (a = void 0)),
			fe ||
				A === nt.Pop ||
				(A === nt.Push
					? e.history.push(T, T.state)
					: A === nt.Replace && e.history.replace(T, T.state));
		let ae;
		if (A === nt.Pop) {
			let be = Y.get(w.location.pathname);
			be && be.has(T.pathname)
				? (ae = { currentLocation: w.location, nextLocation: T })
				: Y.has(T.pathname) &&
				  (ae = { currentLocation: T, nextLocation: w.location });
		} else if (z) {
			let be = Y.get(w.location.pathname);
			be
				? be.add(T.pathname)
				: ((be = new Set([T.pathname])),
				  Y.set(w.location.pathname, be)),
				(ae = { currentLocation: w.location, nextLocation: T });
		}
		Ye(
			Ze({}, L, {
				actionData: Z,
				loaderData: J,
				historyAction: A,
				location: T,
				initialized: !0,
				navigation: Ou,
				revalidation: "idle",
				restoreScrollPosition: vo(T, L.matches || w.matches),
				preventScrollReset: st,
				blockers: pe,
			}),
			{ viewTransitionOpts: ae, flushSync: le === !0 }
		),
			(A = nt.Pop),
			(D = !1),
			(z = !1),
			(fe = !1),
			(Be = !1),
			(Re = []),
			(mt = []);
	}
	async function yi(T, L) {
		if (typeof T == "number") {
			e.history.go(T);
			return;
		}
		let M = Dc(
				w.location,
				w.matches,
				c,
				d.v7_prependBasename,
				T,
				L == null ? void 0 : L.fromRouteId,
				L == null ? void 0 : L.relative
			),
			{
				path: B,
				submission: Q,
				error: le,
			} = Hp(d.v7_normalizeFormMethod, !1, M, L),
			ee = w.location,
			Z = _l(w.location, B, L && L.state);
		Z = Ze({}, Z, e.history.encodeLocation(Z));
		let J = L && L.replace != null ? L.replace : void 0,
			pe = nt.Push;
		J === !0
			? (pe = nt.Replace)
			: J === !1 ||
			  (Q != null &&
					wn(Q.formMethod) &&
					Q.formAction === w.location.pathname + w.location.search &&
					(pe = nt.Replace));
		let st =
				L && "preventScrollReset" in L
					? L.preventScrollReset === !0
					: void 0,
			ae = (L && L.unstable_flushSync) === !0,
			be = Pl({
				currentLocation: ee,
				nextLocation: Z,
				historyAction: pe,
			});
		if (be) {
			xi(be, {
				state: "blocked",
				location: Z,
				proceed() {
					xi(be, {
						state: "proceeding",
						proceed: void 0,
						reset: void 0,
						location: Z,
					}),
						yi(T, L);
				},
				reset() {
					let De = new Map(w.blockers);
					De.set(be, Do), Ye({ blockers: De });
				},
			});
			return;
		}
		return await gt(pe, Z, {
			submission: Q,
			pendingError: le,
			preventScrollReset: st,
			replace: L && L.replace,
			enableViewTransition: L && L.unstable_viewTransition,
			flushSync: ae,
		});
	}
	function wi() {
		if (
			(mo(),
			Ye({ revalidation: "loading" }),
			w.navigation.state !== "submitting")
		) {
			if (w.navigation.state === "idle") {
				gt(w.historyAction, w.location, {
					startUninterruptedRevalidation: !0,
				});
				return;
			}
			gt(A || w.historyAction, w.navigation.location, {
				overrideNavigation: w.navigation,
			});
		}
	}
	async function gt(T, L, M) {
		P && P.abort(),
			(P = null),
			(A = T),
			(fe = (M && M.startUninterruptedRevalidation) === !0),
			ba(w.location, w.matches),
			(D = (M && M.preventScrollReset) === !0),
			(z = (M && M.enableViewTransition) === !0);
		let B = a || s,
			Q = M && M.overrideNavigation,
			le = Ki(B, L, c),
			ee = (M && M.flushSync) === !0;
		if (!le) {
			let De = rn(404, { pathname: L.pathname }),
				{ matches: Xe, route: Tt } = qp(B);
			go(),
				qt(
					L,
					{ matches: Xe, loaderData: {}, errors: { [Tt.id]: De } },
					{ flushSync: ee }
				);
			return;
		}
		if (
			w.initialized &&
			!Be &&
			Qx(w.location, L) &&
			!(M && M.submission && wn(M.submission.formMethod))
		) {
			qt(L, { matches: le }, { flushSync: ee });
			return;
		}
		P = new AbortController();
		let Z = Mo(e.history, L, P.signal, M && M.submission),
			J,
			pe;
		if (M && M.pendingError) pe = { [tl(le).route.id]: M.pendingError };
		else if (M && M.submission && wn(M.submission.formMethod)) {
			let De = await Mn(Z, L, M.submission, le, {
				replace: M.replace,
				flushSync: ee,
			});
			if (De.shortCircuited) return;
			(J = De.pendingActionData),
				(pe = De.pendingActionError),
				(Q = Ru(L, M.submission)),
				(ee = !1),
				(Z = new Request(Z.url, { signal: Z.signal }));
		}
		let {
			shortCircuited: st,
			loaderData: ae,
			errors: be,
		} = await Se(
			Z,
			L,
			le,
			Q,
			M && M.submission,
			M && M.fetcherSubmission,
			M && M.replace,
			ee,
			J,
			pe
		);
		st ||
			((P = null),
			qt(
				L,
				Ze({ matches: le }, J ? { actionData: J } : {}, {
					loaderData: ae,
					errors: be,
				})
			));
	}
	async function Mn(T, L, M, B, Q) {
		Q === void 0 && (Q = {}), mo();
		let le = qx(L, M);
		Ye({ navigation: le }, { flushSync: Q.flushSync === !0 });
		let ee,
			Z = Mc(B, L);
		if (!Z.route.action && !Z.route.lazy)
			ee = {
				type: rt.error,
				error: rn(405, {
					method: T.method,
					pathname: L.pathname,
					routeId: Z.route.id,
				}),
			};
		else if (
			((ee = await Ao("action", T, Z, B, o, i, c)), T.signal.aborted)
		)
			return { shortCircuited: !0 };
		if (Zi(ee)) {
			let J;
			return (
				Q && Q.replace != null
					? (J = Q.replace)
					: (J =
							ee.location ===
							w.location.pathname + w.location.search),
				await Dr(w, ee, { submission: M, replace: J }),
				{ shortCircuited: !0 }
			);
		}
		if (nl(ee)) {
			let J = tl(B, Z.route.id);
			return (
				(Q && Q.replace) !== !0 && (A = nt.Push),
				{
					pendingActionData: {},
					pendingActionError: { [J.route.id]: ee.error },
				}
			);
		}
		if (ri(ee)) throw rn(400, { type: "defer-action" });
		return { pendingActionData: { [Z.route.id]: ee.data } };
	}
	async function Se(T, L, M, B, Q, le, ee, Z, J, pe) {
		let st = B || Ru(L, Q),
			ae = Q || le || em(st),
			be = a || s,
			[De, Xe] = Vp(
				e.history,
				w,
				M,
				ae,
				L,
				Be,
				Re,
				mt,
				he,
				j,
				X,
				be,
				c,
				J,
				pe
			);
		if (
			(go(
				(_e) =>
					!(M && M.some((ut) => ut.route.id === _e)) ||
					(De && De.some((ut) => ut.route.id === _e))
			),
			(et = ++ot),
			De.length === 0 && Xe.length === 0)
		) {
			let _e = $n();
			return (
				qt(
					L,
					Ze(
						{ matches: M, loaderData: {}, errors: pe || null },
						J ? { actionData: J } : {},
						_e ? { fetchers: new Map(w.fetchers) } : {}
					),
					{ flushSync: Z }
				),
				{ shortCircuited: !0 }
			);
		}
		if (!fe) {
			Xe.forEach((ut) => {
				let je = w.fetchers.get(ut.key),
					Dt = Io(void 0, je ? je.data : void 0);
				w.fetchers.set(ut.key, Dt);
			});
			let _e = J || w.actionData;
			Ye(
				Ze(
					{ navigation: st },
					_e
						? Object.keys(_e).length === 0
							? { actionData: null }
							: { actionData: _e }
						: {},
					Xe.length > 0 ? { fetchers: new Map(w.fetchers) } : {}
				),
				{ flushSync: Z }
			);
		}
		Xe.forEach((_e) => {
			Ee.has(_e.key) && Pt(_e.key),
				_e.controller && Ee.set(_e.key, _e.controller);
		});
		let Tt = () => Xe.forEach((_e) => Pt(_e.key));
		P && P.signal.addEventListener("abort", Tt);
		let {
			results: $r,
			loaderResults: Fr,
			fetcherResults: or,
		} = await Ol(w.matches, M, De, Xe, T);
		if (T.signal.aborted) return { shortCircuited: !0 };
		P && P.signal.removeEventListener("abort", Tt),
			Xe.forEach((_e) => Ee.delete(_e.key));
		let Ut = Jp($r);
		if (Ut) {
			if (Ut.idx >= De.length) {
				let _e = Xe[Ut.idx - De.length].key;
				X.add(_e);
			}
			return (
				await Dr(w, Ut.result, { replace: ee }), { shortCircuited: !0 }
			);
		}
		let { loaderData: hn, errors: at } = Xp(w, M, De, Fr, pe, Xe, or, He);
		He.forEach((_e, ut) => {
			_e.subscribe((je) => {
				(je || _e.done) && He.delete(ut);
			});
		});
		let vt = $n(),
			yt = Ir(et),
			Ge = vt || yt || Xe.length > 0;
		return Ze(
			{ loaderData: hn, errors: at },
			Ge ? { fetchers: new Map(w.fetchers) } : {}
		);
	}
	function fn(T, L, M, B) {
		if (r)
			throw new Error(
				"router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
			);
		Ee.has(T) && Pt(T);
		let Q = (B && B.unstable_flushSync) === !0,
			le = a || s,
			ee = Dc(
				w.location,
				w.matches,
				c,
				d.v7_prependBasename,
				M,
				L,
				B == null ? void 0 : B.relative
			),
			Z = Ki(le, ee, c);
		if (!Z) {
			Ar(T, L, rn(404, { pathname: ee }), { flushSync: Q });
			return;
		}
		let {
			path: J,
			submission: pe,
			error: st,
		} = Hp(d.v7_normalizeFormMethod, !0, ee, B);
		if (st) {
			Ar(T, L, st, { flushSync: Q });
			return;
		}
		let ae = Mc(Z, J);
		if (
			((D = (B && B.preventScrollReset) === !0), pe && wn(pe.formMethod))
		) {
			Pr(T, L, J, ae, Z, Q, pe);
			return;
		}
		j.set(T, { routeId: L, path: J }), ka(T, L, J, ae, Z, Q, pe);
	}
	async function Pr(T, L, M, B, Q, le, ee) {
		if ((mo(), j.delete(T), !B.route.action && !B.route.lazy)) {
			let je = rn(405, {
				method: ee.formMethod,
				pathname: M,
				routeId: L,
			});
			Ar(T, L, je, { flushSync: le });
			return;
		}
		let Z = w.fetchers.get(T);
		Tn(T, Jx(ee, Z), { flushSync: le });
		let J = new AbortController(),
			pe = Mo(e.history, M, J.signal, ee);
		Ee.set(T, J);
		let st = ot,
			ae = await Ao("action", pe, B, Q, o, i, c);
		if (pe.signal.aborted) {
			Ee.get(T) === J && Ee.delete(T);
			return;
		}
		if (he.has(T)) {
			Tn(T, cr(void 0));
			return;
		}
		if (Zi(ae))
			if ((Ee.delete(T), et > st)) {
				Tn(T, cr(void 0));
				return;
			} else
				return (
					X.add(T),
					Tn(T, Io(ee)),
					Dr(w, ae, { fetcherSubmission: ee })
				);
		if (nl(ae)) {
			Ar(T, L, ae.error);
			return;
		}
		if (ri(ae)) throw rn(400, { type: "defer-action" });
		let be = w.navigation.location || w.location,
			De = Mo(e.history, be, J.signal),
			Xe = a || s,
			Tt =
				w.navigation.state !== "idle"
					? Ki(Xe, w.navigation.location, c)
					: w.matches;
		ue(Tt, "Didn't find any matches after fetcher action");
		let $r = ++ot;
		$.set(T, $r);
		let Fr = Io(ee, ae.data);
		w.fetchers.set(T, Fr);
		let [or, Ut] = Vp(
			e.history,
			w,
			Tt,
			ee,
			be,
			Be,
			Re,
			mt,
			he,
			j,
			X,
			Xe,
			c,
			{ [B.route.id]: ae.data },
			void 0
		);
		Ut.filter((je) => je.key !== T).forEach((je) => {
			let Dt = je.key,
				yo = w.fetchers.get(Dt),
				wo = Io(void 0, yo ? yo.data : void 0);
			w.fetchers.set(Dt, wo),
				Ee.has(Dt) && Pt(Dt),
				je.controller && Ee.set(Dt, je.controller);
		}),
			Ye({ fetchers: new Map(w.fetchers) });
		let hn = () => Ut.forEach((je) => Pt(je.key));
		J.signal.addEventListener("abort", hn);
		let {
			results: at,
			loaderResults: vt,
			fetcherResults: yt,
		} = await Ol(w.matches, Tt, or, Ut, De);
		if (J.signal.aborted) return;
		J.signal.removeEventListener("abort", hn),
			$.delete(T),
			Ee.delete(T),
			Ut.forEach((je) => Ee.delete(je.key));
		let Ge = Jp(at);
		if (Ge) {
			if (Ge.idx >= or.length) {
				let je = Ut[Ge.idx - or.length].key;
				X.add(je);
			}
			return Dr(w, Ge.result);
		}
		let { loaderData: _e, errors: ut } = Xp(
			w,
			w.matches,
			or,
			vt,
			void 0,
			Ut,
			yt,
			He
		);
		if (w.fetchers.has(T)) {
			let je = cr(ae.data);
			w.fetchers.set(T, je);
		}
		Ir($r),
			w.navigation.state === "loading" && $r > et
				? (ue(A, "Expected pending action"),
				  P && P.abort(),
				  qt(w.navigation.location, {
						matches: Tt,
						loaderData: _e,
						errors: ut,
						fetchers: new Map(w.fetchers),
				  }))
				: (Ye({
						errors: ut,
						loaderData: Gp(w.loaderData, _e, Tt, ut),
						fetchers: new Map(w.fetchers),
				  }),
				  (Be = !1));
	}
	async function ka(T, L, M, B, Q, le, ee) {
		let Z = w.fetchers.get(T);
		Tn(T, Io(ee, Z ? Z.data : void 0), { flushSync: le });
		let J = new AbortController(),
			pe = Mo(e.history, M, J.signal);
		Ee.set(T, J);
		let st = ot,
			ae = await Ao("loader", pe, B, Q, o, i, c);
		if (
			(ri(ae) && (ae = (await zv(ae, pe.signal, !0)) || ae),
			Ee.get(T) === J && Ee.delete(T),
			!pe.signal.aborted)
		) {
			if (he.has(T)) {
				Tn(T, cr(void 0));
				return;
			}
			if (Zi(ae))
				if (et > st) {
					Tn(T, cr(void 0));
					return;
				} else {
					X.add(T), await Dr(w, ae);
					return;
				}
			if (nl(ae)) {
				Ar(T, L, ae.error);
				return;
			}
			ue(!ri(ae), "Unhandled fetcher deferred data"), Tn(T, cr(ae.data));
		}
	}
	async function Dr(T, L, M) {
		let {
			submission: B,
			fetcherSubmission: Q,
			replace: le,
		} = M === void 0 ? {} : M;
		L.revalidate && (Be = !0);
		let ee = _l(T.location, L.location, { _isRedirect: !0 });
		if ((ue(ee, "Expected a location on the redirect navigation"), n)) {
			let be = !1;
			if (L.reloadDocument) be = !0;
			else if (Mv.test(L.location)) {
				const De = e.history.createURL(L.location);
				be =
					De.origin !== t.location.origin ||
					br(De.pathname, c) == null;
			}
			if (be) {
				le
					? t.location.replace(L.location)
					: t.location.assign(L.location);
				return;
			}
		}
		P = null;
		let Z = le === !0 ? nt.Replace : nt.Push,
			{ formMethod: J, formAction: pe, formEncType: st } = T.navigation;
		!B && !Q && J && pe && st && (B = em(T.navigation));
		let ae = B || Q;
		if (Fx.has(L.status) && ae && wn(ae.formMethod))
			await gt(Z, ee, {
				submission: Ze({}, ae, { formAction: L.location }),
				preventScrollReset: D,
			});
		else {
			let be = Ru(ee, B);
			await gt(Z, ee, {
				overrideNavigation: be,
				fetcherSubmission: Q,
				preventScrollReset: D,
			});
		}
	}
	async function Ol(T, L, M, B, Q) {
		let le = await Promise.all([
				...M.map((J) => Ao("loader", Q, J, L, o, i, c)),
				...B.map((J) =>
					J.matches && J.match && J.controller
						? Ao(
								"loader",
								Mo(e.history, J.path, J.controller.signal),
								J.match,
								J.matches,
								o,
								i,
								c
						  )
						: {
								type: rt.error,
								error: rn(404, { pathname: J.path }),
						  }
				),
			]),
			ee = le.slice(0, M.length),
			Z = le.slice(M.length);
		return (
			await Promise.all([
				Zp(
					T,
					M,
					ee,
					ee.map(() => Q.signal),
					!1,
					w.loaderData
				),
				Zp(
					T,
					B.map((J) => J.match),
					Z,
					B.map((J) => (J.controller ? J.controller.signal : null)),
					!0
				),
			]),
			{ results: le, loaderResults: ee, fetcherResults: Z }
		);
	}
	function mo() {
		(Be = !0),
			Re.push(...go()),
			j.forEach((T, L) => {
				Ee.has(L) && (mt.push(L), Pt(L));
			});
	}
	function Tn(T, L, M) {
		M === void 0 && (M = {}),
			w.fetchers.set(T, L),
			Ye(
				{ fetchers: new Map(w.fetchers) },
				{ flushSync: (M && M.flushSync) === !0 }
			);
	}
	function Ar(T, L, M, B) {
		B === void 0 && (B = {});
		let Q = tl(w.matches, L);
		zt(T),
			Ye(
				{ errors: { [Q.route.id]: M }, fetchers: new Map(w.fetchers) },
				{ flushSync: (B && B.flushSync) === !0 }
			);
	}
	function Mr(T) {
		return (
			d.v7_fetcherPersist &&
				(de.set(T, (de.get(T) || 0) + 1), he.has(T) && he.delete(T)),
			w.fetchers.get(T) || zx
		);
	}
	function zt(T) {
		let L = w.fetchers.get(T);
		Ee.has(T) && !(L && L.state === "loading" && $.has(T)) && Pt(T),
			j.delete(T),
			$.delete(T),
			X.delete(T),
			he.delete(T),
			w.fetchers.delete(T);
	}
	function Rl(T) {
		if (d.v7_fetcherPersist) {
			let L = (de.get(T) || 0) - 1;
			L <= 0 ? (de.delete(T), he.add(T)) : de.set(T, L);
		} else zt(T);
		Ye({ fetchers: new Map(w.fetchers) });
	}
	function Pt(T) {
		let L = Ee.get(T);
		ue(L, "Expected fetch controller: " + T), L.abort(), Ee.delete(T);
	}
	function In(T) {
		for (let L of T) {
			let M = Mr(L),
				B = cr(M.data);
			w.fetchers.set(L, B);
		}
	}
	function $n() {
		let T = [],
			L = !1;
		for (let M of X) {
			let B = w.fetchers.get(M);
			ue(B, "Expected fetcher: " + M),
				B.state === "loading" && (X.delete(M), T.push(M), (L = !0));
		}
		return In(T), L;
	}
	function Ir(T) {
		let L = [];
		for (let [M, B] of $)
			if (B < T) {
				let Q = w.fetchers.get(M);
				ue(Q, "Expected fetcher: " + M),
					Q.state === "loading" && (Pt(M), $.delete(M), L.push(M));
			}
		return In(L), L.length > 0;
	}
	function Ta(T, L) {
		let M = w.blockers.get(T) || Do;
		return we.get(T) !== L && we.set(T, L), M;
	}
	function _i(T) {
		w.blockers.delete(T), we.delete(T);
	}
	function xi(T, L) {
		let M = w.blockers.get(T) || Do;
		ue(
			(M.state === "unblocked" && L.state === "blocked") ||
				(M.state === "blocked" && L.state === "blocked") ||
				(M.state === "blocked" && L.state === "proceeding") ||
				(M.state === "blocked" && L.state === "unblocked") ||
				(M.state === "proceeding" && L.state === "unblocked"),
			"Invalid blocker state transition: " + M.state + " -> " + L.state
		);
		let B = new Map(w.blockers);
		B.set(T, L), Ye({ blockers: B });
	}
	function Pl(T) {
		let { currentLocation: L, nextLocation: M, historyAction: B } = T;
		if (we.size === 0) return;
		we.size > 1 && hi(!1, "A router only supports one blocker at a time");
		let Q = Array.from(we.entries()),
			[le, ee] = Q[Q.length - 1],
			Z = w.blockers.get(le);
		if (
			!(Z && Z.state === "proceeding") &&
			ee({ currentLocation: L, nextLocation: M, historyAction: B })
		)
			return le;
	}
	function go(T) {
		let L = [];
		return (
			He.forEach((M, B) => {
				(!T || T(B)) && (M.cancel(), L.push(B), He.delete(B));
			}),
			L
		);
	}
	function Na(T, L, M) {
		if (((m = T), (S = L), (b = M || null), !N && w.navigation === Ou)) {
			N = !0;
			let B = vo(w.location, w.matches);
			B != null && Ye({ restoreScrollPosition: B });
		}
		return () => {
			(m = null), (S = null), (b = null);
		};
	}
	function Dl(T, L) {
		return (
			(b &&
				b(
					T,
					L.map((B) => gx(B, w.loaderData))
				)) ||
			T.key
		);
	}
	function ba(T, L) {
		if (m && S) {
			let M = Dl(T, L);
			m[M] = S();
		}
	}
	function vo(T, L) {
		if (m) {
			let M = Dl(T, L),
				B = m[M];
			if (typeof B == "number") return B;
		}
		return null;
	}
	function Ei(T) {
		(o = {}), (a = Rc(T, i, void 0, o));
	}
	return (
		(E = {
			get basename() {
				return c;
			},
			get state() {
				return w;
			},
			get routes() {
				return s;
			},
			get window() {
				return t;
			},
			initialize: Pe,
			subscribe: q,
			enableScrollRestoration: Na,
			navigate: yi,
			fetch: fn,
			revalidate: wi,
			createHref: (T) => e.history.createHref(T),
			encodeLocation: (T) => e.history.encodeLocation(T),
			getFetcher: Mr,
			deleteFetcher: Rl,
			dispose: Gt,
			getBlocker: Ta,
			deleteBlocker: _i,
			_internalFetchControllers: Ee,
			_internalActiveDeferreds: He,
			_internalSetRoutes: Ei,
		}),
		E
	);
}
function Wx(e) {
	return (
		e != null &&
		(("formData" in e && e.formData != null) ||
			("body" in e && e.body !== void 0))
	);
}
function Dc(e, t, n, r, i, o, s) {
	let a, c;
	if (o) {
		a = [];
		for (let p of t)
			if ((a.push(p), p.route.id === o)) {
				c = p;
				break;
			}
	} else (a = t), (c = t[t.length - 1]);
	let d = Wd(
		i || ".",
		wa(a).map((p) => p.pathnameBase),
		br(e.pathname, n) || e.pathname,
		s === "path"
	);
	return (
		i == null && ((d.search = e.search), (d.hash = e.hash)),
		(i == null || i === "" || i === ".") &&
			c &&
			c.route.index &&
			!Vd(d.search) &&
			(d.search = d.search
				? d.search.replace(/^\?/, "?index&")
				: "?index"),
		r &&
			n !== "/" &&
			(d.pathname = d.pathname === "/" ? n : Yn([n, d.pathname])),
		pi(d)
	);
}
function Hp(e, t, n, r) {
	if (!r || !Wx(r)) return { path: n };
	if (r.formMethod && !Gx(r.formMethod))
		return { path: n, error: rn(405, { method: r.formMethod }) };
	let i = () => ({ path: n, error: rn(400, { type: "invalid-body" }) }),
		o = r.formMethod || "get",
		s = e ? o.toUpperCase() : o.toLowerCase(),
		a = Fv(n);
	if (r.body !== void 0) {
		if (r.formEncType === "text/plain") {
			if (!wn(s)) return i();
			let m =
				typeof r.body == "string"
					? r.body
					: r.body instanceof FormData ||
					  r.body instanceof URLSearchParams
					? Array.from(r.body.entries()).reduce((b, S) => {
							let [N, R] = S;
							return (
								"" +
								b +
								N +
								"=" +
								R +
								`
`
							);
					  }, "")
					: String(r.body);
			return {
				path: n,
				submission: {
					formMethod: s,
					formAction: a,
					formEncType: r.formEncType,
					formData: void 0,
					json: void 0,
					text: m,
				},
			};
		} else if (r.formEncType === "application/json") {
			if (!wn(s)) return i();
			try {
				let m = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
				return {
					path: n,
					submission: {
						formMethod: s,
						formAction: a,
						formEncType: r.formEncType,
						formData: void 0,
						json: m,
						text: void 0,
					},
				};
			} catch {
				return i();
			}
		}
	}
	ue(
		typeof FormData == "function",
		"FormData is not available in this environment"
	);
	let c, d;
	if (r.formData) (c = Ac(r.formData)), (d = r.formData);
	else if (r.body instanceof FormData) (c = Ac(r.body)), (d = r.body);
	else if (r.body instanceof URLSearchParams) (c = r.body), (d = Yp(c));
	else if (r.body == null) (c = new URLSearchParams()), (d = new FormData());
	else
		try {
			(c = new URLSearchParams(r.body)), (d = Yp(c));
		} catch {
			return i();
		}
	let p = {
		formMethod: s,
		formAction: a,
		formEncType:
			(r && r.formEncType) || "application/x-www-form-urlencoded",
		formData: d,
		json: void 0,
		text: void 0,
	};
	if (wn(p.formMethod)) return { path: n, submission: p };
	let v = rr(n);
	return (
		t && v.search && Vd(v.search) && c.append("index", ""),
		(v.search = "?" + c),
		{ path: pi(v), submission: p }
	);
}
function Hx(e, t) {
	let n = e;
	if (t) {
		let r = e.findIndex((i) => i.route.id === t);
		r >= 0 && (n = e.slice(0, r));
	}
	return n;
}
function Vp(e, t, n, r, i, o, s, a, c, d, p, v, m, b, S) {
	let N = S ? Object.values(S)[0] : b ? Object.values(b)[0] : void 0,
		R = e.createURL(t.location),
		y = e.createURL(i),
		g = S ? Object.keys(S)[0] : void 0,
		w = Hx(n, g).filter((D, P) => {
			if (D.route.lazy) return !0;
			if (D.route.loader == null) return !1;
			if (
				Vx(t.loaderData, t.matches[P], D) ||
				s.some((G) => G === D.route.id)
			)
				return !0;
			let z = t.matches[P],
				Y = D;
			return Kp(
				D,
				Ze(
					{
						currentUrl: R,
						currentParams: z.params,
						nextUrl: y,
						nextParams: Y.params,
					},
					r,
					{
						actionResult: N,
						defaultShouldRevalidate:
							o ||
							R.pathname + R.search === y.pathname + y.search ||
							R.search !== y.search ||
							$v(z, Y),
					}
				)
			);
		}),
		A = [];
	return (
		d.forEach((D, P) => {
			if (!n.some((Be) => Be.route.id === D.routeId) || c.has(P)) return;
			let z = Ki(v, D.path, m);
			if (!z) {
				A.push({
					key: P,
					routeId: D.routeId,
					path: D.path,
					matches: null,
					match: null,
					controller: null,
				});
				return;
			}
			let Y = t.fetchers.get(P),
				G = Mc(z, D.path),
				fe = !1;
			p.has(P)
				? (fe = !1)
				: a.includes(P)
				? (fe = !0)
				: Y && Y.state !== "idle" && Y.data === void 0
				? (fe = o)
				: (fe = Kp(
						G,
						Ze(
							{
								currentUrl: R,
								currentParams:
									t.matches[t.matches.length - 1].params,
								nextUrl: y,
								nextParams: n[n.length - 1].params,
							},
							r,
							{ actionResult: N, defaultShouldRevalidate: o }
						)
				  )),
				fe &&
					A.push({
						key: P,
						routeId: D.routeId,
						path: D.path,
						matches: z,
						match: G,
						controller: new AbortController(),
					});
		}),
		[w, A]
	);
}
function Vx(e, t, n) {
	let r = !t || n.route.id !== t.route.id,
		i = e[n.route.id] === void 0;
	return r || i;
}
function $v(e, t) {
	let n = e.route.path;
	return (
		e.pathname !== t.pathname ||
		(n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
	);
}
function Kp(e, t) {
	if (e.route.shouldRevalidate) {
		let n = e.route.shouldRevalidate(t);
		if (typeof n == "boolean") return n;
	}
	return t.defaultShouldRevalidate;
}
async function Qp(e, t, n) {
	if (!e.lazy) return;
	let r = await e.lazy();
	if (!e.lazy) return;
	let i = n[e.id];
	ue(i, "No route found in manifest");
	let o = {};
	for (let s in r) {
		let c = i[s] !== void 0 && s !== "hasErrorBoundary";
		hi(
			!c,
			'Route "' +
				i.id +
				'" has a static property "' +
				s +
				'" defined but its lazy function is also returning a value for this property. ' +
				('The lazy route property "' + s + '" will be ignored.')
		),
			!c && !px.has(s) && (o[s] = r[s]);
	}
	Object.assign(i, o), Object.assign(i, Ze({}, t(i), { lazy: void 0 }));
}
async function Ao(e, t, n, r, i, o, s, a) {
	a === void 0 && (a = {});
	let c,
		d,
		p,
		v = (S) => {
			let N,
				R = new Promise((y, g) => (N = g));
			return (
				(p = () => N()),
				t.signal.addEventListener("abort", p),
				Promise.race([
					S({
						request: t,
						params: n.params,
						context: a.requestContext,
					}),
					R,
				])
			);
		};
	try {
		let S = n.route[e];
		if (n.route.lazy)
			if (S) {
				let N,
					R = await Promise.all([
						v(S).catch((y) => {
							N = y;
						}),
						Qp(n.route, o, i),
					]);
				if (N) throw N;
				d = R[0];
			} else if ((await Qp(n.route, o, i), (S = n.route[e]), S))
				d = await v(S);
			else if (e === "action") {
				let N = new URL(t.url),
					R = N.pathname + N.search;
				throw rn(405, {
					method: t.method,
					pathname: R,
					routeId: n.route.id,
				});
			} else return { type: rt.data, data: void 0 };
		else if (S) d = await v(S);
		else {
			let N = new URL(t.url),
				R = N.pathname + N.search;
			throw rn(404, { pathname: R });
		}
		ue(
			d !== void 0,
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
	} catch (S) {
		(c = rt.error), (d = S);
	} finally {
		p && t.signal.removeEventListener("abort", p);
	}
	if (Xx(d)) {
		let S = d.status;
		if ($x.has(S)) {
			let y = d.headers.get("Location");
			if (
				(ue(
					y,
					"Redirects returned/thrown from loaders/actions must have a Location header"
				),
				!Mv.test(y))
			)
				y = Dc(new URL(t.url), r.slice(0, r.indexOf(n) + 1), s, !0, y);
			else if (!a.isStaticRequest) {
				let g = new URL(t.url),
					E = y.startsWith("//")
						? new URL(g.protocol + y)
						: new URL(y),
					w = br(E.pathname, s) != null;
				E.origin === g.origin &&
					w &&
					(y = E.pathname + E.search + E.hash);
			}
			if (a.isStaticRequest) throw (d.headers.set("Location", y), d);
			return {
				type: rt.redirect,
				status: S,
				location: y,
				revalidate: d.headers.get("X-Remix-Revalidate") !== null,
				reloadDocument:
					d.headers.get("X-Remix-Reload-Document") !== null,
			};
		}
		if (a.isRouteRequest)
			throw { type: c === rt.error ? rt.error : rt.data, response: d };
		let N,
			R = d.headers.get("Content-Type");
		return (
			R && /\bapplication\/json\b/.test(R)
				? (N = await d.json())
				: (N = await d.text()),
			c === rt.error
				? {
						type: c,
						error: new Hd(S, d.statusText, N),
						headers: d.headers,
				  }
				: {
						type: rt.data,
						data: N,
						statusCode: d.status,
						headers: d.headers,
				  }
		);
	}
	if (c === rt.error) return { type: c, error: d };
	if (Yx(d)) {
		var m, b;
		return {
			type: rt.deferred,
			deferredData: d,
			statusCode: (m = d.init) == null ? void 0 : m.status,
			headers:
				((b = d.init) == null ? void 0 : b.headers) &&
				new Headers(d.init.headers),
		};
	}
	return { type: rt.data, data: d };
}
function Mo(e, t, n, r) {
	let i = e.createURL(Fv(t)).toString(),
		o = { signal: n };
	if (r && wn(r.formMethod)) {
		let { formMethod: s, formEncType: a } = r;
		(o.method = s.toUpperCase()),
			a === "application/json"
				? ((o.headers = new Headers({ "Content-Type": a })),
				  (o.body = JSON.stringify(r.json)))
				: a === "text/plain"
				? (o.body = r.text)
				: a === "application/x-www-form-urlencoded" && r.formData
				? (o.body = Ac(r.formData))
				: (o.body = r.formData);
	}
	return new Request(i, o);
}
function Ac(e) {
	let t = new URLSearchParams();
	for (let [n, r] of e.entries())
		t.append(n, typeof r == "string" ? r : r.name);
	return t;
}
function Yp(e) {
	let t = new FormData();
	for (let [n, r] of e.entries()) t.append(n, r);
	return t;
}
function Kx(e, t, n, r, i) {
	let o = {},
		s = null,
		a,
		c = !1,
		d = {};
	return (
		n.forEach((p, v) => {
			let m = t[v].route.id;
			if (
				(ue(
					!Zi(p),
					"Cannot handle redirect results in processLoaderData"
				),
				nl(p))
			) {
				let b = tl(e, m),
					S = p.error;
				r && ((S = Object.values(r)[0]), (r = void 0)),
					(s = s || {}),
					s[b.route.id] == null && (s[b.route.id] = S),
					(o[m] = void 0),
					c || ((c = !0), (a = Dv(p.error) ? p.error.status : 500)),
					p.headers && (d[m] = p.headers);
			} else
				ri(p)
					? (i.set(m, p.deferredData), (o[m] = p.deferredData.data))
					: (o[m] = p.data),
					p.statusCode != null &&
						p.statusCode !== 200 &&
						!c &&
						(a = p.statusCode),
					p.headers && (d[m] = p.headers);
		}),
		r && ((s = r), (o[Object.keys(r)[0]] = void 0)),
		{ loaderData: o, errors: s, statusCode: a || 200, loaderHeaders: d }
	);
}
function Xp(e, t, n, r, i, o, s, a) {
	let { loaderData: c, errors: d } = Kx(t, n, r, i, a);
	for (let p = 0; p < o.length; p++) {
		let { key: v, match: m, controller: b } = o[p];
		ue(
			s !== void 0 && s[p] !== void 0,
			"Did not find corresponding fetcher result"
		);
		let S = s[p];
		if (!(b && b.signal.aborted))
			if (nl(S)) {
				let N = tl(e.matches, m == null ? void 0 : m.route.id);
				(d && d[N.route.id]) ||
					(d = Ze({}, d, { [N.route.id]: S.error })),
					e.fetchers.delete(v);
			} else if (Zi(S)) ue(!1, "Unhandled fetcher revalidation redirect");
			else if (ri(S)) ue(!1, "Unhandled fetcher deferred data");
			else {
				let N = cr(S.data);
				e.fetchers.set(v, N);
			}
	}
	return { loaderData: c, errors: d };
}
function Gp(e, t, n, r) {
	let i = Ze({}, t);
	for (let o of n) {
		let s = o.route.id;
		if (
			(t.hasOwnProperty(s)
				? t[s] !== void 0 && (i[s] = t[s])
				: e[s] !== void 0 && o.route.loader && (i[s] = e[s]),
			r && r.hasOwnProperty(s))
		)
			break;
	}
	return i;
}
function tl(e, t) {
	return (
		(t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
			.reverse()
			.find((r) => r.route.hasErrorBoundary === !0) || e[0]
	);
}
function qp(e) {
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
function rn(e, t) {
	let { pathname: n, routeId: r, method: i, type: o } = t === void 0 ? {} : t,
		s = "Unknown Server Error",
		a = "Unknown @remix-run/router error";
	return (
		e === 400
			? ((s = "Bad Request"),
			  i && n && r
					? (a =
							"You made a " +
							i +
							' request to "' +
							n +
							'" but ' +
							('did not provide a `loader` for route "' +
								r +
								'", ') +
							"so there is no way to handle the request.")
					: o === "defer-action"
					? (a = "defer() is not supported in actions")
					: o === "invalid-body" &&
					  (a = "Unable to encode submission body"))
			: e === 403
			? ((s = "Forbidden"),
			  (a = 'Route "' + r + '" does not match URL "' + n + '"'))
			: e === 404
			? ((s = "Not Found"), (a = 'No route matches URL "' + n + '"'))
			: e === 405 &&
			  ((s = "Method Not Allowed"),
			  i && n && r
					? (a =
							"You made a " +
							i.toUpperCase() +
							' request to "' +
							n +
							'" but ' +
							('did not provide an `action` for route "' +
								r +
								'", ') +
							"so there is no way to handle the request.")
					: i &&
					  (a = 'Invalid request method "' + i.toUpperCase() + '"')),
		new Hd(e || 500, s, new Error(a), !0)
	);
}
function Jp(e) {
	for (let t = e.length - 1; t >= 0; t--) {
		let n = e[t];
		if (Zi(n)) return { result: n, idx: t };
	}
}
function Fv(e) {
	let t = typeof e == "string" ? rr(e) : e;
	return pi(Ze({}, t, { hash: "" }));
}
function Qx(e, t) {
	return e.pathname !== t.pathname || e.search !== t.search
		? !1
		: e.hash === ""
		? t.hash !== ""
		: e.hash === t.hash
		? !0
		: t.hash !== "";
}
function ri(e) {
	return e.type === rt.deferred;
}
function nl(e) {
	return e.type === rt.error;
}
function Zi(e) {
	return (e && e.type) === rt.redirect;
}
function Yx(e) {
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
function Xx(e) {
	return (
		e != null &&
		typeof e.status == "number" &&
		typeof e.statusText == "string" &&
		typeof e.headers == "object" &&
		typeof e.body < "u"
	);
}
function Gx(e) {
	return Ix.has(e.toLowerCase());
}
function wn(e) {
	return Ax.has(e.toLowerCase());
}
async function Zp(e, t, n, r, i, o) {
	for (let s = 0; s < n.length; s++) {
		let a = n[s],
			c = t[s];
		if (!c) continue;
		let d = e.find((v) => v.route.id === c.route.id),
			p = d != null && !$v(d, c) && (o && o[c.route.id]) !== void 0;
		if (ri(a) && (i || p)) {
			let v = r[s];
			ue(
				v,
				"Expected an AbortSignal for revalidating fetcher deferred result"
			),
				await zv(a, v, i).then((m) => {
					m && (n[s] = m || n[s]);
				});
		}
	}
}
async function zv(e, t, n) {
	if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
		if (n)
			try {
				return { type: rt.data, data: e.deferredData.unwrappedData };
			} catch (i) {
				return { type: rt.error, error: i };
			}
		return { type: rt.data, data: e.deferredData.data };
	}
}
function Vd(e) {
	return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Mc(e, t) {
	let n = typeof t == "string" ? rr(t).search : t.search;
	if (e[e.length - 1].route.index && Vd(n || "")) return e[e.length - 1];
	let r = wa(e);
	return r[r.length - 1];
}
function em(e) {
	let {
		formMethod: t,
		formAction: n,
		formEncType: r,
		text: i,
		formData: o,
		json: s,
	} = e;
	if (!(!t || !n || !r)) {
		if (i != null)
			return {
				formMethod: t,
				formAction: n,
				formEncType: r,
				formData: void 0,
				json: void 0,
				text: i,
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
		if (s !== void 0)
			return {
				formMethod: t,
				formAction: n,
				formEncType: r,
				formData: void 0,
				json: s,
				text: void 0,
			};
	}
}
function Ru(e, t) {
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
function qx(e, t) {
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
function Io(e, t) {
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
function Jx(e, t) {
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
function cr(e) {
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
function Zx(e, t) {
	try {
		let n = e.sessionStorage.getItem(Iv);
		if (n) {
			let r = JSON.parse(n);
			for (let [i, o] of Object.entries(r || {}))
				o && Array.isArray(o) && t.set(i, new Set(o || []));
		}
	} catch {}
}
function eE(e, t) {
	if (t.size > 0) {
		let n = {};
		for (let [r, i] of t) n[r] = [...i];
		try {
			e.sessionStorage.setItem(Iv, JSON.stringify(n));
		} catch (r) {
			hi(
				!1,
				"Failed to save applied view transitions in sessionStorage (" +
					r +
					")."
			);
		}
	}
}
/**
 * React Router v6.20.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function qs() {
	return (
		(qs = Object.assign
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
		qs.apply(this, arguments)
	);
}
const Nl = _.createContext(null),
	Kd = _.createContext(null),
	vi = _.createContext(null),
	_a = _.createContext(null),
	Rr = _.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	Uv = _.createContext(null);
function tE(e, t) {
	let { relative: n } = t === void 0 ? {} : t;
	bl() || ue(!1);
	let { basename: r, navigator: i } = _.useContext(vi),
		{ hash: o, pathname: s, search: a } = xa(e, { relative: n }),
		c = s;
	return (
		r !== "/" && (c = s === "/" ? r : Yn([r, s])),
		i.createHref({ pathname: c, search: a, hash: o })
	);
}
function bl() {
	return _.useContext(_a) != null;
}
function jl() {
	return bl() || ue(!1), _.useContext(_a).location;
}
function Bv(e) {
	_.useContext(vi).static || _.useLayoutEffect(e);
}
function Wv() {
	let { isDataRoute: e } = _.useContext(Rr);
	return e ? mE() : nE();
}
function nE() {
	bl() || ue(!1);
	let e = _.useContext(Nl),
		{ basename: t, navigator: n } = _.useContext(vi),
		{ matches: r } = _.useContext(Rr),
		{ pathname: i } = jl(),
		o = JSON.stringify(wa(r).map((c) => c.pathnameBase)),
		s = _.useRef(!1);
	return (
		Bv(() => {
			s.current = !0;
		}),
		_.useCallback(
			function (c, d) {
				if ((d === void 0 && (d = {}), !s.current)) return;
				if (typeof c == "number") {
					n.go(c);
					return;
				}
				let p = Wd(c, JSON.parse(o), i, d.relative === "path");
				e == null &&
					t !== "/" &&
					(p.pathname = p.pathname === "/" ? t : Yn([t, p.pathname])),
					(d.replace ? n.replace : n.push)(p, d.state, d);
			},
			[t, n, o, i, e]
		)
	);
}
const rE = _.createContext(null);
function iE(e) {
	let t = _.useContext(Rr).outlet;
	return t && _.createElement(rE.Provider, { value: e }, t);
}
function xa(e, t) {
	let { relative: n } = t === void 0 ? {} : t,
		{ matches: r } = _.useContext(Rr),
		{ pathname: i } = jl(),
		o = JSON.stringify(wa(r).map((s) => s.pathnameBase));
	return _.useMemo(() => Wd(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function oE(e, t, n) {
	bl() || ue(!1);
	let { navigator: r } = _.useContext(vi),
		{ matches: i } = _.useContext(Rr),
		o = i[i.length - 1],
		s = o ? o.params : {};
	o && o.pathname;
	let a = o ? o.pathnameBase : "/";
	o && o.route;
	let c = jl(),
		d;
	if (t) {
		var p;
		let N = typeof t == "string" ? rr(t) : t;
		a === "/" || ((p = N.pathname) != null && p.startsWith(a)) || ue(!1),
			(d = N);
	} else d = c;
	let v = d.pathname || "/",
		m = a === "/" ? v : v.slice(a.length) || "/",
		b = Ki(e, { pathname: m }),
		S = cE(
			b &&
				b.map((N) =>
					Object.assign({}, N, {
						params: Object.assign({}, s, N.params),
						pathname: Yn([
							a,
							r.encodeLocation
								? r.encodeLocation(N.pathname).pathname
								: N.pathname,
						]),
						pathnameBase:
							N.pathnameBase === "/"
								? a
								: Yn([
										a,
										r.encodeLocation
											? r.encodeLocation(N.pathnameBase)
													.pathname
											: N.pathnameBase,
								  ]),
					})
				),
			i,
			n
		);
	return t && S
		? _.createElement(
				_a.Provider,
				{
					value: {
						location: qs(
							{
								pathname: "/",
								search: "",
								hash: "",
								state: null,
								key: "default",
							},
							d
						),
						navigationType: nt.Pop,
					},
				},
				S
		  )
		: S;
}
function lE() {
	let e = pE(),
		t = Dv(e)
			? e.status + " " + e.statusText
			: e instanceof Error
			? e.message
			: JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
		o = null;
	return _.createElement(
		_.Fragment,
		null,
		_.createElement("h2", null, "Unexpected Application Error!"),
		_.createElement("h3", { style: { fontStyle: "italic" } }, t),
		n ? _.createElement("pre", { style: i }, n) : null,
		o
	);
}
const sE = _.createElement(lE, null);
class aE extends _.Component {
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
					error: t.error || n.error,
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
		return this.state.error
			? _.createElement(
					Rr.Provider,
					{ value: this.props.routeContext },
					_.createElement(Uv.Provider, {
						value: this.state.error,
						children: this.props.component,
					})
			  )
			: this.props.children;
	}
}
function uE(e) {
	let { routeContext: t, match: n, children: r } = e,
		i = _.useContext(Nl);
	return (
		i &&
			i.static &&
			i.staticContext &&
			(n.route.errorElement || n.route.ErrorBoundary) &&
			(i.staticContext._deepestRenderedBoundaryId = n.route.id),
		_.createElement(Rr.Provider, { value: t }, r)
	);
}
function cE(e, t, n) {
	var r;
	if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
		var i;
		if ((i = n) != null && i.errors) e = n.matches;
		else return null;
	}
	let o = e,
		s = (r = n) == null ? void 0 : r.errors;
	if (s != null) {
		let a = o.findIndex(
			(c) => c.route.id && (s == null ? void 0 : s[c.route.id])
		);
		a >= 0 || ue(!1), (o = o.slice(0, Math.min(o.length, a + 1)));
	}
	return o.reduceRight((a, c, d) => {
		let p = c.route.id ? (s == null ? void 0 : s[c.route.id]) : null,
			v = null;
		n && (v = c.route.errorElement || sE);
		let m = t.concat(o.slice(0, d + 1)),
			b = () => {
				let S;
				return (
					p
						? (S = v)
						: c.route.Component
						? (S = _.createElement(c.route.Component, null))
						: c.route.element
						? (S = c.route.element)
						: (S = a),
					_.createElement(uE, {
						match: c,
						routeContext: {
							outlet: a,
							matches: m,
							isDataRoute: n != null,
						},
						children: S,
					})
				);
			};
		return n && (c.route.ErrorBoundary || c.route.errorElement || d === 0)
			? _.createElement(aE, {
					location: n.location,
					revalidation: n.revalidation,
					component: v,
					error: p,
					children: b(),
					routeContext: { outlet: null, matches: m, isDataRoute: !0 },
			  })
			: b();
	}, null);
}
var Hv = (function (e) {
		return (
			(e.UseBlocker = "useBlocker"),
			(e.UseRevalidator = "useRevalidator"),
			(e.UseNavigateStable = "useNavigate"),
			e
		);
	})(Hv || {}),
	Js = (function (e) {
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
	})(Js || {});
function dE(e) {
	let t = _.useContext(Nl);
	return t || ue(!1), t;
}
function fE(e) {
	let t = _.useContext(Kd);
	return t || ue(!1), t;
}
function hE(e) {
	let t = _.useContext(Rr);
	return t || ue(!1), t;
}
function Vv(e) {
	let t = hE(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || ue(!1), n.route.id;
}
function pE() {
	var e;
	let t = _.useContext(Uv),
		n = fE(Js.UseRouteError),
		r = Vv(Js.UseRouteError);
	return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function mE() {
	let { router: e } = dE(Hv.UseNavigateStable),
		t = Vv(Js.UseNavigateStable),
		n = _.useRef(!1);
	return (
		Bv(() => {
			n.current = !0;
		}),
		_.useCallback(
			function (i, o) {
				o === void 0 && (o = {}),
					n.current &&
						(typeof i == "number"
							? e.navigate(i)
							: e.navigate(i, qs({ fromRouteId: t }, o)));
			},
			[e, t]
		)
	);
}
function gE(e) {
	return iE(e.context);
}
function vE(e) {
	let {
		basename: t = "/",
		children: n = null,
		location: r,
		navigationType: i = nt.Pop,
		navigator: o,
		static: s = !1,
	} = e;
	bl() && ue(!1);
	let a = t.replace(/^\/*/, "/"),
		c = _.useMemo(
			() => ({ basename: a, navigator: o, static: s }),
			[a, o, s]
		);
	typeof r == "string" && (r = rr(r));
	let {
			pathname: d = "/",
			search: p = "",
			hash: v = "",
			state: m = null,
			key: b = "default",
		} = r,
		S = _.useMemo(() => {
			let N = br(d, a);
			return N == null
				? null
				: {
						location: {
							pathname: N,
							search: p,
							hash: v,
							state: m,
							key: b,
						},
						navigationType: i,
				  };
		}, [a, d, p, v, m, b, i]);
	return S == null
		? null
		: _.createElement(
				vi.Provider,
				{ value: c },
				_.createElement(_a.Provider, { children: n, value: S })
		  );
}
new Promise(() => {});
function yE(e) {
	let t = {
		hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
	};
	return (
		e.Component &&
			Object.assign(t, {
				element: _.createElement(e.Component),
				Component: void 0,
			}),
		e.ErrorBoundary &&
			Object.assign(t, {
				errorElement: _.createElement(e.ErrorBoundary),
				ErrorBoundary: void 0,
			}),
		t
	);
}
/**
 * React Router DOM v6.20.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function uo() {
	return (
		(uo = Object.assign
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
		uo.apply(this, arguments)
	);
}
function Kv(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i,
		o;
	for (o = 0; o < r.length; o++)
		(i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function wE(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function _E(e, t) {
	return e.button === 0 && (!t || t === "_self") && !wE(e);
}
const xE = [
		"onClick",
		"relative",
		"reloadDocument",
		"replace",
		"state",
		"target",
		"to",
		"preventScrollReset",
		"unstable_viewTransition",
	],
	EE = [
		"aria-current",
		"caseSensitive",
		"className",
		"end",
		"style",
		"to",
		"unstable_viewTransition",
		"children",
	];
function SE(e, t) {
	return Bx({
		basename: t == null ? void 0 : t.basename,
		future: uo({}, t == null ? void 0 : t.future, {
			v7_prependBasename: !0,
		}),
		history: dx({ window: t == null ? void 0 : t.window }),
		hydrationData: (t == null ? void 0 : t.hydrationData) || CE(),
		routes: e,
		mapRouteProperties: yE,
		window: t == null ? void 0 : t.window,
	}).initialize();
}
function CE() {
	var e;
	let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
	return t && t.errors && (t = uo({}, t, { errors: kE(t.errors) })), t;
}
function kE(e) {
	if (!e) return null;
	let t = Object.entries(e),
		n = {};
	for (let [r, i] of t)
		if (i && i.__type === "RouteErrorResponse")
			n[r] = new Hd(i.status, i.statusText, i.data, i.internal === !0);
		else if (i && i.__type === "Error") {
			if (i.__subType) {
				let o = window[i.__subType];
				if (typeof o == "function")
					try {
						let s = new o(i.message);
						(s.stack = ""), (n[r] = s);
					} catch {}
			}
			if (n[r] == null) {
				let o = new Error(i.message);
				(o.stack = ""), (n[r] = o);
			}
		} else n[r] = i;
	return n;
}
const Qv = _.createContext({ isTransitioning: !1 }),
	TE = _.createContext(new Map()),
	NE = "startTransition",
	tm = Zw[NE],
	bE = "flushSync",
	nm = ux[bE];
function jE(e) {
	tm ? tm(e) : e();
}
function $o(e) {
	nm ? nm(e) : e();
}
class LE {
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
function OE(e) {
	let { fallbackElement: t, router: n, future: r } = e,
		[i, o] = _.useState(n.state),
		[s, a] = _.useState(),
		[c, d] = _.useState({ isTransitioning: !1 }),
		[p, v] = _.useState(),
		[m, b] = _.useState(),
		[S, N] = _.useState(),
		R = _.useRef(new Map()),
		{ v7_startTransition: y } = r || {},
		g = _.useCallback(
			(P) => {
				y ? jE(P) : P();
			},
			[y]
		),
		E = _.useCallback(
			(P, z) => {
				let {
					deletedFetchers: Y,
					unstable_flushSync: G,
					unstable_viewTransitionOpts: fe,
				} = z;
				Y.forEach((Re) => R.current.delete(Re)),
					P.fetchers.forEach((Re, mt) => {
						Re.data !== void 0 && R.current.set(mt, Re.data);
					});
				let Be =
					n.window == null ||
					typeof n.window.document.startViewTransition != "function";
				if (!fe || Be) {
					G ? $o(() => o(P)) : g(() => o(P));
					return;
				}
				if (G) {
					$o(() => {
						m && (p && p.resolve(), m.skipTransition()),
							d({
								isTransitioning: !0,
								flushSync: !0,
								currentLocation: fe.currentLocation,
								nextLocation: fe.nextLocation,
							});
					});
					let Re = n.window.document.startViewTransition(() => {
						$o(() => o(P));
					});
					Re.finished.finally(() => {
						$o(() => {
							v(void 0),
								b(void 0),
								a(void 0),
								d({ isTransitioning: !1 });
						});
					}),
						$o(() => b(Re));
					return;
				}
				m
					? (p && p.resolve(),
					  m.skipTransition(),
					  N({
							state: P,
							currentLocation: fe.currentLocation,
							nextLocation: fe.nextLocation,
					  }))
					: (a(P),
					  d({
							isTransitioning: !0,
							flushSync: !1,
							currentLocation: fe.currentLocation,
							nextLocation: fe.nextLocation,
					  }));
			},
			[n.window, m, p, R, g]
		);
	_.useLayoutEffect(() => n.subscribe(E), [n, E]),
		_.useEffect(() => {
			c.isTransitioning && !c.flushSync && v(new LE());
		}, [c]),
		_.useEffect(() => {
			if (p && s && n.window) {
				let P = s,
					z = p.promise,
					Y = n.window.document.startViewTransition(async () => {
						g(() => o(P)), await z;
					});
				Y.finished.finally(() => {
					v(void 0), b(void 0), a(void 0), d({ isTransitioning: !1 });
				}),
					b(Y);
			}
		}, [g, s, p, n.window]),
		_.useEffect(() => {
			p && s && i.location.key === s.location.key && p.resolve();
		}, [p, m, i.location, s]),
		_.useEffect(() => {
			!c.isTransitioning &&
				S &&
				(a(S.state),
				d({
					isTransitioning: !0,
					flushSync: !1,
					currentLocation: S.currentLocation,
					nextLocation: S.nextLocation,
				}),
				N(void 0));
		}, [c.isTransitioning, S]);
	let w = _.useMemo(
			() => ({
				createHref: n.createHref,
				encodeLocation: n.encodeLocation,
				go: (P) => n.navigate(P),
				push: (P, z, Y) =>
					n.navigate(P, {
						state: z,
						preventScrollReset:
							Y == null ? void 0 : Y.preventScrollReset,
					}),
				replace: (P, z, Y) =>
					n.navigate(P, {
						replace: !0,
						state: z,
						preventScrollReset:
							Y == null ? void 0 : Y.preventScrollReset,
					}),
			}),
			[n]
		),
		A = n.basename || "/",
		D = _.useMemo(
			() => ({ router: n, navigator: w, static: !1, basename: A }),
			[n, w, A]
		);
	return _.createElement(
		_.Fragment,
		null,
		_.createElement(
			Nl.Provider,
			{ value: D },
			_.createElement(
				Kd.Provider,
				{ value: i },
				_.createElement(
					TE.Provider,
					{ value: R.current },
					_.createElement(
						Qv.Provider,
						{ value: c },
						_.createElement(
							vE,
							{
								basename: A,
								location: i.location,
								navigationType: i.historyAction,
								navigator: w,
							},
							i.initialized
								? _.createElement(RE, {
										routes: n.routes,
										state: i,
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
function RE(e) {
	let { routes: t, state: n } = e;
	return oE(t, void 0, n);
}
const PE =
		typeof window < "u" &&
		typeof window.document < "u" &&
		typeof window.document.createElement < "u",
	DE = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	ii = _.forwardRef(function (t, n) {
		let {
				onClick: r,
				relative: i,
				reloadDocument: o,
				replace: s,
				state: a,
				target: c,
				to: d,
				preventScrollReset: p,
				unstable_viewTransition: v,
			} = t,
			m = Kv(t, xE),
			{ basename: b } = _.useContext(vi),
			S,
			N = !1;
		if (typeof d == "string" && DE.test(d) && ((S = d), PE))
			try {
				let E = new URL(window.location.href),
					w = d.startsWith("//")
						? new URL(E.protocol + d)
						: new URL(d),
					A = br(w.pathname, b);
				w.origin === E.origin && A != null
					? (d = A + w.search + w.hash)
					: (N = !0);
			} catch {}
		let R = tE(d, { relative: i }),
			y = ME(d, {
				replace: s,
				state: a,
				target: c,
				preventScrollReset: p,
				relative: i,
				unstable_viewTransition: v,
			});
		function g(E) {
			r && r(E), E.defaultPrevented || y(E);
		}
		return _.createElement(
			"a",
			uo({}, m, {
				href: S || R,
				onClick: N || o ? r : g,
				ref: n,
				target: c,
			})
		);
	}),
	hs = _.forwardRef(function (t, n) {
		let {
				"aria-current": r = "page",
				caseSensitive: i = !1,
				className: o = "",
				end: s = !1,
				style: a,
				to: c,
				unstable_viewTransition: d,
				children: p,
			} = t,
			v = Kv(t, EE),
			m = xa(c, { relative: v.relative }),
			b = jl(),
			S = _.useContext(Kd),
			{ navigator: N } = _.useContext(vi),
			R = S != null && IE(m) && d === !0,
			y = N.encodeLocation ? N.encodeLocation(m).pathname : m.pathname,
			g = b.pathname,
			E =
				S && S.navigation && S.navigation.location
					? S.navigation.location.pathname
					: null;
		i ||
			((g = g.toLowerCase()),
			(E = E ? E.toLowerCase() : null),
			(y = y.toLowerCase()));
		const w = y !== "/" && y.endsWith("/") ? y.length - 1 : y.length;
		let A = g === y || (!s && g.startsWith(y) && g.charAt(w) === "/"),
			D =
				E != null &&
				(E === y ||
					(!s && E.startsWith(y) && E.charAt(y.length) === "/")),
			P = { isActive: A, isPending: D, isTransitioning: R },
			z = A ? r : void 0,
			Y;
		typeof o == "function"
			? (Y = o(P))
			: (Y = [
					o,
					A ? "active" : null,
					D ? "pending" : null,
					R ? "transitioning" : null,
			  ]
					.filter(Boolean)
					.join(" "));
		let G = typeof a == "function" ? a(P) : a;
		return _.createElement(
			ii,
			uo({}, v, {
				"aria-current": z,
				className: Y,
				ref: n,
				style: G,
				to: c,
				unstable_viewTransition: d,
			}),
			typeof p == "function" ? p(P) : p
		);
	});
var Ic;
(function (e) {
	(e.UseScrollRestoration = "useScrollRestoration"),
		(e.UseSubmit = "useSubmit"),
		(e.UseSubmitFetcher = "useSubmitFetcher"),
		(e.UseFetcher = "useFetcher"),
		(e.useViewTransitionState = "useViewTransitionState");
})(Ic || (Ic = {}));
var rm;
(function (e) {
	(e.UseFetcher = "useFetcher"),
		(e.UseFetchers = "useFetchers"),
		(e.UseScrollRestoration = "useScrollRestoration");
})(rm || (rm = {}));
function AE(e) {
	let t = _.useContext(Nl);
	return t || ue(!1), t;
}
function ME(e, t) {
	let {
			target: n,
			replace: r,
			state: i,
			preventScrollReset: o,
			relative: s,
			unstable_viewTransition: a,
		} = t === void 0 ? {} : t,
		c = Wv(),
		d = jl(),
		p = xa(e, { relative: s });
	return _.useCallback(
		(v) => {
			if (_E(v, n)) {
				v.preventDefault();
				let m = r !== void 0 ? r : pi(d) === pi(p);
				c(e, {
					replace: m,
					state: i,
					preventScrollReset: o,
					relative: s,
					unstable_viewTransition: a,
				});
			}
		},
		[d, c, p, r, i, n, e, o, s, a]
	);
}
function IE(e, t) {
	t === void 0 && (t = {});
	let n = _.useContext(Qv);
	n == null && ue(!1);
	let { basename: r } = AE(Ic.useViewTransitionState),
		i = xa(e, { relative: t.relative });
	if (!n.isTransitioning) return !1;
	let o = br(n.currentLocation.pathname, r) || n.currentLocation.pathname,
		s = br(n.nextLocation.pathname, r) || n.nextLocation.pathname;
	return Pc(i.pathname, s) != null || Pc(i.pathname, o) != null;
}
var Yv = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
	(function () {
		var t = {}.hasOwnProperty;
		function n() {
			for (var r = [], i = 0; i < arguments.length; i++) {
				var o = arguments[i];
				if (o) {
					var s = typeof o;
					if (s === "string" || s === "number") r.push(o);
					else if (Array.isArray(o)) {
						if (o.length) {
							var a = n.apply(null, o);
							a && r.push(a);
						}
					} else if (s === "object") {
						if (
							o.toString !== Object.prototype.toString &&
							!o.toString.toString().includes("[native code]")
						) {
							r.push(o.toString());
							continue;
						}
						for (var c in o) t.call(o, c) && o[c] && r.push(c);
					}
				}
			}
			return r.join(" ");
		}
		e.exports
			? ((n.default = n), (e.exports = n))
			: (window.classNames = n);
	})();
})(Yv);
var $E = Yv.exports;
const ye = na($E);
function $c() {
	return (
		($c = Object.assign
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
		$c.apply(this, arguments)
	);
}
function Xv(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i,
		o;
	for (o = 0; o < r.length; o++)
		(i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function im(e) {
	return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function FE(e) {
	var t = zE(e, "string");
	return typeof t == "symbol" ? t : String(t);
}
function zE(e, t) {
	if (typeof e != "object" || e === null) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function UE(e, t, n) {
	var r = _.useRef(e !== void 0),
		i = _.useState(t),
		o = i[0],
		s = i[1],
		a = e !== void 0,
		c = r.current;
	return (
		(r.current = a),
		!a && c && o !== t && s(t),
		[
			a ? e : o,
			_.useCallback(
				function (d) {
					for (
						var p = arguments.length,
							v = new Array(p > 1 ? p - 1 : 0),
							m = 1;
						m < p;
						m++
					)
						v[m - 1] = arguments[m];
					n && n.apply(void 0, [d].concat(v)), s(d);
				},
				[n]
			),
		]
	);
}
function Gv(e, t) {
	return Object.keys(t).reduce(function (n, r) {
		var i,
			o = n,
			s = o[im(r)],
			a = o[r],
			c = Xv(o, [im(r), r].map(FE)),
			d = t[r],
			p = UE(a, s, e[d]),
			v = p[0],
			m = p[1];
		return $c({}, c, ((i = {}), (i[r] = v), (i[d] = m), i));
	}, e);
}
function Fc(e, t) {
	return (
		(Fc = Object.setPrototypeOf
			? Object.setPrototypeOf.bind()
			: function (r, i) {
					return (r.__proto__ = i), r;
			  }),
		Fc(e, t)
	);
}
function BE(e, t) {
	(e.prototype = Object.create(t.prototype)),
		(e.prototype.constructor = e),
		Fc(e, t);
}
const WE = ["xxl", "xl", "lg", "md", "sm", "xs"],
	HE = "xs",
	Qd = _.createContext({ prefixes: {}, breakpoints: WE, minBreakpoint: HE });
function Ie(e, t) {
	const { prefixes: n } = _.useContext(Qd);
	return e || n[t] || t;
}
function VE() {
	const { breakpoints: e } = _.useContext(Qd);
	return e;
}
function KE() {
	const { minBreakpoint: e } = _.useContext(Qd);
	return e;
}
function Yd(e) {
	return (e && e.ownerDocument) || document;
}
function QE(e) {
	var t = Yd(e);
	return (t && t.defaultView) || window;
}
function YE(e, t) {
	return QE(e).getComputedStyle(e, t);
}
var XE = /([A-Z])/g;
function GE(e) {
	return e.replace(XE, "-$1").toLowerCase();
}
var qE = /^ms-/;
function ps(e) {
	return GE(e).replace(qE, "-ms-");
}
var JE =
	/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function ZE(e) {
	return !!(e && JE.test(e));
}
function Xn(e, t) {
	var n = "",
		r = "";
	if (typeof t == "string")
		return e.style.getPropertyValue(ps(t)) || YE(e).getPropertyValue(ps(t));
	Object.keys(t).forEach(function (i) {
		var o = t[i];
		!o && o !== 0
			? e.style.removeProperty(ps(i))
			: ZE(i)
			? (r += i + "(" + o + ") ")
			: (n += ps(i) + ": " + o + ";");
	}),
		r && (n += "transform: " + r + ";"),
		(e.style.cssText += ";" + n);
}
var qv = { exports: {} },
	eS = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
	tS = eS,
	nS = tS;
function Jv() {}
function Zv() {}
Zv.resetWarningCache = Jv;
var rS = function () {
	function e(r, i, o, s, a, c) {
		if (c !== nS) {
			var d = new Error(
				"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
			);
			throw ((d.name = "Invariant Violation"), d);
		}
	}
	e.isRequired = e;
	function t() {
		return e;
	}
	var n = {
		array: e,
		bigint: e,
		bool: e,
		func: e,
		number: e,
		object: e,
		string: e,
		symbol: e,
		any: e,
		arrayOf: t,
		element: e,
		elementType: e,
		instanceOf: t,
		node: e,
		objectOf: t,
		oneOf: t,
		oneOfType: t,
		shape: t,
		exact: t,
		checkPropTypes: Zv,
		resetWarningCache: Jv,
	};
	return (n.PropTypes = n), n;
};
qv.exports = rS();
var iS = qv.exports;
const Gn = na(iS),
	om = { disabled: !1 },
	ey = En.createContext(null);
var oS = function (t) {
		return t.scrollTop;
	},
	Ho = "unmounted",
	hr = "exited",
	xn = "entering",
	Hn = "entered",
	xl = "exiting",
	ir = (function (e) {
		BE(t, e);
		function t(r, i) {
			var o;
			o = e.call(this, r, i) || this;
			var s = i,
				a = s && !s.isMounting ? r.enter : r.appear,
				c;
			return (
				(o.appearStatus = null),
				r.in
					? a
						? ((c = hr), (o.appearStatus = xn))
						: (c = Hn)
					: r.unmountOnExit || r.mountOnEnter
					? (c = Ho)
					: (c = hr),
				(o.state = { status: c }),
				(o.nextCallback = null),
				o
			);
		}
		t.getDerivedStateFromProps = function (i, o) {
			var s = i.in;
			return s && o.status === Ho ? { status: hr } : null;
		};
		var n = t.prototype;
		return (
			(n.componentDidMount = function () {
				this.updateStatus(!0, this.appearStatus);
			}),
			(n.componentDidUpdate = function (i) {
				var o = null;
				if (i !== this.props) {
					var s = this.state.status;
					this.props.in
						? s !== xn && s !== Hn && (o = xn)
						: (s === xn || s === Hn) && (o = xl);
				}
				this.updateStatus(!1, o);
			}),
			(n.componentWillUnmount = function () {
				this.cancelNextCallback();
			}),
			(n.getTimeouts = function () {
				var i = this.props.timeout,
					o,
					s,
					a;
				return (
					(o = s = a = i),
					i != null &&
						typeof i != "number" &&
						((o = i.exit),
						(s = i.enter),
						(a = i.appear !== void 0 ? i.appear : s)),
					{ exit: o, enter: s, appear: a }
				);
			}),
			(n.updateStatus = function (i, o) {
				if ((i === void 0 && (i = !1), o !== null))
					if ((this.cancelNextCallback(), o === xn)) {
						if (
							this.props.unmountOnExit ||
							this.props.mountOnEnter
						) {
							var s = this.props.nodeRef
								? this.props.nodeRef.current
								: ni.findDOMNode(this);
							s && oS(s);
						}
						this.performEnter(i);
					} else this.performExit();
				else
					this.props.unmountOnExit &&
						this.state.status === hr &&
						this.setState({ status: Ho });
			}),
			(n.performEnter = function (i) {
				var o = this,
					s = this.props.enter,
					a = this.context ? this.context.isMounting : i,
					c = this.props.nodeRef ? [a] : [ni.findDOMNode(this), a],
					d = c[0],
					p = c[1],
					v = this.getTimeouts(),
					m = a ? v.appear : v.enter;
				if ((!i && !s) || om.disabled) {
					this.safeSetState({ status: Hn }, function () {
						o.props.onEntered(d);
					});
					return;
				}
				this.props.onEnter(d, p),
					this.safeSetState({ status: xn }, function () {
						o.props.onEntering(d, p),
							o.onTransitionEnd(m, function () {
								o.safeSetState({ status: Hn }, function () {
									o.props.onEntered(d, p);
								});
							});
					});
			}),
			(n.performExit = function () {
				var i = this,
					o = this.props.exit,
					s = this.getTimeouts(),
					a = this.props.nodeRef ? void 0 : ni.findDOMNode(this);
				if (!o || om.disabled) {
					this.safeSetState({ status: hr }, function () {
						i.props.onExited(a);
					});
					return;
				}
				this.props.onExit(a),
					this.safeSetState({ status: xl }, function () {
						i.props.onExiting(a),
							i.onTransitionEnd(s.exit, function () {
								i.safeSetState({ status: hr }, function () {
									i.props.onExited(a);
								});
							});
					});
			}),
			(n.cancelNextCallback = function () {
				this.nextCallback !== null &&
					(this.nextCallback.cancel(), (this.nextCallback = null));
			}),
			(n.safeSetState = function (i, o) {
				(o = this.setNextCallback(o)), this.setState(i, o);
			}),
			(n.setNextCallback = function (i) {
				var o = this,
					s = !0;
				return (
					(this.nextCallback = function (a) {
						s && ((s = !1), (o.nextCallback = null), i(a));
					}),
					(this.nextCallback.cancel = function () {
						s = !1;
					}),
					this.nextCallback
				);
			}),
			(n.onTransitionEnd = function (i, o) {
				this.setNextCallback(o);
				var s = this.props.nodeRef
						? this.props.nodeRef.current
						: ni.findDOMNode(this),
					a = i == null && !this.props.addEndListener;
				if (!s || a) {
					setTimeout(this.nextCallback, 0);
					return;
				}
				if (this.props.addEndListener) {
					var c = this.props.nodeRef
							? [this.nextCallback]
							: [s, this.nextCallback],
						d = c[0],
						p = c[1];
					this.props.addEndListener(d, p);
				}
				i != null && setTimeout(this.nextCallback, i);
			}),
			(n.render = function () {
				var i = this.state.status;
				if (i === Ho) return null;
				var o = this.props,
					s = o.children;
				o.in,
					o.mountOnEnter,
					o.unmountOnExit,
					o.appear,
					o.enter,
					o.exit,
					o.timeout,
					o.addEndListener,
					o.onEnter,
					o.onEntering,
					o.onEntered,
					o.onExit,
					o.onExiting,
					o.onExited,
					o.nodeRef;
				var a = Xv(o, [
					"children",
					"in",
					"mountOnEnter",
					"unmountOnExit",
					"appear",
					"enter",
					"exit",
					"timeout",
					"addEndListener",
					"onEnter",
					"onEntering",
					"onEntered",
					"onExit",
					"onExiting",
					"onExited",
					"nodeRef",
				]);
				return En.createElement(
					ey.Provider,
					{ value: null },
					typeof s == "function"
						? s(i, a)
						: En.cloneElement(En.Children.only(s), a)
				);
			}),
			t
		);
	})(En.Component);
ir.contextType = ey;
ir.propTypes = {};
function Ri() {}
ir.defaultProps = {
	in: !1,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1,
	enter: !0,
	exit: !0,
	onEnter: Ri,
	onEntering: Ri,
	onEntered: Ri,
	onExit: Ri,
	onExiting: Ri,
	onExited: Ri,
};
ir.UNMOUNTED = Ho;
ir.EXITED = hr;
ir.ENTERING = xn;
ir.ENTERED = Hn;
ir.EXITING = xl;
const lS = ir,
	Ea = !!(
		typeof window < "u" &&
		window.document &&
		window.document.createElement
	);
var zc = !1,
	Uc = !1;
try {
	var Pu = {
		get passive() {
			return (zc = !0);
		},
		get once() {
			return (Uc = zc = !0);
		},
	};
	Ea &&
		(window.addEventListener("test", Pu, Pu),
		window.removeEventListener("test", Pu, !0));
} catch {}
function sS(e, t, n, r) {
	if (r && typeof r != "boolean" && !Uc) {
		var i = r.once,
			o = r.capture,
			s = n;
		!Uc &&
			i &&
			((s =
				n.__once ||
				function a(c) {
					this.removeEventListener(t, a, o), n.call(this, c);
				}),
			(n.__once = s)),
			e.addEventListener(t, s, zc ? r : o);
	}
	e.addEventListener(t, n, r);
}
function aS(e, t, n, r) {
	var i = r && typeof r != "boolean" ? r.capture : r;
	e.removeEventListener(t, n, i),
		n.__once && e.removeEventListener(t, n.__once, i);
}
function Zs(e, t, n, r) {
	return (
		sS(e, t, n, r),
		function () {
			aS(e, t, n, r);
		}
	);
}
function uS(e, t, n, r) {
	if ((n === void 0 && (n = !1), r === void 0 && (r = !0), e)) {
		var i = document.createEvent("HTMLEvents");
		i.initEvent(t, n, r), e.dispatchEvent(i);
	}
}
function cS(e) {
	var t = Xn(e, "transitionDuration") || "",
		n = t.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(t) * n;
}
function dS(e, t, n) {
	n === void 0 && (n = 5);
	var r = !1,
		i = setTimeout(function () {
			r || uS(e, "transitionend", !0);
		}, t + n),
		o = Zs(
			e,
			"transitionend",
			function () {
				r = !0;
			},
			{ once: !0 }
		);
	return function () {
		clearTimeout(i), o();
	};
}
function fS(e, t, n, r) {
	n == null && (n = cS(e) || 0);
	var i = dS(e, n, r),
		o = Zs(e, "transitionend", t);
	return function () {
		i(), o();
	};
}
function lm(e, t) {
	const n = Xn(e, t) || "",
		r = n.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(n) * r;
}
function Xd(e, t) {
	const n = lm(e, "transitionDuration"),
		r = lm(e, "transitionDelay"),
		i = fS(
			e,
			(o) => {
				o.target === e && (i(), t(o));
			},
			n + r
		);
}
function Fo(...e) {
	return e
		.filter((t) => t != null)
		.reduce((t, n) => {
			if (typeof n != "function")
				throw new Error(
					"Invalid Argument Type, must only provide functions, undefined, or null."
				);
			return t === null
				? n
				: function (...i) {
						t.apply(this, i), n.apply(this, i);
				  };
		}, null);
}
function ty(e) {
	e.offsetHeight;
}
const sm = (e) =>
	!e || typeof e == "function"
		? e
		: (t) => {
				e.current = t;
		  };
function hS(e, t) {
	const n = sm(e),
		r = sm(t);
	return (i) => {
		n && n(i), r && r(i);
	};
}
function Sa(e, t) {
	return _.useMemo(() => hS(e, t), [e, t]);
}
function pS(e) {
	return e && "setState" in e ? ni.findDOMNode(e) : e ?? null;
}
const mS = En.forwardRef(
		(
			{
				onEnter: e,
				onEntering: t,
				onEntered: n,
				onExit: r,
				onExiting: i,
				onExited: o,
				addEndListener: s,
				children: a,
				childRef: c,
				...d
			},
			p
		) => {
			const v = _.useRef(null),
				m = Sa(v, c),
				b = (D) => {
					m(pS(D));
				},
				S = (D) => (P) => {
					D && v.current && D(v.current, P);
				},
				N = _.useCallback(S(e), [e]),
				R = _.useCallback(S(t), [t]),
				y = _.useCallback(S(n), [n]),
				g = _.useCallback(S(r), [r]),
				E = _.useCallback(S(i), [i]),
				w = _.useCallback(S(o), [o]),
				A = _.useCallback(S(s), [s]);
			return x.jsx(lS, {
				ref: p,
				...d,
				onEnter: N,
				onEntered: y,
				onEntering: R,
				onExit: g,
				onExited: w,
				onExiting: E,
				addEndListener: A,
				nodeRef: v,
				children:
					typeof a == "function"
						? (D, P) => a(D, { ...P, ref: b })
						: En.cloneElement(a, { ref: b }),
			});
		}
	),
	Gd = mS,
	gS = {
		height: ["marginTop", "marginBottom"],
		width: ["marginLeft", "marginRight"],
	};
function vS(e, t) {
	const n = `offset${e[0].toUpperCase()}${e.slice(1)}`,
		r = t[n],
		i = gS[e];
	return r + parseInt(Xn(t, i[0]), 10) + parseInt(Xn(t, i[1]), 10);
}
const yS = {
		[hr]: "collapse",
		[xl]: "collapsing",
		[xn]: "collapsing",
		[Hn]: "collapse show",
	},
	wS = En.forwardRef(
		(
			{
				onEnter: e,
				onEntering: t,
				onEntered: n,
				onExit: r,
				onExiting: i,
				className: o,
				children: s,
				dimension: a = "height",
				in: c = !1,
				timeout: d = 300,
				mountOnEnter: p = !1,
				unmountOnExit: v = !1,
				appear: m = !1,
				getDimensionValue: b = vS,
				...S
			},
			N
		) => {
			const R = typeof a == "function" ? a() : a,
				y = _.useMemo(
					() =>
						Fo((D) => {
							D.style[R] = "0";
						}, e),
					[R, e]
				),
				g = _.useMemo(
					() =>
						Fo((D) => {
							const P = `scroll${R[0].toUpperCase()}${R.slice(
								1
							)}`;
							D.style[R] = `${D[P]}px`;
						}, t),
					[R, t]
				),
				E = _.useMemo(
					() =>
						Fo((D) => {
							D.style[R] = null;
						}, n),
					[R, n]
				),
				w = _.useMemo(
					() =>
						Fo((D) => {
							(D.style[R] = `${b(R, D)}px`), ty(D);
						}, r),
					[r, b, R]
				),
				A = _.useMemo(
					() =>
						Fo((D) => {
							D.style[R] = null;
						}, i),
					[R, i]
				);
			return x.jsx(Gd, {
				ref: N,
				addEndListener: Xd,
				...S,
				"aria-expanded": S.role ? c : null,
				onEnter: y,
				onEntering: g,
				onEntered: E,
				onExit: w,
				onExiting: A,
				childRef: s.ref,
				in: c,
				timeout: d,
				mountOnEnter: p,
				unmountOnExit: v,
				appear: m,
				children: (D, P) =>
					En.cloneElement(s, {
						...P,
						className: ye(
							o,
							s.props.className,
							yS[D],
							R === "width" && "collapse-horizontal"
						),
					}),
			});
		}
	),
	_S = wS;
function xS(e) {
	const t = _.useRef(e);
	return (
		_.useEffect(() => {
			t.current = e;
		}, [e]),
		t
	);
}
function sn(e) {
	const t = xS(e);
	return _.useCallback(
		function (...n) {
			return t.current && t.current(...n);
		},
		[t]
	);
}
const ES = (e) =>
	_.forwardRef((t, n) =>
		x.jsx("div", { ...t, ref: n, className: ye(t.className, e) })
	);
function SS() {
	const e = _.useRef(!0),
		t = _.useRef(() => e.current);
	return (
		_.useEffect(
			() => (
				(e.current = !0),
				() => {
					e.current = !1;
				}
			),
			[]
		),
		t.current
	);
}
function CS(e) {
	const t = _.useRef(null);
	return (
		_.useEffect(() => {
			t.current = e;
		}),
		t.current
	);
}
const kS =
		typeof global < "u" &&
		global.navigator &&
		global.navigator.product === "ReactNative",
	TS = typeof document < "u",
	Bc = TS || kS ? _.useLayoutEffect : _.useEffect,
	NS = ["as", "disabled"];
function bS(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i,
		o;
	for (o = 0; o < r.length; o++)
		(i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function jS(e) {
	return !e || e.trim() === "#";
}
function qd({
	tagName: e,
	disabled: t,
	href: n,
	target: r,
	rel: i,
	role: o,
	onClick: s,
	tabIndex: a = 0,
	type: c,
}) {
	e || (n != null || r != null || i != null ? (e = "a") : (e = "button"));
	const d = { tagName: e };
	if (e === "button") return [{ type: c || "button", disabled: t }, d];
	const p = (m) => {
			if (((t || (e === "a" && jS(n))) && m.preventDefault(), t)) {
				m.stopPropagation();
				return;
			}
			s == null || s(m);
		},
		v = (m) => {
			m.key === " " && (m.preventDefault(), p(m));
		};
	return (
		e === "a" && (n || (n = "#"), t && (n = void 0)),
		[
			{
				role: o ?? "button",
				disabled: void 0,
				tabIndex: t ? void 0 : a,
				href: n,
				target: e === "a" ? r : void 0,
				"aria-disabled": t || void 0,
				rel: e === "a" ? i : void 0,
				onClick: p,
				onKeyDown: v,
			},
			d,
		]
	);
}
const ny = _.forwardRef((e, t) => {
	let { as: n, disabled: r } = e,
		i = bS(e, NS);
	const [o, { tagName: s }] = qd(
		Object.assign({ tagName: n, disabled: r }, i)
	);
	return x.jsx(s, Object.assign({}, i, o, { ref: t }));
});
ny.displayName = "Button";
const LS = ["onKeyDown"];
function OS(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i,
		o;
	for (o = 0; o < r.length; o++)
		(i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function RS(e) {
	return !e || e.trim() === "#";
}
const ry = _.forwardRef((e, t) => {
	let { onKeyDown: n } = e,
		r = OS(e, LS);
	const [i] = qd(Object.assign({ tagName: "a" }, r)),
		o = sn((s) => {
			i.onKeyDown(s), n == null || n(s);
		});
	return RS(r.href) || r.role === "button"
		? x.jsx("a", Object.assign({ ref: t }, r, i, { onKeyDown: o }))
		: x.jsx("a", Object.assign({ ref: t }, r, { onKeyDown: n }));
});
ry.displayName = "Anchor";
const PS = ry,
	DS = { [xn]: "show", [Hn]: "show" },
	iy = _.forwardRef(
		(
			{
				className: e,
				children: t,
				transitionClasses: n = {},
				onEnter: r,
				...i
			},
			o
		) => {
			const s = {
					in: !1,
					timeout: 300,
					mountOnEnter: !1,
					unmountOnExit: !1,
					appear: !1,
					...i,
				},
				a = _.useCallback(
					(c, d) => {
						ty(c), r == null || r(c, d);
					},
					[r]
				);
			return x.jsx(Gd, {
				ref: o,
				addEndListener: Xd,
				...s,
				onEnter: a,
				childRef: t.ref,
				children: (c, d) =>
					_.cloneElement(t, {
						...d,
						className: ye(
							"fade",
							e,
							t.props.className,
							DS[c],
							n[c]
						),
					}),
			});
		}
	);
iy.displayName = "Fade";
const AS = iy,
	MS = {
		"aria-label": Gn.string,
		onClick: Gn.func,
		variant: Gn.oneOf(["white"]),
	},
	Jd = _.forwardRef(
		({ className: e, variant: t, "aria-label": n = "Close", ...r }, i) =>
			x.jsx("button", {
				ref: i,
				type: "button",
				className: ye("btn-close", t && `btn-close-${t}`, e),
				"aria-label": n,
				...r,
			})
	);
Jd.displayName = "CloseButton";
Jd.propTypes = MS;
const IS = Jd,
	oy = _.forwardRef(
		(
			{
				as: e,
				bsPrefix: t,
				variant: n = "primary",
				size: r,
				active: i = !1,
				disabled: o = !1,
				className: s,
				...a
			},
			c
		) => {
			const d = Ie(t, "btn"),
				[p, { tagName: v }] = qd({ tagName: e, disabled: o, ...a }),
				m = v;
			return x.jsx(m, {
				...p,
				...a,
				ref: c,
				disabled: o,
				className: ye(
					s,
					d,
					i && "active",
					n && `${d}-${n}`,
					r && `${d}-${r}`,
					a.href && o && "disabled"
				),
			});
		}
	);
oy.displayName = "Button";
const ly = oy,
	sy = _.createContext(null);
sy.displayName = "CardHeaderContext";
const $S = sy;
function FS(e) {
	const t = _.useRef(e);
	return (t.current = e), t;
}
function zS(e) {
	const t = FS(e);
	_.useEffect(() => () => t.current(), []);
}
function US(e, t) {
	return _.Children.toArray(e).some(
		(n) => _.isValidElement(n) && n.type === t
	);
}
function BS({ as: e, bsPrefix: t, className: n, ...r }) {
	t = Ie(t, "col");
	const i = VE(),
		o = KE(),
		s = [],
		a = [];
	return (
		i.forEach((c) => {
			const d = r[c];
			delete r[c];
			let p, v, m;
			typeof d == "object" && d != null
				? ({ span: p, offset: v, order: m } = d)
				: (p = d);
			const b = c !== o ? `-${c}` : "";
			p && s.push(p === !0 ? `${t}${b}` : `${t}${b}-${p}`),
				m != null && a.push(`order${b}-${m}`),
				v != null && a.push(`offset${b}-${v}`);
		}),
		[
			{ ...r, className: ye(n, ...s, ...a) },
			{ as: e, bsPrefix: t, spans: s },
		]
	);
}
const ay = _.forwardRef((e, t) => {
	const [{ className: n, ...r }, { as: i = "div", bsPrefix: o, spans: s }] =
		BS(e);
	return x.jsx(i, { ...r, ref: t, className: ye(n, !s.length && o) });
});
ay.displayName = "Col";
const WS = ay,
	uy = _.forwardRef(
		(
			{ bsPrefix: e, fluid: t = !1, as: n = "div", className: r, ...i },
			o
		) => {
			const s = Ie(e, "container"),
				a = typeof t == "string" ? `-${t}` : "-fluid";
			return x.jsx(n, {
				ref: o,
				...i,
				className: ye(r, t ? `${s}${a}` : s),
			});
		}
	);
uy.displayName = "Container";
const Wc = uy;
var HS = Function.prototype.bind.call(Function.prototype.call, [].slice);
function Jr(e, t) {
	return HS(e.querySelectorAll(t));
}
function VS() {
	const [, e] = _.useReducer((t) => !t, !1);
	return e;
}
function am(e, t) {
	if (e.contains) return e.contains(t);
	if (e.compareDocumentPosition)
		return e === t || !!(e.compareDocumentPosition(t) & 16);
}
const KS = _.createContext(null),
	Zd = (e, t = null) => (e != null ? String(e) : t || null),
	ea = KS,
	cy = _.createContext(null);
cy.displayName = "NavContext";
const dy = cy,
	QS = "data-rr-ui-",
	YS = "rrUi";
function Ca(e) {
	return `${QS}${e}`;
}
function XS(e) {
	return `${YS}${e}`;
}
const fy = _.createContext(Ea ? window : void 0);
fy.Provider;
function ef() {
	return _.useContext(fy);
}
const hy = _.createContext(null);
hy.displayName = "NavbarContext";
const po = hy,
	GS = { type: Gn.string, tooltip: Gn.bool, as: Gn.elementType },
	tf = _.forwardRef(
		(
			{
				as: e = "div",
				className: t,
				type: n = "valid",
				tooltip: r = !1,
				...i
			},
			o
		) =>
			x.jsx(e, {
				...i,
				ref: o,
				className: ye(t, `${n}-${r ? "tooltip" : "feedback"}`),
			})
	);
tf.displayName = "Feedback";
tf.propTypes = GS;
const py = tf,
	qS = _.createContext({}),
	tr = qS,
	my = _.forwardRef(
		(
			{
				id: e,
				bsPrefix: t,
				className: n,
				type: r = "checkbox",
				isValid: i = !1,
				isInvalid: o = !1,
				as: s = "input",
				...a
			},
			c
		) => {
			const { controlId: d } = _.useContext(tr);
			return (
				(t = Ie(t, "form-check-input")),
				x.jsx(s, {
					...a,
					ref: c,
					type: r,
					id: e || d,
					className: ye(n, t, i && "is-valid", o && "is-invalid"),
				})
			);
		}
	);
my.displayName = "FormCheckInput";
const gy = my,
	vy = _.forwardRef(({ bsPrefix: e, className: t, htmlFor: n, ...r }, i) => {
		const { controlId: o } = _.useContext(tr);
		return (
			(e = Ie(e, "form-check-label")),
			x.jsx("label", {
				...r,
				ref: i,
				htmlFor: n || o,
				className: ye(t, e),
			})
		);
	});
vy.displayName = "FormCheckLabel";
const Hc = vy,
	yy = _.forwardRef(
		(
			{
				id: e,
				bsPrefix: t,
				bsSwitchPrefix: n,
				inline: r = !1,
				reverse: i = !1,
				disabled: o = !1,
				isValid: s = !1,
				isInvalid: a = !1,
				feedbackTooltip: c = !1,
				feedback: d,
				feedbackType: p,
				className: v,
				style: m,
				title: b = "",
				type: S = "checkbox",
				label: N,
				children: R,
				as: y = "input",
				...g
			},
			E
		) => {
			(t = Ie(t, "form-check")), (n = Ie(n, "form-switch"));
			const { controlId: w } = _.useContext(tr),
				A = _.useMemo(() => ({ controlId: e || w }), [w, e]),
				D = (!R && N != null && N !== !1) || US(R, Hc),
				P = x.jsx(gy, {
					...g,
					type: S === "switch" ? "checkbox" : S,
					ref: E,
					isValid: s,
					isInvalid: a,
					disabled: o,
					as: y,
				});
			return x.jsx(tr.Provider, {
				value: A,
				children: x.jsx("div", {
					style: m,
					className: ye(
						v,
						D && t,
						r && `${t}-inline`,
						i && `${t}-reverse`,
						S === "switch" && n
					),
					children:
						R ||
						x.jsxs(x.Fragment, {
							children: [
								P,
								D && x.jsx(Hc, { title: b, children: N }),
								d &&
									x.jsx(py, {
										type: p,
										tooltip: c,
										children: d,
									}),
							],
						}),
				}),
			});
		}
	);
yy.displayName = "FormCheck";
const ta = Object.assign(yy, { Input: gy, Label: Hc }),
	wy = _.forwardRef(
		(
			{
				bsPrefix: e,
				type: t,
				size: n,
				htmlSize: r,
				id: i,
				className: o,
				isValid: s = !1,
				isInvalid: a = !1,
				plaintext: c,
				readOnly: d,
				as: p = "input",
				...v
			},
			m
		) => {
			const { controlId: b } = _.useContext(tr);
			return (
				(e = Ie(e, "form-control")),
				x.jsx(p, {
					...v,
					type: t,
					size: r,
					ref: m,
					readOnly: d,
					id: i || b,
					className: ye(
						o,
						c ? `${e}-plaintext` : e,
						n && `${e}-${n}`,
						t === "color" && `${e}-color`,
						s && "is-valid",
						a && "is-invalid"
					),
				})
			);
		}
	);
wy.displayName = "FormControl";
const JS = Object.assign(wy, { Feedback: py }),
	_y = _.forwardRef(
		({ className: e, bsPrefix: t, as: n = "div", ...r }, i) => (
			(t = Ie(t, "form-floating")),
			x.jsx(n, { ref: i, className: ye(e, t), ...r })
		)
	);
_y.displayName = "FormFloating";
const ZS = _y,
	xy = _.forwardRef(({ controlId: e, as: t = "div", ...n }, r) => {
		const i = _.useMemo(() => ({ controlId: e }), [e]);
		return x.jsx(tr.Provider, {
			value: i,
			children: x.jsx(t, { ...n, ref: r }),
		});
	});
xy.displayName = "FormGroup";
const Ey = xy,
	Sy = _.forwardRef(
		(
			{
				as: e = "label",
				bsPrefix: t,
				column: n = !1,
				visuallyHidden: r = !1,
				className: i,
				htmlFor: o,
				...s
			},
			a
		) => {
			const { controlId: c } = _.useContext(tr);
			t = Ie(t, "form-label");
			let d = "col-form-label";
			typeof n == "string" && (d = `${d} ${d}-${n}`);
			const p = ye(i, t, r && "visually-hidden", n && d);
			return (
				(o = o || c),
				n
					? x.jsx(WS, {
							ref: a,
							as: "label",
							className: p,
							htmlFor: o,
							...s,
					  })
					: x.jsx(e, { ref: a, className: p, htmlFor: o, ...s })
			);
		}
	);
Sy.displayName = "FormLabel";
const eC = Sy,
	Cy = _.forwardRef(({ bsPrefix: e, className: t, id: n, ...r }, i) => {
		const { controlId: o } = _.useContext(tr);
		return (
			(e = Ie(e, "form-range")),
			x.jsx("input", {
				...r,
				type: "range",
				ref: i,
				className: ye(t, e),
				id: n || o,
			})
		);
	});
Cy.displayName = "FormRange";
const tC = Cy,
	ky = _.forwardRef(
		(
			{
				bsPrefix: e,
				size: t,
				htmlSize: n,
				className: r,
				isValid: i = !1,
				isInvalid: o = !1,
				id: s,
				...a
			},
			c
		) => {
			const { controlId: d } = _.useContext(tr);
			return (
				(e = Ie(e, "form-select")),
				x.jsx("select", {
					...a,
					size: n,
					ref: c,
					className: ye(
						r,
						e,
						t && `${e}-${t}`,
						i && "is-valid",
						o && "is-invalid"
					),
					id: s || d,
				})
			);
		}
	);
ky.displayName = "FormSelect";
const nC = ky,
	Ty = _.forwardRef(
		({ bsPrefix: e, className: t, as: n = "small", muted: r, ...i }, o) => (
			(e = Ie(e, "form-text")),
			x.jsx(n, { ...i, ref: o, className: ye(t, e, r && "text-muted") })
		)
	);
Ty.displayName = "FormText";
const rC = Ty,
	Ny = _.forwardRef((e, t) => x.jsx(ta, { ...e, ref: t, type: "switch" }));
Ny.displayName = "Switch";
const iC = Object.assign(Ny, { Input: ta.Input, Label: ta.Label }),
	by = _.forwardRef(
		(
			{
				bsPrefix: e,
				className: t,
				children: n,
				controlId: r,
				label: i,
				...o
			},
			s
		) => (
			(e = Ie(e, "form-floating")),
			x.jsxs(Ey, {
				ref: s,
				className: ye(t, e),
				controlId: r,
				...o,
				children: [n, x.jsx("label", { htmlFor: r, children: i })],
			})
		)
	);
by.displayName = "FloatingLabel";
const oC = by,
	lC = { _ref: Gn.any, validated: Gn.bool, as: Gn.elementType },
	nf = _.forwardRef(
		({ className: e, validated: t, as: n = "form", ...r }, i) =>
			x.jsx(n, { ...r, ref: i, className: ye(e, t && "was-validated") })
	);
nf.displayName = "Form";
nf.propTypes = lC;
const Me = Object.assign(nf, {
		Group: Ey,
		Control: JS,
		Floating: ZS,
		Check: ta,
		Switch: iC,
		Label: eC,
		Text: rC,
		Range: tC,
		Select: nC,
		FloatingLabel: oC,
	}),
	sC = _.createContext(null),
	jy = sC,
	aC = ["as", "active", "eventKey"];
function uC(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i,
		o;
	for (o = 0; o < r.length; o++)
		(i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function Ly({ key: e, onClick: t, active: n, id: r, role: i, disabled: o }) {
	const s = _.useContext(ea),
		a = _.useContext(dy),
		c = _.useContext(jy);
	let d = n;
	const p = { role: i };
	if (a) {
		!i && a.role === "tablist" && (p.role = "tab");
		const v = a.getControllerId(e ?? null),
			m = a.getControlledId(e ?? null);
		(p[Ca("event-key")] = e),
			(p.id = v || r),
			(d = n == null && e != null ? a.activeKey === e : n),
			(d ||
				(!(c != null && c.unmountOnExit) &&
					!(c != null && c.mountOnEnter))) &&
				(p["aria-controls"] = m);
	}
	return (
		p.role === "tab" &&
			((p["aria-selected"] = d),
			d || (p.tabIndex = -1),
			o && ((p.tabIndex = -1), (p["aria-disabled"] = !0))),
		(p.onClick = sn((v) => {
			o ||
				(t == null || t(v),
				e != null && s && !v.isPropagationStopped() && s(e, v));
		})),
		[p, { isActive: d }]
	);
}
const Oy = _.forwardRef((e, t) => {
	let { as: n = ny, active: r, eventKey: i } = e,
		o = uC(e, aC);
	const [s, a] = Ly(Object.assign({ key: Zd(i, o.href), active: r }, o));
	return (
		(s[Ca("active")] = a.isActive),
		x.jsx(n, Object.assign({}, o, s, { ref: t }))
	);
});
Oy.displayName = "NavItem";
const cC = Oy,
	dC = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function fC(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i,
		o;
	for (o = 0; o < r.length; o++)
		(i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
const um = () => {},
	cm = Ca("event-key"),
	Ry = _.forwardRef((e, t) => {
		let {
				as: n = "div",
				onSelect: r,
				activeKey: i,
				role: o,
				onKeyDown: s,
			} = e,
			a = fC(e, dC);
		const c = VS(),
			d = _.useRef(!1),
			p = _.useContext(ea),
			v = _.useContext(jy);
		let m, b;
		v &&
			((o = o || "tablist"),
			(i = v.activeKey),
			(m = v.getControlledId),
			(b = v.getControllerId));
		const S = _.useRef(null),
			N = (E) => {
				const w = S.current;
				if (!w) return null;
				const A = Jr(w, `[${cm}]:not([aria-disabled=true])`),
					D = w.querySelector("[aria-selected=true]");
				if (!D || D !== document.activeElement) return null;
				const P = A.indexOf(D);
				if (P === -1) return null;
				let z = P + E;
				return (
					z >= A.length && (z = 0), z < 0 && (z = A.length - 1), A[z]
				);
			},
			R = (E, w) => {
				E != null && (r == null || r(E, w), p == null || p(E, w));
			},
			y = (E) => {
				if ((s == null || s(E), !v)) return;
				let w;
				switch (E.key) {
					case "ArrowLeft":
					case "ArrowUp":
						w = N(-1);
						break;
					case "ArrowRight":
					case "ArrowDown":
						w = N(1);
						break;
					default:
						return;
				}
				w &&
					(E.preventDefault(),
					R(w.dataset[XS("EventKey")] || null, E),
					(d.current = !0),
					c());
			};
		_.useEffect(() => {
			if (S.current && d.current) {
				const E = S.current.querySelector(
					`[${cm}][aria-selected=true]`
				);
				E == null || E.focus();
			}
			d.current = !1;
		});
		const g = Sa(t, S);
		return x.jsx(ea.Provider, {
			value: R,
			children: x.jsx(dy.Provider, {
				value: {
					role: o,
					activeKey: Zd(i),
					getControlledId: m || um,
					getControllerId: b || um,
				},
				children: x.jsx(
					n,
					Object.assign({}, a, { onKeyDown: y, ref: g, role: o })
				),
			}),
		});
	});
Ry.displayName = "Nav";
const hC = Object.assign(Ry, { Item: cC });
function Du(e) {
	e === void 0 && (e = Yd());
	try {
		var t = e.activeElement;
		return !t || !t.nodeName ? null : t;
	} catch {
		return e.body;
	}
}
function pC(e = document) {
	const t = e.defaultView;
	return Math.abs(t.innerWidth - e.documentElement.clientWidth);
}
const dm = Ca("modal-open");
class mC {
	constructor({
		ownerDocument: t,
		handleContainerOverflow: n = !0,
		isRTL: r = !1,
	} = {}) {
		(this.handleContainerOverflow = n),
			(this.isRTL = r),
			(this.modals = []),
			(this.ownerDocument = t);
	}
	getScrollbarWidth() {
		return pC(this.ownerDocument);
	}
	getElement() {
		return (this.ownerDocument || document).body;
	}
	setModalAttributes(t) {}
	removeModalAttributes(t) {}
	setContainerStyle(t) {
		const n = { overflow: "hidden" },
			r = this.isRTL ? "paddingLeft" : "paddingRight",
			i = this.getElement();
		(t.style = { overflow: i.style.overflow, [r]: i.style[r] }),
			t.scrollBarWidth &&
				(n[r] = `${
					parseInt(Xn(i, r) || "0", 10) + t.scrollBarWidth
				}px`),
			i.setAttribute(dm, ""),
			Xn(i, n);
	}
	reset() {
		[...this.modals].forEach((t) => this.remove(t));
	}
	removeContainerStyle(t) {
		const n = this.getElement();
		n.removeAttribute(dm), Object.assign(n.style, t.style);
	}
	add(t) {
		let n = this.modals.indexOf(t);
		return (
			n !== -1 ||
				((n = this.modals.length),
				this.modals.push(t),
				this.setModalAttributes(t),
				n !== 0) ||
				((this.state = {
					scrollBarWidth: this.getScrollbarWidth(),
					style: {},
				}),
				this.handleContainerOverflow &&
					this.setContainerStyle(this.state)),
			n
		);
	}
	remove(t) {
		const n = this.modals.indexOf(t);
		n !== -1 &&
			(this.modals.splice(n, 1),
			!this.modals.length &&
				this.handleContainerOverflow &&
				this.removeContainerStyle(this.state),
			this.removeModalAttributes(t));
	}
	isTopModal(t) {
		return (
			!!this.modals.length && this.modals[this.modals.length - 1] === t
		);
	}
}
const rf = mC,
	Au = (e, t) =>
		Ea
			? e == null
				? (t || Yd()).body
				: (typeof e == "function" && (e = e()),
				  e && "current" in e && (e = e.current),
				  e && ("nodeType" in e || e.getBoundingClientRect) ? e : null)
			: null;
function gC(e, t) {
	const n = ef(),
		[r, i] = _.useState(() => Au(e, n == null ? void 0 : n.document));
	if (!r) {
		const o = Au(e);
		o && i(o);
	}
	return (
		_.useEffect(() => {
			t && r && t(r);
		}, [t, r]),
		_.useEffect(() => {
			const o = Au(e);
			o !== r && i(o);
		}, [e, r]),
		r
	);
}
function vC({
	children: e,
	in: t,
	onExited: n,
	mountOnEnter: r,
	unmountOnExit: i,
}) {
	const o = _.useRef(null),
		s = _.useRef(t),
		a = sn(n);
	_.useEffect(() => {
		t ? (s.current = !0) : a(o.current);
	}, [t, a]);
	const c = Sa(o, e.ref),
		d = _.cloneElement(e, { ref: c });
	return t ? d : i || (!s.current && r) ? null : d;
}
function yC({ in: e, onTransition: t }) {
	const n = _.useRef(null),
		r = _.useRef(!0),
		i = sn(t);
	return (
		Bc(() => {
			if (!n.current) return;
			let o = !1;
			return (
				i({
					in: e,
					element: n.current,
					initial: r.current,
					isStale: () => o,
				}),
				() => {
					o = !0;
				}
			);
		}, [e, i]),
		Bc(
			() => (
				(r.current = !1),
				() => {
					r.current = !0;
				}
			),
			[]
		),
		n
	);
}
function wC({ children: e, in: t, onExited: n, onEntered: r, transition: i }) {
	const [o, s] = _.useState(!t);
	t && o && s(!1);
	const a = yC({
			in: !!t,
			onTransition: (d) => {
				const p = () => {
					d.isStale() ||
						(d.in
							? r == null || r(d.element, d.initial)
							: (s(!0), n == null || n(d.element)));
				};
				Promise.resolve(i(d)).then(p, (v) => {
					throw (d.in || s(!0), v);
				});
			},
		}),
		c = Sa(a, e.ref);
	return o && !t ? null : _.cloneElement(e, { ref: c });
}
function fm(e, t, n) {
	return e
		? x.jsx(e, Object.assign({}, n))
		: t
		? x.jsx(wC, Object.assign({}, n, { transition: t }))
		: x.jsx(vC, Object.assign({}, n));
}
function _C(e) {
	return e.code === "Escape" || e.keyCode === 27;
}
const xC = [
	"show",
	"role",
	"className",
	"style",
	"children",
	"backdrop",
	"keyboard",
	"onBackdropClick",
	"onEscapeKeyDown",
	"transition",
	"runTransition",
	"backdropTransition",
	"runBackdropTransition",
	"autoFocus",
	"enforceFocus",
	"restoreFocus",
	"restoreFocusOptions",
	"renderDialog",
	"renderBackdrop",
	"manager",
	"container",
	"onShow",
	"onHide",
	"onExit",
	"onExited",
	"onExiting",
	"onEnter",
	"onEntering",
	"onEntered",
];
function EC(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i,
		o;
	for (o = 0; o < r.length; o++)
		(i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
let Mu;
function SC(e) {
	return (
		Mu || (Mu = new rf({ ownerDocument: e == null ? void 0 : e.document })),
		Mu
	);
}
function CC(e) {
	const t = ef(),
		n = e || SC(t),
		r = _.useRef({ dialog: null, backdrop: null });
	return Object.assign(r.current, {
		add: () => n.add(r.current),
		remove: () => n.remove(r.current),
		isTopModal: () => n.isTopModal(r.current),
		setDialogRef: _.useCallback((i) => {
			r.current.dialog = i;
		}, []),
		setBackdropRef: _.useCallback((i) => {
			r.current.backdrop = i;
		}, []),
	});
}
const Py = _.forwardRef((e, t) => {
	let {
			show: n = !1,
			role: r = "dialog",
			className: i,
			style: o,
			children: s,
			backdrop: a = !0,
			keyboard: c = !0,
			onBackdropClick: d,
			onEscapeKeyDown: p,
			transition: v,
			runTransition: m,
			backdropTransition: b,
			runBackdropTransition: S,
			autoFocus: N = !0,
			enforceFocus: R = !0,
			restoreFocus: y = !0,
			restoreFocusOptions: g,
			renderDialog: E,
			renderBackdrop: w = (Se) => x.jsx("div", Object.assign({}, Se)),
			manager: A,
			container: D,
			onShow: P,
			onHide: z = () => {},
			onExit: Y,
			onExited: G,
			onExiting: fe,
			onEnter: Be,
			onEntering: Re,
			onEntered: mt,
		} = e,
		Ee = EC(e, xC);
	const ot = ef(),
		et = gC(D),
		$ = CC(A),
		X = SS(),
		j = CS(n),
		[de, he] = _.useState(!n),
		He = _.useRef(null);
	_.useImperativeHandle(t, () => $, [$]),
		Ea && !j && n && (He.current = Du(ot == null ? void 0 : ot.document)),
		n && de && he(!1);
	const we = sn(() => {
			if (
				($.add(),
				(qt.current = Zs(document, "keydown", q)),
				(Ye.current = Zs(document, "focus", () => setTimeout(Pe), !0)),
				P && P(),
				N)
			) {
				var Se, fn;
				const Pr = Du(
					(Se =
						(fn = $.dialog) == null ? void 0 : fn.ownerDocument) !=
						null
						? Se
						: ot == null
						? void 0
						: ot.document
				);
				$.dialog &&
					Pr &&
					!am($.dialog, Pr) &&
					((He.current = Pr), $.dialog.focus());
			}
		}),
		Ne = sn(() => {
			if (
				($.remove(),
				qt.current == null || qt.current(),
				Ye.current == null || Ye.current(),
				y)
			) {
				var Se;
				(Se = He.current) == null || Se.focus == null || Se.focus(g),
					(He.current = null);
			}
		});
	_.useEffect(() => {
		!n || !et || we();
	}, [n, et, we]),
		_.useEffect(() => {
			de && Ne();
		}, [de, Ne]),
		zS(() => {
			Ne();
		});
	const Pe = sn(() => {
			if (!R || !X() || !$.isTopModal()) return;
			const Se = Du(ot == null ? void 0 : ot.document);
			$.dialog && Se && !am($.dialog, Se) && $.dialog.focus();
		}),
		Gt = sn((Se) => {
			Se.target === Se.currentTarget &&
				(d == null || d(Se), a === !0 && z());
		}),
		q = sn((Se) => {
			c &&
				_C(Se) &&
				$.isTopModal() &&
				(p == null || p(Se), Se.defaultPrevented || z());
		}),
		Ye = _.useRef(),
		qt = _.useRef(),
		yi = (...Se) => {
			he(!0), G == null || G(...Se);
		};
	if (!et) return null;
	const wi = Object.assign(
		{
			role: r,
			ref: $.setDialogRef,
			"aria-modal": r === "dialog" ? !0 : void 0,
		},
		Ee,
		{ style: o, className: i, tabIndex: -1 }
	);
	let gt = E
		? E(wi)
		: x.jsx(
				"div",
				Object.assign({}, wi, {
					children: _.cloneElement(s, { role: "document" }),
				})
		  );
	gt = fm(v, m, {
		unmountOnExit: !0,
		mountOnEnter: !0,
		appear: !0,
		in: !!n,
		onExit: Y,
		onExiting: fe,
		onExited: yi,
		onEnter: Be,
		onEntering: Re,
		onEntered: mt,
		children: gt,
	});
	let Mn = null;
	return (
		a &&
			((Mn = w({ ref: $.setBackdropRef, onClick: Gt })),
			(Mn = fm(b, S, {
				in: !!n,
				appear: !0,
				mountOnEnter: !0,
				unmountOnExit: !0,
				children: Mn,
			}))),
		x.jsx(x.Fragment, {
			children: ni.createPortal(
				x.jsxs(x.Fragment, { children: [Mn, gt] }),
				et
			),
		})
	);
});
Py.displayName = "Modal";
const kC = Object.assign(Py, { Manager: rf });
function TC(e, t) {
	return e.classList
		? !!t && e.classList.contains(t)
		: (" " + (e.className.baseVal || e.className) + " ").indexOf(
				" " + t + " "
		  ) !== -1;
}
function NC(e, t) {
	e.classList
		? e.classList.add(t)
		: TC(e, t) ||
		  (typeof e.className == "string"
				? (e.className = e.className + " " + t)
				: e.setAttribute(
						"class",
						((e.className && e.className.baseVal) || "") + " " + t
				  ));
}
function hm(e, t) {
	return e
		.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
		.replace(/\s+/g, " ")
		.replace(/^\s*|\s*$/g, "");
}
function bC(e, t) {
	e.classList
		? e.classList.remove(t)
		: typeof e.className == "string"
		? (e.className = hm(e.className, t))
		: e.setAttribute(
				"class",
				hm((e.className && e.className.baseVal) || "", t)
		  );
}
const Pi = {
	FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
	STICKY_CONTENT: ".sticky-top",
	NAVBAR_TOGGLER: ".navbar-toggler",
};
class Dy extends rf {
	adjustAndStore(t, n, r) {
		const i = n.style[t];
		(n.dataset[t] = i), Xn(n, { [t]: `${parseFloat(Xn(n, t)) + r}px` });
	}
	restore(t, n) {
		const r = n.dataset[t];
		r !== void 0 && (delete n.dataset[t], Xn(n, { [t]: r }));
	}
	setContainerStyle(t) {
		super.setContainerStyle(t);
		const n = this.getElement();
		if ((NC(n, "modal-open"), !t.scrollBarWidth)) return;
		const r = this.isRTL ? "paddingLeft" : "paddingRight",
			i = this.isRTL ? "marginLeft" : "marginRight";
		Jr(n, Pi.FIXED_CONTENT).forEach((o) =>
			this.adjustAndStore(r, o, t.scrollBarWidth)
		),
			Jr(n, Pi.STICKY_CONTENT).forEach((o) =>
				this.adjustAndStore(i, o, -t.scrollBarWidth)
			),
			Jr(n, Pi.NAVBAR_TOGGLER).forEach((o) =>
				this.adjustAndStore(i, o, t.scrollBarWidth)
			);
	}
	removeContainerStyle(t) {
		super.removeContainerStyle(t);
		const n = this.getElement();
		bC(n, "modal-open");
		const r = this.isRTL ? "paddingLeft" : "paddingRight",
			i = this.isRTL ? "marginLeft" : "marginRight";
		Jr(n, Pi.FIXED_CONTENT).forEach((o) => this.restore(r, o)),
			Jr(n, Pi.STICKY_CONTENT).forEach((o) => this.restore(i, o)),
			Jr(n, Pi.NAVBAR_TOGGLER).forEach((o) => this.restore(i, o));
	}
}
let Iu;
function jC(e) {
	return Iu || (Iu = new Dy(e)), Iu;
}
const LC = Dy,
	OC = _.createContext({ onHide() {} }),
	Ay = OC,
	RC = _.forwardRef(
		(
			{
				closeLabel: e = "Close",
				closeVariant: t,
				closeButton: n = !1,
				onHide: r,
				children: i,
				...o
			},
			s
		) => {
			const a = _.useContext(Ay),
				c = sn(() => {
					a == null || a.onHide(), r == null || r();
				});
			return x.jsxs("div", {
				ref: s,
				...o,
				children: [
					i,
					n && x.jsx(IS, { "aria-label": e, variant: t, onClick: c }),
				],
			});
		}
	),
	PC = RC;
var pm = { exports: {} },
	Vc = { exports: {} };
(function (e, t) {
	Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
	function n(r) {
		function i(s, a, c, d, p, v) {
			var m = d || "<<anonymous>>",
				b = v || c;
			if (a[c] == null)
				return s
					? new Error(
							"Required " +
								p +
								" `" +
								b +
								"` was not specified " +
								("in `" + m + "`.")
					  )
					: null;
			for (
				var S = arguments.length, N = Array(S > 6 ? S - 6 : 0), R = 6;
				R < S;
				R++
			)
				N[R - 6] = arguments[R];
			return r.apply(void 0, [a, c, m, p, b].concat(N));
		}
		var o = i.bind(null, !1);
		return (o.isRequired = i.bind(null, !0)), o;
	}
	e.exports = t.default;
})(Vc, Vc.exports);
var DC = Vc.exports;
(function (e, t) {
	Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o);
	var n = DC,
		r = i(n);
	function i(s) {
		return s && s.__esModule ? s : { default: s };
	}
	function o() {
		for (var s = arguments.length, a = Array(s), c = 0; c < s; c++)
			a[c] = arguments[c];
		function d() {
			for (var p = arguments.length, v = Array(p), m = 0; m < p; m++)
				v[m] = arguments[m];
			var b = null;
			return (
				a.forEach(function (S) {
					if (b == null) {
						var N = S.apply(void 0, v);
						N != null && (b = N);
					}
				}),
				b
			);
		}
		return (0, r.default)(d);
	}
	e.exports = t.default;
})(pm, pm.exports);
const My = _.forwardRef(
	({ className: e, bsPrefix: t, as: n = "div", ...r }, i) => (
		(t = Ie(t, "nav-item")), x.jsx(n, { ref: i, className: ye(e, t), ...r })
	)
);
My.displayName = "NavItem";
const AC = My,
	Iy = _.forwardRef(
		(
			{
				bsPrefix: e,
				className: t,
				as: n = PS,
				active: r,
				eventKey: i,
				disabled: o = !1,
				...s
			},
			a
		) => {
			e = Ie(e, "nav-link");
			const [c, d] = Ly({
				key: Zd(i, s.href),
				active: r,
				disabled: o,
				...s,
			});
			return x.jsx(n, {
				...s,
				...c,
				ref: a,
				disabled: o,
				className: ye(t, e, o && "disabled", d.isActive && "active"),
			});
		}
	);
Iy.displayName = "NavLink";
const MC = Iy,
	$y = _.forwardRef((e, t) => {
		const {
				as: n = "div",
				bsPrefix: r,
				variant: i,
				fill: o = !1,
				justify: s = !1,
				navbar: a,
				navbarScroll: c,
				className: d,
				activeKey: p,
				...v
			} = Gv(e, { activeKey: "onSelect" }),
			m = Ie(r, "nav");
		let b,
			S,
			N = !1;
		const R = _.useContext(po),
			y = _.useContext($S);
		return (
			R
				? ((b = R.bsPrefix), (N = a ?? !0))
				: y && ({ cardHeaderBsPrefix: S } = y),
			x.jsx(hC, {
				as: n,
				ref: t,
				activeKey: p,
				className: ye(d, {
					[m]: !N,
					[`${b}-nav`]: N,
					[`${b}-nav-scroll`]: N && c,
					[`${S}-${i}`]: !!S,
					[`${m}-${i}`]: !!i,
					[`${m}-fill`]: o,
					[`${m}-justified`]: s,
				}),
				...v,
			})
		);
	});
$y.displayName = "Nav";
const Kc = Object.assign($y, { Item: AC, Link: MC }),
	Fy = _.forwardRef(({ bsPrefix: e, className: t, as: n, ...r }, i) => {
		e = Ie(e, "navbar-brand");
		const o = n || (r.href ? "a" : "span");
		return x.jsx(o, { ...r, ref: i, className: ye(t, e) });
	});
Fy.displayName = "NavbarBrand";
const IC = Fy,
	zy = _.forwardRef(({ children: e, bsPrefix: t, ...n }, r) => {
		t = Ie(t, "navbar-collapse");
		const i = _.useContext(po);
		return x.jsx(_S, {
			in: !!(i && i.expanded),
			...n,
			children: x.jsx("div", { ref: r, className: t, children: e }),
		});
	});
zy.displayName = "NavbarCollapse";
const $C = zy,
	Uy = _.forwardRef(
		(
			{
				bsPrefix: e,
				className: t,
				children: n,
				label: r = "Toggle navigation",
				as: i = "button",
				onClick: o,
				...s
			},
			a
		) => {
			e = Ie(e, "navbar-toggler");
			const { onToggle: c, expanded: d } = _.useContext(po) || {},
				p = sn((v) => {
					o && o(v), c && c();
				});
			return (
				i === "button" && (s.type = "button"),
				x.jsx(i, {
					...s,
					ref: a,
					onClick: p,
					"aria-label": r,
					className: ye(t, e, !d && "collapsed"),
					children: n || x.jsx("span", { className: `${e}-icon` }),
				})
			);
		}
	);
Uy.displayName = "NavbarToggle";
const FC = Uy,
	Qc = new WeakMap(),
	mm = (e, t) => {
		if (!e || !t) return;
		const n = Qc.get(t) || new Map();
		Qc.set(t, n);
		let r = n.get(e);
		return (
			r || ((r = t.matchMedia(e)), (r.refCount = 0), n.set(r.media, r)), r
		);
	};
function zC(e, t = typeof window > "u" ? void 0 : window) {
	const n = mm(e, t),
		[r, i] = _.useState(() => (n ? n.matches : !1));
	return (
		Bc(() => {
			let o = mm(e, t);
			if (!o) return i(!1);
			let s = Qc.get(t);
			const a = () => {
				i(o.matches);
			};
			return (
				o.refCount++,
				o.addListener(a),
				a(),
				() => {
					o.removeListener(a),
						o.refCount--,
						o.refCount <= 0 && (s == null || s.delete(o.media)),
						(o = void 0);
				}
			);
		}, [e]),
		r
	);
}
function UC(e) {
	const t = Object.keys(e);
	function n(a, c) {
		return a === c ? c : a ? `${a} and ${c}` : c;
	}
	function r(a) {
		return t[Math.min(t.indexOf(a) + 1, t.length - 1)];
	}
	function i(a) {
		const c = r(a);
		let d = e[c];
		return (
			typeof d == "number"
				? (d = `${d - 0.2}px`)
				: (d = `calc(${d} - 0.2px)`),
			`(max-width: ${d})`
		);
	}
	function o(a) {
		let c = e[a];
		return typeof c == "number" && (c = `${c}px`), `(min-width: ${c})`;
	}
	function s(a, c, d) {
		let p;
		typeof a == "object"
			? ((p = a), (d = c), (c = !0))
			: ((c = c || !0), (p = { [a]: c }));
		let v = _.useMemo(
			() =>
				Object.entries(p).reduce(
					(m, [b, S]) => (
						(S === "up" || S === !0) && (m = n(m, o(b))),
						(S === "down" || S === !0) && (m = n(m, i(b))),
						m
					),
					""
				),
			[JSON.stringify(p)]
		);
		return zC(v, d);
	}
	return s;
}
const BC = UC({ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 }),
	By = _.forwardRef(
		({ className: e, bsPrefix: t, as: n = "div", ...r }, i) => (
			(t = Ie(t, "offcanvas-body")),
			x.jsx(n, { ref: i, className: ye(e, t), ...r })
		)
	);
By.displayName = "OffcanvasBody";
const WC = By,
	HC = { [xn]: "show", [Hn]: "show" },
	Wy = _.forwardRef(
		(
			{
				bsPrefix: e,
				className: t,
				children: n,
				in: r = !1,
				mountOnEnter: i = !1,
				unmountOnExit: o = !1,
				appear: s = !1,
				...a
			},
			c
		) => (
			(e = Ie(e, "offcanvas")),
			x.jsx(Gd, {
				ref: c,
				addEndListener: Xd,
				in: r,
				mountOnEnter: i,
				unmountOnExit: o,
				appear: s,
				...a,
				childRef: n.ref,
				children: (d, p) =>
					_.cloneElement(n, {
						...p,
						className: ye(
							t,
							n.props.className,
							(d === xn || d === xl) && `${e}-toggling`,
							HC[d]
						),
					}),
			})
		)
	);
Wy.displayName = "OffcanvasToggling";
const VC = Wy,
	Hy = _.forwardRef(
		(
			{
				bsPrefix: e,
				className: t,
				closeLabel: n = "Close",
				closeButton: r = !1,
				...i
			},
			o
		) => (
			(e = Ie(e, "offcanvas-header")),
			x.jsx(PC, {
				ref: o,
				...i,
				className: ye(t, e),
				closeLabel: n,
				closeButton: r,
			})
		)
	);
Hy.displayName = "OffcanvasHeader";
const KC = Hy,
	QC = ES("h5"),
	Vy = _.forwardRef(
		({ className: e, bsPrefix: t, as: n = QC, ...r }, i) => (
			(t = Ie(t, "offcanvas-title")),
			x.jsx(n, { ref: i, className: ye(e, t), ...r })
		)
	);
Vy.displayName = "OffcanvasTitle";
const YC = Vy;
function XC(e) {
	return x.jsx(VC, { ...e });
}
function GC(e) {
	return x.jsx(AS, { ...e });
}
const Ky = _.forwardRef(
	(
		{
			bsPrefix: e,
			className: t,
			children: n,
			"aria-labelledby": r,
			placement: i = "start",
			responsive: o,
			show: s = !1,
			backdrop: a = !0,
			keyboard: c = !0,
			scroll: d = !1,
			onEscapeKeyDown: p,
			onShow: v,
			onHide: m,
			container: b,
			autoFocus: S = !0,
			enforceFocus: N = !0,
			restoreFocus: R = !0,
			restoreFocusOptions: y,
			onEntered: g,
			onExit: E,
			onExiting: w,
			onEnter: A,
			onEntering: D,
			onExited: P,
			backdropClassName: z,
			manager: Y,
			renderStaticNode: G = !1,
			...fe
		},
		Be
	) => {
		const Re = _.useRef();
		e = Ie(e, "offcanvas");
		const { onToggle: mt } = _.useContext(po) || {},
			[Ee, ot] = _.useState(!1),
			et = BC(o || "xs", "up");
		_.useEffect(() => {
			ot(o ? s && !et : s);
		}, [s, o, et]);
		const $ = sn(() => {
				mt == null || mt(), m == null || m();
			}),
			X = _.useMemo(() => ({ onHide: $ }), [$]);
		function j() {
			return (
				Y ||
				(d
					? (Re.current ||
							(Re.current = new LC({
								handleContainerOverflow: !1,
							})),
					  Re.current)
					: jC())
			);
		}
		const de = (Ne, ...Pe) => {
				Ne && (Ne.style.visibility = "visible"),
					A == null || A(Ne, ...Pe);
			},
			he = (Ne, ...Pe) => {
				Ne && (Ne.style.visibility = ""), P == null || P(...Pe);
			},
			He = _.useCallback(
				(Ne) =>
					x.jsx("div", { ...Ne, className: ye(`${e}-backdrop`, z) }),
				[z, e]
			),
			we = (Ne) =>
				x.jsx("div", {
					...Ne,
					...fe,
					className: ye(t, o ? `${e}-${o}` : e, `${e}-${i}`),
					"aria-labelledby": r,
					children: n,
				});
		return x.jsxs(x.Fragment, {
			children: [
				!Ee && (o || G) && we({}),
				x.jsx(Ay.Provider, {
					value: X,
					children: x.jsx(kC, {
						show: Ee,
						ref: Be,
						backdrop: a,
						container: b,
						keyboard: c,
						autoFocus: S,
						enforceFocus: N && !d,
						restoreFocus: R,
						restoreFocusOptions: y,
						onEscapeKeyDown: p,
						onShow: v,
						onHide: $,
						onEnter: de,
						onEntering: D,
						onEntered: g,
						onExit: E,
						onExiting: w,
						onExited: he,
						manager: j(),
						transition: XC,
						backdropTransition: GC,
						renderBackdrop: He,
						renderDialog: we,
					}),
				}),
			],
		});
	}
);
Ky.displayName = "Offcanvas";
const qC = Object.assign(Ky, { Body: WC, Header: KC, Title: YC }),
	Qy = _.forwardRef((e, t) => {
		const n = _.useContext(po);
		return x.jsx(qC, {
			ref: t,
			show: !!(n != null && n.expanded),
			...e,
			renderStaticNode: !0,
		});
	});
Qy.displayName = "NavbarOffcanvas";
const JC = Qy,
	Yy = _.forwardRef(
		({ className: e, bsPrefix: t, as: n = "span", ...r }, i) => (
			(t = Ie(t, "navbar-text")),
			x.jsx(n, { ref: i, className: ye(e, t), ...r })
		)
	);
Yy.displayName = "NavbarText";
const ZC = Yy,
	Xy = _.forwardRef((e, t) => {
		const {
				bsPrefix: n,
				expand: r = !0,
				variant: i = "light",
				bg: o,
				fixed: s,
				sticky: a,
				className: c,
				as: d = "nav",
				expanded: p,
				onToggle: v,
				onSelect: m,
				collapseOnSelect: b = !1,
				...S
			} = Gv(e, { expanded: "onToggle" }),
			N = Ie(n, "navbar"),
			R = _.useCallback(
				(...E) => {
					m == null || m(...E), b && p && (v == null || v(!1));
				},
				[m, b, p, v]
			);
		S.role === void 0 && d !== "nav" && (S.role = "navigation");
		let y = `${N}-expand`;
		typeof r == "string" && (y = `${y}-${r}`);
		const g = _.useMemo(
			() => ({
				onToggle: () => (v == null ? void 0 : v(!p)),
				bsPrefix: N,
				expanded: !!p,
				expand: r,
			}),
			[N, p, r, v]
		);
		return x.jsx(po.Provider, {
			value: g,
			children: x.jsx(ea.Provider, {
				value: R,
				children: x.jsx(d, {
					ref: t,
					...S,
					className: ye(
						c,
						N,
						r && y,
						i && `${N}-${i}`,
						o && `bg-${o}`,
						a && `sticky-${a}`,
						s && `fixed-${s}`
					),
				}),
			}),
		});
	});
Xy.displayName = "Navbar";
const oi = Object.assign(Xy, {
	Brand: IC,
	Collapse: $C,
	Offcanvas: JC,
	Text: ZC,
	Toggle: FC,
});
class Vo extends Error {}
Vo.prototype.name = "InvalidTokenError";
function ek(e) {
	return decodeURIComponent(
		atob(e).replace(/(.)/g, (t, n) => {
			let r = n.charCodeAt(0).toString(16).toUpperCase();
			return r.length < 2 && (r = "0" + r), "%" + r;
		})
	);
}
function tk(e) {
	let t = e.replace(/-/g, "+").replace(/_/g, "/");
	switch (t.length % 4) {
		case 0:
			break;
		case 2:
			t += "==";
			break;
		case 3:
			t += "=";
			break;
		default:
			throw new Error("base64 string is not of the correct length");
	}
	try {
		return ek(t);
	} catch {
		return atob(t);
	}
}
function $u(e, t) {
	if (typeof e != "string")
		throw new Vo("Invalid token specified: must be a string");
	t || (t = {});
	const n = t.header === !0 ? 0 : 1,
		r = e.split(".")[n];
	if (typeof r != "string")
		throw new Vo(`Invalid token specified: missing part #${n + 1}`);
	let i;
	try {
		i = tk(r);
	} catch (o) {
		throw new Vo(
			`Invalid token specified: invalid base64 for part #${n + 1} (${
				o.message
			})`
		);
	}
	try {
		return JSON.parse(i);
	} catch (o) {
		throw new Vo(
			`Invalid token specified: invalid json for part #${n + 1} (${
				o.message
			})`
		);
	}
}
const of = _.createContext(),
	nk = ({ children: e }) => {
		let [t, n] = _.useState(() =>
				localStorage.getItem("authTokens")
					? JSON.parse(localStorage.getItem("authTokens"))
					: null
			),
			[r, i] = _.useState(() =>
				localStorage.getItem("authTokens")
					? $u(localStorage.getItem("authTokens"))
					: null
			),
			[o, s] = _.useState(!0),
			a = async (v) => {
				try {
					let m = await fetch(
							"https://www.rhhsmathclub.com/api/token/",
							{
								method: "POST",
								headers: { "Content-Type": "application/json" },
								body: JSON.stringify({
									username: v.username,
									password: v.password,
								}),
							}
						),
						b = await m.json();
					if (m.status === 200)
						n(b),
							i($u(b.access)),
							localStorage.setItem(
								"authTokens",
								JSON.stringify(b)
							);
					else return !1;
					return !0;
				} catch (m) {
					return m;
				}
			},
			c = () => {
				n(null), i(null), localStorage.removeItem("authTokens");
			},
			d = async () => {
				let v = await fetch(
						"https://www.rhhsmathclub.com/api/token/refresh/",
						{
							method: "POST",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify({
								refresh: t == null ? void 0 : t.refresh,
							}),
						}
					),
					m = await v.json();
				v.status === 200
					? (n(m),
					  i($u(m.access)),
					  localStorage.setItem("authTokens", JSON.stringify(m)))
					: c(),
					o && s(!1);
			},
			p = { user: r, authTokens: t, loginUser: a, logoutUser: c };
		return (
			_.useEffect(() => {
				o && d();
				let v = 1e3 * 60 * 4,
					m = setInterval(() => {
						t && d();
					}, v);
				return () => clearInterval(m);
			}, [t, o]),
			x.jsx(of.Provider, { value: p, children: o ? null : e })
		);
	},
	lf = (e) => "/static/" + e;
function rk() {
	return (
		_.useContext(of),
		x.jsx("div", {
			className: "fixed-navbar",
			children: x.jsxs(oi, {
				collapseOnSelect: !0,
				expand: "md",
				className: "d-flex flex-column",
				children: [
					x.jsxs(Wc, {
						className:
							"d-flex justify-content-between align-self-center p-0",
						children: [
							x.jsx(oi.Brand, {
								as: ii,
								to: "/",
								className: "me-0 p-0 text-center col-3",
								children: x.jsxs("div", {
									className: "d-flex align-items-center",
									children: [
										x.jsx("img", {
											src: lf("images/logo.png"),
											className:
												"d-inline-block align-top nav-logo",
										}),
										x.jsxs("p", {
											className: "nav-title mb-0 ms-2",
											children: [
												x.jsx("span", {
													children: "RHHS",
												}),
												" Math Club",
											],
										}),
									],
								}),
							}),
							x.jsx(oi.Toggle, {
								className: "justify-self-end",
								"aria-controls": "navbar-links",
							}),
							x.jsx(oi.Collapse, {
								id: "navbar-links",
								className: "justify-content-end p-0",
								children: x.jsxs(Kc, {
									className: "nav-content text-end",
									children: [
										x.jsx(ii, {
											to: "/about-us",
											className: "nav-link",
											children: "About Us",
										}),
										x.jsx(ii, {
											to: "/contact",
											className: "nav-link",
											children: "Contact",
										}),
										x.jsx(ii, {
											to: "/login",
											className: "nav-link",
											children: "Login",
										}),
									],
								}),
							}),
						],
					}),
					x.jsxs(Wc, {
						className:
							"schedule justify-content-center text-center p-0 d-none d-md-flex",
						children: [
							x.jsx("p", { children: "Room 2029" }),
							x.jsx("p", { className: "col-1" }),
							x.jsx("p", { children: "Friday Weekly" }),
						],
					}),
				],
			}),
		})
	);
}
const eo = ({ href: e, src: t, size: n = "55px", className: r = "" }) =>
	x.jsx("a", {
		href: e,
		className: `icon-link d-flex justify-content-center align-items-center p-1 ${r}`,
		children: x.jsx("img", {
			className: "icon-img",
			src: lf(t),
			style: { width: n, height: n },
		}),
	});
function ik() {
	return x.jsx(oi, {
		className: "footer p-4",
		children: x.jsxs(Wc, {
			fluid: !0,
			children: [
				x.jsx(oi.Brand, {
					as: ii,
					to: "/",
					className: "me-0 text-center",
					children: x.jsxs("div", {
						className: "d-flex align-items-center",
						children: [
							x.jsx("img", {
								src: lf("images/logo.png"),
								className:
									"d-inline-block align-top img-white logo footer-logo",
								alt: "Logo",
							}),
							x.jsxs("div", {
								className:
									"footer-title d-flex flex-column ms-2",
								children: [
									x.jsx("p", {
										className: "fw-bold mb-0",
										children: "RHHS Math Club",
									}),
									x.jsx("p", {
										className: "mb-0",
										children: "Sapere Aude",
									}),
								],
							}),
						],
					}),
				}),
				x.jsxs(oi, {
					children: [
						x.jsxs(Kc, {
							className:
								"footer-routes nav-content flex-column text-end ms-auto",
							children: [
								x.jsx(hs, {
									to: "/",
									className: "nav-link",
									children: "Home",
								}),
								x.jsx(hs, {
									to: "/about-us",
									className: "nav-link",
									children: "About Us",
								}),
								x.jsx(hs, {
									to: "/contact",
									className: "nav-link",
									children: "Contact",
								}),
								x.jsx(hs, {
									to: "/login",
									className: "nav-link",
									children: "Login",
								}),
							],
						}),
						x.jsxs(Kc, {
							className: "footer-links flex-column ms-1",
							children: [
								x.jsx(eo, {
									href: "https://classroom.google.com/c/NjIxMzE0NjM1NjEx?cjc=igaatel/",
									src: "svg/icons/google-classroom.svg",
									size: "35px",
								}),
								x.jsx(eo, {
									href: "https://discord.com/invite/EQmNaeEsRu/",
									src: "svg/icons/discord.svg",
									size: "35px",
								}),
								x.jsx(eo, {
									href: "https://www.instagram.com/rhhs_math/",
									src: "svg/icons/instagram.svg",
									size: "35px",
								}),
							],
						}),
					],
				}),
			],
		}),
	});
}
const gm = async (e, t = null) => {
		try {
			let n = await fetch(`https://www.rhhsmathclub.com/api/${e}/`, {
					method: "GET",
					headers: { "Content-Type": "application/json" },
				}),
				r = await n.json();
			if (n.status === 200) return t !== null && t(r), r;
		} catch {
			return !1;
		}
	},
	ok = async (e, t) => {
		try {
			return (
				await fetch(`https://www.rhhsmathclub.com/api/${e}/`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(t),
				})
			).status;
		} catch {
			return !1;
		}
	},
	Ll = ({ title: e, children: t }) =>
		x.jsxs("div", {
			className:
				"header d-flex flex-column justify-content-center text-center",
			children: [x.jsx("h1", { className: "m-0", children: e }), t],
		}),
	to = ({ align: e, colWidth: t, title: n, children: r }) =>
		x.jsxs("div", {
			className: `d-flex flex-column align-self-${e} ${
				t === 0 ? "" : `col-${t}`
			} mb-auto`,
			children: [
				x.jsx("h2", {
					className: `card-title mt-4 mb-2 p-0 text-${e}`,
					children: n,
				}),
				x.jsx("div", { className: "card-body", children: r }),
			],
		}),
	vm = ({ key: e, align: t, datetime: n, name: r, info: i }) => {
		let o = new Date(n),
			s = o.toLocaleString("en-us", { month: "short" }),
			a = o.getDate(),
			c = t === "start" ? 0 : 1;
		const d = [
			{ borderRadius: "50px 0 0 50px" },
			{ borderRadius: "0 50px 50px 0" },
		];
		let p = [{ left: "3px" }, { right: "3px" }],
			v = [
				x.jsxs("div", {
					className:
						"col-3 col-lg-2 card-date d-flex flex-column justify-content-center align-items-center",
					style: d[c],
					children: [
						x.jsx("p", {
							className: "card-day mb-0",
							style: p[c],
							children: a,
						}),
						x.jsx("p", {
							className: "card-month mb-0",
							style: p[c],
							children: s,
						}),
					],
				}),
				x.jsxs("div", {
					className: `card-description col-9 col-lg-10 p-2 text-${t}`,
					style: d[1 - c],
					children: [
						x.jsx("p", { className: "card-name m-0", children: r }),
						x.jsx("span", { className: "fst-italic", children: i }),
					],
				}),
			];
		return (
			t === "end" && ([v[0], v[1]] = [v[1], v[0]]),
			x.jsx(
				"div",
				{
					className:
						"d-flex flex-row card-item mb-3 align-items-center",
					children: v,
				},
				e
			)
		);
	},
	lk = () => {
		let [e, t] = _.useState([]),
			[n, r] = _.useState([]);
		_.useEffect(() => {
			gm("events", t), gm("contests", r);
		}, []);
		let i = (a) =>
				a.short_provider
					? a.short_provider
					: a.provider.length > 13
					? a.provider.slice(0, 13) + "..."
					: a.provider,
			o = (a) => {
				let c = new Date(a.deadline),
					d = c.toLocaleString("en-us", { month: "short" }),
					p = c.getDate();
				return `${d} ${p}`;
			},
			s = () => {
				window.scrollTo({ top: 0, behavior: "smooth" });
			};
		return x.jsxs("div", {
			className: "d-flex flex-column mx-5",
			children: [
				x.jsx("div", {
					className: "mt-5 mb-4",
					children: x.jsx(Ll, {
						title: "RHHS Math Club",
						children: x.jsx("span", {
							className: "home-text",
							children:
								"Unlocking Math's Wonders: Where Inclusivity and Friendship Count, and Everyone's Welcome!",
						}),
					}),
				}),
				x.jsx(to, {
					align: "start",
					colWidth: 4,
					title: "Upcoming Events",
					children:
						e.length > 0
							? e.map((a) =>
									x.jsx(
										vm,
										{
											align: "start",
											datetime: a.datetime,
											name: a.name,
											info: "Rm. " + a.room,
										},
										a.id
									)
							  )
							: x.jsx("p", {
									className: "card-p text-start ms-2",
									children: "There are no events soon.",
							  }),
				}),
				x.jsx(to, {
					align: "end",
					colWidth: 4,
					title: "Upcoming Contests",
					children:
						n.length > 0
							? n.map((a) =>
									x.jsx(
										vm,
										{
											align: "end",
											datetime: a.datetime,
											name: a.name + " | " + i(a),
											info: "Sign Up Deadline: " + o(a),
										},
										a.id
									)
							  )
							: x.jsx("p", {
									className: "card-p text-end ms-2",
									children: "There are no contests soon.",
							  }),
				}),
				x.jsx(to, {
					align: "start",
					colWidth: 6,
					title: "Looking To Join?",
					children: x.jsxs("div", {
						className: "d-flex flex-column card-p",
						children: [
							x.jsx("p", {
								className: "mb-2",
								children:
									"Are you struggling with math? Or do you simply want to learn something new? If you answered yes to any of those questions then you've come to the right place!",
							}),
							x.jsx("p", {
								className: "mb-4",
								children:
									"Whether it be simple algebra or complex calculus, our talented team of tutors and executives are here to help! Sign up to become a tutee!",
							}),
							x.jsx(ii, {
								to: "/contact",
								className:
									"nav-link card-link col-7 align-self-end py-2 text-center",
								onClick: s,
								children: "Click Here To Join Math Club!",
							}),
						],
					}),
				}),
			],
		});
	},
	sk = () =>
		x.jsx("div", {
			className: "d-flex flex-column",
			children: x.jsxs("div", {
				className: "mx-5 mb-5",
				children: [
					x.jsx("div", {
						className: "mt-5 mb-5",
						children: x.jsx(Ll, { title: "About Us" }),
					}),
					x.jsxs("div", {
						className: "d-flex flex-row justify-content-between",
						children: [
							x.jsx(to, {
								align: "start",
								colWidth: 0,
								title: "Our Mission",
								children: x.jsxs("div", {
									className: "card-p col-10 ms-2",
									children: [
										x.jsx("p", {
											className: "mb-2",
											children:
												"The Math Club offers a comprehensive learning experience for students, encompassing various aspects of mathematics.",
										}),
										x.jsx("p", {
											className: "mb-0",
											children:
												"From strengthening core concepts aligned with the Ontario Math Curriculum and practical real-life applications in academic math, to honing competitive problem-solving skills through specialized instruction in contest math, and providing personalized assistance through the tutor team for a wide range of mathematical challenges, the Math Club serves as a dynamic platform catering to diverse mathematical interests and needs.",
										}),
									],
								}),
							}),
							x.jsx("div", {
								className:
									"col-5 d-flex justify-content-center align-items-center",
								children: x.jsx("div", {
									className: "team-img",
								}),
							}),
						],
					}),
				],
			}),
		}),
	ak = () => {
		const [t, n] = _.useState(0),
			[r, i] = _.useState(!1),
			o = async (s) => {
				s.preventDefault();
				const a = s.currentTarget;
				if (a.checkValidity() === !1) s.stopPropagation();
				else {
					const c = new FormData(a),
						d = {};
					for (const [p, v] of c.entries()) d[p] = v;
					ok("contact", d);
				}
				i(!0);
			};
		return x.jsx("div", {
			className: "d-flex flex-column",
			children: x.jsxs("div", {
				className: "mx-5 mb-5",
				children: [
					x.jsx("div", {
						className: "mt-5 mb-3",
						children: x.jsx(Ll, { title: "Contact Us" }),
					}),
					x.jsxs("div", {
						className: "d-flex flex-row justify-content-around",
						children: [
							x.jsx(to, {
								align: "start",
								colWidth: 5,
								title: "Our Socials",
								children: x.jsxs("div", {
									className:
										"contact-info d-inline-block ms-2 mb-2",
									children: [
										x.jsxs("p", {
											children: [
												"Email: ",
												x.jsx("span", {
													className:
														"fst-italic text-decoration-underline",
													children:
														"mathclubrhhs@gmail.com",
												}),
											],
										}),
										x.jsxs("p", {
											className: "mb-3",
											children: [
												"Classroom Code: ",
												x.jsx("span", {
													className:
														"fst-italic text-decoration-underline",
													children: "igaatel",
												}),
											],
										}),
										x.jsx("p", {
											children:
												"201 Yorkland Street, L4S 1A2",
										}),
										x.jsx("p", {
											children:
												"Richmond Hill, Ontario, Canada",
										}),
										x.jsx("p", {
											className: "mb-3",
											children: "(905)-884-2131",
										}),
										x.jsxs("div", {
											className:
												"d-flex justify-content-start",
											children: [
												x.jsx(eo, {
													href: "https://classroom.google.com/c/NjIxMzE0NjM1NjEx?cjc=igaatel/",
													src: "svg/icons/google-classroom.svg",
													className: "me-2",
												}),
												x.jsx(eo, {
													href: "https://discord.com/invite/EQmNaeEsRu/",
													src: "svg/icons/discord.svg",
													className: "me-2",
												}),
												x.jsx(eo, {
													href: "https://www.instagram.com/rhhs_math/",
													src: "svg/icons/instagram.svg",
												}),
											],
										}),
									],
								}),
							}),
							x.jsx(to, {
								align: "center",
								colWidth: 5,
								title: "Message Us Directly",
								children: x.jsxs(Me, {
									className: "message-form p-3",
									onSubmit: o,
									noValidate: !0,
									validated: r,
									children: [
										x.jsxs(Me.Group, {
											className: "mb-2",
											controlId: "firstName",
											children: [
												x.jsx(Me.Label, {
													children: "First Name",
												}),
												x.jsx(Me.Control, {
													required: !0,
													type: "text",
													maxLength: 40,
													name: "firstName",
													placeholder: "Leonhard",
												}),
												x.jsx(Me.Control.Feedback, {
													type: "invalid",
													children:
														"This field cannot be empty.",
												}),
											],
										}),
										x.jsxs(Me.Group, {
											className: "mb-2",
											controlId: "lastName",
											children: [
												x.jsx(Me.Label, {
													children: "Last Name",
												}),
												x.jsx(Me.Control, {
													required: !0,
													type: "text",
													maxLength: 60,
													name: "lastName",
													placeholder: "Euler",
												}),
												x.jsx(Me.Control.Feedback, {
													type: "invalid",
													children:
														"This field cannot be empty.",
												}),
											],
										}),
										x.jsxs(Me.Group, {
											className: "mb-2",
											controlId: "email",
											children: [
												x.jsx(Me.Label, {
													children:
														"Your Email Address",
												}),
												x.jsx(Me.Control, {
													required: !0,
													type: "email",
													maxLength: 100,
													name: "email",
													placeholder:
														"leonhard.euler@gmail.com",
												}),
												x.jsx(Me.Control.Feedback, {
													type: "invalid",
													children:
														"This is not a valid email address.",
												}),
											],
										}),
										x.jsxs(Me.Group, {
											className: "mb-2",
											controlId: "message",
											children: [
												x.jsx(Me.Label, {
													children: "Your Message",
												}),
												x.jsx(Me.Control, {
													required: !0,
													as: "textarea",
													rows: 3,
													name: "message",
													maxLength: 200,
													placeholder:
														"You got my identity wrong!",
													onChange: (s) =>
														n(
															s.target.value
																.length
														),
												}),
												x.jsx(Me.Control.Feedback, {
													type: "invalid",
													children:
														"Your message cannot be empty.",
												}),
												x.jsxs(Me.Label, {
													id: "charCount",
													className:
														"d-flex justify-content-end mb-0",
													children: [t, "/", 200],
												}),
											],
										}),
										x.jsx(ly, {
											className: "contact-btn",
											type: "submit",
											children: "Submit",
										}),
									],
								}),
							}),
						],
					}),
				],
			}),
		});
	},
	uk = () =>
		x.jsx("div", {
			className: "d-flex flex-column",
			children: x.jsx("div", {
				className: "mt-5",
				children: x.jsx(Ll, {
					title: "404 Page Not Found",
					children: x.jsx("span", {
						className: "home-text",
						children:
							"That page doesn't have a real solution. It must be imaginary.",
					}),
				}),
			}),
		}),
	ck = () => {
		const e = Wv();
		let { loginUser: t } = _.useContext(of);
		const [n, r] = _.useState(!1),
			[i, o] = _.useState("");
		let s = async (a) => {
			a.preventDefault();
			const c = a.currentTarget;
			if (c.checkValidity() === !1) a.stopPropagation();
			else
				return (
					(await t({
						username: c.username.value,
						password: c.password.value,
					}))
						? e("/")
						: o(
								"Login attempt was unsuccessful. Please try again."
						  ),
					!0
				);
			r(!0);
		};
		return x.jsx("div", {
			className: "d-flex flex-column",
			children: x.jsxs("div", {
				className: "mx-5 mb-5",
				children: [
					x.jsx("div", {
						className: "mt-5 mb-5",
						children: x.jsx(Ll, { title: "Login" }),
					}),
					x.jsx("div", {
						className:
							"d-flex flex-row justify-content-center mb-auto",
						children: x.jsxs(Me, {
							className: "message-form col-5 p-4",
							onSubmit: s,
							noValidate: !0,
							validated: n,
							children: [
								x.jsxs(Me.Group, {
									className: "mb-2",
									controlId: "username",
									children: [
										x.jsx(Me.Label, {
											children: "Username:",
										}),
										x.jsx(Me.Control, {
											required: !0,
											type: "username",
											minLength: 8,
											maxLength: 100,
											name: "username",
											placeholder: "leonhard.euler",
										}),
										x.jsx(Me.Control.Feedback, {
											type: "invalid",
											children:
												"This is not a valid username.",
										}),
									],
								}),
								x.jsxs(Me.Group, {
									className: "mb-2",
									controlId: "password",
									children: [
										x.jsx(Me.Label, {
											children: "Password:",
										}),
										x.jsx(Me.Control, {
											required: !0,
											type: "password",
											minLength: 6,
											maxLength: 100,
											name: "password",
											placeholder: "******",
										}),
										x.jsx(Me.Control.Feedback, {
											type: "invalid",
											children:
												"This is not a valid password.",
										}),
									],
								}),
								x.jsx(ly, {
									className: "contact-btn mb-2",
									type: "submit",
									children: "Submit",
								}),
								i &&
									x.jsx("p", {
										className: "form-error text-danger",
										children: i,
									}),
							],
						}),
					}),
				],
			}),
		});
	};
function dk() {
	return x.jsxs(x.Fragment, {
		children: [
			x.jsx(rk, {}),
			x.jsx("div", { id: "body", children: x.jsx(gE, {}) }),
			x.jsx(ik, {}),
		],
	});
}
const fk = SE([
	{
		element: x.jsx(nk, { children: x.jsx(dk, {}) }),
		children: [
			{ path: "/", element: x.jsx(lk, {}) },
			{ path: "/about-us", element: x.jsx(sk, {}) },
			{ path: "/contact", element: x.jsx(ak, {}) },
			{ path: "/login", element: x.jsx(ck, {}) },
			{ path: "*", element: x.jsx(uk, {}) },
		],
	},
]);
function hk() {
	return x.jsx(OE, { router: fk });
}
Fu.createRoot(document.getElementById("root")).render(
	x.jsx(En.StrictMode, { children: x.jsx(hk, {}) })
);
