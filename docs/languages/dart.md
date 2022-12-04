---
title: Dart Programming Language
---

# {{ $frontmatter.title }}

## OOP
### Basics - Constructors
Class constructors can be shorthanded by using the class name and 
example shown below
```dart
class Shanas {
  String name;
  int age;

  Shanas({String n, int a}) {
    name = n;
    age = a;
  }
}
```
>The above method is okay but for a class with alot of properties things can get clumsy

```dart
class Shanas {
  String name;
  int age;

  Shanas({required this.name, required this.age});
}
```
>The method above is a shorthand for creating and initializing class properties without repetition as above
