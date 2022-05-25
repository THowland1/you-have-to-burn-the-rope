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
    "4h35B": [function (require, module, exports) {
        "use strict";
        var HMR_HOST = null;
        var HMR_PORT = null;
        var HMR_SECURE = false;
        var HMR_ENV_HASH = "767298212a9fba37";
        module.bundle.HMR_BUNDLE_ID = "a3f893fab8f97de9";
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

    }, { "5e29055134cf728e": "059Xf", "cb06cd8dfb1f6b86": "11oUD", "14051505ab82d018": "5Tcfx", "72346e65da1a3b4a": "khgzJ", "c315bb0fb01bbe57": "3TIUZ", "dfa673022b08cd1e": "5wm9F", "5217c402b8d980ad": "aaHS8", "bad73e8fd4d18f0": "jhI3N", "79aef5c37c4884d6": "1KFw4", "ed80f316305bec25": "y0D9G", "f965ab77eb56b976": "gcklQ", "6d2316825c27d88e": "ashQ5", "aa4ac57ba8abbde4": "dTVvr", "39e4690785d9e6b7": "3ooOL", "e25ca4c15d530666": "kwYJ0", "226e692ed5ed08d8": "exDCy", "bffb3bf61e5598bf": "gpPTD", "cd666ff7bfd307c9": "2dYC9", "cda314662884549d": "cLvS0", "7bb52930141fa4c8": "876yO", "4122067cd53045fb": "iNvaw", "49dcfc25192540d2": "aNiea", "373fe718a772a5d": "9BDDx", "a6e036d2a8cb8b97": "6DkXK", "86b4a4b70c1f4e8f": "dzzoX", "e80d7327ba09c4e7": "ej22g", "a218a2cd7b8237f1": "fzjhN", "f538cda93e5e505b": "kjLZG", "b8fbce8ded11c530": "2XJAX", "3f5a1fe7bc226db6": "iibqP", "d7bd9dd9319b272a": "ehxQn", "4b6052bd007ae687": "jq2W2", "fa4fa1258801c790": "7hXHX", "47f11608baa9a9b9": "7vtm8", "2f6dd958b5eac1d9": "lCIwU", "3f38a386c47b05b0": "6hS7W", "d08db23e33335a80": "4ZjgE", "817d6cbe68df9e8a": "kYxHO", "a451b2c5fabcc2f2": "92f6c", "d0c63ad5f0daa197": "ia7di", "8ded7f16183331e0": "g9HQA", "1fc5c97170736d5e": "2JtGU", "728e07e032723cfd": "7zSSD", "20d091adcda6bfa2": "fuZiv", "4ec585b0a81cdb6c": "51mAU", "a24fa691472fb103": "hoeIg", "fc30e16686cb571": "jzA1P", "6f2af5199b1885f": "4P3eE", "e372ba4ec6859c81": "gEWLB", "4d3c600875371924": "8R0dl", "c50a94a855aa6bed": "f4Fcw", "e96fb801a30e0bf8": "88q9g", "8d91a93242884f1a": "3llzr", "c1961420b84d5a0b": "dL4lI", "235cdd0cbc114180": "idHCk", "fbe37286818a3ed9": "ksZLE", "2c1137990ecbd5b": "fahJZ", "185e534bd2df7320": "aVzte", "409aa6367b1d3a1e": "fKxrs", "74687a065e145f16": "arJE6", "564e3d85b961c7a0": "ktESi", "a98ad6de15af377c": "ck3lz", "e0bceaf8a624eb80": "koqJp", "4225d4ecbc686a0a": "7yuLP", "50e5bdcd1b4a23d6": "gpemV", "a7b4a144fb4e169": "40vdA", "54b9dd92ebe1b35e": "5n8p0", "9c45708c617a256a": "bvoJa", "430f7406c999d8a9": "869ic", "@parcel/transformer-js/src/esmodule-helpers.js": "jRKQF" }], "059Xf": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "serviceworker.js" + "?" + Date.now();

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

    }, {}], "11oUD": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../yhtbtr.bcc9ffc4.js" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "5Tcfx": [function (require, module, exports) {
        module.exports = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";

    }, {}], "khgzJ": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../axe-throw.c3dcef22.mp3" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "3TIUZ": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../boss-explosion.0bdf8842.mp3" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "5wm9F": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../boss-fight.942b110e.mp3" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "aaHS8": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../death.664f3da7.mp3" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "jhI3N": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../door-slam.cc0859d7.mp3" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "1KFw4": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../eye-laser.022300db.mp3" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "y0D9G": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../jump.298cc5df.mp3" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "gcklQ": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../land.dc769343.mp3" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "ashQ5": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../now-youre-a-hero.8d528aa0.mp3" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "dTVvr": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../rope-explosion.9049fa72.mp3" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "3ooOL": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../tunnel.957f5cbf.mp3" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "kwYJ0": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../axe_18x18.f129016c.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "exDCy": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../axe_999_64x64.5ae113fe.svg" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "gpPTD": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../back-door_32x64.3880d100.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "2dYC9": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../boss-attack_204x256.ac09bf9b.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "cLvS0": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../boss-die_192x256.58ac59e7.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "876yO": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../boss-lookup_192x256.ec55cc2f.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "iNvaw": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../boss-move_204x256.85990b7f.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "aNiea": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../boss-still_204x256.1ad2256e.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "9BDDx": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../chandelier_160x96.fe36f821.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "6DkXK": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../credits-1_200x200.6307e7d8.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "dzzoX": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../credits-2_200x200.33fd326c.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "ej22g": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../credits-3_200x200.f550499b.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "fzjhN": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../credits-4_200x200.c77f12aa.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "kjLZG": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../credits-bg_704x512.73e18059.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "2XJAX": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../explosion-1_36x36.d38de4de.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "iibqP": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../explosion-2_36x36.4c857b04.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "ehxQn": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../explosion-3_36x36.cdf2a231.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "jq2W2": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../explosion-4_36x36.0e626b09.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "7hXHX": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../explosion-5_36x36.7806ec9d.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "7vtm8": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../explosion-6_36x36.48698a39.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "lCIwU": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../explosion-7_36x36.655f4710.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "6hS7W": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../flame-sprites.6036e7d9.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "4ZjgE": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../flame-1_28x28.f5cd5017.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "kYxHO": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../flame-2_28x28.1e2b0ecb.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "92f6c": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../flame-3_28x28.3348cab1.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "ia7di": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../info-circle_999_64x64.d29f52c8.svg" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "g9HQA": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../laser-1_20x20.96999082.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "2JtGU": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../laser-2_20x20.380b23b7.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "7zSSD": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../laser-3_20x20.51663a5b.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "fuZiv": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../laser-4_20x20.63933777.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "51mAU": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../laser-5_20x20.cd0ee708.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "hoeIg": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../laser-6_20x20.36fb4920.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "jzA1P": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../laser-7_20x20.c244b80a.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "4P3eE": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../page-bg_32x32.08ff5a41.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "gEWLB": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../player-fall_30x36.165fe1be.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "8R0dl": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../player-hit_30x36.9e7b8033.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "f4Fcw": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../player-jump_30x36.059c702a.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "88q9g": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../player-still_30x36.e0f76c40.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "3llzr": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../player-throw_30x36.2a059e69.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "dL4lI": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../player-walk-1_30x36.698d62c7.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "idHCk": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../player-walk-2_30x36.0977c7f6.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "ksZLE": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../player-walk-3_30x36.6641d79f.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "fahJZ": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../plume-1_43x21.e31a005a.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "aVzte": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../plume-2_43x21.f0fc7651.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "fKxrs": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../plume-3_43x21.2bbc28bc.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "arJE6": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../plume-4_43x21.2750b00e.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "ktESi": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../plume-5_43x21.bc5c5a57.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "ck3lz": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../plume-6_43x21.a37a9f3a.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "koqJp": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../rope_8x192.2c7b54bc.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "7yuLP": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../stick_30x6.75865b20.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "gpemV": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../up-arrow_999_64x64.9d9eae33.svg" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "40vdA": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../volume-0_999_64x64.61762cfb.svg" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "5n8p0": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../volume-1_999_64x64.f19b14b1.svg" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "bvoJa": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../bg.20eef395.png" + "?" + Date.now();

    }, { "./helpers/bundle-url": "f7hvf" }], "869ic": [function (require, module, exports) {
        module.exports = require('./helpers/bundle-url').getBundleURL('e4Osl') + "../rope.b3694ca9.png" + "?" + Date.now();

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
}, ["4h35B", "jAjMR"], "jAjMR", "parcelRequiref536");

//# sourceMappingURL=serviceworker.b8f97de9.js.map
