// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
use tauri_plugin_dialog::DialogExt;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn my_custom_command() {
    let answer = app
        .dialog()
        .message("Tauri is Awesome")
        .title("Tauri is Awesome")
        .ok_button_label("Absolutely")
        .cancel_button_label("Totally")
        .blocking_show();
    println!("Tauri is {}.", answer);
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_barcode_scanner::init())
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![greet])
        .invoke_handler(tauri::generate_handler![my_custom_command])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
