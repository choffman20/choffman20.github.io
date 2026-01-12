(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container style=\"height:100%\">\n  \n  <mat-sidenav mode=\"over\" #sidenav (click)=\"sidenav.toggle()\">\n    <mat-nav-list>\n      <a mat-list-item href=\"#/home\"> Board Games </a> \n      <a  mat-list-item href=\"#/player-stats\"> Player Stats </a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n      <mat-toolbar color=\"primary\">\n          <button mat-button (click)=\"sidenav.toggle()\"><mat-icon>menu</mat-icon></button>\n          Board-Game Stats\n          <span fxFlex></span>\n          <button mat-button [matMenuTriggerFor]='themeMenu'>\n            <mat-icon>format_color_fill</mat-icon>\n          </button>\n          <mat-menu #themeMenu>\n            <button mat-menu-item (click)=\"onSetTheme('default-theme')\">Light</button>\n            <button mat-menu-item (click)=\"onSetTheme('dark-theme')\">Dark</button>\n          </mat-menu>\n        </mat-toolbar>\n\n    <router-outlet></router-outlet>\n\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-info/game-info.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-info/game-info.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>{{data.name}}</h2>\n<mat-dialog-content>\n    <div fxLayout=\"row\">\n        <img src=\"{{data.thumbnail}}\" style=\"padding: 15px\" />\n        <div fxLayout=\"column\">\n            <div>\n                <b>Year Published:</b> {{data.yearpublished}}\n            </div>\n            <div>\n                <b>Players:</b> {{data.minplayers}} - {{data.maxplayers}}\n            </div>\n            <div>\n                <b> Play Time:</b> {{data.minplaytime}} - {{data.maxplaytime}}\n            </div>\n            <div>\n                <b> Alt Names:</b>\n                <ol>\n                    <li *ngFor=\"let name of data.altnames\">\n                        {{ name.$.value }}\n                    </li>\n                </ol>\n            </div>\n        </div>\n    </div>\n    <div style=\"line-height: 25px\">\n        Description\n        {{data.description}}\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n    <button mat-button mat-dialog-close>Close</button>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/player-stats/player-stats.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/player-stats/player-stats.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"stats-table mat-elevation-z8\">\n    <table mat-table [dataSource]=\"datasource\" matSort style=\"width:100%\">\n        <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n            <td mat-cell *matCellDef=\"let player\"> {{player.name}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"wins\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> wins </th>\n            <td mat-cell *matCellDef=\"let player\"> {{player.wins}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"plays\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> plays </th>\n            <td mat-cell *matCellDef=\"let player\"> {{player.plays}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"percent\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> percent </th>\n            <td mat-cell *matCellDef=\"let player\"> {{player.percent * 100 | number: '1.2-2'}}% </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky:true\"></tr>\n        <tr mat-row (click)=\"openWinInfo(row)\" *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/player-wins/player-wins.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/player-wins/player-wins.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>{{data.name}}'s wins</h2>\n\n<div class=\"stats-table\">\n    <table mat-table [dataSource]=\"datasource\" matSort style=\"width:100%\">\n        <ng-container matColumnDef=\"game\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Game </th>\n            <td mat-cell *matCellDef=\"let games\"> {{games.game}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"wins\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> wins </th>\n            <td mat-cell *matCellDef=\"let games\"> {{games.wins}} </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/results-list-item/results-list-item.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/results-list-item/results-list-item.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-list-item style=\"margin-left:17%\">\n    <h4 mat-line style=\"font-size:14px;\">\n        <mat-icon mat-list-icon>date_range</mat-icon>\n        <b> Date Played: </b> {{result.details.date | date:'fullDate'}}\n    </h4>\n    <h4 mat-line>\n        <mat-icon mat-list-icon>timer</mat-icon>\n        <b> Game Duration: </b> {{result.details.duration}} minutes\n    </h4>\n    <h4 mat-line>\n        <mat-icon mat-list-icon>home</mat-icon>\n        <b> Game Location: </b> {{result.details.location}}\n    </h4>\n</mat-list-item>\n<table style=\"margin:10px; width: 80%; float:right\">\n    <thead>\n        <th>\n            <mat-icon mat-list-icon>person</mat-icon> Player\n        </th>\n        <th>\n            <mat-icon mat-list-icon>insert_chart</mat-icon> Score\n        </th>\n        <th>\n            <mat-icon mat-list-icon>palette</mat-icon> Color\n        </th>\n        <th>\n            <mat-icon mat-list-icon>subscriptions</mat-icon> Turn Order\n        </th>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let player of result.players\" [ngClass]=\"{'winner' : player.win == 1}\">\n            <td>{{player.name}}</td>\n            <td>{{player.score}}</td>\n            <td>{{player.color}}</td>\n            <td>{{player.startposition}}</td>\n        </tr>\n    </tbody>\n</table>\n<div style=\"clear:both\"></div>\n\n<style>\n    table {\n        font-family: arial, sans-serif;\n        border-collapse: collapse;\n        width: 100%;\n    }\n\n    td,\n    th {\n        border: 1px solid #dddddd;\n        text-align: left;\n        padding: 8px;\n    }\n\n    .winner {\n        background-color: cornflowerblue\n    }\n</style>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/results-list/results-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/results-list/results-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"text-align:-webkit-center; margin-top: 100px\" *ngIf='!plays'>\n    <mat-spinner></mat-spinner>\n</div>\n<div class=\"demo-tab-content\" style=\"margin-top: 25px\" *ngIf='plays'>\n    <mat-accordion multi=\"true\">\n        <mat-expansion-panel *ngFor=\"let play of plays | keyvalue: noSort\" style=\"width: 75%; margin-left:12.5%\"\n            (afterExpand)='getGameInfo(play.key)'>\n            <mat-expansion-panel-header>\n                <mat-panel-title>\n                    {{play.value.gameInfo.name }} ({{play.value.results.length}})\n                </mat-panel-title>\n            </mat-expansion-panel-header>\n            <div *ngIf=\"!play.value.gameInfo.image; else gameInfo\" style=\"float:left\">\n                <div class=\"ghost_icon\"></div>\n                <div class=\"ghost_text\" style=\"width:175px\"></div>\n                <div class=\"ghost_text\"></div>\n            </div>\n            <ng-template #gameInfo>\n                <div style=\"float:left; width:17%;\">\n                    <img src=\"{{play.value.gameInfo.image}}\" style=\"width:100%\" />\n                    <div>\n                        <b>Players:</b> {{play.value.gameInfo.minplayers}} - {{play.value.gameInfo.maxplayers}}\n                    </div>\n                    <div>\n                        <b>Play Time:</b> {{play.value.gameInfo.minplaytime}} - {{play.value.gameInfo.maxplaytime}}\n                    </div>\n                    <div style=\"text-align:center\">\n                        <button (click)=\"moreDetails(play.value.gameInfo)\" mat-button>See more...</button>\n                    </div>\n                    <div style=\"clear:both\"></div>\n                </div>\n            </ng-template>\n            <mat-list>\n                <div *ngFor=\"let result of play.value.results; let i = index\">\n                    <app-results-list-item [result]='result'></app-results-list-item>\n                    <hr *ngIf=\"(i + 1 ) != play.value.results.length\" style=\"margin-left:17%\" />\n                </div>\n            </mat-list>\n        </mat-expansion-panel>\n    </mat-accordion>\n</div>\n\n<style>\n    html,\n    body {\n        height: 100%;\n    }\n</style>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_results_list_results_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/results-list/results-list.component */ "./src/app/components/results-list/results-list.component.ts");
/* harmony import */ var _components_player_stats_player_stats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/player-stats/player-stats.component */ "./src/app/components/player-stats/player-stats.component.ts");





