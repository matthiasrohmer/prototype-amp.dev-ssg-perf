---
$category@: media
formats:
  - websites
teaser:
  text: 'Displays a cloud-hosted [Connatix Player](https://www.connatix.com/).'
toc: true
layout: default.njk
title: amp-connatix-player
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
    <script async custom-element="amp-connatix-player"
    src="https://cdn.ampproject.org/v0/amp-connatix-player-0.1.js"></script>
---


<!--
Copyright 2019 The AMP HTML Authors. All Rights Reserved.

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

The `width` and `height` attributes determine the aspect ratio of the player embedded in responsive layouts.

Example:

[sourcecode:html]
<amp-connatix-player
  data-player-id="03ef71d8-0941-4bff-94f2-74ca3580b497"
  layout="responsive"
  width="16"
  height="9"
>
</amp-connatix-player>
[/sourcecode]

## Attributes

<table>
  <tr>
    <td width="40%"><strong>data-player-id</strong></td>
    <td>Connatix player id. This can be found at the Video Players section in the Connatix management dashboard</a>. (<strong>Required</strong>)</td>
  </tr>
  <tr>
    <td width="40%"><strong>data-media-id</strong></td>
    <td>Connatix media id. This represents the unique ID of any media in your Library. This can be found at the Library section in the <a>Connatix management dashboard</a>. (<strong>Optional</strong>)</td>
  </tr>
  <tr>
    <td width="40%"><strong>common attributes</strong></td>
    <td>This element includes <a href="https://amp.dev/documentation/guides-and-tutorials/learn/common_attributes">common attributes</a> extended to AMP components.</td>
  </tr>
</table>

## Validation

See [amp-connatix-player rules](https://github.com/ampproject/amphtml/blob/master/extensions/amp-connatix-player/validator-amp-connatix-player.protoascii) in the AMP validator specification.