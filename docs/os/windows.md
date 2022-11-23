---
title: Windows OS Notes
---

# {{ $frontmatter.title }}

## Table of Contents

1. [Windows Users Lost Admin Privileges](#windows-users-lost-admin-privileges)

### Windows Users Lost Admin privileges

In windows you can change the administrator privileges by booting in safe mode, _below are the steps_

- Hold shift while clicking restart
- Click troubleshoot and reboot your PC in safe mode
- Log in to the administrator account
- Click `windows + R` and type the command 👉 `cmd`
- after the command prompt is open type `netplwiz`
  select your account and add it to the **_administrators group_**
