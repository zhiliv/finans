globalThis._importMeta_={url:import.meta.url,env:process.env};import 'file://D:/Projects/finans/node_modules/node-fetch-native/dist/polyfill.mjs';
import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, getRequestHeader, setResponseHeader, getRequestHeaders, parseCookies, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler, deleteCookie, readBody, createError, setCookie, getQuery as getQuery$1 } from 'file://D:/Projects/finans/node_modules/h3/dist/index.mjs';
import * as bcrypt from 'file://D:/Projects/finans/node_modules/bcrypt/bcrypt.js';
import jwt from 'file://D:/Projects/finans/node_modules/jsonwebtoken/index.js';
import moment from 'file://D:/Projects/finans/node_modules/moment/moment.js';
import _sequelize, { Op } from 'file://D:/Projects/finans/node_modules/sequelize/lib/index.mjs';
import * as http from 'http';
import * as fs from 'fs';
import Busboy from 'file://D:/Projects/finans/node_modules/busboy/lib/index.js';
import { createRenderer } from 'file://D:/Projects/finans/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { stringify, uneval } from 'file://D:/Projects/finans/node_modules/devalue/index.js';
import { renderToString } from 'file://D:/Projects/finans/node_modules/vue/server-renderer/index.mjs';
import { createFetch as createFetch$1, Headers } from 'file://D:/Projects/finans/node_modules/ofetch/dist/node.mjs';
import destr from 'file://D:/Projects/finans/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file://D:/Projects/finans/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://D:/Projects/finans/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file://D:/Projects/finans/node_modules/scule/dist/index.mjs';
import { klona } from 'file://D:/Projects/finans/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file://D:/Projects/finans/node_modules/defu/dist/defu.mjs';
import { hash } from 'file://D:/Projects/finans/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery } from 'file://D:/Projects/finans/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://D:/Projects/finans/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://D:/Projects/finans/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file://D:/Projects/finans/node_modules/radix3/dist/index.mjs';

const providers = [
  ["APPVEYOR"],
  ["AZURE_PIPELINES", "SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],
  ["AZURE_STATIC", "INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],
  ["APPCIRCLE", "AC_APPCIRCLE"],
  ["BAMBOO", "bamboo_planKey"],
  ["BITBUCKET", "BITBUCKET_COMMIT"],
  ["BITRISE", "BITRISE_IO"],
  ["BUDDY", "BUDDY_WORKSPACE_ID"],
  ["BUILDKITE"],
  ["CIRCLE", "CIRCLECI"],
  ["CIRRUS", "CIRRUS_CI"],
  ["CLOUDFLARE_PAGES", "CF_PAGES", { ci: true }],
  ["CODEBUILD", "CODEBUILD_BUILD_ARN"],
  ["CODEFRESH", "CF_BUILD_ID"],
  ["DRONE"],
  ["DRONE", "DRONE_BUILD_EVENT"],
  ["DSARI"],
  ["GITHUB_ACTIONS"],
  ["GITLAB", "GITLAB_CI"],
  ["GITLAB", "CI_MERGE_REQUEST_ID"],
  ["GOCD", "GO_PIPELINE_LABEL"],
  ["LAYERCI"],
  ["HUDSON", "HUDSON_URL"],
  ["JENKINS", "JENKINS_URL"],
  ["MAGNUM"],
  ["NETLIFY"],
  ["NETLIFY", "NETLIFY_LOCAL", { ci: false }],
  ["NEVERCODE"],
  ["RENDER"],
  ["SAIL", "SAILCI"],
  ["SEMAPHORE"],
  ["SCREWDRIVER"],
  ["SHIPPABLE"],
  ["SOLANO", "TDDIUM"],
  ["STRIDER"],
  ["TEAMCITY", "TEAMCITY_VERSION"],
  ["TRAVIS"],
  ["VERCEL", "NOW_BUILDER"],
  ["APPCENTER", "APPCENTER_BUILD_ID"],
  ["CODESANDBOX", "CODESANDBOX_SSE", { ci: false }],
  ["STACKBLITZ"],
  ["STORMKIT"],
  ["CLEAVR"]
];
function detectProvider(env) {
  for (const provider of providers) {
    const envName = provider[1] || provider[0];
    if (env[envName]) {
      return {
        name: provider[0].toLowerCase(),
        ...provider[2]
      };
    }
  }
  if (env.SHELL && env.SHELL === "/bin/jsh") {
    return {
      name: "stackblitz",
      ci: false
    };
  }
  return {
    name: "",
    ci: false
  };
}

const processShim = typeof process !== "undefined" ? process : {};
const envShim = processShim.env || {};
const providerInfo = detectProvider(envShim);
const nodeENV = typeof process !== "undefined" && process.env && "development" || "";
const platform = processShim.platform;
const provider = providerInfo.name;
const isCI = toBoolean(envShim.CI) || providerInfo.ci !== false;
const hasTTY = toBoolean(processShim.stdout && processShim.stdout.isTTY);
toBoolean(envShim.DEBUG);
const isTest = nodeENV === "test" || toBoolean(envShim.TEST);
toBoolean(envShim.MINIMAL) || isCI || isTest || !hasTTY;
const isWindows = /^win/i.test(platform);
function toBoolean(val) {
  return val ? val !== "false" : false;
}

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      }
    }
  },
  "public": {},
  "database": {
    "username": "postgres",
    "password": "1",
    "host": "127.0.0.1",
    "port": 5432,
    "database": "finance"
  },
  "token_leads": "c8e2d508767bd48d929b8d63641eaf80",
  "secret_key": "yOzPacWqItuzr0sg5AVMG7dsIfCaoAj0C6Z6GFt5lrKLLxHWl3jlAfWkGlWhSgFz13i50S2lVYTwB3qC",
  "saltRounds": 11,
  "password_admin_start": "admin",
  "sessionOptions": {
    "maxAge": 43200,
    "httpOnly": true,
    "path": "/",
    "sameSite": true,
    "secure": true
  },
  "notAuth": true
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"D:/Projects/finans/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:\\Projects\\finans","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:\\Projects\\finans\\server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:\\Projects\\finans\\.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:\\Projects\\finans\\.nuxt\\cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config$7 = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config$7.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function defineRenderHandler(handler) {
  return eventHandler(async (event) => {
    if (event.node.req.url.endsWith("/favicon.ico")) {
      if (!event.handled) {
        event.node.res.setHeader("Content-Type", "image/x-icon");
        event.node.res.end(
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      return;
    }
    const response = await handler(event);
    if (!response) {
      if (!event.handled) {
        event.node.res.statusCode = event.node.res.statusCode === 200 ? 500 : event.node.res.statusCode;
        event.node.res.end(
          "No response returned from render handler: " + event.node.req.url
        );
      }
      return;
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (!event.node.res.headersSent && response.headers) {
      for (const header in response.headers) {
        event.node.res.setHeader(header, response.headers[header]);
      }
      setResponseStatus(event, response.statusCode, response.statusMessage);
    }
    return typeof response.body === "string" ? response.body : JSON.stringify(response.body);
  });
}

const config$6 = useRuntimeConfig();
const getSalt = async () => {
  return await bcrypt.genSalt(+config$6.saltRounds);
};
const getHashPassword = async (password) => {
  const salt = await getSalt();
  return password && salt ? await bcrypt.hash(password, salt) : false;
};

const config$5 = useRuntimeConfig();
const sequelize = new _sequelize(config$5.database.database, config$5.database.username, config$5.database.password, {
  host: config$5.database.host,
  port: config$5.database.post,
  dialect: "postgres",
  logging: false,
  dialectOptions: {
    useUTC: false
  },
  timezone: "+03:00"
  //Установка часового пояса
});

const { Model: Model$l, Sequelize: Sequelize$l } = _sequelize;
class accesses extends Model$l {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440",
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0438\u0446\u044B"
      },
      createrd_date: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0437\u0430\u043F\u0438\u0441\u0438"
      },
      update_date: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "\u0414\u0430\u0442\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0437\u0430\u043F\u0438\u0441\u0438"
      },
      created_user_id: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F, \u0441\u043E\u0437\u0434\u0430\u0432\u0448\u0435\u0433\u043E \u0437\u0430\u043F\u0438\u0441\u044C"
      }
    }, {
      sequelize,
      tableName: "accesses",
      schema: "controls",
      timestamps: false,
      indexes: [
        {
          name: "accesses_pk",
          unique: true,
          fields: [
            { name: "id" }
          ]
        }
      ]
    });
  }
}

const { Model: Model$k, Sequelize: Sequelize$k } = _sequelize;
class auth_logger extends Model$k {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0423\u043D\u0438\u043A\u0430\u043A\u043B\u044C\u043D\u044B\u0439 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440",
        primaryKey: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"
      },
      date_requiest: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: "\u0414\u0430\u0442\u0430 \u0437\u0430\u043F\u0440\u043E\u0441\u0430"
      },
      date_auth: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "\u0414\u0430\u0442\u0430 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438"
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        comment: "\u0421\u0442\u0430\u0442\u0443\u0441 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438"
      },
      ip_adress: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "Ip \u0434\u0440\u0435\u0441"
      },
      token: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "\u0422\u043E\u043A\u0435\u043D \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438"
      }
    }, {
      sequelize,
      tableName: "auth_logger",
      schema: "controls",
      timestamps: false,
      indexes: [
        {
          name: "auth_loggoer_pk",
          unique: true,
          fields: [
            { name: "id" }
          ]
        }
      ]
    });
  }
}

const { Model: Model$j, Sequelize: Sequelize$j } = _sequelize;
class categories extends Model$j {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440",
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u043E\u0444\u0444\u0435\u0440\u0430"
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"
      }
    }, {
      sequelize,
      tableName: "categories",
      schema: "guide",
      timestamps: false,
      indexes: [
        {
          name: "categories_pk",
          unique: true,
          fields: [
            { name: "id" }
          ]
        }
      ]
    });
  }
}

const { Model: Model$i, Sequelize: Sequelize$i } = _sequelize;
class cities extends Model$i {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      region_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "regions",
          key: "id"
        }
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      short_type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false
      },
      im: {
        type: DataTypes.STRING,
        allowNull: false
      },
      rod: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dat: {
        type: DataTypes.STRING,
        allowNull: false
      },
      vin: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tvor: {
        type: DataTypes.STRING,
        allowNull: false
      },
      predl: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: "cities",
      schema: "country",
      timestamps: false,
      indexes: [
        {
          name: "cities_pk",
          unique: true,
          fields: [
            { name: "id" }
          ]
        }
      ]
    });
  }
}

const { Model: Model$h, Sequelize: Sequelize$h } = _sequelize;
class cpa extends Model$h {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0441\u043A\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B",
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0441\u043A\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B"
      },
      site: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "\u0410\u0434\u0440\u0435\u0441 \u0441\u0430\u0439\u0442\u0430"
      }
    }, {
      sequelize,
      tableName: "cpa",
      schema: "guide",
      timestamps: false,
      indexes: [
        {
          name: "cpa_pk",
          unique: true,
          fields: [
            { name: "id" }
          ]
        }
      ]
    });
  }
}

const { Model: Model$g, Sequelize: Sequelize$g } = _sequelize;
class img_offers extends Model$g {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0431\u0430\u043D\u0435\u0440\u0430",
        primaryKey: true
      },
      id_offer: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u043E\u0444\u0444\u0435\u0440\u0430",
        references: {
          model: "offers",
          key: "id"
        }
      },
      path: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "\u041F\u0443\u0442\u044C \u043A \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044E"
      }
    }, {
      sequelize,
      tableName: "img_offers",
      schema: "prod",
      timestamps: false,
      indexes: [
        {
          name: "baners_pk",
          unique: true,
          fields: [
            { name: "id" }
          ]
        }
      ]
    });
  }
}

