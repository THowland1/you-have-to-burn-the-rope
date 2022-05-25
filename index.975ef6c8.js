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
})({"7fmqN":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
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

},{}],"8lqZg":[function(require,module,exports) {
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
    navigator.serviceWorker.register(_urlsJs.ASSET_URLS['../serviceworker.js'], {
        type: 'module'
    }).then((reg)=>console.log('Success: ', reg.scope)
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
        this.img.src = _urlsJs.ASSET_URLS['../img/bg.png'];
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

},{"./js/axes.js":"6UenL","./js/boss.js":"jiKqO","./js/canvas.js":"jvBLU","./js/chandelier.js":"2oThl","./js/consts.js":"2J0f1","./js/coordinates.js":"dsbsK","./js/debug-menu.js":"bcbWB","./js/explosions.js":"ensJg","./js/flames.js":"3rfbG","./js/healthbar.js":"2uxWm","./js/lasers.js":"awXIj","./js/phase-manager.js":"73f18","./js/platforms.js":"3eULH","./js/player.js":"2k4ca","./js/plumes.js":"dtlaX","./js/rope.js":"OzOSK","./js/slides.js":"dKMrO","./js/time-manager.js":"hIoYz","./js/audio-manager.js":"gwz40","./js/button-manager.js":"jLViv","./js/urls.js":"ki4j8"}],"6UenL":[function(require,module,exports) {
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
const axeImg = _imgJs.img(_urlsJs.ASSET_URLS['../img/axe_18x18.png']);
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

},{"./coordinates.js":"dsbsK","./canvas.js":"jvBLU","./boss.js":"jiKqO","./healthbar.js":"2uxWm","./time-manager.js":"hIoYz","./audio-manager.js":"gwz40","./consts.js":"2J0f1","./img.js":"durFA","./urls.js":"ki4j8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dsbsK":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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

},{}],"jvBLU":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jiKqO":[function(require,module,exports) {
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
            attack: _imgJs.img(_urlsJs.ASSET_URLS['../img/boss-attack_204x256.png']),
            die: _imgJs.img(_urlsJs.ASSET_URLS['../img/boss-die_192x256.png']),
            lookup: _imgJs.img(_urlsJs.ASSET_URLS['../img/boss-lookup_192x256.png']),
            move: _imgJs.img(_urlsJs.ASSET_URLS['../img/boss-move_204x256.png']),
            still: _imgJs.img(_urlsJs.ASSET_URLS['../img/boss-still_204x256.png'])
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

},{"./canvas.js":"jvBLU","./consts.js":"2J0f1","./coordinates.js":"dsbsK","./player.js":"2k4ca","./phase-manager.js":"73f18","./lasers.js":"awXIj","./time-manager.js":"hIoYz","./img.js":"durFA","./urls.js":"ki4j8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2J0f1":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2k4ca":[function(require,module,exports) {
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
            fall: _imgJs.img(_urlsJs.ASSET_URLS['../img/player-fall_30x36.png']),
            hit: _imgJs.img(_urlsJs.ASSET_URLS['../img/player-hit_30x36.png']),
            jump: _imgJs.img(_urlsJs.ASSET_URLS['../img/player-jump_30x36.png']),
            still: _imgJs.img(_urlsJs.ASSET_URLS['../img/player-still_30x36.png']),
            throw: _imgJs.img(_urlsJs.ASSET_URLS['../img/player-throw_30x36.png']),
            walk1: _imgJs.img(_urlsJs.ASSET_URLS['../img/player-walk-1_30x36.png']),
            walk2: _imgJs.img(_urlsJs.ASSET_URLS['../img/player-walk-2_30x36.png']),
            walk3: _imgJs.img(_urlsJs.ASSET_URLS['../img/player-walk-3_30x36.png']),
            stick: _imgJs.img(_urlsJs.ASSET_URLS['../img/stick_30x6.png']),
            flame1: _imgJs.img(_urlsJs.ASSET_URLS['../img/flame-1_28x28.png']),
            flame2: _imgJs.img(_urlsJs.ASSET_URLS['../img/flame-2_28x28.png']),
            flame3: _imgJs.img(_urlsJs.ASSET_URLS['../img/flame-3_28x28.png'])
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

},{"./audio-manager.js":"gwz40","./axes.js":"6UenL","./canvas.js":"jvBLU","./consts.js":"2J0f1","./coordinates.js":"dsbsK","./flames.js":"3rfbG","./boss.js":"jiKqO","./frames.js":"8i0FU","./phase-manager.js":"73f18","./platforms.js":"3eULH","./plumes.js":"dtlaX","./time-manager.js":"hIoYz","./img.js":"durFA","./urls.js":"ki4j8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gwz40":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "audioManager", ()=>audioManager
);
var _urlsJs = require("./urls.js");
class EndCreditsMusic {
    constructor(){
        this.audio = new Audio(_urlsJs.ASSET_URLS['../audio/now-youre-a-hero.mp3']);
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
        this.tunnelMusic = new Audio(_urlsJs.ASSET_URLS['../audio/tunnel.mp3']);
        this.tunnelMusic.loop = true;
        this.tunnelMusic.volume = this.volume;
        this.bossFightMusic = new Audio(_urlsJs.ASSET_URLS['../audio/boss-fight.mp3']);
        this.bossFightMusic.loop = true;
        this.bossFightMusic.volume = this.volume;
        this.axeThrowSound = new SFX(_urlsJs.ASSET_URLS['../audio/axe-throw.mp3']);
        this.ropeExplosionSound = new SFX(_urlsJs.ASSET_URLS['../audio/rope-explosion.mp3']);
        this.bossExplosionSound = new SFX(_urlsJs.ASSET_URLS['../audio/boss-explosion.mp3']);
        this.doorSlamSound = new SFX(_urlsJs.ASSET_URLS['../audio/door-slam.mp3']);
        this.laserSound = new SFX(_urlsJs.ASSET_URLS['../audio/eye-laser.mp3']);
        this.deathSound = new SFX(_urlsJs.ASSET_URLS['../audio/death.mp3']);
        this.jumpSound = new SFX(_urlsJs.ASSET_URLS['../audio/jump.mp3']);
        this.landSound = new SFX(_urlsJs.ASSET_URLS['../audio/land.mp3']);
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

},{"./urls.js":"ki4j8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ki4j8":[function(require,module,exports) {
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

},{"3c36f07cce4de438":"29us3","308aaa700d9ac33f":"4HJVJ","adad38975974dcd7":"eFyOJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","276eccf37794b08":"dDhxk","b475c8cab88c5336":"4MejQ","4ad82c4e8be05464":"72D2l","ca8b1dae55606be9":"UqoZE","d9f1df6bcc3dc4ee":"8ke62","3ba879e52243017c":"a5aS2","ca43fe38a10d6b13":"a37y3","e18be15545078789":"6NbkY","97b8d787b92b4c09":"1nbRK","5d020da195c20bf2":"jrvtc","b750a357c60df1b5":"5n5YB","87247644b3a7a88a":"cBkXE","396b5b11e5c86fea":"bpaEQ","fb9f2690d40a8bf9":"6EMMp","c65245d1ee827c71":"ifCjS","42a72b7755c6498b":"eWmak","fde782d934ea79d3":"fWWvu","48dbb5d316bd3988":"9iEtO","e6ecf7be898d2b94":"6eHjD","805595210ad79098":"9qypT","41920263ad6e2773":"5Z9jg","2e8ed2795a83ea16":"6VuA7","579617441f5a8e6f":"hatCt","1ec052dc3afc3103":"ajUvR","1a89809d5ed07023":"ka6cT","1d5d4a24793eeb95":"4aQWT","c31caa2b2ccf5570":"9Akoc","1635172a4eed68a9":"cyyOe","e87fe54be77bdc4a":"crN2z","243d99757e4dbaf6":"kasOt","da219837b4e73c6a":"kADKH","e3026c998b856249":"4geJL","cd5b90f58ea04ec6":"f7vcf","6b12c379e459f5a0":"bLhDP","be57e3f43ae4dbfc":"4rn2y","d6d66d7261099ab":"lc1M3","f8ab4caabcf828eb":"3DFFq","cb26072e90bd692d":"4hHmb","e7da8aa9ff48c6c8":"lvdi0","76b090dd0ea6d021":"9rWon","5b694e3994ab3a5a":"b9mQw","7e9066c1d1279d67":"2qjdt","f9af3119980a6329":"7uKvu","dbbe02123dfdbca":"hiFcg","c58df0bb569b9e32":"bcMjM","7cfd066581934182":"6rlsm","488d8d31375c1399":"csQSU","a294ccf09816f08f":"ekLs0","ef6bc6fd035318fb":"3YvH0","cddd9b061f39a436":"hdSx6","86a8c63c23fd4e3f":"74R60","8d22c4e584b4e818":"aeSS9","5e97299569052fb0":"eB0Y4","8a4a5b8124a869fa":"hyhYZ","c200f5e10f1c64f8":"kAm9N","aebcdecc266054d0":"9kArq","8d67c17c93a32004":"9zLG0","961acaa10c40a510":"8fa1U","1ceb93fc27896ee2":"8gSIB","c046d30d4a87e8dd":"gdmoP","248a638bf4e0a107":"kcYBy","d33d0c3e7412bca6":"l9gKH","ee865d0e87d56a6d":"1sfTQ","3ed0256a573b1e54":"dKXTr","8fe8bcf6ef889bc0":"krVQs","ba24449b1d4964c3":"ixRtU"}],"29us3":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "serviceworker.968110bd.js" + "?" + Date.now();

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

},{}],"4HJVJ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "yhtbtr.3542e8cb.js" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"eFyOJ":[function(require,module,exports) {
module.exports = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";

},{}],"dDhxk":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "axe-throw.19644f0b.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"4MejQ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "boss-explosion.8d9a9616.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"72D2l":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "boss-fight.5c4ea7da.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"UqoZE":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "death.3b262421.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"8ke62":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "door-slam.28921a26.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"a5aS2":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "eye-laser.9344eca2.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"a37y3":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "jump.b63de5dd.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6NbkY":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "land.ca0e75c7.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"1nbRK":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "now-youre-a-hero.3c44a24a.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"jrvtc":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "rope-explosion.f840ef73.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"5n5YB":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "tunnel.ebe09e95.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"cBkXE":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "axe_18x18.fcdf3570.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"bpaEQ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "axe_999_64x64.099a5152.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6EMMp":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "back-door_32x64.7a09db5e.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"ifCjS":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "boss-attack_204x256.bcdcdfd7.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"eWmak":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "boss-die_192x256.6c158fec.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"fWWvu":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "boss-lookup_192x256.9a6acfc8.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"9iEtO":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "boss-move_204x256.080c3954.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6eHjD":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "boss-still_204x256.4921a578.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"9qypT":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "chandelier_160x96.dd8ddea5.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"5Z9jg":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "credits-1_200x200.92006a72.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6VuA7":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "credits-2_200x200.cf3cd7ca.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"hatCt":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "credits-3_200x200.7e245838.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"ajUvR":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "credits-4_200x200.5899dcb1.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"ka6cT":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "credits-bg_704x512.1658d947.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"4aQWT":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "explosion-1_36x36.7b1a0e48.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"9Akoc":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "explosion-2_36x36.579838ec.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"cyyOe":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "explosion-3_36x36.9891171f.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"crN2z":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "explosion-4_36x36.3547290d.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"kasOt":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "explosion-5_36x36.ab5d876f.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"kADKH":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "explosion-6_36x36.51bf4011.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"4geJL":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "explosion-7_36x36.0264933b.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"f7vcf":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "flame-sprites.f91fe31a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"bLhDP":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "flame-1_28x28.3249f52f.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"4rn2y":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "flame-2_28x28.840ce506.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lc1M3":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "flame-3_28x28.fbe9e0aa.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"3DFFq":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "info-circle_999_64x64.77d50b73.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"4hHmb":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "laser-1_20x20.2aca8a4c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lvdi0":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "laser-2_20x20.0e2f2874.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"9rWon":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "laser-3_20x20.c66db600.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"b9mQw":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "laser-4_20x20.28267968.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"2qjdt":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "laser-5_20x20.c09879b7.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"7uKvu":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "laser-6_20x20.1b42d5a7.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"hiFcg":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "laser-7_20x20.143a3c1d.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"bcMjM":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "page-bg_32x32.79edeaeb.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6rlsm":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "player-fall_30x36.f6a65da8.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"csQSU":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "player-hit_30x36.6fa2c063.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"ekLs0":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "player-jump_30x36.4ae24b1c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"3YvH0":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "player-still_30x36.70e3cb1c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"hdSx6":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "player-throw_30x36.271ee8d0.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"74R60":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "player-walk-1_30x36.634aa84e.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"aeSS9":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "player-walk-2_30x36.e47fb20e.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"eB0Y4":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "player-walk-3_30x36.2dd7f43a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"hyhYZ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "plume-1_43x21.a62df3fb.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"kAm9N":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "plume-2_43x21.34a58c38.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"9kArq":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "plume-3_43x21.b02289c3.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"9zLG0":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "plume-4_43x21.b3d68f96.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"8fa1U":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "plume-5_43x21.fd37d6ec.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"8gSIB":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "plume-6_43x21.bc80017a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"gdmoP":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "rope_8x192.b79637bf.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"kcYBy":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "stick_30x6.684425d4.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"l9gKH":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "up-arrow_999_64x64.d68cd5b8.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"1sfTQ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "volume-0_999_64x64.7e4bfc2d.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"dKXTr":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "volume-1_999_64x64.81168351.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"krVQs":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "bg.6c772103.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"ixRtU":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "rope.442217df.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"3rfbG":[function(require,module,exports) {
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
        this.img = _imgJs.img(_urlsJs.ASSET_URLS['../img/flame-sprites.png']);
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

},{"./coordinates.js":"dsbsK","./time-manager.js":"hIoYz","./canvas.js":"jvBLU","./img.js":"durFA","./urls.js":"ki4j8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hIoYz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeManager", ()=>timeManager
);
const timeManager = {
    now: new Date().valueOf(),
    msPerFrame: 1000 / 60
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"durFA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "img", ()=>img
);
function img(src) {
    const result = new Image();
    result.src = src;
    return result;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8i0FU":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"73f18":[function(require,module,exports) {
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
        this.backDoorImage = _imgJs.img(_urlsJs.ASSET_URLS['../img/back-door_32x64.png']);
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

},{"./healthbar.js":"2uxWm","./platforms.js":"3eULH","./explosions.js":"ensJg","./canvas.js":"jvBLU","./coordinates.js":"dsbsK","./chandelier.js":"2oThl","./rope.js":"OzOSK","./audio-manager.js":"gwz40","./button-manager.js":"jLViv","./img.js":"durFA","./urls.js":"ki4j8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2uxWm":[function(require,module,exports) {
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

},{"./canvas.js":"jvBLU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3eULH":[function(require,module,exports) {
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

},{"./coordinates.js":"dsbsK","./canvas.js":"jvBLU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ensJg":[function(require,module,exports) {
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
    _imgJs.img(_urlsJs.ASSET_URLS['../img/explosion-1_36x36.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../img/explosion-2_36x36.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../img/explosion-3_36x36.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../img/explosion-4_36x36.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../img/explosion-5_36x36.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../img/explosion-6_36x36.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../img/explosion-7_36x36.png']), 
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

},{"./coordinates.js":"dsbsK","./canvas.js":"jvBLU","./frames.js":"8i0FU","./img.js":"durFA","./urls.js":"ki4j8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2oThl":[function(require,module,exports) {
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
        this.img = _imgJs.img(_urlsJs.ASSET_URLS['../img/chandelier_160x96.png']);
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

},{"./coordinates.js":"dsbsK","./canvas.js":"jvBLU","./consts.js":"2J0f1","./time-manager.js":"hIoYz","./phase-manager.js":"73f18","./boss.js":"jiKqO","./img.js":"durFA","./urls.js":"ki4j8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"OzOSK":[function(require,module,exports) {
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
        this.img = _imgJs.img(_urlsJs.ASSET_URLS['../img/rope_8x192.png']);
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

},{"./coordinates.js":"dsbsK","./canvas.js":"jvBLU","./img.js":"durFA","./urls.js":"ki4j8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jLViv":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dtlaX":[function(require,module,exports) {
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
    _imgJs.img(_urlsJs.ASSET_URLS['../img/plume-1_43x21.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../img/plume-2_43x21.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../img/plume-3_43x21.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../img/plume-4_43x21.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../img/plume-5_43x21.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../img/plume-6_43x21.png']), 
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

},{"./coordinates.js":"dsbsK","./frames.js":"8i0FU","./audio-manager.js":"gwz40","./canvas.js":"jvBLU","./img.js":"durFA","./urls.js":"ki4j8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"awXIj":[function(require,module,exports) {
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
    _imgJs.img(_urlsJs.ASSET_URLS['../img/laser-1_20x20.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../img/laser-2_20x20.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../img/laser-3_20x20.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../img/laser-4_20x20.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../img/laser-5_20x20.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../img/laser-6_20x20.png']),
    _imgJs.img(_urlsJs.ASSET_URLS['../img/laser-7_20x20.png']), 
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

},{"./coordinates.js":"dsbsK","./canvas.js":"jvBLU","./frames.js":"8i0FU","./time-manager.js":"hIoYz","./audio-manager.js":"gwz40","./consts.js":"2J0f1","./player.js":"2k4ca","./explosions.js":"ensJg","./img.js":"durFA","./urls.js":"ki4j8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bcbWB":[function(require,module,exports) {
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

},{"./canvas.js":"jvBLU","./time-manager.js":"hIoYz","./player.js":"2k4ca","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dKMrO":[function(require,module,exports) {
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
        src: _urlsJs.ASSET_URLS['../img/credits-1_200x200.png'],
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
        src: _urlsJs.ASSET_URLS['../img/credits-2_200x200.png'],
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
        src: _urlsJs.ASSET_URLS['../img/credits-3_200x200.png'],
        timeIn: 29.364552,
        timeOut: 36.967399,
        fadeTime: .45
    }),
    new TextImageSlide({
        heading: 'Special thanks to',
        lines: [
            'Umami'
        ],
        src: _urlsJs.ASSET_URLS['../img/credits-4_200x200.png'],
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

},{"./audio-manager.js":"gwz40","./canvas.js":"jvBLU","./img.js":"durFA","./urls.js":"ki4j8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7fmqN","8lqZg"], "8lqZg", "parcelRequiref536")

//# sourceMappingURL=index.975ef6c8.js.map
