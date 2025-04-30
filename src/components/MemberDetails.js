import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MemberDetailsPage = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    const fetchMemberDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/members/${id}`);
        setMember(res.data);
      } catch (error) {
        console.error('Error fetching member details:', error);
      }
    };

    fetchMemberDetails();
  }, [id]);

  if (!member) return <div>Loading...</div>;

  return (
    <div className="member-details-page">
      <h2>{member.name}</h2>
      <img src={`http://localhost:5000/uploads/${member.image}`} alt={member.name} />
      <p>Roll Number: {member.rollNumber}</p>
      <p>Project: {member.project}</p>
      <p>Certificate: {member.certificate}</p>
      <p>Internship: {member.internship}</p>
      <p>About Your Aim: {member.aboutAim}</p>
      <p>Hobbies: {member.hobbies}</p>
    </div>
  );
};

export default MemberDetailsPage;
