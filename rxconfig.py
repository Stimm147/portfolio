import reflex as rx

config = rx.Config(
    app_name="portfolio",
    frontend_path="/portfolio/",
    deploy_url="https://stimm147.github.io/portfolio/",
    plugins=[
        rx.plugins.SitemapPlugin(),
        rx.plugins.TailwindV4Plugin(),
    ],
)
