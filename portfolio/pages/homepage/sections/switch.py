import reflex as rx

from portfolio.pages.homepage.utilities.languages import LanguageState


def language_switcher():
    return rx.hstack(
        rx.text(
            LanguageState.ui_language,
            size="3",
            weight="medium",
            color="rgba(255, 255, 255, 0.8)",
        ),
        rx.button(
            "Polski 🇵🇱",
            on_click=lambda: LanguageState.set_language("pl"),
            variant="outline",
            color_scheme="gray",
            bg=rx.cond(
                LanguageState.language == "pl",
                "rgba(255, 255, 255, 0.15)",
                "transparent",
            ),
            color="white",
        ),
        rx.button(
            "English 🇬🇧",
            on_click=lambda: LanguageState.set_language("en"),
            variant="outline",
            color_scheme="gray",
            bg=rx.cond(
                LanguageState.language == "en",
                "rgba(255, 255, 255, 0.15)",
                "transparent",
            ),
            color="white",
        ),
        spacing="3",
        align_items="center",
        width="100%",
        justify="center",
    )
