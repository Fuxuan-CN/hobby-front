declare namespace App {
  namespace Service {
    /** 后端服务响应数据结构 */
    interface Response<T = unknown> {
      /** 后端服务返回的code */
      code: string;
      /** 后端服务返回的提示信息 */
      msg: string;
      /** 后端服务返回的数据 */
      data: T;
    }
  }

  namespace Theme {
    type ColorHex = `#${string}`;

    type ColorRgb = `rgb(${number}, ${number}, ${number})`;

    type ColorRgba = `rgba(${number}, ${number}, ${number}, ${number})`;

    type ColorKeyword =
      | 'aqua'
      | 'black'
      | 'blue'
      | 'fuchsia'
      | 'gray'
      | 'green'
      | 'lime'
      | 'maroon'
      | 'navy'
      | 'olive'
      | 'orange'
      | 'purple'
      | 'red'
      | 'silver'
      | 'teal'
      | 'white'
      | 'yellow'
      | 'transparent';

    type SingleColor = ColorHex | ColorRgb | ColorRgba | ColorKeyword;

    type MultiColors = SingleColor | `${SingleColor}, ${MultiColors}`;

    // 线性渐变：支持方向参数和多个颜色点
    type ColorLinearGradient =
      | `linear-gradient(${string}, ${MultiColors})` // 带方向参数 + 多个颜色
      | `linear-gradient(${ColorHex | ColorRgb | ColorRgba | ColorKeyword}, ${MultiColors})`; // 直接颜色开始（无方向参数）

    // 径向渐变：支持形状/大小参数和多个颜色点

    type ColorRadialGradient =
      | `radial-gradient(${string}, ${MultiColors})` // 例如 radial-gradient(ellipse, red, green, blue)
      | `radial-gradient(${string} ${string}, ${MultiColors})` // 例如 radial-gradient(circle 50%, red, green)
      | `radial-gradient(${SingleColor}, ${MultiColors})`; // 例如 radial-gradient(red, green, blue)

    type Color =
      | ColorHex
      | ColorRgb
      | ColorRgba
      | ColorKeyword
      | ColorLinearGradient
      | ColorRadialGradient;

    interface BackgroundImage {
      url: string; // 背景图URL
      repeat?: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat'; // 背景重复方式
      size?: 'auto' | 'cover' | 'contain' | `${number}px` | `${number}%`; // 背景大小
      position?:
        | 'left top'
        | 'left center'
        | 'left bottom'
        | 'center top'
        | 'center center'
        | 'center bottom'
        | 'right top'
        | 'right center'
        | 'right bottom'
        | `${number}px ${number}px`
        | `${number}% ${number}%`; // 背景位置
      attachment?: 'scroll' | 'fixed' | 'local'; // 背景附着方式
      opacity?: number; // 背景图透明度 (0-1)
    }

    interface SidebarColors {
      backgroundColor: Color; // 背景色
      iconColor: Color; // 图标色
      iconActiveColor: Color; // 激活图标色
    }

    interface SliderColors {
      backgroundColor: Color; // 背景色
      thumbColor: Color; // 滑块色
      thumbHoverColor: Color; // 滑块悬停色
      trackColor: Color; // 轨道色
    }

    interface ChatListColors {
      searchBar: {
        backgroundColor: Color; // 搜索栏背景色
        innerBackgroundColor: Color; // 搜索栏内部背景色
        textColor: Color; // 搜索栏文字色
        placeholderColor: Color; // 搜索栏占位符色
        buttonBackgroundColor: Color; // 搜索栏按钮背景色
        buttonTextColor: Color; // 搜索栏按钮文字色
      };
      backgroundColor: Color; // 背景色
      itemColor: Color; // 列表项背景色
      itemHoverColor: Color; // 鼠标悬停背景色
      itemActiveColor: Color; // 选中背景色
      unreadTag: {
        backgroundColor: Color; // 未读徽章背景
        textColor: Color; // 未读徽章文本
      };
      titleColor: Color; // 标题色
      contentColor: Color; // 内容色
      timeColor: Color; // 时间文本色
    }

    interface HeaderColors {
      backgroundColor: Color; // 背景色
      textColor: Color; // 文字色 比如标题
      iconColor: Color; // 图标色
      hoverColor: Color; // 图标悬停色
    }
    interface SelfBubbleColors {
      backgroundColor: Color; // 自己的气泡背景色
      textColor: Color; // 自己的气泡文本色
    }

    interface OtherBubbleColors {
      backgroundColor: Color; // 对方的气泡背景色
      textColor: Color; // 对方的气泡文本色
    }

    interface BubbleColors {
      self: SelfBubbleColors; // 自己发送的气泡
      other: OtherBubbleColors; // 对方发送的气泡
    }

    interface ToolbarColors {
      iconColor: Color; // 工具栏图标色
      iconHoverColor: Color; // 工具栏图标悬停色
    }

    interface InputBoxColors {
      backgroundColor: Color; // 输入框背景色
      textColor: Color; // 输入框文本色
      placeholderColor: Color; // 输入框占位符色
      clearButtonColor: Color; // 清空按钮色
      clearButtonTextColor: Color;
      sendButtonColor: Color; // 发送按钮色
      sendButtonTextColor: Color; // 发送按钮文本色
      toolBar: ToolbarColors; // 工具栏色
    }

    interface ContentColors {
      backgroundImage?: BackgroundImage; // 背景图片
      backgroundColor: Color; // 消息内容背景色
      header: HeaderColors; // 内容头部
      bubble: BubbleColors; // 内容气泡
      inputBox: InputBoxColors; // 输入框色
    }

    interface ThemeSetting {
      id: string; // 主题ID
      name: string; // 名称
      description?: string; // 描述
      author: string; // 作者

      colors: {
        sidebar: SidebarColors; // 侧边栏
        chatList: ChatListColors; // 聊天列表
        slider: SliderColors; // 列表滑块
        content: ContentColors; // 内容
      };
    }

    type DeepPartial<T> = T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T;

    type ThemeSettingPartial = DeepPartial<ThemeSetting>;
  }
}