const routes = [
    {
        path: 'boardgames',
        component: _components_results_list_results_list_component__WEBPACK_IMPORTED_MODULE_3__["ResultsListComponent"]
    },
    {
        path: 'player-stats',
        component: _components_player_stats_player_stats_component__WEBPACK_IMPORTED_MODULE_4__["PlayerStatsComponent"]
    },
    {
        path: '',
        redirectTo: 'boardgames',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'boardgames'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");



let AppComponent = class AppComponent {
    constructor(overlayContainer) {
        this.overlayContainer = overlayContainer;
        this.title = 'boardgame-site';
    }
    ngOnInit() {
        const theme = localStorage.getItem('theme');
        if (!theme) {
            localStorage.setItem('theme', 'default-theme');
        }
        else {
            this.onSetTheme(theme);
        }
    }
    onSetTheme(theme) {
        this.overlayContainer.getContainerElement().classList.add(theme);
        this.componentCssClass = theme;
        localStorage.setItem('theme', theme);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayContainer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], AppComponent.prototype, "componentCssClass", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_bgg_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/bgg.service */ "./src/app/services/bgg.service.ts");
/* harmony import */ var _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth.interceptor */ "./src/app/services/auth.interceptor.ts");
/* harmony import */ var _components_results_list_results_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/results-list/results-list.component */ "./src/app/components/results-list/results-list.component.ts");
/* harmony import */ var _components_results_list_item_results_list_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/results-list-item/results-list-item.component */ "./src/app/components/results-list-item/results-list-item.component.ts");
/* harmony import */ var _components_game_info_game_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/game-info/game-info.component */ "./src/app/components/game-info/game-info.component.ts");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _components_player_stats_player_stats_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/player-stats/player-stats.component */ "./src/app/components/player-stats/player-stats.component.ts");
/* harmony import */ var _components_player_wins_player_wins_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/player-wins/player-wins.component */ "./src/app/components/player-wins/player-wins.component.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_results_list_results_list_component__WEBPACK_IMPORTED_MODULE_10__["ResultsListComponent"],
            _components_results_list_item_results_list_item_component__WEBPACK_IMPORTED_MODULE_11__["ResultsListItemComponent"],
            _components_game_info_game_info_component__WEBPACK_IMPORTED_MODULE_12__["GameInfoDialog"],
            _components_player_stats_player_stats_component__WEBPACK_IMPORTED_MODULE_14__["PlayerStatsComponent"],
            _components_player_wins_player_wins_component__WEBPACK_IMPORTED_MODULE_15__["PlayerWinsDialog"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _shared_material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"],
        ],
        entryComponents: [_components_game_info_game_info_component__WEBPACK_IMPORTED_MODULE_12__["GameInfoDialog"], _components_player_wins_player_wins_component__WEBPACK_IMPORTED_MODULE_15__["PlayerWinsDialog"]],
        providers: [_services_bgg_service__WEBPACK_IMPORTED_MODULE_8__["BggService"], { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["AuthInterceptor"], multi: true }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/game-info/game-info.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/game-info/game-info.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/components/game-info/game-info.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/game-info/game-info.component.ts ***!
  \*************************************************************/
/*! exports provided: GameInfoDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameInfoDialog", function() { return GameInfoDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let GameInfoDialog = class GameInfoDialog {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
    }
};
GameInfoDialog.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
GameInfoDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-info/game-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-info.component.scss */ "./src/app/components/game-info/game-info.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], GameInfoDialog);



/***/ }),

