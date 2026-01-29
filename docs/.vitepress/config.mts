import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Dt-utils',
    description: '袋鼠云前端常用工具库',
    base: '/dt-utils/',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [{ text: '文档', link: '/quickstart' }],
        sidebar: [
            {
                text: '简介',
                items: [
                    { text: '快速开始', link: '/quickstart' },
                    { text: '贡献指南', link: '/contribution' },
                ],
            },
            {
                text: '工具方法',
                link: '/api/globals',
                items: [...require('../api/typedoc-sidebar.json')],
            },
            {
                text: 'CHANGELOG',
                link: '/api/_media/CHANGELOG',
            },
        ],

        socialLinks: [{ icon: 'github', link: 'https://github.com/DTStack/dt-utils' }],
    },
});
