import { createContext, useContext, useMemo, useReducer, useState, createElement, useEffect } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "$/utils/state"
import { jsx } from "@emotion/react";

export const initialState = {"reflex___state____state": {"is_hydrated_rx_state_": false, "router_rx_state_": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "cookie": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": "", "raw_headers": {}}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}, "url": "", "route_id": ""}}, "reflex___state____state.portfolio___api___api_test____stats_state": {"error_message_rx_state_": "", "is_loading_rx_state_": false, "stats_rx_state_": {}}, "reflex___state____state.portfolio___backend____backend_test_state": {"current_time_rx_state_": "", "messages_rx_state_": [], "server_status_rx_state_": "🟢 Online", "user_message_rx_state_": "", "visit_count_rx_state_": 0}, "reflex___state____state.portfolio___pages___homepage___utilities___languages____language_state": {"about_me_description_rx_state_": "Jestem pasjonatem technologii z pasją do programowania i tworzenia innowacyjnych rozwiązań. Specjalizuję się w sztucznej inteligencji oraz rozwoju aplikacji w Pythonie i C#. Fascynuje mnie eksplorowanie nowych technologii AI, tworzenie gier i stron internetowych. Każdy projekt traktuję jako okazję do nauki i doskonalenia swoich umiejętności programistycznych.", "about_me_heading_rx_state_": "O mnie", "education_heading_rx_state_": "Wykształcenie", "education_tech_school_dates_rx_state_": "2017-2021", "education_tech_school_desc_rx_state_": "Podstawy programowania, bazy danych, sieci komputerowe. Pierwszy kontakt z językami programowania i technologiami webowymi.", "education_tech_school_title_rx_state_": "Technikum Informatyczne", "education_university_dates_rx_state_": "2021-2025", "education_university_desc_rx_state_": "Informatyka, specjalizacja w inżynierii oprogramowania. Pogłębianie wiedzy z zakresu algorytmów, struktury danych i nowoczesnych technologii.", "education_university_title_rx_state_": "Uniwersytet Warmińsko-Mazurski", "header_title_rx_state_": "Portfolio Michała Sztymelskiego", "language_rx_state_": "pl", "project_neptun_desc_rx_state_": "Neptun's Eye to narzędzie do segmentacji chmur punktów oparte na uczeniu maszynowym, opracowane we współpracy z firmą Visimind. W ramach projektu przeprowadzono dogłębną analizę i przetwarzanie danych geoprzestrzennych, a następnie wytrenowano i zoptymalizowano modele klasyfikacyjne, takie jak ExtraTreesClassifier i RandomForestClassifier, śledząc eksperymenty za pomocą Weights and Biases oraz Optuna. Efektem końcowym jest aplikacja desktopowa z interfejsem graficznym, która umożliwia użytkownikom łatwą wizualizację i klasyfikację chmur punktów.", "project_neptun_title_rx_state_": "Neptun's Eye", "project_portfolio_desc_rx_state_": "Nowoczesne portfolio osobiste zaprojektowane w frameworku Reflex, prezentujące moje doświadczenie i umiejętności programistyczne. Strona zawiera interaktywne sekcje z informacjami o wykształceniu, projektach oraz technologiach. Responsywny design z animacjami i eleganckim interfejsem użytkownika.", "project_portfolio_title_rx_state_": "Portfolio website", "projects_dev_title_rx_state_": "Projekty Programistyczne", "projects_diy_desc_rx_state_": "Moje pierwsze kroki w świecie technologii rozpoczęły się od projektów DIY. Budowanie prostych układów elektronicznych w tym własnego głośnika aktywnego. Te doświadczenia nauczyły mnie podstaw elektroniki i programowania mikrokontrolerów, co później przełożyło się na pasję do tworzenia oprogramowania.", "projects_diy_title_rx_state_": "Początki - Projekty DIY", "projects_heading_rx_state_": "Projekty", "science_club_desc_rx_state_": "Uczestnictwo w projektach, organizacja warsztatów programistycznych, współpraca przy tworzeniu bota dla serwera Discord. Rozwój umiejętności pracy w zespole i zarządzania projektami. Redakcja strony Koła na Facebooku.", "science_club_heading_rx_state_": "Działalność w Kole Naukowym", "science_club_role_rx_state_": "Członek | 2023-obecnie", "science_club_title_rx_state_": "Koło Naukowe Sztucznej Inteligencji ,,Czarna Magia\"", "texts_rx_state_": {"ui_language": "Język", "ui_github_button": "Zobacz więcej projektów na GitHub", "header_title": "Portfolio Michała Sztymelskiego", "about_me_heading": "O mnie", "about_me_description": "Jestem pasjonatem technologii z pasją do programowania i tworzenia innowacyjnych rozwiązań. Specjalizuję się w sztucznej inteligencji oraz rozwoju aplikacji w Pythonie i C#. Fascynuje mnie eksplorowanie nowych technologii AI, tworzenie gier i stron internetowych. Każdy projekt traktuję jako okazję do nauki i doskonalenia swoich umiejętności programistycznych.", "education_heading": "Wykształcenie", "education_tech_school_title": "Technikum Informatyczne", "education_tech_school_dates": "2017-2021", "education_tech_school_desc": "Podstawy programowania, bazy danych, sieci komputerowe. Pierwszy kontakt z językami programowania i technologiami webowymi.", "education_university_title": "Uniwersytet Warmińsko-Mazurski", "education_university_dates": "2021-2025", "education_university_desc": "Informatyka, specjalizacja w inżynierii oprogramowania. Pogłębianie wiedzy z zakresu algorytmów, struktury danych i nowoczesnych technologii.", "science_club_heading": "Działalność w Kole Naukowym", "science_club_title": "Koło Naukowe Sztucznej Inteligencji ,,Czarna Magia\"", "science_club_role": "Członek | 2023-obecnie", "science_club_desc": "Uczestnictwo w projektach, organizacja warsztatów programistycznych, współpraca przy tworzeniu bota dla serwera Discord. Rozwój umiejętności pracy w zespole i zarządzania projektami. Redakcja strony Koła na Facebooku.", "projects_heading": "Projekty", "projects_diy_title": "Początki - Projekty DIY", "projects_diy_desc": "Moje pierwsze kroki w świecie technologii rozpoczęły się od projektów DIY. Budowanie prostych układów elektronicznych w tym własnego głośnika aktywnego. Te doświadczenia nauczyły mnie podstaw elektroniki i programowania mikrokontrolerów, co później przełożyło się na pasję do tworzenia oprogramowania.", "projects_dev_title": "Projekty Programistyczne", "project_neptun_title": "Neptun's Eye", "project_neptun_desc": "Neptun's Eye to narzędzie do segmentacji chmur punktów oparte na uczeniu maszynowym, opracowane we współpracy z firmą Visimind. W ramach projektu przeprowadzono dogłębną analizę i przetwarzanie danych geoprzestrzennych, a następnie wytrenowano i zoptymalizowano modele klasyfikacyjne, takie jak ExtraTreesClassifier i RandomForestClassifier, śledząc eksperymenty za pomocą Weights and Biases oraz Optuna. Efektem końcowym jest aplikacja desktopowa z interfejsem graficznym, która umożliwia użytkownikom łatwą wizualizację i klasyfikację chmur punktów.", "project_portfolio_title": "Portfolio website", "project_portfolio_desc": "Nowoczesne portfolio osobiste zaprojektowane w frameworku Reflex, prezentujące moje doświadczenie i umiejętności programistyczne. Strona zawiera interaktywne sekcje z informacjami o wykształceniu, projektach oraz technologiach. Responsywny design z animacjami i eleganckim interfejsem użytkownika.", "tag_databases": "Bazy danych", "tag_networks": "Sieci", "tag_algorithms": "Algorytmy", "tag_data_structures": "Struktury danych", "tag_software_engineering": "Inżynieria oprogramowania", "tag_teamwork": "Teamwork", "tag_project_management": "Project Management", "tag_research": "Research", "tag_workshops": "Workshops", "tag_ml": "ML", "tag_exp_tracking": "Experiment tracking", "tag_microservices": "Mikrousługi", "tag_python": "Python", "tag_cpp": "C++", "tag_html_css": "HTML/CSS", "tag_java": "Java", "tag_oop": "OOP", "tag_git": "Git", "tag_tkinter": "TKinter", "tag_flask": "Flask", "tag_reflex": "Reflex"}, "ui_github_button_rx_state_": "Zobacz więcej projektów na GitHub", "ui_language_rx_state_": "Język"}, "reflex___state____state.reflex___state____frontend_event_exception_state": {}, "reflex___state____state.reflex___state____on_load_internal_state": {}, "reflex___state____state.reflex___state____update_vars_internal_state": {}}

export const defaultColorMode = "system"
export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  reflex___state____state: createContext(null),
  reflex___state____state__portfolio___api___api_test____stats_state: createContext(null),
  reflex___state____state__portfolio___backend____backend_test_state: createContext(null),
  reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state: createContext(null),
  reflex___state____state__reflex___state____frontend_event_exception_state: createContext(null),
  reflex___state____state__reflex___state____on_load_internal_state: createContext(null),
  reflex___state____state__reflex___state____update_vars_internal_state: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}, "session_storage": {}}

