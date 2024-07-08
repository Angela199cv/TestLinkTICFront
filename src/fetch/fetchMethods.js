/**
 * @param {string | URL | Request} url
 * @param {any} data
 */
export async function createResource(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    return await response.json();
  }
  
  /**
 * @param {any} endpoint
 * @param {any} id
 * @param {any} data
 */
  export async function updateRecord(endpoint, id, data) {
    const response = await fetch(`${endpoint}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return  response.json();
  }
  
  /**
 * @param {any} endpoint
 * @param {any} id
 */
  export async function deleteRecord(endpoint, id) {
    const response = await fetch(`${endpoint}/${id}`, {
      method: 'DELETE',
    });
    return  response.json();
  }

    /**
 * @param {any} endpoint
 * @param {any} id
 */
    export async function getResource(endpoint, id) {
        const response = await fetch(`${endpoint}/${id}`, {
          method: 'GET',
        });
        return response.json();
      }

          /**
 * @param {any} endpoint
 */
    export async function getResources(endpoint) {
        const response = await fetch(`${endpoint}`, {
          method: 'GET',
        });
        return  response.json();
      }
  