var me = {

}

module.exports = me;

Function.prototype.iapply = function (ctx) {
    var ctx = ctx || window;
    // 首先要获取调用call的函数，用this可以获取
    var fn = Symbol();  // 保证 ctx 中 fn 唯一性
    ctx[fn] = this;
    var args = arguments[1]; //获取传入的数组参数

    if (args.length === 0) {   // 没有传入参数直接执行
        return ctx[fn]();
    }

    var fnStr = 'ctx[fn](';
    for (var i=0; i<args.length; i++) {
        fnStr += (i === args.length - 1) ? args[i] : args[i] + ',';
    }
    fnStr += ')';  // 得到"context.fn(arg1,arg2,arg3...)"
    var destVal = eval(fnStr);  // 获取可能的函数返回值
    // ctx.fn(args);

    delete ctx[fn];
    return destVal;
}

Function.prototype.bind = Function.prototype.bind || function (ctx) {
    //
    if (typeof this !== 'function') {
        throw new TypeError('bind type error!!!');
    }
    var _this = this;
    // bind 传参
    var args = Array.prototype.slice.call(arguments, 1);

    var F = function () {};
    F.prototype = this.prototype;
    var bound = function () {
        // 预设函数传参
        var innerArgs = Array.prototype.slice.call(arguments);
        return _this.apply(this instanceof F ? this : ctx || this, args.concat(innerArgs));
    };
    bound.prototype = new F();
    return bound;
}