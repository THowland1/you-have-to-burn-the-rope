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
})({"bSipi":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "767298212a9fba37";
module.bundle.HMR_BUNDLE_ID = "115223b3bcc9ffc4";
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

},{}],"b5VdI":[function(require,module,exports) {
var _axesJs = require("./js/axes.js");
var _bossJs = require("./js/boss.js");
var _canvasJs = require("./js/canvas.js");
var _chandelierJs = require("./js/chandelier.js");
var _constsJs = require("./js/consts.js");
var _coordinatesJs = require("./js/coordinates.js");
var _debugMenuJs = require("./js/debug-menu.js");
var _explosionsJs = require("./js/explosions.js");
var _flamesJs = require("./js/flames.js");
var _healthbarJs = require("./js/healthbar.js");
var _lasersJs = require("./js/lasers.js");
var _phaseManagerJs = require("./js/phase-manager.js");
var _platformsJs = require("./js/platforms.js");
var _playerJs = require("./js/player.js");
var _plumesJs = require("./js/plumes.js");
var _ropeJs = require("./js/rope.js");
var _slidesJs = require("./js/slides.js");
var _timeManagerJs = require("./js/time-manager.js");
var _audioManagerJs = require("./js/audio-manager.js");
var _buttonManagerJs = require("./js/button-manager.js");
var _urlsJs = require("./js/urls.js");
if ('serviceWorker' in navigator) window.addEventListener('load', ()=>{
    navigator.serviceWorker.register(require("84a56a3159969eaa")).then((reg)=>console.log('Success: ', reg.scope)
    ).catch((err)=>console.log('Failure: ', err)
    );
});
document.getElementById('show-info').addEventListener('click', ()=>{
    document.getElementById('info').classList.remove('hidden');
});
document.getElementById('hide-info').addEventListener('click', ()=>{
    document.getElementById('info').classList.add('hidden');
});
document.getElementById('canvas').addEventListener('click', ()=>{
    _phaseManagerJs.phaseManager.startStartPhase();
});
class BG {
    constructor(){
        this.img = new Image();
        this.img.src = _urlsJs.ASSET_URLS['../sprites/bg.png'];
        console.log(_urlsJs.ASSET_URLS['../sprites/bg.png']);
    }
    draw() {
        const sx = _coordinatesJs.offset.x;
        const sy = _coordinatesJs.offset.y;
        const sw = _canvasJs.FRAME_WIDTH;
        const sh = _canvasJs.FRAME_HEIGHT;
        const dx = 0;
        const dy = 0;
        const dw = _canvasJs.FRAME_WIDTH;
        const dh = _canvasJs.FRAME_HEIGHT;
        this.img && _canvasJs.c.drawImage(this.img, sx, sy, sw, sh, dx, dy, dw, dh);
    }
}
const bg = new BG();
function animate() {
    const now = new Date().valueOf();
    _timeManagerJs.timeManager.msPerFrame = now - _timeManagerJs.timeManager.now;
    _timeManagerJs.timeManager.now = now;
    if (_constsJs.DEBUG_DELAY) setTimeout(()=>{
        requestAnimationFrame(animate);
    }, _constsJs.DEBUG_DELAY);
    else requestAnimationFrame(animate);
    _canvasJs.c.clearRect(0, 0, _canvasJs.canvas.width, _canvasJs.canvas.height);
    if (_phaseManagerJs.phaseManager.phase === _phaseManagerJs.PHASES.clicktostart) {
        _canvasJs.c.fillStyle = 'white';
        _canvasJs.c.textAlign = 'center';
        _canvasJs.c.font = '500 14px Inter';
        _canvasJs.c.fillText('Click to start', _canvasJs.FRAME_WIDTH / 2, _canvasJs.FRAME_HEIGHT / 2);
        return;
    }
    if (_audioManagerJs.audioManager.endCreditsMusic.currentTime < 2) {
        bg.draw();
        if (_phaseManagerJs.phaseManager.showBackDoor) _phaseManagerJs.phaseManager.drawBackDoor();
        _bossJs.boss.update();
        _playerJs.player.update();
        _ropeJs.rope.update();
        _chandelierJs.chandelier.update();
        _explosionsJs.explosions.update();
        _plumesJs.plumes.update();
        _axesJs.axes.update();
        _lasersJs.lasers.update();
        _healthbarJs.healthBar.update();
        _flamesJs.flames.forEach((flame)=>flame.draw()
        );
        _canvasJs.canvas.style.opacity = (2 - _audioManagerJs.audioManager.endCreditsMusic.currentTime) / 2;
        _buttonManagerJs.buttonManager.setOpacity((2 - _audioManagerJs.audioManager.endCreditsMusic.currentTime) / 2);
    } else {
        _canvasJs.canvas.style.opacity = 1;
        _buttonManagerJs.buttonManager.hide();
    }
    if (_playerJs.player.left >= 3456) _phaseManagerJs.phaseManager.startBossFightPhase();
    else if (_playerJs.player.left >= 192) _phaseManagerJs.phaseManager.startTunnelPhase();
    _canvasJs.c.fillStyle = 'white';
    _slidesJs.slides.forEach((slide)=>slide.draw()
    );
    if (_playerJs.player.hasFlame && _playerJs.player.intersects(_ropeJs.rope.flammableBitOfRope)) {
        _playerJs.player.hasFlame = false;
        _phaseManagerJs.phaseManager.startRopeBurningPhase();
    }
    if (_constsJs.SHOW_PLATFORMS) _platformsJs.platforms.forEach((platform)=>platform.draw()
    );
    if (_constsJs.SHOW_DEBUGMENU) _debugMenuJs.debugMenu.draw();
    if (_constsJs.SHOW_GRIDLINES) {
        _canvasJs.c.fillStyle = 'white';
        Array.from(Array(_constsJs.COURSE_WIDTH / 128)).forEach((_, x)=>{
            _canvasJs.c.fillRect(x * 128 - _coordinatesJs.offset.x, 0, 1, _canvasJs.FRAME_HEIGHT);
            _canvasJs.c.fillText(`${x * 4}`, x * 128 - _coordinatesJs.offset.x, 10);
        });
        Array.from(Array(_constsJs.COURSE_HEIGHT / 160)).forEach((_, y)=>{
            _canvasJs.c.fillRect(0, y * 160 - _coordinatesJs.offset.y, _canvasJs.FRAME_WIDTH, 1);
            _canvasJs.c.fillText(`${y * 5}`, 10, y * 160 - _coordinatesJs.offset.y);
        });
    }
    if (_playerJs.player.localRight > 400 && _coordinatesJs.offset.x + _canvasJs.FRAME_WIDTH < _constsJs.COURSE_WIDTH && _playerJs.player.velocity.x > 0) _coordinatesJs.offset.x += _playerJs.player.velocity.x * _timeManagerJs.timeManager.msPerFrame;
    else if (_playerJs.player.localLeft < 200 && _coordinatesJs.offset.x > 0 && _playerJs.player.velocity.x < 0) _coordinatesJs.offset.x += _playerJs.player.velocity.x * _timeManagerJs.timeManager.msPerFrame;
    if (_playerJs.player.localTop < 175 && _coordinatesJs.offset.y > 0 && _playerJs.player.velocity.y < 0) _coordinatesJs.offset.y += _playerJs.player.velocity.y * _timeManagerJs.timeManager.msPerFrame;
    else if (_playerJs.player.localBottom > 200 && _coordinatesJs.offset.y + _canvasJs.FRAME_HEIGHT < _constsJs.COURSE_HEIGHT && _playerJs.player.velocity.y > 0) _coordinatesJs.offset.y += _playerJs.player.velocity.y * _timeManagerJs.timeManager.msPerFrame;
}
animate();

},{"./js/axes.js":"41T7T","./js/boss.js":"X0joP","./js/canvas.js":"eTVCG","./js/chandelier.js":"hHt1H","./js/consts.js":"3GOLi","./js/coordinates.js":"1Przq","./js/debug-menu.js":"egCPC","./js/explosions.js":"lgZ6l","./js/flames.js":"az6Mf","./js/healthbar.js":"3ubdR","./js/lasers.js":"jIbrz","./js/phase-manager.js":"4n7ZT","./js/platforms.js":"3XP2n","./js/player.js":"c37gX","./js/plumes.js":"3IzEq","./js/rope.js":"cbVoA","./js/slides.js":"1GJzH","./js/time-manager.js":"lLX8e","./js/audio-manager.js":"37hFB","./js/button-manager.js":"kZiUA","./js/urls.js":"cCez6","84a56a3159969eaa":"5emP5"}],"41T7T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "axes", ()=>axes
);
var _coordinatesJs = require("./coordinates.js");
var _canvasJs = require("./canvas.js");
var _bossJs = require("./boss.js");
var _healthbarJs = require("./healthbar.js");
var _timeManagerJs = require("./time-manager.js");
var _audioManagerJs = require("./audio-manager.js");
var _constsJs = require("./consts.js");
var _imgJs = require("./img.js");
var _urlsJs = require("./urls.js");
const axeImg = _imgJs.img(_urlsJs.ASSET_URLS['../sprites/axe_18x18.png']);
class Axes {
    constructor(){
        /** @type {Axe[]} */ this.axes = [];
    }
    add({ left , top , shootRight  }) {
        this.axes.push(new Axe({
            left,
            top,
            shootRight
        }));
        _audioManagerJs.audioManager.playAxeThrowSound();
    }
    update() {
        this.axes = this.axes.filter((axe)=>_timeManagerJs.timeManager.now - axe.startTime < 6000 && !axe.hitBoss
        );
        this.axes.forEach((axe)=>axe.update()
        );
    }
}
class Axe extends _coordinatesJs.Coordinates {
    constructor({ left , top , shootRight  }){
        super({
            x: left,
            y: top,
            width: 18,
            height: 18
        });
        this.img = axeImg;
        this.startTime = new Date().valueOf();
        this.angle = 0;
        this.finished = false;
        this.velocity = -_constsJs.AXE_SPEED_Y;
        this.turnsPerSecond = .25;
        this.shootRight = shootRight;
        this.hitBoss = false;
    }
    update() {
        if (this.intersects(_bossJs.boss)) {
            this.hitBoss = true;
            _healthbarJs.healthBar.health -= .01;
        }
        this.x += _constsJs.AXE_SPEED_X * _timeManagerJs.timeManager.msPerFrame * (this.shootRight ? 1 : -1);
        this.velocity += _constsJs.AXE_GRAVITY * _timeManagerJs.timeManager.msPerFrame;
        this.y += this.velocity * _timeManagerJs.timeManager.msPerFrame;
        this.angle += 2 * Math.PI * this.turnsPerSecond * (_timeManagerJs.timeManager.now - this.startTime) / 1000;
        this.draw();
    }
    draw() {
        _canvasJs.c.save();
        _canvasJs.c.setTransform(1, 0, 0, 1, this.localLeft, this.localTop); // sets scale and origin
        _canvasJs.c.rotate(this.angle);
        _canvasJs.c.drawImage(this.img, -9, -9, this.width, this.height);
        _canvasJs.c.restore();
    }
}
const axes = new Axes();

},{"./coordinates.js":"1Przq","./canvas.js":"eTVCG","./boss.js":"X0joP","./healthbar.js":"3ubdR","./time-manager.js":"lLX8e","./audio-manager.js":"37hFB","./consts.js":"3GOLi","./img.js":"344AO","./urls.js":"cCez6","@parcel/transformer-js/src/esmodule-helpers.js":"jRKQF"}],"1Przq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "offset", ()=>offset
);
// rope
// export const offset = {
//     x: 124 * 32,
//     y: 5 * 32
// };
// end
// export const offset = {
//     x: 144 * 32,
//     y: 15 * 32
// };
parcelHelpers.export(exports, "Coordinates", ()=>Coordinates
);
const offset = {
    x: 0,
    y: 0
};
class Coordinates {
    constructor({ x , y , height , width  }){
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }
    get left() {
        return this.x;
    }
    get right() {
        return this.left + this.width;
    }
    get center() {
        return this.left + 0.5 * this.width;
    }
    get yCenter() {
        return this.top + 0.5 * this.height;
    }
    get top() {
        return this.y;
    }
    get bottom() {
        return this.top + this.height;
    }
    get localLeft() {
        return this.x - offset.x;
    }
    get localRight() {
        return this.localLeft + this.width;
    }
    get localTop() {
        return this.y - offset.y;
    }
    get localBottom() {
        return this.localTop + this.height;
    }
    intersectsX({ left , right  }) {
        return this.right >= left && this.right <= right || this.left >= left && this.right <= right;
    }
    intersectsY({ top , bottom  }) {
        return this.bottom <= bottom && this.bottom >= top || this.top <= bottom && this.top >= top;
    }
    intersects({ left , right , top , bottom  }) {
        return this.intersectsX({
            left,
            right
        }) && this.intersectsY({
            top,
            bottom
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jRKQF"}],"jRKQF":[function(require,module,exports) {
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

},{}],"eTVCG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "canvas", ()=>canvas
);
parcelHelpers.export(exports, "c", ()=>c
);
parcelHelpers.export(exports, "FRAME_WIDTH", ()=>FRAME_WIDTH
);
parcelHelpers.export(exports, "FRAME_HEIGHT", ()=>FRAME_HEIGHT
);
const SCALE = 1;
class Context {
    constructor(){
        this.canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext('2d');
    }
    drawImage(image, ...rest) {
        if (rest.length === 4) this.context.drawImage(image, ...rest.map((o)=>o * SCALE
        ));
        else if (rest.length === 8) {
            const [sx, sy, sw, sh] = rest.slice(0, 4);
            const d = rest.slice(4, 8);
            this.context.drawImage(image, sx, sy, sw, sh, ...d.map((o)=>o * SCALE
            ));
        }
    }
    scale(...rest) {
        this.context.scale(...rest);
    }
    clearRect(...rest) {
        this.context.clearRect(...rest.map((o)=>o * SCALE
        ));
    }
    fillRect(...rest) {
        this.context.fillRect(...rest.map((o)=>o * SCALE
        ));
    }
    fillText(text, ...rest) {
        this.context.fillText(text, ...rest.map((o)=>o * SCALE
        ));
    }
    setTransform(a, b, c1, d, e, f) {
        this.context.setTransform(a, b, c1, d, e, f);
    }
    rotate(angle) {
        this.context.rotate(angle);
    }
    save() {
        this.context.save();
    }
    restore() {
        this.context.restore();
    }
    set fillStyle(value) {
        this.context.fillStyle = value;
    }
    set font(value) {
        this.context.font = value;
    }
    set textAlign(value) {
        this.context.textAlign = value;
    }
}
const context = new Context();
const canvas = context.canvas;
const c = context;
const FRAME_WIDTH = 704;
const FRAME_HEIGHT = 512;
canvas.height = SCALE * FRAME_HEIGHT;
canvas.width = SCALE * FRAME_WIDTH;
function setSize() {
    const width = window.outerWidth;
    const height = window.outerWidth;
    const maxHeight = FRAME_HEIGHT;
    const maxWidth = FRAME_WIDTH;
    if (width >= maxWidth && height >= maxHeight) {
        canvas.style.height = `${maxHeight}px`;
        canvas.style.width = `${maxWidth}px`;
    } else {
        var ratio = FRAME_HEIGHT / FRAME_WIDTH;
        canvas.style.height = `${width * ratio}px`;
        canvas.style.width = `${width}px`;
    }
}
setSize();
addEventListener('resize', setSize);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jRKQF"}],"X0joP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "boss", ()=>boss
);
var _canvasJs = require("./canvas.js");
var _constsJs = require("./consts.js");
var _coordinatesJs = require("./coordinates.js");
var _playerJs = require("./player.js");
var _phaseManagerJs = require("./phase-manager.js");
var _lasersJs = require("./lasers.js");
var _timeManagerJs = require("./time-manager.js");
var _imgJs = require("./img.js");
var _urlsJs = require("./urls.js");
class Boss extends _coordinatesJs.Coordinates {
    /**
     * Boss pattern
     * If player is X blocks away, do nothing (no changing mode, no acting)
     * If player is above, switch to 'looking up' sprite
     * If player is to the left, switch to 'looking left' sprite
     * If player is to the right, switch to 'looking right' sprite
     * Either in attack mode or move mode
     * Mode logic
     *  - 
     */ constructor(){
        super({
            x: 4128,
            y: 608,
            height: 256,
            width: 192
        });
        /** @type{'move' | 'attack' | 'still'} */ this.mode = 'attack';
        this.facingRight = false;
        this.x = 4128;
        this.y = 608;
        this.velocity = {
            x: 0,
            y: 0
        };
        this.images = {
            attack: _imgJs.img(_urlsJs.ASSET_URLS['../sprites/boss-attack_204x256.png']),
            die: _imgJs.img(_urlsJs.ASSET_URLS['../sprites/boss-die_192x256.png']),
            lookup: _imgJs.img(_urlsJs.ASSET_URLS['../sprites/boss-lookup_192x256.png']),
            move: _imgJs.img(_urlsJs.ASSET_URLS['../sprites/boss-move_204x256.png']),
            still: _imgJs.img(_urlsJs.ASSET_URLS['../sprites/boss-still_204x256.png'])
        };
        this.lastAttacked = 0;
        this.recalculateModeAt = 0;
    }
    draw() {
        let img;
        this.width = 204;
        img = this.images.move;
        if (_phaseManagerJs.phaseManager.phase === _phaseManagerJs.PHASES.bossdying) {
            this.width = 192;
            img = this.images.die;
        } else if (this.mode === 'attack') img = this.images.attack;
        else if (this.mode === 'still') img = this.images.still;
        else if (this.top > _playerJs.player.bottom) {
            this.width = 192;
            img = this.images.lookup;
        }
        if (this.facingRight) _canvasJs.c.drawImage(img, this.localLeft, this.localTop, this.width, this.height);
        else {
            _canvasJs.c.save();
            _canvasJs.c.scale(-1, 1);
            _canvasJs.c.drawImage(img, -1 * this.localRight, this.localTop, this.width, this.height);
            _canvasJs.c.restore();
        }
    }
    update() {
        if (_phaseManagerJs.phaseManager.phase === _phaseManagerJs.PHASES.end) return;
        this.draw();
        if (_phaseManagerJs.phaseManager.phase === _phaseManagerJs.PHASES.bossdying) return;
        if (_playerJs.player.left > _constsJs.ATTACKZONE_LEFT && _playerJs.player.right < _constsJs.ATTACKZONE_RIGHT) {
            if (_phaseManagerJs.phaseManager.phase === _phaseManagerJs.PHASES.ropeburning || _phaseManagerJs.phaseManager.phase === _phaseManagerJs.PHASES.ropefalling || _playerJs.player.bottom <= _constsJs.RAFTERS_BOTTOM && (_playerJs.player.left < boss.left || _playerJs.player.right > boss.right)) this.mode = 'move';
            else if (_timeManagerJs.timeManager.now > this.recalculateModeAt) {
                this.recalculateModeAt = _timeManagerJs.timeManager.now + _constsJs.BOSS_MAXMODEDURATION * Math.random();
                this.mode = [
                    'move',
                    'attack',
                    'still'
                ][Math.floor(3 * Math.random())];
            }
        } else this.mode = 'still';
        this.facingRight = _playerJs.player.center > this.center;
        switch(this.mode){
            case 'attack':
                if (_timeManagerJs.timeManager.now > this.lastAttacked + _constsJs.BOSS_ATTACKINTERVAL) {
                    _lasersJs.lasers.add({
                        left: this.facingRight ? this.right - 32 : this.left + 16,
                        top: this.top + 108
                    });
                    this.lastAttacked = _timeManagerJs.timeManager.now;
                }
                break;
            case 'move':
                if (this.facingRight && this.right <= _constsJs.BOSS_MAXRIGHT) this.x += _constsJs.BOSS_SPEED;
                else if (!this.facingRight && this.left >= _constsJs.BOSS_MAXLEFT) this.x -= _constsJs.BOSS_SPEED;
        }
    }
}
const boss = new Boss();

},{"./canvas.js":"eTVCG","./consts.js":"3GOLi","./coordinates.js":"1Przq","./player.js":"c37gX","./phase-manager.js":"4n7ZT","./lasers.js":"jIbrz","./time-manager.js":"lLX8e","./img.js":"344AO","./urls.js":"cCez6","@parcel/transformer-js/src/esmodule-helpers.js":"jRKQF"}],"3GOLi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "COURSE_WIDTH", ()=>COURSE_WIDTH
);
parcelHelpers.export(exports, "COURSE_HEIGHT", ()=>COURSE_HEIGHT
);
parcelHelpers.export(exports, "BOSS_SPEED", ()=>BOSS_SPEED
);
parcelHelpers.export(exports, "BOSS_MAXLEFT", ()=>BOSS_MAXLEFT
);
parcelHelpers.export(exports, "BOSS_MAXRIGHT", ()=>BOSS_MAXRIGHT
);
parcelHelpers.export(exports, "ATTACKZONE_LEFT", ()=>ATTACKZONE_LEFT
);
parcelHelpers.export(exports, "ATTACKZONE_RIGHT", ()=>ATTACKZONE_RIGHT
);
parcelHelpers.export(exports, "RAFTERS_BOTTOM", ()=>RAFTERS_BOTTOM
);
parcelHelpers.export(exports, "BOSS_ATTACKINTERVAL", ()=>BOSS_ATTACKINTERVAL
);
parcelHelpers.export(exports, "BOSS_MAXMODEDURATION", ()=>BOSS_MAXMODEDURATION
);
parcelHelpers.export(exports, "SHOW_GRIDLINES", ()=>SHOW_GRIDLINES
);
parcelHelpers.export(exports, "SHOW_PLATFORMS", ()=>SHOW_PLATFORMS
);
parcelHelpers.export(exports, "SHOW_DEBUGMENU", ()=>SHOW_DEBUGMENU
);
parcelHelpers.export(exports, "DEBUG_DELAY", ()=>DEBUG_DELAY
);
parcelHelpers.export(exports, "PLAYER_GRAVITY", ()=>PLAYER_GRAVITY
);
parcelHelpers.export(exports, "WALKING_SPEED", ()=>WALKING_SPEED
);
parcelHelpers.export(exports, "JUMP_SPEED", ()=>JUMP_SPEED
);
parcelHelpers.export(exports, "CHANDELIER_GRAVITY", ()=>CHANDELIER_GRAVITY
);
parcelHelpers.export(exports, "LASER_SPEED", ()=>LASER_SPEED
);
parcelHelpers.export(exports, "LASER_DURATION", ()=>LASER_DURATION
);
parcelHelpers.export(exports, "AXE_SPEED_Y", ()=>AXE_SPEED_Y
);
parcelHelpers.export(exports, "AXE_SPEED_X", ()=>AXE_SPEED_X
);
parcelHelpers.export(exports, "AXE_GRAVITY", ()=>AXE_GRAVITY
);
parcelHelpers.export(exports, "PLAYER_ATTACKINTERVAL", ()=>PLAYER_ATTACKINTERVAL
);
parcelHelpers.export(exports, "VOLUME", ()=>VOLUME
);
const COURSE_WIDTH = 5120;
const COURSE_HEIGHT = 960;
const BOSS_SPEED = 2;
const BOSS_MAXLEFT = 3840;
const BOSS_MAXRIGHT = 4640;
const ATTACKZONE_LEFT = 3616;
const ATTACKZONE_RIGHT = 4864;
const RAFTERS_BOTTOM = 320;
const BOSS_ATTACKINTERVAL = 150;
const BOSS_MAXMODEDURATION = 2000;
const SHOW_GRIDLINES = false;
const SHOW_PLATFORMS = false;
const SHOW_DEBUGMENU = false;
const DEBUG_DELAY = 0;
const PLAYER_GRAVITY = 2.1 / 900;
const WALKING_SPEED = 8 / 30;
const JUMP_SPEED = 25 / 30;
const CHANDELIER_GRAVITY = .001;
const LASER_SPEED = 3;
const LASER_DURATION = 2000;
const AXE_SPEED_Y = .7;
const AXE_SPEED_X = 7 / 30;
const AXE_GRAVITY = .1 / 30;
const PLAYER_ATTACKINTERVAL = 150;
const VOLUME = .2;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jRKQF"}],"c37gX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Player", ()=>Player
);
parcelHelpers.export(exports, "player", ()=>player
);
var _audioManagerJs = require("./audio-manager.js");
var _axesJs = require("./axes.js");
var _canvasJs = require("./canvas.js");
var _constsJs = require("./consts.js");
var _coordinatesJs = require("./coordinates.js");
var _flamesJs = require("./flames.js");
var _bossJs = require("./boss.js");
var _framesJs = require("./frames.js");
var _phaseManagerJs = require("./phase-manager.js");
var _platformsJs = require("./platforms.js");
var _plumesJs = require("./plumes.js");
var _timeManagerJs = require("./time-manager.js");
var _imgJs = require("./img.js");
var _urlsJs = require("./urls.js");
class KeyManager {
    constructor(){
        this.keys = {
            right: {
                pressed: false
            },
            left: {
                pressed: false
            },
            jump: {
                pressed: false
            },
            attack: {
                pressed: false
            }
        };
        const jump = ()=>{
            if (!player.stunned && player.velocity.y === 0) {
                player.velocity.y -= _constsJs.JUMP_SPEED;
                _audioManagerJs.audioManager.playJumpSound();
            }
        };
        const startRight = ()=>{
            if (!player.stunned) {
                this.keys.right.pressed = true;
                player.facingRight = true;
            }
        };
        const stopRight = ()=>this.keys.right.pressed = false
        ;
        const startLeft = ()=>{
            if (!player.stunned) {
                this.keys.left.pressed = true;
                player.facingRight = false;
            }
        };
        const stopLeft = ()=>this.keys.left.pressed = false
        ;
        const attack = ()=>{
            if (!player.stunned && _timeManagerJs.timeManager.now > player.lastAttack + _constsJs.PLAYER_ATTACKINTERVAL) player.attack();
        };
        addEventListener('keydown', (e)=>{
            if (_phaseManagerJs.phaseManager.phase >= _phaseManagerJs.PHASES.ropeburning) return;
            const fn = {
                ' ': jump,
                'ArrowUp': jump,
                'ArrowRight': startRight,
                'ArrowLeft': startLeft
            }[e.key];
            (fn ?? attack)();
        });
        addEventListener('keyup', (e)=>{
            const fn = {
                'ArrowRight': stopRight,
                'ArrowLeft': stopLeft
            }[e.key];
            fn?.();
        });
        const touch = matchMedia('(hover: none)').matches;
        if (touch) {
            const buttonsDiv = document.getElementById('buttons');
            buttonsDiv.style.display = 'flex';
            const rightBtn = document.getElementById('right');
            rightBtn.addEventListener('touchstart', startRight);
            rightBtn.addEventListener('touchend', stopRight);
            const leftBtn = document.getElementById('left');
            leftBtn.addEventListener('touchstart', startLeft);
            leftBtn.addEventListener('touchend', stopLeft);
            const jumpBtn = document.getElementById('jump');
            jumpBtn.addEventListener('touchstart', jump);
            const attackBtn = document.getElementById('attack');
            attackBtn.addEventListener('touchstart', attack);
        }
    }
}
const keys = new KeyManager();
class Player extends _coordinatesJs.Coordinates {
    constructor({ x , y  }){
        super({
            x,
            y,
            height: 36,
            width: 30
        });
        this.hasFlame = false;
        this.facingRight = true;
        /** px per frame */ this.velocity = {
            x: 0,
            y: 0
        };
        this.images = {
            fall: _imgJs.img(_urlsJs.ASSET_URLS['../sprites/player-fall_30x36.png']),
            hit: _imgJs.img(_urlsJs.ASSET_URLS['../sprites/player-hit_30x36.png']),
            jump: _imgJs.img(_urlsJs.ASSET_URLS['../sprites/player-jump_30x36.png']),
            still: _imgJs.img(_urlsJs.ASSET_URLS['../sprites/player-still_30x36.png']),
            throw: _imgJs.img(_urlsJs.ASSET_URLS['../sprites/player-throw_30x36.png']),
            walk1: _imgJs.img(_urlsJs.ASSET_URLS['../sprites/player-walk-1_30x36.png']),
            walk2: _imgJs.img(_urlsJs.ASSET_URLS['../sprites/player-walk-2_30x36.png']),
            walk3: _imgJs.img(_urlsJs.ASSET_URLS['../sprites/player-walk-3_30x36.png']),
            stick: _imgJs.img(_urlsJs.ASSET_URLS['../sprites/stick_30x6.png']),
            flame1: _imgJs.img(_urlsJs.ASSET_URLS['../sprites/flame-1_28x28.png']),
            flame2: _imgJs.img(_urlsJs.ASSET_URLS['../sprites/flame-2_28x28.png']),
            flame3: _imgJs.img(_urlsJs.ASSET_URLS['../sprites/flame-3_28x28.png'])
        };
        this.walkFrames = new _framesJs.Frames({
            fps: 12,
            images: [
                this.images.walk3,
                this.images.walk2,
                this.images.walk1
            ]
        });
        this.flameFrames = new _framesJs.Frames({
            fps: 12,
            images: [
                this.images.flame1,
                this.images.flame2,
                this.images.flame3
            ]
        });
        this.lastAttack = 0;
        this.lastHit = 0;
    }
    get flying() {
        return _timeManagerJs.timeManager.now - this.lastHit < 500;
    }
    get stunned() {
        return _timeManagerJs.timeManager.now - this.lastHit < 1500;
    }
    get blinking() {
        return _timeManagerJs.timeManager.now - this.lastHit < 2000;
    }
    get nextFrame() {
        return new _coordinatesJs.Coordinates({
            x: this.x + this.velocity.x * _timeManagerJs.timeManager.msPerFrame,
            y: this.y + this.velocity.y * _timeManagerJs.timeManager.msPerFrame,
            width: this.width,
            height: this.height
        });
    }
    attack() {
        this.hasFlame = false;
        this.lastAttack = new Date().valueOf();
        _axesJs.axes.add({
            left: this.left + 0.5 * this.width,
            top: this.top + 0.5 * this.height,
            shootRight: this.facingRight
        });
    }
    land() {
        _plumesJs.plumes.add({
            left: this.left - 43,
            bottom: this.bottom,
            facingRight: false
        });
        _plumesJs.plumes.add({
            left: this.right,
            bottom: this.bottom,
            facingRight: true
        });
    }
    hurtByBoss() {
        this.hasFlame = false;
        this.lastHit = new Date().valueOf();
        this.velocity.x = (this.facingRight ? -1 : 1) * _constsJs.JUMP_SPEED;
    }
    hurtByLaser() {
        this.hasFlame = false;
        if (!this.blinking) {
            this.velocity.y = -_constsJs.JUMP_SPEED;
            this.lastHit = new Date().valueOf();
        }
    }
    draw() {
        const torchOffset = {
            x: 0,
            y: 0
        };
        let img;
        if (this.flying) img = this.images.hit;
        else if (_timeManagerJs.timeManager.now - this.lastAttack < 100) img = this.images.throw;
        else if (this.velocity.y > 0) {
            img = this.images.fall;
            torchOffset.x = 1;
            torchOffset.y = -6;
        } else if (this.velocity.y < 0) {
            img = this.images.jump;
            torchOffset.x = 1;
        } else if (this.velocity.x !== 0) {
            img = this.walkFrames.get();
            torchOffset.x = 1;
        } else img = this.images.still;
        if (this.blinking) {
            const sinceHit = _timeManagerJs.timeManager.now - this.lastHit;
            if (sinceHit % 500 > 300) return;
        }
        if (this.facingRight) {
            _canvasJs.c.drawImage(img, this.localLeft, this.localTop, this.width, this.height);
            if (this.hasFlame) {
                _canvasJs.c.drawImage(this.images.stick, this.localLeft + 5 + torchOffset.x, this.localTop + 18 + torchOffset.y, 30, 6);
                _canvasJs.c.drawImage(this.flameFrames.get(), this.localLeft + 20 + torchOffset.x, this.localTop - 7 + torchOffset.y, 28, 28);
            }
        } else {
            _canvasJs.c.save();
            _canvasJs.c.scale(-1, 1);
            _canvasJs.c.drawImage(img, -1 * this.localRight, this.localTop, this.width, this.height);
            if (this.hasFlame) {
                _canvasJs.c.drawImage(this.images.stick, -this.localRight + 5 + torchOffset.x, this.localTop + 18 + torchOffset.y, 30, 6);
                _canvasJs.c.drawImage(this.flameFrames.get(), -this.localRight + 20 + torchOffset.x, this.localTop - 7 + torchOffset.y, 28, 28);
            }
            _canvasJs.c.restore();
        }
    }
    update() {
        // Update Y velocity
        this.velocity.y += _constsJs.PLAYER_GRAVITY * _timeManagerJs.timeManager.msPerFrame;
        // Update X velocity
        if (this.flying) this.velocity.x *= .9;
        else if (keys.keys.right.pressed) this.velocity.x = _constsJs.WALKING_SPEED;
        else if (keys.keys.left.pressed) this.velocity.x = -_constsJs.WALKING_SPEED;
        else this.velocity.x = 0;
        _platformsJs.platforms.forEach((platform)=>{
            if (this.right > platform.left && this.left < platform.right || this.nextFrame.right > platform.left && this.nextFrame.left < platform.right) {
                if (this.bottom <= platform.top && this.nextFrame.bottom >= platform.top) {
                    this.y = platform.y - this.height;
                    if (this.velocity.y > 0.1 * _timeManagerJs.timeManager.msPerFrame) this.land();
                    this.velocity.y = 0;
                } else if (this.top >= platform.bottom && this.nextFrame.top <= platform.bottom) {
                    this.y = platform.bottom;
                    this.velocity.y = 0;
                }
            }
            if (this.bottom > platform.top && this.top < platform.bottom || this.nextFrame.bottom > platform.top && this.nextFrame.top < platform.bottom) {
                if (this.right <= platform.left && this.nextFrame.right >= platform.left) {
                    this.x = platform.left - this.width;
                    this.velocity.x = 0;
                }
                if (this.left >= platform.right && this.nextFrame.left <= platform.right) {
                    this.x = platform.right;
                    this.velocity.x = 0;
                }
            }
        });
        this.x += this.velocity.x * _timeManagerJs.timeManager.msPerFrame;
        this.y += this.velocity.y * _timeManagerJs.timeManager.msPerFrame;
        if (!this.hasFlame) this.hasFlame = _flamesJs.flames.some((flame)=>this.intersects(flame)
        );
        this.draw();
        if (this.intersects(_bossJs.boss)) this.hurtByBoss();
    }
}
const player = new Player({
    x: 128,
    y: 0
}); //rope
 // export const player = new Player({
 //     x: 127 * 32,
 //     y: 8.5 * 32,
 // });
 //bottomright
 // export const player = new Player({
 //     x: 152 * 32,
 //     y: 23.5 * 32,
 // });

},{"./audio-manager.js":"37hFB","./axes.js":"41T7T","./canvas.js":"eTVCG","./consts.js":"3GOLi","./coordinates.js":"1Przq","./flames.js":"az6Mf","./boss.js":"X0joP","./frames.js":"1fIgI","./phase-manager.js":"4n7ZT","./platforms.js":"3XP2n","./plumes.js":"3IzEq","./time-manager.js":"lLX8e","./img.js":"344AO","./urls.js":"cCez6","@parcel/transformer-js/src/esmodule-helpers.js":"jRKQF"}],"37hFB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "audioManager", ()=>audioManager
);
var _urlsJs = require("./urls.js");
class EndCreditsMusic {
    constructor(){
        this.audio = new Audio(_urlsJs.ASSET_URLS['../sounds/now-youre-a-hero.mp3']);
        this.startTime = null;
    }
    play() {
        this.startTime = new Date().valueOf();
        this.audio.play();
    }
    set currentTime(value) {
        this.audio.currentTime = value;
        const date = new Date();
        date.setSeconds(date.getSeconds() - value);
        this.startTime = date.valueOf();
    }
    get currentTime() {
        if (this.startTime) return (new Date().valueOf() - this.startTime) / 1000;
        else return 0;
    }
}
class SFX {
    constructor(src){
        /** @type{HTMLAudioElement[]} */ this.cache = [];
        this.src = src;
    }
    play(volume) {
        let sound;
        const availableSoundInCache = this.cache.find((o)=>o.ended
        );
        if (availableSoundInCache) sound = availableSoundInCache;
        else {
            sound = new Audio(this.src);
            this.cache.push(sound);
        }
        sound.volume = volume;
        sound.play();
    }
}
class AudioManager {
    constructor(){
        this.volume = 1;
        this.tunnelMusic = new Audio(_urlsJs.ASSET_URLS['../sounds/tunnel.mp3']);
        this.tunnelMusic.loop = true;
        this.tunnelMusic.volume = this.volume;
        this.bossFightMusic = new Audio(_urlsJs.ASSET_URLS['../sounds/boss-fight.mp3']);
        this.bossFightMusic.loop = true;
        this.bossFightMusic.volume = this.volume;
        this.axeThrowSound = new SFX(_urlsJs.ASSET_URLS['../sounds/axe-throw.mp3']);
        this.ropeExplosionSound = new SFX(_urlsJs.ASSET_URLS['../sounds/rope-explosion.mp3']);
        this.bossExplosionSound = new SFX(_urlsJs.ASSET_URLS['../sounds/boss-explosion.mp3']);
        this.doorSlamSound = new SFX(_urlsJs.ASSET_URLS['../sounds/door-slam.mp3']);
        this.laserSound = new SFX(_urlsJs.ASSET_URLS['../sounds/eye-laser.mp3']);
        this.deathSound = new SFX(_urlsJs.ASSET_URLS['../sounds/death.mp3']);
        this.jumpSound = new SFX(_urlsJs.ASSET_URLS['../sounds/jump.mp3']);
        this.landSound = new SFX(_urlsJs.ASSET_URLS['../sounds/land.mp3']);
        this.endCreditsMusic = new EndCreditsMusic();
        this.volume0Btn = document.getElementById('volume-0');
        this.volume1Btn = document.getElementById('volume-1');
        this.volume0Btn.addEventListener('click', ()=>this.setVolume(0)
        );
        this.volume1Btn.addEventListener('click', ()=>this.setVolume(1)
        );
    }
    playAxeThrowSound() {
        this.axeThrowSound.play(this.volume);
    }
    playRopeExplosionSound() {
        this.ropeExplosionSound.play(this.volume);
    }
    playBossExplosionSound() {
        this.bossExplosionSound.play(this.volume);
    }
    playDoorslamSound() {
        this.doorSlamSound.play(this.volume);
    }
    playLaserSound() {
        this.laserSound.play(this.volume);
    }
    playDeathSound() {
        this.deathSound.play(this.volume);
    }
    playJumpSound() {
        this.jumpSound.play(this.volume);
    }
    playLandSound() {
        this.landSound.play(this.volume);
    }
    setVolume(volume) {
        this.volume = volume;
        this.tunnelMusic.volume = volume;
        this.bossFightMusic.volume = volume;
        this.endCreditsMusic.audio.volume = volume;
        if (this.volume > 0) {
            this.volume0Btn.classList.remove('hidden');
            this.volume1Btn.classList.add('hidden');
        } else {
            this.volume0Btn.classList.add('hidden');
            this.volume1Btn.classList.remove('hidden');
        }
    }
}
const audioManager = new AudioManager();

},{"./urls.js":"cCez6","@parcel/transformer-js/src/esmodule-helpers.js":"jRKQF"}],"cCez6":[function(require,module,exports) {
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

},{"5e29055134cf728e":"5emP5","cb06cd8dfb1f6b86":"48ohw","14051505ab82d018":"5Tcfx","72346e65da1a3b4a":"hK12P","c315bb0fb01bbe57":"79gMe","dfa673022b08cd1e":"6SfHo","5217c402b8d980ad":"dosWa","bad73e8fd4d18f0":"77j6v","79aef5c37c4884d6":"26TI4","ed80f316305bec25":"cmSGQ","f965ab77eb56b976":"2WER9","6d2316825c27d88e":"98Tku","aa4ac57ba8abbde4":"2XQFf","39e4690785d9e6b7":"lahaB","e25ca4c15d530666":"MOyIP","226e692ed5ed08d8":"98UjJ","bffb3bf61e5598bf":"7DC8I","cd666ff7bfd307c9":"2Gy7O","cda314662884549d":"3ZmBZ","7bb52930141fa4c8":"cvAQo","4122067cd53045fb":"j5Fi8","49dcfc25192540d2":"9VTbl","373fe718a772a5d":"c7f6B","a6e036d2a8cb8b97":"1LFvf","86b4a4b70c1f4e8f":"cB0Rt","e80d7327ba09c4e7":"kNao9","a218a2cd7b8237f1":"280XP","f538cda93e5e505b":"iZyme","b8fbce8ded11c530":"50M9I","3f5a1fe7bc226db6":"chUNk","d7bd9dd9319b272a":"jvUbn","4b6052bd007ae687":"77Mli","fa4fa1258801c790":"fxxEX","47f11608baa9a9b9":"9Fp9A","2f6dd958b5eac1d9":"cKsqV","3f38a386c47b05b0":"i5Hrz","d08db23e33335a80":"gB8Mx","817d6cbe68df9e8a":"2bwaY","a451b2c5fabcc2f2":"4SY76","d0c63ad5f0daa197":"eiFBH","8ded7f16183331e0":"6NMPQ","1fc5c97170736d5e":"lqMT7","728e07e032723cfd":"024Dn","20d091adcda6bfa2":"dEnw5","4ec585b0a81cdb6c":"imqnq","a24fa691472fb103":"7gXDK","fc30e16686cb571":"daRQq","6f2af5199b1885f":"4aXjJ","e372ba4ec6859c81":"33AoV","4d3c600875371924":"lsi0W","c50a94a855aa6bed":"12kHY","e96fb801a30e0bf8":"lCRN0","8d91a93242884f1a":"1GpeF","c1961420b84d5a0b":"knubs","235cdd0cbc114180":"65sZD","fbe37286818a3ed9":"jdPIL","2c1137990ecbd5b":"k9j0x","185e534bd2df7320":"54zFf","409aa6367b1d3a1e":"2Ev5n","74687a065e145f16":"1waw3","564e3d85b961c7a0":"2CH8t","a98ad6de15af377c":"5GiPY","e0bceaf8a624eb80":"hWVHQ","4225d4ecbc686a0a":"9F0uL","50e5bdcd1b4a23d6":"hzbME","a7b4a144fb4e169":"5ziWg","54b9dd92ebe1b35e":"gQYBf","9c45708c617a256a":"1XI2w","430f7406c999d8a9":"gdsIz","@parcel/transformer-js/src/esmodule-helpers.js":"jRKQF"}],"5emP5":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "up_/serviceworker.js" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"f7hvf":[function(require,module,exports) {
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

},{}],"48ohw":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "yhtbtr.bcc9ffc4.js" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"5Tcfx":[function(require,module,exports) {
module.exports = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";

},{}],"hK12P":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "axe-throw.c3dcef22.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"79gMe":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "boss-explosion.0bdf8842.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"6SfHo":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "boss-fight.942b110e.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"dosWa":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "death.664f3da7.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"77j6v":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "door-slam.cc0859d7.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"26TI4":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "eye-laser.022300db.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"cmSGQ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "jump.298cc5df.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"2WER9":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "land.dc769343.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"98Tku":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "now-youre-a-hero.8d528aa0.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"2XQFf":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "rope-explosion.9049fa72.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"lahaB":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "tunnel.957f5cbf.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"MOyIP":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "axe_18x18.f129016c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"98UjJ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "axe_999_64x64.5ae113fe.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"7DC8I":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "back-door_32x64.3880d100.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"2Gy7O":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "boss-attack_204x256.ac09bf9b.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"3ZmBZ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "boss-die_192x256.58ac59e7.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"cvAQo":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "boss-lookup_192x256.ec55cc2f.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"j5Fi8":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "boss-move_204x256.85990b7f.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"9VTbl":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "boss-still_204x256.1ad2256e.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"c7f6B":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "chandelier_160x96.fe36f821.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"1LFvf":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "credits-1_200x200.6307e7d8.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"cB0Rt":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "credits-2_200x200.33fd326c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"kNao9":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "credits-3_200x200.f550499b.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"280XP":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "credits-4_200x200.c77f12aa.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"iZyme":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "credits-bg_704x512.73e18059.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"50M9I":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "explosion-1_36x36.d38de4de.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"chUNk":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "explosion-2_36x36.4c857b04.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"jvUbn":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "explosion-3_36x36.cdf2a231.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"77Mli":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "explosion-4_36x36.0e626b09.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"fxxEX":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "explosion-5_36x36.7806ec9d.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"9Fp9A":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "explosion-6_36x36.48698a39.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"cKsqV":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "explosion-7_36x36.655f4710.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"i5Hrz":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "flame-sprites.6036e7d9.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"gB8Mx":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "flame-1_28x28.f5cd5017.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"2bwaY":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "flame-2_28x28.1e2b0ecb.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"4SY76":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "flame-3_28x28.3348cab1.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"eiFBH":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "info-circle_999_64x64.d29f52c8.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"6NMPQ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "laser-1_20x20.96999082.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"lqMT7":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "laser-2_20x20.380b23b7.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"024Dn":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "laser-3_20x20.51663a5b.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"dEnw5":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "laser-4_20x20.63933777.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"imqnq":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "laser-5_20x20.cd0ee708.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"7gXDK":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "laser-6_20x20.36fb4920.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"daRQq":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "laser-7_20x20.c244b80a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"4aXjJ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "page-bg_32x32.08ff5a41.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"33AoV":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "player-fall_30x36.165fe1be.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"lsi0W":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "player-hit_30x36.9e7b8033.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"12kHY":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "player-jump_30x36.059c702a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"lCRN0":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "player-still_30x36.e0f76c40.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"1GpeF":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "player-throw_30x36.2a059e69.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"knubs":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "player-walk-1_30x36.698d62c7.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"65sZD":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "player-walk-2_30x36.0977c7f6.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"jdPIL":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "player-walk-3_30x36.6641d79f.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"k9j0x":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "plume-1_43x21.e31a005a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"54zFf":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "plume-2_43x21.f0fc7651.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"2Ev5n":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "plume-3_43x21.2bbc28bc.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"1waw3":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "plume-4_43x21.2750b00e.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"2CH8t":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "plume-5_43x21.bc5c5a57.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"5GiPY":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "plume-6_43x21.a37a9f3a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"hWVHQ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "rope_8x192.2c7b54bc.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"9F0uL":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "stick_30x6.75865b20.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"hzbME":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "up-arrow_999_64x64.9d9eae33.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"5ziWg":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "volume-0_999_64x64.61762cfb.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"gQYBf":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "volume-1_999_64x64.f19b14b1.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"1XI2w":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "bg.20eef395.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"gdsIz":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1ucj6') + "rope.b3694ca9.png" + "?" + Date.now();

},{"./helpers/bundle-url":"f7hvf"}],"az6Mf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Flame", ()=>Flame
);
parcelHelpers.export(exports, "flames", ()=>flames
);
var _coordinatesJs = require("./coordinates.js");
var _timeManagerJs = require("./time-manager.js");
var _canvasJs = require("./canvas.js");
var _imgJs = require("./img.js");
var _urlsJs = require("./urls.js");
class Flame extends _coordinatesJs.Coordinates {
    constructor({ left , top  }){
        super({
            x: left,
            y: top,
            width: 32,
            height: 64
        });
        this.img = _imgJs.img(_urlsJs.ASSET_URLS['../sprites/flame-sprites.png']);
        this.framesPerSecond = 10;
        this.frameCount = 3;
        this.frameIndex = 0;
        this.frameUpdated = new Date().valueOf();
    }
    draw() {
        if (_timeManagerJs.timeManager.now - this.frameUpdated > 1000 / this.framesPerSecond) {
            this.frameIndex = (this.frameIndex + 1) % this.frameCount;
            this.frameUpdated = _timeManagerJs.timeManager.now;
        }
        const sx = this.frameIndex * 32;
        const sy = 0;
        const sw = this.width;
        const sh = this.height;
        const dx = this.localLeft;
        const dy = this.localTop;
        const dw = this.width;
        const dh = this.height;
        this.img && _canvasJs.c.drawImage(this.img, sx, sy, sw, sh, dx, dy, dw, dh);
    }
}
const flames = [
    new Flame({
        left: 3488,
        top: 576
    }),
    new Flame({
        left: 3552,
        top: 416
    }),
    new Flame({
        left: 3488,
        top: 256
    }),
    new Flame({
        left: 4960,
        top: 576
    }),
    new Flame({
        left: 4896,
        top: 416
    }),
    new Flame({
        left: 4960,
        top: 256
    }), 
];

},{"./coordinates.js":"1Przq","./time-manager.js":"lLX8e","./canvas.js":"eTVCG","./img.js":"344AO","./urls.js":"cCez6","@parcel/transformer-js/src/esmodule-helpers.js":"jRKQF"}],"lLX8e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeManager", ()=>timeManager
);
const timeManager = {
    now: new Date().valueOf(),
    msPerFrame: 1000 / 60
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jRKQF"}],"344AO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "img", ()=>img
);
function img(src) {
    const result = new Image();
    result.src = src;
    return result;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jRKQF"}],"1fIgI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Frames", ()=>Frames
);
class Frames {
    constructor({ images , fps , loop  }){
        this.fps = fps;
        this.images = images;
        this.frameUpdated = new Date().valueOf();
        this.currentIndex = 0;
    }
    get() {
        const now = new Date().valueOf();
        if (now - this.frameUpdated > 1000 / this.fps) {
            this.frameUpdated = now;
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        }
        return this.images[this.currentIndex];
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jRKQF"}],"4n7ZT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PHASES", ()=>PHASES
);
parcelHelpers.export(exports, "phaseManager", ()=>phaseManager
);
var _healthbarJs = require("./healthbar.js");
var _platformsJs = require("./platforms.js");
var _explosionsJs = require("./explosions.js");
var _canvasJs = require("./canvas.js");
var _coordinatesJs = require("./coordinates.js");
var _chandelierJs = require("./chandelier.js");
var _ropeJs = require("./rope.js");
var _audioManagerJs = require("./audio-manager.js");
var _buttonManagerJs = require("./button-manager.js");
var _imgJs = require("./img.js");
var _urlsJs = require("./urls.js");
async function wait(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms)
    );
}
const PHASES = {
    clicktostart: 0,
    start: 1,
    tunnel: 2,
    bossfight: 3,
    ropeburning: 4,
    ropefalling: 5,
    bossdying: 6,
    end: 7
};
class PhaseManager {
    constructor(){
        this.backDoorImage = _imgJs.img(_urlsJs.ASSET_URLS['../sprites/back-door_32x64.png']);
        this.showBackDoor = false;
        this.phase = PHASES.clicktostart;
    }
    startStartPhase() {
        if (this.phase >= PHASES.start) return;
        this.phase = PHASES.start;
        _buttonManagerJs.buttonManager.show();
    }
    startTunnelPhase() {
        if (this.phase >= PHASES.tunnel) return;
        _audioManagerJs.audioManager.tunnelMusic.play();
        this.phase = PHASES.tunnel;
    }
    startBossFightPhase() {
        if (this.phase >= PHASES.bossfight) return;
        _audioManagerJs.audioManager.tunnelMusic.pause();
        _audioManagerJs.audioManager.bossFightMusic.play();
        this.showBackDoor = true;
        _healthbarJs.healthBar.show = true;
        _platformsJs.platforms.push(new _platformsJs.LeftPlatform({
            right: 3456,
            bottom: 864,
            top: 800
        }));
        _explosionsJs.explosions.add({
            left: 3422,
            top: 798
        });
        _explosionsJs.explosions.add({
            left: 3422,
            top: 830
        });
        _audioManagerJs.audioManager.playDoorslamSound();
        this.phase = PHASES.bossfight;
    }
    async startRopeBurningPhase() {
        if (this.phase >= PHASES.ropeburning) return;
        _audioManagerJs.audioManager.bossFightMusic.pause();
        this.phase = PHASES.ropeburning;
        _explosionsJs.explosions.add({
            left: 4224,
            top: 192
        });
        _audioManagerJs.audioManager.playRopeExplosionSound();
        await wait(200);
        _explosionsJs.explosions.add({
            left: 4224,
            top: 224
        });
        _audioManagerJs.audioManager.playRopeExplosionSound();
        await wait(200);
        _explosionsJs.explosions.add({
            left: 4224,
            top: 256
        });
        _audioManagerJs.audioManager.playRopeExplosionSound();
        await wait(200);
        _explosionsJs.explosions.add({
            left: 4224,
            top: 288
        });
        _audioManagerJs.audioManager.playRopeExplosionSound();
        await wait(200);
        _explosionsJs.explosions.add({
            left: 4224,
            top: 320
        });
        _audioManagerJs.audioManager.playRopeExplosionSound();
        this.startRopeFallingPhase();
    }
    async startRopeFallingPhase() {
        if (this.phase >= PHASES.ropefalling) return;
        this.phase = PHASES.ropefalling;
        _chandelierJs.chandelier.dropped = true;
    }
    async startBossDyingPhase() {
        if (this.phase >= PHASES.bossdying) return;
        this.phase = PHASES.bossdying;
        _healthbarJs.healthBar.die();
        _chandelierJs.chandelier.show = false;
        _ropeJs.rope.show = false;
        // #region Explosions
        _explosionsJs.explosions.add({
            left: 4291,
            top: 642
        });
        _explosionsJs.explosions.add({
            left: 4283,
            top: 676
        });
        _explosionsJs.explosions.add({
            left: 4264,
            top: 681
        });
        _explosionsJs.explosions.add({
            left: 4282,
            top: 688
        });
        _explosionsJs.explosions.add({
            left: 4186,
            top: 621
        });
        _explosionsJs.explosions.add({
            left: 4194,
            top: 649
        });
        _explosionsJs.explosions.add({
            left: 4203,
            top: 642
        });
        _explosionsJs.explosions.add({
            left: 4223,
            top: 664
        });
        _explosionsJs.explosions.add({
            left: 4219,
            top: 668
        });
        _explosionsJs.explosions.add({
            left: 4203,
            top: 686
        });
        _explosionsJs.explosions.add({
            left: 4200,
            top: 670
        });
        _explosionsJs.explosions.add({
            left: 4200,
            top: 700
        });
        _explosionsJs.explosions.add({
            left: 4205,
            top: 792
        });
        _explosionsJs.explosions.add({
            left: 4248,
            top: 730
        });
        _explosionsJs.explosions.add({
            left: 4154,
            top: 686
        });
        _explosionsJs.explosions.add({
            left: 4126,
            top: 725
        });
        _explosionsJs.explosions.add({
            left: 4214,
            top: 598
        });
        _audioManagerJs.audioManager.playDeathSound();
        await wait(300);
        _explosionsJs.explosions.add({
            left: 4159,
            top: 654
        });
        _audioManagerJs.audioManager.playBossExplosionSound();
        await wait(300);
        _explosionsJs.explosions.add({
            left: 4161,
            top: 706
        });
        _audioManagerJs.audioManager.playBossExplosionSound();
        await wait(300);
        _explosionsJs.explosions.add({
            left: 4274,
            top: 851
        });
        _audioManagerJs.audioManager.playBossExplosionSound();
        await wait(300);
        _explosionsJs.explosions.add({
            left: 4206,
            top: 734
        });
        _audioManagerJs.audioManager.playBossExplosionSound();
        await wait(300);
        _explosionsJs.explosions.add({
            left: 4192,
            top: 733
        });
        _audioManagerJs.audioManager.playBossExplosionSound();
        await wait(300);
        _explosionsJs.explosions.add({
            left: 4203,
            top: 732
        });
        _audioManagerJs.audioManager.playBossExplosionSound();
        await wait(300);
        _explosionsJs.explosions.add({
            left: 4252,
            top: 546
        });
        _audioManagerJs.audioManager.playBossExplosionSound();
        await wait(300);
        // #endregion
        this.startEndPhase();
    }
    async startEndPhase() {
        if (this.phase >= PHASES.end) return;
        this.phase = PHASES.end;
        // #region Explosions
        _explosionsJs.explosions.add({
            left: 4237,
            top: 560
        });
        _explosionsJs.explosions.add({
            left: 4205,
            top: 596
        });
        _explosionsJs.explosions.add({
            left: 4251,
            top: 603
        });
        _explosionsJs.explosions.add({
            left: 4231,
            top: 642
        });
        _explosionsJs.explosions.add({
            left: 4295,
            top: 644
        });
        _explosionsJs.explosions.add({
            left: 4249,
            top: 656
        });
        _explosionsJs.explosions.add({
            left: 4243,
            top: 681
        });
        _explosionsJs.explosions.add({
            left: 4203,
            top: 684
        });
        _explosionsJs.explosions.add({
            left: 4266,
            top: 684
        });
        _explosionsJs.explosions.add({
            left: 4219,
            top: 692
        });
        _explosionsJs.explosions.add({
            left: 4215,
            top: 700
        });
        _explosionsJs.explosions.add({
            left: 4293,
            top: 730
        });
        _explosionsJs.explosions.add({
            left: 4126,
            top: 740
        });
        _explosionsJs.explosions.add({
            left: 4187,
            top: 746
        });
        _explosionsJs.explosions.add({
            left: 4224,
            top: 750
        });
        _explosionsJs.explosions.add({
            left: 4199,
            top: 767
        });
        _explosionsJs.explosions.add({
            left: 4176,
            top: 768
        });
        _explosionsJs.explosions.add({
            left: 4296,
            top: 813
        });
        _explosionsJs.explosions.add({
            left: 4161,
            top: 820
        });
        _explosionsJs.explosions.add({
            left: 4179,
            top: 844
        });
        _explosionsJs.explosions.add({
            left: 4180,
            top: 882
        });
        _audioManagerJs.audioManager.playDeathSound();
        // #endregion
        await wait(2000);
        _audioManagerJs.audioManager.endCreditsMusic.play();
    }
    drawBackDoor() {
        _canvasJs.c.drawImage(this.backDoorImage, 3424 - _coordinatesJs.offset.x, 800 - _coordinatesJs.offset.y, 32, 64);
    }
}
const phaseManager = new PhaseManager();

},{"./healthbar.js":"3ubdR","./platforms.js":"3XP2n","./explosions.js":"lgZ6l","./canvas.js":"eTVCG","./coordinates.js":"1Przq","./chandelier.js":"hHt1H","./rope.js":"cbVoA","./audio-manager.js":"37hFB","./button-manager.js":"kZiUA","./img.js":"344AO","./urls.js":"cCez6","@parcel/transformer-js/src/esmodule-helpers.js":"jRKQF"}],"3ubdR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "healthBar", ()=>healthBar
);
var _canvasJs = require("./canvas.js");
class HealthBar {
    constructor(){
        this.health = 1;
        this.deathTime = null;
        this.show = false;
    }
    die() {
        this.deathTime = new Date().valueOf();
    }
    update() {
        if (!this.show) return;
        if (this.deathTime) {
            if (this.health > 0.0001) this.health = 1 * Math.exp(-(new Date().valueOf() - this.deathTime) / 200);
        } else this.health = 1 - 0.99 * (1 - this.health);
        this.draw();
    }
    draw() {
        _canvasJs.c.fillStyle = 'white';
        _canvasJs.c.fillRect(16, 16, _canvasJs.FRAME_WIDTH - 32, 20);
        _canvasJs.c.fillRect(16, 32, 154, 24);
        _canvasJs.c.fillStyle = 'black';
        _canvasJs.c.fillRect(18, 18, _canvasJs.FRAME_WIDTH - 36, 16);
        _canvasJs.c.fillRect(18, 30, 150, 24);
        _canvasJs.c.fillStyle = 'red';
        _canvasJs.c.fillRect(20, 20, (_canvasJs.FRAME_WIDTH - 40) * this.health, 12);
        _canvasJs.c.fillStyle = 'white';
        _canvasJs.c.textAlign = 'left';
        _canvasJs.c.font = 'bold 14px Inter';
        _canvasJs.c.fillText('Grinning Colossus', 28, 48);
    }
}
const healthBar = new HealthBar();

},{"./canvas.js":"eTVCG","@parcel/transformer-js/src/esmodule-helpers.js":"jRKQF"}],"3XP2n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LeftPlatform", ()=>LeftPlatform
);
parcelHelpers.export(exports, "platforms", ()=>platforms
);
var _coordinatesJs = require("./coordinates.js");
var _canvasJs = require("./canvas.js");
class Platform extends _coordinatesJs.Coordinates {
    constructor({ left , top , right , bottom  }){
        super({
            x: left,
            y: top,
            width: right - left,
            height: bottom - top
        });
    }
    draw() {
        _canvasJs.c.fillStyle = '#00f3';
        _canvasJs.c.fillRect(this.localLeft, this.localTop, this.width, this.height);
    }
}
class LeftPlatform extends Platform {
    constructor({ top , right , bottom  }){
        super({
            left: right - 32,
            top,
            right,
            bottom
        });
    }
}
class RightPlatform extends Platform {
    constructor({ left , top , bottom  }){
        super({
            left,
            top,
            right: left + 32,
            bottom
        });
    }
}
class BottomPlatform extends Platform {
    constructor({ left , top , right  }){
        super({
            left,
            top,
            right,
            bottom: top + 32
        });
    }
}
class TopPlatform extends Platform {
    constructor({ left , right , bottom  }){
        super({
            left,
            top: bottom - 32,
            right,
            bottom
        });
    }
}
const platforms = [
    // Tunnel
    new RightPlatform({
        left: 192,
        top: 0,
        bottom: 480
    }),
    new LeftPlatform({
        top: 0,
        right: 128,
        bottom: 576
    }),
    new TopPlatform({
        left: 192,
        right: 1536,
        bottom: 480
    }),
    new BottomPlatform({
        left: 96,
        top: 544,
        right: 1632
    }),
    new RightPlatform({
        left: 1600,
        top: 416,
        bottom: 576
    }),
    new LeftPlatform({
        top: 320,
        right: 1536,
        bottom: 480
    }),
    new TopPlatform({
        left: 1504,
        right: 2016,
        bottom: 352
    }),
    new BottomPlatform({
        left: 1600,
        top: 416,
        right: 1920
    }),
    new RightPlatform({
        left: 1984,
        top: 320,
        bottom: 480
    }),
    new LeftPlatform({
        top: 416,
        right: 1920,
        bottom: 576
    }),
    new TopPlatform({
        left: 1984,
        right: 2688,
        bottom: 480
    }),
    new BottomPlatform({
        left: 1888,
        top: 544,
        right: 2592
    }),
    new RightPlatform({
        left: 2656,
        top: 448,
        bottom: 640
    }),
    new LeftPlatform({
        top: 544,
        right: 2592,
        bottom: 736
    }),
    new TopPlatform({
        left: 2656,
        right: 2944,
        bottom: 640
    }),
    new BottomPlatform({
        left: 2560,
        top: 704,
        right: 2848
    }),
    new RightPlatform({
        left: 2912,
        top: 608,
        bottom: 800
    }),
    new LeftPlatform({
        top: 704,
        right: 2848,
        bottom: 896
    }),
    new TopPlatform({
        left: 2912,
        right: 3488,
        bottom: 800
    }),
    new BottomPlatform({
        left: 2816,
        top: 864,
        right: 5056
    }),
    // Left wall
    new LeftPlatform({
        top: 160,
        right: 3456,
        bottom: 768
    }),
    new RightPlatform({
        left: 3616,
        top: 384,
        bottom: 608
    }),
    new RightPlatform({
        top: 704,
        left: 3616,
        bottom: 800
    }),
    new Platform({
        left: 3616,
        top: 768,
        right: 3744,
        bottom: 800
    }),
    new Platform({
        left: 3520,
        top: 672,
        right: 3552,
        bottom: 704
    }),
    new Platform({
        left: 3552,
        top: 640,
        right: 3584,
        bottom: 672
    }),
    new Platform({
        left: 3584,
        top: 608,
        right: 3616,
        bottom: 640
    }),
    new Platform({
        left: 3520,
        top: 512,
        right: 3552,
        bottom: 544
    }),
    new Platform({
        left: 3488,
        top: 480,
        right: 3520,
        bottom: 512
    }),
    new Platform({
        left: 3456,
        top: 448,
        right: 3488,
        bottom: 480
    }),
    new Platform({
        left: 3520,
        top: 352,
        right: 3552,
        bottom: 384
    }),
    new Platform({
        left: 3552,
        top: 320,
        right: 3584,
        bottom: 352
    }),
    new Platform({
        left: 3584,
        top: 288,
        right: 3616,
        bottom: 320
    }),
    new Platform({
        left: 3584,
        top: 288,
        right: 3680,
        bottom: 320
    }),
    new Platform({
        left: 3424,
        top: 160,
        right: 3680,
        bottom: 192
    }),
    new Platform({
        left: 3520,
        top: 352,
        right: 3648,
        bottom: 384
    }),
    new Platform({
        left: 3456,
        top: 512,
        right: 3552,
        bottom: 544
    }),
    new Platform({
        left: 3520,
        top: 672,
        right: 3616,
        bottom: 704
    }),
    // Right wall
    new TopPlatform({
        left: 4736,
        right: 4864,
        bottom: 800
    }),
    new RightPlatform({
        left: 4736,
        top: 768,
        bottom: 800
    }),
    new BottomPlatform({
        left: 4736,
        top: 768,
        right: 4800
    }),
    new RightPlatform({
        left: 4928,
        top: 832,
        bottom: 864
    }),
    new RightPlatform({
        left: 4960,
        top: 800,
        bottom: 832
    }),
    new RightPlatform({
        left: 4992,
        top: 768,
        bottom: 800
    }),
    new RightPlatform({
        left: 5024,
        top: 544,
        bottom: 768
    }),
    new BottomPlatform({
        left: 4928,
        right: 4960,
        top: 832
    }),
    new BottomPlatform({
        left: 4960,
        right: 4992,
        top: 800
    }),
    new BottomPlatform({
        left: 4992,
        right: 5024,
        top: 768
    }),
    new LeftPlatform({
        right: 4864,
        top: 704,
        bottom: 800
    }),
    new TopPlatform({
        left: 4864,
        right: 4960,
        bottom: 704
    }),
    new LeftPlatform({
        right: 4960,
        top: 672,
        bottom: 704
    }),
    new LeftPlatform({
        right: 4928,
        top: 640,
        bottom: 672
    }),
    new LeftPlatform({
        right: 4896,
        top: 608,
        bottom: 640
    }),
    new BottomPlatform({
        left: 4864,
        right: 4896,
        top: 608
    }),
    new BottomPlatform({
        left: 4896,
        right: 4928,
        top: 640
    }),
    new BottomPlatform({
        left: 4928,
        right: 4960,
        top: 672
    }),
    new LeftPlatform({
        right: 4864,
        top: 384,
        bottom: 608
    }),
    new RightPlatform({
        left: 4928,
        top: 512,
        bottom: 544
    }),
    new RightPlatform({
        left: 4960,
        top: 480,
        bottom: 512
    }),
    new RightPlatform({
        left: 4992,
        top: 448,
        bottom: 480
    }),
    new RightPlatform({
        left: 5024,
        top: 192,
        bottom: 448
    }),
    new BottomPlatform({
        left: 4928,
        right: 4960,
        top: 512
    }),
    new BottomPlatform({
        left: 4960,
        right: 4992,
        top: 480
    }),
    new BottomPlatform({
        left: 4992,
        right: 5024,
        top: 448
    }),
    new TopPlatform({
        left: 4928,
        right: 5024,
        bottom: 544
    }),
    new TopPlatform({
        left: 4864,
        right: 4960,
        bottom: 384
    }),
    new LeftPlatform({
        right: 4960,
        top: 352,
        bottom: 384
    }),
    new LeftPlatform({
        right: 4928,
        top: 320,
        bottom: 352
    }),
    new LeftPlatform({
        right: 4896,
        top: 288,
        bottom: 320
    }),
    new BottomPlatform({
        left: 4800,
        right: 4896,
        top: 288
    }),
    new BottomPlatform({
        left: 4896,
        right: 4928,
        top: 320
    }),
    new BottomPlatform({
        left: 4928,
        right: 4960,
        top: 352
    }),
    // Ceiling
    new Platform({
        left: 3680,
        top: 320,
        right: 3744,
        bottom: 352
    }),
    new Platform({
        left: 3808,
        top: 320,
        right: 3872,
        bottom: 352
    }),
    new Platform({
        left: 3936,
        top: 320,
        right: 4000,
        bottom: 352
    }),
    new Platform({
        left: 4064,
        top: 320,
        right: 4128,
        bottom: 352
    }),
    new Platform({
        left: 4352,
        top: 320,
        right: 4416,
        bottom: 352
    }),
    new Platform({
        left: 4480,
        top: 320,
        right: 4544,
        bottom: 352
    }),
    new Platform({
        left: 4608,
        top: 320,
        right: 4672,
        bottom: 352
    }),
    new Platform({
        left: 4736,
        top: 320,
        right: 4800,
        bottom: 352
    }),
    new TopPlatform({
        left: 4800,
        right: 5024,
        bottom: 192
    }),
    new TopPlatform({
        left: 3680,
        right: 4800,
        bottom: 160
    }),
    new TopPlatform({
        left: 4224,
        right: 4256,
        bottom: 192
    }),
    new LeftPlatform({
        right: 4256,
        top: 160,
        bottom: 192
    }),
    new RightPlatform({
        left: 4224,
        top: 160,
        bottom: 192
    }),
    // Atrium
    new LeftPlatform({
        right: 3680,
        top: 352,
        bottom: 768
    }),
    new Platform({
        left: 3776,
        top: 640,
        right: 3840,
        bottom: 672
    }),
    new Platform({
        left: 3904,
        top: 544,
        right: 3968,
        bottom: 576
    }),
    new Platform({
        left: 4096,
        top: 512,
        right: 4160,
        bottom: 544
    }),
    new Platform({
        left: 4320,
        top: 512,
        right: 4384,
        bottom: 544
    }),
    new Platform({
        left: 4512,
        top: 544,
        right: 4576,
        bottom: 576
    }),
    new Platform({
        left: 4640,
        top: 640,
        right: 4704,
        bottom: 672
    }),
    new RightPlatform({
        left: 4800,
        top: 352,
        bottom: 768
    })
];

},{"./coordinates.js":"1Przq","./canvas.js":"eTVCG","@parcel/transformer-js/src/esmodule-helpers.js":"jRKQF"}],"lgZ6l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "explosions", ()=>explosions
);
var _coordinatesJs = require("./coordinates.js");
var _canvasJs = require("./canvas.js");
var _framesJs = require("./frames.js");
var _imgJs = require("./img.js");
var _urlsJs = require("./urls.js");
const explosionImages = [
    _imgJs.img(_urlsJs.ASSET_URLS['../sprites/explosion-1_36x36.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../sprites/explosion-2_36x36.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../sprites/explosion-3_36x36.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../sprites/explosion-4_36x36.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../sprites/explosion-5_36x36.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../sprites/explosion-6_36x36.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../sprites/explosion-7_36x36.png']), 
];
class Explosions {
    constructor(){
        /** @type {Explosion[]} */ this.explosions = [];
    }
    add({ left , top  }) {
        this.explosions.push(new Explosion({
            left,
            top
        }));
    }
    update() {
        this.explosions = this.explosions.filter((explosion)=>explosion.frames.currentIndex < 6
        );
        this.draw();
    }
    draw() {
        this.explosions.forEach((explosion)=>explosion.draw()
        );
    }
}
class Explosion extends _coordinatesJs.Coordinates {
    constructor({ left , top  }){
        super({
            x: left,
            y: top,
            width: 36,
            height: 36
        });
        this.frames = new _framesJs.Frames({
            images: explosionImages,
            fps: 14
        });
    }
    draw() {
        _canvasJs.c.drawImage(this.frames.get(), this.localLeft, this.localTop, this.width, this.height);
    }
}
const explosions = new Explosions();

},{"./coordinates.js":"1Przq","./canvas.js":"eTVCG","./frames.js":"1fIgI","./img.js":"344AO","./urls.js":"cCez6","@parcel/transformer-js/src/esmodule-helpers.js":"jRKQF"}],"hHt1H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "chandelier", ()=>chandelier
);
var _coordinatesJs = require("./coordinates.js");
var _canvasJs = require("./canvas.js");
var _constsJs = require("./consts.js");
var _timeManagerJs = require("./time-manager.js");
var _phaseManagerJs = require("./phase-manager.js");
var _bossJs = require("./boss.js");
var _imgJs = require("./img.js");
var _urlsJs = require("./urls.js");
class Chandelier extends _coordinatesJs.Coordinates {
    constructor(){
        super({
            x: 4160,
            y: 384,
            width: 160,
            height: 96
        });
        this.img = _imgJs.img(_urlsJs.ASSET_URLS['../sprites/chandelier_160x96.png']);
        this.show = true;
        this.dropped = false;
        this.velocity = {
            y: 0
        };
    }
    draw() {
        this.img && _canvasJs.c.drawImage(this.img, this.localLeft, this.localTop, this.width, this.height);
    }
    update() {
        if (!this.show) return;
        if (this.dropped) {
            this.velocity.y += _constsJs.CHANDELIER_GRAVITY * _timeManagerJs.timeManager.msPerFrame;
            this.y += this.velocity.y * _timeManagerJs.timeManager.msPerFrame;
            if (this.yCenter > _bossJs.boss.yCenter) _phaseManagerJs.phaseManager.startBossDyingPhase();
        }
        this.draw();
    }
}
const chandelier = new Chandelier();

},{"./coordinates.js":"1Przq","./canvas.js":"eTVCG","./consts.js":"3GOLi","./time-manager.js":"lLX8e","./phase-manager.js":"4n7ZT","./boss.js":"X0joP","./img.js":"344AO","./urls.js":"cCez6","@parcel/transformer-js/src/esmodule-helpers.js":"jRKQF"}],"cbVoA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rope", ()=>rope
);
var _coordinatesJs = require("./coordinates.js");
var _canvasJs = require("./canvas.js");
var _imgJs = require("./img.js");
var _urlsJs = require("./urls.js");
class FlammableBitOfRope extends _coordinatesJs.Coordinates {
    constructor(){
        super({
            x: 4236,
            y: 192,
            width: 8,
            height: 136
        });
    }
}
class Rope extends _coordinatesJs.Coordinates {
    constructor(){
        super({
            x: 4236,
            y: 192,
            width: 8,
            height: 192
        });
        this.img = _imgJs.img(_urlsJs.ASSET_URLS['../sprites/rope_8x192.png']);
        this.show = true;
        this.flammableBitOfRope = new FlammableBitOfRope();
    }
    update() {
        if (!this.show) return;
        this.draw();
    }
    draw() {
        const dx = this.localLeft;
        const dy = this.localTop;
        const dw = this.width;
        const dh = this.height;
        this.img && _canvasJs.c.drawImage(this.img, dx, dy, dw, dh);
    }
}
const rope = new Rope();

},{"./coordinates.js":"1Przq","./canvas.js":"eTVCG","./img.js":"344AO","./urls.js":"cCez6","@parcel/transformer-js/src/esmodule-helpers.js":"jRKQF"}],"kZiUA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buttonManager", ()=>buttonManager
);
class ButtonManager {
    constructor(){
        this.buttons = document.getElementById('buttons');
    }
    show() {
        this.buttons.classList.remove('hidden');
    }
    hide() {
        this.buttons.classList.add('hidden');
    }
    setOpacity(value) {
        this.buttons.style.opacity = value;
    }
}
const buttonManager = new ButtonManager();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jRKQF"}],"3IzEq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "plumes", ()=>plumes
);
var _coordinatesJs = require("./coordinates.js");
var _framesJs = require("./frames.js");
var _audioManagerJs = require("./audio-manager.js");
var _canvasJs = require("./canvas.js");
var _imgJs = require("./img.js");
var _urlsJs = require("./urls.js");
const plumeImages = [
    _imgJs.img(_urlsJs.ASSET_URLS['../sprites/plume-1_43x21.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../sprites/plume-2_43x21.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../sprites/plume-3_43x21.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../sprites/plume-4_43x21.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../sprites/plume-5_43x21.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../sprites/plume-6_43x21.png']), 
];
class Plumes {
    constructor(){
        /** @type {Plume[]} */ this.plumes = [];
    }
    add({ left , bottom , facingRight  }) {
        this.plumes.push(new Plume({
            left,
            bottom,
            facingRight
        }));
        _audioManagerJs.audioManager.playLandSound();
    }
    update() {
        this.plumes = this.plumes.filter((plume)=>plume.frames.currentIndex < 5
        );
        this.draw();
    }
    draw() {
        this.plumes.forEach((plume)=>plume.draw()
        );
    }
}
class Plume extends _coordinatesJs.Coordinates {
    constructor({ left , bottom , facingRight  }){
        super({
            x: left,
            y: bottom - 21,
            width: 43,
            height: 21
        });
        this.frames = new _framesJs.Frames({
            images: plumeImages,
            fps: 14
        });
        this.facingRight = facingRight;
    }
    draw() {
        const img = this.frames.get();
        if (this.facingRight) _canvasJs.c.drawImage(img, this.localLeft, this.localTop, this.width, this.height);
        else {
            _canvasJs.c.save();
            _canvasJs.c.scale(-1, 1);
            _canvasJs.c.drawImage(img, -1 * this.localRight, this.localTop, this.width, this.height);
            _canvasJs.c.restore();
        }
    }
}
const plumes = new Plumes();

},{"./coordinates.js":"1Przq","./frames.js":"1fIgI","./audio-manager.js":"37hFB","./canvas.js":"eTVCG","./img.js":"344AO","./urls.js":"cCez6","@parcel/transformer-js/src/esmodule-helpers.js":"jRKQF"}],"jIbrz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lasers", ()=>lasers
);
var _coordinatesJs = require("./coordinates.js");
var _canvasJs = require("./canvas.js");
var _framesJs = require("./frames.js");
var _timeManagerJs = require("./time-manager.js");
var _audioManagerJs = require("./audio-manager.js");
var _constsJs = require("./consts.js");
var _playerJs = require("./player.js");
var _explosionsJs = require("./explosions.js");
var _imgJs = require("./img.js");
var _urlsJs = require("./urls.js");
const laserImages = [
    _imgJs.img(_urlsJs.ASSET_URLS['../sprites/laser-1_20x20.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../sprites/laser-2_20x20.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../sprites/laser-3_20x20.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../sprites/laser-4_20x20.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../sprites/laser-5_20x20.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../sprites/laser-6_20x20.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../sprites/laser-7_20x20.png']), 
];
class Lasers {
    constructor(){
        /** @type {Laser[]} */ this.lasers = [];
    }
    add({ left , top  }) {
        this.lasers.push(new Laser({
            left,
            top
        }));
        _audioManagerJs.audioManager.playLaserSound();
    }
    update() {
        this.lasers = this.lasers.filter((laser)=>!laser.finished && !laser.hitPlayer
        );
        this.lasers.forEach((laser)=>laser.update()
        );
    }
}
class Laser extends _coordinatesJs.Coordinates {
    constructor({ left , top  }){
        super({
            x: left,
            y: top,
            width: 20,
            height: 20
        });
        this.laserFrames = new _framesJs.Frames({
            fps: 24,
            images: laserImages
        });
        this.startTime = _timeManagerJs.timeManager.now;
        this.finished = false;
        this.hitPlayer = false;
        const gapX = _playerJs.player.x - this.x;
        const gapY = _playerJs.player.y - this.y;
        const gap = Math.sqrt(Math.pow(gapX, 2) + Math.pow(gapY, 2));
        this.dx = _constsJs.LASER_SPEED * gapX / gap;
        this.dy = _constsJs.LASER_SPEED * gapY / gap;
    }
    update() {
        if (this.intersects(_playerJs.player)) {
            _playerJs.player.hurtByLaser();
            this.hitPlayer = true;
        }
        if (_timeManagerJs.timeManager.now - this.startTime > _constsJs.LASER_DURATION) {
            this.finished = true;
            _explosionsJs.explosions.add({
                left: this.left,
                top: this.top
            });
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
    draw() {
        _canvasJs.c.drawImage(this.laserFrames.get(), this.localLeft, this.localTop, this.width, this.height);
    }
}
const lasers = new Lasers();

},{"./coordinates.js":"1Przq","./canvas.js":"eTVCG","./frames.js":"1fIgI","./time-manager.js":"lLX8e","./audio-manager.js":"37hFB","./consts.js":"3GOLi","./player.js":"c37gX","./explosions.js":"lgZ6l","./img.js":"344AO","./urls.js":"cCez6","@parcel/transformer-js/src/esmodule-helpers.js":"jRKQF"}],"egCPC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "debugMenu", ()=>debugMenu
);
var _canvasJs = require("./canvas.js");
var _timeManagerJs = require("./time-manager.js");
var _playerJs = require("./player.js");
class DebugMenu {
    constructor(){}
    draw() {
        _canvasJs.c.fillStyle = '#000c';
        _canvasJs.c.fillRect(0, 0, 200, 200);
        _canvasJs.c.fillStyle = '#bbb';
        _canvasJs.c.textAlign = 'left';
        _canvasJs.c.font = 'bold 14px Inter';
        _canvasJs.c.fillText('ms per frame', 58, 48);
        _canvasJs.c.textAlign = 'right';
        _canvasJs.c.fillStyle = 'white';
        _canvasJs.c.fillText(_timeManagerJs.timeManager.msPerFrame, 28, 48);
        _canvasJs.c.fillStyle = '#bbb';
        _canvasJs.c.textAlign = 'left';
        _canvasJs.c.font = 'bold 14px Inter';
        _canvasJs.c.fillText(_playerJs.player.velocity.y, 58, 68);
    }
}
const debugMenu = new DebugMenu();

},{"./canvas.js":"eTVCG","./time-manager.js":"lLX8e","./player.js":"c37gX","@parcel/transformer-js/src/esmodule-helpers.js":"jRKQF"}],"1GJzH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "slides", ()=>slides
) // one frame = 20.69989
 // 0 70.447023
 // 1 fadeinstart 3.158386
 // 1 fadeinend 3.625043
 // 1 fadeoutstart 10.102125
 // 1 fadeoutend 10.540059
 // 2 fadeinstart 11.89449
 // 2 fadeinend 12.363112
 // 2 fadeoutstart 18.806675
 // 2 fadeoutend 19.374947
 // 3 fadeinstart 20.633224
 // 3 fadeinend 21.185954
 // 3 fadeoutstart 27.534666
 // 3 fadeoutend 28.119119
 // 4 fadeinstart 29.364552
 // 4 fadeinend 29.908917
 // 4 fadeoutstart 36.448878
 // 4 fadeoutend 36.967399
 // 5 fadeinstart 38.17481
 // 5 fadeinend 38.687975
 // 5 fadeoutstart 45.208802
 // 5 fadeoutend 45.787413
 // Now you're a hero 52.289314 53.952062
 // You managed to 53.952062 55.10938
 // beat the whole damn ga-ame 55.10938 58.198456
 // We're happy you made it 59.330643 61.15019
 // But how are you gonna spend 61.350186 63.122842
 // the rest of this da-ay 63.122842 65.466856
 // Maybe watch a video 67.011187 70.684104
 // Maybe press refresh 70.684104 72.576486
 // and start again 70.684104 73.537913
 // 
 // Now you're a hero 74.415235 76.130476
 // You managed to 76.130476 77.202936
 // ...
 // and start again ... 95.670418
 // 
 // Yes it's over now 96.491651 98.614725
 // we didn't want to 99.723953 101.586446
 // make a longer game 101.586446 103.916165
 // This is it 103.916165 105.039407
 // I swear it's true 105.039407 107.117157
 // oohh ohh 107.759486 108.873535
 ///
 // Now you're a hero 111.125234 ..
 // ...
 // and start again ... 132.611929
 // Game Over fadestart 
