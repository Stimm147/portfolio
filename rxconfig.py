import reflex as rx

config = rx.Config(
    app_name="portfolio",
    base_path="/portfolio",  # ważne, zostaw to
    deploy_url="https://stimm147.github.io/portfolio/",
    vite_config={  # <<< tu
        "base": "/portfolio/",  # <<< kluczowe
    },
    plugins=[
        rx.plugins.SitemapPlugin(),
        rx.plugins.TailwindV4Plugin(),
    ],
)
