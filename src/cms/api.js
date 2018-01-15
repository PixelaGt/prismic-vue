import * as Prismic from 'prismic-javascript';

export class CMS {
  constructor(endpoint) {
    if(!CMS.instance){
      this.prismicEndpoint = endpoint;
      CMS.instance = this;
    }
    return CMS.instance;
  }

  setEndpoint(newEndpoint) {
    this.prismicEndpoint = newEndpoint;
  }

  getEndpoint() {
    return this.prismicEndpoint;
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
};
