import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Wrapper, Username, Button } from './UserMenu.styled';
import { BiLogOut } from '@react-icons/all-files/bi/BiLogOut';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { selectUser } = useAuth();
  const handleLogOut = e => {
    dispatch(logOut());
  };
  return (
    <Wrapper>
      <Username>Welcome, {selectUser.name}</Username>
      <Button type="button" onClick={handleLogOut}>
        <BiLogOut size={14} /> Logout
      </Button>
    </Wrapper>
  );
};
