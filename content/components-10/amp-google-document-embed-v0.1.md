---
$category@: dynamic-content
formats:
  - websites
teaser:
  text: Displays a document file supported by Google Drive.
toc: true
layout: default.njk
title: amp-google-document-embed
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
  - intrinsic
  - nodisplay
  - responsive
scripts:
  - >-
    <script async custom-element="amp-google-document-embed"
    src="https://cdn.ampproject.org/v0/amp-google-document-embed-0.1.js"></script>
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



## Behavior

The `amp-google-document-embed` component displays document files like Word documents,
Excel spreadsheets, and PDFs.

Example:

[sourcecode:html]
<amp-google-document-embed
  src="https://www.example.com/document.pdf"
  width="800"
  height="600"
  layout="responsive"
>
</amp-google-document-embed>
[/sourcecode]

## Attributes

##### src

The URL of the document.

##### common attributes

This element includes [common attributes](https://amp.dev/documentation/guides-and-tutorials/learn/common_attributes) extended to AMP components.

## Validation

See [amp-google-document-embed rules](https://github.com/ampproject/amphtml/blob/master/extensions/amp-google-document-embed/validator-amp-google-document-embed.protoascii) in the AMP validator specification.