const { Model: Model$f, Sequelize: Sequelize$f } = _sequelize;
class img_organization extends Model$f {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440",
        primaryKey: true
      },
      id_organization: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u043A\u0442\u043E\u0440 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438",
        references: {
          model: "organizations",
          key: "id"
        }
      },
      path: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "\u041F\u0443\u0442\u044C \u043A \u0444\u0430\u0439\u043B\u0443"
      }
    }, {
      sequelize,
      tableName: "img_organization",
      schema: "prod",
      timestamps: false,
      indexes: [
        {
          name: "banners_organization_pk",
          unique: true,
          fields: [
            { name: "id" }
          ]
        }
      ]
    });
  }
}

const { Model: Model$e, Sequelize: Sequelize$e } = _sequelize;
class link_categories extends Model$e {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0437\u0430\u043F\u0438\u0441\u0438",
        primaryKey: true
      },
      id_offer: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u043E\u0444\u0444\u0435\u0440\u0430",
        references: {
          model: "offers",
          key: "id"
        }
      },
      id_category: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438",
        references: {
          model: "categories",
          key: "id"
        }
      }
    }, {
      sequelize,
      tableName: "link_categories",
      schema: "prod",
      timestamps: false,
      indexes: [
        {
          name: "link_categories_id_idx",
          fields: [
            { name: "id" }
          ]
        },
        {
          name: "link_categories_pk",
          unique: true,
          fields: [
            { name: "id" }
          ]
        }
      ]
    });
  }
}

const { Model: Model$d, Sequelize: Sequelize$d } = _sequelize;
class link_get_money extends Model$d {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440  \u0441\u0432\u044F\u0437\u0438",
        primaryKey: true
      },
      id_offer: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u043E\u0444\u0444\u0435\u0440\u0430",
        references: {
          model: "offers",
          key: "id"
        }
      },
      id_method_get_money: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0441\u043F\u043E\u0441\u043E\u0431\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u0435\u043D\u0435\u0433",
        references: {
          model: "method_get_money",
          key: "id"
        }
      }
    }, {
      sequelize,
      tableName: "link_get_money",
      schema: "prod",
      timestamps: false,
      indexes: [
        {
          name: "link_get_money_pk",
          unique: true,
          fields: [
            { name: "id" }
          ]
        }
      ]
    });
  }
}

const { Model: Model$c, Sequelize: Sequelize$c } = _sequelize;
class method_get_money extends Model$c {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0441\u043F\u043E\u0441\u043E\u0431\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u0435\u043D\u0435\u0433",
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u043F\u043E\u0441\u043E\u0431\u043E \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u0435\u043D\u0435\u0433"
      }
    }, {
      sequelize,
      tableName: "method_get_money",
      schema: "guide",
      timestamps: false,
      indexes: [
        {
          name: "method_get_money_pk",
          unique: true,
          fields: [
            { name: "id" }
          ]
        }
      ]
    });
  }
}

const { Model: Model$b, Sequelize: Sequelize$b } = _sequelize;
class offers extends Model$b {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440",
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0444\u0444\u0435\u0440\u0430"
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043E\u0444\u0444\u0435\u0440\u0430"
      },
      short_description: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "\u041A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043E\u0444\u0444\u0435\u0440\u0430"
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
        comment: "\u0421\u0442\u0430\u0442\u0443\u0441"
      },
      id_cpa: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u0441\u043A\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430",
        references: {
          model: "cpa",
          key: "id"
        }
      },
      id_organization: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u043E\u0442\u043E\u0440 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438",
        references: {
          model: "organizations",
          key: "id"
        }
      },
      sum_start: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430"
      },
      sum_end: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430"
      },
      free_period: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u0411\u0435\u0441\u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u044B\u0439 \u043F\u0435\u0440\u0438\u043E\u0434"
      },
      type_free_period: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u0422\u0438\u043F \u0431\u0435\u0441\u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u043E\u0433\u043E \u043F\u0435\u0440\u0438\u043E\u0434\u0430",
        references: {
          model: "types_period",
          key: "id"
        }
      },
      period_min: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0435\u0440\u0438\u043E\u0434"
      },
      type_period_min: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u0422\u0438\u043F \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0435\u0440\u0438\u043E\u0434\u0430",
        references: {
          model: "types_period",
          key: "id"
        }
      },
      period_max: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0435\u0440\u0438\u043E\u0434"
      },
      type_period_max: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u0422\u0438\u043F \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0435\u0440\u0438\u043E\u0434\u0430",
        references: {
          model: "types_period",
          key: "id"
        }
      },
      review_time: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u044F \u0437\u0430\u044F\u0432\u043A\u0438"
      },
      type_review_time: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u0422\u0438\u043F \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0440\u0430\u0441\u0441\u043E\u0442\u0440\u0435\u043D\u0438\u044F",
        references: {
          model: "types_period",
          key: "id"
        }
      },
      age_start: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0432\u043E\u0437\u0440\u0430\u0441\u0442"
      },
      age_end: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0432\u043E\u0437\u0440\u0430\u0441\u0442"
      },
      percent_min: {
        type: DataTypes.REAL,
        allowNull: true,
        comment: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u0430\u044F \u0441\u0442\u0430\u0432\u043A\u0430"
      },
      type_percent_min: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u0422\u0438\u043F \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u043E\u0439 \u0441\u0442\u0430\u0432\u043A\u0438",
        references: {
          model: "types_period",
          key: "id"
        }
      },
      percent_max: {
        type: DataTypes.REAL,
        allowNull: true,
        comment: "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u0430\u044F \u0441\u0442\u0430\u0432\u043A\u0430"
      },
      type_percent_max: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u0422\u0438\u043F \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u043E\u0439 \u0441\u0442\u0430\u0432\u043A\u0438",
        references: {
          model: "types_period",
          key: "id"
        }
      },
      profit: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u041F\u0440\u043E\u0444\u0438\u0442"
      },
      description_profit: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0444\u0438\u0442\u0430"
      },
      url_offer: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u0444\u0444\u0435\u0440"
      },
      cr: {
        type: DataTypes.REAL,
        allowNull: true,
        comment: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u0439 / \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u043B\u0438\u043A\u043E\u0432 \u043D\u0430 \u0431\u0430\u043D\u043D\u0435\u0440\u044B"
      },
      ar: {
        type: DataTypes.REAL,
        allowNull: true,
        comment: "\u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u043E\u0434\u043E\u0431\u0440\u0435\u043D\u0438\u044F"
      },
      epc: {
        type: DataTypes.REAL,
        allowNull: true,
        comment: "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u043E\u043A \u0432 \u043F\u0435\u0440\u0435\u0441\u0447\u0435\u0442\u0435 \u043D\u0430 \u043E\u0434\u0438\u043D \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043B\u0438\u043A"
      },
      type_profit: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u0422\u0438\u043F \u043F\u0440\u043E\u0444\u0438\u0442\u0430",
        references: {
          model: "type_profit",
          key: "id"
        }
      },
      img_offer_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u0411\u0430\u043D\u0435\u0440 \u043E\u0444\u0444\u0435\u0440\u0430",
        references: {
          model: "img_offers",
          key: "id"
        }
      }
    }, {
      sequelize,
      tableName: "offers",
      schema: "prod",
      timestamps: false,
      indexes: [
        {
          name: "offers_pk",
          unique: true,
          fields: [
            { name: "id" }
          ]
        }
      ]
    });
  }
}

const { Model: Model$a, Sequelize: Sequelize$a } = _sequelize;
class offers_old extends Model$a {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440",
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0444\u0444\u0435\u0440\u0430"
      },
      id_cpa: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0441\u043A\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B"
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043E\u0444\u0444\u0435\u0440\u0430"
      },
      short_description: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "\u041A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043E\u0444\u0444\u0435\u0440\u0430"
      },
      sum_start: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430"
      },
      sum_end: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430"
      },
      free_period: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u0411\u0435\u0441\u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u044B\u0439 \u043F\u0435\u0440\u0438\u043E\u0434"
      },
      type_free_period: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u0422\u0438\u043F \u0431\u0435\u0441\u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u043E\u0433\u043E \u043F\u0435\u0440\u0438\u043E\u0434\u0430"
      },
      period_min: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0440\u043E\u043A"
      },
      type_period_min: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u0422\u0438\u043F \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u0440\u043E\u043A\u0430"
      },
      period_max: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0440\u043E\u043A"
      },
      type_period_max: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u0422\u0438\u043F \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u0440\u043E\u043A\u0430"
      },
      review_time: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u044F"
      },
      type_review_time: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u0422\u0438\u043F \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u044F"
      },
      age_start: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0432\u043E\u0437\u0440\u0430\u0441\u0442"
      },
      age_end: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0432\u043E\u0437\u0440\u0430\u0441\u0442"
      },
      percent_min: {
        type: DataTypes.REAL,
        allowNull: true,
        comment: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u0430\u044F \u0441\u0442\u0430\u0432\u043A\u0430"
      },
      type_percent_min: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u0422\u0438\u043F \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u043E\u0439 \u0441\u0442\u0430\u0432\u043A\u0438"
      },
      percent_max: {
        type: DataTypes.REAL,
        allowNull: true,
        comment: "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u0430\u044F \u0441\u0442\u0430\u0432\u043A\u0430"
      },
      type_percent_max: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u0422\u0438\u043F \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u043E\u0439 \u0441\u0442\u0430\u0432\u043A\u0438"
      },
      profit: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "\u0420\u0430\u0437\u043C\u0435\u0440 \u0432\u043E\u0437\u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u044F"
      },
      description_profit: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0432\u043E\u0437\u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u044F"
      },
      url_offer: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u0444\u0444\u0435\u0440"
      },
      site: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0441\u0430\u0439\u0442"
      },
      cr: {
        type: DataTypes.REAL,
        allowNull: true,
        comment: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u0439 / \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u043B\u0438\u043A\u043E\u0432 \u043D\u0430 \u0431\u0430\u043D\u043D\u0435\u0440\u044B"
      },
      ar: {
        type: DataTypes.REAL,
        allowNull: true,
        comment: "\u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u043E\u0434\u043E\u0431\u0440\u0435\u043D\u0438\u044F"
      },
      epc: {
        type: DataTypes.REAL,
        allowNull: true,
        comment: "\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u043E\u043A \u0432 \u043F\u0435\u0440\u0435\u0441\u0447\u0435\u0442\u0435 \u043D\u0430 \u043E\u0434\u0438\u043D \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043B\u0438\u043A"
      },
      create_dt: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize$a.Sequelize.literal("CURRENT_TIMESTAMP"),
        comment: "\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F"
      },
      user_create: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0441\u043E\u0437\u0434\u0430\u0432\u0448\u0438\u0439 \u0437\u0430\u043F\u0438\u0441\u044C"
      },
      user_update: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043E\u0431\u043D\u043E\u0432\u0438\u0432\u0448\u0438\u0439 \u0437\u0430\u043F\u0438\u0441\u044C"
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: "\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043E\u0444\u0444\u0435\u0440\u0430"
      },
      type_profit: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u0422\u0438\u043F \u043F\u0440\u043E\u0444\u0438\u0442\u0430"
      }
    }, {
      sequelize,
      tableName: "offers_old",
      schema: "prod",
      timestamps: false,
      indexes: [
        {
          name: "offers_pk_1",
          unique: true,
          fields: [
            { name: "id" }
          ]
        }
      ]
    });
  }
}

