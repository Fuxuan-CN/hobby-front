// 默认主题配置
export const blackThemeSetting: App.Theme.ThemeSetting = {
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
          backgroundColor: 'transparent',
          iconColor: '#656a73',
          iconHoverColor: '#0066cc',
        },
      },
    },
  },
};

export const freshThemeSetting: App.Theme.ThemeSetting = {
  id: 'fresh',
  name: '清新主题',
  description: '清爽明亮的主题风格，带来舒适的视觉体验',
  author: 'designer',

  colors: {
    sidebar: {
      backgroundColor: '#f5f7fa',
      iconColor: '#5c6b77',
      iconActiveColor: '#38b2ac',
    },
    chatList: {
      searchBar: {
        backgroundColor: '#ffffff',
        innerBackgroundColor: '#f5f5f5',
        textColor: '#2d3748',
        placeholderColor: '#a0aec0',
        buttonBackgroundColor: '#edf2f7',
        buttonTextColor: '#4a5568',
      },
      backgroundColor: '#ffffff',
      itemColor: '#ffffff',
      itemHoverColor: '#f7fafc',
      itemActiveColor: '#edf2f7',
      unreadTag: {
        backgroundColor: '#38b2ac',
        textColor: '#ffffff',
      },
      titleColor: '#2d3748',
      contentColor: '#718096',
      timeColor: '#a0aec0',
    },
    slider: {
      backgroundColor: 'rgba(226, 232, 240, 0.5)',
      thumbColor: 'rgba(56, 178, 172, 0.7)',
      thumbHoverColor: 'rgba(56, 178, 172, 1)',
      trackColor: 'rgba(226, 232, 240, 0.8)',
    },
    content: {
      backgroundColor: 'linear-gradient(to bottom, #f8fafc, #e2e8f0)',
      header: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        textColor: '#2d3748',
        iconColor: '#4a5568',
        hoverColor: '#e2e8f0',
      },
      bubble: {
        self: {
          backgroundColor: '#38b2ac',
          textColor: '#ffffff',
        },
        other: {
          backgroundColor: '#ffffff',
          textColor: '#2d3748',
        },
      },
      inputBox: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        textColor: '#2d3748',
        placeholderColor: '#a0aec0',
        clearButtonColor: '#cbd5e0',
        clearButtonTextColor: '#718096',
        sendButtonColor: '#38b2ac',
        sendButtonTextColor: '#ffffff',
        toolBar: {
          backgroundColor: '#ffffff',
          iconColor: '#718096',
          iconHoverColor: '#38b2ac',
        },
      },
    },
  },
};

export const pastelThemeSetting: App.Theme.ThemeSetting = {
  id: 'pastel',
  name: '柔和粉彩主题',
  description: '采用柔和粉彩色调，营造温馨舒适的聊天氛围',
  author: 'designer',

  colors: {
    sidebar: {
      backgroundColor: '#fdf2f8',
      iconColor: '#9d4edd',
      iconActiveColor: '#d946ef',
    },
    chatList: {
      searchBar: {
        backgroundColor: '#faf5ff',
        innerBackgroundColor: '#f3e8ff',
        textColor: '#5b21b6',
        placeholderColor: '#a855f7',
        buttonBackgroundColor: '#ede9fe',
        buttonTextColor: '#7e22ce',
      },
      backgroundColor: '#faf5ff',
      itemColor: '#faf5ff',
      itemHoverColor: '#f3e8ff',
      itemActiveColor: '#ede9fe',
      unreadTag: {
        backgroundColor: '#d946ef',
        textColor: '#ffffff',
      },
      titleColor: '#5b21b6',
      contentColor: '#7e22ce',
      timeColor: '#a855f7',
    },
    slider: {
      backgroundColor: 'rgba(233, 213, 255, 0.5)',
      thumbColor: 'rgba(168, 85, 247, 0.7)',
      thumbHoverColor: 'rgba(139, 92, 246, 1)',
      trackColor: 'rgba(233, 213, 255, 0.8)',
    },
    content: {
      backgroundColor: 'linear-gradient(to bottom, #fef2f2, #faf5ff)',
      header: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        textColor: '#5b21b6',
        iconColor: '#7e22ce',
        hoverColor: '#f3e8ff',
      },
      bubble: {
        self: {
          backgroundColor: '#d946ef',
          textColor: '#ffffff',
        },
        other: {
          backgroundColor: '#ffffff',
          textColor: '#5b21b6',
        },
      },
      inputBox: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        textColor: '#5b21b6',
        placeholderColor: '#a855f7',
        clearButtonColor: '#e9d5ff',
        clearButtonTextColor: '#7e22ce',
        sendButtonColor: '#d946ef',
        sendButtonTextColor: '#ffffff',
        toolBar: {
          backgroundColor: 'transparent',
          iconColor: '#a855f7',
          iconHoverColor: '#d946ef',
        },
      },
    },
  },
};

