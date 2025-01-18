import type { DeviceStatus } from "$lib";

const packagenameMap = {
	"com.tencent.xin": "在应付消息",
	"com.apple.mobilesafari": "在查资料",
	"com.apple.mobilemail": "在工作",
	"com.tencent.ww": "在工作",
	"fan.lty.i": "在调试",
	"net.pxv.iphone": "在色色",
	"com.apple.mobilenotes": "在工作",
	"com.apple.Music": "在听歌",
	"com.baidu.homework": "在补作业",
	"com.microsoft.VSCode": "在写代码",
	"com.jetbrains.WebStorm": "在写代码",
	"com.apple.dt.Xcode": "在写代码",
	"com.apple.finder": "在干杂活",
	"com.Bosyun.Pixso": "在工作",
	"com.googlecode.iterm2": "干杂活",
	"org.mozilla.thunderbird": "在工作",
	"com.apple.iWork.Keynote": "在工作",
	"com.apple.iWork.Pages": "在工作",
	"com.apple.iWork.Numbers": "在工作",
	"org.mozilla.firefoxdeveloperedition": "在调试",
	"com.apple.ActivityMonitor": "在和邪恶进程斗智斗勇",
};

const urlMap = {
	"在查资料": {
		"match": [
			/^www\.google\.com/g,
			/^(zhuanlan|www)\.zhihu\.com/g,
			/^docs\.\w+\.\w+/g,
			/^developer\.\w+\.\w+/g,
			/^www\.cnblogs\.com/g,
			/^www\.npmjs\.com/g,
			/^bun\.sh/g,
			/^blog\.\w+\.\w+/g,
			/^www\.jianshu\.com/g,
			/^www\.csdn\.net/g,
			/^www\.juejin\.cn/g,
			/^www\.perplexity\.ai/g,
		],
		"blacklist": [
			/^docs\.(qq|google)\.\w+/,
		]
	},
	"在调试": {
		"match": [
			/localhost/g
		],
		"blacklist": []
	},
	"在自恋": {
		"match": [
			/^\w*\.*alikia2x\.com/g
		],
		"blacklist": [
			/^chat\.alikia2x\.com/g
		]
	},
	"在手撕正则表达式": {
		"match": [
			/.*regex.*/g
		],
		"blacklist": []
	},
	"在色色": {
		"match": [
			/^www\.pixiv\.net/g
		],
		"blacklist": []
	},
	"在鞭打AI": {
		"match": [
			/^chatgpt\.com/g,
			/^chat\.alikia2x\.com/g,
			/^gemini\.google\.com/g,
			"kimi.moonshot.cn"
		],
		"blacklist": []
	},
};

function getURLMatch(url: string) {
	for (const key in urlMap) {
		const match = urlMap[key as keyof typeof urlMap].match;
		const blacklist = urlMap[key as keyof typeof urlMap].blacklist;
		for (const regex of match) {
			if (url.match(regex)) {
				for (const regex of blacklist) {
					if (url.match(regex)) {
						return null;
					}
				}
				return key;
			}
		}
	}
	return null;
}

export default function getDescription(status: DeviceStatus) {
	const packageName = status.packageNameOpening;
	const batteryLevel = status.batteryLevel;
	const urlMatch = getURLMatch(status.url || "");
	if (urlMatch) return urlMatch;
	if (batteryLevel && batteryLevel < 0.2 && !status.isCharging)
		return "该去找充电器了";
	if (!packageName) return "在摸鱼";
	if (packageName in packagenameMap) {
		return packagenameMap[packageName as keyof typeof packagenameMap];
	} else return "在摸鱼";
}
