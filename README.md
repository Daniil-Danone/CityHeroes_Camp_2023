# CITYHEROES CAMP 2023
Map-project on React.js + DjangoRestFramework


# Клонируем проект
```sh
git clone https://github.com/Daniil-Danone/CityHeroes_Camp_2023.git
```
```sh
cd CityHeroes_Camp_2023
```
# Как запустить бекенд
**Переходим в директорию сервера из папки CityHeroes_Camp_2023**
```sh
cd server
```

**Устанавливаем глобальный пакет virtualenv, если он у вас не установлен**
```sh
pip install virtualenv
```

**Создаём виртуальное окружение**
```sh
virtualenv venv -p python3.11
```
_Если у Вас другая версия python, то замените цифры в команде на свои_

**Активируем виртуальное окружение**
```sh
venv/Scripts/activate
```

_Если Вам выдало ошибку при активации виртуального окружения (...выполнение сценариев отключено в этой системе...) - выполните нижеописанные шаги:_
- _Открываем терминал PowerShell от админа_
- _Вставляем и запускаем - Set-ExecutionPolicy RemoteSigned_
- _На вопрос отвечаем - A_

**Устанавливаем зависимости внутри виртуального окружения**
```sh
pip install -r requirements.txt
```

**Запускаем DRF-сервер (http://127.0.0.1:8000/)**
```sh
python manage.py runserver
```

# Как запустить фронтенд
**Создаём новый терминал**

**Переходим в директорию фронтенда из папки CityHeroes_Camp_2023**
```sh
cd client
```

**Устанавливаем модули**
```sh
npm install
```
_Если NPM выдал ERROR, то выполняем следующее_
```sh
npm install --force
```

**Запускаем фронтенд (http://localhost:5173/)**
```sh
npm run dev
```