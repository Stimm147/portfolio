# FROM python:3.12-slim-bookworm

# ENV PYTHONUNBUFFERED 1

# WORKDIR /app

# # Zainstaluj potrzebne pakiety systemowe
# RUN apt-get update && apt-get install -y curl unzip

# # Node.js
# RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
# RUN apt-get install -y nodejs

# # Instalacja zależności Pythona
# COPY requirements.txt .
# RUN pip install --no-cache-dir -r requirements.txt

# # Skopiowanie kodu źródłowego
# COPY . .

# # Port aplikacji
# ENV REFLEX_BACKEND_PORT 8000
# ENV REFLEX_FRONTEND_PORT 8000

# # Domyślna komenda
# CMD reflex run --env prod --backend-port ${REFLEX_BACKEND_PORT} --frontend-port ${REFLEX_FRONTEND_PORT}
