import reflex as rx

config = rx.Config(
    app_name="portfolio",
    base_path="/portfolio",  # konieczne, musi być dokładnie "/portfolio"
    deploy_url="https://stimm147.github.io/portfolio/",
    vite_config={
        "base": "/portfolio/",  # kluczowe - Vite musi mieć bazę pod subfolder
    },
    plugins=[
        rx.plugins.SitemapPlugin(),
        rx.plugins.TailwindV4Plugin(),
    ],
)