;
var _audioManagerJs = require("./audio-manager.js");
var _canvasJs = require("./canvas.js");
var _imgJs = require("./img.js");
var _urlsJs = require("./urls.js");
class TitleSlide {
    constructor({ timeIn , timeOut , fadeTime  }){
        this.timeIn = timeIn;
        this.timeOut = timeOut;
        this.fadeTime = fadeTime;
    }
    draw() {
        const time = _audioManagerJs.audioManager.endCreditsMusic.currentTime;
        if (time < this.timeIn || time > this.timeOut) return;
        if (time - this.timeIn < this.fadeTime) _canvasJs.canvas.style.opacity = (time - this.timeIn) / this.fadeTime;
        else if (this.timeOut - time < this.fadeTime) _canvasJs.canvas.style.opacity = (this.timeOut - time) / this.fadeTime;
        _canvasJs.c.textAlign = 'center';
        _canvasJs.c.font = '500 14px Inter';
        _canvasJs.c.fillText('You Have To Burn The Rope', _canvasJs.FRAME_WIDTH / 2, _canvasJs.FRAME_HEIGHT / 2 - 10);
        _canvasJs.c.font = '400 12px Inter';
        _canvasJs.c.fillText('Thank you for playing!', _canvasJs.FRAME_WIDTH / 2, _canvasJs.FRAME_HEIGHT / 2 + 10);
    }
}
class GameOverSlide {
    constructor({ timeIn , fadeTime , text  }){
        this.timeIn = timeIn;
        this.fadeTime = fadeTime;
        this.text = text;
    }
    draw() {
        const time = _audioManagerJs.audioManager.endCreditsMusic.currentTime;
        if (time < this.timeIn) return;
        if (time - this.timeIn < this.fadeTime) _canvasJs.canvas.style.opacity = (time - this.timeIn) / this.fadeTime;
        _canvasJs.c.textAlign = 'center';
        _canvasJs.c.font = '500 14px Inter';
        _canvasJs.c.fillText(this.text, _canvasJs.FRAME_WIDTH / 2, _canvasJs.FRAME_HEIGHT / 2);
    }
}
class LyricSlide {
    constructor({ timeIn , timeOut , text  }){
        this.timeIn = timeIn;
        this.timeOut = timeOut;
        this.text = text;
    }
    draw() {
        const time = _audioManagerJs.audioManager.endCreditsMusic.currentTime;
        if (time < this.timeIn || time > this.timeOut) return;
        _canvasJs.c.textAlign = 'center';
        _canvasJs.c.font = '500 14px Inter';
        _canvasJs.c.fillText(this.text, _canvasJs.FRAME_WIDTH / 2, _canvasJs.FRAME_HEIGHT / 2);
    }
}
class ImageTextSlide {
    constructor({ heading , lines , src , timeIn , timeOut , fadeTime  }){
        this.img = _imgJs.img(_urlsJs.ASSET_URLS[src]);
        /** @type {string} */ this.heading = heading;
        /** @type {string[]} */ this.lines = lines;
        this.timeIn = timeIn;
        this.timeOut = timeOut;
        this.fadeTime = fadeTime;
    }
    draw() {
        const time = _audioManagerJs.audioManager.endCreditsMusic.currentTime;
        if (time < this.timeIn || time > this.timeOut) return;
        if (time - this.timeIn < this.fadeTime) _canvasJs.canvas.style.opacity = (time - this.timeIn) / this.fadeTime;
        else if (this.timeOut - time < this.fadeTime) _canvasJs.canvas.style.opacity = (this.timeOut - time) / this.fadeTime;
        let offsetX = 150;
        const offsetY = 0;
        _canvasJs.c.drawImage(this.img, _canvasJs.FRAME_WIDTH / 2 - 250, (_canvasJs.FRAME_HEIGHT - 200) / 2, 200, 200);
        _canvasJs.c.textAlign = 'center';
        _canvasJs.c.font = '500 14px Inter';
        _canvasJs.c.fillText(this.heading, offsetX + _canvasJs.FRAME_WIDTH / 2, offsetY + _canvasJs.FRAME_HEIGHT / 2 - 10);
        _canvasJs.c.font = '400 12px Inter';
        this.lines.forEach((line, i)=>{
            _canvasJs.c.fillText(line, offsetX + _canvasJs.FRAME_WIDTH / 2, offsetY + _canvasJs.FRAME_HEIGHT / 2 + 5 + 15 * i);
        });
    }
}
class TextImageSlide {
    constructor({ heading , lines , src , timeIn , timeOut , fadeTime  }){
        this.img = _imgJs.img(_urlsJs.ASSET_URLS[src]);
        this.timeIn = timeIn;
        this.timeOut = timeOut;
        this.fadeTime = fadeTime;
        /** @type {string} */ this.heading = heading;
        /** @type {string[]} */ this.lines = lines;
    }
    draw() {
        const time = _audioManagerJs.audioManager.endCreditsMusic.currentTime;
        if (time < this.timeIn || time > this.timeOut) return;
        if (time - this.timeIn < this.fadeTime) _canvasJs.canvas.style.opacity = (time - this.timeIn) / this.fadeTime;
        else if (this.timeOut - time < this.fadeTime) _canvasJs.canvas.style.opacity = (this.timeOut - time) / this.fadeTime;
        let offsetX = -150;
        _canvasJs.c.drawImage(this.img, _canvasJs.FRAME_WIDTH / 2 + 50, (_canvasJs.FRAME_HEIGHT - 200) / 2, 200, 200);
        _canvasJs.c.textAlign = 'center';
        _canvasJs.c.font = '500 14px Inter';
        _canvasJs.c.fillText(this.heading, offsetX + _canvasJs.FRAME_WIDTH / 2, _canvasJs.FRAME_HEIGHT / 2 - 10);
        _canvasJs.c.font = '400 12px Inter';
        this.lines.forEach((line, i)=>{
            _canvasJs.c.fillText(line, offsetX + _canvasJs.FRAME_WIDTH / 2, _canvasJs.FRAME_HEIGHT / 2 + 5 + 15 * i);
        });
    }
}
// You Have To 
// Design, Code, Graphics Kian Bashiri (mazapan.se)
const slides = [
    new TitleSlide({
        timeIn: 3.158386,
        timeOut: 10.540059,
        fadeTime: .45
    }),
    new ImageTextSlide({
        heading: 'Design, Code, Graphics',
        lines: [
            'Kian Bashiri',
            '(mazapan.se)'
        ],
        src: _urlsJs.ASSET_URLS['../sprites/credits-1_200x200.png'],
        timeIn: 11.89449,
        timeOut: 19.374947,
        fadeTime: .45
    }),
    new TextImageSlide({
        heading: 'Music',
        lines: [
            'Henrik Nåmark',
            '(reachground.se)'
        ],
        src: _urlsJs.ASSET_URLS['../sprites/credits-2_200x200.png'],
        timeIn: 20.633224,
        timeOut: 28.119119,
        fadeTime: .45
    }),
    new ImageTextSlide({
        heading: 'Additional Design',
        lines: [
            'Henrik Nåmark',
            'Christian Dryden'
        ],
        src: _urlsJs.ASSET_URLS['../sprites/credits-3_200x200.png'],
        timeIn: 29.364552,
        timeOut: 36.967399,
        fadeTime: .45
    }),
    new TextImageSlide({
        heading: 'Special thanks to',
        lines: [
            'Umami'
        ],
        src: _urlsJs.ASSET_URLS['../sprites/credits-4_200x200.png'],
        timeIn: 38.17481,
        timeOut: 45.787413,
        fadeTime: .45
    }),
    new LyricSlide({
        timeIn: 52.289314,
        timeOut: 53.952062,
        text: 'Now you\'re a hero'
    }),
    new LyricSlide({
        timeIn: 53.952062,
        timeOut: 55.10938,
        text: 'You managed to'
    }),
    new LyricSlide({
        timeIn: 55.10938,
        timeOut: 58.198456,
        text: 'beat the whole damn ga-ame'
    }),
    new LyricSlide({
        timeIn: 59.330643,
        timeOut: 61.15019,
        text: 'We\'re happy you made it'
    }),
    new LyricSlide({
        timeIn: 61.350186,
        timeOut: 63.122842,
        text: 'But how are you gonna spend'
    }),
    new LyricSlide({
        timeIn: 63.122842,
        timeOut: 65.466856,
        text: 'the rest of this da-ay'
    }),
    new LyricSlide({
        timeIn: 67.011187,
        timeOut: 70.684104,
        text: 'Maybe watch a video'
    }),
    new LyricSlide({
        timeIn: 70.684104,
        timeOut: 72.576486,
        text: 'Maybe press refresh'
    }),
    new LyricSlide({
        timeIn: 72.576486,
        timeOut: 73.537913,
        text: 'and start again'
    }),
    new LyricSlide({
        timeIn: 74.415235,
        timeOut: 76.077983,
        text: 'Now you\'re a hero'
    }),
    new LyricSlide({
        timeIn: 76.077983,
        timeOut: 77.235301,
        text: 'You managed to'
    }),
    new LyricSlide({
        timeIn: 77.235301,
        timeOut: 80.324377,
        text: 'beat the whole damn ga-ame'
    }),
    new LyricSlide({
        timeIn: 81.456564,
        timeOut: 83.276111,
        text: 'We\'re happy you made it'
    }),
    new LyricSlide({
        timeIn: 83.476107,
        timeOut: 85.248763,
        text: 'But how are you gonna spend'
    }),
    new LyricSlide({
        timeIn: 85.248763,
        timeOut: 87.592777,
        text: 'the rest of this da-ay'
    }),
    new LyricSlide({
        timeIn: 89.137108,
        timeOut: 92.810025,
        text: 'Maybe watch a video'
    }),
    new LyricSlide({
        timeIn: 92.810025,
        timeOut: 94.702407,
        text: 'Maybe press refresh'
    }),
    new LyricSlide({
        timeIn: 94.702407,
        timeOut: 95.663834,
        text: 'and start again'
    }),
    new LyricSlide({
        timeIn: 96.491651,
        timeOut: 98.614725,
        text: 'Yes it\'s over now'
    }),
    new LyricSlide({
        timeIn: 99.723953,
        timeOut: 101.586446,
        text: 'we didn\'t want to'
    }),
    new LyricSlide({
        timeIn: 101.586446,
        timeOut: 103.916165,
        text: 'make a longer game'
    }),
    new LyricSlide({
        timeIn: 103.916165,
        timeOut: 105.039407,
        text: 'This is it'
    }),
    new LyricSlide({
        timeIn: 105.039407,
        timeOut: 107.117157,
        text: 'I swear it\'s true'
    }),
    new LyricSlide({
        timeIn: 107.759486,
        timeOut: 108.873535,
        text: 'oohh ohh'
    }),
    new LyricSlide({
        timeIn: 111.125234,
        timeOut: 112.787982,
        text: 'Now you\'re a hero'
    }),
    new LyricSlide({
        timeIn: 112.787982,
        timeOut: 113.9453,
        text: 'You managed to'
    }),
    new LyricSlide({
        timeIn: 113.9453,
        timeOut: 117.034376,
        text: 'beat the whole damn ga-ame'
    }),
    new LyricSlide({
        timeIn: 118.166563,
        timeOut: 119.98611,
        text: 'We\'re happy you made it'
    }),
    new LyricSlide({
        timeIn: 120.186106,
        timeOut: 121.958762,
        text: 'But how are you gonna spend'
    }),
    new LyricSlide({
        timeIn: 121.958762,
        timeOut: 124.302776,
        text: 'the rest of this da-ay'
    }),
    new LyricSlide({
        timeIn: 125.847107,
        timeOut: 129.520024,
        text: 'Maybe watch a video'
    }),
    new LyricSlide({
        timeIn: 129.520024,
        timeOut: 131.412406,
        text: 'Maybe press refresh'
    }),
    new LyricSlide({
        timeIn: 131.412406,
        timeOut: 132.373833,
        text: 'and start again'
    }),
    new GameOverSlide({
        timeIn: 134.084787,
        fadeTime: 3,
        text: 'Game over'
    })
];

},{"./audio-manager.js":"37hFB","./canvas.js":"eTVCG","./img.js":"344AO","./urls.js":"cCez6","@parcel/transformer-js/src/esmodule-helpers.js":"jRKQF"}]},["bSipi","b5VdI"], "b5VdI", "parcelRequiref536")

//# sourceMappingURL=yhtbtr.bcc9ffc4.js.map
