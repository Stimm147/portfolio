

import { Fragment, useEffect } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, Container as RadixThemesContainer, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Text as RadixThemesText } from "@radix-ui/themes"
import { jsx } from "@emotion/react"



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
,jsx(
RadixThemesText,
{as:"p",css:({ ["@keyframes slideInFromTop"] : ({ ["0%"] : ({ ["transform"] : "translateY(-10px)", ["opacity"] : "0" }), ["100%"] : ({ ["transform"] : "translateY(0)", ["opacity"] : "1" }) }), ["@media screen and (min-width: 0)"] : ({ ["paddingTop"] : "15px", ["paddingInlineStart"] : "15px", ["paddingInlineEnd"] : "15px" }), ["@media screen and (min-width: 30em)"] : ({ ["paddingTop"] : "20px", ["paddingInlineStart"] : "30px", ["paddingInlineEnd"] : "30px" }), ["@media screen and (min-width: 48em)"] : ({ ["paddingTop"] : "23px", ["paddingInlineStart"] : "0px", ["paddingInlineEnd"] : "0px" }), ["textAlign"] : "center", ["animation"] : "slideInFromTop 1s ease-out 0.3s both" }),size:"6"},
"The Portfolio of Micha\u0142 Sztymelski"
,),),jsx(
RadixThemesBox,
{css:({ ["padding"] : "80px 20px", ["background"] : "linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(30, 30, 60, 0.9) 50%, rgba(0, 0, 0, 0.8) 100%)", ["backdropFilter"] : "blur(20px)", ["width"] : "100vw", ["marginLeft"] : "calc(-50vw + 50%)" })},
jsx(
RadixThemesHeading,
{css:({ ["color"] : "white", ["marginBottom"] : "50px", ["textAlign"] : "center" }),size:"8",weight:"bold"},
"O mnie"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "rgba(255, 255, 255, 0.9)", ["lineHeight"] : "1.6", ["textAlign"] : "center", ["maxWidth"] : "800px", ["margin"] : "0 auto 60px auto" }),size:"4"},
"Jestem pasjonatem technologii z pasj\u0105 do programowania i tworzenia innowacyjnych rozwi\u0105za\u0144. Specjalizuj\u0119 si\u0119 w sztucznej inteligencji oraz rozwoju aplikacji w Pythonie i C#. Fascynuje mnie eksplorowanie nowych technologii AI, tworzenie gier i stron internetowych. Ka\u017cdy projekt traktuj\u0119 jako okazj\u0119 do nauki i doskonalenia swoich umiej\u0119tno\u015bci programistycznych."
,),jsx(
RadixThemesBox,
{css:({ ["maxWidth"] : "800px", ["margin"] : "0 auto 60px auto" })},
jsx(
RadixThemesHeading,
{css:({ ["color"] : "white", ["marginBottom"] : "30px", ["textAlign"] : "center" }),size:"6",weight:"bold"},
"Wykszta\u0142cenie"
,),jsx(
RadixThemesBox,
{css:({ ["display"] : "flex", ["gap"] : "20px", ["alignItems"] : "flex-start", ["padding"] : "25px", ["background"] : "rgba(255, 255, 255, 0.05)", ["borderRadius"] : "20px", ["backdropFilter"] : "blur(10px)", ["border"] : "1px solid rgba(255, 255, 255, 0.1)", ["marginBottom"] : "20px" })},
jsx(
RadixThemesBox,
{css:({ ["width"] : "100px", ["display"] : "flex", ["justifyContent"] : "center" })},
jsx("img",{css:({ ["width"] : "80px", ["height"] : "80px", ["borderRadius"] : "10px", ["background"] : "rgba(255, 255, 255, 0.1)", ["marginBottom"] : "15px", ["objectFit"] : "cover" }),src:"https://m.powiatszczycienski.pl/2023/10/n/dji-0096-67351.jpg"},)
,),jsx(
RadixThemesBox,
{css:({ ["flex"] : "1" })},
jsx(
RadixThemesHeading,
{css:({ ["color"] : "white" }),size:"4",weight:"bold"},
"Technikum Informatyczne"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "rgba(255, 255, 255, 0.7)", ["marginBottom"] : "10px" }),size:"3"},
"2017-2021"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "rgba(255, 255, 255, 0.8)", ["lineHeight"] : "1.5", ["marginBottom"] : "15px" }),size:"3"},
"Podstawy programowania, bazy danych, sieci komputerowe. Pierwszy kontakt z j\u0119zykami programowania i technologiami webowymi."
,),jsx(
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
jsx(
RadixThemesHeading,
{css:({ ["color"] : "white" }),size:"4",weight:"bold"},
"Uniwersytet Warmi\u0144sko-Mazurski"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "rgba(255, 255, 255, 0.7)", ["marginBottom"] : "10px" }),size:"3"},
"2021-2025"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "rgba(255, 255, 255, 0.8)", ["lineHeight"] : "1.5", ["marginBottom"] : "15px" }),size:"3"},
"Informatyka, specjalizacja w in\u017cynierii oprogramowania. Pog\u0142\u0119bianie wiedzy z zakresu algorytm\u00f3w, struktury danych i nowoczesnych technologii."
,),jsx(
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
"Algorytmy"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["background"] : "rgba(46, 204, 113, 0.8)", ["color"] : "white", ["padding"] : "5px 12px", ["borderRadius"] : "15px" }),size:"2"},
"Struktury danych"
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
jsx(
RadixThemesHeading,
{css:({ ["color"] : "white", ["marginBottom"] : "30px", ["textAlign"] : "center" }),size:"6",weight:"bold"},
"Dzia\u0142alno\u015b\u0107 w Kole Naukowym"
,),jsx(
RadixThemesBox,
{css:({ ["display"] : "flex", ["gap"] : "25px", ["alignItems"] : "flex-start", ["padding"] : "30px", ["background"] : "rgba(255, 255, 255, 0.05)", ["borderRadius"] : "20px", ["backdropFilter"] : "blur(10px)", ["border"] : "1px solid rgba(255, 255, 255, 0.1)" })},
jsx(
RadixThemesBox,
{css:({ ["width"] : "220px", ["display"] : "flex", ["justifyContent"] : "center" })},
jsx("img",{css:({ ["imageRendering"] : "-webkit-optimize-contrast", ["backfaceVisibility"] : "hidden", ["transform"] : "translateZ(0)", ["width"] : "200px", ["height"] : "200px", ["borderRadius"] : "15px", ["objectFit"] : "cover", ["border"] : "2px solid rgba(255, 255, 255, 0.2)" }),src:"/IMG_1540.jpg"},)
,),jsx(
RadixThemesBox,
{css:({ ["flex"] : "1" })},
jsx(
RadixThemesHeading,
{css:({ ["color"] : "white" }),size:"4",weight:"bold"},
"Ko\u0142o Naukowe Sztucznej Inteligencji ,,Czarna Magia\""
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "rgba(255, 255, 255, 0.7)", ["marginBottom"] : "15px" }),size:"3"},
"Cz\u0142onek | 2023-obecnie"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "rgba(255, 255, 255, 0.8)", ["lineHeight"] : "1.5", ["marginBottom"] : "15px" }),size:"3"},
"Uczestnictwo w projektach, organizacja warsztat\u00f3w programistycznych, wsp\u00f3\u0142praca przy tworzeniu bota dla serwera Discord. Rozw\u00f3j umiej\u0119tno\u015bci pracy w zespole i zarz\u0105dzania projektami. Redakcja strony Ko\u0142a na Facebooku."
,),jsx(
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
jsx(
RadixThemesHeading,
{css:({ ["color"] : "white", ["marginBottom"] : "60px", ["textAlign"] : "center" }),size:"8",weight:"bold"},
"Projekty"
,),jsx(
RadixThemesBox,
{css:({ ["maxWidth"] : "1000px", ["margin"] : "0 auto 80px auto" })},
jsx(
RadixThemesHeading,
{css:({ ["color"] : "white", ["marginBottom"] : "30px", ["textAlign"] : "center" }),size:"6",weight:"bold"},
"Pocz\u0105tki - Projekty DIY"
,),jsx(
RadixThemesBox,
{css:({ ["display"] : "flex", ["gap"] : "40px", ["alignItems"] : "center", ["padding"] : "30px", ["background"] : "rgba(255, 255, 255, 0.05)", ["borderRadius"] : "20px", ["backdropFilter"] : "blur(10px)", ["border"] : "1px solid rgba(255, 255, 255, 0.1)", ["flexWrap"] : "wrap" })},
jsx(
RadixThemesBox,
{css:({ ["width"] : "320px", ["display"] : "flex", ["justifyContent"] : "center" })},
jsx("img",{css:({ ["width"] : "300px", ["height"] : "200px", ["borderRadius"] : "15px", ["objectFit"] : "cover", ["border"] : "2px solid rgba(255, 255, 255, 0.2)" }),src:"/image.png"},)
,),jsx(
RadixThemesBox,
{css:({ ["flex"] : "1", ["display"] : "flex", ["alignItems"] : "center" })},
jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "rgba(255, 255, 255, 0.9)", ["lineHeight"] : "1.6" }),size:"4"},
"Moje pierwsze kroki w \u015bwiecie technologii rozpocz\u0119\u0142y si\u0119 od projekt\u00f3w DIY. Budowanie prostych uk\u0142ad\u00f3w elektronicznych w tym w\u0142asnego g\u0142o\u015bnika aktywnego. Te do\u015bwiadczenia nauczy\u0142y mnie podstaw elektroniki i programowania mikrokontroler\u00f3w, co p\u00f3\u017aniej prze\u0142o\u017cy\u0142o si\u0119 na pasj\u0119 do tworzenia oprogramowania."
,),),),),jsx(
RadixThemesBox,
{css:({ ["maxWidth"] : "1200px", ["margin"] : "0 auto" })},
jsx(
RadixThemesHeading,
{css:({ ["color"] : "white", ["marginBottom"] : "40px", ["textAlign"] : "center" }),size:"6",weight:"bold"},
"Projekty Programistyczne"
,),jsx(
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
"OpenCV"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["background"] : "rgba(231, 76, 60, 0.8)", ["color"] : "white", ["padding"] : "5px 12px", ["borderRadius"] : "15px" }),size:"2"},
"Flask"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["background"] : "rgba(155, 89, 182, 0.8)", ["color"] : "white", ["padding"] : "5px 12px", ["borderRadius"] : "15px" }),size:"2"},
"ML"
,),),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "rgba(255, 255, 255, 0.9)", ["lineHeight"] : "1.6" }),size:"4"},
"Zaawansowany system analizy obraz\u00f3w podwodnych wykorzystuj\u0105cy sztuczn\u0105 inteligencj\u0119. Aplikacja potrafi identyfikowa\u0107 r\u00f3\u017cne gatunki ryb, analizowa\u0107 jako\u015b\u0107 wody oraz monitorowa\u0107 ekosystemy morskie. Projekt \u0142\u0105czy computer vision, machine learning i web development w jedn\u0105 kompleksow\u0105 platform\u0119."
,),),),jsx(
RadixThemesBox,
{css:({ ["display"] : "flex", ["gap"] : "40px", ["alignItems"] : "center", ["padding"] : "30px", ["background"] : "rgba(255, 255, 255, 0.05)", ["borderRadius"] : "20px", ["backdropFilter"] : "blur(10px)", ["border"] : "1px solid rgba(255, 255, 255, 0.1)", ["flexWrap"] : "wrap" })},
jsx(
RadixThemesBox,
{css:({ ["width"] : "370px", ["display"] : "flex", ["justifyContent"] : "center" })},
jsx("img",{css:({ ["width"] : "350px", ["height"] : "250px", ["borderRadius"] : "15px", ["objectFit"] : "cover", ["border"] : "2px solid rgba(255, 255, 255, 0.2)" }),src:"/api/placeholder/350/250"},)
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
,),),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "rgba(255, 255, 255, 0.9)", ["lineHeight"] : "1.6" }),size:"4"},
"Nowoczesne portfolio osobiste zaprojektowane w frameworku Reflex, prezentuj\u0105ce moje do\u015bwiadczenie i umiej\u0119tno\u015bci programistyczne. Strona zawiera interaktywne sekcje z informacjami o wykszta\u0142ceniu, projektach oraz technologiach. Responsywny design z animacjami i eleganckim interfejsem u\u017cytkownika."
,),),),),jsx(
RadixThemesBox,
{css:({ ["textAlign"] : "center", ["marginTop"] : "60px" })},
jsx(
RadixThemesButton,
{css:({ ["background"] : "rgba(255, 255, 255, 0.1)", ["color"] : "white", ["padding"] : "15px 30px", ["borderRadius"] : "25px", ["border"] : "2px solid rgba(255, 255, 255, 0.3)", ["fontSize"] : "16px", ["fontWeight"] : "600", ["cursor"] : "pointer", ["backdropFilter"] : "blur(10px)", ["transition"] : "all 0.3s ease", ["&:hover"] : ({ ["background"] : "rgba(255, 255, 255, 0.2)", ["borderColor"] : "rgba(255, 255, 255, 0.5)", ["transform"] : "translateY(-2px)" }) })},
"Zobacz wi\u0119cej projekt\u00f3w na GitHub"
,),),),),),),jsx(
"title",
{},
"Portfolio | Index"
,),jsx("meta",{content:"favicon.ico",property:"og:image"},)
,)
  )
}
