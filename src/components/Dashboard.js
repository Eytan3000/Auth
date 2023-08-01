import React, { useEffect, useState } from 'react';
import { Alert, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { insertNewField, loadTextFromDB } from '../helpers/dbFunctions';
//-------------------------------------------------------------------------
export default function Dashboard() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const [lead, setLead] = useState('');
  const navigate = useNavigate();

  async function handleLogout() {
    setError('');

    try {
      await logout();
      // navigate('/login', { replace: true });
    } catch {
      setError('Failed to logout');
    }
  }

  async function handleClick() {
    // const field = { text: 'text1' };
    insertNewField(currentUser.uid);
  }
  useEffect(() => {
    (async () => {
      const data = await loadTextFromDB(currentUser.uid);
      setLead(data);
    })();
  }, []);
  console.log(lead);

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: </strong>
          {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
          <Button onClick={handleClick}>+</Button>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}
