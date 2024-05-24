---
title: Go Keylight
layout: blogpost
blurb: An elgato keylight controller written in Golang.
---

# {{page.title}}

[GitHub Link](https://github.com/VMaston/go-keylight)

I was having some issues with using the native program from Elgato, so I decided to write my own as an activity to showcase my skills in Go.
Particularly, it has a keep-awake function which pings the light every so often to keep it from disconnecting (which is a problem I was often having on the 2.4ghz keylight variant).
It's hosted on a web-server, as one of the requirements was to make it accessible from any device on my local network - rather than as a local program.
