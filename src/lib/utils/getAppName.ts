const packageNameMap = {
    "com.tencent.xin": "微信",
    "com.tencent.mqq": "QQ",
    "tv.danmaku.bilianime": "哔哩哔哩",
    "com.ss.iphone.ugc.Aweme": "抖音",
    "com.zhihu.ios": "知乎",
    "com.xingin.discover": "小红书",
    "com.apple.mobilesafari": "Safari 浏览器",
    "com.apple.mobilemail": "邮件",
    "com.apple.mobileslideshow": "照片",
    "com.apple.mobilecal": "日历",
    "com.apple.weather": "天气",
    "com.apple.camera": "相机",
    "com.atebits.Tweetie2": "X",
    "ph.telegra.Telegraph": "Telegram",
    "xyz.blueskyweb.app": "BlueSky",
    "com.google.ios.youtube": "YouTube",
    "net.pxv.iphone": "Pixiv",
    "com.apple.mobilenotes": "Notes",
    "com.tencent.ww": "企业微信",
    "com.apple.Music": "音乐",
    "com.baidu.homework": "作业帮"
}

export default function getAppName(packageName: string) {
    if (packageName in packageNameMap) {
        return packageNameMap[packageName as keyof typeof packageNameMap];
    } else {
        return packageName;
    }
}
