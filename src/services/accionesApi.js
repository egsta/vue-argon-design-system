import axios from 'axios';


export const getElements = async (url) => {
  let resultado = {};
  try {
    await axios
      .get(url)
      .then((res) => {
        resultado = res.data;
      })
      .catch((error) => {
        if (error.response) {
          resultado = error.response.data;
        } else if (error.request) {
          resultado = { success: false, message: 'Error en el proceso' };
        } else {
          resultado = { success: false, message: 'Error en el proceso' };
        }
      });
  } catch (err) {
    resultado = { success: false, message: err.message };
  }
  return resultado;
};

export const filtrarElements = async (url, key, value) => {
  let resultado = {};
  try {
    await axios
      .get(`${url}${key}/${value}`)
      .then((res) => {
        resultado = res.data;
      })
      .catch((error) => {
        if (error.response) {
          resultado = error.response.data;
        } else if (error.request) {
          resultado = { success: false, message: 'Error en el proceso' };
        } else {
          resultado = { success: false, message: 'Error en el proceso' };
        }
      });
  } catch (err) {
    resultado = { success: false, message: err.message };
  }
  return resultado;
};

export const addElements = async (url, data) => {
  let resultado = {};
 
  console.log("DATA -> ", data)
  try {
    await axios
      .post(url, data)
      .then((res) => {
        resultado = res.data;
      })
      .catch((error) => {
        if (error.response) {
          resultado = error.response.data;
        } else if (error.request) {
          resultado = { success: false, message: 'Error en el proceso' };
        } else {
          resultado = { success: false, message: 'Error en el proceso' };
        }
      });
  } catch (err) {
    resultado = { success: false, message: err.message };
  }
  return resultado;
};

export const updateElement = async (url, data) => {
  let resultado = {};
  try {
    await axios
      .put(`${url}${data.id}`, data)
      .then((res) => {
        resultado = res.data;
      })
      .catch((error) => {
        if (error.response) {
          resultado = error.response.data;
        } else if (error.request) {
          resultado = { success: false, message: 'Error en el proceso' };
        } else {
          resultado = { success: false, message: 'Error en el proceso' };
        }
      });
  } catch (err) {
    resultado = { success: false, message: err.message };
  }
  return resultado;
};

export const removeElement = async (url, id) => {
  let resultado = {};
  try {
    await axios
      .delete(`${url}${id}`)
      .then((res) => {
        resultado = res.data;
      })
      .catch((error) => {
        if (error.response) {
          resultado = error.response.data;
        } else if (error.request) {
          resultado = { success: false, message: 'Error en el proceso' };
        } else {
          resultado = { success: false, message: 'Error en el proceso' };
        }
      });
  } catch (err) {
    resultado = { success: false, message: err.message };
  }
  return resultado;
};

export const countElements = async (url) => {
  let resultado = {};
  try {
    await axios
      .get(url)
      .then((res) => {
        resultado = res.data;
      })
      .catch((error) => {
        if (error.response) {
          resultado = error.response.data;
        } else if (error.request) {
          resultado = { success: false, message: 'Error en el proceso' };
        } else {
          resultado = { success: false, message: 'Error en el proceso' };
        }
      });
  } catch (err) {
    resultado = { success: false, message: err.message };
  }
  return resultado;
};

export const setData = async (url, data) => {
  let resultado = {};
 
  console.log("DATA -> ", data)
  try {
    await axios
      .post(url, data)
      .then((res) => {
        resultado = res.data;
      })
      .catch((error) => {
        if (error.response) {
          resultado = error.response.data;
        } else if (error.request) {
          resultado = { success: false, message: 'Error en el proceso' };
        } else {
          resultado = { success: false, message: 'Error en el proceso' };
        }
      });
  } catch (err) {
    resultado = { success: false, message: err.message };
  }
  return resultado;
};

export const averageElements = async (url) => {
  let resultado = {};
  try {
    await axios
      .get(url)
      .then((res) => {
        resultado = res.data;
      })
      .catch((error) => {
        if (error.response) {
          resultado = error.response.data;
        } else if (error.request) {
          resultado = { success: false, message: 'Error en el proceso' };
        } else {
          resultado = { success: false, message: 'Error en el proceso' };
        }
      });
  } catch (err) {
    resultado = { success: false, message: err.message };
  }
  return resultado;
};
