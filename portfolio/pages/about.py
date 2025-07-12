import reflex as rx


def kebab_case(s):
    return s.replace("_", "-")


def title_box():
    keyframes_gradient_animation = {
        "0%": {"background_position": "0% 50%"},
        "50%": {"background_position": "100% 50%"},
        "100%": {"background_position": "0% 50%"},
    }
    return (
        rx.box(  # 1st content section
            rx.text("Projects", size="6"),
            padding="1em",
            width="90%",
            background_color="rgba(255, 255, 255, 0.15)",
            backdrop_filter="blur(10px) saturate(180%)",
            border_radius="15px",
            box_shadow="0 8px 32px 0 gray",
            justify_items="center",
            background_image="linear-gradient(to right, lightcoral, lightgreen, lightblue, lightcoral)",  # Gradient z powtórzonym pierwszym kolorem na końcu
            background_size="400% auto",
            style={
                "-webkit-background-clip": "text",
                "backgroundClip": "text",
                "-webkit-text-fill-color": "transparent",
                "color": "transparent",
                "animation": "gradient_animation 1s ease infinite",
            },
        ),
        rx.html(
            f"""
            <style>
                @keyframes gradient_animation {{
                    {"".join([f"{key} {{{';'.join([f'{kebab_case(prop)}: {value}' for prop, value in rules.items()])}}}" for key, rules in keyframes_gradient_animation.items()])}
                }}
            </style>
        """,
            class_name="hidden-style",
        ),
    )


def parallelogram_card(
    project_name: str, skew_angle: str = "-20deg", image: str = ""
) -> rx.Component:
    """
    Tworzy pojedynczą kartę projektu w kształcie równoległoboku z pochylonymi liniami bocznymi.
    """

    text_skew_angle = (
        skew_angle.replace("-", "") if "-" in skew_angle else f"-{skew_angle}"
    )

    return (
        rx.box(
            rx.text(
                project_name,
                font_size="2em",
                font_weight="bold",
                color="white",
                text_align="center",
                padding="1em",
                transform=f"skewX({text_skew_angle})",
                z_index="2",
                position="relative",
                style={
                    "-webkit-text-stroke": "1px black",  # Szerokość i kolor obramowania
                    "text-stroke": "1px black",  # Standardowa właściwość
                    "backdropFilter": "blur(1px)",  # Moc rozmycia 15px
                    "-webkitBackdropFilter": "blur(1px)",  # Dla Safari
                },
            ),
            background_image=f'url("{image}")',
            background_size="cover",
            background_repeat="no-repeat",
            background_position="center",
            width="400px",
            height="170px",
            background_color="#ffffff",
            border_radius="15px",
            border="1px solid rgba(0, 0, 0, 0.05)",
            display="flex",
            align_items="center",
            justify_content="center",
            flex_direction="column",
            transform=f"skewX({skew_angle})",
            position="relative",
            _before={
                "content": '""',
                "position": "absolute",
                "top": "0",
                "left": "-40px",
                "height": "100%",
                "width": "4px",
                "background_color": "white",
                "z_index": "1",
            },
            _after={
                "content": '""',
                "position": "absolute",
                "top": "0",
                "right": "-40px",
                "height": "100%",
                "width": "4px",
                "background_color": "white",
                "z_index": "1",
            },
            margin_top="30px",
            margin_bottom="30px",
        ),
    )


def about_page() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.box(  # Image section
                rx.image(  # PFP placeholder
                    width="250px",
                    height="250px",
                    border_radius="50%",
                    bg="white",
                    background_image="url('https://avatars.githubusercontent.com/u/98175327?v=4')",
                    background_size="cover",
                    background_repeat="no-repeat",
                    background_position="center",
                ),
                rx.text(
                    "The Portfolio of Michał Sztymelski",
                    size="6",
                    padding_top="23px",
                ),
                padding_top="20px",
                margin_top="20px",
                width="90%",
                justify_items="center",
                height="350px",
                background_image="url('https://images.unsplash.com/photo-1673526759321-3b3da765ffd8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                background_size="cover",
                background_repeat="no-repeat",
                background_position="center",
                border_radius="15px",
            ),
            title_box(),  # Title section
            rx.box(  # 1st content section
                parallelogram_card(
                    "Neptun's Eye",
                    image="/segmentation.png",
                ),
                rx.vstack(
                    # Nagłówek dla sekcji technologii
                    rx.heading(
                        "Technologies Used:",
                        size="6",  # Większy rozmiar nagłówka
                        text_align="left",
                        width="100%",  # Nagłówek też niech zajmuje 100% dostępnej szerokości
                    ),
                    # Lista technologii
                    rx.unordered_list(
                        rx.list_item("ML: Sklearn, Pandas, Laspy"),
                        rx.list_item("Experiment Tracking: Weights and Biases, Optuna"),
                        rx.list_item("GUI: customtkinter"),
                        rx.list_item(
                            "Point cloud visualisation: pptk, polyscope, plotly"
                        ),
                        rx.list_item("Version Control: Git & GitHub"),
                        rx.list_item("Project Organization: GitHub Projects"),
                        text_align="left",
                        width="100%",
                        padding_left="20px",
                    ),
                    rx.spacer(height="1em"),  # Dodaj trochę pionowej przestrzeni
                    # Paragraf opisowy projektu
                    rx.text(
                        "A group project I was part of during my studies. "
                        "Its goal was to develop a desktop application for semantic segmentation of point clouds. "
                        "We implemented a machine learning approach and experimented with various classifiers, such as Random Forests. "
                        "We also built the desktop application in Python using `customtkinter`. "
                        "During the project, I learned a great deal about teamwork, and we presented our progress weekly. "
                        "Thanks to the application of agile project management techniques, the work proceeded smoothly.",
                        size="4",
                        text_align="left",
                        width="100%",
                        line_height="1.5",  # Poprawia czytelność długich bloków tekstu
                    ),
                    # Parametry dla całego vstack, który zawiera te elementy
                    width="90%",
                    padding="1em",
                    border_radius="15px",
                    box_shadow="0 8px 32px 0 gray",
                    align_items="flex-start",  # Wyśrodkowuje zawartość w pionie do lewej
                    padding_y="20px",  # Trochę więcej paddingu na górze i dole
                ),
                width="90%",
                border_radius="15px",
                box_shadow="0 8px 32px 0 gray",
                justify_items="center",
                padding_bottom="40px",
            ),
            background_color="#4a4a4a",
            width=["90%", "80%", "750px", "900px"],
            margin_x="auto",
            align_items="center",
            border_radius="15px",
            padding_bottom="40px",
        ),
        width="100%",
        height="100%",
    )