export const state_name = "reflex___state____state"

export const exception_state_name = "reflex___state____state.reflex___state____frontend_event_exception_state"

// These events are triggered on initial load and each page navigation.
export const onLoadInternalEvent = () => {
    const internal_events = [];

    // Get tracked cookie and local storage vars to send to the backend.
    const client_storage_vars = hydrateClientStorage(clientStorage);
    // But only send the vars if any are actually set in the browser.
    if (client_storage_vars && Object.keys(client_storage_vars).length !== 0) {
        internal_events.push(
            Event(
                'reflex___state____state.reflex___state____update_vars_internal_state.update_vars_internal',
                {vars: client_storage_vars},
            ),
        );
    }

    // `on_load_internal` triggers the correct on_load event(s) for the current page.
    // If the page does not define any on_load event, this will just set `is_hydrated = true`.
    internal_events.push(Event('reflex___state____state.reflex___state____on_load_internal_state.on_load_internal'));

    return internal_events;
}

// The following events are sent when the websocket connects or reconnects.
export const initialEvents = () => [
    Event('reflex___state____state.hydrate'),
    ...onLoadInternalEvent()
]

export const isDevMode = true

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return createElement(
    UploadFilesContext.Provider,
    { value: [filesById, setFilesById] },
    children
  );
}

