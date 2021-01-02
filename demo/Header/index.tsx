// modules
import * as React from 'react';

// system
// import ErrorProtector from '~/system/components/ErrorProtector';

// custom

// assets
import { description } from '../../package.json';
import {
  Container,
  Title,
  LogoLink,
  ThemeBtn
} from './styles';

interface HeaderProps {
  className?: string;
}

const Header: React.FunctionComponent<HeaderProps> = props => {
  const { className } = props;
  const [theme, setTheme] = React.useState('light');

  const handleClick = React.useCallback(() => {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <Container className={className}>
      <LogoLink to="/">
        <img src={`${process.env.SERVER_URL}/logo.png`} alt="logo" />
      </LogoLink>
      <Title>{description}</Title>
      <ThemeBtn type="button" className={theme} onClick={handleClick} />
    </Container>
  );
};

export default Header;
