# **Prismic-vue**
Prismic-vue es una librería para Vue.js que facilita la conexión con prismic.io. Esta librería también provee componentes que son creados a partir de los datos recibidos desde prismic.io

## Conexión con Prismic.io
El nombre de la clase proveída es __"CMS"__.
### Importar la librería

### Funciones de la librería
#### Constructor
Para poder instanciar un objeto de esta clase se deberá pasar como parámetro el endpoint proveido por Prismic, este parámetro deberá de ser una cadena.

Ejemplo:
```javascript
var cms = new CMS('https://my-site.prismic.io/api/v2');
```
#### setEndpoint
Ese método es utilizado para cambiar el endpoint que se está utilizando. El parámetro que recibe este método, al igual que el constructor, recibe una cadena.

Ejemplo:
```javascript
cms.setEndpoint('https://my-new-site.prismic.io/api/v2');
```
#### getEndpoint
Este método retorna una cadena con el endpoint que se está utilizando.

Ejemplo:
```javascript
cms.getEndpoint(); //https://my-new-site.prismic.io/api/v2
```
#### page
Page es un método que recibe dos parámetros __page__ y __params__, el parámetro que siempre es utilizando es __page__, el cual es una cadena con el nombre de la página (Type en Prismic) del cual se desean obtener los datos.

Esto al ser una llamada asincrona deberá de ser ejecutada dentro de la función __asyncData()__ de Vue.js
Ejemplo:
```javascript
cms.page('home').then(function(document) {
  return document; //document es quien contiene la información de la página.
});
```

## Componentes
