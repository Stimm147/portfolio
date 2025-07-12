import reflex as rx
from .pages.homepage import homepage
from rxconfig import config


def index() -> rx.Component:
    return rx.container(
        homepage(),
    )


app = rx.App()

app.add_page(
    index,
    route="/",
)
