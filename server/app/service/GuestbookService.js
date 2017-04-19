/*
 * @Author: bs32g1038@163.com
 * @Date: 2017-02-03 23:48:19
 * @Last Modified by: bs32g1038@163.com
 * @Last Modified time: 2017-02-23 09:05:58
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
const GuestbookRepository_1 = require("../repository/GuestbookRepository");
class CommentService {
    constructor() {
        this._guestbookRepository = new GuestbookRepository_1.default();
    }
    getList(query, opt) {
        return __awaiter(this, void 0, void 0, function* () {
            let list = yield this._guestbookRepository.getList(query, opt);
            let count = yield this._guestbookRepository.count(query);
            return {
                items: list,
                totalItems: count
            };
        });
    }
    getById(_id) {
        return this._guestbookRepository.getById(_id);
    }
    getAll() {
        return this._guestbookRepository.getAll();
    }
    ;
    create(item) {
        return this._guestbookRepository.create(item);
    }
    ;
    updateById(_id, item) {
        return this._guestbookRepository.updateById(_id, item);
    }
    ;
    deleteById(_id) {
        return this._guestbookRepository.deleteById(_id);
    }
    ;
    count(query) {
        return this._guestbookRepository.count(query);
    }
}
exports.default = CommentService;