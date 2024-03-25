import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        define: {
            'process.env.CLIENT_ID': JSON.stringify(env.CLIENT_ID),
            'process.env.REDIRECT_URI': JSON.stringify(env.REDIRECT_URI),
        },
    };
});

