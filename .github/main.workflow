workflow "Automerge on CI Pass" {
  resolves = ["Merge pull requests"]
  on = "status"
}
