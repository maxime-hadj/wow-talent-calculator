import React from 'react'
//import _ from 'lodash'
import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { talents } from './talents'
import Talent from './Talent'
import CellComponent from './CellComponent'
import './index.css'

function DisplayTree() {
		const [isHovering, setIsHovering] = useState(false)
		const handleMouseOver = () => {
			setIsHovering(true)
		}
		const handleMouseOut = () => {
			setIsHovering(false)
		}
	return (
<body oncontextmenu="return false;">
	<div className="container">
		<header>
			<div id="totalPoints">
				51
			</div>
		</header>
		{talents.slice(1).map((talent) => {
			console.log(talents[1])
				return (
		<div className="tree tree_one">
			<header className="tree_header" id="tree_one_header">
				0
			</header>
			<div className="tree_tiers">
				<div className="tier unlocked" data-unlock="5" id="tierOne">
					<div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="item one nature_wispsplode button" data-max="3">
						{isHovering && <Talent key={talent.id} {...talents[0]}></Talent>}
					</div>
					<div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="item two fire_fireball button" data-max="2">
						{isHovering && <Talent key={talent.id} {...talents[1]}></Talent>}
					</div>
					<div className="item three racial_bloodrage button" data-max="5"></div>
					<div className="item four"></div>
				</div>
				<div className="tier tier_two" data-unlock="10">
					<div className="item one nature_stoneclawtotem" data-max="2"></div>
					<div className="item two nature_spiritarmor" data-max="3"></div>
					<div className="item three"></div>
					<div className="item four fire_immolation" data-max="3"></div>
				</div>
				<div className="tier tier_three">
					<div className="item one shadow_manaburn" data-max="1"></div>
					<div className="item two frost_frostward" data-max="5"></div>
					<div className="item three nature_callstorm" data-max="5"></div>
					<div className="item four"></div>
				</div>
				<div className="tier tier_four">
					<div className="item one fire_sealoffire" data-max="2"></div>
					<div className="item two nature_eyeofthestorm" data-max="3"></div>
					<div className="item three"></div>
					<div className="item four fire_elementaldevastation" data-max="3"></div>
				</div>
				<div className="tier tier_five">
					<div className="item one nature_stormreach" data-max="2"></div>
					<div className="item two fire_volcano" data-max="1"></div>
					<div className="item three"></div>
					<div className="item four"></div>
				</div>
				<div className="tier tier_six">
					<div className="item one"></div>
					<div className="item two"></div>
					<div className="item three lightning_lightningbolt" data-max="5"></div>
					<div className="item four"></div>
				</div>
				<div className="tier tier_seven">
					<div className="item one"></div>
					<div className="item two nature_wispheal" data-max="1"></div>
					<div className="item three"></div>
					<div className="item four"></div>
				</div>
			</div>
		</div>
		)})}
		<div className="tree tree_two">
			<header className="tree_header" id="tree_two_header">
				0
			</header>
			<div className="tree_tiers">
				<div className="tier tier_one unlocked">
					<div className="item one"></div>
					<div className="item two shadow_grimward" data-max="5"></div>
					<div className="item three inv_shield" data-max="5"></div>
					<div className="item four"></div>
				</div>
				<div className="tier tier_two">
					<div className="item one nature_stoneskintotem" data-max="2"></div>
					<div className="item two thunderbolt" data-max="5"></div>
					<div className="item three nature_spiritwolf" data-max="2"></div>
					<div className="item four nature_lightningshield" data-max="3"></div>
				</div>
				<div className="tier tier_three">
					<div className="item one nature_earthbindtotem" data-max="2"></div>
					<div className="item two"></div>
					<div className="item three inv_axe" data-max="1"></div>
					<div className="item four nature_mirrorimage" data-max="5"></div>
				</div>
				<div className="tier tier_four">
					<div className="item one"></div>
					<div className="item two ghoulfrenzy" data-max="5"></div>
					<div className="item three holy_devotion" data-max="5"></div>
					<div className="item four"></div>
				</div>
				<div className="tier tier_five">
					<div className="item one fire_enchantweapon" data-max="2"></div>
					<div className="item two fire_flametounge" data-max="3"></div>
					<div className="item three parry" data-max="1"></div>
					<div className="item four"></div>
				</div>
				<div className="tier tier_six">
					<div className="item one"></div>
					<div className="item two"></div>
					<div className="item three hunter_swiftstrike" data-max="5"></div>
					<div className="item four"></div>
				</div>
				<div className="tier tier_seven">
					<div className="item one"></div>
					<div className="item two holy_sealofmight" data-max="1"></div>
					<div className="item three"></div>
					<div className="item four"></div>
				</div>
			</div>
		</div>
		<div className="tree tree_three">
			<header className="tree_header" id="tree_three_header">
				0
			</header>
			<div className="tree_tiers">
				<div className="tier tier_one unlocked">
					<div className="item one"></div>
					<div className="item two nature_magicimmunity" data-max="5"></div>
					<div className="item three frost_manarecharge" data-max="5"></div>
					<div className="item four"></div>
				</div>
				<div className="tier tier_two">
					<div className="item one nature_reincarnation" data-max="2"></div>
					<div className="item two nature_undyingstrength" data-max="3"></div>
					<div className="item three nature_moonglow" data-max="5"></div>
					<div className="item four"></div>
				</div>
				<div className="tier tier_three">
					<div className="item one frost_stun" data-max="3"></div>
					<div className="item two nature_healingwavelesser" data-max="5"></div>
					<div className="item three nature_nullward" data-max="1"></div>
					<div className="item four nature_healingtouch" data-max="3"></div>
				</div>
				<div className="tier tier_four">
					<div className="item one"></div>
					<div className="item two nature_manaregentotem" data-max="5"></div>
					<div className="item three nature_tranquility" data-max="5"></div>
					<div className="item four"></div>
				</div>
				<div className="tier tier_five">
					<div className="item one nature_healingway" data-max="3"></div>
					<div className="item two"></div>
					<div className="item three nature_ravenform" data-max="1"></div>
					<div className="item four"></div>
				</div>
				<div className="tier tier_six">
					<div className="item one"></div>
					<div className="item two"></div>
					<div className="item three frost_wizardmark" data-max="5"></div>
					<div className="item four"></div>
				</div>
				<div className="tier tier_seven">
					<div className="item one"></div>
					<div className="item two frost_summonwaterelemental" data-max="1"></div>
					<div className="item three"></div>
					<div className="item four"></div>
				</div>
			</div>
		</div>
	</div>
</body>
	)
}


const container = document.getElementById('root')
const root = createRoot(container)
root.render(<DisplayTree />)

