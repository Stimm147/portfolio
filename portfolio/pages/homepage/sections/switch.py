import reflex as rx

from portfolio.pages.homepage.utilities.languages import LanguageState


def language_switcher():
    """Komponent przełącznika języka."""
    return rx.hstack(
        # Etykieta "Język", która sama się tłumaczy
        rx.text(
            LanguageState.ui_language,
            size="3",
            weight="medium",
            color="rgba(255, 255, 255, 0.8)",
        ),
        # Przycisk dla języka polskiego
        rx.button(
            "Polski 🇵🇱",
            on_click=lambda: LanguageState.set_language("pl"),
            variant="outline",  # Styl przycisku
            color_scheme="gray",
            # Warunek, który dynamicznie zmienia styl, gdy język jest aktywny
            bg=rx.cond(
                LanguageState.language == "pl",
                "rgba(255, 255, 255, 0.15)",
                "transparent",
            ),
            color="white",
        ),
        # Przycisk dla języka angielskiego
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
