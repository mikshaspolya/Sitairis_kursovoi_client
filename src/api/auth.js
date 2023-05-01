import axios from "axios";

const authUser = async (userData) => {
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
  
    const response = await axios.post(
      `http://localhost:8080/realms/kursovoiRealm/protocol/openid-connect/token`,
      userData,
      config
    );
    
    return response.data;
  };

  export default authUser;