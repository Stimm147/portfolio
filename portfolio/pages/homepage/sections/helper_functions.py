import reflex as rx


def tag_item(name, background):
    return rx.text(
        f"{name}",
        bg=background,
        color="white",
        padding="5px 12px",
        border_radius="15px",
        size="2",
    )
