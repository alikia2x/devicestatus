const packageNameMap = {
    "com.tencent.mm": "微信",
    "com.tencent.mqq": "QQ",
    "tv.danmaku.bilianime": "哔哩哔哩",
    "com.ss.iphone.ugc.Aweme": "抖音",
    "com.zhihu.ios": "知乎",
    "com.xingin.discover": "小红书",
    "com.apple.mobilesafari": "Safari 浏览器",
    "com.apple.mobilemail": "邮件",
}

export default function getAppName(packageName: string) {
    if (packageName in packageNameMap) {
        return packageNameMap[packageName as keyof typeof packageNameMap];
    } else {
        return packageName;
    }
}
