gsap.registerPlugin(ScrollTrigger);

!(function (D, u) {
  "object" == typeof exports && "undefined" != typeof module
    ? u(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], u)
    : u(((D = D || self).window = D.window || {}));
})(this, function (e) {
  "use strict";
  var v = "";

  function m() {
    return String.fromCharCode.apply(null, arguments);
  }

  function p(D) {
    return F.getComputedStyle(D);
  }

  function s(D, u) {
    var e;
    return l(D)
      ? D
      : "string" == (e = typeof D) && !u && D
      ? d.call(Q.querySelectorAll(D), 0)
      : D && "object" == e && "length" in D
      ? d.call(D, 0)
      : D
      ? [D]
      : [];
  }

  function t(D) {
    return "absolute" === D.position || !0 === D.absolute;
  }

  function u(D, u) {
    for (var e, t = u.length; -1 < --t; )
      if (((e = u[t]), D.substr(0, e.length) === e)) return e.length;
  }

  function w(D, u) {
    void 0 === D && (D = "");
    var e = ~D.indexOf("++"),
      t = 1;
    return (
      e && (D = D.split("++").join("")),
      function () {
        return (
          "<" +
          u +
          " style='position:relative;display:inline-block;'" +
          (D ? " class='" + D + (e ? t++ : "") + "'>" : ">")
        );
      }
    );
  }

  function x(D, u, e) {
    var t = D.nodeType;
    if (1 === t || 9 === t || 11 === t)
      for (D = D.firstChild; D; D = D.nextSibling) x(D, u, e);
    else (3 !== t && 4 !== t) || (D.nodeValue = D.nodeValue.split(u).join(e));
  }

  function y(D, u) {
    for (var e = u.length; -1 < --e; ) D.push(u[e]);
  }

  function z(D, u, e) {
    for (var t; D && D !== u; ) {
      if ((t = D._next || D.nextSibling)) return t.textContent.charAt(0) === e;
      D = D.parentNode || D._parent;
    }
  }

  function A(D) {
    var u,
      e,
      t = s(D.childNodes),
      F = t.length;
    for (u = 0; u < F; u++)
      (e = t[u])._isSplit
        ? A(e)
        : (u && 3 === e.previousSibling.nodeType
            ? (e.previousSibling.nodeValue +=
                3 === e.nodeType ? e.nodeValue : e.firstChild.nodeValue)
            : 3 !== e.nodeType && D.insertBefore(e.firstChild, e),
          D.removeChild(e));
  }

  function B(D, u) {
    return parseFloat(u[D]) || 0;
  }

  function C(D, u, e, F, C, i, n) {
    var E,
      s,
      r,
      o,
      l,
      d,
      a,
      h,
      f,
      c,
      g,
      m,
      v = p(D),
      w = B("paddingLeft", v),
      S = -999,
      b = B("borderBottomWidth", v) + B("borderTopWidth", v),
      _ = B("borderLeftWidth", v) + B("borderRightWidth", v),
      T = B("paddingTop", v) + B("paddingBottom", v),
      N = B("paddingLeft", v) + B("paddingRight", v),
      L = 0.2 * B("fontSize", v),
      O = v.textAlign,
      W = [],
      H = [],
      V = [],
      j = u.wordDelimiter || " ",
      M = u.tag ? u.tag : u.span ? "span" : "div",
      R = u.type || u.split || "chars,words,lines",
      k = C && ~R.indexOf("lines") ? [] : null,
      P = ~R.indexOf("words"),
      q = ~R.indexOf("chars"),
      G = t(u),
      I = u.linesClass,
      J = ~(I || "").indexOf("++"),
      K = [];
    for (
      J && (I = I.split("++").join("")),
        r = (s = D.getElementsByTagName("*")).length,
        l = [],
        E = 0;
      E < r;
      E++
    )
      l[E] = s[E];
    if (k || G)
      for (E = 0; E < r; E++)
        ((d = (o = l[E]).parentNode === D) || G || (q && !P)) &&
          ((m = o.offsetTop),
          k &&
            d &&
            Math.abs(m - S) > L &&
            ("BR" !== o.nodeName || 0 === E) &&
            ((a = []), k.push(a), (S = m)),
          G &&
            ((o._x = o.offsetLeft),
            (o._y = m),
            (o._w = o.offsetWidth),
            (o._h = o.offsetHeight)),
          k &&
            (((o._isSplit && d) ||
              (!q && d) ||
              (P && d) ||
              (!P &&
                o.parentNode.parentNode === D &&
                !o.parentNode._isSplit)) &&
              (a.push(o), (o._x -= w), z(o, D, j) && (o._wordEnd = !0)),
            "BR" === o.nodeName &&
              ((o.nextSibling && "BR" === o.nextSibling.nodeName) || 0 === E) &&
              k.push([])));
    for (E = 0; E < r; E++)
      (d = (o = l[E]).parentNode === D),
        "BR" !== o.nodeName
          ? (G &&
              ((f = o.style),
              P || d || ((o._x += o.parentNode._x), (o._y += o.parentNode._y)),
              (f.left = o._x + "px"),
              (f.top = o._y + "px"),
              (f.position = "absolute"),
              (f.display = "block"),
              (f.width = o._w + 1 + "px"),
              (f.height = o._h + "px")),
            !P && q
              ? o._isSplit
                ? ((o._next = o.nextSibling), o.parentNode.appendChild(o))
                : o.parentNode._isSplit
                ? ((o._parent = o.parentNode),
                  !o.previousSibling &&
                    o.firstChild &&
                    (o.firstChild._isFirst = !0),
                  o.nextSibling &&
                    " " === o.nextSibling.textContent &&
                    !o.nextSibling.nextSibling &&
                    K.push(o.nextSibling),
                  (o._next =
                    o.nextSibling && o.nextSibling._isFirst
                      ? null
                      : o.nextSibling),
                  o.parentNode.removeChild(o),
                  l.splice(E--, 1),
                  r--)
                : d ||
                  ((m = !o.nextSibling && z(o.parentNode, D, j)),
                  o.parentNode._parent && o.parentNode._parent.appendChild(o),
                  m && o.parentNode.appendChild(Q.createTextNode(" ")),
                  "span" === M && (o.style.display = "inline"),
                  W.push(o))
              : o.parentNode._isSplit && !o._isSplit && "" !== o.innerHTML
              ? H.push(o)
              : q &&
                !o._isSplit &&
                ("span" === M && (o.style.display = "inline"), W.push(o)))
          : k || G
          ? (o.parentNode && o.parentNode.removeChild(o), l.splice(E--, 1), r--)
          : P || D.appendChild(o);
    for (E = K.length; -1 < --E; ) K[E].parentNode.removeChild(K[E]);
    if (k) {
      for (
        G &&
          ((c = Q.createElement(M)),
          D.appendChild(c),
          (g = c.offsetWidth + "px"),
          (m = c.offsetParent === D ? 0 : D.offsetLeft),
          D.removeChild(c)),
          f = D.style.cssText,
          D.style.cssText = "display:none;";
        D.firstChild;

      )
        D.removeChild(D.firstChild);
      for (h = " " === j && (!G || (!P && !q)), E = 0; E < k.length; E++) {
        for (
          a = k[E],
            (c = Q.createElement(M)).style.cssText =
              "display:block;text-align:" +
              O +
              ";position:" +
              (G ? "absolute;" : "relative;"),
            I && (c.className = I + (J ? E + 1 : "")),
            V.push(c),
            r = a.length,
            s = 0;
          s < r;
          s++
        )
          "BR" !== a[s].nodeName &&
            ((o = a[s]),
            c.appendChild(o),
            h && o._wordEnd && c.appendChild(Q.createTextNode(" ")),
            G &&
              (0 === s &&
                ((c.style.top = o._y + "px"), (c.style.left = w + m + "px")),
              (o.style.top = "0px"),
              m && (o.style.left = o._x - m + "px")));
        0 === r
          ? (c.innerHTML = "&nbsp;")
          : P || q || (A(c), x(c, String.fromCharCode(160), " ")),
          G && ((c.style.width = g), (c.style.height = o._h + "px")),
          D.appendChild(c);
      }
      D.style.cssText = f;
    }
    G &&
      (n > D.clientHeight &&
        ((D.style.height = n - T + "px"),
        D.clientHeight < n && (D.style.height = n + b + "px")),
      i > D.clientWidth &&
        ((D.style.width = i - N + "px"),
        D.clientWidth < i && (D.style.width = i + _ + "px"))),
      y(e, W),
      P && y(F, H),
      y(C, V);
  }

  function D(D, e, F, C) {
    var i,
      n,
      E,
      s,
      r,
      o,
      l,
      d,
      a = e.tag ? e.tag : e.span ? "span" : "div",
      p = ~(e.type || e.split || "chars,words,lines").indexOf("chars"),
      h = t(e),
      B = e.wordDelimiter || " ",
      f = " " !== B ? "" : h ? "&#173; " : " ",
      A = "</" + a + ">",
      c = 1,
      g = e.specialChars
        ? "function" == typeof e.specialChars
          ? e.specialChars
          : u
        : null,
      y = Q.createElement("div"),
      m = D.parentNode;
    for (
      m.insertBefore(y, D),
        y.textContent = D.nodeValue,
        m.removeChild(D),
        l =
          -1 !==
          (i = (function getText(D) {
            var u = D.nodeType,
              e = "";
            if (1 === u || 9 === u || 11 === u) {
              if ("string" == typeof D.textContent) return D.textContent;
              for (D = D.firstChild; D; D = D.nextSibling) e += getText(D);
            } else if (3 === u || 4 === u) return D.nodeValue;
            return e;
          })(
            /*!
             * SplitText: 3.0.0
             * https://greensock.com
             *
             * @license Copyright 2008-2019, GreenSock. All rights reserved.
             * Subject to the terms at https://greensock.com/standard-license or for
             * Club GreenSock members, the agreement issued with that membership.
             * @author: Jack Doyle, jack@greensock.com
             */
            (D = y)
          )).indexOf("<"),
        !1 !== e.reduceWhiteSpace && (i = i.replace(b, " ").replace(S, "")),
        l && (i = i.split("<").join("{{LT}}")),
        r = i.length,
        n = (" " === i.charAt(0) ? f : "") + F(),
        E = 0;
      E < r;
      E++
    )
      if (((o = i.charAt(E)), g && (d = g(i.substr(E), e.specialChars))))
        (o = i.substr(E, d || 1)),
          (n += p && " " !== o ? C() + o + "</" + a + ">" : o),
          (E += d - 1);
      else if (o === B && i.charAt(E - 1) !== B && E) {
        for (n += c ? A : "", c = 0; i.charAt(E + 1) === B; ) (n += f), E++;
        E === r - 1
          ? (n += f)
          : ")" !== i.charAt(E + 1) && ((n += f + F()), (c = 1));
      } else
        "{" === o && "{{LT}}" === i.substr(E, 6)
          ? ((n += p ? C() + "{{LT}}</" + a + ">" : "{{LT}}"), (E += 5))
          : (55296 <= o.charCodeAt(0) && o.charCodeAt(0) <= 56319) ||
            (65024 <= i.charCodeAt(E + 1) && i.charCodeAt(E + 1) <= 65039)
          ? ((s = ((i.substr(E, 12).split(v) || [])[1] || "").length || 2),
            (n +=
              p && " " !== o
                ? C() + i.substr(E, s) + "</" + a + ">"
                : i.substr(E, s)),
            (E += s - 1))
          : (n += p && " " !== o ? C() + o + "</" + a + ">" : o);
    (D.outerHTML = n + (c ? A : "")), l && x(m, "{{LT}}", "<");
  }

  function E(u, e, F, C) {
    var i,
      n,
      r = s(u.childNodes),
      o = r.length,
      l = t(e);
    if (3 !== u.nodeType || 1 < o) {
      for (e.absolute = !1, i = 0; i < o; i++)
        (3 === (n = r[i]).nodeType && !/\S+/.test(n.nodeValue)) ||
          (l &&
            3 !== n.nodeType &&
            "inline" === p(n).display &&
            ((n.style.display = "inline-block"),
            (n.style.position = "relative")),
          (n._isSplit = !0),
          E(n, e, F, C));
      return (e.absolute = l), void (u._isSplit = !0);
    }
    D(u, e, F, C);
  }
  var Q,
    F,
    i,
    S = /(?:\r|\n|\t\t)/g,
    b = /(?:\s\s+)/g,
    n = "SplitText",
    r = m(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
    o = true,
    l = Array.isArray,
    d = [].slice,
    a = (function () {
      function SplitText(D, u) {
        i ||
          (function _initCore() {
            (Q = document), (F = window), (i = 1);
          })(),
          (this.elements = s(D)),
          (this.chars = []),
          (this.words = []),
          (this.lines = []),
          (this._originals = []),
          (this.vars = u || {}),
          o && this.split(u);
      }
      var D = SplitText.prototype;
      return (
        (D.split = function split(D) {
          this.isSplit && this.revert(),
            (this.vars = D = D || this.vars),
            (this._originals.length =
              this.chars.length =
              this.words.length =
              this.lines.length =
                0);
          for (
            var u,
              e,
              t,
              F = this.elements.length,
              i = D.tag ? D.tag : D.span ? "span" : "div",
              n = w(D.wordsClass, i),
              s = w(D.charsClass, i);
            -1 < --F;

          )
            (t = this.elements[F]),
              (this._originals[F] = t.innerHTML),
              (u = t.clientHeight),
              (e = t.clientWidth),
              E(t, D, n, s),
              C(t, D, this.chars, this.words, this.lines, e, u);
          return (
            this.chars.reverse(),
            this.words.reverse(),
            this.lines.reverse(),
            (this.isSplit = !0),
            this
          );
        }),
        (D.revert = function revert() {
          var e = this._originals;
          if (!e) throw "revert() call wasn't scoped properly.";
          return (
            this.elements.forEach(function (D, u) {
              return (D.innerHTML = e[u]);
            }),
            (this.chars = []),
            (this.words = []),
            (this.lines = []),
            (this.isSplit = !1),
            this
          );
        }),
        (SplitText.create = function create(D, u) {
          return new SplitText(D, u);
        }),
        SplitText
      );
    })();
  (a.version = "3.0.0"),
    (e.SplitText = a),
    (e.default = a),
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
});

const API = "http://worldtimeapi.org/api/timezone/Africa/Tunis";
const select = (e) => document.querySelector(e);
const hourEl = document.querySelector(".hour");
const logo = document.querySelectorAll("#logo");
const toppath = document.querySelector(" svg .path2");
const pageEl = document.querySelector("#viewport");

//! ******************************************************  Initialising smoothscroll ****************************************
let bool = true;

const mediaQuery = window.matchMedia("(min-width: 768px)");
// // Check if the media query is true

if (mediaQuery.matches) {
  bool = false;

  const asscroll = new ASScroll({
    disableRaf: true,
  });
  window.addEventListener("load", () => {
    setTimeout(() => {
      asscroll.enable();

      document.querySelector(".top").addEventListener("click", () => {
        asscroll.currentPos = 0;
        console.log("clicked");
      });
    }, 50);
  });
  gsap.ticker.add(asscroll.update);
  ScrollTrigger.defaults({
    scroller: asscroll.containerElement,
  });
  ScrollTrigger.scrollerProxy(asscroll.containerElement, {
    scrollTop(value) {
      return arguments.length
        ? (asscroll.currentPos = value)
        : asscroll.currentPos;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });
  asscroll.on("update", ScrollTrigger.update);
  ScrollTrigger.addEventListener("refresh", asscroll.resize);
}
//! **********************************************************  Fetching current time **************************************************
let currentDate = new Date();
let hours =
  currentDate.getHours() < 10
    ? `0${currentDate.getHours()}`
    : currentDate.getHours();
let minutes =
  currentDate.getMinutes() < 10
    ? `0${currentDate.getMinutes()}`
    : currentDate.getMinutes();
let time = hours + ":" + minutes;
setInterval(() => {
  hourEl.innerText = `${time}`;
}, 1000);

//! ******************************************************************** Dark Mode ********************************************************
const toggleBtn = document.querySelector(".hamburger");
let dark = true;
let savedTheme = JSON.parse(localStorage.getItem("theme"));
savedTheme === "light" ? handleTheme() : "";
function handleTheme() {
  document.body.classList.toggle("lightmode");
  logo.forEach((logo) => {
    logo.classList.toggle("blacklogo");
  });
  dark = !dark;
}
toggleBtn.addEventListener("click", () => {
  handleTheme();
  dark
    ? localStorage.setItem("theme", JSON.stringify("dark"))
    : localStorage.setItem("theme", JSON.stringify("light"));
});

// ! ***********************************************************************  Animations **************************************************

window.addEventListener("load", () => {
  const mySpan = document.querySelector(".letters");
  const textWrapper = document.querySelector(".letters").textContent;
  const paragraphs = document.querySelectorAll(".two p");
  let myString = " ";
  let myarray = textWrapper.split(" ");
  myarray.forEach((el) => {
    myString =
      myString +
      `<span class="m7"><span class="word">\u00A0${el}</span></span>`;
  });
  mySpan.innerHTML = myString;
  gsap.set(".letters", { autoAlpha: 1 });
  gsap.from(".word", 1.2, {
    opacity: 0.7,
    rotation: "8deg",
    y: 150,
    ease: Expo.easeOut,
    stagger: 0.04,
  });
  gsap.to(".herosvg", 0.3, { autoAlpha: 1, delay: 1.2 });
  gsap.set(".two .big img", { autoAlpha: 1 });
  gsap.from(".two .big ", 1, {
    y: ` ${bool ? "20" : "50"} `,
    delay: ` ${bool ? "1" : "2"} `,
  });
  gsap.set(".two .small img", { autoAlpha: 1 });
  gsap.from(".two .small ", 1, {
    y: ` ${bool ? "20" : "50"} `,
    delay: ` ${bool ? "1" : "2"} `,
  });
  gsap.from(".two .small img", 2, {
    opacity: 0,
    scale: 1.2,
    ease: Expo.easeOut,
    delay: ` ${bool ? "1" : "2"} `,
  });
  gsap.to(paragraphs, 0.3, { autoAlpha: 1, delay: 2 });
  gsap.from(".fivetitle h1 p", {
    opacity: 0,
    y: ` ${bool ? "20" : "70"} `,
    duration: ` ${bool ? "1.5" : "1.3"} `,
    stagger: 0.1,
    ease: Expo.easeOut,
    scrollTrigger: {
      trigger: ".five",
      start: "top-=100 bottom-=200",
      markers: false,
    },
  });
  gsap.set("#firstdivider", { transformOrigin: "0%" });
  gsap.from("#firstdivider", {
    width: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#firstdivider",
      start: "top bottom-=200",
      // markers: false,
    },
  });
  gsap.from("#lastdivider", {
    width: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#lastdivider",
      start: "top-=200 bottom-=200",
      // markers: false,
    },
  });

  // ! ************************************************************  Desktop *********************************************************
  if (!bool) {
    toppath.addEventListener("mouseenter", () => {
      gsap.to(toppath, 0.5, {
        rotate: 20,
        transformOrigin: "50% 50%",
      });
    });
    toppath.addEventListener("mouseout", () => {
      gsap.to(toppath, 0.5, {
        rotate: 0,
        transformOrigin: "50% 50%",
      });
    });
    const text = document.querySelector(".fourtext .split");
    const splittedText = new SplitText(text, {
      type: "lines",
      linesClass: "lineChildren",
    });
    const splitParent = new SplitText(text, {
      type: "lines",
      linesClass: "lineParent",
    });
    const text2 = document.querySelector(".five .par .split");
    const splittedText2 = new SplitText(text2, {
      type: "lines",
      linesClass: "lineChildren",
    });
    const splitParent2 = new SplitText(text2, {
      type: "lines",
      linesClass: "lineParent",
    });
    console.log(splittedText2);
    gsap.to(splittedText.lines, {
      y: `0`,
      duration: 0.8,
      stagger: 0.07,
      ease: Expo.easeOut,
      scrollTrigger: {
        trigger: ".fourtext",
        start: "top bottom-=200",
      },
    });
    gsap.to(splittedText2.lines, {
      y: `0`,
      duration: 0.8,
      stagger: 0.07,
      ease: Expo.easeOut,
      scrollTrigger: {
        trigger: ".five .par",
        start: "top bottom-=200",
      },
    });
    gsap.from(".two .big img", 2, {
      opacity: 0,
      scale: 1.2,
      ease: Expo.easeOut,
      delay: ` 2 `,
    });
    gsap.from(".six  h1 p", {
      opacity: 0,
      y: `70 `,
      duration: 1.3,
      stagger: 0.1,
      ease: Expo.easeOut,
      scrollTrigger: {
        trigger: ".six .par",
        start: "top bottom-=200",
      },
    });
  }
  // ! ************************************************************  Mobile ***************************************************************
  else {
    gsap.from(".six  h1 p", {
      opacity: 0,
      y: `10 `,
      duration: 1.3,
      stagger: 0.1,
      ease: Expo.easeOut,
      scrollTrigger: {
        trigger: ".six",
        start: "center+=500 bottom-=200",
        markers: false,
      },
    });
    gsap.from(".two .big img", 2, {
      opacity: 0,
      scale: 1.2,
      ease: Expo.easeOut,
      delay: `1`,
    });
  }
});
