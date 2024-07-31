import {
  Box,
  Button,
  Card,
  CardActions,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { axiosRegistration } from '../shared/API/Api';

export const Registration = () => {
  const [email, setEmail] = useState<string>('');
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === 'email') {
      setEmail(event.target.value);
    } else if (event.target.id === 'login') {
      setLogin(event.target.value);
    } else if (event.target.id === 'password') {
      setPassword(event.target.value);
    }
  };

  return (
    <Card
      variant="outlined"
      sx={{ width: '500px', height: '350px', margin: '0 auto', marginTop: 5 }}
    >
      <Box
        component="form"
        noValidate
        display={'flex'}
        flexDirection={'column'}
        width={'70%'}
        margin={'0 auto'}
      >
        <Typography variant="h5" color="text.primary" margin={'20px 0 10px 0'}>
          Регистрация пользователя
        </Typography>
        <TextField
          required
          id="email"
          label="Введите ваш email"
          value={email}
          onChange={handleChange}
          sx={{ marginBottom: '10px' }}
        />
        <TextField
          required
          id="login"
          value={login}
          onChange={handleChange}
          label="Введите ваш логин"
          sx={{ marginBottom: '10px' }}
        />
        <TextField
          required
          id="password"
          value={password}
          onChange={handleChange}
          label="Введите ваш пароль"
          sx={{ marginBottom: '10px' }}
        />
      </Box>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button
          variant="outlined"
          onClick={() => axiosRegistration(email, login, password)}
        >
          Зарегистрироваться
        </Button>
      </CardActions>
    </Card>
  );
};
