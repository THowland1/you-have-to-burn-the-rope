// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iohiW":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "58b8b6a8968110bd";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"fiTDl":[function(require,module,exports) {
var _urlsJs = require("./js/urls.js");
const CACHE_NAME = 'version-0.1';
const OFFLINE_URL = 'index.html';
const assetUrls = Object.values(_urlsJs.ASSET_URLS);
self.addEventListener('install', function(event) {
    console.log('[ServiceWorker] Install');
    event.waitUntil((async ()=>{
        const cache = await caches.open(CACHE_NAME);
        // Setting {cache: 'reload'} in the new request will ensure that the response
        // isn't fulfilled from the HTTP cache; i.e., it will be from the network.
        await cache.add(new Request(OFFLINE_URL, {
            cache: 'reload'
        }));
        await cache.addAll(assetUrls);
    })());
    self.skipWaiting();
});
self.addEventListener('activate', (event)=>{
    console.log('[ServiceWorker] Activate');
    event.waitUntil((async ()=>{
        // Enable navigation preload if it's supported.
        // See https://developers.google.com/web/updates/2017/02/navigation-preload
        if ('navigationPreload' in self.registration) await self.registration.navigationPreload.enable();
    })());
    // Tell the active service worker to take control of the page immediately.
    self.clients.claim();
});
self.addEventListener('fetch', function(event) {
    // console.log('[Service Worker] Fetch', event.request.url);
    event.respondWith((async ()=>{
        const cachedResponse = await caches.match(event.request);
        console.log;
        return cachedResponse || fetch(event.request);
    })());
});

},{"./js/urls.js":"ki4j8"}],"ki4j8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ASSET_URLS", ()=>ASSET_URLS
);
const ASSET_URLS = {
    '../serviceworker.js': new URL(require("3c36f07cce4de438")),
    './index.js': new URL(require("308aaa700d9ac33f")),
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap': new URL(require("adad38975974dcd7")),
    '../audio/axe-throw.mp3': new URL(require("276eccf37794b08")),
    '../audio/boss-explosion.mp3': new URL(require("b475c8cab88c5336")),
    '../audio/boss-fight.mp3': new URL(require("4ad82c4e8be05464")),
    '../audio/death.mp3': new URL(require("ca8b1dae55606be9")),
    '../audio/door-slam.mp3': new URL(require("d9f1df6bcc3dc4ee")),
    '../audio/eye-laser.mp3': new URL(require("3ba879e52243017c")),
    '../audio/jump.mp3': new URL(require("ca43fe38a10d6b13")),
    '../audio/land.mp3': new URL(require("e18be15545078789")),
    '../audio/now-youre-a-hero.mp3': new URL(require("97b8d787b92b4c09")),
    '../audio/rope-explosion.mp3': new URL(require("5d020da195c20bf2")),
    '../audio/tunnel.mp3': new URL(require("b750a357c60df1b5")),
    '../img/axe_18x18.png': new URL(require("87247644b3a7a88a")),
    '../img/axe_999_64x64.svg': new URL(require("396b5b11e5c86fea")),
    '../img/back-door_32x64.png': new URL(require("fb9f2690d40a8bf9")),
    '../img/boss-attack_204x256.png': new URL(require("c65245d1ee827c71")),
    '../img/boss-die_192x256.png': new URL(require("42a72b7755c6498b")),
    '../img/boss-lookup_192x256.png': new URL(require("fde782d934ea79d3")),
    '../img/boss-move_204x256.png': new URL(require("48dbb5d316bd3988")),
    '../img/boss-still_204x256.png': new URL(require("e6ecf7be898d2b94")),
    '../img/chandelier_160x96.png': new URL(require("805595210ad79098")),
    '../img/credits-1_200x200.png': new URL(require("41920263ad6e2773")),
    '../img/credits-2_200x200.png': new URL(require("2e8ed2795a83ea16")),
    '../img/credits-3_200x200.png': new URL(require("579617441f5a8e6f")),
    '../img/credits-4_200x200.png': new URL(require("1ec052dc3afc3103")),
    '../img/credits-bg_704x512.png': new URL(require("1a89809d5ed07023")),
    '../img/explosion-1_36x36.png': new URL(require("1d5d4a24793eeb95")),
    '../img/explosion-2_36x36.png': new URL(require("c31caa2b2ccf5570")),
    '../img/explosion-3_36x36.png': new URL(require("1635172a4eed68a9")),
    '../img/explosion-4_36x36.png': new URL(require("e87fe54be77bdc4a")),
    '../img/explosion-5_36x36.png': new URL(require("243d99757e4dbaf6")),
    '../img/explosion-6_36x36.png': new URL(require("da219837b4e73c6a")),
    '../img/explosion-7_36x36.png': new URL(require("e3026c998b856249")),
    '../img/flame-sprites.png': new URL(require("cd5b90f58ea04ec6")),
    '../img/flame-1_28x28.png': new URL(require("6b12c379e459f5a0")),
    '../img/flame-2_28x28.png': new URL(require("be57e3f43ae4dbfc")),
    '../img/flame-3_28x28.png': new URL(require("d6d66d7261099ab")),
    '../img/info-circle_999_64x64.svg': new URL(require("f8ab4caabcf828eb")),
    '../img/laser-1_20x20.png': new URL(require("cb26072e90bd692d")),
    '../img/laser-2_20x20.png': new URL(require("e7da8aa9ff48c6c8")),
    '../img/laser-3_20x20.png': new URL(require("76b090dd0ea6d021")),
    '../img/laser-4_20x20.png': new URL(require("5b694e3994ab3a5a")),
    '../img/laser-5_20x20.png': new URL(require("7e9066c1d1279d67")),
    '../img/laser-6_20x20.png': new URL(require("f9af3119980a6329")),
    '../img/laser-7_20x20.png': new URL(require("dbbe02123dfdbca")),
    '../img/page-bg_32x32.png': new URL(require("c58df0bb569b9e32")),
    '../img/player-fall_30x36.png': new URL(require("7cfd066581934182")),
    '../img/player-hit_30x36.png': new URL(require("488d8d31375c1399")),
    '../img/player-jump_30x36.png': new URL(require("a294ccf09816f08f")),
    '../img/player-still_30x36.png': new URL(require("ef6bc6fd035318fb")),
    '../img/player-throw_30x36.png': new URL(require("cddd9b061f39a436")),
    '../img/player-walk-1_30x36.png': new URL(require("86a8c63c23fd4e3f")),
    '../img/player-walk-2_30x36.png': new URL(require("8d22c4e584b4e818")),
    '../img/player-walk-3_30x36.png': new URL(require("5e97299569052fb0")),
    '../img/plume-1_43x21.png': new URL(require("8a4a5b8124a869fa")),
    '../img/plume-2_43x21.png': new URL(require("c200f5e10f1c64f8")),
    '../img/plume-3_43x21.png': new URL(require("aebcdecc266054d0")),
    '../img/plume-4_43x21.png': new URL(require("8d67c17c93a32004")),
    '../img/plume-5_43x21.png': new URL(require("961acaa10c40a510")),
    '../img/plume-6_43x21.png': new URL(require("1ceb93fc27896ee2")),
    '../img/rope_8x192.png': new URL(require("c046d30d4a87e8dd")),
    '../img/stick_30x6.png': new URL(require("248a638bf4e0a107")),
    '../img/up-arrow_999_64x64.svg': new URL(require("d33d0c3e7412bca6")),
    '../img/volume-0_999_64x64.svg': new URL(require("ee865d0e87d56a6d")),
    '../img/volume-1_999_64x64.svg': new URL(require("3ed0256a573b1e54")),
    '../img/bg.png': new URL(require("8fe8bcf6ef889bc0")),
    '../img/rope.png': new URL(require("ba24449b1d4964c3"))
};

},{"3c36f07cce4de438":"ld6g2","308aaa700d9ac33f":"bxiGM","adad38975974dcd7":"eFyOJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","276eccf37794b08":"8G4cH","b475c8cab88c5336":"2wLy4","4ad82c4e8be05464":"jaEqy","ca8b1dae55606be9":"bJcna","d9f1df6bcc3dc4ee":"cOBx9","3ba879e52243017c":"5F5k6","ca43fe38a10d6b13":"6auCl","e18be15545078789":"ay6Yf","97b8d787b92b4c09":"6Z7FG","5d020da195c20bf2":"37Npb","b750a357c60df1b5":"esMJa","87247644b3a7a88a":"4qfhT","396b5b11e5c86fea":"7FfX0","fb9f2690d40a8bf9":"1D2VR","c65245d1ee827c71":"jZJ8y","42a72b7755c6498b":"kpuJ4","fde782d934ea79d3":"cQqtC","48dbb5d316bd3988":"68dFl","e6ecf7be898d2b94":"6ATE5","805595210ad79098":"bcVz0","41920263ad6e2773":"lpubY","2e8ed2795a83ea16":"lNwyT","579617441f5a8e6f":"j46sC","1ec052dc3afc3103":"fvrwX","1a89809d5ed07023":"7ly1I","1d5d4a24793eeb95":"lVCnp","c31caa2b2ccf5570":"56jTQ","1635172a4eed68a9":"7F1ag","e87fe54be77bdc4a":"flsAs","243d99757e4dbaf6":"iQ139","da219837b4e73c6a":"cNqEB","e3026c998b856249":"fR06x","cd5b90f58ea04ec6":"75ONh","6b12c379e459f5a0":"afajq","be57e3f43ae4dbfc":"PIWQy","d6d66d7261099ab":"a2pgN","f8ab4caabcf828eb":"6ADP5","cb26072e90bd692d":"eKAVb","e7da8aa9ff48c6c8":"9EPnV","76b090dd0ea6d021":"3iuk1","5b694e3994ab3a5a":"6jWfz","7e9066c1d1279d67":"3VuW6","f9af3119980a6329":"kR70m","dbbe02123dfdbca":"5WU6w","c58df0bb569b9e32":"7R5mF","7cfd066581934182":"1TtBE","488d8d31375c1399":"2MHMB","a294ccf09816f08f":"gt2mk","ef6bc6fd035318fb":"94bmi","cddd9b061f39a436":"8U28w","86a8c63c23fd4e3f":"crOGG","8d22c4e584b4e818":"2sMLW","5e97299569052fb0":"agWu4","8a4a5b8124a869fa":"kAzoh","c200f5e10f1c64f8":"7MrLw","aebcdecc266054d0":"jem1m","8d67c17c93a32004":"a5Fzf","961acaa10c40a510":"3Y8uZ","1ceb93fc27896ee2":"lmR9V","c046d30d4a87e8dd":"d1gIV","248a638bf4e0a107":"5DrDO","d33d0c3e7412bca6":"nlcIK","ee865d0e87d56a6d":"fxYTD","3ed0256a573b1e54":"C71mP","8fe8bcf6ef889bc0":"1RGW7","ba24449b1d4964c3":"2nr7z"}],"ld6g2":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "serviceworker.968110bd.js" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"bxiGM":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "yhtbtr.3542e8cb.js" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"eFyOJ":[function(require,module,exports) {
module.exports = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"8G4cH":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "axe-throw.19644f0b.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"2wLy4":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "boss-explosion.8d9a9616.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"jaEqy":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "boss-fight.5c4ea7da.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"bJcna":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "death.3b262421.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"cOBx9":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "door-slam.28921a26.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"5F5k6":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "eye-laser.9344eca2.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6auCl":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "jump.b63de5dd.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"ay6Yf":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "land.ca0e75c7.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6Z7FG":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "now-youre-a-hero.3c44a24a.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"37Npb":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "rope-explosion.f840ef73.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"esMJa":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "tunnel.ebe09e95.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"4qfhT":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "axe_18x18.fcdf3570.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"7FfX0":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "axe_999_64x64.099a5152.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"1D2VR":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "back-door_32x64.7a09db5e.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"jZJ8y":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "boss-attack_204x256.bcdcdfd7.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"kpuJ4":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "boss-die_192x256.6c158fec.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"cQqtC":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "boss-lookup_192x256.9a6acfc8.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"68dFl":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "boss-move_204x256.080c3954.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6ATE5":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "boss-still_204x256.4921a578.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"bcVz0":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "chandelier_160x96.dd8ddea5.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lpubY":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "credits-1_200x200.92006a72.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lNwyT":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "credits-2_200x200.cf3cd7ca.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"j46sC":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "credits-3_200x200.7e245838.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"fvrwX":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "credits-4_200x200.5899dcb1.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"7ly1I":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "credits-bg_704x512.1658d947.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lVCnp":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "explosion-1_36x36.7b1a0e48.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"56jTQ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "explosion-2_36x36.579838ec.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"7F1ag":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "explosion-3_36x36.9891171f.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"flsAs":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "explosion-4_36x36.3547290d.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"iQ139":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "explosion-5_36x36.ab5d876f.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"cNqEB":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "explosion-6_36x36.51bf4011.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"fR06x":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "explosion-7_36x36.0264933b.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"75ONh":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "flame-sprites.f91fe31a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"afajq":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "flame-1_28x28.3249f52f.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"PIWQy":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "flame-2_28x28.840ce506.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"a2pgN":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "flame-3_28x28.fbe9e0aa.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6ADP5":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "info-circle_999_64x64.77d50b73.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"eKAVb":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "laser-1_20x20.2aca8a4c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"9EPnV":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "laser-2_20x20.0e2f2874.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"3iuk1":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "laser-3_20x20.c66db600.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6jWfz":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "laser-4_20x20.28267968.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"3VuW6":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "laser-5_20x20.c09879b7.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"kR70m":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "laser-6_20x20.1b42d5a7.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"5WU6w":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "laser-7_20x20.143a3c1d.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"7R5mF":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "page-bg_32x32.79edeaeb.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"1TtBE":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "player-fall_30x36.f6a65da8.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"2MHMB":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "player-hit_30x36.6fa2c063.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"gt2mk":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "player-jump_30x36.4ae24b1c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"94bmi":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "player-still_30x36.70e3cb1c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"8U28w":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "player-throw_30x36.271ee8d0.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"crOGG":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "player-walk-1_30x36.634aa84e.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"2sMLW":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "player-walk-2_30x36.e47fb20e.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"agWu4":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "player-walk-3_30x36.2dd7f43a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"kAzoh":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "plume-1_43x21.a62df3fb.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"7MrLw":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "plume-2_43x21.34a58c38.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"jem1m":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "plume-3_43x21.b02289c3.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"a5Fzf":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "plume-4_43x21.b3d68f96.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"3Y8uZ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "plume-5_43x21.fd37d6ec.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lmR9V":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "plume-6_43x21.bc80017a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"d1gIV":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "rope_8x192.b79637bf.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"5DrDO":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "stick_30x6.684425d4.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"nlcIK":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "up-arrow_999_64x64.d68cd5b8.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"fxYTD":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "volume-0_999_64x64.7e4bfc2d.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"C71mP":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "volume-1_999_64x64.81168351.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"1RGW7":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "bg.6c772103.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"2nr7z":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7CghF') + "rope.442217df.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}]},["iohiW","fiTDl"], "fiTDl", "parcelRequiref536")

//# sourceMappingURL=serviceworker.968110bd.js.map
