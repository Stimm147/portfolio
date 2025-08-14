

import { Fragment, useCallback, useContext, useEffect } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, Container as RadixThemesContainer, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Text as RadixThemesText } from "@radix-ui/themes"
import { EventLoopContext, StateContexts } from "$/utils/context"
import { Event } from "$/utils/state"
import { jsx } from "@emotion/react"



function Heading_279914617413677419365261540558572408763 () {
  
  const reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state = useContext(StateContexts.reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state)





  
  return (
    jsx(
RadixThemesHeading,
{css:({ ["color"] : "white", ["marginBottom"] : "50px", ["textAlign"] : "center" }),size:"8",weight:"bold"},
reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state.about_me_heading_rx_state_
,)
  )
}

function Heading_39052591923318787651948121919202221939 () {
  
  const reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state = useContext(StateContexts.reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state)





  
  return (
    jsx(
RadixThemesHeading,
{css:({ ["color"] : "white" }),size:"4",weight:"bold"},
reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state.education_tech_school_title_rx_state_
,)
  )
}

function Heading_6857205450975771355094728674330775462 () {
  
  const reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state = useContext(StateContexts.reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state)





  
  return (
    jsx(
RadixThemesHeading,
{css:({ ["color"] : "white", ["marginBottom"] : "40px", ["textAlign"] : "center" }),size:"6",weight:"bold"},
reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state.projects_dev_title_rx_state_
,)
  )
}

function Text_310959894139012117956850489527508938562 () {
  
  const reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state = useContext(StateContexts.reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state)





  
  return (
    jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "rgba(255, 255, 255, 0.8)", ["lineHeight"] : "1.5", ["marginBottom"] : "15px" }),size:"3"},
reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state.science_club_desc_rx_state_
,)
  )
}

function Text_323806693666451621080250059059732102158 () {
  
  const reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state = useContext(StateContexts.reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state)





  
  return (
    jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "rgba(255, 255, 255, 0.9)", ["lineHeight"] : "1.6", ["textAlign"] : "center", ["maxWidth"] : "800px", ["margin"] : "0 auto 60px auto" }),size:"4"},
reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state.about_me_description_rx_state_
,)
  )
}

function Text_245045560662965167136553548447812215977 () {
  
  const reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state = useContext(StateContexts.reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state)





  
  return (
    jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "rgba(255, 255, 255, 0.8)" }),size:"3",weight:"medium"},
reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state.ui_language_rx_state_
,)
  )
}

function Text_263638393818943665126327973865612532454 () {
  
  const reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state = useContext(StateContexts.reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state)





  
  return (
    jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "rgba(255, 255, 255, 0.8)", ["lineHeight"] : "1.5", ["marginBottom"] : "15px" }),size:"3"},
reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state.education_tech_school_desc_rx_state_
,)
  )
}

