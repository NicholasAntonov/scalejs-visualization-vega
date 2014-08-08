param($installPath, $toolsPath, $package, $project)

$project |
	Remove-Paths 'scalejs.visualization-vega' |
	Remove-ScalejsExtension 'scalejs.visualization-vega' |
	Out-Null
