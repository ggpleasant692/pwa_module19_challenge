# pwa_module19_challenge
## Description
JATE is a progressive web application (PWA) that allows users to create notes or code snippets online or offline. The application uses IndexedDB for data storage, ensuring that users can retrieve their notes even without an internet connection.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Bundler**: Webpack
- **PWA**: Service Workers, Workbox
- **Data Storage**: IndexedDB
- **Development Tools**: Babel, Mini CSS Extract Plugin, Html Webpack Plugin

## Features
- Create and save notes/code snippets.
- Offline functionality using a service worker.
- Data persistence through IndexedDB.
- PWA capabilities with installable app features.

## What I Learned & Issues Encountered

- **Understanding PWAs**: I gained a deeper understanding of Progressive Web Apps, including the role of service workers and caching strategies for offline functionality.

- **IndexedDB Implementation**: Learned how to use IndexedDB for client-side data storage. This was crucial for ensuring that users can retrieve their notes even when offline.

- **Webpack Configuration**: Improved my skills in configuring Webpack, including setting up plugins like `MiniCssExtractPlugin` and `HtmlWebpackPlugin` to manage assets and generate HTML files.

- **Troubleshooting**: Encountered several issues:
  - **Module Not Found Errors**: Initially faced errors indicating missing modules, which I resolved by verifying file paths and ensuring all required files were in the correct directories.
  - **Service Worker Manifest Error**: Had a manifest error due to a missing `__WB_MANIFEST`. This was fixed by including the correct line in the service worker file.
  - **Missing Dependencies**: Faced issues related to missing `mini-css-extract-plugin`, which I resolved by installing the required packages.
