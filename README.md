# Проект Movies-explorer `backend`  
###### Репозиторий бэкенд-части приложения Movies-explorer.

___

### :clipboard: __Описание:__

`«Movies-explorer»` — завершающий дипломный проект ***[на платформе Яндекс.Практикум](https://practicum.yandex.ru/)***. Проект представляет собой сервис поиска и сохранения фимльмов по ключевым словам.
### **[Сайт](https://movies-explorer.alinat.nomoredomains.monster/)**

___

### :bookmark_tabs: __Функционал:__

- Все маршруты объединены в отдельную папку [/routes](https://github.com/KindofShuga/movies-explorer-api/tree/main/routes).
- Работа с базой данных/дефолтная валидация схем, с помощью библиотеки [`Mongoose`](https://mongoosejs.com/).
- Валидация маршрутов библиотекой [`celebrate`](https://github.com/arb/celebrate); Валидация email, в схеме пользователя, библиотекой [`validator`](https://github.com/validatorjs/validator.js#readme).
- Хранение пароля пользователя в виде хэша с солью, с помощью [`bcryptjs`](https://github.com/dcodeIO/bcrypt.js#readme).
- Маршруты, требующие входа, защищены [мидлвэром авторизации](https://github.com/KindofShuga/movies-explorer-api/blob/main/middlewares/auth.js), базируется на [`jsonwebtoken`](https://github.com/auth0/node-jsonwebtoken#readme).
- Обработка CORS через [мидлвэр](https://github.com/KindofShuga/movies-explorer-api/blob/main/middlewares/corsHandler.js).
- Логирование [запросов и ошибок](https://github.com/KindofShuga/movies-explorer-api/blob/main/middlewares/logger.js), с помощью [`winston`](https://github.com/winstonjs/winston) и [`express-winston`](https://www.npmjs.com/package/express-winston). 
- Ограничение количества запросов мидлвэром [`express-rate-limit`](https://www.npmjs.com/package/express-rate-limit)
- Безопасные заголовки HTTP модулем [`helmet`](https://www.npmjs.com/package/helmet).
- Автоматический перезапуск приложения утилитой [`nodemon`](https://nodemon.io/), при изменении файлов проекта.
___

### :wrench: __Технологии:__
[![Технологии](https://skillicons.dev/icons?i=nodejs,express,nginx,mongodb,git)](https://skillicons.dev)  
- [`Yandex.Cloud`](https://cloud.yandex.ru/services/compute) — Виртуальная машина.
- `Ubuntu` — ОС.
- `pm2` — Менеджер процессов на сервере.
- `LetsencryptSSL` — Сертификаты от Letsencrypt
- `Mongoose` — Библиотека для работы с БД.
- `ESlint` — Библиотека-линтер, анализирует код на ошибки.
___

### :open_file_folder: __Директории:__
| Папка | Описание |
|:------|:---------|
| ***`/controllers`*** | контроллеры пользователя и фильма. |
| ***`/errors`*** | кастомные ошибки. |
| ***`/middlewares`*** | функции промежуточной обработки. |
| ***`/models`*** | описания схем пользователя и фильма. |
| ***`/routes`*** | файлы с маршрутами приложения. |

____

### :arrow_up_small: __Версии зависимостей:__
    "bcrypt": "^5.1.0",
    "celebrate": "^15.0.1",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "express-rate-limit": "^6.7.0",
    "express-winston": "^4.2.0",
    "helmet": "^6.1.5",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^7.0.3",
    "validator": "^13.9.0",
    "winston": "^3.8.2"

    "devDependencies":
    "eslint": "^8.38.0",
    "eslint-config-airbnb-base": "^15.0.0",
    "eslint-plugin-import": "^2.27.5",
    "nodemon": "^2.0.22"

### :bulb: __Запуск:__

- #### __Развернуть API:__
| Команда | Описание |
|:------|:---------|
| ***`git clone https://github.com/KindofShuga/movies-explorer-api.git`*** | клонировать репозиторий |
| ***`npm install`*** | установка зависимостей |
| ***`npm run dev`*** | запуск сервера *(порт 3000)* |

- #### __Развернуть фронтенд:__
| Команда | Описание |
|:------|:---------|
| ***`git clone https://github.com/KindofShuga/movies-explorer-frontend.git`*** | клонировать репозиторий |
| ***`npm install`*** | установка зависимостей |
| ***`npm run build`*** | собрать проект |
| ***`npm run start`*** | запуск проекта |
____

### :link: __Дополнительные ссылки__
- __Проект__:
    - [`Репозиторий с Фронтендом`](https://github.com/KindofShuga/movies-explorer-frontend)   
    - `Домен бэкенда` — https://api.movies-explorer.alina.nomoredomains.monster
    - `Домен фронтенда` — https://movies-explorer.alinat.nomoredomains.monster

- __Материалы Яндекса__:  
    - [`Чек-лист диплома`](https://code.s3.yandex.net/web-developer/static/new-program/web-diploma-criteria-2.0/index.html)  
