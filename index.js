import * as Prismic from 'prismic-javascript';

export class CMS {
  constructor(endpoint) {
     this.prismicEndpoint = endpoint;
  }

  getApi() {
    return Prismic.getApi(this.prismicEndpoint);
  }

  fetch(query) {
    return this.getApi()
      .then(function(api) {
        return api.query(query);
      })
  }

  page(page, params) {
    return this.getApi().then(function(api) {
      return api.getSingle(page, params);
    })
  }

  fetchByType(type) {
    return this.getApi().then(function(api) {
        return api.query( Prismic.Predicates.at('document.type', type), {});
      })
  }
}
