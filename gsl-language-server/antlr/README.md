# Gsl.g4

This is an antlr4 grammar file. It includes both the lexer grammar and the parser grammar. It is used by the gsl vscode language server in order to overcome challenges that are difficult with text matching alone, e.g. regexes.

# Generating Antlr4 TypeScript

Generating the antlr4 typescript files is done via an npm run script - see `package.json` in the root directory. This operation requires a JRE, but a JRE is not subsequently needed until the grammar changes (which should become an infrequent occurrence in the fullness of time). The generated ts files should be checked in so that it can be consumed by the extension. The generated ts files should never be edited directly - instead the grammar should be modified and the files regenerated.
