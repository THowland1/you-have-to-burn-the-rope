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
var _audioManager = require("./js/audio-manager");
var _axes = require("./js/axes");
var _boss = require("./js/boss");
var _buttonManager = require("./js/button-manager");
var _canvas = require("./js/canvas");
var _chandelier = require("./js/chandelier");
var _consts = require("./js/consts");
var _coordinates = require("./js/coordinates");
var _debugMenu = require("./js/debug-menu");
var _explosions = require("./js/explosions");
var _flames = require("./js/flames");
var _healthbar = require("./js/healthbar");
var _lasers = require("./js/lasers");
var _phaseManager = require("./js/phase-manager");
var _platforms = require("./js/platforms");
var _player = require("./js/player");
var _plumes = require("./js/plumes");
var _rope = require("./js/rope");
var _slides = require("./js/slides");
var _timeManager = require("./js/time-manager");
var _urls = require("./js/urls");
if ('serviceWorker' in navigator) window.addEventListener('load', ()=>{
    navigator.serviceWorker.register(_urls.ASSET_URLS['../serviceworker.js'], {
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
    _phaseManager.phaseManager.startStartPhase();
});
class BG {
    constructor(){
        this.img = new Image();
        this.img.src = _urls.ASSET_URLS['../img/bg.png'];
    }
    draw() {
        const sx = _coordinates.offset.x;
        const sy = _coordinates.offset.y;
        const sw = _canvas.FRAME_WIDTH;
        const sh = _canvas.FRAME_HEIGHT;
        const dx = 0;
        const dy = 0;
        const dw = _canvas.FRAME_WIDTH;
        const dh = _canvas.FRAME_HEIGHT;
        this.img && _canvas.c.drawImage(this.img, sx, sy, sw, sh, dx, dy, dw, dh);
    }
}
const bg = new BG();
function animate() {
    const now = new Date().valueOf();
    _timeManager.timeManager.msPerFrame = now - _timeManager.timeManager.now;
    _timeManager.timeManager.now = now;
    if (_consts.DEBUG_DELAY) setTimeout(()=>{
        requestAnimationFrame(animate);
    }, _consts.DEBUG_DELAY);
    else requestAnimationFrame(animate);
    _canvas.c.clearRect(0, 0, _canvas.canvas.width, _canvas.canvas.height);
    if (_phaseManager.phaseManager.phase === _phaseManager.PHASES.clicktostart) {
        _canvas.c.fillStyle = 'white';
        _canvas.c.textAlign = 'center';
        _canvas.c.font = '500 14px Inter';
        _canvas.c.fillText('Click to start', _canvas.FRAME_WIDTH / 2, _canvas.FRAME_HEIGHT / 2);
        return;
    }
    if (_audioManager.audioManager.endCreditsMusic.currentTime < 2) {
        bg.draw();
        if (_phaseManager.phaseManager.showBackDoor) _phaseManager.phaseManager.drawBackDoor();
        _boss.boss.update();
        _player.player.update();
        _rope.rope.update();
        _chandelier.chandelier.update();
        _explosions.explosions.update();
        _plumes.plumes.update();
        _axes.axes.update();
        _lasers.lasers.update();
        _healthbar.healthBar.update();
        _flames.flames.forEach((flame)=>flame.draw()
        );
        _canvas.canvas.style.opacity = (2 - _audioManager.audioManager.endCreditsMusic.currentTime) / 2;
        _buttonManager.buttonManager.setOpacity((2 - _audioManager.audioManager.endCreditsMusic.currentTime) / 2);
    } else {
        _canvas.canvas.style.opacity = 1;
        _buttonManager.buttonManager.hide();
    }
    if (_player.player.left >= 3456) _phaseManager.phaseManager.startBossFightPhase();
    else if (_player.player.left >= 192) _phaseManager.phaseManager.startTunnelPhase();
    _canvas.c.fillStyle = 'white';
    _slides.slides.forEach((slide)=>slide.draw()
    );
    if (_player.player.hasFlame && _player.player.intersects(_rope.rope.flammableBitOfRope)) {
        _player.player.hasFlame = false;
        _phaseManager.phaseManager.startRopeBurningPhase();
    }
    if (_consts.SHOW_PLATFORMS) _platforms.platforms.forEach((platform)=>platform.draw()
    );
    if (_consts.SHOW_DEBUGMENU) _debugMenu.debugMenu.draw();
    if (_consts.SHOW_GRIDLINES) {
        _canvas.c.fillStyle = 'white';
        Array.from(Array(_consts.COURSE_WIDTH / 128)).forEach((_, x)=>{
            _canvas.c.fillRect(x * 128 - _coordinates.offset.x, 0, 1, _canvas.FRAME_HEIGHT);
            _canvas.c.fillText(`${x * 4}`, x * 128 - _coordinates.offset.x, 10);
        });
        Array.from(Array(_consts.COURSE_HEIGHT / 160)).forEach((_, y)=>{
            _canvas.c.fillRect(0, y * 160 - _coordinates.offset.y, _canvas.FRAME_WIDTH, 1);
            _canvas.c.fillText(`${y * 5}`, 10, y * 160 - _coordinates.offset.y);
        });
    }
    if (_player.player.localRight > 400 && _coordinates.offset.x + _canvas.FRAME_WIDTH < _consts.COURSE_WIDTH && _player.player.velocity.x > 0) _coordinates.offset.x += _player.player.velocity.x * _timeManager.timeManager.msPerFrame;
    else if (_player.player.localLeft < 200 && _coordinates.offset.x > 0 && _player.player.velocity.x < 0) _coordinates.offset.x += _player.player.velocity.x * _timeManager.timeManager.msPerFrame;
    if (_player.player.localTop < 175 && _coordinates.offset.y > 0 && _player.player.velocity.y < 0) _coordinates.offset.y += _player.player.velocity.y * _timeManager.timeManager.msPerFrame;
    else if (_player.player.localBottom > 200 && _coordinates.offset.y + _canvas.FRAME_HEIGHT < _consts.COURSE_HEIGHT && _player.player.velocity.y > 0) _coordinates.offset.y += _player.player.velocity.y * _timeManager.timeManager.msPerFrame;
}
animate();

},{"./js/coordinates":"96akj","./js/time-manager":"g5oF1","./js/consts":"i99Dc","./js/urls":"8OWkF","./js/canvas":"3ib9d","./js/healthbar":"5clUK","./js/audio-manager":"eqlY2","./js/flames":"hqADu","./js/explosions":"esUVw","./js/slides":"9bwzS","./js/rope":"9scZJ","./js/plumes":"6HX0g","./js/platforms":"eYBZp","./js/axes":"6KuQA","./js/boss":"i5HRn","./js/lasers":"4YS9J","./js/player":"cK1Qv","./js/button-manager":"2Z5wt","./js/chandelier":"bvCN6","./js/debug-menu":"ezoyF","./js/phase-manager":"2aQoL"}],"96akj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "offset", ()=>offset
);
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

},{}],"g5oF1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeManager", ()=>timeManager
);
const timeManager = {
    now: new Date().valueOf(),
    msPerFrame: 1000 / 60
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i99Dc":[function(require,module,exports) {
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
const CHANDELIER_GRAVITY = 0.001;
const LASER_SPEED = 3;
const LASER_DURATION = 2000;
const AXE_SPEED_Y = 0.7;
const AXE_SPEED_X = 7 / 30;
const AXE_GRAVITY = 0.1 / 30;
const PLAYER_ATTACKINTERVAL = 150;
const VOLUME = 0.2;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8OWkF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ASSET_URLS", ()=>ASSET_URLS
);
const ASSET_URLS = {
    '../serviceworker.js': new URL(require("12598dbdb868850f")),
    './index.js': new URL(require("c7bdd7e9e353a412")),
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap': new URL(require("83b7d5f789511615")),
    '../audio/axe-throw.mp3': new URL(require("ef611db54e3dee4f")),
    '../audio/boss-explosion.mp3': new URL(require("2fa3e31ddced57e9")),
    '../audio/boss-fight.mp3': new URL(require("eb4a90b4e9500517")),
    '../audio/death.mp3': new URL(require("938761b684182af1")),
    '../audio/door-slam.mp3': new URL(require("4283bdfb26d29b1e")),
    '../audio/eye-laser.mp3': new URL(require("92cb31807985c857")),
    '../audio/jump.mp3': new URL(require("e9371211ecb03429")),
    '../audio/land.mp3': new URL(require("d52aff1d687cf8ee")),
    '../audio/now-youre-a-hero.mp3': new URL(require("a2279bbd83b0e70a")),
    '../audio/rope-explosion.mp3': new URL(require("4a5a8b662d1f6f09")),
    '../audio/tunnel.mp3': new URL(require("7271d57ce7da033f")),
    '../img/axe_18x18.png': new URL(require("9bc6fb652764c13a")),
    '../img/axe_999_64x64.svg': new URL(require("d7b83b70e6592bdb")),
    '../img/back-door_32x64.png': new URL(require("72de858084fa02be")),
    '../img/boss-attack_204x256.png': new URL(require("cd5f32171301a805")),
    '../img/boss-die_192x256.png': new URL(require("1345a573c343a341")),
    '../img/boss-lookup_192x256.png': new URL(require("82b00d5f6456e9ad")),
    '../img/boss-move_204x256.png': new URL(require("2c8ff0e0c05efc28")),
    '../img/boss-still_204x256.png': new URL(require("3f98b60277fd7b66")),
    '../img/chandelier_160x96.png': new URL(require("98fee3b149974ca9")),
    '../img/credits-1_200x200.png': new URL(require("edf6e79e9b4882e3")),
    '../img/credits-2_200x200.png': new URL(require("e503115f39badf28")),
    '../img/credits-3_200x200.png': new URL(require("7f8a1d9696ce940a")),
    '../img/credits-4_200x200.png': new URL(require("c487a497b1efa3bc")),
    '../img/credits-bg_704x512.png': new URL(require("cefe40fa15010f90")),
    '../img/explosion-1_36x36.png': new URL(require("ad14f91c823e549a")),
    '../img/explosion-2_36x36.png': new URL(require("9623141b49264b9f")),
    '../img/explosion-3_36x36.png': new URL(require("a560e9f774468634")),
    '../img/explosion-4_36x36.png': new URL(require("d61b6ba086adcc2b")),
    '../img/explosion-5_36x36.png': new URL(require("fc6ff2e9d0776084")),
    '../img/explosion-6_36x36.png': new URL(require("49d49d949b4fa210")),
    '../img/explosion-7_36x36.png': new URL(require("ddcd0c58537b16bf")),
    '../img/flame-sprites.png': new URL(require("b7083691210ba588")),
    '../img/flame-1_28x28.png': new URL(require("a80917f444244687")),
    '../img/flame-2_28x28.png': new URL(require("260f2762902d877a")),
    '../img/flame-3_28x28.png': new URL(require("ab5192c0f2f9ef49")),
    '../img/info-circle_999_64x64.svg': new URL(require("27ad87d87fda90ea")),
    '../img/laser-1_20x20.png': new URL(require("b533e5384b54f8c1")),
    '../img/laser-2_20x20.png': new URL(require("b4059c2e34ae5e2f")),
    '../img/laser-3_20x20.png': new URL(require("c805683a32a0f7b2")),
    '../img/laser-4_20x20.png': new URL(require("925efa060855a93f")),
    '../img/laser-5_20x20.png': new URL(require("e2cc0bb7680d12f6")),
    '../img/laser-6_20x20.png': new URL(require("88011022ea06ee33")),
    '../img/laser-7_20x20.png': new URL(require("38f8d45e24d12ee2")),
    '../img/page-bg_32x32.png': new URL(require("41c0cfc1fed69d12")),
    '../img/player-fall_30x36.png': new URL(require("34d8afbdb4ac3d5e")),
    '../img/player-hit_30x36.png': new URL(require("12cebfce04fdf60")),
    '../img/player-jump_30x36.png': new URL(require("33ca6d2c4e9cfda4")),
    '../img/player-still_30x36.png': new URL(require("87640417fca58364")),
    '../img/player-throw_30x36.png': new URL(require("9d63b073ae256418")),
    '../img/player-walk-1_30x36.png': new URL(require("52bab78fba5bf111")),
    '../img/player-walk-2_30x36.png': new URL(require("3601a3015750be48")),
    '../img/player-walk-3_30x36.png': new URL(require("d7b5753638ee0521")),
    '../img/plume-1_43x21.png': new URL(require("c5ab14b1cde9566e")),
    '../img/plume-2_43x21.png': new URL(require("d3e05fe56561de51")),
    '../img/plume-3_43x21.png': new URL(require("95c4d7c727d87042")),
    '../img/plume-4_43x21.png': new URL(require("be13a19c622683aa")),
    '../img/plume-5_43x21.png': new URL(require("d4c3c2c2e7dc31af")),
    '../img/plume-6_43x21.png': new URL(require("789a9897de5bf741")),
    '../img/rope_8x192.png': new URL(require("97a322445b6dc7c3")),
    '../img/stick_30x6.png': new URL(require("34041894fe39b81a")),
    '../img/up-arrow_999_64x64.svg': new URL(require("c235fec3d0587fcb")),
    '../img/volume-0_999_64x64.svg': new URL(require("48adc2dd52cfcae4")),
    '../img/volume-1_999_64x64.svg': new URL(require("a5d9b054ef12d754")),
    '../img/bg.png': new URL(require("ad23dad22f63b285")),
    '../img/rope.png': new URL(require("82ff9f0d479476e6"))
};

},{"12598dbdb868850f":"29us3","c7bdd7e9e353a412":"4HJVJ","83b7d5f789511615":"eFyOJ","ef611db54e3dee4f":"dDhxk","2fa3e31ddced57e9":"4MejQ","eb4a90b4e9500517":"72D2l","938761b684182af1":"UqoZE","4283bdfb26d29b1e":"8ke62","92cb31807985c857":"a5aS2","e9371211ecb03429":"a37y3","d52aff1d687cf8ee":"6NbkY","a2279bbd83b0e70a":"1nbRK","4a5a8b662d1f6f09":"jrvtc","7271d57ce7da033f":"5n5YB","9bc6fb652764c13a":"cBkXE","d7b83b70e6592bdb":"bpaEQ","72de858084fa02be":"6EMMp","cd5f32171301a805":"ifCjS","1345a573c343a341":"eWmak","82b00d5f6456e9ad":"fWWvu","2c8ff0e0c05efc28":"9iEtO","3f98b60277fd7b66":"6eHjD","98fee3b149974ca9":"9qypT","edf6e79e9b4882e3":"5Z9jg","e503115f39badf28":"6VuA7","7f8a1d9696ce940a":"hatCt","c487a497b1efa3bc":"ajUvR","cefe40fa15010f90":"ka6cT","ad14f91c823e549a":"4aQWT","9623141b49264b9f":"9Akoc","a560e9f774468634":"cyyOe","d61b6ba086adcc2b":"crN2z","fc6ff2e9d0776084":"kasOt","49d49d949b4fa210":"kADKH","ddcd0c58537b16bf":"4geJL","b7083691210ba588":"f7vcf","a80917f444244687":"bLhDP","260f2762902d877a":"4rn2y","ab5192c0f2f9ef49":"lc1M3","27ad87d87fda90ea":"3DFFq","b533e5384b54f8c1":"4hHmb","b4059c2e34ae5e2f":"lvdi0","c805683a32a0f7b2":"9rWon","925efa060855a93f":"b9mQw","e2cc0bb7680d12f6":"2qjdt","88011022ea06ee33":"7uKvu","38f8d45e24d12ee2":"hiFcg","41c0cfc1fed69d12":"bcMjM","34d8afbdb4ac3d5e":"6rlsm","12cebfce04fdf60":"csQSU","33ca6d2c4e9cfda4":"ekLs0","87640417fca58364":"3YvH0","9d63b073ae256418":"hdSx6","52bab78fba5bf111":"74R60","3601a3015750be48":"aeSS9","d7b5753638ee0521":"eB0Y4","c5ab14b1cde9566e":"hyhYZ","d3e05fe56561de51":"kAm9N","95c4d7c727d87042":"9kArq","be13a19c622683aa":"9zLG0","d4c3c2c2e7dc31af":"8fa1U","789a9897de5bf741":"8gSIB","97a322445b6dc7c3":"gdmoP","34041894fe39b81a":"kcYBy","c235fec3d0587fcb":"l9gKH","48adc2dd52cfcae4":"1sfTQ","a5d9b054ef12d754":"dKXTr","ad23dad22f63b285":"krVQs","82ff9f0d479476e6":"ixRtU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"29us3":[function(require,module,exports) {
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

},{"./helpers/bundle-url":"lgJ39"}],"3ib9d":[function(require,module,exports) {
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
    canvas = document.querySelector('canvas');
    context = this.canvas.getContext('2d');
    drawImage(image, ...rest) {
        if (rest.length === 4) {
            const [dx, dy, dw, dh] = rest;
            this.context.drawImage(image, dx * SCALE, dy * SCALE, dw * SCALE, dh * SCALE);
        } else if (rest.length === 8) {
            const [sx, sy, sw, sh, dx, dy, dw, dh] = rest;
            this.context.drawImage(image, sx, sy, sw, sh, dx * SCALE, dy * SCALE, dw * SCALE, dh * SCALE);
        }
    }
    scale(x, y) {
        this.context.scale(x, y);
    }
    clearRect(x, y, w, h) {
        this.context.clearRect(x * SCALE, y * SCALE, w * SCALE, h * SCALE);
    }
    fillRect(x, y, w, h) {
        this.context.fillRect(x * SCALE, y * SCALE, w * SCALE, h * SCALE);
    }
    fillText(text, x, y) {
        this.context.fillText(text, x * SCALE, y * SCALE);
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5clUK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "healthBar", ()=>healthBar
);
var _canvas = require("./canvas");
class HealthBar {
    health = 1;
    deathTime = null;
    show = false;
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
        _canvas.c.fillStyle = 'white';
        _canvas.c.fillRect(16, 16, _canvas.FRAME_WIDTH - 32, 20);
        _canvas.c.fillRect(16, 32, 154, 24);
        _canvas.c.fillStyle = 'black';
        _canvas.c.fillRect(18, 18, _canvas.FRAME_WIDTH - 36, 16);
        _canvas.c.fillRect(18, 30, 150, 24);
        _canvas.c.fillStyle = 'red';
        _canvas.c.fillRect(20, 20, (_canvas.FRAME_WIDTH - 40) * this.health, 12);
        _canvas.c.fillStyle = 'white';
        _canvas.c.textAlign = 'left';
        _canvas.c.font = 'bold 14px Inter';
        _canvas.c.fillText('Grinning Colossus', 28, 48);
    }
}
const healthBar = new HealthBar();

},{"./canvas":"3ib9d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eqlY2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "audioManager", ()=>audioManager
);
var _urls = require("./urls");
class EndCreditsMusic {
    audio = new BGMusic(_urls.ASSET_URLS['../audio/now-youre-a-hero.mp3']);
    startTime = null;
    play(volume) {
        this.startTime = new Date().valueOf();
        this.audio.play(volume);
    }
    set currentTime(value) {
        if (this.audio.bgMusic) this.audio.bgMusic.currentTime = value;
        const date = new Date();
        date.setSeconds(date.getSeconds() - value);
        this.startTime = date.valueOf();
    }
    get currentTime() {
        if (this.startTime) return (new Date().valueOf() - this.startTime) / 1000;
        else return 0;
    }
}
class BGMusic {
    bgMusic = null;
    constructor(src){
        this.src = src;
    }
    play(volume) {
        const bgMusic = new Audio(this.src.href);
        bgMusic.loop = true;
        bgMusic.volume = volume;
        bgMusic.play();
        this.bgMusic = bgMusic;
    }
    pause() {
        this.bgMusic?.pause();
    }
}
class SFX {
    cache = [];
    constructor(src){
        this.src = src;
    }
    play(volume) {
        let sound;
        const availableSoundInCache = this.cache.find((o)=>o.ended
        );
        if (availableSoundInCache) sound = availableSoundInCache;
        else {
            sound = new Audio(this.src.href);
            this.cache.push(sound);
        }
        sound.volume = volume;
        sound.play();
    }
}
class AudioManager {
    volume = 1;
    tunnelMusic = new BGMusic(_urls.ASSET_URLS['../audio/tunnel.mp3']);
    bossFightMusic = new BGMusic(_urls.ASSET_URLS['../audio/boss-fight.mp3']);
    endCreditsMusic = new EndCreditsMusic();
    axeThrowSound = new SFX(_urls.ASSET_URLS['../audio/axe-throw.mp3']);
    ropeExplosionSound = new SFX(_urls.ASSET_URLS['../audio/rope-explosion.mp3']);
    bossExplosionSound = new SFX(_urls.ASSET_URLS['../audio/boss-explosion.mp3']);
    doorSlamSound = new SFX(_urls.ASSET_URLS['../audio/door-slam.mp3']);
    laserSound = new SFX(_urls.ASSET_URLS['../audio/eye-laser.mp3']);
    deathSound = new SFX(_urls.ASSET_URLS['../audio/death.mp3']);
    jumpSound = new SFX(_urls.ASSET_URLS['../audio/jump.mp3']);
    landSound = new SFX(_urls.ASSET_URLS['../audio/land.mp3']);
    volume0Btn = document.getElementById('volume-0');
    volume1Btn = document.getElementById('volume-1');
    constructor(){
        this.volume0Btn.addEventListener('click', ()=>this.setVolume(0)
        );
        this.volume1Btn.addEventListener('click', ()=>this.setVolume(1)
        );
    }
    playTunnelMusic() {
        this.tunnelMusic.play(this.volume);
    }
    playBossFightMusic() {
        this.bossFightMusic.play(this.volume);
    }
    playEndCreditsMusic() {
        this.endCreditsMusic.play(this.volume);
    }
    pauseTunnelMusic() {
        this.tunnelMusic.pause();
    }
    pauseBossFightMusic() {
        this.bossFightMusic.pause();
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

},{"./urls":"8OWkF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hqADu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Flame", ()=>Flame
);
parcelHelpers.export(exports, "flames", ()=>flames
);
var _coordinates = require("./coordinates");
var _timeManager = require("./time-manager");
var _canvas = require("./canvas");
var _img = require("./img");
var _urls = require("./urls");
class Flame extends _coordinates.Coordinates {
    img = _img.img(_urls.ASSET_URLS['../img/flame-sprites.png']);
    framesPerSecond = 10;
    frameCount = 3;
    frameIndex = 0;
    frameUpdated = new Date().valueOf();
    constructor({ left , top  }){
        super({
            x: left,
            y: top,
            width: 32,
            height: 64
        });
    }
    draw() {
        if (_timeManager.timeManager.now - this.frameUpdated > 1000 / this.framesPerSecond) {
            this.frameIndex = (this.frameIndex + 1) % this.frameCount;
            this.frameUpdated = _timeManager.timeManager.now;
        }
        const sx = this.frameIndex * 32;
        const sy = 0;
        const sw = this.width;
        const sh = this.height;
        const dx = this.localLeft;
        const dy = this.localTop;
        const dw = this.width;
        const dh = this.height;
        this.img && _canvas.c.drawImage(this.img, sx, sy, sw, sh, dx, dy, dw, dh);
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

},{"./coordinates":"96akj","./time-manager":"g5oF1","./canvas":"3ib9d","./img":"hlH8y","./urls":"8OWkF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hlH8y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "img", ()=>img
);
function img(src) {
    const result = new Image();
    result.src = src instanceof URL ? src.href : src;
    return result;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"esUVw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "explosions", ()=>explosions
);
var _coordinates = require("./coordinates");
var _canvas = require("./canvas");
var _frames = require("./frames");
var _img = require("./img");
var _urls = require("./urls");
const explosionImages = [
    _img.img(_urls.ASSET_URLS['../img/explosion-1_36x36.png']),
    _img.img(_urls.ASSET_URLS['../img/explosion-2_36x36.png']),
    _img.img(_urls.ASSET_URLS['../img/explosion-3_36x36.png']),
    _img.img(_urls.ASSET_URLS['../img/explosion-4_36x36.png']),
    _img.img(_urls.ASSET_URLS['../img/explosion-5_36x36.png']),
    _img.img(_urls.ASSET_URLS['../img/explosion-6_36x36.png']),
    _img.img(_urls.ASSET_URLS['../img/explosion-7_36x36.png']), 
];
class Explosions {
    explosions = [];
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
class Explosion extends _coordinates.Coordinates {
    frames = new _frames.Frames({
        images: explosionImages,
        fps: 14
    });
    constructor({ left , top  }){
        super({
            x: left,
            y: top,
            width: 36,
            height: 36
        });
    }
    draw() {
        _canvas.c.drawImage(this.frames.get(), this.localLeft, this.localTop, this.width, this.height);
    }
}
const explosions = new Explosions();

},{"./coordinates":"96akj","./canvas":"3ib9d","./frames":"27wmM","./img":"hlH8y","./urls":"8OWkF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"27wmM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Frames", ()=>Frames
);
class Frames {
    frameUpdated = new Date().valueOf();
    currentIndex = 0;
    constructor({ images , fps  }){
        this.fps = fps;
        this.images = images;
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9bwzS":[function(require,module,exports) {
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
var _audioManager = require("./audio-manager");
var _canvas = require("./canvas");
var _img = require("./img");
var _urls = require("./urls");
class TitleSlide {
    constructor({ timeIn , timeOut , fadeTime  }){
        this.timeIn = timeIn;
        this.timeOut = timeOut;
        this.fadeTime = fadeTime;
    }
    draw() {
        const time = _audioManager.audioManager.endCreditsMusic.currentTime;
        if (time < this.timeIn || time > this.timeOut) return;
        if (time - this.timeIn < this.fadeTime) _canvas.canvas.style.opacity = String((time - this.timeIn) / this.fadeTime);
        else if (this.timeOut - time < this.fadeTime) _canvas.canvas.style.opacity = String((this.timeOut - time) / this.fadeTime);
        _canvas.c.textAlign = 'center';
        _canvas.c.font = '500 14px Inter';
        _canvas.c.fillText('You Have To Burn The Rope', _canvas.FRAME_WIDTH / 2, _canvas.FRAME_HEIGHT / 2 - 10);
        _canvas.c.font = '400 12px Inter';
        _canvas.c.fillText('Thank you for playing!', _canvas.FRAME_WIDTH / 2, _canvas.FRAME_HEIGHT / 2 + 10);
    }
}
class GameOverSlide {
    constructor({ timeIn , fadeTime , text  }){
        this.timeIn = timeIn;
        this.fadeTime = fadeTime;
        this.text = text;
    }
    draw() {
        const time = _audioManager.audioManager.endCreditsMusic.currentTime;
        if (time < this.timeIn) return;
        if (time - this.timeIn < this.fadeTime) _canvas.canvas.style.opacity = String((time - this.timeIn) / this.fadeTime);
        _canvas.c.textAlign = 'center';
        _canvas.c.font = '500 14px Inter';
        _canvas.c.fillText(this.text, _canvas.FRAME_WIDTH / 2, _canvas.FRAME_HEIGHT / 2);
    }
}
class LyricSlide {
    constructor({ timeIn , timeOut , text  }){
        this.timeIn = timeIn;
        this.timeOut = timeOut;
        this.text = text;
    }
    draw() {
        const time = _audioManager.audioManager.endCreditsMusic.currentTime;
        if (time < this.timeIn || time > this.timeOut) return;
        _canvas.c.textAlign = 'center';
        _canvas.c.font = '500 14px Inter';
        _canvas.c.fillText(this.text, _canvas.FRAME_WIDTH / 2, _canvas.FRAME_HEIGHT / 2);
    }
}
class ImageTextSlide {
    constructor({ heading , lines , src , timeIn , timeOut , fadeTime  }){
        this.img = _img.img(src);
        this.heading = heading;
        this.lines = lines;
        this.timeIn = timeIn;
        this.timeOut = timeOut;
        this.fadeTime = fadeTime;
    }
    draw() {
        const time = _audioManager.audioManager.endCreditsMusic.currentTime;
        if (time < this.timeIn || time > this.timeOut) return;
        if (time - this.timeIn < this.fadeTime) _canvas.canvas.style.opacity = String((time - this.timeIn) / this.fadeTime);
        else if (this.timeOut - time < this.fadeTime) _canvas.canvas.style.opacity = String((this.timeOut - time) / this.fadeTime);
        let offsetX = 150;
        const offsetY = 0;
        _canvas.c.drawImage(this.img, _canvas.FRAME_WIDTH / 2 - 250, (_canvas.FRAME_HEIGHT - 200) / 2, 200, 200);
        _canvas.c.textAlign = 'center';
        _canvas.c.font = '500 14px Inter';
        _canvas.c.fillText(this.heading, offsetX + _canvas.FRAME_WIDTH / 2, offsetY + _canvas.FRAME_HEIGHT / 2 - 10);
        _canvas.c.font = '400 12px Inter';
        this.lines.forEach((line, i)=>{
            _canvas.c.fillText(line, offsetX + _canvas.FRAME_WIDTH / 2, offsetY + _canvas.FRAME_HEIGHT / 2 + 5 + 15 * i);
        });
    }
}
class TextImageSlide {
    constructor({ heading , lines , src , timeIn , timeOut , fadeTime  }){
        this.img = _img.img(src);
        this.heading = heading;
        this.lines = lines;
        this.timeIn = timeIn;
        this.timeOut = timeOut;
        this.fadeTime = fadeTime;
    }
    draw() {
        const time = _audioManager.audioManager.endCreditsMusic.currentTime;
        if (time < this.timeIn || time > this.timeOut) return;
        if (time - this.timeIn < this.fadeTime) _canvas.canvas.style.opacity = String((time - this.timeIn) / this.fadeTime);
        else if (this.timeOut - time < this.fadeTime) _canvas.canvas.style.opacity = String((this.timeOut - time) / this.fadeTime);
        let offsetX = -150;
        _canvas.c.drawImage(this.img, _canvas.FRAME_WIDTH / 2 + 50, (_canvas.FRAME_HEIGHT - 200) / 2, 200, 200);
        _canvas.c.textAlign = 'center';
        _canvas.c.font = '500 14px Inter';
        _canvas.c.fillText(this.heading, offsetX + _canvas.FRAME_WIDTH / 2, _canvas.FRAME_HEIGHT / 2 - 10);
        _canvas.c.font = '400 12px Inter';
        this.lines.forEach((line, i)=>{
            _canvas.c.fillText(line, offsetX + _canvas.FRAME_WIDTH / 2, _canvas.FRAME_HEIGHT / 2 + 5 + 15 * i);
        });
    }
}
// You Have To
// Design, Code, Graphics Kian Bashiri (mazapan.se)
const slides = [
    new TitleSlide({
        timeIn: 3.158386,
        timeOut: 10.540059,
        fadeTime: 0.45
    }),
    new ImageTextSlide({
        heading: 'Design, Code, Graphics',
        lines: [
            'Kian Bashiri',
            '(mazapan.se)'
        ],
        src: _urls.ASSET_URLS['../img/credits-1_200x200.png'],
        timeIn: 11.89449,
        timeOut: 19.374947,
        fadeTime: 0.45
    }),
    new TextImageSlide({
        heading: 'Music',
        lines: [
            'Henrik Nåmark',
            '(reachground.se)'
        ],
        src: _urls.ASSET_URLS['../img/credits-2_200x200.png'],
        timeIn: 20.633224,
        timeOut: 28.119119,
        fadeTime: 0.45
    }),
    new ImageTextSlide({
        heading: 'Additional Design',
        lines: [
            'Henrik Nåmark',
            'Christian Dryden'
        ],
        src: _urls.ASSET_URLS['../img/credits-3_200x200.png'],
        timeIn: 29.364552,
        timeOut: 36.967399,
        fadeTime: 0.45
    }),
    new TextImageSlide({
        heading: 'Special thanks to',
        lines: [
            'Umami'
        ],
        src: _urls.ASSET_URLS['../img/credits-4_200x200.png'],
        timeIn: 38.17481,
        timeOut: 45.787413,
        fadeTime: 0.45
    }),
    new LyricSlide({
        timeIn: 52.289314,
        timeOut: 53.952062,
        text: "Now you're a hero"
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
        text: "We're happy you made it"
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
        text: "Now you're a hero"
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
        text: "We're happy you made it"
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
        text: "Yes it's over now"
    }),
    new LyricSlide({
        timeIn: 99.723953,
        timeOut: 101.586446,
        text: "we didn't want to"
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
        text: "I swear it's true"
    }),
    new LyricSlide({
        timeIn: 107.759486,
        timeOut: 108.873535,
        text: 'oohh ohh'
    }),
    new LyricSlide({
        timeIn: 111.125234,
        timeOut: 112.787982,
        text: "Now you're a hero"
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
        text: "We're happy you made it"
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
    }), 
];

},{"./audio-manager":"eqlY2","./canvas":"3ib9d","./img":"hlH8y","./urls":"8OWkF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9scZJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rope", ()=>rope
);
var _coordinates = require("./coordinates");
var _canvas = require("./canvas");
var _img = require("./img");
var _urls = require("./urls");
class FlammableBitOfRope extends _coordinates.Coordinates {
    constructor(){
        super({
            x: 4236,
            y: 192,
            width: 8,
            height: 136
        });
    }
}
class Rope extends _coordinates.Coordinates {
    img = _img.img(_urls.ASSET_URLS['../img/rope_8x192.png']);
    show = true;
    flammableBitOfRope = new FlammableBitOfRope();
    constructor(){
        super({
            x: 4236,
            y: 192,
            width: 8,
            height: 192
        });
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
        this.img && _canvas.c.drawImage(this.img, dx, dy, dw, dh);
    }
}
const rope = new Rope();

},{"./coordinates":"96akj","./canvas":"3ib9d","./img":"hlH8y","./urls":"8OWkF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6HX0g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "plumes", ()=>plumes
);
var _coordinates = require("./coordinates");
var _frames = require("./frames");
var _audioManager = require("./audio-manager");
var _canvas = require("./canvas");
var _img = require("./img");
var _urls = require("./urls");
const plumeImages = [
    _img.img(_urls.ASSET_URLS['../img/plume-1_43x21.png']),
    _img.img(_urls.ASSET_URLS['../img/plume-2_43x21.png']),
    _img.img(_urls.ASSET_URLS['../img/plume-3_43x21.png']),
    _img.img(_urls.ASSET_URLS['../img/plume-4_43x21.png']),
    _img.img(_urls.ASSET_URLS['../img/plume-5_43x21.png']),
    _img.img(_urls.ASSET_URLS['../img/plume-6_43x21.png']), 
];
class Plumes {
    plumes = [];
    add({ left , bottom , facingRight  }) {
        this.plumes.push(new Plume({
            left,
            bottom,
            facingRight
        }));
        _audioManager.audioManager.playLandSound();
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
class Plume extends _coordinates.Coordinates {
    frames = new _frames.Frames({
        images: plumeImages,
        fps: 14
    });
    constructor({ left , bottom , facingRight  }){
        super({
            x: left,
            y: bottom - 21,
            width: 43,
            height: 21
        });
        this.facingRight = facingRight;
    }
    draw() {
        const img = this.frames.get();
        if (this.facingRight) _canvas.c.drawImage(img, this.localLeft, this.localTop, this.width, this.height);
        else {
            _canvas.c.save();
            _canvas.c.scale(-1, 1);
            _canvas.c.drawImage(img, -1 * this.localRight, this.localTop, this.width, this.height);
            _canvas.c.restore();
        }
    }
}
const plumes = new Plumes();

},{"./coordinates":"96akj","./frames":"27wmM","./audio-manager":"eqlY2","./canvas":"3ib9d","./img":"hlH8y","./urls":"8OWkF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eYBZp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LeftPlatform", ()=>LeftPlatform
);
parcelHelpers.export(exports, "platforms", ()=>platforms
);
var _coordinates = require("./coordinates");
var _canvas = require("./canvas");
class Platform extends _coordinates.Coordinates {
    constructor({ left , top , right , bottom  }){
        super({
            x: left,
            y: top,
            width: right - left,
            height: bottom - top
        });
    }
    draw() {
        _canvas.c.fillStyle = '#00f3';
        _canvas.c.fillRect(this.localLeft, this.localTop, this.width, this.height);
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

},{"./coordinates":"96akj","./canvas":"3ib9d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6KuQA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "axes", ()=>axes
);
var _coordinates = require("./coordinates");
var _canvas = require("./canvas");
var _boss = require("./boss");
var _healthbar = require("./healthbar");
var _timeManager = require("./time-manager");
var _audioManager = require("./audio-manager");
var _consts = require("./consts");
var _img = require("./img");
var _urls = require("./urls");
const axeImg = _img.img(_urls.ASSET_URLS['../img/axe_18x18.png']);
class Axes {
    axes = [];
    add({ left , top , shootRight  }) {
        this.axes.push(new Axe({
            left,
            top,
            shootRight
        }));
        _audioManager.audioManager.playAxeThrowSound();
    }
    update() {
        this.axes = this.axes.filter((axe)=>_timeManager.timeManager.now - axe.startTime < 6000 && !axe.hitBoss
        );
        this.axes.forEach((axe)=>axe.update()
        );
    }
}
class Axe extends _coordinates.Coordinates {
    img = axeImg;
    startTime = new Date().valueOf();
    angle = 0;
    finished = false;
    velocity = -_consts.AXE_SPEED_Y;
    turnsPerSecond = 0.25;
    hitBoss = false;
    constructor({ left , top , shootRight  }){
        super({
            x: left,
            y: top,
            width: 18,
            height: 18
        });
        this.shootRight = shootRight;
    }
    update() {
        if (this.intersects(_boss.boss)) {
            this.hitBoss = true;
            _healthbar.healthBar.health -= 0.01;
        }
        this.x += _consts.AXE_SPEED_X * _timeManager.timeManager.msPerFrame * (this.shootRight ? 1 : -1);
        this.velocity += _consts.AXE_GRAVITY * _timeManager.timeManager.msPerFrame;
        this.y += this.velocity * _timeManager.timeManager.msPerFrame;
        this.angle += 2 * Math.PI * this.turnsPerSecond * (_timeManager.timeManager.now - this.startTime) / 1000;
        this.draw();
    }
    draw() {
        _canvas.c.save();
        _canvas.c.setTransform(1, 0, 0, 1, this.localLeft, this.localTop); // sets scale and origin
        _canvas.c.rotate(this.angle);
        _canvas.c.drawImage(this.img, -9, -9, this.width, this.height);
        _canvas.c.restore();
    }
}
const axes = new Axes();

},{"./coordinates":"96akj","./canvas":"3ib9d","./healthbar":"5clUK","./time-manager":"g5oF1","./audio-manager":"eqlY2","./consts":"i99Dc","./img":"hlH8y","./urls":"8OWkF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./boss":"i5HRn"}],"i5HRn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "boss", ()=>boss
);
var _canvas = require("./canvas");
var _consts = require("./consts");
var _coordinates = require("./coordinates");
var _player = require("./player");
var _phaseManager = require("./phase-manager");
var _lasers = require("./lasers");
var _timeManager = require("./time-manager");
var _img = require("./img");
var _urls = require("./urls");
class Boss extends _coordinates.Coordinates {
    mode = 'attack';
    facingRight = false;
    x = 4128;
    y = 608;
    velocity = {
        x: 0,
        y: 0
    };
    images = {
        attack: _img.img(_urls.ASSET_URLS['../img/boss-attack_204x256.png']),
        die: _img.img(_urls.ASSET_URLS['../img/boss-die_192x256.png']),
        lookup: _img.img(_urls.ASSET_URLS['../img/boss-lookup_192x256.png']),
        move: _img.img(_urls.ASSET_URLS['../img/boss-move_204x256.png']),
        still: _img.img(_urls.ASSET_URLS['../img/boss-still_204x256.png'])
    };
    lastAttacked = 0;
    recalculateModeAt = 0;
    constructor(){
        super({
            x: 4128,
            y: 608,
            height: 256,
            width: 192
        });
    }
    draw() {
        let img;
        this.width = 204;
        img = this.images.move;
        if (_phaseManager.phaseManager.phase === _phaseManager.PHASES.bossdying) {
            this.width = 192;
            img = this.images.die;
        } else if (this.mode === 'attack') img = this.images.attack;
        else if (this.mode === 'still') img = this.images.still;
        else if (this.top > _player.player.bottom) {
            this.width = 192;
            img = this.images.lookup;
        }
        if (this.facingRight) _canvas.c.drawImage(img, this.localLeft, this.localTop, this.width, this.height);
        else {
            _canvas.c.save();
            _canvas.c.scale(-1, 1);
            _canvas.c.drawImage(img, -1 * this.localRight, this.localTop, this.width, this.height);
            _canvas.c.restore();
        }
    }
    update() {
        if (_phaseManager.phaseManager.phase === _phaseManager.PHASES.end) return;
        this.draw();
        if (_phaseManager.phaseManager.phase === _phaseManager.PHASES.bossdying) return;
        if (_player.player.left > _consts.ATTACKZONE_LEFT && _player.player.right < _consts.ATTACKZONE_RIGHT) {
            if (_phaseManager.phaseManager.phase === _phaseManager.PHASES.ropeburning || _phaseManager.phaseManager.phase === _phaseManager.PHASES.ropefalling || _player.player.bottom <= _consts.RAFTERS_BOTTOM && (_player.player.left < boss.left || _player.player.right > boss.right)) this.mode = 'move';
            else if (_timeManager.timeManager.now > this.recalculateModeAt) {
                this.recalculateModeAt = _timeManager.timeManager.now + _consts.BOSS_MAXMODEDURATION * Math.random();
                this.mode = [
                    'move',
                    'attack',
                    'still'
                ][Math.floor(3 * Math.random())];
            }
        } else this.mode = 'still';
        this.facingRight = _player.player.center > this.center;
        switch(this.mode){
            case 'attack':
                if (_timeManager.timeManager.now > this.lastAttacked + _consts.BOSS_ATTACKINTERVAL) {
                    _lasers.lasers.add({
                        left: this.facingRight ? this.right - 32 : this.left + 16,
                        top: this.top + 108
                    });
                    this.lastAttacked = _timeManager.timeManager.now;
                }
                break;
            case 'move':
                if (this.facingRight && this.right <= _consts.BOSS_MAXRIGHT) this.x += _consts.BOSS_SPEED;
                else if (!this.facingRight && this.left >= _consts.BOSS_MAXLEFT) this.x -= _consts.BOSS_SPEED;
        }
    }
}
const boss = new Boss();

},{"./canvas":"3ib9d","./consts":"i99Dc","./coordinates":"96akj","./time-manager":"g5oF1","./img":"hlH8y","./urls":"8OWkF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./lasers":"4YS9J","./player":"cK1Qv","./phase-manager":"2aQoL"}],"4YS9J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lasers", ()=>lasers
);
var _coordinates = require("./coordinates");
var _canvas = require("./canvas");
var _frames = require("./frames");
var _timeManager = require("./time-manager");
var _audioManager = require("./audio-manager");
var _consts = require("./consts");
var _player = require("./player");
var _explosions = require("./explosions");
var _img = require("./img");
var _urls = require("./urls");
const laserImages = [
    _img.img(_urls.ASSET_URLS['../img/laser-1_20x20.png']),
    _img.img(_urls.ASSET_URLS['../img/laser-2_20x20.png']),
    _img.img(_urls.ASSET_URLS['../img/laser-3_20x20.png']),
    _img.img(_urls.ASSET_URLS['../img/laser-4_20x20.png']),
    _img.img(_urls.ASSET_URLS['../img/laser-5_20x20.png']),
    _img.img(_urls.ASSET_URLS['../img/laser-6_20x20.png']),
    _img.img(_urls.ASSET_URLS['../img/laser-7_20x20.png']), 
];
class Lasers {
    lasers = [];
    add({ left , top  }) {
        this.lasers.push(new Laser({
            left,
            top
        }));
        _audioManager.audioManager.playLaserSound();
    }
    update() {
        this.lasers = this.lasers.filter((laser)=>!laser.finished && !laser.hitPlayer
        );
        this.lasers.forEach((laser)=>laser.update()
        );
    }
}
class Laser extends _coordinates.Coordinates {
    laserFrames = new _frames.Frames({
        fps: 24,
        images: laserImages
    });
    startTime = _timeManager.timeManager.now;
    finished = false;
    hitPlayer = false;
    constructor({ left , top  }){
        super({
            x: left,
            y: top,
            width: 20,
            height: 20
        });
        const gapX = _player.player.x - this.x;
        const gapY = _player.player.y - this.y;
        const gap = Math.sqrt(Math.pow(gapX, 2) + Math.pow(gapY, 2));
        this.dx = _consts.LASER_SPEED * gapX / gap;
        this.dy = _consts.LASER_SPEED * gapY / gap;
    }
    update() {
        if (this.intersects(_player.player)) {
            _player.player.hurtByLaser();
            this.hitPlayer = true;
        }
        if (_timeManager.timeManager.now - this.startTime > _consts.LASER_DURATION) {
            this.finished = true;
            _explosions.explosions.add({
                left: this.left,
                top: this.top
            });
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
    draw() {
        _canvas.c.drawImage(this.laserFrames.get(), this.localLeft, this.localTop, this.width, this.height);
    }
}
const lasers = new Lasers();

},{"./coordinates":"96akj","./canvas":"3ib9d","./frames":"27wmM","./time-manager":"g5oF1","./audio-manager":"eqlY2","./consts":"i99Dc","./explosions":"esUVw","./img":"hlH8y","./urls":"8OWkF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./player":"cK1Qv"}],"cK1Qv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Player", ()=>Player
);
parcelHelpers.export(exports, "player", ()=>player
);
var _audioManager = require("./audio-manager");
var _axes = require("./axes");
var _canvas = require("./canvas");
var _consts = require("./consts");
var _coordinates = require("./coordinates");
var _flames = require("./flames");
var _boss = require("./boss");
var _frames = require("./frames");
var _phaseManager = require("./phase-manager");
var _platforms = require("./platforms");
var _plumes = require("./plumes");
var _timeManager = require("./time-manager");
var _img = require("./img");
var _urls = require("./urls");
class KeyManager {
    keys = {
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
    constructor(){
        const jump = ()=>{
            if (!player.stunned && player.velocity.y === 0) {
                player.velocity.y -= _consts.JUMP_SPEED;
                _audioManager.audioManager.playJumpSound();
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
            if (!player.stunned && _timeManager.timeManager.now > player.lastAttack + _consts.PLAYER_ATTACKINTERVAL) player.attack();
        };
        addEventListener('keydown', (e)=>{
            if (_phaseManager.phaseManager.phase >= _phaseManager.PHASES.ropeburning) return;
            const fn = {
                ' ': jump,
                ArrowUp: jump,
                ArrowRight: startRight,
                ArrowLeft: startLeft
            }[e.key];
            (fn ?? attack)();
        });
        addEventListener('keyup', (e)=>{
            const fn = {
                ArrowRight: stopRight,
                ArrowLeft: stopLeft
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
class Player extends _coordinates.Coordinates {
    hasFlame = false;
    facingRight = true;
    /** px per frame */ velocity = {
        x: 0,
        y: 0
    };
    images = {
        fall: _img.img(_urls.ASSET_URLS['../img/player-fall_30x36.png']),
        hit: _img.img(_urls.ASSET_URLS['../img/player-hit_30x36.png']),
        jump: _img.img(_urls.ASSET_URLS['../img/player-jump_30x36.png']),
        still: _img.img(_urls.ASSET_URLS['../img/player-still_30x36.png']),
        throw: _img.img(_urls.ASSET_URLS['../img/player-throw_30x36.png']),
        walk1: _img.img(_urls.ASSET_URLS['../img/player-walk-1_30x36.png']),
        walk2: _img.img(_urls.ASSET_URLS['../img/player-walk-2_30x36.png']),
        walk3: _img.img(_urls.ASSET_URLS['../img/player-walk-3_30x36.png']),
        stick: _img.img(_urls.ASSET_URLS['../img/stick_30x6.png']),
        flame1: _img.img(_urls.ASSET_URLS['../img/flame-1_28x28.png']),
        flame2: _img.img(_urls.ASSET_URLS['../img/flame-2_28x28.png']),
        flame3: _img.img(_urls.ASSET_URLS['../img/flame-3_28x28.png'])
    };
    walkFrames = new _frames.Frames({
        fps: 12,
        images: [
            this.images.walk3,
            this.images.walk2,
            this.images.walk1
        ]
    });
    flameFrames = new _frames.Frames({
        fps: 12,
        images: [
            this.images.flame1,
            this.images.flame2,
            this.images.flame3
        ]
    });
    lastAttack = 0;
    lastHit = 0;
    constructor({ x , y  }){
        super({
            x,
            y,
            height: 36,
            width: 30
        });
    }
    get flying() {
        return _timeManager.timeManager.now - this.lastHit < 500;
    }
    get stunned() {
        return _timeManager.timeManager.now - this.lastHit < 1500;
    }
    get blinking() {
        return _timeManager.timeManager.now - this.lastHit < 2000;
    }
    get nextFrame() {
        return new _coordinates.Coordinates({
            x: this.x + this.velocity.x * _timeManager.timeManager.msPerFrame,
            y: this.y + this.velocity.y * _timeManager.timeManager.msPerFrame,
            width: this.width,
            height: this.height
        });
    }
    attack() {
        this.hasFlame = false;
        this.lastAttack = new Date().valueOf();
        _axes.axes.add({
            left: this.left + 0.5 * this.width,
            top: this.top + 0.5 * this.height,
            shootRight: this.facingRight
        });
    }
    land() {
        _plumes.plumes.add({
            left: this.left - 43,
            bottom: this.bottom,
            facingRight: false
        });
        _plumes.plumes.add({
            left: this.right,
            bottom: this.bottom,
            facingRight: true
        });
    }
    hurtByBoss() {
        this.hasFlame = false;
        this.lastHit = new Date().valueOf();
        this.velocity.x = (this.facingRight ? -1 : 1) * _consts.JUMP_SPEED;
    }
    hurtByLaser() {
        this.hasFlame = false;
        if (!this.blinking) {
            this.velocity.y = -_consts.JUMP_SPEED;
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
        else if (_timeManager.timeManager.now - this.lastAttack < 100) img = this.images.throw;
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
            const sinceHit = _timeManager.timeManager.now - this.lastHit;
            if (sinceHit % 500 > 300) return;
        }
        if (this.facingRight) {
            _canvas.c.drawImage(img, this.localLeft, this.localTop, this.width, this.height);
            if (this.hasFlame) {
                _canvas.c.drawImage(this.images.stick, this.localLeft + 5 + torchOffset.x, this.localTop + 18 + torchOffset.y, 30, 6);
                _canvas.c.drawImage(this.flameFrames.get(), this.localLeft + 20 + torchOffset.x, this.localTop - 7 + torchOffset.y, 28, 28);
            }
        } else {
            _canvas.c.save();
            _canvas.c.scale(-1, 1);
            _canvas.c.drawImage(img, -1 * this.localRight, this.localTop, this.width, this.height);
            if (this.hasFlame) {
                _canvas.c.drawImage(this.images.stick, -this.localRight + 5 + torchOffset.x, this.localTop + 18 + torchOffset.y, 30, 6);
                _canvas.c.drawImage(this.flameFrames.get(), -this.localRight + 20 + torchOffset.x, this.localTop - 7 + torchOffset.y, 28, 28);
            }
            _canvas.c.restore();
        }
    }
    update() {
        // Update Y velocity
        this.velocity.y += _consts.PLAYER_GRAVITY * _timeManager.timeManager.msPerFrame;
        // Update X velocity
        if (this.flying) this.velocity.x *= 0.9;
        else if (keys.keys.right.pressed) this.velocity.x = _consts.WALKING_SPEED;
        else if (keys.keys.left.pressed) this.velocity.x = -_consts.WALKING_SPEED;
        else this.velocity.x = 0;
        _platforms.platforms.forEach((platform)=>{
            if (this.right > platform.left && this.left < platform.right || this.nextFrame.right > platform.left && this.nextFrame.left < platform.right) {
                if (this.bottom <= platform.top && this.nextFrame.bottom >= platform.top) {
                    this.y = platform.y - this.height;
                    if (this.velocity.y > 0.1 * _timeManager.timeManager.msPerFrame) this.land();
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
        this.x += this.velocity.x * _timeManager.timeManager.msPerFrame;
        this.y += this.velocity.y * _timeManager.timeManager.msPerFrame;
        if (!this.hasFlame) this.hasFlame = _flames.flames.some((flame)=>this.intersects(flame)
        );
        this.draw();
        if (this.intersects(_boss.boss)) this.hurtByBoss();
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

},{"./audio-manager":"eqlY2","./axes":"6KuQA","./canvas":"3ib9d","./consts":"i99Dc","./coordinates":"96akj","./flames":"hqADu","./boss":"i5HRn","./frames":"27wmM","./platforms":"eYBZp","./plumes":"6HX0g","./time-manager":"g5oF1","./img":"hlH8y","./urls":"8OWkF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./phase-manager":"2aQoL"}],"2aQoL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PHASES", ()=>PHASES
);
parcelHelpers.export(exports, "phaseManager", ()=>phaseManager
);
var _healthbar = require("./healthbar");
var _platforms = require("./platforms");
var _explosions = require("./explosions");
var _canvas = require("./canvas");
var _coordinates = require("./coordinates");
var _chandelier = require("./chandelier");
var _rope = require("./rope");
var _audioManager = require("./audio-manager");
var _buttonManager = require("./button-manager");
var _img = require("./img");
var _urls = require("./urls");
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
    backDoorImage = _img.img(_urls.ASSET_URLS['../img/back-door_32x64.png']);
    showBackDoor = false;
    phase = PHASES.clicktostart;
    startStartPhase() {
        if (this.phase >= PHASES.start) return;
        this.phase = PHASES.start;
        _buttonManager.buttonManager.show();
    }
    startTunnelPhase() {
        if (this.phase >= PHASES.tunnel) return;
        _audioManager.audioManager.playTunnelMusic();
        this.phase = PHASES.tunnel;
    }
    startBossFightPhase() {
        if (this.phase >= PHASES.bossfight) return;
        _audioManager.audioManager.pauseTunnelMusic();
        _audioManager.audioManager.playBossFightMusic();
        this.showBackDoor = true;
        _healthbar.healthBar.show = true;
        _platforms.platforms.push(new _platforms.LeftPlatform({
            right: 3456,
            bottom: 864,
            top: 800
        }));
        _explosions.explosions.add({
            left: 3422,
            top: 798
        });
        _explosions.explosions.add({
            left: 3422,
            top: 830
        });
        _audioManager.audioManager.playDoorslamSound();
        this.phase = PHASES.bossfight;
    }
    async startRopeBurningPhase() {
        if (this.phase >= PHASES.ropeburning) return;
        _audioManager.audioManager.pauseBossFightMusic();
        this.phase = PHASES.ropeburning;
        _explosions.explosions.add({
            left: 4224,
            top: 192
        });
        _audioManager.audioManager.playRopeExplosionSound();
        await wait(200);
        _explosions.explosions.add({
            left: 4224,
            top: 224
        });
        _audioManager.audioManager.playRopeExplosionSound();
        await wait(200);
        _explosions.explosions.add({
            left: 4224,
            top: 256
        });
        _audioManager.audioManager.playRopeExplosionSound();
        await wait(200);
        _explosions.explosions.add({
            left: 4224,
            top: 288
        });
        _audioManager.audioManager.playRopeExplosionSound();
        await wait(200);
        _explosions.explosions.add({
            left: 4224,
            top: 320
        });
        _audioManager.audioManager.playRopeExplosionSound();
        this.startRopeFallingPhase();
    }
    async startRopeFallingPhase() {
        if (this.phase >= PHASES.ropefalling) return;
        this.phase = PHASES.ropefalling;
        _chandelier.chandelier.dropped = true;
    }
    async startBossDyingPhase() {
        if (this.phase >= PHASES.bossdying) return;
        this.phase = PHASES.bossdying;
        _healthbar.healthBar.die();
        _chandelier.chandelier.show = false;
        _rope.rope.show = false;
        // #region Explosions
        _explosions.explosions.add({
            left: 4291,
            top: 642
        });
        _explosions.explosions.add({
            left: 4283,
            top: 676
        });
        _explosions.explosions.add({
            left: 4264,
            top: 681
        });
        _explosions.explosions.add({
            left: 4282,
            top: 688
        });
        _explosions.explosions.add({
            left: 4186,
            top: 621
        });
        _explosions.explosions.add({
            left: 4194,
            top: 649
        });
        _explosions.explosions.add({
            left: 4203,
            top: 642
        });
        _explosions.explosions.add({
            left: 4223,
            top: 664
        });
        _explosions.explosions.add({
            left: 4219,
            top: 668
        });
        _explosions.explosions.add({
            left: 4203,
            top: 686
        });
        _explosions.explosions.add({
            left: 4200,
            top: 670
        });
        _explosions.explosions.add({
            left: 4200,
            top: 700
        });
        _explosions.explosions.add({
            left: 4205,
            top: 792
        });
        _explosions.explosions.add({
            left: 4248,
            top: 730
        });
        _explosions.explosions.add({
            left: 4154,
            top: 686
        });
        _explosions.explosions.add({
            left: 4126,
            top: 725
        });
        _explosions.explosions.add({
            left: 4214,
            top: 598
        });
        _audioManager.audioManager.playDeathSound();
        await wait(300);
        _explosions.explosions.add({
            left: 4159,
            top: 654
        });
        _audioManager.audioManager.playBossExplosionSound();
        await wait(300);
        _explosions.explosions.add({
            left: 4161,
            top: 706
        });
        _audioManager.audioManager.playBossExplosionSound();
        await wait(300);
        _explosions.explosions.add({
            left: 4274,
            top: 851
        });
        _audioManager.audioManager.playBossExplosionSound();
        await wait(300);
        _explosions.explosions.add({
            left: 4206,
            top: 734
        });
        _audioManager.audioManager.playBossExplosionSound();
        await wait(300);
        _explosions.explosions.add({
            left: 4192,
            top: 733
        });
        _audioManager.audioManager.playBossExplosionSound();
        await wait(300);
        _explosions.explosions.add({
            left: 4203,
            top: 732
        });
        _audioManager.audioManager.playBossExplosionSound();
        await wait(300);
        _explosions.explosions.add({
            left: 4252,
            top: 546
        });
        _audioManager.audioManager.playBossExplosionSound();
        await wait(300);
        // #endregion
        this.startEndPhase();
    }
    async startEndPhase() {
        if (this.phase >= PHASES.end) return;
        this.phase = PHASES.end;
        // #region Explosions
        _explosions.explosions.add({
            left: 4237,
            top: 560
        });
        _explosions.explosions.add({
            left: 4205,
            top: 596
        });
        _explosions.explosions.add({
            left: 4251,
            top: 603
        });
        _explosions.explosions.add({
            left: 4231,
            top: 642
        });
        _explosions.explosions.add({
            left: 4295,
            top: 644
        });
        _explosions.explosions.add({
            left: 4249,
            top: 656
        });
        _explosions.explosions.add({
            left: 4243,
            top: 681
        });
        _explosions.explosions.add({
            left: 4203,
            top: 684
        });
        _explosions.explosions.add({
            left: 4266,
            top: 684
        });
        _explosions.explosions.add({
            left: 4219,
            top: 692
        });
        _explosions.explosions.add({
            left: 4215,
            top: 700
        });
        _explosions.explosions.add({
            left: 4293,
            top: 730
        });
        _explosions.explosions.add({
            left: 4126,
            top: 740
        });
        _explosions.explosions.add({
            left: 4187,
            top: 746
        });
        _explosions.explosions.add({
            left: 4224,
            top: 750
        });
        _explosions.explosions.add({
            left: 4199,
            top: 767
        });
        _explosions.explosions.add({
            left: 4176,
            top: 768
        });
        _explosions.explosions.add({
            left: 4296,
            top: 813
        });
        _explosions.explosions.add({
            left: 4161,
            top: 820
        });
        _explosions.explosions.add({
            left: 4179,
            top: 844
        });
        _explosions.explosions.add({
            left: 4180,
            top: 882
        });
        _audioManager.audioManager.playDeathSound();
        // #endregion
        await wait(2000);
        _audioManager.audioManager.playEndCreditsMusic();
    }
    drawBackDoor() {
        _canvas.c.drawImage(this.backDoorImage, 3424 - _coordinates.offset.x, 800 - _coordinates.offset.y, 32, 64);
    }
}
const phaseManager = new PhaseManager();

},{"./healthbar":"5clUK","./platforms":"eYBZp","./explosions":"esUVw","./canvas":"3ib9d","./coordinates":"96akj","./rope":"9scZJ","./audio-manager":"eqlY2","./img":"hlH8y","./urls":"8OWkF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./chandelier":"bvCN6","./button-manager":"2Z5wt"}],"bvCN6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "chandelier", ()=>chandelier
);
var _coordinates = require("./coordinates");
var _canvas = require("./canvas");
var _consts = require("./consts");
var _timeManager = require("./time-manager");
var _phaseManager = require("./phase-manager");
var _boss = require("./boss");
var _img = require("./img");
var _urls = require("./urls");
class Chandelier extends _coordinates.Coordinates {
    img = _img.img(_urls.ASSET_URLS['../img/chandelier_160x96.png']);
    show = true;
    dropped = false;
    velocity = {
        y: 0
    };
    constructor(){
        super({
            x: 4160,
            y: 384,
            width: 160,
            height: 96
        });
    }
    draw() {
        this.img && _canvas.c.drawImage(this.img, this.localLeft, this.localTop, this.width, this.height);
    }
    update() {
        if (!this.show) return;
        if (this.dropped) {
            this.velocity.y += _consts.CHANDELIER_GRAVITY * _timeManager.timeManager.msPerFrame;
            this.y += this.velocity.y * _timeManager.timeManager.msPerFrame;
            if (this.yCenter > _boss.boss.yCenter) _phaseManager.phaseManager.startBossDyingPhase();
        }
        this.draw();
    }
}
const chandelier = new Chandelier();

},{"./coordinates":"96akj","./canvas":"3ib9d","./consts":"i99Dc","./time-manager":"g5oF1","./phase-manager":"2aQoL","./boss":"i5HRn","./img":"hlH8y","./urls":"8OWkF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Z5wt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buttonManager", ()=>buttonManager
);
class ButtonManager {
    buttons = document.getElementById('buttons');
    show() {
        this.buttons.classList.remove('hidden');
    }
    hide() {
        this.buttons.classList.add('hidden');
    }
    setOpacity(value) {
        this.buttons.style.opacity = String(value);
    }
}
const buttonManager = new ButtonManager();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ezoyF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "debugMenu", ()=>debugMenu
);
var _canvas = require("./canvas");
var _timeManager = require("./time-manager");
var _player = require("./player");
class DebugMenu {
    constructor(){}
    draw() {
        _canvas.c.fillStyle = '#000c';
        _canvas.c.fillRect(0, 0, 200, 200);
        _canvas.c.fillStyle = '#bbb';
        _canvas.c.textAlign = 'left';
        _canvas.c.font = 'bold 14px Inter';
        _canvas.c.fillText('ms per frame', 58, 48);
        _canvas.c.textAlign = 'right';
        _canvas.c.fillStyle = 'white';
        _canvas.c.fillText(String(_timeManager.timeManager.msPerFrame), 28, 48);
        _canvas.c.fillStyle = '#bbb';
        _canvas.c.textAlign = 'left';
        _canvas.c.font = 'bold 14px Inter';
        _canvas.c.fillText(String(_player.player.velocity.y), 58, 68);
    }
}
const debugMenu = new DebugMenu();

},{"./canvas":"3ib9d","./time-manager":"g5oF1","./player":"cK1Qv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7fmqN","8lqZg"], "8lqZg", "parcelRequiref536")

//# sourceMappingURL=index.975ef6c8.js.map
