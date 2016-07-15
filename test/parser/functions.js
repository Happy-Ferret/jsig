'use strict';

var test = require('tape');

var parse = require('../../parser.js');

test('foo : (String, Number) => Object', function t(assert) {
    var content = 'foo : (String, Number) => Object';
    var result = parse(content).statements[0];

    assert.equal(result.type, 'assignment');
    assert.equal(result.identifier, 'foo');
    assert.deepEqual(result.typeExpression, {
        type: 'function',
        thisArg: null,
        args: [{
            type: 'typeLiteral',
            line: 1,
            loc: {
                start: {
                    line: 1,
                    column: 7
                },
                end: {
                    line: 1,
                    column: 13
                }
            },
            concreteValue: null,
            isGeneric: false,
            builtin: true,
            label: null,
            optional: false,
            name: 'String',
            _raw: null
        }, {
            type: 'typeLiteral',
            line: 1,
            loc: {
                start: {
                    line: 1,
                    column: 15
                },
                end: {
                    line: 1,
                    column: 21
                }
            },
            concreteValue: null,
            isGeneric: false,
            builtin: true,
            label: null,
            optional: false,
            name: 'Number',
            _raw: null
        }],
        result: {
            type: 'typeLiteral',
            line: 1,
            loc: {
                start: {
                    line: 1,
                    column: 26
                },
                end: {
                    line: 1,
                    column: 32
                }
            },
            concreteValue: null,
            isGeneric: false,
            builtin: true,
            label: null,
            name: 'Object',
            optional: false,
            _raw: null
        },
        brand: 'Object',
        generics: [],
        _raw: null,
        label: null,
        optional: false
    });

    assert.end();
});

test('foo : () => CustomType', function t(assert) {
    var content = 'foo : () => CustomType';
    var result = parse(content).statements[0];

    assert.deepEqual(result, {
        type: 'assignment',
        identifier: 'foo',
        typeExpression: {
            type: 'function',
            args: [],
            thisArg: null,
            result: {
                type: 'typeLiteral',
                line: 1,
                loc: {
                    start: {
                        line: 1,
                        column: 12
                    },
                    end: {
                        line: 1,
                        column: 22
                    }
                },
                concreteValue: null,
                isGeneric: false,
                label: null,
                optional: false,
                builtin: false,
                name: 'CustomType',
                _raw: null
            },
            brand: 'Object',
            generics: [],
            _raw: null,
            label: null,
            optional: false
        },
        _raw: null
    });

    assert.end();
});

test('foo : (tagName: String) => void', function t(assert) {
    var content = 'foo : (tagName: String) => void';
    var result = parse(content).statements[0];

    assert.deepEqual(result, {
        type: 'assignment',
        identifier: 'foo',
        typeExpression: {
            type: 'function',
            args: [{
                type: 'typeLiteral',
                line: 1,
                loc: {
                    start: {
                        line: 1,
                        column: 16
                    },
                    end: {
                        line: 1,
                        column: 22
                    }
                },
                concreteValue: null,
                isGeneric: false,
                label: 'tagName',
                optional: false,
                builtin: true,
                name: 'String',
                _raw: null
            }],
            thisArg: null,
            brand: 'Object',
            generics: [],
            _raw: null,
            result: {
                type: 'typeLiteral',
                line: 1,
                loc: {
                    start: {
                        line: 1,
                        column: 27
                    },
                    end: {
                        line: 1,
                        column: 31
                    }
                },
                concreteValue: null,
                isGeneric: false,
                builtin: true,
                label: null,
                optional: false,
                name: 'void',
                _raw: null
            },
            label: null,
            optional: false
        },
        _raw: null
    });

    assert.end();
});

