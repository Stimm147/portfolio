
FROM python:3.12-slim-bookworm

ENV PYTHONUNBUFFERED 1

WORKDIR /app

# Zainstaluj potrzebne pakiety systemowe
RUN apt-get update && apt-get install -y curl unzip

# Node.js (potrzebny do budowania)
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs

# Instalacja zależności Pythona
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Skopiowanie kodu źródłowego
COPY . .

# Zbuduj aplikację
RUN reflex init
RUN reflex export --frontend-only

# Railway automatycznie ustawia $PORT
ENV PORT ${PORT:-8000}

# Expose port
EXPOSE $PORT

# Uruchom tylko backend API w trybie produkcyjnym
CMD reflex run --env prod --backend-only --backend-port $PORT