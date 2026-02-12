---
title: Haciendo deploy del backend en heroku
author: Lenin AGC
date: 2021-05-29 12:33:00
categories: [Deploy-tools, Heroku]
tags: [backend, nodeJS, expressJS, Sequelize]
prev:
  text: 'Instalar vscodium en manjaro lxqt'
  link: '/blog/instalar-vscodium-en-manjaro-lxqt'
next:
  text: 'How to add vercel-analytics to vitepress'
  link: '/blog/how-to-add-vercel-analytics-to-vitepress-projects'
---
# Haciendo deploy del backend en heroku
![heroku 1](/assets/img_/blog/post8_img0.webp)

Buenos días a todos!! hoy voy a mostrarles como hice para dejar online mi proyecto individual para el E-learning [HENRY](https://www.soyhenry.com/) del cual me gradué como Jr Full stack web developer. He utilizado dos plataformas bastante conocidas (creo) y en una de ellas me encontré con algunas cosas o configuraciones que no entendía.
Exactamente estoy hablando sobre heroku. La aplicación esta construida con nodeJS, el framework expressJS, reactJS pare el front y uso Sequelize (ORM) para la manipulación de la base de datos (postgres).

Aprovecho para mencionar que si están pensando en iniciarse en la programación puedes empezar en [HENRY](https://www.soyhenry.com/), solo les dire que la experiencia es: ¡increíble!.

## El problema...

Una vez termine los requerimientos de la aplicación, el siguiente reto era dejarla online. Pero... me encontré un detalle:

- Quería poner en heroku solo la carpeta donde estaba todo el source de la API (backend).

## ¿Que es heroku?

_Heroku is a cloud platform that lets companies build, deliver, monitor and scale apps — we're the fastest way to go from idea to URL, bypassing all those infrastructure headaches._ Como bien lo dicen ellos es un forma de tomar tu aplicación y en poco minutos tenerla disponible para tus futuros clientes. No tendrás que preocuparte por nada mas que mantener el código fuente limpio y funcional, lo demás te lo ofrece heroku.
Si desean ampliar la información sobre esta plataforma puedes hacer click ahí ==> [¿WHAT IS HEROKU?](https://www.heroku.com/what).

## Problema #1 - Solución

Que seria de un desarrollador sin [stackoverflow](https://stackoverflow.com/), no concibo un mundo sin esta comunidad 🤣🤣🤣.
La cuestión es que heroku me permite conectar el repositorio de [github](https://github.com/) con la aplicación que creo en la plataforma, de esta forma se puede activar la opción **Automatic deploy**. Esta función nos ahorra el trabajo de realizar manualmente la actualización del código fuente que esta usando la instancia que se encuentra online. ¿What? ¡si! ¡es genial! con tan solo hacer push de los cambios al repositorio automáticamente heroku hará una compilación de ese código y actualizará nuestra app, entonces siempre tendremos todo al dia. Definitivamente esto es importante por temas de seguridad e implementación de nuevas features.

Nada en la vida es perfecto... resulta que al enlazar el repositorio con la plataforma el deploy se genera sobre el directorio raíz del proyecto y nuestro directorio raíz tiene dos carpetas: API(backend) y client(frontend).

![github 1](/assets/img_/blog/post8_img1.webp)

La imagen anterior nos da una idea de a que me refiero. Ahora, si heroku intenta hacer un deploy de ese repositorio no encontrará los archivos necesario para entender como compilar e iniciar nuestra aplicación (esta es mi hipótesis). Entonces hay que indicarle que vamos a entrar a la carpeta **api** y desde ahi haremos el lanzamiento. ¿como?

### Paso 1 - instalar heroku-cli

Como saben uso GNU/Linux (manjaro LXQT) y la instalación la haré sobre dicho sistema, pero igual les dejo el link a la documentación para que pueden hacerlo en su sistema favorito. [¡CLICK AQUÍ!](https://devcenter.heroku.com/articles/heroku-cli).
Abrimos una terminal presionando **Ctrl+Alt+t**, escribimos:

```
sudo pacman -Sy yay
```

De esta forma tendremos **yay** que se encargará de buscar el paquete en el repositorio comunitario de arch (AUR). luego:

```
sudo yay -Sy heroku-cli-bin
```

Nos saldrá una pregunta tipo: _Diffs to show?_, simplemente presionamos _N_ para continuar. También veremos: _Proceed with install? Y/n_, obviamente presionaremos _y_. Tomara unos minutos dependiendo de la conexión y veremos algo asi:

![github 1](/assets/img_/blog/post8_img2.webp)

¡Listo! tenemos heroku-cli instalado.

### Paso 2 - heroku login

Para poder operar con las apps que tenemos en heroku primero debemos autenticarnos y eso lo haremos con el comando:

```
heroku login
```

Veremos _heroku: Press any key to open up the browser to login or q to exit:_ presionamos la tecla de preferencia.
Se abrirá el navegador y ahi procederemos a ingresar nuestra información de login de heroku. Una vez echo eso, estamos ready para el juego.

#### Paso 3 - Push y deploy

Lo que sigue es ubicarnos sobre la carpeta con nuestro backend (api), desde la terminar navegaremos hasta ahí.

![github 1](/assets/img_/blog/post8_img4.webp)

Luego debemos asociar este código fuente con nuestra app de heroku previamente creada. ¿No lo hicimos? ok, ok, una (mejor varias 🤣) imagen vale mas que mi palabras.

![github 1](/assets/img_/blog/post8_img5.webp)
![github 1](/assets/img_/blog/post8_img6.webp)
![github 1](/assets/img_/blog/post8_img7.webp)

continuamos... Con la app creada y ubicados sobre la raíz del proyecto, desde la terminal ejecutamos:

```
heroku git:remote -a nombre_de_nuestra_app_en_heroku
```

Con esto asociamos nuestro código fuente con la app creada en heroku. Lo que sigue es empujar solo la carpeta del backend.
Para eso ejecutamos:

```
git subtree push --prefix nombre_de_la_carpeta_que_tiene_la_fuente_del_backend heroku master
```

![github 1](/assets/img_/blog/post8_img8.webp)

A la izquierda el resultado de ejecutar el comando anterior y a la derecha de la imagen el **log** que nos facilita heroku. Para ver este log debes abrir otra terminal, ir al directorio raíz de la aplicación y ejecutar:

```
heroku logs --tail
```

Por ultimo no olviden configurar sus variables de entorno en la pestaña **setting** y el **buildpacks** de la app.

![github 1](/assets/img_/blog/post8_img9.webp)
![github 1](/assets/img_/blog/post8_img10.webp)

Listo!! happy coding!!...
Para el proximo articulo les explicare como usar la base de datos de heroku y conectarla con la app.

El placer de hacer y compartir … 🙃
