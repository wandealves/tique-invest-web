import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Card,
  CardContent,
  CardHeader,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
} from '@mui/material';
import { Box } from '@mui/system';
import type { NextPage } from 'next';
import { useState } from 'react';

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

const Login: NextPage = () => {
  const [values, setValues] = useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{
          backgroundColor: 'primary.dark',
        }}
      >
        <Card>
          <CardHeader
            sx={{
              fontWeight: 'bold',
              fontSize: 20,
              textAlign: 'center',
            }}
            title="Tique Invest"
          ></CardHeader>
          <CardContent>
            <Box display="flex" flexDirection="column">
              <FormControl sx={{ m: 1, width: '80ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Login
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type="text"
                  value={values.password}
                  onChange={handleChange('password')}
                  label="Login"
                />
              </FormControl>
              <FormControl sx={{ m: 1, width: '80ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Senha
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Senha"
                />
              </FormControl>
              <Button
                variant="contained"
                color="success"
                sx={{
                  height: 55,
                  marginTop: 5,
                }}
              >
                Entrar
              </Button>
              <Button
                variant="contained"
                color="info"
                sx={{
                  height: 55,
                  marginTop: 2,
                }}
              >
                Registrar
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Login;
