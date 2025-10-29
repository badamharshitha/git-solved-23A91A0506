# 🖤 **My GIT MASTERY CHALLENGE JOURNEY**

## 🧑‍🎓 **Student Information**
* **Name:** Badam Nikhila Sri Harshitha  
* **Student ID:** 23A91A0506  
* **Repository:** (https://github.com/badamharshitha/git-solved-23A91A0506)  
* **Date Started:** October 28, 2025  
* **Date Completed:** October 29, 2025  

---

## 🧩 **Task Summary**

Cloned instructor's repository with pre-built conflicts and resolved all  
merge conflicts across multiple branches using proper Git workflows.

---

## ⚙️ **Commands Used**

| **Command**       | **Times Used** | **Purpose**                                |
| ----------------- | -------------- | ------------------------------------------ |
| `git clone`       | 1              | Clone instructor's repository              |
| `git checkout`    | 20+            | Switch between branches                    |
| `git branch`      | 10+            | View and manage branches                   |
| `git merge`       | 2              | Merge dev and conflict-simulator into main |
| `git add`         | 30+            | Stage resolved conflicts                   |
| `git commit`      | 15+            | Commit resolved changes                    |
| `git push`        | 10+            | Push to my repository                      |
| `git fetch`       | 2              | Fetch updates from instructor              |
| `git pull`        | 1              | Pull updates                               |
| `git stash`       | 2              | Save temporary work                        |
| `git cherry-pick` | 1              | Copy specific commit                       |
| `git rebase`      | 1              | Rebase feature branch                      |
| `git reset`       | 3              | Undo commits (soft/mixed/hard)             |
| `git revert`      | 1              | Safe undo                                  |
| `git tag`         | 2              | Create release tags                        |
| `git status`      | 50+            | Check repository state                     |
| `git log`         | 30+            | View history                               |
| `git diff`        | 20+            | Compare changes                            |

---

## ⚔️ **Conflicts Resolved**

### 🔹 Merge 1: `main` + `dev` (6 files)

#### **Conflict 1: `config/app-config.yaml`**
* **Issue:** Production used port 8080, development used 3000  
* **Resolution:** Created unified config with environment-based settings  
* **Strategy:** Keep production as default, add dev as optional  
* **Difficulty:** Medium  
* **Time:** 15 minutes  

#### **Conflict 2: `config/database-config.json`**
* **Issue:** Different database hosts and SSL modes  
* **Resolution:** Created separate profiles for production and development  
* **Strategy:** Restructured JSON to support both environments  
* **Difficulty:** Medium  
* **Time:** 10 minutes  

#### **Conflict 3: `scripts/deploy.sh`**
* **Issue:** Different deployment strategies (production vs docker-compose)  
* **Resolution:** Added conditional logic based on `DEPLOY_ENV` variable  
* **Strategy:** Made script handle both environments dynamically  
* **Difficulty:** Hard  
* **Time:** 20 minutes  

#### **Conflict 4: `scripts/monitor.js`**
* **Issue:** Different monitoring intervals and log formats  
* **Resolution:** Environment-based configuration object  
* **Strategy:** Used `process.env.NODE_ENV` to determine behavior  
* **Difficulty:** Medium  
* **Time:** 15 minutes  

#### **Conflict 5: `docs/architecture.md`**
* **Issue:** Different architectural descriptions  
* **Resolution:** Merged both descriptions into comprehensive document  
* **Strategy:** Created sections for each environment  
* **Difficulty:** Easy  
* **Time:** 10 minutes  

#### **Conflict 6: `README.md`**
* **Issue:** Different feature lists and version numbers  
* **Resolution:** Combined all features with clear environment labels  
* **Strategy:** Organized features by category  
* **Difficulty:** Easy  
* **Time:** 10 minutes  

---

### 🔹 Merge 2: `main` + `conflict-simulator` (6 files)

#### **Conflict 1: `server.js`**
* **Issue:** Different startup behavior and root route responses between branches.  
* **Resolution:** Combined both behaviors: keep stable production start and add experimental routes under `/experimental`.  
* **Strategy:** Use `process.env.NODE_ENV` and conditional routes.  
* **Difficulty:** Medium  
* **Time:** 10 minutes

#### **Conflict 2: `docker-compose.yml`**
* **Issue:** One branch used older image tags, other updated images and service names.  
* **Resolution:** Standardized image tags to latest stable and kept both service definitions where required.  
* **Strategy:** Tested `docker-compose up` locally after merging.  
* **Difficulty:** Easy  
* **Time:** 8 minutes

#### **Conflict 3: `scripts/deploy.sh`**
* **Issue:** Different deploy sequences (K8s rolling update vs docker-compose).  
* **Resolution:** Implemented unified script that accepts `DEPLOY_ENV` and chooses appropriate path.  
* **Strategy:** Keep production flow default; allow `development` flag for docker-compose.  
* **Difficulty:** Hard  
* **Time:** 20 minutes

#### **Conflict 4: `README.md`**
* **Issue:** Conflicting instructions for environment setup and start commands.  
* **Resolution:** Merged both instruction sets and added a clear *Quick Start* section showing both methods.  
* **Difficulty:** Easy  
* **Time:** 10 minutes

#### **Conflict 5: `package.json`**
* **Issue:** Different dependency versions and scripts.  
* **Resolution:** Kept stable versions, updated scripts for consistency, and tested `npm install` + `npm run dev`.  
* **Difficulty:** Medium  
* **Time:** 12 minutes

#### **Conflict 6: `docs/usage.md`**
* **Issue:** Missing usage examples in one branch.  
* **Resolution:** Combined usage examples from both branches so users can choose production or development flow.  
* **Difficulty:** Easy  
* **Time:** 8 minutes

---

## 💪 **Most Challenging Parts**

1. **Understanding Conflict Markers:** Initially confused by `<<<<<<<`, `=======`, `>>>>>>>` symbols. Learned that HEAD is current branch and the other side is incoming changes.  
2. **Deciding What to Keep:** Hardest part was choosing between conflicting code. Learned to read both versions completely before deciding.  
3. **Complex Logic Conflicts:** `deploy.sh` had completely different logic. Had to understand both approaches before combining.  
4. **Testing After Resolution:** Making sure resolved code actually worked was crucial.

---

## 🎯 **Key Learnings**

### 🧠 Technical Skills
* Mastered conflict resolution process  
* Understood merge conflict markers  
* Learned to use `git diff` effectively  
* Practiced all major Git commands

### ✅ Best Practices
* Always read both sides of conflict before resolving  
* Test resolved code before committing  
* Write detailed merge commit messages  
* Use `git status` frequently  
* Commit atomically

### 🔄 Git Workflow Insights
* Conflicts are normal, not errors  
* Take time to understand both changes  
* When in doubt, ask for clarification  
* Document your resolution strategy  
* Keep calm and read carefully

---

## 🔧 Advanced Git Commands Used
- Used `git cherry-pick <commit>` to copy a specific commit from a feature branch to another branch.  
- Used `git rebase main` to replay feature commits on top of an updated main for a cleaner history.  
- Used `git reset --soft HEAD~1` to undo a mistaken commit while keeping changes staged.  
- Used `git revert <commit>` to safely undo a change that was already pushed.  
- Used `git stash` to save uncommitted changes temporarily when switching branches.

---

## 🏷️ Tags Created
- **v1.0.0** – First stable version after merge and conflict resolution.  
- **v1.1.0** – Final version after cleanup and adding features.

---

## 🌟 **Reflection**

This challenge was an eye-opener in real-world Git conflict resolution. Initially, merge conflicts looked intimidating, but now I understand that Git is simply asking me **which version I want to keep**.

Through this hands-on experience, I gained **confidence using advanced Git tools**, and now I can handle merges, rebases, and rollbacks like a professional developer.

I also learned that **communication, clarity, and patience** are key when working with version control in team projects.

---

## ✅ Completion Note
Challenge successfully completed on **October 29, 2025**.
