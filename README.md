# *Social Media*

Diabetips es una red social para mujeres diabéticas que busca crear una red de apoyo en la cual sea posible compartir sentimientos y consejos en torno a la diabetes.

![data-dashboard](https://github.com/YocelinGR/YocelinGR.github.io/blob/master/assets/diabetipsapp.png?raw=true)

###  Desarrollado para [Laboratoria](http://laboratoria.la)

##  __DiabeTips__

### Documentación y desarrollo
________________________________________

*1. Definición de objetivos y estrategia*

En esta sección se definirán los resultados que busca el cliente, se propondrán las diferentes opciones que podrían ayudar a conseguir los objetivos y se buscará llegar a un acuerdo con el cliente, para ello es importante definir estrategias que definirán si se desarrollará un blog, sitio brochure, si interactúa con el usuario, etc.

* Objetivos del cliente: El cliente busca proyectos de emprendimiento para invertir que abarque cualquiera de los siguientes rubros:

  * Alimentación
  * Feminismo
  * Educación
  * Salud
  * Energías Renovables

El cliente busca una opción nueva, útil y que sea redituable y escalable. Es por eso, que se ofrece una aplicación para mujeres diabéticas (sector poblacional amplio y no atendido en México) con aras de poder monetizar vía cobro a los usuarios al compartir su perfil con su médico, por medio de alianzas con grupos farmacéuticos a los cuales se cobrará por promocionar sus productos y con los cuales se harán alianzas para ofrecer premios por retos que se lancen a la red social. Atendiendo a la propuesta del cliente, se incluirán retos grupales para poder hacer los retos más atractivos.

Como propuesta a largo plazo, se busca ofrecer la data recolectada al gobierno (sector salud y económico) para que puedan tener métricas reales y actualizadas para poder tomar acciones reales y continuas en contra de la enfermedad.  

* Objetivo de usuario: Las usuarias busca una red social para personas diabéticas que la ayude a mejorar su calidad de vida. Quiere poder compartir sus síntomas y recibir recomendaciones sobre ellas. Busca compartir su perfil con su médico. Recibir y dar recomendaciones diversas sobre su enfermedad y compartir su día a día con la comunidad.

* Objetivos técnicos:

  * Aprender a usar y manipular Firebase: DataBase, Local Storage, Autentification, etc.
  * Perfeccionar uso de DOM.
  * Buen manejo de DATA.
  * Diseño Mobile First.
  * Persistencia de datos.
  * Uso de Frameworks de JS.
  * Múltiples vistas.
  * Creación de test.
  * User Research: Benchmark, entrevistas, prototipos de vistas y testing con usuarios.
  * Evocar los esfuerzos a aportar valor para el usuario.

* 2. Desarrollo de contenidos*

El apartado debe definir el contenido del sitio, listar las páginas que es relevante tener, detallando información sobre su contenido, además es necesario redactar los textos para mostrarse.

*3. Propuesta de diseño*

USER RESEARCH: Se realizó un estudio demográfico sobre la cantidad de diabéticos en México, se determinaron algunas causas que justifican cifras tan alarmantes, y el por qué las medidas que toma el sector salud no están funcionando de la manera más eficiente posible. Además se incluyen datos específicos sobre la diabetes en mujeres.

Para consultar el documento completo, diríjase a:

see [Datos Demográficos] (https://docs.google.com/document/d/13jH3NyYmgFADmTpGEDxUVN7F2JLWEfQiwQ43yqM5xqw/edit#heading=h.t5gquk95zrh2)

Además, se realizó un benchmark sobre la competencia, y se pudo llegar a la conclusión que, en primer lugar, no existen aplicaciones evocadas a la salud de la mujer con diabetes, aun y pese a que es la principal causa de muerte en mujeres en México.

También se puede aseverar, que son nulas las posibilidades de encontrar una comunidad al unirse a los servicios de alguna aplicación existente. Las aplicaciones no cuentan con información o consejos de cuidad, se limitan al monitoreo de los pacientes, siendo pocas las aplicaciones que te permiten compartirlo con tu médico. El bencmark también dio pie a evocar los esfuerzos del equipo a trabajar en el Mobile First, ya que ninguna aplicación está diseñada para desktop.

Es posible ver en benchmark en la siguiente liga.

See [Benchmark]( https://docs.google.com/spreadsheets/d/1DH9sAcvOOLxwX8eb6oA_ime4SqQFxYf9KimJ_3eOV6E/edit#gid=1416652031)


BOCETOS: Es necesario presentar bocetos de la estructura de cada plantilla del sitio, realizar el diseño de mediana y alta fidelidad y finalmente presentar el diseño de la plataforma. Es propio presentar y testear las páginas, se sugiere el uso de invision para dar tour por cada pantalla en futuros proyectos.

    * Diseño de baja fidelidad  
    * Diseño de mediana fidelidad
    * Diseño de alta fidelidad
    * Diseño del sitio final

*4. Desarrollo y maquetación*

El desarrollo y maquetación del proyecto se realizó utilizando pequeños detalles de Bootstrap en su versión 4.0, la mayor parte del diseño se maqueto y desarrollo en Materialize versión 1.0.0-rc.2 por medio de su CDN, además se hace uso de estilos sencillos en CSS y se usan propiedades de la funcionalidad display (none y visibility) para cambiar de una vista a la otra.

*5. Dar revisión y capacitación*

Se da una asesoría al cliente sobre el uso y administración del sitio.

Se da explicación de uso de la página y donde se explican los detalles más importantes de la implementación. Se otorga un periodo de un mes al cliente para encontrar posibles fallas o dudas sobre el sistema, después de este periodo se podría requerir alguna gratificación por asesorías.

*6. Publicación en el servidor o URL definitiva*

Se entrega una liga en GitHub Pages y la liga del repositorio:

see [Repositorio] (https://github.com/SakuraBravo/cdmx-2018-06-bc-core-am-social-network)

see [GitHub Pages] (https://sakurabravo.github.io/cdmx-2018-06-bc-core-am-social-network/src/input.html)

*7. Documentación*

  * Tecnologías

Descripción de tecnologías, Frameworks, compiladores, gestores de tareas, librerías, su versión y cómo se usa.

   * Materialize y React Materialize: Uso por medio de CDN e intalacion desde npm. Uso para estructura en HTML y estilos para vista de autentificación, botones, menú desplegable y hamburguesa, para generar el Templete String de los cards y sus estilos, para el HTML de la lista de alumnas y su estilo, además para generar los modales y su estilo.

   * Unit Test con Jest: Herramienta para elaborar test unitarios en JavaScript, que destaca por su sencillez de uso, por su flexibilidad y por ser adaptable a nuevas librerías que incrementan su poder, es parte de Node.js. En el proyecto se usan los test unitarios como medio de comprobar que la calidad de ejecución de las funciones es buena, que cumple con los mínimos requerimientos y que devuelven solo la información necesaria.

   * Firebase: Según su propia definición, Firebase es un conjunto de herramientas orientadas a la creación de aplicaciones de alta calidad, al crecimiento de los usuarios y a ganar más dinero.

   * React: Uso como framework. 

La plataforma ofrece una suite de diferentes aplicaciones que nos harán más fácil el desarrollo de las aplicaciones. Ofrece: Base de datos en tiempo real (datos en formato JSON), autenticación (gestión de usuarios y su inicio de sesión), almacenamiento (estático y dinámico), cloud Functions (transforma el código del backend en piezas del mismo –funciones- creadas en NodeJS, además genera un URL que ejecuta el código pertinente). Laboratrio de Test para Android, Informe de fallos, Monitoreo de rendimiento, etc.  

Boilerplate - Estructura de los ficheros.

0.	./
1.	├── .package.json
2.	├── .eslintrc
3.	├── .gitignore
4.	├── README.md
5.	├── build
6.	├── node_modules
7.	├── public
8.	├── src


   * Layout
Disposición general de los bloques del sitio, sus módulos y los handles o hooks para llamarlos (rutas).

   * Autentificación: Basta con ir a la página del sitio para tener acceso a la vista de autentificación.

    * Home
    * Perfil del usuario
    * Login

Nombre de cada módulo, sus parámetros, peculiaridades, de dónde obtiene los datos y como se transforman.

•	JavaScript

Disposición de los ficheros, alcance, uso y herramientas de gestión, listar librerías y sus extensiones.

•	CSS

•	HTML

Ficheros -explicación de nombramiento

•	Getting started

Explicar y comentar los procesos, comandos y procedimientos para poner el proyecto en marcha, compilar, gestionar dependencias, etc.

•	Como usuario: Acceder a la URL de GitHub

Pages, autentificar usuario, recorrer el sitio para encontrar la información necesaria, el flujo de trabajo obliga al usuario a ir de arriba hacia abajo y de izquierda a derecha accediendo a información cada vez más profunda.

•	Como desarrollador y/o UXD:

Acceder a la liga del repositorio, forkear y clonar el repositorio, abrir el repositorio local haciendo uso de un editor (VisualStudioCode, Atom, etc.) y realizar las modificaciones necesarias en los archivos tomando como base la explicación sobre ficheros, archivos y funciones especificados antes, guardar los cambios y visualizarlos desde la liga local ejecutando los archivos con extensión HTML desde la carpeta del usuario, ver los cambios ejecutados y realizar debugging o inspección de la ejecución de los programas gracias a los elementos de Google/ Firefox for Developments a los que se tendrá acceso desde las herramientas de “inspeccionar” del sitio.

Por último, subir cambios desde Git (gitbash) al repositorio y realizar un pull request desde GitHub, esperar a que el dueño del repositorio master apruebe o rechace el commit.


Contacto:

•	Yocelin García

Habilidad de básicas en UX Research, además tiene excelentes capacidades para programar en CSS, HTML y JavaScript. Hace uso de GitHub colaborativo y presenta buena lógica de uso de Firebase.

Contacto:

 * Slack: YOCELIN GARCIA ROMERO
 * see [GitHub] (https://github.com/YocelinGR)
 * FaceBook: @Yocelin Garcia Romero
 * Correo: garcia_romero.y@hotmail.com

# DiabeTips UX
## Sketching de Diseño Ideal
Mobie first

![alt text](./src/images/general.jpg)

![alt text](./src/images/carruselinicio.jpg)

![alt text](./src/images/inicio.jpg)

![alt text](./src/images/inicio1.jpg)

![alt text](./src/images/registrousuario.jpg)

![alt text](./src/images/comentario.jpg)

![alt text](./src/images/feed.jpg)

## Benchmark (externo)
"DiabeTips"
Mejora tu calidad de vida y la de los demas.
Somos una comunidad de personas con diabetes que desean llevar una mejor calidad de vida-------

DiabeTips es una Red Social principalmente para mujeres con diabetes, dentro de ella podrán interactuar, compartir recetas saludables, crear eventos, puntuar a los mejores consejos y donar insumos para el cuidado de esta enfermedad.

Al registrarse en esta Red Social contaran con un perfil que tendra como datos principales Nombre, edad, Tipo de Diabetes que padecen, contacto y su ubicación.

## Principales competidores de "DiabeTips"

- Aplicaciones para el control de la Diabetes

En nuestra investigación encontramos a varios competidores, todos cuentan con la misma funcionalidad por ejemplo:

- Son un diario de control de los niveles de Glucosa
- Hacen recomendaciones de cuidados y dosis de insulina que deben de ingerir de acuerdo a la información obtenida
- Dan guías sobre las etapas de la Diabetes

Las aplicaciones que se encuentran actualmente mejor rankeadas son  Diabetes-Diario de Glucosa, Diabetes:M y My sugr: App diario de diabetes.


- Páginas y Grupos de Facebook

En este sector solo nos encontramos con la página de la Federación Mexicana de Diabetes, escasas páginas de fundaciones y grupos que van desde temas como dieta, compra-venta de insumos y diabetes gestacional.

En facebook nos dimos a la tarea de buscar eventos en la CDMX y nos encontramos con lo escasos que son incluso a nivel nacional, la mayoria estaban ubicados en el extranjero.

**Datos demograficos**

## Análisis y Mejoras con nuestra red social

- Nuestra comunidad será unicamente para personas con Diabetes y expertos en el tema (Médicos).
- Tendrán un perfil que será visible para la comunidad y los expertos.
- Dentro de su perfil podrán llevar un registro con sus síntomas y niveles de glucosa diarios.
- Podrán compartir el registro de su perfil con su doctor.
- Van a interactuar entre ellas, haciendo recomendaciones de alimentos, ejercicios, eventos de ayuda o prevención, donar insumos para su cuidado e incluso rankear a los mejores consejos.
- Cada mes lanzaremos un reto saludable.

## Análisis Argumentativo de la elección de la Red Social.

Se crea esta Red Social debido al indice de personas con diabetes que hay en México, en 2017 se contabilizó que el 15.8% de la población total padece de esta enfermedad siguiendo paises como Turquía con 12.8%, EU 10.8%, y Brasil 10.8%.

Como datos importantes encontramos que las personas con esta enfermedad tienen entre 20 y 79 años de edad, la Federación Mexicana de Diabetes evalua que hay 33 millones de adultos que tienen diabetes pero no han sido diagnosticados. México dobla el promedio de 7% que tienen los demás países de la Organización para la Cooperación y el Desarrollo Económicos (OCDE).

Actualmente nuestro país es el primer lugar en obesidad con el 33% de la población, mientras el limite es de 19%.

Nuestra Red Social busca concientizar a la población sobre el cuidado y tratamiento de la Diabetes a traves de apoyo comunitario ya que la mortandad en México esta directamente relacionada con la nutrición deficiente.

## Target, argumentación del proyecto (negocio y usuario)

"Diabetips" esta pensansado en mujeres de 20 a 45 años, ya que son mujeres en edad reproductiva y tienen mas riesgo de sufrir este padecimiento, incluso la Federación Internacional de Diabetes nos dice puede haber descenso de fertilidad, y mayor riesgo de complicaciones del embarazo (Diabetes Gestacional).

En México la diabetes es una enfermedad que ha alcanzado proporciones epidémicas y su impacto seguirá creciendo en las siguientes décadas, principalmente por el aumento de la obesidad, actualmente en nuestro país el 33% de la población total tiene obesidad, el problema no termina ahí, sino que deriva en enfermedades que de no tratarse a tiempo o correctamente pueden causar la muerte.

La tasa de nuevos casos de diabetes y fallecimientos asociados a esta enfermad aumentó en los últimos tres años, al pasar de 401 casos a 487 por cada 100 mil habitantes (informe realizado por 'Panorama de la Salud 2017" de la OCDE ).

En conclusión

* La principal víctima, estadísticamente, por este padecimiento son las mujeres. En la región americana, la diabetes afecta tanto a mujeres (8.6%) como a hombres (8,4%). Sin embargo, las mujeres (29.6%) presentan tasas más altas de obesidad que ellos (24%)

* La diabetes no es una sentencia de muerte, se puede vivir una larga vida, sin embargo obliga a las personas a adoptar hábitos más saludables pero con un costo elevado por los medicamentos, complicaciones y cambio de hábitos alimenticios.

* El Instituto Mexicano para la Competitividad (IMCO), señala que los costos sociales de la diabetes asociada al sobrepeso y la obesidad en el país ascienden a más de 85,000 millones de pesos al año.

## "Diabetips"

Esta red social creará una comunidad, en la que sus usuarias podrán interactuar y compartir habitos alimenticios, sus experiencias con esta enfermedad, comentarios de aliento y tips para tener una vida más saludable. Un plus para ellas es poder tener conectarse desde son su perfil de Facebook o correo de Gmail, incluso ellas podrán guardar un perfil con los datos que generalmente son solicitados por su médico a la hora de asistir a una consulta como son: edad, peso, nivel de glucosa, medicamentos de control, número de seguridad social y sus antecedentes familiares.

Es un hecho que tener este padecimiento significa gastar más, por lo que con esta Red social buscaremos descuentos y patrocinios con las empresas que estan dedicadas a la comercialización de medicamentos,  incluso en un futuro buscar hacer un convenio con empresas relacionadas a la distribución de alimentos, queremos incitar a nuestras usuarias a llevar una mejor alimentación para el control de su enfermedad.

Consultamos a expertos en el tema y coinciden en que las mujeres tienen más apertura a cambiar sus hábitos alimenticios, hacer actividad física y llevar un control de sus medicamentos a diferencia de los hombres que al enfrentarse a ciertas "restricciones" entran en negación.

Las mujeres en México tienen un rol muy fuerte, ellas son las líderes del hogar por lo que buscamos ayudar tanto a ellas con el control de su enfermedad y a sus familias promoviendo el cuidado de la salud para todos los integrantes, queremos que las usuarias sean embajadoras de los buenos hábitos no sólo para vivir bien con la enfermadad sino para prevenirla en quienes aún no la padecen.


## Historia de Usuario

Yo como mujer diabética de 27 años, trabajadora y dedicada a mi familia, quiero una aplicacón que me permita interactuar con más mujeres que padezcan esta enfermedad, quiero poder compartir mi sentir tanto físico como emocional, recibir consejos de personas que ya llevan tiempo cuidandose, conocer a historias de personas que a pesar de todo llevan una vida feliz, ir al doctor y saltarme esas preguntas que son repetitivas consulta tras consulta, quisiera poder tener un "perfil" que ya tenga todas esas respuestas para poder mostrarlo a mi doctor y hacer más rápido mi paso por el hospital. No quiero que mi familia sufra lo mismo, por lo que quisiera tener toda la información sobre complicaciones o forma de prevenir para hablar con ellos y hacer conciencia de lo que pasará sino se cuidan.

## Formularios aplicados

Durante nuestra investigacion aplicamos diferentes formularios a Expertos en el tema, Mujeres con Diabates y una encuesta para conocer un poco más sobre sus hábitos.

* Resultados de formulario para Expertos

https://docs.google.com/forms/d/1nP3k9PJ8N6f9j1hZzteiIWGFmATQu4fA9IOBdlN74KQ/edit?edit_requested=true#responses
- Son Enfermeros
- Cuentan con 4 años de experiencia en promedio
- El 75% son Mujeres
- Cuentan con dispositivo móvil y la red social que más revisan durante el día es Facebook
- En promedio el 50% de las personas que atienden por día son diabéticos y son mujeres
- Coinciden en que sus pacientes son de mentalidad cerrada ya que no siguen indicaciones ni cambian sus hábitos alimenticios
- Señalan que las mujeres están más al pendiente sobre el cuidado de su enfermedad
- Los pacientes que atienden tienen complicaciones en sus niveles de glucosa, no toman medicamentos y tienen obesidad.
- En caso de complicaciones un diabético gasta alrededor de $3,500.00 pesos mensuales.

* Diabetes en mujeres
https://docs.google.com/forms/d/1nP3k9PJ8N6f9j1hZzteiIWGFmATQu4fA9IOBdlN74KQ/edit?edit_requested=true#responses

* Vida con diabetes (Hábitos)
https://docs.google.com/forms/d/1-YOlKn4PHrXrH825d1zxUUpsnMJjXNXtVJqEWARr6z4/edit?edit_requested=true#responses
