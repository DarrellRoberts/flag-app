import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ setSearchValue, searchValue }) => {
  return (
    <>
      <Header setSearchValue={setSearchValue} searchValue={searchValue} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
