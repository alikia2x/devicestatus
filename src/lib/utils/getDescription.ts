const map = {
	"com.tencent.mm": "在应付消息",
	"com.tencent.mqq": "在摸鱼",
	"tv.danmaku.bilianime": "在摸鱼",
	"com.ss.iphone.ugc.Aweme": "在摸鱼",
	"com.zhihu.ios": "在摸鱼",
	"com.xingin.discover": "在摸鱼",
	"com.apple.mobilesafari": "在查资料",
	"com.apple.mobilemail": "在工作",
	"com.tencent.ww": "在工作",
	"fan.lty.i": "在工作",
};

export default function getDescription(packageName: string | null) {
	if (!packageName) return "漫无目的地刷手机";
	if (packageName in map) {
		return map[packageName as keyof typeof map];
	} else return "漫无目的地刷手机";
}
