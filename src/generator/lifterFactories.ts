import * as ts from 'typescript'
import { Item } from './factories'

export const makeLifter = (name: string, schema: Item) => {
	const lifter = ts.createVariableStatement(
		[ts.createToken(ts.SyntaxKind.ExportKeyword)],
		ts.createVariableDeclarationList(
			[
				ts.createVariableDeclaration(
					`lift${name}`,
					undefined,
					ts.createArrowFunction(
						undefined,
						undefined,
						[
							ts.createParameter(
								undefined,
								undefined,
								undefined,
								ts.createIdentifier('original'),
								undefined,
								ts.createTypeReferenceNode(name, []),
							),
						],
						undefined,
						undefined,
						ts.createBlock(
							[ts.createReturn(ts.createIdentifier('original'))],
							true,
						),
					),
				),
			],
			ts.NodeFlags.Const,
		),
	)

	const comment = [
		'Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.',
	]
	if (schema.description) {
		comment.push(schema.description) // FIXME: remove line and make actual use of schema
	}
	ts.addSyntheticLeadingComment(
		lifter,
		ts.SyntaxKind.MultiLineCommentTrivia,
		`*\n * ${comment.join('\n * ')} \n `,
		true,
	)

	return {
		lifter,
		deps: [],
	}
}
