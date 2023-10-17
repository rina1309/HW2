import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUserOneInfo } from "../redux/actions";

function User({ userInfo }) {
  const dispatch = useDispatch();
  const [additionalData, setAdditionalData] = useState(null);

  const getOneUser = (userId) => {
    dispatch(fetchUserOneInfo(userId));
  };

  const displayAdditionalData = (data) => {
    setAdditionalData(data);
  };

  return (
    <ul>
      <li>name: {userInfo.name}</li>
      <li>email: {userInfo.email}</li>
      {additionalData && (
        <li>
          Additional Info:
          <ul>
            <li>Address: {additionalData.address.street}, {additionalData.address.suite}, {additionalData.address.city}, {additionalData.address.zipcode}</li>
            <li>Company: {additionalData.company.name}</li>
            <li>Email: {additionalData.email}</li>
            <li>Phone: {additionalData.phone}</li>
            <li>Username: {additionalData.username}</li>
            <li>Website: {additionalData.website}</li>
          </ul>
        </li>
      )}
      <button value={userInfo.id} onClick={() => {getOneUser(userInfo.id);displayAdditionalData(userInfo);}}>get more</button>
    </ul>
  );
}

export default User;