export const forestThemeSetting: App.Theme.ThemeSetting = {
  id: 'forest',
  name: '森林主题',
  description: '以森林绿为主色调，呈现自然清新的视觉体验',
  author: 'designer',

  colors: {
    sidebar: {
      backgroundColor: '#1e3a3a',
      iconColor: '#d1fae5',
      iconActiveColor: '#4ade80',
    },
    chatList: {
      searchBar: {
        backgroundColor: '#2d4f4f',
        innerBackgroundColor: '#1e3a3a',
        textColor: '#d1fae5',
        placeholderColor: '#94a3b8',
        buttonBackgroundColor: '#2d4f4f',
        buttonTextColor: '#a7f3d0',
      },
      backgroundColor: '#2d4f4f',
      itemColor: '#2d4f4f',
      itemHoverColor: '#365f5f',
      itemActiveColor: '#365f5f',
      unreadTag: {
        backgroundColor: '#4ade80',
        textColor: '#1e3a3a',
      },
      titleColor: '#d1fae5',
      contentColor: '#a7f3d0',
      timeColor: '#94a3b8',
    },
    slider: {
      backgroundColor: 'rgba(74, 222, 128, 0.2)',
      thumbColor: 'rgba(74, 222, 128, 0.6)',
      thumbHoverColor: 'rgba(74, 222, 128, 0.9)',
      trackColor: 'rgba(74, 222, 128, 0.3)',
    },
    content: {
      backgroundColor: 'linear-gradient(to bottom, #1e3a3a, #2d4f4f)',
      header: {
        backgroundColor: 'rgba(45, 79, 79, 0.8)',
        textColor: '#d1fae5',
        iconColor: '#a7f3d0',
        hoverColor: '#365f5f',
      },
      bubble: {
        self: {
          backgroundColor: '#4ade80',
          textColor: '#1e3a3a',
        },
        other: {
          backgroundColor: '#365f5f',
          textColor: '#d1fae5',
        },
      },
      inputBox: {
        backgroundColor: '#2d4f4f',
        textColor: '#d1fae5',
        placeholderColor: '#94a3b8',
        clearButtonColor: '#365f5f',
        clearButtonTextColor: '#94a3b8',
        sendButtonColor: '#4ade80',
        sendButtonTextColor: '#1e3a3a',
        toolBar: {
          backgroundColor: 'transparent',
          iconColor: '#94a3b8',
          iconHoverColor: '#4ade80',
        },
      },
    },
  },
};

