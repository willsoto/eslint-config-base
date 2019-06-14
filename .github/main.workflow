workflow "Automerge on CI Pass" {
  resolves = ["Merge pull requests"]
  on = "status"
}

action "Merge pull requests" {
  uses = "pascalgn/automerge-action@v0.2.3"
  env = {
    MERGE_METHOD = "rebase"
  }
  secrets = ["GITHUB_TOKEN"]
}
