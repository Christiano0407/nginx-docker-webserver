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

En `nginx.conf`:

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
## Docker Compose 

> Desarrollamos tres instancias del mismo servidor. Con el fin de probar Nginx Proxy & Load Balancer.

- Probamos las Variables de Entorno dentro de Docker Compose

```yml
app1:
   environment:
      INSTANCE_NAME: app1

app2:
   environment:
      INSTANCE_NAME: app2

app3:
   environment:
      INSTANCE_NAME: app3      

```

Esto nos permite identificar qué instancia responde cuando la vamos ejecutando.

---

## Ejecutar el proyecto

> Principales Comandos de Docker (Considrar)

- El puerto: 80 (8080:80), es el común dentro del Frontend - Web
- El puerto: 5000, lo usamos dentro del desarrollo Backend (Python)

```bash
docker compose up --build
```

Acceder en:

```bash
http://localhost:8080
```

---

## Verificar Load Balancing

> Usamos 'Debbuging', para probar Load Balancing. 

- Considera que realizamos un SPA (Single Page Aplication), para probar Docker con Nginx Proxy & Load Balancer.

Endpoint de prueba:

```bash
GET /health
```

Ejecutar:

```bash
curl http://localhost:8080/health
```

Deberías ver alternancia entre:

```json
{
  "instance": "app1",
  "hostname": "...",
  "node_env": "production"
}
```

---

## Inspeccionar Red Docker 

> Docker Network

Listar redes:

```bash
docker network ls
```

Inspeccionar red:

```bash
docker network inspect nginx-docker-webserver_backend
```

Ver IP interna de contenedor:

```bash
docker inspect app1
```

---

## Simular caída de instancia

> Paramos nuestros servidores | Docker en local

```bash
docker stop app2
```

El tráfico seguirá siendo distribuido entre app1 y app3.

---

## Conceptos Clave

| Concepto | Explicación |
|----------|------------|
| Reverse Proxy | Intermediario entre cliente y backend |
| Load Balancer | Distribuye tráfico entre instancias |
| Bridge Network | Red interna aislada en Docker |
| least_conn | Algoritmo que envía tráfico al servidor con menos conexiones activas |

---

## ¿Por qué no se usan volúmenes?

> Se manejó sin bases de datos & Storage. 

Este proyecto:

- No usa base de datos
- No requiere persistencia
- Es para probar Docker + Nginx Proxy & Load Balancer

Por eso no se usan named volumes.

---

## Escalabilidad

> Considera la Arquitectura de Software | Sistemas Diseño | La capacidad de tu Host, VPS o Cload. 

- Evita Deuda Técnica
- Realiza un Plan Financiero

Para escalar:

```bash
docker compose up --scale app=5
```

O migrar a:

- Kubernetes
- Ingress Controller
- HPA (Horizontal Pod Autoscaler)

---

## Futuras mejoras

- Agregar health checks reales
- Implementar métricas (Prometheus)
- Integrar CI/CD
- Probar WebSockets
- Añadir rate limiting en Nginx

---

## Sobre AI - AI Native System

> Con la evolución hacia AI-native systems (LLMs, RAG, MCP, Agents, Event-Driven + Cloud), la documentación también evoluciona.

- NLP | LLM (Modelos) | MCP | Agents I.A | RAG
- Agents.md
- Skills (Agents)
- CLI (Agents)
- Architecture.md [Documento técnico para desarrolladores, DevOps, SRE y AI Engineers.]

> Ya no basta con README.md. En sistemas modernos se requieren al menos:

- ARCHITECTURE.md → Diseño técnico profundo
- AGENTS.md → Definición formal de agentes de IA y sus capacidades operativas

### ¿Se puede complementar con MCP?

> Podemos Complementar nuestros Procesos con: MCP & Agents I.A (CLI)

Puedes integrar:

- MCP de GitHub → automatizar documentación
- MCP de Docker → validación de contenedores
- Agentes AI para:
  - Generar configuraciones
  - Validar arquitectura
  - Detectar errores en nginx.conf

---

### ¿Qué es agents.md?

Es un archivo que define:

- Capacidades del agente
- Límites
- Acciones permitidas
- Integraciones

Podrías agregar:

```bash
agents.md
```

Para documentar cómo un agente AI podría:

- Levantar entorno
- Ejecutar tests
- Validar balanceo
- Simular fallos

---

### Licencia

MIT