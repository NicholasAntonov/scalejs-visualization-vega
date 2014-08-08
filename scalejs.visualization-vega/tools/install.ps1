param($installPath, $toolsPath, $package, $project)

$project |
	Add-Paths "{
		'scalejs.visualization-vega' : 'Scripts/scalejs.visualization-vega-$($package.Version)'
	}" |
	Add-ScalejsExtension 'scalejs.visualization-vega' |
	Out-Null