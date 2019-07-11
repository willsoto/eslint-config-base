workflow "CI" {
  resolves = [
    "Lint",
  ]
  on = "pull_request"
}

workflow "CD" {
  resolves = [
    "Lint",
  ]
  on = "push"
}

action "Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
  runs = "yarn"
}

action "Lint" {
  uses  = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install"]
  runs  = "yarn"
  args  = "lint:all"
}
