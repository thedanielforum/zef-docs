module.exports = {
	mainSidebar: [
		{
			type: "category",
			label: "Introduction",
			items: [
				"introduction/overview",
				"introduction/installation",
				"introduction/quick-start",
			],
		},
		{
			type: "category",
			label: "How-To",
			items: [
				{
					type: "category",
					label: "Traverse Graphs",
					items: ["how-to/traverse-basic"],
				},
				{
					type: "category",
					label: "GraphQL",
					items: [
						"how-to/graphql-basic",
						// "how-to/graphql-automatic",
						"how-to/graphql-manual",
						"how-to/graphql-simplegql",
					],
				},
				{
					type: "category",
					label: "Import From File",
					items: [
						"how-to/import-csv",
						"how-to/imgui-csv",
						"how-to/import-graph-formats",
					],
				},
				"how-to/add-to-a-graph",
				"how-to/share-graphs",
				"how-to/use-zef-networkx",
				"how-to/manage-login",
			],
		},
		{
			type: "category",
			label: "Explanations",
			items: ["explanations/privileges", "explanations/blob-structure"],
		},
		{
			type: "category",
			label: "Tutorials",
			// items: [
			//   {
			//     type: "autogenerated",
			//     dirName: "tutorials/budgeter",
			//   },
			// ],
			items: [
				"tutorials/basic/employee-database",
				"tutorials/budgeter/budgeter",
			],
		},
		{
			type: "category",
			label: "Reference",
			items: [
				"reference/glossary",
				"reference/cheatsheet-comprehensive",
				"reference/zef-ops",
			],
		},
		// {
		// 	type: "doc",
		// 	label: "Operator Reference",
		// 	id: "zef-ops",
		// },
		{
			type: "category",
			label: "Configuration",
			items: [
				"configuration-messages",
				"configuration-env",
				"configuration-client-state",
				"configuration-connections",
			],
		},
		{
			type: "doc",
			label: "FAQ",
			id: "faq",
		},
	],
	developerSidebar: [
		{
			type: "category",
			label: "Internal",
			link: {
				type: "generated-index",
				title: "Internal guides",
				description: "Autogenerated index page for internal",
				slug: "/internal",
			},
			items: [
				"internal/updating-global-tokens",
				"internal/importing-submodules",
			],
		},
	],
};
