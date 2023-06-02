"use strict";
(self["webpackChunkecommerce_demo"] = self["webpackChunkecommerce_demo"] || []).push([[1092],{

/***/ 41626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 2575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Settings)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 15 modules
var helper_plugin_esm = __webpack_require__(41647);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.js
var Check = __webpack_require__(85018);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(53979);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(16364);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Alert/Alert.js + 2 modules
var Alert = __webpack_require__(49714);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Select.js
var Select = __webpack_require__(40619);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Option.js
var Option = __webpack_require__(82562);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Link/Link.js
var Link = __webpack_require__(23620);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Switch/Switch.js
var Switch = __webpack_require__(3566);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/components/Configuration/constant.js
const currencies = [
  {
    label: "USD - US Dollar",
    value: "usd"
  },
  {
    label: "ALL - Albania Lek",
    value: "all"
  },
  {
    label: "AED - United Arab Emirates Dirham",
    value: "aed"
  },
  {
    label: "ANG - Netherlands Antillean Guilder",
    value: "ang"
  },
  {
    label: "ARS - Argentine Peso",
    value: "ars"
  },
  {
    label: "AWG - Aruba Guilder",
    value: "awg"
  },
  {
    label: "AUD - Australian Dollar",
    value: "aud"
  },
  {
    label: "BBD - Barbados Dollar",
    value: "bbd"
  },
  {
    label: "BDT - Bangladeshi Taka",
    value: "bdt"
  },
  {
    label: "BGN - Bulgarian Lev",
    value: "bgn"
  },
  {
    label: "BMD - Bermudan Dollar",
    value: "bmd"
  },
  {
    label: "BRL - Brazilian Real",
    value: "brl"
  },
  {
    label: "CAD - Canadian Dollar",
    value: "cad"
  },
  {
    label: "CHF - Swiss Franc",
    value: "chf"
  },
  {
    label: "COP - Colombian Peso",
    value: "cop"
  },
  {
    label: "CNY - Chinese Yuan",
    value: "cny"
  },
  {
    label: "DKK - Danish Krone",
    value: "dkk"
  },
  {
    label: "EGP - Egyptian Pound",
    value: "egp"
  },
  {
    label: "EUR - Euro",
    value: "eur"
  },
  {
    label: "GBP - British Pound",
    value: "gbp"
  },
  {
    label: "HKD - Hong Kong Dollar",
    value: "hkd"
  },
  {
    label: "IDR - Indonesian Rupiah",
    value: "idr"
  },
  {
    label: "INR - Indian Rupee",
    value: "inr"
  },
  {
    label: "JPY - Japanese Yen",
    value: "jpy"
  },
  {
    label: "KRW - South Korean Won",
    value: "krw"
  },
  {
    label: "LKR - Sri Lankan Rupee",
    value: "lkr"
  },
  {
    label: "MXN - Mexican Peso",
    value: "mxn"
  },
  {
    label: "MYR - Malaysian Ringitt",
    value: "myr"
  },
  {
    label: "NGN - Nigerian Naira",
    value: "ngn"
  },
  {
    label: "NOK - Norweign Krone",
    value: "nok"
  },
  {
    label: "NPR - Nepalese Rupee",
    value: "npr"
  },
  {
    label: "NZD - New Zealand Dollar",
    value: "nzd"
  },
  {
    label: "PLN - Poland Zloty",
    value: "pln"
  },
  {
    label: "PHP - Philippine Piso",
    value: "php"
  },
  {
    label: "PKR - Pakistani Rupee",
    value: "pkr"
  },
  {
    label: "QAR - Qatari Rial",
    value: "qar"
  },
  {
    label: "ZAR - South Africa Rand",
    value: "zar"
  },
  {
    label: "SAR - Saudi Riyal",
    value: "sar"
  },
  {
    label: "SGD - Singapore Dollar",
    value: "sgd"
  },
  {
    label: "SEK - Sweden Krona",
    value: "sek"
  },
  {
    label: "RON - Romania New Leu",
    value: "ron"
  },
  {
    label: "THB - Thai Baht",
    value: "thb"
  },
  {
    label: "TWD - Taiwan New Dollar",
    value: "twd"
  },
  {
    label: "TRL - Turkey Lira",
    value: "trl"
  },
  {
    label: "UAH - Ukraine Hryvna",
    value: "uah"
  },
  {
    label: "VND - Viet Nam Dong",
    value: "vnd"
  },
  {
    label: "ZWD - Zimbabwe Dollar",
    value: "zwd"
  }
];
/* harmony default export */ const constant = (currencies);

// EXTERNAL MODULE: ./node_modules/strapi-stripe/admin/src/components/ProductList/constant.js
var ProductList_constant = __webpack_require__(41626);
// EXTERNAL MODULE: ./node_modules/strapi-stripe/admin/src/utils/apiCalls.js + 1 modules
var apiCalls = __webpack_require__(93768);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/components/Configuration/banner.js





const Banner = ({ leftChild, rightChild, leftChildCol, rightChildCol, header, isHeader }) => {
  return /* @__PURE__ */ react.createElement(
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
    isHeader ? /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingBottom: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta" }, header)) : null,
    /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 2 }, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: leftChildCol, s: 12 }, leftChild), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: rightChildCol, s: 12 }, rightChild)))
  );
};
Banner.propTypes = {
  leftChild: (prop_types_default()).any,
  rightChild: (prop_types_default()).any,
  leftChildCol: (prop_types_default()).number.isRequired,
  rightChildCol: (prop_types_default()).number.isRequired,
  header: (prop_types_default()).string,
  isHeader: (prop_types_default()).bool
};
Banner.defaultProps = {
  header: "",
  isHeader: false,
  leftChild: null,
  rightChild: null
};
/* harmony default export */ const banner = (Banner);

