import gc
import os
import reflex as rx

api_url = os.getenv("API_URL", "http://127.0.0.1:8000")

if os.getenv("ENV") == "prod":
    # Włącz aggressive garbage collection
    gc.set_threshold(100, 10, 10)

config = rx.Config(
    app_name="portfolio",
    plugins=[
        rx.plugins.SitemapPlugin(),
        rx.plugins.TailwindV4Plugin(),
    ],
    api_url=api_url,
    cors_allowed_origins=[
        "http://localhost:3000",
        "https://michal-sztymelski-portfolio.up.railway.app",
    ],
    compile=True,
    telemetry_enabled=False,
)
