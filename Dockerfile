# Użyj oficjalnego obrazu Pythona jako bazy
FROM python:3.12-slim-bookworm

# Ustaw zmienną środowiskową, aby Python nie buforował wyjścia
ENV PYTHONUNBUFFERED 1

# Ustaw katalog roboczy w kontenerze
WORKDIR /app

# Kopiuj pliki zależności i zainstaluj je
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Skopiuj resztę kodu aplikacji
COPY . .

ENV REFLEX_BACKEND_PORT 8000

# Uruchom serwer backendu Reflex
CMD reflex run --env prod --backend-port ${REFLEX_BACKEND_PORT}