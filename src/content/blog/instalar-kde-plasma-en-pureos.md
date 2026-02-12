---
title: Instalar KDE-Plasma (Desktop Environment) en PureOS
author: Lenin AGC
date: 2020-06-29 14:33:00
categories: [GNU/Linux, PureOS]
tags: [PureOS, free-software, Tutorial]
prev:
  text: "Virtual network default nat virt manager"
  link: "/blog/virtual-network-default-nat-virt-manager"
next:
  text: "Me quedo en arch"
  link: "/blog/me-quedo-en-arch"
---
# Instalar KDE-Plasma (Desktop Environment) en PureOS
![search program](/assets/img_/blog/post4_img0.webp)

Llega el domingo y nuevamente tengo ganas de compartir algo. En esta ocasión no hablaré del software la ostia (virt-manager)😂😂, mas bien quiero compartir procedimientos que he estado realizando en el nuevo sistemas operativo GNU/linux que estoy probando. PureOS es un sistema libre, a tal punto es libre que se encuentra en la lista de distribuciones recomendadas por la FSF (Free Software Foundation) y eso para los recién llegados al diverso mundo del software libre es quizás un excelente argumento a tener en cuenta. Desde ya quiero decir que no voy a caer en lo extremista con el tema software libre, no deseo entrar en discusiones tontas, cada uno es libre de interpretar y usar lo que mejor le parezca (una de las cosas bonitas de GNU/linux) ❤️❤️

## Un poco de PureOS

[PureOS](https://pureos.net/) _es un sistema operativo totalmente auditable: no tiene que confiar en nuestra palabra de que lo respeta y lo protege; los expertos en seguridad y los desarrolladores de software de todo el mundo lo pueden verificar de forma independiente. Moderno, con todas las funciones y fácil de usar_. Así lo describe su pagina oficial, también quiero agregar que esta distro está basada en una de las opciones mas antiguas y respetables del mundillo Ñu (la mascota GNU); Debian es la madre de la cual se desprende este OS, con todas sus ventajas y el agregado que mencione con anterioridad. Tiene una versión estable llamada **amber** que ofrece estabilidad, la acompaña para los mas arriesgados la versión rolling release (testing) de nombre **byzantium**; esta es para los que les gusta tener lo mas nuevo, !OJO¡👀, son paquetes en prueba y logísticamente hay riesgos que asumir. Para no extenderme mas los invito a hacer sus pruebas y comentar sus conclusiones.

## A lo que vinimos…

Si al igual que yo te gusta mucho plasma y después de instalar [PureOS](https://pureos.net/) te llevas la “sorpresa” que viene con gnome, te harás la pregunta ¿como instalar KDE-Plasma? pues dejame decirte que no tomará mucho tiempo hacerlo y ademas que tienes dos opciones:

## Opción #1 Instalación mínima.

Plasma con las paquetes mínimos para el correcto funcionamiento y sin tantos programas no deseados. Para ello abrimos una terminal y digitamos o copiar-pegar:

```
$ sudo apt install kde-plasma-desktop
```

![search program](/assets/img_/blog/post4_img1.webp)

Una imagen parecida a esta será lo que veremos, simplemente presionamos la tecla “y” para aceptar. Quiero advertir que con esta alternativa no están disponibles ciertos paquetes y funciones, una de ellas es el encargado de mostrar el icono que permite administrar las conexiones de red desde el panel principal de plasma (el icono del computador), dicho paquete se llama **plasma-nm** por si quieres encontrarlo rápidamente e instalarlo.

## Opción #2 Instalación full – configuraciones PureOS.

El equipo de pure sabe que no todo usamos gnome y que KDE-Plasma aporta mucho a la usabilidad, por eso (imagino) tienen disponible un paquete llamado **pureos-plasma**, este se encarga de instalar y configurar todo para dejar plasma a punto. Para instalar escribimos:

```
$ sudo apt install pureos-plasma
```

Digitamos nuestra clave si la solicita, aceptamos y esperamos a que termine la descarga e instalación de los paquetes. En algún momento de la instalación nos preguntará cual será el administrador de sesión (la pantalla donde escogemos el usuario) del sistema, esta parte muestra dos opciones GDM o SDDM, una es la de gnome y la otra es de plasma, yo siempre escojo la de plasma (SDDM) y lo recomiendo por si en algún momento decides desinstalar gnome completamente.

![search program](/assets/img_/blog/post4_img2.webp)

Aquí una imagen donde señalo como cambiar entre entornos de escritorio, la ubicación del menú es diferente en GDM, si mal lo recuerdo esta en la parte superior. En el pueden intercambiar entre plasma y gnome.

Listo mi gente, eso es todo. A disfrutar!!

El placer de hacer y compartir!! ✌️
