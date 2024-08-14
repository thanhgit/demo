# demo

## Description
demo

## Usage

### Fetch the package
`kpt pkg get REPO_URI[.git]/PKG_PATH[@VERSION] demo`
Details: https://kpt.dev/reference/cli/pkg/get/

### View package content
`kpt pkg tree demo`
Details: https://kpt.dev/reference/cli/pkg/tree/

### Apply the package
```
kpt live init demo
kpt live apply demo --reconcile-timeout=2m --output=table
```
Details: https://kpt.dev/reference/cli/live/
