import type { DeviceStatus } from "$lib";

const map = {
	"com.tencent.xin": "在应付消息",
	"com.apple.mobilesafari": "在查资料",
	"com.apple.mobilemail": "在工作",
	"com.tencent.ww": "在工作",
	"fan.lty.i": "在工作",
    "net.pxv.iphone": "在色色",
    "com.apple.mobilenotes": "在工作",
    "com.apple.Music": "在听歌",
    "com.baidu.homework": "在补作业"
};

export default function getDescription(status: DeviceStatus) {
    const packageName = status.packageNameOpening;
    const batteryLevel = status.batteryLevel;
    if (batteryLevel && batteryLevel < 0.2 && !status.isCharging)
        return "该去找充电器了";
	if (!packageName) return "在摸鱼";
	if (packageName in map) {
		return map[packageName as keyof typeof map];
	} else return "在摸鱼";
}
