(self["webpackChunkecommerce_demo"] = self["webpackChunkecommerce_demo"] || []).push([[6750],{

/***/ 99960:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
/** Types of elements found in htmlparser2's DOM */
var ElementType;
(function (ElementType) {
    /** Type for the root element of a document */
    ElementType["Root"] = "root";
    /** Type for Text */
    ElementType["Text"] = "text";
    /** Type for <? ... ?> */
    ElementType["Directive"] = "directive";
    /** Type for <!-- ... --> */
    ElementType["Comment"] = "comment";
    /** Type for <script> tags */
    ElementType["Script"] = "script";
    /** Type for <style> tags */
    ElementType["Style"] = "style";
    /** Type for Any tag */
    ElementType["Tag"] = "tag";
    /** Type for <![CDATA[ ... ]]> */
    ElementType["CDATA"] = "cdata";
    /** Type for <!doctype ...> */
    ElementType["Doctype"] = "doctype";
})(ElementType = exports.ElementType || (exports.ElementType = {}));
/**
 * Tests whether an element is a tag or not.
 *
 * @param elem Element to test
 */
function isTag(elem) {
    return (elem.type === ElementType.Tag ||
        elem.type === ElementType.Script ||
        elem.type === ElementType.Style);
}
exports.isTag = isTag;
// Exports for backwards compatibility
/** Type for the root element of a document */
exports.Root = ElementType.Root;
/** Type for Text */
exports.Text = ElementType.Text;
/** Type for <? ... ?> */
exports.Directive = ElementType.Directive;
/** Type for <!-- ... --> */
exports.Comment = ElementType.Comment;
/** Type for <script> tags */
exports.Script = ElementType.Script;
/** Type for <style> tags */
exports.Style = ElementType.Style;
/** Type for Any tag */
exports.Tag = ElementType.Tag;
/** Type for <![CDATA[ ... ]]> */
exports.CDATA = ElementType.CDATA;
/** Type for <!doctype ...> */
exports.Doctype = ElementType.Doctype;


/***/ }),

/***/ 47915:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DomHandler = void 0;
var domelementtype_1 = __webpack_require__(99960);
var node_1 = __webpack_require__(97790);
__exportStar(__webpack_require__(97790), exports);
var reWhitespace = /\s+/g;
// Default options
var defaultOpts = {
    normalizeWhitespace: false,
    withStartIndices: false,
    withEndIndices: false,
    xmlMode: false,
};
var DomHandler = /** @class */ (function () {
    /**
     * @param callback Called once parsing has completed.
     * @param options Settings for the handler.
     * @param elementCB Callback whenever a tag is closed.
     */
    function DomHandler(callback, options, elementCB) {
        /** The elements of the DOM */
        this.dom = [];
        /** The root element for the DOM */
        this.root = new node_1.Document(this.dom);
        /** Indicated whether parsing has been completed. */
        this.done = false;
        /** Stack of open tags. */
        this.tagStack = [this.root];
        /** A data node that is still being written to. */
        this.lastNode = null;
        /** Reference to the parser instance. Used for location information. */
        this.parser = null;
        // Make it possible to skip arguments, for backwards-compatibility
        if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
        }
        if (typeof callback === "object") {
            options = callback;
            callback = undefined;
        }
        this.callback = callback !== null && callback !== void 0 ? callback : null;
        this.options = options !== null && options !== void 0 ? options : defaultOpts;
        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
    }
    DomHandler.prototype.onparserinit = function (parser) {
        this.parser = parser;
    };
    // Resets the handler back to starting state
    DomHandler.prototype.onreset = function () {
        this.dom = [];
        this.root = new node_1.Document(this.dom);
        this.done = false;
        this.tagStack = [this.root];
        this.lastNode = null;
        this.parser = null;
    };
    // Signals the handler that parsing is done
    DomHandler.prototype.onend = function () {
        if (this.done)
            return;
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
    };
    DomHandler.prototype.onerror = function (error) {
        this.handleCallback(error);
    };
    DomHandler.prototype.onclosetag = function () {
        this.lastNode = null;
        var elem = this.tagStack.pop();
        if (this.options.withEndIndices) {
            elem.endIndex = this.parser.endIndex;
        }
        if (this.elementCB)
            this.elementCB(elem);
    };
    DomHandler.prototype.onopentag = function (name, attribs) {
        var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : undefined;
        var element = new node_1.Element(name, attribs, undefined, type);
        this.addNode(element);
        this.tagStack.push(element);
    };
    DomHandler.prototype.ontext = function (data) {
        var normalizeWhitespace = this.options.normalizeWhitespace;
        var lastNode = this.lastNode;
        if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
            if (normalizeWhitespace) {
                lastNode.data = (lastNode.data + data).replace(reWhitespace, " ");
            }
            else {
                lastNode.data += data;
            }
            if (this.options.withEndIndices) {
                lastNode.endIndex = this.parser.endIndex;
            }
        }
        else {
            if (normalizeWhitespace) {
                data = data.replace(reWhitespace, " ");
            }
            var node = new node_1.Text(data);
            this.addNode(node);
            this.lastNode = node;
        }
    };
    DomHandler.prototype.oncomment = function (data) {
        if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
            this.lastNode.data += data;
            return;
        }
        var node = new node_1.Comment(data);
        this.addNode(node);
        this.lastNode = node;
    };
    DomHandler.prototype.oncommentend = function () {
        this.lastNode = null;
    };
    DomHandler.prototype.oncdatastart = function () {
        var text = new node_1.Text("");
        var node = new node_1.NodeWithChildren(domelementtype_1.ElementType.CDATA, [text]);
        this.addNode(node);
        text.parent = node;
        this.lastNode = text;
    };
    DomHandler.prototype.oncdataend = function () {
        this.lastNode = null;
    };
    DomHandler.prototype.onprocessinginstruction = function (name, data) {
        var node = new node_1.ProcessingInstruction(name, data);
        this.addNode(node);
    };
    DomHandler.prototype.handleCallback = function (error) {
        if (typeof this.callback === "function") {
            this.callback(error, this.dom);
        }
        else if (error) {
            throw error;
        }
    };
    DomHandler.prototype.addNode = function (node) {
        var parent = this.tagStack[this.tagStack.length - 1];
        var previousSibling = parent.children[parent.children.length - 1];
        if (this.options.withStartIndices) {
            node.startIndex = this.parser.startIndex;
        }
        if (this.options.withEndIndices) {
            node.endIndex = this.parser.endIndex;
        }
        parent.children.push(node);
        if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
        }
        node.parent = parent;
        this.lastNode = null;
    };
    return DomHandler;
}());
exports.DomHandler = DomHandler;
exports["default"] = DomHandler;


/***/ }),

/***/ 97790:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cloneNode = exports.hasChildren = exports.isDocument = exports.isDirective = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = exports.Element = exports.Document = exports.NodeWithChildren = exports.ProcessingInstruction = exports.Comment = exports.Text = exports.DataNode = exports.Node = void 0;
var domelementtype_1 = __webpack_require__(99960);
var nodeTypes = new Map([
    [domelementtype_1.ElementType.Tag, 1],
    [domelementtype_1.ElementType.Script, 1],
    [domelementtype_1.ElementType.Style, 1],
    [domelementtype_1.ElementType.Directive, 1],
    [domelementtype_1.ElementType.Text, 3],
    [domelementtype_1.ElementType.CDATA, 4],
    [domelementtype_1.ElementType.Comment, 8],
    [domelementtype_1.ElementType.Root, 9],
]);
/**
 * This object will be used as the prototype for Nodes when creating a
 * DOM-Level-1-compliant structure.
 */
