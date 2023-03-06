import { NextPage } from 'next';
import { ReactNode } from 'react';
import Snowfall from 'react-snowfall';
type Props = {
  children: ReactNode;
}

const Layout:NextPage<Props> = ({ children }) => {
  return (
    <>
      <Snowfall
      color='white'
       snowflakeCount={500} />
      <div>{children}</div>
    </>
  );
};

export default Layout;
