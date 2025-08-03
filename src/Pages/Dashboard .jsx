import { useEffect, useState } from 'react';
import api from './Utils/api';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get('/auth/me');
        setUser(res.data);
      } catch (err) {
        navigate('/login');
      }
    };

    fetchUser();

    api.get('/donations/total')
      .then(res => setTotal(res.data.total))
      .catch(console.log);
  }, []);

  // ✅ Fix: Add logout function
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f2f2f2' }}>
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '500px' }}>
        <h3 className="text-center mb-3">🎉 Welcome, {user?.name}</h3>
        
        <div className="mb-3">
          <strong>Email:</strong> <span className="text-muted">{user?.email}</span>
        </div>
        <div className="mb-3">
          <p><strong>Referral Code:</strong> <span className="badge bg-secondary">{user?.referralCode}</span></p>
        </div>
        <div className="mb-3">
          <strong>Total Donations:</strong> <span className="text-success fw-bold">₹{total}</span>
        </div>

        <hr />

        <h5 className="text-center">🏆 Rewards</h5>
        <div className="text-center mb-3">
          {total >= 1000
            ? <span className="badge bg-warning text-dark">🥇 Gold Donor</span>
            : <span className="badge bg-info text-dark">🎖️ Bronze Donor</span>
          }
        </div>

        <button className="btn btn-danger w-100" onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