var Node = /** @class */ (function () {
    /**
     *
     * @param type The type of the node.
     */
    function Node(type) {
        this.type = type;
        /** Parent of the node */
        this.parent = null;
        /** Previous sibling */
        this.prev = null;
        /** Next sibling */
        this.next = null;
        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */
        this.startIndex = null;
        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */
        this.endIndex = null;
    }
    Object.defineProperty(Node.prototype, "nodeType", {
        // Read-only aliases
        /**
         * [DOM spec](https://dom.spec.whatwg.org/#dom-node-nodetype)-compatible
         * node {@link type}.
         */
        get: function () {
            var _a;
            return (_a = nodeTypes.get(this.type)) !== null && _a !== void 0 ? _a : 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "parentNode", {
        // Read-write aliases for properties
        /**
         * Same as {@link parent}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.parent;
        },
        set: function (parent) {
            this.parent = parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "previousSibling", {
        /**
         * Same as {@link prev}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.prev;
        },
        set: function (prev) {
            this.prev = prev;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "nextSibling", {
        /**
         * Same as {@link next}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.next;
        },
        set: function (next) {
            this.next = next;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Clone this node, and optionally its children.
     *
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */
    Node.prototype.cloneNode = function (recursive) {
        if (recursive === void 0) { recursive = false; }
        return cloneNode(this, recursive);
    };
    return Node;
}());
exports.Node = Node;
/**
 * A node that contains some data.
 */
var DataNode = /** @class */ (function (_super) {
    __extends(DataNode, _super);
    /**
     * @param type The type of the node
     * @param data The content of the data node
     */
    function DataNode(type, data) {
        var _this = _super.call(this, type) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(DataNode.prototype, "nodeValue", {
        /**
         * Same as {@link data}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.data;
        },
        set: function (data) {
            this.data = data;
        },
        enumerable: false,
        configurable: true
    });
    return DataNode;
}(Node));
exports.DataNode = DataNode;
/**
 * Text within the document.
 */
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(data) {
        return _super.call(this, domelementtype_1.ElementType.Text, data) || this;
    }
    return Text;
}(DataNode));
exports.Text = Text;
/**
 * Comments within the document.
 */
var Comment = /** @class */ (function (_super) {
    __extends(Comment, _super);
    function Comment(data) {
        return _super.call(this, domelementtype_1.ElementType.Comment, data) || this;
    }
    return Comment;
}(DataNode));
exports.Comment = Comment;
/**
 * Processing instructions, including doc types.
 */
var ProcessingInstruction = /** @class */ (function (_super) {
    __extends(ProcessingInstruction, _super);
    function ProcessingInstruction(name, data) {
        var _this = _super.call(this, domelementtype_1.ElementType.Directive, data) || this;
        _this.name = name;
        return _this;
    }
    return ProcessingInstruction;
}(DataNode));
exports.ProcessingInstruction = ProcessingInstruction;
/**
 * A `Node` that can have children.
 */
var NodeWithChildren = /** @class */ (function (_super) {
    __extends(NodeWithChildren, _super);
    /**
     * @param type Type of the node.
     * @param children Children of the node. Only certain node types can have children.
     */
    function NodeWithChildren(type, children) {
        var _this = _super.call(this, type) || this;
        _this.children = children;
        return _this;
    }
    Object.defineProperty(NodeWithChildren.prototype, "firstChild", {
        // Aliases
        /** First child of the node. */
        get: function () {
            var _a;
            return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "lastChild", {
        /** Last child of the node. */
        get: function () {
            return this.children.length > 0
                ? this.children[this.children.length - 1]
                : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "childNodes", {
        /**
         * Same as {@link children}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.children;
        },
        set: function (children) {
            this.children = children;
        },
        enumerable: false,
        configurable: true
    });
    return NodeWithChildren;
}(Node));
exports.NodeWithChildren = NodeWithChildren;
/**
 * The root node of the document.
 */
var Document = /** @class */ (function (_super) {
    __extends(Document, _super);
    function Document(children) {
        return _super.call(this, domelementtype_1.ElementType.Root, children) || this;
    }
    return Document;
}(NodeWithChildren));
exports.Document = Document;
/**
 * An element within the DOM.
 */
var Element = /** @class */ (function (_super) {
    __extends(Element, _super);
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     */
    function Element(name, attribs, children, type) {
        if (children === void 0) { children = []; }
        if (type === void 0) { type = name === "script"
            ? domelementtype_1.ElementType.Script
            : name === "style"
                ? domelementtype_1.ElementType.Style
                : domelementtype_1.ElementType.Tag; }
        var _this = _super.call(this, type, children) || this;
        _this.name = name;
        _this.attribs = attribs;
        return _this;
    }
    Object.defineProperty(Element.prototype, "tagName", {
        // DOM Level 1 aliases
        /**
         * Same as {@link name}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (name) {
                var _a, _b;
                return ({
                    name: name,
                    value: _this.attribs[name],
                    namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                    prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name],
                });
            });
        },
        enumerable: false,
        configurable: true
    });
    return Element;
}(NodeWithChildren));
exports.Element = Element;
/**
 * @param node Node to check.
 * @returns `true` if the node is a `Element`, `false` otherwise.
 */
function isTag(node) {
    return (0, domelementtype_1.isTag)(node);
}
exports.isTag = isTag;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
 */
function isCDATA(node) {
    return node.type === domelementtype_1.ElementType.CDATA;
}
exports.isCDATA = isCDATA;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Text`, `false` otherwise.
 */
function isText(node) {
    return node.type === domelementtype_1.ElementType.Text;
}
exports.isText = isText;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Comment`, `false` otherwise.
 */
function isComment(node) {
    return node.type === domelementtype_1.ElementType.Comment;
}
exports.isComment = isComment;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDirective(node) {
    return node.type === domelementtype_1.ElementType.Directive;
}
exports.isDirective = isDirective;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDocument(node) {
    return node.type === domelementtype_1.ElementType.Root;
}
exports.isDocument = isDocument;
/**
 * @param node Node to check.
 * @returns `true` if the node is a `NodeWithChildren` (has children), `false` otherwise.
 */
function hasChildren(node) {
    return Object.prototype.hasOwnProperty.call(node, "children");
}
exports.hasChildren = hasChildren;
/**
 * Clone a node, and optionally its children.
 *
 * @param recursive Clone child nodes as well.
 * @returns A clone of the node.
 */
function cloneNode(node, recursive) {
    if (recursive === void 0) { recursive = false; }
    var result;
    if (isText(node)) {
        result = new Text(node.data);
    }
    else if (isComment(node)) {
        result = new Comment(node.data);
    }
    else if (isTag(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_1 = new Element(node.name, __assign({}, node.attribs), children);
        children.forEach(function (child) { return (child.parent = clone_1); });
        if (node.namespace != null) {
            clone_1.namespace = node.namespace;
        }
        if (node["x-attribsNamespace"]) {
            clone_1["x-attribsNamespace"] = __assign({}, node["x-attribsNamespace"]);
        }
        if (node["x-attribsPrefix"]) {
            clone_1["x-attribsPrefix"] = __assign({}, node["x-attribsPrefix"]);
        }
        result = clone_1;
    }
    else if (isCDATA(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_2 = new NodeWithChildren(domelementtype_1.ElementType.CDATA, children);
        children.forEach(function (child) { return (child.parent = clone_2); });
        result = clone_2;
    }
    else if (isDocument(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_3 = new Document(children);
        children.forEach(function (child) { return (child.parent = clone_3); });
        if (node["x-mode"]) {
            clone_3["x-mode"] = node["x-mode"];
        }
        result = clone_3;
    }
    else if (isDirective(node)) {
        var instruction = new ProcessingInstruction(node.name, node.data);
        if (node["x-name"] != null) {
            instruction["x-name"] = node["x-name"];
            instruction["x-publicId"] = node["x-publicId"];
            instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
    }
    else {
        throw new Error("Not implemented yet: ".concat(node.type));
    }
    result.startIndex = node.startIndex;
    result.endIndex = node.endIndex;
    if (node.sourceCodeLocation != null) {
        result.sourceCodeLocation = node.sourceCodeLocation;
    }
    return result;
}
exports.cloneNode = cloneNode;
function cloneChildren(childs) {
    var children = childs.map(function (child) { return cloneNode(child, true); });
    for (var i = 1; i < children.length; i++) {
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
    }
    return children;
}


/***/ }),

/***/ 41626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QT: () => (/* binding */ currencies),
/* harmony export */   fu: () => (/* binding */ stripeResponse),
/* harmony export */   sJ: () => (/* binding */ supportEmail),
/* harmony export */   u1: () => (/* binding */ ProductRespone)
/* harmony export */ });
const supportEmail = {
  email: "support@higheredlab.com"
};
const stripeResponse = {
  id: "cs_test_a1V6WMk1RmA0JKhI2vlMIrJrINvFWq62hgUnuyYbyxuBr2twbsMA4TXXDD",
  object: "checkout.session",
  after_expiration: null,
  allow_promotion_codes: null,
  amount_subtotal: 5e5,
  amount_total: 5e5,
  automatic_tax: {
    enabled: false,
    status: null
  },
  billing_address_collection: null,
  cancel_url: "https://your stripe cancel page",
  client_reference_id: null,
  consent: null,
  consent_collection: null,
  currency: "inr",
  customer: "cus_LQ5C1gQ044ORtX",
  customer_creation: "always",
  customer_details: {
    address: {
      city: null,
      country: "IN",
      line1: null,
      line2: null,
      postal_code: null,
      state: null
    },
    email: "test@gmail.com",
    name: "test",
    phone: null,
    tax_exempt: "none",
    tax_ids: []
  },
  customer_email: null,
  expires_at: 1648785031,
  livemode: false,
  locale: null,
  metadata: {
    productId: "23",
    productName: "Web Development"
  },
  mode: "payment",
  payment_intent: "pi_1KjF1oJC3uIZHgp7ltqp53hr",
  payment_link: null,
  payment_method_options: {},
  payment_method_types: ["card"],
  payment_status: "paid",
  phone_number_collection: {
    enabled: false
  },
  recovered_from: null,
  setup_intent: null,
  shipping: null,
  shipping_address_collection: null,
  shipping_options: [],
  shipping_rate: null,
  status: "complete",
  submit_type: null,
  subscription: null,
  success_url: "http://your success?sessionId={CHECKOUT_SESSION_ID}",
  total_details: {
    amount_discount: 0,
    amount_shipping: 0,
    amount_tax: 0
  },
  url: null
};
const ProductRespone = {
  id: 22,
  title: "React + node",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
  price: 450,
  productImage: "https://cdn.google.com/photo/developer-3461405_960_720.png",
  stripeProductId: "prod_LPiFyB7vHeVKQS",
  stripePriceId: "price_1KispFJC3uIZHgp79g4TJ80c",
  createdAt: "2022-03-30T04:08:05.278Z",
  updatedAt: "2022-03-30T04:08:05.278Z",
  currency: "usd"
};
const currencies = [
  {
    currency: "Albania Lek",
    abbreviation: "ALL",
    symbol: "&#76;&#101;&#107;"
  },
  {
    currency: "United Arab Emirates Dirham",
    abbreviation: "AED",
    symbol: "&#x62f;&#x2e;&#x625;"
  },
  {
    currency: "Afghanistan Afghani",
    abbreviation: "AFN",
    symbol: "&#1547;"
  },
  {
    currency: "Argentina Peso",
    abbreviation: "ARS",
    symbol: "&#36;"
  },
  {
    currency: "Aruba Guilder",
    abbreviation: "AWG",
    symbol: "&#402;"
  },
  {
    currency: "Australia Dollar",
    abbreviation: "AUD",
    symbol: "&#36;"
  },
  {
    currency: "Azerbaijan New Manat",
    abbreviation: "AZN",
    symbol: "&#1084;&#1072;&#1085;"
  },
  {
    currency: "Bahamas Dollar",
    abbreviation: "BSD",
    symbol: "&#36;"
  },
  {
    currency: "Barbados Dollar",
    abbreviation: "BBD",
    symbol: "&#36;"
  },
  {
    currency: "Belarus Ruble",
    abbreviation: "BYR",
    symbol: "&#112;&#46;"
  },
  {
    currency: "Belize Dollar",
    abbreviation: "BZD",
    symbol: "&#66;&#90;&#36;"
  },
  {
    currency: "Bermuda Dollar",
    abbreviation: "BMD",
    symbol: "&#36;"
  },
  {
    currency: "Bolivia Boliviano",
    abbreviation: "BOB",
    symbol: "&#36;&#98;"
  },
  {
    currency: "Bosnia and Herzegovina Convertible Marka",
    abbreviation: "BAM",
    symbol: "&#75;&#77;"
  },
  {
    currency: "Botswana Pula",
    abbreviation: "BWP",
    symbol: "&#80;"
  },
  {
    currency: "Bulgaria Lev",
    abbreviation: "BGN",
    symbol: "&#1083;&#1074;"
  },
  {
    currency: "Brazil Real",
    abbreviation: "BRL",
    symbol: "&#82;&#36;"
  },
  {
    currency: "Brunei Darussalam Dollar",
    abbreviation: "BND",
    symbol: "&#36;"
  },
  {
    currency: "Cambodia Riel",
    abbreviation: "KHR",
    symbol: "&#6107;"
  },
  {
    currency: "Canada Dollar",
    abbreviation: "CAD",
    symbol: "&#36;"
  },
  {
    currency: "Cayman Islands Dollar",
    abbreviation: "KYD",
    symbol: "&#36;"
  },
  {
    currency: "Chile Peso",
    abbreviation: "CLP",
    symbol: "&#36;"
  },
  {
    currency: "China Yuan Renminbi",
    abbreviation: "CNY",
    symbol: "&#165;"
  },
  {
    currency: "Colombia Peso",
    abbreviation: "COP",
    symbol: "&#36;"
  },
  {
    currency: "Costa Rica Colon",
    abbreviation: "CRC",
    symbol: "&#8353;"
  },
  {
    currency: "Croatia Kuna",
    abbreviation: "HRK",
    symbol: "&#107;&#110;"
  },
  {
    currency: "Cuba Peso",
    abbreviation: "CUP",
    symbol: "&#8369;"
  },
  {
    currency: "Czech Republic Koruna",
    abbreviation: "CZK",
    symbol: "&#75;&#269;"
  },
  {
    currency: "Denmark Krone",
    abbreviation: "DKK",
    symbol: "&#107;&#114;"
  },
  {
    currency: "Dominican Republic Peso",
    abbreviation: "DOP",
    symbol: "&#82;&#68;&#36;"
  },
  {
    currency: "East Caribbean Dollar",
    abbreviation: "XCD",
    symbol: "&#36;"
  },
  {
    currency: "Egypt Pound",
    abbreviation: "EGP",
    symbol: "&#163;"
  },
  {
    currency: "El Salvador Colon",
    abbreviation: "SVC",
    symbol: "&#36;"
  },
  {
    currency: "Estonia Kroon",
    abbreviation: "EEK",
    symbol: "&#107;&#114;"
  },
  {
    currency: "Euro Member Countries",
    abbreviation: "EUR",
    symbol: "&#8364;"
  },
  {
    currency: "Falkland Islands (Malvinas) Pound",
    abbreviation: "FKP",
    symbol: "&#163;"
  },
  {
    currency: "Fiji Dollar",
    abbreviation: "FJD",
    symbol: "&#36;"
  },
  {
    currency: "Ghana Cedis",
    abbreviation: "GHC",
    symbol: "&#162;"
  },
  {
    currency: "Gibraltar Pound",
    abbreviation: "GIP",
    symbol: "&#163;"
  },
  {
    currency: "Guatemala Quetzal",
    abbreviation: "GTQ",
    symbol: "&#81;"
  },
  {
    currency: "Guernsey Pound",
    abbreviation: "GGP",
    symbol: "&#163;"
  },
  {
    currency: "Guyana Dollar",
    abbreviation: "GYD",
    symbol: "&#36;"
  },
  {
    currency: "Honduras Lempira",
    abbreviation: "HNL",
    symbol: "&#76;"
  },
  {
    currency: "Hong Kong Dollar",
    abbreviation: "HKD",
    symbol: "&#36;"
  },
  {
    currency: "Hungary Forint",
    abbreviation: "HUF",
    symbol: "&#70;&#116;"
  },
  {
    currency: "Iceland Krona",
    abbreviation: "ISK",
    symbol: "&#107;&#114;"
  },
  {
    currency: "India Rupee",
    abbreviation: "INR",
    symbol: "&#8377;"
  },
  {
    currency: "Indonesia Rupiah",
    abbreviation: "IDR",
    symbol: "&#82;&#112;"
  },
  {
    currency: "Iran Rial",
    abbreviation: "IRR",
    symbol: "&#65020;"
  },
  {
    currency: "Isle of Man Pound",
    abbreviation: "IMP",
    symbol: "&#163;"
  },
  {
    currency: "Israel Shekel",
    abbreviation: "ILS",
    symbol: "&#8362;"
  },
  {
    currency: "Jamaica Dollar",
    abbreviation: "JMD",
    symbol: "&#74;&#36;"
  },
  {
    currency: "Japan Yen",
    abbreviation: "JPY",
    symbol: "&#165;"
  },
  {
    currency: "Jersey Pound",
    abbreviation: "JEP",
    symbol: "&#163;"
  },
  {
    currency: "Kazakhstan Tenge",
    abbreviation: "KZT",
    symbol: "&#1083;&#1074;"
  },
  {
    currency: "Korea (North) Won",
    abbreviation: "KPW",
    symbol: "&#8361;"
  },
  {
    currency: "Korea (South) Won",
    abbreviation: "KRW",
    symbol: "&#8361;"
  },
  {
    currency: "Kyrgyzstan Som",
    abbreviation: "KGS",
    symbol: "&#1083;&#1074;"
  },
  {
    currency: "Laos Kip",
    abbreviation: "LAK",
    symbol: "&#8365;"
  },
  {
    currency: "Latvia Lat",
    abbreviation: "LVL",
    symbol: "&#76;&#115;"
  },
  {
    currency: "Lebanon Pound",
    abbreviation: "LBP",
    symbol: "&#163;"
  },
  {
    currency: "Liberia Dollar",
    abbreviation: "LRD",
    symbol: "&#36;"
  },
  {
    currency: "Lithuania Litas",
    abbreviation: "LTL",
    symbol: "&#76;&#116;"
  },
  {
    currency: "Macedonia Denar",
    abbreviation: "MKD",
    symbol: "&#1076;&#1077;&#1085;"
  },
  {
    currency: "Malaysia Ringgit",
    abbreviation: "MYR",
    symbol: "&#82;&#77;"
  },
  {
    currency: "Mauritius Rupee",
    abbreviation: "MUR",
    symbol: "&#8360;"
  },
  {
    currency: "Mexico Peso",
    abbreviation: "MXN",
    symbol: "&#36;"
  },
  {
    currency: "Mongolia Tughrik",
    abbreviation: "MNT",
    symbol: "&#8366;"
  },
  {
    currency: "Mozambique Metical",
    abbreviation: "MZN",
    symbol: "&#77;&#84;"
  },
  {
    currency: "Namibia Dollar",
    abbreviation: "NAD",
    symbol: "&#36;"
  },
  {
    currency: "Nepal Rupee",
    abbreviation: "NPR",
    symbol: "&#8360;"
  },
  {
    currency: "Netherlands Antilles Guilder",
    abbreviation: "ANG",
    symbol: "&#402;"
  },
  {
    currency: "New Zealand Dollar",
    abbreviation: "NZD",
    symbol: "&#36;"
  },
  {
    currency: "Nicaragua Cordoba",
    abbreviation: "NIO",
    symbol: "&#67;&#36;"
  },
  {
    currency: "Nigeria Naira",
    abbreviation: "NGN",
    symbol: "&#8358;"
  },
  {
    currency: "Korea (North) Won",
    abbreviation: "KPW",
    symbol: "&#8361;"
  },
  {
    currency: "Norway Krone",
    abbreviation: "NOK",
    symbol: "&#107;&#114;"
  },
  {
    currency: "Oman Rial",
    abbreviation: "OMR",
    symbol: "&#65020;"
  },
  {
    currency: "Pakistan Rupee",
    abbreviation: "PKR",
    symbol: "&#8360;"
  },
  {
    currency: "Panama Balboa",
    abbreviation: "PAB",
    symbol: "&#66;&#47;&#46;"
  },
  {
    currency: "Paraguay Guarani",
    abbreviation: "PYG",
    symbol: "&#71;&#115;"
  },
  {
    currency: "Peru Nuevo Sol",
    abbreviation: "PEN",
    symbol: "&#83;&#47;&#46;"
  },
  {
    currency: "Philippines Peso",
    abbreviation: "PHP",
    symbol: "&#8369;"
  },
  {
    currency: "Poland Zloty",
    abbreviation: "PLN",
    symbol: "&#122;&#322;"
  },
  {
    currency: "Qatar Riyal",
    abbreviation: "QAR",
    symbol: "&#65020;"
  },
  {
    currency: "Romania New Leu",
    abbreviation: "RON",
    symbol: "&#108;&#101;&#105;"
  },
  {
    currency: "Russia Ruble",
    abbreviation: "RUB",
    symbol: "&#1088;&#1091;&#1073;"
  },
  {
    currency: "Saint Helena Pound",
    abbreviation: "SHP",
    symbol: "&#163;"
  },
  {
    currency: "Saudi Arabia Riyal",
    abbreviation: "SAR",
    symbol: "&#65020;"
  },
  {
    currency: "Serbia Dinar",
    abbreviation: "RSD",
    symbol: "&#1044;&#1080;&#1085;&#46;"
  },
  {
    currency: "Seychelles Rupee",
    abbreviation: "SCR",
    symbol: "&#8360;"
  },
  {
    currency: "Singapore Dollar",
    abbreviation: "SGD",
    symbol: "&#36;"
  },
  {
    currency: "Solomon Islands Dollar",
    abbreviation: "SBD",
    symbol: "&#36;"
  },
  {
    currency: "Somalia Shilling",
    abbreviation: "SOS",
    symbol: "&#83;"
  },
  {
    currency: "South Africa Rand",
    abbreviation: "ZAR",
    symbol: "&#82;"
  },
  {
    currency: "Korea (South) Won",
    abbreviation: "KRW",
    symbol: "&#8361;"
  },
  {
    currency: "Sri Lanka Rupee",
    abbreviation: "LKR",
    symbol: "&#8360;"
  },
  {
    currency: "Sweden Krona",
    abbreviation: "SEK",
    symbol: "&#107;&#114;"
  },
  {
    currency: "Switzerland Franc",
    abbreviation: "CHF",
    symbol: "&#67;&#72;&#70;"
  },
  {
    currency: "Suriname Dollar",
    abbreviation: "SRD",
    symbol: "&#36;"
  },
  {
    currency: "Syria Pound",
    abbreviation: "SYP",
    symbol: "&#163;"
  },
  {
    currency: "Taiwan New Dollar",
    abbreviation: "TWD",
    symbol: "&#78;&#84;&#36;"
  },
  {
    currency: "Thailand Baht",
    abbreviation: "THB",
    symbol: "&#3647;"
  },
  {
    currency: "Trinidad and Tobago Dollar",
    abbreviation: "TTD",
    symbol: "&#84;&#84;&#36;"
  },
  {
    currency: "Turkey Lira",
    abbreviation: "TRL",
    symbol: "&#8356;"
  },
  {
    currency: "Tuvalu Dollar",
    abbreviation: "TVD",
    symbol: "&#36;"
  },
  {
    currency: "Ukraine Hryvna",
    abbreviation: "UAH",
    symbol: "&#8372;"
  },
  {
    currency: "United Kingdom Pound",
    abbreviation: "GBP",
    symbol: "&#163;"
  },
  {
    currency: "United States Dollar",
    abbreviation: "USD",
    symbol: "&#36;"
  },
  {
    currency: "Uruguay Peso",
    abbreviation: "UYU",
    symbol: "&#36;&#85;"
  },
  {
    currency: "Uzbekistan Som",
    abbreviation: "UZS",
    symbol: "&#1083;&#1074;"
  },
  {
    currency: "Venezuela Bolivar",
    abbreviation: "VEF",
    symbol: "&#66;&#115;"
  },
  {
    currency: "Viet Nam Dong",
    abbreviation: "VND",
    symbol: "&#8363;"
  },
  {
    currency: "Yemen Rial",
    abbreviation: "YER",
    symbol: "&#65020;"
  },
  {
    currency: "Zimbabwe Dollar",
    abbreviation: "ZWD",
    symbol: "&#90;&#36;"
  }
];


/***/ }),

/***/ 32114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_App)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(16550);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 15 modules
var helper_plugin_esm = __webpack_require__(41647);
// EXTERNAL MODULE: ./node_modules/strapi-stripe/admin/src/pluginId.js
var pluginId = __webpack_require__(53783);
var pluginId_default = /*#__PURE__*/__webpack_require__.n(pluginId);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.js
var Divider = __webpack_require__(70004);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Alert/Alert.js + 2 modules
var Alert = __webpack_require__(49714);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.js
var ModalLayout = __webpack_require__(42866);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.js
var ModalHeader = __webpack_require__(24969);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.js
var ModalBody = __webpack_require__(59946);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalFooter.js
var ModalFooter = __webpack_require__(36856);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(16364);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Loader/Loader.js + 1 modules
var Loader = __webpack_require__(77197);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Select.js
var Select = __webpack_require__(40619);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Option.js
var Option = __webpack_require__(82562);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/NumberInput/NumberInput.js + 1 modules
var NumberInput = __webpack_require__(81154);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Textarea/Textarea.js
var Textarea = __webpack_require__(61467);
// EXTERNAL MODULE: ./node_modules/strapi-stripe/admin/src/utils/apiCalls.js + 1 modules
var apiCalls = __webpack_require__(93768);
;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/components/CreateProduct/index.js














const CreateProduct = ({ isVisible, handleClose, handleClickSave }) => {
  const [title, setTitle] = (0,react.useState)("");
  const [price, setPrice] = (0,react.useState)();
  const [image, setImage] = (0,react.useState)([]);
  const [paymentType, setPaymentType] = (0,react.useState)("");
  const [isSubscription, setIsSubscription] = (0,react.useState)(false);
  const [description, setDescription] = (0,react.useState)("");
  const [paymentInterval, setPaymentInterval] = (0,react.useState)("");
  const [trialPeriodDays, setTrialPeriodDays] = (0,react.useState)();
  const [heading, setHeading] = (0,react.useState)("Product");
  const [error, setError] = (0,react.useState)({
    title: "",
    price: "",
    description: "",
    paymentType: "",
    paymentInterval: ""
  });
  const [upload, setUpload] = (0,react.useState)(false);
  const [uploadMessage, setUploadMessage] = (0,react.useState)("");
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
      setError({ ...error, title: "" });
    } else if (name === "image") {
      setImage(event.target.files);
    } else if (name === "description") {
      setDescription(value);
      setError({ ...error, description: "" });
    }
  };
  const handleChangePaymentType = (value) => {
    setPaymentType(value);
    setError({ ...error, paymentType: "" });
    if (value === "subscription") {
      setIsSubscription(true);
      setHeading("Subscription");
    } else {
      setIsSubscription(false);
      setHeading("Product");
    }
  };
  const handleChangePaymentInterval = (value) => {
    setPaymentInterval(value);
    setError({ ...error, paymentInterval: "" });
  };
  const handleChangeNumber = (value) => {
    setPrice(value);
    setError({ ...error, price: "" });
  };
  const handleChangeTrialPeriod = (value) => {
    setTrialPeriodDays(value);
  };
  const handleSaveProduct = async () => {
    if (!title && !price && !description && !paymentType) {
      setError({
        ...error,
        title: "Title is required",
        price: "Price is required",
        description: "Description is required",
        paymentType: "Payment Type is required",
        paymentInterval: ""
      });
    } else if (!paymentType) {
      setError({
        ...error,
        title: "",
        price: "",
        description: "",
        paymentType: "Payment Type is required",
        paymentInterval: ""
      });
    } else if (!price) {
      setError({
        ...error,
        title: "",
        price: "Price is required",
        description: "",
        paymentType: "",
        paymentInterval: ""
      });
    } else if (!title) {
      setError({
        ...error,
        title: "Title is required",
        price: "",
        description: "",
        paymentType: "",
        paymentInterval: ""
      });
    } else if (!description) {
      setError({
        ...error,
        title: "",
        price: "",
        description: "Description is required",
        paymentType: "",
        paymentInterval: ""
      });
    } else if (isSubscription && !paymentInterval) {
      setError({
        ...error,
        title: "",
        price: "",
        description: "",
        paymentType: "",
        paymentInterval: "Payment Interval is required"
      });
    } else {
      let imageId;
      let imageUrl;
      if (image.length > 0) {
        setUpload(true);
        setUploadMessage("Uploading Product image");
        const response = await (0,apiCalls/* uploadFiles */.IL)(image);
        if (response.data[0].url.indexOf("https://") === 0 || response.data[0].url.indexOf("http://") === 0) {
          imageUrl = response.data[0].url;
        } else {
          imageUrl = `${window.location.origin}${response.data[0].url}`;
        }
        imageId = response.data[0].id;
      }
      setUpload(false);
      handleClickSave(
        title,
        price,
        imageId,
        imageUrl,
        description,
        isSubscription,
        paymentInterval,
        trialPeriodDays
      );
      setTitle("");
      setPrice();
      setImage({});
      setDescription("");
      setIsSubscription(false);
      setPaymentInterval("");
      setTrialPeriodDays("");
      setPaymentType("");
    }
  };
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, null, isVisible && /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.P, { onClose: handleClose, labelledBy: "title" }, /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", justifyContent: "start", alignItems: "start" }, /* @__PURE__ */ react.createElement(
    Typography/* Typography */.Z,
    {
      fontWeight: "bold",
      textColor: "neutral800",
      as: "h2",
      id: "title",
      variant: "beta"
    },
    "Create ",
    heading
  ), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "omega" }, heading === "Product" ? "For a product, you would charge your customer only one-time." : "For a subscription, you would charge your customer every month.")))), /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 5 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
    Select/* Select */.P,
    {
      id: "select1",
      label: "Payment Type",
      required: true,
      clearLabel: "Clear the payment type",
      hint: "Ex:One-Time or Subscription",
      error: error.paymentType ? error.paymentType : "",
      onClear: () => setPaymentType(""),
      onChange: (value) => handleChangePaymentType(value),
      value: paymentType
    },
    /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "oneTime" }, "One-Time"),
    /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "subscription" }, "Subscription")
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
    NumberInput/* NumberInput */.Y,
    {
      label: "Price",
      name: "price",
      onValueChange: (value) => handleChangeNumber(value),
      value: price,
      error: error.price ? error.price : "",
      required: true
    }
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      label: "Title",
      name: "title",
      onChange: handleChange,
      error: error.title ? error.title : "",
      required: true
    }
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", fontWeight: "bold" }, "Image"), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 3 }, /* @__PURE__ */ react.createElement("input", { type: "file", name: "image", onChange: handleChange, accept: "image/*" })), error.image ? /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "danger700" }, error.image) : ""), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 12 }, /* @__PURE__ */ react.createElement(
    Textarea/* Textarea */.g,
    {
      label: "Description",
      name: "description",
      onChange: handleChange,
      error: error.description ? error.description : "",
      required: true
    },
    description
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
    Select/* Select */.P,
    {
      id: "select2",
      label: "Payment Interval",
      required: isSubscription,
      disabled: !isSubscription,
      clearLabel: "Clear the payment interval",
      hint: "Subscription billing frequency: weekly, monthly or yearly.",
      error: error.paymentInterval ? error.paymentInterval : "",
      onClear: () => setPaymentInterval(""),
      onChange: (value) => handleChangePaymentInterval(value),
      value: paymentInterval
    },
    /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "month" }, "Month"),
    /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "year" }, "Year"),
    /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "week" }, "Week")
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
    NumberInput/* NumberInput */.Y,
    {
      label: "Trial Period Days",
      name: "trialPeriodDays",
      disabled: !isSubscription,
      hint: "Free trial period for the subscription.",
      onValueChange: (value) => handleChangeTrialPeriod(value),
      value: trialPeriodDays
    }
  )))), /* @__PURE__ */ react.createElement(
    ModalFooter/* ModalFooter */.m,
    {
      startActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: handleClose, variant: "tertiary" }, "Cancel"),
      endActions: upload ? /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Loader/* Loader */.a, { small: true }, "Loading......"), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold", textColor: "primary600", as: "h2" }, uploadMessage || "")) : /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "default", onClick: handleSaveProduct }, "create")
    }
  )));
};
CreateProduct.propTypes = {
  isVisible: (prop_types_default()).bool.isRequired,
  handleClose: (prop_types_default()).func.isRequired,
  handleClickSave: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_CreateProduct = (CreateProduct);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.js
var Table = __webpack_require__(38939);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/TFooter.js
var TFooter = __webpack_require__(49386);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Thead.js
var Thead = __webpack_require__(8060);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.js
var Tr = __webpack_require__(79031);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.js
var Cell = __webpack_require__(37909);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.js
var Tbody = __webpack_require__(15234);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(12028);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(73727);
// EXTERNAL MODULE: ./node_modules/html-react-parser/index.js
var html_react_parser = __webpack_require__(30488);
;// CONCATENATED MODULE: ./node_modules/html-react-parser/index.mjs


var domToReact = html_react_parser.domToReact;
var htmlToDOM = html_react_parser.htmlToDOM;
var attributesToProps = html_react_parser.attributesToProps;
var Element = html_react_parser.Element;

/* harmony default export */ const node_modules_html_react_parser = (html_react_parser);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Pagination/Pagination.js
var Pagination = __webpack_require__(81036);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Pagination/components.js
var components = __webpack_require__(9669);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/EmptyStateLayout/EmptyStateLayout.js
var EmptyStateLayout = __webpack_require__(89722);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(63237);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.js
var Pencil = __webpack_require__(4585);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CarretUp.js
var CarretUp = __webpack_require__(40910);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CarretDown.js
var CarretDown = __webpack_require__(12645);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Badge/Badge.js
var Badge = __webpack_require__(30190);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.js
var Plus = __webpack_require__(96315);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/ChartPie.js

const h = (e) => /* @__PURE__ */ (0,jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
  "path",
  {
    fill: "#212134",
    d: "M11 2.05V13h10.95c-.501 5.053-4.765 9-9.95 9-5.523 0-10-4.477-10-10 0-5.185 3.947-9.449 9-9.95Zm2-1.507C18.553 1.02 22.979 5.447 23.457 11H13V.543Z"
  }
) }), r = h;


// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.js
var Trash = __webpack_require__(20022);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Link.js
var Link = __webpack_require__(63851);
;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/components/ProductList/linkIcon.js


const LinkIcon = () => /* @__PURE__ */ react.createElement(Link/* default */.Z, null);
/* harmony default export */ const linkIcon = (LinkIcon);

// EXTERNAL MODULE: ./node_modules/strapi-stripe/admin/src/components/ProductList/constant.js
var constant = __webpack_require__(41626);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/Accordion.js
var Accordion = __webpack_require__(48734);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionToggle.js + 1 modules
var AccordionToggle = __webpack_require__(74756);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionContent.js
var AccordionContent = __webpack_require__(63081);
;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/components/ProductList/embedCodeModal.js









const EmbedCodeModal = ({
  productId,
  isVisibleEmbedCode,
  handleCloseEmbedCode,
  isSubscription
}) => {
  const [expandProduct, setExpandProduct] = (0,react.useState)(false);
  const [expandPayment, setExpandPayment] = (0,react.useState)(false);
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, null, isVisibleEmbedCode && /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.P, { onClose: handleCloseEmbedCode, labelledBy: "title" }, /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "start" }, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    Typography/* Typography */.Z,
    {
      fontWeight: "bold",
      variant: "beta",
      textColor: "neutral800",
      as: "h2",
      id: "title"
    },
    "Embed Code"
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "omega" }, "Enable the Stripe Payment button in your frontend app by following the simple steps mentioned below:")))), /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "top" }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingRight: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "epsilon" }, "Step\xA01:")), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "epsilon" }, "Embed the script tag in the html header section of your product list, payment success and payment failure pages:"))), /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral100", padding: 2, marginTop: 4, marginBottom: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, `
                <script
                  type="text/javascript"
                  src="${window.location.origin}/plugins/strapi-stripe/static/stripe.js"
                >
                  
                <\/script>
                `)), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "top" }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingRight: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "epsilon" }, "Step\xA02a:")), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "epsilon" }, "Show the \u201C", isSubscription ? "Subscribe" : "BuyNow", "\u201D button next to your product details on the product list page."))), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingRight: 2, paddingTop: 1 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "epsilon" }, "If you provide the email address of the user, it will pre-populate the email field.")), /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral100", padding: 2, marginTop: 4, marginBottom: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, `
                <button class="css style" type="button" class="SS_ProductCheckout"  data-id="${productId}" data-email="<userEmail>" data-url="${window.location.origin}">
                ${isSubscription ? "Subscribe" : "BuyNow"}
                </button>
                `)), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "top" }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingRight: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "epsilon" }, "Step\xA02b:")), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "epsilon" }, "Optionally, you can fetch product details such as title, description, image and price from the API end-point mentioned below and show them."))), /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral100", padding: 2, marginTop: 4, marginBottom: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, `const response = await axios.get(
                   " ${window.location.origin}/strapi-stripe/getProduct/${productId}"
                  ) `)), /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 4, background: "neutral100", marginBottom: 4 }, /* @__PURE__ */ react.createElement(
    Accordion/* Accordion */.U,
    {
      expanded: expandProduct,
      toggle: () => setExpandProduct((s) => !s),
      id: "acc-1",
      size: "S"
    },
    /* @__PURE__ */ react.createElement(AccordionToggle/* AccordionToggle */.B, { title: "Sample Product response object" }),
    /* @__PURE__ */ react.createElement(AccordionContent/* AccordionContent */.v, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 3 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, /* @__PURE__ */ react.createElement("pre", null, JSON.stringify(constant/* ProductRespone */.u1, null, 2)))))
  )), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "top" }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingRight: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "epsilon" }, "Step\xA03:")), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "epsilon" }, "Optionally, you can show payment transaction status and details on your payment success (or error) page. Use the API call mentioned below:"))), /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral100", padding: 2, marginTop: 4, marginBottom: 4 }, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, `
                  const params = new URLSearchParams(document.location.search);
                  `)), /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, `const checkoutSessionId = params.get("sessionId");`)), /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, `const response = await axios.get(${window.location.origin}/strapi-stripe/retrieveCheckoutSession/${"$"}{checkoutSessionId}
                    )
                   `)), /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 4, background: "neutral100", marginBottom: 4 }, /* @__PURE__ */ react.createElement(
    Accordion/* Accordion */.U,
    {
      expanded: expandPayment,
      toggle: () => setExpandPayment((s) => !s),
      id: "acc-1",
      size: "S"
    },
    /* @__PURE__ */ react.createElement(AccordionToggle/* AccordionToggle */.B, { title: "Sample stripe payment response object" }),
    /* @__PURE__ */ react.createElement(AccordionContent/* AccordionContent */.v, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 3 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, /* @__PURE__ */ react.createElement("pre", null, JSON.stringify(constant/* stripeResponse */.fu, null, 2)))))
  )), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "top" }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingRight: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "epsilon" }, "Step\xA04:")), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "epsilon" }, "Optionally, You can get the subscription status of the user, by using the below API call:"))), /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral100", padding: 2, marginTop: 4, marginBottom: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, `
                const response = await axios.get(${window.location.origin}/strapi-stripe/getSubscriptionStatus/<userEmail>)
                `))), /* @__PURE__ */ react.createElement(
    ModalFooter/* ModalFooter */.m,
    {
      startActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: handleCloseEmbedCode, variant: "tertiary" }, "Cancel"),
      endActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: handleCloseEmbedCode }, "Finish")
    }
  )));
};
EmbedCodeModal.propTypes = {
  productId: (prop_types_default()).any.isRequired,
  isVisibleEmbedCode: (prop_types_default()).any.isRequired,
  handleCloseEmbedCode: (prop_types_default()).func.isRequired,
  isSubscription: (prop_types_default()).any.isRequired
};
/* harmony default export */ const embedCodeModal = (EmbedCodeModal);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Link/Link.js
var Link_Link = __webpack_require__(23620);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowRight.js
var ArrowRight = __webpack_require__(37323);
// EXTERNAL MODULE: ./node_modules/strapi-stripe/package.json
var strapi_stripe_package = __webpack_require__(68522);
;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/components/ProductList/SettingLink.js









const SettingLink = () => {
  const [isNewVersionAvailable, setIsNewVersionAvailable] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    (async () => {
      const response = await (0,apiCalls/* getGithubVersion */.Cq)();
      if (response.tag_name > strapi_stripe_package.version) {
        setIsNewVersionAvailable(true);
      }
    })();
  }, []);
  return /* @__PURE__ */ react.createElement(
    Box/* Box */.x,
    null,
    // if new version is available then show the message
    isNewVersionAvailable ? /* @__PURE__ */ react.createElement(
      Box/* Box */.x,
      {
        shadow: "tableShadow",
        background: "neutral0",
        paddingTop: 6,
        paddingLeft: 7,
        paddingRight: 7,
        paddingBottom: 6,
        hasRadius: true
      },
      /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 4, s: 12 }, /* @__PURE__ */ react.createElement(Link_Link/* Link */.r, { to: "/settings/strapi-stripe", endIcon: /* @__PURE__ */ react.createElement(ArrowRight/* default */.Z, null) }, "Manage Your Stripe Configuration")), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 4, s: 12 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi" }, "Need help? Contact us at : ", constant/* supportEmail.email */.sJ.email)), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 4, s: 12 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi" }, "A new version is available", " ", /* @__PURE__ */ react.createElement(
        "a",
        {
          href: "https://www.npmjs.com/package/strapi-stripe",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        "click here"
      ), " ", "\xA0to know more.", " "))))
    ) : /* @__PURE__ */ react.createElement(
      Box/* Box */.x,
      {
        shadow: "tableShadow",
        background: "neutral0",
        paddingTop: 6,
        paddingLeft: 7,
        paddingRight: 7,
        paddingBottom: 6,
        hasRadius: true
      },
      /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(Link_Link/* Link */.r, { to: "/settings/strapi-stripe", endIcon: /* @__PURE__ */ react.createElement(ArrowRight/* default */.Z, null) }, "Manage Your Stripe Configuration")), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi" }, "Need help? Contact us at : ", constant/* supportEmail.email */.sJ.email))))
    )
  );
};
/* harmony default export */ const ProductList_SettingLink = (SettingLink);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(47149);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Dialog/DialogBody.js
var DialogBody = __webpack_require__(47824);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Dialog/DialogFooter.js
var DialogFooter = __webpack_require__(98426);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ExclamationMarkCircle.js
var ExclamationMarkCircle = __webpack_require__(51277);
;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/components/confirmDialog/confirmDialog.jsx





const ConfirmDialog = ({
  isConfirmVisible,
  handleCloseModal,
  productId,
  stripeProductId,
  handleDeleteProductClick
}) => {
  const handleDelete = async (productId2, stripeProductId2) => {
    const response = await (0,apiCalls/* deleteStripeProduct */.IP)(productId2, stripeProductId2);
    handleCloseModal();
    handleDeleteProductClick();
  };
  return /* @__PURE__ */ react.createElement(Dialog/* Dialog */.V, { onClose: handleCloseModal, title: "Confirmation", isOpen: isConfirmVisible }, /* @__PURE__ */ react.createElement(DialogBody/* DialogBody */.a, { icon: /* @__PURE__ */ react.createElement(ExclamationMarkCircle/* default */.Z, null) }, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 2 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { id: "confirm-description" }, "Are you sure you want to delete this ?", /* @__PURE__ */ react.createElement("br", null), "This will only delete from the database.")))), /* @__PURE__ */ react.createElement(
    DialogFooter/* DialogFooter */.c,
    {
      startAction: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: handleCloseModal, variant: "tertiary" }, "Cancel"),
      endAction: /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          variant: "danger-light",
          startIcon: /* @__PURE__ */ react.createElement(Trash/* default */.Z, null),
          onClick: () => handleDelete(productId, stripeProductId)
        },
        "Confirm"
      )
    }
  ));
};
/* harmony default export */ const confirmDialog = (ConfirmDialog);

;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/components/ProductList/productTable.js

























const ProductTable = ({
  products,
  handleSortAscendingName,
  handleSortDescendingName,
  handleEditClick,
  totalCount,
  page,
  sortAscendingName,
  handleSortAscendingPrice,
  handleSortDescendingPrice,
  sortAscendingPrice,
  handleClickCreateProduct,
  isStripeSettings,
  handleProductDelete
}) => {
  let { url } = (0,react_router/* useRouteMatch */.$B)();
  const ROW_COUNT = 6;
  const COL_COUNT = 10;
  const [isVisible, setIsVisible] = (0,react.useState)(false);
  const [productId, setIsProductId] = (0,react.useState)("");
  const [isSubscription, setIsSubscription] = (0,react.useState)(false);
  const [isConfirmVisible, setIsConfirmVisible] = (0,react.useState)(false);
  const handleCloseModal = () => {
    setIsConfirmVisible(false);
  };
  const handleOpenModal = () => {
    setIsConfirmVisible(true);
  };
  const handleSortCarretUp = () => {
    handleSortDescendingName();
  };
  const handleSortCarretDown = () => {
    handleSortAscendingName();
  };
  const handleSortCarretUpPrice = () => {
    handleSortDescendingPrice();
  };
  const handleSortCarretDownPrice = () => {
    handleSortAscendingPrice();
  };
  const handleClickLink = (productId2, isSubscription2) => {
    setIsProductId(productId2);
    setIsSubscription(isSubscription2);
    setIsVisible(true);
  };
  const handleCloseEmbedModal = () => {
    setIsVisible(false);
  };
  const getProductPrice = (price, currency) => {
    const currencyObj = constant/* currencies.find */.QT.find(
      (item) => item.abbreviation.toLowerCase() === currency.toLowerCase()
    );
    const symbol = currencyObj.symbol;
    const priceWithSymbol = /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement("span", null, node_modules_html_react_parser(symbol)), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, new Intl.NumberFormat().format(price)));
    return priceWithSymbol;
  };
  const getDateTime = (date) => {
    const dates = new Date(date);
    const createdDate = dates.toDateString();
    const createdTime = dates.toLocaleTimeString();
    const dateTime = /* @__PURE__ */ react.createElement(Badge/* Badge */.C, null, createdDate, "\xA0\xA0\xA0", createdTime);
    return dateTime;
  };
  const getPaymentMode = (isSubscription2, interval) => {
    let mode;
    if (!isSubscription2 && !interval) {
      mode = "One-Time";
    } else if (isSubscription2 && interval) {
      if (interval === "month") {
        mode = "Monthly";
      } else if (interval === "year") {
        mode = "Year";
      } else if (interval === "week") {
        mode = "Weekly";
      }
    }
    return mode;
  };
  const getTrialPeriodDays = (trialPeriodDays, isSubscription2) => {
    let trialDays;
    if (isSubscription2 && trialPeriodDays) {
      trialDays = trialPeriodDays;
    } else if (isSubscription2 && !trialPeriodDays) {
      trialDays = 0;
    } else if (!isSubscription2 && !trialPeriodDays) {
      trialDays = "NA";
    }
    return trialDays;
  };
  const handleDeleteProductClick = () => {
    handleProductDelete();
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    embedCodeModal,
    {
      productId,
      isVisibleEmbedCode: isVisible,
      handleCloseEmbedCode: handleCloseEmbedModal,
      isSubscription
    }
  ), /* @__PURE__ */ react.createElement(
    Box/* Box */.x,
    {
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7,
      background: "neutral100"
    },
    products && products.length > 0 ? /* @__PURE__ */ react.createElement(
      Table/* Table */.i,
      {
        colCount: COL_COUNT,
        rowCount: ROW_COUNT,
        footer: /* @__PURE__ */ react.createElement(TFooter/* TFooter */.c, { icon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null), onClick: handleClickCreateProduct }, "Create New Product / Subscription")
      },
      /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma" }, "Name"), "\xA0", sortAscendingName ? /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          onClick: handleSortCarretUp,
          label: "sort by Name",
          noBorder: true,
          icon: /* @__PURE__ */ react.createElement(CarretUp/* default */.Z, null)
        }
      ) : /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          onClick: handleSortCarretDown,
          label: "sort by Name",
          noBorder: true,
          icon: /* @__PURE__ */ react.createElement(CarretDown/* default */.Z, null)
        }
      )), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma" }, "Price"), sortAscendingPrice ? /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          onClick: handleSortCarretUpPrice,
          label: "sort by price",
          noBorder: true,
          icon: /* @__PURE__ */ react.createElement(CarretUp/* default */.Z, null)
        }
      ) : /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          onClick: handleSortCarretDownPrice,
          label: "sort by Name",
          noBorder: true,
          icon: /* @__PURE__ */ react.createElement(CarretDown/* default */.Z, null)
        }
      )), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma" }, "Payment Mode")), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma" }, "Trial Days")), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, "Actions")))),
      /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, products && products.map((product) => /* @__PURE__ */ react.createElement(Tr.Tr, { key: product.id }, /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(
        Typography/* Typography */.Z,
        {
          variant: "epsilon",
          textColor: "neutral800",
          textTransform: "capitalize"
        },
        product.title
      ), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi" }, getDateTime(product.createdAt)))), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, getProductPrice(product.price, product.currency))), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, getPaymentMode(product.isSubscription, product.interval))), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, getTrialPeriodDays(product.trialPeriodDays, product.isSubscription))), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "end" }, /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          onClick: () => handleClickLink(product.id, product.isSubscription),
          label: "Embed Code",
          icon: /* @__PURE__ */ react.createElement(linkIcon, null)
        }
      ), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 3 }, /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          onClick: () => handleEditClick(product.id),
          label: "Edit",
          icon: /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null)
        }
      )), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 3 }, /* @__PURE__ */ react.createElement(
        react_router_dom/* Link */.rU,
        {
          to: `${url}/report/${product.id}/${product.title}`,
          style: { textDecoration: "none" }
        },
        /* @__PURE__ */ react.createElement(IconButton/* IconButton */.h, { label: "Report", icon: /* @__PURE__ */ react.createElement(r, null) })
      )), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 3 }, /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          onClick: () => handleOpenModal(),
          label: "Delete",
          icon: /* @__PURE__ */ react.createElement(Trash/* default */.Z, null)
        }
      )), /* @__PURE__ */ react.createElement(
        confirmDialog,
        {
          isConfirmVisible,
          handleCloseModal,
          productId: product.id,
          stripeProductId: product.stripeProductId,
          handleDeleteProductClick
        }
      ))))))
    ) : /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
      EmptyStateLayout/* EmptyStateLayout */.x,
      {
        icon: "",
        content: "",
        action: /* @__PURE__ */ react.createElement(react.Fragment, null, isStripeSettings ? "" : /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingBottom: 4 }, " ", /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "danger500" }, "Please add your stripe configuration first")), /* @__PURE__ */ react.createElement(
          Button/* Button */.z,
          {
            variant: "secondary",
            disabled: !isStripeSettings,
            startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null),
            onClick: handleClickCreateProduct
          },
          "Create your first Product / Subscription"
        ))
      }
    ))
  ), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "end", paddingRight: 8 }, totalCount ? /* @__PURE__ */ react.createElement(Pagination/* Pagination */.t, { activePage: page, pageCount: totalCount }, /* @__PURE__ */ react.createElement(components/* PreviousLink */.yB, { to: `/plugins/strapi-stripe?page=${page - 1}` }, "Go to previous page"), totalCount && [...Array(totalCount)].map((count, idx) => /* @__PURE__ */ react.createElement(components/* PageLink */.H_, { key: idx, number: idx + 1, to: `/plugins/strapi-stripe?page=${idx + 1}` }, "Go to page 1")), /* @__PURE__ */ react.createElement(components/* NextLink */.pt, { to: `/plugins/strapi-stripe?page=${page + 1}` }, "Go to next page")) : ""), /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 6, paddingBottom: 6, paddingLeft: 7, paddingRight: 7 }, /* @__PURE__ */ react.createElement(ProductList_SettingLink, null)));
};
ProductTable.propTypes = {
  products: (prop_types_default()).any.isRequired,
  handleSortAscendingName: (prop_types_default()).any.isRequired,
  handleSortDescendingName: (prop_types_default()).any.isRequired,
  handleEditClick: (prop_types_default()).any.isRequired,
  totalCount: (prop_types_default()).any.isRequired,
  page: (prop_types_default()).any.isRequired,
  sortAscendingName: (prop_types_default()).any.isRequired,
  handleSortAscendingPrice: (prop_types_default()).any.isRequired,
  handleSortDescendingPrice: (prop_types_default()).any.isRequired,
  sortAscendingPrice: (prop_types_default()).any.isRequired,
  handleClickCreateProduct: (prop_types_default()).any.isRequired,
  isStripeSettings: (prop_types_default()).any.isRequired,
  handleProductDelete: (prop_types_default()).any.isRequired
};
/* harmony default export */ const productTable = (ProductTable);

;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/components/ProductList/editProduct.js













const EditProduct = ({ productId, isEditVisible, handleCloseEdit, handleClickUpdateEdit }) => {
  const [title, setTitle] = (0,react.useState)("");
  const [price, setPrice] = (0,react.useState)("");
  const [url, setUrl] = (0,react.useState)("");
  const [description, setDescription] = (0,react.useState)("");
  const [stripeProduct, setStripeProduct] = (0,react.useState)("");
  const [paymentType, setIsPaymentType] = (0,react.useState)("");
  const [paymentInterval, setPaymentInterval] = (0,react.useState)("");
  const [trialPeriodDays, setTrialPeriodDays] = (0,react.useState)("");
  const [image, setImage] = (0,react.useState)({});
  const [upload, setUpload] = (0,react.useState)(false);
  const [uploadMessage, setUploadMessage] = (0,react.useState)("");
  const [productImageId, setProductImageId] = (0,react.useState)("");
  const [error, setError] = (0,react.useState)({
    title: "",
    price: "",
    url: "",
    description: ""
  });
  (0,react.useEffect)(() => {
    (async () => {
      const response = await (0,apiCalls/* getStripeProductProductById */.aR)(productId);
      if (response.status === 200 && response.data) {
        const {
          title: title2,
          price: price2,
          productImage,
          description: description2,
          stripeProductId,
          isSubscription,
          interval,
          trialPeriodDays: trialPeriodDays2
        } = response.data;
        setTitle(title2);
        setPrice(price2);
        setUrl(`${window.location.origin}${productImage?.url}`);
        setProductImageId(productImage?.id);
        setDescription(description2);
        setStripeProduct(stripeProductId);
        if (isSubscription) {
          setIsPaymentType("subscription");
        } else {
          setIsPaymentType("oneTime");
        }
        setPaymentInterval(interval);
        setTrialPeriodDays(trialPeriodDays2);
      }
    })();
  }, [productId]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
      setError({ ...error, title: "" });
    } else if (name === "price") {
      setPrice(value);
      setError({ ...error, price: "" });
    } else if (name === "image") {
      setImage(event.target.files);
    } else if (name === "description") {
      setDescription(value);
      setError({ ...error, description: "" });
    }
  };
  const handleUpdateProduct = async () => {
    if (!title && !price && !description) {
      setError({
        ...error,
        title: "Title is required",
        price: "Price is required",
        description: "Description is required"
      });
    } else if (!title) {
      setError({
        ...error,
        title: "Title is required",
        price: "",
        description: ""
      });
    } else if (!price) {
      setError({
        ...error,
        title: "",
        price: "Price is required",
        description: ""
      });
    } else if (!description) {
      setError({
        ...error,
        title: "",
        price: "",
        description: "Description is required"
      });
    } else {
      let imageId;
      let imageUrl;
      if (image.length > 0) {
        setUpload(true);
        setUploadMessage("Uploading Product image");
        const response = await (0,apiCalls/* uploadFiles */.IL)(image);
        if (response.data[0].id) {
          imageUrl = `${window.location.origin}${response.data[0].url}`;
          imageId = response.data[0].id;
        }
        handleClickUpdateEdit(productId, title, imageUrl, description, imageId, stripeProduct);
      } else {
        handleClickUpdateEdit(productId, title, url, description, productImageId, stripeProduct);
      }
      setUpload(false);
    }
  };
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, null, isEditVisible && /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.P, { onClose: handleCloseEdit, labelledBy: "title" }, /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "title", variant: "beta" }, "Edit ", paymentType)), /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 5 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
    Select/* Select */.P,
    {
      id: "select1",
      label: "Payment Type",
      required: true,
      clearLabel: "Clear the payment type",
      hint: "Ex:One-Time or Subscription",
      disabled: true,
      value: paymentType
    },
    /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "oneTime" }, "One-Time"),
    /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "subscription" }, "Subscription")
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      placeholder: "Enter the price of the product",
      type: "number",
      label: "Price",
      name: "price",
      value: price,
      onChange: handleChange,
      error: error.price ? error.price : "",
      required: true,
      disabled: true
    }
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      label: "Title",
      name: "title",
      value: title,
      onChange: handleChange,
      error: error.title ? error.title : "",
      required: true
    }
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", fontWeight: "bold" }, "Image"), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 3 }, /* @__PURE__ */ react.createElement("input", { type: "file", name: "image", onChange: handleChange, accept: "image/*" }))), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 12 }, /* @__PURE__ */ react.createElement(
    Textarea/* Textarea */.g,
    {
      label: "Description",
      name: "description",
      onChange: handleChange,
      error: error.description ? error.description : "",
      required: true
    },
    description
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
    Select/* Select */.P,
    {
      id: "select2",
      label: "Payment Interval",
      disabled: true,
      clearLabel: "Clear the payment interval ",
      hint: "Subscription billing frequency: weekly, monthly or yearly.",
      value: paymentInterval
    },
    /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "month" }, "Month"),
    /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "year" }, "Year"),
    /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "week" }, "Week")
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      label: "Trial Period Days",
      name: "trialPeriodDays",
      disabled: true,
      hint: "Free trial period for the subscription.",
      value: trialPeriodDays || ""
    }
  )))), /* @__PURE__ */ react.createElement(
    ModalFooter/* ModalFooter */.m,
    {
      startActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: handleCloseEdit, variant: "tertiary" }, "Cancel"),
      endActions: upload ? /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Loader/* Loader */.a, { small: true }, "Loading......"), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold", textColor: "primary600", as: "h2" }, uploadMessage || "")) : /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "default", onClick: handleUpdateProduct }, "Update")
    }
  )));
};
EditProduct.propTypes = {
  productId: (prop_types_default()).any.isRequired,
  isEditVisible: (prop_types_default()).bool.isRequired,
  handleCloseEdit: (prop_types_default()).func.isRequired,
  handleClickUpdateEdit: (prop_types_default()).func.isRequired
};
/* harmony default export */ const editProduct = (EditProduct);

;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/components/ProductList/index.js










const limit = 5;
const ProductList = () => {
  const search = (0,react_router/* useLocation */.TH)().search;
  const page = new URLSearchParams(search).get("page");
  const pageNumber = page ? parseInt(page, 10) : 1;
  const [isVisible, setIsVisible] = (0,react.useState)(false);
  const [productData, setProductData] = (0,react.useState)();
  const [isEditVisible, setEditVisible] = (0,react.useState)(false);
  const [productId, setProductId] = (0,react.useState)();
  const [count, setCount] = (0,react.useState)();
  const [sortAscendingName, setSortAscendingName] = (0,react.useState)(true);
  const [sortAscendingPrice, setSortAscendingPrice] = (0,react.useState)(true);
  const [sortOrderName, setSortOrderName] = (0,react.useState)(true);
  const [sortOrderPrice, setSortOrderPrice] = (0,react.useState)(false);
  const [isStripeSettings, setIsStripeSettings] = (0,react.useState)(false);
  const [isAlert, setIsAlert] = (0,react.useState)(false);
  const [message, setMessage] = (0,react.useState)("");
  const [isProductDeleted, setIsProductDeleted] = (0,react.useState)(false);
  const offset = pageNumber === 1 ? 0 : (pageNumber - 1) * limit;
  (0,react.useEffect)(() => {
    (async () => {
      let sort;
      let order;
      const setting = await (0,apiCalls/* getStripeConfiguration */.A7)();
      if (setting.data.response) {
        setIsStripeSettings(true);
      } else {
        setIsStripeSettings(false);
      }
      if (sortOrderName) {
        sort = "name";
        order = sortAscendingName ? "asc" : "desc";
      } else if (sortOrderPrice) {
        sort = "price";
        order = sortAscendingPrice ? "asc" : "desc";
      }
      const response = await (0,apiCalls/* getStripeProduct */.HY)(offset, limit, sort, order);
      setProductData(response.data.res);
      setCount(response.data.count);
    })();
  }, [isVisible, isEditVisible, offset, sortAscendingName, sortAscendingPrice, isProductDeleted]);
  const handleCloseModal = () => {
    setIsVisible(false);
  };
  const handleSaveProduct = async (title, price, imageId, imageUrl, description, isSubscription, paymentInterval, trialPeriodDays) => {
    const createProduct = await (0,apiCalls/* createStripeProduct */.m5)(
      title,
      price,
      imageId,
      imageUrl,
      description,
      isSubscription,
      paymentInterval,
      trialPeriodDays
    );
    if (createProduct?.data?.id) {
      setIsVisible(false);
    }
  };
  const handleSortAscendingName = () => {
    setSortAscendingName(true);
    sortOrderName(true);
    sortOrderPrice(false);
  };
  const handleSortDescendingName = () => {
    setSortAscendingName(false);
    sortOrderName(true);
    sortOrderPrice(false);
  };
  const handleSortAscendingPrice = () => {
    setSortAscendingPrice(true);
    setSortOrderName(false);
    setSortOrderPrice(true);
  };
  const handleSortDescendingPrice = () => {
    setSortAscendingPrice(false);
    setSortOrderName(false);
    setSortOrderPrice(true);
  };
  const handleEnableEditMode = async (id) => {
    setProductId(id);
    setEditVisible(true);
  };
  const handleCloseEditModal = () => {
    setEditVisible(false);
  };
  const handleUpdateProduct = async (productId2, title, url, description, productImageId, stripeProductId) => {
    try {
      const updateProduct = await (0,apiCalls/* updateStripeProduct */.CI)(
        productId2,
        title,
        url,
        description,
        productImageId,
        stripeProductId
      );
      if (updateProduct?.data?.id) {
        setEditVisible(false);
      }
    } catch (error) {
      setEditVisible(false);
      setIsAlert(true);
      setMessage(error.response.data.error.message);
    }
  };
  const handleCloseAlert = () => {
    setIsAlert(false);
  };
  const handleClickCreateProduct = () => setIsVisible((prev) => !prev);
  const handleProductDelete = () => {
    setIsProductDeleted(true);
  };
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 6, paddingLeft: 7 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "alpha" }, "Payment via Stripe"), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "omega" }, "The payment plugin enables you to accept online payments using Credit Card, Apple pay and Google pay on your Strapi website or app via Stripe."))), /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 3 }, /* @__PURE__ */ react.createElement(Divider/* Divider */.i, null)), /* @__PURE__ */ react.createElement(
    components_CreateProduct,
    {
      isVisible,
      handleClose: handleCloseModal,
      handleClickSave: (title, price, imageId, imageUrl, description, isSubscription, paymentInterval, trialPeriodDays) => handleSaveProduct(
        title,
        price,
        imageId,
        imageUrl,
        description,
        isSubscription,
        paymentInterval,
        trialPeriodDays
      )
    }
  ), /* @__PURE__ */ react.createElement(
    editProduct,
    {
      productId,
      isEditVisible,
      handleCloseEdit: handleCloseEditModal,
      handleClickUpdateEdit: (productId2, title, url, description, productImageId, stripeProductId) => handleUpdateProduct(productId2, title, url, description, productImageId, stripeProductId)
    }
  ), isAlert ? /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 6, paddingRight: 6 }, /* @__PURE__ */ react.createElement(Alert/* Alert */.b, { closeLabel: "Close alert", title: "Error", variant: "danger", onClose: handleCloseAlert }, message)) : "", /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    productTable,
    {
      products: productData,
      handleSortAscendingName,
      handleSortDescendingName,
      handleEditClick: (id) => handleEnableEditMode(id),
      totalCount: Math.ceil(count / limit),
      page: pageNumber,
      sortAscendingName,
      handleSortAscendingPrice,
      handleSortDescendingPrice,
      sortAscendingPrice,
      handleClickCreateProduct,
      isStripeSettings,
      handleProductDelete
    }
  )));
};
/* harmony default export */ const components_ProductList = (ProductList);

;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/pages/HomePage/index.js


const HomePage = () => {
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(components_ProductList, null));
};
/* harmony default export */ const pages_HomePage = ((0,react.memo)(HomePage));

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Breadcrumbs/Breadcrumbs.js
var Breadcrumbs = __webpack_require__(2407);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.js
var ArrowLeft = __webpack_require__(67109);
;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/components/Report/paymentDetailsTable.js





















const paymentDetailsTable_limit = 7;
const PaymentDetailsTable = () => {
  const { productId, productName } = (0,react_router/* useParams */.UO)();
  const search = (0,react_router/* useLocation */.TH)().search;
  const page = new URLSearchParams(search).get("page");
  const pageNumber = page ? parseInt(page, 10) : 1;
  const offset = pageNumber === 1 ? 0 : (pageNumber - 1) * paymentDetailsTable_limit;
  const [payments, setPayments] = (0,react.useState)();
  const [productDetail, setProductDetail] = (0,react.useState)();
  const [sortAscendingName, setSortAscendingName] = (0,react.useState)(true);
  const [sortAscendingEmail, setSortAscendingEmail] = (0,react.useState)(true);
  const [sortAscendingTxnDate, setSortAscendingTxnDate] = (0,react.useState)(true);
  const [sortOrderName, setSortOrderName] = (0,react.useState)(true);
  const [sortOrderEmail, setSortOrderEmail] = (0,react.useState)(false);
  const [sortOrderTxnDate, setSortOrderTxnDate] = (0,react.useState)(false);
  const [totalCount, setTotalCount] = (0,react.useState)();
  const pageCount = Math.ceil(totalCount / paymentDetailsTable_limit);
  (0,react.useEffect)(async () => {
    let sort;
    let order;
    if (sortOrderName) {
      sort = "name";
      order = sortAscendingName ? "asc" : "desc";
    } else if (sortOrderEmail) {
      sort = "email";
      order = sortAscendingEmail ? "asc" : "desc";
    } else if (sortOrderTxnDate) {
      sort = "date";
      order = sortAscendingTxnDate ? "asc" : "desc";
    }
    const response = await (0,apiCalls/* getProductPayments */.qc)(productId, sort, order, offset, paymentDetailsTable_limit);
    if (response?.data) {
      setPayments(response.data.payments);
      setProductDetail(response.data.payments[0].stripeProduct);
      setTotalCount(response.data.count);
    }
  }, [sortAscendingName, sortAscendingEmail, sortAscendingTxnDate, offset]);
  const getTransactionAmount = (txnAmount, currency) => {
    const currencyObj = constant/* currencies.find */.QT.find(
      (item) => item.abbreviation.toLowerCase() === currency?.toLowerCase()
    );
    const symbol = currencyObj?.symbol;
    const txnAmountWithCurrency = /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement("span", null, symbol ? node_modules_html_react_parser(symbol) : ""), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, new Intl.NumberFormat().format(txnAmount)));
    return txnAmountWithCurrency;
  };
  const getTransactionDateTime = (date) => {
    const dates = new Date(date);
    const paymentDate = dates.toDateString();
    const paymentTime = dates.toLocaleTimeString();
    const dateTime = /* @__PURE__ */ react.createElement(Badge/* Badge */.C, null, paymentDate, "\xA0\xA0\xA0", paymentTime);
    return dateTime;
  };
  const handleSortNameCarretUp = async () => {
    setSortAscendingName(false);
    setSortOrderName(true);
    setSortOrderEmail(false);
    setSortOrderTxnDate(false);
  };
  const handleSortNameCarretDown = async () => {
    setSortAscendingName(true);
    setSortOrderName(true);
    setSortOrderEmail(false);
    setSortOrderTxnDate(false);
  };
  const handleSortEmailCarretUp = async () => {
    setSortAscendingEmail(false);
    setSortOrderName(false);
    setSortOrderEmail(true);
    setSortOrderTxnDate(false);
  };
  const handleSortEmailCarretDown = async () => {
    setSortAscendingEmail(true);
    setSortOrderName(false);
    setSortOrderEmail(true);
    setSortOrderTxnDate(false);
  };
  const handleSortTxnDateCarretUp = async () => {
    setSortAscendingTxnDate(false);
    setSortOrderName(false);
    setSortOrderEmail(false);
    setSortOrderTxnDate(true);
  };
  const handleSortTxnDateCarretDown = async () => {
    setSortAscendingTxnDate(true);
    setSortOrderName(false);
    setSortOrderEmail(false);
    setSortOrderTxnDate(true);
  };
  const getPaymentMode = (isSubscription, interval) => {
    let mode;
    if (!isSubscription && !interval) {
      mode = "One-Time";
    } else if (isSubscription && interval) {
      if (interval === "month") {
        mode = "Monthly";
      } else if (interval === "year") {
        mode = "Year";
      } else if (interval === "week") {
        mode = "Weekly";
      }
    }
    return mode;
  };
  const ROW_COUNT = 6;
  const COL_COUNT = 10;
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 7, paddingTop: 6 }, /* @__PURE__ */ react.createElement(Link_Link/* Link */.r, { to: "/plugins/strapi-stripe", startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null) }, "Back")), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 4, paddingLeft: 7 }, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 3 }, /* @__PURE__ */ react.createElement(Breadcrumbs/* Breadcrumbs */.O, { label: "Category model, name field" }, /* @__PURE__ */ react.createElement(Breadcrumbs/* Crumb */.$, null, productName), /* @__PURE__ */ react.createElement(Breadcrumbs/* Crumb */.$, null, "Transaction Details")))), /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 3 }, /* @__PURE__ */ react.createElement(Divider/* Divider */.i, null)), /* @__PURE__ */ react.createElement(
    Box/* Box */.x,
    {
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7,
      background: "neutral100"
    },
    payments && payments.length > 0 ? /* @__PURE__ */ react.createElement(Table/* Table */.i, { colCount: COL_COUNT, rowCount: ROW_COUNT }, /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma" }, "Customer Name"), sortAscendingName ? /* @__PURE__ */ react.createElement(
      IconButton/* IconButton */.h,
      {
        onClick: handleSortNameCarretUp,
        label: "sort by Name",
        noBorder: true,
        icon: /* @__PURE__ */ react.createElement(CarretUp/* default */.Z, null)
      }
    ) : /* @__PURE__ */ react.createElement(
      IconButton/* IconButton */.h,
      {
        onClick: handleSortNameCarretDown,
        label: "sort by Name",
        noBorder: true,
        icon: /* @__PURE__ */ react.createElement(CarretDown/* default */.Z, null)
      }
    )), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma" }, "Customer Email"), sortAscendingEmail ? /* @__PURE__ */ react.createElement(
      IconButton/* IconButton */.h,
      {
        onClick: handleSortEmailCarretUp,
        label: "sort by Email",
        noBorder: true,
        icon: /* @__PURE__ */ react.createElement(CarretUp/* default */.Z, null)
      }
    ) : /* @__PURE__ */ react.createElement(
      IconButton/* IconButton */.h,
      {
        onClick: handleSortEmailCarretDown,
        label: "sort by Email",
        noBorder: true,
        icon: /* @__PURE__ */ react.createElement(CarretDown/* default */.Z, null)
      }
    )), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma" }, "Payment Type")), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma" }, "Transaction Amount")), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma" }, "Purchased Date"), sortAscendingTxnDate ? /* @__PURE__ */ react.createElement(
      IconButton/* IconButton */.h,
      {
        onClick: handleSortTxnDateCarretUp,
        label: "sort by TxnDate",
        noBorder: true,
        icon: /* @__PURE__ */ react.createElement(CarretUp/* default */.Z, null)
      }
    ) : /* @__PURE__ */ react.createElement(
      IconButton/* IconButton */.h,
      {
        onClick: handleSortTxnDateCarretDown,
        label: "sort by TxnDate",
        noBorder: true,
        icon: /* @__PURE__ */ react.createElement(CarretDown/* default */.Z, null)
      }
    )))), /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, payments && payments.map((payment) => /* @__PURE__ */ react.createElement(Tr.Tr, { key: payment.id }, /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, payment.customerName)), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, payment.customerEmail)), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, getPaymentMode(
      payment?.stripeProduct?.isSubscription,
      payment?.stripeProduct?.interval
    ))), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, getTransactionAmount(payment.txnAmount, productDetail?.currency))), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, getTransactionDateTime(payment.txnDate))))))) : /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral100" }, /* @__PURE__ */ react.createElement(
      EmptyStateLayout/* EmptyStateLayout */.x,
      {
        icon: /* @__PURE__ */ react.createElement(ExclamationMarkCircle/* default */.Z, null),
        content: "This product dont have any transaction"
      }
    ))
  ), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "end", paddingRight: 8 }, pageCount ? /* @__PURE__ */ react.createElement(Pagination/* Pagination */.t, { activePage: pageNumber, pageCount }, /* @__PURE__ */ react.createElement(
    components/* PreviousLink */.yB,
    {
      to: `/plugins/strapi-stripe/report/${productId}/${productName}?page=${pageNumber - 1}`
    },
    "Go to previous page"
  ), [...Array(pageCount)].map((count, idx) => /* @__PURE__ */ react.createElement(
    components/* PageLink */.H_,
    {
      number: idx + 1,
      to: `/plugins/strapi-stripe/report/${productId}/${productName}?page=${idx + 1}`
    },
    "Go to page 1"
  )), /* @__PURE__ */ react.createElement(
    components/* NextLink */.pt,
    {
      to: `/plugins/strapi-stripe/report/${productId}/${productName}?page=${pageNumber + 1}`
    },
    "Go to next page"
  )) : ""));
};
/* harmony default export */ const paymentDetailsTable = (PaymentDetailsTable);

;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/components/Report/index.js


const PaymentReport = () => {
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(paymentDetailsTable, null));
};
/* harmony default export */ const Report = (PaymentReport);

;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/pages/App/index.js






const App = () => {
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(react_router/* Switch */.rs, null, /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: `/plugins/${(pluginId_default())}`, component: pages_HomePage, exact: true }), /* @__PURE__ */ react.createElement(
    react_router/* Route */.AW,
    {
      path: `/plugins/${(pluginId_default())}/report/:productId/:productName`,
      component: Report
    }
  ), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { component: helper_plugin_esm.NotFound })));
};
/* harmony default export */ const pages_App = (App);


/***/ }),

/***/ 93768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m5: () => (/* binding */ createStripeProduct),
  IP: () => (/* binding */ deleteStripeProduct),
  Cq: () => (/* binding */ getGithubVersion),
  qc: () => (/* binding */ getProductPayments),
  A7: () => (/* binding */ getStripeConfiguration),
  HY: () => (/* binding */ getStripeProduct),
  aR: () => (/* binding */ getStripeProductProductById),
  HI: () => (/* binding */ saveStripeConfiguration),
  CI: () => (/* binding */ updateStripeProduct),
  IL: () => (/* binding */ uploadFiles)
});

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 40 modules
var axios = __webpack_require__(52861);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 15 modules
var helper_plugin_esm = __webpack_require__(41647);
;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/utils/axiosInstance.js


const instance = axios["default"].create({
  baseURL: ""
});
instance.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: `Bearer ${helper_plugin_esm/* auth.getToken */.I8.getToken()}`,
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      helper_plugin_esm/* auth.clearAppStorage */.I8.clearAppStorage();
      window.location.reload();
    }
    throw error;
  }
);
/* harmony default export */ const axiosInstance = (instance);

;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/utils/apiCalls.js

const apiCalls_axios = axiosInstance;
async function saveStripeConfiguration(data) {
  const response = await apiCalls_axios.put("/strapi-stripe/updateSettings", {
    data
  });
  return response;
}
async function getStripeConfiguration() {
  const response = await apiCalls_axios.get("/strapi-stripe/getSettings");
  return response;
}
async function createStripeProduct(title, price, imageId, imageUrl, description, isSubscription, paymentInterval, trialPeriodDays) {
  const response = await apiCalls_axios.post("/strapi-stripe/createProduct", {
    title,
    price,
    imageId,
    imageUrl,
    description,
    isSubscription,
    paymentInterval,
    trialPeriodDays
  });
  return response;
}
async function getStripeProduct(offset, limit, sort, order) {
  const response = await apiCalls_axios.get(`/strapi-stripe/getProduct/${offset}/${limit}/${sort}/${order}`);
  return response;
}
async function getStripeProductProductById(id) {
  const response = await apiCalls_axios.get(`/strapi-stripe/getProduct/${id}`);
  return response;
}
async function updateStripeProduct(id, title, url, description, productImage, stripeProductId) {
  const response = await apiCalls_axios.put(`/strapi-stripe/updateProduct/${id}`, {
    title,
    url,
    description,
    productImage,
    stripeProductId
  });
  return response;
}
async function deleteStripeProduct(productId, stripeProductId) {
  const response = await apiCalls_axios.delete(
    `/strapi-stripe/deleteProduct/${productId}/${stripeProductId}`
  );
  return response;
}
async function getProductPayments(productId, sort, order, offset, limit) {
  const response = await apiCalls_axios.get(
    `/strapi-stripe/getPayments/${productId}/${sort}/${order}/${offset}/${limit}`
  );
  return response;
}
async function uploadFiles(files) {
  const formDocument = new FormData();
  formDocument.append("files", files[0]);
  const response = await apiCalls_axios.post(`/upload`, formDocument);
  return response;
}
async function getGithubVersion() {
  const response = await fetch(
    "https://api.github.com/repos/manishkatyan/strapi-stripe/releases/latest"
  );
  const data = await response.json();
  return data;
}


/***/ }),

/***/ 60885:
/***/ ((module) => {

/**
 * SVG elements are case-sensitive.
 *
 * @see {@link https://developer.mozilla.org/docs/Web/SVG/Element#SVG_elements_A_to_Z}
 */
var CASE_SENSITIVE_TAG_NAMES = [
  'animateMotion',
  'animateTransform',
  'clipPath',
  'feBlend',
  'feColorMatrix',
  'feComponentTransfer',
  'feComposite',
  'feConvolveMatrix',
  'feDiffuseLighting',
  'feDisplacementMap',
  'feDropShadow',
  'feFlood',
  'feFuncA',
  'feFuncB',
  'feFuncG',
  'feFuncR',
  'feGaussainBlur',
  'feImage',
  'feMerge',
  'feMergeNode',
  'feMorphology',
  'feOffset',
  'fePointLight',
  'feSpecularLighting',
  'feSpotLight',
  'feTile',
  'feTurbulence',
  'foreignObject',
  'linearGradient',
  'radialGradient',
  'textPath'
];

module.exports = {
  CASE_SENSITIVE_TAG_NAMES: CASE_SENSITIVE_TAG_NAMES
};


/***/ }),

/***/ 38276:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// constants
var HTML = 'html';
var HEAD = 'head';
var BODY = 'body';
var FIRST_TAG_REGEX = /<([a-zA-Z]+[0-9]?)/; // e.g., <h1>
var HEAD_TAG_REGEX = /<head.*>/i;
var BODY_TAG_REGEX = /<body.*>/i;

// falls back to `parseFromString` if `createHTMLDocument` cannot be used
var parseFromDocument = function () {
  throw new Error(
    'This browser does not support `document.implementation.createHTMLDocument`'
  );
};

var parseFromString = function () {
  throw new Error(
    'This browser does not support `DOMParser.prototype.parseFromString`'
  );
};

/**
 * DOMParser (performance: slow).
 *
 * @see https://developer.mozilla.org/docs/Web/API/DOMParser#Parsing_an_SVG_or_HTML_document
 */
if (typeof window.DOMParser === 'function') {
  var domParser = new window.DOMParser();
  var mimeType = 'text/html';

  /**
   * Creates an HTML document using `DOMParser.parseFromString`.
   *
   * @param  {string} html      - The HTML string.
   * @param  {string} [tagName] - The element to render the HTML (with 'body' as fallback).
   * @return {HTMLDocument}
   */
  parseFromString = function (html, tagName) {
    if (tagName) {
      html = '<' + tagName + '>' + html + '</' + tagName + '>';
    }

    return domParser.parseFromString(html, mimeType);
  };

  parseFromDocument = parseFromString;
}

/**
 * DOMImplementation (performance: fair).
 *
 * @see https://developer.mozilla.org/docs/Web/API/DOMImplementation/createHTMLDocument
 */
if (document.implementation) {
  var isIE = (__webpack_require__(1507).isIE);

  // title parameter is required in IE
  // https://msdn.microsoft.com/en-us/library/ff975457(v=vs.85).aspx
  var doc = document.implementation.createHTMLDocument(
    isIE() ? 'html-dom-parser' : undefined
  );

  /**
   * Use HTML document created by `document.implementation.createHTMLDocument`.
   *
   * @param  {string} html      - The HTML string.
   * @param  {string} [tagName] - The element to render the HTML (with 'body' as fallback).
   * @return {HTMLDocument}
   */
  parseFromDocument = function (html, tagName) {
    if (tagName) {
      doc.documentElement.getElementsByTagName(tagName)[0].innerHTML = html;
      return doc;
    }

    doc.documentElement.innerHTML = html;
    return doc;
  };
}

/**
 * Template (performance: fast).
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/template
 */
var template = document.createElement('template');
var parseFromTemplate;

if (template.content) {
  /**
   * Uses a template element (content fragment) to parse HTML.
   *
   * @param  {string} html - The HTML string.
   * @return {NodeList}
   */
  parseFromTemplate = function (html) {
    template.innerHTML = html;
    return template.content.childNodes;
  };
}

/**
 * Parses HTML string to DOM nodes.
 *
 * @param  {string}   html - HTML markup.
 * @return {NodeList}
 */
function domparser(html) {
  var firstTagName;
  var match = html.match(FIRST_TAG_REGEX);

  if (match && match[1]) {
    firstTagName = match[1].toLowerCase();
  }

  var doc;
  var element;
  var elements;

  switch (firstTagName) {
    case HTML:
      doc = parseFromString(html);

      // the created document may come with filler head/body elements,
      // so make sure to remove them if they don't actually exist
      if (!HEAD_TAG_REGEX.test(html)) {
        element = doc.getElementsByTagName(HEAD)[0];
        if (element) {
          element.parentNode.removeChild(element);
        }
      }

      if (!BODY_TAG_REGEX.test(html)) {
        element = doc.getElementsByTagName(BODY)[0];
        if (element) {
          element.parentNode.removeChild(element);
        }
      }

      return doc.getElementsByTagName(HTML);

    case HEAD:
    case BODY:
      elements = parseFromDocument(html).getElementsByTagName(firstTagName);

      // if there's a sibling element, then return both elements
      if (BODY_TAG_REGEX.test(html) && HEAD_TAG_REGEX.test(html)) {
        return elements[0].parentNode.childNodes;
      }
      return elements;

    // low-level tag or text
    default:
      if (parseFromTemplate) {
        return parseFromTemplate(html);
      }

      return parseFromDocument(html, BODY).getElementsByTagName(BODY)[0]
        .childNodes;
  }
}

module.exports = domparser;


/***/ }),

/***/ 14152:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var domparser = __webpack_require__(38276);
var formatDOM = (__webpack_require__(1507).formatDOM);

var DIRECTIVE_REGEX = /<(![a-zA-Z\s]+)>/; // e.g., <!doctype html>

/**
 * Parses HTML string to DOM nodes in browser.
 *
 * @param  {string} html  - HTML markup.
 * @return {DomElement[]} - DOM elements.
 */
function HTMLDOMParser(html) {
  if (typeof html !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (html === '') {
    return [];
  }

  // match directive
  var match = html.match(DIRECTIVE_REGEX);
  var directive;

  if (match && match[1]) {
    directive = match[1];
  }

  return formatDOM(domparser(html), null, directive);
}

module.exports = HTMLDOMParser;


/***/ }),

/***/ 1507:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constants = __webpack_require__(60885);
var domhandler = __webpack_require__(97790);

var CASE_SENSITIVE_TAG_NAMES = constants.CASE_SENSITIVE_TAG_NAMES;

var Comment = domhandler.Comment;
var Element = domhandler.Element;
var ProcessingInstruction = domhandler.ProcessingInstruction;
var Text = domhandler.Text;

var caseSensitiveTagNamesMap = {};
var tagName;

for (var i = 0, len = CASE_SENSITIVE_TAG_NAMES.length; i < len; i++) {
  tagName = CASE_SENSITIVE_TAG_NAMES[i];
  caseSensitiveTagNamesMap[tagName.toLowerCase()] = tagName;
}

/**
 * Gets case-sensitive tag name.
 *
 * @param  {string}           tagName - Tag name in lowercase.
 * @return {string|undefined}         - Case-sensitive tag name.
 */
function getCaseSensitiveTagName(tagName) {
  return caseSensitiveTagNamesMap[tagName];
}

/**
 * Formats DOM attributes to a hash map.
 *
 * @param  {NamedNodeMap} attributes - List of attributes.
 * @return {object}                  - Map of attribute name to value.
 */
function formatAttributes(attributes) {
  var result = {};
  var attribute;
  // `NamedNodeMap` is array-like
  for (var i = 0, len = attributes.length; i < len; i++) {
    attribute = attributes[i];
    result[attribute.name] = attribute.value;
  }
  return result;
}

/**
 * Corrects the tag name if it is case-sensitive (SVG).
 * Otherwise, returns the lowercase tag name (HTML).
 *
 * @param  {string} tagName - Lowercase tag name.
 * @return {string}         - Formatted tag name.
 */
function formatTagName(tagName) {
  tagName = tagName.toLowerCase();
  var caseSensitiveTagName = getCaseSensitiveTagName(tagName);
  if (caseSensitiveTagName) {
    return caseSensitiveTagName;
  }
  return tagName;
}

/**
 * Transforms DOM nodes to `domhandler` nodes.
 *
 * @param  {NodeList}     nodes         - DOM nodes.
 * @param  {Element|null} [parent=null] - Parent node.
 * @param  {string}       [directive]   - Directive.
 * @return {Array<Comment|Element|ProcessingInstruction|Text>}
 */
function formatDOM(nodes, parent, directive) {
  parent = parent || null;
  var result = [];

  for (var index = 0, len = nodes.length; index < len; index++) {
    var node = nodes[index];
    var current;

    // set the node data given the type
    switch (node.nodeType) {
      case 1:
        // script, style, or tag
        current = new Element(
          formatTagName(node.nodeName),
          formatAttributes(node.attributes)
        );
        current.children = formatDOM(node.childNodes, current);
        break;

      case 3:
        current = new Text(node.nodeValue);
        break;

      case 8:
        current = new Comment(node.nodeValue);
        break;

      default:
        continue;
    }

    // set previous node next
    var prev = result[index - 1] || null;
    if (prev) {
      prev.next = current;
    }

    // set properties for current node
    current.parent = parent;
    current.prev = prev;
    current.next = null;

    result.push(current);
  }

  if (directive) {
    current = new ProcessingInstruction(
      directive.substring(0, directive.indexOf(' ')).toLowerCase(),
      directive
    );
    current.next = result[0] || null;
    current.parent = parent;
    result.unshift(current);

    if (result[1]) {
      result[1].prev = result[0];
    }
  }

  return result;
}

/**
 * Detects if browser is Internet Explorer.
 *
 * @return {boolean} - Whether IE is detected.
 */
function isIE() {
  return /(MSIE |Trident\/|Edge\/)/.test(navigator.userAgent);
}

module.exports = {
  formatAttributes: formatAttributes,
  formatDOM: formatDOM,
  isIE: isIE
};


/***/ }),

/***/ 30488:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var domToReact = __webpack_require__(53670);
var attributesToProps = __webpack_require__(50484);
var htmlToDOM = __webpack_require__(14152);

// support backwards compatibility for ES Module
htmlToDOM =
  /* istanbul ignore next */
  typeof htmlToDOM.default === 'function' ? htmlToDOM.default : htmlToDOM;

var domParserOptions = { lowerCaseAttributeNames: false };

/**
 * Converts HTML string to React elements.
 *
 * @param {string} html - HTML string.
 * @param {object} [options] - Parser options.
 * @param {object} [options.htmlparser2] - htmlparser2 options.
 * @param {object} [options.library] - Library for React, Preact, etc.
 * @param {Function} [options.replace] - Replace method.
 * @returns {JSX.Element|JSX.Element[]|string} - React element(s), empty array, or string.
 */
function HTMLReactParser(html, options) {
  if (typeof html !== 'string') {
    throw new TypeError('First argument must be a string');
  }
  if (html === '') {
    return [];
  }
  options = options || {};
  return domToReact(
    htmlToDOM(html, options.htmlparser2 || domParserOptions),
    options
  );
}

HTMLReactParser.domToReact = domToReact;
HTMLReactParser.htmlToDOM = htmlToDOM;
HTMLReactParser.attributesToProps = attributesToProps;
HTMLReactParser.Element = (__webpack_require__(47915).Element);

// support CommonJS and ES Modules
module.exports = HTMLReactParser;
module.exports["default"] = HTMLReactParser;


/***/ }),

/***/ 50484:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var reactProperty = __webpack_require__(83);
var utilities = __webpack_require__(74606);

/**
 * Converts HTML/SVG DOM attributes to React props.
 *
 * @param {object} [attributes={}] - HTML/SVG DOM attributes.
 * @returns - React props.
 */
module.exports = function attributesToProps(attributes) {
  attributes = attributes || {};

  var valueOnlyInputs = {
    reset: true,
    submit: true
  };

  var attributeName;
  var attributeNameLowerCased;
  var attributeValue;
  var propName;
  var propertyInfo;
  var props = {};
  var inputIsValueOnly = attributes.type && valueOnlyInputs[attributes.type];

  for (attributeName in attributes) {
    attributeValue = attributes[attributeName];

    // ARIA (aria-*) or custom data (data-*) attribute
    if (reactProperty.isCustomAttribute(attributeName)) {
      props[attributeName] = attributeValue;
      continue;
    }

    // convert HTML/SVG attribute to React prop
    attributeNameLowerCased = attributeName.toLowerCase();
    propName = getPropName(attributeNameLowerCased);

    if (propName) {
      propertyInfo = reactProperty.getPropertyInfo(propName);

      // convert attribute to uncontrolled component prop (e.g., `value` to `defaultValue`)
      // https://reactjs.org/docs/uncontrolled-components.html
      if (
        (propName === 'checked' || propName === 'value') &&
        !inputIsValueOnly
      ) {
        propName = getPropName('default' + attributeNameLowerCased);
      }

      props[propName] = attributeValue;

      switch (propertyInfo && propertyInfo.type) {
        case reactProperty.BOOLEAN:
          props[propName] = true;
          break;
        case reactProperty.OVERLOADED_BOOLEAN:
          if (attributeValue === '') {
            props[propName] = true;
          }
          break;
      }
      continue;
    }

    // preserve custom attribute if React >=16
    if (utilities.PRESERVE_CUSTOM_ATTRIBUTES) {
      props[attributeName] = attributeValue;
    }
  }

  // transform inline style to object
  utilities.setStyleProp(attributes.style, props);

  return props;
};

/**
 * Gets prop name from lowercased attribute name.
 *
 * @param {string} attributeName - Lowercased attribute name.
 * @returns - Prop name.
 */
function getPropName(attributeName) {
  return reactProperty.possibleStandardNames[attributeName];
}


/***/ }),

/***/ 53670:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(67294);
var attributesToProps = __webpack_require__(50484);
var utilities = __webpack_require__(74606);

var setStyleProp = utilities.setStyleProp;
var canTextBeChildOfNode = utilities.canTextBeChildOfNode;

/**
 * Converts DOM nodes to JSX element(s).
 *
 * @param {DomElement[]} nodes - DOM nodes.
 * @param {object} [options={}] - Options.
 * @param {Function} [options.replace] - Replacer.
 * @param {object} [options.library] - Library (React, Preact, etc.).
 * @returns - String or JSX element(s).
 */
function domToReact(nodes, options) {
  options = options || {};

  var library = options.library || React;
  var cloneElement = library.cloneElement;
  var createElement = library.createElement;
  var isValidElement = library.isValidElement;

  var result = [];
  var node;
  var isWhitespace;
  var hasReplace = typeof options.replace === 'function';
  var replaceElement;
  var props;
  var children;
  var trim = options.trim;

  for (var i = 0, len = nodes.length; i < len; i++) {
    node = nodes[i];

    // replace with custom React element (if present)
    if (hasReplace) {
      replaceElement = options.replace(node);

      if (isValidElement(replaceElement)) {
        // set "key" prop for sibling elements
        // https://fb.me/react-warning-keys
        if (len > 1) {
          replaceElement = cloneElement(replaceElement, {
            key: replaceElement.key || i
          });
        }
        result.push(replaceElement);
        continue;
      }
    }

    if (node.type === 'text') {
      isWhitespace = !node.data.trim().length;

      if (isWhitespace && node.parent && !canTextBeChildOfNode(node.parent)) {
        // We have a whitespace node that can't be nested in its parent
        // so skip it
        continue;
      }

      if (trim && isWhitespace) {
        // Trim is enabled and we have a whitespace node
        // so skip it
        continue;
      }

      // We have a text node that's not whitespace and it can be nested
      // in its parent so add it to the results
      result.push(node.data);
      continue;
    }

    props = node.attribs;
    if (skipAttributesToProps(node)) {
      setStyleProp(props.style, props);
    } else if (props) {
      props = attributesToProps(props);
    }

    children = null;

    switch (node.type) {
      case 'script':
      case 'style':
        // prevent text in <script> or <style> from being escaped
        // https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
        if (node.children[0]) {
          props.dangerouslySetInnerHTML = {
            __html: node.children[0].data
          };
        }
        break;

      case 'tag':
        // setting textarea value in children is an antipattern in React
        // https://reactjs.org/docs/forms.html#the-textarea-tag
        if (node.name === 'textarea' && node.children[0]) {
          props.defaultValue = node.children[0].data;
        } else if (node.children && node.children.length) {
          // continue recursion of creating React elements (if applicable)
          children = domToReact(node.children, options);
        }
        break;

      // skip all other cases (e.g., comment)
      default:
        continue;
    }

    // set "key" prop for sibling elements
    // https://fb.me/react-warning-keys
    if (len > 1) {
      props.key = i;
    }

    result.push(createElement(node.name, props, children));
  }

  return result.length === 1 ? result[0] : result;
}

/**
 * Determines whether DOM element attributes should be transformed to props.
 * Web Components should not have their attributes transformed except for `style`.
 *
 * @param {DomElement} node
 * @returns - Whether node attributes should be converted to props.
 */
function skipAttributesToProps(node) {
  return (
    utilities.PRESERVE_CUSTOM_ATTRIBUTES &&
    node.type === 'tag' &&
    utilities.isCustomComponent(node.name, node.attribs)
  );
}

module.exports = domToReact;


/***/ }),

/***/ 74606:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(67294);
var styleToJS = (__webpack_require__(41476)["default"]);

/**
 * Swap key with value in an object.
 *
 * @param {object} obj - The object.
 * @param {Function} [override] - The override method.
 * @returns - The inverted object.
 */
function invertObject(obj, override) {
  if (!obj || typeof obj !== 'object') {
    throw new TypeError('First argument must be an object');
  }

  var key;
  var value;
  var isOverridePresent = typeof override === 'function';
  var overrides = {};
  var result = {};

  for (key in obj) {
    value = obj[key];

    if (isOverridePresent) {
      overrides = override(key, value);
      if (overrides && overrides.length === 2) {
        result[overrides[0]] = overrides[1];
        continue;
      }
    }

    if (typeof value === 'string') {
      result[value] = key;
    }
  }

  return result;
}

/**
 * Check if a given tag is a custom component.
 *
 * @see {@link https://github.com/facebook/react/blob/v16.6.3/packages/react-dom/src/shared/isCustomComponent.js}
 *
 * @param {string} tagName - The name of the html tag.
 * @param {object} props - The props being passed to the element.
 * @returns - Whether tag is custom component.
 */
function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return props && typeof props.is === 'string';
  }

  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this whitelist too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;
    default:
      return true;
  }
}

var styleToJSOptions = { reactCompat: true };

/**
 * Sets style prop.
 *
 * @param {null|undefined|string} style
 * @param {object} props
 */
function setStyleProp(style, props) {
  if (style === null || style === undefined) {
    return;
  }
  try {
    props.style = styleToJS(style, styleToJSOptions);
  } catch (err) {
    props.style = {};
  }
}

/**
 * @constant {boolean}
 * @see {@link https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html}
 */
var PRESERVE_CUSTOM_ATTRIBUTES = React.version.split('.')[0] >= 16;

// Taken from
// https://github.com/facebook/react/blob/cae635054e17a6f107a39d328649137b83f25972/packages/react-dom/src/client/validateDOMNesting.js#L213
var elementsWithNoTextChildren = new Set([
  'tr',
  'tbody',
  'thead',
  'tfoot',
  'colgroup',
  'table',
  'head',
  'html',
  'frameset'
]);

/**
 * Checks if the given node can contain text nodes
 *
 * @param {DomElement} node - Node.
 * @returns - Whether node can contain text nodes.
 */
function canTextBeChildOfNode(node) {
  return !elementsWithNoTextChildren.has(node.name);
}

module.exports = {
  PRESERVE_CUSTOM_ATTRIBUTES: PRESERVE_CUSTOM_ATTRIBUTES,
  invertObject: invertObject,
  isCustomComponent: isCustomComponent,
  setStyleProp: setStyleProp,
  canTextBeChildOfNode: canTextBeChildOfNode,
  elementsWithNoTextChildren: elementsWithNoTextChildren
};


/***/ }),

/***/ 18139:
/***/ ((module) => {

// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/;

// declaration
var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/;

// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
var TRIM_REGEX = /^\s+|\s+$/g;

// strings
var NEWLINE = '\n';
var FORWARD_SLASH = '/';
var ASTERISK = '*';
var EMPTY_STRING = '';

// types
var TYPE_COMMENT = 'comment';
var TYPE_DECLARATION = 'declaration';

/**
 * @param {String} style
 * @param {Object} [options]
 * @return {Object[]}
 * @throws {TypeError}
 * @throws {Error}
 */
module.exports = function(style, options) {
  if (typeof style !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (!style) return [];

  options = options || {};

  /**
   * Positional.
   */
  var lineno = 1;
  var column = 1;

  /**
   * Update lineno and column based on `str`.
   *
   * @param {String} str
   */
  function updatePosition(str) {
    var lines = str.match(NEWLINE_REGEX);
    if (lines) lineno += lines.length;
    var i = str.lastIndexOf(NEWLINE);
    column = ~i ? str.length - i : column + str.length;
  }

  /**
   * Mark position and patch `node.position`.
   *
   * @return {Function}
   */
  function position() {
    var start = { line: lineno, column: column };
    return function(node) {
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }

  /**
   * Store position information for a node.
   *
   * @constructor
   * @property {Object} start
   * @property {Object} end
   * @property {undefined|String} source
   */
  function Position(start) {
    this.start = start;
    this.end = { line: lineno, column: column };
    this.source = options.source;
  }

  /**
   * Non-enumerable source string.
   */
  Position.prototype.content = style;

  var errorsList = [];

  /**
   * Error `msg`.
   *
   * @param {String} msg
   * @throws {Error}
   */
  function error(msg) {
    var err = new Error(
      options.source + ':' + lineno + ':' + column + ': ' + msg
    );
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = style;

    if (options.silent) {
      errorsList.push(err);
    } else {
      throw err;
    }
  }

  /**
   * Match `re` and return captures.
   *
   * @param {RegExp} re
   * @return {undefined|Array}
   */
  function match(re) {
    var m = re.exec(style);
    if (!m) return;
    var str = m[0];
    updatePosition(str);
    style = style.slice(str.length);
    return m;
  }

  /**
   * Parse whitespace.
   */
  function whitespace() {
    match(WHITESPACE_REGEX);
  }

  /**
   * Parse comments.
   *
   * @param {Object[]} [rules]
   * @return {Object[]}
   */
  function comments(rules) {
    var c;
    rules = rules || [];
    while ((c = comment())) {
      if (c !== false) {
        rules.push(c);
      }
    }
    return rules;
  }

  /**
   * Parse comment.
   *
   * @return {Object}
   * @throws {Error}
   */
  function comment() {
    var pos = position();
    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;

    var i = 2;
    while (
      EMPTY_STRING != style.charAt(i) &&
      (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))
    ) {
      ++i;
    }
    i += 2;

    if (EMPTY_STRING === style.charAt(i - 1)) {
      return error('End of comment missing');
    }

    var str = style.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    style = style.slice(i);
    column += 2;

    return pos({
      type: TYPE_COMMENT,
      comment: str
    });
  }

  /**
   * Parse declaration.
   *
   * @return {Object}
   * @throws {Error}
   */
  function declaration() {
    var pos = position();

    // prop
    var prop = match(PROPERTY_REGEX);
    if (!prop) return;
    comment();

    // :
    if (!match(COLON_REGEX)) return error("property missing ':'");

    // val
    var val = match(VALUE_REGEX);

    var ret = pos({
      type: TYPE_DECLARATION,
      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
      value: val
        ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING))
        : EMPTY_STRING
    });

    // ;
    match(SEMICOLON_REGEX);

    return ret;
  }

  /**
   * Parse declarations.
   *
   * @return {Object[]}
   */
  function declarations() {
    var decls = [];

    comments(decls);

    // declarations
    var decl;
    while ((decl = declaration())) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }

    return decls;
  }

  whitespace();
  return declarations();
};

/**
 * Trim `str`.
 *
 * @param {String} str
 * @return {String}
 */
function trim(str) {
  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}


/***/ }),

/***/ 83:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var RESERVED = 0; // A simple string attribute.
// Attributes that aren't in the filter are presumed to have this type.

var STRING = 1; // A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.

var BOOLEANISH_STRING = 2; // A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.

var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.

var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.

var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.

var POSITIVE_NUMERIC = 6;
function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL, removeEmptyString) {
  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
  this.sanitizeURL = sanitizeURL;
  this.removeEmptyString = removeEmptyString;
} // When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.


var properties = {}; // These props are reserved by React. They shouldn't be written to the DOM.

var reservedProps = ['children', 'dangerouslySetInnerHTML', // TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'];
reservedProps.forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.

[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      name = _ref2[0],
      attributeName = _ref2[1];

  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).

['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.

['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML boolean attributes.

['allowFullScreen', 'async', // Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'disableRemotePlayback', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', // Microdata
'itemScope'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.

['checked', // Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple', 'muted', 'selected' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.

['capture', 'download' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be positive numbers.

['cols', 'rows', 'size', 'span' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be numbers.

['rowSpan', 'start'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
});
var CAMELIZE = /[\-\:]([a-z])/g;

var capitalize = function capitalize(token) {
  return token[1].toUpperCase();
}; // This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML attribute filter.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.


['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // String SVG attributes with the xlink namespace.

['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/1999/xlink', false, // sanitizeURL
  false);
}); // String SVG attributes with the xml namespace.

['xml:base', 'xml:lang', 'xml:space' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/XML/1998/namespace', false, // sanitizeURL
  false);
}); // These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.

['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.

var xlinkHref = 'xlinkHref';
properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, // mustUseProperty
'xlink:href', 'http://www.w3.org/1999/xlink', true, // sanitizeURL
false);
['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  true, // sanitizeURL
  true);
});

var _require = __webpack_require__(78229),
    CAMELCASE = _require.CAMELCASE,
    SAME = _require.SAME,
    possibleStandardNamesOptimized = _require.possibleStandardNames;

var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
/**
 * Checks whether a property name is a custom attribute.
 *
 * @see {@link https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/HTMLDOMPropertyConfig.js#L23-L25}
 *
 * @param {string}
 * @return {boolean}
 */

var isCustomAttribute = RegExp.prototype.test.bind( // eslint-disable-next-line no-misleading-character-class
new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));
var possibleStandardNames = Object.keys(possibleStandardNamesOptimized).reduce(function (accumulator, standardName) {
  var propName = possibleStandardNamesOptimized[standardName];

  if (propName === SAME) {
    accumulator[standardName] = standardName;
  } else if (propName === CAMELCASE) {
    accumulator[standardName.toLowerCase()] = standardName;
  } else {
    accumulator[standardName] = propName;
  }

  return accumulator;
}, {});

exports.BOOLEAN = BOOLEAN;
exports.BOOLEANISH_STRING = BOOLEANISH_STRING;
exports.NUMERIC = NUMERIC;
exports.OVERLOADED_BOOLEAN = OVERLOADED_BOOLEAN;
exports.POSITIVE_NUMERIC = POSITIVE_NUMERIC;
exports.RESERVED = RESERVED;
exports.STRING = STRING;
exports.getPropertyInfo = getPropertyInfo;
exports.isCustomAttribute = isCustomAttribute;
exports.possibleStandardNames = possibleStandardNames;


/***/ }),

/***/ 78229:
/***/ ((__unused_webpack_module, exports) => {

// An attribute in which the DOM/SVG standard name is the same as the React prop name (e.g., 'accept').
var SAME = 0;
exports.SAME = SAME;

// An attribute in which the React prop name is the camelcased version of the DOM/SVG standard name (e.g., 'acceptCharset').
var CAMELCASE = 1;
exports.CAMELCASE = CAMELCASE;

exports.possibleStandardNames = {
  accept: 0,
  acceptCharset: 1,
  'accept-charset': 'acceptCharset',
  accessKey: 1,
  action: 0,
  allowFullScreen: 1,
  alt: 0,
  as: 0,
  async: 0,
  autoCapitalize: 1,
  autoComplete: 1,
  autoCorrect: 1,
  autoFocus: 1,
  autoPlay: 1,
  autoSave: 1,
  capture: 0,
  cellPadding: 1,
  cellSpacing: 1,
  challenge: 0,
  charSet: 1,
  checked: 0,
  children: 0,
  cite: 0,
  class: 'className',
  classID: 1,
  className: 1,
  cols: 0,
  colSpan: 1,
  content: 0,
  contentEditable: 1,
  contextMenu: 1,
  controls: 0,
  controlsList: 1,
  coords: 0,
  crossOrigin: 1,
  dangerouslySetInnerHTML: 1,
  data: 0,
  dateTime: 1,
  default: 0,
  defaultChecked: 1,
  defaultValue: 1,
  defer: 0,
  dir: 0,
  disabled: 0,
  disablePictureInPicture: 1,
  disableRemotePlayback: 1,
  download: 0,
  draggable: 0,
  encType: 1,
  enterKeyHint: 1,
  for: 'htmlFor',
  form: 0,
  formMethod: 1,
  formAction: 1,
  formEncType: 1,
  formNoValidate: 1,
  formTarget: 1,
  frameBorder: 1,
  headers: 0,
  height: 0,
  hidden: 0,
  high: 0,
  href: 0,
  hrefLang: 1,
  htmlFor: 1,
  httpEquiv: 1,
  'http-equiv': 'httpEquiv',
  icon: 0,
  id: 0,
  innerHTML: 1,
  inputMode: 1,
  integrity: 0,
  is: 0,
  itemID: 1,
  itemProp: 1,
  itemRef: 1,
  itemScope: 1,
  itemType: 1,
  keyParams: 1,
  keyType: 1,
  kind: 0,
  label: 0,
  lang: 0,
  list: 0,
  loop: 0,
  low: 0,
  manifest: 0,
  marginWidth: 1,
  marginHeight: 1,
  max: 0,
  maxLength: 1,
  media: 0,
  mediaGroup: 1,
  method: 0,
  min: 0,
  minLength: 1,
  multiple: 0,
  muted: 0,
  name: 0,
  noModule: 1,
  nonce: 0,
  noValidate: 1,
  open: 0,
  optimum: 0,
  pattern: 0,
  placeholder: 0,
  playsInline: 1,
  poster: 0,
  preload: 0,
  profile: 0,
  radioGroup: 1,
  readOnly: 1,
  referrerPolicy: 1,
  rel: 0,
  required: 0,
  reversed: 0,
  role: 0,
  rows: 0,
  rowSpan: 1,
  sandbox: 0,
  scope: 0,
  scoped: 0,
  scrolling: 0,
  seamless: 0,
  selected: 0,
  shape: 0,
  size: 0,
  sizes: 0,
  span: 0,
  spellCheck: 1,
  src: 0,
  srcDoc: 1,
  srcLang: 1,
  srcSet: 1,
  start: 0,
  step: 0,
  style: 0,
  summary: 0,
  tabIndex: 1,
  target: 0,
  title: 0,
  type: 0,
  useMap: 1,
  value: 0,
  width: 0,
  wmode: 0,
  wrap: 0,
  about: 0,
  accentHeight: 1,
  'accent-height': 'accentHeight',
  accumulate: 0,
  additive: 0,
  alignmentBaseline: 1,
  'alignment-baseline': 'alignmentBaseline',
  allowReorder: 1,
  alphabetic: 0,
  amplitude: 0,
  arabicForm: 1,
  'arabic-form': 'arabicForm',
  ascent: 0,
  attributeName: 1,
  attributeType: 1,
  autoReverse: 1,
  azimuth: 0,
  baseFrequency: 1,
  baselineShift: 1,
  'baseline-shift': 'baselineShift',
  baseProfile: 1,
  bbox: 0,
  begin: 0,
  bias: 0,
  by: 0,
  calcMode: 1,
  capHeight: 1,
  'cap-height': 'capHeight',
  clip: 0,
  clipPath: 1,
  'clip-path': 'clipPath',
  clipPathUnits: 1,
  clipRule: 1,
  'clip-rule': 'clipRule',
  color: 0,
  colorInterpolation: 1,
  'color-interpolation': 'colorInterpolation',
  colorInterpolationFilters: 1,
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorProfile: 1,
  'color-profile': 'colorProfile',
  colorRendering: 1,
  'color-rendering': 'colorRendering',
  contentScriptType: 1,
  contentStyleType: 1,
  cursor: 0,
  cx: 0,
  cy: 0,
  d: 0,
  datatype: 0,
  decelerate: 0,
  descent: 0,
  diffuseConstant: 1,
  direction: 0,
  display: 0,
  divisor: 0,
  dominantBaseline: 1,
  'dominant-baseline': 'dominantBaseline',
  dur: 0,
  dx: 0,
  dy: 0,
  edgeMode: 1,
  elevation: 0,
  enableBackground: 1,
  'enable-background': 'enableBackground',
  end: 0,
  exponent: 0,
  externalResourcesRequired: 1,
  fill: 0,
  fillOpacity: 1,
  'fill-opacity': 'fillOpacity',
  fillRule: 1,
  'fill-rule': 'fillRule',
  filter: 0,
  filterRes: 1,
  filterUnits: 1,
  floodOpacity: 1,
  'flood-opacity': 'floodOpacity',
  floodColor: 1,
  'flood-color': 'floodColor',
  focusable: 0,
  fontFamily: 1,
  'font-family': 'fontFamily',
  fontSize: 1,
  'font-size': 'fontSize',
  fontSizeAdjust: 1,
  'font-size-adjust': 'fontSizeAdjust',
  fontStretch: 1,
  'font-stretch': 'fontStretch',
  fontStyle: 1,
  'font-style': 'fontStyle',
  fontVariant: 1,
  'font-variant': 'fontVariant',
  fontWeight: 1,
  'font-weight': 'fontWeight',
  format: 0,
  from: 0,
  fx: 0,
  fy: 0,
  g1: 0,
  g2: 0,
  glyphName: 1,
  'glyph-name': 'glyphName',
  glyphOrientationHorizontal: 1,
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphOrientationVertical: 1,
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphRef: 1,
  gradientTransform: 1,
  gradientUnits: 1,
  hanging: 0,
  horizAdvX: 1,
  'horiz-adv-x': 'horizAdvX',
  horizOriginX: 1,
  'horiz-origin-x': 'horizOriginX',
  ideographic: 0,
  imageRendering: 1,
  'image-rendering': 'imageRendering',
  in2: 0,
  in: 0,
  inlist: 0,
  intercept: 0,
  k1: 0,
  k2: 0,
  k3: 0,
  k4: 0,
  k: 0,
  kernelMatrix: 1,
  kernelUnitLength: 1,
  kerning: 0,
  keyPoints: 1,
  keySplines: 1,
  keyTimes: 1,
  lengthAdjust: 1,
  letterSpacing: 1,
  'letter-spacing': 'letterSpacing',
  lightingColor: 1,
  'lighting-color': 'lightingColor',
  limitingConeAngle: 1,
  local: 0,
  markerEnd: 1,
  'marker-end': 'markerEnd',
  markerHeight: 1,
  markerMid: 1,
  'marker-mid': 'markerMid',
  markerStart: 1,
  'marker-start': 'markerStart',
  markerUnits: 1,
  markerWidth: 1,
  mask: 0,
  maskContentUnits: 1,
  maskUnits: 1,
  mathematical: 0,
  mode: 0,
  numOctaves: 1,
  offset: 0,
  opacity: 0,
  operator: 0,
  order: 0,
  orient: 0,
  orientation: 0,
  origin: 0,
  overflow: 0,
  overlinePosition: 1,
  'overline-position': 'overlinePosition',
  overlineThickness: 1,
  'overline-thickness': 'overlineThickness',
  paintOrder: 1,
  'paint-order': 'paintOrder',
  panose1: 0,
  'panose-1': 'panose1',
  pathLength: 1,
  patternContentUnits: 1,
  patternTransform: 1,
  patternUnits: 1,
  pointerEvents: 1,
  'pointer-events': 'pointerEvents',
  points: 0,
  pointsAtX: 1,
  pointsAtY: 1,
  pointsAtZ: 1,
  prefix: 0,
  preserveAlpha: 1,
  preserveAspectRatio: 1,
  primitiveUnits: 1,
  property: 0,
  r: 0,
  radius: 0,
  refX: 1,
  refY: 1,
  renderingIntent: 1,
  'rendering-intent': 'renderingIntent',
  repeatCount: 1,
  repeatDur: 1,
  requiredExtensions: 1,
  requiredFeatures: 1,
  resource: 0,
  restart: 0,
  result: 0,
  results: 0,
  rotate: 0,
  rx: 0,
  ry: 0,
  scale: 0,
  security: 0,
  seed: 0,
  shapeRendering: 1,
  'shape-rendering': 'shapeRendering',
  slope: 0,
  spacing: 0,
  specularConstant: 1,
  specularExponent: 1,
  speed: 0,
  spreadMethod: 1,
  startOffset: 1,
  stdDeviation: 1,
  stemh: 0,
  stemv: 0,
  stitchTiles: 1,
  stopColor: 1,
  'stop-color': 'stopColor',
  stopOpacity: 1,
  'stop-opacity': 'stopOpacity',
  strikethroughPosition: 1,
  'strikethrough-position': 'strikethroughPosition',
  strikethroughThickness: 1,
  'strikethrough-thickness': 'strikethroughThickness',
  string: 0,
  stroke: 0,
  strokeDasharray: 1,
  'stroke-dasharray': 'strokeDasharray',
  strokeDashoffset: 1,
  'stroke-dashoffset': 'strokeDashoffset',
  strokeLinecap: 1,
  'stroke-linecap': 'strokeLinecap',
  strokeLinejoin: 1,
  'stroke-linejoin': 'strokeLinejoin',
  strokeMiterlimit: 1,
  'stroke-miterlimit': 'strokeMiterlimit',
  strokeWidth: 1,
  'stroke-width': 'strokeWidth',
  strokeOpacity: 1,
  'stroke-opacity': 'strokeOpacity',
  suppressContentEditableWarning: 1,
  suppressHydrationWarning: 1,
  surfaceScale: 1,
  systemLanguage: 1,
  tableValues: 1,
  targetX: 1,
  targetY: 1,
  textAnchor: 1,
  'text-anchor': 'textAnchor',
  textDecoration: 1,
  'text-decoration': 'textDecoration',
  textLength: 1,
  textRendering: 1,
  'text-rendering': 'textRendering',
  to: 0,
  transform: 0,
  typeof: 0,
  u1: 0,
  u2: 0,
  underlinePosition: 1,
  'underline-position': 'underlinePosition',
  underlineThickness: 1,
  'underline-thickness': 'underlineThickness',
  unicode: 0,
  unicodeBidi: 1,
  'unicode-bidi': 'unicodeBidi',
  unicodeRange: 1,
  'unicode-range': 'unicodeRange',
  unitsPerEm: 1,
  'units-per-em': 'unitsPerEm',
  unselectable: 0,
  vAlphabetic: 1,
  'v-alphabetic': 'vAlphabetic',
  values: 0,
  vectorEffect: 1,
  'vector-effect': 'vectorEffect',
  version: 0,
  vertAdvY: 1,
  'vert-adv-y': 'vertAdvY',
  vertOriginX: 1,
  'vert-origin-x': 'vertOriginX',
  vertOriginY: 1,
  'vert-origin-y': 'vertOriginY',
  vHanging: 1,
  'v-hanging': 'vHanging',
  vIdeographic: 1,
  'v-ideographic': 'vIdeographic',
  viewBox: 1,
  viewTarget: 1,
  visibility: 0,
  vMathematical: 1,
  'v-mathematical': 'vMathematical',
  vocab: 0,
  widths: 0,
  wordSpacing: 1,
  'word-spacing': 'wordSpacing',
  writingMode: 1,
  'writing-mode': 'writingMode',
  x1: 0,
  x2: 0,
  x: 0,
  xChannelSelector: 1,
  xHeight: 1,
  'x-height': 'xHeight',
  xlinkActuate: 1,
  'xlink:actuate': 'xlinkActuate',
  xlinkArcrole: 1,
  'xlink:arcrole': 'xlinkArcrole',
  xlinkHref: 1,
  'xlink:href': 'xlinkHref',
  xlinkRole: 1,
  'xlink:role': 'xlinkRole',
  xlinkShow: 1,
  'xlink:show': 'xlinkShow',
  xlinkTitle: 1,
  'xlink:title': 'xlinkTitle',
  xlinkType: 1,
  'xlink:type': 'xlinkType',
  xmlBase: 1,
  'xml:base': 'xmlBase',
  xmlLang: 1,
  'xml:lang': 'xmlLang',
  xmlns: 0,
  'xml:space': 'xmlSpace',
  xmlnsXlink: 1,
  'xmlns:xlink': 'xmlnsXlink',
  xmlSpace: 1,
  y1: 0,
  y2: 0,
  y: 0,
  yChannelSelector: 1,
  z: 0,
  zoomAndPan: 1
};


/***/ }),

/***/ 41476:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var style_to_object_1 = __importDefault(__webpack_require__(57848));
var utilities_1 = __webpack_require__(6818);
function StyleToJS(style, options) {
    var output = {};
    if (!style || typeof style !== 'string') {
        return output;
    }
    (0, style_to_object_1["default"])(style, function (property, value) {
        if (property && value) {
            output[(0, utilities_1.camelCase)(property, options)] = value;
        }
    });
    return output;
}
exports["default"] = StyleToJS;


/***/ }),

/***/ 6818:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

exports.__esModule = true;
exports.camelCase = void 0;
var CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9-]+$/;
var HYPHEN_REGEX = /-([a-z])/g;
var NO_HYPHEN_REGEX = /^[^-]+$/;
var VENDOR_PREFIX_REGEX = /^-(webkit|moz|ms|o|khtml)-/;
var MS_VENDOR_PREFIX_REGEX = /^-(ms)-/;
var skipCamelCase = function (property) {
    return !property ||
        NO_HYPHEN_REGEX.test(property) ||
        CUSTOM_PROPERTY_REGEX.test(property);
};
var capitalize = function (match, character) {
    return character.toUpperCase();
};
var trimHyphen = function (match, prefix) { return "".concat(prefix, "-"); };
var camelCase = function (property, options) {
    if (options === void 0) { options = {}; }
    if (skipCamelCase(property)) {
        return property;
    }
    property = property.toLowerCase();
    if (options.reactCompat) {
        property = property.replace(MS_VENDOR_PREFIX_REGEX, trimHyphen);
    }
    else {
        property = property.replace(VENDOR_PREFIX_REGEX, trimHyphen);
    }
    return property.replace(HYPHEN_REGEX, capitalize);
};
exports.camelCase = camelCase;


/***/ }),

/***/ 57848:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parse = __webpack_require__(18139);

/**
 * Parses inline style to object.
 *
 * @example
 * // returns { 'line-height': '42' }
 * StyleToObject('line-height: 42;');
 *
 * @param  {String}      style      - The inline style.
 * @param  {Function}    [iterator] - The iterator function.
 * @return {null|Object}
 */
function StyleToObject(style, iterator) {
  var output = null;
  if (!style || typeof style !== 'string') {
    return output;
  }

  var declaration;
  var declarations = parse(style);
  var hasIterator = typeof iterator === 'function';
  var property;
  var value;

  for (var i = 0, len = declarations.length; i < len; i++) {
    declaration = declarations[i];
    property = declaration.property;
    value = declaration.value;

    if (hasIterator) {
      iterator(property, value, declaration);
    } else if (value) {
      output || (output = {});
      output[property] = value;
    }
  }

  return output;
}

module.exports = StyleToObject;


/***/ }),

/***/ 48734:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ F),
/* harmony export */   y: () => (/* binding */ j)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46449);
/* harmony import */ var _AccordionContext_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13819);
/* harmony import */ var _hooks_useId_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2504);
/* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75515);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11047);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41580);








const v = ({ theme: r, expanded: o, variant: t, disabled: i, error: a }) => a ? `1px solid ${r.colors.danger600} !important` : i ? `1px solid ${r.colors.neutral150}` : o ? `1px solid ${r.colors.primary600}` : t === "primary" ? `1px solid ${r.colors.neutral0}` : `1px solid ${r.colors.neutral100}`, j = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z)``, k = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .x)`
  border: ${v};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({ theme: r }) => r.colors.primary600};

    ${j} {
      color: ${({ theme: r, expanded: o }) => o ? void 0 : r.colors.primary700};
    }

    ${_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z} {
      color: ${({ theme: r, expanded: o }) => o ? void 0 : r.colors.primary600};
    }

    & > ${_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .k} {
      background: ${({ theme: r }) => r.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({ theme: r }) => r.colors.primary200};
    }
  }
