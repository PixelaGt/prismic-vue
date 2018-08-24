import * as Prismic from 'prismic-javascript';

class CMS {
  constructor(endpoint) {
    if (!CMS.instance) {
      this.prototype.prismicEndpoint = endpoint;
      CMS.instance = this;
    }
    return CMS.instance;
  }

  setEndpoint(newEndpoint) {
    this.prototype.prismicEndpoint = newEndpoint;
  }

  getEndpoint() {
    return this.prototype.prismicEndpoint;
  }

  getApi() {
    return Prismic.getApi(this.prototype.prismicEndpoint);
  }

  fetch(query, options = {}) {
    return this.getApi()
      .then(api => api.query({
        ...query,
        ...options,
      }));
  }

  page(page, params) {
    return this.getApi().then(api => api.getSingle(page, params));
  }

  fetchByType(type, options = {}) {
    return this.getApi().then(api =>
      api.query(Prismic.Predicates.at('document.type', type), options));
  }

  getByUID(pageType, uid, options = {}) {
    return this.getApi().then(api => api.getByUID(pageType, uid, options));
  }
}

export default CMS;
