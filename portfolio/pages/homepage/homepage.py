import reflex as rx
from portfolio.pages.homepage.sections.image_section import image_section
from portfolio.pages.homepage.sections.about_section import about_me_section
from portfolio.pages.homepage.sections.project_section import project_section
from portfolio.pages.homepage.sections.helper_functions import tag_item
import datetime


class BackendTestState(rx.State):
    """Stan dla testowania funkcjonalności backendowej."""

    # Licznik odwiedzin
    visit_count: int = 0

    # Wiadomość od użytkownika
    user_message: str = ""

    # Lista wiadomości
    messages: list[str] = []

    # Status serwera
    server_status: str = "🟢 Online"

    # Aktualny czas
    current_time: str = ""

    def increment_visits(self):
        """Zwiększa licznik odwiedzin."""
        self.visit_count += 1

    def add_message(self):
        """Dodaje wiadomość do listy."""
        if self.user_message.strip():
            timestamp = datetime.datetime.now().strftime("%H:%M:%S")
            formatted_message = f"[{timestamp}] {self.user_message}"
            self.messages.append(formatted_message)
            self.user_message = ""  # Wyczyść pole

    def clear_messages(self):
        """Czyści wszystkie wiadomości."""
        self.messages = []

    def update_time(self):
        """Aktualizuje aktualny czas."""
        self.current_time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    def simulate_server_issue(self):
        """Symuluje problem z serwerem."""
        if self.server_status == "🟢 Online":
            self.server_status = "🔴 Offline"
        else:
            self.server_status = "🟢 Online"


def backend_test_panel() -> rx.Component:
    """Panel do testowania funkcjonalności backendowej."""
    return rx.box(
        rx.heading("🧪 Panel Testowy Backendu", size="4", margin_bottom="1rem"),
        # Sekcja statusu i statystyk
        rx.hstack(
            rx.box(
                rx.text("Status serwera:", weight="bold"),
                rx.text(BackendTestState.server_status),
                rx.button(
                    "Zmień Status",
                    on_click=BackendTestState.simulate_server_issue,
                    color_scheme="orange",
                    size="2",
                ),
                padding="1rem",
                border="1px solid #e0e0e0",
                border_radius="8px",
            ),
            rx.box(
                rx.text("Licznik odwiedzin:", weight="bold"),
                rx.text(BackendTestState.visit_count),
                rx.button(
                    "Odwiedź stronę",
                    on_click=BackendTestState.increment_visits,
                    color_scheme="blue",
                    size="2",
                ),
                padding="1rem",
                border="1px solid #e0e0e0",
                border_radius="8px",
            ),
            rx.box(
                rx.text("Aktualny czas:", weight="bold"),
                rx.text(BackendTestState.current_time),
                rx.button(
                    "Odśwież czas",
                    on_click=BackendTestState.update_time,
                    color_scheme="green",
                    size="2",
                ),
                padding="1rem",
                border="1px solid #e0e0e0",
                border_radius="8px",
            ),
            spacing="4",
            width="100%",
        ),
        # Sekcja wiadomości
        rx.box(
            rx.heading("💬 System Wiadomości", size="3", margin_bottom="0.5rem"),
            rx.hstack(
                rx.input(
                    placeholder="Napisz wiadomość...",
                    value=BackendTestState.user_message,
                    on_change=BackendTestState.set_user_message,
                    width="70%",
                ),
                rx.button(
                    "Dodaj",
                    on_click=BackendTestState.add_message,
                    color_scheme="blue",
                ),
                rx.button(
                    "Wyczyść",
                    on_click=BackendTestState.clear_messages,
                    color_scheme="red",
                ),
                spacing="2",
                width="100%",
            ),
            # Lista wiadomości
            rx.box(
                rx.cond(
                    BackendTestState.messages,
                    rx.vstack(
                        rx.foreach(
                            BackendTestState.messages,
                            lambda message: rx.text(
                                message,
                                padding="0.5rem",
                                background="gray.100",
                                border_radius="4px",
                                margin_bottom="0.25rem",
                            ),
                        ),
                        spacing="1",
                        width="100%",
                    ),
                    rx.text("Brak wiadomości", color="gray.500", font_style="italic"),
                ),
                max_height="200px",
                overflow_y="auto",
                padding="1rem",
                border="1px solid #e0e0e0",
                border_radius="8px",
                margin_top="1rem",
            ),
            margin_top="2rem",
        ),
        # Informacje o API
        rx.box(
            rx.heading("🔧 Informacje API", size="3", margin_bottom="0.5rem"),
            rx.vstack(
                rx.text("Endpoints dostępne w tym teście:", weight="bold"),
                rx.text("• GET /visit_count - pobierz liczbę odwiedzin"),
                rx.text("• POST /message - dodaj nową wiadomość"),
                rx.text("• GET /messages - pobierz wszystkie wiadomości"),
                rx.text("• GET /server_status - sprawdź status serwera"),
                rx.text("• GET /current_time - pobierz aktualny czas serwera"),
                spacing="1",
                align="start",
            ),
            padding="1rem",
            border="1px solid #e0e0e0",
            border_radius="8px",
            margin_top="2rem",
            background="gray.50",
        ),
        padding="2rem",
        border="2px dashed #4A90E2",
        border_radius="12px",
        background="white",
        margin="2rem 0",
    )


def homepage() -> rx.Component:
    return rx.box(
        rx.vstack(
            image_section(),
            about_me_section(),
            project_section(),
            # Dodaj panel testowy backendu
            backend_test_panel(),
            spacing="3",
        )
    )