const { Model: Model$9, Sequelize: Sequelize$9 } = _sequelize;
class organizations extends Model$9 {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440",
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
      },
      short_description: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "\u041A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 "
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "\u041F\u043E\u043B\u043D\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
      },
      site: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "\u0421\u0430\u0439\u0442 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438"
      },
      img_organization_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "\u0411\u0430\u043D\u0435\u0440 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",
        references: {
          model: "img_organization",
          key: "id"
        }
      }
    }, {
      sequelize,
      tableName: "organizations",
      schema: "prod",
      timestamps: false,
      indexes: [
        {
          name: "organuzation_id_idx",
          fields: [
            { name: "id" }
          ]
        },
        {
          name: "organuzation_pk",
          unique: true,
          fields: [
            { name: "id" }
          ]
        }
      ]
    });
  }
}

const { Model: Model$8, Sequelize: Sequelize$8 } = _sequelize;
class regions extends Model$8 {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false
      },
      declination: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: "regions",
      schema: "country",
      timestamps: false,
      indexes: [
        {
          name: "regions_pk",
          unique: true,
          fields: [
            { name: "id" }
          ]
        }
      ]
    });
  }
}

const { Model: Model$7, Sequelize: Sequelize$7 } = _sequelize;
class roles extends Model$7 {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440",
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0440\u043E\u043B\u0438"
      },
      created_date: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: "\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0437\u0430\u043F\u0438\u0441\u0438"
      },
      update_date: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "\u0414\u0430\u0442\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0431\u0435\u043D\u0438\u044F \u0440\u043E\u043B\u0438"
      },
      created_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0421\u043E\u0437\u0434\u0430\u0432\u0448\u0438\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C",
        references: {
          model: "users",
          key: "id"
        }
      }
    }, {
      sequelize,
      tableName: "roles",
      schema: "controls",
      hasTrigger: true,
      timestamps: false,
      indexes: [
        {
          name: "roles_pk",
          unique: true,
          fields: [
            { name: "id" }
          ]
        }
      ]
    });
  }
}

const { Model: Model$6, Sequelize: Sequelize$6 } = _sequelize;
class roles_accesses extends Model$6 {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440",
        primaryKey: true
      },
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0440\u043E\u043B\u0438",
        references: {
          model: "roles",
          key: "id"
        }
      },
      access_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0418\u0434\u043D\u0435\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0434\u043E\u0441\u0442\u0443\u043F\u0430",
        references: {
          model: "accesses",
          key: "id"
        }
      },
      type_access_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0442\u0438\u043F\u0430 \u0434\u043E\u0441\u0442\u043F\u0443\u043F\u0430",
        references: {
          model: "type_access",
          key: "id"
        }
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        comment: "\u0421\u0442\u0430\u0442\u0443\u0441 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u0430"
      }
    }, {
      sequelize,
      tableName: "roles_accesses",
      schema: "controls",
      timestamps: false,
      indexes: [
        {
          name: "roles_accesses_pk",
          unique: true,
          fields: [
            { name: "id" }
          ]
        }
      ]
    });
  }
}

const { Model: Model$5, Sequelize: Sequelize$5 } = _sequelize;
class type_access extends Model$5 {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 ",
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0442\u0438\u043F\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u0430"
      }
    }, {
      sequelize,
      tableName: "type_access",
      schema: "controls",
      timestamps: false,
      indexes: [
        {
          name: "type_access_pk",
          unique: true,
          fields: [
            { name: "id" }
          ]
        }
      ]
    });
  }
}

const { Model: Model$4, Sequelize: Sequelize$4 } = _sequelize;
class type_docs extends Model$4 {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0442\u0438\u043F\u0430 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430",
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0442\u0438\u043F\u0430 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430"
      }
    }, {
      sequelize,
      tableName: "type_docs",
      schema: "guide",
      timestamps: false,
      indexes: [
        {
          name: "type_docs_pk",
          unique: true,
          fields: [
            { name: "id" }
          ]
        }
      ]
    });
  }
}

const { Model: Model$3, Sequelize: Sequelize$3 } = _sequelize;
class type_profit extends Model$3 {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0440\u0442\u043E\u0440 \u0442\u0438\u043F\u0430 \u043F\u0440\u043E\u0444\u0438\u0442\u0430",
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0442\u0438\u043F\u0430 \u043F\u0440\u043E\u0444\u0438\u0442\u0430"
      }
    }, {
      sequelize,
      tableName: "type_profit",
      schema: "guide",
      timestamps: false,
      indexes: [
        {
          name: "type_profit_in_idx",
          unique: true,
          fields: [
            { name: "id" }
          ]
        },
        {
          name: "type_profit_pk",
          unique: true,
          fields: [
            { name: "id" }
          ]
        }
      ]
    });
  }
}

const { Model: Model$2, Sequelize: Sequelize$2 } = _sequelize;
class types_period extends Model$2 {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0442\u0438\u043F\u0430 \u043F\u0435\u0440\u0438\u043E\u0434\u0430",
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0442\u0438\u043F\u0430 \u043F\u0435\u0440\u0438\u043E\u0434\u0430"
      },
      padez: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "\u0420\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u043F\u0430\u0434\u0435\u0436"
      },
      mnozh: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E"
      }
    }, {
      sequelize,
      tableName: "types_period",
      schema: "guide",
      timestamps: false,
      indexes: [
        {
          name: "type_interval_pk",
          unique: true,
          fields: [
            { name: "id" }
          ]
        }
      ]
    });
  }
}

const { Model: Model$1, Sequelize: Sequelize$1 } = _sequelize;
class user_roles extends Model$1 {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440",
        primaryKey: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F",
        references: {
          model: "users",
          key: "id"
        }
      },
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u043A\u0442\u043E\u0440 \u0440\u043E\u043B\u0438",
        references: {
          model: "roles",
          key: "id"
        }
      }
    }, {
      sequelize,
      tableName: "user_roles",
      schema: "controls",
      timestamps: false,
      indexes: [
        {
          name: "user_roles_pk",
          unique: true,
          fields: [
            { name: "id" }
          ]
        }
      ]
    });
  }
}

const { Model, Sequelize } = _sequelize;
class users extends Model {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F",
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"
      },
      password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "\u041F\u0430\u0440\u043E\u043B\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"
      },
      created_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
        comment: "\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F"
      },
      update_date: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "\u0414\u0430\u0442\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0437\u0430\u043F\u0438\u0441\u0438"
      }
    }, {
      sequelize,
      tableName: "users",
      schema: "controls",
      hasTrigger: true,
      timestamps: false,
      indexes: [
        {
          name: "users_pk",
          unique: true,
          fields: [
            { name: "id" }
          ]
        }
      ]
    });
  }
}

const DataTypes = _sequelize.DataTypes;
function initModels(sequelize) {
  const accesses$1 = accesses.init(sequelize, DataTypes);
  const auth_logger$1 = auth_logger.init(sequelize, DataTypes);
  const categories$1 = categories.init(sequelize, DataTypes);
  const cities$1 = cities.init(sequelize, DataTypes);
  const cpa$1 = cpa.init(sequelize, DataTypes);
  const img_offers$1 = img_offers.init(sequelize, DataTypes);
  const img_organization$1 = img_organization.init(sequelize, DataTypes);
  const link_categories$1 = link_categories.init(sequelize, DataTypes);
  const link_get_money$1 = link_get_money.init(sequelize, DataTypes);
  const method_get_money$1 = method_get_money.init(sequelize, DataTypes);
  const offers$1 = offers.init(sequelize, DataTypes);
  const offers_old$1 = offers_old.init(sequelize, DataTypes);
  const organizations$1 = organizations.init(sequelize, DataTypes);
  const regions$1 = regions.init(sequelize, DataTypes);
  const roles$1 = roles.init(sequelize, DataTypes);
  const roles_accesses$1 = roles_accesses.init(sequelize, DataTypes);
  const type_access$1 = type_access.init(sequelize, DataTypes);
  const type_docs$1 = type_docs.init(sequelize, DataTypes);
  const type_profit$1 = type_profit.init(sequelize, DataTypes);
  const types_period$1 = types_period.init(sequelize, DataTypes);
  const user_roles$1 = user_roles.init(sequelize, DataTypes);
  const users$1 = users.init(sequelize, DataTypes);
  roles_accesses$1.belongsTo(accesses$1, { as: "access", foreignKey: "access_id" });
  accesses$1.hasMany(roles_accesses$1, { as: "roles_accesses", foreignKey: "access_id" });
  roles_accesses$1.belongsTo(roles$1, { as: "role", foreignKey: "role_id" });
  roles$1.hasMany(roles_accesses$1, { as: "roles_accesses", foreignKey: "role_id" });
  user_roles$1.belongsTo(roles$1, { as: "role", foreignKey: "role_id" });
  roles$1.hasMany(user_roles$1, { as: "user_roles", foreignKey: "role_id" });
  roles_accesses$1.belongsTo(type_access$1, { as: "type_access", foreignKey: "type_access_id" });
  type_access$1.hasMany(roles_accesses$1, { as: "roles_accesses", foreignKey: "type_access_id" });
  roles$1.belongsTo(users$1, { as: "created_user", foreignKey: "created_user_id" });
  users$1.hasMany(roles$1, { as: "roles", foreignKey: "created_user_id" });
  user_roles$1.belongsTo(users$1, { as: "user", foreignKey: "user_id" });
  users$1.hasMany(user_roles$1, { as: "user_roles", foreignKey: "user_id" });
  cities$1.belongsTo(regions$1, { as: "region", foreignKey: "region_id" });
  regions$1.hasMany(cities$1, { as: "cities", foreignKey: "region_id" });
  link_categories$1.belongsTo(categories$1, { as: "id_category_category", foreignKey: "id_category" });
  categories$1.hasMany(link_categories$1, { as: "link_categories", foreignKey: "id_category" });
  offers$1.belongsTo(cpa$1, { as: "id_cpa_cpa", foreignKey: "id_cpa" });
  cpa$1.hasMany(offers$1, { as: "offers", foreignKey: "id_cpa" });
  offers$1.belongsTo(img_offers$1, { as: "img_offer_img_offer", foreignKey: "img_offer_id" });
  img_offers$1.hasMany(offers$1, { as: "offers", foreignKey: "img_offer_id" });
  organizations$1.belongsTo(img_organization$1, { as: "img_organization_img_organization", foreignKey: "img_organization_id" });
  img_organization$1.hasMany(organizations$1, { as: "organizations", foreignKey: "img_organization_id" });
  link_get_money$1.belongsTo(method_get_money$1, { as: "id_method_get_money_method_get_money", foreignKey: "id_method_get_money" });
  method_get_money$1.hasMany(link_get_money$1, { as: "link_get_moneys", foreignKey: "id_method_get_money" });
  img_offers$1.belongsTo(offers$1, { as: "id_offer_offer", foreignKey: "id_offer" });
  offers$1.hasMany(img_offers$1, { as: "img_offers", foreignKey: "id_offer" });
  link_categories$1.belongsTo(offers$1, { as: "id_offer_offer", foreignKey: "id_offer" });
  offers$1.hasMany(link_categories$1, { as: "link_categories", foreignKey: "id_offer" });
  link_get_money$1.belongsTo(offers$1, { as: "id_offer_offer", foreignKey: "id_offer" });
  offers$1.hasMany(link_get_money$1, { as: "link_get_moneys", foreignKey: "id_offer" });
  img_organization$1.belongsTo(organizations$1, { as: "id_organization_organization", foreignKey: "id_organization" });
  organizations$1.hasMany(img_organization$1, { as: "img_organizations", foreignKey: "id_organization" });
  offers$1.belongsTo(organizations$1, { as: "id_organization_organization", foreignKey: "id_organization" });
  organizations$1.hasMany(offers$1, { as: "offers", foreignKey: "id_organization" });
  offers$1.belongsTo(type_profit$1, { as: "type_profit_type_profit", foreignKey: "type_profit" });
  type_profit$1.hasMany(offers$1, { as: "offers", foreignKey: "type_profit" });
  offers$1.belongsTo(types_period$1, { as: "type_free_period_types_period", foreignKey: "type_free_period" });
  types_period$1.hasMany(offers$1, { as: "offers", foreignKey: "type_free_period" });
  offers$1.belongsTo(types_period$1, { as: "type_percent_max_types_period", foreignKey: "type_percent_max" });
  types_period$1.hasMany(offers$1, { as: "type_percent_max_offers", foreignKey: "type_percent_max" });
  offers$1.belongsTo(types_period$1, { as: "type_percent_min_types_period", foreignKey: "type_percent_min" });
  types_period$1.hasMany(offers$1, { as: "type_percent_min_offers", foreignKey: "type_percent_min" });
  offers$1.belongsTo(types_period$1, { as: "type_period_max_types_period", foreignKey: "type_period_max" });
  types_period$1.hasMany(offers$1, { as: "type_period_max_offers", foreignKey: "type_period_max" });
  offers$1.belongsTo(types_period$1, { as: "type_period_min_types_period", foreignKey: "type_period_min" });
  types_period$1.hasMany(offers$1, { as: "type_period_min_offers", foreignKey: "type_period_min" });
  offers$1.belongsTo(types_period$1, { as: "type_review_time_types_period", foreignKey: "type_review_time" });
  types_period$1.hasMany(offers$1, { as: "type_review_time_offers", foreignKey: "type_review_time" });
  return {
    accesses: accesses$1,
    auth_logger: auth_logger$1,
    categories: categories$1,
    cities: cities$1,
    cpa: cpa$1,
    img_offers: img_offers$1,
    img_organization: img_organization$1,
    link_categories: link_categories$1,
    link_get_money: link_get_money$1,
    method_get_money: method_get_money$1,
    offers: offers$1,
    offers_old: offers_old$1,
    organizations: organizations$1,
    regions: regions$1,
    roles: roles$1,
    roles_accesses: roles_accesses$1,
    type_access: type_access$1,
    type_docs: type_docs$1,
    type_profit: type_profit$1,
    types_period: types_period$1,
    user_roles: user_roles$1,
    users: users$1
  };
}

