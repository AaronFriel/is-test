import is from '@sindresorhus/is';

function main() {
    const obj: unknown = {};
    // No error, but element is of type "any" because we do not have
    // lib.dom.d.ts in scope.
    const element = is.domElement(obj) ? obj : undefined;

    // An error! Same reason.
    console.log(name);
}

main();