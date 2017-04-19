/*
 * @Author: bs32g1038@163.com
 * @Date: 2017-02-04 21:41:01
 * @Last Modified by: bs32g1038@163.com
 * @Last Modified time: 2017-03-05 13:51:39
 */
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    res.setHeader('X-Pretty-Print', 'true');
    // ctx.response.set('Content-Encoding', 'gzip');
    res.setHeader('Server', 'bs32g1038@163.com');
    res.setHeader('X-Powered-By', 'bs32g1038@163.com');
    next();
});