const config$4 = useRuntimeConfig();
const arrImgDir = ["organizations", "offers"];
arrImgDir.forEach((dir) => {
  if (!fs.existsSync(`public/img/${dir}`))
    fs.mkdirSync(`public/img/${dir}`);
});
const _IPwnBHbGxH = async () => {
  try {
    await sequelize.authenticate();
    await initModels(sequelize);
    checkUsers();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
const checkUsers = async () => {
  const optionsWhere = {
    where: {
      name: "admin"
    }
  };
  const count = await sequelize.models.users.count(optionsWhere);
  if (count === 0) {
    const hash = await getHashPassword(config$4.password_admin_start);
    const user = {
      name: "admin",
      // имя пользователя
      password_hash: hash
      // хэш пароля
    };
    await sequelize.models.users.create(user).then((res) => {
      console.log("\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0441\u043E\u0437\u0434\u0430\u043D");
    });
  }
};

const plugins = [
  _IPwnBHbGxH
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function trapUnhandledNodeErrors() {
  {
    process.on(
      "unhandledRejection",
      (err) => console.error("[nitro] [unhandledRejection]", err)
    );
    process.on(
      "uncaughtException",
      (err) => console.error("[nitro] [uncaughtException]", err)
    );
  }
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(html);
});

const config$3 = useRuntimeConfig();
async function getAuth(event) {
  const { token } = parseCookies(event);
  if (!token)
    throw new Error("\u0422\u043E\u043A\u0435\u043D \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442");
  const verifyJWT = jwt.verify(token, config$3.secret_key);
  const id = verifyJWT == null ? void 0 : verifyJWT.id;
  const user = await sequelize.models.users.findOne({ where: { id } });
  if (user && !user.id)
    throw new Error("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D");
  return user;
}

function defineAuthenticatedEventHandler(handler) {
  return defineEventHandler(async (event) => {
    if (event.node.req.url === "/api/auth/authentication" || event.node.req.url === "/auth") {
      return handler(event);
    }
    try {
      const user = await getAuth(event);
      return handler(event, user);
    } catch (err) {
      sendRedirect(event, "/auth");
    }
  });
}

const _y3nPiP = defineAuthenticatedEventHandler(async (event) => {
});

const _lazy_iPwq6M = () => Promise.resolve().then(function () { return _____$3; });
const _lazy_3BUbn1 = () => Promise.resolve().then(function () { return add_post$d; });
const _lazy_3QZ7j1 = () => Promise.resolve().then(function () { return all_get$f; });
const _lazy_kyLQLj = () => Promise.resolve().then(function () { return count_get$1; });
const _lazy_YCY6rI = () => Promise.resolve().then(function () { return del_delete$f; });
const _lazy_RTGCnB = () => Promise.resolve().then(function () { return edit_post$f; });
const _lazy_znnoGZ = () => Promise.resolve().then(function () { return getLeads_get$3; });
const _lazy_enapqB = () => Promise.resolve().then(function () { return add_post$b; });
const _lazy_0Hxbck = () => Promise.resolve().then(function () { return all_get$d; });
const _lazy_wlslay = () => Promise.resolve().then(function () { return del_delete$d; });
const _lazy_sC95ny = () => Promise.resolve().then(function () { return edit_post$d; });
const _lazy_TWpNiV = () => Promise.resolve().then(function () { return list; });
const _lazy_XqI8bQ = () => Promise.resolve().then(function () { return add_post$9; });
const _lazy_SuXcMO = () => Promise.resolve().then(function () { return all_get$b; });
const _lazy_a5HsrI = () => Promise.resolve().then(function () { return del_delete$b; });
const _lazy_1Y2Xib = () => Promise.resolve().then(function () { return edit_post$b; });
const _lazy_5E9PsW = () => Promise.resolve().then(function () { return getLeads_get$1; });
const _lazy_OvAREB = () => Promise.resolve().then(function () { return add_post$7; });
const _lazy_6ysfkL = () => Promise.resolve().then(function () { return all_get$9; });
const _lazy_zEcc2e = () => Promise.resolve().then(function () { return del_delete$9; });
const _lazy_bhnjoT = () => Promise.resolve().then(function () { return edit_post$9; });
const _lazy_bETHbL = () => Promise.resolve().then(function () { return loadImage_post$3; });
const _lazy_0sP8i7 = () => Promise.resolve().then(function () { return add_put$1; });
const _lazy_EjhKOe = () => Promise.resolve().then(function () { return all_get$7; });
const _lazy_boE2yS = () => Promise.resolve().then(function () { return del_delete$7; });
const _lazy_EsfVeU = () => Promise.resolve().then(function () { return deleteImage_post$1; });
const _lazy_5cMPzf = () => Promise.resolve().then(function () { return edit_post$7; });
const _lazy_1j2F9g = () => Promise.resolve().then(function () { return loadImage_post$1; });
const _lazy_R3RVnF = () => Promise.resolve().then(function () { return _____$1; });
const _lazy_epfsCL = () => Promise.resolve().then(function () { return add_post$5; });
const _lazy_2BKBi7 = () => Promise.resolve().then(function () { return all_get$5; });
const _lazy_U186eD = () => Promise.resolve().then(function () { return del_delete$5; });
const _lazy_FgfTH8 = () => Promise.resolve().then(function () { return edit_post$5; });
const _lazy_tuhznJ = () => Promise.resolve().then(function () { return add_post$3; });
const _lazy_ihYgkg = () => Promise.resolve().then(function () { return all_get$3; });
const _lazy_QIgyyL = () => Promise.resolve().then(function () { return del_delete$3; });
const _lazy_RaVasz = () => Promise.resolve().then(function () { return edit_post$3; });
const _lazy_8vkd4I = () => Promise.resolve().then(function () { return add_post$1; });
const _lazy_G7haVn = () => Promise.resolve().then(function () { return all_get$1; });
const _lazy_PIvFPC = () => Promise.resolve().then(function () { return del_delete$1; });
const _lazy_gPga0s = () => Promise.resolve().then(function () { return edit_post$1; });
const _lazy_LCeeaO = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '', handler: _y3nPiP, lazy: false, middleware: true, method: undefined },
  { route: '/api/auth/**', handler: _lazy_iPwq6M, lazy: true, middleware: false, method: undefined },
  { route: '/api/categories/add', handler: _lazy_3BUbn1, lazy: true, middleware: false, method: "post" },
  { route: '/api/categories/all', handler: _lazy_3QZ7j1, lazy: true, middleware: false, method: "get" },
  { route: '/api/categories/count', handler: _lazy_kyLQLj, lazy: true, middleware: false, method: "get" },
  { route: '/api/categories/del', handler: _lazy_YCY6rI, lazy: true, middleware: false, method: "delete" },
  { route: '/api/categories/edit', handler: _lazy_RTGCnB, lazy: true, middleware: false, method: "post" },
  { route: '/api/categories/get-leads', handler: _lazy_znnoGZ, lazy: true, middleware: false, method: "get" },
  { route: '/api/cpa/add', handler: _lazy_enapqB, lazy: true, middleware: false, method: "post" },
  { route: '/api/cpa/all', handler: _lazy_0Hxbck, lazy: true, middleware: false, method: "get" },
  { route: '/api/cpa/del', handler: _lazy_wlslay, lazy: true, middleware: false, method: "delete" },
  { route: '/api/cpa/edit', handler: _lazy_sC95ny, lazy: true, middleware: false, method: "post" },
  { route: '/api/list', handler: _lazy_TWpNiV, lazy: true, middleware: false, method: undefined },
  { route: '/api/method-get-money/add', handler: _lazy_XqI8bQ, lazy: true, middleware: false, method: "post" },
  { route: '/api/method-get-money/all', handler: _lazy_SuXcMO, lazy: true, middleware: false, method: "get" },
  { route: '/api/method-get-money/del', handler: _lazy_a5HsrI, lazy: true, middleware: false, method: "delete" },
  { route: '/api/method-get-money/edit', handler: _lazy_1Y2Xib, lazy: true, middleware: false, method: "post" },
  { route: '/api/method-get-money/get-leads', handler: _lazy_5E9PsW, lazy: true, middleware: false, method: "get" },
  { route: '/api/offers/add', handler: _lazy_OvAREB, lazy: true, middleware: false, method: "post" },
  { route: '/api/offers/all', handler: _lazy_6ysfkL, lazy: true, middleware: false, method: "get" },
  { route: '/api/offers/del', handler: _lazy_zEcc2e, lazy: true, middleware: false, method: "delete" },
  { route: '/api/offers/edit', handler: _lazy_bhnjoT, lazy: true, middleware: false, method: "post" },
  { route: '/api/offers/load-image', handler: _lazy_bETHbL, lazy: true, middleware: false, method: "post" },
  { route: '/api/organizations/add', handler: _lazy_0sP8i7, lazy: true, middleware: false, method: "put" },
  { route: '/api/organizations/all', handler: _lazy_EjhKOe, lazy: true, middleware: false, method: "get" },
  { route: '/api/organizations/del', handler: _lazy_boE2yS, lazy: true, middleware: false, method: "delete" },
  { route: '/api/organizations/delete-image', handler: _lazy_EsfVeU, lazy: true, middleware: false, method: "post" },
  { route: '/api/organizations/edit', handler: _lazy_5cMPzf, lazy: true, middleware: false, method: "post" },
  { route: '/api/organizations/load-image', handler: _lazy_1j2F9g, lazy: true, middleware: false, method: "post" },
  { route: '/api/session/**', handler: _lazy_R3RVnF, lazy: true, middleware: false, method: undefined },
  { route: '/api/type-docs/add', handler: _lazy_epfsCL, lazy: true, middleware: false, method: "post" },
  { route: '/api/type-docs/all', handler: _lazy_2BKBi7, lazy: true, middleware: false, method: "get" },
  { route: '/api/type-docs/del', handler: _lazy_U186eD, lazy: true, middleware: false, method: "delete" },
  { route: '/api/type-docs/edit', handler: _lazy_FgfTH8, lazy: true, middleware: false, method: "post" },
  { route: '/api/type-profit/add', handler: _lazy_tuhznJ, lazy: true, middleware: false, method: "post" },
  { route: '/api/type-profit/all', handler: _lazy_ihYgkg, lazy: true, middleware: false, method: "get" },
  { route: '/api/type-profit/del', handler: _lazy_QIgyyL, lazy: true, middleware: false, method: "delete" },
  { route: '/api/type-profit/edit', handler: _lazy_RaVasz, lazy: true, middleware: false, method: "post" },
  { route: '/api/types-period/add', handler: _lazy_8vkd4I, lazy: true, middleware: false, method: "post" },
  { route: '/api/types-period/all', handler: _lazy_G7haVn, lazy: true, middleware: false, method: "get" },
  { route: '/api/types-period/del', handler: _lazy_PIvFPC, lazy: true, middleware: false, method: "delete" },
  { route: '/api/types-period/edit', handler: _lazy_gPga0s, lazy: true, middleware: false, method: "post" },
  { route: '/__nuxt_error', handler: _lazy_LCeeaO, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_LCeeaO, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(true),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (provider === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET) {
    return "0";
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (isWindows) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
trapUnhandledNodeErrors();
async function onShutdown(signal) {
  await nitroApp.hooks.callHook("close");
}
parentPort.on("message", async (msg) => {
  if (msg && msg.event === "shutdown") {
    await onShutdown();
    parentPort.postMessage({ event: "exit" });
  }
});

const _messages = {"appName":"Nuxt","version":"","statusCode":500,"statusMessage":"Server error","description":"An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.","stack":""};
const _render = function({ messages }) {
var __t, __p = '';
__p += '<!DOCTYPE html><html><head><title>' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
' - ' +
((__t = ( messages.statusMessage )) == null ? '' : __t) +
' | ' +
((__t = ( messages.appName )) == null ? '' : __t) +
'</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.flex-col{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.flex-1{-webkit-box-flex:1;-ms-flex:1 1 0%;-webkit-flex:1 1 0%;flex:1 1 0%}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.font-medium{font-weight:500}.font-light{font-weight:300}.h-auto{height:auto}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-6xl{font-size:3.75rem;line-height:1}.leading-tight{line-height:1.25}.mb-8{margin-bottom:2rem}.mb-6{margin-bottom:1.5rem}.min-h-screen{min-height:100vh}.overflow-y-auto{overflow-y:auto}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.fixed{position:fixed}.left-0{left:0px}.right-0{right:0px}.text-black{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10{z-index:10}@media (min-width: 640px){.sm\\:text-8xl{font-size:6rem;line-height:1}.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll(\'link[rel="modulepreload"]\'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();</script></head><body class="font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col"><div class="fixed left-0 right-0 spotlight"></div><h1 class="text-6xl sm:text-8xl font-medium mb-6">' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
'</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight">' +
((__t = ( messages.description )) == null ? '' : __t) +
'</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto"><pre class="text-xl font-light leading-tight z-10 p-8">' +
((__t = ( messages.stack )) == null ? '' : __t) +
'</pre></div></body></html>';
return __p
};
const _template = (messages) => _render({ messages: { ..._messages, ...messages } });
const template$1 = _template;

const errorDev = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template$1
});

const DateNow = () => {
  return moment().tz("Europe/Moscow").format();
};

const config$2 = useRuntimeConfig();
const _____$2 = defineEventHandler(async (event) => {
  deleteCookie(event, "token");
  const params = await readBody(event);
  const ip = getClientAddress(event.node.req);
  const result = {
    statusCode: 400,
    // установка статуса ответа
    message: ""
  };
  const dataAuth = {
    // объект данных авторизации
    user_id: null,
    // Идентификатор пользователя
    date_requiest: DateNow(),
    // установка даты запроса
    date_auth: null,
    // установка даты авторизации
    status: false,
    // установка статуса
    ip_adress: ip,
    // установка ip адреса
    token: null
    // установка токена
  };
  if (params.login.length < 4 || params.password.length < 5) {
    result.statusCode = 400;
    result.message = "\u041D\u0435 \u0432\u0430\u043B\u0438\u0434\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C";
    await logger(dataAuth);
  }
  const user = await sequelize.models.users.findOne({ where: { name: params.login } });
  const countIPrequest = await checkCountAuth();
  if (countIPrequest > 5 && !config$2.notAuth) {
    result.statusCode = 400;
    result.message = "\u041F\u0440\u0435\u0432\u044B\u0448\u0435\u043D\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438. \u0414\u043E\u0441\u0442\u0443\u043F \u043A \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0431\u0443\u0434\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 5 \u043C\u0438\u043D\u0443\u0442";
    await logger(dataAuth);
    return createError({ statusCode: result.statusCode, message: result.message });
  }
  let token;
  if (user && countIPrequest <= 5) {
    const checkHash = await bcrypt.compare(params.password, user.password_hash);
    if (checkHash) {
      token = jwt.sign({ id: user.id }, config$2.secret_key, { expiresIn: "1d" });
      result.statusCode = 200;
      dataAuth.user_id = user.id;
      dataAuth.date_auth = DateNow();
      setCookie(event, "token", token, config$2.sessionOptions);
    } else {
      result.statusCode = 400;
      result.message = "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C";
    }
  }
  logger(dataAuth);
  return result.statusCode === 400 ? createError({ statusCode: result.statusCode, message: result.message }) : result;
});
const getClientAddress = (req) => {
  const fullAdress = (req.headers["x-forwarded-for"] || "").split(",")[0] || req.connection.remoteAddress;
  return fullAdress.replace("::ffff:", "");
};
const logger = async (authData) => {
  sequelize.models.auth_logger.create(authData);
};
const checkCountAuth = async (ip) => {
  const DateMinus5Minutes = moment().tz("Europe/Moscow").subtract(5, "minutes");
  const params = {
    where: {
      date_requiest: {
        [Op.between]: [DateMinus5Minutes, DateNow()]
        // получение диапазон между текущей датой и датой минус 5 минут
      }
    }
  };
  return await sequelize.models.auth_logger.count(params);
};

const _____$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _____$2
});

