import React, { useEffect, useState } from 'react';
import { axiosAuthCheker } from '../shared/API/Api';
import { useNavigate } from 'react-router-dom';

export const AuthCheker = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    axiosAuthCheker().then((data) => {
      setChekStatus(data.status);
    });
  });

  const navigate = useNavigate();

  const [chekStatus, setChekStatus] = useState<number>();

  if (chekStatus === 200) {
    return <>{children}</>;
  } else {
    navigate('/login');
    return null;
  }
};
