

import { Fragment, memo, useContext, useEffect } from "react"
import { isTrue, refs } from "$/utils/state"
import { ColorModeContext } from "$/utils/context"
import { Box as RadixThemesBox, Text as RadixThemesText } from "@radix-ui/themes"
import { jsx } from "@emotion/react"
import { toast, Toaster } from "sonner"




export const MemoizedBadge = memo(({}) => {
    
  const { resolvedColorMode } = useContext(ColorModeContext)




    return(
        jsx(
"a",
{css:({ ["position"] : "fixed", ["bottom"] : "1rem", ["right"] : "1rem", ["display"] : "flex", ["flexDirection"] : "row", ["gap"] : "0.375rem", ["alignItems"] : "center", ["width"] : "auto", ["borderRadius"] : "0.5rem", ["color"] : ((resolvedColorMode === "light") ? "#E5E7EB" : "#27282B"), ["border"] : ((resolvedColorMode === "light") ? "1px solid #27282B" : "1px solid #E5E7EB"), ["backgroundColor"] : ((resolvedColorMode === "light") ? "#151618" : "#FCFCFD"), ["padding"] : "0.375rem", ["transition"] : "background-color 0.2s ease-in-out", ["boxShadow"] : "0 1px 2px 0 rgba(0, 0, 0, 0.05)", ["zIndex"] : "9998", ["cursor"] : "pointer", ["align"] : "center", ["textAlign"] : "center" }),href:"https://reflex.dev",target:"_blank"},
jsx(
"svg",
{css:({ ["fill"] : "white", ["viewBox"] : "0 0 16 16" }),height:"16",width:"16",xmlns:"http://www.w3.org/2000/svg"},
jsx("rect",{css:({ ["fill"] : "#6E56CF" }),height:"16",rx:"2",width:"16"},)
,jsx("path",{css:({ ["fill"] : "white" }),d:"M10 9V13H12V9H10Z"},)
,jsx("path",{css:({ ["fill"] : "white" }),d:"M4 3V13H6V9H10V7H6V5H10V7H12V3H4Z"},)
,),jsx(
RadixThemesBox,
{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })},
jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "var(--slate-1)", ["fontWeight"] : "600", ["fontFamily"] : "'Instrument Sans', sans-serif", ["--default-font-family"] : "'Instrument Sans', sans-serif", ["fontSize"] : "0.875rem", ["lineHeight"] : "1rem", ["letterSpacing"] : "-0.00656rem" })},
"Built with Reflex"
,),),)
      )

})

export const MemoizedToastProvider = memo(({}) => {
    
  const { resolvedColorMode } = useContext(ColorModeContext)

  refs['__toast'] = toast



    return(
        jsx(Toaster,{closeButton:false,expand:true,position:"bottom-right",richColors:true,theme:resolvedColorMode},)

      )

})
