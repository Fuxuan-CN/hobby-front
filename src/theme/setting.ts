// 默认主题配置
export const defaultThemeSetting: App.Theme.ThemeSetting = {
  id: 'default',
  name: '默认主题',
  description: '默认主题',
  author: 'admin',

  colors: {
    sidebar: {
      backgroundColor: '#303030',
    },
    chatList: {
      backgroundColor: '#1b1b1b',
      itemHoverColor: '#2d2d2d',
      itemActiveColor: '#2d2d2d',
      unreadTag: {
        backgroundColor: '#575757',
        textColor: '#ffffff',
      },
      titleColor: '#d5e5f0',
      contentColor: '#a19f95',
      timeColor: '#a19f95',
    },
    slider: {
      thumbColor: '#A2ACB0',
      trackColor: 'transparent',
    },
    content: {
      backgroundColor: 'linear-gradient(to bottom right, #2f2a33, #101f2d)',
      header: {
        backgroundColor: 'transparent',
        textColor: '#ffffff',
      },
      bubble: {
        self: {
          backgroundColor: '#187498',
          textColor: '#dae1e6',
        },
        other: {
          backgroundColor: '#21262a',
          textColor: '#dee3e8',
        },
      },
      inputBox: {
        backgroundColor: 'transparent',
        textColor: '#ffffff',
        placeholderColor: '#676d76',
        clearButtonColor: '#606266',
        clearButtonTextColor: '#ffffff',
        sendButtonColor: '#409EFF',
        sendButtonTextColor: '#ffffff',
        sendButtonDisabledColor: '#a0cfff',
        sendButtonDisabledTextColor: '#f2f9ff',
        toolBar: {
          iconColor: '#656a73',
          iconActiveColor: '#ffffff',
        },
      },
    },
  },
};
