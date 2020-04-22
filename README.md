# prototype-amp.dev-ssg-perf

Simple project setup to compare build performance of 11ty vs Grow. The test doesn't consider any tool specific features (loop over documents, building navigations, caching partials, ...).

It simply builds a relevant set of pages from amp.dev: [the component reference docs](https://amp.dev/documentation/components/). Those have been picked as a test subject for the following reasons:

1) Every component reference doc is a Markdown document
2) They don't use any of Grow's and/or Jinja2's own features (`g.doc`, `{% with %}`, ...)
3) They are written using almost all Markdown features (tables, lists, ...)

# Run

Make sure all requirements to develop [amp.dev](https://github.com/ampproject/amp.dev) are met.

```sh
npm install
time grow deploy
time npm run build
```