/***/ "./src/app/components/player-stats/player-stats.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/player-stats/player-stats.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".stats-table {\n  width: 75%;\n  height: 75%;\n  overflow: auto;\n  margin: 0 auto;\n  margin-top: 25px;\n}\n\n.mat-row:hover {\n  background-color: #aaa;\n  cursor: pointer;\n}");

/***/ }),

/***/ "./src/app/components/player-stats/player-stats.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/player-stats/player-stats.component.ts ***!
  \*******************************************************************/
/*! exports provided: PlayerStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerStatsComponent", function() { return PlayerStatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_bgg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/bgg.service */ "./src/app/services/bgg.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _player_wins_player_wins_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../player-wins/player-wins.component */ "./src/app/components/player-wins/player-wins.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");







let PlayerStatsComponent = class PlayerStatsComponent {
    constructor(bggService, dialog) {
        this.bggService = bggService;
        this.dialog = dialog;
        this.displayedColumns = ['name', 'wins', 'plays', 'percent'];
        this.playerStats = new Map();
    }
    ngOnInit() {
        this.bggService.getPlays$().subscribe(allPlays => {
            allPlays.forEach(play => {
                play.results.forEach(result => {
                    if (result.players) {
                        result.players.forEach(player => {
                            if (this.playerStats.has(player.name)) {
                                const winsAndPlays = this.playerStats.get(player.name);
                                if (+player.win) {
                                    ++winsAndPlays.wins;
                                    ++winsAndPlays.plays;
                                    winsAndPlays.gamesWon.push(play.gameInfo.name);
                                    this.playerStats.set(player.name, winsAndPlays);
                                }
                                else {
                                    ++winsAndPlays.plays;
                                    this.playerStats.set(player.name, winsAndPlays);
                                }
                            }
                            else {
                                if (+player.win) {
                                    this.playerStats.set(player.name, { gamesWon: [play.gameInfo.name], wins: 1, plays: 1 });
                                }
                                else {
                                    this.playerStats.set(player.name, { gamesWon: [], wins: 0, plays: 1 });
                                }
                            }
                        });
                    }
                });
            });
            this.data = Array.from(this.playerStats).map((value) => {
                return { name: value[0], wins: value[1].wins, plays: value[1].plays, percent: (value[1].wins / value[1].plays) };
            });
            this.datasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.data);
            this.datasource.sort = this.sort;
        });
    }
    openWinInfo(row) {
        this.dialog.open(_player_wins_player_wins_component__WEBPACK_IMPORTED_MODULE_5__["PlayerWinsDialog"], {
            data: { name: row.name, stats: this.playerStats.get(row.name) },
            height: '80%',
            width: '30%',
        });
    }
};
PlayerStatsComponent.ctorParameters = () => [
    { type: src_app_services_bgg_service__WEBPACK_IMPORTED_MODULE_2__["BggService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true })
], PlayerStatsComponent.prototype, "sort", void 0);
PlayerStatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-player-stats',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./player-stats.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/player-stats/player-stats.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./player-stats.component.scss */ "./src/app/components/player-stats/player-stats.component.scss")).default]
    })
], PlayerStatsComponent);



