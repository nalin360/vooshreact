import React, { useState, useEffect } from 'react';

function Product() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('YOUR_API_ENDPOINT', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_id: '12345',
            sub_total: '100',
            phone_number: '1234567890',
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to create user');
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, []); // Run only once on component mount

  return (
    <div>
      <h1>Product Component</h1>
      {data ? (
        <div>
          <p>Status: {data.status}</p>
          <p>Success: {data.success.toString()}</p>
          <p>Message: {data.message}</p>
          <p>User ID: {data.user.user_id}</p>
          <p>Sub Total: {data.user.sub_total}</p>
          <p>Phone Number: {data.user.phone_number}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Product;
