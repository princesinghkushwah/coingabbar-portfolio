import { client } from "../axios";

const { createContext, useState, useContext } = require("react");

const AxiosContext = createContext();

export const AxiosProvider = ({ children }) => {
  const [getDatas, setGetDatas] = useState([]);

  const getData = async (endPoint, header) => {
    try {
      let response = await client.get(endPoint, header);
      setGetDatas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const postData = async (endPoint, header, body) => {
    try {
      let response = await client.post(endPoint, { header, body });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (endPoint, id, header) => {
    try {
      const response = await client.delete(`${endPoint}${id}`, { header });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const putData = async (endPoint, id, header, body) => {
    try {
      const response = await client.put(`${endPoint}${id}`, { header, body });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AxiosContext.Provider
      value={{ getData, getDatas, postData, deleteData, putData }}
    >
      {children}
    </AxiosContext.Provider>
  );
};

export const useAxios = () => useContext(AxiosContext);
