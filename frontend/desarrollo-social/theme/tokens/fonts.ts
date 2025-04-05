import { defineTokens } from "@chakra-ui/react"

export const fonts = defineTokens.fonts({
  heading: {
    // value: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    value: 'var(--font-geist-sans)',
  },
  body: {
    // value: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    value: 'var(--font-geist-sans)',
  },
  mono: {
    // value: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    value: 'var(--font-geist-mono) ,monospace',
  },
})
