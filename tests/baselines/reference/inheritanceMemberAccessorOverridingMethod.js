//// [inheritanceMemberAccessorOverridingMethod.ts]
class a {
    x() {
        return "20";
    }
}

class b extends a {
    get x() {
        return "20";
    }
    set x(aValue: string) {

    }
}

//// [inheritanceMemberAccessorOverridingMethod.js]
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = /** @class */ (function () {
    function a() {
    }
    a.prototype.x = function () {
        return "20";
    };
    return a;
}());
var b = /** @class */ (function (_super) {
    __extends(b, _super);
    function b() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(b.prototype, "x", {
        get: function () {
            return "20";
        },
        set: function (aValue) {
        },
        enumerable: true,
        configurable: true
    });
    return b;
}(a));