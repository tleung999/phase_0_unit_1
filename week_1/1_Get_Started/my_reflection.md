## 1. [Git and Github](1_get_started/readme.md) Reflection

* What struggles did you have setting up git and GitHub? What did you learn in the process?
* Write an explanation of and compare git and GitHub to a non-technical audience. 
* Describe what version control is and how GitHub helps with it.
* Why do developers use version control (git)? Does that make sense to you? Why or why not?
* What doesn't make sense? What does?

Setting up was not hard at all.   I already had git installed on my OSX system.  After creating my GitHub account, I did have some problems creating a new repository using the command line version of git.    I realized that my osxkeychain was not setup correctly.    I accidentally ran "git credential -osxkeychain" with a space instead of "git credential-osxkeychain" all together.   Afterwards, I was able to log in and create a new repository.   What I learned is I have to be careful of my syntax and make sure everything is exact, else all it takes is a space, semicolon, or backslash and everything gets fouled up.    

Git is a DVCS (Distributed Version Control System) that manages your local repository of files.   It allows you to collaborate by allowing others to start a new branch of your existing files or you can start a branch of their files.   They can work on updates while you work on yours and you can merge them back together later.   Git also takes snapshots of your files so if you worked on some code and you really made a mess of file you are working on, you can revert back to a previous state.

GitHub on the other hand is a remote repository of your files.   As long as you have an internet connection, you can commit (upload) files to GitHub so you can share your files with others without your system connecting with theirs.   GitHub can house all your incremental changes every time you commit changes to GitHub.    Others can see how your code changed to its current working condition.   

Version control is a way of keeping track of all the changes made to a file.  This tracking keeps a history of changes you made and allows you to revert back to an earlier state if necessary.  Every time you have a set of changes completed, you can commit those changes to add to the current snapshot history of the files.   GitHub helps to centralize the changes and allow others to see all the incremental changes you made.   This helps facilitate feedback and collaboration simply because your code is out there for your peers to see and make suggestions on.   

Developers use version control as a way to keep track of their code changes, but also their thoughts.   It makes good sense since some solutions might lead you down the wrong path. Having version control allows you to revert back to the file's earlier state in case you changed your mind and wanted to solve the problem a different way.   Version control also keeps all developers on the same page, as long as the developers syncs up with the latest files on GitHub, you know everyone is working on the same file.   

I guess it will make more sense once I see it in action.   I am unsure of exactly what happens when you are working on your current issue but then you have to fix another issue.  Do you just create another branch to work on the issue or do you stay on your current branch and fix both issues on the same branch?   Then after the fix, I have yet to see how a merge works.    