// EXTERNAL MODULE: ./node_modules/strapi-stripe/package.json
var strapi_stripe_package = __webpack_require__(68522);
;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/components/Configuration/warningIcon.js

const WarningIcon = () => {
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "50",
      height: "30",
      fill: "#FAD271",
      className: "bi bi-exclamation-triangle-fill",
      viewBox: "0 0 16 16"
    },
    /* @__PURE__ */ react.createElement("path", { d: "M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" })
  ));
};
/* harmony default export */ const warningIcon = (WarningIcon);

;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/components/Configuration/index.js





















const Configuration = () => {
  const [stripeConfiguration, setStripeConfiguration] = (0,react.useState)({
    isLiveMode: false,
    stripeLivePubKey: "",
    stripeLiveSecKey: "",
    stripeTestPubKey: "",
    stripeTestSecKey: "",
    checkoutSuccessUrl: "",
    checkoutCancelUrl: "",
    currency: void 0,
    callbackUrl: "",
    paymentMethods: ["card"],
    allowPromotionCode: false
  });
  const [showAlert, setShowAlert] = (0,react.useState)(false);
  const [isSubmitting, setIsSubmitting] = (0,react.useState)(false);
  const [error, setError] = (0,react.useState)({
    stripeLivePubKey: "",
    stripeLiveSecKey: "",
    stripeTestPubKey: "",
    stripeTestSecKey: "",
    checkoutSuccessUrl: "",
    checkoutCancelUrl: "",
    currency: ""
  });
  const [isNewVersionAvailable, setIsNewVersionAvailable] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    (async () => {
      const response = await (0,apiCalls/* getStripeConfiguration */.A7)();
      if (response.data?.response) {
        const {
          isLiveMode,
          stripeLivePubKey,
          stripeLiveSecKey,
          stripeTestPubKey,
          stripeTestSecKey,
          checkoutSuccessUrl,
          checkoutCancelUrl,
          currency,
          callbackUrl,
          paymentMethods,
          allowPromotionCode
        } = response.data.response;
        setStripeConfiguration({
          ...stripeConfiguration,
          isLiveMode,
          stripeLivePubKey,
          stripeLiveSecKey,
          stripeTestPubKey,
          stripeTestSecKey,
          checkoutSuccessUrl,
          checkoutCancelUrl,
          currency,
          callbackUrl,
          paymentMethods,
          allowPromotionCode
        });
      }
      const data = await (0,apiCalls/* getGithubVersion */.Cq)();
      if (data.tag_name > strapi_stripe_package.version) {
        setIsNewVersionAvailable(true);
      }
    })();
  }, []);
  const handleChangeCurrency = (value) => {
    setStripeConfiguration({ ...stripeConfiguration, currency: value });
    setError({ ...error, currency: "" });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setStripeConfiguration({ ...stripeConfiguration, [name]: value });
    if (name === "stripeLivePubKey") {
      setError({ ...error, stripeLivePubKey: "" });
    } else if (name === "stripeLiveSecKey") {
      setError({ ...error, stripeLiveSecKey: "" });
    } else if (name === "stripeTestPubKey") {
      setError({ ...error, stripeTestPubKey: "" });
    } else if (name === "stripeTestSecKey") {
      setError({ ...error, stripeTestSecKey: "" });
    } else if (name === "checkoutSuccessUrl") {
      setError({ ...error, checkoutSuccessUrl: "" });
    } else if (name === "checkoutCancelUrl") {
      setError({ ...error, checkoutCancelUrl: "" });
    }
  };
  const handleSubmit = async () => {
    setIsSubmitting(true);
    if (!stripeConfiguration.stripeLivePubKey && !stripeConfiguration.stripeLiveSecKey && !stripeConfiguration.stripeTestPubKey && !stripeConfiguration.stripeTestSecKey && !stripeConfiguration.checkoutSuccessUrl && !stripeConfiguration.checkoutCancelUrl && !stripeConfiguration.currency) {
      setError({
        ...error,
        stripeLivePubKey: "Live Stripe Publishable Key is required",
        stripeLiveSecKey: "Live Stripe Secret Key is required",
        stripeTestPubKey: "Test Stripe Publishable Key is required",
        stripeTestSecKey: "Test Stripe Secret Key is required",
        checkoutSuccessUrl: "Checkout Success Page URL is required",
        checkoutCancelUrl: "Checkout Cancel Page URL is required",
        currency: "Currency is required"
      });
      setIsSubmitting(false);
    } else if (!stripeConfiguration.stripeLivePubKey) {
      setError({
        ...error,
        stripeLivePubKey: "Live Stripe Publishable Key is required"
      });
      setIsSubmitting(false);
    } else if (!stripeConfiguration.stripeLiveSecKey) {
      setError({
        ...error,
        stripeLiveSecKey: "Live Stripe Secret Key is required"
      });
      setIsSubmitting(false);
    } else if (!stripeConfiguration.stripeTestPubKey) {
      setError({
        ...error,
        stripeTestPubKey: "Test Stripe Publishable Key is required"
      });
      setIsSubmitting(false);
    } else if (!stripeConfiguration.stripeTestSecKey) {
      setError({
        ...error,
        stripeTestSecKey: "Test Stripe Secret Key is required"
      });
      setIsSubmitting(false);
    } else if (!stripeConfiguration.checkoutSuccessUrl) {
      setError({
        ...error,
        checkoutSuccessUrl: "Checkout Success Page URL is required"
      });
      setIsSubmitting(false);
    } else if (!stripeConfiguration.checkoutCancelUrl) {
      setError({
        ...error,
        checkoutCancelUrl: "Checkout Cancel Page URL is required"
      });
      setIsSubmitting(false);
    } else if (!stripeConfiguration.currency) {
      setError({
        ...error,
        currency: "Currency is required"
      });
      setIsSubmitting(false);
    } else {
      const response = await (0,apiCalls/* saveStripeConfiguration */.HI)(stripeConfiguration);
      if (response.data.ok) {
        setShowAlert(true);
      }
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(helper_plugin_esm/* SettingsPageTitle */.SL, { name: "Stripe" }), /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title: "Stripe Configuration",
      primaryAction: /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          type: "submit",
          loading: isSubmitting,
          onClick: handleSubmit,
          startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null),
          size: "L"
        },
        "Save"
      )
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingBottom: 2 }, showAlert ? /* @__PURE__ */ react.createElement(
    Alert/* Alert */.b,
    {
      closeLabel: "Close alert",
      title: "Stripe configuration",
      variant: "success",
      onClose: () => {
        setShowAlert(false);
      }
    },
    "saved successfully."
  ) : ""), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingBottom: 4 }, /* @__PURE__ */ react.createElement(
    banner,
    {
      leftChild: /* @__PURE__ */ react.createElement(
        "img",
        {
          src: "https://higheredlab.com/wp-content/uploads/hel_icon.png",
          alt: "hel-logo",
          height: 35,
          width: 40
        }
      ),
      rightChild: /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "omega" }, "Facing technical issues?", " ", /* @__PURE__ */ react.createElement(
        "a",
        {
          href: "https://github.com/manishkatyan/strapi-stripe/issues",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        "Raise an issue on Github"
      ), "\xA0or email at ", ProductList_constant/* supportEmail.email */.sJ.email),
      leftChildCol: 2,
      rightChildCol: 10
    }
  )), /* @__PURE__ */ react.createElement(
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
    /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta" }, "Credentials")),
    /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingBottom: 2, paddingTop: 1 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "omega" }, "Configure your stripe publishable and secret Key.")),
    /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 2 }, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 12, s: 12 }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 3 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "center" }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingRight: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta" }, "Live Mode")), /* @__PURE__ */ react.createElement(
      Switch/* Switch */.r,
      {
        label: "Live Mode",
        visibleLabels: true,
        offLabel: "Stripe is in test mode",
        onLabel: "Stripe is ready to accept payment",
        selected: stripeConfiguration.isLiveMode,
        onChange: () => {
          setStripeConfiguration({
            ...stripeConfiguration,
            isLiveMode: !stripeConfiguration.isLiveMode
          });
        }
      }
    )))), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 2, paddingBottom: 3 }, /* @__PURE__ */ react.createElement(
      TextInput/* TextInput */.o,
      {
        name: "stripeLivePubKey",
        label: "Live Stripe Publishable Key",
        placeholder: "Live Stripe Publishable Key",
        required: true,
        value: stripeConfiguration.stripeLivePubKey,
        error: error.stripeLivePubKey ? error.stripeLivePubKey : "",
        onChange: handleChange
      }
    ))), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 2, paddingBottom: 3 }, /* @__PURE__ */ react.createElement(
      TextInput/* TextInput */.o,
      {
        name: "stripeLiveSecKey",
        placeholder: "Live Stripe Secret Key",
        label: "Live Stripe Secret Key",
        required: true,
        value: stripeConfiguration.stripeLiveSecKey,
        error: error.stripeLiveSecKey ? error.stripeLiveSecKey : "",
        onChange: handleChange
      }
    ))), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingBottom: 2 }, /* @__PURE__ */ react.createElement(
      TextInput/* TextInput */.o,
      {
        name: "stripeTestPubKey",
        placeholder: "Test Stripe Publishable Key",
        label: "Test Stripe Publishable Key",
        required: true,
        value: stripeConfiguration.stripeTestPubKey,
        error: error.stripeTestPubKey ? error.stripeTestPubKey : "",
        onChange: handleChange
      }
    ))), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingBottom: 2 }, /* @__PURE__ */ react.createElement(
      TextInput/* TextInput */.o,
      {
        name: "stripeTestSecKey",
        placeholder: "Test Stripe Secret Key",
        label: "Test Stripe Secret Key",
        required: true,
        value: stripeConfiguration.stripeTestSecKey,
        error: error.stripeTestSecKey ? error.stripeTestSecKey : "",
        onChange: handleChange
      }
    )))))
  ), /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement(
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
    /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingBottom: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta" }, "Global Setting")),
    /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 2 }, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 2, paddingBottom: 2 }, /* @__PURE__ */ react.createElement(
      TextInput/* TextInput */.o,
      {
        name: "checkoutSuccessUrl",
        label: "Payment Success Page URL",
        required: true,
        value: stripeConfiguration.checkoutSuccessUrl,
        error: error.checkoutSuccessUrl ? error.checkoutSuccessUrl : "",
        onChange: handleChange,
        hint: "Redirects to the success page after the  payment successful"
      }
    ))), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 2, paddingBottom: 2 }, /* @__PURE__ */ react.createElement(
      TextInput/* TextInput */.o,
      {
        name: "checkoutCancelUrl",
        label: "Payment Cancel Page URL",
        required: true,
        value: stripeConfiguration.checkoutCancelUrl,
        error: error.checkoutCancelUrl ? error.checkoutCancelUrl : "",
        onChange: handleChange,
        hint: "Redirects to the cancel page after the  payment failed"
      }
    ))), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingBottom: 2 }, /* @__PURE__ */ react.createElement(
      Select/* Select */.P,
      {
        id: "select1",
        label: "Choose Currency",
        required: true,
        placeholder: "Choose Currency",
        clearLabel: "Clear the Currency",
        error: error.currency ? error.currency : "",
        onClear: () => setStripeConfiguration({
          ...stripeConfiguration,
          currency: void 0
        }),
        onChange: (value) => handleChangeCurrency(value),
        value: stripeConfiguration.currency
      },
      constant && constant.map((currency, idx) => /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: currency.value, key: idx }, currency.label))
    ))), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingBottom: 2 }, /* @__PURE__ */ react.createElement(
      TextInput/* TextInput */.o,
      {
        name: "callbackUrl",
        label: "Webhook URL",
        value: stripeConfiguration.callbackUrl,
        onChange: handleChange,
        hint: "The response from Stripe will be posted to this URL."
      }
    ))), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
      Select/* Select */.P,
      {
        id: "paymentMethod",
        label: "Choose Payment Methods",
        onClear: () => setStripeConfiguration({ ...stripeConfiguration, paymentMethods: [] }),
        value: stripeConfiguration.paymentMethods ? stripeConfiguration.paymentMethods : [],
        onChange: (values) => setStripeConfiguration({ ...stripeConfiguration, paymentMethods: values }),
        multi: true,
        withTags: true
      },
      /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "card" }, "Credit Card/Debit Card"),
      /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "sepa_debit" }, " SEPA Direct Debit"),
      /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "us_bank_account" }, "ACH Direct Debit"),
      /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "alipay" }, "Alipay"),
      /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "klarna" }, "Klarna"),
      /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "ideal" }, "iDEAL"),
      /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "sofort" }, "SOFORT")
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 6 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "center" }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingRight: 4 }, /* @__PURE__ */ react.createElement(
      Typography/* Typography */.Z,
      {
        style: { textTransform: "capitalize", fontSize: "0.8rem" },
        fontWeight: "bold"
      },
      "Promotion Code"
    )), /* @__PURE__ */ react.createElement(
      Switch/* Switch */.r,
      {
        label: "Allow Promotion Code",
        visibleLabels: true,
        offLabel: "OFF",
        onLabel: "ON",
        selected: stripeConfiguration.allowPromotionCode,
        onChange: () => {
          setStripeConfiguration({
            ...stripeConfiguration,
            allowPromotionCode: !stripeConfiguration.allowPromotionCode
          });
        }
      }
    ))))))
  ), /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement(
    banner,
    {
      leftChild: /* @__PURE__ */ react.createElement(
        Link/* Link */.r,
        {
          href: "https://support.stripe.com/questions/set-up-account-email-notifications",
          isExternal: true
        },
        "Setup seller notification"
      ),
      rightChild: /* @__PURE__ */ react.createElement(Link/* Link */.r, { href: " https://stripe.com/docs/receipts", isExternal: true }, "Setup buyer notification"),
      rightChildCol: 6,
      leftChildCol: 6,
      header: "Email Settings",
      isHeader: true
    }
  ), /* @__PURE__ */ react.createElement("br", null), isNewVersionAvailable ? /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    banner,
    {
      leftChild: /* @__PURE__ */ react.createElement(warningIcon, null),
      rightChild: /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "omega" }, " ", "A new version is available", " ", /* @__PURE__ */ react.createElement(
        "a",
        {
          href: "https://www.npmjs.com/package/strapi-stripe",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        "click here"
      ), " ", "to know more.", " "),
      leftChildCol: 2,
      rightChildCol: 10
    }
  ), /* @__PURE__ */ react.createElement("br", null)) : null, /* @__PURE__ */ react.createElement(
    banner,
    {
      leftChild: /* @__PURE__ */ react.createElement(
        "img",
        {
          src: "https://res.cloudinary.com/dvotpztje/image/upload/v1671441868/paypal-logo_tifrf5.webp",
          alt: "paypal",
          height: 25,
          width: 80
        }
      ),
      rightChild: /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "omega" }, "Want to use Paypal?", " ", /* @__PURE__ */ react.createElement(
        "a",
        {
          href: "https://market.strapi.io/plugins/strapi-paypal",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        "Download our free plugin"
      ), "."),
      leftChildCol: 2,
      rightChildCol: 10
    }
  )));
};
/* harmony default export */ const components_Configuration = (Configuration);