const getErrorResponse = (error) => {
  let errorRes = { message: "", statusCode: 400 };
  errorRes.message = error && error.errors && error.errors.length ? error.errors.map((el) => el.message).join("\n") : "";
  if (error.original && error.original.hint)
    errorRes.message = error.original.message + "; " + error.original.hint;
  return errorRes;
};
const getList$2 = async (tableName, params, where) => {
  console.log("\u{1F680} -> getList -> params:", params);
  try {
    const response = await sequelize.models[tableName].findAll({
      order: params.order ? JSON.parse(params.order) : [],
      offset: params.offset || null,
      limit: params.limit || null,
      where: params.where ? params.where : null
    });
    return response;
  } catch (error) {
    console.log("\u{1F680} -> getList -> error:", error);
    const err = getErrorResponse(error);
    throw createError(err);
  }
};
const updateItem = async (tableName, params) => {
  try {
    const response = {};
    const optionWhere = {
      where: {
        id: params.id
      }
    };
    delete params.id;
    response.status = 200;
    response.typeMessage = "success";
    response.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E";
    response.data = await sequelize.models[tableName].update(params, optionWhere);
    return response;
  } catch (error) {
    const err = getErrorResponse(error);
    throw createError(err);
  }
};
const getWhere = (nameModel, whereText) => {
  let fields = sequelize.models[nameModel].tableAttributes;
  const getValue = (key, value) => {
    let result;
    let typeData = "STRING";
    if (fields[key].type.toString() === "INTEGER")
      typeData = "INTEGER";
    if (typeData === "INTEGER")
      result = value;
    if (typeData === "STRING")
      result = `%${value}%`;
    return { data: result, typeData };
  };
  let whereObj = JSON.parse(whereText);
  const where = {};
  for (let key in whereObj) {
    const row = getValue(key, whereObj[key]);
    if (row.typeData === "INTEGER")
      where[key] = {
        [Op.eq]: row.data
      };
    else
      where[key] = {
        [Op.iLike]: row.data
      };
  }
  return where;
};
const getCountTable = async (tableName, where) => {
  return await sequelize.models[tableName].count(where);
};

const add_post$c = defineEventHandler(async (event) => {
  const params = await readBody(event);
  const response = {};
  try {
    const optionsWhere = {
      where: {
        name: params.name
      }
    };
    const count = await sequelize.models.categories.count(optionsWhere);
    if (count > 0) {
      response.status = 217;
      response.typeMessage = "warning";
      response.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u0441 \u0442\u0430\u043A\u0438\u043C \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0442";
    } else {
      response.status = 200;
      response.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E";
      response.typeMessage = "success";
      response.data = await sequelize.models.categories.create(params);
    }
    return response;
  } catch (error) {
    const err = getErrorResponse(error);
    throw createError(err);
  }
});

const add_post$d = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: add_post$c
});

const all_get$e = defineEventHandler(async (event) => {
  const params = getQuery$1(event);
  const options = {
    where: params.where ? getWhere("categories", params.where) : {},
    order: params.order,
    offset: params.offset,
    limit: params.limit
  };
  console.log("\u{1F680} -> defineEventHandler -> options:", options);
  return getList$2("categories", options);
});

const all_get$f = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: all_get$e
});

const count_get = defineEventHandler(async (event) => {
  const params = getQuery$1(event);
  let options = {};
  if (params.where)
    options.where = getWhere("categories", params.where);
  return getCountTable("categories", options);
});

const count_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: count_get
});

const del_delete$e = defineEventHandler(async (event) => {
  const id = await readBody(event);
  const response = {};
  try {
    const optionsWhere = {
      where: {
        id
      }
    };
    const count = await sequelize.models.categories.count(optionsWhere);
    if (count === 0) {
      response.status = 202;
      response.typeMessage = "warning";
      response.message = "\u0422\u0430\u043A\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!";
    } else {
      const linkCount = await sequelize.models.link_categories.count({ where: { id_category: id } });
      if (linkCount > 0) {
        response.status = 202;
        response.typeMessage = "warning";
        response.message = "\u041D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0443\u0434\u0430\u043B\u0438\u0442\u044C, \u0442\u0430\u043A \u043A\u0430\u043A \u0441 \u044D\u0442\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u044C\u044E \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B \u043E\u0444\u0444\u0435\u0440\u044B!";
        return response;
      }
      response.status = 200;
      response.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u0443\u0434\u0430\u043B\u0435\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E";
      response.typeMessage = "success";
      response.data = await sequelize.models.categories.destroy(optionsWhere);
    }
    return response;
  } catch (error) {
    const err = getErrorResponse(error);
    throw createError(err);
  }
});

