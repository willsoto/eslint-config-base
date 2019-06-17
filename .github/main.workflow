workflow "Automerge on CI Pass" {
  resolves = ["Merge Dependabot PRs"]
  on = "status"
}

action "Merge Dependabot PRs" {
  uses = "pascalgn/automerge-action@v0.2.3"
  env = {
    MERGE_METHOD = "squash"
    LABELS = "dependencies"
    AUTOREBASE = "dependencies"
  }
  secrets = ["GITHUB_TOKEN"]
}
