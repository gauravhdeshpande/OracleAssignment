define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Ajax = /** @class */ (function () {
        function Ajax(u, m) {
            var _this = this;
            this.Trigger = function () {
                _this.req.open(_this.method, _this.url, true);
                _this.req.send();
            };
            this.StaticJson = {
                'kiko': 'gogo'
            };
            this.url = u ? u : '';
            this.method = m ? m : 'GET';
            this.RequestSetup();
        }
        Ajax.prototype.RequestSetup = function () {
            var _this = this;
            this.req = new XMLHttpRequest();
            this.req.onreadystatechange = function (e) {
                switch (_this.req.readyState) {
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    case 4:
                        document.write(_this.req.responseText);
                        break;
                }
            };
        };
        return Ajax;
    }());
    exports.default = Ajax;
});
