---
title: Flutter
---

# {{ $frontmatter.title }}
Flutter has a very good documentation which is easy to understand, make use of referring from the [docs](https://docs.flutter.dev)

## Table of Contents
1. [App Icons](#app-icons)
2. [Problems I Encountered](#problem-i-encountered)

### App Icons
Upload an image/icon you want to use as an app icon to [AppIcon](https://appicon.co) website, then download the generated icon folders for `ios` and `android` or other platforms if were selected and replace them in the project's folder having the same names

### Problem I Encountered

I was using a windows 10 and when I run `flutter doctor`, It didn't work but this [medium article](https://hritikaa9.medium.com/where-is-not-recognized-as-an-internal-or-external-command-operable-program-or-batch-file-52277b0f0af8) helped me to configure the enviroment variables required to properly enable flutter in my machine

Also, when I ran `flutter doctor`, Under Android Studio verison it displayed

> Unable to find bundled Java version

This [stackoverflow solution](https://stackoverflow.com/questions/51281702/unable-to-find-bundled-java-version-on-flutter) helped me.