;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/pages/Settings/index.js


const Settings = () => {
  return /* @__PURE__ */ react.createElement(components_Configuration, null);
};
/* harmony default export */ const pages_Settings = (Settings);


/***/ }),

/***/ 93768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ 49066:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41580);




const e = ({ children: o }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x, { paddingLeft: 10, paddingRight: 10, children: o });
e.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3__.node.isRequired
};



/***/ }),

/***/ 53979:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: () => (/* binding */ h)
});

// UNUSED EXPORTS: BaseHeaderLayout

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(46449);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/useElementOnScreen.js

const b = (t) => {
  const e = (0,react.useRef)(null), [s, c] = (0,react.useState)(!0), i = ([n]) => {
    c(n.isIntersecting);
  };
  return (0,react.useEffect)(() => {
    const n = e.current, r = new IntersectionObserver(i, t);
    return n && r.observe(e.current), () => {
      n && r.disconnect();
    };
  }, [e, t]), [e, s];
};


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var dist = __webpack_require__(79698);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/useResizeObserver.js


const c = (e, i) => {
  const t = (0,dist/* useCallbackRef */.W)(i);
  (0,react.useLayoutEffect)(() => {
    const r = new ResizeObserver(t);
    return Array.isArray(e) ? e.forEach((n) => {
      n.current && r.observe(n.current);
    }) : e.current && r.observe(e.current), () => {
      r.disconnect();
    };
  }, [e, t]);
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js









const H = () => {
  const e = (0,react.useRef)(null), [o, n] = (0,react.useState)(null), [r, a] = b({
    root: null,
    rootMargin: "0px",
    threshold: 0
  });
  return c(r, () => {
    r.current && n(r.current.getBoundingClientRect());
  }), (0,react.useEffect)(() => {
    e.current && n(e.current.getBoundingClientRect());
  }, [e]), {
    containerRef: r,
    isVisible: a,
    baseHeaderLayoutRef: e,
    headerSize: o
  };
}, h = (e) => {
  const { containerRef: o, isVisible: n, baseHeaderLayoutRef: r, headerSize: a } = H();
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { style: { height: a?.height }, ref: o, children: n && /* @__PURE__ */ (0,jsx_runtime.jsx)(HeaderLayout_c, { ref: r, ...e }) }),
    !n && /* @__PURE__ */ (0,jsx_runtime.jsx)(HeaderLayout_c, { ...e, sticky: !0, width: a?.width })
  ] });
};
h.displayName = "HeaderLayout";
const T = (0,styled_components_browser_esm/* default */.ZP)(Box/* Box */.x)`
  width: ${(e) => e.width}px;
  z-index: ${({ theme: e }) => e.zIndices[1]};
`, HeaderLayout_c = react.forwardRef(
  ({ navigationAction: e, primaryAction: o, secondaryAction: n, subtitle: r, title: a, sticky: g, width: m, ...u }, y) => {
    const f = typeof r == "string";
    return g ? /* @__PURE__ */ (0,jsx_runtime.jsx)(
      T,
      {
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 3,
        paddingBottom: 3,
        position: "fixed",
        top: 0,
        right: 0,
        background: "neutral0",
        shadow: "tableShadow",
        width: m,
        "data-strapi-header-sticky": !0,
        children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { justifyContent: "space-between", children: [
          /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { children: [
            e && /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingRight: 3, children: e }),
            /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* Box */.x, { children: [
              /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "beta", as: "h1", ...u, children: a }),
              f ? /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600", children: r }) : r
            ] }),
            n ? /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 4, children: n }) : null
          ] }),
          /* @__PURE__ */ (0,jsx_runtime.jsx)(Flex/* Flex */.k, { children: o ? /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 2, children: o }) : void 0 })
        ] })
      }
    ) : /* @__PURE__ */ (0,jsx_runtime.jsxs)(
      Box/* Box */.x,
      {
        ref: y,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 8,
        paddingTop: e ? 6 : 8,
        background: "neutral100",
        "data-strapi-header": !0,
        children: [
          e ? /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingBottom: 2, children: e }) : null,
          /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { justifyContent: "space-between", children: [
            /* @__PURE__ */ (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { minWidth: 0, children: [
              /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { as: "h1", variant: "alpha", ...u, children: a }),
              n ? /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 4, children: n }) : null
            ] }),
            o
          ] }),
          f ? /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "epsilon", textColor: "neutral600", as: "p", children: r }) : r
        ]
      }
    );
  }
);
HeaderLayout_c.displayName = "BaseHeaderLayout";
HeaderLayout_c.defaultProps = {
  navigationAction: void 0,
  primaryAction: void 0,
  secondaryAction: void 0,
  subtitle: void 0,
  sticky: !1,
  width: void 0
};
HeaderLayout_c.propTypes = {
  navigationAction: prop_types.node,
  primaryAction: prop_types.node,
  secondaryAction: prop_types.node,
  sticky: prop_types.bool,
  // TODO V2: Remove the string fallback
  subtitle: prop_types.oneOfType([prop_types.string, prop_types.node]),
  title: prop_types.string.isRequired,
  width: prop_types.number
};
h.defaultProps = {
  navigationAction: void 0,
  primaryAction: void 0,
  secondaryAction: void 0,
  subtitle: void 0
};
h.propTypes = {
  navigationAction: prop_types.node,
  primaryAction: prop_types.node,
  secondaryAction: prop_types.node,
  // TODO V2: Remove the string fallback
  subtitle: prop_types.oneOfType([prop_types.string, prop_types.node]),
  title: prop_types.string.isRequired
};



