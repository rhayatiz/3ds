import './bootstrap';
import React from 'react'
import {createRoot} from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'
import { MantineProvider } from '@mantine/core';

createInertiaApp({
    // Below you can see that we are going to get all React components from resources/js/Pages folder
    resolve: (name) => {
        return resolvePageComponent(`./Pages/${name}.jsx`,import.meta.glob('./Pages/**/*.jsx'))
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <MantineProvider withGlobalStyles withNormalizeCSS>
              <App {...props} />
            </MantineProvider>
        )
    },
})