# Próxima etapa: fotografias oficiais da A7

A revisão editorial está implementada. As fotografias atuais permanecem provisoriamente no site; nenhuma imagem foi gerada, obtida de banco de imagens ou substituída nesta etapa. A direção definitiva é lifestyle brasileiro contemporâneo: pessoas adultas, amizades, música no cotidiano, ambientes urbanos e sociais, espontaneidade e cores equilibradas. Evitar estética rural/nostálgica e predominância de shows.

## Arquivos aguardando o proprietário

Todos os caminhos abaixo são relativos à raiz do projeto. Substituir os arquivos existentes pelos materiais aprovados mantém as referências dos componentes, sem alterar a arquitetura.

| Uso | Caminho | Proporção de entrega recomendada | Observações |
| --- | --- | --- | --- |
| Hero 1 | `src/assets/hero_01.webp` | 16:9, 1920 × 1080 | Ativo no slideshow |
| Hero 2 | `src/assets/hero_02.webp` | 16:9, 1920 × 1080 | Ativo no slideshow |
| Hero 3 | `src/assets/hero_03.webp` | 16:9, 1920 × 1080 | Reservado em disco; não está no slideshow atual |
| Hero 4 | `src/assets/hero_04.webp` | 16:9, 1920 × 1080 | Reservado em disco; não está no slideshow atual |
| Hero 5 | `src/assets/hero_05.webp` | 16:9, 1920 × 1080 | Ativo no slideshow |
| Hero 6 | `src/assets/hero_06.webp` | 16:9, 1920 × 1080 | Ativo no slideshow |
| Os Hits do Momento | `src/assets/content_01.webp` | 1:1, 1200 × 1200 | Card e respectivo modal |
| Só Dá Sertanejo | `src/assets/content_02.webp` | 1:1, 1200 × 1200 | Card e respectivo modal |
| Aumenta o Som! | `src/assets/content_03.webp` | 1:1, 1200 × 1200 | Card e respectivo modal |
| Sertanejo Pra Curtir | `src/assets/content_04.webp` | 1:1, 1200 × 1200 | Card e respectivo modal |
| Na Batida da Galera | `src/assets/content_05.webp` | 1:1, 1200 × 1200 | Card e respectivo modal |
| Sua Rádio, Seu Ritmo | `src/assets/content_06.webp` | 1:1, 1200 × 1200 | Card e respectivo modal |
| Sobre a rádio | `src/assets/about_studio.webp` | 4:3, 1200 × 900 | Nome técnico preservado; a nova foto pode seguir a direção lifestyle |
| Enquanto Descansa | `src/assets/momento_descansa.webp` | 4:5, 1200 × 1500 | Composição adequada ao card responsivo |
| Na Estrada | `src/assets/momento_estrada2.webp` | 4:5, 1200 × 1500 | Composição adequada ao card responsivo |
| Na Festa | `src/assets/momento_festa.webp` | 4:5, 1200 × 1500 | Encontro entre amigos; sem sugerir evento produzido pela rádio |
| Fundo exclusivo do player | `src/assets/player_show.webp` | 16:9, 1920 × 1080 | Foto independente de todas as fotos do hero e das outras seções |

## Integração quando os arquivos forem entregues

1. Incorporar somente os materiais fornecidos/aprovados, com nomes e caminhos acima. Não sobrescrever logo, favicon ou `src/assets/app-print.webp`.
2. Exportar WebP com qualidade adequada e tamanho otimizado, sem adicionar filtros uniformes ou texto às fotografias.
3. Manter os assuntos essenciais no centro: o hero sofre corte estreito no mobile; os cards e modais recortam a mesma foto em alturas diferentes; o player usa uma faixa panorâmica mais baixa que 16:9.
4. Conferir desktop e mobile no layout real, com os overlays e textos existentes; preservar `object-cover`, dimensões reservadas e lazy loading fora da área inicial.
5. Atualizar as descrições alternativas conforme o conteúdo efetivamente fornecido. Não antecipar descrições de fotos ainda inexistentes.
6. Manter os quatro slides ativos nesta revisão. A inclusão das fotos 3 e 4 deve ser tratada na etapa visual, após recebimento e aprovação dos materiais.

A imagem `public/og-image.webp` e seus metadados válidos permanecem. Uma eventual nova arte de compartilhamento deve conservar 1200 × 630 e o conteúdo essencial no quadrado central. Esta revisão não cria uma nova arte.

Logo oficial, imagem atual do aplicativo, integração de streaming, links, navegação, cores, animações e workflow estão fora da substituição fotográfica.

## Arquivos da revisão editorial

- `src/components/HeroSlideshow.tsx`: descrição do hero e descrições alternativas das fotos atuais.
- `src/components/StreamingPlayer.tsx`: título e subtítulo; iframe e funcionamento preservados.
- `src/components/ContentCards.tsx`: título da seção, seis títulos, resumos e textos completos dos modais.
- `src/components/AboutSection.tsx`: texto institucional e complementar.
- `src/components/MomentsGrid.tsx`: descrições dos três momentos.
- `src/components/BenefitsSection.tsx`: textos dos quatro benefícios.
- `src/components/AppDownload.tsx`: apresentação do aplicativo e descrição alternativa da captura atual.
- `src/components/Footer.tsx`: frase institucional abaixo do slogan.
- `index.html`: descrições SEO, Open Graph, Twitter Cards e JSON-LD coerentes; descrição alternativa da OG atual.
- `docs/novas-imagens.md`: este guia de integração da próxima etapa.
