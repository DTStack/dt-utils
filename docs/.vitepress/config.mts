import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Dt-utils',
    description: '袋鼠云前端常用工具库',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Guide', link: '/quickstart' },
            { text: 'Documents', link: '/api/globals' },
        ],
        sidebar: [
            {
                text: 'Guide',
                items: [
                    { text: 'Quick Start', link: '/quickstart' },
                    { text: 'contribution', link: '/contribution' },
                ],
            },
            {
                text: 'Functions',
                link: '/api/globals',
                items: [...require('../api/typedoc-sidebar.json')],
            },
            {
                text: 'CHANGELOG',
                link: '/api/_media/CHANGELOG',
            },
        ],

        socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    },
});
