---
$category@: media
formats:
  - websites
teaser:
  text: 'Displays an [AirBnB Bodymovin animation player](http://airbnb.io/lottie/).'
toc: true
layout: default.njk
title: amp-bodymovin-animation
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
    <script async custom-element="amp-bodymovin-animation"
    src="https://cdn.ampproject.org/v0/amp-bodymovin-animation-0.1.js"></script>
---


<!---
Copyright 2018 The AMP HTML Authors. All Rights Reserved.

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



The `<amp-bodymovin-animation>` component embeds an [AirBnB Bodymovin animation player](http://airbnb.io/lottie/), which renders an animation from JSON generated by [Adobe After Effects](https://www.adobe.com/products/aftereffects.html).

## Behavior

The `width` and `height` attributes determine the aspect ratio of the animation embedded in responsive layouts.

Example:

[sourcecode:html]
<amp-bodymovin-animation
  layout="fixed"
  width="200"
  height="200"
  src="https://nainar.github.io/loader.json"
  loop="5"
>
</amp-bodymovin-animation>
[/sourcecode]

## Attributes

<table>
  <tr>
    <td width="40%"><strong>src</strong></td>
    <td>The path to the exported Bodymovin animation object. Must be <code>https</code> protocol.</td>
  </tr>
  <tr>
    <td width="40%"><strong>loop (optional)</strong></td>
    <td>Indicates whether the animation should be looping or not. By default, this attribute is set to <code>true</code>. Values for this attribute can be: <code>true</code>, <code>false</code>, or a number value. If a number is specified, the animation loops that number of times.</td>
  </tr>
  <tr>
    <td width="40%"><strong>noautoplay (optional)</strong></td>
    <td>By default, an animation autoplays. If this attribute is added the video waits for an action to start playing.</td>
  </tr>
  <tr>
    <td width="40%"><strong>renderer (optional)</strong></td>
    <td>By default, this component uses the SVG renderer, this uses a light version of the Bodymovin animation player. However, if developers feel that they need the full player and want to use an HTML renderer they may do so by specifying the <code>renderer</code> attribute to be <code>html</code>.<br>This attribute only accepts the values <code>html</code> and <code>svg</code>.</td>
  </tr>
  <tr>
    <td width="40%"><strong>common attributes</strong></td>
    <td>This element includes <a href="https://amp.dev/documentation/guides-and-tutorials/learn/common_attributes">common attributes</a> extended to AMP components.</td>
  </tr>
</table>

## Actions

Please see [AMP Action Documentation](https://amp.dev/documentation/guides-and-tutorials/learn/amp-actions-and-events#amp-bodymovin-animation) for the actions available on `amp-bodymovin-animation` component.

## Validation

See [amp-bodymovin-animation rules](https://github.com/ampproject/amphtml/blob/master/extensions/amp-bodymovin-animation/validator-amp-bodymovin-animation.protoascii) in the AMP validator specification.