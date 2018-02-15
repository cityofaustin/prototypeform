# Prototype Form

The project is a prototype of improved form design based on learnings from user research and usability testing with Austin Animal Center Foster Forms.

## Install Jekyll

- A Ruby dev environment is a requirement in order to run Jekyll locally.
  - https://jekyllrb.com/docs/installation/#requirements

- *(Optional)* Install [**iTerm**](https://www.iterm2.com/) for a better Command Line App in OS X.

- _(Optional)_ Install [**oh-my-zsh**](https://github.com/robbyrussell/oh-my-zsh
) for a prettier command line interface and easier zsh configuration than bash.
	- `sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`

- Install [**homebrew**](http://brew.sh/) (for better installation of OS X packages)
	- `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

- Install [**ruby-install**](https://github.com/postmodern/ruby-install#readme) for installing Ruby versions. (OS X comes with ruby 2.0.0, but its not the latest version and you may have to use the `sudo` command to do anything. Best to install a version manager like ruby-install + chruby to help with that.)
	- `brew install ruby-install`
	- `ruby-install ruby 2.4`

- Install [**chruby**](https://github.com/postmodern/chruby) to switch ruby versions.
	- `brew install chruby`
	- `chruby ruby 2.4`

- Install [**jekyll**](https://github.com/postmodern/chruby) to install Jekyll.
	- `gem install jekyll`

- Install dependencies
	- `bundle install`

## Start Jekyll

Once you've got everything installed, 

`cd [directory_of_repo]`

```
jekyll serve
```

Then go to

```
http://localhost:4000/
```

## Deploy

The prototype lives at https://cityofaustin.github.io/prototypeform/.

The `master` branch of this repo is what gets deployed using [Github Pages](https://pages.github.com/) + [Jekyll.rb](https://jekyllrb.com/).
