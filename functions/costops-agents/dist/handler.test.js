"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// dist/index.js
var require_dist = __commonJS({
  "dist/index.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM2 = (mod2, isNodeMode, target) => (target = mod2 != null ? __create2(__getProtoOf2(mod2)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod2 || !mod2.__esModule ? __defProp2(target, "default", { value: mod2, enumerable: true }) : target,
      mod2
    ));
    var __toCommonJS = (mod2) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod2);
    var src_exports = {};
    __export(src_exports, {
      AgentHealthSchema: () => AgentHealthSchema,
      BudgetAlertSchema: () => BudgetAlertSchema,
      BudgetDecisionEventSchema: () => BudgetDecisionEventSchema,
      BudgetEnforcementInputSchema: () => BudgetEnforcementInputSchema,
      BudgetEnforcementOutputSchema: () => BudgetEnforcementOutputSchema,
      BudgetErrorCodeSchema: () => BudgetErrorCodeSchema,
      BudgetErrorSchema: () => BudgetErrorSchema,
      BudgetSchema: () => BudgetSchema,
      BudgetScopeSchema: () => BudgetScopeSchema,
      BudgetScopeTypeSchema: () => BudgetScopeTypeSchema,
      CONTRACT_VERSION: () => CONTRACT_VERSION,
      ConstraintResultSchema: () => ConstraintResultSchema,
      ConstraintsEvaluationSchema: () => ConstraintsEvaluationSchema,
      CostForecastInputSchema: () => CostForecastInputSchema,
      CostForecastOutputSchema: () => CostForecastOutputSchema,
      DailySpendSchema: () => DailySpendSchema,
      ExecutionMetadataSchema: () => ExecutionMetadataSchema,
      ForecastConstraintsSchema: () => ForecastConstraintsSchema,
      ForecastDecisionEventSchema: () => ForecastDecisionEventSchema,
      ForecastErrorCodeSchema: () => ForecastErrorCodeSchema,
      ForecastErrorSchema: () => ForecastErrorSchema,
      ForecastGranularitySchema: () => ForecastGranularitySchema,
      ForecastMetadataSchema: () => ForecastMetadataSchema,
      ForecastProjectionSchema: () => ForecastProjectionSchema,
      GrowthPatternSchema: () => GrowthPatternSchema,
      HealthResponseSchema: () => HealthResponseSchema,
      HistoricalDataPointSchema: () => HistoricalDataPointSchema,
      HistoricalSummarySchema: () => HistoricalSummarySchema,
      LayerExecutedSchema: () => LayerExecutedSchema,
      LayerStatusSchema: () => LayerStatusSchema,
      RecommendedActionSchema: () => RecommendedActionSchema,
      RiskIndicatorSchema: () => RiskIndicatorSchema,
      RiskLevelSchema: () => RiskLevelSchema,
      SeveritySchema: () => SeveritySchema,
      SignalTypeSchema: () => SignalTypeSchema,
      SpendDataSchema: () => SpendDataSchema,
      ViolationTypeSchema: () => ViolationTypeSchema,
      WrappedResponseSchema: () => WrappedResponseSchema,
      handler: () => handler22
    });
    module2.exports = __toCommonJS(src_exports);
    var import_functions_framework = require("@google-cloud/functions-framework");
    var import_crypto6 = require("crypto");
    var import_crypto = require("crypto");
    var DEFAULT_PRICING = {
      openai: {
        "gpt-4": { input: 30, output: 60 },
        "gpt-4-turbo": { input: 10, output: 30 },
        "gpt-3.5-turbo": { input: 0.5, output: 1.5 },
        "gpt-4o": { input: 5, output: 15 },
        "gpt-4o-mini": { input: 0.15, output: 0.6 }
      },
      anthropic: {
        "claude-opus-4": { input: 15, output: 75, cached: 1.5 },
        "claude-sonnet-4": { input: 3, output: 15, cached: 0.3 },
        "claude-haiku-4": { input: 0.8, output: 4, cached: 0.08 },
        "claude-3-opus": { input: 15, output: 75, cached: 1.5 },
        "claude-3-sonnet": { input: 3, output: 15, cached: 0.3 },
        "claude-3-haiku": { input: 0.25, output: 1.25, cached: 0.025 }
      },
      google: {
        "gemini-pro": { input: 0.5, output: 1.5 },
        "gemini-ultra": { input: 10, output: 30 },
        "gemini-flash": { input: 0.075, output: 0.3 }
      }
    };
    var CostCalculator = class {
      /**
       * Calculate cost breakdown for given usage
       */
      calculate(usage, pricingContext) {
        const currency = pricingContext?.currency || "USD";
        const pricing = this.getPricing(usage, pricingContext);
        const inputPricePerToken = pricing.input / 1e6;
        const outputPricePerToken = pricing.output / 1e6;
        const cachedPricePerToken = pricing.cached ? pricing.cached / 1e6 : 0;
        const inputCost = usage.inputTokens * inputPricePerToken;
        const outputCost = usage.outputTokens * outputPricePerToken;
        const cachedCost = usage.cachedTokens ? usage.cachedTokens * cachedPricePerToken : 0;
        const totalCost = inputCost + outputCost + cachedCost;
        const totalTokens = usage.inputTokens + usage.outputTokens + (usage.cachedTokens || 0);
        const costPer1kTokens = totalTokens > 0 ? totalCost / totalTokens * 1e3 : 0;
        return {
          totalCost: this.round(totalCost),
          inputCost: this.round(inputCost),
          outputCost: this.round(outputCost),
          cachedCost: cachedCost > 0 ? this.round(cachedCost) : void 0,
          currency,
          costPer1kTokens: this.round(costPer1kTokens)
        };
      }
      /**
       * Get pricing for provider/model combination
       */
      getPricing(usage, pricingContext) {
        if (pricingContext?.customPricing) {
          const custom5 = pricingContext.customPricing;
          return {
            input: custom5.inputPricePerToken ? custom5.inputPricePerToken * 1e6 : 0,
            output: custom5.outputPricePerToken ? custom5.outputPricePerToken * 1e6 : 0,
            cached: custom5.cachedPricePerToken ? custom5.cachedPricePerToken * 1e6 : void 0
          };
        }
        const provider = usage.provider.toLowerCase();
        const model = usage.model.toLowerCase();
        const providerPricing = DEFAULT_PRICING[provider];
        if (!providerPricing) {
          throw new Error(`Unknown provider: ${usage.provider}`);
        }
        let modelPricing = providerPricing[model];
        if (!modelPricing) {
          const matchingModel = Object.keys(providerPricing).find(
            (key) => model.startsWith(key)
          );
          if (matchingModel) {
            modelPricing = providerPricing[matchingModel];
          }
        }
        if (!modelPricing) {
          throw new Error(`Unknown model: ${usage.model} for provider ${usage.provider}`);
        }
        return modelPricing;
      }
      /**
       * Round to 6 decimal places for currency precision
       */
      round(value) {
        return Math.round(value * 1e6) / 1e6;
      }
    };
    var CostAttributor = class {
      /**
       * Attribute cost to dimensions
       */
      attribute(dimensions) {
        const primary = this.determinePrimary(dimensions);
        const confidence = this.calculateConfidence(dimensions);
        return {
          primary,
          dimensions: {
            userId: dimensions?.userId,
            projectId: dimensions?.projectId,
            organizationId: dimensions?.organizationId,
            environment: dimensions?.environment
          },
          tags: dimensions?.tags || {},
          confidence
        };
      }
      /**
       * Determine primary attribution dimension
       * Priority: organizationId > projectId > userId > environment
       */
      determinePrimary(dimensions) {
        if (!dimensions) {
          return "unattributed";
        }
        if (dimensions.organizationId) {
          return `organization:${dimensions.organizationId}`;
        }
        if (dimensions.projectId) {
          return `project:${dimensions.projectId}`;
        }
        if (dimensions.userId) {
          return `user:${dimensions.userId}`;
        }
        if (dimensions.environment) {
          return `environment:${dimensions.environment}`;
        }
        return "unattributed";
      }
      /**
       * Calculate confidence score based on available dimensions
       * More dimensions = higher confidence
       */
      calculateConfidence(dimensions) {
        if (!dimensions) {
          return 0;
        }
        let score = 0;
        let maxScore = 0;
        maxScore += 40;
        if (dimensions.organizationId) {
          score += 40;
        }
        maxScore += 30;
        if (dimensions.projectId) {
          score += 30;
        }
        maxScore += 20;
        if (dimensions.userId) {
          score += 20;
        }
        maxScore += 10;
        if (dimensions.environment) {
          score += 10;
        }
        if (dimensions.tags) {
          const tagCount = Object.keys(dimensions.tags).length;
          const tagBonus = Math.min(tagCount * 2, 10);
          score += tagBonus;
          maxScore += 10;
        }
        const confidence = maxScore > 0 ? score / maxScore : 0;
        return Math.round(confidence * 100) / 100;
      }
    };
    var external_exports = {};
    __export(external_exports, {
      BRAND: () => BRAND,
      DIRTY: () => DIRTY,
      EMPTY_PATH: () => EMPTY_PATH,
      INVALID: () => INVALID,
      NEVER: () => NEVER,
      OK: () => OK,
      ParseStatus: () => ParseStatus,
      Schema: () => ZodType,
      ZodAny: () => ZodAny,
      ZodArray: () => ZodArray,
      ZodBigInt: () => ZodBigInt,
      ZodBoolean: () => ZodBoolean,
      ZodBranded: () => ZodBranded,
      ZodCatch: () => ZodCatch,
      ZodDate: () => ZodDate,
      ZodDefault: () => ZodDefault,
      ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
      ZodEffects: () => ZodEffects,
      ZodEnum: () => ZodEnum,
      ZodError: () => ZodError,
      ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
      ZodFunction: () => ZodFunction,
      ZodIntersection: () => ZodIntersection,
      ZodIssueCode: () => ZodIssueCode,
      ZodLazy: () => ZodLazy,
      ZodLiteral: () => ZodLiteral,
      ZodMap: () => ZodMap,
      ZodNaN: () => ZodNaN,
      ZodNativeEnum: () => ZodNativeEnum,
      ZodNever: () => ZodNever,
      ZodNull: () => ZodNull,
      ZodNullable: () => ZodNullable,
      ZodNumber: () => ZodNumber,
      ZodObject: () => ZodObject,
      ZodOptional: () => ZodOptional,
      ZodParsedType: () => ZodParsedType,
      ZodPipeline: () => ZodPipeline,
      ZodPromise: () => ZodPromise,
      ZodReadonly: () => ZodReadonly,
      ZodRecord: () => ZodRecord,
      ZodSchema: () => ZodType,
      ZodSet: () => ZodSet,
      ZodString: () => ZodString,
      ZodSymbol: () => ZodSymbol,
      ZodTransformer: () => ZodEffects,
      ZodTuple: () => ZodTuple,
      ZodType: () => ZodType,
      ZodUndefined: () => ZodUndefined,
      ZodUnion: () => ZodUnion,
      ZodUnknown: () => ZodUnknown,
      ZodVoid: () => ZodVoid,
      addIssueToContext: () => addIssueToContext,
      any: () => anyType,
      array: () => arrayType,
      bigint: () => bigIntType,
      boolean: () => booleanType,
      coerce: () => coerce,
      custom: () => custom,
      date: () => dateType,
      datetimeRegex: () => datetimeRegex,
      defaultErrorMap: () => en_default,
      discriminatedUnion: () => discriminatedUnionType,
      effect: () => effectsType,
      enum: () => enumType,
      function: () => functionType,
      getErrorMap: () => getErrorMap,
      getParsedType: () => getParsedType,
      instanceof: () => instanceOfType,
      intersection: () => intersectionType,
      isAborted: () => isAborted,
      isAsync: () => isAsync,
      isDirty: () => isDirty,
      isValid: () => isValid,
      late: () => late,
      lazy: () => lazyType,
      literal: () => literalType,
      makeIssue: () => makeIssue,
      map: () => mapType,
      nan: () => nanType,
      nativeEnum: () => nativeEnumType,
      never: () => neverType,
      null: () => nullType,
      nullable: () => nullableType,
      number: () => numberType,
      object: () => objectType,
      objectUtil: () => objectUtil,
      oboolean: () => oboolean,
      onumber: () => onumber,
      optional: () => optionalType,
      ostring: () => ostring,
      pipeline: () => pipelineType,
      preprocess: () => preprocessType,
      promise: () => promiseType,
      quotelessJson: () => quotelessJson,
      record: () => recordType,
      set: () => setType,
      setErrorMap: () => setErrorMap,
      strictObject: () => strictObjectType,
      string: () => stringType,
      symbol: () => symbolType,
      transformer: () => effectsType,
      tuple: () => tupleType,
      undefined: () => undefinedType,
      union: () => unionType,
      unknown: () => unknownType,
      util: () => util,
      void: () => voidType
    });
    var util;
    (function(util5) {
      util5.assertEqual = (_) => {
      };
      function assertIs(_arg) {
      }
      util5.assertIs = assertIs;
      function assertNever(_x) {
        throw new Error();
      }
      util5.assertNever = assertNever;
      util5.arrayToEnum = (items) => {
        const obj = {};
        for (const item of items) {
          obj[item] = item;
        }
        return obj;
      };
      util5.getValidEnumValues = (obj) => {
        const validKeys = util5.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys) {
          filtered[k] = obj[k];
        }
        return util5.objectValues(filtered);
      };
      util5.objectValues = (obj) => {
        return util5.objectKeys(obj).map(function(e) {
          return obj[e];
        });
      };
      util5.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
        const keys = [];
        for (const key in object) {
          if (Object.prototype.hasOwnProperty.call(object, key)) {
            keys.push(key);
          }
        }
        return keys;
      };
      util5.find = (arr, checker) => {
        for (const item of arr) {
          if (checker(item))
            return item;
        }
        return void 0;
      };
      util5.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
      function joinValues(array, separator = " | ") {
        return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
      }
      util5.joinValues = joinValues;
      util5.jsonStringifyReplacer = (_, value) => {
        if (typeof value === "bigint") {
          return value.toString();
        }
        return value;
      };
    })(util || (util = {}));
    var objectUtil;
    (function(objectUtil5) {
      objectUtil5.mergeShapes = (first, second) => {
        return {
          ...first,
          ...second
          // second overwrites first
        };
      };
    })(objectUtil || (objectUtil = {}));
    var ZodParsedType = util.arrayToEnum([
      "string",
      "nan",
      "number",
      "integer",
      "float",
      "boolean",
      "date",
      "bigint",
      "symbol",
      "function",
      "undefined",
      "null",
      "array",
      "object",
      "unknown",
      "promise",
      "void",
      "never",
      "map",
      "set"
    ]);
    var getParsedType = (data) => {
      const t = typeof data;
      switch (t) {
        case "undefined":
          return ZodParsedType.undefined;
        case "string":
          return ZodParsedType.string;
        case "number":
          return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
        case "boolean":
          return ZodParsedType.boolean;
        case "function":
          return ZodParsedType.function;
        case "bigint":
          return ZodParsedType.bigint;
        case "symbol":
          return ZodParsedType.symbol;
        case "object":
          if (Array.isArray(data)) {
            return ZodParsedType.array;
          }
          if (data === null) {
            return ZodParsedType.null;
          }
          if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
            return ZodParsedType.promise;
          }
          if (typeof Map !== "undefined" && data instanceof Map) {
            return ZodParsedType.map;
          }
          if (typeof Set !== "undefined" && data instanceof Set) {
            return ZodParsedType.set;
          }
          if (typeof Date !== "undefined" && data instanceof Date) {
            return ZodParsedType.date;
          }
          return ZodParsedType.object;
        default:
          return ZodParsedType.unknown;
      }
    };
    var ZodIssueCode = util.arrayToEnum([
      "invalid_type",
      "invalid_literal",
      "custom",
      "invalid_union",
      "invalid_union_discriminator",
      "invalid_enum_value",
      "unrecognized_keys",
      "invalid_arguments",
      "invalid_return_type",
      "invalid_date",
      "invalid_string",
      "too_small",
      "too_big",
      "invalid_intersection_types",
      "not_multiple_of",
      "not_finite"
    ]);
    var quotelessJson = (obj) => {
      const json = JSON.stringify(obj, null, 2);
      return json.replace(/"([^"]+)":/g, "$1:");
    };
    var ZodError = class _ZodError extends Error {
      get errors() {
        return this.issues;
      }
      constructor(issues) {
        super();
        this.issues = [];
        this.addIssue = (sub2) => {
          this.issues = [...this.issues, sub2];
        };
        this.addIssues = (subs = []) => {
          this.issues = [...this.issues, ...subs];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(this, actualProto);
        } else {
          this.__proto__ = actualProto;
        }
        this.name = "ZodError";
        this.issues = issues;
      }
      format(_mapper) {
        const mapper = _mapper || function(issue) {
          return issue.message;
        };
        const fieldErrors = { _errors: [] };
        const processError = (error) => {
          for (const issue of error.issues) {
            if (issue.code === "invalid_union") {
              issue.unionErrors.map(processError);
            } else if (issue.code === "invalid_return_type") {
              processError(issue.returnTypeError);
            } else if (issue.code === "invalid_arguments") {
              processError(issue.argumentsError);
            } else if (issue.path.length === 0) {
              fieldErrors._errors.push(mapper(issue));
            } else {
              let curr = fieldErrors;
              let i = 0;
              while (i < issue.path.length) {
                const el = issue.path[i];
                const terminal = i === issue.path.length - 1;
                if (!terminal) {
                  curr[el] = curr[el] || { _errors: [] };
                } else {
                  curr[el] = curr[el] || { _errors: [] };
                  curr[el]._errors.push(mapper(issue));
                }
                curr = curr[el];
                i++;
              }
            }
          }
        };
        processError(this);
        return fieldErrors;
      }
      static assert(value) {
        if (!(value instanceof _ZodError)) {
          throw new Error(`Not a ZodError: ${value}`);
        }
      }
      toString() {
        return this.message;
      }
      get message() {
        return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
      }
      get isEmpty() {
        return this.issues.length === 0;
      }
      flatten(mapper = (issue) => issue.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub2 of this.issues) {
          if (sub2.path.length > 0) {
            const firstEl = sub2.path[0];
            fieldErrors[firstEl] = fieldErrors[firstEl] || [];
            fieldErrors[firstEl].push(mapper(sub2));
          } else {
            formErrors.push(mapper(sub2));
          }
        }
        return { formErrors, fieldErrors };
      }
      get formErrors() {
        return this.flatten();
      }
    };
    ZodError.create = (issues) => {
      const error = new ZodError(issues);
      return error;
    };
    var errorMap = (issue, _ctx) => {
      let message;
      switch (issue.code) {
        case ZodIssueCode.invalid_type:
          if (issue.received === ZodParsedType.undefined) {
            message = "Required";
          } else {
            message = `Expected ${issue.expected}, received ${issue.received}`;
          }
          break;
        case ZodIssueCode.invalid_literal:
          message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
          break;
        case ZodIssueCode.unrecognized_keys:
          message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
          break;
        case ZodIssueCode.invalid_union:
          message = `Invalid input`;
          break;
        case ZodIssueCode.invalid_union_discriminator:
          message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
          break;
        case ZodIssueCode.invalid_enum_value:
          message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
          break;
        case ZodIssueCode.invalid_arguments:
          message = `Invalid function arguments`;
          break;
        case ZodIssueCode.invalid_return_type:
          message = `Invalid function return type`;
          break;
        case ZodIssueCode.invalid_date:
          message = `Invalid date`;
          break;
        case ZodIssueCode.invalid_string:
          if (typeof issue.validation === "object") {
            if ("includes" in issue.validation) {
              message = `Invalid input: must include "${issue.validation.includes}"`;
              if (typeof issue.validation.position === "number") {
                message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
              }
            } else if ("startsWith" in issue.validation) {
              message = `Invalid input: must start with "${issue.validation.startsWith}"`;
            } else if ("endsWith" in issue.validation) {
              message = `Invalid input: must end with "${issue.validation.endsWith}"`;
            } else {
              util.assertNever(issue.validation);
            }
          } else if (issue.validation !== "regex") {
            message = `Invalid ${issue.validation}`;
          } else {
            message = "Invalid";
          }
          break;
        case ZodIssueCode.too_small:
          if (issue.type === "array")
            message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
          else if (issue.type === "string")
            message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
          else if (issue.type === "number")
            message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
          else if (issue.type === "bigint")
            message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
          else if (issue.type === "date")
            message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
          else
            message = "Invalid input";
          break;
        case ZodIssueCode.too_big:
          if (issue.type === "array")
            message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
          else if (issue.type === "string")
            message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
          else if (issue.type === "number")
            message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
          else if (issue.type === "bigint")
            message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
          else if (issue.type === "date")
            message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
          else
            message = "Invalid input";
          break;
        case ZodIssueCode.custom:
          message = `Invalid input`;
          break;
        case ZodIssueCode.invalid_intersection_types:
          message = `Intersection results could not be merged`;
          break;
        case ZodIssueCode.not_multiple_of:
          message = `Number must be a multiple of ${issue.multipleOf}`;
          break;
        case ZodIssueCode.not_finite:
          message = "Number must be finite";
          break;
        default:
          message = _ctx.defaultError;
          util.assertNever(issue);
      }
      return { message };
    };
    var en_default = errorMap;
    var overrideErrorMap = en_default;
    function setErrorMap(map) {
      overrideErrorMap = map;
    }
    function getErrorMap() {
      return overrideErrorMap;
    }
    var makeIssue = (params) => {
      const { data, path, errorMaps, issueData } = params;
      const fullPath = [...path, ...issueData.path || []];
      const fullIssue = {
        ...issueData,
        path: fullPath
      };
      if (issueData.message !== void 0) {
        return {
          ...issueData,
          path: fullPath,
          message: issueData.message
        };
      }
      let errorMessage = "";
      const maps = errorMaps.filter((m) => !!m).slice().reverse();
      for (const map of maps) {
        errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
      }
      return {
        ...issueData,
        path: fullPath,
        message: errorMessage
      };
    };
    var EMPTY_PATH = [];
    function addIssueToContext(ctx, issueData) {
      const overrideMap = getErrorMap();
      const issue = makeIssue({
        issueData,
        data: ctx.data,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          // contextual error map is first priority
          ctx.schemaErrorMap,
          // then schema-bound map if available
          overrideMap,
          // then global override map
          overrideMap === en_default ? void 0 : en_default
          // then global default map
        ].filter((x) => !!x)
      });
      ctx.common.issues.push(issue);
    }
    var ParseStatus = class _ParseStatus {
      constructor() {
        this.value = "valid";
      }
      dirty() {
        if (this.value === "valid")
          this.value = "dirty";
      }
      abort() {
        if (this.value !== "aborted")
          this.value = "aborted";
      }
      static mergeArray(status, results) {
        const arrayValue = [];
        for (const s of results) {
          if (s.status === "aborted")
            return INVALID;
          if (s.status === "dirty")
            status.dirty();
          arrayValue.push(s.value);
        }
        return { status: status.value, value: arrayValue };
      }
      static async mergeObjectAsync(status, pairs) {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value
          });
        }
        return _ParseStatus.mergeObjectSync(status, syncPairs);
      }
      static mergeObjectSync(status, pairs) {
        const finalObject = {};
        for (const pair of pairs) {
          const { key, value } = pair;
          if (key.status === "aborted")
            return INVALID;
          if (value.status === "aborted")
            return INVALID;
          if (key.status === "dirty")
            status.dirty();
          if (value.status === "dirty")
            status.dirty();
          if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
            finalObject[key.value] = value.value;
          }
        }
        return { status: status.value, value: finalObject };
      }
    };
    var INVALID = Object.freeze({
      status: "aborted"
    });
    var DIRTY = (value) => ({ status: "dirty", value });
    var OK = (value) => ({ status: "valid", value });
    var isAborted = (x) => x.status === "aborted";
    var isDirty = (x) => x.status === "dirty";
    var isValid = (x) => x.status === "valid";
    var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
    var errorUtil;
    (function(errorUtil5) {
      errorUtil5.errToObj = (message) => typeof message === "string" ? { message } : message || {};
      errorUtil5.toString = (message) => typeof message === "string" ? message : message?.message;
    })(errorUtil || (errorUtil = {}));
    var ParseInputLazyPath = class {
      constructor(parent, value, path, key) {
        this._cachedPath = [];
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key;
      }
      get path() {
        if (!this._cachedPath.length) {
          if (Array.isArray(this._key)) {
            this._cachedPath.push(...this._path, ...this._key);
          } else {
            this._cachedPath.push(...this._path, this._key);
          }
        }
        return this._cachedPath;
      }
    };
    var handleResult = (ctx, result) => {
      if (isValid(result)) {
        return { success: true, data: result.value };
      } else {
        if (!ctx.common.issues.length) {
          throw new Error("Validation failed but no issues detected.");
        }
        return {
          success: false,
          get error() {
            if (this._error)
              return this._error;
            const error = new ZodError(ctx.common.issues);
            this._error = error;
            return this._error;
          }
        };
      }
    };
    function processCreateParams(params) {
      if (!params)
        return {};
      const { errorMap: errorMap5, invalid_type_error, required_error, description } = params;
      if (errorMap5 && (invalid_type_error || required_error)) {
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
      }
      if (errorMap5)
        return { errorMap: errorMap5, description };
      const customMap = (iss, ctx) => {
        const { message } = params;
        if (iss.code === "invalid_enum_value") {
          return { message: message ?? ctx.defaultError };
        }
        if (typeof ctx.data === "undefined") {
          return { message: message ?? required_error ?? ctx.defaultError };
        }
        if (iss.code !== "invalid_type")
          return { message: ctx.defaultError };
        return { message: message ?? invalid_type_error ?? ctx.defaultError };
      };
      return { errorMap: customMap, description };
    }
    var ZodType = class {
      get description() {
        return this._def.description;
      }
      _getType(input) {
        return getParsedType(input.data);
      }
      _getOrReturnCtx(input, ctx) {
        return ctx || {
          common: input.parent.common,
          data: input.data,
          parsedType: getParsedType(input.data),
          schemaErrorMap: this._def.errorMap,
          path: input.path,
          parent: input.parent
        };
      }
      _processInputParams(input) {
        return {
          status: new ParseStatus(),
          ctx: {
            common: input.parent.common,
            data: input.data,
            parsedType: getParsedType(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent
          }
        };
      }
      _parseSync(input) {
        const result = this._parse(input);
        if (isAsync(result)) {
          throw new Error("Synchronous parse encountered promise.");
        }
        return result;
      }
      _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
      }
      parse(data, params) {
        const result = this.safeParse(data, params);
        if (result.success)
          return result.data;
        throw result.error;
      }
      safeParse(data, params) {
        const ctx = {
          common: {
            issues: [],
            async: params?.async ?? false,
            contextualErrorMap: params?.errorMap
          },
          path: params?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: getParsedType(data)
        };
        const result = this._parseSync({ data, path: ctx.path, parent: ctx });
        return handleResult(ctx, result);
      }
      "~validate"(data) {
        const ctx = {
          common: {
            issues: [],
            async: !!this["~standard"].async
          },
          path: [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: getParsedType(data)
        };
        if (!this["~standard"].async) {
          try {
            const result = this._parseSync({ data, path: [], parent: ctx });
            return isValid(result) ? {
              value: result.value
            } : {
              issues: ctx.common.issues
            };
          } catch (err) {
            if (err?.message?.toLowerCase()?.includes("encountered")) {
              this["~standard"].async = true;
            }
            ctx.common = {
              issues: [],
              async: true
            };
          }
        }
        return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        });
      }
      async parseAsync(data, params) {
        const result = await this.safeParseAsync(data, params);
        if (result.success)
          return result.data;
        throw result.error;
      }
      async safeParseAsync(data, params) {
        const ctx = {
          common: {
            issues: [],
            contextualErrorMap: params?.errorMap,
            async: true
          },
          path: params?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: getParsedType(data)
        };
        const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
        const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
        return handleResult(ctx, result);
      }
      refine(check, message) {
        const getIssueProperties = (val) => {
          if (typeof message === "string" || typeof message === "undefined") {
            return { message };
          } else if (typeof message === "function") {
            return message(val);
          } else {
            return message;
          }
        };
        return this._refinement((val, ctx) => {
          const result = check(val);
          const setError = () => ctx.addIssue({
            code: ZodIssueCode.custom,
            ...getIssueProperties(val)
          });
          if (typeof Promise !== "undefined" && result instanceof Promise) {
            return result.then((data) => {
              if (!data) {
                setError();
                return false;
              } else {
                return true;
              }
            });
          }
          if (!result) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      refinement(check, refinementData) {
        return this._refinement((val, ctx) => {
          if (!check(val)) {
            ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
            return false;
          } else {
            return true;
          }
        });
      }
      _refinement(refinement) {
        return new ZodEffects({
          schema: this,
          typeName: ZodFirstPartyTypeKind.ZodEffects,
          effect: { type: "refinement", refinement }
        });
      }
      superRefine(refinement) {
        return this._refinement(refinement);
      }
      constructor(def) {
        this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.readonly = this.readonly.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
        this["~standard"] = {
          version: 1,
          vendor: "zod",
          validate: (data) => this["~validate"](data)
        };
      }
      optional() {
        return ZodOptional.create(this, this._def);
      }
      nullable() {
        return ZodNullable.create(this, this._def);
      }
      nullish() {
        return this.nullable().optional();
      }
      array() {
        return ZodArray.create(this);
      }
      promise() {
        return ZodPromise.create(this, this._def);
      }
      or(option) {
        return ZodUnion.create([this, option], this._def);
      }
      and(incoming) {
        return ZodIntersection.create(this, incoming, this._def);
      }
      transform(transform) {
        return new ZodEffects({
          ...processCreateParams(this._def),
          schema: this,
          typeName: ZodFirstPartyTypeKind.ZodEffects,
          effect: { type: "transform", transform }
        });
      }
      default(def) {
        const defaultValueFunc = typeof def === "function" ? def : () => def;
        return new ZodDefault({
          ...processCreateParams(this._def),
          innerType: this,
          defaultValue: defaultValueFunc,
          typeName: ZodFirstPartyTypeKind.ZodDefault
        });
      }
      brand() {
        return new ZodBranded({
          typeName: ZodFirstPartyTypeKind.ZodBranded,
          type: this,
          ...processCreateParams(this._def)
        });
      }
      catch(def) {
        const catchValueFunc = typeof def === "function" ? def : () => def;
        return new ZodCatch({
          ...processCreateParams(this._def),
          innerType: this,
          catchValue: catchValueFunc,
          typeName: ZodFirstPartyTypeKind.ZodCatch
        });
      }
      describe(description) {
        const This = this.constructor;
        return new This({
          ...this._def,
          description
        });
      }
      pipe(target) {
        return ZodPipeline.create(this, target);
      }
      readonly() {
        return ZodReadonly.create(this);
      }
      isOptional() {
        return this.safeParse(void 0).success;
      }
      isNullable() {
        return this.safeParse(null).success;
      }
    };
    var cuidRegex = /^c[^\s-]{8,}$/i;
    var cuid2Regex = /^[0-9a-z]+$/;
    var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
    var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
    var nanoidRegex = /^[a-z0-9_-]{21}$/i;
    var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
    var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
    var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
    var emojiRegex;
    var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
    var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
    var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
    var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
    var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
    var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
    var dateRegex = new RegExp(`^${dateRegexSource}$`);
    function timeRegexSource(args) {
      let secondsRegexSource = `[0-5]\\d`;
      if (args.precision) {
        secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
      } else if (args.precision == null) {
        secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
      }
      const secondsQuantifier = args.precision ? "+" : "?";
      return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
    }
    function timeRegex(args) {
      return new RegExp(`^${timeRegexSource(args)}$`);
    }
    function datetimeRegex(args) {
      let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
      const opts = [];
      opts.push(args.local ? `Z?` : `Z`);
      if (args.offset)
        opts.push(`([+-]\\d{2}:?\\d{2})`);
      regex = `${regex}(${opts.join("|")})`;
      return new RegExp(`^${regex}$`);
    }
    function isValidIP(ip, version) {
      if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
        return true;
      }
      if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
        return true;
      }
      return false;
    }
    function isValidJWT(jwt, alg) {
      if (!jwtRegex.test(jwt))
        return false;
      try {
        const [header] = jwt.split(".");
        if (!header)
          return false;
        const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
        const decoded = JSON.parse(atob(base64));
        if (typeof decoded !== "object" || decoded === null)
          return false;
        if ("typ" in decoded && decoded?.typ !== "JWT")
          return false;
        if (!decoded.alg)
          return false;
        if (alg && decoded.alg !== alg)
          return false;
        return true;
      } catch {
        return false;
      }
    }
    function isValidCidr(ip, version) {
      if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
        return true;
      }
      if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
        return true;
      }
      return false;
    }
    var ZodString = class _ZodString extends ZodType {
      _parse(input) {
        if (this._def.coerce) {
          input.data = String(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.string) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(ctx2, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.string,
            received: ctx2.parsedType
          });
          return INVALID;
        }
        const status = new ParseStatus();
        let ctx = void 0;
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            if (input.data.length < check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: check.value,
                type: "string",
                inclusive: true,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            if (input.data.length > check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: check.value,
                type: "string",
                inclusive: true,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "length") {
            const tooBig = input.data.length > check.value;
            const tooSmall = input.data.length < check.value;
            if (tooBig || tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              if (tooBig) {
                addIssueToContext(ctx, {
                  code: ZodIssueCode.too_big,
                  maximum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: true,
                  message: check.message
                });
              } else if (tooSmall) {
                addIssueToContext(ctx, {
                  code: ZodIssueCode.too_small,
                  minimum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: true,
                  message: check.message
                });
              }
              status.dirty();
            }
          } else if (check.kind === "email") {
            if (!emailRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "email",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "emoji") {
            if (!emojiRegex) {
              emojiRegex = new RegExp(_emojiRegex, "u");
            }
            if (!emojiRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "emoji",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "uuid") {
            if (!uuidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "uuid",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "nanoid") {
            if (!nanoidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "nanoid",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cuid") {
            if (!cuidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "cuid",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cuid2") {
            if (!cuid2Regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "cuid2",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "ulid") {
            if (!ulidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "ulid",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "url") {
            try {
              new URL(input.data);
            } catch {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "url",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "regex") {
            check.regex.lastIndex = 0;
            const testResult = check.regex.test(input.data);
            if (!testResult) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "regex",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "trim") {
            input.data = input.data.trim();
          } else if (check.kind === "includes") {
            if (!input.data.includes(check.value, check.position)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: { includes: check.value, position: check.position },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "toLowerCase") {
            input.data = input.data.toLowerCase();
          } else if (check.kind === "toUpperCase") {
            input.data = input.data.toUpperCase();
          } else if (check.kind === "startsWith") {
            if (!input.data.startsWith(check.value)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: { startsWith: check.value },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "endsWith") {
            if (!input.data.endsWith(check.value)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: { endsWith: check.value },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "datetime") {
            const regex = datetimeRegex(check);
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: "datetime",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "date") {
            const regex = dateRegex;
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: "date",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "time") {
            const regex = timeRegex(check);
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: "time",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "duration") {
            if (!durationRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "duration",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "ip") {
            if (!isValidIP(input.data, check.version)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "ip",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "jwt") {
            if (!isValidJWT(input.data, check.alg)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "jwt",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cidr") {
            if (!isValidCidr(input.data, check.version)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "cidr",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "base64") {
            if (!base64Regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "base64",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "base64url") {
            if (!base64urlRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "base64url",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      _regex(regex, validation, message) {
        return this.refinement((data) => regex.test(data), {
          validation,
          code: ZodIssueCode.invalid_string,
          ...errorUtil.errToObj(message)
        });
      }
      _addCheck(check) {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      email(message) {
        return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
      }
      url(message) {
        return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
      }
      emoji(message) {
        return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
      }
      uuid(message) {
        return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
      }
      nanoid(message) {
        return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
      }
      cuid(message) {
        return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
      }
      cuid2(message) {
        return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
      }
      ulid(message) {
        return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
      }
      base64(message) {
        return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
      }
      base64url(message) {
        return this._addCheck({
          kind: "base64url",
          ...errorUtil.errToObj(message)
        });
      }
      jwt(options) {
        return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
      }
      ip(options) {
        return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
      }
      cidr(options) {
        return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
      }
      datetime(options) {
        if (typeof options === "string") {
          return this._addCheck({
            kind: "datetime",
            precision: null,
            offset: false,
            local: false,
            message: options
          });
        }
        return this._addCheck({
          kind: "datetime",
          precision: typeof options?.precision === "undefined" ? null : options?.precision,
          offset: options?.offset ?? false,
          local: options?.local ?? false,
          ...errorUtil.errToObj(options?.message)
        });
      }
      date(message) {
        return this._addCheck({ kind: "date", message });
      }
      time(options) {
        if (typeof options === "string") {
          return this._addCheck({
            kind: "time",
            precision: null,
            message: options
          });
        }
        return this._addCheck({
          kind: "time",
          precision: typeof options?.precision === "undefined" ? null : options?.precision,
          ...errorUtil.errToObj(options?.message)
        });
      }
      duration(message) {
        return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
      }
      regex(regex, message) {
        return this._addCheck({
          kind: "regex",
          regex,
          ...errorUtil.errToObj(message)
        });
      }
      includes(value, options) {
        return this._addCheck({
          kind: "includes",
          value,
          position: options?.position,
          ...errorUtil.errToObj(options?.message)
        });
      }
      startsWith(value, message) {
        return this._addCheck({
          kind: "startsWith",
          value,
          ...errorUtil.errToObj(message)
        });
      }
      endsWith(value, message) {
        return this._addCheck({
          kind: "endsWith",
          value,
          ...errorUtil.errToObj(message)
        });
      }
      min(minLength, message) {
        return this._addCheck({
          kind: "min",
          value: minLength,
          ...errorUtil.errToObj(message)
        });
      }
      max(maxLength, message) {
        return this._addCheck({
          kind: "max",
          value: maxLength,
          ...errorUtil.errToObj(message)
        });
      }
      length(len, message) {
        return this._addCheck({
          kind: "length",
          value: len,
          ...errorUtil.errToObj(message)
        });
      }
      /**
       * Equivalent to `.min(1)`
       */
      nonempty(message) {
        return this.min(1, errorUtil.errToObj(message));
      }
      trim() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "trim" }]
        });
      }
      toLowerCase() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "toLowerCase" }]
        });
      }
      toUpperCase() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "toUpperCase" }]
        });
      }
      get isDatetime() {
        return !!this._def.checks.find((ch) => ch.kind === "datetime");
      }
      get isDate() {
        return !!this._def.checks.find((ch) => ch.kind === "date");
      }
      get isTime() {
        return !!this._def.checks.find((ch) => ch.kind === "time");
      }
      get isDuration() {
        return !!this._def.checks.find((ch) => ch.kind === "duration");
      }
      get isEmail() {
        return !!this._def.checks.find((ch) => ch.kind === "email");
      }
      get isURL() {
        return !!this._def.checks.find((ch) => ch.kind === "url");
      }
      get isEmoji() {
        return !!this._def.checks.find((ch) => ch.kind === "emoji");
      }
      get isUUID() {
        return !!this._def.checks.find((ch) => ch.kind === "uuid");
      }
      get isNANOID() {
        return !!this._def.checks.find((ch) => ch.kind === "nanoid");
      }
      get isCUID() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid");
      }
      get isCUID2() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid2");
      }
      get isULID() {
        return !!this._def.checks.find((ch) => ch.kind === "ulid");
      }
      get isIP() {
        return !!this._def.checks.find((ch) => ch.kind === "ip");
      }
      get isCIDR() {
        return !!this._def.checks.find((ch) => ch.kind === "cidr");
      }
      get isBase64() {
        return !!this._def.checks.find((ch) => ch.kind === "base64");
      }
      get isBase64url() {
        return !!this._def.checks.find((ch) => ch.kind === "base64url");
      }
      get minLength() {
        let min2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min2 === null || ch.value > min2)
              min2 = ch.value;
          }
        }
        return min2;
      }
      get maxLength() {
        let max2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max2 === null || ch.value < max2)
              max2 = ch.value;
          }
        }
        return max2;
      }
    };
    ZodString.create = (params) => {
      return new ZodString({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodString,
        coerce: params?.coerce ?? false,
        ...processCreateParams(params)
      });
    };
    function floatSafeRemainder(val, step) {
      const valDecCount = (val.toString().split(".")[1] || "").length;
      const stepDecCount = (step.toString().split(".")[1] || "").length;
      const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
      const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
      const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
      return valInt % stepInt / 10 ** decCount;
    }
    var ZodNumber = class _ZodNumber extends ZodType {
      constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
      }
      _parse(input) {
        if (this._def.coerce) {
          input.data = Number(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.number) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(ctx2, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.number,
            received: ctx2.parsedType
          });
          return INVALID;
        }
        let ctx = void 0;
        const status = new ParseStatus();
        for (const check of this._def.checks) {
          if (check.kind === "int") {
            if (!util.isInteger(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: "integer",
                received: "float",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "min") {
            const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
            if (tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: check.value,
                type: "number",
                inclusive: check.inclusive,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
            if (tooBig) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: check.value,
                type: "number",
                inclusive: check.inclusive,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "multipleOf") {
            if (floatSafeRemainder(input.data, check.value) !== 0) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.not_multiple_of,
                multipleOf: check.value,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "finite") {
            if (!Number.isFinite(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.not_finite,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
      }
      gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
      }
      lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
      }
      lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
      }
      setLimit(kind, value, inclusive, message) {
        return new _ZodNumber({
          ...this._def,
          checks: [
            ...this._def.checks,
            {
              kind,
              value,
              inclusive,
              message: errorUtil.toString(message)
            }
          ]
        });
      }
      _addCheck(check) {
        return new _ZodNumber({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      int(message) {
        return this._addCheck({
          kind: "int",
          message: errorUtil.toString(message)
        });
      }
      positive(message) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: false,
          message: errorUtil.toString(message)
        });
      }
      negative(message) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: false,
          message: errorUtil.toString(message)
        });
      }
      nonpositive(message) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: true,
          message: errorUtil.toString(message)
        });
      }
      nonnegative(message) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: true,
          message: errorUtil.toString(message)
        });
      }
      multipleOf(value, message) {
        return this._addCheck({
          kind: "multipleOf",
          value,
          message: errorUtil.toString(message)
        });
      }
      finite(message) {
        return this._addCheck({
          kind: "finite",
          message: errorUtil.toString(message)
        });
      }
      safe(message) {
        return this._addCheck({
          kind: "min",
          inclusive: true,
          value: Number.MIN_SAFE_INTEGER,
          message: errorUtil.toString(message)
        })._addCheck({
          kind: "max",
          inclusive: true,
          value: Number.MAX_SAFE_INTEGER,
          message: errorUtil.toString(message)
        });
      }
      get minValue() {
        let min2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min2 === null || ch.value > min2)
              min2 = ch.value;
          }
        }
        return min2;
      }
      get maxValue() {
        let max2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max2 === null || ch.value < max2)
              max2 = ch.value;
          }
        }
        return max2;
      }
      get isInt() {
        return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
      }
      get isFinite() {
        let max2 = null;
        let min2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
            return true;
          } else if (ch.kind === "min") {
            if (min2 === null || ch.value > min2)
              min2 = ch.value;
          } else if (ch.kind === "max") {
            if (max2 === null || ch.value < max2)
              max2 = ch.value;
          }
        }
        return Number.isFinite(min2) && Number.isFinite(max2);
      }
    };
    ZodNumber.create = (params) => {
      return new ZodNumber({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodNumber,
        coerce: params?.coerce || false,
        ...processCreateParams(params)
      });
    };
    var ZodBigInt = class _ZodBigInt extends ZodType {
      constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
      }
      _parse(input) {
        if (this._def.coerce) {
          try {
            input.data = BigInt(input.data);
          } catch {
            return this._getInvalidInput(input);
          }
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.bigint) {
          return this._getInvalidInput(input);
        }
        let ctx = void 0;
        const status = new ParseStatus();
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
            if (tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                type: "bigint",
                minimum: check.value,
                inclusive: check.inclusive,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
            if (tooBig) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                type: "bigint",
                maximum: check.value,
                inclusive: check.inclusive,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "multipleOf") {
            if (input.data % check.value !== BigInt(0)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.not_multiple_of,
                multipleOf: check.value,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      _getInvalidInput(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.bigint,
          received: ctx.parsedType
        });
        return INVALID;
      }
      gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
      }
      gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
      }
      lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
      }
      lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
      }
      setLimit(kind, value, inclusive, message) {
        return new _ZodBigInt({
          ...this._def,
          checks: [
            ...this._def.checks,
            {
              kind,
              value,
              inclusive,
              message: errorUtil.toString(message)
            }
          ]
        });
      }
      _addCheck(check) {
        return new _ZodBigInt({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      positive(message) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: false,
          message: errorUtil.toString(message)
        });
      }
      negative(message) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: false,
          message: errorUtil.toString(message)
        });
      }
      nonpositive(message) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: true,
          message: errorUtil.toString(message)
        });
      }
      nonnegative(message) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: true,
          message: errorUtil.toString(message)
        });
      }
      multipleOf(value, message) {
        return this._addCheck({
          kind: "multipleOf",
          value,
          message: errorUtil.toString(message)
        });
      }
      get minValue() {
        let min2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min2 === null || ch.value > min2)
              min2 = ch.value;
          }
        }
        return min2;
      }
      get maxValue() {
        let max2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max2 === null || ch.value < max2)
              max2 = ch.value;
          }
        }
        return max2;
      }
    };
    ZodBigInt.create = (params) => {
      return new ZodBigInt({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodBigInt,
        coerce: params?.coerce ?? false,
        ...processCreateParams(params)
      });
    };
    var ZodBoolean = class extends ZodType {
      _parse(input) {
        if (this._def.coerce) {
          input.data = Boolean(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.boolean) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.boolean,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    };
    ZodBoolean.create = (params) => {
      return new ZodBoolean({
        typeName: ZodFirstPartyTypeKind.ZodBoolean,
        coerce: params?.coerce || false,
        ...processCreateParams(params)
      });
    };
    var ZodDate = class _ZodDate extends ZodType {
      _parse(input) {
        if (this._def.coerce) {
          input.data = new Date(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.date) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(ctx2, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.date,
            received: ctx2.parsedType
          });
          return INVALID;
        }
        if (Number.isNaN(input.data.getTime())) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(ctx2, {
            code: ZodIssueCode.invalid_date
          });
          return INVALID;
        }
        const status = new ParseStatus();
        let ctx = void 0;
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            if (input.data.getTime() < check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                message: check.message,
                inclusive: true,
                exact: false,
                minimum: check.value,
                type: "date"
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            if (input.data.getTime() > check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                message: check.message,
                inclusive: true,
                exact: false,
                maximum: check.value,
                type: "date"
              });
              status.dirty();
            }
          } else {
            util.assertNever(check);
          }
        }
        return {
          status: status.value,
          value: new Date(input.data.getTime())
        };
      }
      _addCheck(check) {
        return new _ZodDate({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      min(minDate, message) {
        return this._addCheck({
          kind: "min",
          value: minDate.getTime(),
          message: errorUtil.toString(message)
        });
      }
      max(maxDate, message) {
        return this._addCheck({
          kind: "max",
          value: maxDate.getTime(),
          message: errorUtil.toString(message)
        });
      }
      get minDate() {
        let min2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min2 === null || ch.value > min2)
              min2 = ch.value;
          }
        }
        return min2 != null ? new Date(min2) : null;
      }
      get maxDate() {
        let max2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max2 === null || ch.value < max2)
              max2 = ch.value;
          }
        }
        return max2 != null ? new Date(max2) : null;
      }
    };
    ZodDate.create = (params) => {
      return new ZodDate({
        checks: [],
        coerce: params?.coerce || false,
        typeName: ZodFirstPartyTypeKind.ZodDate,
        ...processCreateParams(params)
      });
    };
    var ZodSymbol = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.symbol) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.symbol,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    };
    ZodSymbol.create = (params) => {
      return new ZodSymbol({
        typeName: ZodFirstPartyTypeKind.ZodSymbol,
        ...processCreateParams(params)
      });
    };
    var ZodUndefined = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.undefined,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    };
    ZodUndefined.create = (params) => {
      return new ZodUndefined({
        typeName: ZodFirstPartyTypeKind.ZodUndefined,
        ...processCreateParams(params)
      });
    };
    var ZodNull = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.null) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.null,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    };
    ZodNull.create = (params) => {
      return new ZodNull({
        typeName: ZodFirstPartyTypeKind.ZodNull,
        ...processCreateParams(params)
      });
    };
    var ZodAny = class extends ZodType {
      constructor() {
        super(...arguments);
        this._any = true;
      }
      _parse(input) {
        return OK(input.data);
      }
    };
    ZodAny.create = (params) => {
      return new ZodAny({
        typeName: ZodFirstPartyTypeKind.ZodAny,
        ...processCreateParams(params)
      });
    };
    var ZodUnknown = class extends ZodType {
      constructor() {
        super(...arguments);
        this._unknown = true;
      }
      _parse(input) {
        return OK(input.data);
      }
    };
    ZodUnknown.create = (params) => {
      return new ZodUnknown({
        typeName: ZodFirstPartyTypeKind.ZodUnknown,
        ...processCreateParams(params)
      });
    };
    var ZodNever = class extends ZodType {
      _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.never,
          received: ctx.parsedType
        });
        return INVALID;
      }
    };
    ZodNever.create = (params) => {
      return new ZodNever({
        typeName: ZodFirstPartyTypeKind.ZodNever,
        ...processCreateParams(params)
      });
    };
    var ZodVoid = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.void,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    };
    ZodVoid.create = (params) => {
      return new ZodVoid({
        typeName: ZodFirstPartyTypeKind.ZodVoid,
        ...processCreateParams(params)
      });
    };
    var ZodArray = class _ZodArray extends ZodType {
      _parse(input) {
        const { ctx, status } = this._processInputParams(input);
        const def = this._def;
        if (ctx.parsedType !== ZodParsedType.array) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.array,
            received: ctx.parsedType
          });
          return INVALID;
        }
        if (def.exactLength !== null) {
          const tooBig = ctx.data.length > def.exactLength.value;
          const tooSmall = ctx.data.length < def.exactLength.value;
          if (tooBig || tooSmall) {
            addIssueToContext(ctx, {
              code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
              minimum: tooSmall ? def.exactLength.value : void 0,
              maximum: tooBig ? def.exactLength.value : void 0,
              type: "array",
              inclusive: true,
              exact: true,
              message: def.exactLength.message
            });
            status.dirty();
          }
        }
        if (def.minLength !== null) {
          if (ctx.data.length < def.minLength.value) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: def.minLength.value,
              type: "array",
              inclusive: true,
              exact: false,
              message: def.minLength.message
            });
            status.dirty();
          }
        }
        if (def.maxLength !== null) {
          if (ctx.data.length > def.maxLength.value) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: def.maxLength.value,
              type: "array",
              inclusive: true,
              exact: false,
              message: def.maxLength.message
            });
            status.dirty();
          }
        }
        if (ctx.common.async) {
          return Promise.all([...ctx.data].map((item, i) => {
            return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
          })).then((result2) => {
            return ParseStatus.mergeArray(status, result2);
          });
        }
        const result = [...ctx.data].map((item, i) => {
          return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        });
        return ParseStatus.mergeArray(status, result);
      }
      get element() {
        return this._def.type;
      }
      min(minLength, message) {
        return new _ZodArray({
          ...this._def,
          minLength: { value: minLength, message: errorUtil.toString(message) }
        });
      }
      max(maxLength, message) {
        return new _ZodArray({
          ...this._def,
          maxLength: { value: maxLength, message: errorUtil.toString(message) }
        });
      }
      length(len, message) {
        return new _ZodArray({
          ...this._def,
          exactLength: { value: len, message: errorUtil.toString(message) }
        });
      }
      nonempty(message) {
        return this.min(1, message);
      }
    };
    ZodArray.create = (schema, params) => {
      return new ZodArray({
        type: schema,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: ZodFirstPartyTypeKind.ZodArray,
        ...processCreateParams(params)
      });
    };
    function deepPartialify(schema) {
      if (schema instanceof ZodObject) {
        const newShape = {};
        for (const key in schema.shape) {
          const fieldSchema = schema.shape[key];
          newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
        }
        return new ZodObject({
          ...schema._def,
          shape: () => newShape
        });
      } else if (schema instanceof ZodArray) {
        return new ZodArray({
          ...schema._def,
          type: deepPartialify(schema.element)
        });
      } else if (schema instanceof ZodOptional) {
        return ZodOptional.create(deepPartialify(schema.unwrap()));
      } else if (schema instanceof ZodNullable) {
        return ZodNullable.create(deepPartialify(schema.unwrap()));
      } else if (schema instanceof ZodTuple) {
        return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
      } else {
        return schema;
      }
    }
    var ZodObject = class _ZodObject extends ZodType {
      constructor() {
        super(...arguments);
        this._cached = null;
        this.nonstrict = this.passthrough;
        this.augment = this.extend;
      }
      _getCached() {
        if (this._cached !== null)
          return this._cached;
        const shape = this._def.shape();
        const keys = util.objectKeys(shape);
        this._cached = { shape, keys };
        return this._cached;
      }
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.object) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(ctx2, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.object,
            received: ctx2.parsedType
          });
          return INVALID;
        }
        const { status, ctx } = this._processInputParams(input);
        const { shape, keys: shapeKeys } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
          for (const key in ctx.data) {
            if (!shapeKeys.includes(key)) {
              extraKeys.push(key);
            }
          }
        }
        const pairs = [];
        for (const key of shapeKeys) {
          const keyValidator = shape[key];
          const value = ctx.data[key];
          pairs.push({
            key: { status: "valid", value: key },
            value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
            alwaysSet: key in ctx.data
          });
        }
        if (this._def.catchall instanceof ZodNever) {
          const unknownKeys = this._def.unknownKeys;
          if (unknownKeys === "passthrough") {
            for (const key of extraKeys) {
              pairs.push({
                key: { status: "valid", value: key },
                value: { status: "valid", value: ctx.data[key] }
              });
            }
          } else if (unknownKeys === "strict") {
            if (extraKeys.length > 0) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.unrecognized_keys,
                keys: extraKeys
              });
              status.dirty();
            }
          } else if (unknownKeys === "strip") {
          } else {
            throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
          }
        } else {
          const catchall = this._def.catchall;
          for (const key of extraKeys) {
            const value = ctx.data[key];
            pairs.push({
              key: { status: "valid", value: key },
              value: catchall._parse(
                new ParseInputLazyPath(ctx, value, ctx.path, key)
                //, ctx.child(key), value, getParsedType(value)
              ),
              alwaysSet: key in ctx.data
            });
          }
        }
        if (ctx.common.async) {
          return Promise.resolve().then(async () => {
            const syncPairs = [];
            for (const pair of pairs) {
              const key = await pair.key;
              const value = await pair.value;
              syncPairs.push({
                key,
                value,
                alwaysSet: pair.alwaysSet
              });
            }
            return syncPairs;
          }).then((syncPairs) => {
            return ParseStatus.mergeObjectSync(status, syncPairs);
          });
        } else {
          return ParseStatus.mergeObjectSync(status, pairs);
        }
      }
      get shape() {
        return this._def.shape();
      }
      strict(message) {
        errorUtil.errToObj;
        return new _ZodObject({
          ...this._def,
          unknownKeys: "strict",
          ...message !== void 0 ? {
            errorMap: (issue, ctx) => {
              const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
              if (issue.code === "unrecognized_keys")
                return {
                  message: errorUtil.errToObj(message).message ?? defaultError
                };
              return {
                message: defaultError
              };
            }
          } : {}
        });
      }
      strip() {
        return new _ZodObject({
          ...this._def,
          unknownKeys: "strip"
        });
      }
      passthrough() {
        return new _ZodObject({
          ...this._def,
          unknownKeys: "passthrough"
        });
      }
      // const AugmentFactory =
      //   <Def extends ZodObjectDef>(def: Def) =>
      //   <Augmentation extends ZodRawShape>(
      //     augmentation: Augmentation
      //   ): ZodObject<
      //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
      //     Def["unknownKeys"],
      //     Def["catchall"]
      //   > => {
      //     return new ZodObject({
      //       ...def,
      //       shape: () => ({
      //         ...def.shape(),
      //         ...augmentation,
      //       }),
      //     }) as any;
      //   };
      extend(augmentation) {
        return new _ZodObject({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...augmentation
          })
        });
      }
      /**
       * Prior to zod@1.0.12 there was a bug in the
       * inferred type of merged objects. Please
       * upgrade if you are experiencing issues.
       */
      merge(merging) {
        const merged = new _ZodObject({
          unknownKeys: merging._def.unknownKeys,
          catchall: merging._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...merging._def.shape()
          }),
          typeName: ZodFirstPartyTypeKind.ZodObject
        });
        return merged;
      }
      // merge<
      //   Incoming extends AnyZodObject,
      //   Augmentation extends Incoming["shape"],
      //   NewOutput extends {
      //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
      //       ? Augmentation[k]["_output"]
      //       : k extends keyof Output
      //       ? Output[k]
      //       : never;
      //   },
      //   NewInput extends {
      //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
      //       ? Augmentation[k]["_input"]
      //       : k extends keyof Input
      //       ? Input[k]
      //       : never;
      //   }
      // >(
      //   merging: Incoming
      // ): ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"],
      //   NewOutput,
      //   NewInput
      // > {
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
      setKey(key, schema) {
        return this.augment({ [key]: schema });
      }
      // merge<Incoming extends AnyZodObject>(
      //   merging: Incoming
      // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
      // ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"]
      // > {
      //   // const mergedShape = objectUtil.mergeShapes(
      //   //   this._def.shape(),
      //   //   merging._def.shape()
      //   // );
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
      catchall(index) {
        return new _ZodObject({
          ...this._def,
          catchall: index
        });
      }
      pick(mask) {
        const shape = {};
        for (const key of util.objectKeys(mask)) {
          if (mask[key] && this.shape[key]) {
            shape[key] = this.shape[key];
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => shape
        });
      }
      omit(mask) {
        const shape = {};
        for (const key of util.objectKeys(this.shape)) {
          if (!mask[key]) {
            shape[key] = this.shape[key];
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => shape
        });
      }
      /**
       * @deprecated
       */
      deepPartial() {
        return deepPartialify(this);
      }
      partial(mask) {
        const newShape = {};
        for (const key of util.objectKeys(this.shape)) {
          const fieldSchema = this.shape[key];
          if (mask && !mask[key]) {
            newShape[key] = fieldSchema;
          } else {
            newShape[key] = fieldSchema.optional();
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => newShape
        });
      }
      required(mask) {
        const newShape = {};
        for (const key of util.objectKeys(this.shape)) {
          if (mask && !mask[key]) {
            newShape[key] = this.shape[key];
          } else {
            const fieldSchema = this.shape[key];
            let newField = fieldSchema;
            while (newField instanceof ZodOptional) {
              newField = newField._def.innerType;
            }
            newShape[key] = newField;
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => newShape
        });
      }
      keyof() {
        return createZodEnum(util.objectKeys(this.shape));
      }
    };
    ZodObject.create = (shape, params) => {
      return new ZodObject({
        shape: () => shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
      });
    };
    ZodObject.strictCreate = (shape, params) => {
      return new ZodObject({
        shape: () => shape,
        unknownKeys: "strict",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
      });
    };
    ZodObject.lazycreate = (shape, params) => {
      return new ZodObject({
        shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
      });
    };
    var ZodUnion = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const options = this._def.options;
        function handleResults(results) {
          for (const result of results) {
            if (result.result.status === "valid") {
              return result.result;
            }
          }
          for (const result of results) {
            if (result.result.status === "dirty") {
              ctx.common.issues.push(...result.ctx.common.issues);
              return result.result;
            }
          }
          const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_union,
            unionErrors
          });
          return INVALID;
        }
        if (ctx.common.async) {
          return Promise.all(options.map(async (option) => {
            const childCtx = {
              ...ctx,
              common: {
                ...ctx.common,
                issues: []
              },
              parent: null
            };
            return {
              result: await option._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: childCtx
              }),
              ctx: childCtx
            };
          })).then(handleResults);
        } else {
          let dirty = void 0;
          const issues = [];
          for (const option of options) {
            const childCtx = {
              ...ctx,
              common: {
                ...ctx.common,
                issues: []
              },
              parent: null
            };
            const result = option._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: childCtx
            });
            if (result.status === "valid") {
              return result;
            } else if (result.status === "dirty" && !dirty) {
              dirty = { result, ctx: childCtx };
            }
            if (childCtx.common.issues.length) {
              issues.push(childCtx.common.issues);
            }
          }
          if (dirty) {
            ctx.common.issues.push(...dirty.ctx.common.issues);
            return dirty.result;
          }
          const unionErrors = issues.map((issues2) => new ZodError(issues2));
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_union,
            unionErrors
          });
          return INVALID;
        }
      }
      get options() {
        return this._def.options;
      }
    };
    ZodUnion.create = (types, params) => {
      return new ZodUnion({
        options: types,
        typeName: ZodFirstPartyTypeKind.ZodUnion,
        ...processCreateParams(params)
      });
    };
    var getDiscriminator = (type) => {
      if (type instanceof ZodLazy) {
        return getDiscriminator(type.schema);
      } else if (type instanceof ZodEffects) {
        return getDiscriminator(type.innerType());
      } else if (type instanceof ZodLiteral) {
        return [type.value];
      } else if (type instanceof ZodEnum) {
        return type.options;
      } else if (type instanceof ZodNativeEnum) {
        return util.objectValues(type.enum);
      } else if (type instanceof ZodDefault) {
        return getDiscriminator(type._def.innerType);
      } else if (type instanceof ZodUndefined) {
        return [void 0];
      } else if (type instanceof ZodNull) {
        return [null];
      } else if (type instanceof ZodOptional) {
        return [void 0, ...getDiscriminator(type.unwrap())];
      } else if (type instanceof ZodNullable) {
        return [null, ...getDiscriminator(type.unwrap())];
      } else if (type instanceof ZodBranded) {
        return getDiscriminator(type.unwrap());
      } else if (type instanceof ZodReadonly) {
        return getDiscriminator(type.unwrap());
      } else if (type instanceof ZodCatch) {
        return getDiscriminator(type._def.innerType);
      } else {
        return [];
      }
    };
    var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.object,
            received: ctx.parsedType
          });
          return INVALID;
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.optionsMap.get(discriminatorValue);
        if (!option) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [discriminator]
          });
          return INVALID;
        }
        if (ctx.common.async) {
          return option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
        } else {
          return option._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
        }
      }
      get discriminator() {
        return this._def.discriminator;
      }
      get options() {
        return this._def.options;
      }
      get optionsMap() {
        return this._def.optionsMap;
      }
      /**
       * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
       * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
       * have a different value for each object in the union.
       * @param discriminator the name of the discriminator property
       * @param types an array of object schemas
       * @param params
       */
      static create(discriminator, options, params) {
        const optionsMap = /* @__PURE__ */ new Map();
        for (const type of options) {
          const discriminatorValues = getDiscriminator(type.shape[discriminator]);
          if (!discriminatorValues.length) {
            throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
          }
          for (const value of discriminatorValues) {
            if (optionsMap.has(value)) {
              throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
            }
            optionsMap.set(value, type);
          }
        }
        return new _ZodDiscriminatedUnion({
          typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
          discriminator,
          options,
          optionsMap,
          ...processCreateParams(params)
        });
      }
    };
    function mergeValues(a, b) {
      const aType = getParsedType(a);
      const bType = getParsedType(b);
      if (a === b) {
        return { valid: true, data: a };
      } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
        const bKeys = util.objectKeys(b);
        const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
        const newObj = { ...a, ...b };
        for (const key of sharedKeys) {
          const sharedValue = mergeValues(a[key], b[key]);
          if (!sharedValue.valid) {
            return { valid: false };
          }
          newObj[key] = sharedValue.data;
        }
        return { valid: true, data: newObj };
      } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
        if (a.length !== b.length) {
          return { valid: false };
        }
        const newArray = [];
        for (let index = 0; index < a.length; index++) {
          const itemA = a[index];
          const itemB = b[index];
          const sharedValue = mergeValues(itemA, itemB);
          if (!sharedValue.valid) {
            return { valid: false };
          }
          newArray.push(sharedValue.data);
        }
        return { valid: true, data: newArray };
      } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
        return { valid: true, data: a };
      } else {
        return { valid: false };
      }
    }
    var ZodIntersection = class extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const handleParsed = (parsedLeft, parsedRight) => {
          if (isAborted(parsedLeft) || isAborted(parsedRight)) {
            return INVALID;
          }
          const merged = mergeValues(parsedLeft.value, parsedRight.value);
          if (!merged.valid) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_intersection_types
            });
            return INVALID;
          }
          if (isDirty(parsedLeft) || isDirty(parsedRight)) {
            status.dirty();
          }
          return { status: status.value, value: merged.data };
        };
        if (ctx.common.async) {
          return Promise.all([
            this._def.left._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            }),
            this._def.right._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            })
          ]).then(([left, right]) => handleParsed(left, right));
        } else {
          return handleParsed(this._def.left._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }), this._def.right._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }));
        }
      }
    };
    ZodIntersection.create = (left, right, params) => {
      return new ZodIntersection({
        left,
        right,
        typeName: ZodFirstPartyTypeKind.ZodIntersection,
        ...processCreateParams(params)
      });
    };
    var ZodTuple = class _ZodTuple extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.array) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.array,
            received: ctx.parsedType
          });
          return INVALID;
        }
        if (ctx.data.length < this._def.items.length) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: this._def.items.length,
            inclusive: true,
            exact: false,
            type: "array"
          });
          return INVALID;
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: this._def.items.length,
            inclusive: true,
            exact: false,
            type: "array"
          });
          status.dirty();
        }
        const items = [...ctx.data].map((item, itemIndex) => {
          const schema = this._def.items[itemIndex] || this._def.rest;
          if (!schema)
            return null;
          return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
        }).filter((x) => !!x);
        if (ctx.common.async) {
          return Promise.all(items).then((results) => {
            return ParseStatus.mergeArray(status, results);
          });
        } else {
          return ParseStatus.mergeArray(status, items);
        }
      }
      get items() {
        return this._def.items;
      }
      rest(rest) {
        return new _ZodTuple({
          ...this._def,
          rest
        });
      }
    };
    ZodTuple.create = (schemas, params) => {
      if (!Array.isArray(schemas)) {
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      }
      return new ZodTuple({
        items: schemas,
        typeName: ZodFirstPartyTypeKind.ZodTuple,
        rest: null,
        ...processCreateParams(params)
      });
    };
    var ZodRecord = class _ZodRecord extends ZodType {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.object,
            received: ctx.parsedType
          });
          return INVALID;
        }
        const pairs = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for (const key in ctx.data) {
          pairs.push({
            key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
            value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
            alwaysSet: key in ctx.data
          });
        }
        if (ctx.common.async) {
          return ParseStatus.mergeObjectAsync(status, pairs);
        } else {
          return ParseStatus.mergeObjectSync(status, pairs);
        }
      }
      get element() {
        return this._def.valueType;
      }
      static create(first, second, third) {
        if (second instanceof ZodType) {
          return new _ZodRecord({
            keyType: first,
            valueType: second,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(third)
          });
        }
        return new _ZodRecord({
          keyType: ZodString.create(),
          valueType: first,
          typeName: ZodFirstPartyTypeKind.ZodRecord,
          ...processCreateParams(second)
        });
      }
    };
    var ZodMap = class extends ZodType {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.map) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.map,
            received: ctx.parsedType
          });
          return INVALID;
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs = [...ctx.data.entries()].map(([key, value], index) => {
          return {
            key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
            value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
          };
        });
        if (ctx.common.async) {
          const finalMap = /* @__PURE__ */ new Map();
          return Promise.resolve().then(async () => {
            for (const pair of pairs) {
              const key = await pair.key;
              const value = await pair.value;
              if (key.status === "aborted" || value.status === "aborted") {
                return INVALID;
              }
              if (key.status === "dirty" || value.status === "dirty") {
                status.dirty();
              }
              finalMap.set(key.value, value.value);
            }
            return { status: status.value, value: finalMap };
          });
        } else {
          const finalMap = /* @__PURE__ */ new Map();
          for (const pair of pairs) {
            const key = pair.key;
            const value = pair.value;
            if (key.status === "aborted" || value.status === "aborted") {
              return INVALID;
            }
            if (key.status === "dirty" || value.status === "dirty") {
              status.dirty();
            }
            finalMap.set(key.value, value.value);
          }
          return { status: status.value, value: finalMap };
        }
      }
    };
    ZodMap.create = (keyType, valueType, params) => {
      return new ZodMap({
        valueType,
        keyType,
        typeName: ZodFirstPartyTypeKind.ZodMap,
        ...processCreateParams(params)
      });
    };
    var ZodSet = class _ZodSet extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.set) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.set,
            received: ctx.parsedType
          });
          return INVALID;
        }
        const def = this._def;
        if (def.minSize !== null) {
          if (ctx.data.size < def.minSize.value) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: def.minSize.value,
              type: "set",
              inclusive: true,
              exact: false,
              message: def.minSize.message
            });
            status.dirty();
          }
        }
        if (def.maxSize !== null) {
          if (ctx.data.size > def.maxSize.value) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: def.maxSize.value,
              type: "set",
              inclusive: true,
              exact: false,
              message: def.maxSize.message
            });
            status.dirty();
          }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements2) {
          const parsedSet = /* @__PURE__ */ new Set();
          for (const element of elements2) {
            if (element.status === "aborted")
              return INVALID;
            if (element.status === "dirty")
              status.dirty();
            parsedSet.add(element.value);
          }
          return { status: status.value, value: parsedSet };
        }
        const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
        if (ctx.common.async) {
          return Promise.all(elements).then((elements2) => finalizeSet(elements2));
        } else {
          return finalizeSet(elements);
        }
      }
      min(minSize, message) {
        return new _ZodSet({
          ...this._def,
          minSize: { value: minSize, message: errorUtil.toString(message) }
        });
      }
      max(maxSize, message) {
        return new _ZodSet({
          ...this._def,
          maxSize: { value: maxSize, message: errorUtil.toString(message) }
        });
      }
      size(size, message) {
        return this.min(size, message).max(size, message);
      }
      nonempty(message) {
        return this.min(1, message);
      }
    };
    ZodSet.create = (valueType, params) => {
      return new ZodSet({
        valueType,
        minSize: null,
        maxSize: null,
        typeName: ZodFirstPartyTypeKind.ZodSet,
        ...processCreateParams(params)
      });
    };
    var ZodFunction = class _ZodFunction extends ZodType {
      constructor() {
        super(...arguments);
        this.validate = this.implement;
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.function) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.function,
            received: ctx.parsedType
          });
          return INVALID;
        }
        function makeArgsIssue(args, error) {
          return makeIssue({
            data: args,
            path: ctx.path,
            errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
            issueData: {
              code: ZodIssueCode.invalid_arguments,
              argumentsError: error
            }
          });
        }
        function makeReturnsIssue(returns, error) {
          return makeIssue({
            data: returns,
            path: ctx.path,
            errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
            issueData: {
              code: ZodIssueCode.invalid_return_type,
              returnTypeError: error
            }
          });
        }
        const params = { errorMap: ctx.common.contextualErrorMap };
        const fn = ctx.data;
        if (this._def.returns instanceof ZodPromise) {
          const me = this;
          return OK(async function(...args) {
            const error = new ZodError([]);
            const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
              error.addIssue(makeArgsIssue(args, e));
              throw error;
            });
            const result = await Reflect.apply(fn, this, parsedArgs);
            const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
              error.addIssue(makeReturnsIssue(result, e));
              throw error;
            });
            return parsedReturns;
          });
        } else {
          const me = this;
          return OK(function(...args) {
            const parsedArgs = me._def.args.safeParse(args, params);
            if (!parsedArgs.success) {
              throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
            }
            const result = Reflect.apply(fn, this, parsedArgs.data);
            const parsedReturns = me._def.returns.safeParse(result, params);
            if (!parsedReturns.success) {
              throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
            }
            return parsedReturns.data;
          });
        }
      }
      parameters() {
        return this._def.args;
      }
      returnType() {
        return this._def.returns;
      }
      args(...items) {
        return new _ZodFunction({
          ...this._def,
          args: ZodTuple.create(items).rest(ZodUnknown.create())
        });
      }
      returns(returnType) {
        return new _ZodFunction({
          ...this._def,
          returns: returnType
        });
      }
      implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
      }
      strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
      }
      static create(args, returns, params) {
        return new _ZodFunction({
          args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
          returns: returns || ZodUnknown.create(),
          typeName: ZodFirstPartyTypeKind.ZodFunction,
          ...processCreateParams(params)
        });
      }
    };
    var ZodLazy = class extends ZodType {
      get schema() {
        return this._def.getter();
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
      }
    };
    ZodLazy.create = (getter, params) => {
      return new ZodLazy({
        getter,
        typeName: ZodFirstPartyTypeKind.ZodLazy,
        ...processCreateParams(params)
      });
    };
    var ZodLiteral = class extends ZodType {
      _parse(input) {
        if (input.data !== this._def.value) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            received: ctx.data,
            code: ZodIssueCode.invalid_literal,
            expected: this._def.value
          });
          return INVALID;
        }
        return { status: "valid", value: input.data };
      }
      get value() {
        return this._def.value;
      }
    };
    ZodLiteral.create = (value, params) => {
      return new ZodLiteral({
        value,
        typeName: ZodFirstPartyTypeKind.ZodLiteral,
        ...processCreateParams(params)
      });
    };
    function createZodEnum(values, params) {
      return new ZodEnum({
        values,
        typeName: ZodFirstPartyTypeKind.ZodEnum,
        ...processCreateParams(params)
      });
    }
    var ZodEnum = class _ZodEnum extends ZodType {
      _parse(input) {
        if (typeof input.data !== "string") {
          const ctx = this._getOrReturnCtx(input);
          const expectedValues = this._def.values;
          addIssueToContext(ctx, {
            expected: util.joinValues(expectedValues),
            received: ctx.parsedType,
            code: ZodIssueCode.invalid_type
          });
          return INVALID;
        }
        if (!this._cache) {
          this._cache = new Set(this._def.values);
        }
        if (!this._cache.has(input.data)) {
          const ctx = this._getOrReturnCtx(input);
          const expectedValues = this._def.values;
          addIssueToContext(ctx, {
            received: ctx.data,
            code: ZodIssueCode.invalid_enum_value,
            options: expectedValues
          });
          return INVALID;
        }
        return OK(input.data);
      }
      get options() {
        return this._def.values;
      }
      get enum() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      get Values() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      get Enum() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      extract(values, newDef = this._def) {
        return _ZodEnum.create(values, {
          ...this._def,
          ...newDef
        });
      }
      exclude(values, newDef = this._def) {
        return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
          ...this._def,
          ...newDef
        });
      }
    };
    ZodEnum.create = createZodEnum;
    var ZodNativeEnum = class extends ZodType {
      _parse(input) {
        const nativeEnumValues = util.getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
          const expectedValues = util.objectValues(nativeEnumValues);
          addIssueToContext(ctx, {
            expected: util.joinValues(expectedValues),
            received: ctx.parsedType,
            code: ZodIssueCode.invalid_type
          });
          return INVALID;
        }
        if (!this._cache) {
          this._cache = new Set(util.getValidEnumValues(this._def.values));
        }
        if (!this._cache.has(input.data)) {
          const expectedValues = util.objectValues(nativeEnumValues);
          addIssueToContext(ctx, {
            received: ctx.data,
            code: ZodIssueCode.invalid_enum_value,
            options: expectedValues
          });
          return INVALID;
        }
        return OK(input.data);
      }
      get enum() {
        return this._def.values;
      }
    };
    ZodNativeEnum.create = (values, params) => {
      return new ZodNativeEnum({
        values,
        typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
        ...processCreateParams(params)
      });
    };
    var ZodPromise = class extends ZodType {
      unwrap() {
        return this._def.type;
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.promise,
            received: ctx.parsedType
          });
          return INVALID;
        }
        const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
        return OK(promisified.then((data) => {
          return this._def.type.parseAsync(data, {
            path: ctx.path,
            errorMap: ctx.common.contextualErrorMap
          });
        }));
      }
    };
    ZodPromise.create = (schema, params) => {
      return new ZodPromise({
        type: schema,
        typeName: ZodFirstPartyTypeKind.ZodPromise,
        ...processCreateParams(params)
      });
    };
    var ZodEffects = class extends ZodType {
      innerType() {
        return this._def.schema;
      }
      sourceType() {
        return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const effect = this._def.effect || null;
        const checkCtx = {
          addIssue: (arg) => {
            addIssueToContext(ctx, arg);
            if (arg.fatal) {
              status.abort();
            } else {
              status.dirty();
            }
          },
          get path() {
            return ctx.path;
          }
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "preprocess") {
          const processed = effect.transform(ctx.data, checkCtx);
          if (ctx.common.async) {
            return Promise.resolve(processed).then(async (processed2) => {
              if (status.value === "aborted")
                return INVALID;
              const result = await this._def.schema._parseAsync({
                data: processed2,
                path: ctx.path,
                parent: ctx
              });
              if (result.status === "aborted")
                return INVALID;
              if (result.status === "dirty")
                return DIRTY(result.value);
              if (status.value === "dirty")
                return DIRTY(result.value);
              return result;
            });
          } else {
            if (status.value === "aborted")
              return INVALID;
            const result = this._def.schema._parseSync({
              data: processed,
              path: ctx.path,
              parent: ctx
            });
            if (result.status === "aborted")
              return INVALID;
            if (result.status === "dirty")
              return DIRTY(result.value);
            if (status.value === "dirty")
              return DIRTY(result.value);
            return result;
          }
        }
        if (effect.type === "refinement") {
          const executeRefinement = (acc) => {
            const result = effect.refinement(acc, checkCtx);
            if (ctx.common.async) {
              return Promise.resolve(result);
            }
            if (result instanceof Promise) {
              throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            }
            return acc;
          };
          if (ctx.common.async === false) {
            const inner = this._def.schema._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (inner.status === "aborted")
              return INVALID;
            if (inner.status === "dirty")
              status.dirty();
            executeRefinement(inner.value);
            return { status: status.value, value: inner.value };
          } else {
            return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
              if (inner.status === "aborted")
                return INVALID;
              if (inner.status === "dirty")
                status.dirty();
              return executeRefinement(inner.value).then(() => {
                return { status: status.value, value: inner.value };
              });
            });
          }
        }
        if (effect.type === "transform") {
          if (ctx.common.async === false) {
            const base = this._def.schema._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (!isValid(base))
              return INVALID;
            const result = effect.transform(base.value, checkCtx);
            if (result instanceof Promise) {
              throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
            }
            return { status: status.value, value: result };
          } else {
            return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
              if (!isValid(base))
                return INVALID;
              return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
                status: status.value,
                value: result
              }));
            });
          }
        }
        util.assertNever(effect);
      }
    };
    ZodEffects.create = (schema, effect, params) => {
      return new ZodEffects({
        schema,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect,
        ...processCreateParams(params)
      });
    };
    ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
      return new ZodEffects({
        schema,
        effect: { type: "preprocess", transform: preprocess },
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        ...processCreateParams(params)
      });
    };
    var ZodOptional = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.undefined) {
          return OK(void 0);
        }
        return this._def.innerType._parse(input);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodOptional.create = (type, params) => {
      return new ZodOptional({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodOptional,
        ...processCreateParams(params)
      });
    };
    var ZodNullable = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.null) {
          return OK(null);
        }
        return this._def.innerType._parse(input);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodNullable.create = (type, params) => {
      return new ZodNullable({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodNullable,
        ...processCreateParams(params)
      });
    };
    var ZodDefault = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === ZodParsedType.undefined) {
          data = this._def.defaultValue();
        }
        return this._def.innerType._parse({
          data,
          path: ctx.path,
          parent: ctx
        });
      }
      removeDefault() {
        return this._def.innerType;
      }
    };
    ZodDefault.create = (type, params) => {
      return new ZodDefault({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodDefault,
        defaultValue: typeof params.default === "function" ? params.default : () => params.default,
        ...processCreateParams(params)
      });
    };
    var ZodCatch = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const newCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          }
        };
        const result = this._def.innerType._parse({
          data: newCtx.data,
          path: newCtx.path,
          parent: {
            ...newCtx
          }
        });
        if (isAsync(result)) {
          return result.then((result2) => {
            return {
              status: "valid",
              value: result2.status === "valid" ? result2.value : this._def.catchValue({
                get error() {
                  return new ZodError(newCtx.common.issues);
                },
                input: newCtx.data
              })
            };
          });
        } else {
          return {
            status: "valid",
            value: result.status === "valid" ? result.value : this._def.catchValue({
              get error() {
                return new ZodError(newCtx.common.issues);
              },
              input: newCtx.data
            })
          };
        }
      }
      removeCatch() {
        return this._def.innerType;
      }
    };
    ZodCatch.create = (type, params) => {
      return new ZodCatch({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodCatch,
        catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
        ...processCreateParams(params)
      });
    };
    var ZodNaN = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.nan) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.nan,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return { status: "valid", value: input.data };
      }
    };
    ZodNaN.create = (params) => {
      return new ZodNaN({
        typeName: ZodFirstPartyTypeKind.ZodNaN,
        ...processCreateParams(params)
      });
    };
    var BRAND = Symbol("zod_brand");
    var ZodBranded = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
          data,
          path: ctx.path,
          parent: ctx
        });
      }
      unwrap() {
        return this._def.type;
      }
    };
    var ZodPipeline = class _ZodPipeline extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.common.async) {
          const handleAsync = async () => {
            const inResult = await this._def.in._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (inResult.status === "aborted")
              return INVALID;
            if (inResult.status === "dirty") {
              status.dirty();
              return DIRTY(inResult.value);
            } else {
              return this._def.out._parseAsync({
                data: inResult.value,
                path: ctx.path,
                parent: ctx
              });
            }
          };
          return handleAsync();
        } else {
          const inResult = this._def.in._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inResult.status === "aborted")
            return INVALID;
          if (inResult.status === "dirty") {
            status.dirty();
            return {
              status: "dirty",
              value: inResult.value
            };
          } else {
            return this._def.out._parseSync({
              data: inResult.value,
              path: ctx.path,
              parent: ctx
            });
          }
        }
      }
      static create(a, b) {
        return new _ZodPipeline({
          in: a,
          out: b,
          typeName: ZodFirstPartyTypeKind.ZodPipeline
        });
      }
    };
    var ZodReadonly = class extends ZodType {
      _parse(input) {
        const result = this._def.innerType._parse(input);
        const freeze = (data) => {
          if (isValid(data)) {
            data.value = Object.freeze(data.value);
          }
          return data;
        };
        return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodReadonly.create = (type, params) => {
      return new ZodReadonly({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodReadonly,
        ...processCreateParams(params)
      });
    };
    function cleanParams(params, data) {
      const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
      const p2 = typeof p === "string" ? { message: p } : p;
      return p2;
    }
    function custom(check, _params = {}, fatal) {
      if (check)
        return ZodAny.create().superRefine((data, ctx) => {
          const r = check(data);
          if (r instanceof Promise) {
            return r.then((r2) => {
              if (!r2) {
                const params = cleanParams(_params, data);
                const _fatal = params.fatal ?? fatal ?? true;
                ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
              }
            });
          }
          if (!r) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
          return;
        });
      return ZodAny.create();
    }
    var late = {
      object: ZodObject.lazycreate
    };
    var ZodFirstPartyTypeKind;
    (function(ZodFirstPartyTypeKind5) {
      ZodFirstPartyTypeKind5["ZodString"] = "ZodString";
      ZodFirstPartyTypeKind5["ZodNumber"] = "ZodNumber";
      ZodFirstPartyTypeKind5["ZodNaN"] = "ZodNaN";
      ZodFirstPartyTypeKind5["ZodBigInt"] = "ZodBigInt";
      ZodFirstPartyTypeKind5["ZodBoolean"] = "ZodBoolean";
      ZodFirstPartyTypeKind5["ZodDate"] = "ZodDate";
      ZodFirstPartyTypeKind5["ZodSymbol"] = "ZodSymbol";
      ZodFirstPartyTypeKind5["ZodUndefined"] = "ZodUndefined";
      ZodFirstPartyTypeKind5["ZodNull"] = "ZodNull";
      ZodFirstPartyTypeKind5["ZodAny"] = "ZodAny";
      ZodFirstPartyTypeKind5["ZodUnknown"] = "ZodUnknown";
      ZodFirstPartyTypeKind5["ZodNever"] = "ZodNever";
      ZodFirstPartyTypeKind5["ZodVoid"] = "ZodVoid";
      ZodFirstPartyTypeKind5["ZodArray"] = "ZodArray";
      ZodFirstPartyTypeKind5["ZodObject"] = "ZodObject";
      ZodFirstPartyTypeKind5["ZodUnion"] = "ZodUnion";
      ZodFirstPartyTypeKind5["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
      ZodFirstPartyTypeKind5["ZodIntersection"] = "ZodIntersection";
      ZodFirstPartyTypeKind5["ZodTuple"] = "ZodTuple";
      ZodFirstPartyTypeKind5["ZodRecord"] = "ZodRecord";
      ZodFirstPartyTypeKind5["ZodMap"] = "ZodMap";
      ZodFirstPartyTypeKind5["ZodSet"] = "ZodSet";
      ZodFirstPartyTypeKind5["ZodFunction"] = "ZodFunction";
      ZodFirstPartyTypeKind5["ZodLazy"] = "ZodLazy";
      ZodFirstPartyTypeKind5["ZodLiteral"] = "ZodLiteral";
      ZodFirstPartyTypeKind5["ZodEnum"] = "ZodEnum";
      ZodFirstPartyTypeKind5["ZodEffects"] = "ZodEffects";
      ZodFirstPartyTypeKind5["ZodNativeEnum"] = "ZodNativeEnum";
      ZodFirstPartyTypeKind5["ZodOptional"] = "ZodOptional";
      ZodFirstPartyTypeKind5["ZodNullable"] = "ZodNullable";
      ZodFirstPartyTypeKind5["ZodDefault"] = "ZodDefault";
      ZodFirstPartyTypeKind5["ZodCatch"] = "ZodCatch";
      ZodFirstPartyTypeKind5["ZodPromise"] = "ZodPromise";
      ZodFirstPartyTypeKind5["ZodBranded"] = "ZodBranded";
      ZodFirstPartyTypeKind5["ZodPipeline"] = "ZodPipeline";
      ZodFirstPartyTypeKind5["ZodReadonly"] = "ZodReadonly";
    })(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
    var instanceOfType = (cls, params = {
      message: `Input not instance of ${cls.name}`
    }) => custom((data) => data instanceof cls, params);
    var stringType = ZodString.create;
    var numberType = ZodNumber.create;
    var nanType = ZodNaN.create;
    var bigIntType = ZodBigInt.create;
    var booleanType = ZodBoolean.create;
    var dateType = ZodDate.create;
    var symbolType = ZodSymbol.create;
    var undefinedType = ZodUndefined.create;
    var nullType = ZodNull.create;
    var anyType = ZodAny.create;
    var unknownType = ZodUnknown.create;
    var neverType = ZodNever.create;
    var voidType = ZodVoid.create;
    var arrayType = ZodArray.create;
    var objectType = ZodObject.create;
    var strictObjectType = ZodObject.strictCreate;
    var unionType = ZodUnion.create;
    var discriminatedUnionType = ZodDiscriminatedUnion.create;
    var intersectionType = ZodIntersection.create;
    var tupleType = ZodTuple.create;
    var recordType = ZodRecord.create;
    var mapType = ZodMap.create;
    var setType = ZodSet.create;
    var functionType = ZodFunction.create;
    var lazyType = ZodLazy.create;
    var literalType = ZodLiteral.create;
    var enumType = ZodEnum.create;
    var nativeEnumType = ZodNativeEnum.create;
    var promiseType = ZodPromise.create;
    var effectsType = ZodEffects.create;
    var optionalType = ZodOptional.create;
    var nullableType = ZodNullable.create;
    var preprocessType = ZodEffects.createWithPreprocess;
    var pipelineType = ZodPipeline.create;
    var ostring = () => stringType().optional();
    var onumber = () => numberType().optional();
    var oboolean = () => booleanType().optional();
    var coerce = {
      string: (arg) => ZodString.create({ ...arg, coerce: true }),
      number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
      boolean: (arg) => ZodBoolean.create({
        ...arg,
        coerce: true
      }),
      bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
      date: (arg) => ZodDate.create({ ...arg, coerce: true })
    };
    var NEVER = INVALID;
    var usageDataSchema = external_exports.object({
      provider: external_exports.string().min(1, "Provider is required"),
      model: external_exports.string().min(1, "Model is required"),
      inputTokens: external_exports.number().int().nonnegative("Input tokens must be non-negative"),
      outputTokens: external_exports.number().int().nonnegative("Output tokens must be non-negative"),
      cachedTokens: external_exports.number().int().nonnegative().optional(),
      latencyMs: external_exports.number().nonnegative().optional()
    });
    var pricingContextSchema = external_exports.object({
      tier: external_exports.string().optional(),
      currency: external_exports.string().length(3).default("USD"),
      customPricing: external_exports.object({
        inputPricePerToken: external_exports.number().nonnegative().optional(),
        outputPricePerToken: external_exports.number().nonnegative().optional(),
        cachedPricePerToken: external_exports.number().nonnegative().optional()
      }).optional()
    });
    var attributionDimensionsSchema = external_exports.object({
      userId: external_exports.string().optional(),
      projectId: external_exports.string().optional(),
      organizationId: external_exports.string().optional(),
      environment: external_exports.string().optional(),
      tags: external_exports.record(external_exports.string(), external_exports.string()).optional()
    });
    var costAttributionInputSchema = external_exports.object({
      requestId: external_exports.string().uuid("Request ID must be a valid UUID"),
      timestamp: external_exports.string().datetime("Timestamp must be ISO 8601 format"),
      usage: usageDataSchema,
      pricingContext: pricingContextSchema.optional(),
      dimensions: attributionDimensionsSchema.optional()
    });
    var costBreakdownSchema = external_exports.object({
      totalCost: external_exports.number().nonnegative(),
      inputCost: external_exports.number().nonnegative(),
      outputCost: external_exports.number().nonnegative(),
      cachedCost: external_exports.number().nonnegative().optional(),
      currency: external_exports.string().length(3),
      costPer1kTokens: external_exports.number().nonnegative()
    });
    var attributionResultSchema = external_exports.object({
      primary: external_exports.string(),
      dimensions: external_exports.object({
        userId: external_exports.string().optional(),
        projectId: external_exports.string().optional(),
        organizationId: external_exports.string().optional(),
        environment: external_exports.string().optional()
      }),
      tags: external_exports.record(external_exports.string(), external_exports.string()),
      confidence: external_exports.number().min(0).max(1)
    });
    var decisionEventMetadataSchema = external_exports.object({
      eventId: external_exports.string().uuid(),
      eventType: external_exports.literal("cost_attribution"),
      timestamp: external_exports.string().datetime(),
      agentId: external_exports.string(),
      decision: external_exports.object({
        action: external_exports.literal("attribute_cost"),
        result: external_exports.enum(["success", "error"]),
        confidence: external_exports.number().min(0).max(1)
      }),
      context: external_exports.object({
        provider: external_exports.string(),
        model: external_exports.string(),
        totalTokens: external_exports.number().int().nonnegative(),
        totalCost: external_exports.number().nonnegative()
      })
    });
    var telemetryMetadataSchema = external_exports.object({
      telemetryId: external_exports.string().uuid(),
      agentId: external_exports.string(),
      timestamp: external_exports.string().datetime(),
      metrics: external_exports.object({
        processingDurationMs: external_exports.number().nonnegative(),
        accuracy: external_exports.number().min(0).max(1).optional(),
        dimensionCount: external_exports.number().int().nonnegative()
      }),
      trace: external_exports.object({
        traceId: external_exports.string(),
        spanId: external_exports.string()
      }).optional()
    });
    var costAttributionOutputSchema = external_exports.object({
      requestId: external_exports.string().uuid(),
      analysisTimestamp: external_exports.string().datetime(),
      costs: costBreakdownSchema,
      attribution: attributionResultSchema,
      decisionEvent: decisionEventMetadataSchema,
      telemetry: telemetryMetadataSchema
    });
    var validationErrorSchema = external_exports.object({
      field: external_exports.string(),
      message: external_exports.string(),
      value: external_exports.unknown().optional()
    });
    var errorResponseSchema = external_exports.object({
      error: external_exports.object({
        code: external_exports.string(),
        message: external_exports.string(),
        details: external_exports.array(validationErrorSchema).optional()
      }),
      requestId: external_exports.string().optional(),
      timestamp: external_exports.string().datetime()
    });
    function sendSuccess(res, output) {
      res.status(200).json(output);
    }
    function sendError(res, statusCode, code, message, details, requestId) {
      const errorResponse = {
        error: {
          code,
          message,
          details
        },
        requestId,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      };
      res.status(statusCode).json(errorResponse);
    }
    function sendValidationError(res, message, details, requestId) {
      sendError(res, 400, "VALIDATION_ERROR", message, details, requestId);
    }
    function sendRateLimitError(res, message = "Rate limit exceeded", requestId) {
      sendError(res, 429, "RATE_LIMIT_EXCEEDED", message, void 0, requestId);
    }
    var rateLimitStore = /* @__PURE__ */ new Map();
    var RATE_LIMIT_WINDOW_MS = 6e4;
    var RATE_LIMIT_MAX_REQUESTS = 100;
    function validateInput(req, res) {
      try {
        const input = costAttributionInputSchema.parse(req.body);
        return input;
      } catch (error) {
        if (error instanceof ZodError) {
          const details = error.errors.map((err) => ({
            field: err.path.join("."),
            message: err.message,
            value: err.code === "invalid_type" ? void 0 : err.input
          }));
          sendValidationError(
            res,
            "Invalid input data",
            details,
            req.body?.requestId
          );
          return null;
        }
        sendValidationError(res, "Invalid request body", void 0, req.body?.requestId);
        return null;
      }
    }
    function checkRateLimit(req, res) {
      const ip = getClientIp(req);
      const now = Date.now();
      let requestHistory = rateLimitStore.get(ip) || [];
      requestHistory = requestHistory.filter(
        (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
      );
      if (requestHistory.length >= RATE_LIMIT_MAX_REQUESTS) {
        sendRateLimitError(res, "Rate limit exceeded. Maximum 100 requests per minute.", req.body?.requestId);
        return false;
      }
      requestHistory.push(now);
      rateLimitStore.set(ip, requestHistory);
      if (Math.random() < 0.01) {
        cleanupRateLimitStore();
      }
      return true;
    }
    function getClientIp(req) {
      const forwarded = req.headers["x-forwarded-for"];
      if (typeof forwarded === "string") {
        return forwarded.split(",")[0].trim();
      }
      const realIp = req.headers["x-real-ip"];
      if (typeof realIp === "string") {
        return realIp;
      }
      return req.ip || "unknown";
    }
    function cleanupRateLimitStore() {
      const now = Date.now();
      const cutoff = now - RATE_LIMIT_WINDOW_MS;
      for (const [ip, timestamps] of rateLimitStore.entries()) {
        const validTimestamps = timestamps.filter((ts) => ts > cutoff);
        if (validTimestamps.length === 0) {
          rateLimitStore.delete(ip);
        } else {
          rateLimitStore.set(ip, validTimestamps);
        }
      }
    }
    function logRequest(req, requestId, level = "info") {
      const log3 = {
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        level,
        requestId,
        method: req.method,
        path: req.path,
        ip: getClientIp(req),
        userAgent: req.headers["user-agent"]
      };
      console.log(JSON.stringify(log3));
    }
    function handleError(error, res, requestId) {
      console.error({
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        level: "error",
        requestId,
        error: error instanceof Error ? error.message : "Unknown error",
        stack: error instanceof Error ? error.stack : void 0
      });
      const message = error instanceof Error ? error.message : "An unexpected error occurred";
      res.status(500).json({
        error: {
          code: "INTERNAL_ERROR",
          message
        },
        requestId,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    }
    function validateMethod(req, res) {
      if (req.method !== "POST") {
        res.status(405).json({
          error: {
            code: "METHOD_NOT_ALLOWED",
            message: "Only POST method is allowed"
          },
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        });
        return false;
      }
      return true;
    }
    function setCorsHeaders(res) {
      res.set("Access-Control-Allow-Origin", "*");
      res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
      res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
      res.set("Access-Control-Max-Age", "3600");
    }
    function handleOptions(req, res) {
      if (req.method === "OPTIONS") {
        setCorsHeaders(res);
        res.status(204).send("");
        return true;
      }
      return false;
    }
    var AGENT_ID = process.env.AGENT_ID || "cost-attribution-agent";
    var RUVECTOR_SERVICE_URL = process.env.RUVECTOR_SERVICE_URL;
    var OBSERVATORY_URL = process.env.OBSERVATORY_URL;
    var costCalculator = new CostCalculator();
    var costAttributor = new CostAttributor();
    async function costAttributionHandler(req, res) {
      const startTime = Date.now();
      try {
        setCorsHeaders(res);
        if (handleOptions(req, res)) {
          return;
        }
        if (!validateMethod(req, res)) {
          return;
        }
        if (!checkRateLimit(req, res)) {
          return;
        }
        const input = validateInput(req, res);
        if (!input) {
          return;
        }
        logRequest(req, input.requestId, "info");
        const costs = costCalculator.calculate(input.usage, input.pricingContext);
        const attribution = costAttributor.attribute(input.dimensions);
        const eventId = (0, import_crypto.randomUUID)();
        const telemetryId = (0, import_crypto.randomUUID)();
        const analysisTimestamp = (/* @__PURE__ */ new Date()).toISOString();
        const processingDurationMs = Date.now() - startTime;
        const decisionEvent = {
          eventId,
          eventType: "cost_attribution",
          timestamp: analysisTimestamp,
          agentId: AGENT_ID,
          decision: {
            action: "attribute_cost",
            result: "success",
            confidence: attribution.confidence
          },
          context: {
            provider: input.usage.provider,
            model: input.usage.model,
            totalTokens: input.usage.inputTokens + input.usage.outputTokens + (input.usage.cachedTokens || 0),
            totalCost: costs.totalCost
          }
        };
        const telemetry = {
          telemetryId,
          agentId: AGENT_ID,
          timestamp: analysisTimestamp,
          metrics: {
            processingDurationMs,
            dimensionCount: Object.values(attribution.dimensions).filter(Boolean).length
          },
          trace: req.headers["x-cloud-trace-context"] ? {
            traceId: req.headers["x-cloud-trace-context"],
            spanId: (0, import_crypto.randomUUID)()
          } : void 0
        };
        const output = {
          requestId: input.requestId,
          analysisTimestamp,
          costs,
          attribution,
          decisionEvent,
          telemetry
        };
        if (RUVECTOR_SERVICE_URL) {
          emitDecisionEvent(decisionEvent, output).catch((error) => {
            console.error("Failed to emit decision event:", error);
          });
        }
        if (OBSERVATORY_URL) {
          emitTelemetry(telemetry, output).catch((error) => {
            console.error("Failed to emit telemetry:", error);
          });
        }
        sendSuccess(res, output);
      } catch (error) {
        handleError(error, res, req.body?.requestId);
      }
    }
    async function emitDecisionEvent(event, output) {
      if (!RUVECTOR_SERVICE_URL) {
        return;
      }
      const payload = {
        event,
        data: {
          requestId: output.requestId,
          costs: output.costs,
          attribution: output.attribution
        }
      };
      const response = await fetch(`${RUVECTOR_SERVICE_URL}/events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(5e3)
        // 5 second timeout
      });
      if (!response.ok) {
        throw new Error(
          `Failed to emit decision event: ${response.status} ${response.statusText}`
        );
      }
    }
    async function emitTelemetry(telemetry, output) {
      if (!OBSERVATORY_URL) {
        return;
      }
      const payload = {
        telemetry,
        agent: {
          id: AGENT_ID,
          type: "cost-attribution",
          version: process.env.AGENT_VERSION || "1.0.0"
        },
        metrics: {
          ...telemetry.metrics,
          costMetrics: {
            totalCost: output.costs.totalCost,
            currency: output.costs.currency,
            costPer1kTokens: output.costs.costPer1kTokens
          }
        }
      };
      const response = await fetch(`${OBSERVATORY_URL}/telemetry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(5e3)
        // 5 second timeout
      });
      if (!response.ok) {
        throw new Error(
          `Failed to emit telemetry: ${response.status} ${response.statusText}`
        );
      }
    }
    var import_crypto2 = require("crypto");
    var external_exports2 = {};
    __export(external_exports2, {
      BRAND: () => BRAND2,
      DIRTY: () => DIRTY2,
      EMPTY_PATH: () => EMPTY_PATH2,
      INVALID: () => INVALID2,
      NEVER: () => NEVER2,
      OK: () => OK2,
      ParseStatus: () => ParseStatus2,
      Schema: () => ZodType2,
      ZodAny: () => ZodAny2,
      ZodArray: () => ZodArray2,
      ZodBigInt: () => ZodBigInt2,
      ZodBoolean: () => ZodBoolean2,
      ZodBranded: () => ZodBranded2,
      ZodCatch: () => ZodCatch2,
      ZodDate: () => ZodDate2,
      ZodDefault: () => ZodDefault2,
      ZodDiscriminatedUnion: () => ZodDiscriminatedUnion2,
      ZodEffects: () => ZodEffects2,
      ZodEnum: () => ZodEnum2,
      ZodError: () => ZodError2,
      ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind2,
      ZodFunction: () => ZodFunction2,
      ZodIntersection: () => ZodIntersection2,
      ZodIssueCode: () => ZodIssueCode2,
      ZodLazy: () => ZodLazy2,
      ZodLiteral: () => ZodLiteral2,
      ZodMap: () => ZodMap2,
      ZodNaN: () => ZodNaN2,
      ZodNativeEnum: () => ZodNativeEnum2,
      ZodNever: () => ZodNever2,
      ZodNull: () => ZodNull2,
      ZodNullable: () => ZodNullable2,
      ZodNumber: () => ZodNumber2,
      ZodObject: () => ZodObject2,
      ZodOptional: () => ZodOptional2,
      ZodParsedType: () => ZodParsedType2,
      ZodPipeline: () => ZodPipeline2,
      ZodPromise: () => ZodPromise2,
      ZodReadonly: () => ZodReadonly2,
      ZodRecord: () => ZodRecord2,
      ZodSchema: () => ZodType2,
      ZodSet: () => ZodSet2,
      ZodString: () => ZodString2,
      ZodSymbol: () => ZodSymbol2,
      ZodTransformer: () => ZodEffects2,
      ZodTuple: () => ZodTuple2,
      ZodType: () => ZodType2,
      ZodUndefined: () => ZodUndefined2,
      ZodUnion: () => ZodUnion2,
      ZodUnknown: () => ZodUnknown2,
      ZodVoid: () => ZodVoid2,
      addIssueToContext: () => addIssueToContext2,
      any: () => anyType2,
      array: () => arrayType2,
      bigint: () => bigIntType2,
      boolean: () => booleanType2,
      coerce: () => coerce2,
      custom: () => custom2,
      date: () => dateType2,
      datetimeRegex: () => datetimeRegex2,
      defaultErrorMap: () => en_default2,
      discriminatedUnion: () => discriminatedUnionType2,
      effect: () => effectsType2,
      enum: () => enumType2,
      function: () => functionType2,
      getErrorMap: () => getErrorMap2,
      getParsedType: () => getParsedType2,
      instanceof: () => instanceOfType2,
      intersection: () => intersectionType2,
      isAborted: () => isAborted2,
      isAsync: () => isAsync2,
      isDirty: () => isDirty2,
      isValid: () => isValid2,
      late: () => late2,
      lazy: () => lazyType2,
      literal: () => literalType2,
      makeIssue: () => makeIssue2,
      map: () => mapType2,
      nan: () => nanType2,
      nativeEnum: () => nativeEnumType2,
      never: () => neverType2,
      null: () => nullType2,
      nullable: () => nullableType2,
      number: () => numberType2,
      object: () => objectType2,
      objectUtil: () => objectUtil2,
      oboolean: () => oboolean2,
      onumber: () => onumber2,
      optional: () => optionalType2,
      ostring: () => ostring2,
      pipeline: () => pipelineType2,
      preprocess: () => preprocessType2,
      promise: () => promiseType2,
      quotelessJson: () => quotelessJson2,
      record: () => recordType2,
      set: () => setType2,
      setErrorMap: () => setErrorMap2,
      strictObject: () => strictObjectType2,
      string: () => stringType2,
      symbol: () => symbolType2,
      transformer: () => effectsType2,
      tuple: () => tupleType2,
      undefined: () => undefinedType2,
      union: () => unionType2,
      unknown: () => unknownType2,
      util: () => util2,
      void: () => voidType2
    });
    var util2;
    (function(util5) {
      util5.assertEqual = (_) => {
      };
      function assertIs(_arg) {
      }
      util5.assertIs = assertIs;
      function assertNever(_x) {
        throw new Error();
      }
      util5.assertNever = assertNever;
      util5.arrayToEnum = (items) => {
        const obj = {};
        for (const item of items) {
          obj[item] = item;
        }
        return obj;
      };
      util5.getValidEnumValues = (obj) => {
        const validKeys = util5.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys) {
          filtered[k] = obj[k];
        }
        return util5.objectValues(filtered);
      };
      util5.objectValues = (obj) => {
        return util5.objectKeys(obj).map(function(e) {
          return obj[e];
        });
      };
      util5.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
        const keys = [];
        for (const key in object) {
          if (Object.prototype.hasOwnProperty.call(object, key)) {
            keys.push(key);
          }
        }
        return keys;
      };
      util5.find = (arr, checker) => {
        for (const item of arr) {
          if (checker(item))
            return item;
        }
        return void 0;
      };
      util5.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
      function joinValues(array, separator = " | ") {
        return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
      }
      util5.joinValues = joinValues;
      util5.jsonStringifyReplacer = (_, value) => {
        if (typeof value === "bigint") {
          return value.toString();
        }
        return value;
      };
    })(util2 || (util2 = {}));
    var objectUtil2;
    (function(objectUtil5) {
      objectUtil5.mergeShapes = (first, second) => {
        return {
          ...first,
          ...second
          // second overwrites first
        };
      };
    })(objectUtil2 || (objectUtil2 = {}));
    var ZodParsedType2 = util2.arrayToEnum([
      "string",
      "nan",
      "number",
      "integer",
      "float",
      "boolean",
      "date",
      "bigint",
      "symbol",
      "function",
      "undefined",
      "null",
      "array",
      "object",
      "unknown",
      "promise",
      "void",
      "never",
      "map",
      "set"
    ]);
    var getParsedType2 = (data) => {
      const t = typeof data;
      switch (t) {
        case "undefined":
          return ZodParsedType2.undefined;
        case "string":
          return ZodParsedType2.string;
        case "number":
          return Number.isNaN(data) ? ZodParsedType2.nan : ZodParsedType2.number;
        case "boolean":
          return ZodParsedType2.boolean;
        case "function":
          return ZodParsedType2.function;
        case "bigint":
          return ZodParsedType2.bigint;
        case "symbol":
          return ZodParsedType2.symbol;
        case "object":
          if (Array.isArray(data)) {
            return ZodParsedType2.array;
          }
          if (data === null) {
            return ZodParsedType2.null;
          }
          if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
            return ZodParsedType2.promise;
          }
          if (typeof Map !== "undefined" && data instanceof Map) {
            return ZodParsedType2.map;
          }
          if (typeof Set !== "undefined" && data instanceof Set) {
            return ZodParsedType2.set;
          }
          if (typeof Date !== "undefined" && data instanceof Date) {
            return ZodParsedType2.date;
          }
          return ZodParsedType2.object;
        default:
          return ZodParsedType2.unknown;
      }
    };
    var ZodIssueCode2 = util2.arrayToEnum([
      "invalid_type",
      "invalid_literal",
      "custom",
      "invalid_union",
      "invalid_union_discriminator",
      "invalid_enum_value",
      "unrecognized_keys",
      "invalid_arguments",
      "invalid_return_type",
      "invalid_date",
      "invalid_string",
      "too_small",
      "too_big",
      "invalid_intersection_types",
      "not_multiple_of",
      "not_finite"
    ]);
    var quotelessJson2 = (obj) => {
      const json = JSON.stringify(obj, null, 2);
      return json.replace(/"([^"]+)":/g, "$1:");
    };
    var ZodError2 = class _ZodError extends Error {
      get errors() {
        return this.issues;
      }
      constructor(issues) {
        super();
        this.issues = [];
        this.addIssue = (sub2) => {
          this.issues = [...this.issues, sub2];
        };
        this.addIssues = (subs = []) => {
          this.issues = [...this.issues, ...subs];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(this, actualProto);
        } else {
          this.__proto__ = actualProto;
        }
        this.name = "ZodError";
        this.issues = issues;
      }
      format(_mapper) {
        const mapper = _mapper || function(issue) {
          return issue.message;
        };
        const fieldErrors = { _errors: [] };
        const processError = (error) => {
          for (const issue of error.issues) {
            if (issue.code === "invalid_union") {
              issue.unionErrors.map(processError);
            } else if (issue.code === "invalid_return_type") {
              processError(issue.returnTypeError);
            } else if (issue.code === "invalid_arguments") {
              processError(issue.argumentsError);
            } else if (issue.path.length === 0) {
              fieldErrors._errors.push(mapper(issue));
            } else {
              let curr = fieldErrors;
              let i = 0;
              while (i < issue.path.length) {
                const el = issue.path[i];
                const terminal = i === issue.path.length - 1;
                if (!terminal) {
                  curr[el] = curr[el] || { _errors: [] };
                } else {
                  curr[el] = curr[el] || { _errors: [] };
                  curr[el]._errors.push(mapper(issue));
                }
                curr = curr[el];
                i++;
              }
            }
          }
        };
        processError(this);
        return fieldErrors;
      }
      static assert(value) {
        if (!(value instanceof _ZodError)) {
          throw new Error(`Not a ZodError: ${value}`);
        }
      }
      toString() {
        return this.message;
      }
      get message() {
        return JSON.stringify(this.issues, util2.jsonStringifyReplacer, 2);
      }
      get isEmpty() {
        return this.issues.length === 0;
      }
      flatten(mapper = (issue) => issue.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub2 of this.issues) {
          if (sub2.path.length > 0) {
            const firstEl = sub2.path[0];
            fieldErrors[firstEl] = fieldErrors[firstEl] || [];
            fieldErrors[firstEl].push(mapper(sub2));
          } else {
            formErrors.push(mapper(sub2));
          }
        }
        return { formErrors, fieldErrors };
      }
      get formErrors() {
        return this.flatten();
      }
    };
    ZodError2.create = (issues) => {
      const error = new ZodError2(issues);
      return error;
    };
    var errorMap2 = (issue, _ctx) => {
      let message;
      switch (issue.code) {
        case ZodIssueCode2.invalid_type:
          if (issue.received === ZodParsedType2.undefined) {
            message = "Required";
          } else {
            message = `Expected ${issue.expected}, received ${issue.received}`;
          }
          break;
        case ZodIssueCode2.invalid_literal:
          message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util2.jsonStringifyReplacer)}`;
          break;
        case ZodIssueCode2.unrecognized_keys:
          message = `Unrecognized key(s) in object: ${util2.joinValues(issue.keys, ", ")}`;
          break;
        case ZodIssueCode2.invalid_union:
          message = `Invalid input`;
          break;
        case ZodIssueCode2.invalid_union_discriminator:
          message = `Invalid discriminator value. Expected ${util2.joinValues(issue.options)}`;
          break;
        case ZodIssueCode2.invalid_enum_value:
          message = `Invalid enum value. Expected ${util2.joinValues(issue.options)}, received '${issue.received}'`;
          break;
        case ZodIssueCode2.invalid_arguments:
          message = `Invalid function arguments`;
          break;
        case ZodIssueCode2.invalid_return_type:
          message = `Invalid function return type`;
          break;
        case ZodIssueCode2.invalid_date:
          message = `Invalid date`;
          break;
        case ZodIssueCode2.invalid_string:
          if (typeof issue.validation === "object") {
            if ("includes" in issue.validation) {
              message = `Invalid input: must include "${issue.validation.includes}"`;
              if (typeof issue.validation.position === "number") {
                message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
              }
            } else if ("startsWith" in issue.validation) {
              message = `Invalid input: must start with "${issue.validation.startsWith}"`;
            } else if ("endsWith" in issue.validation) {
              message = `Invalid input: must end with "${issue.validation.endsWith}"`;
            } else {
              util2.assertNever(issue.validation);
            }
          } else if (issue.validation !== "regex") {
            message = `Invalid ${issue.validation}`;
          } else {
            message = "Invalid";
          }
          break;
        case ZodIssueCode2.too_small:
          if (issue.type === "array")
            message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
          else if (issue.type === "string")
            message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
          else if (issue.type === "number")
            message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
          else if (issue.type === "bigint")
            message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
          else if (issue.type === "date")
            message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
          else
            message = "Invalid input";
          break;
        case ZodIssueCode2.too_big:
          if (issue.type === "array")
            message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
          else if (issue.type === "string")
            message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
          else if (issue.type === "number")
            message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
          else if (issue.type === "bigint")
            message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
          else if (issue.type === "date")
            message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
          else
            message = "Invalid input";
          break;
        case ZodIssueCode2.custom:
          message = `Invalid input`;
          break;
        case ZodIssueCode2.invalid_intersection_types:
          message = `Intersection results could not be merged`;
          break;
        case ZodIssueCode2.not_multiple_of:
          message = `Number must be a multiple of ${issue.multipleOf}`;
          break;
        case ZodIssueCode2.not_finite:
          message = "Number must be finite";
          break;
        default:
          message = _ctx.defaultError;
          util2.assertNever(issue);
      }
      return { message };
    };
    var en_default2 = errorMap2;
    var overrideErrorMap2 = en_default2;
    function setErrorMap2(map) {
      overrideErrorMap2 = map;
    }
    function getErrorMap2() {
      return overrideErrorMap2;
    }
    var makeIssue2 = (params) => {
      const { data, path, errorMaps, issueData } = params;
      const fullPath = [...path, ...issueData.path || []];
      const fullIssue = {
        ...issueData,
        path: fullPath
      };
      if (issueData.message !== void 0) {
        return {
          ...issueData,
          path: fullPath,
          message: issueData.message
        };
      }
      let errorMessage = "";
      const maps = errorMaps.filter((m) => !!m).slice().reverse();
      for (const map of maps) {
        errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
      }
      return {
        ...issueData,
        path: fullPath,
        message: errorMessage
      };
    };
    var EMPTY_PATH2 = [];
    function addIssueToContext2(ctx, issueData) {
      const overrideMap = getErrorMap2();
      const issue = makeIssue2({
        issueData,
        data: ctx.data,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          // contextual error map is first priority
          ctx.schemaErrorMap,
          // then schema-bound map if available
          overrideMap,
          // then global override map
          overrideMap === en_default2 ? void 0 : en_default2
          // then global default map
        ].filter((x) => !!x)
      });
      ctx.common.issues.push(issue);
    }
    var ParseStatus2 = class _ParseStatus {
      constructor() {
        this.value = "valid";
      }
      dirty() {
        if (this.value === "valid")
          this.value = "dirty";
      }
      abort() {
        if (this.value !== "aborted")
          this.value = "aborted";
      }
      static mergeArray(status, results) {
        const arrayValue = [];
        for (const s of results) {
          if (s.status === "aborted")
            return INVALID2;
          if (s.status === "dirty")
            status.dirty();
          arrayValue.push(s.value);
        }
        return { status: status.value, value: arrayValue };
      }
      static async mergeObjectAsync(status, pairs) {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value
          });
        }
        return _ParseStatus.mergeObjectSync(status, syncPairs);
      }
      static mergeObjectSync(status, pairs) {
        const finalObject = {};
        for (const pair of pairs) {
          const { key, value } = pair;
          if (key.status === "aborted")
            return INVALID2;
          if (value.status === "aborted")
            return INVALID2;
          if (key.status === "dirty")
            status.dirty();
          if (value.status === "dirty")
            status.dirty();
          if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
            finalObject[key.value] = value.value;
          }
        }
        return { status: status.value, value: finalObject };
      }
    };
    var INVALID2 = Object.freeze({
      status: "aborted"
    });
    var DIRTY2 = (value) => ({ status: "dirty", value });
    var OK2 = (value) => ({ status: "valid", value });
    var isAborted2 = (x) => x.status === "aborted";
    var isDirty2 = (x) => x.status === "dirty";
    var isValid2 = (x) => x.status === "valid";
    var isAsync2 = (x) => typeof Promise !== "undefined" && x instanceof Promise;
    var errorUtil2;
    (function(errorUtil5) {
      errorUtil5.errToObj = (message) => typeof message === "string" ? { message } : message || {};
      errorUtil5.toString = (message) => typeof message === "string" ? message : message?.message;
    })(errorUtil2 || (errorUtil2 = {}));
    var ParseInputLazyPath2 = class {
      constructor(parent, value, path, key) {
        this._cachedPath = [];
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key;
      }
      get path() {
        if (!this._cachedPath.length) {
          if (Array.isArray(this._key)) {
            this._cachedPath.push(...this._path, ...this._key);
          } else {
            this._cachedPath.push(...this._path, this._key);
          }
        }
        return this._cachedPath;
      }
    };
    var handleResult2 = (ctx, result) => {
      if (isValid2(result)) {
        return { success: true, data: result.value };
      } else {
        if (!ctx.common.issues.length) {
          throw new Error("Validation failed but no issues detected.");
        }
        return {
          success: false,
          get error() {
            if (this._error)
              return this._error;
            const error = new ZodError2(ctx.common.issues);
            this._error = error;
            return this._error;
          }
        };
      }
    };
    function processCreateParams2(params) {
      if (!params)
        return {};
      const { errorMap: errorMap5, invalid_type_error, required_error, description } = params;
      if (errorMap5 && (invalid_type_error || required_error)) {
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
      }
      if (errorMap5)
        return { errorMap: errorMap5, description };
      const customMap = (iss, ctx) => {
        const { message } = params;
        if (iss.code === "invalid_enum_value") {
          return { message: message ?? ctx.defaultError };
        }
        if (typeof ctx.data === "undefined") {
          return { message: message ?? required_error ?? ctx.defaultError };
        }
        if (iss.code !== "invalid_type")
          return { message: ctx.defaultError };
        return { message: message ?? invalid_type_error ?? ctx.defaultError };
      };
      return { errorMap: customMap, description };
    }
    var ZodType2 = class {
      get description() {
        return this._def.description;
      }
      _getType(input) {
        return getParsedType2(input.data);
      }
      _getOrReturnCtx(input, ctx) {
        return ctx || {
          common: input.parent.common,
          data: input.data,
          parsedType: getParsedType2(input.data),
          schemaErrorMap: this._def.errorMap,
          path: input.path,
          parent: input.parent
        };
      }
      _processInputParams(input) {
        return {
          status: new ParseStatus2(),
          ctx: {
            common: input.parent.common,
            data: input.data,
            parsedType: getParsedType2(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent
          }
        };
      }
      _parseSync(input) {
        const result = this._parse(input);
        if (isAsync2(result)) {
          throw new Error("Synchronous parse encountered promise.");
        }
        return result;
      }
      _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
      }
      parse(data, params) {
        const result = this.safeParse(data, params);
        if (result.success)
          return result.data;
        throw result.error;
      }
      safeParse(data, params) {
        const ctx = {
          common: {
            issues: [],
            async: params?.async ?? false,
            contextualErrorMap: params?.errorMap
          },
          path: params?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: getParsedType2(data)
        };
        const result = this._parseSync({ data, path: ctx.path, parent: ctx });
        return handleResult2(ctx, result);
      }
      "~validate"(data) {
        const ctx = {
          common: {
            issues: [],
            async: !!this["~standard"].async
          },
          path: [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: getParsedType2(data)
        };
        if (!this["~standard"].async) {
          try {
            const result = this._parseSync({ data, path: [], parent: ctx });
            return isValid2(result) ? {
              value: result.value
            } : {
              issues: ctx.common.issues
            };
          } catch (err) {
            if (err?.message?.toLowerCase()?.includes("encountered")) {
              this["~standard"].async = true;
            }
            ctx.common = {
              issues: [],
              async: true
            };
          }
        }
        return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid2(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        });
      }
      async parseAsync(data, params) {
        const result = await this.safeParseAsync(data, params);
        if (result.success)
          return result.data;
        throw result.error;
      }
      async safeParseAsync(data, params) {
        const ctx = {
          common: {
            issues: [],
            contextualErrorMap: params?.errorMap,
            async: true
          },
          path: params?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: getParsedType2(data)
        };
        const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
        const result = await (isAsync2(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
        return handleResult2(ctx, result);
      }
      refine(check, message) {
        const getIssueProperties = (val) => {
          if (typeof message === "string" || typeof message === "undefined") {
            return { message };
          } else if (typeof message === "function") {
            return message(val);
          } else {
            return message;
          }
        };
        return this._refinement((val, ctx) => {
          const result = check(val);
          const setError = () => ctx.addIssue({
            code: ZodIssueCode2.custom,
            ...getIssueProperties(val)
          });
          if (typeof Promise !== "undefined" && result instanceof Promise) {
            return result.then((data) => {
              if (!data) {
                setError();
                return false;
              } else {
                return true;
              }
            });
          }
          if (!result) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      refinement(check, refinementData) {
        return this._refinement((val, ctx) => {
          if (!check(val)) {
            ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
            return false;
          } else {
            return true;
          }
        });
      }
      _refinement(refinement) {
        return new ZodEffects2({
          schema: this,
          typeName: ZodFirstPartyTypeKind2.ZodEffects,
          effect: { type: "refinement", refinement }
        });
      }
      superRefine(refinement) {
        return this._refinement(refinement);
      }
      constructor(def) {
        this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.readonly = this.readonly.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
        this["~standard"] = {
          version: 1,
          vendor: "zod",
          validate: (data) => this["~validate"](data)
        };
      }
      optional() {
        return ZodOptional2.create(this, this._def);
      }
      nullable() {
        return ZodNullable2.create(this, this._def);
      }
      nullish() {
        return this.nullable().optional();
      }
      array() {
        return ZodArray2.create(this);
      }
      promise() {
        return ZodPromise2.create(this, this._def);
      }
      or(option) {
        return ZodUnion2.create([this, option], this._def);
      }
      and(incoming) {
        return ZodIntersection2.create(this, incoming, this._def);
      }
      transform(transform) {
        return new ZodEffects2({
          ...processCreateParams2(this._def),
          schema: this,
          typeName: ZodFirstPartyTypeKind2.ZodEffects,
          effect: { type: "transform", transform }
        });
      }
      default(def) {
        const defaultValueFunc = typeof def === "function" ? def : () => def;
        return new ZodDefault2({
          ...processCreateParams2(this._def),
          innerType: this,
          defaultValue: defaultValueFunc,
          typeName: ZodFirstPartyTypeKind2.ZodDefault
        });
      }
      brand() {
        return new ZodBranded2({
          typeName: ZodFirstPartyTypeKind2.ZodBranded,
          type: this,
          ...processCreateParams2(this._def)
        });
      }
      catch(def) {
        const catchValueFunc = typeof def === "function" ? def : () => def;
        return new ZodCatch2({
          ...processCreateParams2(this._def),
          innerType: this,
          catchValue: catchValueFunc,
          typeName: ZodFirstPartyTypeKind2.ZodCatch
        });
      }
      describe(description) {
        const This = this.constructor;
        return new This({
          ...this._def,
          description
        });
      }
      pipe(target) {
        return ZodPipeline2.create(this, target);
      }
      readonly() {
        return ZodReadonly2.create(this);
      }
      isOptional() {
        return this.safeParse(void 0).success;
      }
      isNullable() {
        return this.safeParse(null).success;
      }
    };
    var cuidRegex2 = /^c[^\s-]{8,}$/i;
    var cuid2Regex2 = /^[0-9a-z]+$/;
    var ulidRegex2 = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
    var uuidRegex2 = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
    var nanoidRegex2 = /^[a-z0-9_-]{21}$/i;
    var jwtRegex2 = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
    var durationRegex2 = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
    var emailRegex2 = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    var _emojiRegex2 = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
    var emojiRegex2;
    var ipv4Regex2 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
    var ipv4CidrRegex2 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
    var ipv6Regex2 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
    var ipv6CidrRegex2 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
    var base64Regex2 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    var base64urlRegex2 = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
    var dateRegexSource2 = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
    var dateRegex2 = new RegExp(`^${dateRegexSource2}$`);
    function timeRegexSource2(args) {
      let secondsRegexSource = `[0-5]\\d`;
      if (args.precision) {
        secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
      } else if (args.precision == null) {
        secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
      }
      const secondsQuantifier = args.precision ? "+" : "?";
      return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
    }
    function timeRegex2(args) {
      return new RegExp(`^${timeRegexSource2(args)}$`);
    }
    function datetimeRegex2(args) {
      let regex = `${dateRegexSource2}T${timeRegexSource2(args)}`;
      const opts = [];
      opts.push(args.local ? `Z?` : `Z`);
      if (args.offset)
        opts.push(`([+-]\\d{2}:?\\d{2})`);
      regex = `${regex}(${opts.join("|")})`;
      return new RegExp(`^${regex}$`);
    }
    function isValidIP2(ip, version) {
      if ((version === "v4" || !version) && ipv4Regex2.test(ip)) {
        return true;
      }
      if ((version === "v6" || !version) && ipv6Regex2.test(ip)) {
        return true;
      }
      return false;
    }
    function isValidJWT2(jwt, alg) {
      if (!jwtRegex2.test(jwt))
        return false;
      try {
        const [header] = jwt.split(".");
        if (!header)
          return false;
        const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
        const decoded = JSON.parse(atob(base64));
        if (typeof decoded !== "object" || decoded === null)
          return false;
        if ("typ" in decoded && decoded?.typ !== "JWT")
          return false;
        if (!decoded.alg)
          return false;
        if (alg && decoded.alg !== alg)
          return false;
        return true;
      } catch {
        return false;
      }
    }
    function isValidCidr2(ip, version) {
      if ((version === "v4" || !version) && ipv4CidrRegex2.test(ip)) {
        return true;
      }
      if ((version === "v6" || !version) && ipv6CidrRegex2.test(ip)) {
        return true;
      }
      return false;
    }
    var ZodString2 = class _ZodString extends ZodType2 {
      _parse(input) {
        if (this._def.coerce) {
          input.data = String(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType2.string) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext2(ctx2, {
            code: ZodIssueCode2.invalid_type,
            expected: ZodParsedType2.string,
            received: ctx2.parsedType
          });
          return INVALID2;
        }
        const status = new ParseStatus2();
        let ctx = void 0;
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            if (input.data.length < check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                code: ZodIssueCode2.too_small,
                minimum: check.value,
                type: "string",
                inclusive: true,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            if (input.data.length > check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                code: ZodIssueCode2.too_big,
                maximum: check.value,
                type: "string",
                inclusive: true,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "length") {
            const tooBig = input.data.length > check.value;
            const tooSmall = input.data.length < check.value;
            if (tooBig || tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              if (tooBig) {
                addIssueToContext2(ctx, {
                  code: ZodIssueCode2.too_big,
                  maximum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: true,
                  message: check.message
                });
              } else if (tooSmall) {
                addIssueToContext2(ctx, {
                  code: ZodIssueCode2.too_small,
                  minimum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: true,
                  message: check.message
                });
              }
              status.dirty();
            }
          } else if (check.kind === "email") {
            if (!emailRegex2.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                validation: "email",
                code: ZodIssueCode2.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "emoji") {
            if (!emojiRegex2) {
              emojiRegex2 = new RegExp(_emojiRegex2, "u");
            }
            if (!emojiRegex2.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                validation: "emoji",
                code: ZodIssueCode2.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "uuid") {
            if (!uuidRegex2.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                validation: "uuid",
                code: ZodIssueCode2.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "nanoid") {
            if (!nanoidRegex2.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                validation: "nanoid",
                code: ZodIssueCode2.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cuid") {
            if (!cuidRegex2.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                validation: "cuid",
                code: ZodIssueCode2.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cuid2") {
            if (!cuid2Regex2.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                validation: "cuid2",
                code: ZodIssueCode2.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "ulid") {
            if (!ulidRegex2.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                validation: "ulid",
                code: ZodIssueCode2.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "url") {
            try {
              new URL(input.data);
            } catch {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                validation: "url",
                code: ZodIssueCode2.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "regex") {
            check.regex.lastIndex = 0;
            const testResult = check.regex.test(input.data);
            if (!testResult) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                validation: "regex",
                code: ZodIssueCode2.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "trim") {
            input.data = input.data.trim();
          } else if (check.kind === "includes") {
            if (!input.data.includes(check.value, check.position)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                code: ZodIssueCode2.invalid_string,
                validation: { includes: check.value, position: check.position },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "toLowerCase") {
            input.data = input.data.toLowerCase();
          } else if (check.kind === "toUpperCase") {
            input.data = input.data.toUpperCase();
          } else if (check.kind === "startsWith") {
            if (!input.data.startsWith(check.value)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                code: ZodIssueCode2.invalid_string,
                validation: { startsWith: check.value },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "endsWith") {
            if (!input.data.endsWith(check.value)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                code: ZodIssueCode2.invalid_string,
                validation: { endsWith: check.value },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "datetime") {
            const regex = datetimeRegex2(check);
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                code: ZodIssueCode2.invalid_string,
                validation: "datetime",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "date") {
            const regex = dateRegex2;
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                code: ZodIssueCode2.invalid_string,
                validation: "date",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "time") {
            const regex = timeRegex2(check);
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                code: ZodIssueCode2.invalid_string,
                validation: "time",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "duration") {
            if (!durationRegex2.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                validation: "duration",
                code: ZodIssueCode2.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "ip") {
            if (!isValidIP2(input.data, check.version)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                validation: "ip",
                code: ZodIssueCode2.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "jwt") {
            if (!isValidJWT2(input.data, check.alg)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                validation: "jwt",
                code: ZodIssueCode2.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cidr") {
            if (!isValidCidr2(input.data, check.version)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                validation: "cidr",
                code: ZodIssueCode2.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "base64") {
            if (!base64Regex2.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                validation: "base64",
                code: ZodIssueCode2.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "base64url") {
            if (!base64urlRegex2.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                validation: "base64url",
                code: ZodIssueCode2.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util2.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      _regex(regex, validation, message) {
        return this.refinement((data) => regex.test(data), {
          validation,
          code: ZodIssueCode2.invalid_string,
          ...errorUtil2.errToObj(message)
        });
      }
      _addCheck(check) {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      email(message) {
        return this._addCheck({ kind: "email", ...errorUtil2.errToObj(message) });
      }
      url(message) {
        return this._addCheck({ kind: "url", ...errorUtil2.errToObj(message) });
      }
      emoji(message) {
        return this._addCheck({ kind: "emoji", ...errorUtil2.errToObj(message) });
      }
      uuid(message) {
        return this._addCheck({ kind: "uuid", ...errorUtil2.errToObj(message) });
      }
      nanoid(message) {
        return this._addCheck({ kind: "nanoid", ...errorUtil2.errToObj(message) });
      }
      cuid(message) {
        return this._addCheck({ kind: "cuid", ...errorUtil2.errToObj(message) });
      }
      cuid2(message) {
        return this._addCheck({ kind: "cuid2", ...errorUtil2.errToObj(message) });
      }
      ulid(message) {
        return this._addCheck({ kind: "ulid", ...errorUtil2.errToObj(message) });
      }
      base64(message) {
        return this._addCheck({ kind: "base64", ...errorUtil2.errToObj(message) });
      }
      base64url(message) {
        return this._addCheck({
          kind: "base64url",
          ...errorUtil2.errToObj(message)
        });
      }
      jwt(options) {
        return this._addCheck({ kind: "jwt", ...errorUtil2.errToObj(options) });
      }
      ip(options) {
        return this._addCheck({ kind: "ip", ...errorUtil2.errToObj(options) });
      }
      cidr(options) {
        return this._addCheck({ kind: "cidr", ...errorUtil2.errToObj(options) });
      }
      datetime(options) {
        if (typeof options === "string") {
          return this._addCheck({
            kind: "datetime",
            precision: null,
            offset: false,
            local: false,
            message: options
          });
        }
        return this._addCheck({
          kind: "datetime",
          precision: typeof options?.precision === "undefined" ? null : options?.precision,
          offset: options?.offset ?? false,
          local: options?.local ?? false,
          ...errorUtil2.errToObj(options?.message)
        });
      }
      date(message) {
        return this._addCheck({ kind: "date", message });
      }
      time(options) {
        if (typeof options === "string") {
          return this._addCheck({
            kind: "time",
            precision: null,
            message: options
          });
        }
        return this._addCheck({
          kind: "time",
          precision: typeof options?.precision === "undefined" ? null : options?.precision,
          ...errorUtil2.errToObj(options?.message)
        });
      }
      duration(message) {
        return this._addCheck({ kind: "duration", ...errorUtil2.errToObj(message) });
      }
      regex(regex, message) {
        return this._addCheck({
          kind: "regex",
          regex,
          ...errorUtil2.errToObj(message)
        });
      }
      includes(value, options) {
        return this._addCheck({
          kind: "includes",
          value,
          position: options?.position,
          ...errorUtil2.errToObj(options?.message)
        });
      }
      startsWith(value, message) {
        return this._addCheck({
          kind: "startsWith",
          value,
          ...errorUtil2.errToObj(message)
        });
      }
      endsWith(value, message) {
        return this._addCheck({
          kind: "endsWith",
          value,
          ...errorUtil2.errToObj(message)
        });
      }
      min(minLength, message) {
        return this._addCheck({
          kind: "min",
          value: minLength,
          ...errorUtil2.errToObj(message)
        });
      }
      max(maxLength, message) {
        return this._addCheck({
          kind: "max",
          value: maxLength,
          ...errorUtil2.errToObj(message)
        });
      }
      length(len, message) {
        return this._addCheck({
          kind: "length",
          value: len,
          ...errorUtil2.errToObj(message)
        });
      }
      /**
       * Equivalent to `.min(1)`
       */
      nonempty(message) {
        return this.min(1, errorUtil2.errToObj(message));
      }
      trim() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "trim" }]
        });
      }
      toLowerCase() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "toLowerCase" }]
        });
      }
      toUpperCase() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "toUpperCase" }]
        });
      }
      get isDatetime() {
        return !!this._def.checks.find((ch) => ch.kind === "datetime");
      }
      get isDate() {
        return !!this._def.checks.find((ch) => ch.kind === "date");
      }
      get isTime() {
        return !!this._def.checks.find((ch) => ch.kind === "time");
      }
      get isDuration() {
        return !!this._def.checks.find((ch) => ch.kind === "duration");
      }
      get isEmail() {
        return !!this._def.checks.find((ch) => ch.kind === "email");
      }
      get isURL() {
        return !!this._def.checks.find((ch) => ch.kind === "url");
      }
      get isEmoji() {
        return !!this._def.checks.find((ch) => ch.kind === "emoji");
      }
      get isUUID() {
        return !!this._def.checks.find((ch) => ch.kind === "uuid");
      }
      get isNANOID() {
        return !!this._def.checks.find((ch) => ch.kind === "nanoid");
      }
      get isCUID() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid");
      }
      get isCUID2() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid2");
      }
      get isULID() {
        return !!this._def.checks.find((ch) => ch.kind === "ulid");
      }
      get isIP() {
        return !!this._def.checks.find((ch) => ch.kind === "ip");
      }
      get isCIDR() {
        return !!this._def.checks.find((ch) => ch.kind === "cidr");
      }
      get isBase64() {
        return !!this._def.checks.find((ch) => ch.kind === "base64");
      }
      get isBase64url() {
        return !!this._def.checks.find((ch) => ch.kind === "base64url");
      }
      get minLength() {
        let min2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min2 === null || ch.value > min2)
              min2 = ch.value;
          }
        }
        return min2;
      }
      get maxLength() {
        let max2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max2 === null || ch.value < max2)
              max2 = ch.value;
          }
        }
        return max2;
      }
    };
    ZodString2.create = (params) => {
      return new ZodString2({
        checks: [],
        typeName: ZodFirstPartyTypeKind2.ZodString,
        coerce: params?.coerce ?? false,
        ...processCreateParams2(params)
      });
    };
    function floatSafeRemainder2(val, step) {
      const valDecCount = (val.toString().split(".")[1] || "").length;
      const stepDecCount = (step.toString().split(".")[1] || "").length;
      const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
      const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
      const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
      return valInt % stepInt / 10 ** decCount;
    }
    var ZodNumber2 = class _ZodNumber extends ZodType2 {
      constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
      }
      _parse(input) {
        if (this._def.coerce) {
          input.data = Number(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType2.number) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext2(ctx2, {
            code: ZodIssueCode2.invalid_type,
            expected: ZodParsedType2.number,
            received: ctx2.parsedType
          });
          return INVALID2;
        }
        let ctx = void 0;
        const status = new ParseStatus2();
        for (const check of this._def.checks) {
          if (check.kind === "int") {
            if (!util2.isInteger(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                code: ZodIssueCode2.invalid_type,
                expected: "integer",
                received: "float",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "min") {
            const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
            if (tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                code: ZodIssueCode2.too_small,
                minimum: check.value,
                type: "number",
                inclusive: check.inclusive,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
            if (tooBig) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                code: ZodIssueCode2.too_big,
                maximum: check.value,
                type: "number",
                inclusive: check.inclusive,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "multipleOf") {
            if (floatSafeRemainder2(input.data, check.value) !== 0) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                code: ZodIssueCode2.not_multiple_of,
                multipleOf: check.value,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "finite") {
            if (!Number.isFinite(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                code: ZodIssueCode2.not_finite,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util2.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      gte(value, message) {
        return this.setLimit("min", value, true, errorUtil2.toString(message));
      }
      gt(value, message) {
        return this.setLimit("min", value, false, errorUtil2.toString(message));
      }
      lte(value, message) {
        return this.setLimit("max", value, true, errorUtil2.toString(message));
      }
      lt(value, message) {
        return this.setLimit("max", value, false, errorUtil2.toString(message));
      }
      setLimit(kind, value, inclusive, message) {
        return new _ZodNumber({
          ...this._def,
          checks: [
            ...this._def.checks,
            {
              kind,
              value,
              inclusive,
              message: errorUtil2.toString(message)
            }
          ]
        });
      }
      _addCheck(check) {
        return new _ZodNumber({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      int(message) {
        return this._addCheck({
          kind: "int",
          message: errorUtil2.toString(message)
        });
      }
      positive(message) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: false,
          message: errorUtil2.toString(message)
        });
      }
      negative(message) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: false,
          message: errorUtil2.toString(message)
        });
      }
      nonpositive(message) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: true,
          message: errorUtil2.toString(message)
        });
      }
      nonnegative(message) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: true,
          message: errorUtil2.toString(message)
        });
      }
      multipleOf(value, message) {
        return this._addCheck({
          kind: "multipleOf",
          value,
          message: errorUtil2.toString(message)
        });
      }
      finite(message) {
        return this._addCheck({
          kind: "finite",
          message: errorUtil2.toString(message)
        });
      }
      safe(message) {
        return this._addCheck({
          kind: "min",
          inclusive: true,
          value: Number.MIN_SAFE_INTEGER,
          message: errorUtil2.toString(message)
        })._addCheck({
          kind: "max",
          inclusive: true,
          value: Number.MAX_SAFE_INTEGER,
          message: errorUtil2.toString(message)
        });
      }
      get minValue() {
        let min2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min2 === null || ch.value > min2)
              min2 = ch.value;
          }
        }
        return min2;
      }
      get maxValue() {
        let max2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max2 === null || ch.value < max2)
              max2 = ch.value;
          }
        }
        return max2;
      }
      get isInt() {
        return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util2.isInteger(ch.value));
      }
      get isFinite() {
        let max2 = null;
        let min2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
            return true;
          } else if (ch.kind === "min") {
            if (min2 === null || ch.value > min2)
              min2 = ch.value;
          } else if (ch.kind === "max") {
            if (max2 === null || ch.value < max2)
              max2 = ch.value;
          }
        }
        return Number.isFinite(min2) && Number.isFinite(max2);
      }
    };
    ZodNumber2.create = (params) => {
      return new ZodNumber2({
        checks: [],
        typeName: ZodFirstPartyTypeKind2.ZodNumber,
        coerce: params?.coerce || false,
        ...processCreateParams2(params)
      });
    };
    var ZodBigInt2 = class _ZodBigInt extends ZodType2 {
      constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
      }
      _parse(input) {
        if (this._def.coerce) {
          try {
            input.data = BigInt(input.data);
          } catch {
            return this._getInvalidInput(input);
          }
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType2.bigint) {
          return this._getInvalidInput(input);
        }
        let ctx = void 0;
        const status = new ParseStatus2();
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
            if (tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                code: ZodIssueCode2.too_small,
                type: "bigint",
                minimum: check.value,
                inclusive: check.inclusive,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
            if (tooBig) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                code: ZodIssueCode2.too_big,
                type: "bigint",
                maximum: check.value,
                inclusive: check.inclusive,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "multipleOf") {
            if (input.data % check.value !== BigInt(0)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                code: ZodIssueCode2.not_multiple_of,
                multipleOf: check.value,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util2.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      _getInvalidInput(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext2(ctx, {
          code: ZodIssueCode2.invalid_type,
          expected: ZodParsedType2.bigint,
          received: ctx.parsedType
        });
        return INVALID2;
      }
      gte(value, message) {
        return this.setLimit("min", value, true, errorUtil2.toString(message));
      }
      gt(value, message) {
        return this.setLimit("min", value, false, errorUtil2.toString(message));
      }
      lte(value, message) {
        return this.setLimit("max", value, true, errorUtil2.toString(message));
      }
      lt(value, message) {
        return this.setLimit("max", value, false, errorUtil2.toString(message));
      }
      setLimit(kind, value, inclusive, message) {
        return new _ZodBigInt({
          ...this._def,
          checks: [
            ...this._def.checks,
            {
              kind,
              value,
              inclusive,
              message: errorUtil2.toString(message)
            }
          ]
        });
      }
      _addCheck(check) {
        return new _ZodBigInt({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      positive(message) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: false,
          message: errorUtil2.toString(message)
        });
      }
      negative(message) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: false,
          message: errorUtil2.toString(message)
        });
      }
      nonpositive(message) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: true,
          message: errorUtil2.toString(message)
        });
      }
      nonnegative(message) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: true,
          message: errorUtil2.toString(message)
        });
      }
      multipleOf(value, message) {
        return this._addCheck({
          kind: "multipleOf",
          value,
          message: errorUtil2.toString(message)
        });
      }
      get minValue() {
        let min2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min2 === null || ch.value > min2)
              min2 = ch.value;
          }
        }
        return min2;
      }
      get maxValue() {
        let max2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max2 === null || ch.value < max2)
              max2 = ch.value;
          }
        }
        return max2;
      }
    };
    ZodBigInt2.create = (params) => {
      return new ZodBigInt2({
        checks: [],
        typeName: ZodFirstPartyTypeKind2.ZodBigInt,
        coerce: params?.coerce ?? false,
        ...processCreateParams2(params)
      });
    };
    var ZodBoolean2 = class extends ZodType2 {
      _parse(input) {
        if (this._def.coerce) {
          input.data = Boolean(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType2.boolean) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext2(ctx, {
            code: ZodIssueCode2.invalid_type,
            expected: ZodParsedType2.boolean,
            received: ctx.parsedType
          });
          return INVALID2;
        }
        return OK2(input.data);
      }
    };
    ZodBoolean2.create = (params) => {
      return new ZodBoolean2({
        typeName: ZodFirstPartyTypeKind2.ZodBoolean,
        coerce: params?.coerce || false,
        ...processCreateParams2(params)
      });
    };
    var ZodDate2 = class _ZodDate extends ZodType2 {
      _parse(input) {
        if (this._def.coerce) {
          input.data = new Date(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType2.date) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext2(ctx2, {
            code: ZodIssueCode2.invalid_type,
            expected: ZodParsedType2.date,
            received: ctx2.parsedType
          });
          return INVALID2;
        }
        if (Number.isNaN(input.data.getTime())) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext2(ctx2, {
            code: ZodIssueCode2.invalid_date
          });
          return INVALID2;
        }
        const status = new ParseStatus2();
        let ctx = void 0;
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            if (input.data.getTime() < check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                code: ZodIssueCode2.too_small,
                message: check.message,
                inclusive: true,
                exact: false,
                minimum: check.value,
                type: "date"
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            if (input.data.getTime() > check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext2(ctx, {
                code: ZodIssueCode2.too_big,
                message: check.message,
                inclusive: true,
                exact: false,
                maximum: check.value,
                type: "date"
              });
              status.dirty();
            }
          } else {
            util2.assertNever(check);
          }
        }
        return {
          status: status.value,
          value: new Date(input.data.getTime())
        };
      }
      _addCheck(check) {
        return new _ZodDate({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      min(minDate, message) {
        return this._addCheck({
          kind: "min",
          value: minDate.getTime(),
          message: errorUtil2.toString(message)
        });
      }
      max(maxDate, message) {
        return this._addCheck({
          kind: "max",
          value: maxDate.getTime(),
          message: errorUtil2.toString(message)
        });
      }
      get minDate() {
        let min2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min2 === null || ch.value > min2)
              min2 = ch.value;
          }
        }
        return min2 != null ? new Date(min2) : null;
      }
      get maxDate() {
        let max2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max2 === null || ch.value < max2)
              max2 = ch.value;
          }
        }
        return max2 != null ? new Date(max2) : null;
      }
    };
    ZodDate2.create = (params) => {
      return new ZodDate2({
        checks: [],
        coerce: params?.coerce || false,
        typeName: ZodFirstPartyTypeKind2.ZodDate,
        ...processCreateParams2(params)
      });
    };
    var ZodSymbol2 = class extends ZodType2 {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType2.symbol) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext2(ctx, {
            code: ZodIssueCode2.invalid_type,
            expected: ZodParsedType2.symbol,
            received: ctx.parsedType
          });
          return INVALID2;
        }
        return OK2(input.data);
      }
    };
    ZodSymbol2.create = (params) => {
      return new ZodSymbol2({
        typeName: ZodFirstPartyTypeKind2.ZodSymbol,
        ...processCreateParams2(params)
      });
    };
    var ZodUndefined2 = class extends ZodType2 {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType2.undefined) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext2(ctx, {
            code: ZodIssueCode2.invalid_type,
            expected: ZodParsedType2.undefined,
            received: ctx.parsedType
          });
          return INVALID2;
        }
        return OK2(input.data);
      }
    };
    ZodUndefined2.create = (params) => {
      return new ZodUndefined2({
        typeName: ZodFirstPartyTypeKind2.ZodUndefined,
        ...processCreateParams2(params)
      });
    };
    var ZodNull2 = class extends ZodType2 {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType2.null) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext2(ctx, {
            code: ZodIssueCode2.invalid_type,
            expected: ZodParsedType2.null,
            received: ctx.parsedType
          });
          return INVALID2;
        }
        return OK2(input.data);
      }
    };
    ZodNull2.create = (params) => {
      return new ZodNull2({
        typeName: ZodFirstPartyTypeKind2.ZodNull,
        ...processCreateParams2(params)
      });
    };
    var ZodAny2 = class extends ZodType2 {
      constructor() {
        super(...arguments);
        this._any = true;
      }
      _parse(input) {
        return OK2(input.data);
      }
    };
    ZodAny2.create = (params) => {
      return new ZodAny2({
        typeName: ZodFirstPartyTypeKind2.ZodAny,
        ...processCreateParams2(params)
      });
    };
    var ZodUnknown2 = class extends ZodType2 {
      constructor() {
        super(...arguments);
        this._unknown = true;
      }
      _parse(input) {
        return OK2(input.data);
      }
    };
    ZodUnknown2.create = (params) => {
      return new ZodUnknown2({
        typeName: ZodFirstPartyTypeKind2.ZodUnknown,
        ...processCreateParams2(params)
      });
    };
    var ZodNever2 = class extends ZodType2 {
      _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext2(ctx, {
          code: ZodIssueCode2.invalid_type,
          expected: ZodParsedType2.never,
          received: ctx.parsedType
        });
        return INVALID2;
      }
    };
    ZodNever2.create = (params) => {
      return new ZodNever2({
        typeName: ZodFirstPartyTypeKind2.ZodNever,
        ...processCreateParams2(params)
      });
    };
    var ZodVoid2 = class extends ZodType2 {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType2.undefined) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext2(ctx, {
            code: ZodIssueCode2.invalid_type,
            expected: ZodParsedType2.void,
            received: ctx.parsedType
          });
          return INVALID2;
        }
        return OK2(input.data);
      }
    };
    ZodVoid2.create = (params) => {
      return new ZodVoid2({
        typeName: ZodFirstPartyTypeKind2.ZodVoid,
        ...processCreateParams2(params)
      });
    };
    var ZodArray2 = class _ZodArray extends ZodType2 {
      _parse(input) {
        const { ctx, status } = this._processInputParams(input);
        const def = this._def;
        if (ctx.parsedType !== ZodParsedType2.array) {
          addIssueToContext2(ctx, {
            code: ZodIssueCode2.invalid_type,
            expected: ZodParsedType2.array,
            received: ctx.parsedType
          });
          return INVALID2;
        }
        if (def.exactLength !== null) {
          const tooBig = ctx.data.length > def.exactLength.value;
          const tooSmall = ctx.data.length < def.exactLength.value;
          if (tooBig || tooSmall) {
            addIssueToContext2(ctx, {
              code: tooBig ? ZodIssueCode2.too_big : ZodIssueCode2.too_small,
              minimum: tooSmall ? def.exactLength.value : void 0,
              maximum: tooBig ? def.exactLength.value : void 0,
              type: "array",
              inclusive: true,
              exact: true,
              message: def.exactLength.message
            });
            status.dirty();
          }
        }
        if (def.minLength !== null) {
          if (ctx.data.length < def.minLength.value) {
            addIssueToContext2(ctx, {
              code: ZodIssueCode2.too_small,
              minimum: def.minLength.value,
              type: "array",
              inclusive: true,
              exact: false,
              message: def.minLength.message
            });
            status.dirty();
          }
        }
        if (def.maxLength !== null) {
          if (ctx.data.length > def.maxLength.value) {
            addIssueToContext2(ctx, {
              code: ZodIssueCode2.too_big,
              maximum: def.maxLength.value,
              type: "array",
              inclusive: true,
              exact: false,
              message: def.maxLength.message
            });
            status.dirty();
          }
        }
        if (ctx.common.async) {
          return Promise.all([...ctx.data].map((item, i) => {
            return def.type._parseAsync(new ParseInputLazyPath2(ctx, item, ctx.path, i));
          })).then((result2) => {
            return ParseStatus2.mergeArray(status, result2);
          });
        }
        const result = [...ctx.data].map((item, i) => {
          return def.type._parseSync(new ParseInputLazyPath2(ctx, item, ctx.path, i));
        });
        return ParseStatus2.mergeArray(status, result);
      }
      get element() {
        return this._def.type;
      }
      min(minLength, message) {
        return new _ZodArray({
          ...this._def,
          minLength: { value: minLength, message: errorUtil2.toString(message) }
        });
      }
      max(maxLength, message) {
        return new _ZodArray({
          ...this._def,
          maxLength: { value: maxLength, message: errorUtil2.toString(message) }
        });
      }
      length(len, message) {
        return new _ZodArray({
          ...this._def,
          exactLength: { value: len, message: errorUtil2.toString(message) }
        });
      }
      nonempty(message) {
        return this.min(1, message);
      }
    };
    ZodArray2.create = (schema, params) => {
      return new ZodArray2({
        type: schema,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: ZodFirstPartyTypeKind2.ZodArray,
        ...processCreateParams2(params)
      });
    };
    function deepPartialify2(schema) {
      if (schema instanceof ZodObject2) {
        const newShape = {};
        for (const key in schema.shape) {
          const fieldSchema = schema.shape[key];
          newShape[key] = ZodOptional2.create(deepPartialify2(fieldSchema));
        }
        return new ZodObject2({
          ...schema._def,
          shape: () => newShape
        });
      } else if (schema instanceof ZodArray2) {
        return new ZodArray2({
          ...schema._def,
          type: deepPartialify2(schema.element)
        });
      } else if (schema instanceof ZodOptional2) {
        return ZodOptional2.create(deepPartialify2(schema.unwrap()));
      } else if (schema instanceof ZodNullable2) {
        return ZodNullable2.create(deepPartialify2(schema.unwrap()));
      } else if (schema instanceof ZodTuple2) {
        return ZodTuple2.create(schema.items.map((item) => deepPartialify2(item)));
      } else {
        return schema;
      }
    }
    var ZodObject2 = class _ZodObject extends ZodType2 {
      constructor() {
        super(...arguments);
        this._cached = null;
        this.nonstrict = this.passthrough;
        this.augment = this.extend;
      }
      _getCached() {
        if (this._cached !== null)
          return this._cached;
        const shape = this._def.shape();
        const keys = util2.objectKeys(shape);
        this._cached = { shape, keys };
        return this._cached;
      }
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType2.object) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext2(ctx2, {
            code: ZodIssueCode2.invalid_type,
            expected: ZodParsedType2.object,
            received: ctx2.parsedType
          });
          return INVALID2;
        }
        const { status, ctx } = this._processInputParams(input);
        const { shape, keys: shapeKeys } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever2 && this._def.unknownKeys === "strip")) {
          for (const key in ctx.data) {
            if (!shapeKeys.includes(key)) {
              extraKeys.push(key);
            }
          }
        }
        const pairs = [];
        for (const key of shapeKeys) {
          const keyValidator = shape[key];
          const value = ctx.data[key];
          pairs.push({
            key: { status: "valid", value: key },
            value: keyValidator._parse(new ParseInputLazyPath2(ctx, value, ctx.path, key)),
            alwaysSet: key in ctx.data
          });
        }
        if (this._def.catchall instanceof ZodNever2) {
          const unknownKeys = this._def.unknownKeys;
          if (unknownKeys === "passthrough") {
            for (const key of extraKeys) {
              pairs.push({
                key: { status: "valid", value: key },
                value: { status: "valid", value: ctx.data[key] }
              });
            }
          } else if (unknownKeys === "strict") {
            if (extraKeys.length > 0) {
              addIssueToContext2(ctx, {
                code: ZodIssueCode2.unrecognized_keys,
                keys: extraKeys
              });
              status.dirty();
            }
          } else if (unknownKeys === "strip") {
          } else {
            throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
          }
        } else {
          const catchall = this._def.catchall;
          for (const key of extraKeys) {
            const value = ctx.data[key];
            pairs.push({
              key: { status: "valid", value: key },
              value: catchall._parse(
                new ParseInputLazyPath2(ctx, value, ctx.path, key)
                //, ctx.child(key), value, getParsedType(value)
              ),
              alwaysSet: key in ctx.data
            });
          }
        }
        if (ctx.common.async) {
          return Promise.resolve().then(async () => {
            const syncPairs = [];
            for (const pair of pairs) {
              const key = await pair.key;
              const value = await pair.value;
              syncPairs.push({
                key,
                value,
                alwaysSet: pair.alwaysSet
              });
            }
            return syncPairs;
          }).then((syncPairs) => {
            return ParseStatus2.mergeObjectSync(status, syncPairs);
          });
        } else {
          return ParseStatus2.mergeObjectSync(status, pairs);
        }
      }
      get shape() {
        return this._def.shape();
      }
      strict(message) {
        errorUtil2.errToObj;
        return new _ZodObject({
          ...this._def,
          unknownKeys: "strict",
          ...message !== void 0 ? {
            errorMap: (issue, ctx) => {
              const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
              if (issue.code === "unrecognized_keys")
                return {
                  message: errorUtil2.errToObj(message).message ?? defaultError
                };
              return {
                message: defaultError
              };
            }
          } : {}
        });
      }
      strip() {
        return new _ZodObject({
          ...this._def,
          unknownKeys: "strip"
        });
      }
      passthrough() {
        return new _ZodObject({
          ...this._def,
          unknownKeys: "passthrough"
        });
      }
      // const AugmentFactory =
      //   <Def extends ZodObjectDef>(def: Def) =>
      //   <Augmentation extends ZodRawShape>(
      //     augmentation: Augmentation
      //   ): ZodObject<
      //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
      //     Def["unknownKeys"],
      //     Def["catchall"]
      //   > => {
      //     return new ZodObject({
      //       ...def,
      //       shape: () => ({
      //         ...def.shape(),
      //         ...augmentation,
      //       }),
      //     }) as any;
      //   };
      extend(augmentation) {
        return new _ZodObject({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...augmentation
          })
        });
      }
      /**
       * Prior to zod@1.0.12 there was a bug in the
       * inferred type of merged objects. Please
       * upgrade if you are experiencing issues.
       */
      merge(merging) {
        const merged = new _ZodObject({
          unknownKeys: merging._def.unknownKeys,
          catchall: merging._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...merging._def.shape()
          }),
          typeName: ZodFirstPartyTypeKind2.ZodObject
        });
        return merged;
      }
      // merge<
      //   Incoming extends AnyZodObject,
      //   Augmentation extends Incoming["shape"],
      //   NewOutput extends {
      //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
      //       ? Augmentation[k]["_output"]
      //       : k extends keyof Output
      //       ? Output[k]
      //       : never;
      //   },
      //   NewInput extends {
      //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
      //       ? Augmentation[k]["_input"]
      //       : k extends keyof Input
      //       ? Input[k]
      //       : never;
      //   }
      // >(
      //   merging: Incoming
      // ): ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"],
      //   NewOutput,
      //   NewInput
      // > {
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
      setKey(key, schema) {
        return this.augment({ [key]: schema });
      }
      // merge<Incoming extends AnyZodObject>(
      //   merging: Incoming
      // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
      // ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"]
      // > {
      //   // const mergedShape = objectUtil.mergeShapes(
      //   //   this._def.shape(),
      //   //   merging._def.shape()
      //   // );
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
      catchall(index) {
        return new _ZodObject({
          ...this._def,
          catchall: index
        });
      }
      pick(mask) {
        const shape = {};
        for (const key of util2.objectKeys(mask)) {
          if (mask[key] && this.shape[key]) {
            shape[key] = this.shape[key];
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => shape
        });
      }
      omit(mask) {
        const shape = {};
        for (const key of util2.objectKeys(this.shape)) {
          if (!mask[key]) {
            shape[key] = this.shape[key];
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => shape
        });
      }
      /**
       * @deprecated
       */
      deepPartial() {
        return deepPartialify2(this);
      }
      partial(mask) {
        const newShape = {};
        for (const key of util2.objectKeys(this.shape)) {
          const fieldSchema = this.shape[key];
          if (mask && !mask[key]) {
            newShape[key] = fieldSchema;
          } else {
            newShape[key] = fieldSchema.optional();
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => newShape
        });
      }
      required(mask) {
        const newShape = {};
        for (const key of util2.objectKeys(this.shape)) {
          if (mask && !mask[key]) {
            newShape[key] = this.shape[key];
          } else {
            const fieldSchema = this.shape[key];
            let newField = fieldSchema;
            while (newField instanceof ZodOptional2) {
              newField = newField._def.innerType;
            }
            newShape[key] = newField;
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => newShape
        });
      }
      keyof() {
        return createZodEnum2(util2.objectKeys(this.shape));
      }
    };
    ZodObject2.create = (shape, params) => {
      return new ZodObject2({
        shape: () => shape,
        unknownKeys: "strip",
        catchall: ZodNever2.create(),
        typeName: ZodFirstPartyTypeKind2.ZodObject,
        ...processCreateParams2(params)
      });
    };
    ZodObject2.strictCreate = (shape, params) => {
      return new ZodObject2({
        shape: () => shape,
        unknownKeys: "strict",
        catchall: ZodNever2.create(),
        typeName: ZodFirstPartyTypeKind2.ZodObject,
        ...processCreateParams2(params)
      });
    };
    ZodObject2.lazycreate = (shape, params) => {
      return new ZodObject2({
        shape,
        unknownKeys: "strip",
        catchall: ZodNever2.create(),
        typeName: ZodFirstPartyTypeKind2.ZodObject,
        ...processCreateParams2(params)
      });
    };
    var ZodUnion2 = class extends ZodType2 {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const options = this._def.options;
        function handleResults(results) {
          for (const result of results) {
            if (result.result.status === "valid") {
              return result.result;
            }
          }
          for (const result of results) {
            if (result.result.status === "dirty") {
              ctx.common.issues.push(...result.ctx.common.issues);
              return result.result;
            }
          }
          const unionErrors = results.map((result) => new ZodError2(result.ctx.common.issues));
          addIssueToContext2(ctx, {
            code: ZodIssueCode2.invalid_union,
            unionErrors
          });
          return INVALID2;
        }
        if (ctx.common.async) {
          return Promise.all(options.map(async (option) => {
            const childCtx = {
              ...ctx,
              common: {
                ...ctx.common,
                issues: []
              },
              parent: null
            };
            return {
              result: await option._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: childCtx
              }),
              ctx: childCtx
            };
          })).then(handleResults);
        } else {
          let dirty = void 0;
          const issues = [];
          for (const option of options) {
            const childCtx = {
              ...ctx,
              common: {
                ...ctx.common,
                issues: []
              },
              parent: null
            };
            const result = option._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: childCtx
            });
            if (result.status === "valid") {
              return result;
            } else if (result.status === "dirty" && !dirty) {
              dirty = { result, ctx: childCtx };
            }
            if (childCtx.common.issues.length) {
              issues.push(childCtx.common.issues);
            }
          }
          if (dirty) {
            ctx.common.issues.push(...dirty.ctx.common.issues);
            return dirty.result;
          }
          const unionErrors = issues.map((issues2) => new ZodError2(issues2));
          addIssueToContext2(ctx, {
            code: ZodIssueCode2.invalid_union,
            unionErrors
          });
          return INVALID2;
        }
      }
      get options() {
        return this._def.options;
      }
    };
    ZodUnion2.create = (types, params) => {
      return new ZodUnion2({
        options: types,
        typeName: ZodFirstPartyTypeKind2.ZodUnion,
        ...processCreateParams2(params)
      });
    };
    var getDiscriminator2 = (type) => {
      if (type instanceof ZodLazy2) {
        return getDiscriminator2(type.schema);
      } else if (type instanceof ZodEffects2) {
        return getDiscriminator2(type.innerType());
      } else if (type instanceof ZodLiteral2) {
        return [type.value];
      } else if (type instanceof ZodEnum2) {
        return type.options;
      } else if (type instanceof ZodNativeEnum2) {
        return util2.objectValues(type.enum);
      } else if (type instanceof ZodDefault2) {
        return getDiscriminator2(type._def.innerType);
      } else if (type instanceof ZodUndefined2) {
        return [void 0];
      } else if (type instanceof ZodNull2) {
        return [null];
      } else if (type instanceof ZodOptional2) {
        return [void 0, ...getDiscriminator2(type.unwrap())];
      } else if (type instanceof ZodNullable2) {
        return [null, ...getDiscriminator2(type.unwrap())];
      } else if (type instanceof ZodBranded2) {
        return getDiscriminator2(type.unwrap());
      } else if (type instanceof ZodReadonly2) {
        return getDiscriminator2(type.unwrap());
      } else if (type instanceof ZodCatch2) {
        return getDiscriminator2(type._def.innerType);
      } else {
        return [];
      }
    };
    var ZodDiscriminatedUnion2 = class _ZodDiscriminatedUnion extends ZodType2 {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType2.object) {
          addIssueToContext2(ctx, {
            code: ZodIssueCode2.invalid_type,
            expected: ZodParsedType2.object,
            received: ctx.parsedType
          });
          return INVALID2;
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.optionsMap.get(discriminatorValue);
        if (!option) {
          addIssueToContext2(ctx, {
            code: ZodIssueCode2.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [discriminator]
          });
          return INVALID2;
        }
        if (ctx.common.async) {
          return option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
        } else {
          return option._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
        }
      }
      get discriminator() {
        return this._def.discriminator;
      }
      get options() {
        return this._def.options;
      }
      get optionsMap() {
        return this._def.optionsMap;
      }
      /**
       * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
       * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
       * have a different value for each object in the union.
       * @param discriminator the name of the discriminator property
       * @param types an array of object schemas
       * @param params
       */
      static create(discriminator, options, params) {
        const optionsMap = /* @__PURE__ */ new Map();
        for (const type of options) {
          const discriminatorValues = getDiscriminator2(type.shape[discriminator]);
          if (!discriminatorValues.length) {
            throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
          }
          for (const value of discriminatorValues) {
            if (optionsMap.has(value)) {
              throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
            }
            optionsMap.set(value, type);
          }
        }
        return new _ZodDiscriminatedUnion({
          typeName: ZodFirstPartyTypeKind2.ZodDiscriminatedUnion,
          discriminator,
          options,
          optionsMap,
          ...processCreateParams2(params)
        });
      }
    };
    function mergeValues2(a, b) {
      const aType = getParsedType2(a);
      const bType = getParsedType2(b);
      if (a === b) {
        return { valid: true, data: a };
      } else if (aType === ZodParsedType2.object && bType === ZodParsedType2.object) {
        const bKeys = util2.objectKeys(b);
        const sharedKeys = util2.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
        const newObj = { ...a, ...b };
        for (const key of sharedKeys) {
          const sharedValue = mergeValues2(a[key], b[key]);
          if (!sharedValue.valid) {
            return { valid: false };
          }
          newObj[key] = sharedValue.data;
        }
        return { valid: true, data: newObj };
      } else if (aType === ZodParsedType2.array && bType === ZodParsedType2.array) {
        if (a.length !== b.length) {
          return { valid: false };
        }
        const newArray = [];
        for (let index = 0; index < a.length; index++) {
          const itemA = a[index];
          const itemB = b[index];
          const sharedValue = mergeValues2(itemA, itemB);
          if (!sharedValue.valid) {
            return { valid: false };
          }
          newArray.push(sharedValue.data);
        }
        return { valid: true, data: newArray };
      } else if (aType === ZodParsedType2.date && bType === ZodParsedType2.date && +a === +b) {
        return { valid: true, data: a };
      } else {
        return { valid: false };
      }
    }
    var ZodIntersection2 = class extends ZodType2 {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const handleParsed = (parsedLeft, parsedRight) => {
          if (isAborted2(parsedLeft) || isAborted2(parsedRight)) {
            return INVALID2;
          }
          const merged = mergeValues2(parsedLeft.value, parsedRight.value);
          if (!merged.valid) {
            addIssueToContext2(ctx, {
              code: ZodIssueCode2.invalid_intersection_types
            });
            return INVALID2;
          }
          if (isDirty2(parsedLeft) || isDirty2(parsedRight)) {
            status.dirty();
          }
          return { status: status.value, value: merged.data };
        };
        if (ctx.common.async) {
          return Promise.all([
            this._def.left._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            }),
            this._def.right._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            })
          ]).then(([left, right]) => handleParsed(left, right));
        } else {
          return handleParsed(this._def.left._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }), this._def.right._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }));
        }
      }
    };
    ZodIntersection2.create = (left, right, params) => {
      return new ZodIntersection2({
        left,
        right,
        typeName: ZodFirstPartyTypeKind2.ZodIntersection,
        ...processCreateParams2(params)
      });
    };
    var ZodTuple2 = class _ZodTuple extends ZodType2 {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType2.array) {
          addIssueToContext2(ctx, {
            code: ZodIssueCode2.invalid_type,
            expected: ZodParsedType2.array,
            received: ctx.parsedType
          });
          return INVALID2;
        }
        if (ctx.data.length < this._def.items.length) {
          addIssueToContext2(ctx, {
            code: ZodIssueCode2.too_small,
            minimum: this._def.items.length,
            inclusive: true,
            exact: false,
            type: "array"
          });
          return INVALID2;
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
          addIssueToContext2(ctx, {
            code: ZodIssueCode2.too_big,
            maximum: this._def.items.length,
            inclusive: true,
            exact: false,
            type: "array"
          });
          status.dirty();
        }
        const items = [...ctx.data].map((item, itemIndex) => {
          const schema = this._def.items[itemIndex] || this._def.rest;
          if (!schema)
            return null;
          return schema._parse(new ParseInputLazyPath2(ctx, item, ctx.path, itemIndex));
        }).filter((x) => !!x);
        if (ctx.common.async) {
          return Promise.all(items).then((results) => {
            return ParseStatus2.mergeArray(status, results);
          });
        } else {
          return ParseStatus2.mergeArray(status, items);
        }
      }
      get items() {
        return this._def.items;
      }
      rest(rest) {
        return new _ZodTuple({
          ...this._def,
          rest
        });
      }
    };
    ZodTuple2.create = (schemas, params) => {
      if (!Array.isArray(schemas)) {
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      }
      return new ZodTuple2({
        items: schemas,
        typeName: ZodFirstPartyTypeKind2.ZodTuple,
        rest: null,
        ...processCreateParams2(params)
      });
    };
    var ZodRecord2 = class _ZodRecord extends ZodType2 {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType2.object) {
          addIssueToContext2(ctx, {
            code: ZodIssueCode2.invalid_type,
            expected: ZodParsedType2.object,
            received: ctx.parsedType
          });
          return INVALID2;
        }
        const pairs = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for (const key in ctx.data) {
          pairs.push({
            key: keyType._parse(new ParseInputLazyPath2(ctx, key, ctx.path, key)),
            value: valueType._parse(new ParseInputLazyPath2(ctx, ctx.data[key], ctx.path, key)),
            alwaysSet: key in ctx.data
          });
        }
        if (ctx.common.async) {
          return ParseStatus2.mergeObjectAsync(status, pairs);
        } else {
          return ParseStatus2.mergeObjectSync(status, pairs);
        }
      }
      get element() {
        return this._def.valueType;
      }
      static create(first, second, third) {
        if (second instanceof ZodType2) {
          return new _ZodRecord({
            keyType: first,
            valueType: second,
            typeName: ZodFirstPartyTypeKind2.ZodRecord,
            ...processCreateParams2(third)
          });
        }
        return new _ZodRecord({
          keyType: ZodString2.create(),
          valueType: first,
          typeName: ZodFirstPartyTypeKind2.ZodRecord,
          ...processCreateParams2(second)
        });
      }
    };
    var ZodMap2 = class extends ZodType2 {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType2.map) {
          addIssueToContext2(ctx, {
            code: ZodIssueCode2.invalid_type,
            expected: ZodParsedType2.map,
            received: ctx.parsedType
          });
          return INVALID2;
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs = [...ctx.data.entries()].map(([key, value], index) => {
          return {
            key: keyType._parse(new ParseInputLazyPath2(ctx, key, ctx.path, [index, "key"])),
            value: valueType._parse(new ParseInputLazyPath2(ctx, value, ctx.path, [index, "value"]))
          };
        });
        if (ctx.common.async) {
          const finalMap = /* @__PURE__ */ new Map();
          return Promise.resolve().then(async () => {
            for (const pair of pairs) {
              const key = await pair.key;
              const value = await pair.value;
              if (key.status === "aborted" || value.status === "aborted") {
                return INVALID2;
              }
              if (key.status === "dirty" || value.status === "dirty") {
                status.dirty();
              }
              finalMap.set(key.value, value.value);
            }
            return { status: status.value, value: finalMap };
          });
        } else {
          const finalMap = /* @__PURE__ */ new Map();
          for (const pair of pairs) {
            const key = pair.key;
            const value = pair.value;
            if (key.status === "aborted" || value.status === "aborted") {
              return INVALID2;
            }
            if (key.status === "dirty" || value.status === "dirty") {
              status.dirty();
            }
            finalMap.set(key.value, value.value);
          }
          return { status: status.value, value: finalMap };
        }
      }
    };
    ZodMap2.create = (keyType, valueType, params) => {
      return new ZodMap2({
        valueType,
        keyType,
        typeName: ZodFirstPartyTypeKind2.ZodMap,
        ...processCreateParams2(params)
      });
    };
    var ZodSet2 = class _ZodSet extends ZodType2 {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType2.set) {
          addIssueToContext2(ctx, {
            code: ZodIssueCode2.invalid_type,
            expected: ZodParsedType2.set,
            received: ctx.parsedType
          });
          return INVALID2;
        }
        const def = this._def;
        if (def.minSize !== null) {
          if (ctx.data.size < def.minSize.value) {
            addIssueToContext2(ctx, {
              code: ZodIssueCode2.too_small,
              minimum: def.minSize.value,
              type: "set",
              inclusive: true,
              exact: false,
              message: def.minSize.message
            });
            status.dirty();
          }
        }
        if (def.maxSize !== null) {
          if (ctx.data.size > def.maxSize.value) {
            addIssueToContext2(ctx, {
              code: ZodIssueCode2.too_big,
              maximum: def.maxSize.value,
              type: "set",
              inclusive: true,
              exact: false,
              message: def.maxSize.message
            });
            status.dirty();
          }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements2) {
          const parsedSet = /* @__PURE__ */ new Set();
          for (const element of elements2) {
            if (element.status === "aborted")
              return INVALID2;
            if (element.status === "dirty")
              status.dirty();
            parsedSet.add(element.value);
          }
          return { status: status.value, value: parsedSet };
        }
        const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath2(ctx, item, ctx.path, i)));
        if (ctx.common.async) {
          return Promise.all(elements).then((elements2) => finalizeSet(elements2));
        } else {
          return finalizeSet(elements);
        }
      }
      min(minSize, message) {
        return new _ZodSet({
          ...this._def,
          minSize: { value: minSize, message: errorUtil2.toString(message) }
        });
      }
      max(maxSize, message) {
        return new _ZodSet({
          ...this._def,
          maxSize: { value: maxSize, message: errorUtil2.toString(message) }
        });
      }
      size(size, message) {
        return this.min(size, message).max(size, message);
      }
      nonempty(message) {
        return this.min(1, message);
      }
    };
    ZodSet2.create = (valueType, params) => {
      return new ZodSet2({
        valueType,
        minSize: null,
        maxSize: null,
        typeName: ZodFirstPartyTypeKind2.ZodSet,
        ...processCreateParams2(params)
      });
    };
    var ZodFunction2 = class _ZodFunction extends ZodType2 {
      constructor() {
        super(...arguments);
        this.validate = this.implement;
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType2.function) {
          addIssueToContext2(ctx, {
            code: ZodIssueCode2.invalid_type,
            expected: ZodParsedType2.function,
            received: ctx.parsedType
          });
          return INVALID2;
        }
        function makeArgsIssue(args, error) {
          return makeIssue2({
            data: args,
            path: ctx.path,
            errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap2(), en_default2].filter((x) => !!x),
            issueData: {
              code: ZodIssueCode2.invalid_arguments,
              argumentsError: error
            }
          });
        }
        function makeReturnsIssue(returns, error) {
          return makeIssue2({
            data: returns,
            path: ctx.path,
            errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap2(), en_default2].filter((x) => !!x),
            issueData: {
              code: ZodIssueCode2.invalid_return_type,
              returnTypeError: error
            }
          });
        }
        const params = { errorMap: ctx.common.contextualErrorMap };
        const fn = ctx.data;
        if (this._def.returns instanceof ZodPromise2) {
          const me = this;
          return OK2(async function(...args) {
            const error = new ZodError2([]);
            const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
              error.addIssue(makeArgsIssue(args, e));
              throw error;
            });
            const result = await Reflect.apply(fn, this, parsedArgs);
            const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
              error.addIssue(makeReturnsIssue(result, e));
              throw error;
            });
            return parsedReturns;
          });
        } else {
          const me = this;
          return OK2(function(...args) {
            const parsedArgs = me._def.args.safeParse(args, params);
            if (!parsedArgs.success) {
              throw new ZodError2([makeArgsIssue(args, parsedArgs.error)]);
            }
            const result = Reflect.apply(fn, this, parsedArgs.data);
            const parsedReturns = me._def.returns.safeParse(result, params);
            if (!parsedReturns.success) {
              throw new ZodError2([makeReturnsIssue(result, parsedReturns.error)]);
            }
            return parsedReturns.data;
          });
        }
      }
      parameters() {
        return this._def.args;
      }
      returnType() {
        return this._def.returns;
      }
      args(...items) {
        return new _ZodFunction({
          ...this._def,
          args: ZodTuple2.create(items).rest(ZodUnknown2.create())
        });
      }
      returns(returnType) {
        return new _ZodFunction({
          ...this._def,
          returns: returnType
        });
      }
      implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
      }
      strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
      }
      static create(args, returns, params) {
        return new _ZodFunction({
          args: args ? args : ZodTuple2.create([]).rest(ZodUnknown2.create()),
          returns: returns || ZodUnknown2.create(),
          typeName: ZodFirstPartyTypeKind2.ZodFunction,
          ...processCreateParams2(params)
        });
      }
    };
    var ZodLazy2 = class extends ZodType2 {
      get schema() {
        return this._def.getter();
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
      }
    };
    ZodLazy2.create = (getter, params) => {
      return new ZodLazy2({
        getter,
        typeName: ZodFirstPartyTypeKind2.ZodLazy,
        ...processCreateParams2(params)
      });
    };
    var ZodLiteral2 = class extends ZodType2 {
      _parse(input) {
        if (input.data !== this._def.value) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext2(ctx, {
            received: ctx.data,
            code: ZodIssueCode2.invalid_literal,
            expected: this._def.value
          });
          return INVALID2;
        }
        return { status: "valid", value: input.data };
      }
      get value() {
        return this._def.value;
      }
    };
    ZodLiteral2.create = (value, params) => {
      return new ZodLiteral2({
        value,
        typeName: ZodFirstPartyTypeKind2.ZodLiteral,
        ...processCreateParams2(params)
      });
    };
    function createZodEnum2(values, params) {
      return new ZodEnum2({
        values,
        typeName: ZodFirstPartyTypeKind2.ZodEnum,
        ...processCreateParams2(params)
      });
    }
    var ZodEnum2 = class _ZodEnum extends ZodType2 {
      _parse(input) {
        if (typeof input.data !== "string") {
          const ctx = this._getOrReturnCtx(input);
          const expectedValues = this._def.values;
          addIssueToContext2(ctx, {
            expected: util2.joinValues(expectedValues),
            received: ctx.parsedType,
            code: ZodIssueCode2.invalid_type
          });
          return INVALID2;
        }
        if (!this._cache) {
          this._cache = new Set(this._def.values);
        }
        if (!this._cache.has(input.data)) {
          const ctx = this._getOrReturnCtx(input);
          const expectedValues = this._def.values;
          addIssueToContext2(ctx, {
            received: ctx.data,
            code: ZodIssueCode2.invalid_enum_value,
            options: expectedValues
          });
          return INVALID2;
        }
        return OK2(input.data);
      }
      get options() {
        return this._def.values;
      }
      get enum() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      get Values() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      get Enum() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      extract(values, newDef = this._def) {
        return _ZodEnum.create(values, {
          ...this._def,
          ...newDef
        });
      }
      exclude(values, newDef = this._def) {
        return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
          ...this._def,
          ...newDef
        });
      }
    };
    ZodEnum2.create = createZodEnum2;
    var ZodNativeEnum2 = class extends ZodType2 {
      _parse(input) {
        const nativeEnumValues = util2.getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== ZodParsedType2.string && ctx.parsedType !== ZodParsedType2.number) {
          const expectedValues = util2.objectValues(nativeEnumValues);
          addIssueToContext2(ctx, {
            expected: util2.joinValues(expectedValues),
            received: ctx.parsedType,
            code: ZodIssueCode2.invalid_type
          });
          return INVALID2;
        }
        if (!this._cache) {
          this._cache = new Set(util2.getValidEnumValues(this._def.values));
        }
        if (!this._cache.has(input.data)) {
          const expectedValues = util2.objectValues(nativeEnumValues);
          addIssueToContext2(ctx, {
            received: ctx.data,
            code: ZodIssueCode2.invalid_enum_value,
            options: expectedValues
          });
          return INVALID2;
        }
        return OK2(input.data);
      }
      get enum() {
        return this._def.values;
      }
    };
    ZodNativeEnum2.create = (values, params) => {
      return new ZodNativeEnum2({
        values,
        typeName: ZodFirstPartyTypeKind2.ZodNativeEnum,
        ...processCreateParams2(params)
      });
    };
    var ZodPromise2 = class extends ZodType2 {
      unwrap() {
        return this._def.type;
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType2.promise && ctx.common.async === false) {
          addIssueToContext2(ctx, {
            code: ZodIssueCode2.invalid_type,
            expected: ZodParsedType2.promise,
            received: ctx.parsedType
          });
          return INVALID2;
        }
        const promisified = ctx.parsedType === ZodParsedType2.promise ? ctx.data : Promise.resolve(ctx.data);
        return OK2(promisified.then((data) => {
          return this._def.type.parseAsync(data, {
            path: ctx.path,
            errorMap: ctx.common.contextualErrorMap
          });
        }));
      }
    };
    ZodPromise2.create = (schema, params) => {
      return new ZodPromise2({
        type: schema,
        typeName: ZodFirstPartyTypeKind2.ZodPromise,
        ...processCreateParams2(params)
      });
    };
    var ZodEffects2 = class extends ZodType2 {
      innerType() {
        return this._def.schema;
      }
      sourceType() {
        return this._def.schema._def.typeName === ZodFirstPartyTypeKind2.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const effect = this._def.effect || null;
        const checkCtx = {
          addIssue: (arg) => {
            addIssueToContext2(ctx, arg);
            if (arg.fatal) {
              status.abort();
            } else {
              status.dirty();
            }
          },
          get path() {
            return ctx.path;
          }
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "preprocess") {
          const processed = effect.transform(ctx.data, checkCtx);
          if (ctx.common.async) {
            return Promise.resolve(processed).then(async (processed2) => {
              if (status.value === "aborted")
                return INVALID2;
              const result = await this._def.schema._parseAsync({
                data: processed2,
                path: ctx.path,
                parent: ctx
              });
              if (result.status === "aborted")
                return INVALID2;
              if (result.status === "dirty")
                return DIRTY2(result.value);
              if (status.value === "dirty")
                return DIRTY2(result.value);
              return result;
            });
          } else {
            if (status.value === "aborted")
              return INVALID2;
            const result = this._def.schema._parseSync({
              data: processed,
              path: ctx.path,
              parent: ctx
            });
            if (result.status === "aborted")
              return INVALID2;
            if (result.status === "dirty")
              return DIRTY2(result.value);
            if (status.value === "dirty")
              return DIRTY2(result.value);
            return result;
          }
        }
        if (effect.type === "refinement") {
          const executeRefinement = (acc) => {
            const result = effect.refinement(acc, checkCtx);
            if (ctx.common.async) {
              return Promise.resolve(result);
            }
            if (result instanceof Promise) {
              throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            }
            return acc;
          };
          if (ctx.common.async === false) {
            const inner = this._def.schema._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (inner.status === "aborted")
              return INVALID2;
            if (inner.status === "dirty")
              status.dirty();
            executeRefinement(inner.value);
            return { status: status.value, value: inner.value };
          } else {
            return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
              if (inner.status === "aborted")
                return INVALID2;
              if (inner.status === "dirty")
                status.dirty();
              return executeRefinement(inner.value).then(() => {
                return { status: status.value, value: inner.value };
              });
            });
          }
        }
        if (effect.type === "transform") {
          if (ctx.common.async === false) {
            const base = this._def.schema._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (!isValid2(base))
              return INVALID2;
            const result = effect.transform(base.value, checkCtx);
            if (result instanceof Promise) {
              throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
            }
            return { status: status.value, value: result };
          } else {
            return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
              if (!isValid2(base))
                return INVALID2;
              return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
                status: status.value,
                value: result
              }));
            });
          }
        }
        util2.assertNever(effect);
      }
    };
    ZodEffects2.create = (schema, effect, params) => {
      return new ZodEffects2({
        schema,
        typeName: ZodFirstPartyTypeKind2.ZodEffects,
        effect,
        ...processCreateParams2(params)
      });
    };
    ZodEffects2.createWithPreprocess = (preprocess, schema, params) => {
      return new ZodEffects2({
        schema,
        effect: { type: "preprocess", transform: preprocess },
        typeName: ZodFirstPartyTypeKind2.ZodEffects,
        ...processCreateParams2(params)
      });
    };
    var ZodOptional2 = class extends ZodType2 {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType2.undefined) {
          return OK2(void 0);
        }
        return this._def.innerType._parse(input);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodOptional2.create = (type, params) => {
      return new ZodOptional2({
        innerType: type,
        typeName: ZodFirstPartyTypeKind2.ZodOptional,
        ...processCreateParams2(params)
      });
    };
    var ZodNullable2 = class extends ZodType2 {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType2.null) {
          return OK2(null);
        }
        return this._def.innerType._parse(input);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodNullable2.create = (type, params) => {
      return new ZodNullable2({
        innerType: type,
        typeName: ZodFirstPartyTypeKind2.ZodNullable,
        ...processCreateParams2(params)
      });
    };
    var ZodDefault2 = class extends ZodType2 {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === ZodParsedType2.undefined) {
          data = this._def.defaultValue();
        }
        return this._def.innerType._parse({
          data,
          path: ctx.path,
          parent: ctx
        });
      }
      removeDefault() {
        return this._def.innerType;
      }
    };
    ZodDefault2.create = (type, params) => {
      return new ZodDefault2({
        innerType: type,
        typeName: ZodFirstPartyTypeKind2.ZodDefault,
        defaultValue: typeof params.default === "function" ? params.default : () => params.default,
        ...processCreateParams2(params)
      });
    };
    var ZodCatch2 = class extends ZodType2 {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const newCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          }
        };
        const result = this._def.innerType._parse({
          data: newCtx.data,
          path: newCtx.path,
          parent: {
            ...newCtx
          }
        });
        if (isAsync2(result)) {
          return result.then((result2) => {
            return {
              status: "valid",
              value: result2.status === "valid" ? result2.value : this._def.catchValue({
                get error() {
                  return new ZodError2(newCtx.common.issues);
                },
                input: newCtx.data
              })
            };
          });
        } else {
          return {
            status: "valid",
            value: result.status === "valid" ? result.value : this._def.catchValue({
              get error() {
                return new ZodError2(newCtx.common.issues);
              },
              input: newCtx.data
            })
          };
        }
      }
      removeCatch() {
        return this._def.innerType;
      }
    };
    ZodCatch2.create = (type, params) => {
      return new ZodCatch2({
        innerType: type,
        typeName: ZodFirstPartyTypeKind2.ZodCatch,
        catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
        ...processCreateParams2(params)
      });
    };
    var ZodNaN2 = class extends ZodType2 {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType2.nan) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext2(ctx, {
            code: ZodIssueCode2.invalid_type,
            expected: ZodParsedType2.nan,
            received: ctx.parsedType
          });
          return INVALID2;
        }
        return { status: "valid", value: input.data };
      }
    };
    ZodNaN2.create = (params) => {
      return new ZodNaN2({
        typeName: ZodFirstPartyTypeKind2.ZodNaN,
        ...processCreateParams2(params)
      });
    };
    var BRAND2 = Symbol("zod_brand");
    var ZodBranded2 = class extends ZodType2 {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
          data,
          path: ctx.path,
          parent: ctx
        });
      }
      unwrap() {
        return this._def.type;
      }
    };
    var ZodPipeline2 = class _ZodPipeline extends ZodType2 {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.common.async) {
          const handleAsync = async () => {
            const inResult = await this._def.in._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (inResult.status === "aborted")
              return INVALID2;
            if (inResult.status === "dirty") {
              status.dirty();
              return DIRTY2(inResult.value);
            } else {
              return this._def.out._parseAsync({
                data: inResult.value,
                path: ctx.path,
                parent: ctx
              });
            }
          };
          return handleAsync();
        } else {
          const inResult = this._def.in._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inResult.status === "aborted")
            return INVALID2;
          if (inResult.status === "dirty") {
            status.dirty();
            return {
              status: "dirty",
              value: inResult.value
            };
          } else {
            return this._def.out._parseSync({
              data: inResult.value,
              path: ctx.path,
              parent: ctx
            });
          }
        }
      }
      static create(a, b) {
        return new _ZodPipeline({
          in: a,
          out: b,
          typeName: ZodFirstPartyTypeKind2.ZodPipeline
        });
      }
    };
    var ZodReadonly2 = class extends ZodType2 {
      _parse(input) {
        const result = this._def.innerType._parse(input);
        const freeze = (data) => {
          if (isValid2(data)) {
            data.value = Object.freeze(data.value);
          }
          return data;
        };
        return isAsync2(result) ? result.then((data) => freeze(data)) : freeze(result);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodReadonly2.create = (type, params) => {
      return new ZodReadonly2({
        innerType: type,
        typeName: ZodFirstPartyTypeKind2.ZodReadonly,
        ...processCreateParams2(params)
      });
    };
    function cleanParams2(params, data) {
      const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
      const p2 = typeof p === "string" ? { message: p } : p;
      return p2;
    }
    function custom2(check, _params = {}, fatal) {
      if (check)
        return ZodAny2.create().superRefine((data, ctx) => {
          const r = check(data);
          if (r instanceof Promise) {
            return r.then((r2) => {
              if (!r2) {
                const params = cleanParams2(_params, data);
                const _fatal = params.fatal ?? fatal ?? true;
                ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
              }
            });
          }
          if (!r) {
            const params = cleanParams2(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
          return;
        });
      return ZodAny2.create();
    }
    var late2 = {
      object: ZodObject2.lazycreate
    };
    var ZodFirstPartyTypeKind2;
    (function(ZodFirstPartyTypeKind5) {
      ZodFirstPartyTypeKind5["ZodString"] = "ZodString";
      ZodFirstPartyTypeKind5["ZodNumber"] = "ZodNumber";
      ZodFirstPartyTypeKind5["ZodNaN"] = "ZodNaN";
      ZodFirstPartyTypeKind5["ZodBigInt"] = "ZodBigInt";
      ZodFirstPartyTypeKind5["ZodBoolean"] = "ZodBoolean";
      ZodFirstPartyTypeKind5["ZodDate"] = "ZodDate";
      ZodFirstPartyTypeKind5["ZodSymbol"] = "ZodSymbol";
      ZodFirstPartyTypeKind5["ZodUndefined"] = "ZodUndefined";
      ZodFirstPartyTypeKind5["ZodNull"] = "ZodNull";
      ZodFirstPartyTypeKind5["ZodAny"] = "ZodAny";
      ZodFirstPartyTypeKind5["ZodUnknown"] = "ZodUnknown";
      ZodFirstPartyTypeKind5["ZodNever"] = "ZodNever";
      ZodFirstPartyTypeKind5["ZodVoid"] = "ZodVoid";
      ZodFirstPartyTypeKind5["ZodArray"] = "ZodArray";
      ZodFirstPartyTypeKind5["ZodObject"] = "ZodObject";
      ZodFirstPartyTypeKind5["ZodUnion"] = "ZodUnion";
      ZodFirstPartyTypeKind5["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
      ZodFirstPartyTypeKind5["ZodIntersection"] = "ZodIntersection";
      ZodFirstPartyTypeKind5["ZodTuple"] = "ZodTuple";
      ZodFirstPartyTypeKind5["ZodRecord"] = "ZodRecord";
      ZodFirstPartyTypeKind5["ZodMap"] = "ZodMap";
      ZodFirstPartyTypeKind5["ZodSet"] = "ZodSet";
      ZodFirstPartyTypeKind5["ZodFunction"] = "ZodFunction";
      ZodFirstPartyTypeKind5["ZodLazy"] = "ZodLazy";
      ZodFirstPartyTypeKind5["ZodLiteral"] = "ZodLiteral";
      ZodFirstPartyTypeKind5["ZodEnum"] = "ZodEnum";
      ZodFirstPartyTypeKind5["ZodEffects"] = "ZodEffects";
      ZodFirstPartyTypeKind5["ZodNativeEnum"] = "ZodNativeEnum";
      ZodFirstPartyTypeKind5["ZodOptional"] = "ZodOptional";
      ZodFirstPartyTypeKind5["ZodNullable"] = "ZodNullable";
      ZodFirstPartyTypeKind5["ZodDefault"] = "ZodDefault";
      ZodFirstPartyTypeKind5["ZodCatch"] = "ZodCatch";
      ZodFirstPartyTypeKind5["ZodPromise"] = "ZodPromise";
      ZodFirstPartyTypeKind5["ZodBranded"] = "ZodBranded";
      ZodFirstPartyTypeKind5["ZodPipeline"] = "ZodPipeline";
      ZodFirstPartyTypeKind5["ZodReadonly"] = "ZodReadonly";
    })(ZodFirstPartyTypeKind2 || (ZodFirstPartyTypeKind2 = {}));
    var instanceOfType2 = (cls, params = {
      message: `Input not instance of ${cls.name}`
    }) => custom2((data) => data instanceof cls, params);
    var stringType2 = ZodString2.create;
    var numberType2 = ZodNumber2.create;
    var nanType2 = ZodNaN2.create;
    var bigIntType2 = ZodBigInt2.create;
    var booleanType2 = ZodBoolean2.create;
    var dateType2 = ZodDate2.create;
    var symbolType2 = ZodSymbol2.create;
    var undefinedType2 = ZodUndefined2.create;
    var nullType2 = ZodNull2.create;
    var anyType2 = ZodAny2.create;
    var unknownType2 = ZodUnknown2.create;
    var neverType2 = ZodNever2.create;
    var voidType2 = ZodVoid2.create;
    var arrayType2 = ZodArray2.create;
    var objectType2 = ZodObject2.create;
    var strictObjectType2 = ZodObject2.strictCreate;
    var unionType2 = ZodUnion2.create;
    var discriminatedUnionType2 = ZodDiscriminatedUnion2.create;
    var intersectionType2 = ZodIntersection2.create;
    var tupleType2 = ZodTuple2.create;
    var recordType2 = ZodRecord2.create;
    var mapType2 = ZodMap2.create;
    var setType2 = ZodSet2.create;
    var functionType2 = ZodFunction2.create;
    var lazyType2 = ZodLazy2.create;
    var literalType2 = ZodLiteral2.create;
    var enumType2 = ZodEnum2.create;
    var nativeEnumType2 = ZodNativeEnum2.create;
    var promiseType2 = ZodPromise2.create;
    var effectsType2 = ZodEffects2.create;
    var optionalType2 = ZodOptional2.create;
    var nullableType2 = ZodNullable2.create;
    var preprocessType2 = ZodEffects2.createWithPreprocess;
    var pipelineType2 = ZodPipeline2.create;
    var ostring2 = () => stringType2().optional();
    var onumber2 = () => numberType2().optional();
    var oboolean2 = () => booleanType2().optional();
    var coerce2 = {
      string: (arg) => ZodString2.create({ ...arg, coerce: true }),
      number: (arg) => ZodNumber2.create({ ...arg, coerce: true }),
      boolean: (arg) => ZodBoolean2.create({
        ...arg,
        coerce: true
      }),
      bigint: (arg) => ZodBigInt2.create({ ...arg, coerce: true }),
      date: (arg) => ZodDate2.create({ ...arg, coerce: true })
    };
    var NEVER2 = INVALID2;
    var ProviderSchema = external_exports2.enum([
      "OpenAI",
      "Anthropic",
      "Google",
      "Azure",
      "AWS",
      "Cohere",
      "Mistral",
      "Custom"
    ]);
    var CurrencySchema = external_exports2.enum([
      "USD",
      "EUR",
      "GBP",
      "JPY",
      "CAD",
      "AUD",
      "CHF",
      "CNY"
    ]);
    var CostRecordSchema = external_exports2.object({
      id: external_exports2.string().uuid(),
      timestamp: external_exports2.string().datetime(),
      provider: ProviderSchema,
      model: external_exports2.string().min(1),
      organization_id: external_exports2.string().optional(),
      project_id: external_exports2.string().optional(),
      workflow_id: external_exports2.string().optional(),
      agent_id: external_exports2.string().optional(),
      execution_id: external_exports2.string().uuid().optional(),
      prompt_tokens: external_exports2.number().int().nonnegative(),
      completion_tokens: external_exports2.number().int().nonnegative(),
      total_tokens: external_exports2.number().int().nonnegative(),
      cached_tokens: external_exports2.number().int().nonnegative().optional(),
      reasoning_tokens: external_exports2.number().int().nonnegative().optional(),
      cost_amount: external_exports2.string(),
      // Decimal string for precision
      currency: CurrencySchema,
      latency_ms: external_exports2.number().nonnegative().optional(),
      tags: external_exports2.record(external_exports2.string()).optional(),
      metadata: external_exports2.record(external_exports2.unknown()).optional()
    });
    var CostAggregationSchema = external_exports2.object({
      period_start: external_exports2.string().datetime(),
      period_end: external_exports2.string().datetime(),
      total_cost: external_exports2.string(),
      // Decimal string
      currency: CurrencySchema,
      total_tokens: external_exports2.number().int().nonnegative(),
      total_requests: external_exports2.number().int().nonnegative(),
      by_provider: external_exports2.record(external_exports2.object({
        cost: external_exports2.string(),
        tokens: external_exports2.number().int().nonnegative(),
        requests: external_exports2.number().int().nonnegative()
      })).optional(),
      by_model: external_exports2.record(external_exports2.object({
        cost: external_exports2.string(),
        tokens: external_exports2.number().int().nonnegative(),
        requests: external_exports2.number().int().nonnegative()
      })).optional()
    });
    var OutcomeMetricTypeSchema = external_exports2.enum([
      "throughput",
      // Operations/requests per unit time
      "latency",
      // Response time metrics
      "success_rate",
      // Successful operations percentage
      "error_rate",
      // Failed operations percentage
      "quality_score",
      // Quality metric (e.g., accuracy, relevance)
      "user_satisfaction",
      // User feedback/NPS score
      "task_completion",
      // Task completion rate
      "revenue_impact",
      // Revenue attributed to LLM usage
      "cost_savings",
      // Costs saved vs alternative
      "productivity_gain",
      // Productivity improvement metric
      "custom"
      // Custom business metric
    ]);
    var OutcomeMetricSchema = external_exports2.object({
      id: external_exports2.string().uuid(),
      timestamp: external_exports2.string().datetime(),
      metric_type: OutcomeMetricTypeSchema,
      metric_name: external_exports2.string().min(1),
      value: external_exports2.number(),
      unit: external_exports2.string().min(1),
      organization_id: external_exports2.string().optional(),
      project_id: external_exports2.string().optional(),
      workflow_id: external_exports2.string().optional(),
      agent_id: external_exports2.string().optional(),
      correlation_window_hours: external_exports2.number().positive().default(24),
      baseline_value: external_exports2.number().optional(),
      target_value: external_exports2.number().optional(),
      tags: external_exports2.record(external_exports2.string()).optional(),
      metadata: external_exports2.record(external_exports2.unknown()).optional()
    });
    var OutcomeAggregationSchema = external_exports2.object({
      period_start: external_exports2.string().datetime(),
      period_end: external_exports2.string().datetime(),
      metric_type: OutcomeMetricTypeSchema,
      metric_name: external_exports2.string(),
      aggregate_value: external_exports2.number(),
      min_value: external_exports2.number(),
      max_value: external_exports2.number(),
      avg_value: external_exports2.number(),
      sample_count: external_exports2.number().int().nonnegative(),
      standard_deviation: external_exports2.number().optional()
    });
    var ROIAnalysisScopeSchema = external_exports2.enum([
      "organization",
      "project",
      "workflow",
      "agent",
      "model",
      "provider",
      "custom"
    ]);
    var ROIInputSchema = external_exports2.object({
      // Required: Cost data
      cost_records: external_exports2.array(CostRecordSchema).min(1).optional(),
      cost_aggregation: CostAggregationSchema.optional(),
      // Required: At least one outcome metric
      outcome_metrics: external_exports2.array(OutcomeMetricSchema).optional(),
      outcome_aggregations: external_exports2.array(OutcomeAggregationSchema).optional(),
      // Analysis parameters
      analysis_scope: ROIAnalysisScopeSchema,
      scope_id: external_exports2.string().optional(),
      period_start: external_exports2.string().datetime(),
      period_end: external_exports2.string().datetime(),
      // Correlation settings
      correlation_method: external_exports2.enum(["pearson", "spearman", "kendall"]).default("pearson"),
      min_correlation_threshold: external_exports2.number().min(-1).max(1).default(0.3),
      // ROI calculation settings
      roi_calculation_method: external_exports2.enum([
        "simple",
        // (gain - cost) / cost
        "net_present_value",
        // NPV over time
        "payback_period",
        // Time to recover cost
        "cost_efficiency"
        // Outcome per unit cost
      ]).default("simple"),
      // Optional: Baseline for comparison
      baseline_period_start: external_exports2.string().datetime().optional(),
      baseline_period_end: external_exports2.string().datetime().optional(),
      baseline_cost: external_exports2.string().optional(),
      baseline_outcome: external_exports2.number().optional(),
      // Optional: Business context
      business_value_per_unit: external_exports2.string().optional(),
      // e.g., $10 per successful task
      opportunity_cost_per_unit: external_exports2.string().optional(),
      // Request metadata
      request_id: external_exports2.string().uuid(),
      requester_id: external_exports2.string().optional(),
      tags: external_exports2.record(external_exports2.string()).optional(),
      metadata: external_exports2.record(external_exports2.unknown()).optional()
    }).refine(
      (data) => data.cost_records || data.cost_aggregation,
      { message: "Either cost_records or cost_aggregation must be provided" }
    ).refine(
      (data) => data.outcome_metrics || data.outcome_aggregations,
      { message: "Either outcome_metrics or outcome_aggregations must be provided" }
    );
    var CorrelationResultSchema = external_exports2.object({
      metric_name: external_exports2.string(),
      metric_type: OutcomeMetricTypeSchema,
      correlation_coefficient: external_exports2.number().min(-1).max(1),
      correlation_strength: external_exports2.enum(["strong_positive", "moderate_positive", "weak_positive", "none", "weak_negative", "moderate_negative", "strong_negative"]),
      p_value: external_exports2.number().min(0).max(1).optional(),
      sample_size: external_exports2.number().int().positive(),
      is_significant: external_exports2.boolean()
    });
    var ROIMetricSchema = external_exports2.object({
      roi_percentage: external_exports2.number(),
      // Can be negative
      roi_ratio: external_exports2.number(),
      // gain/cost ratio
      net_value: external_exports2.string(),
      // gain - cost (decimal string)
      total_cost: external_exports2.string(),
      // decimal string
      total_gain: external_exports2.string(),
      // estimated monetary gain (decimal string)
      cost_per_outcome_unit: external_exports2.string(),
      // cost efficiency
      gain_per_cost_unit: external_exports2.string(),
      // inverse efficiency
      payback_period_days: external_exports2.number().optional(),
      break_even_point: external_exports2.string().optional()
    });
    var EfficiencyMetricSchema = external_exports2.object({
      metric_name: external_exports2.string(),
      current_efficiency: external_exports2.number(),
      baseline_efficiency: external_exports2.number().optional(),
      efficiency_change_percentage: external_exports2.number().optional(),
      unit: external_exports2.string(),
      interpretation: external_exports2.string()
    });
    var ROIRecommendationSchema = external_exports2.object({
      category: external_exports2.enum([
        "cost_optimization",
        "outcome_improvement",
        "model_selection",
        "scaling_decision",
        "budget_adjustment",
        "process_improvement"
      ]),
      priority: external_exports2.enum(["high", "medium", "low"]),
      recommendation: external_exports2.string(),
      estimated_impact: external_exports2.string().optional(),
      confidence: external_exports2.number().min(0).max(1)
    });
    var ROIOutputSchema = external_exports2.object({
      // Core ROI results
      roi_metrics: ROIMetricSchema,
      // Correlation analysis
      correlations: external_exports2.array(CorrelationResultSchema),
      primary_correlation: CorrelationResultSchema.optional(),
      // Efficiency breakdown
      efficiency_metrics: external_exports2.array(EfficiencyMetricSchema),
      // Recommendations
      recommendations: external_exports2.array(ROIRecommendationSchema),
      // Summary
      summary: external_exports2.object({
        overall_assessment: external_exports2.enum([
          "highly_positive",
          "positive",
          "neutral",
          "negative",
          "highly_negative",
          "insufficient_data"
        ]),
        key_insight: external_exports2.string(),
        confidence_level: external_exports2.enum(["high", "medium", "low"]),
        data_quality_score: external_exports2.number().min(0).max(1)
      }),
      // Metadata
      metadata: external_exports2.object({
        analyzed_at: external_exports2.string().datetime(),
        analysis_scope: ROIAnalysisScopeSchema,
        scope_id: external_exports2.string().optional(),
        period_start: external_exports2.string().datetime(),
        period_end: external_exports2.string().datetime(),
        cost_records_analyzed: external_exports2.number().int().nonnegative(),
        outcome_metrics_analyzed: external_exports2.number().int().nonnegative(),
        processing_time_ms: external_exports2.number().nonnegative(),
        calculation_method: external_exports2.string()
      })
    });
    var DecisionTypeSchema = external_exports2.literal("roi_estimation");
    var DecisionEventSchema = external_exports2.object({
      agent_id: external_exports2.string(),
      agent_version: external_exports2.string(),
      decision_type: DecisionTypeSchema,
      inputs_hash: external_exports2.string(),
      // SHA-256 hash of inputs
      outputs: ROIOutputSchema,
      confidence: external_exports2.number().min(0).max(1),
      // Statistical confidence in ROI calculation
      constraints_applied: external_exports2.array(external_exports2.string()),
      // ROI thresholds, cost caps, etc.
      execution_ref: external_exports2.string().uuid(),
      timestamp: external_exports2.string().datetime(),
      metadata: external_exports2.object({
        request_id: external_exports2.string().uuid(),
        processing_duration_ms: external_exports2.number().nonnegative(),
        input_validation_passed: external_exports2.boolean(),
        data_completeness_score: external_exports2.number().min(0).max(1),
        statistical_significance: external_exports2.boolean(),
        correlation_method_used: external_exports2.string(),
        error_details: external_exports2.string().optional()
      })
    });
    var ROIErrorCodeSchema = external_exports2.enum([
      "INVALID_INPUT",
      "INSUFFICIENT_DATA",
      "CORRELATION_FAILED",
      "CALCULATION_ERROR",
      "PERSISTENCE_ERROR",
      "TIMEOUT",
      "INTERNAL_ERROR"
    ]);
    var ROIErrorSchema = external_exports2.object({
      code: ROIErrorCodeSchema,
      message: external_exports2.string(),
      details: external_exports2.record(external_exports2.unknown()).optional(),
      timestamp: external_exports2.string().datetime(),
      request_id: external_exports2.string().uuid().optional()
    });
    var AnalyzeROIResponseSchema = external_exports2.discriminatedUnion("success", [
      external_exports2.object({
        success: external_exports2.literal(true),
        data: ROIOutputSchema,
        decision_event_id: external_exports2.string().uuid()
      }),
      external_exports2.object({
        success: external_exports2.literal(false),
        error: ROIErrorSchema
      })
    ]);
    var HealthCheckResponseSchema = external_exports2.object({
      status: external_exports2.enum(["healthy", "degraded", "unhealthy"]),
      version: external_exports2.string(),
      timestamp: external_exports2.string().datetime(),
      dependencies: external_exports2.object({
        ruvector_service: external_exports2.enum(["connected", "disconnected", "unknown"]),
        telemetry: external_exports2.enum(["connected", "disconnected", "unknown"])
      })
    });
    var DEFAULT_AGENT_CONFIG = {
      agentId: "roi-estimation-agent",
      agentVersion: "1.0.0",
      enableDecisionLogging: true,
      defaultCurrency: "USD",
      validationLevel: "strict",
      minDataPointsForCorrelation: 5,
      significanceThreshold: 0.05,
      maxProcessingTimeMs: 3e4,
      ruvectorService: {
        baseUrl: process.env.RUVECTOR_SERVICE_URL || "http://localhost:8080",
        timeoutMs: 1e4,
        retryAttempts: 3,
        retryDelayMs: 1e3
      },
      telemetry: {
        endpoint: process.env.TELEMETRY_ENDPOINT || "http://localhost:4317",
        batchSize: 100,
        flushIntervalMs: 1e4
      }
    };
    var AGENT_METADATA = {
      name: "roi-estimation-agent",
      version: "1.0.0",
      classification: "ROI_ANALYSIS",
      decisionType: "roi_estimation",
      description: "Estimate return on investment by correlating cost with business or system outcomes",
      contractVersion: "1.0.0",
      capabilities: [
        "cost_outcome_correlation",
        "roi_calculation",
        "efficiency_analysis",
        "recommendation_generation"
      ],
      dependencies: [
        "ruvector-service",
        "llm-observatory"
      ]
    };
    var EXP_LIMIT = 9e15;
    var MAX_DIGITS = 1e9;
    var NUMERALS = "0123456789abcdef";
    var LN10 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
    var PI = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
    var DEFAULTS = {
      // These values must be integers within the stated ranges (inclusive).
      // Most of these values can be changed at run-time using the `Decimal.config` method.
      // The maximum number of significant digits of the result of a calculation or base conversion.
      // E.g. `Decimal.config({ precision: 20 });`
      precision: 20,
      // 1 to MAX_DIGITS
      // The rounding mode used when rounding to `precision`.
      //
      // ROUND_UP         0 Away from zero.
      // ROUND_DOWN       1 Towards zero.
      // ROUND_CEIL       2 Towards +Infinity.
      // ROUND_FLOOR      3 Towards -Infinity.
      // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
      // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
      // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
      // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
      // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
      //
      // E.g.
      // `Decimal.rounding = 4;`
      // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
      rounding: 4,
      // 0 to 8
      // The modulo mode used when calculating the modulus: a mod n.
      // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
      // The remainder (r) is calculated as: r = a - n * q.
      //
      // UP         0 The remainder is positive if the dividend is negative, else is negative.
      // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
      // FLOOR      3 The remainder has the same sign as the divisor (Python %).
      // HALF_EVEN  6 The IEEE 754 remainder function.
      // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
      //
      // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
      // division (9) are commonly used for the modulus operation. The other rounding modes can also
      // be used, but they may not give useful results.
      modulo: 1,
      // 0 to 9
      // The exponent value at and beneath which `toString` returns exponential notation.
      // JavaScript numbers: -7
      toExpNeg: -7,
      // 0 to -EXP_LIMIT
      // The exponent value at and above which `toString` returns exponential notation.
      // JavaScript numbers: 21
      toExpPos: 21,
      // 0 to EXP_LIMIT
      // The minimum exponent value, beneath which underflow to zero occurs.
      // JavaScript numbers: -324  (5e-324)
      minE: -EXP_LIMIT,
      // -1 to -EXP_LIMIT
      // The maximum exponent value, above which overflow to Infinity occurs.
      // JavaScript numbers: 308  (1.7976931348623157e+308)
      maxE: EXP_LIMIT,
      // 1 to EXP_LIMIT
      // Whether to use cryptographically-secure random number generation, if available.
      crypto: false
      // true/false
    };
    var inexact;
    var quadrant;
    var external = true;
    var decimalError = "[DecimalError] ";
    var invalidArgument = decimalError + "Invalid argument: ";
    var precisionLimitExceeded = decimalError + "Precision limit exceeded";
    var cryptoUnavailable = decimalError + "crypto unavailable";
    var tag = "[object Decimal]";
    var mathfloor = Math.floor;
    var mathpow = Math.pow;
    var isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
    var isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
    var isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
    var isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    var BASE = 1e7;
    var LOG_BASE = 7;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var LN10_PRECISION = LN10.length - 1;
    var PI_PRECISION = PI.length - 1;
    var P = { toStringTag: tag };
    P.absoluteValue = P.abs = function() {
      var x = new this.constructor(this);
      if (x.s < 0)
        x.s = 1;
      return finalise(x);
    };
    P.ceil = function() {
      return finalise(new this.constructor(this), this.e + 1, 2);
    };
    P.clampedTo = P.clamp = function(min2, max2) {
      var k, x = this, Ctor = x.constructor;
      min2 = new Ctor(min2);
      max2 = new Ctor(max2);
      if (!min2.s || !max2.s)
        return new Ctor(NaN);
      if (min2.gt(max2))
        throw Error(invalidArgument + max2);
      k = x.cmp(min2);
      return k < 0 ? min2 : x.cmp(max2) > 0 ? max2 : new Ctor(x);
    };
    P.comparedTo = P.cmp = function(y) {
      var i, j, xdL, ydL, x = this, xd = x.d, yd = (y = new x.constructor(y)).d, xs = x.s, ys = y.s;
      if (!xd || !yd) {
        return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
      }
      if (!xd[0] || !yd[0])
        return xd[0] ? xs : yd[0] ? -ys : 0;
      if (xs !== ys)
        return xs;
      if (x.e !== y.e)
        return x.e > y.e ^ xs < 0 ? 1 : -1;
      xdL = xd.length;
      ydL = yd.length;
      for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
        if (xd[i] !== yd[i])
          return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
      }
      return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
    };
    P.cosine = P.cos = function() {
      var pr, rm, x = this, Ctor = x.constructor;
      if (!x.d)
        return new Ctor(NaN);
      if (!x.d[0])
        return new Ctor(1);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
      Ctor.rounding = 1;
      x = cosine(Ctor, toLessThanHalfPi(Ctor, x));
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr, rm, true);
    };
    P.cubeRoot = P.cbrt = function() {
      var e, m, n, r, rep, s, sd, t, t3, t3plusx, x = this, Ctor = x.constructor;
      if (!x.isFinite() || x.isZero())
        return new Ctor(x);
      external = false;
      s = x.s * mathpow(x.s * x, 1 / 3);
      if (!s || Math.abs(s) == 1 / 0) {
        n = digitsToString(x.d);
        e = x.e;
        if (s = (e - n.length + 1) % 3)
          n += s == 1 || s == -2 ? "0" : "00";
        s = mathpow(n, 1 / 3);
        e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));
        if (s == 1 / 0) {
          n = "5e" + e;
        } else {
          n = s.toExponential();
          n = n.slice(0, n.indexOf("e") + 1) + e;
        }
        r = new Ctor(n);
        r.s = x.s;
      } else {
        r = new Ctor(s.toString());
      }
      sd = (e = Ctor.precision) + 3;
      for (; ; ) {
        t = r;
        t3 = t.times(t).times(t);
        t3plusx = t3.plus(x);
        r = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1);
        if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
          n = n.slice(sd - 3, sd + 1);
          if (n == "9999" || !rep && n == "4999") {
            if (!rep) {
              finalise(t, e + 1, 0);
              if (t.times(t).times(t).eq(x)) {
                r = t;
                break;
              }
            }
            sd += 4;
            rep = 1;
          } else {
            if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
              finalise(r, e + 1, 1);
              m = !r.times(r).times(r).eq(x);
            }
            break;
          }
        }
      }
      external = true;
      return finalise(r, e, Ctor.rounding, m);
    };
    P.decimalPlaces = P.dp = function() {
      var w, d = this.d, n = NaN;
      if (d) {
        w = d.length - 1;
        n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;
        w = d[w];
        if (w)
          for (; w % 10 == 0; w /= 10)
            n--;
        if (n < 0)
          n = 0;
      }
      return n;
    };
    P.dividedBy = P.div = function(y) {
      return divide(this, new this.constructor(y));
    };
    P.dividedToIntegerBy = P.divToInt = function(y) {
      var x = this, Ctor = x.constructor;
      return finalise(divide(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
    };
    P.equals = P.eq = function(y) {
      return this.cmp(y) === 0;
    };
    P.floor = function() {
      return finalise(new this.constructor(this), this.e + 1, 3);
    };
    P.greaterThan = P.gt = function(y) {
      return this.cmp(y) > 0;
    };
    P.greaterThanOrEqualTo = P.gte = function(y) {
      var k = this.cmp(y);
      return k == 1 || k === 0;
    };
    P.hyperbolicCosine = P.cosh = function() {
      var k, n, pr, rm, len, x = this, Ctor = x.constructor, one = new Ctor(1);
      if (!x.isFinite())
        return new Ctor(x.s ? 1 / 0 : NaN);
      if (x.isZero())
        return one;
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
      Ctor.rounding = 1;
      len = x.d.length;
      if (len < 32) {
        k = Math.ceil(len / 3);
        n = (1 / tinyPow(4, k)).toString();
      } else {
        k = 16;
        n = "2.3283064365386962890625e-10";
      }
      x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), true);
      var cosh2_x, i = k, d8 = new Ctor(8);
      for (; i--; ) {
        cosh2_x = x.times(x);
        x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
      }
      return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, true);
    };
    P.hyperbolicSine = P.sinh = function() {
      var k, pr, rm, len, x = this, Ctor = x.constructor;
      if (!x.isFinite() || x.isZero())
        return new Ctor(x);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
      Ctor.rounding = 1;
      len = x.d.length;
      if (len < 3) {
        x = taylorSeries(Ctor, 2, x, x, true);
      } else {
        k = 1.4 * Math.sqrt(len);
        k = k > 16 ? 16 : k | 0;
        x = x.times(1 / tinyPow(5, k));
        x = taylorSeries(Ctor, 2, x, x, true);
        var sinh2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
        for (; k--; ) {
          sinh2_x = x.times(x);
          x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
        }
      }
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return finalise(x, pr, rm, true);
    };
    P.hyperbolicTangent = P.tanh = function() {
      var pr, rm, x = this, Ctor = x.constructor;
      if (!x.isFinite())
        return new Ctor(x.s);
      if (x.isZero())
        return new Ctor(x);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + 7;
      Ctor.rounding = 1;
      return divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
    };
    P.inverseCosine = P.acos = function() {
      var x = this, Ctor = x.constructor, k = x.abs().cmp(1), pr = Ctor.precision, rm = Ctor.rounding;
      if (k !== -1) {
        return k === 0 ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0) : new Ctor(NaN);
      }
      if (x.isZero())
        return getPi(Ctor, pr + 4, rm).times(0.5);
      Ctor.precision = pr + 6;
      Ctor.rounding = 1;
      x = new Ctor(1).minus(x).div(x.plus(1)).sqrt().atan();
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return x.times(2);
    };
    P.inverseHyperbolicCosine = P.acosh = function() {
      var pr, rm, x = this, Ctor = x.constructor;
      if (x.lte(1))
        return new Ctor(x.eq(1) ? 0 : NaN);
      if (!x.isFinite())
        return new Ctor(x);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4;
      Ctor.rounding = 1;
      external = false;
      x = x.times(x).minus(1).sqrt().plus(x);
      external = true;
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return x.ln();
    };
    P.inverseHyperbolicSine = P.asinh = function() {
      var pr, rm, x = this, Ctor = x.constructor;
      if (!x.isFinite() || x.isZero())
        return new Ctor(x);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;
      Ctor.rounding = 1;
      external = false;
      x = x.times(x).plus(1).sqrt().plus(x);
      external = true;
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return x.ln();
    };
    P.inverseHyperbolicTangent = P.atanh = function() {
      var pr, rm, wpr, xsd, x = this, Ctor = x.constructor;
      if (!x.isFinite())
        return new Ctor(NaN);
      if (x.e >= 0)
        return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      xsd = x.sd();
      if (Math.max(xsd, pr) < 2 * -x.e - 1)
        return finalise(new Ctor(x), pr, rm, true);
      Ctor.precision = wpr = xsd - x.e;
      x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1);
      Ctor.precision = pr + 4;
      Ctor.rounding = 1;
      x = x.ln();
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return x.times(0.5);
    };
    P.inverseSine = P.asin = function() {
      var halfPi, k, pr, rm, x = this, Ctor = x.constructor;
      if (x.isZero())
        return new Ctor(x);
      k = x.abs().cmp(1);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      if (k !== -1) {
        if (k === 0) {
          halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
          halfPi.s = x.s;
          return halfPi;
        }
        return new Ctor(NaN);
      }
      Ctor.precision = pr + 6;
      Ctor.rounding = 1;
      x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return x.times(2);
    };
    P.inverseTangent = P.atan = function() {
      var i, j, k, n, px, t, r, wpr, x2, x = this, Ctor = x.constructor, pr = Ctor.precision, rm = Ctor.rounding;
      if (!x.isFinite()) {
        if (!x.s)
          return new Ctor(NaN);
        if (pr + 4 <= PI_PRECISION) {
          r = getPi(Ctor, pr + 4, rm).times(0.5);
          r.s = x.s;
          return r;
        }
      } else if (x.isZero()) {
        return new Ctor(x);
      } else if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) {
        r = getPi(Ctor, pr + 4, rm).times(0.25);
        r.s = x.s;
        return r;
      }
      Ctor.precision = wpr = pr + 10;
      Ctor.rounding = 1;
      k = Math.min(28, wpr / LOG_BASE + 2 | 0);
      for (i = k; i; --i)
        x = x.div(x.times(x).plus(1).sqrt().plus(1));
      external = false;
      j = Math.ceil(wpr / LOG_BASE);
      n = 1;
      x2 = x.times(x);
      r = new Ctor(x);
      px = x;
      for (; i !== -1; ) {
        px = px.times(x2);
        t = r.minus(px.div(n += 2));
        px = px.times(x2);
        r = t.plus(px.div(n += 2));
        if (r.d[j] !== void 0)
          for (i = j; r.d[i] === t.d[i] && i--; )
            ;
      }
      if (k)
        r = r.times(2 << k - 1);
      external = true;
      return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
    };
    P.isFinite = function() {
      return !!this.d;
    };
    P.isInteger = P.isInt = function() {
      return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
    };
    P.isNaN = function() {
      return !this.s;
    };
    P.isNegative = P.isNeg = function() {
      return this.s < 0;
    };
    P.isPositive = P.isPos = function() {
      return this.s > 0;
    };
    P.isZero = function() {
      return !!this.d && this.d[0] === 0;
    };
    P.lessThan = P.lt = function(y) {
      return this.cmp(y) < 0;
    };
    P.lessThanOrEqualTo = P.lte = function(y) {
      return this.cmp(y) < 1;
    };
    P.logarithm = P.log = function(base) {
      var isBase10, d, denominator, k, inf, num, sd, r, arg = this, Ctor = arg.constructor, pr = Ctor.precision, rm = Ctor.rounding, guard = 5;
      if (base == null) {
        base = new Ctor(10);
        isBase10 = true;
      } else {
        base = new Ctor(base);
        d = base.d;
        if (base.s < 0 || !d || !d[0] || base.eq(1))
          return new Ctor(NaN);
        isBase10 = base.eq(10);
      }
      d = arg.d;
      if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {
        return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
      }
      if (isBase10) {
        if (d.length > 1) {
          inf = true;
        } else {
          for (k = d[0]; k % 10 === 0; )
            k /= 10;
          inf = k !== 1;
        }
      }
      external = false;
      sd = pr + guard;
      num = naturalLogarithm(arg, sd);
      denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
      r = divide(num, denominator, sd, 1);
      if (checkRoundingDigits(r.d, k = pr, rm)) {
        do {
          sd += 10;
          num = naturalLogarithm(arg, sd);
          denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
          r = divide(num, denominator, sd, 1);
          if (!inf) {
            if (+digitsToString(r.d).slice(k + 1, k + 15) + 1 == 1e14) {
              r = finalise(r, pr + 1, 0);
            }
            break;
          }
        } while (checkRoundingDigits(r.d, k += 10, rm));
      }
      external = true;
      return finalise(r, pr, rm);
    };
    P.minus = P.sub = function(y) {
      var d, e, i, j, k, len, pr, rm, xd, xe, xLTy, yd, x = this, Ctor = x.constructor;
      y = new Ctor(y);
      if (!x.d || !y.d) {
        if (!x.s || !y.s)
          y = new Ctor(NaN);
        else if (x.d)
          y.s = -y.s;
        else
          y = new Ctor(y.d || x.s !== y.s ? x : NaN);
        return y;
      }
      if (x.s != y.s) {
        y.s = -y.s;
        return x.plus(y);
      }
      xd = x.d;
      yd = y.d;
      pr = Ctor.precision;
      rm = Ctor.rounding;
      if (!xd[0] || !yd[0]) {
        if (yd[0])
          y.s = -y.s;
        else if (xd[0])
          y = new Ctor(x);
        else
          return new Ctor(rm === 3 ? -0 : 0);
        return external ? finalise(y, pr, rm) : y;
      }
      e = mathfloor(y.e / LOG_BASE);
      xe = mathfloor(x.e / LOG_BASE);
      xd = xd.slice();
      k = xe - e;
      if (k) {
        xLTy = k < 0;
        if (xLTy) {
          d = xd;
          k = -k;
          len = yd.length;
        } else {
          d = yd;
          e = xe;
          len = xd.length;
        }
        i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
        if (k > i) {
          k = i;
          d.length = 1;
        }
        d.reverse();
        for (i = k; i--; )
          d.push(0);
        d.reverse();
      } else {
        i = xd.length;
        len = yd.length;
        xLTy = i < len;
        if (xLTy)
          len = i;
        for (i = 0; i < len; i++) {
          if (xd[i] != yd[i]) {
            xLTy = xd[i] < yd[i];
            break;
          }
        }
        k = 0;
      }
      if (xLTy) {
        d = xd;
        xd = yd;
        yd = d;
        y.s = -y.s;
      }
      len = xd.length;
      for (i = yd.length - len; i > 0; --i)
        xd[len++] = 0;
      for (i = yd.length; i > k; ) {
        if (xd[--i] < yd[i]) {
          for (j = i; j && xd[--j] === 0; )
            xd[j] = BASE - 1;
          --xd[j];
          xd[i] += BASE;
        }
        xd[i] -= yd[i];
      }
      for (; xd[--len] === 0; )
        xd.pop();
      for (; xd[0] === 0; xd.shift())
        --e;
      if (!xd[0])
        return new Ctor(rm === 3 ? -0 : 0);
      y.d = xd;
      y.e = getBase10Exponent(xd, e);
      return external ? finalise(y, pr, rm) : y;
    };
    P.modulo = P.mod = function(y) {
      var q, x = this, Ctor = x.constructor;
      y = new Ctor(y);
      if (!x.d || !y.s || y.d && !y.d[0])
        return new Ctor(NaN);
      if (!y.d || x.d && !x.d[0]) {
        return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);
      }
      external = false;
      if (Ctor.modulo == 9) {
        q = divide(x, y.abs(), 0, 3, 1);
        q.s *= y.s;
      } else {
        q = divide(x, y, 0, Ctor.modulo, 1);
      }
      q = q.times(y);
      external = true;
      return x.minus(q);
    };
    P.naturalExponential = P.exp = function() {
      return naturalExponential(this);
    };
    P.naturalLogarithm = P.ln = function() {
      return naturalLogarithm(this);
    };
    P.negated = P.neg = function() {
      var x = new this.constructor(this);
      x.s = -x.s;
      return finalise(x);
    };
    P.plus = P.add = function(y) {
      var carry, d, e, i, k, len, pr, rm, xd, yd, x = this, Ctor = x.constructor;
      y = new Ctor(y);
      if (!x.d || !y.d) {
        if (!x.s || !y.s)
          y = new Ctor(NaN);
        else if (!x.d)
          y = new Ctor(y.d || x.s === y.s ? x : NaN);
        return y;
      }
      if (x.s != y.s) {
        y.s = -y.s;
        return x.minus(y);
      }
      xd = x.d;
      yd = y.d;
      pr = Ctor.precision;
      rm = Ctor.rounding;
      if (!xd[0] || !yd[0]) {
        if (!yd[0])
          y = new Ctor(x);
        return external ? finalise(y, pr, rm) : y;
      }
      k = mathfloor(x.e / LOG_BASE);
      e = mathfloor(y.e / LOG_BASE);
      xd = xd.slice();
      i = k - e;
      if (i) {
        if (i < 0) {
          d = xd;
          i = -i;
          len = yd.length;
        } else {
          d = yd;
          e = k;
          len = xd.length;
        }
        k = Math.ceil(pr / LOG_BASE);
        len = k > len ? k + 1 : len + 1;
        if (i > len) {
          i = len;
          d.length = 1;
        }
        d.reverse();
        for (; i--; )
          d.push(0);
        d.reverse();
      }
      len = xd.length;
      i = yd.length;
      if (len - i < 0) {
        i = len;
        d = yd;
        yd = xd;
        xd = d;
      }
      for (carry = 0; i; ) {
        carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
        xd[i] %= BASE;
      }
      if (carry) {
        xd.unshift(carry);
        ++e;
      }
      for (len = xd.length; xd[--len] == 0; )
        xd.pop();
      y.d = xd;
      y.e = getBase10Exponent(xd, e);
      return external ? finalise(y, pr, rm) : y;
    };
    P.precision = P.sd = function(z) {
      var k, x = this;
      if (z !== void 0 && z !== !!z && z !== 1 && z !== 0)
        throw Error(invalidArgument + z);
      if (x.d) {
        k = getPrecision(x.d);
        if (z && x.e + 1 > k)
          k = x.e + 1;
      } else {
        k = NaN;
      }
      return k;
    };
    P.round = function() {
      var x = this, Ctor = x.constructor;
      return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
    };
    P.sine = P.sin = function() {
      var pr, rm, x = this, Ctor = x.constructor;
      if (!x.isFinite())
        return new Ctor(NaN);
      if (x.isZero())
        return new Ctor(x);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
      Ctor.rounding = 1;
      x = sine(Ctor, toLessThanHalfPi(Ctor, x));
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return finalise(quadrant > 2 ? x.neg() : x, pr, rm, true);
    };
    P.squareRoot = P.sqrt = function() {
      var m, n, sd, r, rep, t, x = this, d = x.d, e = x.e, s = x.s, Ctor = x.constructor;
      if (s !== 1 || !d || !d[0]) {
        return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
      }
      external = false;
      s = Math.sqrt(+x);
      if (s == 0 || s == 1 / 0) {
        n = digitsToString(d);
        if ((n.length + e) % 2 == 0)
          n += "0";
        s = Math.sqrt(n);
        e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
        if (s == 1 / 0) {
          n = "5e" + e;
        } else {
          n = s.toExponential();
          n = n.slice(0, n.indexOf("e") + 1) + e;
        }
        r = new Ctor(n);
      } else {
        r = new Ctor(s.toString());
      }
      sd = (e = Ctor.precision) + 3;
      for (; ; ) {
        t = r;
        r = t.plus(divide(x, t, sd + 2, 1)).times(0.5);
        if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
          n = n.slice(sd - 3, sd + 1);
          if (n == "9999" || !rep && n == "4999") {
            if (!rep) {
              finalise(t, e + 1, 0);
              if (t.times(t).eq(x)) {
                r = t;
                break;
              }
            }
            sd += 4;
            rep = 1;
          } else {
            if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
              finalise(r, e + 1, 1);
              m = !r.times(r).eq(x);
            }
            break;
          }
        }
      }
      external = true;
      return finalise(r, e, Ctor.rounding, m);
    };
    P.tangent = P.tan = function() {
      var pr, rm, x = this, Ctor = x.constructor;
      if (!x.isFinite())
        return new Ctor(NaN);
      if (x.isZero())
        return new Ctor(x);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + 10;
      Ctor.rounding = 1;
      x = x.sin();
      x.s = 1;
      x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0);
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr, rm, true);
    };
    P.times = P.mul = function(y) {
      var carry, e, i, k, r, rL, t, xdL, ydL, x = this, Ctor = x.constructor, xd = x.d, yd = (y = new Ctor(y)).d;
      y.s *= x.s;
      if (!xd || !xd[0] || !yd || !yd[0]) {
        return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd ? NaN : !xd || !yd ? y.s / 0 : y.s * 0);
      }
      e = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
      xdL = xd.length;
      ydL = yd.length;
      if (xdL < ydL) {
        r = xd;
        xd = yd;
        yd = r;
        rL = xdL;
        xdL = ydL;
        ydL = rL;
      }
      r = [];
      rL = xdL + ydL;
      for (i = rL; i--; )
        r.push(0);
      for (i = ydL; --i >= 0; ) {
        carry = 0;
        for (k = xdL + i; k > i; ) {
          t = r[k] + yd[i] * xd[k - i - 1] + carry;
          r[k--] = t % BASE | 0;
          carry = t / BASE | 0;
        }
        r[k] = (r[k] + carry) % BASE | 0;
      }
      for (; !r[--rL]; )
        r.pop();
      if (carry)
        ++e;
      else
        r.shift();
      y.d = r;
      y.e = getBase10Exponent(r, e);
      return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
    };
    P.toBinary = function(sd, rm) {
      return toStringBinary(this, 2, sd, rm);
    };
    P.toDecimalPlaces = P.toDP = function(dp, rm) {
      var x = this, Ctor = x.constructor;
      x = new Ctor(x);
      if (dp === void 0)
        return x;
      checkInt32(dp, 0, MAX_DIGITS);
      if (rm === void 0)
        rm = Ctor.rounding;
      else
        checkInt32(rm, 0, 8);
      return finalise(x, dp + x.e + 1, rm);
    };
    P.toExponential = function(dp, rm) {
      var str, x = this, Ctor = x.constructor;
      if (dp === void 0) {
        str = finiteToString(x, true);
      } else {
        checkInt32(dp, 0, MAX_DIGITS);
        if (rm === void 0)
          rm = Ctor.rounding;
        else
          checkInt32(rm, 0, 8);
        x = finalise(new Ctor(x), dp + 1, rm);
        str = finiteToString(x, true, dp + 1);
      }
      return x.isNeg() && !x.isZero() ? "-" + str : str;
    };
    P.toFixed = function(dp, rm) {
      var str, y, x = this, Ctor = x.constructor;
      if (dp === void 0) {
        str = finiteToString(x);
      } else {
        checkInt32(dp, 0, MAX_DIGITS);
        if (rm === void 0)
          rm = Ctor.rounding;
        else
          checkInt32(rm, 0, 8);
        y = finalise(new Ctor(x), dp + x.e + 1, rm);
        str = finiteToString(y, false, dp + y.e + 1);
      }
      return x.isNeg() && !x.isZero() ? "-" + str : str;
    };
    P.toFraction = function(maxD) {
      var d, d0, d1, d2, e, k, n, n0, n1, pr, q, r, x = this, xd = x.d, Ctor = x.constructor;
      if (!xd)
        return new Ctor(x);
      n1 = d0 = new Ctor(1);
      d1 = n0 = new Ctor(0);
      d = new Ctor(d1);
      e = d.e = getPrecision(xd) - x.e - 1;
      k = e % LOG_BASE;
      d.d[0] = mathpow(10, k < 0 ? LOG_BASE + k : k);
      if (maxD == null) {
        maxD = e > 0 ? d : n1;
      } else {
        n = new Ctor(maxD);
        if (!n.isInt() || n.lt(n1))
          throw Error(invalidArgument + n);
        maxD = n.gt(d) ? e > 0 ? d : n1 : n;
      }
      external = false;
      n = new Ctor(digitsToString(xd));
      pr = Ctor.precision;
      Ctor.precision = e = xd.length * LOG_BASE * 2;
      for (; ; ) {
        q = divide(n, d, 0, 1, 1);
        d2 = d0.plus(q.times(d1));
        if (d2.cmp(maxD) == 1)
          break;
        d0 = d1;
        d1 = d2;
        d2 = n1;
        n1 = n0.plus(q.times(d2));
        n0 = d2;
        d2 = d;
        d = n.minus(q.times(d2));
        n = d2;
      }
      d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
      n0 = n0.plus(d2.times(n1));
      d0 = d0.plus(d2.times(d1));
      n0.s = n1.s = x.s;
      r = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];
      Ctor.precision = pr;
      external = true;
      return r;
    };
    P.toHexadecimal = P.toHex = function(sd, rm) {
      return toStringBinary(this, 16, sd, rm);
    };
    P.toNearest = function(y, rm) {
      var x = this, Ctor = x.constructor;
      x = new Ctor(x);
      if (y == null) {
        if (!x.d)
          return x;
        y = new Ctor(1);
        rm = Ctor.rounding;
      } else {
        y = new Ctor(y);
        if (rm === void 0) {
          rm = Ctor.rounding;
        } else {
          checkInt32(rm, 0, 8);
        }
        if (!x.d)
          return y.s ? x : y;
        if (!y.d) {
          if (y.s)
            y.s = x.s;
          return y;
        }
      }
      if (y.d[0]) {
        external = false;
        x = divide(x, y, 0, rm, 1).times(y);
        external = true;
        finalise(x);
      } else {
        y.s = x.s;
        x = y;
      }
      return x;
    };
    P.toNumber = function() {
      return +this;
    };
    P.toOctal = function(sd, rm) {
      return toStringBinary(this, 8, sd, rm);
    };
    P.toPower = P.pow = function(y) {
      var e, k, pr, r, rm, s, x = this, Ctor = x.constructor, yn = +(y = new Ctor(y));
      if (!x.d || !y.d || !x.d[0] || !y.d[0])
        return new Ctor(mathpow(+x, yn));
      x = new Ctor(x);
      if (x.eq(1))
        return x;
      pr = Ctor.precision;
      rm = Ctor.rounding;
      if (y.eq(1))
        return finalise(x, pr, rm);
      e = mathfloor(y.e / LOG_BASE);
      if (e >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
        r = intPow(Ctor, x, k, pr);
        return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
      }
      s = x.s;
      if (s < 0) {
        if (e < y.d.length - 1)
          return new Ctor(NaN);
        if ((y.d[e] & 1) == 0)
          s = 1;
        if (x.e == 0 && x.d[0] == 1 && x.d.length == 1) {
          x.s = s;
          return x;
        }
      }
      k = mathpow(+x, yn);
      e = k == 0 || !isFinite(k) ? mathfloor(yn * (Math.log("0." + digitsToString(x.d)) / Math.LN10 + x.e + 1)) : new Ctor(k + "").e;
      if (e > Ctor.maxE + 1 || e < Ctor.minE - 1)
        return new Ctor(e > 0 ? s / 0 : 0);
      external = false;
      Ctor.rounding = x.s = 1;
      k = Math.min(12, (e + "").length);
      r = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr);
      if (r.d) {
        r = finalise(r, pr + 5, 1);
        if (checkRoundingDigits(r.d, pr, rm)) {
          e = pr + 10;
          r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1);
          if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 1e14) {
            r = finalise(r, pr + 1, 0);
          }
        }
      }
      r.s = s;
      external = true;
      Ctor.rounding = rm;
      return finalise(r, pr, rm);
    };
    P.toPrecision = function(sd, rm) {
      var str, x = this, Ctor = x.constructor;
      if (sd === void 0) {
        str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
      } else {
        checkInt32(sd, 1, MAX_DIGITS);
        if (rm === void 0)
          rm = Ctor.rounding;
        else
          checkInt32(rm, 0, 8);
        x = finalise(new Ctor(x), sd, rm);
        str = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);
      }
      return x.isNeg() && !x.isZero() ? "-" + str : str;
    };
    P.toSignificantDigits = P.toSD = function(sd, rm) {
      var x = this, Ctor = x.constructor;
      if (sd === void 0) {
        sd = Ctor.precision;
        rm = Ctor.rounding;
      } else {
        checkInt32(sd, 1, MAX_DIGITS);
        if (rm === void 0)
          rm = Ctor.rounding;
        else
          checkInt32(rm, 0, 8);
      }
      return finalise(new Ctor(x), sd, rm);
    };
    P.toString = function() {
      var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
      return x.isNeg() && !x.isZero() ? "-" + str : str;
    };
    P.truncated = P.trunc = function() {
      return finalise(new this.constructor(this), this.e + 1, 1);
    };
    P.valueOf = P.toJSON = function() {
      var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
      return x.isNeg() ? "-" + str : str;
    };
    function digitsToString(d) {
      var i, k, ws, indexOfLastWord = d.length - 1, str = "", w = d[0];
      if (indexOfLastWord > 0) {
        str += w;
        for (i = 1; i < indexOfLastWord; i++) {
          ws = d[i] + "";
          k = LOG_BASE - ws.length;
          if (k)
            str += getZeroString(k);
          str += ws;
        }
        w = d[i];
        ws = w + "";
        k = LOG_BASE - ws.length;
        if (k)
          str += getZeroString(k);
      } else if (w === 0) {
        return "0";
      }
      for (; w % 10 === 0; )
        w /= 10;
      return str + w;
    }
    function checkInt32(i, min2, max2) {
      if (i !== ~~i || i < min2 || i > max2) {
        throw Error(invalidArgument + i);
      }
    }
    function checkRoundingDigits(d, i, rm, repeating) {
      var di, k, r, rd;
      for (k = d[0]; k >= 10; k /= 10)
        --i;
      if (--i < 0) {
        i += LOG_BASE;
        di = 0;
      } else {
        di = Math.ceil((i + 1) / LOG_BASE);
        i %= LOG_BASE;
      }
      k = mathpow(10, LOG_BASE - i);
      rd = d[di] % k | 0;
      if (repeating == null) {
        if (i < 3) {
          if (i == 0)
            rd = rd / 100 | 0;
          else if (i == 1)
            rd = rd / 10 | 0;
          r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 5e4 || rd == 0;
        } else {
          r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 || (rd == k / 2 || rd == 0) && (d[di + 1] / k / 100 | 0) == 0;
        }
      } else {
        if (i < 4) {
          if (i == 0)
            rd = rd / 1e3 | 0;
          else if (i == 1)
            rd = rd / 100 | 0;
          else if (i == 2)
            rd = rd / 10 | 0;
          r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
        } else {
          r = ((repeating || rm < 4) && rd + 1 == k || !repeating && rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 1e3 | 0) == mathpow(10, i - 3) - 1;
        }
      }
      return r;
    }
    function convertBase(str, baseIn, baseOut) {
      var j, arr = [0], arrL, i = 0, strL = str.length;
      for (; i < strL; ) {
        for (arrL = arr.length; arrL--; )
          arr[arrL] *= baseIn;
        arr[0] += NUMERALS.indexOf(str.charAt(i++));
        for (j = 0; j < arr.length; j++) {
          if (arr[j] > baseOut - 1) {
            if (arr[j + 1] === void 0)
              arr[j + 1] = 0;
            arr[j + 1] += arr[j] / baseOut | 0;
            arr[j] %= baseOut;
          }
        }
      }
      return arr.reverse();
    }
    function cosine(Ctor, x) {
      var k, len, y;
      if (x.isZero())
        return x;
      len = x.d.length;
      if (len < 32) {
        k = Math.ceil(len / 3);
        y = (1 / tinyPow(4, k)).toString();
      } else {
        k = 16;
        y = "2.3283064365386962890625e-10";
      }
      Ctor.precision += k;
      x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));
      for (var i = k; i--; ) {
        var cos2x = x.times(x);
        x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
      }
      Ctor.precision -= k;
      return x;
    }
    var divide = /* @__PURE__ */ function() {
      function multiplyInteger(x, k, base) {
        var temp, carry = 0, i = x.length;
        for (x = x.slice(); i--; ) {
          temp = x[i] * k + carry;
          x[i] = temp % base | 0;
          carry = temp / base | 0;
        }
        if (carry)
          x.unshift(carry);
        return x;
      }
      function compare(a, b, aL, bL) {
        var i, r;
        if (aL != bL) {
          r = aL > bL ? 1 : -1;
        } else {
          for (i = r = 0; i < aL; i++) {
            if (a[i] != b[i]) {
              r = a[i] > b[i] ? 1 : -1;
              break;
            }
          }
        }
        return r;
      }
      function subtract(a, b, aL, base) {
        var i = 0;
        for (; aL--; ) {
          a[aL] -= i;
          i = a[aL] < b[aL] ? 1 : 0;
          a[aL] = i * base + a[aL] - b[aL];
        }
        for (; !a[0] && a.length > 1; )
          a.shift();
      }
      return function(x, y, pr, rm, dp, base) {
        var cmp, e, i, k, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz, Ctor = x.constructor, sign2 = x.s == y.s ? 1 : -1, xd = x.d, yd = y.d;
        if (!xd || !xd[0] || !yd || !yd[0]) {
          return new Ctor(
            // Return NaN if either NaN, or both Infinity or 0.
            !x.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN : (
              // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
              xd && xd[0] == 0 || !yd ? sign2 * 0 : sign2 / 0
            )
          );
        }
        if (base) {
          logBase = 1;
          e = x.e - y.e;
        } else {
          base = BASE;
          logBase = LOG_BASE;
          e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);
        }
        yL = yd.length;
        xL = xd.length;
        q = new Ctor(sign2);
        qd = q.d = [];
        for (i = 0; yd[i] == (xd[i] || 0); i++)
          ;
        if (yd[i] > (xd[i] || 0))
          e--;
        if (pr == null) {
          sd = pr = Ctor.precision;
          rm = Ctor.rounding;
        } else if (dp) {
          sd = pr + (x.e - y.e) + 1;
        } else {
          sd = pr;
        }
        if (sd < 0) {
          qd.push(1);
          more = true;
        } else {
          sd = sd / logBase + 2 | 0;
          i = 0;
          if (yL == 1) {
            k = 0;
            yd = yd[0];
            sd++;
            for (; (i < xL || k) && sd--; i++) {
              t = k * base + (xd[i] || 0);
              qd[i] = t / yd | 0;
              k = t % yd | 0;
            }
            more = k || i < xL;
          } else {
            k = base / (yd[0] + 1) | 0;
            if (k > 1) {
              yd = multiplyInteger(yd, k, base);
              xd = multiplyInteger(xd, k, base);
              yL = yd.length;
              xL = xd.length;
            }
            xi = yL;
            rem = xd.slice(0, yL);
            remL = rem.length;
            for (; remL < yL; )
              rem[remL++] = 0;
            yz = yd.slice();
            yz.unshift(0);
            yd0 = yd[0];
            if (yd[1] >= base / 2)
              ++yd0;
            do {
              k = 0;
              cmp = compare(yd, rem, yL, remL);
              if (cmp < 0) {
                rem0 = rem[0];
                if (yL != remL)
                  rem0 = rem0 * base + (rem[1] || 0);
                k = rem0 / yd0 | 0;
                if (k > 1) {
                  if (k >= base)
                    k = base - 1;
                  prod = multiplyInteger(yd, k, base);
                  prodL = prod.length;
                  remL = rem.length;
                  cmp = compare(prod, rem, prodL, remL);
                  if (cmp == 1) {
                    k--;
                    subtract(prod, yL < prodL ? yz : yd, prodL, base);
                  }
                } else {
                  if (k == 0)
                    cmp = k = 1;
                  prod = yd.slice();
                }
                prodL = prod.length;
                if (prodL < remL)
                  prod.unshift(0);
                subtract(rem, prod, remL, base);
                if (cmp == -1) {
                  remL = rem.length;
                  cmp = compare(yd, rem, yL, remL);
                  if (cmp < 1) {
                    k++;
                    subtract(rem, yL < remL ? yz : yd, remL, base);
                  }
                }
                remL = rem.length;
              } else if (cmp === 0) {
                k++;
                rem = [0];
              }
              qd[i++] = k;
              if (cmp && rem[0]) {
                rem[remL++] = xd[xi] || 0;
              } else {
                rem = [xd[xi]];
                remL = 1;
              }
            } while ((xi++ < xL || rem[0] !== void 0) && sd--);
            more = rem[0] !== void 0;
          }
          if (!qd[0])
            qd.shift();
        }
        if (logBase == 1) {
          q.e = e;
          inexact = more;
        } else {
          for (i = 1, k = qd[0]; k >= 10; k /= 10)
            i++;
          q.e = i + e * logBase - 1;
          finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
        }
        return q;
      };
    }();
    function finalise(x, sd, rm, isTruncated) {
      var digits, i, j, k, rd, roundUp, w, xd, xdi, Ctor = x.constructor;
      out:
        if (sd != null) {
          xd = x.d;
          if (!xd)
            return x;
          for (digits = 1, k = xd[0]; k >= 10; k /= 10)
            digits++;
          i = sd - digits;
          if (i < 0) {
            i += LOG_BASE;
            j = sd;
            w = xd[xdi = 0];
            rd = w / mathpow(10, digits - j - 1) % 10 | 0;
          } else {
            xdi = Math.ceil((i + 1) / LOG_BASE);
            k = xd.length;
            if (xdi >= k) {
              if (isTruncated) {
                for (; k++ <= xdi; )
                  xd.push(0);
                w = rd = 0;
                digits = 1;
                i %= LOG_BASE;
                j = i - LOG_BASE + 1;
              } else {
                break out;
              }
            } else {
              w = k = xd[xdi];
              for (digits = 1; k >= 10; k /= 10)
                digits++;
              i %= LOG_BASE;
              j = i - LOG_BASE + digits;
              rd = j < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
            }
          }
          isTruncated = isTruncated || sd < 0 || xd[xdi + 1] !== void 0 || (j < 0 ? w : w % mathpow(10, digits - j - 1));
          roundUp = rm < 4 ? (rd || isTruncated) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
          (i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
          if (sd < 1 || !xd[0]) {
            xd.length = 0;
            if (roundUp) {
              sd -= x.e + 1;
              xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
              x.e = -sd || 0;
            } else {
              xd[0] = x.e = 0;
            }
            return x;
          }
          if (i == 0) {
            xd.length = xdi;
            k = 1;
            xdi--;
          } else {
            xd.length = xdi + 1;
            k = mathpow(10, LOG_BASE - i);
            xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0;
          }
          if (roundUp) {
            for (; ; ) {
              if (xdi == 0) {
                for (i = 1, j = xd[0]; j >= 10; j /= 10)
                  i++;
                j = xd[0] += k;
                for (k = 1; j >= 10; j /= 10)
                  k++;
                if (i != k) {
                  x.e++;
                  if (xd[0] == BASE)
                    xd[0] = 1;
                }
                break;
              } else {
                xd[xdi] += k;
                if (xd[xdi] != BASE)
                  break;
                xd[xdi--] = 0;
                k = 1;
              }
            }
          }
          for (i = xd.length; xd[--i] === 0; )
            xd.pop();
        }
      if (external) {
        if (x.e > Ctor.maxE) {
          x.d = null;
          x.e = NaN;
        } else if (x.e < Ctor.minE) {
          x.e = 0;
          x.d = [0];
        }
      }
      return x;
    }
    function finiteToString(x, isExp, sd) {
      if (!x.isFinite())
        return nonFiniteToString(x);
      var k, e = x.e, str = digitsToString(x.d), len = str.length;
      if (isExp) {
        if (sd && (k = sd - len) > 0) {
          str = str.charAt(0) + "." + str.slice(1) + getZeroString(k);
        } else if (len > 1) {
          str = str.charAt(0) + "." + str.slice(1);
        }
        str = str + (x.e < 0 ? "e" : "e+") + x.e;
      } else if (e < 0) {
        str = "0." + getZeroString(-e - 1) + str;
        if (sd && (k = sd - len) > 0)
          str += getZeroString(k);
      } else if (e >= len) {
        str += getZeroString(e + 1 - len);
        if (sd && (k = sd - e - 1) > 0)
          str = str + "." + getZeroString(k);
      } else {
        if ((k = e + 1) < len)
          str = str.slice(0, k) + "." + str.slice(k);
        if (sd && (k = sd - len) > 0) {
          if (e + 1 === len)
            str += ".";
          str += getZeroString(k);
        }
      }
      return str;
    }
    function getBase10Exponent(digits, e) {
      var w = digits[0];
      for (e *= LOG_BASE; w >= 10; w /= 10)
        e++;
      return e;
    }
    function getLn10(Ctor, sd, pr) {
      if (sd > LN10_PRECISION) {
        external = true;
        if (pr)
          Ctor.precision = pr;
        throw Error(precisionLimitExceeded);
      }
      return finalise(new Ctor(LN10), sd, 1, true);
    }
    function getPi(Ctor, sd, rm) {
      if (sd > PI_PRECISION)
        throw Error(precisionLimitExceeded);
      return finalise(new Ctor(PI), sd, rm, true);
    }
    function getPrecision(digits) {
      var w = digits.length - 1, len = w * LOG_BASE + 1;
      w = digits[w];
      if (w) {
        for (; w % 10 == 0; w /= 10)
          len--;
        for (w = digits[0]; w >= 10; w /= 10)
          len++;
      }
      return len;
    }
    function getZeroString(k) {
      var zs = "";
      for (; k--; )
        zs += "0";
      return zs;
    }
    function intPow(Ctor, x, n, pr) {
      var isTruncated, r = new Ctor(1), k = Math.ceil(pr / LOG_BASE + 4);
      external = false;
      for (; ; ) {
        if (n % 2) {
          r = r.times(x);
          if (truncate(r.d, k))
            isTruncated = true;
        }
        n = mathfloor(n / 2);
        if (n === 0) {
          n = r.d.length - 1;
          if (isTruncated && r.d[n] === 0)
            ++r.d[n];
          break;
        }
        x = x.times(x);
        truncate(x.d, k);
      }
      external = true;
      return r;
    }
    function isOdd(n) {
      return n.d[n.d.length - 1] & 1;
    }
    function maxOrMin(Ctor, args, n) {
      var k, y, x = new Ctor(args[0]), i = 0;
      for (; ++i < args.length; ) {
        y = new Ctor(args[i]);
        if (!y.s) {
          x = y;
          break;
        }
        k = x.cmp(y);
        if (k === n || k === 0 && x.s === n) {
          x = y;
        }
      }
      return x;
    }
    function naturalExponential(x, sd) {
      var denominator, guard, j, pow2, sum2, t, wpr, rep = 0, i = 0, k = 0, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
      if (!x.d || !x.d[0] || x.e > 17) {
        return new Ctor(x.d ? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0 : x.s ? x.s < 0 ? 0 : x : 0 / 0);
      }
      if (sd == null) {
        external = false;
        wpr = pr;
      } else {
        wpr = sd;
      }
      t = new Ctor(0.03125);
      while (x.e > -2) {
        x = x.times(t);
        k += 5;
      }
      guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
      wpr += guard;
      denominator = pow2 = sum2 = new Ctor(1);
      Ctor.precision = wpr;
      for (; ; ) {
        pow2 = finalise(pow2.times(x), wpr, 1);
        denominator = denominator.times(++i);
        t = sum2.plus(divide(pow2, denominator, wpr, 1));
        if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
          j = k;
          while (j--)
            sum2 = finalise(sum2.times(sum2), wpr, 1);
          if (sd == null) {
            if (rep < 3 && checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
              Ctor.precision = wpr += 10;
              denominator = pow2 = t = new Ctor(1);
              i = 0;
              rep++;
            } else {
              return finalise(sum2, Ctor.precision = pr, rm, external = true);
            }
          } else {
            Ctor.precision = pr;
            return sum2;
          }
        }
        sum2 = t;
      }
    }
    function naturalLogarithm(y, sd) {
      var c, c0, denominator, e, numerator, rep, sum2, t, wpr, x1, x2, n = 1, guard = 10, x = y, xd = x.d, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
      if (x.s < 0 || !xd || !xd[0] || !x.e && xd[0] == 1 && xd.length == 1) {
        return new Ctor(xd && !xd[0] ? -1 / 0 : x.s != 1 ? NaN : xd ? 0 : x);
      }
      if (sd == null) {
        external = false;
        wpr = pr;
      } else {
        wpr = sd;
      }
      Ctor.precision = wpr += guard;
      c = digitsToString(xd);
      c0 = c.charAt(0);
      if (Math.abs(e = x.e) < 15e14) {
        while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
          x = x.times(y);
          c = digitsToString(x.d);
          c0 = c.charAt(0);
          n++;
        }
        e = x.e;
        if (c0 > 1) {
          x = new Ctor("0." + c);
          e++;
        } else {
          x = new Ctor(c0 + "." + c.slice(1));
        }
      } else {
        t = getLn10(Ctor, wpr + 2, pr).times(e + "");
        x = naturalLogarithm(new Ctor(c0 + "." + c.slice(1)), wpr - guard).plus(t);
        Ctor.precision = pr;
        return sd == null ? finalise(x, pr, rm, external = true) : x;
      }
      x1 = x;
      sum2 = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1);
      x2 = finalise(x.times(x), wpr, 1);
      denominator = 3;
      for (; ; ) {
        numerator = finalise(numerator.times(x2), wpr, 1);
        t = sum2.plus(divide(numerator, new Ctor(denominator), wpr, 1));
        if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
          sum2 = sum2.times(2);
          if (e !== 0)
            sum2 = sum2.plus(getLn10(Ctor, wpr + 2, pr).times(e + ""));
          sum2 = divide(sum2, new Ctor(n), wpr, 1);
          if (sd == null) {
            if (checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
              Ctor.precision = wpr += guard;
              t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1);
              x2 = finalise(x.times(x), wpr, 1);
              denominator = rep = 1;
            } else {
              return finalise(sum2, Ctor.precision = pr, rm, external = true);
            }
          } else {
            Ctor.precision = pr;
            return sum2;
          }
        }
        sum2 = t;
        denominator += 2;
      }
    }
    function nonFiniteToString(x) {
      return String(x.s * x.s / 0);
    }
    function parseDecimal(x, str) {
      var e, i, len;
      if ((e = str.indexOf(".")) > -1)
        str = str.replace(".", "");
      if ((i = str.search(/e/i)) > 0) {
        if (e < 0)
          e = i;
        e += +str.slice(i + 1);
        str = str.substring(0, i);
      } else if (e < 0) {
        e = str.length;
      }
      for (i = 0; str.charCodeAt(i) === 48; i++)
        ;
      for (len = str.length; str.charCodeAt(len - 1) === 48; --len)
        ;
      str = str.slice(i, len);
      if (str) {
        len -= i;
        x.e = e = e - i - 1;
        x.d = [];
        i = (e + 1) % LOG_BASE;
        if (e < 0)
          i += LOG_BASE;
        if (i < len) {
          if (i)
            x.d.push(+str.slice(0, i));
          for (len -= LOG_BASE; i < len; )
            x.d.push(+str.slice(i, i += LOG_BASE));
          str = str.slice(i);
          i = LOG_BASE - str.length;
        } else {
          i -= len;
        }
        for (; i--; )
          str += "0";
        x.d.push(+str);
        if (external) {
          if (x.e > x.constructor.maxE) {
            x.d = null;
            x.e = NaN;
          } else if (x.e < x.constructor.minE) {
            x.e = 0;
            x.d = [0];
          }
        }
      } else {
        x.e = 0;
        x.d = [0];
      }
      return x;
    }
    function parseOther(x, str) {
      var base, Ctor, divisor, i, isFloat, len, p, xd, xe;
      if (str.indexOf("_") > -1) {
        str = str.replace(/(\d)_(?=\d)/g, "$1");
        if (isDecimal.test(str))
          return parseDecimal(x, str);
      } else if (str === "Infinity" || str === "NaN") {
        if (!+str)
          x.s = NaN;
        x.e = NaN;
        x.d = null;
        return x;
      }
      if (isHex.test(str)) {
        base = 16;
        str = str.toLowerCase();
      } else if (isBinary.test(str)) {
        base = 2;
      } else if (isOctal.test(str)) {
        base = 8;
      } else {
        throw Error(invalidArgument + str);
      }
      i = str.search(/p/i);
      if (i > 0) {
        p = +str.slice(i + 1);
        str = str.substring(2, i);
      } else {
        str = str.slice(2);
      }
      i = str.indexOf(".");
      isFloat = i >= 0;
      Ctor = x.constructor;
      if (isFloat) {
        str = str.replace(".", "");
        len = str.length;
        i = len - i;
        divisor = intPow(Ctor, new Ctor(base), i, i * 2);
      }
      xd = convertBase(str, base, BASE);
      xe = xd.length - 1;
      for (i = xe; xd[i] === 0; --i)
        xd.pop();
      if (i < 0)
        return new Ctor(x.s * 0);
      x.e = getBase10Exponent(xd, xe);
      x.d = xd;
      external = false;
      if (isFloat)
        x = divide(x, divisor, len * 4);
      if (p)
        x = x.times(Math.abs(p) < 54 ? mathpow(2, p) : Decimal.pow(2, p));
      external = true;
      return x;
    }
    function sine(Ctor, x) {
      var k, len = x.d.length;
      if (len < 3) {
        return x.isZero() ? x : taylorSeries(Ctor, 2, x, x);
      }
      k = 1.4 * Math.sqrt(len);
      k = k > 16 ? 16 : k | 0;
      x = x.times(1 / tinyPow(5, k));
      x = taylorSeries(Ctor, 2, x, x);
      var sin2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
      for (; k--; ) {
        sin2_x = x.times(x);
        x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
      }
      return x;
    }
    function taylorSeries(Ctor, n, x, y, isHyperbolic) {
      var j, t, u, x2, i = 1, pr = Ctor.precision, k = Math.ceil(pr / LOG_BASE);
      external = false;
      x2 = x.times(x);
      u = new Ctor(y);
      for (; ; ) {
        t = divide(u.times(x2), new Ctor(n++ * n++), pr, 1);
        u = isHyperbolic ? y.plus(t) : y.minus(t);
        y = divide(t.times(x2), new Ctor(n++ * n++), pr, 1);
        t = u.plus(y);
        if (t.d[k] !== void 0) {
          for (j = k; t.d[j] === u.d[j] && j--; )
            ;
          if (j == -1)
            break;
        }
        j = u;
        u = y;
        y = t;
        t = j;
        i++;
      }
      external = true;
      t.d.length = k + 1;
      return t;
    }
    function tinyPow(b, e) {
      var n = b;
      while (--e)
        n *= b;
      return n;
    }
    function toLessThanHalfPi(Ctor, x) {
      var t, isNeg = x.s < 0, pi = getPi(Ctor, Ctor.precision, 1), halfPi = pi.times(0.5);
      x = x.abs();
      if (x.lte(halfPi)) {
        quadrant = isNeg ? 4 : 1;
        return x;
      }
      t = x.divToInt(pi);
      if (t.isZero()) {
        quadrant = isNeg ? 3 : 2;
      } else {
        x = x.minus(t.times(pi));
        if (x.lte(halfPi)) {
          quadrant = isOdd(t) ? isNeg ? 2 : 3 : isNeg ? 4 : 1;
          return x;
        }
        quadrant = isOdd(t) ? isNeg ? 1 : 4 : isNeg ? 3 : 2;
      }
      return x.minus(pi).abs();
    }
    function toStringBinary(x, baseOut, sd, rm) {
      var base, e, i, k, len, roundUp, str, xd, y, Ctor = x.constructor, isExp = sd !== void 0;
      if (isExp) {
        checkInt32(sd, 1, MAX_DIGITS);
        if (rm === void 0)
          rm = Ctor.rounding;
        else
          checkInt32(rm, 0, 8);
      } else {
        sd = Ctor.precision;
        rm = Ctor.rounding;
      }
      if (!x.isFinite()) {
        str = nonFiniteToString(x);
      } else {
        str = finiteToString(x);
        i = str.indexOf(".");
        if (isExp) {
          base = 2;
          if (baseOut == 16) {
            sd = sd * 4 - 3;
          } else if (baseOut == 8) {
            sd = sd * 3 - 2;
          }
        } else {
          base = baseOut;
        }
        if (i >= 0) {
          str = str.replace(".", "");
          y = new Ctor(1);
          y.e = str.length - i;
          y.d = convertBase(finiteToString(y), 10, base);
          y.e = y.d.length;
        }
        xd = convertBase(str, 10, base);
        e = len = xd.length;
        for (; xd[--len] == 0; )
          xd.pop();
        if (!xd[0]) {
          str = isExp ? "0p+0" : "0";
        } else {
          if (i < 0) {
            e--;
          } else {
            x = new Ctor(x);
            x.d = xd;
            x.e = e;
            x = divide(x, y, sd, rm, 0, base);
            xd = x.d;
            e = x.e;
            roundUp = inexact;
          }
          i = xd[sd];
          k = base / 2;
          roundUp = roundUp || xd[sd + 1] !== void 0;
          roundUp = rm < 4 ? (i !== void 0 || roundUp) && (rm === 0 || rm === (x.s < 0 ? 3 : 2)) : i > k || i === k && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 || rm === (x.s < 0 ? 8 : 7));
          xd.length = sd;
          if (roundUp) {
            for (; ++xd[--sd] > base - 1; ) {
              xd[sd] = 0;
              if (!sd) {
                ++e;
                xd.unshift(1);
              }
            }
          }
          for (len = xd.length; !xd[len - 1]; --len)
            ;
          for (i = 0, str = ""; i < len; i++)
            str += NUMERALS.charAt(xd[i]);
          if (isExp) {
            if (len > 1) {
              if (baseOut == 16 || baseOut == 8) {
                i = baseOut == 16 ? 4 : 3;
                for (--len; len % i; len++)
                  str += "0";
                xd = convertBase(str, base, baseOut);
                for (len = xd.length; !xd[len - 1]; --len)
                  ;
                for (i = 1, str = "1."; i < len; i++)
                  str += NUMERALS.charAt(xd[i]);
              } else {
                str = str.charAt(0) + "." + str.slice(1);
              }
            }
            str = str + (e < 0 ? "p" : "p+") + e;
          } else if (e < 0) {
            for (; ++e; )
              str = "0" + str;
            str = "0." + str;
          } else {
            if (++e > len)
              for (e -= len; e--; )
                str += "0";
            else if (e < len)
              str = str.slice(0, e) + "." + str.slice(e);
          }
        }
        str = (baseOut == 16 ? "0x" : baseOut == 2 ? "0b" : baseOut == 8 ? "0o" : "") + str;
      }
      return x.s < 0 ? "-" + str : str;
    }
    function truncate(arr, len) {
      if (arr.length > len) {
        arr.length = len;
        return true;
      }
    }
    function abs(x) {
      return new this(x).abs();
    }
    function acos(x) {
      return new this(x).acos();
    }
    function acosh(x) {
      return new this(x).acosh();
    }
    function add(x, y) {
      return new this(x).plus(y);
    }
    function asin(x) {
      return new this(x).asin();
    }
    function asinh(x) {
      return new this(x).asinh();
    }
    function atan(x) {
      return new this(x).atan();
    }
    function atanh(x) {
      return new this(x).atanh();
    }
    function atan2(y, x) {
      y = new this(y);
      x = new this(x);
      var r, pr = this.precision, rm = this.rounding, wpr = pr + 4;
      if (!y.s || !x.s) {
        r = new this(NaN);
      } else if (!y.d && !x.d) {
        r = getPi(this, wpr, 1).times(x.s > 0 ? 0.25 : 0.75);
        r.s = y.s;
      } else if (!x.d || y.isZero()) {
        r = x.s < 0 ? getPi(this, pr, rm) : new this(0);
        r.s = y.s;
      } else if (!y.d || x.isZero()) {
        r = getPi(this, wpr, 1).times(0.5);
        r.s = y.s;
      } else if (x.s < 0) {
        this.precision = wpr;
        this.rounding = 1;
        r = this.atan(divide(y, x, wpr, 1));
        x = getPi(this, wpr, 1);
        this.precision = pr;
        this.rounding = rm;
        r = y.s < 0 ? r.minus(x) : r.plus(x);
      } else {
        r = this.atan(divide(y, x, wpr, 1));
      }
      return r;
    }
    function cbrt(x) {
      return new this(x).cbrt();
    }
    function ceil(x) {
      return finalise(x = new this(x), x.e + 1, 2);
    }
    function clamp(x, min2, max2) {
      return new this(x).clamp(min2, max2);
    }
    function config(obj) {
      if (!obj || typeof obj !== "object")
        throw Error(decimalError + "Object expected");
      var i, p, v, useDefaults = obj.defaults === true, ps = [
        "precision",
        1,
        MAX_DIGITS,
        "rounding",
        0,
        8,
        "toExpNeg",
        -EXP_LIMIT,
        0,
        "toExpPos",
        0,
        EXP_LIMIT,
        "maxE",
        0,
        EXP_LIMIT,
        "minE",
        -EXP_LIMIT,
        0,
        "modulo",
        0,
        9
      ];
      for (i = 0; i < ps.length; i += 3) {
        if (p = ps[i], useDefaults)
          this[p] = DEFAULTS[p];
        if ((v = obj[p]) !== void 0) {
          if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2])
            this[p] = v;
          else
            throw Error(invalidArgument + p + ": " + v);
        }
      }
      if (p = "crypto", useDefaults)
        this[p] = DEFAULTS[p];
      if ((v = obj[p]) !== void 0) {
        if (v === true || v === false || v === 0 || v === 1) {
          if (v) {
            if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
              this[p] = true;
            } else {
              throw Error(cryptoUnavailable);
            }
          } else {
            this[p] = false;
          }
        } else {
          throw Error(invalidArgument + p + ": " + v);
        }
      }
      return this;
    }
    function cos(x) {
      return new this(x).cos();
    }
    function cosh(x) {
      return new this(x).cosh();
    }
    function clone(obj) {
      var i, p, ps;
      function Decimal2(v) {
        var e, i2, t, x = this;
        if (!(x instanceof Decimal2))
          return new Decimal2(v);
        x.constructor = Decimal2;
        if (isDecimalInstance(v)) {
          x.s = v.s;
          if (external) {
            if (!v.d || v.e > Decimal2.maxE) {
              x.e = NaN;
              x.d = null;
            } else if (v.e < Decimal2.minE) {
              x.e = 0;
              x.d = [0];
            } else {
              x.e = v.e;
              x.d = v.d.slice();
            }
          } else {
            x.e = v.e;
            x.d = v.d ? v.d.slice() : v.d;
          }
          return;
        }
        t = typeof v;
        if (t === "number") {
          if (v === 0) {
            x.s = 1 / v < 0 ? -1 : 1;
            x.e = 0;
            x.d = [0];
            return;
          }
          if (v < 0) {
            v = -v;
            x.s = -1;
          } else {
            x.s = 1;
          }
          if (v === ~~v && v < 1e7) {
            for (e = 0, i2 = v; i2 >= 10; i2 /= 10)
              e++;
            if (external) {
              if (e > Decimal2.maxE) {
                x.e = NaN;
                x.d = null;
              } else if (e < Decimal2.minE) {
                x.e = 0;
                x.d = [0];
              } else {
                x.e = e;
                x.d = [v];
              }
            } else {
              x.e = e;
              x.d = [v];
            }
            return;
          }
          if (v * 0 !== 0) {
            if (!v)
              x.s = NaN;
            x.e = NaN;
            x.d = null;
            return;
          }
          return parseDecimal(x, v.toString());
        }
        if (t === "string") {
          if ((i2 = v.charCodeAt(0)) === 45) {
            v = v.slice(1);
            x.s = -1;
          } else {
            if (i2 === 43)
              v = v.slice(1);
            x.s = 1;
          }
          return isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
        }
        if (t === "bigint") {
          if (v < 0) {
            v = -v;
            x.s = -1;
          } else {
            x.s = 1;
          }
          return parseDecimal(x, v.toString());
        }
        throw Error(invalidArgument + v);
      }
      Decimal2.prototype = P;
      Decimal2.ROUND_UP = 0;
      Decimal2.ROUND_DOWN = 1;
      Decimal2.ROUND_CEIL = 2;
      Decimal2.ROUND_FLOOR = 3;
      Decimal2.ROUND_HALF_UP = 4;
      Decimal2.ROUND_HALF_DOWN = 5;
      Decimal2.ROUND_HALF_EVEN = 6;
      Decimal2.ROUND_HALF_CEIL = 7;
      Decimal2.ROUND_HALF_FLOOR = 8;
      Decimal2.EUCLID = 9;
      Decimal2.config = Decimal2.set = config;
      Decimal2.clone = clone;
      Decimal2.isDecimal = isDecimalInstance;
      Decimal2.abs = abs;
      Decimal2.acos = acos;
      Decimal2.acosh = acosh;
      Decimal2.add = add;
      Decimal2.asin = asin;
      Decimal2.asinh = asinh;
      Decimal2.atan = atan;
      Decimal2.atanh = atanh;
      Decimal2.atan2 = atan2;
      Decimal2.cbrt = cbrt;
      Decimal2.ceil = ceil;
      Decimal2.clamp = clamp;
      Decimal2.cos = cos;
      Decimal2.cosh = cosh;
      Decimal2.div = div;
      Decimal2.exp = exp;
      Decimal2.floor = floor;
      Decimal2.hypot = hypot;
      Decimal2.ln = ln;
      Decimal2.log = log;
      Decimal2.log10 = log10;
      Decimal2.log2 = log2;
      Decimal2.max = max;
      Decimal2.min = min;
      Decimal2.mod = mod;
      Decimal2.mul = mul;
      Decimal2.pow = pow;
      Decimal2.random = random;
      Decimal2.round = round;
      Decimal2.sign = sign;
      Decimal2.sin = sin;
      Decimal2.sinh = sinh;
      Decimal2.sqrt = sqrt;
      Decimal2.sub = sub;
      Decimal2.sum = sum;
      Decimal2.tan = tan;
      Decimal2.tanh = tanh;
      Decimal2.trunc = trunc;
      if (obj === void 0)
        obj = {};
      if (obj) {
        if (obj.defaults !== true) {
          ps = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
          for (i = 0; i < ps.length; )
            if (!obj.hasOwnProperty(p = ps[i++]))
              obj[p] = this[p];
        }
      }
      Decimal2.config(obj);
      return Decimal2;
    }
    function div(x, y) {
      return new this(x).div(y);
    }
    function exp(x) {
      return new this(x).exp();
    }
    function floor(x) {
      return finalise(x = new this(x), x.e + 1, 3);
    }
    function hypot() {
      var i, n, t = new this(0);
      external = false;
      for (i = 0; i < arguments.length; ) {
        n = new this(arguments[i++]);
        if (!n.d) {
          if (n.s) {
            external = true;
            return new this(1 / 0);
          }
          t = n;
        } else if (t.d) {
          t = t.plus(n.times(n));
        }
      }
      external = true;
      return t.sqrt();
    }
    function isDecimalInstance(obj) {
      return obj instanceof Decimal || obj && obj.toStringTag === tag || false;
    }
    function ln(x) {
      return new this(x).ln();
    }
    function log(x, y) {
      return new this(x).log(y);
    }
    function log2(x) {
      return new this(x).log(2);
    }
    function log10(x) {
      return new this(x).log(10);
    }
    function max() {
      return maxOrMin(this, arguments, -1);
    }
    function min() {
      return maxOrMin(this, arguments, 1);
    }
    function mod(x, y) {
      return new this(x).mod(y);
    }
    function mul(x, y) {
      return new this(x).mul(y);
    }
    function pow(x, y) {
      return new this(x).pow(y);
    }
    function random(sd) {
      var d, e, k, n, i = 0, r = new this(1), rd = [];
      if (sd === void 0)
        sd = this.precision;
      else
        checkInt32(sd, 1, MAX_DIGITS);
      k = Math.ceil(sd / LOG_BASE);
      if (!this.crypto) {
        for (; i < k; )
          rd[i++] = Math.random() * 1e7 | 0;
      } else if (crypto.getRandomValues) {
        d = crypto.getRandomValues(new Uint32Array(k));
        for (; i < k; ) {
          n = d[i];
          if (n >= 429e7) {
            d[i] = crypto.getRandomValues(new Uint32Array(1))[0];
          } else {
            rd[i++] = n % 1e7;
          }
        }
      } else if (crypto.randomBytes) {
        d = crypto.randomBytes(k *= 4);
        for (; i < k; ) {
          n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 127) << 24);
          if (n >= 214e7) {
            crypto.randomBytes(4).copy(d, i);
          } else {
            rd.push(n % 1e7);
            i += 4;
          }
        }
        i = k / 4;
      } else {
        throw Error(cryptoUnavailable);
      }
      k = rd[--i];
      sd %= LOG_BASE;
      if (k && sd) {
        n = mathpow(10, LOG_BASE - sd);
        rd[i] = (k / n | 0) * n;
      }
      for (; rd[i] === 0; i--)
        rd.pop();
      if (i < 0) {
        e = 0;
        rd = [0];
      } else {
        e = -1;
        for (; rd[0] === 0; e -= LOG_BASE)
          rd.shift();
        for (k = 1, n = rd[0]; n >= 10; n /= 10)
          k++;
        if (k < LOG_BASE)
          e -= LOG_BASE - k;
      }
      r.e = e;
      r.d = rd;
      return r;
    }
    function round(x) {
      return finalise(x = new this(x), x.e + 1, this.rounding);
    }
    function sign(x) {
      x = new this(x);
      return x.d ? x.d[0] ? x.s : 0 * x.s : x.s || NaN;
    }
    function sin(x) {
      return new this(x).sin();
    }
    function sinh(x) {
      return new this(x).sinh();
    }
    function sqrt(x) {
      return new this(x).sqrt();
    }
    function sub(x, y) {
      return new this(x).sub(y);
    }
    function sum() {
      var i = 0, args = arguments, x = new this(args[i]);
      external = false;
      for (; x.s && ++i < args.length; )
        x = x.plus(args[i]);
      external = true;
      return finalise(x, this.precision, this.rounding);
    }
    function tan(x) {
      return new this(x).tan();
    }
    function tanh(x) {
      return new this(x).tanh();
    }
    function trunc(x) {
      return finalise(x = new this(x), x.e + 1, 1);
    }
    P[Symbol.for("nodejs.util.inspect.custom")] = P.toString;
    P[Symbol.toStringTag] = "Decimal";
    var Decimal = P.constructor = clone(DEFAULTS);
    LN10 = new Decimal(LN10);
    PI = new Decimal(PI);
    var decimal_default = Decimal;
    decimal_default.set({
      precision: 20,
      rounding: decimal_default.ROUND_HALF_UP
    });
    var ROICalculatorEngine = class {
      /**
       * Calculate ROI metrics from cost and gain data
       *
       * ROI = (Gain - Cost) / Cost × 100
       */
      calculateROI(input) {
        const totalCost = new decimal_default(input.totalCost);
        const totalGain = new decimal_default(input.totalGain);
        if (totalCost.isZero()) {
          return {
            roi_percentage: totalGain.isPositive() ? Infinity : 0,
            roi_ratio: totalGain.isPositive() ? Infinity : 0,
            net_value: totalGain.toString(),
            total_cost: "0",
            total_gain: totalGain.toString(),
            cost_per_outcome_unit: "0",
            gain_per_cost_unit: totalGain.isPositive() ? "Infinity" : "0",
            payback_period_days: totalGain.isPositive() ? 0 : void 0,
            break_even_point: void 0
          };
        }
        const netValue = totalGain.minus(totalCost);
        const roiRatio = totalGain.dividedBy(totalCost);
        const roiPercentage = netValue.dividedBy(totalCost).times(100);
        const costPerOutcomeUnit = totalGain.isZero() ? new decimal_default(0) : totalCost.dividedBy(totalGain);
        const gainPerCostUnit = roiRatio;
        let paybackPeriodDays;
        if (netValue.isPositive() && input.periodDays > 0) {
          const dailyNetGain = netValue.dividedBy(input.periodDays);
          if (dailyNetGain.isPositive()) {
            paybackPeriodDays = totalCost.dividedBy(dailyNetGain).toNumber();
          }
        }
        const breakEvenPoint = totalGain.toString();
        return {
          roi_percentage: roiPercentage.toNumber(),
          roi_ratio: roiRatio.toNumber(),
          net_value: netValue.toFixed(6),
          total_cost: totalCost.toFixed(6),
          total_gain: totalGain.toFixed(6),
          cost_per_outcome_unit: costPerOutcomeUnit.toFixed(6),
          gain_per_cost_unit: gainPerCostUnit.toFixed(6),
          payback_period_days: paybackPeriodDays,
          break_even_point: breakEvenPoint
        };
      }
      /**
       * Calculate efficiency metrics from costs and outcomes
       */
      calculateEfficiency(costs, outcomes) {
        const efficiencyMetrics = [];
        const totalCost = Array.isArray(costs) ? this.aggregateCostRecords(costs) : new decimal_default(costs.total_cost);
        const outcomeGroups = this.groupOutcomesByType(outcomes);
        for (const [metricName, outcomeData] of outcomeGroups) {
          const totalOutcome = new decimal_default(outcomeData.totalValue);
          const unit = outcomeData.unit;
          if (totalCost.isZero() || totalOutcome.isZero()) {
            efficiencyMetrics.push({
              metric_name: metricName,
              current_efficiency: 0,
              baseline_efficiency: void 0,
              efficiency_change_percentage: void 0,
              unit: `${unit} per $`,
              interpretation: "Insufficient data for efficiency calculation"
            });
            continue;
          }
          const currentEfficiency = totalOutcome.dividedBy(totalCost);
          efficiencyMetrics.push({
            metric_name: metricName,
            current_efficiency: currentEfficiency.toNumber(),
            baseline_efficiency: void 0,
            efficiency_change_percentage: void 0,
            unit: `${unit} per $`,
            interpretation: this.interpretEfficiency(metricName, currentEfficiency.toNumber())
          });
        }
        if (Array.isArray(costs) && costs.length > 0) {
          const totalTokens = costs.reduce((sum2, c) => sum2 + c.total_tokens, 0);
          if (totalTokens > 0) {
            const costPerThousandTokens = totalCost.dividedBy(totalTokens).times(1e3);
            efficiencyMetrics.push({
              metric_name: "cost_per_1k_tokens",
              current_efficiency: costPerThousandTokens.toNumber(),
              baseline_efficiency: void 0,
              efficiency_change_percentage: void 0,
              unit: "$/1k tokens",
              interpretation: `Current cost is $${costPerThousandTokens.toFixed(4)} per 1,000 tokens`
            });
          }
        }
        return efficiencyMetrics;
      }
      /**
       * Generate recommendations based on ROI analysis
       */
      generateRecommendations(roiMetrics, correlations, efficiencyMetrics) {
        const recommendations = [];
        if (roiMetrics.roi_percentage < 0) {
          recommendations.push({
            category: "cost_optimization",
            priority: "high",
            recommendation: "Current LLM investment shows negative ROI. Review model selection and optimize prompt engineering to reduce token usage.",
            estimated_impact: `Potential to recover ${Math.abs(roiMetrics.roi_percentage).toFixed(1)}% of costs`,
            confidence: 0.8
          });
        } else if (roiMetrics.roi_percentage < 50) {
          recommendations.push({
            category: "outcome_improvement",
            priority: "medium",
            recommendation: "ROI is positive but below optimal threshold. Consider improving outcome metrics through better model selection or workflow optimization.",
            estimated_impact: "Potential 20-50% ROI improvement",
            confidence: 0.7
          });
        } else if (roiMetrics.roi_percentage > 200) {
          recommendations.push({
            category: "scaling_decision",
            priority: "medium",
            recommendation: "Excellent ROI indicates opportunity for scaling. Consider increasing LLM investment in high-performing areas.",
            estimated_impact: "Maintain or improve current returns at higher scale",
            confidence: 0.75
          });
        }
        const strongPositiveCorrelations = correlations.filter(
          (c) => c.correlation_strength === "strong_positive" && c.is_significant
        );
        const strongNegativeCorrelations = correlations.filter(
          (c) => c.correlation_strength === "strong_negative" && c.is_significant
        );
        if (strongPositiveCorrelations.length > 0) {
          recommendations.push({
            category: "process_improvement",
            priority: "low",
            recommendation: `Strong positive correlation found between cost and: ${strongPositiveCorrelations.map((c) => c.metric_name).join(", ")}. Higher investment correlates with better outcomes.`,
            estimated_impact: "Data-driven basis for investment decisions",
            confidence: Math.max(...strongPositiveCorrelations.map((c) => Math.abs(c.correlation_coefficient)))
          });
        }
        if (strongNegativeCorrelations.length > 0) {
          recommendations.push({
            category: "cost_optimization",
            priority: "high",
            recommendation: `Negative correlation detected: ${strongNegativeCorrelations.map((c) => c.metric_name).join(", ")}. Review these areas for potential cost reduction without outcome degradation.`,
            estimated_impact: "Potential cost savings identified",
            confidence: Math.max(...strongNegativeCorrelations.map((c) => Math.abs(c.correlation_coefficient)))
          });
        }
        const tokenCostMetric = efficiencyMetrics.find((e) => e.metric_name === "cost_per_1k_tokens");
        if (tokenCostMetric && tokenCostMetric.current_efficiency > 0.01) {
          recommendations.push({
            category: "model_selection",
            priority: "medium",
            recommendation: `Current cost per 1K tokens ($${tokenCostMetric.current_efficiency.toFixed(4)}) may be optimizable. Consider evaluating smaller models or cached responses for appropriate use cases.`,
            estimated_impact: "10-40% potential cost reduction",
            confidence: 0.65
          });
        }
        if (roiMetrics.payback_period_days !== void 0) {
          if (roiMetrics.payback_period_days > 90) {
            recommendations.push({
              category: "budget_adjustment",
              priority: "medium",
              recommendation: `Payback period of ${Math.round(roiMetrics.payback_period_days)} days exceeds 90-day threshold. Review budget allocation and expected returns.`,
              estimated_impact: "Better budget utilization",
              confidence: 0.7
            });
          } else if (roiMetrics.payback_period_days < 7) {
            recommendations.push({
              category: "scaling_decision",
              priority: "low",
              recommendation: `Rapid payback period of ${Math.round(roiMetrics.payback_period_days)} days indicates high efficiency. Consider scaling this investment.`,
              estimated_impact: "Accelerated returns through scaling",
              confidence: 0.75
            });
          }
        }
        const priorityOrder = { high: 0, medium: 1, low: 2 };
        return recommendations.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
      }
      /**
       * Calculate overall assessment from metrics
       */
      calculateOverallAssessment(roiMetrics, correlations, dataQualityScore) {
        if (dataQualityScore < 0.3) {
          return {
            overall_assessment: "insufficient_data",
            key_insight: "Insufficient data quality for reliable ROI assessment. Collect more data points.",
            confidence_level: "low"
          };
        }
        const significantCorrelations = correlations.filter((c) => c.is_significant);
        let confidenceLevel;
        if (dataQualityScore > 0.8 && significantCorrelations.length > 0) {
          confidenceLevel = "high";
        } else if (dataQualityScore > 0.5) {
          confidenceLevel = "medium";
        } else {
          confidenceLevel = "low";
        }
        let overallAssessment;
        let keyInsight;
        if (roiMetrics.roi_percentage >= 100) {
          overallAssessment = "highly_positive";
          keyInsight = `Excellent ROI of ${roiMetrics.roi_percentage.toFixed(1)}%. LLM investment is generating strong returns.`;
        } else if (roiMetrics.roi_percentage >= 25) {
          overallAssessment = "positive";
          keyInsight = `Good ROI of ${roiMetrics.roi_percentage.toFixed(1)}%. LLM investment is profitable.`;
        } else if (roiMetrics.roi_percentage >= -10) {
          overallAssessment = "neutral";
          keyInsight = `ROI of ${roiMetrics.roi_percentage.toFixed(1)}% is near break-even. Monitor closely and optimize where possible.`;
        } else if (roiMetrics.roi_percentage >= -50) {
          overallAssessment = "negative";
          keyInsight = `Negative ROI of ${roiMetrics.roi_percentage.toFixed(1)}%. Review cost structure and outcome alignment.`;
        } else {
          overallAssessment = "highly_negative";
          keyInsight = `Severely negative ROI of ${roiMetrics.roi_percentage.toFixed(1)}%. Immediate action required to address cost-outcome imbalance.`;
        }
        return {
          overall_assessment: overallAssessment,
          key_insight: keyInsight,
          confidence_level: confidenceLevel
        };
      }
      /**
       * Calculate data quality score
       */
      calculateDataQualityScore(costRecordCount, outcomeMetricCount, correlations) {
        let score = 0;
        const volumeScore = Math.min(0.4, (costRecordCount + outcomeMetricCount) / 250);
        score += volumeScore;
        const significantCorrelations = correlations.filter((c) => c.is_significant).length;
        const correlationScore = Math.min(0.3, significantCorrelations * 0.1);
        score += correlationScore;
        const avgSampleSize = correlations.length > 0 ? correlations.reduce((sum2, c) => sum2 + c.sample_size, 0) / correlations.length : 0;
        const sampleSizeScore = Math.min(0.3, avgSampleSize / 100);
        score += sampleSizeScore;
        return Math.min(1, score);
      }
      // ============================================================================
      // PRIVATE HELPERS
      // ============================================================================
      aggregateCostRecords(costs) {
        return costs.reduce(
          (sum2, cost) => sum2.plus(new decimal_default(cost.cost_amount)),
          new decimal_default(0)
        );
      }
      groupOutcomesByType(outcomes) {
        const groups = /* @__PURE__ */ new Map();
        for (const outcome of outcomes) {
          const metricName = outcome.metric_name;
          const existing = groups.get(metricName);
          const value = "aggregate_value" in outcome ? outcome.aggregate_value : outcome.value;
          const unit = "unit" in outcome ? outcome.unit : "units";
          if (existing) {
            existing.totalValue += value;
          } else {
            groups.set(metricName, { totalValue: value, unit });
          }
        }
        return groups;
      }
      interpretEfficiency(metricName, efficiency) {
        const formatted = efficiency.toFixed(4);
        if (metricName.includes("success") || metricName.includes("completion")) {
          return `Achieving ${formatted} successful outcomes per dollar spent`;
        }
        if (metricName.includes("throughput")) {
          return `Processing ${formatted} operations per dollar spent`;
        }
        if (metricName.includes("quality") || metricName.includes("score")) {
          return `Quality score of ${formatted} achieved per dollar spent`;
        }
        if (metricName.includes("revenue")) {
          return `Generating $${formatted} revenue per dollar of LLM cost`;
        }
        return `Efficiency rate of ${formatted} ${metricName} per dollar spent`;
      }
    };
    var roiCalculator = new ROICalculatorEngine();
    var MetricsCorrelator = class {
      /**
       * Calculate correlation between cost and outcome values
       */
      calculateCorrelation(input, config2, metricName, metricType) {
        const { costValues, outcomeValues } = input;
        const n = Math.min(costValues.length, outcomeValues.length);
        if (n < 3) {
          return this.createInsufficientDataResult(metricName, metricType, n);
        }
        const costs = costValues.slice(0, n);
        const outcomes = outcomeValues.slice(0, n);
        let coefficient;
        switch (config2.method) {
          case "spearman":
            coefficient = this.spearmanCorrelation(costs, outcomes);
            break;
          case "kendall":
            coefficient = this.kendallCorrelation(costs, outcomes);
            break;
          case "pearson":
          default:
            coefficient = this.pearsonCorrelation(costs, outcomes);
            break;
        }
        const pValue = this.calculatePValue(coefficient, n);
        const isSignificant = pValue < config2.significanceLevel;
        const correlationStrength = this.classifyCorrelationStrength(coefficient);
        return {
          metric_name: metricName,
          metric_type: metricType,
          correlation_coefficient: Number(coefficient.toFixed(6)),
          correlation_strength: correlationStrength,
          p_value: Number(pValue.toFixed(6)),
          sample_size: n,
          is_significant: isSignificant
        };
      }
      /**
       * Batch calculate correlations for multiple outcome metrics
       */
      calculateMultipleCorrelations(costTimeSeries, outcomeTimeSeries, config2) {
        const results = [];
        for (const outcome of outcomeTimeSeries) {
          const aligned = this.alignTimeSeries(costTimeSeries, outcome.data);
          if (aligned.costValues.length >= 3) {
            const result = this.calculateCorrelation(
              {
                costValues: aligned.costValues,
                outcomeValues: aligned.outcomeValues,
                timestamps: aligned.timestamps
              },
              config2,
              outcome.metricName,
              outcome.metricType
            );
            results.push(result);
          } else {
            results.push(
              this.createInsufficientDataResult(
                outcome.metricName,
                outcome.metricType,
                aligned.costValues.length
              )
            );
          }
        }
        return results;
      }
      /**
       * Prepare correlation data from cost records and outcome metrics
       */
      prepareCorrelationData(costRecords, outcomeMetrics, windowHours = 24) {
        const costByWindow = this.aggregateByTimeWindow(
          costRecords.map((c) => ({
            timestamp: c.timestamp,
            value: parseFloat(c.cost_amount)
          })),
          windowHours
        );
        const outcomeGroups = /* @__PURE__ */ new Map();
        for (const metric of outcomeMetrics) {
          const existing = outcomeGroups.get(metric.metric_name);
          if (existing) {
            existing.data.push({ timestamp: metric.timestamp, value: metric.value });
          } else {
            outcomeGroups.set(metric.metric_name, {
              metricType: metric.metric_type,
              data: [{ timestamp: metric.timestamp, value: metric.value }]
            });
          }
        }
        const outcomeTimeSeries = Array.from(outcomeGroups.entries()).map(
          ([metricName, { metricType, data }]) => ({
            metricName,
            metricType,
            data: this.aggregateByTimeWindow(data, windowHours)
          })
        );
        return {
          costTimeSeries: costByWindow,
          outcomeTimeSeries
        };
      }
      // ============================================================================
      // CORRELATION METHODS
      // ============================================================================
      /**
       * Pearson correlation coefficient
       * Measures linear relationship between two variables
       */
      pearsonCorrelation(x, y) {
        const n = x.length;
        if (n === 0)
          return 0;
        const sumX = x.reduce((a, b) => a + b, 0);
        const sumY = y.reduce((a, b) => a + b, 0);
        const sumXY = x.reduce((total, xi, i) => total + xi * y[i], 0);
        const sumX2 = x.reduce((total, xi) => total + xi * xi, 0);
        const sumY2 = y.reduce((total, yi) => total + yi * yi, 0);
        const numerator = n * sumXY - sumX * sumY;
        const denominator = Math.sqrt(
          (n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY)
        );
        if (denominator === 0)
          return 0;
        return numerator / denominator;
      }
      /**
       * Spearman rank correlation coefficient
       * Measures monotonic relationship using ranks
       */
      spearmanCorrelation(x, y) {
        const n = x.length;
        if (n === 0)
          return 0;
        const rankX = this.toRanks(x);
        const rankY = this.toRanks(y);
        return this.pearsonCorrelation(rankX, rankY);
      }
      /**
       * Kendall tau correlation coefficient
       * Measures ordinal association based on concordant/discordant pairs
       */
      kendallCorrelation(x, y) {
        const n = x.length;
        if (n < 2)
          return 0;
        let concordant = 0;
        let discordant = 0;
        for (let i = 0; i < n - 1; i++) {
          for (let j = i + 1; j < n; j++) {
            const xDiff = x[j] - x[i];
            const yDiff = y[j] - y[i];
            const product = xDiff * yDiff;
            if (product > 0) {
              concordant++;
            } else if (product < 0) {
              discordant++;
            }
          }
        }
        const totalPairs = n * (n - 1) / 2;
        if (totalPairs === 0)
          return 0;
        return (concordant - discordant) / totalPairs;
      }
      /**
       * Convert values to ranks (for Spearman correlation)
       */
      toRanks(values) {
        const indexed = values.map((value, index) => ({ value, index }));
        indexed.sort((a, b) => a.value - b.value);
        const ranks = new Array(values.length);
        let rank = 1;
        for (let i = 0; i < indexed.length; i++) {
          let j = i;
          while (j < indexed.length - 1 && indexed[j].value === indexed[j + 1].value) {
            j++;
          }
          const avgRank = (rank + rank + (j - i)) / 2;
          for (let k = i; k <= j; k++) {
            ranks[indexed[k].index] = avgRank;
          }
          rank += j - i + 1;
          i = j;
        }
        return ranks;
      }
      // ============================================================================
      // STATISTICAL HELPERS
      // ============================================================================
      /**
       * Calculate approximate p-value for correlation coefficient
       * Using t-distribution approximation
       */
      calculatePValue(r, n) {
        if (n < 3)
          return 1;
        if (Math.abs(r) === 1)
          return 0;
        const t = r * Math.sqrt((n - 2) / (1 - r * r));
        const df = n - 2;
        if (df >= 30) {
          return 2 * (1 - this.normalCDF(Math.abs(t)));
        }
        const x = df / (df + t * t);
        const pValue = this.incompleteBeta(df / 2, 0.5, x);
        return Math.min(1, Math.max(0, pValue));
      }
      /**
       * Standard normal CDF approximation
       */
      normalCDF(x) {
        const a1 = 0.254829592;
        const a2 = -0.284496736;
        const a3 = 1.421413741;
        const a4 = -1.453152027;
        const a5 = 1.061405429;
        const p = 0.3275911;
        const sign2 = x < 0 ? -1 : 1;
        x = Math.abs(x) / Math.sqrt(2);
        const t = 1 / (1 + p * x);
        const y = 1 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
        return 0.5 * (1 + sign2 * y);
      }
      /**
       * Incomplete beta function approximation
       */
      incompleteBeta(a, b, x) {
        if (x === 0)
          return 0;
        if (x === 1)
          return 1;
        const maxIterations = 100;
        const epsilon = 1e-10;
        let result = Math.exp(
          a * Math.log(x) + b * Math.log(1 - x) - Math.log(a) - this.logBeta(a, b)
        );
        let sum2 = 0;
        let term = 1;
        for (let n = 0; n < maxIterations; n++) {
          term *= (a + n) * x / (a + b + n);
          sum2 += term / (a + n + 1);
          if (Math.abs(term) < epsilon)
            break;
        }
        return result * (1 + a * sum2);
      }
      /**
       * Log beta function
       */
      logBeta(a, b) {
        return this.logGamma(a) + this.logGamma(b) - this.logGamma(a + b);
      }
      /**
       * Log gamma function approximation (Lanczos)
       */
      logGamma(x) {
        const g = 7;
        const coefficients = [
          0.9999999999998099,
          676.5203681218851,
          -1259.1392167224028,
          771.3234287776531,
          -176.6150291621406,
          12.507343278686905,
          -0.13857109526572012,
          9984369578019572e-21,
          15056327351493116e-23
        ];
        if (x < 0.5) {
          return Math.log(Math.PI / Math.sin(Math.PI * x)) - this.logGamma(1 - x);
        }
        x -= 1;
        let a = coefficients[0];
        const t = x + g + 0.5;
        for (let i = 1; i < g + 2; i++) {
          a += coefficients[i] / (x + i);
        }
        return 0.5 * Math.log(2 * Math.PI) + (x + 0.5) * Math.log(t) - t + Math.log(a);
      }
      /**
       * Classify correlation strength
       */
      classifyCorrelationStrength(coefficient) {
        const abs2 = Math.abs(coefficient);
        if (abs2 >= 0.7) {
          return coefficient > 0 ? "strong_positive" : "strong_negative";
        }
        if (abs2 >= 0.4) {
          return coefficient > 0 ? "moderate_positive" : "moderate_negative";
        }
        if (abs2 >= 0.2) {
          return coefficient > 0 ? "weak_positive" : "weak_negative";
        }
        return "none";
      }
      // ============================================================================
      // TIME SERIES HELPERS
      // ============================================================================
      /**
       * Aggregate time series data by time window
       */
      aggregateByTimeWindow(data, windowHours) {
        if (data.length === 0)
          return [];
        const windowMs = windowHours * 60 * 60 * 1e3;
        const buckets = /* @__PURE__ */ new Map();
        for (const point of data) {
          const ts = new Date(point.timestamp).getTime();
          const bucket = Math.floor(ts / windowMs) * windowMs;
          const existing = buckets.get(bucket);
          if (existing) {
            existing.sum += point.value;
            existing.count++;
          } else {
            buckets.set(bucket, { sum: point.value, count: 1 });
          }
        }
        return Array.from(buckets.entries()).sort((a, b) => a[0] - b[0]).map(([ts, { sum: sum2, count }]) => ({
          timestamp: new Date(ts).toISOString(),
          value: sum2 / count
          // Average within window
        }));
      }
      /**
       * Align two time series by matching timestamps
       */
      alignTimeSeries(series1, series2) {
        const map1 = new Map(series1.map((s) => [s.timestamp, s.value]));
        const map2 = new Map(series2.map((s) => [s.timestamp, s.value]));
        const commonTimestamps = series1.filter((s) => map2.has(s.timestamp)).map((s) => s.timestamp).sort();
        return {
          costValues: commonTimestamps.map((t) => map1.get(t)),
          outcomeValues: commonTimestamps.map((t) => map2.get(t)),
          timestamps: commonTimestamps
        };
      }
      /**
       * Create result for insufficient data
       */
      createInsufficientDataResult(metricName, metricType, sampleSize) {
        return {
          metric_name: metricName,
          metric_type: metricType,
          correlation_coefficient: 0,
          correlation_strength: "none",
          p_value: 1,
          sample_size: sampleSize,
          is_significant: false
        };
      }
    };
    var metricsCorrelator = new MetricsCorrelator();
    var RuvectorServiceClient = class {
      baseUrl;
      timeoutMs;
      retryAttempts;
      retryDelayMs;
      constructor(config2) {
        this.baseUrl = config2.baseUrl;
        this.timeoutMs = config2.timeoutMs;
        this.retryAttempts = config2.retryAttempts;
        this.retryDelayMs = config2.retryDelayMs;
      }
      /**
       * Persist a DecisionEvent to ruvector-service
       *
       * Constitution: All cost records, forecasts, budgets, and ROI analyses
       * are persisted via ruvector-service only.
       */
      async saveDecisionEvent(event) {
        const payload = {
          timestamp: event.timestamp,
          agent_id: event.agent_id,
          agent_version: event.agent_version,
          decision_type: event.decision_type,
          execution_ref: event.execution_ref,
          inputs_hash: event.inputs_hash,
          outputs: event.outputs,
          confidence: event.confidence,
          constraints_applied: event.constraints_applied,
          metadata: event.metadata
        };
        await this.executeWithRetry(async () => {
          const response = await this.fetchWithTimeout(
            `${this.baseUrl}/api/v1/decisions`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "X-Agent-ID": event.agent_id,
                "X-Agent-Version": event.agent_version
              },
              body: JSON.stringify(payload)
            }
          );
          if (!response.ok) {
            const errorBody = await response.text().catch(() => "Unknown error");
            throw new Error(
              `Failed to persist DecisionEvent: ${response.status} ${response.statusText} - ${errorBody}`
            );
          }
        });
      }
      /**
       * Query DecisionEvents from ruvector-service
       */
      async queryDecisionEvents(filters) {
        const params = new URLSearchParams();
        if (filters.agentId)
          params.append("agent_id", filters.agentId);
        if (filters.decisionType)
          params.append("decision_type", filters.decisionType);
        if (filters.startTime)
          params.append("start_time", filters.startTime);
        if (filters.endTime)
          params.append("end_time", filters.endTime);
        if (filters.executionRef)
          params.append("execution_ref", filters.executionRef);
        if (filters.limit)
          params.append("limit", filters.limit.toString());
        if (filters.offset)
          params.append("offset", filters.offset.toString());
        const url = `${this.baseUrl}/api/v1/decisions?${params.toString()}`;
        return await this.executeWithRetry(async () => {
          const response = await this.fetchWithTimeout(url, {
            method: "GET",
            headers: {
              "Accept": "application/json"
            }
          });
          if (!response.ok) {
            throw new Error(
              `Failed to query DecisionEvents: ${response.status} ${response.statusText}`
            );
          }
          const data = await response.json();
          return data.items || data;
        });
      }
      /**
       * Health check for ruvector-service connectivity
       */
      async healthCheck() {
        try {
          const response = await this.fetchWithTimeout(
            `${this.baseUrl}/health`,
            {
              method: "GET",
              headers: {
                "Accept": "application/json"
              }
            }
          );
          return response.ok;
        } catch {
          return false;
        }
      }
      /**
       * Get connection status string for health reporting
       */
      async getConnectionStatus() {
        try {
          const isHealthy = await this.healthCheck();
          return isHealthy ? "connected" : "disconnected";
        } catch {
          return "unknown";
        }
      }
      // ============================================================================
      // PRIVATE HELPERS
      // ============================================================================
      /**
       * Execute operation with exponential backoff retry
       */
      async executeWithRetry(operation, attempt = 1) {
        try {
          return await operation();
        } catch (error) {
          if (attempt >= this.retryAttempts) {
            throw error;
          }
          const delay = this.retryDelayMs * Math.pow(2, attempt - 1);
          const jitter = Math.random() * delay * 0.25;
          await this.sleep(delay + jitter);
          return this.executeWithRetry(operation, attempt + 1);
        }
      }
      /**
       * Fetch with timeout
       */
      async fetchWithTimeout(url, options) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeoutMs);
        try {
          const response = await fetch(url, {
            ...options,
            signal: controller.signal
          });
          return response;
        } finally {
          clearTimeout(timeoutId);
        }
      }
      /**
       * Sleep helper
       */
      sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }
    };
    function createRuvectorClient(config2) {
      return new RuvectorServiceClient(config2.ruvectorService);
    }
    var TelemetryEmitter = class {
      endpoint;
      batchSize;
      flushIntervalMs;
      eventBuffer = [];
      flushTimer = null;
      agentId;
      constructor(config2) {
        this.endpoint = config2.telemetry.endpoint;
        this.batchSize = config2.telemetry.batchSize;
        this.flushIntervalMs = config2.telemetry.flushIntervalMs;
        this.agentId = config2.agentId;
        this.startAutoFlush();
      }
      /**
       * Emit a generic telemetry event
       */
      async emit(event) {
        this.eventBuffer.push(event);
        if (this.eventBuffer.length >= this.batchSize) {
          await this.flush();
        }
      }
      /**
       * Emit a span event for an operation
       */
      async emitSpan(name, agentId, durationMs, context, attributes) {
        const event = {
          event_type: "span",
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          agent_id: agentId,
          span_context: context,
          name,
          duration_ms: durationMs,
          attributes: {
            ...attributes,
            agent_type: "roi_estimation",
            decision_type: "roi_estimation"
          },
          status: "ok"
        };
        await this.emit(event);
      }
      /**
       * Emit a metric event
       */
      async emitMetric(name, value, unit, attributes) {
        const event = {
          event_type: "metric",
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          agent_id: this.agentId,
          name,
          attributes: {
            value,
            unit,
            ...attributes,
            agent_type: "roi_estimation"
          },
          status: "ok"
        };
        await this.emit(event);
      }
      /**
       * Emit ROI analysis metrics
       */
      async emitROIMetrics(roiPercentage, confidence, correlationCount, processingTimeMs, context) {
        const baseAttributes = {
          agent_type: "roi_estimation",
          decision_type: "roi_estimation"
        };
        const events = [
          {
            event_type: "metric",
            timestamp: (/* @__PURE__ */ new Date()).toISOString(),
            agent_id: this.agentId,
            span_context: context,
            name: "roi.percentage",
            attributes: { ...baseAttributes, value: roiPercentage, unit: "percent" },
            status: "ok"
          },
          {
            event_type: "metric",
            timestamp: (/* @__PURE__ */ new Date()).toISOString(),
            agent_id: this.agentId,
            span_context: context,
            name: "roi.confidence",
            attributes: { ...baseAttributes, value: confidence, unit: "ratio" },
            status: "ok"
          },
          {
            event_type: "metric",
            timestamp: (/* @__PURE__ */ new Date()).toISOString(),
            agent_id: this.agentId,
            span_context: context,
            name: "roi.correlations_analyzed",
            attributes: { ...baseAttributes, value: correlationCount, unit: "count" },
            status: "ok"
          },
          {
            event_type: "metric",
            timestamp: (/* @__PURE__ */ new Date()).toISOString(),
            agent_id: this.agentId,
            span_context: context,
            name: "roi.processing_time",
            attributes: { ...baseAttributes, value: processingTimeMs, unit: "milliseconds" },
            status: "ok"
          }
        ];
        for (const event of events) {
          await this.emit(event);
        }
      }
      /**
       * Emit an error event
       */
      async emitError(agentId, error, context) {
        const event = {
          event_type: "log",
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          agent_id: agentId,
          span_context: context,
          name: "error",
          attributes: {
            error_name: error.name,
            error_message: error.message,
            error_stack: error.stack,
            agent_type: "roi_estimation",
            decision_type: "roi_estimation"
          },
          status: "error",
          error_message: error.message
        };
        await this.emit(event);
      }
      /**
       * Emit log event
       */
      async emitLog(level, message, attributes, context) {
        const event = {
          event_type: "log",
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          agent_id: this.agentId,
          span_context: context,
          name: `log.${level}`,
          attributes: {
            level,
            message,
            ...attributes,
            agent_type: "roi_estimation"
          },
          status: level === "error" ? "error" : "ok"
        };
        await this.emit(event);
      }
      /**
       * Flush all buffered events to the telemetry endpoint
       */
      async flush() {
        if (this.eventBuffer.length === 0) {
          return;
        }
        const eventsToSend = [...this.eventBuffer];
        this.eventBuffer = [];
        try {
          const response = await fetch(`${this.endpoint}/api/v1/telemetry/batch`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Agent-ID": this.agentId,
              "X-Agent-Type": "roi_estimation"
            },
            body: JSON.stringify({ events: eventsToSend })
          });
          if (!response.ok) {
            console.error(
              `Telemetry flush failed: ${response.status} ${response.statusText}`
            );
            const remainingCapacity = this.batchSize * 2 - this.eventBuffer.length;
            if (remainingCapacity > 0) {
              this.eventBuffer.unshift(...eventsToSend.slice(0, remainingCapacity));
            }
          }
        } catch (error) {
          console.error("Telemetry flush error:", error);
          const remainingCapacity = this.batchSize * 2 - this.eventBuffer.length;
          if (remainingCapacity > 0) {
            this.eventBuffer.unshift(...eventsToSend.slice(0, remainingCapacity));
          }
        }
      }
      /**
       * Get connection status
       */
      async getConnectionStatus() {
        try {
          const response = await fetch(`${this.endpoint}/health`, {
            method: "GET",
            headers: { "Accept": "application/json" }
          });
          return response.ok ? "connected" : "disconnected";
        } catch {
          return "unknown";
        }
      }
      /**
       * Shutdown the emitter
       */
      async shutdown() {
        this.stopAutoFlush();
        await this.flush();
      }
      // ============================================================================
      // PRIVATE HELPERS
      // ============================================================================
      startAutoFlush() {
        if (this.flushTimer) {
          return;
        }
        this.flushTimer = setInterval(() => {
          this.flush().catch((error) => {
            console.error("Auto-flush error:", error);
          });
        }, this.flushIntervalMs);
        if (this.flushTimer.unref) {
          this.flushTimer.unref();
        }
      }
      stopAutoFlush() {
        if (this.flushTimer) {
          clearInterval(this.flushTimer);
          this.flushTimer = null;
        }
      }
    };
    function createTelemetryEmitter(config2) {
      return new TelemetryEmitter(config2);
    }
    function createSpanContext(parentContext) {
      const generateId = (length) => {
        const chars = "0123456789abcdef";
        let result = "";
        for (let i = 0; i < length; i++) {
          result += chars[Math.floor(Math.random() * chars.length)];
        }
        return result;
      };
      return {
        traceId: parentContext?.traceId || generateId(32),
        spanId: generateId(16),
        parentSpanId: parentContext?.spanId
      };
    }
    var ROIEstimationHandler = class {
      config;
      ruvectorClient;
      telemetry;
      constructor(config2 = DEFAULT_AGENT_CONFIG) {
        this.config = config2;
        this.ruvectorClient = createRuvectorClient(config2);
        this.telemetry = createTelemetryEmitter(config2);
      }
      /**
       * Handle incoming HTTP request
       */
      async handleRequest(req, res) {
        const startTime = Date.now();
        const spanContext = createSpanContext();
        const path = req.path || "/";
        try {
          if (req.method === "GET" && path === "/health") {
            await this.handleHealthCheck(req, res);
            return;
          }
          if (req.method === "POST" && (path === "/analyze" || path === "/")) {
            await this.handleAnalyze(req, res, spanContext, startTime);
            return;
          }
          if (req.method === "GET" && path === "/inspect") {
            await this.handleInspect(req, res);
            return;
          }
          res.status(404).json({
            success: false,
            error: {
              code: "INVALID_INPUT",
              message: `Unknown route: ${req.method} ${path}`,
              timestamp: (/* @__PURE__ */ new Date()).toISOString()
            }
          });
        } catch (error) {
          await this.handleError(error, res, spanContext);
        }
      }
      /**
       * Handle /analyze endpoint - main ROI analysis
       */
      async handleAnalyze(req, res, spanContext, startTime) {
        const parseResult = ROIInputSchema.safeParse(req.body);
        if (!parseResult.success) {
          const response = {
            success: false,
            error: {
              code: "INVALID_INPUT",
              message: "Input validation failed",
              details: { errors: parseResult.error.errors },
              timestamp: (/* @__PURE__ */ new Date()).toISOString(),
              request_id: req.body?.request_id
            }
          };
          res.status(400).json(response);
          return;
        }
        const input = parseResult.data;
        try {
          const output = await this.performROIAnalysis(input, spanContext);
          const processingTimeMs = Date.now() - startTime;
          const decisionEvent = this.createDecisionEvent(
            input,
            output,
            processingTimeMs,
            spanContext
          );
          if (this.config.enableDecisionLogging) {
            await this.ruvectorClient.saveDecisionEvent(decisionEvent);
          }
          await this.telemetry.emitROIMetrics(
            output.roi_metrics.roi_percentage,
            decisionEvent.confidence,
            output.correlations.length,
            processingTimeMs,
            spanContext
          );
          await this.telemetry.emitSpan(
            "roi_estimation.analyze",
            this.config.agentId,
            processingTimeMs,
            spanContext,
            {
              analysis_scope: input.analysis_scope,
              cost_records_count: input.cost_records?.length || 0,
              outcome_metrics_count: input.outcome_metrics?.length || 0,
              roi_percentage: output.roi_metrics.roi_percentage,
              overall_assessment: output.summary.overall_assessment
            }
          );
          const response = {
            success: true,
            data: output,
            decision_event_id: decisionEvent.execution_ref
          };
          res.status(200).json(response);
        } catch (error) {
          await this.telemetry.emitError(
            this.config.agentId,
            error instanceof Error ? error : new Error(String(error)),
            spanContext
          );
          throw error;
        }
      }
      /**
       * Perform the actual ROI analysis
       */
      async performROIAnalysis(input, spanContext) {
        const analysisStart = Date.now();
        const costRecords = input.cost_records || [];
        const outcomeMetrics = input.outcome_metrics || [];
        let correlations = [];
        if (costRecords.length > 0 && outcomeMetrics.length > 0) {
          const correlationData = metricsCorrelator.prepareCorrelationData(
            costRecords,
            outcomeMetrics,
            24
            // Default window hours
          );
          correlations = metricsCorrelator.calculateMultipleCorrelations(
            correlationData.costTimeSeries,
            correlationData.outcomeTimeSeries,
            {
              method: input.correlation_method,
              minThreshold: input.min_correlation_threshold,
              significanceLevel: 0.05
            }
          );
        }
        let totalCost;
        if (input.cost_aggregation) {
          totalCost = input.cost_aggregation.total_cost;
        } else if (costRecords.length > 0) {
          totalCost = costRecords.reduce((sum2, r) => sum2 + parseFloat(r.cost_amount), 0).toFixed(6);
        } else {
          totalCost = "0";
        }
        let totalGain = "0";
        if (input.business_value_per_unit && outcomeMetrics.length > 0) {
          const valuePerUnit = parseFloat(input.business_value_per_unit);
          const totalOutcome = outcomeMetrics.reduce((sum2, m) => sum2 + m.value, 0);
          totalGain = (totalOutcome * valuePerUnit).toFixed(6);
        } else if (outcomeMetrics.length > 0) {
          totalGain = outcomeMetrics.filter((m) => ["revenue_impact", "cost_savings", "productivity_gain"].includes(m.metric_type)).reduce((sum2, m) => sum2 + m.value, 0).toFixed(6);
        }
        const periodStart = new Date(input.period_start);
        const periodEnd = new Date(input.period_end);
        const periodDays = Math.max(1, (periodEnd.getTime() - periodStart.getTime()) / (1e3 * 60 * 60 * 24));
        const roiMetrics = roiCalculator.calculateROI({
          totalCost,
          totalGain,
          periodDays,
          baselineCost: input.baseline_cost,
          baselineGain: input.baseline_outcome?.toString()
        });
        const efficiencyMetrics = roiCalculator.calculateEfficiency(
          input.cost_aggregation || costRecords,
          input.outcome_aggregations || outcomeMetrics
        );
        const recommendations = roiCalculator.generateRecommendations(
          roiMetrics,
          correlations,
          efficiencyMetrics
        );
        const dataQualityScore = roiCalculator.calculateDataQualityScore(
          costRecords.length,
          outcomeMetrics.length,
          correlations
        );
        const assessment = roiCalculator.calculateOverallAssessment(
          roiMetrics,
          correlations,
          dataQualityScore
        );
        const significantCorrelations = correlations.filter((c) => c.is_significant);
        const primaryCorrelation = significantCorrelations.length > 0 ? significantCorrelations.reduce(
          (best, current) => Math.abs(current.correlation_coefficient) > Math.abs(best.correlation_coefficient) ? current : best
        ) : void 0;
        const processingTimeMs = Date.now() - analysisStart;
        return {
          roi_metrics: roiMetrics,
          correlations,
          primary_correlation: primaryCorrelation,
          efficiency_metrics: efficiencyMetrics,
          recommendations,
          summary: {
            overall_assessment: assessment.overall_assessment,
            key_insight: assessment.key_insight,
            confidence_level: assessment.confidence_level,
            data_quality_score: dataQualityScore
          },
          metadata: {
            analyzed_at: (/* @__PURE__ */ new Date()).toISOString(),
            analysis_scope: input.analysis_scope,
            scope_id: input.scope_id,
            period_start: input.period_start,
            period_end: input.period_end,
            cost_records_analyzed: costRecords.length + (input.cost_aggregation ? 1 : 0),
            outcome_metrics_analyzed: outcomeMetrics.length + (input.outcome_aggregations?.length || 0),
            processing_time_ms: processingTimeMs,
            calculation_method: input.roi_calculation_method
          }
        };
      }
      /**
       * Create DecisionEvent for persistence
       */
      createDecisionEvent(input, output, processingDurationMs, spanContext) {
        const statisticalSignificance = output.correlations.some((c) => c.is_significant);
        const confidence = Math.min(
          1,
          output.summary.data_quality_score * 0.6 + (statisticalSignificance ? 0.3 : 0) + (output.correlations.length > 0 ? 0.1 : 0)
        );
        const constraintsApplied = [];
        if (input.min_correlation_threshold !== 0.3) {
          constraintsApplied.push(`correlation_threshold:${input.min_correlation_threshold}`);
        }
        if (input.baseline_cost) {
          constraintsApplied.push(`baseline_cost:${input.baseline_cost}`);
        }
        if (input.business_value_per_unit) {
          constraintsApplied.push(`business_value_per_unit:${input.business_value_per_unit}`);
        }
        const inputsHash = this.hashInputs(input);
        return {
          agent_id: this.config.agentId,
          agent_version: this.config.agentVersion,
          decision_type: "roi_estimation",
          inputs_hash: inputsHash,
          outputs: output,
          confidence,
          constraints_applied: constraintsApplied,
          execution_ref: input.request_id,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          metadata: {
            request_id: input.request_id,
            processing_duration_ms: processingDurationMs,
            input_validation_passed: true,
            data_completeness_score: output.summary.data_quality_score,
            statistical_significance: statisticalSignificance,
            correlation_method_used: input.correlation_method
          }
        };
      }
      /**
       * Handle /health endpoint
       */
      async handleHealthCheck(req, res) {
        const [ruvectorStatus, telemetryStatus] = await Promise.all([
          this.ruvectorClient.getConnectionStatus(),
          this.telemetry.getConnectionStatus()
        ]);
        const isHealthy = ruvectorStatus === "connected" || ruvectorStatus === "unknown";
        const response = {
          status: isHealthy ? "healthy" : "degraded",
          version: AGENT_METADATA.version,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          dependencies: {
            ruvector_service: ruvectorStatus,
            telemetry: telemetryStatus
          }
        };
        res.status(isHealthy ? 200 : 503).json(response);
      }
      /**
       * Handle /inspect endpoint - inspect a previous DecisionEvent
       */
      async handleInspect(req, res) {
        const decisionEventId = req.query.id;
        if (!decisionEventId) {
          res.status(400).json({
            success: false,
            error: {
              code: "INVALID_INPUT",
              message: "Missing required query parameter: id",
              timestamp: (/* @__PURE__ */ new Date()).toISOString()
            }
          });
          return;
        }
        const events = await this.ruvectorClient.queryDecisionEvents({
          executionRef: decisionEventId,
          limit: 1
        });
        if (events.length === 0) {
          res.status(404).json({
            success: false,
            error: {
              code: "INVALID_INPUT",
              message: `DecisionEvent not found: ${decisionEventId}`,
              timestamp: (/* @__PURE__ */ new Date()).toISOString()
            }
          });
          return;
        }
        res.status(200).json({
          success: true,
          data: events[0]
        });
      }
      /**
       * Handle errors
       */
      async handleError(error, res, spanContext) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        const errorCode = this.classifyError(error);
        if (spanContext) {
          await this.telemetry.emitError(
            this.config.agentId,
            error instanceof Error ? error : new Error(errorMessage),
            spanContext
          );
        }
        const response = {
          success: false,
          error: {
            code: errorCode,
            message: errorMessage,
            timestamp: (/* @__PURE__ */ new Date()).toISOString()
          }
        };
        const statusCode = this.getStatusCode(errorCode);
        res.status(statusCode).json(response);
      }
      /**
       * Classify error type
       */
      classifyError(error) {
        const message = error instanceof Error ? error.message.toLowerCase() : "";
        if (message.includes("validation") || message.includes("invalid")) {
          return "INVALID_INPUT";
        }
        if (message.includes("insufficient") || message.includes("not enough")) {
          return "INSUFFICIENT_DATA";
        }
        if (message.includes("correlation")) {
          return "CORRELATION_FAILED";
        }
        if (message.includes("calculation") || message.includes("compute")) {
          return "CALCULATION_ERROR";
        }
        if (message.includes("persist") || message.includes("storage") || message.includes("ruvector")) {
          return "PERSISTENCE_ERROR";
        }
        if (message.includes("timeout") || message.includes("aborted")) {
          return "TIMEOUT";
        }
        return "INTERNAL_ERROR";
      }
      /**
       * Get HTTP status code for error type
       */
      getStatusCode(errorCode) {
        switch (errorCode) {
          case "INVALID_INPUT":
            return 400;
          case "INSUFFICIENT_DATA":
            return 422;
          case "TIMEOUT":
            return 408;
          case "PERSISTENCE_ERROR":
            return 503;
          default:
            return 500;
        }
      }
      /**
       * Hash inputs for determinism verification
       */
      hashInputs(input) {
        const normalized = JSON.stringify(input, Object.keys(input).sort());
        return (0, import_crypto2.createHash)("sha256").update(normalized).digest("hex").substring(0, 16);
      }
      /**
       * Shutdown handler
       */
      async shutdown() {
        await this.telemetry.shutdown();
      }
    };
    var handlerInstance = null;
    function getHandler() {
      if (!handlerInstance) {
        const config2 = {
          ...DEFAULT_AGENT_CONFIG,
          agentId: process.env.AGENT_ID || DEFAULT_AGENT_CONFIG.agentId,
          agentVersion: process.env.AGENT_VERSION || DEFAULT_AGENT_CONFIG.agentVersion,
          ruvectorService: {
            ...DEFAULT_AGENT_CONFIG.ruvectorService,
            baseUrl: process.env.RUVECTOR_SERVICE_URL || DEFAULT_AGENT_CONFIG.ruvectorService.baseUrl
          },
          telemetry: {
            ...DEFAULT_AGENT_CONFIG.telemetry,
            endpoint: process.env.TELEMETRY_ENDPOINT || DEFAULT_AGENT_CONFIG.telemetry.endpoint
          }
        };
        handlerInstance = new ROIEstimationHandler(config2);
      }
      return handlerInstance;
    }
    async function roiEstimationAgent(req, res) {
      const handler3 = getHandler();
      await handler3.handleRequest(req, res);
    }
    var import_crypto3 = __toESM2(require("crypto"));
    var rnds8Pool = new Uint8Array(256);
    var poolPtr = rnds8Pool.length;
    function rng() {
      if (poolPtr > rnds8Pool.length - 16) {
        import_crypto3.default.randomFillSync(rnds8Pool);
        poolPtr = 0;
      }
      return rnds8Pool.slice(poolPtr, poolPtr += 16);
    }
    var byteToHex = [];
    for (let i = 0; i < 256; ++i) {
      byteToHex.push((i + 256).toString(16).slice(1));
    }
    function unsafeStringify(arr, offset = 0) {
      return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
    }
    var import_crypto4 = __toESM2(require("crypto"));
    var native_default = {
      randomUUID: import_crypto4.default.randomUUID
    };
    function v4(options, buf, offset) {
      if (native_default.randomUUID && !buf && !options) {
        return native_default.randomUUID();
      }
      options = options || {};
      const rnds = options.random || (options.rng || rng)();
      rnds[6] = rnds[6] & 15 | 64;
      rnds[8] = rnds[8] & 63 | 128;
      if (buf) {
        offset = offset || 0;
        for (let i = 0; i < 16; ++i) {
          buf[offset + i] = rnds[i];
        }
        return buf;
      }
      return unsafeStringify(rnds);
    }
    var v4_default = v4;
    var external_exports3 = {};
    __export(external_exports3, {
      BRAND: () => BRAND3,
      DIRTY: () => DIRTY3,
      EMPTY_PATH: () => EMPTY_PATH3,
      INVALID: () => INVALID3,
      NEVER: () => NEVER3,
      OK: () => OK3,
      ParseStatus: () => ParseStatus3,
      Schema: () => ZodType3,
      ZodAny: () => ZodAny3,
      ZodArray: () => ZodArray3,
      ZodBigInt: () => ZodBigInt3,
      ZodBoolean: () => ZodBoolean3,
      ZodBranded: () => ZodBranded3,
      ZodCatch: () => ZodCatch3,
      ZodDate: () => ZodDate3,
      ZodDefault: () => ZodDefault3,
      ZodDiscriminatedUnion: () => ZodDiscriminatedUnion3,
      ZodEffects: () => ZodEffects3,
      ZodEnum: () => ZodEnum3,
      ZodError: () => ZodError3,
      ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind3,
      ZodFunction: () => ZodFunction3,
      ZodIntersection: () => ZodIntersection3,
      ZodIssueCode: () => ZodIssueCode3,
      ZodLazy: () => ZodLazy3,
      ZodLiteral: () => ZodLiteral3,
      ZodMap: () => ZodMap3,
      ZodNaN: () => ZodNaN3,
      ZodNativeEnum: () => ZodNativeEnum3,
      ZodNever: () => ZodNever3,
      ZodNull: () => ZodNull3,
      ZodNullable: () => ZodNullable3,
      ZodNumber: () => ZodNumber3,
      ZodObject: () => ZodObject3,
      ZodOptional: () => ZodOptional3,
      ZodParsedType: () => ZodParsedType3,
      ZodPipeline: () => ZodPipeline3,
      ZodPromise: () => ZodPromise3,
      ZodReadonly: () => ZodReadonly3,
      ZodRecord: () => ZodRecord3,
      ZodSchema: () => ZodType3,
      ZodSet: () => ZodSet3,
      ZodString: () => ZodString3,
      ZodSymbol: () => ZodSymbol3,
      ZodTransformer: () => ZodEffects3,
      ZodTuple: () => ZodTuple3,
      ZodType: () => ZodType3,
      ZodUndefined: () => ZodUndefined3,
      ZodUnion: () => ZodUnion3,
      ZodUnknown: () => ZodUnknown3,
      ZodVoid: () => ZodVoid3,
      addIssueToContext: () => addIssueToContext3,
      any: () => anyType3,
      array: () => arrayType3,
      bigint: () => bigIntType3,
      boolean: () => booleanType3,
      coerce: () => coerce3,
      custom: () => custom3,
      date: () => dateType3,
      datetimeRegex: () => datetimeRegex3,
      defaultErrorMap: () => en_default3,
      discriminatedUnion: () => discriminatedUnionType3,
      effect: () => effectsType3,
      enum: () => enumType3,
      function: () => functionType3,
      getErrorMap: () => getErrorMap3,
      getParsedType: () => getParsedType3,
      instanceof: () => instanceOfType3,
      intersection: () => intersectionType3,
      isAborted: () => isAborted3,
      isAsync: () => isAsync3,
      isDirty: () => isDirty3,
      isValid: () => isValid3,
      late: () => late3,
      lazy: () => lazyType3,
      literal: () => literalType3,
      makeIssue: () => makeIssue3,
      map: () => mapType3,
      nan: () => nanType3,
      nativeEnum: () => nativeEnumType3,
      never: () => neverType3,
      null: () => nullType3,
      nullable: () => nullableType3,
      number: () => numberType3,
      object: () => objectType3,
      objectUtil: () => objectUtil3,
      oboolean: () => oboolean3,
      onumber: () => onumber3,
      optional: () => optionalType3,
      ostring: () => ostring3,
      pipeline: () => pipelineType3,
      preprocess: () => preprocessType3,
      promise: () => promiseType3,
      quotelessJson: () => quotelessJson3,
      record: () => recordType3,
      set: () => setType3,
      setErrorMap: () => setErrorMap3,
      strictObject: () => strictObjectType3,
      string: () => stringType3,
      symbol: () => symbolType3,
      transformer: () => effectsType3,
      tuple: () => tupleType3,
      undefined: () => undefinedType3,
      union: () => unionType3,
      unknown: () => unknownType3,
      util: () => util3,
      void: () => voidType3
    });
    var util3;
    (function(util5) {
      util5.assertEqual = (_) => {
      };
      function assertIs(_arg) {
      }
      util5.assertIs = assertIs;
      function assertNever(_x) {
        throw new Error();
      }
      util5.assertNever = assertNever;
      util5.arrayToEnum = (items) => {
        const obj = {};
        for (const item of items) {
          obj[item] = item;
        }
        return obj;
      };
      util5.getValidEnumValues = (obj) => {
        const validKeys = util5.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys) {
          filtered[k] = obj[k];
        }
        return util5.objectValues(filtered);
      };
      util5.objectValues = (obj) => {
        return util5.objectKeys(obj).map(function(e) {
          return obj[e];
        });
      };
      util5.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
        const keys = [];
        for (const key in object) {
          if (Object.prototype.hasOwnProperty.call(object, key)) {
            keys.push(key);
          }
        }
        return keys;
      };
      util5.find = (arr, checker) => {
        for (const item of arr) {
          if (checker(item))
            return item;
        }
        return void 0;
      };
      util5.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
      function joinValues(array, separator = " | ") {
        return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
      }
      util5.joinValues = joinValues;
      util5.jsonStringifyReplacer = (_, value) => {
        if (typeof value === "bigint") {
          return value.toString();
        }
        return value;
      };
    })(util3 || (util3 = {}));
    var objectUtil3;
    (function(objectUtil5) {
      objectUtil5.mergeShapes = (first, second) => {
        return {
          ...first,
          ...second
          // second overwrites first
        };
      };
    })(objectUtil3 || (objectUtil3 = {}));
    var ZodParsedType3 = util3.arrayToEnum([
      "string",
      "nan",
      "number",
      "integer",
      "float",
      "boolean",
      "date",
      "bigint",
      "symbol",
      "function",
      "undefined",
      "null",
      "array",
      "object",
      "unknown",
      "promise",
      "void",
      "never",
      "map",
      "set"
    ]);
    var getParsedType3 = (data) => {
      const t = typeof data;
      switch (t) {
        case "undefined":
          return ZodParsedType3.undefined;
        case "string":
          return ZodParsedType3.string;
        case "number":
          return Number.isNaN(data) ? ZodParsedType3.nan : ZodParsedType3.number;
        case "boolean":
          return ZodParsedType3.boolean;
        case "function":
          return ZodParsedType3.function;
        case "bigint":
          return ZodParsedType3.bigint;
        case "symbol":
          return ZodParsedType3.symbol;
        case "object":
          if (Array.isArray(data)) {
            return ZodParsedType3.array;
          }
          if (data === null) {
            return ZodParsedType3.null;
          }
          if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
            return ZodParsedType3.promise;
          }
          if (typeof Map !== "undefined" && data instanceof Map) {
            return ZodParsedType3.map;
          }
          if (typeof Set !== "undefined" && data instanceof Set) {
            return ZodParsedType3.set;
          }
          if (typeof Date !== "undefined" && data instanceof Date) {
            return ZodParsedType3.date;
          }
          return ZodParsedType3.object;
        default:
          return ZodParsedType3.unknown;
      }
    };
    var ZodIssueCode3 = util3.arrayToEnum([
      "invalid_type",
      "invalid_literal",
      "custom",
      "invalid_union",
      "invalid_union_discriminator",
      "invalid_enum_value",
      "unrecognized_keys",
      "invalid_arguments",
      "invalid_return_type",
      "invalid_date",
      "invalid_string",
      "too_small",
      "too_big",
      "invalid_intersection_types",
      "not_multiple_of",
      "not_finite"
    ]);
    var quotelessJson3 = (obj) => {
      const json = JSON.stringify(obj, null, 2);
      return json.replace(/"([^"]+)":/g, "$1:");
    };
    var ZodError3 = class _ZodError extends Error {
      get errors() {
        return this.issues;
      }
      constructor(issues) {
        super();
        this.issues = [];
        this.addIssue = (sub2) => {
          this.issues = [...this.issues, sub2];
        };
        this.addIssues = (subs = []) => {
          this.issues = [...this.issues, ...subs];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(this, actualProto);
        } else {
          this.__proto__ = actualProto;
        }
        this.name = "ZodError";
        this.issues = issues;
      }
      format(_mapper) {
        const mapper = _mapper || function(issue) {
          return issue.message;
        };
        const fieldErrors = { _errors: [] };
        const processError = (error) => {
          for (const issue of error.issues) {
            if (issue.code === "invalid_union") {
              issue.unionErrors.map(processError);
            } else if (issue.code === "invalid_return_type") {
              processError(issue.returnTypeError);
            } else if (issue.code === "invalid_arguments") {
              processError(issue.argumentsError);
            } else if (issue.path.length === 0) {
              fieldErrors._errors.push(mapper(issue));
            } else {
              let curr = fieldErrors;
              let i = 0;
              while (i < issue.path.length) {
                const el = issue.path[i];
                const terminal = i === issue.path.length - 1;
                if (!terminal) {
                  curr[el] = curr[el] || { _errors: [] };
                } else {
                  curr[el] = curr[el] || { _errors: [] };
                  curr[el]._errors.push(mapper(issue));
                }
                curr = curr[el];
                i++;
              }
            }
          }
        };
        processError(this);
        return fieldErrors;
      }
      static assert(value) {
        if (!(value instanceof _ZodError)) {
          throw new Error(`Not a ZodError: ${value}`);
        }
      }
      toString() {
        return this.message;
      }
      get message() {
        return JSON.stringify(this.issues, util3.jsonStringifyReplacer, 2);
      }
      get isEmpty() {
        return this.issues.length === 0;
      }
      flatten(mapper = (issue) => issue.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub2 of this.issues) {
          if (sub2.path.length > 0) {
            const firstEl = sub2.path[0];
            fieldErrors[firstEl] = fieldErrors[firstEl] || [];
            fieldErrors[firstEl].push(mapper(sub2));
          } else {
            formErrors.push(mapper(sub2));
          }
        }
        return { formErrors, fieldErrors };
      }
      get formErrors() {
        return this.flatten();
      }
    };
    ZodError3.create = (issues) => {
      const error = new ZodError3(issues);
      return error;
    };
    var errorMap3 = (issue, _ctx) => {
      let message;
      switch (issue.code) {
        case ZodIssueCode3.invalid_type:
          if (issue.received === ZodParsedType3.undefined) {
            message = "Required";
          } else {
            message = `Expected ${issue.expected}, received ${issue.received}`;
          }
          break;
        case ZodIssueCode3.invalid_literal:
          message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util3.jsonStringifyReplacer)}`;
          break;
        case ZodIssueCode3.unrecognized_keys:
          message = `Unrecognized key(s) in object: ${util3.joinValues(issue.keys, ", ")}`;
          break;
        case ZodIssueCode3.invalid_union:
          message = `Invalid input`;
          break;
        case ZodIssueCode3.invalid_union_discriminator:
          message = `Invalid discriminator value. Expected ${util3.joinValues(issue.options)}`;
          break;
        case ZodIssueCode3.invalid_enum_value:
          message = `Invalid enum value. Expected ${util3.joinValues(issue.options)}, received '${issue.received}'`;
          break;
        case ZodIssueCode3.invalid_arguments:
          message = `Invalid function arguments`;
          break;
        case ZodIssueCode3.invalid_return_type:
          message = `Invalid function return type`;
          break;
        case ZodIssueCode3.invalid_date:
          message = `Invalid date`;
          break;
        case ZodIssueCode3.invalid_string:
          if (typeof issue.validation === "object") {
            if ("includes" in issue.validation) {
              message = `Invalid input: must include "${issue.validation.includes}"`;
              if (typeof issue.validation.position === "number") {
                message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
              }
            } else if ("startsWith" in issue.validation) {
              message = `Invalid input: must start with "${issue.validation.startsWith}"`;
            } else if ("endsWith" in issue.validation) {
              message = `Invalid input: must end with "${issue.validation.endsWith}"`;
            } else {
              util3.assertNever(issue.validation);
            }
          } else if (issue.validation !== "regex") {
            message = `Invalid ${issue.validation}`;
          } else {
            message = "Invalid";
          }
          break;
        case ZodIssueCode3.too_small:
          if (issue.type === "array")
            message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
          else if (issue.type === "string")
            message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
          else if (issue.type === "number")
            message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
          else if (issue.type === "bigint")
            message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
          else if (issue.type === "date")
            message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
          else
            message = "Invalid input";
          break;
        case ZodIssueCode3.too_big:
          if (issue.type === "array")
            message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
          else if (issue.type === "string")
            message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
          else if (issue.type === "number")
            message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
          else if (issue.type === "bigint")
            message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
          else if (issue.type === "date")
            message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
          else
            message = "Invalid input";
          break;
        case ZodIssueCode3.custom:
          message = `Invalid input`;
          break;
        case ZodIssueCode3.invalid_intersection_types:
          message = `Intersection results could not be merged`;
          break;
        case ZodIssueCode3.not_multiple_of:
          message = `Number must be a multiple of ${issue.multipleOf}`;
          break;
        case ZodIssueCode3.not_finite:
          message = "Number must be finite";
          break;
        default:
          message = _ctx.defaultError;
          util3.assertNever(issue);
      }
      return { message };
    };
    var en_default3 = errorMap3;
    var overrideErrorMap3 = en_default3;
    function setErrorMap3(map) {
      overrideErrorMap3 = map;
    }
    function getErrorMap3() {
      return overrideErrorMap3;
    }
    var makeIssue3 = (params) => {
      const { data, path, errorMaps, issueData } = params;
      const fullPath = [...path, ...issueData.path || []];
      const fullIssue = {
        ...issueData,
        path: fullPath
      };
      if (issueData.message !== void 0) {
        return {
          ...issueData,
          path: fullPath,
          message: issueData.message
        };
      }
      let errorMessage = "";
      const maps = errorMaps.filter((m) => !!m).slice().reverse();
      for (const map of maps) {
        errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
      }
      return {
        ...issueData,
        path: fullPath,
        message: errorMessage
      };
    };
    var EMPTY_PATH3 = [];
    function addIssueToContext3(ctx, issueData) {
      const overrideMap = getErrorMap3();
      const issue = makeIssue3({
        issueData,
        data: ctx.data,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          // contextual error map is first priority
          ctx.schemaErrorMap,
          // then schema-bound map if available
          overrideMap,
          // then global override map
          overrideMap === en_default3 ? void 0 : en_default3
          // then global default map
        ].filter((x) => !!x)
      });
      ctx.common.issues.push(issue);
    }
    var ParseStatus3 = class _ParseStatus {
      constructor() {
        this.value = "valid";
      }
      dirty() {
        if (this.value === "valid")
          this.value = "dirty";
      }
      abort() {
        if (this.value !== "aborted")
          this.value = "aborted";
      }
      static mergeArray(status, results) {
        const arrayValue = [];
        for (const s of results) {
          if (s.status === "aborted")
            return INVALID3;
          if (s.status === "dirty")
            status.dirty();
          arrayValue.push(s.value);
        }
        return { status: status.value, value: arrayValue };
      }
      static async mergeObjectAsync(status, pairs) {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value
          });
        }
        return _ParseStatus.mergeObjectSync(status, syncPairs);
      }
      static mergeObjectSync(status, pairs) {
        const finalObject = {};
        for (const pair of pairs) {
          const { key, value } = pair;
          if (key.status === "aborted")
            return INVALID3;
          if (value.status === "aborted")
            return INVALID3;
          if (key.status === "dirty")
            status.dirty();
          if (value.status === "dirty")
            status.dirty();
          if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
            finalObject[key.value] = value.value;
          }
        }
        return { status: status.value, value: finalObject };
      }
    };
    var INVALID3 = Object.freeze({
      status: "aborted"
    });
    var DIRTY3 = (value) => ({ status: "dirty", value });
    var OK3 = (value) => ({ status: "valid", value });
    var isAborted3 = (x) => x.status === "aborted";
    var isDirty3 = (x) => x.status === "dirty";
    var isValid3 = (x) => x.status === "valid";
    var isAsync3 = (x) => typeof Promise !== "undefined" && x instanceof Promise;
    var errorUtil3;
    (function(errorUtil5) {
      errorUtil5.errToObj = (message) => typeof message === "string" ? { message } : message || {};
      errorUtil5.toString = (message) => typeof message === "string" ? message : message?.message;
    })(errorUtil3 || (errorUtil3 = {}));
    var ParseInputLazyPath3 = class {
      constructor(parent, value, path, key) {
        this._cachedPath = [];
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key;
      }
      get path() {
        if (!this._cachedPath.length) {
          if (Array.isArray(this._key)) {
            this._cachedPath.push(...this._path, ...this._key);
          } else {
            this._cachedPath.push(...this._path, this._key);
          }
        }
        return this._cachedPath;
      }
    };
    var handleResult3 = (ctx, result) => {
      if (isValid3(result)) {
        return { success: true, data: result.value };
      } else {
        if (!ctx.common.issues.length) {
          throw new Error("Validation failed but no issues detected.");
        }
        return {
          success: false,
          get error() {
            if (this._error)
              return this._error;
            const error = new ZodError3(ctx.common.issues);
            this._error = error;
            return this._error;
          }
        };
      }
    };
    function processCreateParams3(params) {
      if (!params)
        return {};
      const { errorMap: errorMap5, invalid_type_error, required_error, description } = params;
      if (errorMap5 && (invalid_type_error || required_error)) {
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
      }
      if (errorMap5)
        return { errorMap: errorMap5, description };
      const customMap = (iss, ctx) => {
        const { message } = params;
        if (iss.code === "invalid_enum_value") {
          return { message: message ?? ctx.defaultError };
        }
        if (typeof ctx.data === "undefined") {
          return { message: message ?? required_error ?? ctx.defaultError };
        }
        if (iss.code !== "invalid_type")
          return { message: ctx.defaultError };
        return { message: message ?? invalid_type_error ?? ctx.defaultError };
      };
      return { errorMap: customMap, description };
    }
    var ZodType3 = class {
      get description() {
        return this._def.description;
      }
      _getType(input) {
        return getParsedType3(input.data);
      }
      _getOrReturnCtx(input, ctx) {
        return ctx || {
          common: input.parent.common,
          data: input.data,
          parsedType: getParsedType3(input.data),
          schemaErrorMap: this._def.errorMap,
          path: input.path,
          parent: input.parent
        };
      }
      _processInputParams(input) {
        return {
          status: new ParseStatus3(),
          ctx: {
            common: input.parent.common,
            data: input.data,
            parsedType: getParsedType3(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent
          }
        };
      }
      _parseSync(input) {
        const result = this._parse(input);
        if (isAsync3(result)) {
          throw new Error("Synchronous parse encountered promise.");
        }
        return result;
      }
      _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
      }
      parse(data, params) {
        const result = this.safeParse(data, params);
        if (result.success)
          return result.data;
        throw result.error;
      }
      safeParse(data, params) {
        const ctx = {
          common: {
            issues: [],
            async: params?.async ?? false,
            contextualErrorMap: params?.errorMap
          },
          path: params?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: getParsedType3(data)
        };
        const result = this._parseSync({ data, path: ctx.path, parent: ctx });
        return handleResult3(ctx, result);
      }
      "~validate"(data) {
        const ctx = {
          common: {
            issues: [],
            async: !!this["~standard"].async
          },
          path: [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: getParsedType3(data)
        };
        if (!this["~standard"].async) {
          try {
            const result = this._parseSync({ data, path: [], parent: ctx });
            return isValid3(result) ? {
              value: result.value
            } : {
              issues: ctx.common.issues
            };
          } catch (err) {
            if (err?.message?.toLowerCase()?.includes("encountered")) {
              this["~standard"].async = true;
            }
            ctx.common = {
              issues: [],
              async: true
            };
          }
        }
        return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid3(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        });
      }
      async parseAsync(data, params) {
        const result = await this.safeParseAsync(data, params);
        if (result.success)
          return result.data;
        throw result.error;
      }
      async safeParseAsync(data, params) {
        const ctx = {
          common: {
            issues: [],
            contextualErrorMap: params?.errorMap,
            async: true
          },
          path: params?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: getParsedType3(data)
        };
        const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
        const result = await (isAsync3(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
        return handleResult3(ctx, result);
      }
      refine(check, message) {
        const getIssueProperties = (val) => {
          if (typeof message === "string" || typeof message === "undefined") {
            return { message };
          } else if (typeof message === "function") {
            return message(val);
          } else {
            return message;
          }
        };
        return this._refinement((val, ctx) => {
          const result = check(val);
          const setError = () => ctx.addIssue({
            code: ZodIssueCode3.custom,
            ...getIssueProperties(val)
          });
          if (typeof Promise !== "undefined" && result instanceof Promise) {
            return result.then((data) => {
              if (!data) {
                setError();
                return false;
              } else {
                return true;
              }
            });
          }
          if (!result) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      refinement(check, refinementData) {
        return this._refinement((val, ctx) => {
          if (!check(val)) {
            ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
            return false;
          } else {
            return true;
          }
        });
      }
      _refinement(refinement) {
        return new ZodEffects3({
          schema: this,
          typeName: ZodFirstPartyTypeKind3.ZodEffects,
          effect: { type: "refinement", refinement }
        });
      }
      superRefine(refinement) {
        return this._refinement(refinement);
      }
      constructor(def) {
        this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.readonly = this.readonly.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
        this["~standard"] = {
          version: 1,
          vendor: "zod",
          validate: (data) => this["~validate"](data)
        };
      }
      optional() {
        return ZodOptional3.create(this, this._def);
      }
      nullable() {
        return ZodNullable3.create(this, this._def);
      }
      nullish() {
        return this.nullable().optional();
      }
      array() {
        return ZodArray3.create(this);
      }
      promise() {
        return ZodPromise3.create(this, this._def);
      }
      or(option) {
        return ZodUnion3.create([this, option], this._def);
      }
      and(incoming) {
        return ZodIntersection3.create(this, incoming, this._def);
      }
      transform(transform) {
        return new ZodEffects3({
          ...processCreateParams3(this._def),
          schema: this,
          typeName: ZodFirstPartyTypeKind3.ZodEffects,
          effect: { type: "transform", transform }
        });
      }
      default(def) {
        const defaultValueFunc = typeof def === "function" ? def : () => def;
        return new ZodDefault3({
          ...processCreateParams3(this._def),
          innerType: this,
          defaultValue: defaultValueFunc,
          typeName: ZodFirstPartyTypeKind3.ZodDefault
        });
      }
      brand() {
        return new ZodBranded3({
          typeName: ZodFirstPartyTypeKind3.ZodBranded,
          type: this,
          ...processCreateParams3(this._def)
        });
      }
      catch(def) {
        const catchValueFunc = typeof def === "function" ? def : () => def;
        return new ZodCatch3({
          ...processCreateParams3(this._def),
          innerType: this,
          catchValue: catchValueFunc,
          typeName: ZodFirstPartyTypeKind3.ZodCatch
        });
      }
      describe(description) {
        const This = this.constructor;
        return new This({
          ...this._def,
          description
        });
      }
      pipe(target) {
        return ZodPipeline3.create(this, target);
      }
      readonly() {
        return ZodReadonly3.create(this);
      }
      isOptional() {
        return this.safeParse(void 0).success;
      }
      isNullable() {
        return this.safeParse(null).success;
      }
    };
    var cuidRegex3 = /^c[^\s-]{8,}$/i;
    var cuid2Regex3 = /^[0-9a-z]+$/;
    var ulidRegex3 = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
    var uuidRegex3 = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
    var nanoidRegex3 = /^[a-z0-9_-]{21}$/i;
    var jwtRegex3 = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
    var durationRegex3 = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
    var emailRegex3 = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    var _emojiRegex3 = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
    var emojiRegex3;
    var ipv4Regex3 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
    var ipv4CidrRegex3 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
    var ipv6Regex3 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
    var ipv6CidrRegex3 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
    var base64Regex3 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    var base64urlRegex3 = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
    var dateRegexSource3 = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
    var dateRegex3 = new RegExp(`^${dateRegexSource3}$`);
    function timeRegexSource3(args) {
      let secondsRegexSource = `[0-5]\\d`;
      if (args.precision) {
        secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
      } else if (args.precision == null) {
        secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
      }
      const secondsQuantifier = args.precision ? "+" : "?";
      return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
    }
    function timeRegex3(args) {
      return new RegExp(`^${timeRegexSource3(args)}$`);
    }
    function datetimeRegex3(args) {
      let regex = `${dateRegexSource3}T${timeRegexSource3(args)}`;
      const opts = [];
      opts.push(args.local ? `Z?` : `Z`);
      if (args.offset)
        opts.push(`([+-]\\d{2}:?\\d{2})`);
      regex = `${regex}(${opts.join("|")})`;
      return new RegExp(`^${regex}$`);
    }
    function isValidIP3(ip, version) {
      if ((version === "v4" || !version) && ipv4Regex3.test(ip)) {
        return true;
      }
      if ((version === "v6" || !version) && ipv6Regex3.test(ip)) {
        return true;
      }
      return false;
    }
    function isValidJWT3(jwt, alg) {
      if (!jwtRegex3.test(jwt))
        return false;
      try {
        const [header] = jwt.split(".");
        if (!header)
          return false;
        const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
        const decoded = JSON.parse(atob(base64));
        if (typeof decoded !== "object" || decoded === null)
          return false;
        if ("typ" in decoded && decoded?.typ !== "JWT")
          return false;
        if (!decoded.alg)
          return false;
        if (alg && decoded.alg !== alg)
          return false;
        return true;
      } catch {
        return false;
      }
    }
    function isValidCidr3(ip, version) {
      if ((version === "v4" || !version) && ipv4CidrRegex3.test(ip)) {
        return true;
      }
      if ((version === "v6" || !version) && ipv6CidrRegex3.test(ip)) {
        return true;
      }
      return false;
    }
    var ZodString3 = class _ZodString extends ZodType3 {
      _parse(input) {
        if (this._def.coerce) {
          input.data = String(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType3.string) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext3(ctx2, {
            code: ZodIssueCode3.invalid_type,
            expected: ZodParsedType3.string,
            received: ctx2.parsedType
          });
          return INVALID3;
        }
        const status = new ParseStatus3();
        let ctx = void 0;
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            if (input.data.length < check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                code: ZodIssueCode3.too_small,
                minimum: check.value,
                type: "string",
                inclusive: true,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            if (input.data.length > check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                code: ZodIssueCode3.too_big,
                maximum: check.value,
                type: "string",
                inclusive: true,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "length") {
            const tooBig = input.data.length > check.value;
            const tooSmall = input.data.length < check.value;
            if (tooBig || tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              if (tooBig) {
                addIssueToContext3(ctx, {
                  code: ZodIssueCode3.too_big,
                  maximum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: true,
                  message: check.message
                });
              } else if (tooSmall) {
                addIssueToContext3(ctx, {
                  code: ZodIssueCode3.too_small,
                  minimum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: true,
                  message: check.message
                });
              }
              status.dirty();
            }
          } else if (check.kind === "email") {
            if (!emailRegex3.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                validation: "email",
                code: ZodIssueCode3.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "emoji") {
            if (!emojiRegex3) {
              emojiRegex3 = new RegExp(_emojiRegex3, "u");
            }
            if (!emojiRegex3.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                validation: "emoji",
                code: ZodIssueCode3.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "uuid") {
            if (!uuidRegex3.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                validation: "uuid",
                code: ZodIssueCode3.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "nanoid") {
            if (!nanoidRegex3.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                validation: "nanoid",
                code: ZodIssueCode3.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cuid") {
            if (!cuidRegex3.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                validation: "cuid",
                code: ZodIssueCode3.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cuid2") {
            if (!cuid2Regex3.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                validation: "cuid2",
                code: ZodIssueCode3.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "ulid") {
            if (!ulidRegex3.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                validation: "ulid",
                code: ZodIssueCode3.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "url") {
            try {
              new URL(input.data);
            } catch {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                validation: "url",
                code: ZodIssueCode3.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "regex") {
            check.regex.lastIndex = 0;
            const testResult = check.regex.test(input.data);
            if (!testResult) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                validation: "regex",
                code: ZodIssueCode3.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "trim") {
            input.data = input.data.trim();
          } else if (check.kind === "includes") {
            if (!input.data.includes(check.value, check.position)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                code: ZodIssueCode3.invalid_string,
                validation: { includes: check.value, position: check.position },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "toLowerCase") {
            input.data = input.data.toLowerCase();
          } else if (check.kind === "toUpperCase") {
            input.data = input.data.toUpperCase();
          } else if (check.kind === "startsWith") {
            if (!input.data.startsWith(check.value)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                code: ZodIssueCode3.invalid_string,
                validation: { startsWith: check.value },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "endsWith") {
            if (!input.data.endsWith(check.value)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                code: ZodIssueCode3.invalid_string,
                validation: { endsWith: check.value },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "datetime") {
            const regex = datetimeRegex3(check);
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                code: ZodIssueCode3.invalid_string,
                validation: "datetime",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "date") {
            const regex = dateRegex3;
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                code: ZodIssueCode3.invalid_string,
                validation: "date",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "time") {
            const regex = timeRegex3(check);
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                code: ZodIssueCode3.invalid_string,
                validation: "time",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "duration") {
            if (!durationRegex3.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                validation: "duration",
                code: ZodIssueCode3.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "ip") {
            if (!isValidIP3(input.data, check.version)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                validation: "ip",
                code: ZodIssueCode3.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "jwt") {
            if (!isValidJWT3(input.data, check.alg)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                validation: "jwt",
                code: ZodIssueCode3.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cidr") {
            if (!isValidCidr3(input.data, check.version)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                validation: "cidr",
                code: ZodIssueCode3.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "base64") {
            if (!base64Regex3.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                validation: "base64",
                code: ZodIssueCode3.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "base64url") {
            if (!base64urlRegex3.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                validation: "base64url",
                code: ZodIssueCode3.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util3.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      _regex(regex, validation, message) {
        return this.refinement((data) => regex.test(data), {
          validation,
          code: ZodIssueCode3.invalid_string,
          ...errorUtil3.errToObj(message)
        });
      }
      _addCheck(check) {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      email(message) {
        return this._addCheck({ kind: "email", ...errorUtil3.errToObj(message) });
      }
      url(message) {
        return this._addCheck({ kind: "url", ...errorUtil3.errToObj(message) });
      }
      emoji(message) {
        return this._addCheck({ kind: "emoji", ...errorUtil3.errToObj(message) });
      }
      uuid(message) {
        return this._addCheck({ kind: "uuid", ...errorUtil3.errToObj(message) });
      }
      nanoid(message) {
        return this._addCheck({ kind: "nanoid", ...errorUtil3.errToObj(message) });
      }
      cuid(message) {
        return this._addCheck({ kind: "cuid", ...errorUtil3.errToObj(message) });
      }
      cuid2(message) {
        return this._addCheck({ kind: "cuid2", ...errorUtil3.errToObj(message) });
      }
      ulid(message) {
        return this._addCheck({ kind: "ulid", ...errorUtil3.errToObj(message) });
      }
      base64(message) {
        return this._addCheck({ kind: "base64", ...errorUtil3.errToObj(message) });
      }
      base64url(message) {
        return this._addCheck({
          kind: "base64url",
          ...errorUtil3.errToObj(message)
        });
      }
      jwt(options) {
        return this._addCheck({ kind: "jwt", ...errorUtil3.errToObj(options) });
      }
      ip(options) {
        return this._addCheck({ kind: "ip", ...errorUtil3.errToObj(options) });
      }
      cidr(options) {
        return this._addCheck({ kind: "cidr", ...errorUtil3.errToObj(options) });
      }
      datetime(options) {
        if (typeof options === "string") {
          return this._addCheck({
            kind: "datetime",
            precision: null,
            offset: false,
            local: false,
            message: options
          });
        }
        return this._addCheck({
          kind: "datetime",
          precision: typeof options?.precision === "undefined" ? null : options?.precision,
          offset: options?.offset ?? false,
          local: options?.local ?? false,
          ...errorUtil3.errToObj(options?.message)
        });
      }
      date(message) {
        return this._addCheck({ kind: "date", message });
      }
      time(options) {
        if (typeof options === "string") {
          return this._addCheck({
            kind: "time",
            precision: null,
            message: options
          });
        }
        return this._addCheck({
          kind: "time",
          precision: typeof options?.precision === "undefined" ? null : options?.precision,
          ...errorUtil3.errToObj(options?.message)
        });
      }
      duration(message) {
        return this._addCheck({ kind: "duration", ...errorUtil3.errToObj(message) });
      }
      regex(regex, message) {
        return this._addCheck({
          kind: "regex",
          regex,
          ...errorUtil3.errToObj(message)
        });
      }
      includes(value, options) {
        return this._addCheck({
          kind: "includes",
          value,
          position: options?.position,
          ...errorUtil3.errToObj(options?.message)
        });
      }
      startsWith(value, message) {
        return this._addCheck({
          kind: "startsWith",
          value,
          ...errorUtil3.errToObj(message)
        });
      }
      endsWith(value, message) {
        return this._addCheck({
          kind: "endsWith",
          value,
          ...errorUtil3.errToObj(message)
        });
      }
      min(minLength, message) {
        return this._addCheck({
          kind: "min",
          value: minLength,
          ...errorUtil3.errToObj(message)
        });
      }
      max(maxLength, message) {
        return this._addCheck({
          kind: "max",
          value: maxLength,
          ...errorUtil3.errToObj(message)
        });
      }
      length(len, message) {
        return this._addCheck({
          kind: "length",
          value: len,
          ...errorUtil3.errToObj(message)
        });
      }
      /**
       * Equivalent to `.min(1)`
       */
      nonempty(message) {
        return this.min(1, errorUtil3.errToObj(message));
      }
      trim() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "trim" }]
        });
      }
      toLowerCase() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "toLowerCase" }]
        });
      }
      toUpperCase() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "toUpperCase" }]
        });
      }
      get isDatetime() {
        return !!this._def.checks.find((ch) => ch.kind === "datetime");
      }
      get isDate() {
        return !!this._def.checks.find((ch) => ch.kind === "date");
      }
      get isTime() {
        return !!this._def.checks.find((ch) => ch.kind === "time");
      }
      get isDuration() {
        return !!this._def.checks.find((ch) => ch.kind === "duration");
      }
      get isEmail() {
        return !!this._def.checks.find((ch) => ch.kind === "email");
      }
      get isURL() {
        return !!this._def.checks.find((ch) => ch.kind === "url");
      }
      get isEmoji() {
        return !!this._def.checks.find((ch) => ch.kind === "emoji");
      }
      get isUUID() {
        return !!this._def.checks.find((ch) => ch.kind === "uuid");
      }
      get isNANOID() {
        return !!this._def.checks.find((ch) => ch.kind === "nanoid");
      }
      get isCUID() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid");
      }
      get isCUID2() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid2");
      }
      get isULID() {
        return !!this._def.checks.find((ch) => ch.kind === "ulid");
      }
      get isIP() {
        return !!this._def.checks.find((ch) => ch.kind === "ip");
      }
      get isCIDR() {
        return !!this._def.checks.find((ch) => ch.kind === "cidr");
      }
      get isBase64() {
        return !!this._def.checks.find((ch) => ch.kind === "base64");
      }
      get isBase64url() {
        return !!this._def.checks.find((ch) => ch.kind === "base64url");
      }
      get minLength() {
        let min2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min2 === null || ch.value > min2)
              min2 = ch.value;
          }
        }
        return min2;
      }
      get maxLength() {
        let max2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max2 === null || ch.value < max2)
              max2 = ch.value;
          }
        }
        return max2;
      }
    };
    ZodString3.create = (params) => {
      return new ZodString3({
        checks: [],
        typeName: ZodFirstPartyTypeKind3.ZodString,
        coerce: params?.coerce ?? false,
        ...processCreateParams3(params)
      });
    };
    function floatSafeRemainder3(val, step) {
      const valDecCount = (val.toString().split(".")[1] || "").length;
      const stepDecCount = (step.toString().split(".")[1] || "").length;
      const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
      const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
      const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
      return valInt % stepInt / 10 ** decCount;
    }
    var ZodNumber3 = class _ZodNumber extends ZodType3 {
      constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
      }
      _parse(input) {
        if (this._def.coerce) {
          input.data = Number(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType3.number) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext3(ctx2, {
            code: ZodIssueCode3.invalid_type,
            expected: ZodParsedType3.number,
            received: ctx2.parsedType
          });
          return INVALID3;
        }
        let ctx = void 0;
        const status = new ParseStatus3();
        for (const check of this._def.checks) {
          if (check.kind === "int") {
            if (!util3.isInteger(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                code: ZodIssueCode3.invalid_type,
                expected: "integer",
                received: "float",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "min") {
            const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
            if (tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                code: ZodIssueCode3.too_small,
                minimum: check.value,
                type: "number",
                inclusive: check.inclusive,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
            if (tooBig) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                code: ZodIssueCode3.too_big,
                maximum: check.value,
                type: "number",
                inclusive: check.inclusive,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "multipleOf") {
            if (floatSafeRemainder3(input.data, check.value) !== 0) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                code: ZodIssueCode3.not_multiple_of,
                multipleOf: check.value,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "finite") {
            if (!Number.isFinite(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                code: ZodIssueCode3.not_finite,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util3.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      gte(value, message) {
        return this.setLimit("min", value, true, errorUtil3.toString(message));
      }
      gt(value, message) {
        return this.setLimit("min", value, false, errorUtil3.toString(message));
      }
      lte(value, message) {
        return this.setLimit("max", value, true, errorUtil3.toString(message));
      }
      lt(value, message) {
        return this.setLimit("max", value, false, errorUtil3.toString(message));
      }
      setLimit(kind, value, inclusive, message) {
        return new _ZodNumber({
          ...this._def,
          checks: [
            ...this._def.checks,
            {
              kind,
              value,
              inclusive,
              message: errorUtil3.toString(message)
            }
          ]
        });
      }
      _addCheck(check) {
        return new _ZodNumber({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      int(message) {
        return this._addCheck({
          kind: "int",
          message: errorUtil3.toString(message)
        });
      }
      positive(message) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: false,
          message: errorUtil3.toString(message)
        });
      }
      negative(message) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: false,
          message: errorUtil3.toString(message)
        });
      }
      nonpositive(message) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: true,
          message: errorUtil3.toString(message)
        });
      }
      nonnegative(message) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: true,
          message: errorUtil3.toString(message)
        });
      }
      multipleOf(value, message) {
        return this._addCheck({
          kind: "multipleOf",
          value,
          message: errorUtil3.toString(message)
        });
      }
      finite(message) {
        return this._addCheck({
          kind: "finite",
          message: errorUtil3.toString(message)
        });
      }
      safe(message) {
        return this._addCheck({
          kind: "min",
          inclusive: true,
          value: Number.MIN_SAFE_INTEGER,
          message: errorUtil3.toString(message)
        })._addCheck({
          kind: "max",
          inclusive: true,
          value: Number.MAX_SAFE_INTEGER,
          message: errorUtil3.toString(message)
        });
      }
      get minValue() {
        let min2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min2 === null || ch.value > min2)
              min2 = ch.value;
          }
        }
        return min2;
      }
      get maxValue() {
        let max2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max2 === null || ch.value < max2)
              max2 = ch.value;
          }
        }
        return max2;
      }
      get isInt() {
        return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util3.isInteger(ch.value));
      }
      get isFinite() {
        let max2 = null;
        let min2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
            return true;
          } else if (ch.kind === "min") {
            if (min2 === null || ch.value > min2)
              min2 = ch.value;
          } else if (ch.kind === "max") {
            if (max2 === null || ch.value < max2)
              max2 = ch.value;
          }
        }
        return Number.isFinite(min2) && Number.isFinite(max2);
      }
    };
    ZodNumber3.create = (params) => {
      return new ZodNumber3({
        checks: [],
        typeName: ZodFirstPartyTypeKind3.ZodNumber,
        coerce: params?.coerce || false,
        ...processCreateParams3(params)
      });
    };
    var ZodBigInt3 = class _ZodBigInt extends ZodType3 {
      constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
      }
      _parse(input) {
        if (this._def.coerce) {
          try {
            input.data = BigInt(input.data);
          } catch {
            return this._getInvalidInput(input);
          }
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType3.bigint) {
          return this._getInvalidInput(input);
        }
        let ctx = void 0;
        const status = new ParseStatus3();
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
            if (tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                code: ZodIssueCode3.too_small,
                type: "bigint",
                minimum: check.value,
                inclusive: check.inclusive,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
            if (tooBig) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                code: ZodIssueCode3.too_big,
                type: "bigint",
                maximum: check.value,
                inclusive: check.inclusive,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "multipleOf") {
            if (input.data % check.value !== BigInt(0)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                code: ZodIssueCode3.not_multiple_of,
                multipleOf: check.value,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util3.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      _getInvalidInput(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext3(ctx, {
          code: ZodIssueCode3.invalid_type,
          expected: ZodParsedType3.bigint,
          received: ctx.parsedType
        });
        return INVALID3;
      }
      gte(value, message) {
        return this.setLimit("min", value, true, errorUtil3.toString(message));
      }
      gt(value, message) {
        return this.setLimit("min", value, false, errorUtil3.toString(message));
      }
      lte(value, message) {
        return this.setLimit("max", value, true, errorUtil3.toString(message));
      }
      lt(value, message) {
        return this.setLimit("max", value, false, errorUtil3.toString(message));
      }
      setLimit(kind, value, inclusive, message) {
        return new _ZodBigInt({
          ...this._def,
          checks: [
            ...this._def.checks,
            {
              kind,
              value,
              inclusive,
              message: errorUtil3.toString(message)
            }
          ]
        });
      }
      _addCheck(check) {
        return new _ZodBigInt({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      positive(message) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: false,
          message: errorUtil3.toString(message)
        });
      }
      negative(message) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: false,
          message: errorUtil3.toString(message)
        });
      }
      nonpositive(message) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: true,
          message: errorUtil3.toString(message)
        });
      }
      nonnegative(message) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: true,
          message: errorUtil3.toString(message)
        });
      }
      multipleOf(value, message) {
        return this._addCheck({
          kind: "multipleOf",
          value,
          message: errorUtil3.toString(message)
        });
      }
      get minValue() {
        let min2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min2 === null || ch.value > min2)
              min2 = ch.value;
          }
        }
        return min2;
      }
      get maxValue() {
        let max2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max2 === null || ch.value < max2)
              max2 = ch.value;
          }
        }
        return max2;
      }
    };
    ZodBigInt3.create = (params) => {
      return new ZodBigInt3({
        checks: [],
        typeName: ZodFirstPartyTypeKind3.ZodBigInt,
        coerce: params?.coerce ?? false,
        ...processCreateParams3(params)
      });
    };
    var ZodBoolean3 = class extends ZodType3 {
      _parse(input) {
        if (this._def.coerce) {
          input.data = Boolean(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType3.boolean) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext3(ctx, {
            code: ZodIssueCode3.invalid_type,
            expected: ZodParsedType3.boolean,
            received: ctx.parsedType
          });
          return INVALID3;
        }
        return OK3(input.data);
      }
    };
    ZodBoolean3.create = (params) => {
      return new ZodBoolean3({
        typeName: ZodFirstPartyTypeKind3.ZodBoolean,
        coerce: params?.coerce || false,
        ...processCreateParams3(params)
      });
    };
    var ZodDate3 = class _ZodDate extends ZodType3 {
      _parse(input) {
        if (this._def.coerce) {
          input.data = new Date(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType3.date) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext3(ctx2, {
            code: ZodIssueCode3.invalid_type,
            expected: ZodParsedType3.date,
            received: ctx2.parsedType
          });
          return INVALID3;
        }
        if (Number.isNaN(input.data.getTime())) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext3(ctx2, {
            code: ZodIssueCode3.invalid_date
          });
          return INVALID3;
        }
        const status = new ParseStatus3();
        let ctx = void 0;
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            if (input.data.getTime() < check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                code: ZodIssueCode3.too_small,
                message: check.message,
                inclusive: true,
                exact: false,
                minimum: check.value,
                type: "date"
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            if (input.data.getTime() > check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext3(ctx, {
                code: ZodIssueCode3.too_big,
                message: check.message,
                inclusive: true,
                exact: false,
                maximum: check.value,
                type: "date"
              });
              status.dirty();
            }
          } else {
            util3.assertNever(check);
          }
        }
        return {
          status: status.value,
          value: new Date(input.data.getTime())
        };
      }
      _addCheck(check) {
        return new _ZodDate({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      min(minDate, message) {
        return this._addCheck({
          kind: "min",
          value: minDate.getTime(),
          message: errorUtil3.toString(message)
        });
      }
      max(maxDate, message) {
        return this._addCheck({
          kind: "max",
          value: maxDate.getTime(),
          message: errorUtil3.toString(message)
        });
      }
      get minDate() {
        let min2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min2 === null || ch.value > min2)
              min2 = ch.value;
          }
        }
        return min2 != null ? new Date(min2) : null;
      }
      get maxDate() {
        let max2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max2 === null || ch.value < max2)
              max2 = ch.value;
          }
        }
        return max2 != null ? new Date(max2) : null;
      }
    };
    ZodDate3.create = (params) => {
      return new ZodDate3({
        checks: [],
        coerce: params?.coerce || false,
        typeName: ZodFirstPartyTypeKind3.ZodDate,
        ...processCreateParams3(params)
      });
    };
    var ZodSymbol3 = class extends ZodType3 {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType3.symbol) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext3(ctx, {
            code: ZodIssueCode3.invalid_type,
            expected: ZodParsedType3.symbol,
            received: ctx.parsedType
          });
          return INVALID3;
        }
        return OK3(input.data);
      }
    };
    ZodSymbol3.create = (params) => {
      return new ZodSymbol3({
        typeName: ZodFirstPartyTypeKind3.ZodSymbol,
        ...processCreateParams3(params)
      });
    };
    var ZodUndefined3 = class extends ZodType3 {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType3.undefined) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext3(ctx, {
            code: ZodIssueCode3.invalid_type,
            expected: ZodParsedType3.undefined,
            received: ctx.parsedType
          });
          return INVALID3;
        }
        return OK3(input.data);
      }
    };
    ZodUndefined3.create = (params) => {
      return new ZodUndefined3({
        typeName: ZodFirstPartyTypeKind3.ZodUndefined,
        ...processCreateParams3(params)
      });
    };
    var ZodNull3 = class extends ZodType3 {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType3.null) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext3(ctx, {
            code: ZodIssueCode3.invalid_type,
            expected: ZodParsedType3.null,
            received: ctx.parsedType
          });
          return INVALID3;
        }
        return OK3(input.data);
      }
    };
    ZodNull3.create = (params) => {
      return new ZodNull3({
        typeName: ZodFirstPartyTypeKind3.ZodNull,
        ...processCreateParams3(params)
      });
    };
    var ZodAny3 = class extends ZodType3 {
      constructor() {
        super(...arguments);
        this._any = true;
      }
      _parse(input) {
        return OK3(input.data);
      }
    };
    ZodAny3.create = (params) => {
      return new ZodAny3({
        typeName: ZodFirstPartyTypeKind3.ZodAny,
        ...processCreateParams3(params)
      });
    };
    var ZodUnknown3 = class extends ZodType3 {
      constructor() {
        super(...arguments);
        this._unknown = true;
      }
      _parse(input) {
        return OK3(input.data);
      }
    };
    ZodUnknown3.create = (params) => {
      return new ZodUnknown3({
        typeName: ZodFirstPartyTypeKind3.ZodUnknown,
        ...processCreateParams3(params)
      });
    };
    var ZodNever3 = class extends ZodType3 {
      _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext3(ctx, {
          code: ZodIssueCode3.invalid_type,
          expected: ZodParsedType3.never,
          received: ctx.parsedType
        });
        return INVALID3;
      }
    };
    ZodNever3.create = (params) => {
      return new ZodNever3({
        typeName: ZodFirstPartyTypeKind3.ZodNever,
        ...processCreateParams3(params)
      });
    };
    var ZodVoid3 = class extends ZodType3 {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType3.undefined) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext3(ctx, {
            code: ZodIssueCode3.invalid_type,
            expected: ZodParsedType3.void,
            received: ctx.parsedType
          });
          return INVALID3;
        }
        return OK3(input.data);
      }
    };
    ZodVoid3.create = (params) => {
      return new ZodVoid3({
        typeName: ZodFirstPartyTypeKind3.ZodVoid,
        ...processCreateParams3(params)
      });
    };
    var ZodArray3 = class _ZodArray extends ZodType3 {
      _parse(input) {
        const { ctx, status } = this._processInputParams(input);
        const def = this._def;
        if (ctx.parsedType !== ZodParsedType3.array) {
          addIssueToContext3(ctx, {
            code: ZodIssueCode3.invalid_type,
            expected: ZodParsedType3.array,
            received: ctx.parsedType
          });
          return INVALID3;
        }
        if (def.exactLength !== null) {
          const tooBig = ctx.data.length > def.exactLength.value;
          const tooSmall = ctx.data.length < def.exactLength.value;
          if (tooBig || tooSmall) {
            addIssueToContext3(ctx, {
              code: tooBig ? ZodIssueCode3.too_big : ZodIssueCode3.too_small,
              minimum: tooSmall ? def.exactLength.value : void 0,
              maximum: tooBig ? def.exactLength.value : void 0,
              type: "array",
              inclusive: true,
              exact: true,
              message: def.exactLength.message
            });
            status.dirty();
          }
        }
        if (def.minLength !== null) {
          if (ctx.data.length < def.minLength.value) {
            addIssueToContext3(ctx, {
              code: ZodIssueCode3.too_small,
              minimum: def.minLength.value,
              type: "array",
              inclusive: true,
              exact: false,
              message: def.minLength.message
            });
            status.dirty();
          }
        }
        if (def.maxLength !== null) {
          if (ctx.data.length > def.maxLength.value) {
            addIssueToContext3(ctx, {
              code: ZodIssueCode3.too_big,
              maximum: def.maxLength.value,
              type: "array",
              inclusive: true,
              exact: false,
              message: def.maxLength.message
            });
            status.dirty();
          }
        }
        if (ctx.common.async) {
          return Promise.all([...ctx.data].map((item, i) => {
            return def.type._parseAsync(new ParseInputLazyPath3(ctx, item, ctx.path, i));
          })).then((result2) => {
            return ParseStatus3.mergeArray(status, result2);
          });
        }
        const result = [...ctx.data].map((item, i) => {
          return def.type._parseSync(new ParseInputLazyPath3(ctx, item, ctx.path, i));
        });
        return ParseStatus3.mergeArray(status, result);
      }
      get element() {
        return this._def.type;
      }
      min(minLength, message) {
        return new _ZodArray({
          ...this._def,
          minLength: { value: minLength, message: errorUtil3.toString(message) }
        });
      }
      max(maxLength, message) {
        return new _ZodArray({
          ...this._def,
          maxLength: { value: maxLength, message: errorUtil3.toString(message) }
        });
      }
      length(len, message) {
        return new _ZodArray({
          ...this._def,
          exactLength: { value: len, message: errorUtil3.toString(message) }
        });
      }
      nonempty(message) {
        return this.min(1, message);
      }
    };
    ZodArray3.create = (schema, params) => {
      return new ZodArray3({
        type: schema,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: ZodFirstPartyTypeKind3.ZodArray,
        ...processCreateParams3(params)
      });
    };
    function deepPartialify3(schema) {
      if (schema instanceof ZodObject3) {
        const newShape = {};
        for (const key in schema.shape) {
          const fieldSchema = schema.shape[key];
          newShape[key] = ZodOptional3.create(deepPartialify3(fieldSchema));
        }
        return new ZodObject3({
          ...schema._def,
          shape: () => newShape
        });
      } else if (schema instanceof ZodArray3) {
        return new ZodArray3({
          ...schema._def,
          type: deepPartialify3(schema.element)
        });
      } else if (schema instanceof ZodOptional3) {
        return ZodOptional3.create(deepPartialify3(schema.unwrap()));
      } else if (schema instanceof ZodNullable3) {
        return ZodNullable3.create(deepPartialify3(schema.unwrap()));
      } else if (schema instanceof ZodTuple3) {
        return ZodTuple3.create(schema.items.map((item) => deepPartialify3(item)));
      } else {
        return schema;
      }
    }
    var ZodObject3 = class _ZodObject extends ZodType3 {
      constructor() {
        super(...arguments);
        this._cached = null;
        this.nonstrict = this.passthrough;
        this.augment = this.extend;
      }
      _getCached() {
        if (this._cached !== null)
          return this._cached;
        const shape = this._def.shape();
        const keys = util3.objectKeys(shape);
        this._cached = { shape, keys };
        return this._cached;
      }
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType3.object) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext3(ctx2, {
            code: ZodIssueCode3.invalid_type,
            expected: ZodParsedType3.object,
            received: ctx2.parsedType
          });
          return INVALID3;
        }
        const { status, ctx } = this._processInputParams(input);
        const { shape, keys: shapeKeys } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever3 && this._def.unknownKeys === "strip")) {
          for (const key in ctx.data) {
            if (!shapeKeys.includes(key)) {
              extraKeys.push(key);
            }
          }
        }
        const pairs = [];
        for (const key of shapeKeys) {
          const keyValidator = shape[key];
          const value = ctx.data[key];
          pairs.push({
            key: { status: "valid", value: key },
            value: keyValidator._parse(new ParseInputLazyPath3(ctx, value, ctx.path, key)),
            alwaysSet: key in ctx.data
          });
        }
        if (this._def.catchall instanceof ZodNever3) {
          const unknownKeys = this._def.unknownKeys;
          if (unknownKeys === "passthrough") {
            for (const key of extraKeys) {
              pairs.push({
                key: { status: "valid", value: key },
                value: { status: "valid", value: ctx.data[key] }
              });
            }
          } else if (unknownKeys === "strict") {
            if (extraKeys.length > 0) {
              addIssueToContext3(ctx, {
                code: ZodIssueCode3.unrecognized_keys,
                keys: extraKeys
              });
              status.dirty();
            }
          } else if (unknownKeys === "strip") {
          } else {
            throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
          }
        } else {
          const catchall = this._def.catchall;
          for (const key of extraKeys) {
            const value = ctx.data[key];
            pairs.push({
              key: { status: "valid", value: key },
              value: catchall._parse(
                new ParseInputLazyPath3(ctx, value, ctx.path, key)
                //, ctx.child(key), value, getParsedType(value)
              ),
              alwaysSet: key in ctx.data
            });
          }
        }
        if (ctx.common.async) {
          return Promise.resolve().then(async () => {
            const syncPairs = [];
            for (const pair of pairs) {
              const key = await pair.key;
              const value = await pair.value;
              syncPairs.push({
                key,
                value,
                alwaysSet: pair.alwaysSet
              });
            }
            return syncPairs;
          }).then((syncPairs) => {
            return ParseStatus3.mergeObjectSync(status, syncPairs);
          });
        } else {
          return ParseStatus3.mergeObjectSync(status, pairs);
        }
      }
      get shape() {
        return this._def.shape();
      }
      strict(message) {
        errorUtil3.errToObj;
        return new _ZodObject({
          ...this._def,
          unknownKeys: "strict",
          ...message !== void 0 ? {
            errorMap: (issue, ctx) => {
              const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
              if (issue.code === "unrecognized_keys")
                return {
                  message: errorUtil3.errToObj(message).message ?? defaultError
                };
              return {
                message: defaultError
              };
            }
          } : {}
        });
      }
      strip() {
        return new _ZodObject({
          ...this._def,
          unknownKeys: "strip"
        });
      }
      passthrough() {
        return new _ZodObject({
          ...this._def,
          unknownKeys: "passthrough"
        });
      }
      // const AugmentFactory =
      //   <Def extends ZodObjectDef>(def: Def) =>
      //   <Augmentation extends ZodRawShape>(
      //     augmentation: Augmentation
      //   ): ZodObject<
      //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
      //     Def["unknownKeys"],
      //     Def["catchall"]
      //   > => {
      //     return new ZodObject({
      //       ...def,
      //       shape: () => ({
      //         ...def.shape(),
      //         ...augmentation,
      //       }),
      //     }) as any;
      //   };
      extend(augmentation) {
        return new _ZodObject({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...augmentation
          })
        });
      }
      /**
       * Prior to zod@1.0.12 there was a bug in the
       * inferred type of merged objects. Please
       * upgrade if you are experiencing issues.
       */
      merge(merging) {
        const merged = new _ZodObject({
          unknownKeys: merging._def.unknownKeys,
          catchall: merging._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...merging._def.shape()
          }),
          typeName: ZodFirstPartyTypeKind3.ZodObject
        });
        return merged;
      }
      // merge<
      //   Incoming extends AnyZodObject,
      //   Augmentation extends Incoming["shape"],
      //   NewOutput extends {
      //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
      //       ? Augmentation[k]["_output"]
      //       : k extends keyof Output
      //       ? Output[k]
      //       : never;
      //   },
      //   NewInput extends {
      //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
      //       ? Augmentation[k]["_input"]
      //       : k extends keyof Input
      //       ? Input[k]
      //       : never;
      //   }
      // >(
      //   merging: Incoming
      // ): ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"],
      //   NewOutput,
      //   NewInput
      // > {
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
      setKey(key, schema) {
        return this.augment({ [key]: schema });
      }
      // merge<Incoming extends AnyZodObject>(
      //   merging: Incoming
      // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
      // ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"]
      // > {
      //   // const mergedShape = objectUtil.mergeShapes(
      //   //   this._def.shape(),
      //   //   merging._def.shape()
      //   // );
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
      catchall(index) {
        return new _ZodObject({
          ...this._def,
          catchall: index
        });
      }
      pick(mask) {
        const shape = {};
        for (const key of util3.objectKeys(mask)) {
          if (mask[key] && this.shape[key]) {
            shape[key] = this.shape[key];
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => shape
        });
      }
      omit(mask) {
        const shape = {};
        for (const key of util3.objectKeys(this.shape)) {
          if (!mask[key]) {
            shape[key] = this.shape[key];
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => shape
        });
      }
      /**
       * @deprecated
       */
      deepPartial() {
        return deepPartialify3(this);
      }
      partial(mask) {
        const newShape = {};
        for (const key of util3.objectKeys(this.shape)) {
          const fieldSchema = this.shape[key];
          if (mask && !mask[key]) {
            newShape[key] = fieldSchema;
          } else {
            newShape[key] = fieldSchema.optional();
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => newShape
        });
      }
      required(mask) {
        const newShape = {};
        for (const key of util3.objectKeys(this.shape)) {
          if (mask && !mask[key]) {
            newShape[key] = this.shape[key];
          } else {
            const fieldSchema = this.shape[key];
            let newField = fieldSchema;
            while (newField instanceof ZodOptional3) {
              newField = newField._def.innerType;
            }
            newShape[key] = newField;
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => newShape
        });
      }
      keyof() {
        return createZodEnum3(util3.objectKeys(this.shape));
      }
    };
    ZodObject3.create = (shape, params) => {
      return new ZodObject3({
        shape: () => shape,
        unknownKeys: "strip",
        catchall: ZodNever3.create(),
        typeName: ZodFirstPartyTypeKind3.ZodObject,
        ...processCreateParams3(params)
      });
    };
    ZodObject3.strictCreate = (shape, params) => {
      return new ZodObject3({
        shape: () => shape,
        unknownKeys: "strict",
        catchall: ZodNever3.create(),
        typeName: ZodFirstPartyTypeKind3.ZodObject,
        ...processCreateParams3(params)
      });
    };
    ZodObject3.lazycreate = (shape, params) => {
      return new ZodObject3({
        shape,
        unknownKeys: "strip",
        catchall: ZodNever3.create(),
        typeName: ZodFirstPartyTypeKind3.ZodObject,
        ...processCreateParams3(params)
      });
    };
    var ZodUnion3 = class extends ZodType3 {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const options = this._def.options;
        function handleResults(results) {
          for (const result of results) {
            if (result.result.status === "valid") {
              return result.result;
            }
          }
          for (const result of results) {
            if (result.result.status === "dirty") {
              ctx.common.issues.push(...result.ctx.common.issues);
              return result.result;
            }
          }
          const unionErrors = results.map((result) => new ZodError3(result.ctx.common.issues));
          addIssueToContext3(ctx, {
            code: ZodIssueCode3.invalid_union,
            unionErrors
          });
          return INVALID3;
        }
        if (ctx.common.async) {
          return Promise.all(options.map(async (option) => {
            const childCtx = {
              ...ctx,
              common: {
                ...ctx.common,
                issues: []
              },
              parent: null
            };
            return {
              result: await option._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: childCtx
              }),
              ctx: childCtx
            };
          })).then(handleResults);
        } else {
          let dirty = void 0;
          const issues = [];
          for (const option of options) {
            const childCtx = {
              ...ctx,
              common: {
                ...ctx.common,
                issues: []
              },
              parent: null
            };
            const result = option._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: childCtx
            });
            if (result.status === "valid") {
              return result;
            } else if (result.status === "dirty" && !dirty) {
              dirty = { result, ctx: childCtx };
            }
            if (childCtx.common.issues.length) {
              issues.push(childCtx.common.issues);
            }
          }
          if (dirty) {
            ctx.common.issues.push(...dirty.ctx.common.issues);
            return dirty.result;
          }
          const unionErrors = issues.map((issues2) => new ZodError3(issues2));
          addIssueToContext3(ctx, {
            code: ZodIssueCode3.invalid_union,
            unionErrors
          });
          return INVALID3;
        }
      }
      get options() {
        return this._def.options;
      }
    };
    ZodUnion3.create = (types, params) => {
      return new ZodUnion3({
        options: types,
        typeName: ZodFirstPartyTypeKind3.ZodUnion,
        ...processCreateParams3(params)
      });
    };
    var getDiscriminator3 = (type) => {
      if (type instanceof ZodLazy3) {
        return getDiscriminator3(type.schema);
      } else if (type instanceof ZodEffects3) {
        return getDiscriminator3(type.innerType());
      } else if (type instanceof ZodLiteral3) {
        return [type.value];
      } else if (type instanceof ZodEnum3) {
        return type.options;
      } else if (type instanceof ZodNativeEnum3) {
        return util3.objectValues(type.enum);
      } else if (type instanceof ZodDefault3) {
        return getDiscriminator3(type._def.innerType);
      } else if (type instanceof ZodUndefined3) {
        return [void 0];
      } else if (type instanceof ZodNull3) {
        return [null];
      } else if (type instanceof ZodOptional3) {
        return [void 0, ...getDiscriminator3(type.unwrap())];
      } else if (type instanceof ZodNullable3) {
        return [null, ...getDiscriminator3(type.unwrap())];
      } else if (type instanceof ZodBranded3) {
        return getDiscriminator3(type.unwrap());
      } else if (type instanceof ZodReadonly3) {
        return getDiscriminator3(type.unwrap());
      } else if (type instanceof ZodCatch3) {
        return getDiscriminator3(type._def.innerType);
      } else {
        return [];
      }
    };
    var ZodDiscriminatedUnion3 = class _ZodDiscriminatedUnion extends ZodType3 {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType3.object) {
          addIssueToContext3(ctx, {
            code: ZodIssueCode3.invalid_type,
            expected: ZodParsedType3.object,
            received: ctx.parsedType
          });
          return INVALID3;
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.optionsMap.get(discriminatorValue);
        if (!option) {
          addIssueToContext3(ctx, {
            code: ZodIssueCode3.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [discriminator]
          });
          return INVALID3;
        }
        if (ctx.common.async) {
          return option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
        } else {
          return option._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
        }
      }
      get discriminator() {
        return this._def.discriminator;
      }
      get options() {
        return this._def.options;
      }
      get optionsMap() {
        return this._def.optionsMap;
      }
      /**
       * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
       * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
       * have a different value for each object in the union.
       * @param discriminator the name of the discriminator property
       * @param types an array of object schemas
       * @param params
       */
      static create(discriminator, options, params) {
        const optionsMap = /* @__PURE__ */ new Map();
        for (const type of options) {
          const discriminatorValues = getDiscriminator3(type.shape[discriminator]);
          if (!discriminatorValues.length) {
            throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
          }
          for (const value of discriminatorValues) {
            if (optionsMap.has(value)) {
              throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
            }
            optionsMap.set(value, type);
          }
        }
        return new _ZodDiscriminatedUnion({
          typeName: ZodFirstPartyTypeKind3.ZodDiscriminatedUnion,
          discriminator,
          options,
          optionsMap,
          ...processCreateParams3(params)
        });
      }
    };
    function mergeValues3(a, b) {
      const aType = getParsedType3(a);
      const bType = getParsedType3(b);
      if (a === b) {
        return { valid: true, data: a };
      } else if (aType === ZodParsedType3.object && bType === ZodParsedType3.object) {
        const bKeys = util3.objectKeys(b);
        const sharedKeys = util3.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
        const newObj = { ...a, ...b };
        for (const key of sharedKeys) {
          const sharedValue = mergeValues3(a[key], b[key]);
          if (!sharedValue.valid) {
            return { valid: false };
          }
          newObj[key] = sharedValue.data;
        }
        return { valid: true, data: newObj };
      } else if (aType === ZodParsedType3.array && bType === ZodParsedType3.array) {
        if (a.length !== b.length) {
          return { valid: false };
        }
        const newArray = [];
        for (let index = 0; index < a.length; index++) {
          const itemA = a[index];
          const itemB = b[index];
          const sharedValue = mergeValues3(itemA, itemB);
          if (!sharedValue.valid) {
            return { valid: false };
          }
          newArray.push(sharedValue.data);
        }
        return { valid: true, data: newArray };
      } else if (aType === ZodParsedType3.date && bType === ZodParsedType3.date && +a === +b) {
        return { valid: true, data: a };
      } else {
        return { valid: false };
      }
    }
    var ZodIntersection3 = class extends ZodType3 {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const handleParsed = (parsedLeft, parsedRight) => {
          if (isAborted3(parsedLeft) || isAborted3(parsedRight)) {
            return INVALID3;
          }
          const merged = mergeValues3(parsedLeft.value, parsedRight.value);
          if (!merged.valid) {
            addIssueToContext3(ctx, {
              code: ZodIssueCode3.invalid_intersection_types
            });
            return INVALID3;
          }
          if (isDirty3(parsedLeft) || isDirty3(parsedRight)) {
            status.dirty();
          }
          return { status: status.value, value: merged.data };
        };
        if (ctx.common.async) {
          return Promise.all([
            this._def.left._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            }),
            this._def.right._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            })
          ]).then(([left, right]) => handleParsed(left, right));
        } else {
          return handleParsed(this._def.left._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }), this._def.right._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }));
        }
      }
    };
    ZodIntersection3.create = (left, right, params) => {
      return new ZodIntersection3({
        left,
        right,
        typeName: ZodFirstPartyTypeKind3.ZodIntersection,
        ...processCreateParams3(params)
      });
    };
    var ZodTuple3 = class _ZodTuple extends ZodType3 {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType3.array) {
          addIssueToContext3(ctx, {
            code: ZodIssueCode3.invalid_type,
            expected: ZodParsedType3.array,
            received: ctx.parsedType
          });
          return INVALID3;
        }
        if (ctx.data.length < this._def.items.length) {
          addIssueToContext3(ctx, {
            code: ZodIssueCode3.too_small,
            minimum: this._def.items.length,
            inclusive: true,
            exact: false,
            type: "array"
          });
          return INVALID3;
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
          addIssueToContext3(ctx, {
            code: ZodIssueCode3.too_big,
            maximum: this._def.items.length,
            inclusive: true,
            exact: false,
            type: "array"
          });
          status.dirty();
        }
        const items = [...ctx.data].map((item, itemIndex) => {
          const schema = this._def.items[itemIndex] || this._def.rest;
          if (!schema)
            return null;
          return schema._parse(new ParseInputLazyPath3(ctx, item, ctx.path, itemIndex));
        }).filter((x) => !!x);
        if (ctx.common.async) {
          return Promise.all(items).then((results) => {
            return ParseStatus3.mergeArray(status, results);
          });
        } else {
          return ParseStatus3.mergeArray(status, items);
        }
      }
      get items() {
        return this._def.items;
      }
      rest(rest) {
        return new _ZodTuple({
          ...this._def,
          rest
        });
      }
    };
    ZodTuple3.create = (schemas, params) => {
      if (!Array.isArray(schemas)) {
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      }
      return new ZodTuple3({
        items: schemas,
        typeName: ZodFirstPartyTypeKind3.ZodTuple,
        rest: null,
        ...processCreateParams3(params)
      });
    };
    var ZodRecord3 = class _ZodRecord extends ZodType3 {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType3.object) {
          addIssueToContext3(ctx, {
            code: ZodIssueCode3.invalid_type,
            expected: ZodParsedType3.object,
            received: ctx.parsedType
          });
          return INVALID3;
        }
        const pairs = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for (const key in ctx.data) {
          pairs.push({
            key: keyType._parse(new ParseInputLazyPath3(ctx, key, ctx.path, key)),
            value: valueType._parse(new ParseInputLazyPath3(ctx, ctx.data[key], ctx.path, key)),
            alwaysSet: key in ctx.data
          });
        }
        if (ctx.common.async) {
          return ParseStatus3.mergeObjectAsync(status, pairs);
        } else {
          return ParseStatus3.mergeObjectSync(status, pairs);
        }
      }
      get element() {
        return this._def.valueType;
      }
      static create(first, second, third) {
        if (second instanceof ZodType3) {
          return new _ZodRecord({
            keyType: first,
            valueType: second,
            typeName: ZodFirstPartyTypeKind3.ZodRecord,
            ...processCreateParams3(third)
          });
        }
        return new _ZodRecord({
          keyType: ZodString3.create(),
          valueType: first,
          typeName: ZodFirstPartyTypeKind3.ZodRecord,
          ...processCreateParams3(second)
        });
      }
    };
    var ZodMap3 = class extends ZodType3 {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType3.map) {
          addIssueToContext3(ctx, {
            code: ZodIssueCode3.invalid_type,
            expected: ZodParsedType3.map,
            received: ctx.parsedType
          });
          return INVALID3;
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs = [...ctx.data.entries()].map(([key, value], index) => {
          return {
            key: keyType._parse(new ParseInputLazyPath3(ctx, key, ctx.path, [index, "key"])),
            value: valueType._parse(new ParseInputLazyPath3(ctx, value, ctx.path, [index, "value"]))
          };
        });
        if (ctx.common.async) {
          const finalMap = /* @__PURE__ */ new Map();
          return Promise.resolve().then(async () => {
            for (const pair of pairs) {
              const key = await pair.key;
              const value = await pair.value;
              if (key.status === "aborted" || value.status === "aborted") {
                return INVALID3;
              }
              if (key.status === "dirty" || value.status === "dirty") {
                status.dirty();
              }
              finalMap.set(key.value, value.value);
            }
            return { status: status.value, value: finalMap };
          });
        } else {
          const finalMap = /* @__PURE__ */ new Map();
          for (const pair of pairs) {
            const key = pair.key;
            const value = pair.value;
            if (key.status === "aborted" || value.status === "aborted") {
              return INVALID3;
            }
            if (key.status === "dirty" || value.status === "dirty") {
              status.dirty();
            }
            finalMap.set(key.value, value.value);
          }
          return { status: status.value, value: finalMap };
        }
      }
    };
    ZodMap3.create = (keyType, valueType, params) => {
      return new ZodMap3({
        valueType,
        keyType,
        typeName: ZodFirstPartyTypeKind3.ZodMap,
        ...processCreateParams3(params)
      });
    };
    var ZodSet3 = class _ZodSet extends ZodType3 {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType3.set) {
          addIssueToContext3(ctx, {
            code: ZodIssueCode3.invalid_type,
            expected: ZodParsedType3.set,
            received: ctx.parsedType
          });
          return INVALID3;
        }
        const def = this._def;
        if (def.minSize !== null) {
          if (ctx.data.size < def.minSize.value) {
            addIssueToContext3(ctx, {
              code: ZodIssueCode3.too_small,
              minimum: def.minSize.value,
              type: "set",
              inclusive: true,
              exact: false,
              message: def.minSize.message
            });
            status.dirty();
          }
        }
        if (def.maxSize !== null) {
          if (ctx.data.size > def.maxSize.value) {
            addIssueToContext3(ctx, {
              code: ZodIssueCode3.too_big,
              maximum: def.maxSize.value,
              type: "set",
              inclusive: true,
              exact: false,
              message: def.maxSize.message
            });
            status.dirty();
          }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements2) {
          const parsedSet = /* @__PURE__ */ new Set();
          for (const element of elements2) {
            if (element.status === "aborted")
              return INVALID3;
            if (element.status === "dirty")
              status.dirty();
            parsedSet.add(element.value);
          }
          return { status: status.value, value: parsedSet };
        }
        const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath3(ctx, item, ctx.path, i)));
        if (ctx.common.async) {
          return Promise.all(elements).then((elements2) => finalizeSet(elements2));
        } else {
          return finalizeSet(elements);
        }
      }
      min(minSize, message) {
        return new _ZodSet({
          ...this._def,
          minSize: { value: minSize, message: errorUtil3.toString(message) }
        });
      }
      max(maxSize, message) {
        return new _ZodSet({
          ...this._def,
          maxSize: { value: maxSize, message: errorUtil3.toString(message) }
        });
      }
      size(size, message) {
        return this.min(size, message).max(size, message);
      }
      nonempty(message) {
        return this.min(1, message);
      }
    };
    ZodSet3.create = (valueType, params) => {
      return new ZodSet3({
        valueType,
        minSize: null,
        maxSize: null,
        typeName: ZodFirstPartyTypeKind3.ZodSet,
        ...processCreateParams3(params)
      });
    };
    var ZodFunction3 = class _ZodFunction extends ZodType3 {
      constructor() {
        super(...arguments);
        this.validate = this.implement;
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType3.function) {
          addIssueToContext3(ctx, {
            code: ZodIssueCode3.invalid_type,
            expected: ZodParsedType3.function,
            received: ctx.parsedType
          });
          return INVALID3;
        }
        function makeArgsIssue(args, error) {
          return makeIssue3({
            data: args,
            path: ctx.path,
            errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap3(), en_default3].filter((x) => !!x),
            issueData: {
              code: ZodIssueCode3.invalid_arguments,
              argumentsError: error
            }
          });
        }
        function makeReturnsIssue(returns, error) {
          return makeIssue3({
            data: returns,
            path: ctx.path,
            errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap3(), en_default3].filter((x) => !!x),
            issueData: {
              code: ZodIssueCode3.invalid_return_type,
              returnTypeError: error
            }
          });
        }
        const params = { errorMap: ctx.common.contextualErrorMap };
        const fn = ctx.data;
        if (this._def.returns instanceof ZodPromise3) {
          const me = this;
          return OK3(async function(...args) {
            const error = new ZodError3([]);
            const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
              error.addIssue(makeArgsIssue(args, e));
              throw error;
            });
            const result = await Reflect.apply(fn, this, parsedArgs);
            const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
              error.addIssue(makeReturnsIssue(result, e));
              throw error;
            });
            return parsedReturns;
          });
        } else {
          const me = this;
          return OK3(function(...args) {
            const parsedArgs = me._def.args.safeParse(args, params);
            if (!parsedArgs.success) {
              throw new ZodError3([makeArgsIssue(args, parsedArgs.error)]);
            }
            const result = Reflect.apply(fn, this, parsedArgs.data);
            const parsedReturns = me._def.returns.safeParse(result, params);
            if (!parsedReturns.success) {
              throw new ZodError3([makeReturnsIssue(result, parsedReturns.error)]);
            }
            return parsedReturns.data;
          });
        }
      }
      parameters() {
        return this._def.args;
      }
      returnType() {
        return this._def.returns;
      }
      args(...items) {
        return new _ZodFunction({
          ...this._def,
          args: ZodTuple3.create(items).rest(ZodUnknown3.create())
        });
      }
      returns(returnType) {
        return new _ZodFunction({
          ...this._def,
          returns: returnType
        });
      }
      implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
      }
      strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
      }
      static create(args, returns, params) {
        return new _ZodFunction({
          args: args ? args : ZodTuple3.create([]).rest(ZodUnknown3.create()),
          returns: returns || ZodUnknown3.create(),
          typeName: ZodFirstPartyTypeKind3.ZodFunction,
          ...processCreateParams3(params)
        });
      }
    };
    var ZodLazy3 = class extends ZodType3 {
      get schema() {
        return this._def.getter();
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
      }
    };
    ZodLazy3.create = (getter, params) => {
      return new ZodLazy3({
        getter,
        typeName: ZodFirstPartyTypeKind3.ZodLazy,
        ...processCreateParams3(params)
      });
    };
    var ZodLiteral3 = class extends ZodType3 {
      _parse(input) {
        if (input.data !== this._def.value) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext3(ctx, {
            received: ctx.data,
            code: ZodIssueCode3.invalid_literal,
            expected: this._def.value
          });
          return INVALID3;
        }
        return { status: "valid", value: input.data };
      }
      get value() {
        return this._def.value;
      }
    };
    ZodLiteral3.create = (value, params) => {
      return new ZodLiteral3({
        value,
        typeName: ZodFirstPartyTypeKind3.ZodLiteral,
        ...processCreateParams3(params)
      });
    };
    function createZodEnum3(values, params) {
      return new ZodEnum3({
        values,
        typeName: ZodFirstPartyTypeKind3.ZodEnum,
        ...processCreateParams3(params)
      });
    }
    var ZodEnum3 = class _ZodEnum extends ZodType3 {
      _parse(input) {
        if (typeof input.data !== "string") {
          const ctx = this._getOrReturnCtx(input);
          const expectedValues = this._def.values;
          addIssueToContext3(ctx, {
            expected: util3.joinValues(expectedValues),
            received: ctx.parsedType,
            code: ZodIssueCode3.invalid_type
          });
          return INVALID3;
        }
        if (!this._cache) {
          this._cache = new Set(this._def.values);
        }
        if (!this._cache.has(input.data)) {
          const ctx = this._getOrReturnCtx(input);
          const expectedValues = this._def.values;
          addIssueToContext3(ctx, {
            received: ctx.data,
            code: ZodIssueCode3.invalid_enum_value,
            options: expectedValues
          });
          return INVALID3;
        }
        return OK3(input.data);
      }
      get options() {
        return this._def.values;
      }
      get enum() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      get Values() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      get Enum() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      extract(values, newDef = this._def) {
        return _ZodEnum.create(values, {
          ...this._def,
          ...newDef
        });
      }
      exclude(values, newDef = this._def) {
        return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
          ...this._def,
          ...newDef
        });
      }
    };
    ZodEnum3.create = createZodEnum3;
    var ZodNativeEnum3 = class extends ZodType3 {
      _parse(input) {
        const nativeEnumValues = util3.getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== ZodParsedType3.string && ctx.parsedType !== ZodParsedType3.number) {
          const expectedValues = util3.objectValues(nativeEnumValues);
          addIssueToContext3(ctx, {
            expected: util3.joinValues(expectedValues),
            received: ctx.parsedType,
            code: ZodIssueCode3.invalid_type
          });
          return INVALID3;
        }
        if (!this._cache) {
          this._cache = new Set(util3.getValidEnumValues(this._def.values));
        }
        if (!this._cache.has(input.data)) {
          const expectedValues = util3.objectValues(nativeEnumValues);
          addIssueToContext3(ctx, {
            received: ctx.data,
            code: ZodIssueCode3.invalid_enum_value,
            options: expectedValues
          });
          return INVALID3;
        }
        return OK3(input.data);
      }
      get enum() {
        return this._def.values;
      }
    };
    ZodNativeEnum3.create = (values, params) => {
      return new ZodNativeEnum3({
        values,
        typeName: ZodFirstPartyTypeKind3.ZodNativeEnum,
        ...processCreateParams3(params)
      });
    };
    var ZodPromise3 = class extends ZodType3 {
      unwrap() {
        return this._def.type;
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType3.promise && ctx.common.async === false) {
          addIssueToContext3(ctx, {
            code: ZodIssueCode3.invalid_type,
            expected: ZodParsedType3.promise,
            received: ctx.parsedType
          });
          return INVALID3;
        }
        const promisified = ctx.parsedType === ZodParsedType3.promise ? ctx.data : Promise.resolve(ctx.data);
        return OK3(promisified.then((data) => {
          return this._def.type.parseAsync(data, {
            path: ctx.path,
            errorMap: ctx.common.contextualErrorMap
          });
        }));
      }
    };
    ZodPromise3.create = (schema, params) => {
      return new ZodPromise3({
        type: schema,
        typeName: ZodFirstPartyTypeKind3.ZodPromise,
        ...processCreateParams3(params)
      });
    };
    var ZodEffects3 = class extends ZodType3 {
      innerType() {
        return this._def.schema;
      }
      sourceType() {
        return this._def.schema._def.typeName === ZodFirstPartyTypeKind3.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const effect = this._def.effect || null;
        const checkCtx = {
          addIssue: (arg) => {
            addIssueToContext3(ctx, arg);
            if (arg.fatal) {
              status.abort();
            } else {
              status.dirty();
            }
          },
          get path() {
            return ctx.path;
          }
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "preprocess") {
          const processed = effect.transform(ctx.data, checkCtx);
          if (ctx.common.async) {
            return Promise.resolve(processed).then(async (processed2) => {
              if (status.value === "aborted")
                return INVALID3;
              const result = await this._def.schema._parseAsync({
                data: processed2,
                path: ctx.path,
                parent: ctx
              });
              if (result.status === "aborted")
                return INVALID3;
              if (result.status === "dirty")
                return DIRTY3(result.value);
              if (status.value === "dirty")
                return DIRTY3(result.value);
              return result;
            });
          } else {
            if (status.value === "aborted")
              return INVALID3;
            const result = this._def.schema._parseSync({
              data: processed,
              path: ctx.path,
              parent: ctx
            });
            if (result.status === "aborted")
              return INVALID3;
            if (result.status === "dirty")
              return DIRTY3(result.value);
            if (status.value === "dirty")
              return DIRTY3(result.value);
            return result;
          }
        }
        if (effect.type === "refinement") {
          const executeRefinement = (acc) => {
            const result = effect.refinement(acc, checkCtx);
            if (ctx.common.async) {
              return Promise.resolve(result);
            }
            if (result instanceof Promise) {
              throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            }
            return acc;
          };
          if (ctx.common.async === false) {
            const inner = this._def.schema._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (inner.status === "aborted")
              return INVALID3;
            if (inner.status === "dirty")
              status.dirty();
            executeRefinement(inner.value);
            return { status: status.value, value: inner.value };
          } else {
            return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
              if (inner.status === "aborted")
                return INVALID3;
              if (inner.status === "dirty")
                status.dirty();
              return executeRefinement(inner.value).then(() => {
                return { status: status.value, value: inner.value };
              });
            });
          }
        }
        if (effect.type === "transform") {
          if (ctx.common.async === false) {
            const base = this._def.schema._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (!isValid3(base))
              return INVALID3;
            const result = effect.transform(base.value, checkCtx);
            if (result instanceof Promise) {
              throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
            }
            return { status: status.value, value: result };
          } else {
            return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
              if (!isValid3(base))
                return INVALID3;
              return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
                status: status.value,
                value: result
              }));
            });
          }
        }
        util3.assertNever(effect);
      }
    };
    ZodEffects3.create = (schema, effect, params) => {
      return new ZodEffects3({
        schema,
        typeName: ZodFirstPartyTypeKind3.ZodEffects,
        effect,
        ...processCreateParams3(params)
      });
    };
    ZodEffects3.createWithPreprocess = (preprocess, schema, params) => {
      return new ZodEffects3({
        schema,
        effect: { type: "preprocess", transform: preprocess },
        typeName: ZodFirstPartyTypeKind3.ZodEffects,
        ...processCreateParams3(params)
      });
    };
    var ZodOptional3 = class extends ZodType3 {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType3.undefined) {
          return OK3(void 0);
        }
        return this._def.innerType._parse(input);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodOptional3.create = (type, params) => {
      return new ZodOptional3({
        innerType: type,
        typeName: ZodFirstPartyTypeKind3.ZodOptional,
        ...processCreateParams3(params)
      });
    };
    var ZodNullable3 = class extends ZodType3 {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType3.null) {
          return OK3(null);
        }
        return this._def.innerType._parse(input);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodNullable3.create = (type, params) => {
      return new ZodNullable3({
        innerType: type,
        typeName: ZodFirstPartyTypeKind3.ZodNullable,
        ...processCreateParams3(params)
      });
    };
    var ZodDefault3 = class extends ZodType3 {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === ZodParsedType3.undefined) {
          data = this._def.defaultValue();
        }
        return this._def.innerType._parse({
          data,
          path: ctx.path,
          parent: ctx
        });
      }
      removeDefault() {
        return this._def.innerType;
      }
    };
    ZodDefault3.create = (type, params) => {
      return new ZodDefault3({
        innerType: type,
        typeName: ZodFirstPartyTypeKind3.ZodDefault,
        defaultValue: typeof params.default === "function" ? params.default : () => params.default,
        ...processCreateParams3(params)
      });
    };
    var ZodCatch3 = class extends ZodType3 {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const newCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          }
        };
        const result = this._def.innerType._parse({
          data: newCtx.data,
          path: newCtx.path,
          parent: {
            ...newCtx
          }
        });
        if (isAsync3(result)) {
          return result.then((result2) => {
            return {
              status: "valid",
              value: result2.status === "valid" ? result2.value : this._def.catchValue({
                get error() {
                  return new ZodError3(newCtx.common.issues);
                },
                input: newCtx.data
              })
            };
          });
        } else {
          return {
            status: "valid",
            value: result.status === "valid" ? result.value : this._def.catchValue({
              get error() {
                return new ZodError3(newCtx.common.issues);
              },
              input: newCtx.data
            })
          };
        }
      }
      removeCatch() {
        return this._def.innerType;
      }
    };
    ZodCatch3.create = (type, params) => {
      return new ZodCatch3({
        innerType: type,
        typeName: ZodFirstPartyTypeKind3.ZodCatch,
        catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
        ...processCreateParams3(params)
      });
    };
    var ZodNaN3 = class extends ZodType3 {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType3.nan) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext3(ctx, {
            code: ZodIssueCode3.invalid_type,
            expected: ZodParsedType3.nan,
            received: ctx.parsedType
          });
          return INVALID3;
        }
        return { status: "valid", value: input.data };
      }
    };
    ZodNaN3.create = (params) => {
      return new ZodNaN3({
        typeName: ZodFirstPartyTypeKind3.ZodNaN,
        ...processCreateParams3(params)
      });
    };
    var BRAND3 = Symbol("zod_brand");
    var ZodBranded3 = class extends ZodType3 {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
          data,
          path: ctx.path,
          parent: ctx
        });
      }
      unwrap() {
        return this._def.type;
      }
    };
    var ZodPipeline3 = class _ZodPipeline extends ZodType3 {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.common.async) {
          const handleAsync = async () => {
            const inResult = await this._def.in._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (inResult.status === "aborted")
              return INVALID3;
            if (inResult.status === "dirty") {
              status.dirty();
              return DIRTY3(inResult.value);
            } else {
              return this._def.out._parseAsync({
                data: inResult.value,
                path: ctx.path,
                parent: ctx
              });
            }
          };
          return handleAsync();
        } else {
          const inResult = this._def.in._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inResult.status === "aborted")
            return INVALID3;
          if (inResult.status === "dirty") {
            status.dirty();
            return {
              status: "dirty",
              value: inResult.value
            };
          } else {
            return this._def.out._parseSync({
              data: inResult.value,
              path: ctx.path,
              parent: ctx
            });
          }
        }
      }
      static create(a, b) {
        return new _ZodPipeline({
          in: a,
          out: b,
          typeName: ZodFirstPartyTypeKind3.ZodPipeline
        });
      }
    };
    var ZodReadonly3 = class extends ZodType3 {
      _parse(input) {
        const result = this._def.innerType._parse(input);
        const freeze = (data) => {
          if (isValid3(data)) {
            data.value = Object.freeze(data.value);
          }
          return data;
        };
        return isAsync3(result) ? result.then((data) => freeze(data)) : freeze(result);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodReadonly3.create = (type, params) => {
      return new ZodReadonly3({
        innerType: type,
        typeName: ZodFirstPartyTypeKind3.ZodReadonly,
        ...processCreateParams3(params)
      });
    };
    function cleanParams3(params, data) {
      const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
      const p2 = typeof p === "string" ? { message: p } : p;
      return p2;
    }
    function custom3(check, _params = {}, fatal) {
      if (check)
        return ZodAny3.create().superRefine((data, ctx) => {
          const r = check(data);
          if (r instanceof Promise) {
            return r.then((r2) => {
              if (!r2) {
                const params = cleanParams3(_params, data);
                const _fatal = params.fatal ?? fatal ?? true;
                ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
              }
            });
          }
          if (!r) {
            const params = cleanParams3(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
          return;
        });
      return ZodAny3.create();
    }
    var late3 = {
      object: ZodObject3.lazycreate
    };
    var ZodFirstPartyTypeKind3;
    (function(ZodFirstPartyTypeKind5) {
      ZodFirstPartyTypeKind5["ZodString"] = "ZodString";
      ZodFirstPartyTypeKind5["ZodNumber"] = "ZodNumber";
      ZodFirstPartyTypeKind5["ZodNaN"] = "ZodNaN";
      ZodFirstPartyTypeKind5["ZodBigInt"] = "ZodBigInt";
      ZodFirstPartyTypeKind5["ZodBoolean"] = "ZodBoolean";
      ZodFirstPartyTypeKind5["ZodDate"] = "ZodDate";
      ZodFirstPartyTypeKind5["ZodSymbol"] = "ZodSymbol";
      ZodFirstPartyTypeKind5["ZodUndefined"] = "ZodUndefined";
      ZodFirstPartyTypeKind5["ZodNull"] = "ZodNull";
      ZodFirstPartyTypeKind5["ZodAny"] = "ZodAny";
      ZodFirstPartyTypeKind5["ZodUnknown"] = "ZodUnknown";
      ZodFirstPartyTypeKind5["ZodNever"] = "ZodNever";
      ZodFirstPartyTypeKind5["ZodVoid"] = "ZodVoid";
      ZodFirstPartyTypeKind5["ZodArray"] = "ZodArray";
      ZodFirstPartyTypeKind5["ZodObject"] = "ZodObject";
      ZodFirstPartyTypeKind5["ZodUnion"] = "ZodUnion";
      ZodFirstPartyTypeKind5["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
      ZodFirstPartyTypeKind5["ZodIntersection"] = "ZodIntersection";
      ZodFirstPartyTypeKind5["ZodTuple"] = "ZodTuple";
      ZodFirstPartyTypeKind5["ZodRecord"] = "ZodRecord";
      ZodFirstPartyTypeKind5["ZodMap"] = "ZodMap";
      ZodFirstPartyTypeKind5["ZodSet"] = "ZodSet";
      ZodFirstPartyTypeKind5["ZodFunction"] = "ZodFunction";
      ZodFirstPartyTypeKind5["ZodLazy"] = "ZodLazy";
      ZodFirstPartyTypeKind5["ZodLiteral"] = "ZodLiteral";
      ZodFirstPartyTypeKind5["ZodEnum"] = "ZodEnum";
      ZodFirstPartyTypeKind5["ZodEffects"] = "ZodEffects";
      ZodFirstPartyTypeKind5["ZodNativeEnum"] = "ZodNativeEnum";
      ZodFirstPartyTypeKind5["ZodOptional"] = "ZodOptional";
      ZodFirstPartyTypeKind5["ZodNullable"] = "ZodNullable";
      ZodFirstPartyTypeKind5["ZodDefault"] = "ZodDefault";
      ZodFirstPartyTypeKind5["ZodCatch"] = "ZodCatch";
      ZodFirstPartyTypeKind5["ZodPromise"] = "ZodPromise";
      ZodFirstPartyTypeKind5["ZodBranded"] = "ZodBranded";
      ZodFirstPartyTypeKind5["ZodPipeline"] = "ZodPipeline";
      ZodFirstPartyTypeKind5["ZodReadonly"] = "ZodReadonly";
    })(ZodFirstPartyTypeKind3 || (ZodFirstPartyTypeKind3 = {}));
    var instanceOfType3 = (cls, params = {
      message: `Input not instance of ${cls.name}`
    }) => custom3((data) => data instanceof cls, params);
    var stringType3 = ZodString3.create;
    var numberType3 = ZodNumber3.create;
    var nanType3 = ZodNaN3.create;
    var bigIntType3 = ZodBigInt3.create;
    var booleanType3 = ZodBoolean3.create;
    var dateType3 = ZodDate3.create;
    var symbolType3 = ZodSymbol3.create;
    var undefinedType3 = ZodUndefined3.create;
    var nullType3 = ZodNull3.create;
    var anyType3 = ZodAny3.create;
    var unknownType3 = ZodUnknown3.create;
    var neverType3 = ZodNever3.create;
    var voidType3 = ZodVoid3.create;
    var arrayType3 = ZodArray3.create;
    var objectType3 = ZodObject3.create;
    var strictObjectType3 = ZodObject3.strictCreate;
    var unionType3 = ZodUnion3.create;
    var discriminatedUnionType3 = ZodDiscriminatedUnion3.create;
    var intersectionType3 = ZodIntersection3.create;
    var tupleType3 = ZodTuple3.create;
    var recordType3 = ZodRecord3.create;
    var mapType3 = ZodMap3.create;
    var setType3 = ZodSet3.create;
    var functionType3 = ZodFunction3.create;
    var lazyType3 = ZodLazy3.create;
    var literalType3 = ZodLiteral3.create;
    var enumType3 = ZodEnum3.create;
    var nativeEnumType3 = ZodNativeEnum3.create;
    var promiseType3 = ZodPromise3.create;
    var effectsType3 = ZodEffects3.create;
    var optionalType3 = ZodOptional3.create;
    var nullableType3 = ZodNullable3.create;
    var preprocessType3 = ZodEffects3.createWithPreprocess;
    var pipelineType3 = ZodPipeline3.create;
    var ostring3 = () => stringType3().optional();
    var onumber3 = () => numberType3().optional();
    var oboolean3 = () => booleanType3().optional();
    var coerce3 = {
      string: (arg) => ZodString3.create({ ...arg, coerce: true }),
      number: (arg) => ZodNumber3.create({ ...arg, coerce: true }),
      boolean: (arg) => ZodBoolean3.create({
        ...arg,
        coerce: true
      }),
      bigint: (arg) => ZodBigInt3.create({ ...arg, coerce: true }),
      date: (arg) => ZodDate3.create({ ...arg, coerce: true })
    };
    var NEVER3 = INVALID3;
    var ProviderSchema3 = external_exports3.enum([
      "OpenAI",
      "Anthropic",
      "Google",
      "Azure",
      "AWS",
      "Cohere",
      "Mistral",
      "Custom"
    ]);
    var ModelTierSchema = external_exports3.enum([
      "economy",
      // Low cost, lower quality (e.g., GPT-3.5-turbo)
      "standard",
      // Balanced cost/quality (e.g., GPT-4o-mini)
      "premium",
      // High quality, higher cost (e.g., GPT-4o)
      "flagship"
      // Highest quality (e.g., GPT-4, Claude-3-opus)
    ]);
    var LatencyMetricsSchema = external_exports3.object({
      p50_ms: external_exports3.number().nonnegative(),
      p95_ms: external_exports3.number().nonnegative(),
      p99_ms: external_exports3.number().nonnegative(),
      avg_ms: external_exports3.number().nonnegative(),
      min_ms: external_exports3.number().nonnegative(),
      max_ms: external_exports3.number().nonnegative()
    });
    var QualityMetricsSchema = external_exports3.object({
      accuracy: external_exports3.number().min(0).max(1).optional(),
      relevance: external_exports3.number().min(0).max(1).optional(),
      coherence: external_exports3.number().min(0).max(1).optional(),
      helpfulness: external_exports3.number().min(0).max(1).optional(),
      composite_score: external_exports3.number().min(0).max(1)
    });
    var CostMetricsSchema = external_exports3.object({
      cost_per_request_usd: external_exports3.number().nonnegative(),
      cost_per_1k_tokens_usd: external_exports3.number().nonnegative(),
      total_cost_usd: external_exports3.number().nonnegative(),
      token_count: external_exports3.number().int().nonnegative()
    });
    var PerformanceRecordSchema = external_exports3.object({
      id: external_exports3.string().uuid(),
      timestamp: external_exports3.string().datetime(),
      provider: ProviderSchema3,
      model: external_exports3.string(),
      model_tier: ModelTierSchema.optional(),
      // Cost metrics
      cost: CostMetricsSchema,
      // Performance metrics
      latency: LatencyMetricsSchema,
      // Quality metrics (optional - may not be available for all records)
      quality: QualityMetricsSchema.optional(),
      // Context
      execution_id: external_exports3.string().optional(),
      agent_id: external_exports3.string().optional(),
      workflow_id: external_exports3.string().optional(),
      tenant_id: external_exports3.string().optional(),
      // Tags for filtering/grouping
      tags: external_exports3.record(external_exports3.string()).optional(),
      metadata: external_exports3.record(external_exports3.unknown()).optional()
    });
    var TradeoffAnalysisInputSchema = external_exports3.object({
      records: external_exports3.array(PerformanceRecordSchema).min(1),
      analysis_scope: external_exports3.enum(["model", "provider", "tier", "execution"]).default("model"),
      // Weighting for tradeoff calculation
      weights: external_exports3.object({
        cost: external_exports3.number().min(0).max(1).default(0.33),
        latency: external_exports3.number().min(0).max(1).default(0.33),
        quality: external_exports3.number().min(0).max(1).default(0.34)
      }).refine(
        (w) => Math.abs(w.cost + w.latency + w.quality - 1) < 1e-3,
        { message: "Weights must sum to 1.0" }
      ).optional(),
      // Constraints
      constraints: external_exports3.object({
        max_cost_per_request_usd: external_exports3.number().positive().optional(),
        max_latency_p95_ms: external_exports3.number().positive().optional(),
        min_quality_score: external_exports3.number().min(0).max(1).optional()
      }).optional(),
      // Analysis options
      options: external_exports3.object({
        include_diminishing_returns: external_exports3.boolean().default(true),
        include_pareto_frontier: external_exports3.boolean().default(true),
        include_recommendations: external_exports3.boolean().default(true),
        normalize_metrics: external_exports3.boolean().default(true)
      }).optional()
    });
    var TradeoffScoreSchema = external_exports3.object({
      overall_score: external_exports3.number().min(0).max(1),
      cost_score: external_exports3.number().min(0).max(1),
      latency_score: external_exports3.number().min(0).max(1),
      quality_score: external_exports3.number().min(0).max(1),
      efficiency_ratio: external_exports3.number().nonnegative()
      // quality/cost ratio
    });
    var DiminishingReturnsAnalysisSchema = external_exports3.object({
      detected: external_exports3.boolean(),
      threshold_cost_usd: external_exports3.number().nonnegative().optional(),
      marginal_quality_gain: external_exports3.number().optional(),
      recommendation: external_exports3.string()
    });
    var ParetoPointSchema = external_exports3.object({
      model: external_exports3.string(),
      provider: ProviderSchema3,
      cost: external_exports3.number().nonnegative(),
      latency: external_exports3.number().nonnegative(),
      quality: external_exports3.number().min(0).max(1).optional(),
      is_optimal: external_exports3.boolean()
    });
    var TradeoffResultSchema = external_exports3.object({
      identifier: external_exports3.string(),
      // model name, provider, or tier
      provider: ProviderSchema3,
      model: external_exports3.string(),
      model_tier: ModelTierSchema.optional(),
      // Aggregated metrics
      avg_cost: CostMetricsSchema,
      avg_latency: LatencyMetricsSchema,
      avg_quality: QualityMetricsSchema.optional(),
      // Tradeoff scores
      tradeoff_score: TradeoffScoreSchema,
      // Sample size
      record_count: external_exports3.number().int().positive()
    });
    var TradeoffRecommendationSchema = external_exports3.object({
      recommendation_type: external_exports3.enum([
        "cost_optimization",
        "latency_optimization",
        "quality_optimization",
        "balanced",
        "constraint_violation"
      ]),
      recommended_model: external_exports3.string(),
      recommended_provider: ProviderSchema3,
      rationale: external_exports3.string(),
      estimated_impact: external_exports3.object({
        cost_change_percent: external_exports3.number(),
        latency_change_percent: external_exports3.number(),
        quality_change_percent: external_exports3.number().optional()
      }),
      confidence: external_exports3.number().min(0).max(1)
    });
    var TradeoffAnalysisOutputSchema = external_exports3.object({
      analysis_id: external_exports3.string().uuid(),
      analyzed_at: external_exports3.string().datetime(),
      analysis_scope: external_exports3.string(),
      // Results by identifier (model/provider/tier)
      results: external_exports3.array(TradeoffResultSchema),
      // Pareto frontier (efficient options)
      pareto_frontier: external_exports3.array(ParetoPointSchema).optional(),
      // Diminishing returns analysis
      diminishing_returns: DiminishingReturnsAnalysisSchema.optional(),
      // Recommendations
      recommendations: external_exports3.array(TradeoffRecommendationSchema).optional(),
      // Summary statistics
      summary: external_exports3.object({
        total_records_analyzed: external_exports3.number().int().nonnegative(),
        unique_models: external_exports3.number().int().nonnegative(),
        unique_providers: external_exports3.number().int().nonnegative(),
        best_cost_efficiency: external_exports3.string().optional(),
        best_latency: external_exports3.string().optional(),
        best_quality: external_exports3.string().optional(),
        best_overall: external_exports3.string().optional()
      }),
      // Constraints applied
      constraints_applied: external_exports3.object({
        max_cost_per_request_usd: external_exports3.number().optional(),
        max_latency_p95_ms: external_exports3.number().optional(),
        min_quality_score: external_exports3.number().optional()
      }).optional(),
      // Metadata
      metadata: external_exports3.object({
        weights_used: external_exports3.object({
          cost: external_exports3.number(),
          latency: external_exports3.number(),
          quality: external_exports3.number()
        }),
        analysis_duration_ms: external_exports3.number().nonnegative()
      })
    });
    var DecisionTypeSchema2 = external_exports3.enum([
      "cost_performance_tradeoff",
      "diminishing_returns_detection",
      "pareto_analysis",
      "model_recommendation"
    ]);
    var DecisionEventSchema3 = external_exports3.object({
      agent_id: external_exports3.string(),
      agent_version: external_exports3.string(),
      decision_type: DecisionTypeSchema2,
      inputs_hash: external_exports3.string(),
      outputs: external_exports3.record(external_exports3.unknown()),
      confidence: external_exports3.number().min(0).max(1),
      constraints_applied: external_exports3.object({
        max_cost_per_request_usd: external_exports3.number().optional(),
        max_latency_p95_ms: external_exports3.number().optional(),
        min_quality_score: external_exports3.number().optional()
      }).optional(),
      execution_ref: external_exports3.string().optional(),
      timestamp: external_exports3.string().datetime()
    });
    var TradeoffErrorSchema = external_exports3.object({
      code: external_exports3.enum([
        "INVALID_INPUT",
        "INSUFFICIENT_DATA",
        "CONSTRAINT_VIOLATION",
        "ANALYSIS_FAILED",
        "SERVICE_UNAVAILABLE"
      ]),
      message: external_exports3.string(),
      details: external_exports3.record(external_exports3.unknown()).optional()
    });
    var DEFAULT_WEIGHTS = {
      cost: 0.33,
      latency: 0.33,
      quality: 0.34
    };
    var TradeoffAnalyzer = class {
      /**
       * Analyze tradeoffs between cost, latency, and quality
       */
      analyze(input) {
        const startTime = Date.now();
        const weights = input.weights ?? DEFAULT_WEIGHTS;
        const scope = input.analysis_scope ?? "model";
        const options = {
          includeDiminishingReturns: input.options?.include_diminishing_returns ?? true,
          includeParetoFrontier: input.options?.include_pareto_frontier ?? true,
          includeRecommendations: input.options?.include_recommendations ?? true,
          normalizeMetrics: input.options?.normalize_metrics ?? true
        };
        const aggregated = this.aggregateByScope(input.records, scope);
        const results = this.calculateTradeoffScores(aggregated, weights, options.normalizeMetrics);
        const paretoFrontier = options.includeParetoFrontier ? this.computeParetoFrontier(results) : void 0;
        const diminishingReturns = options.includeDiminishingReturns ? this.detectDiminishingReturns(results) : void 0;
        const internalConstraints = input.constraints ? {
          maxCostPerRequestUsd: input.constraints.max_cost_per_request_usd,
          maxLatencyP95Ms: input.constraints.max_latency_p95_ms,
          minQualityScore: input.constraints.min_quality_score
        } : void 0;
        const recommendations = options.includeRecommendations ? this.generateRecommendations(results, internalConstraints) : void 0;
        const summary = this.buildSummary(input.records, results);
        const analysisId = v4_default();
        const analyzedAt = (/* @__PURE__ */ new Date()).toISOString();
        const durationMs = Date.now() - startTime;
        return {
          analysis_id: analysisId,
          analyzed_at: analyzedAt,
          analysis_scope: scope,
          results,
          pareto_frontier: paretoFrontier,
          diminishing_returns: diminishingReturns,
          recommendations,
          summary,
          constraints_applied: input.constraints ? {
            max_cost_per_request_usd: input.constraints.max_cost_per_request_usd,
            max_latency_p95_ms: input.constraints.max_latency_p95_ms,
            min_quality_score: input.constraints.min_quality_score
          } : void 0,
          metadata: {
            weights_used: weights,
            analysis_duration_ms: durationMs
          }
        };
      }
      /**
       * Aggregate records by the specified scope
       */
      aggregateByScope(records, scope) {
        const groups = /* @__PURE__ */ new Map();
        for (const record of records) {
          let key;
          switch (scope) {
            case "model":
              key = `${record.provider}:${record.model}`;
              break;
            case "provider":
              key = record.provider;
              break;
            case "tier":
              key = record.model_tier ?? "unknown";
              break;
            case "execution":
              key = record.execution_id ?? record.id;
              break;
            default:
              key = `${record.provider}:${record.model}`;
          }
          const existing = groups.get(key) ?? [];
          existing.push(record);
          groups.set(key, existing);
        }
        const aggregated = [];
        for (const [identifier, groupRecords] of groups) {
          const firstRecord = groupRecords[0];
          aggregated.push({
            identifier,
            provider: firstRecord.provider,
            model: firstRecord.model,
            modelTier: firstRecord.model_tier,
            records: groupRecords,
            avgCost: this.averageCostMetrics(groupRecords),
            avgLatency: this.averageLatencyMetrics(groupRecords),
            avgQuality: this.averageQualityMetrics(groupRecords)
          });
        }
        return aggregated;
      }
      /**
       * Calculate average cost metrics
       */
      averageCostMetrics(records) {
        const n = records.length;
        const totalCost = records.reduce(
          (sum2, r) => sum2 + r.cost.total_cost_usd,
          0
        );
        const totalTokens = records.reduce(
          (sum2, r) => sum2 + r.cost.token_count,
          0
        );
        const avgCostPerRequest = records.reduce(
          (sum2, r) => sum2 + r.cost.cost_per_request_usd,
          0
        ) / n;
        const avgCostPer1kTokens = records.reduce(
          (sum2, r) => sum2 + r.cost.cost_per_1k_tokens_usd,
          0
        ) / n;
        return {
          cost_per_request_usd: avgCostPerRequest,
          cost_per_1k_tokens_usd: avgCostPer1kTokens,
          total_cost_usd: totalCost,
          token_count: totalTokens
        };
      }
      /**
       * Calculate average latency metrics
       */
      averageLatencyMetrics(records) {
        const n = records.length;
        const p50Sum = records.reduce((s, r) => s + r.latency.p50_ms, 0);
        const p95Sum = records.reduce((s, r) => s + r.latency.p95_ms, 0);
        const p99Sum = records.reduce((s, r) => s + r.latency.p99_ms, 0);
        const avgSum = records.reduce((s, r) => s + r.latency.avg_ms, 0);
        const minVal = Math.min(...records.map((r) => r.latency.min_ms));
        const maxVal = Math.max(...records.map((r) => r.latency.max_ms));
        return {
          p50_ms: p50Sum / n,
          p95_ms: p95Sum / n,
          p99_ms: p99Sum / n,
          avg_ms: avgSum / n,
          min_ms: minVal,
          max_ms: maxVal
        };
      }
      /**
       * Calculate average quality metrics
       */
      averageQualityMetrics(records) {
        const recordsWithQuality = records.filter((r) => r.quality !== void 0);
        if (recordsWithQuality.length === 0) {
          return void 0;
        }
        const n = recordsWithQuality.length;
        const qualities = recordsWithQuality.map((r) => r.quality);
        const avgComposite = qualities.reduce((s, q) => s + q.composite_score, 0) / n;
        const accuracyRecords = qualities.filter((q) => q.accuracy !== void 0);
        const relevanceRecords = qualities.filter((q) => q.relevance !== void 0);
        const coherenceRecords = qualities.filter((q) => q.coherence !== void 0);
        const helpfulnessRecords = qualities.filter((q) => q.helpfulness !== void 0);
        return {
          accuracy: accuracyRecords.length > 0 ? accuracyRecords.reduce((s, q) => s + q.accuracy, 0) / accuracyRecords.length : void 0,
          relevance: relevanceRecords.length > 0 ? relevanceRecords.reduce((s, q) => s + q.relevance, 0) / relevanceRecords.length : void 0,
          coherence: coherenceRecords.length > 0 ? coherenceRecords.reduce((s, q) => s + q.coherence, 0) / coherenceRecords.length : void 0,
          helpfulness: helpfulnessRecords.length > 0 ? helpfulnessRecords.reduce((s, q) => s + q.helpfulness, 0) / helpfulnessRecords.length : void 0,
          composite_score: avgComposite
        };
      }
      /**
       * Calculate tradeoff scores for aggregated metrics
       */
      calculateTradeoffScores(aggregated, weights, normalize) {
        const allCosts = aggregated.map((a) => a.avgCost.cost_per_request_usd);
        const allLatencies = aggregated.map((a) => a.avgLatency.p95_ms);
        const allQualities = aggregated.filter((a) => a.avgQuality !== void 0).map((a) => a.avgQuality.composite_score);
        const minCost = Math.min(...allCosts);
        const maxCost = Math.max(...allCosts);
        const minLatency = Math.min(...allLatencies);
        const maxLatency = Math.max(...allLatencies);
        const minQuality = allQualities.length > 0 ? Math.min(...allQualities) : 0;
        const maxQuality = allQualities.length > 0 ? Math.max(...allQualities) : 1;
        return aggregated.map((agg) => {
          let normalized;
          if (normalize && maxCost !== minCost && maxLatency !== minLatency) {
            normalized = {
              cost: (agg.avgCost.cost_per_request_usd - minCost) / (maxCost - minCost),
              latency: (agg.avgLatency.p95_ms - minLatency) / (maxLatency - minLatency),
              quality: agg.avgQuality ? maxQuality !== minQuality ? (agg.avgQuality.composite_score - minQuality) / (maxQuality - minQuality) : 0.5 : 0.5
              // Default quality when not available
            };
          } else {
            normalized = {
              cost: Math.min(agg.avgCost.cost_per_request_usd / 0.1, 1),
              // $0.10 = max
              latency: Math.min(agg.avgLatency.p95_ms / 5e3, 1),
              // 5000ms = max
              quality: agg.avgQuality?.composite_score ?? 0.5
            };
          }
          const costScore = 1 - normalized.cost;
          const latencyScore = 1 - normalized.latency;
          const qualityScore = normalized.quality;
          const overallScore = weights.cost * costScore + weights.latency * latencyScore + weights.quality * qualityScore;
          const efficiencyRatio = agg.avgCost.cost_per_request_usd > 0 ? (agg.avgQuality?.composite_score ?? 0.5) / agg.avgCost.cost_per_request_usd : 0;
          const tradeoffScore = {
            overall_score: overallScore,
            cost_score: costScore,
            latency_score: latencyScore,
            quality_score: qualityScore,
            efficiency_ratio: efficiencyRatio
          };
          return {
            identifier: agg.identifier,
            provider: agg.provider,
            model: agg.model,
            model_tier: agg.modelTier,
            avg_cost: agg.avgCost,
            avg_latency: agg.avgLatency,
            avg_quality: agg.avgQuality,
            tradeoff_score: tradeoffScore,
            record_count: agg.records.length
          };
        });
      }
      /**
       * Compute Pareto frontier (set of non-dominated options)
       */
      computeParetoFrontier(results) {
        const points = results.map((r) => ({
          model: r.model,
          provider: r.provider,
          cost: r.avg_cost.cost_per_request_usd,
          latency: r.avg_latency.p95_ms,
          quality: r.avg_quality?.composite_score,
          is_optimal: false
          // Will be set below
        }));
        for (let i = 0; i < points.length; i++) {
          let isDominated = false;
          for (let j = 0; j < points.length; j++) {
            if (i === j)
              continue;
            const jBetterCost = points[j].cost <= points[i].cost;
            const jBetterLatency = points[j].latency <= points[i].latency;
            const jBetterQuality = (points[j].quality ?? 0) >= (points[i].quality ?? 0);
            const jStrictlyBetterCost = points[j].cost < points[i].cost;
            const jStrictlyBetterLatency = points[j].latency < points[i].latency;
            const jStrictlyBetterQuality = (points[j].quality ?? 0) > (points[i].quality ?? 0);
            if (jBetterCost && jBetterLatency && jBetterQuality && (jStrictlyBetterCost || jStrictlyBetterLatency || jStrictlyBetterQuality)) {
              isDominated = true;
              break;
            }
          }
          points[i].is_optimal = !isDominated;
        }
        return points.filter((p) => p.is_optimal);
      }
      /**
       * Detect diminishing returns in cost vs quality relationship
       */
      detectDiminishingReturns(results) {
        const sorted = [...results].filter((r) => r.avg_quality !== void 0).sort((a, b) => a.avg_cost.cost_per_request_usd - b.avg_cost.cost_per_request_usd);
        if (sorted.length < 3) {
          return {
            detected: false,
            recommendation: "Insufficient data points to detect diminishing returns (need at least 3)"
          };
        }
        const marginalGains = [];
        for (let i = 1; i < sorted.length; i++) {
          const costIncrease = sorted[i].avg_cost.cost_per_request_usd - sorted[i - 1].avg_cost.cost_per_request_usd;
          const qualityGain = sorted[i].avg_quality.composite_score - sorted[i - 1].avg_quality.composite_score;
          if (costIncrease > 0) {
            marginalGains.push({
              cost: sorted[i].avg_cost.cost_per_request_usd,
              gain: qualityGain / costIncrease
              // Quality gain per dollar
            });
          }
        }
        let diminishingDetected = false;
        let thresholdCost;
        let lastPositiveMarginalGain;
        for (let i = 1; i < marginalGains.length; i++) {
          const previousGain = marginalGains[i - 1].gain;
          const currentGain = marginalGains[i].gain;
          if (previousGain > 0 && currentGain < previousGain * 0.5) {
            diminishingDetected = true;
            thresholdCost = marginalGains[i].cost;
            lastPositiveMarginalGain = currentGain;
            break;
          }
        }
        if (diminishingDetected) {
          return {
            detected: true,
            threshold_cost_usd: thresholdCost,
            marginal_quality_gain: lastPositiveMarginalGain,
            recommendation: `Diminishing returns detected above $${thresholdCost?.toFixed(4)} per request. Consider models at or below this cost threshold for optimal value.`
          };
        }
        return {
          detected: false,
          recommendation: "No significant diminishing returns detected. Quality scales roughly linearly with cost."
        };
      }
      /**
       * Generate recommendations based on analysis results
       */
      generateRecommendations(results, constraints) {
        const recommendations = [];
        let eligibleResults = results;
        if (constraints) {
          eligibleResults = results.filter((r) => {
            if (constraints.maxCostPerRequestUsd && r.avg_cost.cost_per_request_usd > constraints.maxCostPerRequestUsd) {
              return false;
            }
            if (constraints.maxLatencyP95Ms && r.avg_latency.p95_ms > constraints.maxLatencyP95Ms) {
              return false;
            }
            if (constraints.minQualityScore && r.avg_quality && r.avg_quality.composite_score < constraints.minQualityScore) {
              return false;
            }
            return true;
          });
          if (eligibleResults.length === 0) {
            recommendations.push({
              recommendation_type: "constraint_violation",
              recommended_model: results[0]?.model ?? "unknown",
              recommended_provider: results[0]?.provider ?? "OpenAI",
              rationale: "No models meet all specified constraints. Consider relaxing constraints.",
              estimated_impact: {
                cost_change_percent: 0,
                latency_change_percent: 0,
                quality_change_percent: 0
              },
              confidence: 0.3
            });
            return recommendations;
          }
        }
        const bestCost = this.findBestByMetric(eligibleResults, "cost");
        const bestLatency = this.findBestByMetric(eligibleResults, "latency");
        const bestQuality = this.findBestByMetric(eligibleResults, "quality");
        const bestOverall = this.findBestByMetric(eligibleResults, "overall");
        if (bestCost) {
          recommendations.push(this.createRecommendation(
            "cost_optimization",
            bestCost,
            eligibleResults,
            "Optimizes for lowest cost while maintaining acceptable performance."
          ));
        }
        if (bestLatency) {
          recommendations.push(this.createRecommendation(
            "latency_optimization",
            bestLatency,
            eligibleResults,
            "Optimizes for lowest latency, ideal for real-time applications."
          ));
        }
        if (bestQuality && bestQuality.avg_quality) {
          recommendations.push(this.createRecommendation(
            "quality_optimization",
            bestQuality,
            eligibleResults,
            "Optimizes for highest quality output, suitable for critical applications."
          ));
        }
        if (bestOverall) {
          recommendations.push(this.createRecommendation(
            "balanced",
            bestOverall,
            eligibleResults,
            "Balanced tradeoff between cost, latency, and quality based on specified weights."
          ));
        }
        return recommendations;
      }
      /**
       * Find best result by a specific metric
       */
      findBestByMetric(results, metric) {
        if (results.length === 0)
          return void 0;
        switch (metric) {
          case "cost":
            return results.reduce(
              (best, r) => r.avg_cost.cost_per_request_usd < best.avg_cost.cost_per_request_usd ? r : best
            );
          case "latency":
            return results.reduce(
              (best, r) => r.avg_latency.p95_ms < best.avg_latency.p95_ms ? r : best
            );
          case "quality":
            return results.filter((r) => r.avg_quality !== void 0).reduce(
              (best, r) => (r.avg_quality?.composite_score ?? 0) > (best.avg_quality?.composite_score ?? 0) ? r : best,
              results[0]
            );
          case "overall":
            return results.reduce(
              (best, r) => r.tradeoff_score.overall_score > best.tradeoff_score.overall_score ? r : best
            );
        }
      }
      /**
       * Create a recommendation object
       */
      createRecommendation(type, best, allResults, rationale) {
        const avgCost = allResults.reduce((s, r) => s + r.avg_cost.cost_per_request_usd, 0) / allResults.length;
        const avgLatency = allResults.reduce((s, r) => s + r.avg_latency.p95_ms, 0) / allResults.length;
        const resultsWithQuality = allResults.filter((r) => r.avg_quality !== void 0);
        const avgQuality = resultsWithQuality.length > 0 ? resultsWithQuality.reduce((s, r) => s + r.avg_quality.composite_score, 0) / resultsWithQuality.length : void 0;
        const costChange = avgCost > 0 ? (best.avg_cost.cost_per_request_usd - avgCost) / avgCost * 100 : 0;
        const latencyChange = avgLatency > 0 ? (best.avg_latency.p95_ms - avgLatency) / avgLatency * 100 : 0;
        const qualityChange = avgQuality && best.avg_quality ? (best.avg_quality.composite_score - avgQuality) / avgQuality * 100 : void 0;
        const confidence = Math.min(0.95, 0.5 + best.record_count / 100 * 0.45);
        return {
          recommendation_type: type,
          recommended_model: best.model,
          recommended_provider: best.provider,
          rationale,
          estimated_impact: {
            cost_change_percent: Number(costChange.toFixed(2)),
            latency_change_percent: Number(latencyChange.toFixed(2)),
            quality_change_percent: qualityChange !== void 0 ? Number(qualityChange.toFixed(2)) : void 0
          },
          confidence
        };
      }
      /**
       * Build summary statistics
       */
      buildSummary(records, results) {
        const uniqueModels = new Set(records.map((r) => r.model)).size;
        const uniqueProviders = new Set(records.map((r) => r.provider)).size;
        const bestEfficiency = results.reduce(
          (best, r) => r.tradeoff_score.efficiency_ratio > (best?.tradeoff_score.efficiency_ratio ?? 0) ? r : best,
          results[0]
        );
        const bestLatency = results.reduce(
          (best, r) => r.avg_latency.p95_ms < (best?.avg_latency.p95_ms ?? Infinity) ? r : best,
          results[0]
        );
        const resultsWithQuality = results.filter((r) => r.avg_quality !== void 0);
        const bestQuality = resultsWithQuality.length > 0 ? resultsWithQuality.reduce(
          (best, r) => (r.avg_quality?.composite_score ?? 0) > (best.avg_quality?.composite_score ?? 0) ? r : best
        ) : void 0;
        const bestOverall = results.reduce(
          (best, r) => r.tradeoff_score.overall_score > best.tradeoff_score.overall_score ? r : best,
          results[0]
        );
        return {
          total_records_analyzed: records.length,
          unique_models: uniqueModels,
          unique_providers: uniqueProviders,
          best_cost_efficiency: bestEfficiency?.identifier,
          best_latency: bestLatency?.identifier,
          best_quality: bestQuality?.identifier,
          best_overall: bestOverall?.identifier
        };
      }
    };
    var import_crypto5 = require("crypto");
    var DEFAULT_CONFIG = {
      baseUrl: process.env.RUVECTOR_SERVICE_URL ?? "http://localhost:8080",
      apiKey: process.env.RUVECTOR_API_KEY,
      timeout: 5e3,
      maxRetries: 3
    };
    var RuvectorServiceClient2 = class {
      config;
      constructor(config2 = {}) {
        this.config = { ...DEFAULT_CONFIG, ...config2 };
      }
      /**
       * Persist a DecisionEvent to ruvector-service
       */
      async persistDecisionEvent(event) {
        const endpoint = `${this.config.baseUrl}/api/v1/decision-events`;
        let lastError;
        for (let attempt = 0; attempt < this.config.maxRetries; attempt++) {
          try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), this.config.timeout);
            const response = await fetch(endpoint, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                ...this.config.apiKey && { "Authorization": `Bearer ${this.config.apiKey}` }
              },
              body: JSON.stringify(event),
              signal: controller.signal
            });
            clearTimeout(timeoutId);
            if (!response.ok) {
              throw new Error(`HTTP ${response.status}: ${await response.text()}`);
            }
            return;
          } catch (error) {
            lastError = error;
            if (error instanceof DOMException && error.name === "AbortError") {
              throw new Error(`Request timeout after ${this.config.timeout}ms`);
            }
            if (attempt < this.config.maxRetries - 1) {
              const delay = Math.pow(2, attempt) * 100;
              await this.sleep(delay);
            }
          }
        }
        throw new Error(`Failed to persist DecisionEvent after ${this.config.maxRetries} attempts: ${lastError?.message}`);
      }
      /**
       * Query decision events with filters
       */
      async queryDecisionEvents(filters) {
        const params = new URLSearchParams();
        if (filters.agentId)
          params.set("agent_id", filters.agentId);
        if (filters.decisionType)
          params.set("decision_type", filters.decisionType);
        if (filters.startTime)
          params.set("start_time", filters.startTime);
        if (filters.endTime)
          params.set("end_time", filters.endTime);
        if (filters.limit)
          params.set("limit", filters.limit.toString());
        const endpoint = `${this.config.baseUrl}/api/v1/decision-events?${params}`;
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.config.timeout);
        try {
          const response = await fetch(endpoint, {
            method: "GET",
            headers: {
              ...this.config.apiKey && { "Authorization": `Bearer ${this.config.apiKey}` }
            },
            signal: controller.signal
          });
          clearTimeout(timeoutId);
          if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${await response.text()}`);
          }
          const data = await response.json();
          return data.events;
        } catch (error) {
          if (error instanceof DOMException && error.name === "AbortError") {
            throw new Error(`Request timeout after ${this.config.timeout}ms`);
          }
          throw error;
        }
      }
      /**
       * Health check for ruvector-service
       */
      async healthCheck() {
        const startTime = Date.now();
        const endpoint = `${this.config.baseUrl}/health`;
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 2e3);
          const response = await fetch(endpoint, {
            method: "GET",
            signal: controller.signal
          });
          clearTimeout(timeoutId);
          return {
            healthy: response.ok,
            latencyMs: Date.now() - startTime
          };
        } catch {
          return {
            healthy: false,
            latencyMs: Date.now() - startTime
          };
        }
      }
      sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }
    };
    var AGENT_ID2 = "cost-performance-tradeoff-agent";
    var AGENT_VERSION = "1.0.0";
    var DecisionEventEmitter = class {
      ruvectorClient;
      constructor(ruvectorClient) {
        this.ruvectorClient = ruvectorClient ?? new RuvectorServiceClient2();
      }
      /**
       * Create a DecisionEvent from analysis results
       */
      createEvent(options) {
        const inputsHash = this.hashInputs(options.input);
        const confidence = this.calculateConfidence(options.input, options.output);
        return {
          agent_id: AGENT_ID2,
          agent_version: AGENT_VERSION,
          decision_type: options.decisionType,
          inputs_hash: inputsHash,
          outputs: {
            analysis_id: options.output.analysis_id,
            analysis_scope: options.output.analysis_scope,
            total_records: options.output.summary.total_records_analyzed,
            unique_models: options.output.summary.unique_models,
            best_overall: options.output.summary.best_overall,
            recommendations_count: options.output.recommendations?.length ?? 0,
            pareto_optimal_count: options.output.pareto_frontier?.length ?? 0,
            diminishing_returns_detected: options.output.diminishing_returns?.detected ?? false
          },
          confidence,
          constraints_applied: options.output.constraints_applied,
          execution_ref: options.executionRef ?? v4_default(),
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
      /**
       * Emit a DecisionEvent to ruvector-service
       * Also outputs to stderr for local debugging
       */
      async emit(event) {
        process.stderr.write(JSON.stringify({
          type: "decision_event",
          event
        }) + "\n");
        try {
          await this.ruvectorClient.persistDecisionEvent(event);
        } catch (error) {
          process.stderr.write(JSON.stringify({
            type: "decision_event_error",
            error: error instanceof Error ? error.message : String(error)
          }) + "\n");
        }
      }
      /**
       * Create and emit a DecisionEvent in one call
       */
      async createAndEmit(options) {
        const event = this.createEvent(options);
        await this.emit(event);
        return event;
      }
      /**
       * Hash inputs for deterministic identification
       */
      hashInputs(input) {
        const inputString = JSON.stringify({
          record_ids: input.records.map((r) => r.id).sort(),
          analysis_scope: input.analysis_scope,
          weights: input.weights,
          constraints: input.constraints,
          options: input.options
        });
        return (0, import_crypto5.createHash)("sha256").update(inputString).digest("hex").substring(0, 16);
      }
      /**
       * Calculate confidence score based on data quality and analysis
       */
      calculateConfidence(input, output) {
        let confidence = 0.5;
        const recordCount = input.records.length;
        confidence += Math.min(recordCount / 100, 1) * 0.25;
        const recordsWithQuality = input.records.filter((r) => r.quality !== void 0).length;
        if (recordsWithQuality / recordCount > 0.5) {
          confidence += 0.1;
        }
        if (output.summary.unique_models > 2) {
          confidence += 0.05;
        }
        if (output.summary.unique_providers > 1) {
          confidence += 0.05;
        }
        if (output.pareto_frontier && output.pareto_frontier.length > 0) {
          confidence += 0.05;
        }
        return Math.min(confidence, 0.95);
      }
    };
    var decisionEventEmitter = new DecisionEventEmitter();
    var DEFAULT_CONFIG2 = {
      endpoint: process.env.TELEMETRY_ENDPOINT ?? "http://localhost:8081/api/v1/telemetry",
      batchSize: 10,
      flushIntervalMs: 5e3
    };
    var TelemetryEmitter2 = class {
      config;
      buffer = [];
      flushTimer = null;
      constructor(config2 = {}) {
        this.config = { ...DEFAULT_CONFIG2, ...config2 };
        this.startFlushTimer();
      }
      /**
       * Emit a telemetry event
       */
      async emit(event) {
        this.buffer.push(event);
        if (this.buffer.length >= this.config.batchSize) {
          await this.flush();
        }
      }
      /**
       * Emit a span event for distributed tracing
       */
      async emitSpan(name, agentId, durationMs, traceId, parentSpanId) {
        const event = {
          event_type: "span",
          agent_id: agentId,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          data: {
            name,
            duration_ms: durationMs,
            status: "ok"
          },
          trace_id: traceId ?? v4_default(),
          span_id: v4_default()
        };
        if (parentSpanId) {
          event.data.parent_span_id = parentSpanId;
        }
        await this.emit(event);
      }
      /**
       * Emit a tradeoff analysis event
       */
      async emitTradeoffAnalysis(agentId, analysisId, recordsAnalyzed, durationMs, traceId) {
        const event = {
          event_type: "tradeoff_analysis",
          agent_id: agentId,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          data: {
            analysis_id: analysisId,
            records_analyzed: recordsAnalyzed,
            duration_ms: durationMs
          },
          trace_id: traceId ?? v4_default(),
          span_id: v4_default()
        };
        await this.emit(event);
      }
      /**
       * Emit an error event
       */
      async emitError(agentId, error, context, traceId) {
        const event = {
          event_type: "error",
          agent_id: agentId,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          data: {
            error_name: error.name,
            error_message: error.message,
            error_stack: error.stack,
            context
          },
          trace_id: traceId ?? v4_default(),
          span_id: v4_default()
        };
        await this.emit(event);
      }
      /**
       * Flush buffered events to the telemetry endpoint
       */
      async flush() {
        if (this.buffer.length === 0) {
          return;
        }
        const events = [...this.buffer];
        this.buffer = [];
        try {
          const response = await fetch(this.config.endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ events })
          });
          if (!response.ok) {
            console.error(`Telemetry flush failed: HTTP ${response.status}`);
          }
        } catch (error) {
          console.error("Telemetry flush error:", error);
        }
      }
      /**
       * Stop the auto-flush timer
       */
      stop() {
        if (this.flushTimer) {
          clearInterval(this.flushTimer);
          this.flushTimer = null;
        }
      }
      startFlushTimer() {
        this.flushTimer = setInterval(() => {
          this.flush().catch(console.error);
        }, this.config.flushIntervalMs);
      }
    };
    var AGENT_ID3 = "cost-performance-tradeoff-agent";
    var AGENT_VERSION2 = "1.0.0";
    async function handler2(req, res) {
      const startTime = Date.now();
      const traceId = req.headers["x-trace-id"] ?? v4_default();
      res.set("Access-Control-Allow-Origin", "*");
      res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
      res.set("Access-Control-Allow-Headers", "Content-Type, X-Trace-ID");
      if (req.method === "OPTIONS") {
        res.status(204).json({});
        return;
      }
      if (req.method !== "POST") {
        const error = {
          success: false,
          error: {
            code: "INVALID_INPUT",
            message: "Only POST method is allowed"
          },
          metadata: {
            agent_id: AGENT_ID3,
            agent_version: AGENT_VERSION2,
            trace_id: traceId
          }
        };
        res.status(405).json(error);
        return;
      }
      const telemetry = new TelemetryEmitter2();
      const decisionEmitter = new DecisionEventEmitter();
      try {
        const parseResult = TradeoffAnalysisInputSchema.safeParse(req.body);
        if (!parseResult.success) {
          const error = {
            success: false,
            error: {
              code: "INVALID_INPUT",
              message: "Invalid input schema",
              details: {
                errors: parseResult.error.errors
              }
            },
            metadata: {
              agent_id: AGENT_ID3,
              agent_version: AGENT_VERSION2,
              trace_id: traceId
            }
          };
          await telemetry.emitError(
            AGENT_ID3,
            new Error("Input validation failed"),
            { errors: parseResult.error.errors },
            traceId
          );
          res.status(400).json(error);
          return;
        }
        const input = parseResult.data;
        if (input.records.length === 0) {
          const error = {
            success: false,
            error: {
              code: "INSUFFICIENT_DATA",
              message: "At least one performance record is required"
            },
            metadata: {
              agent_id: AGENT_ID3,
              agent_version: AGENT_VERSION2,
              trace_id: traceId
            }
          };
          res.status(400).json(error);
          return;
        }
        const analyzer = new TradeoffAnalyzer();
        const output = analyzer.analyze(input);
        const executionTimeMs = Date.now() - startTime;
        await telemetry.emitTradeoffAnalysis(
          AGENT_ID3,
          output.analysis_id,
          output.summary.total_records_analyzed,
          executionTimeMs,
          traceId
        );
        await decisionEmitter.createAndEmit({
          decisionType: "cost_performance_tradeoff",
          input,
          output,
          executionRef: traceId
        });
        const response = {
          success: true,
          data: output,
          metadata: {
            agent_id: AGENT_ID3,
            agent_version: AGENT_VERSION2,
            execution_time_ms: executionTimeMs,
            trace_id: traceId
          }
        };
        await telemetry.flush();
        telemetry.stop();
        res.status(200).json(response);
      } catch (error) {
        const executionTimeMs = Date.now() - startTime;
        await telemetry.emitError(
          AGENT_ID3,
          error,
          { execution_time_ms: executionTimeMs },
          traceId
        );
        await telemetry.flush();
        telemetry.stop();
        const errorResponse = {
          success: false,
          error: {
            code: "ANALYSIS_FAILED",
            message: error instanceof Error ? error.message : String(error)
          },
          metadata: {
            agent_id: AGENT_ID3,
            agent_version: AGENT_VERSION2,
            trace_id: traceId
          }
        };
        res.status(500).json(errorResponse);
      }
    }
    var external_exports4 = {};
    __export(external_exports4, {
      BRAND: () => BRAND4,
      DIRTY: () => DIRTY4,
      EMPTY_PATH: () => EMPTY_PATH4,
      INVALID: () => INVALID4,
      NEVER: () => NEVER4,
      OK: () => OK4,
      ParseStatus: () => ParseStatus4,
      Schema: () => ZodType4,
      ZodAny: () => ZodAny4,
      ZodArray: () => ZodArray4,
      ZodBigInt: () => ZodBigInt4,
      ZodBoolean: () => ZodBoolean4,
      ZodBranded: () => ZodBranded4,
      ZodCatch: () => ZodCatch4,
      ZodDate: () => ZodDate4,
      ZodDefault: () => ZodDefault4,
      ZodDiscriminatedUnion: () => ZodDiscriminatedUnion4,
      ZodEffects: () => ZodEffects4,
      ZodEnum: () => ZodEnum4,
      ZodError: () => ZodError4,
      ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind4,
      ZodFunction: () => ZodFunction4,
      ZodIntersection: () => ZodIntersection4,
      ZodIssueCode: () => ZodIssueCode4,
      ZodLazy: () => ZodLazy4,
      ZodLiteral: () => ZodLiteral4,
      ZodMap: () => ZodMap4,
      ZodNaN: () => ZodNaN4,
      ZodNativeEnum: () => ZodNativeEnum4,
      ZodNever: () => ZodNever4,
      ZodNull: () => ZodNull4,
      ZodNullable: () => ZodNullable4,
      ZodNumber: () => ZodNumber4,
      ZodObject: () => ZodObject4,
      ZodOptional: () => ZodOptional4,
      ZodParsedType: () => ZodParsedType4,
      ZodPipeline: () => ZodPipeline4,
      ZodPromise: () => ZodPromise4,
      ZodReadonly: () => ZodReadonly4,
      ZodRecord: () => ZodRecord4,
      ZodSchema: () => ZodType4,
      ZodSet: () => ZodSet4,
      ZodString: () => ZodString4,
      ZodSymbol: () => ZodSymbol4,
      ZodTransformer: () => ZodEffects4,
      ZodTuple: () => ZodTuple4,
      ZodType: () => ZodType4,
      ZodUndefined: () => ZodUndefined4,
      ZodUnion: () => ZodUnion4,
      ZodUnknown: () => ZodUnknown4,
      ZodVoid: () => ZodVoid4,
      addIssueToContext: () => addIssueToContext4,
      any: () => anyType4,
      array: () => arrayType4,
      bigint: () => bigIntType4,
      boolean: () => booleanType4,
      coerce: () => coerce4,
      custom: () => custom4,
      date: () => dateType4,
      datetimeRegex: () => datetimeRegex4,
      defaultErrorMap: () => en_default4,
      discriminatedUnion: () => discriminatedUnionType4,
      effect: () => effectsType4,
      enum: () => enumType4,
      function: () => functionType4,
      getErrorMap: () => getErrorMap4,
      getParsedType: () => getParsedType4,
      instanceof: () => instanceOfType4,
      intersection: () => intersectionType4,
      isAborted: () => isAborted4,
      isAsync: () => isAsync4,
      isDirty: () => isDirty4,
      isValid: () => isValid4,
      late: () => late4,
      lazy: () => lazyType4,
      literal: () => literalType4,
      makeIssue: () => makeIssue4,
      map: () => mapType4,
      nan: () => nanType4,
      nativeEnum: () => nativeEnumType4,
      never: () => neverType4,
      null: () => nullType4,
      nullable: () => nullableType4,
      number: () => numberType4,
      object: () => objectType4,
      objectUtil: () => objectUtil4,
      oboolean: () => oboolean4,
      onumber: () => onumber4,
      optional: () => optionalType4,
      ostring: () => ostring4,
      pipeline: () => pipelineType4,
      preprocess: () => preprocessType4,
      promise: () => promiseType4,
      quotelessJson: () => quotelessJson4,
      record: () => recordType4,
      set: () => setType4,
      setErrorMap: () => setErrorMap4,
      strictObject: () => strictObjectType4,
      string: () => stringType4,
      symbol: () => symbolType4,
      transformer: () => effectsType4,
      tuple: () => tupleType4,
      undefined: () => undefinedType4,
      union: () => unionType4,
      unknown: () => unknownType4,
      util: () => util4,
      void: () => voidType4
    });
    var util4;
    (function(util5) {
      util5.assertEqual = (_) => {
      };
      function assertIs(_arg) {
      }
      util5.assertIs = assertIs;
      function assertNever(_x) {
        throw new Error();
      }
      util5.assertNever = assertNever;
      util5.arrayToEnum = (items) => {
        const obj = {};
        for (const item of items) {
          obj[item] = item;
        }
        return obj;
      };
      util5.getValidEnumValues = (obj) => {
        const validKeys = util5.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys) {
          filtered[k] = obj[k];
        }
        return util5.objectValues(filtered);
      };
      util5.objectValues = (obj) => {
        return util5.objectKeys(obj).map(function(e) {
          return obj[e];
        });
      };
      util5.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
        const keys = [];
        for (const key in object) {
          if (Object.prototype.hasOwnProperty.call(object, key)) {
            keys.push(key);
          }
        }
        return keys;
      };
      util5.find = (arr, checker) => {
        for (const item of arr) {
          if (checker(item))
            return item;
        }
        return void 0;
      };
      util5.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
      function joinValues(array, separator = " | ") {
        return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
      }
      util5.joinValues = joinValues;
      util5.jsonStringifyReplacer = (_, value) => {
        if (typeof value === "bigint") {
          return value.toString();
        }
        return value;
      };
    })(util4 || (util4 = {}));
    var objectUtil4;
    (function(objectUtil5) {
      objectUtil5.mergeShapes = (first, second) => {
        return {
          ...first,
          ...second
          // second overwrites first
        };
      };
    })(objectUtil4 || (objectUtil4 = {}));
    var ZodParsedType4 = util4.arrayToEnum([
      "string",
      "nan",
      "number",
      "integer",
      "float",
      "boolean",
      "date",
      "bigint",
      "symbol",
      "function",
      "undefined",
      "null",
      "array",
      "object",
      "unknown",
      "promise",
      "void",
      "never",
      "map",
      "set"
    ]);
    var getParsedType4 = (data) => {
      const t = typeof data;
      switch (t) {
        case "undefined":
          return ZodParsedType4.undefined;
        case "string":
          return ZodParsedType4.string;
        case "number":
          return Number.isNaN(data) ? ZodParsedType4.nan : ZodParsedType4.number;
        case "boolean":
          return ZodParsedType4.boolean;
        case "function":
          return ZodParsedType4.function;
        case "bigint":
          return ZodParsedType4.bigint;
        case "symbol":
          return ZodParsedType4.symbol;
        case "object":
          if (Array.isArray(data)) {
            return ZodParsedType4.array;
          }
          if (data === null) {
            return ZodParsedType4.null;
          }
          if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
            return ZodParsedType4.promise;
          }
          if (typeof Map !== "undefined" && data instanceof Map) {
            return ZodParsedType4.map;
          }
          if (typeof Set !== "undefined" && data instanceof Set) {
            return ZodParsedType4.set;
          }
          if (typeof Date !== "undefined" && data instanceof Date) {
            return ZodParsedType4.date;
          }
          return ZodParsedType4.object;
        default:
          return ZodParsedType4.unknown;
      }
    };
    var ZodIssueCode4 = util4.arrayToEnum([
      "invalid_type",
      "invalid_literal",
      "custom",
      "invalid_union",
      "invalid_union_discriminator",
      "invalid_enum_value",
      "unrecognized_keys",
      "invalid_arguments",
      "invalid_return_type",
      "invalid_date",
      "invalid_string",
      "too_small",
      "too_big",
      "invalid_intersection_types",
      "not_multiple_of",
      "not_finite"
    ]);
    var quotelessJson4 = (obj) => {
      const json = JSON.stringify(obj, null, 2);
      return json.replace(/"([^"]+)":/g, "$1:");
    };
    var ZodError4 = class _ZodError extends Error {
      get errors() {
        return this.issues;
      }
      constructor(issues) {
        super();
        this.issues = [];
        this.addIssue = (sub2) => {
          this.issues = [...this.issues, sub2];
        };
        this.addIssues = (subs = []) => {
          this.issues = [...this.issues, ...subs];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(this, actualProto);
        } else {
          this.__proto__ = actualProto;
        }
        this.name = "ZodError";
        this.issues = issues;
      }
      format(_mapper) {
        const mapper = _mapper || function(issue) {
          return issue.message;
        };
        const fieldErrors = { _errors: [] };
        const processError = (error) => {
          for (const issue of error.issues) {
            if (issue.code === "invalid_union") {
              issue.unionErrors.map(processError);
            } else if (issue.code === "invalid_return_type") {
              processError(issue.returnTypeError);
            } else if (issue.code === "invalid_arguments") {
              processError(issue.argumentsError);
            } else if (issue.path.length === 0) {
              fieldErrors._errors.push(mapper(issue));
            } else {
              let curr = fieldErrors;
              let i = 0;
              while (i < issue.path.length) {
                const el = issue.path[i];
                const terminal = i === issue.path.length - 1;
                if (!terminal) {
                  curr[el] = curr[el] || { _errors: [] };
                } else {
                  curr[el] = curr[el] || { _errors: [] };
                  curr[el]._errors.push(mapper(issue));
                }
                curr = curr[el];
                i++;
              }
            }
          }
        };
        processError(this);
        return fieldErrors;
      }
      static assert(value) {
        if (!(value instanceof _ZodError)) {
          throw new Error(`Not a ZodError: ${value}`);
        }
      }
      toString() {
        return this.message;
      }
      get message() {
        return JSON.stringify(this.issues, util4.jsonStringifyReplacer, 2);
      }
      get isEmpty() {
        return this.issues.length === 0;
      }
      flatten(mapper = (issue) => issue.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub2 of this.issues) {
          if (sub2.path.length > 0) {
            const firstEl = sub2.path[0];
            fieldErrors[firstEl] = fieldErrors[firstEl] || [];
            fieldErrors[firstEl].push(mapper(sub2));
          } else {
            formErrors.push(mapper(sub2));
          }
        }
        return { formErrors, fieldErrors };
      }
      get formErrors() {
        return this.flatten();
      }
    };
    ZodError4.create = (issues) => {
      const error = new ZodError4(issues);
      return error;
    };
    var errorMap4 = (issue, _ctx) => {
      let message;
      switch (issue.code) {
        case ZodIssueCode4.invalid_type:
          if (issue.received === ZodParsedType4.undefined) {
            message = "Required";
          } else {
            message = `Expected ${issue.expected}, received ${issue.received}`;
          }
          break;
        case ZodIssueCode4.invalid_literal:
          message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util4.jsonStringifyReplacer)}`;
          break;
        case ZodIssueCode4.unrecognized_keys:
          message = `Unrecognized key(s) in object: ${util4.joinValues(issue.keys, ", ")}`;
          break;
        case ZodIssueCode4.invalid_union:
          message = `Invalid input`;
          break;
        case ZodIssueCode4.invalid_union_discriminator:
          message = `Invalid discriminator value. Expected ${util4.joinValues(issue.options)}`;
          break;
        case ZodIssueCode4.invalid_enum_value:
          message = `Invalid enum value. Expected ${util4.joinValues(issue.options)}, received '${issue.received}'`;
          break;
        case ZodIssueCode4.invalid_arguments:
          message = `Invalid function arguments`;
          break;
        case ZodIssueCode4.invalid_return_type:
          message = `Invalid function return type`;
          break;
        case ZodIssueCode4.invalid_date:
          message = `Invalid date`;
          break;
        case ZodIssueCode4.invalid_string:
          if (typeof issue.validation === "object") {
            if ("includes" in issue.validation) {
              message = `Invalid input: must include "${issue.validation.includes}"`;
              if (typeof issue.validation.position === "number") {
                message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
              }
            } else if ("startsWith" in issue.validation) {
              message = `Invalid input: must start with "${issue.validation.startsWith}"`;
            } else if ("endsWith" in issue.validation) {
              message = `Invalid input: must end with "${issue.validation.endsWith}"`;
            } else {
              util4.assertNever(issue.validation);
            }
          } else if (issue.validation !== "regex") {
            message = `Invalid ${issue.validation}`;
          } else {
            message = "Invalid";
          }
          break;
        case ZodIssueCode4.too_small:
          if (issue.type === "array")
            message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
          else if (issue.type === "string")
            message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
          else if (issue.type === "number")
            message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
          else if (issue.type === "bigint")
            message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
          else if (issue.type === "date")
            message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
          else
            message = "Invalid input";
          break;
        case ZodIssueCode4.too_big:
          if (issue.type === "array")
            message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
          else if (issue.type === "string")
            message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
          else if (issue.type === "number")
            message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
          else if (issue.type === "bigint")
            message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
          else if (issue.type === "date")
            message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
          else
            message = "Invalid input";
          break;
        case ZodIssueCode4.custom:
          message = `Invalid input`;
          break;
        case ZodIssueCode4.invalid_intersection_types:
          message = `Intersection results could not be merged`;
          break;
        case ZodIssueCode4.not_multiple_of:
          message = `Number must be a multiple of ${issue.multipleOf}`;
          break;
        case ZodIssueCode4.not_finite:
          message = "Number must be finite";
          break;
        default:
          message = _ctx.defaultError;
          util4.assertNever(issue);
      }
      return { message };
    };
    var en_default4 = errorMap4;
    var overrideErrorMap4 = en_default4;
    function setErrorMap4(map) {
      overrideErrorMap4 = map;
    }
    function getErrorMap4() {
      return overrideErrorMap4;
    }
    var makeIssue4 = (params) => {
      const { data, path, errorMaps, issueData } = params;
      const fullPath = [...path, ...issueData.path || []];
      const fullIssue = {
        ...issueData,
        path: fullPath
      };
      if (issueData.message !== void 0) {
        return {
          ...issueData,
          path: fullPath,
          message: issueData.message
        };
      }
      let errorMessage = "";
      const maps = errorMaps.filter((m) => !!m).slice().reverse();
      for (const map of maps) {
        errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
      }
      return {
        ...issueData,
        path: fullPath,
        message: errorMessage
      };
    };
    var EMPTY_PATH4 = [];
    function addIssueToContext4(ctx, issueData) {
      const overrideMap = getErrorMap4();
      const issue = makeIssue4({
        issueData,
        data: ctx.data,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          // contextual error map is first priority
          ctx.schemaErrorMap,
          // then schema-bound map if available
          overrideMap,
          // then global override map
          overrideMap === en_default4 ? void 0 : en_default4
          // then global default map
        ].filter((x) => !!x)
      });
      ctx.common.issues.push(issue);
    }
    var ParseStatus4 = class _ParseStatus {
      constructor() {
        this.value = "valid";
      }
      dirty() {
        if (this.value === "valid")
          this.value = "dirty";
      }
      abort() {
        if (this.value !== "aborted")
          this.value = "aborted";
      }
      static mergeArray(status, results) {
        const arrayValue = [];
        for (const s of results) {
          if (s.status === "aborted")
            return INVALID4;
          if (s.status === "dirty")
            status.dirty();
          arrayValue.push(s.value);
        }
        return { status: status.value, value: arrayValue };
      }
      static async mergeObjectAsync(status, pairs) {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value
          });
        }
        return _ParseStatus.mergeObjectSync(status, syncPairs);
      }
      static mergeObjectSync(status, pairs) {
        const finalObject = {};
        for (const pair of pairs) {
          const { key, value } = pair;
          if (key.status === "aborted")
            return INVALID4;
          if (value.status === "aborted")
            return INVALID4;
          if (key.status === "dirty")
            status.dirty();
          if (value.status === "dirty")
            status.dirty();
          if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
            finalObject[key.value] = value.value;
          }
        }
        return { status: status.value, value: finalObject };
      }
    };
    var INVALID4 = Object.freeze({
      status: "aborted"
    });
    var DIRTY4 = (value) => ({ status: "dirty", value });
    var OK4 = (value) => ({ status: "valid", value });
    var isAborted4 = (x) => x.status === "aborted";
    var isDirty4 = (x) => x.status === "dirty";
    var isValid4 = (x) => x.status === "valid";
    var isAsync4 = (x) => typeof Promise !== "undefined" && x instanceof Promise;
    var errorUtil4;
    (function(errorUtil5) {
      errorUtil5.errToObj = (message) => typeof message === "string" ? { message } : message || {};
      errorUtil5.toString = (message) => typeof message === "string" ? message : message?.message;
    })(errorUtil4 || (errorUtil4 = {}));
    var ParseInputLazyPath4 = class {
      constructor(parent, value, path, key) {
        this._cachedPath = [];
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key;
      }
      get path() {
        if (!this._cachedPath.length) {
          if (Array.isArray(this._key)) {
            this._cachedPath.push(...this._path, ...this._key);
          } else {
            this._cachedPath.push(...this._path, this._key);
          }
        }
        return this._cachedPath;
      }
    };
    var handleResult4 = (ctx, result) => {
      if (isValid4(result)) {
        return { success: true, data: result.value };
      } else {
        if (!ctx.common.issues.length) {
          throw new Error("Validation failed but no issues detected.");
        }
        return {
          success: false,
          get error() {
            if (this._error)
              return this._error;
            const error = new ZodError4(ctx.common.issues);
            this._error = error;
            return this._error;
          }
        };
      }
    };
    function processCreateParams4(params) {
      if (!params)
        return {};
      const { errorMap: errorMap5, invalid_type_error, required_error, description } = params;
      if (errorMap5 && (invalid_type_error || required_error)) {
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
      }
      if (errorMap5)
        return { errorMap: errorMap5, description };
      const customMap = (iss, ctx) => {
        const { message } = params;
        if (iss.code === "invalid_enum_value") {
          return { message: message ?? ctx.defaultError };
        }
        if (typeof ctx.data === "undefined") {
          return { message: message ?? required_error ?? ctx.defaultError };
        }
        if (iss.code !== "invalid_type")
          return { message: ctx.defaultError };
        return { message: message ?? invalid_type_error ?? ctx.defaultError };
      };
      return { errorMap: customMap, description };
    }
    var ZodType4 = class {
      get description() {
        return this._def.description;
      }
      _getType(input) {
        return getParsedType4(input.data);
      }
      _getOrReturnCtx(input, ctx) {
        return ctx || {
          common: input.parent.common,
          data: input.data,
          parsedType: getParsedType4(input.data),
          schemaErrorMap: this._def.errorMap,
          path: input.path,
          parent: input.parent
        };
      }
      _processInputParams(input) {
        return {
          status: new ParseStatus4(),
          ctx: {
            common: input.parent.common,
            data: input.data,
            parsedType: getParsedType4(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent
          }
        };
      }
      _parseSync(input) {
        const result = this._parse(input);
        if (isAsync4(result)) {
          throw new Error("Synchronous parse encountered promise.");
        }
        return result;
      }
      _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
      }
      parse(data, params) {
        const result = this.safeParse(data, params);
        if (result.success)
          return result.data;
        throw result.error;
      }
      safeParse(data, params) {
        const ctx = {
          common: {
            issues: [],
            async: params?.async ?? false,
            contextualErrorMap: params?.errorMap
          },
          path: params?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: getParsedType4(data)
        };
        const result = this._parseSync({ data, path: ctx.path, parent: ctx });
        return handleResult4(ctx, result);
      }
      "~validate"(data) {
        const ctx = {
          common: {
            issues: [],
            async: !!this["~standard"].async
          },
          path: [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: getParsedType4(data)
        };
        if (!this["~standard"].async) {
          try {
            const result = this._parseSync({ data, path: [], parent: ctx });
            return isValid4(result) ? {
              value: result.value
            } : {
              issues: ctx.common.issues
            };
          } catch (err) {
            if (err?.message?.toLowerCase()?.includes("encountered")) {
              this["~standard"].async = true;
            }
            ctx.common = {
              issues: [],
              async: true
            };
          }
        }
        return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid4(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        });
      }
      async parseAsync(data, params) {
        const result = await this.safeParseAsync(data, params);
        if (result.success)
          return result.data;
        throw result.error;
      }
      async safeParseAsync(data, params) {
        const ctx = {
          common: {
            issues: [],
            contextualErrorMap: params?.errorMap,
            async: true
          },
          path: params?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: getParsedType4(data)
        };
        const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
        const result = await (isAsync4(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
        return handleResult4(ctx, result);
      }
      refine(check, message) {
        const getIssueProperties = (val) => {
          if (typeof message === "string" || typeof message === "undefined") {
            return { message };
          } else if (typeof message === "function") {
            return message(val);
          } else {
            return message;
          }
        };
        return this._refinement((val, ctx) => {
          const result = check(val);
          const setError = () => ctx.addIssue({
            code: ZodIssueCode4.custom,
            ...getIssueProperties(val)
          });
          if (typeof Promise !== "undefined" && result instanceof Promise) {
            return result.then((data) => {
              if (!data) {
                setError();
                return false;
              } else {
                return true;
              }
            });
          }
          if (!result) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      refinement(check, refinementData) {
        return this._refinement((val, ctx) => {
          if (!check(val)) {
            ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
            return false;
          } else {
            return true;
          }
        });
      }
      _refinement(refinement) {
        return new ZodEffects4({
          schema: this,
          typeName: ZodFirstPartyTypeKind4.ZodEffects,
          effect: { type: "refinement", refinement }
        });
      }
      superRefine(refinement) {
        return this._refinement(refinement);
      }
      constructor(def) {
        this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.readonly = this.readonly.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
        this["~standard"] = {
          version: 1,
          vendor: "zod",
          validate: (data) => this["~validate"](data)
        };
      }
      optional() {
        return ZodOptional4.create(this, this._def);
      }
      nullable() {
        return ZodNullable4.create(this, this._def);
      }
      nullish() {
        return this.nullable().optional();
      }
      array() {
        return ZodArray4.create(this);
      }
      promise() {
        return ZodPromise4.create(this, this._def);
      }
      or(option) {
        return ZodUnion4.create([this, option], this._def);
      }
      and(incoming) {
        return ZodIntersection4.create(this, incoming, this._def);
      }
      transform(transform) {
        return new ZodEffects4({
          ...processCreateParams4(this._def),
          schema: this,
          typeName: ZodFirstPartyTypeKind4.ZodEffects,
          effect: { type: "transform", transform }
        });
      }
      default(def) {
        const defaultValueFunc = typeof def === "function" ? def : () => def;
        return new ZodDefault4({
          ...processCreateParams4(this._def),
          innerType: this,
          defaultValue: defaultValueFunc,
          typeName: ZodFirstPartyTypeKind4.ZodDefault
        });
      }
      brand() {
        return new ZodBranded4({
          typeName: ZodFirstPartyTypeKind4.ZodBranded,
          type: this,
          ...processCreateParams4(this._def)
        });
      }
      catch(def) {
        const catchValueFunc = typeof def === "function" ? def : () => def;
        return new ZodCatch4({
          ...processCreateParams4(this._def),
          innerType: this,
          catchValue: catchValueFunc,
          typeName: ZodFirstPartyTypeKind4.ZodCatch
        });
      }
      describe(description) {
        const This = this.constructor;
        return new This({
          ...this._def,
          description
        });
      }
      pipe(target) {
        return ZodPipeline4.create(this, target);
      }
      readonly() {
        return ZodReadonly4.create(this);
      }
      isOptional() {
        return this.safeParse(void 0).success;
      }
      isNullable() {
        return this.safeParse(null).success;
      }
    };
    var cuidRegex4 = /^c[^\s-]{8,}$/i;
    var cuid2Regex4 = /^[0-9a-z]+$/;
    var ulidRegex4 = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
    var uuidRegex4 = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
    var nanoidRegex4 = /^[a-z0-9_-]{21}$/i;
    var jwtRegex4 = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
    var durationRegex4 = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
    var emailRegex4 = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    var _emojiRegex4 = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
    var emojiRegex4;
    var ipv4Regex4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
    var ipv4CidrRegex4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
    var ipv6Regex4 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
    var ipv6CidrRegex4 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
    var base64Regex4 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    var base64urlRegex4 = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
    var dateRegexSource4 = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
    var dateRegex4 = new RegExp(`^${dateRegexSource4}$`);
    function timeRegexSource4(args) {
      let secondsRegexSource = `[0-5]\\d`;
      if (args.precision) {
        secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
      } else if (args.precision == null) {
        secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
      }
      const secondsQuantifier = args.precision ? "+" : "?";
      return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
    }
    function timeRegex4(args) {
      return new RegExp(`^${timeRegexSource4(args)}$`);
    }
    function datetimeRegex4(args) {
      let regex = `${dateRegexSource4}T${timeRegexSource4(args)}`;
      const opts = [];
      opts.push(args.local ? `Z?` : `Z`);
      if (args.offset)
        opts.push(`([+-]\\d{2}:?\\d{2})`);
      regex = `${regex}(${opts.join("|")})`;
      return new RegExp(`^${regex}$`);
    }
    function isValidIP4(ip, version) {
      if ((version === "v4" || !version) && ipv4Regex4.test(ip)) {
        return true;
      }
      if ((version === "v6" || !version) && ipv6Regex4.test(ip)) {
        return true;
      }
      return false;
    }
    function isValidJWT4(jwt, alg) {
      if (!jwtRegex4.test(jwt))
        return false;
      try {
        const [header] = jwt.split(".");
        if (!header)
          return false;
        const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
        const decoded = JSON.parse(atob(base64));
        if (typeof decoded !== "object" || decoded === null)
          return false;
        if ("typ" in decoded && decoded?.typ !== "JWT")
          return false;
        if (!decoded.alg)
          return false;
        if (alg && decoded.alg !== alg)
          return false;
        return true;
      } catch {
        return false;
      }
    }
    function isValidCidr4(ip, version) {
      if ((version === "v4" || !version) && ipv4CidrRegex4.test(ip)) {
        return true;
      }
      if ((version === "v6" || !version) && ipv6CidrRegex4.test(ip)) {
        return true;
      }
      return false;
    }
    var ZodString4 = class _ZodString extends ZodType4 {
      _parse(input) {
        if (this._def.coerce) {
          input.data = String(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType4.string) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext4(ctx2, {
            code: ZodIssueCode4.invalid_type,
            expected: ZodParsedType4.string,
            received: ctx2.parsedType
          });
          return INVALID4;
        }
        const status = new ParseStatus4();
        let ctx = void 0;
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            if (input.data.length < check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                code: ZodIssueCode4.too_small,
                minimum: check.value,
                type: "string",
                inclusive: true,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            if (input.data.length > check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                code: ZodIssueCode4.too_big,
                maximum: check.value,
                type: "string",
                inclusive: true,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "length") {
            const tooBig = input.data.length > check.value;
            const tooSmall = input.data.length < check.value;
            if (tooBig || tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              if (tooBig) {
                addIssueToContext4(ctx, {
                  code: ZodIssueCode4.too_big,
                  maximum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: true,
                  message: check.message
                });
              } else if (tooSmall) {
                addIssueToContext4(ctx, {
                  code: ZodIssueCode4.too_small,
                  minimum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: true,
                  message: check.message
                });
              }
              status.dirty();
            }
          } else if (check.kind === "email") {
            if (!emailRegex4.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                validation: "email",
                code: ZodIssueCode4.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "emoji") {
            if (!emojiRegex4) {
              emojiRegex4 = new RegExp(_emojiRegex4, "u");
            }
            if (!emojiRegex4.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                validation: "emoji",
                code: ZodIssueCode4.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "uuid") {
            if (!uuidRegex4.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                validation: "uuid",
                code: ZodIssueCode4.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "nanoid") {
            if (!nanoidRegex4.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                validation: "nanoid",
                code: ZodIssueCode4.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cuid") {
            if (!cuidRegex4.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                validation: "cuid",
                code: ZodIssueCode4.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cuid2") {
            if (!cuid2Regex4.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                validation: "cuid2",
                code: ZodIssueCode4.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "ulid") {
            if (!ulidRegex4.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                validation: "ulid",
                code: ZodIssueCode4.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "url") {
            try {
              new URL(input.data);
            } catch {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                validation: "url",
                code: ZodIssueCode4.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "regex") {
            check.regex.lastIndex = 0;
            const testResult = check.regex.test(input.data);
            if (!testResult) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                validation: "regex",
                code: ZodIssueCode4.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "trim") {
            input.data = input.data.trim();
          } else if (check.kind === "includes") {
            if (!input.data.includes(check.value, check.position)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                code: ZodIssueCode4.invalid_string,
                validation: { includes: check.value, position: check.position },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "toLowerCase") {
            input.data = input.data.toLowerCase();
          } else if (check.kind === "toUpperCase") {
            input.data = input.data.toUpperCase();
          } else if (check.kind === "startsWith") {
            if (!input.data.startsWith(check.value)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                code: ZodIssueCode4.invalid_string,
                validation: { startsWith: check.value },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "endsWith") {
            if (!input.data.endsWith(check.value)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                code: ZodIssueCode4.invalid_string,
                validation: { endsWith: check.value },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "datetime") {
            const regex = datetimeRegex4(check);
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                code: ZodIssueCode4.invalid_string,
                validation: "datetime",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "date") {
            const regex = dateRegex4;
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                code: ZodIssueCode4.invalid_string,
                validation: "date",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "time") {
            const regex = timeRegex4(check);
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                code: ZodIssueCode4.invalid_string,
                validation: "time",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "duration") {
            if (!durationRegex4.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                validation: "duration",
                code: ZodIssueCode4.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "ip") {
            if (!isValidIP4(input.data, check.version)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                validation: "ip",
                code: ZodIssueCode4.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "jwt") {
            if (!isValidJWT4(input.data, check.alg)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                validation: "jwt",
                code: ZodIssueCode4.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cidr") {
            if (!isValidCidr4(input.data, check.version)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                validation: "cidr",
                code: ZodIssueCode4.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "base64") {
            if (!base64Regex4.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                validation: "base64",
                code: ZodIssueCode4.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "base64url") {
            if (!base64urlRegex4.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                validation: "base64url",
                code: ZodIssueCode4.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util4.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      _regex(regex, validation, message) {
        return this.refinement((data) => regex.test(data), {
          validation,
          code: ZodIssueCode4.invalid_string,
          ...errorUtil4.errToObj(message)
        });
      }
      _addCheck(check) {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      email(message) {
        return this._addCheck({ kind: "email", ...errorUtil4.errToObj(message) });
      }
      url(message) {
        return this._addCheck({ kind: "url", ...errorUtil4.errToObj(message) });
      }
      emoji(message) {
        return this._addCheck({ kind: "emoji", ...errorUtil4.errToObj(message) });
      }
      uuid(message) {
        return this._addCheck({ kind: "uuid", ...errorUtil4.errToObj(message) });
      }
      nanoid(message) {
        return this._addCheck({ kind: "nanoid", ...errorUtil4.errToObj(message) });
      }
      cuid(message) {
        return this._addCheck({ kind: "cuid", ...errorUtil4.errToObj(message) });
      }
      cuid2(message) {
        return this._addCheck({ kind: "cuid2", ...errorUtil4.errToObj(message) });
      }
      ulid(message) {
        return this._addCheck({ kind: "ulid", ...errorUtil4.errToObj(message) });
      }
      base64(message) {
        return this._addCheck({ kind: "base64", ...errorUtil4.errToObj(message) });
      }
      base64url(message) {
        return this._addCheck({
          kind: "base64url",
          ...errorUtil4.errToObj(message)
        });
      }
      jwt(options) {
        return this._addCheck({ kind: "jwt", ...errorUtil4.errToObj(options) });
      }
      ip(options) {
        return this._addCheck({ kind: "ip", ...errorUtil4.errToObj(options) });
      }
      cidr(options) {
        return this._addCheck({ kind: "cidr", ...errorUtil4.errToObj(options) });
      }
      datetime(options) {
        if (typeof options === "string") {
          return this._addCheck({
            kind: "datetime",
            precision: null,
            offset: false,
            local: false,
            message: options
          });
        }
        return this._addCheck({
          kind: "datetime",
          precision: typeof options?.precision === "undefined" ? null : options?.precision,
          offset: options?.offset ?? false,
          local: options?.local ?? false,
          ...errorUtil4.errToObj(options?.message)
        });
      }
      date(message) {
        return this._addCheck({ kind: "date", message });
      }
      time(options) {
        if (typeof options === "string") {
          return this._addCheck({
            kind: "time",
            precision: null,
            message: options
          });
        }
        return this._addCheck({
          kind: "time",
          precision: typeof options?.precision === "undefined" ? null : options?.precision,
          ...errorUtil4.errToObj(options?.message)
        });
      }
      duration(message) {
        return this._addCheck({ kind: "duration", ...errorUtil4.errToObj(message) });
      }
      regex(regex, message) {
        return this._addCheck({
          kind: "regex",
          regex,
          ...errorUtil4.errToObj(message)
        });
      }
      includes(value, options) {
        return this._addCheck({
          kind: "includes",
          value,
          position: options?.position,
          ...errorUtil4.errToObj(options?.message)
        });
      }
      startsWith(value, message) {
        return this._addCheck({
          kind: "startsWith",
          value,
          ...errorUtil4.errToObj(message)
        });
      }
      endsWith(value, message) {
        return this._addCheck({
          kind: "endsWith",
          value,
          ...errorUtil4.errToObj(message)
        });
      }
      min(minLength, message) {
        return this._addCheck({
          kind: "min",
          value: minLength,
          ...errorUtil4.errToObj(message)
        });
      }
      max(maxLength, message) {
        return this._addCheck({
          kind: "max",
          value: maxLength,
          ...errorUtil4.errToObj(message)
        });
      }
      length(len, message) {
        return this._addCheck({
          kind: "length",
          value: len,
          ...errorUtil4.errToObj(message)
        });
      }
      /**
       * Equivalent to `.min(1)`
       */
      nonempty(message) {
        return this.min(1, errorUtil4.errToObj(message));
      }
      trim() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "trim" }]
        });
      }
      toLowerCase() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "toLowerCase" }]
        });
      }
      toUpperCase() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "toUpperCase" }]
        });
      }
      get isDatetime() {
        return !!this._def.checks.find((ch) => ch.kind === "datetime");
      }
      get isDate() {
        return !!this._def.checks.find((ch) => ch.kind === "date");
      }
      get isTime() {
        return !!this._def.checks.find((ch) => ch.kind === "time");
      }
      get isDuration() {
        return !!this._def.checks.find((ch) => ch.kind === "duration");
      }
      get isEmail() {
        return !!this._def.checks.find((ch) => ch.kind === "email");
      }
      get isURL() {
        return !!this._def.checks.find((ch) => ch.kind === "url");
      }
      get isEmoji() {
        return !!this._def.checks.find((ch) => ch.kind === "emoji");
      }
      get isUUID() {
        return !!this._def.checks.find((ch) => ch.kind === "uuid");
      }
      get isNANOID() {
        return !!this._def.checks.find((ch) => ch.kind === "nanoid");
      }
      get isCUID() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid");
      }
      get isCUID2() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid2");
      }
      get isULID() {
        return !!this._def.checks.find((ch) => ch.kind === "ulid");
      }
      get isIP() {
        return !!this._def.checks.find((ch) => ch.kind === "ip");
      }
      get isCIDR() {
        return !!this._def.checks.find((ch) => ch.kind === "cidr");
      }
      get isBase64() {
        return !!this._def.checks.find((ch) => ch.kind === "base64");
      }
      get isBase64url() {
        return !!this._def.checks.find((ch) => ch.kind === "base64url");
      }
      get minLength() {
        let min2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min2 === null || ch.value > min2)
              min2 = ch.value;
          }
        }
        return min2;
      }
      get maxLength() {
        let max2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max2 === null || ch.value < max2)
              max2 = ch.value;
          }
        }
        return max2;
      }
    };
    ZodString4.create = (params) => {
      return new ZodString4({
        checks: [],
        typeName: ZodFirstPartyTypeKind4.ZodString,
        coerce: params?.coerce ?? false,
        ...processCreateParams4(params)
      });
    };
    function floatSafeRemainder4(val, step) {
      const valDecCount = (val.toString().split(".")[1] || "").length;
      const stepDecCount = (step.toString().split(".")[1] || "").length;
      const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
      const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
      const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
      return valInt % stepInt / 10 ** decCount;
    }
    var ZodNumber4 = class _ZodNumber extends ZodType4 {
      constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
      }
      _parse(input) {
        if (this._def.coerce) {
          input.data = Number(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType4.number) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext4(ctx2, {
            code: ZodIssueCode4.invalid_type,
            expected: ZodParsedType4.number,
            received: ctx2.parsedType
          });
          return INVALID4;
        }
        let ctx = void 0;
        const status = new ParseStatus4();
        for (const check of this._def.checks) {
          if (check.kind === "int") {
            if (!util4.isInteger(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                code: ZodIssueCode4.invalid_type,
                expected: "integer",
                received: "float",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "min") {
            const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
            if (tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                code: ZodIssueCode4.too_small,
                minimum: check.value,
                type: "number",
                inclusive: check.inclusive,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
            if (tooBig) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                code: ZodIssueCode4.too_big,
                maximum: check.value,
                type: "number",
                inclusive: check.inclusive,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "multipleOf") {
            if (floatSafeRemainder4(input.data, check.value) !== 0) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                code: ZodIssueCode4.not_multiple_of,
                multipleOf: check.value,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "finite") {
            if (!Number.isFinite(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                code: ZodIssueCode4.not_finite,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util4.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      gte(value, message) {
        return this.setLimit("min", value, true, errorUtil4.toString(message));
      }
      gt(value, message) {
        return this.setLimit("min", value, false, errorUtil4.toString(message));
      }
      lte(value, message) {
        return this.setLimit("max", value, true, errorUtil4.toString(message));
      }
      lt(value, message) {
        return this.setLimit("max", value, false, errorUtil4.toString(message));
      }
      setLimit(kind, value, inclusive, message) {
        return new _ZodNumber({
          ...this._def,
          checks: [
            ...this._def.checks,
            {
              kind,
              value,
              inclusive,
              message: errorUtil4.toString(message)
            }
          ]
        });
      }
      _addCheck(check) {
        return new _ZodNumber({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      int(message) {
        return this._addCheck({
          kind: "int",
          message: errorUtil4.toString(message)
        });
      }
      positive(message) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: false,
          message: errorUtil4.toString(message)
        });
      }
      negative(message) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: false,
          message: errorUtil4.toString(message)
        });
      }
      nonpositive(message) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: true,
          message: errorUtil4.toString(message)
        });
      }
      nonnegative(message) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: true,
          message: errorUtil4.toString(message)
        });
      }
      multipleOf(value, message) {
        return this._addCheck({
          kind: "multipleOf",
          value,
          message: errorUtil4.toString(message)
        });
      }
      finite(message) {
        return this._addCheck({
          kind: "finite",
          message: errorUtil4.toString(message)
        });
      }
      safe(message) {
        return this._addCheck({
          kind: "min",
          inclusive: true,
          value: Number.MIN_SAFE_INTEGER,
          message: errorUtil4.toString(message)
        })._addCheck({
          kind: "max",
          inclusive: true,
          value: Number.MAX_SAFE_INTEGER,
          message: errorUtil4.toString(message)
        });
      }
      get minValue() {
        let min2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min2 === null || ch.value > min2)
              min2 = ch.value;
          }
        }
        return min2;
      }
      get maxValue() {
        let max2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max2 === null || ch.value < max2)
              max2 = ch.value;
          }
        }
        return max2;
      }
      get isInt() {
        return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util4.isInteger(ch.value));
      }
      get isFinite() {
        let max2 = null;
        let min2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
            return true;
          } else if (ch.kind === "min") {
            if (min2 === null || ch.value > min2)
              min2 = ch.value;
          } else if (ch.kind === "max") {
            if (max2 === null || ch.value < max2)
              max2 = ch.value;
          }
        }
        return Number.isFinite(min2) && Number.isFinite(max2);
      }
    };
    ZodNumber4.create = (params) => {
      return new ZodNumber4({
        checks: [],
        typeName: ZodFirstPartyTypeKind4.ZodNumber,
        coerce: params?.coerce || false,
        ...processCreateParams4(params)
      });
    };
    var ZodBigInt4 = class _ZodBigInt extends ZodType4 {
      constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
      }
      _parse(input) {
        if (this._def.coerce) {
          try {
            input.data = BigInt(input.data);
          } catch {
            return this._getInvalidInput(input);
          }
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType4.bigint) {
          return this._getInvalidInput(input);
        }
        let ctx = void 0;
        const status = new ParseStatus4();
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
            if (tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                code: ZodIssueCode4.too_small,
                type: "bigint",
                minimum: check.value,
                inclusive: check.inclusive,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
            if (tooBig) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                code: ZodIssueCode4.too_big,
                type: "bigint",
                maximum: check.value,
                inclusive: check.inclusive,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "multipleOf") {
            if (input.data % check.value !== BigInt(0)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                code: ZodIssueCode4.not_multiple_of,
                multipleOf: check.value,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util4.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      _getInvalidInput(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext4(ctx, {
          code: ZodIssueCode4.invalid_type,
          expected: ZodParsedType4.bigint,
          received: ctx.parsedType
        });
        return INVALID4;
      }
      gte(value, message) {
        return this.setLimit("min", value, true, errorUtil4.toString(message));
      }
      gt(value, message) {
        return this.setLimit("min", value, false, errorUtil4.toString(message));
      }
      lte(value, message) {
        return this.setLimit("max", value, true, errorUtil4.toString(message));
      }
      lt(value, message) {
        return this.setLimit("max", value, false, errorUtil4.toString(message));
      }
      setLimit(kind, value, inclusive, message) {
        return new _ZodBigInt({
          ...this._def,
          checks: [
            ...this._def.checks,
            {
              kind,
              value,
              inclusive,
              message: errorUtil4.toString(message)
            }
          ]
        });
      }
      _addCheck(check) {
        return new _ZodBigInt({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      positive(message) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: false,
          message: errorUtil4.toString(message)
        });
      }
      negative(message) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: false,
          message: errorUtil4.toString(message)
        });
      }
      nonpositive(message) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: true,
          message: errorUtil4.toString(message)
        });
      }
      nonnegative(message) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: true,
          message: errorUtil4.toString(message)
        });
      }
      multipleOf(value, message) {
        return this._addCheck({
          kind: "multipleOf",
          value,
          message: errorUtil4.toString(message)
        });
      }
      get minValue() {
        let min2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min2 === null || ch.value > min2)
              min2 = ch.value;
          }
        }
        return min2;
      }
      get maxValue() {
        let max2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max2 === null || ch.value < max2)
              max2 = ch.value;
          }
        }
        return max2;
      }
    };
    ZodBigInt4.create = (params) => {
      return new ZodBigInt4({
        checks: [],
        typeName: ZodFirstPartyTypeKind4.ZodBigInt,
        coerce: params?.coerce ?? false,
        ...processCreateParams4(params)
      });
    };
    var ZodBoolean4 = class extends ZodType4 {
      _parse(input) {
        if (this._def.coerce) {
          input.data = Boolean(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType4.boolean) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext4(ctx, {
            code: ZodIssueCode4.invalid_type,
            expected: ZodParsedType4.boolean,
            received: ctx.parsedType
          });
          return INVALID4;
        }
        return OK4(input.data);
      }
    };
    ZodBoolean4.create = (params) => {
      return new ZodBoolean4({
        typeName: ZodFirstPartyTypeKind4.ZodBoolean,
        coerce: params?.coerce || false,
        ...processCreateParams4(params)
      });
    };
    var ZodDate4 = class _ZodDate extends ZodType4 {
      _parse(input) {
        if (this._def.coerce) {
          input.data = new Date(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType4.date) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext4(ctx2, {
            code: ZodIssueCode4.invalid_type,
            expected: ZodParsedType4.date,
            received: ctx2.parsedType
          });
          return INVALID4;
        }
        if (Number.isNaN(input.data.getTime())) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext4(ctx2, {
            code: ZodIssueCode4.invalid_date
          });
          return INVALID4;
        }
        const status = new ParseStatus4();
        let ctx = void 0;
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            if (input.data.getTime() < check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                code: ZodIssueCode4.too_small,
                message: check.message,
                inclusive: true,
                exact: false,
                minimum: check.value,
                type: "date"
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            if (input.data.getTime() > check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext4(ctx, {
                code: ZodIssueCode4.too_big,
                message: check.message,
                inclusive: true,
                exact: false,
                maximum: check.value,
                type: "date"
              });
              status.dirty();
            }
          } else {
            util4.assertNever(check);
          }
        }
        return {
          status: status.value,
          value: new Date(input.data.getTime())
        };
      }
      _addCheck(check) {
        return new _ZodDate({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      min(minDate, message) {
        return this._addCheck({
          kind: "min",
          value: minDate.getTime(),
          message: errorUtil4.toString(message)
        });
      }
      max(maxDate, message) {
        return this._addCheck({
          kind: "max",
          value: maxDate.getTime(),
          message: errorUtil4.toString(message)
        });
      }
      get minDate() {
        let min2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min2 === null || ch.value > min2)
              min2 = ch.value;
          }
        }
        return min2 != null ? new Date(min2) : null;
      }
      get maxDate() {
        let max2 = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max2 === null || ch.value < max2)
              max2 = ch.value;
          }
        }
        return max2 != null ? new Date(max2) : null;
      }
    };
    ZodDate4.create = (params) => {
      return new ZodDate4({
        checks: [],
        coerce: params?.coerce || false,
        typeName: ZodFirstPartyTypeKind4.ZodDate,
        ...processCreateParams4(params)
      });
    };
    var ZodSymbol4 = class extends ZodType4 {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType4.symbol) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext4(ctx, {
            code: ZodIssueCode4.invalid_type,
            expected: ZodParsedType4.symbol,
            received: ctx.parsedType
          });
          return INVALID4;
        }
        return OK4(input.data);
      }
    };
    ZodSymbol4.create = (params) => {
      return new ZodSymbol4({
        typeName: ZodFirstPartyTypeKind4.ZodSymbol,
        ...processCreateParams4(params)
      });
    };
    var ZodUndefined4 = class extends ZodType4 {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType4.undefined) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext4(ctx, {
            code: ZodIssueCode4.invalid_type,
            expected: ZodParsedType4.undefined,
            received: ctx.parsedType
          });
          return INVALID4;
        }
        return OK4(input.data);
      }
    };
    ZodUndefined4.create = (params) => {
      return new ZodUndefined4({
        typeName: ZodFirstPartyTypeKind4.ZodUndefined,
        ...processCreateParams4(params)
      });
    };
    var ZodNull4 = class extends ZodType4 {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType4.null) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext4(ctx, {
            code: ZodIssueCode4.invalid_type,
            expected: ZodParsedType4.null,
            received: ctx.parsedType
          });
          return INVALID4;
        }
        return OK4(input.data);
      }
    };
    ZodNull4.create = (params) => {
      return new ZodNull4({
        typeName: ZodFirstPartyTypeKind4.ZodNull,
        ...processCreateParams4(params)
      });
    };
    var ZodAny4 = class extends ZodType4 {
      constructor() {
        super(...arguments);
        this._any = true;
      }
      _parse(input) {
        return OK4(input.data);
      }
    };
    ZodAny4.create = (params) => {
      return new ZodAny4({
        typeName: ZodFirstPartyTypeKind4.ZodAny,
        ...processCreateParams4(params)
      });
    };
    var ZodUnknown4 = class extends ZodType4 {
      constructor() {
        super(...arguments);
        this._unknown = true;
      }
      _parse(input) {
        return OK4(input.data);
      }
    };
    ZodUnknown4.create = (params) => {
      return new ZodUnknown4({
        typeName: ZodFirstPartyTypeKind4.ZodUnknown,
        ...processCreateParams4(params)
      });
    };
    var ZodNever4 = class extends ZodType4 {
      _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext4(ctx, {
          code: ZodIssueCode4.invalid_type,
          expected: ZodParsedType4.never,
          received: ctx.parsedType
        });
        return INVALID4;
      }
    };
    ZodNever4.create = (params) => {
      return new ZodNever4({
        typeName: ZodFirstPartyTypeKind4.ZodNever,
        ...processCreateParams4(params)
      });
    };
    var ZodVoid4 = class extends ZodType4 {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType4.undefined) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext4(ctx, {
            code: ZodIssueCode4.invalid_type,
            expected: ZodParsedType4.void,
            received: ctx.parsedType
          });
          return INVALID4;
        }
        return OK4(input.data);
      }
    };
    ZodVoid4.create = (params) => {
      return new ZodVoid4({
        typeName: ZodFirstPartyTypeKind4.ZodVoid,
        ...processCreateParams4(params)
      });
    };
    var ZodArray4 = class _ZodArray extends ZodType4 {
      _parse(input) {
        const { ctx, status } = this._processInputParams(input);
        const def = this._def;
        if (ctx.parsedType !== ZodParsedType4.array) {
          addIssueToContext4(ctx, {
            code: ZodIssueCode4.invalid_type,
            expected: ZodParsedType4.array,
            received: ctx.parsedType
          });
          return INVALID4;
        }
        if (def.exactLength !== null) {
          const tooBig = ctx.data.length > def.exactLength.value;
          const tooSmall = ctx.data.length < def.exactLength.value;
          if (tooBig || tooSmall) {
            addIssueToContext4(ctx, {
              code: tooBig ? ZodIssueCode4.too_big : ZodIssueCode4.too_small,
              minimum: tooSmall ? def.exactLength.value : void 0,
              maximum: tooBig ? def.exactLength.value : void 0,
              type: "array",
              inclusive: true,
              exact: true,
              message: def.exactLength.message
            });
            status.dirty();
          }
        }
        if (def.minLength !== null) {
          if (ctx.data.length < def.minLength.value) {
            addIssueToContext4(ctx, {
              code: ZodIssueCode4.too_small,
              minimum: def.minLength.value,
              type: "array",
              inclusive: true,
              exact: false,
              message: def.minLength.message
            });
            status.dirty();
          }
        }
        if (def.maxLength !== null) {
          if (ctx.data.length > def.maxLength.value) {
            addIssueToContext4(ctx, {
              code: ZodIssueCode4.too_big,
              maximum: def.maxLength.value,
              type: "array",
              inclusive: true,
              exact: false,
              message: def.maxLength.message
            });
            status.dirty();
          }
        }
        if (ctx.common.async) {
          return Promise.all([...ctx.data].map((item, i) => {
            return def.type._parseAsync(new ParseInputLazyPath4(ctx, item, ctx.path, i));
          })).then((result2) => {
            return ParseStatus4.mergeArray(status, result2);
          });
        }
        const result = [...ctx.data].map((item, i) => {
          return def.type._parseSync(new ParseInputLazyPath4(ctx, item, ctx.path, i));
        });
        return ParseStatus4.mergeArray(status, result);
      }
      get element() {
        return this._def.type;
      }
      min(minLength, message) {
        return new _ZodArray({
          ...this._def,
          minLength: { value: minLength, message: errorUtil4.toString(message) }
        });
      }
      max(maxLength, message) {
        return new _ZodArray({
          ...this._def,
          maxLength: { value: maxLength, message: errorUtil4.toString(message) }
        });
      }
      length(len, message) {
        return new _ZodArray({
          ...this._def,
          exactLength: { value: len, message: errorUtil4.toString(message) }
        });
      }
      nonempty(message) {
        return this.min(1, message);
      }
    };
    ZodArray4.create = (schema, params) => {
      return new ZodArray4({
        type: schema,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: ZodFirstPartyTypeKind4.ZodArray,
        ...processCreateParams4(params)
      });
    };
    function deepPartialify4(schema) {
      if (schema instanceof ZodObject4) {
        const newShape = {};
        for (const key in schema.shape) {
          const fieldSchema = schema.shape[key];
          newShape[key] = ZodOptional4.create(deepPartialify4(fieldSchema));
        }
        return new ZodObject4({
          ...schema._def,
          shape: () => newShape
        });
      } else if (schema instanceof ZodArray4) {
        return new ZodArray4({
          ...schema._def,
          type: deepPartialify4(schema.element)
        });
      } else if (schema instanceof ZodOptional4) {
        return ZodOptional4.create(deepPartialify4(schema.unwrap()));
      } else if (schema instanceof ZodNullable4) {
        return ZodNullable4.create(deepPartialify4(schema.unwrap()));
      } else if (schema instanceof ZodTuple4) {
        return ZodTuple4.create(schema.items.map((item) => deepPartialify4(item)));
      } else {
        return schema;
      }
    }
    var ZodObject4 = class _ZodObject extends ZodType4 {
      constructor() {
        super(...arguments);
        this._cached = null;
        this.nonstrict = this.passthrough;
        this.augment = this.extend;
      }
      _getCached() {
        if (this._cached !== null)
          return this._cached;
        const shape = this._def.shape();
        const keys = util4.objectKeys(shape);
        this._cached = { shape, keys };
        return this._cached;
      }
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType4.object) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext4(ctx2, {
            code: ZodIssueCode4.invalid_type,
            expected: ZodParsedType4.object,
            received: ctx2.parsedType
          });
          return INVALID4;
        }
        const { status, ctx } = this._processInputParams(input);
        const { shape, keys: shapeKeys } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever4 && this._def.unknownKeys === "strip")) {
          for (const key in ctx.data) {
            if (!shapeKeys.includes(key)) {
              extraKeys.push(key);
            }
          }
        }
        const pairs = [];
        for (const key of shapeKeys) {
          const keyValidator = shape[key];
          const value = ctx.data[key];
          pairs.push({
            key: { status: "valid", value: key },
            value: keyValidator._parse(new ParseInputLazyPath4(ctx, value, ctx.path, key)),
            alwaysSet: key in ctx.data
          });
        }
        if (this._def.catchall instanceof ZodNever4) {
          const unknownKeys = this._def.unknownKeys;
          if (unknownKeys === "passthrough") {
            for (const key of extraKeys) {
              pairs.push({
                key: { status: "valid", value: key },
                value: { status: "valid", value: ctx.data[key] }
              });
            }
          } else if (unknownKeys === "strict") {
            if (extraKeys.length > 0) {
              addIssueToContext4(ctx, {
                code: ZodIssueCode4.unrecognized_keys,
                keys: extraKeys
              });
              status.dirty();
            }
          } else if (unknownKeys === "strip") {
          } else {
            throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
          }
        } else {
          const catchall = this._def.catchall;
          for (const key of extraKeys) {
            const value = ctx.data[key];
            pairs.push({
              key: { status: "valid", value: key },
              value: catchall._parse(
                new ParseInputLazyPath4(ctx, value, ctx.path, key)
                //, ctx.child(key), value, getParsedType(value)
              ),
              alwaysSet: key in ctx.data
            });
          }
        }
        if (ctx.common.async) {
          return Promise.resolve().then(async () => {
            const syncPairs = [];
            for (const pair of pairs) {
              const key = await pair.key;
              const value = await pair.value;
              syncPairs.push({
                key,
                value,
                alwaysSet: pair.alwaysSet
              });
            }
            return syncPairs;
          }).then((syncPairs) => {
            return ParseStatus4.mergeObjectSync(status, syncPairs);
          });
        } else {
          return ParseStatus4.mergeObjectSync(status, pairs);
        }
      }
      get shape() {
        return this._def.shape();
      }
      strict(message) {
        errorUtil4.errToObj;
        return new _ZodObject({
          ...this._def,
          unknownKeys: "strict",
          ...message !== void 0 ? {
            errorMap: (issue, ctx) => {
              const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
              if (issue.code === "unrecognized_keys")
                return {
                  message: errorUtil4.errToObj(message).message ?? defaultError
                };
              return {
                message: defaultError
              };
            }
          } : {}
        });
      }
      strip() {
        return new _ZodObject({
          ...this._def,
          unknownKeys: "strip"
        });
      }
      passthrough() {
        return new _ZodObject({
          ...this._def,
          unknownKeys: "passthrough"
        });
      }
      // const AugmentFactory =
      //   <Def extends ZodObjectDef>(def: Def) =>
      //   <Augmentation extends ZodRawShape>(
      //     augmentation: Augmentation
      //   ): ZodObject<
      //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
      //     Def["unknownKeys"],
      //     Def["catchall"]
      //   > => {
      //     return new ZodObject({
      //       ...def,
      //       shape: () => ({
      //         ...def.shape(),
      //         ...augmentation,
      //       }),
      //     }) as any;
      //   };
      extend(augmentation) {
        return new _ZodObject({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...augmentation
          })
        });
      }
      /**
       * Prior to zod@1.0.12 there was a bug in the
       * inferred type of merged objects. Please
       * upgrade if you are experiencing issues.
       */
      merge(merging) {
        const merged = new _ZodObject({
          unknownKeys: merging._def.unknownKeys,
          catchall: merging._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...merging._def.shape()
          }),
          typeName: ZodFirstPartyTypeKind4.ZodObject
        });
        return merged;
      }
      // merge<
      //   Incoming extends AnyZodObject,
      //   Augmentation extends Incoming["shape"],
      //   NewOutput extends {
      //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
      //       ? Augmentation[k]["_output"]
      //       : k extends keyof Output
      //       ? Output[k]
      //       : never;
      //   },
      //   NewInput extends {
      //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
      //       ? Augmentation[k]["_input"]
      //       : k extends keyof Input
      //       ? Input[k]
      //       : never;
      //   }
      // >(
      //   merging: Incoming
      // ): ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"],
      //   NewOutput,
      //   NewInput
      // > {
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
      setKey(key, schema) {
        return this.augment({ [key]: schema });
      }
      // merge<Incoming extends AnyZodObject>(
      //   merging: Incoming
      // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
      // ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"]
      // > {
      //   // const mergedShape = objectUtil.mergeShapes(
      //   //   this._def.shape(),
      //   //   merging._def.shape()
      //   // );
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
      catchall(index) {
        return new _ZodObject({
          ...this._def,
          catchall: index
        });
      }
      pick(mask) {
        const shape = {};
        for (const key of util4.objectKeys(mask)) {
          if (mask[key] && this.shape[key]) {
            shape[key] = this.shape[key];
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => shape
        });
      }
      omit(mask) {
        const shape = {};
        for (const key of util4.objectKeys(this.shape)) {
          if (!mask[key]) {
            shape[key] = this.shape[key];
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => shape
        });
      }
      /**
       * @deprecated
       */
      deepPartial() {
        return deepPartialify4(this);
      }
      partial(mask) {
        const newShape = {};
        for (const key of util4.objectKeys(this.shape)) {
          const fieldSchema = this.shape[key];
          if (mask && !mask[key]) {
            newShape[key] = fieldSchema;
          } else {
            newShape[key] = fieldSchema.optional();
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => newShape
        });
      }
      required(mask) {
        const newShape = {};
        for (const key of util4.objectKeys(this.shape)) {
          if (mask && !mask[key]) {
            newShape[key] = this.shape[key];
          } else {
            const fieldSchema = this.shape[key];
            let newField = fieldSchema;
            while (newField instanceof ZodOptional4) {
              newField = newField._def.innerType;
            }
            newShape[key] = newField;
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => newShape
        });
      }
      keyof() {
        return createZodEnum4(util4.objectKeys(this.shape));
      }
    };
    ZodObject4.create = (shape, params) => {
      return new ZodObject4({
        shape: () => shape,
        unknownKeys: "strip",
        catchall: ZodNever4.create(),
        typeName: ZodFirstPartyTypeKind4.ZodObject,
        ...processCreateParams4(params)
      });
    };
    ZodObject4.strictCreate = (shape, params) => {
      return new ZodObject4({
        shape: () => shape,
        unknownKeys: "strict",
        catchall: ZodNever4.create(),
        typeName: ZodFirstPartyTypeKind4.ZodObject,
        ...processCreateParams4(params)
      });
    };
    ZodObject4.lazycreate = (shape, params) => {
      return new ZodObject4({
        shape,
        unknownKeys: "strip",
        catchall: ZodNever4.create(),
        typeName: ZodFirstPartyTypeKind4.ZodObject,
        ...processCreateParams4(params)
      });
    };
    var ZodUnion4 = class extends ZodType4 {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const options = this._def.options;
        function handleResults(results) {
          for (const result of results) {
            if (result.result.status === "valid") {
              return result.result;
            }
          }
          for (const result of results) {
            if (result.result.status === "dirty") {
              ctx.common.issues.push(...result.ctx.common.issues);
              return result.result;
            }
          }
          const unionErrors = results.map((result) => new ZodError4(result.ctx.common.issues));
          addIssueToContext4(ctx, {
            code: ZodIssueCode4.invalid_union,
            unionErrors
          });
          return INVALID4;
        }
        if (ctx.common.async) {
          return Promise.all(options.map(async (option) => {
            const childCtx = {
              ...ctx,
              common: {
                ...ctx.common,
                issues: []
              },
              parent: null
            };
            return {
              result: await option._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: childCtx
              }),
              ctx: childCtx
            };
          })).then(handleResults);
        } else {
          let dirty = void 0;
          const issues = [];
          for (const option of options) {
            const childCtx = {
              ...ctx,
              common: {
                ...ctx.common,
                issues: []
              },
              parent: null
            };
            const result = option._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: childCtx
            });
            if (result.status === "valid") {
              return result;
            } else if (result.status === "dirty" && !dirty) {
              dirty = { result, ctx: childCtx };
            }
            if (childCtx.common.issues.length) {
              issues.push(childCtx.common.issues);
            }
          }
          if (dirty) {
            ctx.common.issues.push(...dirty.ctx.common.issues);
            return dirty.result;
          }
          const unionErrors = issues.map((issues2) => new ZodError4(issues2));
          addIssueToContext4(ctx, {
            code: ZodIssueCode4.invalid_union,
            unionErrors
          });
          return INVALID4;
        }
      }
      get options() {
        return this._def.options;
      }
    };
    ZodUnion4.create = (types, params) => {
      return new ZodUnion4({
        options: types,
        typeName: ZodFirstPartyTypeKind4.ZodUnion,
        ...processCreateParams4(params)
      });
    };
    var getDiscriminator4 = (type) => {
      if (type instanceof ZodLazy4) {
        return getDiscriminator4(type.schema);
      } else if (type instanceof ZodEffects4) {
        return getDiscriminator4(type.innerType());
      } else if (type instanceof ZodLiteral4) {
        return [type.value];
      } else if (type instanceof ZodEnum4) {
        return type.options;
      } else if (type instanceof ZodNativeEnum4) {
        return util4.objectValues(type.enum);
      } else if (type instanceof ZodDefault4) {
        return getDiscriminator4(type._def.innerType);
      } else if (type instanceof ZodUndefined4) {
        return [void 0];
      } else if (type instanceof ZodNull4) {
        return [null];
      } else if (type instanceof ZodOptional4) {
        return [void 0, ...getDiscriminator4(type.unwrap())];
      } else if (type instanceof ZodNullable4) {
        return [null, ...getDiscriminator4(type.unwrap())];
      } else if (type instanceof ZodBranded4) {
        return getDiscriminator4(type.unwrap());
      } else if (type instanceof ZodReadonly4) {
        return getDiscriminator4(type.unwrap());
      } else if (type instanceof ZodCatch4) {
        return getDiscriminator4(type._def.innerType);
      } else {
        return [];
      }
    };
    var ZodDiscriminatedUnion4 = class _ZodDiscriminatedUnion extends ZodType4 {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType4.object) {
          addIssueToContext4(ctx, {
            code: ZodIssueCode4.invalid_type,
            expected: ZodParsedType4.object,
            received: ctx.parsedType
          });
          return INVALID4;
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.optionsMap.get(discriminatorValue);
        if (!option) {
          addIssueToContext4(ctx, {
            code: ZodIssueCode4.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [discriminator]
          });
          return INVALID4;
        }
        if (ctx.common.async) {
          return option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
        } else {
          return option._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
        }
      }
      get discriminator() {
        return this._def.discriminator;
      }
      get options() {
        return this._def.options;
      }
      get optionsMap() {
        return this._def.optionsMap;
      }
      /**
       * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
       * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
       * have a different value for each object in the union.
       * @param discriminator the name of the discriminator property
       * @param types an array of object schemas
       * @param params
       */
      static create(discriminator, options, params) {
        const optionsMap = /* @__PURE__ */ new Map();
        for (const type of options) {
          const discriminatorValues = getDiscriminator4(type.shape[discriminator]);
          if (!discriminatorValues.length) {
            throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
          }
          for (const value of discriminatorValues) {
            if (optionsMap.has(value)) {
              throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
            }
            optionsMap.set(value, type);
          }
        }
        return new _ZodDiscriminatedUnion({
          typeName: ZodFirstPartyTypeKind4.ZodDiscriminatedUnion,
          discriminator,
          options,
          optionsMap,
          ...processCreateParams4(params)
        });
      }
    };
    function mergeValues4(a, b) {
      const aType = getParsedType4(a);
      const bType = getParsedType4(b);
      if (a === b) {
        return { valid: true, data: a };
      } else if (aType === ZodParsedType4.object && bType === ZodParsedType4.object) {
        const bKeys = util4.objectKeys(b);
        const sharedKeys = util4.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
        const newObj = { ...a, ...b };
        for (const key of sharedKeys) {
          const sharedValue = mergeValues4(a[key], b[key]);
          if (!sharedValue.valid) {
            return { valid: false };
          }
          newObj[key] = sharedValue.data;
        }
        return { valid: true, data: newObj };
      } else if (aType === ZodParsedType4.array && bType === ZodParsedType4.array) {
        if (a.length !== b.length) {
          return { valid: false };
        }
        const newArray = [];
        for (let index = 0; index < a.length; index++) {
          const itemA = a[index];
          const itemB = b[index];
          const sharedValue = mergeValues4(itemA, itemB);
          if (!sharedValue.valid) {
            return { valid: false };
          }
          newArray.push(sharedValue.data);
        }
        return { valid: true, data: newArray };
      } else if (aType === ZodParsedType4.date && bType === ZodParsedType4.date && +a === +b) {
        return { valid: true, data: a };
      } else {
        return { valid: false };
      }
    }
    var ZodIntersection4 = class extends ZodType4 {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const handleParsed = (parsedLeft, parsedRight) => {
          if (isAborted4(parsedLeft) || isAborted4(parsedRight)) {
            return INVALID4;
          }
          const merged = mergeValues4(parsedLeft.value, parsedRight.value);
          if (!merged.valid) {
            addIssueToContext4(ctx, {
              code: ZodIssueCode4.invalid_intersection_types
            });
            return INVALID4;
          }
          if (isDirty4(parsedLeft) || isDirty4(parsedRight)) {
            status.dirty();
          }
          return { status: status.value, value: merged.data };
        };
        if (ctx.common.async) {
          return Promise.all([
            this._def.left._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            }),
            this._def.right._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            })
          ]).then(([left, right]) => handleParsed(left, right));
        } else {
          return handleParsed(this._def.left._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }), this._def.right._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }));
        }
      }
    };
    ZodIntersection4.create = (left, right, params) => {
      return new ZodIntersection4({
        left,
        right,
        typeName: ZodFirstPartyTypeKind4.ZodIntersection,
        ...processCreateParams4(params)
      });
    };
    var ZodTuple4 = class _ZodTuple extends ZodType4 {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType4.array) {
          addIssueToContext4(ctx, {
            code: ZodIssueCode4.invalid_type,
            expected: ZodParsedType4.array,
            received: ctx.parsedType
          });
          return INVALID4;
        }
        if (ctx.data.length < this._def.items.length) {
          addIssueToContext4(ctx, {
            code: ZodIssueCode4.too_small,
            minimum: this._def.items.length,
            inclusive: true,
            exact: false,
            type: "array"
          });
          return INVALID4;
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
          addIssueToContext4(ctx, {
            code: ZodIssueCode4.too_big,
            maximum: this._def.items.length,
            inclusive: true,
            exact: false,
            type: "array"
          });
          status.dirty();
        }
        const items = [...ctx.data].map((item, itemIndex) => {
          const schema = this._def.items[itemIndex] || this._def.rest;
          if (!schema)
            return null;
          return schema._parse(new ParseInputLazyPath4(ctx, item, ctx.path, itemIndex));
        }).filter((x) => !!x);
        if (ctx.common.async) {
          return Promise.all(items).then((results) => {
            return ParseStatus4.mergeArray(status, results);
          });
        } else {
          return ParseStatus4.mergeArray(status, items);
        }
      }
      get items() {
        return this._def.items;
      }
      rest(rest) {
        return new _ZodTuple({
          ...this._def,
          rest
        });
      }
    };
    ZodTuple4.create = (schemas, params) => {
      if (!Array.isArray(schemas)) {
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      }
      return new ZodTuple4({
        items: schemas,
        typeName: ZodFirstPartyTypeKind4.ZodTuple,
        rest: null,
        ...processCreateParams4(params)
      });
    };
    var ZodRecord4 = class _ZodRecord extends ZodType4 {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType4.object) {
          addIssueToContext4(ctx, {
            code: ZodIssueCode4.invalid_type,
            expected: ZodParsedType4.object,
            received: ctx.parsedType
          });
          return INVALID4;
        }
        const pairs = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for (const key in ctx.data) {
          pairs.push({
            key: keyType._parse(new ParseInputLazyPath4(ctx, key, ctx.path, key)),
            value: valueType._parse(new ParseInputLazyPath4(ctx, ctx.data[key], ctx.path, key)),
            alwaysSet: key in ctx.data
          });
        }
        if (ctx.common.async) {
          return ParseStatus4.mergeObjectAsync(status, pairs);
        } else {
          return ParseStatus4.mergeObjectSync(status, pairs);
        }
      }
      get element() {
        return this._def.valueType;
      }
      static create(first, second, third) {
        if (second instanceof ZodType4) {
          return new _ZodRecord({
            keyType: first,
            valueType: second,
            typeName: ZodFirstPartyTypeKind4.ZodRecord,
            ...processCreateParams4(third)
          });
        }
        return new _ZodRecord({
          keyType: ZodString4.create(),
          valueType: first,
          typeName: ZodFirstPartyTypeKind4.ZodRecord,
          ...processCreateParams4(second)
        });
      }
    };
    var ZodMap4 = class extends ZodType4 {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType4.map) {
          addIssueToContext4(ctx, {
            code: ZodIssueCode4.invalid_type,
            expected: ZodParsedType4.map,
            received: ctx.parsedType
          });
          return INVALID4;
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs = [...ctx.data.entries()].map(([key, value], index) => {
          return {
            key: keyType._parse(new ParseInputLazyPath4(ctx, key, ctx.path, [index, "key"])),
            value: valueType._parse(new ParseInputLazyPath4(ctx, value, ctx.path, [index, "value"]))
          };
        });
        if (ctx.common.async) {
          const finalMap = /* @__PURE__ */ new Map();
          return Promise.resolve().then(async () => {
            for (const pair of pairs) {
              const key = await pair.key;
              const value = await pair.value;
              if (key.status === "aborted" || value.status === "aborted") {
                return INVALID4;
              }
              if (key.status === "dirty" || value.status === "dirty") {
                status.dirty();
              }
              finalMap.set(key.value, value.value);
            }
            return { status: status.value, value: finalMap };
          });
        } else {
          const finalMap = /* @__PURE__ */ new Map();
          for (const pair of pairs) {
            const key = pair.key;
            const value = pair.value;
            if (key.status === "aborted" || value.status === "aborted") {
              return INVALID4;
            }
            if (key.status === "dirty" || value.status === "dirty") {
              status.dirty();
            }
            finalMap.set(key.value, value.value);
          }
          return { status: status.value, value: finalMap };
        }
      }
    };
    ZodMap4.create = (keyType, valueType, params) => {
      return new ZodMap4({
        valueType,
        keyType,
        typeName: ZodFirstPartyTypeKind4.ZodMap,
        ...processCreateParams4(params)
      });
    };
    var ZodSet4 = class _ZodSet extends ZodType4 {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType4.set) {
          addIssueToContext4(ctx, {
            code: ZodIssueCode4.invalid_type,
            expected: ZodParsedType4.set,
            received: ctx.parsedType
          });
          return INVALID4;
        }
        const def = this._def;
        if (def.minSize !== null) {
          if (ctx.data.size < def.minSize.value) {
            addIssueToContext4(ctx, {
              code: ZodIssueCode4.too_small,
              minimum: def.minSize.value,
              type: "set",
              inclusive: true,
              exact: false,
              message: def.minSize.message
            });
            status.dirty();
          }
        }
        if (def.maxSize !== null) {
          if (ctx.data.size > def.maxSize.value) {
            addIssueToContext4(ctx, {
              code: ZodIssueCode4.too_big,
              maximum: def.maxSize.value,
              type: "set",
              inclusive: true,
              exact: false,
              message: def.maxSize.message
            });
            status.dirty();
          }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements2) {
          const parsedSet = /* @__PURE__ */ new Set();
          for (const element of elements2) {
            if (element.status === "aborted")
              return INVALID4;
            if (element.status === "dirty")
              status.dirty();
            parsedSet.add(element.value);
          }
          return { status: status.value, value: parsedSet };
        }
        const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath4(ctx, item, ctx.path, i)));
        if (ctx.common.async) {
          return Promise.all(elements).then((elements2) => finalizeSet(elements2));
        } else {
          return finalizeSet(elements);
        }
      }
      min(minSize, message) {
        return new _ZodSet({
          ...this._def,
          minSize: { value: minSize, message: errorUtil4.toString(message) }
        });
      }
      max(maxSize, message) {
        return new _ZodSet({
          ...this._def,
          maxSize: { value: maxSize, message: errorUtil4.toString(message) }
        });
      }
      size(size, message) {
        return this.min(size, message).max(size, message);
      }
      nonempty(message) {
        return this.min(1, message);
      }
    };
    ZodSet4.create = (valueType, params) => {
      return new ZodSet4({
        valueType,
        minSize: null,
        maxSize: null,
        typeName: ZodFirstPartyTypeKind4.ZodSet,
        ...processCreateParams4(params)
      });
    };
    var ZodFunction4 = class _ZodFunction extends ZodType4 {
      constructor() {
        super(...arguments);
        this.validate = this.implement;
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType4.function) {
          addIssueToContext4(ctx, {
            code: ZodIssueCode4.invalid_type,
            expected: ZodParsedType4.function,
            received: ctx.parsedType
          });
          return INVALID4;
        }
        function makeArgsIssue(args, error) {
          return makeIssue4({
            data: args,
            path: ctx.path,
            errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap4(), en_default4].filter((x) => !!x),
            issueData: {
              code: ZodIssueCode4.invalid_arguments,
              argumentsError: error
            }
          });
        }
        function makeReturnsIssue(returns, error) {
          return makeIssue4({
            data: returns,
            path: ctx.path,
            errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap4(), en_default4].filter((x) => !!x),
            issueData: {
              code: ZodIssueCode4.invalid_return_type,
              returnTypeError: error
            }
          });
        }
        const params = { errorMap: ctx.common.contextualErrorMap };
        const fn = ctx.data;
        if (this._def.returns instanceof ZodPromise4) {
          const me = this;
          return OK4(async function(...args) {
            const error = new ZodError4([]);
            const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
              error.addIssue(makeArgsIssue(args, e));
              throw error;
            });
            const result = await Reflect.apply(fn, this, parsedArgs);
            const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
              error.addIssue(makeReturnsIssue(result, e));
              throw error;
            });
            return parsedReturns;
          });
        } else {
          const me = this;
          return OK4(function(...args) {
            const parsedArgs = me._def.args.safeParse(args, params);
            if (!parsedArgs.success) {
              throw new ZodError4([makeArgsIssue(args, parsedArgs.error)]);
            }
            const result = Reflect.apply(fn, this, parsedArgs.data);
            const parsedReturns = me._def.returns.safeParse(result, params);
            if (!parsedReturns.success) {
              throw new ZodError4([makeReturnsIssue(result, parsedReturns.error)]);
            }
            return parsedReturns.data;
          });
        }
      }
      parameters() {
        return this._def.args;
      }
      returnType() {
        return this._def.returns;
      }
      args(...items) {
        return new _ZodFunction({
          ...this._def,
          args: ZodTuple4.create(items).rest(ZodUnknown4.create())
        });
      }
      returns(returnType) {
        return new _ZodFunction({
          ...this._def,
          returns: returnType
        });
      }
      implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
      }
      strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
      }
      static create(args, returns, params) {
        return new _ZodFunction({
          args: args ? args : ZodTuple4.create([]).rest(ZodUnknown4.create()),
          returns: returns || ZodUnknown4.create(),
          typeName: ZodFirstPartyTypeKind4.ZodFunction,
          ...processCreateParams4(params)
        });
      }
    };
    var ZodLazy4 = class extends ZodType4 {
      get schema() {
        return this._def.getter();
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
      }
    };
    ZodLazy4.create = (getter, params) => {
      return new ZodLazy4({
        getter,
        typeName: ZodFirstPartyTypeKind4.ZodLazy,
        ...processCreateParams4(params)
      });
    };
    var ZodLiteral4 = class extends ZodType4 {
      _parse(input) {
        if (input.data !== this._def.value) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext4(ctx, {
            received: ctx.data,
            code: ZodIssueCode4.invalid_literal,
            expected: this._def.value
          });
          return INVALID4;
        }
        return { status: "valid", value: input.data };
      }
      get value() {
        return this._def.value;
      }
    };
    ZodLiteral4.create = (value, params) => {
      return new ZodLiteral4({
        value,
        typeName: ZodFirstPartyTypeKind4.ZodLiteral,
        ...processCreateParams4(params)
      });
    };
    function createZodEnum4(values, params) {
      return new ZodEnum4({
        values,
        typeName: ZodFirstPartyTypeKind4.ZodEnum,
        ...processCreateParams4(params)
      });
    }
    var ZodEnum4 = class _ZodEnum extends ZodType4 {
      _parse(input) {
        if (typeof input.data !== "string") {
          const ctx = this._getOrReturnCtx(input);
          const expectedValues = this._def.values;
          addIssueToContext4(ctx, {
            expected: util4.joinValues(expectedValues),
            received: ctx.parsedType,
            code: ZodIssueCode4.invalid_type
          });
          return INVALID4;
        }
        if (!this._cache) {
          this._cache = new Set(this._def.values);
        }
        if (!this._cache.has(input.data)) {
          const ctx = this._getOrReturnCtx(input);
          const expectedValues = this._def.values;
          addIssueToContext4(ctx, {
            received: ctx.data,
            code: ZodIssueCode4.invalid_enum_value,
            options: expectedValues
          });
          return INVALID4;
        }
        return OK4(input.data);
      }
      get options() {
        return this._def.values;
      }
      get enum() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      get Values() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      get Enum() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      extract(values, newDef = this._def) {
        return _ZodEnum.create(values, {
          ...this._def,
          ...newDef
        });
      }
      exclude(values, newDef = this._def) {
        return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
          ...this._def,
          ...newDef
        });
      }
    };
    ZodEnum4.create = createZodEnum4;
    var ZodNativeEnum4 = class extends ZodType4 {
      _parse(input) {
        const nativeEnumValues = util4.getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== ZodParsedType4.string && ctx.parsedType !== ZodParsedType4.number) {
          const expectedValues = util4.objectValues(nativeEnumValues);
          addIssueToContext4(ctx, {
            expected: util4.joinValues(expectedValues),
            received: ctx.parsedType,
            code: ZodIssueCode4.invalid_type
          });
          return INVALID4;
        }
        if (!this._cache) {
          this._cache = new Set(util4.getValidEnumValues(this._def.values));
        }
        if (!this._cache.has(input.data)) {
          const expectedValues = util4.objectValues(nativeEnumValues);
          addIssueToContext4(ctx, {
            received: ctx.data,
            code: ZodIssueCode4.invalid_enum_value,
            options: expectedValues
          });
          return INVALID4;
        }
        return OK4(input.data);
      }
      get enum() {
        return this._def.values;
      }
    };
    ZodNativeEnum4.create = (values, params) => {
      return new ZodNativeEnum4({
        values,
        typeName: ZodFirstPartyTypeKind4.ZodNativeEnum,
        ...processCreateParams4(params)
      });
    };
    var ZodPromise4 = class extends ZodType4 {
      unwrap() {
        return this._def.type;
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType4.promise && ctx.common.async === false) {
          addIssueToContext4(ctx, {
            code: ZodIssueCode4.invalid_type,
            expected: ZodParsedType4.promise,
            received: ctx.parsedType
          });
          return INVALID4;
        }
        const promisified = ctx.parsedType === ZodParsedType4.promise ? ctx.data : Promise.resolve(ctx.data);
        return OK4(promisified.then((data) => {
          return this._def.type.parseAsync(data, {
            path: ctx.path,
            errorMap: ctx.common.contextualErrorMap
          });
        }));
      }
    };
    ZodPromise4.create = (schema, params) => {
      return new ZodPromise4({
        type: schema,
        typeName: ZodFirstPartyTypeKind4.ZodPromise,
        ...processCreateParams4(params)
      });
    };
    var ZodEffects4 = class extends ZodType4 {
      innerType() {
        return this._def.schema;
      }
      sourceType() {
        return this._def.schema._def.typeName === ZodFirstPartyTypeKind4.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const effect = this._def.effect || null;
        const checkCtx = {
          addIssue: (arg) => {
            addIssueToContext4(ctx, arg);
            if (arg.fatal) {
              status.abort();
            } else {
              status.dirty();
            }
          },
          get path() {
            return ctx.path;
          }
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "preprocess") {
          const processed = effect.transform(ctx.data, checkCtx);
          if (ctx.common.async) {
            return Promise.resolve(processed).then(async (processed2) => {
              if (status.value === "aborted")
                return INVALID4;
              const result = await this._def.schema._parseAsync({
                data: processed2,
                path: ctx.path,
                parent: ctx
              });
              if (result.status === "aborted")
                return INVALID4;
              if (result.status === "dirty")
                return DIRTY4(result.value);
              if (status.value === "dirty")
                return DIRTY4(result.value);
              return result;
            });
          } else {
            if (status.value === "aborted")
              return INVALID4;
            const result = this._def.schema._parseSync({
              data: processed,
              path: ctx.path,
              parent: ctx
            });
            if (result.status === "aborted")
              return INVALID4;
            if (result.status === "dirty")
              return DIRTY4(result.value);
            if (status.value === "dirty")
              return DIRTY4(result.value);
            return result;
          }
        }
        if (effect.type === "refinement") {
          const executeRefinement = (acc) => {
            const result = effect.refinement(acc, checkCtx);
            if (ctx.common.async) {
              return Promise.resolve(result);
            }
            if (result instanceof Promise) {
              throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            }
            return acc;
          };
          if (ctx.common.async === false) {
            const inner = this._def.schema._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (inner.status === "aborted")
              return INVALID4;
            if (inner.status === "dirty")
              status.dirty();
            executeRefinement(inner.value);
            return { status: status.value, value: inner.value };
          } else {
            return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
              if (inner.status === "aborted")
                return INVALID4;
              if (inner.status === "dirty")
                status.dirty();
              return executeRefinement(inner.value).then(() => {
                return { status: status.value, value: inner.value };
              });
            });
          }
        }
        if (effect.type === "transform") {
          if (ctx.common.async === false) {
            const base = this._def.schema._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (!isValid4(base))
              return INVALID4;
            const result = effect.transform(base.value, checkCtx);
            if (result instanceof Promise) {
              throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
            }
            return { status: status.value, value: result };
          } else {
            return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
              if (!isValid4(base))
                return INVALID4;
              return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
                status: status.value,
                value: result
              }));
            });
          }
        }
        util4.assertNever(effect);
      }
    };
    ZodEffects4.create = (schema, effect, params) => {
      return new ZodEffects4({
        schema,
        typeName: ZodFirstPartyTypeKind4.ZodEffects,
        effect,
        ...processCreateParams4(params)
      });
    };
    ZodEffects4.createWithPreprocess = (preprocess, schema, params) => {
      return new ZodEffects4({
        schema,
        effect: { type: "preprocess", transform: preprocess },
        typeName: ZodFirstPartyTypeKind4.ZodEffects,
        ...processCreateParams4(params)
      });
    };
    var ZodOptional4 = class extends ZodType4 {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType4.undefined) {
          return OK4(void 0);
        }
        return this._def.innerType._parse(input);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodOptional4.create = (type, params) => {
      return new ZodOptional4({
        innerType: type,
        typeName: ZodFirstPartyTypeKind4.ZodOptional,
        ...processCreateParams4(params)
      });
    };
    var ZodNullable4 = class extends ZodType4 {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType4.null) {
          return OK4(null);
        }
        return this._def.innerType._parse(input);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodNullable4.create = (type, params) => {
      return new ZodNullable4({
        innerType: type,
        typeName: ZodFirstPartyTypeKind4.ZodNullable,
        ...processCreateParams4(params)
      });
    };
    var ZodDefault4 = class extends ZodType4 {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === ZodParsedType4.undefined) {
          data = this._def.defaultValue();
        }
        return this._def.innerType._parse({
          data,
          path: ctx.path,
          parent: ctx
        });
      }
      removeDefault() {
        return this._def.innerType;
      }
    };
    ZodDefault4.create = (type, params) => {
      return new ZodDefault4({
        innerType: type,
        typeName: ZodFirstPartyTypeKind4.ZodDefault,
        defaultValue: typeof params.default === "function" ? params.default : () => params.default,
        ...processCreateParams4(params)
      });
    };
    var ZodCatch4 = class extends ZodType4 {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const newCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          }
        };
        const result = this._def.innerType._parse({
          data: newCtx.data,
          path: newCtx.path,
          parent: {
            ...newCtx
          }
        });
        if (isAsync4(result)) {
          return result.then((result2) => {
            return {
              status: "valid",
              value: result2.status === "valid" ? result2.value : this._def.catchValue({
                get error() {
                  return new ZodError4(newCtx.common.issues);
                },
                input: newCtx.data
              })
            };
          });
        } else {
          return {
            status: "valid",
            value: result.status === "valid" ? result.value : this._def.catchValue({
              get error() {
                return new ZodError4(newCtx.common.issues);
              },
              input: newCtx.data
            })
          };
        }
      }
      removeCatch() {
        return this._def.innerType;
      }
    };
    ZodCatch4.create = (type, params) => {
      return new ZodCatch4({
        innerType: type,
        typeName: ZodFirstPartyTypeKind4.ZodCatch,
        catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
        ...processCreateParams4(params)
      });
    };
    var ZodNaN4 = class extends ZodType4 {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType4.nan) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext4(ctx, {
            code: ZodIssueCode4.invalid_type,
            expected: ZodParsedType4.nan,
            received: ctx.parsedType
          });
          return INVALID4;
        }
        return { status: "valid", value: input.data };
      }
    };
    ZodNaN4.create = (params) => {
      return new ZodNaN4({
        typeName: ZodFirstPartyTypeKind4.ZodNaN,
        ...processCreateParams4(params)
      });
    };
    var BRAND4 = Symbol("zod_brand");
    var ZodBranded4 = class extends ZodType4 {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
          data,
          path: ctx.path,
          parent: ctx
        });
      }
      unwrap() {
        return this._def.type;
      }
    };
    var ZodPipeline4 = class _ZodPipeline extends ZodType4 {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.common.async) {
          const handleAsync = async () => {
            const inResult = await this._def.in._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (inResult.status === "aborted")
              return INVALID4;
            if (inResult.status === "dirty") {
              status.dirty();
              return DIRTY4(inResult.value);
            } else {
              return this._def.out._parseAsync({
                data: inResult.value,
                path: ctx.path,
                parent: ctx
              });
            }
          };
          return handleAsync();
        } else {
          const inResult = this._def.in._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inResult.status === "aborted")
            return INVALID4;
          if (inResult.status === "dirty") {
            status.dirty();
            return {
              status: "dirty",
              value: inResult.value
            };
          } else {
            return this._def.out._parseSync({
              data: inResult.value,
              path: ctx.path,
              parent: ctx
            });
          }
        }
      }
      static create(a, b) {
        return new _ZodPipeline({
          in: a,
          out: b,
          typeName: ZodFirstPartyTypeKind4.ZodPipeline
        });
      }
    };
    var ZodReadonly4 = class extends ZodType4 {
      _parse(input) {
        const result = this._def.innerType._parse(input);
        const freeze = (data) => {
          if (isValid4(data)) {
            data.value = Object.freeze(data.value);
          }
          return data;
        };
        return isAsync4(result) ? result.then((data) => freeze(data)) : freeze(result);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodReadonly4.create = (type, params) => {
      return new ZodReadonly4({
        innerType: type,
        typeName: ZodFirstPartyTypeKind4.ZodReadonly,
        ...processCreateParams4(params)
      });
    };
    function cleanParams4(params, data) {
      const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
      const p2 = typeof p === "string" ? { message: p } : p;
      return p2;
    }
    function custom4(check, _params = {}, fatal) {
      if (check)
        return ZodAny4.create().superRefine((data, ctx) => {
          const r = check(data);
          if (r instanceof Promise) {
            return r.then((r2) => {
              if (!r2) {
                const params = cleanParams4(_params, data);
                const _fatal = params.fatal ?? fatal ?? true;
                ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
              }
            });
          }
          if (!r) {
            const params = cleanParams4(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
          return;
        });
      return ZodAny4.create();
    }
    var late4 = {
      object: ZodObject4.lazycreate
    };
    var ZodFirstPartyTypeKind4;
    (function(ZodFirstPartyTypeKind5) {
      ZodFirstPartyTypeKind5["ZodString"] = "ZodString";
      ZodFirstPartyTypeKind5["ZodNumber"] = "ZodNumber";
      ZodFirstPartyTypeKind5["ZodNaN"] = "ZodNaN";
      ZodFirstPartyTypeKind5["ZodBigInt"] = "ZodBigInt";
      ZodFirstPartyTypeKind5["ZodBoolean"] = "ZodBoolean";
      ZodFirstPartyTypeKind5["ZodDate"] = "ZodDate";
      ZodFirstPartyTypeKind5["ZodSymbol"] = "ZodSymbol";
      ZodFirstPartyTypeKind5["ZodUndefined"] = "ZodUndefined";
      ZodFirstPartyTypeKind5["ZodNull"] = "ZodNull";
      ZodFirstPartyTypeKind5["ZodAny"] = "ZodAny";
      ZodFirstPartyTypeKind5["ZodUnknown"] = "ZodUnknown";
      ZodFirstPartyTypeKind5["ZodNever"] = "ZodNever";
      ZodFirstPartyTypeKind5["ZodVoid"] = "ZodVoid";
      ZodFirstPartyTypeKind5["ZodArray"] = "ZodArray";
      ZodFirstPartyTypeKind5["ZodObject"] = "ZodObject";
      ZodFirstPartyTypeKind5["ZodUnion"] = "ZodUnion";
      ZodFirstPartyTypeKind5["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
      ZodFirstPartyTypeKind5["ZodIntersection"] = "ZodIntersection";
      ZodFirstPartyTypeKind5["ZodTuple"] = "ZodTuple";
      ZodFirstPartyTypeKind5["ZodRecord"] = "ZodRecord";
      ZodFirstPartyTypeKind5["ZodMap"] = "ZodMap";
      ZodFirstPartyTypeKind5["ZodSet"] = "ZodSet";
      ZodFirstPartyTypeKind5["ZodFunction"] = "ZodFunction";
      ZodFirstPartyTypeKind5["ZodLazy"] = "ZodLazy";
      ZodFirstPartyTypeKind5["ZodLiteral"] = "ZodLiteral";
      ZodFirstPartyTypeKind5["ZodEnum"] = "ZodEnum";
      ZodFirstPartyTypeKind5["ZodEffects"] = "ZodEffects";
      ZodFirstPartyTypeKind5["ZodNativeEnum"] = "ZodNativeEnum";
      ZodFirstPartyTypeKind5["ZodOptional"] = "ZodOptional";
      ZodFirstPartyTypeKind5["ZodNullable"] = "ZodNullable";
      ZodFirstPartyTypeKind5["ZodDefault"] = "ZodDefault";
      ZodFirstPartyTypeKind5["ZodCatch"] = "ZodCatch";
      ZodFirstPartyTypeKind5["ZodPromise"] = "ZodPromise";
      ZodFirstPartyTypeKind5["ZodBranded"] = "ZodBranded";
      ZodFirstPartyTypeKind5["ZodPipeline"] = "ZodPipeline";
      ZodFirstPartyTypeKind5["ZodReadonly"] = "ZodReadonly";
    })(ZodFirstPartyTypeKind4 || (ZodFirstPartyTypeKind4 = {}));
    var instanceOfType4 = (cls, params = {
      message: `Input not instance of ${cls.name}`
    }) => custom4((data) => data instanceof cls, params);
    var stringType4 = ZodString4.create;
    var numberType4 = ZodNumber4.create;
    var nanType4 = ZodNaN4.create;
    var bigIntType4 = ZodBigInt4.create;
    var booleanType4 = ZodBoolean4.create;
    var dateType4 = ZodDate4.create;
    var symbolType4 = ZodSymbol4.create;
    var undefinedType4 = ZodUndefined4.create;
    var nullType4 = ZodNull4.create;
    var anyType4 = ZodAny4.create;
    var unknownType4 = ZodUnknown4.create;
    var neverType4 = ZodNever4.create;
    var voidType4 = ZodVoid4.create;
    var arrayType4 = ZodArray4.create;
    var objectType4 = ZodObject4.create;
    var strictObjectType4 = ZodObject4.strictCreate;
    var unionType4 = ZodUnion4.create;
    var discriminatedUnionType4 = ZodDiscriminatedUnion4.create;
    var intersectionType4 = ZodIntersection4.create;
    var tupleType4 = ZodTuple4.create;
    var recordType4 = ZodRecord4.create;
    var mapType4 = ZodMap4.create;
    var setType4 = ZodSet4.create;
    var functionType4 = ZodFunction4.create;
    var lazyType4 = ZodLazy4.create;
    var literalType4 = ZodLiteral4.create;
    var enumType4 = ZodEnum4.create;
    var nativeEnumType4 = ZodNativeEnum4.create;
    var promiseType4 = ZodPromise4.create;
    var effectsType4 = ZodEffects4.create;
    var optionalType4 = ZodOptional4.create;
    var nullableType4 = ZodNullable4.create;
    var preprocessType4 = ZodEffects4.createWithPreprocess;
    var pipelineType4 = ZodPipeline4.create;
    var ostring4 = () => stringType4().optional();
    var onumber4 = () => numberType4().optional();
    var oboolean4 = () => booleanType4().optional();
    var coerce4 = {
      string: (arg) => ZodString4.create({ ...arg, coerce: true }),
      number: (arg) => ZodNumber4.create({ ...arg, coerce: true }),
      boolean: (arg) => ZodBoolean4.create({
        ...arg,
        coerce: true
      }),
      bigint: (arg) => ZodBigInt4.create({ ...arg, coerce: true }),
      date: (arg) => ZodDate4.create({ ...arg, coerce: true })
    };
    var NEVER4 = INVALID4;
    var BudgetScopeTypeSchema = external_exports4.enum([
      "tenant",
      "project",
      "agent",
      "model",
      "custom"
    ]);
    var BudgetScopeSchema = external_exports4.object({
      type: BudgetScopeTypeSchema,
      tenant_id: external_exports4.string(),
      project_id: external_exports4.string().optional(),
      agent_id: external_exports4.string().optional(),
      model: external_exports4.string().optional(),
      dimensions: external_exports4.record(external_exports4.unknown()).optional()
    });
    var BudgetSchema = external_exports4.object({
      budget_id: external_exports4.string(),
      name: external_exports4.string(),
      limit: external_exports4.number().positive(),
      currency: external_exports4.string().default("USD"),
      period_start: external_exports4.string().datetime(),
      period_end: external_exports4.string().datetime(),
      warning_threshold: external_exports4.number().min(0).max(1).default(0.8),
      critical_threshold: external_exports4.number().min(0).max(1).default(0.95),
      gating_threshold: external_exports4.number().min(0).max(1).default(1),
      enable_forecasting: external_exports4.boolean().default(false),
      is_soft_limit: external_exports4.boolean().default(true),
      scope: BudgetScopeSchema
    });
    var DailySpendSchema = external_exports4.object({
      date: external_exports4.string().datetime(),
      spend: external_exports4.number().nonnegative()
    });
    var SpendDataSchema = external_exports4.object({
      current_spend: external_exports4.number().nonnegative(),
      currency: external_exports4.string().default("USD"),
      daily_spend_history: external_exports4.array(DailySpendSchema).default([]),
      data_completeness: external_exports4.number().min(0).max(1),
      data_as_of: external_exports4.string().datetime()
    });
    var BudgetEnforcementInputSchema = external_exports4.object({
      request_id: external_exports4.string().uuid(),
      budget: BudgetSchema,
      spend_data: SpendDataSchema,
      execution_ref: external_exports4.string().optional(),
      include_forecast: external_exports4.boolean().default(false),
      timestamp: external_exports4.string().datetime()
    });
    var SignalTypeSchema = external_exports4.enum(["advisory", "warning", "gating"]);
    var SeveritySchema = external_exports4.enum(["info", "warning", "critical", "gating"]);
    var ViolationTypeSchema = external_exports4.enum([
      "none",
      "approaching_limit",
      "limit_exceeded",
      "projected_exceedance",
      "unusual_pattern"
    ]);
    var RecommendedActionSchema = external_exports4.enum([
      "none",
      "monitor",
      "review",
      "reduce_spend",
      "consider_gating",
      "gate"
    ]);
    var BudgetAlertSchema = external_exports4.object({
      alert_type: external_exports4.string(),
      severity: SeveritySchema,
      message: external_exports4.string(),
      timestamp: external_exports4.string().datetime()
    });
    var BudgetEnforcementOutputSchema = external_exports4.object({
      signal_id: external_exports4.string().uuid(),
      budget_id: external_exports4.string(),
      signal_type: SignalTypeSchema,
      severity: SeveritySchema,
      violation_type: ViolationTypeSchema,
      message: external_exports4.string(),
      current_spend: external_exports4.number().nonnegative(),
      budget_limit: external_exports4.number().positive(),
      remaining_budget: external_exports4.number(),
      utilization_percent: external_exports4.number().min(0),
      projected_spend: external_exports4.number().nonnegative().optional(),
      projected_utilization: external_exports4.number().optional(),
      days_remaining: external_exports4.number().int(),
      daily_average: external_exports4.number().nonnegative(),
      recommended_action: RecommendedActionSchema,
      alerts: external_exports4.array(BudgetAlertSchema).default([]),
      timestamp: external_exports4.string().datetime()
    });
    var BudgetConstraintSchema = external_exports4.object({
      constraint_type: external_exports4.string(),
      violated: external_exports4.boolean(),
      current_value: external_exports4.string(),
      threshold_value: external_exports4.string(),
      utilization_percent: external_exports4.number()
    });
    var BudgetDecisionEventSchema = external_exports4.object({
      id: external_exports4.string().uuid(),
      agent_id: external_exports4.literal("budget-enforcement-agent"),
      agent_version: external_exports4.string(),
      decision_type: external_exports4.literal("budget_constraint_evaluation"),
      inputs_hash: external_exports4.string(),
      outputs: BudgetEnforcementOutputSchema,
      confidence: external_exports4.number().min(0).max(1),
      constraints_applied: external_exports4.array(BudgetConstraintSchema),
      execution_ref: external_exports4.string(),
      timestamp: external_exports4.string().datetime()
    });
    var BudgetErrorCodeSchema = external_exports4.enum([
      "VALIDATION_ERROR",
      "PERSISTENCE_ERROR",
      "FORECASTING_ERROR",
      "INTERNAL_ERROR"
    ]);
    var BudgetErrorSchema = external_exports4.object({
      code: BudgetErrorCodeSchema,
      message: external_exports4.string(),
      details: external_exports4.record(external_exports4.unknown()).optional(),
      timestamp: external_exports4.string().datetime()
    });
    var ForecastGranularitySchema = external_exports4.enum([
      "hourly",
      "daily",
      "weekly",
      "monthly"
    ]);
    var HistoricalDataPointSchema = external_exports4.object({
      timestamp: external_exports4.string().datetime(),
      total_cost: external_exports4.number().nonnegative(),
      by_provider: external_exports4.record(external_exports4.number().nonnegative()).optional(),
      by_model: external_exports4.record(external_exports4.number().nonnegative()).optional(),
      total_tokens: external_exports4.number().int().nonnegative().optional(),
      request_count: external_exports4.number().int().nonnegative().optional()
    });
    var ForecastConstraintsSchema = external_exports4.object({
      budget_cap: external_exports4.number().positive().optional(),
      roi_threshold: external_exports4.number().optional(),
      max_cost_per_period: external_exports4.number().positive().optional(),
      max_growth_rate: external_exports4.number().min(0).max(100).optional(),
      min_confidence: external_exports4.number().min(0).max(1).optional()
    });
    var ForecastMetadataSchema = external_exports4.object({
      organization_id: external_exports4.string().optional(),
      project_id: external_exports4.string().optional(),
      execution_ref: external_exports4.string().optional(),
      source: external_exports4.string().optional(),
      tags: external_exports4.array(external_exports4.string()).default([])
    });
    var CostForecastInputSchema = external_exports4.object({
      historical_data: external_exports4.array(HistoricalDataPointSchema).min(7, {
        message: "At least 7 data points required for forecasting"
      }),
      forecast_horizon_days: external_exports4.number().int().min(1).max(365),
      granularity: ForecastGranularitySchema.default("daily"),
      confidence_level: external_exports4.number().min(0).max(1).default(0.95),
      constraints: ForecastConstraintsSchema.default({}),
      metadata: ForecastMetadataSchema.default({}),
      preferred_model: external_exports4.string().optional()
    });
    var GrowthPatternSchema = external_exports4.enum([
      "linear",
      "exponential",
      "stable",
      "declining",
      "seasonal",
      "volatile"
    ]);
    var RiskLevelSchema = external_exports4.enum([
      "low",
      "medium",
      "high",
      "critical"
    ]);
    var ForecastProjectionSchema = external_exports4.object({
      timestamp: external_exports4.string().datetime(),
      projected_cost: external_exports4.number().nonnegative(),
      lower_bound: external_exports4.number().nonnegative(),
      upper_bound: external_exports4.number().nonnegative(),
      cumulative_cost: external_exports4.number().nonnegative(),
      growth_rate: external_exports4.number().optional()
    });
    var RiskIndicatorSchema = external_exports4.object({
      risk_type: external_exports4.string(),
      level: RiskLevelSchema,
      description: external_exports4.string(),
      probability: external_exports4.number().min(0).max(1),
      potential_impact: external_exports4.number().nonnegative().optional(),
      recommendation: external_exports4.string().optional()
    });
    var ConstraintResultSchema = external_exports4.object({
      satisfied: external_exports4.boolean(),
      constraint_value: external_exports4.string(),
      actual_value: external_exports4.string(),
      margin: external_exports4.string().optional(),
      breach_date: external_exports4.string().datetime().optional()
    });
    var ConstraintsEvaluationSchema = external_exports4.object({
      budget_cap: ConstraintResultSchema.optional(),
      roi_threshold: ConstraintResultSchema.optional(),
      max_cost_per_period: ConstraintResultSchema.optional(),
      growth_rate: ConstraintResultSchema.optional()
    });
    var HistoricalSummarySchema = external_exports4.object({
      data_points: external_exports4.number().int().nonnegative(),
      period_start: external_exports4.string().datetime(),
      period_end: external_exports4.string().datetime(),
      total_cost: external_exports4.number().nonnegative(),
      average_cost: external_exports4.number().nonnegative(),
      std_deviation: external_exports4.number().optional()
    });
    var CostForecastOutputSchema = external_exports4.object({
      projections: external_exports4.array(ForecastProjectionSchema).min(1),
      total_forecasted_cost: external_exports4.number().nonnegative(),
      average_daily_cost: external_exports4.number().nonnegative(),
      peak_daily_cost: external_exports4.number().nonnegative(),
      risk_indicators: external_exports4.array(RiskIndicatorSchema),
      growth_pattern: GrowthPatternSchema,
      average_growth_rate: external_exports4.number(),
      model_used: external_exports4.string(),
      confidence: external_exports4.number().min(0).max(1),
      confidence_level: external_exports4.number().min(0).max(1),
      constraints_evaluation: ConstraintsEvaluationSchema,
      generated_at: external_exports4.string().datetime(),
      historical_summary: HistoricalSummarySchema
    });
    var ForecastConstraintAppliedSchema = external_exports4.object({
      constraint_type: external_exports4.string(),
      name: external_exports4.string(),
      value: external_exports4.unknown(),
      satisfied: external_exports4.boolean(),
      impact: external_exports4.string().optional()
    });
    var ForecastDecisionEventSchema = external_exports4.object({
      id: external_exports4.string().uuid(),
      agent_id: external_exports4.literal("cost-forecasting-agent"),
      agent_version: external_exports4.string(),
      decision_type: external_exports4.literal("cost_forecast"),
      inputs_hash: external_exports4.string(),
      outputs: CostForecastOutputSchema,
      confidence: external_exports4.number().min(0).max(1),
      constraints_applied: external_exports4.array(ForecastConstraintAppliedSchema),
      execution_ref: external_exports4.string().optional(),
      timestamp: external_exports4.string().datetime(),
      organization_id: external_exports4.string().optional(),
      project_id: external_exports4.string().optional(),
      metadata: external_exports4.record(external_exports4.unknown()).optional()
    });
    var ForecastErrorCodeSchema = external_exports4.enum([
      "INSUFFICIENT_DATA",
      "VALIDATION_ERROR",
      "MODEL_ERROR",
      "PERSISTENCE_ERROR",
      "INTERNAL_ERROR"
    ]);
    var ForecastErrorSchema = external_exports4.object({
      code: ForecastErrorCodeSchema,
      message: external_exports4.string(),
      details: external_exports4.record(external_exports4.unknown()).optional(),
      timestamp: external_exports4.string().datetime()
    });
    var SERVICE_NAME = "costops-agents";
    var VERSION = "1.0.0";
    var AGENT_NAMES = ["attribution", "forecast", "budget", "roi", "tradeoff"];
    var ROUTE_MAP = {
      "/v1/costops/attribution": "attribution",
      "/v1/costops/forecast": "forecast",
      "/v1/costops/budget": "budget",
      "/v1/costops/roi": "roi",
      "/v1/costops/tradeoff": "tradeoff"
    };
    var CORE_API_URL = process.env.CORE_API_URL || "";
    async function handler22(req, res) {
      res.set("Access-Control-Allow-Origin", "*");
      res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
      res.set(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, X-Correlation-ID, X-Trace-ID, X-Execution-ID, X-Parent-Span-ID"
      );
      res.set("Access-Control-Max-Age", "3600");
      if (req.method === "OPTIONS") {
        res.status(204).send("");
        return;
      }
      const metadata = buildExecutionMetadata(req);
      if (req.path === "/v1/costops/health" && req.method === "GET") {
        handleHealth(res, metadata);
        return;
      }
      const agentName = ROUTE_MAP[req.path];
      if (!agentName) {
        res.status(404).json({
          error: { code: "NOT_FOUND", message: `Unknown route: ${req.method} ${req.path}` },
          execution_metadata: metadata,
          layers_executed: [
            { layer: "AGENT_ROUTING", status: "failed" }
          ]
        });
        return;
      }
      if (req.method !== "POST") {
        res.status(405).json({
          error: { code: "METHOD_NOT_ALLOWED", message: "Only POST method is allowed for agent endpoints" },
          execution_metadata: metadata,
          layers_executed: [
            { layer: "AGENT_ROUTING", status: "failed" }
          ]
        });
        return;
      }
      await dispatchToAgent(agentName, req, res, metadata);
    }
    function buildExecutionMetadata(req) {
      return {
        trace_id: req.headers["x-correlation-id"] || (0, import_crypto6.randomUUID)(),
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        service: SERVICE_NAME,
        execution_id: (0, import_crypto6.randomUUID)()
      };
    }
    function buildLayers(agentName, status, durationMs) {
      return [
        { layer: "AGENT_ROUTING", status: "completed" },
        {
          layer: `COSTOPS_${agentName.toUpperCase()}`,
          status,
          duration_ms: durationMs
        }
      ];
    }
    function handleHealth(res, metadata) {
      const agents = AGENT_NAMES.map((name) => ({
        name,
        status: "healthy"
      }));
      res.status(200).json({
        status: "healthy",
        service: SERVICE_NAME,
        version: VERSION,
        agents,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        execution_metadata: metadata,
        layers_executed: [
          { layer: "AGENT_ROUTING", status: "completed" }
        ]
      });
    }
    function createResponseCapture() {
      const capture = {
        statusCode: 200,
        body: null,
        sent: false
      };
      const proxy = {
        status(code) {
          capture.statusCode = code;
          return proxy;
        },
        json(body) {
          capture.body = body;
          capture.sent = true;
          return proxy;
        },
        send(body) {
          capture.body = body;
          capture.sent = true;
          return proxy;
        },
        set(_key, _value) {
          return proxy;
        },
        setHeader(_key, _value) {
          return proxy;
        },
        header(_key, _value) {
          return proxy;
        },
        end() {
          capture.sent = true;
          return proxy;
        }
      };
      return { proxy, capture };
    }
    async function dispatchToAgent(agentName, req, res, metadata) {
      const startTime = Date.now();
      try {
        const { proxy, capture } = createResponseCapture();
        const modifiedReq = Object.create(req);
        Object.defineProperty(modifiedReq, "path", { value: "/", writable: true });
        switch (agentName) {
          case "attribution":
            await costAttributionHandler(modifiedReq, proxy);
            break;
          case "roi":
            await roiEstimationAgent(modifiedReq, proxy);
            break;
          case "tradeoff":
            await handler2(modifiedReq, proxy);
            break;
          case "budget":
            await handleBudgetProxy(req, proxy);
            break;
          case "forecast":
            await handleForecastProxy(req, proxy);
            break;
        }
        const durationMs = Date.now() - startTime;
        const responseBody = typeof capture.body === "object" && capture.body !== null ? capture.body : { data: capture.body };
        res.status(capture.statusCode).json({
          ...responseBody,
          execution_metadata: metadata,
          layers_executed: buildLayers(agentName, "completed", durationMs)
        });
      } catch (error) {
        const durationMs = Date.now() - startTime;
        const message = error instanceof Error ? error.message : "Internal agent error";
        console.error(`[${SERVICE_NAME}] Agent ${agentName} error:`, error);
        res.status(500).json({
          error: { code: "AGENT_ERROR", message },
          execution_metadata: metadata,
          layers_executed: buildLayers(agentName, "failed", durationMs)
        });
      }
    }
    async function handleBudgetProxy(req, proxy) {
      const parseResult = BudgetEnforcementInputSchema.safeParse(req.body);
      if (!parseResult.success) {
        proxy.status(400).json({
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: "Input validation failed",
            details: { errors: parseResult.error.errors },
            timestamp: (/* @__PURE__ */ new Date()).toISOString()
          }
        });
        return;
      }
      if (!CORE_API_URL) {
        proxy.status(503).json({
          success: false,
          error: {
            code: "SERVICE_UNAVAILABLE",
            message: "Budget enforcement backend not configured (set CORE_API_URL)",
            timestamp: (/* @__PURE__ */ new Date()).toISOString()
          }
        });
        return;
      }
      await proxyToBackend(
        "/api/v1/agents/budget-enforcement/analyze",
        req,
        proxy
      );
    }
    async function handleForecastProxy(req, proxy) {
      const parseResult = CostForecastInputSchema.safeParse(req.body);
      if (!parseResult.success) {
        proxy.status(400).json({
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: "Input validation failed",
            details: { errors: parseResult.error.errors },
            timestamp: (/* @__PURE__ */ new Date()).toISOString()
          }
        });
        return;
      }
      if (!CORE_API_URL) {
        proxy.status(503).json({
          success: false,
          error: {
            code: "SERVICE_UNAVAILABLE",
            message: "Cost forecasting backend not configured (set CORE_API_URL)",
            timestamp: (/* @__PURE__ */ new Date()).toISOString()
          }
        });
        return;
      }
      await proxyToBackend(
        "/api/v1/agents/cost-forecasting/forecast",
        req,
        proxy
      );
    }
    async function proxyToBackend(path, req, proxy) {
      try {
        const headers = {
          "Content-Type": "application/json"
        };
        const forwardHeaders = [
          "x-execution-id",
          "x-parent-span-id",
          "x-cloud-trace-context",
          "x-correlation-id",
          "authorization"
        ];
        for (const header of forwardHeaders) {
          const value = req.headers[header];
          if (typeof value === "string") {
            headers[header] = value;
          }
        }
        const response = await fetch(`${CORE_API_URL}${path}`, {
          method: "POST",
          headers,
          body: JSON.stringify(req.body),
          signal: AbortSignal.timeout(3e4)
        });
        const body = await response.json();
        proxy.status(response.status).json(body);
      } catch (error) {
        const message = error instanceof Error ? error.message : "Backend request failed";
        proxy.status(502).json({
          success: false,
          error: {
            code: "BACKEND_ERROR",
            message,
            timestamp: (/* @__PURE__ */ new Date()).toISOString()
          }
        });
      }
    }
    var ExecutionMetadataSchema = external_exports4.object({
      trace_id: external_exports4.string().uuid(),
      timestamp: external_exports4.string().datetime(),
      service: external_exports4.literal("costops-agents"),
      execution_id: external_exports4.string().uuid()
    });
    var LayerStatusSchema = external_exports4.enum(["completed", "failed"]);
    var LayerExecutedSchema = external_exports4.object({
      layer: external_exports4.string(),
      status: LayerStatusSchema,
      duration_ms: external_exports4.number().nonnegative().optional()
    });
    var AgentHealthSchema = external_exports4.object({
      name: external_exports4.string(),
      status: external_exports4.enum(["healthy", "degraded", "unavailable"])
    });
    var HealthResponseSchema = external_exports4.object({
      status: external_exports4.enum(["healthy", "degraded", "unhealthy"]),
      service: external_exports4.literal("costops-agents"),
      version: external_exports4.string(),
      agents: external_exports4.array(AgentHealthSchema),
      timestamp: external_exports4.string().datetime(),
      execution_metadata: ExecutionMetadataSchema,
      layers_executed: external_exports4.array(LayerExecutedSchema)
    });
    var WrappedResponseSchema = external_exports4.object({
      execution_metadata: ExecutionMetadataSchema,
      layers_executed: external_exports4.array(LayerExecutedSchema)
    }).passthrough();
    var CONTRACT_VERSION = "1.0.0";
    (0, import_functions_framework.http)("handler", handler22);
  }
});

// src/handler.test.ts
var import_node_test = require("node:test");
var import_strict = __toESM(require("node:assert/strict"));
var { handler } = require_dist();
function createMockReq(overrides) {
  return {
    method: overrides.method || "POST",
    path: overrides.path || "/",
    body: overrides.body || {},
    headers: overrides.headers || {},
    ip: "127.0.0.1",
    query: {}
  };
}
function createMockRes() {
  const data = { statusCode: 200, body: null, headers: {} };
  const res = {
    status(code) {
      data.statusCode = code;
      return res;
    },
    json(body) {
      data.body = body;
      return res;
    },
    send(body) {
      data.body = body;
      return res;
    },
    set(key, value) {
      data.headers[key] = value;
      return res;
    },
    setHeader(key, value) {
      data.headers[key] = value;
      return res;
    }
  };
  return { res, result: () => data };
}
function assertExecutionMetadata(body) {
  import_strict.default.ok(body.execution_metadata, "Response must include execution_metadata");
  import_strict.default.ok(body.execution_metadata.trace_id, "Must have trace_id");
  import_strict.default.ok(body.execution_metadata.timestamp, "Must have timestamp");
  import_strict.default.equal(body.execution_metadata.service, "costops-agents");
  import_strict.default.ok(body.execution_metadata.execution_id, "Must have execution_id");
}
function assertLayersExecuted(body) {
  import_strict.default.ok(Array.isArray(body.layers_executed), "Response must include layers_executed array");
  import_strict.default.ok(body.layers_executed.length >= 1, "Must have at least 1 layer");
  import_strict.default.equal(body.layers_executed[0].layer, "AGENT_ROUTING");
}
(0, import_node_test.describe)("CostOps Agents Unified Handler", () => {
  (0, import_node_test.describe)("CORS", () => {
    (0, import_node_test.it)("should set CORS headers on all responses", async () => {
      const req = createMockReq({ method: "GET", path: "/v1/costops/health" });
      const { res, result } = createMockRes();
      await handler(req, res);
      const r = result();
      import_strict.default.equal(r.headers["Access-Control-Allow-Origin"], "*");
      import_strict.default.ok(r.headers["Access-Control-Allow-Methods"].includes("POST"));
      import_strict.default.ok(r.headers["Access-Control-Allow-Headers"].includes("Content-Type"));
    });
    (0, import_node_test.it)("should handle OPTIONS preflight", async () => {
      const req = createMockReq({ method: "OPTIONS", path: "/v1/costops/attribution" });
      const { res, result } = createMockRes();
      await handler(req, res);
      const r = result();
      import_strict.default.equal(r.statusCode, 204);
    });
  });
  (0, import_node_test.describe)("GET /v1/costops/health", () => {
    (0, import_node_test.it)("should return healthy status with all 5 agents", async () => {
      const req = createMockReq({ method: "GET", path: "/v1/costops/health" });
      const { res, result } = createMockRes();
      await handler(req, res);
      const r = result();
      import_strict.default.equal(r.statusCode, 200);
      import_strict.default.equal(r.body.status, "healthy");
      import_strict.default.equal(r.body.service, "costops-agents");
      const agentNames = r.body.agents.map((a) => a.name);
      import_strict.default.deepEqual(agentNames, ["attribution", "forecast", "budget", "roi", "tradeoff"]);
      assertExecutionMetadata(r.body);
      assertLayersExecuted(r.body);
    });
  });
  (0, import_node_test.describe)("Routing", () => {
    (0, import_node_test.it)("should return 404 for unknown routes", async () => {
      const req = createMockReq({ method: "POST", path: "/v1/costops/unknown" });
      const { res, result } = createMockRes();
      await handler(req, res);
      const r = result();
      import_strict.default.equal(r.statusCode, 404);
      import_strict.default.equal(r.body.error.code, "NOT_FOUND");
      assertExecutionMetadata(r.body);
    });
    (0, import_node_test.it)("should return 405 for non-POST on agent endpoints", async () => {
      const req = createMockReq({ method: "GET", path: "/v1/costops/attribution" });
      const { res, result } = createMockRes();
      await handler(req, res);
      const r = result();
      import_strict.default.equal(r.statusCode, 405);
      import_strict.default.equal(r.body.error.code, "METHOD_NOT_ALLOWED");
      assertExecutionMetadata(r.body);
    });
    (0, import_node_test.it)("should use x-correlation-id header as trace_id", async () => {
      const traceId = "550e8400-e29b-41d4-a716-446655440000";
      const req = createMockReq({
        method: "GET",
        path: "/v1/costops/health",
        headers: { "x-correlation-id": traceId }
      });
      const { res, result } = createMockRes();
      await handler(req, res);
      const r = result();
      import_strict.default.equal(r.body.execution_metadata.trace_id, traceId);
    });
  });
  (0, import_node_test.describe)("POST /v1/costops/attribution", () => {
    (0, import_node_test.it)("should dispatch to cost attribution agent and include metadata", async () => {
      const req = createMockReq({
        method: "POST",
        path: "/v1/costops/attribution",
        body: {
          requestId: "550e8400-e29b-41d4-a716-446655440000",
          usage: {
            provider: "OpenAI",
            model: "gpt-4",
            inputTokens: 1e3,
            outputTokens: 500
          },
          pricingContext: {
            inputPricePer1k: 0.03,
            outputPricePer1k: 0.06
          },
          dimensions: {
            tenant: "test-tenant",
            project: "test-project"
          }
        }
      });
      const { res, result } = createMockRes();
      await handler(req, res);
      const r = result();
      assertExecutionMetadata(r.body);
      assertLayersExecuted(r.body);
      const agentLayer = r.body.layers_executed.find(
        (l) => l.layer === "COSTOPS_ATTRIBUTION"
      );
      import_strict.default.ok(agentLayer, "Must have COSTOPS_ATTRIBUTION layer");
      import_strict.default.equal(agentLayer.status, "completed");
      import_strict.default.ok(typeof agentLayer.duration_ms === "number");
    });
  });
  (0, import_node_test.describe)("POST /v1/costops/roi", () => {
    (0, import_node_test.it)("should dispatch to ROI estimation agent and include metadata", async () => {
      const req = createMockReq({
        method: "POST",
        path: "/v1/costops/roi",
        body: {
          // Minimal valid ROI input
          cost_records: [
            {
              id: "550e8400-e29b-41d4-a716-446655440000",
              timestamp: "2024-01-01T00:00:00Z",
              provider: "OpenAI",
              model: "gpt-4",
              prompt_tokens: 1e3,
              completion_tokens: 500,
              total_tokens: 1500,
              cost_amount: "0.045",
              currency: "USD"
            }
          ],
          outcome_metrics: [
            {
              id: "550e8400-e29b-41d4-a716-446655440001",
              timestamp: "2024-01-01T00:00:00Z",
              metric_type: "throughput",
              metric_name: "requests_per_hour",
              value: 100,
              unit: "requests/hour"
            }
          ],
          analysis_scope: "organization",
          period_start: "2024-01-01T00:00:00Z",
          period_end: "2024-01-31T00:00:00Z",
          request_id: "550e8400-e29b-41d4-a716-446655440002"
        }
      });
      const { res, result } = createMockRes();
      await handler(req, res);
      const r = result();
      assertExecutionMetadata(r.body);
      assertLayersExecuted(r.body);
      const agentLayer = r.body.layers_executed.find(
        (l) => l.layer === "COSTOPS_ROI"
      );
      import_strict.default.ok(agentLayer, "Must have COSTOPS_ROI layer");
      import_strict.default.equal(agentLayer.status, "completed");
    });
  });
  (0, import_node_test.describe)("POST /v1/costops/tradeoff", () => {
    (0, import_node_test.it)("should dispatch to tradeoff agent and include metadata", async () => {
      const req = createMockReq({
        method: "POST",
        path: "/v1/costops/tradeoff",
        body: {
          records: [
            {
              id: "550e8400-e29b-41d4-a716-446655440000",
              timestamp: "2024-01-01T00:00:00Z",
              provider: "OpenAI",
              model: "gpt-4",
              cost: {
                cost_per_request_usd: 0.03,
                cost_per_1k_tokens_usd: 0.03,
                total_cost_usd: 0.03,
                token_count: 1e3
              },
              latency: {
                p50_ms: 500,
                p95_ms: 800,
                p99_ms: 1200,
                avg_ms: 550,
                min_ms: 200,
                max_ms: 1500
              },
              quality: {
                composite_score: 0.85
              }
            }
          ]
        }
      });
      const { res, result } = createMockRes();
      await handler(req, res);
      const r = result();
      assertExecutionMetadata(r.body);
      assertLayersExecuted(r.body);
      const agentLayer = r.body.layers_executed.find(
        (l) => l.layer === "COSTOPS_TRADEOFF"
      );
      import_strict.default.ok(agentLayer, "Must have COSTOPS_TRADEOFF layer");
      import_strict.default.equal(agentLayer.status, "completed");
    });
  });
  (0, import_node_test.describe)("POST /v1/costops/budget", () => {
    (0, import_node_test.it)("should validate budget input against contract schema", async () => {
      const req = createMockReq({
        method: "POST",
        path: "/v1/costops/budget",
        body: { invalid: true }
      });
      const { res, result } = createMockRes();
      await handler(req, res);
      const r = result();
      import_strict.default.equal(r.statusCode, 400);
      assertExecutionMetadata(r.body);
      assertLayersExecuted(r.body);
    });
    (0, import_node_test.it)("should return 503 when CORE_API_URL is not set", async () => {
      const req = createMockReq({
        method: "POST",
        path: "/v1/costops/budget",
        body: {
          request_id: "550e8400-e29b-41d4-a716-446655440000",
          budget: {
            budget_id: "budget-1",
            name: "Test Budget",
            limit: 1e4,
            currency: "USD",
            period_start: "2024-01-01T00:00:00Z",
            period_end: "2024-12-31T23:59:59Z",
            scope: { type: "tenant", tenant_id: "test-tenant" }
          },
          spend_data: {
            current_spend: 5e3,
            currency: "USD",
            data_completeness: 0.95,
            data_as_of: "2024-06-15T00:00:00Z"
          },
          timestamp: "2024-06-15T00:00:00Z"
        }
      });
      const { res, result } = createMockRes();
      await handler(req, res);
      const r = result();
      import_strict.default.equal(r.statusCode, 503);
      assertExecutionMetadata(r.body);
      assertLayersExecuted(r.body);
    });
  });
  (0, import_node_test.describe)("POST /v1/costops/forecast", () => {
    (0, import_node_test.it)("should validate forecast input against contract schema", async () => {
      const req = createMockReq({
        method: "POST",
        path: "/v1/costops/forecast",
        body: { invalid: true }
      });
      const { res, result } = createMockRes();
      await handler(req, res);
      const r = result();
      import_strict.default.equal(r.statusCode, 400);
      assertExecutionMetadata(r.body);
      assertLayersExecuted(r.body);
    });
    (0, import_node_test.it)("should return 503 when CORE_API_URL is not set", async () => {
      const historical_data = Array.from({ length: 7 }, (_, i) => ({
        timestamp: new Date(2024, 0, i + 1).toISOString(),
        total_cost: 100 + i * 10
      }));
      const req = createMockReq({
        method: "POST",
        path: "/v1/costops/forecast",
        body: {
          historical_data,
          forecast_horizon_days: 30
        }
      });
      const { res, result } = createMockRes();
      await handler(req, res);
      const r = result();
      import_strict.default.equal(r.statusCode, 503);
      assertExecutionMetadata(r.body);
      assertLayersExecuted(r.body);
    });
  });
});
/*! Bundled license information:

decimal.js/decimal.mjs:
  (*!
   *  decimal.js v10.6.0
   *  An arbitrary-precision Decimal type for JavaScript.
   *  https://github.com/MikeMcl/decimal.js
   *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
   *  MIT Licence
   *)
*/
