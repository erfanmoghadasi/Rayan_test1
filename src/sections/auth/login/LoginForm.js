/* eslint-disable import/no-unresolved */
import { useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';

// Cookie Seter
import { useCookies } from 'react-cookie';

// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { UserContext } from 'src/utils/UseContext';

// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const contextValues = useContext(UserContext);
  const { setIsAuth } = contextValues.values;

  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [cookie, setCookie] = useCookies()


  

  const handleClick = () => {
    if (email === 'abc@mail.com' && pass === '123456') {
      if (rememberMe){
        setCookie('email' , email)
        setCookie('pass' , pass)
      }
      setIsAuth(true);
      navigate('/dashboard');
    }
  };

  console.log(cookie)


  return (
    <>
      <Stack spacing={3}>
        <TextField name="email" label="Email address" onChange={(e) => setEmail(e.target.value)} />

        <TextField
          onChange={(e) => setPass(e.target.value)}
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" onClick={() => setRememberMe(!rememberMe)} />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Login
      </LoadingButton>
    </>
  );
}
