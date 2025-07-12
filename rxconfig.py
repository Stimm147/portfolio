import reflex as rx

config = rx.Config(
    app_name="portfolio",
    deploy_url="https://stimm147.github.io/portfolio/",
    base_path="/portfolio",
    plugins=[
        rx.plugins.SitemapPlugin(),
        rx.plugins.TailwindV4Plugin(),
    ],
)