test('foo : (this: DOMText, index: Number) => void', function t(assert) {
    var content = 'foo : (this: DOMText, index: Number) => void';
    var result = parse(content).statements[0];

    assert.deepEqual(result, {
        type: 'assignment',
        identifier: 'foo',
        typeExpression: {
            type: 'function',
            args: [{
                type: 'typeLiteral',
                line: 1,
                loc: {
                    start: {
                        line: 1,
                        column: 29
                    },
                    end: {
                        line: 1,
                        column: 35
                    }
                },
                concreteValue: null,
                isGeneric: false,
                label: 'index',
                optional: false,
                builtin: true,
                name: 'Number',
                _raw: null
            }],
            thisArg: {
                type: 'typeLiteral',
                line: 1,
                loc: {
                    start: {
                        line: 1,
                        column: 13
                    },
                    end: {
                        line: 1,
                        column: 20
                    }
                },
                concreteValue: null,
                isGeneric: false,
                label: 'this',
                optional: false,
                builtin: false,
                name: 'DOMText',
                _raw: null
            },
            brand: 'Object',
            result: {
                type: 'typeLiteral',
                line: 1,
                loc: {
                    start: {
                        line: 1,
                        column: 40
                    },
                    end: {
                        line: 1,
                        column: 44
                    }
                },
                concreteValue: null,
                isGeneric: false,
                builtin: true,
                label: null,
                optional: false,
                name: 'void',
                _raw: null
            },
            generics: [],
            label: null,
            optional: false,
            _raw: null
        },
        _raw: null
    });

    assert.end();
});

test('foo : (id: String, parent?: Bar) => Baz', function t(assert) {
    var content = 'foo : (id: String, parent?: Bar) => Baz';
    var result = parse(content).statements[0];

    assert.deepEqual(result, {
        type: 'assignment',
        identifier: 'foo',
        typeExpression: {
            type: 'function',
            args: [{
                type: 'typeLiteral',
                line: 1,
                loc: {
                    start: {
                        line: 1,
                        column: 11
                    },
                    end: {
                        line: 1,
                        column: 17
                    }
                },
                concreteValue: null,
                isGeneric: false,
                label: 'id',
                builtin: true,
                optional: false,
                name: 'String',
                _raw: null
            }, {
                type: 'typeLiteral',
                line: 1,
                loc: {
                    start: {
                        line: 1,
                        column: 28
                    },
                    end: {
                        line: 1,
                        column: 31
                    }
                },
                concreteValue: null,
                isGeneric: false,
                label: 'parent',
                builtin: false,
                optional: true,
                name: 'Bar',
                _raw: null
            }],
            thisArg: null,
            brand: 'Object',
            result: {
                type: 'typeLiteral',
                line: 1,
                loc: {
                    start: {
                        line: 1,
                        column: 36
                    },
                    end: {
                        line: 1,
                        column: 39
                    }
                },
                concreteValue: null,
                isGeneric: false,
                builtin: false,
                optional: false,
                label: null,
                name: 'Baz',
                _raw: null
            },
            generics: [],
            _raw: null,
            optional: false,
            label: null
        },
        _raw: null
    });

    assert.end();
});

test('foo : <T>(a: T, b: T) => T', function t(assert) {
    var content = 'foo : <T>(a: T, b: T) => T';
    var result = parse(content).statements[0];

    assert.deepEqual(result, {
        type: 'assignment',
        identifier: 'foo',
        typeExpression: {
            type: 'function',
            args: [{
                type: 'typeLiteral',
                line: 1,
                loc: {
                    start: {
                        line: 1,
                        column: 13
                    },
                    end: {
                        line: 1,
                        column: 14
                    }
                },
                concreteValue: null,
                isGeneric: true,
                label: 'a',
                builtin: false,
                optional: false,
                name: 'T',
                _raw: null
            }, {
                type: 'typeLiteral',
                line: 1,
                loc: {
                    start: {
                        line: 1,
                        column: 19
                    },
                    end: {
                        line: 1,
                        column: 20
                    }
                },
                concreteValue: null,
                isGeneric: true,
                label: 'b',
                builtin: false,
                optional: false,
                name: 'T',
                _raw: null
            }],
            thisArg: null,
            brand: 'Object',
            result: {
                type: 'typeLiteral',
                line: 1,
                loc: {
                    start: {
                        line: 1,
                        column: 25
                    },
                    end: {
                        line: 1,
                        column: 26
                    }
                },
                concreteValue: null,
                isGeneric: true,
                builtin: false,
                optional: false,
                label: null,
                name: 'T',
                _raw: null
            },
            generics: [{
                type: 'locationLiteral',
                name: 'T',
                location: ['args', 0],
                _raw: null
            }, {
                type: 'locationLiteral',
                name: 'T',
                location: ['args', 1],
                _raw: null
            }, {
                type: 'locationLiteral',
                name: 'T',
                location: ['result'],
                _raw: null
            }],
            _raw: null,
            optional: false,
            label: null
        },
        _raw: null
    });

    assert.end();
});
