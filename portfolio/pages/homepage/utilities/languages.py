import reflex as rx
from .translations import TRANSLATIONS  # Upewnij się, że ścieżka jest poprawna


class LanguageState(rx.State):
    """Stan aplikacji do zarządzania językiem i tłumaczeniami."""

    # Domyślny język ustawiony na polski.
    language: str = "pl"

    # --- Event Handlers ---
    def set_language(self, lang: str):
        """Zmienia język aplikacji."""
        self.language = lang

    # --- Computed Vars (Zmienne Obliczeniowe) ---

    @rx.var
    def texts(self) -> dict[str, str]:
        """Zwraca słownik z tekstami dla aktualnie wybranego języka.
        Używa angielskiego jako domyślnego w razie braku tłumaczenia.
        """
        return TRANSLATIONS.get(self.language, TRANSLATIONS["en"])

    # --- UI & Common ---
    @rx.var
    def ui_language(self) -> str:
        return self.texts.get("ui_language", "")

    @rx.var
    def ui_github_button(self) -> str:
        return self.texts.get("ui_github_button", "")

    # --- Header Section ---
    @rx.var
    def header_title(self) -> str:
        return self.texts.get("header_title", "")

    # --- About Me Section ---
    @rx.var
    def about_me_heading(self) -> str:
        return self.texts.get("about_me_heading", "")

    @rx.var
    def about_me_description(self) -> str:
        return self.texts.get("about_me_description", "")

    # --- Education ---
    @rx.var
    def education_heading(self) -> str:
        return self.texts.get("education_heading", "")

    @rx.var
    def education_tech_school_title(self) -> str:
        return self.texts.get("education_tech_school_title", "")

    @rx.var
    def education_tech_school_dates(self) -> str:
        return self.texts.get("education_tech_school_dates", "")

    @rx.var
    def education_tech_school_desc(self) -> str:
        return self.texts.get("education_tech_school_desc", "")

    @rx.var
    def education_university_title(self) -> str:
        return self.texts.get("education_university_title", "")

    @rx.var
    def education_university_dates(self) -> str:
        return self.texts.get("education_university_dates", "")

    @rx.var
    def education_university_desc(self) -> str:
        return self.texts.get("education_university_desc", "")

    # --- Science Club ---
    @rx.var
    def science_club_heading(self) -> str:
        return self.texts.get("science_club_heading", "")

    @rx.var
    def science_club_title(self) -> str:
        return self.texts.get("science_club_title", "")

    @rx.var
    def science_club_role(self) -> str:
        return self.texts.get("science_club_role", "")

    @rx.var
    def science_club_desc(self) -> str:
        return self.texts.get("science_club_desc", "")

    # --- Projects Section ---
    @rx.var
    def projects_heading(self) -> str:
        return self.texts.get("projects_heading", "")

    @rx.var
    def projects_diy_title(self) -> str:
        return self.texts.get("projects_diy_title", "")

    @rx.var
    def projects_diy_desc(self) -> str:
        return self.texts.get("projects_diy_desc", "")

    @rx.var
    def projects_dev_title(self) -> str:
        return self.texts.get("projects_dev_title", "")

    # --- Specific Projects ---
    @rx.var
    def project_neptun_title(self) -> str:
        return self.texts.get("project_neptun_title", "")

    @rx.var
    def project_neptun_desc(self) -> str:
        return self.texts.get("project_neptun_desc", "")

    @rx.var
    def project_portfolio_title(self) -> str:
        return self.texts.get("project_portfolio_title", "")

    @rx.var
    def project_portfolio_desc(self) -> str:
        return self.texts.get("project_portfolio_desc", "")
