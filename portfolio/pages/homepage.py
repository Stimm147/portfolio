import reflex as rx

def homepage() -> rx.Component:
    return rx.box(
        rx.text("Welcome to the Homepage!", size="6"),
        
    )