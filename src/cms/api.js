import * as Prismic from 'prismic-javascript';

class CMS {
  constructor(endpoint) {
    if (!CMS.instance) {
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
      .then(api => api.query(query));
  }

  page(page, params) {
    return this.getApi().then(api => api.getSingle(page, params));
  }

  fetchByType(type) {
    return this.getApi().then(api => api.query(Prismic.Predicates.at('document.type', type)));
  }

  getByUID(pageType, uid) {
    return this.getApi().then(api => api.getByUID(pageType, uid));
  }
}

export default CMS;
