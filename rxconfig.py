import os
import reflex as rx

api_url = os.getenv("API_URL", "http://127.0.0.1:8000")
frontend_url = os.getenv("RAILWAY_PUBLIC_DOMAIN", "localhost")
full_frontend_url = (
    f"https://{frontend_url}"
    if frontend_url != "localhost"
    else "http://localhost:3000"
)

config = rx.Config(
    app_name="portfolio",
    plugins=[
        rx.plugins.SitemapPlugin(),
        rx.plugins.TailwindV4Plugin(),
    ],
    api_url=api_url,
    cors_allowed_origins=[
        "http://localhost:3000",
        full_frontend_url,
    ],
    frontend_host="0.0.0.0",
    backend_host="0.0.0.0",
)
