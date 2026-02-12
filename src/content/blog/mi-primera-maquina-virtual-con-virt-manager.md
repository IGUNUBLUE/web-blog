---
title: Mi primera máquina virtual con virt-manager
description: Tutorial para crear y configurar tu primera máquina virtual usando virt-manager con opciones de instalación local, red y configuración de recursos.
author: Lenin AGC
date: 2020-06-15 13:33:00
cover: /images/blog/post2_img0.webp
categories: [GNU/Linux, Virtualization]
tags: [opensuse-tumbleweed, free-software, virt-manager, Tutorial]
prev:
  text: "Instalar virt-manager en opensuse tumbleweed"
  link: "/blog/instalar-virt-manager-en-opensuse-tumbleweed"
next:
  text: "Virtual network default nat virt manager"
  link: "/blog/virtual-network-default-nat-virt-manager"
---

Hola!… nuevamente yo, esta vez escribo con la intención de cumplir con mi compromiso. Como prometí en mi anterior articulo [(Instalar virt-manager en opensuse tumbleweeb)](/blog/instalar-virt-manager-en-opensuse-tumbleweed) voy a compartir los pasos básicos para crear una maquina virtual en virt-manager, pero antes de nada deseo confesar que de experto no tengo nada, soy un enamorado de software libre con unos años en el y como cualquier otro que lleve tiempo usando GNU/linux sabe resolver cosillas; puedo decir incluso que no he pasado de ser un usuario home. En todo caso me place dejar estas migajas para que aquellos que estén iniciándose puedan dar forma a sus objetivos GNU/linuxeros. 😉

## Al grano…

Como ya tenemos instalado virt-manager en opensuse o cualquier otra distro (Distribución GNU/linux), simplemente ejecutamos desde el lanzador de aplicaciones y veremos una ventana igual o parecida a esta:

![Ventana principal de virt-manager](/images/blog/post2_img1.webp)

En dicha ventana vamos dar click sobre el icono con el signo + que esta en la parte superior.

![Botón de crear nueva VM](/images/blog/post2_img2.webp)

Con esta acción damos inicio al asistente de creación y configuración que nos guiará por el proceso.

![Asistente de creación de VM](/images/blog/post2_img3.webp)

El primer paso nos ofrece varias opciones:

1. _Local install media (ISO image or CDROM)_: la instalación local usando una imagen ISO o un disco físico nos permitirá realizar el proceso objetivo desde cualquiera de los orígenes antes mencionados, no tiene mucho misterio la verdad…
2. _Network Install (HTTP,HTTPS, or FTP)_: para este caso la instalación tendrá como origen una URL o ubicación FTP donde se alojan todos los paquetes necesario para que el sistema quede a tono.
3. _Network Boot (PXE)_: **Preboot eXecution Environment** (**PXE**) (Entorno de ejecución de prearranque), es un entorno para arrancar e instalar el sistema operativo en computadoras a través de una red, de manera independiente de los dispositivos de almacenamiento de datos disponibles (como discos duros) o de los sistemas operativos instalados. [By wikipedia](https://es.wikipedia.org/wiki/Preboot_Execution_Environment)
4. _Import existing disk image_: si seleccionamos esta opción podremos ejecutar una maquina existente, debo decir que se debe tener en cuenta la extensión (.qcow2) de dicho archivo pues debe ser compatible con virt-manager. Siempre recordar que podemos convertir de xxx formato a qcow2 usando la herramienta _qemu-img_.

Yo suelo usar la opción **1** pues son distros que bajo desde la pagina oficial, hago pruebas y le doy gusto a mi yo amante del distrohopping 😆😆😆. Presionamos **Forward** (adelante) y veremos esto:

![Selección de medio de instalación](/images/blog/post2_img4.webp)

Como señalo en la imagen anterior presionamos sobre **Browse…** nos aparece un ventana mas y luego nuevamente en **Browse local** y así podremos ubicar el archivo.iso que servirá de origen para la instalación, seleccionamos y presionamos **Open** (abrir).

Una vez realizamos el proceso de escoger el medio de instalación se nos permitirá selecionar el nombre del sistema operativo que se va a instalar, esto con el fin de incluir configuraciones recomendadas, se verá algo así…

![Selección del sistema operativo](/images/blog/post2_img5.webp)

Quitamos la selección de la opción **Automatically detect from the installation media / source** y con eso dispondremos del campo búsqueda que nos ira mostrando al escribir los nombres de los SO disponibles, seleccionamos el nombre del que vamos a instalar en la maquina virtual o el mas parecido si no se encuentra, tener en cuenta que las configuraciones predeterminada pueden cambiarse. Damos click en **Forward** (adelante).

Ahora podremos incrementar o disminuir los recurso que se asignaran a la maquina virtual.

![Configuración de recursos](/images/blog/post2_img6.webp)

Cambiamos al gusto y adelante (Forward), otra ventana! 😅 En ella escogemos la capacidad que se asignará al disco duro de la maquina virtual y como siempre **Forward**.

![Configuración de disco duro](/images/blog/post2_img7.webp)

Ahora veremos un resumen de las configuraciones y la opción de escoger la interface LAN a trávez de la cual la maquina virtual saldrá a la matrix, osea podra navegar 🤣.

![Resumen y configuración de red](/images/blog/post2_img8.webp)

Para configurar la red solo presionan sobre el icono de play (desplegar) al lado de las palabras **Network selection**, yo siempre escojo **Host device**, Hay mas opciones pero eso dependerá de la necesidad de cada quien. Presionamos **Finish**, se crea la maquina y casi imediatamente nos muestra la interface que nos permitirá interactuar con el SO a instalar. Para terminar agrego que para que el cursor abandone la maquina virtual se debe presionas Ctrl + Alt.

![VM creada y ejecutándose](/images/blog/post2_img8.webp)

Y listo… en la parte superior de esta ventana tendremos las opciones de apagado, inicio, etc. Puedes ejecutar a la vez todas las instancias desedas siempre y cuando el hardware del equipo anfitrion lo permita.

El placer de hacer y compartir… 😉
