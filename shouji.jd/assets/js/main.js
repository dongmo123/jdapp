require.config({
    baseUrl: "../../assets/js",
    paths: {
        "jquery": ["http://libs.baidu.com/jquery/2.0.3/jquery", "jquery.min.js"],
        "math": "math",
        "lunbo": "lunbo",
        "json": "json"
    }
})
require(['math']);
require(['json']);
require(['lunbo']);