import React from 'react'
import { createRoot } from 'react-dom/client'
import { talents } from './talents'
import CellComponent from './CellComponent'
import './index.css'

function DisplayTree() {
	return (
<body oncontextmenu="return false;">
	<div className="container">
		<header>
			<div id="totalPoints">
				51
			</div>
			<div className="tree_one">
				{talents.map((talent) => {
					return (
				<div style="grid-area: 1 / 1;"><CellComponent key={talent.id}></CellComponent></div>
				)})}
			</div>
		</header>
	</div>
</body>
	)
}


const container = document.getElementById('root')
const root = createRoot(container)
root.render(<DisplayTree />)


/*** data ***/
{
	id: 3,
	name: 'aaaaaaaa',
	desc: 'bbbbbbbbbbb',
	cell: 4,
	line: 1,
},
{
	id: 4,
	name: 'ccccccccccccc',
	desc: 'ddddddddddddddd',
	cell: 1,
	line: 2,
},
{   
	id: 5,
	name: 'eeeeeeeeeeee',
	desc: 'ffffffffff',
	cell: 2,
	line: 2,
},
{
	id: 6,
	name: 'gggggggggggggg',
	desc: 'hhhhhhhhhhhh.',
	cell: 3,
	line: 2,
},
