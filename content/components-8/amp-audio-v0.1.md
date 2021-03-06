---
$category@: media
formats:
  - websites
  - stories
  - ads
teaser:
  text: Replaces the HTML5 `audio` tag.
toc: true
layout: default.njk
title: amp-audio
version: '0.1'
versions:
  - '0.1'
latest_version: '0.1'
is_current: true



layouts:
  - fixed
  - fixed-height
  - nodisplay
scripts:
  - >-
    <script async custom-element="amp-audio"
    src="https://cdn.ampproject.org/v0/amp-audio-0.1.js"></script>
---


<!---
Copyright 2015 The AMP HTML Authors. All Rights Reserved.

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



The `amp-audio` component is only to be used for direct HTML5 audio file embeds.

## Behavior

The `amp-audio` component loads the audio resource specified by its `src` attribute at a time determined by the runtime. It can be controlled in much the same way as a standard HTML5 `audio` tag.
Like all embedded external resources in an AMP file, the audio is "lazily" loaded, only when the `amp-audio` element is in or near the viewport

The `amp-audio` component accepts up to three unique types of HTML nodes as children:

- `source` tags: Just like in the HTML `<audio>` tag, you can add `<source>` tag children to specify different source media files to play.
- a placeholder for before the audio starts: One or zero immediate child nodes can have the `placeholder` attribute. If present, this node and its children form a placeholder that will display instead of the audio. A click or tap anywhere inside of the `amp-audio` container will replace the placeholder with the audio itself.
- a fallback if the browser doesn’t support HTML5 audio: One or zero immediate child nodes can have the `fallback` attribute. If present, this node and its children form the content that displays if HTML5 audio is not supported on the user’s browser.

For example:

[sourcecode:html]
<amp-audio
  width="400"
  height="300"
  src="https://yourhost.com/audios/myaudio.mp3"
>
  <div fallback>
    <p>Your browser doesn’t support HTML5 audio</p>
  </div>
  <source type="audio/mpeg" src="foo.mp3" />
  <source type="audio/ogg" src="foo.ogg" />
</amp-audio>
[/sourcecode]

## Attributes

<table>
  <tr>
    <td width="40%"><strong>src</strong></td>
    <td>Required if no <code>&lt;source&gt;</code> children are present. Must be HTTPS.</td>
  </tr>
  <tr>
    <td width="40%"><strong>preload</strong></td>
    <td>If present, sets the preload attribute in the html <code>&lt;audio&gt;</code> tag which specifies if the author thinks that the audio file should be loaded when the page loads.</td>
  </tr>
  <tr>
    <td width="40%"><strong>autoplay</strong></td>
    <td>If present, the attribute implies that the audio will start playing as soon as
it is ready.</td>
  </tr>
  <tr>
    <td width="40%"><strong>loop</strong></td>
    <td>If present, the audio will automatically loop back to the start upon reaching the end.</td>
  </tr>
  <tr>
    <td width="40%"><strong>muted</strong></td>
    <td>If present, will mute the audio by default.</td>
  </tr>
  <tr>
    <td width="40%"><strong>controlsList</strong></td>
    <td>Same as <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/controlsList">controlsList</a> attribute of HTML5 audio element. Only supported by certain browsers. Please see <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/controlsList">https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/controlsList</a> for details.</td>
  </tr>
</table>

## Media Session Attributes

`amp-audio` implements the [Media Session API](https://developers.google.com/web/updates/2017/02/media-session) enabling developers to specify more information about the audio file that is playing to be displayed in the notification center of user's devices (along with play/pause controls).

<table>
  <tr>
    <td width="40%"><strong>artwork</strong></td>
    <td>URL to a PNG/JPG/ICO image serving as the audio's artwork. If not present, the MediaSessionAPI Helper will use either the `image` field in the `schema.org` definition, the `og:image` or the website's `favicon`.</td>
  </tr>
  <tr>
    <td width="40%"><strong>artist</strong></td>
    <td>(string) indicates the author of the audio</td>
  </tr>
  <tr>
    <td width="40%"><strong>album</strong></td>
    <td>(string) indicates the album the audio was taken from</td>
  </tr>
  <tr>
    <td width="40%"><strong>title</strong></td>
    <td>(string) part of the [common attributes](https://amp.dev/documentation/guides-and-tutorials/learn/common_attributes), doubles as the audio's name displayed in the MediaSession notification. If not provided, the MediaSessionAPI Helper will use either the `aria-label` attribute or fall back to the page's title.</td>
  </tr>
</table>

Example:

[sourcecode:html]
<amp-audio
  width="400"
  height="300"
  src="https://yourhost.com/audios/myaudio.mp3"
  artwork="https://yourhost.com/artworks/artwork.png"
  title="Awesome music"
  artist="Awesome singer"
  album="Amazing album"
>
  <source type="audio/mpeg" src="foo.mp3" />
</amp-audio>
[/sourcecode]

## Analytics

AMP audio analytics gathers data about how users interact with audios in AMP documents. AMP audio extension issues analytics events during their lifecycle. These events can be reported through the analytics configuration using `audio-*` triggers. `audio-play` and `audio-pause` are the two analytics events supported now.

See [the AMP Analytics component](https://github.com/ampproject/amphtml/blob/master/extensions/amp-audio/../amp-analytics/amp-analytics.md) for details on _amp-analytics_ configuration.

### Audio play trigger (`"on": "audio-play"`)

The `audio-play` trigger is fired when the audio begins playing from a user clicking play or from autoplay beginning or resuming. Use these configurations to fire a request for this event.

[sourcecode:javascript]
"triggers": {
  "audioPlay": {
    "on": "audio-play",
    "request": "event",
    "selector": "#audio1"
  }
}
[/sourcecode]

### Audio pause trigger (`"on": "audio-pause"`)

The `audio-pause` trigger is fired when the audio stops playing from a user clicking pause, from autoplay pausing, or from the audio reaching the end. Use these configurations to fire a request for this event.

[sourcecode:javascript]
"triggers": {
  "audioPause": {
    "on": "audio-pause",
    "request": "event",
    "selector": "#audio1"
  }
}
[/sourcecode]

## Validation

See [amp-audio rules](https://github.com/ampproject/amphtml/blob/master/extensions/amp-audio/validator-amp-audio.protoascii) in the AMP validator specification.