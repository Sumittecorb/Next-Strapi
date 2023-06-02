"use strict";
(self["webpackChunkecommerce_demo"] = self["webpackChunkecommerce_demo"] || []).push([[9514],{

/***/ 87532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App_ConfigureTheView)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(18446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.js
var Layout = __webpack_require__(17034);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(53979);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 15 modules
var helper_plugin_esm = __webpack_require__(41647);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.js
var ArrowLeft = __webpack_require__(67109);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.js
var Check = __webpack_require__(85018);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Select.js
var Select = __webpack_require__(40619);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Option.js
var Option = __webpack_require__(82562);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/utils/getTrad.js
var getTrad = __webpack_require__(15537);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/constants.js
var constants = __webpack_require__(49826);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/ConfigureTheView/components/Settings.js






const Settings = ({ sort = "", pageSize = 10, onChange }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(
    Box/* Box */.x,
    {
      background: "neutral0",
      hasRadius: true,
      shadow: "tableShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7
    },
    /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { s: 12, col: 6 }, /* @__PURE__ */ react.createElement(
      Select/* Select */.P,
      {
        label: formatMessage({
          id: (0,getTrad/* default */.Z)("config.entries.title"),
          defaultMessage: "Entries per page"
        }),
        hint: formatMessage({
          id: (0,getTrad/* default */.Z)("config.entries.note"),
          defaultMessage: "Number of assets displayed by default in the Media Library"
        }),
        onChange: (value) => onChange({ target: { name: "pageSize", value } }),
        name: "pageSize",
        value: pageSize
      },
      constants/* pageSizes.map */.ay.map((pageSize2) => /* @__PURE__ */ react.createElement(Option/* Option */.W, { key: pageSize2, value: pageSize2 }, pageSize2))
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { s: 12, col: 6 }, /* @__PURE__ */ react.createElement(
      Select/* Select */.P,
      {
        label: formatMessage({
          id: (0,getTrad/* default */.Z)("config.sort.title"),
          defaultMessage: "Default sort order"
        }),
        hint: formatMessage({
          id: (0,getTrad/* default */.Z)("config.note"),
          defaultMessage: "Note: You can override this value in the media library."
        }),
        onChange: (value) => onChange({ target: { name: "sort", value } }),
        name: "sort",
        value: sort,
        "test-sort": sort,
        "data-testid": "sort-select"
      },
      constants/* sortOptions.map */.Fo.map((filter) => /* @__PURE__ */ react.createElement(
        Option/* Option */.W,
        {
          "data-testid": `sort-option-${filter.value}`,
          key: filter.key,
          value: filter.value
        },
        formatMessage({ id: (0,getTrad/* default */.Z)(filter.key), defaultMessage: `${filter.value}` })
      ))
    )))
  );
};
Settings.propTypes = {
  sort: (prop_types_default()).string.isRequired,
  pageSize: (prop_types_default()).number.isRequired,
  onChange: (prop_types_default()).func.isRequired
};


// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(18172);
// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(36968);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pluginId.js
var pluginId = __webpack_require__(55994);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/ConfigureTheView/state/actionTypes.js

const ON_CHANGE = `${pluginId/* default */.Z}/ON_CHANGE`;
const SET_LOADED = `${pluginId/* default */.Z}/SET_LOADED`;

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/ConfigureTheView/state/init.js
const initialState = {
  initialData: {},
  modifiedData: {}
};
const init = (configData) => {
  return {
    ...initialState,
    initialData: configData,
    modifiedData: configData
  };
};


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/ConfigureTheView/state/reducer.js





const reducer = (state = initialState, action) => (
  // eslint-disable-next-line consistent-return
  (0,immer_esm/* default */.ZP)(state, (draftState) => {
    switch (action.type) {
      case ON_CHANGE: {
        set_default()(draftState, ["modifiedData", ...action.keys.split(".")], action.value);
        break;
      }
      case SET_LOADED: {
        const reInitialise = init(get_default()(draftState, ["modifiedData"], {}));
        draftState.initialData = reInitialise.initialData;
        draftState.modifiedData = reInitialise.modifiedData;
        break;
      }
      default:
        return draftState;
    }
  })
);
/* harmony default export */ const state_reducer = (reducer);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/ConfigureTheView/state/actions.js

const onChange = ({ name, value }) => ({
  type: ON_CHANGE,
  keys: name,
  value
});
const setLoaded = () => ({
  type: SET_LOADED
});

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useConfig.js
var useConfig = __webpack_require__(60862);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/ConfigureTheView/index.js














const ConfigureTheView = ({ config }) => {
  const { trackUsage } = (0,helper_plugin_esm/* useTracking */.rS)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.lm)();
  const { mutateConfig } = (0,useConfig/* useConfig */.Z)();
  const { isLoading: isSubmittingForm } = mutateConfig;
  const [showWarningSubmit, setWarningSubmit] = (0,react.useState)(false);
  const toggleWarningSubmit = () => setWarningSubmit((prevState) => !prevState);
  const [reducerState, dispatch] = (0,react.useReducer)(state_reducer, initialState, () => init(config));
  const { initialData, modifiedData } = reducerState;
  const handleSubmit = (e) => {
    e.preventDefault();
    toggleWarningSubmit();
  };
  const handleConfirm = async () => {
    trackUsage("willEditMediaLibraryConfig");
    await mutateConfig.mutateAsync(modifiedData);
    toggleWarningSubmit();
    dispatch(setLoaded());
    toggleNotification({
      type: "success",
      message: {
        id: "notification.form.success.fields",
        defaultMessage: "Changes saved"
      }
    });
  };
  const handleChange = ({ target: { name, value } }) => {
    dispatch(onChange({ name, value }));
  };
  (0,helper_plugin_esm/* useFocusWhenNavigate */.go)();
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": isSubmittingForm }, /* @__PURE__ */ react.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      navigationAction: /* @__PURE__ */ react.createElement(helper_plugin_esm/* Link */.rU, { startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null), to: `/plugins/${pluginId/* default */.Z}`, id: "go-back" }, formatMessage({ id: (0,getTrad/* default */.Z)("config.back"), defaultMessage: "Back" })),
      primaryAction: /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          size: "S",
          startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null),
          disabled: isEqual_default()(modifiedData, initialData),
          type: "submit"
        },
        formatMessage({ id: "global.save", defaultMessage: "Save" })
      ),
      subtitle: formatMessage({
        id: (0,getTrad/* default */.Z)("config.subtitle"),
        defaultMessage: "Define the view settings of the media library."
      }),
      title: formatMessage({
        id: (0,getTrad/* default */.Z)("config.title"),
        defaultMessage: "Configure the view - Media Library"
      })
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(
    Settings,
    {
      "data-testid": "settings",
      pageSize: modifiedData.pageSize || "",
      sort: modifiedData.sort || "",
      onChange: handleChange
    }
  )), /* @__PURE__ */ react.createElement(
    helper_plugin_esm/* ConfirmDialog */.QH,
    {
      bodyText: {
        id: (0,getTrad/* default */.Z)("config.popUpWarning.warning.updateAllSettings"),
        defaultMessage: "This will modify all your settings"
      },
      iconRightButton: /* @__PURE__ */ react.createElement(Check/* default */.Z, null),
      isConfirmButtonLoading: isSubmittingForm,
      isOpen: showWarningSubmit,
      onToggleDialog: toggleWarningSubmit,
      onConfirm: handleConfirm,
      variantRightButton: "success-light"
    }
  ))));
};
ConfigureTheView.propTypes = {
  config: prop_types_default().shape({
    pageSize: (prop_types_default()).number,
    sort: (prop_types_default()).string
  }).isRequired
};
/* harmony default export */ const App_ConfigureTheView = (ConfigureTheView);


/***/ })

}]);