FROM python:3.12-slim-bookworm

ENV PYTHONUNBUFFERED 1

WORKDIR /app

# Zainstaluj potrzebne pakiety systemowe
RUN apt-get update && apt-get install -y curl unzip

# Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs

# Instalacja zależności Pythona
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Skopiowanie kodu źródłowego
COPY . .

# Railway automatycznie ustawia PORT - użyj tego portu dla frontendu
# Backend będzie na innym porcie
ENV REFLEX_BACKEND_PORT 8080
# Railway expects the app to listen on $PORT
ENV REFLEX_FRONTEND_PORT ${PORT:-8000}

# Expose port dla Railway
EXPOSE ${PORT:-8000}

# Domyślna komenda - użyj różnych portów
CMD reflex run --env prod --backend-port 8080 --frontend-port ${PORT:-8000}