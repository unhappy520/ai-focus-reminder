# AI Focus Reminder  

这是一个可以在网页上运行的专注提醒工具，支持 AI 语音鼓励和休息提醒，使用了浏览器内置的 TTS。

## 功能
- 每次专注时长默认 90 分钟
- 每 3～5 分钟会用 AI 声音进行鼓励并提醒休息 20 秒
- 专注结束后提醒休息 20 分钟
- 使用台湾女生语音（zh-TW）
- UI 圆角科技风，适配移动设备

## 部署
可直接部署在 Vercel、GitHub Pages 或本地打开 `index.html` 使用

## 语音提示
基于 SpeechSynthesisUtterance，推荐使用支持 Google 中文（台湾）语音的浏览器