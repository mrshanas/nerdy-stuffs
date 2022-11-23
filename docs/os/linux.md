---
title: Linux OS Tips
---

# {{ $frontmatter.title }}

## Table of Contents

1. [Linux Basic Commands](#linux-basic-commands)
1. [SSH](#ssh)
   - [Generating SSH Keys](#generating-ssh-keys)
   - [Log In to remote servers](#log-in-to-remote-servers)

## Linux Basic Commands

`mkdir` - used to create a _directory_, for example

```bash
    mkdir mrshanas
```

`rm -rf <directory-name>` - used to delete a _directory_ and its content

```bash
    rm -rf mrshanas
```

## SSH

### Generating SSH Keys

```bash
    ssh-keygen
```

The above command will generate a public and private key stored in the `.ssh` folder by default

### Log In to remote servers

Make sure the `ssh` public key is available in the server to which you want to log in into, then run

```bash
    ssh <username>@<server IP>
```

i.e `ssh root@127.0.0.1`

Sometimes the above command doesn't work and you may need to activate the ssh keys by
`ssh-add <ssh_priv_key>` or `ssh-agent -s` ( 👈 put backticks in this command)
