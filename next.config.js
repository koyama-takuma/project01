/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/config_redirect', // 元のURL
                destination: 'https://www.google.com', // リダイレクト先のURL
                permanent: false, // 永続的かどうかのフラグ
            }
        ]
    }
}

module.exports = nextConfig
