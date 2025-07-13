import reflex as rx
from .pages.homepage import homepage
from rxconfig import config

config.head_tags = ['<base href="/portfolio/">']

app = rx.App(config=config)


def index() -> rx.Component:
    return rx.container(
        homepage(),
    )


app.add_page(index, route="/")
