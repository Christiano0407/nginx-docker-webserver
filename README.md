# nginx-docker-webserver

## Objetivo: Trabajar Docker con Nginx Proxy y Load Balancer

> Este repositorio está diseñado para que el usuario(ia) lo entienda

- Cómo funciona Docker networking
- Cómo Nginx hace Load Balancing
- Cómo estructurar micro-servicios simples
- Cómo pensar en Infraestructura desde cero; en tiempos de IA (Inteligencia Artificial)

## Overview 

Este proyecto demuestra cómo funciona:

- Docker (Image)
- Docker Compose
- Nginx como Reverse Proxy 
- Nginx como Load Balancer (least_conn)
- Múltiples Instancias de un SPA (Single Page Aplication), servido con Express
- Red Interna Docker (Bridge network)

Arquitectura Simplificada: 

Client
   ↓
Nginx (Reverse Proxy + Load Balancer)
   ↓
Docker Bridge Network
   ↓
App1 | App2 | App3 (Express SPA)

---

## Licencia

MIT