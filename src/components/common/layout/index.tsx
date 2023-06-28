import { FC, PropsWithChildren } from 'react';
// import Header from './Header';
// import Footer from './Footer';
import Menu from './Menu';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Menu />
      {/* <Header />
      <Footer /> */}
      <div>{children}</div>
    </div>
  );
};

export default Layout;
