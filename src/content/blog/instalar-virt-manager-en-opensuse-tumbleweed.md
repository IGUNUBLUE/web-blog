---
title: Instalar virt-manager en Opensuse Tumbleweed
author: Lenin AGC
date: 2020-06-11 19:33:00
categories: [GNU/Linux, Virtualization]
tags: [opensuse-tumbleweed, free-software, virt-manager, Tutorial]
prev: false
next:
  text: "Mi primera maquina virtual con virt manager"
  link: "/blog/mi-primera-maquina-virtual-con-virt-manager"
---
# Instalar virt-manager en Opensuse Tumbleweed
![search program](/assets/img_/blog/post1_img0.webp)

Bueno… Hace algunos años estoy usando software libre, pero con los años te vas enterando que el mundo del software libre también tiene excepciones a la regla en lo que respecta a los parámetros de “software libre”, todos no parecen estar de acuerdo al 100% con la filosofía stallman o simplemente no se quieren complicar.

Lo que quiero decir es simplemente que si hablamos de algo es porque lo practicamos o por lo menos eso pienso y me esfuerzo por hacer. Bajo este argumento propio engendrado por mis propias conclusiones y experiencias siempre me auto impongo la tarea de usar software 100% libre, pero debo decir que hay que insistir pues no es tarea de un doble click.

Cuando te inicias en el mundillo GNU/linux sufres de algo que se llama distrohopping, en simples palabras vas de distribución en distribución buscando algo que a veces ni tu mismo sabe que es, Jajajaja yo también la sufrí y en algún momento decidí parar sin dejarlo del todo, es aquí donde conocí virtualbox.

## ¿Que es virtualbox?

No es mas que un software que permite simular x hardware para desplegar de manera controlada y hospedada localmente sistemas operativos. Por mucho tiempo lo use y llego el día que empecé a cuestionarme, ya saben, por eso del software libre y tal… En mi busqueda algo que para mis amigos es superior o como dirían los amigos de hatthieves.es es _la ostia!!_…

## ¿Que es Virt- manager? el software la ostia.

_Es una interfaz de usuario de escritorio para administrar maquinas virtuales a través de libvirt. Se dirige principalmente a maquinas virtuales KVM, pero también administra Xen y LXC (contenedores de Linux). Presenta una vista resumida de los dominios en ejecución, su rendimiento en vivo y estadísticas de utilización de recursos. Los asistentes permiten la creación de nuevos dominios, y la configuración y el ajuste de la asignación de recursos y el hardware virtual de un dominio. Un visor de cliente VNC y SPICE incorporado presenta una consola grafica completa para el dominio invitado._ Esto es una definición oficial que encontramos en [virt-manager.org.](https://virt-manager.org)

## Ahora si… Como instalar virt-manager en Opensuse tumbleweed.

Lo primero que debemos hacer es abrir **YaST Software** para instalar los paquetes necesarios, yo suelo presionar Alt+barra_espaciadora y en KDE se desplegará un pequeña barra en la parte superior del escritorio, ahí se escribe el criterio de búsqueda, que en este caso es “yast software”.

![search program](/assets/img_/blog/post1_img1.webp)

Una vez hacemos click sobre el asistente grafico de instalación de paquetes (YaST Software) de opensuse tumbleweed nos aparecerá algo así:

![YaST Software](/assets/img_/blog/post1_img2.webp)

En esta ventana nos interesa el apartado **View**, damos click y nos aparecerá una lista desplegable con 6 opciones, la que nos interesa es la numero 1 **Patterns**.

![YaST Software](/assets/img_/blog/post1_img3.webp)

Ahora veremos del lado izquierda todos el software disponible en los repositorios de opensuse tumbleweed organizados por patrones, con esta ventaja podremos ubicar de forma unificada el conjunto de paquetes necesarios para la instalación de virt-manager. En dicha lista nos desplazamos hacia abajo usando la rueda del mouse o usando la barra para desplazarse; así encontramos los patrones **KVM Host Server**, **KVM Virtualization Host and Tools**, seleccionamos y presionamos **Accept** para iniciar la instalación.

![YaST Software](/assets/img_/blog/post1_img4.webp)
![YaST Software](/assets/img_/blog/post1_img5.webp)

Terminada la instalación podemos cerrar la ventana y ahora abrimos una terminal para ejecutar un comando, puedes copiar con control+c y pegar en la terminal con shift+Ctrl+v, presiona enter, ingresa tu contraseña y listo. El comando es:

```
$ sudo systemctl enable --now libvirtd
```

Este comando simplemente arranca el servicio libvirtd y lo habilita para iniciar con el sistema, de esta forma no tendremos que estar pendiente de aplicarlo ante de abrir virt-manager.

![YaST Software](/assets/img_/blog/post1_img6.webp)

Ya casi para terminar hay que agregar nuestro usuario a los grupos **KVM**, **qemu** y **libvirt**. Para hacer esto nos vamos a la interface grafica de opensuse que nos permite modificar la configuración del sistema; YaST lo podemos encontrar usando nuevamente Alt+barra_espaciadora (KDE) o ir al lanzador de aplicaciones.

![YaST Software](/assets/img_/blog/post1_img7.webp)

Así como en la imagen iremos a **Security and Users** para después hacer click en **User and Group Management**, veremos la ventana a continuación:

![YaST Software](/assets/img_/blog/post1_img8.webp)

En ella vamos a dar doble click sobre nuestro nombre de usuario o presionar **edit**, que esta ubicado en la parte baja de la ventana. Luego como en las imágenes de abajo hay que presionar en **Details** y del lado derecho de la ventana en **Additional Groups** buscamos y selecionamos los grupos antes mencionados (KVM, qemu y libvirt.), click en **OK** para guardar los cambios.

![YaST Software](/assets/img_/blog/post1_img9.webp)

Para que el sistema asimile los cambios realizados debemos cerrar la sesión y volver a ingresar. Ahora ya podemos ejecutar virt-manager para encontrarnos con esta pequeña pero poderosa interface, desde aquí podemos crear, ejecutar, configurar las maquinas virtuales. Por otro lado o como continuación a este post crearé una para explicar como crear y configurar las instancias virtuales.

Gracias a @DevWEDC del canal telegram en español de opensuse .

El placer de hacer y compartir … 🙃
