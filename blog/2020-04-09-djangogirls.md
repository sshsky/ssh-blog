---
id: djangogirls
title: Django Girls 教程
author: sshsky
author_title: PM @ Free
author_url: https://github.com/sshsky
author_image_url: https://avatars0.githubusercontent.com/u/2088591?s=460&v=4
tags: [pm, v2ex, docusaurus]
---

### 1.安装开发环境

> 推薦使用 Homebrew 安裝需要的工具


`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" `


<!--truncate-->

1. 安装Git 和Python3

`brew install git python3`

當 prompt 再度出現（畫面最後一行是以 $ 結尾）時，在 Git 設定你的名字和 email：

```
    git config --global user.name "你的名字"
    git config --global user.email "你的 email"
```

不需要用真名，取個看得懂的代號就好。我們建議在名字只使用英文與數字，雖然如果你硬要用中文，通常也可以。Email 當然就是填可以用的信箱。

### 2. 前置课程

1. 命令行工具


|動作 |  指令語法|  備註 | 
| --- | --- | --- |
| 顯示現在位置 ｜ pwd | | 
| 列出現在位置內容 | ls| 
｜ 列出目錄內容 | 	ls |  <目錄路徑> | 
｜ 進入目錄 | 	cd <目錄路徑> | 	回上一層：cd ..。| 
｜ 建立目錄	|  mkdir <目錄路徑> | 	| 
｜ 拷貝項目 | 	cp <項目路徑> <目標路徑> | 	
｜ 拷貝目錄 | 	cp -r <項目路徑> <目標路徑> | 	
｜ 移動項目 | 	mv <項目路徑> <目標路徑> | 	也可以拿來重新命名 | 
｜ 刪除檔案	| rm <檔案路徑> | 	刪除之後就回不去了！ | 
｜ 刪除目錄	| rm -r <目錄路徑> | 	刪除之後就回不去了！| 
	


2. Python 入门

3. 配置 virtualenv 与安装 Django

> 本节部分内容基于 [Geek Girls Carrots ](https://github.com/ggcarrots/django-carrots) 教程而来

- 新建一个目录

    `mkdir djangogirls`
    `cd djangogirls`


- 创建虚拟环境

  `python3 -m venv myvenv`


- 启用虚拟环境

    `source myvenv/bin/activate`


当你看到在您的控制台中有如下提示就知道你已经进入`虚拟环境` ：

`(myvenv) ~/djangogirls$`


注意 `（myvenv）`前缀的出现 ！

当在一个虚拟的环境中工作时，python 将自动指向正确的版本，因此您可以使用` python` 代替` python3`.

在`venv`环境下，用pip安装的包都被安装到venv这个环境下，系统Python环境不受任何影响。也就是说，venv环境是专门针对`myproject` 这个应用创建的。

退出当前的venv环境，使用 `deactivate` 命令：

4. HTML





#### 3. Django 教学

[Django Girls 学习指南](https://djangogirlstaipei.gitbooks.io/django-girls-taipei-tutorial/django/installation.html)


1. 建立 Django Project

首先，使用 ` django-admin.py` 來建立第一個 Django project `mysite` :


`(djangogirls_venv) ~/djangogirls$ django-admin.py startproject mysite`

2. 了解Django 的 Management commands

    manage.py 是 Django 提供的命令列工具，我們可以利用它執行很多工作，例如同步資料庫、建立 app 等等，指令的使用方式如下：


 `python manage.py <command> [options]`
 
    如果你想要了解有什麼指令可以使用，輸入 help 或 -h 指令會列出所有指令列表:
 
 `python manage.py -h`
 

3. 启动服务器 - runserver

``` 
    (djangogirls_venv) ~/djangogirls/mysite$ python manage.py runserver 
    ...
    Django version 1.8.5, using settings 'mysite.settings'
    Starting development server at http://127.0.0.1:8000/
    Quit the server with CONTROL-C.
```

4. 建立Django Application

讓我們利用 startapp 建立第一個 Django app -- trips:

`djangogirls_venv) ~/djangogirls/mysite$ python manage.py startapp trips`

startapp 會按照你的命名建立一個同名資料夾和 app 預設的檔案結構如下：

```
trips
├── __init__.py
├── admin.py
├── migrations
├── models.py
├── tests.py
└── views.py
```

5. 新增的Django APP 加入设定

在前一個指令，我們透過 Django 命令列工具建立了 trips 這個 app。但若要讓 Django 知道要管理哪些 apps，還需再調整設定檔。


打開 mysite/settings.py，找到 INSTALLED_APPS，調整如下：

```
# mysite/settings.py

...

# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'trips',
)

```

請注意 app 之間有時候需要特定先後順序。在此，我們將自訂的 trips 加在最後面。

> 預設安裝的 Django app

Django 已將常用的 app 設定為 INSTALLED_APPS 。例如，auth（使用者認證）、admin （管理後台）... 等等，我們可依需求自行增減。

> 小结

最後，我們回顧一下本章學到的指令

| 指令	| 說明 |
| --- | --- |
| django-admin.py startproject <project_name>	| 建立 Django 專案|
| python manage.py -h <command_name> | 	查看 Django commands 的使用方法 |
| python manage.py runserver	| 啟動開發伺服器|
| python manage.py startapp <app_name> | 	新增 Django app |


6. 设定 Django Admin ，建立 superuser

|指令|說明|
|---|---|
|python manage.py createsuperuser	|新增 Django 管理者帳號|

#### 备注信息 Python 更新 pip 国内源



**临时使用**

可以在使用pip的时候加参数-i https://pypi.tuna.tsinghua.edu.cn/simple

例如：pip install -i https://pypi.tuna.tsinghua.edu.cn/simple gevent，这样就会从清华这边的镜像去安装gevent库。

**永久修改，一劳永逸**

> Linux下

修改 ~/.pip/pip.conf (没有就创建一个)， 修改 index-url至tuna，内容如下：[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple

> windows下

直接在user目录中创建一个pip目录，如：C:\Users\xx\pip，新建文件pip.ini，内容如下：
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple






> 内容来源

> [Django Girls Rutorial](https://tutorial.djangogirls.org/zh/installation/)

> [Django Girls Rutorial](https://tutorial.djangogirls.org/zh/installation/)

