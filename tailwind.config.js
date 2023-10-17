module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/layouts/**/*.tsx',
  ],
  theme: {
    extend: {
      boxShadow: {
        contentShadow: '0 10px 20px 0 hsla(0, 0%, 92.5%, .86);',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      fontFamily: {
        serif: [
          'Baskerville',
          'Georgia',
          '"Liberation Serif"',
          'Kaiti SC',
          'STKaiti',
          'AR PL UKai CN',
          'AR PL UKai HK',
          'AR PL UKai TW',
          'AR PL UKai TW MBE',
          'AR PL KaitiM GB',
          'KaiTi',
          'KaiTi_GB2312',
          'DFKai-SB',
          'TW-Kai',
          'serif',
        ],
      },
    },
  },
};
