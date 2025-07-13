

import { Fragment, useEffect } from "react"
import { Box as RadixThemesBox, Container as RadixThemesContainer, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Text as RadixThemesText } from "@radix-ui/themes"
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
{css:({ ["width"] : "100%", ["height"] : "100%" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["backgroundColor"] : "#4a4a4a", ["@media screen and (min-width: 0)"] : ({ ["width"] : "90%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "80%" }), ["@media screen and (min-width: 48em)"] : ({ ["width"] : "750px" }), ["@media screen and (min-width: 62em)"] : ({ ["width"] : "900px" }), ["marginInlineStart"] : "auto", ["marginInlineEnd"] : "auto", ["alignItems"] : "center", ["borderRadius"] : "15px", ["paddingBottom"] : "40px" }),direction:"column",gap:"3"},
jsx(
RadixThemesBox,
{css:({ ["paddingTop"] : "20px", ["marginTop"] : "20px", ["width"] : "90%", ["justifyItems"] : "center", ["height"] : "350px", ["backgroundImage"] : "url('https://images.unsplash.com/photo-1673526759321-3b3da765ffd8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", ["backgroundSize"] : "cover", ["backgroundRepeat"] : "no-repeat", ["backgroundPosition"] : "center", ["borderRadius"] : "15px" })},
jsx("img",{css:({ ["width"] : "250px", ["height"] : "250px", ["borderRadius"] : "50%", ["background"] : "white", ["backgroundImage"] : "url('https://avatars.githubusercontent.com/u/98175327?v=4')", ["backgroundSize"] : "cover", ["backgroundRepeat"] : "no-repeat", ["backgroundPosition"] : "center" })},)
,jsx(
RadixThemesText,
{as:"p",css:({ ["paddingTop"] : "23px" }),size:"6"},
"The Portfolio of Micha\u0142 Sztymelski"
,),),jsx(
Fragment,
{},
jsx(
RadixThemesBox,
{css:({ ["WebkitBackgroundClip"] : "text", ["backgroundClip"] : "text", ["WebkitTextFillColor"] : "transparent", ["color"] : "transparent", ["animation"] : "gradient_animation 1s ease infinite", ["padding"] : "1em", ["width"] : "90%", ["backgroundColor"] : "rgba(255, 255, 255, 0.15)", ["backdropFilter"] : "blur(10px) saturate(180%)", ["borderRadius"] : "15px", ["boxShadow"] : "0 8px 32px 0 gray", ["justifyItems"] : "center", ["backgroundImage"] : "linear-gradient(to right, lightcoral, lightgreen, lightblue, lightcoral)", ["backgroundSize"] : "400% auto" })},
jsx(
RadixThemesText,
{as:"p",size:"6"},
"Projects"
,),),jsx("div",{className:"rx-Html hidden-style",dangerouslySetInnerHTML:({ ["__html"] : "\n            <style>\n                @keyframes gradient_animation {\n                    0% {background-position: 0% 50%}50% {background-position: 100% 50%}100% {background-position: 0% 50%}\n                }\n            </style>\n        " })},)
,),jsx(
RadixThemesBox,
{css:({ ["width"] : "90%", ["borderRadius"] : "15px", ["boxShadow"] : "0 8px 32px 0 gray", ["justifyItems"] : "center", ["paddingBottom"] : "40px" })},
jsx(
Fragment,
{},
jsx(
RadixThemesBox,
{css:({ ["backgroundImage"] : "url(\"/segmentation.png\")", ["backgroundSize"] : "cover", ["backgroundRepeat"] : "no-repeat", ["backgroundPosition"] : "center", ["width"] : "400px", ["height"] : "170px", ["backgroundColor"] : "#ffffff", ["borderRadius"] : "15px", ["border"] : "1px solid rgba(0, 0, 0, 0.05)", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["flexDirection"] : "column", ["transform"] : "skewX(-20deg)", ["position"] : "relative", ["&:before"] : ({ ["content"] : "\"\"", ["position"] : "absolute", ["top"] : "0", ["left"] : "-40px", ["height"] : "100%", ["width"] : "4px", ["backgroundColor"] : "white", ["zIndex"] : "1" }), ["&:after"] : ({ ["content"] : "\"\"", ["position"] : "absolute", ["top"] : "0", ["right"] : "-40px", ["height"] : "100%", ["width"] : "4px", ["backgroundColor"] : "white", ["zIndex"] : "1" }), ["marginTop"] : "30px", ["marginBottom"] : "30px" })},
jsx(
RadixThemesText,
{as:"p",css:({ ["WebkitTextStroke"] : "1px black", ["textStroke"] : "1px black", ["backdropFilter"] : "blur(1px)", ["Webkitbackdropfilter"] : "blur(1px)", ["fontSize"] : "2em", ["fontWeight"] : "bold", ["color"] : "white", ["textAlign"] : "center", ["padding"] : "1em", ["transform"] : "skewX(20deg)", ["zIndex"] : "2", ["position"] : "relative" })},
"Neptun's Eye"
,),),),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["width"] : "90%", ["padding"] : "1em", ["borderRadius"] : "15px", ["boxShadow"] : "0 8px 32px 0 gray", ["alignItems"] : "flex-start", ["paddingTop"] : "20px", ["paddingBottom"] : "20px" }),direction:"column",gap:"3"},
jsx(
RadixThemesHeading,
{css:({ ["textAlign"] : "left", ["width"] : "100%" }),size:"6"},
"Technologies Used:"
,),jsx(
"ul",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["textAlign"] : "left", ["width"] : "100%", ["paddingLeft"] : "20px", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{},
"ML: Sklearn, Pandas, Laspy"
,),jsx(
"li",
{},
"Experiment Tracking: Weights and Biases, Optuna"
,),jsx(
"li",
{},
"GUI: customtkinter"
,),jsx(
"li",
{},
"Point cloud visualisation: pptk, polyscope, plotly"
,),jsx(
"li",
{},
"Version Control: Git & GitHub"
,),jsx(
"li",
{},
"Project Organization: GitHub Projects"
,),),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch", ["height"] : "1em" })},)
,jsx(
RadixThemesText,
{as:"p",css:({ ["textAlign"] : "left", ["width"] : "100%", ["lineHeight"] : "1.5" }),size:"4"},
"A group project I was part of during my studies. Its goal was to develop a desktop application for semantic segmentation of point clouds. We implemented a machine learning approach and experimented with various classifiers, such as Random Forests. We also built the desktop application in Python using `customtkinter`. During the project, I learned a great deal about teamwork, and we presented our progress weekly. Thanks to the application of agile project management techniques, the work proceeded smoothly."
,),),),),),),jsx(
"title",
{},
"Portfolio | Index"
,),jsx("meta",{content:"favicon.ico",property:"og:image"},)
,)
  )
}
