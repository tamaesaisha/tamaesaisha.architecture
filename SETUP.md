# Setting up and editing the portfolio site

## 1. Put the files in the repository (once)

The zip contains a hidden file, `.pages.yml`. It must end up in the repo or the
editor won't work. On a Mac, press Cmd + Shift + . in Finder to see hidden files.

**With git (quickest):**

    git clone https://github.com/tamaesaisha/tamaesaisha.architecture.git
    cd tamaesaisha.architecture
    # copy everything from the unzipped folder in here, including .pages.yml
    git add -A
    git commit -m "Add portfolio site"
    git push

You need to be signed in as tamaesaisha, or added as a collaborator
(repo Settings > Collaborators).

**In the browser:** open the repo, choose Add file > Upload files, drag in all
the files and folders, and commit. Then check `.pages.yml` is listed in the repo.
If it isn't, choose Add file > Create new file, name it `.pages.yml`, paste in
its contents and commit.

## 2. Turn on GitHub Pages (once)

Repo Settings > Pages > Build and deployment:
- Source: Deploy from a branch
- Branch: main, folder / (root)

After a minute or two the site is live at
https://tamaesaisha.github.io/tamaesaisha.architecture/

On a free GitHub account the repo has to be public for Pages to work. GitHub
Pro (free with the GitHub Student Developer Pack) allows a private repo.

## 3. Connect the editor (once)

1. Go to https://app.pagescms.org and sign in with GitHub.
2. When asked, install Pages CMS on the tamaesaisha.architecture repository.
3. Open the repository. You'll see Projects, About page, and Contact and site details.

## Adding a new project

1. Pages CMS > Projects > Add an entry.
2. Fill in the title, location, year and category.
3. Position on the home page: 1 is shown first. Use the next number up to add it
   at the end, or renumber to move it.
4. Upload a cover image (landscape works best).
5. Under Sheets and images, add each portfolio sheet or photo with a caption.
   They appear in this order, full width.
6. Write the project description, then Save.

The site updates about a minute after saving. To keep a project hidden while
it's unfinished, switch off "Show on the website".

## Image tips

- Export portfolio sheets at about 2000 px wide as JPG or WebP (not PNG or PDF).
  Canva: Download > JPG, then shrink at https://squoosh.app if over ~800 KB.
- Keep each file under 5 MB so the site loads quickly on phones.
- The downloadable PDF should be compressed to under 20 MB.

## Using a custom domain later

Add the domain in Settings > Pages, then open `_config.yml` and change
`baseurl: "/tamaesaisha.architecture"` to `baseurl: ""`. Do the same if the repo
is ever renamed to tamaesaisha.github.io.
