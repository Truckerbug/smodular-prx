# Smodular PRX

## About

Smodular PRX is a simple web proxy to forward traffic through a webpage from any Internet connection through your local router.
It uses Scramjet for the backend (soon to migrate.)
It can be hosted by about:blank injection via a static webpage or connected to directly.

## Notes

The website is not frequently updated or maintained. This repository will never be synced to the original scramjet repository.
The actual webpage is relatively clunky currently. I am a one-man-team, and I can only do so much.
Visual updates and backend progress are coming soon!

## Setup

If you would like to build this proxy for yourself, setup should be simple. Simply clone the repository and build using Docker:

```sh
git clone https://github.com/Truckerbug/smodular-prx.git && cd smodular-prx
docker build -t smodular-prx .
docker run -d -p 12345:8080 --name smodular-prx smodular-prx
```

Simply replace the port number (12345) with a number of your choice.
The website will be available at your device's ip address:12345.
Finally, set up port forwarding on your router pointing to your device's ip:port number.
For example, 192.168.1.145:12345