/***/ }),

/***/ 185:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46449);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41580);



const a = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`, m = ({ labelledBy: o = "main-content-title", ...n }) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, { "aria-labelledby": o, as: "main", id: "main-content", tabIndex: -1, ...n });



/***/ }),

/***/ 3566:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ x)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46449);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11047);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41580);





const t = styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"].div */ .ZP.div`
  background: ${({ theme: r }) => r.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24 / 16}rem;
  width: ${40 / 16}rem;

  & span {
    font-size: ${({ visibleLabels: r }) => r ? "1rem" : 0};
  }

  &:before {
    content: '';
    background: ${({ theme: r }) => r.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({ theme: r }) => r.spaces[1]};
    top: ${({ theme: r }) => r.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`, f = styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"].button */ .ZP.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${t} {
    background: ${({ theme: r }) => r.colors.success500};
  }

  &[aria-checked='true'] ${t}:before {
    transform: translateX(1rem);
  }
`, x = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ label: r, onChange: d, onLabel: n = "On", offLabel: i = "Off", selected: o, visibleLabels: a = !1, ...l }, p) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(f, { ref: p, role: "switch", "aria-checked": o, "aria-label": r, onClick: d, visibleLabels: a, type: "button", ...l, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .k, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: n }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: i })] }), a && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .x, { as: "span", "aria-hidden": !0, paddingLeft: 2, color: o ? "success600" : "danger600", children: o ? n : i })] }) }));



/***/ })

}]);