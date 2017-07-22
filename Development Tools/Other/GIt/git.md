# Git + Github

Git provides version control for your code, so if there is ever a bug or problem you can easily role back to a previous version. Github allows you to host your code online, so you can easily access your code remotly, track versions and collaborate with other people.

## Usage

To create a git reposertory:
`git init`

To track changes on a file:
`git add **file name**`

To save changes locally:
`git commit -m **reason for commit**`

To push changes to Github:
1. Make sure your local repo is connected to Github Repo(only needs to be done once)
`git remote add origin **path to repo**`
1. Push changes to Github repo
`git push -u origin master`

[More Git Commands](https://education.github.com/git-cheat-sheet-education.pdf)
[Commit message style guide](http://udacity.github.io/git-styleguide/)
[Writing in Markdown](https://guides.github.com/features/mastering-markdown/)