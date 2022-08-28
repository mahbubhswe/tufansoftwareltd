"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "(api)/./pages/api/contact/index.js":
/*!************************************!*\
  !*** ./pages/api/contact/index.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler.post(async (req, res)=>{\n    const { name , email , phone , subject , message  } = req.body;\n    const sms = {\n        from: email,\n        to: \"recivermailaddress@gmail.com\",\n        subject: subject,\n        text: message\n    };\n    nodemailer__WEBPACK_IMPORTED_MODULE_1___default().createTransport({\n        port: 465,\n        host: \"smtp.gmail.com\",\n        service: \"gmail\",\n        auth: {\n            user: \"recivermailaddress@gmail.com\",\n            pass: \"reciverMailAddressPass\"\n        }\n    }).sendMail(sms, (err)=>{\n        if (err) {\n            return res.send(err);\n        } else {\n            return res.send(\"Mail has been sent successfully!\");\n        }\n    });\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVDO0FBQ0g7QUFDcEMsTUFBTUUsT0FBTyxHQUFHRix3REFBVyxFQUFFO0FBQzdCLGlFQUFlRSxPQUFPLENBQUNDLElBQUksQ0FBQyxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUM5QyxNQUFNLEVBQUVDLElBQUksR0FBRUMsS0FBSyxHQUFFQyxLQUFLLEdBQUVDLE9BQU8sR0FBRUMsT0FBTyxHQUFFLEdBQUdOLEdBQUcsQ0FBQ08sSUFBSTtJQUN6RCxNQUFNQyxHQUFHLEdBQUc7UUFDVkMsSUFBSSxFQUFFTixLQUFLO1FBQ1hPLEVBQUUsRUFBRSw4QkFBOEI7UUFDbENMLE9BQU8sRUFBRUEsT0FBTztRQUNoQk0sSUFBSSxFQUFFTCxPQUFPO0tBQ2Q7SUFDRFQsaUVBQ2tCLENBQUM7UUFDZmdCLElBQUksRUFBRSxHQUFHO1FBQ1RDLElBQUksRUFBRSxnQkFBZ0I7UUFDdEJDLE9BQU8sRUFBRSxPQUFPO1FBQ2hCQyxJQUFJLEVBQUU7WUFDSkMsSUFBSSxFQUFFLDhCQUE4QjtZQUNwQ0MsSUFBSSxFQUFFLHdCQUF3QjtTQUMvQjtLQUNGLENBQUMsQ0FDREMsUUFBUSxDQUFDWCxHQUFHLEVBQUUsQ0FBQ1ksR0FBRyxHQUFLO1FBQ3RCLElBQUlBLEdBQUcsRUFBRTtZQUNQLE9BQU9uQixHQUFHLENBQUNvQixJQUFJLENBQUNELEdBQUcsQ0FBQyxDQUFDO1NBQ3RCLE1BQU07WUFDTCxPQUFPbkIsR0FBRyxDQUFDb0IsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7U0FDckQ7S0FDRixDQUFDLENBQUM7Q0FDTixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90c2x0ZC8uL3BhZ2VzL2FwaS9jb250YWN0L2luZGV4LmpzP2ZiMTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5leHRDb25uZWN0IGZyb20gXCJuZXh0LWNvbm5lY3RcIjtcclxuaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSBcIm5vZGVtYWlsZXJcIjtcclxuY29uc3QgaGFuZGxlciA9IG5leHRDb25uZWN0KCk7XHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXIucG9zdChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwaG9uZSwgc3ViamVjdCwgbWVzc2FnZSB9ID0gcmVxLmJvZHk7XHJcbiAgY29uc3Qgc21zID0ge1xyXG4gICAgZnJvbTogZW1haWwsXHJcbiAgICB0bzogXCJyZWNpdmVybWFpbGFkZHJlc3NAZ21haWwuY29tXCIsXHJcbiAgICBzdWJqZWN0OiBzdWJqZWN0LFxyXG4gICAgdGV4dDogbWVzc2FnZSxcclxuICB9O1xyXG4gIG5vZGVtYWlsZXJcclxuICAgIC5jcmVhdGVUcmFuc3BvcnQoe1xyXG4gICAgICBwb3J0OiA0NjUsXHJcbiAgICAgIGhvc3Q6IFwic210cC5nbWFpbC5jb21cIixcclxuICAgICAgc2VydmljZTogXCJnbWFpbFwiLFxyXG4gICAgICBhdXRoOiB7XHJcbiAgICAgICAgdXNlcjogXCJyZWNpdmVybWFpbGFkZHJlc3NAZ21haWwuY29tXCIsXHJcbiAgICAgICAgcGFzczogXCJyZWNpdmVyTWFpbEFkZHJlc3NQYXNzXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgLnNlbmRNYWlsKHNtcywgKGVycikgPT4ge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zZW5kKGVycik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zZW5kKFwiTWFpbCBoYXMgYmVlbiBzZW50IHN1Y2Nlc3NmdWxseSFcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIm5leHRDb25uZWN0Iiwibm9kZW1haWxlciIsImhhbmRsZXIiLCJwb3N0IiwicmVxIiwicmVzIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJzdWJqZWN0IiwibWVzc2FnZSIsImJvZHkiLCJzbXMiLCJmcm9tIiwidG8iLCJ0ZXh0IiwiY3JlYXRlVHJhbnNwb3J0IiwicG9ydCIsImhvc3QiLCJzZXJ2aWNlIiwiYXV0aCIsInVzZXIiLCJwYXNzIiwic2VuZE1haWwiLCJlcnIiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contact/index.js"));
module.exports = __webpack_exports__;

})();