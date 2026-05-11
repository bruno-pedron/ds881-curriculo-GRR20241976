# Estrutura do Projeto Vite

## 📁 Organização de Pastas

```
src/
├── js/
│   ├── main.js          # Ponto de entrada (importa todos os módulos)
│   ├── theme.js         # Gerenciamento de tema (dark/light)
│   ├── animations.js    # Animações de scroll e reveal
│   ├── canvas.js        # Animação do canvas no hero
│   ├── modal.js         # Gerenciamento de modais
│   └── utils.js         # Funções utilitárias compartilhadas
└── css/
    └── styles.css       # Estilos customizados
```

## 🚀 Como Funciona

### main.js (Entry Point)
- Importa todos os módulos JS
- Importa arquivo de estilos
- Inicializa aplicação quando o DOM está pronto
- Executa cada módulo na ordem correta

### Módulos Disponíveis

#### `theme.js`
Gerencia o tema claro/escuro:
- `initTheme()` - Inicializa o toggle de tema e persiste em localStorage

#### `animations.js`
Gerencia animações de scroll:
- `initScrollReveal()` - Usa Intersection Observer para revelar elementos

#### `canvas.js`
Anima o fundo do hero:
- `initCanvasAnimation()` - Cria partículas conectadas com linhas

#### `modal.js`
Gerencia modais de imagem:
- `initModals()` - Expõe `window.openModal()` e `window.closeModal()`

#### `utils.js`
Funções auxiliares:
- `smoothScroll()` - Suaviza scroll para links âncora
- `log()` - Log customizado para debug

## 🔄 Fluxo de Execução

1. Vite carrega `index.html`
2. HTML carrega script module `/src/js/main.js`
3. Vite resolve imports
4. DOMContentLoaded dispara
5. `main.js` chama todos os `init*` functions
6. Aplicação está pronta!

## 📦 Estrutura Para Docker

Esta estrutura é pronta para containerização:
- **node_modules/**: Instalado a partir do package.json
- **dist/**: Compilação do Vite (gerado pelo `npm run build`)
- **src/**: Código-fonte (montado como volume no container)
- **vite.config.js**: Configurado para rodar em 0.0.0.0:8080 (aceita conexões de fora do container)

## 🛠 Adicionando Novos Módulos

1. Crie novo arquivo em `src/js/novomodulo.js`
2. Exporte função `export function initNovoModulo() { ... }`
3. Importe em `main.js`: `import { initNovoModulo } from './novomodulo.js'`
4. Chame em DOMContentLoaded: `initNovoModulo()`
