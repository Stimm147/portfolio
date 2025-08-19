import reflex as rx
from portfolio.api.api_test import stats_component
from portfolio.pages.homepage.sections.image_section import image_section
from portfolio.pages.homepage.sections.about_section import about_me_section
from portfolio.pages.homepage.sections.project_section import project_section
from portfolio.pages.homepage.sections.helper_functions import tag_item
from portfolio.pages.homepage.sections.switch import language_switcher


def homepage() -> rx.Component:
    return rx.box(
        rx.vstack(
            image_section(),
            language_switcher(),
            about_me_section(),
            project_section(),
            # stats_component(),
            spacing="3",
        )
    )
