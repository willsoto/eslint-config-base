workflow "Automerge on CI Pass" {
  resolves = ["Merge pull requests"]
  on = "status"
}

action "Merge Dependabot PRs" {
  uses = "pascalgn/automerge-action@v0.2.3"
  env = {
    MERGE_METHOD = "rebase"
    LABELS = "dependencies"
  }
  secrets = ["GITHUB_TOKEN"]
}
