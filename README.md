<section align="center">
  <a href="https://github.com/yife68/juejin-auto/" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/yife68/iCat-Pic@v3.0.0/2022/02.10/2.svg" width="260" />
  </a>
</section>

<h1 align="center">Juejin Auto-稀土掘金助手</h1>

<p align="center">掘金自动签到、抽奖、沾喜气、海底掘金游戏</p>

# 使用
自动化执行任务: 掘金每日签到, 沾喜气, 免费抽奖, 海底掘金游戏, 最后将结果发送邮件报告通知\
自动化运行时间: 北京时间上午06:30（可修改 时间差为+8）

❶  [Fork 仓库](https://github.com/yife68/juejin-auto)

❷  `仓库` → `Settings` → `Secrets` → `New repository secret`, 添加`Secrets`变量如下:

| Name | Value |
|  ------  |  ------  |
| COOKIE |  掘金网站Cookie, 打开浏览器，登录 [掘金](https://juejin.cn/), 打开控制台DevTools → Network，复制 cookie, **掘金Cookie有效期约1个月需定期更新.**  |
|  EMAIL_USER  |  发件人邮箱地址(需要开启 SMTP)  |
|  EMAIL_PASS  |  发件人邮箱密码(SMTP密码)  |
|  EMAIL_TO  |  订阅人邮箱地址(收件人). 如需多人订阅使用 `, ` 分割, 例如: `a@qq.com, b@163.com`  |

![](https://cdn.jsdelivr.net/gh/yife68/iCat-Pic@v3.0.0/2022/02.10/3.png)

❸  `仓库` → `Actions`, 检查`Workflows`并启用

# 预览

| 掘金每日签到 | 海底掘金游戏 |
|:-----------:| :-------------:|
| ![掘金每日签到](https://cdn.jsdelivr.net/gh/yife68/iCat-Pic@v3.0.0/2022/02.10/4.png) | ![海底掘金游戏](https://cdn.jsdelivr.net/gh/yife68/iCat-Pic@v3.0.0/2022/02.10/5.png) |

# 报错案例

## 如何获取Cookie
掘金网站Cookie, 打开浏览器，登录 [掘金](https://juejin.cn/), 打开控制台DevTools(快捷键F12) → Network，复制 cookie, **掘金Cookie有效期约1个月需定期更新**

DevTools截图:
<img width="1156" src="https://cdn.jsdelivr.net/gh/yife68/iCat-Pic@v3.0.0/2022/02.10/6.png">

## 授权海底掘金

运行自动化后通知订阅人 `玩家未授权, 请前往掘金授权!`, 说明您是新玩家从始至终未进行海底掘金游戏, 需要先进行游戏授权

授权步骤: 登陆 [`掘金`](https://juejin.cn/) → `每日签到` → `海底掘金挑战赛`(点击进入游戏, 点击授权, 最好再随意玩一局). 后续就可以由掘金助手自动处理

或点击👇这个海报帮您直达海底掘金挑战赛

[![海底掘金挑战赛](https://cdn.jsdelivr.net/gh/yife68/iCat-Pic@v3.0.0/2022/02.10/7.png)](https://juejin.cn/game/haidijuejin/)

# GitHub地址
项目直达链接：https://github.com/yife68/juejin-auto/

# 下载地址
蓝奏云下载：https://meuicat.lanzoul.com/b0119wtsb

蓝奏云访问码请到公众号回复：612
