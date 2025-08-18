import reflex as rx
from portfolio.pages.homepage.sections.helper_functions import tag_item
from portfolio.pages.homepage.utilities.languages import LanguageState


def about_me_section():
    return rx.box(
        rx.heading(
            LanguageState.about_me_heading,
            size="8",
            weight="bold",
            color="white",
            margin_bottom="50px",
            text_align="center",
        ),
        # Główny opis
        rx.text(
            LanguageState.about_me_description,
            size="4",
            color="rgba(255, 255, 255, 0.9)",
            line_height="1.6",
            text_align="center",
            max_width="800px",
            margin="0 auto 60px auto",
        ),
        # Wykształcenie
        rx.box(
            rx.heading(
                LanguageState.education_heading,
                size="6",
                weight="bold",
                color="white",
                margin_bottom="30px",
                text_align="center",
            ),
            # Technikum
            rx.box(
                rx.box(
                    rx.image(
                        src="https://m.powiatszczycienski.pl/2023/10/n/dji-0096-67351.jpg",
                        width="80px",
                        height="80px",
                        border_radius="10px",
                        bg="rgba(255, 255, 255, 0.1)",
                        margin_bottom="15px",
                        object_fit="cover",
                    ),
                    width="100px",
                    display="flex",
                    justify_content="center",
                ),
                rx.box(
                    rx.heading(
                        LanguageState.education_tech_school_title,
                        size="4",
                        color="white",
                        weight="bold",
                    ),
                    rx.text(
                        "2017-2021",
                        color="rgba(255, 255, 255, 0.7)",
                        size="3",
                        margin_bottom="10px",
                    ),
                    rx.text(
                        LanguageState.education_tech_school_desc,
                        color="rgba(255, 255, 255, 0.8)",
                        size="3",
                        line_height="1.5",
                        margin_bottom="15px",
                    ),
                    rx.box(
                        tag_item("C++", "rgba(52, 152, 219, 0.8)"),
                        tag_item("Databases", "rgba(155, 89, 182, 0.8)"),
                        tag_item("HTML/CSS", "rgba(230, 126, 34, 0.8)"),
                        tag_item("Computer networks", "rgba(52, 73, 94, 0.8)"),
                        display="flex",
                        gap="8px",
                        flex_wrap="wrap",
                    ),
                    flex="1",
                ),
                display="flex",
                gap="20px",
                align_items="flex-start",
                padding="25px",
                bg="rgba(255, 255, 255, 0.05)",
                border_radius="20px",
                backdrop_filter="blur(10px)",
                border="1px solid rgba(255, 255, 255, 0.1)",
                margin_bottom="20px",
            ),
            # Uniwersytet
            rx.box(
                rx.box(
                    rx.image(
                        src="https://www.skanska.pl/49bff4/globalassets/externalcontent2/project/regionalne-centrum-informatyczne-uwm-olsztyn/14526e68-edf6-4606-b2c7-2099d27a6713.1.jpg?height=524&width=932&scale=both&mode=crop&bgcolor=",  # Placeholder dla logo UWM
                        width="80px",
                        height="80px",
                        border_radius="10px",
                        bg="rgba(255, 255, 255, 0.1)",
                        margin_bottom="15px",
                        object_fit="cover",
                    ),
                    width="100px",
                    display="flex",
                    justify_content="center",
                ),
                rx.box(
                    rx.heading(
                        LanguageState.education_university_title,
                        size="4",
                        color="white",
                        weight="bold",
                    ),
                    rx.text(
                        "2021-2025",
                        color="rgba(255, 255, 255, 0.7)",
                        size="3",
                        margin_bottom="10px",
                    ),
                    rx.text(
                        LanguageState.education_university_desc,
                        color="rgba(255, 255, 255, 0.8)",
                        size="3",
                        line_height="1.5",
                        margin_bottom="15px",
                    ),
                    rx.box(
                        tag_item("Python", "rgba(52, 152, 219, 0.8)"),
                        tag_item("Java", "rgba(231, 76, 60, 0.8)"),
                        tag_item("Algorithms", "rgba(155, 89, 182, 0.8)"),
                        tag_item("Data structures", "rgba(46, 204, 113, 0.8)"),
                        tag_item("OOP", "rgba(241, 196, 15, 0.8)"),
                        tag_item("Software engineering", "rgba(52, 73, 94, 0.8)"),
                        display="flex",
                        gap="8px",
                        flex_wrap="wrap",
                    ),
                    flex="1",
                ),
                display="flex",
                gap="20px",
                align_items="flex-start",
                padding="25px",
                bg="rgba(255, 255, 255, 0.05)",
                border_radius="20px",
                backdrop_filter="blur(10px)",
                border="1px solid rgba(255, 255, 255, 0.1)",
            ),
            max_width="800px",
            margin="0 auto 60px auto",
        ),
        # Działalność w kole naukowym
        rx.box(
            rx.heading(
                LanguageState.science_club_heading,
                size="6",
                weight="bold",
                color="white",
                margin_bottom="30px",
                text_align="center",
            ),
            rx.box(
                rx.box(
                    rx.image(
                        src="/IMG_1540.jpg",  # Placeholder dla zdjęcia z koła naukowego
                        width="200px",
                        height="200px",
                        border_radius="15px",
                        object_fit="cover",
                        border="2px solid rgba(255, 255, 255, 0.2)",
                        style={
                            "image_rendering": "high-quality",  # Wysoka jakość
                            "image_rendering": "-webkit-optimize-contrast",  # Webkit optymalizacja
                            "backface_visibility": "hidden",  # Wygładza rendering
                            "transform": "translateZ(0)",  # Hardware acceleration
                        },
                    ),
                    width="220px",
                    display="flex",
                    justify_content="center",
                ),
                rx.box(
                    rx.heading(
                        LanguageState.science_club_title,
                        size="4",
                        color="white",
                        weight="bold",
                    ),
                    rx.text(
                        LanguageState.science_club_role,
                        color="rgba(255, 255, 255, 0.7)",
                        size="3",
                        margin_bottom="15px",
                    ),
                    rx.text(
                        LanguageState.science_club_desc,
                        color="rgba(255, 255, 255, 0.8)",
                        size="3",
                        line_height="1.5",
                        margin_bottom="15px",
                    ),
                    rx.box(
                        tag_item("Git", "rgba(231, 76, 60, 0.8)"),
                        tag_item("Teamwork", "rgba(46, 204, 113, 0.8)"),
                        tag_item("Project Management", "rgba(155, 89, 182, 0.8)"),
                        tag_item("Research", "rgba(52, 152, 219, 0.8)"),
                        tag_item("Workshops", "rgba(241, 196, 15, 0.8)"),
                        display="flex",
                        gap="8px",
                        flex_wrap="wrap",
                    ),
                    flex="1",
                ),
                display="flex",
                gap="25px",
                align_items="flex-start",
                padding="30px",
                bg="rgba(255, 255, 255, 0.05)",
                border_radius="20px",
                backdrop_filter="blur(10px)",
                border="1px solid rgba(255, 255, 255, 0.1)",
            ),
            max_width="800px",
            margin="0 auto",
        ),
        padding="80px 20px",
        background="linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(30, 30, 60, 0.9) 50%, rgba(0, 0, 0, 0.8) 100%)",
        backdrop_filter="blur(20px)",
        width="100vw",
        margin_left="calc(-50vw + 50%)",
    )
