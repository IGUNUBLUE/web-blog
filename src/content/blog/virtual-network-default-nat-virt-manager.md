---
title: "Virtual network default:NAT(Inactive) – Virt manager"
description: Solución al problema de red inactiva en virt-manager. Cómo activar la conexión virtual NAT para tener internet en tus máquinas virtuales.
author: Lenin AGC
date: 2020-06-22 15:33:00
cover: /images/blog/post3_img0.webp
categories: [GNU/Linux, Virtualization]
tags: [opensuse-tumbleweed, free-software, virt-manager, Tutorial]
prev:
  text: "Mi primera maquina virtual con virt manager"
  link: "/blog/mi-primera-maquina-virtual-con-virt-manager"
next:
  text: "Instalar KDE-plasma en pureos"
  link: "/blog/instalar-kde-plasma-en-pureos"
---

🙄🤣🤣 Si otra vez yo y ademas con el mismo tema. Chicos esto se que servirá a otros por eso lo comparto y como estoy haciendo un auto "entrenamiento intensivo" de virt manager comparto lo que voy encontrando. Hoy después de instalar pureOS (mi nuevo juguete) en el sorprendentemente funcional VM (virt-manager) me encuentro con la sorpresa que no tenia conexión a internet en la máquina virtual (MV); ahí me dispongo a entrar en las configuraciones de red de VM de la MV y verificar que pasaba. Para mi sorpresa encuentro un mensaje que decía: _Virtual network 'default' : NAT(Inactive)_ en el adaptador de red.

Debo reconocer que el desconocimiento de dicho programa y la pereza de no leer el manual me llevaron por varias rutas de las cuales no obtuve resultado satisfactorio, pero mi madre siempre me dice "el que persevera alcanza", sabia mi madre… ❤️ rebusque en varios foros y blogs para llegar finalmente a [inuxnix.com](https://www.linuxnix.com), ellos tienes un tutorial sobre como crear una conexión virtual adicional para las MV creadas en VM, excelente articulo; les dejo el link para respetar los derechos y porque es buena info: [KVM virtualization: Network(NAT) configuration in KVM hypervisor?](https://www.linuxnix.com/kvm-virtualization-network-nat-configuration-in-kvm-hypervisor/)

Aquí personalmente fue mi momento ¡eureka!, la imagen inicial de dicho articulo me habría ahorrado las dos horas que me tomo saber esto; simplemente debía activar la conexión virtual existente en mi VM, si… así de fácil. Lo enumeré en dos (2) simples pasos, eso es todo; aquí los dejo con imagen y todo para que no les tome dos horas como a mi, pufff!! que tonto la verdad… era obvio… 🤣🤣🤣🤣

## Paso 1

En la ventana principal de VM y con alguna de las MV seleccionada vamos a **Edit** que esta entre las opciones de la parte superior.

![Menú Edit en virt-manager](/images/blog/post3_img1.webp)

## Paso 2

En el menú desplegable que nos aparece después de presionar **Edit** seleccionamos **Connections Details**, ahora veremos la siguiente ventana que nos interesa.

![Connection Details](/images/blog/post3_img2.webp)

Damos click en **Virtual Networks**. En la opción **Autostart** activamos el checkbox para que esta conexión arranque con el sistema y siempre este activa también hay que seleccionar la conexión de nombre **default** y dar click izquierdo sobre el icono conocido como "play" que esta en la parte baja de la ventana, aplica (**Apply**) los cambios y eso es todo.

![Virtual Networks activada](/images/blog/post3_img3.webp)

Listo! vuelve al panel de configuración de la MV y recuerda darle actualizar en el icono que esta al lado de la palabra **IP address** en las opciones de red, así obtienes una IP; ahora si funciona. yujuuuu!!!!! 👏👏👏

Un abrazo!, me despido diciendo: El placer de hacer y compartir… 😉