export function ClientSide(component) {
  return ({ children, ...props }) => {
    const [Component, setComponent] = useState(null);
    useEffect(() => {
      setComponent(component);
    }, []);
    return Component ? jsx(Component, props, children) : null;
  };
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectErrors] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return createElement(
    EventLoopContext.Provider,
    { value: [addEvents, connectErrors] },
    children
  );
}

export function StateProvider({ children }) {
  const [reflex___state____state, dispatch_reflex___state____state] = useReducer(applyDelta, initialState["reflex___state____state"])
  const [reflex___state____state__portfolio___api___api_test____stats_state, dispatch_reflex___state____state__portfolio___api___api_test____stats_state] = useReducer(applyDelta, initialState["reflex___state____state.portfolio___api___api_test____stats_state"])
  const [reflex___state____state__portfolio___backend____backend_test_state, dispatch_reflex___state____state__portfolio___backend____backend_test_state] = useReducer(applyDelta, initialState["reflex___state____state.portfolio___backend____backend_test_state"])
  const [reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state, dispatch_reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state] = useReducer(applyDelta, initialState["reflex___state____state.portfolio___pages___homepage___utilities___languages____language_state"])
  const [reflex___state____state__reflex___state____frontend_event_exception_state, dispatch_reflex___state____state__reflex___state____frontend_event_exception_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____frontend_event_exception_state"])
  const [reflex___state____state__reflex___state____on_load_internal_state, dispatch_reflex___state____state__reflex___state____on_load_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____on_load_internal_state"])
  const [reflex___state____state__reflex___state____update_vars_internal_state, dispatch_reflex___state____state__reflex___state____update_vars_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____update_vars_internal_state"])
  const dispatchers = useMemo(() => {
    return {
      "reflex___state____state": dispatch_reflex___state____state,
      "reflex___state____state.portfolio___api___api_test____stats_state": dispatch_reflex___state____state__portfolio___api___api_test____stats_state,
      "reflex___state____state.portfolio___backend____backend_test_state": dispatch_reflex___state____state__portfolio___backend____backend_test_state,
      "reflex___state____state.portfolio___pages___homepage___utilities___languages____language_state": dispatch_reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state,
      "reflex___state____state.reflex___state____frontend_event_exception_state": dispatch_reflex___state____state__reflex___state____frontend_event_exception_state,
      "reflex___state____state.reflex___state____on_load_internal_state": dispatch_reflex___state____state__reflex___state____on_load_internal_state,
      "reflex___state____state.reflex___state____update_vars_internal_state": dispatch_reflex___state____state__reflex___state____update_vars_internal_state,
    }
  }, [])

  return (
    createElement(StateContexts.reflex___state____state,{value: reflex___state____state},
    createElement(StateContexts.reflex___state____state__portfolio___api___api_test____stats_state,{value: reflex___state____state__portfolio___api___api_test____stats_state},
    createElement(StateContexts.reflex___state____state__portfolio___backend____backend_test_state,{value: reflex___state____state__portfolio___backend____backend_test_state},
    createElement(StateContexts.reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state,{value: reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state},
    createElement(StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state,{value: reflex___state____state__reflex___state____frontend_event_exception_state},
    createElement(StateContexts.reflex___state____state__reflex___state____on_load_internal_state,{value: reflex___state____state__reflex___state____on_load_internal_state},
    createElement(StateContexts.reflex___state____state__reflex___state____update_vars_internal_state,{value: reflex___state____state__reflex___state____update_vars_internal_state},
    createElement(DispatchContext, {value: dispatchers}, children)
)))))))  )
}