/***/ }),

/***/ "./src/app/components/player-wins/player-wins.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/player-wins/player-wins.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/components/player-wins/player-wins.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/player-wins/player-wins.component.ts ***!
  \*****************************************************************/
/*! exports provided: PlayerWinsDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerWinsDialog", function() { return PlayerWinsDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");





let PlayerWinsDialog = class PlayerWinsDialog {
    constructor(data) {
        this.data = data;
        this.displayedColumns = ['game', 'wins'];
        this.gamesWon = new Map();
    }
    ngOnInit() {
        console.log(this.data);
        this.data.stats.gamesWon.forEach(game => {
            if (this.gamesWon.has(game)) {
                let gamesWinCount = this.gamesWon.get(game);
                this.gamesWon.set(game, ++gamesWinCount);
            }
            else {
                this.gamesWon.set(game, 1);
            }
        });
        this.datasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](Array.from(this.gamesWon).map((value) => {
            return { game: value[0], wins: value[1] };
        }));
        this.datasource.sort = this.sort;
    }
};
PlayerWinsDialog.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true })
], PlayerWinsDialog.prototype, "sort", void 0);
PlayerWinsDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-player-wins',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./player-wins.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/player-wins/player-wins.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./player-wins.component.scss */ "./src/app/components/player-wins/player-wins.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], PlayerWinsDialog);



/***/ }),

