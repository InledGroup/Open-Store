import type { App } from '../types/app';

export const apps: App[] = [
  {
    id: 'swiftinstall',
    title: 'Swiftinstall',
    icon: 'https://hosted.inled.es/swiftinstall-logo.png',
    platform: ['Linux'],
    shortDescription: 'Instala, desinstala y gestiona paquetes .deb y .appimage fácilmente',
    description: `# Swiftinstall, tu asistente de aplicaciones.  

Olvídate de usar la terminal para instalar o desinstalar paquetes de aplicaciones en Linux.
Instala todo de forma visual con Swiftinstall.
¿Errores de instalación? ¡Corrígelos a un clic!
¿Sistema de archivos demasiado lleno? ¡Límpialo a dos clics!
¿Necesitas revisar el sistema de archivos en busca de virus? ¡En 3 clics lo tienes!

Swiftinstall está hecho para ti, pensando en tus necesidades y resolviéndolas de forma fácil y cómoda.

### Features

- Open Source
- Proceso 100% visual
- Software de calidad: gran cantidad de test antes de publicar
- Instala aplicaciones gráficamente desde paquetes .deb o .appimage
- Desinstala cualquier app visualmente
- Corrige errores de dependencias
- Analiza el sistema en busca de virus
- Limpia basura en tu sistema
- Apariencia moderna`,
    screenshots: [
      'https://hosted.inled.es/swiftinstall/1.png',
      'https://hosted.inled.es/swiftinstall/2.png',
      'https://hosted.inled.es/swiftinstall/3.png'
    ],
    video: 'https://www.youtube.com/embed/4LWLIn5DmOQ',
    downloads: {
      github: 'https://github.com/InledGroup/swiftinstall/releases/download/v8.0/swiftinstall8.1-ui-fix.deb',
      sourceforge: 'https://sourceforge.net/projects/swiftinstall/files/latest/download',
      sourceCode: 'https://github.com/InledGroup/swiftinstall'
    }
  },

  {
    id: 'warp-vpn',
    title: 'Warp VPN GUI',
    icon: 'https://hosted.inled.es/warpupscale.png',
    platform: ['Linux'],
    shortDescription: 'Interfaz gráfica super sencilla para gestionar la VPN gratuita de Cloudflare: Warp',
    description: `Deja de usar la terminal para algo tan cotidiano como usar una VPN.
Esta VPN, proveída por Cloudflare, es gratuita e incluye funciones como protección contra malware y contenido de escaso valor moral.


Instalación
Mediante Swiftinstall
Descarga el paquete .deb
Abre Swiftinstall y selecciona el paquete
Pulsa en Instalar.
Mediante dpkg
Ejecuta dpkg -i warp-exec-v1.deb

Requisitos
Tener instalada Warp VPN -> [https://pkg.cloudflareclient.com/#debian](https://pkg.cloudflareclient.com/#debian)
Haber activado Warp -> [https://developers.cloudflare.com/warp-client/get-started/linux/](https://developers.cloudflare.com/warp-client/get-started/linux/)

### Features

- Interfaz 100% visual
- Sin curva de aprendizaje
- Software de calidad: revisado y probado para ofrecerte lo mejor
- Seguridad en la red gracias a 1.1.1.1
- Evita bloqueos y baneos por IP`,
    screenshots: [
      'https://hosted.inled.es/dream.build.png'
    ],
    video: '',
    downloads: {
      github: 'https://github.com/InledGroup/warpvpn-gui/releases/download/v1.0/warp-exec-v1.deb',
      sourceforge: 'https://sourceforge.net/projects/warpvpn-gui/files/latest/download',
      sourceCode: 'https://github.com/InledGroup/warpvpn-gui'
    }
  },

  {
    id: 'startomnibox',
    title: 'Start Omnibox',
    icon: 'https://hosted.inled.es/icon128.png',
    platform: ['Chrome', 'Edge'],
    shortDescription: 'Usa el buscador que quieras. Fácil, a 3 clics.',
    description: `# Escoge el buscador

Con Start Omnibox tú tienes el poder. Puedes escoger qué motor de búsqueda usar desde el deslpegable de Start Omnibox. Ya no tienes que entrar en la página de cada buscador para comenzar a buscar



# Funcionamiento

## Escoja el motor de búsqueda

Desde el icono de Start Omnibox en la barra de extensiones

## Escriba S en la barra de búsqueda

Escriba S en la barra de búsqueda y pulse en «Start Omnibox»

## Introduzca su búsqueda

Ahora su búsqueda se abrirá en el motor de búsqueda que haya seleccionado

# Instalación

## Descargue el zip y descomprímalo

## Habilite el modo Desarrollador y suba la extensión

En la esquina superior derecha en la sección Extensiones de su navegador active el modo desarrollador y después pulse en «Cargar descomprimida» en el desplegable que le aparecerá

## Active la extensión

Para finalizar pulse en el switch dentro del recuadro de la extensión y actívela.`,
    screenshots: [
      'https://hosted.inled.es/start-omnibox-inled.es-gif-‐-Hecho-con-Clipchamp.gif'
    ],
    video: 'https://youtube.com/embed/QELO6IBLW4w?si=wf5kS0mIsEwSVRVw',
    downloads: {
      github: 'https://github.com/InledGroup/start-omnibox/archive/refs/heads/main.zip',
      sourceforge: '',
      sourceCode: 'https://github.com/InledGroup/start-omnibox'
    }
  },

  {
    id: 'cruzcristiana',
    title: 'Cruz Cristiana para GNOME',
    icon: 'https://hosted.inled.es/cruzcristiana-gnome-logo.png',
    platform: ['Linux', 'GNOME'],
    shortDescription: 'Muestra la cruz de Cristo para que la presencia de Dios esté contigo.',
    description: `# Cristo te acompaña en tu Linux

Ya sea que estés disfrutando de las bondades de usar Linux, la Cruz de Cristo estará siempre contigo y, por tanto, Dios también.

Hay múltiples formas de estar acompañados por Dios...

Algunos llevamos una cruz como colgante, otros un rosario, otros una estampita... **y otros, que pasamos horas delante del ordenador, tenemos a Dios con nosotros gracias a<u>Cruz Cristiana de Inled Group para GNOME.</u>**

Si desea tener la compañía de Dios hasta en formato digital, no lo dude: descargue ya desde la tienda oficial.

Es gratuita y de código abierto.`,
    screenshots: [
      'https://extensions.gnome.org/extension-data/screenshots/screenshot_8060.png'
    ],
    video: '',
    downloads: {
      github: 'https://extensions.gnome.org/extension/8060/christian-cross-in-gnome-bar/',
      sourceforge: '',
      sourceCode: 'https://github.com/jaimegh-es/cruzcristiana-gnome'
    }
  },

   {
    id: 'memorywarn',
    title: 'Memory Warn',
    icon: 'https://hosted.inled.es/memory-warn-logo.png',
    platform: ['Linux'],
    shortDescription: 'Memory-warn advierte cuando el uso de memoria de su ordenador supera un umbral establecido.',
    description: `¡Descubre tu nuevo compañero del día a día!
Memory Warn te permite establecer un límite de uso de memoria y te avisa cuando se supera ese límite, ayudándote a prevenir que el ordenador se tueste o deje de responder.

Además, puedes establecer la frecuencia de muestreo para un aviso más anticipado.

¡Esperamos que esta sea la solución a los bloqueos inesperados de tu ordenador!

### Features

- Prevención de bloqueos
- Aviso cuando se supera el umbral
- Frecuencia de muestreo adaptable
- Interfaz visual
- Código de calidad, con revisiones estrictas para asegurar seguridad y fiablidad`,
    screenshots: [
      'https://hosted.inled.es/memory-warn.png'
    ],
    video: '',
    downloads: {
      github: 'https://github.com/InledGroup/memory-warn/releases/download/v1.0/memory-warn.deb',
      sourceforge: 'https://sourceforge.net/projects/memory-warn/files/latest/download',
      sourceCode: 'https://github.com/InledGroup/memory-warn'
    }
  },

  {
    id: 'startntp',
    title: 'Start New Tab Page',
    icon: 'https://hosted.inled.es/start.newtabpage.png',
    platform: ['Chrome', 'Edge'],
    shortDescription: 'Experimenta la productividad con Start como página de inicio.',
    description: `# 

## Start como nueva pestaña

Establece Start como página de nueva pestaña

## Start al arranque

Configura Start como página de arranque

## Start como inicio

Finalmente Start se convierte en página de inicio

# Instalación

## Descargue el zip y descomprímalo

## Habilite el modo Desarrollador y suba la extensión

En la esquina superior derecha en la sección Extensiones de su navegador active el modo desarrollador y después pulse en «Cargar descomprimida» en el desplegable que le aparecerá

## Active la extensión

Para finalizar pulse en el switch dentro del recuadro de la extensión y actívela.`,
    screenshots: [
      'https://b.sf-syn.com/badge_img/3908997/oss-users-love-us-white?&r=https://inled.es/startntp/'
    ],
    video: '',
    downloads: {
      github: 'https://github.com/InledGroup/start.newtab.chrome/archive/refs/heads/main.zip',
      sourceforge: '',
      sourceCode: 'https://github.com/InledGroup/start.newtab.chrome'
    }
  },

  {
    id: 'winerror',
    title: 'Windows Error',
    icon: 'https://hosted.inled.es/winerror.png',
    platform: ['Mac'],
    shortDescription: 'Disfruta de la ventana de error de Windows XP en tu Mac.',
    description: `# Windows Error for Mac

Esta divertida aplicación te muestra una ventana de error diseñada a imagen y semejanza de las que mostraba nuestro querido Windows XP.

El error es completamente ficticio y no daña el Mac.

## Instalación

La aplicación no está "notarizada", es decir, firmada con un identificador de desarrollador de Apple.

Por tanto, para poder ejecutarla deberá quitarle la cuarentena automática que tienen todas las apps de Mac cuando no han sido verificadas por el usuario.

### Procedimiento


<pre>
xattr -d com.apple.quarantine WindowsError\ 2.app

</pre>

El código es abierto, por tanto Vd. puede revisarlo para comprobar que la app es segura.

La funcionalidad se encuentra contenida en un único archivo, por lo que es muy fácil revisarla.`,
    screenshots: [
      'https://hosted.inled.es/windowserror.bliss_.png',
      'https://hosted.inled.es/aparienciawinerror copia.png'
    ],
    video: '',
    downloads: {
      github: 'https://github.com/InledGroup/windowserror/releases/download/v2.0/WindowsError2.zip',
      sourceforge: 'https://sourceforge.net/projects/windowserror/files/latest/download',
      sourceCode: 'https://github.com/InledGroup/windowserror'
    }
  },

  {
    id: 'winbsod',
    title: 'WinBSOD',
    icon: 'https://hosted.inled.es/winbsod.png',
    platform: ['Mac'],
    shortDescription: 'Simula la BSOD de Windows... ¡en tu Mac!.',
    description: `# Redescubre la ilusión en Windows... ¡desde Mac!

Aquellos tiernos momentos en los que te acordabas de la madre de Microsoft y agarrabas el teclado para proceder a golpear al ordenador... esos momentos nunca los olvidaremos mientras sigamos teniendo Windows pero... ¿y con Mac?

## Redescubre la fantástica <u>pantalla azul de la muerte</u> de Windows

Ahora disponible para Mac para su uso y disfrute.

Ya sea que quieras que tu Mac se parezca más a Windows o que desees recordar tu historia con Windows (si alguna vez lo has sufrido), WinBSOD es la opción perfecta.

## Instalación

La aplicación no viene "notarizada", es decir, firmada con el identificador de desarrollador de Apple.

Es por ello que, para ejecutarla, deberá emplear el comando 
<pre>
xattr -d com.apple.quarantine BSOD.app
</pre>`,
    screenshots: [
      'https://hosted.inled.es/Captura-de-pantalla-2025-06-23-a-las-9.05.56.png'
    ],
    video: '',
    downloads: {
      github: 'https://github.com/Inled-Group/winbsod/releases/download/v1.0/BSOD.app.zip',
      sourceforge: '',
      sourceCode: 'https://github.com/InledGroup/winbsod'
    }
  },

  {
    id: 'tabstacker',
    title: 'Tabstacker',
    icon: 'https://hosted.inled.es/tabstacker.png',
    platform: ['Chrome', 'Edge'],
    shortDescription: 'Guarda pestañas, envíalas y haz de todo con ellas fácilmente',
    description: `# Redescubre la potencia de las pestañas

---

Con Tabstacker, guardar pestañas, enviarlas por mensajería instantánea o por mail y abrirlas de nuevo agrupadas ya no es difícil y engorroso como con los marcadores.

La potencia en sí, de forma privada (a diferencia de otras).

## Instalación

Habilita el modo desarrollador en Chrome o derivados y sube el .zip descomprimido.

## En actualización

Estamos trabajando para mejorar Tabstacker y otras extensiones para proveerles de un sistema automático de comprobación de actualizaciones.`,
    screenshots: [
      
    ],
    video: '',
    downloads: {
      github: 'https://github.com/InledGroup/tabstacker/archive/refs/heads/main.zip',
      sourceforge: '',
      sourceCode: 'https://github.com/InledGroup/tabstacker'
    }
  },

  {
    id: 'cleany',
    title: 'Cleany',
    icon: 'https://hosted.inled.es/cleany.png',
    platform: ['Chrome', 'Edge'],
    shortDescription: 'Una extensión perfecta para ordenadores públicos o compartidos',
    description: `# La solución para navegadores en PC's públicos

Evite la suplantación de identidad y la pérdida de información sensible en ordenadores públicos gracias a **Cleany.**

Cleany cierra sesiones, borra historial, borra las cookies, limpia datos de formularios...

Simplemente perfecta para su uso.

Cada vez que se abre el navegador, Cleany se ejecuta y hace su magia <u>sin ralentizar la velocidad del navegador.</u>

## Instalación

Símplemente descarga y descomprime el .zip, habilita el modo desarrollador en la página de extensiones de Chrome y sube la carpeta de la extensión.`,
    screenshots: [
      
    ],
    video: '',
    downloads: {
      github: 'https://github.com/InledGroup/cleany/archive/refs/heads/main.zip',
      sourceforge: '',
      sourceCode: 'https://github.com/InledGroup/cleany'
    }
  },

   {
    id: 'archive.is',
    title: 'Open in Archive.is',
    icon: 'https://hosted.inled.es/archive.is.png',
    platform: ['Chrome', 'Edge'],
    shortDescription: 'Abre la página en archive.is a un clic',
    description: `# Accede a contenido ilimitado

Gracias a Archive.is puedes disfrutar de descubrir las múltiples capturas de una página web.

## Instala la extensión

Descarga el .zip, descomprímelo, accede a la página de Extensiones del navegador (no la tienda, la página de extensiones instaladas), habilita el modo desarrollador y pulsa en "cargar descomprimida"`,
    screenshots: [
      
    ],
    video: '',
    downloads: {
      github: 'https://github.com/InledGroup/open-url-archive.is/archive/refs/heads/main.zip',
      sourceforge: '',
      sourceCode: 'https://github.com/InledGroup/open-url-archive.is'
    }
  },

   {
    id: 'startchat',
    title: 'Startchat',
    icon: 'https://hosted.inled.es/startchat.png',
    platform: ['Mac', 'Windows', 'Linux'],
    shortDescription: 'Chat en la misma red wifi, sin servidores externos',
    description: `# Chatea en la misma Wifi

¿Te imaginas montarte tu propio Whatsapp en la red local? Con Startchat puedes, a dos comandos.

Startchat es, a la vez, servidor de sala de chat y de la página de conversación.

Dispones de varios servidores predefinidos para puertos 8080, 8081 y 8082.

El servidor predeterminado ya levanta la UI también.

## Ejecución

Simplemente debes instalar NodeJS en tu ordenador y navegar desde la terminal hasta la carpeta donde se encuentra Startchat.

Dentro de ella ejecutas

<pre>npm install</pre> y luego <pre>node server.js</pre>`,
    screenshots: [
      'https://hosted.inled.es/uistartchat.png'
    ],
    video: '',
    downloads: {
      github: 'https://github.com/InledGroup/startchat/archive/refs/heads/main.zip',
      sourceforge: '',
      sourceCode: 'https://github.com/InledGroup/startchat'
    }
  },

  {
    id: 'inshare',
    title: 'InShare',
    icon: '',
    platform: ['Mac', 'Windows', 'Linux'],
    shortDescription: 'Comparte archivos a través de la red local de forma 100% privada.',
    description: `# Tu propio drop de documentos

¿Quieres compartir documentos desde el teléfono al PC? ¿Al revés? Viceversa...

Con InShare es posible, en cualquier sistema operativo y sin instalar una aplicación: ejecutando un simple servidor.

## Ejecución

Simplemente debes instalar NodeJS en tu ordenador y navegar desde la terminal hasta la carpeta donde se encuentra InShare.

Dentro de ella ejecutas

<pre>npm install</pre> y luego <pre>node server.js</pre>`,
    screenshots: [
      'https://hosted.inled.es/inshare.capture.png',
      'https://hosted.inled.es/inshare.png'
    ],
    video: '',
    downloads: {
      github: 'https://github.com/InledGroup/inshare/archive/refs/heads/main.zip',
      sourceforge: '',
      sourceCode: 'https://github.com/InledGroup/inshare'
    }
  },

  {
    id: 'moodlenotifier',
    title: 'Moodle Notifier',
    icon: 'https://hosted.inled.es/moodlenotifier.png',
    platform: ['Chrome', 'Edge'],
    shortDescription: 'Estate al día de las novedades de tu Moodle.',
    description: `# Moodle Notifier

Extensión de Chrome que te notifica sobre las actividades pendientes en tu plataforma Moodle.

## Características

- **Popup automático al iniciar Chrome** con tus tareas pendientes
- **Notificación sonora** cuando hay tareas pendientes o se cumple un recordatorio
- Verificación periódica de tareas pendientes cada 5 minutos
- Acceso directo a las actividades desde el popup
- **Posponer tareas por 20 minutos** con temporizador visual en tiempo real
- **Marcar actividades como vistas** para ocultarlas de la lista principal
- **Ver todas las tareas** (incluidas las marcadas como vistas) con opción de desmarcarlas
- **Menú hamburguesa** con acceso rápido a todas las funciones
- Autenticación segura usando la API oficial de Moodle
- Interfaz intuitiva para gestionar tus tareas

## Requisitos

- Google Chrome o navegador basado en Chromium
- Cuenta en una plataforma Moodle
- La plataforma Moodle debe tener habilitado el servicio web "moodle_mobile_app"

## Instalación


### 1. Cargar la extensión en Chrome

1. Abre Chrome y ve a chrome://extensions/
2. Activa el "Modo de desarrollador" en la esquina superior derecha
3. Haz clic en "Cargar extensión sin empaquetar"
4. Selecciona la carpeta moodlenotifier

## Configuración

1. Haz clic en el icono de la extensión en la barra de herramientas de Chrome
2. Introduce la configuración de tu Moodle:
   - **URL de Moodle**: La dirección de tu plataforma (ej: https://moodle.example.com)
   - **Usuario**: Tu nombre de usuario de Moodle
   - **Contraseña**: Tu contraseña de Moodle
3. Haz clic en "Guardar Configuración"

La extensión guardará tus credenciales de forma segura y obtendrá un token de acceso a la API de Moodle.

## Uso

### Inicio automático

- **Al abrir Chrome**, la extensión mostrará automáticamente el popup con tus tareas pendientes
- Si hay tareas, se reproducirá el sonido de notificación sound.mp3)
- El popup se abrirá en una ventana emergente para que no interrumpa tu flujo de trabajo

### Verificación periódica

- Cada 5 minutos, la extensión verificará si hay nuevas tareas
- Si detecta tareas nuevas o pendientes, abrirá el popup y reproducirá el sonido

### Menú hamburguesa

Haz clic en el icono de hamburguesa (☰) en la parte superior derecha del popup para acceder a:

- **🔄 Actualizar Tareas**: Obtiene las últimas tareas desde Moodle
- **📋 Ver Todas las Tareas**: Muestra todas las tareas, incluidas las marcadas como vistas
- **⚙️ Cambiar Configuración**: Permite modificar la URL de Moodle y credenciales

### Gestionar tareas pendientes

Desde la vista principal de tareas pendientes, cada tarea tiene tres botones:

1. **Abrir** (verde): Abre la actividad directamente en Moodle en una nueva pestaña
2. **Posponer 20min** (amarillo): Pospone la notificación por 20 minutos
   - El botón se deshabilita y muestra la hora exacta del próximo aviso
   - Se muestra un temporizador en tiempo real (ej: "19m 45s")
   - Cuando se cumplen los 20 minutos, se abre el popup y se reproduce el sonido
3. **Marcar visto** (rojo): Marca la tarea como vista y la oculta de la lista principal

### Ver todas las tareas

1. Haz clic en **📋 Ver Todas las Tareas** en el menú hamburguesa
2. Verás todas las tareas, incluidas las marcadas como vistas (aparecen con opacidad reducida)
3. Las tareas marcadas como vistas tienen un botón **Desmarcar** para restaurarlas a la lista principal
4. Haz clic en **Volver a Pendientes** para regresar a la vista principal

## Sistema de Actualizaciones Automáticas

La extensión incluye un sistema de actualización automática que verifica periódicamente si hay nuevas versiones disponibles.

### Cómo funciona

1. **Verificación automática**: La extensión verifica actualizaciones cada 1 hora
2. **Al iniciar Chrome**: También verifica al abrir el navegador
3. **Notificación visual**: Si hay una actualización, verás un banner naranja en la parte superior del popup
4. **Descarga fácil**: Haz clic en "Descargar Actualización" para obtener la nueva versión

### Banner de actualización

Cuando hay una actualización disponible:
- Aparecerá un banner naranja en la parte superior con el mensaje: "¡Actualización disponible!"
- Muestra el número de versión disponible
- Incluye un botón para descargar directamente
- Puedes cerrar el banner con la X (volverá a aparecer después de 6 horas)



## Seguridad

- Las credenciales se almacenan localmente en tu navegador
- Se utiliza la API oficial de Moodle para autenticación
- No se comparten datos con terceros
- El token de acceso se genera usando el servicio oficial de Moodle
- Las actualizaciones se verifican desde un servidor seguro (HTTPS)

## Verificar que tu Moodle tiene la API habilitada

1. Accede a tu plataforma Moodle
2. Prueba esta URL (cambia moodle.example.com por tu URL):
   
   https://moodle.example.com/login/token.php?username=TU_USUARIO&password=TU_CONTRASEÑA&service=moodle_mobile_app
   
3. Si devuelve un token JSON, la API está habilitada
4. Si recibes un error, contacta al administrador de tu plataforma Moodle

## Solución de problemas

### No se obtiene el token

- Verifica que la URL de Moodle sea correcta (sin / al final)
- Comprueba que tu usuario y contraseña sean correctos
- Asegúrate de que la plataforma Moodle tenga habilitado el servicio web

### No aparecen tareas

- Verifica que tengas tareas asignadas con fecha de entrega futura
- Haz clic en "Actualizar Tareas" en el popup
- Revisa la consola de Chrome para ver posibles errores

### Las notificaciones no aparecen

- Asegúrate de haber dado permisos de notificación a Chrome
- Verifica que la extensión esté activa en chrome://extensions/

## Tecnologías utilizadas

- Manifest V3 (última versión de extensiones de Chrome)
- API Web de Moodle
- Chrome Storage API
- Chrome Notifications API
- Chrome Alarms API

## Licencia

GNU GPLv3.0`,
    screenshots: [
      'https://hosted.inled.es/moodlenotifier-screenshot1.png'
    ],
    video: '',
    downloads: {
      github: 'https://github.com/InledGroup/moodlenotifier/archive/refs/heads/main.zip',
      sourceforge: '',
      sourceCode: 'https://github.com/InledGroup/moodlenotifier'
    }
  },
];


