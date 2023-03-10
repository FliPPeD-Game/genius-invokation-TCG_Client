import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  // transformerDirectives,
  // transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  rules: [
    [
      'text-shadow', {
        'text-shadow': '-1px -1px 1px #000, 1px -1px 1px #673b2c, -1px 1px 1px #673b2c, 1px 1px 1px #673b2c',
      },
    ],
    [
      'card-box', {
        'box-shadow': '0 0 10px 0 #176a73',
        'border': '2px solid #176a73',
      },
    ],
  ],
  shortcuts: [
    ['btn', 'px-8 py-4 rounded-full inline-block bg-#88abaf text-white cursor-pointer transition duration-200 ease-in-out hover:bg-#9acfce disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50 disabled:hover:bg-gray-600'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
    ['under-btn', 'c-white text-2xl font-bold decoration-2 underline-offset-5 hover-underline'],
    ['ipt', 'flex-1 appearance-none border-transparent w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm rounded-lg text-lg transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-#9acfce focus:border-transparent'],
    ['flex-center', 'flex justify-center items-center'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  // transformers: [
  //   transformerDirectives(),
  //   transformerVariantGroup(),
  // ],
})
