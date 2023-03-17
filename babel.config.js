module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    ["nativewind/babel"],
    [
      "module-resolver",
      {
        alias: {
          "@/api": "./app/api",
          "@/assets": "./app/assets",
          "@/components": "./app/components",
          "@/core": "./app/core",
          "@/glossy": "./app/glossy",
          "@/hooks": "./app/hooks",
          "@/common": "./app/common",
          "@/providers": "./app/providers",
          "@/screens": "./app/screens",
          "@/utils": "./app/utils",
          "@/models": "./app/models",
          "@/helpers": "./app/helpers",
          "@/context": "./app/context",
        },
      },
    ],
  ],
};
