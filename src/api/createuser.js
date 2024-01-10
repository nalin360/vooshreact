const createUser = async (username , userPhoneNumber, password) => {
    const url = 'http://localhost:9000/api/add-user';
    const body = {
      name: username,
      phoneNumber: userPhoneNumber,
      password: password
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
  
      const data = await response.json();
      console.log(data);
      return data
    } catch (error) {
      console.error(error);
    }
  };
  
  export default createUser
  