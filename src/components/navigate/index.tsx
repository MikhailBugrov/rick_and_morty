import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Tabs, Tab, AppBar, Toolbar } from '@mui/material';

import { TABS } from './tabs';

function Navigate() {
  const location = useLocation();
  const [value, setValue] = useState(
    TABS.find((tab) => tab.route !== TABS[0].route && location.pathname.startsWith(tab.route))?.route ||
      TABS[0].route
  );

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <header>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            textColor="secondary"
            indicatorColor="secondary"
            allowScrollButtonsMobile
          >
            {TABS.map((tab) => (
              <Tab sx={{ fontWeight: 'bold' }} key={tab.label} label={tab.label} value={tab.route} component={NavLink} to={tab.route} />
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Navigate;
