import React, { useState } from 'react';
import axios from 'axios';

const AddMemberPage = () => {
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [year, setYear] = useState('');
  const [degree, setDegree] = useState('');
  const [project, setProject] = useState('');
  const [certificate, setCertificate] = useState('');
  const [internship, setInternship] = useState('');
  const [aboutAim, setAboutAim] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('rollNumber', rollNumber);
    formData.append('year', year);
    formData.append('degree', degree);
    formData.append('project', project);
    formData.append('certificate', certificate);
    formData.append('internship', internship);
    formData.append('aboutAim', aboutAim);
    formData.append('hobbies', hobbies);
    formData.append('image', image);

    try {
      await axios.post('http://localhost:5000/api/members', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Member added successfully');
    } catch (error) {
      console.error('Error adding member:', error);
    }
  };

  return (
    <div className="add-member-page">
      <h2>Add Team Member</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Roll Number" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} required />
        <input type="text" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} required />
        <input type="text" placeholder="Degree" value={degree} onChange={(e) => setDegree(e.target.value)} required />
        <input type="text" placeholder="About Project" value={project} onChange={(e) => setProject(e.target.value)} required />
        <input type="text" placeholder="Certificate" value={certificate} onChange={(e) => setCertificate(e.target.value)} />
        <input type="text" placeholder="Internship" value={internship} onChange={(e) => setInternship(e.target.value)} />
        <input type="text" placeholder="About Your Aim" value={aboutAim} onChange={(e) => setAboutAim(e.target.value)} />
        <input type="text" placeholder="Hobbies" value={hobbies} onChange={(e) => setHobbies(e.target.value)} />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddMemberPage;
