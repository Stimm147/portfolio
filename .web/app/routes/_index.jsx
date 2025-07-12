

import { Fragment, useEffect } from "react"
import { Box as RadixThemesBox, Container as RadixThemesContainer, Text as RadixThemesText } from "@radix-ui/themes"
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
RadixThemesText,
{as:"p",size:"6"},
"Welcome to the Homepage!"
,),),),jsx(
"title",
{},
"Portfolio | Index"
,),jsx("meta",{content:"favicon.ico",property:"og:image"},)
,)
  )
}
