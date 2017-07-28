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

## Making Contributions

1. Fork repo to create copy in my account
1. Clone the repo
`git clone.....`
1. Create branch
`git checkout -b <name-of-branch>`
1. Make changes -> add and commit changes
1. Push changes
`git push origin <name-of-branch>
1. Goto repo and create pull request

## Keep fork synced
1. Connect master branch to fork
`git remote add upstream <URL>`
1. Fetch changes to master branch
`git fetch upstram`
1. Merge changes from master branch locally
`git rebase upstream/master`
1. Push changes
`git push origin master`

[More Git Commands](https://education.github.com/git-cheat-sheet-education.pdf)
[Commit message style guide](http://udacity.github.io/git-styleguide/)
[Writing in Markdown](https://guides.github.com/features/mastering-markdown/)
[First Contributions](https://github.com/Roshanjossey/first-contributions)
[Git Branching Model](http://nvie.com/posts/a-successful-git-branching-model/)
