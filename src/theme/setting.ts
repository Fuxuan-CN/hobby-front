// 默认主题配置
export const defaultThemeSetting: App.Theme.ThemeSetting = {
  id: 'default',
  name: '默认主题',
  description: '默认主题',
  author: 'admin',

  colors: {
    sidebar: {
      backgroundColor: '#303030',
      iconColor: '#ffffff',
      iconActiveColor: '#68b4db',
    },
    chatList: {
      searchBar: {
        backgroundColor: '#222530',
        innerBackgroundColor: '#1b1b1b',
        textColor: '#ffffff',
        placeholderColor: '#6d6f72',
        buttonBackgroundColor: '#282828',
        buttonTextColor: '#c9c9c9',
      },
      backgroundColor: '#222530',
      itemColor: '#222530',
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
      backgroundColor: 'transparent',
      thumbColor: 'rgba(120, 120, 120, 0.25)',
      thumbHoverColor: 'rgba(120, 120, 120, 0.45)',
      trackColor: 'transparent',
    },
    content: {
      backgroundColor: 'linear-gradient(to bottom right, #2f2a33, #101f2d)',
      header: {
        backgroundColor: 'transparent',
        textColor: '#ffffff',
        iconColor: '#ffffff',
        hoverColor: '#2f3442',
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
        toolBar: {
          iconColor: '#656a73',
          iconHoverColor: '#0066cc',
        },
      },
    },
  },
};