export const oceanThemeSetting: App.Theme.ThemeSetting = {
  id: 'ocean',
  name: '海洋主题',
  description: '以海洋蓝为主色调，营造宁静深邃的聊天氛围',
  author: 'designer',

  colors: {
    sidebar: {
      backgroundColor: '#0f172a',
      iconColor: '#bfdbfe',
      iconActiveColor: '#38bdf8',
    },
    chatList: {
      searchBar: {
        backgroundColor: '#1e293b',
        innerBackgroundColor: '#0f172a',
        textColor: '#e0f2fe',
        placeholderColor: '#94a3b8',
        buttonBackgroundColor: '#1e293b',
        buttonTextColor: '#bfdbfe',
      },
      backgroundColor: '#1e293b',
      itemColor: '#1e293b',
      itemHoverColor: '#273449',
      itemActiveColor: '#273449',
      unreadTag: {
        backgroundColor: '#38bdf8',
        textColor: '#0f172a',
      },
      titleColor: '#e0f2fe',
      contentColor: '#bfdbfe',
      timeColor: '#94a3b8',
    },
    slider: {
      backgroundColor: 'rgba(56, 189, 248, 0.2)',
      thumbColor: 'rgba(56, 189, 248, 0.6)',
      thumbHoverColor: 'rgba(56, 189, 248, 0.9)',
      trackColor: 'rgba(56, 189, 248, 0.3)',
    },
    content: {
      backgroundColor: 'linear-gradient(to bottom, #0f172a, #1e293b)',
      header: {
        backgroundColor: 'rgba(30, 41, 59, 0.8)',
        textColor: '#e0f2fe',
        iconColor: '#bfdbfe',
        hoverColor: '#273449',
      },
      bubble: {
        self: {
          backgroundColor: '#38bdf8',
          textColor: '#0f172a',
        },
        other: {
          backgroundColor: '#334155',
          textColor: '#e0f2fe',
        },
      },
      inputBox: {
        backgroundColor: '#1e293b',
        textColor: '#e0f2fe',
        placeholderColor: '#94a3b8',
        clearButtonColor: '#334155',
        clearButtonTextColor: '#94a3b8',
        sendButtonColor: '#38bdf8',
        sendButtonTextColor: '#0f172a',
        toolBar: {
          backgroundColor: 'transparent',
          iconColor: '#94a3b8',
          iconHoverColor: '#38bdf8',
        },
      },
    },
  },
};

export const sunsetThemeSetting: App.Theme.ThemeSetting = {
  id: 'sunset',
  name: '日落主题',
  description: '以日落橙红色橙红色调为主，呈现温暖活力的视觉体验',
  author: 'designer',

  colors: {
    sidebar: {
      backgroundColor: '#2d1b00',
      iconColor: '#ffedd5',
      iconActiveColor: '#fb923c',
    },
    chatList: {
      searchBar: {
        backgroundColor: '#432818',
        innerBackgroundColor: '#2d1b00',
        textColor: '#ffedd5',
        placeholderColor: '#d69e2e',
        buttonBackgroundColor: '#432818',
        buttonTextColor: '#fbd38d',
      },
      backgroundColor: '#432818',
      itemColor: '#432818',
      itemHoverColor: '#593814',
      itemActiveColor: '#593814',
      unreadTag: {
        backgroundColor: '#ea580c',
        textColor: '#ffffff',
      },
      titleColor: '#ffedd5',
      contentColor: '#fbd38d',
      timeColor: '#d69e2e',
    },
    slider: {
      backgroundColor: 'rgba(234, 88, 12, 0.2)',
      thumbColor: 'rgba(234, 88, 12, 0.6)',
      thumbHoverColor: 'rgba(234, 88, 12, 0.9)',
      trackColor: 'rgba(234, 88, 12, 0.3)',
    },
    content: {
      backgroundColor: 'linear-gradient(to bottom, #432818, #99582a)',
      header: {
        backgroundColor: 'rgba(67, 40, 24, 0.8)',
        textColor: '#ffedd5',
        iconColor: '#fbd38d',
        hoverColor: '#593814',
      },
      bubble: {
        self: {
          backgroundColor: '#ea580c',
          textColor: '#ffffff',
        },
        other: {
          backgroundColor: '#593814',
          textColor: '#ffedd5',
        },
      },
      inputBox: {
        backgroundColor: '#432818',
        textColor: '#ffedd5',
        placeholderColor: '#d69e2e',
        clearButtonColor: '#593814',
        clearButtonTextColor: '#d69e2e',
        sendButtonColor: '#ea580c',
        sendButtonTextColor: '#ffffff',
        toolBar: {
          backgroundColor: 'transparent',
          iconColor: '#d69e2e',
          iconHoverColor: '#fb923c',
        },
      },
    },
  },
};