function Button_205938665085683712002304504500917142599 () {
  
  const reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state = useContext(StateContexts.reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_a2d4c00f965921bc65ea424561d6d54a = useCallback(((_e) => (addEvents([(Event("reflex___state____state.portfolio___pages___homepage___utilities___languages____language_state.set_language", ({ ["lang"] : "en" }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{color:"gray",css:({ ["background"] : ((reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state.language_rx_state_ === "en") ? "rgba(255, 255, 255, 0.15)" : "transparent"), ["color"] : "white" }),onClick:on_click_a2d4c00f965921bc65ea424561d6d54a,variant:"outline"},
"English \ud83c\uddec\ud83c\udde7"
,)
  )
}

function Heading_239445525190337970428296548129170536508 () {
  
  const reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state = useContext(StateContexts.reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state)





  
  return (
    jsx(
RadixThemesHeading,
{css:({ ["color"] : "white" }),size:"4",weight:"bold"},
reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state.education_university_title_rx_state_
,)
  )
}

function Heading_134465323287685679940543359158492046427 () {
  
  const reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state = useContext(StateContexts.reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state)





  
  return (
    jsx(
RadixThemesHeading,
{css:({ ["color"] : "white" }),size:"4",weight:"bold"},
reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state.science_club_title_rx_state_
,)
  )
}

function Text_38365040025549622317118887538402721497 () {
  
  const reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state = useContext(StateContexts.reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state)





  
  return (
    jsx(
RadixThemesText,
{as:"p",css:({ ["@keyframes slideInFromTop"] : ({ ["0%"] : ({ ["transform"] : "translateY(-10px)", ["opacity"] : "0" }), ["100%"] : ({ ["transform"] : "translateY(0)", ["opacity"] : "1" }) }), ["@media screen and (min-width: 0)"] : ({ ["paddingTop"] : "15px", ["paddingInlineStart"] : "15px", ["paddingInlineEnd"] : "15px" }), ["@media screen and (min-width: 30em)"] : ({ ["paddingTop"] : "20px", ["paddingInlineStart"] : "30px", ["paddingInlineEnd"] : "30px" }), ["@media screen and (min-width: 48em)"] : ({ ["paddingTop"] : "23px", ["paddingInlineStart"] : "0px", ["paddingInlineEnd"] : "0px" }), ["textAlign"] : "center", ["animation"] : "slideInFromTop 1s ease-out 0.3s both" }),size:"6"},
reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state.header_title_rx_state_
,)
  )
}

function Heading_254053822519078103905793449786562108827 () {
  
  const reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state = useContext(StateContexts.reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state)





  
  return (
    jsx(
RadixThemesHeading,
{css:({ ["color"] : "white", ["marginBottom"] : "30px", ["textAlign"] : "center" }),size:"6",weight:"bold"},
reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state.projects_diy_title_rx_state_
,)
  )
}

function Text_158941478489407982337871046549430065629 () {
  
  const reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state = useContext(StateContexts.reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state)





  
  return (
    jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "rgba(255, 255, 255, 0.9)", ["lineHeight"] : "1.6" }),size:"4"},
reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state.projects_diy_desc_rx_state_
,)
  )
}

function Button_65374715585810087314022521837929722857 () {
  
  const reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state = useContext(StateContexts.reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state)





  
  return (
    jsx(
RadixThemesButton,
{css:({ ["background"] : "rgba(255, 255, 255, 0.1)", ["color"] : "white", ["padding"] : "15px 30px", ["borderRadius"] : "25px", ["border"] : "2px solid rgba(255, 255, 255, 0.3)", ["fontSize"] : "16px", ["fontWeight"] : "600", ["cursor"] : "pointer", ["backdropFilter"] : "blur(10px)", ["transition"] : "all 0.3s ease", ["&:hover"] : ({ ["background"] : "rgba(255, 255, 255, 0.2)", ["borderColor"] : "rgba(255, 255, 255, 0.5)", ["transform"] : "translateY(-2px)" }) })},
reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state.ui_github_button_rx_state_
,)
  )
}

function Heading_213097402563311620511250141085512231906 () {
  
  const reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state = useContext(StateContexts.reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state)





  
  return (
    jsx(
RadixThemesHeading,
{css:({ ["color"] : "white", ["marginBottom"] : "30px", ["textAlign"] : "center" }),size:"6",weight:"bold"},
reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state.education_heading_rx_state_
,)
  )
}

function Text_60709725546142779275448662698496563610 () {
  
  const reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state = useContext(StateContexts.reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state)





  
  return (
    jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "rgba(255, 255, 255, 0.9)", ["lineHeight"] : "1.6" }),size:"4"},
reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state.project_portfolio_desc_rx_state_
,)
  )
}

function Text_267280539916237740855703502993944408297 () {
  
  const reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state = useContext(StateContexts.reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state)





  
  return (
    jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "rgba(255, 255, 255, 0.8)", ["lineHeight"] : "1.5", ["marginBottom"] : "15px" }),size:"3"},
reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state.education_university_desc_rx_state_
,)
  )
}