/***/ "./src/app/components/results-list-item/results-list-item.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/results-list-item/results-list-item.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/components/results-list-item/results-list-item.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/results-list-item/results-list-item.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ResultsListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsListItemComponent", function() { return ResultsListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ResultsListItemComponent = class ResultsListItemComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ResultsListItemComponent.prototype, "result", void 0);
ResultsListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-results-list-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./results-list-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/results-list-item/results-list-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./results-list-item.component.scss */ "./src/app/components/results-list-item/results-list-item.component.scss")).default]
    })
], ResultsListItemComponent);



/***/ }),

/***/ "./src/app/components/results-list/results-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/results-list/results-list.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ghost_icon {\n  background-color: grey;\n  height: 175px;\n  width: 200px;\n  margin: 5px;\n  -webkit-animation: ghost-animation 1.4s ease-in-out infinite;\n          animation: ghost-animation 1.4s ease-in-out infinite;\n}\n\n.ghost_text {\n  background-color: grey;\n  height: 25px;\n  width: 100px;\n  margin: 5px;\n  -webkit-animation: ghost-animation 1.4s ease-in-out infinite;\n          animation: ghost-animation 1.4s ease-in-out infinite;\n}\n\n@-webkit-keyframes ghost-animation {\n  0%, 100% {\n    background-color: #cccccc;\n  }\n  50% {\n    background-color: #777777;\n  }\n}\n\n@keyframes ghost-animation {\n  0%, 100% {\n    background-color: #cccccc;\n  }\n  50% {\n    background-color: #777777;\n  }\n}");

/***/ }),

/***/ "./src/app/components/results-list/results-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/results-list/results-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ResultsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsListComponent", function() { return ResultsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _services_bgg_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bgg.service */ "./src/app/services/bgg.service.ts");
/* harmony import */ var _game_info_game_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game-info/game-info.component */ "./src/app/components/game-info/game-info.component.ts");





let ResultsListComponent = class ResultsListComponent {
    constructor(bggService, dialog) {
        this.bggService = bggService;
        this.dialog = dialog;
        this.resultsLoaded = false;
        this.gameInfo = new Array();
        this.playerInfo = new Array();
        this.masterInfo = new Array();
        this.displayList = new Array();
        this.errorPlays = false;
    }
    ngOnInit() {
        this.bggService.getPlays$().subscribe(allPlays => this.plays = allPlays);
    }
    getGameInfo(gameId) {
        this.bggService.getGameInfo$(gameId).subscribe((gameInfo) => {
            const game = this.plays.get(gameId);
            game.gameInfo.description = gameInfo.description;
            game.gameInfo.image = gameInfo.image;
            game.gameInfo.maxplayers = gameInfo.maxplayers;
            game.gameInfo.maxplaytime = gameInfo.maxplaytime;
            game.gameInfo.minplayers = gameInfo.minplayers;
            game.gameInfo.minplaytime = gameInfo.minplaytime;
            game.gameInfo.altnames = gameInfo.altnames;
            game.gameInfo.yearpublished = gameInfo.yearpublished;
            game.gameInfo.thumbnail = gameInfo.thumbnail;
        });
    }
    moreDetails(gameInfo) {
        this.dialog.open(_game_info_game_info_component__WEBPACK_IMPORTED_MODULE_4__["GameInfoDialog"], {
            data: gameInfo,
        });
    }
    noSort() {
        return 0;
    }
};
ResultsListComponent.ctorParameters = () => [
    { type: _services_bgg_service__WEBPACK_IMPORTED_MODULE_3__["BggService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
ResultsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-results-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./results-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/results-list/results-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./results-list.component.scss */ "./src/app/components/results-list/results-list.component.scss")).default]
    })
], ResultsListComponent);



/***/ }),

