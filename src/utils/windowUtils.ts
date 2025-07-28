import { getAllWindows, getCurrentWindow } from '@tauri-apps/api/window';

const appWindow = getCurrentWindow();

// 全屏切换
async function toggleFullscreen() {
  try {
    const isFullscreen = await appWindow.isFullscreen();
    if (isFullscreen) {
      await appWindow.setFullscreen(false);
    } else {
      await appWindow.setFullscreen(true);
    }
  } catch (error) {
    console.error('全屏切换失败:', error);
  }
}

// 最小化窗口
async function minimizeWindow() {
  try {
    await appWindow.minimize();
    console.log('窗口已最小化');
  } catch (error) {
    console.error('窗口最小化失败:', error);
  }
}

// 关闭窗口
async function closeWindow() {
  hideAllWindows();
}

// 退出全屏（单独控制）
async function exitFullscreen() {
  try {
    if (await appWindow.isFullscreen()) {
      await appWindow.setFullscreen(false);
      console.log('已退出全屏');
    }
  } catch (error) {
    console.error('退出全屏失败:', error);
  }
}

// 隐藏全部窗口
async function hideAllWindows() {
  try {
    const windows = await getAllWindows();
    for (const window of windows) {
      await window.hide();
    }
  } catch (error) {
    console.error('隐藏所有窗口失败:', error);
  }
}

// 导出函数供页面调用
export { closeWindow, exitFullscreen, minimizeWindow, toggleFullscreen };
