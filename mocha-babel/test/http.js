
class Response {
  constructor(options) {
    this.headers = [];
    Object.assign(this, options);
  }
  setHeader(key, val) {
    this.headers[key] = val;
  }
  end() {
    console.log(this.end);
  }

}

class Request {
  constructor(options) {
    Object.assign(this, options);
  }
}

class HTTP {
  static getRequest(options) {
    return new Request(options);
  }
  static getResponse(options) {
    return new Response(options);
  }
}

module.exports = HTTP;
