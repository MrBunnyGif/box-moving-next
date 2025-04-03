import type { NextConfig } from "next";
// TODO: transform in PWA
const nextConfig: NextConfig = {
  output: 'export', // Isso é essencial para gerar arquivos estáticos
  distDir: 'out',   // Especifica a pasta de saída (Netlify espera isso)
  images: {
    unoptimized: true, // Necessário quando usando 'output: export'
  },
  // Outras configurações específicas do seu projeto podem vir aqui
};

export default nextConfig;