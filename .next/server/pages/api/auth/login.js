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
exports.id = "pages/api/auth/login";
exports.ids = ["pages/api/auth/login"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./libs/connectDB.js":
/*!***************************!*\
  !*** ./libs/connectDB.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = async ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) return;\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.CONNECTION_STRING);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL2Nvbm5lY3REQi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsWUFBWSxVQUFZO0lBQzVCLElBQUlELDJFQUFrQyxFQUFFO0lBRXhDQSx1REFBZ0IsQ0FBQ0ssUUFBUUMsR0FBRyxDQUFDQyxpQkFBaUI7QUFDaEQ7QUFFQSxpRUFBZU4sU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215b3VyLXJlYWN0Ly4vbGlicy9jb25uZWN0REIuanM/Y2U5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBjb25uZWN0REIgPSBhc3luYyAoKSA9PiB7XHJcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpIHJldHVybjtcclxuXHJcbiAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5DT05ORUNUSU9OX1NUUklORyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REI7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3REQiIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiQ09OTkVDVElPTl9TVFJJTkciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./libs/connectDB.js\n");

/***/ }),

/***/ "(api)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUFDO0lBQ3JDRyxNQUFNO1FBQ0pDLE1BQU1DO1FBQ05DLFVBQVUsSUFBSTtJQUNoQjtJQUNBQyxPQUFPO1FBQ0xILE1BQU1DO1FBQ05DLFVBQVUsSUFBSTtRQUNkRSxRQUFRLElBQUk7SUFDZDtJQUNBQyxVQUFVO1FBQ1JMLE1BQU1DO1FBQ05DLFVBQVUsSUFBSTtJQUNoQjtBQUNGO0FBRUEsaUVBQWVOLDZEQUFvQixJQUFJQSxxREFBYyxDQUFDLFFBQVFDLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teW91ci1yZWFjdC8uL21vZGVscy9Vc2VyLmpzPzczNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIG5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gIH0sXHJcbiAgZW1haWw6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgdW5pcXVlOiB0cnVlLFxyXG4gIH0sXHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoXCJVc2VyXCIsIFVzZXJTY2hlbWEpO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJVc2VyU2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/User.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/login.js":
/*!*********************************!*\
  !*** ./pages/api/auth/login.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _libs_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../libs/connectDB */ \"(api)/./libs/connectDB.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/User */ \"(api)/./models/User.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst handler = async (req, res)=>{\n    await (0,_libs_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const { method  } = req;\n    if (method === \"POST\") {\n        const { email , password  } = req.body;\n        try {\n            const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n                email\n            });\n            if (!user) {\n                return res.status(400).json({\n                    message: \"Invalid credentials\"\n                });\n            }\n            const isMatch = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compare(password, user.password);\n            if (!isMatch) {\n                return res.status(400).json({\n                    message: \"Invalid credentials\"\n                });\n            }\n            const payload = {\n                user: {\n                    id: user.id\n                }\n            };\n            const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().sign(payload, process.env.JWT_SECRET, {\n                expiresIn: \"1h\"\n            });\n            res.status(200).json({\n                token\n            });\n        } catch (err) {\n            console.error(err.message);\n            res.status(500).send(\"Server error\");\n        }\n    } else {\n        res.setHeader(\"Allow\", [\n            \"POST\"\n        ]);\n        res.status(405).end(`Method ${method} Not Allowed`);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdEO0FBQ1I7QUFDVjtBQUNDO0FBRS9CLE1BQU1JLFVBQVUsT0FBT0MsS0FBS0MsTUFBUTtJQUNsQyxNQUFNTiwyREFBU0E7SUFFZixNQUFNLEVBQUVPLE9BQU0sRUFBRSxHQUFHRjtJQUVuQixJQUFJRSxXQUFXLFFBQVE7UUFDckIsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRSxHQUFHSixJQUFJSyxJQUFJO1FBRXBDLElBQUk7WUFDRixNQUFNQyxPQUFPLE1BQU1WLDREQUFZLENBQUM7Z0JBQUVPO1lBQU07WUFFeEMsSUFBSSxDQUFDRyxNQUFNO2dCQUNULE9BQU9MLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVDLFNBQVM7Z0JBQXNCO1lBQy9ELENBQUM7WUFFRCxNQUFNQyxVQUFVLE1BQU1kLHVEQUFjLENBQUNPLFVBQVVFLEtBQUtGLFFBQVE7WUFFNUQsSUFBSSxDQUFDTyxTQUFTO2dCQUNaLE9BQU9WLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVDLFNBQVM7Z0JBQXNCO1lBQy9ELENBQUM7WUFFRCxNQUFNRyxVQUFVO2dCQUNkUCxNQUFNO29CQUNKUSxJQUFJUixLQUFLUSxFQUFFO2dCQUNiO1lBQ0Y7WUFFQSxNQUFNQyxRQUFRakIsd0RBQVEsQ0FBQ2UsU0FBU0ksUUFBUUMsR0FBRyxDQUFDQyxVQUFVLEVBQUU7Z0JBQ3REQyxXQUFXO1lBQ2I7WUFFQW5CLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVNO1lBQU07UUFDL0IsRUFBRSxPQUFPTSxLQUFLO1lBQ1pDLFFBQVFDLEtBQUssQ0FBQ0YsSUFBSVgsT0FBTztZQUN6QlQsSUFBSU8sTUFBTSxDQUFDLEtBQUtnQixJQUFJLENBQUM7UUFDdkI7SUFDRixPQUFPO1FBQ0x2QixJQUFJd0IsU0FBUyxDQUFDLFNBQVM7WUFBQztTQUFPO1FBQy9CeEIsSUFBSU8sTUFBTSxDQUFDLEtBQUtrQixHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUV4QixPQUFPLFlBQVksQ0FBQztJQUNwRCxDQUFDO0FBQ0g7QUFFQSxpRUFBZUgsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215b3VyLXJlYWN0Ly4vcGFnZXMvYXBpL2F1dGgvbG9naW4uanM/MTMxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdERCIGZyb20gXCIuLi8uLi8uLi9saWJzL2Nvbm5lY3REQlwiO1xyXG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL1VzZXJcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcclxuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgYXdhaXQgY29ubmVjdERCKCk7XHJcblxyXG4gIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7XHJcblxyXG4gIGlmIChtZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsIH0pO1xyXG5cclxuICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogXCJJbnZhbGlkIGNyZWRlbnRpYWxzXCIgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGlzTWF0Y2ggPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XHJcblxyXG4gICAgICBpZiAoIWlzTWF0Y2gpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBcIkludmFsaWQgY3JlZGVudGlhbHNcIiB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICBpZDogdXNlci5pZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbihwYXlsb2FkLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVULCB7XHJcbiAgICAgICAgZXhwaXJlc0luOiBcIjFoXCIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyB0b2tlbiB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoXCJTZXJ2ZXIgZXJyb3JcIik7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zZXRIZWFkZXIoXCJBbGxvd1wiLCBbXCJQT1NUXCJdKTtcclxuICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke21ldGhvZH0gTm90IEFsbG93ZWRgKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iXSwibmFtZXMiOlsiY29ubmVjdERCIiwiVXNlciIsImJjcnlwdCIsImp3dCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJlbWFpbCIsInBhc3N3b3JkIiwiYm9keSIsInVzZXIiLCJmaW5kT25lIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJpc01hdGNoIiwiY29tcGFyZSIsInBheWxvYWQiLCJpZCIsInRva2VuIiwic2lnbiIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiZXhwaXJlc0luIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwic2VuZCIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/login.js"));
module.exports = __webpack_exports__;

})();