---
title: 《Nota 软件使用须知》从何而来
description: 一份模仿软件许可协议写成、没有法律效力但很认真的通俗说明。
---

# 4 · 《Nota 软件使用须知》从何而来？

最后更新：2026-11-15

其原文如下：

````markdown
# Nota 软件使用须知

须知版本：1.1（2026-11-14）

本文最早写于 2026-11-12，源于作者考完试后模仿 Windows 许可协议所作的一篇娱乐性说明。
截至本文当前版本（2026-11-14），作者仍是一名初中生。本文最初写成时，作者刚刚考完期中考试，高兴地回到家，模仿某软件的许可协议写下了这篇说明。

Nota 是完全的自由软件，采用 BSD 2-Clause 许可证发行。许可证原文如下。本文只是便于阅读的说明，不具有法律效力，也不能替代许可证原文：

```text
BSD 2-Clause License

Copyright (c) 2026, Leo Lee
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```

根据许可证，您可以自由地使用、复制本软件，无论用于个人、学术还是商业目的；可以修改本软件的源代码并分发修改后的版本；可以以源代码或二进制形式再分发本软件，包括修改后的版本，也可以就分发收取费用；还可以在不违反许可证条件的前提下，将本软件集成进更大的作品。

如果您再分发本软件，需要遵守以下条件：

- 再分发源代码时，保留本软件原有的版权声明、条件列表和免责声明；
- 再分发二进制形式时，在随附文档或其他材料中复现上述版权声明、条件列表和免责声明；
- 不要删除或更改许可证要求保留的声明。

BSD 2-Clause 许可证不要求您公开修改后的源代码，也不要求您把修改回馈给原作者；是否回馈社区由您自己决定。

如果对使用有任何不满，或者有意见、建议，欢迎以合适的方式联系软件作者或相关开发者。也非常欢迎自行实现并提交改进。软件相关的社群（如有，将在官网提供加入方式）会面向开发者、普通用户和商业使用者等不同群体，发布版本更新、插件与主题 API 变动等信息。

本软件按“原样”提供，不附带任何明示或默示保证，包括但不限于对适销性和特定用途适用性的保证。版权持有人和贡献者不对因使用本软件而产生的任何直接、间接、偶然、特殊、示范性或后果性损害承担赔偿责任，即使已被告知可能发生此类损害。

以上内容只是便于阅读的通俗说明，不构成额外许可条件，也不替代上方的 BSD 2-Clause 许可证原文；您的权利和义务以许可证原文为准。自由软件强调的是使用、修改和分享的自由，而不是“必须免费”。欢迎使用 Nota，也欢迎在方便时把改进回馈社区。
````

其实这里面已经讲了一部分了，但是并没有完整的讲。好吧，趁着时间过去不久，现在来回忆一下这份中二的须知是怎么写出来的。

前天我们学校考完期中考；昨天我又去参加了一场三个小时的大考（物理竞赛的），虽然感觉考的都不是非常好，比如我脑袋一热，算一个支点为端点的杠杆质量产生的力矩，我是这么算的：

$$
\begin{aligned}
&l\ \text{是杆长度}\\
&\mathrm{d}M=\mathrm{d}F\,r\\
&M=\int_{0}^{l}r\,\mathrm{d}F\\
&\mathrm{d}F=\frac{\mathrm{d}r}{l}mg\\
&M=\frac{mg}{l}\int_{0}^{l}r\,\mathrm{d}r\\
&M=\frac{mg}{l}\left.\left(\frac{1}{2}r^2\right)\right|_{0}^{l}
=\frac{1}{2}mgl
\end{aligned}
$$

何意味呢，算了半天算了个寂寞。这还要算吗？真的，考试时就像只无头苍蝇一样乱撞。

但是毕竟考完试，还是很开心的。回来看着某“巨硬”操作系统的授权协议，突发奇想：为何不写一个呢？

现在看来这还是很有意思的。把 BSD 2-Clause 原文机械地翻译成中文，然后混着英文放进首次启动时显示的说明。

呃，自己还觉得很好玩……
