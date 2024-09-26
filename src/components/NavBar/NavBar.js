import React, { useState } from "react";
import { AppShell, Stack, Button, Text } from "@mantine/core";
import { IconMusic, IconMusicPin, IconScissors, IconLink, IconLock } from "@tabler/icons-react";
import styles from "./NavBar.module.css";

function NavBar({ showNav }) {
  const navItems = [
    { icon: <IconMusic size={24} />, label: "Pitcher", value: "pitcher" },
    { icon: <IconMusicPin size={24} />, label: "Finder", value: "bpm" },
    { icon: <IconScissors size={24} />, label: "Cutter", value: "cutter" },
    { icon: <IconLink size={24} />, label: "Joiner", value: "joiner" },
  ];

  const [active, setActive] = useState("cutter");

  return (
    <AppShell.Navbar className={`${showNav ? styles.navbar : styles.hideNav}`}>
      <Stack spacing={0} align="center" className={`${styles.mainNav}`}>
        {navItems.map((item) => (
          <Button
            key={item.value}
            variant="subtle"
            onClick={() => setActive(item.value)}
            className={`${styles.navButton} ${active === item.value ? styles.activeNavButton : ""} ${
              showNav ? styles.showNav : styles.hideNav
            }`}
          >
            <Stack spacing={5} align="center">
              {item.icon}
              <Text size="xs">{item.label}</Text>
            </Stack>
          </Button>
        ))}
      </Stack>
    </AppShell.Navbar>
  );
}

export default NavBar;
