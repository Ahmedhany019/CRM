import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import CustomerDetailsForm from "../../components/customerDetailsForm";

function CustomerDetail() {
  const { id } = useParams();
  const [customer, setCustomer] = React.useState({});
  const fetchCustomer = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/customers/${id}`
      );
      setCustomer(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCustomer();
  }, []);
  return (
    <div className="flex">
      <CustomerDetailsForm customer={customer} />
      {/* <div className='w-[417px]'>

        </div> */}
    </div>
  );
}

export default CustomerDetail;
