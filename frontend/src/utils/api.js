// API Base URL
const API_URL = 'http://localhost:5000/api';

// Helper function to get auth token
const getAuthToken = () => {
  return localStorage.getItem('token');
};

// Helper function to make authenticated requests
const authFetch = async (url, options = {}) => {
  const token = getAuthToken();
  
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
      ...options.headers,
    },
    credentials: 'include',
  };

  const response = await fetch(`${API_URL}${url}`, config);
  const data = await response.json();
  
  return data;
};

// Auth APIs
export const authAPI = {
  register: async (userData) => {
    return authFetch('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  login: async (credentials) => {
    return authFetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  logout: async () => {
    return authFetch('/auth/logout', {
      method: 'POST',
    });
  },

  getProfile: async () => {
    return authFetch('/auth/profile');
  },

  changePassword: async (passwords) => {
    return authFetch('/auth/change-password', {
      method: 'POST',
      body: JSON.stringify(passwords),
    });
  },
};

// Products APIs
export const productsAPI = {
  getAll: async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();
    return authFetch(`/products${queryParams ? `?${queryParams}` : ''}`);
  },

  getById: async (id) => {
    return authFetch(`/products/${id}`);
  },

  create: async (productData) => {
    return authFetch('/products', {
      method: 'POST',
      body: JSON.stringify(productData),
    });
  },

  update: async (id, productData) => {
    return authFetch(`/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(productData),
    });
  },

  delete: async (id) => {
    return authFetch(`/products/${id}`, {
      method: 'DELETE',
    });
  },

  getByCategory: async (category) => {
    return authFetch(`/products/category/${category}`);
  },
};

// Rentals APIs
export const rentalsAPI = {
  getAll: async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();
    return authFetch(`/rentals${queryParams ? `?${queryParams}` : ''}`);
  },

  getById: async (id) => {
    return authFetch(`/rentals/${id}`);
  },

  getMyRentals: async () => {
    return authFetch('/rentals/my-rentals');
  },

  create: async (rentalData) => {
    return authFetch('/rentals', {
      method: 'POST',
      body: JSON.stringify(rentalData),
    });
  },

  update: async (id, rentalData) => {
    return authFetch(`/rentals/${id}`, {
      method: 'PUT',
      body: JSON.stringify(rentalData),
    });
  },

  delete: async (id) => {
    return authFetch(`/rentals/${id}`, {
      method: 'DELETE',
    });
  },
};

// Professionals APIs
export const professionalsAPI = {
  getAll: async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();
    return authFetch(`/professionals${queryParams ? `?${queryParams}` : ''}`);
  },

  getById: async (id) => {
    return authFetch(`/professionals/${id}`);
  },

  getByExpertise: async (expertise) => {
    return authFetch(`/professionals/expertise/${expertise}`);
  },

  create: async (professionalData) => {
    return authFetch('/professionals', {
      method: 'POST',
      body: JSON.stringify(professionalData),
    });
  },

  update: async (id, professionalData) => {
    return authFetch(`/professionals/${id}`, {
      method: 'PUT',
      body: JSON.stringify(professionalData),
    });
  },

  delete: async (id) => {
    return authFetch(`/professionals/${id}`, {
      method: 'DELETE',
    });
  },
};

// Orders APIs
export const ordersAPI = {
  getAll: async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();
    return authFetch(`/orders${queryParams ? `?${queryParams}` : ''}`);
  },

  getById: async (id) => {
    return authFetch(`/orders/${id}`);
  },

  getMyOrders: async () => {
    return authFetch('/orders/my-orders');
  },

  create: async (orderData) => {
    return authFetch('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });
  },

  update: async (id, orderData) => {
    return authFetch(`/orders/${id}`, {
      method: 'PUT',
      body: JSON.stringify(orderData),
    });
  },

  cancel: async (id) => {
    return authFetch(`/orders/${id}/cancel`, {
      method: 'PUT',
    });
  },

  delete: async (id) => {
    return authFetch(`/orders/${id}`, {
      method: 'DELETE',
    });
  },
};

export default {
  auth: authAPI,
  products: productsAPI,
  rentals: rentalsAPI,
  professionals: professionalsAPI,
  orders: ordersAPI,
};
