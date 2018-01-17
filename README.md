**Prismic-vue**
===============

Prismic-vue es una librería para Vue.js que facilita la conexión con __Prismic.io__ e interacción con algunos elementos que este nos provee, como lo son: Date, embed, image, keytext, link, richtext y title.

Instalación
-----------
```bash
npm install @pixela/prismic-vue
```
Uso
---
La librería posee los siguientes módulos:

* Conexión con la api
 * CMS
* Componentes de Vue
 * CmsDate
 * CmsEmbed
 * CmsImage
 * CmsKeyText
 * CmsLink
 * CmsRichText
 * CmsTitle

Ejemplo:

Importar un único módulo
```javascript
import { CMS } from '@pixela/prismic-vue'; //Importa la modulo que facilita la conexión con Prismic
```
Importar varios módulos a la vez
```javascript
import { CMS, CmsDate, CmsEmbed } from '@pixela/prismic-vue'; //Además de la conexión se importan los modulos de creación de componentes de Vue.js
```

### Conexión con la api de Prismic.io
#### Importar la librería
```javascript
import { CMS } from '@pixela/prismic-vue';
```

#### Funciones de la librería
##### Constructor
Para poder instanciar un objeto de esta clase se deberá pasar como parámetro el endpoint proveido por Prismic, este parámetro deberá de ser una cadena.

Ejemplo:
```javascript
const cms = new CMS('https://my-site.prismic.io/api/v2');
```
##### setEndpoint
Ese método es utilizado para cambiar el endpoint que se está utilizando. El parámetro que recibe este método, al igual que el constructor, es una cadena.

Ejemplo:
```javascript
cms.setEndpoint('https://my-new-site.prismic.io/api/v2');
```
##### getEndpoint
Este método retorna una cadena con el endpoint que se está utilizando.

Ejemplo:
```javascript
cms.getEndpoint(); //https://my-new-site.prismic.io/api/v2
```
##### page
Page es un método que recibe dos parámetros __page__ y __params__, el parámetro que siempre es utilizando es __page__, el cual es una cadena con el nombre de la página (Type en Prismic) del cual se desean obtener los datos.

Esto al ser una llamada asincrona deberá de ser ejecutada dentro de la función __asyncData()__ de Vue.js
Ejemplo:
```javascript
cms.page('home').then(function(document) {
  return { document } ; //document es quien contiene la información de la página.
});
```
>Usualmente el contenido se encuentra en document.data y para acceder a un elemento especifico de una página de prismic es document.data['Nombre_elemento'], esto último se le puede pasar perfectamente a cada módulo que devuelve un componente de Vue

### Componentes de Vue
Todos los modulos que nos permite la interacción con los elementos de Prismic devuelven un componente de Vue. En todos los casos se debe pasar la propiedad __:content="elementoDePrismic"__. Más adelante se amplia la forma de mandar esta propiedad dependiendo de cual es el elemento de Prismic del cual deseamos obtener su componente de Vue.

Independientemente de cual sea el módulo que se desea usar, todos estos componentes luego de haberlos importado se deben registrar en la sección __components__ de Vue. Por ejemplo:
```javascript
components: {
  CmsDate,
  CmsEmbed
}
```

La forma de utilizarlos es de la siguiente manera:
```html
<cms-date :content="my-date-content" :format="DD MM YYYY"></cms-date>
<cms-embed :content="my-embed-content"></cms-embed>

```

#### CmsDate
La propiedad __:content__ que se debe pasar este componente debe de ser una cadena, usualmente esta cadena es proveída por Prismic. Este módulo tambien funciona para el elemento de **TimeStamp** de Prismic.

Opcionalmente se puede pasar la propiedad __:format__ que también es una cadena, la cual nos permite pasar el formato de como es que queremos que las fechas y el tiempo sean devueltas. Los formatos soportados son los mismos que los de [Moment.js](https://momentjs.com/)

Este módulo devuelve un componente con la etiqueta __span__

Ejemplo:
```html
<!-- document.data['date'] contiene 2018-01-26 -->
<cms-date :content="document.data['date']" :format="'DD MM YYYY'"></cms-date>

Devuelve
<span>26 01 2018</span>
```
#### CmsEmbed
Este módulo devuelve un elemento __iframe__. Tiene soporte para Youtube, Vimeo y Spotify. Este recibe tres propiedades:
* __:content__ Se debe pasar un objeto, este objeto usualmente es proveido por Prismic. Esta propiedad es obligatoria.
* __:options__ Son las propiedades extra que deseamos en el iframe que se nos devuelve. Por ejemplo width y height.
* __:spotify_options__ Son opciones que se usaran únicamente si el elemento embed que se ha pasado es uno de Spotify
  * Ver la sección "Available parameters" de este [enlace](https://developer.spotify.com/technologies/widgets/spotify-play-button/)

Ejemplo:
```html
<!-- document.data['embed'] contiene un objeto devuelto por Prismic de un elemento embed que hace referencia a Vimeo -->
<cms-embed :content="document.data['embed']" :options="{width: 480, height: 360}"></cms-embed>

Devuelve
<iframe height="360" src="https://player.vimeo.com/video/215499107" width="480"></iframe>
```