const del_delete$f = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: del_delete$e
});

const edit_post$e = defineEventHandler(async (event) => {
  const params = await readBody(event);
  return await updateItem("categories", params);
});

const edit_post$f = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: edit_post$e
});

const config$1 = useRuntimeConfig();
const getList$1 = async () => {
  return new Promise((resolve, reject) => {
    let result = "";
    const url = "http://api.leads.su/webmaster/dictionary/categories?token=";
    const token = config$1.token_leads;
    http.get(`${url}${token}`, (res) => {
      res.on("data", (data) => {
        result += data;
      });
      res.on("end", () => {
        result = JSON.parse(result);
        resolve(result);
      });
    });
  });
};
const addItems$1 = async (list) => {
  for await (const item of list) {
    delete item.id;
    const optionsWhere = {
      where: {
        name: item.name
      }
    };
    const count = await sequelize.models.categories.count(optionsWhere);
    if (count === 0)
      await sequelize.models.categories.create(item);
  }
};
const getLeads_get$2 = defineEventHandler(async (event) => {
  let list = await getList$1();
  list = list.data;
  await addItems$1(list);
  return true;
});

const getLeads_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: getLeads_get$2
});

const add_post$a = defineEventHandler(async (event) => {
  const params = await readBody(event);
  const response = {};
  try {
    const optionsWhere = {
      where: {
        name: params.name
      }
    };
    const count = await sequelize.models.cpa.count(optionsWhere);
    if (count > 0) {
      response.status = 217;
      response.typeMessage = "warning";
      response.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u0441 \u0442\u0430\u043A\u0438\u043C \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0442";
    } else {
      response.status = 200;
      response.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E";
      response.typeMessage = "success";
      response.data = await sequelize.models.cpa.create(params);
    }
    return response;
  } catch (error) {
    const err = getErrorResponse(error);
    throw createError(err);
  }
});

const add_post$b = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: add_post$a
});

const all_get$c = defineEventHandler(async (event) => {
  return getList$2("cpa");
});

const all_get$d = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: all_get$c
});

const del_delete$c = defineEventHandler(async (event) => {
  const id = await readBody(event);
  const response = {};
  try {
    const optionsWhere = {
      where: {
        id
      }
    };
    const count = await sequelize.models.cpa.count(optionsWhere);
    if (count === 0) {
      response.status = 202;
      response.typeMessage = "warning";
      response.message = "\u0422\u0430\u043A\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!";
    } else {
      response.status = 200;
      response.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u0443\u0434\u0430\u043B\u0435\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E";
      response.typeMessage = "success";
      response.data = await sequelize.models.cpa.destroy(optionsWhere);
    }
    return response;
  } catch (error) {
    const err = getErrorResponse(error);
    throw createError(err);
  }
});

const del_delete$d = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: del_delete$c
});

const edit_post$c = defineEventHandler(async (event) => {
  const params = await readBody(event);
  const response = {};
  try {
    const optionWhere = {
      where: {
        id: params.id
      }
    };
    delete params.id;
    delete params.isActive;
    response.status = 200;
    response.typeMessage = "success";
    response.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E";
    response.data = await sequelize.models.cpa.update(params, optionWhere);
    return response;
  } catch (error) {
    const err = getErrorResponse(error);
    throw createError(err);
  }
});

const edit_post$d = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: edit_post$c
});

const listApi = {
  /** Категории */
  categories: {
    url: "categories",
    title: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"
  }
};

const list = /*#__PURE__*/Object.freeze({
  __proto__: null,
  listApi: listApi
});

const add_post$8 = defineEventHandler(async (event) => {
  const params = await readBody(event);
  const result = {};
  try {
    const optionsWhere = {
      where: {
        name: params.name
      }
    };
    const count = await sequelize.models.method_get_money.count(optionsWhere);
    if (count > 0) {
      result.status = 217;
      result.typeMessage = "warning";
      result.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u0441 \u0442\u0430\u043A\u0438\u043C \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0442";
    } else {
      result.status = 200;
      result.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E";
      result.typeMessage = "success";
      result.data = await sequelize.models.method_get_money.create(params);
    }
    return result;
  } catch (error) {
    let message = error.errors ? error.errors.map((el) => el.message).join("\n") : "";
    throw createError({
      statusCode: 400,
      // установка статуса ответа
      message
      // установка текста сообщения
    });
  }
});

const add_post$9 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: add_post$8
});

const all_get$a = defineEventHandler(async (event) => {
  try {
    return await sequelize.models.method_get_money.findAll({ order: ["name"] });
  } catch (error) {
    let message = "";
    message = error && error.errors && error.errors.length ? error.errors.map((el) => el.message).join("\n") : "";
    if (error.original && error.original.hint)
      message = error.original.message + "; " + error.original.hint;
    throw createError({
      statusCode: 400,
      // установка статуса ответа
      message
      // установка текста сообщения
    });
  }
});

const all_get$b = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: all_get$a
});

const del_delete$a = defineEventHandler(async (event) => {
  const id = await readBody(event);
  const result = {};
  try {
    const optionsWhere = {
      where: {
        id
      }
    };
    const count = await sequelize.models.method_get_money.count(optionsWhere);
    if (count === 0) {
      result.status = 202;
      result.typeMessage = "warning";
      result.message = "\u0422\u0430\u043A\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!";
    } else {
      result.status = 200;
      result.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u0443\u0434\u0430\u043B\u0435\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E";
      result.typeMessage = "success";
      result.data = await sequelize.models.method_get_money.destroy(optionsWhere);
    }
    return result;
  } catch (error) {
    let message = error.errors ? error.errors.map((el) => el.message).join("\n") : "";
    if (error.original && error.original.hint)
      message += error.original.message + "; " + error.original.hint;
    throw createError({
      statusCode: 400,
      message
    });
  }
});

const del_delete$b = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: del_delete$a
});

const edit_post$a = defineEventHandler(async (event) => {
  const params = await readBody(event);
  const result = {};
  try {
    const optionWhere = {
      where: {
        id: params.id
      }
    };
    delete params.id;
    delete params.isActive;
    result.status = 200;
    result.typeMessage = "success";
    result.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E";
    result.data = await sequelize.models.method_get_money.update(params, optionWhere);
    return result;
  } catch (error) {
    let message = error.errors ? error.errors.map((el) => el.message).join("\n") : "";
    if (error.original && error.original.hint)
      message += error.original.message + "; " + error.original.hint;
    throw createError({
      statusCode: 400,
      // установка статуса ответа
      message
      // установка текста сообщения
    });
  }
});

const edit_post$b = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: edit_post$a
});

const config = useRuntimeConfig();
const getList = async () => {
  return new Promise((resolve, reject) => {
    let result = "";
    const url = "http://api.leads.su/webmaster/dictionary/paymentTypes?token=";
    const token = config.token_leads;
    http.get(`${url}${token}`, (res) => {
      res.on("data", (data) => {
        result += data;
      });
      res.on("end", () => {
        result = JSON.parse(result);
        resolve(result);
      });
    });
  });
};
const addItems = async (list) => {
  for await (const item of list) {
    delete item.id;
    const optionsWhere = {
      where: {
        name: item.name
      }
    };
    const count = await sequelize.models.method_get_money.count(optionsWhere);
    if (count === 0)
      await sequelize.models.method_get_money.create(item);
  }
};
const getLeads_get = defineEventHandler(async (event) => {
  let list = await getList();
  list = list.data;
  await addItems(list);
  return true;
});

const getLeads_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: getLeads_get
});

const add_post$6 = defineEventHandler(async (event) => {
  const { models } = sequelize;
  const params = await readBody(event);
  const result = {};
  try {
    const optionsWhere = {
      where: {
        name: params.name
      }
    };
    const count = await models.offers.count(optionsWhere);
    if (count > 0) {
      result.status = 217;
      result.typeMessage = "warning";
      result.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u0441 \u0442\u0430\u043A\u0438\u043C \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0442";
    } else {
      result.status = 200;
      result.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E";
      result.typeMessage = "success";
      result.data = await models.offers.create(params);
    }
    return result;
  } catch (error) {
    let message = error.errors ? error.errors.map((el) => el.message).join("\n") : "";
    throw createError({
      statusCode: 400,
      // установка статуса ответа
      message
      // установка текста сообщения
    });
  }
});

const add_post$7 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: add_post$6
});

const all_get$8 = defineEventHandler(async (event) => {
  try {
    const query = `SELECT
    offers.id,
    offers.name,
    offers.id_cpa,
    offers.description,
    offers.short_description,
    offers.sum_start,
    offers.sum_end,
    offers.free_period,
    offers.type_free_period,
    offers.period_min,
    offers.type_period_min,
    offers.period_max,
    offers.type_period_max,
    offers.review_time,
    offers.type_review_time,
    offers.age_start,
    offers.age_end,
    offers.percent_min,
    offers.type_percent_min,
    offers.percent_max,
    offers.type_percent_max,
    offers.profit,
    offers.description_profit,
    offers.url_offer,
    offers.cr,
    offers.ar,
    offers.epc,
    offers.status,
    offers.type_profit,
    img.path AS image,
    (SELECT
      array_agg(path)
    FROM
      prod.img_offers AS img
    WHERE img.id_offer = offers.id) AS images,
        (SELECT array_agg(id_category) FROM prod.link_categories AS link WHERE link.id_offer = offers.id) AS link_categories,
        (SELECT array_agg(id_method_get_money) FROM prod.link_get_money AS link WHERE link.id_offer = offers.id) AS link_method_get_money
        FROM prod.offers AS offers
        LEFT JOIN prod.img_offers AS img ON img.id = offers.img_offer_id
      `;
    let result = await sequelize.query(query, { raw: true });
    return result[0];
  } catch (error) {
    let message = "";
    message = error && error.errors && error.errors.length ? error.errors.map((el) => el.message).join("\n") : "";
    if (error.original && error.original.hint)
      message = error.original.message + "; " + error.original.hint;
    throw createError({
      statusCode: 400,
      // установка статуса ответа
      message
      // установка текста сообщения
    });
  }
});

const all_get$9 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: all_get$8
});

const del_delete$8 = defineEventHandler(async (event) => {
  const body = await readBody(event);
  let result;
  try {
    const optionsWhere = { where: {
      id: +body
    } };
    const count = await sequelize.models.offers.count(optionsWhere);
    result = count === 0 ? { message: "\u0417\u0430\u043F\u0438\u0441\u0438 \u0441 \u0442\u0430\u043A\u0438\u043C \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u043E\u043C \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442" } : await sequelize.models.offers.destroy(optionsWhere);
  } catch (error) {
    result = error && error.errors && error.errors.length && error.errors[0].message ? { error: error.errors[0].message } : { error };
  }
  return result;
});

const del_delete$9 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: del_delete$8
});

