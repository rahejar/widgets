angular.module('zeus.widgets.templates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("html/zs_text.html",
    "<div class=\"form-group has-feedback\" ng-class=\"{'has-warning': validation.level == 'warning',\n" +
    "            'has-error': validation.level == 'error',\n" +
    "            'has-success': ( validation.level == 'success' && showTick )}\"><label>{{ label }} <span class=\"mandatory-asterisk text-danger\" ng-if=mandatory>*</span></label><input class=form-control ng-blur=validationHandler() placeholder=\"{{ placeholder }}\" ng-model=zsModel ng-disabled=isDisabled> <span data-role=icon class=\"fa form-control-feedback\" ng-class=\"{'fa-exclamation-triangle': validation.level == 'warning',\n" +
    "            'fa-times': validation.level == 'error',\n" +
    "            'fa-check': ( validation.level == 'success' && showTick ),\n" +
    "            'fa-spin': validation.inprogress,\n" +
    "            'text-muted': validation.inprogress,\n" +
    "            'fa-circle-o-notch': validation.inprogress}\"></span><div class=error-msg-block data-role=errorBlck ng-class=\"{'validation-warning': validation.level == 'warning',\n" +
    "            'validation-error': validation.level == 'error'}\"><span class=\"error-sign fa\" ng-show=\"validation.level != 'success'\" ng-class=\"{'fa-exclamation-triangle': validation.level == 'warning',\n" +
    "            'fa-times': validation.level == 'error'}\"></span> <span data-role=errormsg>{{ validation.msg }}</span></div></div>");
}]);
