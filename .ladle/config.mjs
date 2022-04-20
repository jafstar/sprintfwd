export default {
    stories: "src/**/*.stories.{js,jsx,ts,tsx}",
    root: "./",
    publicDir: "public", // can be an absolute path or `false` to disable the feature
    enableFlow: false, // enable flow types support
    defaultStory: "", // default story id to load, alphabetical by default
    babelPresets: [],
    babelPlugins: [],
    vitePlugins: [], // https://vitejs.dev/config/#plugins
    envPrefix: "VITE_", // can be a string or string[]
    css: {
        modules: {}, // https://vitejs.dev/config/#css-modules
    },
    define: {}, // https://vitejs.dev/config/#define
    resolve: {
        alias: {}, // https://vitejs.dev/config/#resolve-alias
    },
    optimizeDeps: {
        include: [], // https://vitejs.dev/config/#optimizedeps-include
    },
    // enable/disable addons and their default state
    addons: {
        control: {
            enabled: true,
            defaultState: {},
        },
        theme: {
            enabled: true,
            defaultState: "light",
        },
        mode: {
            enabled: true,
            defaultState: "full",
        },
        rtl: {
            enabled: true,
            defaultState: false,
        },
        ladle: {
            enabled: true,
        },
    },
    serve: {
        open: "**Default**", // browser to open, none to open nothing
        port: 61000,
        define: {}, // https://vitejs.dev/config/#define for dev build
    },
    build: {
        out: "build",
        sourcemap: false,
        baseUrl: "/",
        define: {}, // https://vitejs.dev/config/#define for prod build
    },
};