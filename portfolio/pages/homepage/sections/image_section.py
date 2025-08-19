import reflex as rx

from portfolio.pages.homepage.utilities.languages import LanguageState


def image_section():
    return rx.box(
        rx.image(
            width=["180px", "200px", "250px"],
            height=["180px", "200px", "250px"],
            border_radius="50%",
            bg="white",
            background_image="url('https://avatars.githubusercontent.com/u/98175327?v=4')",
            background_size="cover",
            background_repeat="no-repeat",
            background_position="center",
            animation="slideInFromTop 1s ease-out",
            style={
                "@keyframes slideInFromTop": {
                    "0%": {"transform": "translateY(-10px)", "opacity": "0"},
                    "100%": {"transform": "translateY(0)", "opacity": "1"},
                }
            },
        ),
        rx.text(
            LanguageState.header_title,
            size="6",
            padding_top=["15px", "20px", "23px"],
            padding_x=["15px", "30px", "0px"],
            text_align="center",
            animation="slideInFromTop 1s ease-out 0.3s both",
            style={
                "@keyframes slideInFromTop": {
                    "0%": {"transform": "translateY(-10px)", "opacity": "0"},
                    "100%": {"transform": "translateY(0)", "opacity": "1"},
                }
            },
        ),
        padding_top=["15px", "18px", "20px"],
        margin_bottom=["15px", "18px", "20px"],
        margin_top=["15px", "18px", "20px"],
        width="100vw",
        justify_items="center",
        height=["280px", "320px", "350px"],
        background_image="url('https://images.unsplash.com/photo-1673526759321-3b3da765ffd8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        background_size="cover",
        background_repeat="no-repeat",
        background_position="center",
        margin_left="calc(-50vw + 50%)",
        display="flex",
        flex_direction="column",
        align_items="center",
        justify_content="center",
    )
