# Rotinas de Automatização em JavaScript (Node.js)

10 scripts práticos de automação, feitos para rodar via terminal com Node.js (`node nome-do-arquivo.js`). Alguns pedem Node.js 18+ (usam `fetch` nativo) — para checar sua versão, rode `node -v`.

## Índice

| # | Rotina | Arquivo | Requer internet? | Argumentos |
|---|--------|---------|:---:|---|
| 1 | Mostrar nome do usuário do sistema | `rotina01-mostrar-nome.js` | Não | — |
| 2 | Apresentar hora do PC | `rotina02-hora-pc.js` | Não | — |
| 3 | Apresentar hora via servidor global | `rotina03-hora-servidor-global.js` | Sim | — |
| 4 | Uso de processamento (CPU) | `rotina04-uso-processamento.js` | Não | — |
| 5 | Uso de memória RAM | `rotina05-uso-memoria.js` | Não | — |
| 6 | Verificar conexão com a internet | `rotina06-verificar-internet.js` | Sim | — |
| 7 | Descobrir IP público | `rotina07-ip-publico.js` | Sim | — |
| 8 | Listar arquivos de uma pasta | `rotina08-listar-arquivos.js` | Não | `[pasta]` (opcional) |
| 9 | Renomear arquivos em lote | `rotina09-renomear-em-lote.js` | Não | `[pasta] [prefixo]` |
| 10 | Backup automático de uma pasta | `rotina10-backup-automatico.js` | Não | `<origem> [destino]` |

## Como executar

```bash
node rotina01-mostrar-nome.js
node rotina08-listar-arquivos.js ./minha-pasta
node rotina10-backup-automatico.js ./documentos ./backups
```

Se o Node.js não estiver instalado, baixe em https://nodejs.org.
