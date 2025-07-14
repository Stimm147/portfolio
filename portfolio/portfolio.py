import os
import reflex as rx
from .pages.homepage import homepage
from rxconfig import config

app = rx.App()


def index() -> rx.Component:
    return rx.container(
        homepage(),
    )


app.add_page(index, route="/")
