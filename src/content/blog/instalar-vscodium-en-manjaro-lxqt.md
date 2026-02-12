---
title: Instalar VSCodium en manjaro LXQT
author: Lenin AGC
date: 2021-05-16 19:33:00
categories: [GNU/Linux, Manjaro]
tags: [free-software, IDE]
prev:
  text: "Instalar brave en arch"
  link: "/blog/instalar-brave-en-arch"
next:
  text: "Haciendo deploy del backend en heroku"
  link: "/blog/haciendo-deploy-del-backend-en-heroku"
---
# Instalar VSCodium en manjaro LXQT
![vscodium 1](/assets/img_/blog/post7_img0.webp)

Holaaa! tiempo sin escribir algo. ¿cierto?, pues nada... estaba con mis estudios a full y bueno no quedaba mucho tiempo.
Para el dia de hoy quiero contarles un poco como instalar VSCodium en manjaro. Y... ¿eso que es?.

## ¿Que es VSCodium?

_VSCodium is a community-driven, freely-licensed binary distribution of Microsoft’s editor VSCode_. Como lo dice en su propia web es una compilación purgada, un paquete mantenido por la comunidad y para la comunidad sin seguimiento. Obviamente es el mismo código fuente que utiliza microsoft para compilar VSCode.
Si eres desarrollador de software sabras que es uno de los entornos de desarrollo integrado mas extendido por estos dias, hay otras opciones como vim o su hermano que recomiendo NEO-vim (God level).

## Y... ¿Como se puede instalar?

Para este caso en particular lo explicare sobre manjaro LXQT que es la distro que estoy usando actualmente.
Manjaro trae por defecto un package manager que pienso es la manera mas intuitiva de hacerlo, de esta forma sera fácil para aquellos que recién comienzan su andadura en el imbatible GNU/Linux.

## Instalando...

- Paso 1:
  Iremos al icono en la esquina inferior izquierda (en mi caso el dock esta en la parte superior, por defecto esta abajo) de nuestro menu, este es el menu de aplicaciones. Una vez desplegada la ventana pinchamos sobre **Preferencias** y luego sobre **agregar/remover software**, dejo la imagen para mas claridad:

![menu 1](/assets/img_/blog/post7_img1.webp)

- Paso 2:
  Se nos abrirá una ventana como esta:

![package manager](/assets/img_/blog/post7_img2.webp)

Verificamos que la pestaña **Browse** esté seleccionada o simplemente pinchamos en el icono con aspecto de lupa, luego de realizar esa acción nos aparecerá la barra de búsqueda donde escribiremos: **vsc**. Algo así...

![package manager 2](/assets/img_/blog/post7_img3.webp)

- Paso 3:
  El primer resultado como se nota en la imagen anterior es **vscodium-bin**, recomiendo usar este paquete pues ya esta pre-compilado y no tendrá que hacer la compilación del código fuente tu compu, y les juro que se toma su tiempo 😆😆, por lo menos en mi compu si.
  Para iniciar el proceso de instalación solo haces click sobre el icono azul con la flecha que indica hacia abajo, en la imagen mi icono es diferente y es simplemente porque ya lo tengo instalado.
  Para Terminar solo deben regresar al menu de aplicaciones antes mencionado y ubicar la opción **programación**, en el menu emergente estará disponible como nueva opción el flamante **VSCodium**.

![vscodium 2](/assets/img_/blog/post7_img4.webp)

Listo!! happy coding!!...

El placer de hacer y compartir … 🙃
