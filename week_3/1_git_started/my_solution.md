## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
The add command allows you to add an item to the staging area.  Say for example you have a newly created file called helpme.txt.   If you run the following command:<br>

git add helpme.txt<br>

It will add helpme.txt to the staging area so you can commit it.  Other ways to use add is as follows<br>

git add --all<br>
git add .<br>
git add filename <br>
git add *.txt /* add all files with txt extention*/ <br>
git add docs/ /* add all files in doc directory*/ <br>
git add "*.txt" /* add all txt files in the whole project*/ <br>

#### branch
The branch command will list your available branches.  The branch you are currently working on will have a "*" next to it and also display green.
The command to list branches is:<br>

git branch <br>

Create a new branch to "bookmark" your current state from when you last made a commit.<br>
To create a new branch use:<br>

git branch branchname<br>

To see last commits on each branch use:<br>

git branch -v<br>

You most likely will want to create a new branch to make changes on it while preserving the master branch till its time to merge the new branch with the master.  Use the following shortcut to create a new branch and immediately jump to the new branch and use it.<br>

git checkout -b branchname <br>

To delete a branch you no longer need use:<br>

git branch -d branchname<br>

#### checkout
The checkout command is what you do to toggle from one branch to another.   If you had two branches, one called master, one called test.   You can checkout each branch to work on it and not affect the other branch.<br>

git checkout branchname<br>

example:<br>
git checkout test<br>
echo 'testing' > text.txt (text.txt now exist in the test branch but not in the master branch)<br>

#### clone
There are two ways to make a local repository.  One way is to use init and the other is clone.  Init will initialize a local directory to be setup with git to keep track of.   Clone on the other hand will copy someone else's repository and bring it down locally to your machine.  Then you can work on the clone directly.  To clone a repository use the following:<br>

git clone URL<br>

example:<br>
git clone git://github.com/schacon/simplegit.git<br>

#### commit
Commit records a snapshot of your staging area.   All the files you "add" using git, when you commit, the added files and your current files becomes the new snapshot of the branch. Git records your email and username so be sure to set those up.   To commit, use the following:<br>

git commit -m "some message"  (-m switch for message)<br>

#### fetch
Fetch allows you to download new updates from a remote repository.  To fetch use the following command:<br>

git fetch alias<br>

example<br>
git fetch upsteam (upstream was created when you ran git remote add upstream "SOME URL" )<br>

#### log
The log command will display a history of all the items you commited.<br>

git log <br>

#### merge
Merge will merge a branch context into your current branch. <br>

git merge alias/branchname -m "message"<br>

#### pull
Pull will do both fetch and merge the data you grabbed remoted at the same time.<br>

git pull remotename branchname<br>
example:<br>
git pull upstream master<br>

#### push
Push will move your repository from your local directory on your system up to the remote location such as GitHub.<br>

git push alias branch<br>
example<br>
git push origin master<br>

#### reset
Reset allows you to undo changes and commits.<br>

git reset HEAD -- filename<br>
example<br>
git reset HEAD -- test.txt (removes test.txt from the staging area)<br>

#### rm
rm removes the files off the staging area and off your disk.<br>

git rm filename<br>
example<br>
git rm test.txt<br>

#### status
status will display the current state of your staging area and working directory.<br>

git status		(more verbose version default)<br>
git status -s (short version)<br>

## Release 4: Git Workflow

- Push files to a remote repository<br>
	cd directory name  	(change directory to repo directory)<br>
	git add .						(add all files to the staging area)<br>
	git status					(run a status to check all files in staging)<br>
	git commit -m "some message"	(commit files in staging and add a message)<br>
	git push origin master				(push committed files up to my GitHub repo)<br>

- Fetch changes<br>
	git remote -v				(See all remote alias make sure you have the remote repo you need listed.)<br>
	git remote add upstream urlofrepo 	(use this command only if you dont have remote repo setup.   The alias is called upstream)<br>
	git fetch upstream 	(fetch all updates from remote repo alias upstream)<br>
	
	************************************************************************<br>
	Merge your fetched changes<br>
	git branch -va 			(list all branches to confirm you have upstream/master)<br>
	git checkout master	(toggle to master branch of local repo)<br>
	git merge upstream/master	-m "some message"	(merge remote repo updates with you local master repo)<br>

	************************************************************************<br>
	Sync up your local changes with your repo on GitHub<br>
	git commit -m "some message"<br>
	git push origin master<br>


- Commit locally<br>
	cd directory name  	(change directory to repo directory)<br>
	git add .						(add all files to the staging area)<br>
	git status					(run a status to check all files in staging)<br>
	git commit -m "some message"	(commit files in staging and add a message)<br>
	
## Release 5: Reflection
I felt the best way to figure out git was to try everything out yourself.   It was good to have a few examples to show you what exactly do you need to put in.   I ran into a problem when I merged my file and it opened up the VIM editor.   I just ended up running the merge command using the following syntax "git merge upstream/master -m "update from DBC".<br>

I used http://gitref.org/ to help me get the definition of each git command as well as learn examples on how to use it.<br>

Creating a new branch and checking out at the same time using the following command was a nice shortcut<br>
git checkout -b branchname<br>

I am now fairly competent using git.   I havent encountered a merge conflict yet so I'll feel more confident after fixing it a few times.<br>

I know git is the a great version control system and though its a bit tedious to learn all the individual commands, its the same as learning how to use terminal and use command line functions.   So I'll get the hang of it fairly quickly.  <br>