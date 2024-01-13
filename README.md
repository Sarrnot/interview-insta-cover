# Poznámky k ukázce kódu

Vzhledem k jednoduchosti zadání jsem se rozhodl zpracovat dvě verze.

## solution_1

Myšlenka za prvním řešením je vyhnout se "overengineerovaní" jednoduché aplikace, u které není vidina toho, že by se aplikace měla do budoucna dále rozrůstat, upravovat apod. a vytvořit jen nezbytný minimalistický setup.

## solution_2

Druhé řešení ukazuje, jakým způsobem bych například přistupoval k tvorbě takovéto aplikace v opačném případě. Tzn. v případě, že se aplikace bude rozrůstat, dále vyvíjet, je zapotřebí, aby byla jednoduše administrovatelná apod.

Některé části jsem cíleně neřešil, protože se jedná pouze o rychlou ukázku kódu. Je tím myšleno např.: loading skeletons, SEO, metadata, accessibility, flexibilnější systém řazení, design a další.

Spuštění databáze: `docker compose up`

Nahrání fixtures: `npm run fixtures`

Spuštění aplikace: `npm run dev` nebo `npm run build && npm run start`