function Button_317231321818890841808969074639717747451 () {
  
  const reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state = useContext(StateContexts.reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_ac4a430241e492f2e55eb5450cbff611 = useCallback(((_e) => (addEvents([(Event("reflex___state____state.portfolio___pages___homepage___utilities___languages____language_state.set_language", ({ ["lang"] : "pl" }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{color:"gray",css:({ ["background"] : ((reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state.language_rx_state_ === "pl") ? "rgba(255, 255, 255, 0.15)" : "transparent"), ["color"] : "white" }),onClick:on_click_ac4a430241e492f2e55eb5450cbff611,variant:"outline"},
"Polski \ud83c\uddf5\ud83c\uddf1"
,)
  )
}

function Text_67482601148077570214352142622887777279 () {
  
  const reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state = useContext(StateContexts.reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state)





  
  return (
    jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "rgba(255, 255, 255, 0.7)", ["marginBottom"] : "15px" }),size:"3"},
reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state.science_club_role_rx_state_
,)
  )
}

function Heading_258701057591226925467507291473334742776 () {
  
  const reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state = useContext(StateContexts.reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state)





  
  return (
    jsx(
RadixThemesHeading,
{css:({ ["color"] : "white", ["marginBottom"] : "60px", ["textAlign"] : "center" }),size:"8",weight:"bold"},
reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state.projects_heading_rx_state_
,)
  )
}

function Text_286373201354884676721497478271400131257 () {
  
  const reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state = useContext(StateContexts.reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state)





  
  return (
    jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "rgba(255, 255, 255, 0.9)", ["lineHeight"] : "1.6" }),size:"4"},
reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state.project_neptun_desc_rx_state_
,)
  )
}

function Heading_223458313956183069204715732473950303501 () {
  
  const reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state = useContext(StateContexts.reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state)





  
  return (
    jsx(
RadixThemesHeading,
{css:({ ["color"] : "white", ["marginBottom"] : "30px", ["textAlign"] : "center" }),size:"6",weight:"bold"},
reflex___state____state__portfolio___pages___homepage___utilities___languages____language_state.science_club_heading_rx_state_
,)
  )
}