const edit_post$8 = defineEventHandler(async (event) => {
  const { models } = sequelize;
  const t = await sequelize.transaction();
  const body = await readBody(event);
  if (body && body.image) {
    const image = await models.img_offers.findOne({ where: { id_offer: body.id, path: body.image } });
    body.img_offer_id = image.id;
  }
  const result = {};
  try {
    const fields = [
      "name",
      "id_cpa",
      "description",
      "short_description",
      "sum_start",
      "sum_end",
      "free_period",
      "type_free_period",
      "period_min",
      "type_period_min",
      "period_max",
      "type_period_max",
      "review_time",
      "type_review_time",
      "age_start",
      "age_end",
      "percent_min",
      "type_percent_min",
      "percent_max",
      "type_percent_max",
      "profit",
      "description_profit",
      "url_offer",
      "site",
      "cr",
      "ar",
      "epc",
      "status",
      "type_profit",
      "img_offer_id"
    ];
    const params = { transaction: t, where: { id: body.id }, fields, returning: true };
    const offer = await models.offers.update(body, params);
    await models.link_get_money.destroy({ where: { id_offer: body.id } });
    const arrMethodGetMoney = body.link_method_get_money.map((el) => {
      return {
        id_offer: body.id,
        id_method_get_money: el
      };
    });
    await models.link_get_money.bulkCreate(arrMethodGetMoney);
    await models.link_categories.destroy({ where: { id_offer: body.id } });
    const arrCategories = body.link_categories.map((el) => {
      return {
        id_offer: body.id,
        id_category: el
      };
    });
    await models.link_categories.bulkCreate(arrCategories);
    await t.commit();
    result.status = 200;
    result.typeMessage = "success";
    result.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E";
    result.data = offer[1][0];
    return result;
  } catch (error) {
    await t.rollback();
  }
});

const edit_post$9 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: edit_post$8
});

const useFiles = async (event) => {
  return new Promise((resolve) => {
    const { req } = event;
    const files = [];
    const fields = {};
    const busboy = Busboy({ headers: req.headers, defCharset: "utf8" });
    busboy.on("file", (name, file, info) => {
      const { filename, encoding, mimeType } = info;
      var chunks = [];
      file.on("data", (chunk) => {
        chunks.push(chunk);
      });
      file.on("end", () => {
        files.push({
          fieldname: name,
          filename,
          encoding,
          mimetype: mimeType,
          buffer: Buffer.concat(chunks)
        });
      });
    });
    busboy.on("field", (name, value, info) => {
      fields[name] = value;
    });
    busboy.on("finish", () => {
      resolve({ files, fields });
    });
    req.pipe(busboy);
  });
};
const useFiles$1 = useFiles;

const loadImage_post$2 = defineEventHandler(async (event) => {
  const query = getQuery$1(event);
  const { files } = await useFiles$1(event);
  const filename = Buffer.from(files[0].filename, "latin1").toString("utf8");
  if (await !fs.existsSync(`public/img/offers/${query.id}`))
    await fs.mkdirSync(`public/img/offers/${query.id}`);
  await fs.writeFileSync(`public/img/offers/${query.id}/${filename}`, files[0].buffer);
  let path = `offers/${query.id}/${filename}`;
  if (!checkFile$1(path))
    return { status: "warning", message: "\u0422\u0430\u043A\u043E\u0439 \u0444\u0430\u0439\u043B\u0430 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u0438" };
  if (await getCount$1(path, query.id) > 0)
    return { status: "warning", message: "\u0414\u0430\u043D\u043D\u044B\u0435 \u043E \u0444\u0430\u0439\u043B\u0435 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E \u0432 \u0411\u0414" };
  const paramsCreate = {
    id_offer: query.id,
    // идентификатор организации
    path
    // пусть к файлу
  };
  await sequelize.models.img_offers.create(paramsCreate);
  return { status: "success", message: `\u0424\u0430\u0439\u043B: ${filename} 
 \u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D`, path };
});
const getCount$1 = async (path, id_offer) => {
  const paramsQuery = {
    where: {
      [Op.and]: [
        { path },
        // путь к файлу
        { id_offer }
        // идентификатор организации]
      ]
    }
  };
  return await sequelize.models.img_offers.count(paramsQuery);
};
const checkFile$1 = async (path) => {
  return fs.existsSync(path);
};

const loadImage_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: loadImage_post$2
});

const add_put = defineEventHandler(async (event) => {
  const params = await readBody(event);
  const result = {};
  try {
    const optionsWhere = {
      where: {
        name: params.name
      }
    };
    const count = await sequelize.models.organizations.count(optionsWhere);
    if (count > 0) {
      result.status = 217;
      result.typeMessage = "warning";
      result.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u0441 \u0442\u0430\u043A\u0438\u043C \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0442";
    } else {
      result.data = await sequelize.models.organizations.create(params);
      result.status = 200;
      result.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E";
      result.typeMessage = "success";
    }
    return result;
  } catch (error) {
    let message = error.errors ? error.errors.map((el) => el.message).join("\n") : "";
    throw createError({
      statusCode: 400,
      // установка статуса ответа
      message
      // установка текста сообщения
    });
  }
});

const add_put$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: add_put
});

const all_get$6 = defineEventHandler(async (event) => {
  try {
    const query = `
    SELECT
      org.id, -- \u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440
      org.name, -- \u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435
      short_description, -- \u041A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435
      org.description, -- \u041F\u043E\u043B\u043D\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435
      org.site, -- \u0421\u0430\u0439\u0442 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438
      img.path AS image, -- \u041E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438
      (SELECT
          array_agg(path)
        FROM
          prod.img_organization AS img
        WHERE img.id_organization = org.id) AS images
    FROM prod.organizations AS org
    LEFT JOIN prod.img_organization AS img ON img.id = org.img_organization_id
    ORDER BY name
    `;
    return await sequelize.query(query);
  } catch (error) {
    let message = "";
    message = error && error.errors && error.errors.length ? error.errors.map((el) => el.message).join("\n") : "";
    if (error.original && error.original.hint)
      message = error.original.message + "; " + error.original.hint;
    throw createError({
      statusCode: 400,
      // установка статуса ответа
      message
      // установка текста сообщения
    });
  }
});

const all_get$7 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: all_get$6
});

const del_delete$6 = defineEventHandler(async (event) => {
  const id = await readBody(event);
  const result = {};
  try {
    const optionsWhere = {
      where: {
        id
      }
    };
    const count = await sequelize.models.organizations.count(optionsWhere);
    if (count === 0) {
      result.status = 202;
      result.typeMessage = "warning";
      result.message = "\u0422\u0430\u043A\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!";
    } else {
      result.status = 200;
      result.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u0443\u0434\u0430\u043B\u0435\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E";
      result.typeMessage = "success";
      result.data = await sequelize.models.organizations.destroy(optionsWhere);
    }
    return result;
  } catch (error) {
    let message = error.errors ? error.errors.map((el) => el.message).join("\n") : "";
    if (error.original && error.original.hint)
      message += error.original.message + "; " + error.original.hint;
    throw createError({
      statusCode: 400,
      message
    });
  }
});

const del_delete$7 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: del_delete$6
});

const deleteImage_post = defineEventHandler(async (event) => {
  const params = await readBody(event);
  const queryParams = {
    where: {
      [Op.and]: [
        { path: params.path },
        { id_organization: params.id_organization }
      ]
    }
  };
  let resDel = await sequelize.models.img_organization.destroy(queryParams);
  if (resDel === 1) {
    fs.unlinkSync(`public/img/${params.path}`);
    return { status: "success", message: "\u0424\u0430\u0439\u043B \u0443\u0434\u0430\u043B\u0435\u043D \u0443\u0441\u043F\u0435\u0448\u043D\u043E" };
  } else
    return { status: "error", message: "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0438 \u0444\u0430\u0439\u043B\u0430" };
});

const deleteImage_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: deleteImage_post
});

const edit_post$6 = defineEventHandler(async (event) => {
  const t = await sequelize.transaction();
  const body = await readBody(event);
  if (body && body.image) {
    const image = await sequelize.models.img_organization.findOne({ where: { id_organization: body.id, path: body.image } });
    body.img_organization_id = image.id;
  }
  const result = {};
  try {
    const fields = ["name", "short_description", "description", "site", "img_organization_id"];
    const params = { transaction: t, where: { id: body.id }, fields, returning: true };
    const edit = await sequelize.models.organizations.update(body, params);
    await t.commit();
    result.status = 200;
    result.typeMessage = "success";
    result.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E";
    result.data = edit[1][0];
    return result;
  } catch (error) {
    await t.rollback();
  }
});

const edit_post$7 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: edit_post$6
});

const loadImage_post = defineEventHandler(async (event) => {
  const query = getQuery$1(event);
  const { files } = await useFiles$1(event);
  const filename = Buffer.from(files[0].filename, "latin1").toString("utf8");
  if (await !fs.existsSync(`public/img/organizations/${query.id}`))
    await fs.mkdirSync(`public/img/organizations/${query.id}`);
  await fs.writeFileSync(`public/img/organizations/${query.id}/${filename}`, files[0].buffer);
  let path = `organizations/${query.id}/${filename}`;
  if (!checkFile(path))
    return { status: "warning", message: "\u0422\u0430\u043A\u043E\u0439 \u0444\u0430\u0439\u043B\u0430 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u0438" };
  if (await getCount(path, query.id) > 0)
    return { status: "warning", message: "\u0414\u0430\u043D\u043D\u044B\u0435 \u043E \u0444\u0430\u0439\u043B\u0435 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E \u0432 \u0411\u0414" };
  const paramsCreate = {
    id_organization: query.id,
    // идентификатор организации
    path
    // пусть к файлу
  };
  await sequelize.models.img_organization.create(paramsCreate);
  return { status: "success", message: `\u0424\u0430\u0439\u043B: ${filename} 
 \u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D`, path };
});
const getCount = async (path, id_organization) => {
  const paramsQuery = {
    where: {
      [Op.and]: [
        { path },
        // путь к файлу
        { id_organization }
        // идентификатор организации]
      ]
    }
  };
  return await sequelize.models.img_organization.count(paramsQuery);
};
const checkFile = async (path) => {
  return fs.existsSync(path);
};

const loadImage_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: loadImage_post
});

const _____ = defineEventHandler(async (event) => {
});

const _____$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _____
});

const add_post$4 = defineEventHandler(async (event) => {
  const params = await readBody(event);
  const result = {};
  try {
    const optionsWhere = {
      where: {
        name: params.name
      }
    };
    const count = await sequelize.models.type_docs.count(optionsWhere);
    if (count > 0) {
      result.status = 217;
      result.typeMessage = "warning";
      result.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u0441 \u0442\u0430\u043A\u0438\u043C \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0442";
    } else {
      result.status = 200;
      result.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E";
      result.typeMessage = "success";
      result.data = await sequelize.models.type_docs.create(params);
    }
    return result;
  } catch (error) {
    let message = error.errors ? error.errors.map((el) => el.message).join("\n") : "";
    throw createError({
      statusCode: 400,
      // установка статуса ответа
      message
      // установка текста сообщения
    });
  }
});

const add_post$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: add_post$4
});

const all_get$4 = defineEventHandler(async (event) => {
  try {
    return await sequelize.models.type_docs.findAll({ order: ["name"] });
  } catch (error) {
    let message = "";
    message = error && error.errors && error.errors.length ? error.errors.map((el) => el.message).join("\n") : "";
    if (error.original && error.original.hint)
      message = error.original.message + "; " + error.original.hint;
    throw createError({
      statusCode: 400,
      // установка статуса ответа
      message
      // установка текста сообщения
    });
  }
});

const all_get$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: all_get$4
});

const del_delete$4 = defineEventHandler(async (event) => {
  const id = await readBody(event);
  const result = {};
  try {
    const optionsWhere = {
      where: {
        id
      }
    };
    const count = await sequelize.models.type_docs.count(optionsWhere);
    if (count === 0) {
      result.status = 202;
      result.typeMessage = "warning";
      result.message = "\u0422\u0430\u043A\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!";
    } else {
      result.status = 200;
      result.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u0443\u0434\u0430\u043B\u0435\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E";
      result.typeMessage = "success";
      result.data = await sequelize.models.type_docs.destroy(optionsWhere);
    }
    return result;
  } catch (error) {
    let message = error.errors ? error.errors.map((el) => el.message).join("\n") : "";
    if (error.original && error.original.hint)
      message += error.original.message + "; " + error.original.hint;
    throw createError({
      statusCode: 400,
      message
    });
  }
});

