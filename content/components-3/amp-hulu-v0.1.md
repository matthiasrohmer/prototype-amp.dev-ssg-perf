---
$category@: media
formats:
  - websites
teaser:
  text: 'Displays a simple embedded [Hulu](http://www.hulu.com) video.'
toc: true
layout: default.njk
title: amp-hulu
version: '0.1'
versions:
  - '0.1'
latest_version: '0.1'
is_current: true



layouts:
  - fill
  - fixed
  - fixed-height
  - flex-item
  - responsive
scripts:
  - >-
    <script async custom-element="amp-hulu"
    src="https://cdn.ampproject.org/v0/amp-hulu-0.1.js"></script>
---


<!---
Copyright 2016 The AMP HTML Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS-IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->



## Example

[sourcecode:html]
<amp-hulu
  width="412"
  height="213"
  layout="responsive"
  data-eid="4Dk5F2PYTtrgciuvloH3UA"
>
</amp-hulu>
[/sourcecode]

## Attributes

<table>
  <tr>
    <td width="40%"><strong>data-eid</strong></td>
    <td>The ID of the video. For example, <code>4Dk5F2PYTtrgciuvloH3UA</code> is the eid in the following URL: https://player.hulu.com/site/dash/mobile_embed.html?eid=4Dk5F2PYTtrgciuvloH3UA.</td>
  </tr>
  <tr>
    <td width="40%"><strong>common attributes</strong></td>
    <td>This element includes <a href="https://amp.dev/documentation/guides-and-tutorials/learn/common_attributes">common attributes</a> extended to AMP components.</td>
  </tr>
</table>

## Validation

See [amp-hulu rules](https://github.com/ampproject/amphtml/blob/master/extensions/amp-hulu/validator-amp-hulu.protoascii) in the AMP validator specification.