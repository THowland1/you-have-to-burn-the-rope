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
})({
    "4YPh2": [function (require, module, exports) {
        "use strict";
        var HMR_HOST = null;
        var HMR_PORT = null;
        var HMR_SECURE = false;
        var HMR_ENV_HASH = "767298212a9fba37";
        module.bundle.HMR_BUNDLE_ID = "93d573a00325710b";
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
                    var F = function F() { };
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
                    } finally {
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
            for (var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
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
                    this._acceptCallbacks.push(fn || function () { });
                },
                dispose: function dispose(fn) {
                    this._disposeCallbacks.push(fn);
                }
            };
            module.bundle.hotData = undefined;
        }
        module.bundle.Module = Module;
        var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */;
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
            ws.onmessage = function (event) {
                checkedAssets = {} /*: {|[string]: boolean|} */;
                acceptedAssets = {} /*: {|[string]: boolean|} */;
                assetsToAccept = [];
                var data = JSON.parse(event.data);
                if (data.type === 'update') {
                    // Remove error overlay if there is one
                    if (typeof document !== 'undefined') removeErrorOverlay();
                    var assets = data.assets.filter(function (asset) {
                        return asset.envHash === HMR_ENV_HASH;
                    }); // Handle HMR Update
                    var handled = assets.every(function (asset) {
                        return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                    });
                    if (handled) {
                        console.clear();
                        assets.forEach(function (asset) {
                            hmrApply(module.bundle.root, asset);
                        });
                        for (var i = 0; i < assetsToAccept.length; i++) {
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
                        for (_iterator.s(); !(_step = _iterator.n()).done;) {
                            var ansiDiagnostic = _step.value;
                            var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                            console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                        }
                    } catch (err) {
                        _iterator.e(err);
                    } finally {
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
            ws.onerror = function (e) {
                console.error(e.message);
            };
            ws.onclose = function () {
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
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var diagnostic = _step2.value;
                    var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
                    errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function (hint) {
                        return '<div>💡 ' + hint + '</div>';
                    }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
                }
            } catch (err) {
                _iterator2.e(err);
            } finally {
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
            for (k in modules) for (d in modules[k][1]) {
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
            newLink.onload = function () {
                if (link.parentNode !== null) // $FlowFixMe
                    link.parentNode.removeChild(link);
            };
            newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
            link.parentNode.insertBefore(newLink, link.nextSibling);
        }
        var cssTimeout = null;
        function reloadCSS() {
            if (cssTimeout) return;
            cssTimeout = setTimeout(function () {
                var links = document.querySelectorAll('link[rel="stylesheet"]');
                for (var i = 0; i < links.length; i++) {
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
                        for (var dep in oldDeps) if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
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
                for (var dep in deps) {
                    var parents = getParents(module.bundle.root, deps[dep]);
                    if (parents.length === 1) orphans.push(deps[dep]);
                } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
                delete modules[id1];
                delete bundle.cache[id1]; // Now delete the orphans.
                orphans.forEach(function (id) {
                    hmrDelete(module.bundle.root, id);
                });
            } else if (bundle.parent) hmrDelete(bundle.parent, id1);
        }
        function hmrAcceptCheck(bundle, id, depsByBundle) {
            if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
            // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
            var parents = getParents(module.bundle.root, id);
            var accepted = false;
            while (parents.length > 0) {
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
            if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function (cb) {
                cb(bundle.hotData);
            });
            delete bundle.cache[id];
            bundle(id);
            cached = bundle.cache[id];
            if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function (cb) {
                var assetsToAlsoAccept = cb(function () {
                    return getParents(module.bundle.root, id);
                });
                if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
                    assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
            });
            acceptedAssets[id] = true;
        }

    }, {}], "jAjMR": [function (require, module, exports) {
        var _urlsJs = require("./js/urls.js");
        const CACHE_NAME = 'version-0.1';
        const OFFLINE_URL = 'index.html';
        const assetUrls = Object.values(_urlsJs.ASSET_URLS);
        self.addEventListener('install', function (event) {
            console.log('[ServiceWorker] Install');
            event.waitUntil((async () => {
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
        self.addEventListener('activate', (event) => {
            console.log('[ServiceWorker] Activate');
            event.waitUntil((async () => {
                // Enable navigation preload if it's supported.
                // See https://developers.google.com/web/updates/2017/02/navigation-preload
                if ('navigationPreload' in self.registration) await self.registration.navigationPreload.enable();
            })());
            // Tell the active service worker to take control of the page immediately.
            self.clients.claim();
        });
        self.addEventListener('fetch', function (event) {
            // console.log('[Service Worker] Fetch', event.request.url);
            event.respondWith((async () => {
                const cachedResponse = await caches.match(event.request);
                console.log;
                return cachedResponse || fetch(event.request);
            })());
        });

    }, { "./js/urls.js": "cCez6" }], "cCez6": [function (require, module, exports) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "ASSET_URLS", () => ASSET_URLS
        );
        const ASSET_URLS = {
            '../serviceworker.js': new URL(require("5e29055134cf728e")),
            './index.js': new URL(require("cb06cd8dfb1f6b86")),
            'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap': new URL(require("14051505ab82d018")),
            '../audio/axe-throw.mp3': new URL(require("72346e65da1a3b4a")),
            '../audio/boss-explosion.mp3': new URL(require("c315bb0fb01bbe57")),
            '../audio/boss-fight.mp3': new URL(require("dfa673022b08cd1e")),
            '../audio/death.mp3': new URL(require("5217c402b8d980ad")),
            '../audio/door-slam.mp3': new URL(require("bad73e8fd4d18f0")),
            '../audio/eye-laser.mp3': new URL(require("79aef5c37c4884d6")),
            '../audio/jump.mp3': new URL(require("ed80f316305bec25")),
            '../audio/land.mp3': new URL(require("f965ab77eb56b976")),
            '../audio/now-youre-a-hero.mp3': new URL(require("6d2316825c27d88e")),
            '../audio/rope-explosion.mp3': new URL(require("aa4ac57ba8abbde4")),
            '../audio/tunnel.mp3': new URL(require("39e4690785d9e6b7")),
            '../img/axe_18x18.png': new URL(require("e25ca4c15d530666")),
            '../img/axe_999_64x64.svg': new URL(require("226e692ed5ed08d8")),
            '../img/back-door_32x64.png': new URL(require("bffb3bf61e5598bf")),
            '../img/boss-attack_204x256.png': new URL(require("cd666ff7bfd307c9")),
            '../img/boss-die_192x256.png': new URL(require("cda314662884549d")),
            '../img/boss-lookup_192x256.png': new URL(require("7bb52930141fa4c8")),
            '../img/boss-move_204x256.png': new URL(require("4122067cd53045fb")),
            '../img/boss-still_204x256.png': new URL(require("49dcfc25192540d2")),
            '../img/chandelier_160x96.png': new URL(require("373fe718a772a5d")),
            '../img/credits-1_200x200.png': new URL(require("a6e036d2a8cb8b97")),
            '../img/credits-2_200x200.png': new URL(require("86b4a4b70c1f4e8f")),
            '../img/credits-3_200x200.png': new URL(require("e80d7327ba09c4e7")),
            '../img/credits-4_200x200.png': new URL(require("a218a2cd7b8237f1")),
            '../img/credits-bg_704x512.png': new URL(require("f538cda93e5e505b")),
            '../img/explosion-1_36x36.png': new URL(require("b8fbce8ded11c530")),
            '../img/explosion-2_36x36.png': new URL(require("3f5a1fe7bc226db6")),
            '../img/explosion-3_36x36.png': new URL(require("d7bd9dd9319b272a")),
            '../img/explosion-4_36x36.png': new URL(require("4b6052bd007ae687")),
            '../img/explosion-5_36x36.png': new URL(require("fa4fa1258801c790")),
            '../img/explosion-6_36x36.png': new URL(require("47f11608baa9a9b9")),
            '../img/explosion-7_36x36.png': new URL(require("2f6dd958b5eac1d9")),
            '../img/flame-sprites.png': new URL(require("3f38a386c47b05b0")),
            '../img/flame-1_28x28.png': new URL(require("d08db23e33335a80")),
            '../img/flame-2_28x28.png': new URL(require("817d6cbe68df9e8a")),
            '../img/flame-3_28x28.png': new URL(require("a451b2c5fabcc2f2")),
            '../img/info-circle_999_64x64.svg': new URL(require("d0c63ad5f0daa197")),
            '../img/laser-1_20x20.png': new URL(require("8ded7f16183331e0")),
            '../img/laser-2_20x20.png': new URL(require("1fc5c97170736d5e")),
            '../img/laser-3_20x20.png': new URL(require("728e07e032723cfd")),
            '../img/laser-4_20x20.png': new URL(require("20d091adcda6bfa2")),
            '../img/laser-5_20x20.png': new URL(require("4ec585b0a81cdb6c")),
            '../img/laser-6_20x20.png': new URL(require("a24fa691472fb103")),
            '../img/laser-7_20x20.png': new URL(require("fc30e16686cb571")),
            '../img/page-bg_32x32.png': new URL(require("6f2af5199b1885f")),
            '../img/player-fall_30x36.png': new URL(require("e372ba4ec6859c81")),
            '../img/player-hit_30x36.png': new URL(require("4d3c600875371924")),
            '../img/player-jump_30x36.png': new URL(require("c50a94a855aa6bed")),
            '../img/player-still_30x36.png': new URL(require("e96fb801a30e0bf8")),
            '../img/player-throw_30x36.png': new URL(require("8d91a93242884f1a")),
            '../img/player-walk-1_30x36.png': new URL(require("c1961420b84d5a0b")),
            '../img/player-walk-2_30x36.png': new URL(require("235cdd0cbc114180")),
            '../img/player-walk-3_30x36.png': new URL(require("fbe37286818a3ed9")),
            '../img/plume-1_43x21.png': new URL(require("2c1137990ecbd5b")),
            '../img/plume-2_43x21.png': new URL(require("185e534bd2df7320")),
            '../img/plume-3_43x21.png': new URL(require("409aa6367b1d3a1e")),
            '../img/plume-4_43x21.png': new URL(require("74687a065e145f16")),
            '../img/plume-5_43x21.png': new URL(require("564e3d85b961c7a0")),
            '../img/plume-6_43x21.png': new URL(require("a98ad6de15af377c")),
            '../img/rope_8x192.png': new URL(require("e0bceaf8a624eb80")),
            '../img/stick_30x6.png': new URL(require("4225d4ecbc686a0a")),
            '../img/up-arrow_999_64x64.svg': new URL(require("50e5bdcd1b4a23d6")),
            '../img/volume-0_999_64x64.svg': new URL(require("a7b4a144fb4e169")),
            '../img/volume-1_999_64x64.svg': new URL(require("54b9dd92ebe1b35e")),
            '../img/bg.png': new URL(require("9c45708c617a256a")),
            '../img/rope.png': new URL(require("430f7406c999d8a9"))
        };

    }, { "5e29055134cf728e": "7C0PX", "cb06cd8dfb1f6b86": "5HVnF", "14051505ab82d018": "5Tcfx", "72346e65da1a3b4a": "jQZ5y", "c315bb0fb01bbe57": "2gk5J", "dfa673022b08cd1e": "6XBI5", "5217c402b8d980ad": "d4Fd7", "bad73e8fd4d18f0": "961rs", "79aef5c37c4884d6": "eOUoS", "ed80f316305bec25": "6attY", "f965ab77eb56b976": "4M1oX", "6d2316825c27d88e": "hHbPq", "aa4ac57ba8abbde4": "btFII", "39e4690785d9e6b7": "2IzjU", "e25ca4c15d530666": "8CtYj", "226e692ed5ed08d8": "eTivQ", "bffb3bf61e5598bf": "a9FJp", "cd666ff7bfd307c9": "8Moya", "cda314662884549d": "gtKPL", "7bb52930141fa4c8": "4p609", "4122067cd53045fb": "5V5VS", "49dcfc25192540d2": "h0AkF", "373fe718a772a5d": "eFxZr", "a6e036d2a8cb8b97": "H3ifK", "86b4a4b70c1f4e8f": "kyXaX", "e80d7327ba09c4e7": "5yPF5", "a218a2cd7b8237f1": "10IYk", "f538cda93e5e505b": "iw6AW", "b8fbce8ded11c530": "ktuv6", "3f5a1fe7bc226db6": "7e7xV", "d7bd9dd9319b272a": "Qzbmr", "4b6052bd007ae687": "8s2Js", "fa4fa1258801c790": "hzOah", "47f11608baa9a9b9": "igC5R", "2f6dd958b5eac1d9": "4Wj3d", "3f38a386c47b05b0": "7PxmI", "d08db23e33335a80": "ePFL9", "817d6cbe68df9e8a": "1KKCK", "a451b2c5fabcc2f2": "iugWY", "d0c63ad5f0daa197": "6MIJo", "8ded7f16183331e0": "cI5qy", "1fc5c97170736d5e": "dT418", "728e07e032723cfd": "OZIV4", "20d091adcda6bfa2": "dt9C7", "4ec585b0a81cdb6c": "jH3FD", "a24fa691472fb103": "2uu1T", "fc30e16686cb571": "dhR1h", "6f2af5199b1885f": "dpYsi", "e372ba4ec6859c81": "alXm0", "4d3c600875371924": "6e9jI", "c50a94a855aa6bed": "adTfY", "e96fb801a30e0bf8": "hG5r2", "8d91a93242884f1a": "3GvP3", "c1961420b84d5a0b": "kdo5i", "235cdd0cbc114180": "7QLgu", "fbe37286818a3ed9": "2NPE5", "2c1137990ecbd5b": "68qt7", "185e534bd2df7320": "7vWtp", "409aa6367b1d3a1e": "kZqpB", "74687a065e145f16": "lrnpS", "564e3d85b961c7a0": "2aRT8", "a98ad6de15af377c": "23Aci", "e0bceaf8a624eb80": "io3ti", "4225d4ecbc686a0a": "293K0", "50e5bdcd1b4a23d6": "8VrK5", "a7b4a144fb4e169": "7Stnk", "54b9dd92ebe1b35e": "8i45h", "9c45708c617a256a": "eNcpv", "430f7406c999d8a9": "6iL1l", "@parcel/transformer-js/src/esmodule-helpers.js": "jRKQF" }], "7C0PX": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "serviceworker.js" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "f7hvf": [function (require, module, exports) {
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

    }, {}], "5HVnF": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../yhtbtr.bcc9ffc4.js" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "5Tcfx": [function (require, module, exports) {
        module.exports = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";

    }, {}], "jQZ5y": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../axe-throw.c3dcef22.mp3" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "2gk5J": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../boss-explosion.0bdf8842.mp3" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "6XBI5": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../boss-fight.942b110e.mp3" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "d4Fd7": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../death.664f3da7.mp3" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "961rs": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../door-slam.cc0859d7.mp3" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "eOUoS": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../eye-laser.022300db.mp3" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "6attY": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../jump.298cc5df.mp3" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "4M1oX": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../land.dc769343.mp3" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "hHbPq": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../now-youre-a-hero.8d528aa0.mp3" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "btFII": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../rope-explosion.9049fa72.mp3" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "2IzjU": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../tunnel.957f5cbf.mp3" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "8CtYj": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../axe_18x18.f129016c.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "eTivQ": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../axe_999_64x64.5ae113fe.svg" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "a9FJp": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../back-door_32x64.3880d100.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "8Moya": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../boss-attack_204x256.ac09bf9b.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "gtKPL": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../boss-die_192x256.58ac59e7.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "4p609": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../boss-lookup_192x256.ec55cc2f.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "5V5VS": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../boss-move_204x256.85990b7f.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "h0AkF": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../boss-still_204x256.1ad2256e.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "eFxZr": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../chandelier_160x96.fe36f821.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "H3ifK": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../credits-1_200x200.6307e7d8.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "kyXaX": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../credits-2_200x200.33fd326c.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "5yPF5": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../credits-3_200x200.f550499b.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "10IYk": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../credits-4_200x200.c77f12aa.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "iw6AW": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../credits-bg_704x512.73e18059.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "ktuv6": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../explosion-1_36x36.d38de4de.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "7e7xV": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../explosion-2_36x36.4c857b04.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "Qzbmr": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../explosion-3_36x36.cdf2a231.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "8s2Js": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../explosion-4_36x36.0e626b09.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "hzOah": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../explosion-5_36x36.7806ec9d.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "igC5R": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../explosion-6_36x36.48698a39.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "4Wj3d": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../explosion-7_36x36.655f4710.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "7PxmI": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../flame-sprites.6036e7d9.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "ePFL9": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../flame-1_28x28.f5cd5017.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "1KKCK": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../flame-2_28x28.1e2b0ecb.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "iugWY": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../flame-3_28x28.3348cab1.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "6MIJo": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../info-circle_999_64x64.d29f52c8.svg" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "cI5qy": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../laser-1_20x20.96999082.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "dT418": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../laser-2_20x20.380b23b7.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "OZIV4": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../laser-3_20x20.51663a5b.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "dt9C7": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../laser-4_20x20.63933777.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "jH3FD": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../laser-5_20x20.cd0ee708.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "2uu1T": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../laser-6_20x20.36fb4920.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "dhR1h": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../laser-7_20x20.c244b80a.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "dpYsi": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../page-bg_32x32.08ff5a41.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "alXm0": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../player-fall_30x36.165fe1be.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "6e9jI": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../player-hit_30x36.9e7b8033.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "adTfY": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../player-jump_30x36.059c702a.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "hG5r2": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../player-still_30x36.e0f76c40.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "3GvP3": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../player-throw_30x36.2a059e69.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "kdo5i": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../player-walk-1_30x36.698d62c7.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "7QLgu": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../player-walk-2_30x36.0977c7f6.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "2NPE5": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../player-walk-3_30x36.6641d79f.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "68qt7": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../plume-1_43x21.e31a005a.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "7vWtp": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../plume-2_43x21.f0fc7651.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "kZqpB": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../plume-3_43x21.2bbc28bc.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "lrnpS": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../plume-4_43x21.2750b00e.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "2aRT8": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../plume-5_43x21.bc5c5a57.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "23Aci": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../plume-6_43x21.a37a9f3a.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "io3ti": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../rope_8x192.2c7b54bc.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "293K0": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../stick_30x6.75865b20.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "8VrK5": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../up-arrow_999_64x64.9d9eae33.svg" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "7Stnk": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../volume-0_999_64x64.61762cfb.svg" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "8i45h": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../volume-1_999_64x64.f19b14b1.svg" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "eNcpv": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../bg.20eef395.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "6iL1l": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('cGUMq') + "../rope.b3694ca9.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "jRKQF": [function (require, module, exports) {
        exports.interopDefault = function (a) {
            return a && a.__esModule ? a : {
                default: a
            };
        };
        exports.defineInteropFlag = function (a) {
            Object.defineProperty(a, '__esModule', {
                value: true
            });
        };
        exports.exportAll = function (source, dest) {
            Object.keys(source).forEach(function (key) {
                if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
                Object.defineProperty(dest, key, {
                    enumerable: true,
                    get: function () {
                        return source[key];
                    }
                });
            });
            return dest;
        };
        exports.export = function (dest, destName, get) {
            Object.defineProperty(dest, destName, {
                enumerable: true,
                get: get
            });
        };

    }, {}]
}, ["4YPh2", "jAjMR"], "jAjMR", "parcelRequiref536");

//# sourceMappingURL=serviceworker.js.map
