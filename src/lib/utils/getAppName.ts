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
    "com.baidu.homework": "作业帮",
    "com.baidu.netdisk": "BaiduNetdisk",
    "com.meituan.itakeaway": "美团",
    "com.baidu.netdisk.loginhelper": "BaiduNetdisk Login Helper",
    "com.baidu.netdisk.helper.Plugin": "BaiduNetdisk Helper (Plugin)",
    "com.baidu.netdisk.helper.GPU": "BaiduNetdisk Helper (GPU)",
    "com.baidu.netdisk.helper.Renderer": "BaiduNetdisk Helper (Renderer)",
    "com.baidu.netdisk.helper": "BaiduNetdisk Helper",
    "com.microsoft.VSCode": "Visual Studio Code",
    "com.github.Electron": "Electron",
    "com.microsoft.VSCode.helper": "Code Helper",
    "org.kde.kid3": "kid3",
    "org.grunenberg.EasyFind": "EasyFind",
    "com.raycast.macos": "Raycast",
    "com.raycast.macos.RaycastLauncher": "RaycastLauncher",
    "com.blackmagic-design.DiskSpeedTest": "Blackmagic Disk Speed Test",
    "com.aone.keka": "Keka",
    "org.sparkle-project.Sparkle.Updater": "Updater",
    "wiki.qaq.fix.tim": "FixTim",
    "com.ookla.speedtest-macos": "Speedtest",
    "com.ookla.speedtest-macos-speedtesthelper": "SpeedTestHelper",
    "com.minmao.paste": "PasteEasy",
    "pro.betterdisplay.BetterDisplay": "BetterDisplay",
    "com.fabio286.antares": "Antares",
    "com.fabio286.antares.helper.Plugin": "Antares Helper (Plugin)",
    "com.fabio286.antares.helper": "Antares Helper",
    "com.fabio286.antares.helper.Renderer": "Antares Helper (Renderer)",
    "com.fabio286.antares.helper.GPU": "Antares Helper (GPU)",
    "com.google.Chrome": "Google Chrome",
    "com.google.Chrome.helper": "Google Chrome Helper",
    "com.google.Chrome.framework.AlertNotificationService": "Google Chrome Helper (Alerts)",
    "com.google.Chrome.helper.plugin": "Google Chrome Helper (Plugin)",
    "com.google.Chrome.helper.renderer": "Google Chrome Helper (Renderer)",
    "com.google.GoogleUpdater": "GoogleUpdater",
    "com.google.Keystone.Agent": "GoogleSoftwareUpdateAgent",
    "com.apple.iWork.Numbers": "Numbers",
    "org.localsend.localsendApp": "LocalSend",
    "org.localsend.localsendApp-LaunchAtLoginHelper": "LaunchAtLoginHelper",
    "com.aegisub.aegisub": "Aegisub",
    "com.colliderli.iina": "IINA",
    "com.apple.TestFlight": "TestFlight",
    "ru.keepcoder.Telegram": "Telegram",
    "com.parallels.desktop.console": "Parallels Desktop",
    "com.parallels.desktop.dispatcher": "Parallels Service",
    "com.parallels.vm": "Parallels VM",
    "com.parallels.macvm": "Parallels Mac VM",
    "com.parallels.TechnicalDataReporter": "Parallels Technical Data Reporter",
    "com.parallels.desktop.mounter": "Parallels Mounter",
    "com.parallels.SharedAppLink.Agent": "Parallels Link",
    "im.riot.app": "Element",
    "im.riot.app.helper.Renderer": "Element Helper (Renderer)",
    "im.riot.app.helper.Plugin": "Element Helper (Plugin)",
    "im.riot.app.helper.GPU": "Element Helper (GPU)",
    "im.riot.app.helper": "Element Helper",
    "com.apple.dt.Xcode": "Xcode",
    "previews.com.apple.PreviewAgent.Catalyst": "XCPreviewAgent",
    "previews.com.apple.PreviewAgent.macOS": "XCPreviewAgent",
    "com.apple.dt.Xcode-Helper": "Xcode Helper",
    "$(WRAPPEDPRODUCTBUNDLEIDENTIFIER)": "XCTRunner",
    "com.apple.IBCocoaSimulator3": "IBCocoaSimulator",
    "com.apple.GPUToolsAgent": "GPUToolsAgent",
    "com.apple.python3": "Python",
    "com.apple.iphonesimulator": "Simulator",
    "com.apple.CreateML": "Create ML",
    "com.apple.dt.Instruments": "Instruments",
    "com.apple.dt.instruments.backgroundinstruments": "backgroundinstruments",
    "com.apple.FileMerge": "FileMerge",
    "com.apple.RealityComposerPro": "Reality Composer Pro",
    "com.apple.AccessibilityInspector": "Accessibility Inspector",
    "cn.heisir.m3u8-downloader-mac": "M3U8-Downloader",
    "cn.heisir.m3u8-downloader-mac.helper.GPU": "M3U8-Downloader Helper (GPU)",
    "cn.heisir.m3u8-downloader-mac.helper.Plugin": "M3U8-Downloader Helper (Plugin)",
    "cn.heisir.m3u8-downloader-mac.helper.Renderer": "M3U8-Downloader Helper (Renderer)",
    "cn.heisir.m3u8-downloader-mac.helper": "M3U8-Downloader Helper",
    "com.attilamiklosi.yos.launchpadmanager": "Launchpad Manager",
    "com.coconut-flavour.coconutBattery": "coconutBattery",
    "com.coconut-flavour.coconutBattery-Menu": "coconutBattery Menu",
    "org.sparkle-project.Sparkle.Autoupdate": "Autoupdate",
    "net.webrecorder.replaywebpage": "ReplayWeb.page",
    "net.webrecorder.replaywebpage.helper.GPU": "ReplayWeb.page Helper (GPU)",
    "net.webrecorder.replaywebpage.helper.Renderer": "ReplayWeb.page Helper (Renderer)",
    "net.webrecorder.replaywebpage.helper": "ReplayWeb.page Helper",
    "net.webrecorder.replaywebpage.helper.Plugin": "ReplayWeb.page Helper (Plugin)",
    "se.mikaellofgren.wandra": "Wandra",
    "com.alicloud.smartdrive": "aDrive",
    "com.alicloud.smartdrive.helper.GPU": "aDrive Helper (GPU)",
    "com.alicloud.smartdrive.helper.Plugin": "aDrive Helper (Plugin)",
    "com.alicloud.smartdrive.helper.Renderer": "aDrive Helper (Renderer)",
    "com.alicloud.smartdrive.helper": "aDrive Helper",
    "io.beekeeperstudio.desktop": "Beekeeper Studio",
    "io.beekeeperstudio.desktop.helper.Plugin": "Beekeeper Studio Helper (Plugin)",
    "io.beekeeperstudio.desktop.helper.Renderer": "Beekeeper Studio Helper (Renderer)",
    "io.beekeeperstudio.desktop.helper.GPU": "Beekeeper Studio Helper (GPU)",
    "io.beekeeperstudio.desktop.helper": "Beekeeper Studio Helper",
    "dev.zed.Zed": "Zed",
    "org.m0k.transmission": "Transmission",
    "com.googlecode.iterm2.iTermAI": "iTermAI",
    "com.google.drivefs": "Google Drive",
    "com.google.drivefs.finderhelper": "FinderHelper",
    "com.google.drivefs.helper.plugin": "Google Drive Helper (Plugin)",
    "com.google.drivefs.helper.gpu": "Google Drive Helper (GPU)",
    "com.google.drivefs.helper": "Google Drive Helper",
    "com.google.drivefs.helper.renderer": "Google Drive Helper (Renderer)",
    "org.audacityteam.audacity": "Audacity",
    "com.docker.docker": "Docker",
    "com.electron.dockerdesktop": "Docker Desktop",
    "com.electron.dockerdesktop.helper.Renderer": "Docker Desktop Helper (Renderer)",
    "com.electron.dockerdesktop.helper": "Docker Desktop Helper",
    "com.electron.dockerdesktop.helper.GPU": "Docker Desktop Helper (GPU)",
    "com.electron.dockerdesktop.helper.Plugin": "Docker Desktop Helper (Plugin)",
    "com.docker.helper": "DockerHelper",
    "com.superhighfives.Pika": "Pika",
    "com.superhighfives.Pika-LaunchAtLoginHelper": "LaunchAtLoginHelper",
    "io.balena.etcher": "balenaEtcher",
    "io.balena.etcher.helper.Renderer": "balenaEtcher Helper (Renderer)",
    "io.balena.etcher.helper.Plugin": "balenaEtcher Helper (Plugin)",
    "io.balena.etcher.helper.GPU": "balenaEtcher Helper (GPU)",
    "io.balena.etcher.helper": "balenaEtcher Helper",
    "org.mozilla.com.zen.browser": "Zen Browser",
    "org.mozilla.plugincontainer": "plugin-container",
    "org.mozilla.updater": "updater",
    "org.mozilla.zen-browser-media-plugin-helper": "media-plugin-helper",
    "com.fatcatsoftware.pledpro": "PlistEdit Pro",
    "com.tencent.meeting": "TencentMeeting",
    "com.tencent.meeting.services.wmexternal": "wmexternal",
    "com.tencent.meeting.TranscodeBridge": "TranscodeBridge",
    "com.tencent.meeting.WemeetLauncher": "WemeetLauncher",
    "com.tencent.wemeet.FileDelta": "FileDelta",
    "com.tencent.meeting.Transcode": "Transcode",
    "com.apple.Safari": "Safari",
    "org.gpgtools.gpgkeychain": "GPG Keychain",
    "company.thebrowser.Browser": "Arc",
    "company.thebrowser.UtilityProcess": "Arc (UtilityProcess)",
    "company.thebrowser.browser.framework.AlertNotificationService": "Arc Helper (Alerts)",
    "company.thebrowser.browser.helper.plugin": "Arc Helper (Plugin)",
    "company.thebrowser.browser.helper": "Arc Helper (GPU)",
    "company.thebrowser.browser.helper.renderer": "Arc Helper (Renderer)",
    "as.wiki.qaq.kimis": "Kimis",
    "com.endel.endel": "Endel",
    "org.mozilla.pale moon": "Pale Moon",
    "org.yuanli.utools": "uTools",
    "org.yuanli.utools.helper.GPU": "uTools Helper (GPU)",
    "org.yuanli.utools.helper.Plugin": "uTools Helper (Plugin)",
    "org.yuanli.utools.helper": "uTools Helper",
    "org.yuanli.utools.helper.Renderer": "uTools Helper (Renderer)",
    "io.github.nolze.tiny-wifi-analyzer": "Tiny Wi-Fi Analyzer",
    "io.ipfs.desktop": "IPFS Desktop",
    "io.ipfs.desktop.helper.Renderer": "IPFS Desktop Helper (Renderer)",
    "io.ipfs.desktop.helper.GPU": "IPFS Desktop Helper (GPU)",
    "io.ipfs.desktop.helper": "IPFS Desktop Helper",
    "io.ipfs.desktop.helper.Plugin": "IPFS Desktop Helper (Plugin)",
    "org.mozilla.firefoxdeveloperedition": "Firefox Developer Edition",
    "org.mozilla.crashreporter": "crashreporter",
    "org.mozilla.firefox-developer-edition-media-plugin-helper": "media-plugin-helper",
    "com.apple.appleseed.FeedbackAssistant": "Feedback Assistant",
    "Adobe.ACCFinderBundleLoader": "ACCFinderBundleLoader",
    "com.adobe.accmac": "Core Sync",
    "com.adobe.LogTransport.LogTransport": "LogTransport",
    "com.adobe.AdobeCRDaemon": "AdobeCRDaemon",
    "com.adobe.crashreporter": "Adobe Crash Reporter",
    "com.hdthomas.FieldGuide": "Interactful",
    "com.openai.chat": "ChatGPT",
    "net.kovidgoyal.calibre": "calibre",
    "com.calibre-ebook.ebook-viewer": "ebook-viewer",
    "com.calibre-ebook.ebook-edit": "ebook-edit",
    "com.calibre-ebook.calibre-parallel": "headless",
    "com.calibre-ebook.utils": "utils",
    "org.qt-project.Qt.QtWebEngineProcess": "QtWebEngineProcess",
    "com.tencent.xinWeChat": "WeChat",
    "com.tencent.xinWeChat.WeChatAppEx": "WeChatAppEx",
    "com.tencent.xinWeChat.WeChatAppEx.helper": "WeChatAppEx Helper (GPU)",
    "com.tencent.xinWeChat.WeChatAppEx.helper.plugin": "WeChatAppEx Helper (Plugin)",
    "com.tencent.xinWeChat.WeChatAppEx.helper.renderer": "WeChatAppEx Helper (Renderer)",
    "com.tencent.xinWeChat.WeChatAppEx.WeApp": "WeApp",
    "com.apple.iWork.Keynote": "Keynote",
    "org.mozilla.thunderbird": "Thunderbird",
    "org.mozilla.thunderbird-media-plugin-helper": "media-plugin-helper",
    "com.markmcguill.strongbox": "Strongbox",
    "io.github.keycastr": "KeyCastr",
    "org.darkreader.DarkReaderSafari": "Dark Reader for Safari",
    "org.krita": "krita",
    "app.motrix.native": "Motrix",
    "app.motrix.native.helper": "Motrix Helper",
    "app.motrix.native.helper.Plugin": "Motrix Helper (Plugin)",
    "app.motrix.native.helper.GPU": "Motrix Helper (GPU)",
    "app.motrix.native.helper.Renderer": "Motrix Helper (Renderer)",
    "com.sindresorhus.Color-Picker": "Color Picker",
    "com.apple.iWork.Pages": "Pages",
    "com.kyome.RunCat": "RunCat",
    "com.alikia2x.openrewind": "OpenRewind",
    "com.alikia2x.openrewind.helper.Renderer": "OpenRewind Helper (Renderer)",
    "com.alikia2x.openrewind.helper": "OpenRewind Helper",
    "com.alikia2x.openrewind.helper.Plugin": "OpenRewind Helper (Plugin)",
    "com.alikia2x.openrewind.helper.GPU": "OpenRewind Helper (GPU)",
    "macos-wakatime.WakaTime": "WakaTime",
    "macos-wakatime.WakaTimeHelper": "WakaTime Helper",
    "com.lemon.lvpro": "VideoFusion-macOS",
    "com.lemon.lvpro.helper": "VideoFusion-macOS",
    "com.lemon.lvpro.crash": "VECrashHandler",
    "com.jetpackduba.gitnuro": "Gitnuro",
    "com.okatbest.boop": "Boop",
    "com.electron.yesplaymusic": "YesPlayMusic",
    "com.electron.yesplaymusic.helper.GPU": "YesPlayMusic Helper (GPU)",
    "com.electron.yesplaymusic.helper.Plugin": "YesPlayMusic Helper (Plugin)",
    "com.electron.yesplaymusic.helper": "YesPlayMusic Helper",
    "com.electron.yesplaymusic.helper.Renderer": "YesPlayMusic Helper (Renderer)",
    "com.googlecode.iterm2": "iTerm",
    "com.googlecode.iterm2.iTerm2ImportStatus": "iTerm2ImportStatus",
    "com.iktm.snap": "Snap",
    "dev.commandline.waveterm": "Wave",
    "dev.commandline.waveterm.helper.Plugin": "Wave Helper (Plugin)",
    "dev.commandline.waveterm.helper": "Wave Helper",
    "dev.commandline.waveterm.helper.GPU": "Wave Helper (GPU)",
    "dev.commandline.waveterm.helper.Renderer": "Wave Helper (Renderer)",
    "com.memoryvault.MemoryVault": "Rewind",
    "com.caldis.Mos": "Mos",
    "com.bearisdriving.BGM.App": "Background Music",
    "com.zhuhaoyu.IconChanger": "IconChanger",
    "com.acreom.acreom-desktop": "acreom",
    "com.acreom.acreom-desktop.helper": "acreom Helper",
    "com.acreom.acreom-desktop.helper.Plugin": "acreom Helper (Plugin)",
    "com.acreom.acreom-desktop.helper.GPU": "acreom Helper (GPU)",
    "com.acreom.acreom-desktop.helper.Renderer": "acreom Helper (Renderer)",
    "com.jinghaoshe.quickmenu": "Qmenu",
    "eu.exelban.Stats": "Stats",
    "eu.exelban.Stats.LaunchAtLogin": "LaunchAtLogin",
    "com.Bosyun.Pixso": "Pixso",
    "com.edrawsoft.pixso.local.font": "PixsoLocalFont",
    "com.Bosyun.Pixso.helper": "Pixso Helper",
    "com.Bosyun.Pixso.helper.Renderer": "Pixso Helper (Renderer)",
    "com.Bosyun.Pixso.helper.GPU": "Pixso Helper (GPU)",
    "com.Bosyun.Pixso.helper.Plugin": "Pixso Helper (Plugin)",
    "com.postmanlabs.mac": "Postman",
    "com.postmanlabs.mac.helper": "Postman Helper (Plugin)",
    "fm.qmk.toolbox": "QMK Toolbox",
    "com.github.marktext.marktext": "MarkText",
    "com.github.marktext.marktext.helper.Renderer": "MarkText Helper (Renderer)",
    "com.github.marktext.marktext.helper.Plugin": "MarkText Helper (Plugin)",
    "com.github.marktext.marktext.helper.GPU": "MarkText Helper (GPU)",
    "com.github.marktext.marktext.helper": "MarkText Helper",
    "com.jetbrains.toolbox": "JetBrains Toolbox",
    "com.jetbrains.toolbox.helper": "JetBrains Toolbox",
    "com.obsproject.obs-studio": "OBS",
    "com.obsproject.obs-studio.helper": "OBS Helper",
    "com.obsproject.obs-studio.helper.plugin": "OBS Helper (Plugin)",
    "com.obsproject.obs-studio.helper.gpu": "OBS Helper (GPU)",
    "com.obsproject.obs-studio.helper.renderer": "OBS Helper (Renderer)",
    "UVR": "Ultimate Vocal Remover",
    "com.immersivetranslate.Immersive-Translate": "Immersive Translate",
    "com.netease.163music": "NeteaseMusic",
    "com.adguard.safari.AdGuard": "AdGuard for Safari",
    "com.adguard.safari.AdGuard.login-helper": "AdGuard Login Helper",
    "com.adguard.safari.AdGuard.helper": "AdGuard for Safari Helper (GPU)",
    "com.tencent.Lemon": "Tencent Lemon",
    "com.tencent.LemonMonitor": "LemonMonitor",
    "com.tencent.LemonUpdate": "LemonUpdate",
    "com.anaconda.io": "Anaconda-Navigator",
    "org.ladybird.Ladybird": "Ladybird",
    "com.anytype.anytype": "Anytype",
    "com.anytype.anytype.helper.GPU": "Anytype Helper (GPU)",
    "com.anytype.anytype.helper": "Anytype Helper",
    "com.anytype.anytype.helper.Renderer": "Anytype Helper (Renderer)",
    "com.anytype.anytype.helper.Plugin": "Anytype Helper (Plugin)",
    "com.electron.ollama": "Ollama",
    "com.electron.ollama.helper": "Ollama Helper (Renderer)",
    "com.hnc.Discord": "Discord",
    "com.hnc.Discord.helper": "Discord Helper",
    "com.hnc.Discord.helper.(Plugin)": "Discord Helper (Plugin)",
    "com.hnc.Discord.helper.(GPU)": "Discord Helper (GPU)",
    "com.hnc.Discord.helper.(Renderer)": "Discord Helper (Renderer)",
    "com.apple.SFSymbols": "SF Symbols",
    "com.crossutility.quantumult-x": "Quantumult X",
    "com.crossutility.quantumult-x.quantumult-x-launch-helper": "Quantumult X Launch Helper",
    "app.cyan.taio": "Taio",
    "com.tencent.qq": "QQ",
    "FN2V63AD2J.com.tencent.ScreenCapture3": "QQ ScreenCapture plugin",
    "com.tencent.qq.loginhelper": "QQ Login Helper",
    "com.tencent.qq.helper.Renderer": "QQ Helper (Renderer)",
    "com.tencent.qq.helper": "QQ Helper",
    "com.tencent.qq.helper.Plugin": "QQ Helper (Plugin)",
    "com.tencent.qq.helper.GPU": "QQ Helper (GPU)",
    "com.google.Chrome.app.pccljhmpkeiogkkdeaandppjcjmhipdc": "Project IDX",
    "com.google.Chrome.app.ahiigpfcghkbjfcibpojancebdfjmoop": "DevDocs",
    "com.google.Chrome.app.fbidciappffdloikpdhbmdlnpcimfmpm": "Contrast Checker",
    "com.jetbrains.WebStorm": "WebStorm",
    "org.jcef.jcef.helper.plugin": "jcef Helper (Plugin)",
    "org.jcef.jcef.helper.gpu": "jcef Helper (GPU)",
    "org.jcef.jcef.helper.alerts": "jcef Helper (Alerts)",
    "org.jcef.jcef.helper.renderer": "jcef Helper (Renderer)",
    "org.cef.cefsimple": "cef_server",
    "org.cef.cefsimple.helper.gpu": "cef_server Helper (GPU)",
    "org.cef.cefsimple.helper.alerts": "cef_server Helper (Alerts)",
    "org.cef.cefsimple.helper": "cef_server Helper",
    "org.cef.cefsimple.helper.plugin": "cef_server Helper (Plugin)",
    "org.cef.cefsimple.helper.renderer": "cef_server Helper (Renderer)",
    "org.jcef.jcef.helper": "jcef Helper",
    "com.apple.finder": "Finder",
    "com.apple.ActivityMonitor": "Activity Monitor",
}

export default function getAppName(packageName: string) {
    if (packageName in packageNameMap) {
        return packageNameMap[packageName as keyof typeof packageNameMap];
    } else {
        return packageName;
    }
}