/***/ "./src/app/services/auth.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/services/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthInterceptor = class AuthInterceptor {
    intercept(req, next) {
        if (req.url.startsWith('https://www.boardgamegeek.com/xmlapi2/')) {
            const authReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer 153e7999-b381-40ec-9b21-f735292005dc`,
                },
            });
            return next.handle(authReq);
        }
        return next.handle(req);
    }
};
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "./src/app/services/bgg.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/bgg.service.ts ***!
  \*****************************************/
/*! exports provided: BggService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BggService", function() { return BggService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

// angular imports


// rxjs imports


const xmlRootURL = 'https://www.boardgamegeek.com/xmlapi2/';
const oldXmlRootURL = 'https://boardgamegeek.com/xmlapi/';
let BggService = class BggService {
    constructor(http) {
        this.http = http;
    }
    getPlays$() {
        const url = xmlRootURL + 'plays?username=ToastyMallows';
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([
            this.http.get(url + '&page=1', { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(xmlResponse => {
                return this.parseResponse(xmlResponse);
            })),
            this.http.get(url + '&page=2', { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(xmlResponse => {
                return this.parseResponse(xmlResponse);
            }))
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            return this.formatPlays([...data[0].plays.play, ...data[1].plays.play]);
        }));
    }
    getGameInfo$(id) {
        const url = xmlRootURL + 'thing?id=' + id;
        return this.http.get(url, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(xmlResponse => {
            const jsonResponse = this.parseResponse(xmlResponse);
            return this.formatInfo(jsonResponse);
        }));
    }
    parseResponse(xmlResponse) {
        const parseString = __webpack_require__(/*! xml2js */ "./node_modules/xml2js/lib/xml2js.js").parseString;
        let jsonString;
        parseString(xmlResponse, (err, result) => {
            jsonString = result;
        });
        return jsonString;
    }
    formatInfo(gameDetails) {
        const game = gameDetails.items.item[0];
        return {
            description: game.description[0],
            image: game.image[0],
            maxplayers: game.maxplayers[0].$.value,
            maxplaytime: game.maxplaytime[0].$.value,
            minplayers: game.minplayers[0].$.value,
            minplaytime: game.minplaytime[0].$.value,
            yearpublished: game.yearpublished[0].$.value,
            altnames: game.name,
            thumbnail: game.thumbnail[0],
        };
    }
    formatPlays(playsCollection) {
        const playsMap = new Map();
        playsCollection.forEach(play => {
            const gameId = play.item[0].$.objectid;
            if (playsMap.has(gameId)) {
                let gamePlayers;
                const gameEntry = playsMap.get(gameId);
                const gameDetails = this.parseDetails(play.$);
                if (play.players) {
                    gamePlayers = this.parsePlayers(play.players[0].player);
                }
                gameEntry.results.push({
                    details: gameDetails,
                    players: gamePlayers,
                });
            }
            else {
                let gamePlayers;
                if (play.players) {
                    gamePlayers = this.parsePlayers(play.players[0].player);
                }
                const gameDetails = this.parseDetails(play.$);
                const gameInfo = this.parseGameInfo(play.item[0].$);
                const results = [{
                        details: gameDetails,
                        players: gamePlayers,
                    }];
                playsMap.set(gameId, { gameInfo, results });
            }
        });
        return playsMap;
    }
    parseDetails(gameDetails) {
        return {
            date: gameDetails.date,
            duration: gameDetails.length,
            id: gameDetails.id,
            location: gameDetails.location,
        };
    }
    parsePlayers(playersInfo) {
        let gamePlayers = new Array();
        playersInfo.forEach(player => {
            gamePlayers.push({
                name: player.$.name,
                color: player.$.color,
                new: player.$.new,
                rating: player.$.rating,
                score: player.$.score,
                startposition: player.$.startposition,
                userid: player.$.userid,
                username: player.$.username,
                win: player.$.win,
            });
        });
        return gamePlayers;
    }
    parseGameInfo(gamesInfo) {
        return {
            name: gamesInfo.name,
            objectid: gamesInfo.objectid,
            objecttype: gamesInfo.objecttype
        };
    }
};
BggService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BggService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], BggService);



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");















let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\github\boardgamesite\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);