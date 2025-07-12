import reflex as rx
from .pages.homepage import homepage
from rxconfig import config
from .pages.about import about_page


def index() -> rx.Component:
    return rx.container(
        homepage(),
    )

app = rx.App()

app.add_page(
    index,
    route="/",
)

app.add_page(
    about_page,
    route="/about",
)