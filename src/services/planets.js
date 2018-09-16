import client from '@/services/config/client.js';

export default {
  getPlanet(planetId) {
    return client.get(`/planets/${planetId}/`).then(response => {
      return response.data;
    });
  }
}