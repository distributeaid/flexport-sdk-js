import * as ts from 'typescript'

const resultFile = ts.createSourceFile(
	'stub.ts',
	'',
	ts.ScriptTarget.Latest,
	/*setParentNodes*/ false,
	ts.ScriptKind.TS,
)
const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed })

export const printNode = (node: ts.Node) =>
	printer.printNode(ts.EmitHint.Unspecified, node, resultFile)
