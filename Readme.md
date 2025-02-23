# Microfrontend Project

The Head Wrapper is the main wrapper containing all the design system, shared components.
The Chat app is the microfrontend for the chat functionality
The Email app is for the email functionality

Instructions to Run it, on your device.

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)

### Steps
1. **Clone the repository**:
   git clone https://github.com/your-username/microfrontend-project.git
   cd microfrontend-project
Install dependencies:

Navigate to each app and install dependencies:

Copy
cd head-wrapper && npm install
cd chat-app && npm install
cd email-app && npm install
Run the applications:

Start each app on a different port:

Copy
cd head-wrapper && npm run dev -- --port 5000
cd chat-app && npm run dev -- --port 5001
cd email-app && npm run dev -- --port 5002
Access the applications:

Open the following URLs in your browser:

Head Wrapper: http://localhost:5000

Chat App: http://localhost:5001

Email App: http://localhost:5002


## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast build tool for modern web development.
- **Module Federation**: Plugin for sharing code between applications at runtime.
- **CSS**: For styling and theming.
- **Git**: Version control system.
- **GitHub**: Hosting the repository.

## Key Architectural Decisions & Trade-offs

-I chose Module Federation Vite to enable independent deployment of micro frontends.
This allows each micro frontend to be developed, tested, deployed separately.
This also allows the addition of any new microfrontend , scalability POV.
**Trade-off**: The initial setup is a bit complex, as the new version of react, and other packages have just arrived, so there is not much knowledge about how to do this , it takes time and research to make this microfrontend work in the first place. After that its smooth.

-The host app (head_wrapper) manages the design system and exposes shared UI components.
Chat and Email apps consume these components via Module Federation, ensuring a consistent UI.
**Trade-off**: If a shared component breaks, it could affect multiple micro-frontends at once.

-Each micro-frontend runs on its own port and is independently built.
This improves modularity, making updates/deployments easier.
**Trade-off**: Might lead to slightly higher load times if a micro-frontend isn’t preloaded.

-I chose Vite over Webpack for faster builds and hot module reloading.
Works well with React and improves local development speed.
**Trade-off**: Some advanced Module Federation features are better supported in Webpack.

-I have used traditional CSS for styling across all micro-frontends for consistency
This keeps styles modular and avoids conflicts between micro-apps
**Trade-off**: Some Developers prefer taiwind css or UI libraries for development.

<<<<<<< HEAD
=======
-I have used zustand and window events for the local communication, but we can use socket/ or message queue for the production.

>>>>>>> 599cf48 (added zustand and window events)
The testing is must before the deployment.(which is not included in this till now).

## How this architecture can support the addition of new microfrontend

This architecture is designed to support future micro-frontends with minimal effort. By leveraging Webpack Module Federation, new applications can be integrated seamlessly without modifying the existing host or other micro-frontends.

The steps are as:
1. Create a new micro frontend. Configure the vite.config.js
2. Expose the micro-frontend by defining remoteEntry.
3. Add the new micro fronend in the host by updating the remote section of the host's vite.config.js
4. Consue the shared components of the host in the new micro frontend.
5. Ensure Iner-App communication with event bus.
6. Update the host application to recognize the new remote without needing a full redeployment.


## Deployment 
We can do this simply as:
1. Creating build for each
2. Updating the remote origin with the new url in each vite.config.js.
3. Make it live on any hosting provider.

Thank you for reading and implementing (if you did), 
Regards,
For any queries email me on ranagaurav687@gmail.com