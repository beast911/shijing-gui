module.exports = {
    presets: [
        ['@babel/preset-env',
        {
            modules: false,
            targets: {
                esmodules: true,
            },
        },],
        "module:metro-react-native-babel-preset"
    ],
    plugins: [
        ['@babel/plugin-proposal-class-properties', {loose:true}],
        [
            "module-resolver",
            {
                "alias": {
                    "^react-native$": "react-native-web"
                }
            }
        ]],
    env: {
        "development": {
            "plugins": ["transform-object-rest-spread", "@babel/plugin-proposal-class-properties"]
        }
    }
}