---
$category@: media
formats:
  - websites
teaser:
  text: Displays an Imgur post.
toc: true
layout: default.njk
title: amp-imgur
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
  - nodisplay
  - responsive
scripts:
  - >-
    <script async custom-element="amp-imgur"
    src="https://cdn.ampproject.org/v0/amp-imgur-0.1.js"></script>
---


<!--
Copyright 2017 The AMP HTML Authors. All Rights Reserved.

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



## Behavior

This extension creates an iframe and displays an [imgur](http://imgur.com) post.

Example:

[sourcecode:html]
<amp-imgur
  data-imgur-id="f462IUj"
  layout="responsive"
  width="540"
  height="663"
></amp-imgur>
[/sourcecode]

## Attributes

<table>
  <tr>
    <td width="40%"><strong>data-imgur-id (required)</strong></td>
    <td>The ID of the Imgur post.</td>
  </tr>
  <tr>
    <td width="40%"><strong>width (required)</strong></td>
    <td>The width of the Imgur post.</td>
  </tr>
  <tr>
    <td width="40%"><strong>height (required)</strong></td>
    <td>The height of the Imgur post.</td>
  </tr>
  <tr>
    <td width="40%"><strong>common attributes</strong></td>
    <td>This element includes <a href="https://amp.dev/documentation/guides-and-tutorials/learn/common_attributes">common attributes</a> extended to AMP components.</td>
  </tr>
</table>

## Validation

See [amp-imgur rules](https://github.com/ampproject/amphtml/blob/master/extensions/amp-imgur/validator-amp-imgur.protoascii) in the AMP validator specification.