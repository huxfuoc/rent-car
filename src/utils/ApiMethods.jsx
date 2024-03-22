class ApiMethods {
    static apiRequest(method, url, body = {}) {
        let fetchOptions = {
            method,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        if (method !== 'GET') {
            fetchOptions.body = JSON.stringify(body);
        }

        return fetch(url, fetchOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            });
    }

    static get(url) {
        return this.apiRequest('GET', url);
    }

    static post(url, data) {
        return this.apiRequest('POST', url, data);
    }

    static put(url, data) {
        return this.apiRequest('PUT', url, data);
    }

    static delete(url) {
        return this.apiRequest('DELETE', url);
    }
}

export default ApiMethods;