`, F = ({ children: r, disabled: o = !1, error: t, expanded: i = !1, hasErrorMessage: a = !0, id: f, onToggle: s, toggle: c, size: e = "M", variant: d = "primary", shadow: $ }) => {
  const l = (0,_hooks_useId_js__WEBPACK_IMPORTED_MODULE_6__/* .useId */ .M)(f), x = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => ({ expanded: i, onToggle: s, toggle: c, id: l, size: e, variant: d, disabled: o }), [o, i, l, s, e, c, d]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_AccordionContext_js__WEBPACK_IMPORTED_MODULE_7__/* .AccordionContext.Provider */ .S.Provider, { value: x, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(k, { "data-strapi-expanded": i, disabled: o, "aria-disabled": o, expanded: i, hasRadius: !0, variant: d, error: t, shadow: $, children: r }), t && a && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .x, { paddingTop: 1, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z, { variant: "pi", textColor: "danger600", children: t }) })] });
};



/***/ }),

/***/ 63081:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _AccordionContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13819);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41580);



const p = ({ children: r, ...n }) => {
  const { expanded: i, id: o } = (0,_AccordionContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useAccordion */ .A)();
  if (!i)
    return null;
  const c = `accordion-content-${o}`, e = `accordion-label-${o}`, t = `accordion-desc-${o}`;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x, { role: "region", id: c, "aria-labelledby": e, "aria-describedby": t, ...n, children: r });
};



/***/ }),

/***/ 13819:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ r),
/* harmony export */   S: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

const t = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  disabled: !1,
  expanded: !1,
  id: "",
  size: "M",
  variant: "primary"
}), r = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(t);



/***/ }),

/***/ 74756:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* binding */ Q)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CarretDown.js
var CarretDown = __webpack_require__(12645);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(46449);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/Accordion.js
var Accordion = __webpack_require__(48734);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionContext.js
var AccordionContext = __webpack_require__(13819);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Accordion/utils.js
const utils_n = ({ expanded: e, disabled: t, variant: a }) => {
  let r = "neutral100";
  return e ? r = "primary100" : t ? r = "neutral150" : a === "primary" && (r = "neutral0"), r;
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextButton/TextButton.js
var TextButton = __webpack_require__(39785);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Icon/Icon.js
var Icon = __webpack_require__(52624);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionToggle.js










const L = (0,styled_components_browser_esm/* default */.ZP)(TextButton/* TextButton */.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14 / 16}rem;
    height: ${14 / 16}rem;

    path {
      fill: ${({ theme: o, expanded: e }) => e ? o.colors.primary600 : o.colors.neutral500};
    }
  }
`, P = (0,styled_components_browser_esm/* default */.ZP)(Flex/* Flex */.k)`
  min-height: ${({ theme: o, size: e }) => o.sizes.accordions[e]};
  border-radius: ${({ theme: o, expanded: e }) => e ? `${o.borderRadius} ${o.borderRadius} 0 0` : o.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({ theme: o }) => o.colors.primary600};
      }
    }
  }
`, Q = ({ title: o, description: e, as: $ = "span", togglePosition: l = "right", action: g, ...w }) => {
  const { onToggle: s, toggle: m, expanded: r, id: c, size: t, variant: C, disabled: n } = (0,AccordionContext/* useAccordion */.A)(), T = `accordion-content-${c}`, h = `accordion-label-${c}`, k = `accordion-desc-${c}`, a = t === "M" ? 6 : 4, u = t === "M" ? a : a - 2, v = utils_n({ expanded: r, disabled: n, variant: C }), j = {
    as: $,
    fontWeight: t === "S" ? "bold" : void 0,
    id: h,
    textColor: r ? "primary600" : "neutral700",
    ellipsis: !0,
    variant: t === "M" ? "delta" : void 0
  }, z = r ? "primary600" : "neutral600", B = r ? "primary200" : "neutral200", f = t === "M" ? `${32 / 16}rem` : `${24 / 16}rem`, x = () => {
    n || (m && !s ? (console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'), m()) : s && s());
  }, b = (0,jsx_runtime.jsx)(Flex/* Flex */.k, { justifyContent: "center", borderRadius: "50%", height: f, width: f, transform: r ? "rotate(180deg)" : void 0, "data-strapi-dropdown": !0, "aria-hidden": !0, as: "span", background: B, cursor: n ? "not-allowed" : "pointer", onClick: x, shrink: 0, children: (0,jsx_runtime.jsx)(Icon/* Icon */.J, { as: CarretDown/* default */.Z, width: t === "M" ? `${11 / 16}rem` : `${8 / 16}rem`, color: r ? "primary600" : "neutral600" }) });
  return (0,jsx_runtime.jsx)(P, { paddingBottom: u, paddingLeft: a, paddingRight: a, paddingTop: u, background: v, expanded: r, size: t, justifyContent: "space-between", cursor: n ? "not-allowed" : "", children: (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { gap: 3, flex: 1, maxWidth: "100%", children: [l === "left" && b, (0,jsx_runtime.jsx)(L, { onClick: x, "aria-disabled": n, "aria-expanded": r, "aria-controls": T, "aria-labelledby": h, "data-strapi-accordion-toggle": !0, expanded: r, type: "button", flex: 1, minWidth: 0, ...w, children: (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)(Accordion/* AccordionTypography */.y, { ...j, children: o }), e && (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { as: "p", id: k, textColor: z, children: e })] }) }), l === "right" && (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { gap: 3, children: [b, g] }), l === "left" && g] }) });
};



