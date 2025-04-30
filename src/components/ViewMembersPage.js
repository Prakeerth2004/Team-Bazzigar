import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewMembersPage = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/members');
        setMembers(res.data);
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div className="view-members-page">
      <h2>Meet Our Amazing Team</h2>
      <div className="members-list">
        {members.map((member) => (
          <div className="member-card" key={member._id}>
            <img src={`http://localhost:5000/uploads/${member.image}`} alt={member.name} />
            <h3>{member.name}</h3>
            <p>Roll Number: {member.rollNumber}</p>
            <Link to={`/member/${member._id}`} className="btn">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewMembersPage;
