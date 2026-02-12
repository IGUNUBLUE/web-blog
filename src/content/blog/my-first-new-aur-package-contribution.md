---
title: My first new AUR package contribution
author: Lenin AGC
date: 2024-05-07 9:15:00
categories: [AUR, Arch Linux]
tags: [aur, archlinux, relagit, package]
prev:
  text: "How to Add Vercel/Analytics to Vitepress Projects"
  link: "/blog/how-to-add-vercel-analytics-to-vitepress-projects"
next: false
---
# My first new AUR package contribution
![vitepress logo with clouds](/assets/img_/blog/post10_img0.webp)

Hello everyone! I hope you're all doing well. Today, I want to share my experience of uploading a package to the Arch User Repository (AUR). As an Arch Linux user and a fan of the **relagit** project, I decided to contribute by creating an AUR package for it.

## What is **relagit**?
[**relagit**](https://rela.dev/) is an elegant solution to graphical version control. It provides a user-friendly interface for managing Git repositories, making it easier for both beginners and experienced developers to work with version control.

## The Process
To upload a package to the AUR, you need to follow certain guidelines and conventions. Here's a brief overview of the steps I followed:

1. Create an AUR repository: To upload a package to the AUR, you need to create a new repository on the AUR website. The repository name should match the package name specified in the PKGBUILD file.
```console
git clone ssh://aur@aur.archlinux.org/{relagit}.git
```

2. Create a PKGBUILD file: The PKGBUILD file contains the instructions for building and packaging the software. It specifies the package name, version, dependencies, and build steps. Like:
```bash
# Maintainer: Lenin Garizabalo <https://github.com/IGUNUBLUE/>
pkgname=relagit
pkgver=0.14.12
pkgrel=1
pkgdesc="The elegant solution to graphical version control."
arch=("x86_64")
url="https://github.com/relagit/relagit"
license=("GNU Lesser General Public License v3.0")
provides=("RelaGit")
source_x86_64=("$pkgname-$pkgver.deb::$url/releases/download/v${pkgver}/${provides}-linux.deb")
sha256sums_x86_64=('9f42b36c89f3a851232da031d27f93bb7f5ff1f86bb222e662d1ae9b6a72162a')

prepare() {
  bsdtar xf data.tar.xz
}

package() {
  mv opt "$pkgdir"
  mv usr "$pkgdir"
}
```
3. Create a checksums: The checksums contains the SHA-256 checksums of the files in the package. It is used to verify the integrity of the package.
```console
updpkgsums 
```
4. Test the package locally: Before uploading the package to the AUR, it's crucial to test it locally to ensure it builds and installs correctly. I used the makepkg command to build the package and pacman to install it.
```console
makepkg -si
```
5. Push the package to the AUR: After creating the repository, you can push your PKGBUILD and related files to the AUR using Git. The AUR provides instructions on how to clone the repository and push your changes.

## Challenges Faced
During the process of uploading **relagit** to the AUR, I encountered a small challenge. The package name in my PKGBUILD file didn't match the expected name on the AUR. I had named the package **relagit**-bin, but the AUR expected it to be named **relagit**.

To resolve this issue, I updated the pkgname variable in the PKGBUILD file to match the expected name. After making this change and updating the references to the package name, I was able to successfully push the package to the AUR.

## Conclusion
Contributing to the AUR by uploading a package is a great way to give back to the Arch Linux community. It allows others to easily install and use the software you package. If you're interested in trying out **relagit** on Arch Linux, you can now find it on the AUR under the name **relagit**.

Happy packaging and happy coding!