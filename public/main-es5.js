function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/addcities/addcities.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/addcities/addcities.component.ts ***!
    \**************************************************/

  /*! exports provided: AddcitiesComponent */

  /***/
  function srcAppAddcitiesAddcitiesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddcitiesComponent", function () {
      return AddcitiesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var AddcitiesComponent = /*#__PURE__*/function () {
      function AddcitiesComponent(authService, router, formBuilder, cd) {
        _classCallCheck(this, AddcitiesComponent);

        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.cd = cd;
        this.imgloc = "";
        this.pr = 0;
        this.msg = "wait for successful upload msg and progress bar";
        this.imagedata = this.formBuilder.group({
          image: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.cityname = "";
        this.citydesc = "";
        this.img1 = "";
        this.citydesc2 = "";
        this.citynamed = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.citydescd = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.citydescd2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.img1d = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.img1dd = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
      }

      _createClass(AddcitiesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updatedata = this.formBuilder.group({
            cityname: [null],
            citydesc: [null],
            citydesc2: [null],
            img1: [null]
          });
        }
      }, {
        key: "onFileChange",
        value: function onFileChange(event, field) {
          if (event.target.files && event.target.files.length) {
            var _event$target$files = _slicedToArray(event.target.files, 1),
                _file = _event$target$files[0]; // just checking if it is an image, ignore if you want


            if (!_file.type.startsWith('image')) {
              this.updatedata.get(field).setErrors({
                required: true
              });
              this.cd.markForCheck();
            } else {
              // unlike most tutorials, i am using the actual Blob/file object instead of the data-url
              this.updatedata.patchValue(_defineProperty({}, field, _file)); // need to run CD since file load runs outside of zone

              this.cd.markForCheck();
            }
          }

          var file = event.target.files[0];
          this.imagedata.patchValue({
            image: file
          });
          this.imagedata.get('image').updateValueAndValidity();
        }
      }, {
        key: "uploadimage",
        value: function uploadimage() {
          var _this = this;

          var formData = new FormData();
          Object.entries(this.imagedata.value).forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                key = _ref2[0],
                value = _ref2[1];

            formData.set(key, value);
          }); //console.log(formData);

          this.authService.uploadimage(formData).subscribe(function (res) {
            var allcitydata = {};
            allcitydata = res;
            console.log(allcitydata);

            if (allcitydata.imagestatus == '1') {
              _this.progressfun();
            }

            _this.img1 = _this.imgloc + allcitydata.filename;
          }, function (err) {
            console.log(err);
            return false;
          });
        }
      }, {
        key: "addcity",
        value: function addcity() {
          console.log(this.img1dd);
          this.cityname2 = this.citynamed.value;
          this.citydesc22 = this.citydescd.value;
          this.citydisc2 = this.citydescd2.value;
          this.img12 = this.img1; //console.log(this.cityname2,this.citydesc2,this.img12);

          this.updatedata.setValue({
            cityname: this.cityname2,
            citydesc: this.citydesc22,
            citydesc2: this.citydisc2,
            img1: this.img12
          });
          console.log("updatedata", this.updatedata.value);
          var Form = JSON.stringify(this.updatedata.value);
          this.authService.addnewcity(Form).subscribe(function (res) {// let allcitydata = {} as any;
            // allcitydata = res
            //console.log("working api");
          }, function (err) {
            console.log(err);
            return false;
          });
          this.router.navigate(['city']);
        }
      }, {
        key: "progressfun",
        value: function progressfun() {
          this.pr = 10;
          this.pr = 20;
          this.pr = 30;
          this.pr = 40;
          this.pr = 50;
          this.pr = 60;
          this.pr = 70;
          this.pr = 80;
          this.pr = 90;
          this.pr = 100;
          this.msg = "Image uploaded";
        }
      }]);

      return AddcitiesComponent;
    }();

    AddcitiesComponent.ɵfac = function AddcitiesComponent_Factory(t) {
      return new (t || AddcitiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    AddcitiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddcitiesComponent,
      selectors: [["app-addcities"]],
      decls: 38,
      vars: 6,
      consts: [[1, "example-container"], ["appearance", "fill"], ["matInput", "", 3, "formControl"], ["action", ""], ["for", "myfile"], ["type", "file", 3, "formControl", "change"], ["type", "submit", 3, "click"], [1, "progress"], ["mode", "determinate", 3, "value"], [1, "example-label"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
      template: function AddcitiesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "cityname");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "cityname");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "citydesc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "citydescriptions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "citydesc2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "citydescriptions2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Select a file:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddcitiesComponent_Template_input_change_25_listener($event) {
            return ctx.onFileChange($event, "image");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddcitiesComponent_Template_input_click_28_listener() {
            return ctx.uploadimage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-progress-bar", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddcitiesComponent_Template_button_click_36_listener() {
            return ctx.addcity();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Add city");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.citynamed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.citydescd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.citydescd2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.img1dd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.msg, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.pr);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]],
      styles: [".progress[_ngcontent-%COMP%]\n{\n    width: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZGRjaXRpZXMvYWRkY2l0aWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksVUFBVTtBQUNkIiwiZmlsZSI6ImFwcC9hZGRjaXRpZXMvYWRkY2l0aWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZ3Jlc3NcbntcbiAgICB3aWR0aDogMTAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddcitiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-addcities',
          templateUrl: './addcities.component.html',
          styleUrls: ['./addcities.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/__ivy_ngcc__/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'angular-src';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      consts: [[1, "container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "flash-messages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _services_validate_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/validate.service */
    "./src/app/services/validate.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/__ivy_ngcc__/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */


    var _gaurds_auth_gaurd__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./gaurds/auth.gaurd */
    "./src/app/gaurds/auth.gaurd.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./searchbar/searchbar.component */
    "./src/app/searchbar/searchbar.component.ts");
    /* harmony import */


    var _city_city_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./city/city.component */
    "./src/app/city/city.component.ts");
    /* harmony import */


    var _citydetails_citydetails_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./citydetails/citydetails.component */
    "./src/app/citydetails/citydetails.component.ts");
    /* harmony import */


    var _citycard_citycard_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./citycard/citycard.component */
    "./src/app/citycard/citycard.component.ts");
    /* harmony import */


    var _editcities_editcities_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./editcities/editcities.component */
    "./src/app/editcities/editcities.component.ts");
    /* harmony import */


    var _editcitiesdetails_editcitiesdetails_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./editcitiesdetails/editcitiesdetails.component */
    "./src/app/editcitiesdetails/editcitiesdetails.component.ts");
    /* harmony import */


    var _deletecity_deletecity_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./deletecity/deletecity.component */
    "./src/app/deletecity/deletecity.component.ts");
    /* harmony import */


    var _addcities_addcities_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./addcities/addcities.component */
    "./src/app/addcities/addcities.component.ts");

    var appRoutes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
    }, {
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
      canActivate: [_gaurds_auth_gaurd__WEBPACK_IMPORTED_MODULE_17__["AuthGaurd"]]
    }, {
      path: 'profile',
      component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
      canActivate: [_gaurds_auth_gaurd__WEBPACK_IMPORTED_MODULE_17__["AuthGaurd"]]
    }, {
      path: 'city',
      component: _city_city_component__WEBPACK_IMPORTED_MODULE_21__["CityComponent"],
      canActivate: [_gaurds_auth_gaurd__WEBPACK_IMPORTED_MODULE_17__["AuthGaurd"]]
    }, {
      path: 'citydetails',
      component: _citydetails_citydetails_component__WEBPACK_IMPORTED_MODULE_22__["CitydetailsComponent"],
      canActivate: [_gaurds_auth_gaurd__WEBPACK_IMPORTED_MODULE_17__["AuthGaurd"]]
    }, {
      path: 'editcity',
      component: _editcities_editcities_component__WEBPACK_IMPORTED_MODULE_24__["EditcitiesComponent"],
      canActivate: [_gaurds_auth_gaurd__WEBPACK_IMPORTED_MODULE_17__["AuthGaurd"]]
    }, {
      path: 'editcitydetails',
      component: _editcitiesdetails_editcitiesdetails_component__WEBPACK_IMPORTED_MODULE_25__["EditcitiesdetailsComponent"],
      canActivate: [_gaurds_auth_gaurd__WEBPACK_IMPORTED_MODULE_17__["AuthGaurd"]]
    }, {
      path: 'deletecity',
      component: _deletecity_deletecity_component__WEBPACK_IMPORTED_MODULE_26__["DeletecityComponent"],
      canActivate: [_gaurds_auth_gaurd__WEBPACK_IMPORTED_MODULE_17__["AuthGaurd"]]
    }, {
      path: 'addcities',
      component: _addcities_addcities_component__WEBPACK_IMPORTED_MODULE_27__["AddcitiesComponent"],
      canActivate: [_gaurds_auth_gaurd__WEBPACK_IMPORTED_MODULE_17__["AuthGaurd"]]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_14__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _gaurds_auth_gaurd__WEBPACK_IMPORTED_MODULE_17__["AuthGaurd"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_16__["FlashMessagesModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_19__["MDBBootstrapModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_20__["SearchbarComponent"], _city_city_component__WEBPACK_IMPORTED_MODULE_21__["CityComponent"], _citydetails_citydetails_component__WEBPACK_IMPORTED_MODULE_22__["CitydetailsComponent"], _citycard_citycard_component__WEBPACK_IMPORTED_MODULE_23__["CitycardComponent"], _editcities_editcities_component__WEBPACK_IMPORTED_MODULE_24__["EditcitiesComponent"], _editcitiesdetails_editcitiesdetails_component__WEBPACK_IMPORTED_MODULE_25__["EditcitiesdetailsComponent"], _deletecity_deletecity_component__WEBPACK_IMPORTED_MODULE_26__["DeletecityComponent"], _addcities_addcities_component__WEBPACK_IMPORTED_MODULE_27__["AddcitiesComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_16__["FlashMessagesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_19__["MDBRootModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_20__["SearchbarComponent"], _city_city_component__WEBPACK_IMPORTED_MODULE_21__["CityComponent"], _citydetails_citydetails_component__WEBPACK_IMPORTED_MODULE_22__["CitydetailsComponent"], _citycard_citycard_component__WEBPACK_IMPORTED_MODULE_23__["CitycardComponent"], _editcities_editcities_component__WEBPACK_IMPORTED_MODULE_24__["EditcitiesComponent"], _editcitiesdetails_editcitiesdetails_component__WEBPACK_IMPORTED_MODULE_25__["EditcitiesdetailsComponent"], _deletecity_deletecity_component__WEBPACK_IMPORTED_MODULE_26__["DeletecityComponent"], _addcities_addcities_component__WEBPACK_IMPORTED_MODULE_27__["AddcitiesComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_16__["FlashMessagesModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_19__["MDBBootstrapModule"].forRoot()],
          providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_14__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _gaurds_auth_gaurd__WEBPACK_IMPORTED_MODULE_17__["AuthGaurd"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/city/city.component.ts":
  /*!****************************************!*\
    !*** ./src/app/city/city.component.ts ***!
    \****************************************/

  /*! exports provided: CityComponent */

  /***/
  function srcAppCityCityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CityComponent", function () {
      return CityComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function CityComponent_mat_card_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CityComponent_mat_card_6_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var i_r26 = ctx.index;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.onsubmit(i_r26);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Know more");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r25 = ctx.$implicit;
        var i_r26 = ctx.index;

        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r24.img1[i_r26], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r24.citydesc[i_r26], " ");
      }
    }

    var CityComponent = /*#__PURE__*/function () {
      function CityComponent(authService, router) {
        _classCallCheck(this, CityComponent);

        this.authService = authService;
        this.router = router;
        this.cityd = {};
        this.cityname = [];
        this.citydesc = [];
        this.img1 = [];
        this.img2 = [];
        this.id = []; // public users = ['Fabio', 'Leonardo', 'Thomas', 'Gabriele', 'Fabrizio', 'John', 'Luis', 'Kate', 'Max'];

        this.users = this.cityname;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.users);
      }

      _createClass(CityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.authService.getallcitydata().subscribe(function (res) {
            var allcitydata = {};
            allcitydata = res;
            _this2.cityd = allcitydata; //this.l=this.cityd.length; 

            for (var i = 0; i < _this2.cityd.length; i++) {
              _this2.cityname[i] = _this2.cityd[i].cityname;
              _this2.citydesc[i] = _this2.cityd[i].citydesc;
              _this2.img1[i] = _this2.cityd[i].img1;
              _this2.img2[i] = _this2.cityd[i].img2;
              _this2.id[i] = _this2.cityd[i]._id;
            }

            console.log(_this2.cityname);
            console.log(_this2.citydesc);
            console.log(_this2.img1);
            console.log(_this2.img2);
            console.log(_this2.id); //this.user = allcitydata.user;
            //console.log(this.user); 
          }, function (err) {
            console.log(err);
            return false;
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "onsubmit",
        value: function onsubmit(value) {
          var tempid = this.id[value];
          this.authService.citysession(tempid); //console.log(value);

          this.router.navigate(['citydetails']); //this.authService.citysession(tempid);
        }
      }]);

      return CityComponent;
    }();

    CityComponent.ɵfac = function CityComponent_Factory(t) {
      return new (t || CityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    CityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CityComponent,
      selectors: [["app-city"]],
      decls: 7,
      vars: 1,
      consts: [[1, "container"], [1, "example-card"], [1, "example-full-width"], ["matInput", "", "placeholder", "Filter", 3, "keyup"], [1, "grid"], ["class", "example-card-two", 4, "ngFor", "ngForOf"], [1, "example-card-two"], ["mat-card-image", "", 3, "src"], ["mat-button", "", 3, "click"]],
      template: function CityComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CityComponent_Template_input_keyup_4_listener($event) {
            return ctx.applyFilter($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CityComponent_mat_card_6_Template, 12, 3, "mat-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataSource.filteredData);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
      styles: [".container[_ngcontent-%COMP%] {\n    max-width: 2000px;\n    justify-items: center;\n    justify-content: center;\n    text-align: center;\n    margin: auto;\n    max-width: 80%;\n    padding-left: 80px;\n    padding-top: 8%;\n}\n\n\n\n.example-full-width[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n    grid-gap: 20px;\n    \n    align-items: stretch;\n}\n\n.example-card-two[_ngcontent-%COMP%] {\n    max-width: 400px;\n    \n}\n\n.example-header-image[_ngcontent-%COMP%] {\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n    background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jaXR5L2NpdHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTs7R0FFRzs7QUFFSDtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0REFBNEQ7SUFDNUQsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksbUZBQW1GO0lBQ25GLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJhcHAvY2l0eS9jaXR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMjAwMHB4O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1heC13aWR0aDogODAlO1xuICAgIHBhZGRpbmctbGVmdDogODBweDtcbiAgICBwYWRkaW5nLXRvcDogOCU7XG59XG5cbi8qIC5leGFtcGxlLWNhcmQge1xuICAgIHBhZGRpbmctbGVmdDogMTA1cHg7XG59ICovXG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyODBweCwgMWZyKSk7XG4gICAgZ3JpZC1nYXA6IDIwcHg7XG4gICAgLyogcGFkZGluZy1sZWZ0OiAxMDBweDsgKi9cbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cblxuLmV4YW1wbGUtY2FyZC10d28ge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgXG59XG5cbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-city',
          templateUrl: './city.component.html',
          styleUrls: ['./city.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/citycard/citycard.component.ts":
  /*!************************************************!*\
    !*** ./src/app/citycard/citycard.component.ts ***!
    \************************************************/

  /*! exports provided: CitycardComponent */

  /***/
  function srcAppCitycardCitycardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CitycardComponent", function () {
      return CitycardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var CitycardComponent = /*#__PURE__*/function () {
      function CitycardComponent() {
        _classCallCheck(this, CitycardComponent);
      }

      _createClass(CitycardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CitycardComponent;
    }();

    CitycardComponent.ɵfac = function CitycardComponent_Factory(t) {
      return new (t || CitycardComponent)();
    };

    CitycardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CitycardComponent,
      selectors: [["app-citycard"]],
      decls: 16,
      vars: 0,
      consts: [[1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-card-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg", "alt", "Photo of a Shiba Inu"], ["mat-button", ""]],
      template: function CitycardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Shiba Inu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dog Breed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "LIKE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "SHARE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
      styles: [".example-card[_ngcontent-%COMP%] {\n    max-width: 400px;\n  }\n  \n  .example-header-image[_ngcontent-%COMP%] {\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n    background-size: cover;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jaXR5Y2FyZC9jaXR5Y2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsbUZBQW1GO0lBQ25GLHNCQUFzQjtFQUN4QiIsImZpbGUiOiJhcHAvY2l0eWNhcmQvY2l0eWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CitycardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-citycard',
          templateUrl: './citycard.component.html',
          styleUrls: ['./citycard.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/citydetails/citydetails.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/citydetails/citydetails.component.ts ***!
    \******************************************************/

  /*! exports provided: CitydetailsComponent */

  /***/
  function srcAppCitydetailsCitydetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CitydetailsComponent", function () {
      return CitydetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var CitydetailsComponent = /*#__PURE__*/function () {
      function CitydetailsComponent(authService, router) {
        _classCallCheck(this, CitydetailsComponent);

        this.authService = authService;
        this.router = router;
      }

      _createClass(CitydetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          //console.log('something',this.authService.citysessiond);
          this.cityid2 = this.authService.citysessiond;
          this.authService.getcitydatabyid(this.cityid2).subscribe(function (res) {
            var allcitydata = {};
            allcitydata = res;
            console.log('working', allcitydata);
            _this3.cityname = allcitydata.cityname;
            _this3.citydesc = allcitydata.citydesc;
            _this3.img1 = allcitydata.img1;
            _this3.img2 = allcitydata.img2;
            _this3.citydesc2 = allcitydata.citydesc2;
            console.log('working', _this3.cityname);
            console.log('working', _this3.citydesc);
            console.log('working', _this3.citydesc2);
            console.log('working', _this3.img1);
            console.log('working', _this3.img2);
          }, function (err) {
            console.log(err);
            return false;
          });
        }
      }]);

      return CitydetailsComponent;
    }();

    CitydetailsComponent.ɵfac = function CitydetailsComponent_Factory(t) {
      return new (t || CitydetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    CitydetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CitydetailsComponent,
      selectors: [["app-citydetails"]],
      decls: 20,
      vars: 5,
      consts: [[1, "banner"], [3, "src"], [1, "banner-info", "row-fluid"], [1, "title"], [1, "top-nav-outer"], [1, "container1"], [1, "clearfix"], [1, "main-outer"], [1, "new-container"], ["id", "rajasthan-overview", 1, "main-outer", "section-pad"], [1, "heading", "color-black"], [1, "main-content", "grey-color"], [1, "sub-content", "lessDesc"], [1, "sub-content", "descMore", "dn"]],
      template: function CitydetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Overview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.img1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cityname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.cityname, " Travel Guide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.citydesc, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.citydesc2, " ");
        }
      },
      styles: [".banner[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    height: 450px;\n    clear: both;\n}\n.banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    position: relative;\n    margin-top: -7%;\n}\n.banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    width: 100%;\n}\niframe[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], img[_ngcontent-%COMP%] {\n    border: 0;\n}\n.main-outer[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 14px;\n    font-weight: bold;\n    text-transform: uppercase;\n    letter-spacing: .5px;\n}\n.color-black[_ngcontent-%COMP%] {\n    color: #000;\n}\np[_ngcontent-%COMP%] {\n    display: block;\n    -webkit-margin-before: 1em;\n            margin-block-start: 1em;\n    -webkit-margin-after: 1em;\n            margin-block-end: 1em;\n    -webkit-margin-start: 0px;\n            margin-inline-start: 0px;\n    -webkit-margin-end: 0px;\n            margin-inline-end: 0px;\n}\na[_ngcontent-%COMP%]:hover {\n    color: #f77521;\n}\n.sub-content[_ngcontent-%COMP%] {\n    text-align: justify;\n    color: #666;\n    font-size: 16px;\n    font-weight: 300;\n    margin: 20px 0;\n    line-height: 25px;\n    padding: 0 10px;\n}\n.banner-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 80px;\n    font-family: Raleway;\n    text-align: center;\n    color: #fff;\n    font-weight: 800;\n    margin: 0;\n}\n.banner-info[_ngcontent-%COMP%] {\n    padding: 0;\n    position: absolute;\n    top: 30%;\n    width: 100%;\n}\n.top-nav-outer[_ngcontent-%COMP%] {\n    margin: 30px 0;\n    width: 100%;\n    float: left;\n    background-color: #fff;\n}\n.heading[_ngcontent-%COMP%]:after {\n    border-bottom: 1px solid;\n    width: 7%;\n    background-color: #000;\n    margin: 4px auto 0;\n    content: \"\";\n    display: block;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    font-weight: 500;\n}\nh1[_ngcontent-%COMP%] {\n    font-size: 36px;\n    line-height: 1;\n    margin: 0;\n    padding: 0;\n    margin-left: 530px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jaXR5ZGV0YWlscy9jaXR5ZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGNBQWM7SUFDZCwwQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIseUJBQXdCO1lBQXhCLHdCQUF3QjtJQUN4Qix1QkFBc0I7WUFBdEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztBQUNmO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImFwcC9jaXR5ZGV0YWlscy9jaXR5ZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiA0NTBweDtcbiAgICBjbGVhcjogYm90aDtcbn1cbi5iYW5uZXIgaW1nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogLTclO1xufVxuLmJhbm5lciBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbmlmcmFtZSwgZmllbGRzZXQsIGltZyB7XG4gICAgYm9yZGVyOiAwO1xufVxuLm1haW4tb3V0ZXIgLmhlYWRpbmcge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcbn1cbi5jb2xvci1ibGFjayB7XG4gICAgY29sb3I6ICMwMDA7XG59XG5wIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG5hOmhvdmVyIHtcbiAgICBjb2xvcjogI2Y3NzUyMTtcbn1cbi5zdWItY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG59XG4uYmFubmVyLWluZm8gLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDgwcHg7XG4gICAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgbWFyZ2luOiAwO1xufVxuLmJhbm5lci1pbmZvIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDMwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi50b3AtbmF2LW91dGVyIHtcbiAgICBtYXJnaW46IDMwcHggMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmhlYWRpbmc6YWZ0ZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgICB3aWR0aDogNyU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBtYXJnaW46IDRweCBhdXRvIDA7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5oMSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiA1MzBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CitydetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-citydetails',
          templateUrl: './citydetails.component.html',
          styleUrls: ['./citydetails.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../searchbar/searchbar.component */
    "./src/app/searchbar/searchbar.component.ts");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)();
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 147,
      vars: 2,
      consts: [[1, "carousel-fade", 3, "isControls", "animation"], [1, "form-group"], ["src", "https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg", "alt", "First slide", 1, "d-block", "w-100"], ["src", "https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg", "alt", "Second slide", 1, "d-block", "w-100"], ["src", "https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg", "alt", "Third slide", 1, "d-block", "w-100"], ["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"], ["id", "page-content", 1, "content"], [1, "container"], [1, "row"], [1, "col-md-12", "myt-content-inner", 2, "z-index", "0"], ["id", "page-2", 1, "col-md-6", "col-sm-6"], [1, "page-box-wrapper"], ["itemscope", "", "itemtype", "http://schema.org/Service", 1, "page-box"], [1, "box-image"], ["itemprop", "photo", "src", "https://www.makeyourtrip.com/dist/images/pickdestination.png", "alt", "makeyourtrip Clock Time Duration"], [1, "box-title"], ["itemprop", "name", 1, "box-title"], [1, "box-description"], ["itemprop", "description"], [1, "test"], ["itemprop", "photo", "src", "https://www.makeyourtrip.com/dist/images/customize.png", "alt", "makeyourtrip Geo Location Map"], [1, "col-md-6", "col-sm-6"], ["itemprop", "photo", "src", "https://www.makeyourtrip.com/dist/images/getcost.png", "alt", "makeyourtrip Passport Visa Travel"], ["itemprop", "photo", "src", "https://www.makeyourtrip.com/dist/images/havagreattrip.png", "alt", "makeyourtrip Fly Airfare Camera Photos"], ["id", "totorial-d-d", 1, "col-md-12", "myt-content-inner", 2, "z-index", "0"], [1, "clearfix", "makeyourtrip"], [1, "col-md-12", "col-sm-12", "text-center"], [1, "codegena"], ["width", "500", "height", "294", "src", "https://www.youtube.com/embed/Jq04t1BzjlU?&theme=light&autohide=1&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3", "frameborder", "0"], [1, "clearfix"], [1, "col-md-12", "col-sm-12"], [1, "sub-title"], [1, "col-md-3", "col-sm-3", "col-sm-3"], ["href", "", "target", "_blank"], [1, "activities-wrapper"], ["itemscope", "", "itemtype", "http://schema.org/Place", 1, "activities"], [1, "activity-overlay"], [1, "titles-wrapper"], [1, "main-title"], ["itemprop", "name", 1, "main-title"], ["itemprop", "description", 1, "sub-title"], [1, "activity-image"], ["itemprop", "photo", "src", "//fmffiles.s3.amazonaws.com/files/1_DestinationSize_225x330.-FMF1501069821.jpg", "alt", "Denpasar, Bali"], ["itemprop", "photo", "src", "//fmffiles.s3.amazonaws.com/files/2_DestinationSize_225x330.-FMF1501069827.jpg", "alt", "maldives"], ["itemprop", "photo", "src", "//fmffiles.s3.amazonaws.com/files/3_DestinationSize_225x330.-FMF1501069830.jpg", "alt", "Singapore"], ["photo", "", 1, "activity-image"], ["itemprop", "photo", "src", "//fmffiles.s3.amazonaws.com/files/4_DestinationSize_225x330.-FMF1501069834.jpg", "alt", "Sydney"], [2, "position", "fixed", "right", "16px", "z-index", "999", "bottom", "10px", "display", "none"], [1, "closer-win", 2, "z-index", "99999", "background", "#3f7bbb", "color", "#dae1e4", "padding", "2px 11px", "border-radius", "50%", "font-size", "20px", "position", "absolute", "top", "-11px", "right", "-9px", "cursor", "pointer"], ["href", ""], ["src", "https://fmffiles.s3.amazonaws.com/trip-planner/landing-pages/Singapore-popup.jpg", "alt", "Free Holidays for two", 1, "close-banner", 2, "border-radius", "4px", "box-shadow", "-1px 1px 20px #0009"], ["id", "footerDiv", 1, "footer"], [1, "col-md-12"], [1, "pull-right"], [1, "social-wrapper"], [1, "powered-by"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-carousel", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-searchbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mdb-carousel-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mdb-carousel-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mdb-carousel-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "meta", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "meta", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "link", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Get a personalized plan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " A complete day-by-day itinerary based on your personal interests and preferences.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Customize your itinerary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " 100% flexibility - add or remove nights, change activities, change flights, change hotels, your vacation, your style. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Get cost and book");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Each line item is broken down to smartly allocate your money. Best prices guaranteed. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Adios Amigo!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Go ahead and book your entire vacation with just one click experience with Makeyourtrip. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " How Makeyourtrip works ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "iframe", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h2", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Recommended Destinations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h3", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Bali");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Enjoy your holiday at beautiful Sanur beach, take the best selfie of your life at the beautiful Tanah Lot rock temple in Bali and feel the anger in the raging Volcano in Kintamini. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h3", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Maldives");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Tour the Male city and feel the salty air of the ocean, breathe in the hot sun and feel the love all around. Snorkel and dive in the bluest, clearest waters of Maldives. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h3", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Singapore");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "The blend of modern urban cityscape with world class attractions such as Universal Studios, Marina Bay Sands, Gardens by the Bay, Singapore Flyer and landmark like the Merlion Statue. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h3", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Sydney");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Take an exciting trip to the land down under, where hot beaches, amazing art and beautiful attractions such as Sydney Opera House, Sydney Harbour Bridge, Bondi Beach & Taronga Zoo. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "img", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isControls", false)("animation", "slide");
        }
      },
      directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_2__["SearchbarComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["SlideComponent"]],
      styles: [".example-card[_ngcontent-%COMP%] {\n    max-width: 400px;\n  }\n  \n  .example-header-image[_ngcontent-%COMP%] {\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n    background-size: cover;\n  }\n  \n  .margin-top-20[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n  }\n  \n  .ad[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 250px;\n    min-height: 250px;\n    max-width: 200px;\n    border: thin solid #eee;\n  }\n  \n  .ad[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 200px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  \n  .ad[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\n    flex: 0 1;\n    width: 100%;\n    height: auto;\n  }\n  \n  div.form-group[_ngcontent-%COMP%] {\n    position:absolute;\n    z-index:9999999;\n    \n    left: 36%;\n  top: 65%;\n}\n  \n  .sub-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  color: #444444;\n  margin: 54px 0 20px 0;\n}\n  \n  .activities[_ngcontent-%COMP%]   .activity-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n  \n  img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n  \n  img[_ngcontent-%COMP%] {\n  border: 0;\n}\n  \n  .activity-overlay[_ngcontent-%COMP%]   .titles-wrapper[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%] {\n  font-size: 27px;\n  color: #FFF;\n  margin-bottom: 6px;\n}\n  \n  .main-title[_ngcontent-%COMP%] {\n  margin: 210px 0px 19px 0px;\n  font-family: 'Sniglet', cursive;\n  text-shadow: 0 1px 6px rgb(70, 70, 70);\n  font-size: 43px;\n  letter-spacing: -0.09rem;\n}\n  \n  .activity-overlay[_ngcontent-%COMP%]   .titles-wrapper[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #efefef;\n  margin: 0 22px 0px 0;\n}\n  \n  .row[_ngcontent-%COMP%] {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n  \n  .container[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n  \n  .box-image[_ngcontent-%COMP%] {\n  text-align: center;\n}\n  \n  .box-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 23px;\n  font-weight: 600;\n  margin: 24px 0 15px 0;\n  color: #4a4949;\n}\n  \n  p[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n}\n  \n  .col-xs-1[_ngcontent-%COMP%], .col-sm-1[_ngcontent-%COMP%], .col-md-1[_ngcontent-%COMP%], .col-lg-1[_ngcontent-%COMP%], .col-xs-2[_ngcontent-%COMP%], .col-sm-2[_ngcontent-%COMP%], .col-md-2[_ngcontent-%COMP%], .col-lg-2[_ngcontent-%COMP%], .col-xs-3[_ngcontent-%COMP%], .col-sm-3[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-lg-3[_ngcontent-%COMP%], .col-xs-4[_ngcontent-%COMP%], .col-sm-4[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%], .col-xs-5[_ngcontent-%COMP%], .col-sm-5[_ngcontent-%COMP%], .col-md-5[_ngcontent-%COMP%], .col-lg-5[_ngcontent-%COMP%], .col-xs-6[_ngcontent-%COMP%], .col-sm-6[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%], .col-lg-6[_ngcontent-%COMP%], .col-xs-7[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-lg-7[_ngcontent-%COMP%], .col-xs-8[_ngcontent-%COMP%], .col-sm-8[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%], .col-lg-8[_ngcontent-%COMP%], .col-xs-9[_ngcontent-%COMP%], .col-sm-9[_ngcontent-%COMP%], .col-md-9[_ngcontent-%COMP%], .col-lg-9[_ngcontent-%COMP%], .col-xs-10[_ngcontent-%COMP%], .col-sm-10[_ngcontent-%COMP%], .col-md-10[_ngcontent-%COMP%], .col-lg-10[_ngcontent-%COMP%], .col-xs-11[_ngcontent-%COMP%], .col-sm-11[_ngcontent-%COMP%], .col-md-11[_ngcontent-%COMP%], .col-lg-11[_ngcontent-%COMP%], .col-xs-12[_ngcontent-%COMP%], .col-sm-12[_ngcontent-%COMP%], .col-md-12[_ngcontent-%COMP%], .col-lg-12[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n  \n  .page-box-wrapper[_ngcontent-%COMP%] {\n  margin: 80px 0 0 0;\n}\n  \n  .activity-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  \n  \n  padding: 12px;\n}\n  \n  div[_ngcontent-%COMP%] {\n  display: block;\n}\n  \n  .social-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\n  \n  img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n  \n  img[_ngcontent-%COMP%] {\n  border: 0;\n}\n  \n  body[_ngcontent-%COMP%] {\n  font-family: 'Sniglet', cursive !important;\n  margin: 0;\n  padding: 0;\n  \n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  \n  \n  background-repeat: no-repeat;\n  \n  background-size: cover\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxtRkFBbUY7SUFDbkYsc0JBQXNCO0VBQ3hCOztFQUNBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTs7SUFFZixTQUFTO0VBQ1gsUUFBUTtBQUNWOztFQUlBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztFQUNBO0VBQ0UsV0FBVztFQUNYLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFDbkI7O0VBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7O0VBQ0E7RUFDRSxTQUFTO0FBQ1g7O0VBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7RUFDQTtFQUNFLDBCQUEwQjtFQUMxQiwrQkFBK0I7RUFDL0Isc0NBQXNDO0VBQ3RDLGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7O0VBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7RUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0VBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0VBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0VBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7RUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7RUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7RUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7RUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaOzs7OzBGQUl3RjtFQUN4RixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztFQUNBO0VBQ0UsY0FBYztBQUNoQjs7RUFFQTtFQUNFLFdBQVc7QUFDYjs7RUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7RUFDQTtFQUNFLFNBQVM7QUFDWDs7RUFDQTtFQUNFLDBDQUEwQztFQUMxQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLCtCQUErQjtFQUMvQixtQ0FBbUM7RUFDbkMsa0NBQWtDO0VBQ2xDLG1HQUFtRztFQUNuRyxxREFBcUQ7RUFDckQsNEJBQTRCO0VBQzVCLG9DQUFvQztFQUNwQztBQUNGOztFQUNBOztHQUVHIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cbiAgLm1hcmdpbi10b3AtMjA+ZGl2PmRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmFkIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIGJvcmRlcjogdGhpbiBzb2xpZCAjZWVlO1xuICB9XG4gIFxuICAuYWQ+ZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmFkPmRpdj5pbWcge1xuICAgIGZsZXg6IDAgMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgZGl2LmZvcm0tZ3JvdXAge1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHotaW5kZXg6OTk5OTk5OTtcbiAgICBcbiAgICBsZWZ0OiAzNiU7XG4gIHRvcDogNjUlO1xufVxuXG5cblxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM0NDQ0NDQ7XG4gIG1hcmdpbjogNTRweCAwIDIwcHggMDtcbn1cbi5hY3Rpdml0aWVzIC5hY3Rpdml0eS1pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5pbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufSBcbmltZyB7XG4gIGJvcmRlcjogMDtcbn1cbi5hY3Rpdml0eS1vdmVybGF5IC50aXRsZXMtd3JhcHBlciAubWFpbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgY29sb3I6ICNGRkY7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cbi5tYWluLXRpdGxlIHtcbiAgbWFyZ2luOiAyMTBweCAwcHggMTlweCAwcHg7XG4gIGZvbnQtZmFtaWx5OiAnU25pZ2xldCcsIGN1cnNpdmU7XG4gIHRleHQtc2hhZG93OiAwIDFweCA2cHggcmdiKDcwLCA3MCwgNzApO1xuICBmb250LXNpemU6IDQzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wOXJlbTtcbn1cbi5hY3Rpdml0eS1vdmVybGF5IC50aXRsZXMtd3JhcHBlciAuc3ViLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2VmZWZlZjtcbiAgbWFyZ2luOiAwIDIycHggMHB4IDA7XG59XG4ucm93IHtcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5ib3gtaW1hZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYm94LXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMjRweCAwIDE1cHggMDtcbiAgY29sb3I6ICM0YTQ5NDk7XG59XG5wIHtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbn1cbi5jb2wteHMtMSwgLmNvbC1zbS0xLCAuY29sLW1kLTEsIC5jb2wtbGctMSwgLmNvbC14cy0yLCAuY29sLXNtLTIsIC5jb2wtbWQtMiwgLmNvbC1sZy0yLCAuY29sLXhzLTMsIC5jb2wtc20tMywgLmNvbC1tZC0zLCAuY29sLWxnLTMsIC5jb2wteHMtNCwgLmNvbC1zbS00LCAuY29sLW1kLTQsIC5jb2wtbGctNCwgLmNvbC14cy01LCAuY29sLXNtLTUsIC5jb2wtbWQtNSwgLmNvbC1sZy01LCAuY29sLXhzLTYsIC5jb2wtc20tNiwgLmNvbC1tZC02LCAuY29sLWxnLTYsIC5jb2wteHMtNywgLmNvbC1zbS03LCAuY29sLW1kLTcsIC5jb2wtbGctNywgLmNvbC14cy04LCAuY29sLXNtLTgsIC5jb2wtbWQtOCwgLmNvbC1sZy04LCAuY29sLXhzLTksIC5jb2wtc20tOSwgLmNvbC1tZC05LCAuY29sLWxnLTksIC5jb2wteHMtMTAsIC5jb2wtc20tMTAsIC5jb2wtbWQtMTAsIC5jb2wtbGctMTAsIC5jb2wteHMtMTEsIC5jb2wtc20tMTEsIC5jb2wtbWQtMTEsIC5jb2wtbGctMTEsIC5jb2wteHMtMTIsIC5jb2wtc20tMTIsIC5jb2wtbWQtMTIsIC5jb2wtbGctMTIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLnBhZ2UtYm94LXdyYXBwZXIge1xuICBtYXJnaW46IDgwcHggMCAwIDA7XG59XG4uYWN0aXZpdHktb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDApIDQwJSxyZ2JhKDAsMCwwLDAuNjUpIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwyNTUsMjU1LDApIDQwJSxyZ2JhKDAsMCwwLDAuNjUpIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCByZ2JhKDAsIDAsIDAsIDAuNjUpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDAsIDAsIDAsIDApKSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgwLCAwLCAwLCAwKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjY1KSAxMDAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjY1KSAxMDAlKTsgKi9cbiAgLyogY29sb3I6ICNGRkY7ICovXG4gIHBhZGRpbmc6IDEycHg7XG59XG5kaXYge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNvY2lhbC1pY29uIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xufVxuaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbmltZyB7XG4gIGJvcmRlcjogMDtcbn1cbmJvZHkge1xuICBmb250LWZhbWlseTogJ1NuaWdsZXQnLCBjdXJzaXZlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjsgKi9cbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9mbWZmaWxlcy5zMy5hbWF6b25hd3MuY29tL3RyaXAtcGxhbm5lci9iYWNrZ3JvdW5kL2JnLWZvcm0uanBnKTsgKi9cbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvMTU4Nzg2OTkuanBnJyk7ICovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIC8qIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7ICAgKi9cbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlclxufVxuLyogYm9keSB7XG5cbn0gKi8iXX0= */", ".codegena[_ngcontent-%COMP%]{position:relative;width:100%;height:0;padding-bottom:56.27198%;}.codegena[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/deletecity/deletecity.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/deletecity/deletecity.component.ts ***!
    \****************************************************/

  /*! exports provided: DeletecityComponent */

  /***/
  function srcAppDeletecityDeletecityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeletecityComponent", function () {
      return DeletecityComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DeletecityComponent = /*#__PURE__*/function () {
      function DeletecityComponent() {
        _classCallCheck(this, DeletecityComponent);
      }

      _createClass(DeletecityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DeletecityComponent;
    }();

    DeletecityComponent.ɵfac = function DeletecityComponent_Factory(t) {
      return new (t || DeletecityComponent)();
    };

    DeletecityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DeletecityComponent,
      selectors: [["app-deletecity"]],
      decls: 2,
      vars: 0,
      template: function DeletecityComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "deletecity works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvZGVsZXRlY2l0eS9kZWxldGVjaXR5LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeletecityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-deletecity',
          templateUrl: './deletecity.component.html',
          styleUrls: ['./deletecity.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/editcities/editcities.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/editcities/editcities.component.ts ***!
    \****************************************************/

  /*! exports provided: EditcitiesComponent */

  /***/
  function srcAppEditcitiesEditcitiesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditcitiesComponent", function () {
      return EditcitiesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EditcitiesComponent_mat_card_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditcitiesComponent_mat_card_13_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var i_r31 = ctx.index;

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r32.onsubmit(i_r31);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Know more");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditcitiesComponent_mat_card_13_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var i_r31 = ctx.index;

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r34.onsubmit2(i_r31);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Edit details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditcitiesComponent_mat_card_13_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var i_r31 = ctx.index;

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r35.onsubmit3(i_r31);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Delete city");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r30 = ctx.$implicit;
        var i_r31 = ctx.index;

        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r29.img1[i_r31], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r29.citydesc[i_r31], " ");
      }
    }

    var EditcitiesComponent = /*#__PURE__*/function () {
      function EditcitiesComponent(authService, router) {
        _classCallCheck(this, EditcitiesComponent);

        this.authService = authService;
        this.router = router;
        this.cityd = {};
        this.cityname = [];
        this.citydesc = [];
        this.img1 = [];
        this.img2 = [];
        this.id = []; // public users = ['Fabio', 'Leonardo', 'Thomas', 'Gabriele', 'Fabrizio', 'John', 'Luis', 'Kate', 'Max'];

        this.users = this.cityname;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.users);
      }

      _createClass(EditcitiesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.authService.getallcitydata().subscribe(function (res) {
            var allcitydata = {};
            allcitydata = res;
            _this4.cityd = allcitydata; //this.l=this.cityd.length; 

            for (var i = 0; i < _this4.cityd.length; i++) {
              _this4.cityname[i] = _this4.cityd[i].cityname;
              _this4.citydesc[i] = _this4.cityd[i].citydesc;
              _this4.img1[i] = _this4.cityd[i].img1;
              _this4.img2[i] = _this4.cityd[i].img2;
              _this4.id[i] = _this4.cityd[i]._id;
            }

            console.log(_this4.cityname);
            console.log(_this4.citydesc);
            console.log(_this4.img1);
            console.log(_this4.img2);
            console.log(_this4.id); //this.user = allcitydata.user;
            //console.log(this.user); 
          }, function (err) {
            console.log(err);
            return false;
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "onsubmit",
        value: function onsubmit(value) {
          var tempid = this.id[value];
          this.authService.citysession(tempid); //console.log(value);

          this.router.navigate(['citydetails']); //this.authService.citysession(tempid);
        }
      }, {
        key: "onsubmit2",
        value: function onsubmit2(value) {
          var tempid = this.id[value];
          this.authService.citysession(tempid); //console.log(value);

          this.router.navigate(['editcitydetails']); //this.authService.citysession(tempid);
        }
      }, {
        key: "onsubmit3",
        value: function onsubmit3(value) {
          var tempid = this.id[value];
          this.authService.deletecitydatabyid(tempid).subscribe(function (res) {
            // let allcitydata = {} as any;
            // allcitydata = res
            console.log("working api");
          }, function (err) {
            console.log(err);
            return false;
          });
          console.log("checkingvalue", tempid);
          this.router.navigate(['deletecity']); //this.authService.citysession(tempid);
        }
      }, {
        key: "onsubmit4",
        value: function onsubmit4() {
          // let tempid=this.id[value];
          // this.authService.deletecitydatabyid(tempid).subscribe(res => {
          //   // let allcitydata = {} as any;
          //   // allcitydata = res
          //   console.log("working api");
          // },err=>{
          //   console.log(err);
          //   return false;
          // });
          //console.log("checkingbutton");
          this.router.navigate(['addcities']); //this.authService.citysession(tempid);
        }
      }]);

      return EditcitiesComponent;
    }();

    EditcitiesComponent.ɵfac = function EditcitiesComponent_Factory(t) {
      return new (t || EditcitiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    EditcitiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditcitiesComponent,
      selectors: [["app-editcities"]],
      decls: 14,
      vars: 1,
      consts: [[1, "container"], [1, "example-card"], [1, "example-full-width"], ["matInput", "", "placeholder", "Filter", 3, "keyup"], [1, "example-button-container"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Example icon button with a filter list icon", 3, "click"], [1, "grid"], ["class", "example-card-two", 4, "ngFor", "ngForOf"], [1, "example-card-two"], ["mat-card-image", "", 3, "src"], ["mat-button", "", 3, "click"]],
      template: function EditcitiesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function EditcitiesComponent_Template_input_keyup_4_listener($event) {
            return ctx.applyFilter($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditcitiesComponent_Template_button_click_6_listener() {
            return ctx.onsubmit4();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "plus_one");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Add Cities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-content", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditcitiesComponent_mat_card_13_Template, 16, 3, "mat-card", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataSource.filteredData);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"]],
      styles: [".container[_ngcontent-%COMP%] {\n    max-width: 2000px;\n    justify-items: center;\n    justify-content: center;\n    text-align: center;\n    margin: auto;\n    max-width: 80%;\n    padding-left: 80px;\n    padding-top: 8%;\n}\n\n\n\n.example-full-width[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n    grid-gap: 20px;\n    \n    align-items: stretch;\n}\n\n.example-card-two[_ngcontent-%COMP%] {\n    max-width: 400px;\n    \n}\n\n.example-header-image[_ngcontent-%COMP%] {\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n    background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lZGl0Y2l0aWVzL2VkaXRjaXRpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTs7R0FFRzs7QUFFSDtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0REFBNEQ7SUFDNUQsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksbUZBQW1GO0lBQ25GLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJhcHAvZWRpdGNpdGllcy9lZGl0Y2l0aWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMjAwMHB4O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1heC13aWR0aDogODAlO1xuICAgIHBhZGRpbmctbGVmdDogODBweDtcbiAgICBwYWRkaW5nLXRvcDogOCU7XG59XG5cbi8qIC5leGFtcGxlLWNhcmQge1xuICAgIHBhZGRpbmctbGVmdDogMTA1cHg7XG59ICovXG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyODBweCwgMWZyKSk7XG4gICAgZ3JpZC1nYXA6IDIwcHg7XG4gICAgLyogcGFkZGluZy1sZWZ0OiAxMDBweDsgKi9cbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cblxuLmV4YW1wbGUtY2FyZC10d28ge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgXG59XG5cbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditcitiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-editcities',
          templateUrl: './editcities.component.html',
          styleUrls: ['./editcities.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/editcitiesdetails/editcitiesdetails.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/editcitiesdetails/editcitiesdetails.component.ts ***!
    \******************************************************************/

  /*! exports provided: EditcitiesdetailsComponent */

  /***/
  function srcAppEditcitiesdetailsEditcitiesdetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditcitiesdetailsComponent", function () {
      return EditcitiesdetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var EditcitiesdetailsComponent = /*#__PURE__*/function () {
      function EditcitiesdetailsComponent(authService, router, formBuilder, cd) {
        _classCallCheck(this, EditcitiesdetailsComponent);

        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.cd = cd;
        this.imgloc = "";
        this.imagedata = this.formBuilder.group({
          image: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.cityname = "";
        this.citydesc = "";
        this.img1 = "";
        this.citydesc2 = "";
        this.citynamed = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.citydescd = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.citydescd2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.img1d = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.img1dd = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.cityid = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
      }

      _createClass(EditcitiesdetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.cityid2 = this.authService.citysessiond; //console.log('editdetailsworking',this.cityid2);

          this.cityid2 = this.authService.citysessiond;
          this.authService.getcitydatabyid(this.cityid2).subscribe(function (res) {
            var allcitydata = {};
            allcitydata = res; //console.log('working',allcitydata);

            _this5.cityname1 = allcitydata.cityname;
            _this5.citydesc1 = allcitydata.citydesc;
            _this5.citydesc2 = allcitydata.citydesc2;
            _this5.img11 = allcitydata.img1;
            _this5.img2 = allcitydata.img2;
            console.log('working', _this5.cityname1);
            console.log('working', _this5.citydesc1);
            console.log('working', _this5.img11);
            console.log('working', _this5.img2);
          }, function (err) {
            console.log(err);
            return false;
          });
          this.updatedata = this.formBuilder.group({
            cityid: [null],
            cityname: [null],
            citydesc: [null],
            citydesc2: [null],
            img1: [null]
          });
        }
      }, {
        key: "onFileChange",
        value: function onFileChange(event, field) {
          if (event.target.files && event.target.files.length) {
            var _event$target$files2 = _slicedToArray(event.target.files, 1),
                _file2 = _event$target$files2[0]; // just checking if it is an image, ignore if you want


            if (!_file2.type.startsWith('image')) {
              this.updatedata.get(field).setErrors({
                required: true
              });
              this.cd.markForCheck();
            } else {
              // unlike most tutorials, i am using the actual Blob/file object instead of the data-url
              this.updatedata.patchValue(_defineProperty({}, field, _file2)); // need to run CD since file load runs outside of zone

              this.cd.markForCheck();
            }
          }

          var file = event.target.files[0];
          this.imagedata.patchValue({
            image: file
          });
          this.imagedata.get('image').updateValueAndValidity();
        }
      }, {
        key: "uploadimage",
        value: function uploadimage() {
          var _this6 = this;

          var formData = new FormData();
          Object.entries(this.imagedata.value).forEach(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                key = _ref4[0],
                value = _ref4[1];

            formData.set(key, value);
          }); //console.log(formData);

          this.authService.uploadimage(formData).subscribe(function (res) {
            var allcitydata = {};
            allcitydata = res; //console.log(allcitydata.filename);

            _this6.img1 = _this6.imgloc + allcitydata.filename;
          }, function (err) {
            console.log(err);
            return false;
          });
        }
      }, {
        key: "addcity",
        value: function addcity() {
          console.log(this.img1dd);
          this.cityname2 = this.citynamed.value;
          this.citydesc22 = this.citydescd.value;
          this.citydisc2 = this.citydescd2.value;
          this.img12 = this.img1; //console.log(this.cityname2,this.citydesc2,this.img12);

          this.updatedata.setValue({
            cityid: this.cityid2,
            cityname: this.cityname2,
            citydesc: this.citydesc22,
            citydesc2: this.citydisc2,
            img1: this.img12
          });
          console.log("updatedata", this.updatedata.value);
          var Form = JSON.stringify(this.updatedata.value);
          this.authService.updatecitydatabyid(Form).subscribe(function (res) {// let allcitydata = {} as any;
            // allcitydata = res
            //console.log("working api");
          }, function (err) {
            console.log(err);
            return false;
          });
          this.router.navigate(['editcity']);
        }
      }]);

      return EditcitiesdetailsComponent;
    }();

    EditcitiesdetailsComponent.ɵfac = function EditcitiesdetailsComponent_Factory(t) {
      return new (t || EditcitiesdetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    EditcitiesdetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditcitiesdetailsComponent,
      selectors: [["app-editcitiesdetails"]],
      decls: 36,
      vars: 7,
      consts: [[1, "example-container"], ["appearance", "fill"], ["matInput", "", 3, "formControl"], ["action", ""], ["for", "myfile"], ["type", "file", 3, "formControl", "change"], ["type", "submit", 3, "click"], [1, "example-label"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
      template: function EditcitiesdetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\nAll fields need to be refilled\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "cityname");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "citydesc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "citydesc2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Select a file:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditcitiesdetailsComponent_Template_input_change_26_listener($event) {
            return ctx.onFileChange($event, "image");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditcitiesdetailsComponent_Template_input_click_29_listener() {
            return ctx.uploadimage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "wait for successful upload popup ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditcitiesdetailsComponent_Template_button_click_34_listener() {
            return ctx.addcity();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cityname1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.citynamed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.citydesc1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.citydescd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.citydesc2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.citydescd2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.img1dd);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvZWRpdGNpdGllc2RldGFpbHMvZWRpdGNpdGllc2RldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditcitiesdetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-editcitiesdetails',
          templateUrl: './editcitiesdetails.component.html',
          styleUrls: ['./editcitiesdetails.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/gaurds/auth.gaurd.ts":
  /*!**************************************!*\
    !*** ./src/app/gaurds/auth.gaurd.ts ***!
    \**************************************/

  /*! exports provided: AuthGaurd */

  /***/
  function srcAppGaurdsAuthGaurdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGaurd", function () {
      return AuthGaurd;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGaurd = /*#__PURE__*/function () {
      function AuthGaurd(authService, router) {
        _classCallCheck(this, AuthGaurd);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGaurd, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.authService.loggedIn()) {
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      }]);

      return AuthGaurd;
    }();

    AuthGaurd.ɵfac = function AuthGaurd_Factory(t) {
      return new (t || AuthGaurd)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGaurd.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGaurd,
      factory: AuthGaurd.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGaurd, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["active"];
    };

    var _c1 = function _c1() {
      return {
        exact: true
      };
    };

    var _c2 = function _c2() {
      return ["/register"];
    };

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 22,
      vars: 6,
      consts: [["lang", "en"], ["charset", "UTF-8"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css"], ["rel", "stylesheet", "href", "https://fonts.googleapis.com/icon?family=Material+Icons"], ["rel", "stylesheet", "href", "https://fonts.googleapis.com/css?family=Architects+Daughter|Roboto&subset=latin,devanagari"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"], [1, "welcome"], [1, "valign-wrapper"], [1, "container", "grey-text", "text-lighten-1"], [1, "flow-text"], [1, "title", "grey-text", "text-lighten-3"], [3, "routerLinkActive", "routerLinkActiveOptions"], [3, "routerLink"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "link", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "body", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "main", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Welcome to");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "KNOW INDIA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "blockquote", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "A place to find your perfect holiday destination");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " -->\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["body[_ngcontent-%COMP%] {\n    display: flex;\n    min-height: 100vh;\n    flex-direction: column;\n\n  } \n  \n  main[_ngcontent-%COMP%] {\n    flex: 1 0 auto;\n  } \n  \n  h1.title[_ngcontent-%COMP%], .footer-copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-family: 'Architects Daughter', cursive;\n    text-transform: uppercase;\n    font-weight: 900;\n  } \n  \n   \n  \n  body.welcome[_ngcontent-%COMP%] {\n    \n    background: #512da8;\n    overflow: hidden;\n    -webkit-font-smoothing: antialiased;\n  } \n  \n  .welcome[_ngcontent-%COMP%]   .splash[_ngcontent-%COMP%] {\n    height: 0px;\n    padding: 0px;\n    border: 130em solid #512da8;\n    position: fixed;\n    left: 50%;\n    top: 100%;\n    display: block;\n    box-sizing: initial;\n    overflow: hidden;\n  \n    border-radius: 50%;\n    transform: translate(-50%, -50%);\n    -webkit-animation: puff 0.5s 1.8s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, borderRadius 0.2s 2.3s linear forwards;\n            animation: puff 0.5s 1.8s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, borderRadius 0.2s 2.3s linear forwards;\n  } \n  \n  .welcome[_ngcontent-%COMP%]   #welcome[_ngcontent-%COMP%] {\n    background: #311b92 ;\n    width: 56px;\n    height: 56px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    overflow: hidden;\n    opacity: 0;\n    transform: translate(-50%, -50%);\n    border-radius: 50%;\n    -webkit-animation: init 0.5s 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, moveDown 1s 0.8s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards, moveUp 1s 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, materia 0.5s 2.7s cubic-bezier(0.86, 0, 0.07, 1) forwards, hide 2s 2.9s ease forwards;\n            animation: init 0.5s 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, moveDown 1s 0.8s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards, moveUp 1s 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, materia 0.5s 2.7s cubic-bezier(0.86, 0, 0.07, 1) forwards, hide 2s 2.9s ease forwards;\n  } \n  \n   \n  \n  .welcome[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], .welcome[_ngcontent-%COMP%]   a.btn[_ngcontent-%COMP%] {\n    opacity: 0;\n    -webkit-animation: moveIn 2s 3.1s ease forwards;\n            animation: moveIn 2s 3.1s ease forwards;\n  } \n  \n  @-webkit-keyframes init {\n    0% {\n      width: 0px;\n      height: 0px;\n    }\n    100% {\n      width: 56px;\n      height: 56px;\n      margin-top: 0px;\n      opacity: 1;\n    }\n  } \n  \n  @keyframes init {\n    0% {\n      width: 0px;\n      height: 0px;\n    }\n    100% {\n      width: 56px;\n      height: 56px;\n      margin-top: 0px;\n      opacity: 1;\n    }\n  } \n  \n  @-webkit-keyframes puff {\n    0% {\n      top: 100%;\n      height: 0px;\n      padding: 0px;\n    }\n    100% {\n      top: 50%;\n      height: 100%;\n      padding: 0px 100%;\n    }\n  } \n  \n  @keyframes puff {\n    0% {\n      top: 100%;\n      height: 0px;\n      padding: 0px;\n    }\n    100% {\n      top: 50%;\n      height: 100%;\n      padding: 0px 100%;\n    }\n  } \n  \n  @-webkit-keyframes borderRadius {\n    0% {\n      border-radius: 50%;\n    }\n    100% {\n      border-radius: 0px;\n    }\n  } \n  \n  @keyframes borderRadius {\n    0% {\n      border-radius: 50%;\n    }\n    100% {\n      border-radius: 0px;\n    }\n  } \n  \n  @-webkit-keyframes moveDown {\n    0% {\n      top: 50%;\n    }\n    50% {\n      top: 40%;\n    }\n    100% {\n      top: 100%;\n    }\n  } \n  \n  @keyframes moveDown {\n    0% {\n      top: 50%;\n    }\n    50% {\n      top: 40%;\n    }\n    100% {\n      top: 100%;\n    }\n  } \n  \n  @-webkit-keyframes moveUp {\n    0% {\n      background: #311b92;\n      top: 100%;\n    }\n    50% {\n      top: 40%;\n    }\n    100% {\n      top: 50%;\n      background: #039be5;\n    }\n  } \n  \n  @keyframes moveUp {\n    0% {\n      background: #311b92;\n      top: 100%;\n    }\n    50% {\n      top: 40%;\n    }\n    100% {\n      top: 50%;\n      background: #039be5;\n    }\n  } \n  \n  @-webkit-keyframes materia {\n    0% {\n      background: #039be5;\n    }\n    50% {\n      background: #039be5;\n      top: 26px;\n    }\n    100% {\n      background: #311b92;\n      width: 100%;\n      height: 64px;\n      border-radius: 0px;\n      top: 26px;\n    }\n  } \n  \n  @keyframes materia {\n    0% {\n      background: #039be5;\n    }\n    50% {\n      background: #039be5;\n      top: 26px;\n    }\n    100% {\n      background: #311b92;\n      width: 100%;\n      height: 64px;\n      border-radius: 0px;\n      top: 26px;\n    }\n  } \n  \n  @-webkit-keyframes moveIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  } \n  \n  @keyframes moveIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  } \n  \n  @-webkit-keyframes hide {\n    0% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n    }\n  } \n  \n  @keyframes hide {\n    0% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsc0JBQXNCOztFQUV4Qjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7O0lBRUUsMkNBQTJDO0lBQzNDLHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7O0VBRUEsNEJBQTRCOztFQUU1Qjs7SUFFRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1DQUFtQztFQUNyQzs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixTQUFTO0lBQ1QsU0FBUztJQUNULGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCOztJQUVoQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLHlIQUFpSDtZQUFqSCxpSEFBaUg7RUFDbkg7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsMlNBQW1TO1lBQW5TLG1TQUFtUztFQUNyUzs7RUFFQSxXQUFXOztFQUNYOztJQUVFLFVBQVU7SUFDViwrQ0FBdUM7WUFBdkMsdUNBQXVDO0VBQ3pDOztFQUVBO0lBQ0U7TUFDRSxVQUFVO01BQ1YsV0FBVztJQUNiO0lBQ0E7TUFDRSxXQUFXO01BQ1gsWUFBWTtNQUNaLGVBQWU7TUFDZixVQUFVO0lBQ1o7RUFDRjs7RUFYQTtJQUNFO01BQ0UsVUFBVTtNQUNWLFdBQVc7SUFDYjtJQUNBO01BQ0UsV0FBVztNQUNYLFlBQVk7TUFDWixlQUFlO01BQ2YsVUFBVTtJQUNaO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLFNBQVM7TUFDVCxXQUFXO01BQ1gsWUFBWTtJQUNkO0lBQ0E7TUFDRSxRQUFRO01BQ1IsWUFBWTtNQUNaLGlCQUFpQjtJQUNuQjtFQUNGOztFQVhBO0lBQ0U7TUFDRSxTQUFTO01BQ1QsV0FBVztNQUNYLFlBQVk7SUFDZDtJQUNBO01BQ0UsUUFBUTtNQUNSLFlBQVk7TUFDWixpQkFBaUI7SUFDbkI7RUFDRjs7RUFFQTtJQUNFO01BQ0Usa0JBQWtCO0lBQ3BCO0lBQ0E7TUFDRSxrQkFBa0I7SUFDcEI7RUFDRjs7RUFQQTtJQUNFO01BQ0Usa0JBQWtCO0lBQ3BCO0lBQ0E7TUFDRSxrQkFBa0I7SUFDcEI7RUFDRjs7RUFFQTtJQUNFO01BQ0UsUUFBUTtJQUNWO0lBQ0E7TUFDRSxRQUFRO0lBQ1Y7SUFDQTtNQUNFLFNBQVM7SUFDWDtFQUNGOztFQVZBO0lBQ0U7TUFDRSxRQUFRO0lBQ1Y7SUFDQTtNQUNFLFFBQVE7SUFDVjtJQUNBO01BQ0UsU0FBUztJQUNYO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLG1CQUFtQjtNQUNuQixTQUFTO0lBQ1g7SUFDQTtNQUNFLFFBQVE7SUFDVjtJQUNBO01BQ0UsUUFBUTtNQUNSLG1CQUFtQjtJQUNyQjtFQUNGOztFQVpBO0lBQ0U7TUFDRSxtQkFBbUI7TUFDbkIsU0FBUztJQUNYO0lBQ0E7TUFDRSxRQUFRO0lBQ1Y7SUFDQTtNQUNFLFFBQVE7TUFDUixtQkFBbUI7SUFDckI7RUFDRjs7RUFFQTtJQUNFO01BQ0UsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxtQkFBbUI7TUFDbkIsU0FBUztJQUNYO0lBQ0E7TUFDRSxtQkFBbUI7TUFDbkIsV0FBVztNQUNYLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsU0FBUztJQUNYO0VBQ0Y7O0VBZkE7SUFDRTtNQUNFLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsbUJBQW1CO01BQ25CLFNBQVM7SUFDWDtJQUNBO01BQ0UsbUJBQW1CO01BQ25CLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLFNBQVM7SUFDWDtFQUNGOztFQUVBO0lBQ0U7TUFDRSxVQUFVO0lBQ1o7SUFDQTtNQUNFLFVBQVU7SUFDWjtFQUNGOztFQVBBO0lBQ0U7TUFDRSxVQUFVO0lBQ1o7SUFDQTtNQUNFLFVBQVU7SUFDWjtFQUNGOztFQUVBO0lBQ0U7TUFDRSxVQUFVO0lBQ1o7SUFDQTtNQUNFLFVBQVU7SUFDWjtFQUNGOztFQVBBO0lBQ0U7TUFDRSxVQUFVO0lBQ1o7SUFDQTtNQUNFLFVBQVU7SUFDWjtFQUNGIiwiZmlsZSI6ImFwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICB9IFxuICBcbiAgbWFpbiB7XG4gICAgZmxleDogMSAwIGF1dG87XG4gIH1cbiAgXG4gIGgxLnRpdGxlLFxuICAuZm9vdGVyLWNvcHlyaWdodCBhIHtcbiAgICBmb250LWZhbWlseTogJ0FyY2hpdGVjdHMgRGF1Z2h0ZXInLCBjdXJzaXZlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgfVxuICBcbiAgLyogc3RhcnQgd2VsY29tZSBhbmltYXRpb24gKi9cbiAgXG4gIGJvZHkud2VsY29tZSB7XG4gICAgXG4gICAgYmFja2dyb3VuZDogIzUxMmRhODtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICB9XG4gIFxuICAud2VsY29tZSAuc3BsYXNoIHtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYm9yZGVyOiAxMzBlbSBzb2xpZCAjNTEyZGE4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJveC1zaXppbmc6IGluaXRpYWw7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGFuaW1hdGlvbjogcHVmZiAwLjVzIDEuOHMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSkgZm9yd2FyZHMsIGJvcmRlclJhZGl1cyAwLjJzIDIuM3MgbGluZWFyIGZvcndhcmRzO1xuICB9XG4gIFxuICAud2VsY29tZSAjd2VsY29tZSB7XG4gICAgYmFja2dyb3VuZDogIzMxMWI5MiA7XG4gICAgd2lkdGg6IDU2cHg7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBhbmltYXRpb246IGluaXQgMC41cyAwLjJzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpIGZvcndhcmRzLCBtb3ZlRG93biAxcyAwLjhzIGN1YmljLWJlemllcigwLjYsIC0wLjI4LCAwLjczNSwgMC4wNDUpIGZvcndhcmRzLCBtb3ZlVXAgMXMgMS44cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgZm9yd2FyZHMsIG1hdGVyaWEgMC41cyAyLjdzIGN1YmljLWJlemllcigwLjg2LCAwLCAwLjA3LCAxKSBmb3J3YXJkcywgaGlkZSAycyAyLjlzIGVhc2UgZm9yd2FyZHM7XG4gIH1cbiAgICAgXG4gIC8qIG1vdmVJbiAqL1xuICAud2VsY29tZSBoZWFkZXIsXG4gIC53ZWxjb21lIGEuYnRuIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGFuaW1hdGlvbjogbW92ZUluIDJzIDMuMXMgZWFzZSBmb3J3YXJkcztcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBpbml0IHtcbiAgICAwJSB7XG4gICAgICB3aWR0aDogMHB4O1xuICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgd2lkdGg6IDU2cHg7XG4gICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBwdWZmIHtcbiAgICAwJSB7XG4gICAgICB0b3A6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDBweDtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDBweCAxMDAlO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBib3JkZXJSYWRpdXMge1xuICAgIDAlIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIG1vdmVEb3duIHtcbiAgICAwJSB7XG4gICAgICB0b3A6IDUwJTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIHRvcDogNDAlO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRvcDogMTAwJTtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgbW92ZVVwIHtcbiAgICAwJSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMzExYjkyO1xuICAgICAgdG9wOiAxMDAlO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgdG9wOiA0MCU7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBtYXRlcmlhIHtcbiAgICAwJSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgYmFja2dyb3VuZDogIzAzOWJlNTtcbiAgICAgIHRvcDogMjZweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMzExYjkyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICB0b3A6IDI2cHg7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIG1vdmVJbiB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBoaWRlIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9Il19 */", "body[_ngcontent-%COMP%] {\n    display: flex;\n    min-height: 100vh;\n    flex-direction: column;\n\n  } \n  \n  main[_ngcontent-%COMP%] {\n    flex: 1 0 auto;\n  } \n  \n  h1.title[_ngcontent-%COMP%], .footer-copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-family: 'Architects Daughter', cursive;\n    text-transform: uppercase;\n    font-weight: 900;\n  } \n  \n   \n  \n  body.welcome[_ngcontent-%COMP%] {\n    \n    background: #512da8;\n    overflow: hidden;\n    -webkit-font-smoothing: antialiased;\n  } \n  \n  .welcome[_ngcontent-%COMP%]   .splash[_ngcontent-%COMP%] {\n    height: 0px;\n    padding: 0px;\n    border: 130em solid #512da8;\n    position: fixed;\n    left: 50%;\n    top: 100%;\n    display: block;\n    box-sizing: initial;\n    overflow: hidden;\n  \n    border-radius: 50%;\n    transform: translate(-50%, -50%);\n    -webkit-animation: puff 0.5s 1.8s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, borderRadius 0.2s 2.3s linear forwards;\n            animation: puff 0.5s 1.8s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, borderRadius 0.2s 2.3s linear forwards;\n  } \n  \n  .welcome[_ngcontent-%COMP%]   #welcome[_ngcontent-%COMP%] {\n    background: #311b92 ;\n    width: 56px;\n    height: 56px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    overflow: hidden;\n    opacity: 0;\n    transform: translate(-50%, -50%);\n    border-radius: 50%;\n    -webkit-animation: init 0.5s 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, moveDown 1s 0.8s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards, moveUp 1s 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, materia 0.5s 2.7s cubic-bezier(0.86, 0, 0.07, 1) forwards, hide 2s 2.9s ease forwards;\n            animation: init 0.5s 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, moveDown 1s 0.8s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards, moveUp 1s 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, materia 0.5s 2.7s cubic-bezier(0.86, 0, 0.07, 1) forwards, hide 2s 2.9s ease forwards;\n  } \n  \n   \n  \n  .welcome[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], .welcome[_ngcontent-%COMP%]   a.btn[_ngcontent-%COMP%] {\n    opacity: 0;\n    -webkit-animation: moveIn 2s 3.1s ease forwards;\n            animation: moveIn 2s 3.1s ease forwards;\n  } \n  \n  @-webkit-keyframes init {\n    0% {\n      width: 0px;\n      height: 0px;\n    }\n    100% {\n      width: 56px;\n      height: 56px;\n      margin-top: 0px;\n      opacity: 1;\n    }\n  } \n  \n  @keyframes init {\n    0% {\n      width: 0px;\n      height: 0px;\n    }\n    100% {\n      width: 56px;\n      height: 56px;\n      margin-top: 0px;\n      opacity: 1;\n    }\n  } \n  \n  @-webkit-keyframes puff {\n    0% {\n      top: 100%;\n      height: 0px;\n      padding: 0px;\n    }\n    100% {\n      top: 50%;\n      height: 100%;\n      padding: 0px 100%;\n    }\n  } \n  \n  @keyframes puff {\n    0% {\n      top: 100%;\n      height: 0px;\n      padding: 0px;\n    }\n    100% {\n      top: 50%;\n      height: 100%;\n      padding: 0px 100%;\n    }\n  } \n  \n  @-webkit-keyframes borderRadius {\n    0% {\n      border-radius: 50%;\n    }\n    100% {\n      border-radius: 0px;\n    }\n  } \n  \n  @keyframes borderRadius {\n    0% {\n      border-radius: 50%;\n    }\n    100% {\n      border-radius: 0px;\n    }\n  } \n  \n  @-webkit-keyframes moveDown {\n    0% {\n      top: 50%;\n    }\n    50% {\n      top: 40%;\n    }\n    100% {\n      top: 100%;\n    }\n  } \n  \n  @keyframes moveDown {\n    0% {\n      top: 50%;\n    }\n    50% {\n      top: 40%;\n    }\n    100% {\n      top: 100%;\n    }\n  } \n  \n  @-webkit-keyframes moveUp {\n    0% {\n      background: #311b92;\n      top: 100%;\n    }\n    50% {\n      top: 40%;\n    }\n    100% {\n      top: 50%;\n      background: #039be5;\n    }\n  } \n  \n  @keyframes moveUp {\n    0% {\n      background: #311b92;\n      top: 100%;\n    }\n    50% {\n      top: 40%;\n    }\n    100% {\n      top: 50%;\n      background: #039be5;\n    }\n  } \n  \n  @-webkit-keyframes materia {\n    0% {\n      background: #039be5;\n    }\n    50% {\n      background: #039be5;\n      top: 26px;\n    }\n    100% {\n      background: #311b92;\n      width: 100%;\n      height: 64px;\n      border-radius: 0px;\n      top: 26px;\n    }\n  } \n  \n  @keyframes materia {\n    0% {\n      background: #039be5;\n    }\n    50% {\n      background: #039be5;\n      top: 26px;\n    }\n    100% {\n      background: #311b92;\n      width: 100%;\n      height: 64px;\n      border-radius: 0px;\n      top: 26px;\n    }\n  } \n  \n  @-webkit-keyframes moveIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  } \n  \n  @keyframes moveIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  } \n  \n  @-webkit-keyframes hide {\n    0% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n    }\n  } \n  \n  @keyframes hide {\n    0% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsc0JBQXNCOztFQUV4Qjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7O0lBRUUsMkNBQTJDO0lBQzNDLHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7O0VBRUEsNEJBQTRCOztFQUU1Qjs7SUFFRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1DQUFtQztFQUNyQzs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixTQUFTO0lBQ1QsU0FBUztJQUNULGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCOztJQUVoQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLHlIQUFpSDtZQUFqSCxpSEFBaUg7RUFDbkg7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsMlNBQW1TO1lBQW5TLG1TQUFtUztFQUNyUzs7RUFFQSxXQUFXOztFQUNYOztJQUVFLFVBQVU7SUFDViwrQ0FBdUM7WUFBdkMsdUNBQXVDO0VBQ3pDOztFQUVBO0lBQ0U7TUFDRSxVQUFVO01BQ1YsV0FBVztJQUNiO0lBQ0E7TUFDRSxXQUFXO01BQ1gsWUFBWTtNQUNaLGVBQWU7TUFDZixVQUFVO0lBQ1o7RUFDRjs7RUFYQTtJQUNFO01BQ0UsVUFBVTtNQUNWLFdBQVc7SUFDYjtJQUNBO01BQ0UsV0FBVztNQUNYLFlBQVk7TUFDWixlQUFlO01BQ2YsVUFBVTtJQUNaO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLFNBQVM7TUFDVCxXQUFXO01BQ1gsWUFBWTtJQUNkO0lBQ0E7TUFDRSxRQUFRO01BQ1IsWUFBWTtNQUNaLGlCQUFpQjtJQUNuQjtFQUNGOztFQVhBO0lBQ0U7TUFDRSxTQUFTO01BQ1QsV0FBVztNQUNYLFlBQVk7SUFDZDtJQUNBO01BQ0UsUUFBUTtNQUNSLFlBQVk7TUFDWixpQkFBaUI7SUFDbkI7RUFDRjs7RUFFQTtJQUNFO01BQ0Usa0JBQWtCO0lBQ3BCO0lBQ0E7TUFDRSxrQkFBa0I7SUFDcEI7RUFDRjs7RUFQQTtJQUNFO01BQ0Usa0JBQWtCO0lBQ3BCO0lBQ0E7TUFDRSxrQkFBa0I7SUFDcEI7RUFDRjs7RUFFQTtJQUNFO01BQ0UsUUFBUTtJQUNWO0lBQ0E7TUFDRSxRQUFRO0lBQ1Y7SUFDQTtNQUNFLFNBQVM7SUFDWDtFQUNGOztFQVZBO0lBQ0U7TUFDRSxRQUFRO0lBQ1Y7SUFDQTtNQUNFLFFBQVE7SUFDVjtJQUNBO01BQ0UsU0FBUztJQUNYO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLG1CQUFtQjtNQUNuQixTQUFTO0lBQ1g7SUFDQTtNQUNFLFFBQVE7SUFDVjtJQUNBO01BQ0UsUUFBUTtNQUNSLG1CQUFtQjtJQUNyQjtFQUNGOztFQVpBO0lBQ0U7TUFDRSxtQkFBbUI7TUFDbkIsU0FBUztJQUNYO0lBQ0E7TUFDRSxRQUFRO0lBQ1Y7SUFDQTtNQUNFLFFBQVE7TUFDUixtQkFBbUI7SUFDckI7RUFDRjs7RUFFQTtJQUNFO01BQ0UsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxtQkFBbUI7TUFDbkIsU0FBUztJQUNYO0lBQ0E7TUFDRSxtQkFBbUI7TUFDbkIsV0FBVztNQUNYLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsU0FBUztJQUNYO0VBQ0Y7O0VBZkE7SUFDRTtNQUNFLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsbUJBQW1CO01BQ25CLFNBQVM7SUFDWDtJQUNBO01BQ0UsbUJBQW1CO01BQ25CLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLFNBQVM7SUFDWDtFQUNGOztFQUVBO0lBQ0U7TUFDRSxVQUFVO0lBQ1o7SUFDQTtNQUNFLFVBQVU7SUFDWjtFQUNGOztFQVBBO0lBQ0U7TUFDRSxVQUFVO0lBQ1o7SUFDQTtNQUNFLFVBQVU7SUFDWjtFQUNGOztFQUVBO0lBQ0U7TUFDRSxVQUFVO0lBQ1o7SUFDQTtNQUNFLFVBQVU7SUFDWjtFQUNGOztFQVBBO0lBQ0U7TUFDRSxVQUFVO0lBQ1o7SUFDQTtNQUNFLFVBQVU7SUFDWjtFQUNGIiwiZmlsZSI6ImFwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICB9IFxuICBcbiAgbWFpbiB7XG4gICAgZmxleDogMSAwIGF1dG87XG4gIH1cbiAgXG4gIGgxLnRpdGxlLFxuICAuZm9vdGVyLWNvcHlyaWdodCBhIHtcbiAgICBmb250LWZhbWlseTogJ0FyY2hpdGVjdHMgRGF1Z2h0ZXInLCBjdXJzaXZlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgfVxuICBcbiAgLyogc3RhcnQgd2VsY29tZSBhbmltYXRpb24gKi9cbiAgXG4gIGJvZHkud2VsY29tZSB7XG4gICAgXG4gICAgYmFja2dyb3VuZDogIzUxMmRhODtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICB9XG4gIFxuICAud2VsY29tZSAuc3BsYXNoIHtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYm9yZGVyOiAxMzBlbSBzb2xpZCAjNTEyZGE4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJveC1zaXppbmc6IGluaXRpYWw7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGFuaW1hdGlvbjogcHVmZiAwLjVzIDEuOHMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSkgZm9yd2FyZHMsIGJvcmRlclJhZGl1cyAwLjJzIDIuM3MgbGluZWFyIGZvcndhcmRzO1xuICB9XG4gIFxuICAud2VsY29tZSAjd2VsY29tZSB7XG4gICAgYmFja2dyb3VuZDogIzMxMWI5MiA7XG4gICAgd2lkdGg6IDU2cHg7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBhbmltYXRpb246IGluaXQgMC41cyAwLjJzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpIGZvcndhcmRzLCBtb3ZlRG93biAxcyAwLjhzIGN1YmljLWJlemllcigwLjYsIC0wLjI4LCAwLjczNSwgMC4wNDUpIGZvcndhcmRzLCBtb3ZlVXAgMXMgMS44cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgZm9yd2FyZHMsIG1hdGVyaWEgMC41cyAyLjdzIGN1YmljLWJlemllcigwLjg2LCAwLCAwLjA3LCAxKSBmb3J3YXJkcywgaGlkZSAycyAyLjlzIGVhc2UgZm9yd2FyZHM7XG4gIH1cbiAgICAgXG4gIC8qIG1vdmVJbiAqL1xuICAud2VsY29tZSBoZWFkZXIsXG4gIC53ZWxjb21lIGEuYnRuIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGFuaW1hdGlvbjogbW92ZUluIDJzIDMuMXMgZWFzZSBmb3J3YXJkcztcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBpbml0IHtcbiAgICAwJSB7XG4gICAgICB3aWR0aDogMHB4O1xuICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgd2lkdGg6IDU2cHg7XG4gICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBwdWZmIHtcbiAgICAwJSB7XG4gICAgICB0b3A6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDBweDtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDBweCAxMDAlO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBib3JkZXJSYWRpdXMge1xuICAgIDAlIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIG1vdmVEb3duIHtcbiAgICAwJSB7XG4gICAgICB0b3A6IDUwJTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIHRvcDogNDAlO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRvcDogMTAwJTtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgbW92ZVVwIHtcbiAgICAwJSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMzExYjkyO1xuICAgICAgdG9wOiAxMDAlO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgdG9wOiA0MCU7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBtYXRlcmlhIHtcbiAgICAwJSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgYmFja2dyb3VuZDogIzAzOWJlNTtcbiAgICAgIHRvcDogMjZweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMzExYjkyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICB0b3A6IDI2cHg7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIG1vdmVJbiB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBoaWRlIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/__ivy_ngcc__/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authService, router, flashMessage) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLoginSubmit",
        value: function onLoginSubmit() {
          var _this7 = this;

          var user = {
            username: this.username,
            password: this.password
          };
          this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.body['success']) {
              console.log(data.body);

              _this7.authService.storeUserData(data.body['token'], data.body['user']);

              _this7.flashMessage.show('You are now logged In', {
                cssClass: 'alert-success',
                timout: 5000
              });

              _this7.router.navigate(['dashboard']);
            } else {
              _this7.flashMessage.show(data.body['msg'], {
                cssClass: 'alert-danger',
                timout: 5000
              });

              console.log(data.body);

              _this7.router.navigate(['login']);
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 19,
      vars: 2,
      consts: [["name", "viewport", "content", "width=device-width, initial-scale=1"], [3, "submit"], [1, "container"], ["for", "username"], ["type", "text", "placeholder", "Enter username", "name", "username", "required", "", 3, "ngModel", "ngModelChange"], ["for", "psw"], ["type", "password", "placeholder", "Enter Password", "name", "password", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Submit", 1, "registerbtn"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_4_listener() {
            return ctx.onLoginSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sign In ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */", "body[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: black;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n\n.container[_ngcontent-%COMP%] {\n  padding: 16px;\n  background-color: white;\n}\n\n\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1;\n}\n\ninput[type=text][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n\nhr[_ngcontent-%COMP%] {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n\n\n.registerbtn[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  color: white;\n  padding: 16px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n\n.registerbtn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n\na[_ngcontent-%COMP%] {\n  color: dodgerblue;\n}\n\n\n.signin[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  text-align: center;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material/material.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/material/material.module.ts ***!
    \*********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    var MaterialComponents = [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["WavesModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"]];

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [[MaterialComponents], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["WavesModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["WavesModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"]],
        exports: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["WavesModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [MaterialComponents],
          exports: [MaterialComponents]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/__ivy_ngcc__/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");

    var _c0 = function _c0() {
      return ["active"];
    };

    var _c1 = function _c1() {
      return {
        exact: true
      };
    };

    var _c2 = function _c2() {
      return ["/dashboard"];
    };

    function NavbarComponent_a_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
      }
    }

    var _c3 = function _c3() {
      return ["/profile"];
    };

    function NavbarComponent_a_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c3));
      }
    }

    var _c4 = function _c4() {
      return ["/city"];
    };

    function NavbarComponent_a_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cities");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c4));
      }
    }

    var _c5 = function _c5() {
      return ["/editcity"];
    };

    function NavbarComponent_a_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "EditCities");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c5));
      }
    }

    var _c6 = function _c6() {
      return ["/login"];
    };

    function NavbarComponent_a_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c6));
      }
    }

    var _c7 = function _c7() {
      return ["/register"];
    };

    function NavbarComponent_a_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c7));
      }
    }

    function NavbarComponent_a_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_a_18_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.onLogoutClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_a_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
      }
    }

    function NavbarComponent_a_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c3));
      }
    }

    function NavbarComponent_a_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cities");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c4));
      }
    }

    function NavbarComponent_a_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "EditCity");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c5));
      }
    }

    function NavbarComponent_a_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c6));
      }
    }

    function NavbarComponent_a_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c7));
      }
    }

    function NavbarComponent_a_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_a_32_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.onLogoutClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c8 = function _c8() {
      return ["/"];
    };

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(authService, router, flashMessage) {
        _classCallCheck(this, NavbarComponent);

        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLogoutClick",
        value: function onLogoutClick() {
          this.authService.logout();
          this.flashMessage.show('You are logged Out', {
            cssClass: 'alert-success',
            timeout: 3000
          });
          this.router.navigate(['/login']);
          return false;
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 36,
      vars: 26,
      consts: [["color", "primary"], ["mat-icon-button", ""], [3, "click"], [1, "menu-spacer"], [3, "routerLinkActive", "routerLinkActiveOptions"], ["mat-button", "", 3, "routerLink"], [3, "routerLinkActive", "routerLinkActiveOptions", 4, "ngIf"], [4, "ngIf"], ["sidenav", ""], ["mat-list-item", "", 3, "routerLinkActive", "routerLinkActiveOptions"], ["mat-list-item", "", 3, "routerLinkActive", "routerLinkActiveOptions", 4, "ngIf"], ["mat-list-item", "", 4, "ngIf"], [2, "height", "88vh"], ["mat-button", "", "href", "#", 3, "click"], ["mat-list-item", ""]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_mat_icon_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

            return _r7.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "KNOWINDIA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavbarComponent_a_12_Template, 3, 6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NavbarComponent_a_13_Template, 3, 6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavbarComponent_a_14_Template, 3, 6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavbarComponent_a_15_Template, 3, 6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NavbarComponent_a_16_Template, 3, 6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavbarComponent_a_17_Template, 3, 6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NavbarComponent_a_18_Template, 3, 0, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-sidenav-container");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-sidenav", null, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-nav-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, NavbarComponent_a_26_Template, 3, 6, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NavbarComponent_a_27_Template, 3, 6, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, NavbarComponent_a_28_Template, 3, 6, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, NavbarComponent_a_29_Template, 3, 6, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, NavbarComponent_a_30_Template, 3, 6, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, NavbarComponent_a_31_Template, 3, 6, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, NavbarComponent_a_32_Template, 3, 0, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.loggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.loggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.loggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.loggedIn() && ctx.authService.isadmin());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.loggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.loggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.loggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.loggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.loggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.loggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.loggedIn() && ctx.authService.isadmin());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.loggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.loggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.loggedIn());
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: [".menu-spacer[_ngcontent-%COMP%]{\n    flex:  1 1 auto;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0VBQ2pCIiwiZmlsZSI6ImFwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1zcGFjZXJ7XG4gICAgZmxleDogIDEgMSBhdXRvO1xuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProfileComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.user.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Username:", ctx_r20.user.username, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email:", ctx_r20.user.email, "");
      }
    }

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(authService, router) {
        _classCallCheck(this, ProfileComponent);

        this.authService = authService;
        this.router = router;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.authService.getProfile();
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "page-header"], [1, "list-group"], [1, "list-group-item"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileComponent_div_0_Template, 8, 3, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile',
          templateUrl: './profile.component.html',
          styleUrls: ['./profile.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/validate.service */
    "./src/app/services/validate.service.ts");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/__ivy_ngcc__/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(validateService, flashMessage, authService, router) {
        _classCallCheck(this, RegisterComponent);

        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onRegisterSubmit",
        value: function onRegisterSubmit() {
          var _this8 = this;

          var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
          }; // Required fields

          if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('please fill in all fields', {
              cssClass: 'alert-danger',
              timeout: 3000
            });
            return false;
          } //validate email


          if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('please use a valid email', {
              cssClass: 'alert-danger',
              timeout: 3000
            });
            return false;
          } //register user


          this.authService.registerUser(user).subscribe(function (data) {
            if (data.body['success']) {
              _this8.flashMessage.show('success', {
                cssClass: 'alert-success',
                timeout: 3000
              });

              _this8.router.navigate(['/login']);
            } else {
              _this8.flashMessage.show('fail', {
                cssClass: 'alert-danger',
                timeout: 3000
              });

              _this8.router.navigate(['/register']);
            }
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 45,
      vars: 4,
      consts: [["name", "viewport", "content", "width=device-width, initial-scale=1"], [3, "submit"], [1, "container"], ["for", "name"], ["type", "text", "placeholder", "Enter name", "name", "name", "required", "", 3, "ngModel", "ngModelChange"], ["for", "username"], ["type", "text", "placeholder", "Enter username", "name", "username", "required", "", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "text", "placeholder", "Enter Email", "name", "email", "required", "", 3, "ngModel", "ngModelChange"], ["for", "psw"], ["type", "password", "placeholder", "Enter Password", "name", "password", "required", "", 3, "ngModel", "ngModelChange"], ["for", "psw-repeat"], ["type", "password", "placeholder", "Repeat Password", "name", "psw-repeat", "required", ""], ["href", "#"], ["type", "submit", "value", "Submit", 1, "registerbtn"], [1, "container", "signin"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function RegisterComponent_Template_form_submit_4_listener() {
            return ctx.onRegisterSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Please fill in this form to create an account.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Repeat Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "By creating an account you agree to our ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Terms & Privacy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Already have an account? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */", "body[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: black;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n\n.container[_ngcontent-%COMP%] {\n  padding: 16px;\n  background-color: white;\n}\n\n\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1;\n}\n\ninput[type=text][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n\nhr[_ngcontent-%COMP%] {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n\n\n.registerbtn[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  color: white;\n  padding: 16px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n\n.registerbtn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n\na[_ngcontent-%COMP%] {\n  color: dodgerblue;\n}\n\n\n.signin[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  text-align: center;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.css']
        }]
      }], function () {
        return [{
          type: _services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"]
        }, {
          type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/searchbar/searchbar.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/searchbar/searchbar.component.ts ***!
    \**************************************************/

  /*! exports provided: SearchbarComponent */

  /***/
  function srcAppSearchbarSearchbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchbarComponent", function () {
      return SearchbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function SearchbarComponent_mat_option_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var state_r23 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", state_r23.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](state_r23.name);
      }
    }

    var SearchbarComponent = /*#__PURE__*/function () {
      function SearchbarComponent(authService) {
        var _this9 = this;

        _classCallCheck(this, SearchbarComponent);

        this.authService = authService;
        this.cityd = {};
        this.cityname = [];
        this.citydesc = [];
        this.img1 = [];
        this.img2 = [];
        this.id = [];
        this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.states = [{
          name: 'Rajasthan',
          population: '',
          // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
          flag: ''
        }, {
          name: '',
          population: '',
          // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
          flag: ''
        }, {
          name: '',
          population: '',
          // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
          flag: ''
        }];
        this.filteredStates = this.stateCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) {
          return state ? _this9._filterStates(state) : _this9.states.slice();
        }));
      }

      _createClass(SearchbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.authService.getallcitydata().subscribe(function (res) {
            var allcitydata = {};
            allcitydata = res;
            _this10.cityd = allcitydata; //this.l=this.cityd.length; 

            for (var i = 0; i < _this10.cityd.length; i++) {
              _this10.cityname[i] = _this10.cityd[i].cityname;
              _this10.citydesc[i] = _this10.cityd[i].citydesc;
              _this10.img1[i] = _this10.cityd[i].img1;
              _this10.img2[i] = _this10.cityd[i].img2;
              _this10.id[i] = _this10.cityd[i]._id;
            }

            console.log(_this10.cityname);
            console.log(_this10.citydesc);
            console.log(_this10.img1);
            console.log(_this10.img2);
            console.log(_this10.id); //this.user = allcitydata.user;
            //console.log(this.user); 
          }, function (err) {
            console.log(err);
            return false;
          });
        }
      }, {
        key: "onLoginSubmit",
        value: function onLoginSubmit() {
          var city = this.stateCtrl.value;
          console.log(city);
        }
      }, {
        key: "_filterStates",
        value: function _filterStates(value) {
          var filterValue = value.toLowerCase();
          return this.states.filter(function (state) {
            return state.name.toLowerCase().indexOf(filterValue) === 0;
          });
        }
      }]);

      return SearchbarComponent;
    }();

    SearchbarComponent.ɵfac = function SearchbarComponent_Factory(t) {
      return new (t || SearchbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    SearchbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchbarComponent,
      selectors: [["app-searchbar"]],
      decls: 11,
      vars: 5,
      consts: [[1, "wrap"], [1, "search", 3, "submit"], [1, "searchTerm"], [1, "example-full-width"], ["matInput", "", "placeholder", "What are you looking for?", "ria-label", "State", 3, "matAutocomplete", "formControl"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "searchButton"], [1, "fa", "fa-search"], [3, "value"]],
      template: function SearchbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SearchbarComponent_Template_div_submit_1_listener() {
            return ctx.onLoginSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-autocomplete", null, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SearchbarComponent_mat_option_7_Template, 3, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r21)("formControl", ctx.stateCtrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, ctx.filteredStates));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
      styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans);\n\nbody[_ngcontent-%COMP%]{\n  background: #f2f2f2;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.search[_ngcontent-%COMP%] {\n  width: 450px;\n  position: relative;\n  display: flex;\n}\n\n.searchTerm[_ngcontent-%COMP%] {\n  width: 450px;\n  border: 3px solid #00B4CC;\n  border-right: none;\n  padding: 5px;\n  height: 60px;\n  border-radius: 5px 0 0 5px;\n  outline: none;\n  color: #9DBFAF;\n}\n\n.searchTerm[_ngcontent-%COMP%]:focus{\n  color: #00B4CC;\n  font-size: 35px;\n}\n\n.searchButton[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border: 1px solid #00B4CC;\n  background: #00B4CC;\n  \n  color: #fff;\n  border-radius: 0 5px 5px 0;\n  cursor: pointer;\n  font-size: 20px;\n  position: absolute;\n  top: 0px;\n  left: 450px;\n}\n\n\n\n.wrap[_ngcontent-%COMP%]{\n  width: 30%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 447px;\n  background: #f2f2f2;\n  height: 54px;\n  top: -5px;\n  left: -5px;\n  \n}\n\n.example-option-img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n\n[dir='rtl'][_ngcontent-%COMP%]   .example-option-img[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZWFyY2hiYXIvc2VhcmNoYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOERBQThEOztBQUU5RDtFQUNFLG1CQUFtQjtFQUNuQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFFQSxnREFBZ0Q7O0FBQ2hEO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7QUFDQTs7Ozs7Ozs7Ozs7O0dBWUc7O0FBQ0g7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVOztBQUVaOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoiYXBwL3NlYXJjaGJhci9zZWFyY2hiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMpO1xuXG5ib2R5e1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG59XG5cbi5zZWFyY2gge1xuICB3aWR0aDogNDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnNlYXJjaFRlcm0ge1xuICB3aWR0aDogNDUwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMEI0Q0M7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgcGFkZGluZzogNXB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogIzlEQkZBRjtcbn1cblxuLnNlYXJjaFRlcm06Zm9jdXN7XG4gIGNvbG9yOiAjMDBCNENDO1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbi5zZWFyY2hCdXR0b24ge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBCNENDO1xuICBiYWNrZ3JvdW5kOiAjMDBCNENDO1xuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDQ1MHB4O1xufVxuXG4vKlJlc2l6ZSB0aGUgd3JhcCB0byBzZWUgdGhlIHNlYXJjaCBiYXIgY2hhbmdlISovXG4ud3JhcHtcbiAgd2lkdGg6IDMwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi8qIC5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiA0NDdweDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgaGVpZ2h0OiA1NHB4O1xuICB0b3A6IC01cHg7XG4gIGxlZnQ6IC01cHg7XG59ICovXG4uZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogNDQ3cHg7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIGhlaWdodDogNTRweDtcbiAgdG9wOiAtNXB4O1xuICBsZWZ0OiAtNXB4O1xuICBcbn1cblxuLmV4YW1wbGUtb3B0aW9uLWltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG5bZGlyPSdydGwnXSAuZXhhbXBsZS1vcHRpb24taW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogOHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-searchbar',
          templateUrl: './searchbar.component.html',
          styleUrls: ['./searchbar.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.url = 'https://knowindiabackend.onrender.com/';
      }

      _createClass(AuthService, [{
        key: "isadmin",
        value: function isadmin() {
          if (this.user.username == 'admin' || this.user.username == 'Admin' || this.user.username == 'ADMIN') {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "registerUser",
        value: function registerUser(user) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers.append('Content-Type', 'application/json');
          return this.http.post(this.url + 'user/register', user, {
            headers: headers,
            observe: 'response'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "authenticateUser",
        value: function authenticateUser(user) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers.append('Content-Type', 'application/json');
          return this.http.post(this.url + 'user/authenticate', user, {
            headers: headers,
            observe: 'response'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "storeUserData",
        value: function storeUserData(token, user) {
          localStorage.setItem('id_token', token);
          localStorage.setItem('user', JSON.stringify(user));
          this.authToken = token;
          this.user = user;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authToken = null;
          this.user = null;
          localStorage.clear();
        }
      }, {
        key: "getProfile",
        value: function getProfile() {
          return this.user;
        }
      }, {
        key: "getallcitydata",
        value: function getallcitydata() {
          // let headers = new HttpHeaders({
          //   'Content-Type': 'application/json'
          // });
          return this.http.get(this.url + 'user/getallcitydata');
        }
      }, {
        key: "getcitydatabyid",
        value: function getcitydatabyid(cityid) {
          return this.http.get(this.url + 'user/getcitydata', {
            params: {
              id: cityid
            }
          });
        }
      }, {
        key: "updatecitydatabyid",
        value: function updatecitydatabyid(bodyd) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.http.put(this.url + 'user/updatecitydata', bodyd, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "deletecitydatabyid",
        value: function deletecitydatabyid(cityid) {
          return this.http["delete"](this.url + 'user/deletecitydata', {
            params: {
              id: cityid
            }
          });
        }
      }, {
        key: "addnewcity",
        value: function addnewcity(bodyd) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.http.post(this.url + 'user/newcitydata', bodyd, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "uploadimage",
        value: function uploadimage(bodyd) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.http.post(this.url + 'user/upload', bodyd).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "citysession",
        value: function citysession(cityid) {
          this.citysessiond = cityid;
          console.log("cityid", this.citysessiond);
        }
      }, {
        key: "loadToken",
        value: function loadToken() {
          var token = localStorage.getItem('id_token');
          this.authToken = token;
        }
      }, {
        key: "loggedIn",
        value: function loggedIn() {
          if (this.authToken != null) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/validate.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/validate.service.ts ***!
    \**********************************************/

  /*! exports provided: ValidateService */

  /***/
  function srcAppServicesValidateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidateService", function () {
      return ValidateService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ValidateService = /*#__PURE__*/function () {
      function ValidateService() {
        _classCallCheck(this, ValidateService);
      }

      _createClass(ValidateService, [{
        key: "validateRegister",
        value: function validateRegister(user) {
          if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "validateEmail",
        value: function validateEmail(email) {
          var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
        }
      }]);

      return ValidateService;
    }();

    ValidateService.ɵfac = function ValidateService_Factory(t) {
      return new (t || ValidateService)();
    };

    ValidateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ValidateService,
      factory: ValidateService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/shivanshsharma/Desktop/KnowIndia/angular-src/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map