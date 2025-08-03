import { useState } from 'react';
import api from './Utils/api';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('📤 Form submitting:', form); // Add this
  try {
    const res = await api.post('/auth/signup', {
      ...form,
      email: form.email.trim().toLowerCase(),
      name: form.name.trim()
    });
    localStorage.setItem('token', res.data.token);
    navigate('/');
  } catch (err) {
    alert(err.response?.data?.msg || 'Signup failed');
  }
};


  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4">Create an Account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input className="form-control" required onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input className="form-control" type="email" required onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input className="form-control" type="password" required onChange={(e) => setForm({ ...form, password: e.target.value })} />
          </div>
          <button className="btn btn-primary w-100">Sign Up</button>
        </form>
        <div className="mt-3 text-center">
          <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
      </div>
    </div>
  );
}