/***/ }),

/***/ 2407:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ h),
/* harmony export */   O: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16405);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46449);
/* harmony import */ var _VisuallyHidden_VisuallyHidden_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63237);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11047);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41580);
/* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75515);







const s = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .k)`
  svg {
    height: ${10 / 16}rem;
    width: ${10 / 16}rem;
    path {
      fill: ${({ theme: r }) => r.colors.neutral500};
    }
  }
  :last-of-type ${_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x} {
    display: none;
  }
  :last-of-type ${_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z} {
    color: ${({ theme: r }) => r.colors.neutral800};
    font-weight: ${({ theme: r }) => r.fontWeights.bold};
  }
`, h = ({ children: r }) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(s, { inline: !0, as: "li", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z, { variant: "pi", textColor: "neutral600", children: r }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x, { "aria-hidden": !0, paddingLeft: 3, paddingRight: 3, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}) })] });
h.displayName = "Crumb";
const c = ({ children: r, label: n, ...a }) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .k, { ...a, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_VisuallyHidden_VisuallyHidden_js__WEBPACK_IMPORTED_MODULE_6__/* .VisuallyHidden */ .T, { children: n }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ol", { "aria-hidden": !0, children: r })] });
c.displayName = "Breadcrumbs";



/***/ }),

/***/ 49386:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45697);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46449);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41580);
/* harmony import */ var _Divider_Divider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70004);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11047);
/* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75515);








const c = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x)`
  height: ${24 / 16}rem;
  width: ${24 / 16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10 / 16}rem;
    width: ${10 / 16}rem;
  }

  svg path {
    fill: ${({ theme: r }) => r.colors.primary600};
  }
`, l = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x)`
  border-radius: 0 0 ${({ theme: r }) => r.borderRadius} ${({ theme: r }) => r.borderRadius};
  display: block;
  width: 100%;
  border: none;
`, h = ({ children: r, icon: n, ...p }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Divider_Divider_js__WEBPACK_IMPORTED_MODULE_4__/* .Divider */ .i, {}),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, { as: "button", background: "primary100", padding: 5, ...p, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .k, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, { "aria-hidden": !0, background: "primary200", children: n }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x, { paddingLeft: 3, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_6__/* .Typography */ .Z, { variant: "pi", fontWeight: "bold", textColor: "primary600", children: r }) })
  ] }) })
] });
h.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_7__.string.isRequired,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_7__.node.isRequired
};



/***/ }),

/***/ 67109:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const e = (r) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...r, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "path",
  {
    fill: "#212134",
    d: "M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"
  }
) }), a = e;



/***/ }),

/***/ 37323:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const o = (r) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...r, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "path",
  {
    fill: "#212134",
    d: "M0 10.7c0-.11.09-.2.2-.2h18.06l-8.239-8.239a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L23.86 11.86a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L10.02 22.02a.2.2 0 0 1 0-.282L18.26 13.5H.2a.2.2 0 0 1-.2-.2v-2.6Z"
  }
) }), h = o;



/***/ })

}]);