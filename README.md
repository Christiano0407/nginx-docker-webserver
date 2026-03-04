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

## Tecnologías

> Considera Explorar Docker Hub 

- Node Js + Express
- Docker
- Docker Compose
- Nginx 1.25 (Alpine)
- Bridge Network (Redes)

---

## ¿Qué se está demostrando? 

> La Funcionalidad y las formas de usar e trabajar entre Docker y Nginx Proxy

1. Cómo Nginx balancea tráfico entre múltiples instancias
2. Cómo Docker resuelve nombres de servicio como DNS interno
3. Cómo funciona `least_conn`
4. Cómo estructurar una SPA detrás de un Reverse Proxy

---

## Estructura del Proyecto 

> Arquitectura & Estructura (Básicas) | Carpetas dentro del Proyecto

---

.
├── app/
│   ├── Dockerfile
│   ├── server.js
│   ├── html/
│   ├── css/
│   └── js/
│
├── nginx/
│   └── nginx.conf
│
└── docker-compose.yml

---

## Funcionamiento de Load Balancer

> Cómo funciona Nginx Proxy con Load Balancer

En `nginx.con`:

```nginx
upstream backend_cluster {
    least_conn;

    server app1:3000;
    server app2:3000;
    server app3:3000;
}

```

> Proceso & Metodología: 

- Docker crea una red interna `backend`
- Cada contenedor es accesible por su nombre (`app1`, `app2`, etc.)
- Nginx distribuye tráfico usando `least_conn`

---

## Licencia

MIT