const del_delete$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: del_delete$4
});

const edit_post$4 = defineEventHandler(async (event) => {
  const params = await readBody(event);
  const result = {};
  try {
    const optionWhere = {
      where: {
        id: params.id
      }
    };
    delete params.id;
    delete params.isActive;
    result.status = 200;
    result.typeMessage = "success";
    result.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E";
    result.data = await sequelize.models.type_docs.update(params, optionWhere);
    return result;
  } catch (error) {
    let message = error.errors ? error.errors.map((el) => el.message).join("\n") : "";
    if (error.original && error.original.hint)
      message += error.original.message + "; " + error.original.hint;
    throw createError({
      statusCode: 400,
      // установка статуса ответа
      message
      // установка текста сообщения
    });
  }
});

const edit_post$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: edit_post$4
});

const add_post$2 = defineEventHandler(async (event) => {
  const params = await readBody(event);
  const result = {};
  try {
    const optionsWhere = {
      where: {
        name: params.name
      }
    };
    const count = await sequelize.models.type_profit.count(optionsWhere);
    if (count > 0) {
      result.status = 217;
      result.typeMessage = "warning";
      result.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u0441 \u0442\u0430\u043A\u0438\u043C \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0442";
    } else {
      result.status = 200;
      result.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E";
      result.typeMessage = "success";
      result.data = await sequelize.models.type_profit.create(params);
    }
    return result;
  } catch (error) {
    let message = error.errors ? error.errors.map((el) => el.message).join("\n") : "";
    throw createError({
      statusCode: 400,
      // установка статуса ответа
      message
      // установка текста сообщения
    });
  }
});

const add_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: add_post$2
});

const all_get$2 = defineEventHandler(async (event) => {
  try {
    return await sequelize.models.type_profit.findAll({ order: ["name"] });
  } catch (error) {
    let message = "";
    message = error && error.errors && error.errors.length ? error.errors.map((el) => el.message).join("\n") : "";
    if (error.original && error.original.hint)
      message = error.original.message + "; " + error.original.hint;
    throw createError({
      statusCode: 400,
      // установка статуса ответа
      message
      // установка текста сообщения
    });
  }
});

const all_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: all_get$2
});

const del_delete$2 = defineEventHandler(async (event) => {
  const id = await readBody(event);
  const result = {};
  try {
    const optionsWhere = {
      where: {
        id
      }
    };
    const count = await sequelize.models.type_profit.count(optionsWhere);
    if (count === 0) {
      result.status = 202;
      result.typeMessage = "warning";
      result.message = "\u0422\u0430\u043A\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!";
    } else {
      result.status = 200;
      result.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u0443\u0434\u0430\u043B\u0435\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E";
      result.typeMessage = "success";
      result.data = await sequelize.models.type_profit.destroy(optionsWhere);
    }
    return result;
  } catch (error) {
    let message = error.errors ? error.errors.map((el) => el.message).join("\n") : "";
    if (error.original && error.original.hint)
      message += error.original.message + "; " + error.original.hint;
    throw createError({
      statusCode: 400,
      message
    });
  }
});

const del_delete$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: del_delete$2
});

const edit_post$2 = defineEventHandler(async (event) => {
  const params = await readBody(event);
  const result = {};
  try {
    const optionWhere = {
      where: {
        id: params.id
      }
    };
    delete params.id;
    delete params.isActive;
    result.status = 200;
    result.typeMessage = "success";
    result.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E";
    result.data = await sequelize.models.type_profit.update(params, optionWhere);
    return result;
  } catch (error) {
    let message = error.errors ? error.errors.map((el) => el.message).join("\n") : "";
    if (error.original && error.original.hint)
      message += error.original.message + "; " + error.original.hint;
    throw createError({
      statusCode: 400,
      // установка статуса ответа
      message
      // установка текста сообщения
    });
  }
});

const edit_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: edit_post$2
});

const add_post = defineEventHandler(async (event) => {
  const params = await readBody(event);
  const result = {};
  try {
    const optionsWhere = {
      where: {
        name: params.name
      }
    };
    const count = await sequelize.models.types_period.count(optionsWhere);
    if (count > 0) {
      result.status = 217;
      result.typeMessage = "warning";
      result.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u0441 \u0442\u0430\u043A\u0438\u043C \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0442";
    } else {
      result.status = 200;
      result.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E";
      result.typeMessage = "success";
      result.data = await sequelize.models.types_period.create(params);
    }
    return result;
  } catch (error) {
    let message = error.errors ? error.errors.map((el) => el.message).join("\n") : "";
    throw createError({
      statusCode: 400,
      // установка статуса ответа
      message
      // установка текста сообщения
    });
  }
});

const add_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: add_post
});

const all_get = defineEventHandler(async (event) => {
  try {
    return await sequelize.models.types_period.findAll({ order: ["name"] });
  } catch (error) {
    let message = "";
    message = error && error.errors && error.errors.length ? error.errors.map((el) => el.message).join("\n") : "";
    if (error.original && error.original.hint)
      message = error.original.message + "; " + error.original.hint;
    throw createError({
      statusCode: 400,
      // установка статуса ответа
      message
      // установка текста сообщения
    });
  }
});

const all_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: all_get
});

const del_delete = defineEventHandler(async (event) => {
  const id = await readBody(event);
  const result = {};
  try {
    const optionsWhere = {
      where: {
        id
      }
    };
    const count = await sequelize.models.types_period.count(optionsWhere);
    if (count === 0) {
      result.status = 202;
      result.typeMessage = "warning";
      result.message = "\u0422\u0430\u043A\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!";
    } else {
      result.status = 200;
      result.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u0443\u0434\u0430\u043B\u0435\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E";
      result.typeMessage = "success";
      result.data = await sequelize.models.types_period.destroy(optionsWhere);
    }
    return result;
  } catch (error) {
    let message = error.errors ? error.errors.map((el) => el.message).join("\n") : "";
    if (error.original && error.original.hint)
      message += error.original.message + "; " + error.original.hint;
    throw createError({
      statusCode: 400,
      message
    });
  }
});

const del_delete$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: del_delete
});

const edit_post = defineEventHandler(async (event) => {
  const params = await readBody(event);
  const result = {};
  try {
    const optionWhere = {
      where: {
        id: params.id
      }
    };
    delete params.id;
    delete params.isActive;
    result.status = 200;
    result.typeMessage = "success";
    result.message = "\u0417\u0430\u043F\u0438\u0441\u044C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E";
    result.data = await sequelize.models.types_period.update(params, optionWhere);
    return result;
  } catch (error) {
    let message = error.errors ? error.errors.map((el) => el.message).join("\n") : "";
    if (error.original && error.original.hint)
      message += error.original.message + "; " + error.original.hint;
    throw createError({
      statusCode: 400,
      // установка статуса ответа
      message
      // установка текста сообщения
    });
  }
});

const edit_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: edit_post
});

const appRootId = "__nuxt";

const appRootTag = "div";

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const publicBase = useRuntimeConfig().app.cdnURL || useRuntimeConfig().app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('file://D:/Projects/finans/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getStaticRenderedHead = () => Promise.resolve().then(function () { return _virtual__headStatic$1; }).then((r) => r.default || r);
const getServerEntry = () => import('file://D:/Projects/finans/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return `<${appRootTag} id="${appRootId}">${html}</${appRootTag}>`;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "");
  const options = {
    manifest,
    renderToString: () => `<${appRootTag} id="${appRootId}">${spaTemplate}</${appRootTag}>`,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig();
    ssrContext.modules = ssrContext.modules || /* @__PURE__ */ new Set();
    ssrContext.payload = {
      _errors: {},
      serverRendered: false,
      data: {},
      state: {}
    };
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    ssrContext.renderMeta = ssrContext.renderMeta ?? getStaticRenderedHead;
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const PAYLOAD_URL_RE = /\/_payload(\.[a-zA-Z0-9]+)?.json(\?.*)?$/ ;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.node.req.url?.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = parseInt(ssrError.statusCode);
  }
  if (ssrError && event.node.req.socket.readyState !== "readOnly") {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const islandContext = void 0;
  let url = ssrError?.url || islandContext?.url || event.node.req.url;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url) && !islandContext;
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(),
    noSSR: event.context.nuxt?.noSSR || routeOptions.ssr === false || (false),
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: {},
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const renderedMeta = await ssrContext.renderMeta?.() ?? {};
  const inlinedStyles = Boolean(islandContext) ? await renderInlineStyles(ssrContext.modules ?? ssrContext._registeredComponents ?? []) : "";
  const NO_SCRIPTS = routeOptions.experimentalNoScripts;
  const htmlContext = {
    island: Boolean(islandContext),
    htmlAttrs: normalizeChunks([renderedMeta.htmlAttrs]),
    head: normalizeChunks([
      renderedMeta.headTags,
      null ,
      NO_SCRIPTS ? null : _rendered.renderResourceHints(),
      _rendered.renderStyles(),
      inlinedStyles,
      ssrContext.styles
    ]),
    bodyAttrs: normalizeChunks([renderedMeta.bodyAttrs]),
    bodyPrepend: normalizeChunks([
      renderedMeta.bodyScriptsPrepend,
      ssrContext.teleports?.body
    ]),
    body: [_rendered.html],
    bodyAppend: normalizeChunks([
      NO_SCRIPTS ? void 0 : renderPayloadJsonScript({ id: "__NUXT_DATA__", ssrContext, data: ssrContext.payload }) ,
      routeOptions.experimentalNoScripts ? void 0 : _rendered.renderScripts(),
      // Note: bodyScripts may contain tags other than <script>
      renderedMeta.bodyScripts
    ])
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: event.node.res.statusCode,
    statusMessage: event.node.res.statusMessage,
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  return chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html>
<html ${joinAttrs(html.htmlAttrs)}>
<head>${joinTags(html.head)}</head>
<body ${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>
</html>`;
}
async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(`<style>${style}</style>`);
      }
    }
  }
  return Array.from(inlinedStyles).join("");
}
function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: ssrContext.event.node.res.statusCode,
    statusMessage: ssrContext.event.node.res.statusMessage,
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const attrs = [
    'type="application/json"',
    `id="${opts.id}"`,
    `data-ssr="${!(opts.ssrContext.noSSR)}"`,
    opts.src ? `data-src="${opts.src}"` : ""
  ].filter(Boolean);
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  return `<script ${attrs.join(" ")}>${contents}<\/script><script>window.__NUXT__={};window.__NUXT__.config=${uneval(opts.ssrContext.config)}<\/script>`;
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: renderer
});

const _virtual__headStatic = {"headTags":"<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">","bodyTags":"","bodyTagsOpen":"","htmlAttrs":"","bodyAttrs":""};

const _virtual__headStatic$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _virtual__headStatic
});

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: styles
});

const template = "<svg class=\"nuxt-spa-loading\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 37 25\" fill=\"none\" width=\"80\"><path d=\"M24.236 22.006h10.742L25.563 5.822l-8.979 14.31a4 4 0 0 1-3.388 1.874H2.978l11.631-20 5.897 10.567\"></path></svg><style>.nuxt-spa-loading{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%)}.nuxt-spa-loading>path{fill:none;stroke:#00DC82;stroke-width:4px;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:128;stroke-dashoffset:128;animation:nuxt-spa-loading-move 3s linear infinite}@keyframes nuxt-spa-loading-move{100%{stroke-dashoffset:-128}}</style>";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template
});
//# sourceMappingURL=index.mjs.map
