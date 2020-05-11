---
id: pipenv
title: 配置 Python 开发虚拟环境
author: sshsky
author_title: PM @ Free
author_url: https://github.com/sshsky
author_image_url: https://avatars0.githubusercontent.com/u/2088591?s=460&v=4
tags: [python, 虚拟环境]
---

### 配置虚拟环境

#### 安装 pipenv

1. 安装pipenv

`pip3 install pipenv`

2 创建虚拟环境

```
mkdir project
cd project
pipenv install
```

<!--truncate-->

初始化好虚拟环境后，会在项目目录下生成2个文件Pipfile和Pipfile.lock。为pipenv包的配置文件，代替原来的 requirement.txt。

项目提交时，可将Pipfile 文件和Pipfile.lock文件一并提交，待其他开发克隆下载，根据此Pipfile 运行命令pipenv install --dev生成自己的虚拟环境。

Pipfile.lock 文件是通过hash算法将包的名称和版本，及依赖关系生成哈希值，可以保证包的完整性。


[cnblogs](https://www.cnblogs.com/zingp/p/8525138.html)

***

Pipenv 是 Python 项目的依赖管理器。如果您熟悉 Node.js 的 npm 或 Ruby 的 bundler，那么它们在思路上与这些工具类似。尽管 pip 可以安装 Python 包， 但仍推荐使用 Pipenv，因为它是一种更高级的工具，可简化依赖关系管理的常见使用情况。

使用 pip 来安装 Pipenv：

`$ pip install --user pipenv`


> 这进行了 用户安装，以防止破坏任何系统范围的包。如果安装后, shell 中没有 pipenv，则需要将 用户基础目录 的 二进制文件目录添加到 PATH 中。

> 在 Linux 和 macOS 上，您可以通过运行 python -m site --user-base 找到 用户基础目录，然后把 bin 加到目录末尾。比如，上述命令典型地会打印出 ~/.local``（ ``~ 会扩展为您的家目录的局对路径），然后将 ~/.local/bin 添加到 PATH 中。您可以通过 修改 ~/.profile 永久地设置 PATH。

> 在 Windows 上，您通过运行 py -m site --user-site 找到用户基础目录，然后 将 site-packages 替换为 Scripts。比如，上述命令可能返回为 C:\Users\Username\AppData\Roaming\Python36\site-packages，然后您需要在 PATH 中包含 C:\Users\Username\AppData\Roaming\Python36\Scripts。 您可以在 控制面板 中永久设置用户的 PATH。您可能需要登出 PATH 更改才能生效。


##### 为您的项目安装包

Pipenv 管理每个项目的依赖关系。要安装软件包时，请更改到您的项目目录（或只是本教程中的 一个空目录）并运行：

```
$ cd myproject
$ pipenv install requests

```

Pipenv 将在您的项目目录中安装超赞的 Requests 库并为您创建一个 Pipfile。 Pipfile 用于跟踪您的项目中需要重新安装的依赖，例如在与他人共享项目时。 您应该得到类似的输出（尽管显示的确切路径会有所不同）：

```
Creating a virtualenv for this project...
Using base prefix '/usr/local/Cellar/python3/3.6.2/Frameworks/Python.framework/Versions/3.6'
New python executable in ~/.local/share/virtualenvs/tmp-agwWamBd/bin/python3.6
Also creating executable in ~/.local/share/virtualenvs/tmp-agwWamBd/bin/python
Installing setuptools, pip, wheel...done.

Virtualenv location: ~/.local/share/virtualenvs/tmp-agwWamBd
Installing requests...
Collecting requests
  Using cached requests-2.18.4-py2.py3-none-any.whl
Collecting idna<2.7,>=2.5 (from requests)
  Using cached idna-2.6-py2.py3-none-any.whl
Collecting urllib3<1.23,>=1.21.1 (from requests)
  Using cached urllib3-1.22-py2.py3-none-any.whl
Collecting chardet<3.1.0,>=3.0.2 (from requests)
  Using cached chardet-3.0.4-py2.py3-none-any.whl
Collecting certifi>=2017.4.17 (from requests)
  Using cached certifi-2017.7.27.1-py2.py3-none-any.whl
Installing collected packages: idna, urllib3, chardet, certifi, requests
Successfully installed certifi-2017.7.27.1 chardet-3.0.4 idna-2.6 requests-2.18.4 urllib3-1.22

Adding requests to Pipfile's [packages]...
P.S. You have excellent taste! ✨ 🍰 ✨

```

##### 使用安装好的包¶

现在安装了 Requests，您可以创建一个简单的 main.py 文件来使用它：

```
import requests
response = requests.get('https://httpbin.org/ip')
print('Your IP is {0}'.format(response.json()['origin']))
```

然后您就可以使用 pipenv run 运行这段脚本：

`$ pipenv run python main.py`

您应该获取到类似的输出：

`Your IP is 8.8.8.8`

使用 $ pipenv run 可确保您的安装包可用于您的脚本。我们还可以生成一个新的 shell， 确保所有命令都可以使用 $ pipenv shell 访问已安装的包。


#### 更低层次: virtualenv

virtualenv 是一个创建隔绝的Python环境的 工具。virtualenv创建一个包含所有必要的可执行文件的文件夹，用来使用Python工程所需的包。

它可以独立使用，代替Pipenv。

通过pip安装virtualenv：

`$ pip install virtualenv`

测试安装

`$ virtualenv --version`

**基本使用**

为一个工程创建一个虚拟环境：

`$ cd my_project_folder `
`$ virtualenv venv`

virtualenv venv 将会在当前的目录中创建一个文件夹，包含了Python可执行文件， 以及 pip 库的一份拷贝，这样就能安装其他包了。虚拟环境的名字（此例中是 venv ） 可以是任意的；若省略名字将会把文件均放在当前目录。

在任何您运行命令的目录中，这会创建Python的拷贝，并将之放在叫做 venv 的文件中。

您可以选择使用一个Python解释器（比如``python2.7``）：


`$ virtualenv -p /usr/bin/python2.7 venv`

或者使用``~/.bashrc``的一个环境变量将解释器改为全局性的：

`$ export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python2.7`

2. 要开始使用虚拟环境，其需要被激活：

`$ source venv/bin/activate`

像平常一样安装包，比如：

`$ pip install requests`

3. 如果您在虚拟环境中暂时完成了工作，则可以停用它：

`$ deactivate`

这将会回到系统默认的Python解释器，包括已安装的库也会回到默认的。

要删除一个虚拟环境，只需删除它的文件夹。（要这么做请执行 rm -rf venv ）


[Refer:Guide to python](https://pythonguidecn.readthedocs.io/zh/latest/dev/virtualenvs.html)
