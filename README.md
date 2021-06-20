# tauri-vue

This is a demo to illustrate the issue of vue router in tauri.

To install dependencies, run following command

    yarn install

Then build debug production

    yarn tauri:build --debug

Run the built binary, the router will not work, but it works in development mode

    yarn tauri:serve