export default function Component() {
    




  return (
    jsx(
Fragment,
{},
jsx(
RadixThemesContainer,
{css:({ ["padding"] : "16px" }),size:"3"},
jsx(
RadixThemesBox,
{},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesBox,
{css:({ ["@media screen and (min-width: 0)"] : ({ ["paddingTop"] : "15px", ["marginBottom"] : "15px", ["marginTop"] : "15px", ["height"] : "280px" }), ["@media screen and (min-width: 30em)"] : ({ ["paddingTop"] : "18px", ["marginBottom"] : "18px", ["marginTop"] : "18px", ["height"] : "320px" }), ["@media screen and (min-width: 48em)"] : ({ ["paddingTop"] : "20px", ["marginBottom"] : "20px", ["marginTop"] : "20px", ["height"] : "350px" }), ["width"] : "100vw", ["justifyItems"] : "center", ["backgroundImage"] : "url('https://images.unsplash.com/photo-1673526759321-3b3da765ffd8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", ["backgroundSize"] : "cover", ["backgroundRepeat"] : "no-repeat", ["backgroundPosition"] : "center", ["marginLeft"] : "calc(-50vw + 50%)", ["display"] : "flex", ["flexDirection"] : "column", ["alignItems"] : "center", ["justifyContent"] : "center" })},
jsx("img",{css:({ ["@keyframes slideInFromTop"] : ({ ["0%"] : ({ ["transform"] : "translateY(-10px)", ["opacity"] : "0" }), ["100%"] : ({ ["transform"] : "translateY(0)", ["opacity"] : "1" }) }), ["@media screen and (min-width: 0)"] : ({ ["width"] : "180px", ["height"] : "180px" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "200px", ["height"] : "200px" }), ["@media screen and (min-width: 48em)"] : ({ ["width"] : "250px", ["height"] : "250px" }), ["borderRadius"] : "50%", ["background"] : "white", ["backgroundImage"] : "url('https://avatars.githubusercontent.com/u/98175327?v=4')", ["backgroundSize"] : "cover", ["backgroundRepeat"] : "no-repeat", ["backgroundPosition"] : "center", ["animation"] : "slideInFromTop 1s ease-out" })},)
,jsx(Text_38365040025549622317118887538402721497,{},)
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center", ["width"] : "100%" }),direction:"row",justify:"center",gap:"3"},
jsx(Text_245045560662965167136553548447812215977,{},)
,jsx(Button_317231321818890841808969074639717747451,{},)
,jsx(Button_205938665085683712002304504500917142599,{},)
,),jsx(
RadixThemesBox,
{css:({ ["padding"] : "80px 20px", ["background"] : "linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(30, 30, 60, 0.9) 50%, rgba(0, 0, 0, 0.8) 100%)", ["backdropFilter"] : "blur(20px)", ["width"] : "100vw", ["marginLeft"] : "calc(-50vw + 50%)" })},
jsx(Heading_279914617413677419365261540558572408763,{},)
,jsx(Text_323806693666451621080250059059732102158,{},)
,jsx(
RadixThemesBox,
{css:({ ["maxWidth"] : "800px", ["margin"] : "0 auto 60px auto" })},
jsx(Heading_213097402563311620511250141085512231906,{},)
,jsx(
RadixThemesBox,
{css:({ ["display"] : "flex", ["gap"] : "20px", ["alignItems"] : "flex-start", ["padding"] : "25px", ["background"] : "rgba(255, 255, 255, 0.05)", ["borderRadius"] : "20px", ["backdropFilter"] : "blur(10px)", ["border"] : "1px solid rgba(255, 255, 255, 0.1)", ["marginBottom"] : "20px" })},
jsx(
RadixThemesBox,
{css:({ ["width"] : "100px", ["display"] : "flex", ["justifyContent"] : "center" })},
jsx("img",{css:({ ["width"] : "80px", ["height"] : "80px", ["borderRadius"] : "10px", ["background"] : "rgba(255, 255, 255, 0.1)", ["marginBottom"] : "15px", ["objectFit"] : "cover" }),src:"https://m.powiatszczycienski.pl/2023/10/n/dji-0096-67351.jpg"},)
,),jsx(
RadixThemesBox,
{css:({ ["flex"] : "1" })},
jsx(Heading_39052591923318787651948121919202221939,{},)
,jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "rgba(255, 255, 255, 0.7)", ["marginBottom"] : "10px" }),size:"3"},
"2017-2021"
,),jsx(Text_263638393818943665126327973865612532454,{},)
,jsx(
RadixThemesBox,
{css:({ ["display"] : "flex", ["gap"] : "8px", ["flexWrap"] : "wrap" })},
jsx(
RadixThemesText,
{as:"p",css:({ ["background"] : "rgba(52, 152, 219, 0.8)", ["color"] : "white", ["padding"] : "5px 12px", ["borderRadius"] : "15px" }),size:"2"},
"C++"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["background"] : "rgba(155, 89, 182, 0.8)", ["color"] : "white", ["padding"] : "5px 12px", ["borderRadius"] : "15px" }),size:"2"},
"Bazy danych"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["background"] : "rgba(230, 126, 34, 0.8)", ["color"] : "white", ["padding"] : "5px 12px", ["borderRadius"] : "15px" }),size:"2"},
"HTML/CSS"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["background"] : "rgba(52, 73, 94, 0.8)", ["color"] : "white", ["padding"] : "5px 12px", ["borderRadius"] : "15px" }),size:"2"},
"Sieci"
,),),),),jsx(
RadixThemesBox,
{css:({ ["display"] : "flex", ["gap"] : "20px", ["alignItems"] : "flex-start", ["padding"] : "25px", ["background"] : "rgba(255, 255, 255, 0.05)", ["borderRadius"] : "20px", ["backdropFilter"] : "blur(10px)", ["border"] : "1px solid rgba(255, 255, 255, 0.1)" })},
jsx(
RadixThemesBox,
{css:({ ["width"] : "100px", ["display"] : "flex", ["justifyContent"] : "center" })},
jsx("img",{css:({ ["width"] : "80px", ["height"] : "80px", ["borderRadius"] : "10px", ["background"] : "rgba(255, 255, 255, 0.1)", ["marginBottom"] : "15px", ["objectFit"] : "cover" }),src:"https://www.skanska.pl/49bff4/globalassets/externalcontent2/project/regionalne-centrum-informatyczne-uwm-olsztyn/14526e68-edf6-4606-b2c7-2099d27a6713.1.jpg?height=524&width=932&scale=both&mode=crop&bgcolor="},)
,),jsx(
RadixThemesBox,
{css:({ ["flex"] : "1" })},
jsx(Heading_239445525190337970428296548129170536508,{},)
,jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "rgba(255, 255, 255, 0.7)", ["marginBottom"] : "10px" }),size:"3"},
"2021-2025"
,),jsx(Text_267280539916237740855703502993944408297,{},)
,jsx(
RadixThemesBox,
{css:({ ["display"] : "flex", ["gap"] : "8px", ["flexWrap"] : "wrap" })},
jsx(
RadixThemesText,
{as:"p",css:({ ["background"] : "rgba(52, 152, 219, 0.8)", ["color"] : "white", ["padding"] : "5px 12px", ["borderRadius"] : "15px" }),size:"2"},
"Python"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["background"] : "rgba(231, 76, 60, 0.8)", ["color"] : "white", ["padding"] : "5px 12px", ["borderRadius"] : "15px" }),size:"2"},
"Java"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["background"] : "rgba(155, 89, 182, 0.8)", ["color"] : "white", ["padding"] : "5px 12px", ["borderRadius"] : "15px" }),size:"2"},
"Algorithms"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["background"] : "rgba(46, 204, 113, 0.8)", ["color"] : "white", ["padding"] : "5px 12px", ["borderRadius"] : "15px" }),size:"2"},
"Data structures"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["background"] : "rgba(241, 196, 15, 0.8)", ["color"] : "white", ["padding"] : "5px 12px", ["borderRadius"] : "15px" }),size:"2"},
"OOP"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["background"] : "rgba(52, 73, 94, 0.8)", ["color"] : "white", ["padding"] : "5px 12px", ["borderRadius"] : "15px" }),size:"2"},
"In\u017cynieria oprogramowania"
,),),),),),jsx(
RadixThemesBox,
{css:({ ["maxWidth"] : "800px", ["margin"] : "0 auto" })},
jsx(Heading_223458313956183069204715732473950303501,{},)
,jsx(
RadixThemesBox,
{css:({ ["display"] : "flex", ["gap"] : "25px", ["alignItems"] : "flex-start", ["padding"] : "30px", ["background"] : "rgba(255, 255, 255, 0.05)", ["borderRadius"] : "20px", ["backdropFilter"] : "blur(10px)", ["border"] : "1px solid rgba(255, 255, 255, 0.1)" })},
jsx(
RadixThemesBox,
{css:({ ["width"] : "220px", ["display"] : "flex", ["justifyContent"] : "center" })},
jsx("img",{css:({ ["imageRendering"] : "-webkit-optimize-contrast", ["backfaceVisibility"] : "hidden", ["transform"] : "translateZ(0)", ["width"] : "200px", ["height"] : "200px", ["borderRadius"] : "15px", ["objectFit"] : "cover", ["border"] : "2px solid rgba(255, 255, 255, 0.2)" }),src:"/IMG_1540.jpg"},)
,),jsx(
RadixThemesBox,
{css:({ ["flex"] : "1" })},
jsx(Heading_134465323287685679940543359158492046427,{},)
,jsx(Text_67482601148077570214352142622887777279,{},)
,jsx(Text_310959894139012117956850489527508938562,{},)
,jsx(
RadixThemesBox,
{css:({ ["display"] : "flex", ["gap"] : "8px", ["flexWrap"] : "wrap" })},
jsx(
RadixThemesText,
{as:"p",css:({ ["background"] : "rgba(231, 76, 60, 0.8)", ["color"] : "white", ["padding"] : "5px 12px", ["borderRadius"] : "15px" }),size:"2"},
"Git"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["background"] : "rgba(46, 204, 113, 0.8)", ["color"] : "white", ["padding"] : "5px 12px", ["borderRadius"] : "15px" }),size:"2"},
"Teamwork"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["background"] : "rgba(155, 89, 182, 0.8)", ["color"] : "white", ["padding"] : "5px 12px", ["borderRadius"] : "15px" }),size:"2"},
"Project Management"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["background"] : "rgba(52, 152, 219, 0.8)", ["color"] : "white", ["padding"] : "5px 12px", ["borderRadius"] : "15px" }),size:"2"},
"Research"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["background"] : "rgba(241, 196, 15, 0.8)", ["color"] : "white", ["padding"] : "5px 12px", ["borderRadius"] : "15px" }),size:"2"},
"Workshops"
,),),),),),),jsx(
RadixThemesBox,
{css:({ ["padding"] : "80px 20px", ["background"] : "linear-gradient(135deg, rgba(20, 20, 40, 0.95) 0%, rgba(0, 0, 0, 0.9) 50%, rgba(40, 20, 60, 0.95) 100%)", ["backdropFilter"] : "blur(20px)", ["width"] : "100vw", ["marginLeft"] : "calc(-50vw + 50%)" })},
jsx(Heading_258701057591226925467507291473334742776,{},)
,jsx(
RadixThemesBox,
{css:({ ["maxWidth"] : "1000px", ["margin"] : "0 auto 80px auto" })},
jsx(Heading_254053822519078103905793449786562108827,{},)
,jsx(
RadixThemesBox,
{css:({ ["display"] : "flex", ["gap"] : "40px", ["alignItems"] : "center", ["padding"] : "30px", ["background"] : "rgba(255, 255, 255, 0.05)", ["borderRadius"] : "20px", ["backdropFilter"] : "blur(10px)", ["border"] : "1px solid rgba(255, 255, 255, 0.1)", ["flexWrap"] : "wrap" })},
jsx(
RadixThemesBox,
{css:({ ["width"] : "320px", ["display"] : "flex", ["justifyContent"] : "center" })},
jsx("img",{css:({ ["width"] : "300px", ["height"] : "200px", ["borderRadius"] : "15px", ["objectFit"] : "cover", ["border"] : "2px solid rgba(255, 255, 255, 0.2)" }),src:"/image.png"},)
,),jsx(
RadixThemesBox,
{css:({ ["flex"] : "1", ["display"] : "flex", ["alignItems"] : "center" })},
jsx(Text_158941478489407982337871046549430065629,{},)
,),),),jsx(
RadixThemesBox,
{css:({ ["maxWidth"] : "1200px", ["margin"] : "0 auto" })},
jsx(Heading_6857205450975771355094728674330775462,{},)
,jsx(
RadixThemesBox,
{css:({ ["display"] : "flex", ["gap"] : "40px", ["alignItems"] : "center", ["padding"] : "30px", ["background"] : "rgba(255, 255, 255, 0.05)", ["borderRadius"] : "20px", ["backdropFilter"] : "blur(10px)", ["border"] : "1px solid rgba(255, 255, 255, 0.1)", ["marginBottom"] : "30px", ["flexWrap"] : "wrap" })},
jsx(
RadixThemesBox,
{css:({ ["width"] : "370px", ["display"] : "flex", ["justifyContent"] : "center" })},
jsx("img",{css:({ ["width"] : "350px", ["height"] : "250px", ["borderRadius"] : "15px", ["objectFit"] : "cover", ["border"] : "2px solid rgba(255, 255, 255, 0.2)" }),src:"/segmentation.png"},)
,),jsx(
RadixThemesBox,
{css:({ ["flex"] : "1", ["display"] : "flex", ["flexDirection"] : "column", ["justifyContent"] : "center" })},
jsx(
RadixThemesHeading,
{css:({ ["color"] : "white", ["marginBottom"] : "15px" }),size:"5",weight:"bold"},
"Neptun's Eye"
,),jsx(
RadixThemesBox,
{css:({ ["display"] : "flex", ["gap"] : "8px", ["flexWrap"] : "wrap", ["marginBottom"] : "20px" })},
jsx(
RadixThemesText,
{as:"p",css:({ ["background"] : "rgba(52, 152, 219, 0.8)", ["color"] : "white", ["padding"] : "5px 12px", ["borderRadius"] : "15px" }),size:"2"},
"Python"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["background"] : "rgba(46, 204, 113, 0.8)", ["color"] : "white", ["padding"] : "5px 12px", ["borderRadius"] : "15px" }),size:"2"},
"TKinter"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["background"] : "rgba(231, 76, 60, 0.8)", ["color"] : "white", ["padding"] : "5px 12px", ["borderRadius"] : "15px" }),size:"2"},
"Flask"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["background"] : "rgba(155, 89, 182, 0.8)", ["color"] : "white", ["padding"] : "5px 12px", ["borderRadius"] : "15px" }),size:"2"},
"ML"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["background"] : "rgba(100, 89, 102, 0.8)", ["color"] : "white", ["padding"] : "5px 12px", ["borderRadius"] : "15px" }),size:"2"},
"Experiment tracking"
,),),jsx(Text_286373201354884676721497478271400131257,{},)
,),),jsx(
RadixThemesBox,
{css:({ ["display"] : "flex", ["gap"] : "40px", ["alignItems"] : "center", ["padding"] : "30px", ["background"] : "rgba(255, 255, 255, 0.05)", ["borderRadius"] : "20px", ["backdropFilter"] : "blur(10px)", ["border"] : "1px solid rgba(255, 255, 255, 0.1)", ["flexWrap"] : "wrap" })},
jsx(
RadixThemesBox,
{css:({ ["width"] : "370px", ["display"] : "flex", ["justifyContent"] : "center" })},
jsx("img",{css:({ ["width"] : "350px", ["height"] : "250px", ["borderRadius"] : "15px", ["objectFit"] : "cover", ["border"] : "2px solid rgba(255, 255, 255, 0.2)" }),src:"/portfolio.png"},)
,),jsx(
RadixThemesBox,
{css:({ ["flex"] : "1", ["display"] : "flex", ["flexDirection"] : "column", ["justifyContent"] : "center" })},
jsx(
RadixThemesHeading,
{css:({ ["color"] : "white", ["marginBottom"] : "15px" }),size:"5",weight:"bold"},
"Portfolio website"
,),jsx(
RadixThemesBox,
{css:({ ["display"] : "flex", ["gap"] : "8px", ["flexWrap"] : "wrap", ["marginBottom"] : "20px" })},
jsx(
RadixThemesText,
{as:"p",css:({ ["background"] : "rgba(52, 152, 219, 0.8)", ["color"] : "white", ["padding"] : "5px 12px", ["borderRadius"] : "15px" }),size:"2"},
"Python"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["background"] : "rgba(46, 204, 113, 0.8)", ["color"] : "white", ["padding"] : "5px 12px", ["borderRadius"] : "15px" }),size:"2"},
"Flask"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["background"] : "rgba(241, 196, 15, 0.8)", ["color"] : "white", ["padding"] : "5px 12px", ["borderRadius"] : "15px" }),size:"2"},
"Reflex"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["background"] : "rgba(231, 76, 60, 0.8)", ["color"] : "white", ["padding"] : "5px 12px", ["borderRadius"] : "15px" }),size:"2"},
"Mircoservices"
,),),jsx(Text_60709725546142779275448662698496563610,{},)
,),),),jsx(
RadixThemesBox,
{css:({ ["textAlign"] : "center", ["marginTop"] : "60px" })},
jsx(Button_65374715585810087314022521837929722857,{},)
,),),),),),jsx(
"title",
{},
"Portfolio | Index"
,),jsx("meta",{content:"favicon.ico",property:"og:image"},)
,)
  )
}
