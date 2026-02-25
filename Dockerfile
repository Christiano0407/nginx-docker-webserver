# Official Base Image
FROM nginx:latest

# Default Configuration Delete (Clean, but Optional)
RUN rm -rf /usr/share/nginx/html/*

# Static Site Copy 
COPY html/ /usr/share/nginx/html/

# PORT Live:80
EXPOSE 80

# Command Default (Inside Image for default)
CMD ["nginx", "-g", "daemon off;"]