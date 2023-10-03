import React from 'react'
import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { talents } from './talents'
import StyledTalent from './StyledTalent'
import './index.css'

function DisplayTree() {
	
	/* hover hook */
	const [isHovering, setIsHovering] = useState(null)
  const handleMouseOver = (num) => {
    setIsHovering(num)
  }
  const handleMouseOut = () => {
    setIsHovering(null)
  }
	
	/* onclick hook */
	const [counter, setCounter] = useState(0)
	const incrementCounter = () => {
		setCounter(counter + 1)
	}
	const decrementCounter = () => {
		if (counter !== 0) {
			setCounter(counter - 1)
		}
	}
	
	return (
<body onContextMenu={(e)=>{e.preventDefault()}}>
	<div className="container">
		<header>
			<div id="totalPoints">
				51
			</div>
		</header>
		{talents.slice(1).map((talent) => {
			// console.log(counter)
				return (
		<div className="tree tree_one">
			<header className="tree_header" id="tree_one_header">
				0
			</header>
			<div className="tree_tiers">
				<div className="tier unlocked" data-unlock="5" id="tierOne">
					<div onClick={incrementCounter} style={{userSelect: 'none'}} onContextMenu={decrementCounter} onMouseOver={()=>handleMouseOver(1)} onMouseLeave={handleMouseOut} className="item one nature_wispsplode button" data-max="3">
						{isHovering === 1 && <StyledTalent key={talent.id1} {...talents.find(talent => talent.id === 1)}></StyledTalent>} {<div className="points">{counter}</div>}
					</div>
					<div onClick={incrementCounter} style={{userSelect: 'none'}} onContextMenu={decrementCounter} onMouseOver={()=>handleMouseOver(2)} onMouseLeave={handleMouseOut} className="item two fire_fireball button" data-max="2">
						{isHovering === 2 && <StyledTalent key={talent.id2} {...talents.find(talent => talent.id === 2)}></StyledTalent>} {<div className="points">{counter}</div>}
					</div>
					<div onClick={incrementCounter} style={{userSelect: 'none'}} onContextMenu={decrementCounter} onMouseOver={()=>handleMouseOver(3)} onMouseLeave={handleMouseOut} className="item three racial_bloodrage button" data-max="5">
						{isHovering === 3 && <StyledTalent key={talent.id3} {...talents.find(talent => talent.id === 3)}></StyledTalent>} {<div className="points">{counter}</div>}
					</div>
					<div className="item four"></div>
				</div>
				<div className="tier tier_two" data-unlock="10">
					<div onClick={incrementCounter} style={{userSelect: 'none'}} onContextMenu={decrementCounter} onMouseOver={()=>handleMouseOver(4)} onMouseLeave={handleMouseOut} className="item one nature_stoneclawtotem" data-max="2">
						{isHovering === 4 && <StyledTalent key={talent.id4} {...talents.find(talent => talent.id === 4)}></StyledTalent>} <div className="points">{counter}</div>
					</div>
					<div onClick={incrementCounter} style={{userSelect: 'none'}} onContextMenu={decrementCounter} onMouseOver={()=>handleMouseOver(5)} onMouseLeave={handleMouseOut} className="item two nature_spiritarmor" data-max="3">
						{isHovering === 5 && <StyledTalent key={talent.id5} {...talents.find(talent => talent.id === 5)}></StyledTalent>} <div className="points">{counter}</div>
					</div>
					<div className="item three"></div>
					<div onClick={incrementCounter} style={{userSelect: 'none'}} onContextMenu={decrementCounter} onMouseOver={()=>handleMouseOver(6)} onMouseLeave={handleMouseOut} className="item four fire_immolation" data-max="3">
						{isHovering === 6 && <StyledTalent key={talent.id6} {...talents.find(talent => talent.id === 6)}></StyledTalent>} <div className="points">{counter}</div>
					</div>
				</div>
				<div className="tier tier_three">
					<div onClick={incrementCounter} style={{userSelect: 'none'}} onContextMenu={decrementCounter} onMouseOver={()=>handleMouseOver(7)} onMouseLeave={handleMouseOut} className="item one shadow_manaburn" data-max="1">
						{isHovering === 7 && <StyledTalent key={talent.id7} {...talents.find(talent => talent.id === 7)}></StyledTalent>} <div className="points">{counter}</div>
					</div>
					<div onClick={incrementCounter} style={{userSelect: 'none'}} onContextMenu={decrementCounter} onMouseOver={()=>handleMouseOver(8)} onMouseLeave={handleMouseOut} className="item two frost_frostward" data-max="5">
						{isHovering === 8 && <StyledTalent key={talent.id8} {...talents.find(talent => talent.id === 8)}></StyledTalent>} <div className="points">{counter}</div>
					</div>
					<div onClick={incrementCounter} style={{userSelect: 'none'}} onContextMenu={decrementCounter} onMouseOver={()=>handleMouseOver(9)} onMouseLeave={handleMouseOut} className="item three nature_callstorm" data-max="5">
						{isHovering === 9 && <StyledTalent key={talent.id8} {...talents.find(talent => talent.id === 9)}></StyledTalent>} <div className="points">{counter}</div>
					</div>
					<div className="item four"></div>
				</div>
				<div className="tier tier_four">
					<div className="item one"></div>
					<div onClick={incrementCounter} style={{userSelect: 'none'}} onContextMenu={decrementCounter} onMouseOver={()=>handleMouseOver(10)} onMouseLeave={handleMouseOut} className="item two fire_sealoffire" data-max="2">
						{isHovering === 10 && <StyledTalent key={talent.id8} {...talents.find(talent => talent.id === 10)}></StyledTalent>} <div className="points">{counter}</div>
					</div>
					<div onClick={incrementCounter} style={{userSelect: 'none'}} onContextMenu={decrementCounter} onMouseOver={()=>handleMouseOver(11)} onMouseLeave={handleMouseOut} className="item three nature_eyeofthestorm" data-max="3">
						{isHovering === 11 && <StyledTalent key={talent.id8} {...talents.find(talent => talent.id === 11)}></StyledTalent>} <div className="points">{counter}</div>
					</div>
					<div className="item four"></div>
				</div>
				<div className="tier tier_five">
					<div className="item one"></div>
					<div onClick={incrementCounter} style={{userSelect: 'none'}} onContextMenu={decrementCounter} onMouseOver={()=>handleMouseOver(12)} onMouseLeave={handleMouseOut} className="item two nature_stormreach" data-max="2">
						{isHovering === 12 && <StyledTalent key={talent.id8} {...talents.find(talent => talent.id === 12)}></StyledTalent>} <div className="points">{counter}</div>
					</div>
					<div onClick={incrementCounter} style={{userSelect: 'none'}} onContextMenu={decrementCounter} onMouseOver={()=>handleMouseOver(13)} onMouseLeave={handleMouseOut} className="item three fire_volcano" data-max="1">
						{isHovering === 13 && <StyledTalent key={talent.id8} {...talents.find(talent => talent.id === 13)}></StyledTalent>} <div className="points">{counter}</div>
					</div>
					<div className="item four"></div>
				</div>
				<div className="tier tier_six">
					<div className="item one"></div>
					<div onClick={incrementCounter} style={{userSelect: 'none'}} onContextMenu={decrementCounter} onMouseOver={()=>handleMouseOver(14)} onMouseLeave={handleMouseOut} className="item two lightning_lightningbolt" data-max="5">
						{isHovering === 14 && <StyledTalent key={talent.id8} {...talents.find(talent => talent.id === 14)}></StyledTalent>} <div className="points">{counter}</div>
					</div>
					<div className="item three"></div>
					<div className="item four"></div>
				</div>
				<div className="tier tier_seven">
					<div className="item one"></div>
					<div onClick={incrementCounter} style={{userSelect: 'none'}} onContextMenu={decrementCounter} onMouseOver={()=>handleMouseOver(15)} onMouseLeave={handleMouseOut} className="item two nature_wispheal" data-max="1">
						{isHovering === 15 && <StyledTalent key={talent.id8} {...talents.find(talent => talent.id === 15)}></StyledTalent>} <div className="points">{counter}</div>
					</div>
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


