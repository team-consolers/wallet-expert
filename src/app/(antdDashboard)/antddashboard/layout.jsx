import React from 'react';
import AntdDrawer from '../../../components/antd/Drawer/AntdDrawer';

const layout = ({children}) => {
      return (
            <AntdDrawer>
                  {children}
            </AntdDrawer>
      );
};

export default layout;