# demov1

## Description
demo version 1

## Usage

### Fetch the package
`kpt pkg get REPO_URI[.git]/PKG_PATH[@VERSION] demov1`
Details: https://kpt.dev/reference/cli/pkg/get/

### View package content
`kpt pkg tree demov1`
Details: https://kpt.dev/reference/cli/pkg/tree/

### Apply the package
```
kpt live init demov1
kpt live apply demov1 --reconcile-timeout=2m --output=table
```
Details: https://kpt.dev/reference/cli/live/
