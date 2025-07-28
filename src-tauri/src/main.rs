// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{
  menu::{Menu, MenuItem}, tray::{MouseButton, TrayIconBuilder, TrayIconEvent, MouseButtonState}, Manager
};

#[tauri::command]
async fn close_splashscreen(window: tauri::Window) {
  // 关闭初始屏幕
  if let Some(splashscreen) = window.get_webview_window("splashscreen") {
    splashscreen.close().unwrap();
  }
  // 显示主窗口
  window.get_webview_window("main").unwrap().show().unwrap();
}

fn main() {

  tauri::Builder::default()
  .invoke_handler(tauri::generate_handler![close_splashscreen])
  .setup(|app| {
    let quit = MenuItem::with_id(app, "quit", "退出", true, None::<&str>)?;
    let hide = MenuItem::with_id(app, "hide", "隐藏", true, None::<&str>)?;
    let show = MenuItem::with_id(app, "show", "显示主窗口", true, None::<&str>)?;

    let menu = Menu::with_items(app, &[&quit, &hide, &show])?;


    let _ = TrayIconBuilder::new()
    .icon(app.default_window_icon().unwrap().clone())
    .menu(&menu)
    .tooltip("Hobby")
    .show_menu_on_left_click(false)
    .on_tray_icon_event(|tray, event| match event {
      TrayIconEvent::Click {
          button: MouseButton::Left,
          button_state: MouseButtonState::Up,
          ..
      } => {
          // 在这个例子中，当点击托盘图标时，将展示并聚焦于主窗口
          let app = tray.app_handle();
          if let Some(window) = app.get_webview_window("main") {
              let _ = window.show();
              let _ = window.set_focus();
          }
      }
      _ => {}
  })
    .on_menu_event(|app, event| match event.id.as_ref() {
      "quit" => app.exit(0),
      "hide" => {
        let windows = app.webview_windows();
        for (_, window) in windows {
          let _ = window.hide().unwrap();
        }
      },
      "show" => {
          if let Some(window) = app.get_webview_window("main") {
              let _ = window.show();
              let _ = window.set_focus();
          }
      }
      _ => {}
    })
    .build(app)?;
    Ok(())
  })
  .run(tauri::generate_context!())
  .expect("error while running tauri application");
}
