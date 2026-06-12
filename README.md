# lovu 💝

Site em parallax contando a nossa história, momento a momento.

**Site no ar:** https://gustavoeriick.github.io/lovu/

## Como personalizar

Você só precisa mexer em duas coisas:

### 1. Os textos — arquivo [`momentos.js`](momentos.js)

- `CASAL` — os nomes que aparecem na capa.
- `INICIO_DO_NAMORO` — a data usada no contador de "dias juntos" do final.
- `MOMENTOS` — a lista de momentos. Cada um tem `foto`, `data`, `titulo` e `texto`.
  Pode adicionar quantos momentos quiser: é só copiar um bloco `{ ... },` e editar.
- `MENSAGEM_FINAL` — a mensagem da última tela.

### 2. As fotos — pasta [`fotos/`](fotos/)

Coloque as fotos com os nomes usados em `momentos.js` (`momento-1.jpg`, `momento-2.jpg`, ...).
Fotos na horizontal ficam melhores. Enquanto uma foto não existir, o site mostra um
fundo decorado no lugar — nada quebra.

## Como publicar as mudanças

```bash
git add .
git commit -m "Atualiza momentos"
git push
```

O GitHub Pages atualiza o site sozinho em ~1 minuto após o push.

## Como testar localmente

Abra o `index.html` direto no navegador, ou rode um servidor simples:

```bash
python -m http.server 8000
# e acesse http://localhost:8000
```
