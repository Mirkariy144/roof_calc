import React, { useEffect, useState } from 'react';
import { axiosAuthCheker } from '../shared/API/Api';
import { useLocation, useNavigate } from 'react-router-dom';

export const AuthCheker = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const [chekStatus, setChekStatus] = useState<number | undefined>();
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const data = await axiosAuthCheker();
        setChekStatus(data.status);
        if (data.status === 200 && location.pathname === '/signIn') {
          navigate('/');
        }
      } catch (error) {
        console.error(error);
        navigate('/signIn');
      }
    };

    checkAuth();
  }, [navigate, chekStatus, location.pathname]);

  if (chekStatus === undefined || chekStatus !== 200) {
    navigate('/signIn');
  }

  return <>{children}</>;
};
