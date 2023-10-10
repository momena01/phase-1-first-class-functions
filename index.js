function receivesAFunction(callback) {
    callback();
}
function returnsANamedFunction() {
    return function fn() {
        return fn.name;
    };
}
function returnsAnAnonymousFunction() {
    return function () {

    };
} 