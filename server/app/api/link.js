/*
 * @Author: bs32g1038@163.com
 * @Date: 2017-02-23 22:15:51
 * @Last Modified by: bs32g1038@163.com
 * @Last Modified time: 2017-03-15 15:23:29
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
const LinkService_1 = require("../service/LinkService");
const HttpStatusCode_1 = require("../helpers/HttpStatusCode");
class LinkApiController {
    static getAllLink(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let linkService = new LinkService_1.default();
            try {
                let results = yield linkService.getList({}, { sort: { create_at: -1 } });
                res.json({
                    total_count: results.totalItems,
                    items: results.items
                });
            }
            catch (error) {
                return next(error);
            }
        });
    }
    static getLink(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let linkService = new LinkService_1.default();
            try {
                const link = yield linkService.getById(req.params.id);
                res.json(link);
            }
            catch (error) {
                return next(error);
            }
        });
    }
    static save(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let doc = {
                name: req.body.name,
                url: req.body.url
            };
            let linkService = new LinkService_1.default();
            try {
                let link = yield linkService.create(doc);
                res.status(HttpStatusCode_1.default.HTTP_CREATED).json(link);
            }
            catch (error) {
                return next(error);
            }
        });
    }
    static update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let doc = {
                name: req.body.name,
                url: req.body.url
            };
            let linkService = new LinkService_1.default();
            try {
                yield linkService.updateById(id, doc);
                let link = yield linkService.getById(id);
                res.json(link);
            }
            catch (error) {
                return next(error);
            }
        });
    }
    static hardDelete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let linkService = new LinkService_1.default();
            try {
                yield linkService.deleteById(req.params.id);
                res.status(HttpStatusCode_1.default.HTTP_NO_CONTENT).json();
            }
            catch (error) {
                return next(error);
            }
        });
    }
}
exports.default = LinkApiController;