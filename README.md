# Shoutify 2.0

Shoutify 2.0 is a web application that allows users to create journal entries for their recently listened to songs or favorite songs on Spotify. With Shoutify, users can easily keep track of their music experiences and thoughts in a journal format.

## Features
- Spotify Integration: Connect your Spotify account to Shoutify to access your recently listened to songs and favorite tracks.
- Journal Entries: Write journal entries and associate them with specific songs from Spotify.
- Material UI: User-friendly interface built with Material UI for a modern and intuitive user experience.
- Responsive Design: Shoutify is designed to work seamlessly across various devices and screen sizes.

## Usage
Before using the following project, one must create an application in [Spotify's API dashboard](https://developer.spotify.com/). In the application, add `http://localhost:3000` as a redirect uri in the project.
1. Clone the repository: `git clone https://github.com/victor-hugo-dc/Shoutify2.0.git`
2. Navigate to the project directory: `cd Shoutify2.0`
3. Install dependencies: `npm install`
4. Populate your environment variables: `mv .env.example .env` and then write your app's client ID in the environment file.
5. Start the development server: `npm run dev`
6. Additionally, you need to spin up the JSON server to watch the db.json file and listen on port 4000. Run the following command in a separate terminal window: `json-server --watch db.json --port 4000`
Once both the development server and JSON server are running, you can access Shoutify by navigating to http://localhost:3000 in your web browser.
