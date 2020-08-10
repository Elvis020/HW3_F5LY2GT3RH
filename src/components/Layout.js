import Head from 'next/head';
import HeaderText from './HeaderText';
import Navbar from './Navbar';
import SearchBar from './SearchBar';



const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Header Blog</title>
        <link rel="stylesheet" href="/css/global.css" />
      </Head>
      <body>
        <Navbar />
        <HeaderText />
      </body>
    </>
  );
};

export default Layout;