export const minimalLightTheme: App.Theme.ThemeSetting = {
  id: 'minimal-light',
  name: '极简浅色',
  description: '简约干净的浅色主题，专注于内容呈现',
  author: 'designer',

  colors: {
    sidebar: {
      backgroundColor: '#ffffff',
      iconColor: '#64748b',
      iconActiveColor: '#3b82f6',
    },
    chatList: {
      searchBar: {
        backgroundColor: '#f8fafc',
        innerBackgroundColor: '#ffffff',
        textColor: '#334155',
        placeholderColor: '#94a3b8',
        buttonBackgroundColor: '#e2e8f0',
        buttonTextColor: '#64748b',
      },
      backgroundColor: '#f8fafc',
      itemColor: '#f8fafc',
      itemHoverColor: '#f1f5f9',
      itemActiveColor: '#e2e8f0',
      unreadTag: {
        backgroundColor: '#3b82f6',
        textColor: '#ffffff',
      },
      titleColor: '#1e293b',
      contentColor: '#64748b',
      timeColor: '#94a3b8',
    },
    slider: {
      backgroundColor: 'rgba(226, 232, 240, 0.5)',
      thumbColor: 'rgba(59, 130, 246, 0.6)',
      thumbHoverColor: 'rgba(59, 130, 246, 0.9)',
      trackColor: 'rgba(226, 232, 240, 0.8)',
    },
    content: {
      backgroundColor: '#ffffff',
      header: {
        backgroundColor: '#f8fafc',
        textColor: '#1e293b',
        iconColor: '#64748b',
        hoverColor: '#e2e8f0',
      },
      bubble: {
        self: {
          backgroundColor: '#3b82f6',
          textColor: '#ffffff',
        },
        other: {
          backgroundColor: '#f1f5f9',
          textColor: '#1e293b',
        },
      },
      inputBox: {
        backgroundColor: '#f8fafc',
        textColor: '#1e293b',
        placeholderColor: '#94a3b8',
        clearButtonColor: '#e2e8f0',
        clearButtonTextColor: '#64748b',
        sendButtonColor: '#3b82f6',
        sendButtonTextColor: '#ffffff',
        toolBar: {
          backgroundColor: 'transparent',
          iconColor: '#64748b',
          iconHoverColor: '#3b82f6',
        },
      },
    },
  },
};

export const purpleThemeSetting: App.Theme.ThemeSetting = {
  id: 'purple',
  name: '优雅紫主题',
  description: '以紫色系为主色调，呈现优雅神秘的视觉体验',
  author: 'designer',

  colors: {
    sidebar: {
      backgroundColor: '#2e1065',
      iconColor: '#e0b0ff',
      iconActiveColor: '#c084fc',
    },
    chatList: {
      searchBar: {
        backgroundColor: '#4c1d95',
        innerBackgroundColor: '#2e1065',
        textColor: '#f3e8ff',
        placeholderColor: '#a855f7',
        buttonBackgroundColor: '#4c1d95',
        buttonTextColor: '#e0b0ff',
      },
      backgroundColor: '#4c1d95',
      itemColor: '#4c1d95',
      itemHoverColor: '#5b21b6',
      itemActiveColor: '#5b21b6',
      unreadTag: {
        backgroundColor: '#a855f7',
        textColor: '#ffffff',
      },
      titleColor: '#f3e8ff',
      contentColor: '#e0b0ff',
      timeColor: '#a855f7',
    },
    slider: {
      backgroundColor: 'rgba(168, 85, 247, 0.2)',
      thumbColor: 'rgba(168, 85, 247, 0.6)',
      thumbHoverColor: 'rgba(168, 85, 247, 0.9)',
      trackColor: 'rgba(168, 85, 247, 0.3)',
    },
    content: {
      backgroundColor: 'linear-gradient(to bottom, #2e1065, #4c1d95)',
      header: {
        backgroundColor: 'rgba(76, 29, 149, 0.8)',
        textColor: '#f3e8ff',
        iconColor: '#e0b0ff',
        hoverColor: '#5b21b6',
      },
      bubble: {
        self: {
          backgroundColor: '#a855f7',
          textColor: '#ffffff',
        },
        other: {
          backgroundColor: '#5b21b6',
          textColor: '#f3e8ff',
        },
      },
      inputBox: {
        backgroundColor: '#4c1d95',
        textColor: '#f3e8ff',
        placeholderColor: '#a855f7',
        clearButtonColor: '#5b21b6',
        clearButtonTextColor: '#a855f7',
        sendButtonColor: '#a855f7',
        sendButtonTextColor: '#ffffff',
        toolBar: {
          backgroundColor: 'transparent',
          iconColor: '#a855f7',
          iconHoverColor: '#c084fc',
        },
      },
    },
  },
};

