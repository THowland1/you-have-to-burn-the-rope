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
})({"2yfts":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "9398ecbc6a8b1a75";
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

},{}],"cOSRm":[function(require,module,exports) {
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

},{"./js/urls.js":"cJeMZ"}],"cJeMZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ASSET_URLS", ()=>ASSET_URLS
);
const ASSET_URLS = {
    '../serviceworker.js': new URL(require("5e29055134cf728e")),
    './index.js': new URL(require("cb06cd8dfb1f6b86")),
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap': new URL(require("14051505ab82d018")),
    '../sounds/axe-throw.mp3': new URL(require("72346e65da1a3b4a")),
    '../sounds/boss-explosion.mp3': new URL(require("c315bb0fb01bbe57")),
    '../sounds/boss-fight.mp3': new URL(require("dfa673022b08cd1e")),
    '../sounds/death.mp3': new URL(require("5217c402b8d980ad")),
    '../sounds/door-slam.mp3': new URL(require("bad73e8fd4d18f0")),
    '../sounds/eye-laser.mp3': new URL(require("79aef5c37c4884d6")),
    '../sounds/jump.mp3': new URL(require("ed80f316305bec25")),
    '../sounds/land.mp3': new URL(require("f965ab77eb56b976")),
    '../sounds/now-youre-a-hero.mp3': new URL(require("6d2316825c27d88e")),
    '../sounds/rope-explosion.mp3': new URL(require("aa4ac57ba8abbde4")),
    '../sounds/tunnel.mp3': new URL(require("39e4690785d9e6b7")),
    '../sprites/axe_18x18.png': new URL(require("e25ca4c15d530666")),
    '../sprites/axe_999_64x64.svg': new URL(require("226e692ed5ed08d8")),
    '../sprites/back-door_32x64.png': new URL(require("bffb3bf61e5598bf")),
    '../sprites/boss-attack_204x256.png': new URL(require("cd666ff7bfd307c9")),
    '../sprites/boss-die_192x256.png': new URL(require("cda314662884549d")),
    '../sprites/boss-lookup_192x256.png': new URL(require("7bb52930141fa4c8")),
    '../sprites/boss-move_204x256.png': new URL(require("4122067cd53045fb")),
    '../sprites/boss-still_204x256.png': new URL(require("49dcfc25192540d2")),
    '../sprites/chandelier_160x96.png': new URL(require("373fe718a772a5d")),
    '../sprites/credits-1_200x200.png': new URL(require("a6e036d2a8cb8b97")),
    '../sprites/credits-2_200x200.png': new URL(require("86b4a4b70c1f4e8f")),
    '../sprites/credits-3_200x200.png': new URL(require("e80d7327ba09c4e7")),
    '../sprites/credits-4_200x200.png': new URL(require("a218a2cd7b8237f1")),
    '../sprites/credits-bg_704x512.png': new URL(require("f538cda93e5e505b")),
    '../sprites/explosion-1_36x36.png': new URL(require("b8fbce8ded11c530")),
    '../sprites/explosion-2_36x36.png': new URL(require("3f5a1fe7bc226db6")),
    '../sprites/explosion-3_36x36.png': new URL(require("d7bd9dd9319b272a")),
    '../sprites/explosion-4_36x36.png': new URL(require("4b6052bd007ae687")),
    '../sprites/explosion-5_36x36.png': new URL(require("fa4fa1258801c790")),
    '../sprites/explosion-6_36x36.png': new URL(require("47f11608baa9a9b9")),
    '../sprites/explosion-7_36x36.png': new URL(require("2f6dd958b5eac1d9")),
    '../sprites/flame-sprites.png': new URL(require("3f38a386c47b05b0")),
    '../sprites/flame-1_28x28.png': new URL(require("d08db23e33335a80")),
    '../sprites/flame-2_28x28.png': new URL(require("817d6cbe68df9e8a")),
    '../sprites/flame-3_28x28.png': new URL(require("a451b2c5fabcc2f2")),
    '../sprites/info-circle_999_64x64.svg': new URL(require("d0c63ad5f0daa197")),
    '../sprites/laser-1_20x20.png': new URL(require("8ded7f16183331e0")),
    '../sprites/laser-2_20x20.png': new URL(require("1fc5c97170736d5e")),
    '../sprites/laser-3_20x20.png': new URL(require("728e07e032723cfd")),
    '../sprites/laser-4_20x20.png': new URL(require("20d091adcda6bfa2")),
    '../sprites/laser-5_20x20.png': new URL(require("4ec585b0a81cdb6c")),
    '../sprites/laser-6_20x20.png': new URL(require("a24fa691472fb103")),
    '../sprites/laser-7_20x20.png': new URL(require("fc30e16686cb571")),
    '../sprites/page-bg_32x32.png': new URL(require("6f2af5199b1885f")),
    '../sprites/player-fall_30x36.png': new URL(require("e372ba4ec6859c81")),
    '../sprites/player-hit_30x36.png': new URL(require("4d3c600875371924")),
    '../sprites/player-jump_30x36.png': new URL(require("c50a94a855aa6bed")),
    '../sprites/player-still_30x36.png': new URL(require("e96fb801a30e0bf8")),
    '../sprites/player-throw_30x36.png': new URL(require("8d91a93242884f1a")),
    '../sprites/player-walk-1_30x36.png': new URL(require("c1961420b84d5a0b")),
    '../sprites/player-walk-2_30x36.png': new URL(require("235cdd0cbc114180")),
    '../sprites/player-walk-3_30x36.png': new URL(require("fbe37286818a3ed9")),
    '../sprites/plume-1_43x21.png': new URL(require("2c1137990ecbd5b")),
    '../sprites/plume-2_43x21.png': new URL(require("185e534bd2df7320")),
    '../sprites/plume-3_43x21.png': new URL(require("409aa6367b1d3a1e")),
    '../sprites/plume-4_43x21.png': new URL(require("74687a065e145f16")),
    '../sprites/plume-5_43x21.png': new URL(require("564e3d85b961c7a0")),
    '../sprites/plume-6_43x21.png': new URL(require("a98ad6de15af377c")),
    '../sprites/rope_8x192.png': new URL(require("e0bceaf8a624eb80")),
    '../sprites/stick_30x6.png': new URL(require("4225d4ecbc686a0a")),
    '../sprites/up-arrow_999_64x64.svg': new URL(require("50e5bdcd1b4a23d6")),
    '../sprites/volume-0_999_64x64.svg': new URL(require("a7b4a144fb4e169")),
    '../sprites/volume-1_999_64x64.svg': new URL(require("54b9dd92ebe1b35e")),
    '../sprites/bg.png': new URL(require("9c45708c617a256a")),
    '../sprites/rope.png': new URL(require("430f7406c999d8a9"))
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","5e29055134cf728e":"2mOp8","cb06cd8dfb1f6b86":"beqb2","14051505ab82d018":"eFyOJ","72346e65da1a3b4a":"jmEIT","c315bb0fb01bbe57":"dA6hN","dfa673022b08cd1e":"cAgYF","5217c402b8d980ad":"2XIbp","bad73e8fd4d18f0":"cFKIM","79aef5c37c4884d6":"1oOz7","ed80f316305bec25":"8JSzf","f965ab77eb56b976":"k7jIA","6d2316825c27d88e":"b2Xqi","aa4ac57ba8abbde4":"cCYtB","39e4690785d9e6b7":"jnrdV","e25ca4c15d530666":"901Xc","226e692ed5ed08d8":"cMvW9","bffb3bf61e5598bf":"9VZDy","cd666ff7bfd307c9":"81wN7","cda314662884549d":"19yiI","7bb52930141fa4c8":"1nI0a","4122067cd53045fb":"j34ZM","49dcfc25192540d2":"dUkPx","373fe718a772a5d":"gZP7o","a6e036d2a8cb8b97":"ko8DN","86b4a4b70c1f4e8f":"6cYde","e80d7327ba09c4e7":"cvND1","a218a2cd7b8237f1":"eK8SO","f538cda93e5e505b":"7cjE5","b8fbce8ded11c530":"5DDjU","3f5a1fe7bc226db6":"hNLeT","d7bd9dd9319b272a":"lsrDw","4b6052bd007ae687":"67Ecx","fa4fa1258801c790":"54uYU","47f11608baa9a9b9":"eDCv9","2f6dd958b5eac1d9":"lhXU7","3f38a386c47b05b0":"f0ZuU","d08db23e33335a80":"bkVU1","817d6cbe68df9e8a":"dJfxr","a451b2c5fabcc2f2":"2cPCU","d0c63ad5f0daa197":"7DP2o","8ded7f16183331e0":"dejD3","1fc5c97170736d5e":"4vmi4","728e07e032723cfd":"hOENt","20d091adcda6bfa2":"iVusF","4ec585b0a81cdb6c":"3qJRy","a24fa691472fb103":"9uJOB","fc30e16686cb571":"5oxfw","6f2af5199b1885f":"gVtv6","e372ba4ec6859c81":"b0VeQ","4d3c600875371924":"bMWIL","c50a94a855aa6bed":"asVPU","e96fb801a30e0bf8":"l3BmW","8d91a93242884f1a":"4cuoB","c1961420b84d5a0b":"96KID","235cdd0cbc114180":"iM9A1","fbe37286818a3ed9":"j6P7k","2c1137990ecbd5b":"kkWoM","185e534bd2df7320":"hPub0","409aa6367b1d3a1e":"1EBYE","74687a065e145f16":"84Jr2","564e3d85b961c7a0":"3yQ4F","a98ad6de15af377c":"iIfYi","e0bceaf8a624eb80":"k6EhA","4225d4ecbc686a0a":"b6vFM","50e5bdcd1b4a23d6":"6kTwJ","a7b4a144fb4e169":"49gJq","54b9dd92ebe1b35e":"GLwFs","9c45708c617a256a":"skqam","430f7406c999d8a9":"iA2Cy"}],"gkKU3":[function(require,module,exports) {
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

},{}],"2mOp8":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "serviceworker.6a8b1a75.js" + "?" + Date.now();

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

},{}],"beqb2":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "yhtbtr.af7f0a10.js" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"eFyOJ":[function(require,module,exports) {
module.exports = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";

},{}],"jmEIT":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "axe-throw.0fab099b.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"dA6hN":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "boss-explosion.ce943d8d.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"cAgYF":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "boss-fight.183ae9cb.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"2XIbp":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "death.b20f46fd.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"cFKIM":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "door-slam.0bc106ff.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"1oOz7":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "eye-laser.e75c92bc.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"8JSzf":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "jump.0b3b2451.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"k7jIA":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "land.5b9f2593.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"b2Xqi":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "now-youre-a-hero.1ef41fb6.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"cCYtB":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "rope-explosion.2a94fd21.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"jnrdV":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "tunnel.5b89bf3c.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"901Xc":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "axe_18x18.4945c118.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"cMvW9":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "axe_999_64x64.2f5130f4.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"9VZDy":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "back-door_32x64.ac3f454a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"81wN7":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "boss-attack_204x256.4718320b.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"19yiI":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "boss-die_192x256.17de9b0e.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"1nI0a":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "boss-lookup_192x256.2f64a053.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"j34ZM":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "boss-move_204x256.1a714fee.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"dUkPx":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "boss-still_204x256.b60c7493.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"gZP7o":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "chandelier_160x96.e9922bca.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"ko8DN":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "credits-1_200x200.c32602b7.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6cYde":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "credits-2_200x200.202d94a2.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"cvND1":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "credits-3_200x200.b3274e7b.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"eK8SO":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "credits-4_200x200.5d252344.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"7cjE5":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "credits-bg_704x512.005cdb66.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"5DDjU":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "explosion-1_36x36.9a4748d7.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"hNLeT":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "explosion-2_36x36.19e97f50.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lsrDw":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "explosion-3_36x36.8303a588.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"67Ecx":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "explosion-4_36x36.bcd86c90.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"54uYU":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "explosion-5_36x36.8bbd79b8.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"eDCv9":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "explosion-6_36x36.6cf88ddd.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lhXU7":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "explosion-7_36x36.81574fac.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"f0ZuU":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "flame-sprites.5aeaf950.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"bkVU1":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "flame-1_28x28.77931933.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"dJfxr":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "flame-2_28x28.24a728cb.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"2cPCU":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "flame-3_28x28.b57bb939.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"7DP2o":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "info-circle_999_64x64.019b935d.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"dejD3":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "laser-1_20x20.f639e46c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"4vmi4":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "laser-2_20x20.e652230c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"hOENt":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "laser-3_20x20.b6e1853b.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"iVusF":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "laser-4_20x20.07e3396c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"3qJRy":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "laser-5_20x20.0e4b0c90.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"9uJOB":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "laser-6_20x20.d4d4b3db.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"5oxfw":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "laser-7_20x20.c603b95c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"gVtv6":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "page-bg_32x32.b1f18b9a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"b0VeQ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "player-fall_30x36.95a2b8f6.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"bMWIL":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "player-hit_30x36.60b08eb9.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"asVPU":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "player-jump_30x36.3301285d.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"l3BmW":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "player-still_30x36.efa1f6df.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"4cuoB":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "player-throw_30x36.8db3d76a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"96KID":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "player-walk-1_30x36.0ccab93e.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"iM9A1":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "player-walk-2_30x36.e3b3852f.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"j6P7k":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "player-walk-3_30x36.6abc9d2f.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"kkWoM":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "plume-1_43x21.40945f8f.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"hPub0":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "plume-2_43x21.496edfbb.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"1EBYE":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "plume-3_43x21.b0eccb52.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"84Jr2":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "plume-4_43x21.8d0daff0.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"3yQ4F":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "plume-5_43x21.abed5e33.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"iIfYi":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "plume-6_43x21.619d7b32.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"k6EhA":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "rope_8x192.2125e88c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"b6vFM":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "stick_30x6.3d79df12.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6kTwJ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "up-arrow_999_64x64.cd93c66e.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"49gJq":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "volume-0_999_64x64.96fa3484.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"GLwFs":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "volume-1_999_64x64.3d9a6ade.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"skqam":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "bg.a8f4c1ed.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"iA2Cy":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cFEKE') + "rope.bacdb35b.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}]},["2yfts","cOSRm"], "cOSRm", "parcelRequiref536")

//# sourceMappingURL=serviceworker.6a8b1a75.js.map
