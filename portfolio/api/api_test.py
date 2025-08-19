import reflex as rx
import httpx

STATS_API_URL = "https://flask-api-production-0454.up.railway.app/api/stats"


class StatsState(rx.State):

    stats: dict = {}
    is_loading: bool = False
    error_message: str = ""

    async def fetch_stats(self):
        self.is_loading = True
        self.error_message = ""
        try:
            async with httpx.AsyncClient() as client:
                response = await client.get(STATS_API_URL)
                response.raise_for_status()
                self.stats = response.json()
        except httpx.HTTPStatusError as e:
            self.error_message = f"Błąd HTTP: {e.response.status_code}"
        except Exception as e:
            self.error_message = f"Wystąpił błąd: {str(e)}"
        finally:
            self.is_loading = False


def stats_component() -> rx.Component:
    return rx.box(
        rx.heading("Statystyki z Zewnętrznego API", size="5"),
        rx.button(
            "Pobierz najnowsze statystyki",
            on_click=StatsState.fetch_stats,
            is_loading=StatsState.is_loading,
            margin_top="1em",
        ),
        rx.cond(
            StatsState.is_loading,
            rx.center(rx.spinner(size="3"), margin_top="1em"),
            rx.cond(
                StatsState.stats,
                rx.vstack(
                    rx.text(
                        f"Odwiedzający: {StatsState.stats.get('page_visitors', 'N/A')}"
                    ),
                    rx.text(
                        f"Ukończone projekty: {StatsState.stats.get('projects_completed', 'N/A')}"
                    ),
                    rx.text(f"Status API: {StatsState.stats.get('api_status', 'N/A')}"),
                    align_items="flex-start",
                    margin_top="1em",
                ),
                rx.text("Kliknij przycisk, aby załadować dane.", margin_top="1em"),
            ),
        ),
        rx.cond(
            StatsState.error_message,
            rx.callout(
                StatsState.error_message,
                icon="alert_triangle",
                color_scheme="red",
                role="alert",
                margin_top="1em",
            ),
        ),
        on_mount=StatsState.fetch_stats,
        padding="2em",
        border="1px solid #eaeaea",
        border_radius="10px",
    )
