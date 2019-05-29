# How to run this sample
1. Clone it by `git clone git@github.com:pixelsandcode/gitbook-comment-demo.git`
2. run `npm install`
3. run `npm run doc` to generate documentation from comments

Sample doc commands are in package.json file.

doc generate make comments in current branch.
doc publish make comments in gh-pages branch (or any branch if you pass as params).

For more option please check the [gitbook-comment](https://github.com/pixelsandcode/gitbook-comment) 

```json
{
  "name": "gitbook-comment-demo",
  "version": "1.0.0",
  "scripts": {
    "doc-generate": "gitbook-comment generate -p ./",
    "doc-clean-up": "gitbook-comment clean-up -p ./",
    "doc-publish": "gitbook-comment publish -p ./"
  },
  "dependencies": {
    "gitbook-comment": "^1.0.1"
  }
}
```