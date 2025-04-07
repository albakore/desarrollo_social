type CountryMapType = React.FC<CountryMapProps>

type CountryMapProps = {
	selected?: string[] = []
	clickEvent?: MouseEvent<SVGPathElement, MouseEvent>
	hoverEvent?: MouseEvent<SVGPathElement, MouseEvent>
}