export const azureThemeSetting: App.Theme.ThemeSetting = {
  id: 'azure',
  name: '蔚蓝主题',
  description: '清爽明亮的蔚蓝色系主题',
  author: 'system',

  colors: {
    // 侧边栏：更深的蔚蓝作为背景，图标保持高对比
    sidebar: {
      backgroundColor: '#0c2d4d',
      iconColor: '#e0f0ff',
      iconActiveColor: '#4db8ff',
    },

    // 聊天列表：整体提亮，悬停/激活用高亮蓝
    chatList: {
      searchBar: {
        backgroundColor: '#0a2540',
        innerBackgroundColor: '#0c2d4d',
        textColor: '#e0f0ff',
        placeholderColor: '#a0c4e4',
        buttonBackgroundColor: '#0078d4',
        buttonTextColor: '#ffffff',
      },
      backgroundColor: '#0a2540',
      itemColor: '#0a2540',
      itemHoverColor: '#103a63',
      itemActiveColor: '#103a63',
      unreadTag: {
        backgroundColor: '#0078d4',
        textColor: '#ffffff',
      },
      titleColor: '#e0f0ff',
      contentColor: '#a0c4e4',
      timeColor: '#a0c4e4',
    },

    // 滑块：透明轨道 + 低饱和蔚蓝滑块
    slider: {
      backgroundColor: 'transparent',
      thumbColor: 'rgba(77, 184, 255, 0.3)',
      thumbHoverColor: 'rgba(77, 184, 255, 0.6)',
      trackColor: 'transparent',
    },

    // 内容区：从亮蔚蓝到深蔚蓝的渐变，营造天空感
    content: {
      backgroundColor: 'linear-gradient(135deg, #0078d4 0%, #0a2540 100%)',
      backgroundImage: {
        url: '', // 如需可叠加云层纹理
        repeat: 'no-repeat',
        size: 'cover',
        position: 'center center',
        opacity: 0.1,
      },
      header: {
        backgroundColor: 'transparent',
        textColor: '#ffffff',
        iconColor: '#ffffff',
        hoverColor: '#0c2d4d',
      },
      bubble: {
        self: {
          backgroundColor: '#4db8ff',
          textColor: '#ffffff',
        },
        other: {
          backgroundColor: '#0c2d4d',
          textColor: '#e0f0ff',
        },
      },
      inputBox: {
        backgroundColor: 'rgba(10, 37, 64, 0.6)',
        textColor: '#ffffff',
        placeholderColor: '#a0c4e4',
        clearButtonColor: '#0078d4',
        clearButtonTextColor: '#ffffff',
        sendButtonColor: '#0078d4',
        sendButtonTextColor: '#ffffff',
        toolBar: {
          backgroundColor: 'rgba(10, 37, 64, 0.6)',
          iconColor: '#a0c4e4',
          iconHoverColor: '#4db8ff',
        },
      },
    },
  },
};

export const defaultThemeSetting = azureThemeSetting;
