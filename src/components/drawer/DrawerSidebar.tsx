import React from 'react';
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { TbTransactionBitcoin } from "react-icons/tb";
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const dashboardPaths = [
    {
      title: "Dashboard",
      path: ``,
      icon: DashboardIcon,
    },
    {
      title: "Transactions",
      path: `/transactions`,
      icon: TbTransactionBitcoin,
    },
    {
      title: "Calendar",
      path: `/calendar`,
      icon: CalendarMonthIcon,
    },
    {
      title: "Debts",
      path: `/debits`,
      icon: MoreTimeIcon,
    },
  ];
const DrawerSidebar = ({handleDrawerClose}:{handleDrawerClose:()=>void}) => {
    const pathName=usePathname();
    return (
        <Box>
          <List  >
            {dashboardPaths.map((item, index) => {
              const linkPath = `/dashboard${item.path}`;
              return (
                <Link onClick={handleDrawerClose} href={linkPath} key={index}>
                  <ListItem
                    disablePadding 
                    sx={{
                        ...(pathName === linkPath
                          ? { borderRight: "3px solid #EAB308",  "& svg": { color: "#EAB308" } , color: 'yellowgreen' }
                          : {}),
                      }}
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        {item.icon && <item.icon />}
                      </ListItemIcon>
                      <ListItemText primary={item.title} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              );
            })}
          </List>
        </Box>
      );
      
}
export default DrawerSidebar